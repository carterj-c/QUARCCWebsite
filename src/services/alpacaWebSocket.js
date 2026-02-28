/**
 * Alpaca WebSocket Service for live trading data
 * 
 * Connect to Alpaca's paper trading API to stream:
 * - Account updates (equity, P/L, positions)
 * - Trade updates (fills, order status)
 * - Market data (price updates)
 * 
 * Get API keys from: https://app.alpaca.markets/
 */

// Environment variables should be set in your .env file:
// VITE_ALPACA_API_KEY=your_key_id
// VITE_ALPACA_SECRET_KEY=your_secret_key

const ALPACA_PAPER_WS_URL = 'wss://paper-api.alpaca.markets/stream';
const ALPACA_DATA_WS_URL = 'wss://data.alpaca.markets/stream';

class AlpacaWebSocketService {
  constructor() {
    this.ws = null;
    this.listeners = new Map();
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 3000;
    this.accountData = null;
    this.positionHistory = [];
  }

  /**
   * Initialize connection with Alpaca credentials
   * @param {string} apiKey - Alpaca API key ID
   * @param {string} secretKey - Alpaca secret key
   * @param {boolean} paper - Use paper trading (default: true)
   */
  connect(apiKey, secretKey, paper = true) {
    return new Promise((resolve, reject) => {
      const wsUrl = paper ? ALPACA_PAPER_WS_URL : ALPACA_PAPER_WS_URL.replace('paper-', '');
      
      this.ws = new WebSocket(wsUrl);
      this.apiKey = apiKey;
      this.secretKey = secretKey;

      this.ws.onopen = () => {
        console.log('[Alpaca] WebSocket connected, authenticating...');
        this.authenticate(apiKey, secretKey);
      };

      this.ws.onmessage = async (event) => {
        try {
          // Alpaca returns MessagePack binary data, need to handle Blob
          let data;
          if (event.data instanceof Blob) {
            const arrayBuffer = await event.data.arrayBuffer();
            const bytes = new Uint8Array(arrayBuffer);
            // Simple text decode for auth responses (JSON)
            // For full MessagePack, you'd need a msgpack library
            const text = new TextDecoder().decode(bytes);
            // Try parsing as JSON first
            try {
              data = JSON.parse(text);
            } catch {
              // If it fails, it's likely binary MessagePack - skip for now
              console.log('[Alpaca] Received binary data (MessagePack), skipping parse');
              return;
            }
          } else {
            data = JSON.parse(event.data);
          }
          this.handleMessage(data);
        } catch (err) {
          console.error('[Alpaca] Failed to parse message:', err);
        }
      };

      this.ws.onerror = (error) => {
        console.error('[Alpaca] WebSocket error:', error);
        reject(error);
      };

      this.ws.onclose = () => {
        console.log('[Alpaca] WebSocket disconnected');
        this.isConnected = false;
        this.attemptReconnect();
      };

      // Wait for authentication before resolving
      this.authResolve = resolve;
      this.authReject = reject;
    });
  }

  /**
   * Authenticate with Alpaca
   */
  authenticate(apiKey, secretKey) {
    this.send({
      action: 'auth',
      data: {
        key_id: apiKey,
        secret_key: secretKey,
      },
    });
  }

  /**
   * Subscribe to data streams
   * @param {string[]} streams - Stream names to subscribe to
   */
  subscribe(streams) {
    if (!this.isConnected) {
      console.warn('[Alpaca] Not connected, cannot subscribe');
      return;
    }

    this.send({
      action: 'listen',
      data: {
        streams: streams,
      },
    });
  }

  /**
   * Unsubscribe from streams
   * @param {string[]} streams - Stream names to unsubscribe from
   */
  unsubscribe(streams) {
    this.send({
      action: 'unlisten',
      data: {
        streams: streams,
      },
    });
  }

  /**
   * Send message through WebSocket
   */
  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }

  /**
   * Handle incoming WebSocket messages
   */
  handleMessage(message) {
    const { stream, data, type } = message;

    // Handle authentication response
    if (type === 'success' && data.message === 'authenticated') {
      console.log('[Alpaca] Authentication successful');
      this.isConnected = true;
      this.reconnectAttempts = 0;
      if (this.authResolve) {
        this.authResolve(true);
        this.authResolve = null;
        this.authReject = null;
      }
      return;
    }

    if (type === 'error') {
      console.error('[Alpaca] Error:', data.message);
      if (this.authReject) {
        this.authReject(new Error(data.message));
        this.authResolve = null;
        this.authReject = null;
      }
      return;
    }

    // Emit event to listeners
    this.emit(stream || type, data);
  }

  /**
   * Attempt to reconnect on disconnect
   */
  attemptReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('[Alpaca] Max reconnect attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`[Alpaca] Attempting reconnect ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
    
    setTimeout(() => {
      if (this.apiKey && this.secretKey) {
        this.connect(this.apiKey, this.secretKey).catch(console.error);
      }
    }, this.reconnectDelay);
  }

  /**
   * Add event listener
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    
    return () => this.off(event, callback);
  }

  /**
   * Remove event listener
   */
  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  /**
   * Emit event to listeners
   */
  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
  }

  /**
   * Disconnect WebSocket
   */
  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected = false;
  }

  /**
   * Get current account data
   */
  getAccountData() {
    return this.accountData;
  }

  /**
   * Get position history for charting
   */
  getPositionHistory() {
    return this.positionHistory;
  }
}

// Singleton instance
const alpacaService = new AlpacaWebSocketService();

export default alpacaService;

/**
 * Hook to use Alpaca WebSocket in React components
 * 
 * @param {Object} config - Configuration object
 * @param {string} config.apiKey - Alpaca API key
 * @param {string} config.secretKey - Alpaca secret key
 * @param {boolean} config.paper - Use paper trading
 * @param {string[]} config.streams - Streams to subscribe to
 * 
 * @returns {Object} Connection state and data
 * 
 * @example
 * const { connected, account, positions, error } = useAlpaca({
 *   apiKey: 'your_api_key',
 *   secretKey: 'your_secret',
 *   streams: ['trade_updates', 'account_updates']
 * });
 */
export const useAlpacaWebSocket = (config) => {
  const { apiKey, secretKey, streams = ['trade_updates', 'account_updates'] } = config;
  
  // This would be implemented as a custom hook
  // For now, return the service for manual usage
  return {
    service: alpacaService,
    connect: () => alpacaService.connect(apiKey, secretKey),
    disconnect: () => alpacaService.disconnect(),
    subscribe: (streams) => alpacaService.subscribe(streams),
    on: (event, callback) => alpacaService.on(event, callback),
    off: (event, callback) => alpacaService.off(event, callback),
  };
};

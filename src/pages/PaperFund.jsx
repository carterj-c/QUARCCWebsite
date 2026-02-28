import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import PortfolioDashboard from '../components/PortfolioDashboard';
import alpacaService from '../services/alpacaWebSocket';

const ALPACA_API_URL = '/api/alpaca';

// Fetch account data from Alpaca REST API
async function fetchAlpacaAccount() {
    const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
    const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

    console.log('[PaperFund] Fetching from:', `${ALPACA_API_URL}/account`);
    console.log('[PaperFund] API Key:', apiKey ? apiKey.substring(0, 10) + '...' : 'MISSING');

    const response = await fetch(`${ALPACA_API_URL}/account`, {
        headers: {
            'APCA-API-KEY-ID': apiKey,
            'APCA-API-SECRET-KEY': secretKey,
        },
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to fetch account: ${response.status} - ${text}`);
    }

    return response.json();
}

// Fetch positions from Alpaca REST API
async function fetchAlpacaPositions() {
    const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
    const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

    const response = await fetch(`${ALPACA_API_URL}/positions`, {
        headers: {
            'APCA-API-KEY-ID': apiKey,
            'APCA-API-SECRET-KEY': secretKey,
        },
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to fetch positions: ${response.status} - ${text}`);
    }

    return response.json();
}

// Fetch account portfolio history (for equity curve chart)
async function fetchPortfolioHistory() {
    const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
    const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

    const response = await fetch(`${ALPACA_API_URL}/account/portfolio/history?timeframe=1D&period=1M`, {
        headers: {
            'APCA-API-KEY-ID': apiKey,
            'APCA-API-SECRET-KEY': secretKey,
        },
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to fetch portfolio history: ${response.status} - ${text}`);
    }

    return response.json();
}

const MOCK_PORTFOLIOS = [
    {
        id: 'alpha',
        name: 'Portfolio Alpha',
        strategy: 'Statistical Arbitrage',
        status: 'Active',
        stats: {
            equity: '$1,245,300.50',
            dayChange: '+2.4%',
            sharpe: '1.8',
            beta: '0.45'
        },
        holdings: [
            { symbol: 'AAPL', qty: 150, avgPrice: '175.20', currentPrice: '182.50', pl: '+7.30' },
            { symbol: 'TSLA', qty: 50, avgPrice: '210.00', currentPrice: '198.00', pl: '-12.00' },
            { symbol: 'GOOGL', qty: 100, avgPrice: '135.50', currentPrice: '140.20', pl: '+4.70' }
        ]
    },
    {
        id: 'beta',
        name: 'Portfolio Beta',
        strategy: 'Mean Reversion',
        status: 'Active',
        stats: {
            equity: '$850,000.00',
            dayChange: '-0.8%',
            sharpe: '1.2',
            beta: '0.85'
        },
        holdings: [
            { symbol: 'AMD', qty: 300, avgPrice: '95.00', currentPrice: '105.00', pl: '+10.00' },
            { symbol: 'NVDA', qty: 20, avgPrice: '450.00', currentPrice: '465.00', pl: '+15.00' }
        ]
    },
    {
        id: 'gamma',
        name: 'Portfolio Gamma',
        strategy: 'High Frequency',
        status: 'Connecting...',
        stats: {
            equity: 'Loading...',
            dayChange: '--',
            sharpe: '--',
            beta: '--'
        },
        holdings: []
    }
];

const PaperFund = () => {
    const [portfolios, setPortfolios] = useState(MOCK_PORTFOLIOS);
    const [alpacaData, setAlpacaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch initial data from Alpaca
    useEffect(() => {
        async function loadAlpacaData() {
            try {
                console.log('[PaperFund] Fetching Alpaca account data...');
                
                const [account, positions, history] = await Promise.all([
                    fetchAlpacaAccount(),
                    fetchAlpacaPositions().catch(() => []),
                    fetchPortfolioHistory().catch(() => null)
                ]);

                // Convert portfolio history to chart data format
                let chartData = [];
                if (history && history.equity && history.timestamp) {
                    chartData = history.timestamp.map((ts, i) => ({
                        time: ts,
                        value: history.equity[i]
                    }));
                    console.log('[PaperFund] Chart data sample:', chartData.slice(0, 3));
                }

                // Calculate day change percentage
                const equity = parseFloat(account.equity);
                const lastEquity = parseFloat(account.last_equity);
                const dayChange = ((equity - lastEquity) / lastEquity * 100).toFixed(2);

                // Convert positions to holdings format
                const holdings = Array.isArray(positions) ? positions.map(pos => ({
                    symbol: pos.symbol,
                    qty: parseInt(pos.qty),
                    avgPrice: parseFloat(pos.avg_entry_price).toFixed(2),
                    currentPrice: parseFloat(pos.current_price).toFixed(2),
                    pl: ((parseFloat(pos.current_price) - parseFloat(pos.avg_entry_price)) * parseFloat(pos.qty)).toFixed(2)
                })) : [];

                setAlpacaData({
                    account,
                    holdings,
                    chartData,
                    dayChange: `${dayChange >= 0 ? '+' : ''}${dayChange}%`
                });

                console.log('[PaperFund] Alpaca data loaded:', { equity, dayChange, positions: holdings.length });

            } catch (err) {
                console.error('[PaperFund] Error loading Alpaca data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadAlpacaData();
    }, []);

    // Connect to WebSocket for real-time updates (disabled - requires MessagePack library)
    useEffect(() => {
        // WebSocket temporarily disabled - Alpaca returns MessagePack binary format
        // To re-enable: install msgpack library and decode binary responses
    }, []);

    // Update portfolio with Alpaca data when loaded
    useEffect(() => {
        if (!alpacaData) return;

        setPortfolios(prev => prev.map(p => {
            if (p.id === 'gamma') {
                return {
                    ...p,
                    status: 'Active',
                    stats: {
                        equity: `$${parseFloat(alpacaData.account.equity).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
                        dayChange: alpacaData.dayChange,
                        sharpe: '--',
                        beta: '--'
                    },
                    holdings: alpacaData.holdings,
                    chartData: alpacaData.chartData
                };
            }
            return p;
        }));
    }, [alpacaData]);

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <Helmet>
                <title>Paper Fund - QUARCC</title>
                <meta name="description" content="Explore QUARCC's paper portfolios and live trading strategies managed by our research teams." />
            </Helmet>
            <SystemBox title="Live Paper Portfolios">
                {loading && (
                    <div style={{ 
                        padding: '2rem', 
                        textAlign: 'center', 
                        color: '#c9d1d9',
                        border: '1px solid #30363d',
                        marginBottom: '2rem',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Connecting to Alpaca paper trading...</div>
                        <div style={{ fontSize: '0.9rem', color: '#8b949e' }}>Check browser console (F12) for details</div>
                    </div>
                )}
                {error && (
                    <div style={{ 
                        padding: '1.5rem', 
                        textAlign: 'center', 
                        color: '#ff6b6b',
                        border: '1px solid #ff6b6b',
                        marginBottom: '2rem',
                        backgroundColor: 'rgba(255,107,107,0.1)'
                    }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Connection Error</div>
                        <div style={{ fontSize: '0.9rem' }}>{error}</div>
                    </div>
                )}
                {!loading && !error && (
                    <p style={{ marginBottom: '2rem' }}>
                        Real-time tracking of our paper trading algorithms. Data streamed via Alpaca WebSocket.
                    </p>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {portfolios.map(portfolio => (
                        <PortfolioDashboard key={portfolio.id} portfolio={portfolio} />
                    ))}
                </div>
            </SystemBox>
        </div>
    );
};

export default PaperFund;

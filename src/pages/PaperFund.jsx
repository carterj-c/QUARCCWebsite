import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import PortfolioDashboard from '../components/PortfolioDashboard';

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
        status: 'Connecting...', // Simulating a connecting state
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

    useEffect(() => {
        // Simulate WebSocket connection for real-time updates
        const interval = setInterval(() => {
            console.log("Simulating live data fetch...");
            // Randomly toggle the Connecting status for demo purposes
            setPortfolios(prev => prev.map(p => {
                if (p.id === 'gamma') {
                    return {
                        ...p,
                        status: Math.random() > 0.5 ? 'Active' : 'Connecting...',
                        stats: {
                            ...p.stats,
                            equity: '$500,000.00'
                        }
                    }
                }
                return p;
            }));

        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <Helmet>
                <title>Paper Fund - QUARCC</title>
                <meta name="description" content="Explore QUARCC's paper portfolios and live trading strategies managed by our research teams." />
            </Helmet>
            <SystemBox title="Live Paper Portfolios">
                <p style={{ marginBottom: '2rem' }}>
                    Real-time tracking of our paper trading algorithms. Data streamed via WebSocket (Simulated).
                </p>
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

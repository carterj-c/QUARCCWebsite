import React from 'react';
import './PortfolioDashboard.css';

const PortfolioDashboard = ({ portfolio }) => {
    const { name, strategy, status, stats, holdings } = portfolio;
    const isLive = status === 'Active';

    return (
        <div className="portfolio-dashboard">
            <div className="portfolio-header">
                <h3 className="portfolio-title">{name} [{strategy}]</h3>
                <span className={`portfolio-status ${isLive ? '' : 'inactive'}`}>
                    ● {status.toUpperCase()}
                </span>
            </div>

            <div className="portfolio-stats">
                <div className="stat-item">
                    <span className="stat-label">Total Equity</span>
                    <span className="stat-value">{stats.equity}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Day Integration</span>
                    <span className="stat-value" style={{ color: stats.dayChange.startsWith('+') ? '#32cd32' : 'red' }}>
                        {stats.dayChange}
                    </span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Sharpe Layout</span>
                    <span className="stat-value">{stats.sharpe}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Beta</span>
                    <span className="stat-value">{stats.beta}</span>
                </div>
            </div>

            <div className="portfolio-holdings">
                <h4> Current Positions </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Qty</th>
                            <th>Avg Price</th>
                            <th>Current</th>
                            <th>P/L</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.map((pos, index) => (
                            <tr key={index}>
                                <td>{pos.symbol}</td>
                                <td>{pos.qty}</td>
                                <td>{pos.avgPrice}</td>
                                <td>{pos.currentPrice}</td>
                                <td style={{ color: pos.pl.startsWith('+') ? '#32cd32' : 'red' }}>
                                    {pos.pl}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="portfolio-graph-placeholder">
                [ Live Performance Graph Placeholder - WebSocket Stream Pending ]
            </div>
        </div>
    );
};

export default PortfolioDashboard;

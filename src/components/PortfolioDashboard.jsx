import React, { useMemo } from "react";
import "./PortfolioDashboard.css";
import PortfolioChart from "./PortfolioChart";

const PortfolioDashboard = ({ portfolio }) => {
  const { name, strategy, status, stats, holdings, chartData } = portfolio;
  const isLive = status === "Active";

  // Generate sample chart data if none provided (for demo)
  const processedChartData = useMemo(() => {
    if (chartData && chartData.length > 0) {
      return chartData;
    }

    // Generate sample equity curve for demo purposes
    const data = [];
    let equity = 1000000;
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;

    for (let i = 30; i >= 0; i--) {
      const time = Math.floor((now - i * dayMs) / 1000);
      // Random walk with upward bias
      equity = equity * (1 + (Math.random() - 0.48) * 0.02);
      data.push({ time, value: equity });
    }

    // Add current point
    data.push({
      time: Math.floor(now / 1000),
      value: parseFloat(stats.equity.replace(/[$,]/g, "")) || equity,
    });

    return data;
  }, [chartData, stats.equity]);

  // Sort holdings by P/L (absolute value) and take top 5
  const topHoldings = useMemo(() => {
    if (!holdings || holdings.length === 0) return [];

    return [...holdings]
      .sort((a, b) => Math.abs(parseFloat(b.pl)) - Math.abs(parseFloat(a.pl)))
      .slice(0, 5);
  }, [holdings]);

  // Helper to format P/L with color
  const formatPL = (pl) => {
    const num = parseFloat(pl);
    const isPositive = num >= 0;
    return {
      color: isPositive ? "#32cd32" : "#ff4444",
      display: `${isPositive ? "+" : ""}$${num.toFixed(2)}`,
    };
  };

  return (
    <div className="portfolio-dashboard">
      <div className="portfolio-header">
        <h3 className="portfolio-title">
          {name} [{strategy}]
        </h3>
        <span className={`portfolio-status ${isLive ? "" : "inactive"}`}>
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
          <span
            className="stat-value"
            style={{
              color: stats.dayChange.startsWith("+") ? "#32cd32" : "red",
            }}
          >
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
        <h4> Current Positions (top 5) </h4>
        {topHoldings.length === 0 ? (
          <p style={{ color: "#8b949e", padding: "1rem" }}>No open positions</p>
        ) : (
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
              {topHoldings.map((pos, index) => {
                const plInfo = formatPL(pos.pl);
                return (
                  <tr key={index}>
                    <td>{pos.symbol}</td>
                    <td>{pos.qty}</td>
                    <td>${pos.avgPrice}</td>
                    <td>${pos.currentPrice}</td>
                    <td style={{ color: plInfo.color, fontWeight: "bold" }}>
                      {plInfo.display}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="portfolio-chart-container">
        <PortfolioChart
          data={processedChartData}
          height={180}
          accentColor="#8957e5"
        />
      </div>
    </div>
  );
};

export default PortfolioDashboard;

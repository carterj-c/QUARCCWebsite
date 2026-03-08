import React, { useEffect, useMemo, useState } from "react";
import PortfolioDashboard from "./PortfolioDashboard.jsx";
import "./PaperFundClient.css";

function normalizePortfolios(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.portfolios)) {
    return payload.portfolios;
  }

  return [];
}

function mergePortfolios(staticPortfolios, livePortfolios) {
  const liveMap = new Map(
    livePortfolios.map((portfolio) => [portfolio.slug || portfolio.id || portfolio.name, portfolio]),
  );

  return staticPortfolios.map((portfolio) => {
    const live =
      liveMap.get(portfolio.id) ||
      liveMap.get(portfolio.slug) ||
      liveMap.get(portfolio.name);

    if (!live) {
      return portfolio;
    }

    return {
      ...portfolio,
      name: live.name || portfolio.name,
      strategy: live.strategy || portfolio.strategy,
      status: live.status || portfolio.status,
      summary: live.summary || portfolio.summary,
      stats: {
        ...portfolio.stats,
        ...(live.stats || {}),
      },
      holdings: Array.isArray(live.holdings) ? live.holdings : portfolio.holdings,
      chartData: Array.isArray(live.chartData) ? live.chartData : portfolio.chartData,
    };
  });
}

export default function PaperFundClient({ portfolios = [] }) {
  const [livePortfolios, setLivePortfolios] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const apiBase = import.meta.env.PUBLIC_PAPER_FUND_API_BASE;

    if (!apiBase) {
      setStatus("disabled");
      return;
    }

    const controller = new AbortController();

    async function loadPortfolios() {
      setStatus("loading");
      setError("");

      try {
        const response = await fetch(`${apiBase.replace(/\/$/, "")}/portfolios`, {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Live API returned ${response.status}`);
        }

        const payload = await response.json();
        setLivePortfolios(normalizePortfolios(payload));
        setStatus("ready");
      } catch (loadError) {
        if (loadError.name === "AbortError") {
          return;
        }

        setStatus("error");
        setError(loadError.message || "Unable to load live portfolio data.");
      }
    }

    loadPortfolios();

    return () => controller.abort();
  }, []);

  const mergedPortfolios = useMemo(
    () => mergePortfolios(portfolios, livePortfolios),
    [portfolios, livePortfolios],
  );

  return (
    <div className="paper-fund-live">
      <div className="paper-fund-status">
        {status === "loading" ? "Loading live portfolio data..." : null}
        {status === "ready" ? "Live portfolio feed connected." : null}
        {status === "disabled"
          ? "Live API not configured. Showing file-based fallback data."
          : null}
        {status === "error"
          ? `${error} Showing file-based fallback data.`
          : null}
      </div>

      <div className="paper-fund-grid">
        {mergedPortfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <p className="paper-fund-summary">{portfolio.summary}</p>
            <PortfolioDashboard portfolio={portfolio} />
          </div>
        ))}
      </div>
    </div>
  );
}

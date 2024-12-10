// src/components/Portfolio.tsx
import React, { useEffect, useState } from "react";

// src/components/Portfolio.tsx

interface Holding {
  symbol: string;
  shares: number;
  cost_per_share: number;
  current_price: number;
  cost_basis: number;
  current_value: number;
  total_dividends: number;
  gain_loss: number;
  total_return: number;
  percent_return: number;
  purchase_date: string;
}

interface PortfolioTotals {
  total_cost: number;
  total_value: number;
  total_dividends: number;
  money_invested: number;
  total_gain_loss: number;
  total_return: number;
  total_return_percent: number;
  last_updated: string;
}

interface PortfolioData {
  holdings: Holding[];
  totals: PortfolioTotals;
  daily_values: {
    date: string;
    value: number;
  }[];
}

// ... previous interfaces ...

const Portfolio: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const CASH_BALANCE = 7445.0; // From your Schwab statement

  useEffect(() => {
    fetch("/portfolio_data.json")
      .then((response) => response.json())
      .then((data: PortfolioData) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading portfolio data:", err);
        setError("Failed to load portfolio data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading portfolio data...</div>;
  }

  if (error || !portfolioData) {
    return <div>Error: {error || "No portfolio data available"}</div>;
  }

  // Calculate total portfolio value including cash
  const totalPortfolioValue = portfolioData.totals.total_value + CASH_BALANCE;
  const equityWeight =
    (portfolioData.totals.total_value / totalPortfolioValue) * 100;
  const cashWeight = (CASH_BALANCE / totalPortfolioValue) * 100;

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio Summary</h2>

      {/* Total Portfolio Value */}
      <div
        style={{
          padding: "20px",
          marginBottom: "30px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #dee2e6",
        }}
      >
        <h3 style={{ margin: "0 0 15px 0", textAlign: "center" }}>
          Total Portfolio Value
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              ${totalPortfolioValue.toLocaleString()}
            </div>
            <div style={{ color: "#666", marginTop: "5px" }}>Total Value</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              ${portfolioData.totals.total_value.toLocaleString()}
            </div>
            <div style={{ color: "#666", marginTop: "5px" }}>
              Equity ({equityWeight.toFixed(1)}%)
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              ${CASH_BALANCE.toLocaleString()}
            </div>
            <div style={{ color: "#666", marginTop: "5px" }}>
              Cash ({cashWeight.toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <SummaryCard
          title="Money Invested"
          value={portfolioData.totals.money_invested}
          prefix="$"
        />
        <SummaryCard
          title="Total Return"
          value={portfolioData.totals.total_return}
          prefix="$"
        />
        <SummaryCard
          title="Return %"
          value={portfolioData.totals.total_return_percent}
          suffix="%"
          isPercent={true}
        />
        <SummaryCard
          title="Total Dividends"
          value={portfolioData.totals.total_dividends}
          prefix="$"
        />
      </div>

      {/* Holdings Table */}
      <h3>Current Holdings</h3>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Symbol</th>
              <th style={tableHeaderStyle}>Shares</th>
              <th style={tableHeaderStyle}>Cost/Share</th>
              <th style={tableHeaderStyle}>Current</th>
              <th style={tableHeaderStyle}>Value</th>
              <th style={tableHeaderStyle}>Return</th>
              <th style={tableHeaderStyle}>Return %</th>
              <th style={tableHeaderStyle}>Weight</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.holdings.map((holding, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{holding.symbol}</td>
                <td style={tableCellStyle}>{holding.shares.toFixed(4)}</td>
                <td style={tableCellStyle}>
                  ${holding.cost_per_share.toFixed(2)}
                </td>
                <td style={tableCellStyle}>
                  ${holding.current_price.toFixed(2)}
                </td>
                <td style={tableCellStyle}>
                  ${holding.current_value.toLocaleString()}
                </td>
                <td style={tableCellStyle}>
                  ${holding.total_return.toLocaleString()}
                </td>
                <td
                  style={{
                    ...tableCellStyle,
                    color: holding.percent_return >= 0 ? "green" : "red",
                  }}
                >
                  {holding.percent_return.toFixed(2)}%
                </td>
                <td style={tableCellStyle}>
                  {(
                    (holding.current_value / totalPortfolioValue) *
                    100
                  ).toFixed(1)}
                  %
                </td>
              </tr>
            ))}
            {/* Cash Row */}
            <tr>
              <td style={tableCellStyle}>CASH</td>
              <td style={tableCellStyle}>-</td>
              <td style={tableCellStyle}>-</td>
              <td style={tableCellStyle}>-</td>
              <td style={tableCellStyle}>${CASH_BALANCE.toLocaleString()}</td>
              <td style={tableCellStyle}>-</td>
              <td style={tableCellStyle}>-</td>
              <td style={tableCellStyle}>{cashWeight.toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "right",
          fontSize: "12px",
          color: "#666",
        }}
      >
        Last updated: {portfolioData.totals.last_updated}
      </div>
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  isPercent?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  prefix = "",
  suffix = "",
  isPercent = false,
}) => (
  <div
    style={{
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
    }}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
    <p
      style={{
        margin: 0,
        fontSize: "1.2em",
        color: isPercent ? (value >= 0 ? "green" : "red") : "inherit",
      }}
    >
      {prefix}
      {isPercent ? value.toFixed(2) : value.toLocaleString()}
      {suffix}
    </p>
  </div>
);

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left" as const,
  borderBottom: "2px solid #ddd",
  backgroundColor: "#f5f5f5",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default Portfolio;

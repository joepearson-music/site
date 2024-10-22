import axios from "axios";
import React, { useEffect, useState } from "react";

const StockPicks: React.FC = () => {
  const [data, setData] = useState<any[][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sheet configuration
  const SHEET_ID = "1tRLI64dU83Fcit_YAKfKhvlmfctRp7c5SMA_A7XMTkE";
  const SHEET_NAME = "Sheet1";
  const API_KEY = "AIzaSyAC511tUxujeEh1TkYVejr3HozvJkiaZ-8";

  const styles = {
    container: {
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "20px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center" as const,
    },
    paragraph: {
      fontSize: "1rem",
      fontWeight: "normal",
      marginBottom: "2rem",
      textAlign: "center" as const,
      color: "#374151",
      lineHeight: "1.5",
    },
    stockCard: {
      width: "100%",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "24px",
      backgroundColor: "white",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    stockHeader: {
      marginBottom: "24px",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "16px",
    },
    stockTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "4px",
    },
    companyName: {
      fontSize: "1rem",
      color: "#6b7280",
    },
    priceSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginBottom: "24px",
      padding: "16px",
      backgroundColor: "#f9fafb",
      borderRadius: "6px",
    },
    section: {
      marginBottom: "24px",
    },
    label: {
      fontSize: "0.875rem",
      color: "#6b7280",
      marginBottom: "4px",
    },
    value: {
      fontSize: "1.125rem",
      color: "#111827",
      fontWeight: "500",
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "16px",
      padding: "16px",
      backgroundColor: "#f9fafb",
      borderRadius: "6px",
    },
    metricItem: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "4px",
    },
    thesis: {
      fontSize: "0.875rem",
      color: "#374151",
      lineHeight: "1.5",
      backgroundColor: "#f9fafb",
      padding: "16px",
      borderRadius: "6px",
    },
    error: {
      color: "#dc2626",
      padding: "1rem",
      backgroundColor: "#fee2e2",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
      width: "100%",
    },
    loading: {
      textAlign: "center" as const,
      padding: "2rem",
      color: "#6b7280",
      width: "100%",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        if (response.data && response.data.values) {
          setData(response.data.values.slice(1));
          setError(null);
        } else {
          setError("No data received from the Google Sheet");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (axios.isAxiosError(error)) {
          setError(
            error.response?.status === 403
              ? "Access denied. Please check sheet permissions and API key."
              : `Error: ${
                  error.response?.data?.error?.message || error.message
                }`
          );
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div style={styles.loading}>Loading stock picks...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stock Picks</h1>
      <p style={styles.paragraph}>
        These are stocks that I pulled from bloomberg EQS Screen. They are
        strong businesses with consistent growth and over 1B market cap. I do
        not want to invest in tech but rather strong companies that will be
        around for another 50 years and generate cash every year.
      </p>
      {data.map((stock, index) => (
        <div key={index} style={styles.stockCard}>
          <div style={styles.stockHeader}>
            <div style={styles.stockTitle}>{stock[0]}</div>
            <div style={styles.companyName}>{stock[1]}</div>
          </div>

          <div style={styles.priceSection}>
            <div>
              <div style={styles.label}>Current Price</div>
              <div style={styles.value}>${stock[2]}</div>
            </div>
            <div>
              <div style={styles.label}>Target Price</div>
              <div style={styles.value}>${stock[3]}</div>
            </div>
          </div>

          <div style={styles.metricsGrid}>
            <div style={styles.metricItem}>
              <div style={styles.label}>Beta</div>
              <div style={styles.value}>{stock[4] || "N/A"}</div>
            </div>
            <div style={styles.metricItem}>
              <div style={styles.label}>P/E Ratio</div>
              <div style={styles.value}>{stock[5] || "N/A"}</div>
            </div>
            <div style={styles.metricItem}>
              <div style={styles.label}>EPS</div>
              <div style={styles.value}>{stock[6] || "N/A"}</div>
            </div>
            <div style={styles.metricItem}>
              <div style={styles.label}>Market Cap</div>
              <div style={styles.value}>${stock[7]}B</div>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.label}>Investment Thesis</div>
            <div style={styles.thesis}>{stock[8]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockPicks;

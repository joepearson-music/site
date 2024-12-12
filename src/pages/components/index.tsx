import axios from "axios";
import React, { useEffect, useState } from "react";

interface Log {
  date: string;
  time: string;
  name: string;
}

// Replace these with your actual Google Sheet details
const SHEET_ID = "1QYN8PosfxeOUp6_Fl9CIfeYXTm1WdbS1mK7gMHVEuto";
const SHEET_NAME = "WakeupLogs";
const API_KEY = "AIzaSyAC511tUxujeEh1TkYVejr3HozvJkiaZ-8";

const WakeupLogger = () => {
  const [name, setName] = useState<string>("Jack");
  const [logs, setLogs] = useState<Log[]>([]);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null,
  });

  // Replace this with your actual deployed Google Apps Script URL for writing
  const SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbzHvzCKXfPP9K6aus9CpYfsvnlF3knRCYtL0d7OFKwwtF81RHwwV-RYJOb6Jmtj5V_cew/exec";

  // Fetch existing logs
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );

        if (response.data && response.data.values) {
          // Convert sheet data to logs format (skip header row)
          const logsData = response.data.values
            .slice(1)
            .map((row: string[]) => ({
              date: row[1] || "",
              time: row[2] || "",
              name: row[3] || "",
            }));
          setLogs(logsData.reverse()); // Show newest first
        }
      } catch (error) {
        console.error("Error fetching logs:", error);
        setStatus({
          loading: false,
          success: false,
          error: "Failed to load existing logs",
        });
      }
    };

    fetchLogs();
  }, []);

  const logWakeup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setStatus({ loading: true, success: false, error: null });

    try {
      const now = new Date();
      const currentDate = now.toLocaleDateString();
      const currentTime = now.toLocaleTimeString();

      const params = new URLSearchParams({
        name: name,
        date: currentDate,
        time: currentTime,
      });

      const img = new Image();
      await new Promise((resolve) => {
        img.onload = img.onerror = resolve;
        img.src = `${SHEETS_URL}?${params.toString()}`;
      });

      const newLog: Log = {
        date: currentDate,
        time: currentTime,
        name: name,
      };

      setLogs((prev) => [newLog, ...prev]);
      localStorage.setItem("wakeupName", name);

      setStatus({
        loading: false,
        success: true,
        error: null,
      });
    } catch (error) {
      console.error("Error logging wake-up:", error);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to log wake-up time. Please try again.",
      });
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center" as const,
    },
    currentTime: {
      fontSize: "20px",
      textAlign: "center" as const,
      margin: "20px 0",
      color: "#4CAF50",
    },
    form: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    disabledButton: {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
    message: {
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "4px",
      textAlign: "center" as const,
    },
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      marginTop: "20px",
    },
    th: {
      padding: "12px",
      textAlign: "left" as const,
      borderBottom: "2px solid #ddd",
      backgroundColor: "#f8f9fa",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Wake-up Logger</h1>

      <div style={styles.currentTime}>{new Date().toLocaleTimeString()}</div>

      <form onSubmit={logWakeup} style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          placeholder="Enter your name"
          required
        />

        {status.success && (
          <div style={{ ...styles.message, ...styles.success }}>
            Wake-up time logged successfully!
          </div>
        )}

        {status.error && (
          <div style={{ ...styles.message, ...styles.error }}>
            {status.error}
          </div>
        )}

        <button
          type="submit"
          disabled={status.loading || !name}
          style={{
            ...styles.button,
            ...(status.loading || !name ? styles.disabledButton : {}),
          }}
        >
          {status.loading ? "Logging..." : "Log Wake-up Time"}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td style={styles.td}>{log.date}</td>
              <td style={styles.td}>{log.time}</td>
              <td style={styles.td}>{log.name}</td>
            </tr>
          ))}
          {logs.length === 0 && (
            <tr>
              <td
                colSpan={3}
                style={{ ...styles.td, textAlign: "center" as const }}
              >
                No wake-up times logged yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WakeupLogger;

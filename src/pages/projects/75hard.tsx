import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";

const SHEET_ID = "1yj1oGvm7JOjNskcnmgFxwVWFZ4O1mvH_SrFNXwxa-Ok";
const SHEET_NAME = "Sheet1";
const API_KEY = "AIzaSyAC511tUxujeEh1TkYVejr3HozvJkiaZ-8";

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    marginBottom: "20px",
  },
  error: {
    color: "red",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  cardHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  cardItem: {
    marginBottom: "5px",
  },
};

const Hard: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        if (response.data && response.data.values) {
          setData(response.data.values);
        } else {
          setError("No data received from the API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (axios.isAxiosError(error)) {
          setError(
            `Error: ${error.response?.status} - ${
              error.response?.data?.error?.message || error.message
            }`
          );
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchData();
  }, []);

  const headers = [
    "User",
    "Day #",
    "Date",
    "Rating?",
    "Exercise",
    "Protein?",
    "Water?",
    "Daily Reflection",
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>75 Hard</h2>
      <p style={styles.description}>
        This is a challenge that I am doing to improve my mental toughness and
        discipline.
      </p>
      {error ? (
        <p style={styles.error}>{error}</p>
      ) : data.length > 0 ? (
        <div style={styles.gridContainer}>
          {data.slice(1).map((row, rowIndex) => (
            <div key={rowIndex} style={styles.card}>
              <div style={styles.cardHeader}>
                {row[0]} - Day {row[1]}
              </div>
              {headers.slice(2).map((header, index) => (
                <p key={index} style={styles.cardItem}>
                  <strong>{header}:</strong> {row[index + 2]}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Hard;

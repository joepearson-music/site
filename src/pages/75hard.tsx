import axios from "axios";
import React, { useEffect, useState } from "react";

const SHEET_ID = "1yj1oGvm7JOjNskcnmgFxwVWFZ4O1mvH_SrFNXwxa-Ok";
const SHEET_NAME = "Sheet1";
const API_KEY = "AIzaSyAC511tUxujeEh1TkYVejr3HozvJkiaZ-8"; // Replace with your actual API key, preferably from an environment variable

const Hard: React.FC = () => {
  const [data, setData] = useState<any[][]>([]);
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

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>75 Hard</h2>
      <p>
        This is a challenge that I am doing to improve my mental toughness and
        discipline.
      </p>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : data.length > 0 ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              {data[0].map((header, index) => (
                <th
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{ border: "1px solid #ddd", padding: "8px" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Hard;

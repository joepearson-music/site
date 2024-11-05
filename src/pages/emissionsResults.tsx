import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { styles } from "./components/layout";

const US_AVERAGE_EMISSIONS = 16; // tons CO2/year per person

// Add window size hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return windowSize;
};

const getChartDimensions = (width: number) => {
  if (width < 380) return { width: width - 40, height: 250 };
  if (width < 768) return { width: width - 60, height: 300 };
  return { width: 400, height: 300 };
};

const customStyles = {
  ...styles,
  modalOverlay: {
    position: "fixed" as const,
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    zIndex: 50,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "64rem",
    maxHeight: "90vh",
    overflowY: "auto" as const,
    padding: "1rem",
    position: "relative" as const,
    fontFamily: "Times New Roman",
    margin: "0 auto",
  },
  closeButton: {
    position: "absolute" as const,
    top: "0.5rem",
    right: "0.5rem",
    color: "#666",
    cursor: "pointer",
    border: "none",
    background: "none",
    fontSize: "20px",
    padding: "0.5rem",
    zIndex: 51,
  },
  chartContainer: {
    backgroundColor: "#f9f9f9",
    padding: "1rem",
    borderRadius: "4px",
    marginBottom: "20px",
    width: "100%",
    overflowX: "auto" as const,
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
    border: "1px solid #000",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "16px",
    fontFamily: "Times New Roman",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: "20px",
  },
  tableHeader: {
    padding: "8px",
    textAlign: "left" as const,
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
  },
  tableCell: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    wordBreak: "break-word" as const,
  },
  responsiveGrid: (windowWidth: number) => ({
    display: "grid",
    gridTemplateColumns: windowWidth < 768 ? "1fr" : "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "20px",
    width: "100%",
  }),
};

type EmissionsProps = {
  emissions: {
    flightEmissions: number;
    carEmissions: number;
    publicTransportEmissions: number;
    dietEmissions: number;
    electricEmissions: number;
    waterEmissions: number;
    propaneEmissions: number;
    gasEmissions: number;
    energyEmissions: number;
    totalEmissions: number;
  };
  show: boolean;
  onClose: () => void;
};

export const EmissionResults: React.FC<EmissionsProps> = ({
  emissions,
  show,
  onClose,
}) => {
  const { width } = useWindowSize();
  const chartDimensions = getChartDimensions(width);

  if (!show) return null;

  const transportationEmissions =
    emissions.flightEmissions +
    emissions.carEmissions +
    emissions.publicTransportEmissions;
  const dietEmissions = emissions.dietEmissions;
  const energyEmissions =
    emissions.electricEmissions +
    emissions.waterEmissions +
    emissions.propaneEmissions +
    emissions.gasEmissions;

  const pieData = [
    {
      name: "Transportation",
      value: Number(transportationEmissions.toFixed(2)),
      color: "#000000",
    },
    { name: "Diet", value: Number(dietEmissions.toFixed(2)), color: "#333333" },
    {
      name: "Energy",
      value: Number(energyEmissions.toFixed(2)),
      color: "#666666",
    },
  ].sort((a, b) => b.value - a.value);

  const userTotal = emissions.totalEmissions;
  const comparisonData = [
    { name: "Your Emissions", value: userTotal },
    { name: "US Average", value: US_AVERAGE_EMISSIONS },
  ];
  return (
    <div style={customStyles.modalOverlay}>
      <div style={customStyles.modalContent}>
        <button onClick={onClose} style={customStyles.closeButton}>
          ✕
        </button>

        <h1 style={{ ...styles.header, fontSize: "24px" }}>
          Your Carbon Footprint Results
        </h1>

        <div style={styles.paragraph}>
          <strong>Total Emissions:</strong> {userTotal.toFixed(2)} tons CO₂/year
          <br />
          <strong>Monthly Average:</strong> {(userTotal / 12).toFixed(2)} tons
          CO₂/month
        </div>

        <div style={customStyles.responsiveGrid(width)}>
          <div style={customStyles.chartContainer}>
            <h2 style={{ ...styles.subHeader, fontSize: "18px" }}>
              Emission Breakdown
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <PieChart
                width={chartDimensions.width}
                height={chartDimensions.height}
              >
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={chartDimensions.height / 3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) =>
                    `${(value as number).toFixed(2)} tons CO₂`
                  }
                />
                <Legend />
              </PieChart>
            </div>
          </div>

          <div style={customStyles.chartContainer}>
            <h2 style={{ ...styles.subHeader, fontSize: "18px" }}>
              Compared to US Average
            </h2>
            {comparisonData.map((item, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>{item.name}</span>
                  <span style={{ fontSize: "14px" }}>
                    {item.value.toFixed(2)} tons/year
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${Math.min((item.value / 20) * 100, 100)}%`,
                      height: "100%",
                      backgroundColor:
                        item.name === "Your Emissions" ? "#000" : "#666",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ ...styles.subHeader, fontSize: "18px" }}>
          Detailed Breakdown
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={customStyles.table}>
            <thead>
              <tr>
                <th style={{ ...customStyles.tableHeader, padding: "8px 4px" }}>
                  Category
                </th>
                <th
                  style={{
                    ...customStyles.tableHeader,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  Emissions (tons CO₂/year)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Transportation Section */}
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    fontWeight: "bold",
                    padding: "8px 4px",
                  }}
                  colSpan={2}
                >
                  Transportation
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Flight Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.flightEmissions.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Car Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.carEmissions.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Public Transport
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.publicTransportEmissions.toFixed(2)}
                </td>
              </tr>

              {/* Diet Section */}
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    fontWeight: "bold",
                    padding: "8px 4px",
                  }}
                >
                  Diet
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.dietEmissions.toFixed(2)}
                </td>
              </tr>

              {/* Energy Section */}
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    fontWeight: "bold",
                    padding: "8px 4px",
                  }}
                  colSpan={2}
                >
                  Energy & Utilities
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Electric Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.electricEmissions.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Water Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.waterEmissions.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Propane Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.propaneEmissions.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    paddingLeft: "20px",
                    padding: "8px 4px",
                  }}
                >
                  Gas Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    padding: "8px 4px",
                  }}
                >
                  {emissions.gasEmissions.toFixed(2)}
                </td>
              </tr>

              {/* Total Row */}
              <tr>
                <td
                  style={{
                    ...customStyles.tableCell,
                    fontWeight: "bold",
                    padding: "12px 4px",
                    borderTop: "2px solid #000",
                  }}
                >
                  Total Emissions
                </td>
                <td
                  style={{
                    ...customStyles.tableCell,
                    textAlign: "right",
                    fontWeight: "bold",
                    padding: "12px 4px",
                    borderTop: "2px solid #000",
                  }}
                >
                  {userTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={() => window.print()} style={customStyles.button}>
            Save Results
          </button>
          <button onClick={onClose} style={customStyles.button}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmissionResults;

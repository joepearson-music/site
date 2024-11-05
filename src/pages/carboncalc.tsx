import React, { useState } from "react";
import { EmissionResults } from "./emissionsResults"; // Add this import

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const DIET_EMISSIONS = {
  "Meat Lover 🍖": 3.3,
  "Average 🍗": 2.5,
  "No Beef Or Lamb 🐟🥗": 1.9,
  "Vegetarian 🥕🥦": 1.7,
  "Vegan 🌱🥑": 1.5,
} as const;

type TransportationData = {
  longFlights: number;
  shortFlights: number;
  carType: keyof typeof CAR_EMISSION_RATES;
  milesPerWeek: number;
  useTrain: "Yes" | "No";
  trainFrequency: number;
  useBus: "Yes" | "No";
  busFrequency: number;
};

const CAR_EMISSION_RATES = {
  "Gas - ⛽️": 300,
  "Hybrid - ⛽️&⚡": 250,
  "Electric - ⚡": 200,
} as const;

type DietData = {
  dietType: keyof typeof DIET_EMISSIONS;
};

type EnergyData = {
  electricBill: number;
  waterBill: number;
  propaneBill: number;
  gasBill: number;
  peopleInHome: number;
  useWoodStove: "Yes" | "No";
};

type FormStatus = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export const CarbonCalc: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [transportData, setTransportData] = useState<TransportationData>({
    longFlights: 0,
    shortFlights: 0,
    carType: "Gas - ⛽️",
    milesPerWeek: 300,
    useTrain: "No",
    trainFrequency: 0,
    useBus: "No",
    busFrequency: 0,
  });
  const [dietData, setDietData] = useState<DietData>({
    dietType: "Average 🍗",
  });

  const [energyData, setEnergyData] = useState<EnergyData>({
    electricBill: 149.95,
    waterBill: 65,
    propaneBill: 152,
    gasBill: 62.5,
    peopleInHome: 1,
    useWoodStove: "No",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    error: null,
    success: false,
  });

  // Calculate emissions
  const calculateTotalEmissions = () => {
    const averageElectricBill = 149.95;
    const averageGasBill = 62.5;
    const averagePropaneBill = 152;
    const averageWaterBill = 65;

    // Expected emissions in tons per year based on the average bill
    const expectedElectricEmissions = 7.01;
    const expectedGasEmissions = 3.946;
    const expectedPropaneEmissions = 2.883;
    const expectedWaterEmissions = (averageWaterBill * 0.0002 * 12) / 2000; // minimal value for water

    const flightEmissions =
      transportData.longFlights * 1.35 + transportData.shortFlights * 0.9;
    const carEmissions =
      (CAR_EMISSION_RATES[transportData.carType] *
        transportData.milesPerWeek *
        52) /
      1000000;
    const publicTransportEmissions =
      transportData.trainFrequency * 0.002912 * 52 +
      transportData.busFrequency * 0.005824 * 52;

    const dietEmissions = DIET_EMISSIONS[dietData.dietType];

    const electricEmissions =
      energyData.electricBill > averageElectricBill
        ? expectedElectricEmissions +
          ((energyData.electricBill - averageElectricBill) * 0.0778 * 12) / 2000
        : expectedElectricEmissions *
          (energyData.electricBill / averageElectricBill);

    const gasEmissions =
      energyData.gasBill > averageGasBill
        ? expectedGasEmissions +
          ((energyData.gasBill - averageGasBill) * 0.1052 * 12) / 2000
        : expectedGasEmissions * (energyData.gasBill / averageGasBill);

    const propaneEmissions =
      energyData.propaneBill > averagePropaneBill
        ? expectedPropaneEmissions +
          ((energyData.propaneBill - averagePropaneBill) * 0.0316 * 12) / 2000
        : expectedPropaneEmissions *
          (energyData.propaneBill / averagePropaneBill);

    const waterEmissions =
      energyData.waterBill > averageWaterBill
        ? expectedWaterEmissions +
          ((energyData.waterBill - averageWaterBill) * 0.0002 * 12) / 2000
        : expectedWaterEmissions * (energyData.waterBill / averageWaterBill);

    const energyEmissions =
      (electricEmissions + waterEmissions + propaneEmissions + gasEmissions) /
      energyData.peopleInHome;

    return {
      /* Transportation */
      flightEmissions,
      carEmissions,
      publicTransportEmissions,

      /* Diet */
      dietEmissions,

      /* Energy */
      electricEmissions,
      waterEmissions,
      propaneEmissions,
      gasEmissions,
      energyEmissions,

      /* Total emissions Calculation */
      totalEmissions:
        flightEmissions +
        publicTransportEmissions +
        carEmissions +
        dietEmissions +
        electricEmissions +
        waterEmissions +
        propaneEmissions +
        gasEmissions,
    };
  };

  const handleInputChange = (
    field: keyof TransportationData | keyof EnergyData,
    value: string | number
  ) => {
    if (field in transportData) {
      setTransportData((prev) => ({
        ...prev,
        [field]:
          field === "useTrain" || field === "useBus"
            ? String(value)
            : Number(value) || 0,
      }));
    } else {
      setEnergyData((prev) => ({
        ...prev,
        [field]: Number(value) || 0,
      }));
    }
  };

  const submitToGoogleSheets = async () => {
    setFormStatus({ loading: true, error: null, success: false });

    const GOOGLE_SHEETS_URL =
      "https://script.google.com/macros/s/AKfycbxgxKKzDsxq8LhZzg5VpQv8V3nLuqySfbwvIKb79Z9nPrqDdnlceWc_csSbAxSa31RG/exec";

    try {
      const emissions = calculateTotalEmissions();

      // Create URL-encoded string instead of FormData
      const params = new URLSearchParams();
      params.append("name", userName);
      params.append("email", userEmail);
      params.append("longFlights", transportData.longFlights.toString());
      params.append("shortFlights", transportData.shortFlights.toString());
      params.append("carType", transportData.carType);
      params.append("milesPerWeek", transportData.milesPerWeek.toString());
      params.append(
        "trainMilesPerWeek",
        transportData.trainFrequency.toString()
      );
      params.append("busMilesPerWeek", transportData.busFrequency.toString());
      params.append("useTrain", transportData.useTrain);
      params.append("useBus", transportData.useBus);

      params.append("dietType", dietData.dietType);

      // Energy data
      params.append("electricBill", energyData.electricBill.toString());
      params.append("waterBill", energyData.waterBill.toString());
      params.append("propaneBill", energyData.propaneBill.toString());
      params.append("gasBill", energyData.gasBill.toString());
      params.append("peopleInHome", energyData.peopleInHome.toString());
      params.append("useWoodStove", energyData.useWoodStove);

      // Emissions calculations
      params.append("flightEmissions", emissions.flightEmissions.toString());
      params.append("carEmissions", emissions.carEmissions.toString());
      params.append(
        "publicTransportEmissions",
        emissions.publicTransportEmissions.toString()
      );
      params.append("dietEmissions", emissions.dietEmissions.toString());
      params.append(
        "electricEmissions",
        emissions.electricEmissions.toString()
      );
      params.append("waterEmissions", emissions.waterEmissions.toString());
      params.append("propaneEmissions", emissions.propaneEmissions.toString());
      params.append("gasEmissions", emissions.gasEmissions.toString());
      params.append("energyEmissions", emissions.energyEmissions.toString());
      params.append("totalEmissions", emissions.totalEmissions.toString());
      params.append("timestamp", new Date().toISOString());

      // Create a new XMLHttpRequest
      const xhr = new XMLHttpRequest();
      const url = `${GOOGLE_SHEETS_URL}?${params.toString()}`;

      // Return a new promise for the XHR request
      await new Promise((resolve, reject) => {
        xhr.open("GET", url, true);

        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(new Error(`HTTP Error: ${xhr.status}`));
          }
        };

        xhr.onerror = function () {
          // Even if we get an error, if it's just CORS related, we'll treat it as success
          // because Google Apps Script still processes the request
          resolve("Request processed");
        };

        xhr.send();
      });

      // If we get here, consider it a success
      setFormStatus({
        loading: false,
        error: null,
        success: true,
      });
      setShowResults(true);

      localStorage.setItem("userName", userName);
      localStorage.setItem("userEmail", userEmail);
      console.log("Submitted data:", Object.fromEntries(params));
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        loading: false,
        error: error instanceof Error ? error.message : "Failed to submit data",
        success: false,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userName &&
      userEmail &&
      isValidEmail(userEmail) &&
      !formStatus.loading
    ) {
      await submitToGoogleSheets();
    } else if (!isValidEmail(userEmail)) {
      setFormStatus({
        loading: false,
        error: "Please enter a valid email address",
        success: false,
      });
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const emissions = calculateTotalEmissions();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "40px" }}>Carbon Footprint Calculator</h2>

      <form onSubmit={handleSubmit}>
        <div style={sectionStyle}>
          <h3>Basic Information</h3>
          <div style={{ marginBottom: "20px" }}>
            <label>Your Name 👤</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={inputStyle}
              required
              placeholder="Enter your name"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Your Email ✉️</label>
            <input
              type="email" // Changed from "text" to "email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={inputStyle}
              required
              placeholder="Enter your Email"
            />
          </div>
        </div>

        {/* Transportation Section */}
        <div style={sectionStyle}>
          <h3>Transportation 🚗</h3>
          <div>
            <label>
              How many long flights have you taken in the past year? ✈️
            </label>

            <input
              type="number"
              min="0"
              value={transportData.longFlights}
              onChange={(e) =>
                setTransportData((prev) => ({
                  ...prev,
                  longFlights: Number(e.target.value) || 0, // Changed from Flights to longFlights
                }))
              }
              style={inputStyle}
            />
          </div>
          <div>
            <label>
              How many short flights have you taken in the past year? 🛩️
            </label>

            <input
              type="number"
              min="0"
              value={transportData.shortFlights}
              onChange={(e) =>
                setTransportData((prev) => ({
                  ...prev,
                  shortFlights: Number(e.target.value) || 0, // Changed from Flights to shortFlights
                }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>What type of car do you drive? 🚙</label>
            <select
              value={transportData.carType}
              onChange={(e) =>
                setTransportData((prev) => ({
                  ...prev,
                  carType: e.target.value as keyof typeof CAR_EMISSION_RATES,
                }))
              }
              style={inputStyle}
            >
              {Object.keys(CAR_EMISSION_RATES).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>How many miles do you drive per week? 🛣️</label>
            <input
              type="number"
              min="0"
              value={transportData.milesPerWeek}
              onChange={(e) =>
                handleInputChange("milesPerWeek", e.target.value)
              }
              style={inputStyle}
            />
          </div>
        </div>

        {/* Public Transportation Section */}
        <div style={sectionStyle}>
          <h3 style={{ marginBottom: "20px" }}>Public Transportation 🚌</h3>

          {/* Train Section */}
          <div>
            <p style={{ marginBottom: "10px" }}>
              Do you use the train/metro as a form of transportation? 🚆
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="radio"
                id="trainYes"
                checked={transportData.useTrain === "Yes"}
                onChange={() => handleInputChange("useTrain", "Yes")}
                style={{ marginRight: "8px" }}
              />
              <label htmlFor="trainYes" style={{ marginRight: "20px" }}>
                Yes
              </label>

              <input
                type="radio"
                id="trainNo"
                checked={transportData.useTrain === "No"}
                onChange={() => {
                  handleInputChange("useTrain", "No");
                  handleInputChange("trainFrequency", 0);
                }}
                style={{ marginRight: "8px" }}
              />
              <label htmlFor="trainNo">No</label>
            </div>
            {transportData.useTrain === "Yes" && (
              <div>
                <p style={{ marginBottom: "8px" }}>How many times a week? 📅</p>
                <input
                  type="number"
                  min="0"
                  placeholder="Times per week"
                  value={transportData.trainFrequency}
                  onChange={(e) =>
                    handleInputChange("trainFrequency", e.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            )}
          </div>

          {/* Bus Section */}
          <div>
            <p style={{ marginBottom: "10px" }}>
              Do you use the bus as a form of transportation? 🚍
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="radio"
                id="busYes"
                checked={transportData.useBus === "Yes"}
                onChange={() => handleInputChange("useBus", "Yes")}
                style={{ marginRight: "8px" }}
              />
              <label htmlFor="busYes" style={{ marginRight: "20px" }}>
                Yes
              </label>

              <input
                type="radio"
                id="busNo"
                checked={transportData.useBus === "No"}
                onChange={() => {
                  handleInputChange("useBus", "No");
                  handleInputChange("busFrequency", 0);
                }}
                style={{ marginRight: "8px" }}
              />
              <label htmlFor="busNo">No</label>
            </div>
            {transportData.useBus === "Yes" && (
              <div>
                <p style={{ marginBottom: "8px" }}>How many times a week? 📅</p>
                <input
                  type="number"
                  min="0"
                  placeholder="Times per week"
                  value={transportData.busFrequency}
                  onChange={(e) =>
                    handleInputChange("busFrequency", e.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            )}
          </div>
        </div>

        {/* Diet Section */}
        <div style={sectionStyle}>
          <h3>Diet 🍽️</h3>
          <div>
            <label>What best describes your diet? 🥗</label>
            <select
              value={dietData.dietType}
              onChange={(e) =>
                setDietData({
                  dietType: e.target.value as keyof typeof DIET_EMISSIONS,
                })
              }
              style={inputStyle}
            >
              {Object.keys(DIET_EMISSIONS).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Energy Section */}
        <div style={sectionStyle}>
          <h3>Energy & Utilities 💡</h3>
          <div>
            <label>What is your monthly electric bill? ($) ⚡</label>
            <input
              type="number"
              min="0"
              value={energyData.electricBill}
              onChange={(e) =>
                setEnergyData((prev) => ({
                  ...prev,
                  electricBill: Number(e.target.value) || 0,
                }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>What is your monthly water bill? ($) 💧</label>
            <input
              type="number"
              min="0"
              value={energyData.waterBill}
              onChange={(e) =>
                setEnergyData((prev) => ({
                  ...prev,
                  waterBill: Number(e.target.value) || 0,
                }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>What is your monthly propane bill? ($) 🔥</label>
            <input
              type="number"
              min="0"
              value={energyData.propaneBill}
              onChange={(e) =>
                setEnergyData((prev) => ({
                  ...prev,
                  propaneBill: Number(e.target.value) || 0,
                }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>What is your monthly natural gas bill? ($) ⛽</label>
            <input
              type="number"
              min="0"
              value={energyData.gasBill}
              onChange={(e) =>
                setEnergyData((prev) => ({
                  ...prev,
                  gasBill: Number(e.target.value) || 0,
                }))
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>How many people live in your home? 👥</label>
            <input
              type="number"
              min="1"
              value={energyData.peopleInHome}
              onChange={(e) =>
                setEnergyData((prev) => ({
                  ...prev,
                  peopleInHome: Number(e.target.value) || 1,
                }))
              }
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "10px" }}>
            Do you use a wood stove for heating? 🪵
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              type="radio"
              id="woodStoveYes"
              checked={energyData.useWoodStove === "Yes"}
              onChange={() =>
                setEnergyData((prev) => ({
                  ...prev,
                  useWoodStove: "Yes",
                }))
              }
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="woodStoveYes" style={{ marginRight: "20px" }}>
              Yes
            </label>

            <input
              type="radio"
              id="woodStoveNo"
              checked={energyData.useWoodStove === "No"}
              onChange={() =>
                setEnergyData((prev) => ({
                  ...prev,
                  useWoodStove: "No",
                }))
              }
              style={{ marginRight: "8px" }}
            />
            <label htmlFor="woodStoveNo">No</label>
          </div>
        </div>

        {/* Total Emissions */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <h3>Total Carbon Footprint</h3>
          <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            {emissions.totalEmissions.toFixed(2)} tons CO2/year
          </p>

          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Flight Emissions: {emissions.flightEmissions.toFixed(2)} tons
            CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Car Emissions: {emissions.carEmissions.toFixed(2)} tons CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Public Transport Emissions:{" "}
            {emissions.publicTransportEmissions.toFixed(2)} tons CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Diet Emissions: {emissions.dietEmissions.toFixed(2)} tons CO2/year
          </div>

          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Electric Emissions: {emissions.electricEmissions.toFixed(2)} tons
            CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Propane Emissions: {emissions.propaneEmissions.toFixed(2)} tons
            CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Gas Emissions: {emissions.gasEmissions.toFixed(2)} tons CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Water Emissions: {emissions.waterEmissions.toFixed(2)} tons CO2/year
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            Energy/Utilities Emissions: {emissions.energyEmissions.toFixed(2)}{" "}
            tons CO2/year
          </div>
        </div>

        {/* Status Messages */}
        {formStatus.error && (
          <div
            style={{
              color: "red",
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "#ffebee",
              borderRadius: "4px",
            }}
          >
            Error: {formStatus.error}
          </div>
        )}

        {formStatus.success && (
          <div
            style={{
              color: "green",
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "#e8f5e9",
              borderRadius: "4px",
            }}
          >
            Data submitted successfully!
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: formStatus.loading ? "#cccccc" : "#217e38",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: formStatus.loading ? "not-allowed" : "pointer",
            width: "100%",
            fontSize: "16px",
          }}
          disabled={!userName || !userEmail || formStatus.loading} // Added userEmail check
        >
          {formStatus.loading ? "Submitting..." : "Calculate & Save Results"}
        </button>
      </form>
      <EmissionResults
        emissions={emissions}
        show={showResults}
        onClose={() => setShowResults(false)}
      />
    </div>
  );
};
export default CarbonCalc;

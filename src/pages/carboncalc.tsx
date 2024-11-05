import React, { useState } from "react";

const DIET_EMISSIONS = {
  "Meat Lover 🍖": 3.3,
  "Average 🍗": 2.5,
  "No Beef Or Lamb 🐟🥗": 1.9,
  "Vegetarian 🥕🥦": 1.7,
  "Vegan 🌱🥑": 1.5,
} as const;

type TransportationData = {
  Flights: number;
  milesPerWeek: number;
  useTrain: "Yes" | "No";
  trainFrequency: number;
};

type DietData = {
  dietType: keyof typeof DIET_EMISSIONS;
};

type EnergyData = {
  electricBill: number;
  peopleInHome: number;
};

type FormStatus = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export const CarbonCalc: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [transportData, setTransportData] = useState<TransportationData>({
    Flights: 0,
    milesPerWeek: 0,
    useTrain: "No",
    trainFrequency: 0,
  });
  const [dietData, setDietData] = useState<DietData>({
    dietType: "Average 🍗",
  });
  const [energyData, setEnergyData] = useState<EnergyData>({
    electricBill: 0,
    peopleInHome: 1,
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    error: null,
    success: false,
  });

  // Calculate emissions
  const calculateTotalEmissions = () => {
    const flightEmissions = transportData.Flights * 1.35;
    const carEmissions = transportData.milesPerWeek / 1000;
    const publicTransportEmissions =
      transportData.trainFrequency * 0.002912 * 52;
    const dietEmissions = DIET_EMISSIONS[dietData.dietType];
    const electricEmissions =
      (energyData.electricBill * 0.0005 * 12) / energyData.peopleInHome;

    return {
      flightEmissions,
      publicTransportEmissions,
      carEmissions,
      dietEmissions,
      electricEmissions,
      totalEmissions:
        flightEmissions +
        publicTransportEmissions +
        carEmissions +
        dietEmissions +
        electricEmissions,
    };
  };

  const handleInputChange = (
    field: keyof TransportationData | keyof EnergyData,
    value: string | number
  ) => {
    if (field in transportData) {
      setTransportData((prev) => ({
        ...prev,
        [field]: field === "useTrain" ? String(value) : Number(value) || 0,
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
      "https://script.google.com/macros/s/AKfycbxC_0Sn-Mb1AHb54E7g-Ps1qssAp-xtnmdEYN28hj-2m25vQnIL1A4-QflDtOa8yDY1/exec"; // Replace with your deployed script URL

    try {
      const emissions = calculateTotalEmissions();
      const formData = new FormData();
      formData.append("name", userName);
      formData.append("flights", transportData.Flights.toString());
      formData.append("milesPerWeek", transportData.milesPerWeek.toString());
      formData.append("useTrain", transportData.useTrain);
      formData.append(
        "trainFrequency",
        transportData.trainFrequency.toString()
      );
      formData.append("dietType", dietData.dietType);
      formData.append("electricBill", energyData.electricBill.toString());
      formData.append("peopleInHome", energyData.peopleInHome.toString());
      formData.append("flightEmissions", emissions.flightEmissions.toString());
      formData.append("carEmissions", emissions.carEmissions.toString());
      formData.append(
        "publicTransportEmissions",
        emissions.publicTransportEmissions.toString()
      );
      formData.append("dietEmissions", emissions.dietEmissions.toString());
      formData.append(
        "electricEmissions",
        emissions.electricEmissions.toString()
      );
      formData.append("totalEmissions", emissions.totalEmissions.toString());
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (response) {
        setFormStatus({
          loading: false,
          error: null,
          success: true,
        });

        localStorage.setItem("userName", userName);
        console.log("Submitted data:", Object.fromEntries(formData));
      }
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
    if (userName && !formStatus.loading) {
      await submitToGoogleSheets();
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
            <label>Your Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={inputStyle}
              required
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Transportation Section */}
        <div style={sectionStyle}>
          <h3>Transportation</h3>
          <div>
            <label>How many flights have you taken in the past year?</label>
            <input
              type="number"
              min="0"
              value={transportData.Flights}
              onChange={(e) =>
                setTransportData((prev) => ({
                  ...prev,
                  Flights: Number(e.target.value) || 0,
                }))
              }
              style={inputStyle}
            />
          </div>
          <div>
            <label>How many miles do you drive per week?</label>
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
          <h3 style={{ marginBottom: "20px" }}>Public Transportation</h3>
          <div>
            <p style={{ marginBottom: "10px" }}>
              Do you use the train/metro as a form of transportation? *
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
                <p style={{ marginBottom: "8px" }}>How many times a week?</p>
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
        </div>

        {/* Diet Section */}
        <div style={sectionStyle}>
          <h3>Diet</h3>
          <div>
            <label>What best describes your diet?</label>
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
          <h3>Energy</h3>
          <div>
            <label>What is your monthly electric bill? ($)</label>
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
            <label>How many people live in your home?</label>
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
            Energy Emissions: {emissions.electricEmissions.toFixed(2)} tons
            CO2/year
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
          disabled={!userName || formStatus.loading}
        >
          {formStatus.loading ? "Submitting..." : "Calculate & Save Results"}
        </button>
      </form>
    </div>
  );
};
export default CarbonCalc;

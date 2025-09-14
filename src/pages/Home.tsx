import React from "react";
import { Layout, styles } from "..//layout/layout";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {

  const linkStyle = {
    color: "#0066cc",
    textDecoration: "none",
    display: "block",
    marginBottom: "4px",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  return (
    <Layout title="NEW MUSIC...">
      <p style={styles.paragraph}>
        Hello World; My name is Joe Pearson, I am a Undergraduate student and this is my personal website. I plan to publish my music solely on this domain.
      </p>

      <h2 style={styles.subHeader}>Site Development 🛠️</h2>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <strong>Note:</strong> This site is still in development and constantly
        being updated!
      </div>
      

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
import React from "react";
import { Layout, styles } from "../layout/layout"; // Import the Layout component
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  return (
    <Layout title="Home">
      {" "}
      {/* Wrap content with Layout */}
      <p style={styles.paragraph}>Big Heads</p>
      <h2 style={styles.subTitle}>Site Development 🛠️</h2>
      <div style={styles.note}>
        <strong>Note:</strong> This site is still in development and constantly
        being updated!
      </div>
      <p style={styles.paragraph}>
        This site is still pre-launch, and we haven't linked it to any public
        profiles yet. We are constantly adding updates and new features!
      </p>
      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;

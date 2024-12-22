import React from "react";
import CustomSocialBar from "./components/socialbar";
import { styles, Layout } from "../layout/layout"; // Import the Layout component

const HomePage: React.FC = () => {
  return (
    <Layout title="TEST"> {/* Wrap content with Layout */}
      <p style={styles.paragraph}>
        Hi, I'm Joe Pearson, a finance major and aspiring developer. This
        website hosts some of my projects and helps me develop my web
        development skills. Stay tuned as I add more!
      </p>

      <h2 style={styles.subTitle}>Site Development 🛠️</h2>
      <div style={styles.note}>
        <strong>Note:</strong> This site is still in development and constantly
        being updated!
      </div>
      <p style={styles.paragraph}>
        This site is still pre-launch, and I haven't linked it to any public
        profiles yet. I'm constantly adding updates and new features!
      </p>

      <CustomSocialBar />
    </Layout>
  );
};

export default HomePage;
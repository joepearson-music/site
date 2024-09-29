import React from "react";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Welcome to My Website</h1>
      <p style={styles.paragraph}>
        Hi, I'm Jack Pearson, a finance major and aspiring developer. This
        website hosts some of my projects and helps me develop my web
        development skills. Stay tuned as I add more!
      </p>

      <h2 style={styles.sectionTitle}>Site Development 🛠️</h2>
      <div style={styles.note}>
        <strong>Note:</strong> This site is still in development and constantly
        being updated!
      </div>
      <p style={styles.paragraph}>
        This site is still pre-launch, and I haven't linked it to any public
        profiles yet. I'm constantly adding updates and new features!
      </p>

      <CustomSocialBar />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "bold" as "bold",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold" as "bold",
    marginTop: "30px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  socialBar: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    margin: "20px 0",
  },
  socialLink: {
    fontSize: "24px",
    color: "#333",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
};

export default HomePage;

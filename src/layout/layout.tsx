// src/layout/layout.tsx
import React from "react";

const styles = {
  pageContainer: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: '"Times New Roman", serif',
  },
  header: {
    fontSize: "28px",
    marginBottom: "25px",
    fontWeight: "bold",
    color: "#000",
  },
  subHeader: {
    fontSize: "22px",
    marginTop: "25px",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#000",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  list: {
    marginLeft: "20px",
    marginBottom: "20px",
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "12px",
    fontSize: "16px",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

interface PageLayoutProps {
  title?: string; // accept title again, but optional
  children: React.ReactNode;
}

const Layout: React.FC<PageLayoutProps> = ({ title, children }) => (
  <div style={styles.pageContainer}>
    {title ? <h1 style={styles.header}>{title}</h1> : null}
    {children}
  </div>
);

export { Layout, styles };

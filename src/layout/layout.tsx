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
    fontWeight: "Bold",
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
    "&:hover": {
      textDecoration: "underline",
    },
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
};

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<PageLayoutProps> = ({ title, children }) => (
  <div style={styles.pageContainer}>
    <h1 style={styles.header}>{title}</h1>
    {children}
  </div>
);

export { Layout, styles };

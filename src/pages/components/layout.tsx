import React from "react";

const styles = {
  pageContainer: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Times New Roman",
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
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "16px",
  },
  link: {
    color: "#0066cc",
    textDecoration: "none",
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

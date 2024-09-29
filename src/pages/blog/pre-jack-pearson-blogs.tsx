import React from "react";
import { Link } from "react-router-dom";
import BlogPost1 from "./components/blog1";
import BlogPost2 from "./components/blog2";
import BlogPost3 from "./components/blog3";
import BlogPost4 from "./components/blog4";

const NewSite: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pre jack-pearson.com Blogs</h1>
      <div style={styles.note}>
        <strong>Note:</strong> These blogs were written during my spring
        semester of my Junior year of school. They were published on a few
        different HTML or Javascript sites I made to track my progress as I
        built Forevergreen's first product. I like to have them as it is a
        reminder of how far I grew in my technical journey.
      </div>
      <BlogPost4 />
      <hr style={styles.horizontalLine} />
      <BlogPost3 />
      <hr style={styles.horizontalLine} />
      <BlogPost2 />
      <hr style={styles.horizontalLine} />
      <BlogPost1 />
      <hr style={styles.horizontalLine} />

      <hr style={styles.horizontalLine} />
      <Link to="/writing" style={styles.backLink}>
        Back to Writing
      </Link>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "times new roman",
    boxSizing: "border-box" as "border-box",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  subSectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
  },
  list: {
    marginLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
  },
  backLink: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#000",
  },
  image: {
    maxWidth: "75%",
    height: "auto",
    marginBottom: "20px",
    justifyContent: "center",
  },
  abstractTitle: {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  abstract: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  referencesContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  referencesList: {
    paddingLeft: "20px",
  },
  referencesListItem: {
    fontSize: "14px",
    marginBottom: "10px",
    lineHeight: "1.4",
  },
  referencesLink: {
    color: "#0066cc",
    textDecoration: "none",
  },
  date: {
    fontSize: "16px",
    marginTop: "20px",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  note: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "20px",
  },
  horizontalLine: {
    border: 0,
    height: "1px",
    backgroundColor: "#ccc",
    margin: "20px 0",
  },
  twitterEmbed: {
    marginBottom: "20px",
    maxWidth: "550px", // Adjust as needed
    margin: "0 auto",
  },
};

export default NewSite;

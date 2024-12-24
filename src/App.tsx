import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/blog/Blog";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Video from "./pages/Video";
import Writing from "./pages/Writing";

const App: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
  ];

  const projectItems = [
    { path: "/blogs", label: "Blogs" },
    { path: "/video", label: "Video" },
    { path: "/writing", label: "Writing" },
  ];

  const styles: Record<string, React.CSSProperties> = {
    header: {
      backgroundColor: "white",
      padding: "20px 10px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap" as const,
      gap: "15px",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px",
    },
    dropdownContainer: {
      position: "relative" as const,
      display: "inline-block",
    },
    dropdownButton: {
      background: "none",
      border: "none",
      color: "black",
      fontSize: "16px",
      cursor: "pointer",
      padding: "5px",
      fontFamily: '"Times New Roman", Times, serif',
    },
    dropdownContent: {
      display: isProjectsOpen ? "block" : "none",
      position: "absolute" as const,
      backgroundColor: "white",
      minWidth: "140px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      zIndex: 1,
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "4px",
    },
    dropdownLink: {
      color: "black",
      textDecoration: "none",
      padding: "8px 12px",
      display: "block",
      textAlign: "center" as const,
    },
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      fontFamily: '"Times New Roman", Times, serif',
    },
    main: {
      flex: 1,
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
    },
  };

  return (
    <Router>
      <div style={styles.mainContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}>Big Heads</h1>
          <nav style={styles.nav}>
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} style={styles.link}>
                {item.label}
              </Link>
            ))}

            <div
              style={styles.dropdownContainer}
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button style={styles.dropdownButton}>Projects ▾</button>
              <div style={styles.dropdownContent}>
                {projectItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={styles.dropdownLink}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/video" element={<Video />} />
            <Route path="/writing/*" element={<Writing />} />
            <Route path="/blog/*" element={<Blogs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

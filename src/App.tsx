// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./fonts.css";

// Pages (make sure these filenames/casing match your actual files)
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NewMusic from "./pages/newmusic";
import Encore from "./pages/encore"; // ✅ add this

const App: React.FC = () => {
  useEffect(() => {
    document.title = "joepearson.music";
  }, []);

  // Only include pages you want visible in the header
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    // HIDDEN: do not list /newmusic or /encore here
  ];

  const styles: Record<string, React.CSSProperties> = {
    header: { backgroundColor: "#ffffff", padding: "20px 10px", textAlign: "center" },
    title: { fontSize: "50px", marginBottom: "20px" },
    nav: { display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "15px" },
    link: { color: "black", textDecoration: "none", fontSize: "16px", padding: "5px" },
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: '"Times New Roman", serif',
      backgroundColor: "#ffffff",
    },
    main: {
      flex: 1,
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#ffffff",
    },
  };

  return (
    <Router>
      <div style={styles.mainContainer}>
        <header style={styles.header}>
          <h1 style={styles.title}>Joe Pearson</h1>
          <nav style={styles.nav}>
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} style={styles.link}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main style={styles.main}>
          <Routes>
            {/* Public header links */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />

            {/* Hidden routes: accessible via direct URL only */}
            <Route path="/newmusic" element={<NewMusic />} />
            <Route path="/encore" element={<Encore />} />

            {/* Optional: fallback */}
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

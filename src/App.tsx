// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./fonts.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NewMusic from "./pages/newmusic";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "joepearson.music";
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
   // HIDDEN  { path: "/newmusic", label: "New Music" },
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/newmusic" element={<NewMusic />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

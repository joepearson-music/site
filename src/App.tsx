// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./fonts.css";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NewMusic from "./pages/newmusic";
import SelfTitled from "./pages/selftitled";
import Pre876876 from "./pages/pre876876";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "joepearson.music";
  }, []);

  // Pages visible in the header (hotbar)
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/selftitled", label: "Self Titled" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
  ];

  const styles: Record<string, React.CSSProperties> = {
    header: {
      backgroundColor: "#ffffff",
      padding: "12px 10px", // reduced since title is gone
      textAlign: "center",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px",
    },
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
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />

            {/* Hidden-but-real routes */}
            <Route path="/selftitled" element={<SelfTitled />} />
            <Route path="/pre876876" element={<Pre876876 />} />
            <Route path="/newmusic" element={<NewMusic />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import paper from "./papers/on-temperament-and-tuning.json";
import "./Research.css";

const Research: React.FC = () => {
  useEffect(() => { document.title = "Research | joepearson.music"; }, []);
  return (
    <div className="research-page">
      <header className="research-landing-header">
        <p className="research-overline">joepearson.music</p>
        <h1>Research</h1>
        <p>Academic papers, essays, and musicological investigations.</p>
      </header>
      <section aria-labelledby="research-projects-title" className="research-project-list">
        <h2 id="research-projects-title">Published research</h2>
        <article className="research-project">
          <h3><Link to={`/research/${paper.slug}`}>{paper.title}</Link></h3>
          <p>University of Pittsburgh · Senior Seminar</p>
          <p className="research-muted">Working academic draft · November 12, 2026</p>
        </article>
      </section>
    </div>
  );
};

export default Research;

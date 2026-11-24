import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Fingerboard from "./ViolinFingerboard";
import "../Backstage.css";

/** Direct-link-only testing route; the component also appears on /backstage. */
const BackstageViolinPage: React.FC = () => {
  useEffect(() => {
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const meta = existing ?? document.createElement("meta");
    if (!existing) { meta.name = "robots"; document.head.appendChild(meta); }
    const previous = meta.content;
    meta.content = "noindex, nofollow";
    return () => {
      if (existing) meta.content = previous;
      else meta.remove();
    };
  }, []);

  return (
    <div className="backstage">
      <header className="backstage-intro">
        <p className="backstage-kicker">joepearson.music / backstage / violin</p>
        <h1>Violin fingerboard</h1>
        <p><Link to="/backstage">Back to Backstage</Link></p>
      </header>
      <div style={{ paddingTop: 32 }}><Fingerboard /></div>
    </div>
  );
};

export default BackstageViolinPage;

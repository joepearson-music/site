import React, { useEffect } from "react";
import { BackstageEntryView } from "./BackstageEntryView";
import { backstageEntries } from "./entries";
import "./Backstage.css";

const Backstage: React.FC = () => {
  useEffect(() => {
    // Client-side robots meta, complemented by the Netlify X-Robots-Tag header
    // so crawlers receive noindex even without executing JavaScript.
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const tag = existing || document.createElement("meta");
    const previous = existing ? existing.getAttribute("content") : null;
    if (!existing) {
      tag.setAttribute("name", "robots");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", "noindex, nofollow");
    return () => {
      if (!existing) {
        tag.remove();
      } else if (previous === null) {
        tag.removeAttribute("content");
      } else {
        tag.setAttribute("content", previous);
      }
    };
  }, []);

  const orderedEntries = [...backstageEntries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="backstage">
      <header className="backstage-intro">
        <p className="backstage-kicker">joepearson.music / backstage</p>
        <h1>Backstage</h1>
        <p className="backstage-description">
          A place for work in progress and possible additions to the website.
        </p>
      </header>
      {orderedEntries.length > 0 ? (
        <section aria-label="Backstage entries" className="backstage-entries">
          {orderedEntries.map((entry) => <BackstageEntryView key={entry.id} entry={entry} />)}
        </section>
      ) : (
        <section className="backstage-empty" aria-label="Backstage entries">
          <p>No entries yet.</p>
        </section>
      )}
    </div>
  );
};

export default Backstage;

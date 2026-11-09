import React from "react";
import { BackstageEntryView } from "./BackstageEntryView";
import { backstageEntries } from "./entries";
import "./Backstage.css";

const Backstage: React.FC = () => {
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

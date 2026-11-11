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
        {/* Permanent introduction: new content is published in backstageEntries below. */}
        <p className="backstage-description">
          Backstage is the working archive behind joepearson.music. I use this
          space to put ideas on the record before they are finished: sketches,
          recordings, scores, research, notes, and the stories behind them.
          Some of what appears here may eventually become part of an album,
          performance, or another page on this site; some may remain experiments.
          The point is not to present a polished catalogue, but to preserve the
          process—what I was making, what I was thinking, and how a piece changed
          along the way. New material will appear below this introduction, which
          will remain at the top as the archive grows.
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

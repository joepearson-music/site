import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import paper from "./papers/on-temperament-and-tuning.json";
import ResearchExpansion, { ResearchExpansionKind } from "./ResearchExpansion";
import "./Research.css";

type PaperBlock = {
  id: string;
  type: string;
  text: string;
  description?: string;
};

type OptionalExpansion = {
  kind: ResearchExpansionKind;
  title: string;
  content: React.ReactNode;
};

/**
 * Future interactive edition: place optional supplements after any block ID.
 * Nothing is inserted into the academic edition until authored and reviewed.
 *
 * Example:
 * "p-25": [{ kind: "math", title: "Explore the Mathematics", content: <p>…</p> }]
 */
const expansionsAfter: Record<string, OptionalExpansion[]> = {};

const headingBlocks = (paper.blocks as PaperBlock[]).filter(b => b.type === "heading");

function referenceWithLinks(text: string): React.ReactNode {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
    if (!/^https?:\/\//.test(part)) return <React.Fragment key={i}>{part}</React.Fragment>;
    const url = part.replace(/[.,]$/, "");
    const suffix = part.slice(url.length);
    return <React.Fragment key={i}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a>{suffix}</React.Fragment>;
  });
}

const ResearchPaper: React.FC = () => {
  useEffect(() => { document.title = paper.title + " | joepearson.music"; }, []);
  return (
    <article className="research-page research-essay">
      <div className="research-back"><Link to="/research">← All research</Link></div>
      <header className="research-essay-header">
        <p className="research-overline">{paper.institution} · {paper.course}</p>
        <h1>{paper.title}</h1>
        <p className="research-byline">{paper.author} · {paper.instructor}</p>
        <p className="research-muted">{paper.status} · November 12, 2026</p>
      </header>

      <nav className="research-toc" aria-label="Table of contents">
        <h2>Contents</h2>
        <ol>
          {headingBlocks.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.text}</a></li>)}
        </ol>
      </nav>

      <div className="research-paper-body">
        {(paper.blocks as PaperBlock[]).map(block => (
          <React.Fragment key={block.id}>
            {block.type === "heading" ? (
              <h2 id={block.id} className="research-section-heading">{block.text}</h2>
            ) : block.type === "equation" ? (
              <figure className="research-equation" role="group" aria-label={block.description || block.text}>
                <div role="math" aria-label={block.description || block.text}>{block.text}</div>
              </figure>
            ) : block.type === "reference" ? (
              <p className="research-reference">{referenceWithLinks(block.text)}</p>
            ) : (
              <p className={block.id.startsWith("p-") && Number(block.id.slice(2)) <= 17 ? "research-dialogue" : ""}>{block.text}</p>
            )}
            {(expansionsAfter[block.id] || []).map((addition, i) => (
              <ResearchExpansion key={block.id + i} kind={addition.kind} title={addition.title}>
                {addition.content}
              </ResearchExpansion>
            ))}
          </React.Fragment>
        ))}
      </div>
      <footer className="research-essay-footer">
        <Link to="/research">← Return to Research</Link>
      </footer>
    </article>
  );
};

export default ResearchPaper;

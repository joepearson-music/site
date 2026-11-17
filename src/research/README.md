# Research pages

The public index is at `/research`. Each project has a separate URL; the first is
`/research/on-temperament-and-tuning`.

The source text and publication metadata for the first essay live in
`papers/on-temperament-and-tuning.json` rather than the React presentation component.
Preserve original words, paragraph boundaries, citations, quotations, section headings,
and bibliography when replacing this draft with an approved revision. Equation blocks
were transcribed from the PDF's visible mathematical notation because automated PDF text
extraction displaced superscripts and fraction bars.

`ResearchPaper.tsx` renders paragraph, heading, equation, and reference blocks.
`ResearchExpansion.tsx` provides native <details> expansions, collapsed by default.
To enrich the interactive edition later, add reviewed modules to `expansionsAfter`,
keyed by an existing block ID. Suggested labels: “Explore the Mathematics,” “Listen
to the Difference,” and “Historical Context.” Do not make the essay dependent on modules.

Add future projects to the Research index and create a dedicated route for each. Keep
research page styles inside `Research.css`, without changing `/backstage`.

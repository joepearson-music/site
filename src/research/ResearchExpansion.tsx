import React from "react";

export type ResearchExpansionKind = "math" | "audio" | "history";

export interface ResearchExpansionProps {
  kind: ResearchExpansionKind;
  title: string;
  children: React.ReactNode;
}

/** Optional, keyboard-accessible supplemental material. Closed by default. */
const ResearchExpansion: React.FC<ResearchExpansionProps> = ({kind, title, children}) => (
  <details className="research-expansion" data-kind={kind}>
    <summary>{title}</summary>
    <div className="research-expansion-body">{children}</div>
  </details>
);

export default ResearchExpansion;

/** Content model for independent, reusable backstage entries. */
export type BackstageInline = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
};

export type BackstageBlock =
  | { type: "paragraph"; content: BackstageInline[] }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; ordered?: boolean; items: BackstageInline[][] }
  | { type: "image"; src: string; alt: string; caption?: string; credit?: string }
  | { type: "audio"; src: string; title: string; caption?: string; credit?: string }
  | { type: "video"; src: string; title: string; poster?: string; captionsSrc?: string; caption?: string; credit?: string }
  | { type: "document"; src: string; label: string; description?: string; credit?: string; download?: boolean }
  | { type: "score"; src: string; title: string; description?: string }
  | { type: "details"; label: string; blocks: BackstageBlock[] }
  | { type: "link"; href: string; label: string; description?: string }
  | { type: "custom"; componentId: string };

export interface BackstageEntry {
  /** Stable, unique identifier used for deep links and future promotion. */
  id: string;
  title: string;
  /** ISO calendar date: YYYY-MM-DD. */
  date: string;
  summary?: BackstageInline[];
  blocks: BackstageBlock[];
}

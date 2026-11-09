export interface CoverEssay {
  /** Identical to the analysis packet folder name, for permanent deep links. */
  id: string;
  title: string;
  attribution: string;
  origin: string;
  performance: string;
  duration: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  sources: {
    label: string;
    url: string;
  }[];
}

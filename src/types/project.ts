// The shape of a single project. Every project on the site follows this.
// To add a project, add an object of this type to src/data/projects.ts.

export type ProjectSection = {
  heading: string;
  body: string; // a paragraph; supports plain text
};

export type Project = {
  slug: string; // URL id, e.g. "blood-glucose-breath" -> /projects/blood-glucose-breath
  title: string;
  blurb: string; // one-line summary shown on the card
  tags: string[]; // short tech/skill tags, e.g. ["Embedded", "Sensors"]
  featured?: boolean; // (reserved) flag to highlight a project later
  thumbnail?: string; // optional image path; leave undefined for a placeholder

  // "Coles Notes" — the 10-second scannable summary at the top of the page
  summary: {
    problem: string;
    role: string;
    stack: string;
    outcome: string;
  };

  // The in-depth write-up, rendered as stacked sections
  sections: ProjectSection[];

  links?: { label: string; href: string }[]; // optional repo / demo links
};

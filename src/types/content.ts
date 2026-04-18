export type TimelineBlockContent = {
  year: number;
  title: string;
  headline: string;
  body: string;
  prereq_lead: string;
  metric: {
    value: string;
    label: string;
    citation_key: string;
  };
  technical_box: {
    summary: string;
    body: string;
  };
  footnotes: string[];
};

export type PrereqCard = {
  id:
    | 'hal-tag'
    | 'energy-intel'
    | 'branching'
    | 'iso'
    | 'levers'
    | 'kardashev';
  number: string;
  title: string;
  body: string;
  citation_key?: string;
};

export type Bridge = {
  id: 'fusion-bootstrap' | 'dyson-partial' | 'self-sourcing';
  anchor_year_from: number;
  anchor_year_to: number;
  title: string;
  body: string;
  citation_keys: string[];
};

export type ContentDict = {
  meta: {
    title: string;
    subtitle: string;
    author_line: string;
    publish_date: string;
    last_updated: string;
  };
  disclaimer: {
    title: string;
    body: string;
    dismiss_label: string;
  };
  nav: {
    hero: string;
    intro: string;
    pattern: string;
    prior_art: string;
    milestones: string;
    timeline: string;
    charts: string;
    sources: string;
    prereq: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    cta: string;
  };
  intro: {
    title: string;
    body: string;
    core_claim: string;
  };
  ha_primer: {
    title: string;
    lede: string;
    l_ladder: {
      title: string;
      intro: string;
      rows: { level: string; token: string; example: string }[];
    };
    principles: {
      title: string;
      items: { heading: string; body: string }[];
    };
    hal_vs_l: {
      title: string;
      body: string;
    };
    examples_title: string;
    // Each example renders as a titled code-block column (5 levels, L1 → L5).
    examples: { title: string; levels: string[] }[];
    closing: string;
  };
  prereq: {
    title: string;
    intro: string;
    cards: PrereqCard[];
  };
  pattern: {
    title: string;
    intro: string;
    note: string;
    chart_caption: string;
    table_headers: {
      epoch: string;
      years_ago: string;
      years_since_prev: string;
      compression: string;
    };
  };
  prior_art: {
    title: string;
    intro: string;
    readme_quote_title: string;
    readme_quote: string;
    files_title: string;
    stopped_at_title: string;
    stopped_at_body: string;
    screenshot_placeholder: string;
  };
  milestones: {
    title: string;
    intro: string;
    slider_label: string;
    chart_caption: string;
    table_headers: {
      cluster: string;
      hal: string;
      year: string;
      power: string;
      deliverable: string;
    };
  };
  timeline_section: {
    title: string;
    intro: string;
  };
  timeline_blocks: TimelineBlockContent[];
  bridges: Bridge[];
  charts_section: {
    title: string;
    intro: string;
    ha_compression: { title: string; caption: string };
    energy_per_hal: { title: string; caption: string };
    scaling_law: { title: string; caption: string };
    bottleneck: { title: string; caption: string };
  };
  technical_boxes: {
    title: string;
    intro: string;
    boxes: { id: string; title: string; body: string; citation_key: string }[];
  };
  sources: {
    title: string;
    intro: string;
    matrix_title: string;
    matrix_intro: string;
  };
  footer: {
    authors: string;
    org: string;
    license: string;
    last_updated_label: string;
    repo_label: string;
  };
  labels: {
    source: string;
    extrapolation: string;
    cite_prefix: string;
    technical_box_summary: string;
    watts_unit: string;
  };
};

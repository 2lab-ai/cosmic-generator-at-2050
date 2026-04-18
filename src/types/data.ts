export type SourceLabel = 'source' | 'extrapolation';

export type ClusterMilestone = {
  cluster_count: number;
  hal_level: string;
  year: number;
  power_watts: number;
  deliverable_ko: string;
  deliverable_en?: string;
  biological_equiv_ko: string;
  source_paper: string;
  citation_key: string;
  label: SourceLabel;
};

export type HAEpoch = {
  name_ko: string;
  name_en: string;
  years_ago: number;
  years_since_prev: number | null;
  description_ko: string;
  citation_key: string;
};

export type EnergyPoint = {
  level: string;
  hal0_count: number;
  power_watts: number;
  ci68_watts: number;
  biological_ko: string;
  citation_key: string;
};

export type ScalingPoint = {
  energy_w: number;
  intelligence: number;
  citation_key: string;
};

export type BottleneckPoint = {
  year: number;
  energy_tw: number;
  chip_fab_self_replicating: number;
  self_improvement_loop_hours: number;
  citation_key: string;
  label: SourceLabel;
};

export type SourceEntry = {
  key: string;
  title: string;
  authors: string;
  file: string;
  permalink: string;
};

export type CitationEntry = {
  key: string;
  paper_key: string;
  section_or_table: string;
  anchor: string;
  label: SourceLabel;
  note_ko?: string;
};

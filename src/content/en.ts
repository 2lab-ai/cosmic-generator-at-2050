import type { ContentDict } from '@/types/content';

// English is intentionally a skeleton placeholder. Author's KO is primary.
// Each timeline block receives an identical "Coming soon" body to keep the
// layout stable under the KO/EN toggle without shipping low-quality translations.
const comingSoon = 'Coming soon — 영문 번역 준비 중 (the English translation is being prepared).';

const shortPlaceholder = 'Coming soon.';

function ts(year: number, title: string) {
  return {
    year,
    title,
    headline: shortPlaceholder,
    body: comingSoon,
    metric: {
      value: shortPlaceholder,
      label: shortPlaceholder,
      citation_key: 'L4.S1.1',
    },
    technical_box: {
      summary: shortPlaceholder,
      body: comingSoon,
    },
    footnotes: ['L4.S1.1'],
  };
}

export const en: ContentDict = {
  meta: {
    title: 'Cosmic Generator at 2050',
    subtitle: 'Hierarchical Abstraction — a 30-year roadmap (2026→2056)',
    author_line: 'Jihyuk Im (2ˡᵃᵇ.ai) · with Zhuge',
    publish_date: '2026-04-18',
    last_updated: '2026-04-18',
  },
  disclaimer: {
    title: 'Speculative extrapolation — not a prediction',
    body: comingSoon,
    dismiss_label: 'Got it',
  },
  nav: {
    hero: 'Start',
    intro: 'Intro',
    pattern: 'Pattern',
    prior_art: 'Prior Art',
    milestones: 'Milestones',
    timeline: 'Timeline',
    charts: 'Charts',
    sources: 'Sources',
  },
  hero: {
    badge: 'SPECULATIVE · SOURCED · 2026',
    title: 'Cosmic Generator at 2050',
    subtitle: 'Hierarchical Abstraction — a 30-year roadmap (2026→2056)',
    author: 'Jihyuk Im (2ˡᵃᵇ.ai) · with Zhuge',
    date: 'Published 2026-04-18',
    cta: 'Scroll ↓',
  },
  intro: {
    title: 'What this is, why now',
    body: comingSoon,
    core_claim: 'What took humanity 200,000 years of HA compresses into 30 years for AI.',
  },
  ha_primer: {
    title: 'HA — a three-minute definition',
    lede: comingSoon,
    examples_title: comingSoon,
    examples: [
      {
        title: 'A cup of coffee',
        levels: [
          'L1 · hot brown liquid',
          'L2 · a beverage called coffee',
          'L3 · caffeine → cognitive activation',
          'L4 · productivity tool',
          'L5 · symbol of modern labor culture',
        ],
      },
      {
        title: 'A single bug',
        levels: [
          'L1 · code does not run',
          'L2 · this function throws an error',
          'L3 · logic / design mistake',
          'L4 · architectural flaw',
          'L5 · "is a perfect system even possible?"',
        ],
      },
      {
        title: 'An AI system',
        levels: [
          'L1 · token probability prediction',
          'L2 · code generation',
          'L3 · business-logic agent',
          'L4 · organization-scale automation',
          'L5 · platform for societal decision-making',
        ],
      },
    ],
    closing: comingSoon,
  },
  pattern: {
    title: 'The Pattern — human HA timeline',
    intro: comingSoon,
    note: comingSoon,
    chart_caption: 'Human HA epochs — log scale (years ago)',
    table_headers: {
      epoch: 'Epoch',
      years_ago: 'Years ago (from 2026)',
      years_since_prev: 'Δ years since prev',
      compression: 'Compression (prev → next)',
    },
  },
  prior_art: {
    title: 'Prior Art — partial HAL0 prototype (2hal9)',
    intro: comingSoon,
    readme_quote_title: '2hal9 README excerpt (author\'s own wording)',
    readme_quote: comingSoon,
    files_title: 'Key file permalinks',
    stopped_at_title: 'Where it stopped',
    stopped_at_body: comingSoon,
    screenshot_placeholder: 'TODO: 2hal9 demo screenshot',
  },
  milestones: {
    title: 'Cluster Milestones — 14 steps',
    intro: comingSoon,
    slider_label: 'Select milestone',
    chart_caption: 'log10(cluster) · log10(power) vs year',
    table_headers: {
      cluster: 'Clusters',
      hal: 'HAL',
      year: 'Year',
      power: 'Power',
      deliverable: 'Deliverable',
    },
  },
  timeline_section: {
    title: 'Timeline — 9 blocks (2026 → 2056)',
    intro: comingSoon,
  },
  timeline_blocks: [
    ts(2026, '2026 — HAL0 Now'),
    ts(2028, '2028 — 256 clusters · GTA7 in a month'),
    ts(2030, '2030 — 4096 clusters · humanoid robots'),
    ts(2034, '2034 — 65K clusters · lunar mining'),
    ts(2038, '2038 — 1M clusters · energy breakthrough'),
    ts(2041, '2041 — 16M clusters · HAL6 nation-scale'),
    ts(2045, '2045 — 4B clusters · HAL7 planet-scale'),
    ts(2050, '2050 — 1T clusters · HAL8 solar system'),
    ts(2056, '2056 — 500T clusters · HAL9 Cosmic Generator'),
  ],
  charts_section: {
    title: 'Charts',
    intro: comingSoon,
    ha_compression: { title: 'Human HA — time compression (log)', caption: comingSoon },
    energy_per_hal: { title: 'Energy per HAL level (watts, log)', caption: comingSoon },
    scaling_law: { title: 'I = α · E^0.73 (α = 2.3×10⁻³)', caption: comingSoon },
    bottleneck: { title: '3-axis bottleneck: energy · fab · loop', caption: comingSoon },
  },
  technical_boxes: {
    title: 'Expandable Technical Boxes',
    intro: comingSoon,
    boxes: [
      { id: 'sleep-wake', title: '(a) L1 Sleep-wake entropy', body: comingSoon, citation_key: 'L1.S1.1' },
      { id: 'branching', title: '(b) 7±2 branching derivation', body: comingSoon, citation_key: 'L3B.Thm2' },
      { id: 'isomorphism', title: '(c) Agent-Neural Isomorphism', body: comingSoon, citation_key: 'L3A.Thm1' },
      { id: 'scaling', title: '(d) I = α · E^0.73', body: comingSoon, citation_key: 'L4.S1.1' },
      { id: 'landauer', title: '(e) Landauer limit', body: comingSoon, citation_key: 'L4.S5.2' },
      { id: 'field', title: '(f) HA field equation', body: comingSoon, citation_key: 'L5.S1.2' },
      { id: 'kardashev', title: '(g) HAL9 = 0.15% solar', body: comingSoon, citation_key: 'L4.S9' },
    ],
  },
  sources: {
    title: 'Sources — the six HAL papers',
    intro: comingSoon,
    matrix_title: 'Citation Matrix',
    matrix_intro: comingSoon,
  },
  footer: {
    authors: 'Jihyuk Im · Zhuge (assistant)',
    org: '2ˡᵃᵇ.ai',
    license: 'MIT License',
    last_updated_label: 'Last updated',
    repo_label: 'Source repo',
  },
  labels: {
    source: 'source',
    extrapolation: 'extrapolation',
    cite_prefix: 'cite',
    technical_box_summary: 'Show equation',
    watts_unit: 'W',
  },
};

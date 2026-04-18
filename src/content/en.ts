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
    prereq_lead: shortPlaceholder,
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
    prereq: 'Prereq',
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
    l_ladder: {
      title: 'HA Ladder — L0 to L9',
      intro: comingSoon,
      rows: [
        { level: 'L0', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L1', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L2', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L3', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L4', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L5', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L6', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L7', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L8', token: '(EN TBD)', example: 'Coming soon.' },
        { level: 'L9', token: '(EN TBD)', example: 'Coming soon.' },
      ],
    },
    principles: {
      title: 'Why HA is not a metaphor — four principles',
      items: [
        { heading: 'P1. Differentiation ⇄ Integration', body: comingSoon },
        { heading: 'P2. Energy savings — O(n²) → O(log n)', body: comingSoon },
        { heading: 'P3. Complexity threshold', body: comingSoon },
        { heading: 'P4. Universality', body: comingSoon },
      ],
    },
    hal_vs_l: {
      title: 'HAL number vs natural L number — different measurement axes',
      body: comingSoon,
    },
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
  prereq: {
    title: 'Prereq — six check-ins before the timeline',
    intro: comingSoon,
    cards: [
      {
        id: 'hal-tag',
        number: '1',
        title: 'HAL Number Plate',
        body: comingSoon,
      },
      {
        id: 'energy-intel',
        number: '2',
        title: 'I = α · E^0.73 — energy-intelligence scaling',
        body: comingSoon,
        citation_key: 'L4.S1.1',
      },
      {
        id: 'branching',
        number: '3',
        title: '7±2 branching — b* ≈ 7.39',
        body: comingSoon,
        citation_key: 'L3B.Thm2',
      },
      {
        id: 'iso',
        number: '4',
        title: 'Agent-Neural Isomorphism',
        body: comingSoon,
        citation_key: 'L3A.Thm1',
      },
      {
        id: 'levers',
        number: '5',
        title: 'Two levers — self-replicating fabs + self-improvement loop',
        body: comingSoon,
      },
      {
        id: 'kardashev',
        number: '6',
        title: 'Kardashev Type I / II / III',
        body: comingSoon,
        citation_key: 'L4.S9',
      },
    ],
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
    // Minimal factual footnote (2026-04-18): a second prior-art anchor landed.
    // Full English prose is still comingSoon; this sentence exists so EN readers
    // do not miss the L1-axis scaffold while the rest of the section is translated.
    stopped_at_body: 'As of 2026-04-18, a second prior-art anchor has landed: a Python MVP scaffold of the L1 paper\'s §2.4 sleep-wake algorithm (`labforadvancedstudy/hal-sleep-wake`, PR #2 merged) — ResNet-18 + LoRA on Conv2d/fc running a CIFAR-10 → CIFAR-100 continual sequence with wake + NREM consolidation (`W ← W + s·(α/r)·B@A`, adapter re-init). REM synthetic-dream and GPU measurement numbers are follow-up PRs. Where 2hal9 anchors the L3~L4 self-organization axis, hal-sleep-wake anchors the L1 algorithm axis. Full narrative: coming soon.',
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
  bridges: [
    {
      id: 'fusion-bootstrap',
      anchor_year_from: 2034,
      anchor_year_to: 2038,
      title: 'Bridge · 2034→2038 — AI bootstrapping fusion',
      body: comingSoon,
      citation_keys: ['L4.S7.3', 'L4.S8.2'],
    },
    {
      id: 'dyson-partial',
      anchor_year_from: 2045,
      anchor_year_to: 2050,
      title: 'Bridge · 2045→2050 — leaving the planet',
      body: comingSoon,
      citation_keys: ['L4.S5.1', 'L4.S7.2', 'bottleneck.2045', 'bottleneck.2050'],
    },
    {
      id: 'self-sourcing',
      anchor_year_from: 2050,
      anchor_year_to: 2056,
      title: 'Bridge · 2050→2056 — self-sourcing regime',
      body: comingSoon,
      citation_keys: ['L5.S1.2', 'L5.S12', 'L4.S9'],
    },
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

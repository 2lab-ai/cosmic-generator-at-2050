# cosmic-generator-at-2050

A speculative-but-sourced landing page for the 30-year HAL roadmap (2026 → 2056),
hosted at `https://2lab.ai/cosmic-generator-at-2050/`.

- Speculative — the post-2030 scenarios are extrapolation, not prediction.
- Sourced — every quantitative number carries a `source` / `extrapolation`
  label and a `citation_key` that maps back to one of the six HAL papers.
- Author's primary language is Korean. English is an intentional skeleton
  placeholder ("Coming soon") to keep layout stable under the KO/EN toggle
  without shipping low-quality translations.

## Source papers (SSOT)

All numerical claims on this page trace back to:

- **L1** — Hierarchical Abstraction is All You Need: Continual AI Consciousness through Sleep-Wake Cycles
- **L3A** — A Backpropagation Approach to Multi-Level AI Orchestration (Agent-Neural Isomorphism)
- **L3B** — Cognitive Load Distribution Through Hierarchical Abstraction (7±2 Rule)
- **L4** — Road to HAL9: Energy-Intelligence Scaling Laws with Uncertainty Quantification
- **L5** — Hierarchical Abstraction is Emergence (Field-Theoretic Framework)
- **ROADMAP** — HAL Implementation Roadmap 2025–2028

Permalinks live in `src/data/sources.ts` and the citation matrix in
`src/data/citations.ts`. The timeline baseline is 2026-04-18.

## Stack

- Next.js 14 (App Router) with `output: 'export'` static export
- TypeScript strict, React 18
- Tailwind CSS + a small custom design system in `src/app/globals.css`
- Recharts for the 5 charts (all typed, `'use client'`)
- No analytics, no external fonts fetched at build time (system fallbacks)

## Layout

```
src/
  app/
    layout.tsx        # LangProvider, DisclaimerBanner, ReadingProgress, Nav
    page.tsx          # 10 sections wired in order
    globals.css       # palette + typography + data-table + tech-box styles
  content/
    ko.ts             # 1st-language copy (primary)
    en.ts             # skeleton placeholder, same shape
  context/
    LangContext.tsx   # localStorage-persisted KO/EN toggle
  data/
    cluster-milestones.ts  # 14 rows, HAL0 1.4 kW → HAL9 1.2 EW
    energy-scaling.ts      # 10 rows with 68% CI
    ha-timeline.ts         # 9 human HA epochs (stone tools → LLM)
    scaling-law.ts         # I = α·E^0.73, α = (2.3 ± 0.4)×10⁻³
    bottlenecks.ts         # 3 axes × 11 years
    sources.ts             # 6 papers + DOIs + permalinks
    citations.ts           # citation_key → paper / section / anchor / label
  types/
    content.ts             # ContentDict shape (KO/EN must match)
    data.ts                # quantitative typed interfaces
  components/
    Hero, Intro, Pattern, PriorArt, ClusterMilestones
    TimelineBlock, Sources, Footer
    CitationBadge, LabelBadge, ExpandableBox
    Nav, LangToggle, DisclaimerBanner, ReadingProgress
    Charts/
      HACompressionChart.tsx
      MilestonesChart.tsx
      EnergyPerHALChart.tsx
      ScalingLawChart.tsx
      BottleneckChart.tsx
```

## Build

```bash
pnpm install
pnpm lint     # eslint clean
pnpm build    # Next.js static export → out/
```

`next.config.js` pins:

```js
const basePath = '/cosmic-generator-at-2050';
module.exports = {
  output: 'export',
  basePath,
  assetPrefix: basePath + '/',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

## Deploy

### Plain static reverse-proxy (nginx under 2lab.ai)

Serve the `out/` directory at the `/cosmic-generator-at-2050/` path. Example:

```nginx
location /cosmic-generator-at-2050/ {
  alias /var/www/2lab.ai/cosmic-generator-at-2050/;
  try_files $uri $uri/index.html =404;
  add_header Cache-Control "public, max-age=300";
}
```

Deploy script idea:

```bash
pnpm build
rsync -az --delete out/ deploy@host:/var/www/2lab.ai/cosmic-generator-at-2050/
```

### Vercel

This project can also deploy as-is to Vercel with `basePath` set. Map the
project's production domain to `2lab.ai` and use a rewrite to mount it
under `/cosmic-generator-at-2050/*`, or deploy it as a standalone subdomain
and keep the basePath on the reverse-proxy side.

## Local smoke test of the static export

```bash
pnpm build
mkdir -p _served/cosmic-generator-at-2050
cp -r out/. _served/cosmic-generator-at-2050/
python3 -m http.server 8765 --directory _served
# → http://127.0.0.1:8765/cosmic-generator-at-2050/
```

Expected: `index: 200`, CSS/JS chunks under `_next/static/...` also 200.

## Disclaimer

Nothing on this page is a prediction. The page is an extrapolation from six
papers. The post-2030 section explicitly marks itself as `extrapolation`
via the amber label. See also the sticky disclaimer banner at the top of
the page.

## License

MIT — see LICENSE.

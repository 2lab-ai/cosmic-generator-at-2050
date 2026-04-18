'use client';

import { useLang } from '@/context/LangContext';

const REPO_BASE = 'https://github.com/2lab-ai/2hal9/blob/main';

// Selected file permalinks chosen from the 2hal9 repo as representative
// prior-art anchors. README.md leads; Cargo.toml fixes the stack; the
// remaining three point at the core self-organization and cognitive
// modules that the 2hal9 prototype actually ships.
const priorFiles = [
  { path: 'README.md', note: 'self-org 2μs/n / sleep-wake vision' },
  { path: 'Cargo.toml', note: 'Rust workspace root, subcrates' },
  { path: 'layers/L2_implementation/neurons/core/hierarchical/cognitive', note: 'L2 cognitive modules' },
  { path: 'layers/L3_operational/architecture/server/hal9-server', note: 'L3 operational server' },
  { path: 'demo', note: 'self-organization demos & benchmarks' },
];

export function PriorArt() {
  const { content } = useLang();
  return (
    <section id="prior-art" aria-labelledby="prior-art-title">
      <div className="prose-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §3 · Prior Art
        </div>
        <h2 id="prior-art-title">{content.prior_art.title}</h2>
        <p className="mt-4">{content.prior_art.intro}</p>

        <h3 className="mt-8">{content.prior_art.readme_quote_title}</h3>
        <blockquote className="mt-3 border-l-2 border-[var(--warn)] pl-4 text-[var(--fg-muted)] whitespace-pre-wrap">
          {content.prior_art.readme_quote}
        </blockquote>

        <h3 className="mt-8">{content.prior_art.files_title}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {priorFiles.map((f) => (
            <li key={f.path}>
              <a
                href={`${REPO_BASE}/${f.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono"
              >
                {f.path}
              </a>
              <span className="ml-2 text-[var(--fg-dim)]">— {f.note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border border-dashed border-[var(--border)] rounded-md p-6 text-center text-sm text-[var(--fg-dim)]">
          {content.prior_art.screenshot_placeholder}
        </div>

        <h3 className="mt-10">{content.prior_art.stopped_at_title}</h3>
        <p className="mt-3 text-[var(--fg-muted)]">{content.prior_art.stopped_at_body}</p>

        <div className="mt-8 text-mono text-xs text-[var(--fg-dim)]">
          Source repo:&nbsp;
          <a href="https://github.com/2lab-ai/2hal9" target="_blank" rel="noopener noreferrer">
            github.com/2lab-ai/2hal9
          </a>
        </div>
      </div>
    </section>
  );
}

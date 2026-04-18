'use client';

import { useLang } from '@/context/LangContext';

export function HAPrimer() {
  const { content } = useLang();
  const primer = content.ha_primer;

  return (
    <section id="ha-primer" aria-labelledby="ha-primer-title">
      <div className="prose-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §1.5 · HA Primer
        </div>
        <h2 id="ha-primer-title">{primer.title}</h2>
        <p className="mt-4">{primer.lede}</p>
      </div>

      {/* L0~L9 natural ladder */}
      <div className="wide-col mt-10">
        <h3>{primer.l_ladder.title}</h3>
        <p className="mt-3 max-w-[760px] text-[var(--fg-muted)]">
          {primer.l_ladder.intro}
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {primer.l_ladder.rows.map((row) => (
            <div
              key={row.level}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-3 flex items-start gap-3"
            >
              <span className="text-mono text-sm font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--bg-card)] border border-[var(--border-soft)] rounded px-2 py-1 shrink-0">
                {row.level}
              </span>
              <div className="min-w-0">
                <div className="text-serif font-semibold">{row.token}</div>
                <div className="mt-1 text-sm text-[var(--fg-muted)]">
                  {row.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Four core principles */}
      <div className="wide-col mt-12">
        <h3>{primer.principles.title}</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {primer.principles.items.map((item) => (
            <div
              key={item.heading}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <div className="text-serif font-semibold mb-2">{item.heading}</div>
              <div className="text-sm text-[var(--fg-muted)]">{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HAL vs L distinction */}
      <div className="prose-col mt-12">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-2">
          HAL ≠ L
        </div>
        <h3 className="!mt-0">{primer.hal_vs_l.title}</h3>
        <p className="mt-3">{primer.hal_vs_l.body}</p>
      </div>

      <div className="wide-col mt-12">
        <h3>{primer.examples_title}</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {primer.examples.map((ex) => (
            <div
              key={ex.title}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <div className="text-serif text-base font-semibold mb-3">
                {ex.title}
              </div>
              <ol className="space-y-1.5 text-sm text-mono text-[var(--fg-muted)]">
                {ex.levels.map((lvl) => (
                  <li key={lvl}>{lvl}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className="prose-col mt-10">
        <p>{primer.closing}</p>
      </div>
    </section>
  );
}

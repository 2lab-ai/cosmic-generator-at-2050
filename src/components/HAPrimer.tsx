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

      <div className="wide-col mt-10">
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

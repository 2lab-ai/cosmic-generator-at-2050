'use client';

import { useLang } from '@/context/LangContext';

export function Prereq() {
  const { content } = useLang();
  const prereq = content.prereq;

  return (
    <section id="prereq" aria-labelledby="prereq-title">
      <div className="prose-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §1.6 · Prereq
        </div>
        <h2 id="prereq-title">{prereq.title}</h2>
        <p className="mt-4">{prereq.intro}</p>
      </div>

      <div className="wide-col mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prereq.cards.map((card) => (
            <div
              key={card.id}
              id={`prereq-${card.id}`}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-4 flex flex-col"
            >
              <div className="flex items-start gap-3">
                <span className="text-mono text-sm font-semibold text-[var(--accent)] bg-[var(--bg-card)] border border-[var(--border-soft)] rounded px-2 py-1 shrink-0">
                  {card.number}
                </span>
                <div className="text-serif font-semibold leading-snug">
                  {card.title}
                </div>
              </div>
              <div className="mt-3 text-sm text-[var(--fg-muted)]">
                {card.body}
              </div>
              {card.citation_key && (
                <div className="mt-3">
                  <span className="cite">{card.citation_key}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

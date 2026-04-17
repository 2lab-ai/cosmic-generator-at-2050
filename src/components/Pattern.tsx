'use client';

import { useLang } from '@/context/LangContext';
import { haTimeline } from '@/data/ha-timeline';
import { HACompressionChart } from './Charts/HACompressionChart';
import { CiteBadge } from './CitationBadge';

function formatYears(y: number): string {
  if (y >= 1000000) return `${(y / 1000000).toFixed(1)}M`;
  if (y >= 1000) return `${(y / 1000).toFixed(y >= 10000 ? 0 : 1)}k`;
  return `${y}`;
}

export function Pattern() {
  const { content } = useLang();
  return (
    <section id="pattern" aria-labelledby="pattern-title">
      <div className="wide-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §2 · The Pattern
        </div>
        <h2 id="pattern-title">{content.pattern.title}</h2>
        <p className="mt-4 max-w-[720px]">{content.pattern.intro}</p>
        <p className="mt-2 text-sm text-[var(--fg-muted)]">{content.pattern.note}</p>

        <div className="overflow-x-auto mt-6">
          <table className="data-table min-w-[640px]">
            <thead>
              <tr>
                <th>{content.pattern.table_headers.epoch}</th>
                <th className="text-right">{content.pattern.table_headers.years_ago}</th>
                <th className="text-right">{content.pattern.table_headers.years_since_prev}</th>
                <th className="text-right">{content.pattern.table_headers.compression}</th>
                <th>cite</th>
              </tr>
            </thead>
            <tbody>
              {haTimeline.map((e, i) => {
                const prev = i > 0 ? haTimeline[i - 1].years_since_prev : null;
                const compression =
                  e.years_since_prev && prev ? (prev / e.years_since_prev).toFixed(2) : '—';
                return (
                  <tr key={e.name_en}>
                    <td>
                      <span className="text-serif text-[1.02em]">{e.name_ko}</span>
                      <span className="ml-2 text-[var(--fg-dim)] text-xs text-mono">
                        {e.name_en}
                      </span>
                    </td>
                    <td className="text-right text-mono text-sm">
                      {formatYears(e.years_ago)}
                    </td>
                    <td className="text-right text-mono text-sm">
                      {e.years_since_prev ? formatYears(e.years_since_prev) : '—'}
                    </td>
                    <td className="text-right text-mono text-sm text-[var(--accent)]">
                      {compression}
                    </td>
                    <td>
                      <CiteBadge citationKey={e.citation_key} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <HACompressionChart />
          <div className="chart-caption">
            <span className="label-source">source</span>
            <span>{content.pattern.chart_caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import type { TimelineBlockContent } from '@/types/content';
import { CiteBadge } from './CitationBadge';
import { citations } from '@/data/citations';

type Props = {
  block: TimelineBlockContent;
  index: number;
};

function bodyToParagraphs(body: string): string[] {
  return body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

export function TimelineBlock({ block, index }: Props) {
  const metricEntry = citations.find((c) => c.key === block.metric.citation_key);
  const metricLabel = metricEntry?.label ?? 'extrapolation';
  return (
    <article
      id={`t-${block.year}`}
      aria-labelledby={`t-${block.year}-title`}
      className="border-t border-[var(--border-soft)] pt-12"
    >
      <div className="prose-col">
        <div className="flex items-baseline gap-4 flex-wrap">
          <span className="text-mono text-xs uppercase tracking-[0.18em] text-[var(--fg-dim)]">
            §5.{index + 1}
          </span>
          <span className="text-mono text-sm text-[var(--warn)]">{block.year}</span>
        </div>
        <h2 id={`t-${block.year}-title`} className="mt-2">
          {block.title}
        </h2>
        <p className="mt-3 text-lg text-serif text-[var(--fg-muted)]">
          {block.headline}
        </p>

        {block.prereq_lead && (
          <div className="prereq-lead text-mono text-xs text-[var(--fg-muted)] border-l-2 border-[var(--border)] pl-3 py-1 mb-4 mt-4">
            {block.prereq_lead}
          </div>
        )}

        <div className="metric">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <div className="metric-value">{block.metric.value}</div>
            <span
              className={
                metricLabel === 'source' ? 'label-source' : 'label-extrapolation'
              }
            >
              {metricLabel}
            </span>
          </div>
          <div className="metric-label">
            {block.metric.label}
            <CiteBadge citationKey={block.metric.citation_key} />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {bodyToParagraphs(block.body).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <details className="tech-box mt-8">
          <summary>{block.technical_box.summary}</summary>
          <div className="tech-body">{block.technical_box.body}</div>
        </details>

        {block.footnotes.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="text-mono text-xs uppercase text-[var(--fg-dim)]">
              footnotes
            </span>
            {block.footnotes.map((f) => (
              <CiteBadge key={f} citationKey={f} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

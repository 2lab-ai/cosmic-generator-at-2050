import { CiteBadge, LabelBadge } from './CitationBadge';

export function ExpandableBox({
  summary,
  body,
  citationKey,
  label = 'source',
}: {
  summary: string;
  body: string;
  citationKey?: string;
  label?: 'source' | 'extrapolation';
}) {
  return (
    <details className="tech-box">
      <summary>
        <span className="mr-2">▾</span>
        {summary}
        {citationKey && (
          <span className="ml-2">
            <LabelBadge label={label} />
          </span>
        )}
      </summary>
      <div className="tech-body">
        {body}
        {citationKey && (
          <div className="mt-3 pt-3 border-t border-[var(--border-soft)] text-xs text-muted">
            <CiteBadge citationKey={citationKey} />
          </div>
        )}
      </div>
    </details>
  );
}

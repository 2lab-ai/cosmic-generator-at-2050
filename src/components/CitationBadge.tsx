import clsx from 'clsx';
import { citations } from '@/data/citations';

export function LabelBadge({ label }: { label: 'source' | 'extrapolation' }) {
  return (
    <span
      className={clsx(
        label === 'source' ? 'label-source' : 'label-extrapolation',
      )}
      aria-label={label === 'source' ? 'sourced from paper' : 'author extrapolation'}
    >
      {label}
    </span>
  );
}

export function CiteBadge({ citationKey }: { citationKey: string }) {
  const entry = citations.find((c) => c.key === citationKey);
  const title = entry
    ? `[${entry.paper_key}] ${entry.section_or_table} — ${entry.anchor}`
    : citationKey;
  return (
    <span className="cite" title={title}>
      {citationKey}
    </span>
  );
}

export function CiteLine({ citationKeys }: { citationKeys: string[] }) {
  return (
    <span className="text-muted text-sm">
      {citationKeys.map((k) => (
        <CiteBadge key={k} citationKey={k} />
      ))}
    </span>
  );
}

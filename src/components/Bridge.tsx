'use client';

import { useLang } from '@/context/LangContext';

type Props = {
  id: 'fusion-bootstrap' | 'dyson-partial' | 'self-sourcing';
};

export function Bridge({ id }: Props) {
  const { content } = useLang();
  const bridge = content.bridges.find((b) => b.id === id);
  if (!bridge) return null;

  return (
    <aside
      id={`bridge-${bridge.id}`}
      role="region"
      aria-labelledby={`bridge-${bridge.id}-title`}
      className="wide-col"
    >
      <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-6 border-l-2 border-l-[var(--accent)]">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)]">
          Bridge · {bridge.anchor_year_from}→{bridge.anchor_year_to}
        </div>
        <h3
          id={`bridge-${bridge.id}-title`}
          className="!mt-2 text-serif font-semibold"
        >
          {bridge.title}
        </h3>
        <p className="mt-3 text-[var(--fg)]">{bridge.body}</p>
        {bridge.citation_keys.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-mono text-xs uppercase text-[var(--fg-dim)]">
              cites
            </span>
            {bridge.citation_keys.map((k) => (
              <span key={k} className="cite">
                {k}
              </span>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

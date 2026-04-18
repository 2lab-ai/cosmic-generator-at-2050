'use client';

import { useLang } from '@/context/LangContext';
import { sources } from '@/data/sources';
import { citations } from '@/data/citations';
import { LabelBadge } from './CitationBadge';

export function Sources() {
  const { content } = useLang();
  return (
    <section id="sources" aria-labelledby="sources-title">
      <div className="wide-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §8 · Sources
        </div>
        <h2 id="sources-title">{content.sources.title}</h2>
        <p className="mt-4 max-w-[720px]">{content.sources.intro}</p>

        <h3 className="mt-8">Papers</h3>
        <ul className="mt-4 space-y-5">
          {sources.map((s) => (
            <li
              key={s.key}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-mono text-[var(--accent)] text-sm font-semibold">
                  [{s.key}]
                </span>
                <span className="text-serif text-base">{s.title}</span>
              </div>
              <div className="mt-2 text-sm text-[var(--fg-muted)]">
                {s.authors}
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-mono text-xs">
                <a href={s.permalink} target="_blank" rel="noopener noreferrer">
                  {s.file}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-12">{content.sources.matrix_title}</h3>
        <p className="mt-2 text-sm text-[var(--fg-muted)]">
          {content.sources.matrix_intro}
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="data-table min-w-[640px]">
            <thead>
              <tr>
                <th>citation_key</th>
                <th>paper</th>
                <th>section / table</th>
                <th>anchor</th>
                <th>label</th>
              </tr>
            </thead>
            <tbody>
              {citations.map((c) => (
                <tr key={c.key}>
                  <td className="text-mono text-xs">{c.key}</td>
                  <td className="text-mono text-xs text-[var(--accent)]">
                    {c.paper_key}
                  </td>
                  <td className="text-xs">{c.section_or_table}</td>
                  <td className="text-xs text-[var(--fg-muted)]">{c.anchor}</td>
                  <td>
                    <LabelBadge label={c.label} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

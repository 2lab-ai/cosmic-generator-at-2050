'use client';

import { useLang } from '@/context/LangContext';
import { LangToggle } from './LangToggle';

export function Nav() {
  const { content } = useLang();
  const items = [
    { id: 'intro', label: content.nav.intro },
    { id: 'prereq', label: content.nav.prereq },
    { id: 'pattern', label: content.nav.pattern },
    { id: 'prior-art', label: content.nav.prior_art },
    { id: 'milestones', label: content.nav.milestones },
    { id: 'timeline', label: content.nav.timeline },
    { id: 'charts', label: content.nav.charts },
    { id: 'sources', label: content.nav.sources },
  ];

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-30 backdrop-blur bg-[rgba(10,10,11,0.75)] border-b border-[var(--border-soft)]"
    >
      <div className="wide-col flex items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <LangToggle />
          <a
            href="#hero"
            className="text-mono text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] truncate"
          >
            cosmic-generator-at-2050
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-4 text-mono text-xs text-[var(--fg-muted)]">
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="hover:text-[var(--accent)]">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

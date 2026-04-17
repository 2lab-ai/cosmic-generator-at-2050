'use client';

import { useLang } from '@/context/LangContext';

export function Footer() {
  const { content } = useLang();
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--bg-elev)]">
      <div className="wide-col py-10 text-sm text-[var(--fg-muted)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">
              authors
            </div>
            <div className="mt-2">{content.footer.authors}</div>
            <div className="mt-1 text-[var(--fg-dim)]">{content.footer.org}</div>
          </div>
          <div>
            <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">
              {content.footer.last_updated_label}
            </div>
            <div className="mt-2 text-mono">{content.meta.last_updated}</div>
          </div>
          <div>
            <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">
              {content.footer.repo_label}
            </div>
            <div className="mt-2 text-mono">
              <a
                href="https://github.com/2lab-ai/cosmic-generator-at-2050"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/2lab-ai/cosmic-generator-at-2050
              </a>
            </div>
            <div className="mt-1 text-[var(--fg-dim)]">{content.footer.license}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

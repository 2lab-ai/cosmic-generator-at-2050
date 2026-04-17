'use client';

import { useLang } from '@/context/LangContext';
import clsx from 'clsx';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex text-mono text-xs border border-[var(--border)] rounded-md overflow-hidden bg-[var(--bg-elev)]"
    >
      <button
        type="button"
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
        className={clsx(
          'px-2.5 py-1 uppercase transition-colors',
          lang === 'ko'
            ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
            : 'text-[var(--fg-muted)] hover:text-[var(--fg)]',
        )}
      >
        KO
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={clsx(
          'px-2.5 py-1 uppercase transition-colors border-l border-[var(--border)]',
          lang === 'en'
            ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
            : 'text-[var(--fg-muted)] hover:text-[var(--fg)]',
        )}
      >
        EN
      </button>
    </div>
  );
}

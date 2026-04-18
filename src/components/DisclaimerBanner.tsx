'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/context/LangContext';

const STORAGE_KEY = 'cosmic-generator-disclaimer-dismissed';

export function DisclaimerBanner() {
  const { content } = useLang();
  // Start closed. On mount, open unless user previously dismissed.
  // This avoids the reverse flash of showing the banner and then hiding it
  // for returning visitors — visible only after hydration.
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      // ignore
    }
    if (!dismissed) setOpen(true);
    setMounted(true);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!mounted || !open) return null;

  return (
    <div
      role="region"
      aria-label="Speculation disclaimer"
      className="sticky top-0 z-40 border-b border-[rgba(245,158,11,0.35)] bg-[rgba(245,158,11,0.08)] backdrop-blur"
    >
      <div className="wide-col py-3 flex items-start gap-3 text-sm">
        <div className="flex-1">
          <strong className="block mb-1 text-[var(--warn)] text-mono text-xs uppercase tracking-wider">
            ⚠ {content.disclaimer.title}
          </strong>
          <p className="text-[var(--fg-muted)]">{content.disclaimer.body}</p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 text-mono text-xs uppercase border border-[var(--border)] rounded px-2 py-1 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--accent)]"
        >
          {content.disclaimer.dismiss_label} ✕
        </button>
      </div>
    </div>
  );
}

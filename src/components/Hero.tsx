'use client';

import { useLang } from '@/context/LangContext';

export function Hero() {
  const { content } = useLang();
  return (
    <section
      id="hero"
      className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-soft)]"
    >
      <div className="prose-col">
        <div className="text-mono text-xs tracking-[0.18em] text-[var(--warn)] mb-6">
          {content.hero.badge}
        </div>
        <h1 className="text-balance">{content.hero.title}</h1>
        <p className="mt-5 text-lg md:text-xl text-[var(--fg-muted)] text-balance">
          {content.hero.subtitle}
        </p>
        <div className="mt-10 text-sm text-mono text-[var(--fg-dim)] space-y-1">
          <div>{content.hero.author}</div>
          <div>{content.hero.date}</div>
        </div>
        <div className="mt-10">
          <a
            href="#intro"
            className="inline-flex items-center gap-2 text-mono text-sm text-[var(--accent)] border-b border-transparent hover:border-[var(--accent)]"
          >
            {content.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

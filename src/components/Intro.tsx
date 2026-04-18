'use client';

import { useLang } from '@/context/LangContext';

export function Intro() {
  const { content } = useLang();
  return (
    <section id="intro" aria-labelledby="intro-title">
      <div className="prose-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §1 · Intro
        </div>
        <h2 id="intro-title">{content.intro.title}</h2>
        <div className="mt-6 space-y-4">
          {content.intro.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <blockquote className="mt-8 border-l-2 border-[var(--accent)] pl-4 text-lg text-serif italic text-[var(--fg)]">
          {content.intro.core_claim}
        </blockquote>
      </div>
    </section>
  );
}

'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ContentDict } from '@/types/content';
import { ko } from '@/content/ko';
import { en } from '@/content/en';

export type Lang = 'ko' | 'en';

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  content: ContentDict;
};

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = 'cosmic-generator-lang';

export function LangProvider({ children }: { children: ReactNode }) {
  // Default to 'ko' — author's primary language.
  // The page is pre-rendered in KO (matches SSR <html lang="ko">). On mount,
  // we read localStorage and sync <html lang> + state. If a user previously
  // saved 'en' the page flashes KO once — acceptable for a static landing.
  const [lang, setLangState] = useState<Lang>('ko');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ko' || saved === 'en') {
        setLangState(saved);
      }
    } catch {
      // localStorage not available; keep default.
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const content = lang === 'ko' ? ko : en;

  return <Ctx.Provider value={{ lang, setLang, content }}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang must be used inside <LangProvider>');
  return v;
}

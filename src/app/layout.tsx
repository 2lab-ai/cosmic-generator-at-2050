import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Cosmic Generator at 2050 — HAL roadmap 2026→2056',
  description:
    'Speculative but sourced: a 30-year Hierarchical Abstraction roadmap from HAL0 (2026, 1.4 kW) to HAL9 (2056, 1.2 EW), anchored in 6 HAL papers.',
  openGraph: {
    title: 'Cosmic Generator at 2050',
    description:
      '30-year HAL roadmap 2026→2056 grounded in L1/L3A/L3B/L4/L5 + Roadmap.',
    type: 'article',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <LangProvider>
          <ReadingProgress />
          <DisclaimerBanner />
          <Nav />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}

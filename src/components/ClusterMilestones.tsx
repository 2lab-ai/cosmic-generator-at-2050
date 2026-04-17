'use client';

import { useState } from 'react';
import { useLang } from '@/context/LangContext';
import { clusterMilestones } from '@/data/cluster-milestones';
import { CiteBadge, LabelBadge } from './CitationBadge';
import { MilestonesChart } from './Charts/MilestonesChart';

function formatCluster(n: number): string {
  if (n >= 1e12) return `${(n / 1e12).toFixed(1)}T`;
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return n.toString();
}

function formatPower(w: number): string {
  if (w >= 1e18) return `${(w / 1e18).toFixed(1)} EW`;
  if (w >= 1e15) return `${(w / 1e15).toFixed(1)} PW`;
  if (w >= 1e12) return `${(w / 1e12).toFixed(1)} TW`;
  if (w >= 1e9) return `${(w / 1e9).toFixed(1)} GW`;
  if (w >= 1e6) return `${(w / 1e6).toFixed(1)} MW`;
  if (w >= 1e3) return `${(w / 1e3).toFixed(1)} kW`;
  return `${w} W`;
}

export function ClusterMilestones() {
  const { content } = useLang();
  const [idx, setIdx] = useState<number>(clusterMilestones.length - 1);
  const active = clusterMilestones[idx];

  return (
    <section id="milestones" aria-labelledby="milestones-title">
      <div className="wide-col">
        <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
          §4 · Cluster Milestones
        </div>
        <h2 id="milestones-title">{content.milestones.title}</h2>
        <p className="mt-4 max-w-[720px]">{content.milestones.intro}</p>

        {/* Interactive milestone slider */}
        <div className="mt-8 rounded-md border border-[var(--border)] bg-[var(--bg-elev)] p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <div className="text-mono text-xs text-[var(--fg-dim)] uppercase tracking-wider">
                {content.milestones.slider_label}
              </div>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-mono text-xl font-semibold text-[var(--accent)]">
                  {active.hal_level}
                </span>
                <span className="text-mono text-sm text-[var(--fg-muted)]">
                  {active.year}
                </span>
              </div>
            </div>
            <LabelBadge label={active.label} />
          </div>

          <input
            type="range"
            min={0}
            max={clusterMilestones.length - 1}
            step={1}
            value={idx}
            onChange={(e) => setIdx(Number(e.target.value))}
            aria-label={content.milestones.slider_label}
            className="mt-4 w-full accent-[var(--accent)]"
          />

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div>
              <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">
                {content.milestones.table_headers.cluster}
              </div>
              <div className="text-mono text-base text-[var(--fg)]">
                {formatCluster(active.cluster_count)}
              </div>
            </div>
            <div>
              <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">
                {content.milestones.table_headers.power}
              </div>
              <div className="text-mono text-base text-[var(--fg)]">
                {formatPower(active.power_watts)}
              </div>
            </div>
            <div>
              <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">Biological</div>
              <div className="text-sm text-[var(--fg)]">{active.biological_equiv_ko}</div>
            </div>
            <div>
              <div className="text-mono text-xs uppercase text-[var(--fg-dim)]">cite</div>
              <div>
                <CiteBadge citationKey={active.citation_key} />
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-[var(--border-soft)] pt-4">
            <div className="text-xs text-mono uppercase text-[var(--fg-dim)]">
              {content.milestones.table_headers.deliverable}
            </div>
            <div className="mt-1 text-base text-serif">{active.deliverable_ko}</div>
          </div>
        </div>

        {/* Full table */}
        <div className="overflow-x-auto mt-10">
          <table className="data-table min-w-[720px]">
            <thead>
              <tr>
                <th>{content.milestones.table_headers.hal}</th>
                <th className="text-right">{content.milestones.table_headers.year}</th>
                <th className="text-right">{content.milestones.table_headers.cluster}</th>
                <th className="text-right">{content.milestones.table_headers.power}</th>
                <th>{content.milestones.table_headers.deliverable}</th>
                <th>label</th>
              </tr>
            </thead>
            <tbody>
              {clusterMilestones.map((m, i) => (
                <tr
                  key={m.hal_level}
                  onClick={() => setIdx(i)}
                  className="cursor-pointer"
                  aria-current={i === idx ? 'true' : undefined}
                  style={i === idx ? { background: 'rgba(34,211,238,0.06)' } : undefined}
                >
                  <td className="text-mono">{m.hal_level}</td>
                  <td className="text-right text-mono">{m.year}</td>
                  <td className="text-right text-mono">{formatCluster(m.cluster_count)}</td>
                  <td className="text-right text-mono">{formatPower(m.power_watts)}</td>
                  <td className="text-[0.92rem]">{m.deliverable_ko}</td>
                  <td>
                    <LabelBadge label={m.label} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <MilestonesChart activeIdx={idx} />
          <div className="chart-caption">
            <span className="label-source">source</span>
            <span>{content.milestones.chart_caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

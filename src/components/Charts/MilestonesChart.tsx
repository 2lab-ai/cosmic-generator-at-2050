'use client';

import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
  Cell,
  ReferenceLine,
} from 'recharts';
import { clusterMilestones } from '@/data/cluster-milestones';

const data = clusterMilestones.map((m) => ({
  year: m.year,
  power_watts: m.power_watts,
  cluster: m.cluster_count,
  hal: m.hal_level,
  label: m.label,
  deliverable: m.deliverable_ko,
}));

function formatPowerShort(w: number): string {
  if (w >= 1e18) return `${(w / 1e18).toFixed(1)}EW`;
  if (w >= 1e15) return `${(w / 1e15).toFixed(1)}PW`;
  if (w >= 1e12) return `${(w / 1e12).toFixed(1)}TW`;
  if (w >= 1e9) return `${(w / 1e9).toFixed(1)}GW`;
  if (w >= 1e6) return `${(w / 1e6).toFixed(1)}MW`;
  if (w >= 1e3) return `${(w / 1e3).toFixed(1)}kW`;
  return `${w}W`;
}

export function MilestonesChart({ activeIdx }: { activeIdx: number }) {
  return (
    <div style={{ width: '100%', height: 340 }}>
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 10, right: 30, bottom: 10, left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis
            type="number"
            dataKey="year"
            domain={[2025, 2057]}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
            ticks={[2026, 2030, 2035, 2040, 2045, 2050, 2056]}
          />
          <YAxis
            type="number"
            dataKey="power_watts"
            scale="log"
            domain={[1e3, 2e18]}
            tickFormatter={formatPowerShort}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
          />
          <ZAxis range={[60, 60]} />
          <Tooltip
            cursor={{ strokeDasharray: '2 4', stroke: 'var(--fg-dim)' }}
            contentStyle={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)',
              fontSize: '0.82rem',
            }}
            content={({ active, payload }) => {
              if (!active || !payload || !payload.length) return null;
              const d = payload[0].payload as (typeof data)[number];
              return (
                <div
                  style={{
                    background: 'var(--bg-elev)',
                    border: '1px solid var(--border)',
                    padding: '0.5rem 0.7rem',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.78rem',
                    color: 'var(--fg)',
                  }}
                >
                  <div>
                    <strong>{d.hal}</strong> · {d.year}
                  </div>
                  <div>{formatPowerShort(d.power_watts)} · {d.cluster.toLocaleString()} cluster</div>
                  <div style={{ color: 'var(--fg-muted)', marginTop: 4, maxWidth: 260, whiteSpace: 'normal' }}>
                    {d.deliverable}
                  </div>
                </div>
              );
            }}
          />
          <ReferenceLine
            y={1.2e18}
            stroke="var(--warn)"
            strokeDasharray="4 4"
            label={{
              value: 'HAL9 · 1.2 EW',
              fill: 'var(--warn)',
              fontSize: 10,
              position: 'insideTopRight',
              fontFamily: 'var(--mono)',
            }}
          />
          <Scatter name="Milestones" data={data} fill="var(--accent)">
            {data.map((d, i) => (
              <Cell
                key={d.hal}
                fill={
                  i === activeIdx
                    ? 'var(--warn)'
                    : d.label === 'source'
                      ? 'var(--source)'
                      : 'var(--extrapolation)'
                }
                stroke={i === activeIdx ? 'var(--warn)' : 'transparent'}
                strokeWidth={i === activeIdx ? 2 : 0}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

'use client';

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  ErrorBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { energyScaling } from '@/data/energy-scaling';

function formatPowerShort(w: number): string {
  if (w >= 1e18) return `${(w / 1e18).toFixed(1)}EW`;
  if (w >= 1e15) return `${(w / 1e15).toFixed(1)}PW`;
  if (w >= 1e12) return `${(w / 1e12).toFixed(1)}TW`;
  if (w >= 1e9) return `${(w / 1e9).toFixed(1)}GW`;
  if (w >= 1e6) return `${(w / 1e6).toFixed(1)}MW`;
  if (w >= 1e3) return `${(w / 1e3).toFixed(1)}kW`;
  return `${w}W`;
}

const data = energyScaling.map((e) => ({
  level: e.level,
  power_watts: e.power_watts,
  ci68: e.ci68_watts,
  biological: e.biological_ko,
}));

export function EnergyPerHALChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis
            dataKey="level"
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
          />
          <YAxis
            scale="log"
            domain={[1e3, 2e18]}
            tickFormatter={formatPowerShort}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
          />
          <Tooltip
            cursor={{ fill: 'rgba(34,211,238,0.05)' }}
            contentStyle={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)',
              fontSize: '0.82rem',
            }}
            formatter={(v) => [formatPowerShort(Number(v)), 'power']}
          />
          <Bar dataKey="power_watts" fill="var(--accent)">
            {data.map((_, i) => (
              <Cell key={i} fill={i >= 6 ? 'var(--extrapolation)' : 'var(--source)'} />
            ))}
            <ErrorBar dataKey="ci68" width={4} stroke="var(--fg-muted)" />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

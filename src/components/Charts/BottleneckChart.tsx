'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { bottlenecks } from '@/data/bottlenecks';

// Normalize the 3 axes to 0..1 for visual comparison on a single chart.
// - energy_norm = log10(energy_tw) mapped into [0, 1] over the observed range
// - fab_norm    = chip_fab_self_replicating (already 0..1)
// - loop_norm   = 1 - clamp(log10(hours) - minLog) / range — shorter = better, so invert
const energyLogs = bottlenecks.map((b) => Math.log10(b.energy_tw));
const energyMin = Math.min(...energyLogs);
const energyMax = Math.max(...energyLogs);
const loopLogs = bottlenecks.map((b) => Math.log10(b.self_improvement_loop_hours));
const loopMin = Math.min(...loopLogs);
const loopMax = Math.max(...loopLogs);

const data = bottlenecks.map((b) => ({
  year: b.year,
  energy: (Math.log10(b.energy_tw) - energyMin) / (energyMax - energyMin || 1),
  fab: b.chip_fab_self_replicating,
  loop:
    1 -
    (Math.log10(b.self_improvement_loop_hours) - loopMin) / (loopMax - loopMin || 1),
}));

export function BottleneckChart() {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis
            dataKey="year"
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
          />
          <YAxis
            domain={[0, 1]}
            tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
          />
          <Tooltip
            contentStyle={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)',
              fontSize: '0.82rem',
            }}
            formatter={(v, name) => [
              `${(Number(v) * 100).toFixed(0)}%`,
              name,
            ]}
          />
          <Legend
            wrapperStyle={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--fg-muted)',
            }}
          />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="var(--accent)"
            name="Energy (log-norm TW)"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="fab"
            stroke="var(--source)"
            name="Self-replicating fab"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="loop"
            stroke="var(--extrapolation)"
            name="Self-improve loop (inv. hours)"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

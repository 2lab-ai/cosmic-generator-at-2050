'use client';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { scalingLawCurve, scalingLawParams } from '@/data/scaling-law';
import { energyScaling } from '@/data/energy-scaling';

// HAL anchor points: energy_w from energyScaling, intelligence = alpha * E^beta.
const anchorPoints = energyScaling.map((e) => ({
  level: e.level,
  energy_w: e.power_watts,
  intelligence:
    scalingLawParams.alpha * Math.pow(e.power_watts, scalingLawParams.beta),
}));

function formatPowerShort(w: number): string {
  if (w >= 1e18) return `${(w / 1e18).toFixed(0)}EW`;
  if (w >= 1e15) return `${(w / 1e15).toFixed(0)}PW`;
  if (w >= 1e12) return `${(w / 1e12).toFixed(0)}TW`;
  if (w >= 1e9) return `${(w / 1e9).toFixed(0)}GW`;
  if (w >= 1e6) return `${(w / 1e6).toFixed(0)}MW`;
  if (w >= 1e3) return `${(w / 1e3).toFixed(0)}kW`;
  return `${w}W`;
}

// Combine curve and anchors for a single dataset
const curveData = scalingLawCurve.map((p) => ({
  energy_w: p.energy_w,
  curve: p.intelligence,
}));

export function ScalingLawChart() {
  return (
    <div style={{ width: '100%', height: 340 }}>
      <ResponsiveContainer>
        <ComposedChart margin={{ top: 10, right: 30, bottom: 10, left: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis
            type="number"
            dataKey="energy_w"
            scale="log"
            domain={[1e2, 1e19]}
            tickFormatter={formatPowerShort}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
            label={{
              value: 'Energy (log W)',
              position: 'insideBottom',
              offset: -4,
              fill: 'var(--fg-muted)',
              fontSize: 11,
              fontFamily: 'var(--mono)',
            }}
          />
          <YAxis
            type="number"
            scale="log"
            domain={['auto', 'auto']}
            tickFormatter={(v: number) =>
              v >= 1 ? v.toExponential(0) : v.toExponential(0)
            }
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
              Number(v).toExponential(2),
              name === 'curve' ? 'I = α·E^β' : name,
            ]}
            labelFormatter={(v) => `E = ${formatPowerShort(Number(v))}`}
          />
          <Legend
            wrapperStyle={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--fg-muted)' }}
          />
          <Line
            data={curveData}
            dataKey="curve"
            name="I = (2.3e-3) · E^0.73"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Scatter
            data={anchorPoints}
            dataKey="intelligence"
            name="HAL0..HAL9 anchors"
            fill="var(--source)"
            shape="circle"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

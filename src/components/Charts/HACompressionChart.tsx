'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { haTimeline } from '@/data/ha-timeline';

// Compression ratio per epoch: (prev.years_since_prev) / (this.years_since_prev).
// We plot on log-y so the geometric acceleration shows as a roughly linear rise.
const data = haTimeline
  .map((e, i) => {
    const prev = i > 0 ? haTimeline[i - 1].years_since_prev : null;
    const ratio = e.years_since_prev && prev ? prev / e.years_since_prev : null;
    return ratio
      ? {
          epoch: e.name_en,
          epoch_ko: e.name_ko,
          years_ago: e.years_ago,
          compression: Number(ratio.toFixed(3)),
        }
      : null;
  })
  .filter((d): d is NonNullable<typeof d> => d !== null);

export function HACompressionChart() {
  return (
    <div className="mt-6" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-soft)" />
          <XAxis
            dataKey="epoch"
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
            angle={-20}
            textAnchor="end"
            height={60}
          />
          <YAxis
            scale="log"
            domain={['auto', 'auto']}
            tick={{ fill: 'var(--fg-muted)', fontSize: 11, fontFamily: 'var(--mono)' }}
            stroke="var(--border)"
            tickFormatter={(v: number) => v.toFixed(v < 10 ? 1 : 0) + '×'}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)',
              fontSize: '0.82rem',
            }}
            formatter={(v) => [`${Number(v).toFixed(2)}×`, 'compression']}
          />
          <ReferenceLine y={1} stroke="var(--fg-dim)" strokeDasharray="2 4" />
          <Line
            type="monotone"
            dataKey="compression"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={{ r: 4, fill: 'var(--accent)' }}
            activeDot={{ r: 6 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

'use client';

import { useLang } from '@/context/LangContext';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { HAPrimer } from '@/components/HAPrimer';
import { Pattern } from '@/components/Pattern';
import { PriorArt } from '@/components/PriorArt';
import { ClusterMilestones } from '@/components/ClusterMilestones';
import { TimelineBlock } from '@/components/TimelineBlock';
import { Sources } from '@/components/Sources';
import { Footer } from '@/components/Footer';
import { HACompressionChart } from '@/components/Charts/HACompressionChart';
import { EnergyPerHALChart } from '@/components/Charts/EnergyPerHALChart';
import { ScalingLawChart } from '@/components/Charts/ScalingLawChart';
import { BottleneckChart } from '@/components/Charts/BottleneckChart';

export default function Home() {
  const { content } = useLang();

  return (
    <main>
      <Hero />
      <Intro />
      <HAPrimer />
      <Pattern />
      <PriorArt />
      <ClusterMilestones />

      {/* §5 Timeline — 9 blocks */}
      <section id="timeline" aria-labelledby="timeline-title">
        <div className="wide-col">
          <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
            §5 · Timeline
          </div>
          <h2 id="timeline-title">{content.timeline_section.title}</h2>
          <p className="mt-4 max-w-[720px]">{content.timeline_section.intro}</p>
        </div>
        <div className="mt-10 space-y-12">
          {content.timeline_blocks.map((b, i) => (
            <TimelineBlock key={b.year + '-' + i} block={b} index={i} />
          ))}
        </div>
      </section>

      {/* §6 Charts */}
      <section id="charts" aria-labelledby="charts-title">
        <div className="wide-col">
          <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
            §6 · Charts
          </div>
          <h2 id="charts-title">{content.charts_section.title}</h2>
          <p className="mt-4 max-w-[720px]">{content.charts_section.intro}</p>

          <div className="mt-10 space-y-14">
            <div>
              <h3>{content.charts_section.ha_compression.title}</h3>
              <HACompressionChart />
              <div className="chart-caption">
                <span className="label-source">source</span>
                <span>{content.charts_section.ha_compression.caption}</span>
              </div>
            </div>

            <div>
              <h3>{content.charts_section.energy_per_hal.title}</h3>
              <EnergyPerHALChart />
              <div className="chart-caption">
                <span className="label-source">source</span>
                <span>{content.charts_section.energy_per_hal.caption}</span>
              </div>
            </div>

            <div>
              <h3>{content.charts_section.scaling_law.title}</h3>
              <ScalingLawChart />
              <div className="chart-caption">
                <span className="label-source">source</span>
                <span>{content.charts_section.scaling_law.caption}</span>
              </div>
            </div>

            <div>
              <h3>{content.charts_section.bottleneck.title}</h3>
              <BottleneckChart />
              <div className="chart-caption">
                <span className="label-extrapolation">extrapolation</span>
                <span>{content.charts_section.bottleneck.caption}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §7 Technical boxes */}
      <section id="tech-boxes" aria-labelledby="tech-boxes-title">
        <div className="prose-col">
          <div className="text-mono text-xs uppercase tracking-wider text-[var(--fg-dim)] mb-3">
            §7 · Technical Boxes
          </div>
          <h2 id="tech-boxes-title">{content.technical_boxes.title}</h2>
          <p className="mt-4">{content.technical_boxes.intro}</p>
          <div className="mt-8 space-y-3">
            {content.technical_boxes.boxes.map((b) => (
              <details key={b.id} className="tech-box">
                <summary>{b.title}</summary>
                <div className="tech-body">
                  {b.body}
                  <div className="mt-3">
                    <span className="cite">{b.citation_key}</span>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Sources />
      <Footer />
    </main>
  );
}

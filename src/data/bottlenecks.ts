import type { BottleneckPoint } from '@/types/data';

// 3 bottleneck axes by year. energy_tw from cluster-milestones power_watts
// (converted to TW). Other axes are qualitative maturity (0..1).
// Labels: energy=source (L4), others=extrapolation (author).
export const bottlenecks: BottleneckPoint[] = [
  {
    year: 2026,
    energy_tw: 0.0000000014, // 1.4 kW
    chip_fab_self_replicating: 0.0,
    self_improvement_loop_hours: 2160, // 3 months
    citation_key: 'bottleneck.2026',
    label: 'source',
  },
  {
    year: 2028,
    energy_tw: 0.00000035, // 350 kW
    chip_fab_self_replicating: 0.01,
    self_improvement_loop_hours: 720, // 1 month
    citation_key: 'bottleneck.2028',
    label: 'extrapolation',
  },
  {
    year: 2030,
    energy_tw: 0.000006, // 6 MW
    chip_fab_self_replicating: 0.05,
    self_improvement_loop_hours: 168, // 1 week
    citation_key: 'bottleneck.2030',
    label: 'extrapolation',
  },
  {
    year: 2032,
    energy_tw: 0.000026, // 26 MW
    chip_fab_self_replicating: 0.12,
    self_improvement_loop_hours: 72,
    citation_key: 'bottleneck.2032',
    label: 'extrapolation',
  },
  {
    year: 2034,
    energy_tw: 0.0001, // 100 MW
    chip_fab_self_replicating: 0.2,
    self_improvement_loop_hours: 48,
    citation_key: 'bottleneck.2034',
    label: 'extrapolation',
  },
  {
    year: 2036,
    energy_tw: 0.0009, // 900 MW
    chip_fab_self_replicating: 0.3,
    self_improvement_loop_hours: 24,
    citation_key: 'bottleneck.2036',
    label: 'extrapolation',
  },
  {
    year: 2038,
    energy_tw: 0.0017, // 1.7 GW
    chip_fab_self_replicating: 0.45,
    self_improvement_loop_hours: 12,
    citation_key: 'bottleneck.2038',
    label: 'extrapolation',
  },
  {
    year: 2041,
    energy_tw: 0.063, // 63 GW
    chip_fab_self_replicating: 0.65,
    self_improvement_loop_hours: 6,
    citation_key: 'bottleneck.2041',
    label: 'extrapolation',
  },
  {
    year: 2045,
    energy_tw: 8.5, // 8.5 TW
    chip_fab_self_replicating: 0.9,
    self_improvement_loop_hours: 1,
    citation_key: 'bottleneck.2045',
    label: 'extrapolation',
  },
  {
    year: 2050,
    energy_tw: 2300, // 2.3 PW
    chip_fab_self_replicating: 0.97,
    self_improvement_loop_hours: 0.1,
    citation_key: 'bottleneck.2050',
    label: 'extrapolation',
  },
  {
    year: 2056,
    energy_tw: 1200000, // 1.2 EW
    chip_fab_self_replicating: 1.0,
    self_improvement_loop_hours: 0.01,
    citation_key: 'bottleneck.2056',
    label: 'extrapolation',
  },
];

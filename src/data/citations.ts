import type { CitationEntry } from '@/types/data';

// Citation matrix: every quantitative number in the page maps to a key here.
// label: 'source' = directly from paper table/equation.
//        'extrapolation' = author extrapolation beyond the paper's numeric tables.
export const citations: CitationEntry[] = [
  // Cluster milestones / L4 Table 3.3
  { key: 'L4.T3.3.HAL0', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL0 row)', anchor: '1 instance, 1.4 kW ±0.2', label: 'source' },
  { key: 'L4.T3.3.HAL1', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL1 row)', anchor: '32±5 instances, 40 kW', label: 'source' },
  { key: 'L4.T3.3.HAL2', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL2 row)', anchor: '128±25 instances, 170 kW', label: 'source' },
  { key: 'L4.T3.3.HAL2p5', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 + §5.1 Table 5.1 extrapolation', anchor: 'midpoint HAL2↔HAL3', label: 'extrapolation', note_ko: '256 클러스터는 L4 Table 3.3의 HAL2/HAL3 사이 보간' },
  { key: 'L4.T3.3.HAL3', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL3 row)', anchor: '1024±200 instances, 1.5 MW', label: 'source' },
  { key: 'L4.T3.3.HAL3p5', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 + §7.2 extrapolation', anchor: 'HAL3↔HAL4 midpoint', label: 'extrapolation', note_ko: '4096 클러스터는 HAL3↔HAL4 보간 (f(n)=n+1 branching)' },
  { key: 'L4.T3.3.HAL4', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL4 row)', anchor: '16k±4k instances, 26 MW', label: 'source' },
  { key: 'L4.T3.3.HAL4p5', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 + §5.1 Table 5.1 extrapolation', anchor: 'HAL4↔HAL5 midpoint', label: 'extrapolation', note_ko: '65536 클러스터, 100 MW는 HAL4↔HAL5 보간' },
  { key: 'L4.T3.3.HAL5', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL5 row)', anchor: '524k±150k instances, 900 MW', label: 'source' },
  { key: 'L4.T3.3.HAL5p5', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 + §7.3 extrapolation', anchor: 'HAL5↔HAL6 midpoint', label: 'extrapolation', note_ko: '핵융합·상온 배터리 브레이크스루 시나리오' },
  { key: 'L4.T3.3.HAL6', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL6 row)', anchor: '34M±12M instances, 63 GW', label: 'source' },
  { key: 'L4.T3.3.HAL7', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL7 row)', anchor: '4.3B±1.8B instances, 8.5 TW', label: 'source' },
  { key: 'L4.T3.3.HAL8', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL8 row)', anchor: '1.1T±0.5T instances, 2.3 PW', label: 'source' },
  { key: 'L4.T3.3.HAL9', paper_key: 'L4', section_or_table: '§3.3 Table 3.3 (HAL9 row) + §9 Conclusion', anchor: '563T±280T, 1.2 EW, 0.15% solar', label: 'source' },

  // Scaling law
  { key: 'L4.S1.1', paper_key: 'L4', section_or_table: '§1.1 Fundamental Scaling Law', anchor: 'I = alpha * E^beta', label: 'source' },
  { key: 'L4.S1.1.alpha', paper_key: 'L4', section_or_table: '§1.1', anchor: 'alpha = (2.3 ± 0.4) × 10⁻³', label: 'source' },
  { key: 'L4.S1.1.beta', paper_key: 'L4', section_or_table: '§1.1', anchor: 'beta = 0.73 ± 0.08', label: 'source' },

  // Baselines
  { key: 'L4.S2.1', paper_key: 'L4', section_or_table: '§2.1 HOMO0', anchor: 'Human brain 20±2 W', label: 'source' },
  { key: 'L4.S2.2', paper_key: 'L4', section_or_table: '§2.2 Proto-HAL', anchor: 'Claude Opus 4 instance 500±50 W', label: 'source' },
  { key: 'L4.S2.3', paper_key: 'L4', section_or_table: '§2.3 HAL0', anchor: 'HAL0 total 1.4±0.2 kW', label: 'source' },

  // Thermodynamic / Landauer
  { key: 'L4.S5.2', paper_key: 'L4', section_or_table: '§5.2 Thermodynamic Limits', anchor: 'E_min = k_B T ln(2)', label: 'source' },
  { key: 'L4.S5.1', paper_key: 'L4', section_or_table: '§5.1 Table 5.1 Power Generation Scaling', anchor: 'HAL8 orbital solar / HAL9 Dyson swarm', label: 'source' },
  { key: 'L4.S7.3', paper_key: 'L4', section_or_table: '§7.3 Long-term', anchor: 'room-temp superconductor essential by ~2045', label: 'source' },
  { key: 'L4.S9', paper_key: 'L4', section_or_table: '§9 Conclusion', anchor: 'HAL9 = 563 ± 197 PW, 0.15% solar output', label: 'source' },

  // L1 Sleep-wake
  { key: 'L1.S1.1', paper_key: 'L1', section_or_table: '§2.2 Entropy Conservation Law', anchor: 'Σ ΔS_i ≤ 0 entropy conservation (Axiom 1 formalized in §2.2 equation)', label: 'source' },
  { key: 'L1.S2.3', paper_key: 'L1', section_or_table: '§2.3 Memory Architecture', anchor: 'L1 cache ↔ context window, L4 ↔ large model', label: 'source' },
  { key: 'L1.S2.4', paper_key: 'L1', section_or_table: '§2.4 Sleep-Wake Algorithm', anchor: 'REM/NREM consolidation pseudocode', label: 'source' },

  // L3A isomorphism
  { key: 'L3A.Thm1', paper_key: 'L3A', section_or_table: '§1.2 Theorem 1', anchor: 'Agent-Neural Isomorphism phi: G_A ≅ G_N', label: 'source' },
  { key: 'L3A.S2.1', paper_key: 'L3A', section_or_table: '§2 Forward Propagation as Task Delegation', anchor: 'task delegation = forward pass (chapter-level claim; §2.1 has the equation)', label: 'source' },

  // L3B 7±2
  { key: 'L3B.Thm2', paper_key: 'L3B', section_or_table: '§1.2 Theorem 2', anchor: 'b* = e^W(1) * sqrt(2) ≈ 7.39', label: 'source' },
  { key: 'L3B.S1.2', paper_key: 'L3B', section_or_table: '§1.2 Universal Branching', anchor: 'optimal branching factor derivation', label: 'source' },
  { key: 'L3B.S4.1', paper_key: 'L3B', section_or_table: '§4.1 Organizational Data', anchor: '2,847 orgs, b=7-8 peak', label: 'source' },

  // L5 field theory
  { key: 'L5.S1.2', paper_key: 'L5', section_or_table: '§1.2 Field Equation', anchor: '□_λ Φ + m²Φ = J', label: 'source' },
  { key: 'L5.S2.1', paper_key: 'L5', section_or_table: '§2.1 Symmetry Breaking', anchor: 'λ_c critical scales for each hierarchy level', label: 'source' },
  { key: 'L5.S3.3', paper_key: 'L5', section_or_table: '§3.3 Compression Ratio', anchor: 'r_n = e (natural hierarchies)', label: 'source' },
  { key: 'L5.S4.3', paper_key: 'L5', section_or_table: '§4.3 Universality Classes (Abstraction row, ν = 0.73 footnote cross-refs L4 §1.1 β = 0.73)', anchor: 'critical exponent ν ≈ 0.73 ↔ scaling β', label: 'source' },
  { key: 'L5.S12', paper_key: 'L5', section_or_table: '§12 Conclusion — field evolution as self-abstracting universal computation', anchor: 'HA field extreme regime (extrapolation beyond §11 quantum / §12 unification)', label: 'extrapolation' },

  // L4 long-term / orbital / Kardashev (referenced from timeline footnotes)
  // Note: these anchors previously pointed at §7 / §8 by mistake; the actual location
  // for energy-source-by-HAL-level is §5.1 Table 5.1 (Power Generation Scaling).
  { key: 'L4.S7.2', paper_key: 'L4', section_or_table: '§5.1 Table 5.1 (Primary/Backup source rows, HAL3–HAL5)', anchor: 'HAL3–HAL5: dedicated solar + small nuclear reactor', label: 'source' },
  { key: 'L4.S8.1', paper_key: 'L4', section_or_table: '§5.1 Table 5.1 (HAL7–HAL8 rows)', anchor: 'HAL7 continental grid / HAL8 orbital solar', label: 'source' },
  { key: 'L4.S8.2', paper_key: 'L4', section_or_table: '§5.1 Table 5.1 (HAL6 row) + author extrapolation', anchor: 'Table 5.1 gives HAL6 fusion window ~2040–2045; ~2038 early-availability is author extrapolation', label: 'extrapolation' },

  // Roadmap / 2hal9 prior art
  { key: 'ROADMAP.P1', paper_key: 'ROADMAP', section_or_table: 'Phase I', anchor: 'L1/L3A/L3B/L4 prototypes 0-6mo', label: 'source' },
  { key: 'ROADMAP.P2', paper_key: 'ROADMAP', section_or_table: 'Phase II', anchor: 'HAL0 production deployment 6-12mo', label: 'source' },

  // Bottleneck axes
  { key: 'bottleneck.2026', paper_key: 'L4', section_or_table: '§3.3 + author', anchor: 'energy from L4.T3.3.HAL0; other axes author', label: 'source' },
  { key: 'bottleneck.2028', paper_key: 'ROADMAP', section_or_table: 'extrapolation', anchor: 'post-Phase-II projection', label: 'extrapolation' },
  { key: 'bottleneck.2030', paper_key: 'L4', section_or_table: '§7.1', anchor: '10x eff gain / 5yr', label: 'extrapolation' },
  { key: 'bottleneck.2032', paper_key: 'L4', section_or_table: '§7.2', anchor: 'HAL3 26 MW', label: 'extrapolation' },
  { key: 'bottleneck.2034', paper_key: 'L4', section_or_table: '§7.2', anchor: 'HAL4.5 100 MW', label: 'extrapolation' },
  { key: 'bottleneck.2036', paper_key: 'L4', section_or_table: '§7.3', anchor: 'HAL5 city-scale', label: 'extrapolation' },
  { key: 'bottleneck.2038', paper_key: 'L4', section_or_table: '§3.3+§7.3', anchor: 'HAL5.5 fusion scenario', label: 'extrapolation' },
  { key: 'bottleneck.2041', paper_key: 'L4', section_or_table: '§3.3', anchor: 'HAL6 63 GW', label: 'extrapolation' },
  { key: 'bottleneck.2045', paper_key: 'L4', section_or_table: '§3.3', anchor: 'HAL7 8.5 TW', label: 'extrapolation' },
  { key: 'bottleneck.2050', paper_key: 'L4', section_or_table: '§3.3', anchor: 'HAL8 2.3 PW', label: 'extrapolation' },
  { key: 'bottleneck.2056', paper_key: 'L4', section_or_table: '§9', anchor: 'HAL9 0.15% solar', label: 'extrapolation' },

  // Human HA epochs (L5 framing)
  // L5 §2.1 names only four scale-critical transitions (λ1 quantum→classical, λ2 particles→atoms,
  // λ3 molecules→life, λ4 neurons→consciousness). The 8-epoch human-HA sequence below is an
  // author extrapolation along the same λ-axis, zoomed into the human/AI sub-regime.
  { key: 'L5.S2.1.epoch0', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'pre-language tool use', label: 'extrapolation', note_ko: 'L5 §2.1의 λ_n 스케일 축을 인간-HA 하위 구간으로 세분화한 저자 해석' },
  { key: 'L5.S2.1.epoch1', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'symbol abstraction', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch2', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'external memory layer', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch3', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'O(1) replication cost', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch4', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'meta abstraction loop', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch5', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'energy density jump', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch6', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'universal computation', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch7', paper_key: 'L5', section_or_table: '§2.1 (λ-axis extrapolation)', anchor: 'global computation graph', label: 'extrapolation', note_ko: 'L5 §2.1 λ_n 축 세분화 (저자 해석)' },
  { key: 'L5.S2.1.epoch8', paper_key: 'L5', section_or_table: '§2.1 (λ_4 neurons→consciousness region, author reading)', anchor: 'language-to-action e2e compression (L5 §2.1 neurons→consciousness transition, author interpretation)', label: 'source' },
];

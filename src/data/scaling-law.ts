import type { ScalingPoint } from '@/types/data';

// I = alpha * E^beta, alpha = 2.3e-3, beta = 0.73. Source: L4 §1.1.
const ALPHA = 2.3e-3;
const BETA = 0.73;

function generateScalingCurve(): ScalingPoint[] {
  const points: ScalingPoint[] = [];
  const numPoints = 50;
  const minLog = 2; // 10^2 W
  const maxLog = 18; // 10^18 W
  for (let i = 0; i < numPoints; i++) {
    const logE = minLog + ((maxLog - minLog) * i) / (numPoints - 1);
    const E = Math.pow(10, logE);
    const I = ALPHA * Math.pow(E, BETA);
    points.push({
      energy_w: E,
      intelligence: I,
      citation_key: 'L4.S1.1',
    });
  }
  return points;
}

export const scalingLawCurve: ScalingPoint[] = generateScalingCurve();

export const scalingLawParams = {
  alpha: ALPHA,
  alpha_uncertainty: 0.4e-3,
  beta: BETA,
  beta_uncertainty: 0.08,
  citation_key: 'L4.S1.1',
} as const;

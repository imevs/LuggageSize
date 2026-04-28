import type { Dimensions, Weight, UnitSystem } from '../types';

// ── Conversion constants ─────────────────────────────────────────────

const CM_TO_IN = 0.393701;
const IN_TO_CM = 2.54;
const KG_TO_LB = 2.20462;
const LB_TO_KG = 0.453592;

// ── Dimension conversions ────────────────────────────────────────────

export function convertDimensions(
  dims: Dimensions,
  targetUnit: 'cm' | 'in',
): Dimensions {
  if (dims.unit === targetUnit) return dims;

  const factor = targetUnit === 'in' ? CM_TO_IN : IN_TO_CM;
  return {
    length: round(dims.length * factor),
    width: round(dims.width * factor),
    height: round(dims.height * factor),
    unit: targetUnit,
  };
}

export function formatDimensions(
  dims: Dimensions | null,
  system: UnitSystem,
): string {
  if (!dims) return '—';
  const converted = convertDimensions(dims, system === 'metric' ? 'cm' : 'in');
  return `${converted.length}×${converted.width}×${converted.height} ${converted.unit}`;
}

// ── Weight conversions ───────────────────────────────────────────────

export function convertWeight(
  weight: Weight,
  targetUnit: 'kg' | 'lb',
): Weight {
  if (weight.value === null) return weight;
  if (weight.unit === targetUnit) return weight;

  const factor = targetUnit === 'lb' ? KG_TO_LB : LB_TO_KG;
  return {
    value: round(weight.value * factor),
    unit: targetUnit,
  };
}

export function formatWeight(weight: Weight, system: UnitSystem): string {
  if (weight.value === null) return 'No limit';
  const converted = convertWeight(weight, system === 'metric' ? 'kg' : 'lb');
  return `${converted.value} ${converted.unit}`;
}

// ── Total linear dimensions ──────────────────────────────────────────

export function totalLinear(dims: Dimensions): number {
  return dims.length + dims.width + dims.height;
}

// ── Helpers ──────────────────────────────────────────────────────────

function round(value: number, decimals = 1): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

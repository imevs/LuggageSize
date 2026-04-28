import { describe, it, expect } from 'vitest';
import {
  convertDimensions,
  convertWeight,
  formatDimensions,
  formatWeight,
  totalLinear,
} from '../src/utils/units';
import type { Dimensions, Weight } from '../src/types';

describe('convertDimensions', () => {
  it('returns same object when unit already matches', () => {
    const d: Dimensions = { length: 55, width: 40, height: 20, unit: 'cm' };
    expect(convertDimensions(d, 'cm')).toBe(d);
  });

  it('converts cm → in correctly', () => {
    const d: Dimensions = { length: 55, width: 40, height: 20, unit: 'cm' };
    const result = convertDimensions(d, 'in');
    expect(result.unit).toBe('in');
    expect(result.length).toBeCloseTo(21.7, 0);
    expect(result.width).toBeCloseTo(15.7, 0);
  });

  it('converts in → cm correctly', () => {
    const d: Dimensions = { length: 22, width: 16, height: 8, unit: 'in' };
    const result = convertDimensions(d, 'cm');
    expect(result.unit).toBe('cm');
    expect(result.length).toBeCloseTo(55.9, 0);
  });
});

describe('convertWeight', () => {
  it('returns same object when unit already matches', () => {
    const w: Weight = { value: 23, unit: 'kg' };
    expect(convertWeight(w, 'kg')).toBe(w);
  });

  it('converts kg → lb correctly', () => {
    const w: Weight = { value: 23, unit: 'kg' };
    const result = convertWeight(w, 'lb');
    expect(result.unit).toBe('lb');
    expect(result.value).toBeCloseTo(50.7, 0);
  });

  it('converts lb → kg correctly', () => {
    const w: Weight = { value: 50, unit: 'lb' };
    const result = convertWeight(w, 'kg');
    expect(result.unit).toBe('kg');
    expect(result.value).toBeCloseTo(22.7, 0);
  });

  it('handles null weight value gracefully', () => {
    const w: Weight = { value: null, unit: 'kg' };
    expect(convertWeight(w, 'lb')).toBe(w);
  });
});

describe('formatDimensions', () => {
  it('returns em dash for null dims', () => {
    expect(formatDimensions(null, 'metric')).toBe('—');
  });

  it('formats metric correctly', () => {
    const d: Dimensions = { length: 55, width: 40, height: 20, unit: 'cm' };
    expect(formatDimensions(d, 'metric')).toBe('55×40×20 cm');
  });

  it('formats imperial correctly', () => {
    const d: Dimensions = { length: 55, width: 40, height: 20, unit: 'cm' };
    const result = formatDimensions(d, 'imperial');
    expect(result).toContain('in');
  });
});

describe('formatWeight', () => {
  it('returns No limit for null weight', () => {
    const w: Weight = { value: null, unit: 'kg' };
    expect(formatWeight(w, 'metric')).toBe('No limit');
  });

  it('formats kg correctly', () => {
    const w: Weight = { value: 23, unit: 'kg' };
    expect(formatWeight(w, 'metric')).toBe('23 kg');
  });
});

describe('totalLinear', () => {
  it('sums all dimensions', () => {
    const d: Dimensions = { length: 56, width: 45, height: 25, unit: 'cm' };
    expect(totalLinear(d)).toBe(126);
  });
});

import { describe, it, expect } from 'vitest';
import { checkBagExceeds } from '../src/utils/baggage';
import type { BagAllowance } from '../src/types';

describe('checkBagExceeds', () => {
  const mockAllowance: BagAllowance = {
    dimensions: { length: 55, width: 40, height: 23, unit: 'cm' },
    weight: { value: 10, unit: 'kg' },
    quantity: 1,
    freeIncluded: true
  };

  it('returns false if bag within limits', () => {
    const userBag = { length: 50, width: 35, height: 20, weight: 8 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(false);
  });

  it('returns false if bag exactly at limits', () => {
    const userBag = { length: 55, width: 40, height: 23, weight: 10 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(false);
  });

  it('returns true if any dimension exceeds (simple)', () => {
    const userBag = { length: 56, width: 40, height: 23, weight: 10 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(true);
  });

  it('handles rotated dimensions correctly (fits)', () => {
    // Allowance is 55x40x23. User has 23x55x40. It fits.
    const userBag = { length: 23, width: 55, height: 40, weight: 10 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(false);
  });

  it('handles rotated dimensions correctly (does not fit)', () => {
    // Allowance is 55x40x23. User has 56x20x20. Length is too much.
    const userBag = { length: 56, width: 20, height: 20, weight: 10 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(true);
  });

  it('returns true if weight exceeds', () => {
    const userBag = { length: 50, width: 30, height: 20, weight: 11 };
    expect(checkBagExceeds(userBag, mockAllowance)).toBe(true);
  });

  it('returns true if freeIncluded is false', () => {
    const paidAllowance = { ...mockAllowance, freeIncluded: false };
    const userBag = { length: 10, width: 10, height: 10, weight: 1 };
    expect(checkBagExceeds(userBag, paidAllowance)).toBe(true);
  });

  it('returns true if allowance is null', () => {
    const userBag = { length: 10, width: 10, height: 10, weight: 1 };
    expect(checkBagExceeds(userBag, null)).toBe(true);
  });
});

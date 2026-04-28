import { describe, it, expect } from 'vitest';
import { getDefaultGeo, getCountryName } from '../src/utils/geo';

describe('getDefaultGeo', () => {
  it('returns a valid GeoResult', () => {
    const geo = getDefaultGeo();
    expect(geo.countryCode).toBeTruthy();
    expect(geo.city).toBeTruthy();
    expect(geo.countryName).toBeTruthy();
  });

  it('returns a copy, not the same reference', () => {
    const a = getDefaultGeo();
    const b = getDefaultGeo();
    expect(a).not.toBe(b);
  });
});

describe('getCountryName', () => {
  it('returns full name for known codes', () => {
    expect(getCountryName('GB')).toBe('United Kingdom');
    expect(getCountryName('US')).toBe('United States');
    expect(getCountryName('DE')).toBe('Germany');
  });

  it('returns the code itself for unknown codes', () => {
    expect(getCountryName('XX')).toBe('XX');
  });
});

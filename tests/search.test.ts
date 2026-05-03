import { describe, it, expect } from 'vitest';
import { searchAirlines, sortAirlines, filterByCountry, fuzzyMatch, filterFavorites } from '../src/utils/search';
import airlines from '../src/data/airlines';

describe('fuzzyMatch', () => {
  it('matches exact substring', () => {
    expect(fuzzyMatch('british airways', 'british')).toBe(true);
  });

  it('matches fuzzy (chars in order)', () => {
    expect(fuzzyMatch('lufthansa', 'lufh')).toBe(true);
  });

  it('fails when chars not in order', () => {
    expect(fuzzyMatch('air', 'ria')).toBe(false);
  });

  it('returns false for empty string match against non-empty query', () => {
    expect(fuzzyMatch('', 'x')).toBe(false);
  });

  it('returns true for empty query', () => {
    expect(fuzzyMatch('anything', '')).toBe(true);
  });
});

describe('searchAirlines', () => {
  it('returns all airlines for empty query', () => {
    expect(searchAirlines(airlines, '').length).toBe(airlines.length);
  });

  it('finds British Airways by name', () => {
    const results = searchAirlines(airlines, 'british');
    expect(results.some(a => a.id === 'BRIAIR')).toBe(true);
  });

  it('finds by IATA code', () => {
    const results = searchAirlines(airlines, 'EK');
    expect(results.some(a => a.id === 'EMI')).toBe(true);
  });

  it('finds Ryanair by partial name', () => {
    const results = searchAirlines(airlines, 'ryan');
    expect(results.some(a => a.id === 'RYA')).toBe(true);
  });

  it('returns empty for unmatched query', () => {
    const results = searchAirlines(airlines, 'xyznotanairline999');
    expect(results.length).toBe(0);
  });
});

describe('sortAirlines', () => {
  it('sorts by name alphabetically', () => {
    const sorted = sortAirlines(airlines, 'name');
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i - 1]!.name.localeCompare(sorted[i]!.name)).toBeLessThanOrEqual(0);
    }
  });

  it('sorts by generosity (generous first)', () => {
    const sorted = sortAirlines(airlines, 'generosity');
    const first = sorted[0]!.generosity;
    const last = sorted[sorted.length - 1]!.generosity;
    expect(first).not.toBe('strict');
    expect(last).not.toBe('generous');
  });

  it('sorts by weight descending', () => {
    const sorted = sortAirlines(airlines, 'weight');
    const weights = sorted.map(a => a.baggage.economy.checked?.weight.value ?? 0);
    for (let i = 1; i < weights.length; i++) {
      expect(weights[i - 1]!).toBeGreaterThanOrEqual(weights[i]!);
    }
  });
});

describe('filterByCountry', () => {
  it('returns airlines serving the country or from that country', () => {
    const results = filterByCountry(airlines, 'GB');
    expect(results.length).toBeGreaterThan(0);
    results.forEach(a => {
      expect(a.country === 'GB' || a.servesCountries.includes('GB')).toBe(true);
    });
  });

  it('returns empty for unknown country', () => {
    const results = filterByCountry(airlines, 'XX');
    expect(results.length).toBe(0);
  });
});

describe('filterFavorites', () => {
  it('returns only favorite airlines', () => {
    const favorites = ['BRIAIR', 'EMI'];
    const results = filterFavorites(airlines, favorites);
    expect(results.length).toBe(2);
    expect(results.some(a => a.id === 'BRIAIR')).toBe(true);
    expect(results.some(a => a.id === 'EMI')).toBe(true);
  });

  it('returns empty array if no favorites match', () => {
    const results = filterFavorites(airlines, ['NOT_REAL_AIRLINE']);
    expect(results.length).toBe(0);
  });

  it('returns empty array if favorites list is empty', () => {
    const results = filterFavorites(airlines, []);
    expect(results.length).toBe(0);
  });
});

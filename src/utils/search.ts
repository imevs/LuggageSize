import type { Airline, BagCategory, SortOption } from '../types';

// ── Fuzzy search ─────────────────────────────────────────────────────

export function searchAirlines(
  airlines: Airline[],
  query: string,
): Airline[] {
  const q = query.toLowerCase().trim();
  if (!q) return airlines;

  return airlines.filter((airline) => {
    const name = airline.name.toLowerCase();
    const iata = airline.iata.toLowerCase();
    const country = airline.country.toLowerCase();
    const alliance = (airline.alliance ?? '').toLowerCase();

    // Exact substring match (highest priority)
    if (name.includes(q) || iata === q || country.includes(q) || alliance.includes(q)) {
      return true;
    }

    // Fuzzy: all query chars appear in order
    return fuzzyMatch(name, q);
  }).sort((a, b) => {
    // Prioritize matches that start with the query
    const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
    const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
    return aStarts - bStarts;
  });
}

// ── Filter by bag category ───────────────────────────────────────────

export function filterByCategory(
  airlines: Airline[],
  _category: BagCategory,
): Airline[] {
  // All airlines have all categories; this is a display filter 
  // handled by card rendering, not data filtering.
  // We keep airlines that have data for the given category.
  return airlines;
}

// ── Sort airlines ────────────────────────────────────────────────────

const generosityOrder: Record<string, number> = {
  generous: 0,
  moderate: 1,
  strict: 2,
};

export function sortAirlines(
  airlines: Airline[],
  sortBy: SortOption,
): Airline[] {
  const sorted = [...airlines];

  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'generosity':
      sorted.sort(
        (a, b) =>
          (generosityOrder[a.generosity] ?? 1) -
          (generosityOrder[b.generosity] ?? 1),
      );
      break;
    case 'weight': {
      sorted.sort((a, b) => {
        const aW = a.baggage.economy.checked?.weight.value ?? 0;
        const bW = b.baggage.economy.checked?.weight.value ?? 0;
        return bW - aW; // descending — most generous first
      });
      break;
    }
  }

  return sorted;
}

// ── Filter airlines by country ───────────────────────────────────────

export function filterByCountry(
  airlines: Airline[],
  countryCode: string,
): Airline[] {
  return airlines.filter(
    (a) =>
      a.country === countryCode ||
      a.servesCountries.includes(countryCode),
  );
}

export function filterFavorites(airlines: Airline[], favorites: string[]): Airline[] {
  return airlines.filter(a => favorites.includes(a.id));
}

// ── Fuzzy match helper ───────────────────────────────────────────────

export function fuzzyMatch(text: string, query: string): boolean {
  let qi = 0;
  for (let i = 0; i < text.length && qi < query.length; i++) {
    if (text[i] === query[qi]) {
      qi++;
    }
  }
  return qi === query.length;
}

// ── Filter by region ─────────────────────────────────────────────────

export function filterByRegion(
  airlines: Airline[],
  regions: string[],
): Airline[] {
  if (regions.length === 0) return airlines;
  return airlines.filter((a) => regions.includes(a.region));
}

// ── Get unique regions from airline list ─────────────────────────────

export function getRegions(airlines: Airline[]): string[] {
  const seen = new Set<string>();
  const regions: string[] = [];
  for (const a of airlines) {
    if (!seen.has(a.region)) {
      seen.add(a.region);
      regions.push(a.region);
    }
  }
  return regions.sort();
}

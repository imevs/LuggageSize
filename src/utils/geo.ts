// ── Geolocation utilities ────────────────────────────────────────────

export interface GeoResult {
  countryCode: string;
  city: string;
  countryName: string;
}

const DEFAULT_GEO: GeoResult = {
  countryCode: 'US',
  city: 'New York',
  countryName: 'United States',
};

// ── IP-based geolocation (primary, no permission needed) ─────────────

export async function detectLocation(): Promise<GeoResult> {
  try {
    // Try free IP geolocation API
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) throw new Error('IP geo failed');

    const data = await response.json() as {
      country_code?: string;
      city?: string;
      country_name?: string;
    };

    if (data.country_code) {
      return {
        countryCode: data.country_code,
        city: data.city ?? 'Unknown',
        countryName: data.country_name ?? data.country_code,
      };
    }
  } catch {
    // Silently fall through to default
  }

  return DEFAULT_GEO;
}

// ── Country code to display name ─────────────────────────────────────

const COUNTRY_NAMES: Record<string, string> = {
  US: 'United States', GB: 'United Kingdom', DE: 'Germany', FR: 'France',
  ES: 'Spain', IT: 'Italy', NL: 'Netherlands', BE: 'Belgium',
  PT: 'Portugal', CH: 'Switzerland', AT: 'Austria', SE: 'Sweden',
  NO: 'Norway', DK: 'Denmark', FI: 'Finland', IE: 'Ireland',
  PL: 'Poland', CZ: 'Czech Republic', GR: 'Greece', RO: 'Romania',
  HU: 'Hungary', BG: 'Bulgaria', HR: 'Croatia', SK: 'Slovakia',
  SI: 'Slovenia', LT: 'Lithuania', LV: 'Latvia', EE: 'Estonia',
  CY: 'Cyprus', MT: 'Malta', LU: 'Luxembourg',
  CA: 'Canada', MX: 'Mexico', BR: 'Brazil', AR: 'Argentina',
  CL: 'Chile', CO: 'Colombia', PE: 'Peru',
  CN: 'China', JP: 'Japan', KR: 'South Korea', IN: 'India',
  TH: 'Thailand', SG: 'Singapore', MY: 'Malaysia', ID: 'Indonesia',
  PH: 'Philippines', VN: 'Vietnam', TW: 'Taiwan', HK: 'Hong Kong',
  AE: 'United Arab Emirates', SA: 'Saudi Arabia', QA: 'Qatar',
  IL: 'Israel', TR: 'Turkey', EG: 'Egypt', ZA: 'South Africa',
  KE: 'Kenya', NG: 'Nigeria', MA: 'Morocco', ET: 'Ethiopia',
  AU: 'Australia', NZ: 'New Zealand',
  RU: 'Russia', UA: 'Ukraine', KZ: 'Kazakhstan',
};

export function getCountryName(code: string): string {
  return COUNTRY_NAMES[code] ?? code;
}

export function getDefaultGeo(): GeoResult {
  return { ...DEFAULT_GEO };
}

/**
 * generate-airlines.ts
 *
 * Regenerates src/data/airlines.ts from two source files:
 *   - src/data/luggage_sizes.md   (dimensions & weights)
 *   - src/data/airline-carryon-urls.json  (website URLs by airline code)
 *
 * Usage:
 *   npx tsx scripts/generate-airlines.ts
 *   # or via npm script:
 *   npm run generate-airlines
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ─── File paths ────────────────────────────────────────────────────────────────
const MD_PATH   = path.join(ROOT, 'src', 'data', 'luggage_sizes.md');
const URLS_PATH = path.join(ROOT, 'src', 'data', 'airline-carryon-urls.json');
const OUT_PATH  = path.join(ROOT, 'src', 'data', 'airlines.ts');

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Dimensions { length: number; width: number; height: number; unit: 'cm' | 'in'; }
interface Weight     { value: number | null; unit: 'kg' | 'lb'; }
interface BagAllowance {
  dimensions: Dimensions | null;
  weight: Weight;
  quantity: number;
  freeIncluded: boolean;
}
interface CabinClassBaggage {
  carryOn: BagAllowance | null;
  personalItem: BagAllowance | null;
  checked: BagAllowance | null;
}
interface Airline {
  id: string;
  name: string;
  iata: string;
  country: string;
  alliance: string | null;
  region: string;
  website: string;
  generosity: 'generous' | 'moderate' | 'strict';
  lastUpdated: string;
  servesCountries: string[];
  baggage: { economy: CabinClassBaggage; business: CabinClassBaggage; first: CabinClassBaggage; };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

/** Parse a dimension string like "55 x 40 x 23" → Dimensions */
function parseDims(raw: string): Dimensions | null {
  const m = raw.trim().match(/^([\d.]+)\s*x\s*([\d.]+)\s*x\s*([\d.]+)/i);
  if (!m) return null;
  return {
    length: Math.round(parseFloat(m[1])),
    width:  Math.round(parseFloat(m[2])),
    height: Math.round(parseFloat(m[3])),
    unit:   'cm',
  };
}

/** Parse a weight string like "8" or "-" → Weight */
function parseWeight(raw: string): Weight {
  const v = raw.trim();
  if (v === '-' || v === '') return { value: null, unit: 'kg' };
  // Handle ranges like "10/15" – take the first value
  const first = v.split('/')[0].replace(/[^\d.]/g, '');
  const num = parseFloat(first);
  return { value: isNaN(num) ? null : Math.round(num), unit: 'kg' };
}

/** Produce a slug-like ID from an airline name */
function nameToId(name: string): string {
  return name
    .toUpperCase()
    .replace(/[^A-Z0-9 ]/g, '')
    .trim()
    .split(/\s+/)
    .map(w => w.slice(0, 3))
    .join('')
    .slice(0, 8);
}

/** Classify generosity from carry-on weight */
function classifyGenerosity(weight: number | null): 'generous' | 'moderate' | 'strict' {
  if (weight === null) return 'moderate';
  if (weight >= 15) return 'generous';
  if (weight <= 7)  return 'strict';
  return 'moderate';
}

/** Known IATA 2-letter codes for major airlines */
const KNOWN_IATA: Record<string, { iata: string; country: string; alliance: string | null; region: string; }> = {
  'British Airways':     { iata: 'BA', country: 'GB', alliance: 'oneworld',     region: 'Europe' },
  'Ryanair':             { iata: 'FR', country: 'IE', alliance: null,            region: 'Europe' },
  'Lufthansa':           { iata: 'LH', country: 'DE', alliance: 'Star Alliance', region: 'Europe' },
  'Singapore Airlines':  { iata: 'SQ', country: 'SG', alliance: 'Star Alliance', region: 'Asia' },
  'KLM':                 { iata: 'KL', country: 'NL', alliance: 'SkyTeam',       region: 'Europe' },
  'KLM Royal Dutch Airlines': { iata: 'KL', country: 'NL', alliance: 'SkyTeam', region: 'Europe' },
  'KLM Royal Dutch':     { iata: 'KL', country: 'NL', alliance: 'SkyTeam',      region: 'Europe' },
  'Air France':          { iata: 'AF', country: 'FR', alliance: 'SkyTeam',       region: 'Europe' },
  'Emirates':            { iata: 'EK', country: 'AE', alliance: null,            region: 'Middle East' },
  'EasyJet':             { iata: 'U2', country: 'GB', alliance: null,            region: 'Europe' },
  'easyJet':             { iata: 'U2', country: 'GB', alliance: null,            region: 'Europe' },
  'American Airlines':   { iata: 'AA', country: 'US', alliance: 'oneworld',     region: 'North America' },
  'Delta Air Lines':     { iata: 'DL', country: 'US', alliance: 'SkyTeam',       region: 'North America' },
  'United Airlines':     { iata: 'UA', country: 'US', alliance: 'Star Alliance', region: 'North America' },
  'Qatar Airways':       { iata: 'QR', country: 'QA', alliance: 'oneworld',     region: 'Middle East' },
  'Turkish Airlines':    { iata: 'TK', country: 'TR', alliance: 'Star Alliance', region: 'Europe' },
  'Cathay Pacific':      { iata: 'CX', country: 'HK', alliance: 'oneworld',     region: 'Asia' },
  'Finnair':             { iata: 'AY', country: 'FI', alliance: 'oneworld',     region: 'Europe' },
  'Etihad Airways':      { iata: 'EY', country: 'AE', alliance: null,            region: 'Middle East' },
  'Iberia':              { iata: 'IB', country: 'ES', alliance: 'oneworld',     region: 'Europe' },
  'Qantas':              { iata: 'QF', country: 'AU', alliance: 'oneworld',     region: 'Oceania' },
  'Air Canada':          { iata: 'AC', country: 'CA', alliance: 'Star Alliance', region: 'North America' },
  'Wizz Air':            { iata: 'W6', country: 'HU', alliance: null,            region: 'Europe' },
  'Aegean Airlines':     { iata: 'A3', country: 'GR', alliance: 'Star Alliance', region: 'Europe' },
  'Aeroflot':            { iata: 'SU', country: 'RU', alliance: 'SkyTeam',       region: 'Europe' },
  'Alaska Airlines':     { iata: 'AS', country: 'US', alliance: 'oneworld',     region: 'North America' },
  'All Nippon Airways':  { iata: 'NH', country: 'JP', alliance: 'Star Alliance', region: 'Asia' },
  'Ethiopian Airlines':  { iata: 'ET', country: 'ET', alliance: 'Star Alliance', region: 'Africa' },
  'FlyDubai':            { iata: 'FZ', country: 'AE', alliance: null,            region: 'Middle East' },
  'Flydubai':            { iata: 'FZ', country: 'AE', alliance: null,            region: 'Middle East' },
  'Malaysia Airlines':   { iata: 'MH', country: 'MY', alliance: 'oneworld',     region: 'Asia' },
  'Norwegian Air':       { iata: 'DY', country: 'NO', alliance: null,            region: 'Europe' },
  'Norwegian Air Shuttle': { iata: 'DY', country: 'NO', alliance: null,          region: 'Europe' },
  'Aer Lingus':          { iata: 'EI', country: 'IE', alliance: 'oneworld',     region: 'Europe' },
  'Aerolineas Argentinas': { iata: 'AR', country: 'AR', alliance: 'SkyTeam',    region: 'Latin America' },
  'Aeromexico':          { iata: 'AM', country: 'MX', alliance: 'SkyTeam',       region: 'Latin America' },
  'Air Arabia':          { iata: 'G9', country: 'AE', alliance: null,            region: 'Middle East' },
  'Air Astana':          { iata: 'KC', country: 'KZ', alliance: null,            region: 'Central Asia' },
  'Air Baltic':          { iata: 'BT', country: 'LV', alliance: null,            region: 'Europe' },
  'Air China':           { iata: 'CA', country: 'CN', alliance: 'Star Alliance', region: 'Asia' },
  'Air India':           { iata: 'AI', country: 'IN', alliance: 'Star Alliance', region: 'Asia' },
  'Air New Zealand':     { iata: 'NZ', country: 'NZ', alliance: 'Star Alliance', region: 'Oceania' },
  'Air Serbia':          { iata: 'JU', country: 'RS', alliance: null,            region: 'Europe' },
  'Air Transat':         { iata: 'TS', country: 'CA', alliance: null,            region: 'North America' },
  'Allegiant Air':       { iata: 'G4', country: 'US', alliance: null,            region: 'North America' },
  'Asiana Airlines':     { iata: 'OZ', country: 'KR', alliance: 'Star Alliance', region: 'Asia' },
  'Austrian Airlines':   { iata: 'OS', country: 'AT', alliance: 'Star Alliance', region: 'Europe' },
  'Avianca':             { iata: 'AV', country: 'CO', alliance: 'Star Alliance', region: 'Latin America' },
  'Avianca Airlines':    { iata: 'AV', country: 'CO', alliance: 'Star Alliance', region: 'Latin America' },
  'Azul':                { iata: 'AD', country: 'BR', alliance: null,            region: 'Latin America' },
  'Brussels Airlines':   { iata: 'SN', country: 'BE', alliance: 'Star Alliance', region: 'Europe' },
  'Cebu Pacific':        { iata: '5J', country: 'PH', alliance: null,            region: 'Asia' },
  'China Eastern Airlines': { iata: 'MU', country: 'CN', alliance: 'SkyTeam',   region: 'Asia' },
  'China Eastern':       { iata: 'MU', country: 'CN', alliance: 'SkyTeam',       region: 'Asia' },
  'Condor':              { iata: 'DE', country: 'DE', alliance: null,            region: 'Europe' },
  'Copa Airlines':       { iata: 'CM', country: 'PA', alliance: 'Star Alliance', region: 'Latin America' },
  'EgyptAir':            { iata: 'MS', country: 'EG', alliance: 'Star Alliance', region: 'Africa' },
  'El Al':               { iata: 'LY', country: 'IL', alliance: null,            region: 'Middle East' },
  'Eurowings':           { iata: 'EW', country: 'DE', alliance: null,            region: 'Europe' },
  'Frontier Airlines':   { iata: 'F9', country: 'US', alliance: null,            region: 'North America' },
  'Garuda Indonesia':    { iata: 'GA', country: 'ID', alliance: 'SkyTeam',       region: 'Asia' },
  'GOL Airlines':        { iata: 'G3', country: 'BR', alliance: null,            region: 'Latin America' },
  'Gulf Air':            { iata: 'GF', country: 'BH', alliance: null,            region: 'Middle East' },
  'Icelandair':          { iata: 'FI', country: 'IS', alliance: null,            region: 'Europe' },
  'IndiGo Airlines':     { iata: '6E', country: 'IN', alliance: null,            region: 'Asia' },
  'JetBlue Airways':     { iata: 'B6', country: 'US', alliance: null,            region: 'North America' },
  'Kenya Airways':       { iata: 'KQ', country: 'KE', alliance: 'SkyTeam',       region: 'Africa' },
  'Korean Air':          { iata: 'KE', country: 'KR', alliance: 'SkyTeam',       region: 'Asia' },
  'LATAM Airlines':      { iata: 'LA', country: 'CL', alliance: 'oneworld',     region: 'Latin America' },
  'LOT Polish':          { iata: 'LO', country: 'PL', alliance: 'Star Alliance', region: 'Europe' },
  'LOT Polish Airlines': { iata: 'LO', country: 'PL', alliance: 'Star Alliance', region: 'Europe' },
  'Oman Air':            { iata: 'WY', country: 'OM', alliance: null,            region: 'Middle East' },
  'Pegasus Airlines':    { iata: 'PC', country: 'TR', alliance: null,            region: 'Europe' },
  'Philippine Airlines': { iata: 'PR', country: 'PH', alliance: null,            region: 'Asia' },
  'Philippines Airlines': { iata: 'PR', country: 'PH', alliance: null,           region: 'Asia' },
  'Porter Airlines':     { iata: 'PD', country: 'CA', alliance: null,            region: 'North America' },
  'Scandinavian (SAS)':  { iata: 'SK', country: 'SE', alliance: 'Star Alliance', region: 'Europe' },
  'Scoot Airlines':      { iata: 'TR', country: 'SG', alliance: null,            region: 'Asia' },
  'Southwest Airlines':  { iata: 'WN', country: 'US', alliance: null,            region: 'North America' },
  'SpiceJet':            { iata: 'SG', country: 'IN', alliance: null,            region: 'Asia' },
  'Spirit Airlines':     { iata: 'NK', country: 'US', alliance: null,            region: 'North America' },
  'SriLankan Airlines':  { iata: 'UL', country: 'LK', alliance: 'oneworld',     region: 'Asia' },
  'Sri Lankan Airlines': { iata: 'UL', country: 'LK', alliance: 'oneworld',     region: 'Asia' },
  'Sun Country Airlines': { iata: 'SY', country: 'US', alliance: null,           region: 'North America' },
  'Sunwing Airlines':    { iata: 'WG', country: 'CA', alliance: null,            region: 'North America' },
  'Swiss (SWISS)':       { iata: 'LX', country: 'CH', alliance: 'Star Alliance', region: 'Europe' },
  'SWISS':               { iata: 'LX', country: 'CH', alliance: 'Star Alliance', region: 'Europe' },
  'TAP Air Portugal':    { iata: 'TP', country: 'PT', alliance: 'Star Alliance', region: 'Europe' },
  'Thai Airways':        { iata: 'TG', country: 'TH', alliance: 'Star Alliance', region: 'Asia' },
  'Thai Lion Air':       { iata: 'SL', country: 'TH', alliance: null,            region: 'Asia' },
  'Transavia':           { iata: 'HV', country: 'NL', alliance: null,            region: 'Europe' },
  'Ukraine Intl (UIA)':  { iata: 'PS', country: 'UA', alliance: null,            region: 'Europe' },
  'Ukraine International Airlines': { iata: 'PS', country: 'UA', alliance: null, region: 'Europe' },
  'Vietnam Airlines':    { iata: 'VN', country: 'VN', alliance: 'SkyTeam',       region: 'Asia' },
  'Virgin Atlantic':     { iata: 'VS', country: 'GB', alliance: null,            region: 'Europe' },
  'Virgin Atlantic Airways': { iata: 'VS', country: 'GB', alliance: null,        region: 'Europe' },
  'WestJet':             { iata: 'WS', country: 'CA', alliance: null,            region: 'North America' },
  'EVA Air':             { iata: 'BR', country: 'TW', alliance: 'Star Alliance', region: 'Asia' },
  'Norse Atlantic Airways': { iata: 'N0', country: 'NO', alliance: null,         region: 'Europe' },
  'SmartWings':          { iata: 'QS', country: 'CZ', alliance: null,            region: 'Europe' },
  'Royal Air Maroc':     { iata: 'AT', country: 'MA', alliance: 'oneworld',     region: 'Africa' },
  'Belavia':             { iata: 'B2', country: 'BY', alliance: null,            region: 'Europe' },
  'S7 Airlines':         { iata: 'S7', country: 'RU', alliance: 'oneworld',     region: 'Europe' },
  'Ural Airlines':       { iata: 'U6', country: 'RU', alliance: null,            region: 'Europe' },
  'Pobeda':              { iata: 'DP', country: 'RU', alliance: null,            region: 'Europe' },
  'Loganair':            { iata: 'LM', country: 'GB', alliance: null,            region: 'Europe' },
  'Aer Lingus Regional': { iata: 'EI', country: 'IE', alliance: null,            region: 'Europe' },
  'REX Regional Express Airlines': { iata: 'ZL', country: 'AU', alliance: null, region: 'Oceania' },
  'Virgin Australia':    { iata: 'VA', country: 'AU', alliance: null,            region: 'Oceania' },
  'Cayman Airways':      { iata: 'KX', country: 'KY', alliance: null,            region: 'North America' },
};

// ─── Parse luggage_sizes.md ────────────────────────────────────────────────────

interface ParsedRow {
  airline: string;
  type: 'carryOn' | 'personalItem' | 'checked';
  dims: Dimensions | null;
  weight: Weight;
  cabinClass: 'economy' | 'business' | 'first';
}

/**
 * Normalise the free-text "Baggage Type" column into a canonical bag category.
 * The MD uses values like: Carry-on, Hand Luggage, Personal Item, Checked
 */
function normaliseBagType(raw: string): ParsedRow['type'] | null {
  const t = raw.toLowerCase();
  if (t.includes('personal') || t.includes('underseat')) return 'personalItem';
  if (t.includes('checked'))                               return 'checked';
  if (t.includes('carry') || t.includes('hand') || t.includes('cabin') || t.includes('luggage')) return 'carryOn';
  return null;
}

/** Infer cabin class from the notes column */
function inferCabinClass(notes: string): 'economy' | 'business' | 'first' {
  const n = notes.toLowerCase();
  if (n.includes('first'))    return 'first';
  if (n.includes('business')) return 'business';
  return 'economy';
}

function parseMd(mdPath: string): Map<string, ParsedRow[]> {
  const lines = fs.readFileSync(mdPath, 'utf-8').split('\n');
  const result = new Map<string, ParsedRow[]>();

  for (const line of lines) {
    // Match table rows (pipes, but not the header / separator rows)
    if (!line.startsWith('|') || line.includes(':---')) continue;

    const cols = line.split('|').map(c => c.trim()).filter(Boolean);
    // Both tables we care about have at least 4 columns
    if (cols.length < 4) continue;

    // Strip bold markdown from airline name
    const airlineName = cols[0].replace(/\*\*/g, '').trim();
    if (!airlineName || airlineName.toLowerCase() === 'airline') continue;

    const bagTypeRaw = cols[1];
    const bagType    = normaliseBagType(bagTypeRaw);
    if (!bagType) continue;

    // Column indices differ between the two tables:
    //  Consolidated table: [Airline, Baggage Type, Max Dimensions (cm), Max Weight (kg), Class/Notes, Conflict?]
    //  Detailed table:     [Airline, Region,        Centimeters,         Kilograms]
    let dimsRaw   = '';
    let weightRaw = '';
    let notesRaw  = '';

    if (cols.length >= 5) {
      // Consolidated table
      dimsRaw   = cols[2];
      weightRaw = cols[3];
      notesRaw  = cols[4] ?? '';
    } else {
      dimsRaw   = cols[2];
      weightRaw = cols[3];
    }

    // The detail table uses Region instead of BagType, so we need to detect it.
    // In the detail table cols[1] is a region name, not a bag type.
    // We already filtered via normaliseBagType, but the detail table rows
    // won't have a valid bag type in cols[1].  We handle the detail table
    // rows as carry-on since that table is explicitly "Carry-on Guide".
    // However, normaliseBagType returned null for region strings, so those
    // rows are already skipped — that's fine; the consolidated table has
    // richer data anyway.

    const dims   = parseDims(dimsRaw);
    const weight = parseWeight(weightRaw);
    const cc     = inferCabinClass(notesRaw);

    const row: ParsedRow = { airline: airlineName, type: bagType, dims, weight, cabinClass: cc };
    const existing = result.get(airlineName) ?? [];
    // Avoid exact duplicates
    const alreadyThere = existing.some(
      e => e.type === row.type && e.cabinClass === row.cabinClass
        && e.dims?.length === row.dims?.length
        && (e.weight.value ?? -1) === (row.weight.value ?? -1)
    );
    if (!alreadyThere) existing.push(row);
    result.set(airlineName, existing);
  }

  // ── Also parse the Detailed Carry-on table (region, cm, kg) ──────────────
  // In that table cols[1] is a region string → normaliseBagType returns null.
  // We re-parse it separately knowing column positions.
  for (const line of lines) {
    if (!line.startsWith('|') || line.includes(':---')) continue;
    const cols = line.split('|').map(c => c.trim()).filter(Boolean);
    if (cols.length < 4) continue;

    const airlineName = cols[0].replace(/\*\*/g, '').trim();
    if (!airlineName || airlineName.toLowerCase() === 'airline') continue;

    // Detect the detailed table: col[1] looks like a region not a bag type
    const col1 = cols[1].toLowerCase();
    const isRegion = ['europe','asia','africa','oceania','middle','north','latin',
      'south','central','india','uk','us','global'].some(r => col1.includes(r));
    if (!isRegion) continue;

    // Dimensions are in cols[2], weight in cols[3]
    const dimsRaw   = cols[2];
    const weightRaw = cols[3];

    const dims   = parseDims(dimsRaw);
    const weight = parseWeight(weightRaw);

    const row: ParsedRow = { airline: airlineName, type: 'carryOn', dims, weight, cabinClass: 'economy' };
    const existing = result.get(airlineName) ?? [];
    const alreadyThere = existing.some(
      e => e.type === 'carryOn' && e.cabinClass === 'economy'
    );
    // Only add from this table if consolidated table didn't already supply economy carry-on
    if (!alreadyThere) existing.push(row);
    result.set(airlineName, existing);
  }

  return result;
}

// ─── Build airline records ─────────────────────────────────────────────────────

function buildNullCabin(): CabinClassBaggage {
  return { carryOn: null, personalItem: null, checked: null };
}

function buildBagAllowance(row: ParsedRow): BagAllowance {
  return {
    dimensions:   row.dims,
    weight:       row.weight,
    quantity:     1,
    freeIncluded: true,
  };
}

function buildAirlines(
  mdRows: Map<string, ParsedRow[]>,
  urlMap: Record<string, string>
): Airline[] {
  const today = new Date().toISOString().slice(0, 10);
  const airlines: Airline[] = [];
  const seenIds = new Set<string>();

  /**
   * Direct mapping: airline name (as it appears in luggage_sizes.md) → key in urlMap.
   * Covers all airlines in the JSON; any unrecognised airline falls back to ''.
   */
  const NAME_TO_URL_KEY: Record<string, string> = {
    'Aegean Airlines':              'AEG',
    'Aer Lingus':                   'AERLI',
    'Aer Lingus Regional':          'AERLI',
    'Aeroflot':                     'AER',
    'Aerolineas Argentinas':        'AEROL',
    'Aeromexico':                   'AEROM',
    'Air Arabia':                   'AIRAR',
    'Air Astana':                   'AIRAS',
    'Air Baltic':                   'AIRBA',
    'Air Canada':                   'AIRCAN',
    'Air China':                    'AIRCH',
    'Air Europa':                   'AIREU',
    'Air France':                   'AIR',
    'Air India':                    'AIRIN',
    'Air New Zealand':              'AIRNE',
    'Air Serbia':                   'AIRSRB',
    'Air Transat':                  'AIRTRA',
    'Alaska Airlines':              'ALA',
    'All Nippon Airways':           'ALL',
    'Allegiant Air':                'ALLEG',
    'American Airlines':            'AME',
    'Asiana Airlines':              'ASIAN',
    'Austrian Airlines':            'AUSTR',
    'Avianca':                      'AVIAN',
    'Avianca Airlines':             'AVIAN',
    'Azul':                         'AZUL',
    'Belavia':                      'BEL',
    'British Airways':              'BA',
    'Brussels Airlines':            'BRUSS',
    'Cathay Pacific':               'CAT',
    'Cebu Pacific':                 'CEBUP',
    'China Eastern':                'CHINA',
    'China Eastern Airlines':       'CHINA',
    'Condor':                       'CONDO',
    'Copa Airlines':                'COPAA',
    'Delta Air Lines':              'DEL',
    'EasyJet':                      'EAS',
    'easyJet':                      'EAS',
    'EgyptAir':                     'EGYPT',
    'El Al':                        'ELAL',
    'Emirates':                     'EMI',
    'Ethiopian Airlines':           'ETH',
    'Etihad Airways':               'ETI',
    'Eurowings':                    'EUROW',
    'EVA Air':                      'EVAAI',
    'Finnair':                      'FIN',
    'FlyDubai':                     'FLY',
    'Flydubai':                     'FLY',
    'Frontier Airlines':            'FRONT',
    'Garuda Indonesia':             'GARUD',
    'GOL Airlines':                 'GOLAI',
    'Gulf Air':                     'GULFA',
    'Iberia':                       'IBE',
    'Icelandair':                   'ICELA',
    'IndiGo Airlines':              'INDIG',
    'JetBlue Airways':              'JETBL',
    'Kenya Airways':                'KENYA',
    'KLM':                          'KL',
    'KLM Royal Dutch':              'KL',
    'KLM Royal Dutch Airlines':     'KL',
    'Korean Air':                   'KOREA',
    'LATAM Airlines':               'LATAM',
    'LOT Polish':                   'LOTPO',
    'LOT Polish Airlines':          'LOTPO',
    'Lufthansa':                    'LH',
    'Malaysia Airlines':            'MAL',
    'Norse Atlantic Airways':       'NORSE',
    'Norwegian Air':                'NORWE',
    'Oman Air':                     'OMANA',
    'Pegasus Airlines':             'PEGAS',
    'Philippine Airlines':          'PHILI',
    'Philippines Airlines':         'PHILI',
    'Pobeda':                       'POB',
    'Porter Airlines':              'PORTU',
    'Qantas':                       'QAN',
    'Qatar Airways':                'QAT',
    'Royal Air Maroc':              'ROYAL',
    'Ryanair':                      'FR',
    'S7 Airlines':                  'S7A',
    'Scandinavian (SAS)':           'SCAND',
    'Scoot Airlines':               'SCOOT',
    'Singapore Airlines':           'SQ',
    'SmartWings':                   'SMART',
    'Southwest Airlines':           'SOUTH',
    'SpiceJet':                     'SPICE',
    'Spirit Airlines':              'SPIRI',
    'SriLankan Airlines':           'SRILA',
    'Sri Lankan Airlines':          'SRILA',
    'Sun Country Airlines':         'SUNCO',
    'Sunwing Airlines':             'SUNWI',
    'Swiss (SWISS)':                'SWISS',
    'SWISS':                        'SWISS',
    'TAP Air Portugal':             'TAPAI',
    'Thai Airways':                 'THAIA',
    'Thai Lion Air':                'THAIL',
    'Transavia':                    'TRANS',
    'Turkish Airlines':             'TUR',
    'Ukraine Intl (UIA)':           'UKRAI',
    'Ukraine International Airlines': 'UKRAI',
    'United Airlines':              'UNI',
    'Ural Airlines':                'URA',
    'Vietnam Airlines':             'VIETN',
    'Virgin Atlantic':              'VIRGI',
    'Virgin Atlantic Airways':      'VIRGI',
    'WestJet':                      'WESTJ',
    'Wizz Air':                     'WIZ',
    // newly added airlines
    'Air Algerie':                  'AIRALG',
    'Air Austral':                  'AIRAUS',
    'Air Cairo':                    'AIRCAI',

    'Air Corsica':                  'AIRCOR',
    'Air Malta':                    'AIRMAL',
    'Air Mauritius':                'AIRMAU',

    'Air Tahiti':                   'AIRTAH',
    'Air Tahiti Nui':               'AIRTAN',

    'Air Vanuatu':                  'AIRVAN',
    'Alitalia':                     'ALITAL',
    'Arkia':                        'ARKIA',
    'Atlantic Airways':             'ATLANT',
    'Aurigny':                      'AURIG',
    'Aurigny Air Services':         'AURIG',
    'Azores Airlines':              'AZORES',
    'Bangkok Airways':              'BANGK',
    'Binter Canarias':              'BINTER',
    'Blue Panorama Airlines':       '',
    'Bulgaria Air':                 'BULGAIR',
    'Cayman Airways':               'CAYMAN',
    'China Airlines':               'CHINAL',
    'China Southern':               'CHINAS',
    'Croatia Airlines':             'CROAT',
    'Czech Airlines':               'CZECHA',
    'Edelweiss Air':                'EDEL',
    'FlyOne':                       'FLYONE',
    'Georgian Airways':             'GEORG',
    'Hainan Airlines':              'HAINAN',
    'Hawaiian Airlines':            'HAWAII',
    'Hong Kong Airlines':           'HONGK',
    'Iran Air':                     'IRANAI',
    'Jet2.com':                     'JET2',
    'Jetstar':                      'JETST',
    'Kuwait Airways':               'KUWAIT',
    'Lao Airlines':                 'LAOA',
    'Loganair':                     'LOGAN',
    'Middle East Airlines':         'MEA',
    'NokAir':                       'NOKAI',
    'Olympic Air':                  'OLYMP',
    'Pakistan International Airlines': 'PIA',
    'Peach':                        'PEACH',
    'REX Regional Express Airlines': 'REX',
    'Royal Brunei Airlines':        'ROYALB',
    'Royal Jordanian Airlines':     'ROYALJ',
    'Saudia Airlines':              'SAUDIA',
    'SunExpress':                   'SUNEXP',
    'TAROM':                        'TAROM',
    'TUIfly':                       'TUIFLY',
    'Turkmenistan Airlines':        'TURKMA',
    'Uzbekistan Airways':           'UZBEK',
    'Virgin Australia':             'VIRAUA',
    'Wideroe':                      'WIDEROE',
    'Xiamen Airlines':              'XIAMEN',
  };

  function findUrl(name: string): string {
    const key = NAME_TO_URL_KEY[name];
    if (!key) return '';
    return urlMap[key] ?? '';
  }

  for (const [airlineName, rows] of mdRows.entries()) {
    // Skip pure header-like rows
    if (!airlineName || airlineName.toLowerCase() === 'airline') continue;

    // Generate a stable ID
    let id = nameToId(airlineName);
    // De-duplicate
    if (seenIds.has(id)) {
      id = id.slice(0, 6) + String(seenIds.size).slice(-2);
    }
    seenIds.add(id);

    // Known metadata
    const meta = KNOWN_IATA[airlineName] ?? null;

    // Find website URL using the name→key lookup table
    const website = findUrl(airlineName);

    // Build baggage per cabin class
    const economy  = buildNullCabin();
    const business = buildNullCabin();
    const first    = buildNullCabin();

    for (const row of rows) {
      const allowance = buildBagAllowance(row);
      const cabin = row.cabinClass === 'first' ? first
                  : row.cabinClass === 'business' ? business
                  : economy;
      if (row.type === 'carryOn'      && !cabin.carryOn)      cabin.carryOn      = allowance;
      if (row.type === 'personalItem' && !cabin.personalItem)  cabin.personalItem = allowance;
      if (row.type === 'checked'      && !cabin.checked)       cabin.checked      = allowance;
    }

    // Determine generosity from economy carry-on weight
    const coWeight = economy.carryOn?.weight.value ?? null;
    const generosity = classifyGenerosity(coWeight);

    const airline: Airline = {
      id,
      name:           airlineName,
      iata:           meta?.iata    ?? '',
      country:        meta?.country ?? '',
      alliance:       meta?.alliance ?? null,
      region:         meta?.region   ?? (rows[0] ? guessRegion(rows) : 'Global'),
      website,
      generosity,
      lastUpdated:    today,
      servesCountries: [],
      baggage: { economy, business, first },
    };

    airlines.push(airline);
  }

  return airlines;
}

function guessRegion(rows: ParsedRow[]): string {
  // The detailed table may have a region in col[1] which we parsed separately
  // We store it indirectly; fall back to 'Global'
  return 'Global';
}

// ─── Serialise to TypeScript ───────────────────────────────────────────────────

function toTs(airlines: Airline[]): string {
  const json = JSON.stringify(airlines, null, 2);

  // Wrap as a TypeScript module
  return `import type { Airline } from '../types';

export const airlines: Airline[] = ${json};
`;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

function main() {
  console.log('📖 Parsing luggage_sizes.md …');
  const mdRows = parseMd(MD_PATH);
  console.log(`   → Found entries for ${mdRows.size} airlines`);

  console.log('🔗 Loading airline-carryon-urls.json …');
  const urlMap: Record<string, string> = JSON.parse(fs.readFileSync(URLS_PATH, 'utf-8'));
  console.log(`   → ${Object.keys(urlMap).length} URL entries`);

  console.log('🛠  Building airline records …');
  const airlines = buildAirlines(mdRows, urlMap);
  console.log(`   → Built ${airlines.length} airline records`);

  console.log(`✍️  Writing to ${OUT_PATH} …`);
  fs.writeFileSync(OUT_PATH, toTs(airlines) + "\r\nexport default airlines;", 'utf-8');

  console.log(`✅ Done! ${airlines.length} airlines written to src/data/airlines.ts`);
  console.log('');
  console.log('Summary by region:');
  const byRegion: Record<string, number> = {};
  for (const a of airlines) {
    byRegion[a.region] = (byRegion[a.region] ?? 0) + 1;
  }
  for (const [region, count] of Object.entries(byRegion).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${region.padEnd(20)} ${count}`);
  }
}

main();

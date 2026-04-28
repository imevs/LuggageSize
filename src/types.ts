// ── Luggage dimension types ──────────────────────────────────────────

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in';
}

export interface Weight {
  value: number | null;
  unit: 'kg' | 'lb';
}

export interface BagAllowance {
  dimensions: Dimensions | null;
  weight: Weight;
  quantity: number;
  freeIncluded: boolean;
}

export interface CabinClassBaggage {
  carryOn: BagAllowance | null;
  personalItem: BagAllowance | null;
  checked: BagAllowance | null;
}

// ── Airline types ────────────────────────────────────────────────────

export type Generosity = 'generous' | 'moderate' | 'strict';

export type CabinClass = 'economy' | 'business' | 'first';

export interface Airline {
  id: string;
  name: string;
  iata: string;
  country: string;
  alliance: string | null;
  region: string;
  website: string;
  baggage: Record<CabinClass, CabinClassBaggage>;
  generosity: Generosity;
  lastUpdated: string;
  servesCountries: string[];
}

// ── Filter types ─────────────────────────────────────────────────────

export type BagCategory = 'carryOn' | 'checked' | 'personalItem';

export type UnitSystem = 'metric' | 'imperial';

export type ThemeMode = 'dark' | 'light';

export type SortOption = 'name' | 'generosity' | 'weight';

// ── App state ────────────────────────────────────────────────────────

export interface AppState {
  airlines: Airline[];
  filteredAirlines: Airline[];
  searchQuery: string;
  activeCategory: BagCategory;
  activeCabinClass: CabinClass;
  unitSystem: UnitSystem;
  theme: ThemeMode;
  userCountry: string | null;
  userCity: string | null;
  sortBy: SortOption;
  comparisonList: string[]; // airline IDs
  selectedAirline: Airline | null;
  showComparison: boolean;
  activeRegions: string[];
  userBag: {
    length: number;
    width: number;
    height: number;
    weight: number;
  } | null;
  showBagModal: boolean;
}


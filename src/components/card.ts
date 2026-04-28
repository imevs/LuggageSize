import type { Airline, BagCategory, UnitSystem, CabinClass } from '../types';
import { formatDimensions, formatWeight } from '../utils/units';
import { checkBagExceeds } from '../utils/baggage';

const GENEROSITY_BADGE: Record<string, string> = {
  generous: '<span class="badge badge--generous">Generous</span>',
  moderate: '<span class="badge badge--moderate">Moderate</span>',
  strict:   '<span class="badge badge--strict">Strict</span>',
};

const ALLIANCE_COLOR: Record<string, string> = {
  oneworld: '#d4a017',
  'Star Alliance': '#5b9bd5',
  SkyTeam: '#c0392b',
};

// Google Flights public airline logo CDN
function logoUrl(iata: string): string {
  return `https://www.gstatic.com/flights/airline_logos/70px/${iata}.png`;
}

export function renderCard(
  airline: Airline,
  category: BagCategory,
  unitSystem: UnitSystem,
  isSelected: boolean,
  inComparison: boolean,
  activeRegions: string[],
  userBag: { length: number; width: number; height: number; weight: number } | null = null,
): string {
  const cabinClass: CabinClass = 'economy';
  const bag = airline.baggage[cabinClass];
  const allowance = category === 'personalItem' ? bag.personalItem : bag[category];
  const allianceColor = airline.alliance ? (ALLIANCE_COLOR[airline.alliance] ?? '#6366f1') : '#6366f1';

  const exceeds = userBag ? checkBagExceeds(userBag, allowance) : false;

  const dimStr = allowance ? formatDimensions(allowance.dimensions, unitSystem) : '—';
  const wtStr = allowance ? formatWeight(allowance.weight, unitSystem) : '—';
  const qty = allowance?.quantity ?? 1;
  const free = allowance?.freeIncluded;

  const initials = airline.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const isRegionActive = activeRegions.includes(airline.region);

  return `
    <article
      class="card ${isSelected ? 'card--selected' : ''} ${inComparison ? 'card--comparing' : ''} ${exceeds ? 'card--exceeds' : ''}"
      data-airline-id="${airline.id}"
      tabindex="0"
      role="button"
      aria-label="View luggage details for ${airline.name}"
      id="card-${airline.id}"
    >
      ${exceeds ? '<div class="card__warning">Exceeds allowance</div>' : ''}
      <div class="card__header">
        <div class="card__logo" style="--accent: ${allianceColor}; background: none; box-shadow: none;" aria-hidden="true">
          <img
            src="${logoUrl(airline.iata)}"
            alt="${airline.name} logo"
            style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px;"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            loading="lazy"
          />
          <div style="display:none; width: 100%; height: 100%; background: linear-gradient(135deg, var(--accent, #6366f1), var(--accent-2, #8b5cf6)); border-radius: 10px; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(99,102,241,0.25);">
            <span class="card__initials">${initials}</span>
            <span class="card__iata">${airline.iata}</span>
          </div>
        </div>
        <div class="card__meta">
          <h2 class="card__name">${airline.name}</h2>
          <button
            class="card__region-tag ${isRegionActive ? 'card__region-tag--active' : ''}"
            data-region="${airline.region}"
            aria-label="Filter by ${airline.region}"
            aria-pressed="${isRegionActive}"
            title="Show all airlines in ${airline.region}"
          >${airline.region}</button>
        </div>
        ${GENEROSITY_BADGE[airline.generosity] ?? ''}
      </div>

      <div class="card__allowance">
        <div class="card__stat">
          <span class="card__stat-icon" aria-hidden="true">📐</span>
          <div class="card__stat-info">
            <span class="card__stat-label">Dimensions</span>
            <span class="card__stat-value">${dimStr}</span>
          </div>
        </div>
        <div class="card__stat">
          <span class="card__stat-icon" aria-hidden="true">⚖️</span>
          <div class="card__stat-info">
            <span class="card__stat-label">Weight</span>
            <span class="card__stat-value">${wtStr}</span>
          </div>
        </div>
        <div class="card__stat">
          <span class="card__stat-icon" aria-hidden="true">🎫</span>
          <div class="card__stat-info">
            <span class="card__stat-label">Quantity</span>
            <span class="card__stat-value">${qty} bag${qty !== 1 ? 's' : ''}</span>
          </div>
        </div>
        <div class="card__stat">
          <span class="card__stat-icon" aria-hidden="true">${free ? '✅' : '💳'}</span>
          <div class="card__stat-info">
            <span class="card__stat-label">Included</span>
            <span class="card__stat-value ${free ? 'card__stat-value--free' : 'card__stat-value--paid'}">${free ? 'Free' : 'Paid add-on'}</span>
          </div>
        </div>
      </div>

      <div class="card__footer">
        ${airline.alliance ? `<span class="card__alliance" style="color: ${allianceColor}">${airline.alliance}</span>` : '<span></span>'}
        <button
          class="card__compare-btn ${inComparison ? 'card__compare-btn--active' : ''}"
          data-compare="${airline.id}"
          aria-label="${inComparison ? 'Remove from' : 'Add to'} comparison"
          aria-pressed="${inComparison}"
          id="compare-btn-${airline.id}"
        >
          ${inComparison ? '✓ Comparing' : '+ Compare'}
        </button>
      </div>
    </article>
  `;
}

export function renderGrid(
  airlines: Airline[],
  category: BagCategory,
  unitSystem: UnitSystem,
  selectedId: string | null,
  comparisonList: string[],
  activeRegions: string[],
  userBag: { length: number; width: number; height: number; weight: number } | null = null,
): string {
  if (airlines.length === 0) {
    return `
      <div class="empty-state" role="status" aria-live="polite">
        <span class="empty-state__icon" aria-hidden="true">✈️</span>
        <p class="empty-state__text">No airlines found matching your search.</p>
        <p class="empty-state__hint">Try a different airline name, IATA code, region, or country.</p>
      </div>
    `;
  }

  return `
    <div class="grid" role="list" aria-label="Airline luggage allowances">
      ${airlines.map(a => renderCard(a, category, unitSystem, a.id === selectedId, comparisonList.includes(a.id), activeRegions, userBag)).join('')}
    </div>
  `;
}

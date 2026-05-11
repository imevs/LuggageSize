import type { Airline, BagCategory, UnitSystem, CabinClass } from '../types';
import { convertDimensions, formatWeight, convertWeight } from '../utils/units';
import { checkBagExceeds } from '../utils/baggage';

const ALLIANCE_COLOR: Record<string, string> = {
  oneworld: '#d4a017',
  'Star Alliance': '#5b9bd5',
  SkyTeam: '#c0392b',
};

function logoUrl(iata: string): string {
  return `https://www.gstatic.com/flights/airline_logos/70px/${iata}.png`;
}

export function renderTable(
  airlines: Airline[],
  category: BagCategory,
  unitSystem: UnitSystem,
  selectedId: string | null,
  comparisonList: string[],
  _activeRegions: string[],
  userBag: { length: number; width: number; height: number; weight: number } | null = null,
  favoritesList: string[] = [],
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
    <div class="table-container" role="region" aria-label="Airlines Table View" tabindex="0">
      <table class="data-table">
        <thead>
          <tr>
            <th scope="col" class="th-airline">Airline</th>
            <th scope="col" class="th-dims">Dimensions</th>
            <th scope="col" class="th-weight">Weight</th>
            <th scope="col" class="th-fee">Fee</th>
            <th scope="col" class="th-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${airlines.map(a => renderTableRow(
            a, category, unitSystem,
            a.id === selectedId,
            comparisonList.includes(a.id),
            userBag,
            favoritesList.includes(a.id)
          )).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderTableRow(
  airline: Airline,
  category: BagCategory,
  unitSystem: UnitSystem,
  isSelected: boolean,
  _inComparison: boolean,
  userBag: { length: number; width: number; height: number; weight: number } | null = null,
  isFavorite: boolean = false,
): string {
  const cabinClass: CabinClass = 'economy';
  const bag = airline.baggage[cabinClass];
  const allowance = category === 'personalItem' ? bag.personalItem : bag[category];
  const allianceColor = airline.alliance ? (ALLIANCE_COLOR[airline.alliance] ?? '#6366f1') : '#6366f1';

  const exceedsBag = userBag ? checkBagExceeds(userBag, allowance) : false;
  
  let dimsHtml = '—';
  if (allowance?.dimensions) {
    const unit = unitSystem === 'metric' ? 'cm' : 'in';
    const cd = convertDimensions(allowance.dimensions, unit);
    const aD = [cd.length, cd.width, cd.height].sort((a, b) => b - a) as [number, number, number];
    
    if (userBag && exceedsBag) {
      const uD = [userBag.length, userBag.width, userBag.height].sort((a, b) => b - a) as [number, number, number];
      const ex0 = aD[0] > 0 && uD[0] > aD[0];
      const ex1 = aD[1] > 0 && uD[1] > aD[1];
      const ex2 = aD[2] > 0 && uD[2] > aD[2];
      
      const formatDim = (val: number, isEx: boolean) => isEx ? `<span class="warning-text">${val}</span>` : `${val}`;
      dimsHtml = `${formatDim(aD[0], ex0)} × ${formatDim(aD[1], ex1)} × ${formatDim(aD[2], ex2)} ${unit}`;
      if (ex0 || ex1 || ex2) {
        dimsHtml = `⚠️ ${dimsHtml}`;
      }
    } else {
      dimsHtml = `${aD[0]} × ${aD[1]} × ${aD[2]} ${unit}`;
    }
  }

  const wtStr = allowance ? formatWeight(allowance.weight, unitSystem) : '—';
  let wtHtml = wtStr;
  if (userBag && allowance?.weight.value) {
    // We assume userBag was entered in the currently active unitSystem
    const targetUnit = unitSystem === 'metric' ? 'kg' : 'lb';
    const wConv = convertWeight(allowance.weight, targetUnit);
    if (wConv.value !== null && userBag.weight > wConv.value) {
      wtHtml = `<span class="warning-text">⚠️ ${wtStr}</span>`;
    }
  }
  const free = allowance?.freeIncluded;

  const initials = airline.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return `
    <tr 
      class="data-row ${isSelected ? 'data-row--selected' : ''} ${exceedsBag ? 'data-row--exceeds' : ''}" 
      data-airline-id="${airline.id}"
      id="row-${airline.id}"
    >
      <td class="td-airline">
        <div class="td-airline-inner">
          <div class="row-logo" style="--accent: ${allianceColor};" aria-hidden="true">
            <img
              src="${logoUrl(airline.iata)}"
              alt="${airline.name} logo"
              loading="lazy"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            />
            <div class="row-initials" style="display:none;">
              <span>${initials}</span>
            </div>
          </div>
          <div class="row-meta">
            <span class="row-name">${airline.name}</span>
            <span class="row-iata">${airline.iata}</span>
            ${isFavorite ? '<span class="row-fav-icon" title="Favorite">⭐</span>' : ''}
          </div>
        </div>
      </td>
      <td class="td-dims">
        ${dimsHtml}
      </td>
      <td class="td-weight">
        ${wtHtml}
      </td>
      <td class="td-fee">
        <span class="badge ${free ? 'badge--generous' : 'badge--strict'}">${free ? 'Free' : 'Paid'}</span>
      </td>
      <td class="td-actions">
        <button class="row-btn view-details-btn" aria-label="View details for ${airline.name}">Details</button>
      </td>
    </tr>
  `;
}

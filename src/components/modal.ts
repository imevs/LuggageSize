import type { Airline, UnitSystem, CabinClass, BagCategory, CabinClassBaggage } from '../types';
import { formatDimensions, formatWeight } from '../utils/units';

const CABIN_ORDER: CabinClass[] = ['economy', 'business', 'first'];
const CABIN_LABELS: Record<CabinClass, string> = {
  economy: 'Economy',
  business: 'Business',
  first: 'First Class',
};
const CAT_LABELS: Record<BagCategory, string> = {
  carryOn: 'Carry-on',
  checked: 'Checked Bag',
  personalItem: 'Personal Item',
};

function renderBagRow(
  label: string,
  bag: CabinClassBaggage['carryOn'] | CabinClassBaggage['personalItem'],
  unitSystem: UnitSystem,
): string {
  if (!bag) {
    return `<div class="modal__bag-row modal__bag-row--none">
      <span class="modal__bag-label">${label}</span>
      <span class="modal__bag-na">Not available</span>
    </div>`;
  }
  const dim = formatDimensions(bag.dimensions, unitSystem);
  const wt = formatWeight(bag.weight, unitSystem);
  const freeTag = bag.freeIncluded
    ? '<span class="tag tag--free">Free ✓</span>'
    : '<span class="tag tag--paid">Paid 💳</span>';

  return `
    <div class="modal__bag-row">
      <span class="modal__bag-label">${label}</span>
      <div class="modal__bag-stats">
        <span class="modal__bag-dim" title="Dimensions (L×W×H)">${dim}</span>
        <span class="modal__bag-wt" title="Max weight">${wt}</span>
        <span class="modal__bag-qty" title="Quantity">${bag.quantity}×</span>
        ${freeTag}
      </div>
    </div>
  `;
}

export function renderModal(airline: Airline, unitSystem: UnitSystem): string {
  return `
    <div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true" aria-label="${airline.name} luggage policy">
      <div class="modal">
        <button class="modal__close" id="modal-close" aria-label="Close">✕</button>

        <div class="modal__header">
          <div class="modal__logo" aria-hidden="true">
            ${airline.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase()}
          </div>
          <div>
            <h2 class="modal__airline-name">${airline.name}</h2>
            <p class="modal__meta">
              ${airline.iata} · ${airline.region}
              ${airline.alliance ? `· <span class="modal__alliance">${airline.alliance}</span>` : ''}
            </p>
          </div>
        </div>

        <div class="modal__tabs" role="tablist" aria-label="Cabin class">
          ${CABIN_ORDER.map((cls, i) => `
            <button
              class="modal__tab ${i === 0 ? 'modal__tab--active' : ''}"
              data-cabin="${cls}"
              role="tab"
              aria-selected="${i === 0}"
              id="tab-${cls}"
              aria-controls="tabpanel-${cls}"
            >${CABIN_LABELS[cls]}</button>
          `).join('')}
        </div>

        ${CABIN_ORDER.map((cls, i) => {
          const bag = airline.baggage[cls];
          return `
            <div
              class="modal__tabpanel ${i === 0 ? 'modal__tabpanel--active' : ''}"
              id="tabpanel-${cls}"
              role="tabpanel"
              aria-labelledby="tab-${cls}"
              ${i !== 0 ? 'hidden' : ''}
            >
              ${(['carryOn', 'personalItem', 'checked'] as const).map(cat =>
                renderBagRow(CAT_LABELS[cat], cat === 'personalItem' ? bag.personalItem : bag[cat], unitSystem)
              ).join('')}
            </div>
          `;
        }).join('')}

        <div class="modal__footer">
          <a href="${airline.website}" target="_blank" rel="noopener noreferrer" class="modal__link">
            Official baggage policy ↗
          </a>
          <span class="modal__updated">Updated: ${airline.lastUpdated}</span>
        </div>
      </div>
    </div>
  `;
}

import type { Airline, UnitSystem, BagCategory, CabinClass, CabinClassBaggage } from '../types';
import { formatDimensions, formatWeight } from '../utils/units';

const CABIN: CabinClass = 'economy';

function cellVal(
  bag: CabinClassBaggage['carryOn'] | CabinClassBaggage['personalItem'],
  unitSystem: UnitSystem,
): { dim: string; wt: string; qty: string; free: boolean } {
  if (!bag) return { dim: '—', wt: '—', qty: '—', free: false };
  return {
    dim: formatDimensions(bag.dimensions, unitSystem),
    wt: formatWeight(bag.weight, unitSystem),
    qty: `${bag.quantity}×`,
    free: bag.freeIncluded,
  };
}

export function renderComparison(
  airlines: Airline[],
  category: BagCategory,
  unitSystem: UnitSystem,
): string {
  if (airlines.length === 0) return '';

  const rows = airlines.map(a => {
    const bag = a.baggage[CABIN];
    const allowance = category === 'personalItem' ? bag.personalItem : bag[category];
    return cellVal(allowance, unitSystem);
  });

  return `
    <section class="comparison" aria-label="Airline comparison">
      <div class="comparison__header">
        <h2 class="comparison__title">Comparison</h2>
        <button id="close-compare" class="comparison__close" aria-label="Close comparison">✕ Close</button>
      </div>

      <div class="comparison__table-wrap">
        <table class="comparison__table" role="table" aria-label="Compare airline luggage">
          <thead>
            <tr>
              <th class="comparison__th" scope="col">Airline</th>
              ${airlines.map(a => `<th class="comparison__th" scope="col" id="col-${a.id}">
                <div class="comparison__airline-head">
                  <span class="comparison__iata">${a.iata}</span>
                  <span class="comparison__name">${a.name}</span>
                  <button class="comparison__remove" data-remove="${a.id}" aria-label="Remove ${a.name} from comparison">✕</button>
                </div>
              </th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="comparison__label">Dimensions</td>
              ${rows.map((r, i) => `<td class="comparison__cell" headers="col-${airlines[i]!.id}">${r.dim}</td>`).join('')}
            </tr>
            <tr>
              <td class="comparison__label">Weight</td>
              ${rows.map((r, i) => `<td class="comparison__cell" headers="col-${airlines[i]!.id}">${r.wt}</td>`).join('')}
            </tr>
            <tr>
              <td class="comparison__label">Quantity</td>
              ${rows.map((r, i) => `<td class="comparison__cell" headers="col-${airlines[i]!.id}">${r.qty}</td>`).join('')}
            </tr>
            <tr>
              <td class="comparison__label">Included</td>
              ${rows.map((r, i) => `<td class="comparison__cell ${r.free ? 'comparison__cell--free' : 'comparison__cell--paid'}" headers="col-${airlines[i]!.id}">
                ${r.free ? '✓ Free' : '💳 Paid'}
              </td>`).join('')}
            </tr>
            <tr>
              <td class="comparison__label">Generosity</td>
              ${airlines.map(a => `<td class="comparison__cell comparison__cell--${a.generosity}" headers="col-${a.id}">${a.generosity}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

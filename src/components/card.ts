import type { Airline, BagCategory, UnitSystem, CabinClass, Dimensions } from '../types';
import { convertDimensions, formatWeight } from '../utils/units';
import { checkBagExceeds } from '../utils/baggage';

const GENEROSITY_BADGE: Record<string, string> = {
  generous: '<span class="badge badge--generous">Generous</span>',
  moderate: '<span class="badge badge--moderate">Moderate</span>',
  strict: '<span class="badge badge--strict">Strict</span>',
};

const ALLIANCE_COLOR: Record<string, string> = {
  oneworld: '#d4a017',
  'Star Alliance': '#5b9bd5',
  SkyTeam: '#c0392b',
};

function logoUrl(iata: string): string {
  return `https://www.gstatic.com/flights/airline_logos/70px/${iata}.png`;
}

let _svgN = 0;

function renderLuggageSvg(
  dims: Dimensions | null,
  system: UnitSystem,
  exceeds: { bag: boolean; h: boolean; w: boolean; d: boolean },
): string {
  const id = `s${++_svgN}`;
  const VW = 280, VH = 215;

  // colour palette (always use indigo for the bag shell so red arrows pop)
  const P = '#6366f1';
  const P2 = '#4f46e5';
  const P3 = '#3730a3';
  const fa = 0.18;  // front alpha
  const ta = 0.10;  // top alpha
  const sa = 0.13;  // side alpha

  // dimensions
  let hDim = 55, wDim = 40, dDim = 20;
  let hLbl = '—', wLbl = '—', dLbl = '—';
  if (dims) {
    const unit = system === 'metric' ? 'cm' : 'in';
    const cd = convertDimensions(dims, unit);
    const s = [cd.length, cd.width, cd.height].sort((a, b) => b - a);
    [hDim, wDim, dDim] = [s[0]!, s[1]!, s[2]!];
    hLbl = `${hDim} ${unit}`;
    wLbl = `${wDim} ${unit}`;
    dLbl = `${dDim} ${unit}`;
  }

  // cabinet oblique projection  30° / 50%
  const CA = Math.cos(Math.PI / 6), SA = Math.sin(Math.PI / 6);
  const ML = 50, MB = 40, MT = 32, MR = 24;
  const aW = VW - ML - MR, aH = VH - MT - MB;
  const rH = hDim / wDim, rD = dDim / wDim;
  let pW = Math.min(aW / (1 + rD * 0.5 * CA), (aH - 22) / (rH + rD * 0.5 * SA));
  pW = Math.max(52, Math.min(aW * 0.64, pW));
  const pH = pW * rH;
  const pD = pW * rD * 0.5;
  const ox = pD * CA, oy = pD * SA;
  const x0 = ML + (aW - pW - ox) / 2;
  const y0 = MT + aH;

  type P2D = [number, number];
  const f = (n: number) => n.toFixed(1);
  const fbl: P2D = [x0, y0], fbr: P2D = [x0 + pW, y0], ftr: P2D = [x0 + pW, y0 - pH], ftl: P2D = [x0, y0 - pH];
  const bbl: P2D = [x0 + ox, y0 - oy], bbr: P2D = [x0 + pW + ox, y0 - oy];
  const btr: P2D = [x0 + pW + ox, y0 - pH - oy], btl: P2D = [x0 + ox, y0 - pH - oy];
  const pp = (...cs: P2D[]) => cs.map(c => `${f(c[0])},${f(c[1])}`).join(' ');

  // SVG defs – gradients
  const defs = `<defs>
    <linearGradient id="${id}f" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${P}" stop-opacity="${fa + 0.06}"/>
      <stop offset="100%" stop-color="${P2}" stop-opacity="${fa + 0.04}"/>
    </linearGradient>
    <linearGradient id="${id}t" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="${P}" stop-opacity="${ta}"/>
      <stop offset="100%" stop-color="${P}" stop-opacity="${ta - 0.02}"/>
    </linearGradient>
    <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${P2}" stop-opacity="${sa + 0.04}"/>
      <stop offset="100%" stop-color="${P3}" stop-opacity="${sa + 0.06}"/>
    </linearGradient>
    <linearGradient id="${id}r" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${P}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${P2}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>`;

  // faces
  const faceSide = `<polygon points="${pp(fbr, bbr, btr, ftr)}" fill="url(#${id}s)" stroke="${P}" stroke-width="1.6" stroke-linejoin="round"/>`;
  const faceTop = `<polygon points="${pp(ftl, ftr, btr, btl)}" fill="url(#${id}t)" stroke="${P}" stroke-width="1.6" stroke-linejoin="round"/>`;
  const faceFront = `<polygon points="${pp(fbl, fbr, ftr, ftl)}" fill="url(#${id}f)" stroke="${P}" stroke-width="1.7" stroke-linejoin="round"/>`;
  const backEdges = `
    <line x1="${f(bbl[0])}" y1="${f(bbl[1])}" x2="${f(bbr[0])}" y2="${f(bbr[1])}" stroke="${P}" stroke-width="0.7" stroke-dasharray="3,2" stroke-opacity="0.35"/>
    <line x1="${f(bbl[0])}" y1="${f(bbl[1])}" x2="${f(btl[0])}" y2="${f(btl[1])}" stroke="${P}" stroke-width="0.7" stroke-dasharray="3,2" stroke-opacity="0.35"/>
    <line x1="${f(bbl[0])}" y1="${f(bbl[1])}" x2="${f(fbl[0])}" y2="${f(fbl[1])}" stroke="${P}" stroke-width="0.7" stroke-dasharray="3,2" stroke-opacity="0.35"/>`;

  // ── front face details ──────────────────────────────────────────────
  const ins = Math.min(7, pW * 0.065);

  // horizontal panel ribs (3 lines)
  let ribs = '';
  for (let i = 1; i <= 3; i++) {
    const ry = y0 - pH * (i / 4);
    ribs += `<line x1="${f(x0 + ins)}" y1="${f(ry)}" x2="${f(x0 + pW - ins)}" y2="${f(ry)}" stroke="${P}" stroke-width="0.9" stroke-opacity="0.22"/>`;
  }

  // same on side face
  let sideRibs = '';
  for (let i = 1; i <= 2; i++) {
    const h = i / 3;
    sideRibs += `<line x1="${f(fbr[0])}" y1="${f(fbr[1] - pH * h)}" x2="${f(bbr[0])}" y2="${f(bbr[1] - pH * h)}" stroke="${P}" stroke-width="0.7" stroke-opacity="0.18"/>`;
  }

  // main compartment border (perimeter zipper)
  const cIns = ins + 1;
  const zipTop = y0 - pH + cIns, zipBot = y0 - pH * 0.38;
  const mainZipBorder = `<rect x="${f(x0 + cIns)}" y="${f(zipTop)}" width="${f(pW - cIns * 2)}" height="${f(zipBot - zipTop)}"
    rx="3" fill="none" stroke="${P}" stroke-width="1.1" stroke-opacity="0.55" stroke-dasharray="2,1.5"/>`;

  // D-ring zipper pull on main compartment (right side, mid-height)
  const dzX = x0 + pW - cIns - 3, dzY = y0 - pH * 0.62;
  const mainZipPull = `
    <circle cx="${f(dzX)}" cy="${f(dzY)}" r="3.2" fill="none" stroke="${P2}" stroke-width="1.4"/>
    <line x1="${f(dzX)}" y1="${f(dzY + 3.2)}" x2="${f(dzX)}" y2="${f(dzY + 7)}" stroke="${P2}" stroke-width="1.3"/>`;

  // front pocket (bottom ~32% of face)
  const pocH = pH * 0.30, pocIns = ins + 2;
  const pocY = y0 - pocH - ins;
  const frontPocket = `<rect x="${f(x0 + pocIns)}" y="${f(pocY)}" width="${f(pW - pocIns * 2)}" height="${f(pocH)}"
    rx="4" fill="none" stroke="${P}" stroke-width="1.2" stroke-opacity="0.6"/>`;

  // pocket zipper pull (top-center of pocket)
  const pzX = x0 + pW * 0.5;
  const pocketPull = `
    <circle cx="${f(pzX)}" cy="${f(pocY)}" r="2.6" fill="none" stroke="${P2}" stroke-width="1.2"/>
    <line x1="${f(pzX)}" y1="${f(pocY - 2.6)}" x2="${f(pzX)}" y2="${f(pocY - 6)}" stroke="${P2}" stroke-width="1.1"/>`;

  // TSA combination lock (above main zipper, centred)
  const lkW = Math.max(14, pW * 0.15), lkH = Math.max(9, pH * 0.075);
  const lkX = x0 + (pW - lkW) / 2, lkY = zipTop - lkH - 3;
  const tsaLock = `
    <rect x="${f(lkX)}" y="${f(lkY)}" width="${f(lkW)}" height="${f(lkH)}" rx="2"
      fill="${P}" fill-opacity="0.2" stroke="${P2}" stroke-width="0.9"/>
    <circle cx="${f(lkX + lkW * 0.28)}" cy="${f(lkY + lkH * 0.5)}" r="1.6" fill="${P2}" fill-opacity="0.8"/>
    <circle cx="${f(lkX + lkW * 0.50)}" cy="${f(lkY + lkH * 0.5)}" r="1.6" fill="${P2}" fill-opacity="0.8"/>
    <circle cx="${f(lkX + lkW * 0.72)}" cy="${f(lkY + lkH * 0.5)}" r="1.6" fill="${P2}" fill-opacity="0.8"/>`;

  // corner bumpers (4 molded corner guards at front-face corners)
  const bgSize = Math.max(10, pW * 0.08);
  const bgThick = Math.max(3.5, pW * 0.035);
  const bgRad = 5;
  function cornerGuard(cx: number, cy: number, sx: number, sy: number) {
    return `<path d="M${f(cx)},${f(cy + sy * bgSize)} L${f(cx)},${f(cy + sy * bgRad)} Q${f(cx)},${f(cy)} ${f(cx + sx * bgRad)},${f(cy)} L${f(cx + sx * bgSize)},${f(cy)} L${f(cx + sx * bgSize)},${f(cy + sy * bgThick)} L${f(cx + sx * (bgThick + 2))},${f(cy + sy * bgThick)} Q${f(cx + sx * bgThick)},${f(cy + sy * bgThick)} ${f(cx + sx * bgThick)},${f(cy + sy * (bgThick + 2))} L${f(cx + sx * bgThick)},${f(cy + sy * bgSize)} Z" fill="${P}" fill-opacity="0.22" stroke="${P}" stroke-width="1.2" stroke-linejoin="round"/>`;
  }
  const bumpers =
    cornerGuard(ftl[0], ftl[1], 1, 1) +
    cornerGuard(ftr[0], ftr[1], -1, 1) +
    cornerGuard(fbl[0], fbl[1], 1, -1) +
    cornerGuard(fbr[0], fbr[1], -1, -1);

  // ── telescopic handle ───────────────────────────────────────────────
  const rW = Math.max(5, pW * 0.058);
  const r1X = x0 + pW * 0.32 - rW / 2;
  const r2X = x0 + pW * 0.68 - rW / 2;
  const rTop = y0 - pH - 24, rBot = y0 - pH;
  const rodH = rBot - rTop;
  const handle = `
    <rect x="${f(r1X)}" y="${f(rTop)}" width="${f(rW)}" height="${f(rodH)}" rx="2" fill="url(#${id}r)" stroke="${P}" stroke-width="0.8"/>
    <rect x="${f(r2X)}" y="${f(rTop)}" width="${f(rW)}" height="${f(rodH)}" rx="2" fill="url(#${id}r)" stroke="${P}" stroke-width="0.8"/>
    <circle cx="${f(r1X + rW / 2)}" cy="${f(rBot - 7)}" r="2.2" fill="${P2}" fill-opacity="0.9"/>
    <circle cx="${f(r2X + rW / 2)}" cy="${f(rBot - 7)}" r="2.2" fill="${P2}" fill-opacity="0.9"/>
    <rect x="${f(r1X)}" y="${f(rTop)}" width="${f(r2X + rW - r1X)}" height="${f(Math.max(10, pH * 0.09))}" rx="${f(Math.max(10, pH * 0.09) / 2)}" fill="${P}" fill-opacity="0.72" stroke="${P}" stroke-width="1"/>
    <rect x="${f(r1X + (r2X - r1X) * 0.2)}" y="${f(rTop + 2)}" width="${f((r2X - r1X) * 0.6 + rW)}" height="${f(Math.max(10, pH * 0.09) - 4)}" rx="${f((Math.max(10, pH * 0.09) - 4) / 2)}" fill="${P3}" fill-opacity="0.45"/>`;

  // top carry handle (small arch on top face front edge)
  const chW = pW * 0.20, chX = x0 + pW / 2 - chW / 2, chY = y0 - pH;
  const carryHandle = `<path d="M${f(chX)},${f(chY)} Q${f(chX + chW / 2)},${f(chY - 9)} ${f(chX + chW)},${f(chY)}"
    fill="none" stroke="${P2}" stroke-width="2.2" stroke-linecap="round"/>`;

  // ── wheels ──────────────────────────────────────────────────────────
  const wR = Math.max(6, pW * 0.072);
  const w1X = x0 + pW * 0.2, w2X = x0 + pW * 0.8, wY = y0 + wR * 0.42;
  const wheels = `
    <ellipse cx="${f(w1X)}" cy="${f(wY)}" rx="${f(wR)}" ry="${f(wR * 0.52)}" fill="${P}" fill-opacity="0.22" stroke="${P}" stroke-width="1.3"/>
    <ellipse cx="${f(w1X)}" cy="${f(wY)}" rx="${f(wR * 0.48)}" ry="${f(wR * 0.25)}" fill="${P2}" fill-opacity="0.55"/>
    <ellipse cx="${f(w2X)}" cy="${f(wY)}" rx="${f(wR)}" ry="${f(wR * 0.52)}" fill="${P}" fill-opacity="0.22" stroke="${P}" stroke-width="1.3"/>
    <ellipse cx="${f(w2X)}" cy="${f(wY)}" rx="${f(wR * 0.48)}" ry="${f(wR * 0.25)}" fill="${P2}" fill-opacity="0.55"/>
    <line x1="${f(w1X + wR)}" y1="${f(wY)}" x2="${f(w2X - wR)}" y2="${f(wY)}" stroke="${P}" stroke-width="1" stroke-opacity="0.3"/>`;

  // ── dimension arrows ─────────────────────────────────────────────────
  function arr(x1: number, y1: number, x2: number, y2: number, lbl: string, lx: number, ly: number, color: string, anc = 'middle'): string {
    const S = 5, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const ux = dx / L, uy = dy / L, px = -uy * S * 0.5, py = ux * S * 0.5;
    const tip = (ax: number, ay: number, sx: number, sy: number) =>
      `M${f(ax)},${f(ay)} L${f(ax + sx * S + px)},${f(ay + sy * S + py)} M${f(ax)},${f(ay)} L${f(ax + sx * S - px)},${f(ay + sy * S - py)}`;
    const isEx = color === '#ef4444';
    return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${color}" stroke-width="${isEx ? 2 : 1}" stroke-dasharray="3,2.5"/>
      <path d="${tip(x1, y1, ux, uy)} ${tip(x2, y2, -ux, -uy)}" stroke="${color}" stroke-width="${isEx ? 2.5 : 1.4}" fill="none" stroke-linecap="round"/>
      <text x="${f(lx)}" y="${f(ly)}" text-anchor="${anc}" fill="${color}" font-size="${isEx ? 10 : 8.5}" font-weight="${isEx ? 800 : 700}" font-family="Inter,system-ui,sans-serif">${lbl}</text>`;
  }

  const hc = exceeds.h ? '#ef4444' : P;
  const wc = exceeds.w ? '#ef4444' : P;
  const dc = exceeds.d ? '#ef4444' : P;

  const hArr = arr(x0 - 10, y0, x0 - 10, y0 - pH, hLbl, x0 - 12, y0 - pH / 2 + 3, hc, 'end');
  const wArr = arr(x0, y0 + 12, x0 + pW, y0 + 12, wLbl, x0 + pW / 2, y0 + 24, wc, 'middle');
  const dArr = arr(fbr[0] + 6, fbr[1] + 10, bbr[0] + 6, bbr[1] + 10, dLbl, fbr[0] + ox / 2 + 12, fbr[1] - oy / 2 + 24, dc, 'middle');

  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" class="luggage-svg" aria-hidden="true">
  ${defs}
  ${backEdges}
  ${faceSide}${sideRibs}
  ${faceTop}
  ${faceFront}
  ${ribs}${mainZipBorder}${frontPocket}${bumpers}
  ${mainZipPull}${pocketPull}${tsaLock}
  ${carryHandle}${wheels}${handle}
  ${hArr}${wArr}${dArr}
</svg>`;
}

export function renderGrid(
  airlines: Airline[],
  category: BagCategory,
  unitSystem: UnitSystem,
  selectedId: string | null,
  comparisonList: string[],
  activeRegions: string[],
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
    <div class="grid" role="list" aria-label="Airline luggage allowances">
      ${airlines.map(a => renderCard(
    a, category, unitSystem,
    a.id === selectedId,
    comparisonList.includes(a.id),
    activeRegions,
    userBag,
    favoritesList.includes(a.id),
  )).join('')}
    </div>
  `;
}

export function renderCard(
  airline: Airline,
  category: BagCategory,
  unitSystem: UnitSystem,
  isSelected: boolean,
  inComparison: boolean,
  activeRegions: string[],
  userBag: { length: number; width: number; height: number; weight: number } | null = null,
  isFavorite: boolean = false,
): string {
  const cabinClass: CabinClass = 'economy';
  const bag = airline.baggage[cabinClass];
  const allowance = category === 'personalItem' ? bag.personalItem : bag[category];
  const allianceColor = airline.alliance ? (ALLIANCE_COLOR[airline.alliance] ?? '#6366f1') : '#6366f1';

  const exceedsBag = userBag ? checkBagExceeds(userBag, allowance) : false;
  let exH = false, exW = false, exD = false, exWt = false;

  if (userBag && allowance && allowance.dimensions) {
    const uD = [userBag.length, userBag.width, userBag.height].sort((a, b) => b - a) as [number, number, number];
    const aD = [allowance.dimensions.length, allowance.dimensions.width, allowance.dimensions.height].sort((a, b) => b - a) as [number, number, number];
    exH = aD[0] > 0 && uD[0] > aD[0];
    exW = aD[1] > 0 && uD[1] > aD[1];
    exD = aD[2] > 0 && uD[2] > aD[2];
  }
  if (userBag && allowance && allowance.weight.value !== null) {
    exWt = userBag.weight > allowance.weight.value;
  }
  const exceedsDims = { bag: exceedsBag, h: exH, w: exW, d: exD };

  const wtStr = allowance ? formatWeight(allowance.weight, unitSystem) : '—';
  const qty = allowance?.quantity ?? 1;
  const free = allowance?.freeIncluded;

  const initials = airline.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const isRegionActive = activeRegions.includes(airline.region);

  const svg = renderLuggageSvg(allowance?.dimensions ?? null, unitSystem, exceedsDims);

  return `
    <article
      class="card ${isSelected ? 'card--selected' : ''} ${inComparison ? 'card--comparing' : ''} ${exceedsBag ? 'card--exceeds' : ''}"
      data-airline-id="${airline.id}"
      tabindex="0"
      role="button"
      aria-label="View luggage details for ${airline.name}"
      id="card-${airline.id}"
    >
      ${exceedsBag ? '<div class="card__warning">Exceeds allowance</div>' : ''}

      <div class="card__header">
        <div class="card__logo" style="--accent: ${allianceColor}; background: none; box-shadow: none;" aria-hidden="true">
          <img
            src="${logoUrl(airline.iata)}"
            alt="${airline.name} logo"
            style="width:100%;height:100%;object-fit:contain;border-radius:10px;"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            loading="lazy"
          />
          <div style="display:none;width:100%;height:100%;background:linear-gradient(135deg,var(--accent,#6366f1),var(--accent-2,#8b5cf6));border-radius:10px;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(99,102,241,0.25);">
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
        <button 
          class="card__favorite-btn ${isFavorite ? 'card__favorite-btn--active' : ''}" 
          data-airline-id="${airline.id}" 
          aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
          title="Favorite this airline"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="${isFavorite ? 'currentColor' : 'none'}" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>

      <div class="card__luggage-visual">
        ${svg}
      </div>

      <div class="card__bag-info">
        <div class="card__bag-stat">
          <span class="card__bag-icon">⚖️</span>
          <span class="card__bag-label">Weight</span>
          <span class="card__bag-value" style="${exWt ? 'color: #ef4444; font-weight: 800;' : ''}">${wtStr}</span>
        </div>
        <div class="card__bag-stat">
          <span class="card__bag-icon">🎫</span>
          <span class="card__bag-label">Qty</span>
          <span class="card__bag-value">${qty} bag${qty !== 1 ? 's' : ''}</span>
        </div>
        <div class="card__bag-stat">
          <span class="card__bag-icon">${free ? '✅' : '💳'}</span>
          <span class="card__bag-label">Fee</span>
          <span class="card__bag-value ${free ? 'card__bag-value--free' : 'card__bag-value--paid'}">${free ? 'Free' : 'Paid'}</span>
        </div>
      </div>

      <div class="card__footer">
        ${airline.alliance ? `<span class="card__alliance" style="color:${allianceColor}">${airline.alliance}</span>` : '<span></span>'}
        <button
          class="card__compare-btn ${inComparison ? 'card__compare-btn--active' : ''}"
          data-compare="${airline.id}"
          aria-label="${inComparison ? 'Remove from' : 'Add to'} comparison"
          aria-pressed="${inComparison}"
          id="compare-btn-${airline.id}"
        >${inComparison ? '✓ Comparing' : '+ Compare'}</button>
      </div>
    </article>
  `;
}


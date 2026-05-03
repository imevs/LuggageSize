import type { AppState, BagCategory, SortOption } from '../types';
import { getRegions } from '../utils/search';

const CATEGORIES: { id: BagCategory; label: string; icon: string }[] = [
  { id: 'carryOn', label: 'Carry-on', icon: '🎒' },
  { id: 'checked', label: 'Checked', icon: '🧳' },
  { id: 'personalItem', label: 'Personal Item', icon: '👜' },
];

const SORTS: { id: SortOption; label: string }[] = [
  { id: 'generosity', label: 'Generosity' },
  { id: 'name', label: 'Name' },
  { id: 'weight', label: 'Weight limit' },
];

export function renderSearch(state: AppState): string {
  const regions = getRegions(state.airlines);
  return `
    <section class="search-section" aria-label="Search and filter airlines">
      <div class="search-bar-wrap">
        <label for="search-input" class="sr-only">Search airlines</label>
        <div class="search-bar">
          <span class="search-bar__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </span>
          <input
            id="search-input"
            class="search-bar__input"
            type="search"
            placeholder="Search airlines by name, IATA code, country…"
            value="${escapeHtml(state.searchQuery)}"
            autocomplete="off"
            spellcheck="false"
            aria-label="Search airlines"
          />
          ${state.searchQuery ? `<button class="search-bar__clear" id="search-clear" aria-label="Clear search">✕</button>` : ''}
        </div>
      </div>

      <div class="filters-row">
        <div class="filter-chips" role="group" aria-label="Bag category filter">
          ${CATEGORIES.map(cat => `
            <button
              class="chip ${state.activeCategory === cat.id ? 'chip--active' : ''}"
              data-category="${cat.id}"
              aria-pressed="${state.activeCategory === cat.id}"
              id="chip-${cat.id}"
            >
              <span class="chip__icon" aria-hidden="true">${cat.icon}</span>
              ${cat.label}
            </button>
          `).join('')}
          ${state.activeRegions.length > 0 ? `
            <div class="chip__divider" aria-hidden="true"></div>
            ${state.activeRegions.map(r => `
              <button class="chip chip--region" data-clear-region="${r}" aria-label="Clear ${r} filter">
                <span class="chip__icon" aria-hidden="true">🌍</span>
                ${r}
                <span class="chip__close" aria-hidden="true">✕</span>
              </button>
            `).join('')}
          ` : ''}
        </div>

        <div class="sort-controls" role="group" aria-label="Sort options">
          <label for="sort-select" class="sort-label">Sort by:</label>
          <select id="sort-select" class="sort-select" aria-label="Sort airlines by">
            ${SORTS.map(s => `<option value="${s.id}" ${state.sortBy === s.id ? 'selected' : ''}>${s.label}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="region-tags-panel" style="margin-top: 16px; margin-bottom: 8px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; font-size: 0.82rem; color: var(--text-muted);">
        <button
          id="filter-favorites"
          class="card__region-tag ${state.showFavoritesOnly ? 'card__region-tag--active' : ''}"
          aria-pressed="${state.showFavoritesOnly}"
          title="Show only favorite airlines"
          style="display: flex; align-items: center; gap: 4px;"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="${state.showFavoritesOnly ? 'currentColor' : 'none'}" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Favorites
        </button>
        <div style="width: 1px; height: 16px; background: var(--border); margin: 0 4px;"></div>
        <span style="font-weight: 600; margin-right: 4px;">Regions:</span>
        <button
          class="card__region-tag ${state.activeRegions.length === 0 ? 'card__region-tag--active' : ''}"
          data-region="All"
          aria-pressed="${state.activeRegions.length === 0}"
        >All</button>
        ${regions.map(r => `
          <button
            class="card__region-tag ${state.activeRegions.includes(r) ? 'card__region-tag--active' : ''}"
            data-region="${r}"
            aria-pressed="${state.activeRegions.includes(r)}"
          >${r}</button>
        `).join('')}
      </div>

      <div class="results-meta" aria-live="polite">
        <span id="results-count">${state.filteredAirlines.length} airline${state.filteredAirlines.length !== 1 ? 's' : ''}</span>
        ${state.comparisonList.length > 0 ? `
          <button class="compare-btn" id="open-compare" aria-label="Open comparison of ${state.comparisonList.length} airlines">
            Compare (${state.comparisonList.length})
          </button>
        ` : ''}
      </div>
    </section>
  `;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

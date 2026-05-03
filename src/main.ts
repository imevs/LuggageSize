import './styles/index.css';
import type { AppState, BagCategory, SortOption, UnitSystem, ThemeMode } from './types';
import airlines from './data/airlines';
import { getAirlinesForCountry } from './data/countries';
import { detectLocation, getCountryName } from './utils/geo';
import { searchAirlines, sortAirlines, filterByRegion, filterFavorites } from './utils/search';
import { renderHeader } from './components/header';
import { renderSearch } from './components/search';
import { renderGrid, renderSharedSvgDefs } from './components/card';
import { renderModal } from './components/modal';
import { renderUserBagModal } from './components/userBag';
import { renderComparison } from './components/comparison';
import { getInitialTheme, applyTheme, toggleTheme } from './components/theme';

// ── Initial State ────────────────────────────────────────────────────

const favsStr = localStorage.getItem('skybag-favorites');
const initialFavorites: string[] = favsStr ? JSON.parse(favsStr) : [];

const prefsStr = localStorage.getItem('skybag-prefs');
const prefs = prefsStr ? JSON.parse(prefsStr) : {};

const state: AppState = {
  airlines: [],
  filteredAirlines: [],
  searchQuery: prefs.searchQuery ?? '',
  activeCategory: prefs.activeCategory ?? 'carryOn',
  activeCabinClass: prefs.activeCabinClass ?? 'economy',
  unitSystem: prefs.unitSystem ?? 'metric',
  theme: getInitialTheme(),
  userCountry: null,
  userCity: null,
  sortBy: prefs.sortBy ?? 'generosity',
  comparisonList: [],
  selectedAirline: null,
  showComparison: false,
  activeRegions: prefs.activeRegions ?? [],
  userBag: prefs.userBag ?? null,
  showBagModal: false,
  favorites: initialFavorites,
  showFavoritesOnly: prefs.showFavoritesOnly ?? false,
};

// ── Derived filtered list ────────────────────────────────────────────

function computeFiltered(): void {
  let list = state.airlines;
  if (state.searchQuery) {
    list = searchAirlines(list, state.searchQuery);
  }
  if (state.activeRegions.length > 0) {
    list = filterByRegion(list, state.activeRegions);
  }
  if (state.showFavoritesOnly) {
    list = filterFavorites(list, state.favorites);
  }
  state.filteredAirlines = sortAirlines(list, state.sortBy);
}

// ── Render ───────────────────────────────────────────────────────────

function render(): void {
  const root = document.getElementById('app')!;

  root.innerHTML = `
    ${renderHeader(state)}
    <main class="main" id="main-content">
      ${renderSearch(state)}
      ${state.showComparison
        ? renderComparison(
            state.airlines.filter(a => state.comparisonList.includes(a.id)),
            state.activeCategory,
            state.unitSystem,
          )
        : ''}
      <div id="grid-container">
        ${renderGrid(
          state.filteredAirlines,
          state.activeCategory,
          state.unitSystem,
          state.selectedAirline?.id ?? null,
          state.comparisonList,
          state.activeRegions,
          state.userBag,
          state.favorites
        )}
      </div>
    </main>
    <footer class="footer">
      <p>Data is approximate — always verify with the official airline website before travel.</p>
      <p>© ${new Date().getFullYear()} SkyBag — Open source luggage allowance reference.</p>
    </footer>
  `;

  if (state.selectedAirline) {
    root.insertAdjacentHTML('beforeend', renderModal(state.selectedAirline, state.unitSystem));
  }

  if (state.showBagModal) {
    root.insertAdjacentHTML('beforeend', renderUserBagModal(state));
  }

  attachEventListeners();

  const prefs = {
    searchQuery: state.searchQuery,
    activeCategory: state.activeCategory,
    activeCabinClass: state.activeCabinClass,
    unitSystem: state.unitSystem,
    sortBy: state.sortBy,
    activeRegions: state.activeRegions,
    showFavoritesOnly: state.showFavoritesOnly,
    userBag: state.userBag,
  };
  localStorage.setItem('skybag-prefs', JSON.stringify(prefs));
}

// ── Event Listeners ──────────────────────────────────────────────────

function attachEventListeners(): void {
  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    state.theme = toggleTheme(state.theme) as ThemeMode;
    applyTheme(state.theme);
    render();
  });

  // Unit toggle
  document.getElementById('unit-toggle')?.addEventListener('click', (e) => {
    const btn = e.currentTarget as HTMLButtonElement;
    state.unitSystem = btn.dataset['next'] as UnitSystem;
    render();
  });

  // Search
  const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = (e.target as HTMLInputElement).value;
    computeFiltered();
    updateGrid();
  });

  document.getElementById('search-clear')?.addEventListener('click', () => {
    state.searchQuery = '';
    computeFiltered();
    render();
  });

  // Category chips
  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset['category'] as BagCategory;
      render();
    });
  });

  // Handle chip clears and region panel clicks
  const tagsPanel = document.querySelector('.region-tags-panel');
  if (tagsPanel) {
    tagsPanel.querySelectorAll<HTMLElement>('[data-region]').forEach(btn => {
      btn.addEventListener('click', () => {
        const r = btn.getAttribute('data-region');
        if (!r || r === 'All') {
          state.activeRegions = [];
        } else if (state.activeRegions.includes(r)) {
          state.activeRegions = state.activeRegions.filter(x => x !== r);
        } else {
          state.activeRegions = [...state.activeRegions, r];
        }
        computeFiltered();
        render();
      });
    });
  }

  document.querySelectorAll<HTMLElement>('[data-clear-region]').forEach(btn => {
    btn.addEventListener('click', () => {
      const r = btn.getAttribute('data-clear-region');
      if (r) {
        state.activeRegions = state.activeRegions.filter(x => x !== r);
        computeFiltered();
        render();
      }
    });
  });

  // Sort
  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    state.sortBy = (e.target as HTMLSelectElement).value as SortOption;
    computeFiltered();
    render();
  });

  // Grid Interactions (Event Delegation)
  const gridContainer = document.getElementById('grid-container');
  if (gridContainer) {
    gridContainer.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      // 1. Compare button
      const compareBtn = target.closest<HTMLButtonElement>('[data-compare]');
      if (compareBtn) {
        e.stopPropagation();
        const id = compareBtn.dataset['compare']!;
        if (state.comparisonList.includes(id)) {
          state.comparisonList = state.comparisonList.filter(x => x !== id);
        } else if (state.comparisonList.length < 3) {
          state.comparisonList = [...state.comparisonList, id];
        }
        render();
        return;
      }

      // 2. Favorite button
      const favBtn = target.closest<HTMLButtonElement>('.card__favorite-btn');
      if (favBtn) {
        e.stopPropagation();
        const id = favBtn.getAttribute('data-airline-id');
        if (!id) return;
        if (state.favorites.includes(id)) {
          state.favorites = state.favorites.filter(x => x !== id);
        } else {
          state.favorites = [...state.favorites, id];
        }
        localStorage.setItem('skybag-favorites', JSON.stringify(state.favorites));
        computeFiltered();
        render();
        return;
      }

      // 3. Region tag
      const regionBtn = target.closest<HTMLElement>('.card__region-tag[data-region]');
      if (regionBtn) {
        e.stopPropagation();
        const region = regionBtn.getAttribute('data-region');
        if (region) {
          if (state.activeRegions.includes(region)) {
            state.activeRegions = state.activeRegions.filter(x => x !== region);
          } else {
            state.activeRegions = [...state.activeRegions, region];
          }
          computeFiltered();
          render();
        }
        return;
      }

      // 4. Card click
      const card = target.closest<HTMLElement>('.card[data-airline-id]');
      if (card) {
        const id = card.dataset['airlineId']!;
        state.selectedAirline = state.airlines.find(a => a.id === id) ?? null;
        render();
      }
    });

    // Handle keyboard interaction for cards
    gridContainer.addEventListener('keydown', (e) => {
      const target = e.target as HTMLElement;
      if (e.key === 'Enter' || e.key === ' ') {
        const card = target.closest<HTMLElement>('.card[data-airline-id]');
        // Only trigger click if the target is the card itself (not a button inside it)
        if (card && target === card) {
          e.preventDefault();
          card.click();
        }
      }
    });
  }

  // Favorite filter toggle
  document.getElementById('filter-favorites')?.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    computeFiltered();
    render();
  });

  // Open comparison panel
  document.getElementById('open-compare')?.addEventListener('click', () => {
    state.showComparison = true;
    render();
  });

  // Close comparison
  document.getElementById('close-compare')?.addEventListener('click', () => {
    state.showComparison = false;
    render();
  });

  // Remove from comparison
  document.querySelectorAll<HTMLButtonElement>('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset['remove']!;
      state.comparisonList = state.comparisonList.filter(x => x !== id);
      if (state.comparisonList.length === 0) state.showComparison = false;
      render();
    });
  });

  // Modal close
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).id === 'modal-backdrop') closeModal();
  });

  // Modal cabin class tabs
  document.querySelectorAll<HTMLButtonElement>('[data-cabin]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.modal__tab').forEach(t => {
        t.classList.remove('modal__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.modal__tabpanel').forEach(p => {
        p.classList.remove('modal__tabpanel--active');
        (p as HTMLElement).hidden = true;
      });
      tab.classList.add('modal__tab--active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`tabpanel-${tab.dataset['cabin']}`);
      if (panel) {
        panel.classList.add('modal__tabpanel--active');
        panel.hidden = false;
      }
    });
  });

  // Change location
  document.getElementById('change-location')?.addEventListener('click', promptLocation);

  // Bag Modal
  document.getElementById('bag-modal-open')?.addEventListener('click', () => {
    state.showBagModal = true;
    render();
  });

  document.getElementById('bag-modal-close')?.addEventListener('click', () => {
    state.showBagModal = false;
    render();
  });

  document.getElementById('bag-modal-backdrop')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).id === 'bag-modal-backdrop') {
      state.showBagModal = false;
      render();
    }
  });

  document.getElementById('clear-bag')?.addEventListener('click', () => {
    state.userBag = null;
    state.showBagModal = false;
    render();
  });

  document.getElementById('user-bag-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    state.userBag = {
      length: parseFloat(formData.get('length') as string),
      width: parseFloat(formData.get('width') as string),
      height: parseFloat(formData.get('height') as string),
      weight: parseFloat(formData.get('weight') as string),
    };
    state.showBagModal = false;
    render();
  });

  // Escape key closes modal
  document.addEventListener('keydown', handleKeydown, { once: true });
}

function closeModal(): void {
  state.selectedAirline = null;
  render();
}

function handleKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') closeModal();
}

function updateGrid(): void {
  const container = document.getElementById('grid-container');
  if (!container) return;
  container.innerHTML = renderGrid(
    state.filteredAirlines,
    state.activeCategory,
    state.unitSystem,
    state.selectedAirline?.id ?? null,
    state.comparisonList,
    state.activeRegions,
    state.userBag
  );


  // Update results count
  const countEl = document.getElementById('results-count');
  if (countEl) {
    countEl.textContent = `${state.filteredAirlines.length} airline${state.filteredAirlines.length !== 1 ? 's' : ''}`;
  }
}

function promptLocation(): void {
  const input = window.prompt('Enter your country code (e.g. US, GB, DE, FR, AU):');
  if (!input) return;
  const code = input.trim().toUpperCase();
  const iatas = getAirlinesForCountry(code);
  const matched = airlines.filter(a => iatas.includes(a.iata));
  const rest = airlines.filter(a => !iatas.includes(a.iata));
  state.airlines = [...matched, ...rest];
  state.userCountry = code;
  state.userCity = getCountryName(code);
  computeFiltered();
  render();
}

// ── Bootstrap ────────────────────────────────────────────────────────

async function bootstrap(): Promise<void> {
  applyTheme(state.theme);
  document.body.insertAdjacentHTML('afterbegin', renderSharedSvgDefs());

  // Show app immediately with all airlines
  state.airlines = airlines;
  computeFiltered();
  render();

  // Detect location asynchronously, then re-order
  try {
    const geo = await detectLocation();
    state.userCountry = geo.countryCode;
    state.userCity = geo.city;

    const iatas = getAirlinesForCountry(geo.countryCode);
    const matched = airlines.filter(a => iatas.includes(a.iata));
    const rest = airlines.filter(a => !iatas.includes(a.iata));
    state.airlines = [...matched, ...rest];
    computeFiltered();
    render();
  } catch {
    // Keep default ordering
  }
}

bootstrap();

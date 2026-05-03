import './styles/index.css';
import type { AppState, BagCategory, SortOption, UnitSystem, ThemeMode } from './types';
import airlines from './data/airlines';
import { getAirlinesForCountry } from './data/countries';
import { detectLocation, getCountryName } from './utils/geo';
import { searchAirlines, sortAirlines, filterByRegion, filterFavorites } from './utils/search';
import { renderHeader } from './components/header';
import { renderSearch } from './components/search';
import { renderGrid } from './components/card';
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

  // Card click → open modal
  document.querySelectorAll<HTMLElement>('.card[data-airline-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal when clicking compare or favorite
      const target = e.target as HTMLElement;
      if (target.closest('[data-compare]') || target.closest('.card__favorite-btn')) return;
      
      // If clicking region on the card, toggle it
      if (target.closest('[data-region]')) {
        const region = target.closest('[data-region]')?.getAttribute('data-region');
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
      const id = card.dataset['airlineId']!;
      state.selectedAirline = state.airlines.find(a => a.id === id) ?? null;
      render();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Favorite toggle on card
  document.querySelectorAll<HTMLElement>('.card__favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-airline-id');
      if (!id) return;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(x => x !== id);
      } else {
        state.favorites = [...state.favorites, id];
      }
      localStorage.setItem('skybag-favorites', JSON.stringify(state.favorites));
      computeFiltered();
      render();
    });
  });

  // Favorite filter toggle
  document.getElementById('filter-favorites')?.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    computeFiltered();
    render();
  });

  // Compare buttons
  document.querySelectorAll<HTMLButtonElement>('[data-compare]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset['compare']!;
      if (state.comparisonList.includes(id)) {
        state.comparisonList = state.comparisonList.filter(x => x !== id);
      } else if (state.comparisonList.length < 3) {
        state.comparisonList = [...state.comparisonList, id];
      }
      render();
    });
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
  // Re-attach card listeners only
  document.querySelectorAll<HTMLElement>('[data-airline-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-compare]')) return;
      
      if (target.closest('[data-region]')) {
        const region = target.closest('[data-region]')?.getAttribute('data-region');
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
      const id = card.dataset['airlineId']!;
      state.selectedAirline = state.airlines.find(a => a.id === id) ?? null;
      render();
    });
  });
  document.querySelectorAll<HTMLButtonElement>('[data-compare]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset['compare']!;
      if (state.comparisonList.includes(id)) {
        state.comparisonList = state.comparisonList.filter(x => x !== id);
      } else if (state.comparisonList.length < 3) {
        state.comparisonList = [...state.comparisonList, id];
      }
      render();
    });
  });

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

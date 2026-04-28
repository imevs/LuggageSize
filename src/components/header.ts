import type { AppState, UnitSystem } from '../types';
import { renderThemeToggle } from './theme';

export function renderHeader(state: AppState): string {
  const locationLabel = state.userCity && state.userCountry
    ? `${state.userCity}, ${state.userCountry}`
    : 'Detecting location…';

  const unitLabel = state.unitSystem === 'metric' ? 'cm / kg' : 'in / lb';
  const unitNext: UnitSystem = state.unitSystem === 'metric' ? 'imperial' : 'metric';

  return `
    <header class="header" role="banner">
      <div class="header__inner">
        <div class="header__brand">
          <div class="header__logo" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
              <path d="M8 20 L16 8 L24 20 M12 20 L20 20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366f1"/>
                  <stop offset="1" stop-color="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="header__title-group">
            <span class="header__title">SkyBag</span>
            <span class="header__subtitle">Airline Luggage Allowances Worldwide</span>
          </div>
        </div>

        <div class="header__controls">
          <button
            id="unit-toggle"
            class="unit-toggle"
            data-next="${unitNext}"
            aria-label="Switch to ${unitNext === 'metric' ? 'metric' : 'imperial'} units"
            title="Toggle unit system"
          >
            <span class="unit-toggle__label">${unitLabel}</span>
          </button>

          <button
            id="bag-modal-open"
            class="header-btn"
            aria-label="Configure my bag size"
            title="My Bag size checker"
          >
            <span class="header-btn__icon">🎒</span>
            <span class="header-btn__label">My Bag</span>
            ${state.userBag ? '<span class="header-btn__indicator"></span>' : ''}
          </button>

          ${renderThemeToggle(state.theme)}
        </div>
      </div>

      <div class="location-bar">
        <span class="location-bar__icon" aria-hidden="true">📍</span>
        <span class="location-bar__text" id="location-text">Showing airlines near <strong>${locationLabel}</strong></span>
        <button id="change-location" class="location-bar__change" aria-label="Change location">Change</button>
      </div>
    </header>
  `;
}

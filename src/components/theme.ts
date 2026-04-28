import type { ThemeMode } from '../types';

const STORAGE_KEY = 'skybag-theme';

export function getInitialTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: ThemeMode): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme(current: ThemeMode): ThemeMode {
  return current === 'dark' ? 'light' : 'dark';
}

export function renderThemeToggle(theme: ThemeMode): string {
  const isDark = theme === 'dark';
  return `
    <button id="theme-toggle" class="theme-toggle" aria-label="Switch to ${isDark ? 'light' : 'dark'} mode" title="Switch to ${isDark ? 'light' : 'dark'} mode">
      <span class="theme-toggle__icon">${isDark ? '☀️' : '🌙'}</span>
    </button>
  `;
}

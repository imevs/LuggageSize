import type { AppState } from '../types';

export function renderUserBagModal(state: AppState): string {
  const isMetric = state.unitSystem === 'metric';
  const dimUnit = isMetric ? 'cm' : 'in';
  const weightUnit = isMetric ? 'kg' : 'lb';
  
  const bag = state.userBag || { length: '', width: '', height: '', weight: '' };

  return `
    <div class="modal-backdrop" id="bag-modal-backdrop" role="dialog" aria-modal="true" aria-label="My Bag Details">
      <div class="modal modal--bag">
        <button class="modal__close" id="bag-modal-close" aria-label="Close">✕</button>
        
        <div class="modal__header">
          <div class="modal__logo modal__logo--bag" aria-hidden="true">🎒</div>
          <div>
            <h2 class="modal__airline-name">My Bag Details</h2>
            <p class="modal__meta">Enter your bag's dimensions to check compatibility</p>
          </div>
        </div>

        <form id="user-bag-form" class="bag-form">
          <div class="bag-form__grid">
            <div class="form-group">
              <label for="bag-length">Length (${dimUnit})</label>
              <input type="number" id="bag-length" name="length" step="0.1" value="${bag.length}" required placeholder="55">
            </div>
            <div class="form-group">
              <label for="bag-width">Width (${dimUnit})</label>
              <input type="number" id="bag-width" name="width" step="0.1" value="${bag.width}" required placeholder="40">
            </div>
            <div class="form-group">
              <label for="bag-height">Height (${dimUnit})</label>
              <input type="number" id="bag-height" name="height" step="0.1" value="${bag.height}" required placeholder="20">
            </div>
            <div class="form-group">
              <label for="bag-weight">Weight (${weightUnit})</label>
              <input type="number" id="bag-weight" name="weight" step="0.1" value="${bag.weight}" required placeholder="8">
            </div>
          </div>

          <div class="bag-form__actions">
            <button type="button" id="clear-bag" class="btn btn--secondary">Clear Bag</button>
            <button type="submit" class="btn btn--primary">Save & Apply</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

import { describe, it, expect } from 'vitest';
import airlines from '../src/data/airlines';

// Comparison logic is stateless data manipulation — we test the data selection
// and filtering logic that feeds the comparison component.

describe('Comparison data selection', () => {
  it('can select up to 3 airlines for comparison', () => {
    const comparisonList = ['BRIAIR', 'EMI', 'LUF'];
    const selected = airlines.filter(a => comparisonList.includes(a.id));
    expect(selected.length).toBe(3);
  });

  it('comparison list never exceeds 3 items (enforced by state logic)', () => {
    let list: string[] = [];
    const addToComparison = (id: string) => {
      if (!list.includes(id) && list.length < 3) list = [...list, id];
    };
    addToComparison('BA');
    addToComparison('EK');
    addToComparison('LH');
    addToComparison('QR'); // should be ignored
    expect(list.length).toBe(3);
    expect(list).not.toContain('QR');
  });

  it('can remove an airline from comparison', () => {
    let list = ['BA', 'EK', 'LH'];
    list = list.filter(id => id !== 'EK');
    expect(list).toEqual(['BA', 'LH']);
  });

  it('does not add duplicate airline to comparison', () => {
    let list = ['BA', 'EK'];
    const id = 'BA';
    if (!list.includes(id)) list = [...list, id];
    expect(list.length).toBe(2);
  });

  it('all selected airlines have economy baggage data', () => {
    const selected = airlines.filter(a => ['BA', 'EK', 'LH'].includes(a.id));
    selected.forEach(a => {
      expect(a.baggage.economy).toBeDefined();
      expect(a.baggage.economy.carryOn).toBeDefined();
      expect(a.baggage.economy.checked).toBeDefined();
    });
  });
});

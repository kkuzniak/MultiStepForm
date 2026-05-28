import { describe, expect, it } from 'vitest';
import { ADDONS, PLANS } from '@/features/onboarding/constants';
import { getShortCycleLabel, getTotal } from '@/features/onboarding/utils';

describe('onboarding utils', () => {
  describe('getShortCycleLabel', () => {
    it('returns mo for monthly billing', () => {
      expect(getShortCycleLabel(false)).toBe('mo');
    });

    it('returns yr for yearly billing', () => {
      expect(getShortCycleLabel(true)).toBe('yr');
    });
  });

  describe('getTotal', () => {
    it('sums monthly plan and addon prices', () => {
      const plan = PLANS.arcade;
      const addons = [ADDONS[0], ADDONS[1]];

      expect(getTotal(false, plan, addons)).toBe(12);
    });

    it('sums yearly plan and addon prices', () => {
      const plan = PLANS.pro;
      const addons = [ADDONS[0], ADDONS[1]];

      expect(getTotal(true, plan, addons)).toBe(180);
    });

    it('returns plan price only when there are no addons', () => {
      expect(getTotal(false, PLANS.advanced, [])).toBe(12);
    });
  });
});

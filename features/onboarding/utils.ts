import { Addon, Plan } from './types';

export const getShortCycleLabel = (isYearly: boolean): string => {
  return isYearly ? 'yr' : 'mo';
};

export const getTotal = (
  isYearly: boolean,
  plan: Omit<Plan, 'type'>,
  addons: Addon[],
): number => {
  const planPrice = isYearly ? plan.price.yearly : plan.price.monthly;

  const addonsPrice = addons.reduce((acc, addon) => {
    return acc + (isYearly ? addon.price.yearly : addon.price.monthly);
  }, 0);

  return planPrice + addonsPrice;
};

'use client';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { ADDONS, PLANS } from '@/features/onboarding/constants';
import { getShortCycleLabel, getTotal } from '@/features/onboarding/utils';
import { cn } from '@/utils/cn';
import { AddonRow } from './addon-row';

const Step4 = () => {
  const router = useRouter();
  const { watch } = useFormContext();

  const [isYearly, planType] = watch(['isYearly', 'plan']);

  const plan = PLANS[planType as keyof typeof PLANS];
  const cycleLabel = isYearly ? 'Yearly' : 'Monthly';
  const shortCycleLabel = getShortCycleLabel(isYearly);

  const planName = `${plan.name} (${cycleLabel})`;
  const planPrice = isYearly ? plan.price.yearly : plan.price.monthly;
  const planPriceLabel = `$${planPrice}/${shortCycleLabel}`;

  const addons = ADDONS.filter(({ id }) => watch('addons').includes(id));
  const doesHaveAddons = addons.length > 0;

  const totalPerLabel = isYearly ? 'Total (per year)' : 'Total (per month)';
  const total = getTotal(isYearly, plan, addons);
  const totalLabel = `+$${total}/${shortCycleLabel}`;

  const handleChange = () => {
    router.push('/apply/2');
  };

  return (
    <>
      <div className="w-full bg-blue-50 px-4 py-3.25 rounded-lg text-preset4 mb-6 md:mb-8 md:py-5.5 md:px-4.25">
        <header
          className={cn(
            'flex items-center justify-between',
            doesHaveAddons && 'border-b pb-4 mb-4 border-grey-600',
          )}
        >
          <div>
            <h3 className="text-preset4-medium md:mb-2 md:text-preset3-medium">
              {planName}
            </h3>
            <Button
              className="text-preset4 text-grey-500 hover:text-purple-600 md:text-preset4"
              onClick={handleChange}
              label="Change"
              type="secondary"
            />
          </div>
          <p className="text-preset4-bold md:text-preset3-bold">
            {planPriceLabel}
          </p>
        </header>
        <div className="flex flex-col gap-y-4">
          {addons.map(({ name, price }) => (
            <AddonRow key={name} name={name} price={price} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-4 md:px-6">
        <p className="text-grey-500 text-preset4">{totalPerLabel}</p>
        <p className="text-preset3-bold text-purple-600 md:text-preset6">
          {totalLabel}
        </p>
      </div>
    </>
  );
};

export { Step4 };

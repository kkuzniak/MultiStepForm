'use client';

import { useFormContext } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { PLANS } from '@/features/onboarding/constants';
import { PlanType } from '@/features/onboarding/types';
import { cn } from '@/utils/cn';
import { PlanContent } from './plan-content';

const Step2 = () => {
  const { control } = useFormContext();

  const plans = Object.entries(PLANS).map(([type, { name, price }]) => ({
    content: <PlanContent type={type as PlanType} name={name} price={price} />,
    value: type,
  }));

  return (
    <div className="w-full">
      <ToggleGroup
        name="plan"
        control={control}
        className="w-full flex flex-col items-center justify-between gap-y-2 mb-8 lg:flex-row lg:gap-x-4.5"
        itemClassName={cn(
          'w-full rounded-lg border px-4 py-3 flex flex-row items-start gap-x-4 cursor-pointer',
          'md:py-5',
          'lg:h-40 lg:flex-col lg:flex-1 lg:py-4.5',
          'data-[state=on]:border-purple-600 data-[state=on]:bg-purple-50',
          'data-[state=off]:border-purple-200 data-[state=off]:bg-white data-[state=off]:hover:border-purple-600',
          'focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-blue-500',
        )}
        items={plans}
      />
      <div className="w-full bg-blue-50 h-12 flex items-center justify-center">
        <Switch
          name="isYearly"
          control={control}
          leftLabel="Monthly"
          rightLabel="Yearly"
        />
      </div>
    </div>
  );
};

export { Step2 };

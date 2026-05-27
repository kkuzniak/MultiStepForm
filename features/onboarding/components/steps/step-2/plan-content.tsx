'use client';

import { useFormContext } from 'react-hook-form';
import { type Plan } from '@/features/onboarding/types';
import { cn } from '@/utils/cn';
import { AdvancedIcon } from './icons/advanced-icon';
import { ArcadeIcon } from './icons/arcade-icon';
import { ProIcon } from './icons/pro-icon';

const PlanContent = ({ name, type, price }: Plan) => {
  const { watch } = useFormContext();

  const isYearly = watch('isYearly');

  const { monthly: monthlyPrice, yearly: yearlyPrice } = price;

  const priceLabel = isYearly ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`;

  const iconByType: Record<string, React.ReactNode> = {
    arcade: <ArcadeIcon className="size-10 min-w-10" />,
    advanced: <AdvancedIcon className="size-10 min-w-10" />,
    pro: <ProIcon className="size-10 min-w-10" />,
  };

  return (
    <>
      {iconByType[type]}
      <div
        className={cn(
          'flex flex-col items-start md:flex-row md:justify-between md:items-center md:w-full lg:flex-col lg:justify-start lg:items-start',
          isYearly && 'gap-1 md:gap-0 lg:gap-2',
        )}
      >
        <div
          className={cn(
            'flex flex-col items-start md:mt-auto',
            isYearly && 'gap-1 md:gap-0',
          )}
        >
          <h3 className="text-preset3-medium">{name}</h3>
          <p className="text-preset4 text-grey-500">{priceLabel}</p>
        </div>
        {isYearly ? <p className="text-preset5">2 months free</p> : null}
      </div>
    </>
  );
};

export { PlanContent };

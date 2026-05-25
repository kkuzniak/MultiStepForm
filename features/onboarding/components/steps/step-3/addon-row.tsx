'use client';

import { Control, FieldValues, useFormContext } from 'react-hook-form';
import { OptionCard } from '@/components/ui/option-card';
import { type Addon } from '@/features/onboarding/types';

type Props = Addon & {
  control: Control<FieldValues>;
};

const AddonRow = ({ id, name, description, price, control }: Props) => {
  const { watch } = useFormContext();
  const isYearly = watch('isYearly');

  const { monthly: monthlyPrice, yearly: yearlyPrice } = price;

  const priceLabel = isYearly ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`;

  return (
    <OptionCard key={id} fieldPath="addons" name={id} control={control}>
      <label
        htmlFor="test"
        className="w-full flex flex-row items-center justify-between text-preset5 md:text-preset4"
      >
        <header className="flex flex-col items-start md:gap-y-2">
          <h3 className="text-preset4-medium md:text-preset3-medium">{name}</h3>
          <p className="text-grey-500">{description}</p>
        </header>
        <p className="text-purple-600">{`+${priceLabel}`}</p>
      </label>
    </OptionCard>
  );
};

export { AddonRow };

'use client';

import { useFormContext } from 'react-hook-form';
import { ADDONS } from '@/features/onboarding/constants';
import { AddonRow } from './addon-row';

const Step3 = () => {
  const { control } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-y-2 md:gap-y-4">
      {ADDONS.map(({ id, name, description, price }) => (
        <AddonRow
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
          control={control}
        />
      ))}
    </div>
  );
};

export { Step3 };

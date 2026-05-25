'use client';

import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

const AddonRow = ({ name, price }: Props) => {
  const { watch } = useFormContext();
  const isYearly = watch('isYearly');

  const { monthly: monthlyPrice, yearly: yearlyPrice } = price;
  const priceLabel = isYearly ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`;

  return (
    <div className="flex items-center justify-between">
      <p className="text-grey-500">{name}</p>
      <p>{`+${priceLabel}`}</p>
    </div>
  );
};

export { AddonRow };

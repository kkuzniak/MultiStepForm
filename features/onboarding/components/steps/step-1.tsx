'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

const Step1 = () => {
  const { control } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-y-4 md:gap-y-6">
      <Input
        name="fullName"
        control={control}
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
      />
      <Input
        name="email"
        control={control}
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
      />
      <Input
        name="phone"
        control={control}
        type="tel"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
      />
    </div>
  );
};

export { Step1 };

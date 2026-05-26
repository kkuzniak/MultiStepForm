'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

const Step1 = () => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  const revalidateFields = async () => {
    const errorsLength = Object.keys(errors).length;

    if (errorsLength === 0) {
      return;
    }

    await trigger(['fullName', 'email', 'phone']);
  };

  return (
    <div className="w-full flex flex-col gap-y-4 md:gap-y-6">
      <Input
        name="fullName"
        control={control}
        type="text"
        placeholder="e.g. Stephen King"
        label="Name"
        errors={errors}
        onChange={revalidateFields}
      />
      <Input
        name="email"
        control={control}
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
        errors={errors}
        onChange={revalidateFields}
      />
      <Input
        name="phone"
        control={control}
        type="tel"
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
        errors={errors}
        onChange={revalidateFields}
      />
    </div>
  );
};

export { Step1 };

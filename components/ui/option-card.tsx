'use client';

import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { CheckIcon } from '@/components/icons/check-icon';
import { cn } from '@/utils/cn';

type Props<T extends FieldValues> = PropsWithChildren<{
  fieldPath: Path<T>;
  name: string;
  control: Control<T>;
  className?: string;
}>;

const OptionCard = <T extends FieldValues>({
  fieldPath,
  name,
  control,
  className,
  children,
}: Props<T>) => {
  return (
    <Controller
      name={fieldPath}
      control={control}
      render={({ field }) => {
        const { value: array = [], onChange } = field;

        const checked = array.includes(name as never);

        const handleChange = (isChecked: boolean) => {
          if (isChecked) {
            onChange([...array, name as never]);
            return;
          }

          onChange(array.filter((item: string) => item !== name));
        };

        const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
          if (e.key === 'Enter') {
            e.currentTarget.click();
          }
        };

        return (
          <CheckboxPrimitive.Root
            className={cn(
              'w-full px-4 py-3 rounded-lg border border-purple-200 flex flex-row items-center gap-x-4 cursor-pointer hover:border-purple-600',
              'md:px-6 md:py-4.75 md:gap-x-6',
              'data-[state=checked]:border-purple-600 data-[state=checked]:bg-blue-50 data-[state=checked]:[&>div:first-child]:bg-purple-600 data-[state=checked]:[&>div:first-child]:border-purple-600 data-[state=checked]:focus-visible:border-transparent',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent',
              className,
            )}
            id={name}
            checked={checked}
            onCheckedChange={handleChange}
            onKeyDown={handleKeyDown}
          >
            <div className="size-5 min-w-5 bg-white rounded-sm flex items-center justify-center border border-purple-200">
              <CheckboxPrimitive.Indicator className="transition-opacity duration-200 opacity-0 data-[state=checked]:opacity-100">
                <CheckIcon />
              </CheckboxPrimitive.Indicator>
            </div>
            <div className="w-full [&>*]:pointer-events-none">{children}</div>
          </CheckboxPrimitive.Root>
        );
      }}
    />
  );
};

export { OptionCard };

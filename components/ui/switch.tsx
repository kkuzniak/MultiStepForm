import { Switch as SwitchPrimitive } from 'radix-ui';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { cn } from '@/utils/cn';

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  leftLabel?: string;
  rightLabel?: string;
};

const Switch = <T extends FieldValues>({
  name,
  control,
  leftLabel,
  rightLabel,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const checked = field.value;

        return (
          <div className="flex items-center justify-between text-preset4-bold [&>*]:cursor-pointer">
            {leftLabel ? (
              <label
                htmlFor="switch"
                className={cn(
                  'transition-colors duration-200 pr-6',
                  checked && 'text-grey-500',
                )}
              >
                {leftLabel}
              </label>
            ) : null}
            <SwitchPrimitive.Root
              className={cn(
                'relative w-9.5 h-5 px-1 bg-blue-950 rounded-[10px]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent',
              )}
              id="switch"
              checked={checked}
              onCheckedChange={field.onChange}
            >
              <SwitchPrimitive.Thumb className="size-3 bg-white block rounded-full data-[state=checked]:translate-x-4.5 transition-transform duration-200" />
            </SwitchPrimitive.Root>
            {rightLabel ? (
              <label
                htmlFor="switch"
                className={cn(
                  'transition-colors duration-200 pl-6',
                  !checked && 'text-grey-500',
                )}
              >
                {rightLabel}
              </label>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export { Switch };

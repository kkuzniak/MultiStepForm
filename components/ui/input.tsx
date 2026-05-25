import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { cn } from '@/utils/cn';

export type MaskType = 'numbers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  type: 'text' | 'email' | 'tel';
  placeholder: string;
  className?: string;
  label: string;
};

const Input = <T extends FieldValues>({
  name,
  control,
  type,
  placeholder,
  className,
  label,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor={name} className="text-preset5 md:text-preset4">
              {label}
            </label>
            <input
              className={cn(
                'h-10 bg-white px-4 text-preset4-medium rounded-lg border border-purple-200 focus:outline-none focus:border-purple-600',
                'md:h-12 md:text-preset3-medium',
                'placeholder:text-grey-500',
                className,
              )}
              type={type}
              placeholder={placeholder}
              id={name}
              onChange={field.onChange}
              value={field.value}
            />
          </div>
        );
      }}
    />
  );
};

export { Input };

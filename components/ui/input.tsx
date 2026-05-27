import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { cn } from '@/utils/cn';

export type MaskType = 'numbers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  type: 'text' | 'email' | 'tel';
  placeholder: string;
  className?: string;
  label: string;
  errors?: FieldErrors<T>;
  onChange?: (value: string) => void;
};

const Input = <T extends FieldValues>({
  name,
  control,
  type,
  placeholder,
  className,
  label,
  errors,
  onChange,
}: Props<T>) => {
  const hasErrors = errors?.[name]?.message;
  const errorMessage = hasErrors?.toString();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange: fieldOnChange } = field;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;

          fieldOnChange(value);
          onChange?.(value);
        };

        return (
          <div className="w-full flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={name} className="text-preset5 md:text-preset4">
                {label}
              </label>
              <p
                id={`${name}-error`}
                role="alert"
                aria-live="polite"
                className={cn(
                  'text-preset5-bold text-red-500 opacity-0 transition-opacity duration-200 sm:text-preset4-bold',
                  hasErrors && 'opacity-100',
                )}
              >
                {errorMessage}
              </p>
            </div>
            <input
              className={cn(
                'h-10 bg-white px-4 text-preset4-medium rounded-lg border border-purple-200 transition-colors duration-200 outline-none',
                'md:h-12 md:text-preset3-medium',
                'placeholder:text-grey-500',
                hasErrors && 'border-red-500',
                !hasErrors && 'focus:border-purple-600',
                className,
              )}
              type={type}
              placeholder={placeholder}
              id={name}
              onChange={handleChange}
              value={field.value}
              required
              aria-describedby={`${name}-error`}
              aria-invalid={!!hasErrors}
              aria-required="true"
            />
          </div>
        );
      }}
    />
  );
};

export { Input };

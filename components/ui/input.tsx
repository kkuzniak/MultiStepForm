import { cn } from '@/utils/cn';

type Props = {
  id: string;
  type: 'text' | 'email' | 'tel';
  placeholder: string;
  className?: string;
  label: string;
};

const Input = ({ id, type, placeholder, className, label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor={id} className="text-preset4">
        {label}
      </label>
      <input
        className={cn(
          'h-12 bg-white px-4 text-preset3-medium rounded-lg border border-purple-200 focus:outline-none focus:border-purple-600',
          'placeholder:text-grey-500',
          className,
        )}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export { Input };

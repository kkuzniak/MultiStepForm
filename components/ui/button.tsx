'use client';

import { cn } from '@/utils/cn';

type Props = {
  onClick: () => void;
  label: string;
  type?: 'primary' | 'secondary';
  className?: string;
};

const Button = ({ onClick, label, className, type = 'primary' }: Props) => {
  return (
    <button
      className={cn(
        'text-preset4-medium rounded-sm cursor-pointer flex items-center justify-center',
        'md:text-preset3-medium md:rounded-lg',
        {
          'bg-blue-950 text-white w-24.25 h-10 hover:bg-blue-700 active:bg-blue-700 transition-colors duration-200 md:w-30.75 md:h-12':
            type === 'primary',
          'text-grey-500 hover:text-blue-950 active:text-blue-950':
            type === 'secondary',
        },
        className,
      )}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export { Button };

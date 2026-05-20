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
        'text-preset3-medium rounded-lg cursor-pointer',
        {
          'bg-blue-950 text-white px-6.25 py-3.5 hover:bg-blue-700 active:bg-blue-700 transition-colors duration-200':
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

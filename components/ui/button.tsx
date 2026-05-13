'use client';

import { cn } from '@/utils/cn';

type Props = {
  type: 'primary' | 'secondary';
  onClick: () => void;
  label: string;
  className?: string;
};

const Button = ({ onClick, label, className }: Props) => {
  return (
    <button
      className={cn(
        'bg-blue-950 text-preset3-medium text-white px-6.25 py-3.5 rounded-lg cursor-pointer',
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

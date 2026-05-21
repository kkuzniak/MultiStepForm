import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { PropsWithChildren } from 'react';
import { CheckIcon } from '@/components/icons/check-icon';
import { cn } from '@/utils/cn';

type Props = PropsWithChildren<{
  className?: string;
}>;

const OptionCard = ({ children, className }: Props) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'w-full px-4 py-3 rounded-lg border border-purple-200 cursor-pointer flex flex-row items-center gap-x-4',
        'md:px-6 md:py-4.75 md:gap-x-6',
        'data-[state=checked]:border-purple-600 data-[state=checked]:bg-blue-50 data-[state=checked]:[&>div]:bg-purple-600 data-[state=checked]:[&>div]:border-purple-600',
        className,
      )}
    >
      <div className="size-5 min-w-5 bg-white rounded-sm flex items-center justify-center border border-purple-200">
        <CheckboxPrimitive.Indicator className="transition-opacity duration-200 opacity-0 data-[state=checked]:opacity-100">
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </div>
      {children}
    </CheckboxPrimitive.Root>
  );
};

export { OptionCard };

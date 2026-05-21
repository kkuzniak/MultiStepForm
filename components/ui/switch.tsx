import { Switch as SwitchPrimitive } from 'radix-ui';
import { useState } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  leftLabel?: string;
  rightLabel?: string;
};

const Switch = ({ leftLabel, rightLabel }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

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
        className="relative w-9.5 h-5 px-1 bg-blue-950 rounded-[10px]"
        id="switch"
        checked={checked}
        onCheckedChange={handleChange}
      >
        <SwitchPrimitive.Thumb className="size-3 bg-white block rounded-full data-[state=checked]:translate-x-4 transition-transform duration-200" />
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
};

export { Switch };

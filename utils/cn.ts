import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMergeConfig = {
  extend: {
    theme: {
      text: [
        (str: string) =>
          /preset1|preset2|preset3|preset3-medium|preset4|preset4-medium|preset4-bold|preset5|preset5-bold/.test(
            str,
          ),
      ],
      color: [
        (str: string) =>
          /grey-500|orange-300|red-500|red-450|red-400|purple-600|purple-500|purple-400|purple-200|blue-950|blue-700|blue-300|blue-200|blue-100|blue-50/.test(
            str,
          ),
      ],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, twMergeConfig };

import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMergeConfig = {
  extend: {
    theme: {
      text: [
        (str: string) =>
          /preset4-bold/.test(str)
      ],
      // color: [
      //   (str: string) => ''
      //     //.test(
      //       // str,
      //     // ),
      // ],
    },
  },
};

const twMerge = extendTailwindMerge(twMergeConfig);

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, twMergeConfig };

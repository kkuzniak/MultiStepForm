import { Form } from '@/features/onboarding/components/form';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <main
      className={cn(
        'size-full flex flex-col flex-1 items-center justify-start px-4 bg-blue-100 font-ubuntu dark:bg-blue-100',
        'md:justify-center md:px-10',
      )}
    >
      <Form />
    </main>
  );
}

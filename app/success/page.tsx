import { HeartIcon } from '@/components/icons/heart-icon';
import { Stepper } from '@/features/onboarding/components/steps/stepper/stepper';
import { cn } from '@/utils/cn';

export default function SuccessPage() {
  return (
    <div
      className={cn(
        'w-full max-w-85.75 mt-24 rounded-[10px] bg-white overflow-hidden flex flex-col items-center shadow-md z-100',
        'md:max-w-235 md:mx-auto md:mt-0 md:h-150 md:rounded-[15px] md:flex-row',
        'lg:mx-auto',
      )}
    >
      <Stepper currentStep="step-4" />
      <div
        className={cn(
          'flex flex-col items-center justify-center bg-white z-100 px-6 py-20.5',
          'md:flex-1 md:px-19 md:py-0',
          'lg:px-25',
        )}
      >
        <HeartIcon className="mb-6 size-14 md:mb-8 md:size-20" />
        <h1 className="text-preset2 mb-2 md:text-preset1 md:mb-4">
          Thank you!
        </h1>
        <p className="text-preset3 text-grey-500 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

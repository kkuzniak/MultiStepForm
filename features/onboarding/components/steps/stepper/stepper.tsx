'use client';

import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { Step } from './step';
import { StepperBackground } from './stepper-background';

type Props = {
  currentStep: StepKey;
};

const Stepper = ({ currentStep }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-43 flex md:w-auto md:h-full md:py-4 md:pl-4 md:relative md:min-w-55.5 lg:min-w-72.5">
      <div className="size-full relative overflow-hidden md:rounded-[10px]">
        <StepperBackground className="absolute w-full h-auto -bottom-[40%] left-0 md:w-auto md:h-full md:top-0 md:-left-4" />
        <div className="w-full relative flex justify-center mt-8 z-200 gap-x-4 md:gap-y-8 md:mt-0 md:flex-col md:py-10 md:px-6.75 lg:px-8">
          {Object.entries(STEPS).map(([stepKey, { stepperTitle }], index) => (
            <Step
              key={index}
              number={index + 1}
              title={stepperTitle}
              selected={currentStep === stepKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Stepper };

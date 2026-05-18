import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { Step } from './step';
import { StepperBackground } from './stepper-background';

type Props = {
  currentStep: StepKey;
};

const Stepper = ({ currentStep }: Props) => {
  return (
    <div className="hidden h-full bg-white py-4 pl-4 md:block md:w-55.5 md:min-w-55.5 lg:w-72.5 lg:min-w-72.5">
      <div className="size-full relative flex flex-col items-center overflow-hidden rounded-[10px]">
        <StepperBackground className="absolute h-full top-0 left-0" />
        <div className="w-full flex flex-col z-100 py-10 gap-y-8 md:px-6.75 lg:px-8">
          {Object.entries(STEPS).map(([stepKey, { title }], index) => (
            <Step
              key={index}
              number={index + 1}
              title={title}
              selected={currentStep === stepKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Stepper };

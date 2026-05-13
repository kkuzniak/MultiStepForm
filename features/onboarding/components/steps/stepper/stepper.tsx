import { Step } from './step';
import { StepperBackground } from './stepper-background';
import { StepKey, STEPS } from '@/features/onboarding/types/form';

type Props = {
  currentStep: StepKey;
};

const Stepper = ({ currentStep }: Props) => {
  return (
    <div className="w-76.5 min-w-76.5 h-full bg-white p-4">
      <div className="size-full relative flex flex-col items-center">
        <StepperBackground className="absolute size-full top-0 left-0" />
        <div className="w-full flex flex-col z-100 px-8 py-10 gap-y-8">
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

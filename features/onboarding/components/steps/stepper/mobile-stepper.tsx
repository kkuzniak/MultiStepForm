import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { Step } from './step';

type Props = {
  currentStep: StepKey;
};

const MobileStepper = ({ currentStep }: Props) => {
  return (
    <div className="fixed top-0 w-screen h-43 overflow-hidden md:hidden">
      {/* <StepperBackground className="absolute w-[120%] h-auto -bottom-29 -left-[7%]" /> */}
      <div className="w-full flex mt-8 z-200 gap-x-4 justify-center">
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
  );
};

export { MobileStepper };

import { Step } from './step';
import { StepsBackground } from './steps-background';

const steps = ['your info', 'select plan', 'add-ons', 'summary'];

const Steps = () => {
  return (
    <div className="w-full max-w-76.5 h-full bg-white p-4">
      <div className="size-full relative flex flex-col items-center">
        <StepsBackground className="absolute size-full top-0 left-0" />
        <div className="w-full flex flex-col z-100 px-8 py-10 gap-y-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step}
              selected={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Steps };

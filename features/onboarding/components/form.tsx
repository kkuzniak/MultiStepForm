'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { cn } from '@/utils/cn';
import { Stepper } from './steps/stepper/stepper';

const Form = () => {
  const [currentStep, setCurrentStep] = useState<StepKey>('step-1');

  const { title, description, component } = STEPS[currentStep];

  const isLastStep = currentStep === 'step-4';

  const handleGoBack = () => {
    const currentStepNumber = currentStep.split('-')[1];

    if (Number(currentStepNumber) === 1) {
      return;
    }

    setCurrentStep(`step-${Number(currentStepNumber) - 1}` as StepKey);
  };

  const handleNextStep = () => {
    if (isLastStep) {
      return;
    }

    const currentStepNumber = currentStep.split('-')[1];

    setCurrentStep(`step-${Number(currentStepNumber) + 1}` as StepKey);
  };

  return (
    <div
      className={cn(
        'mt-24 max-w-235 w-full rounded-[10px] bg-white overflow-hidden flex flex-col items-center shadow-md z-100',
        'md:mx-auto md:mt-0 md:h-150 md:rounded-[15px] md:flex-row',
        'lg:mx-auto',
      )}
    >
      <Stepper currentStep={currentStep} />
      <div
        className={cn(
          'h-full px-6 py-8 flex flex-col',
          'md:flex-1 md:px-14.5 md:pt-10.5 md:pb-8',
          'lg:py-12 lg:px-25',
        )}
      >
        <h1 className="text-preset2 mb-2 md:text-preset1">{title}</h1>
        <p className="text-preset3 text-grey-500 mb-6 md:mb-8 lg:mb-10">
          {description}
        </p>
        {component}
        <div
          className={cn(
            'hidden w-full justify-between mt-auto md:flex',
            currentStep === 'step-1' && 'justify-end',
          )}
        >
          {currentStep !== 'step-1' && (
            <Button label="Go Back" onClick={handleGoBack} type="secondary" />
          )}
          <Button
            className={cn(
              isLastStep &&
                'bg-purple-600 hover:bg-purple-400 active:bg-purple-400',
            )}
            label={isLastStep ? 'Confirm' : 'Next Step'}
            onClick={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
};

export { Form };

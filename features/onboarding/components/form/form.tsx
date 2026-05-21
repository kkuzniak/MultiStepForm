'use client';

import { useState } from 'react';
import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { cn } from '@/utils/cn';
import { Stepper } from '../steps/stepper/stepper';
import { FormNavigationButtons } from './form-navigation-buttons';

const Form = () => {
  const [currentStep, setCurrentStep] = useState<StepKey>('step-2');

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
        'w-full max-w-85.75 mt-24 rounded-[10px] bg-white overflow-hidden flex flex-col items-center shadow-md z-100',
        'md:max-w-235 md:mx-auto md:mt-0 md:h-150 md:rounded-[15px] md:flex-row',
        'lg:mx-auto',
      )}
    >
      <Stepper currentStep={currentStep} />
      <div
        className={cn(
          'h-full px-6 py-8 flex flex-col bg-white z-100',
          'md:flex-1 md:px-14.5 md:pt-10.5 md:pb-8',
          'lg:py-12 lg:px-25',
        )}
      >
        <h1 className="text-preset2 mb-2 md:text-preset1">{title}</h1>
        <p className="text-preset3 text-grey-500 mb-6 md:mb-8 lg:mb-10">
          {description}
        </p>
        {component}
        <FormNavigationButtons
          currentStep={currentStep}
          handleGoBack={handleGoBack}
          handleNextStep={handleNextStep}
          isLastStep={isLastStep}
        />
      </div>
    </div>
  );
};

export { Form };

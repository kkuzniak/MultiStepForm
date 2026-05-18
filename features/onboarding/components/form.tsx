'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { STEPS, StepKey } from '@/features/onboarding/types/form';
import { cn } from '@/utils/cn';
import { Stepper } from './steps/stepper/stepper';

const Form = () => {
  const [currentStep] = useState<StepKey>('step-3');

  const { title, description, component } = STEPS[currentStep];

  return (
    <div
      className={cn(
        'mx-4 max-w-235 w-full rounded-[10px] bg-white overflow-hidden flex items-center text-blue-950 shadow-md',
        'md:mx-auto md:h-150 md:rounded-[15px]',
        'lg:mx-auto',
      )}
    >
      <Stepper currentStep={currentStep} />
      <div
        className={cn(
          'h-full px-6 py-8',
          'md:flex-1 md:px-14.5 md:pt-10.5 md:pb-8',
          'lg:py-12 lg:px-25',
        )}
      >
        <h1 className="text-preset2 mb-2 md:text-preset1">{title}</h1>
        <p className="text-preset3 text-grey-500 mb-6 md:mb-8 lg:mb-10">
          {description}
        </p>
        {component}
        <div className="hidden w-full justify-between mt-20 md:flex">
          <Button
            label="Go Back"
            onClick={() => console.log('go back')}
            type="secondary"
          />
          <Button label="Next Step" onClick={() => console.log('next step')} />
        </div>
      </div>
    </div>
  );
};

export { Form };

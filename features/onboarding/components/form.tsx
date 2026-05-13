'use client';

import { Button } from '@/components/ui/button';
import { Stepper } from './steps/stepper/stepper';
import { useState } from 'react';
import { StepKey, STEPS } from '@/features/onboarding/types/form';

const Form = () => {
  const [currentStep, setCurrentStep] = useState<StepKey>('summary');

  const { title, description, component } = STEPS[currentStep];

  return (
    <div className="max-w-235 w-full h-150 bg-white rounded-2xl overflow-hidden flex items-center text-blue-950 shadow-md">
      <Stepper currentStep={currentStep} />
      <div className="h-full flex-1 pt-12 pl-21 pr-25">
        <h1 className="text-preset1 mb-2">{title}</h1>
        <p className="text-preset3 text-grey-500 mb-10">{description}</p>
        {component}
        <div className="w-full flex justify-end mt-20">
          <Button
            label="Next Step"
            onClick={() => console.log('next step')}
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};

export { Form };

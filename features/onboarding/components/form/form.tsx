'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import { STEPS } from '@/features/onboarding/constants';
import {
  getFormData,
  saveFormData,
} from '@/features/onboarding/lib/form-store/client';
import { cn } from '@/utils/cn';
import { onboardingSchema } from '../../schemas/onboarding-schema';
import { Stepper } from '../steps/stepper/stepper';
import { FormNavigationButtons } from './form-navigation-buttons';

type Props = {
  step: number;
};

const Form = ({ step }: Props) => {
  const router = useRouter();

  const parsed = getFormData();

  const methods = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      isYearly: false,
      plan: 'arcade',
      addons: [],
      ...parsed,
    },
  });

  const { watch, trigger } = methods;

  const { title, description, component } = STEPS[step - 1];

  const StepComponent = component;

  const isFirstStep = step === 1;
  const isLastStep = step === STEPS.length;

  const handleGoBack = () => {
    const currentStepNumber = step - 1;

    if (currentStepNumber === 0) {
      return;
    }

    router.push(`/apply/${currentStepNumber}`);
  };

  const handleNextStep = async () => {
    if (isFirstStep) {
      const isValid = await trigger(['fullName', 'email', 'phone']);

      if (!isValid) {
        return;
      }
    }

    if (isLastStep) {
      saveFormData({ success: true });
      router.push('/apply/success');
      return;
    }

    router.push(`/apply/${step + 1}`);
  };

  useEffect(() => {
    const subscription = watch(values => saveFormData(values));

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div
      className={cn(
        'w-full max-w-85.75 mt-24 rounded-[10px] bg-white flex flex-col items-center shadow-md z-100',
        'md:max-w-235 md:mx-auto md:mt-0 md:h-150 md:rounded-[15px] md:flex-row',
        'lg:mx-auto',
      )}
    >
      <Stepper currentStep={step} />
      <div
        className={cn(
          'h-full px-6 py-8 flex flex-col bg-white z-100 rounded-[10px]',
          'md:flex-1 md:pl-10.5 md:pr-14.5 md:pt-10.75 md:pb-8',
          'lg:pt-11.75 lg:pb-12 lg:pl-21 lg:pr-25',
        )}
      >
        <h1 className="text-preset2 mb-2 md:text-preset1">{title}</h1>
        <p className="text-preset3 text-grey-500 mb-6 md:mb-8 lg:mb-10">
          {description}
        </p>
        <FormProvider {...methods}>
          <form>
            <StepComponent />
          </form>
        </FormProvider>
        <FormNavigationButtons
          currentStep={step}
          handleGoBack={handleGoBack}
          handleNextStep={handleNextStep}
          isLastStep={isLastStep}
        />
      </div>
    </div>
  );
};

export { Form };

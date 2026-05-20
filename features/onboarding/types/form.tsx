import { Step1 } from '../components/steps/step-1';
import { Step2 } from '../components/steps/step-2/step-2';
import { Step3 } from '../components/steps/step-3';
import { Step4 } from '../components/steps/step-4';

export type StepKey = 'step-1' | 'step-2' | 'step-3' | 'step-4';

type Step = {
  title: string;
  description: string;
  component: React.ReactNode;
  stepperTitle: string;
};

export const STEPS: Record<StepKey, Step> = {
  'step-1': {
    title: 'Personal info',
    stepperTitle: 'Your info',
    description: 'Please provide your name, email address, and phone number.',
    component: <Step1 />,
  },
  'step-2': {
    title: 'Select your plan',
    stepperTitle: 'Select plan',
    description: 'You have the option of monthly or yearly billing.',
    component: <Step2 />,
  },
  'step-3': {
    title: 'Pick add-ons',
    stepperTitle: 'Add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    component: <Step3 />,
  },
  'step-4': {
    title: 'Finishing up',
    stepperTitle: 'Summary',
    description: 'Double-check everything looks OK before confirming.',
    component: <Step4 />,
  },
};

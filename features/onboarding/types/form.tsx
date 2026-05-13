import { Step1 } from '../components/steps/step-1';
import { Step2 } from '../components/steps/step-2';

export type StepKey = 'your-info' | 'select-plan' | 'add-ons' | 'summary';

type Step = {
  title: string;
  description: string;
  component: React.ReactNode;
};

export const STEPS: Record<StepKey, Step> = {
  'your-info': {
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    component: <Step1 />,
  },
  'select-plan': {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    component: <Step2 />,
  },
  'add-ons': {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    component: <Step1 />,
  },
  summary: {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    component: <Step1 />,
  },
};

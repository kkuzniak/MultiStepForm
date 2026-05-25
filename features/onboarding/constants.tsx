import { Step1 } from './components/steps/step-1';
import { Step2 } from './components/steps/step-2/step-2';
import { Step3 } from './components/steps/step-3/step-3';
import { Step4 } from './components/steps/step-4/step-4';
import { Plan, PlanType, Step } from './types';

export const STEPS: Step[] = [
  {
    title: 'Personal info',
    stepperTitle: 'Your info',
    description: 'Please provide your name, email address, and phone number.',
    component: <Step1 />,
  },
  {
    title: 'Select your plan',
    stepperTitle: 'Select plan',
    description: 'You have the option of monthly or yearly billing.',
    component: <Step2 />,
  },
  {
    title: 'Pick add-ons',
    stepperTitle: 'Add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    component: <Step3 />,
  },
  {
    title: 'Finishing up',
    stepperTitle: 'Summary',
    description: 'Double-check everything looks OK before confirming.',
    component: <Step4 />,
  },
];

export const PLANS: Record<PlanType, Omit<Plan, 'type'>> = {
  arcade: {
    name: 'Arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  advanced: {
    name: 'Advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  pro: {
    name: 'Pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
};

export const ADDONS = [
  {
    id: 'online-service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 'larger-storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 'custom-profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export type Step = {
  title: string;
  description: string;
  component: React.ReactNode;
  stepperTitle: string;
};

export type PlanType = 'arcade' | 'advanced' | 'pro';

export type Plan = {
  name: string;
  type: PlanType;
  price: {
    monthly: number;
    yearly: number;
  };
};

export type Addon = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

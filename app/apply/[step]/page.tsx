import { Form } from '@/features/onboarding/components/form/form';

type Props = {
  params: Promise<{ step: string }>;
};

export default async function FormStep({ params }: Props) {
  const { step } = await params;

  return <Form step={Number(step)} />;
}

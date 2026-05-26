import { redirect } from 'next/navigation';
import { Form } from '@/features/onboarding/components/form/form';
import { getServerFormData } from '@/features/onboarding/lib/form-store/server';

type Props = {
  params: Promise<{ step: string }>;
};

const RESTRICTED_STEPS = ['2', '3', '4'];

export default async function FormStep({ params }: Props) {
  const { step } = await params;

  if (RESTRICTED_STEPS.includes(step)) {
    const formData = await getServerFormData();

    if (!formData?.fullName || !formData?.email || !formData?.phone) {
      redirect('/apply/1');
    }
  }

  return <Form step={Number(step)} />;
}

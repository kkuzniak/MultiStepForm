import { redirect } from 'next/navigation';
import { SuccessContent } from '@/features/onboarding/components/success-content';
import { getServerFormData } from '@/features/onboarding/lib/form-store/server';

export default async function SuccessPage() {
  const formData = await getServerFormData();

  if (!formData?.success) {
    redirect('/apply/1');
  }

  return <SuccessContent />;
}

import z from 'zod';

export const onboardingSchema = z.object({
  fullName: z.string().min(1, { message: 'This field is required' }),
  email: z.string().email({ message: 'This field is required' }),
  phone: z.string().min(1, { message: 'This field is required' }),
  isYearly: z.boolean(),
  plan: z.enum(['arcade', 'advanced', 'pro']),
  addons: z.array(
    z.enum(['online-service', 'larger-storage', 'custom-profile']),
  ),
});

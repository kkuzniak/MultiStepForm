import { cookies } from 'next/headers';
import { FORM_DATA_COOKIE } from './constants';

type FormData = Promise<Record<string, unknown> | null>;

export async function getServerFormData(): FormData {
  const cookieStore = await cookies();
  const value = cookieStore.get(FORM_DATA_COOKIE)?.value;

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

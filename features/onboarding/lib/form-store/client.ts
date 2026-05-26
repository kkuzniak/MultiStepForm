import { deleteCookie, getCookie, setCookie } from '@/lib/cookies';
import { FORM_DATA_COOKIE, FORM_DATA_COOKIE_MAX_AGE } from './constants';

export const getFormData = (): Record<string, unknown> => {
  const value = getCookie(FORM_DATA_COOKIE);

  if (!value) {
    return {};
  }

  try {
    return JSON.parse(value) as Record<string, unknown>;
  } catch {
    return {};
  }
};

export const saveFormData = (data: Record<string, unknown>) => {
  if (typeof document === 'undefined') {
    return;
  }

  const existing = getFormData();
  const updated = { ...existing, ...data };

  setCookie(
    FORM_DATA_COOKIE,
    JSON.stringify(updated),
    FORM_DATA_COOKIE_MAX_AGE,
  );
};

export const clearFormData = () => {
  if (typeof document === 'undefined') {
    return;
  }

  deleteCookie(FORM_DATA_COOKIE);
};

export const getFormData = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem('formData') || '{}');
  }

  return null;
};

export const saveFormData = (data: Record<string, any>) => {
  const existing = getFormData();
  const updated = { ...existing, ...data };

  sessionStorage.setItem('formData', JSON.stringify(updated));
};

export const clearFormData = () => {
  sessionStorage.removeItem('formData');
};

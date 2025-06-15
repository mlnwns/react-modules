export const cleanNumeric = (value: string): string => value.replace(/\D/g, "");

export const removeNonDigits = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const removeHyphens = (value: string): string => {
  return value.replace(/-/g, "");
};

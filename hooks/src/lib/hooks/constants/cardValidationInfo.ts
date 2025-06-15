export const CARD_INPUT = {
  NUMBER_INPUTS: 4,
  EXPIRY_DATE_INPUTS: 2,
  MAX_LENGTH: {
    CARD: 4,
    EXPIRE_DATE: 2,
    CVC: 3,
    PASSWORD: 2,
  },
} as const;

export const EXPIRATION = {
  MONTH: {
    MIN: 1,
    MAX: 12,
  },
  YEAR: {
    CURRENT: new Date().getFullYear() % 100,
  },
} as const;

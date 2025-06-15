import { EXPIRATION } from "../constants/cardValidationInfo";

const validator = {
  isNotNumber(number: string) {
    if (isNaN(Number(number))) return true;
    return false;
  },

  hascorrectLength(number: string, length: number) {
    if (number.length === length) return true;
    return false;
  },

  isValidMonth(month: string) {
    if (
      Number(month) >= EXPIRATION.MONTH.MIN &&
      Number(month) <= EXPIRATION.MONTH.MAX
    )
      return true;
    return false;
  },

  isValidYear(year: string) {
    if (Number(year) >= EXPIRATION.YEAR.CURRENT) return true;
    return false;
  },
};

export default validator;

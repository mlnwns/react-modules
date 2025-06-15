import validator from "./validate";
import ERROR_MESSAGE from "../constants/errorMessage";

export const validateNumericInput = (
  value: string,
  maxLength: number,
  extraValidations?: Array<{
    condition: (value: string) => boolean;
    errorMessage: string;
  }>
): { isValid: boolean; errorMessage: string } => {
  if (validator.isNotNumber(value)) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGE.REQUIRE.NUMBER,
    };
  }

  if (!validator.hascorrectLength(value, maxLength)) {
    return {
      isValid: false,
      errorMessage: `숫자 ${maxLength}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`,
    };
  }

  if (extraValidations) {
    for (const validation of extraValidations) {
      if (!validation.condition(value)) {
        return {
          isValid: false,
          errorMessage: validation.errorMessage,
        };
      }
    }
  }

  return { isValid: true, errorMessage: "" };
};

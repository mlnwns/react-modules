import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";
import { validateNumericInput } from "../utils/inputValidation";

type ExpiryDateInputState = {
  value: string;
  isValid: boolean;
};

interface Props {
  expiryDateState: ExpiryDateInputState[];
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const useExpiryDateInput = (): Props => {
  const [expiryDateState, setExpiryDateState] = useState<
    ExpiryDateInputState[]
  >(
    Array.from({ length: CARD_INPUT.EXPIRY_DATE_INPUTS }, () => ({
      value: "",
      isValid: true,
    }))
  );

  const [errorMessage, setErrorMessage] = useState("");

  const validateExpiryDate = (value: string, index: number) => {
    const extraValidations = [];

    if (index === 0) {
      extraValidations.push({
        condition: (value: string) => validator.isValidMonth(value),
        errorMessage: ERROR_MESSAGE.EXPIRY.INVALID_MONTH,
      });
    } else if (index === 1) {
      extraValidations.push({
        condition: (value: string) => validator.isValidYear(value),
        errorMessage: ERROR_MESSAGE.EXPIRY.INVALID_YEAR,
      });
    }

    return validateNumericInput(
      value,
      CARD_INPUT.MAX_LENGTH.EXPIRE_DATE,
      extraValidations
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = e.target.value;

    const { isValid, errorMessage } = validateExpiryDate(inputValue, index);

    const updatedState = expiryDateState.map((item, i) =>
      i === index ? { value: inputValue, isValid } : item
    );

    setExpiryDateState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    expiryDateState,
    errorMessage,
    handleInputChange,
  };
};

export default useExpiryDateInput;

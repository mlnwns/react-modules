import { useState, useMemo } from "react";
import { validateNumericInput } from "../utils/inputValidation";
import { CARD_BRAND_RULE } from "../useCardBrand/constants";
import { useCardBrand } from "../useCardBrand/useCardBrand";
import { formatCardNumber } from "./utils/cardFormatter";
import { removeNonDigits } from "../utils/inputUtils";
import { useFormattedCardNumber } from "./hooks/useFormattedCardNumber";

type CardNumberState = {
  value: string;
  isValid: boolean;
};

const useCardNumberInput = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const cardBrand = useCardBrand(cardNumberState.value);
  const formattedCardNumber = useFormattedCardNumber(
    cardNumberState.value,
    cardBrand
  );

  const maxLength = useMemo(() => {
    if (cardBrand && CARD_BRAND_RULE[cardBrand]) {
      return CARD_BRAND_RULE[cardBrand].length;
    }
    return 16;
  }, [cardBrand]);

  const formattedMaxLength = useMemo(() => {
    return formatCardNumber("1".repeat(maxLength), cardBrand).length;
  }, [maxLength, cardBrand]);

  const validateCardNumber = (value: string) => {
    return validateNumericInput(value, maxLength);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = removeNonDigits(e.target.value);

    const { isValid, errorMessage: validationError } =
      validateCardNumber(inputValue);

    setCardNumberState({ value: inputValue, isValid });
    setErrorMessage(validationError);
  };

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
    cardBrand,
    formattedCardNumber,
    maxLength: formattedMaxLength,
  };
};

export default useCardNumberInput;

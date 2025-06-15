import { useState } from "react";
import { validateNumericInput } from "../utils/inputValidation";

type singleState = {
  value: string;
  isValid: boolean;
};

interface Props {
  singleState: singleState;
  errorMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useSingleInput = (maxLength: number): Props => {
  const [singleState, setSingleState] = useState<singleState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validateSingleInput = (value: string) => {
    return validateNumericInput(value, maxLength);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const { isValid, errorMessage } = validateSingleInput(inputValue);

    const updatedState = { value: inputValue, isValid };

    setSingleState(updatedState);
    setErrorMessage(errorMessage);
  };

  return {
    singleState,
    errorMessage,
    handleInputChange,
  };
};

export default useSingleInput;

import { useState, useEffect } from "react";
import { formatCardNumber } from "../utils/cardFormatter";
import { CardBrand } from "../../useCardBrand/types";

export const useFormattedCardNumber = (
  cardNumber: string,
  cardBrand: CardBrand | null
) => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");

  useEffect(() => {
    const formatted = formatCardNumber(cardNumber, cardBrand);
    setFormattedCardNumber(formatted);
  }, [cardNumber, cardBrand]);

  return formattedCardNumber;
};

import { useEffect, useState } from "react";
import { CardBrand } from "./types";
import { detectCardBrand } from "./utils/detectCardBrand";

export function useCardBrand(cardNumber: string): CardBrand | null {
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);

  useEffect(() => {
    const detected = detectCardBrand(cardNumber);
    setCardBrand(detected);
  }, [cardNumber]);

  return cardBrand;
}

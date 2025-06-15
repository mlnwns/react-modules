import { CARD_BRAND_RULE } from "../../useCardBrand/constants";
import { CardBrand } from "../../useCardBrand/types";
import { removeHyphens } from "../../utils/inputUtils";

export const formatCardNumber = (
  value: string,
  brand: CardBrand | null
): string => {
  if (!value) return "";

  const cleanNumber = removeHyphens(value);

  const formatDefaultCardNumber = (value: string): string =>
    value.replace(/(.{4})/g, "$1-").replace(/-$/, "");

  if (!brand || !CARD_BRAND_RULE[brand]) {
    return formatDefaultCardNumber(cleanNumber);
  }

  const formatNumbers = [...CARD_BRAND_RULE[brand].formatNumbers];

  let currentIndex = 0;

  const segments = formatNumbers.reduce<string[]>((acc, size) => {
    if (currentIndex >= cleanNumber.length) return acc;

    const end = currentIndex + size;
    const segment = cleanNumber.slice(currentIndex, end);

    acc.push(segment);
    currentIndex = end;

    return acc;
  }, []);

  return segments.join("-");
};

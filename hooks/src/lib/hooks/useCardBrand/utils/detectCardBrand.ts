import { CARD_BRAND_RULE } from "../constants";
import type { CardBrand } from "../types";

export function detectCardBrand(cardNumber: string): CardBrand | null {
  if (!cardNumber) return null;

  const brands = Object.keys(CARD_BRAND_RULE) as CardBrand[];

  for (const brand of brands) {
    const rule = CARD_BRAND_RULE[brand];

    for (const [start, end] of rule.ranges) {
      const prefixLength = Math.max(
        start.toString().length,
        end.toString().length
      );

      if (cardNumber.length < prefixLength) continue;

      const cardPrefix = parseInt(cardNumber.slice(0, prefixLength), 10);

      if (cardPrefix >= start && cardPrefix <= end) {
        return brand;
      }
    }
  }

  return null;
}

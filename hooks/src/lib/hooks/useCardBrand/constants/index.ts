export const CARD_BRAND_RULE = {
  MasterCard: {
    ranges: [[51, 55]],
    length: 16,
    formatNumbers: [4, 4, 4, 4],
  },
  Visa: {
    ranges: [[4, 4]],
    length: 16,
    formatNumbers: [4, 4, 4, 4],
  },
  Diners: {
    ranges: [[36, 36]],
    length: 14,
    formatNumbers: [4, 6, 4],
  },
  AMEX: {
    ranges: [
      [34, 34],
      [37, 37],
    ],
    length: 15,
    formatNumbers: [4, 6, 5],
  },
  UnionPay: {
    ranges: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
    length: 16,
    formatNumbers: [4, 4, 4, 4],
  },
} as const;

import { EXPIRATION } from "./cardValidationInfo";

const ERROR_MESSAGE = {
  EXPIRY: {
    INVALID_MONTH: `${EXPIRATION.MONTH.MIN}이상 ${EXPIRATION.MONTH.MAX}이하의 숫자를 입력해주세요.`,
    INVALID_YEAR: "유효하지 않은 연도입니다.",
    BELOW_CURRENT_YEAR: "현재 연도 이상의 숫자를 입력해주세요.",
  },
  CARD_NUMBER: {
    INVALID: "유효하지 않은 카드 번호입니다.",
  },
  REQUIRE: {
    NUMBER: "숫자를 입력해주세요.",
    SPECIFIC_LENGTH: "자를 입력해주세요.",
  },
} as const;

export default ERROR_MESSAGE;

import { useCardNumberInput, useExpiryDateInput, useSingleInput } from "./lib";
import { CARD_INPUT } from "./lib/hooks/constants/cardValidationInfo";

const App = () => {
  const {
    cardNumberState,
    errorMessage: cardError,
    handleInputChange: handleCardInputChange,
    cardBrand,
    formattedCardNumber,
    maxLength,
  } = useCardNumberInput();

  const {
    expiryDateState,
    errorMessage: expiryError,
    handleInputChange: handleExpiryInputChange,
  } = useExpiryDateInput();

  const {
    singleState: cvcState,
    errorMessage: cvcError,
    handleInputChange: handleCVCInputChange,
  } = useSingleInput(CARD_INPUT.MAX_LENGTH.CVC);

  return (
    <div>
      <div>
        <h2>카드 번호</h2>
        <input
          maxLength={maxLength}
          value={formattedCardNumber}
          onChange={handleCardInputChange}
          style={{
            borderColor: cardNumberState.isValid ? "black" : "red",
          }}
          placeholder="카드 번호 입력"
        />
        {!cardNumberState.isValid && (
          <p style={{ color: "red" }}>{cardError}</p>
        )}
      </div>
      <div>
        <h2>만료일 (MM / YY)</h2>
        {expiryDateState.map((input, index) => (
          <input
            key={index}
            type="text"
            maxLength={CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}
            value={input.value}
            onChange={(e) => handleExpiryInputChange(e, index)}
            style={{
              borderColor: input.isValid ? "black" : "red",
              marginRight: "8px",
            }}
            placeholder={index === 0 ? "MM" : "YY"}
          />
        ))}
        {!expiryDateState.every((input) => input.isValid) && (
          <p style={{ color: "red" }}>{expiryError}</p>
        )}
      </div>
      <div>
        <h2>CVC</h2>
        <input
          type="text"
          maxLength={CARD_INPUT.MAX_LENGTH.CVC}
          value={cvcState.value}
          onChange={handleCVCInputChange}
          style={{
            borderColor: cvcState.isValid ? "black" : "red",
          }}
        />
        {!cvcState.isValid && <p style={{ color: "red" }}>{cvcError}</p>}
      </div>
      <p>카드 브랜드: {cardBrand ?? "브랜드 없음"}</p>
    </div>
  );
};

export default App;

# @mlnwns/hooks

## 설치 방법

```bash
# npm 사용
npm install @mlnwns/hooks

# yarn 사용
yarn add @mlnwns/hooks

# pnpm 사용
pnpm add @mlnwns/hooks
```

## 제공되는 훅 목록

### 1. useCardNumberInput

카드 번호 입력을 위한 커스텀 훅입니다. 카드 번호를 자동으로 포맷팅하고 카드 브랜
드를 감지합니다.

```ts
const {
  cardNumberState,
  errorMessage,
  handleInputChange,
  cardBrand,
  formattedCardNumber,
  maxLength,
} = useCardNumberInput();
```

### 2. useExpiryDateInput

카드 만료일(월/년) 입력을 위한 커스텀 훅입니다.

```ts
const { expiryDateState, errorMessage, handleInputChange } =
  useExpiryDateInput();
```

### 3. useSingleInput

CVV, 비밀번호 등 단일 입력 필드를 위한 커스텀 훅입니다.

```ts
const { singleState, errorMessage, handleInputChange } = useSingleInput(3); // CVC(3자리)
```

### 4. useCardBrand

카드 번호를 기반으로 카드 브랜드를 감지하는 커스텀 훅입니다.

```ts
const cardBrand = useCardBrand([cardNumberPart]);
```

## 사용 예시

### 카드 번호(useCardNumberInput) 입력 예시

```jsx
import React from "react";
import { useCardNumberInput } from "@mlnwns/hooks";

const CardNumberForm = () => {
  const {
    cardNumberState,
    errorMessage,
    handleInputChange,
    cardBrand,
    formattedCardNumber,
    maxLength,
  } = useCardNumberInput();

  const isCardNumberValid =
    cardNumberState.isValid && cardNumberState.value.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCardNumberValid) {
      console.log("카드 번호:", cardNumberState.value);
      console.log("카드 브랜드:", cardBrand);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>카드 번호</label>
        <div>
          <input
            type="text"
            maxLength={maxLength}
            value={formattedCardNumber}
            onChange={handleInputChange}
            placeholder="0000 0000 0000 0000"
          />
          {cardBrand && <span>카드 유형: {cardBrand}</span>}
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <button type="submit" disabled={!isCardNumberValid}>
        확인
      </button>
    </form>
  );
};
```

### 만료일 (useExpiryDateInput) 입력 예시

```jsx
import React from "react";
import { useExpiryDateInput } from "@mlnwns/hooks";

const ExpiryDateForm = () => {
  const { expiryDateState, errorMessage, handleInputChange } =
    useExpiryDateInput();

  const isExpiryDateValid = expiryDateState.every(
    (field) => field.isValid && field.value.length > 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isExpiryDateValid) {
      const [month, year] = expiryDateState.map((field) => field.value);
      console.log("만료일:", `${month}/${year}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>만료일</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            value={expiryDateState[0].value}
            onChange={(e) => handleInputChange(e, 0)}
          />
          <span>/</span>
          <input
            type="text"
            placeholder="YY"
            maxLength={2}
            value={expiryDateState[1].value}
            onChange={(e) => handleInputChange(e, 1)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <button type="submit" disabled={!isExpiryDateValid}>
        확인
      </button>
    </form>
  );
};
```

### 입력창 한 칸(useSingleInput) 입력 예시

```jsx
import React from "react";
import { useSingleInput } from "@mlnwns/hooks";

const CVCForm = () => {
  const { singleState, errorMessage, handleInputChange } = useSingleInput(3);

  const isCVCValid = singleState.isValid && singleState.value.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCVCValid) {
      console.log("CVC:", singleState.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>보안 코드 (CVC)</label>
        <input
          type="password"
          maxLength={3}
          value={singleState.value}
          onChange={handleInputChange}
        />
        <small>카드 뒷면의 3자리 숫자를 입력하세요</small>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <button type="submit" disabled={!isCVCValid}>
        확인
      </button>
    </form>
  );
};
```

### 카드 브랜드 감지(useCardBrand) 사용 예시

```jsx
import React, { useState } from "react";
import { useCardBrand } from "@mlnwns/hooks";

const CardBrandDetector = () => {
  const [cardNumber, setCardNumber] = useState("");
  const cardBrand = useCardBrand(cardNumber);

  const handleInputChange = (e) => {
    setCardNumber(e.target.value);
  };

  return (
    <div>
      <label>카드 번호 입력</label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleInputChange}
        placeholder="카드 번호를 입력하세요"
      />
      {cardBrand && <p>감지된 카드 브랜드: {cardBrand}</p>}
    </div>
  );
};
```

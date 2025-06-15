import { renderHook, act } from "@testing-library/react";
import useExpiryDateInput from "./useExpiryDateInput";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";

describe("useExpiryDateInput", () => {
  it("초기 상태는 빈 문자열 배열이며 유효함", () => {
    const { result } = renderHook(() => useExpiryDateInput());

    expect(result.current.expiryDateState).toEqual([
      { value: "", isValid: true },
      { value: "", isValid: true },
    ]);

    expect(result.current.errorMessage).toBe("");
  });

  it("모든 인풋이 숫자 2자리일 때 유효성 통과", async () => {
    const { result } = renderHook(() => useExpiryDateInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "12" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });
    act(() => {
      result.current.handleInputChange(
        { target: { value: "27" } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });

    expect(result.current.expiryDateState).toEqual([
      { value: "12", isValid: true },
      { value: "27", isValid: true },
    ]);
    expect(result.current.errorMessage).toBe("");
  });
});

it("숫자가 아닌 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useExpiryDateInput());

  act(() => {
    result.current.handleInputChange(
      { target: { value: "ab" } } as React.ChangeEvent<HTMLInputElement>,
      0
    );
  });

  expect(result.current.expiryDateState[0].isValid).toBe(false);
  expect(result.current.errorMessage).toBe(ERROR_MESSAGE.REQUIRE.NUMBER);
});

it("길이가 부족한 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useExpiryDateInput());

  act(() => {
    result.current.handleInputChange(
      { target: { value: "1" } } as React.ChangeEvent<HTMLInputElement>,
      0
    );
  });

  expect(result.current.expiryDateState[0].isValid).toBe(false);
  expect(result.current.errorMessage).toBe(
    `숫자 ${CARD_INPUT.MAX_LENGTH.EXPIRE_DATE}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
  );
});

import { renderHook, act } from "@testing-library/react";
import useCardNumberInput from "./useCardNumberInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useCardNumberInput", () => {
  it("초기 상태는 빈 문자열이며 유효함", () => {
    const { result } = renderHook(() => useCardNumberInput());

    expect(result.current.cardNumberState).toEqual({
      value: "",
      isValid: true,
    });
    expect(result.current.errorMessage).toBe("");
  });

  it("숫자만 입력되면 유효함", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleInputChange({
        target: { value: "1234567812345678" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumberState.isValid).toBe(true);
    expect(result.current.cardNumberState.value).toBe("1234567812345678");
    expect(result.current.errorMessage).toBe("");
  });
  it("숫자가 아닌 값이 포함되면 유효하지 않음", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleInputChange({
        target: { value: "12a456" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumberState.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(
      `숫자 16${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
    );
  });

  it("길이가 부족하면 유효하지 않음", () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleInputChange({
        target: { value: "1234" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumberState.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(
      `숫자 16${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
    );
  });
});

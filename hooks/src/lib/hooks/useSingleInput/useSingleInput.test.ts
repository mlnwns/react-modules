import { renderHook, act } from "@testing-library/react";
import useSingleInput from "./useSingleInput";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";

describe("useSingleInput", () => {
  it("초기 상태는 빈 문자열 배열이며 유효함", () => {
    const { result } = renderHook(() => useSingleInput(3));

    expect(result.current.singleState).toEqual({ value: "", isValid: true });
    expect(result.current.errorMessage).toBe("");
  });

  it("모든 인풋이 숫자 3자리일 때 유효성 통과", async () => {
    const { result } = renderHook(() => useSingleInput(3));

    act(() => {
      result.current.handleInputChange({
        target: { value: "123" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.singleState).toEqual({ value: "123", isValid: true });
    expect(result.current.errorMessage).toBe("");
  });
});

it("숫자가 아닌 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useSingleInput(3));

  act(() => {
    result.current.handleInputChange({
      target: { value: "ab" },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.singleState.isValid).toBe(false);
  expect(result.current.errorMessage).toBe(ERROR_MESSAGE.REQUIRE.NUMBER);
});

it("길이가 부족한 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useSingleInput(3));

  act(() => {
    result.current.handleInputChange({
      target: { value: "1" },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.singleState.isValid).toBe(false);
  expect(result.current.errorMessage).toBe(
    `숫자 ${CARD_INPUT.MAX_LENGTH.CVC}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
  );
});

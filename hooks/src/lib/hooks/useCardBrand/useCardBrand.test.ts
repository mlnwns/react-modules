import { renderHook } from "@testing-library/react";
import { useCardBrand } from "./useCardBrand";
import { detectCardBrand } from "./utils/detectCardBrand";

jest.mock("./utils/detectCardBrand", () => ({
  detectCardBrand: jest.fn(),
}));

const brandCases = [
  { input: "4111", brand: "Visa" },
  { input: "5111", brand: "MasterCard" },
  { input: "3411", brand: "AMEX" },
  { input: "3611", brand: "Diners" },
  { input: "6221261111111111", brand: "UnionPay" },
];

describe("useCardBrand", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("초기 상태에서는 null을 반환해야 함", () => {
    (detectCardBrand as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useCardBrand(""));

    expect(result.current).toBeNull();
  });

  it.each(brandCases)(
    "$brand 카드 번호를 감지하면 $brand를 반환해야 함",
    ({ input, brand }) => {
      (detectCardBrand as jest.Mock).mockReturnValue(brand);

      const { result } = renderHook(() => useCardBrand(input));

      expect(result.current).toBe(brand);
    }
  );

  it("카드 번호가 변경되면 브랜드도 업데이트되어야 함", () => {
    (detectCardBrand as jest.Mock)
      .mockReturnValueOnce("Visa")
      .mockReturnValueOnce("MasterCard");

    const { result, rerender } = renderHook(
      (cardNumber) => useCardBrand(cardNumber),
      { initialProps: "4111" }
    );

    expect(result.current).toBe("Visa");

    rerender("5111");

    expect(result.current).toBe("MasterCard");
  });

  it("지원되지 않는 카드 번호 형식인 경우 null을 반환해야 함", () => {
    (detectCardBrand as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useCardBrand("1234"));

    expect(result.current).toBeNull();
  });
});

import { benefit } from "../consts";
import { increaseBenefit, reduceBenefit } from "./index";

describe("Helpers", () => {
  it("should not exceed MAX_BENEFIT value", () => {
    expect(increaseBenefit(benefit.MAX_BENEFIT)).toBe(benefit.MAX_BENEFIT);
    expect(increaseBenefit(benefit.MAX_BENEFIT - 1)).toBe(benefit.MAX_BENEFIT);
    expect(increaseBenefit(benefit.MAX_BENEFIT, 10)).toBe(benefit.MAX_BENEFIT);
  });

  it("should not go below MIN_BENEFIT value", () => {
    expect(reduceBenefit(benefit.MIN_BENEFIT)).toBe(benefit.MIN_BENEFIT);
    expect(reduceBenefit(benefit.MIN_BENEFIT + 1)).toBe(benefit.MIN_BENEFIT);
    expect(reduceBenefit(benefit.MIN_BENEFIT, 10)).toBe(benefit.MIN_BENEFIT);
  });
});

import { Drug } from "../../pharmacy";
import { fervexRule } from "./fervex";

describe("Fervex", () => {
  it("should increase benefit by 2 when expiresIn < 11", () => {
    const drug = new Drug("Fervex", 10, 10);
    const result = fervexRule(drug);
    expect(result.benefit).toBe(12);
    expect(result.expiresIn).toBe(9);
  });

  it("should increase benefit by 3 when expiresIn < 6", () => {
    const drug = new Drug("Fervex", 5, 10);
    const result = fervexRule(drug);
    expect(result.benefit).toBe(13);
    expect(result.expiresIn).toBe(4);
  });

  it("should increase benefit by 1 when expiresIn is equal to 11", () => {
    const drug = new Drug("Fervex", 11, 10);
    const result = fervexRule(drug);
    expect(result.benefit).toBe(11);
    expect(result.expiresIn).toBe(10);
  });

  it("should increase benefit by 2 when expiresIn is equal to 6", () => {
    const drug = new Drug("Fervex", 6, 10);
    const result = fervexRule(drug);
    expect(result.benefit).toBe(12);
    expect(result.expiresIn).toBe(5);
  });
});

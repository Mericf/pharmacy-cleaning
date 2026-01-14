import { Drug } from "../classes/Drug";
import { Pharmacy } from "../classes/Pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("should handle empty pharmacy", () => {
    const pharmacy = new Pharmacy([]);
    const result = pharmacy.updateBenefitValue();
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it("should handle benefit above MAX_BENEFIT (clamped)", () => {
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 5, 60)]);
    const result = pharmacy.updateBenefitValue();
    expect(result[0].benefit).toBeLessThanOrEqual(50);
  });
});

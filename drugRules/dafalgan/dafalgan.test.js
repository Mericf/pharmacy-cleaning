import { Drug } from "../../pharmacy";
import { dafalganRule } from "./dafalgan";

describe("Dafalgan", () => {
  it("degrades twice as fast as normal before expiry", () => {
    const drug = new Drug("Dafalgan", 1, 10);
    const result = dafalganRule(drug);
    expect(result).toEqual(new Drug("Dafalgan", 0, 8));
  });

  it("degrades twice as fast as normal after expiry", () => {
    const drug = new Drug("Dafalgan", 0, 10);
    const result = dafalganRule(drug);
    expect(result).toEqual(new Drug("Dafalgan", -1, 6));
  });
});

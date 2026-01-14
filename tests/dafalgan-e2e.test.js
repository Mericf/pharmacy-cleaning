import { drugsWithDafalgan } from "../drugs";
import { Pharmacy } from "../pharmacy";

describe("Dafalgan", () => {
  it("devrait dégrader Dafalgan 2x plus vite qu'un médicament normal", () => {
    const pharmacy = new Pharmacy(drugsWithDafalgan);
    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
    }

    const dafalganResults = log.map((day) =>
      day.find((drug) => drug.name === "Dafalgan"),
    );

    expect(dafalganResults[0].benefit).toBe(3);
    expect(dafalganResults[0].expiresIn).toBe(9);
    expect(dafalganResults[1].benefit).toBe(1);
    expect(dafalganResults[1].expiresIn).toBe(8);
    expect(dafalganResults[2].benefit).toBe(0);
    expect(dafalganResults[29].benefit).toBe(0);
  });
});

import fs from "fs";
import path from "path";
import { drugs } from "../data/drugs";
import { Pharmacy } from "../classes/Pharmacy";

describe("No regression test", () => {
  it("should produce the same output as the reference output.json (non-regression test)", () => {
    const outputFilePath = path.join(process.cwd(), "output.json");
    const outputFileValue = JSON.parse(fs.readFileSync(outputFilePath, "utf8"));

    const pharmacy = new Pharmacy(drugs);
    const log = [];
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
    }
    const simulationRsult = { result: log };
    expect(simulationRsult).toEqual(outputFileValue);
  });
});

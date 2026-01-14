import { dailyRule } from "./drugRules";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    Object.freeze(this);
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => dailyRule(drug));
    return [...this.drugs];
  }
}

import { normalDrugRule } from "./normal";

export const DRUG_RULE_MAP = {};

export const getDailyRule = (drugName) =>
  DRUG_RULE_MAP[drugName] ?? normalDrugRule;

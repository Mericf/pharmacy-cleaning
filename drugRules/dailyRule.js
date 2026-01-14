import { getDailyRule } from "./drugRulesMap";

export const dailyRule = (drug) => {
  const rule = getDailyRule(drug.name);
  rule(drug);
};

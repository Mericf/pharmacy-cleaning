import { getDailyRule } from "./drugRuleMap";

export const dailyRule = (drug) => {
  const rule = getDailyRule(drug.name);
  rule(drug);
};

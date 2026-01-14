import { benefit, rules } from "../consts";

export const increaseBenefit = (
  currentBenefit,
  amount = rules.DEFAULT_INCREASE_AMOUNT,
) => {
  return Math.min(benefit.MAX_BENEFIT, currentBenefit + amount);
};

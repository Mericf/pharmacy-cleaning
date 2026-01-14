import { benefit, rules } from "../consts";

export const reduceBenefit = (
  currentBenefit,
  amount = rules.DEFAULT_REDUCE_AMOUNT,
) => {
  return Math.max(benefit.MIN_BENEFIT, currentBenefit - amount);
};

import { benefit, rules } from "../consts";

// augmente drug benefit
export const increaseBenefit = (
  drug,
  amount = rules.DEFAULT_INCREASE_AMOUNT,
) => {
  drug.benefit = Math.min(benefit.MAX_BENEFIT, drug.benefit + amount);
};

import { benefit, rules } from "../consts";

// réduit drug benefit
export const reduceBenefit = (drug, amount = rules.DEFAULT_REDUCE_AMOUNT) => {
  drug.benefit = Math.max(benefit.MIN_BENEFIT, drug.benefit - amount);
};

import { reduceBenefit, reduceExpiresIn, isExpired } from "./helpers";
import { benefit, rules } from "./consts";

/*
Normal :
- réduit benefit de 1
- réduit expiresIn de 1
- réduit benefit de 2 si expiré
*/

export const normalRule = (drug) => {
  if (drug.benefit > benefit.MIN_BENEFIT)
    reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT);
  reduceExpiresIn(drug);
  if (isExpired(drug)) reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT);
};

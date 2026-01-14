import { rules } from "./consts";
import { isExpired, reduceBenefit, reduceExpiresIn } from "./helpers";

/*
Normal :
- réduit benefit de 1
- réduit expiresIn de 1
- réduit benefit de 2 si expiré
*/

export const normalRule = (drug) => {
  reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT);
  reduceExpiresIn(drug);
  if (isExpired(drug)) reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT);
};

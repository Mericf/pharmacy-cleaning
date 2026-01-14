import { rules } from "./consts";
import { isExpired, reduceBenefit, reduceExpiresIn } from "./helpers";

/*
Dafalgan :
- se dégrade 2x plus vite qu'un normal = réduit benefit de 2 avant expiration
- réduit expiresIn de 1
- réduit benefit de 2 supplémentaires si expiré
*/

export const dafalganRule = (drug) => {
  reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT * 2);
  reduceExpiresIn(drug);
  if (isExpired(drug)) {
    reduceBenefit(drug, rules.DEFAULT_REDUCE_AMOUNT * 2);
  }
};

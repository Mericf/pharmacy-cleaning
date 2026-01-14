import { increaseBenefit, reduceExpiresIn, isExpired } from "./helpers";
import { expiresIn, rules } from "./consts";

/*
Fervex :
- +1 avant expiration
- +1 supplémentaire si expiresIn < 11
- +1 supplémentaire si expiresIn < 6
- réduit expiresIn de 1
- réduit benefit à 0 si expiré
*/

export const fervexRule = (drug) => {
  increaseBenefit(drug, rules.DEFAULT_INCREASE_AMOUNT);
  if (drug.expiresIn < expiresIn.FERVEX_LIMIT_HIGH)
    increaseBenefit(drug, rules.DEFAULT_INCREASE_AMOUNT);
  if (drug.expiresIn < expiresIn.FERVEX_LIMIT_LOW)
    increaseBenefit(drug, rules.DEFAULT_INCREASE_AMOUNT);

  reduceExpiresIn(drug);

  if (isExpired(drug)) {
    drug.benefit = rules.EXPIRED_BENEFIT_VALUE;
  }
};

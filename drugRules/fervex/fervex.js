import { Drug } from "../../pharmacy";
import { expiresIn, rules } from "../consts";
import { increaseBenefit, isExpired, reduceExpiresIn } from "../helpers";

/*
Fervex :
- +1 avant expiration
- +1 supplémentaire si expiresIn < 11
- +1 supplémentaire si expiresIn < 6
- réduit expiresIn de 1
- réduit benefit à 0 si expiré
*/

export const fervexRule = (drug) => {
  let newBenefit = increaseBenefit(drug.benefit, rules.DEFAULT_INCREASE_AMOUNT);

  if (drug.expiresIn < expiresIn.FERVEX_LIMIT_HIGH) {
    newBenefit = increaseBenefit(newBenefit, rules.DEFAULT_INCREASE_AMOUNT);
  }
  if (drug.expiresIn < expiresIn.FERVEX_LIMIT_LOW) {
    newBenefit = increaseBenefit(newBenefit, rules.DEFAULT_INCREASE_AMOUNT);
  }

  const newExpiresIn = reduceExpiresIn(drug.expiresIn);

  if (isExpired(newExpiresIn)) {
    newBenefit = rules.EXPIRED_BENEFIT_VALUE;
  }

  return new Drug(drug.name, newExpiresIn, newBenefit);
};

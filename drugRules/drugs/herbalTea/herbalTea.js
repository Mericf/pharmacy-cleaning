import { Drug } from "../../../classes/Drug";
import { rules } from "../../consts";
import { increaseBenefit, isExpired, reduceExpiresIn } from "../../helpers";

/*
Herbal Tea :
- +1 avant expiration
- décrément expiresIn
- +1 supplémentaire si expiré
*/
export const herbalTeaRule = (drug) => {
  let newBenefit = increaseBenefit(drug.benefit, rules.DEFAULT_INCREASE_AMOUNT);
  const newExpiresIn = reduceExpiresIn(drug.expiresIn);

  if (isExpired(newExpiresIn)) {
    newBenefit = increaseBenefit(newBenefit, rules.DEFAULT_INCREASE_AMOUNT);
  }

  return new Drug(drug.name, newExpiresIn, newBenefit);
};

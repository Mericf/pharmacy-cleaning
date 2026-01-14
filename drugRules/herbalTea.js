import { increaseBenefit, reduceExpiresIn, isExpired } from "./helpers";
import { rules } from "./consts";

/*
Herbal Tea :
- +1 avant expiration
- décrément expiresIn
- +1 supplémentaire si expiré
*/
export const herbalTeaRule = (drug) => {
  increaseBenefit(drug, rules.DEFAULT_INCREASE_AMOUNT);
  reduceExpiresIn(drug);

  if (isExpired(drug)) {
    increaseBenefit(drug, rules.DEFAULT_INCREASE_AMOUNT);
  }
};

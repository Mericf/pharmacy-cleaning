import { increaseBenefit, isExpired, reduceExpiresIn } from "./helpers";

/*
Herbal Tea :
- +1 avant expiration
- décrément expiresIn
- +1 supplémentaire si expiré
*/
export const herbalTeaRule = (drug) => {
  increaseBenefit(drug, 1);
  reduceExpiresIn(drug);

  if (isExpired(drug)) {
    increaseBenefit(drug, 1);
  }
};

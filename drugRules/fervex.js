import { increaseBenefit, isExpired, reduceExpiresIn } from "./helpers";

/*
Fervex :
- +1 avant expiration
- +1 supplémentaire si expiresIn < 11
- +1 supplémentaire si expiresIn < 6
- réduit expiresIn de 1
- réduit benefit à 0 si expiré
*/

export const fervexRule = (drug) => {
  increaseBenefit(drug, 1);
  if (drug.expiresIn < 11) increaseBenefit(drug, 1);
  if (drug.expiresIn < 6) increaseBenefit(drug, 1);

  reduceExpiresIn(drug);

  if (isExpired(drug)) {
    drug.benefit = 0;
  }
};

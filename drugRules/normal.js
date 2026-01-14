import { isExpired, reduceBenefit, reduceExpiresIn } from "./helpers";

/*
Normal :
- réduit benefit de 1
- réduit expiresIn de 1
- réduit benefit de 2 si expiré
*/

export const normalDrugRule = (drug) => {
  if (drug.benefit > 0) reduceBenefit(drug, 1);
  reduceExpiresIn(drug);
  if (isExpired(drug)) reduceBenefit(drug, 1);
};

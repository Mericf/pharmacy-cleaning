import { reduceBenefit, reduceExpiresIn } from "./helpers";

export const normalDrugRule = (drug) => {
  if (drug.benefit > 0) reduceBenefit(drug, 1);
  reduceExpiresIn(drug);
  if (drug.expiresIn < 0 && drug.benefit > 0) reduceBenefit(drug, 1);
};

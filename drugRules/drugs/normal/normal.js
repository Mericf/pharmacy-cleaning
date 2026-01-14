import { Drug } from "../../../classes/Drug";
import { rules } from "../../consts";
import { isExpired, reduceBenefit, reduceExpiresIn } from "../../helpers";

/*
Normal :
- réduit benefit de 1
- réduit expiresIn de 1
- réduit benefit de 2 si expiré
*/

export const normalRule = (drug) => {
  let newBenefit = reduceBenefit(drug.benefit, rules.DEFAULT_REDUCE_AMOUNT);
  const newExpiresIn = reduceExpiresIn(drug.expiresIn);

  if (isExpired(newExpiresIn)) {
    newBenefit = reduceBenefit(newBenefit, rules.DEFAULT_REDUCE_AMOUNT);
  }

  return new Drug(drug.name, newExpiresIn, newBenefit);
};

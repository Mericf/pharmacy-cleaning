import { Drug } from "../../../classes/Drug";
import { rules } from "../../consts";
import { isExpired, reduceBenefit, reduceExpiresIn } from "../../helpers";

/*
Dafalgan :
- se dégrade 2x plus vite qu'un normal
- réduit benefit de 2 avant expiration
- réduit expiresIn de 1
- réduit benefit de 2 supplémentaires si expiré
*/

/**
 * @param {Drug} drug - Le médicament (Dafalgan)
 * @returns {Drug} Nouveau objet médicament
 */
export const dafalganRule = (drug) => {
  let newBenefit = reduceBenefit(drug.benefit, rules.DEFAULT_REDUCE_AMOUNT * 2);
  const newExpiresIn = reduceExpiresIn(drug.expiresIn);

  if (isExpired(newExpiresIn)) {
    newBenefit = reduceBenefit(newBenefit, rules.DEFAULT_REDUCE_AMOUNT * 2);
  }

  return new Drug(drug.name, newExpiresIn, newBenefit);
};

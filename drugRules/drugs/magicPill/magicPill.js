import { Drug } from "../../../classes/Drug";

export const magicPillRule = (drug) => {
  return new Drug(drug.name, drug.expiresIn, drug.benefit);
};

import { rules } from "../consts";

export const reduceExpiresIn = (currentExpiresIn) => {
  return currentExpiresIn - rules.DEFAULT_EXPIRES_IN_DECREMENT;
};

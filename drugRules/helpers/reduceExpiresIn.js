import { rules } from "../consts";

// réduit drug expiration
export const reduceExpiresIn = (drug) => {
  drug.expiresIn = drug.expiresIn - rules.DEFAULT_EXPIRES_IN_DECREMENT;
};

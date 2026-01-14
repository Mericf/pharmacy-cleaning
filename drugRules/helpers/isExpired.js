import { expiresIn } from "../consts";

export const isExpired = (expiresInValue) =>
  expiresInValue < expiresIn.EXPIRED_LIMIT;

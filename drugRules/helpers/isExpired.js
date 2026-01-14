import { expiresIn } from "../consts";

// vérifie si drug est expiré
export const isExpired = (drug) => drug.expiresIn < expiresIn.EXPIRED_LIMIT;

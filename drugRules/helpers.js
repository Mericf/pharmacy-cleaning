// réduit drug benefit
export const reduceBenefit = (drug, amount = 1) => {
  drug.benefit = Math.max(0, drug.benefit - amount);
};

// augmente drug benefit
export const increaseBenefit = (drug, amount = 1) => {
  drug.benefit = Math.min(50, drug.benefit + amount);
};

// réduit drug expiration
export const reduceExpiresIn = (drug) => {
  drug.expiresIn = drug.expiresIn - 1;
};

// vérifie si drug est expiré
export const isExpired = (drug) => drug.expiresIn < 0;

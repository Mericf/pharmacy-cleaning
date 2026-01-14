/**
 * Modèle médicament
 * @class
 */
export class Drug {
  /**
   * @param {string} name - Nom médicament
   * @param {number} expiresIn - Nombre de jours avant expiration
   * @param {number} benefit - Valeur de bénéfice initiale
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    Object.freeze(this);
  }
}

import { dailyRule } from "../drugRules";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Méthode qui met à jour les valeurs de bénéfice et d'expiration de tous les médicaments
   * @returns {Drug[]} copie du tableau des médicaments mis à jour à paertir des règles
   */
  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => dailyRule(drug));
    return [...this.drugs];
  }
}

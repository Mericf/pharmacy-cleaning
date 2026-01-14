import { drugs } from "./consts";
import { dafalganRule } from "./drugs/dafalgan/dafalgan";
import { fervexRule } from "./drugs/fervex/fervex";
import { herbalTeaRule } from "./drugs/herbalTea/herbalTea";
import { magicPillRule } from "./drugs/magicPill/magicPill";
import { normalRule } from "./drugs/normal/normal";

/**
 * Mapping médicaments vers leurs règles spécifiques.
 * Médicaments non listés utilisent la règle normale.
 * @type {Object<string, function(Drug): Drug>}
 */
export const DRUG_RULE_MAP = {
  [drugs.HERBAL_TEA]: herbalTeaRule,
  [drugs.FERVEX]: fervexRule,
  [drugs.MAGIC_PILL]: magicPillRule,
  [drugs.DAFALGAN]: dafalganRule,
};

export const getDailyRule = (drugName) => DRUG_RULE_MAP[drugName] ?? normalRule;

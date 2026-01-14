import { drugs } from "./consts";
import { dafalganRule } from "./dafalgan/dafalgan";
import { fervexRule } from "./fervex/fervex";
import { herbalTeaRule } from "./herbalTea";
import { magicPillRule } from "./magicPill";
import { normalRule } from "./normal";

export const DRUG_RULE_MAP = {
  [drugs.HERBAL_TEA]: herbalTeaRule,
  [drugs.FERVEX]: fervexRule,
  [drugs.MAGIC_PILL]: magicPillRule,
  [drugs.DAFALGAN]: dafalganRule,
};

export const getDailyRule = (drugName) => DRUG_RULE_MAP[drugName] ?? normalRule;

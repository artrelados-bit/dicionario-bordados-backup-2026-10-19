import { Verbete } from "../types";
import { LOTE1_PART1_ES } from "./lote1/part1";
import { LOTE1_PART2_ES } from "./lote1/part2";
import { LOTE1_PART3_ES } from "./lote1/part3";

// Sequential mapping of dynamic codes A-001 through A-030 to their respective IDs
const DYNAMIC_CODE_MAPPING: Record<string, string> = {
  "A-001": "a-074-abastecimento-automatico-de-bobina-enchedor",
  "A-002": "a-017-abertura-de-campo-de-bordado",
  "A-003": "a-087-abrasao-de-fio-em-ilhos-guia",
  "A-004": "a-068-abrasao-de-linha",
  "A-005": "a-009-abridor-de-casas",
  "A-006": "a-088-absorcao-termica-de-entretela-termocolante",
  "A-007": "a-012-acabamento-de-bordado",
  "A-008": "a-acolchoamento-trapunto-eletronico-quilting-bastidor",
  "A-009": "a-101-acoplador-da-barra-de-agulha-reciprocador",
  "A-010": "a-acoplador-calcador-mola-bordado-eletronico",
  "A-011": "a-089-acoplamento-magnetico-de-bastidor-tubular",
  "A-012": "a-081-adaptador-de-bastidor-cil-ndrico-de-manga-e-perna-sleeve-leg-cylindrical-frame",
  "A-013": "a-040-adaptador-de-bastidor-de-bones",
  "A-014": "a-090-adequacao-de-tensao-em-fio-de-seda-natural",
  "A-015": "a-048-adesivo-temporario-em-spray",
  "A-016": "a-053-agulha-antiaderente-anti-glue",
  "A-017": "a-045-agulha-asa-wing-needle",
  "A-018": "a-083-agulha-com-olho-alargado-para-fios-met-licos-metallic-embroidery-needle-large-eye",
  "A-019": "a-001-agulha-de-bordado",
  "A-020": "a-agulha-cabo-redondo-vs-cabo-chato-dbxk5-130-705h",
  "A-021": "a-102-agulha-de-gancho-crochet-lingueta-chenille",
  "A-022": "a-055-agulha-de-ilhos-furadora-borer",
  "A-023": "a-013-agulha-topstitch-pesponto",
  "A-024": "a-052-agulha-titanio-nitreto-de-titanio",
  "A-025": "a-063-agulha-titanio-pd-titanium-needle",
  "A-026": "a-agulha-despontada-cega-rebarba-bordado-eletronico",
  "A-027": "a-022-agulha-dupla-de-bordado",
  "A-028": "a-099-agulha-especial-linhas-metalicas",
  "A-029": "a-062-agulha-lanca-asa-wing-needle",
  "A-030": "a-054-agulha-microtex-ponta-aguda"
};

// Merged master record
const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE1_PART1_ES,
  ...LOTE1_PART2_ES,
  ...LOTE1_PART3_ES
};

export const VERBETES_LETTER_A_LOTE1_ES: Record<string, Partial<Verbete>> = {};

// Index by ID
for (const [id, data] of Object.entries(combinedById)) {
  VERBETES_LETTER_A_LOTE1_ES[id] = data;
}

// Index by Code (A-001 .. A-030)
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING)) {
  if (combinedById[id]) {
    VERBETES_LETTER_A_LOTE1_ES[code] = combinedById[id];
  }
}

import { Verbete } from "../types";
import { LOTE3_B_PART1_ES } from "./lote3_b/part1";
import { LOTE3_B_PART2_ES } from "./lote3_b/part2";
import { LOTE3_B_PART3_ES } from "./lote3_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE3: Record<string, string> = {
  "B-085": "b-085-bloco-excentrico-do-estica-fio",
  "B-057": "b-057-bloco-tensor-e-discos-de-tensao-superiores",
  "B-048": "b-048-bloqueio-bastidor-mecanico",
  "B-016": "b-016-bloqueio-de-matriz",
  "B-060": "b-060-blower-soprador-termico-de-acabamento",
  "B-006": "b-006-bobbin",
  "B-007": "b-007-bobbin-case",
  "B-019": "b-019-bobbin-thread",
  "W-024": "bobbin-winding-enrolamento-automatico-da-canelinha",
  "B-005": "b-005-bobina",
  "B-055": "b-055-bobina-com-nucleo-magnetico-magna-glide",
  "B-068": "b-068-bobina-de-bordado-linha-de-bobina",
  "B-018": "b-018-bobina-pre-enrolada",
  "B-049": "b-049-bobinadeira-externa",
  "B-089": "b-089-bobinador-externo-de-carretilhas-bobbin-winder",
  "B-099": "b-099-bobinas-pre-enroladas-descartaveis",
  "B-116": "b-body-e-macacao-infantil-bordados-em-malha",
  "B-112": "b-112-bomba-lubrificacao-centralizada-pistao-manual",
  "B-117": "b-bones-e-chapeus-no-bordado-eletronico",
  "B-046": "b-046-borda-cordone",
  "B-045": "b-045-borda-acabamento-satin",
  "B-078": "b-078",
  "B-100": "b-100-borda-de-seguranca-anti-vibracao-e-compensacao-dinamica-de-bordo",
  "B-070": "b-070-borda-em-ponto-cheio-satin-border",
  "B-086": "b-086-borda-em-ponto-pico-picot-stitching",
  "B-092": "b-092-borda-ondulada-em-festone-frances"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE3_B_PART1_ES,
  ...LOTE3_B_PART2_ES,
  ...LOTE3_B_PART3_ES
};

// Also index by code
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_B_LOTE3)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_B_LOTE3_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

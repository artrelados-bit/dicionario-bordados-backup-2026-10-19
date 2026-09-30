import { Verbete } from "../types";
import { LOTE4_C_PART1_ES } from "./lote4_c/part1";
import { LOTE4_C_PART2_ES } from "./lote4_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE4: Record<string, string> = {
  "C-054": "c-054-cola-temporaria-em-spray-505",
  "C-033": "c-033-coluna-de-satin",
  "C-093": "c-093-compensacao-elasticidade-malha-ribana",
  "C-043": "c-043-compensacao-de-empurrao-push-compensation",
  "C-028": "c-028-compensacao-de-empurrar-e-puxar",
  "C-069": "c-069-compensacao-de-encolhimento-textil",
  "C-055": "c-055-compensacao-de-fracao-de-ponto-ponto-curto",
  "O-053": "offset-compensacao-pressao-termica-apliques",
  "C-035": "c-035-compensacao-de-puxao-pull-compensation",
  "C-088": "c-088-compensacao-dinamica-deformacao-angular",
  "C-074": "c-074-compensacao-dinamica-de-densidade-por-tamanho",
  "C-018": "c-018-comprimento-de-salto",
  "C-027": "c-027-comprimento-do-ponto",
  "C-080": "c-080-comutador-de-cores-motor-de-passo",
  "C-081": "c-081-cone-de-linha-fotoluminescente",
  "C-048": "c-048-conectividade-wifi-nuvem",
  "C-037": "c-037-conector-usb",
  "C-036": "c-036-configuracao-da-maquina-de-bordado",
  "C-106": "c-106-conjunto-de-pre-tensao-linha-superior-sub-tensor",
  "C-041": "c-041-contorno-de-bordado"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE4_C_PART1_ES,
  ...LOTE4_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE4)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE4_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

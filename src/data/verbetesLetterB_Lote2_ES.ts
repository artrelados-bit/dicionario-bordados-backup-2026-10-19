import { Verbete } from "../types";
import { LOTE2_B_PART1_ES } from "./lote2_b/part1";
import { LOTE2_B_PART2_ES } from "./lote2_b/part2";
import { LOTE2_B_PART3_ES } from "./lote2_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE2: Record<string, string> = {
  "B-038": "b-038-base-de-ponto-tatami",
  "B-014": "b-014-base-de-pontos-underlay",
  "B-096": "b-096-base-flutuante-em-entretela-hidrossoluvel",
  "B-058": "b-058-bastidor-de-bolso-e-grampos-de-fixacao-rapida",
  "B-075": "b-075-bastidor-de-bone-cap-frame-sistema-270",
  "B-003": "b-003-bastidor-de-bone",
  "B-062": "b-062-bastidor-de-bone-cap-frame-270",
  "B-114": "b-114-bastidor-de-bone-13x18-suporte-adaptador-presilha-aba-gabarito-agb",
  "B-001": "b-001-bastidor-de-bordado",
  "B-044": "b-044-bastidor-meia-tubular",
  "B-083": "b-083-bastidor-de-meia-e-punho-mini-clamp",
  "B-002": "b-002-bastidor-magnetico",
  "B-076": "b-076-bastidor-magnetico-de-neodimio",
  "B-074": "b-074-bastidor-tubular-pecas-cilindricas",
  "B-024": "b-024-bastidor-virtual",
  "B-004": "b-004-bastidoramento",
  "B-079": "b-079",
  "B-052": "b-052-basting-box-caixa-de-alinhavo",
  "B-090": "b-090-batimento-de-chapa-e-desvio-de-agulha",
  "B-103": "b-103-bernina-bernette-maquinas-de-bordado-eletronico",
  "B-106": "b-106-bernina-embroidery-software-designerplus",
  "B-064": "b-064-bico-da-lancadeira-hook-point",
  "B-069": "b-069-bico-de-pato-tesoura-pelicano-applique",
  "B-108": "b-108-bico-direcionador-de-fio-tubeira-de-lacada-chenille",
  "N-046": "needle-bar-driver-biela-de-agulha",
  "B-043": "b-043-bitola-e-titulagem-de-linha",
  "B-111": "b-111-bloco-condutor-barra-agulha-engate-arraste"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE2_B_PART1_ES,
  ...LOTE2_B_PART2_ES,
  ...LOTE2_B_PART3_ES
};

// Also index by code
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_B_LOTE2)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_B_LOTE2_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

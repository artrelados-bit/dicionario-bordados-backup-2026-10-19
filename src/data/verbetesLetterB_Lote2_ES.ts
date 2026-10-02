import { Verbete } from "../types";
import { LOTE2_B_PART1_ES } from "./lote2_b/part1";
import { LOTE2_B_PART2_ES } from "./lote2_b/part2";
import { LOTE2_B_PART3_ES } from "./lote2_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE2: Record<string, string> = {
  "B-028": "b-038-base-de-ponto-tatami",
  "B-029": "b-014-base-de-pontos-underlay",
  "B-030": "b-096-base-flutuante-em-entretela-hidrossoluvel",
  "B-031": "b-058-bastidor-de-bolso-e-grampos-de-fixacao-rapida",
  "B-032": "b-075-bastidor-de-bone-cap-frame-sistema-270",
  "B-033": "b-003-bastidor-de-bone",
  "B-034": "b-062-bastidor-de-bone-cap-frame-270",
  "B-035": "b-114-bastidor-de-bone-13x18-suporte-adaptador-presilha-aba-gabarito-agb",
  "B-036": "b-001-bastidor-de-bordado",
  "B-037": "b-044-bastidor-meia-tubular",
  "B-038": "b-083-bastidor-de-meia-e-punho-mini-clamp",
  "B-039": "b-002-bastidor-magnetico",
  "B-040": "b-076-bastidor-magnetico-de-neodimio",
  "B-041": "b-074-bastidor-tubular-pecas-cilindricas",
  "B-042": "b-024-bastidor-virtual",
  "B-043": "b-004-bastidoramento",
  "B-044": "b-079",
  "B-045": "b-052-basting-box-caixa-de-alinhavo",
  "B-046": "b-090-batimento-de-chapa-e-desvio-de-agulha",
  "B-047": "b-103-bernina-bernette-maquinas-de-bordado-eletronico",
  "B-048": "b-106-bernina-embroidery-software-designerplus",
  "B-049": "b-064-bico-da-lancadeira-hook-point",
  "B-050": "b-069-bico-de-pato-tesoura-pelicano-applique",
  "B-051": "b-108-bico-direcionador-de-fio-tubeira-de-lacada-chenille",
  "B-052": "needle-bar-driver-biela-de-agulha",
  "B-053": "b-043-bitola-e-titulagem-de-linha",
  "B-054": "b-111-bloco-condutor-barra-agulha-engate-arraste"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE2_B_PART1_ES,
  ...LOTE2_B_PART2_ES,
  ...LOTE2_B_PART3_ES
};

// Normalize fields like curiosities/voceSabia
for (const [id, data] of Object.entries(combinedById)) {
  const item = data as any;
  if (item.voceSabia && !item.curiosities) {
    item.curiosities = item.voceSabia;
  } else if (item.curiosities && !item.voceSabia) {
    item.voceSabia = item.curiosities;
  }
}

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

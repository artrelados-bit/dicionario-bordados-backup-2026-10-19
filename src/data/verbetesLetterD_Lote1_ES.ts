import { Verbete } from "../types";
import { LOTE1_D_PART1_ES } from "./lote1_d/part1";
import { LOTE1_D_PART2_ES } from "./lote1_d/part2";
import { LOTE1_D_PART3_ES } from "./lote1_d/part3";

const DYNAMIC_CODE_MAPPING_D_LOTE1: Record<string, string> = {
  "D-001": "d-001-densidade-de-pontos",
  "D-002": "d-002-densidade-de-bordado",
  "D-003": "d-003-densidade-variavel",
  "D-004": "d-004-densidade-excessiva",
  "D-005": "d-005-densidade-insuficiente",
  "D-006": "d-006-desenho-de-bordado",
  "D-007": "d-007-desenho-digitalizado",
  "D-008": "d-008-digitalizacao-de-bordado",
  "D-009": "d-009-digitalizacao-manual",
  "D-010": "d-010-digitalizacao-automatica",
  "D-011": "d-011-digitalizador-de-bordado",
  "D-012": "d-012-direcao-do-ponto",
  "D-013": "d-013-direcao-de-costura",
  "D-014": "d-014-direcao-do-bordado",
  "D-015": "d-015-deslocamento-da-matriz",
  "D-016": "d-016-deslocamento-de-bastidor",
  "D-017": "d-017-deslocamento-de-ponto",
  "D-018": "d-018-deslocamento-de-linha",
  "D-019": "d-019-distancia-entre-pontos",
  "D-020": "d-020-distancia-de-seguranca",
  "D-021": "d-021-densidade-de-pontos-avancada",
  "D-022": "d-022-densidade-variavel-efeitos",
  "D-023": "d-023-distribuicao-de-pontos",
  "D-024": "d-024-desenho-de-bordado-pratica",
  "D-025": "d-025-digitalizacao-automatica-regras",
  "D-032": "d-032-definicao-de-sequencia",
  "D-038": "d-038-densidade-de-linha",
  "D-041": "d-041-definicao-do-bordado",
  "D-042": "d-042-deformacao-do-bordado",
  "D-043": "d-043-defeito-de-bordado",
  "D-049": "d-049-debrum-bordado",
  "D-050": "d-050-degrade-de-pontos",
  "D-062": "d-062-deflexao-da-agulha-needle-deflection",
  "D-085": "d-085-decapagem-termica-residuos-plasticos-pistola-ar-quente",
  "D-086": "d-086-densidade-adaptativa-area-smart-density-scaling",
  "D-088": "d-088-dedo-segurador-linha-corte-trava-mecanica-superior",
  "D-089": "d-089-delineamento-ponto-trancado-efeito-cordao-sao-francisco",
  "D-090": "d-090-deformacao-viscoelastica-couros-sinteticos-perfuracao",
  "D-092": "d-092-dedo-posicionador-da-caixa-de-bobina-dedo-retentor",
  "D-094": "d-094-dedo-posicionador-lacadeira-trava-parada-caixa-bobina",
  "D-097": "d-097-defletor-de-linha-do-cabecote-separador-anti-enrosco"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE1_D_PART1_ES,
  ...LOTE1_D_PART2_ES,
  ...LOTE1_D_PART3_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_D_LOTE1)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_D_LOTE1_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

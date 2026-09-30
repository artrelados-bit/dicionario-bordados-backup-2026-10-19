import { Verbete } from "../types";
import { LOTE6_C_PART1_ES } from "./lote6_c/part1";
import { LOTE6_C_PART2_ES } from "./lote6_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE6: Record<string, string> = {
  "C-031": "c-031-corte-de-fita",
  "C-032": "c-032-corte-de-linha",
  "C-008": "c-008-corte-de-linha-manual",
  "C-020": "c-020-corte-de-linha-manual-manutencao",
  "C-066": "c-066-corte-salto-jump-stitch-trim",
  "C-085": "c-085-costura-conexao-embutida-ponto-ligacao",
  "C-021": "c-021-costura-de-contorno",
  "C-022": "c-022-costura-de-fixacao",
  "C-023": "c-023-costura-de-reforco",
  "C-098": "c-098-costura-reforco-tatami-underlay-cruzado",
  "C-040": "c-040-costura-de-seguranca",
  "C-025": "c-025-costura-de-underlay",
  "C-024": "c-024-costura-de-uniao",
  "C-078": "c-078",
  "C-046": "c-046-curva-bezier-digitalizacao",
  "C-099": "c-099-curva-aceleracao-frenagem-pantografo-s-curve",
  "C-064": "c-064-curvatura-de-ponto-bezier-tuning",
  "C-077": "c-077"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE6_C_PART1_ES,
  ...LOTE6_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE6)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE6_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

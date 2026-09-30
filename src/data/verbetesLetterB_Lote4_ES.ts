import { Verbete } from "../types";
import { LOTE4_B_PART1_ES } from "./lote4_b/part1";
import { LOTE4_B_PART2_ES } from "./lote4_b/part2";
import { LOTE4_B_PART3_ES } from "./lote4_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE4: Record<string, string> = {
  "B-095": "b-095-borda-selada-a-laser-corte-termico-de-emblemas",
  "B-022": "b-022-bordado-applique",
  "B-033": "b-033-bordado-com-aplicacao-de-tecidos",
  "B-034": "b-034-bordado-com-linha-metalica",
  "B-023": "b-023-bordado-continuo",
  "B-041": "b-041-bordado-cutwork",
  "B-025": "b-025-bordado-de-preenchimento-fill-stitch",
  "B-026": "b-026-bordado-decorativo",
  "B-027": "b-027-bordado-digitalizado",
  "B-009": "b-009-bordado-eletronico",
  "B-021": "b-021-bordado-em-3d-puff",
  "B-013": "b-013-bordado-em-alta-densidade",
  "B-059": "b-059-bordado-em-alto-relevo-3d-puff-eva",
  "B-037": "b-037-bordado-em-bastidor-expandido",
  "B-020": "b-020-bordado-em-camadas",
  "B-050": "b-050-bordado-couro-sinteticos",
  "B-067": "b-067-bordado-em-relevo-3d-puffy-foam",
  "B-036": "b-036-bordado-em-relevo-termico"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE4_B_PART1_ES,
  ...LOTE4_B_PART2_ES,
  ...LOTE4_B_PART3_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_B_LOTE4)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_B_LOTE4_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

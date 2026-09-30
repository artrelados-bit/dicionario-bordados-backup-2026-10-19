import { Verbete } from "../types";
import { LOTE1_B_PART1_ES } from "./lote1_b/part1";
import { LOTE1_B_PART2_ES } from "./lote1_b/part2";
import { LOTE1_B_PART3_ES } from "./lote1_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE1: Record<string, string> = {
  "B-115": "b-babador-e-prendedor-de-chupeta-acessorios-infantis",
  "B-104": "b-104-baby-lock-maquinas-de-bordado-eletronico",
  "B-008": "b-008-backing",
  "B-071": "b-071-backing-textil-entretela-estrutural",
  "B-105": "b-105-bai-baili-maquinas-de-bordado-eletronico",
  "B-065": "b-065-bainha-aberta-computadorizada-openwork",
  "B-040": "b-040-bainha-aberta-eletronica",
  "B-000": "b-bainha-aberta-em-ponto-cheio",
  "B-087": "b-087-balanco-de-ponto-e-compensacao-de-inercia-do-pantografo",
  "B-082": "b-082",
  "O-059": "overhang-balanco-frontal-braco-pantografo",
  "B-113": "b-113-bandeja-coletora-oleo-residual-drenagem-cabecote",
  "B-066": "b-066-bandeja-de-desbobinamento-porta-cones-thread-stand",
  "B-015": "b-015-barra-de-agulha",
  "B-107": "b-107-barra-de-agulha-e-bucha-guia-needle-bar-bushing",
  "B-063": "b-063-barra-de-agulha-needle-bar",
  "B-073": "b-073-barra-de-agulhas-multiplas-troca-de-cor",
  "B-109": "b-109-barra-de-iluminacao-led-spot-focado-agulha",
  "B-053": "b-053-barra-de-pressao-e-regulador-do-calcador",
  "B-051": "b-051-barra-tensao-fios",
  "B-097": "b-097-barra-estabilizadora-de-agulhas-multiplas-e-guia-anti-deflexao",
  "B-093": "b-093-barra-estabilizadora-de-tensao-superior-pente-guia-fios",
  "B-088": "b-088-barramento-can-bus-em-maquinas-de-bordar",
  "B-102": "b-102-barudan-maquinas-de-bordado-eletronico",
  "B-084": "b-084-base-antiestatica-para-cones-de-linha",
  "B-080": "b-080",
  "B-054": "b-054-base-de-cones-e-porta-carretel-vertical"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE1_B_PART1_ES,
  ...LOTE1_B_PART2_ES,
  ...LOTE1_B_PART3_ES
};

// Also index by code
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_B_LOTE1)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_B_LOTE1_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

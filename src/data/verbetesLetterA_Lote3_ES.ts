import { Verbete } from "../types";
import { LOTE3_PART1_ES } from "./lote3/part1";
import { LOTE3_PART2_ES } from "./lote3/part2";
import { LOTE3_PART3_ES } from "./lote3/part3";

// Sequential mapping of dynamic codes A-061 through A-090 to their respective IDs
const DYNAMIC_CODE_MAPPING_LOTE3: Record<string, string> = {
  "A-061": "a-092-alinhamento-a-laser-de-ponto-cruzado",
  "A-062": "a-043-alinhamento-de-bastidor",
  "A-063": "a-008-alinhamento-de-contorno",
  "A-064": "a-039-alinhamento-de-matrizes",
  "A-065": "a-041-alinhamento-de-agulha-em-maquinas-multiagulhas",
  "A-066": "a-051-alinhave-no-bastidor-costura-basting",
  "A-067": "a-067-alinhavo-de-fixacao",
  "A-068": "a-094-almofada-de-calcador-em-borracha-anti-impacto",
  "A-069": "a-almofadas-e-capas-decorativas-quilting",
  "A-070": "a-almotolia-de-precisao-lancadeira-bordado-eletronico",
  "A-071": "a-064-alongamento-de-ponto-stitch-elongation",
  "A-072": "a-093-alongamento-termico-de-linha-sintetica",
  "A-073": "a-059-amaciamento-de-bordado-no-avesso-protetor",
  "A-074": "a-095-amaciamento-de-matriz-por-filtragem-de-densidade",
  "A-075": "a-096-amortecedor-de-balanco-de-pantografo",
  "A-076": "a-106-amortecedor-borracha-barra-agulha-anel-batente",
  "A-077": "a-016-amortecedor-de-calcador",
  "A-078": "a-044-amortecedor-de-linha-mola-puxa-fio",
  "A-079": "a-070-amortecedor-de-linha",
  "A-080": "a-079-amortecedor-de-vibra-o-de-base-de-m-quina-anti-vibration-mounts-leveling-pads",
  "A-081": "a-097-analise-espectral-de-correspondencia-de-cores",
  "A-082": "a-021-analise-de-matriz-previa",
  "A-083": "a-018-anel-de-vedacao-e-retencao-da-bobina",
  "A-084": "a-098-anel-o-ring-de-retencao-de-carretel",
  "A-085": "a-080-anel-o-ring-de-reten-o-de-carretel-spool-pin-rubber-friction-ring",
  "A-086": "a-077-aparador-autom-tico-de-fio-de-bobina-under-bed-thread-trimmer",
  "A-087": "a-060-aplicacao-com-corte-a-laser",
  "A-088": "a-aplicacao-com-termocolante-definitivo-patch-aplique",
  "A-089": "a-004-aplique-de-bordado",
  "A-090": "a-099-aplique-rendado-em-richelieu-eletronico"
};

// Merged master record for Lote 3
const combinedLote3ById: Record<string, Partial<Verbete>> = {
  ...LOTE3_PART1_ES,
  ...LOTE3_PART2_ES,
  ...LOTE3_PART3_ES
};

export const VERBETES_LETTER_A_LOTE3_ES: Record<string, Partial<Verbete>> = {};

// Index by ID
for (const [id, data] of Object.entries(combinedLote3ById)) {
  VERBETES_LETTER_A_LOTE3_ES[id] = data;
}

// Index by Code (A-061 .. A-090)
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_LOTE3)) {
  if (combinedLote3ById[id]) {
    VERBETES_LETTER_A_LOTE3_ES[code] = combinedLote3ById[id];
  }
}

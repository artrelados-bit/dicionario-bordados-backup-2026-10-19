import { Verbete } from "../types";
import { LOTE2_PART1_ES } from "./lote2/part1";
import { LOTE2_PART2_ES } from "./lote2/part2";
import { LOTE2_PART3_ES } from "./lote2/part3";

// Sequential mapping of dynamic codes A-031 through A-060 to their respective IDs
const DYNAMIC_CODE_MAPPING_LOTE2: Record<string, string> = {
  "A-031": "a-027-agulha-para-couro-ponta-cortante",
  "A-032": "a-034-agulha-para-malha-jersey-stretch",
  "A-033": "a-002-agulha-ponta-bola",
  "A-034": "a-003-agulha-ponta-lanca",
  "A-035": "a-069-agulha-titanio",
  "A-036": "a-072-ajuste-de-altura-do-calcador-tecidos-espessos",
  "A-037": "a-ajuste-de-altura-para-relevo-3d-com-eva",
  "A-038": "a-033-ajuste-de-comprimento-de-ponto",
  "A-039": "a-015-ajuste-de-densidade",
  "A-040": "a-ajuste-de-desaceleracao-em-curvas-cornering-slowdown",
  "A-041": "a-031-ajuste-de-folga-da-chapa-de-agulha",
  "A-042": "a-084-ajuste-de-folga-entre-agulha-e-lan-adeira-needle-to-hook-clearance-timing-gap",
  "A-043": "a-024-ajuste-de-ponto-de-entrada-e-saida",
  "A-044": "a-042-ajuste-de-ponto-decorativo-motif",
  "A-045": "a-038-ajuste-de-folga-da-lancadeira",
  "A-046": "a-028-ajuste-de-posicionamento-do-bastidor",
  "A-047": "a-061-ajuste-de-salto-e-velocidade-maxima",
  "A-048": "a-007-ajuste-de-tensao",
  "A-049": "a-091-ajuste-fino-de-sincronismo-de-lancadeira",
  "A-050": "a-085-alargador-de-coluna-de-cetim-por-repuxo-satin-column-auto-widener-pull-stretch",
  "A-051": "a-082-alavanca-de-engate-r-pido-de-bastidor-quick-release-hoop-clamping-lever",
  "A-052": "a-105-alavanca-de-trava-caixa-de-bobina-trinco-extracao",
  "A-053": "a-050-alavanca-do-calcador",
  "A-054": "a-066-alavanca-do-calcador-presser-foot-lifter",
  "A-055": "a-103-alavanca-pega-fio-pescador-linha-superior-sensor-ruptura",
  "A-056": "a-104-alavanca-pegadora-fio-superior-limpador-linha-wiper",
  "A-057": "a-029-alavanca-puxa-fio-take-up-lever",
  "A-058": "overfeed-alimentacao-forcada-fio",
  "A-059": "a-011-alimentador-de-linha",
  "A-060": "a-078-alinhador-ptico-a-laser-de-centro-de-bastidor-laser-crosshair-center-finder"
};

// Merged master record for Lote 2
const combinedLote2ById: Record<string, Partial<Verbete>> = {
  ...LOTE2_PART1_ES,
  ...LOTE2_PART2_ES,
  ...LOTE2_PART3_ES
};

export const VERBETES_LETTER_A_LOTE2_ES: Record<string, Partial<Verbete>> = {};

// Index by ID
for (const [id, data] of Object.entries(combinedLote2ById)) {
  VERBETES_LETTER_A_LOTE2_ES[id] = data;
}

// Index by Code (A-031 .. A-060)
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_LOTE2)) {
  if (combinedLote2ById[id]) {
    VERBETES_LETTER_A_LOTE2_ES[code] = combinedLote2ById[id];
  }
}

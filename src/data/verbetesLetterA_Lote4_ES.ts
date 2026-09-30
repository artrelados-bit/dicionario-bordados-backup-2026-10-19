import { Verbete } from "../types";
import { LOTE4_PART1_ES } from "./lote4/part1";
import { LOTE4_PART2_ES } from "./lote4/part2";
import { LOTE4_PART3_ES } from "./lote4/part3";

// Sequential mapping of dynamic codes A-091 through A-120 to their respective IDs
const DYNAMIC_CODE_MAPPING_LOTE4: Record<string, string> = {
  "A-091": "a-099-aplique-rendado-em-richelieu-eletronico",
  "A-092": "a-025-aquecimento-da-agulha",
  "A-093": "a-076-arame-guia-fio-de-espiral-dupla",
  "A-094": "a-086-aresta-chanfrada-de-ponto-de-preenchimento-tatami-mitered-corner-chiseled-edge",
  "A-095": "a-argola-e-ilhos-chaveiro-in-the-hoop-bastidor",
  "A-096": "a-057-armazenamento-de-fios-e-cones",
  "A-097": "a-056-aro-do-bastidor-anel-interno-e-externo",
  "A-098": "a-036-arquivo-de-bordado",
  "A-099": "a-073-arranjo-circular-e-espelhamento-radial",
  "A-100": "a-100-arrasto-hidraulico-de-barra-de-agulha",
  "A-101": "a-014-arremate-automatico",
  "A-102": "a-049-arremate-de-entrada-e-arremate-de-saida",
  "A-103": "a-005-arremate-de-ponto",
  "A-104": "a-020-arremate-manual-no-software",
  "A-105": "a-071-assentamento-de-ponto",
  "A-106": "a-058-atalho-de-teclado-no-software",
  "A-107": "a-atoalhado-tecidos-felpudos-toalhas",
  "A-108": "a-046-auto-espacamento-de-pontos",
  "A-109": "a-065-auto-spaced-satin-espacamento-automatico",
  "A-110": "a-030-auto-compensacao-de-canto-mitered-corner",
  "A-111": "a-035-autodeteccao-de-fim-de-linha-bobina",
  "A-112": "a-010-autodigitizacao",
  "A-113": "a-023-autotracado-de-vetores-bitmap",
  "A-114": "a-avental-no-bastidor-computadorizado-peitilho-pantografo",
  "A-115": "a-101-alimentacao-positiva-de-linha",
  "A-116": "a-102-angulo-de-ponto-satin-e-tatami",
  "A-117": "a-103-ajuste-de-folga-da-lancadeira",
  "A-118": "a-104-amortecedor-pneumatico-pantografo",
  "A-119": "a-105-avanco-angular-do-eixo-principal",
  "A-120": "a-106-anel-antideslizante-de-bastidor"
};

// Merged master record for Lote 4
const combinedLote4ById: Record<string, Partial<Verbete>> = {
  ...LOTE4_PART1_ES,
  ...LOTE4_PART2_ES,
  ...LOTE4_PART3_ES
};

export const VERBETES_LETTER_A_LOTE4_ES: Record<string, Partial<Verbete>> = {};

// Index by ID
for (const [id, data] of Object.entries(combinedLote4ById)) {
  VERBETES_LETTER_A_LOTE4_ES[id] = data;
}

// Index by Code (A-091 .. A-120)
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_LOTE4)) {
  if (combinedLote4ById[id]) {
    VERBETES_LETTER_A_LOTE4_ES[code] = combinedLote4ById[id];
  }
}

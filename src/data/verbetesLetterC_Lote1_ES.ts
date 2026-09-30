import { Verbete } from "../types";
import { LOTE1_C_PART1_ES } from "./lote1_c/part1";
import { LOTE1_C_PART2_ES } from "./lote1_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE1: Record<string, string> = {
  "C-001": "c-001-cabecote-de-bordado",
  "C-015": "c-015-cabecote-multiagulhas",
  "C-050": "c-050-cabo-de-agulha-fixador",
  "C-002": "c-002-caixa-da-bobina",
  "C-058": "c-058-caixa-de-bobina-para-linha-grossa-bobbin-work",
  "C-063": "c-063-caixa-transporte-dentes-rebaixados",
  "C-101": "c-101-caixa-de-troca-de-cor-came-seletor-de-agulhas",
  "C-053": "c-053-calcador-com-mira-led-ponteiro-de-luz",
  "C-044": "c-044-calcador-de-bordado",
  "C-111": "c-calcas-jeans-e-jaquetas-jeans-bordado-denim-pesado",
  "C-062": "c-062-calibracao-ponto-zero-central",
  "C-108": "c-calibracao-de-ponto-zero-e-sensores-de-fim-de-curso",
  "C-061": "c-061-calibragem-do-sensor-de-bobina",
  "C-010": "c-010-camada-de-bordado",
  "C-047": "c-047-camada-cobertura-topping",
  "C-011": "c-011-camadas-de-pontos",
  "C-103": "c-103-came-acionamento-trimmer-excentrico-corte-linha",
  "C-096": "c-096-came-excentrico-elevacao-calcador",
  "C-071": "c-071-camera-integrada-de-posicionamento-e-escaneamento",
  "C-009": "c-009-caminho-de-costura"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE1_C_PART1_ES,
  ...LOTE1_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE1)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE1_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

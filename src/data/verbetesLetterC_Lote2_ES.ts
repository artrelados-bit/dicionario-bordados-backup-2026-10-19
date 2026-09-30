import { Verbete } from "../types";
import { LOTE2_C_PART1_ES } from "./lote2_c/part1";
import { LOTE2_C_PART2_ES } from "./lote2_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE2: Record<string, string> = {
  "C-110": "c-camisetas-polos-e-camisas-sociais-bordado-peito-manga",
  "C-072": "c-072-camuflagem-de-arremate-e-ponto-escondido",
  "C-012": "c-012-canal-de-linha",
  "C-075": "c-075",
  "C-052": "c-052-caneta-fantasma-termoapagavel",
  "C-091": "c-091-caneta-hidrossoluvel-marcacao-rapida",
  "C-073": "c-073-canhao-de-luz-e-iluminacao-led-da-area-de-bordado",
  "C-013": "c-013-canoa-da-bobina",
  "C-067": "c-067-cantos-vivos-e-esquadro-de-ponto",
  "C-113": "c-capas-de-caderneta-de-vacinas-e-livros-ith",
  "C-084": "c-084-capuz-de-moletom-bastidoramento",
  "C-003": "c-003-carcaca-da-maquina-de-bordado",
  "C-107": "c-107-carcaca-frontal-deslizante-agulhas-bloco-seletor",
  "C-014": "c-014-carregador-de-bobina",
  "C-004": "c-004-carregamento-de-matriz",
  "C-006": "c-006-carretel-de-linha",
  "C-005": "c-005-carro-da-maquina-de-bordado",
  "C-016": "c-016-carro-de-bordado"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE2_C_PART1_ES,
  ...LOTE2_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE2)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE2_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

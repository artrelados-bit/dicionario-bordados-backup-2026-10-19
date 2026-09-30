import { Verbete } from "../types";
import { LOTE5_C_PART1_ES } from "./lote5_c/part1";
import { LOTE5_C_PART2_ES } from "./lote5_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE5: Record<string, string> = {
  "C-095": "c-095-contorno-duplo-triplo-ponto-grao-feijao",
  "C-083": "c-083-controlador-tensao-eletronico-digital",
  "C-109": "c-controle-de-qualidade-zero-defeito-no-atelie",
  "C-034": "c-034-controle-de-tensao-da-linha",
  "C-029": "c-029-controle-de-velocidade",
  "C-038": "c-038-conversao-de-arquivo-de-bordado",
  "C-057": "c-057-conversao-de-formatos-de-matriz",
  "C-090": "c-090-conversao-paletas-rgb-linhas-comerciais",
  "C-092": "c-092-cording-aplicacao-cordao-grosso",
  "C-026": "c-026-cores-de-linha",
  "C-105": "c-105-corpo-giratorio-lacadeira-carcaca-externa-gancho-rotativo",
  "C-039": "c-039-correcao-de-pontos",
  "C-060": "c-060-correia-dentada-do-pantografo-e-eixo-xy",
  "C-089": "c-089-cortador-circular-rotativo-apliques",
  "C-102": "c-102-cortador-de-fio-superior-inferior-guilhotina-linha",
  "C-007": "c-007-corte-automatico-de-linha",
  "C-019": "c-019-corte-automatico-de-linha-funcoes",
  "C-079": "c-079",
  "C-042": "c-042-corte-de-apontamento-jump-cut",
  "C-030": "c-030-corte-de-bobina"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE5_C_PART1_ES,
  ...LOTE5_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE5)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE5_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

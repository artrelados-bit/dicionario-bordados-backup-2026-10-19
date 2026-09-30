import { Verbete } from "../types";
import { LOTE3_C_PART1_ES } from "./lote3_c/part1";
import { LOTE3_C_PART2_ES } from "./lote3_c/part2";

const DYNAMIC_CODE_MAPPING_C_LOTE3: Record<string, string> = {
  "C-086": "c-086-cartao-calibracao-tensao-bobina-tensiometro",
  "C-059": "c-059-cartao-de-cores-e-tabela-de-conversao-de-linhas",
  "C-070": "c-070-cartela-de-cores-personalizada-no-software",
  "C-049": "c-049-centralizacao-automatica-bastidor",
  "C-094": "c-094-centralizacao-marcacao-giz-alfaiate",
  "C-082": "c-082-cera-silicone-liquido-passagem-linha",
  "C-065": "c-065-cera-lubrificante-de-linha-silicone-oil",
  "C-051": "c-051-cera-lubrificante-linhas-silicone",
  "C-100": "c-100-certificacao-oeko-tex-standard-100-fios",
  "C-104": "c-104-cesto-da-lacadeira-porta-capsula-bobina-gancho-rotativo",
  "C-076": "c-076",
  "C-045": "c-045-chapa-de-agulha",
  "N-036": "needle-plate-chapa-de-agulha",
  "C-112": "c-chaveiros-e-porta-moedas-no-bastidor-sintetico-ith",
  "C-068": "c-068-chenille-e-ponto-lacada-efeito-toalha",
  "C-087": "c-087-chiffon-musseline-toque-de-seda",
  "C-056": "c-056-clipe-de-bastidor-e-travas-laterais",
  "C-097": "c-097-clipes-retencao-magnetica-bastidores-planos",
  "C-017": "c-017-codigo-de-cores-de-linha"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE3_C_PART1_ES,
  ...LOTE3_C_PART2_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_C_LOTE3)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_C_LOTE3_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

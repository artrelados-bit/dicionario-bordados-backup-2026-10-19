import { Verbete } from "../types";
import { LOTE5_B_PART1_ES } from "./lote5_b/part1";
import { LOTE5_B_PART2_ES } from "./lote5_b/part2";
import { LOTE5_B_PART3_ES } from "./lote5_b/part3";

const DYNAMIC_CODE_MAPPING_B_LOTE5: Record<string, string> = {
  "B-035": "b-035-bordado-estrutural-em-camadas",
  "B-042": "b-042-bordado-fringe-ponto-franja",
  "B-011": "b-011-bordado-industrial",
  "B-028": "b-028-bordado-industrial-em-larga-escala",
  "B-010": "b-010-bordado-livre",
  "B-029": "b-029-bordado-livre-artesanal",
  "B-030": "b-030-bordado-monocromatico",
  "B-031": "b-031-bordado-multicolorido",
  "B-012": "b-012-bordado-personalizado",
  "B-032": "b-032-bordado-personalizado-em-atelie",
  "B-047": "b-047-bordado-richelieu-eletronico",
  "B-077": "b-077-bordado-tubular-pecas-fechadas-e-tubulares",
  "B-098": "b-098-borracha-termoplastica-para-apliques-tridimensionais-tpu-patch",
  "B-061": "b-061-botao-start-stop-e-controle-de-pedal",
  "B-099": "b-099-bracadeira-de-fixacao-rapida-para-tubulares-quick-sleeve-clamp",
  "B-081": "b-081",
  "B-039": "b-039-braco-livre-da-maquina-de-bordar",
  "B-094": "b-094-braco-oscilador-do-corta-fio-inferior",
  "B-056": "b-056-branching-ramificacao-automatica-no-software",
  "B-072": "b-072-bridge-stitch-ponto-de-ponte-ligacao",
  "B-017": "b-017-brilho-da-linha",
  "B-101": "b-101-brother-maquinas-de-bordado-eletronico",
  "B-110": "b-110-bucha-barra-agulha-guia-bronze-sinterizado",
  "B-091": "b-091-buffer-de-memoria-e-fila-de-pontos-da-cpu"
};

const combinedById: Record<string, Partial<Verbete>> = {
  ...LOTE5_B_PART1_ES,
  ...LOTE5_B_PART2_ES,
  ...LOTE5_B_PART3_ES
};

// Also index by code when non-ambiguous
const combinedByCode: Record<string, Partial<Verbete>> = {};
for (const [code, id] of Object.entries(DYNAMIC_CODE_MAPPING_B_LOTE5)) {
  if (combinedById[id]) {
    combinedByCode[code] = combinedById[id];
  }
}

export const VERBETES_LETTER_B_LOTE5_ES: Record<string, Partial<Verbete>> = {
  ...combinedById,
  ...combinedByCode
};

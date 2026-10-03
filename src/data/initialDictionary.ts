import { Verbete, TroubleshootingGuide } from "../types";
import masterAcervo from "./masterAcervoOfficial.json";
import { NOVOS_VERBETES_INSUMOS } from "./verbetesInsumosNovos";
import { ALL_TROUBLESHOOTING_GUIDES } from "./troubleshootingGuides";
import { MULTI_HEAD_TROUBLESHOOTING_GUIDES } from "./multiHeadTroubleshootingData";

export const INITIAL_VERBETES: Verbete[] = [
  ...(masterAcervo as unknown as Verbete[]),
  ...NOVOS_VERBETES_INSUMOS,
];

export const INITIAL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  ...ALL_TROUBLESHOOTING_GUIDES,
  ...MULTI_HEAD_TROUBLESHOOTING_GUIDES,
];

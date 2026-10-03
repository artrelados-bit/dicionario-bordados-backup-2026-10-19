import { Verbete, TroubleshootingGuide } from "../types";
import masterAcervo from "./masterAcervoOfficial.json";
import { NOVOS_VERBETES_INSUMOS } from "./verbetesInsumosNovos";
import { NOVOS_VERBETES_LETRA_A } from "./novosVerbetesLetraA";
import { ALL_TROUBLESHOOTING_GUIDES } from "./troubleshootingGuides";
import { MULTI_HEAD_TROUBLESHOOTING_GUIDES } from "./multiHeadTroubleshootingData";

const rawList: Verbete[] = [
  ...(masterAcervo as unknown as Verbete[]),
  ...NOVOS_VERBETES_INSUMOS,
  ...NOVOS_VERBETES_LETRA_A,
];

const uniqueMap = new Map<string, Verbete>();
rawList.forEach((item) => {
  if (!uniqueMap.has(item.id)) {
    uniqueMap.set(item.id, item);
  }
});

export const INITIAL_VERBETES: Verbete[] = Array.from(uniqueMap.values());

export const INITIAL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  ...ALL_TROUBLESHOOTING_GUIDES,
  ...MULTI_HEAD_TROUBLESHOOTING_GUIDES,
];

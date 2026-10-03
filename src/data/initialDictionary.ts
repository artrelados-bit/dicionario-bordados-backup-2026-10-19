import { Verbete, TroubleshootingGuide } from "../types";
import masterAcervo from "./masterAcervoOfficial.json";
import { NOVOS_VERBETES_INSUMOS } from "./verbetesInsumosNovos";
import { NOVOS_VERBETES_LETRA_A } from "./novosVerbetesLetraA";
import { NOVOS_VERBETES_LETRA_B } from "./novosVerbetesLetraB";
import { NOVOS_VERBETES_LETRA_C } from "./novosVerbetesLetraC";
import { NOVOS_VERBETES_LETRA_D } from "./novosVerbetesLetraD";
import { ALL_TROUBLESHOOTING_GUIDES } from "./troubleshootingGuides";
import { MULTI_HEAD_TROUBLESHOOTING_GUIDES } from "./multiHeadTroubleshootingData";

const rawList: Verbete[] = [
  ...(masterAcervo as unknown as Verbete[]),
  ...NOVOS_VERBETES_INSUMOS,
  ...NOVOS_VERBETES_LETRA_A,
  ...NOVOS_VERBETES_LETRA_B,
  ...NOVOS_VERBETES_LETRA_C,
  ...NOVOS_VERBETES_LETRA_D,
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

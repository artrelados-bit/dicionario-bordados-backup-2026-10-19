import { Verbete, TroubleshootingGuide } from "../types";
import masterAcervo from "./masterAcervoOfficial.json";
import { NOVOS_VERBETES_INSUMOS } from "./verbetesInsumosNovos";
import { NOVOS_VERBETES_LETRA_A } from "./novosVerbetesLetraA";
import { NOVOS_VERBETES_LETRA_B } from "./novosVerbetesLetraB";
import { NOVOS_VERBETES_LETRA_C } from "./novosVerbetesLetraC";
import { NOVOS_VERBETES_LETRA_D } from "./novosVerbetesLetraD";
import { NOVOS_VERBETES_LETRA_E } from "./novosVerbetesLetraE";
import { NOVOS_VERBETES_LETRA_E2 } from "./novosVerbetesLetraE2";
import { NOVOS_VERBETES_LETRA_F } from "./novosVerbetesLetraF";
import { NOVOS_VERBETES_LETRA_G } from "./novosVerbetesLetraG";
import { NOVOS_VERBETES_LETRA_M } from "./novosVerbetesLetraM";
import { NOVOS_VERBETES_LETRA_N } from "./novosVerbetesLetraN";
import { NOVOS_VERBETES_ORGANIZADORES } from "./novosVerbetesOrganizadores";
import { NOVOS_VERBETES_ACESSORIOS_PESSOAIS } from "./novosVerbetesAcessoriosPessoais";
import { ALL_TROUBLESHOOTING_GUIDES } from "./troubleshootingGuides";
import { MULTI_HEAD_TROUBLESHOOTING_GUIDES } from "./multiHeadTroubleshootingData";
import { reallocateAndSortVerbetes } from "../utils/alphabeticalSortingRule";

const rawList: Verbete[] = [
  ...(masterAcervo as unknown as Verbete[]),
  ...NOVOS_VERBETES_INSUMOS,
  ...NOVOS_VERBETES_LETRA_A,
  ...NOVOS_VERBETES_LETRA_B,
  ...NOVOS_VERBETES_LETRA_C,
  ...NOVOS_VERBETES_LETRA_D,
  ...NOVOS_VERBETES_LETRA_E,
  ...NOVOS_VERBETES_LETRA_E2,
  ...NOVOS_VERBETES_LETRA_F,
  ...NOVOS_VERBETES_LETRA_G,
  ...NOVOS_VERBETES_LETRA_M,
  ...NOVOS_VERBETES_LETRA_N,
  ...NOVOS_VERBETES_ORGANIZADORES,
  ...NOVOS_VERBETES_ACESSORIOS_PESSOAIS,
];

const uniqueMap = new Map<string, Verbete>();
rawList.forEach((item) => {
  if (!uniqueMap.has(item.id)) {
    uniqueMap.set(item.id, item);
  } else {
    const existing = uniqueMap.get(item.id)!;
    if (!existing.code && item.code) {
      uniqueMap.set(item.id, { ...existing, code: item.code });
    }
  }
});

// Automatic strict alphabetical allocation and sequential numbering
export const INITIAL_VERBETES: Verbete[] = reallocateAndSortVerbetes(
  Array.from(uniqueMap.values())
);

export const INITIAL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  ...ALL_TROUBLESHOOTING_GUIDES,
  ...MULTI_HEAD_TROUBLESHOOTING_GUIDES,
];

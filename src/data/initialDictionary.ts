import { Verbete, TroubleshootingGuide } from "../types";
import { VERBETES_LETTER_A } from "./verbetesLetterA";
import { VERBETES_LETTER_A2 } from "./verbetesLetterA2";
import { VERBETES_LETTER_A3 } from "./verbetesLetterA3";
import { VERBETES_LETTER_B } from "./verbetesLetterB";
import { VERBETES_LETTER_B1 } from "./verbetesLetterB1";
import { VERBETES_LETTER_C } from "./verbetesLetterC";
import { VERBETES_LETTER_D } from "./verbetesLetterD";
import { VERBETES_LETTER_D1 } from "./verbetesLetterD1";
import { VERBETES_LETTER_D2 } from "./verbetesLetterD2";
import { VERBETES_LETTER_E } from "./verbetesLetterE";
import { VERBETES_LETTER_F } from "./verbetesLetterF";
import { VERBETES_LETTER_G } from "./verbetesLetterG";
import { VERBETES_LETTER_H } from "./verbetesLetterH";
import { VERBETES_LETTER_I } from "./verbetesLetterI";
import { VERBETES_LETTER_J } from "./verbetesLetterJ";
import { VERBETES_LETTER_K } from "./verbetesLetterK";
import { VERBETES_LETTER_L } from "./verbetesLetterL";
import { VERBETES_LETTER_M } from "./verbetesLetterM";
import { VERBETES_LETTER_N } from "./verbetesLetterN";
import { VERBETES_LETTER_O } from "./verbetesLetterO";
import { VERBETES_LETTER_P } from "./verbetesLetterP";
import { VERBETES_LETTER_Q } from "./verbetesLetterQ";
import { VERBETES_LETTER_R } from "./verbetesLetterR";
import { VERBETES_LETTER_S } from "./verbetesLetterS";
import { VERBETES_LETTER_T } from "./verbetesLetterT";
import { VERBETES_LETTER_U } from "./verbetesLetterU";
import { VERBETES_LETTER_V } from "./verbetesLetterV";
import { VERBETES_LETTER_W } from "./verbetesLetterW";
import { VERBETES_LETTER_X } from "./verbetesLetterX";
import { VERBETES_LETTER_Y } from "./verbetesLetterY";
import { VERBETES_LETTER_Z } from "./verbetesLetterZ";
import { VERBETES_RESTORED_PART1 } from "./verbetesRestored1";
import { VERBETES_RESTORED_PART2 } from "./verbetesRestored2";
import { VERBETES_RESTORED_PART3 } from "./verbetesRestored3";
import { VERBETES_RESTORED_PART4 } from "./verbetesRestored4";

export const INITIAL_VERBETES: Verbete[] = [
  ...VERBETES_LETTER_A,
  ...VERBETES_LETTER_A2,
  ...VERBETES_LETTER_A3,
  ...VERBETES_LETTER_B,
  ...VERBETES_LETTER_B1,
  ...VERBETES_LETTER_C,
  ...VERBETES_LETTER_D,
  ...VERBETES_LETTER_D1,
  ...VERBETES_LETTER_D2,
  ...VERBETES_LETTER_E,
  ...VERBETES_LETTER_F,
  ...VERBETES_LETTER_G,
  ...VERBETES_LETTER_H,
  ...VERBETES_LETTER_I,
  ...VERBETES_LETTER_J,
  ...VERBETES_LETTER_K,
  ...VERBETES_LETTER_L,
  ...VERBETES_LETTER_M,
  ...VERBETES_LETTER_N,
  ...VERBETES_LETTER_O,
  ...VERBETES_LETTER_P,
  ...VERBETES_LETTER_Q,
  ...VERBETES_LETTER_R,
  ...VERBETES_LETTER_S,
  ...VERBETES_LETTER_T,
  ...VERBETES_LETTER_U,
  ...VERBETES_LETTER_V,
  ...VERBETES_LETTER_W,
  ...VERBETES_LETTER_X,
  ...VERBETES_LETTER_Y,
  ...VERBETES_LETTER_Z,
  ...VERBETES_RESTORED_PART1,
  ...VERBETES_RESTORED_PART2,
  ...VERBETES_RESTORED_PART3,
  ...VERBETES_RESTORED_PART4
];

import { ALL_TROUBLESHOOTING_GUIDES } from "./troubleshootingGuides";
import { MULTI_HEAD_TROUBLESHOOTING_GUIDES } from "./multiHeadTroubleshootingData";

export const INITIAL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  ...ALL_TROUBLESHOOTING_GUIDES,
  ...MULTI_HEAD_TROUBLESHOOTING_GUIDES
];

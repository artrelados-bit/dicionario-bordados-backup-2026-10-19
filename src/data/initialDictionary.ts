import { Verbete, TroubleshootingGuide } from "../types";
import { VERBETES_LETTER_A } from "./verbetesLetterA";
import { VERBETES_LETTER_B } from "./verbetesLetterB";
import { VERBETES_LETTER_C } from "./verbetesLetterC";
import { VERBETES_LETTER_D } from "./verbetesLetterD";
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

export const INITIAL_VERBETES: Verbete[] = [
  ...VERBETES_LETTER_A,
  ...VERBETES_LETTER_B,
  ...VERBETES_LETTER_C,
  ...VERBETES_LETTER_D,
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
  ...VERBETES_LETTER_Z
];

export const INITIAL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  {
    id: "linha-superior-quebrando",
    title: "Linha Superior Quebrando Frequentemente",
    category: "Linhas & Agulhas",
    symptoms: [
      "A linha arrebenta a cada poucos centenas de pontos",
      "Sensor de quebra de linha apita direto no painel da máquina",
      "Fios desfiados na ponta da agulha após a quebra"
    ],
    probableCauses: [
      "Agulha torta, cega ou com rebarba no orifício (olho da agulha)",
      "Tensão da linha superior excessivamente apertada",
      "Linha de má qualidade, ressecada ou armazenada exposta ao sol",
      "Passagem de linha incorreta (linha prendeu no carretel ou suporte)",
      "Velocidade PPM muito alta para a linha metálica ou delicada"
    ],
    stepByStepSolution: [
      "1. Substitua a agulha imediatamente por uma nova agulha de bordado (ex: Organ ou Groz-Beckert 75/11).",
      "2. Retire toda a linha da máquina e passe do zero, garantindo que ela deslize livremente pelos guias e pelo estica-fio.",
      "3. Reduza a tensão da linha superior no botão/disco regulador em 0.5 a 1.0 ponto.",
      "4. Se estiver utilizando linha metálica (dourada/prateada), utilize agulha metálica (ponta mais larga) e borrife silicone spray no carretel.",
      "5. Diminua a velocidade da máquina para 600 PPM no painel."
    ],
    preventiveAdvice: "Mantenha seus cones de linha em local seco e longe da luz solar direta. Troque as agulhas após 8 a 10 horas de uso.",
    recommendedProductsOrSettings: {
      needle: "75/11 SUK ou Metallic Needle 80/12",
      tension: "Ajustar entre 3.0 e 3.5 no disco superior",
      speed: "600 PPM para linhas especiais"
    }
  },
  {
    id: "linha-de-baixo-aparecendo-em-cima",
    title: "Linha Branca de Baixo (Bobina) Aparecendo por Cima",
    category: "Tensão & Caixilho",
    symptoms: [
      "Pontos de linha branca da bobina brotando no topo dos pontos cheios",
      "Bordado fica com aspecto esbranquiçado no acabamento"
    ],
    probableCauses: [
      "Tensão da linha superior muito mais forte que a tensão da caixa de bobina",
      "Caixa de bobina com sujeira/fiapos de linha sob a mola de tensão",
      "Linha de bobina mal passada ou caixa de bobina frouxa demais"
    ],
    stepByStepSolution: [
      "1. Remova a caixa de bobina da máquina e limpe a poeira e fiapos com pincel macio.",
      "2. Verifique se há resíduos sob a lâmina metálica da caixa de bobina usando um pedaço de papel rígido ou estilete sem forçar.",
      "3. Aperte levemente o pequeno parafuso da mola da caixa de bobina no sentido horário (cerca de 1/8 de volta).",
      "4. Afrouxe ligeiramente a tensão da linha superior no painel ou botão regulador."
    ],
    preventiveAdvice: "Realize a limpeza preventiva do conjunto de laçadeira e caixa de bobina ao final de cada dia de trabalho.",
    recommendedProductsOrSettings: {
      tension: "Tensão da bobina calibrada em 18g a 22g no Towa Gauge"
    }
  },
  {
    id: "deslocamento-de-contorno-registration-shift",
    title: "Deslocamento de Contorno (Contorno Fora do Preenchimento)",
    category: "Bastidor & Programação",
    symptoms: [
      "O contorno preto/satin fica desalinhado, deixando um vão branco em relação ao preenchimento tatami",
      "A matriz parece ter 'andado' para o lado durante o bordado"
    ],
    probableCauses: [
      "Tecido frouxo no bastidor ou entretela inadequada (ex: usou Rasga Fácil em malha de algodão)",
      "Falta de compensação de encolhimento (Pull Compensation) na matriz",
      "O bastidor esbarrou no braço da máquina durante a execução em alta velocidade",
      "Falta de subponto (underlay) adequado para estabilizar o tecido"
    ],
    stepByStepSolution: [
      "1. Verifique se o tecido está bem firme no bastidor. Se estiver bordando malha, mude imediatamente para Entretela Recorta (Cutaway) 200g.",
      "2. Se for tecido felpudo ou toalha, adicione filme hidrossolúvel por cima.",
      "3. No software de matrizes (Wilcom, Embird, etc.), aumente o Pull Compensation do preenchimento para +0.25mm a +0.35mm.",
      "4. Adicione sobreposição de pelo menos 0.8mm entre o contorno e a borda da cor de fundo."
    ],
    preventiveAdvice: "Sempre selecione o menor bastidor possível que caiba o desenho com margem de segurança de 1.5cm.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela Recorta 200g/m² em malhas",
      speed: "700 PPM"
    }
  }
];

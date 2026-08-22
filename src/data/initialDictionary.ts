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
    id: "agulha-torta-empenada",
    title: "Agulha Torta / Empenada ou Batendo na Chapa de Ponto",
    category: "Linhas & Agulhas",
    symptoms: [
      "Agulha visivelmente torta ou curvada ao olhar de perfil",
      "Barulho seco metálico (estalo) quando a agulha desce na chapa",
      "Quebra frequente de agulha ou chapa de ponto riscada",
      "Pulos de ponto sucessivos e desfiamento da linha no olho da agulha"
    ],
    probableCauses: [
      "Deflexão da agulha ao penetrar em tecido pesado ou área com densidade excessiva",
      "Puxar ou segurar o bastidor manualmente enquanto a máquina está bordando",
      "Agulha de numeração muito fina (ex: 70/10) para tecidos rígidos (jeans, sarja, lona)",
      "Parafuso do fixador de agulha frouxo ou agulha inserida com o lado chato (flat) virado errado",
      "Bastidor mal travado que se soltou e colidiu com a barra de agulhas"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina de bordar e retire a agulha imediatamente. NUNCA tente desentortar uma agulha; descarte-a com segurança no lixo rígido.",
      "2. Inspecione a chapa de agulha e a laçadeira com a ponta da unha ou cotonete. Se houver arranhões ou rebarbas metálicas deixadas pela agulha torta, lixe delicadamente com lixa d'água 1200.",
      "3. Instale uma agulha NOVA própria para bordado (Organ ou Schmetz 75/11 SUK para tecidos médios ou 80/12/90/14 para tecidos grossos), empurrando até o topo do bloco.",
      "4. Gire o volante manualmente em sua direção (360°) para conferir se a agulha desce perfeitamente centralizada no orifício da chapa.",
      "5. Reduza a velocidade de bordado para 550 a 650 PPM no painel da sua máquina."
    ],
    preventiveAdvice: "Troque a agulha a cada 8 a 10 horas de uso contínuo. Agulhas perdem a rigidez e começam a entortar microscopicamente muito antes de quebrarem.",
    recommendedProductsOrSettings: {
      needle: "Organ 75/11 SUK (Ponta Bola) ou 80/12 DBxK5",
      speed: "600 PPM",
      stabilizer: "Entretela compatível com a espessura do tecido"
    }
  },
  {
    id: "ninho-de-passaro-bird-nesting",
    title: "Ninho de Pássaro (Bird Nesting) / Linha Embolando Embaixo",
    category: "Tensão & Caixilho",
    symptoms: [
      "Grande emaranhado de laçadas e nós embaixo do bastidor",
      "Máquina trava com mensagem de erro de motor ou corte travado",
      "Tecido fica 'puxado' para dentro do furo da chapa de agulha"
    ],
    probableCauses: [
      "Linha superior passada com o calcador ABAIXADO (discos de tensão estavam fechados)",
      "A linha escapou do estica-fio (take-up lever) durante o movimento",
      "Ponta da linha superior não foi segurada nos primeiros pontos do bordado",
      "Fiapo ou linha presa nos discos de tensão superiores",
      "Caixa de bobina solta ou fora do batente de sustentação"
    ],
    stepByStepSolution: [
      "1. Pare a máquina e solte o bastidor com muito cuidado, cortando os fios por baixo com tesourinha de ponta curva sem forçar o pantógrafo.",
      "2. Retire a caixa de bobina e limpe todos os restos de linha e poeira acumulados na laçadeira.",
      "3. LEVANTE O CALCADOR DA MÁQUINA e passe a linha superior do zero, conferindo o encaixe no estica-fio.",
      "4. Recoloque a bobina no sentido correto (formato da letra 'P' ou anti-horário).",
      "5. Ao reiniciar o bordado, segure o rabicho da linha superior nos primeiros 4 pontos."
    ],
    preventiveAdvice: "Regra fundamental da oficina: NUNCA passe a linha com o calcador abaixado. Sempre levante o calcador para abrir os discos de tensão.",
    recommendedProductsOrSettings: {
      tension: "Superior 3.2 a 3.8 | Bobina 20g a 24g",
      speed: "650 PPM"
    }
  },
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
  },
  {
    id: "tecido-enrugado-repuxado-puckering",
    title: "Tecido Enrugado / Franzido ao Redor do Bordado (Puckering)",
    category: "Bastidor & Programação",
    symptoms: [
      "O tecido ao redor do bordado fica franzido e com ondas depois que sai do bastidor",
      "O bordado fica rígido como uma tábua e repuxa a peça de roupa"
    ],
    probableCauses: [
      "Puxar as bordas do tecido para esticar na hora de fechar o bastidor (o tecido relaxa depois e enruga)",
      "Entretela fraca para o peso do tecido ou ausência de entretela recorta em malhas",
      "Densidade de pontos exagerada na matriz (pontos muito colados abaixo de 0.35mm)",
      "Tensão superior e de bobina muito apertadas"
    ],
    stepByStepSolution: [
      "1. Não estique o tecido com força ao bastidorar; o tecido deve ficar plano e suave, como estendido em uma mesa.",
      "2. Para tecidos com elastano, malha e piquet, utilize entretela de recorte (Cutaway) com cola spray temporária.",
      "3. No programa de bordado, aumente o espaçamento de pontos (densidade 0.40mm no satin e 0.42mm no tatami).",
      "4. Afrouxe levemente a tensão da linha superior."
    ],
    preventiveAdvice: "Use cola temporária em spray 505 para unir o tecido à entretela antes de travar no bastidor.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela Recorta (Cutaway) 80g a 200g",
      needle: "75/11 Ponta Bola (SES/SUK)"
    }
  },
  {
    id: "pulos-de-ponto-skipped-stitches",
    title: "Pulos de Ponto (Skipped Stitches) / Falha na Formação do Ponto",
    category: "Linhas & Agulhas",
    symptoms: [
      "Pontos abertos ou fios soltos flutuando sobre o tecido",
      "Partes do desenho ficam sem bordar sem que a linha tenha quebrado"
    ],
    probableCauses: [
      "Agulha torta, sem ponta ou colocada na altura errada",
      "Calcador da máquina muito alto, permitindo que o tecido suba junto com a agulha (bandeiramento)",
      "Tecido muito espesso ou elástico fazendo o laço de linha colapsar antes da laçadeira pegar"
    ],
    stepByStepSolution: [
      "1. Coloque uma agulha nova própria de bordado e empurre até o topo do encaixe.",
      "2. Regule a altura do calcador para que ele fique a 1mm acima do tecido quando a agulha estiver no ponto mais baixo.",
      "3. Se o tecido for felpudo ou elástico, use filme plástico solúvel por cima.",
      "4. Reduza a velocidade da máquina para 550 PPM."
    ],
    preventiveAdvice: "Use sempre agulhas com cava profunda (Deep Scarf / sistema DBxK5) que facilitam a captura da linha pela laçadeira.",
    recommendedProductsOrSettings: {
      needle: "Organ 75/11 DBxK5 ou 130/705 H-E",
      speed: "550 a 600 PPM"
    }
  }
];


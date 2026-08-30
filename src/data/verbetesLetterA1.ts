// DIBE Artrelados - Letra A Complementar (Novos Verbetes A-077 a A-086)
import { Verbete } from '../types';

export const VERBETES_LETTER_A1: Verbete[] = [
  {
    id: "a-077-ajuste-de-angulo-automatico",
    code: "A-077",
    letter: "A",
    term: "Ajuste de Ângulo Automático (Auto Angle Stitch Flow)",
    level: "Avançado 🔴",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do latim angularis (que tem cantos) e do grego automatos (que age por si próprio). Desenvolvido nos softwares de CAD têxtil na década de 1990 para calcular a inclinação de pontos em curvas contínuas.",
    category: "Programação de Bordado",
    summary: "Algoritmo que calcula e suaviza a inclinação angular das laçadas ao longo de curvas e contornos de uma matriz.",
    definition: "O ajuste de ângulo automático (Auto Angle Stitch Flow) é a funcionalidade de software de programação de matrizes de bordado que calcula, interpola e ajusta dinamicamente as linhas de inclinação das laçadas ao longo da trajetória de um bloco de desenho (seja em colunas de ponto cheio/satin ou blocos de tatami). A ferramenta evita que ocorram angulações bruscas ou pontos em leque excessivamente fechados na borda interna de curvas acentuadas, prevenindo o empilhamento de perfurações no mesmo local.",
    technicalDetails: "Nos softwares como Wilcom ES, Tajima DG/ML e Brother PE-Design, o ajuste automático analisa os nós de controle das curvas de Bézier e projeta vetores normais à linha de centro. Quando o raio de curvatura é inferior a 1,5 mm, o algoritmo aplica atenuação fracionada de densidade (Short Stitching / Pontos Curtos) associada ao giro gradual de 5° a 15° por ponto.",
    beginnerExplanation: "Imagine que você está fazendo uma curva fechada com o carro: em vez de virar o volante de uma vez só, o ajuste de ângulo automático vai virando o ponto da máquina bem devagarinho e de forma suave ao redor da curva. Isso impede que a agulha bata várias vezes no mesmo buraquinho e fure o tecido.",
    howItWorks: [
      "1. O software mapeia a linha de contorno e a linha média da forma geométrica curva.",
      "2. Calcula a taxa de variação angular em cada segmento de curva.",
      "3. Distribui os pontos de entrada e saída mantendo o paralelismo visual constante.",
      "4. Insere compensação de pontos curtos nas margens internas mais estreitas."
    ],
    construction: [
      "Vetor diretor de inclinação",
      "Ponto de entrada (Entry point)",
      "Ponto de saída (Exit point)",
      "Gradiente angular interpolado",
      "Filtro de pontos curtos integrados"
    ],
    mainTypes: [
      "Ângulo Automático Curvilíneo (segue a espinha central)",
      "Ângulo Automático Radial (emite raios a partir de um centro focal)",
      "Ângulo Automático Adaptativo com Pontos Curtos"
    ],
    characteristics: [
      "Transição visualmente imperceptível da direção do brilho da linha",
      "Preservação da elasticidade natural do bordado ao longo de curvas",
      "Eliminação do efeito de degrau serrilhado nas bordas circulares"
    ],
    applications: [
      "Contornos de letras cursivas com laços e curvas acentuadas.",
      "Pétalas de flores e folhas com curvatura orgânica realista.",
      "Bordas de brasões heráldicos e monogramas clássicos."
    ],
    commonErrors: [
      "❌ Deixar o ângulo automático sem verificar nós de curvas duplas, gerando sobreposição de linhas em 'V'",
      "❌ Aplicar ângulo automático em formas com cantos vivos de 90°, onde o correto é chanfrar ou criar sobreposição em meia-esquadria",
      "❌ Desativar a função de pontos curtos (short stitches) em curvas fechadas com ângulo automático"
    ],
    troubleshootingTips: [
      "Se a linha estiver embolando na borda de dentro da curva: Ative a opção 'Pontos Curtos' associada ao ângulo automático no software.",
      "Se a curva parecer 'quebrada' na visualização 3D: Insira mais nós de inclinação manuais nos pontos críticos de transição.",
      "Se o tecido repuxar em forma de ondas na curva: Aumente a compensação de encolhimento e suavize o gradiente de ângulo."
    ],
    dicaArtrelados: "No software de criação, nunca confie 100% no cálculo automático para letras cursivas muito pequenas (abaixo de 12 mm): dê zoom máximo na curva de letras como 'e', 'l' e 'g' e ajuste manualmente os ângulos para que fiquem ligeiramente abertos, garantindo que o miolo da letra não fique cego!",
    voceSabia: "A reflexão da luz na linha de bordado depende inteiramente do ângulo em que o ponto foi batido. Um círculo perfeito bordado com pontos no mesmo sentido parece plano; o mesmo círculo com ângulo automático circular parece uma esfera metálica tridimensional brilhante!",
    practicalExercise: "Abra uma letra 'C' em ponto cheio no seu software de matrizes. Teste aplicar um único ângulo fixo a 45° e depois aplique o Ângulo Automático com linhas de direção. Veja na visualização 3D como a luz e a uniformidade da largura mudam drasticamente.",
    quickSummary: "Cálculo digital automatizado da inclinação dos pontos ao longo de curvas que garante acabamento suave, brilho uniforme e evita acúmulo de agulhadas.",
    recommendedSettings: {
      density: "0.38 mm a 0.42 mm",
      speedPPM: "700 a 850 PPM",
      needleType: "75/11 Ponta Bola Leve (SES)",
      stabilizer: "Entretela rasgável ou hidrossolúvel conforme tecido"
    },
    relatedTerms: [
      "Ângulo de Ponto (Stitch Angle)",
      "Ponto Cheio / Satin",
      "Pontos Curtos (Short Stitches)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Digitalização de Matrizes"
    ],
    tags: ["a-077", "angulo automatico", "programacao", "wilcom", "matriz", "curvas", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. EmbroideryStudio Technical Reference: Auto-Stitch Angle Algorithms. Sydney, 2023.",
      "TAJIMA DG/ML BY PULSE. Vector-Based Angle Interpolation and Density Control. Dallas, 2022.",
      "ARTRELADOS. Fundamentos de Programação Avançada de Curvas e Ângulos em Matrizes de Bordado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-078-alongamento-de-ponto-de-preenchimento",
    code: "A-078",
    letter: "A",
    term: "Alongamento de Ponto de Preenchimento (Fill Stitch Length Elongation)",
    level: "Intermediário 🟡",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do latim elongare (tornar mais longo) e do francês plein (cheio). Parâmetro fundamental dos pontos tatami/esteira desde as primeiras máquinas de leitura por fita perfurada.",
    category: "Programação de Bordado",
    summary: "Parâmetro que define o comprimento individual de cada batida de agulha dentro de um bloco de preenchimento tatami.",
    definition: "O alongamento de ponto de preenchimento (Fill Stitch Length Elongation) é o parâmetro geométrico que determina a distância milimétrica percorrida pela linha entre duas perfurações consecutivas de agulha dentro de um padrão de preenchimento tatami (esteira). Regular o comprimento do ponto é essencial para equilibrar a textura visual, a maleabilidade do tecido bordado e a velocidade de execução da máquina.",
    technicalDetails: "O valor padrão do comprimento de ponto em preenchimentos industriais varia entre 3,5 mm e 4,5 mm. Comprimentos inferiores a 2,5 mm criam bordados excessivamente rígidos ('placas') e aumentam o tempo de produção; comprimentos superiores a 5,5 mm tornam as laçadas vulneráveis a enroscar em botões, joias e lavagens.",
    beginnerExplanation: "É o tamanho de cada pontinho de costura que a máquina dá para cobrir uma área grande. Se o pontinho for muito miúdo, o bordado fica duro como papelão e demora para bordar; se for muito comprido, o fio fica solto e pode puxar na primeira lavagem.",
    howItWorks: [
      "1. O programador define o comprimento base (ex: 4,0 mm) no software de digitalização.",
      "2. O algoritmo distribui as perfurações com desencontro regular (offset) para evitar linhas verticais visíveis.",
      "3. A máquina avança o pantógrafo na distância exata para cravar a laçada sem afrouxar.",
      "4. Nas bordas da área, o software ajusta o último ponto para casar exatamente com o contorno."
    ],
    construction: [
      "Comprimento nominal de ponto (Stitch length)",
      "Deslocamento de fileira (Fractional row offset)",
      "Ponto mínimo permitido (Minimum stitch threshold)",
      "Filtro de pontos de borda (Edge travel filter)"
    ],
    mainTypes: [
      "Comprimento Fixo Padronizado (4.0 mm)",
      "Comprimento Aleatório Variável (Random Fill - efeito couro/camurça)",
      "Comprimento Curto de Alta Definição (2.8 mm - para microdetalhes)"
    ],
    characteristics: [
      "Influência direta na maciez e caimento da peça bordada",
      "Redução de até 25% na contagem total de pontos de áreas grandes",
      "Maior durabilidade contra abrasão em uniformes profissionais"
    ],
    applications: [
      "Preenchimento de grandes fundos em jaquetas, brasões e flâmulas.",
      "Logotipos corporativos com áreas chapadas em camisas polo e piquê.",
      "Bordados em couro legítimo para não picotar o substrato."
    ],
    commonErrors: [
      "❌ Deixar pontos menores que 2,0 mm em couro ou camurça, picotando o material como se fosse selo postal",
      "❌ Usar pontos muito longos (acima de 6 mm) em uniformes infantis onde dedinhos podem puxar o fio",
      "❌ Esquecer de calibrar a compensação de repuxo ao aumentar o comprimento do ponto"
    ],
    troubleshootingTips: [
      "Se o bordado estiver duro e armado como papelão: Aumente o comprimento do ponto de 3,5 mm para 4,5 mm e reduza ligeiramente a densidade.",
      "Se os pontos parecerem frouxos ou desfiando: Reduza o comprimento do ponto para 3,8 mm e verifique a tensão da linha superior.",
      "Se o couro estiver rasgando na borda: Aumente o comprimento para 4,8 mm para espaçar as perfurações da agulha."
    ],
    dicaArtrelados: "Para bordar toalhas de banho ou moletons grossos, use comprimento de ponto em 4,2 mm no tatami. Isso dá maciez espetacular ao toque e permite que o ponto 'flutue' delicadamente sobre a entretela hidrossolúvel sem sufocar as cerdas da toalha!",
    voceSabia: "Ao aumentar o comprimento do ponto de 3,0 mm para 4,2 mm em um bordado grande de 50.000 pontos, você pode economizar até 8 minutos de máquina e quase 100 metros de linha de bordar sem perder a cobertura visual!",
    practicalExercise: "Crie dois quadrados idênticos de 5x5 cm no seu software. No primeiro, defina comprimento de ponto 3,0 mm; no segundo, 4,5 mm. Borde ambos em um retalho de tecido comum e dobre-os com os dedos para sentir a diferença de flexibilidade.",
    quickSummary: "Distância milimétrica entre as batidas de agulha no ponto esteira que determina a maciez da peça, a velocidade de produção e a firmeza da cobertura.",
    recommendedSettings: {
      density: "0.40 mm a 0.45 mm",
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Universal ou Ponta Bola",
      stabilizer: "Entretela rasgável de 40g a 60g"
    },
    relatedTerms: [
      "Ponto Tatami / Esteira",
      "Densidade de Ponto (Stitch Density)",
      "Comprimento de Ponto (Stitch Length)",
      "Compensação de Tração (Pull Compensation)",
      "Picotamento de Substrato"
    ],
    tags: ["a-078", "alongamento de ponto", "tatami", "preenchimento", "software", "densidade", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Stitch Length Optimization and Fabric Flexibility Standards. Sydney, 2023.",
      "EMBROIDERY DIGITIZING SOCIETY. Tatami Pattern Mechanics & Structural Integrity. London, 2021.",
      "ARTRELADOS. Guia de Texturas, Caimento e Comprimento de Ponto para Confecção. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-079-amortecimento-de-impacto-de-calcador",
    code: "A-079",
    letter: "A",
    term: "Amortecimento de Impacto de Calcador (Presser Foot Impact Cushioning)",
    level: "Intermediário 🟡",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do latim admortire (suavizar, extinguir força) e calcatorium (peça que pisa/pressiona). Mecanismo aprimorado nas cabeças de bordado de alta velocidade da década de 1980.",
    category: "Componentes e Mecânica da Máquina",
    summary: "Sistema e ajuste mecânico da pressão do calcador que evita marcas de esmagamento e vibrações na barra de agulha.",
    definition: "O amortecimento de impacto de calcador (Presser Foot Impact Cushioning / Height Adjustment) é o conjunto de ajustes mecânicos, molas amortecedoras e batentes de altura que controlam a força e a profundidade com que o pé calcador desce sobre o tecido a cada descida da agulha. O ajuste correto garante que o tecido fique firme durante a subida da agulha (evitando que o tecido 'pule' e falhe a laçada) sem amassar as fibras ou deixar marcas permanentes de atrito.",
    technicalDetails: "A folga ideal entre a base do calcador (no seu ponto morto inferior) e a superfície do tecido esticado no bastidor deve ser de 0,5 mm a 1,0 mm (equivalente à espessura de um cartão de visita). Em máquinas eletrônicas modernas, o calcador é acionado por carne excêntrico ou motor de passo independente com sistema pneumático de amortecimento.",
    beginnerExplanation: "O pezinho de ferro que fica em volta da agulha bate no tecido toda vez que a agulha desce. O amortecimento serve para fazer esse pezinho segurar o pano no lugar sem bater com muita força, evitando deixar marcas feias de amassado ou rasgar tecidos delicados.",
    howItWorks: [
      "1. A barra de agulha desce e aciona a biela excêntrica do calcador.",
      "2. O calcador encosta suavemente na superfície do tecido milissegundos antes da penetração da agulha.",
      "3. Mantém o tecido imóvel durante o tempo de formação da laçada inferior.",
      "4. Eleva-se no momento em que o pantógrafo desloca o bastidor para o ponto seguinte."
    ],
    construction: [
      "Haste do pé calcador (Presser bar)",
      "Mola helicoidal de pressão amortecedora",
      "Parafuso de regulagem de altura micrométrica",
      "Anel de proteção plástica/teflon anti-atrito",
      "Biela excêntrica de sincronismo mecânico"
    ],
    mainTypes: [
      "Calcador Mecânico Tradicional com Mola de Aço",
      "Calcador com Base Revestida em Teflon (para couro e vinil)",
      "Calcador com Altura Eletrônica Programável (controlado pelo painel da máquina)"
    ],
    characteristics: [
      "Prevenção do efeito de 'salto de tecido' (flagging)",
      "Proteção total contra esmagamento de veludo e felpa de toalhas",
      "Diminuição sensível do ruído e vibração acústica da máquina"
    ],
    applications: [
      "Bordados em tecidos felpudos, toalhas de banho e veludo aveludado.",
      "Bordados em couro natural, camurça e material sintético espesso.",
      "Bordados tridimensionais com espuma EVA (Puff 3D)."
    ],
    commonErrors: [
      "❌ Deixar o calcador muito baixo, esmagando o tecido e deixando marcas brilhantes circulares impossíveis de remover",
      "❌ Deixar o calcador excessivamente alto, fazendo o tecido pular ('flagging') e quebrar linha a cada 50 pontos",
      "❌ Não reajustar a altura do calcador ao alternar entre bordar uma camiseta fina e um boné ou toalha grossa"
    ],
    troubleshootingTips: [
      "Se o tecido estiver com marcas circulares esbranquiçadas ao redor do bordado: Eleve a altura do calcador em 0,5 mm a 1 mm.",
      "Se a máquina estiver pulando pontos em tecidos finos: Abaixe ligeiramente o pé calcador para segurar o tecido mais firme.",
      "Se ouvir um barulho de estalo forte a cada ponto: A mola do calcador pode estar ressecada ou batendo no fim do curso; lubrifique com gota de óleo branco mineral."
    ],
    dicaArtrelados: "Para regular a altura do calcador perfeitamente em 10 segundos: coloque um cartão de visita ou cartão de crédito em cima do tecido no bastidor, gire o volante manual da máquina até o calcador descer no ponto mais baixo e ajuste o parafuso para que o cartão consiga deslizar com leve resistência!",
    voceSabia: "Em uma máquina bordando a 900 PPM, o pé calcador atinge o tecido 15 vezes por segundo! Sem uma mola amortecedora calibrada, o impacto contínuo geraria calor e vibração suficientes para afrouxar os parafusos da barra de agulha em poucos dias.",
    practicalExercise: "Pegue um pedaço de toalha de banho com felpa alta no bastidor. Coloque a agulha na posição mais baixa girando o volante manual. Solte o parafuso traseiro do calcador, suba-o 1 mm para não amassar as felpas e reaperte. Borde um monograma e veja como a felpa fica perfeita.",
    quickSummary: "Calibração e amortecimento da força exercida pelo pé calcador sobre o tecido para manter a estabilidade da laçada sem esmagar as fibras.",
    recommendedSettings: {
      speedPPM: "650 a 800 PPM",
      needleType: "75/11 Ponta Bola com haste reforçada",
      stabilizer: "Entretela hidrossolúvel no topo + rasgável na base",
      threadTension: "Leve e balanceada"
    },
    relatedTerms: [
      "Pé Calcador (Presser Foot)",
      "Efeito de Pulo de Tecido (Flagging)",
      "Barra de Agulha (Needle Bar)",
      "Marca de Bastidor (Hoop Burn)",
      "Bordado 3D com EVA (Puff Embroidery)"
    ],
    tags: ["a-079", "amortecimento de calcador", "mecanica", "calcador", "toalhas", "flagging", "artrelados"],
    bibliographicReferences: [
      "BARUDAN INDUSTRIAL EMBROIDERY. Mechanical Presser Foot Timing and Height Calibration. Ichinomiya, 2022.",
      "TAJIMA TECHNICAL MANUAL. Dynamic Fabric Clamping and Foot Clearance Standards. Nagoya, 2021.",
      "ARTRELADOS. Manutenção e Ajustes Mecânicos Finos em Máquinas de Bordar Computadorizadas. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-080-ancoragem-em-ponto-cruz-eletronico",
    code: "A-080",
    letter: "A",
    term: "Ancoragem em Ponto Cruz Eletrônico (Cross-Stitch Underlay Anchor)",
    level: "Intermediário 🟡",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim ancora (suporte, fixação firme) e do inglês cross-stitch (ponto em cruz). Técnica adaptada do bordado manual tradicional para a precisão dos sistemas computadorizados.",
    category: "Programação de Bordado",
    summary: "Base estrutural invisível que sustenta a formação perfeita das cruzetas sem distorcer a malha ou o tecido étamine.",
    definition: "A ancoragem em ponto cruz eletrônico (Cross-Stitch Underlay Anchor) é a estrutura de suporte digital programada para fixar o tecido à entretela e estabilizar as interseções das cruzetas antes da execução dos pontos decorativos em 'X'. Como o ponto cruz eletrônico possui alta tensão nos vértices onde quatro braços se encontram, uma base de ancoragem estratégica impede que as perfurações abram buracos ou desalinhem a grade ortogonal.",
    technicalDetails: "A ancoragem é executada em ponto corrido linear (Running stitch) de 1,5 mm a 2,0 mm de comprimento com baixo deslocamento, posicionada exatamente sob o eixo central dos pontos cruzados ou em grade fina de fixação prévia (Basting Grid). Isso anula a deformação por cisalhamento em tecidos de trama aberta como étamine, linho e cânhamo.",
    beginnerExplanation: "É uma costurinha de base bem escondida que a máquina faz antes de bordar os pontinhos de cruz. Ela serve para segurar o tecido bem preso na entretela para que as cruzes fiquem retinhas, perfeitas e não fiquem tortas ou com buraquinhos abertos.",
    howItWorks: [
      "1. A máquina costura uma linha corrida de ancoragem na base de cada bloco de cruzetas.",
      "2. Cria micro-pontos de amarração nos nós de início para não soltar a ponta da linha.",
      "3. Executa a primeira diagonal inferior (/) em sequência contínua.",
      "4. Retorna executando a segunda diagonal superior (\\), cruzando perfeitamente no centro sobre a base ancorada."
    ],
    construction: [
      "Ponto corrido de amarração inicial",
      "Pilar linear de ancoragem axial",
      "Braço diagonal inferior (primeira passada)",
      "Braço diagonal superior (segunda passada de fechamento)",
      "Nó de travamento final"
    ],
    mainTypes: [
      "Ancoragem Linear Axial (corre pelo meio da fileira de cruz)",
      "Ancoragem em Grade de Pesponto (Basting Underlay)",
      "Ancoragem Dupla Reforçada (para tecidos elásticos)"
    ],
    characteristics: [
      "Imitação perfeita do aspecto visual do ponto cruz feito à mão",
      "Alinhamento milimétrico sem desvios entre cruzetas vizinhas",
      "Eliminação de buracos de perfuração em tecidos delicados"
    ],
    applications: [
      "Toalhas de mesa, panos de prato e peças de enxoval em estilo rústico.",
      "Bordados temáticos infantis e florais tradicionais em étamine e linho.",
      "Quilting e patchwork com motivos geométricos retrô."
    ],
    commonErrors: [
      "❌ Bordar ponto cruz sem nenhuma ancoragem prévia em tecido de malha, fazendo as cruzes ficarem tortas e ovais",
      "❌ Programar ancoragem muito espessa com ponto cheio por baixo, deformando a delicadeza visual do ponto cruz",
      "❌ Usar linha de bobina desregulada que sobe nos cantos das cruzetas"
    ],
    troubleshootingTips: [
      "Se as cruzetas estiverem ficando tortas ou com formato de paralelogramo: Ative a ancoragem linear e aumente a tensão da entretela no bastidor.",
      "Se aparecerem buracos brancos no centro do tecido étamine: Use agulha ponta bola fina 70/10 e ative pontos de ancoragem prévia.",
      "Se a linha estiver arrebentando nos cruzamentos: Diminua a velocidade da máquina para 600 PPM para permitir a acomodação perfeita dos 4 fios no mesmo furo."
    ],
    dicaArtrelados: "Para dar ao ponto cruz de máquina o charme idêntico ao feito à mão pelas nossas avós, use linha de algodão calibre 50 ou poliéster fosco (Matte) a 600 PPM com agulha 75/11 ponta bola. O resultado fica tão perfeito que ninguém acredita que foi feito na máquina eletrônica!",
    voceSabia: "O software de ponto cruz digital calcula a rota mais curta e sem cortes (Eulerian Path) para bordar milhares de cruzetas em sequência contínua, economizando centenas de cortes de tesoura automática da máquina!",
    practicalExercise: "Crie uma pequena flor em ponto cruz no software do seu ateliê. Borde a primeira versão direto no tecido sem ancoragem e a segunda com uma grade de pesponto prévia (Basting). Compare com uma lupa a perfeição dos cantos da segunda amostra.",
    quickSummary: "Pesponto estrutural oculto que garante a geometria perfeita e o alinhamento das cruzetas do ponto cruz eletrônico sem distorcer o tecido.",
    recommendedSettings: {
      density: "Grade de 14 a 18 pontos por polegada (Count 14 a 18)",
      speedPPM: "550 a 650 PPM",
      needleType: "70/10 ou 75/11 Ponta Bola (SES)",
      stabilizer: "Entretela rasgável de boa densidade (50g)"
    },
    relatedTerms: [
      "Ponto Cruz Eletrônico (Cross Stitch)",
      "Ponto Corrido / Pesponto (Running Stitch)",
      "Estrutura de Base / Suporte (Underlay)",
      "Tecido Étamine",
      "Alinhamento de Grade (Grid Alignment)"
    ],
    tags: ["a-080", "ancoragem", "ponto cruz", "cross stitch", "programacao", "artrelados", "etamine"],
    bibliographicReferences: [
      "WILCOM CROSS STITCH DESIGNER. Algorithmic Grid Generation and Path Optimization. Sydney, 2022.",
      "BROTHER EMBROIDERY SYSTEMS. Cross Stitch Module Manual & Stabilizer Guidelines. Nagoya, 2021.",
      "ARTRELADOS. Guia de Ponto Cruz Computadorizado com Acabamento Artesanal. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-081-angulo-de-entrada-e-saida-de-bloco",
    code: "A-081",
    letter: "A",
    term: "Ângulo de Entrada e Saída de Bloco (Entry and Exit Stitch Direction)",
    level: "Avançado 🔴",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do latim angulus (canto/direção) e do termo técnico de computação gráfica para nós de fluxo vetorial.",
    category: "Programação de Bordado",
    summary: "Posicionamento estratégico dos pontos de início e término de um objeto na matriz para conectar elementos sem cortes.",
    definition: "O ângulo e posicionamento de entrada e saída de bloco (Entry and Exit Stitch Direction / Travel Pathing) é o planejamento deliberado do nó exato onde a máquina inicia a primeira laçada de um objeto gráfico (Entry Point - representado pelo círculo ou cruz verde no software) e onde aplica o último ponto antes de transitar para o próximo objeto (Exit Point - representado pelo quadrado ou cruz vermelha). O domínio desses pontos elimina cortes desnecessários e fios passantes aparentes.",
    technicalDetails: "Ao aproximar o ponto de saída do Bloco A do ponto de entrada do Bloco B, o software programa uma linha de caminhamento oculta (Travel Stitch) sob futuras camadas de bordado, dispensando o acionamento da faca de corte e o ciclo de arremate/re-amarração, o que preserva os motores de corte e reduz em até 30% o tempo total de bordado.",
    beginnerExplanation: "Quando a máquina termina de bordar uma folha e vai começar outra, ela precisa saber por onde sair e por onde entrar na próxima. Se você colocar o ponto de saída bem pertinho de onde começa a outra folha, a máquina não precisa cortar a linha nem deixar fios feios atravessados no meio do bordado.",
    howItWorks: [
      "1. O programador visualiza os conectores de entrada (verde) e saída (vermelho) no software.",
      "2. Arrasta o ponto de saída para a extremidade mais próxima do próximo elemento a ser bordado.",
      "3. Posiciona o ponto de entrada do elemento seguinte na mesma coordenada.",
      "4. O software converte a transição em um pulo direto ou caminhamento sob a área que será coberta."
    ],
    construction: [
      "Ponto de Entrada (Entry node / Green mark)",
      "Ponto de Saída (Exit node / Red mark)",
      "Linha de caminhamento embutida (Internal travel line)",
      "Arremate de conexão automática (Branching link)"
    ],
    mainTypes: [
      "Entrada/Saída Manual Otimizada (feita pelo digitalizador)",
      "Ramificação Automática (Auto-Branching)",
      "Conexão Invisível sob Cobertura (Hidden Underlay Pathing)"
    ],
    characteristics: [
      "Redução drástica no número de cortes de linha da matriz",
      "Avesso do bordado extremamente limpo e profissional",
      "Prevenção de desfiamentos causados por pontas soltas de cortes sucessivos"
    ],
    applications: [
      "Nomes e escritas cursivas contínuas sem cortes entre as letras.",
      "Bordados florais com muitos ramos, galhos e folhas interligadas.",
      "Bordados em peças de bebê onde o avesso não pode ter nós ou pontas duras de linha."
    ],
    commonErrors: [
      "❌ Deixar entrada e saída em extremidades opostas, forçando a máquina a atravessar uma linha por cima do desenho",
      "❌ Programar a saída de um bloco por baixo de uma área que não receberá preenchimento, deixando a linha de transporte visível",
      "❌ Não aplicar arremate quando a distância entre a saída e a entrada seguinte ultrapassar 2 mm sem caminhamento embutido"
    ],
    troubleshootingTips: [
      "Se a máquina estiver cortando a linha entre letras que deveriam ser emendadas: Abra o software e una o ponto de saída da letra anterior com a entrada da próxima.",
      "Se aparecer uma linha reta indesejada atravessando o desenho: Mude o ponto de entrada para o início correto da forma ou ative o corte de salto.",
      "Se o verso da peça estiver cheio de 'cabelinhos' de linha: Reprograme as entradas e saídas para otimizar o fluxo de ramificação (Branching)."
    ],
    dicaArtrelados: "A regra de ouro da Artrelados para bordado limpo: ao programar qualquer galho ou escrita cursiva, use a ferramenta 'Ramificação' (Branching) do software! Ela calcula automaticamente as entradas e saídas perfeitas de todos os galhos, bordando tudo com uma única linha sem nenhum corte sequer!",
    voceSabia: "Cada corte de linha da máquina consome cerca de 4 a 6 segundos (desaceleração, acionamento do solenoide da faca, corte, deslocamento e reinício lento). Uma matriz com 50 cortes desnecessários perde mais de 4 minutos inteiros por peça produzida!",
    practicalExercise: "Digitalize três letras cursivas simples (como 'ana'). Na primeira tentativa, deixe os pontos de entrada e saída automáticos padrão. Na segunda, una manualmente a saída do 'a' com a entrada do 'n' e a saída do 'n' com a entrada do último 'a'. Simule na tela e conte a diferença no número de cortes.",
    quickSummary: "Direcionamento dos nós de início e fim de cada bloco que permite conectar elementos em sequência contínua, economizando tempo e limpando o avesso.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Ponta Bola Leve",
      stabilizer: "Entretela rasgável macia"
    },
    relatedTerms: [
      "Ponto de Entrada e Saída (Entry/Exit Points)",
      "Ramificação Automática (Auto-Branching)",
      "Caminhamento Oculto (Travel Stitch)",
      "Corte de Linha Automático (Auto Trimming)",
      "Avesso Perfeito"
    ],
    tags: ["a-081", "angulo de entrada", "pontos de saida", "branching", "programacao", "cortes", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Advanced Pathing, Branching and Connectivity Guide. Sydney, 2023.",
      "TAJIMA PULSE DG. Smart Path Optimization and Trim Reduction Systems. Dallas, 2022.",
      "ARTRELADOS. A Arte do Avesso Perfeito: Otimização de Caminhos e Entradas em Matrizes. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-082-aplique-revestido-em-cetim-bicolor",
    code: "A-082",
    letter: "A",
    term: "Aplique Revestido em Cetim Bicolor (Two-Tone Satin Appliqué Border)",
    level: "Avançado 🔴",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do francês appliquer (aplicar/sobrepor) e do árabe hispânico zaytuni (cetim, seda brilhante de Tsinkiang). Técnica nobre desenvolvida para alta costura e moda esportiva colegial.",
    category: "Técnicas de Aplique & Relevo",
    summary: "Borda de acabamento para tecidos sobrepostos composta por duas colunas de cetim em cores contrastantes com efeito sombreado.",
    definition: "O aplique revestido em cetim bicolor (Two-Tone Satin Appliqué Border) é a técnica mista de programação e execução de bordado que utiliza duas faixas adjacentes ou sobrepostas de ponto cheio (satin) de cores diferentes para selar e decorar a borda do tecido de aplique recortado. Essa técnica confere efeito visual tridimensional de relevo, chanfro ou moldura chanfrada de alta classe, muito utilizada em emblemas colegiais, uniformes desportivos e jaquetas universitárias.",
    technicalDetails: "A primeira coluna de cetim interna (mais larga, cerca de 2,5 mm a 3,5 mm) prende firmemente o tecido do aplique à base com densidade média (0.42 mm). A segunda coluna de cetim externa (mais estreita, de 1,2 mm a 1,8 mm) é sobreposta na borda exterior com densidade alta (0.36 mm) e cor contrastante, criando um contorno nítido que impede o desfiamento do tecido cortado.",
    beginnerExplanation: "É uma técnica linda onde você cola ou costura um pedaço de tecido no bordado e, em vez de fazer uma borda simples de uma cor só em volta dele, você faz duas faixas de pontos cheios brilhantes em duas cores diferentes (como dourado e azul-marinho). Fica parecendo um brasão chique de jaqueta universitária!",
    howItWorks: [
      "1. A máquina costura a linha guia de marcação (Die-line / Placement stitch).",
      "2. O operador posiciona o tecido de aplique sobre a marcação.",
      "3. A máquina faz a costura de fixação (Tackdown stitch).",
      "4. O operador recorta o excesso de tecido com tesoura de ponta curvada (tipo pelicano).",
      "5. A máquina borda a primeira coluna de cetim de base mais larga na cor primária.",
      "6. A máquina troca de cor e borda a segunda coluna de cetim fina externa de acabamento."
    ],
    construction: [
      "Linha de demarcação (Position line)",
      "Costura de fixação (Tackdown)",
      "Tecido de aplique (Feltro, sarja, lurex ou algodão)",
      "Coluna interna de cetim primária",
      "Coluna externa de cetim de contraste/bicolor"
    ],
    mainTypes: [
      "Bicolor Lado a Lado (Dual Parallel Satin)",
      "Bicolor Sobreposto com Sombra (Shadow Edge Appliqué)",
      "Bicolor Metálico com Núcleo Fosco"
    ],
    characteristics: [
      "Acabamento extremamente resistente a lavagens pesadas",
      "Aspecto visual premium tridimensional de medalha/brasão",
      "Cobertura 100% segura contra qualquer desfiamento de fibra cortada"
    ],
    applications: [
      "Jaquetas esportivas colegiais (Letterman jackets) e moletons universitários.",
      "Uniformes de futebol, basquete, beisebol e artes marciais.",
      "Enxovais infantis temáticos de luxo com feltro ou tecido aveludado."
    ],
    commonErrors: [
      "❌ Recortar o tecido do aplique muito longe da linha de fixação, fazendo pontas de tecido escaparem por baixo do cetim",
      "❌ Deixar a segunda coluna de cetim desalinhada por falta de compensação de repuxo (Pull Compensation)",
      "❌ Usar densidade excessiva nas duas camadas sobrepostas, quebrando agulha pelo endurecimento do ponto"
    ],
    troubleshootingTips: [
      "Se aparecer uma fresta entre as duas cores de cetim: Aumente a sobreposição entre as colunas em 0,3 mm no software para compensar a tração.",
      "Se o tecido de dentro estiver desfiando: Use termocolante permanente no verso do tecido do aplique antes de cortar.",
      "Se a agulha quebrar ao bordar a segunda cor: Reduza a densidade da primeira camada de cetim de 0.38 mm para 0.45 mm."
    ],
    dicaArtrelados: "Para cortar o tecido do aplique bem rente sem correr risco de picotar o tecido de baixo, use uma tesoura pelicano (aquela com uma lâmina larga em forma de colher). A parte larga protege o tecido da peça enquanto a ponta fina apara o aplique a menos de 1 milímetro da costura!",
    voceSabia: "Os uniformes originais das universidades americanas nos anos 1950 usavam feltro de pura lã com aplique de cetim duplo costurado à mão; hoje a máquina de bordar computadorizada faz o mesmo brasão perfeito em menos de 4 minutos!",
    practicalExercise: "Pegue um pedaço de feltro amarelo e sarja preta. Crie uma estrela com aplique e configure uma borda interna de cetim preta de 3 mm e uma borda externa vermelha de 1,5 mm. Borde e observe o efeito tridimensional deslumbrante.",
    quickSummary: "Borda decorativa e protetora de aplique formada por duas faixas de ponto cheio de cores contrastantes que criam efeito de moldura nobre e relevo.",
    recommendedSettings: {
      density: "Coluna primária 0.42 mm; Coluna secundária 0.38 mm",
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Aguda (RG ou Microtex)",
      stabilizer: "Entretela rasgável pesada de 60g a 80g"
    },
    relatedTerms: [
      "Aplique de Tecido (Appliqué)",
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Linha de Marcação (Placement Stitch)",
      "Linha de Fixação (Tackdown Stitch)",
      "Tesoura Pelicano (Duckbill Scissors)"
    ],
    tags: ["a-082", "aplique bicolor", "cetim", "satin", "tecnicas", "universitario", "artrelados"],
    bibliographicReferences: [
      "NATIONAL EMBROIDERY APPAREL ASSOCIATION. Appliqué Digitizing and Multi-Tone Border Finishing. Chicago, 2022.",
      "WILCOM INTERNATIONAL. Professional Letterman Jacket Appliqué Standards. Sydney, 2023.",
      "ARTRELADOS. Guia de Técnicas Avançadas de Apliques e Emblemas de Luxo. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-083-arremate-em-ponto-trancado-duplo",
    code: "A-083",
    letter: "A",
    term: "Arremate em Ponto Trancado Duplo (Double Lock Stitch Knot)",
    level: "Intermediário 🟡",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do latim re-ramus (atar ramos) e do inglês lock stitch (ponto de tranca/nó). Criado para garantir que bordados industriais não desmanchem sob lavagens industriais a vapor.",
    category: "Programação de Bordado",
    summary: "Sequência programada de micro-pontos entrelaçados em duas direções opostas que trava o fio antes do corte de linha.",
    definition: "O arremate em ponto trancado duplo (Double Lock Stitch Knot / Tie-Off) é o conjunto de 3 a 5 micro-pontos de alta precisão (com comprimento entre 0,6 mm e 1,0 mm) programados na terminação de um bloco de bordado imediatamente antes do acionamento da faca de corte. A execução em duas direções perpendiculares ou em estrela garante o aprisionamento definitivo da linha superior com a linha da bobina, impedindo que as pontas se soltem durante o uso e a lavagem da peça.",
    technicalDetails: "Diferente do arremate simples linear (que apenas costura para a frente e para trás na mesma linha), o arremate trancado duplo desloca o ponto em ângulo de 90° a 120°, criando um nó mecânico tridimensional sob a cobertura do bordado. Esse nó fica completamente oculto sob as laçadas anteriores sem gerar calombos perceptíveis ao toque.",
    beginnerExplanation: "É o nózinho invisível e super reforçado que a máquina dá no final de cada letra ou desenho antes de cortar a linha. Esse nó garante que o bordado nunca vai desmanchar ou soltar fiapos, mesmo depois de ser lavado dezenas de vezes na máquina de lavar roupa.",
    howItWorks: [
      "1. A máquina conclui o preenchimento ou coluna do objeto.",
      "2. Dá 2 micro-pontos de 0,8 mm no sentido do alinhamento do ponto.",
      "3. Desvia a agulha em 90° e executa mais 2 micro-pontos transversais cruzando a laçada da bobina.",
      "4. Centraliza a agulha na posição superior e aciona a faca de corte automático."
    ],
    construction: [
      "Ponto de desaceleração pré-arremate",
      "Primeiro micro-vetor de travamento longitudinal",
      "Segundo micro-vetor de travamento transversal",
      "Laçada de captura inferior da bobina",
      "Comando de corte de linha (Trim command)"
    ],
    mainTypes: [
      "Arremate em Cruz / Trancado Duplo (Cross Lock Tie-off)",
      "Arremate Circular em Roseta (Circle Knot)",
      "Arremate em 'Z' Oculto (Z-Knot Underlay)"
    ],
    characteristics: [
      "Resistência máxima a ciclos de lavagem industrial pesada e secadoras",
      "Fio 100% invisível na frente da peça (fica escondido embaixo dos pontos)",
      "Eliminação de retrabalho manual de corte de pontas de linha soltas"
    ],
    applications: [
      "Uniformes profissionais industriais, hospitalares e militares.",
      "Toalhas de hotelaria que passam por lavanderia industrial com produtos químicos.",
      "Bordados em roupas esportivas de alto impacto sujeitas a atrito contínuo."
    ],
    commonErrors: [
      "❌ Programar micro-pontos menores que 0,4 mm, fazendo a agulha perfurar o mesmo ponto e quebrar o fio no nó",
      "❌ Desativar o arremate final em letras pequenas achando que o nó vai ficar visível, fazendo o bordado desmanchar",
      "❌ Colocar o arremate fora da área coberta pelo desenho, deixando um carocinho de linha aparente"
    ],
    troubleshootingTips: [
      "Se as pontas das letras estiverem se soltando após a lavagem: Ative a opção 'Double Lock Stitch' / 'Arremate Duplo' nas propriedades do software.",
      "Se a linha estiver quebrando exatamente no momento de cortar: Aumente o comprimento dos micro-pontos de arremate de 0,5 mm para 0,8 mm.",
      "Se o arremate estiver empurrando o tecido para dentro da chapa: Verifique a tensão da bobina e use entretela mais encorpada."
    ],
    dicaArtrelados: "Se você estiver bordando tecidos super leves e transparentes (como voal, organza ou seda), configure o arremate como 'Invisível em Linha Reta' com 3 pontinhos de 0,7 mm no mesmo sentido da costura. O nó fica totalmente invisível até olhando contra a luz!",
    voceSabia: "Um nó de arremate duplo bem calibrado suporta uma tração de mais de 1,2 kg de força no fio de poliéster 120 sem desatar!",
    practicalExercise: "Abra um arquivo de monograma no seu software e veja a aba de arremates (Tie-off). Alterne entre 'Nenhum', 'Simples' e 'Double Lock'. Gere uma amostra e tente puxar a ponta do fio com uma pinça fina para constatar a força de retenção do nó duplo.",
    quickSummary: "Nó de amarração programado em micro-pontos cruzados que ancora a linha superior à da bobina antes do corte, impedindo desfiamentos.",
    recommendedSettings: {
      density: "3 a 4 micro-pontos de 0.8 mm",
      speedPPM: "Desaceleração automática no corte para 400 PPM",
      needleType: "75/11 Universal ou Ponta Bola",
      stabilizer: "Entretela conforme substrato"
    },
    relatedTerms: [
      "Arremate Inicial (Tie-In)",
      "Arremate Final (Tie-Off)",
      "Corte de Linha Automático (Auto Trimming)",
      "Ponto de Amarração (Lock Stitch)",
      "Resistência à Tração"
    ],
    tags: ["a-083", "arremate duplo", "tie off", "lock stitch", "nó", "lavagens", "artrelados"],
    bibliographicReferences: [
      "GERMAN EMBROIDERY MACHINERY ASSOCIATION. Lockstitch Mechanics and Knot Stability Standards. Frankfurt, 2022.",
      "WILCOM EMBROIDERY STUDIO. Tie-In and Tie-Off Parameter Optimization. Sydney, 2023.",
      "ARTRELADOS. Guia de Durabilidade e Resistência de Bordados Industriais. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-084-aterramento-antiestatico-de-linha-metalica",
    code: "A-084",
    letter: "A",
    term: "Aterramento Antiestático de Linha Metálica (Metallic Thread Static Dissipation)",
    level: "Avançado 🔴",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do grego elektron (âmbar, eletricidade estática) e do latim metallum (metal, mina). Técnica desenvolvida pelos ateliês de bordado de luxo para lidar com o atrito dos fios metalizados sintéticos.",
    category: "Agulhas & Fios",
    summary: "Procedimento e acessórios para anular a eletricidade estática acumulada no desenrolar de linhas de ouro e prata.",
    definition: "O aterramento antiestático de linha metálica (Metallic Thread Static Dissipation / De-Static Pathing) é o conjunto de técnicas operacionais, preparação física e acessórios condutivos utilizados na passagem do fio metálico (linha com alma de poliamida revestida por lâmina microscópica de poliéster metalizado em alumínio ou prata). O atrito do desenrolar em alta velocidade gera cargas triboelétricas que fazem o fio 'grudar' no cabeçote e arrebentar por torção.",
    technicalDetails: "Ao aplicar uma rede de silicone/espuma condutiva lubrificada na saída do cone e posicionar o cone de linha metálica a pelo menos 40 cm de distância vertical do primeiro guia-fio, o ângulo de desenrolamento é aberto e a carga estática é dissipada. O uso de agulha com olho ampliado e canaleta profunda (sistema 130/705H-MET ou DBx7ST) evita o superaquecimento por atrito.",
    beginnerExplanation: "Linhas de bordar de ouro e prata têm uma película fininha de metal brilhante. Quando a máquina gira rápido, essa linha cria 'eletricidade estática' (como quando você esfrega uma bexiga no cabelo) e gruda nos ferros da máquina, quebrando toda hora. O aterramento antiestático é a técnica simples de afastar o cone e passar um pouquinho de silicone para a linha correr lisinha como seda.",
    howItWorks: [
      "1. O cone de linha metálica é posicionado com suporte vertical de saída suave.",
      "2. A linha passa por uma redinha protetora de trama fina que estabiliza o desenrolar sem solavancos.",
      "3. Passa por um feltro condutor levemente umedecido com óleo de silicone mineral puro.",
      "4. Entra nos tensores com pressão 30% mais suave que a usada para linhas de poliéster comuns.",
      "5. Desce até a agulha especial para linha metálica com furo alongado e polido."
    ],
    construction: [
      "Redinha de cone de tensão suave (Thread net)",
      "Feltro lubrificador condutivo de silicone",
      "Haste telescópica de elevação de cone (Thread stand)",
      "Agulha de olho ampliado para metálico (Metallic Needle)",
      "Fio condutivo antiestático de aterramento da carcaça"
    ],
    mainTypes: [
      "Aterramento por Feltro Lubrificador com Silicone Líquido",
      "Aterramento por Redinha de Tensão Gravitacional",
      "Passagem com Suporte Externo Distanciado (Floor Thread Stand)"
    ],
    characteristics: [
      "Redução de mais de 90% nas quebras de linha de ouro e prata",
      "Brilho metálico espelhado intacto sem vincos ou nós de torção",
      "Trabalho contínuo da máquina a velocidades normais sem paradas constantes"
    ],
    applications: [
      "Bordados litúrgicos, paramentos eclesiásticos e mantos sagrados.",
      "Brasões militares de gala, dragonas e fardões de formatura.",
      "Moda noiva, vestidos de festa e alta costura internacional."
    ],
    commonErrors: [
      "❌ Usar linha metálica com a mesma tensão apertada da linha normal de poliéster, estourando o fio a cada 20 pontos",
      "❌ Deixar o cone de metálico embaixo do guia curto, fazendo o fio desenrolar em espirais presas (efeito mola)",
      "❌ Usar agulha comum 75/11 fina com furo pequeno, que descasca a lâmina de ouro da linha"
    ],
    troubleshootingTips: [
      "Se a linha metálica estiver descascando e empacando no olho da agulha: Troque imediatamente para uma agulha específica para bordado metálico (Metallic 80/12 ou 90/14).",
      "Se o fio estiver enrolando em si mesmo antes de entrar no tensor: Coloque uma redinha no cone e afaste o suporte de linha da máquina.",
      "Se a máquina perder a laçada com frequência: Reduza a velocidade de bordado para 550 a 650 PPM."
    ],
    dicaArtrelados: "O segredo de mestre do ateliê Artrelados para linha de ouro: coloque o cone de linha metálica dentro de uma xícara ou suporte no chão, atrás da máquina, para que a linha suba mais de 1 metro antes de entrar no primeiro furinho! Isso desfaz qualquer torção e a linha corre tão macia que nunca mais quebra!",
    voceSabia: "As linhas metálicas de altíssima nobreza usadas em paramentos reais chegam a ter 0,5% de prata pura laminada sobre um núcleo de seda natural!",
    practicalExercise: "Coloque uma linha metálica na máquina sem redinha e borde 500 pontos. Depois, coloque a redinha no cone e pingue uma gota de óleo de silicone no feltro guia. Sinta com os dedos como a linha passa muito mais macia e silenciosa.",
    quickSummary: "Conjunto de ajustes e lubrificação que anula o atrito e as cargas elétricas estáticas, permitindo bordar com fios de ouro e prata sem quebras.",
    recommendedSettings: {
      speedPPM: "500 a 650 PPM",
      needleType: "80/12 ou 90/14 Metallic / Topstitch com olho expandido",
      threadTension: "Tensão bem solta (30% a 40% menor que o padrão)",
      stabilizer: "Entretela macia com filme plástico hidrossolúvel no topo"
    },
    relatedTerms: [
      "Linha Metálica de Bordado (Metallic Thread)",
      "Agulha para Linha Metálica (Metallic Needle)",
      "Tensão de Linha Superior (Upper Tension)",
      "Redinha de Cone (Thread Net)",
      "Lubrificação de Fios Têxteis"
    ],
    tags: ["a-084", "linha metalica", "antiestatico", "ouro", "agulhas", "fios", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Metallic Embroidery Thread Handling and Tension Guide. Freiburg, 2022.",
      "SULKY OF AMERICA. Conquering Metallic Threads: Needle, Tension and Static Solutions. Kennesaw, 2021.",
      "ARTRELADOS. Manual de Bordados de Gala com Fios Metálicos Preciosos. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-085-automacao-de-sequenciamento-de-cores",
    code: "A-085",
    letter: "A",
    term: "Automação de Sequenciamento de Cores (Color Sequence Optimization)",
    level: "Intermediário 🟡",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do grego automatos (automático) e do latim sequentia (continuidade ordenada). Recurso matemático de ordenação lógica integrado aos softwares de bordado.",
    category: "Programação de Bordado",
    summary: "Agrupamento lógico dos blocos de uma matriz para bordar todos os elementos da mesma cor em sequência única.",
    definition: "A automação de sequenciamento de cores (Color Sequence Optimization / Color Sort) é a ferramenta de processamento algorítmico de software que reordena a lista de execução dos objetos da matriz para agrupar todos os blocos que utilizam a mesma cor de linha em uma única parada de cor contínua, respeitando estritamente a hierarquia de sobreposição (camadas de fundo, meio e topo).",
    technicalDetails: "O algoritmo constrói uma árvore de dependência de profundidade (Z-Order Tree). Ele identifica quais objetos da mesma cor podem ser fundidos na linha do tempo sem que um elemento de primeiro plano seja bordado antes do seu respectivo fundo. Essa otimização é vital especialmente para máquinas de bordar de uma única agulha (domésticas), reduzindo dezenas de trocas manuais de cone.",
    beginnerExplanation: "Quando um desenho tem muitas partes azuis, vermelhas e amarelas espalhadas, o sequenciamento automático junta todas as partes azuis para serem bordadas juntas primeiro, depois todas as vermelhas e depois as amarelas. Assim você não precisa ficar trocando de linha 15 vezes seguidas!",
    howItWorks: [
      "1. O usuário finaliza a criação ou abre uma matriz com múltiplas trocas de cor.",
      "2. Aciona o comando 'Otimizar Cores' (Color Sort) no software.",
      "3. O software analisa as camadas de sobreposição para não cobrir partes erradas.",
      "4. Agrupa os blocos da mesma tonalidade e recalcula as linhas de viagem entre eles.",
      "5. Exibe a nova lista reduzida de paradas de cor com o tempo economizado."
    ],
    construction: [
      "Lista original de paradas de cor (Color Stop List)",
      "Grafo de dependência de camadas (Layer dependency graph)",
      "Filtro de proteção de sobreposição (Overlap barrier)",
      "Lista consolidada otimizada (Optimized stop sequence)"
    ],
    mainTypes: [
      "Otimização Global de Cores (Color Sort)",
      "Otimização de Cores em Multi-Posicionamento (Multi-Hoop Color Sorter)",
      "Reordenação Manual por Arrastar de Camadas"
    ],
    characteristics: [
      "Redução drástica do tempo de produção em máquinas de 1 agulha",
      "Menor risco de erro do operador ao selecionar a linha no painel",
      "Manutenção rigorosa da fidelidade artística do desenho original"
    ],
    applications: [
      "Repetição de matrizes idênticas no mesmo bastidor (ex: 10 chaveiros ou tags de uma vez).",
      "Matrizes complexas com logotipos multicoloridos.",
      "Bordados infantis com muitos detalhes e sombras coloridas."
    ],
    commonErrors: [
      "❌ Forçar a união de cores em matrizes sem verificar sobreposição, fazendo os olhos de um bichinho serem bordados por baixo do rosto",
      "❌ Esquecer de ativar o 'Color Sort' ao duplicar matrizes no bastidor gigante da máquina",
      "❌ Agrupar cores com tonalidades ligeiramente diferentes (ex: azul royal com azul marinho) perdendo o degradê"
    ],
    troubleshootingTips: [
      "Se um detalhe do bordado sumiu embaixo do preenchimento: Desfaça a otimização automática e ajuste a ordem das camadas manualmente na barra de objetos.",
      "Se você estiver usando máquina de 1 agulha e cansar de trocar linha: Use a função 'Agrupar Cores' no software antes de passar o arquivo para o pen-drive.",
      "Ao bordar múltiplos chaveiros no mesmo bastidor: Otimize as cores para que a máquina faça todas as marcações de uma vez, todos os apliques juntos e todas as bordas no final."
    ],
    dicaArtrelados: "Quando for produzir brindes ou tags em série (ex: 6 chaveiros no bastidor 13x18 ou 20x30 cm), sempre use a 'Otimização de Cores'. Em vez de trocar de linha 30 vezes, a máquina vai pedir apenas 5 trocas de cor para fazer os 6 chaveiros de uma só vez!",
    voceSabia: "Ao bordar uma folha com 8 brasões no mesmo bastidor industrial, a automação de cores reduz o tempo de trabalho de 48 minutos para apenas 19 minutos, economizando mais de 60% de energia e mão de obra!",
    practicalExercise: "Pegue uma matriz pequena com 4 cores. Duplique-a 4 vezes na tela do seu software. Veja que a lista de cores foi para 16 paradas. Aplique a ferramenta 'Color Sort' e veja a lista voltar magicamente para apenas 4 paradas de cor.",
    quickSummary: "Algoritmo que reorganiza as paradas de cor da matriz para bordar tudo da mesma tonalidade de uma só vez sem alterar a sobreposição do desenho.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Universal",
      stabilizer: "Entretela rasgável compatível com o tecido"
    },
    relatedTerms: [
      "Parada de Cor (Color Stop)",
      "Ordem de Objetos (Object Sequence)",
      "Bordado em Série (Multi-Hoop Embroidery)",
      "Máquina de Agulha Única (Single Needle)",
      "Camadas de Desenho (Design Layers)"
    ],
    tags: ["a-085", "sequenciamento de cores", "color sort", "programacao", "otimizacao", "producao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Color Management and Sequence Optimization Manual. Sydney, 2023.",
      "EMBIRD SOFTWARE SUITE. Color Sort & Multi-Hooping Best Practices. Bratislava, 2022.",
      "ARTRELADOS. Guia de Produtividade e Produção em Série no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "a-086-avanco-micrometrico-de-bastidor",
    code: "A-086",
    letter: "A",
    term: "Avanço Micrométrico de Bastidor (Pantograph Micro-Stepping Drive)",
    level: "Avançado 🔴",
    grammarClass: "Locução substantiva masculina.",
    origin: "Do grego mikros (pequeno) e metron (medida) e do italiano bastone (haste/armação). Mecanismo eletromecânico aperfeiçoado com os motores de passo híbridos.",
    category: "Componentes e Mecânica da Máquina",
    summary: "Sistema de tração mecânica do pantógrafo com precisão de frações de milímetro que evita vibrações em pontos minúsculos.",
    definition: "O avanço micrométrico de bastidor (Pantograph Micro-Stepping Drive) é o sistema eletromecânico composto por servomotores digitais ou motores de passo de alta resolução, fusos de esferas recirculantes e correias dentadas reforçadas com fibra de carbono que movem o pantógrafo nos eixos X e Y com precisão de até 0,01 mm por pulso eletrônico.",
    technicalDetails: "O sistema de micro-passo divide cada pulso do motor elétrico em até 256 micropulsos senoidais. Isso elimina o choque inercial (tranco) quando o bastidor precisa frear e mudar de direção entre pontos adjacentes em frações de milissegundos a 1.000 PPM, garantindo contornos perfeitamente circulares e letras minúsculas de 3 mm sem deformação geométrica.",
    beginnerExplanation: "É o sistema super inteligente de motores e correias que move o bastidor da máquina com a precisão de um relógio suíço. É ele que faz o bastidor andar passinhos microscópicos sem tremer, permitindo que a máquina borde letrinhas miúdas de 3 milímetros sem borrar nada!",
    howItWorks: [
      "1. O processador da máquina lê as coordenadas X e Y do próximo ponto na matriz.",
      "2. O driver eletrônico envia pulsos fracionados de corrente senoidal para os motores de passo dos eixos X e Y.",
      "3. As correias sincronizadoras transmitem o movimento suave ao pantógrafo.",
      "4. O bastidor é posicionado com precisão de centésimos de milímetro antes da descida da ponta da agulha.",
      "5. Sensores ópticos verificam o retorno de posição em tempo real."
    ],
    construction: [
      "Driver eletrônico de micro-passo digital (Microstep Driver)",
      "Servomotor híbrido bipolar de alto torque (Eixos X e Y)",
      "Correias sincronizadoras de poliuretano com alma de aço",
      "Guias lineares prismáticas com esferas recirculantes",
      "Braço de fixação mecânica do pantógrafo"
    ],
    mainTypes: [
      "Micro-Passo por Servomotor AC Brushless (Industrial de alta velocidade)",
      "Micro-Passo por Motor de Passo Híbrido com Closed-Loop (Sensor de retorno)",
      "Micro-Passo Convencional de Máquina Doméstica (Correia dentada simples)"
    ],
    characteristics: [
      "Perfeição absoluta no fechamento de contornos finos e monogramas",
      "Redução expressiva de ruído sonoro mecânico durante o bordado",
      "Eliminação de perda de passos (deslocamento de matriz) por inércia"
    ],
    applications: [
      "Micro-letras e escritas corporativas de alta definição (3 mm a 5 mm).",
      "Bordados de alta densidade com contornos de precisão milimétrica.",
      "Matrizes gigantescas que exigem alinhamento perfeito de emendas."
    ],
    commonErrors: [
      "❌ Bater a mão ou esbarrar no bastidor com a máquina em movimento, forçando os motores de passo a perderem a coordenada",
      "❌ Deixar o bastidor pesado com tecido pendurado para fora da mesa sem apoio, gerando sobrecarga mecânica no eixo Y",
      "❌ Não limpar nem lubrificar as guias lineares e correias do pantógrafo conforme o manual da máquina"
    ],
    troubleshootingTips: [
      "Se os contornos do bordado estiverem caindo fora do preenchimento: Verifique se as correias do pantógrafo não estão frouxas ou se o bastidor bateu em algum obstáculo.",
      "Se as letras redondas estiverem ficando ovais: Limpe e lubrifique os trilhos do eixo X e Y da máquina com óleo apropriado.",
      "Se a máquina fizer um barulho de 'grilo' ou vibração estridente ao se mover rápido: Solicite revisão técnica para calibrar a tensão das correias de micro-passo."
    ],
    dicaArtrelados: "Para proteger o sistema de avanço micrométrico da sua máquina e nunca perder o ponto: nunca deixe peças pesadas (como jaquetas de couro ou colchas grossas) penduradas para fora da mesa puxando o bastidor para baixo! Apoie o excesso de tecido em uma mesa auxiliar ou no seu colo enquanto borda!",
    voceSabia: "Nas primeiras máquinas automáticas dos anos 1970, o bastidor só conseguia se mover em passos de 0,5 mm; hoje, os sistemas modernos de micro-passo conseguem mover o bastidor em incrementos de 0,005 mm — ou seja, 100 vezes mais preciso!",
    practicalExercise: "Borde uma palavra com letras bem pequenas (4 mm de altura) em um tecido firme. Use uma lupa e repare como cada ponto de agulha cai perfeitamente no lugar planejado, sem nenhum tremor ou ziguezague fora do contorno.",
    quickSummary: "Tecnologia eletromecânica de alta precisão que movimenta o pantógrafo em frações minúsculas de milímetro, garantindo contornos nítidos e micro-letras perfeitas.",
    recommendedSettings: {
      speedPPM: "Para micro-letras: 550 a 650 PPM; Geral: 750 a 900 PPM",
      needleType: "65/9 ou 70/10 Ponta Fina (Sharp / Microtex)",
      stabilizer: "Entretela rasgável de alta densidade ou entretela de corte limpo (Cutaway)"
    },
    relatedTerms: [
      "Pantógrafo de Bordado (Pantograph)",
      "Motor de Passo (Stepper Motor)",
      "Deslocamento de Matriz (Frame Out of Sync)",
      "Micro-Letras (Micro Lettering)",
      "Guia Linear (Linear Guide)"
    ],
    tags: ["a-086", "avanco micrometrico", "pantografo", "motores", "micro-passo", "precisao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL JOURNAL. Micro-stepping Drive Mechanics & High-Speed Frame Dynamics. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL EMBROIDERY. Precision Pantograph Motion & Belt Tensioning Manual. Ichinomiya, 2021.",
      "ARTRELADOS. Guia de Mecânica, Precisão e Alinhamento de Pantógrafos em Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

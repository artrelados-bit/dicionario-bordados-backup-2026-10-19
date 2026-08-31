import { Verbete } from "../types";

export const VERBETES_LETTER_V1: Verbete[] = [
  {
    id: "vetorizacao-de-matrizes-vectorization-tracing",
    code: "V-001",
    letter: "V",
    term: "Vetorização de Matrizes (Vectorization / Tracing)",
    pronunciation: "ve-to-ri-za-ção de ma-tri-zes (vec-to-ri-zei-shon / trei-sing)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino.",
    origin: "Do latim 'vector' (aquele que conduz, transportador) somado ao sufixo grego-latino '-izar'. No design computacional, refere-se à conversão de imagens baseadas em pixels (bitmap/raster) em entidades matemáticas vetoriais compostas por nós, linhas e curvas Bézier parametrizáveis.",
    summary: "Processo de conversão de desenhos, fotos ou logos em formato raster (JPG, PNG) para traçados vetoriais matemáticos interpretáveis por softwares de bordado computadorizado.",
    definition: "A Vetorização de Matrizes é a etapa fundamental da digitalização de bordados onde uma imagem bidimensional baseada em matriz de pontos/pixels (JPEG, PNG, BMP, TIFF) é convertida em curvas geométricas vetoriais escaláveis. Como as máquinas de bordar não costuram pixels, mas sim trajetórias de agulha calculadas por coordenadas cartesianas X e Y, a vetorização define as bordas, contornos, orifícios e direções das formas que posteriormente serão preenchidas por pontos tatami, pontos cheios ou pontos corridos.",
    technicalDetails: "Arquivos bitmap perdem resolução ao serem ampliados (pixelização), o que impossibilita o cálculo exato da densidade de pontos. A vetorização recria a geometria da imagem através de equações polinomiais paramétricas (Curvas de Bézier cúbicas). Cada objeto vetorizado armazena atributos como nós de ancoragem, alças de tangência, ângulo de inclinação e conectividade. No software de bordado (Wilcom, Embird, Bernina, PE-Design), esses vetores recebem propriedades de pontos, underlay, compensação de encolhimento e sequenciamento de corte.",
    beginnerExplanation: "É como passar um desenho de papel vegetal por cima de uma foto antiga para tirar apenas os contornos limpos: o software precisa desse traço matemático perfeito para saber onde a agulha vai entrar e sair, já que a máquina não entende pontinhos de foto (pixels), apenas linhas de costura.",
    howItWorks: [
      "1. A imagem do cliente (logo, arte ou desenho) é importada para a tela de trabalho do software de digitalização.",
      "2. O digitalizador ajusta o contraste e a escala dimensional real em milímetros.",
      "3. Utilizando ferramentas de curva Bézier, desenham-se os contornos de cada elemento cromático.",
      "4. Furos e recortes internos são subtraídos do objeto geométrico principal.",
      "5. O software converte a área delimitada pelo vetor em linhas de costura com base na densidade configurada.",
      "6. A matriz vetorial é finalmente exportada para a linguagem de máquina (DST, PES, JEF, EXP)."
    ],
    applications: [
      "Conversão de logomarcas corporativas para bordado em uniformes.",
      "Criação de matrizes a partir de desenhos infantis e ilustrações feitas à mão.",
      "Adaptação de artes gráficas de serigrafia ou estamparia para o relevo tridimensional da linha.",
      "Redimensionamento de desenhos sem qualquer perda de qualidade ou deformação de contorno."
    ],
    characteristics: [
      "Independência de resolução: pode ser ampliado ou reduzido mantendo bordas perfeitamente nítidas.",
      "Permite edição nó por nó para arredondar cantos, suavizar pontas e ajustar compensações.",
      "Serve de base direta para a atribuição de diferentes tipos de pontos (tatami, cheio, aplique)."
    ],
    commonErrors: [
      "❌ Tentar bordar diretamente uma imagem PNG ou JPG sem vetorizá-la previamente no software.",
      "❌ Gerar vetores com excesso de nós redundantes, resultando em contornos serrilhados e pontos quebrados.",
      "❌ Não fechar curvas vetoriais poligonais, impedindo que o software preencha a área com ponto tatami."
    ],
    troubleshootingTips: [
      "Contornos do bordado tortos ou serrilhados: entre no modo de edição de nós e remova vértices excessivos usando a ferramenta de suavização Bézier.",
      "Objeto não aceita preenchimento: verifique se os nós inicial e final do vetor estão perfeitamente soldados (Close Curve).",
      "Linha quebrando nas bordas: confira se os nós da curva não criaram laços ou auto-interseções invisíveis."
    ],
    dicaArtrelados: "Antes de começar a vetorizar no software de bordado, prepare a arte no CorelDRAW ou Illustrator limpando pequenos ruídos e reduzindo o número de cores. Quanto mais limpo e minimalista for o seu vetor original, mais macia, rápida e impecável será a matriz bordada na máquina!",
    voceSabia: "Nas primeiras máquinas automáticas com cartões perfurados jacquard do século XIX, a 'vetorização' era feita por desenhistas industriais que traçavam milimetricamente a grade de agulhas em mesas de luz gigantescas chamadas 'penteadeiras de desenho'!",
    practicalExercise: "Importe o logotipo de uma letra simples (como a letra 'V') em formato PNG de baixa qualidade no seu software. Trace manualmente com a ferramenta de curvas, inserindo apenas 4 nós mestres. Aplique ponto cheio e observe como o contorno fica ultra-suave.",
    quickSummary: "Processo de conversão de imagens em pontos e pixels para curvas matemáticas vetoriais que guiam o cálculo das coordenadas de costura da máquina.",
    relatedTerms: ["Curvas de Bézier", "Nós de Controle", "Auto-Digitalização", "Ponto Tatami", "Ponto Cheio", "DST"],
    imageUrl: "/images/v001_vetorizacao_v1.jpg?v=1",
    imageCaption: "Anatomia da Vetorização de Matrizes: a conversão de imagens pixeladas em curvas vetoriais matemáticas limpas para a geração de pontos acetinados e preenchimentos perfeitos na máquina.",
    tags: ["vetorizacao", "vetor", "bezier", "software", "programacao", "wilcom", "desenho"]
  },
  {
    id: "vetorizacao-manual-vs-automatica-manual-vs-auto-digitizing",
    code: "V-002",
    letter: "V",
    term: "Vetorização Manual vs Automática (Manual vs Auto-Digitizing)",
    pronunciation: "ve-to-ri-za-ção ma-nu-al vêr-sus au-to-má-ti-ca (mén-yual vs ó-to di-ji-tai-zing)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'manualis' (feito com as mãos) e do grego 'automatos' (que se move por si mesmo), em oposição técnica originada nos primeiros softwares de bordado assistido por computador (CAD/CAM) na década de 1990.",
    summary: "Comparativo técnico e prático entre a digitalização automática por algoritmo de software e a digitalização manual ponto a ponto realizada por um programador de matrizes experiente.",
    definition: "A Vetorização Manual vs Automática representa o grande divisor de águas na qualidade de matrizes de bordado. A auto-digitalização (Auto-Digitizing / Magic Wand) utiliza algoritmos de reconhecimento de bordas por contraste de cor para gerar blocos de pontos instantâneos. Já a vetorização manual é o processo artesanal e técnico onde o programador define individualmente o ângulo do ponto, a compensação de encolhimento, os pontos de ancoragem (underlay), os caminhos de ligação e a ordem exata de costura para evitar deformações.",
    technicalDetails: "Softwares de auto-vetorização analisam matrizes de pixels e frequentemente criam milhares de nós desnecessários, gerando pontos curtos (<0.8 mm) que esfarelam o tecido, além de aplicar ângulos de ponto uniformes em 0° ou 90° que ignoram a tração mecânica do tecido. A digitalização manual permite ao operador aplicar a física da costura: orientar pontos no sentido de menor estiramento da trama, calcular sobreposições de 0.8 a 1.2 mm para compensar o 'Pull Effect', e inserir ramificações inteligentes (branching) para eliminar 80% dos cortes de linha.",
    beginnerExplanation: "A vetorização automática é como usar um tradutor automático ruim: ele traduz palavra por palavra e a frase fica sem sentido. A vetorização manual é como um tradutor humano profissional que entende o contexto: o bordado fica sem nós embolados, não repuxa o tecido e roda macio na máquina sem quebrar linha.",
    howItWorks: [
      "1. Auto-Digitizing: O software lê a imagem, agrupa pixels por tolerância de cor e cria objetos com configurações genéricas padronizadas.",
      "2. Manual Digitizing: O profissional analisa o tecido-alvo (malha, toalha, sarja) e planeja a sequência lógica de trás para a frente.",
      "3. O programador traça nó por nó, definindo curvas harmoniosas e margens de sangria para sobreposição.",
      "4. São adicionados subpontos customizados (tatami sob áreas largas, center walk sob colunas finas).",
      "5. Os ângulos de ponto são desenhados acompanhando a curvatura natural da figura para gerar brilho tridimensional.",
      "6. O resultado manual gasta menos pontos, não enruga a peça e tem vida útil infinitamente superior na máquina."
    ],
    applications: [
      "Produção de matrizes profissionais para marcas de moda e confecções industriais.",
      "Bordados em peças desafiadoras como piquet, malha fria, couro e toalhas felpudas.",
      "Otimização de tempo de máquina: eliminação de cortes de linha e pulos ociosos.",
      "Microletras e textos pequenos onde a auto-digitalização invariavelmente falha e empelota."
    ],
    characteristics: [
      "A matriz manual tem 30% a 50% menos paradas de corte que a automática.",
      "Densidade e compensação de repuxo personalizadas especificamente para o tecido de destino.",
      "Brilho superior da linha de poliéster devido ao controle anatômico da angulação dos pontos."
    ],
    commonErrors: [
      "❌ Confiar na ferramenta de '1-Click Auto Digitizing' para bordar produtos comerciais de clientes pagantes.",
      "❌ Não revisar a ordem de cores gerada pelo software automático, gerando trocas de linha repetitivas da mesma cor.",
      "❌ Acreditar que a auto-digitalização substitui o conhecimento prático de entretelas, agulhas e tecidos."
    ],
    troubleshootingTips: [
      "Máquina cortando a linha a cada 5 segundos: a matriz foi gerada no automático; redesenhe as ligações manualmente com ponto corrido embutido.",
      "Letras ilegíveis e empastadas: delete as letras automáticas e redigite usando fontes nativas do software de bordado (Keyboard Fonts).",
      "Furos na camiseta ao redor do bordado: excesso de pontos curtos criados pela varredura automática; limpe os nós com filtro de pontos pequenos."
    ],
    dicaArtrelados: "A ferramenta automática pode até ser útil para te dar uma 'ideia' inicial ou rascunho de contorno, mas nunca envie uma matriz automática direto para a máquina de bordar! Dedique 15 minutos para redesenhar manualmente os ângulos e subpontos: sua máquina e seu cliente agradecerão imensamente!",
    voceSabia: "Mais de 70% dos chamados de assistência técnica por 'máquina desregulada' ou 'linha quebrando' são, na verdade, causados por matrizes geradas em conversão automática sem compensação de encolhimento!",
    practicalExercise: "Pegue a imagem de uma estrela de 5 pontas. Crie uma versão com a varinha mágica automática e outra desenhada manualmente nó por nó com ângulos radiais saindo do centro. Borde as duas lado a lado e compare a perfeição do brilho e a firmeza dos cantos.",
    quickSummary: "Diferença crucial entre a geração automática por software (rápida, porém instável e propensa a falhas) e a programação manual qualificada (estável, perfeita e macia).",
    relatedTerms: ["Vetorização", "Compensação de Encolhimento", "Pull Compensation", "Branching", "Underlay", "Pontos Curtos"],
    tags: ["manual", "automatica", "autodigitizing", "programacao", "wilcom", "qualidade", "matriz"]
  },
  {
    id: "vetores-e-curvas-de-bezier-bezier-curves-vector-nodes",
    code: "V-003",
    letter: "V",
    term: "Vetores e Curvas de Bézier (Bezier Curves & Vector Nodes)",
    pronunciation: "ve-to-res e cur-vas de be-zi-ê (bé-zi-er curvs & vec-tor nôuds)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino plural.",
    origin: "Homenagem ao engenheiro e matemático francês Pierre Bézier (1910–1999), que desenvolveu essas formulações matemáticas enquanto projetava carrocerias de automóveis na Renault na década de 1960.",
    summary: "Curvas paramétricas controladas por nós e hastes tangenciais utilizadas em softwares de bordado para modelar contornos perfeitos com o menor número possível de vértices.",
    definition: "As Curvas de Bézier e os Nós de Controle são a espinha dorsal matemática de todos os softwares profissionais de digitalização de bordado. Trata-se de uma classe de curvas polinomiais que unem dois pontos de ancoragem (nós) cuja curvatura e flexão no espaço 2D são moduladas pelo comprimento e inclinação de vetores tangentes (alças de controle). No bordado, o domínio das curvas de Bézier permite criar contornos anatômicos impecáveis sem sobrecarregar o processador da máquina com milhões de coordenadas desnecessárias.",
    technicalDetails: "Uma curva de Bézier cúbica padrão é expressa pela equação paramétrica B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃, onde P₀ e P₃ são os nós de ancoragem e P₁ e P₂ são os pontos de controle tangenciais. No Wilcom e no PE-Design, um nó de curva gera uma transição de segunda derivada contínua (C² continuity), garantindo que as laçadas do ponto cheio girem progressivamente sem formar 'degraus' ou 'arestas duras'. O excesso de nós manuais (polilinhas) quebra a suavidade e gera micro-movimentos no pantógrafo, aumentando a vibração e o risco de quebra de agulha.",
    beginnerExplanation: "Imagine que você esticou um elástico entre dois pregos (os nós) e puxa o meio dele com dois dedais de costura (as alças de controle): dependendo de para onde você inclina os dedais, o elástico faz uma curva perfeita e suave. É assim que desenhamos contornos redondos no computador sem deixar pontas tortas!",
    howItWorks: [
      "1. O programador clica com o botão esquerdo para criar nós retos (cantos pontudos) e com o direito para nós curvos Bézier.",
      "2. Ao selecionar um nó curvo, aparecem duas hastes de controle azuis com pequenos pontos na ponta.",
      "3. Puxar a haste para longe do nó aumenta a amplitude da curva; aproximar a haste torna a curva mais fechada.",
      "4. Girar a haste altera a inclinação tangencial por onde o ponto da agulha irá passar.",
      "5. Nós simétricos mantêm ambos os lados da curva perfeitamente balanceados (ideal para círculos e pétalas).",
      "6. Ao finalizar a curva, o software gera trajetórias contínuas sem trepidação no bastidor da máquina."
    ],
    applications: [
      "Desenho de círculos perfeitos, arabescos, brasões e monogramas nupciais.",
      "Modelagem de contornos suaves em pétalas de flores, rostos e personagens de matrizes infantis.",
      "Ajuste fino de curvas em colunas de ponto cheio (Turning Satin) com angulações variáveis.",
      "Redução do tamanho do arquivo de matriz e suavização do movimento dos servomotores X/Y."
    ],
    characteristics: [
      "Permite editar formas complexas manipulando apenas 3 ou 4 nós principais.",
      "Criação de vértices suaves (smooth), cantos vivos (corner) e tangências simétricas (symmetrical).",
      "Garante que o ponto de bordado tenha transições fluidas de reflexão de luz."
    ],
    commonErrors: [
      "❌ Colocar dezenas de nós em uma curva simples, gerando uma linha serrilhada e cheia de trepidações.",
      "❌ Puxar alças tangenciais de forma cruzada, criando nós 'em oito' que invertem a costura e travam o motor.",
      "❌ Usar nós retos em arcos circulares, resultando em polígonos facetados em vez de formas redondas."
    ],
    troubleshootingTips: [
      "Bordado redondo saindo como um octógono: substitua os vértices retos por nós Bézier e estique as alças tangenciais.",
      "Máquina fazendo barulho de tranco ao fazer curvas: reduza a quantidade de nós do objeto usando a função 'Simplify Nodes / Reduzir Nós'.",
      "Ponto cheio abrindo frestas na curva: alinhe as linhas de ângulo de ponto perpendiculares à tangente da curva Bézier."
    ],
    dicaArtrelados: "A regra de ouro dos grandes mestres da digitalização é a 'Lei da Mínima Quantidade de Nós': uma curva perfeita raramente precisa de mais do que um nó no ponto mais alto e outro no ponto de inflexão. Menos nós significam menos paradas da agulha e um bordado muito mais veloz e brilhante!",
    voceSabia: "Pierre Bézier não patenteou sua fórmula matemática para que toda a humanidade pudesse se beneficiar dela; hoje, ela é usada desde a animação dos filmes da Disney e Pixar até o corte a laser e o bordado eletrônico!",
    practicalExercise: "Tente desenhar a letra 'S' no seu software usando apenas 6 nós de controle Bézier. Ajuste as alças até que a letra fique perfeitamente simétrica e fluida, sem nenhum degrau visual.",
    quickSummary: "Entidades geométricas paramétricas que permitem desenhar curvas e contornos de bordado anatômicos e suaves utilizando nós e hastes tangenciais.",
    relatedTerms: ["Nós de Controle", "Vetorização", "Turning Satin", "Ponto Cheio", "Pantógrafo", "Interpolação"],
    tags: ["bezier", "vetor", "curvas", "nos", "geometria", "wilcom", "desenho"]
  },
  {
    id: "velocidade-de-bordado-spm-stitches-per-minute",
    code: "V-004",
    letter: "V",
    term: "Velocidade de Bordado (SPM / Stitches Per Minute)",
    pronunciation: "ve-lo-ci-da-de de bor-da-do (és-pi-êm / sti-tches pêr mi-nut)",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminino.",
    origin: "Da física clássica (velocidade escalar) associada à sigla internacional da engenharia mecânica têxtil 'SPM' (Stitches Per Minute - Pontos Por Minuto / PPM).",
    summary: "Frequência de repetição e rotação do eixo principal da máquina de bordar, medida pelo número de laçadas completas de costura executadas no intervalo de um minuto.",
    definition: "A Velocidade de Bordado (SPM ou PPM) é a grandeza operacional que indica a taxa de rotação do cabeçote da máquina e a cadência com que a agulha penetra o tecido e forma laçadas com a laçadeira rotativa. Em máquinas domésticas, a velocidade varia tipicamente entre 400 e 850 SPM; em máquinas industriais e semi-industriais multicabeçotes, pode atingir entre 800 e 1.200 SPM. O controle da velocidade é crucial para a estabilidade da tensão do fio, dissipação de calor na agulha e integridade dos tecidos delicados.",
    technicalDetails: "A física envolvida na velocidade de bordado relaciona a inércia do pantógrafo com as forças de atrito do fio no olho da agulha. Em 1.000 SPM, a agulha sobe e desce 16,6 vezes por segundo, gerando temperaturas por fricção que podem ultrapassar 180°C no aço da agulha, amolecendo fios termoplásticos como o poliéster. Além disso, a aceleração e desaceleração do pantógrafo em saltos longos (> 7 mm) em alta velocidade induz vibração harmônica que causa perda de laçada (skip stitch) e rompimento do fio.",
    beginnerExplanation: "É como a velocidade de um carro: na rodovia lisa e reta (tecido firme e ponto tatami longo), você pode acelerar; mas na serra cheia de curvas fechadas (detalhes pequenos, tecidos finos ou linha metálica), você precisa reduzir a marcha para não perder o controle nem estragar o trabalho!",
    howItWorks: [
      "1. O operador ajusta o limite máximo de velocidade no painel eletrônico da máquina (ex: 650 SPM para malha, 850 SPM para sarja).",
      "2. O servomotor AC gira o eixo principal sincronizado com o excêntrico da barra da agulha e a laçadeira.",
      "3. Os encoders ópticos leem a posição angular e desaceleram automaticamente a máquina antes de saltos longos ou cortes de fio.",
      "4. Em pontos curtos e detalhes fechados, a controladora eletrônica modula a cadência para evitar superaquecimento.",
      "5. A linha desliza suavemente pelos tensores e guia-fios na velocidade ideal de relaxamento elástico.",
      "6. A peça é finalizada no tempo previsto sem paradas por quebra de linha ou danos ao tecido."
    ],
    applications: [
      "Calibração de produtividade industrial em confecções de grande escala.",
      "Redução estratégica de velocidade para bordar com linhas metálicas, fios luminescentes ou de lurex (450–550 SPM).",
      "Bordados em relevo 3D Puff com EVA para não mastigar a espuma (500–600 SPM).",
      "Bordados em bonés estruturados com bastidor cilíndrico (600–700 SPM)."
    ],
    characteristics: [
      "Determinante direta do tempo de ciclo de produção de cada peça bordada.",
      "Influencia diretamente a tensão dinâmica da linha e o atrito térmico da agulha.",
      "Pode ser ajustada em tempo real durante a costura sem necessidade de pausar a matriz."
    ],
    commonErrors: [
      "❌ Trabalhar sempre na velocidade máxima da máquina (ex: 1.000 SPM) em qualquer tipo de tecido ou linha.",
      "❌ Bordar linhas metálicas em alta velocidade, provocando desfiamento e quebras a cada 20 segundos.",
      "❌ Manter velocidade alta em bonés e peças pesadas, causando desalinhamento do pantógrafo e perda de contorno."
    ],
    troubleshootingTips: [
      "Linha quebrando constantemente sem motivo aparente: reduza a velocidade da máquina em 150 a 200 SPM e teste novamente.",
      "Pontos pulados em curvas fechadas: diminua a velocidade para dar tempo à laçadeira de capturar o laço da agulha.",
      "Fio superior derretendo ou desfiando: diminua os SPM e aplique óleo de silicone na linha para reduzir a fricção térmica."
    ],
    dicaArtrelados: "Máquina rápida não é a que roda a 1.000 SPM, mas sim a que roda a 700 SPM e NÃO PARA NENHUMA VEZ por quebra de linha! O tempo que você gasta levantando da cadeira para passar a linha na agulha anula qualquer suposto ganho de velocidade no painel. Estabilidade é o verdadeiro segredo da produtividade!",
    voceSabia: "As máquinas industriais modernas mais velozes do planeta chegam a incríveis 1.500 pontos por minuto, o que significa 25 perfurações de agulha por segundo — quase a velocidade de rotação de uma hélice de avião leve!",
    practicalExercise: "Borde um monograma idêntico em duas toalhas: a primeira em 850 SPM e a segunda em 600 SPM. Cronometre o tempo real (incluindo possíveis paradas) e compare a maciez e o brilho dos pontos de ambas as peças.",
    quickSummary: "Taxa de pontos executados por minuto pela máquina de bordar; parâmetro chave que deve ser dosado conforme o tecido, a linha e a densidade da matriz.",
    relatedTerms: ["PPM", "Servomotor", "Atrito Térmico", "Laçadeira", "Linha Metálica", "Produtividade"],
    tags: ["velocidade", "spm", "ppm", "rotacao", "operacao", "producao", "maquina"]
  },
  {
    id: "velocidade-variavel-por-tipo-de-ponto-dynamic-speed-control",
    code: "V-005",
    letter: "V",
    term: "Velocidade Variável por Tipo de Ponto (Dynamic Speed Control)",
    pronunciation: "ve-lo-ci-da-de va-ri-á-vel por ti-po de pon-to (dai-né-mic spi-id con-trôul)",
    level: "Avançado 🔴",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino.",
    origin: "Do conceito de automação mecatrônica adaptativa moderna, integrando microcontroladores DSP e leitura vetorial preditiva de trajetórias de costura.",
    summary: "Capacidade eletrônica da máquina de desacelerar ou acelerar automaticamente a rotação do motor em função do comprimento e da complexidade dos pontos que estão sendo bordados.",
    definition: "A Velocidade Variável por Tipo de Ponto (ou Controle Dinâmico de Velocidade) é um recurso tecnológico avançado presente em controladoras de bordado industriais e modernas máquinas computadorizadas. Em vez de operar em uma rotação fixa estática, a placa-mãe da máquina realiza uma leitura antecipada (look-ahead buffer) das coordenadas da matriz: ao identificar pontos longos de salto ou colunas de ponto cheio muito largas, a máquina reduz a velocidade automaticamente para evitar chicoteamento da linha e volta a acelerar em preenchimentos tatami uniformes.",
    technicalDetails: "A distância percorrida pelo pantógrafo entre duas descidas consecutivas da agulha define a velocidade linear necessária dos motores de passo ou servomotores X/Y. Se a máquina tentar manter 1.000 SPM em um ponto de 8 mm de comprimento, a aceleração requerida do pantógrafo excederá o limite de aderência do tecido no bastidor, causando o deslocamento da matriz. O algoritmo de controle dinâmico calcula o vetor de deslocamento ΔS = √(Δx² + Δy²) e ajusta a rotação do eixo principal para que a velocidade linear do bastidor permaneça sempre dentro da curva de torque seguro dos motores.",
    beginnerExplanation: "É como o piloto automático inteligente dos carros modernos que diminui a velocidade sozinho antes de uma curva perigosa e acelera de volta quando a pista fica reta. A máquina borda rapidinho nas partes retas e diminui a velocidade nos detalhes difíceis para não quebrar a agulha.",
    howItWorks: [
      "1. A controladora da máquina armazena os próximos 50 a 100 comandos de pontos na memória temporária (buffer).",
      "2. O processador calcula a distância do deslocamento X/Y do próximo ponto.",
      "3. Se o ponto for menor que 3.5 mm (tatami padrão), a máquina mantém a velocidade máxima programada (ex: 950 SPM).",
      "4. Se o ponto for de 5 a 9 mm (ponto cheio largo ou salto), o sistema reduz a rotação para 600–700 SPM.",
      "5. A desaceleração suave preserva a tensão estável da mola estica-fio e previne solavancos mecânicos.",
      "6. A qualidade estética do bordado permanece impecável em todas as fases da matriz."
    ],
    applications: [
      "Bordados que combinam fundos gigantes em tatami com letras minúsculas em ponto cheio.",
      "Matrizes de arte sacra e heráldica com frequentes alternâncias de comprimento de laçada.",
      "Preservação da vida útil das correias dentadas e rolamentos lineares do pantógrafo.",
      "Operação noturna autônoma sem supervisão contínua em fábricas de bordado."
    ],
    characteristics: [
      "Transições de aceleração e desaceleração suaves sem choques mecânicos.",
      "Redução drástica no índice de quebra de agulhas por deflexão em saltos longos.",
      "Eliminação do efeito de chicoteamento da linha nos guia-fios superiores."
    ],
    commonErrors: [
      "❌ Desativar o controle automático de velocidade no menu técnico para tentar forçar a máquina a rodar rápido em pontos longos.",
      "❌ Programar matrizes com pontos cheios acima de 10 mm sem ativar a divisão automática de ponto (Auto-Split).",
      "❌ Ignorar os alertas de sobrecarga dos servomotores causados por acelerações bruscas em bastidores pesados."
    ],
    troubleshootingTips: [
      "Agulha entortando ou quebrando em pontos largos: verifique se o recurso de Auto-Slowdown / Dynamic Speed está habilitado no painel da máquina.",
      "Bordado ficando frouxo em detalhes pequenos: ajuste a curva de desaceleração mínima no setup de parâmetros da máquina.",
      "Bastidor dando estalos fortes ao mudar de direção: diminua a sensibilidade de aceleração dos eixos X/Y no menu de configuração."
    ],
    dicaArtrelados: "Se a sua máquina não possui controle dinâmico automático de velocidade, você mesmo pode fazer isso na programação da matriz! No software Wilcom ou Embird, divida a matriz em blocos de cores estratégicos e defina comandos de parada para ajustar a velocidade no painel quando entrar na fase dos detalhes delicados.",
    voceSabia: "O sistema de controle dinâmico de velocidade foi originalmente desenvolvido pela indústria aeroespacial para guiar braços robóticos em montagens de satélites antes de ser adaptado para as máquinas de bordar Tajima e Barudan nos anos 1990!",
    practicalExercise: "Observe a sua máquina durante a execução de uma matriz que tenha um preenchimento grande e um texto pequeno. Acompanhe no mostrador digital de SPM como os números variam automaticamente e sinta a diferença no som do motor.",
    quickSummary: "Sistema mecatrônico inteligente que ajusta em tempo real a velocidade da máquina conforme a extensão e complexidade de cada ponto da matriz.",
    relatedTerms: ["SPM", "Look-Ahead Buffer", "Auto-Split", "Servomotor", "Pantógrafo", "Inércia"],
    tags: ["velocidade", "dinamica", "controle", "automacao", "mecatronica", "maquina", "tecnologia"]
  }
];

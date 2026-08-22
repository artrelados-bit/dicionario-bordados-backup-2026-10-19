import { Verbete } from "../types";

export const VERBETES_LETTER_X6: Verbete[] = [
  {
    id: "x-tension-relief-loop-formation-alivio-tensao-x",
    code: "X-026",
    letter: "X",
    term: "X-Tension Relief & Loop Formation — Alívio de Tensão Lateral X & Formação de Laçada da Lançadeira",
    pronunciation: "éks-tên-shon ri-líif end lup for-mêi-shon — a-li-vi-u de ten-são la-te-ral",
    level: "Avançado 🔴",
    category: "Agulhas & Mecânica",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'tension relief' (alívio dinâmico de forças de tração elástica) e 'loop formation' (formação hidrodinâmica da laçada de linha superior atrás da cava da agulha).",
    summary: "Momento cinemático no ciclo do ponto em que o pantógrafo para momentaneamente no eixo X para permitir que a agulha suba 2 mm e forme o laço de captura da lançadeira.",
    definition: "O X-Tension Relief & Loop Formation (Alívio de Tensão Lateral X / Formação de Laçada por Relaxamento Cinemático / Needle Rise Loop Expansion) é o princípio fundamental da sincronização eletromecânica entre o movimento do pantógrafo e a descida da agulha. Para que a ponta da lançadeira rotativa pesque a linha superior com 100% de confiabilidade, o bastidor deve estar absolutamente estático no eixo X e no eixo Y durante a fase de subida da agulha (de 1,8 mm a 2,2 mm após o ponto morto inferior), momento em que o atrito do tecido retém o fio e gera uma laçada aberta de formato elíptico (Loop) do lado da cava.",
    technicalDetails: "Se o servomotor do eixo X iniciar a translação antes da liberação completa da agulha para fora do tecido (ângulo de fase de 190° a 210° no encoder do eixo principal), a força lateral de arraste colapsa a laçada contra a haste da agulha. Esse colapso impede a ponta da lançadeira de entrar no laço, gerando perda instantânea de pontos (Skip Stitches) ou corte por cisalhamento contra a chapa de agulha. O alívio de tensão é gerenciado em tempo real pelo software de controle de movimento (DSP/FPGA).",
    beginnerExplanation: "Quando a agulha desce no tecido e começa a subir um pouquinho, ela deixa uma 'barriguinha' de linha solta lá embaixo para a lançadeira passar por dentro e dar o ponto. Se o bastidor se mexer para o lado antes da hora, ele estica a linha, a barriguinha some e a máquina não consegue dar o ponto!",
    howItWorks: [
      "1. A barra da agulha atinge o ponto morto inferior (PMI / 180° no volante da máquina).",
      "2. O pantógrafo nos eixos X e Y permanece rigorosamente travado em frenagem dinâmica.",
      "3. A agulha inicia a subida de retorno subindo cerca de 2,0 mm.",
      "4. O atrito das fibras do tecido segura a linha temporariamente.",
      "5. A linha superior forma uma laçada aberta bem na altura da cava da agulha (Scarf).",
      "6. A ponta da lançadeira rotativa cruza a cava e entra perfeitamente no centro da laçada.",
      "7. A agulha sai do tecido e só então o eixo X recebe o comando para se mover para a próxima coordenada."
    ],
    applications: [
      "Bordados em altíssima velocidade (1.000 a 1.200 PPM) sem perda de agulhadas.",
      "Costura em tecidos impermeabilizados e sintéticos com baixo coeficiente de atrito.",
      "Calibração milimétrica de tempo de lançadeira (Hook Timing) em oficinas especializadas.",
      "Bordados com linhas grossas calibre 30 e linhas de efeito metálico."
    ],
    characteristics: [
      "Janela de sincronismo angular de poucos milissegundos.",
      "Dependência direta da estabilidade mecânica do bastidor.",
      "Formação de laçada limpa sem torção de filamentos sintéticos."
    ],
    commonErrors: [
      "❌ Operar com máquina desregulada onde o bastidor se mexe com a agulha ainda dentro do tecido, entortando a agulha e rasgando a peça.",
      "❌ Usar tecidos extremamente elásticos sem entretela firme, fazendo o tecido subir junto com a agulha (flagging) e destruindo a laçada.",
      "❌ Tensão excessivamente apertada na linha superior que impede a abertura da laçada na descida."
    ],
    troubleshootingTips: [
      "A máquina pula pontos sucessivos em linhas horizontais: o sincronismo de movimento do eixo X está adiantado em relação ao eixo Z; chame a assistência técnica para calibrar o ponto de partida do pantógrafo no encoder.",
      "O tecido sobe e desce junto com a agulha (efeito pula-pula / flagging): o calcador de bordado está muito alto; abaixe a altura do calcador para que ele prense suavemente o tecido contra a chapa no momento da formação da laçada.",
      "A laçada se forma torta para o lado: a agulha está levemente girada; certifique-se de que a agulha está montada com a ranhura longa voltada rigorosamente para a frente e a cava para trás."
    ],
    dicaArtrelados: "Se a sua máquina começar a pular pontos em um tecido fininho, nunca aperte a tensão da linha! O segredo é colocar uma boa entretela de gramatura 80 por baixo e checar se o calcador está prensando o tecido no momento da descida. Tecido firme = laçada perfeita = zero pontos pulados!",
    voceSabia: "O mecanismo de formação de laçada por subida de 2 mm da agulha foi inventado pelo mecânico americano Elias Howe em 1846 e aperfeiçoado por Isaac Singer, sendo a invenção mecânica que viabilizou todas as máquinas de costura e bordado do mundo!",
    practicalExercise: "Com a máquina desligada e a tampa da lançadeira aberta, gire o volante da máquina manualmente bem devagar no sentido correto. Observe a agulha descer até o fundo e começar a subir: veja a laçada de linha se abrindo e a ponta da lançadeira passando por dentro dela.",
    quickSummary: "Pausa milimétrica do eixo X durante a subida da agulha que permite a formação perfeita da laçada de linha capturada pela lançadeira.",
    relatedTerms: ["Laçada", "Lançadeira Rotativa", "Hook Timing", "Flagging", "Cava da Agulha", "Ponto Morto Inferior", "Encoder"],
    tags: ["xtension", "lacada", "mecanica", "sincronismo", "agulhas", "hardware", "pulosdeponto"]
  },
  {
    id: "x-vector-bezier-node-interpolation-interpolacao-bezier-x",
    code: "X-027",
    letter: "X",
    term: "X-Vector Bézier Node Interpolation — Interpolação de Nós Bézier no Eixo X em Softwares Vetoriais",
    pronunciation: "éks-vék-tor bê-zi-êi nôud in-ter-po-lêi-shon — in-ter-po-la-são de nos be-zi-er",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do francês 'Bézier' (curvas paramétricas polinomiais desenvolvidas pelo engenheiro francês Pierre Bézier na Renault em 1962) e do inglês 'interpolation' (cálculo de pontos intermediários contínuos).",
    summary: "Algoritmo gráfico de curvas paramétricas que calcula trajetórias perfeitamente suaves para colunas e contornos no software CAD a partir de nós de controle no eixo X.",
    definition: "O X-Vector Bézier Node Interpolation (Interpolação de Nós Bézier no Eixo X / Curvatura Vetorial Paramétrica / Bézier Handle Alignment & Tangent Smoothing) é o método matemático utilizado pelos motores gráficos de softwares de bordado (como Wilcom, Corel Embroidery, Hatch e Pulse) para calcular curvas orgânicas fluídas. Através da manipulação de nós de ancoragem e alças tangenciais de controle no plano horizontal X, o digitador desenha curvas complexas (como pétalas, rostos e caligrafias) com um número mínimo de nós, permitindo que o algoritmo de geração de pontos calcule agulhadas uniformemente distribuídas e sem facetas quebradas.",
    technicalDetails: "As curvas de Bézier cúbicas são modeladas pela equação paramétrica B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃ para t ∈ [0,1]. O compilador de bordado faz a discretização dessa curva em segmentos infinitesimais de comprimento correspondente à densidade desejada (ex.: 0,4 mm). A suavização tangencial nos eixos X e Y garante que as linhas de ponto satim girem de forma gradual e contínua, eliminando cantos vivos indesejados que gerariam picos de aceleração brusca no pantógrafo da máquina.",
    beginnerExplanation: "É a ferramenta de desenho profissional do seu programa de bordado que cria curvas redondinhas e perfeitas com pouquíssimos cliques! Em vez de ficar clicando 50 vezes para fazer um círculo todo quadrado e cheio de pontas, você dá só 3 ou 4 cliques com as alças de curva e o computador faz uma linha super macia e elegante!",
    howItWorks: [
      "1. O digitador seleciona a ferramenta de desenho vetorial (Bézier Curve / Digitalização de Formas).",
      "2. Clica com o botão esquerdo para criar pontos retos ou botão direito para pontos de curva suave.",
      "3. Puxa as alças de controle no eixo X para ajustar a curvatura e a tensão da linha.",
      "4. O software calcula instantaneamente a curva paramétrica ideal em tempo real.",
      "5. Aplica-se o tipo de ponto desejado (Satim, Ponto Corrido ou Tatami com linhas de curva).",
      "6. As agulhadas são distribuídas com espaçamento rigorosamente uniforme ao longo da trajetória.",
      "7. A máquina costura a curva com transição suave, sem trancos e com acabamento impecável."
    ],
    applications: [
      "Digitalização de fontes caligráficas manuais e letras cursivas finas.",
      "Desenho de arabescos florais, brasões barrocos e ornamentos elegantes.",
      "Vetorização de logomarcas corporativas de alta precisão.",
      "Criação de contornos anatômicos em matrizes de personagens e animais realistas."
    ],
    characteristics: [
      "Curvas perfeitamente suaves sem cantos facetados ou poligonais.",
      "Edição ágil com controle total por alças tangenciais de inclinação.",
      "Geração de matrizes mais leves com menor peso de arquivo e código limpo."
    ],
    commonErrors: [
      "❌ Colocar centenas de nós colados uns nos outros ao desenhar uma curva simples, deixando o bordado travado e cheio de calombos.",
      "❌ Cruzar as alças de controle de Bézier sobre si mesmas, criando laços invisíveis que invertem a direção dos pontos.",
      "❌ Não alinhar as alças tangenciais de nós suaves, criando quinas pontudas no meio de arcos redondos."
    ],
    troubleshootingTips: [
      "A curva do bordado ficou cheia de 'degraus' e pontas duras: há excesso de nós vetoriais; selecione o objeto no software e use a ferramenta 'Suavizar Curva' (Smooth Curve / Simplify Nodes) para reduzir a quantidade de pontos pela metade.",
      "O ponto satim gira de forma desordenada no meio da curva: adicione linhas de ângulo de ponto (Stitch Angles) manuais para orientar a direção dos pontos ao longo da curva de Bézier.",
      "A máquina dá pequenos trancos ao costurar um círculo: a matriz foi salva com aproximação poligonal muito baixa; regenere o círculo usando curvas de Bézier nativas no software."
    ],
    dicaArtrelados: "A regra de ouro de um digitador de matrizes mestre é: **Menos é Mais**! Uma curva perfeita se faz com apenas 2 ou 3 nós de Bézier e alças bem reguladas. Quanto menos nós tiver o seu desenho no computador, mais suave, bonito e rápido ele será bordado na máquina!",
    voceSabia: "Pierre Bézier criou essas fórmulas matemáticas enquanto trabalhava como engenheiro-chefe na montadora francesa Renault para conseguir desenhar as curvas aerodinâmicas e elegantes das carrocerias dos carros nos primeiros computadores industriais!",
    practicalExercise: "No seu software de bordado, tente desenhar a letra 'S' em formato satim usando apenas 4 nós de curva suave com alças de Bézier. Compare a suavidade do resultado com uma letra desenhada clicando dezenas de vezes.",
    quickSummary: "Algoritmo de curvas vetoriais paramétricas no CAD que modela trajetórias suaves e contínuas com mínimo de nós e máxima perfeição de pontos.",
    relatedTerms: ["Curvas de Bézier", "Nós Vetoriais", "Ângulo de Ponto", "Digitalização Manual", "Wilcom", "Vetor", "Suavização"],
    tags: ["xvector", "bezier", "vetorizacao", "software", "desenho", "programacao", "wilcom"]
  },
  {
    id: "x-registration-marks-multi-hooping-marcas-registro-x",
    code: "X-028",
    letter: "X",
    term: "X-Registration Marks & Multi-Hooping — Marcas de Registro em Cruz X para Bastidores Múltiplos",
    pronunciation: "éks-re-dji-strêi-shon marks end mál-ti hú-ping — mar-kas de re-jis-tru em kruz",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'registration marks' (marcas de registro cruciformes em impressão gráfica e serigrafia) e 'multi-hooping' (técnica de bordado de grandes dimensões em múltiplos passos de bastidor).",
    summary: "Pequenas cruzes em X bordadas no final da primeira etapa que servem como mira milimétrica para alinhar a agulha na próxima colocação de bastidor em matrizes gigantes.",
    definition: "O X-Registration Marks & Multi-Hooping (Marcas de Registro em Cruz X / Cruzes de Encaixe de Bastidor Múltiplo / Alignment Crosshairs / Multi-Position Split Markers) é a técnica de engenharia e posicionamento utilizada para bordar desenhos que ultrapassam a área útil do maior bastidor disponível na máquina (como faixas de toalhas de banho de 60 cm, barrados de vestidos ou colchas de cama). O software divide a matriz em partes (Parte 1, Parte 2, etc.) e costura automaticamente pequenas cruzes em 'X' ou pontos de mira no final da primeira parte; ao prender o tecido na nova posição do bastidor, o operador alinha a agulha exatamente sobre a cruz em X para continuar o desenho com emenda imperceptível.",
    technicalDetails: "A cruz de registro em X é programada com ponto de corrida simples fino (Run Stitch de 1,5 mm a 2,0 mm) com comprimento de hastes de 5,0 mm a 10,0 mm. O centro geométrico exato do cruzamento da marca X na Parte 1 possui as mesmas coordenadas globais (X_ref, Y_ref) da agulha de início da Parte 2. O uso do laser pointer ou a descida manual da agulha sobre a interseção das hastes em X reduz o erro de encaixe humano para menos de 0,1 mm.",
    beginnerExplanation: "Quando você precisa fazer um bordado gigante que não cabe no seu bastidor de uma vez só, você divide o desenho em duas ou três partes. A máquina borda a primeira parte e faz uma cruzinha de linha no final. Quando você anda com o tecido no bastidor, você usa essa cruzinha como uma 'mira' para saber exatamente onde a segunda parte do bordado deve começar sem deixar emenda feia!",
    howItWorks: [
      "1. O programador divide a matriz longa em seções no módulo Multi-Hooping do software.",
      "2. O software adiciona automaticamente as cruzes de registro em X nos pontos de transição.",
      "3. O operador monta a primeira parte do tecido no bastidor e borda o primeiro arquivo.",
      "4. A máquina costura a cruz de registro em 'X' com linha contrastante ou fina.",
      "5. O tecido é solto do bastidor e reposicionado para a segunda etapa.",
      "6. No painel, o operador move o pantógrafo até a agulha ficar perfeitamente cravada no centro da cruz em X.",
      "7. Inicia-se a segunda parte do bordado; a emenda encaixa-se com perfeição milimétrica.",
      "8. Ao término, a linha da cruzinha de registro é cortada e puxada fora."
    ],
    applications: [
      "Bordados contínuos de barrados em toalhas de banhão e toalhas de mesa compridas.",
      "Bordados gigantes de nomes e dragões nas costas inteiras de quimonos e jaquetas.",
      "Montagem de painéis decorativos e quadros de parede gigantescos em múltiplos bastidores.",
      "Barrados ricos de lençóis de casal e vestidos de noiva."
    ],
    characteristics: [
      "Precisão de encaixe quase invisível ao olho humano.",
      "Eliminação de sobreposições erradas ou buracos entre as partes da matriz.",
      "Compatível com máquinas domésticas e industriais de qualquer marca."
    ],
    commonErrors: [
      "❌ Puxar o tecido torto no segundo bastidor, fazendo o desenho continuar com ângulo inclinado em relação à primeira parte.",
      "❌ Borda a cruz de registro com satim denso, tornando impossível descosturar a cruzinha depois.",
      "❌ Não usar cola spray ou entretela contínua, deixando o tecido enrugar na área da emenda."
    ],
    troubleshootingTips: [
      "A emenda entre as duas partes ficou com um vão de 2 mm de tecido aparecendo: na segunda colocação de bastidor, a agulha não foi alinhada exatamente no centro do X; use o ajuste fino de setas do painel (X-Offset/Y-Offset) com o laser sobre o cruzamento.",
      "O desenho emendado ficou torto: o tecido girou no bastidor; utilize duas cruzes em 'X' distantes uma da outra para alinhar tanto a posição quanto o ângulo de rotação da matriz.",
      "A linha da cruz de registro não quer sair: borde a marca de registro com linha solúvel em água ou use linha de bobina fina com pontos largos de 3 mm de fácil remoção."
    ],
    dicaArtrelados: "Para fazer emendas perfeitas em toalhas compridas sem errar nunca: coloque duas marcas de registro em X (uma em cima e outra embaixo da faixa). Alinhe a agulha no primeiro X e confira se ao mover para o segundo X a agulha cai exatamente em cima da linha. Se caiu, seu bordado vai ficar 100% reto como mágica!",
    voceSabia: "A técnica das marcas de registro em cruz foi criada pelos impressores renascentistas no século XV para alinhar as matrizes de madeira em xilogravura colorida e é o mesmo princípio que a NASA usa para acoplar naves espaciais em órbita!",
    practicalExercise: "Crie uma linha de 25 cm no seu software de bordado e use o assistente de 'Multi-Hooping' para dividi-la para o bastidor 13x18. Observe as cruzes de alinhamento em X geradas pelo programa e faça um teste de encaixe prático em um tecido de algodão.",
    quickSummary: "Marcas geométricas em cruz que servem de gabarito milimétrico para alinhar e emendar bordados de grandes formatos divididos em múltiplos bastidores.",
    relatedTerms: ["Multi-Hooping", "Divisão de Matriz", "Ponto Zero", "Laser Pointer", "Alinhamento", "Barrado Contínuo", "Gabarito"],
    tags: ["xregistration", "multihooping", "emenda", "bastidorduplo", "grandesformatos", "alinhamento", "tecnicas"]
  },
  {
    id: "x-cornering-algorithm-mitering-cantos-satim-x",
    code: "X-029",
    letter: "X",
    term: "X-Cornering Algorithm & Mitering — Algoritmo de Curvatura em X & Mitering de Cantos no Ponto Satim",
    pronunciation: "éks-kór-ne-ring ál-go-ri-tom end mái-te-ring — al-go-rit-mu de kan-tus e mei-a-es-kwa-dri-a",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'cornering' (tratamento geométrico de quinas e curvas angulares) e 'mitering' (corte e união em meia-esquadria a 45° herdado da marcenaria e alfaiataria fina).",
    summary: "Algoritmo inteligente do software CAD que calcula automaticamente a transição de pontos satim em cantos vivos e quinas em X para evitar acúmulos grossos e pontas abertas.",
    definition: "O X-Cornering Algorithm & Mitering (Algoritmo de Tratamento de Cantos em X / Canto em Meia-Esquadria / Smart Corner Mitering & Capping / Corner Overlap Slicing) é o cálculo computacional especializado que define como as linhas de ponto satim realizam a transição direcional ao fazer curvas acentuadas ou contornar quinas de 90° e ângulos agudos. Em vez de girar os pontos em leque radial (que acumularia centenas de penetrações no mesmo vértice interno), o algoritmo divide a quina em duas seções bissetrizes com emenda em meia-esquadria perfeita (Mitre) ou corte com sobreposição chanfrada (Cap).",
    technicalDetails: "Nas esquinas com ângulo menor que 60°, o leque simples causaria uma densidade crítica de agulhadas no ápice interno, furando o tecido e quebrando agulhas. O algoritmo de cantos em X aplica uma linha de corte angular e alterna os pontos das duas hastes com sobreposição escalonada (Interlocking Miter) com recuo de 0,2 mm. Isso garante que a quina externa fique perfeitamente afiada e nítida sem criar nenhum calombo de linha no vértice interno.",
    beginnerExplanation: "Quando você borda a quina de uma moldura quadrada ou uma letra como 'L' ou 'X', as linhas de bordado precisam virar a esquina. Se a máquina tentar virar tudo de uma vez, acumula um bolo de linha horrível na curva. Esse algoritmo faz um corte lindo em diagonal (como na moldura de um quadro chique) para a quina ficar super pontudinha, lisa e bonita!",
    howItWorks: [
      "1. O programador desenha uma coluna de contorno satim contornando um retângulo ou brasão com quinas vivas.",
      "2. O software analisa o ângulo formado entre os segmentos de reta.",
      "3. Se o ângulo for fechado (ex.: 90° ou 45°), o algoritmo ativa o modo 'Canto Mitrado' (Mitered Corner).",
      "4. Traça uma linha bissetriz diagonal no vértice da quina.",
      "5. Intercala as agulhadas das duas colunas na linha de emenda sem sobrecarga de pontos.",
      "6. A compensação de repuxo no ápice da quina é calculada para manter o bico pontudo e simétrico.",
      "7. A máquina costura a quina com facilidade, sem estalos e com acabamento de alta alfaiataria."
    ],
    applications: [
      "Molduras e bordas geométricas de brasões, crachás e distintivos.",
      "Letras com cantos retos e serifas quadradas (fontes de bloco e romanas).",
      "Bordas de apliques termocolantes e patches militares com corte laser.",
      "Acabamento perimetral de toalhas de mesa, guardanapos de linho e lenços."
    ],
    characteristics: [
      "Eliminação de acúmulo excessivo de pontos no vértice interno da quina.",
      "Vértice externo perfeitamente nítido e afiado sem cantos arredondados feios.",
      "Transição de brilho da linha elegante refletindo a luz em dois ângulos opostos."
    ],
    commonErrors: [
      "❌ Deixar cantos de 90° em leque radial simples, abrindo buracos no tecido de tanto a agulha bater no mesmo ponto central.",
      "❌ Não configurar a compensação de repuxo nas quinas, deixando a ponta do bico 'recolhida' e sem ponta.",
      "❌ Usar cantos mitrados em colunas muito finas (menos de 1,2 mm), onde o canto arredondado seria mais resistente."
    ],
    troubleshootingTips: [
      "A quina da moldura quadrada ficou com um calombo grosso e duro: ative a opção de 'Canto Inteligente / Meia-Esquadria' (Smart Corner / Mitered Corner) no software de matrizes.",
      "A ponta do bico da estrela ficou arredondada e murcha: ative a opção 'Sharp Corner / Corner Expansion' para aumentar o comprimento dos pontos externos no bico em 0,3 mm.",
      "A agulha bate e quebra sempre nas quinas de 90°: reduza a densidade de pontos no vértice da quina e elimine o subponto pesado na área de transição."
    ],
    dicaArtrelados: "Para fazer patches e molduras quadradas impecáveis com ponto satim: use sempre o tipo de canto em 'Meia-Esquadria' (Mitered) no seu programa de matrizes! O encontro dos pontos fica com aquela linha diagonal linda de 45 graus que parece moldura de quadro de museu!",
    voceSabia: "O corte em meia-esquadria a 45 graus (Mitering) é uma das técnicas de marcenaria e costura mais nobres da história da arte, utilizada desde a Roma Antiga na confecção de mosaicos e molduras de mármore imperial!",
    practicalExercise: "Desenhe uma moldura quadrada de 60 mm x 60 mm com satim de 4 mm no seu programa. Compare a visualização com 'Canto em Leque' versus 'Canto Mitrado'. Veja a diferença impressionante de acabamento e a nitidez das quinas.",
    quickSummary: "Algoritmo de geração de cantos e quinas em meia-esquadria que garante vértices afiados e nítidos sem acúmulo excessivo de agulhadas.",
    relatedTerms: ["Mitered Corner", "Canto Mitrado", "Satim", "Smart Corner", "Leque Radial", "Brasão", "Wilcom"],
    tags: ["xcornering", "mitering", "cantos", "satim", "molduras", "qualidade", "programacao"]
  },
  {
    id: "x-fringe-effect-ponto-franja-3d-efeito-x",
    code: "X-030",
    letter: "X",
    term: "X-Fringe Effect — Ponto X-Fringe (Efeito Franja em X & Pontos Soltos para Relevo 3D)",
    pronunciation: "éks-fríndj i-fékt — pon-tu fran-ja em shis e re-le-vu 3D",
    level: "Avançado 🔴",
    category: "Técnicas Especiais de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'fringe' (franja têxtil ornamental de fios soltos cortados) e 'X-Fringe' (técnica tridimensional computadorizada de laçadas longas soltas ancoradas por travas em X).",
    summary: "Técnica especial de programação em que a máquina costura colunas satim com tensão ultra frouxa e amarrações em X; após cortar a linha no verso, cria-se uma franja 3D fofa e volumosa.",
    definition: "O X-Fringe Effect (Ponto Franja Eletrônico / Efeito Franja 3D / Cutwork Fringe Stitch / Dimensional Tufted Embroidery) é uma técnica artesanal-computadorizada avançada utilizada para criar texturas tridimensionais peludas e com relevo tátil realista (como pelos de animais, juba de leão, pétalas soltas de flores, barbas de gnomos e pompons). A matriz é programada com uma coluna satim larga sem subponto ancorada em uma das bordas por um travamento firme em 'X' (X-Tack Lock); no avesso da peça, corta-se a linha da bobina ao longo da coluna, liberando os fios da face superior para serem escovados e formarem uma franja macia e exuberante.",
    technicalDetails: "Para o sucesso do X-Fringe, a borda ancorada é digitalizada com uma fileira densa de pontos de arremate em X (densidade de 0,3 mm com nós autobloqueantes), enquanto a borda solta recebe pontos de satim compridos (de 8 mm a 12 mm) com linha de bobina frouxa ou substituída por linha solúvel em água. Ao cortar o filamento inferior com um abridor de casas (desmanchador de costura), a linha da bobina se solta completamente e os pontos superiores são escovados com uma escovinha de cerdas macias, desabrochando em uma densa pelagem 3D.",
    beginnerExplanation: "É uma técnica mágica e divertida onde a máquina borda pontos bem compridos que parecem soltos. Depois que o bordado termina, você corta a linha branca do avesso com o desmanchador de costura e 'penteia' o bordado pela frente: a linha se abre e vira uma juba de leão ou uma barba de Papai Noel fofinha e cheia de pelo de verdade!",
    howItWorks: [
      "1. O digitador programa uma coluna de satim larga onde a borda de ancoragem recebe arremates duplos em 'X'.",
      "2. A borda oposta não recebe arremates e tem pontos satim longos de 10 mm.",
      "3. A máquina borda a matriz sobre o tecido com entretela firme de suporte.",
      "4. Ao terminar, retira-se o bastidor da máquina e vira-se a peça do avesso.",
      "5. Com a ponta fina de um desmanchador de costura, corta-se a linha da bobina no centro da coluna de satim.",
      "6. Vira-se a peça para a frente e puxam-se os fios para cima delicadamente com uma pinça.",
      "7. Passa-se uma escovinha macia para desfiar as pontas, criando uma franja felpuda e encantadora."
    ],
    applications: [
      "Jubas de leões, pelos de cachorrinhos, coelhos e ovelhinhas em enxovais infantis.",
      "Barbas de Papai Noel e gnomos em decorações temáticas de Natal.",
      "Miolo e pétalas tridimensionais de girassóis e margaridas.",
      "Franjas decorativas em barras de toalhas e almofadas rústicas boho-chic."
    ],
    characteristics: [
      "Textura tridimensional tátil e macia que encanta clientes.",
      "Fixação permanente da base graças aos nós de ancoragem em X.",
      "Efeito artesanal exclusivo que diferencia o ateliê no mercado."
    ],
    commonErrors: [
      "❌ Cortar a linha pelo lado da frente em vez de cortar a linha da bobina pelo avesso, destruindo o bordado.",
      "❌ Esquecer de programar as amarrações em X na borda de ancoragem, fazendo todos os fios soltarem na lavagem.",
      "❌ Fazer pontos satim menores que 6 mm, gerando uma franja muito curta e dura que não penteia bem."
    ],
    troubleshootingTips: [
      "Os fios da franja soltaram inteiros quando lavei a peça: a borda de sustentação não tinha arremate em X suficiente; no software, adicione 3 passagens de ponto reto sob a borda fixa antes do satim e use arremate em X embutido.",
      "A linha da bobina está difícil de cortar no verso: reduza a tensão da linha superior durante o bordado da franja para fazer a linha da bobina ficar bem visível e soltinha no avesso.",
      "A franja ficou embolada e não abre: passe uma escova de dentes nova com cerdas médias delicadamente sobre os fios para abrir os filamentos de poliéster."
    ],
    dicaArtrelados: "Para fazer a barba do Papai Noel ou a juba do leão mais fofa do mundo: use linha de bordar fosca (Frosted Matt) ou linha de algodão na franja X-Fringe e penteie com uma escovinha de sobrancelha. O volume fica tão macio e realista que parece pelúcia de verdade!",
    voceSabia: "O efeito Fringe em máquinas de bordar foi desenvolvido originalmente na Alemanha para simular a técnica secular do bordado turco 'Chenille' e das tapeçarias 'Tufting' sem precisar de máquinas industriais caríssimas de laçada especial!",
    practicalExercise: "Digitalize uma pequena coluna satim de 10 mm de largura por 40 mm de comprimento. Na lateral esquerda, coloque uma linha de costura dupla de reforço em X. Borde em um retalho, corte a linha de bobina no avesso e escove os fios da frente para sentir a textura 3D da franja.",
    quickSummary: "Técnica tridimensional avançada de pontos satim longos ancorados em X que, após o corte no avesso, se transformam em franjas e pelugens 3D.",
    relatedTerms: ["Fringe Stitch", "Bordado 3D", "Chenille", "Tufting", "Desmanchador de Costura", "Enxoval Infantil", "Efeito Especial"],
    tags: ["xfringe", "franja3d", "relevo", "efeitosespeciais", "infantil", "natal", "criatividade"]
  }
];

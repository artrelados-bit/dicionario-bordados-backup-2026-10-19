import { Verbete } from "../types";

export const VERBETES_LETTER_U1: Verbete[] = [
  {
    id: "underlay-subponto-ponto-de-fundacao",
    code: "U-001",
    letter: "U",
    term: "Underlay (Subponto / Ponto de Fundação)",
    pronunciation: "ân-der-lei (sub-pon-to / pon-to de fun-da-ção)",
    level: "Iniciante 🟢",
    category: "Pontos & Estruturas",
    grammarClass: "Substantivo masculino de origem inglesa.",
    origin: "Termo técnico da engenharia têxtil e da digitalização de bordados (Wilcom, Tajima, Melco) derivado do inglês 'under' (embaixo) e 'lay' (deitar/camada), referindo-se aos pontos estruturais costurados antes da camada de acabamento.",
    summary: "Camada de pontos preliminares invisíveis costurados sob o bordado principal para fixar o tecido à entretela, dar sustentação, estabilidade e evitar enrugamentos.",
    definition: "O Underlay (Subponto, Ponto de Fundação ou Ponto de Base) é a estrutura oculta de pontos costurada pela máquina de bordar antes da camada visível de acabamento (seja ela em ponto cheio/satin ou tatami/fill). Sua função mecânica indispensável é tripla: 1) Ancorar e 'soldar' o tecido à entretela no bastidor, eliminando o deslizamento relativo; 2) Pré-encolher o tecido localmente, absorvendo a tensão mecânica das laçadas; e 3) Criar um colchão ou leito de suporte que eleva os pontos superiores, impedindo que eles afundem na trama do tecido ou nas felpas.",
    technicalDetails: "A física do bordado demonstra que o fio superior sob tensão exerce uma força centrípeta constante de tração (pull force) que aproxima as bordas do tecido (efeito de encolhimento transversal). O underlay atua como a armadura de aço no concreto armado: ao costurar linhas perpendiculares ou diagonais à direção do ponto de cobertura com recuo de margem (inset distance de 0.3 a 0.5 mm), ele cria resistência à compressão e equaliza a tração. Bordar sem underlay resulta em perda imediata de cobertura, abertura de fendas entre objetos, enrugamento periférico (puckering) e deformação geométrica de círculos e letras.",
    beginnerExplanation: "É como a fundação e as vigas de uma casa: você não vê depois que a parede está pronta, mas sem ela a casa cai! O subponto é uma costura leve e escondida que a máquina faz primeiro para prender o tecido na entretela e deixar tudo retinho antes de fazer o bordado bonito por cima.",
    howItWorks: [
      "1. A máquina inicia o objeto costurando primeiro os pontos de fundação (underlay) programados na matriz.",
      "2. Esses pontos perfuram o tecido e a entretela, unindo as duas camadas com firmeza mecânica.",
      "3. O subponto amassa as fibras e felpas do tecido, criando uma superfície plana e estável.",
      "4. Em seguida, a máquina borda a camada de cobertura (pontos cheios ou tatami) exatamente por cima da fundação.",
      "5. Os pontos visíveis ficam perfeitamente apoiados sobre a estrutura do underlay sem afundar.",
      "6. A peça finalizada apresenta contornos nítidos, alta definição e zero enrugamento ao redor."
    ],
    applications: [
      "Uso obrigatório em 100% das matrizes profissionais de bordado computadorizado.",
      "Estabilização de letras, colunas de ponto cheio e monogramas finos.",
      "Prevenção de rugas em grandes áreas de preenchimento tatami em camisetas e uniformes.",
      "Sustentação de bordados em toalhas atoalhadas, veludos, malhas e tecidos elásticos."
    ],
    characteristics: [
      "Invisível no produto final, ficando totalmente coberto pelos pontos de topo.",
      "Consome entre 10% e 20% do total de pontos da matriz, economizando retrabalho.",
      "Permite reduzir a densidade da camada de acabamento sem perder a cobertura visual."
    ],
    commonErrors: [
      "❌ Desativar o subponto para 'economizar pontos' ou 'bordar mais rápido', fazendo o tecido enrugar e o contorno sair torto.",
      "❌ Usar subponto muito largo que ultrapassa as bordas do ponto cheio, deixando pontas de linha aparecendo para fora.",
      "❌ Usar subponto na mesma direção do ponto de acabamento, fazendo a linha de cima cair no vão da linha de baixo sem dar sustentação."
    ],
    troubleshootingTips: [
      "Tecido enrugando e formando ondas ao redor do bordado: ative ou reforce o underlay com uma grade de sustentação (Tatami ou Zigzag Underlay).",
      "Subponto aparecendo para fora das bordas do ponto cheio: aumente o recuo da margem (Inset Margin) no software para 0.4 mm ou 0.5 mm.",
      "Bordado muito rígido e duro como papelão: reduza a densidade do subponto em vez de retirar a estrutura de ancoragem."
    ],
    dicaArtrelados: "Nunca, jamais desative o subponto das suas matrizes! Uma matriz sem underlay é como um bolo sem fermento: murcha e perde a forma. Um bom subponto permite até que você diminua a quantidade de pontos cheios por cima, deixando o bordado mais macio, mais rápido e muito mais bonito!",
    voceSabia: "Nas primeiras máquinas de bordar manuais do século XIX, as bordadeiras costuravam à mão um cordão de algodão grosso ou barbante sob as letras para dar relevo antes de cobrir com linha de seda — essa é a origem histórica do moderno underlay computadorizado!",
    practicalExercise: "Crie um quadrado de 4x4 cm no seu software de bordado. Programe um quadrado sem nenhum underlay e outro idêntico com underlay em grade. Borde ambos em uma malha de camiseta e sinta na prática a diferença inacreditável de firmeza e acabamento.",
    quickSummary: "Estrutura oculta de pontos de fundação costurada sob o bordado para unir tecido e entretela, evitar rugas e dar sustentação aos pontos de cobertura.",
    relatedTerms: ["Center Walk", "Edge Walk", "Zigzag Underlay", "Compensação de Encolhimento", "Densidade", "Puckering"],
    imageUrl: "/images/u001_underlay_v1.jpg?v=1",
    imageCaption: "Anatomia do Subponto (Underlay): a camada de fundação invisível que ancora o tecido na entretela e a comparação prática entre um bordado com suporte firme versus sem suporte.",
    tags: ["underlay", "subponto", "fundacao", "estrutura", "programacao", "wilcom", "estabilidade"]
  },
  {
    id: "underlay-center-walk-ponto-corrido-central",
    code: "U-002",
    letter: "U",
    term: "Underlay Center Walk (Ponto Corrido Central)",
    pronunciation: "ân-der-lei cên-ter uók (pon-to cor-ri-do cen-tral)",
    level: "Iniciante 🟢",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva masculina.",
    origin: "Termo de digitalização do inglês 'center' (centro) e 'walk' (caminhada/trajeto corrido), indicando o trajeto linear de ponto corrido que percorre a espinha dorsal de uma coluna.",
    summary: "Subponto linear simples costurado exatamente no centro de colunas estreitas de ponto cheio e letras pequenas para fixação rápida sem adicionar espessura.",
    definition: "O Underlay Center Walk (ou Subponto de Ponto Corrido Central / Trajeto ao Centro) é a forma mais elementar e ágil de subponto. Consiste em uma linha contínua de pontos corridos (running stitches) executada rigorosamente ao longo da linha central (espinha dorsal) do objeto antes da aplicação dos pontos cheios transversais. É a fundação recomendada para colunas estreitas de largura entre 1,0 mm e 2,5 mm, especialmente textos pequenos, monogramas, arabescos finos e detalhes delicados.",
    technicalDetails: "Mecanicamente, o Center Walk fixa o centro da coluna de tecido à entretela e serve de guia de posicionamento para o deslocamento contínuo da agulha (muitas vezes funcionando simultaneamente como trajeto de deslocamento / travel run). O comprimento de ponto ideal para o Center Walk situa-se entre 1,5 mm e 2,2 mm. Em colunas com largura inferior a 1,5 mm, o Center Walk é o único underlay viável, pois qualquer outro tipo mais largo (como Edge Walk ou Zigzag) escaparia para fora das bordas do ponto cheio devido ao recuo físico da agulha.",
    beginnerExplanation: "É uma costurinha reta simples que passa bem no meinho da letra antes da máquina fazer os pontinhos cheios. Ela serve para prender a letra no lugar sem deixar o bordado duro, sendo perfeita para escrever nomes com letrinhas pequenas.",
    howItWorks: [
      "1. A agulha inicia na extremidade da letra ou traço fino.",
      "2. Costura uma linha reta de pontos corridos simples pelo centro geométrico da coluna até o fim.",
      "3. Ao atingir o final da coluna, a máquina inverte imediatamente e começa a cobrir o traço com pontos cheios transversais (Satin).",
      "4. O ponto corrido central fica sepultado sob as passadas do ponto cheio.",
      "5. A coluna ganha estabilidade e alinhamento com mínimo consumo de pontos e tempo."
    ],
    applications: [
      "Bordado de textos pequenos e nomes em jalecos, uniformes e fitas com letras de 5 mm a 12 mm.",
      "Colunas finas de ponto cheio com largura de 1,0 mm a 2,2 mm.",
      "Contornos delicados, talos florais finos, arabescos e bigodes de personagens.",
      "Trajetos de deslocamento ocultos entre letras conectadas em caligrafia cursiva."
    ],
    characteristics: [
      "Extremamente leve, rápido e com menor número de pontos.",
      "Não adiciona rigidez nem volume excessivo ao tecido.",
      "Excelente para tecidos finos, percal, tricoline e fitas de cetim."
    ],
    commonErrors: [
      "❌ Usar Center Walk sozinho em colunas muito largas (acima de 4 mm), fazendo as bordas do ponto cheio afundarem no tecido.",
      "❌ Usar comprimento de ponto muito longo (acima de 3 mm), não fixando o tecido adequadamente em curvas fechadas.",
      "❌ Esquecer de ativar o Center Walk em letrinhas pequenas, fazendo as letras ficarem tortas e finas."
    ],
    troubleshootingTips: [
      "Letras pequenas ficando finas ou sumindo no tecido: ative o Underlay Center Walk e aumente a compensação de encolhimento para 0.35 mm.",
      "Ponto corrido aparecendo na ponta da letra: reduza o comprimento de ponto do subponto para 1.5 mm nas extremidades.",
      "Bordas de letras largas parecendo murchas: troque o Center Walk por Edge Walk (Borda Dupla) ou combine ambos."
    ],
    dicaArtrelados: "Para letrinhas de até 10 mm em toalhas ou uniformes, o Center Walk é o seu melhor amigo! Ele segura a letra no lugar em apenas 3 segundos de costura e deixa a letra perfeitamente legível sem criar nós no avesso!",
    voceSabia: "Softwares modernos como o Wilcom usam o Center Walk não apenas como reforço, mas como caminho estratégico para a agulha viajar de uma letra para a outra sem precisar cortar a linha!",
    practicalExercise: "Escreva uma palavra com letras de 8 mm no software. Em uma versão, deixe sem subponto; na outra, ative o Center Walk com comprimento 1.8 mm. Borde as duas e compare a nitidez e retilinização de cada uma.",
    quickSummary: "Subponto linear simples costurado ao longo da linha central de colunas estreitas e letras pequenas para ancoragem ágil e sem volume.",
    relatedTerms: ["Underlay", "Edge Walk", "Travel Run", "Ponto Cheio (Satin)", "Microletras"],
    tags: ["center walk", "subponto central", "underlay", "letras pequenas", "wilcom", "programacao"]
  },
  {
    id: "underlay-edge-walk-borda-dupla-contorno-de-margem",
    code: "U-003",
    letter: "U",
    term: "Underlay Edge Walk (Borda Dupla / Contorno de Margem)",
    pronunciation: "ân-der-lei édj uók (bor-da du-pla / con-tor-no de mar-gem)",
    level: "Intermediário 🟡",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva masculina.",
    origin: "Da expressão em inglês 'edge' (borda/margem) e 'walk' (trajeto), referindo-se aos trilhos duplos de costura que margeiam o perímetro interno de uma coluna de ponto cheio.",
    summary: "Subponto estrutural de trilhos paralelos que contorna as duas margens internas do ponto cheio, garantindo bordas retilíneas, nítidas e livres de dentes de serra.",
    definition: "O Underlay Edge Walk (Subponto de Borda / Borda Dupla / Contour Underlay) é o subponto estrutural composto por duas linhas paralelas de ponto corrido que percorrem o perímetro interno das margens de uma coluna de ponto cheio. Os trilhos são posicionados com um recuo de margem milimétrico pré-determinado (inset distance, tipicamente de 0.3 mm a 0.5 mm para dentro do contorno). Sua principal função mecânica é criar um 'trilho de contenção' que apoia e ergue as pontas externas das laçadas do ponto cheio, eliminando a irregularidade nas bordas (efeito dente de serra) e impedindo que o ponto afunde nas fibras.",
    technicalDetails: "Ao bordar em tecidos com textura (como piquet, toalhas atoalhadas ou linho), os pontos cheios tendem a afundar nos vales da trama têxtil, gerando bordas serrilhadas e desalinhadas. O Edge Walk funciona como uma viga perimetral que mantém uma barreira física contínua sob as penetrações da agulha. Em softwares de digitalização, o comprimento do ponto do Edge Walk deve ser calibrado entre 1,8 mm e 2,5 mm, com tolerância de curvas ajustada para que a linha siga com precisão geométrica os arcos e cantos sem atalhar.",
    beginnerExplanation: "São duas linhas de costura que a máquina faz perto das beiradinhas de dentro da letra antes de cobrir com o ponto cheio. Elas funcionam como dois trilhos de trem que seguram as pontas dos fios, deixando as beiradas da letra retinhas, nítidas e lisinhas parecendo corte de tesoura.",
    howItWorks: [
      "1. A máquina inicia o objeto costurando um ponto corrido acompanhando a margem esquerda (com recuo de 0.4 mm).",
      "2. Ao chegar ao topo da coluna, faz a curva e desce costurando a margem direita.",
      "3. Os dois trilhos formam uma moldura fechada no formato exato da coluna.",
      "4. A máquina inverte o sentido e aplica o ponto cheio cobrindo completamente os trilhos de borda.",
      "5. As laçadas do ponto cheio descansam sobre as linhas guias do Edge Walk.",
      "6. As bordas do bordado final ficam ultra-nítidas, brilhantes e perfeitamente retas."
    ],
    applications: [
      "Colunas de ponto cheio médias e largas com largura entre 2,5 mm e 8,0 mm.",
      "Letras de tamanho médio e grande (acima de 15 mm) em uniformes, toalhas e bonés.",
      "Contornos nítidos de logomarcas corporativas sobre tecidos texturizados como piquet.",
      "Bordados em tecidos atoalhados (combinado com plástico hidrossolúvel)."
    ],
    characteristics: [
      "Confere o mais alto padrão de nitidez e acabamento profissional nas margens.",
      "Elimina a aparência 'mordida' ou serrilhada dos contornos.",
      "Combina-se perfeitamente com Zigzag Underlay para criar volume e sustentação máxima."
    ],
    commonErrors: [
      "❌ Configurar margem de recuo (inset) muito pequena (ex: 0.1 mm), fazendo o trilho de subponto escapar e aparecer para fora do ponto cheio.",
      "❌ Usar Edge Walk em colunas muito finas (menores que 1.5 mm), onde os dois trilhos ficam colados um no outro sem espaço útil.",
      "❌ Comprimento de ponto excessivamente longo que 'corta caminho' em curvas acentuadas, deixando cantos sem suporte."
    ],
    troubleshootingTips: [
      "Subponto aparecendo do lado de fora do bordado: aumente o recuo da margem (Inset Margin) no software para 0.4 mm ou 0.5 mm.",
      "Bordas do ponto cheio parecendo dentes de serra em malha piquet: ative o Underlay Edge Walk imediatamente.",
      "Linha de subponto escapando apenas nas curvas: reduza a tolerância de curva do subponto para acompanhar o arco com pontos mais curtos."
    ],
    dicaArtrelados: "Para bordar camisas polo em tecido piquet sem deixar as letras com bordas 'mastigadas', use SEMPRE o Edge Walk com recuo de 0.4 mm! O trilho de borda segura as laçadas do piquet e suas letras ficam lisinhas como se tivessem sido bordadas em papel!",
    voceSabia: "O conceito do Edge Walk é baseado nas técnicas de cantaria e estucaria da Grécia Antiga, onde os artesãos fixavam perfis metálicos nas bordas antes de aplicar o gesso decorativo para garantir arestas perfeitamente retas.",
    practicalExercise: "Abra o software e crie uma letra 'H' de 25 mm em ponto cheio. Em uma coluna aplique apenas Center Walk; na outra, aplique Edge Walk com recuo de 0.4 mm. Borde sobre tecido piquet e observe com uma lupa a perfeição das bordas no lado com Edge Walk.",
    quickSummary: "Subponto de trilhos paralelos que contorna as margens internas do ponto cheio, garantindo arestas nítidas, regulares e livres de serrilhado.",
    relatedTerms: ["Underlay", "Center Walk", "Zigzag Underlay", "Inset Distance (Recuo de Margem)", "Ponto Cheio (Satin)", "Piquet"],
    tags: ["edge walk", "borda dupla", "underlay", "contorno", "nitidez", "programacao", "wilcom"]
  },
  {
    id: "underlay-zigzag-subponto-em-zig-zag-simples",
    code: "U-004",
    letter: "U",
    term: "Underlay Zigzag (Subponto em Zig-Zag Simples)",
    pronunciation: "ân-der-lei zig-zég (sub-pon-to em zig-zág sim-ples)",
    level: "Intermediário 🟡",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva masculina.",
    origin: "Termo de digitalização que descreve a geometria alternada e aberta em zigue-zague para preenchimento de sustentação sob colunas médias de ponto cheio.",
    summary: "Subponto em formato de zigue-zague aberto costurado sob colunas de ponto cheio para dar volume, sustentação central e travar o tecido contra encolhimento.",
    definition: "O Underlay Zigzag (Subponto em Zigue-Zague Simples / Open Zigzag Underlay) é uma estrutura de ancoragem intermediária em que a agulha costura pontos alternados em diagonal de um lado para o outro da coluna, com espaçamento aberto (geralmente entre 2,0 mm e 4,0 mm entre passadas) e recuo de borda calibrado. Sua finalidade mecânica é preencher o miolo da coluna com uma 'mola' elástica de linha que amortece o impacto da agulha, eleva os pontos superiores em um relevo sutil e impede que o centro do tecido afunde sob a tensão da cobertura.",
    technicalDetails: "Ao contrário do ponto cheio de acabamento (que possui densidade fechada de 0.38 a 0.45 mm), o Zigzag Underlay é ultra-aberto, consumindo poucos pontos enquanto cobre uma área bidimensional ampla. O ângulo das linhas do zigzag (entre 45° e 60° em relação à linha média) oferece resistência mecânica diagonal isotrópica, travando as tramas e urdumes do tecido em direções combinadas. É a escolha ideal para colunas com largura entre 2,5 mm e 5,0 mm em tecidos médios como algodão, sarja, brim e microfibra.",
    beginnerExplanation: "É uma costurinha em zigue-zague bem aberta e levinha que fica escondida embaixo da coluna de pontos cheios. Ela serve para criar uma 'caminha fofa' de sustentação, fazendo o bordado ficar com um volume bonito e impedindo que o meio do tecido fique afundado.",
    howItWorks: [
      "1. A máquina percorre a coluna executando pontos alternados em zigue-zague aberto de uma margem interna à outra.",
      "2. A estrutura em zigue-zague cria pontes de linha cruzadas sobre o tecido.",
      "3. Ao chegar ao final da coluna, a máquina retorna costurando o ponto cheio de acabamento por cima.",
      "4. Os pontos cheios de acabamento apoiam-se sobre os cruzamentos do zigue-zague.",
      "5. A coluna de bordado ganha um relevo suave, brilho uniforme e corpo estruturado.",
      "6. A tração do tecido é distribuída de forma homogênea, eliminando rugas no centro da peça."
    ],
    applications: [
      "Colunas de ponto cheio médias (largura de 2,5 mm a 5,0 mm).",
      "Monogramas elegantes, letras de brasões e arabescos com leve efeito de relevo.",
      "Bordados corporativos em sarja, brim, gabardine e oxford.",
      "Reforço de logomarcas em bonés estruturados e jaquetas."
    ],
    characteristics: [
      "Gera volume suave e melhora o reflexo da luz nos fios de poliéster.",
      "Excelente custo-benefício entre consumo de pontos e estabilização.",
      "Combina-se frequentemente com Center Walk ou Edge Walk para suporte total."
    ],
    commonErrors: [
      "❌ Configurar o zigue-zague muito denso e fechado (ex: 0.8 mm), transformando o subponto em uma placa dura e grossa.",
      "❌ Usar em colunas muito finas (menores que 2.0 mm), onde o zigue-zague não tem espaço para abrir e embolar pontos.",
      "❌ Deixar o recuo de margem (inset) zerado, fazendo as pontas do zigue-zague vazarem para fora do ponto cheio."
    ],
    troubleshootingTips: [
      "Pontas do zigue-zague aparecendo nas laterais do bordado: aumente o recuo da margem (Inset Margin) para 0.45 mm no software.",
      "Bordado ficando muito pesado no peito de camisas: aumente o espaçamento do Zigzag Underlay de 2.5 mm para 3.5 mm.",
      "Ponto cheio afundando no centro em colunas largas: combine Edge Walk com Zigzag Underlay para sustentação completa de borda e miolo."
    ],
    dicaArtrelados: "Se você quer dar aquele aspecto de bordado 'gordinho', elegante e profissional nas suas letras sem gastar EVA 3D, aplique Underlay Zigzag com Edge Walk! O bordado sobe na medida certa, fica macio e brilha muito mais na luz!",
    voceSabia: "Na indústria automotiva de luxo (bancos de couro de carros esportivos), o Zigzag Underlay é calibrado com precisão micrométrica para garantir que os logotipos bordados resistam a mais de 10 anos de atrito e peso sem afundar.",
    practicalExercise: "Digitalize uma barra de 4 mm de largura por 5 cm de comprimento. Em uma metade aplique apenas Center Walk e na outra metade aplique Zigzag Underlay. Borde em brim e passe os dedos por cima para sentir a diferença de sustentação e relevo.",
    quickSummary: "Subponto em formato de zigue-zague aberto que cria volume, suporte central e estabilidade bidimensional sob colunas médias de ponto cheio.",
    relatedTerms: ["Underlay", "Double Zigzag", "Edge Walk", "Ponto Cheio (Satin)", "Volume no Bordado", "Densidade"],
    tags: ["zigzag underlay", "subponto zigzag", "relevo", "sustentacao", "wilcom", "pontos cheios"]
  },
  {
    id: "underlay-double-zigzag-zig-zag-duplo-malha-cruzada",
    code: "U-005",
    letter: "U",
    term: "Underlay Double Zigzag (Zig-Zag Duplo / Malha Cruzada)",
    pronunciation: "ân-der-lei dâ-bol zig-zég (zig-zág du-plo / ma-lha cru-za-da)",
    level: "Avançado 🔴",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva masculina.",
    origin: "Evolução do subponto em zigue-zague simples com passada dupla de ida e volta, desenvolvida para criar uma rede em forma de diamante ou malha treliçada sob colunas largas.",
    summary: "Subponto de alta sustentação formado por duas passadas de zigue-zague cruzadas em sentidos opostos, criando uma treliça em diamante ideal para tecidos elásticos, malhas e colunas largas.",
    definition: "O Underlay Double Zigzag (Subponto em Zigue-Zague Duplo / Malha Cruzada em Diamante / Lattice Column Underlay) é uma estrutura de suporte avançada executada em duas etapas contínuas: a máquina costura uma primeira passada em zigue-zague aberto até o final da coluna e, em seguida, retorna costurando uma segunda passada em zigue-zague com ângulo invertido. O cruzamento das duas linhas forma uma malha geométrica em formato de losangos (diamantes) perfeitamente fechada e interligada sob a área do ponto cheio.",
    technicalDetails: "A treliça formada pelo Double Zigzag oferece o mais alto índice de estabilização mecânica multidirecional para colunas largas (entre 4,0 mm e 9,0 mm). Ele neutraliza simultaneamente a tração de urdume, trama e diagonais a 45°, funcionando como uma ponteira de contenção que impede a deformação elástica de tecidos instáveis (como malha suedine, viscolycra, moletons e suéteres de tricô). Ao mesmo tempo, eleva substancialmente a cobertura de acabamento, permitindo diminuir a densidade final do ponto cheio de 0.38 mm para 0.44 mm sem transparência.",
    beginnerExplanation: "É um zigue-zague duplo de ida e volta que se cruza no meio, formando uma 'telinha' cheia de pequenos losangos por baixo do bordado. É a fundação mais forte e segura que existe para bordar letras largas e desenhos em tecidos que esticam muito, como moletons, suéteres e malhas elásticas.",
    howItWorks: [
      "1. A máquina avança ao longo da coluna costurando o primeiro zigue-zague inclinado para a direita.",
      "2. Ao chegar ao topo da coluna, a máquina inverte e desce costurando o segundo zigue-zague inclinado para a esquerda.",
      "3. Os dois zigue-zagues se cruzam a cada 2 mm, criando uma rede firme de pequenos diamantes interligados.",
      "4. O tecido fica completamente travado na entretela em todas as direções da trama.",
      "5. A máquina aplica os pontos cheios de acabamento sobre a rede treliçada.",
      "6. O bordado resultante fica incrivelmente liso, encorpado, sem buracos e sem repuxar a malha elástica."
    ],
    applications: [
      "Colunas de ponto cheio muito largas (largura de 4,0 mm a 9,0 mm).",
      "Bordados em tecidos altamente elásticos (viscolycra, suéteres de lã, malhas pesadas e moletons).",
      "Grandes letras de jaquetas colegiais (Varsity Jackets) e uniformes esportivos de inverno.",
      "Bordados que exigem volume e sustentação máxima sem uso de EVA."
    ],
    characteristics: [
      "Máxima estabilização dimensional e bloqueio de elasticidade do tecido.",
      "Cria uma superfície de suporte rígida e uniforme como uma tela protetora.",
      "Exige controle de densidade para não gerar excesso de rigidez em tecidos leves."
    ],
    commonErrors: [
      "❌ Usar Double Zigzag em tecidos muito finos de verão (como seda ou voal), deixando a peça armada e pesada.",
      "❌ Aplicar em colunas finas (menores que 3 mm), acumulando cruzamentos de pontos no mesmo local e quebrando a agulha.",
      "❌ Esquecer o recuo de margem adequado (mínimo 0.5 mm), fazendo as pontas dos diamantes escaparem nas curvas."
    ],
    troubleshootingTips: [
      "Letras largas em moletom ficando 'ocas' ou afundadas no meio: aplique o Underlay Double Zigzag com espaçamento de 2.8 mm.",
      "Bordado muito rígido na malha: aumente o espaçamento entre os zigue-zagues para 3.5 mm ou 4.0 mm.",
      "Fios da malha puxando para cima entre as letras: combine Double Zigzag com Edge Walk para fechar as laterais."
    ],
    dicaArtrelados: "Para bordar moletons pesados e jaquetas de inverno com nomes grandes, o Double Zigzag é imbatível! Ele cria uma base tão perfeita que o ponto cheio desliza por cima como se estivesse bordando sobre uma tábua lisa, sem repuxar nem um milímetro do moletom!",
    voceSabia: "A estrutura do Double Zigzag é idêntica ao princípio das pontes metálicas treliçadas (treliças de Warren e Pratt) criadas pelos engenheiros do século XIX para suportar a passagem de trens pesados sobre rios.",
    practicalExercise: "Crie uma letra 'M' de 40 mm de altura com colunas de 6 mm de largura. Programe uma com Center Walk e outra com Double Zigzag. Borde ambas em um pedaço de moletom felpudo e compare a rigidez, a firmeza e o aspecto visual.",
    quickSummary: "Subponto de alta sustentação com zigue-zague duplo cruzado em diamante, ideal para colunas largas e tecidos de malha elástica instável.",
    relatedTerms: ["Underlay", "Zigzag Underlay", "Edge Walk", "Moletom", "Ponto Cheio (Satin)", "Treliça Têxtil"],
    tags: ["double zigzag", "subponto cruzado", "trelica", "moletom", "malha", "programacao", "wilcom"]
  },
  {
    id: "underlay-tatami-grid-lattice-grade-reticulada-de-base",
    code: "U-006",
    letter: "U",
    term: "Underlay Tatami / Grid / Lattice (Grade Reticulada de Base)",
    pronunciation: "ân-der-lei ta-ta-mi / grid / lé-tis (gra-de re-ti-cu-la-da de ba-se)",
    level: "Avançado 🔴",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva feminina.",
    origin: "Derivado do método de fundação reticulada de tecelagem industrial e da programação avançada de preenchimentos tatami (Wilcom / Tajima DG).",
    summary: "Subponto em grade cruzada ortogonal ou diagonal de pontos corridos abertos, essencial para estabilizar grandes áreas de preenchimento tatami sem enrugar o tecido.",
    definition: "O Underlay Tatami (Grade Reticulada / Lattice Underlay / Grid Underlay / Mesh Fill Underlay) é a estrutura de fundação mais completa e robusta para áreas amplas de preenchimento (Fill/Tatami). Consiste em uma ou duas camadas de pontos corridos paralelos muito abertos (com espaçamento entre linhas de 2,5 mm a 5,0 mm e comprimento de ponto de 3,0 mm a 4,5 mm), costurados em ângulos estratégicos (geralmente cruzados a 45° e 135°, ou perpendiculares a 90° em relação ao ângulo do tatami de cobertura).",
    technicalDetails: "Grandes preenchimentos tatami concentram milhares de pontos que exercem contração isotrópica intensa sobre o tecido no bastidor. Se bordado diretamente sem grade, o tecido sofre distorção dimensional progressiva (o início do tatami encolhe e o final sobra como uma onda de tecido, empurrando os contornos para fora do registro). A grade do Underlay Tatami atua grampeando o tecido à entretela em centenas de interseções geométricas milimétricas, travando o tecido como uma malha soldada antes do início da cobertura densa.",
    beginnerExplanation: "É como uma 'telinha de cerca' ou grade de xadrez bem levinha que a máquina costura por baixo de desenhos grandes antes de preencher tudo com o ponto tatami. Essa grade segura o tecido firme no lugar para ele não enrugar nem entortar enquanto a máquina faz milhares de pontos.",
    howItWorks: [
      "1. A máquina borda uma primeira camada de linhas paralelas abertas inclinadas a 45°.",
      "2. Em seguida, borda uma segunda camada de linhas paralelas inclinadas a 135°, cruzando a primeira e formando uma grade ortogonal perfeita.",
      "3. Essas linhas grampeiam o tecido e a entretela em toda a extensão do objeto.",
      "4. A máquina inicia o ponto tatami de cobertura com ângulo diferente (ex: 0° ou 90°).",
      "5. Os pontos do tatami de acabamento repousam sobre a grade de sustentação.",
      "6. A área preenchida fica 100% plana, sem ondulações e com contornos perfeitamente encaixados."
    ],
    applications: [
      "Grandes áreas de preenchimento tatami (fundos de brasões, bandeiras, mascotes e costas de jaquetas).",
      "Bordados extensos em camisetas de algodão, uniformes corporativos e jalecos.",
      "Prevenção absoluta de desalinhamento de contornos (out-of-register) em logomarcas complexas.",
      "Estabilização de tecidos finos e instáveis que tendem a franzir sob preenchimentos densos."
    ],
    characteristics: [
      "A mais alta eficiência contra o enrugamento de peças de grande formato.",
      "Distribui a tração mecânica de forma homogênea por toda a superfície.",
      "Garante o encaixe milimétrico perfeito de contornos em ponto cheio ao redor de tatamis."
    ],
    commonErrors: [
      "❌ Programar o Underlay Tatami com o mesmo ângulo do tatami de cobertura, fazendo as linhas de cima caírem dentro dos sulcos da base e não dando sustentação.",
      "❌ Deixar a grade excessivamente densa (menos de 1.5 mm de espaçamento), tornando o bordado duro como papelão.",
      "❌ Usar underlay simples em desenhos grandes de 15 cm, resultando em rugas gigantes e contornos desencaixados."
    ],
    troubleshootingTips: [
      "Contorno preto saindo 2 mm fora do preenchimento colorido: ative o Underlay Tatami em grade dupla (Lattice Underlay) para travar a base.",
      "Tecido formando uma 'bolsa' ou onda no meio do preenchimento: aumente a área da grade e borde do centro para as bordas.",
      "Bordado muito pesado no peito: aumente o espaçamento da grade do underlay para 4.0 mm e reduza a densidade do tatami de cobertura para 0.42 mm."
    ],
    dicaArtrelados: "Em desenhos grandes (como brasões e logomarcas de empresas), a Grade de Tatami é a garantia de que o contorno preto vai encaixar perfeitamente no final! Programe a grade a 45° e o acabamento a 90°: o encaixe fica tão perfeito que parece pintura!",
    voceSabia: "Na engenharia civil moderna, as lajes de concreto utilizam exatamente o mesmo princípio da grade reticulada (malha pop de aço soldado) para distribuir o peso e evitar trincas estruturais.",
    practicalExercise: "Crie um círculo de 60 mm com ponto tatami. Programe um com subponto simples e outro com Underlay Tatami em Grade Dupla (Lattice) a 45°/135°. Borde ambos em tecido de camiseta e veja como o segundo mantém a forma circular perfeita sem enrugar.",
    quickSummary: "Subponto em grade reticulada cruzada que ancora grandes áreas de preenchimento tatami à entretela, eliminando rugas e garantindo encaixe milimétrico de contornos.",
    relatedTerms: ["Tatami", "Underlay", "Deslocamento de Contorno (Registration Shift)", "Lattice Fill", "Compensação de Repuxo"],
    tags: ["tatami underlay", "grade reticulada", "lattice", "preenchimento", "estabilidade", "wilcom"]
  }
];

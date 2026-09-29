import { Verbete } from "../types";

export const VERBETES_LETTER_U: Verbete[] = [
  {
    "id": "underlay-subponto-ponto-de-fundacao",
    "code": "U-001",
    "letter": "U",
    "term": "Underlay (Subponto / Ponto de Fundação)",
    "pronunciation": "ân-der-lei (sub-pon-to / pon-to de fun-da-ção)",
    "level": "Iniciante 🟢",
    "category": "Pontos & Estruturas",
    "grammarClass": "Substantivo masculino de origem inglesa.",
    "origin": "Termo técnico da engenharia têxtil e da digitalização de bordados (Wilcom, Tajima, Melco) derivado do inglês 'under' (embaixo) e 'lay' (deitar/camada), referindo-se aos pontos estruturais costurados antes da camada de acabamento.",
    "summary": "Camada de pontos preliminares invisíveis costurados sob o bordado principal para fixar o tecido à entretela, dar sustentação, estabilidade e evitar enrugamentos.",
    "definition": "O Underlay (Subponto, Ponto de Fundação ou Ponto de Base) é a estrutura oculta de pontos costurada pela máquina de bordar antes da camada visível de acabamento (seja ela em ponto cheio/satin ou tatami/fill). Sua função mecânica indispensável é tripla: 1) Ancorar e 'soldar' o tecido à entretela no bastidor, eliminando o deslizamento relativo; 2) Pré-encolher o tecido localmente, absorvendo a tensão mecânica das laçadas; e 3) Criar um colchão ou leito de suporte que eleva os pontos superiores, impedindo que eles afundem na trama do tecido ou nas felpas.",
    "technicalDetails": "A física do bordado demonstra que o fio superior sob tensão exerce uma força centrípeta constante de tração (pull force) que aproxima as bordas do tecido (efeito de encolhimento transversal). O underlay atua como a armadura de aço no concreto armado: ao costurar linhas perpendiculares ou diagonais à direção do ponto de cobertura com recuo de margem (inset distance de 0.3 a 0.5 mm), ele cria resistência à compressão e equaliza a tração. Bordar sem underlay resulta em perda imediata de cobertura, abertura de fendas entre objetos, enrugamento periférico (puckering) e deformação geométrica de círculos e letras.",
    "beginnerExplanation": "É como a fundação e as vigas de uma casa: você não vê depois que a parede está pronta, mas sem ela a casa cai! O subponto é uma costura leve e escondida que a máquina faz primeiro para prender o tecido na entretela e deixar tudo retinho antes de fazer o bordado bonito por cima.",
    "howItWorks": [
      "1. A máquina inicia o objeto costurando primeiro os pontos de fundação (underlay) programados na matriz.",
      "2. Esses pontos perfuram o tecido e a entretela, unindo as duas camadas com firmeza mecânica.",
      "3. O subponto amassa as fibras e felpas do tecido, criando uma superfície plana e estável.",
      "4. Em seguida, a máquina borda a camada de cobertura (pontos cheios ou tatami) exatamente por cima da fundação.",
      "5. Os pontos visíveis ficam perfeitamente apoiados sobre a estrutura do underlay sem afundar.",
      "6. A peça finalizada apresenta contornos nítidos, alta definição e zero enrugamento ao redor."
    ],
    "applications": [
      "Uso obrigatório em 100% das matrizes profissionais de bordado computadorizado.",
      "Estabilização de letras, colunas de ponto cheio e monogramas finos.",
      "Prevenção de rugas em grandes áreas de preenchimento tatami em camisetas e uniformes.",
      "Sustentação de bordados em toalhas atoalhadas, veludos, malhas e tecidos elásticos."
    ],
    "characteristics": [
      "Invisível no produto final, ficando totalmente coberto pelos pontos de topo.",
      "Consome entre 10% e 20% do total de pontos da matriz, economizando retrabalho.",
      "Permite reduzir a densidade da camada de acabamento sem perder a cobertura visual."
    ],
    "commonErrors": [
      "❌ Desativar o subponto para 'economizar pontos' ou 'bordar mais rápido', fazendo o tecido enrugar e o contorno sair torto.",
      "❌ Usar subponto muito largo que ultrapassa as bordas do ponto cheio, deixando pontas de linha aparecendo para fora.",
      "❌ Usar subponto na mesma direção do ponto de acabamento, fazendo a linha de cima cair no vão da linha de baixo sem dar sustentação."
    ],
    "troubleshootingTips": [
      "Tecido enrugando e formando ondas ao redor do bordado: ative ou reforce o underlay com uma grade de sustentação (Tatami ou Zigzag Underlay).",
      "Subponto aparecendo para fora das bordas do ponto cheio: aumente o recuo da margem (Inset Margin) no software para 0.4 mm ou 0.5 mm.",
      "Bordado muito rígido e duro como papelão: reduza a densidade do subponto em vez de retirar a estrutura de ancoragem."
    ],
    "dicaArtrelados": "Nunca, jamais desative o subponto das suas matrizes! Uma matriz sem underlay é como um bolo sem fermento: murcha e perde a forma. Um bom subponto permite até que você diminua a quantidade de pontos cheios por cima, deixando o bordado mais macio, mais rápido e muito mais bonito!",
    "voceSabia": "Nas primeiras máquinas de bordar manuais do século XIX, as bordadeiras costuravam à mão um cordão de algodão grosso ou barbante sob as letras para dar relevo antes de cobrir com linha de seda — essa é a origem histórica do moderno underlay computadorizado!",
    "practicalExercise": "Crie um quadrado de 4x4 cm no seu software de bordado. Programe um quadrado sem nenhum underlay e outro idêntico com underlay em grade. Borde ambos em uma malha de camiseta e sinta na prática a diferença inacreditável de firmeza e acabamento.",
    "quickSummary": "Estrutura oculta de pontos de fundação costurada sob o bordado para unir tecido e entretela, evitar rugas e dar sustentação aos pontos de cobertura.",
    "relatedTerms": [
      "Center Walk",
      "Edge Walk",
      "Zigzag Underlay",
      "Compensação de Encolhimento",
      "Densidade",
      "Puckering"
    ],
    "imageUrl": "/images/u001_underlay_v1.jpg?v=1",
    "imageCaption": "Anatomia do Subponto (Underlay): a camada de fundação invisível que ancora o tecido na entretela e a comparação prática entre um bordado com suporte firme versus sem suporte.",
    "tags": [
      "underlay",
      "subponto",
      "fundacao",
      "estrutura",
      "programacao",
      "wilcom",
      "estabilidade"
    ]
  },
  {
    "id": "underlay-center-walk-ponto-corrido-central",
    "code": "U-002",
    "letter": "U",
    "term": "Underlay Center Walk (Ponto Corrido Central)",
    "pronunciation": "ân-der-lei cên-ter uók (pon-to cor-ri-do cen-tral)",
    "level": "Iniciante 🟢",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Termo de digitalização do inglês 'center' (centro) e 'walk' (caminhada/trajeto corrido), indicando o trajeto linear de ponto corrido que percorre a espinha dorsal de uma coluna.",
    "summary": "Subponto linear simples costurado exatamente no centro de colunas estreitas de ponto cheio e letras pequenas para fixação rápida sem adicionar espessura.",
    "definition": "O Underlay Center Walk (ou Subponto de Ponto Corrido Central / Trajeto ao Centro) é a forma mais elementar e ágil de subponto. Consiste em uma linha contínua de pontos corridos (running stitches) executada rigorosamente ao longo da linha central (espinha dorsal) do objeto antes da aplicação dos pontos cheios transversais. É a fundação recomendada para colunas estreitas de largura entre 1,0 mm e 2,5 mm, especialmente textos pequenos, monogramas, arabescos finos e detalhes delicados.",
    "technicalDetails": "Mecanicamente, o Center Walk fixa o centro da coluna de tecido à entretela e serve de guia de posicionamento para o deslocamento contínuo da agulha (muitas vezes funcionando simultaneamente como trajeto de deslocamento / travel run). O comprimento de ponto ideal para o Center Walk situa-se entre 1,5 mm e 2,2 mm. Em colunas com largura inferior a 1,5 mm, o Center Walk é o único underlay viável, pois qualquer outro tipo mais largo (como Edge Walk ou Zigzag) escaparia para fora das bordas do ponto cheio devido ao recuo físico da agulha.",
    "beginnerExplanation": "É uma costurinha reta simples que passa bem no meinho da letra antes da máquina fazer os pontinhos cheios. Ela serve para prender a letra no lugar sem deixar o bordado duro, sendo perfeita para escrever nomes com letrinhas pequenas.",
    "howItWorks": [
      "1. A agulha inicia na extremidade da letra ou traço fino.",
      "2. Costura uma linha reta de pontos corridos simples pelo centro geométrico da coluna até o fim.",
      "3. Ao atingir o final da coluna, a máquina inverte imediatamente e começa a cobrir o traço com pontos cheios transversais (Satin).",
      "4. O ponto corrido central fica sepultado sob as passadas do ponto cheio.",
      "5. A coluna ganha estabilidade e alinhamento com mínimo consumo de pontos e tempo."
    ],
    "applications": [
      "Bordado de textos pequenos e nomes em jalecos, uniformes e fitas com letras de 5 mm a 12 mm.",
      "Colunas finas de ponto cheio com largura de 1,0 mm a 2,2 mm.",
      "Contornos delicados, talos florais finos, arabescos e bigodes de personagens.",
      "Trajetos de deslocamento ocultos entre letras conectadas em caligrafia cursiva."
    ],
    "characteristics": [
      "Extremamente leve, rápido e com menor número de pontos.",
      "Não adiciona rigidez nem volume excessivo ao tecido.",
      "Excelente para tecidos finos, percal, tricoline e fitas de cetim."
    ],
    "commonErrors": [
      "❌ Usar Center Walk sozinho em colunas muito largas (acima de 4 mm), fazendo as bordas do ponto cheio afundarem no tecido.",
      "❌ Usar comprimento de ponto muito longo (acima de 3 mm), não fixando o tecido adequadamente em curvas fechadas.",
      "❌ Esquecer de ativar o Center Walk em letrinhas pequenas, fazendo as letras ficarem tortas e finas."
    ],
    "troubleshootingTips": [
      "Letras pequenas ficando finas ou sumindo no tecido: ative o Underlay Center Walk e aumente a compensação de encolhimento para 0.35 mm.",
      "Ponto corrido aparecendo na ponta da letra: reduza o comprimento de ponto do subponto para 1.5 mm nas extremidades.",
      "Bordas de letras largas parecendo murchas: troque o Center Walk por Edge Walk (Borda Dupla) ou combine ambos."
    ],
    "dicaArtrelados": "Para letrinhas de até 10 mm em toalhas ou uniformes, o Center Walk é o seu melhor amigo! Ele segura a letra no lugar em apenas 3 segundos de costura e deixa a letra perfeitamente legível sem criar nós no avesso!",
    "voceSabia": "Softwares modernos como o Wilcom usam o Center Walk não apenas como reforço, mas como caminho estratégico para a agulha viajar de uma letra para a outra sem precisar cortar a linha!",
    "practicalExercise": "Escreva uma palavra com letras de 8 mm no software. Em uma versão, deixe sem subponto; na outra, ative o Center Walk com comprimento 1.8 mm. Borde as duas e compare a nitidez e retilinização de cada uma.",
    "quickSummary": "Subponto linear simples costurado ao longo da linha central de colunas estreitas e letras pequenas para ancoragem ágil e sem volume.",
    "imageUrl": "/images/u002_underlay_center_walk_v1.jpg?v=1",
    "imageCaption": "Engenharia do Subponto Corrido Central em 1 Agulha: trajeto linear no eixo central da coluna para fixação rápida de tecidos e sustentação de letras pequenas, garantindo alta definição sem rigidez no bastidor eletrônico.",
    "relatedTerms": [
      "Underlay",
      "Edge Walk",
      "Travel Run",
      "Ponto Cheio (Satin)",
      "Microletras"
    ],
    "tags": [
      "center walk",
      "subponto central",
      "underlay",
      "letras pequenas",
      "wilcom",
      "programacao"
    ]
  },
  {
    "id": "underlay-edge-walk-borda-dupla-contorno-de-margem",
    "code": "U-003",
    "letter": "U",
    "term": "Underlay Edge Walk (Borda Dupla / Contorno de Margem)",
    "pronunciation": "ân-der-lei édj uók (bor-da du-pla / con-tor-no de mar-gem)",
    "level": "Intermediário 🟡",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Da expressão em inglês 'edge' (borda/margem) e 'walk' (trajeto), referindo-se aos trilhos duplos de costura que margeiam o perímetro interno de uma coluna de ponto cheio.",
    "summary": "Subponto estrutural de trilhos paralelos que contorna as duas margens internas do ponto cheio, garantindo bordas retilíneas, nítidas e livres de dentes de serra.",
    "definition": "O Underlay Edge Walk (Subponto de Borda / Borda Dupla / Contour Underlay) é o subponto estrutural composto por duas linhas paralelas de ponto corrido que percorrem o perímetro interno das margens de uma coluna de ponto cheio. Os trilhos são posicionados com um recuo de margem milimétrico pré-determinado (inset distance, tipicamente de 0.3 mm a 0.5 mm para dentro do contorno). Sua principal função mecânica é criar um 'trilho de contenção' que apoia e ergue as pontas externas das laçadas do ponto cheio, eliminando a irregularidade nas bordas (efeito dente de serra) e impedindo que o ponto afunde nas fibras.",
    "technicalDetails": "Ao bordar em tecidos com textura (como piquet, toalhas atoalhadas ou linho), os pontos cheios tendem a afundar nos vales da trama têxtil, gerando bordas serrilhadas e desalinhadas. O Edge Walk funciona como uma viga perimetral que mantém uma barreira física contínua sob as penetrações da agulha. Em softwares de digitalização, o comprimento do ponto do Edge Walk deve ser calibrado entre 1,8 mm e 2,5 mm, com tolerância de curvas ajustada para que a linha siga com precisão geométrica os arcos e cantos sem atalhar.",
    "beginnerExplanation": "São duas linhas de costura que a máquina faz perto das beiradinhas de dentro da letra antes de cobrir com o ponto cheio. Elas funcionam como dois trilhos de trem que seguram as pontas dos fios, deixando as beiradas da letra retinhas, nítidas e lisinhas parecendo corte de tesoura.",
    "howItWorks": [
      "1. A máquina inicia o objeto costurando um ponto corrido acompanhando a margem esquerda (com recuo de 0.4 mm).",
      "2. Ao chegar ao topo da coluna, faz a curva e desce costurando a margem direita.",
      "3. Os dois trilhos formam uma moldura fechada no formato exato da coluna.",
      "4. A máquina inverte o sentido e aplica o ponto cheio cobrindo completamente os trilhos de borda.",
      "5. As laçadas do ponto cheio descansam sobre as linhas guias do Edge Walk.",
      "6. As bordas do bordado final ficam ultra-nítidas, brilhantes e perfeitamente retas."
    ],
    "applications": [
      "Colunas de ponto cheio médias e largas com largura entre 2,5 mm e 8,0 mm.",
      "Letras de tamanho médio e grande (acima de 15 mm) em uniformes, toalhas e bonés.",
      "Contornos nítidos de logomarcas corporativas sobre tecidos texturizados como piquet.",
      "Bordados em tecidos atoalhados (combinado com plástico hidrossolúvel)."
    ],
    "characteristics": [
      "Confere o mais alto padrão de nitidez e acabamento profissional nas margens.",
      "Elimina a aparência 'mordida' ou serrilhada dos contornos.",
      "Combina-se perfeitamente com Zigzag Underlay para criar volume e sustentação máxima."
    ],
    "commonErrors": [
      "❌ Configurar margem de recuo (inset) muito pequena (ex: 0.1 mm), fazendo o trilho de subponto escapar e aparecer para fora do ponto cheio.",
      "❌ Usar Edge Walk em colunas muito finas (menores que 1.5 mm), onde os dois trilhos ficam colados um no outro sem espaço útil.",
      "❌ Comprimento de ponto excessivamente longo que 'corta caminho' em curvas acentuadas, deixando cantos sem suporte."
    ],
    "troubleshootingTips": [
      "Subponto aparecendo do lado de fora do bordado: aumente o recuo da margem (Inset Margin) no software para 0.4 mm ou 0.5 mm.",
      "Bordas do ponto cheio parecendo dentes de serra em malha piquet: ative o Underlay Edge Walk imediatamente.",
      "Linha de subponto escapando apenas nas curvas: reduza a tolerância de curva do subponto para acompanhar o arco com pontos mais curtos."
    ],
    "dicaArtrelados": "Para bordar camisas polo em tecido piquet sem deixar as letras com bordas 'mastigadas', use SEMPRE o Edge Walk com recuo de 0.4 mm! O trilho de borda segura as laçadas do piquet e suas letras ficam lisinhas como se tivessem sido bordadas em papel!",
    "voceSabia": "O conceito do Edge Walk é baseado nas técnicas de cantaria e estucaria da Grécia Antiga, onde os artesãos fixavam perfis metálicos nas bordas antes de aplicar o gesso decorativo para garantir arestas perfeitamente retas.",
    "practicalExercise": "Abra o software e crie uma letra 'H' de 25 mm em ponto cheio. Em uma coluna aplique apenas Center Walk; na outra, aplique Edge Walk com recuo de 0.4 mm. Borde sobre tecido piquet e observe com uma lupa a perfeição das bordas no lado com Edge Walk.",
    "quickSummary": "Subponto de trilhos paralelos que contorna as margens internas do ponto cheio, garantindo arestas nítidas, regulares e livres de serrilhado.",
    "imageUrl": "/images/u003_underlay_edge_walk_v1.jpg?v=1",
    "imageCaption": "Engenharia do Subponto Edge Walk em 1 Agulha: trilhos duplos paralelos com recuo calibrado de 0,4 mm nas margens internas, eliminando o efeito dente de serra e garantindo contornos nítidos e retilíneos no bastidor eletrônico.",
    "relatedTerms": [
      "Underlay",
      "Center Walk",
      "Zigzag Underlay",
      "Inset Distance (Recuo de Margem)",
      "Ponto Cheio (Satin)",
      "Piquet"
    ],
    "tags": [
      "edge walk",
      "borda dupla",
      "underlay",
      "contorno",
      "nitidez",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "underlay-zigzag-subponto-em-zig-zag-simples",
    "code": "U-004",
    "letter": "U",
    "term": "Underlay Zigzag (Subponto em Zig-Zag Simples)",
    "pronunciation": "ân-der-lei zig-zég (sub-pon-to em zig-zág sim-ples)",
    "level": "Intermediário 🟡",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Termo de digitalização que descreve a geometria alternada e aberta em zigue-zague para preenchimento de sustentação sob colunas médias de ponto cheio.",
    "summary": "Subponto em formato de zigue-zague aberto costurado sob colunas de ponto cheio para dar volume, sustentação central e travar o tecido contra encolhimento.",
    "definition": "O Underlay Zigzag (Subponto em Zigue-Zague Simples / Open Zigzag Underlay) é uma estrutura de ancoragem intermediária em que a agulha costura pontos alternados em diagonal de um lado para o outro da coluna, com espaçamento aberto (geralmente entre 2,0 mm e 4,0 mm entre passadas) e recuo de borda calibrado. Sua finalidade mecânica é preencher o miolo da coluna com uma 'mola' elástica de linha que amortece o impacto da agulha, eleva os pontos superiores em um relevo sutil e impede que o centro do tecido afunde sob a tensão da cobertura.",
    "technicalDetails": "Ao contrário do ponto cheio de acabamento (que possui densidade fechada de 0.38 a 0.45 mm), o Zigzag Underlay é ultra-aberto, consumindo poucos pontos enquanto cobre uma área bidimensional ampla. O ângulo das linhas do zigzag (entre 45° e 60° em relação à linha média) oferece resistência mecânica diagonal isotrópica, travando as tramas e urdumes do tecido em direções combinadas. É a escolha ideal para colunas com largura entre 2,5 mm e 5,0 mm em tecidos médios como algodão, sarja, brim e microfibra.",
    "beginnerExplanation": "É uma costurinha em zigue-zague bem aberta e levinha que fica escondida embaixo da coluna de pontos cheios. Ela serve para criar uma 'caminha fofa' de sustentação, fazendo o bordado ficar com um volume bonito e impedindo que o meio do tecido fique afundado.",
    "howItWorks": [
      "1. A máquina percorre a coluna executando pontos alternados em zigue-zague aberto de uma margem interna à outra.",
      "2. A estrutura em zigue-zague cria pontes de linha cruzadas sobre o tecido.",
      "3. Ao chegar ao final da coluna, a máquina retorna costurando o ponto cheio de acabamento por cima.",
      "4. Os pontos cheios de acabamento apoiam-se sobre os cruzamentos do zigue-zague.",
      "5. A coluna de bordado ganha um relevo suave, brilho uniforme e corpo estruturado.",
      "6. A tração do tecido é distribuída de forma homogênea, eliminando rugas no centro da peça."
    ],
    "applications": [
      "Colunas de ponto cheio médias (largura de 2,5 mm a 5,0 mm).",
      "Monogramas elegantes, letras de brasões e arabescos com leve efeito de relevo.",
      "Bordados corporativos em sarja, brim, gabardine e oxford.",
      "Reforço de logomarcas em bonés estruturados e jaquetas."
    ],
    "characteristics": [
      "Gera volume suave e melhora o reflexo da luz nos fios de poliéster.",
      "Excelente custo-benefício entre consumo de pontos e estabilização.",
      "Combina-se frequentemente com Center Walk ou Edge Walk para suporte total."
    ],
    "commonErrors": [
      "❌ Configurar o zigue-zague muito denso e fechado (ex: 0.8 mm), transformando o subponto em uma placa dura e grossa.",
      "❌ Usar em colunas muito finas (menores que 2.0 mm), onde o zigue-zague não tem espaço para abrir e embolar pontos.",
      "❌ Deixar o recuo de margem (inset) zerado, fazendo as pontas do zigue-zague vazarem para fora do ponto cheio."
    ],
    "troubleshootingTips": [
      "Pontas do zigue-zague aparecendo nas laterais do bordado: aumente o recuo da margem (Inset Margin) para 0.45 mm no software.",
      "Bordado ficando muito pesado no peito de camisas: aumente o espaçamento do Zigzag Underlay de 2.5 mm para 3.5 mm.",
      "Ponto cheio afundando no centro em colunas largas: combine Edge Walk com Zigzag Underlay para sustentação completa de borda e miolo."
    ],
    "dicaArtrelados": "Se você quer dar aquele aspecto de bordado 'gordinho', elegante e profissional nas suas letras sem gastar EVA 3D, aplique Underlay Zigzag com Edge Walk! O bordado sobe na medida certa, fica macio e brilha muito mais na luz!",
    "voceSabia": "Na indústria automotiva de luxo (bancos de couro de carros esportivos), o Zigzag Underlay é calibrado com precisão micrométrica para garantir que os logotipos bordados resistam a mais de 10 anos de atrito e peso sem afundar.",
    "practicalExercise": "Digitalize uma barra de 4 mm de largura por 5 cm de comprimento. Em uma metade aplique apenas Center Walk e na outra metade aplique Zigzag Underlay. Borde em brim e passe os dedos por cima para sentir a diferença de sustentação e relevo.",
    "quickSummary": "Subponto em formato de zigue-zague aberto que cria volume, suporte central e estabilidade bidimensional sob colunas médias de ponto cheio.",
    "relatedTerms": [
      "Underlay",
      "Double Zigzag",
      "Edge Walk",
      "Ponto Cheio (Satin)",
      "Volume no Bordado",
      "Densidade"
    ],
    "tags": [
      "zigzag underlay",
      "subponto zigzag",
      "relevo",
      "sustentacao",
      "wilcom",
      "pontos cheios"
    ]
  },
  {
    "id": "underlay-double-zigzag-zig-zag-duplo-malha-cruzada",
    "code": "U-005",
    "letter": "U",
    "term": "Underlay Double Zigzag (Zig-Zag Duplo / Malha Cruzada)",
    "pronunciation": "ân-der-lei dâ-bol zig-zég (zig-zág du-plo / ma-lha cru-za-da)",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Evolução do subponto em zigue-zague simples com passada dupla de ida e volta, desenvolvida para criar uma rede em forma de diamante ou malha treliçada sob colunas largas.",
    "summary": "Subponto de alta sustentação formado por duas passadas de zigue-zague cruzadas em sentidos opostos, criando uma treliça em diamante ideal para tecidos elásticos, malhas e colunas largas.",
    "definition": "O Underlay Double Zigzag (Subponto em Zigue-Zague Duplo / Malha Cruzada em Diamante / Lattice Column Underlay) é uma estrutura de suporte avançada executada em duas etapas contínuas: a máquina costura uma primeira passada em zigue-zague aberto até o final da coluna e, em seguida, retorna costurando uma segunda passada em zigue-zague com ângulo invertido. O cruzamento das duas linhas forma uma malha geométrica em formato de losangos (diamantes) perfeitamente fechada e interligada sob a área do ponto cheio.",
    "technicalDetails": "A treliça formada pelo Double Zigzag oferece o mais alto índice de estabilização mecânica multidirecional para colunas largas (entre 4,0 mm e 9,0 mm). Ele neutraliza simultaneamente a tração de urdume, trama e diagonais a 45°, funcionando como uma ponteira de contenção que impede a deformação elástica de tecidos instáveis (como malha suedine, viscolycra, moletons e suéteres de tricô). Ao mesmo tempo, eleva substancialmente a cobertura de acabamento, permitindo diminuir a densidade final do ponto cheio de 0.38 mm para 0.44 mm sem transparência.",
    "beginnerExplanation": "É um zigue-zague duplo de ida e volta que se cruza no meio, formando uma 'telinha' cheia de pequenos losangos por baixo do bordado. É a fundação mais forte e segura que existe para bordar letras largas e desenhos em tecidos que esticam muito, como moletons, suéteres e malhas elásticas.",
    "howItWorks": [
      "1. A máquina avança ao longo da coluna costurando o primeiro zigue-zague inclinado para a direita.",
      "2. Ao chegar ao topo da coluna, a máquina inverte e desce costurando o segundo zigue-zague inclinado para a esquerda.",
      "3. Os dois zigue-zagues se cruzam a cada 2 mm, criando uma rede firme de pequenos diamantes interligados.",
      "4. O tecido fica completamente travado na entretela em todas as direções da trama.",
      "5. A máquina aplica os pontos cheios de acabamento sobre a rede treliçada.",
      "6. O bordado resultante fica incrivelmente liso, encorpado, sem buracos e sem repuxar a malha elástica."
    ],
    "applications": [
      "Colunas de ponto cheio muito largas (largura de 4,0 mm a 9,0 mm).",
      "Bordados em tecidos altamente elásticos (viscolycra, suéteres de lã, malhas pesadas e moletons).",
      "Grandes letras de jaquetas colegiais (Varsity Jackets) e uniformes esportivos de inverno.",
      "Bordados que exigem volume e sustentação máxima sem uso de EVA."
    ],
    "characteristics": [
      "Máxima estabilização dimensional e bloqueio de elasticidade do tecido.",
      "Cria uma superfície de suporte rígida e uniforme como uma tela protetora.",
      "Exige controle de densidade para não gerar excesso de rigidez em tecidos leves."
    ],
    "commonErrors": [
      "❌ Usar Double Zigzag em tecidos muito finos de verão (como seda ou voal), deixando a peça armada e pesada.",
      "❌ Aplicar em colunas finas (menores que 3 mm), acumulando cruzamentos de pontos no mesmo local e quebrando a agulha.",
      "❌ Esquecer o recuo de margem adequado (mínimo 0.5 mm), fazendo as pontas dos diamantes escaparem nas curvas."
    ],
    "troubleshootingTips": [
      "Letras largas em moletom ficando 'ocas' ou afundadas no meio: aplique o Underlay Double Zigzag com espaçamento de 2.8 mm.",
      "Bordado muito rígido na malha: aumente o espaçamento entre os zigue-zagues para 3.5 mm ou 4.0 mm.",
      "Fios da malha puxando para cima entre as letras: combine Double Zigzag com Edge Walk para fechar as laterais."
    ],
    "dicaArtrelados": "Para bordar moletons pesados e jaquetas de inverno com nomes grandes, o Double Zigzag é imbatível! Ele cria uma base tão perfeita que o ponto cheio desliza por cima como se estivesse bordando sobre uma tábua lisa, sem repuxar nem um milímetro do moletom!",
    "voceSabia": "A estrutura do Double Zigzag é idêntica ao princípio das pontes metálicas treliçadas (treliças de Warren e Pratt) criadas pelos engenheiros do século XIX para suportar a passagem de trens pesados sobre rios.",
    "practicalExercise": "Crie uma letra 'M' de 40 mm de altura com colunas de 6 mm de largura. Programe uma com Center Walk e outra com Double Zigzag. Borde ambas em um pedaço de moletom felpudo e compare a rigidez, a firmeza e o aspecto visual.",
    "quickSummary": "Subponto de alta sustentação com zigue-zague duplo cruzado em diamante, ideal para colunas largas e tecidos de malha elástica instável.",
    "relatedTerms": [
      "Underlay",
      "Zigzag Underlay",
      "Edge Walk",
      "Moletom",
      "Ponto Cheio (Satin)",
      "Treliça Têxtil"
    ],
    "tags": [
      "double zigzag",
      "subponto cruzado",
      "trelica",
      "moletom",
      "malha",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "underlay-tatami-grid-lattice-grade-reticulada-de-base",
    "code": "U-006",
    "letter": "U",
    "term": "Underlay Tatami / Grid / Lattice (Grade Reticulada de Base)",
    "pronunciation": "ân-der-lei ta-ta-mi / grid / lé-tis (gra-de re-ti-cu-la-da de ba-se)",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Derivado do método de fundação reticulada de tecelagem industrial e da programação avançada de preenchimentos tatami (Wilcom / Tajima DG).",
    "summary": "Subponto em grade cruzada ortogonal ou diagonal de pontos corridos abertos, essencial para estabilizar grandes áreas de preenchimento tatami sem enrugar o tecido.",
    "definition": "O Underlay Tatami (Grade Reticulada / Lattice Underlay / Grid Underlay / Mesh Fill Underlay) é a estrutura de fundação mais completa e robusta para áreas amplas de preenchimento (Fill/Tatami). Consiste em uma ou duas camadas de pontos corridos paralelos muito abertos (com espaçamento entre linhas de 2,5 mm a 5,0 mm e comprimento de ponto de 3,0 mm a 4,5 mm), costurados em ângulos estratégicos (geralmente cruzados a 45° e 135°, ou perpendiculares a 90° em relação ao ângulo do tatami de cobertura).",
    "technicalDetails": "Grandes preenchimentos tatami concentram milhares de pontos que exercem contração isotrópica intensa sobre o tecido no bastidor. Se bordado diretamente sem grade, o tecido sofre distorção dimensional progressiva (o início do tatami encolhe e o final sobra como uma onda de tecido, empurrando os contornos para fora do registro). A grade do Underlay Tatami atua grampeando o tecido à entretela em centenas de interseções geométricas milimétricas, travando o tecido como uma malha soldada antes do início da cobertura densa.",
    "beginnerExplanation": "É como uma 'telinha de cerca' ou grade de xadrez bem levinha que a máquina costura por baixo de desenhos grandes antes de preencher tudo com o ponto tatami. Essa grade segura o tecido firme no lugar para ele não enrugar nem entortar enquanto a máquina faz milhares de pontos.",
    "howItWorks": [
      "1. A máquina borda uma primeira camada de linhas paralelas abertas inclinadas a 45°.",
      "2. Em seguida, borda uma segunda camada de linhas paralelas inclinadas a 135°, cruzando a primeira e formando uma grade ortogonal perfeita.",
      "3. Essas linhas grampeiam o tecido e a entretela em toda a extensão do objeto.",
      "4. A máquina inicia o ponto tatami de cobertura com ângulo diferente (ex: 0° ou 90°).",
      "5. Os pontos do tatami de acabamento repousam sobre a grade de sustentação.",
      "6. A área preenchida fica 100% plana, sem ondulações e com contornos perfeitamente encaixados."
    ],
    "applications": [
      "Grandes áreas de preenchimento tatami (fundos de brasões, bandeiras, mascotes e costas de jaquetas).",
      "Bordados extensos em camisetas de algodão, uniformes corporativos e jalecos.",
      "Prevenção absoluta de desalinhamento de contornos (out-of-register) em logomarcas complexas.",
      "Estabilização de tecidos finos e instáveis que tendem a franzir sob preenchimentos densos."
    ],
    "characteristics": [
      "A mais alta eficiência contra o enrugamento de peças de grande formato.",
      "Distribui a tração mecânica de forma homogênea por toda a superfície.",
      "Garante o encaixe milimétrico perfeito de contornos em ponto cheio ao redor de tatamis."
    ],
    "commonErrors": [
      "❌ Programar o Underlay Tatami com o mesmo ângulo do tatami de cobertura, fazendo as linhas de cima caírem dentro dos sulcos da base e não dando sustentação.",
      "❌ Deixar a grade excessivamente densa (menos de 1.5 mm de espaçamento), tornando o bordado duro como papelão.",
      "❌ Usar underlay simples em desenhos grandes de 15 cm, resultando em rugas gigantes e contornos desencaixados."
    ],
    "troubleshootingTips": [
      "Contorno preto saindo 2 mm fora do preenchimento colorido: ative o Underlay Tatami em grade dupla (Lattice Underlay) para travar a base.",
      "Tecido formando uma 'bolsa' ou onda no meio do preenchimento: aumente a área da grade e borde do centro para as bordas.",
      "Bordado muito pesado no peito: aumente o espaçamento da grade do underlay para 4.0 mm e reduza a densidade do tatami de cobertura para 0.42 mm."
    ],
    "dicaArtrelados": "Em desenhos grandes (como brasões e logomarcas de empresas), a Grade de Tatami é a garantia de que o contorno preto vai encaixar perfeitamente no final! Programe a grade a 45° e o acabamento a 90°: o encaixe fica tão perfeito que parece pintura!",
    "voceSabia": "Na engenharia civil moderna, as lajes de concreto utilizam exatamente o mesmo princípio da grade reticulada (malha pop de aço soldado) para distribuir o peso e evitar trincas estruturais.",
    "practicalExercise": "Crie um círculo de 60 mm com ponto tatami. Programe um com subponto simples e outro com Underlay Tatami em Grade Dupla (Lattice) a 45°/135°. Borde ambos em tecido de camiseta e veja como o segundo mantém a forma circular perfeita sem enrugar.",
    "quickSummary": "Subponto em grade reticulada cruzada que ancora grandes áreas de preenchimento tatami à entretela, eliminando rugas e garantindo encaixe milimétrico de contornos.",
    "relatedTerms": [
      "Tatami",
      "Underlay",
      "Deslocamento de Contorno (Registration Shift)",
      "Lattice Fill",
      "Compensação de Repuxo"
    ],
    "tags": [
      "tatami underlay",
      "grade reticulada",
      "lattice",
      "preenchimento",
      "estabilidade",
      "wilcom"
    ]
  },
  {
    "id": "underlay-de-cimentacao-esmagamento-de-felpas",
    "code": "U-007",
    "letter": "U",
    "term": "Underlay de Cimentação / Esmagamento de Felpas",
    "pronunciation": "ân-der-lei de ci-men-ta-ção / es-ma-ga-men-to de fel-pas",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Técnica da engenharia de digitalização conhecida internacionalmente como 'Cement Underlay', 'Knockdown Stitch' ou 'Base Plate', criada para achatar felpas e criar um assoalho liso sobre tecidos de pelo alto.",
    "summary": "Base ultradensa de subpontos em formato de assoalho uniforme costurada antes de todo o desenho para rebaixar e 'cimentar' felpas altas em toalhas, veludos e pelúcias.",
    "definition": "O Underlay de Cimentação (ou Subponto de Esmagamento de Felpas / Knockdown Underlay / Base Plate Underlay) é uma estrutura preliminar de subpontos de cobertura ampla, programada com uma textura aberta ou tatami leve na cor do tecido de fundo (ou de contraste intencional). Sua função física e mecânica primordial é compactar e deitar uniformemente as laçadas e fibras eretas de tecidos difíceis (como toalhas de banho aveludadas, tecidos atoalhados felpudos, veludos, camurças, suéteres de tricô e pelúcias), criando uma base lisa, rígida e perfeitamente nivelada — como um contrapiso de cimento — antes da execução dos motivos decorativos e textos finos.",
    "technicalDetails": "Mecanicamente, o Knockdown Stitch atua alterando o relevo topográfico do tecido no bastidor. Ao costurar uma grade de tatami leve com densidade calibrada entre 0.80 mm e 1.20 mm e ângulo cruzado, ele comprime a altura da felpa de até 4 mm para menos de 0.5 mm sem criar rigidez excessiva. Isso elimina completamente a necessidade de plástico hidrossolúvel em muitas aplicações de produção em massa, impede que letras pequenas e arabescos afundem e desapareçam nos vãos do tecido, e previne que laçadas de algodão furem a superfície das colunas de ponto cheio durante o ciclo de lavagem da peça.",
    "beginnerExplanation": "É como passar um 'rolo compressor' de costura bem levinho antes de começar o bordado! Em toalhas fofas ou tecidos com pelinhos altos (como veludo e pelúcia), a máquina costura primeiro uma caminha plana na cor da toalha para amassar e deitar todos os pelinhos. Assim, quando as letras e desenhos forem bordados por cima, nada afunda e tudo fica nítido e perfeito.",
    "howItWorks": [
      "1. O programador desenha um polígono ou forma geométrica no formato geral do bordado com margem externa de 1 a 2 mm.",
      "2. Aplica o subponto de cimentação (Knockdown / Tatami aberto de 0.9 mm a 1.2 mm) como o primeiro objeto da matriz.",
      "3. A máquina inicia bordando essa grade na cor idêntica à do tecido (ex: toalha branca usa linha branca).",
      "4. As laçadas de felpa e os pelos são esmagados e travados rente à base do tecido.",
      "5. Em seguida, a máquina borda normalmente as letras, nomes e brasões por cima da área cimentada.",
      "6. O resultado é uma nitidez cirúrgica com bordas retas, sem nenhum pelinho espetando para fora.",
      "7. A peça é lavada e a área cimentada permanece rebaixada, preservando a legibilidade para sempre."
    ],
    "applications": [
      "Bordados em toalhas de banho e rosto felpudas com monogramas detalhados e nomes finos.",
      "Personalização de cobertores de bebê, mantas de microfibra, soft e plush.",
      "Bordados corporativos em casacos de lã batida, suéteres de tricô e moletons felpados.",
      "Confecção de apliques e escudos em tecidos atoalhados sem necessidade de entretela hidrossolúvel superior."
    ],
    "characteristics": [
      "Garante legibilidade absoluta em tecidos com pelo alto ou textura profunda.",
      "Economiza insumos e tempo ao reduzir o uso e a limpeza de plásticos hidrossolúveis.",
      "Pode ser usado como elemento estético decorativo quando bordado com linha contrastante."
    ],
    "commonErrors": [
      "❌ Programar a cimentação com densidade de tatami fechado (ex: 0.40 mm), transformando o fundo em uma placa dura e desconfortável como um papelão.",
      "❌ Usar cor de linha diferente da toalha sem intenção estética, deixando uma mancha quadrada visível sob o bordado.",
      "❌ Deixar a margem de cimentação muito colada às letras (sem margem de segurança de 1.5 mm), fazendo as felpas das bordas invadirem os contornos."
    ],
    "troubleshootingTips": [
      "Felpas espetando entre as letras mesmo com filme hidrossolúvel: ative o Knockdown Stitch / Cimentação na base da matriz.",
      "Bordado ficando muito duro no tecido atoalhado: aumente o espaçamento das linhas de cimentação para 1.1 mm ou 1.3 mm.",
      "Base de cimentação aparecendo muito forte: combine exatamente a cor da linha da base com a cor do tingimento da toalha."
    ],
    "dicaArtrelados": "Para toalhas de banho felpudas com nomes compridos, use a ferramenta 'Knockdown Stitch' com a mesma cor da toalha! O resultado parece mágica: os pelinhos somem, as letrinhas ficam impecáveis e o toque continua macio e gostoso!",
    "voceSabia": "O termo 'Knockdown' foi popularizado no setor de hotelaria de luxo nos Estados Unidos nos anos 1990 para permitir que toalhas pesadas de 600 g/m² recebessem os logotipos finos dos hotéis sem perder a definição nas lavagens industriais.",
    "practicalExercise": "Pegue um pedaço de toalha felpuda. Programe um círculo com cimentação aberta (1.0 mm) na cor da toalha e borde um monograma por cima. Compare com outro monograma bordado direto na felpa sem cimentação e veja a diferença brutal de qualidade.",
    "quickSummary": "Estrutura de subpontos aberta costurada na cor do tecido para achatar felpas e pelos altos, criando uma base lisa para letras e detalhes finos.",
    "relatedTerms": [
      "Knockdown Stitch",
      "Tatami de Base",
      "Tecido Atoalhado",
      "Hidrossolúvel",
      "Underlay",
      "Pelúcia"
    ],
    "tags": [
      "cimentacao",
      "knockdown",
      "subponto",
      "felpas",
      "atoalhado",
      "toalhas",
      "wilcom"
    ]
  },
  {
    "id": "underlay-inset-distance-margem-de-recuo-do-subponto",
    "code": "U-008",
    "letter": "U",
    "term": "Underlay Inset Distance (Margem de Recuo do Subponto)",
    "pronunciation": "ân-der-lei in-sét dís-tans (mar-gem de re-cu-o do sub-pon-to)",
    "level": "Intermediário 🟡",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Parâmetro geométrico essencial de softwares de digitalização (Wilcom, Tajima DG, Bernina, Brother PE-Design) que define a distância entre o perímetro do subponto e o contorno final.",
    "summary": "Distância milimétrica de recuo entre as bordas do subponto e o contorno externo do ponto cheio ou tatami, garantindo que o subponto fique 100% oculto.",
    "definition": "O Underlay Inset Distance (Margem de Recuo do Subponto / Distância de Inset / Recuo de Margem) é o valor numérico (medido em milímetros ou frações de milímetro) configurado no software de matrizes que determina o quanto o subponto estrutural (Edge Walk, Zigzag, Tatami Grid) deve se afastar das extremidades e bordas do objeto de cobertura. Esse recuo compensa o comportamento elástico e a deformação física do tecido sob tração.",
    "technicalDetails": "Durante o bordado, a tração do ponto cheio comprime as bordas do tecido para dentro (efeito de repuxamento). Se o subponto for gerado exatamente sobre a linha limite do contorno (Inset = 0,0 mm), a retração do tecido e o desvio da agulha farão com que as linhas do subponto vazem e fiquem visíveis para fora da cobertura, gerando um defeito inaceitável de acabamento. O valor padrão de Inset varia entre 0,30 mm e 0,60 mm: em tecidos planos rígidos (como brim e tricoline), usa-se 0,30 mm a 0,40 mm; em tecidos de malha e elásticos, o recuo deve ser ampliado para 0,50 mm a 0,70 mm para acomodar a maior deformação mecânica.",
    "beginnerExplanation": "É o espacinho de segurança que a gente deixa entre a costurinha de baixo (subponto) e a borda final do bordado. Esse recuo serve para garantir que a costura de sustentação fique bem escondidinha por baixo dos pontos bonitos, sem ficar nenhuma linhadinha sobrando ou aparecendo do lado de fora.",
    "howItWorks": [
      "1. O programador define o objeto no software (ex: uma letra em ponto cheio com 4 mm de largura).",
      "2. No painel de propriedades do Underlay, configura o parâmetro 'Inset' (ex: 0,40 mm).",
      "3. O software calcula o percurso do subponto recuando 0,40 mm para dentro em todas as margens.",
      "4. A máquina costura o subponto dentro dessa área de segurança mais estreita.",
      "5. Em seguida, costura o ponto cheio na largura total (4 mm) mais a compensação de encolhimento.",
      "6. A cobertura abraça totalmente o subponto, que fica perfeitamente invisível aos olhos.",
      "7. As bordas do bordado final apresentam acabamento limpo e profissional sem sobras de linha de base."
    ],
    "applications": [
      "Configuração obrigatória em todas as propriedades de underlay (Edge Walk, Zigzag e Tatami).",
      "Bordados de letras e textos em tecidos de malha, pique e moletom.",
      "Contornos de alta definição em logomarcas empresariais sobre fundos contrastantes.",
      "Prevenção de 'fios fantasmas' escapando nas curvas fechadas de monogramas."
    ],
    "characteristics": [
      "Garante a invisibilidade absoluta de toda a estrutura oculta de sustentação.",
      "Parâmetro ajustável dinamicamente conforme a elasticidade de cada tecido.",
      "Evita o retrabalho de aparar linhas de subponto vazadas após o bordado."
    ],
    "commonErrors": [
      "❌ Deixar o Inset muito pequeno (ex: 0.1 mm) em malha elástica, fazendo a linha de subponto vazar em quase todas as letras.",
      "❌ Colocar um Inset exagerado (ex: 1.5 mm) em colunas estreitas de 2.5 mm, deixando as bordas sem sustentação e fazendo o ponto afundar.",
      "❌ Esquecer de ajustar o Inset nas pontas e terminações afiadas das letras (serifas)."
    ],
    "troubleshootingTips": [
      "Linha de subponto aparecendo do lado de fora do ponto cheio: aumente o Inset Distance de 0.3 mm para 0.5 mm no software.",
      "Bordas do ponto cheio afundando no tecido: o Inset está muito grande; diminua o recuo para 0.35 mm para apoiar as margens.",
      "Subponto escapando apenas no topo das letras: ative a opção 'Recuo de Extremidade' (End Inset) nas configurações do programa."
    ],
    "dicaArtrelados": "A regra de ouro do Inset Distance no ateliê: para tecidos firmes (brim, sarja, percal), use recuo de 0.35 mm; para tecidos que esticam (malha, piquet, moletom), use recuo de 0.50 mm! Suas matrizes nunca mais vão deixar subponto escapar!",
    "voceSabia": "Nos primeiros softwares de bordado dos anos 1980, os digitadores tinham que desenhar o subponto manualmente linha por linha, calculando o recuo de margem com réguas milimétricas na mesa digitalizadora!",
    "practicalExercise": "No seu software de edição, crie uma coluna de ponto cheio de 3 mm com Edge Walk. Configure o Inset com 0.1 mm e depois com 0.5 mm. Observe no modo de visualização de pontos como as linhas de base se afastam das bordas externas com segurança.",
    "quickSummary": "Distância de recuo milimétrico entre as bordas do subponto e o contorno final, evitando que a estrutura oculta escape e fique visível para fora do bordado.",
    "relatedTerms": [
      "Underlay",
      "Edge Walk",
      "Compensação de Encolhimento (Pull Comp)",
      "Ponto Cheio",
      "Propriedades de Objeto"
    ],
    "tags": [
      "inset distance",
      "recuo de margem",
      "subponto",
      "underlay",
      "programacao",
      "wilcom",
      "parametros"
    ]
  },
  {
    "id": "underlay-density-densidade-e-espacamento-de-subponto",
    "code": "U-009",
    "letter": "U",
    "term": "Underlay Density (Densidade e Espaçamento de Subponto)",
    "pronunciation": "ân-der-lei dén-si-ti (den-si-da-de e es-pa-ça-men-to de sub-pon-to)",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Cálculo físico de espaçamento linear entre linhas de suporte em softwares de bordado computadorizado para equilibrar ancoragem mecânica e maciez têxtil.",
    "summary": "Calibração do espaçamento milimétrico entre as passadas de subpontos (Zigzag ou Tatami Grid), equilibrando firmeza estrutural com maciez da peça.",
    "definition": "A Underlay Density (Densidade e Espaçamento de Subponto / Underlay Spacing) é a medida da distância entre as passadas consecutivas de pontos que compõem a grade ou zigue-zague de fundação. Enquanto a camada visível de cobertura trabalha com densidades fechadas (entre 0,38 mm e 0,45 mm para cobrir totalmente o tecido), a densidade do underlay opera com espaçamentos abertos (tipicamente entre 2,0 mm e 5,0 mm), garantindo que a base cumpra seu papel de ancoragem e travamento dimensional sem acrescentar rigidez ou peso desnecessário à peça bordada.",
    "technicalDetails": "A relação entre a densidade do subponto e a densidade de acabamento é regida pelo princípio do 'colchão de sustentação': um subponto com espaçamento muito fechado (ex: menos de 1,5 mm em Zigzag ou Tatami Grid) acumula excesso de massa de linha no verso do tecido, endurecendo a região (efeito 'tábua de passar'), aumentando o atrito da agulha e elevando o risco de quebra de fio. Por outro lado, um espaçamento excessivamente aberto (acima de 6,0 mm) deixa grandes vazios estruturais, permitindo que os pontos de acabamento colapsem nos vãos. A calibração ideal é de 2,5 mm a 3,5 mm para colunas de Zigzag e de 3,0 mm a 4,5 mm para grades de Tatami.",
    "beginnerExplanation": "É a distância que a máquina deixa entre uma linhadinha e outra na costura de sustentação que fica escondida por baixo. Essa costurinha precisa ser bem abertinha e leve para o bordado ficar firme e ao mesmo tempo macio, sem ficar parecendo uma placa dura e desconfortável na roupa.",
    "howItWorks": [
      "1. O programador analisa o tipo de tecido e o peso da peça a ser bordada.",
      "2. No software de matrizes, ajusta o espaçamento do subponto (ex: 3.0 mm para camiseta de algodão ou 2.2 mm para jaqueta pesada).",
      "3. O software gera a malha de fundação com a distância exata entre as passadas.",
      "4. A máquina costura a base com rapidez, consumindo pouquíssima linha.",
      "5. A estrutura sustenta os pontos cheios ou tatami de acabamento de forma equilibrada.",
      "6. A peça final mantém a flexibilidade natural, com caimento perfeito no corpo e excelente toque ao tato."
    ],
    "applications": [
      "Calibração de matrizes para peças infantis e enxovais de bebê que exigem maciez extrema.",
      "Otimização de bordados corporativos em camisas sociais leves e polos de piquet.",
      "Redução de peso e contagem de pontos em matrizes gigantes para costas de jaquetas.",
      "Ajuste fino de flexibilidade em artigos de alta-costura e tecidos nobres fluidos."
    ],
    "characteristics": [
      "Define o equilíbrio ideal entre estabilidade mecânica e conforto ao vestir.",
      "Impacta diretamente o tempo de produção e a contagem total de pontos da matriz.",
      "Evita o acúmulo excessivo de nós e linhas no avesso do bordado."
    ],
    "commonErrors": [
      "❌ Usar densidade de subponto muito fechada (1.0 mm) em roupas de bebê, deixando o bordado duro como madeira e pinicando a pele.",
      "❌ Deixar o subponto tão aberto (mais de 6.0 mm) que ele não consegue apoiar os pontos de acabamento em tecidos atoalhados.",
      "❌ Copiar a mesma densidade de subponto de um casaco de sarja para uma blusa de seda fina."
    ],
    "troubleshootingTips": [
      "Bordado ficando muito rígido e desconfortável no peito: aumente o espaçamento do subponto (Underlay Spacing) de 2.5 mm para 3.8 mm.",
      "Pontos cheios afundando no centro das letras: reduza o espaçamento do Zigzag Underlay de 4.5 mm para 2.8 mm.",
      "Máquina quebrando agulha por acúmulo de pontos: aumente o espaçamento da grade de base para desobstruir as passadas de penetração."
    ],
    "dicaArtrelados": "Para roupas leves de bebê e camisetas de algodão macio, a regrinha mágica é: Underlay Zigzag com espaçamento de 3.5 mm! O bordado fica firme, as letrinhas não afundam e o tecido continua super gostoso e molinho no corpo!",
    "voceSabia": "Na confecção de uniformes espaciais e trajes para pilotos da Força Aérea, a densidade do subponto é rigorosamente inspecionada para não alterar a flexibilidade das articulações dos tecidos de proteção térmica.",
    "practicalExercise": "Crie dois retângulos iguais de 5x3 cm em ponto tatami. No primeiro, configure a grade do underlay com espaçamento de 2.0 mm; no segundo, com 4.5 mm. Borde ambos em tecido de algodão e dobre a peça com as mãos para sentir a diferença de flexibilidade.",
    "quickSummary": "Calibração do espaçamento milimétrico entre as linhas de sustentação do subponto, dosando a firmeza estrutural sem comprometer a maciez e o caimento da peça.",
    "relatedTerms": [
      "Underlay",
      "Densidade de Ponto (Density)",
      "Zigzag Underlay",
      "Tatami Grid",
      "Maciez do Bordado",
      "Puckering"
    ],
    "tags": [
      "underlay density",
      "densidade de subponto",
      "espacamento",
      "underlay",
      "programacao",
      "wilcom",
      "parametros"
    ]
  },
  {
    "id": "underlay-stitch-length-comprimento-do-ponto-de-base",
    "code": "U-010",
    "letter": "U",
    "term": "Underlay Stitch Length (Comprimento do Ponto de Base)",
    "pronunciation": "ân-der-lei stitx lêng-th (com-pri-men-to do pon-to de ba-se)",
    "level": "Intermediário 🟡",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Parâmetro fundamental de costura linear em digitalização computadorizada que define a distância entre perfurações consecutivas da agulha nos subpontos corridos.",
    "summary": "Distância em milímetros entre cada penetração da agulha nas linhas de subponto, ajustada para garantir curvas suaves sem perfurar o tecido em excesso.",
    "definition": "O Underlay Stitch Length (Comprimento do Ponto de Base / Comprimento de Ponto do Subponto) é a distância linear (expressa em milímetros) entre duas penetrações sucessivas da agulha durante a execução de subpontos de ponto corrido (Center Walk, Edge Walk e grades reticuladas de Tatami). Esse parâmetro governa a precisão com que o subponto segue curvas vetoriais e a integridade mecânica das fibras do tecido sob a costura.",
    "technicalDetails": "O valor padrão do Underlay Stitch Length situa-se entre 2,0 mm e 3,5 mm. Se o comprimento for configurado muito curto (ex: menos de 1,5 mm), a agulha perfura o tecido repetidas vezes em um espaço reduzido, gerando o 'efeito picote' (perfuração de selo postal), enfraquecendo as fibras têxteis e podendo rasgar tecidos delicados ou malhas finas. Por outro lado, se o comprimento for muito longo (acima de 4,5 mm), o subponto atalha as curvas ('corda de arco'), cortando caminho por fora da geometria e deixando cantos arredondados desprovidos de sustentação perimetral.",
    "beginnerExplanation": "É o tamanho dos 'passinhos' que a agulha dá quando está fazendo a costurinha de baixo. Se o passo for muito curtinho, a agulha fura o tecido muitas vezes no mesmo lugar e pode rasgar; se o passo for muito grandão, a linha não consegue fazer curvas bonitas e corta caminho nos cantinhos.",
    "howItWorks": [
      "1. O programador abre as propriedades do underlay no software de digitalização.",
      "2. Define o 'Stitch Length' do subponto (geralmente calibrado entre 2.2 mm e 2.8 mm).",
      "3. Em trechos retos, a agulha dá passos regulares de 2.5 mm com velocidade máxima.",
      "4. Em curvas fechadas, o algoritmo encurta automaticamente os passos para manter a fidelidade ao contorno vetorial.",
      "5. A estrutura de base acompanha as linhas do desenho com precisão matemática.",
      "6. O tecido permanece íntegro, resistente e pronto para receber os pontos de acabamento."
    ],
    "applications": [
      "Ajuste fino de subpontos Center Walk e Edge Walk em letras cursivas e arabescos com muitas curvas.",
      "Bordados em tecidos propensos a furos e rasgos (malhas finas de algodão, seda, organza e lycra).",
      "Otimização de velocidade em grandes preenchimentos de tatami industrial.",
      "Preservação da integridade estrutural de materiais não-têxteis como vinil e couro sintético."
    ],
    "characteristics": [
      "Evita perfurações desnecessárias que enfraquecem a trama do tecido.",
      "Garante que o subponto acompanhe fielmente curvas e cantos complexos.",
      "Equilibra a fluidez de costura em máquinas de alta rotação (acima de 800 PPM)."
    ],
    "commonErrors": [
      "❌ Configurar comprimento de ponto menor que 1.2 mm em malha de camiseta, cortando as fibras e abrindo pequenos furos ao redor das letras.",
      "❌ Deixar o comprimento com 5.0 mm em arabescos curvos, fazendo o subponto vazar para fora da curva.",
      "❌ Usar pontos muito longos em couro ou vinil, onde o subponto fica frouxo e perde a capacidade de travar o material."
    ],
    "troubleshootingTips": [
      "Tecido rasgando ou furando na linha do subponto: aumente o Underlay Stitch Length para 2.5 mm ou 3.0 mm e use agulha ponta bola.",
      "Subponto escapando para fora apenas nas curvas fechadas: reduza o Stitch Length para 1.8 mm ou ative a tolerância de curva do software.",
      "Subponto frouxo que não amassa o tecido: reduza o comprimento de ponto para 2.2 mm para aumentar a tração de ancoragem."
    ],
    "dicaArtrelados": "Para letrinhas curvas e nomes em caligrafia, o comprimento de 2.2 mm no Edge Walk é o segredo da perfeição! Ele faz todas as curvinhas fechadas com suavidade de bailarina e nunca escapa para fora do ponto cheio!",
    "voceSabia": "Os primeiros programas de matrizes para máquinas Tajima e Barudan nos anos 1980 tinham comprimento de ponto fixo de 2.5 mm para todos os subpontos, o que obrigava os programadores a dividirem manualmente as curvas em múltiplos segmentos!",
    "practicalExercise": "Desenhe uma letra 'S' cursiva no software. Aplique Edge Walk com comprimento de ponto de 5.0 mm e veja como a linha 'corta caminho' nas curvas. Em seguida mude para 2.2 mm e veja como ela abraça as curvas perfeitamente.",
    "quickSummary": "Distância milimétrica entre as penetrações da agulha nas linhas de subponto, balanceando a fidelidade em curvas com a integridade mecânica das fibras têxteis.",
    "relatedTerms": [
      "Underlay",
      "Edge Walk",
      "Center Walk",
      "Comprimento do Ponto (Stitch Length)",
      "Ponta Bola (SES)",
      "Perfuração"
    ],
    "tags": [
      "stitch length",
      "comprimento de ponto",
      "subponto",
      "underlay",
      "programacao",
      "wilcom",
      "parametros"
    ]
  },
  {
    "id": "underlay-trapping-subponto-de-ancoragem-e-travamento",
    "code": "U-011",
    "letter": "U",
    "term": "Underlay Trapping (Subponto de Ancoragem e Travamento)",
    "pronunciation": "ân-der-lei tré-ping (sub-pon-to de an-co-ra-gem e tra-va-men-to)",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Técnica de programação avançada de bordados (do inglês 'trap', prender/travar) criada para prender quinas de apliques, mantas e extremidades de colunas antes da tração final.",
    "summary": "Estratégia de subpontos combinados com pontos de amarração concentrados nas extremidades e cantos para 'travar' tecidos instáveis e evitar que as pontas do bordado encolham.",
    "definition": "O Underlay Trapping (Subponto de Travamento / Ancoragem Mecânica de Extremidades / Trap Underlay) é uma técnica avançada de engenharia de matrizes na qual o subponto é programado com micro-laçadas, amarrações densas ou percursos em 'T' e em 'X' concentrados nas extremidades, pontas afiadas, vértices e junções de colunas. Seu propósito mecânico é travar fisicamente as fibras do tecido e a entretela nos pontos de maior estresse mecânico, impedindo que a forte tração longitudinal dos pontos de cobertura recolha as pontas das letras (efeito de encurtamento de extremidade ou 'end curl').",
    "technicalDetails": "Quando uma coluna de ponto cheio atinge sua terminação (ex: a ponta de uma letra 'A' ou o bico de uma estrela), a força de tração tende a puxar a ponta para dentro em até 1,0 mm (perda de comprimento longitudinal). O Trapping Underlay soluciona isso aplicando 3 a 5 micro-pontos de travamento perpendicular ou um duplo ponto corrido em cruz nas pontas antes de iniciar a cobertura. Além disso, em peças de aplique ou bordados sobre mantas e espumas de EVA (3D Puff), o Trapping fixa as margens do material, impedindo que ele escorregue ou deforme durante a costura rápida.",
    "beginnerExplanation": "É como colocar um 'grampo reforçado' ou preguinho bem nas pontinhas das letras e nos bicos das estrelas antes de bordar. Isso serve para a ponta do bordado não encolher nem ficar arredondada por causa do puxão da linha, mantendo os bicos bem pontudos, afiados e elegantes.",
    "howItWorks": [
      "1. A máquina inicia a coluna costurando o subponto até a extremidade ou ponta afiada do desenho.",
      "2. Na ponta, executa um micro-travamento (Trapping) com 3 pontinhos curtos cruzados perpendiculares à direção da tração.",
      "3. O tecido fica cravado na entretela naquela ponta como uma âncora fincada no chão.",
      "4. A máquina costura os pontos cheios de acabamento sobre a coluna.",
      "5. A tração da linha não consegue encolher a ponta, pois a âncora de trapping segura a base com firmeza.",
      "6. A letra ou estrela finaliza com cantos afiados, pontas longas e formato geométrico perfeito."
    ],
    "applications": [
      "Terminações pontiagudas de letras, serifas e monogramas finos.",
      "Estrelas, pontas de flechas, coroas e bicos de brasões militares e corporativos.",
      "Fixação de bordas e cantos em tecidos de aplique antes do corte manual ou do ponto caseado.",
      "Travamento de extremidades em bordados 3D com espuma de EVA para corte perfeito do relevo."
    ],
    "characteristics": [
      "Mantém o comprimento longitudinal e a geometria afiada das extremidades.",
      "Impede que pontas finas de letras fiquem 'murchas' ou arredondadas.",
      "Garante estabilidade extrema em tecidos escorregadios como cetim e seda."
    ],
    "commonErrors": [
      "❌ Fazer o trapping com excesso de pontos no mesmo buraco, abrindo um furo visível na ponta da letra.",
      "❌ Não usar trapping em estrelas bordadas em malha, fazendo as pontas da estrela encolherem e virarem bolinhas redondas.",
      "❌ Deixar o travamento fora da área do ponto cheio, deixando pontos de amarração aparentes."
    ],
    "troubleshootingTips": [
      "Pontas de estrelas e letras ficando encurtadas e arredondadas: adicione subponto com travamento (Trapping) e aumente a compensação de ponta.",
      "Furo aparecendo na quina da letra: reduza a quantidade de pontos do trapping de 5 para 3 e utilize agulha mais fina.",
      "Aplique levantando a ponta no meio do bordado: programe um trapping de 3 micro-pontos em cada quina da linha de fixação."
    ],
    "dicaArtrelados": "Para fazer estrelas e brasões com pontas tão afiadas que parecem feitas a laser, coloque um travamento de 3 pontinhos cruzados bem no biquinho de cada ponta antes de cobrir com o ponto cheio! A ponta fica perfeita e nunca mais encolhe!",
    "voceSabia": "Na heráldica e na alfaiataria militar do século XVIII, os bordadores de fardas reais usavam nós de ancoragem chamados 'pont d'arrêt' nas pontas das estrelas dos generais para evitar que as condecorações desmanchassem nas batalhas.",
    "practicalExercise": "Digitalize uma estrela de 5 pontas. Programe duas pontas com Trapping Underlay e as outras três com subponto comum. Borde em tecido elástico e compare com uma lupa a nitidez e o comprimento das pontas com travamento.",
    "quickSummary": "Estratégia de subpontos com micro-amarrações nas extremidades e cantos para travar a base e evitar o encurtamento e deformação das pontas do bordado.",
    "relatedTerms": [
      "Underlay",
      "Tie-In",
      "Tie-Off",
      "Compensação de Extremidade",
      "Serifas",
      "Ponto Cheio"
    ],
    "tags": [
      "trapping",
      "ancoragem",
      "subponto",
      "travamento",
      "pontas",
      "wilcom",
      "programacao"
    ]
  },
  {
    "id": "underlay-multi-camadas-combinacao-de-subpontos",
    "code": "U-012",
    "letter": "U",
    "term": "Underlay Multi-Camadas (Combinação de Subpontos)",
    "pronunciation": "ân-der-lei mul-ti ca-ma-das (com-bi-na-ção de sub-pon-tos)",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Metodologia avançada de engenharia de software de bordado que sobrepõe dois ou mais tipos distintos de subponto (ex: Edge Walk + Zigzag) para obter estabilidade e relevo superiores.",
    "summary": "Sobreposição inteligente de dois ou mais tipos de subpontos sob o mesmo objeto, unindo a definição de bordas à sustentação e volume central.",
    "definition": "O Underlay Multi-Camadas (Dual Underlay / Combined Underlay / Subponto Composto) é a técnica de programação em que dois ou mais métodos estruturais de subponto são gerados e executados em sequência sob um mesmo objeto de bordado antes da aplicação da camada de acabamento. As combinações mais consagradas na indústria têxtil incluem: 1) Edge Walk + Zigzag (o Edge Walk define bordas limpas e o Zigzag cria o colchão de volume central); 2) Center Walk + Zigzag (para colunas de transição média); e 3) Double Tatami Grid (duas grades cruzadas a 45° e 135° para grandes preenchimentos).",
    "technicalDetails": "A física da combinação de subpontos atua em múltiplos vetores de força: enquanto o Edge Walk com recuo de 0,4 mm bloqueia a penetração da agulha nos vales da trama e impede o efeito dente de serra nas margens, o Zigzag com espaçamento de 3,0 mm absorve a compressão central e ergue a linha de poliéster em um relevo semidirecional de alto brilho especular. O uso de subpontos combinados permite reduzir a densidade da camada de topo de 0,38 mm para 0,44 mm (economizando até 15% de pontos densos superficiais), resultando em um bordado mais encorpado, mais macio e estruturalmente indestrutível a dezenas de ciclos de lavagem.",
    "beginnerExplanation": "É como usar duas ferramentas juntas para deixar a base perfeita: a máquina faz primeiro duas linhadinhas retas nas beiradas (para as bordas ficarem lisinhas) e depois faz um zigue-zague fofinho no meio (para o bordado ficar com relevo gordinho e macio). É o segredo dos bordados profissionais de alto padrão!",
    "howItWorks": [
      "1. No software de matrizes, o programador marca duas caixas de seleção no painel de underlay: 'Edge Walk' e 'Zigzag'.",
      "2. A máquina inicia costurando primeiro os trilhos de margem do Edge Walk.",
      "3. Em seguida, na mesma passada contínua, costura o Zigzag aberto pelo meio da coluna.",
      "4. Cria-se uma estrutura mista completa: bordas travadas e centro acolchoado.",
      "5. A máquina aplica os pontos cheios de acabamento sobre a fundação dupla.",
      "6. O bordado salta em relevo elegante com bordas cirurgicamente retas e brilho tridimensional."
    ],
    "applications": [
      "Bordados corporativos de alto luxo em camisas polo piquet e uniformes executivos.",
      "Letras grandes e monogramas de casamento em toalhas de banho e enxovais finos.",
      "Brasões heráldicos e escudos esportivos com exigência de máxima durabilidade.",
      "Bordados em jaquetas de sarja pesada, bonés estruturados e artigos de couro sintético."
    ],
    "characteristics": [
      "Padrão ouro de acabamento, estabilidade e beleza estética no bordado industrial.",
      "Permite diminuir a densidade da cobertura superior sem risco de transparência.",
      "Excelente resistência à deformação em tecidos instáveis e pesados."
    ],
    "commonErrors": [
      "❌ Combinar subpontos pesados (ex: Double Zigzag + Tatami Grid) em tecidos muito finos de seda, transformando o bordado em uma pedra.",
      "❌ Usar combinações multi-camadas em letras muito pequenas (menores que 10 mm), acumulando linhas e quebrando agulha.",
      "❌ Esquecer o recuo de margem adequado em ambos os subpontos, fazendo as linhas cruzadas vazarem nas bordas."
    ],
    "troubleshootingTips": [
      "Letras em camisa polo ficando com bordas tortas e centro murcho: ative a combinação 'Edge Walk + Zigzag Underlay'.",
      "Bordado muito pesado e duro na roupa: mantenha a combinação multi-camadas, mas abra o espaçamento do Zigzag para 3.5 mm e reduza a densidade do ponto cheio para 0.44 mm.",
      "Subponto vazando nas pontas: aumente o Inset Distance do Zigzag para 0.5 mm e do Edge Walk para 0.4 mm."
    ],
    "dicaArtrelados": "A combinação mágica dos campeões: 'Edge Walk + Zigzag'! Use essa dupla em nomes grandes e monogramas de toalhas e camisas polo. O bordado fica tão fofo, brilhante e perfeito que parece bordado importado de alta-costura!",
    "voceSabia": "As principais grifes de moda da Itália (como Gucci e Armani) especificam por contrato em suas fichas técnicas de produção o uso obrigatório de subpontos combinados Edge Walk + Zigzag em todos os seus emblemas bordados.",
    "practicalExercise": "Crie uma palavra com letras de 25 mm. Na primeira letra use apenas Center Walk; na segunda use apenas Edge Walk; na terceira use Edge Walk + Zigzag combinado. Borde em piquet e veja a evolução impressionante de qualidade entre as letras.",
    "quickSummary": "Sobreposição estratégica de dois ou mais tipos de subpontos para unir a perfeição de bordas à sustentação e volume central em peças de alto padrão.",
    "relatedTerms": [
      "Underlay",
      "Edge Walk",
      "Zigzag Underlay",
      "Ponto Cheio (Satin)",
      "Piquet",
      "Alta Definição"
    ],
    "tags": [
      "multicamadas",
      "subponto combinado",
      "dual underlay",
      "edge walk",
      "zigzag",
      "wilcom",
      "luxo"
    ]
  },
  {
    "id": "underlay-para-ponto-cheio-satin-underlay-strategies",
    "code": "U-013",
    "letter": "U",
    "term": "Underlay para Ponto Cheio (Satin Underlay Strategies)",
    "pronunciation": "ân-der-lei pa-ra pon-to chei-o (sé-tin ân-der-lei es-tra-té-djis)",
    "level": "Intermediário 🟡",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Diretrizes clássicas da digitalização têxtil desenvolvidas pela Wilcom e Tajima para estruturar colunas de ponto cheio conforme sua largura e tração mecânica.",
    "summary": "Regras e estratégias de seleção do tipo ideal de subponto (Center Walk, Edge Walk ou Zigzag) conforme a largura milimétrica da coluna de ponto cheio.",
    "definition": "O Underlay para Ponto Cheio (Satin Underlay Strategies / Estruturação de Coluna de Cetim) é o protocolo técnico de engenharia de matrizes que estabelece a escolha obrigatória do tipo e parâmetros de subponto com base direta na largura (espessura) em milímetros da coluna de ponto cheio. Como a força de repuxo transversal varia exponencialmente com a largura do ponto, cada faixa milimétrica exige uma sustentação física específica para evitar deformações, afundamento e enrugamento do tecido.",
    "technicalDetails": "A matriz técnica internacional divide o ponto cheio em 4 faixas milimétricas fundamentais: 1) Colunas ultra-finas (0,8 mm a 1,5 mm): uso exclusivo de Center Walk com pontos curtos (1,5 mm a 1,8 mm); 2) Colunas estreitas (1,5 mm a 2,5 mm): Center Walk ou Edge Walk estreito com recuo de 0,3 mm; 3) Colunas médias (2,5 mm a 5,0 mm): Edge Walk combinado com Zigzag aberto (espaçamento 2,8 mm a 3,5 mm); 4) Colunas largas (5,0 mm a 9,0 mm): Edge Walk com Double Zigzag (malha em diamante) ou aplicação de divisões automáticas de ponto cheio (Auto-Split).",
    "beginnerExplanation": "É a tabelinha prática de qual costura de sustentação usar para cada grossura de letra! Para letrinhas bem fininhas, a gente usa só uma costurinha no meio; para letras médias, usa a costurinha nas bordas com zigue-zague; e para letras bem grandonas, usa zigue-zague duplo para não deixar o bordado frouxo nem afundado.",
    "howItWorks": [
      "1. O programador mede a largura da coluna no software usando a ferramenta de régua milimétrica.",
      "2. Se a largura for até 1.5 mm: seleciona apenas 'Center Walk'.",
      "3. Se a largura for entre 1.5 mm e 3.0 mm: seleciona 'Edge Walk' com recuo de 0.35 mm.",
      "4. Se a largura for entre 3.0 mm e 6.0 mm: seleciona 'Edge Walk + Zigzag' para dar volume e sustentação.",
      "5. Se a largura for superior a 6.0 mm: seleciona 'Double Zigzag' ou divide a coluna com Auto-Split.",
      "6. A máquina costura a base ideal para aquela largura exata, garantindo estabilidade e brilho uniforme."
    ],
    "applications": [
      "Digitalização precisa de alfabetos, fontes tipográficas e monogramas.",
      "Contornos de logomarcas empresariais com espessuras de linha variáveis.",
      "Bordados heráldicos, florais, folhas e arabescos com variação de largura de coluna.",
      "Otimização de tempo e contagem de pontos em matrizes comerciais."
    ],
    "characteristics": [
      "Evita quebras de agulha por acúmulo excessivo de pontos em traços finos.",
      "Garante bordas nítidas e centro encorpado em traços grossos.",
      "Padroniza a qualidade do bordado em qualquer software de criação."
    ],
    "commonErrors": [
      "❌ Colocar Zigzag ou Edge Walk em letrinhas de 1 mm de largura, fazendo os pontos de base vazarem para fora da letra.",
      "❌ Usar apenas Center Walk em uma letra de 6 mm de largura, fazendo os pontos de acabamento afundarem e ficarem soltos no centro.",
      "❌ Não aplicar subponto em colunas de 3 mm em tecidos de malha, fazendo o tecido enrugar e virar uma concha."
    ],
    "troubleshootingTips": [
      "Bordas de letras largas parecendo murchas ou com ondas: troque o Center Walk por Edge Walk + Zigzag.",
      "Letras minúsculas ficando grossas e com nós embaixo: mude para Center Walk simples e reduza o comprimento de ponto para 1.5 mm.",
      "Pontos cheios com mais de 7 mm ficando frouxos: ative a função Auto-Split (Divisão Automática) no software."
    ],
    "dicaArtrelados": "Guarde a regrinha prática da Artrelados: Letra fininha = costura no meio (Center Walk); Letra média = trilho nas bordas (Edge Walk); Letra grandona = trilho + zigue-zague fofo (Edge + Zigzag)! Com essa regra suas letras sempre serão nota 10!",
    "voceSabia": "A regra de ouro de proporção de largura para ponto cheio foi estabelecida nos anos 1970 na Suíça pelos engenheiros da Bernina, baseada nos limites de tensão mecânica dos fios de raiom e poliéster.",
    "practicalExercise": "Digitalize 3 letras com larguras de coluna diferentes: uma com 1.2 mm, outra com 3.5 mm e outra com 6.0 mm. Aplique os subpontos correspondentes da regra e observe no simulador como a base se adapta com perfeição a cada uma.",
    "quickSummary": "Diretrizes de seleção de subpontos conforme a largura milimétrica da coluna de ponto cheio, assegurando sustentação precisa e bordas perfeitas.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Center Walk",
      "Edge Walk",
      "Zigzag Underlay",
      "Auto-Split",
      "Compensação de Encolhimento"
    ],
    "tags": [
      "satin underlay",
      "ponto cheio",
      "subponto",
      "estrategias",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "underlay-para-ponto-tatami-fill-underlay-strategies",
    "code": "U-014",
    "letter": "U",
    "term": "Underlay para Ponto Tatami (Fill Underlay Strategies)",
    "pronunciation": "ân-der-lei pa-ra pon-to ta-ta-mi (fil ân-der-lei es-tra-té-djis)",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Engenharia de preenchimento vetorial desenvolvida para contrabalançar as forças isotrópicas de contração em áreas preenchidas extensas.",
    "summary": "Estratégias de programação de grades e linhas direcionais de subponto sob áreas de preenchimento tatami para evitar rugas, deformações e deslocamento de contornos.",
    "definition": "O Underlay para Ponto Tatami (Fill Underlay Strategies / Estruturação de Preenchimento Tatami) compreende o conjunto de regras técnicas de direcionamento angular, densidade e gradeamento de subpontos sob objetos preenchidos com ponto tatami (tatami fill/complex fill). O principal desafio físico do tatami é a contração cumulativa: milhares de penetrações puxam o tecido na direção do ângulo de costura, empurrando o tecido excedente para a direção perpendicular, o que desalinha contornos e deforma formas circulares em ovais.",
    "technicalDetails": "As regras de ouro para estruturação de Tatami incluem: 1) Ângulo do Underlay: o subponto linear simples deve ser costurado com ângulo rigorosamente perpendicular (90°) em relação ao ângulo do tatami de cobertura; 2) Grade Dupla (Lattice / Double Grid): para áreas maiores que 4x4 cm ou tecidos elásticos, utilizam-se duas passadas cruzadas a 45° e 135° com espaçamento de 3,0 mm a 4,5 mm; 3) Recuo perimetral (Inset): manter recuo de 0,4 mm a 0,6 mm em relação à borda do objeto para que o subponto fique coberto sem afetar a compensação de repuxo.",
    "beginnerExplanation": "É o jeito certo de fazer a 'grade de sustentação' debaixo de desenhos grandes preenchidos com ponto tatami (como fundos de brasões e bandeiras). A costura de baixo precisa ser feita em direção cruzada à costura de cima para travar o tecido, garantindo que o desenho fique retinho e que o contorno preto se encaixe perfeitamente no final.",
    "howItWorks": [
      "1. O programador define o objeto de tatami e seu ângulo de cobertura final (ex: 0° / horizontal).",
      "2. No painel de underlay, define o ângulo do subponto em 90° (vertical) ou ativa a grade dupla cruzada (Lattice Underlay a 45° e 135°).",
      "3. O software gera a malha ortogonal aberta com recuo de margem de 0.5 mm.",
      "4. A máquina costura a grade de ancoragem, grampeando o tecido à entretela.",
      "5. Em seguida, a máquina executa o preenchimento tatami de cobertura sobre a grade.",
      "6. A tração do tecido é bloqueada pela grade cruzada, mantendo as dimensões milimétricas perfeitas.",
      "7. Os contornos periféricos em ponto cheio encaixam com precisão milimétrica sem folgas ou fendas."
    ],
    "applications": [
      "Bordados corporativos de grande porte em peitos e costas de jaquetas.",
      "Brasões militares, distintivos de polícia e emblemas de clubes esportivos.",
      "Fundos preenchidos de patches, bandeiras e escudos heráldicos.",
      "Grandes áreas de tatami sobre tecidos instáveis como viscose, cetim e malhas."
    ],
    "characteristics": [
      "Elimina 100% dos problemas de contornos que saem 'fora do lugar' (out-of-register).",
      "Mantém o formato original de círculos e formas geométricas sem achatamento.",
      "Permite bordar grandes áreas com menos repuxamento no bastidor."
    ],
    "commonErrors": [
      "❌ Programar o subponto no mesmo ângulo do tatami de acabamento, fazendo as linhas de cima caírem nos vãos de baixo sem dar sustentação.",
      "❌ Usar apenas subponto de contorno (Edge Walk) em um preenchimento gigante de 10 cm, permitindo que o centro do desenho enrugue.",
      "❌ Usar grade com espaçamento muito apertado (menos de 2 mm), tornando o bordado duro como uma armadura de metal."
    ],
    "troubleshootingTips": [
      "Contorno preto saindo torto ou com fenda branca ao lado do tatami: ative o Tatami Grid Underlay (Grade Dupla) com ângulos cruzados.",
      "Centro do desenho formando ondas ou 'bolhas' de tecido: aumente a área da grade do underlay e borde do centro para fora.",
      "Bordado muito pesado no peito: abra o espaçamento da grade do underlay de 2.5 mm para 4.0 mm."
    ],
    "dicaArtrelados": "A regra de ouro do Tatami da Artrelados: Se a cobertura estiver na horizontal (0°), a base tem que estar na vertical (90°)! Se o desenho for grande, use sempre grade cruzada (45° e 135°)! O encaixe dos seus contornos vai ficar perfeito como um quebra-cabeça!",
    "voceSabia": "O método de ângulos ortogonais cruzados no tatami foi patenteado na Alemanha no início do século XX para a fabricação de filtros têxteis industriais de alta resistência a pressões hidráulicas.",
    "practicalExercise": "Desenhe um círculo de 50 mm em tatami com ângulo 0°. Em um teste, use subponto a 0°; no outro teste, use grade cruzada a 45°/135°. Borde ambos e meça com paquímetro para ver qual manteve o formato circular perfeito.",
    "quickSummary": "Estratégias de programação de grades e linhas cruzadas ortogonais sob ponto tatami para neutralizar contrações e garantir registro perfeito de contornos.",
    "relatedTerms": [
      "Tatami",
      "Grade Reticulada (Lattice)",
      "Deslocamento de Registro",
      "Compensação de Repuxo",
      "Underlay"
    ],
    "tags": [
      "tatami underlay",
      "fill underlay",
      "grade",
      "preenchimento",
      "wilcom",
      "estabilidade"
    ]
  },
  {
    "id": "underlay-para-tecidos-de-malha-e-lycra",
    "code": "U-015",
    "letter": "U",
    "term": "Underlay para Tecidos de Malha e Lycra",
    "pronunciation": "ân-der-lei pa-ra te-ci-dos de ma-lha e lai-cra",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Especialização da programação de matrizes para vestuário casual, fitness e moda infantil, onde a elasticidade multidirecional da malha exige ancoragem preliminar contra estiramento.",
    "summary": "Configurações específicas de subpontos (como malha cruzada aberta e grade elástica) projetadas para travar tecidos elásticos sem cortar as fibras de malha.",
    "definition": "O Underlay para Tecidos de Malha e Lycra (Knit & Spandex Underlay Strategies) é a abordagem técnica de estruturação de matrizes voltada exclusivamente para tecidos de laçadas elásticas (como meia-malha de algodão, ribana, viscolycra, poliamida/elastano de moda fitness e malha suedine infantil). Esses tecidos deformam-se com facilidade em todas as direções quando submetidos à penetração e tração das agulhas, exigindo um underlay que atue como uma 'rede de retenção' antes da costura densa.",
    "technicalDetails": "A engenharia do subponto para malhas baseia-se em 3 pilares: 1) Utilização de Double Zigzag aberto ou Tatami Grid de grande abertura (espaçamento de 3,5 mm a 4,5 mm) para neutralizar a deformação sem enrijecer a malha; 2) Ampliação do recuo de margem (Inset Distance) para 0,5 mm a 0,7 mm, acomodando o deslocamento elástico das bordas; 3) Comprimento de ponto calibrado entre 2,5 mm e 3,0 mm, associado ao uso de agulha ponta bola (Ball Point / SES), evitando perfurações excessivas que cortam os elastômeros do tecido.",
    "beginnerExplanation": "É o jeito especial de programar a base do bordado para tecidos que esticam bastante (como camisetas, roupas de academia e roupinhas de bebê). A máquina faz uma costurinha elástica em formato de rede aberta que segura o tecido no lugar sem machucar os fios elásticos e sem deixar a camiseta dura.",
    "howItWorks": [
      "1. O programador seleciona a receita de tecido 'Malha / Knit' no software de bordado.",
      "2. O programa aplica automaticamente subpontos com recuo ampliado (0.5 mm) e grade aberta.",
      "3. O tecido é montado no bastidor com entretela de recorte (Cutaway) sem ser esticado.",
      "4. A máquina costura a base com agulha ponta bola nº 75/11 ou 70/10.",
      "5. A estrutura em rede trava a elasticidade da malha sob o desenho.",
      "6. A cobertura é costurada com densidade moderada (0.42 mm a 0.45 mm).",
      "7. Ao soltar do bastidor, a camiseta relaxa sem formar nenhuma ruga ou concha ao redor do bordado."
    ],
    "applications": [
      "Bordados em camisetas promocionais de algodão 30.1 e 24.1.",
      "Roupas de ginástica, fitness, leggings e tops em poliamida com elastano (Lycra/Spandex).",
      "Enxovais de bebê em malha suedine 100% algodão e bodys infantis.",
      "Polos corporativas em malha piquet com elastano."
    ],
    "characteristics": [
      "Bloqueia a deformação elástica da malha durante a costura.",
      "Preserva o toque macio e a flexibilidade das roupas no corpo.",
      "Impede que a peça fique franzida após as primeiras lavagens."
    ],
    "commonErrors": [
      "❌ Usar subponto muito denso em malha fina, cortando os fios elásticos e abrindo furos ao redor do bordado.",
      "❌ Usar entretela rasgável com subponto simples em viscolycra, fazendo o bordado encolher e virar uma tigela.",
      "❌ Esticar a camiseta ao montar no bastidor, inutilizando a ação estabilizadora do subponto."
    ],
    "troubleshootingTips": [
      "Furos aparecendo ao lado dos pontos de base em camisetas: troque para agulha ponta bola (SES) e aumente o comprimento do subponto para 2.8 mm.",
      "Camiseta enrugando ao redor do bordado: use entretela de recorte (Cutaway) e reforce o subponto com grade aberta (Tatami Grid a 4.0 mm).",
      "Bordado muito pesado no peito: aumente o espaçamento do subponto para 4.2 mm e diminua a densidade do ponto cheio para 0.44 mm."
    ],
    "dicaArtrelados": "Para bordar malhas que esticam: Entretela de Recorte (Cutaway) por baixo, agulha Ponta Bola na máquina e Subponto em Grade Aberta na matriz! Essa é a tríade sagrada para camisetas impecáveis e sem rugas!",
    "voceSabia": "As roupas esportivas dos atletas olímpicos de atletismo utilizam matrizes digitalizadas com subpontos ultra-leves que mantêm a aerodinâmica e a respirabilidade dos tecidos inteligentes.",
    "practicalExercise": "Pegue um pedaço de malha de camiseta velha. Borde uma letra sem subponto e outra com Double Zigzag com recuo de 0.5 mm. Solte do bastidor e veja como a primeira fica deformada enquanto a segunda mantém as linhas perfeitas.",
    "quickSummary": "Estratégias de subpontos em rede aberta e recuo ampliado para neutralizar a deformação de tecidos elásticos sem comprometer a maciez e a flexibilidade.",
    "relatedTerms": [
      "Tecido de Malha (Knit)",
      "Lycra / Spandex",
      "Double Zigzag",
      "Agulha Ponta Bola",
      "Entretela de Recorte (Cutaway)"
    ],
    "tags": [
      "malha",
      "lycra",
      "spandex",
      "subponto",
      "underlay",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "underlay-para-tecidos-atoalhados-e-veludos",
    "code": "U-016",
    "letter": "U",
    "term": "Underlay para Tecidos Atoalhados e Veludos",
    "pronunciation": "ân-der-lei pa-ra te-ci-dos a-to-a-lha-dos e ve-lu-dos",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Técnicas de digitalização industrial criadas para contornar a penetração de pontos em tecidos com felpas, laçadas e pelos profundos.",
    "summary": "Combinação de subpontos em grade reticulada densa e bordas reforçadas (Tatami Underlay + Edge Walk) para impedir o afundamento dos pontos em felpas e veludos.",
    "definition": "O Underlay para Tecidos Atoalhados e Veludos (Terry Cloth & Velvet Underlay Strategies) é a metodologia de digitalização concebida para criar uma barreira física impenetrável sob tecidos com relevo superficial alto, felpas de algodão, laçadas soltas ou fios eretos de veludo e pelúcia. Como as felpas tendem a escapar entre as linhas de acabamento, o subponto deve atuar deitando e compactando as laçadas antes da costura dos pontos visíveis.",
    "technicalDetails": "A estrutura de subponto recomendada para tecidos com felpa e veludo compõe-se de: 1) Grade Reticulada Dupla (Lattice Underlay) com espaçamento moderado (2,5 mm a 3,0 mm) em ângulo cruzado de 45°/135°, formando uma malha de retenção contínua; 2) Edge Walk duplo com recuo estreito (0,30 mm a 0,35 mm) para segurar as felpas nas bordas do ponto cheio; 3) Nas colunas de ponto cheio, reforço com Zigzag Underlay denso (2,5 mm de espaçamento). Essa arquitetura, combinada com filme plástico hidrossolúvel superior, garante nitidez de 100% sem perda de contraste visual.",
    "beginnerExplanation": "É o jeito de programar o bordado para toalhas fofinhas de banho e veludos! A máquina faz uma 'grade de suporte' bem fechadinha por baixo para amassar e deitar todos os pelinhos da toalha. Assim, as letras e detalhes não afundam e ficam nítidos e brilhantes.",
    "howItWorks": [
      "1. O programador ativa a receita para 'Atoalhado / Terry' no software de digitalização.",
      "2. O programa aplica a combinação de Edge Walk + Grade de Tatami sob os objetos.",
      "3. Coloca-se plástico hidrossolúvel sobre a toalha no bastidor.",
      "4. A máquina costura a grade de subponto, amassando as laçadas e prendendo a felpa.",
      "5. Em seguida, os pontos cheios ou tatamis de acabamento cobrem a base com nitidez perfeita.",
      "6. Retira-se a peça e dissolve-se o plástico com água morna.",
      "7. O bordado final permanece elevado e nítido, sem nenhuma laçada espetando para fora mesmo após dezenas de lavagens."
    ],
    "applications": [
      "Jogos de toalhas de banho, rosto e piso para hotelaria e enxovais de luxo.",
      "Roupões de banho felpudos e roupões de microfibra aveludada.",
      "Almofadas e artigos decorativos de veludo de seda, camurça e suede.",
      "Bordados em cobertores felpudos, pelúcias e artigos infantis de plush."
    ],
    "characteristics": [
      "Garante legibilidade duradoura em tecidos que sofrem lavagens constantes.",
      "Impede que laçadas de algodão furem a superfície das letras.",
      "Preserva o brilho uniforme dos fios de poliéster sobre texturas felpudas."
    ],
    "commonErrors": [
      "❌ Usar apenas Center Walk em toalhas felpudas, fazendo as letras afundarem e desaparecerem entre as laçadas.",
      "❌ Bordar sem plástico hidrossolúvel superior achando que o subponto sozinho segura felpas muito altas.",
      "❌ Deixar o recuo de borda muito grande, permitindo que as felpas das laterais invadam as letras."
    ],
    "troubleshootingTips": [
      "Felpas espetando entre os pontos cheios de toalhas: combine Edge Walk + Tatami Grid Underlay e use filme hidrossolúvel por cima.",
      "Letras pequenas sumindo na toalha: aumente a largura das colunas para no mínimo 2.0 mm e aplique subponto de cimentação (Knockdown).",
      "Toalha repuxando nas bordas do bordado: use entretela de gramatura 50 g/m² e aumente a compensação de encolhimento para 0.45 mm."
    ],
    "dicaArtrelados": "Para toalhas de banho de presente de casamento: use sempre a dupla infalível — Plástico Hidrossolúvel por cima e Subponto em Grade (Tatami Underlay) por baixo! O monograma fica tão alto e brilhante que parece uma joia cravada na toalha!",
    "voceSabia": "As toalhas dos hotéis 5 estrelas de Dubai passam por lavagens industriais a 90°C com produtos químicos fortes; somente matrizes programadas com grade dupla de underlay resistem sem desmanchar ou afundar os monogramas.",
    "practicalExercise": "Borde duas letras 'B' em uma toalha felpuda grossa: a primeira com Center Walk simples e sem plástico; a segunda com Tatami Grid Underlay e plástico hidrossolúvel. Lave a toalha na máquina e compare a durabilidade e nitidez de cada uma.",
    "quickSummary": "Combinação de grades reticuladas e bordas reforçadas para compactar felpas e pelos altos, garantindo alta definição e durabilidade em toalhas e veludos.",
    "relatedTerms": [
      "Tecido Atoalhado",
      "Veludo",
      "Tatami Underlay",
      "Edge Walk",
      "Hidrossolúvel",
      "Knockdown Stitch"
    ],
    "tags": [
      "atoalhado",
      "toalha de banho",
      "veludo",
      "felpas",
      "subponto",
      "underlay",
      "wilcom"
    ]
  },
  {
    "id": "underlay-para-bordado-3d-puff-subponto-cortante-perfurante",
    "code": "U-017",
    "letter": "U",
    "term": "Underlay para Bordado 3D Puff (Subponto Cortante / Perfurante)",
    "pronunciation": "ân-der-lei pa-ra bor-da-do três-dê pâf (sub-pon-to cor-tan-te / per-fu-ran-te)",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Técnica industrial especializada para confecção de bonés e jaquetas com relevo 3D utilizando espuma de EVA (Puff Foam), patenteada nos anos 1990 no setor de bonés esportivos (New Era, Flexfit).",
    "summary": "Subponto técnico com alta densidade de perfurações nas extremidades projetado para 'cortar' e perfurar a espuma de EVA (3D Puff), facilitando o destaque limpo da espuma.",
    "definition": "O Underlay para Bordado 3D Puff (3D Foam Underlay / Subponto Perfurante / Capping Underlay) é uma técnica de programação altamente especializada para matrizes em relevo tridimensional executadas sobre placas de espuma de EVA (Puffy Foam / Urethane Foam). Diferente dos subpontos convencionais (que servem para sustentar o tecido), o underlay em matrizes 3D tem funções mecânicas distintas: 1) Executar linhas de corte perfurante nas extremidades abertas das colunas (capping) para guilhotinar a espuma; e 2) Fixar o EVA à entretela com pontos de baixa tração antes da cobertura pesada.",
    "technicalDetails": "No bordado 3D Puff, as extremidades das colunas de ponto cheio não podem ficar abertas, pois a espuma de EVA ficaria visível e vazaria pelas pontas. O programador aplica um 'Capping' (fechamento de topo) com ponto cheio preliminar perpendicular ou triplo ponto corrido denso nas pontas das colunas. Ao costurar sobre a espuma com agulha ponta fina afiada (Sharp / Microtex 80/12) e alta densidade de cobertura (0,20 mm a 0,25 mm), as perfurações contínuas agem como um picote de selo, permitindo que o excesso de EVA seja destacado com facilidade e perfeição após a costura.",
    "beginnerExplanation": "É o jeito especial de programar o bordado em alto relevo fofinho (aquele bordado 3D alto dos bonés de beisebol!). A máquina faz pontinhos estratégicos nas pontas das letras para 'cortar' e tampar a espuminha de EVA, fazendo com que a espuma fique bem escondida dentro do bordado e o excesso se solte facilmente com a mão.",
    "howItWorks": [
      "1. A máquina borda primeiro os detalhes planos da matriz (se houver) diretamente no tecido.",
      "2. A máquina para (comando Stop) e a operadora posiciona a placa de EVA (espuma 3D de 2 mm a 3 mm) sobre a área.",
      "3. A máquina costura o underlay de fixação e o 'Capping' (pontos de fechamento nas pontas das letras).",
      "4. Esses pontos perfuram e picotam a espuma exatamente no limite do desenho.",
      "5. Em seguida, a máquina borda os pontos cheios ultra-densos de cobertura por cima do EVA.",
      "6. A operadora retira a peça e puxa a placa de EVA: a espuma externa se destaca facilmente na linha de picote.",
      "7. Aplica-se um soprador térmico ou ferro a vapor rápido para encolher micro-fiapos residuais de EVA.",
      "8. O bordado final apresenta um relevo tridimensional rígido, limpo e escultural."
    ],
    "applications": [
      "Bonés esportivos estruturados (modelos tipo aba reta, trucker e baseball caps).",
      "Emblemas 3D para jaquetas de couro, moletom colegial e uniformes de motoclubes.",
      "Logomarcas em relevo alto para mochilas, tênis e calçados esportivos.",
      "Monogramas tridimensionais de alto impacto para moda streetwear."
    ],
    "characteristics": [
      "Permite o destaque perfeito e limpo da espuma sem necessidade de tesoura.",
      "Fecha as pontas das letras impedindo que a espuma apareça nas laterais.",
      "Exige agulhas ponta fina e controle rigoroso de densidade."
    ],
    "commonErrors": [
      "❌ Não programar o fechamento de ponta (Capping), deixando a espuma de EVA exposta e aparecendo nas pontas das letras.",
      "❌ Usar subponto convencional denso no meio do EVA, esmagando o relevo e fazendo o 3D perder a altura.",
      "❌ Usar agulha ponta bola cega, que empurra o EVA em vez de perfurar e cortar a espuma limpa."
    ],
    "troubleshootingTips": [
      "Espuma de EVA aparecendo nas pontas das letras: programe o fechamento (Capping) com ponto cheio perpendicular nas extremidades.",
      "Dificuldade de destacar a espuma após o bordado: aumente a densidade do ponto cheio para 0.22 mm e use agulha ponta afiada (Sharp).",
      "Pedaços de EVA aparecendo entre os pontos: passe um soprador térmico (heat gun) ou vapor quente rápido para encolher os resíduos de EVA instantaneamente."
    ],
    "dicaArtrelados": "O segredo do Bordado 3D perfeito: NUNCA use subponto pesado no meio da coluna (para não amassar o EVA) e NUNCA esqueça de fechar as pontas das letras com 'Capping'! O EVA se solta sozinho como mágica e o relevo fica altíssimo e impecável!",
    "voceSabia": "O bordado 3D Puff foi inventado nos Estados Unidos para os bonés oficiais da Major League Baseball (MLB) nos anos 1990 para dar visibilidade tridimensional aos logos das equipes nas transmissões de TV em alta definição.",
    "practicalExercise": "Digitalize uma letra 'I' maiúscula com 40 mm de altura para bordado 3D. Programe o fechamento (Capping) nas pontas superior e inferior. Borde sobre uma placa de EVA de 2 mm em sarja de boné e experimente destacar a espuma com as mãos.",
    "quickSummary": "Subponto especializado com fechamentos de extremidade (Capping) e perfurações para picotar a espuma de EVA, facilitando o destaque limpo no bordado 3D.",
    "relatedTerms": [
      "Bordado 3D (Puffy Foam)",
      "Capping",
      "Espuma de EVA",
      "Agulha Ponta Afiada (Sharp)",
      "Soprador Térmico"
    ],
    "tags": [
      "3d puff",
      "eva",
      "capping",
      "subponto",
      "relevo 3d",
      "bones",
      "wilcom"
    ]
  },
  {
    "id": "underlay-auto-ajustavel-automatico-auto-underlay",
    "code": "U-018",
    "letter": "U",
    "term": "Underlay Auto-Ajustável / Automático (Auto-Underlay)",
    "pronunciation": "ân-der-lei au-to a-jus-tá-vel / au-to-má-ti-co (ó-to ân-der-lei)",
    "level": "Iniciante 🟢",
    "category": "Programação & Digitalização",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Recurso de inteligência computacional incorporado aos principais softwares de bordado (Wilcom ES, Tajima DG, Bernina DesignerPlus, PE-Design) a partir dos anos 2000.",
    "summary": "Recurso inteligente de softwares de matrizes que analisa automaticamente a largura dos objetos e o tipo de tecido selecionado, aplicando o subponto ideal sem necessidade de ajuste manual.",
    "definition": "O Underlay Auto-Ajustável (Auto-Underlay / Subponto Automático Inteligente) é o algoritmo de automação presente nos softwares modernos de criação de matrizes que calcula e aplica dinamicamente o tipo, recuo de margem, espaçamento e ângulo de subponto mais adequados para cada objeto vetorial. O algoritmo monitora a largura de cada segmento da coluna em tempo real: se o traço afunilar para menos de 1,5 mm, ele aplica Center Walk; se o traço alargar para mais de 3,0 mm, transiciona automaticamente para Edge Walk e Zigzag, adaptando-se às variações de espessura do desenho.",
    "technicalDetails": "O motor de Auto-Underlay opera em conjunto com o gerenciador de receitas de tecidos (Fabric Assistant / Auto Fabric). Ao selecionar o tecido de destino (ex: 'Polo Piquet' ou 'Seda Pura'), o software carrega tabelas de parâmetros pré-calibradas por mestres bordadores, ajustando o Inset Distance, a densidade e o tipo de subponto automaticamente. Embora proporcione grande ganho de produtividade para iniciantes e produções rápidas, o programador avançado deve saber inspecionar e personalizar os parâmetros manuais para designs complexos ou tecidos atípicos.",
    "beginnerExplanation": "É o 'piloto automático' do programa de bordado! Você só escolhe que tipo de tecido vai usar (por exemplo, camiseta de algodão ou toalha de banho) e o próprio programa escolhe e coloca a costura de sustentação certa para você, mudando de tipo de ponto sozinho se a letra for fininha ou grossa.",
    "howItWorks": [
      "1. A usuária desenha ou converte um objeto vetorial no software de bordado.",
      "2. No painel de propriedades, ativa a opção 'Auto Underlay'.",
      "3. Seleciona o tecido de destino na lista do assistente de tecidos (ex: Tecido Plano Médio).",
      "4. O software analisa a geometria do objeto milímetro a milímetro.",
      "5. Onde o traço é fino, aplica Center Walk; onde o traço engrossa, aplica Edge Walk e Zigzag automaticamente.",
      "6. A matriz é gerada em segundos com excelente equilíbrio estrutural e pronta para bordar."
    ],
    "applications": [
      "Digitalização rápida de matrizes comerciais para prazos de entrega urgentes.",
      "Facilitação do aprendizado de iniciantes no mundo da criação de matrizes.",
      "Padronização de arquivos em equipes de múltiplos programadores em birôs de bordado.",
      "Adaptação instantânea de uma mesma matriz para diferentes tecidos com 1 clique."
    ],
    "characteristics": [
      "Acelera em até 50% o tempo gasto na programação de matrizes.",
      "Reduz drasticamente erros humanos de esquecimento de subponto.",
      "Permite ajuste fino manual a qualquer momento sobre as configurações automáticas."
    ],
    "commonErrors": [
      "❌ Confiar cegamente no Auto-Underlay sem inspecionar cantos difíceis ou serifas finas.",
      "❌ Esquecer de selecionar o tecido correto no assistente, gerando subpontos inadequados para o material real.",
      "❌ Usar Auto-Underlay em bordados especiais como 3D Puff ou rendas Richelieu, onde a lógica automática falha."
    ],
    "troubleshootingTips": [
      "Subponto automático não está aparecendo: verifique se a caixa 'Underlay' está marcada no painel de propriedades do objeto.",
      "Subponto escapando para fora nas curvas: desative o automático temporariamente e ajuste o Inset Distance manualmente para 0.45 mm.",
      "Bordado ficando muito pesado: troque o tecido selecionado no assistente para uma opção de tecido mais leve (Light Woven/Light Knit)."
    ],
    "dicaArtrelados": "O Auto-Underlay é maravilhoso para o dia a dia corrido do ateliê! Mas a dica de ouro é: depois que o programa gerar o subponto sozinho, dê um zoom e confira com os seus próprios olhos se os cantinhos e letrinhas ficaram perfeitos! A máquina ajuda, mas o capricho é seu!",
    "voceSabia": "Os algoritmos modernos de Auto-Underlay foram desenvolvidos a partir de bancos de dados com mais de 50.000 matrizes industriais digitalizadas ao longo de 30 anos por mestres da indústria têxtil da Austrália e Japão.",
    "practicalExercise": "Desenhe uma letra com traços grossos e finos (como a letra 'R'). Ative o Auto-Underlay e veja em modo de pontos como o software muda inteligentemente de ponto corrido simples nos traços finos para borda dupla nos traços grossos.",
    "quickSummary": "Recurso inteligente de softwares que calcula e aplica dinamicamente o subponto ideal com base na geometria do desenho e no tipo de tecido selecionado.",
    "relatedTerms": [
      "Underlay",
      "Assistente de Tecidos (Auto Fabric)",
      "Center Walk",
      "Edge Walk",
      "Wilcom",
      "PE-Design"
    ],
    "tags": [
      "auto underlay",
      "subponto automatico",
      "inteligencia",
      "programacao",
      "wilcom",
      "pedesign",
      "produtividade"
    ]
  },
  {
    "id": "uniformes-corporativos-e-administrativos",
    "code": "U-019",
    "letter": "U",
    "term": "Uniformes Corporativos e Administrativos",
    "pronunciation": "u-ni-for-mes cor-po-ra-ti-vos e ad-mi-nis-tra-ti-vos",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'uniformis' (que tem uma só forma) e do latim medieval 'corporativus', referindo-se à padronização visual da identidade de empresas, bancos e escritórios.",
    "summary": "Bordado de alta definição em camisas sociais, polos piquet e blazers para identificação institucional com elegância, legibilidade e toque refinado.",
    "definition": "O bordado em Uniformes Corporativos e Administrativos é o segmento comercial do bordado computadorizado focado na personalização de vestuário profissional para ambientes de escritório, atendimento ao cliente, executivos e equipes de vendas (camisas sociais em tricoline/fil-a-fil, camisas polo em piquet misto, coletes e blazers). Caracteriza-se pela exigência de altíssima definição tipográfica em letras minúsculas (entre 4 mm e 8 mm), fidelidade absoluta à paleta de cores pantone da marca e avesso ultra-limpo para não incomodar a pele em uso diário de 8 a 10 horas.",
    "technicalDetails": "A engenharia de matrizes para uniformes corporativos exige: 1) Densidade moderada (0,40 mm a 0,44 mm) para não acartonar tecidos leves de camisaria; 2) Compensação de encolhimento (Pull Comp) calibrada entre 0,30 mm e 0,40 mm; 3) Uso indispensável de entretela de recorte macia (Cutaway de 40 a 50 g/m²) ou entretela fusionável leve no verso, impedindo que o bordado enrugue após sucessivas lavagens e passadas a ferro; 4) Linhas de poliéster 100% trilobal nº 40 com alta solidez à luz e à transpiração.",
    "beginnerExplanation": "É o bordado dos logos de empresas em camisas sociais e camisas polo. Ele precisa ser muito bem-feito, com letrinhas perfeitas e bem legíveis, sem repuxar a camisa e com o avesso macio para não pinicar a pessoa que vai trabalhar o dia todo com aquele uniforme.",
    "howItWorks": [
      "1. A empresa envia o manual de identidade visual e o arquivo do logotipo vetorizado.",
      "2. O programador digitaliza a matriz respeitando as proporções exatas da marca (geralmente entre 8 cm e 10 cm de largura para peito esquerdo).",
      "3. Letras pequenas são programadas com ponto cheio limpo e subponto Center Walk.",
      "4. A peça é posicionada no bastidor com entretela de recorte macia.",
      "5. A máquina borda com velocidade calibrada (650 a 750 PPM) para máxima precisão geométrica.",
      "6. A peça é limpa, a entretela traseira é recortada com borda arredondada e passada a ferro a vapor.",
      "7. O uniforme é entregue com aspecto sofisticado, agregando valor à imagem corporativa do cliente."
    ],
    "applications": [
      "Camisas sociais masculinas e femininas (peito esquerdo ou punho de camisa).",
      "Camisas polo em malha piquet para equipes de vendas e recepção.",
      "Blazers, suéteres e coletes de alfaiataria corporativa.",
      "Aventais finos e camisas de atendimento para eventos empresariais e feiras de negócios."
    ],
    "characteristics": [
      "Alta rentabilidade e pedidos recorrentes com volumes médios e altos.",
      "Exige fidelidade milimétrica às cores e proporções do logotipo da empresa.",
      "Valoriza acabamentos discretos, elegantes e confortáveis ao vestir."
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável simples em camisas polo, fazendo o logotipo virar um 'bolinho' enrugado após 2 lavagens.",
      "❌ Colocar excesso de pontos em camisas sociais finas, furando o tecido de algodão e deixando a camisa armada.",
      "❌ Deixar fios longos de corte soltos no avesso incomodando a pele do usuário."
    ],
    "troubleshootingTips": [
      "Logotipo enrugando em camisa polo após lavagem: troque imediatamente para entretela de recorte (Cutaway) com gramatura 50 g/m².",
      "Letrinhas pequenas ilegíveis na camisa social: use linha mais fina (nº 60) com agulha 65/9 e ative o Center Walk.",
      "Tecido da camisa social repuxando ao redor do bordado: reduza a densidade em 15% e aumente a compensação de encolhimento para 0.38 mm."
    ],
    "dicaArtrelados": "Para camisas sociais finas: use sempre entretela de recorte macia colada com uma gotinha de cola temporária em spray! Recorte o avesso deixando 5 mm de borda redondinha. O bordado fica plano como se fizesse parte da tecelagem da camisa!",
    "voceSabia": "Pesquisas de marketing empresarial comprovam que funcionários uniformizados com bordados elegantes transmitem 73% mais confiança e credibilidade aos clientes do que funcionários sem identificação ou com estampas silkscreen desgastadas.",
    "practicalExercise": "Digitalize um logotipo corporativo de 85 mm contendo um símbolo e o nome da empresa em letras de 6 mm. Borde uma amostra em camisa social e outra em polo piquet. Avalie o conforto no avesso e a legibilidade de cada uma.",
    "quickSummary": "Bordado de alta definição para camisas sociais e polos empresariais, com foco em elegância, legibilidade e conforto ao vestir.",
    "relatedTerms": [
      "Camisa Polo",
      "Piquet",
      "Entretela de Recorte (Cutaway)",
      "Tricoline",
      "Linha Nº 60",
      "Pull Compensation"
    ],
    "tags": [
      "uniformes corporativos",
      "empresas",
      "camisa polo",
      "camisa social",
      "bordado profissional",
      "identidade visual"
    ]
  },
  {
    "id": "uniformes-hospitalares-jalecos-e-aventais",
    "code": "U-020",
    "letter": "U",
    "term": "Uniformes Hospitalares, Jalecos e Aventais",
    "pronunciation": "u-ni-for-mes hos-pi-ta-la-res ja-le-cos e a-ven-tais",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'hospitalis' (relativo a hóspedes e acolhimento médico) e do árabe 'gallab' (túnica/manto), marcando a tradição centenária de personalização de vestuário na medicina e na saúde.",
    "summary": "Bordado de nomes, especialidades e brasões da saúde em jalecos de gabardine e scrubs, exigindo resistência a autoclaves e desinfecção química.",
    "definition": "O bordado em Uniformes Hospitalares, Jalecos e Aventais é a especialidade do bordado voltada para a identificação de médicos, dentistas, enfermeiros, veterinários, fisioterapeutas e profissionais da saúde. Os suportes clássicos incluem jalecos em gabardine de microfibra, scrubs (pijamas cirúrgicos), aventais de biossegurança e toucas cirúrgicas. Esse tipo de bordado é submetido a rigorosos processos de higienização hospitalar (lavagens industriais em altas temperaturas de até 80°C, agentes químicos clorinados, sabões alcalinos e autoclaves a vapor), exigindo fios de poliéster 100% de altíssima resistência química e mecânica.",
    "technicalDetails": "As matrizes para jalecos hospitalares geralmente contêm: 1) Brasão oficial da profissão (ex: Medicina, Enfermagem, Odontologia) com altura entre 50 mm e 70 mm no peito esquerdo ou na manga; 2) Nome do profissional com graduação (ex: 'Dra. Mariana Silva - CRM 12345') com letras entre 6 mm e 10 mm. É mandatório o uso de linhas de poliéster com tingimento 'Indanthren' ou de alta solidez ao cloro e entretela rasgável ou recorte resistente à umidade. O ponto de inserção clássico no jaleco fica a 18-22 cm abaixo do ombro no lado esquerdo.",
    "beginnerExplanation": "É o bordado de nomes e símbolos de profissão (Medicina, Enfermagem, Dentista) em jalecos brancos e pijamas cirúrgicos. Ele precisa ser muito resistente a lavagens fortes e água quente, com as letras do nome do médico perfeitamente nítidas e elegantes.",
    "howItWorks": [
      "1. O cliente escolhe o brasão da sua área da saúde e informa o nome completo e registro profissional.",
      "2. O bordador ajusta a matriz do brasão e digita o nome com fonte serifada clássica ou caligráfica elegante.",
      "3. O jaleco (em gabardine, oxford ou algodão pesado) é posicionado no bastidor com gabarito de alinhamento.",
      "4. A máquina borda o brasão em cores heráldicas (dourado, verde esmeralda, azul marinho) e o nome em seguida.",
      "5. Remove-se a entretela e corta-se qualquer linha residual com tesoura curva de precisão.",
      "6. A peça é passada a ferro e entregue pronta para o consultório ou hospital."
    ],
    "applications": [
      "Jalecos médicos e odontológicos de gabardine de seda, microfibra e elastano.",
      "Scrubs e pijamas cirúrgicos para equipes de centro cirúrgico e clínicas veterinárias.",
      "Bolsos frontais e mangas de jalecos de estudantes universitários de faculdades de saúde.",
      "Toucas cirúrgicas personalizadas e aventais de biossegurança."
    ],
    "characteristics": [
      "Altíssimo valor agregado por peça e fidelização duradoura de clientes.",
      "Exige linhas resistentes a produtos químicos hospitalares e cloro.",
      "Combinação clássica de símbolos heráldicos com nomes em tipografia refinada."
    ],
    "commonErrors": [
      "❌ Usar linha de raiom (viscose) que desbota ou se desintegra ao contato com água sanitária ou autoclave hospitalar.",
      "❌ Bordar o nome muito baixo ou torto por falta de gabarito de posicionamento no jaleco.",
      "❌ Bordar por cima do bolso falso sem abrir ou fechar a costura do bolso por engano."
    ],
    "troubleshootingTips": [
      "Bordado desbotando após lavagem com cloro: troque imediatamente para linha de poliéster 100% de alta qualidade.",
      "Bolsinho do jaleco ficando costurado junto com o bordado: desmanche a costura superior do bolso temporariamente ou posicione o bastidor com placa de apoio.",
      "Letras do nome afundando no tecido de gabardine: ative o Underlay Center Walk e aumente a compensação de encolhimento para 0.35 mm."
    ],
    "dicaArtrelados": "Para jalecos de gabardine: use sempre linha de Poliéster 100% (nunca use raiom em ambiente hospitalar!) e alinhe o nome 2 cm acima do brasão ou na altura do segundo botão do jaleco. O jaleco fica com postura de doutor!",
    "voceSabia": "A tradição de bordar o nome em jalecos brancos começou nos hospitais ingleses no final do século XIX, após as descobertas de assepsia de Joseph Lister, para identificar rapidamente cirurgiões e chefes de equipe médica.",
    "practicalExercise": "Borde o símbolo da Medicina com uma serpente e o bastão de Asclépio em um retalho de gabardine branco. Aplique Underlay Edge Walk no brasão e Center Walk no nome abaixo. Avalie o alinhamento e o brilho sob iluminação forte.",
    "quickSummary": "Bordado de identificação profissional e brasões da saúde em jalecos e scrubs, projetado para suportar esterilização e produtos químicos.",
    "relatedTerms": [
      "Gabardine",
      "Scrubs",
      "Linha Poliéster",
      "Oxford",
      "Posicionamento no Peito",
      "Brasão Heráldico"
    ],
    "tags": [
      "jalecos",
      "hospitalar",
      "medicina",
      "saude",
      "scrubs",
      "gabardine",
      "bordado profissional"
    ]
  },
  {
    "id": "uniformes-esportivos-e-tecidos-dry-fit",
    "code": "U-021",
    "letter": "U",
    "term": "Uniformes Esportivos e Tecidos Dry-Fit",
    "pronunciation": "u-ni-for-mes es-por-ti-vos e te-ci-dos drai fit",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do inglês 'dry' (seco) e 'fit' (ajuste), tecnologia têxtil de poliamida e poliéster microfilamentado criada pela Nike e adotada globalmente em uniformes atléticos.",
    "summary": "Bordado técnico ultra-leve sobre tecidos sintéticos respiráveis e elásticos (Dry-Fit/Poliamida), priorizando flexibilidade e maciez sem repuxar a malha.",
    "definition": "O bordado em Uniformes Esportivos e Tecidos Dry-Fit é a técnica de personalização sobre malhas sintéticas tecnológicas de alta respirabilidade (poliéster microfibra, poliamida com elastano, tecidos com canais de evaporação rápida e tecidos furadinhos de basquete/futebol). O grande desafio técnico reside na baixíssima estabilidade mecânica e alta elasticidade do tecido, que tende a enrugar instantaneamente sob bordados pesados, além da exigência de que o bordado não retenha suor nem cause atrito abrasivo contra a pele dos atletas em movimento.",
    "technicalDetails": "Para tecidos Dry-Fit, a engenharia de matrizes e produção obedece a regras estritas: 1) Redução de densidade para valores abertos entre 0,44 mm e 0,48 mm (evitando placas pesadas); 2) Subpontos leves em grade aberta (Tatami Grid com espaçamento de 4,0 mm) ou Center Walk simples; 3) Uso indispensável de agulha ponta bola fina (nº 65/9 ou 70/10 SES) para não romper os microfilamentos de poliamida; 4) Entretela de recorte leve (Cutaway flexível de 40 g/m²) ou termoadesiva elástica; 5) Utilização de filme de proteção termocolante no avesso (Soft Seal) para toque sedoso na pele.",
    "beginnerExplanation": "É o bordado em camisas de time, roupas de corrida e academia feitas daquele tecido furadinho e levinho que seca rápido (Dry-Fit). Esse bordado precisa ser bem leve, com menos pontos e agulha fininha ponta bola para não furar a camisa nem deixar a estampa pesada que fica batendo no peito do atleta.",
    "howItWorks": [
      "1. A matriz do escudo esportivo ou logotipo é digitalizada com densidade leve e subponto elástico aberto.",
      "2. A camisa Dry-Fit é posicionada no bastidor sem ser esticada, acompanhada de entretela de recorte macia.",
      "3. Instala-se na máquina uma agulha ponta bola fina nº 70/10.",
      "4. A máquina borda o escudo com velocidade média (600 a 700 PPM) para evitar superaquecimento da agulha no tecido sintético.",
      "5. A entretela traseira é recortada rente ao bordado com tesoura de ponta curva.",
      "6. Opcionalmente, aplica-se uma película protetora termocolante macia no avesso com prensa térmica.",
      "7. A camisa mantém 100% da flexibilidade, respirabilidade e leveza original para a prática esportiva."
    ],
    "applications": [
      "Camisas de futebol, futsal, vôlei e basquete para times amadores e profissionais.",
      "Regatas de corrida de rua, ciclismo e camisetas de maratonas.",
      "Uniformes de artes marciais leves, judô, jiu-jitsu e taekwondo em tecidos respiráveis.",
      "Jaquetas esportivas corta-vento e calças de agasalho fitness."
    ],
    "characteristics": [
      "Matrizes leves com baixo consumo de pontos e alta flexibilidade.",
      "Preserva a permeabilidade e a circulação de ar do tecido técnico.",
      "Exige avesso ultra-macio para evitar assaduras por atrito durante o exercício."
    ],
    "commonErrors": [
      "❌ Bordar com densidade pesada de brim (0.36 mm) em Dry-Fit, transformando o escudo em uma concha rígida que repuxa toda a camisa.",
      "❌ Usar agulha ponta afiada e grossa (90/14), rasgando os furinhos do Dry-Fit e abrindo furos ao redor do bordado.",
      "❌ Usar entretela rasgável que se desmancha no primeiro treino, deixando o bordado todo franzido."
    ],
    "troubleshootingTips": [
      "Furos aparecendo na malha ao redor do escudo: troque a agulha para Ponta Bola (SES) 65/9 e reduza a densidade do ponto.",
      "Escudo esportivo virando uma 'tigela' no peito: use entretela Cutaway de recorte e reduza a tensão da linha superior.",
      "Bordado arranhando o peito do jogador: aplique o termocolante protetor de avesso (Comfort Weft / Soft Touch) com ferro quente."
    ],
    "dicaArtrelados": "Para camisas Dry-Fit de corrida e futebol: digitalize o escudo com densidade 0.45 mm e use agulha ponta bola 70/10 com entretela de recorte! O bordado fica tão leve que o atleta nem sente que está usando camisa bordada!",
    "voceSabia": "Nos uniformes oficiais da Copa do Mundo FIFA, os escudos das seleções são digitalizados com densidade 30% menor e fios de poliéster ultra-finos (título 60) para economizar até 8 gramas no peso total da camisa do jogador.",
    "practicalExercise": "Digitalize um escudo esportivo de 70 mm com duas configurações: uma com densidade padrão (0.38 mm) e outra com receita Dry-Fit (0.46 mm com grade aberta). Borde em retalhos de malha esportiva e compare o caimento e o peso.",
    "quickSummary": "Bordado técnico de baixa densidade em tecidos sintéticos respiráveis, com foco em leveza, maciez e estabilidade elástica.",
    "relatedTerms": [
      "Dry-Fit",
      "Poliamida",
      "Agulha Ponta Bola",
      "Entretela Cutaway",
      "Protetor de Avesso",
      "Densidade Aberta"
    ],
    "tags": [
      "dry fit",
      "esportivo",
      "futebol",
      "corrida",
      "poliamida",
      "camisas de time",
      "wilcom"
    ]
  },
  {
    "id": "uniformes-escolares-e-resistencia-a-lavagens-diarias",
    "code": "U-022",
    "letter": "U",
    "term": "Uniformes Escolares e Resistência a Lavagens Diárias",
    "pronunciation": "u-ni-for-mes es-co-la-res e re-sis-tên-ci-a a la-va-gens di-á-ri-as",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'scolaris' (referente à escola) e do setor de confecção em larga escala de vestuário infantojuvenil de alta rotatividade e durabilidade.",
    "summary": "Bordado de alta durabilidade e baixo custo em camisetas de malha PV, moletons e bermudas escolares, projetado para suportar lavagens semanais intensas.",
    "definition": "O bordado em Uniformes Escolares é o segmento de maior volume de produção e sazonalidade concentrada no setor de confecção e bordado. Abrange camisetas em malha PV (poliéster/viscose), moletons de inverno, bermudas em helanca escolar, jaquetas de tactel e polos. A exigência técnica central deste nicho é a durabilidade mecânica extrema: as peças são lavadas e centrifugadas de 3 a 5 vezes por semana durante todo o ano letivo de 200 dias, sem poder desfiar, desbotar, abrir furos ou soltar linhas de amarração.",
    "technicalDetails": "A engenharia de matrizes para uniformes escolares baseia-se em: 1) Pontos de amarração de entrada (Tie-In) e saída (Tie-Off) hiper-reforçados com 4 a 6 micro-pontos de travamento duplo; 2) Pontos cheios com largura mínima de 1,2 mm e máxima de 5,5 mm (evitando laçadas frouxas que engatam em anéis ou brinquedos); 3) Subponto Center Walk ou Edge Walk integrado; 4) Linhas de poliéster 100% com alta tenacidade à tração (acima de 1100 cN); 5) Entretela rasgável de boa densidade (45 g/m²) ou recorte leve, garantindo baixo custo unitário em produções de centenas de peças.",
    "beginnerExplanation": "É o bordado do brasão da escola em camisetas, bermudas e casacos dos alunos. Como as mães lavam o uniforme na máquina quase todo dia o ano inteiro, esse bordado precisa ser super forte, com nós bem travados para nunca soltar nem desfiar nenhuma linha.",
    "howItWorks": [
      "1. A escola fornece o logotipo oficial do colégio para o ano letivo.",
      "2. O programador cria uma matriz otimizada com baixo número de trocas de cor para produção em alta velocidade.",
      "3. Todos os textos e elementos recebem nós de amarração duplos reforçados.",
      "4. As camisetas de malha PV são bordadas em bastidores múltiplos de alta produção.",
      "5. A máquina opera em velocidade padrão de 750 a 850 PPM com estabilidade de linha de poliéster.",
      "6. As linhas são cortadas automaticamente e a entretela é removida com rapidez.",
      "7. O lote de uniformes é inspecionado e embalado para entrega antes do início das aulas."
    ],
    "applications": [
      "Camisetas escolares em malha PV (fria) e 100% algodão.",
      "Casacos e calças de moletom escolar flanelado de inverno.",
      "Bermudas e saias-shorts em helanca e microfibra escolar.",
      "Mochilas, estojos e bonés com o logotipo do colégio."
    ],
    "characteristics": [
      "Altíssimo volume de produção em lotes de centenas ou milhares de peças.",
      "Excelente relação de custo por mil pontos com tempos de máquina reduzidos.",
      "Resistência incomparável a sabão em pó, atrito de máquina de lavar e centrifugação."
    ],
    "commonErrors": [
      "❌ Deixar pontos cheios muito longos (acima de 7 mm) que puxam fios quando as crianças brincam no recreio.",
      "❌ Não configurar nós de amarração no final das letras, fazendo o bordado desmanchar após as primeiras lavagens da mãe.",
      "❌ Usar linha de algodão fraca que arrebenta fácil na máquina de lavar caseira."
    ],
    "troubleshootingTips": [
      "Bordado desfiando após a mãe lavar na máquina: aumente a contagem de pontos de amarração final (Tie-Off) para 5 pontos no software.",
      "Tecido de malha PV furando ao lado do brasão: troque para agulha ponta bola nº 75/11 e reduza a densidade do tatami para 0.44 mm.",
      "Produção muito lenta no pico de volta às aulas: otimize a sequência de cores da matriz para zerar trocas de linha desnecessárias."
    ],
    "dicaArtrelados": "No pico da 'Volta às Aulas': programe as matrizes escolares com amarrações duplas reforçadas e agrupe todas as cores iguais para bordar em um tiro só! O bordado fica blindado para durar o ano inteiro e você produz muito mais rápido!",
    "voceSabia": "O uso de uniformes escolares bordados começou na Inglaterra no século XVI no Christ's Hospital School em Londres, onde os alunos usavam casacos azuis com brasões heráldicos bordados à mão.",
    "practicalExercise": "Digitalize um brasão escolar de 70 mm com 3 cores. Agrupe as cores para ter no máximo 3 trocas de linha e configure Tie-Off quádruplo em todos os objetos. Borde em malha PV e teste a resistência puxando as pontas dos fios.",
    "quickSummary": "Bordado de alta durabilidade e produção veloz para uniformes escolares, projetado para suportar lavagens diárias intensas sem desfiar.",
    "relatedTerms": [
      "Malha PV",
      "Moletom",
      "Tie-In / Tie-Off",
      "Produção em Série",
      "Helanca",
      "Linha Poliéster"
    ],
    "tags": [
      "uniforme escolar",
      "escola",
      "volta as aulas",
      "moletom",
      "malha pv",
      "alta durabilidade",
      "wilcom"
    ]
  },
  {
    "id": "uniformes-gastronomicos-e-dolmas-de-chef",
    "code": "U-023",
    "letter": "U",
    "term": "Uniformes Gastronômicos e Dólmãs de Chef",
    "pronunciation": "u-ni-for-mes gas-tro-nô-mi-cos e dól-mãs de chéf",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do grego 'gaster' (estômago/culinária) e do húngaro 'dolmány' (jaqueta curta de origem militar adotada por Auguste Escoffier para alta gastronomia no século XIX).",
    "summary": "Bordado sofisticado em dólmãs de sarja pesada e aventais de lona para chefs de cozinha e brigadas de restaurante, com alta resistência a gordura e calor.",
    "definition": "O bordado em Uniformes Gastronômicos e Dólmãs de Chef é o nicho que atende a brigadas de cozinha profissional, chefs executivos, sommeliers, mestres churrasqueiros, garçons e baristas. Os suportes incluem dólmãs em sarja 100% algodão ou sarja mista pesada (220 a 280 g/m²), aventais de lona encerada com detalhes em couro, jalecos de confeitaria e bandanas. O bordado gastronômico enfrenta calor intenso de fogões industriais (acima de 60°C no ambiente), respingos de óleo quente, molhos ácidos e lavagens industriais diárias com detergentes desengordurantes fortes.",
    "technicalDetails": "As especificações técnicas para vestuário gastronômico envolvem: 1) Nome do Chef e cargo (ex: 'Chef Executivo Rodrigo Santos') bordado no peito esquerdo ou na gola mandarim do dólmã com altura de letra de 6 mm a 10 mm; 2) Brasão do restaurante ou bandeira nacional (ex: Brasil, França, Itália) na manga esquerda ou na gola; 3) Linhas de poliéster 100% trilobal de alta resistência térmica (ponto de fusão acima de 250°C); 4) Entretela rasgável de gramatura 50 g/m² ou recorte resistente a vapor.",
    "beginnerExplanation": "É o bordado dos nomes e restaurantes nas roupas elegantes dos cozinheiros e chefs de cozinha (o dólmã branco e aventais bonitos de restaurante). Esse bordado precisa ser super elegante e ao mesmo tempo muito forte para aguentar o calor do fogão, respingos de gordura e lavagens pesadas de cozinha.",
    "howItWorks": [
      "1. O chef ou restaurante define o nome, estrelas/condecorações e bandeira do país de especialidade gastronômica.",
      "2. O dólmã (em sarja grossa de algodão ou brim) é passado e marcado com giz de alfaiate na linha de transpasse dos botões.",
      "3. Utiliza-se bastidor resistente para acomodar a espessura da sarja dupla do dólmã.",
      "4. A máquina borda o logotipo e o nome com pontos cheios nítidos e subponto reforçado Edge Walk.",
      "5. A bandeira de país é bordada na manga com cores vivas e tatami de alta cobertura.",
      "6. A peça é limpa e passada a ferro quente industrial.",
      "7. O dólmã é entregue impecável, transmitindo o prestígio e a autoridade do chef na cozinha."
    ],
    "applications": [
      "Dólmãs clássicos brancos, pretos e jeans de chefs executivos e sous chefs.",
      "Aventais de garçom, bartender e barista em lona, sarja e brim peletizado.",
      "Golas mandarim bordadas com o nome do chef ou bandeiras internacionais.",
      "Toucas de cozinha, bandanas e aventais de confeiteiros e mestres padeiros."
    ],
    "characteristics": [
      "Elevada exigência estética e status profissional de alta gastronomia.",
      "Tecidos pesados e nobres que oferecem excelente estabilidade ao bastidor.",
      "Combinação de nomes elegantes com bandeiras nacionais e logotipos detalhados."
    ],
    "commonErrors": [
      "❌ Bordar muito perto da dobra de botões do dólmã, fazendo o bastidor bater nos botões de pressão ou fechos duplos.",
      "❌ Usar linha de baixa resistência ao calor que derrete ou encolhe quando o chef passa a ferro quente.",
      "❌ Deixar nós soltos no avesso da gola que incomodam o pescoço do cozinheiro."
    ],
    "troubleshootingTips": [
      "Dificuldade de fechar o bastidor na sarja grossa do dólmã: use bastidores magnéticos ou solte totalmente o parafuso do bastidor convencional.",
      "Linha de subponto escapando na bandeira da manga: aumente o Inset Distance para 0.4 mm e use Tatami Grid Underlay.",
      "Bordado ficando torto no dólmã transpassado: vista o dólmã no manequim ou feche os botões antes de marcar a linha horizontal do peito."
    ],
    "dicaArtrelados": "Dica de ouro para Dólmãs de Chef: feche TODOS os botões da frente do dólmã antes de colocar no bastidor e marcar o peito! Assim, quando o chef vestir a roupa, o bordado fica perfeitamente alinhado na horizontal com os botões!",
    "voceSabia": "A tradição da dólmã branca com botões duplos foi consagrada pelo lendário chef francês Auguste Escoffier para que, caso a frente do uniforme ficasse suja durante o serviço de almoço, o cozinheiro pudesse inverter o lado do abotoamento e atender os clientes no salão com a roupa impecável!",
    "practicalExercise": "Borde o nome de um Chef em letra cursiva elegante acompanhado de uma mini bandeira do Brasil (20x15 mm) em um retalho de sarja pesada. Avalie o alinhamento da linha de base e a vivacidade das cores sob luz branca.",
    "quickSummary": "Bordado refinado e resistente a calor e gordura para dólmãs e aventais de alta gastronomia, alinhando prestígio visual e durabilidade técnica.",
    "relatedTerms": [
      "Dólmã",
      "Sarja de Algodão",
      "Gola Mandarim",
      "Resistência Térmica",
      "Avental de Lona",
      "Bandeira Nacional"
    ],
    "tags": [
      "dolma",
      "chef",
      "gastronomia",
      "restaurante",
      "sarja",
      "avental",
      "alta gastronomia"
    ]
  },
  {
    "id": "uniformes-industriais-pesados-e-macacoes-de-brim",
    "code": "U-024",
    "letter": "U",
    "term": "Uniformes Industriais, Pesados e Macacões de Brim",
    "pronunciation": "u-ni-for-mes in-dus-tri-ais pe-sa-dos e ma-ca-cões de brim",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'industria' (trabalho ativo/produção) e do inglês 'brim' (tecido encorpado de algodão sarjado de alta gramatura adotado na Revolução Industrial).",
    "summary": "Bordados ultra-resistentes em macacões de brim pesado, jaquetas de trabalho e calças de operários com linhas de alta tenacidade para ambientes severos.",
    "definition": "O bordado em Uniformes Industriais Pesados e Macacões de Brim é o setor do bordado corporativo que atende a indústrias pesadas, siderúrgicas, montadoras automotivas, petrolíferas, mineradoras, oficinas mecânicas e construção civil. O vestuário é confeccionado em tecidos brutos e de altíssima gramatura (brim 100% algodão de 260 a 350 g/m², sarja pesada, tecidos antichamas e lonas sintéticas). Os bordados são submetidos a abrasão diária, lavanderias químicas industriais com soda cáustica e detergentes pesados, atrito com ferramentas e intempéries climáticas.",
    "technicalDetails": "A execução técnica em uniformes pesados exige: 1) Agulhas reforçadas para tecidos pesados (nº 80/12 ou 90/14 ponta aguda R/RG ou ponta lança curta); 2) Compensação de encolhimento moderada (0,30 mm a 0,35 mm), já que o brim tem baixíssima elasticidade; 3) Subpontos estruturais Zigzag e Edge Walk para acompanhar a densidade da sarja; 4) Linhas de poliéster 100% de alta tenacidade com excelente lubrificação; 5) Entretela rasgável pesada (60 g/m²) ou dupla entretela para firmeza em bastidor de grande tensão.",
    "beginnerExplanation": "É o bordado em macacões de oficina mecânica, calças de operários e jaquetas pesadas de brim de fábrica e construção civil. Esse bordado precisa de agulhas mais grossas e linhas muito fortes para aguentar o tranco de sujeira, graxa, sol, chuva e lavagens muito pesadas da indústria.",
    "howItWorks": [
      "1. A empresa industrial encomenda lotes de macacões, jaquetas e camisas de brim pesado.",
      "2. O programador cria a matriz do logotipo com colunas bem estruturadas e sem pontos frágeis.",
      "3. Instala-se agulha reforçada nº 90/14 na máquina para perfurar as múltiplas camadas de brim sem desviar.",
      "4. O macacão é colocado no bastidor com entretela pesada e trava de segurança para tecidos grossos.",
      "5. A máquina borda em velocidade estável de 700 a 800 PPM.",
      "6. A peça é limpa, as pontas de linha são arrematadas e a entretela é removida.",
      "7. O uniforme está blindado para enfrentar anos de trabalho pesado na linha de produção."
    ],
    "applications": [
      "Macacões de corpo inteiro para mecânicos, petroleiros e operários de fábrica.",
      "Jaquetas e camisas de manga longa em brim pesado para construção civil e mineração.",
      "Bolsos utilitários de calças cargo e coletes de ferramentas.",
      "Uniformes de frotas de transporte rodoviário, logística e armazéns de carga."
    ],
    "characteristics": [
      "Estabilidade dimensional incomparável no bastidor (tecido não estica).",
      "Demanda agulhas mais grossas e motores de máquina potentes.",
      "Grandes volumes com faturamento constante e contratos anuais de fornecimento."
    ],
    "commonErrors": [
      "❌ Usar agulha fina de camisa (65/9 ou 75/11), que entorta ou quebra ao tentar furar a costura dupla do brim.",
      "❌ Não apertar o bastidor com firmeza, fazendo o tecido grosso escorregar no meio do bordado.",
      "❌ Usar fios de raiom ou algodão comum que se desintegram nas lavagens com desengraxantes químicos."
    ],
    "troubleshootingTips": [
      "Agulha quebrando ou entortando nas emendas do brim: troque imediatamente para agulha reforçada nº 90/14 (RG/San1).",
      "Bastidor soltando o tecido pesado durante a costura: forre as bordas do bastidor com fita crepe ou use bastidor magnético industrial.",
      "Linha superior arrebentando no brim duro: aumente a lubrificação do fio ou passe uma gotinha de óleo de silicone no carretel."
    ],
    "dicaArtrelados": "Para bordar macacões e jaquetas de brim grosso: use agulha 90/14 com linha de Poliéster 100% e aperte bem o parafuso do bastidor com uma chave de fenda! O brim segura a matriz tão retinha que o bordado fica parecendo uma estampa de metal!",
    "voceSabia": "O tecido brim foi originalmente desenvolvido na cidade francesa de Nîmes ('serge de Nîmes', que deu origem à palavra 'Denim') para ser usado em velas de navios devido à sua extrema resistência aos ventos do oceano!",
    "practicalExercise": "Pegue um retalho de brim pesado de 300 g/m² com uma costura dupla no meio. Instale agulha 90/14 e borde um logotipo cruzando a costura. Observe como a agulha correta atravessa o relevo sem desviar nem quebrar a linha.",
    "quickSummary": "Bordado robusto e de alta tenacidade para macacões de brim e vestuário de trabalho pesado, feito para resistir a ambientes severos e lavagens industriais.",
    "relatedTerms": [
      "Brim Pesado",
      "Sarja Industrial",
      "Agulha 90/14",
      "Alta Tenacidade",
      "Macacão Operário",
      "Resistência à Abrasão"
    ],
    "tags": [
      "brim",
      "industrial",
      "macacao",
      "oficina",
      "construcao civil",
      "trabalho pesado",
      "alta tenacidade"
    ]
  },
  {
    "id": "uniformes-militares-policiais-e-taticos",
    "code": "U-025",
    "letter": "U",
    "term": "Uniformes Militares, Policiais e Táticos",
    "pronunciation": "u-ni-for-mes mi-li-ta-res po-li-ci-ais e tá-ti-cos",
    "level": "Avançado 🔴",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'militaris' (referente às forças armadas) e do grego 'taktikos' (arte de manobrar em combate), envolvendo rigorosas normas de padronização governamental (RUE - Regulamento de Uniformes).",
    "summary": "Bordado de alta precisão em fardamentos camuflados, tecidos Ripstop e velcros táticos para forças armadas, polícia e segurança pública, seguindo normas oficiais.",
    "definition": "O bordado em Uniformes Militares, Policiais e Táticos é a divisão especializada de fardamentos para Exército, Marinha, Aeronáutica, Polícias Militares, Civis, Rodoviárias, Guardas Municipais e operadores de segurança privada. O vestuário utiliza tecidos técnicos de combate (Ripstop de alta tenacidade, Cordura 500/1000D, brim camuflado e sarja militar). Os bordados incluem tarjeta de identificação (sutache com nome de guerra e tipo sanguíneo), divisas de posto/graduação, brevês de cursos operacionais e brasões de batalhão.",
    "technicalDetails": "As matrizes militares devem atender estritamente ao RUE (Regulamento de Uniformes): 1) Tipografia oficial normatizada (geralmente fontes sem serifa condensadas tipo Arial Bold ou Helvetica, com altura exata de 12 mm a 15 mm no sutache); 2) Cores de baixa visibilidade (cores camufladas/táticas: verde-oliva, cáqui, cinza-lobo e preto fosco) ou cores heráldicas de gala; 3) Aplicação sobre base de tecido Ripstop dublado com entretela pesada e costurado sobre fecho de contato (Velcro macho/Hook) com corte a quente ou overloque perimetral.",
    "beginnerExplanation": "É o bordado dos distintivos, bandeirinhas, nomes de guerra (sutache com tipo sanguíneo) e brasões usados nas fardas de policiais e militares. Esse bordado precisa seguir regras muito estritas de tamanho e cor oficial, sendo quase sempre feito em tecidos camuflados muito resistentes (Ripstop) e colados com velcro.",
    "howItWorks": [
      "1. O batalhão ou militar fornece o padrão oficial do brasão e o texto do sutache (ex: 'SGT SILVA - O+').",
      "2. O programador digitaliza a matriz respeitando as dimensões oficiais em milímetros do regulamento militar.",
      "3. O tecido Ripstop tático é montado no bastidor com entretela grossa de suporte.",
      "4. A máquina borda o brevê ou distintivo com alta densidade e pontos de amarração reforçados.",
      "5. A peça bordada é recortada no formato exato e costurada sobre uma placa de Velcro militar (Hook).",
      "6. As bordas são seladas com corte a laser, ferro de solda ou ponto de overloque.",
      "7. O patch tático é inspecionado e fixado no fardamento do operador de segurança."
    ],
    "applications": [
      "Sutaches de identificação militar no peito (Nome de Guerra e Fator RH/Sanguíneo).",
      "Brevês de cursos táticos e especializações (BOPE, ROTA, Comandos, Paraquedista, Piloto).",
      "Brasões de ombro de batalhões e comandos de policiamento em Ripstop camuflado.",
      "Patches de velcro para coletes balísticos modulares (sistema MOLLE) e mochilas táticas."
    ],
    "characteristics": [
      "Exigência máxima de fidelidade a regulamentos e leis de heráldica militar.",
      "Cores padronizadas de camuflagem (baixa visibilidade) e de gala (ouro e prata).",
      "Alta durabilidade em ambientes hostis de mata, sol, lama e operações táticas."
    ],
    "commonErrors": [
      "❌ Usar fonte de letra diferente da exigida pelo regulamento militar oficial (RUE).",
      "❌ Bordar com cores brilhantes chamativas em matrizes que deveriam ser de camuflagem de baixa visibilidade (Low-Vis).",
      "❌ Não selar as bordas do tecido Ripstop, fazendo o patch desfiar nas pontas do velcro."
    ],
    "troubleshootingTips": [
      "Tecido Ripstop desfiando nas bordas do patch: sele o contorno com ferro de solda quente ou corte térmico a laser.",
      "Letras do sutache saindo fora do tamanho regulamentar: meça a matriz no software em milímetros e trave a proporção de altura.",
      "Linha quebrando ao bordar sobre placas de velcro: use agulha ponta afiada nº 90/14 revestida em titânio e reduza a velocidade da máquina para 600 PPM."
    ],
    "dicaArtrelados": "Para fazer sutaches e patches militares com velcro: borde várias tarjetas em uma placa grande de Ripstop com entretela resinada, sele as bordas a quente e costure o velcro depois com ponto reto na máquina de costura! O acabamento fica digno de desfile militar!",
    "voceSabia": "Os patches táticos de identificação de tipo sanguíneo nos coletes militares foram criados para que os médicos de combate pudessem iniciar transfusões de sangue imediatas em soldados feridos no próprio campo de batalha sem perder segundos preciosos.",
    "practicalExercise": "Digitalize um sutache militar clássico de 120x25 mm com fundo verde-oliva, moldura de contorno preta e nome 'CABO SOUZA - A+' em letras maiúsculas de 12 mm. Borde em Ripstop e meça com precisão milimétrica.",
    "quickSummary": "Bordado de precisão regulamentar em tecidos Ripstop e velcros táticos para fardamentos das forças armadas e de segurança pública.",
    "relatedTerms": [
      "Sutache",
      "Ripstop",
      "RUE Militar",
      "Velcro Tático",
      "Patch de Ombro",
      "Baixa Visibilidade"
    ],
    "tags": [
      "militar",
      "policia",
      "tatico",
      "ripstop",
      "sutache",
      "velcro",
      "fardamento",
      "rue"
    ]
  },
  {
    "id": "uniformes-de-seguranca-e-faixas-refletivas-de-alta-visibilidade",
    "code": "U-026",
    "letter": "U",
    "term": "Uniformes de Segurança e Faixas Refletivas de Alta Visibilidade",
    "pronunciation": "u-ni-for-mes de se-gu-ran-ça e fai-xas re-fle-ti-vas de al-ta vi-si-bi-li-da-de",
    "level": "Avançado 🔴",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Normas internacionais de segurança do trabalho (ISO 20471 e ABNT NBR 15292) para vestuário de sinalização de alta visibilidade e proteção pessoal.",
    "summary": "Técnicas de bordado em coletes e jaquetas de segurança viária e aeroportuária, evitando perfurar ou desativar as propriedades das microesferas de faixas refletivas.",
    "definition": "O bordado em Uniformes de Segurança e Faixas Refletivas de Alta Visibilidade abrange a identificação de trabalhadores de rodovias, aeroportos, bombeiros, resgate (SAMU), trânsito e mineradoras. O vestuário é composto por tecidos fluorescentes (amarelo-limão, laranja-segurança) e faixas refletivas de microesferas de vidro ou prismáticas (3M Scotchlite). A regra de segurança primordial é que o bordado NUNCA deve cobrir, perfurar desnecessariamente ou reduzir a área mínima de retro-refletividade exigida pelas normas de segurança do trabalho (NR-6 / ABNT).",
    "technicalDetails": "As especificações de engenharia exigem: 1) Posicionamento rigorosamente planejado fora das faixas refletivas principais (acima da faixa do peito ou nas costas entre as faixas horizontais); 2) Se o bordado for executado diretamente sobre a fita refletiva (em casos específicos de crachás), deve-se utilizar agulha ponta afiada fina (nº 75/11 RG) e densidade aberta para não esfarelar as microesferas de vidro; 3) Uso de fios de poliéster 100% fluorescentes de alta luminosidade (High-Vis Neon Threads) para manter a harmonia com o tecido fluorescente; 4) Aplicação frequente via patches termocolantes ou velcro para não furar tecidos impermeáveis.",
    "beginnerExplanation": "É o bordado em coletes de obras, roupas de guardas de trânsito e equipes de resgate que usam aquelas roupas fluorescentes amarelas ou laranjas com faixas que brilham no escuro. O bordado precisa ser posicionado no lugar certinho para não tampar a faixa brilhante e não estragar a proteção do trabalhador.",
    "howItWorks": [
      "1. O cliente fornece o colete ou jaqueta de segurança e a arte da logomarca ou identificação do órgão público.",
      "2. O bordador estuda a peça e define a zona de bordado livre de faixas refletivas conforme as normas de segurança.",
      "3. O colete é montado no bastidor com entretela estável.",
      "4. Utilizam-se linhas de poliéster de alta resistência ou linhas neon de alta visibilidade.",
      "5. A máquina borda o logotipo (ex: 'RESGATE', 'FISCALIZAÇÃO', 'SEGURANÇA') com pontos nítidos e claros.",
      "6. A peça é inspecionada para certificar que a faixa refletiva e as costuras de segurança permanecem 100% íntegras.",
      "7. O uniforme garante a identificação da empresa e a máxima segurança do operador sob sol ou faróis de veículos."
    ],
    "applications": [
      "Coletes refletivos classe 2 e classe 3 para trabalhadores de rodovias e ferrovias.",
      "Jaquetas impermeáveis de equipes de solo de aeroportos e plataformas de petróleo.",
      "Uniformes de brigadistas de incêndio, defesa civil e agentes de trânsito.",
      "Mochilas e capas de chuva de entregadores e ciclistas noturnos."
    ],
    "characteristics": [
      "Submetido a rigorosas normas técnicas de segurança do trabalho (ABNT / ISO).",
      "Combinação frequente com linhas de poliéster fluorescentes de alta luminosidade.",
      "Exige atenção redobrada para não comprometer a impermeabilidade e refletividade da peça."
    ],
    "commonErrors": [
      "❌ Bordar por cima de uma faixa refletiva larga, quebrando as microesferas de vidro e anulando a reflexão noturna.",
      "❌ Furar tecidos impermeáveis em jaquetas de chuva pesada sem aplicar fita de selagem térmica no verso das costuras.",
      "❌ Usar cores escuras e apagadas que diminuem o contraste em roupas de sinalização viária."
    ],
    "troubleshootingTips": [
      "Tecido impermeável vazando água onde foi bordado: aplique fita de selagem de costura termoadesiva (Seam Tape) no avesso do bordado.",
      "Agulha quebrando ao passar perto de fita refletiva grossa: utilize agulha ponta aguda reforçada nº 80/12 revestida em titânio.",
      "Bordado sumindo na cor chamativa do colete: aplique um contorno preto de 1.5 mm ao redor de letras amarelas ou brancas para criar alto contraste."
    ],
    "dicaArtrelados": "Para coletes de alta visibilidade: NUNCA borde em cima da faixa de prata que reflete luz! Borde sempre 3 cm acima da faixa no peito esquerdo ou nas costas entre as duas faixas. Use letras com contorno preto para dar leitura imediata mesmo a 50 metros de distância!",
    "voceSabia": "As microesferas de vidro presentes nas faixas refletivas 3M têm apenas 50 micrômetros de diâmetro (metade da espessura de um fio de cabelo humano) e funcionam como pequenos espelhos esféricos que refletem os faróis dos carros diretamente para os olhos do motorista!",
    "practicalExercise": "Borde a palavra 'SEGURANÇA' com contorno preto e miolo branco sobre um retalho de tecido fluorescente amarelo. Teste a visibilidade e o contraste visual a uma distância de 10 metros.",
    "quickSummary": "Técnicas de bordado em uniformes de alta visibilidade e segurança viária, preservando as propriedades refletivas e a integridade de normas de proteção.",
    "relatedTerms": [
      "Alta Visibilidade (High-Vis)",
      "Faixa Refletiva",
      "Linha Fluorescente",
      "Tecido Impermeável",
      "Normas ABNT",
      "Segurança do Trabalho"
    ],
    "tags": [
      "alta visibilidade",
      "faixa refletiva",
      "seguranca",
      "colete",
      "bombeiros",
      "samu",
      "transito"
    ]
  },
  {
    "id": "uniformes-para-hotelaria-e-servicos",
    "code": "U-027",
    "letter": "U",
    "term": "Uniformes para Hotelaria e Serviços",
    "pronunciation": "u-ni-for-mes pa-ra ho-te-la-ri-a e ser-vi-ços",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Do latim 'hospitale' (local de acolhimento e pouso), consolidando a cultura de elegância e atendimento visual nos grandes hotéis e resorts mundiais.",
    "summary": "Bordado refinado e discreto para camareiras, recepcionistas, concierges e governantas em resorts e redes hoteleiras, aliando requinte a conforto diário.",
    "definition": "O bordado em Uniformes para Hotelaria e Serviços é o segmento voltado para a padronização de equipes em redes de hotéis, pousadas de charme, resorts, cruzeiros marítimos, condomínios de alto padrão e empresas de facilities (recepção, governança, manutenção, spa e alimentos & bebidas). O vestuário varia desde ternos e blazers elegantes de concierges e gerentes até túnicas leves de camareiras e aventais de spa em tecidos mistos confortáveis (oxfordine, two-way com elastano, microfibra e algodão maquinetado).",
    "technicalDetails": "As matrizes de hotelaria primam pela discrição sofisticada: 1) Monogramas e logomarcas em escala reduzida (largura de 60 mm a 75 mm no peito esquerdo); 2) Utilização de linhas com acabamento acetinado de alta nobreza ou tons metálicos suaves (ouro velho, champanhe, prata lunar); 3) Densidade suave (0,42 mm a 0,44 mm) e subpontos leves para manter o caimento fluido das túnicas e camisas; 4) Avesso limpo e sem asperezas, garantindo que as camareiras e terapeutas tenham mobilidade total sem irritação cutânea.",
    "beginnerExplanation": "É o bordado dos uniformes de hotéis, pousadas e spas (recepcionistas, camareiras, garçons e portaria). Esse bordado precisa ser muito delicado, chique e bonito, com cores elegantes e confortáveis de usar o dia inteiro.",
    "howItWorks": [
      "1. A rede de hotéis fornece o manual com os logotipos adaptados para cada setor (Recepção, Governança, Manutenção).",
      "2. O bordador ajusta as cores das linhas para combinar com a paleta decorativa do hotel (ex: bege, dourado champanhe, azul marinho).",
      "3. As peças (camisas, túnicas, jalecos de camareira) são bordadas com entretela macia.",
      "4. O bordado é executado com precisão e controle de tensão para acabamento sedoso.",
      "5. A entretela é recortada rente com tesoura anatômica e a peça é passada a vapor.",
      "6. O lote é separado por setores e tamanhos, pronto para vestir os colaboradores da hospedagem."
    ],
    "applications": [
      "Túnicas e aventais de camareiras, governantas e equipes de limpeza de hotéis.",
      "Camisas sociais e blazers de recepcionistas, porteiros e concierges.",
      "Roupões de banho, faixas de cabelo e toalhas personalizadas de spas de luxo.",
      "Camisas de equipes de manutenção, jardineiros e mensageiros de condomínios."
    ],
    "characteristics": [
      "Valoriza tons elegantes, contrastes suaves e acabamento nobre.",
      "Exige personalização por setores com alta padronização visual.",
      "Demanda conforto ergonômico superior para equipes em constante movimentação."
    ],
    "commonErrors": [
      "❌ Fazer bordados gigantes e espalhafatosos que quebram a elegância e a discrição do ambiente hoteleiro.",
      "❌ Deixar o avesso com nós grossos que incomodam as camareiras durante o esforço físico da arrumação de quartos.",
      "❌ Usar linha de baixa qualidade que desbota com a lavagem de roupas brancas de hotel."
    ],
    "troubleshootingTips": [
      "Bordado incomodando a pele em túnicas de camareira: aplique termocolante protetor de avesso macio no verso da matriz.",
      "Logotipo ficando muito chamativo: sugira ao hotel bordar em tom sobre tom (ex: linha bege sobre camisa branca ou cinza chumbo sobre azul escuro).",
      "Tecido de túnica com elastano enrugando: use entretela de recorte colada e aumente a compensação de repuxo para 0.40 mm."
    ],
    "dicaArtrelados": "Para hotéis e spas de charme: ofereça o bordado em 'Tom sobre Tom' (linha dourado-champanhe em tecido cáqui ou azul royal em tecido azul marinho)! Fica tão sofisticado e elegante que o cliente se apaixona na hora!",
    "voceSabia": "Os grandes hotéis clássicos da Suíça e da França no século XIX foram os pioneiros mundiais na criação de uniformes com brasões e monogramas bordados para cada função da brigada de serviço, inspirando o padrão hoteleiro internacional até hoje.",
    "practicalExercise": "Borde um logotipo hoteleiro elegante com uma coroa e monograma em tom dourado champanhe sobre tecido de camisa social branca. Compare o visual com um bordado comum em cores primárias vivas e sinta a elegância.",
    "quickSummary": "Bordado sofisticado e discreto para equipes de hotelaria, resorts e spas, priorizando refinamento estético e conforto no trabalho diário.",
    "relatedTerms": [
      "Tom sobre Tom",
      "Túnica",
      "Monograma Nobre",
      "Entretela Macia",
      "Hotelaria de Luxo",
      "Avesso Limpo"
    ],
    "tags": [
      "hotelaria",
      "resorts",
      "pousadas",
      "camareira",
      "recepcao",
      "elegancia",
      "tom sobre tom"
    ]
  },
  {
    "id": "uniformes-de-alta-resistencia-a-cloro-e-lavanderia-industrial-linhas-indanthren",
    "code": "U-028",
    "letter": "U",
    "term": "Uniformes de Alta Resistência a Cloro e Lavanderia Industrial (Linhas Indanthren)",
    "pronunciation": "u-ni-for-mes de al-ta re-sis-tên-ci-a a clo-ro e la-van-de-ri-a in-dus-tri-al (li-nhas in-dan-trên)",
    "level": "Avançado 🔴",
    "category": "Insumos & Materiais",
    "grammarClass": "Locução substantiva feminina plural.",
    "origin": "Do nome comercial 'Indanthren' (marca registrada de corantes de tina de alta solidez inventados na Alemanha pela BASF em 1901) e da engenharia química de polímeros sintéticos.",
    "summary": "Bordados com linhas especiais de poliéster 100% tingidas com corantes de alta solidez, imunes ao desbotamento por cloro, alvejantes químicos e autoclaves industriais.",
    "definition": "O bordado em Uniformes de Alta Resistência a Cloro e Lavanderia Industrial é o padrão técnico exigido para roupas profissionais que passam por ciclos de higienização agressivos com alvejantes químicos à base de cloro (hipoclorito de sódio), sabões industriais de alta alcalinidade (pH > 11), lavagem em água fervente a 90°C e secagem em túneis de ar quente. Enquanto fios comuns de raiom ou algodão perdem a cor ou esfarelam instantaneamente, as linhas especiais de Poliéster 100% de alta tenacidade e os fios com tingimento Indanthren mantêm a integridade molecular e a vivacidade das cores por centenas de lavagens.",
    "technicalDetails": "As propriedades físico-químicas dessas linhas incluem: 1) Solidez ao cloro (ISO 105-E03) com nota máxima 4-5; 2) Solidez à lavagem pesada a 95°C (ISO 105-C06); 3) Resistência à tração superior a 1200 cN por fio; 4) Ponto de fusão térmica de 255°C a 260°C. Na digitalização, os pontos devem possuir amarrações hiper-reforçadas e densidade equalizada para que as forças de cisalhamento da centrífuga industrial não puxem nem desfiem as laçadas dos pontos cheios.",
    "beginnerExplanation": "É o bordado feito com linhas superpoderosas que NUNCA desbotam nem mancham, mesmo se a pessoa jogar cândida (água sanitária/cloro) pura em cima ou lavar a roupa em caldeiras de água fervendo! É essencial para hospitais, hotéis, frigoríficos e indústrias químicas.",
    "howItWorks": [
      "1. O cliente especifica que as peças serão lavadas em lavanderia terceirizada industrial com uso pesado de cloro.",
      "2. O bordador abastece a máquina exclusivamente com cones de Linha de Poliéster 100% de alta solidez (Indanthren / Bleach Resistant).",
      "3. A matriz é programada com amarrações de segurança quadruplicadas nas entradas e saídas.",
      "4. As peças são bordadas com entretela de recorte resistente a água quente e vapor.",
      "5. O lote de uniformes é entregue ao cliente com garantia de solidez a produtos químicos.",
      "6. A cada semana, as roupas passam por lavagem química com hipoclorito a 80°C e o bordado permanece com as cores brilhantes e novas por anos."
    ],
    "applications": [
      "Uniformes hospitalares, campos cirúrgicos e lençóis de UTIs e clínicas médicas.",
      "Vestuário de frigoríficos, abatedouros e indústrias de laticínios submetidos a cloração diária.",
      "Toalhas de banho e roupões de grandes redes hoteleiras lavadas em lavanderias industriais.",
      "Uniformes de indústrias farmacêuticas, químicas e de tratamento de água."
    ],
    "characteristics": [
      "100% imune a desbotamento por água sanitária, cloro e alvejantes químicos.",
      "Suporta autoclaves e vaporização a 130°C sem perda de resistência mecânica.",
      "Evita devoluções e prejuízos com lotes de uniformes manchados."
    ],
    "commonErrors": [
      "❌ Usar linha de raiom/viscose por engano em uniformes hospitalares, vendo o bordado ficar completamente branco ou sumir na primeira lavagem.",
      "❌ Fazer amarrações fracas que desmancham na força centrífuga das lavadoras industriais de 100 kg.",
      "❌ Misturar linhas de diferentes fabricantes no mesmo cone sem verificar a solidez química."
    ],
    "troubleshootingTips": [
      "Bordado desbotando e saindo a cor na água sanitária: descarte imediatamente a linha de raiom e adote poliéster 100% de alta qualidade.",
      "Pontos desmanchando após secagem em túnel quente: aumente a contagem de pontos do nó de acabamento (Tie-Off) de 3 para 5 pontos.",
      "Entretela traseira virando pó e esfarelando na lavagem: use entretela de recorte sintética lavável (Polyester Cutaway)."
    ],
    "dicaArtrelados": "Teste de choque da Artrelados: pingue uma gota de água sanitária pura na sua linha de bordar! Se a cor desbotar em 1 minuto, é Raiom e NÃO serve para hospitais nem hotéis! Se a cor ficar intacta e brilhante, é Poliéster 100% Indanthren de verdade!",
    "voceSabia": "Os corantes Indanthren foram inventados pelo químico alemão René Bohn em 1901 a partir da síntese do antraceno; eles revolucionaram a história têxtil permitindo que uniformes de soldados e marinheiros resistissem ao sol do deserto e à água salgada do mar sem perder a cor original.",
    "practicalExercise": "Pegue dois pedaços de linha (um de raiom e outro de poliéster 100%). Mergulhe ambos em um copo com água sanitária pura por 10 minutos. Retire e observe como o poliéster mantém 100% da cor viva enquanto o raiom desbota e se desfaz.",
    "quickSummary": "Uso de fios especiais de poliéster 100% com corantes de alta solidez, imunes à descoloração por cloro, alvejantes químicos e lavagens em água fervente.",
    "relatedTerms": [
      "Linha de Poliéster",
      "Resistência ao Cloro",
      "Indanthren",
      "Lavanderia Industrial",
      "Solidez de Cor",
      "Autoclave"
    ],
    "tags": [
      "cloro",
      "lavanderia industrial",
      "indanthren",
      "alta solidez",
      "poliester",
      "hospitalar",
      "quimica"
    ]
  },
  {
    "id": "uniformes-com-apliques-e-patches-termocolantes",
    "code": "U-029",
    "letter": "U",
    "term": "Uniformes com Apliques e Patches Termocolantes",
    "pronunciation": "u-ni-for-mes com a-pli-ques e pé-txis ter-mo-co-lan-tes",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina plural.",
    "origin": "Técnica combinada de bordado sobre base têxtil com resinas termoplásticas adesivas ativadas por calor (poliamida/poliuretano em filme hot-melt).",
    "summary": "Produção de emblemas e escudos bordados prévios aplicados em uniformes com prensa térmica, reduzindo tempo de máquina e viabilizando reposições rápidas.",
    "definition": "O bordado de Uniformes com Apliques e Patches Termocolantes é a estratégia de confecção em que os logotipos, brasões ou números são bordados separadamente sobre bases têxteis estáveis (sarja, feltro, nylon cordura ou tecido de aplique) e posteriormente dublados no verso com um filme termocolante definitivo (filme termoplástico hot-melt). O patch é então aplicado diretamente sobre a peça pronta (jaquetas, polos, jalecos, macacões, bonés) através de pressão e temperatura controladas em uma prensa térmica industrial (150°C a 160°C por 12 a 15 segundos).",
    "technicalDetails": "A tecnologia dos patches para uniformes oferece vantagens industriais decisivas: 1) Permite bordar centenas de escudos em bastidores planos gigantescos de alta produtividade sem precisar manusear a peça fechada no bastidor; 2) Viabiliza a aplicação de logomarcas em locais inacessíveis ao bastidor da máquina (bolsos fechados com zíper, pernas de calças, forros duplos de jaquetas pesadas e golas); 3) Utilização de filme termocolante de alta fixação com resistência à lavagem de até 60°C; 4) As bordas do patch podem ser finalizadas com ponto de overloque especial (Merrowed Edge), ponto cheio de borda ou corte a laser selado.",
    "beginnerExplanation": "É a técnica de bordar o brasão ou logo separado (como se fosse um adesivo bordado ou escudo de futebol) e depois colar na roupa usando uma prensa térmica quente. Isso é ótimo para colocar bordados em lugares difíceis de enfiar o bastidor da máquina (como bolsos fechados, mangas e jaquetas grossas) e permite fazer estoques de escudos para colar na hora que o cliente pedir.",
    "howItWorks": [
      "1. Os escudos ou logotipos são programados e bordados em série sobre uma placa de tecido sarja ou brim.",
      "2. As bordas dos emblemas recebem acabamento em ponto cheio denso ou overloque perimetral.",
      "3. Os escudos são recortados individualmente à mão com tesoura de precisão ou corte a laser.",
      "4. Aplica-se a película do filme termocolante especial no verso dos patches usando prensa térmica rápida.",
      "5. Quando o cliente traz a peça do uniforme, o bordador posiciona o patch sobre o peito, manga ou bolso.",
      "6. Pressiona-se na prensa térmica a 150°C por 15 segundos com pressão média-alta.",
      "7. A resina termoplástica funde e penetra nas tramas do uniforme, criando uma fixação permanente e super resistente."
    ],
    "applications": [
      "Escudos de times esportivos, federações e associações atléticas.",
      "Emblemas corporativos para jaquetas pesadas com forro duplo que não podem ser abertas.",
      "Identificação rápida de funcionários terceirizados e prestadores de serviços temporários.",
      "Bordados em locais difíceis como bolsos de coletes, mochilas prontas e pernas de calças cargo."
    ],
    "characteristics": [
      "Elimina marcas de bastidor em tecidos delicados ou impermeáveis.",
      "Permite criar estoque antecipado de brasões para entrega expressa ao cliente.",
      "Excelente rentabilidade e agilidade no atendimento de pedidos fracionados."
    ],
    "commonErrors": [
      "❌ Usar termocolante de artesanato temporário em vez de filme termocolante industrial definitivo, fazendo o patch descolar na primeira lavagem.",
      "❌ Não aplicar temperatura e pressão corretas na prensa, resultando em colagem superficial.",
      "❌ Bordar as bordas do patch sem densidade suficiente, deixando fiapos do tecido de fundo aparecendo."
    ],
    "troubleshootingTips": [
      "Pontas do patch descolando após lavagem: aumente o tempo de prensagem para 18 segundos e certifique-se de usar filme termocolante definitivo.",
      "Tecido da camisa queimando ou ficando brilhante na prensa: utilize uma folha de teflon protetora entre a prensa e o patch.",
      "Bordas do patch desfiando: use soldador térmico ou corte a laser para selar as fibras sintéticas da sarja."
    ],
    "dicaArtrelados": "Para ter entrega rápida de uniformes no ateliê: faça um lote de 50 patches termocolantes da empresa do seu cliente e guarde na gaveta! Quando ele contratar um funcionário novo e trouxer a camisa social, você aplica em apenas 15 segundos na prensa térmica e fatura na hora!",
    "voceSabia": "Os primeiros patches bordados termocolantes com resina foram criados pela NASA nos anos 1960 para os trajes espaciais das missões Apollo, já que costurar diretamente através das camadas de proteção térmica pressurizadas dos trajes destruiria a vedação de oxigênio!",
    "practicalExercise": "Crie um patch circular de 70 mm com contorno de ponto cheio grosso. Aplique filme termocolante no verso com ferro quente ou prensa térmica e cole em uma jaqueta jeans. Puxe as bordas com força após esfriar para testar a aderência.",
    "quickSummary": "Produção de emblemas bordados prévios fixados com filme termocolante por calor e pressão, agilizando produções e alcançando locais de difícil acesso.",
    "relatedTerms": [
      "Patch Termocolante",
      "Filme Hot-Melt",
      "Prensa Térmica",
      "Tecido de Aplique",
      "Corte a Laser",
      "Merrowing"
    ],
    "tags": [
      "patch",
      "termocolante",
      "aplique",
      "prensa termica",
      "escudo",
      "emblema",
      "uniformes"
    ]
  },
  {
    "id": "uniforme-posicionamento-padrao-de-bordado-em-bolsos-e-peitos",
    "code": "U-030",
    "letter": "U",
    "term": "Uniforme: Posicionamento Padrão de Bordado em Bolsos e Peitos",
    "pronunciation": "u-ni-for-me po-si-ci-o-na-men-to pa-drão de bor-da-do em bol-sos e pei-tos",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Tabela ergonômica da alfaiataria industrial e da padronização internacional de vestuário corporativo para posicionamento de logomarcas no tronco humano.",
    "summary": "Normas milimétricas e gabaritos universais para posicionar logotipos e nomes no peito esquerdo/direito e em bolsos de camisas, polos e jalecos.",
    "definition": "O Posicionamento Padrão de Bordado em Bolsos e Peitos (Chest & Pocket Embroidery Placement) é o conjunto de regras métricas e anatômicas que orienta onde a matriz de bordado deve ser centralizada e aplicada na parte frontal superior de camisas sociais, polos, jalecos, camisetas e jaquetas. Como o corpo humano possui curvatura tridimensional nos peitorais, o posicionamento inadequado (ex: bordado muito baixo na altura do estômago ou muito colado na axila) arruína a imagem da marca e gera desconforto visual imediato.",
    "technicalDetails": "Os parâmetros biométricos universais de posicionamento no peito estabelecem: 1) Peito Esquerdo / Direito Masculino (Tamanhos P a GG): o centro do bordado deve ficar entre 18 cm e 22 cm abaixo da costura superior do ombro e entre 9 cm e 11 cm de distância da linha de centro dos botões; 2) Peito Feminino: o centro deve ser elevado ligeiramente (16 cm a 18 cm abaixo do ombro e 8 cm a 10 cm do centro) para evitar a curvatura do busto; 3) Camisa Polo: o centro alinha-se horizontalmente com o último botão da carcela; 4) Bordado Sobre Bolso: centralizado a 1,5 cm a 2,5 cm acima da costura superior do bolso.",
    "beginnerExplanation": "É a 'receita de bolo' com as medidas certinhas de onde colocar o bordado no peito da camisa ou em cima do bolso para nunca ficar torto, nem muito caído na barriga e nem grudado no sovaco. Seguindo as medidas de régua, todas as camisas do lote saem perfeitamente alinhadas!",
    "howItWorks": [
      "1. O bordador estende a peça aberta sobre a mesa de trabalho plana.",
      "2. Utiliza uma régua de gabarito de peito em 'L' ou fita métrica de alfaiate.",
      "3. Mede a distância a partir do encontro da costura do ombro com a gola (ex: 20 cm para baixo).",
      "4. Mede a distância a partir da linha central dos botões (ex: 10 cm para a esquerda).",
      "5. Marca o ponto central com adesivo de mira (target sticker) ou giz apagável.",
      "6. Encaixa o bastidor alinhando o centro da grade plástica exatamente sobre a marcação.",
      "7. A máquina borda e o logotipo fica impecavelmente centralizado no coração do cliente."
    ],
    "applications": [
      "Camisas polo piquet masculinas e femininas para empresas e escolas.",
      "Camisas sociais executivas de manga curta e manga longa.",
      "Jalecos médicos e aventais hospitalares com ou sem bolsos.",
      "Camisetas básicas promocionais e regatas corporativas."
    ],
    "characteristics": [
      "Garante padronização matemática absoluta em lotes de centenas de peças.",
      "Diferencia ergonomicamente o corpo masculino do feminino.",
      "Evita o erro mais comum de iniciantes: bordar o peito caído na altura do estômago."
    ],
    "commonErrors": [
      "❌ Bordar na mesma altura do peito masculino em uma camisa feminina, fazendo o bordado cair no meio do busto.",
      "❌ Alinhar o bordado pela costura da axila em vez de medir a partir da costura do ombro e dos botões.",
      "❌ Bordar por cima da costura do bolso sem ter desmanchado a parte superior do bolso."
    ],
    "troubleshootingTips": [
      "Bordado parecendo caído quando a pessoa veste a camisa: eleve a marcação central em 2 a 3 cm em relação à medição anterior.",
      "Dificuldade de marcar o mesmo ponto em 50 camisas: compre ou fabrique um gabarito de acrílico para peito em 'L' (Placement Ruler).",
      "Bordado ficando torto em camisas polo: alinhe a linha horizontal do bastidor exatamente com a linha de costura do último botão da carcela."
    ],
    "dicaArtrelados": "Regrinha prática infalível para Camisas Polo da Artrelados: trace uma linha reta imaginária saindo do último botão da carcela para o peito esquerdo e meça 10 cm para fora: esse é o centro exato e perfeito do seu bordado!",
    "voceSabia": "A tradição de bordar o logotipo no lado esquerdo do peito vem da heráldica e da cavalaria medieval, onde o escudo e o brasão eram empunhados do lado esquerdo para proteger o coração durante os torneios e batalhas.",
    "practicalExercise": "Pegue uma camisa polo tamanho M. Meça 20 cm para baixo a partir do ombro e 10 cm para a esquerda a partir dos botões. Cole um adesivo no centro, vista a camisa em frente a um espelho e veja como o alinhamento fica perfeito no peito.",
    "quickSummary": "Padrões biométricos e gabaritos universais para centralizar logotipos no peito e bolsos de camisas, garantindo harmonia anatômica e alinhamento em série.",
    "relatedTerms": [
      "Gabarito de Peito (Placement Ruler)",
      "Peito Esquerdo",
      "Carcela de Botões",
      "Ergonomia Têxtil",
      "Adesivo de Mira"
    ],
    "tags": [
      "posicionamento",
      "peito",
      "bolso",
      "camisa polo",
      "gabarito",
      "medidas",
      "uniformes"
    ]
  },
  {
    "id": "uniforme-posicionamento-padrao-em-mangas-e-ombros",
    "code": "U-031",
    "letter": "U",
    "term": "Uniforme: Posicionamento Padrão em Mangas e Ombros",
    "pronunciation": "u-ni-for-me po-si-ci-o-na-men-to pa-drão em man-gas e om-bros",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Padronização internacional de fardamentos e uniformes desportivos para aplicação de bandeiras, selos de certificação e marcas de patrocinadores em membros superiores.",
    "summary": "Medidas milimétricas e métodos de enquadramento em bastidor para bordar bandeiras, escudos e nomes em mangas curtas, mangas longas e palas de ombro.",
    "definition": "O Posicionamento Padrão em Mangas e Ombros (Sleeve & Shoulder Embroidery Placement) é a metodologia técnica de medição e fixação em bastidor para bordar na lateral dos braços de camisas polo, camisetas, jaquetas, jalecos e fardamentos. As mangas são áreas tubulares estreitas que apresentam grande desafio de montagem em bastidores convencionais, exigindo técnicas de bordado de manga aberta antes do fechamento da confecção ou uso de bastidores magnéticos e de pequenas dimensões.",
    "technicalDetails": "As medidas universais padronizadas para mangas compreendem: 1) Manga Curta (Polo / Camiseta / Jaleco): o centro do bordado deve ser posicionado entre 5 cm e 8 cm acima da barra/punho da manga, rigorosamente centralizado no vinco lateral do braço (largura máxima recomendada do bordado: 70 mm a 85 mm); 2) Manga Longa: posicionamento no punho (a 3 cm a 5 cm acima do punho) ou na altura do bíceps (a 12 cm a 15 cm abaixo da costura do ombro); 3) Brasões militares e bandeiras de país: sempre posicionados na manga esquerda ou direita a 4 cm abaixo da costura do ombro.",
    "beginnerExplanation": "É o jeito certo de medir e colocar o bastidor na manga da camisa (para bordar bandeirinhas do Brasil, logos de patrocinadores ou certificações tipo ISO 9001). Como a manga é um 'tubo' apertado, a gente precisa posicionar certinho na dobra do meio para o bordado ficar retinho no braço de quem veste.",
    "howItWorks": [
      "1. A manga da camisa é estendida plana, alinhando a costura inferior com o vinco superior do ombro.",
      "2. O bordador mede de 5 cm a 7 cm para cima a partir da barra da manga curta.",
      "3. Marca o centro com adesivo de mira sobre o vinco central.",
      "4. Utiliza um bastidor pequeno (ex: bastidor 10x10 cm ou bastidor de manga) para caber dentro da abertura da manga sem repuxar o tecido.",
      "5. Encaixa a camisa na máquina de braço livre, jogando o corpo da camisa para baixo do cabeçote.",
      "6. A máquina borda a bandeira ou logotipo perfeitamente alinhada com a lateral do braço.",
      "7. A peça é retirada, a entretela traseira é recortada e a manga é passada a ferro."
    ],
    "applications": [
      "Bandeiras de países (Brasil, etc.) e estados em mangas de camisas polo e jalecos.",
      "Selos de qualidade corporativa (ISO 9001, ONA, GPTW) na manga direita.",
      "Patrocinadores e marcas parceiras em mangas de uniformes esportivos.",
      "Distintivos de batalhão e patentes em mangas de fardas e jaquetas militares."
    ],
    "characteristics": [
      "Excelente visibilidade lateral para quem observa o profissional de perfil.",
      "Exige bastidores pequenos ou máquinas industriais com braço tubular livre.",
      "Dimensão controlada (geralmente entre 50 mm e 80 mm de largura)."
    ],
    "commonErrors": [
      "❌ Bordar com a manga torta, fazendo o logotipo ficar virado para a axila ou para as costas em vez de ficar na lateral do braço.",
      "❌ Prender a parte de trás da manga junto no bastidor, costurando a manga fechada e inutilizando a camisa.",
      "❌ Usar matriz muito larga (acima de 9 cm) que 'abraça' o braço e fica distorcida quando a pessoa veste."
    ],
    "troubleshootingTips": [
      "Bordado ficando virado para trás no braço: passe a manga a ferro antes de marcar para criar o vinco central exato de referência.",
      "Bastidor não cabe na manga de camisa infantil: borde a manga com a peça ainda desmanchada ou faça um patch termocolante e aplique com prensa.",
      "Parte de baixo da manga sendo costurada por engano: verifique sempre com a mão por baixo do bastidor antes de dar o Start na máquina."
    ],
    "dicaArtrelados": "Cuidado de ouro para bordar mangas: passe a mão por baixo do bastidor ANTES de apertar o botão verde de iniciar! Certifique-se de que a parte de trás da manga está solta e livre! Isso evita que você costure a manga fechada!",
    "voceSabia": "A aplicação de bandeiras e selos em mangas de uniformes surgiu na aviação comercial nos anos 1930, onde os pilotos precisavam ser identificados com a bandeira do seu país de origem em aeroportos internacionais.",
    "practicalExercise": "Dobre uma camisa de manga curta alinhando o vinco superior. Meça 6 cm para cima a partir da barra da manga e cole uma mira. Borde uma mini bandeira de 50x35 mm e vista a camisa para conferir o alinhamento no espelho.",
    "quickSummary": "Diretrizes métricas e técnicas de montagem em bastidor para bordar na lateral de mangas curtas e longas, garantindo alinhamento e visibilidade perfeita.",
    "relatedTerms": [
      "Braço Tubular",
      "Manga Curta",
      "Bandeira na Manga",
      "Bastidor Pequeno",
      "Vinco Central",
      "Patrocinadores"
    ],
    "tags": [
      "manga",
      "posicionamento",
      "ombro",
      "bandeira",
      "bastidor tubular",
      "uniformes",
      "camisa polo"
    ]
  },
  {
    "id": "uniforme-posicionamento-padrao-em-costas-e-golas",
    "code": "U-032",
    "letter": "U",
    "term": "Uniforme: Posicionamento Padrão em Costas e Golas",
    "pronunciation": "u-ni-for-me po-si-ci-o-na-men-to pa-drão em cos-tas e go-las",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Padrões industriais de sinalização de dorsos e golas para identificação de equipes à distância em eventos, obras e segurança.",
    "summary": "Regras de centralização e proporção para bordados de grande formato em costas de camisas/jaquetas (20 a 28 cm) e mini-logos discretos em golas e palas.",
    "definition": "O Posicionamento Padrão em Costas e Golas (Back & Collar Embroidery Placement) é o padrão técnico que governa a centralização de bordados de grande impacto visual no dorso de uniformes (costas de jaquetas, camisas de manutenção, polos de eventos, jalecos e kimonos) e aplicações minimalistas em golas mandarim, colarinhos e palas traseiras (meia-lua). Por envolver grandes áreas de tecido e matrizes com 15.000 a 45.000 pontos, o alinhamento nas costas exige controle rigoroso de simetria para não ficar inclinado em relação à coluna vertebral.",
    "technicalDetails": "As medidas de referência universais para costas e golas incluem: 1) Costas de Grande Formato (Jaquetas / Polos / Camisetas): o topo do bordado deve iniciar de 10 cm a 14 cm abaixo da costura da gola traseira, rigorosamente centralizado na coluna vertebral (largura de 20 cm a 28 cm); 2) Bordado Minimalista na Pala Traseira (Gola / Meia-Lua): posicionado de 3 cm a 5 cm abaixo da gola com largura entre 5 cm e 8 cm; 3) Gola Mandarim / Colarinho Social: centralizado a 1,5 cm da borda da ponta da gola ou na nuca traseira com altura máxima de 15 mm a 25 mm.",
    "beginnerExplanation": "É o jeito certo de colocar o bordado grandão nas costas da camisa ou jaleco (para a marca da empresa ser vista de longe) ou aquele bordadinho discreto perto da nuca e na pontinha do colarinho. Tem que medir bem no meio da coluna para nunca sair torto nem muito perto da cintura.",
    "howItWorks": [
      "1. A camisa ou jaqueta é dobrada ao meio pelas costuras laterais e passada a ferro para criar um vinco central nítido na coluna.",
      "2. O bordador mede 12 cm para baixo a partir do centro da gola traseira.",
      "3. Marca o centro com gabarito de mira alinhado sobre o vinco da coluna.",
      "4. Utiliza um bastidor grande (ex: 20x30 cm ou bastidor de jaqueta) com entretela pesada bem esticada.",
      "5. A máquina borda o logotipo das costas em velocidade estável (600 a 700 PPM) para manter a tensão perfeita.",
      "6. A entretela traseira é recortada com cuidado e a peça é passada a ferro com vapor.",
      "7. As costas do uniforme exibem a marca com imponência, simetria absoluta e total legibilidade a metros de distância."
    ],
    "applications": [
      "Logomarcas de grande formato em jaquetas de segurança, motoboys e equipes de obras.",
      "Identificação de empresas de manutenção, eventos e feiras nas costas de camisetas e polos.",
      "Bordados minimalistas na pala da nuca de camisas sociais e jalecos finos.",
      "Nomes de atletas e patrocinadores em costas de kimonos de jiu-jitsu e judô."
    ],
    "characteristics": [
      "Máximo impacto visual publicitário e reconhecimento de marca à distância.",
      "Exige bastidores de grande dimensão e suporte estável de entretela.",
      "Maior contagem de pontos e maior valor cobrado por peça no ateliê."
    ],
    "commonErrors": [
      "❌ Bordar as costas muito baixo (perto da cintura), fazendo a marca sumir quando o colaborador coloca a camisa para dentro da calça.",
      "❌ Bordar colado na gola, fazendo a gola caída tampar o topo do logotipo.",
      "❌ Não alinhar pelo vinco da coluna, fazendo o bordado ficar torto e inclinado."
    ],
    "troubleshootingTips": [
      "Bordado sumindo quando o trabalhador põe a camisa na calça: mantenha o centro do bordado sempre entre 10 cm e 14 cm abaixo da gola.",
      "Tecido das costas enrugando sob bordado grande: use entretela de recorte dupla (duas folhas de 40 g/m²) e ative Tatami Grid Underlay.",
      "Gola social repuxando ao bordar monograma no colarinho: utilize entretela solúvel ou recorte leve e agulha 65/9 fina."
    ],
    "dicaArtrelados": "Para nunca errar o centro das costas: dobre a camisa exatamente ao meio juntando as costuras dos ombros e passe com o ferro quente! A linha do vinco que se forma nas costas é o seu guia perfeito para colocar o bastidor sem tortura!",
    "voceSabia": "O costume de estampar grandes nomes e marcas nas costas de uniformes começou no beisebol norte-americano em 1929 com o New York Yankees, para que os locutores de rádio pudessem identificar os jogadores nas jogadas de campo à distância.",
    "practicalExercise": "Pegue uma camiseta tamanho G. Dobre ao meio e marque o vinco central. Meça 12 cm abaixo da gola traseira e posicione um bastidor de 20x20 cm. Borde um logotipo com texto curvo e confira o alinhamento nas costas de um manequim.",
    "quickSummary": "Padrões de centralização e escala para bordados de grande porte em costas de uniformes e pequenos monogramas discretos em golas e palas.",
    "relatedTerms": [
      "Bordado de Costas (Full Back)",
      "Gola Mandarim",
      "Vinco Central",
      "Pala Traseira",
      "Bastidor Grande",
      "Simetria"
    ],
    "tags": [
      "costas",
      "gola",
      "posicionamento",
      "jaqueta",
      "camisa polo",
      "uniformes",
      "grande formato"
    ]
  },
  {
    "id": "urdume-urdidura-warp-engenharia-textil",
    "code": "U-033",
    "letter": "U",
    "term": "Urdume / Urdidura (Warp)",
    "pronunciation": "ur-du-me / ur-di-du-ra (uórp)",
    "level": "Intermediário 🟡",
    "category": "Insumos & Materiais",
    "grammarClass": "Substantivo masculino / feminino.",
    "origin": "Do latim 'ordiri' (começar a tecer, ordenar fios no tear) e do inglês técnico 'warp', referindo-se aos fios longitudinais esticados no tear durante a tecelagem.",
    "summary": "Conjunto de fios paralelos esticados longitudinalmente no tear que formam a estrutura do tecido plano, determinando a direção de maior resistência à tração.",
    "definition": "O Urdume (ou Urdidura / Warp) é o conjunto de fios esticados longitudinalmente no sentido do comprimento da peça no tear mecânico, paralelos à ourela (borda de fábrica). Na física do bordado computadorizado, o urdume representa o eixo de maior tensão mecânica e menor elasticidade de tecidos planos (como tricoline, sarja, brim e percal), sendo o principal parâmetro de referência para orientar os ângulos de costura e a direção da compensação de repuxamento.",
    "technicalDetails": "Durante o processo de tecelagem, os fios de urdume sofrem tração constante sob peso mecânico, resultando em menor relaxamento e maior rigidez dimensional se comparados aos fios da trama (weft). Quando um bordado é aplicado com pontos cheios orientados paralelamente ao urdume, o repuxamento é significativamente menor (cerca de 30% a 40% menor) do que quando os pontos são aplicados paralelamente à trama. Na digitalização profissional, orientar a maior força de contração da matriz na direção do urdume garante estabilidade dimensional superior.",
    "beginnerExplanation": "São os fios compridos que correm de cima a baixo no tecido (na direção do comprimento da peça). Eles são mais esticados e firmes do que os fios que cruzam deitados, por isso o tecido quase não estica quando você puxa na direção do urdume.",
    "howItWorks": [
      "1. Na confecção do tecido, centenas de fios paralelos de urdume são tensionados no carretel do tear.",
      "2. A navete cruza os fios de trama transversalmente por cima e por baixo do urdume.",
      "3. O tecido plano formado tem o urdume paralelo à borda acabada (ourela).",
      "4. No bastidor, o bordador posiciona a peça alinhada com as linhas mestras do urdume.",
      "5. A máquina borda aplicando a tensão das laçadas sobre essa grade de sustentação rígida.",
      "6. A peça mantém a forma retilínea e não deforma no sentido longitudinal."
    ],
    "applications": [
      "Análise de estabilidade e tração em camisas sociais de tricoline e popeline.",
      "Orientação de matrizes em tecidos planos pesados como brim, sarja e lona.",
      "Cálculo de compensação de encolhimento (Pull Comp) diferenciada por eixo.",
      "Alinhamento de peças corporativas e toalhas de mesa no bastidor."
    ],
    "characteristics": [
      "Sentido de maior resistência mecânica e menor elasticidade no tecido plano.",
      "Corre rigorosamente paralelo à ourela (borda lateral de fábrica do tecido).",
      "Absorve a tração de pontos cheios densos com mínima distorção geométrica."
    ],
    "commonErrors": [
      "❌ Cortar o tecido no sentido enviesado (a 45°) sem compensar na matriz, fazendo o bordado repuxar e virar uma hélice.",
      "❌ Ignorar a direção do urdume ao bordar camisas listradas, deixando os contornos tortos em relação às listras.",
      "❌ Esticar o tecido no sentido da trama ao montar no bastidor, deformando a base do urdume."
    ],
    "troubleshootingTips": [
      "Bordado repuxando e encurtando no sentido horizontal: os pontos cheios estão paralelos à trama frouxa; aumente a compensação de repuxo ou gire a matriz para apoiar no urdume.",
      "Listras do tecido entortando ao redor do bordado: use entretela de recorte colada para travar o urdume e a trama simultaneamente.",
      "Tecido esgarçando perto das letras: reduza a densidade de penetração no sentido transversal aos fios de urdume."
    ],
    "dicaArtrelados": "Para saber onde está o urdume no retalho: puxe o tecido na vertical e na horizontal! O lado que for mais firme e NÃO esticar quase nada é o urdume! Alinhe suas letras principais apoiadas nele para um bordado impecável!",
    "voceSabia": "Na tecelagem egípcia antiga de 3.000 a.C., os fios de urdume de linho eram tensionados com pedras pesadas amarradas nas pontas para garantir que as túnicas dos faraós não deformassem.",
    "practicalExercise": "Pegue um pedaço de tricoline de 10x10 cm. Puxe com as duas mãos no sentido do comprimento (urdume) e depois no sentido da largura (trama). Sinta com os dedos a firmeza do urdume e veja como ele é mais estável.",
    "quickSummary": "Conjunto de fios longitudinais paralelos à ourela no tecido plano, oferecendo a maior resistência à tração e rigidez dimensional para a matriz.",
    "relatedTerms": [
      "Trama (Weft)",
      "Ourela",
      "Tecido Plano",
      "Compensação de Encolhimento",
      "Fio do Tecido (Grainline)"
    ],
    "tags": [
      "urdume",
      "urdidura",
      "warp",
      "tecido plano",
      "tecelagem",
      "tracao",
      "estrutura textil"
    ]
  },
  {
    "id": "urdidura-vs-trama-comportamento-mecanico-de-repuxo",
    "code": "U-034",
    "letter": "U",
    "term": "Urdidura vs. Trama (Comportamento Mecânico de Repuxo)",
    "pronunciation": "ur-di-du-ra vêr-sus tra-ma (com-por-ta-men-to me-câ-ni-co de re-pu-xo)",
    "level": "Avançado 🔴",
    "category": "Física & Dinâmica do Ponto",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Fundamentos da mecânica dos sólidos e viscoelasticidade têxtil aplicados à interação agulha-fio-tecido no bordado automatizado.",
    "summary": "Estudo comparativo da deformação elástica assimétrica entre os fios longitudinais (urdume) e transversais (trama) sob a tração das laçadas do bordado.",
    "definition": "O comportamento mecânico de Urdidura vs. Trama (Warp vs. Weft Mechanical Distortion) é o fenômeno físico pelo qual um tecido plano reage de maneira heterogênea e anisotrópica às forças de penetração da agulha e tração da linha superior. Enquanto o urdume possui fios esticados e rígidos, a trama apresenta fios ondulados (crimped) e com maior mobilidade mecânica, fazendo com que o tecido encolha até 2 a 3 vezes mais na direção da trama do que na direção do urdume sob a mesma quantidade de pontos.",
    "technicalDetails": "A física vetorial do bordado demonstra que o coeficiente de deformação elástica (K) varia angularmente: K(trama) > K(urdume) e K(viés 45°) >> K(trama). Se um círculo de tatami de 50 mm for digitalizado com compensação uniforme e bordado sem subponto adequado, ele se transformará em uma elipse achatada no eixo da trama. Para neutralizar essa assimetria, os programadores avançados aplicam compensação de repuxo direcional diferenciada (ex: 0,40 mm no eixo da trama e 0,25 mm no eixo do urdume) e subpontos com passadas em ângulos diagonais a 45°.",
    "beginnerExplanation": "É a diferença de força entre os fios em pé (urdume) e os fios deitados (trama) da roupa. Os fios deitados são mais 'frouxos' e encolhem mais quando a máquina puxa os pontos. Sabendo disso, a gente programa o desenho com um reforço extra no lado mais frouxo para o bordado nunca ficar torto ou achatado.",
    "howItWorks": [
      "1. A agulha perfura o tecido puxando as laçadas de linha sob alta tensão.",
      "2. Os fios de trama (mais flexíveis) cedem e se aproximam com facilidade, estreitando a peça no sentido horizontal.",
      "3. Os fios de urdume (mais rígidos) oferecem resistência e sofrem menor compressão.",
      "4. Se a matriz não tiver compensação angular balanceada, as formas redondas viram ovais.",
      "5. O programador insere grades de subponto cruzadas a 45° que unem os fios de urdume e trama em uma malha soldada.",
      "6. A força de tração é distribuída igualmente em 360°, mantendo a simetria perfeita da geometria original."
    ],
    "applications": [
      "Digitalização de círculos, anéis e monogramas geométricos perfeitos em sarja e tricoline.",
      "Prevenção de fendas e descompasso entre preenchimentos e contornos pretos.",
      "Calibração de matrizes para bandeiras e flâmulas com acabamento retangular exato.",
      "Ajuste fino de compensação direcional em softwares avançados (Wilcom ES / Tajima DG)."
    ],
    "characteristics": [
      "Explica cientificamente por que bordados enrugam mais para os lados do que para cima.",
      "Permite antecipar deformações geométricas antes mesmo de colocar a peça na máquina.",
      "Exige o uso de entretelas que ofereçam estabilidade bidirecional isotrópica."
    ],
    "commonErrors": [
      "❌ Achar que o tecido encolhe por igual em todas as direções e aplicar compensação idêntica em matrizes complexas.",
      "❌ Bordar círculos grandes sem grade de subponto, resultando em formatos ovais e achatados.",
      "❌ Usar entretelas rasgáveis unidirecionais que rasgam no sentido da trama durante a costura."
    ],
    "troubleshootingTips": [
      "Círculo virando oval achatado nas laterais: aumente a compensação de repuxo no eixo perpendicular ao ponto ou ative Tatami Grid Underlay.",
      "Fenda visível abrindo entre o contorno e o preenchimento apenas na vertical: o urdume repuxou menos que a trama; equilibre a sobreposição de bordas (Overlap) em 0.5 mm.",
      "Tecido franzindo em ondas horizontais: use entretela de recorte multidirecional (Cutaway) colada com spray temporário."
    ],
    "dicaArtrelados": "Para fazer círculos e luas perfeitas: nunca use subponto reto na mesma direção da trama! Use SEMPRE grade cruzada em 'X' (45° e 135°)! A grade amarra os fios deitados com os fios em pé e seu círculo sai redondo como uma moeda!",
    "voceSabia": "Na engenharia aeroespacial, os tecidos de fibra de carbono dos foguetes são tecidos com urdume e trama calculados por supercomputadores para suportar a pressão assimétrica de reentrada na atmosfera da Terra.",
    "practicalExercise": "Borde um círculo perfeito de 40 mm em tricoline usando apenas pontos cheios horizontais sem underlay. Meça o diâmetro vertical e horizontal com um paquímetro e comprove a diferença mecânica de deformação entre urdume e trama.",
    "quickSummary": "Estudo da deformação elástica assimétrica entre fios longitudinais e transversais do tecido, orientando a compensação de repuxo e subpontos cruzados.",
    "relatedTerms": [
      "Urdume",
      "Trama",
      "Anisotropia Têxtil",
      "Compensação de Repuxo (Pull Comp)",
      "Deformação Dimensional"
    ],
    "tags": [
      "urdidura",
      "trama",
      "repuxo",
      "fisica do bordado",
      "geometria",
      "anisotropia",
      "estabilidade"
    ]
  },
  {
    "id": "uretano-espuma-de-eva-para-bordado-3d-urethane-foam",
    "code": "U-035",
    "letter": "U",
    "term": "Uretano / Espuma de EVA para Bordado 3D (Urethane Foam)",
    "pronunciation": "u-re-ta-no / es-pu-ma de e-vê-a pa-ra bor-da-do três-dê (iu-re-thêin foum)",
    "level": "Intermediário 🟡",
    "category": "Insumos & Materiais",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do grupo químico dos uretanos/poliuretanos e copolímeros de Etileno Vinil Acetato (EVA), insumo industrial desenvolvido para estruturação tridimensional de calçados e bonés.",
    "summary": "Placas de espuma microcelular sintética (EVA de 2 a 3 mm) aplicadas sob a linha de bordado para gerar relevo tridimensional escultural (3D Puff).",
    "definition": "O Uretano / Espuma de EVA (Puffy Foam / 3D Embroidery Foam / Urethane Foam Sheet) é o material polimérico microcelular de densidade controlada utilizado como núcleo estrutural para a criação de bordados em alto relevo 3D (3D Puff). Apresenta-se em folhas com espessura calibrada (geralmente 2,0 mm, 2,5 mm ou 3,0 mm) em diversas cores, com formulação de baixa densidade e alta elasticidade que permite que a espuma seja picotada e guilhotinada pelas perfurações contínuas da agulha durante a costura de pontos cheios densos.",
    "technicalDetails": "A física do uretano no bordado 3D envolve: 1) Densidade do material: varia entre 35 kg/m³ e 55 kg/m³ para permitir que as agulhas perforem sem emperrar e o excesso de espuma se destaque com corte limpo; 2) Densidade do ponto cheio na matriz: deve ser configurada entre 0,20 mm e 0,25 mm (o dobro da densidade normal) para cobrir totalmente a espuma sem deixar o núcleo visível; 3) Uso obrigatório de linha combinando com a cor do EVA (ex: EVA preto para linha preta, EVA branco para linhas claras); 4) Retração térmica: o material retrai instantaneamente ao receber ar quente de soprador térmico a 120°C, eliminando fiapos residuais.",
    "beginnerExplanation": "É aquela folha de espuminha macia (parecida com o EVA de artesanato, mas própria para bordar) que a gente coloca em cima do boné ou jaqueta antes de bordar. A máquina borda por cima dela com pontos bem juntinhos, criando aquele efeito de letra alta, fofa e gordinha que fica em alto relevo tridimensional!",
    "howItWorks": [
      "1. A máquina borda primeiro os detalhes planos da matriz diretamente no tecido.",
      "2. A máquina realiza uma pausa programada (Stop) e o operador fixa a folha de EVA sobre a área com fita crepe ou cola spray.",
      "3. A máquina executa os pontos de fechamento (Capping) nas pontas das letras e cobre a espuma com pontos cheios ultra-densos.",
      "4. As penetrações contínuas da agulha picotam o contorno do EVA como um selo de correio.",
      "5. Ao finalizar o bordado, o operador retira a peça e puxa a folha de EVA: ela se destaca facilmente ao redor das letras.",
      "6. Pequenos microfiapos que sobrarem nas bordas são eliminados com um jato rápido de soprador térmico.",
      "7. O bordado fica com um relevo alto, firme e com acabamento de boutique."
    ],
    "applications": [
      "Bonés esportivos de aba reta, bonés trucker e baseball caps de alta gama.",
      "Jaquetas colegiais (Varsity), moletons grossos e jaquetas de couro de motociclistas.",
      "Emblemas tridimensionais em mochilas, malas e tênis esportivos.",
      "Monogramas e números em relevo alto para moda streetwear e uniformes de basquete."
    ],
    "characteristics": [
      "Cria relevo tridimensional nítido de 2 a 3 mm de altura sobre o tecido.",
      "Fácil de destacar com as mãos após a execução dos pontos corretos.",
      "Retrai e sela instantaneamente sob calor moderado de soprador térmico."
    ],
    "commonErrors": [
      "❌ Usar EVA comum escolar duro de 5 mm, que quebra agulhas, entorta barras de agulha e não se solta do bordado.",
      "❌ Usar EVA preto sob linha branca, deixando a cor preta aparecendo pelos vãos dos pontos cheios.",
      "❌ Não usar densidade ultra-fechada (0.22 mm), deixando a espuma exposta e com aspecto feio."
    ],
    "troubleshootingTips": [
      "Espuma de EVA aparecendo entre os pontos de linha: reduza o espaçamento do ponto cheio para 0.22 mm e aumente a tensão da linha superior ligeiramente.",
      "Fiapos de EVA espetando para fora nas pontas das letras: passe um soprador térmico (heat gun) a 120°C a 10 cm de distância por 3 segundos.",
      "EVA muito duro que não destaca: utilize espumas próprias para bordado (Puffy Foam importado ou EVA de densidade macia 40D)."
    ],
    "dicaArtrelados": "O segredo do EVA perfeito: use SEMPRE a cor da espuma igual ou muito parecida com a cor da linha que vai cobrir (EVA branco para linhas claras, EVA preto para linhas escuras)! E para finalizar, passe um secador de cabelo no quente: os fiapos somem na hora!",
    "voceSabia": "As primeiras espumas para bordado 3D foram desenvolvidas na Alemanha nos anos 1980 pela empresa Gunold sob a marca registrada 'Puffy Foam', revolucionando a indústria mundial de bonés da NBA e da MLB.",
    "practicalExercise": "Pegue um pedaço de sarja de boné e uma placa de EVA de 2 mm. Programe uma letra 'A' maiúscula com densidade 0.22 mm e fechamento de pontas. Borde com agulha ponta aguda nº 80/12 e experimente destacar a espuma com as mãos.",
    "quickSummary": "Placas de espuma microcelular de densidade controlada utilizadas como núcleo interno para criar bordados em alto relevo tridimensional (3D Puff).",
    "relatedTerms": [
      "Bordado 3D (Puffy Foam)",
      "Capping",
      "Soprador Térmico",
      "Densidade de Ponto",
      "Agulha Ponta Aguda",
      "Streetwear"
    ],
    "tags": [
      "uretano",
      "eva",
      "3d puff",
      "espuma",
      "puffy foam",
      "alto relevo",
      "bones"
    ]
  },
  {
    "id": "ultravioleta-linhas-fotossensiveis-uv-solar-active-threads",
    "code": "U-036",
    "letter": "U",
    "term": "Ultravioleta / Linhas Fotossensíveis (UV Solar Active Threads)",
    "pronunciation": "ul-tra-vi-o-le-ta / li-nhas fo-tos-sen-sí-veis (u-vê so-lar ék-tiv thréds)",
    "level": "Intermediário 🟡",
    "category": "Insumos & Materiais",
    "grammarClass": "Locução substantiva feminina plural.",
    "origin": "Tecnologia de microencapsulamento fotoquímico de pigmentos fotocrômicos orgânicos (Photochromic Dyes) aplicada a filamentos têxteis sintéticos nos anos 1990.",
    "summary": "Linhas especiais de bordado tratadas com pigmentos fotocrômicos que são brancas/invisíveis na sombra e mudam instantaneamente de cor sob a luz solar (raios UV).",
    "definition": "As Linhas Fotossensíveis Ultravioleta (UV Solar Active Threads / Fios Fotocrômicos / Solar Reactive Embroidery Threads) são linhas de bordado de alta tecnologia incorporando pigmentos fotocrômicos microencapsulados em seu núcleo de poliéster ou polipropileno. Em ambientes internos sob luz artificial comum, as linhas apresentam tonalidade branca perolada, translúcida ou pastel suave; ao entrarem em contato com a radiação ultravioleta natural do sol (raios UVA e UVB de 300 a 400 nm), as moléculas fotocrômicas alteram sua estrutura geométrica tridimensional reversível, exibindo cores vibrantes (vermelho, azul, roxo, amarelo, verde, laranja) em menos de 2 segundos.",
    "technicalDetails": "A cinética fotoquímica dessas linhas permite até 2.000 a 3.000 ciclos completos de transição de cor (sombra -> sol -> sombra). O título padrão é nº 40 (120/2 Denier), compatível com agulhas padrão de bordado nº 75/11. Recomenda-se lavar as peças em água fria ou morna (máximo 40°C) com sabão neutro e evitar secadoras industriais e alvejantes clorados, que degradam os polímeros fotocrômicos e reduzem a vida útil da reatividade solar.",
    "beginnerExplanation": "É a linha 'mágica' que muda de cor no sol! Dentro de casa ela parece uma linha branca comum, mas assim que você sai na rua na luz do sol, o bordado ganha cores vivas na mesma hora (vira rosa, azul, roxo, etc.). Quando você volta para dentro de casa, ela volta a ficar branquinha!",
    "howItWorks": [
      "1. A matriz é programada normalmente como qualquer bordado colorido com trocas de linha.",
      "2. A máquina é abastecida com cones de linha fotossensível UV (ex: branco-para-vermelho, branco-para-azul).",
      "3. O bordado é executado com velocidade média (650 a 750 PPM) para não superaquecer os pigmentos no olhal da agulha.",
      "4. No ateliê, o bordado finalizado parece branco monocromático discreto.",
      "5. Ao levar a peça para o sol ou iluminar com uma lanterna UV de luz negra, as cores explodem instantaneamente.",
      "6. Ao retornar à sombra, o bordado volta gradualmente à cor neutra original em 30 a 60 segundos."
    ],
    "applications": [
      "Moda praia, biquínis, saídas de praia, bermudas de surf e chapéus de sol.",
      "Roupas infantis interativas, camisetas lúdicas e bonés infantojuvenis.",
      "Artigos promocionais para eventos ao ar livre, festivais de verão e maratonas.",
      "Bordados de segurança e autenticação antipirataria em peças de vestuário de grife."
    ],
    "characteristics": [
      "Efeito visual surpreendente e altíssimo valor agregado por peça bordada.",
      "Mudança de cor instantânea (menos de 2 segundos de exposição ao sol).",
      "Reversibilidade garantida por centenas de ciclos de exposição e lavagem."
    ],
    "commonErrors": [
      "❌ Passar o ferro quente diretamente sobre o bordado UV sem pano de proteção, queimando as microcápsulas fotocrômicas.",
      "❌ Lavar a peça com água sanitária ou sabões com alvejante óptico forte, destruindo o efeito solar.",
      "❌ Guardar os cones de linha expostos à luz solar na janela do ateliê, esgotando a vida útil antes do uso."
    ],
    "troubleshootingTips": [
      "Linha não está mudando de cor no sol: certifique-se de que é luz solar natural (vidros de janela comuns com filtro UV bloqueiam a reação).",
      "Linha arrebentando com facilidade: reduza ligeiramente a tensão da linha superior e use agulha ponta afiada nº 75/11 nova.",
      "Efeito fotocrômico perdendo a força após lavagem: oriente o cliente final a lavar à mão com sabão neutro e secar à sombra."
    ],
    "dicaArtrelados": "Para encantar clientes em feiras e lojas: borde uma borboleta ou flor com linha UV em um boné e leve uma lanterninha de luz negra UV no bolso! Quando você acender a luz na frente do cliente e o bordado mudar de cor na hora, a venda está garantida!",
    "voceSabia": "A tecnologia dos corantes fotocrômicos foi originalmente desenvolvida nos anos 1960 para criar as primeiras lentes de óculos de grau que escurecem no sol (Transitions), sendo adaptada para fios de bordado têxtil décadas depois.",
    "practicalExercise": "Borde uma flor simples usando linha UV branca-para-rosa nas pétalas e linha comum verde no caule. Vá até o quintal no sol com a peça e grave um vídeo no celular mostrando a transformação mágica de cores.",
    "quickSummary": "Linhas especiais com pigmentos fotocrômicos que mudam instantaneamente de branco para cores vivas quando expostas à luz solar natural.",
    "relatedTerms": [
      "Fotocrômico",
      "Luz Negra / UV",
      "Linha Termossensível",
      "Moda Praia",
      "Valor Agregado",
      "Pigmento Microencapsulado"
    ],
    "tags": [
      "ultravioleta",
      "uv",
      "linha magica",
      "muda de cor",
      "fotossensivel",
      "solar active",
      "inovacao"
    ]
  },
  {
    "id": "ultravioleta-linhas-fluorescentes-e-luz-negra-blacklight-uv",
    "code": "U-037",
    "letter": "U",
    "term": "Ultravioleta / Linhas Fluorescentes e Luz Negra (Blacklight UV)",
    "pronunciation": "ul-tra-vi-o-le-ta / li-nhas flu-o-res-cen-tes e luz ne-gra (blék-lait u-vê)",
    "level": "Iniciante 🟢",
    "category": "Insumos & Materiais",
    "grammarClass": "Locução substantiva feminina plural.",
    "origin": "Do fenômeno da fluorescência descoberto pelo físico George Gabriel Stokes em 1852 e da engenharia de corantes fluorescentes para a indústria têxtil e de eventos.",
    "summary": "Fios de poliéster em tons neon ultra-luminosos que emitem brilho fluorescente intenso sob lâmpadas de luz negra ultravioleta (Blacklight).",
    "definition": "As Linhas Fluorescentes Ultravioleta (Blacklight UV Reactive Threads / Fios Neon Fluorescentes) são linhas de bordado tingidas com corantes fluorescentes especiais capazes de absorver fótons de radiação ultravioleta invisível de onda longa (UVA de 365 nm emitida por lâmpadas de luz negra) e reemitir essa energia instantaneamente na forma de luz visível altamente saturada e brilhante (efeito 'glow' neon). Diferente das linhas fotoluminescentes (Glow-in-the-dark, que armazenam luz e brilham no escuro total), as linhas UV fluorescentes brilham enquanto houver fonte de luz negra ativa.",
    "technicalDetails": "Essas linhas são produzidas em poliéster 100% trilobal de alta resistência com título padrão nº 40. O prisma trilobal das fibras potencializa a reflexão de luz interna, conferindo cores diurnas super-saturadas (amarelo neon, verde limão elétrico, laranja atômico, rosa choque, azul ciano) e brilho incandescente sob luz ultravioleta. Apresentam excelente resistência à tração e lavabilidade padrão até 60°C, sendo totalmente compatíveis com as velocidades normais de máquinas industriais (800 a 900 PPM).",
    "beginnerExplanation": "São aquelas linhas em cores neon super chamativas (verde-limão, rosa-choque, laranja) que acendem e brilham intensamente como se fossem lâmpadas quando você entra em uma festa, boate, teatro ou boliche com luz negra!",
    "howItWorks": [
      "1. A matriz é digitalizada com foco em contrastes fortes (desenhos em contornos nítidos ou tatamis chapados).",
      "2. A máquina é abastecida com cones de poliéster fluorescente Neon UV.",
      "3. O bordado é costurado normalmente sobre fundos escuros (como tecido preto, azul marinho ou cinza chumbo) para máximo impacto.",
      "4. Sob a luz do dia, o bordado exibe cores neon modernas e super chamativas.",
      "5. Ao entrar em ambientes com lâmpadas de luz negra (UV), os pigmentos fluorescentes absorvem a luz invisível e emitem um brilho neon intenso.",
      "6. A peça se destaca à distância com efeito visual futurista e psicodélico."
    ],
    "applications": [
      "Roupas para festas, baladas, festivais de música eletrônica, raves e eventos noturnos.",
      "Uniformes de atendentes de boliches, pistas de patinação, casas noturnas e bares temáticos.",
      "Figurinos de dança, espetáculos teatrais, fantasias de carnaval e cosplay.",
      "Bonés, mochilas e jaquetas de moda jovem, streetwear e cultura gamer/cyberpunk."
    ],
    "characteristics": [
      "Brilho incandescente instantâneo sob qualquer fonte de luz negra UV.",
      "Cores diurnas neon ultra-saturadas de alto impacto visual.",
      "Mesma resistência mecânica e facilidade de costura do poliéster convencional."
    ],
    "commonErrors": [
      "❌ Confundir linha fluorescente UV (que precisa de luz negra) com linha fosforescente Glow-in-the-dark (que brilha no escuro sem luz nenhuma).",
      "❌ Bordar em tecido branco claro, perdendo o contraste dramático que a luz negra proporciona sobre fundos escuros.",
      "❌ Usar alvejante forte que danifica os corantes fluorescentes na lavagem."
    ],
    "troubleshootingTips": [
      "Bordado não está brilhando na luz negra: confirme se a lâmpada é realmente de luz negra UV (365-395 nm) e se o fio é fluorescente genuíno.",
      "Cores neon parecendo apagadas de dia: borde sobre tecido preto ou coloque um contorno preto ao redor do desenho.",
      "Linha quebrando na máquina: use lubrificação padrão e agulha nº 75/11; o poliéster fluorescente corre macio como fio normal."
    ],
    "dicaArtrelados": "Para criar coleções de Carnaval e moda jovem que vendem que nem água: borde caveirinhas, frases divertidas ou logos em bonés pretos usando linhas Neon Fluorescentes! Na luz do dia é lindo e na balada com luz negra é um escândalo de sucesso!",
    "voceSabia": "Os escorpiões da natureza brilham naturalmente sob luz negra exatamente com a mesma fluorescência das linhas neon devido a proteínas fluorescentes presentes na sua carapaça de quitina!",
    "practicalExercise": "Borde um logotipo com três cores neon (verde limão, rosa choque e laranja) sobre uma camiseta preta. Leve a peça para um ambiente iluminado por lâmpada de luz negra e registre fotos do efeito luminoso brilhante.",
    "quickSummary": "Linhas de poliéster em tons neon que reagem com luminosidade intensa e vibrante quando iluminadas por lâmpadas de luz negra ultravioleta.",
    "relatedTerms": [
      "Luz Negra (Blacklight)",
      "Neon",
      "Fluorescência",
      "Fosforescente (Glow in the Dark)",
      "Poliéster Trilobal",
      "Streetwear"
    ],
    "tags": [
      "luz negra",
      "blacklight",
      "neon",
      "fluorescente",
      "linha neon",
      "festas",
      "cyberpunk"
    ]
  },
  {
    "id": "umidade-relativa-do-ar-no-atelie-controle-de-clima",
    "code": "U-038",
    "letter": "U",
    "term": "Umidade Relativa do Ar no Ateliê (Controle de Clima)",
    "pronunciation": "u-mi-da-de re-la-ti-va do ar no a-te-li-ê (con-tro-le de cli-ma)",
    "level": "Intermediário 🟡",
    "category": "Manutenção & Mecânica",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Diretrizes de climatização industrial da engenharia têxtil (normas ISO 139 e ABNT) para controle de higroscopia e condutividade eletrostática em salas de máquinas.",
    "summary": "Parâmetro ambiental crítico (ideal entre 45% e 65%) que previne eletricidade estática, ressecamento de fios, quebras frequentes e travamento eletrônico das máquinas.",
    "definition": "A Umidade Relativa do Ar no Ateliê de Bordado (Ambient Relative Humidity Control) é o controle térmico e higrométrico do ar ambiente na sala de bordados e estoque de insumos. As fibras têxteis (fios de bordar de poliéster, raiom, algodão e entretelas) e os componentes eletrônicos das máquinas são altamente sensíveis à umidade atmosférica. O nível ideal de umidade relativa para operação de bordado computadorizado situa-se rigorosamente entre 45% e 65%, com temperatura estável entre 20°C e 24°C.",
    "technicalDetails": "Os impactos físicos do desequilíbrio higrométrico são severos: 1) Umidade muito baixa (< 35% - ar seco): os fios sintéticos ressecam e perdem até 25% de elasticidade, a fricção mecânica gera alta eletricidade estática (que atrai fiapos para as placas de circuito e causa quebras frequentes de linha por emperramento nos passadores); 2) Umidade muito alta (> 75% - ar úmido): as entretelas de papel absorvem água e amolecem (perdendo sustentação no bastidor), as linhas de algodão incham e causam emperramento no olhal da agulha, e peças metálicas (lançadeiras e barras de agulha) sofrem corrosão oxidativa (ferrugem).",
    "beginnerExplanation": "É a quantidade de umidade no ar da sua sala de bordar. Se o ar estiver muito seco (dias secos de inverno ou com ar condicionado ligado o dia todo no máximo), a linha fica ressecada, dá choque estático e quebra toda hora. Se estiver úmido demais, as entretelas ficam moles e as peças da máquina podem enferrujar. Um termohigrômetro simples de parede resolve tudo!",
    "howItWorks": [
      "1. O bordador instala um termohigrômetro digital na parede do ateliê na altura das máquinas.",
      "2. Monitora diariamente os dois números: Temperatura (°C) e Umidade Relativa (%).",
      "3. Se a umidade cair abaixo de 40% (dias muito secos), liga um umidificador de ar ultrassônico ou coloca bacias de água na sala.",
      "4. Se a umidade subir acima de 70% (dias chuvosos contínuos), ativa a função 'Dry / Desumidificar' do ar-condicionado ou usa um desumidificador.",
      "5. Os cones de linha e entretelas mantêm a flexibilidade, lubrificação e maciez originais de fábrica.",
      "6. As máquinas operam suaves com zero estática, mínimas quebras de linha e máxima produtividade."
    ],
    "applications": [
      "Controle ambiental de ateliês domésticos e salas de produção industrial de bordados.",
      "Armazenamento correto de caixas de cones de linha e rolos de entretela hidrossolúvel e rasgável.",
      "Prevenção de queima de placas eletrônicas e erros de sensores causados por estática.",
      "Padronização de tensão de linha em trocas de estações do ano (verão úmido vs. inverno seco)."
    ],
    "characteristics": [
      "Faixa operacional ideal: 45% a 65% de Umidade Relativa e 20°C a 24°C de Temperatura.",
      "Investimento baixíssimo (termohigrômetro de baixo custo) com retorno gigantesco em produtividade.",
      "Reduz em até 60% as quebras inexplicáveis de linha em dias secos."
    ],
    "commonErrors": [
      "❌ Deixar o ar-condicionado gelando o dia todo no modo frio sem umidificador, derrubando a umidade para 20% e quebrando linhas sem parar.",
      "❌ Guardar entretelas hidrossolúveis em locais úmidos sem embalagem plástica selada, fazendo a entretela melar e grudar.",
      "❌ Achar que a máquina quebrou quando, na verdade, a linha está apenas ressecada pelo clima seco."
    ],
    "troubleshootingTips": [
      "Linhas quebrando repentinamente em todas as agulhas em dia seco: verifique o higrômetro; se estiver abaixo de 40%, ligue um umidificador de ar imediatamente.",
      "Entretela rasgável rasgando antes da hora no bastidor: o ar está muito úmido; seque a entretela com ar quente ou guarde em saco hermético com sílica-gel.",
      "Choques elétricos ao encostar no bastidor metálico: alta estática por ar seco; umedeça o ambiente e verifique o aterramento elétrico da máquina."
    ],
    "dicaArtrelados": "Tenha um termohigrômetro digital na parede do seu ateliê (custa menos de R$ 30)! Se a umidade estiver abaixo de 40%, ligue um umidificador perto das linhas! Você vai ver que aquelas quebras de linha misteriosas somem como mágica!",
    "voceSabia": "As gigantescas tecelagens inglesas do século XIX foram construídas na cidade de Manchester justamente porque o clima da região era naturalmente úmido e chuvoso o ano todo, o que impedia que os fios de algodão quebrassem nos teares velozes!",
    "practicalExercise": "Coloque um termohigrômetro no seu ateliê. Anote a umidade pela manhã, à tarde e com o ar condicionado ligado. Observe se os dias com mais quebra de linha coincidem com os dias de umidade mais baixa.",
    "quickSummary": "Controle da umidade ambiental (ideal de 45% a 65%) para evitar ressecamento de fios, acúmulo de eletricidade estática e oxidação de peças da máquina.",
    "relatedTerms": [
      "Termohigrômetro",
      "Eletricidade Estática",
      "Ressecamento de Linha",
      "Umidificador de Ar",
      "Armazenamento de Insumos",
      "Climatização"
    ],
    "tags": [
      "umidade",
      "clima",
      "termohigrometro",
      "estatica",
      "quebra de linha",
      "manutencao",
      "atelie"
    ]
  },
  {
    "id": "unpicking-desmanchador-de-pontos-e-tecnicas-de-remocao",
    "code": "U-039",
    "letter": "U",
    "term": "Unpicking / Desmanchador de Pontos e Técnicas de Remoção",
    "pronunciation": "ân-pi-king / des-man-cha-dor de pon-tos e téc-ni-cas de re-mo-ção",
    "level": "Iniciante 🟢",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Substantivo masculino / Locução substantiva.",
    "origin": "Do inglês 'unpicking' (ato de descoser ou descosturar pontos) e das ferramentas mecânicas de corte de laçadas têxteis (Seam Ripper / Stitch Eraser).",
    "summary": "Métodos, lâminas e aparelhos elétricos especializados para desmanchar bordados incorretos ou com defeito sem rasgar nem esgarçar o tecido base.",
    "definition": "O Unpicking (ou Remoção Técnica de Bordados / Desmanchamento) é o procedimento sistemático de cortar e extrair os milhares de pontos de uma matriz de bordado defeituosa ou com erro ortográfico sem danificar a integridade das fibras do tecido da peça original. Utiliza desde desmanchadores manuais de precisão (abridores de casa com microesfera protetora e bisturis cirúrgicos nº 11) até máquinas elétricas de corte de laçada inferior (Stitch Eraser / Peggy's Stitch Eraser com navalha microdentada).",
    "technicalDetails": "A regra de ouro biomecânica do desmanche profissional dita: 1) O corte das linhas deve ser feito EXCLUSIVAMENTE pelo lado do avesso (cortando a linha da bobina/canelinha), NUNCA pelo lado direito do tecido; 2) Cortando-se a linha da bobina no avesso, as laçadas superiores de poliéster perdem a ancoragem e se soltam na frente em tiras inteiras ao passar uma escova de cerdas duras, fita adesiva larga ou pinça de precisão; 3) O uso do Stitch Eraser elétrico reduz o tempo de remoção de 40 minutos para menos de 3 minutos em áreas grandes de tatami.",
    "beginnerExplanation": "É a técnica e a ferramenta para 'desmanchar' e tirar um bordado que saiu errado na peça (nome escrito errado, data errada ou linha embolada) sem furar nem estragar a roupa. O segredo mágico é cortar as linhas brancas da carretilha no avesso, que o bordado da frente solta quase sozinho!",
    "howItWorks": [
      "1. A peça é virada do avesso sobre uma superfície plana e bem iluminada.",
      "2. O operador passa o desmanchador elétrico (Stitch Eraser) ou a lâmina manual cortando suavemente a linha da bobina.",
      "3. A lâmina é deslizada no sentido transversal aos pontos, cortando apenas o fio branco traseiro sem encostar no tecido.",
      "4. Vira-se a peça para o lado direito da frente.",
      "5. Passa-se uma fita crepe larga ou rolinho adesivo por cima do bordado: as linhas da frente grudam na fita e saem em bloco.",
      "6. Os furinhos deixados pela agulha no tecido são massageados com a ponta de uma colher de metal ou unha com um pouco de vapor de ferro.",
      "7. As fibras do tecido voltam ao lugar original e a peça está pronta para ser bordada novamente da forma correta."
    ],
    "applications": [
      "Correção de nomes próprios ou dígitos de CRM/telefone bordados com erro ortográfico.",
      "Salvamento de peças de alto valor (como jalecos de gabardine caros, dólmãs e blazers).",
      "Remoção de logotipos antigos de empresas para substituição por nova marca.",
      "Limpeza de ninhos de linha (birdnests) travados embaixo da chapa da agulha."
    ],
    "characteristics": [
      "Evita o descarte e o prejuízo financeiro com peças nobres com erro de digitação.",
      "O corte pelo avesso preserva a superfície visível do tecido sem cortes acidentais.",
      "Ferramentas modernas removem preenchimentos grandes em poucos minutos."
    ],
    "commonErrors": [
      "❌ Tentar cortar os pontos pela frente da peça com tesoura grossa, cortando o tecido da camisa junto.",
      "❌ Puxar os fios com força bruta sem ter cortado a bobina, rasgando e esgarçando a malha.",
      "❌ Não fechar os furinhos da agulha com vapor antes de bordar por cima novamente."
    ],
    "troubleshootingTips": [
      "Tecido ficando com buraquinhos visíveis após desmanchar: passe ferro a vapor esfregando a ponta da unha ou uma colher lisa para fechar a trama.",
      "Fios teimosos que não saem na fita adesiva: utilize uma pinça de relojoeiro com ponta ultra-fina para pinçar as laçadas soltas.",
      "Medo de furar o tecido fino com a lâmina: mantenha o desmanchador quase deitado paralelamente à peça, nunca na vertical."
    ],
    "dicaArtrelados": "O maior segredo para salvar peças bordadas erradas: NUNCA corte pela frente! Vire a peça do avesso e passe a lâmina apenas nas linhas brancas da bobina! Depois, passe fita crepe larga na frente: os fios saem todos grudados como mágica!",
    "voceSabia": "O desmanchador de pontos elétrico ('Stitch Eraser') foi inventado nos Estados Unidos por uma bordadeira chamada Peggy nos anos 1990, adaptando o motor de uma máquina de tosquia de animais com micro-lâminas cirúrgicas!",
    "practicalExercise": "Borde um nome teste de 5 letras em um retalho. Vire do avesso e use o desmanchador cortando apenas a linha da bobina. Pressione uma fita adesiva na frente e cronometre como é rápido remover o bordado inteiro.",
    "quickSummary": "Técnicas e ferramentas especializadas para cortar a linha da bobina no avesso e remover bordados defeituosos sem danificar o tecido original.",
    "relatedTerms": [
      "Stitch Eraser",
      "Abridor de Casa (Seam Ripper)",
      "Linha da Bobina",
      "Fita Crepe",
      "Bisturi nº 11",
      "Recuperação de Peças"
    ],
    "tags": [
      "desmanchar",
      "unpicking",
      "stitch eraser",
      "corrigir erro",
      "salvar peca",
      "remover bordado",
      "ferramentas"
    ]
  },
  {
    "id": "upcycling-textil-com-bordado-computadorizado",
    "code": "U-040",
    "letter": "U",
    "term": "Upcycling Têxtil com Bordado Computadorizado",
    "pronunciation": "ap-sái-kling têx-til com bor-da-do com-pu-ta-do-ri-za-do",
    "level": "Iniciante 🟢",
    "category": "Aplicações & Técnicas",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do inglês 'up' (elevação) e 'recycling' (reciclagem), conceito de economia circular cunhado nos anos 1990 para valorizar e transformar peças descartadas em produtos nobres.",
    "summary": "Transformação criativa de roupas usadas, manchadas ou rasgadas em peças exclusivas de alto valor através de bordados artísticos e customização digital.",
    "definition": "O Upcycling Têxtil com Bordado Computadorizado é o método criativo e sustentável da moda circular em que peças de vestuário seminovas, sobras de coleções, tecidos com pequenos defeitos de fabricação, furos ou manchas irremovíveis são ressignificadas e transformadas em itens de moda nobre e exclusiva através da aplicação de bordados computadorizados temáticos, monogramas e patches decorativos.",
    "technicalDetails": "A engenharia do upcycling exige técnicas adaptativas de montagem: 1) Camuflagem anatômica: digitalização de matrizes com formatos orgânicos (flores, folhagens, animais, arte abstrata) que cubram exatamente a mancha ou rasgo existente; 2) Reforço de rasgo: aplicação de entretela de recorte colada no verso antes do bordado para dar sustentação a tecidos enfraquecidos; 3) Uso de bastidores livres e magnéticos para prender roupas já costuradas (jaquetas jeans prontas, pernas de calças, bolsos); 4) Alta rentabilidade comercial por dispensar o custo de confecção da peça do zero.",
    "beginnerExplanation": "É a arte de pegar uma jaqueta jeans velha, uma calça com furinho ou uma camisa manchada e bordar um desenho maravilhoso por cima do defeito! A roupa que ia para o lixo se transforma em uma peça de moda exclusiva, linda e muito mais cara!",
    "howItWorks": [
      "1. A peça a ser restaurada (ex: jaqueta jeans com furo ou mancha de tinta) é higienizada e inspecionada.",
      "2. O bordador mede o tamanho da mancha e desenha uma matriz de bordado personalizada para cobri-la com folga.",
      "3. Aplica-se entretela estruturada no verso da mancha para reforçar o tecido.",
      "4. A peça pronta é montada no bastidor com alinhamento artístico.",
      "5. A máquina borda flores, frases ou motivos modernos com linhas coloridas de alta definição.",
      "6. A entretela é recortada e a peça é finalizada com vapor e embalagem especial de moda ecológica.",
      "7. A peça ganha nova vida, com status de peça única de designer sustentável."
    ],
    "applications": [
      "Jaquetas jeans vintage bordadas nas costas, mangas e golas com flores e arte pop.",
      "Customização de calças jeans rasgadas com apliques e bordados florais ou geométricos.",
      "Transformação de sobras de tecidos de confecção em nécessaires, ecobags e estojos nobres.",
      "Cobertura de logotipos de empresas antigas em uniformes descontinuados."
    ],
    "characteristics": [
      "Sustentabilidade ecológica e conexão direta com as tendências da moda circular (ESG).",
      "Altíssima margem de lucro (a matéria-prima bruta tem custo quase zero).",
      "Peças únicas e exclusivas com grande apelo em redes sociais e boutiques artesanais."
    ],
    "commonErrors": [
      "❌ Bordar sobre tecido puído ou rasgado sem colocar entretela de reforço no verso, fazendo o buraco abrir ainda mais com as perfurações da agulha.",
      "❌ Fazer um bordado menor que a mancha, deixando bordas manchadas visíveis ao redor.",
      "❌ Não verificar se a parte traseira da perna da calça foi presa junto no bastidor."
    ],
    "troubleshootingTips": [
      "Tecido muito fino ou rasgado esgarçando na agulha: cole uma entretela de recorte no verso e use agulha ponta bola fina 70/10 com densidade moderada.",
      "Mancha maior que o bastidor da máquina: divida o bordado em partes (Multi-Hooping) ou borde vários raminhos modulares independentes.",
      "Bordado ficando pesado em tecido fino de camisa antiga: reduza a densidade do preenchimento e opte por pontos de contorno leves (Redwork / Linework)."
    ],
    "dicaArtrelados": "Para lucrar muito com Upcycling: garimpe jaquetas jeans grossas em brechós por R$ 30, borde uma flor gigante maravilhosa nas costas e venda por R$ 250 a R$ 350 como 'Peça Exclusiva de Moda Sustentável'! O público ama e valoriza muito!",
    "voceSabia": "A indústria da moda é a segunda mais poluente do planeta, descartando cerca de 92 milhões de toneladas de roupas por ano; o upcycling com bordado tem sido adotado pelas maiores marcas de luxo mundiais (como Gucci e Stella McCartney) como solução verde definitiva.",
    "practicalExercise": "Pegue uma peça de roupa sua que tenha uma manchinha ou furinho. Digitalize um raminho floral ou um inseto bordado (abelha, borboleta) do tamanho exato da mancha. Borde sobre o defeito e mostre o antes e depois para amigos.",
    "quickSummary": "Técnica de moda sustentável que revitaliza roupas usadas ou com pequenas avarias através de bordados computadorizados artísticos e de alto valor agregado.",
    "relatedTerms": [
      "Moda Circular",
      "Sustentabilidade (ESG)",
      "Jaqueta Jeans",
      "Camuflagem de Defeitos",
      "Patch Decorativo",
      "Redwork"
    ],
    "tags": [
      "upcycling",
      "sustentabilidade",
      "moda circular",
      "jaqueta jeans",
      "customizacao",
      "reciclagem",
      "criatividade"
    ]
  },
  {
    "id": "unidade-de-medida-e-escalas-no-bordado-mm-pol-spm",
    "code": "U-041",
    "letter": "U",
    "term": "Unidade de Medida e Escalas no Bordado (mm, Polegadas, Pontos)",
    "pronunciation": "u-ni-da-de de me-di-da e es-ca-las no bor-da-do (mi-lí-me-tros, po-le-ga-das, pon-tos)",
    "level": "Iniciante 🟢",
    "category": "Software & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Padronização metrológica internacional (SI - Sistema Internacional) e convenções industriais herdadas dos softwares de programação e mecânica têxtil.",
    "summary": "Guia de conversão e convenções numéricas essenciais no bordado: milímetros (dimensão e densidade), polegadas (telas de software), pontos e SPM/PPM (velocidade).",
    "definition": "As Unidades de Medida e Escalas no Bordado Computadorizado constituem o sistema de notação métrica e temporal utilizado para quantificar e controlar todos os aspectos da produção de matrizes e operação de máquinas. No ecossistema global do bordado, convivem o Sistema Métrico Decimal (milímetros e centímetros, padrão no Brasil, Europa e Ásia) e o Sistema Imperial (polegadas, comum nos EUA), além de unidades exclusivas do setor como Pontos (Stitches), Espaçamento de Ponto (Density em mm ou Linhas/mm) e Velocidade em PPM/SPM (Stitches Per Minute).",
    "technicalDetails": "As equivalências fundamentais no bordado são: 1) Dimensão espacial: 1 Polegada (1\") = 25,4 mm = 2,54 cm; 2) Densidade/Espaçamento de Ponto: a distância entre passadas de agulha é medida em décimos de milímetro (ex: 0,40 mm significa 2,5 linhas por milímetro); 3) Comprimento de Ponto: varia de 1,0 mm (mínimo seguro para não furar o tecido) a 12,0 mm (comprimento máximo de salto mecânico antes do corte); 4) Velocidade da máquina: expressa em Pontos Por Minuto (PPM ou SPM), variando de 400 PPM (lenta) a 1200 PPM (industrial de alta rotação).",
    "beginnerExplanation": "É a linguagem dos números no bordado. No Brasil a gente usa milímetros (mm) para medir o tamanho do bordado e a distância entre os pontinhos, e usamos 'PPM' (pontos por minuto) para falar da velocidade da máquina. Saber converter polegadas para milímetros evita que você erre feio o tamanho da matriz no computador!",
    "howItWorks": [
      "1. No software de matrizes (Wilcom, Embird, PE-Design), o programador configura as preferências para o Sistema Métrico (mm).",
      "2. Ao receber um pedido de bordado de 10 cm, ele programa exatamente 100 mm no software.",
      "3. Para a densidade do ponto cheio, configura o espaçamento padrão de 0,40 mm.",
      "4. O software calcula o total de pontos da matriz (ex: 8.500 pontos).",
      "5. A máquina é ajustada para bordar a 750 PPM.",
      "6. O tempo exato de produção é calculado: 8.500 pontos ÷ 750 PPM ≈ 11,3 minutos + tempo de trocas de linha.",
      "7. O cálculo permite precificar a matriz com precisão matemática por tempo de máquina.",
      "8. A peça sai com o tamanho exato solicitado pelo cliente."
    ],
    "applications": [
      "Configuração de preferências de trabalho em softwares de digitalização.",
      "Precificação profissional de bordados por contagem de mil pontos ou por tempo de máquina.",
      "Cálculo de rendimento e consumo de cones de linha e bobinas.",
      "Conversão de matrizes e bastidores importados com medidas em polegadas."
    ],
    "characteristics": [
      "O milímetro (mm) é a unidade universal mais precisa para controle de densidade e pull comp.",
      "Permite calcular o tempo de produção com exatidão matemática.",
      "Evita distorções de escala ao importar arquivos de diferentes plataformas."
    ],
    "commonErrors": [
      "❌ Confundir milímetros com centímetros no software e redimensionar um bordado de 10 cm para 10 mm (ficando minúsculo de 1 cm).",
      "❌ Confundir Espaçamento (Spacing em mm) com Linhas/mm: colocar valor 4.0 pensando em 0.40 mm, criando um bordado hiper-aberto.",
      "❌ Ignorar a conversão de bastidores em polegadas (ex: 4x4\" equivale a 100x100 mm, e 5x7\" equivale a 130x180 mm)."
    ],
    "troubleshootingTips": [
      "Software mostrando medidas estranhas com frações: altere a unidade de medida nas configurações do programa de 'Inches' para 'Metric (mm)'.",
      "Bordado ficando muito ralo ou muito duro: verifique a escala de densidade; o padrão universal de ponto cheio equilibrado é 0.40 mm.",
      "Bastidor não reconhecendo o tamanho do arquivo: certifique-se de que a matriz respeita a área útil real em mm do bastidor físico."
    ],
    "dicaArtrelados": "Tabela de bolso da Artrelados para bastidores em polegadas: Bastidor 4x4\" = 10x10 cm (100 mm) | Bastidor 5x7\" = 13x18 cm (130x180 mm) | Bastidor 6x10\" = 16x26 cm (160x260 mm)! Guarde essas medidas na cabeça!",
    "voceSabia": "O sistema numérico de contagem de pontos por milhar ('Preço por Mil Pontos') foi criado no Japão nos anos 1970 pela Tajima como método padrão mundial para precificar serviços terceirizados de bordado industrial.",
    "practicalExercise": "Abra seu software de bordado. Crie um quadrado de 50x50 mm. Mude a unidade de medida do software para polegadas e confira como o valor se transforma automaticamente em 1.97 x 1.97\". Retorne para milímetros.",
    "quickSummary": "Convenções métricas e conversões fundamentais no bordado (milímetros, polegadas, pontos e PPM) para controle dimensional, densidade e cálculo de produtividade.",
    "relatedTerms": [
      "Milímetros (mm)",
      "Polegadas (Inches)",
      "PPM / SPM",
      "Contagem de Pontos",
      "Espaçamento de Ponto",
      "Precificação"
    ],
    "tags": [
      "unidade de medida",
      "milimetros",
      "polegadas",
      "ppm",
      "spm",
      "densidade",
      "software",
      "precificacao"
    ]
  },
  {
    "id": "ultrassonico-corte-e-selagem-ultrassonica-de-patches",
    "code": "U-042",
    "letter": "U",
    "term": "Ultrassônico (Corte e Selagem Ultrassônica de Patches)",
    "pronunciation": "ul-tras-sô-ni-co (cór-te e se-la-gem ul-tras-sô-ni-ca de pé-txis)",
    "level": "Avançado 🔴",
    "category": "Máquinas & Equipamentos",
    "grammarClass": "Substantivo masculino / Adjetivo.",
    "origin": "Da tecnologia de sonotrodos acústicos e vibração piezoelétrica de alta frequência (acima de 20 kHz a 35 kHz) aplicada à união molecular e corte de polímeros sintéticos.",
    "summary": "Equipamento industrial de corte e selagem perimetral de emblemas e etiquetas bordadas através de ondas ultrassônicas, garantindo bordas macias e imunes a desfiamento.",
    "definition": "O Corte e Selagem Ultrassônica de Patches (Ultrasonic Patch Cutting & Edge Sealing) é a tecnologia industrial que utiliza ondas mecânicas sonoras de altíssima frequência (20.000 a 35.000 Hz) geradas por um sonotrodo de titânio contra uma bigorna de corte para fundir e cortar simultaneamente as bordas de tecidos sintéticos (poliéster, sarja e nylon). Ao contrário do corte a laser térmico convencional (que pode deixar bordas amareladas ou com rebarbas duras e queimadas), o corte ultrassônico produz uma selagem molecular a frio instantânea, resultando em contornos ultra-macios, confortáveis ao toque e 100% imunes a desfiamento.",
    "technicalDetails": "A física ultrassônica baseia-se na excitação piezoelétrica: a vibração mecânica de micro-amplitude gera atrito intermolecular apenas nas zonas de contato sob pressão, elevando a temperatura interna do poliéster até seu ponto de transição vítrea (fusão) em milissegundos. O corte pode ser executado em prensas ultrassônicas tipo 'balancim' com matrizes de navalha no formato do escudo ou em mesas de corte contínuo com bicos rotativos (Ultrasonic Rotary Cutters). Exige que o tecido e as linhas de contorno contenham no mínimo 65% a 70% de fibras termoplásticas sintéticas (poliéster ou poliamida).",
    "beginnerExplanation": "É uma máquina industrial moderna que corta em volta dos escudos e emblemas bordados usando vibrações sonoras super rápidas (que o ouvido humano nem consegue escutar). Ela corta e sela a beiradinha do bordado na mesma hora, deixando a borda do escudo super lisinha, macia e sem nenhum fiapo desfiando, sem queimar o tecido!",
    "howItWorks": [
      "1. Os patches ou emblemas são bordados em série sobre uma placa de sarja de poliéster.",
      "2. A folha com os emblemas é posicionada na mesa do aparelho ultrassônico.",
      "3. O sonotrodo acústico vibra a 35.000 vezes por segundo enquanto a ferramenta de corte contorna o emblema.",
      "4. A vibração funde instantaneamente as fibras sintéticas da borda na espessura de micrômetros.",
      "5. O patch se destaca perfeitamente cortado com borda selada e acabamento acetinado.",
      "6. A borda não pinica a pele e nunca desfia, mesmo após centenas de lavagens industriais.",
      "7. O emblema é entregue com qualidade internacional para aplicação em vestuário esportivo e militar."
    ],
    "applications": [
      "Acabamento de bordas de escudos de futebol e emblemas esportivos de alta tecnologia.",
      "Corte perimetral de etiquetas tecidas e bordadas para marcas de roupas íntimas e moda bebê.",
      "Selagem de patches militares, divisas e insígnias táticas sobre tecido de poliéster.",
      "Produção de apliques recortados de grande precisão para confecções de moda praia e fitness."
    ],
    "characteristics": [
      "Bordas seladas ultra-macias e sem pontas duras que arranham a pele.",
      "Zero marcas de queimado, fumaça ou amarelamento nas bordas brancas.",
      "Velocidade de corte altíssima e longa durabilidade das matrizes de corte acústicas."
    ],
    "commonErrors": [
      "❌ Tentar cortar tecidos 100% algodão no ultrassom (fibras naturais não fundem por vibração e continuam desfiando).",
      "❌ Aplicar pressão excessiva na bigorna, desgastando prematuramente o sonotrodo de titânio.",
      "❌ Usar velocidade de corte rápida demais sem dar tempo de fusão para a resina do tecido sintético."
    ],
    "troubleshootingTips": [
      "Bordas do patch continuando a desfiar após o corte: aumente a porcentagem de poliéster do tecido base ou reduza a velocidade de avanço da lâmina ultrassônica.",
      "Borda ficando áspera: limpe os resíduos de polímero acumulados na ponta do sonotrodo de titânio.",
      "Equipamento emitindo apito agudo: recalibre a frequência de ressonância do gerador piezoelétrico."
    ],
    "dicaArtrelados": "Para etiquetas de roupas de bebê e lingerie: o corte ultrassônico é a melhor tecnologia do mundo! Como não queima o tecido a laser, a borda do bordado fica tão macia quanto a pele do neném!",
    "voceSabia": "A tecnologia ultrassônica foi inventada para uso médico em bisturis cirúrgicos de precisão que cortam tecidos humanos estancando o sangramento por cauterização acústica simultânea, sendo adaptada para a indústria têxtil nos anos 1980.",
    "practicalExercise": "Compare com uma lupa a borda de um patch cortado a laser tradicional (borda com película vitrificada e rígida) com a borda de uma etiqueta cortada no ultrassom (borda aveludada e flexível). Sinta a diferença ao esfregar contra o pulso.",
    "quickSummary": "Tecnologia acústica de alta frequência que corta e funde perimetralmente emblemas e etiquetas sintéticas, garantindo bordas macias e livres de desfiamento.",
    "relatedTerms": [
      "Sonotrodo",
      "Selagem Térmica",
      "Corte a Laser",
      "Etiquetas Bordadas",
      "Patch Macio",
      "Polímeros Têxteis"
    ],
    "tags": [
      "ultrassonico",
      "corte",
      "selagem",
      "patches",
      "etiquetas",
      "alta tecnologia",
      "acabamento perfeito"
    ]
  },
  {
    "id": "usb-comunicacao-e-transferencia-de-matrizes-via-pendrive-e-cabo",
    "code": "U-043",
    "letter": "U",
    "term": "USB: Comunicação e Transferência de Matrizes (Pen Drive e Cabo)",
    "pronunciation": "u-es-se-bê: co-mu-ni-ca-ção e trans-fe-rên-ci-a de ma-tri-zes (pen drai-vi e ca-bo)",
    "level": "Iniciante 🟢",
    "category": "Software & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Do inglês 'Universal Serial Bus' (barramento serial universal), protocolo de comunicação de dados padrão da indústria de computadores criado em 1996.",
    "summary": "Protocolo padrão de transferência de arquivos de matrizes de bordado do computador para a máquina através de pen drives formatados em FAT32 ou cabos diretos.",
    "definition": "O sistema USB para Transferência de Matrizes (USB Embroidery Data Transfer) é o padrão físico e lógico universal que substituiu os antigos disquetes de 3,5 polegadas e cartões proprietários (PCMCIA / Compact Flash) no envio de arquivos de bordado (como .PES, .DST, .JEF, .EXP, .XXX) do computador para o painel de comando das máquinas de bordar eletrônicas. Abrange a leitura de unidades de memória flash (Pen Drives / USB Sticks) e a conexão serial direta via cabo USB (Direct-to-Machine Link).",
    "technicalDetails": "Os requisitos técnicos estritos para comunicação USB em máquinas de bordar exigem: 1) Formatação do Pen Drive obrigatoriamente no sistema de arquivos FAT32 (sistemas NTFS, exFAT ou APFS do Mac não são reconhecidos pela maioria dos painéis de máquinas); 2) Capacidade de armazenamento recomendada: pen drives pequenos de 2 GB, 4 GB ou no máximo 8 GB / 16 GB (pen drives gigantes de 64 GB a 256 GB causam lentidão extrema ou travamento do microcontrolador da máquina); 3) Nomes de arquivos curtos: sem caracteres especiais, cedilhas, acentos gráficos ou espaços (ex: usar 'FLOR_01.PES' em vez de 'Coração da Vovó!.pes'); 4) Hierarquia de pastas simples (máximo de 1 a 2 níveis de subpastas).",
    "beginnerExplanation": "É o jeito que a gente usa para passar o arquivo do bordado do computador para a máquina usando aquele 'pen drive' comum. Para a máquina ler direitinho sem dar erro, o pen drive precisa ser simples (não muito gigante), formatado em FAT32 e com os nomes dos arquivos escritos sem acentos nem caracteres esquisitos.",
    "howItWorks": [
      "1. O programador finaliza a matriz no computador e salva no formato aceito pela sua máquina (ex: .PES para Brother, .DST para Tajima/Barudan, .JEF para Janome).",
      "2. Conecta o pen drive no computador e copia o arquivo para a raiz do pen drive.",
      "3. Remove o pen drive com segurança pelo sistema operacional.",
      "4. Insere o pen drive na entrada USB lateral do painel da máquina de bordar.",
      "5. No visor da máquina, seleciona o ícone de Pen Drive / USB.",
      "6. A máquina lista os arquivos na tela com miniatura visual do bordado.",
      "7. O operador seleciona a matriz, que é carregada instantaneamente na memória interna da máquina, pronta para bordar."
    ],
    "applications": [
      "Carregamento diário de matrizes em máquinas domésticas e industriais de todas as marcas.",
      "Transferência em tempo real via cabo USB (função Direct Link em máquinas Brother, Janome e Bernina).",
      "Atualização de firmware (sistema operacional) de máquinas de bordar.",
      "Backup de segurança de matrizes favoritas na memória portátil."
    ],
    "characteristics": [
      "Padrão universal compatível com 99% das máquinas modernas fabricadas após 2005.",
      "Dispensa fios longos e computadores conectados o tempo todo ao lado da máquina.",
      "Transferência instantânea em poucos segundos."
    ],
    "commonErrors": [
      "❌ Usar pen drive de 128 GB formatado em exFAT/NTFS, fazendo a máquina travar ou dizer 'Nenhum dispositivo encontrado'.",
      "❌ Salvar o arquivo com nome cheio de acentos e símbolos (ex: 'Bordado_Coração_João#1.pes'), fazendo o arquivo sumir da tela da máquina.",
      "❌ Puxar o pen drive da máquina enquanto o arquivo está sendo lido, corrompendo a memória do pen drive."
    ],
    "troubleshootingTips": [
      "Máquina não reconhece o pen drive: formate o pen drive no computador escolhendo 'FAT32' com tamanho de alocação padrão de 4096 bytes.",
      "Arquivo de bordado sumiu e não aparece na máquina: verifique se o arquivo está na extensão correta da sua máquina (ex: Janome só lê .JEF, Brother lê .PES/DST) e encurte o nome.",
      "Tela da máquina congelando ao abrir o pen drive: você colocou milhares de arquivos juntos na mesma pasta; crie poucas pastas e deixe no máximo 20 a 30 arquivos por pasta."
    ],
    "dicaArtrelados": "Dica de ouro da Artrelados para pen drives de bordado: compre um pen drive pequenininho de 4GB ou 8GB exclusivo para a sua máquina de bordar! Nomeie seus arquivos sempre de forma simples (ex: 'LEAO_AZUL.PES') sem acentos nem ç! Sua máquina vai ler na velocidade da luz!",
    "voceSabia": "Antes do padrão USB dominar o mercado, as máquinas de bordar industriais nos anos 1980 e 1990 liam as matrizes através de fitas de papel perfuradas de 8 canais (Paper Punch Tapes), onde cada ponto do bordado era um furinho físico na fita de papel!",
    "practicalExercise": "Pegue um pen drive, conecte no computador e formate em FAT32. Crie uma pasta chamada 'TESTES' e salve um arquivo com nome curto 'TESTE01.PES'. Coloque na sua máquina e veja como o carregamento é instantâneo.",
    "quickSummary": "Padrão universal de transferência de arquivos de matrizes via pen drive formatado em FAT32 ou cabo direto, garantindo compatibilidade e leitura rápida na máquina.",
    "relatedTerms": [
      "Pen Drive (USB Stick)",
      "Formatação FAT32",
      "Extensões de Arquivo (.PES/.DST/.JEF)",
      "Firmware",
      "Memória Flash",
      "Painel de Comando"
    ],
    "tags": [
      "usb",
      "pen drive",
      "transferencia",
      "fat32",
      "formatos",
      "compatibilidade",
      "maquinas de bordar"
    ]
  },
  {
    "id": "utilizacao-de-fios-metalicos-cuidados-e-tensao-metallic-threads",
    "code": "U-044",
    "letter": "U",
    "term": "Utilização de Fios Metálicos: Cuidados e Tensão (Metallic Threads)",
    "pronunciation": "u-ti-li-za-ção de fi-os me-tá-li-cos: cui-da-dos e ten-são (me-tá-lic thréds)",
    "level": "Intermediário 🟡",
    "category": "Insumos & Materiais",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Do grego 'metallon' (metal precioso) e da evolução industrial dos fios de lamelas de poliéster metalizado com alumínio e vapor de ouro sob núcleo de poliamida/viscose.",
    "summary": "Guia completo de engenharia e operação para bordar com fios metalizados (ouro, prata e cobre) sem quebras, desfiamentos e perda de brilho.",
    "definition": "A Utilização de Fios Metálicos (Metallic Embroidery Thread Handling & Tension Setup) compreende o conjunto de técnicas mecânicas, ajustes de tensão e programação de matrizes indispensáveis para bordar com linhas metalizadas. Os fios metálicos não são fios convencionais de filamento único: são compostos por uma alma/núcleo central de poliamida ou viscose envolvida helicoidalmente por uma fita microscópica de poliéster vaporizado com alumínio metalizado e laca protetora de cor. Essa estrutura composta é altamente propensa a torções, atrito térmico, desfiamento e quebras por excesso de tensão mecânica.",
    "technicalDetails": "Para bordar com fios metálicos com 100% de estabilidade, é mandatório seguir o protocolo de ouro: 1) Redução drástica da tensão superior: afrouxar os tensores da máquina em 30% a 40% (a linha metálica deve correr com resistência mínima); 2) Uso obrigatório de Agulha Especial para Fios Metálicos (Needle Metallic / Topstitch nº 80/12 ou 90/14), que possui olhal alongado 2x maior com canaleta profunda e revestimento anti-atrito; 3) Redução de velocidade da máquina: limitar a rotação entre 500 e 600 PPM; 4) Densidade na matriz: reduzir a densidade em 15% a 20% (espaçamento de 0,44 mm a 0,48 mm), pois o fio metálico é mais volumoso que o poliéster padrão; 5) Posicionamento do cone: afastar o cone de 50 cm a 1 metro da máquina com guia de fio vertical para que as torções helicoidais do carretel se desfaçam no ar antes de entrar nos tensores.",
    "beginnerExplanation": "É o jeito certo de bordar com aquelas linhas douradas e prateadas brilhantes maravilhosas sem passar raiva com a linha quebrando a cada 30 segundos. Como a linha dourada é delicada e tem uma capinha de metal, a gente precisa afrouxar a tensão da máquina, usar a agulha certa com buraquinho grande e abaixar a velocidade da máquina para ela bordar macio.",
    "howItWorks": [
      "1. Na matriz, o programador reduz a densidade do ponto cheio para 0,45 mm e evita sobreposições pesadas.",
      "2. Instala-se na máquina uma agulha especial 'Metallic' nº 80/12 ou 90/14 nova.",
      "3. O cone de linha metálica é colocado no porta-cones (preferencialmente com redinha elástica de proteção para não desenrolar de vez).",
      "4. Afrouxam-se os discos de tensão da linha superior até que o fio corra com suavidade sedosa.",
      "5. A velocidade da máquina é reduzida para 550 PPM.",
      "6. A máquina borda de forma contínua e fluida, sem superaquecer o fio metálico no olhal da agulha.",
      "7. O bordado final reluz com brilho dourado e prateado impecável, com aspecto de joia preciosa."
    ],
    "applications": [
      "Paramentos litúrgicos religiosos, estolas sacerdotais e mantos sacros.",
      "Brasões de formatura, monogramas de casamento de luxo e toalhas de lavabo nobres.",
      "Fardamentos de gala militar, dragomas, alamares e divisas de generais.",
      "Vestidos de noiva, alta-costura, figurinos carnavalescos e sapatilhas de dança."
    ],
    "characteristics": [
      "Visual nobre e luxuoso inigualável que multiplica o valor de venda da peça.",
      "Exige redução de velocidade e agulhas com olhal alongado.",
      "Apresenta alta sensibilidade a fricção e atrito em tensores apertados."
    ],
    "commonErrors": [
      "❌ Usar agulha comum fina (75/11) com olhal pequeno, esfolando a capa dourada da linha e arrebentando a cada 10 pontos.",
      "❌ Bordar na velocidade máxima de 900 PPM, gerando calor por atrito que derrete a película metalizada.",
      "❌ Deixar a tensão apertada de linha normal de poliéster, fazendo o fio metálico estourar na primeira curva."
    ],
    "troubleshootingTips": [
      "Linha metálica desfiando e embolando antes de entrar na agulha: coloque uma redinha de proteção no cone e use uma agulha metálica nº 90/14.",
      "Linha quebrando constantemente na hora do ponto cheio: afrouxe o botão de tensão superior da máquina e reduza a velocidade para 500 PPM.",
      "Fio metálico pulando fora dos guias de linha: aumente a distância entre o cone e o primeiro passador de fio para que o fio desenrole suavemente."
    ],
    "dicaArtrelados": "O segredo supremo dos Fios Metálicos da Artrelados: coloque uma redinha elástica no cone de linha dourada, use uma agulha Metallic 90/14 (que tem o buraco grandão!) e abaixe a velocidade da máquina para 550 PPM! Você vai bordar ouro o dia inteiro sem a linha arrebentar nenhuma vez!",
    "voceSabia": "Na Idade Média, os bordados metálicos eram feitos com fios de ouro e prata puros martelados à mão por ourives até ficarem finos como fios de cabelo (técnica do 'Fio Tirado de Ouro'), sendo acessíveis apenas a reis, imperadores e papas.",
    "practicalExercise": "Borde um monograma de 50 mm com linha dourada metálica. Primeiro tente bordar a 850 PPM com agulha comum 75/11. Depois troque para agulha Metallic 90/14, afrouxe a tensão e borde a 550 PPM. Compare a facilidade de costura e o brilho final.",
    "quickSummary": "Protocolo técnico de ajustes de tensão frouxa, redução de velocidade, agulhas com olhal ampliado e densidade moderada para bordar perfeitamente com fios metalizados.",
    "relatedTerms": [
      "Linha Metálica",
      "Agulha Metallic / Topstitch",
      "Tensão Superior",
      "Redinha de Cone",
      "Redução de Velocidade (PPM)",
      "Alta Costura"
    ],
    "tags": [
      "fio metalico",
      "linha dourada",
      "linha prateada",
      "agulha metallic",
      "tensao",
      "luxo",
      "alta costura"
    ]
  },
  {
    "id": "uniao-de-partes-em-grandes-bordados-multi-hooping-e-alinhamento",
    "code": "U-045",
    "letter": "U",
    "term": "União de Partes em Grandes Bordados (Multi-Hooping e Alinhamento)",
    "pronunciation": "u-ni-ão de par-tes em gran-des bor-da-dos (múl-ti hu-ping e a-li-nha-men-to)",
    "level": "Avançado 🔴",
    "category": "Software & Digitalização",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Técnica de divisão matricial desenvolvida para contornar a limitação física do campo útil de bastidores em máquinas domésticas e industriais.",
    "summary": "Método de divisão de matrizes gigantes em seções menores com marcadores de registro cruzados para bordar peças de grande formato através de múltiplos enquadramentos.",
    "definition": "A União de Partes em Grandes Bordados (Multi-Hooping / Divisão Matricial e Reenquadramento) é a técnica avançada de engenharia de software e produção mecânica que permite bordar composições de grande formato (como colchas de cama de 50x80 cm, estandartes, toalhas de mesa e jaquetas de grande área) em máquinas cujo bastidor físico máximo possui dimensões limitadas (como bastidores 13x18 cm ou 16x26 cm). O desenho original é fatiado no software em múltiplos arquivos correlacionados (Parte A, Parte B, Parte C), cada um contendo pontos de alinhamento e cruzetas de registro milimétricas.",
    "technicalDetails": "A execução do Multi-Hooping exige rigor metrológico: 1) Planejamento da Linha de Divisão: as junções nunca devem cortar colunas de ponto cheio ou rostos humanos ao meio; devem ser escondidas sob contornos, folhas ou ramificações naturais; 2) Cruzetas de Registro (Registration Marks / Alignment Crosses): cada seção deve bordar 2 a 3 pontos em cruz (+) no final, que servirão de mira laser ou de agulha para o início exato da seção seguinte; 3) Tolerância de alinhamento: erro máximo admissível menor que 0,3 mm para evitar emendas perceptíveis a olho nu; 4) Uso de bastidores de posicionamento contínuo ou gabaritos de acrílico com mira milimetrada.",
    "beginnerExplanation": "É o jeito inteligente de fazer um bordado gigante (daqueles maiores que o tamanho do seu bastidor) dividindo o desenho em pedaços no computador. A máquina borda a primeira parte com duas cruzinhas de mira, depois você muda a posição da toalha no bastidor, alinha a agulha exatamente em cima da cruzinha e borda a segunda parte, emendando tudo com perfeição sem parecer que foi dividido!",
    "howItWorks": [
      "1. No software de matrizes, o programador carrega o desenho gigante (ex: ramo de flores de 40 cm de comprimento).",
      "2. Utiliza a ferramenta 'Multi-Hooping' ou divide manualmente o desenho em 2 ou 3 partes que caibam no bastidor da máquina.",
      "3. O software insere cruzetas de alinhamento (+) na extremidade da Parte 1 e no início da Parte 2.",
      "4. A peça de tecido é montada no bastidor e a máquina borda a Parte 1 e as cruzetas de mira.",
      "5. A peça é retirada do bastidor e reenquadrada na nova posição adjacente.",
      "6. O operador move o bastidor no painel até a agulha descer exatamente no centro da cruzeta bordada anteriormente.",
      "7. A máquina borda a Parte 2, conectando perfeitamente os galhos e flores em uma única obra contínua.",
      "8. As cruzetas de registro são desmanchadas com facilidade no final."
    ],
    "applications": [
      "Bordados contínuos em barras de lençóis de casal, colchas e toalhas de mesa compridas.",
      "Estandartes religiosos, bandeiras de agremiações e mantos sacros.",
      "Bordados gigantes de costas de jaquetas de motoqueiros em máquinas domésticas.",
      "Bordas infinitas (Endless Embroidery) em cortinas e toalhas de banho.",
      "Composições florais panorâmicas em painéis de decoração têxtil."
    ],
    "characteristics": [
      "Quebra a barreira física do tamanho do bastidor da sua máquina.",
      "Permite que máquinas de bastidor pequeno façam trabalhos de grande escala.",
      "Exige paciência, precisão milimétrica e excelente visão de alinhamento."
    ],
    "commonErrors": [
      "❌ Cortar o desenho no meio de um tatami ou ponto cheio liso, deixando uma linha de emenda feia visível.",
      "❌ Não usar cruzetas de registro e tentar alinhar a segunda parte 'no olho', resultando em desenhos tortos e desconectados.",
      "❌ Esticar o tecido de forma diferente no segundo enquadramento, fazendo as medidas não baterem."
    ],
    "troubleshootingTips": [
      "Segunda parte ficando afastada ou sobreposta em 1 mm: utilize a função de rotação e deslocamento fino de 0.1 mm no painel da máquina antes de costurar.",
      "Dificuldade de enxergar o centro da cruzeta: use a luz laser de mira da máquina ou abaixe a agulha manualmente com o volante para tocar o furo.",
      "Tecido deformando entre os enquadramentos: use entretela contínua e cole o tecido com cola spray temporária sem puxar a trama."
    ],
    "dicaArtrelados": "Dica infalível para Multi-Hooping: esconda a divisão das partes em lugares naturais (na junção de um galho, debaixo de uma folha ou entre duas letras)! Ninguém no mundo vai descobrir que o bordado gigante foi feito em duas vezes!",
    "voceSabia": "A famosa Tapeçaria de Bayeux, bordada no século XI na França com 70 metros de comprimento, foi confeccionada exatamente pelo princípio ancestral do Multi-Hooping, unindo nove painéis de linho de 8 metros bordados separadamente por freiras em mosteiros diferentes!",
    "practicalExercise": "Pegue um ramo de flores longo de 25 cm. Divida em dois arquivos de 13 cm no software com duas cruzetas de registro. Borde a Parte 1 em um tecido, reenquadre o bastidor, alinhe pela cruzeta e borde a Parte 2. Analise a união das linhas com uma lupa.",
    "quickSummary": "Metodologia de divisão e reenquadramento de matrizes de grande porte com cruzetas de registro milimétricas, permitindo bordar peças gigantes em bastidores limitados.",
    "relatedTerms": [
      "Multi-Hooping",
      "Cruzeta de Registro",
      "Reenquadramento de Bastidor",
      "Bordado Infinito (Endless)",
      "Alinhamento a Laser",
      "Grande Formato"
    ],
    "tags": [
      "multi-hooping",
      "divisao",
      "alinhamento",
      "bastidor",
      "grande formato",
      "cruzeta de registro",
      "tecnicas avancadas"
    ]
  },
  {
    "id": "unidade-de-enrolamento-e-bobinadores-automaticos-bobbin-winder",
    "code": "U-058",
    "letter": "U",
    "term": "Unidade de Enrolamento e Bobinadores Automáticos (Bobbin Winder Assembly)",
    "pronunciation": "u-ni-da-de de en-ro-la-men-to e bo-bi-na-do-res au-to-má-ti-cos (bó-bin uain-der as-sêm-bli)",
    "level": "Iniciante 🟢",
    "category": "Máquinas & Equipamentos",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Mecanismos de fuso rotativo de alta velocidade com distribuidor oscilante para carregamento cilíndrico uniforme de canelinhas em confecções.",
    "summary": "Dispositivo integrado ou de bancada independente para enrolar canelinhas de bobina com tensão calibrada, velocidade constante e parada automática.",
    "definition": "A Unidade de Enrolamento de Bobinas (Automatic Bobbin Winder / Enrolador Independente de Canelinhas) compreende o motor auxiliar, fuso de encaixe metálico, discos tensores de precisão e haste de desarme automático por diâmetro. É responsável por encher as canelinhas (carretilhas metálicas ou plásticas) com linha de bobina de poliéster nº 60 a 120 com tensão homogênea, sem formar barrigas, folgas ou espirais irregulares.",
    "technicalDetails": "A física do bobinamento perfeito exige: 1) Tensão constante durante todo o ciclo: se a canelinha for enrolada muito apertada, o carretel deforma e a linha estica além do limite elástico; se for enrolada muito frouxa, a linha entra por baixo das camadas vizinhas e tranca a caixa de bobina; 2) Distribuição uniforme por guia helicoidal que sobe e desce em ritmo sincronizado, preenchendo as laterais por igual; 3) Parada automática com preenchimento de 80% a 85% do volume total da canelinha (evitando que a carretilha cheia encoste nas paredes da caixa de bobina); 4) Em ateliês de alto volume, utilizam-se bobinadores externos independentes com capacidade de 5 a 10 carretilhas simultâneas.",
    "beginnerExplanation": "É o 'enchedor de canelinha' da máquina. É a pecinha com motorzinho que enrola a linha branca na carretilha pequenininha. Para o bordado sair perfeito, a canelinha precisa ser cheia de forma retinha, sem ficar gorda de um lado e magra do outro, e sem encher até transbordar!",
    "howItWorks": [
      "1. A linha do cone grande de bobina é passada pelo guia de fio e pelos discos tensores do enchedor.",
      "2. A ponta da linha é passada pelo buraquinho da canelinha vazia.",
      "3. A canelinha é encaixada no fuso do bobinador.",
      "4. Empurra-se a haste do bobinador para a direita ou aciona-se o botão do enrolador independente.",
      "5. O motor gira o fuso a mais de 3.000 RPM, preenchendo a carretilha com camadas cruzadas perfeitas.",
      "6. A haste de medição encosta na camada externa de linha e desarma o motor automaticamente a 85% da capacidade.",
      "7. A linha é cortada na lâmina lateral e a canelinha está pronta para o trabalho.",
      "8. A canelinha cheia com tensão homogênea garante avessos perfeitos durante milhares de pontos."
    ],
    "applications": [
      "Enchimento de dezenas de canelinhas antes de iniciar grandes produções de bordado.",
      "Enrolamento de linhas coloridas especiais na bobina para técnicas de bordado reverso ou laçadas.",
      "Uso de enroladores elétricos externos em máquinas industriais enquanto a máquina está bordando.",
      "Padronização da densidade e maciez da linha inferior."
    ],
    "characteristics": [
      "Motor independente que não consome energia do motor principal de costura.",
      "Desarme mecânico ou óptico automático ao atingir o diâmetro limite.",
      "Discos de tensão dedicados com parafuso de micro-ajuste de aperto."
    ],
    "commonErrors": [
      "❌ Encher a canelinha até a borda externa transbordar, fazendo a carretilha raspar na tampa plástica e travar.",
      "❌ Passar a linha fora dos pratinhos tensores do enchedor, enchendo a carretilha fofa como um algodão-doce.",
      "❌ Usar canelinhas com bordas amassadas ou trincadas que giram desbalanceadas no fuso."
    ],
    "troubleshootingTips": [
      "Canelinha enchendo com formato de cone (mais cheia em cima do que embaixo): solte o parafuso do tensor do enchedor e suba ou abaixe a haste guia em 1 mm.",
      "Linha inferior embolando embaixo do bordado: a canelinha foi enrolada muito frouxa; enrole novamente passando a linha firme entre os pratinhos tensores.",
      "Enchedor não gira ao empurrar a haste: borracha de atrito do fuso gasta; substitua o anel de borracha (bobbin winder tire)."
    ],
    "dicaArtrelados": "Para saber se a sua canelinha foi bem cheia: aperte com o polegar! Ela deve estar firminha e durinha como um pneu cheio, sem afundar como esponja e sem estar deformada! Canelinha bem enrolada é sinônimo de bordado sem dor de cabeça!",
    "voceSabia": "Nas grandes indústrias de bordado, o uso de enroladores manuais foi amplamente substituído por caixas de 'Canelinhas Pré-Enroladas Magnéticas' (Magnetic Pre-Wound Bobbins), que são enroladas em fábricas com precisão robótica e rendem 30% mais linha que uma canelinha normal!",
    "practicalExercise": "Enrole duas canelinhas: uma passando a linha solta sem o tensor e outra passando corretamente pelo disco tensor. Aperte as duas com os dedos e sinta a diferença de densidade. Coloque na máquina e compare o avesso do ponto cheio.",
    "quickSummary": "Dispositivo mecânico rotativo com controle de tensão e desarme automático que abastece carretilhas de bobina com enrolamento cilíndrico uniforme.",
    "relatedTerms": [
      "Canelinha / Carretilha",
      "Linha de Bobina",
      "Discos Tensores",
      "Desarme Automático",
      "Pre-Wound Bobbins",
      "Caixa de Bobina"
    ],
    "tags": [
      "bobinador",
      "enchedor de canelinha",
      "carretilha",
      "tensao de bobina",
      "mecanica",
      "acessorios"
    ]
  },
  {
    "id": "unidade-de-leitor-optico-e-mira-laser-crosshair-laser-pointer",
    "code": "U-059",
    "letter": "U",
    "term": "Unidade de Mira Laser e Ponteiro de Posicionamento (Crosshair Laser Pointer)",
    "pronunciation": "u-ni-da-de de mi-ra la-ser e pon-tei-ro de po-si-ci-o-na-men-to (crós-réar lei-zer poin-ter)",
    "level": "Iniciante 🟢",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Adaptação de diodos emissores de luz laser semicondutores (comprimento de onda 635-650 nm, cor vermelha ou verde) para mira óptica milimétrica em máquinas industriais.",
    "summary": "Dispositivo óptico de diodo laser que projeta um ponto ou cruzeta luminosa sobre o tecido, indicando o local exato onde a agulha vai descer.",
    "definition": "A Unidade de Mira Laser e Posicionamento Óptico (Embroidery Crosshair Laser Alignment Pointer / Red Dot Sight) é o acessório óptico-eletrônico acoplado ao cabeçote da máquina de bordar. Projeta um feixe de luz laser de alta visibilidade em formato de ponto ou cruz (+) diretamente sobre a superfície do tecido, coincidindo exatamente com o centro geométrico da descida da agulha nº 1.",
    "technicalDetails": "A precisão do laser de alinhamento decorre de: 1) Calibração de Paralaxe: o diodo laser é ajustado através de dois parafusos micrométricos de ângulo para convergir a projeção óptica com o furo da chapa de agulha na altura exata do tecido; 2) Projeção em Cruz (Crosshair Projection): permite alinhar não apenas a posição central (X/Y), mas também a rotação e o esquadro da peça em relação aos fios do tecido; 3) Integração com o painel: o laser pode acender automaticamente durante o comando de 'Traçado de Bastidor' (Trace) e apagar durante a costura.",
    "beginnerExplanation": "É a 'mira laser' da máquina de bordar (uma cruzinha ou pontinho vermelho brilhante que acende em cima da roupa). Ela mostra com precisão exata onde a agulha vai furar o pano antes de começar a costurar, facilitando colocar o nome no bolso ou centralizar o bordado sem precisar ficar adivinhando no olho!",
    "howItWorks": [
      "1. A peça a ser bordada (ex: bolso de camisa com marcação de giz) é montada no bastidor.",
      "2. O operador aciona o botão de 'Laser' no painel de comando.",
      "3. Uma cruzeta vermelha brilhante é projetada sobre o tecido.",
      "4. Usando as setas do visor, o operador move o bastidor até a cruz de luz coincidir perfeitamente com a marca de giz no bolso.",
      "5. Pressiona a função 'Definir Ponto Zero' (Origin / Set Origin).",
      "6. A máquina assume aquele ponto como o início do bordado.",
      "7. O operador aciona o traçado de contorno: o feixe laser 'desenha' o perímetro do bordado sobre o tecido.",
      "8. Ao iniciar o bordado, o laser apaga e a agulha desce com precisão cirúrgica no local exato."
    ],
    "applications": [
      "Centralização de nomes sobre bolsos de camisas sociais e jalecos.",
      "Alinhamento perfeito em múltiplos enquadramentos (Multi-Hooping) e emendas.",
      "Posicionamento de bordados em peças prontas com costuras e detalhes existentes.",
      "Conferência rápida da área de segurança para não bater o calcador no aro do bastidor."
    ],
    "characteristics": [
      "Visibilidade perfeita mesmo sob a iluminação forte de lâmpadas LED do ateliê.",
      "Elimina a necessidade de descer a agulha com a mão para conferir o furo.",
      "Aumenta a velocidade de preparação da máquina em até 60%."
    ],
    "commonErrors": [
      "❌ Olhar diretamente para a lente do feixe laser a curta distância, o que pode prejudicar a visão.",
      "❌ Bater no suporte do laser com o bastidor e descalibrar o ponto de mira em relação à agulha.",
      "❌ Confiar na mira laser sem antes calibrar a convergência na altura correta do tecido."
    ],
    "troubleshootingTips": [
      "Ponto laser caindo 2 mm ao lado do furo da agulha: solte os parafusos laterais do suporte do laser e recalibre a mira com a agulha abaixada no furo.",
      "Laser fraco ou apagado: limpe a lente óptica com um cotonete seco ou substitua a fonte de alimentação do diodo.",
      "Linha da cruz laser torta: gire o anel frontal da lente difratora do laser até alinhar o esquadro com a mesa."
    ],
    "dicaArtrelados": "A mira laser é a melhor amiga do bordador de jalecos! Faça uma marquinha de giz em cruz no bolso do jaleco, coloque a cruz de luz laser bem em cima e dê start! O nome vai sair perfeitamente retinho e centralizado no bolso, toda vez!",
    "voceSabia": "A tecnologia de miras laser em cruz foi adaptada de sistemas de miras ópticas de precisão de equipamentos médicos cirúrgicos e armas de precisão para a indústria de máquinas de costura no final dos anos 1990!",
    "practicalExercise": "Ligue a mira laser da sua máquina. Abaixe a agulha com o volante até encostar no tecido. Verifique se o ponto luminoso vermelho coincide 100% com o furo da agulha. Se houver desvio, ajuste os parafusos de calibração.",
    "quickSummary": "Dispositivo óptico que projeta um ponto ou cruzeta laser sobre o tecido para alinhamento milimétrico, centralização e conferência do perímetro do bordado.",
    "relatedTerms": [
      "Mira Laser (Crosshair)",
      "Ponto Zero / Origem",
      "Traçado de Bastidor",
      "Alinhamento Óptico",
      "Paralaxe",
      "Centralização"
    ],
    "tags": [
      "mira laser",
      "laser",
      "posicionamento",
      "centralizacao",
      "alinhamento",
      "precisao",
      "ferramentas"
    ]
  },
  {
    "id": "unidade-de-cabeçote-de-lantejoulas-e-paetes-sequin-device",
    "code": "U-060",
    "letter": "U",
    "term": "Unidade de Cabeçote de Lantejoulas e Paetês (Automatic Sequin Device)",
    "pronunciation": "u-ni-da-de de ca-be-ço-te de lan-te-jou-las e pa-e-tês (ó-to-má-tik sí-cuin di-vai-ce)",
    "level": "Avançado 🔴",
    "category": "Máquinas & Equipamentos",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Engenharia mecatrônica desenvolvida pela Tajima e Barudan no Japão para alimentação automática e costura contínua de fitas de lantejoulas perfuradas nos anos 1990.",
    "summary": "Módulo mecatrônico acoplado ao cabeçote que alimenta, corta e costura automaticamente lantejoulas e paetês coloridos a até 1.000 peças por minuto.",
    "definition": "A Unidade de Cabeçote de Lantejoulas e Paetês (Automatic Sequin / Paillette Embroidery Attachment) é o dispositivo periférico de alta precisão instalado na lateral do cabeçote de bordar. É responsável por puxar fitas plásticas contínuas de lantejoulas com orifício central (em rolos de milhares de unidades, com diâmetros de 2 mm a 9 mm), avançar uma lantejoula por ciclo, guilhotiná-la da fita e posicioná-la exatamente sob a agulha para ser fixada com pontos de travamento em formato de estrela, cruz ou três pontas.",
    "technicalDetails": "O funcionamento do Sequin Device engloba: 1) Motor de passo de tração de microfita com pino arrastador que encaixa no orifício da lantejoula; 2) Navalha de cisalhamento pneumática ou acionada por solenoide de alta velocidade; 3) Dispositivo Sequin Duplo/Quádruplo (Twin / Quad Sequin): capaz de alternar entre 2 a 4 tamanhos ou cores diferentes de lantejoulas no mesmo bordado sem parar a máquina; 4) Programação matricial com comandos dedicados de avanço (Sequin Drop) e amarração em ponto de haste ou triângulo.",
    "beginnerExplanation": "É um 'aparelho de colocar lantejoulas' que a gente instala na máquina de bordar. Ele segura um rolo gigante de fitas brilhantes, vai cortando lantejoula por lantejoula super rápido e a agulha da máquina vai costurando cada uma no pano com pontinhos perfeitos, criando desenhos de brilho de festa e carnaval sem você precisar pregar nada na mão!",
    "howItWorks": [
      "1. Um rolo com milhares de lantejoulas em fita (ex: dourada de 5 mm) é encaixado no carretel superior.",
      "2. A fita é guiada pelo canal até a ponta da navalha do aparelho.",
      "3. O software emite o comando especial de código de lantejoula (Sequin Code).",
      "4. O motor de passo do aparelho avança a fita exatamente 5 mm.",
      "5. A navalha corta a micro-haste plástica que une as lantejoulas.",
      "6. A lantejoula solta fica posicionada sob o calcador especial.",
      "7. A agulha desce pelo buraquinho central da lantejoula e faz 3 pontos em triângulo no tecido.",
      "8. O processo se repete a até 800 a 1.000 lantejoulas por minuto, cobrindo vestidos e fantasias com brilho deslumbrante."
    ],
    "applications": [
      "Vestidos de festa, figurinos de dança, alta-costura e fantasias de Carnaval.",
      "Moda infantil interativa com lantejoulas reversíveis (efeito 'vai-e-vem' de mudança de desenho).",
      "Customização de peças de luxo, moda praia e bolsas femininas.",
      "Emblemas e logos esportivos de equipes com detalhes reflexivos brilhantes."
    ],
    "characteristics": [
      "Velocidade de costura impressionante com acabamento mecânico ultra-firme.",
      "Disponível em versões simples, duplas e de lantejoulas reversíveis (Flip Sequin).",
      "Requer matrizes digitalizadas com parâmetros e comandos específicos de lantejoula."
    ],
    "commonErrors": [
      "❌ Usar fitas de lantejoulas baratas com orifícios descentralizados, fazendo a agulha bater no plástico rígido e quebrar.",
      "❌ Esquecer de ativar a função de 'Elevação do Calcador' para evitar arranhar a superfície espelhada dos paetês.",
      "❌ Pressionar ferro de passar muito quente em cima das lantejoulas prontas, derretendo o plástico."
    ],
    "troubleshootingTips": [
      "Agulha quebrando ao descer na lantejoula: calibre o passo de avanço do motor do alimentador para centralizar o furo da lantejoula na agulha.",
      "Lantejoulas caindo após o bordado: a matriz foi programada com apenas 1 ponto de fixação; altere na digitalização para amarração de 3 pontas (Triangle Stitch).",
      "Navalha mastigando a fita sem cortar: limpe o pó plástico da lâmina ou afie a faca de corte do Sequin Device."
    ],
    "dicaArtrelados": "Para fazer aquelas camisetas infantis de 'lantejoula mágica' que mudam de cor ao passar a mão: utilize o cabeçote de lantejoula especial para 'Flip Sequin' e programe a fixação com ponto único de sobreposição escamada! É um sucesso absoluto de vendas!",
    "voceSabia": "As primeiras lantejoulas da história foram encontradas costuradas com fios de ouro nas roupas mortuárias do faraó Tutancâmon no Egito Antigo (1323 a.C.), feitas com pequenos discos de ouro e prata polidos à mão!",
    "practicalExercise": "Abra seu software de matrizes (Wilcom ou Tajima DG/ML). Localize a ferramenta 'Sequin / Lantejoula'. Desenhe um contorno e veja como o software distribui os círculos com os pontos de amarração em triângulo ao redor do orifício central.",
    "quickSummary": "Módulo mecatrônico de cabeçote que traciona, corta e costura automaticamente lantejoulas e paetês em alta velocidade para moda de luxo e festa.",
    "relatedTerms": [
      "Sequin Device",
      "Paetês / Lantejoulas",
      "Ponto Triângulo",
      "Flip Sequin (Reversível)",
      "Twin Sequin",
      "Alta-Costura"
    ],
    "tags": [
      "lantejoula",
      "paete",
      "sequin device",
      "brilho",
      "carnaval",
      "alta costura",
      "acessorios mecanicos"
    ]
  },
  {
    "id": "unidade-de-dispositivo-de-cordao-fitas-e-chenille-coiling-cording",
    "code": "U-061",
    "letter": "U",
    "term": "Unidade de Dispositivo de Cordão, Fitas e Chenille (Cording & Coiling Device)",
    "pronunciation": "u-ni-da-de de dis-po-si-ti-vo de cor-dão, fi-tas e che-ni-le (cór-ding e cói-ling di-vai-ce)",
    "level": "Avançado 🔴",
    "category": "Máquinas & Equipamentos",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Evolução dos teares mecânicos de passamanaria e cabeçotes de bordado de ponto esponja/chenille (Moss Stitch / Chain Stitch) na França e Alemanha no século XIX.",
    "summary": "Cabeçote ou dispositivo auxiliar de costura contínua de cordões espessos, fitas de cetim, soutache e fios felpudos aveludados estilo Chenille.",
    "definition": "A Unidade de Dispositivo de Cordão, Fitas e Chenille (Automatic Cording, Taping, Coiling & Chenille Attachment) é o conjunto de cabeçotes especiais rotativos ou dispositivos periféricos projetados para aplicar materiais decorativos tridimensionais grossos sobre o tecido. Abrange desde o Cording (costura de cordões e soutache através de guia de alimentação e ponto zig-zag de fixação) e o Taping (aplicação de fitas planas de cetim) até o Chenille / Ponto Esponja (onde uma agulha especial com gancho inferior forma laçadas aveludadas de alta densidade sem linha de bobina).",
    "technicalDetails": "A mecânica especializada compreende: 1) Guia rotativo motorizado de 360 graus que gira a alimentação do cordão acompanhando a direção angular exata do movimento do pantógrafo; 2) Bocal de alimentação com diâmetros intercambiáveis (de 1,0 mm para soutache fino até 4,0 mm para cordas trançadas); 3) Costura de ancoragem com linha monofilamento de poliamida transparente (nylon invisível) ou linha de poliéster nº 60 correspondente; 4) No cabeçote de Chenille puro: operação com agulha tubular e bico inferior que corta ou puxa as laçadas para formar o aspecto felpudo de casacos universitários norte-americanos (Letterman Jackets).",
    "beginnerExplanation": "É um aparelho especial que você coloca na máquina de bordar para ela costurar cordões grossos, fitas brilhantes e fazer aquele bordado fofinho e aveludado (estilo casaco de faculdade americano, o famoso bordado Chenille). A máquina vai desenhando com o próprio cordão e prendendo tudo no tecido com pontinhos invisíveis!",
    "howItWorks": [
      "1. O rolo de cordão grosso ou fita é posicionado no suporte giratório superior.",
      "2. O cordão é enfiado pelo tubo do guia rotativo até a base do calcador especial.",
      "3. O software envia a matriz com a trajetória vetorial contínua de cordão.",
      "4. Conforme o bastidor se move, o motor do dispositivo gira o bocal 360° apontando sempre para a direção da curva.",
      "5. A agulha oscila em ponto zig-zag rápido, 'abraçando' o cordão e costurando-o firmemente no tecido.",
      "6. No caso do Chenille, a agulha de gancho forma laçadas contínuas que criam uma textura fofa como um tapete aveludado.",
      "7. O resultado é uma peça rica em texturas táteis tridimensionais de alto luxo."
    ],
    "applications": [
      "Casacos universitários com letras felpudas em Chenille (Varsity / Letterman Jackets).",
      "Bordados em vestidos de alta-costura com fitas de cetim e passamanarias de soutache.",
      "Almofadas de luxo, cortinas e tapeçarias decorativas de interiores.",
      "Brasões com cordões dourados em relevo para uniformes militares e eclesiásticos."
    ],
    "characteristics": [
      "Acabamento tátil com relevo real muito superior ao bordado tradicional de linhas.",
      "Grande economia de pontos (o cordão grosso preenche áreas enormes com poucos pontos de costura).",
      "Agrega altíssimo valor estético e comercial aos produtos de moda."
    ],
    "commonErrors": [
      "❌ Fazer curvas muito fechadas de 90° em velocidade alta, fazendo o cordão escapar do bocal do calcador.",
      "❌ Usar linha de costura grossa e de cor contrastante que fica visível e feia por cima do cordão.",
      "❌ Não calibrar a altura do calcador, prensando e esmagando a textura fofa do cordão ou da fita."
    ],
    "troubleshootingTips": [
      "Cordão soltando do tecido: aumente a largura do ponto zig-zag de fixação para garantir que a agulha atravesse os dois lados do cordão.",
      "Bocal do cordão raspando no tecido: eleve a haste guia do dispositivo em 0.5 mm.",
      "Fita de cetim torcendo nas curvas: reduza a velocidade da máquina para 450 PPM e utilize o guia com aba larga específica para fitas planas."
    ],
    "dicaArtrelados": "Para costurar cordões coloridos com acabamento invisível de alta-costura: use na agulha superior uma linha de poliamida transparente (fio de nylon 100% invisível nº 0.08 mm)! O cordão fica perfeitamente preso e ninguém enxerga nenhum ponto de costura por cima!",
    "voceSabia": "O nome 'Chenille' vem da palavra francesa para 'lagarta peluda' (chenille), porque o aspecto dos fios de lã aveludados e fofinhos do bordado lembrava exatamente o corpo felpudo de uma lagarta da seda!",
    "practicalExercise": "Examine uma jaqueta com letra bordada em Chenille ou um aplique com cordão de soutache. Sinta a textura fofa com as pontas dos dedos e observe por trás como a estrutura de laçadas é construída sem linha de bobina.",
    "quickSummary": "Dispositivo rotativo motorizado que aplica cordões, fitas e relevos aveludados de Chenille sobre o tecido, conferindo riqueza tátil e alto valor estético.",
    "relatedTerms": [
      "Bordado Chenille (Ponto Esponja)",
      "Cording (Bordado com Cordão)",
      "Taping (Bordado com Fita)",
      "Soutache",
      "Fio Invisível",
      "Varsity Jacket"
    ],
    "tags": [
      "cordao",
      "chenille",
      "fitas",
      "cording",
      "soutache",
      "relevo tatil",
      "alta costura"
    ]
  },
  {
    "id": "ultra-density-satin-satim-ultra-densidade",
    "code": "U-062",
    "letter": "U",
    "term": "Ultra-Density Satin — Satim de Ultra-Densidade (Microbordado de Alta Definição & Linhas Finas #60/#75)",
    "pronunciation": "ul-tra den-si-ti sé-tin — sa-tim de ul-tra den-si-da-de",
    "level": "Avançado 🔴",
    "category": "Pontos & Estruturas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim ultra (além de, extremo) e densitas (concentração). Técnica de programação de alta definição desenvolvida na Suíça e Japão para microletras e heráldica militar.",
    "summary": "Configuração de satim com densidade ultrafechada (espaçamento de 0,25 a 0,30 mm) combinada a linhas finas para bordar microdetalhes e brasões com nitidez milimétrica.",
    "definition": "O Ultra-Density Satin (Satim de Ultra-Densidade / Ponto Cheio de Alta Resolução / Micro-Satin Stitching) é a técnica de digitalização avançada onde o espaçamento entre as passagens de linha é configurado em valores submétricos entre 0,25 mm e 0,32 mm (em contraste com os 0,40 mm convencionais). Essa densidade extrema é obrigatoriamente combinada com o uso de linhas ultrafinas de espessura #60 ou #75 (como Madeira Polyneon 60 ou Gunold Filaine Micro) e agulhas especiais de calibre fino (60/8 ou 65/9), permitindo bordar textos com apenas 2,5 mm a 3,5 mm de altura e detalhes heráldicos microscópicos sem aglomeração ou rompimento de tecido.",
    "technicalDetails": "Exige compensação de repuxo milimétrica (Pull Compensation reduzida para 0,15 mm a 0,20 mm) e subpontos ultraleves (Center Run fino com passo de 1,5 mm). Se aplicado com linha padrão #40, o satim de ultra-densidade corta o tecido como uma serra mecânica (efeito 'Cookie Cutter') e quebra agulhas devido ao empilhamento excessivo de filamentos.",
    "beginnerExplanation": "É uma configuração especial do ponto cheio para bordar letrinhas minúsculas e brasões com detalhes quase invisíveis! Como a gente usa uma linha bem fininha (como um fio de cabelo) e uma agulha bem fininha, a máquina precisa dar os pontinhos muito mais juntinhos para cobrir o tecido perfeitamente e deixar o desenho legível e afiado.",
    "howItWorks": [
      "1. O programador seleciona a fonte ou vetor de microletras no software CAD.",
      "2. Reduz o espaçamento do satim para 0,28 mm e desativa subpontos pesados.",
      "3. Instala uma agulha fina 65/9 (Microtex ou ponta bola fina) no cabeçote da máquina.",
      "4. Abastece a linha superior com fio fino de poliéster nº 60 ou 75 e linha de bobina fina nº 80.",
      "5. Ajusta a velocidade da máquina para 600–700 PPM para garantir precisão dinâmica.",
      "6. A máquina costura os micropontos com extrema nitidez sem perfurar excessivamente a base têxtil.",
      "7. O resultado é um microtexto perfeitamente nítido e legível como se tivesse sido impresso em gráfica."
    ],
    "applications": [
      "Microletras em uniformes médicos, crachás militares e etiquetas de marcas de luxo (alturas de 2,5 a 4 mm).",
      "Brasões familiares, selos de garantia e escudos com pequenos leões e coroas heráldicas.",
      "Assinaturas de estilistas e monogramas delicados em punhos de camisas sociais nobres.",
      "Detalhes de olhos, íris e traços fisionômicos em bordados de rostos fotorrealistas."
    ],
    "characteristics": [
      "Nitidez e legibilidade absoluta em escalas microscópicas.",
      "Toque macio e plano sem criar nós volumosos ou 'bolhas' de linha.",
      "Exige o casamento perfeito de linha fina (#60/#75), agulha fina (65/9) e matriz ajustada."
    ],
    "commonErrors": [
      "❌ Aplicar satim de ultra-densidade (0,25 mm) usando linha comum grossa nº 40, furando e rasgando o tecido.",
      "❌ Manter subponto duplo pesado em letras de 3 mm, quebrando a agulha por acúmulo de linha.",
      "❌ Bordar microletras em alta velocidade (1.000 PPM), gerando vibração mecânica e distorção dos caracteres."
    ],
    "troubleshootingTips": [
      "As letras minúsculas viraram uma mancha empelotada de linha: você está usando linha grossa #40; troque imediatamente pela linha fina nº 60 ou 75 e diminua a tensão da linha superior.",
      "A agulha está cortando o tecido e fazendo um buraco: aumente o espaçamento do satim de 0,25 mm para 0,32 mm e utilize entretela de corte limpo (Cut-Away) dupla.",
      "Pontas das letras saindo arredondadas e sem definição: ative a compensação de cantos agudos (Smart Corners / Sharp Corners) no software de digitalização."
    ],
    "dicaArtrelados": "Para bordar nomes em jalecos com letrinhas perfeitas de 3 milímetros: compre um cone de linha nº 60 e agulhas 65/9. Mude o espaçamento da fonte no Wilcom ou PE-Design para 0,28 mm e desative o subponto de ziguezague. As letras vão sair tão perfeitas que seus clientes vão achar que foi gravado a laser!",
    "voceSabia": "Na relojoaria de luxo e alta-costura suíça, as pequenas etiquetas bordadas no verso de gravatas de seda utilizam fios de seda pura #100 com satim de ultra-densidade a 0,20 mm, atingindo uma resolução visual de mais de 1.200 pontos por polegada!",
    "practicalExercise": "No seu software, crie uma palavra com 3,5 mm de altura. Programe uma versão com densidade padrão (0,40 mm) e outra com densidade 0,28 mm. Troque a linha para nº 60 e a agulha para 65/9 e borde em um retalho de tricoline. Veja com uma lupa a perfeição incomparável da versão de ultra-densidade.",
    "quickSummary": "Satim de Ultra-Densidade é a programação de pontos cheios com espaçamento ultrafino (0,25 a 0,30 mm) combinada a linhas #60/#75 para microletras e brasões com definição gráfica impecável.",
    "relatedTerms": [
      "Linha Fina #60/#75",
      "Agulha 65/9 Microtex",
      "Microletras (Small Lettering)",
      "Compensação de Repuxo",
      "Center Run Underlay"
    ],
    "tags": [
      "ultradensity",
      "satim",
      "microletras",
      "microbordado",
      "pontos",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "underlay-margins-offset-recuo-subponto-seguranca",
    "code": "U-063",
    "letter": "U",
    "term": "Underlay Margins & Offset — Recuo de Subponto & Margem Perimetral de Segurança",
    "pronunciation": "ân-der-lei már-djins end óf-set — re-cu-o de sub-pon-to",
    "level": "Intermediário 🟡",
    "category": "Pontos & Estruturas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês underlay (camada de base) e margin/offset (margem de distanciamento/recuo perimetral). Parâmetro geométrico essencial de software CAD.",
    "summary": "Distância calculada em milímetros entre a borda externa da coluna de acabamento e a linha do subponto para evitar que a fundação apareça para fora do bordado.",
    "definition": "O Underlay Margins & Offset (Recuo de Subponto / Margem de Segurança da Fundação / Underlay Inset Margin) é o parâmetro geométrico configurado no software de matrizes que estabelece a distância de recuo perimetral (geralmente entre 0,2 mm e 0,6 mm) que o subponto estrutural (Edge Run, Zigzag ou Tatami de base) deve manter em relação aos nós de contorno final do objeto bordado. Sua função é garantir que a fundação fique completamente oculta sob os pontos de cobertura de topo, mesmo após o repuxamento natural do tecido durante a costura.",
    "technicalDetails": "Em tecidos firmes (tricoline, sarja), um recuo de 0,25 mm a 0,30 mm é suficiente. Em tecidos elásticos (malhas, piquet, lycra) ou materiais felpudos com alta contração elástica, o recuo deve ser ampliado para 0,40 mm a 0,55 mm, associado a um aumento da compensação de repuxo do satim; caso contrário, a tração do ponto cheio estreita a coluna expondo o subponto como um 'fio fantasma' feio nas laterais da letra.",
    "beginnerExplanation": "É a distância de segurança para garantir que a costurinha de base fique bem escondidinha embaixo do bordado principal. Se você deixar essa margem muito pequena, quando o tecido puxar na hora de bordar, a costura de baixo escapa e fica aparecendo para fora das letras como um fiozinho feio!",
    "howItWorks": [
      "1. O digitador cria uma coluna de ponto satim com 3,0 mm de largura.",
      "2. No painel de propriedades de subponto, seleciona o 'Edge Run' ou 'Zigzag'.",
      "3. Define a margem de recuo (Margin Offset) para 0,35 mm.",
      "4. O software calcula a rota do subponto recuando 0,35 mm de ambas as margens da coluna.",
      "5. A máquina costura o subponto ancorando a entretela no tecido dentro da área segura.",
      "6. Os pontos cheios de satim cobrem toda a área com folga perimetral de proteção.",
      "7. O bordado finaliza com bordas perfeitamente retas, limpas e sem nenhum subponto vazando para fora."
    ],
    "applications": [
      "Letras em ponto satim sobre tecidos de malha piquet, moletons e malhas esportivas.",
      "Contornos de logotipos corporativos e emblemas que exigem acabamento afiado.",
      "Preenchimentos em tatami sobre tecidos felpudos e toalhas de banho.",
      "Bordados em peças com linhas de cores contrastantes onde o subponto não pode aparecer."
    ],
    "characteristics": [
      "Controle numérico milimétrico de precisão vetorial nos softwares CAD.",
      "Adaptação dinâmica conforme o índice de elasticidade do tecido.",
      "Preserva a estética limpa de contornos sem rebarbas nem dentes visíveis."
    ],
    "commonErrors": [
      "❌ Deixar a margem de recuo zerada (0,0 mm) em malhas elásticas, fazendo o subponto vazar para fora das letras.",
      "❌ Aumentar o recuo excessivamente (ex: 1,0 mm) em colunas estreitas de 1,5 mm, fazendo o subponto perder a capacidade de estruturar as bordas.",
      "❌ Não compensar o recuo quando mudar a cor da linha de fundo para uma cor totalmente contrastante com o tecido."
    ],
    "troubleshootingTips": [
      "Linhas do subponto estão aparecendo nas laterais das letras no piquet: aumente o recuo da margem (Margin Offset) de 0,25 mm para 0,45 mm e aumente a compensação de repuxo (Pull Compensation) para 0,40 mm.",
      "As bordas do satim estão serrilhadas e caindo no tecido: o recuo está muito grande e o subponto não está sustentando a margem; diminua o recuo para 0,30 mm.",
      "Subponto vazando nas curvas de letras circulares ('O', 'S', 'C'): verifique se o software possui compensação angular automática de subponto ativada."
    ],
    "dicaArtrelados": "A regra de ouro da Artrelados para recuo de subponto: em malhas e tecidos que esticam, use SEMPRE recuo de margem de 0,35 mm a 0,40 mm e combine com compensação de repuxo de pelo menos 0,35 mm. Suas letras vão sair lisinhas, gordinhas e sem nenhum fiapo de subponto escapando para os lados!",
    "voceSabia": "Nos primórdios da digitalização manual por mesa digitalizadora (anos 1980), o bordador precisava desenhar cada linha do subponto à mão com a caneta magnética, calculando o recuo de cabeça ponto por ponto!",
    "practicalExercise": "No seu software de bordado, digite uma letra 'B' com 20 mm de altura. Altere o parâmetro de recuo de margem (Margin) do subponto para 0,1 mm e observe no simulador 3D como a linha fica quase em cima da borda; depois altere para 0,4 mm e veja a distância segura criada.",
    "quickSummary": "Underlay Margins & Offset é a margem de recuo de segurança que mantém a estrutura de subponto oculta sob os pontos de acabamento, evitando vazamentos perimetrais.",
    "relatedTerms": [
      "Subponto de Contorno (Edge Run)",
      "Compensação de Repuxo (Pull Comp)",
      "Ponto Satim",
      "Subponto (Underlay)",
      "Repuxamento Têxtil"
    ],
    "tags": [
      "underlay",
      "margem",
      "offset",
      "recuo",
      "subponto",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "universal-joint-drive-shaft-junta-universal-cardan",
    "code": "U-064",
    "letter": "U",
    "term": "Universal Joint & Drive Shaft — Junta Universal de Cardan & Eixo de Transmissão Inferior",
    "pronunciation": "iu-ni-ver-sal djóint end draiv shéft — jun-ta u-ni-ver-sal de car-dan",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Em homenagem ao matemático e físico italiano Girolamo Cardano (1501–1576), inventor da junta articulada de transmissão angular.",
    "summary": "Conjunto mecânico articulado de transmissão que conecta o eixo superior do cabeçote ao eixo inferior da lançadeira com folga zero e sincronismo angular absoluto.",
    "definition": "O Universal Joint & Drive Shaft (Junta Universal de Cardan / Acoplamento Articulado de Transmissão / Lower Hook Drive Shaft) é o conjunto de eixos retificados de aço temperado e cruzetas articuladas de precisão que transfere o torque rotativo e o sincronismo de graus angulares do servomotor principal superior para a caixa de engrenagens cônica que aciona a lançadeira rotativa inferior. Projetado para suportar até 2.400 rotações por minuto em máquinas industriais, o sistema de cardan garante que qualquer mínima deflexão estrutural do chassi não descalibre o sincronismo micrométrico (Timing) entre a agulha e a lançadeira.",
    "technicalDetails": "As juntas universais industriais de máquinas de bordar são montadas em pares (dupla junta de Cardan com ângulo constante homocinético) com pinos de roletes temperados retificados e buchas de bronze sinterizado autolubrificantes. A folga angular máxima admissível (Torsional Backlash) é inferior a 0,02 graus; qualquer desgaste nas cruzetas provoca atraso na ponta da lançadeira, gerando quebras instantâneas de agulha e laçadas frouxas.",
    "beginnerExplanation": "É uma barra de ferro articulada de alta precisão que passa por dentro da máquina para levar o giro do motor lá de cima até a lançadeira lá embaixo. É como o eixo de um carro que faz as rodas girarem juntas com o motor sem atrasar nem um segundo!",
    "howItWorks": [
      "1. O servomotor principal gira a árvore superior da máquina acionando o estica-fio e a barra da agulha.",
      "2. A engrenagem helicoidal superior transmite o giro para o eixo de transmissão vertical/diagonal.",
      "3. As juntas universais de Cardan compensam a inclinação geométrica do chassi com rotação contínua.",
      "4. O eixo inferior gira a engrenagem cônica espiral da lançadeira rotativa na proporção exata de 2:1 (duas voltas por ponto).",
      "5. A ponta da lançadeira alcança a cava da agulha no milissegundo exato da laçada sem nenhum atraso mecânico.",
      "6. Rolamentos blindados mantêm a transmissão silenciosa, suave e livre de vibrações mesmo a 1.200 PPM."
    ],
    "applications": [
      "Transmissão motriz em todas as máquinas de bordar industriais tubulares e planas (Tajima, Barudan, SWF, Happy, ZSK).",
      "Sincronização angular rígida de cabeçotes em máquinas industriais de até 24 cabeçotes.",
      "Manutenção corretiva mecânica e substituição de engrenagens desgastadas por sobrecarga.",
      "Alinhamento cinemático entre eixos superior e inferior."
    ],
    "characteristics": [
      "Construção em aço-liga cromo-molibdênio usinado e temperado.",
      "Transmissão homocinética com tolerância angular centesimal.",
      "Lubrificação periódica por graxa de alta pressão ou banho de óleo selado."
    ],
    "commonErrors": [
      "❌ Deixar a máquina trabalhar com ruído de 'estalo' no cardan, levando à quebra catastrófica da engrenagem da lançadeira.",
      "❌ Desmontar a junta de cardan sem marcar os pontos de referência de fábrica, perdendo todo o sincronismo angular da máquina.",
      "❌ Utilizar graxa automotiva comum pesada em vez de graxa especial de alta rotação para mecanismos de precisão."
    ],
    "troubleshootingTips": [
      "Vibração excessiva e ruído metálico forte na parte inferior da máquina: inspecione as buchas e os parafusos de fixação das cruzetas do cardan; reaperte os parafusos Allen cônicos com trava-rosca média.",
      "Lançadeira perde o sincronismo toda vez que a máquina atinge velocidade máxima: há folga por desgaste nos dentes do acoplamento do eixo de transmissão inferior; faça a substituição do conjunto com um técnico qualificado.",
      "Dificuldade de girar o volante manual na mão: verifique se não há fios enrolados no eixo de transmissão inferior sob a chapa de proteção."
    ],
    "dicaArtrelados": "Durante as revisões anuais do seu ateliê, peça ao técnico para checar a folga mecânica das juntas do eixo de transmissão inferior e das engrenagens da lançadeira. Uma máquina regulada e com eixos firmes borda suave como uma seda, sem ruídos e sem quebras de linha inexplicáveis!",
    "voceSabia": "O princípio da junta universal foi descrito pela primeira vez no século III a.C. pelo engenheiro grego Filão de Bizâncio, sendo hoje um dos componentes mecânicos mais vitais de toda a indústria aeroespacial, automobilística e de máquinas têxteis de alta velocidade!",
    "practicalExercise": "Se a sua máquina industrial permitir a remoção da tampa de inspeção inferior do braço tubular, observe com uma lanterna o eixo de transmissão girando quando você vira o volante na mão. Veja a perfeita harmonia entre o giro do eixo e a rotação da lançadeira.",
    "quickSummary": "Universal Joint & Drive Shaft é o conjunto de eixos e juntas articuladas que transmite o sincronismo mecânico do motor principal para a lançadeira rotativa inferior com precisão absoluta.",
    "relatedTerms": [
      "Sincronismo Agulha-Lançadeira",
      "Lançadeira Rotativa",
      "Eixo Z (Árvore Principal)",
      "Engrenagem Cônica",
      "Manutenção Mecânica"
    ],
    "tags": [
      "cardan",
      "juntauniversal",
      "driveshaft",
      "eixotransmissao",
      "mecanica",
      "manutencao",
      "componentes"
    ]
  },
  {
    "id": "uv-reactive-thread-linha-fotoativa-neon-luz-negra",
    "code": "U-065",
    "letter": "U",
    "term": "UV-Reactive Thread — Linha Fotoativa Neon & Reativa à Luz Negra (Specialty Glow & Fluorescent Filaments)",
    "pronunciation": "iu-vi ri-ék-tiv tréd — li-nha fo-to-a-ti-va ne-on",
    "level": "Iniciante 🟢",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do latim ultra violeta (radiação além do espectro violeta visível, 300–400 nm) e do inglês reactive (que reage). Tecnologia de tingimento com pigmentos fluorescentes de alta energia.",
    "summary": "Linha decorativa especial com pigmentos fluorescentes que absorvem radiação ultravioleta e brilham intensamente no escuro sob lâmpadas de luz negra ou mudam de cor com a luz solar.",
    "definition": "A UV-Reactive Thread (Linha Fotoativa / Fio Fluorescente Reativo à Luz Negra / Solar Color-Changing Thread / UV Glow Embroidery Yarn) é uma categoria nobre de linhas de bordar confeccionadas em 100% poliéster ou poliamida aditivadas com corantes ópticos fluorescentes ou microcápsulas fotocrômicas. Divide-se em dois tipos principais: 1) Linhas Reativas à Luz Negra (Blacklight Reactive), que sob iluminação UV (365 nm) emitem um brilho neon intenso e vibrante (verde, rosa, amarelo, azul elétrico); e 2) Linhas Fotocrômicas Solares (Solar Activated), que parecem brancas ou translúcidas em ambientes internos e transformam-se instantaneamente em cores vivas (roxo, azul, vermelho, laranja) ao serem expostas aos raios UV da luz do sol.",
    "technicalDetails": "Ao contrário dos fios fosforescentes tradicionais (Glow-in-the-Dark com sulfeto de zinco), que acumulam luz lentamente e possuem toque áspero que desgasta as guias da máquina, as linhas UV-reactives modernas possuem acabamento lubrificado siliconizado suave idêntico ao poliéster convencional #40, permitindo bordar em velocidades plenas de 800 a 1.000 PPM sem desgaste prematuro do olho da agulha ou dos discos tensores.",
    "beginnerExplanation": "É uma linha mágica super divertida que brilha como neon em festas sob a luz negra, ou então que muda de cor sozinha quando a pessoa sai de casa e toma a luz do sol! Dentro de casa o bordado é branquinho ou suave, e no sol ele fica colorido e vibrante na hora!",
    "howItWorks": [
      "1. A linha é colocada no porta-cones da máquina como qualquer carretel convencional de poliéster.",
      "2. Passa-se o fio pelas guias normais com agulha padrão 75/11 para bordado.",
      "3. A máquina costura a matriz com velocidade de 750 a 850 PPM sem necessidade de ajustes complexos de tensão.",
      "4. No ambiente interno comum, o bordado exibe uma cor pastel ou branca elegante.",
      "5. Em baladas, eventos noturnos ou festas infantis com lâmpadas de luz negra (UV), o bordado acende com brilho neon elétrico espetacular.",
      "6. Sob a luz do sol ao ar livre, as moléculas fotocrômicas reagem em 3 segundos, revelando cores vivas e surpreendentes."
    ],
    "applications": [
      "Roupas de balada, festivais de música eletrônica, figurinos teatrais e fantasias de carnaval.",
      "Camisetas infantis interativas de 'mágica do sol' com elementos que mudam de cor ao ar livre.",
      "Uniformes de segurança noturna, jaquetas de motociclistas e acessórios esportivos de alta visibilidade.",
      "Marcas d'água de autenticação antifalsificação em bonés e vestuário de grife."
    ],
    "characteristics": [
      "Efeito visual surpreendente de alto impacto que encanta crianças e adultos.",
      "Resistência a mais de 50 lavagens domésticas sem perda da capacidade fotossensível.",
      "Deslizamento suave e maciez equivalente às melhores linhas de poliéster do mercado."
    ],
    "commonErrors": [
      "❌ Lavar a peça com água sanitária ou alvejantes à base de cloro forte, destruindo as moléculas fotossensíveis.",
      "❌ Passar ferro excessivamente quente (acima de 150°C) diretamente sobre o bordado sem pano protetor, degradando o pigmento UV.",
      "❌ Deixar os cones de linha UV guardados expostos diretamente à janela tomando sol o dia todo, desbotando a capacidade de reação antes do uso."
    ],
    "troubleshootingTips": [
      "A linha fotocrômica não está mudando de cor no sol: certifique-se de que o teste seja feito sob luz solar direta ao ar livre (vidros de janelas com filtro UV bloqueiam a radiação necessária para ativar a cor).",
      "Bordado perdendo o brilho neon após a lavagem: recomende aos clientes lavar com sabão neutro e secar a peça à sombra.",
      "Quebra frequente ao bordar linhas especiais: reduza a velocidade da máquina para 700 PPM e use agulha Schmetz Embroidery 75/11 com banho de titânio."
    ],
    "dicaArtrelados": "Crie uma linha de camisetas infantis chamada 'Bordado Mágico Artrelados'! Borde uma nuvem branca comum com um sol sorridente feito com linha fotocrômica solar. Quando a criança sair no quintal para brincar no sol, o sol do bordado fica amarelo-ouro na hora! As mães e as crianças simplesmente enlouquecem e você vende centenas de peças!",
    "voceSabia": "O fenômeno do fotocromismo foi descoberto em 1867 pelo químico alemão Fritzsche, mas sua aplicação em fibras têxteis comerciais só se tornou estável e acessível nos anos 2000 graças aos avanços da microencapsulação polimérica!",
    "practicalExercise": "Borde um pequeno coração com linha fotocrômica solar em um retalho de tecido branco dentro do seu ateliê. Veja como ele fica clarinho. Em seguida, leve o retalho até a porta ou janela ao ar livre sob a luz do dia e cronometre quantos segundos ele leva para ficar vermelho vivo. É pura magia têxtil!",
    "quickSummary": "Linha de bordar com tecnologia fotoativa que brilha intensamente sob luz negra ou muda instantaneamente de cor ao ser exposta à luz solar, criando efeitos mágicos em moda e eventos.",
    "relatedTerms": [
      "Linhas Fosforescentes (Glow-in-the-Dark)",
      "Linhas Especiais",
      "Pigmentos Fotocrômicos",
      "Luz Negra",
      "Bordado Interativo"
    ],
    "tags": [
      "uvreactive",
      "linhafotoativa",
      "luznegra",
      "neon",
      "fotocromica",
      "fios",
      "efeitosespeciais"
    ]
  },
  {
    "id": "usb-transfer-floppy-emulator-emulador-usb-maquinas",
    "code": "U-066",
    "letter": "U",
    "term": "USB Transfer & Floppy Emulator — Emulador USB para Máquinas Industriais (Transmissão de Matrizes & Upgrade Gotek)",
    "pronunciation": "iu-es-bi tréns-fer end fló-pi e-miu-lei-tor — e-mu-la-dor u-es-se-be",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do padrão universal de comunicação de dados 'USB' (Universal Serial Bus, 1996) e dos emuladores de hardware de drive de disquete (Floppy Disk Drive 3.5' de 1.44 MB).",
    "summary": "Dispositivo de upgrade de hardware que substitui os antigos drives de disquete de máquinas industriais antigas por portas USB modernas de alta capacidade.",
    "definition": "O USB Transfer & Floppy Emulator (Emulador USB de Disquete / Módulo Gotek USB Drive / Floppy-to-USB Converter / Sistema de Transferência USB para Bordadeiras) é uma unidade eletrônica de substituição direta de hardware (Drop-in Replacement) instalada no painel de máquinas de bordar industriais e domésticas clássicas (como Tajima TME-DC, Barudan BEMR/BEMS, Happy, SWF, Brother PR600 primeiras gerações) que originalmente dependiam de disquetes de 3,5 polegadas de 1,44 MB. O emulador conecta-se ao barramento plano original de 34 vias (Ribbon Cable) e simula para a placa-mãe da máquina a presença de centenas de disquetes virtuais armazenados em um único pendrive USB comum.",
    "technicalDetails": "Opera particionando o pendrive em até 100 ou 1.000 pastas/blocos de 1,44 MB (gerenciados por botões frontais com display de 2 ou 3 dígitos de 7 segmentos ou display OLED com firmware avançado FlashFloppy). Os arquivos salvos no pendrive em formato bruto (.DST, .DSB, .FDR) são lidos instantaneamente pelo sistema operacional legado da máquina na mesma taxa de transferência e temporização do controlador de disquetes (Shugart / IBM PC Floppy Interface), eliminando para sempre o problema de mídias magnéticas mofadas ou corrompidas.",
    "beginnerExplanation": "É um aparelhinho que você instala no lugar daquela entrada antiga de disquete das máquinas de bordar industriais antigas para transformar a máquina em moderna e aceitar pendrive comum! Em vez de ter que ficar usando disquetes velhos que estragam toda semana, você coloca um pendrive normal com milhares de matrizes e a máquina lê tudo rápido e fácil!",
    "howItWorks": [
      "1. Desliga-se a máquina de bordar e retira-se o leitor mecânico antigo de disquetes de 3,5 polegadas.",
      "2. Conecta-se o emulador USB Gotek exatamente no mesmo cabo flat de 34 pinos e no conector de energia de 5V.",
      "3. Parafusa-se o emulador no painel frontal da máquina.",
      "4. O bordador grava suas matrizes (.DST) no pendrive através do computador.",
      "5. Insere-se o pendrive na entrada USB do emulador no painel da máquina.",
      "6. Seleciona-se o número do disquete virtual (ex: bloco 01) nos botões frontais.",
      "7. No painel da máquina, aperta-se a tecla 'Read Disk' normalmente: a máquina carrega a matriz em 2 segundos sem nenhum erro de leitura."
    ],
    "applications": [
      "Modernização e sobrevida técnica de máquinas industriais Tajima, Barudan, Happy, Toyota e SWF das décadas de 1990 e 2000.",
      "Eliminação total de custos com compra de disquetes e unidades de leitura externas no computador.",
      "Transferência segura de matrizes de alta complexidade com mais de 100.000 pontos.",
      "Agilidade operacional no chão de fábrica em ateliês de alta produtividade."
    ],
    "characteristics": [
      "Instalação simples 'plug-and-play' sem necessidade de modificar a fiação da máquina.",
      "Compatibilidade universal com cabos flats padrão Shugart de 34 vias.",
      "Alta confiabilidade com durabilidade de estado sólido sem peças móveis sujeitas a desgaste."
    ],
    "commonErrors": [
      "❌ Inverter a posição do cabo flat de 34 vias na instalação (o fio vermelho da via 1 deve coincidir com o pino 1 do conector).",
      "❌ Usar pendrives de tamanho gigante (ex: 256 GB) formatados em NTFS em emuladores simples que só leem pendrives formatados em FAT32 até 32 GB.",
      "❌ Não configurar os jumpers traseiros do emulador (S0/S1, MO/JA) para a marca específica da sua máquina (ex: configuração Shugart para Barudan vs. IBM PC para Tajima)."
    ],
    "troubleshootingTips": [
      "A máquina emite erro 'Disk Read Error' / 'No Disk': o pendrive deve ser formatado em FAT32; utilize o software de partição do emulador (como USB Floppy Manager ou firmware FlashFloppy).",
      "A luz do emulador fica acesa direto e não lê: o cabo flat está invertido; desligue a máquina e inverta a posição do cabo de 34 vias.",
      "O visor do emulador não acende: verifique se o conector de 4 vias de alimentação de 5V está firmemente encaixado."
    ],
    "dicaArtrelados": "Se você tem uma máquina industrial clássica Tajima ou Barudan que ainda usa disquetes: instale um emulador USB Gotek com firmware FlashFloppy imediatamente! Sua máquina vai rejuvenescer 20 anos, você nunca mais vai perder tempo com disquetes corrompidos e sua produção vai decolar!",
    "voceSabia": "Milhares de máquinas de bordar industriais construídas no Japão nas décadas de 80 e 90 possuem chassis mecânicos tão robustos e precisos que duram mais de 40 anos; a instalação de emuladores USB é a principal responsável por manter essas verdadeiras 'lendas mecânicas' operando a todo vapor até hoje!",
    "practicalExercise": "Se a sua máquina já possui entrada USB ou emulador, formate um pendrive em FAT32 no seu computador, crie pastas organizadas por clientes e grave 3 matrizes em formato .DST. Conecte na máquina e teste a velocidade instantânea de carregamento na memória.",
    "quickSummary": "USB Transfer & Floppy Emulator é o módulo eletrônico de upgrade que substitui leitores antigos de disquetes por entradas USB modernas em máquinas de bordar industriais clássicas.",
    "relatedTerms": [
      "Gotek Floppy Emulator",
      "Cabo Flat de 34 Vias",
      "Formato DST",
      "FAT32",
      "FlashFloppy",
      "Transferência de Matrizes"
    ],
    "tags": [
      "usb",
      "floppy",
      "emulador",
      "gotek",
      "upgrade",
      "hardware",
      "manutencao",
      "maquinasantigas"
    ]
  },
  {
    "id": "umectacao-de-fios-e-condicionamento-higrometrico",
    "code": "U-067",
    "letter": "U",
    "term": "Umectação de Fios e Estações de Condicionamento Higrométrico (Thread Conditioning & Humidity Control)",
    "pronunciation": "u-mec-ta-são de fi-os e es-ta-sões de con-di-ci-o-na-men-to hi-gro-mé-tri-co",
    "level": "Avançado 🔴",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim humectare (umedecer) e do grego hygros (úmido). Controle climático de precisão da indústria têxtil.",
    "summary": "Controle da umidade relativa do ar e aplicação de microemulsão de silicone nos cones de linha para evitar ressecamento e quebras a alta velocidade.",
    "definition": "A Umectação de Fios e o Condicionamento Higrométrico (Thread Moisture Conditioning & Hygrometric Control) é o conjunto de procedimentos termotêxteis e físico-químicos que mantém os filamentos de poliéster, viscose e metálicos no ponto ideal de hidratação e coeficiente de atrito. Fios estocados em ambientes excessivamente secos (umidade abaixo de 40%) perdem a elasticidade natural, tornam-se quebradiços e acumulam alta carga eletrostática (eletricidade estática que atrai poeira e embaraça fios nos guias). O uso de umidificadores ultrassônicos industriais regulando o ateliê entre 50% e 65% de umidade relativa ou a aplicação de esponjas umectadoras com óleo mineral/silicone têxtil reduz as quebras de linha em até 80%.",
    "technicalDetails": "A umidade relativa do ar (UR) ideal para salas de bordado situa-se estritamente entre 55% e 65% a 22 °C ± 2 °C (conforme norma ISO 139). Óleos de umectação externa utilizam silicone de dimetilpolissiloxano de baixa viscosidade (5 a 10 cSt) que dissipa o calor gerado pelo atrito da agulha a 1.000 PPM.",
    "beginnerExplanation": "É o segredo para a linha parar de arrebentar em dias secos ou no inverno com aquecedor ligado! A linha de bordar é como nosso cabelo: quando o ar fica muito seco, ela resseca e quebra à toa. Umidificar a sala ou colocar uma gotinha de óleo de silicone no guia da linha faz a máquina bordar macia o dia todo sem nenhuma quebra.",
    "howItWorks": [
      "1. O higrômetro digital monitora a umidade do ar do ateliê em tempo real.",
      "2. Se a umidade cair abaixo de 45%, o umidificador de névoa fria é ativado.",
      "3. As moléculas de água restauram a flexibilidade elástica dos filamentos sintéticos de poliéster.",
      "4. Para fios metálicos ou fios ressecados antigos, instala-se uma esponja umectadora embebida em silicone têxtil antes do primeiro guia-fio.",
      "5. A linha passa pela esponja recebendo uma película microscópica lubrificante e antiestática.",
      "6. A linha desliza pela agulha quente sem superaquecer, sem desfiar e sem quebrar."
    ],
    "applications": [
      "Ateliês em regiões de clima seco, altitudes elevadas ou com ar-condicionado ligado direto.",
      "Bordados contínuos de alta velocidade com fios metálicos de ouro e prata.",
      "Recuperação de lotes de cones de linha guardados há anos que ressecaram no estoque.",
      "Salas industriais de bordado com pisos sintéticos que acumulam choques estáticos."
    ],
    "characteristics": [
      "Reduz drasticamente as paradas de máquina por quebra de fio desfiado.",
      "Elimina a eletricidade estática que faz a linha grudar na carcaça plástica.",
      "Aumenta a velocidade operacional média da produção sem superaquecer a agulha."
    ],
    "commonErrors": [
      "❌ Molhar os cones de linha com água da torneira (enferruja o cabeçote e apodrece a linha).",
      "❌ Usar óleos vegetais de cozinha ou silicone automotivo perfumado que mancham para sempre o tecido.",
      "❌ Deixar a umidade da sala subir acima de 80%, oxidando as partes metálicas da máquina e amolecendo entretelas."
    ],
    "troubleshootingTips": [
      "Linha quebrando sem parar apenas à tarde quando o ar-condicionado gela a sala: a umidade caiu demais; ligue um umidificador de ambiente perto do suporte de cones.",
      "Fio metálico dourado desfiando a capa plástica e embolando na agulha: passe o fio por uma guia de feltro com 2 gotas de silicone puro para bordado (Sewer's Aid).",
      "Bordadeira levando choquinhos ao encostar no bastidor de metal: o ar está excessivamente seco; umidifique o ateliê para descarregar a estática."
    ],
    "dicaArtrelados": "Tenha um aparelhinho simples de higrômetro (termômetro com medidor de umidade) na bancada do ateliê! Se a umidade marcar menos de 45%, ligue seu umidificador de ar. Você vai notar na mesma hora como a sua máquina para de quebrar linha como mágica!",
    "voceSabia": "As maiores tecelagens de seda do mundo na Itália e no Japão são construídas historicamente perto de rios e montanhas arborizadas justamente para aproveitar a umidade natural do ar que mantém os fios nobres macios e brilhantes!",
    "practicalExercise": "Pegue um fio de linha de um cone antigo guardado há anos e puxe com força nas mãos; repare como ele quebra seco. Agora passe o mesmo fio entre os dedos com uma gotinha de óleo de máquina transparente e puxe de novo: sinta a resistência e flexibilidade aumentadas.",
    "quickSummary": "Umectação de Fios é a técnica de hidratar e lubrificar as linhas de bordar através de controle de umidade do ar e silicone protetor para evitar quebras a alta velocidade.",
    "relatedTerms": [
      "Fios Metálicos",
      "Higrômetro",
      "Silicone Têxtil (Sewer's Aid)",
      "Eletricidade Estática",
      "Aquecimento de Agulha"
    ],
    "tags": [
      "umectacao",
      "higrometrico",
      "umidade",
      "linhas",
      "silicone",
      "quebra de fio",
      "fios metalicos"
    ]
  },
  {
    "id": "unidades-de-medida-e-escalas-lineares-no-bordado",
    "code": "U-068",
    "letter": "U",
    "term": "Unidades de Medida e Escalas Lineares no Bordado (Metric vs. Imperial & Pitch Units)",
    "pronunciation": "u-ni-da-des de me-di-da e es-ca-las li-ne-a-res no bor-da-do",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do Sistema Internacional de Unidades (Métrico - mm/cm) e do Sistema Imperial Britânico (Polegadas/Inches).",
    "summary": "Relação de conversão e equivalências entre milímetros, centímetros, polegadas e décimos de milímetro para matrizes e bastidores.",
    "definition": "As Unidades de Medida e Escalas Lineares no Bordado Computadorizado (Embroidery Measurement Systems & Coordinate Scaling) compreendem as grandezas geométricas adotadas internacionalmente para parametrizar distâncias, espessuras de ponto, áreas de bastidores e tamanhos de letras. O bordado digital opera fundamentalmente em Milímetros (mm) e Décimos de Milímetro (0,1 mm — a unidade elementar de pulso de passo da maioria das máquinas industriais), enquanto bastidores e telas nos Estados Unidos frequentemente usam Polegadas (Inches - pol). A conversão exata é: 1 polegada (1\") = 25,4 mm = 2,54 cm.",
    "technicalDetails": "Nos códigos de programação binária (como .DST e .PES), as coordenadas X-Y de cada furo de agulha são registradas em números inteiros de unidades de 0,1 mm (por exemplo, um salto de 50 unidades no arquivo binário corresponde a exatamente 5,0 mm de deslocamento do pantógrafo). Espaçamento de densidade é medido em décimos de mm (ex: 0,40 mm).",
    "beginnerExplanation": "É saber traduzir o tamanho do bastidor e da matriz de milímetros para centímetros e polegadas sem se perder: 10x10 cm é a mesma coisa que 100x100 mm (ou 4x4 polegadas); e 13x18 cm é o famoso bastidor de 5x7 polegadas.",
    "howItWorks": [
      "1. A cliente pede um nome bordado com 8 centímetros de comprimento.",
      "2. No software de programação, a bordadeira digita '80 mm' (pois 1 cm = 10 mm).",
      "3. Ao comprar uma matriz americana que mede '3.5 inches', multiplica 3,5 por 25,4 e descobre que a matriz tem 88,9 mm (cerca de 9 cm).",
      "4. Confere se o desenho cabe na área útil em milímetros do bastidor da sua máquina.",
      "5. Ajusta a densidade de pontos na escala milimétrica correta (ex: 0,40 mm para cetim).",
      "6. A peça bordada sai no tamanho exato medido na fita métrica da costureira."
    ],
    "applications": [
      "Conversão diária de matrizes internacionais para a fita métrica do cliente no ateliê.",
      "Dimensionamento preciso de nomes para caberem em bolsos de jalecos (máximo 90 mm a 100 mm).",
      "Configuração do sistema de unidades preferencial no software (Wilcom, Embird, Pe-Design).",
      "Cálculo de margem de segurança de 15 mm entre o bordado e as bordas plásticas do bastidor."
    ],
    "characteristics": [
      "Precisão milimétrica que garante ajuste perfeito no vestuário.",
      "Fórmula de conversão rápida e universal: Multiplicar polegadas por 25,4 para ter milímetros.",
      "Padronização internacional das fichas técnicas de produção."
    ],
    "commonErrors": [
      "❌ Confundir milímetros com centímetros no software e criar uma letra gigante de 50 centímetros em vez de 50 milímetros (5 cm).",
      "❌ Tentar bordar uma matriz de 105 mm em um bastidor de 100x100 mm achando que '5 mm a mais não tem problema' (a agulha colide no aro).",
      "❌ Redimensionar a matriz no olho sem conferir as dimensões exatas na barra de propriedades."
    ],
    "troubleshootingTips": [
      "O programa está mostrando todas as medidas em polegadas com aspas (ex: 4.0\"): vá nas configurações de preferência do software e marque 'Sistema Métrico (mm)'.",
      "A matriz de 13x18 não entra na máquina: o bastidor da Brother é 130x180 mm; se a matriz tiver 131 mm ela é recusada; diminua 2 mm no software.",
      "A fita métrica de costura não bate com a régua de plástico: fitas métricas antigas de tecido laceiam com o tempo; utilize réguas rígidas de metal ou acrílico para conferências de precisão."
    ],
    "dicaArtrelados": "Memorize a colinha rápida dos bastidores mais famosos: 10x10 cm = 100x100 mm (4x4\"); 13x18 cm = 130x180 mm (5x7\"); 16x26 cm = 160x260 mm (6x10\"); 20x30 cm = 200x300 mm (8x12\"). Tenha sempre essa listinha colada na parede da sua mesa!",
    "voceSabia": "Na França antes da Revolução Francesa de 1789, cada cidade tinha sua própria unidade de medida para fitas e bordados (como o 'Pied du Roi' e o 'Pouce'), o que causava imensa confusão no comércio de tecidos até a invenção do Sistema Métrico Decimal!",
    "practicalExercise": "Pegue uma régua escolar. Meça o tamanho do aro interno do seu bastidor favorito em centímetros. Multiplique por 10 para achar em milímetros e divida por 25,4 para descobrir o tamanho exato dele em polegadas americanas.",
    "quickSummary": "Unidades de Medida e Escalas no Bordado é o domínio da conversão entre milímetros (mm), centímetros (cm) e polegadas (\") para dimensionar matrizes e bastidores com exatidão.",
    "relatedTerms": [
      "Milímetros (mm)",
      "Polegadas (Inches)",
      "Área Útil de Bastidor",
      "Margem de Segurança",
      "Coordenadas X-Y"
    ],
    "tags": [
      "unidades",
      "medidas",
      "escalas",
      "milimetros",
      "polegadas",
      "bastidor",
      "programacao"
    ]
  },
  {
    "id": "underlay-tridimensional-e-relevo-em-ponto-cheio",
    "code": "U-069",
    "letter": "U",
    "term": "Underlay Tridimensional e Estruturação de Relevo em Ponto Cheio (3D Thread-Built Underlay)",
    "pronunciation": "an-der-lei tri-di-men-si-o-nal e es-tru-tu-ra-são de re-le-vo em pon-to chei-o",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês underlay (camada inferior) e do grego stereos (sólido/tridimensional). Alta chapelaria e monogramas nobres.",
    "summary": "Criação de relevo alto e arredondado em letras e brasões utilizando apenas camadas sucessivas de linhas de ponto cheio por baixo, sem uso de EVA.",
    "definition": "O Underlay Tridimensional e Estruturação de Relevo em Ponto Cheio (Built-Up 3D Thread Underlay / Raised Satin Column / Relevo Estruturado em Fios) é a técnica sofisticada de digitalização onde o programador cria um efeito de alto-relevo escultural (embossado) acumulando de duas a quatro camadas de pontos cheios (Satin) com larguras progressivamente decrescentes por baixo da coluna final de acabamento. Ao contrário do bordado 3D Puff com EVA plástico, o relevo em camadas de linha é 100% lavável, suporta ferro de passar quente sem deformar, tem toque macio e acabamento arredondado nobre.",
    "technicalDetails": "A estrutura compõe-se de: 1ª Camada: Linha de centro (Center Run); 2ª Camada: Ponto cheio estreito com 40% da largura final e densidade média (0,60 mm); 3ª Camada: Ponto cheio com 70% da largura final e ângulo cruzado a 45°; 4ª Camada (Topo): Ponto cheio final com 100% da largura e densidade fechada (0,38 mm) a 90°.",
    "beginnerExplanation": "É o efeito de monograma 'fofinho' e gordinho de enxoval de luxo feito todinho de linha, sem colocar borracha de EVA dentro. O programa borda várias caminhas de linha uma em cima da outra e cobre tudo no final, criando um relevo redondo, macio e que pode ser passado a ferro sem medo.",
    "howItWorks": [
      "1. O programador desenha o monograma ou letra no software com colunas de pelo menos 4 mm a 7 mm de largura.",
      "2. Cria uma primeira coluna interna bem fininha com pontos perpendiculares.",
      "3. Cria uma segunda coluna por cima um pouco mais larga com inclinação diagonal de pontos.",
      "4. O acúmulo de fios forma uma lombada convexa e macia no centro da letra.",
      "5. Aplica a camada final de cobertura de ponto acetinado cobrindo todas as bases perfeitamente.",
      "6. O bordado final ganha um relevo arredondado espetacular com brilho acetinado incomparável."
    ],
    "applications": [
      "Monogramas nobres de casamento em toalhas de linho e lençóis de algodão egípcio.",
      "Brasões aristocráticos e iniciais em camisas sociais sob medida.",
      "Bordados finos de alta costura em vestidos de noiva e robes de seda.",
      "Roupões de banho felpudos onde a letra precisa sobressair sobre as felpas."
    ],
    "characteristics": [
      "100% resistente ao calor de ferro de passar roupas e secadoras industriais.",
      "Toque macio e flexível que não endurece a peça de tecido.",
      "Relevo abaulado perfeito que não esfarela com o tempo como o EVA barato."
    ],
    "commonErrors": [
      "❌ Fazer todas as camadas de underlay com a mesma largura da camada final, fazendo os pontos de baixo vazarem para fora nas beiradas.",
      "❌ Usar densidade ultrafechada em todas as camadas, criando uma pedra de linha dura que quebra a agulha.",
      "❌ Aplicar relevo de linha em colunas finas de menos de 2 mm de largura (a linha não tem espaço para fazer a lombada)."
    ],
    "troubleshootingTips": [
      "Os pontos do underlay estão aparecendo nas laterais da letra: reduza a margem do underlay (Underlay Inset Margin) em pelo menos 0,5 mm para dentro das bordas.",
      "A agulha está quebrando e fazendo estalos fortes de batida: diminua a densidade das camadas inferiores para 0,70 mm ou use agulha mais grossa (tamanho 80/12 ou 90/14).",
      "O relevo ficou achatado após lavar: aumente a quantidade de camadas intermediárias de ponto cheio cruzado no software."
    ],
    "dicaArtrelados": "Para monogramas de noiva inesquecíveis: programe duas camadas de ponto cheio estreito por baixo antes da camada final! O monograma fica com um relevo gordinho e aveludado que parece escultura na toalha de linho!",
    "voceSabia": "Esta técnica de criar relevo com fios sobrepostos era chamada de 'Bordado a Fio Puxado e Almofadado' na corte francesa do rei Luís XIV no Palácio de Versalhes, onde artesãos bordavam as iniciais reais com fios de ouro maciço sobre cordões de seda!",
    "practicalExercise": "No seu programa de bordado, digite uma letra inicial grande com 6 cm. Desative o underlay automático. Crie manualmente uma coluna de ponto cheio no centro com 2 mm de largura e densidade 0,60 mm. Depois crie a coluna final por cima com 5 mm de largura e densidade 0,38 mm. Borde e veja o relevo surgir!",
    "quickSummary": "Underlay Tridimensional é a sobreposição calculada de camadas de pontos de linha por baixo da matriz para criar relevo alto, macio e resistente ao ferro sem usar EVA.",
    "relatedTerms": [
      "Bordado 3D Puff",
      "Underlay (Ponto de Suporte)",
      "Monograma",
      "Ponto Cheio (Satin)",
      "Densidade de Ponto"
    ],
    "tags": [
      "underlay",
      "tridimensional",
      "relevo",
      "3d",
      "ponto cheio",
      "monogramas",
      "programacao"
    ]
  },
  {
    "id": "uniao-invisivel-de-bastidores-e-multi-hooping",
    "code": "U-070",
    "letter": "U",
    "term": "União Invisível de Bastidores e Matrizes Divididas (Multi-Hooping & Seamless Alignment)",
    "pronunciation": "u-ni-ão in-vi-zí-vel de bas-ti-do-res e ma-tri-zes di-vi-di-das",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês multi-hooping (múltiplas colocações no bastidor). Solução técnica para bordar grandes áreas.",
    "summary": "Técnica de dividir matrizes gigantes no computador e emendá-las perfeitamente no bastidor através de cruzetas de registro e bordas dentadas.",
    "definition": "A União Invisível de Bastidores e Matrizes Divididas (Multi-Hooping Seamless Merging / Split Design Registration) é a técnica avançada de engenharia de software e operação de bastidor que possibilita bordar desenhos gigantescos (como barrados de lençol de 1 metro ou costas inteiras de jaquetas de 40 cm) em máquinas com áreas de bordado menores (como bastidores 13x18 cm ou 16x26 cm). O software fatia o desenho em múltiplos blocos com encaixes sinuosos ou dentados (Feathered Split Lines) e insere cruzetas de alinhamento com pontos de registro (Alignment Crosshairs), permitindo à bordadeira reposicionar o tecido no bastidor e retomar o bordado com junção 100% invisível a olho nu.",
    "technicalDetails": "A linha de corte entre as partes divididas nunca deve ser uma linha reta sólida que atravesse pontos cheios; o software deve aplicar corte sinuoso que acompanhe os contornos naturais dos objetos ou intercalar pontos tatami com gradiente de densidade (Feathering Edge) de 2 a 3 mm de sobreposição.",
    "beginnerExplanation": "É a mágica de fazer um bordado gigante que não cabe no bastidor da sua máquina! Você divide o desenho em duas ou três partes no computador. A máquina borda a primeira parte com duas cruzinhas de linha guia; você muda o bastidor de lugar, alinha a agulha nas cruzinhas e borda o resto sem ninguém ver a emenda!",
    "howItWorks": [
      "1. A usuária abre uma matriz de 45 cm de largura no software (como a ferramenta Multi-Hoop do Wilcom ou Pe-Design).",
      "2. O programa sugere a divisão em 3 bastidores 13x18 cm com áreas de sobreposição.",
      "3. O software gera 3 arquivos separados (Parte1.pes, Parte2.pes, Parte3.pes) com cruzetas de alinhamento.",
      "4. Borda-se a Parte 1 na máquina, incluindo a costura das cruzetas guia no final.",
      "5. Solta-se o tecido, reposiciona-se o bastidor adiante e alinha-se a agulha exatamente no centro da cruzeta com o volante manual.",
      "6. Borda-se a Parte 2, fundindo as bordas perfeitamente sem deixar nenhuma fresta ou degrau."
    ],
    "applications": [
      "Barrados longos e contínuos para lençóis de casal, toalhas de mesa e cortinas.",
      "Costas de jaquetas jeans e casacos de motoclube maiores que o bastidor da máquina.",
      "Faixas decorativas de batizado e estolas sacerdotais longas.",
      "Quadros decorativos e painéis têxteis artísticos de grandes dimensões."
    ],
    "characteristics": [
      "Permite que máquinas pequenas façam trabalhos de máquinas gigantes industriais.",
      "Bordas dentadas com transição suave que tornam a emenda totalmente imperceptível.",
      "Multiplica o faturamento do ateliê possibilitando aceitar encomendas de grande porte."
    ],
    "commonErrors": [
      "❌ Fazer a divisão com linha de corte reta atravessando um rosto ou um texto no meio da palavra.",
      "❌ Não esticar a entretela com a mesma firmeza na segunda e terceira colocação no bastidor, gerando desalinhamento.",
      "❌ Esquecer de bordar as cruzetas de alinhamento antes de tirar o primeiro bastidor da máquina."
    ],
    "troubleshootingTips": [
      "Ficou um espaço em branco de 1 mm entre a primeira e a segunda parte: reposicione o bastidor usando o modo de ajuste fino de setas no painel da máquina até a agulha coincidir perfeitamente com a cruz de marcação.",
      "A emenda ficou com um calombo grosso de linha sobreposta: utilize a ferramenta de divisão automática com bordas suaves (Feathering) no software para diluir os pontos na junção.",
      "O tecido esticou e a segunda metade ficou torta: use sempre spray reposicionável e pontos de alinhavo (Basting Box) em todas as etapas da divisão."
    ],
    "dicaArtrelados": "Para acertar o alinhamento da cruzeta de emenda: desça a agulha girando o volante com a mão devagarzinho até a pontinha encostar exatamente no miolinho da cruz bordada! Só aperte o 'Start' quando a agulha beijar o centro da cruz!",
    "voceSabia": "A famosa Tapeçaria de Bayeux, bordada na Idade Média no ano de 1070 retratando a conquista da Inglaterra, tem quase 70 metros de comprimento e foi toda feita unindo painéis de linho bordados separadamente por dezenas de artesãs!",
    "practicalExercise": "Abra um ramo de folhas comprido de 25 cm no seu programa. Use a ferramenta 'Dividir Matriz' (Multi-Hoop) para transformá-lo em dois arquivos de 13 cm com pontos de registro. Borde em um retalho longo e pratique o reenquadramento das cruzetas.",
    "quickSummary": "União Invisível de Bastidores (Multi-Hooping) é a técnica de dividir matrizes grandes em arquivos menores e emendá-las no bastidor com cruzetas de alinhamento perfeitas.",
    "relatedTerms": [
      "Divisão de Matriz (Split Design)",
      "Cruzeta de Alinhamento (Crosshair)",
      "Bastidor Extra-Longo",
      "Basting Box",
      "Reenquadramento"
    ],
    "tags": [
      "multi hooping",
      "divisao de matriz",
      "uniao",
      "bastidores grandes",
      "alinhamento",
      "programacao"
    ]
  },
  {
    "id": "ultrassom-textil-e-selamento-de-bordas-de-emblemas",
    "code": "U-071",
    "letter": "U",
    "term": "Ultrassom Têxtil e Selamento de Bordas de Emblemas (Ultrasonic Textile Cutting & Edge Sealing)",
    "pronunciation": "ul-tras-som têx-til e se-la-men-to de bor-das de em-ble-mas",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim ultra (além de) e sonus (som). Tecnologia acústica de alta frequência para manufatura têxtil.",
    "summary": "Corte e soldagem molecular das bordas de patches e tecidos sintéticos através de vibrações sonoras inaudíveis de 20.000 Hz, sem queimar nem fazer fumaça.",
    "definition": "O Ultrassom Têxtil e Selamento de Bordas de Emblemas (Ultrasonic Fabric Slitting & Patch Edge Sealing / Ultrasonic Horn Welder) é a tecnologia avançada de corte e fusão a frio que utiliza ondas mecânicas acústicas de altíssima frequência (geralmente 20 kHz a 40 kHz) geradas por um transdutor piezoelétrico e concentradas por uma sonotrodo de titânio contra uma bigorna de corte. Ao encostar no tecido sintético (poliéster, náilon, sarja resinada), a vibração ultrassônica atrita as moléculas do polímero internamente em microssegundos, fundindo e selando instantaneamente as fibras na linha de corte sem necessidade de lâminas quentes, sem carbonização, sem fumaça e sem queimar fios coloridos.",
    "technicalDetails": "Potência de gerador ultrassônico de 500W a 2.000W com amplitude de oscilação de 15 a 50 micrômetros. Eficaz em materiais que contenham no mínimo 65% a 70% de fibras sintéticas termoplásticas. Borda selada com resistência à tração equivalente a 100% da matriz têxtil original.",
    "beginnerExplanation": "É uma tesoura mágica que corta o emblema bordado usando som tão agudo que a gente não escuta! Em vez de usar ferro de solda quente que queima os dedos e faz fumaça fedida, a pontinha de ultrassom corta e sela a beirada do patch num segundo, deixando a bordinha lisinha e sem desfiar.",
    "howItWorks": [
      "1. O emblema bordado em tecido de poliéster é retirado da máquina de bordar.",
      "2. O gerador ultrassônico converte energia elétrica de 220V em vibração mecânica de 20.000 Hz.",
      "3. A sonotrodo de titânio vibra microscopicamente em contato com a borda do bordado.",
      "4. O atrito molecular instantâneo derrete as fibras sintéticas na linha milimétrica de pressão.",
      "5. O patch se desprende da entretela perfeitamente recortado e com a borda selada.",
      "6. A borda fica macia, sem fiapos, sem rebarbas duras e sem marcas escuras de queimado."
    ],
    "applications": [
      "Corte e acabamento de patches militares, brasões e emblemas esportivos em larga escala.",
      "Selamento de fitas de cetim personalizadas com nomes bordados.",
      "Recorte de etiquetas têxteis nobres de cetim e tafetá que não pinicam o pescoço.",
      "Fabricação de máscaras, aventais e vestimentas cirúrgicas hospitalares seladas."
    ],
    "characteristics": [
      "Zero queima: não deixa bordas amarelas ou pretas carbonizadas em tecidos claros.",
      "Totalmente seguro e ecológico: não emite gases tóxicos nem fumaça de plástico queimado.",
      "Borda cortada extremamente suave ao toque que não arranha a pele."
    ],
    "commonErrors": [
      "❌ Tentar cortar tecidos 100% algodão ou linho puro com ultrassom (o ultrassom exige fibras sintéticas para fundir).",
      "❌ Pressionar com força excessiva a ponta de titânio contra a base de aço danificando a sonotrodo.",
      "❌ Operar o gerador descalibrado fora da frequência de ressonância do transdutor piezoelétrico."
    ],
    "troubleshootingTips": [
      "O corte não está selando e o tecido continua desfiando: o material possui menos de 65% de poliéster ou a velocidade de corte manual foi rápida demais.",
      "Alarme de sobrecarga (Overload) piscando no gerador: verifique a afinação acústica (Tuning) do equipamento no potenciômetro frontal.",
      "A ponta do ultrassom aqueceu muito na mão: substitua os anéis de cerâmica piezoelétrica internos que estão com perda de rendimento dielétrico."
    ],
    "dicaArtrelados": "Para quem produz centenas de patches por mês: equipamentos manuais de corte ultrassônico (canetas ultrassônicas) aumentam em 5 vezes a sua produção em relação ao ferro de solda comum, com acabamento perfeito de alta costura e zero cheiro de fumaça no ateliê!",
    "voceSabia": "A tecnologia de soldagem por ultrassom foi inventada na década de 1960 para lacrar cápsulas de remédios estéreis e hoje é usada até para soldar partes da fuselagem de aviões a jato e cortar queijos industriais com precisão cirúrgica sem grudar na faca!",
    "practicalExercise": "Compare as bordas de dois patches recortados: um cortado com ferro de solda quente comum (note a crosta escura e dura de plástico derretido) e outro recortado por ultrassom ou laser frio (note a borda perfeitamente clara, macia e sem fiapos).",
    "quickSummary": "Ultrassom Têxtil é a tecnologia que recorta e sela as bordas de patches sintéticos através de vibrações sonoras ultrarrápidas, sem calor externo, sem fumaça e sem queimar o tecido.",
    "relatedTerms": [
      "Corte a Laser",
      "Ferro de Solda (Pyrograph)",
      "Patch Bordado",
      "Borda Patch",
      "Fibras Termoplásticas"
    ],
    "tags": [
      "ultrassom",
      "corte textil",
      "selamento",
      "patches",
      "emblemas",
      "acabamento",
      "tecnologia"
    ]
  },
  {
    "id": "upgrade-de-firmware-e-dsp-da-maquina",
    "code": "U-072",
    "letter": "U",
    "term": "Upgrade de Firmware e Atualização do DSP da Máquina (Machine Firmware & DSP Update)",
    "pronunciation": "up-grei-de de fir-mu-ér e a-tu-a-li-za-são do de-es-se-pe da má-qui-na",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês firmware (programa de controle fixo no chip) e Digital Signal Processor (processador digital de sinais).",
    "summary": "Procedimento de atualização do sistema operacional interno da máquina de bordar via pendrive para corrigir falhas e adicionar novas funções.",
    "definition": "O Upgrade de Firmware e Atualização do DSP da Máquina (Embroidery Machine Firmware Flash & Operating System Upgrade) é o processo eletrônico de regravação da memória ROM/Flash da placa-mãe da máquina de bordar com a versão mais recente de software fornecida pelo fabricante (Brother, Janome, Bernina, Tajima, Dahao). Essa atualização aprimora algoritmos de interpolação de pontos, suaviza acelerações do pantógrafo em curvas fechadas, corrige bugs de leitura de pendrives USB, melhora a sensibilidade do sensor de corte e frequentemente adiciona novos alfabetos, bastidores e idiomas na tela touch screen.",
    "technicalDetails": "Realizado via porta USB utilizando pendrive formatado em FAT32 com o arquivo binário raiz (.UPF, .BIN, .HEX). Durante o processo de gravação na memória flash (que dura de 2 a 5 minutos), a alimentação elétrica da máquina não pode ser interrompida sob hipótese alguma (risco de 'brickar' ou corromper a BIOS da placa-mãe).",
    "beginnerExplanation": "É como atualizar o sistema do seu celular ou da sua Smart TV, só que na máquina de bordar! Você baixa o arquivinho novo no site oficial da marca, coloca no pendrive e a máquina se atualiza sozinha, ficando mais rápida, corrigindo errinhos e ganhando fontes de letras novas.",
    "howItWorks": [
      "1. A bordadeira acessa a área de suporte no site oficial do fabricante da sua máquina.",
      "2. Confere a versão atual do firmware no menu 'Sobre' no painel da máquina (ex: Versão 1.20).",
      "3. Baixa o arquivo de atualização mais recente (ex: Versão 2.10) para o computador.",
      "4. Copia o arquivo descompactado diretamente para a raiz de um pendrive limpo formatado em FAT32.",
      "5. Conecta o pendrive na máquina de bordar desligada.",
      "6. Liga a máquina segurando o botão de serviço/agulha (conforme manual) e aguarda a barra de progresso chegar a 100% sem desligar a energia."
    ],
    "applications": [
      "Correção de travamentos do visor touch screen durante a leitura de matrizes pesadas.",
      "Compatibilidade com novos tamanhos de bastidores magnéticos lançados no mercado.",
      "Melhoria na precisão do corte automático de linha e posicionamento de agulha.",
      "Adição de novos idiomas, fontes embutidas e ferramentas de edição no painel."
    ],
    "characteristics": [
      "Procedimento 100% gratuito disponibilizado pelos fabricantes autorizados.",
      "Mantém o equipamento moderno com as mais novas tecnologias de software.",
      "Melhora a estabilidade e a velocidade de resposta do painel de comando."
    ],
    "commonErrors": [
      "❌ DESLIGAR A MÁQUINA DA TOMADA OU TIRAR O PENDRIVE durante a barra de progresso da atualização.",
      "❌ Tentar instalar o firmware de um modelo diferente de máquina corrompendo a placa-mãe.",
      "❌ Usar pendrives gigantes de 64 GB em formato NTFS em máquinas que só leem pendrives pequenos de 4 GB a 8 GB em FAT32."
    ],
    "troubleshootingTips": [
      "A máquina não reconhece o arquivo de atualização no pendrive: certifique-se de que o pendrive está formatado em FAT32 e que o arquivo foi extraído do arquivo .ZIP diretamente na raiz (fora de qualquer pasta).",
      "A tela ficou preta ou travada com luz vermelha: mantenha a calma; desligue a máquina, reconecte o pendrive com o firmware original e ligue no modo de recuperação forçada indicado no manual.",
      "Faltou energia no meio da atualização e a máquina não liga: leve a placa-mãe a uma assistência técnica autorizada para regravação via gravador de EEPROM externo."
    ],
    "dicaArtrelados": "Antes de fazer qualquer atualização de firmware na sua máquina: coloque ela ligada em um No-break (bateria) ou faça em um horário que não haja risco de queda de energia! Isso garante 100% de tranquilidade durante os 3 minutos da atualização!",
    "voceSabia": "As máquinas de bordar Dahao mais modernas possuem placas com conexão Wi-Fi que se conectam à nuvem e baixam as atualizações de firmware automaticamente enquanto você dorme, exatamente como os carros elétricos da Tesla!",
    "practicalExercise": "Vá até o painel da sua máquina de bordar. Toque no ícone de engrenagem (Configurações) e procure a página de informações do sistema. Anote a versão do firmware que está instalada e pesquise no site do fabricante se já existe uma versão mais nova para ela.",
    "quickSummary": "Upgrade de Firmware é a atualização do sistema operacional interno da máquina de bordar que corrige falhas, melhora a velocidade dos pontos e traz novos recursos.",
    "relatedTerms": [
      "Painel Touch Screen",
      "Memória Flash",
      "Pendrive FAT32",
      "Placa-Mãe",
      "Painel DSP Dahao"
    ],
    "tags": [
      "firmware",
      "upgrade",
      "dsp",
      "atualizacao",
      "painel",
      "software",
      "manutencao"
    ]
  },
  {
    "id": "usabilidade-ergonomica-e-ginastica-laboral",
    "code": "U-073",
    "letter": "U",
    "term": "Usabilidade Ergonômica e Ginástica Laboral para Bordadeiras (Embroidery Studio Ergonomics & Wellness)",
    "pronunciation": "u-za-bi-li-da-de er-go-nô-mi-ca e gi-nás-ti-ca la-bo-ral pa-ra bor-da-dei-ras",
    "level": "Iniciante 🟢",
    "category": "Gestão & Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego ergon (trabalho) e nomos (leis naturais). Normas de saúde ocupacional (NR-17).",
    "summary": "Adequação da altura de bancadas, iluminação focal, postura correta e pausas ativas para bordar com saúde, conforto e sem dores no corpo.",
    "definition": "A Usabilidade Ergonômica e Ginástica Laboral para Operadores de Bordado (Embroidery Workplace Ergonomics & Repetitive Strain Prevention) é o conjunto de preceitos biomecânicos, adequações estruturais do ateliê e rotinas diárias de alongamento corporal que visam proteger a saúde física das bordadeiras. A rotina de fechar bastidores pesados, manusear tesouras de precisão e olhar fixamente para agulhas exige: bancadas na altura do cotovelo (85 cm a 95 cm), cadeiras ergonômicas com apoio lombar ajustável, iluminação LED com índice de reprodução de cor (IRC > 90) sem reflexo, e pausas ativas de 5 minutos a cada 2 horas com exercícios de rotação de punhos e ombros para prevenção de LER/DORT (Lesões por Esforço Repetitivo).",
    "technicalDetails": "Regulamentada pelas diretrizes da Norma Regulamentadora NR-17 (Ergonomia). A força manual para travar aros de bastidores deve ser inferior a 15% da capacidade muscular isométrica, recomendando-se o uso de dispositivos auxiliares (Estações de Bastidor / Hoop Stations) e chaves ergonômicas com cabo emborrachado para aperto de parafusos.",
    "beginnerExplanation": "É cuidar do seu corpo para bordar com alegria por muitos e muitos anos sem sentir dor nas costas, no pescoço ou nos punhos! Envolve ter uma cadeira confortável, uma luz boa para enxergar o buraquinho da agulha sem forçar os olhos e fazer pausas para esticar os braços e as mãos.",
    "howItWorks": [
      "1. A bordadeira ajusta a altura da sua cadeira de modo que os pés fiquem 100% apoiados no chão e os joelhos a 90 graus.",
      "2. Posiciona a máquina de bordar sobre uma bancada firme sem vibração na altura da cintura.",
      "3. Instala uma luminária articulada com LED neutro brilhante focada diretamente sobre a chapa de agulha.",
      "4. Utiliza uma chave ergonômica ou bastidor magnético para fechar o bastidor sem forçar os tendões dos dedos.",
      "5. A cada 90 minutos de produção, levanta-se para beber água e faz 3 minutos de alongamento de braços, pescoço e coluna.",
      "6. Trabalha o dia inteiro produzindo peças lindas e termina o dia com o corpo leve e sem dores."
    ],
    "applications": [
      "Organização física e layout produtivo de ateliês residenciais e comerciais.",
      "Prevenção da Síndrome do Túnel do Carpo e tendinites em artesãs e bordadeiras.",
      "Manutenção da acuidade visual e alívio da fadiga ocular em trabalhos com fios escuros.",
      "Aumento da produtividade e do bem-estar diário no ambiente de costura e artesanato."
    ],
    "characteristics": [
      "Transforma o ateliê em um espaço de prazer, bem-estar e conforto absoluto.",
      "Reduz em até 95% os afastamentos por dores lombares e lesões de punho.",
      "Garante longevidade e saúde profissional para toda a carreira da bordadeira."
    ],
    "commonErrors": [
      "❌ Trabalhar sentada em banquetas duras sem encosto para as costas ou com os pés pendurados no ar.",
      "❌ Bordar em cômodos escuros com luz amarela fraca forçando a vista para enfiar a linha na agulha.",
      "❌ Passar 8 horas seguidas sentada na mesma posição sem levantar nem para tomar água."
    ],
    "troubleshootingTips": [
      "Dor e queimação no pescoço e ombros no fim da tarde: a tela do computador ou a máquina estão muito baixas; eleve a máquina com suportes de borracha até a altura dos seus olhos.",
      "Formigamento e dormência nos dedos das mãos ao fechar bastidores: sintomas de compressão do nervo mediano; substitua bastidores tradicionais por bastidores magnéticos e use chaves com cabo grosso anatômico.",
      "Dor de cabeça frequente após trabalhar: iluminação insuficiente ou com cintilação (flicker); troque a lâmpada do teto por luminária de LED contínuo luz do dia (4.000K a 5.000K)."
    ],
    "dicaArtrelados": "Bordar é uma arte maravilhosa, mas o seu maior instrumento de trabalho é o seu próprio corpo! Coloque um alarme no celular para tocar a cada 2 horas: levante, beba um copo d'água bem fresca, gire os punhos 10 vezes para cada lado e olhe pela janela para relaxar os olhos! Você merece esse carinho!",
    "voceSabia": "Bordadeiras da corte imperial chinesa da Dinastia Ming praticavam exercícios ancestrais de respiração e flexibilidade nos dedos chamados 'Dança dos Dedos de Seda' para manter as articulações jovens e flexíveis até a terceira idade!",
    "practicalExercise": "Faça agora mesmo uma pausa de 1 minuto: entrelace os dedos das duas mãos, estique os braços lá na frente com as palmas viradas para fora e respire fundo 3 vezes. Depois puxe a ponta dos dedos de uma mão para trás suavemente. Sinta o alívio imediato nos tendões do punho!",
    "quickSummary": "Usabilidade Ergonômica e Ginástica Laboral é o cuidado com a postura, cadeira, iluminação e alongamentos diários para bordar com total saúde, conforto e sem dores.",
    "relatedTerms": [
      "Bancada de Trabalho",
      "Iluminação LED",
      "Bastidor Magnético",
      "Prevenção de LER/DORT",
      "Gestão do Ateliê"
    ],
    "tags": [
      "ergonomia",
      "saude",
      "ginastica laboral",
      "postura",
      "iluminacao",
      "bem estar",
      "gestao"
    ]
  },
  {
    "id": "uniformizacao-visual-de-marca-e-branding-de-embalagem",
    "code": "U-074",
    "letter": "U",
    "term": "Uniformização Visual de Marca e Branding de Embalagem para Bordados (Embroidery Packaging & Unboxing Experience)",
    "pronunciation": "u-ni-for-mi-za-são vi-zu-al de mar-ca e brân-ding de em-ba-la-gem",
    "level": "Iniciante 🟢",
    "category": "Gestão & Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim uniformis (de uma só forma) e do inglês branding (construção e gestão de marca). Marketing de experiência.",
    "summary": "Estratégia de apresentação profissional com papel de seda, laço de cetim, tag personalizada e cheirinho especial que transforma o bordado em presente inesquecível.",
    "definition": "A Uniformização Visual de Marca e Branding de Embalagem para Bordados (Embroidery Unboxing Experience & Visual Brand Identity) é o conjunto de técnicas de marketing de produto e design sensorial aplicadas na apresentação final das peças produzidas pelo ateliê. Abrange a padronização das cores da identidade visual, uso de caixas rígidas ou saquinhos de algodão cru com a logomarca bordada, dobradura impecável da toalha ou enxoval, papel de seda com adesivo lacre, tag de cuidados com cartão de agradecimento nominal e marketing olfativo (aromatização com essência suave de bebê ou flor de algodão).",
    "technicalDetails": "A experiência do unboxing afeta diretamente a percepção de valor: pesquisas demonstram que produtos têxteis entregues em embalagens refinadas com marketing olfativo e tags de alta gramatura (couché 300g com laminação fosca) permitem cobrar de 30% a 50% mais caro pelo mesmo bordado em relação a peças entregues em sacolas plásticas simples de supermercado.",
    "beginnerExplanation": "É a arte de embalar a encomenda como se fosse a joia mais preciosa do mundo! É dobrar a toalhinha com carinho, colocar papel de seda, amarrar uma fita de cetim bonita, colocar um bilhetinho escrito à mão e dar uma borrifadinha de cheirinho gostoso. Quando a cliente abre o pacote, ela se apaixona antes mesmo de ver o bordado!",
    "howItWorks": [
      "1. O bordado finalizado é passado a ferro pelo avesso e inspecionado contra qualquer ponta solta de linha.",
      "2. A peça é dobrada geometricamente destacando o monograma ou desenho bordado bem no centro visual.",
      "3. Envolve-se a peça em uma folha de papel de seda branco ou estampado com a marca do ateliê.",
      "4. Fecha-se com um adesivo lacre metalizado ou fita de cetim com laço perfeito.",
      "5. Inclui-se uma tag com as instruções de lavagem e um cartãozinho com o nome da cliente escrito à mão.",
      "6. Borrifa-se a essência exclusiva do ateliê no papel de seda e acomoda-se na sacola de papel kraft nobre para entrega."
    ],
    "applications": [
      "Entregas de enxovais de bebê de luxo, toalhas de casamento e presentes afetivos.",
      "Envio de encomendas pelos Correios com proteção plástica impermeável e caixa rígida.",
      "Fotografia profissional de produtos para publicação no Instagram e catálogo do ateliê.",
      "Fidelização de clientes de alta renda que compram para presentear padrinhos e maternidades."
    ],
    "characteristics": [
      "Multiplica o valor percebido do trabalho artesanal e personalizado.",
      "Estimula as clientes a filmarem a abertura do pacote (Unboxing) e marcarem o ateliê no Instagram.",
      "Gera propaganda espontânea de boca a boca e fidelidade absoluta da clientela."
    ],
    "commonErrors": [
      "❌ Entregar uma toalha bordada maravilhosa amarrotada dentro de uma sacolinha plástica transparente de mercado.",
      "❌ Borrifar perfume líquido colorido direto sobre os pontos de linha de bordado (pode manchar o tecido).",
      "❌ Entregar peças sem nenhuma etiqueta ou cartão de contato do ateliê para futuras encomendas."
    ],
    "troubleshootingTips": [
      "Clientes achando o preço do bordado caro: melhore radicalmente a sua embalagem; fotos da peça em uma linda caixa com laço de cetim justificam o preço nobre imediatamente.",
      "O cheirinho do pacote manchou a linha de seda: aplique a essência aromatizadora apenas no papel de seda de proteção ou no cartãozinho de papel, nunca diretamente sobre os fios.",
      "A fita de cetim desfiou na ponta ao cortar: corte a fita sempre na diagonal e passe a pontinha rapidamente na chama de um isqueiro para selar o náilon."
    ],
    "dicaArtrelados": "Tenha um 'Cheirinho Oficial do seu Ateliê'! Escolha uma essência suave de bebê (como 'Mamãe e Bebê' ou 'Flor de Algodão') e borrife sempre no papel de seda de todas as suas entregas. Toda vez que a cliente sentir aquele cheiro pela casa, ela vai lembrar do carinho do seu ateliê!",
    "voceSabia": "Marcas mundiais de luxo como Tiffany & Co. e Chanel gastam milhões no desenvolvimento de suas embalagens icônicas, pois a neurociência comprovou que o cérebro humano libera dopamina (hormônio do prazer) no exato instante em que desatamos um laço de fita elegante!",
    "practicalExercise": "Pegue uma toalha bordada pronta. Dobre-a em três partes destacando o bordado no meio. Coloque em cima de uma folha de papel de seda, amarre uma fita de cetim com um laço bonito e coloque um bilhete escrito à mão: 'Feito com amor especialmente para você'. Tire uma foto e veja a transformação de luxo!",
    "quickSummary": "Uniformização Visual de Marca e Branding de Embalagem é a experiência encantadora de apresentar o bordado com papel de seda, laços, cheirinho especial e tags profissionais que valorizam o seu trabalho.",
    "relatedTerms": [
      "Experiência de Unboxing",
      "Identidade Visual",
      "Marketing Sensorial",
      "Instruções de Lavagem",
      "Precificação e Valor"
    ],
    "tags": [
      "branding",
      "embalagem",
      "unboxing",
      "marketing",
      "apresentacao",
      "gestao",
      "experiencia"
    ]
  },
  {
    "id": "u-075-underlay-perpendicular-e-ancoragem-cruzada",
    "code": "U-075",
    "term": "Underlay Perpendicular e Ancoragem Cruzada (Perpendicular Grid & Cross-Hatch Underlay Architecture)",
    "pronunciation": "an-der-lei per-pen-di-cu-lar e an-co-ra-gem cru-za-da",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do inglês 'underlay' (camada de base) e do latim 'perpendicularis' (a prumo, em ângulo de 90°). Princípio da engenharia estrutural têxtil para neutralizar o repuxo bidirecional.",
    "summary": "Estratégia de digitalização que posiciona os pontos de sustentação exatamente a 90° em relação à camada de acabamento, criando uma malha indeformável sob o bordado.",
    "definition": "O Underlay Perpendicular e Ancoragem Cruzada (Perpendicular Cross-Hatch Underlay & Orthogonal Stabilization) é uma metodologia avançada de programação estrutural de matrizes na qual as trajetórias dos subpontos de base são traçadas rigorosamente a 90 graus (ângulo ortogonal reto) em relação à direção angular dos pontos de cobertura (*topstitch*). Essa geometria dissipa as forças de tração mecânica da linha superior transversalmente às fibras do tecido, unindo o tecido e a entretela em um composto compósito rígido antes da passagem da agulha de acabamento e impedindo a formação de 'valas' ou afundamento dos pontos.",
    "technicalDetails": "Programado com densidade aberta entre 1,5 mm e 2,5 mm e comprimento de ponto de 3,0 mm a 4,0 mm. Em preenchimentos tatami com ângulo de 45°, o underlay perpendicular deve ser gerado a 135° (ou malha dupla 45°/135°), garantindo recuo perimétrico (*inset distance*) de 0,6 mm a 1,0 mm das bordas para que nenhum ponto da base escape do contorno.",
    "beginnerExplanation": "É como fazer uma grade de ferro cruzada antes de jogar o cimento! Se a linha bonita de cima vai deitada da esquerda para a direita, a costura de sustentação embaixo é feita em pé de cima para baixo. Isso trava o pano de um jeito tão firme que o tecido não encolhe nem enruga de jeito nenhum!",
    "howItWorks": [
      "1. O software calcula o ângulo do preenchimento principal da matriz (ex: 30°).",
      "2. Gera automaticamente uma camada de ponto corrido longo ou tatami aberto a 120° (90° perpendicular).",
      "3. A máquina borda primeiro esse esqueleto cruzado, unindo o tecido à entretela.",
      "4. Em seguida, a máquina borda a camada de acabamento de cetim ou tatami denso.",
      "5. Os pontos de acabamento assentam como tábuas sobre vigas cruzadas, sem afundar nas fibras.",
      "6. O bordado final fica liso, uniforme e sem deformações nas bordas externas."
    ],
    "applications": [
      "Bordados em malhas piquet, viscolycra e tecidos elásticos que repuxam facilmente.",
      "Grandes brasões corporativos e logotipos com preenchimentos densos.",
      "Bordados sobre toalhas felpudas e tecidos de trama aberta como linho rústico.",
      "Letras largas em ponto cheio para evitar o afundamento no centro da coluna."
    ],
    "characteristics": [
      "Elimina o encolhimento e a deformação geométrica de círculos e quadrados.",
      "Garante cobertura perfeita com menor quantidade de pontos de acabamento.",
      "Aumenta a durabilidade do bordado após sucessivas lavagens industriais."
    ],
    "commonErrors": [
      "❌ Colocar o underlay no mesmo ângulo da camada superior (os pontos caem nos mesmos vãos e o tecido afunda).",
      "❌ Deixar o underlay perpendicular encostar nas beiradas (ele vaza para fora do desenho).",
      "❌ Usar pontos muito curtos no underlay (< 1,5 mm), perfurando o tecido em excesso."
    ],
    "troubleshootingTips": [
      "O círculo da matriz ficou ovalado na camisa: aplique underlay perpendicular em grade dupla com recuo de 0,8 mm e aumente a compensação de repuxo.",
      "O ponto cheio afundou no meio da letra: adicione um underlay zig-zag perpendicular antes do ponto de acabamento.",
      "Pontos de base aparecendo nas bordas do bordado: aumente a margem de recuo (Inset Distance) para 0,8 mm no software de digitalização."
    ],
    "dicaArtrelados": "A regra de ouro dos grandes programadores: NUNCA coloque a sustentação (underlay) na mesma direção do ponto de cima! Se o ponto de cima for horizontal, a base deve ser vertical. Se for diagonal a 45°, a base deve ser a 135°. Essa cruzada ortogonal é o segredo do bordado perfeitamente plano!",
    "voceSabia": "O conceito de ancoragem perpendicular foi herdado da construção civil e das técnicas milenares de tecelagem, onde a trama a 90° sobre o urdume confere resistência mecânica indeformável aos tecidos!",
    "practicalExercise": "Digitalize duas matrizes de um círculo de 5 cm: na primeira, use underlay no mesmo sentido do preenchimento; na segunda, use underlay perpendicular a 90°. Borde ambos em malha fina e compare a forma perfeitamente redonda do segundo.",
    "quickSummary": "Underlay Perpendicular é a técnica de cruzar os pontos de base a 90° em relação à cobertura, criando um alicerce rígido que impede enrugamento e afundamento.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11",
      "density": "Espaçamento de base: 2.0 a 2.5 mm a 90°"
    },
    "relatedTerms": [
      "Underlay Tatami / Grid",
      "Compensação de Repuxo (Pull Comp)",
      "Ângulo de Ponto (Stitch Angle)",
      "Recuo Perimetral (Inset Distance)",
      "Topstitch (Ponto de Cobertura)"
    ],
    "tags": [
      "u-075",
      "underlay",
      "perpendicular",
      "ancoragem",
      "digitalizacao",
      "subponto",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Digitizing Structural Foundations & Underlay Angles. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Advanced Geometric Underlay Strategies for Knitwear. Mississauga, 2021.",
      "ARTRELADOS. Fundamentos da Digitalização Profissional de Matrizes de Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-076-ultrassom-portatil-para-limpeza-de-lotes",
    "code": "U-076",
    "term": "Ultrassom Portátil para Limpeza e Remoção de Manchas Têxteis (Ultrasonic Stain & Spot Remover Pen)",
    "pronunciation": "ul-tras-som por-ta-til pa-ra lim-pe-za e re-mo-são de man-chas tes-teis",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Manutenção & Ferramentas",
    "origin": "Do latim 'ultra' (além) e 'sonus' (som). Tecnologia piezoelétrica industrial miniaturizada para higienização e salvamento de peças prontas no ateliê.",
    "summary": "Caneta ou ponteira ultrassônica que emite microvibrações acústicas de alta frequência para remover manchas de óleo de máquina e graxa sem esfregar nem danificar o bordado.",
    "definition": "O Ultrassom Portátil para Limpeza e Remoção de Manchas Têxteis (Ultrasonic Spot Cleaning Pen & Cavitation Stain Remover) é um dispositivo eletromecânico composto por um transdutor piezoelétrico de alta frequência que converte energia elétrica em vibrações acústicas na faixa de 40 a 50 kHz. Ao ser aplicado sobre uma mancha acidental de óleo de máquina, graxa ou resíduo adesivo umedecida com solução tensoativa neutra, a ponteira gera o fenômeno físico da 'cavitação' (formação e implosão microscópica de microbolhas), desprendendo instantaneamente os contaminantes das fibras têxteis sem atrito mecânico abrasivo.",
    "technicalDetails": "Frequência de operação: 45 kHz ± 5 kHz; Consumo de energia: 15W a 30W. Elimina o risco de desfiamento ou 'pilling' (bolinhas) nas linhas de viscose e poliéster, preservando o brilho e a tensão do bordado em peças brancas de alto valor agregado.",
    "beginnerExplanation": "É uma canetinha mágica que vibra tão rápido que o ouvido humano nem escuta! Quando a máquina espirra uma gotinha de óleo na camisa branca do cliente, em vez de esfregar com escova e estragar os pontos, você encosta essa canetinha com uma gotinha de sabão e a mancha se desfaz na hora como mágica!",
    "howItWorks": [
      "1. A bordadeira identifica uma mancha acidental de óleo ou sujeira na peça bordada.",
      "2. Coloca-se um pano absorvente limpo por baixo da área manchada.",
      "3. Pinga-se uma gota de água com detergente neutro ou desengraxante têxtil suave.",
      "4. Encosta-se suavemente a ponta da caneta de ultrassom sobre a mancha sem fazer força.",
      "5. As ondas de ultrassom quebram a tensão superficial do óleo por cavitação em 5 a 10 segundos.",
      "6. A mancha migra para o pano de baixo e a peça branca fica 100% limpa e impecável."
    ],
    "applications": [
      "Salvamento de camisas brancas e jalecos hospitalares manchados com óleo de cabeçote.",
      "Remoção de resíduos de cola spray e fitas adesivas em tecidos nobres e veludos.",
      "Limpeza rápida de marcas de giz e canetas fantasmas recalcitrantes.",
      "Higienização final no controle de qualidade de ateliês de bordados finos."
    ],
    "characteristics": [
      "Não agride as fibras delicadas nem desbota as cores das linhas.",
      "Evita o retrabalho e a perda de peças prontas caras dos clientes.",
      "Substitui solventes químicos agressivos e inflamáveis no ambiente de trabalho."
    ],
    "commonErrors": [
      "❌ Pressionar a ponta do ultrassom com força excessiva contra o tecido (o efeito vem da onda sonora, não da força mecânica).",
      "❌ Usar o aparelho a seco sem umedecer o local com água (a cavitação exige meio líquido).",
      "❌ Esfregar o tecido com escova de cerdas duras antes de tentar o ultrassom."
    ],
    "troubleshootingTips": [
      "A mancha de óleo não sai: adicione uma gota de detergente desengraxante neutro para agir como agente tensoativo junto com o ultrassom.",
      "O óleo está se espalhando: troque o pano absorvente de baixo por uma folha de papel toalha seca e limpa a cada 5 segundos.",
      "O aparelho aqueceu: desligue por 1 minuto para resfriamento do transdutor piezoelétrico."
    ],
    "dicaArtrelados": "Se caiu uma gotinha de óleo da lançadeira na camisa branca do cliente: NUNCA esfregue com os dedos nem jogue alvejante! O ultrassom portátil ou uma esponja macia com água morna e detergente neutro dissolve o óleo em segundos sem espalhar a mancha!",
    "voceSabia": "A tecnologia de cavitação por ultrassom é a mesma utilizada por joalheiros suíços para limpar engrenagens microscópicas de relógios de ouro e por dentistas para limpeza tártara de alta precisão!",
    "practicalExercise": "Pegue um retalho de tecido branco com uma marca proposital de graxa. Umedeça com água e detergente e encoste a ponteira de ultrassom. Observe a mancha desaparecer sem necessidade de fricção mecânica.",
    "quickSummary": "Ultrassom Portátil é a ferramenta que remove manchas de óleo e graxa de peças bordadas por ondas acústicas de alta frequência, salvando roupas sem esfregar.",
    "recommendedSettings": {
      "speedPPM": "N/A (Pós-Processamento)",
      "needleType": "N/A",
      "density": "Frequência de cavitação: 40 a 50 kHz"
    },
    "relatedTerms": [
      "Remoção de Manchas de Óleo",
      "Óleo Mineral Branco",
      "Controle de Qualidade Têxtil",
      "Cavitação Acústica",
      "Desengraxante Neutro"
    ],
    "tags": [
      "u-076",
      "ultrassom",
      "limpeza",
      "manchas",
      "oleo de maquina",
      "acabamento",
      "ferramentas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE CARE ALLIANCE. Ultrasonic Spotting and Garment Cleaning in Industrial Apparel. Zurich, 2022.",
      "JUKI INDUSTRIAL SEWING. Machine Oil Stain Removal and Spot Cleaning Technologies. Tokyo, 2021.",
      "ARTRELADOS. Guia de Salvamento e Limpeza Profissional de Bordados Manchados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-077-unidade-de-retencao-de-fio-no-tracionador",
    "code": "U-077",
    "term": "Unidade de Retenção de Fio no Tracionador e Mola Garra (Thread Trapping Spring & Retaining Plate)",
    "pronunciation": "u-ni-da-de de re-ten-são de fi-o no tra-si-o-na-dor e mo-la gar-ra",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes e Mecânica da Máquina",
    "origin": "Do latim 'retinere' (segurar, prender) e do inglês 'thread trap'. Dispositivo mecatrônico de agarre instalado na barra frontal do cabeçote de bordado.",
    "summary": "Conjunto de molas metálicas tipo garra (Trapping Springs) que seguram as pontas das linhas paradas no cabeçote, evitando que se soltem ou entrem nas agulhas em operação.",
    "definition": "A Unidade de Retenção de Fio no Tracionador e Mola Garra (Thread Trapping Plate & Upper Thread Gripper Spring Assembly) é o componente mecânico de precisão posicionado na parte inferior frontal do conjunto de troca de cores do cabeçote de bordado. Sua função é reter e imobilizar a ponta cortada de cada uma das 9, 12 ou 15 linhas de cores inativas após o ciclo do trimer (*auto-trim*), mantendo a tensão de reserva pronta para o próximo engate de cor e impedindo que fios soltos caiam na área de trabalho, sejam costurados por baixo de outros pontos (*trapped threads*) ou escapem do olho da agulha no arranque.",
    "technicalDetails": "Composta por lâminas de aço-mola inoxidável polido montadas sobre uma barra base com ranhuras em V calibradas. A pressão de retenção deve ser suficiente para prender linhas No 40 e No 60 sem deformar os filamentos e sem permitir escape por vibração do pantógrafo a 1.000 PPM.",
    "beginnerExplanation": "São aquelas molinhas ou garrinhas de metal que ficam na frente da máquina, segurando a ponta de cada linha colorida que não está costurando no momento. Elas deixam todas as linhas bem presas e esticadinhas para que nenhuma fique solta dançando e embolando no bordado da agulha vizinha!",
    "howItWorks": [
      "1. A máquina conclui uma cor e o sistema de corte (trimer) corta a linha por baixo.",
      "2. A mola garra frontal segura firmemente a pontinha superior da linha que acabou de ser cortada.",
      "3. O cabeçote se desloca para a próxima agulha de cor selecionada.",
      "4. A nova agulha começa a bordar e a mola libera a linha suavemente na primeira descida.",
      "5. A linha da agulha anterior permanece travada na sua respectiva mola, imóvel e protegida.",
      "6. O bordado segue perfeitamente limpo, sem pontas de cores erradas sobrepostas."
    ],
    "applications": [
      "Máquinas industriais e semi-industriais multicabeças e multicoloridas (6 a 15 agulhas).",
      "Bordados multicoloridos complexos com dezenas de trocas automáticas de cor.",
      "Eliminação de emaranhados e pontas soltas na superfície do bordado.",
      "Prevenção do escape de linha do olho da agulha no primeiro ponto após a troca de cor."
    ],
    "characteristics": [
      "Aço inoxidável temperado com acabamento polido anti-desfiamento.",
      "Manutenção simples com limpeza por pincel ou ar comprimido suave.",
      "Essencial para a automação fluida de cabeçotes industriais."
    ],
    "commonErrors": [
      "❌ Deixar fiapos acumulados nas molas de retenção, fazendo a mola perder a pressão e soltar a linha.",
      "❌ Entortar a mola com alicate ou chapa de fenda ao tentar limpá-la.",
      "❌ Passar a linha fora da ranhura de retenção após a troca manual de cones."
    ],
    "troubleshootingTips": [
      "A linha sai do olho da agulha logo no primeiro ponto após trocar de cor: a ponta não estava presa na mola de retenção; encaixe a linha na ranhura da garra.",
      "Aparecem pedacinhos de linhas de outras cores costuradas no meio do desenho: a mola de retenção está solta ou suja de poeira; limpe as lâminas com ar comprimido.",
      "A linha fica desfiando ao entrar na mola: verifique se não há rebarbas na lâmina de aço e passe uma lixa 2000 bem fina se necessário."
    ],
    "dicaArtrelados": "Crie o hábito diário de passar um pincel macio ou um pedaço de linha encerada entre as molinhas de retenção do cabeçote! A poeira de linha que junta ali afasta as molas e faz a linha escapar. Molas limpinhas garantem trocas de cor perfeitas sem o fio sair da agulha!",
    "voceSabia": "Em máquinas industriais de altíssima velocidade, as garras de retenção contam com pequenos ímãs ou sensores pneumáticos para abrir e fechar as lâminas no tempo exato de 0,05 segundos durante o pulo de cor!",
    "practicalExercise": "Observe a sua máquina durante uma troca de cor automática: veja como a mola segura a ponta da cor que parou e como a nova cor é liberada suavemente no primeiro ponto. Puxe a ponta com o dedo para sentir a pressão suave da mola.",
    "quickSummary": "Unidade de Retenção é o conjunto de molas que prende as pontas das linhas paradas no cabeçote, evitando que se soltem ou embolem durante o bordado.",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "Compatível com linha",
      "density": "Pressão de retenção: 30 a 50 gf"
    },
    "relatedTerms": [
      "Troca Automática de Cor",
      "Trimer (Cortador de Linha)",
      "Cabeçote Multicor",
      "Sensor de Quebra de Linha",
      "Ponto de Amarração Inicial"
    ],
    "tags": [
      "u-077",
      "retencao de fio",
      "mola garra",
      "troca de cor",
      "cabecote",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL MANUAL. Upper Thread Holding Spring and Trapping Mechanism. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. Color Change Assembly and Thread Trapper Setup. Ichinomiya, 2021.",
      "ARTRELADOS. Mecânica Aplicada ao Bordado: Manutenção de Cabeçotes e Trocas de Cor. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-078-urdidura-longitudinal-e-resistencia-a-tracao",
    "code": "U-078",
    "term": "Urdidura Longitudinal e Resistência à Tração Têxtil (Warp Tensile Strength & Grainline Stability)",
    "pronunciation": "ur-di-du-ra lon-gi-tu-di-nal e re-zis-ten-si-a a tra-são tes-til",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Estruturação & Física Têxtil",
    "origin": "Do latim 'ordiri' (começar, urdir) e 'longitudo' (comprimento). Conceito clássico da engenharia têxtil sobre a montagem dos fios longitudinais no tear.",
    "summary": "Comportamento mecânico dos fios paralelos à ourela do tecido (urdume), que suportam a maior tensão de estiramento no bastidor e ditam a direção de menor deformação do bordado.",
    "definition": "A Urdidura Longitudinal e Resistência à Tração Têxtil (Warp Grainline Mechanical Stability & Tensile Vector Analysis) designa o comportamento físico dos fios estruturais que correm paralelamente à ourela (*selvedge*) do tecido no sentido do comprimento da peça no tear. Por serem submetidos a tensões mecânicas elevadas durante a tecelagem, os fios de urdume possuem torção mais alta, maior tenacidade e praticamente elasticidade nula quando comparados aos fios transversais de trama. O conhecimento dessa orientação permite ao bordador enquadrar a peça alinhando as maiores forças de repuxo do bordado com a rigidez natural da urdidura.",
    "technicalDetails": "A urdidura possui de 2 a 4 vezes mais resistência à tração e menor coeficiente de deformação linear do que a trama. Em tecidos planos de algodão, sarja e linho, os ângulos de ponto que cruzam a urdidura a 45° ou 90° distribuem o repuxo de forma equilibrada, prevenindo o arqueamento de linhas retas e a formação de rugas diagonais.",
    "beginnerExplanation": "É o sentido do fio do tecido que segue o comprimento da peça (na mesma direção daquela bordinha de fábrica chamada ourela). Esse fio é o mais forte e não estica nada! Quando colocamos a roupa no bastidor alinhada com esse fio reto, o bordado não entorta e fica muito mais firme!",
    "howItWorks": [
      "1. A bordadeira localiza a ourela ou puxa levemente o tecido para identificar o sentido mais firme (urdume).",
      "2. Posiciona a peça no bastidor mantendo o sentido do fio do urdume perfeitamente paralelo aos eixos do aro.",
      "3. O tecido é tensionado no bastidor sem distorções angulares.",
      "4. A máquina executa os pontos; a resistência natural dos fios de urdume absorve a força da agulha.",
      "5. Ao retirar a peça do bastidor, as fibras retornam ao estado relaxado sem deformar o contorno do logotipo.",
      "6. A peça bordada mantém o caimento impecável e o alinhamento da estampa."
    ],
    "applications": [
      "Bordados em camisas sociais de tricoline, oxford e sarja de alfaiataria.",
      "Bordados em uniformes pesados de brim e jaquetas jeans estruturadas.",
      "Cálculo de alinhamento em toalhas de mesa e guardanapos de linho puro.",
      "Evitar deformação de grandes bandeiras e estandartes comemorativos."
    ],
    "characteristics": [
      "Sentido de maior estabilidade dimensional e menor estiramento elástico.",
      "Fios mais finos, torcidos e resistentes por centímetro quadrado.",
      "Fator determinante para posicionamento correto de moldes no corte e bordado."
    ],
    "commonErrors": [
      "❌ Enquadrar o tecido com o fio enviesado (a 45° no bastidor), fazendo o bordado repuxar em forma de losango.",
      "❌ Puxar as pontas do tecido de forma desigual ao fechar o aro do bastidor.",
      "❌ Cortar painéis de camisas ignorando o sentido do fio reto do tecido."
    ],
    "troubleshootingTips": [
      "O bordado quadrado ficou torto parecendo um losango: o tecido foi colocado enviesado no bastidor; alinhe o tecido rigorosamente pelo fio do urdume.",
      "A camisa social franziu ao redor do bolso bordado: use entretela de corte limpo (Cut-Away) e posicione a urdidura reta no bastidor.",
      "Dificuldade em achar o sentido do fio: puxe suavemente o tecido na horizontal e na vertical; a direção que MENOS esticar é a urdidura."
    ],
    "dicaArtrelados": "Para saber em 2 segundos qual é o sentido do urdume (o lado mais forte do pano): puxe o tecido com as duas mãos na vertical e depois na horizontal! O lado que não esticar quase nada e for super durinho é o urdume! Enquadre o bastidor sempre reto com esse lado!",
    "voceSabia": "Nas antigas fábricas de seda de Lyon, os fios de urdume eram encerados com goma vegetal e cera de abelha pura para suportar o impacto de até 50 mil batidas de tear sem arrebentar um único filamento!",
    "practicalExercise": "Pegue um retalho de tecido plano (tricoline ou sarja). Puxe nas duas direções e depois na diagonal (viés). Sinta com os dedos como a urdidura é firme e como o viés estica facilmente. Compreenda porque o alinhamento reto é vital no bastidor.",
    "quickSummary": "Urdidura é a direção dos fios mais fortes e compridos do tecido, que não esticam e garantem a máxima sustentação e estabilidade ao bordado.",
    "recommendedSettings": {
      "speedPPM": "750 a 900 PPM",
      "needleType": "75/11 Ponta Fina (Sharp)",
      "density": "Compensação de repuxo padrão: 0.35 mm"
    },
    "relatedTerms": [
      "Trama (Weft)",
      "Ourela (Selvedge)",
      "Sentido do Fio (Grainline)",
      "Viés do Tecido (Bias)",
      "Estabilidade Dimensional"
    ],
    "tags": [
      "u-078",
      "urdidura",
      "urdume",
      "física textil",
      "fio do tecido",
      "tecelagem",
      "artrelados"
    ],
    "bibliographicReferences": [
      "THE TEXTILE INSTITUTE. Principles of Weaving and Fabric Mechanics. Manchester, 2021.",
      "CALLISTER, W. D. Ciência e Engenharia dos Materiais Têxteis. São Paulo: Blucher, 2022.",
      "ARTRELADOS. Física do Tecido no Bordado Computadorizado: Urdume, Trama e Deformação. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-079-ultra-velocidade-e-compensacao-cinematica",
    "code": "U-079",
    "term": "Ultra-Velocidade e Compensação Cinemática de Ponto (High-Speed Inertia & Dynamic Stitch Compensation)",
    "pronunciation": "ul-tra ve-lo-si-da-de e com-pen-sa-são si-ne-ma-ti-ca de pon-to",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do latim 'ultra' (além) e do grego 'kinematikos' (movimento). Algoritmos modernos de interpolação mecatrônica para compensar a inércia mecânica em velocidades acima de 1.000 PPM.",
    "summary": "Ajuste avançado de software e aceleração de servomotores que compensa a inércia do pantógrafo em alta velocidade, evitando pontas arredondadas e perda de definição.",
    "definition": "A Ultra-Velocidade e Compensação Cinemática de Ponto (Dynamic High-Speed Inertia Management & Kinematic Stitch Compensation) é o conjunto de algoritmos matemáticos e calibrações mecatrônicas aplicados tanto no software de digitalização quanto nos servomotores do pantógrafo para anular as distorções causadas pela inércia mecânica quando a máquina opera em velocidades de 1.000 a 1.500 PPM. Em altíssima velocidade, a desaceleração brusca do bastidor ao realizar curvas fechadas e cantos agudos tende a arredondar vértices pontiagudos e encurtar pontos satim; a compensação cinemática antecipa a parada e amplia os vetores de deslocamento em milésimos de segundo.",
    "technicalDetails": "Algoritmo de *Curve Acceleration / Smart Cornering*: reduz dinamicamente a rotação para 650 PPM em curvas com raio inferior a 2 mm e projeta os pontos de canto 0,15 mm além do vértice geométrico para neutralizar a flexão da agulha e a inércia do aro do bastidor.",
    "beginnerExplanation": "Quando a máquina corre a mil por hora, o bastidor é tão rápido que, se tiver que fazer uma curva bem fechada ou uma pontinha fininha, o peso do bastidor faz ele 'derrapar' um pouquinho e a ponta fica redonda. Esse recurso calcula a freada certa para o desenho ficar com pontas super afiadas mesmo bordando no máximo da velocidade!",
    "howItWorks": [
      "1. O programador ativa o recurso de cantos inteligentes (*Smart Corners*) e compensação de alta rotação no software.",
      "2. A matriz gera micropontos de transição e amplia levemente as pontas agudas de estrelas e letras.",
      "3. A máquina lê a matriz e aciona a curva de desaceleração nos servomotores X/Y antes de chegar no vértice.",
      "4. A agulha fura no local exato sem sofrer flexão lateral por arraste do tecido.",
      "5. O servomotor retoma a aceleração máxima na reta seguinte.",
      "6. O bordado final apresenta vértices afiados como navalha com máxima produtividade horária."
    ],
    "applications": [
      "Grandes produções industriais seriadas operando em regime de 950 a 1.200 PPM.",
      "Logotipos com tipografia minúscula e serifas ultrafinas pontiagudas.",
      "Estrelas, brasões militares e detalhes geométricos de altíssima precisão.",
      "Otimização de tempo de máquina em confecções de grande porte."
    ],
    "characteristics": [
      "Maximiza o rendimento sem sacrificar a definição estética das bordas.",
      "Reduz o desgaste prematuro das correias sincronizadoras e guias lineares.",
      "Previne a quebra de agulhas finas provocada por empurrão lateral do bastidor."
    ],
    "commonErrors": [
      "❌ Bordejar detalhes microscópicos a 1.200 PPM sem programar desaceleração em cantos agudos.",
      "❌ Usar bastidores gigantes e pesados em velocidade máxima com matrizes cheias de curvas fechadas.",
      "❌ Desativar os filtros de compensação cinemática do painel da máquina industrial."
    ],
    "troubleshootingTips": [
      "As pontas das estrelas e letras estão saindo redondas e borradas: ative o recurso 'Smart Corners / Cantos Mitrados' no software e reduza a velocidade em 150 PPM.",
      "A agulha está quebrando com estalo metálico nas curvas rápidas: a agulha está flexionando pelo arraste do pantógrafo; ative a desaceleração de curva no painel.",
      "O contorno preto não encaixa no preenchimento colorido em alta velocidade: aumente a compensação de repuxo e verifique a tensão das correias do pantógrafo."
    ],
    "dicaArtrelados": "Não tenha pressa cega de rodar a máquina sempre no talo! Em partes com letrinhas pequenas ou pontas finas, programe o desenho para baixar a velocidade para 700 PPM nesses detalhes e subir para 900 PPM nas partes retas grandes. O bordado fica perfeito e não quebra nenhuma agulha!",
    "voceSabia": "Em uma máquina industrial bordando a 1.200 PPM, o bastidor precisa acelerar de 0 a 100 km/h (em escala relativa de deslocamento) e frear completamente até 20 vezes a cada segundo!",
    "practicalExercise": "Digitalize uma estrela de 5 pontas. Borde uma a 1.000 PPM sem cantos inteligentes e outra a 750 PPM com cantos mitrados ativados. Olhe as pontas com uma lupa e veja a diferença brutal de nitidez.",
    "quickSummary": "Compensação Cinemática é o ajuste inteligente de aceleração que garante cantos pontiagudos e detalhes nítidos mesmo quando a máquina borda em velocidade máxima.",
    "recommendedSettings": {
      "speedPPM": "Curvas: 650-750 PPM | Retas: 950-1.100 PPM",
      "needleType": "75/11 Titânio",
      "density": "Smart Corners: Ativado com ângulo mínimo de 45°"
    },
    "relatedTerms": [
      "Smart Corners (Cantos Inteligentes)",
      "Inércia do Pantógrafo",
      "Servomotores X/Y",
      "Flexão de Agulha (Needle Deflection)",
      "Velocidade PPM"
    ],
    "tags": [
      "u-079",
      "ultra-velocidade",
      "cinematica",
      "smart corners",
      "alta rotacao",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA RESEARCH & DEVELOPMENT. Dynamic Motion Control and Inertia Mitigation. Nagoya, 2023.",
      "WILCOM EMBROIDERY STUDIO. High-Speed Stitch Optimization & Cornering Algorithms. Sydney, 2022.",
      "ARTRELADOS. Alta Produtividade e Qualidade Extrema no Bordado Industrial. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-080-unidade-de-sensor-encoder-do-eixo-principal",
    "code": "U-080",
    "term": "Unidade de Sensor Encoder do Eixo Principal (Main Shaft Rotary Optical Encoder)",
    "pronunciation": "u-ni-da-de de sen-sor en-co-der do ei-xo prin-si-pal",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Componentes e Mecânica da Máquina",
    "origin": "Do inglês 'encoder' (codificador angular) e do latim 'principalis' (primeiro, chefe). Dispositivo optoeletrônico de sincronismo mestre de máquinas CNC.",
    "summary": "Sensor óptico rotativo instalado no eixo central da máquina que informa à placa-mãe o grau angular exato (de 0° a 360°) da posição da agulha em tempo real.",
    "definition": "A Unidade de Sensor Encoder do Eixo Principal (Main Shaft Rotary Optical Encoder & Angular Position Sensor) é o transdutor optoeletrônico de alta resolução acoplado diretamente ao eixo de manivela principal da máquina de bordar. Composto por um disco graduado de vidro ou metal microperfurado e um par de emissores e receptores infravermelhos, o encoder converte a rotação contínua em milhares de pulsos digitais por volta, informando ao microprocessador (DSP) a posição angular exata da barra de agulha em graus (ex: 100° para descida, 196° para corte, 280° para troca de cor e 100° para repouso no Ponto Morto Superior).",
    "technicalDetails": "Resolução típica: 1.024 a 4.096 pulsos por revolução (PPR) com sinal de índice zero (Z-Phase). É o componente que garante a parada obrigatória da máquina no grau exato (Stop Angle / Ponto 100°) após quebra de linha ou término do bordado.",
    "beginnerExplanation": "É o 'olho digital' que sabe exatamente onde a agulha está a cada milésimo de segundo! É ele que avisa para a máquina: 'a agulha está lá embaixo furando o pano' ou 'a agulha já subiu, pode mexer o bastidor!'. Sem ele, a máquina ficaria cega e bateria a agulha no bastidor em movimento!",
    "howItWorks": [
      "1. O motor principal gira o eixo e as agulhas sobem e descem.",
      "2. O disco do encoder gira junto com o eixo, interrompendo o feixe de luz óptica.",
      "3. O sensor gera milhares de pulsos elétricos por volta.",
      "4. O computador central da máquina lê os pulsos e sabe o grau exato da rotação (de 0° a 360°).",
      "5. Quando a agulha atinge o ponto seguro no topo, o computador comanda o movimento do bastidor.",
      "6. Ao apertar o botão de parar, o encoder comanda o freio eletrônico para travar no ponto 100° exato."
    ],
    "applications": [
      "Sincronização milimétrica entre descida da agulha e movimentação do bastidor.",
      "Comando dos tempos de corte de linha (trimer), pega de fio e troca de cores.",
      "Parada de emergência no grau de segurança sem colisão mecânica.",
      "Diagnóstico de erros de posicionamento angular e falhas de freio motor."
    ],
    "characteristics": [
      "Precisão angular micrométrica imune a variações de tensão elétrica.",
      "Leitura óptica sem contato físico, garantindo durabilidade de décadas.",
      "Componente vital para a integridade de qualquer máquina computadorizada."
    ],
    "commonErrors": [
      "❌ Acúmulo de poeira têxtil ou óleo nas lentes ópticas do disco do encoder (provoca erro de parada de eixo no painel).",
      "❌ Bater no volante manual ou no eixo traseiro, desalinhando o acoplamento do encoder.",
      "❌ Tentar calibrar o ponto 100° da máquina manualmente sem seguir as instruções do manual técnico."
    ],
    "troubleshootingTips": [
      "Aparece erro 'Main Shaft Error / Encoder Fault' no painel: limpe o disco óptico com spray limpa-contato seco e verifique o cabo de sinal.",
      "A máquina para sempre com a agulha enfiada no tecido em vez de parar em cima: o ângulo de parada (Stop Angle) está descalibrado; recalibre o ponto 100° no menu técnico.",
      "A máquina dá trancos secos ao parar: verifique se a correia dentada do motor principal não está frouxa."
    ],
    "dicaArtrelados": "Se a sua máquina começar a parar fora de posição (com a agulha no meio do caminho em vez de subir até o topo): dê uma olhada no ângulo de parada no painel! Toda máquina deve repousar entre 98° e 102° (ponto 100°). Deixar a máquina calibrada nesse grau evita quebrar agulhas ao tirar o bastidor!",
    "voceSabia": "Nas máquinas de bordar modernas, o encoder lê a velocidade angular com tanta precisão que, se a agulha encontrar uma resistência incomum (como bater em um botão ou zíper), o sensor detecta a microdesaceleração em 2 milissegundos e desliga a máquina antes de quebrar a peça!",
    "practicalExercise": "Olhe no painel de controle da sua máquina: localize o mostrador de graus do eixo principal. Gire o volante manual devagar com a mão e veja o número subir de 0° a 360° no visor em tempo real.",
    "quickSummary": "Encoder do Eixo Principal é o sensor óptico que monitora o grau exato de rotação do cabeçote, sincronizando as agulhas com o movimento do bastidor.",
    "recommendedSettings": {
      "speedPPM": "Monitoramento contínuo",
      "needleType": "N/A",
      "density": "Grau padrão de repouso (Stop Angle): 100° ± 2°"
    },
    "relatedTerms": [
      "Ponto 100° (Stop Angle)",
      "Ponto Morto Superior (PMS)",
      "Eixo Principal (Main Shaft)",
      "Freio Motor Eletrônico",
      "Painel de Controle (HMI)"
    ],
    "tags": [
      "u-080",
      "encoder",
      "eixo principal",
      "sensor optico",
      "stop angle",
      "mecanica",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN CO. Main Shaft Encoder Alignment & Calibration Manual. Ichinomiya, 2022.",
      "TAJIMA EMBROIDERY SYSTEMS. Electronic Control & Rotary Encoder Technical Guide. Nagoya, 2021.",
      "ARTRELADOS. Eletrônica e Mecatrônica das Máquinas de Bordar Computadorizadas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-081-underlay-tatami-com-angulo-invertido",
    "code": "U-081",
    "term": "Underlay Tatami com Ângulo Invertido (Inverse-Angle Tatami Underlay Pattern)",
    "pronunciation": "an-der-lei ta-ta-mi com an-gu-lo in-ver-ti-do",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do japonês 'tatami' (esteira tradicional de palha) e do latim 'inversus' (voltado para o lado oposto). Estrutura de compensação de anisotropia em grandes áreas bordadas.",
    "summary": "Camada de base em ponto esteira digitalizada com inclinação angular simétrica inversa à camada de acabamento, travando a expansão lateral do tecido.",
    "definition": "O Underlay Tatami com Ângulo Invertido (Inverse-Angle Stabilizing Tatami Underlay) é uma técnica de estruturação de matrizes digitais para grandes superfícies de preenchimento na qual uma camada preliminar aberta de ponto tatami é gerada com o ângulo exatamente invertido (ex: se o topo está a +45°, a base é programada a -45° ou 135°). Essa contraposição de vetores anula a tendência natural do tecido de se esticar ou expandir na direção paralela às passagens da agulha, eliminando o efeito de 'bolsa de ar' e garantindo uma superfície lisa, acetinada e homogênea em grandes brasões.",
    "technicalDetails": "Configurado com comprimento de ponto de 3,5 mm a 4,5 mm e densidade/espaçamento aberto de 2,0 mm a 3,0 mm (cerca de 20% a 25% da densidade da cobertura). Recuo perimétrico de segurança de 0,8 mm a 1,2 mm para evitar qualquer escape visual nos limites do objeto.",
    "beginnerExplanation": "Quando vamos preencher um desenho bem grande (como o fundo de um brasão), se a linha de cima for inclinada para a direita, a base embaixo é feita inclinada para a esquerda. Elas se cruzam perfeitamente como uma grade, impedindo que o tecido forme um balão frouxo no meio do bordado!",
    "howItWorks": [
      "1. O digitalizador define o preenchimento final do objeto com ângulo de 60°.",
      "2. No campo de propriedades de underlay, seleciona 'Tatami' e define o ângulo para 150° (inversão ortogonal).",
      "3. A máquina borda primeiro o tatami aberto de sustentação com passadas largas.",
      "4. O tecido fica perfeitamente esticado e ancorado na entretela em toda a extensão da área.",
      "5. A máquina borda a cobertura final a 60° com densidade padrão.",
      "6. As duas camadas se fundem em uma estrutura plana e macia sem ondulações.",
      "7. O resultado é um preenchimento com brilho impecável e toque agradável."
    ],
    "applications": [
      "Grandes brasões de equipes esportivas nas costas de jaquetas e moletons.",
      "Preenchimentos extensos em toalhas de banho, roupões e almofadas decorativas.",
      "Bordados em tecidos sintéticos que criam estática e bolhas com facilidade.",
      "Fundos bordados para aplicação de emblemas de alta definição."
    ],
    "characteristics": [
      "Elimina a formação de ondas e rugas no centro de grandes preenchimentos.",
      "Reduz a necessidade de entretelas excessivamente duras e pesadas.",
      "Melhora a reflexão da luz na linha de poliéster, gerando brilho mais vivo."
    ],
    "commonErrors": [
      "❌ Programar o underlay tatami muito denso (0,60 mm), transformando o bordado em uma 'placa de papelão' dura.",
      "❌ Esquecer o recuo de borda (fazendo a base vazar sob os contornos).",
      "❌ Usar ângulo idêntico na base e no topo (o que anula a sustentação cruzada)."
    ],
    "troubleshootingTips": [
      "O bordado ficou duro como uma casca grossa: aumente o espaçamento do underlay tatami para 2,5 mm e alivie a densidade da cobertura.",
      "Apareceram pontas de linha da base saindo nas beiradas: aumente o recuo perimetral (Inset Margin) para 1,0 mm.",
      "O centro do preenchimento ficou estufado como uma bolha: utilize o underlay tatami com ângulo invertido em vez de underlay zig-zag simples."
    ],
    "dicaArtrelados": "Para bordar costas inteiras de jaquetas sem o desenho virar uma tábua dura: use um underlay tatami bem abertinho com ângulo invertido! Ele segura tudo no lugar com pouquíssimos pontos e a roupa continua gostosa e maleável de usar!",
    "voceSabia": "Na tecelagem tradicional japonesa, os tatamis são trançados com fibras de junco cruzadas exatamente em ângulos opostos para que as esteiras suportem o peso de pessoas caminhando durante séculos sem perder o nivelamento!",
    "practicalExercise": "Crie um quadrado de 8x8 cm no programa. Configure uma versão com underlay corrido simples e outra com underlay tatami aberto em ângulo invertido. Borde em moletom e sinta a diferença de estabilidade e toque.",
    "quickSummary": "Underlay Tatami com Ângulo Invertido é a camada de base cruzada que estabiliza grandes áreas de preenchimento, evitando bolhas e mantendo o bordado macio.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11",
      "density": "Espaçamento do underlay: 2.5 mm a 135° (Invertido)"
    },
    "relatedTerms": [
      "Ponto Tatami (Fill Stitch)",
      "Ângulo de Ponto (Stitch Angle)",
      "Recuo de Subponto (Inset Margin)",
      "Densidade de Preenchimento",
      "Estabilidade de Grandes Áreas"
    ],
    "tags": [
      "u-081",
      "underlay tatami",
      "angulo invertido",
      "preenchimento",
      "costas de jaqueta",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO. Fill Stitch Underlay Engineering & Angle Mapping. Sydney, 2022.",
      "BERNINA ARTISTIC SUITE. Large Area Stabilization & Tatami Architectures. Steckborn, 2021.",
      "ARTRELADOS. Segredos da Digitalização de Grandes Brasões e Costas de Jaquetas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-082-uniformizacao-da-resina-da-entretela-termocolante",
    "code": "U-082",
    "term": "Uniformização da Resina da Entretela Termocolante (Dot-Coating Adhesive Uniformity & Dot Pitch)",
    "pronunciation": "u-ni-for-mi-za-são da re-zi-na da en-tre-te-la ter-mo-co-lan-te",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Estabilizadores & Entretelas",
    "origin": "Do latim 'uniformis' (de uma só forma) e 'resina' (goma vegetal/polimérica). Tecnologia de distribuição micrométrica de adesivos fundíveis na indústria de não-tecidos.",
    "summary": "Distribuição homogênea dos micro-pontos de cola termoplástica (resina Dot-Coating) na entretela, garantindo aderência sem endurecer o tecido nem criar caroços.",
    "definition": "A Uniformização da Resina da Entretela Termocolante (Fusible Interlining Adhesive Dot-Coating Uniformity & Matrix Distribution) refere-se à tecnologia industrial de aplicação controlada de microgotículas de polímeros termoplásticos (como poliamida, polietileno de baixa densidade ou copoliéster) sobre o substrato não-tecido da entretela. Em entretelas de alta qualidade, a resina é aplicada pelo processo de 'Pastilhas de Ponto' (*Double-Dot / Computerized Dot-Coating*) com distribuição de 30 a 50 pontos por centímetro quadrado, assegurando fusão uniforme em 100% da área sem provocar rigidez pontual, vazamento de cola (*strike-through*) ou delaminação pós-lavagem.",
    "technicalDetails": "Padrões de aplicação: *Double-Dot* (base de barreira antiumidade + topo termofusível). Densidade de resinagem ideal para bordado: 12 a 18 g/m² de resina sobre não-tecido de 40 a 50 g/m², ativada a 135 °C com pressão uniforme.",
    "beginnerExplanation": "É a distribuição perfeita daquela colinha em formato de pontinhos brilhantes atrás da entretela termocolante. Quando os pontinhos de cola são bem miudinhos e espalhados por igual, a entretela gruda no tecido de forma macia e lisa, sem empelotar nem deixar a roupa dura como uma tábua!",
    "howItWorks": [
      "1. Cilindros microperfurados a laser aplicam milhares de pontinhos microscópicos de resina na entretela.",
      "2. A bordadeira corta o pedaço de entretela e coloca os pontinhos virados contra o avesso da peça.",
      "3. O calor da prensa ou do ferro funde os pontinhos simultaneamente.",
      "4. A resina líquida penetra apenas na superfície das fibras têxteis sem vazar para a frente.",
      "5. Ao esfriar, o tecido e a entretela tornam-se um corpo único, estável e perfeitamente maleável.",
      "6. A máquina de bordar penetra o conjunto com facilidade sem grudar cola na agulha."
    ],
    "applications": [
      "Bordados delicados em camisas polo de piquet, malhas de algodão e roupas de bebê.",
      "Estruturação de punhos, golas e vistas de camisaria fina.",
      "Bordados em tecidos finos de viscose que deformam com entretelas comuns.",
      "Prevenção de franzimento em tecidos de seda e microfibra esportiva."
    ],
    "characteristics": [
      "Toque macio que não altera o caimento natural do vestuário.",
      "Aderência uniforme que resiste a lavagens frequentes em máquina.",
      "Não empapa a agulha com resíduos de adesivo durante o bordado."
    ],
    "commonErrors": [
      "❌ Usar entretelas baratas com resinagem irregular (que têm placas grossas de cola que grudam na agulha).",
      "❌ Aplicar calor excessivo fazendo a resina evaporar ou vazar para o lado direito do tecido.",
      "❌ Passar o ferro de forma arrastada em vez de prensar ponto a ponto."
    ],
    "troubleshootingTips": [
      "A agulha está ficando com uma crosta branca de cola: a entretela tem resina de má qualidade ou foi colada com temperatura insuficiente; limpe a agulha e troque de marca de entretela.",
      "O tecido ficou com aspecto engomado e duro: a entretela tem gramatura pesada demais; mude para entretela de malha termocolante com resina microponto (Double-Dot).",
      "A entretela descolou na primeira lavagem: aumente o tempo de prensagem em 3 segundos na prensa térmica para garantir a fusão completa da resina."
    ],
    "dicaArtrelados": "Ao comprar entretela termocolante, olhe contra a luz: os pontinhos de cola devem ser bem pequenininhos, uniformes e brilhantes como uma poeira de cristal! Evite aquelas entretelas com manchas grossas de cola que parecem plástico espalhado; elas estragam o toque da peça e grudam na agulha!",
    "voceSabia": "A tecnologia de micro-resina Double-Dot foi criada na Alemanha na década de 1970 para os ternos de alta costura da Hugo Boss, para que as entretelas coladas suportassem as chuvas européias sem descolar as lapelas dos paletós!",
    "practicalExercise": "Pegue duas amostras de entretelas termocolantes diferentes. Cole ambas em dois retalhos de malha de camiseta. Dobre os retalhos ao meio e sinta qual deles manteve a maciez e a flexibilidade original do tecido.",
    "quickSummary": "Uniformização da Resina é a distribuição perfeita de micropontos de cola na entretela que garante fixação segura mantendo o tecido macio e sem sujar a agulha.",
    "recommendedSettings": {
      "speedPPM": "N/A (Termocolagem)",
      "needleType": "75/11 Ponta Bola (SES)",
      "density": "Resinagem padrão: Double-Dot 14 g/m² a 140 °C"
    },
    "relatedTerms": [
      "Entretela Termocolante",
      "Resina Double-Dot",
      "Prensa Térmica",
      "Termofixação",
      "Gramatura de Não-Tecido"
    ],
    "tags": [
      "u-082",
      "resina",
      "entretela termocolante",
      "double-dot",
      "aderencia",
      "estabilizadores",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FREUDENBERG INTERLINING. Advanced Adhesive Dot Coating & Substrate Technologies. Weinheim, 2022.",
      "VILENE NONWOVENS. Fusible Interlinings Application & Care Standards. Swindon, 2021.",
      "ARTRELADOS. Guia Completo de Entretelas, Adesivos e Estabilização Têxtil. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-083-utilizacao-de-fios-conductivos-para-smart-textiles",
    "code": "U-083",
    "term": "Utilização de Fios Condutivos e Bordados Eletrônicos (Conductive Thread & E-Textiles / Smart Wearables)",
    "pronunciation": "u-ti-li-za-são de fi-os con-du-ti-vos e bor-da-dos e-le-tro-ni-cos",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Linhas & Insumos",
    "origin": "Do latim 'conductivus' (que conduz) e do inglês 'smart textiles' (têxteis inteligentes). Fronteira tecnológica da integração entre mecatrônica, nanotecnologia e bordado digital.",
    "summary": "Técnica de bordar circuitos eletrônicos, trilhas condutoras de eletricidade e sensores capacitivos utilizando linhas com filamentos de prata, cobre ou aço inoxidável.",
    "definition": "A Utilização de Fios Condutivos e Bordados Eletrônicos (Conductive Yarn Integration & Embroidered Circuitry in Smart Wearables) é o processo de aplicação de fios têxteis tecnológicos de alta condutividade elétrica (compostos por filamentos de poliamida banhados a prata pura 99% ou microfibras de aço inoxidável AISI 316L) através de máquinas de bordar convencionais. O bordado substitui fios de cobre rígidos e placas de circuito impresso (PCB), criando trilhas elétricas flexíveis, botões de toque capacitivos, antenas de radiofrequência (RFID) e sensores biométricos de frequência cardíaca diretamente costurados nas peças de vestuário.",
    "technicalDetails": "Resistência linear padrão: 50 a 250 Ohms/metro (para linhas de sinal) ou < 5 Ohms/metro (para alimentação de energia). Exige agulhas de olho largo (Topstitch / Metallic 80/12 ou 90/14) para não raspar a camada condutiva de prata e velocidade reduzida para 500 a 650 PPM.",
    "beginnerExplanation": "É bordar circuitos elétricos de verdade usando linhas especiais feitas com fios de prata e metal flexível! Com isso, você pode bordar roupas que acendem luzes de LED, camisetas esportivas que medem os batimentos do coração ou jaquetas com botões bordados que trocam a música do celular!",
    "howItWorks": [
      "1. A matriz do circuito é desenhada no software com linhas contínuas sem cruzar polos positivos e negativos.",
      "2. Instala-se o cone de fio condutivo de prata na máquina de bordar.",
      "3. Coloca-se agulha especial com olho largo para não esfolar o metal.",
      "4. A máquina borda as trilhas condutoras sobre o tecido com ponto corrido duplo ou cetim estreito.",
      "5. Conectam-se microcontroladores (como Arduino LilyPad) e luzes LED nos pontos de contato bordados.",
      "6. A peça torna-se uma roupa inteligente, funcional, flexível e totalmente lavável."
    ],
    "applications": [
      "Roupas esportivas de alta performance com monitoramento cardíaco e muscular.",
      "Fardamentos de bombeiros e militares com sensores de temperatura corporal e GPS.",
      "Uniformes promocionais de shows com efeitos luminosos em LEDs bordados.",
      "Roupas infantis interativas com sons e sensores de toque bordados."
    ],
    "characteristics": [
      "Circuito 100% flexível, maleável e imperceptível ao toque.",
      "Resistência à água e a ciclos normais de lavagem doméstica.",
      "Abre um mercado de altíssimo valor e tecnologia de ponta para o ateliê."
    ],
    "commonErrors": [
      "❌ Bordejar cruzando a linha positiva com a negativa (gerando curto-circuito instantâneo no sistema eletrônico).",
      "❌ Usar velocidades altas (> 800 PPM) que raspam a prata do fio por atrito.",
      "❌ Cortar o fio com trimer automático sem deixar pontas suficientes para soldagem ou nó de contato."
    ],
    "troubleshootingTips": [
      "O LED bordado não acende: use um multímetro na escala de continuidade e meça as pontas da trilha bordada para checar se o fio arrebentou por dentro do tecido.",
      "A máquina está desfiando a linha de prata: substitua a agulha por uma de olho largo com banho de titânio 90/14 e diminua a velocidade para 500 PPM.",
      "Curto-circuito ao lavar a peça: passe verniz têxtil isolante transparente sobre os pontos de cruzamento elétrico."
    ],
    "dicaArtrelados": "Ao criar matrizes para roupas que acendem luzinhas LED: programe pequenos círculos em ponto cheio (como 'ilhoses') nas pontas das trilhas elétricas! Esses círculos bordados funcionam como ilhas de contato perfeitas para costurar ou soldar os LEDs sem soltar!",
    "voceSabia": "A agência espacial americana (NASA) e a Agência Espacial Europeia utilizam bordado eletrônico com fios condutivos nas roupas dos astronautas para criar sensores de respiração que não pesam nada e nunca quebram durante as missões na estação espacial!",
    "practicalExercise": "Adquira uma amostra de linha condutiva e uma bateria tipo moeda 3V com um LED. Crie uma matriz simples de duas linhas retas. Borde em um retalho e encaixe a bateria e o LED nas pontas para ver o circuito brilhar.",
    "quickSummary": "Fios Condutivos permitem bordar circuitos elétricos, sensores e LEDs diretamente nas roupas, transformando peças normais em vestuário tecnológico inteligente.",
    "recommendedSettings": {
      "speedPPM": "500 a 650 PPM",
      "needleType": "80/12 ou 90/14 Metallic / Topstitch",
      "density": "Ponto corrido duplo com passo de 2.5 mm"
    },
    "relatedTerms": [
      "Smart Textiles (Têxteis Inteligentes)",
      "E-Textiles",
      "Fio de Prata Condutivo",
      "Resistência Ôhmica Linear",
      "Sensor Capacitivo Têxtil"
    ],
    "tags": [
      "u-083",
      "fios condutivos",
      "e-textiles",
      "smart wearables",
      "tecnologia",
      "circuitos bordados",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BERZOWSKI, P. Smart Textiles and Electronic Embroidery Engineering. London: Springer, 2022.",
      "MADEIRA GARN. HC - High Conductive Specialty Threads Application Handbook. Freiburg, 2021.",
      "ARTRELADOS. Inovação Têxtil: Bordados Eletrônicos e Wearables Inteligentes. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-084-unidade-de-parada-emergencial-e-rearme-mecanico",
    "code": "U-084",
    "term": "Unidade de Parada Emergencial e Rearme Mecânico (E-Stop Button & Safety Interlock Reset)",
    "pronunciation": "u-ni-da-de de pa-ra-da e-mer-gen-si-al e re-ar-me me-ca-ni-co",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes e Mecânica da Máquina",
    "origin": "Do inglês 'Emergency Stop' (botão cogumelo de segurança) e do francês 'réarmer'. Norma internacional de segurança do trabalho em maquinário industrial (ISO 13850 / NR-12).",
    "summary": "Botão cogumelo vermelho de emergência de ação rápida que corta a energia dos motores instantaneamente em situações de perigo, e procedimento correto de rearme.",
    "definition": "A Unidade de Parada Emergencial e Rearme Mecânico (Emergency Stop Mushroom Pushbutton & Safety Interlock Reset Protocol) é o dispositivo de segurança de atuação primária obrigatório em máquinas de bordar industriais e semi-industriais. Ao ser pressionado pelo operador diante de uma colisão iminente do bastidor, quebra maciça de agulhas ou aprisionamento de vestuário, o botão corta instantaneamente o fornecimento elétrico para os circuitos de potência dos servomotores do pantógrafo e do cabeçote através de relés redundantes de segurança, preservando a memória de coordenadas (ponto atual do bordado) para permitir o retorno sem perda da peça.",
    "technicalDetails": "Em conformidade com a norma NR-12 e ISO 13850 (Categoria de Parada 0/1). Possui trava mecânica de retenção tipo 'gira para destravar' (*twist to release*). O rearme só é concluído após a rotação manual do botão e confirmação no painel HMI para evitar partidas acidentais.",
    "beginnerExplanation": "É aquele botão vermelho grandão em formato de cogumelo que fica na frente da máquina. Se acontecer qualquer coisa errada (como o bastidor bater ou prender uma manga), você bate a mão nele na hora e a máquina desliga no mesmo segundo! Para voltar, é só girar o botãozinho para destravar!",
    "howItWorks": [
      "1. A bordadeira percebe um ruído estranho ou o bastidor enroscando na manga de uma jaqueta.",
      "2. Bate a palma da mão no botão vermelho de emergência (E-Stop).",
      "3. Os contatos elétricos abrem instantaneamente e cortam a força de todos os motores.",
      "4. O computador grava na memória Flash a coordenada X/Y e o número exato do ponto onde parou.",
      "5. A operadora desvencilha a peça presa e resolve o problema com segurança e calma.",
      "6. Gira o botão cogumelo no sentido horário para soltar a trava mecânica.",
      "7. Pressiona 'Reset' no painel; a máquina volta ao ponto exato e continua o bordado sem estragar a peça."
    ],
    "applications": [
      "Proteção imediata contra acidentes com dedos e mãos durante a operação.",
      "Interrupção de colisões severas do bastidor contra o cabeçote ou chapa de agulha.",
      "Prevenção de danos graves ao pantógrafo e quebra de eixos por travamento mecânico.",
      "Conformidade obrigatória com normas de segurança do trabalho (NR-12)."
    ],
    "characteristics": [
      "Acionamento imediato por impacto físico (fácil de acertar em pânico).",
      "Preservação digital da memória da matriz bordada.",
      "Mecanismo de trava mecânica que impede religamento involuntário."
    ],
    "commonErrors": [
      "❌ Puxar a tomada da parede em vez de apertar o botão de emergência (desligar na tomada faz a máquina perder a memória do ponto e perder o alinhamento).",
      "❌ Tentar destravar o botão enquanto a mão ainda está mexendo perto das agulhas.",
      "❌ Obstruir o botão de emergência com rolos de entretela ou caixas de linha."
    ],
    "troubleshootingTips": [
      "A máquina não liga e o painel diz 'Emergency Stop Active': o botão vermelho está pressionado; gire-o suavemente no sentido horário para ele saltar para fora.",
      "A máquina desligou no botão mas perdeu o ponto: após destravar, use a função 'Restore / Retomar Bordado' no painel para o bastidor retornar à coordenada gravada.",
      "O botão não trava ao ser empurrado: o mecanismo interno de mola quebrou; solicite a substituição imediata por um técnico qualificado."
    ],
    "dicaArtrelados": "Nunca tenha medo de bater a mão no botão vermelho de emergência se ouvir qualquer barulho estranho! As máquinas modernas gravam o número exato do pontinho onde pararam. Bater no botão na hora certa salva a sua máquina, a sua agulha e a roupa cara do cliente!",
    "voceSabia": "O formato de cogumelo e a cor vermelha com fundo amarelo foram padronizados internacionalmente após a Segunda Guerra Mundial, para que qualquer trabalhador, mesmo sem saber falar a língua do país da máquina, soubesse onde bater para parar a produção em emergências!",
    "practicalExercise": "Com a máquina bordando um retalho de teste, aperte o botão de emergência. Observe a parada imediata. Gire o botão para destravar, aperte 'Reset' no painel e veja a máquina retomar o bordado no mesmo furinho.",
    "quickSummary": "Botão de Emergência é o dispositivo vermelho que desliga a máquina no mesmo segundo ao ser pressionado, protegendo a bordadeira e salvando o equipamento.",
    "recommendedSettings": {
      "speedPPM": "Interrupção em 0.1 s",
      "needleType": "N/A",
      "density": "Norma de segurança: ISO 13850 / NR-12"
    },
    "relatedTerms": [
      "Botão Cogumelo (E-Stop)",
      "Retomada de Ponto (Power Recovery)",
      "Segurança do Trabalho (NR-12)",
      "Painel de Controle",
      "Parada de Emergência"
    ],
    "tags": [
      "u-084",
      "emergencia",
      "e-stop",
      "segurança",
      "botao cogumelo",
      "rearme",
      "nr-12",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ABNT. NBR ISO 13850: Segurança de Máquinas — Função de Parada de Emergência. Rio de Janeiro, 2021.",
      "TAJIMA INDUSTRIAL MACHINERY. Safety Operations and Emergency Stop Maintenance. Nagoya, 2022.",
      "ARTRELADOS. Manual de Segurança, Saúde Operacional e Ergonomia no Ateliê de Bordados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-085-underlay-circular-e-radial-para-esferas",
    "code": "U-085",
    "term": "Underlay Circular e Radial para Esferas e Olhos (Radial & Circular Underlay for Balls & Irises)",
    "pronunciation": "an-der-lei sir-cu-lar e ra-di-al pa-ra es-fe-ras e o-lhos",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do inglês 'radial underlay' (subponto em raios de roda) e do latim 'sphaera' (globo, círculo perfeito). Geometria de estruturação esférica em matrizes digitais.",
    "summary": "Método de programação de subpontos concêntricos e radiais em formato de teia ou raios de bicicleta, garantindo que círculos, bolas esportivas e olhos fiquem 100% redondos.",
    "definition": "O Underlay Circular e Radial para Esferas e Olhos (Concentric Radial Underlay & Spherical Distortion Prevention) é uma técnica de digitalização especializada para objetos redondos, íris de personagens e esferas tridimensionais (como bolas de futebol, basquete ou globos terrestres). Em vez de utilizar subpontos lineares convencionais (que achatam o círculo devido à tração unilinear), o software gera trajetórias em espiral concêntrica combinadas com raios ortogonais partindo do centro (*Spoke / Starburst Underlay*). Isso distribui o repuxo uniformemente em 360 graus, mantendo a circunferência matematicamente perfeita.",
    "technicalDetails": "Raio de ação: 8 a 16 raios internos com passo de 2,5 mm interligados por anéis concêntricos a cada 2,0 mm de diâmetro. Recuo de borda de 0,8 mm. Elimina o efeito de ovalização em tecidos de malha sem necessidade de compensação de repuxo exagerada.",
    "beginnerExplanation": "Quando a máquina borda um círculo ou uma bolinha de olho, o puxão da linha tende a esmagar o círculo e transformá-lo num ovo! Com o underlay radial, a máquina costura primeiro uma teia de aranha redondinha por baixo; essa teia segura o tecido por igual em todos os lados e a bolinha fica perfeitamente redonda!",
    "howItWorks": [
      "1. O programador cria o círculo no software e seleciona o padrão de preenchimento radial ou circular.",
      "2. Configura a base para 'Radial / Concentric Underlay'.",
      "3. A máquina borda primeiro os raios e os anéis circulares de dentro para fora.",
      "4. As fibras do tecido são travadas em todos os 360 graus contra a entretela.",
      "5. A máquina sobrepõe o ponto de acabamento de cetim ou tatami.",
      "6. A força de repuxo é dissipada igualmente em todas as direções.",
      "7. Ao soltar do bastidor, o círculo permanece 100% redondo sem virar elipse."
    ],
    "applications": [
      "Bordados de bolas de futebol, basquete, tênis e globos terrestres.",
      "Íris e pupilas de olhos em bordados realistas de pets e retratos humanos.",
      "Logotipos redondos corporativos em camisas polo e bonés.",
      "Bordados de medalhas, brasões circulares e moedas comemorativas."
    ],
    "characteristics": [
      "Garante redondeza geométrica perfeita mesmo em malhas elásticas.",
      "Cria um suave efeito abaulado 3D natural no centro do círculo.",
      "Evita que o contorno preto circular fique com falhas de encaixe nas laterais."
    ],
    "commonErrors": [
      "❌ Usar underlay reto em uma direção só para bordar círculos (o círculo sempre vira um ovo).",
      "❌ Colocar muitos raios no centro, criando um acúmulo de nós e quebrando a agulha no meio do círculo.",
      "❌ Bordejar círculos em malha sem entretela de corte limpo (Cut-Away)."
    ],
    "troubleshootingTips": [
      "O contorno circular não encaixou nas laterais da bola: o círculo ovalou por falta de sustentação radial; adicione underlay radial e aumente a compensação de repuxo para 0,40 mm.",
      "A agulha bateu duro e fez um buraco no centro do círculo: reduza o número de raios radiais e ative o filtro de eliminação de pontos curtos no centro.",
      "O olho do personagem parece murcho e sem vida: utilize underlay concêntrico antes do ponto de acabamento para criar relevo arredondado."
    ],
    "dicaArtrelados": "Para nunca mais ter problemas com círculos virando 'ovos' em camisas polo: programe uma base em formato de teia de aranha (underlay radial com anéis concêntricos)! O círculo fica tão redondinho que parece desenhado com compasso!",
    "voceSabia": "Os desenhistas dos estúdios Disney exigem que todas as matrizes dos olhos do Mickey Mouse e pato Donald usem obrigatoriamente sob-pontos radiais concêntricos para garantir que o olhar dos personagens nunca perca a proporção redonda perfeita em nenhum produto licenciado!",
    "practicalExercise": "Digitalize dois círculos de 4 cm: um com underlay corrido reto simples e outro com underlay radial em teia. Borde ambos em uma malha de camiseta e meça com uma régua o diâmetro horizontal e vertical de cada um.",
    "quickSummary": "Underlay Radial é a base em formato de teia concêntrica que distribui o repuxo em 360°, fazendo círculos e olhos ficarem perfeitamente redondos.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11",
      "density": "Raios: 8 a 12 divisões com anéis a cada 2.0 mm"
    },
    "relatedTerms": [
      "Geometria de Círculo Perfeito",
      "Underlay Concêntrico",
      "Compensação de Ovalização",
      "Bordado de Retratos e Pets",
      "Contorno Circular"
    ],
    "tags": [
      "u-085",
      "underlay radial",
      "circulo",
      "esferas",
      "olhos",
      "redondeza",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO. Radial Stitch Mapping and Circular Underlay Standards. Sydney, 2022.",
      "TAJIMA DG/ML BY PULSE. Geometric Symmetry & Distortion Control. Mississauga, 2021.",
      "ARTRELADOS. Técnicas Avançadas de Digitalização: Como Bordar Círculos Perfeitos. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-086-umectacao-de-fios-metalicos-com-silicone-fluido",
    "code": "U-086",
    "term": "Umectação de Fios Metálicos com Silicone Fluido (Metallic Thread Lubrication & Silicone Conditioning)",
    "pronunciation": "u-mek-ta-são de fi-os me-ta-li-cos com si-li-co-ne flui-do",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Linhas & Insumos",
    "origin": "Do latim 'humectare' (umedecer, hidratar) e do polímero sintético 'silicone'. Prática clássica de condicionamento tribológico de fios especiais e metálicos.",
    "summary": "Aplicação de óleo de silicone puro 100% mineral no feltro lubrificante do cabeçote ou diretamente no carretel de linha metálica, eliminando quebras e atrito na agulha.",
    "definition": "A Umectação de Fios Metálicos com Silicone Fluido (Metallic Thread Conditioning & Low-Viscosity Silicone Lubrication) é o processo preventivo de tratamento superficial aplicado a linhas com revestimento metálico de poliéster e poliamida metalizada (Lurex / Madeira Metallic / Gold & Silver Threads). Por serem linhas rígidas, sem elasticidade e com alto coeficiente de atrito estático, a passagem contínua pelos discos tensores e pelo olho da agulha gera microfraturas na lâmina de alumínio e acúmulo de calor. A aplicação de óleo de silicone 100% dimetilsiloxano de baixa viscosidade (350 cSt) forma uma película molecular lubrificante que reduz o atrito em até 60%, garantindo bordados ininterruptos.",
    "technicalDetails": "Utilização de óleo de silicone grau alimentício/têxtil não-manchante (Viscosidade: 350 a 500 cSt). Aplicação por capilaridade através do feltro dosador do cabeçote ou esponja acoplada ao suporte aéreo de cones. É volátil e evapora sem manchar tecidos nobres após algumas horas.",
    "beginnerExplanation": "A linha metálica dourada ou prateada é meio durinha e áspera; quando passa rápido no buraquinho da agulha, ela esquenta, rala e arrebenta a toda hora. Pingar umas gotinhas de óleo de silicone próprio no feltro da máquina faz a linha metálica escorregar lisa e macia como manteiga, sem quebrar nunca mais!",
    "howItWorks": [
      "1. A bordadeira pinga 3 a 4 gotas de óleo de silicone líquido puro no feltro lubrificante do cabeçote.",
      "2. Passa a linha metálica pelo meio do feltro umedecido.",
      "3. Ao ser tracionada, a linha recebe uma microcamada invisível e fria de silicone.",
      "4. A linha desliza pelos tensores com tensão regular e estável.",
      "5. Passa pelo olho da agulha sem sofrer atrito, sem esquentar e sem descascar o brilho dourado.",
      "6. A máquina borda em velocidade normal e a peça final fica com brilho de joia impecável."
    ],
    "applications": [
      "Bordados litúrgicos, mantos sacros e estandartes com linhas douradas e prateadas.",
      "Brasões militares de gala, quepes e divisas com fios metálicos espessos.",
      "Vestidos de noiva, vestidos de festa e detalhes brilhantes em alta costura.",
      "Bordados com linhas que ficaram guardadas por anos e ressecaram no cone."
    ],
    "characteristics": [
      "Elimina 90% das quebras de linhas metálicas e especiais.",
      "Não deixa manchas oleosas nem altera a cor brilhante da linha.",
      "Protege os discos tensores e o olho da agulha contra desgaste abrasivo."
    ],
    "commonErrors": [
      "❌ Usar óleo de máquina comum ou desengripante (WD-40) na linha (eles mancham o tecido e fedem).",
      "❌ Encharcar o cone de linha com excesso de líquido (o silicone deve ser aplicado por contato leve no feltro).",
      "❌ Bordejar linha metálica com agulha comum 75/11 em vez de agulha própria para metálicos (Metallic 90/14)."
    ],
    "troubleshootingTips": [
      "A linha dourada está descascando e empacando no olho da agulha: umedeça o feltro com silicone líquido e troque a agulha por uma Metallic 90/14 com olho grande e polido.",
      "A linha metálica está pulando do cone e dando nós: vista uma redinha de nylon (Thread Net) no cone e pingue duas gotas de silicone na redinha.",
      "Apareceram pontinhos úmidos no tecido: aguarde 1 hora; o silicone mineral puro para bordado evapora completamente sem deixar resíduos."
    ],
    "dicaArtrelados": "O segredo de ouro para bordar com linha metálica sem estresse: agulha própria para metálicos 90/14 (que tem o furo grandão), velocidade baixada para 600 PPM e 3 gotinhas de silicone líquido no feltro por onde a linha passa! A linha corre soltinha e o bordado vira uma verdadeira joia!",
    "voceSabia": "Os mestres bordadores do Vaticano já usavam banha de baleia purificada no século XVI para lubrificar os fios de ouro puro maciço e fazê-los deslizar suavemente sobre as sedas papais sem romper os filamentos preciosos!",
    "practicalExercise": "Coloque uma linha metálica na máquina e borde 1.000 pontos a seco. Em seguida, pingue silicone no feltro guia e borde mais 1.000 pontos. Compare o som suave da máquina e a total ausência de fiapos de metal acumulados na agulha.",
    "quickSummary": "Umectação com Silicone é a aplicação de óleo mineral lubrificante que faz linhas metálicas e ressecadas deslizarem pela agulha sem quebrar nem descascar.",
    "recommendedSettings": {
      "speedPPM": "550 a 650 PPM",
      "needleType": "80/12 ou 90/14 Metallic (Olho Largo)",
      "density": "Alívio de tensão superior: 80 a 100 gf"
    },
    "relatedTerms": [
      "Linhas Metálicas (Lurex)",
      "Agulha Metallic / Topstitch",
      "Óleo de Silicone Mineral",
      "Feltro Lubrificante",
      "Redinha de Cone (Thread Net)"
    ],
    "tags": [
      "u-086",
      "silicone",
      "fios metalicos",
      "lubrificacao",
      "lurex",
      "linhas especiais",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Metallic Embroidery Threads: Best Practices and Lubrication Guide. Freiburg, 2022.",
      "GUNOLD GMBH. Specialty Metallic & Viscose Thread Handling Manual. Stockstadt, 2021.",
      "ARTRELADOS. Segredos do Bordado com Fios Metálicos, Dourados e Prateados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-087-universalidade-de-formatos-de-arquivos-tst-dst-pes",
    "code": "U-087",
    "term": "Universalidade de Formatos de Arquivos de Bordado (Embroidery File Formats & Machine Code Compatibility)",
    "pronunciation": "u-ni-ver-sa-li-da-de de for-ma-tos de ar-qui-vos de bor-da-do",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminina composta.",
    "category": "Formatos e Conversão de Arquivos",
    "origin": "Do latim 'universalis' (que abrange tudo). Padronização internacional de formatos binários de coordenadas para máquinas de bordado computadorizado.",
    "summary": "Guia completo dos formatos de arquivos de máquina (.DST, .PES, .JEF, .EXP, .XXX) versus arquivos editáveis de matriz (.EMB, .ART, .PES Master) e sua correta exportação.",
    "definition": "A Universalidade de Formatos de Arquivos de Bordado (Stitch File Formats vs. Native Outline Files & Cross-Platform Protocol) é o conjunto de padrões de codificação digital que viabiliza a comunicação entre os softwares de digitalização e os diferentes sistemas operacionais das máquinas de bordar mundiais. Divide-se categoricamente em: 1) Arquivos Nativos de Objetos/Contornos (como .EMB da Wilcom ou .ART da Bernina), que guardam fórmulas matemáticas e nós vetoriais editáveis; e 2) Arquivos de Pontos/Máquina (como .DST da Tajima, .PES da Brother, .JEF da Janome e .EXP da Melco/Bernina), que contêm apenas coordenadas brutas de perfuração (X, Y) e comandos de parada, corte e salto.",
    "technicalDetails": "O formato Tajima .DST é o padrão universal industrial (lido por 99% das máquinas do planeta), porém não armazena a tabela de cores RGB no cabeçalho (exige folha de produção impressa). Formatos domésticos (.PES, .JEF, .VP3) armazenam a paleta de cores interna e limites de bastidor dedicados.",
    "beginnerExplanation": "É a linguagem que a sua máquina entende! O arquivo do programa (.EMB) é como a receita do bolo com todos os ingredientes que você pode mexer e mudar o tamanho. O arquivo da máquina (.PES, .DST, .JEF) é o bolo já pronto e assado: a máquina só lê onde furar e não deixa você mudar o tamanho sem estragar os pontos!",
    "howItWorks": [
      "1. A bordadeira cria e programa a matriz no formato vetorial mestre (.EMB).",
      "2. Salva o arquivo mestre no computador para poder fazer alterações futuras com facilidade.",
      "3. Utiliza a função 'Exportar Arquivo de Máquina' e escolhe a extensão exata da sua máquina (ex: .PES para Brother, .JEF para Janome, .DST para industriais).",
      "4. Salva o arquivo de pontos diretamente no Pen Drive USB formatado em FAT32.",
      "5. Conecta o pen drive na máquina de bordar e carrega o arquivo.",
      "6. A máquina lê cada coordenada de ponto com precisão milimétrica e executa o trabalho perfeitamente."
    ],
    "applications": [
      "Conversão e envio de matrizes para clientes com máquinas de marcas variadas.",
      "Padronização de arquivos em ateliês mistos com máquinas domésticas e industriais.",
      "Venda e comercialização de matrizes em lojas virtuais de bordado.",
      "Armazenamento e organização do catálogo de matrizes no computador."
    ],
    "characteristics": [
      "O formato .DST funciona em quase qualquer máquina do mundo.",
      "Arquivos de máquina nunca devem ser redimensionados em mais de 10% sem o arquivo fonte mestre.",
      "Facilidade de transmissão por pen drive, cabo de rede ou conexão Wi-Fi."
    ],
    "commonErrors": [
      "❌ Tentar abrir um arquivo .EMB direto no painel da máquina de bordar (a máquina não reconhece arquivo de programa).",
      "❌ Aumentar um arquivo .DST em 50% na tela da máquina (os pontos se afastam e o bordado fica ralo e com buracos).",
      "❌ Deletar o arquivo mestre editável e guardar apenas o arquivo de máquina convertido."
    ],
    "troubleshootingTips": [
      "A máquina não reconhece o pen drive: certifique-se de que o pen drive está formatado no padrão FAT32 e não tem capacidade maior que 8GB em máquinas mais antigas.",
      "O arquivo .DST abriu na máquina com cores todas trocadas: isso é normal no formato .DST; configure a ordem das cores diretamente na tela da sua máquina.",
      "O nome da matriz não aparece no painel: use nomes curtos com até 8 letras, sem acentos, sem cedilha e sem caracteres especiais (ex: FLOR01.PES)."
    ],
    "dicaArtrelados": "Guarde SEMPRE uma cópia da sua matriz no formato mestre do seu programa (.EMB, .ART ou .BE)! Se amanhã o cliente pedir para aumentar o bordado ou mudar uma letra, você faz em 10 segundos! No arquivo da máquina (.PES ou .DST) você não consegue mexer nos pontos com perfeição!",
    "voceSabia": "O formato .DST foi criado pela empresa japonesa Tajima na década de 1980 e seus dados eram gravados originalmente em fitas de papel perfuradas (iguais às dos primeiros computadores da história), onde cada furinho no papel correspondia a um pulso do motor da agulha!",
    "practicalExercise": "Abra uma matriz no seu programa de computador. Salve uma cópia em .DST e outra em .PES (ou no formato da sua máquina). Abra ambas e observe como o formato nativo permite editar os objetos individualmente enquanto o formato de máquina mostra apenas os furinhos da agulha.",
    "quickSummary": "Formatos de Arquivo são as extensões que as máquinas leem (.DST, .PES, .JEF). Guarde sempre o arquivo mestre editável para poder alterar cores e tamanhos no futuro.",
    "recommendedSettings": {
      "speedPPM": "N/A (Transferência Digital)",
      "needleType": "N/A",
      "density": "Formatação USB: FAT32 | Nomes com máx. 8 caracteres"
    },
    "relatedTerms": [
      "Formato .DST (Tajima Universal)",
      "Formato .PES (Brother/Babylock)",
      "Formato .JEF (Janome)",
      "Arquivo Mestre Editável (.EMB)",
      "Formatação FAT32"
    ],
    "tags": [
      "u-087",
      "formatos de arquivo",
      "dst",
      "pes",
      "jef",
      "conversao",
      "compatibilidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Embroidery File Format Standards & Stitch Data Structures. Sydney, 2022.",
      "BROTHER INDUSTRIES. PES & DST Machine Compatibility Protocols. Nagoya, 2021.",
      "ARTRELADOS. Guia Definitivo de Formatos, Conversões e Organização de Matrizes de Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-088-unidade-de-guia-fio-oscilante-da-mola-tira-fio",
    "code": "U-088",
    "term": "Unidade de Guia-Fio Oscilante da Mola Tira-Fio (Take-Up Spring Check Wire & Thread Guide Bridge)",
    "pronunciation": "u-ni-da-de de gui-a fi-o o-si-lan-te da mo-la ti-ra fi-o",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes e Mecânica da Máquina",
    "origin": "Do latim 'oscillum' (movimento de balanço) e 'filum' (fio). Mecanismo de compensação elástica de tensão dinâmica durante o ciclo de 360° da agulha.",
    "summary": "Ponte metálica e limitador angular de curso da mola tira-fio (Check Spring), responsável por manter a linha esticada até a agulha penetrar o tecido.",
    "definition": "A Unidade de Guia-Fio Oscilante da Mola Tira-Fio (Take-Up Check Spring Travel Bridge & Dynamic Thread Guide Assembly) é o conjunto mecatrônico regulável que delimita o curso angular e a tensão da mola de compensação rápida (Check Spring) localizada logo após o disco tensor primário. Sua função mecânica indispensável é recolher a folga estática da linha superior durante o movimento descendente do estica-fio, mantendo o fio sob leve tensão até o instante exato em que a ponta da agulha penetra o tecido; no momento da perfuração, o limitador apoia a mola, liberando a linha para a formação do laço sem puxões bruscos.",
    "technicalDetails": "Curso angular operacional recomendado: 6 mm a 8 mm de deflexão vertical; Força elástica calibrada entre 5 e 10 gramas-força (gf). A mola deve atingir seu batente de descanso inferior exatamente quando a ponta da agulha toca a superfície do tecido tensionado no bastidor.",
    "beginnerExplanation": "É aquela pecinha de metal com uma molinha fininha que fica subindo e descendo perto dos discos de tensão. Ela funciona como um 'amortecedor' de linha: quando a linha fica frouxa, ela puxa a linha para cima; quando a agulha vai furar o pano, ela entrega a linha macia para não arrebentar!",
    "howItWorks": [
      "1. A linha sai dos discos tensores e passa pelo ganchinho da mola tira-fio.",
      "2. O estica-fio desce e a linha tende a ficar frouxa.",
      "3. A mola tira-fio sobe suavemente e recolhe toda a folga da linha no ar.",
      "4. A agulha desce para furar o tecido.",
      "5. A mola encosta no guia limitador no instante exato da perfuração.",
      "6. A linha é liberada livremente para a lançadeira pescar o laço por baixo.",
      "7. O ponto fecha com perfeição, sem laçadas soltas nem estalos de quebra."
    ],
    "applications": [
      "Eliminação de pequenos laços soltos (*loops*) na frente do bordado.",
      "Prevenção de quebra de linha no início de alta velocidade e saltos.",
      "Bordados em tecidos com espessura variável (costuras grossas e palas).",
      "Manutenção e calibração de cabeçotes industriais desregulados."
    ],
    "characteristics": [
      "Ajuste duplo: força da mola (torção) e curso de movimento (posição do batente).",
      "Fabricada em arame de aço mola temperado de altíssima resistência à fadiga.",
      "Componente fundamental para o sincronismo perfeito de alta rotação."
    ],
    "commonErrors": [
      "❌ Deixar a mola tira-fio com o curso travado ou quebrada (gera laços gigantes de linha no verso e falha pontos).",
      "❌ Apertar a mola com força excessiva (faz a linha arrebentar ao tocar no tecido).",
      "❌ Passar a linha por fora do ganchinho da mola tira-fio ao reabastecer a agulha."
    ],
    "troubleshootingTips": [
      "Ficam sobras e laçinhos de linha solta na frente do bordado: a mola tira-fio está fraca ou com pouco curso; aumente o curso da mola para 8 mm e aperte levemente a torção.",
      "A linha arrebenta com estalo seco bem na hora que a agulha toca o tecido: a mola tira-fio está com pressão forte demais; alivie a mola girando o eixo do bloco tensor.",
      "A mola não se move durante o bordado: desmonte o bloco tensor e retire fiapos de linha que possam estar travando o eixo da mola."
    ],
    "dicaArtrelados": "Sabe quando você olha a máquina trabalhando e vê aquela molinha fininha dançando e pulando no ritmo dos pontos? Ela é o coração da tensão! Se ela estiver parada ou quebrada, o bordado fica cheio de laços frouxos! Uma molinha nova e bem regulada transforma a qualidade dos seus pontos!",
    "voceSabia": "A mola tira-fio (Check Spring) foi inventada no século XIX por Isaac Singer e é considerada por engenheiros mecânicos uma das mais brilhantes soluções de amortecimento passivo da história da engenharia moderna!",
    "practicalExercise": "Puxe a linha com a mão logo acima da agulha: observe a molinha tira-fio descer cerca de 6 a 8 mm até bater no limitador de metal. Sinta a suavidade do amortecimento antes da linha começar a passar pelos discos de tensão.",
    "quickSummary": "Mola Tira-Fio e Guia Oscilante é o amortecedor mecânico que recolhe a folga da linha e entrega o fio suavemente no momento exato do furo da agulha.",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "75/11",
      "density": "Curso da mola: 6 a 8 mm | Tensão: 6 a 8 gf"
    },
    "relatedTerms": [
      "Mola Tira-Fio (Check Spring)",
      "Discos Tensores Primários",
      "Estica-Fio (Take-Up Lever)",
      "Laçadas Soltas (Looping)",
      "Tensão Dinâmica da Linha"
    ],
    "tags": [
      "u-088",
      "mola tira-fio",
      "check spring",
      "guia-fio",
      "amortecedor de linha",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Check Spring Adjustment and Tension Balancing. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Upper Thread Control and Check Wire Calibration. Ichinomiya, 2021.",
      "ARTRELADOS. Calibração e Manutenção Preventiva do Bloco de Tensões e Molas de Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-089-underlay-contorno-duplo-e-selagem-de-borda",
    "code": "U-089",
    "term": "Underlay Contorno Duplo e Selagem de Borda (Double Edge-Walk Underlay & Border Sealing Architecture)",
    "pronunciation": "an-der-lei con-tor-no du-plo e se-la-gem de bor-da",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do inglês 'underlay' (camada de base) e 'edge-walk' (caminhada de borda). Técnica clássica de digitalização de alta definição para colunas satim perfeitas.",
    "summary": "Passagem dupla de ponto corrido paralela às duas margens externas da coluna de cetim, erguendo as laterais e criando contornos perfeitamente nítidos sem serrilhados.",
    "definition": "O Underlay Contorno Duplo e Selagem de Borda (Double Edge-Walk Underlay & Edge Wall Architecture) é uma estrutura de subponto programada ao longo de ambos os limites perimétricos longitudinais de uma coluna de ponto cheio (satim). A máquina executa duas trajetórias lineares contínuas de ponto corrido com recuo calibrado da margem externa: a primeira descendo por uma lateral e a segunda subindo pela lateral oposta. Esse par de trilhos eleva as extremidades dos pontos de cobertura (*topstitch*), atua como barreira mecânica que impede o afundamento das bordas nas fibras do tecido e bloqueia o escape de felpas ou fios desfiados.",
    "technicalDetails": "Programado com comprimento de ponto de 2,0 mm a 2,8 mm e recuo perimétrico (*Inset Margin*) de 0,35 mm a 0,55 mm da borda real. Em colunas de satim com largura superior a 2,5 mm, deve ser associado a um underlay central (*Center Run*) ou zigue-zague aberto para evitar o colapso do centro da coluna.",
    "beginnerExplanation": "São duas linhas de costura retas que a máquina faz escondidas embaixo do ponto cheio, uma em cada beiradinha da letra ou do desenho. Elas funcionam como pequenos 'trilhos de trem' que levantam as pontas do bordado, deixando o contorno retinho e afiado como uma lâmina, sem aqueles dentes serrilhados!",
    "howItWorks": [
      "1. A máquina inicia a coluna costurando uma linha de ponto corrido pela margem esquerda.",
      "2. Ao chegar no final do segmento, faz a curva e sobe costurando pela margem direita com recuo exato.",
      "3. Os dois trilhos de sustentação delimitam a largura exata da coluna e prendem o tecido na entretela.",
      "4. A máquina inicia o ponto de acabamento em cetim que passa por cima dos dois trilhos.",
      "5. O ponto cheio apoia suas extremidades sobre os trilhos elevados, mantendo as bordas altas e retas.",
      "6. O contorno visual final fica perfeitamente nítido, limpo e com brilho uniforme em toda a extensão."
    ],
    "applications": [
      "Letras em ponto cheio de logotipos corporativos em camisas polo e jalecos.",
      "Bordas perimetrais e molduras de brasões e patches com acabamento premium.",
      "Bordados em tecidos propensos a desfiar (linho rústico, sarja leve e cetim).",
      "Colunas de cetim em toalhas felpudas para criar uma cerca que impede os pelos de saírem nas laterais."
    ],
    "characteristics": [
      "Confere nitidez ótica e linearidade incomparável aos contornos de texto.",
      "Evita que as bordas do ponto cheio afundem no tecido criando sombras irregulares.",
      "Consome pouquíssimos pontos e segundos de máquina em troca de alta qualidade visual."
    ],
    "commonErrors": [
      "❌ Colocar a margem de recuo muito pequena (< 0,2 mm), fazendo os pontos da base escaparem para fora do ponto cheio.",
      "❌ Usar em colunas ultrafinas (< 1,2 mm), onde as duas linhas de borda se sobrepõem e engrossam o tecido.",
      "❌ Usar pontos de contorno excessivamente longos (> 3,5 mm) em curvas fechadas."
    ],
    "troubleshootingTips": [
      "Aparecem pontinhos da linha de base saindo dos lados da letra: aumente o recuo da margem (Inset Margin) para 0,45 mm no software de digitalização.",
      "A borda da coluna de cetim ficou com aspecto denteado e irregular: ative o 'Double Edge-Walk' nas propriedades de underlay da matriz.",
      "A letra ficou muito dura no meio e alta nas pontas: adicione um 'Center Walk' ou zigue-zague suave no centro da coluna."
    ],
    "dicaArtrelados": "Para letrinhas e textos médios ficarem com acabamento de alfaiataria: NUNCA use ponto cheio puro sem base! Ative SEMPRE o 'Double Edge Walk' (contorno duplo de borda)! Ele cria uma paredinha nas laterais que deixa as letras legíveis até a metros de distância!",
    "voceSabia": "Na caligrafia manual gótica da Idade Média, os monges copistas traçavam duas linhas de grafite ultrafinas nas margens antes de pintar com tinta e pó de ouro para que a pena nunca vazasse do limite exato da letra!",
    "practicalExercise": "Digitalize duas colunas de cetim de 4 mm de largura com o mesmo texto: a primeira com underlay Center Walk simples e a segunda com Double Edge Walk. Borde em piquet e observe a nitidez superior das bordas na segunda amostra.",
    "quickSummary": "Underlay Contorno Duplo é a passagem de duas costuras de base nas margens laterais que erguem o ponto cheio e garantem contornos afiados e sem serrilhados.",
    "recommendedSettings": {
      "speedPPM": "750 a 900 PPM",
      "needleType": "75/11",
      "density": "Comprimento de ponto: 2.2 a 2.5 mm | Recuo: 0.40 mm"
    },
    "relatedTerms": [
      "Underlay Center Walk",
      "Ponto Cheio (Satin Stitch)",
      "Recuo Perimétrico (Inset Margin)",
      "Nitidez de Contorno",
      "Topstitch (Ponto de Cobertura)"
    ],
    "tags": [
      "u-089",
      "underlay",
      "contorno duplo",
      "edge-walk",
      "ponto cheio",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO. Satin Stitch Foundation & Edge Walk Mastery. Sydney, 2022.",
      "PULSE SIGNATURE. Column Underlay Architectures and Edge Walls. Mississauga, 2021.",
      "ARTRELADOS. A Arte da Digitalização de Letras e Textos Nítidos no Bordado Digital. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-090-unidade-de-acionamento-solenoide-de-pulo-e-corte",
    "code": "U-090",
    "term": "Unidade de Acionamento Solenoide de Pulo e Corte (Jump Stitch & Trim Solenoid Actuator)",
    "pronunciation": "u-ni-da-de de a-si-o-na-men-to so-le-noi-de de pu-lo e cor-te",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes e Mecânica da Máquina",
    "origin": "Do francês 'solénoïde' (bobina condutora em espiral helicoidal). Dispositivo mecatrônico de conversão eletromagnética direta para acionamentos em frações de milissegundo.",
    "summary": "Eletroímã de ação ultrarrápida que comanda o desengate mecânico da agulha em deslocamentos longos (pulos) e o disparo das facas de corte sem interromper a rotação mestre.",
    "definition": "A Unidade de Acionamento Solenoide de Pulo e Corte (High-Speed Solenoid Actuator Assembly for Jump & Trimming) é o subsistema eletromecânico composto por bobinas de cobre de enrolamento denso e êmbolos de ferro doce temperado acionados por pulsos de corrente contínua controlados por transistores MOSFET na placa de potência. Ao receber o comando digital de corte ou pulo (*Jump*), o solenoide gera um campo magnético instantâneo de alta potência em menos de 15 milissegundos, desarmando a biela de tração da barra de agulha para permitir o deslocamento do bastidor e empurrando a alavanca da lâmina móvel de corte sob a chapa de agulha.",
    "technicalDetails": "Tensão de pulso: 24V a 48V DC com pico de corrente de abertura de 3A a 5A e modulação PWM de sustentação a 1A para evitar superaquecimento. Opera em sincronia angular rígida governada pelo encoder do eixo principal aos 196° e 285° do ciclo.",
    "beginnerExplanation": "É um ímã elétrico super rápido que parece um martelinho automático dentro da máquina. Quando o desenho precisa dar um pulo grande de uma letra para outra ou cortar a linha, esse ímã dá um estalo na velocidade da luz para destravar a agulha e acionar a tesourinha escondida embaixo da chapa!",
    "howItWorks": [
      "1. A matriz envia um comando de corte ou pulo longo (Jump).",
      "2. O processador da máquina lê a instrução e calcula o grau angular do eixo principal pelo encoder.",
      "3. No instante exato (ex: 196°), a placa envia um pulso elétrico forte para o solenoide.",
      "4. O êmbolo magnético do solenoide avança em milissegundos com um estalo característico.",
      "5. A alavanca desengata a barra de agulha (para ela não descer) e empurra a faca móvel de corte.",
      "6. A mola de retorno puxa o êmbolo de volta para a posição de repouso.",
      "7. A máquina retoma a costura normalmente na nova posição sem falhas de sincronismo."
    ],
    "applications": [
      "Acionamento instantâneo do sistema de corte automático de linha superior e inferior.",
      "Desengate mecânico da agulha durante pulos longos de pantógrafo entre objetos distantes.",
      "Mecanismos de trava de barra em cabeçotes industriais de alta velocidade (1.000 PPM).",
      "Comando de pinças de retenção e limpadores de fio pneumático/magnético."
    ],
    "characteristics": [
      "Velocidade de resposta em frações de milissegundo com altíssima repetibilidade.",
      "Sem engrenagens ou correias de transmissão para o movimento de engate.",
      "Construção robusta com mola de retorno de aço inoxidável de alta fadiga."
    ],
    "commonErrors": [
      "❌ Acúmulo de poeira de linha misturada com óleo no eixo do êmbolo, fazendo o solenoide travar emperrado.",
      "❌ Lubrificar o êmbolo do solenoide com óleo líquido comum (o êmbolo deve trabalhar seco ou com grafite em pó seco).",
      "❌ Queima da bobina do solenoide por falha no transistor de disparo na placa de potência."
    ],
    "troubleshootingTips": [
      "A máquina não está cortando a linha e não se ouve o estalo do trimer: teste o solenoide no menu de diagnóstico de peças do painel e verifique a fiação de 24V.",
      "A agulha continua costurando durante os pulos longos, riscando a linha por cima do bordado: o solenoide de pulo está emperrado com fiapos; limpe o mecanismo.",
      "O solenoide está muito quente ao toque: o circuito de sustentação PWM na placa controladora pode estar desregulado com corrente contínua excessiva."
    ],
    "dicaArtrelados": "NUNCA jogue óleo líquido comum nos solenoides e eletroímãs da máquina! O óleo vira uma graxa grudenta com a poeira têxtil e trava o êmbolo magnético. Limpe sempre com pincel seco ou spray desengripante seco com base de grafite!",
    "voceSabia": "Os solenoides modernos de máquinas de bordar industriais são projetados para suportar mais de 50 milhões de disparos ao longo da vida útil sem apresentar fadiga mecânica ou perda de força magnética!",
    "practicalExercise": "Acesse o menu técnico de teste de atuadores no painel da sua máquina. Selecione 'Trim Solenoid / Solenoide de Corte' e aperte o botão de teste: escute o estalo mecânico claro e limpo do êmbolo funcionando.",
    "quickSummary": "Solenoide de Pulo e Corte é o atuador eletromagnético ultrarrápido que desengata agulhas e aciona o cortador de linha no momento exato do ciclo.",
    "recommendedSettings": {
      "speedPPM": "Compatível até 1.200 PPM",
      "needleType": "N/A",
      "density": "Tempo de resposta do pulso: 10 a 15 ms a 24V DC"
    },
    "relatedTerms": [
      "Trimer (Cortador de Linha)",
      "Pulo de Ponto (Jump Stitch)",
      "Encoder do Eixo Principal",
      "Placa de Potência (Driver Board)",
      "Barra de Agulha (Needle Bar)"
    ],
    "tags": [
      "u-090",
      "solenoide",
      "trimer",
      "pulo de ponto",
      "mecanica",
      "eletroima",
      "atuadores",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN INDUSTRIAL. Solenoid Actuation Systems and Trimmer Maintenance. Ichinomiya, 2022.",
      "TAJIMA EMBROIDERY MACHINERY. High-Speed Trimming & Jump Solenoid Calibration. Nagoya, 2021.",
      "ARTRELADOS. Mecânica e Eletroeletrônica de Máquinas de Bordar Industriais. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-091-uniformidade-de-tensao-entre-agulhas-multicabecas",
    "code": "U-091",
    "term": "Uniformidade de Tensão entre Agulhas Multicabeças (Multi-Head Tension Balancing & Calibration Protocol)",
    "pronunciation": "u-ni-for-mi-da-de de ten-são en-tre a-gu-lhas mul-ti-ca-be-sas",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Controle de Qualidade & Produtividade",
    "origin": "Do latim 'uniformis' (idêntico) e do grego 'tasis' (tensão). Protocolo de metrologia têxtil indispensável para padronização de grandes parques fabris.",
    "summary": "Procedimento sistemático de calibração com dinamômetro digital para equalizar a tensão de todas as agulhas em máquinas multicabeças, garantindo peças idênticas.",
    "definition": "A Uniformidade de Tensão entre Agulhas Multicabeças (Multi-Head Upper & Bobbin Tension Normalization Protocol) é o método técnico de calibração e padronização que assegura que todas as agulhas ativas em múltiplos cabeçotes industriais (máquinas de 2, 4, 6, 8 ou 12 cabeças) exerçam rigorosamente a mesma força de tração em gramas-força (gf). Sem essa equalização sistemática, o mesmo lote de bordados corporativos apresentará variações inaceitáveis de tonalidade visual, deformação dimensional de logotipos, repuxo assimétrico do tecido e proporções dispares de linha de bobina no verso entre as peças.",
    "technicalDetails": "Calibração obrigatória com medidor de tensão digital (Tension Gauge / TOWA): Linha da bobina equalizada entre 20 e 24 gf em todas as caixas; Linha superior No 40 calibrada entre 110 e 130 gf em todas as agulhas do cabeçote com tolerância máxima aceitável de ±5 gf entre cabeças.",
    "beginnerExplanation": "Se você tem uma máquina com várias cabeças bordando 4 ou 8 camisas ao mesmo tempo, todas as linhas de todas as agulhas precisam estar com a mesmíssima força de aperto! Se uma agulha estiver frouxa e a outra apertada, uma camisa sai linda e a outra sai enrugada e com cor diferente! Esse protocolo deixa todas exatamente iguais!",
    "howItWorks": [
      "1. O operador calibra todas as caixas de bobina no medidor TOWA para exatamente 22 gf.",
      "2. Conecta o dinamômetro na linha superior de cada agulha, puxando a linha no sentido da descida.",
      "3. Ajusta o botão tensor primário até a leitura estabilizar na faixa padrão (ex: 120 gf).",
      "4. Repete a conferência em todas as agulhas de todos os cabeçotes da máquina.",
      "5. Borda a matriz de teste I-H ou padrão borboleta em todas as cabeças simultaneamente.",
      "6. Vira o bastidor e confere se a proporção de 1/3 de linha branca no verso está 100% idêntica em todas as peças do lote."
    ],
    "applications": [
      "Grandes produções industriais de uniformes corporativos de marcas multinacionais.",
      "Bordados em larga escala de bonés e jaquetas pesadas em máquinas multicabeças.",
      "Eliminação de divergências de cor provocadas por reflexão de luz em pontos frouxos/apertados.",
      "Controle de qualidade para auditorias e certificações têxteis ISO 9001."
    ],
    "characteristics": [
      "Garante repetibilidade absoluta do primeiro ao milésimo bordado.",
      "Reduz drasticamente o índice de quebra de linhas e paradas de máquina.",
      "Evita que uma cabeça problemática atrase a produção de todas as outras cabeças."
    ],
    "commonErrors": [
      "❌ Regular a tensão das agulhas 'a olho' ou apenas pelo tato dos dedos sem usar tensiômetro medidor.",
      "❌ Misturar bobinas de marcas e lotes diferentes entre os cabeçotes da mesma máquina.",
      "❌ Ignorar a limpeza dos discos tensores de uma das cabeças que acumulou poeira."
    ],
    "troubleshootingTips": [
      "A cabeça número 3 está deixando o bordado mais franzido que as outras: a tensão superior da cabeça 3 está muito alta; use o dinamômetro e reduza para 120 gf.",
      "Aparece linha branca da bobina na frente apenas na cabeça 5: a caixa de bobina da cabeça 5 está muito solta ou o tensor superior está apertado demais; recalibre no TOWA.",
      "O cliente reclamou que o mesmo logotipo parece mais claro em algumas camisas: variações de tensão alteram o ângulo de reflexão da luz na linha; padronize as tensões com dinamômetro."
    ],
    "dicaArtrelados": "Tenha um medidor de tensão no seu ateliê! Fazer o teste da linha apenas 'puxando com a mão' é como medir febre encostando a mão na testa sem termômetro. O medidor digital dá o número exato em gramas e você nunca mais terá peças diferentes no mesmo pedido!",
    "voceSabia": "Em fábricas de marcas de luxo como Ralph Lauren e Lacoste, as máquinas de bordar passam por checagem obrigatória de tensão com dinamômetro digital antes do início de cada turno de trabalho de 8 horas!",
    "practicalExercise": "Borde a matriz teste de 5 colunas satim (Teste Fox I-H) em dois cabeçotes diferentes da sua máquina. Vire o tecido e meça com uma régua a largura da faixa branca da bobina no verso: ela deve ter exatamente 1/3 da largura total em todas as colunas.",
    "quickSummary": "Uniformidade de Tensão Multicabeças é a padronização metrológica das tensões superiores e inferiores que assegura que todas as peças bordadas saiam idênticas.",
    "recommendedSettings": {
      "speedPPM": "850 a 950 PPM",
      "needleType": "75/11",
      "density": "Bobina: 20-24 gf | Linha Superior: 110-130 gf (Tolerância ±5 gf)"
    },
    "relatedTerms": [
      "Tensiômetro TOWA",
      "Dinamômetro Digital de Linha",
      "Teste I-H / Fox Test",
      "Máquina Multicabeças",
      "Proporção Áurea de Tensão (1/3)"
    ],
    "tags": [
      "u-091",
      "uniformidade de tensao",
      "multicabecas",
      "calibracao",
      "dinamometro",
      "controle de qualidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA TENSION SYSTEMS. Industrial Tension Gauge Operations & Thread Standardization. Osaka, 2022.",
      "TAJIMA EMBROIDERY MACHINERY. Quality Control & Multi-Head Calibration Guide. Nagoya, 2021.",
      "ARTRELADOS. Gestão Industrial e Controle de Qualidade em Parques de Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-092-unidade-de-pressao-pneumatica-do-bastidor-automatico",
    "code": "U-092",
    "term": "Unidade de Pressão Pneumática do Bastidor Automático (Pneumatic Hooping Clamping System & Air Pressure Regulation)",
    "pronunciation": "u-ni-da-de de pres-são pneu-ma-ti-ca do bas-ti-dor au-to-ma-ti-co",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Bastidores e Enquadramento",
    "origin": "Do grego 'pneuma' (ar, sopro) e do latim 'pressio' (força concentrada). Tecnologia de automação industrial por ar comprimido aplicada ao fechamento de bastidores pesados.",
    "summary": "Sistema de enquadramento automatizado acionado por pistões pneumáticos a ar comprimido (4 a 6 bar), que fecha bastidores pesados em 1 segundo sem esforço físico do operador.",
    "definition": "A Unidade de Pressão Pneumática do Bastidor Automático (Pneumatic Fast-Clamping Hooping Station & Compressed Air Regulator) é o sistema de fixação mecanizado que utiliza cilindros e pistões pneumáticos alimentados por rede de ar comprimido filtrado e regulado para prender tecidos, bolsas, sapatos, mochilas e jaquetas grossas no bastidor de bordado. Acionado por pedal ou botão bi-manual de segurança, o sistema aplica força de prensagem uniforme e calibrada instantaneamente, eliminando 100% da fadiga muscular das mãos dos operadores gerada pelo aperto repetitivo de parafusos manuais em produções de larga escala.",
    "technicalDetails": "Pressão de trabalho regulada entre 3,5 bar e 6,0 bar (50 a 85 psi) por meio de válvula reguladora com manômetro e filtro coalescente de retenção de umidade e óleo. Possui amortecedores pneumáticos de fim de curso para evitar impacto brusco sobre tecidos delicados.",
    "beginnerExplanation": "É um bastidor automático que fecha sozinho com ar comprimido! Em vez de você ficar sofrendo e girando parafusos duros com a mão o dia inteiro para prender jaquetas e bolsas grossas, você só pisa no pedal e 'TCHUM!': o bastidor prende a peça perfeitamente esticada em 1 segundo sem cansar os dedos!",
    "howItWorks": [
      "1. O compressor de ar envia ar comprimido limpo para o regulador de pressão da estação.",
      "2. O operador posiciona a entretela e a peça grossa (como uma jaqueta de couro ou mochila) sobre o suporte.",
      "3. O operador aciona o pedal de comando ou botão de segurança.",
      "4. A válvula solenoide pneumática abre e os pistões descem suavemente com pressão constante.",
      "5. O aro superior trava a peça com firmeza de tambor uniforme em todos os lados.",
      "6. A estação mantém a pressão travada e o operador transfere o conjunto diretamente para a máquina.",
      "7. Após o bordado, um novo toque no pedal despressuriza o pistão e libera a peça instantaneamente."
    ],
    "applications": [
      "Bordados em mochilas escolares pesadas, pastas executivas e malas de viagem.",
      "Produção seriada de jaquetas corta-vento forradas, capas de assento e estofados.",
      "Bordados em tênis, chuteiras e calçados industriais de segurança.",
      "Prevenção de Lesões por Esforço Repetitivo (LER/DORT) em equipes de produção de alta demanda."
    ],
    "characteristics": [
      "Velocidade de preparação até 5 vezes mais rápida que o bastidor manual comum.",
      "Pressão milimetricamente constante do primeiro ao último produto do lote.",
      "Elimina folgas e deslizamentos em tecidos escorregadios e volumosos."
    ],
    "commonErrors": [
      "❌ Trabalhar com pressão pneumática alta demais (> 7 bar), cortando as fibras de tecidos finos ou estourando a costura da peça.",
      "❌ Deixar acumular água de condensação no filtro de ar, espirrando gotículas de água na roupa do cliente.",
      "❌ Colocar os dedos sob os pistões durante o fechamento (risco de prensagem acidental)."
    ],
    "troubleshootingTips": [
      "O bastidor não tem força suficiente para prender o couro: aumente a pressão no manômetro regulador para 5,5 bar.",
      "O tecido ficou com marcas esbranquiçadas de esmagamento: reduza a pressão para 3,5 bar e instale mantas de silicone amortecedoras nas garras do bastidor.",
      "O pistão está descendo devagar e sem força: drene a água acumulada no copo do filtro de ar e verifique se há vazamentos nas mangueiras pneumáticas."
    ],
    "dicaArtrelados": "Se a sua confecção borda muitas jaquetas pesadas, mochilas ou bolsas: investir em um sistema pneumático ou bastidores magnéticos automáticos poupa os punhos e os tendões da bordadeira e dobra a capacidade de entrega diária da empresa com zero cansaço!",
    "voceSabia": "Os primeiros bastidores pneumáticos foram criados na Alemanha nos anos 1980 para a indústria automotiva, para conseguir bordar os logotipos das montadoras nos apoios de cabeça de couro duro dos carros de luxo da Mercedes-Benz e BMW!",
    "practicalExercise": "Visite uma confecção com linha pneumática ou assista à demonstração: observe a velocidade impressionante de enquadramento de uma mochila em menos de 3 segundos por meio do acionamento a pedal.",
    "quickSummary": "Bastidor Pneumático é o sistema de fixação a ar comprimido que trava tecidos pesados e jaquetas no aro em 1 segundo, com força uniforme e sem esforço manual.",
    "recommendedSettings": {
      "speedPPM": "800 a 950 PPM",
      "needleType": "Compatível com produto",
      "density": "Pressão de trabalho: 4.0 a 5.5 bar (58 a 80 psi)"
    },
    "relatedTerms": [
      "Compressor de Ar Filtrado",
      "Bastidor Magnético",
      "Enquadramento de Jaquetas Pesadas",
      "Ergonomia e Prevenção de LER",
      "Válvula Reguladora de Pressão"
    ],
    "tags": [
      "u-092",
      "pneumatico",
      "bastidor automatico",
      "ar comprimido",
      "jaquetas pesadas",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SMC PNEUMATICS INDUSTRIAL. Pneumatic Actuators and Air Preparation in Apparel Manufacturing. Tokyo, 2022.",
      "HOOPMASTER AUTOMATION. Pneumatic Clamping & Heavy Garment Hooping. Dallas, 2021.",
      "ARTRELADOS. Automação e Engenharia de Processos no Ateliê de Bordados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-093-underlay-em-zigue-zague-cruzado-para-letras-cursivas",
    "code": "U-093",
    "term": "Underlay em Zigue-Zague Cruzado para Letras Cursivas (Cross-Zigzag Script Underlay Strategy)",
    "pronunciation": "an-der-lei em zi-gue za-gue cru-za-do pa-ra le-tras cur-si-vas",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do inglês 'cross-zigzag' (zigue-zague cruzado) e do latim 'cursivus' (que corre, fluido). Metodologia desenvolvida para preservar a fluidez de fontes manuscritas sem nós.",
    "summary": "Subponto em zigue-zague com ângulos alternados e nós aliviados programado especificamente para nomes e fontes cursivas, evitando estrangulamento nas curvas finas.",
    "definition": "O Underlay em Zigue-Zague Cruzado para Letras Cursivas (Cross-Zigzag Script Underlay & Fluid Curve Architecture) é a técnica de digitalização especializada em fontes manuscritas e assinaturas onde os subpontos de sustentação são gerados em zigue-zague dinâmico com espaçamento aberto e ângulo que se adapta progressivamente à curvatura das laçadas das letras (como em 'e', 'l', 'b' e 'g'). Esse padrão evita a concentração excessiva de perfurações de agulha nas junções e emendas das curvas, garantindo que o ponto cheio de acabamento mantenha um relevo suave, arredondado e contínuo sem quebras de linha por aglomeração de pontos.",
    "technicalDetails": "Espaçamento do zigue-zague calibrado entre 1,8 mm e 2,4 mm com recuo lateral de 0,40 mm. Nas conexões estreitas (< 1,5 mm de largura), o algoritmo converte automaticamente o zigue-zague para ponto corrido central (*Center Walk*) para evitar o estrangulamento do tecido.",
    "beginnerExplanation": "Quando vamos bordar nomes com aquelas letrinhas desenhadas de mão (letra cursiva), as curvas e voltinhas são cheias de emendas. Esse subponto em zigue-zague inteligente faz a base macia acompanhando as curvas da letra sem acumular um monte de furos no mesmo lugar, fazendo a letra parecer uma caligrafia perfeita de caneta!",
    "howItWorks": [
      "1. O programador digita o nome com fonte cursiva no software de bordado.",
      "2. Ativa o underlay inteligente tipo 'Zigue-Zague com Transição Cursiva'.",
      "3. Nas partes largas da letra, a máquina borda um zigue-zague aberto que dá volume e corpo.",
      "4. Nas partes estreitas e junções entre letras, o programa troca suavemente para um ponto corrido simples.",
      "5. A máquina borda o ponto de acabamento por cima com fluidez total.",
      "6. A letra manuscrita fica macia, com relevo bonito e sem nenhuma bolinha dura nas emendas."
    ],
    "applications": [
      "Bordados de nomes de profissionais em jalecos médicos e odontológicos.",
      "Assinaturas e monogramas delicados em enxovais de casamento e toalhas de batizado.",
      "Logotipos com tipografia caligráfica manuscrita fluida.",
      "Nomes de bebês em mantas, fraldas e bodies de suedine macio."
    ],
    "characteristics": [
      "Evita o endurecimento de letras pequenas nas emendas.",
      "Proporciona efeito tridimensional arredondado às colunas de cetim.",
      "Elimina quebras de linha causadas por 'pontos em cima de pontos' nas curvas."
    ],
    "commonErrors": [
      "❌ Usar underlay tatami pesado em fontes cursivas finas, transformando o nome em uma placa rígida.",
      "❌ Deixar o zigue-zague muito fechado (< 1,0 mm) em curvas apertadas, cortando o tecido.",
      "❌ Não recuar as pontas do zigue-zague nas extremidades finas das letras."
    ],
    "troubleshootingTips": [
      "A agulha arrebenta a linha sempre que passa pelas emendas das letras cursivas: há excesso de pontos no mesmo local; ative o filtro de pontos curtos e use o underlay zigue-zague aberto.",
      "A letrinha cursiva ficou achatada e sumiu na fralda do bebê: utilize underlay zigue-zague com recuo de 0,35 mm e aumente a densidade do cetim para 0,38 mm.",
      "O nome ficou torto e repuxado nas conexões: adicione sob-ponto contínuo conectando as letras para estabilizar a malha antes do preenchimento."
    ],
    "dicaArtrelados": "Para nomes manuscritos em jalecos e fraldas de bebê: use o underlay em zigue-zague aberto com ponto de 2 mm! Ele deixa o nome gordinho e fofo como se fosse feito à mão, e a agulha corre macia sem quebrar nem uma única vez!",
    "voceSabia": "As fontes cursivas digitais de bordado mais famosas do mundo (como a 'Diana Script' e a 'Commercial Script') foram desenhadas inspirando-se nas caligrafias a bico de pena dos tratados diplomáticos do século XIX!",
    "practicalExercise": "Escreva o nome 'Beatriz' em fonte cursiva no seu software. Configure uma versão com underlay corrido e outra com underlay zigue-zague dinâmico. Borde em uma fralda de bebê e compare o volume e a definição de ambas.",
    "quickSummary": "Underlay Zigue-Zague Cursivo é a base flexível de sustentação que acompanha as curvas de fontes manuscritas, dando relevo uniforme sem acumular pontos nas emendas.",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "70/10 ou 75/11",
      "density": "Espaçamento do zigue-zague: 2.0 mm | Recuo: 0.40 mm"
    },
    "relatedTerms": [
      "Fontes Manuscritas (Script Fonts)",
      "Ponto Cheio Cursivo",
      "Filtro de Pontos Curtos",
      "Nomes em Jalecos",
      "Underlay Center Walk"
    ],
    "tags": [
      "u-093",
      "underlay zigue-zague",
      "letras cursivas",
      "fontes manuscritas",
      "nomes",
      "jalecos",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Lettering & Script Font Underlay Techniques. Sydney, 2022.",
      "HATCH BY WILCOM. Professional Monogramming & Script Lettering Guide. Melbourne, 2021.",
      "ARTRELADOS. Guia Definitivo de Nomes, Jalecos e Tipografia no Bordado Digital. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-094-utilizacao-de-fios-de-poliester-fosco",
    "code": "U-094",
    "term": "Utilização de Fios de Poliéster Fosco e Efeitos sem Reflexo (Matte Finish Embroidery Thread & Glare-Free Aesthetics)",
    "pronunciation": "u-ti-li-za-são de fi-os de po-li-es-ter fos-co e e-fei-tos sem re-fle-xo",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Linhas & Insumos",
    "origin": "Do grego 'polys' (muitos), 'ester' (composto orgânico) e do latim 'fuscus' (escuro, sem brilho). Inovação da química têxtil com inclusão de dióxido de titânio (TiO2) na extrusão do fio.",
    "summary": "Linhas especiais de poliéster 100% foscas e sem reflexo de luz, perfeitas para criar sombras hiper-realistas, pelagens rústicas e uniformes táticos discretos.",
    "definition": "A Utilização de Fios de Poliéster Fosco (Matte Polyester Thread Technology / Frosted Matt Thread) compreende a aplicação de linhas de bordado industriais cuja estrutura polimérica recebe micropartículas de cerâmica ou dióxido de titânio durante o processo de fiação, eliminando 100% do brilho reflexivo característico do poliéster trilobal. Essas linhas proporcionam um aspecto nobre de algodão puro ou giz aveludado, com altíssima solidez à luz solar e a lavagens com cloro, sendo indispensáveis para conferir contraste de profundidade, realismo botânico, texturas animais e acabamento fosco em uniformes militares e táticos.",
    "technicalDetails": "Linha padrão No 40 (Tex 27 / 120D/2) com alongamento controlado de 15% a 18% e resistência à tração de 1.100 cN. Não desbota sob raios ultravioleta e resiste a alvejantes com cloro a até 95 °C de lavagem industrial.",
    "beginnerExplanation": "É uma linha de bordar moderna que não tem aquele brilho plástico reluzente das linhas comuns. Ela é 100% fosca e macia, parecendo linha pura de algodão! É perfeita para fazer sombras realistas, pelos de bichinhos, flores com pétalas aveludadas e uniformes que não podem brilhar no sol!",
    "howItWorks": [
      "1. A bordadeira escolhe fios foscos para compor sombras, fundos ou detalhes rústicos da matriz.",
      "2. Passa a linha pelos tensores da máquina (a linha fosca tem coeficiente de atrito suave).",
      "3. Ajusta a tensão da agulha para 110 a 125 gf.",
      "4. A máquina borda normalmente em alta velocidade (750 a 900 PPM).",
      "5. Os pontos assentam com acabamento aveludado fosco, sem reflexos de luz em fotos ou no sol.",
      "6. A combinação de cores brilhantes com cores foscas no mesmo desenho cria uma sensação de relevo e profundidade inacreditável."
    ],
    "applications": [
      "Bordados realistas de retratos humanos, pele, sombras de rosto e olhos.",
      "Bordados de animais (pelagem de cavalos, cachorros, penas de pássaros com toque aveludado).",
      "Uniformes militares, policiais e fardamentos táticos de camuflagem (sem reflexo óptico).",
      "Moda praia, artesanato rústico e roupas infantis em estilo linho e algodão cru vintage."
    ],
    "characteristics": [
      "Zero reflexo sob a luz do sol e em fotos com flash de celular.",
      "Toda a resistência mecânica e durabilidade indestrutível do poliéster comum.",
      "Cores ultra-nítidas com máxima fidelidade visual em qualquer ângulo de iluminação."
    ],
    "commonErrors": [
      "❌ Apertar a tensão excessivamente achando que a linha fosca precisa de mais pressão.",
      "❌ Usar linha fosca em logotipos que o cliente exigiu que fossem brilhantes e acetinados.",
      "❌ Misturar marcas sem conferir a gramatura (Tex) do fio."
    ],
    "troubleshootingTips": [
      "O bordado ficou sem o contraste esperado: misture uma cor brilhante comum com uma cor fosca no mesmo tom para criar o efeito de luz e sombra natural.",
      "A linha fosca está desfiando na agulha: use agulha ponta fina 75/11 nova e certifique-se de que a linha não esteja raspando em guias ásperos.",
      "As fotos do bordado no celular ficavam com reflexos brancos no logotipo: use linhas foscas (Frosted Matt) e tire fotos com definição impecável sem reflexos."
    ],
    "dicaArtrelados": "O segredo dos bordados hiper-realistas que parecem quadros pintados à mão: use linha de poliéster brilhante para os pontos de luz (onde o sol bate) e linha de poliéster fosco para as partes de sombra! A peça ganha uma profundidade 3D que todo mundo para para admirar!",
    "voceSabia": "As linhas foscas (como a famosa linha Frosted Matt da alemã Madeira) foram desenvolvidas originalmente para atender a pedidos das forças armadas da OTAN, que precisavam de emblemas bordados em fardas que não refletissem a luz da lua nem fossem detectados por binóculos noturnos!",
    "practicalExercise": "Borde uma folha verde em dois tons: faça a metade esquerda com poliéster brilhante e a metade direita com poliéster fosco. Tire uma foto com o flash do celular e veja o efeito de luz natural tridimensional gerado pela ausência de brilho de um dos lados.",
    "quickSummary": "Poliéster Fosco é a linha de bordar sem brilho que cria texturas aveludadas, sombras realistas e emblemas discretos com toda a resistência do poliéster.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola ou Fina",
      "density": "Densidade padrão: 0.40 mm a 0.42 mm"
    },
    "relatedTerms": [
      "Poliéster Trilobal (Linha Brilhante)",
      "Efeito Luz e Sombra",
      "Frosted Matt (Madeira)",
      "Uniformes Táticos",
      "Solidez à Luz Solar (UV Fastness)"
    ],
    "tags": [
      "u-094",
      "poliester fosco",
      "linha fosca",
      "frosted matt",
      "sem reflexo",
      "linhas",
      "insumos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Frosted Matt Polyester Thread & Light Reflection Engineering. Freiburg, 2022.",
      "GUNOLD GMBH. Poly-Matt & Special Effect Embroidery Filaments Handbook. Stockstadt, 2021.",
      "ARTRELADOS. O Poder das Linhas Especiais: Foscas, Metálicas e Fluorescentes no Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-095-unidade-de-refrigeracao-e-dissipacao-de-calor-da-cpu",
    "code": "U-095",
    "term": "Unidade de Refrigeração e Dissipação de Calor da CPU da Máquina (Motherboard Cooling Fan & Heat Sink Maintenance)",
    "pronunciation": "u-ni-da-de de re-fri-ge-ra-são e di-si-pa-são de ca-lor da ce-pê-u da ma-qui-na",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Manutenção & Ferramentas",
    "origin": "Do latim 'refrigerare' (esfriar) e da sigla 'CPU' (Central Processing Unit). Subsistema de gestão térmica eletrônica essencial para a confiabilidade de máquinas industriais.",
    "summary": "Manutenção preventiva e limpeza do microventilador e dissipador térmico da placa eletrônica da máquina, prevenindo travamentos repentinos de matrizes e perda de pontos.",
    "definition": "A Unidade de Refrigeração e Dissipação de Calor da CPU da Máquina (Motherboard Heat Sink & DC Cooling Fan Assembly) é o conjunto de gestão térmica instalado sobre os microprocessadores principais (DSP e CPU) e módulos de potência (Drivers de Motor) no gabinete elétrico da máquina de bordar. Composto por um bloco aletado de alumínio anodizado de alta condutividade térmica e uma ventoinha de fluxo forçado contínuo (DC Fan 12V/24V), o sistema dissipa o calor gerado pelo processamento contínuo de milhares de coordenadas vetoriais por minuto. A poeira de linha têxtil atua como isolante térmico; se não limpa periodicamente, provoca superaquecimento acima de 85 °C, gerando travamentos de tela, erros de leitura de pen drive e paradas abruptas com queima de componentes.",
    "technicalDetails": "Fluxo de ar do cooler: 15 a 30 CFM com rolamentos de esferas duplas (Dual Ball Bearing) de longa duração. A temperatura da CPU deve ser mantida abaixo de 60 °C sob regime de produção contínua de 1.000 PPM em temperatura ambiente de até 35 °C.",
    "beginnerExplanation": "É o 'ventiladorzinho' e a pecinha de metal que ficam soprando ar gelado na placa de computador dentro da máquina. Se a máquina ficar cheia de poeira de linha por dentro, esse ventilador entope, a placa ferve de calor e a máquina começa a travar a tela, dar erro de leitura no pen drive ou apagar sozinha no meio do bordado!",
    "howItWorks": [
      "1. A máquina de bordar é ligada e a ventoinha da placa-mãe começa a girar silenciosamente.",
      "2. O processador calcula os pontos e esquenta; o bloco de alumínio absorve esse calor.",
      "3. A ventoinha sopra ar fresco contínuo pelas aletas de metal, jogando o calor para fora do gabinete.",
      "4. Ao longo dos meses, a poeira de linha do ateliê é sugada e forma uma camada de feltro nas aletas.",
      "5. A cada 6 meses, o operador abre o gabinete elétrico com a máquina desligada.",
      "6. Utiliza um pincel seco e ar comprimido suave para aspirar toda a sujeira do dissipador.",
      "7. A placa volta a respirar ar limpo, operando fria e sem nenhum travamento eletrônico."
    ],
    "applications": [
      "Manutenção preventiva semestral de máquinas industriais e domésticas computadorizadas.",
      "Solução definitiva para máquinas que travam a tela no meio de matrizes grandes.",
      "Proteção de circuitos integrados caros contra queima térmica prematura.",
      "Trabalho seguro em regiões de clima quente e ateliês com pouca ventilação."
    ],
    "characteristics": [
      "Manutenção de custo zero que evita queimas de placas que custam milhares de reais.",
      "Prolonga a vida útil dos processadores de bordado por mais de 15 anos.",
      "Garante estabilidade de leitura de arquivos e comunicação USB ininterrupta."
    ],
    "commonErrors": [
      "❌ Bater ar comprimido forte com bico de alta pressão direto na hélice (faz o ventilador girar em excesso de velocidade e queimar o circuito do sensor).",
      "❌ Trabalhar com as tampas e filtros do gabinete elétrico abertos acumulando fiapos.",
      "❌ Ignorar ruídos de zumbido ou estalos vindos da ventoinha da máquina."
    ],
    "troubleshootingTips": [
      "A máquina trava a tela e reinicia sozinha após 2 horas de trabalho: a CPU está superaquecendo; limpe a ventoinha e o dissipador térmico da placa.",
      "Aparece erro de 'System Freeze / Memory Error': verifique se a ventoinha da placa principal não está travada por fiapos de linha.",
      "A ventoinha está fazendo um barulho agudo de atrito: substitua a ventoinha por uma nova de 24V com rolamento de esferas."
    ],
    "dicaArtrelados": "Pelo menos duas vezes por ano: desligue a máquina da tomada, abra a portinha do gabinete onde fica a placa-mãe e passe um pincelzinho macio na ventoinha do processador! Aquela 'lãzinha' de poeira que junta ali esquenta a placa e é a maior causadora de queima de placas eletrônicas no Brasil!",
    "voceSabia": "Os processadores de máquinas de bordar industriais processam até 100 mil comandos matemáticos de aceleração por segundo para calcular o movimento simultâneo dos eixos X, Y e Z!",
    "practicalExercise": "Com a máquina ligada em repouso, aproxime a mão da grade de ventilação lateral do gabinete: sinta a saída de ar morno contínuo confirmando que o sistema de refrigeração da placa está soprando ativamente.",
    "quickSummary": "Unidade de Refrigeração da CPU é o cooler e dissipador térmico que mantém a placa da máquina fria, evitando travamentos de matrizes e queima de circuitos eletrônicos.",
    "recommendedSettings": {
      "speedPPM": "Operação contínua",
      "needleType": "N/A",
      "density": "Temperatura limite de segurança da CPU: < 65 °C"
    },
    "relatedTerms": [
      "Placa-Mãe (Mainboard)",
      "Processador DSP",
      "Gabinete Elétrico",
      "Manutenção Preventiva",
      "Dissipador de Calor (Heat Sink)"
    ],
    "tags": [
      "u-095",
      "refrigeracao",
      "cooler",
      "placa-mae",
      "cpu",
      "manutencao preventiva",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Electronic Mainboard Thermal Management & Fan Maintenance. Nagoya, 2022.",
      "BARUDAN CO. Control Box Cooling Systems and Preventative Cleaning Manual. Ichinomiya, 2021.",
      "ARTRELADOS. Guia de Manutenção Preventiva e Conservação de Máquinas de Bordar. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-096-underlay-para-veludo-e-tecidos-com-pelo-alto",
    "code": "U-096",
    "term": "Underlay para Veludo e Tecidos com Pelo Alto (High-Pile Velvet Underlay & Flattening Grid Protocol)",
    "pronunciation": "an-der-lei pa-ra ve-lu-do e te-si-dos com pe-lo al-to",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do latim 'villosus' (peludo, felpudo) e do inglês 'underlay' (camada de base). Arquitetura de digitalização para controle de volume em tecidos aveludados.",
    "summary": "Estratégia de subponto com grade reticulada de contenção (Tatami Mesh) que abaixa e imobiliza os pelos do veludo antes da passagem dos pontos de acabamento.",
    "definition": "O Underlay para Veludo e Tecidos com Pelo Alto (High-Pile Velvet Underlay & Knockdown Mesh Strategy) é a programação de subpontos estruturais desenvolvida especificamente para neutralizar o volume vertical das fibras cortadas de tecidos aveludados (como veludo alemão, veludo molhado, cotelê e plush). Consiste na combinação de uma malha reticulada bidirecional aberta (*Cross-Grid / Mesh Underlay*) com um contorno de ponto corrido perimétrico (*Edge-Walk*). Essa rede mecânica comprime as cerdas do veludo para baixo, criando uma 'plataforma' selada que impede que os pelos escapem entre os pontos de cetim ou tatami.",
    "technicalDetails": "Densidade da grade de contenção: espaçamento de 1,2 mm a 1,6 mm em ângulos cruzados a 45°/135° com comprimento de ponto de 2,5 mm a 3,0 mm. Recuo de margem de 0,4 mm. Dispensa o uso excessivo de películas plásticas hidrossolúveis pesadas por cima da peça.",
    "beginnerExplanation": "Quando vamos bordar em veludo ou tecidos peludinhos, os pelinhos do tecido querem ficar em pé e passar no meio das linhas do bordado. Esse subponto especial cria uma 'redinha invisível' por baixo que deita todos os pelos do veludo no chão antes do bordado bonito começar, deixando as letras lisinhas e com brilho perfeito!",
    "howItWorks": [
      "1. A máquina inicia bordando uma rede aberta em grade cruzada (sob-ponto tatami duplo).",
      "2. A grade pressiona as cerdas do veludo uniformemente contra a entretela de base.",
      "3. Uma linha de contorno perimétrico sela as margens externas do objeto.",
      "4. A máquina borda a cobertura de acabamento em ponto cheio ou tatami denso.",
      "5. Os pontos de acabamento assentam sobre a rede de contenção sem nenhum pelo do veludo furando a superfície.",
      "6. O bordado no veludo fica com aspecto de alto luxo, limpo, nítido e sem fiapos salientes."
    ],
    "applications": [
      "Bordados de monogramas de luxo em almofadas e cortinas de veludo cotelê.",
      "Brasões em capas de veludo alemão para becas de formatura e paramentos eclesiásticos.",
      "Bordados em casacos de plush, roupões de microfibra peluda e mantas de bebê.",
      "Customização de estojos e caixas forradas de veludo para joias."
    ],
    "characteristics": [
      "Garante cobertura 100% lisa sem pelos salientes entre os pontos.",
      "Evita que o bordado afunde e desapareça no meio da espessura do veludo.",
      "Permite bordar veludo mesmo sem ter plástico hidrossolúvel no momento."
    ],
    "commonErrors": [
      "❌ Usar apenas um ponto corrido central simples (o pelo do veludo sobe pelos lados e engole a letra).",
      "❌ Bordejar veludo sem compensação de repuxo adequada (o veludo se move e cria vãos no contorno).",
      "❌ Pressionar o veludo no bastidor com força excessiva sem proteção (deixando marcas de esmagamento permanentes)."
    ],
    "troubleshootingTips": [
      "Ficaram fiapinhos pretos do veludo espetando no meio das letras brancas: ative o underlay em grade dupla de contenção (Grid Underlay) e coloque uma folha de plástico Solvy fino por cima.",
      "O veludo ficou marcado pelo aro do bastidor: utilize o método flutuante (apenas entretela presa no bastidor e veludo colado com spray adesivo temporário).",
      "O ponto cheio ficou fino demais e afundou: aumente a compensação de repuxo (Pull Comp) para 0,45 mm no software."
    ],
    "dicaArtrelados": "Para bordar veludo com perfeição de alta costura: NUNCA aperte o veludo no bastidor! Prenda apenas a entretela no bastidor, borrife cola spray temporária e cole o veludo macio por cima! Na matriz, coloque um underlay em gradezinha aberta. Fica um bordado de cinema digno da realeza!",
    "voceSabia": "O veludo foi o tecido favorito dos reis da França e dos Papas durante a Renascença; para bordar brasões sobre o veludo de seda papal, as freiras bordadeiras costuravam primeiro uma base inteira de fios de linho para deitar os pelos antes de aplicar as linhas de ouro puro!",
    "practicalExercise": "Pegue um retalho de veludo escuro. Borde uma letra com underlay comum de linha única e outra com a grade de contenção de veludo (Grid Underlay). Compare a nitidez das bordas e a ausência de fiapos na segunda.",
    "quickSummary": "Underlay para Veludo é a malha de sustentação em grade cruzada que deita e imobiliza os pelos do tecido, garantindo bordados nítidos e lisos em peças aveludadas.",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "75/11 Ponta Bola ou Fina",
      "density": "Grade de underlay: 1.4 mm a 45°/135° com Pull Comp de 0.45 mm"
    },
    "relatedTerms": [
      "Knockdown Stitch",
      "Método Flutuante (Floating)",
      "Plástico Hidrossolúvel (Solvy)",
      "Compensação de Repuxo",
      "Veludo Alemão / Cotelê"
    ],
    "tags": [
      "u-096",
      "underlay veludo",
      "knockdown",
      "veludo alemao",
      "plush",
      "pelo alto",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBROIDERY BUSINESS DIGITIZING. High-Pile Fabric Underlays & Knockdown Grid Strategies. Chicago, 2022.",
      "WILCOM EMBROIDERY STUDIO. Velvet and Fleece Underlay Techniques. Sydney, 2021.",
      "ARTRELADOS. Guia Prático de Bordados em Tecidos Desafiadores: Veludo, Toalhas e Malhas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-097-unidade-centralizadora-e-gabarito-de-enquadramento",
    "code": "U-097",
    "term": "Unidade Centralizadora e Gabarito de Enquadramento no Bastidor (Hooping Station & Garment Centering Jig)",
    "pronunciation": "u-ni-da-de sen-tra-li-za-do-ra e ga-ba-ri-to de en-qua-dra-men-to no bas-ti-dor",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Bastidores e Enquadramento",
    "origin": "Do latim 'centralis' (no centro) e do francês 'gabarit' (modelo, molde de referência). Equipamento ergonômico de padronização métrica de posicionamento.",
    "summary": "Estação de trabalho ergonômica com gabaritos milimetrados e suportes magnéticos que garante que todos os bordados de camisas e polos fiquem exatamente na mesma posição.",
    "definition": "A Unidade Centralizadora e Gabarito de Enquadramento no Bastidor (Ergonomic Hooping Station & Alignment Jig System / Tipo HoopMaster) é a plataforma mecânica de bancada projetada para posicionar e fixar vestuários prontos no bastidor com precisão métrica milimétrica e repetibilidade absoluta. Dotada de réguas graduadas gravadas a laser, braços magnéticos de retenção do aro inferior e blocos de apoio para golas e ombros de camisetas e camisas polo, a estação permite ao operador enquadrar dezenas de peças sucessivas exatamente na mesma coordenada cartesiana (peito esquerdo, peito direito, centro costas) em menos de 10 segundos por peça, eliminando réguas manuais, riscos de giz e bordados tortos.",
    "technicalDetails": "Construída em polímero industrial de ultra-alto peso molecular (UHMW) ou alumínio naval. Ajustável para todos os tamanhos de bastidores tubulares (9 cm a 30 cm) com gabaritos universais para tamanhos de roupas do PP ao GG.",
    "beginnerExplanation": "É uma prancha especial de mesa com réguas e suportes onde você encaixa a camisa e o bastidor. Você veste a camisa nessa estação e o bastidor fecha sozinho no lugar certinho do peito esquerdo! Todas as 50 ou 100 camisas daquele cliente saem com o bordado exatamente na mesma altura, sem você ter que medir nada com fita métrica!",
    "howItWorks": [
      "1. O operador encaixa o aro externo do bastidor com a entretela na base magnética da estação.",
      "2. Veste a camisa polo na prancha centralizadora, alinhando a gola e as costuras dos ombros nas marcas guia.",
      "3. Puxa a camisa suavemente para baixo com as mãos, deixando o peito liso e sem dobras.",
      "4. Encaixa o aro interno do bastidor no braço articulado magnético superior.",
      "5. Pressiona o aro para baixo com uma leve pressão das mãos.",
      "6. A peça fica enquadrada perfeitamente reta e no esquadro em menos de 8 segundos.",
      "7. Retira o bastidor pronto para a máquina e repete o processo na próxima camisa com rapidez extrema."
    ],
    "applications": [
      "Padronização de grandes pedidos de camisas polo empresariais no peito esquerdo.",
      "Enquadramento rápido de jalecos médicos, camisetas promocionais e uniformes escolares.",
      "Eliminação de dores nos ombros e punhos causadas por enquadramento manual em mesas comuns.",
      "Treinamento rápido de novos operadores de bordado sem experiência prévia."
    ],
    "characteristics": [
      "Garante 100% de precisão de altura e alinhamento em todas as peças do pedido.",
      "Aumenta a velocidade de enquadramento em até 3 vezes comparado à mesa plana.",
      "Design ergonômico que previne fadiga e lesões ocupacionais."
    ],
    "commonErrors": [
      "❌ Enquadrar camisas 'no olho' em cima de mesas comuns, resultando em bordados mais altos em umas e mais baixos em outras.",
      "❌ Esquecer de ajustar a régua da estação ao mudar o tamanho do lote de camisa P para GG.",
      "❌ Esticar a malha da camisa para os lados ao posicionar na prancha da estação."
    ],
    "troubleshootingTips": [
      "O cliente reclamou que o bordado do peito ficou 3 cm mais baixo nas camisas tamanho G: utilize a tabela de graduação da estação centralizadora para compensar a escala de tamanhos (P, M, G, GG).",
      "O logotipo ficou inclinado em relação aos botões: alinhe o peitilho de botões rigorosamente na linha central gravada no gabarito.",
      "O aro do bastidor fica saindo do lugar: verifique se os ímãs de fixação da base da estação estão limpos e sem resíduos metálicos."
    ],
    "dicaArtrelados": "Se você faz muitos uniformes e camisas polo corporativas: tenha uma estação de enquadramento centralizadora na sua bancada! O tempo que você economiza sem precisar usar fita métrica e o visual profissional de todas as peças exatamente na mesma altura paga a ferramenta no primeiro mês!",
    "voceSabia": "O sistema HoopMaster foi inventado nos Estados Unidos por um veterano da indústria de bordados que sofria de tendinite severa; hoje ele é o padrão mundial utilizado em mais de 90 países!",
    "practicalExercise": "Enquadre 5 camisetas usando apenas fita métrica em uma mesa plana e cronometre o tempo. Depois, enquadre 5 camisetas em uma estação centralizadora com gabarito: compare a velocidade e a precisão do alinhamento.",
    "quickSummary": "Unidade Centralizadora é a estação de bancada com gabaritos que garante enquadramento rápido e padronizado de bordados em uniformes com precisão milimétrica.",
    "recommendedSettings": {
      "speedPPM": "N/A (Estação de Preparação)",
      "needleType": "N/A",
      "density": "Precisão de posicionamento: ±1.0 mm"
    },
    "relatedTerms": [
      "Estação HoopMaster",
      "Enquadramento no Peito Esquerdo",
      "Posicionamento Padrão de Uniformes",
      "Bastidor Tubular",
      "Ergonomia no Ateliê"
    ],
    "tags": [
      "u-097",
      "centralizadora",
      "gabarito",
      "hoopmaster",
      "enquadramento",
      "uniformes",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HOOPMASTER SYSTEMS. Commercial Garment Hooping & Precision Placement Standards. Dallas, 2022.",
      "STITCHES MAGAZINE. Mastering Uniform Placement & Production Efficiency. Atlanta, 2021.",
      "ARTRELADOS. Ergonomia, Produtividade e Padronização Industrial no Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-098-utilizacao-de-agulhas-com-ponta-diamante-para-couro",
    "code": "U-098",
    "term": "Utilização de Agulhas com Ponta Diamante para Couro e Sintéticos Pesados (Diamond Point Leather Needle - DIA / DH)",
    "pronunciation": "u-ti-li-za-são de a-gu-lhas com pon-ta di-a-man-te pa-ra cou-ro e sin-te-ti-cos pe-sa-dos",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Mecânica de Penetração",
    "origin": "Do grego 'adamas' (indomável, diamante) e da sigla técnica industrial 'DIA' (Diamond Point / Ponta Diamante de 4 Faces).",
    "summary": "Agulha especial com quatro gumes cortantes em formato de diamante que perfura couro natural e sintético pesado com orifícios limpos, sem rasgar as bordas do ponto cheio.",
    "definition": "A Utilização de Agulhas com Ponta Diamante para Couro e Sintéticos Pesados (Diamond Point Leather Needles / Sistema DBxK5-DH / DIA Cutting Point) designa o uso de agulhas de bordado industrial cuja ponta possui geometria de corte formada por quatro facetas planas afiadas que se interceptam em formato de losango ou diamante. Ao contrário das agulhas comuns de ponta redonda que empurram as fibras têxteis, a ponta diamante realiza uma microincisão cirúrgica limpa e multidirecional no couro bovino, camurça, recouro e corino espesso. Essa geometria reduz o esforço de penetração em 35%, evita o rasgamento contínuo do couro (*efeito picotado*) ao longo de colunas de cetim e impede o desvio da agulha em solados e cabedais.",
    "technicalDetails": "Classificação técnica internacional: Groz-Beckert DH / Organ DIA. Calibres padrão: 75/11 a 90/14. Em matrizes de bordado para couro, a densidade deve ser aliviada para 0,45 mm a 0,50 mm com comprimento de ponto mínimo de 2,2 mm para manter as pontes de sustentação do couro intactas.",
    "beginnerExplanation": "É uma agulha especial que tem a pontinha afiada como uma lâmina de diamante com 4 lados! Como o couro é duro e não tem fios para afastar, essa agulha faz um cortinho bem limpinho e perfeito. Isso evita que o couro rasgue como um papel picotado quando a máquina faz muitos pontinhos juntos!",
    "howItWorks": [
      "1. A bordadeira instala a agulha com ponta diamante (DBxK5 DH) no cabeçote da máquina.",
      "2. No software de matrizes, a densidade é aliviada e os pontos curtos são filtrados.",
      "3. O couro é fixado no bastidor com entretela recortável resistente de 80g/m².",
      "4. A agulha desce; as 4 facetas de corte abrem um micro-orifício limpo em formato de losango.",
      "5. A linha passa pelo orifício sem atrito lateral e a lançadeira pesca o laço perfeitamente.",
      "6. Ao finalizar a coluna de ponto cheio, o couro permanece íntegro, resistente e sem rasgos ao redor do desenho."
    ],
    "applications": [
      "Bordados em jaquetas de couro natural para motociclistas e pilotos.",
      "Bordados em bancos de couro automotivo e selaria de alta performance.",
      "Customização de bolsas de luxo, calçados de couro e cintos de vaquejada.",
      "Bordados em couro sintético náutico, corino e recouro de alta espessura."
    ],
    "characteristics": [
      "Corta as fibras densas do couro sem deformar a superfície da peça.",
      "Reduz a temperatura de atrito e a carga mecânica no motor principal.",
      "Garante pontos perfeitamente alinhados mesmo em couro espesso e rígido."
    ],
    "commonErrors": [
      "❌ Usar agulha ponta diamante em tecidos de malha ou algodão (a ponta cortante corta os fios e destrói o tecido).",
      "❌ Digitalizar matrizes com densidade comum de camiseta (0,35 mm) em couro (o couro se destaca como um selo de correio).",
      "❌ Usar velocidade máxima (1.000 PPM) em couro rígido sem lubrificação com silicone."
    ],
    "troubleshootingTips": [
      "O couro rasgou e o centro do logotipo caiu como um buraco: a densidade da matriz estava muito pesada; abra a densidade para 0,48 mm e aumente o comprimento mínimo de ponto para 2,5 mm.",
      "A agulha está quebrando ao bater na costura do couro: mude para calibre 90/14 DH com revestimento de titânio (Gebedur) e reduza a velocidade para 650 PPM.",
      "A linha arrebenta por calor no furo do couro: aplique silicone líquido no feltro de passagem da linha do cabeçote."
    ],
    "dicaArtrelados": "Para bordar couro e corino sem medo: use agulha ponta diamante DH e NUNCA use a mesma matriz que você usa para camisas! Abra o programa e aumente o espaçamento dos pontos (densidade mais leve). No couro, menos pontos significam mais beleza e zero risco de rasgar o material!",
    "voceSabia": "As marcas de luxo como Gucci e Hermès utilizam máquinas de bordar industriais programadas com pontos de passo longo e agulhas ponta diamante afiadas a laser para bordar suas famosas iniciais em bolsas de couro que chegam a custar mais de 50 mil reais!",
    "practicalExercise": "Pegue um pedaço de couro ou corino sintético. Tente furar com uma agulha ponta bola comum e depois com uma agulha ponta diamante DH. Veja como a agulha de diamante entra suavemente sem esforço e deixa um furo limpo e uniforme.",
    "quickSummary": "Agulha Ponta Diamante é a agulha cortante com 4 facetas afiadas que perfura couro e materiais sintéticos pesados de forma limpa, evitando rasgos e quebra de linha.",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM",
      "needleType": "75/11 ou 80/12 DBxK5-DH (Ponta Diamante)",
      "density": "0.45 mm a 0.50 mm com ponto mínimo de 2.2 mm"
    },
    "relatedTerms": [
      "Agulha para Couro (Leather Point / DIA)",
      "Bordado em Couro Natural",
      "Compensação de Densidade para Couro",
      "Agulha de Titânio Gebedur",
      "Efeito Selo de Correio (Leather Perforation)"
    ],
    "tags": [
      "u-098",
      "agulha ponta diamante",
      "couro",
      "dia",
      "dh",
      "sinteticos pesados",
      "agulhas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Cutting Points for Leather and Technical Textiles Handbook. Albstadt, 2022.",
      "ORGAN NEEDLE CO. Industrial Leather Embroidery Needles (DIA & DH Series). Tokyo, 2021.",
      "ARTRELADOS. Guia de Bordados em Couro, Couro Sintético e Materiais Pesados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-099-unidade-de-frenagem-magnetica-da-caixa-de-bobina",
    "code": "U-099",
    "term": "Unidade de Frenagem Magnética da Caixa de Bobina (Magnetic Core Bobbin & Anti-Backlash System)",
    "pronunciation": "u-ni-da-de de fre-na-gem mag-ne-ti-ca da cai-xa de bo-bi-na",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Bobinas & Linhas de Fundo",
    "origin": "Do latim 'magneticus' (que atrai ferro) e do inglês 'anti-backlash' (antifolga, antifrenagem por inércia). Inovação que substituiu as antigas molinhas de aço no fundo da caixa de bobina.",
    "summary": "Bobinas industriais com núcleo magnético ou pastilhas magnéticas na caixa de carretilha que freiam a bobina no corte, eliminando nós de inércia no verso do bordado.",
    "definition": "A Unidade de Frenagem Magnética da Caixa de Bobina (Magnetic Core Bobbin Technology & Anti-Backlash System) é o sistema mecânico de controle inercial que utiliza núcleos de polímero magnetizado nas bobinas descartáveis (tipo *Fil-Tec Magna-Glide*) ou pequenos ímãs de neodímio integrados no fundo da caixa de bobina. Quando a máquina realiza o corte automático de linha (*auto-trim*) a 1.000 PPM, a bobina comum tende a continuar girando por inércia (*Backlash*), desenrolando fio em excesso dentro do cesto e causando laçadas frouxas, nós e quebras no recomeço; o campo magnético atua como freio instantâneo sem atrito mecânico abrasivo.",
    "technicalDetails": "Mantém a tensão de desenrolamento da linha da bobina constante do início (100% cheia) até o último metro de fio (0% vazia) na faixa rigorosa de 20 a 24 gf, eliminando a perda de tensão gradual típica de bobinas metálicas ou plásticas comuns com mola de freio desgastada.",
    "beginnerExplanation": "Sabe quando a máquina corta a linha e a carretilha continua rodando sozinha por impulso, deixando um monte de linha frouxa embolada embaixo? As bobinas magnéticas têm um imãzinho no meio que 'gruda' de leve no fundo de metal da caixa de bobina. Quando a máquina para, ela freia na hora! Isso acaba com os nós e deixa o avesso do bordado sempre limpo!",
    "howItWorks": [
      "1. A bordadeira insere a bobina com núcleo magnético na caixa de carretilha de metal.",
      "2. O ímã central ancora suavemente no fundo da caixa de bobina de aço.",
      "3. Durante a costura a 900 PPM, o fio é puxado e a bobina gira de forma suave e controlada.",
      "4. Ao chegar no corte de linha, o trimer corta e a máquina para bruscamente.",
      "5. O ímã freia a bobina instantaneamente em 0,01 segundo, impedindo o giro livre por inércia.",
      "6. A ponta da linha da bobina fica no tamanho exato para a próxima agulhada, sem nós no verso."
    ],
    "applications": [
      "Máquinas industriais e domésticas de alta velocidade com corte automático de linha.",
      "Bordados em tecidos nobres onde o avesso precisa ser tão limpo quanto a frente.",
      "Eliminação de ninhos de pássaro (*birdnesting*) nos primeiros pontos após o corte.",
      "Produção ininterrupta de alta velocidade com tensão de bobina 100% estável."
    ],
    "characteristics": [
      "Tensão uniforme do primeiro ao último metro de linha da bobina.",
      "Elimina a necessidade da mola de freio mecânica tradicional no fundo da caixa.",
      "Mais metros de linha por carretel devido à ausência de flanges plásticas grossas laterais."
    ],
    "commonErrors": [
      "❌ Inserir a bobina magnética com o lado do ímã virado para fora (o ímã deve encostar no fundo de metal da caixa).",
      "❌ Usar caixas de bobina de alumínio não magnético ou com sujeira grossa no fundo.",
      "❌ Puxar a linha com força bruta desregulando a lâmina tensora da caixa."
    ],
    "troubleshootingTips": [
      "Aparecem laçadas emboladas de linha da bobina embaixo no início de cada cor: a bobina está girando em falso por inércia; mude para bobinas magnéticas ou substitua a mola de freio da caixa.",
      "A tensão da bobina varia conforme ela vai esvaziando: bobinas tradicionais perdem peso e soltam tensão; adote bobinas industriais de núcleo magnético Magna-Glide.",
      "A bobina não gira livremente: limpe a poeira de linha acumulada entre o ímã e o fundo da caixa com um pincel macio."
    ],
    "dicaArtrelados": "Se você quer esquecer de uma vez por todas aqueles nós feios que embolam embaixo do bordado logo depois que a máquina corta a linha: use bobinas descartáveis com centro magnético (tipo Magna-Glide)! Elas freiam no segundo exato do corte e o verso do bordado fica lisinho e perfeito!",
    "voceSabia": "As bobinas com núcleo magnético foram criadas pela empresa americana Fil-Tec nos anos 2000 e revolucionaram a indústria mundial, permitindo colocar até 30% a mais de linha no mesmo espaço da carretilha!",
    "practicalExercise": "Coloque uma bobina comum em uma caixa de bobina e puxe a linha rápido com a mão: veja como ela continua girando e soltando linha frouxa. Faça o mesmo com uma bobina magnética: veja como ela para de girar no mesmo instante em que você solta o fio.",
    "quickSummary": "Frenagem Magnética da Bobina é o sistema que utiliza ímãs para frear o carretel no momento exato do corte, eliminando linhas frouxas e nós no verso do bordado.",
    "recommendedSettings": {
      "speedPPM": "850 a 1.000 PPM",
      "needleType": "Compatível com linha",
      "density": "Tensão contínua calibrada no TOWA: 20 a 24 gf"
    },
    "relatedTerms": [
      "Bobina Magnética (Magna-Glide)",
      "Backlash (Giro por Inércia)",
      "Caixa de Bobina",
      "Ninho de Pássaro (Birdnesting)",
      "TOWA Bobbin Gauge"
    ],
    "tags": [
      "u-099",
      "frenagem magnetica",
      "bobina magnetica",
      "magna-glide",
      "anti-backlash",
      "caixa de bobina",
      "bobinas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FIL-TEC INC. Magnetic Core Bobbin Technology & Thread Tension Stability. Clear Spring, 2022.",
      "AMERICAN & EFIRD (A&E). Industrial Bobbin Thread Dynamics and Backlash Prevention. Mount Holly, 2021.",
      "ARTRELADOS. Guia Definitivo da Bobina Perfeita: Linhas de Fundo, Caixas e Tensões. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-100-underlay-tatami-com-densidade-variavel-e-alivio-de-borda",
    "code": "U-100",
    "term": "Underlay Tatami com Densidade Variável e Alívio de Borda (Graduated Density Tatami Underlay)",
    "pronunciation": "an-der-lei ta-ta-mi com den-si-da-de va-ri-a-vel e a-li-vi-o de bor-da",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Digitalização de Matrizes",
    "origin": "Do japonês 'tatami' (esteira) e do latim 'variabilis' (que varia). Algoritmo de suavização de transições estruturais em matrizes artísticas.",
    "summary": "Subponto tatami cuja densidade diminui gradualmente nas extremidades, evitando a formação de degraus rígidos e marcas duras entre o bordado e o tecido limpo.",
    "definition": "O Underlay Tatami com Densidade Variável e Alívio de Borda (Graduated Density Tatami Underlay & Feathered Edge Foundation) é uma técnica de digitalização avançada para grandes áreas artísticas e degradês em que o espaçamento entre as passagens da malha de base aumenta progressivamente do centro em direção às bordas periféricas (ex: de 1,8 mm no núcleo para 4,0 mm nas bordas). Essa transição geométrica suavizada elimina a formação de um 'degrau' ou borda rígida saliente sob o tecido, distribuindo as forças de repuxo de forma cônica e permitindo que preenchimentos com efeitos sombreados (*feathers / blendings*) se integrem ao tecido com maciez táctil e caimento natural.",
    "technicalDetails": "Programado com gradiente de densidade de 1,8 mm (centro) a 4,2 mm (borda) com pontas alternadas e desalinhadas (*Random Length Endings*). Essencial para evitar o enrugamento de tecidos finos sob áreas de preenchimento com efeito de pintura com agulha (*Needle Painting*).",
    "beginnerExplanation": "Quando vamos bordar um desenho artístico com fundo que vai sumindo aos poucos (como fumaça, nuvens ou sombras suaves), a base embaixo não pode terminar de repente com uma linha dura. Esse subponto vai ficando mais abertinho e ralo nas beiradas, deixando a transição da linha para o tecido super macia e sem degraus!",
    "howItWorks": [
      "1. O programador cria o preenchimento artístico com densidade gradual no software.",
      "2. Ativa o recurso de 'Underlay Graduado com Pontas Desfiadas'.",
      "3. A máquina borda o centro da base com grade firme para dar sustentação.",
      "4. Conforme se aproxima das bordas, a máquina afasta as linhas de base e varia o tamanho dos pontos.",
      "5. A cobertura artística em degradê é bordada por cima da base graduada.",
      "6. A transição entre o bordado e o tecido limpo fica completamente suave, macia e sem marcas duras."
    ],
    "applications": [
      "Bordados artísticos de retratos, paisagens e pinturas com agulha (Needle Painting).",
      "Bordados com transição de degradê em vestidos de festa e moda conceitual.",
      "Grandes brasões em tecidos finos de seda e linho que não suportam bordas rígidas.",
      "Sombras suaves sob logotipos corporativos tridimensionais."
    ],
    "characteristics": [
      "Elimina a sensação de 'papelão rígido' nas bordas de grandes desenhos.",
      "Garante caimento fluido do tecido sem rugas de transição.",
      "Proporciona acabamento de altíssimo nível artístico e visual sofisticado."
    ],
    "commonErrors": [
      "❌ Usar underlay reto e rígido sob preenchimentos com pontas desfiadas (a base fica aparecendo para fora).",
      "❌ Deixar a base muito densa nas extremidades finas de degradês.",
      "❌ Não usar o recurso de pontas aleatórias para quebrar a linha de parada dos pontos."
    ],
    "troubleshootingTips": [
      "Ficou uma linha dura visível onde a base do bordado terminou: ative o 'Alívio de Borda Gradual / Feathered Underlay' no programa de digitalização.",
      "O degradê de cores ficou manchado e repuxado nas pontas: aumente o espaçamento do underlay nas margens para 3,5 mm.",
      "O tecido ao redor do bordado fez pregas: reduza a densidade total do centro e use entretela recortável macia de 50g/m²."
    ],
    "dicaArtrelados": "Em desenhos artísticos com sombras, degradês ou animais: suavize o subponto nas pontas! Deixar a base mais rala nas beiradas faz o bordado se misturar com o tecido como uma pintura perfeita, sem aquela borda dura que parece uma placa colada!",
    "voceSabia": "Esta técnica foi desenvolvida por mestres digitalizadores suíços para bordar os famosos xales de lã alpina de Saint Gallen, onde o bordado precisava se fundir com a lã pura sem criar nenhuma rigidez no tecido!",
    "practicalExercise": "Digitalize um quadrado com degradê que vai de 100% de cor para 0% de transparência. Aplique o underlay tatami de densidade variável e borde em um tecido fino. Passe a mão e sinta a transição macia sem nenhum degrau.",
    "quickSummary": "Underlay de Densidade Variável é a base que se torna mais aberta nas extremidades, garantindo transições suaves e sem rigidez em degradês e desenhos artísticos.",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "70/10 ou 75/11 Ponta Fina",
      "density": "Gradiente de base: 1.8 mm (centro) a 4.0 mm (bordas)"
    },
    "relatedTerms": [
      "Pintura com Agulha (Needle Painting)",
      "Degradê no Bordado (Color Blending)",
      "Bordas Desfiadas (Feathered Edges)",
      "Transição de Densidade",
      "Toque Têxtil (Fabric Hand)"
    ],
    "tags": [
      "u-100",
      "underlay variavel",
      "densidade graduada",
      "degrade",
      "needle painting",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO. Artistic Shading & Graduated Underlay Engineering. Sydney, 2022.",
      "BERNINA ARTISTIC EMBROIDERY. Advanced Needle Painting and Gradient Foundations. Steckborn, 2021.",
      "ARTRELADOS. A Arte do Hiper-Realismo e Pintura com Agulha no Bordado Digital. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-101-utilizacao-de-entretela-soluvel-em-agua-quente",
    "code": "U-101",
    "term": "Utilização de Entretela Solúvel em Água Quente (Hot-Water Soluble Non-Woven PVA Stabilizer)",
    "pronunciation": "u-ti-li-za-são de en-tre-te-la so-lu-vel em a-gua quen-te",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Estabilizadores & Entretelas",
    "origin": "Do latim 'solubilis' (que se dissolve) e da química 'Álcool Polivinílico' (PVA termossolúvel). Substrato de suporte temporário para rendas puras sem tecido.",
    "summary": "Entretela não-tecida de PVA que suporta milhares de pontos sem rasgar e se dissolve 100% apenas em água morna/quente (40-60 °C), ideal para rendas Richelieu e Guipir.",
    "definition": "A Utilização de Entretela Solúvel em Água Quente (Hot-Water Soluble Non-Woven PVA Stabilizer / Hydro-Soluble Fabric Backing) refere-se ao uso de entretelas compostas por fibras não-tecidas de Álcool Polivinílico (PVA) termo-hidrossolúvel com gramatura entre 40g e 80g/m². Ao contrário dos filmes plásticos finos de água fria (usados apenas como cobertura de toalhas), essa entretela tem estrutura de tecido fibroso firme que resiste à perfuração de alta densidade sem perfurar nem rasgar. Ao ser mergulhada em água aquecida a 40 °C - 60 °C após o bordado, a entretela se dissolve completamente sem deixar resíduos químicos nas linhas, sendo a base fundamental para a produção de rendas soltas (*Free-Standing Lace - FSL*), brasões vazados e bordados *Richelieu*.",
    "technicalDetails": "Gramatura padrão: 60g a 80g/m² (ou uso de 2 camadas de 40g). Dissolução completa em 2 a 4 minutos em água a 50 °C sob agitação suave. pH neutro, biodegradável e não tóxico para as mãos da bordadeira.",
    "beginnerExplanation": "É uma entretela mágica que parece um pano branco bem firme, mas que derrete e some completamente quando você coloca na água morna! Como ela é forte, você pode bordar rendas e brincos inteiros direto nela sem nenhum tecido por baixo. Depois você dá um banho de água morna e fica só a renda de linha pura!",
    "howItWorks": [
      "1. A bordadeira prende uma ou duas camadas da entretela solúvel firme no bastidor (sem nenhum tecido).",
      "2. A máquina borda a matriz de renda Guipir ou Richelieu com linhas de poliéster ou algodão.",
      "3. Os pontos se entrelaçam criando uma estrutura autoportante sustentada pela entretela.",
      "4. Retira-se a peça do bastidor e recorta-se o excesso de entretela com uma tesoura comum.",
      "5. Mergulha-se a renda em uma bacia com água morna (cerca de 50 °C) por 3 minutos.",
      "6. A entretela de PVA derrete 100% e a água fica leitosa; enxágua-se em água corrente.",
      "7. A renda é colocada sobre uma toalha plana para secar, ficando firme, linda e perfeita."
    ],
    "applications": [
      "Confecção de rendas soltas nobres (Free-Standing Lace - FSL), brincos e colares têxteis.",
      "Bordados vazados tradicionais tipo Richelieu em toalhas de linho e batas.",
      "Aplicação em tecidos ultrafinos transparentes (organza de seda, tule francês e voil).",
      "Barrados de renda Guipir para panos de prato e vestidos de noiva."
    ],
    "characteristics": [
      "Suporta até 30 mil pontos sem rasgar ou picotar no bastidor.",
      "Dissolução 100% limpa sem deixar fiapos brancos nas bordas da renda.",
      "Não endurece os fios após a secagem completa."
    ],
    "commonErrors": [
      "❌ Tentar dissolver a entretela de água quente em água gelada da torneira (ela vira uma pasta grudenta que não sai).",
      "❌ Usar filme plástico fino de toalha (Solvy) para fazer renda solta (o plástico rasga e a renda se desfaz).",
      "❌ Torcer a renda molhada com as mãos com força (deformando o desenho)."
    ],
    "troubleshootingTips": [
      "A entretela virou uma goma grudenta e não quer sair da renda: aqueça a água para 50 °C a 60 °C (temperatura de banho quente) e mergulhe a peça novamente por 3 minutos.",
      "A renda se desfez e soltou fios após a lavagem: a matriz não tinha pontos de amarração e grade de suporte suficientes para ser uma renda solta (FSL); use matrizes próprias para FSL.",
      "A entretela rasgou durante o bordado no bastidor: use duas camadas de entretela de 40g ou mude para gramatura pesada de 80g/m²."
    ],
    "dicaArtrelados": "Para fazer rendas e brincos de bordado durinhos e perfeitos: ao tirar da água morna, não enxágue 100% da goma! Deixe um pouquinho da entretela dissolvida na água e seque a renda esticadinha em cima de uma folha de plástico ou papel manteiga. Quando secar, a renda fica armada e engomada como uma joia!",
    "voceSabia": "O Álcool Polivinílico (PVA) utilizado nessas entretelas é o mesmo material biocompatível utilizado pela indústria farmacêutica para fabricar as cápsulas gelatinosas solúveis de remédios que se dissolvem no estômago!",
    "practicalExercise": "Borde uma flor em matriz de renda solta (FSL) usando duas camadas de entretela solúvel em água quente. Mergulhe em água morna a 50 °C e observe a mágica da entretela desaparecendo em minutos, deixando apenas a flor de linha.",
    "quickSummary": "Entretela Solúvel em Água Quente é o estabilizador fibroso de PVA que suporta milhares de pontos e se dissolve em água morna, ideal para rendas soltas e Richelieu.",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "75/11 Ponta Fina (Sharp)",
      "density": "Dissolução em água: 45 °C a 60 °C por 3 min"
    },
    "relatedTerms": [
      "Free-Standing Lace (FSL)",
      "Bordado Richelieu",
      "Renda Guipir",
      "Álcool Polivinílico (PVA)",
      "Plástico Hidrossolúvel de Água Fria"
    ],
    "tags": [
      "u-101",
      "entretela soluvel",
      "agua quente",
      "pva",
      "rendas",
      "fsl",
      "richelieu",
      "estabilizadores",
      "artrelados"
    ],
    "bibliographicReferences": [
      "VILENE NONWOVENS. Water-Soluble Stabilizers & Technical Dissolution Manual. Weinheim, 2022.",
      "MADEIRA GARN. Avalon Plus & Water Soluble Backing Applications. Freiburg, 2021.",
      "ARTRELADOS. O Universo das Rendas Soltas (FSL), Richelieu e Jóias Têxteis Bordadas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-102-uniformizacao-de-lotes-e-controle-de-tonalidade",
    "code": "U-102",
    "term": "Uniformização de Lotes e Controle de Tonalidade de Linhas (Dye Lot Matching & Thread Color Consistency)",
    "pronunciation": "u-ni-for-mi-za-são de lo-tes e con-tro-le de to-na-li-da-de de li-nhas",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Linhas & Insumos",
    "origin": "Do latim 'uniformis' (sempre igual) e do inglês 'dye lot' (lote de tingimento). Princípio industrial de controle colorimétrico e espectrofotometria têxtil.",
    "summary": "Gestão dos números de lote de tingimento (Dye Lot) dos cones de linha para evitar variações perceptíveis de cor entre peças do mesmo pedido de uniformes corporativos.",
    "definition": "A Uniformização de Lotes e Controle de Tonalidade de Linhas (Dye Lot Matching & Colorimetric Consistency Protocol) é o procedimento de gestão de insumos no qual a bordadeira ou gestor de produção controla os códigos numéricos de lote de tingimento (*Dye Lot Number*) gravados na etiqueta inferior de cada cone de linha de poliéster ou viscose. Embora dois cones possuam o mesmo código de cor universal (ex: Azul Marinho 1134), variações microscópicas de temperatura, tempo de caldeira e química dos corantes entre bateladas industriais diferentes geram variações sutis de tom (delta E > 1.0). Misturar cones de lotes diferentes no mesmo pedido causa divergências visíveis sob a luz natural.",
    "technicalDetails": "Controle colorimétrico pela norma CIE Lab com tolerância delta E (ΔE) inferior a 0,8 para vestuário corporativo. O ateliê deve reservar cones do mesmo lote para atender à quantidade total de peças daquela encomenda antes de iniciar a produção.",
    "beginnerExplanation": "Quando a fábrica faz as linhas coloridas, cada caldeirão de tinta sai com uma corzinha minimamente diferente do outro, mesmo sendo a mesma cor na etiqueta! Por isso, se você vai bordar 50 camisas azuis para a mesma empresa, todos os cones precisam ser do mesmo lote (mesmo caldeirão). Se misturar lotes, algumas camisas vão ficar com azul mais escuro e outras com azul mais claro!",
    "howItWorks": [
      "1. A bordadeira recebe um pedido de 100 camisas polo corporativas com logotipo azul marinho.",
      "2. Calcula o consumo de linha estimado para o lote completo (ex: 3 cones de 4.000 metros).",
      "3. Ao comprar os cones, confere a etiqueta na base do cone: verifica a cor (ex: 1142) e o número do lote (ex: Lote 8942).",
      "4. Garante que os 3 cones pertençam rigorosamente ao mesmo número de lote.",
      "5. Abastece a máquina e borda todas as camisas do cliente com os cones daquele lote.",
      "6. Todas as 100 peças saem com a mesmíssima tonalidade de cor exata sob qualquer luz.",
      "7. O cliente recebe o pedido padronizado e aprova o controle de qualidade com louvor."
    ],
    "applications": [
      "Produção seriada de uniformes corporativos de grandes bancos, redes de lojas e companhias aéreas.",
      "Bordados em vestidos de noiva e vestidos de madrinhas que precisam de tom idêntico.",
      "Grandes pedidos de camisetas promocionais de eventos e congressos.",
      "Reposição anual de uniformes mantendo a mesma cor dos anos anteriores."
    ],
    "characteristics": [
      "Evita devoluções e rejeições de pedidos por clientes corporativos exigentes.",
      "Garante harmonia visual perfeita em equipes que trabalham lado a lado.",
      "Demonstra profissionalismo e rigor industrial do ateliê de bordado."
    ],
    "commonErrors": [
      "❌ Trocar o cone no meio do bordado de uma peça grande por um cone de outro lote (a metade do desenho fica com tom diferente).",
      "❌ Não guardar o número do lote do cliente para futuras reposições do mesmo uniforme.",
      "❌ Comprar cones avulsos de lotes sortidos para fazer pedidos corporativos grandes."
    ],
    "troubleshootingTips": [
      "O cliente reclamou que 10 camisas ficaram com o azul diferente das outras: foram usados cones de lotes de tingimento diferentes; passe a controlar o Dye Lot antes de iniciar a produção.",
      "A linha acabou no meio de uma jaqueta e não há cone do mesmo lote: troque o cone da cor inteira e reborde a peça, nunca troque o cone no meio de um preenchimento contínuo.",
      "Dificuldade em achar cones do mesmo lote: calcule a metragem total antecipadamente e compre uma caixa lacrada da distribuidora."
    ],
    "dicaArtrelados": "Vai bordar muitas peças para o mesmo cliente? Olhe embaixo do cone de linha: além do número da cor, tem um número de LOTE (Dye Lot)! Use sempre cones do mesmo lote no mesmo pedido! Esse cuidado simples de conferir a etiqueta evita dores de cabeça e garante clientes fiéis para sempre!",
    "voceSabia": "Na indústria automotiva de luxo (como Ferrari e Rolls-Royce), os rolos de couro e os cones de linha para os bordados dos bancos são comprados em lotes únicos lacrados e numerados para que o carro tenha 100% da mesma tonalidade por décadas!",
    "practicalExercise": "Pegue dois cones da mesma cor de marcas ou lotes diferentes. Borde um quadrado com cada um lado a lado em um tecido branco. Saia ao ar livre sob a luz do sol e veja como as pequenas variações de tom aparecem claramente sob a luz natural.",
    "quickSummary": "Controle de Lotes de Tingimento é a prática de usar cones do mesmo lote em todo o pedido, garantindo que todas as peças tenham rigorosamente a mesma tonalidade de cor.",
    "recommendedSettings": {
      "speedPPM": "Compatível com linha",
      "needleType": "75/11",
      "density": "Controle de delta E (ΔE): < 0.8"
    },
    "relatedTerms": [
      "Lote de Tingimento (Dye Lot)",
      "Colorimetria e Delta E",
      "Poliéster Trilobal",
      "Controle de Qualidade Corporativo",
      "Consumo de Linha por Matriz"
    ],
    "tags": [
      "u-102",
      "lote de tingimento",
      "dye lot",
      "tonalidade",
      "cores de linha",
      "controle de qualidade",
      "uniformes corporativos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Color Consistency & Industrial Dye Lot Management. Freiburg, 2022.",
      "SOCIETY OF DYERS AND COLOURISTS. Textile Coloration and Color Matching Standards. Bradford, 2021.",
      "ARTRELADOS. Gestão Profissional de Insumos e Controle de Qualidade no Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "u-uniformes-profissionais-e-escolares-bordado-seriado",
    "code": "U-103",
    "letter": "U",
    "term": "Uniformes Profissionais e Escolares (Bordado em Série de Crachás, Brasões & Marcas Corporativas)",
    "pronunciation": "u-ni-for-mes pro-fi-ssi-o-nais e es-co-la-res (uniˈfɔʁmis pɾofisiuˈnajz)",
    "level": "Intermediário 🟡",
    "category": "Processos e Métodos",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do latim 'uniformis' (que tem uma só forma, igual para todos, de 'unus', um, e 'forma', aspecto exterior), institucionalizado na era industrial para identificar operários, estudantes, médicos e corporações militares com padronização visual rigorosa.",
    "summary": "Manual de produção em larga escala de logotipos, crachás e brasões escolares com foco em rapidez de máquina, letras pequenas nítidas e máxima resistência a lavagens industriais.",
    "definition": "O bordado em Uniformes Profissionais e Escolares (Bordado Corporativo em Série / Corporate Workwear & School Uniform Embroidery / Produção Padronizada de Emblemas) é a espinha dorsal econômica da indústria do bordado computadorizado. Abrange a produção seriada e padronizada de identificações funcionais (nomes de funcionários, cargos, brasões de colégios e logomarcas empresariais) sobre tecidos de alto desgaste mecânico (brim pesado, gabardine, oxford, microfibra e malha PV/poliviscose). Exige matrizes otimizadas para reduzir tempo de máquina, calibração para letras pequenas de 4 a 6 mm sem quebra de fio e seleção de linhas 100% poliéster indelevelmente resistentes a cloro e alvejantes químicos.",
    "technicalDetails": "Na confecção seriada de uniformes corporativos, uma economia de 1 minuto por peça representa horas de ganho em lotes de centenas de camisas. Diretrizes de engenharia: 1) Otimização de Comandos de Corte e Troca de Cor: organizar os objetos da matriz para que todas as partes da mesma cor sejam bordadas em sequência contínua com pontes de ligação embutidas (Travel Runs) ocultas sob preenchimentos posteriores, reduzindo cortes automáticos para menos de 4 por logotipo; 2) Tipografia para Letras Pequenas: fontes especiais de 4 mm a 7 mm com densidade aliviada (0,45 mm) e ponto satim com underlay Center Walk simples; 3) Resistência Química: linhas de poliéster com alta solidez à lavagem industrial a 95°C e fricção com cloro; e 4) Entretela Rasgável Industrial de 70 g/m² para limpeza ultrarrápida do avesso no pós-bordado.",
    "beginnerExplanation": "É a encomenda que todo ateliê adora pegar: 50 camisas de uma oficina, 100 jalecos de uma clínica ou 200 camisetas de uma escola! Em vez de bordar uma peça de cada vez devagarzinho, você aprende a deixar a matriz super esperta no computador para não ficar cortando linha a toda hora e bordar bem rapidinho. As letrinhas do nome e do telefone precisam ficar bem legíveis para o cliente conseguir ler sem esforço, e a linha precisa aguentar lavagem forte na máquina sem desbotar nunca!",
    "howItWorks": [
      "1. A matriz do uniforme é revisada no software: eliminam-se saltos de linha desnecessários e ajustam-se as fontes pequenas para satim limpo.",
      "2. Cria-se um gabarito de posicionamento em papelão ou acetato para marcar o peito de todas as camisas do lote exatamente na mesma coordenada.",
      "3. Corta-se a entretela em rolo em pedaços padronizados com guilhotina ou cortador rotativo para ganhar tempo.",
      "4. Encaixa-se a primeira leva de peças nos bastidores em cadeia (enquanto um bastidor borda na máquina, a bordadeira monta o próximo na bancada).",
      "5. A máquina opera em cadência de alta produtividade (750 a 850 PPM) com sensores de linha calibrados.",
      "6. Ao terminar o ciclo, retira-se o bastidor, rasga-se a entretela em um só puxão lateral e passa-se o desmanchador de corte rápido.",
      "7. As peças são dobradas, ensacadas em pacotes de 10 unidades com controle de qualidade e despachadas para o cliente corporativo."
    ],
    "applications": [
      "Jalecos e aventais para médicos, enfermeiros, dentistas e laboratórios com nomes e especialidades.",
      "Uniformes pesados de brim para metalúrgicas, construtoras civis e oficinas mecânicas.",
      "Camisetas escolares para colégios e universidades com brasões detalhados.",
      "Dolmãs de chefs de cozinha, uniformes de garçons, restaurantes e hotelaria de alto padrão."
    ],
    "characteristics": [
      "Altíssima repetibilidade: a peça número 1 e a peça número 200 saem idênticas.",
      "Velocidade otimizada com mínimo de paradas operacionais e quebras de linha.",
      "Legibilidade cirúrgica em textos de identificação de nomes e telefones de contato."
    ],
    "commonErrors": [
      "❌ Deixar muitos cortes de fio em matrizes de milhares de pontos: a máquina perde 5 segundos a cada corte, desperdiçando horas de trabalho no fim do dia.",
      "❌ Programar letras minúsculas de 4 mm com ponto tatami ou contorno grosso, embolando a linha e deixando o texto ilegível.",
      "❌ Usar linha de algodão ou viscose frágil em uniformes operacionais, fazendo o bordado desbotar com cândida e alvejante."
    ],
    "troubleshootingTips": [
      "As letrinhas pequenas de telefone ficaram parecendo borrões sem abertura nas letras 'e' e 'o': aumente o tamanho da letra no software para pelo menos 5,5 mm, reduza a densidade do satim e use agulha fina 70/10 com linha de calibre 60 própria para textos finos.",
      "O brim grosso rasgou a entretela antes do fim do bordado: use entretela resinada de 80 g/m² em vez de entretela rasgável comum fina.",
      "A máquina está quebrando linha toda hora na produção em série: verifique se não há fiapos acumulados na caixa de bobina e passe um pingo de óleo na lançadeira a cada 4 horas de produção contínua."
    ],
    "dicaArtrelados": "O método da linha de montagem no ateliê: nunca pare a máquina para colocar o tecido no bastidor! Tenha sempre o dobro de bastidores do número de cabeças da sua máquina. Enquanto o bastidor A está bordando na máquina, você monta o bastidor B na bancada. Quando a máquina apitar o fim, você só troca um bastidor pelo outro em 5 segundos e aperta o start. Sua produtividade dobra no mesmo dia!",
    "voceSabia": "O primeiro registro histórico de uniformes profissionais identificados com bordados corporativos remonta às guildas de artesãos medievais de Londres no século XIV, onde alfaiates e tecelões eram obrigados por estatuto a bordar os brasões de suas corporações de ofício nas túnicas de trabalho!",
    "practicalExercise": "Pegue uma matriz com um logo corporativo e um nome em texto pequeno. Analise a sequência de bordado no software: tente juntar as cores iguais e eliminar pelo menos 3 cortes de linha usando caminhos de conexão invisíveis. Borde e cronometre o tempo: sinta a satisfação de economizar minutos preciosos na sua linha de produção!",
    "quickSummary": "Protocolo de digitalização otimizada e produção seriada em alta velocidade de logomarcas e crachás para uniformes com máxima durabilidade a lavagens.",
    "relatedTerms": [
      "Bordado Corporativo",
      "Letras Pequenas (Microtextos)",
      "Poliéster Trilobal",
      "Tempo de Máquina",
      "Gabarito de Produção",
      "Travel Runs (Trajetos de Ligação)",
      "Brim e Gabardine"
    ],
    "tags": [
      "u-103",
      "uniformes",
      "uniformesprofissionais",
      "uniformesescolares",
      "corporativo",
      "producaoemserie",
      "letraspequenas",
      "artrelados"
    ]
  }
];

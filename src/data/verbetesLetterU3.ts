import { Verbete } from "../types";

export const VERBETES_LETTER_U3: Verbete[] = [
  {
    id: "underlay-para-ponto-cheio-satin-underlay-strategies",
    code: "U-013",
    letter: "U",
    term: "Underlay para Ponto Cheio (Satin Underlay Strategies)",
    pronunciation: "ân-der-lei pa-ra pon-to chei-o (sé-tin ân-der-lei es-tra-té-djis)",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Diretrizes clássicas da digitalização têxtil desenvolvidas pela Wilcom e Tajima para estruturar colunas de ponto cheio conforme sua largura e tração mecânica.",
    summary: "Regras e estratégias de seleção do tipo ideal de subponto (Center Walk, Edge Walk ou Zigzag) conforme a largura milimétrica da coluna de ponto cheio.",
    definition: "O Underlay para Ponto Cheio (Satin Underlay Strategies / Estruturação de Coluna de Cetim) é o protocolo técnico de engenharia de matrizes que estabelece a escolha obrigatória do tipo e parâmetros de subponto com base direta na largura (espessura) em milímetros da coluna de ponto cheio. Como a força de repuxo transversal varia exponencialmente com a largura do ponto, cada faixa milimétrica exige uma sustentação física específica para evitar deformações, afundamento e enrugamento do tecido.",
    technicalDetails: "A matriz técnica internacional divide o ponto cheio em 4 faixas milimétricas fundamentais: 1) Colunas ultra-finas (0,8 mm a 1,5 mm): uso exclusivo de Center Walk com pontos curtos (1,5 mm a 1,8 mm); 2) Colunas estreitas (1,5 mm a 2,5 mm): Center Walk ou Edge Walk estreito com recuo de 0,3 mm; 3) Colunas médias (2,5 mm a 5,0 mm): Edge Walk combinado com Zigzag aberto (espaçamento 2,8 mm a 3,5 mm); 4) Colunas largas (5,0 mm a 9,0 mm): Edge Walk com Double Zigzag (malha em diamante) ou aplicação de divisões automáticas de ponto cheio (Auto-Split).",
    beginnerExplanation: "É a tabelinha prática de qual costura de sustentação usar para cada grossura de letra! Para letrinhas bem fininhas, a gente usa só uma costurinha no meio; para letras médias, usa a costurinha nas bordas com zigue-zague; e para letras bem grandonas, usa zigue-zague duplo para não deixar o bordado frouxo nem afundado.",
    howItWorks: [
      "1. O programador mede a largura da coluna no software usando a ferramenta de régua milimétrica.",
      "2. Se a largura for até 1.5 mm: seleciona apenas 'Center Walk'.",
      "3. Se a largura for entre 1.5 mm e 3.0 mm: seleciona 'Edge Walk' com recuo de 0.35 mm.",
      "4. Se a largura for entre 3.0 mm e 6.0 mm: seleciona 'Edge Walk + Zigzag' para dar volume e sustentação.",
      "5. Se a largura for superior a 6.0 mm: seleciona 'Double Zigzag' ou divide a coluna com Auto-Split.",
      "6. A máquina costura a base ideal para aquela largura exata, garantindo estabilidade e brilho uniforme."
    ],
    applications: [
      "Digitalização precisa de alfabetos, fontes tipográficas e monogramas.",
      "Contornos de logomarcas empresariais com espessuras de linha variáveis.",
      "Bordados heráldicos, florais, folhas e arabescos com variação de largura de coluna.",
      "Otimização de tempo e contagem de pontos em matrizes comerciais."
    ],
    characteristics: [
      "Evita quebras de agulha por acúmulo excessivo de pontos em traços finos.",
      "Garante bordas nítidas e centro encorpado em traços grossos.",
      "Padroniza a qualidade do bordado em qualquer software de criação."
    ],
    commonErrors: [
      "❌ Colocar Zigzag ou Edge Walk em letrinhas de 1 mm de largura, fazendo os pontos de base vazarem para fora da letra.",
      "❌ Usar apenas Center Walk em uma letra de 6 mm de largura, fazendo os pontos de acabamento afundarem e ficarem soltos no centro.",
      "❌ Não aplicar subponto em colunas de 3 mm em tecidos de malha, fazendo o tecido enrugar e virar uma concha."
    ],
    troubleshootingTips: [
      "Bordas de letras largas parecendo murchas ou com ondas: troque o Center Walk por Edge Walk + Zigzag.",
      "Letras minúsculas ficando grossas e com nós embaixo: mude para Center Walk simples e reduza o comprimento de ponto para 1.5 mm.",
      "Pontos cheios com mais de 7 mm ficando frouxos: ative a função Auto-Split (Divisão Automática) no software."
    ],
    dicaArtrelados: "Guarde a regrinha prática da Artrelados: Letra fininha = costura no meio (Center Walk); Letra média = trilho nas bordas (Edge Walk); Letra grandona = trilho + zigue-zague fofo (Edge + Zigzag)! Com essa regra suas letras sempre serão nota 10!",
    voceSabia: "A regra de ouro de proporção de largura para ponto cheio foi estabelecida nos anos 1970 na Suíça pelos engenheiros da Bernina, baseada nos limites de tensão mecânica dos fios de raiom e poliéster.",
    practicalExercise: "Digitalize 3 letras com larguras de coluna diferentes: uma com 1.2 mm, outra com 3.5 mm e outra com 6.0 mm. Aplique os subpontos correspondentes da regra e observe no simulador como a base se adapta com perfeição a cada uma.",
    quickSummary: "Diretrizes de seleção de subpontos conforme a largura milimétrica da coluna de ponto cheio, assegurando sustentação precisa e bordas perfeitas.",
    relatedTerms: ["Ponto Cheio (Satin)", "Center Walk", "Edge Walk", "Zigzag Underlay", "Auto-Split", "Compensação de Encolhimento"],
    tags: ["satin underlay", "ponto cheio", "subponto", "estrategias", "programacao", "wilcom"]
  },
  {
    id: "underlay-para-ponto-tatami-fill-underlay-strategies",
    code: "U-014",
    letter: "U",
    term: "Underlay para Ponto Tatami (Fill Underlay Strategies)",
    pronunciation: "ân-der-lei pa-ra pon-to ta-ta-mi (fil ân-der-lei es-tra-té-djis)",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Engenharia de preenchimento vetorial desenvolvida para contrabalançar as forças isotrópicas de contração em áreas preenchidas extensas.",
    summary: "Estratégias de programação de grades e linhas direcionais de subponto sob áreas de preenchimento tatami para evitar rugas, deformações e deslocamento de contornos.",
    definition: "O Underlay para Ponto Tatami (Fill Underlay Strategies / Estruturação de Preenchimento Tatami) compreende o conjunto de regras técnicas de direcionamento angular, densidade e gradeamento de subpontos sob objetos preenchidos com ponto tatami (tatami fill/complex fill). O principal desafio físico do tatami é a contração cumulativa: milhares de penetrações puxam o tecido na direção do ângulo de costura, empurrando o tecido excedente para a direção perpendicular, o que desalinha contornos e deforma formas circulares em ovais.",
    technicalDetails: "As regras de ouro para estruturação de Tatami incluem: 1) Ângulo do Underlay: o subponto linear simples deve ser costurado com ângulo rigorosamente perpendicular (90°) em relação ao ângulo do tatami de cobertura; 2) Grade Dupla (Lattice / Double Grid): para áreas maiores que 4x4 cm ou tecidos elásticos, utilizam-se duas passadas cruzadas a 45° e 135° com espaçamento de 3,0 mm a 4,5 mm; 3) Recuo perimetral (Inset): manter recuo de 0,4 mm a 0,6 mm em relação à borda do objeto para que o subponto fique coberto sem afetar a compensação de repuxo.",
    beginnerExplanation: "É o jeito certo de fazer a 'grade de sustentação' debaixo de desenhos grandes preenchidos com ponto tatami (como fundos de brasões e bandeiras). A costura de baixo precisa ser feita em direção cruzada à costura de cima para travar o tecido, garantindo que o desenho fique retinho e que o contorno preto se encaixe perfeitamente no final.",
    howItWorks: [
      "1. O programador define o objeto de tatami e seu ângulo de cobertura final (ex: 0° / horizontal).",
      "2. No painel de underlay, define o ângulo do subponto em 90° (vertical) ou ativa a grade dupla cruzada (Lattice Underlay a 45° e 135°).",
      "3. O software gera a malha ortogonal aberta com recuo de margem de 0.5 mm.",
      "4. A máquina costura a grade de ancoragem, grampeando o tecido à entretela.",
      "5. Em seguida, a máquina executa o preenchimento tatami de cobertura sobre a grade.",
      "6. A tração do tecido é bloqueada pela grade cruzada, mantendo as dimensões milimétricas perfeitas.",
      "7. Os contornos periféricos em ponto cheio encaixam com precisão milimétrica sem folgas ou fendas."
    ],
    applications: [
      "Bordados corporativos de grande porte em peitos e costas de jaquetas.",
      "Brasões militares, distintivos de polícia e emblemas de clubes esportivos.",
      "Fundos preenchidos de patches, bandeiras e escudos heráldicos.",
      "Grandes áreas de tatami sobre tecidos instáveis como viscose, cetim e malhas."
    ],
    characteristics: [
      "Elimina 100% dos problemas de contornos que saem 'fora do lugar' (out-of-register).",
      "Mantém o formato original de círculos e formas geométricas sem achatamento.",
      "Permite bordar grandes áreas com menos repuxamento no bastidor."
    ],
    commonErrors: [
      "❌ Programar o subponto no mesmo ângulo do tatami de acabamento, fazendo as linhas de cima caírem nos vãos de baixo sem dar sustentação.",
      "❌ Usar apenas subponto de contorno (Edge Walk) em um preenchimento gigante de 10 cm, permitindo que o centro do desenho enrugue.",
      "❌ Usar grade com espaçamento muito apertado (menos de 2 mm), tornando o bordado duro como uma armadura de metal."
    ],
    troubleshootingTips: [
      "Contorno preto saindo torto ou com fenda branca ao lado do tatami: ative o Tatami Grid Underlay (Grade Dupla) com ângulos cruzados.",
      "Centro do desenho formando ondas ou 'bolhas' de tecido: aumente a área da grade do underlay e borde do centro para fora.",
      "Bordado muito pesado no peito: abra o espaçamento da grade do underlay de 2.5 mm para 4.0 mm."
    ],
    dicaArtrelados: "A regra de ouro do Tatami da Artrelados: Se a cobertura estiver na horizontal (0°), a base tem que estar na vertical (90°)! Se o desenho for grande, use sempre grade cruzada (45° e 135°)! O encaixe dos seus contornos vai ficar perfeito como um quebra-cabeça!",
    voceSabia: "O método de ângulos ortogonais cruzados no tatami foi patenteado na Alemanha no início do século XX para a fabricação de filtros têxteis industriais de alta resistência a pressões hidráulicas.",
    practicalExercise: "Desenhe um círculo de 50 mm em tatami com ângulo 0°. Em um teste, use subponto a 0°; no outro teste, use grade cruzada a 45°/135°. Borde ambos e meça com paquímetro para ver qual manteve o formato circular perfeito.",
    quickSummary: "Estratégias de programação de grades e linhas cruzadas ortogonais sob ponto tatami para neutralizar contrações e garantir registro perfeito de contornos.",
    relatedTerms: ["Tatami", "Grade Reticulada (Lattice)", "Deslocamento de Registro", "Compensação de Repuxo", "Underlay"],
    tags: ["tatami underlay", "fill underlay", "grade", "preenchimento", "wilcom", "estabilidade"]
  },
  {
    id: "underlay-para-tecidos-de-malha-e-lycra",
    code: "U-015",
    letter: "U",
    term: "Underlay para Tecidos de Malha e Lycra",
    pronunciation: "ân-der-lei pa-ra te-ci-dos de ma-lha e lai-cra",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Especialização da programação de matrizes para vestuário casual, fitness e moda infantil, onde a elasticidade multidirecional da malha exige ancoragem preliminar contra estiramento.",
    summary: "Configurações específicas de subpontos (como malha cruzada aberta e grade elástica) projetadas para travar tecidos elásticos sem cortar as fibras de malha.",
    definition: "O Underlay para Tecidos de Malha e Lycra (Knit & Spandex Underlay Strategies) é a abordagem técnica de estruturação de matrizes voltada exclusivamente para tecidos de laçadas elásticas (como meia-malha de algodão, ribana, viscolycra, poliamida/elastano de moda fitness e malha suedine infantil). Esses tecidos deformam-se com facilidade em todas as direções quando submetidos à penetração e tração das agulhas, exigindo um underlay que atue como uma 'rede de retenção' antes da costura densa.",
    technicalDetails: "A engenharia do subponto para malhas baseia-se em 3 pilares: 1) Utilização de Double Zigzag aberto ou Tatami Grid de grande abertura (espaçamento de 3,5 mm a 4,5 mm) para neutralizar a deformação sem enrijecer a malha; 2) Ampliação do recuo de margem (Inset Distance) para 0,5 mm a 0,7 mm, acomodando o deslocamento elástico das bordas; 3) Comprimento de ponto calibrado entre 2,5 mm e 3,0 mm, associado ao uso de agulha ponta bola (Ball Point / SES), evitando perfurações excessivas que cortam os elastômeros do tecido.",
    beginnerExplanation: "É o jeito especial de programar a base do bordado para tecidos que esticam bastante (como camisetas, roupas de academia e roupinhas de bebê). A máquina faz uma costurinha elástica em formato de rede aberta que segura o tecido no lugar sem machucar os fios elásticos e sem deixar a camiseta dura.",
    howItWorks: [
      "1. O programador seleciona a receita de tecido 'Malha / Knit' no software de bordado.",
      "2. O programa aplica automaticamente subpontos com recuo ampliado (0.5 mm) e grade aberta.",
      "3. O tecido é montado no bastidor com entretela de recorte (Cutaway) sem ser esticado.",
      "4. A máquina costura a base com agulha ponta bola nº 75/11 ou 70/10.",
      "5. A estrutura em rede trava a elasticidade da malha sob o desenho.",
      "6. A cobertura é costurada com densidade moderada (0.42 mm a 0.45 mm).",
      "7. Ao soltar do bastidor, a camiseta relaxa sem formar nenhuma ruga ou concha ao redor do bordado."
    ],
    applications: [
      "Bordados em camisetas promocionais de algodão 30.1 e 24.1.",
      "Roupas de ginástica, fitness, leggings e tops em poliamida com elastano (Lycra/Spandex).",
      "Enxovais de bebê em malha suedine 100% algodão e bodys infantis.",
      "Polos corporativas em malha piquet com elastano."
    ],
    characteristics: [
      "Bloqueia a deformação elástica da malha durante a costura.",
      "Preserva o toque macio e a flexibilidade das roupas no corpo.",
      "Impede que a peça fique franzida após as primeiras lavagens."
    ],
    commonErrors: [
      "❌ Usar subponto muito denso em malha fina, cortando os fios elásticos e abrindo furos ao redor do bordado.",
      "❌ Usar entretela rasgável com subponto simples em viscolycra, fazendo o bordado encolher e virar uma tigela.",
      "❌ Esticar a camiseta ao montar no bastidor, inutilizando a ação estabilizadora do subponto."
    ],
    troubleshootingTips: [
      "Furos aparecendo ao lado dos pontos de base em camisetas: troque para agulha ponta bola (SES) e aumente o comprimento do subponto para 2.8 mm.",
      "Camiseta enrugando ao redor do bordado: use entretela de recorte (Cutaway) e reforce o subponto com grade aberta (Tatami Grid a 4.0 mm).",
      "Bordado muito pesado no peito: aumente o espaçamento do subponto para 4.2 mm e diminua a densidade do ponto cheio para 0.44 mm."
    ],
    dicaArtrelados: "Para bordar malhas que esticam: Entretela de Recorte (Cutaway) por baixo, agulha Ponta Bola na máquina e Subponto em Grade Aberta na matriz! Essa é a tríade sagrada para camisetas impecáveis e sem rugas!",
    voceSabia: "As roupas esportivas dos atletas olímpicos de atletismo utilizam matrizes digitalizadas com subpontos ultra-leves que mantêm a aerodinâmica e a respirabilidade dos tecidos inteligentes.",
    practicalExercise: "Pegue um pedaço de malha de camiseta velha. Borde uma letra sem subponto e outra com Double Zigzag com recuo de 0.5 mm. Solte do bastidor e veja como a primeira fica deformada enquanto a segunda mantém as linhas perfeitas.",
    quickSummary: "Estratégias de subpontos em rede aberta e recuo ampliado para neutralizar a deformação de tecidos elásticos sem comprometer a maciez e a flexibilidade.",
    relatedTerms: ["Tecido de Malha (Knit)", "Lycra / Spandex", "Double Zigzag", "Agulha Ponta Bola", "Entretela de Recorte (Cutaway)"],
    tags: ["malha", "lycra", "spandex", "subponto", "underlay", "programacao", "wilcom"]
  },
  {
    id: "underlay-para-tecidos-atoalhados-e-veludos",
    code: "U-016",
    letter: "U",
    term: "Underlay para Tecidos Atoalhados e Veludos",
    pronunciation: "ân-der-lei pa-ra te-ci-dos a-to-a-lha-dos e ve-lu-dos",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Técnicas de digitalização industrial criadas para contornar a penetração de pontos em tecidos com felpas, laçadas e pelos profundos.",
    summary: "Combinação de subpontos em grade reticulada densa e bordas reforçadas (Tatami Underlay + Edge Walk) para impedir o afundamento dos pontos em felpas e veludos.",
    definition: "O Underlay para Tecidos Atoalhados e Veludos (Terry Cloth & Velvet Underlay Strategies) é a metodologia de digitalização concebida para criar uma barreira física impenetrável sob tecidos com relevo superficial alto, felpas de algodão, laçadas soltas ou fios eretos de veludo e pelúcia. Como as felpas tendem a escapar entre as linhas de acabamento, o subponto deve atuar deitando e compactando as laçadas antes da costura dos pontos visíveis.",
    technicalDetails: "A estrutura de subponto recomendada para tecidos com felpa e veludo compõe-se de: 1) Grade Reticulada Dupla (Lattice Underlay) com espaçamento moderado (2,5 mm a 3,0 mm) em ângulo cruzado de 45°/135°, formando uma malha de retenção contínua; 2) Edge Walk duplo com recuo estreito (0,30 mm a 0,35 mm) para segurar as felpas nas bordas do ponto cheio; 3) Nas colunas de ponto cheio, reforço com Zigzag Underlay denso (2,5 mm de espaçamento). Essa arquitetura, combinada com filme plástico hidrossolúvel superior, garante nitidez de 100% sem perda de contraste visual.",
    beginnerExplanation: "É o jeito de programar o bordado para toalhas fofinhas de banho e veludos! A máquina faz uma 'grade de suporte' bem fechadinha por baixo para amassar e deitar todos os pelinhos da toalha. Assim, as letras e detalhes não afundam e ficam nítidos e brilhantes.",
    howItWorks: [
      "1. O programador ativa a receita para 'Atoalhado / Terry' no software de digitalização.",
      "2. O programa aplica a combinação de Edge Walk + Grade de Tatami sob os objetos.",
      "3. Coloca-se plástico hidrossolúvel sobre a toalha no bastidor.",
      "4. A máquina costura a grade de subponto, amassando as laçadas e prendendo a felpa.",
      "5. Em seguida, os pontos cheios ou tatamis de acabamento cobrem a base com nitidez perfeita.",
      "6. Retira-se a peça e dissolve-se o plástico com água morna.",
      "7. O bordado final permanece elevado e nítido, sem nenhuma laçada espetando para fora mesmo após dezenas de lavagens."
    ],
    applications: [
      "Jogos de toalhas de banho, rosto e piso para hotelaria e enxovais de luxo.",
      "Roupões de banho felpudos e roupões de microfibra aveludada.",
      "Almofadas e artigos decorativos de veludo de seda, camurça e suede.",
      "Bordados em cobertores felpudos, pelúcias e artigos infantis de plush."
    ],
    characteristics: [
      "Garante legibilidade duradoura em tecidos que sofrem lavagens constantes.",
      "Impede que laçadas de algodão furem a superfície das letras.",
      "Preserva o brilho uniforme dos fios de poliéster sobre texturas felpudas."
    ],
    commonErrors: [
      "❌ Usar apenas Center Walk em toalhas felpudas, fazendo as letras afundarem e desaparecerem entre as laçadas.",
      "❌ Bordar sem plástico hidrossolúvel superior achando que o subponto sozinho segura felpas muito altas.",
      "❌ Deixar o recuo de borda muito grande, permitindo que as felpas das laterais invadam as letras."
    ],
    troubleshootingTips: [
      "Felpas espetando entre os pontos cheios de toalhas: combine Edge Walk + Tatami Grid Underlay e use filme hidrossolúvel por cima.",
      "Letras pequenas sumindo na toalha: aumente a largura das colunas para no mínimo 2.0 mm e aplique subponto de cimentação (Knockdown).",
      "Toalha repuxando nas bordas do bordado: use entretela de gramatura 50 g/m² e aumente a compensação de encolhimento para 0.45 mm."
    ],
    dicaArtrelados: "Para toalhas de banho de presente de casamento: use sempre a dupla infalível — Plástico Hidrossolúvel por cima e Subponto em Grade (Tatami Underlay) por baixo! O monograma fica tão alto e brilhante que parece uma joia cravada na toalha!",
    voceSabia: "As toalhas dos hotéis 5 estrelas de Dubai passam por lavagens industriais a 90°C com produtos químicos fortes; somente matrizes programadas com grade dupla de underlay resistem sem desmanchar ou afundar os monogramas.",
    practicalExercise: "Borde duas letras 'B' em uma toalha felpuda grossa: a primeira com Center Walk simples e sem plástico; a segunda com Tatami Grid Underlay e plástico hidrossolúvel. Lave a toalha na máquina e compare a durabilidade e nitidez de cada uma.",
    quickSummary: "Combinação de grades reticuladas e bordas reforçadas para compactar felpas e pelos altos, garantindo alta definição e durabilidade em toalhas e veludos.",
    relatedTerms: ["Tecido Atoalhado", "Veludo", "Tatami Underlay", "Edge Walk", "Hidrossolúvel", "Knockdown Stitch"],
    tags: ["atoalhado", "toalha de banho", "veludo", "felpas", "subponto", "underlay", "wilcom"]
  },
  {
    id: "underlay-para-bordado-3d-puff-subponto-cortante-perfurante",
    code: "U-017",
    letter: "U",
    term: "Underlay para Bordado 3D Puff (Subponto Cortante / Perfurante)",
    pronunciation: "ân-der-lei pa-ra bor-da-do três-dê pâf (sub-pon-to cor-tan-te / per-fu-ran-te)",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva masculina.",
    origin: "Técnica industrial especializada para confecção de bonés e jaquetas com relevo 3D utilizando espuma de EVA (Puff Foam), patenteada nos anos 1990 no setor de bonés esportivos (New Era, Flexfit).",
    summary: "Subponto técnico com alta densidade de perfurações nas extremidades projetado para 'cortar' e perfurar a espuma de EVA (3D Puff), facilitando o destaque limpo da espuma.",
    definition: "O Underlay para Bordado 3D Puff (3D Foam Underlay / Subponto Perfurante / Capping Underlay) é uma técnica de programação altamente especializada para matrizes em relevo tridimensional executadas sobre placas de espuma de EVA (Puffy Foam / Urethane Foam). Diferente dos subpontos convencionais (que servem para sustentar o tecido), o underlay em matrizes 3D tem funções mecânicas distintas: 1) Executar linhas de corte perfurante nas extremidades abertas das colunas (capping) para guilhotinar a espuma; e 2) Fixar o EVA à entretela com pontos de baixa tração antes da cobertura pesada.",
    technicalDetails: "No bordado 3D Puff, as extremidades das colunas de ponto cheio não podem ficar abertas, pois a espuma de EVA ficaria visível e vazaria pelas pontas. O programador aplica um 'Capping' (fechamento de topo) com ponto cheio preliminar perpendicular ou triplo ponto corrido denso nas pontas das colunas. Ao costurar sobre a espuma com agulha ponta fina afiada (Sharp / Microtex 80/12) e alta densidade de cobertura (0,20 mm a 0,25 mm), as perfurações contínuas agem como um picote de selo, permitindo que o excesso de EVA seja destacado com facilidade e perfeição após a costura.",
    beginnerExplanation: "É o jeito especial de programar o bordado em alto relevo fofinho (aquele bordado 3D alto dos bonés de beisebol!). A máquina faz pontinhos estratégicos nas pontas das letras para 'cortar' e tampar a espuminha de EVA, fazendo com que a espuma fique bem escondida dentro do bordado e o excesso se solte facilmente com a mão.",
    howItWorks: [
      "1. A máquina borda primeiro os detalhes planos da matriz (se houver) diretamente no tecido.",
      "2. A máquina para (comando Stop) e a operadora posiciona a placa de EVA (espuma 3D de 2 mm a 3 mm) sobre a área.",
      "3. A máquina costura o underlay de fixação e o 'Capping' (pontos de fechamento nas pontas das letras).",
      "4. Esses pontos perfuram e picotam a espuma exatamente no limite do desenho.",
      "5. Em seguida, a máquina borda os pontos cheios ultra-densos de cobertura por cima do EVA.",
      "6. A operadora retira a peça e puxa a placa de EVA: a espuma externa se destaca facilmente na linha de picote.",
      "7. Aplica-se um soprador térmico ou ferro a vapor rápido para encolher micro-fiapos residuais de EVA.",
      "8. O bordado final apresenta um relevo tridimensional rígido, limpo e escultural."
    ],
    applications: [
      "Bonés esportivos estruturados (modelos tipo aba reta, trucker e baseball caps).",
      "Emblemas 3D para jaquetas de couro, moletom colegial e uniformes de motoclubes.",
      "Logomarcas em relevo alto para mochilas, tênis e calçados esportivos.",
      "Monogramas tridimensionais de alto impacto para moda streetwear."
    ],
    characteristics: [
      "Permite o destaque perfeito e limpo da espuma sem necessidade de tesoura.",
      "Fecha as pontas das letras impedindo que a espuma apareça nas laterais.",
      "Exige agulhas ponta fina e controle rigoroso de densidade."
    ],
    commonErrors: [
      "❌ Não programar o fechamento de ponta (Capping), deixando a espuma de EVA exposta e aparecendo nas pontas das letras.",
      "❌ Usar subponto convencional denso no meio do EVA, esmagando o relevo e fazendo o 3D perder a altura.",
      "❌ Usar agulha ponta bola cega, que empurra o EVA em vez de perfurar e cortar a espuma limpa."
    ],
    troubleshootingTips: [
      "Espuma de EVA aparecendo nas pontas das letras: programe o fechamento (Capping) com ponto cheio perpendicular nas extremidades.",
      "Dificuldade de destacar a espuma após o bordado: aumente a densidade do ponto cheio para 0.22 mm e use agulha ponta afiada (Sharp).",
      "Pedaços de EVA aparecendo entre os pontos: passe um soprador térmico (heat gun) ou vapor quente rápido para encolher os resíduos de EVA instantaneamente."
    ],
    dicaArtrelados: "O segredo do Bordado 3D perfeito: NUNCA use subponto pesado no meio da coluna (para não amassar o EVA) e NUNCA esqueça de fechar as pontas das letras com 'Capping'! O EVA se solta sozinho como mágica e o relevo fica altíssimo e impecável!",
    voceSabia: "O bordado 3D Puff foi inventado nos Estados Unidos para os bonés oficiais da Major League Baseball (MLB) nos anos 1990 para dar visibilidade tridimensional aos logos das equipes nas transmissões de TV em alta definição.",
    practicalExercise: "Digitalize uma letra 'I' maiúscula com 40 mm de altura para bordado 3D. Programe o fechamento (Capping) nas pontas superior e inferior. Borde sobre uma placa de EVA de 2 mm em sarja de boné e experimente destacar a espuma com as mãos.",
    quickSummary: "Subponto especializado com fechamentos de extremidade (Capping) e perfurações para picotar a espuma de EVA, facilitando o destaque limpo no bordado 3D.",
    relatedTerms: ["Bordado 3D (Puffy Foam)", "Capping", "Espuma de EVA", "Agulha Ponta Afiada (Sharp)", "Soprador Térmico"],
    tags: ["3d puff", "eva", "capping", "subponto", "relevo 3d", "bones", "wilcom"]
  },
  {
    id: "underlay-auto-ajustavel-automatico-auto-underlay",
    code: "U-018",
    letter: "U",
    term: "Underlay Auto-Ajustável / Automático (Auto-Underlay)",
    pronunciation: "ân-der-lei au-to a-jus-tá-vel / au-to-má-ti-co (ó-to ân-der-lei)",
    level: "Iniciante 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva masculina.",
    origin: "Recurso de inteligência computacional incorporado aos principais softwares de bordado (Wilcom ES, Tajima DG, Bernina DesignerPlus, PE-Design) a partir dos anos 2000.",
    summary: "Recurso inteligente de softwares de matrizes que analisa automaticamente a largura dos objetos e o tipo de tecido selecionado, aplicando o subponto ideal sem necessidade de ajuste manual.",
    definition: "O Underlay Auto-Ajustável (Auto-Underlay / Subponto Automático Inteligente) é o algoritmo de automação presente nos softwares modernos de criação de matrizes que calcula e aplica dinamicamente o tipo, recuo de margem, espaçamento e ângulo de subponto mais adequados para cada objeto vetorial. O algoritmo monitora a largura de cada segmento da coluna em tempo real: se o traço afunilar para menos de 1,5 mm, ele aplica Center Walk; se o traço alargar para mais de 3,0 mm, transiciona automaticamente para Edge Walk e Zigzag, adaptando-se às variações de espessura do desenho.",
    technicalDetails: "O motor de Auto-Underlay opera em conjunto com o gerenciador de receitas de tecidos (Fabric Assistant / Auto Fabric). Ao selecionar o tecido de destino (ex: 'Polo Piquet' ou 'Seda Pura'), o software carrega tabelas de parâmetros pré-calibradas por mestres bordadores, ajustando o Inset Distance, a densidade e o tipo de subponto automaticamente. Embora proporcione grande ganho de produtividade para iniciantes e produções rápidas, o programador avançado deve saber inspecionar e personalizar os parâmetros manuais para designs complexos ou tecidos atípicos.",
    beginnerExplanation: "É o 'piloto automático' do programa de bordado! Você só escolhe que tipo de tecido vai usar (por exemplo, camiseta de algodão ou toalha de banho) e o próprio programa escolhe e coloca a costura de sustentação certa para você, mudando de tipo de ponto sozinho se a letra for fininha ou grossa.",
    howItWorks: [
      "1. A usuária desenha ou converte um objeto vetorial no software de bordado.",
      "2. No painel de propriedades, ativa a opção 'Auto Underlay'.",
      "3. Seleciona o tecido de destino na lista do assistente de tecidos (ex: Tecido Plano Médio).",
      "4. O software analisa a geometria do objeto milímetro a milímetro.",
      "5. Onde o traço é fino, aplica Center Walk; onde o traço engrossa, aplica Edge Walk e Zigzag automaticamente.",
      "6. A matriz é gerada em segundos com excelente equilíbrio estrutural e pronta para bordar."
    ],
    applications: [
      "Digitalização rápida de matrizes comerciais para prazos de entrega urgentes.",
      "Facilitação do aprendizado de iniciantes no mundo da criação de matrizes.",
      "Padronização de arquivos em equipes de múltiplos programadores em birôs de bordado.",
      "Adaptação instantânea de uma mesma matriz para diferentes tecidos com 1 clique."
    ],
    characteristics: [
      "Acelera em até 50% o tempo gasto na programação de matrizes.",
      "Reduz drasticamente erros humanos de esquecimento de subponto.",
      "Permite ajuste fino manual a qualquer momento sobre as configurações automáticas."
    ],
    commonErrors: [
      "❌ Confiar cegamente no Auto-Underlay sem inspecionar cantos difíceis ou serifas finas.",
      "❌ Esquecer de selecionar o tecido correto no assistente, gerando subpontos inadequados para o material real.",
      "❌ Usar Auto-Underlay em bordados especiais como 3D Puff ou rendas Richelieu, onde a lógica automática falha."
    ],
    troubleshootingTips: [
      "Subponto automático não está aparecendo: verifique se a caixa 'Underlay' está marcada no painel de propriedades do objeto.",
      "Subponto escapando para fora nas curvas: desative o automático temporariamente e ajuste o Inset Distance manualmente para 0.45 mm.",
      "Bordado ficando muito pesado: troque o tecido selecionado no assistente para uma opção de tecido mais leve (Light Woven/Light Knit)."
    ],
    dicaArtrelados: "O Auto-Underlay é maravilhoso para o dia a dia corrido do ateliê! Mas a dica de ouro é: depois que o programa gerar o subponto sozinho, dê um zoom e confira com os seus próprios olhos se os cantinhos e letrinhas ficaram perfeitos! A máquina ajuda, mas o capricho é seu!",
    voceSabia: "Os algoritmos modernos de Auto-Underlay foram desenvolvidos a partir de bancos de dados com mais de 50.000 matrizes industriais digitalizadas ao longo de 30 anos por mestres da indústria têxtil da Austrália e Japão.",
    practicalExercise: "Desenhe uma letra com traços grossos e finos (como a letra 'R'). Ative o Auto-Underlay e veja em modo de pontos como o software muda inteligentemente de ponto corrido simples nos traços finos para borda dupla nos traços grossos.",
    quickSummary: "Recurso inteligente de softwares que calcula e aplica dinamicamente o subponto ideal com base na geometria do desenho e no tipo de tecido selecionado.",
    relatedTerms: ["Underlay", "Assistente de Tecidos (Auto Fabric)", "Center Walk", "Edge Walk", "Wilcom", "PE-Design"],
    tags: ["auto underlay", "subponto automatico", "inteligencia", "programacao", "wilcom", "pedesign", "produtividade"]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_E_PART9: Verbete[] = [
  {
    id: "e-049-espelhamento-de-angulo-e-compensacao-de-torque-vetorial",
    code: "E-049",
    term: "Espelhamento de Ângulo de Ponto e Compensação de Torque (Stitch Angle Symmetry & Torque Neutralization)",
    letter: "E",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim speculum (espelho geométrico) e do grego torquere (torcer, girar em torno de um eixo). Física mecânica de forças tangenciais aplicadas a malhas têxteis.",
    summary: "Configuração de direções de pontos opostas (ex: 45° de um lado e 135° do outro) para anular a força de torção que entorta o tecido e o bordado.",
    definition: "O espelhamento de ângulo de ponto e compensação de torque vetorial (Stitch Angle Inversion & Rotational Force Neutralization) é a técnica de digitalização avançada que programa seções simétricas adjacentes de uma matriz com ângulos de costura opostos e complementares (ex: +45° e -45°, ou 60° e 120°). Quando milhares de pontos de linha de poliéster são costurados na mesma direção angular, a tração acumulada exerce um torque rotacional contínuo sobre a trama do tecido, torcendo a peça e desalinhando os contornos finais. O espelhamento angular anula vetorialmente essas forças mecânicas opostas, mantendo o tecido perfeitamente plano e estável no bastidor.",
    technicalDetails: "Aplicação primordial em folhas de plantas, asas de pássaros/borboletas e brasões simétricos. O ângulo das linhas de costura deve convergir para a nervura central com sobreposição de 0.4mm.",
    howItWorks: [
      "1. A bordadeira programa uma folha botânica dividida em duas metades no software de matrizes (Wilcom ou PE-Design).",
      "2. Na metade esquerda, define o ângulo do ponto cheio ou tatami em 45° (inclinado para cima e para a direita).",
      "3. Na metade direita, espelha o ângulo para 135° (inclinado para cima e para a esquerda).",
      "4. A máquina de bordar (Brother, Janome ou Bernina) costura o lado esquerdo, gerando uma tração leve para a direita.",
      "5. Em seguida, costura o lado direito, gerando uma tração exatamente igual e oposta para a esquerda.",
      "6. As duas forças mecânicas se neutralizam matematicamente no centro da folha.",
      "7. A peça fica 100% lisa, sem nenhuma ruga e o contorno central bate com precisão cirúrgica de zero milímetro de erro."
    ],
    beginnerExplanation: "Quando a gente borda todos os pontos virados para o mesmo lado, a linha puxa o tecido e faz ele entortar como se estivesse torcendo. O segredo é fazer um lado da folhinha inclinado para a direita e o outro lado inclinado para a esquerda: as forças se anulam e o tecido fica retinho e sem nenhuma ruga!",
    applications: [
      "Bordados botânicos realistas com folhas, pétalas e galhos simétricos",
      "Asas de borboletas, pássaros, anjos e brasões heráldicos de alta precisão",
      "Eliminação de torção em tecidos finos e elásticos (percal, tricoline e piquet)",
      "Encaixe milimétrico perfeito de contornos perimetrais em ponto cheio"
    ],
    commonErrors: [
      "Digitalizar uma folha inteira com todos os pontos no mesmo ângulo reto de 90°, fazendo a folha enrugar no meio e entortar o tecido",
      "Não colocar uma leve sobreposição entre as duas metades da folha, abrindo uma fresta de tecido branco no centro",
      "Usar densidade excessiva nas pontas onde os dois ângulos se encontram"
    ],
    troubleshootingTips: [
      "No Wilcom ou Hatch, use a ferramenta 'Ponto Cheio com Ângulos Múltiplos (Turning Satin)' para que o programa curve as linhas de ponto suavemente acompanhando o desenho!",
      "Em folhas botânicas, coloque uma costura de ponto corrido (Center Run) na nervura central antes de bordar os pontos de cobertura",
      "Sempre comece o bordado do centro para fora para expulsar o excesso de tecido para as bordas do bastidor"
    ],
    dicaArtrelados: "Folhinha que enruga no meio nunca mais! Programe os pontos de um lado inclinados para cima e do outro lado inclinados para o outro: o bordado ganha uma nervura central linda e o tecido fica lisinho como papel!",
    voceSabia: "A natureza utiliza esse mesmo princípio de ângulos opostos na estrutura das folhas reais e nas penas dos pássaros para dar rigidez e aerodinâmica sem quebrar com o vento!",
    practicalExercise: "No seu programa de bordado, desenhe duas metades de uma folha: coloque uma com ângulo de 45° e a outra com 135°. Olhe no simulador 3D como a luz reflete de forma realista em cada lado!",
    quickSummary: "Uso de ângulos de pontos opostos em partes simétricas para anular a força de torção e evitar deformações no tecido.",
    relatedTerms: ["Ponto Cheio (Satin)", "Compensação de Encolhimento e Repuxo (Pull Compensation)", "Programação de Bordado"],
    tags: ["e-049", "espelhamento de angulo", "torque vetorial", "folhas botanicas", "simetria", "repuxo", "wilcom", "artrelados"],
    bibliographicReferences: [
      "WILCOM. Stitch Dynamics, Vector Angles & Pull-Push Force Neutralization Guide. Sydney, 2022.",
      "BROTHER. Embroidery Software Advanced Turning Satin & Angle Mapping. Nagoya, 2023.",
      "ARTRELADOS. A Física do Bordado: Como os Ângulos dos Pontos Mantêm Seu Tecido Perfeitamente Reto. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-050-engate-rapido-de-bastidor-e-mecanismo-de-trava",
    code: "E-050",
    term: "Engate Rápido de Bastidor, Mecanismo de Trava e Conexão ao Pantógrafo (Quick-Snap Hoop Lock & Carriage Bracket)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Mecânica & Ajustes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim in-cattare (prender firmemente) e do inglês snap-lock (trava de pressão com engate sonoro audível). Conexão eletromecânica de posicionamento cartesiano.",
    summary: "Encaixe mecânico metálico com alavanca ou pino de pressão que prende o bastidor no braço móvel da máquina com firmeza total e zero folga.",
    definition: "O engate rápido de bastidor e mecanismo de trava de pantógrafo (Quick-Snap Hoop Bracket / Frame Connecting Mechanism) é o conjunto de fixação mecânica de precisão localizado na lateral do bastidor e no braço móvel (carruagem do pantógrafo dos eixos X e Y) da máquina de bordar (Brother, Janome, Bernina e Sun Special). Possui pinos-guia calibrados, molas de pressão e travas de acionamento por alavanca ou botão que garantem o travamento mecânico instantâneo e perfeitamente rígido do bastidor. Elimina qualquer folga micrométrica durante acelerações e frenagens bruscas do motor de passo (até 1.000 PPM), assegurando que as coordenadas da matriz sejam transferidas com precisão geométrica absoluta ao tecido.",
    technicalDetails: "Tolerância mecânica de encaixe: inferior a 0.02mm. Construído em polímero técnico com reforço de fibra de vidro ou liga de alumínio fundido. Pinos de travamento com molas de retenção de aço inoxidável.",
    howItWorks: [
      "1. A bordadeira monta o tecido e a entretela no bastidor com firmeza.",
      "2. Leva o bastidor até o braço móvel da máquina de bordar.",
      "3. Encaixa os pinos laterais do bastidor nos slots metálicos do suporte do pantógrafo.",
      "4. Pressiona a alavanca de trava para baixo (ou empurra até ouvir o 'clique' sonoro de travamento).",
      "5. A mola interna comprime o suporte, travando o bastidor sem nenhuma folga lateral.",
      "6. A máquina executa o bordado movendo o bastidor em alta velocidade em todas as direções.",
      "7. Ao terminar, a bordadeira levanta a alavanca e o bastidor se solta suavemente para retirada da peça."
    ],
    beginnerExplanation: "É o 'encaixe' com pecinha de trava que você usa para prender o bastidor no braço mecânico da máquina de bordar. Quando você aperta a alavanquinha ou ouve o 'clique', você tem certeza de que o bastidor está 100% preso e não vai soltar nem tremer enquanto a máquina corre!",
    applications: [
      "Conexão rígida e segura de bastidores de todos os tamanhos (10x10 até 20x30cm)",
      "Eliminação de trepidações e desvios de coordenadas durante bordados rápidos",
      "Troca rápida de bastidores em linhas de produção contínua",
      "Preservação do alinhamento geométrico em matrizes com múltiplas cores e paradas"
    ],
    commonErrors: [
      "Não encaixar o bastidor até o final e travar a alavanca torta, fazendo o bastidor se soltar no meio do bordado e quebrar a agulha",
      "Forçar a alavanca de plástico com força excessiva quando houver sujeira ou fiapos no trilho do suporte",
      "Usar bastidores com o engate quebrado ou frouxo, gerando bordados deformados e desiguais"
    ],
    troubleshootingTips: [
      "Sempre ouça o 'clique' ou sinta o travamento total da alavanca antes de apertar o botão verde de Start!",
      "Passe o pincelzinho no trilho de encaixe metálico do braço da máquina uma vez por mês para tirar fiapos que possam impedir o travamento perfeito",
      "Dê uma leve puxadinha com a mão no bastidor após travar: ele não deve ter nenhum jogo ou balanço solto!"
    ],
    dicaArtrelados: "Encaixou o bastidor na máquina? Dê uma leve conferida com os dedos para ter certeza de que a trava fechou até o fim! Esse cuidadinho de 2 segundos evita que o bastidor escape no meio da encomenda e garante pontos com precisão cirúrgica!",
    voceSabia: "Os sistemas de engate de bastidor modernos foram desenhados para suportar forças de desaceleração de até 3G quando a máquina para bruscamente para cortar a linha!",
    practicalExercise: "Encaixe o bastidor no braço da sua máquina e feche a trava: tente movimentar o bastidor para os lados com a mão e sinta como ele fica firme e integrado ao corpo da máquina!",
    quickSummary: "Mecanismo de travamento com alavanca ou pino que fixa o bastidor no braço mecânico da máquina com rigidez total.",
    relatedTerms: ["Bastidor de Bordado", "Pantógrafo e Eixo X/Y", "Componentes da Máquina", "Mecânica & Ajustes"],
    tags: ["e-050", "engate rapido", "trava de bastidor", "pantografo", "encaixe", "mecanica", "brother", "janome", "artrelados"],
    bibliographicReferences: [
      "BROTHER. Embroidery Carriage Mechanism & Hoop Bracket Locking Specifications. Nagoya, 2022.",
      "JANOME. Memory Craft Hoop Snap-Lock Mechanics & Maintenance. Tokyo, 2023.",
      "ARTRELADOS. Firmeza Total: Como Cuidar das Travas e Encaixes dos Seus Bastidores de Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-051-efeito-ponto-cruz-computadorizado-cross-stitch",
    code: "E-051",
    term: "Efeito Ponto Cruz Computadorizado e Gráficos Digitais (Digital Cross Stitch & Pixel Embroidery)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim crux (cruz de dois traços perpendiculares em 'X') e do inglês digital cross-stitch. Conversão de gráficos tradicionais de etamine para automação.",
    summary: "Bordado computadorizado que reproduz exatamente o clássico ponto cruz artesanal em 'X' sobre tecidos lisos ou etamine sem precisar contar pontos à mão.",
    definition: "O efeito ponto cruz computadorizado e conversão gráfica (Machine Cross Stitch & Pixel Digitizing) é a técnica especializada de programação e costura que recria a estética geométrica e nostálgica do ponto cruz manual tradicional em formato de cruzetas em 'X' regulares. Utilizando módulos específicos em softwares de bordado (como o Wilcom Cross Stitch ou PE-Design Cross Stitch Module), cada ponto é programado como duas passadas diagonais cruzadas com nós de cruzamento precisos. Permite bordar gráficos complexos, paisagens e monogramas clássicos sobre tecidos de algodão liso, percal e linho (sem a necessidade de tecido etamine furadinho) com extrema rapidez e simetria matemática perfeita.",
    technicalDetails: "Tamanho de grade configurável de 1.5mm a 3.0mm por cruzeta (equivalente a 14 count a 18 count do etamine tradicional). As cruzetas podem ter de 2 a 4 passadas de linha para aumentar a densidade e o relevo do 'X'.",
    howItWorks: [
      "1. A bordadeira abre um gráfico tradicional de ponto cruz (ou imagem pixelada) no módulo de ponto cruz do software.",
      "2. Define o tamanho da grade (ex: 2.0mm para cruzetas bem nítidas e cheias).",
      "3. O software converte cada pixel colorido em uma cruzeta perfeita em formato de 'X' com passadas duplas.",
      "4. Salva a matriz e transfere para a máquina (Brother, Janome ou Bernina).",
      "5. Monta o tecido liso (tricoline ou toalha) no bastidor com entretela rasgável.",
      "6. A máquina costura centenas de cruzetas por minuto com precisão geométrica inalcançável manualmente.",
      "7. O bordado fica com a beleza e o carinho do ponto cruz de época, pronto em uma fração do tempo."
    ],
    beginnerExplanation: "É fazer aquele ponto cruz clássico da vovó (cheio de 'xizinhos' perfeitos) direto na máquina de bordar computadorizada! Você não precisa ficar contando furinhos nem furando os dedos com agulha de mão: a máquina faz milhares de cruzetas perfeitas em poucos minutos em qualquer tecido!",
    applications: [
      "Faixas de toalhas de banho e lavabo com motivos florais e temas infantis clássicos",
      "Quadros de maternidade com motivos de animais, orações e dados de nascimento do bebê",
      "Panos de prato com barrados de semaninha, galinhas, frutas e bules retrô",
      "Reprodução rápida de gráficos tradicionais de revistas antigas de artesanato"
    ],
    commonErrors: [
      "Usar cruzetas pequenas demais (menos de 1.2mm) em tecidos felpudos sem plástico solúvel, fazendo os 'X' sumirem dentro da felpa",
      "Usar entretela muito elástica que deforma a grade quadrada, transformando as cruzetas em retângulos tortos",
      "Bordar ponto cruz em velocidade máxima excessiva em tecidos finos, repuxando os furinhos do centro dos 'X'"
    ],
    troubleshootingTips: [
      "Para toalhas felpudas, use SEMPRE uma folha de plástico hidrossolúvel por cima: os 'X' ficam altos, nítidos e destacados!",
      "Configure o número de passadas como 'Duplo (2 passes)' ou 'Triplo': o ponto cruz fica gordinho e com visual idêntico à linha de meada de algodão!",
      "Use linhas foscas (Cotton Look) se quiser um resultado 100% rústico e tradicional"
    ],
    dicaArtrelados: "Ama o charme do ponto cruz mas não tem tempo de bordar tudo à mão? Use o módulo de ponto cruz computadorizado! As toalhas e panos de prato ficam com aquele ar afetivo de herança de família e você produz uma peça inteira em menos de 15 minutos!",
    voceSabia: "O ponto cruz é a forma mais antiga de bordado do mundo, com fragmentos arqueológicos preservados encontrados em tumbas egípcias datadas de 500 a.C.!",
    practicalExercise: "No seu software, abra o módulo de ponto cruz e escreva uma letra inicial com cruzetas de 2.5mm: borde em um retalho de tricoline e veja como os 'X' ficam geometricamente perfeitos!",
    quickSummary: "Técnica computadorizada que reproduz cruzetas em 'X' de ponto cruz tradicional com perfeição geométrica.",
    relatedTerms: ["Ponto Corrido (Running Stitch)", "Pontos Básicos & Decorativos", "Programação de Bordado"],
    tags: ["e-051", "ponto cruz", "cross stitch", "cruzetas", "graficos digitais", "retro", "afetivo", "artrelados"],
    bibliographicReferences: [
      "WILCOM. Cross Stitch Digitizing & Historic Pattern Replication Manual. Sydney, 2022.",
      "BROTHER. PE-Design Cross Stitch Center & Grid Layout Guide. Nagoya, 2023.",
      "ARTRELADOS. O Novo Ponto Cruz: Como Bordar Clássicos da Vovó em Minutos na Máquina Eletrônica. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-052-estojo-organizador-de-bobinas-e-carreteis",
    code: "E-052",
    term: "Estojo Organizador de Bobinas, Anéis de Silicone e Travas de Linha (Bobbin Storage, Huggers & Clamps)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Ferramentas & Acessórios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês étui (caixa protetora portátil) e do inglês bobbin clamps / spool huggers (abraçadeiras flexíveis de contenção de linha). Acessórios de organização física.",
    summary: "Caixas organizadoras com divisórias de espuma, anéis de silicone e prendedores que evitam que as bobinas desenrolem fios e virem um ninho de linha na gaveta.",
    definition: "O estojo organizador de bobinas e travas de silicone (Bobbin Storage Boxes & Spool Hugger Clamps) é o conjunto de acessórios de contenção e organização física indispensável para ateliês de bordado. É composto por: 1) Estojos transparentes de polipropileno com berço de espuma EVA recortada ou pinos plásticos que comportam de 25 a 60 bobinas cheias; 2) Abraçadeiras em anel de silicone flexível (Spool & Bobbin Huggers) que 'abraçam' a circunferência das bobinas e cones, mantendo a ponta da linha presa e impedindo que o filamento desenrole, se embarace em outras bobinas ou acumule poeira e luz solar direta (que resseca as fibras de poliéster).",
    technicalDetails: "Materiais atóxicos de silicone de grau alimentício de alta memória elástica e caixas plásticas com vedação contra umidade e poeira têxtil. Protege a calibragem e integridade do enrolamento do fio.",
    howItWorks: [
      "1. A bordadeira enche 10 ou 20 bobinas de linha com antecedência para deixar de reserva para a semana de trabalho.",
      "2. Encaixa um anelzinho flexível de silicone colorido ao redor de cada bobina cheia.",
      "3. O anel segura a ponta da linha perfeitamente colada no carretel sem precisar de fita adesiva.",
      "4. Guarda as bobinas nos nichos acolchoados do estojo transparente com tampa de trava.",
      "5. Durante a produção, quando a linha da bobina da máquina acaba, ela abre o estojo e pega uma bobina nova e perfeita em 3 segundos.",
      "6. A gaveta e a bancada de trabalho permanecem 100% limpas, organizadas e sem nenhum fio solto.",
      "7. A produtividade do ateliê aumenta expressivamente com economia de tempo e fios."
    ],
    beginnerExplanation: "São aquelas caixinhas plásticas com espuminha dentro e 'anéis de silicone coloridos' que você coloca em volta das suas bobinas cheias de linha. Eles seguram a pontinha da linha para ela não desenrolar na gaveta e não virar aquele 'ninho de aranha' de linha embolada que faz a gente perder tempo e paciência!",
    applications: [
      "Armazenamento protegido de dezenas de bobinas cheias prontas para uso rápido",
      "Separação organizada de bobinas por cores (linha branca, preta e fios especiais)",
      "Proteção das linhas contra poeira, sol direto e umidade ambiente",
      "Organização visual imediata da bancada de trabalho do ateliê"
    ],
    commonErrors: [
      "Jogar bobinas soltas dentro de uma gaveta ou sacola, fazendo todas as pontas se enrolarem em um nó gigante impossível de desatar",
      "Usar fita adesiva comum (durex) para colar a ponta da linha na bobina, deixando cola pegajosa no fio que gruda na lançadeira e quebra a agulha",
      "Deixar bobinas expostas ao sol perto da janela, ressecando e enfraquecendo a resistência da linha"
    ],
    troubleshootingTips: [
      "NUNCA use fita durex para prender ponta de linha de bobina! A cola da fita passa para a linha e estraga o ponto da sua máquina; use abraçadeiras de silicone!",
      "Tenha um estojo exclusivo para bobinas de linha branca e outro para bobinas de linha preta e coloridas",
      "Encha de 10 a 15 bobinas no início de cada semana: você nunca mais para o ritmo de um bordado no meio!"
    ],
    dicaArtrelados: "Organização no ateliê é dinheiro no bolso e paz de espírito! Guarde suas bobinas cheias em um estojo com anéis de silicone: além de ficar lindo e colorido como uma caixinha de doces, você troca a bobina da máquina em 5 segundos e não perde nem um minuto da sua produção!",
    voceSabia: "Uma bordadeira gasta em média 15 minutos por semana apenas desenrolando e desemaranhando linhas de bobinas guardadas soltas em gavetas — são mais de 12 horas de trabalho perdidas por ano!",
    practicalExercise: "Coloque anéis de silicone em 5 bobinas cheias e guarde-as em um estojo organizador: balance a caixinha e veja como todas as linhas ficam perfeitamente presas, sem soltar nenhum fio!",
    quickSummary: "Estojos transparentes e anéis de silicone para guardar bobinas cheias sem desenrolar fios nem embolar.",
    relatedTerms: ["Enchedor de Bobina Independente / Bobbin Winder", "Caixa da Bobina", "Linha de Bobina / Linha Inferior", "Ferramentas & Acessórios"],
    tags: ["e-052", "estojo de bobinas", "organizador", "aneis de silicone", "huggers", "organizacao", "atelie", "artrelados"],
    bibliographicReferences: [
      "BROTHER. Embroidery Studio Workflow & Accessory Storage Standards. Nagoya, 2022.",
      "MADEIRA. Thread Storage Conditions, Humidity & UV Protection Handbook. Freiburg, 2023.",
      "ARTRELADOS. Ateliê Organizado e Produtivo: Como Organizar Bobinas e Carretéis Para Ganhar Tempo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-053-efeito-franjas-e-ponto-fringe-3d-tassel",
    code: "E-053",
    term: "Efeito Franjas, Ponto Fringe 3D e Confecção de Tassel (3D Fringe Stitch & Tassel Technique)",
    letter: "E",
    level: "Avançado 🔴",
    category: "Projetos Especiais & Apliques",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês frange (borda de fios soltos decorativos) e do árabe tassilah (ornamento pendular de fios entrelaçados). Técnica tridimensional de pontos cortados.",
    summary: "Técnica que cria franjas soltas e pompons 3D em alto relevo cortando a linha da bobina no avesso e puxando os fios na frente.",
    definition: "O efeito franjas, ponto Fringe 3D e técnica de tessel/pompons (3D Fringe Stitch & Dimensional Fluffing) é a técnica avançada de bordado em que a matriz é programada com colunas largas de ponto cheio (de 8mm a 15mm de largura) com uma costura de ancoragem estreita e travamento em ponto reto em apenas uma das extremidades da coluna. Na máquina de bordar, utiliza-se tensão superior leve e entretela rasgável ou solúvel. Após o bordado, a bordadeira corta a linha de bobina no verso com um abridor de casas ao longo da borda não-ancorada e puxa suavemente os fios superiores pela frente: os pontos cheios se soltam e viram franjas esvoaçantes, jubas de leão 3D, pétalas de margarida e cabelos volumosos.",
    technicalDetails: "Largura de coluna recomendada: 9mm a 14mm com densidade de 0.35mm. A linha de ancoragem de segurança deve ter pelo menos 4 repetições de micropontos (0.8mm) para que os fios não se soltem da peça após o corte.",
    howItWorks: [
      "1. A bordadeira abre a matriz com o efeito 'Fringe / Franjas' (ex: a juba de um leãozinho ou o saiote de uma bailarina).",
      "2. Monta o tecido no bastidor com entretela rasgável.",
      "3. A máquina (Brother, Janome ou Bernina) costura uma linha de trava de segurança no topo e preenche a coluna com pontos cheios longos.",
      "4. Ao terminar, retira a peça do bastidor e vira com o AVESSO para cima sobre a mesa.",
      "5. Com a ponta do descosedor (abridor de casas), corta cuidadosamente apenas a linha branca de bobina na borda inferior da coluna.",
      "6. Vira a peça para a FRENTE e, com uma agulha sem ponta ou escovinha macia, puxa as alças de linha para cima.",
      "7. As laçadas se abrem em centenas de franjas fofas, sedosas e com relevo tridimensional incrível!"
    ],
    beginnerExplanation: "É uma técnica mágica que faz o bordado ficar com 'franjinhas de verdade' soltas e macias saindo para fora do tecido! A máquina costura a linha de um jeito especial, você passa o desmanchador de costura no avesso para cortar a linha da bobina e, na frente, puxa os fios: vira uma juba de leão ou um pompom fofinho que salta da peça!",
    applications: [
      "Jubas de leão 3D, pelos de ovelhinhas, orelhas de animais e cabelos de bonecas",
      "Miolo fofo de margaridas, girassóis e flores tridimensionais",
      "Saiotes de bailarinas e vestidos de fadas em enxovais infantis de luxo",
      "Franjas decorativas e acabamentos tipo Tassel em almofadas e toalhas"
    ],
    commonErrors: [
      "Cortar a linha do lado onde está a trava de segurança, fazendo toda a franja se soltar e cair da peça",
      "Cortar com lâmina de estilete afiada demais e rasgar o tecido principal da peça",
      "Fazer o corte sem passar termolina ou gota de selador na linha de trava"
    ],
    troubleshootingTips: [
      "Antes de cortar as linhas no avesso, passe uma linha fininha de cola de tecido ou termolina leitosa sobre a linha de ancoragem no avesso para garantir que nenhuma franja se solte na lavagem!",
      "Use um abridor de casas com a bolinha vermelha de proteção voltada para baixo para cortar a linha da bobina com total segurança",
      "Penteie as franjas com uma escovinha de sobrancelha para desembaraçar e dar volume macio e sedoso aos fios"
    ],
    dicaArtrelados: "Bordado com efeito Fringe (franjinhas 3D) em almofadas e enxovais infantis é sucesso garantido! As crianças adoram passar a mão na juba fofa dos bichinhos e as mães ficam encantadas com a criatividade e o luxo do acabamento!",
    voceSabia: "O ponto Fringe foi adaptado da técnica tradicional de tecelagem de tapetes persas manuais para a programação de bordado computadorizado nos anos 1990!",
    practicalExercise: "Borde uma pequena florzinha com matriz de ponto Fringe: corte a linha da bobina no avesso com o abridor de casas e puxe as franjas pela frente com a pinça. Veja as pétalas se transformarem em franjas soltas e sedosas!",
    quickSummary: "Técnica de pontos cheios ancorados de um só lado que, após corte no avesso, criam franjas e pompons 3D soltos.",
    relatedTerms: ["Bordado 3D / Relevo em Puffy EVA", "Efeito Chenille e Ponto Tufting Felpudo", "Ponto Cheio (Satin)", "Projetos Especiais & Apliques"],
    tags: ["e-053", "fringe", "franjas 3d", "tassel", "juba de leao", "relevo", "alta criatividade", "artrelados"],
    bibliographicReferences: [
      "BERNINA. Dimensional Embroidery: 3D Fringe, Looping & Textured Effects. Steckborn, 2022.",
      "HATCH EMBROIDERY. Mastering 3D Fringe Digitizing & Stitch Securing Guide. Melbourne, 2023.",
      "ARTRELADOS. O Toque 3D: Como Criar Franjas e Pompons Fofinhos na Sua Máquina de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-054-encolhimento-termico-de-tecidos-pre-lavagem",
    code: "E-054",
    term: "Encolhimento Têxtil, Pré-Lavagem e Estabilidade Dimensional (Fabric Pre-Shrinking & Grain Relaxation)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Tecidos & Estruturas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim concolligere (retrair fibras, encolher por umidade/calor) e da física de relaxamento de tensões de tecelagem.",
    summary: "Procedimento de lavar e passar tecidos de algodão (tricoline, linho e toalhas) antes de bordar para evitar que a peça encolha e enrugue depois na casa da cliente.",
    definition: "O encolhimento têxtil prévio e relaxamento dimensional de fibras (Fabric Pre-Washing & Thermal Pre-Shrinking) é o procedimento técnico obrigatório de beneficiamento primário de tecidos naturais e mistos (tricoline 100% algodão, percal, piquê, linho cru e toalhas de banho) antes da operação de bordado computadorizado. Tecidos de fibras naturais saem da fiação sob forte tensão mecânica nos teares; na primeira lavagem com água e secagem, as fibras relaxam e podem encolher entre 3% e 10% em comprimento e largura. Como as linhas de bordar em poliéster não encolhem (0% de retração), se uma peça for bordada sem pré-lavagem/pré-encolhimento, a primeira lavagem da cliente fará o tecido encolher ao redor do bordado, criando rugas permanentes e deformando o desenho.",
    technicalDetails: "Taxa de encolhimento típica: Tricoline 100% algodão (3% a 5%); Linho puro (6% a 10%); Fraldas de algodão duplo (8% a 12%); Toalhas felpudas (4% a 7%). As linhas de poliéster 100% apresentam retração residual térmica inferior a 0.5% a 150°C.",
    howItWorks: [
      "1. A bordadeira adquire os tecidos de algodão puro, linho ou toalhas para a produção da encomenda.",
      "2. Antes de cortar ou colocar no bastidor: molha o tecido em água fria ou morna por 20 minutos (sem torcer) ou aplica vapor abundante e contínuo com ferro de passar quente (180°C).",
      "3. Deixa secar à sombra em superfície plana.",
      "4. Passa o tecido com ferro e goma leve para alinhar os fios de urdume e trama.",
      "5. O tecido completa todo o seu encolhimento natural antes de receber o bordado.",
      "6. Realiza o bordado com estabilizador adequado na máquina.",
      "7. A cliente final pode lavar a peça dezenas de vezes na máquina de lavar roupas: o bordado permanecerá 100% plano, sem nenhuma ruga e perfeito para sempre!"
    ],
    beginnerExplanation: "É molhar e passar o tecido de algodão ou a toalha antes de bordar! Como o algodão encolhe na primeira vez que entra na água (e a linha do bordado não encolhe nada), se você bordar o pano cru sem lavar, na primeira vez que a cliente lavar na casa dela o pano encolhe e o bordado fica todo engruvinhado e feio. Molhar antes garante que a peça nunca vai deformar!",
    applications: [
      "Preparação de fraldas de boca, lençóis e mantas de bebê 100% algodão",
      "Bordados em peças de linho puro, sarja e tecidos rústicos de alta costura",
      "Bordados em faixas de toalhas de banho felpudas",
      "Garantia de qualidade eterna e acabamento impecável em produtos de ateliê"
    ],
    commonErrors: [
      "Bordar fraldas de bebê cruas direto do rolo da loja sem molhar, fazendo a fralda encolher 10% na primeira lavada da mãe e o nome do bebê virar uma 'bolacha' enrugada",
      "Torcer tecidos finos com força na mão durante a pré-lavagem, entortando a trama do tecido",
      "Usar água sanitária ou sabão agressivo na pré-lavagem de tecidos coloridos"
    ],
    troubleshootingTips: [
      "Para toalhas e tecidos que você não quer molhar inteiros: passe o ferro a vapor BEM quente com água destilada bem devagar sobre a área que vai ser bordada; o choque térmico do vapor encolhe as fibras na hora!",
      "Em fraldas de bebê, lave sempre com sabão neutro hipoalergênico e passe a ferro antes de bordar: além de encolher, retira a goma química da fábrica e deixa a fralda super macia para a pele do recém-nascido!",
      "Explique para a cliente que suas peças passam por processo de pré-lavagem e higienização: isso agrega um valor gigante ao seu trabalho!"
    ],
    dicaArtrelados: "Quer o segredo dos ateliês que vendem enxovais de bebê caríssimos e que nunca deformam? Pré-lave e passe as fraldas e tecidos de algodão antes de bordar! O tecido já fica na medida definitiva e o bordado continua lisinho e perfeito mesmo após 100 lavagens!",
    voceSabia: "O fenômeno do encolhimento de fibras de algodão é chamado na engenharia têxtil de 'Relaxamento Hidromecânico' e ocorre porque as moléculas de celulose se dobram e se aproximam quando entram em contato com a água!",
    practicalExercise: "Pegue um quadradinho de 10x10cm de tricoline cru: meça com régua com precisão; molhe na água morna, seque e passe a ferro. Meça de novo com a régua e veja como ele encolheu quase meio centímetro!",
    quickSummary: "Procedimento de pré-molhar ou aplicar vapor quente em tecidos de algodão antes de bordar para evitar rugas futuras.",
    relatedTerms: ["Encolhimento do Tecido e Deformação por Repuxo", "Esterilização, Higienização e Cuidados Térmicos com Enxovais Bordados", "Tecidos & Estruturas"],
    tags: ["e-054", "encolhimento", "pre lavagem", "algodao puro", "fraldas", "linho", "estabilidade dimensional", "artrelados"],
    bibliographicReferences: [
      "TAYLOR, M. A. Technology of Textile Properties & Dimensional Stability. London: Forbes, 2021.",
      "GUNOLD. Fabric Preparation, Washing Standards & Shrinkage Compensation Guide. Kenzingen, 2022.",
      "ARTRELADOS. O Segredo do Enxoval Perfeito: Como a Pré-Lavagem Evita Que Suas Peças Enruguem. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

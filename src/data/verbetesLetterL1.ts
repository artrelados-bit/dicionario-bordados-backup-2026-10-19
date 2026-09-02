import { Verbete } from "../types";

export const VERBETES_LETTER_L_PART1: Verbete[] = [
  {
    id: "l-001-lacada-lancadeira-formacao-ponto-fixo-lockstitch",
    code: "L-001",
    term: "Laçada da Lançadeira / Formação de Laçada (Loop Formation / Rotary Hook Catch)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Da cinemática mecânica do ponto fixo (Lockstitch ISO 301).",
    origin: "Princípio fundamental da costura automatizada concebido por Elias Howe (1846) e aperfeiçoado por Allen B. Wilson e Isaac Singer com a lançadeira rotativa contínua, permitindo laçadas estáveis em alta rotação.",
    summary: "Fenômeno cinemático onde o bico da lançadeira captura a alça de linha superior aberta pelo rebaixo da agulha para entrelaçar com a linha da bobina.",
    definition: "A Laçada da Lançadeira (Loop Formation / Hook Timing Catch) é o evento mecânico de precisão micrométrica em que a ponta afiada do bico da lançadeira rotativa (Hook Point) cruza por trás da agulha e penetra no interior da alça de linha superior (K-Loop). Quando a agulha atinge o ponto morto inferior (Bottom Dead Center) e sobe entre 1,8 mm e 2,2 mm, o atrito do tecido contra o fio retém a linha superior, forçando-a a abaular para fora no rebaixo da agulha (Scarf). Nesse exato milissegundo, a lançadeira passa a uma distância crítica de 0,05 mm a 0,10 mm da agulha, pesca essa alça e a expande ao redor da caixa de bobina, entrelaçando a linha de cima com a de baixo e formando o ponto fixo de bordado.",
    technicalDetails: "Geometria e tolerâncias críticas da formação da laçada:\n• Subida da Agulha para Formação do Loop: 1,8 mm a 2,2 mm a partir do ponto mais baixo;\n• Folga Radial entre Ponta da Lançadeira e Agulha: 0,05 mm a 0,10 mm (não pode tocar nem ficar distante demais);\n• Posição do Bico da Lançadeira: Deve coincidir rigorosamente com o terço inferior do rebaixo (Scarf) da agulha, cerca de 0,5 mm a 1,0 mm acima do topo do olho da agulha;\n• Ângulo de Abertura da Laçada: Depende da torção do fio (Z-twist), da elasticidade do filamento e do amortecimento da mola de compensação (Check Spring);\n• Se a folga for > 0,15 mm: A lançadeira passa no vazio, provocando ponto pulado (Skipped Stitch);\n• Se a folga for < 0,02 mm: A ponta da lançadeira colide com a agulha, provocando quebra catastrófica de agulha e rebarbas de metal.",
    howItWorks: [
      "1. A barra de agulha desce com a linha superior, perfura o tecido e a entretela até o ponto mais profundo (Ponto Morto Inferior).",
      "2. O servomotor continua girando e a agulha inicia uma subida controlada de exatamente 2,0 mm.",
      "3. O atrito das fibras do tecido comprime a linha, fazendo o fio projetar-se para o lado côncavo (Scarf) da agulha, abrindo uma alça aberta (laçada).",
      "4. O bico rotativo da lançadeira chega velozmente e entra por dentro dessa laçada de linha.",
      "5. A lançadeira gira, expande a laçada e a conduz ao redor de todo o corpo da caixa de bobina.",
      "6. A linha superior laça a linha de canelinha que sai do centro da bobina.",
      "7. A alavanca estica-fio sobe velozmente no cabeçote e puxa a laçada para cima, assentando o nó no coração do tecido."
    ],
    beginnerExplanation: "Sabe como a máquina consegue dar um ponto sem que você precise costurar à mão com agulha e linha solta? Quando a agulha desce no tecido e sobe um pouquinho de nada, a linha de cima cria uma 'barriguinha' de fio bem atrás dela. Embaixo da chapa de metal tem um gancho de aço girando que parece uma colherzinha afiada (a lançadeira). Esse ganchinho passa voando, pesca essa barriguinha de linha e dá uma volta inteira na linha da bobina! É assim que o nó do bordado é feito num piscar de olhos, mil vezes por minuto!",
    applications: [
      "Sincronização e calibração de ponto (Hook Timing) em manutenções mecânicas periódicas",
      "Diagnóstico de falhas de pontos pulados em malhas elásticas, tecidos pesados ou couro",
      "Regulagem de máquinas para bordar com fios grossos ou fios metálicos delicados",
      "Compreensão fundamental de operadores para evitar colisões de bastidor e agulha"
    ],
    commonErrors: [
      "Bordar com a agulha torta ou inserida ao contrário (com a canaleta virada para o lado errado, impedindo a laçada de abrir)",
      "Não colocar entretela em tecidos finos (o tecido 'dança' junto com a agulha e a laçada não abre, pulando dezenas de pontos)",
      "Puxar o tecido ou o bastidor com as mãos enquanto a máquina está bordando, entortando a agulha no instante do engate da lançadeira"
    ],
    troubleshootingTips: [
      "Se a máquina estiver pulando pontos: troque a agulha por uma nova e certifique-se de que a parte chanfrada do cabo está voltada para trás",
      "Use entretela firme para tecidos elásticos; ela dá a resistência necessária para o fio formar a alça perfeita",
      "Verifique com uma lupa se a ponta da lançadeira não está cega ou com dentes causados por impactos de agulhas anteriores"
    ],
    dicaArtrelados: "Se você estiver bordando malha e a máquina começar a pular pontos: o problema quase nunca é a tensão! É o tecido que está subindo junto com a agulha (efeito 'flagging') e não deixando a laçada abrir. Coloque uma entretela de malha firme por baixo e use uma agulha de ponta bola (Ball Point) para resolver na hora!",
    voceSabia: "Uma máquina industrial moderna a 1.000 pontos por minuto realiza a captura e o nó da laçada em apenas 0,06 segundos — um processo tão rápido que só pode ser visualizado com câmeras de alta velocidade capazes de gravar 5.000 quadros por segundo!",
    practicalExercise: "Retire a chapa de agulha e a caixa de bobina da sua máquina. Gire o volante com a mão bem devagarzinho olhando com uma lanterna: veja a agulha descer, subir 2 milímetros e o bico pontiagudo da lançadeira passar exatamente atrás do furinho da agulha pescando a linha!",
    quickSummary: "Momento mecânico em que o bico da lançadeira captura a alça de linha superior formada no rebaixo da agulha para entrelaçar o ponto.",
    relatedTerms: ["Lançadeira Rotativa", "Ponto Morto Inferior", "Scarf da Agulha", "Ponto Pulado", "Check Spring"],
    imageUrl: "/images/l001_lacada_lancadeira_v1.jpg?v=1",
    imageCaption: "Cinemática da Formação de Laçada: Abertura da alça de linha no rebaixo da agulha, captura pelo bico da lançadeira rotativa e entrelaçamento com a linha da bobina em máquina de 1 agulha.",
    tags: ["l-001", "lacada", "formacao de lacada", "hook timing", "lancadeira", "ponto fixo", "mecanica", "artrelados"],
    bibliographicReferences: [
      "KOBAN HOOK MANUFACTURING CO. Technical Manual on Rotary Hook Dynamics and Loop Catching Tolerances. Osaka: Koban, 2022.",
      "ARTRELADOS. A Cinemática do Ponto Fixo: Formação de Laçada, Lançadeiras e Sincronismo Micrométrico. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-002-lancadeira-rotativa-gancho-giratorio-rotary-hook",
    code: "L-002",
    term: "Lançadeira Rotativa (Rotary Hook / Hook Race Assembly)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Do inglês 'Rotary Hook' (gancho rotativo de precisão).",
    origin: "Desenvolvida industrialmente pela Wheeler & Wilson e padronizada no século XX pelas fabricantes japonesas Koban, Hirose e Tajima para viabilizar rotações contínuas sem o impacto de vaivém das antigas lançadeiras oscilantes.",
    summary: "Componente mecânico cilíndrico de aço temperado que gira continuamente em 360° sob a chapa de agulha para capturar a linha superior e alojar a bobina.",
    definition: "A Lançadeira Rotativa (Rotary Hook / Conjunto de Gancho Giratório) é o coração mecânico do sistema inferior da máquina de bordar industrial e profissional. Diferente das máquinas domésticas de lançadeira oscilante (que vão e voltam em meia-lua), a lançadeira rotativa gira em rotação contínua e unidirecional em velocidade 2:1 (duas voltas completas a cada descida de agulha). Fabricada em ligas nobres de aço cromo-molibdênio com tratamento térmico de cementação superficial e revestimento opcional de nitreto de titânio (Duralon/Golden Hook), ela aloja a cesta da caixa de bobina e possui um bico retificado com precisão de mícron que pesca a linha da agulha sem gerar vibrações.",
    technicalDetails: "Especificações e engenharia da lançadeira rotativa:\n• Relação de Transmissão: 2 rotações da lançadeira para 1 descida da barra de agulha (2:1 Gear Ratio);\n• Velocidade Operacional: Projetada para operar com estabilidade total de 800 a 1.500 RPM;\n• Tolerância Dimensional da Ponta: Raio de ponta r = 0,02 mm a 0,04 mm com acabamento espelhado Ra < 0,03 microns;\n• Lubrificação Automática: Canais capilares e feltros de óleo integrados que recebem microgotas da bomba de lubrificação central;\n• Revestimentos Especiais: Tratamento DLC (Diamond-Like Carbon) ou Nitreto de Titânio (TiN) para aumento de dureza até 2.500 HV e resistência térmica a atrito prolongado.",
    howItWorks: [
      "1. A lançadeira é movida pelo eixo inferior sincronizado por engrenagens cônicas helicoidais ou correia dentada de alta rigidez.",
      "2. Quando a agulha desce e inicia a subida, a lançadeira completa sua primeira volta e o bico penetra na laçada do fio.",
      "3. O corpo da lançadeira conduz a linha ao redor da cesta interna (Bobbin Case Holder), que permanece estacionária graças à trava de dedo (Positioning Finger).",
      "4. A linha passa suavemente pela folga da trava sem prender.",
      "5. A lançadeira completa sua segunda volta livre enquanto o estica-fio recolhe o nó e o pantógrafo se movimenta para a coordenada seguinte.",
      "6. O ciclo se repete com suavidade absoluta, gerando baixo nível de ruído e alta consistência de ponto."
    ],
    beginnerExplanation: "A lançadeira rotativa é a peça de aço super brilhante que fica girando debaixo da chapinha da máquina onde você coloca a canelinha de linha! Em vez de ficar indo e voltando, ela gira em círculos sem parar, parecendo um motorzinho de avião. Como ela gira macio e não para nunca, ela permite que sua máquina borde super rápido sem trepidar, fazendo milhares de pontos perfeitos sem embolar a linha embaixo!",
    applications: [
      "Equipamento padrão de todas as máquinas de bordar industriais e semiprofissionais de alta velocidade",
      "Bordados contínuos de alta produção em bonés, jaquetas, uniformes e calçados",
      "Operações com fios finos e delicados que exigem passagem ultra-suave sem arestas",
      "Trabalhos intensivos de 24 horas por dia em polos de confecção seriada"
    ],
    commonErrors: [
      "Deixar acumular poeira de linha e fiapos de entretela dentro da pista da lançadeira (a lançadeira trava e quebra engrenagens)",
      "Bordar sem colocar a gota diária de óleo mineral branco no canal da lançadeira",
      "Usar agulhas de tamanho errado que colidem com a ponta da lançadeira, lascando o aço temperado"
    ],
    troubleshootingTips: [
      "Pingue 1 gota de óleo de máquina próprio para bordado na pista da lançadeira a cada 4 a 6 horas de trabalho contínuo",
      "Limpe a pista da lançadeira com um pincel macio toda vez que for trocar a linha de bobina",
      "Se a linha começar a arrebentar após uma quebra de agulha, passe o dedo suavemente na ponta da lançadeira: se estiver áspera, faça o polimento com lixa 2000 e pasta diamantada"
    ],
    dicaArtrelados: "Mantenha um imã forte limpo ao lado da máquina. Quando for limpar a lançadeira com o pincel, passe a ponta imantada perto da pista: ela puxa pedacinhos minúsculos de pontas de agulha quebradas que o olho não enxerga e que poderiam riscar sua lançadeira nova!",
    voceSabia: "As primeiras lançadeiras industriais japonesas eram polidas manualmente uma a uma por mestres cuteleiros e espadachins com pedras naturais de afiação de espadas Katana!",
    practicalExercise: "Abra a tampa inferior da sua máquina, retire a caixa de bobina e use ar comprimido ou pincel para remover todos os fiapos acumulados na pista da lançadeira rotativa. Pingue uma gotinha de óleo e gire o volante manualmente para sentir a maciez do movimento!",
    quickSummary: "Gancho giratório contínuo de 360° em aço temperado que captura a laçada superior e envolve a bobina com máxima estabilidade.",
    imageUrl: "/images/l002_lancadeira_rotativa_v1.jpg?v=1",
    imageCaption: "Mecânica de Alta Precisão da Lançadeira Rotativa em 1 Agulha: rotação contínua de 360° em aço temperado capturando a laçada superior no rebaixo da agulha e envolvendo a bobina com lubrificação periódica da pista.",
    relatedTerms: ["Laçada da Lançadeira", "Caixa de Bobina", "Trava da Lançadeira", "Óleo Mineral Branco", "Hirose"],
    tags: ["l-002", "lancadeira", "rotary hook", "gancho rotativo", "koban", "hirose", "mecanica", "artrelados"],
    bibliographicReferences: [
      "HIROSE MANUFACTURING CO. Industrial Sewing and Embroidery Rotary Hooks: Engineering Catalog & Maintenance. Osaka: Hirose, 2023.",
      "ARTRELADOS. Guia de Manutenção Mecânica: Ajuste e Lubrificação de Lançadeiras Industriais. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-003-lancadeira-oscilante-sistema-meia-lua-shuttle-hook",
    code: "L-003",
    term: "Lançadeira Oscilante (Oscillating Shuttle Hook / CB Hook)",
    letter: "L",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Do latim 'Oscillare' (balançar em vaivém) / Mecânica clássica.",
    origin: "Mecanismo patenteado no século XIX (sistema Central Bobbin / CB Hook) que utiliza o movimento pendular de vaivém de 180° a 210°, tradicionalmente presente em máquinas de costura mecânicas e máquinas de bordar domésticas de entrada.",
    summary: "Sistema mecânico onde a lançadeira oscila para frente e para trás em movimento semicircular para capturar a laçada de linha.",
    definition: "A Lançadeira Oscilante (Oscillating Shuttle Hook ou Sistema CB - Central Bobbin) é o conjunto de laçada no qual o gancho de aço não gira em círculos contínuos, mas executa um movimento oscilatório de vaivém (arco de 180° a 210°). Quando a agulha desce, o gancho avança em sentido horário para pescar a laçada de linha superior; ao completar a passagem do fio ao redor da bobina, ele inverte o sentido e retorna em sentido anti-horário à posição de espera. Embora seja extremamente robusto e tolerante a pequenas variações de espessura de tecido, esse sistema impõe um limite físico de velocidade (normalmente 400 a 600 PPM) devido à inércia e vibrações geradas pela frenagem e reversão contínua do gancho.",
    technicalDetails: "Características e limitações mecânicas da lançadeira oscilante:\n• Cinemática: Movimento alternado gerado por biela oscilante e excêntrico;\n• Limite de Velocidade: 400 a 700 PPM (acima disso, o ruído e a vibração tornam-se excessivos);\n• Desmontagem Rápida: Possui anel de retenção com travas laterais plásticas ou metálicas que dispensam ferramentas para abertura;\n• Tolerância a Fios Grossos: Excelente capacidade de tração para fios de algodão pesados e linhas 30/40;\n• Desgaste por Inércia: O impacto nas pontas de reversão exige folgas maiores (0,10 mm a 0,15 mm) entre gancho e biela de impulso.",
    howItWorks: [
      "1. A agulha desce no tecido e sobe formando a laçada de linha superior.",
      "2. A biela empurra a lançadeira oscilante para a frente: a ponta do gancho avança e captura a laçada.",
      "3. A lançadeira conduz a linha ao redor da caixa de bobina até o nó se formar.",
      "4. O mecanismo inverte o sentido de rotação: a lançadeira para e volta para trás em movimento de ré.",
      "5. A linha é liberada para a subida do estica-fio.",
      "6. A lançadeira fica parada aguardando a próxima descida da agulha para iniciar um novo ciclo de vaivém."
    ],
    beginnerExplanation: "A lançadeira oscilante é aquele sistema que parece uma 'meia-lua' de metal que fica balançando para lá e para cá dentro da máquina, como se fosse um pêndulo ou um balanço de parque! É um sistema muito forte e fácil de limpar (você abre as duas travinhas com o dedo e ela sai na sua mão). Ela borda muito bem, mas não pode correr muito rápido porque precisa parar e voltar a cada pontinho que dá!",
    applications: [
      "Máquinas de costura e bordado domésticas de entrada e máquinas mecânicas híbridas",
      "Bordados manuais livres guiados com bastidor de mola (Free Motion Embroidery)",
      "Projetos com tecidos grossos, jeans pesado e linhas rústicas de algodão",
      "Ensino básico de operação e mecânica para iniciantes em confecção"
    ],
    commonErrors: [
      "Tentar forçar a velocidade da máquina acima do recomendado, gerando barulho alto de batida metálica",
      "Montar a lançadeira ou o anel de retenção invertido após a limpeza semanal",
      "Esquecer de travar as duas abas plásticas laterais antes de ligar a máquina"
    ],
    troubleshootingTips: [
      "Ao remontar a lançadeira oscilante: certifique-se de que a ponta central encaixou perfeitamente no pino da biela",
      "Aplique apenas 1 gota de óleo mineral na pista semicircular da lançadeira; o excesso mancha a linha e o tecido",
      "Se a máquina travar repentinamente: desligue, retire o anel de travamento e puxe o fio que ficou embolado atrás da meia-lua"
    ],
    dicaArtrelados: "Para limpar a lançadeira oscilante: nunca use agulhas de aço ou chaves de fenda para raspar a sujeira! Use um cotonete seco ou pincel macio embebido em uma gota de óleo. Qualquer arranhão na pista metálica pode fazer a linha arrebentar para sempre!",
    voceSabia: "O sistema de lançadeira oscilante foi aclamado na Exposição Universal de Paris de 1889 como o ápice da confiabilidade mecânica residencial, equipando mais de 100 milhões de lares durante o século XX!",
    practicalExercise: "Em uma máquina doméstica de sistema CB, solte as duas travas plásticas, retire o anel e a meia-lua da lançadeira: limpe a pista com um pincel macio, sinta o peso do aço temperado e recoloque tudo no lugar travando com segurança!",
    quickSummary: "Mecanismo oscilante semicircular de vaivém clássico, altamente robusto e com limite de velocidade moderado.",
    imageUrl: "/images/l003_lancadeira_oscilante_v1.jpg?v=1",
    imageCaption: "Mecânica da Lançadeira Oscilante (Sistema CB) em 1 Agulha: movimento pendular de vaivém em arco de 180° para captura da laçada, com anel de retenção de destravamento rápido para limpeza e manutenção preventiva.",
    relatedTerms: ["Lançadeira Rotativa", "Sistema CB", "Caixa de Bobina", "Manutenção Preventiva"],
    tags: ["l-003", "lancadeira oscilante", "shuttle hook", "cb hook", "meia lua", "mecanica", "domestica", "artrelados"],
    bibliographicReferences: [
      "BERNINA INTERNATIONAL. Hook Systems Evolution: CB Hook vs Rotary Hook Precision. Steckborn: Bernina, 2021.",
      "ARTRELADOS. Sistemas de Laçada: Lançadeiras Rotativas, Oscilantes e Verticais no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-004-la-de-bordar-fios-acrilicos-burmilana-madeira-lana",
    code: "L-004",
    term: "Lã de Bordar / Fios Acrílicos Felpudos de Relevo (Wool & Acrylic Embroidery Thread / Burmilana / Lana)",
    letter: "L",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino / Do latim 'Lana' / Fiação têxtil especial de alta volumetria.",
    origin: "Desenvolvida por fabricantes europeus (Madeira Burmilana, Aurifil Lana) para reproduzir eletronicamente a estética rústica e artesanal do bordado tradicional de lã e ponto cruz à mão sobre malhas e casacos.",
    summary: "Fio encorpado e aveludado composto por lã e acrílico que produz texturas ricas, acabamento fosco e relevo similar a pelúcia e tapeçaria.",
    definition: "A Lã de Bordar Eletrônico (conhecida comercialmente como Madeira Burmilana / Lana 12 / Acrylic-Wool Blend) é uma linha de bordar volumosa de espessura especial (título 12wt ou Nm 20/2), composta tipicamente por 50% de lã natural e 50% de poliacrílico (ou 100% acrílico de alta tenacidade). Diferente das linhas lisas de poliéster brilhante, o fio de lã possui fibras curtas e felpudas que preenchem espaços vazios, proporcionando um visual fosco, rústico e altamente texturizado. Ao passar por uma escovação com escova de cerdas de arame após o bordado, as fibras se abrem, criando um efeito espetacular de pelo de animal, pelúcia e efeito veludo tridimensional.",
    technicalDetails: "Propriedades e parametrização para lã de bordar:\n• Espessura do Fio: Título 12wt (cerca de 3 a 4 vezes mais grosso que a linha padrão 40wt);\n• Agulha Obrigatória: Agulha Topstitch ou Chenille calibre 90/14 a 110/18 com olho extralongo e ranhura larga para evitar desfiamento por atrito;\n• Densidade na Matriz: Reduzida em 40% a 50% (espaçamento entre pontos de 0,60 mm a 0,90 mm em ponto tatami ou cheio);\n• Tensão Superior: Levemente aliviada (tensão frouxa entre 90 e 110 gf) para não estirar nem partir o fio felpudo;\n• Velocidade da Máquina: Reduzida para 450 a 650 PPM para acomodar a espessura e evitar aquecimento na agulha.",
    howItWorks: [
      "1. O programador digitaliza a matriz com densidade bem aberta (0,75 mm) para compensar o grande volume da lã.",
      "2. Instala-se uma agulha especial calibre 100/16 no cabeçote da máquina.",
      "3. Passa-se o fio de lã Burmilana pelos discos tensores com pressão bem aliviada.",
      "4. A máquina borda em velocidade moderada sobre malhas de tricô, moletons, jeans ou lã batida.",
      "5. O bordado preenche toda a superfície com aspecto artesanal encorpado e acabamento fosco requintado.",
      "6. Opcionalmente, o bordador esfrega uma escova especial de cerdas macias de arame sobre o bordado: as fibras se eriçam, transformando o desenho em uma textura fofa e aveludada de pelúcia."
    ],
    beginnerExplanation: "A lã de bordar (tipo Burmilana) é uma linha gordinha e fofinha feita de lã de verdade misturada com acrílico. Em vez de ficar com aquele brilho lisinho de plástico da linha comum, ela deixa o bordado parecendo feito à mão com lã de tricô! É maravilhosa para bordar bichinhos de pelúcia, roupinhas de bebê de inverno, moletons e casacos quentinhos. Se você passar uma escovinha de pentear por cima depois de bordar, o desenho fica parecendo o pelo de um ursinho de verdade!",
    applications: [
      "Bordados rústicos e folclóricos em casacos de inverno, jaquetas jeans e mantas",
      "Efeito realista de pelo em animais, folhagens botânicas e barba de Papai Noel",
      "Customização de moletons universitários e peças de malharia retilínea e tricô",
      "Bordados em estilo tapeçaria, ponto cruz digital e brasões vintage"
    ],
    commonErrors: [
      "Bordar com agulha fina 75/11 comum (o fio grosso não cabe no furinho, esfiapa e quebra a cada 10 pontos)",
      "Usar matrizes digitalizadas para linha comum sem abrir o espaçamento (a matriz fica empapada de linha e quebra a agulha)",
      "Puxar a linha com tensão forte, esticando a lã até que ela perca sua felpa e arrebente"
    ],
    troubleshootingTips: [
      "Use sempre agulha Topstitch calibre 90/14 ou 100/16 para dar passagem livre ao fio grosso",
      "Reduza a velocidade da máquina para 500 PPM para garantir formação suave de laçada",
      "Use entretela rasgável ou recortável firme para suportar o peso e a tração do bordado encorpado"
    ],
    dicaArtrelados: "Para criar orelhas e pelos de animais super realistas: borde com fio Burmilana e depois passe uma escovinha de dentes dura ou escova de cardar cães bem de leve sobre os pontos cheios. O bordado se transforma em uma pelúcia viva de tirar o fôlego!",
    voceSabia: "A lã foi o primeiro material utilizado pela humanidade para bordar peças de vestuário, com mantos bordados em fios de lã colorida datados de mais de 3.000 anos encontrados nas tumbas da Pérsia e do Egito Antigo!",
    practicalExercise: "Coloque uma agulha 100/16 na sua máquina, passe um carretel de fio de lã 12wt e borde um pequeno coração com densidade de 0,8 mm: passe uma escovinha por cima e veja a mágica da textura aveludada se formar!",
    quickSummary: "Linha encorpada e felpuda de lã/acrílico que proporciona textura rústica, acabamento fosco e relevo escovado de pelúcia.",
    relatedTerms: ["Madeira Burmilana", "Agulha Topstitch", "Pintura de Agulha", "Densidade de Ponto"],
    tags: ["l-004", "la de bordar", "burmilana", "lana", "fio acrilico", "relevo", "textura", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARNE. Burmilana Embroidery Thread: Working Guidelines and Brush Techniques. Freiburg: Madeira, 2023.",
      "ARTRELADOS. Fios Especiais e Texturas Nobres: Lãs, Meadas e Fios Volumosos no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-005-lame-tecido-metalico-lurex-foil-applique",
    code: "L-005",
    term: "Lamé (Tecido Metálico Lamé / Lurex Foil Fabric)",
    letter: "L",
    level: "Intermediário 🟡",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino / Do francês 'Lamé' (folheado a lâminas metálicas).",
    origin: "Tecido luxuoso de origem francesa que utilizava lâminas de prata e ouro tecidas com seda, popularizado nos anos 1920 e modernizado no século XX com fibras sintéticas de poliéster revestidas por filmes metalizados de alta flexibilidade.",
    summary: "Tecido brilhante de efeito espelhado ou metálico líquido, amplamente utilizado em apliques de fantasia, vestuário de festa e emblemas comemorativos.",
    definition: "O Lamé é um tecido especial plano ou de malha caracterizado pelo entrelaçamento de fios têxteis sintéticos com fitas microscópicas de filme plástico metalizado (poliéster aluminizado ou Lurex). Apresenta altíssimo brilho metálico, aspecto reflexivo e caimento fluido. No bordado computadorizado, o Lamé é um dos materiais favoritos para a técnica de aplique (Appliqué), substituindo grandes áreas de preenchimento de pontos cheios por um fundo brilhante espelhado com enorme economia de tempo de máquina e fios. Exige cuidados de fixação e perfuração com agulhas finas de ponta aguda (Microtex) para não desfiar as fitas metálicas.",
    technicalDetails: "Propriedades e estabilização do tecido Lamé:\n• Composição Típica: 60% a 70% Poliéster metalizado e 30% a 40% Nylon/Poliéster;\n• Sensibilidade Térmica: O filme metalizado derrete com facilidade sob temperaturas acima de 130°C (proibido ferro muito quente);\n• Comportamento sob Perfuração: Tende a rasgar ao longo das linhas de pontos se a densidade for muito alta (efeito picote de selo postal);\n• Agulha Recomendada: Agulha fina ponta aguda (Microtex / Sharp) calibre 70/10 ou 75/11 para perfuração limpa sem repuxar a malha metálica;\n• Fixação de Aplique: Termocolante definitivo ou cola spray temporária sem solventes que ataquem a metalização.",
    howItWorks: [
      "1. Aplica-se uma película de termocolante no verso do tecido Lamé com ferro em temperatura morna (modo seda/nylon).",
      "2. A máquina borda a linha de posicionamento (Placement Stitch) sobre a entretela do bastidor.",
      "3. O bordador posiciona o pedaço de Lamé cobrindo a marcação.",
      "4. A máquina executa a costura de fixação (Tackdown Stitch) com pontos retos curtos.",
      "5. O excesso de Lamé é recortado rente com tesoura de ponta curvada (pelicano).",
      "6. A máquina finaliza o contorno com cordone (ponto satim) com densidade suave (0,40 mm) para não mastigar a borda metálica.",
      "7. O resultado é um aplique espetacular, ultra brilhante e leve."
    ],
    beginnerExplanation: "O Lamé é aquele tecido que parece puro ouro, prata ou glitter líquido que brilha muito! É o tecido mais famoso das roupas de festa, Carnaval e fantasias de super-heróis. No bordado, a gente adora usar pedacinhos de Lamé para fazer apliques (como coroas de princesa, estrelas e asas de anjo). Em vez de você gastar milhares de pontos para preencher uma estrela amarela, você coloca um pedaço de Lamé dourado e borda só a bordinha: fica lindo, reluzente e fica pronto em 2 minutos!",
    applications: [
      "Apliques brilhantes em fantasias de Carnaval, teatro e figurinos de espetáculos",
      "Bordados temáticos infantis (coroas, estrelas, espadas e escudos de super-heróis)",
      "Emblemas comemorativos de aniversários e festividades natalinas",
      "Bordados em moda praia luxo e moda feminina de gala"
    ],
    commonErrors: [
      "Passar ferro muito quente direto sobre o Lamé (o plástico metálico derrete instantaneamente e gruda na base do ferro)",
      "Usar agulha grossa sem ponta que puxa e quebra as fitas metálicas do tecido",
      "Digitalizar contornos de ponto cheio com densidade ultra pesada que cortam o tecido como uma tesoura"
    ],
    troubleshootingTips: [
      "Passe o tecido Lamé sempre pelo avesso e protegido com um tecido de algodão por cima",
      "Utilize sempre agulha Microtex 70/10 ou 75/11 nova para fazer cortes microscópicos perfeitos",
      "Use entretela hidrossolúvel no topo se o Lamé tiver textura muito lisa e reflexiva para estabilizar o calcador"
    ],
    dicaArtrelados: "Quando for fazer apliques com Lamé: aplique entretela termocolante fina no verso dele antes de cortar. Isso encorpa o tecido, impede que ele desfie nas bordas e facilita o corte perfeito com a tesoura pelicano!",
    voceSabia: "O tecido Lamé metálico foi o material escolhido pela NASA para confeccionar as camadas reflexivas externas dos trajes espaciais do Projeto Apollo para refletir a radiação solar na Lua!",
    practicalExercise: "Pegue um retalho de Lamé dourado ou prateado, aplique termocolante no verso e faça um aplique de estrela com contorno em ponto cheio na sua máquina: compare o brilho reluzente com o de um bordado comum!",
    quickSummary: "Tecido plano ou malha metálica de alto brilho e efeito espelhado, ideal para apliques de impacto visual em fantasias e moda.",
    relatedTerms: ["Aplique no Bastidor", "Lurex", "Agulha Microtex", "Ponto Satim"],
    tags: ["l-005", "lame", "tecido metalico", "lurex", "aplique", "brilho", "festa", "artrelados"],
    bibliographicReferences: [
      "TEXTILE INSTITUTE. Metallic Yarns and Foil Fabrics in Apparel Design. Manchester: Woodhead Publishing, 2021.",
      "ARTRELADOS. Apliques Tridimensionais e Tecidos Especiais: Lamé, Couro, Veludo e Glitter no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-006-laser-posicionamento-cruz-alinhamento-crosshair-system",
    code: "L-006",
    term: "Laser de Posicionamento e Cruz de Alinhamento (Crosshair Laser Alignment System)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino / Da física óptica / Diodos laser semicondutores de precisão.",
    origin: "Tecnologia de diodos laser vermelhos e verdes de baixa potência (Classe II) integrada aos cabeçotes de máquinas industriais e domésticas avançadas (Brother, Tajima, Ricoma, Barudan) para eliminar a necessidade de marcações manuais no tecido.",
    summary: "Dispositivo óptico que projeta um ponto ou cruz luminosa sobre o tecido, indicando a descida exata da agulha e a rotação angular do bastidor.",
    definition: "O Laser de Posicionamento (Laser Crosshair Pointer / Needle Drop Optical Marker) é um sistema eletrônico óptico composto por micro-diodos laser colimados instalados no cabeçote da máquina de bordar. O feixe projeta uma cruz perfeita ou um ponto luminoso brilhante diretamente sobre a superfície do tecido, marcando com exatidão milimétrica as coordenadas cartesianas (X, Y) onde a primeira descida da agulha ocorrerá. Em máquinas modernas com sistema de 2 pontos de calibração laser, o operador aponta a luz em duas marcas no tecido e a máquina calcula automaticamente a rotação angular e a escala da matriz, alinhando o bordado mesmo que o tecido tenha sido preso torto no bastidor.",
    technicalDetails: "Especificações e recursos do sistema óptico laser:\n• Tipo de Laser: Diodo semicondutor de estado sólido com comprimento de onda de 635 nm a 650 nm (vermelho) ou 520 nm (verde de alto contraste);\n• Potência Óptica: < 1 mW a 5 mW (Classe II / 2M - Seguro para os olhos em uso operacional);\n• Padrão de Projeção: Ponto único concêntrico ou Cruz Ortogonal (Crosshair de 90° com eixos X e Y);\n• Calibração de Offset: Ajuste de distância vetorial (ΔX, ΔY) na memória da máquina entre o ponto do laser e o centro da agulha 1;\n• Alinhamento Automático Angular: Giro eletrônico da matriz de 0,1° a 360° baseado na leitura de dois pontos marcados no tecido.",
    howItWorks: [
      "1. A bordadeira marca o centro do bordado no tecido com um pontinho de giz ou caneta que apaga com calor.",
      "2. Prende o tecido no bastidor e encaixa no pantógrafo da máquina.",
      "3. Ativa o botão do Laser de Posicionamento no painel de controle.",
      "4. A luz vermelha ou verde da cruz projeta-se sobre o tecido.",
      "5. O operador usa as setas direcionais do painel para mover o pantógrafo até a cruz luminosa bater exatamente em cima do ponto de giz.",
      "6. Em peças tortas, marca um segundo ponto e o painel gira a matriz digitalmente para compensar o ângulo.",
      "7. Desativa o laser e pressiona 'Start': a agulha inicia o bordado com 100% de precisão de posição e esquadro."
    ],
    beginnerExplanation: "O laser de posicionamento é como a 'mira laser' de um filme de ação instalada na sua máquina de bordar! Ele joga uma luzinha vermelha ou verde em formato de cruz bem em cima do pano, mostrando exatamente onde a agulha vai bater o primeiro ponto. Assim, você nunca mais precisa ficar adivinhando se o bordado vai sair torto ou fora de lugar: você só mexe o bastidor até a luzinha bater na sua marquinha e pronto!",
    applications: [
      "Centralização milimétrica de logotipos em bolsos, golas de camisas e jalecos",
      "Emendas perfeitas de matrizes divididas em múltiplos bastidores (Multi-Hooping)",
      "Reposicionamento rápido após erros de bastidor ou descolamentos",
      "Alinhamento rigoroso de bordados com listras e xadrezes de camisaria nobre"
    ],
    commonErrors: [
      "Olhar diretamente para o canhão do laser a curta distância por tempo prolongado",
      "Bordar sem calibrar o 'offset' do laser (quando o laser está desregulado e aponta 3 mm longe de onde a agulha realmente cai)",
      "Bater no canhão do laser com a mão durante a troca de linha, desalinhando o diodo"
    ],
    troubleshootingTips: [
      "Faça o teste de calibração do laser: desça a agulha manualmente em um retalho e veja se o ponto luminoso está perfeitamente centralizado no furo",
      "Se o laser estiver desviado, entre no menu de calibração do painel e ajuste as coordenadas X e Y do offset",
      "Limpe a lente de vidro do laser com um cotonete seco para manter a linha da cruz nítida e fina"
    ],
    dicaArtrelados: "Para fazer emendas gigantes de matrizes sem nenhuma fresta visível: use a cruz de laser! Projete a cruz sobre os dois pontos de cruzamento da matriz anterior e gire a matriz no painel até a linha do laser ficar paralela à costura. Fica uma emenda invisível e profissional!",
    voceSabia: "O laser de mira verde (520 nm) é até cinco vezes mais visível para o olho humano sob luz solar intensa do que o tradicional laser vermelho, sendo o padrão preferido nas novas máquinas de alta tecnologia!",
    practicalExercise: "Ligue o laser da sua máquina, marque um 'X' com lápis em um pedaço de tecido e mova o bastidor até sobrepor a luz da cruz ao lápis: desça a agulha com o volante e confira a precisão cirúrgica do encontro!",
    quickSummary: "Mira óptica por diodo laser em cruz ou ponto que projeta no tecido a coordenada exata da descida da agulha e calibração de ângulo.",
    relatedTerms: ["K-Grid", "Ponto de Origem", "Multi-Hooping", "Painel de Controle"],
    tags: ["l-006", "laser", "posicionamento", "crosshair", "alinhamento", "mira laser", "optica", "artrelados"],
    bibliographicReferences: [
      "BROTHER EMBROIDERY TECH. Innov-is Laser Pointer Positioning and 2-Point Angle Calibration. Nagoya: Brother, 2022.",
      "ARTRELADOS. Alinhamento Cirúrgico: Gabaritos, Lasers e Câmeras Ópticas no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

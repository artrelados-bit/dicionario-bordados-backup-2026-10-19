import { Verbete } from "../types";

export const VERBETES_LETTER_L: Verbete[] = [
  {
    "id": "l-001-lacada-lancadeira-formacao-ponto-fixo-lockstitch",
    "code": "L-001",
    "term": "Laçada da Lançadeira / Formação de Laçada (Loop Formation / Rotary Hook Catch)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica do ponto fixo (Lockstitch ISO 301).",
    "origin": "Princípio fundamental da costura automatizada concebido por Elias Howe (1846) e aperfeiçoado por Allen B. Wilson e Isaac Singer com a lançadeira rotativa contínua, permitindo laçadas estáveis em alta rotação.",
    "summary": "Fenômeno cinemático onde o bico da lançadeira captura a alça de linha superior aberta pelo rebaixo da agulha para entrelaçar com a linha da bobina.",
    "definition": "A Laçada da Lançadeira (Loop Formation / Hook Timing Catch) é o evento mecânico de precisão micrométrica em que a ponta afiada do bico da lançadeira rotativa (Hook Point) cruza por trás da agulha e penetra no interior da alça de linha superior (K-Loop). Quando a agulha atinge o ponto morto inferior (Bottom Dead Center) e sobe entre 1,8 mm e 2,2 mm, o atrito do tecido contra o fio retém a linha superior, forçando-a a abaular para fora no rebaixo da agulha (Scarf). Nesse exato milissegundo, a lançadeira passa a uma distância crítica de 0,05 mm a 0,10 mm da agulha, pesca essa alça e a expande ao redor da caixa de bobina, entrelaçando a linha de cima com a de baixo e formando o ponto fixo de bordado.",
    "technicalDetails": "Geometria e tolerâncias críticas da formação da laçada:\n• Subida da Agulha para Formação do Loop: 1,8 mm a 2,2 mm a partir do ponto mais baixo;\n• Folga Radial entre Ponta da Lançadeira e Agulha: 0,05 mm a 0,10 mm (não pode tocar nem ficar distante demais);\n• Posição do Bico da Lançadeira: Deve coincidir rigorosamente com o terço inferior do rebaixo (Scarf) da agulha, cerca de 0,5 mm a 1,0 mm acima do topo do olho da agulha;\n• Ângulo de Abertura da Laçada: Depende da torção do fio (Z-twist), da elasticidade do filamento e do amortecimento da mola de compensação (Check Spring);\n• Se a folga for > 0,15 mm: A lançadeira passa no vazio, provocando ponto pulado (Skipped Stitch);\n• Se a folga for < 0,02 mm: A ponta da lançadeira colide com a agulha, provocando quebra catastrófica de agulha e rebarbas de metal.",
    "howItWorks": [
      "1. A barra de agulha desce com a linha superior, perfura o tecido e a entretela até o ponto mais profundo (Ponto Morto Inferior).",
      "2. O servomotor continua girando e a agulha inicia uma subida controlada de exatamente 2,0 mm.",
      "3. O atrito das fibras do tecido comprime a linha, fazendo o fio projetar-se para o lado côncavo (Scarf) da agulha, abrindo uma alça aberta (laçada).",
      "4. O bico rotativo da lançadeira chega velozmente e entra por dentro dessa laçada de linha.",
      "5. A lançadeira gira, expande a laçada e a conduz ao redor de todo o corpo da caixa de bobina.",
      "6. A linha superior laça a linha de canelinha que sai do centro da bobina.",
      "7. A alavanca estica-fio sobe velozmente no cabeçote e puxa a laçada para cima, assentando o nó no coração do tecido."
    ],
    "beginnerExplanation": "Sabe como a máquina consegue dar um ponto sem que você precise costurar à mão com agulha e linha solta? Quando a agulha desce no tecido e sobe um pouquinho de nada, a linha de cima cria uma 'barriguinha' de fio bem atrás dela. Embaixo da chapa de metal tem um gancho de aço girando que parece uma colherzinha afiada (a lançadeira). Esse ganchinho passa voando, pesca essa barriguinha de linha e dá uma volta inteira na linha da bobina! É assim que o nó do bordado é feito num piscar de olhos, mil vezes por minuto!",
    "applications": [
      "Sincronização e calibração de ponto (Hook Timing) em manutenções mecânicas periódicas",
      "Diagnóstico de falhas de pontos pulados em malhas elásticas, tecidos pesados ou couro",
      "Regulagem de máquinas para bordar com fios grossos ou fios metálicos delicados",
      "Compreensão fundamental de operadores para evitar colisões de bastidor e agulha"
    ],
    "commonErrors": [
      "Bordar com a agulha torta ou inserida ao contrário (com a canaleta virada para o lado errado, impedindo a laçada de abrir)",
      "Não colocar entretela em tecidos finos (o tecido 'dança' junto com a agulha e a laçada não abre, pulando dezenas de pontos)",
      "Puxar o tecido ou o bastidor com as mãos enquanto a máquina está bordando, entortando a agulha no instante do engate da lançadeira"
    ],
    "troubleshootingTips": [
      "Se a máquina estiver pulando pontos: troque a agulha por uma nova e certifique-se de que a parte chanfrada do cabo está voltada para trás",
      "Use entretela firme para tecidos elásticos; ela dá a resistência necessária para o fio formar a alça perfeita",
      "Verifique com uma lupa se a ponta da lançadeira não está cega ou com dentes causados por impactos de agulhas anteriores"
    ],
    "dicaArtrelados": "Se você estiver bordando malha e a máquina começar a pular pontos: o problema quase nunca é a tensão! É o tecido que está subindo junto com a agulha (efeito 'flagging') e não deixando a laçada abrir. Coloque uma entretela de malha firme por baixo e use uma agulha de ponta bola (Ball Point) para resolver na hora!",
    "voceSabia": "Uma máquina industrial moderna a 1.000 pontos por minuto realiza a captura e o nó da laçada em apenas 0,06 segundos — um processo tão rápido que só pode ser visualizado com câmeras de alta velocidade capazes de gravar 5.000 quadros por segundo!",
    "practicalExercise": "Retire a chapa de agulha e a caixa de bobina da sua máquina. Gire o volante com a mão bem devagarzinho olhando com uma lanterna: veja a agulha descer, subir 2 milímetros e o bico pontiagudo da lançadeira passar exatamente atrás do furinho da agulha pescando a linha!",
    "quickSummary": "Momento mecânico em que o bico da lançadeira captura a alça de linha superior formada no rebaixo da agulha para entrelaçar o ponto.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Ponto Morto Inferior",
      "Scarf da Agulha",
      "Ponto Pulado",
      "Check Spring"
    ],
    "imageUrl": "/images/l001_lacada_lancadeira_v1.jpg?v=1",
    "imageCaption": "Cinemática da Formação de Laçada: Abertura da alça de linha no rebaixo da agulha, captura pelo bico da lançadeira rotativa e entrelaçamento com a linha da bobina em máquina de 1 agulha.",
    "tags": [
      "l-001",
      "lacada",
      "formacao de lacada",
      "hook timing",
      "lancadeira",
      "ponto fixo",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOK MANUFACTURING CO. Technical Manual on Rotary Hook Dynamics and Loop Catching Tolerances. Osaka: Koban, 2022.",
      "ARTRELADOS. A Cinemática do Ponto Fixo: Formação de Laçada, Lançadeiras e Sincronismo Micrométrico. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-002-lancadeira-rotativa-gancho-giratorio-rotary-hook",
    "code": "L-002",
    "term": "Lançadeira Rotativa (Rotary Hook / Hook Race Assembly)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Do inglês 'Rotary Hook' (gancho rotativo de precisão).",
    "origin": "Desenvolvida industrialmente pela Wheeler & Wilson e padronizada no século XX pelas fabricantes japonesas Koban, Hirose e Tajima para viabilizar rotações contínuas sem o impacto de vaivém das antigas lançadeiras oscilantes.",
    "summary": "Componente mecânico cilíndrico de aço temperado que gira continuamente em 360° sob a chapa de agulha para capturar a linha superior e alojar a bobina.",
    "definition": "A Lançadeira Rotativa (Rotary Hook / Conjunto de Gancho Giratório) é o coração mecânico do sistema inferior da máquina de bordar industrial e profissional. Diferente das máquinas domésticas de lançadeira oscilante (que vão e voltam em meia-lua), a lançadeira rotativa gira em rotação contínua e unidirecional em velocidade 2:1 (duas voltas completas a cada descida de agulha). Fabricada em ligas nobres de aço cromo-molibdênio com tratamento térmico de cementação superficial e revestimento opcional de nitreto de titânio (Duralon/Golden Hook), ela aloja a cesta da caixa de bobina e possui um bico retificado com precisão de mícron que pesca a linha da agulha sem gerar vibrações.",
    "technicalDetails": "Especificações e engenharia da lançadeira rotativa:\n• Relação de Transmissão: 2 rotações da lançadeira para 1 descida da barra de agulha (2:1 Gear Ratio);\n• Velocidade Operacional: Projetada para operar com estabilidade total de 800 a 1.500 RPM;\n• Tolerância Dimensional da Ponta: Raio de ponta r = 0,02 mm a 0,04 mm com acabamento espelhado Ra < 0,03 microns;\n• Lubrificação Automática: Canais capilares e feltros de óleo integrados que recebem microgotas da bomba de lubrificação central;\n• Revestimentos Especiais: Tratamento DLC (Diamond-Like Carbon) ou Nitreto de Titânio (TiN) para aumento de dureza até 2.500 HV e resistência térmica a atrito prolongado.",
    "howItWorks": [
      "1. A lançadeira é movida pelo eixo inferior sincronizado por engrenagens cônicas helicoidais ou correia dentada de alta rigidez.",
      "2. Quando a agulha desce e inicia a subida, a lançadeira completa sua primeira volta e o bico penetra na laçada do fio.",
      "3. O corpo da lançadeira conduz a linha ao redor da cesta interna (Bobbin Case Holder), que permanece estacionária graças à trava de dedo (Positioning Finger).",
      "4. A linha passa suavemente pela folga da trava sem prender.",
      "5. A lançadeira completa sua segunda volta livre enquanto o estica-fio recolhe o nó e o pantógrafo se movimenta para a coordenada seguinte.",
      "6. O ciclo se repete com suavidade absoluta, gerando baixo nível de ruído e alta consistência de ponto."
    ],
    "beginnerExplanation": "A lançadeira rotativa é a peça de aço super brilhante que fica girando debaixo da chapinha da máquina onde você coloca a canelinha de linha! Em vez de ficar indo e voltando, ela gira em círculos sem parar, parecendo um motorzinho de avião. Como ela gira macio e não para nunca, ela permite que sua máquina borde super rápido sem trepidar, fazendo milhares de pontos perfeitos sem embolar a linha embaixo!",
    "applications": [
      "Equipamento padrão de todas as máquinas de bordar industriais e semiprofissionais de alta velocidade",
      "Bordados contínuos de alta produção em bonés, jaquetas, uniformes e calçados",
      "Operações com fios finos e delicados que exigem passagem ultra-suave sem arestas",
      "Trabalhos intensivos de 24 horas por dia em polos de confecção seriada"
    ],
    "commonErrors": [
      "Deixar acumular poeira de linha e fiapos de entretela dentro da pista da lançadeira (a lançadeira trava e quebra engrenagens)",
      "Bordar sem colocar a gota diária de óleo mineral branco no canal da lançadeira",
      "Usar agulhas de tamanho errado que colidem com a ponta da lançadeira, lascando o aço temperado"
    ],
    "troubleshootingTips": [
      "Pingue 1 gota de óleo de máquina próprio para bordado na pista da lançadeira a cada 4 a 6 horas de trabalho contínuo",
      "Limpe a pista da lançadeira com um pincel macio toda vez que for trocar a linha de bobina",
      "Se a linha começar a arrebentar após uma quebra de agulha, passe o dedo suavemente na ponta da lançadeira: se estiver áspera, faça o polimento com lixa 2000 e pasta diamantada"
    ],
    "dicaArtrelados": "Mantenha um imã forte limpo ao lado da máquina. Quando for limpar a lançadeira com o pincel, passe a ponta imantada perto da pista: ela puxa pedacinhos minúsculos de pontas de agulha quebradas que o olho não enxerga e que poderiam riscar sua lançadeira nova!",
    "voceSabia": "As primeiras lançadeiras industriais japonesas eram polidas manualmente uma a uma por mestres cuteleiros e espadachins com pedras naturais de afiação de espadas Katana!",
    "practicalExercise": "Abra a tampa inferior da sua máquina, retire a caixa de bobina e use ar comprimido ou pincel para remover todos os fiapos acumulados na pista da lançadeira rotativa. Pingue uma gotinha de óleo e gire o volante manualmente para sentir a maciez do movimento!",
    "quickSummary": "Gancho giratório contínuo de 360° em aço temperado que captura a laçada superior e envolve a bobina com máxima estabilidade.",
    "imageUrl": "/images/l002_lancadeira_rotativa_v1.jpg?v=1",
    "imageCaption": "Mecânica de Alta Precisão da Lançadeira Rotativa em 1 Agulha: rotação contínua de 360° em aço temperado capturando a laçada superior no rebaixo da agulha e envolvendo a bobina com lubrificação periódica da pista.",
    "relatedTerms": [
      "Laçada da Lançadeira",
      "Caixa de Bobina",
      "Trava da Lançadeira",
      "Óleo Mineral Branco",
      "Hirose"
    ],
    "tags": [
      "l-002",
      "lancadeira",
      "rotary hook",
      "gancho rotativo",
      "koban",
      "hirose",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HIROSE MANUFACTURING CO. Industrial Sewing and Embroidery Rotary Hooks: Engineering Catalog & Maintenance. Osaka: Hirose, 2023.",
      "ARTRELADOS. Guia de Manutenção Mecânica: Ajuste e Lubrificação de Lançadeiras Industriais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-003-lancadeira-oscilante-sistema-meia-lua-shuttle-hook",
    "code": "L-003",
    "term": "Lançadeira Oscilante (Oscillating Shuttle Hook / CB Hook)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Do latim 'Oscillare' (balançar em vaivém) / Mecânica clássica.",
    "origin": "Mecanismo patenteado no século XIX (sistema Central Bobbin / CB Hook) que utiliza o movimento pendular de vaivém de 180° a 210°, tradicionalmente presente em máquinas de costura mecânicas e máquinas de bordar domésticas de entrada.",
    "summary": "Sistema mecânico onde a lançadeira oscila para frente e para trás em movimento semicircular para capturar a laçada de linha.",
    "definition": "A Lançadeira Oscilante (Oscillating Shuttle Hook ou Sistema CB - Central Bobbin) é o conjunto de laçada no qual o gancho de aço não gira em círculos contínuos, mas executa um movimento oscilatório de vaivém (arco de 180° a 210°). Quando a agulha desce, o gancho avança em sentido horário para pescar a laçada de linha superior; ao completar a passagem do fio ao redor da bobina, ele inverte o sentido e retorna em sentido anti-horário à posição de espera. Embora seja extremamente robusto e tolerante a pequenas variações de espessura de tecido, esse sistema impõe um limite físico de velocidade (normalmente 400 a 600 PPM) devido à inércia e vibrações geradas pela frenagem e reversão contínua do gancho.",
    "technicalDetails": "Características e limitações mecânicas da lançadeira oscilante:\n• Cinemática: Movimento alternado gerado por biela oscilante e excêntrico;\n• Limite de Velocidade: 400 a 700 PPM (acima disso, o ruído e a vibração tornam-se excessivos);\n• Desmontagem Rápida: Possui anel de retenção com travas laterais plásticas ou metálicas que dispensam ferramentas para abertura;\n• Tolerância a Fios Grossos: Excelente capacidade de tração para fios de algodão pesados e linhas 30/40;\n• Desgaste por Inércia: O impacto nas pontas de reversão exige folgas maiores (0,10 mm a 0,15 mm) entre gancho e biela de impulso.",
    "howItWorks": [
      "1. A agulha desce no tecido e sobe formando a laçada de linha superior.",
      "2. A biela empurra a lançadeira oscilante para a frente: a ponta do gancho avança e captura a laçada.",
      "3. A lançadeira conduz a linha ao redor da caixa de bobina até o nó se formar.",
      "4. O mecanismo inverte o sentido de rotação: a lançadeira para e volta para trás em movimento de ré.",
      "5. A linha é liberada para a subida do estica-fio.",
      "6. A lançadeira fica parada aguardando a próxima descida da agulha para iniciar um novo ciclo de vaivém."
    ],
    "beginnerExplanation": "A lançadeira oscilante é aquele sistema que parece uma 'meia-lua' de metal que fica balançando para lá e para cá dentro da máquina, como se fosse um pêndulo ou um balanço de parque! É um sistema muito forte e fácil de limpar (você abre as duas travinhas com o dedo e ela sai na sua mão). Ela borda muito bem, mas não pode correr muito rápido porque precisa parar e voltar a cada pontinho que dá!",
    "applications": [
      "Máquinas de costura e bordado domésticas de entrada e máquinas mecânicas híbridas",
      "Bordados manuais livres guiados com bastidor de mola (Free Motion Embroidery)",
      "Projetos com tecidos grossos, jeans pesado e linhas rústicas de algodão",
      "Ensino básico de operação e mecânica para iniciantes em confecção"
    ],
    "commonErrors": [
      "Tentar forçar a velocidade da máquina acima do recomendado, gerando barulho alto de batida metálica",
      "Montar a lançadeira ou o anel de retenção invertido após a limpeza semanal",
      "Esquecer de travar as duas abas plásticas laterais antes de ligar a máquina"
    ],
    "troubleshootingTips": [
      "Ao remontar a lançadeira oscilante: certifique-se de que a ponta central encaixou perfeitamente no pino da biela",
      "Aplique apenas 1 gota de óleo mineral na pista semicircular da lançadeira; o excesso mancha a linha e o tecido",
      "Se a máquina travar repentinamente: desligue, retire o anel de travamento e puxe o fio que ficou embolado atrás da meia-lua"
    ],
    "dicaArtrelados": "Para limpar a lançadeira oscilante: nunca use agulhas de aço ou chaves de fenda para raspar a sujeira! Use um cotonete seco ou pincel macio embebido em uma gota de óleo. Qualquer arranhão na pista metálica pode fazer a linha arrebentar para sempre!",
    "voceSabia": "O sistema de lançadeira oscilante foi aclamado na Exposição Universal de Paris de 1889 como o ápice da confiabilidade mecânica residencial, equipando mais de 100 milhões de lares durante o século XX!",
    "practicalExercise": "Em uma máquina doméstica de sistema CB, solte as duas travas plásticas, retire o anel e a meia-lua da lançadeira: limpe a pista com um pincel macio, sinta o peso do aço temperado e recoloque tudo no lugar travando com segurança!",
    "quickSummary": "Mecanismo oscilante semicircular de vaivém clássico, altamente robusto e com limite de velocidade moderado.",
    "imageUrl": "/images/l003_lancadeira_oscilante_v1.jpg?v=1",
    "imageCaption": "Mecânica da Lançadeira Oscilante (Sistema CB) em 1 Agulha: movimento pendular de vaivém em arco de 180° para captura da laçada, com anel de retenção de destravamento rápido para limpeza e manutenção preventiva.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Sistema CB",
      "Caixa de Bobina",
      "Manutenção Preventiva"
    ],
    "tags": [
      "l-003",
      "lancadeira oscilante",
      "shuttle hook",
      "cb hook",
      "meia lua",
      "mecanica",
      "domestica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BERNINA INTERNATIONAL. Hook Systems Evolution: CB Hook vs Rotary Hook Precision. Steckborn: Bernina, 2021.",
      "ARTRELADOS. Sistemas de Laçada: Lançadeiras Rotativas, Oscilantes e Verticais no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-004-la-de-bordar-fios-acrilicos-burmilana-madeira-lana",
    "code": "L-004",
    "term": "Lã de Bordar / Fios Acrílicos Felpudos de Relevo (Wool & Acrylic Embroidery Thread / Burmilana / Lana)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do latim 'Lana' / Fiação têxtil especial de alta volumetria.",
    "origin": "Desenvolvida por fabricantes europeus (Madeira Burmilana, Aurifil Lana) para reproduzir eletronicamente a estética rústica e artesanal do bordado tradicional de lã e ponto cruz à mão sobre malhas e casacos.",
    "summary": "Fio encorpado e aveludado composto por lã e acrílico que produz texturas ricas, acabamento fosco e relevo similar a pelúcia e tapeçaria.",
    "definition": "A Lã de Bordar Eletrônico (conhecida comercialmente como Madeira Burmilana / Lana 12 / Acrylic-Wool Blend) é uma linha de bordar volumosa de espessura especial (título 12wt ou Nm 20/2), composta tipicamente por 50% de lã natural e 50% de poliacrílico (ou 100% acrílico de alta tenacidade). Diferente das linhas lisas de poliéster brilhante, o fio de lã possui fibras curtas e felpudas que preenchem espaços vazios, proporcionando um visual fosco, rústico e altamente texturizado. Ao passar por uma escovação com escova de cerdas de arame após o bordado, as fibras se abrem, criando um efeito espetacular de pelo de animal, pelúcia e efeito veludo tridimensional.",
    "technicalDetails": "Propriedades e parametrização para lã de bordar:\n• Espessura do Fio: Título 12wt (cerca de 3 a 4 vezes mais grosso que a linha padrão 40wt);\n• Agulha Obrigatória: Agulha Topstitch ou Chenille calibre 90/14 a 110/18 com olho extralongo e ranhura larga para evitar desfiamento por atrito;\n• Densidade na Matriz: Reduzida em 40% a 50% (espaçamento entre pontos de 0,60 mm a 0,90 mm em ponto tatami ou cheio);\n• Tensão Superior: Levemente aliviada (tensão frouxa entre 90 e 110 gf) para não estirar nem partir o fio felpudo;\n• Velocidade da Máquina: Reduzida para 450 a 650 PPM para acomodar a espessura e evitar aquecimento na agulha.",
    "howItWorks": [
      "1. O programador digitaliza a matriz com densidade bem aberta (0,75 mm) para compensar o grande volume da lã.",
      "2. Instala-se uma agulha especial calibre 100/16 no cabeçote da máquina.",
      "3. Passa-se o fio de lã Burmilana pelos discos tensores com pressão bem aliviada.",
      "4. A máquina borda em velocidade moderada sobre malhas de tricô, moletons, jeans ou lã batida.",
      "5. O bordado preenche toda a superfície com aspecto artesanal encorpado e acabamento fosco requintado.",
      "6. Opcionalmente, o bordador esfrega uma escova especial de cerdas macias de arame sobre o bordado: as fibras se eriçam, transformando o desenho em uma textura fofa e aveludada de pelúcia."
    ],
    "beginnerExplanation": "A lã de bordar (tipo Burmilana) é uma linha gordinha e fofinha feita de lã de verdade misturada com acrílico. Em vez de ficar com aquele brilho lisinho de plástico da linha comum, ela deixa o bordado parecendo feito à mão com lã de tricô! É maravilhosa para bordar bichinhos de pelúcia, roupinhas de bebê de inverno, moletons e casacos quentinhos. Se você passar uma escovinha de pentear por cima depois de bordar, o desenho fica parecendo o pelo de um ursinho de verdade!",
    "applications": [
      "Bordados rústicos e folclóricos em casacos de inverno, jaquetas jeans e mantas",
      "Efeito realista de pelo em animais, folhagens botânicas e barba de Papai Noel",
      "Customização de moletons universitários e peças de malharia retilínea e tricô",
      "Bordados em estilo tapeçaria, ponto cruz digital e brasões vintage"
    ],
    "commonErrors": [
      "Bordar com agulha fina 75/11 comum (o fio grosso não cabe no furinho, esfiapa e quebra a cada 10 pontos)",
      "Usar matrizes digitalizadas para linha comum sem abrir o espaçamento (a matriz fica empapada de linha e quebra a agulha)",
      "Puxar a linha com tensão forte, esticando a lã até que ela perca sua felpa e arrebente"
    ],
    "troubleshootingTips": [
      "Use sempre agulha Topstitch calibre 90/14 ou 100/16 para dar passagem livre ao fio grosso",
      "Reduza a velocidade da máquina para 500 PPM para garantir formação suave de laçada",
      "Use entretela rasgável ou recortável firme para suportar o peso e a tração do bordado encorpado"
    ],
    "dicaArtrelados": "Para criar orelhas e pelos de animais super realistas: borde com fio Burmilana e depois passe uma escovinha de dentes dura ou escova de cardar cães bem de leve sobre os pontos cheios. O bordado se transforma em uma pelúcia viva de tirar o fôlego!",
    "voceSabia": "A lã foi o primeiro material utilizado pela humanidade para bordar peças de vestuário, com mantos bordados em fios de lã colorida datados de mais de 3.000 anos encontrados nas tumbas da Pérsia e do Egito Antigo!",
    "practicalExercise": "Coloque uma agulha 100/16 na sua máquina, passe um carretel de fio de lã 12wt e borde um pequeno coração com densidade de 0,8 mm: passe uma escovinha por cima e veja a mágica da textura aveludada se formar!",
    "quickSummary": "Linha encorpada e felpuda de lã/acrílico que proporciona textura rústica, acabamento fosco e relevo escovado de pelúcia.",
    "relatedTerms": [
      "Madeira Burmilana",
      "Agulha Topstitch",
      "Pintura de Agulha",
      "Densidade de Ponto"
    ],
    "tags": [
      "l-004",
      "la de bordar",
      "burmilana",
      "lana",
      "fio acrilico",
      "relevo",
      "textura",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNE. Burmilana Embroidery Thread: Working Guidelines and Brush Techniques. Freiburg: Madeira, 2023.",
      "ARTRELADOS. Fios Especiais e Texturas Nobres: Lãs, Meadas e Fios Volumosos no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-005-lame-tecido-metalico-lurex-foil-applique",
    "code": "L-005",
    "term": "Lamé (Tecido Metálico Lamé / Lurex Foil Fabric)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Do francês 'Lamé' (folheado a lâminas metálicas).",
    "origin": "Tecido luxuoso de origem francesa que utilizava lâminas de prata e ouro tecidas com seda, popularizado nos anos 1920 e modernizado no século XX com fibras sintéticas de poliéster revestidas por filmes metalizados de alta flexibilidade.",
    "summary": "Tecido brilhante de efeito espelhado ou metálico líquido, amplamente utilizado em apliques de fantasia, vestuário de festa e emblemas comemorativos.",
    "definition": "O Lamé é um tecido especial plano ou de malha caracterizado pelo entrelaçamento de fios têxteis sintéticos com fitas microscópicas de filme plástico metalizado (poliéster aluminizado ou Lurex). Apresenta altíssimo brilho metálico, aspecto reflexivo e caimento fluido. No bordado computadorizado, o Lamé é um dos materiais favoritos para a técnica de aplique (Appliqué), substituindo grandes áreas de preenchimento de pontos cheios por um fundo brilhante espelhado com enorme economia de tempo de máquina e fios. Exige cuidados de fixação e perfuração com agulhas finas de ponta aguda (Microtex) para não desfiar as fitas metálicas.",
    "technicalDetails": "Propriedades e estabilização do tecido Lamé:\n• Composição Típica: 60% a 70% Poliéster metalizado e 30% a 40% Nylon/Poliéster;\n• Sensibilidade Térmica: O filme metalizado derrete com facilidade sob temperaturas acima de 130°C (proibido ferro muito quente);\n• Comportamento sob Perfuração: Tende a rasgar ao longo das linhas de pontos se a densidade for muito alta (efeito picote de selo postal);\n• Agulha Recomendada: Agulha fina ponta aguda (Microtex / Sharp) calibre 70/10 ou 75/11 para perfuração limpa sem repuxar a malha metálica;\n• Fixação de Aplique: Termocolante definitivo ou cola spray temporária sem solventes que ataquem a metalização.",
    "howItWorks": [
      "1. Aplica-se uma película de termocolante no verso do tecido Lamé com ferro em temperatura morna (modo seda/nylon).",
      "2. A máquina borda a linha de posicionamento (Placement Stitch) sobre a entretela do bastidor.",
      "3. O bordador posiciona o pedaço de Lamé cobrindo a marcação.",
      "4. A máquina executa a costura de fixação (Tackdown Stitch) com pontos retos curtos.",
      "5. O excesso de Lamé é recortado rente com tesoura de ponta curvada (pelicano).",
      "6. A máquina finaliza o contorno com cordone (ponto satim) com densidade suave (0,40 mm) para não mastigar a borda metálica.",
      "7. O resultado é um aplique espetacular, ultra brilhante e leve."
    ],
    "beginnerExplanation": "O Lamé é aquele tecido que parece puro ouro, prata ou glitter líquido que brilha muito! É o tecido mais famoso das roupas de festa, Carnaval e fantasias de super-heróis. No bordado, a gente adora usar pedacinhos de Lamé para fazer apliques (como coroas de princesa, estrelas e asas de anjo). Em vez de você gastar milhares de pontos para preencher uma estrela amarela, você coloca um pedaço de Lamé dourado e borda só a bordinha: fica lindo, reluzente e fica pronto em 2 minutos!",
    "applications": [
      "Apliques brilhantes em fantasias de Carnaval, teatro e figurinos de espetáculos",
      "Bordados temáticos infantis (coroas, estrelas, espadas e escudos de super-heróis)",
      "Emblemas comemorativos de aniversários e festividades natalinas",
      "Bordados em moda praia luxo e moda feminina de gala"
    ],
    "commonErrors": [
      "Passar ferro muito quente direto sobre o Lamé (o plástico metálico derrete instantaneamente e gruda na base do ferro)",
      "Usar agulha grossa sem ponta que puxa e quebra as fitas metálicas do tecido",
      "Digitalizar contornos de ponto cheio com densidade ultra pesada que cortam o tecido como uma tesoura"
    ],
    "troubleshootingTips": [
      "Passe o tecido Lamé sempre pelo avesso e protegido com um tecido de algodão por cima",
      "Utilize sempre agulha Microtex 70/10 ou 75/11 nova para fazer cortes microscópicos perfeitos",
      "Use entretela hidrossolúvel no topo se o Lamé tiver textura muito lisa e reflexiva para estabilizar o calcador"
    ],
    "dicaArtrelados": "Quando for fazer apliques com Lamé: aplique entretela termocolante fina no verso dele antes de cortar. Isso encorpa o tecido, impede que ele desfie nas bordas e facilita o corte perfeito com a tesoura pelicano!",
    "voceSabia": "O tecido Lamé metálico foi o material escolhido pela NASA para confeccionar as camadas reflexivas externas dos trajes espaciais do Projeto Apollo para refletir a radiação solar na Lua!",
    "practicalExercise": "Pegue um retalho de Lamé dourado ou prateado, aplique termocolante no verso e faça um aplique de estrela com contorno em ponto cheio na sua máquina: compare o brilho reluzente com o de um bordado comum!",
    "quickSummary": "Tecido plano ou malha metálica de alto brilho e efeito espelhado, ideal para apliques de impacto visual em fantasias e moda.",
    "relatedTerms": [
      "Aplique no Bastidor",
      "Lurex",
      "Agulha Microtex",
      "Ponto Satim"
    ],
    "tags": [
      "l-005",
      "lame",
      "tecido metalico",
      "lurex",
      "aplique",
      "brilho",
      "festa",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE INSTITUTE. Metallic Yarns and Foil Fabrics in Apparel Design. Manchester: Woodhead Publishing, 2021.",
      "ARTRELADOS. Apliques Tridimensionais e Tecidos Especiais: Lamé, Couro, Veludo e Glitter no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-006-laser-posicionamento-cruz-alinhamento-crosshair-system",
    "code": "L-006",
    "term": "Laser de Posicionamento e Cruz de Alinhamento (Crosshair Laser Alignment System)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Da física óptica / Diodos laser semicondutores de precisão.",
    "origin": "Tecnologia de diodos laser vermelhos e verdes de baixa potência (Classe II) integrada aos cabeçotes de máquinas industriais e domésticas avançadas (Brother, Tajima, Ricoma, Barudan) para eliminar a necessidade de marcações manuais no tecido.",
    "summary": "Dispositivo óptico que projeta um ponto ou cruz luminosa sobre o tecido, indicando a descida exata da agulha e a rotação angular do bastidor.",
    "definition": "O Laser de Posicionamento (Laser Crosshair Pointer / Needle Drop Optical Marker) é um sistema eletrônico óptico composto por micro-diodos laser colimados instalados no cabeçote da máquina de bordar. O feixe projeta uma cruz perfeita ou um ponto luminoso brilhante diretamente sobre a superfície do tecido, marcando com exatidão milimétrica as coordenadas cartesianas (X, Y) onde a primeira descida da agulha ocorrerá. Em máquinas modernas com sistema de 2 pontos de calibração laser, o operador aponta a luz em duas marcas no tecido e a máquina calcula automaticamente a rotação angular e a escala da matriz, alinhando o bordado mesmo que o tecido tenha sido preso torto no bastidor.",
    "technicalDetails": "Especificações e recursos do sistema óptico laser:\n• Tipo de Laser: Diodo semicondutor de estado sólido com comprimento de onda de 635 nm a 650 nm (vermelho) ou 520 nm (verde de alto contraste);\n• Potência Óptica: < 1 mW a 5 mW (Classe II / 2M - Seguro para os olhos em uso operacional);\n• Padrão de Projeção: Ponto único concêntrico ou Cruz Ortogonal (Crosshair de 90° com eixos X e Y);\n• Calibração de Offset: Ajuste de distância vetorial (ΔX, ΔY) na memória da máquina entre o ponto do laser e o centro da agulha 1;\n• Alinhamento Automático Angular: Giro eletrônico da matriz de 0,1° a 360° baseado na leitura de dois pontos marcados no tecido.",
    "howItWorks": [
      "1. A bordadeira marca o centro do bordado no tecido com um pontinho de giz ou caneta que apaga com calor.",
      "2. Prende o tecido no bastidor e encaixa no pantógrafo da máquina.",
      "3. Ativa o botão do Laser de Posicionamento no painel de controle.",
      "4. A luz vermelha ou verde da cruz projeta-se sobre o tecido.",
      "5. O operador usa as setas direcionais do painel para mover o pantógrafo até a cruz luminosa bater exatamente em cima do ponto de giz.",
      "6. Em peças tortas, marca um segundo ponto e o painel gira a matriz digitalmente para compensar o ângulo.",
      "7. Desativa o laser e pressiona 'Start': a agulha inicia o bordado com 100% de precisão de posição e esquadro."
    ],
    "beginnerExplanation": "O laser de posicionamento é como a 'mira laser' de um filme de ação instalada na sua máquina de bordar! Ele joga uma luzinha vermelha ou verde em formato de cruz bem em cima do pano, mostrando exatamente onde a agulha vai bater o primeiro ponto. Assim, você nunca mais precisa ficar adivinhando se o bordado vai sair torto ou fora de lugar: você só mexe o bastidor até a luzinha bater na sua marquinha e pronto!",
    "applications": [
      "Centralização milimétrica de logotipos em bolsos, golas de camisas e jalecos",
      "Emendas perfeitas de matrizes divididas em múltiplos bastidores (Multi-Hooping)",
      "Reposicionamento rápido após erros de bastidor ou descolamentos",
      "Alinhamento rigoroso de bordados com listras e xadrezes de camisaria nobre"
    ],
    "commonErrors": [
      "Olhar diretamente para o canhão do laser a curta distância por tempo prolongado",
      "Bordar sem calibrar o 'offset' do laser (quando o laser está desregulado e aponta 3 mm longe de onde a agulha realmente cai)",
      "Bater no canhão do laser com a mão durante a troca de linha, desalinhando o diodo"
    ],
    "troubleshootingTips": [
      "Faça o teste de calibração do laser: desça a agulha manualmente em um retalho e veja se o ponto luminoso está perfeitamente centralizado no furo",
      "Se o laser estiver desviado, entre no menu de calibração do painel e ajuste as coordenadas X e Y do offset",
      "Limpe a lente de vidro do laser com um cotonete seco para manter a linha da cruz nítida e fina"
    ],
    "dicaArtrelados": "Para fazer emendas gigantes de matrizes sem nenhuma fresta visível: use a cruz de laser! Projete a cruz sobre os dois pontos de cruzamento da matriz anterior e gire a matriz no painel até a linha do laser ficar paralela à costura. Fica uma emenda invisível e profissional!",
    "voceSabia": "O laser de mira verde (520 nm) é até cinco vezes mais visível para o olho humano sob luz solar intensa do que o tradicional laser vermelho, sendo o padrão preferido nas novas máquinas de alta tecnologia!",
    "practicalExercise": "Ligue o laser da sua máquina, marque um 'X' com lápis em um pedaço de tecido e mova o bastidor até sobrepor a luz da cruz ao lápis: desça a agulha com o volante e confira a precisão cirúrgica do encontro!",
    "quickSummary": "Mira óptica por diodo laser em cruz ou ponto que projeta no tecido a coordenada exata da descida da agulha e calibração de ângulo.",
    "relatedTerms": [
      "K-Grid",
      "Ponto de Origem",
      "Multi-Hooping",
      "Painel de Controle"
    ],
    "tags": [
      "l-006",
      "laser",
      "posicionamento",
      "crosshair",
      "alinhamento",
      "mira laser",
      "optica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER EMBROIDERY TECH. Innov-is Laser Pointer Positioning and 2-Point Angle Calibration. Nagoya: Brother, 2022.",
      "ARTRELADOS. Alinhamento Cirúrgico: Gabaritos, Lasers e Câmeras Ópticas no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-007-laser-de-corte-integrado-bridge-laser-cutter",
    "code": "L-007",
    "term": "Laser de Corte Integrado / Ponte Laser de Cabeçote (Bridge Laser / On-Head Laser Cutter)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Da fotônica industrial / Sistemas de corte térmico por CO2.",
    "origin": "Desenvolvido nos anos 1990 por empresas de engenharia óptica italiana e alemã (como Sei Laser, Proel, Seit) e integrado em máquinas industriais multicabeçotes (Tajima, Barudan, SWF) para revolucionar o corte de apliques em tempo real.",
    "summary": "Sistema galvanométrico de corte por feixe laser de CO2 acoplado à máquina de bordar que recorta apliques, tecidos e couro no bastidor com precisão microscópica.",
    "definition": "O Laser de Corte Integrado (Ponte Laser / Head-Mounted Laser Cutting System) é uma tecnologia avançada que combina um gerador laser de CO2 ou fibra óptica com cabeças galvanométricas móveis sobre a linha de cabeçotes da máquina de bordar. O feixe laser focalizado recorta contornos complexos de tecidos, feltros, couros e sarjas diretamente dentro do bastidor, intercalando etapas de corte térmico e pontos de bordado em fração de segundos. Esse processo elimina completamente o recorte manual de apliques com tesouras, sela as bordas sintéticas contra desfiamento através de fusão térmica e permite a criação de efeitos vazados (Cutwork/Richelieu) e gravações em relevo (Engraving) de altíssima produtividade.",
    "technicalDetails": "Especificações e controle da ponte laser:\n• Fonte Laser: Tubo selado de CO2 com potência de 50W a 150W e comprimento de onda de 10,6 microns;\n• Sistema de Escaneamento: Espelhos galvanométricos de alta velocidade com lentes telecêntricas F-Theta;\n• Precisão de Corte: Tolerância dimensional de ± 0,05 mm e spot focal inferior a 0,15 mm de diâmetro;\n• Selagem Térmica: O calor do feixe funde instantaneamente as bordas de fibras sintéticas (poliéster, nylon), impedindo qualquer desfiamento futuro;\n• Integração CAD/CAM: O software de bordado gera simultaneamente os vetores de costura e as trilhas de corte vetorial (código G / comandos Laser ON/OFF);\n• Segurança e Exaustão: Cabines com sucção de fumaça ativa por turbinas de exaustão e filtros de carvão ativado contra gases tóxicos.",
    "howItWorks": [
      "1. O operador carrega múltiplas camadas de tecidos no bastidor da máquina multicabeçote.",
      "2. A máquina borda os pontos de sustentação ou alinhamento.",
      "3. O cabeçote comuta para o feixe laser: o galvanômetro dispara pulsos de CO2 ultra-velozes sobre o tecido.",
      "4. O laser corta a camada superior do tecido com precisão de mícron sem queimar a camada de baixo (controle milimétrico de potência).",
      "5. A fumaça é aspirada instantaneamente pelo duto de exaustão.",
      "6. A barra de agulha reassume o controle e borda o acabamento em ponto cheio (cordone) sobre a borda perfeitamente selada.",
      "7. Um lote de centenas de apliques complexos é produzido em minutos com 100% de padronização."
    ],
    "beginnerExplanation": "Imagine que, em vez de você ter que tirar o bastidor da máquina e ficar recortando o paninho do aplique com uma tesourinha na mão com todo o cuidado, a máquina tem um 'raio laser' de verdade instalado em cima dela! O laser corta o pano com precisão cirúrgica em 2 segundos e já queima a pontinha para nunca mais desfiar. Depois a agulha já vem bordando por cima na mesma hora! É a tecnologia mais rápida e moderna do mundo para fazer apliques perfeitos!",
    "applications": [
      "Produção seriada em larga escala de apliques para marcas esportivas e uniformes",
      "Confecção de bordados vazados tipo Richelieu e rendas inglesas de alta complexidade",
      "Gravação superficial e desbotamento a laser em tecidos jeans e veludo",
      "Corte de couro legítimo, sintéticos e feltro para emblemas militares e patches"
    ],
    "commonErrors": [
      "Configurar a potência do laser muito alta, queimando e chamuscando as bordas do tecido com marcas pretas",
      "Operar o laser sem o sistema de exaustão ligado, acumulando fumaça e fuligem nas lentes ópticas",
      "Deixar resíduos inflamáveis soltos dentro da área de foco do laser"
    ],
    "troubleshootingTips": [
      "Faça sempre um teste de corte em retalho para calibrar a potência (Watt) e a velocidade (mm/s) exatas para cada tipo de tecido",
      "Limpe as lentes e espelhos de reflexão óptica com lenços de papel óptico e álcool isopropílico semanalmente",
      "Para tecidos brancos ou claros, use um leve sopro de ar comprimido (Air Assist) junto ao bico laser para evitar qualquer halo amarelado"
    ],
    "dicaArtrelados": "Para cortar apliques de várias cores sobrepostas sem queimar o fundo: calibre a potência do laser para que ele penetre apenas 0,3 mm no tecido superior. O feixe corta a primeira cor e para na entretela sem encostar no tecido base!",
    "voceSabia": "Uma ponte laser industrial consegue recortar o contorno de um escudo de futebol complexo de 10 cm em menos de 1,2 segundos — um trabalho que levaria mais de 2 minutos para ser feito à mão com tesouras!",
    "practicalExercise": "Visite uma confecção industrial equipada com ponte laser ou assista a um ciclo de corte em câmera lenta: observe como o feixe invisível corta o tecido instantaneamente sem tocar na peça!",
    "quickSummary": "Dispositivo óptico térmico acoplado à máquina que corta tecidos e sela bordas no bastidor com precisão de mícron.",
    "relatedTerms": [
      "Aplique no Bastidor",
      "Richelieu",
      "Galvanômetro",
      "Selagem Térmica"
    ],
    "tags": [
      "l-007",
      "laser de corte",
      "bridge laser",
      "corte termico",
      "aplique",
      "automacao",
      "tecnologia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SEI LASER SYSTEMS. Bridge Laser Integration in Multi-Head Embroidery Machinery. Bergamo: Sei, 2022.",
      "ARTRELADOS. Tecnologias Fotônicas no Bordado Têxtil: Lasers de Corte, Gravação e Micro-Usinagem. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-008-linha-poliester-trilobal-120-2-embroidery-thread",
    "code": "L-008",
    "term": "Linha de Bordar de Poliéster Trilobal 120/2 (Trilobal Polyester Embroidery Thread 40wt)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da química de polímeros sintéticos (Polietileno Tereftalato / PET).",
    "origin": "Desenvolvida pela DuPont e aperfeiçoada nos anos 1980 por grandes fiações mundiais (Madeira Polyneon, Isacord, Coats Sylko, Setta Polifio) para superar a fragilidade das antigas linhas de viscose em máquinas industriais ultra-rápidas.",
    "summary": "A linha mais utilizada no mundo do bordado eletrônico: filamento contínuo de poliéster com seção transversal triangular que confere brilho radiante e resistência extrema a cloro e altas velocidades.",
    "definition": "A Linha de Bordar de Poliéster Trilobal (título padrão 120/2 ou 40wt) é o padrão ouro indiscutível da indústria moderna do bordado computadorizado. Ao contrário das fibras de seção circular comum, os filamentos de poliéster trilobal são extrudados com uma seção transversal em formato de triângulo de três pontas convexas. Essa geometria atua como microprismas ópticos que refletem a luz em múltiplos ângulos simultâneos, conferindo ao bordado um brilho sedoso semelhante ao da seda e da viscose, combinado com a tenacidade e resistência química absoluta do poliéster virgem.",
    "technicalDetails": "Propriedades físicas e mecânicas da linha de poliéster trilobal:\n• Título Internacional: Nº 40 (40wt) / Tex 27 / Denier 120/2 (dois cabos torcidos de 120 deniers);\n• Força de Ruptura (Tenacidade): 1.100 cN a 1.350 cN (suporta rotações de até 1.500 PPM sem romper);\n• Alongamento na Ruptura: 18% a 24% de elasticidade elástica recuperável que acomoda a tração do pantógrafo;\n• Resistência Química Total: 100% resistente ao alvejamento com cloro (hipoclorito de sódio), lavagens industriais a 95°C e lavagem a seco;\n• Ponto de Fusão: 250°C a 260°C (resiste ao ferro de passar e ao atrito térmico no olho da agulha);\n• Agulha Indicada: Agulha universal para bordado calibre 75/11 ou 80/12 com ponta bola fina (SES/RG).",
    "howItWorks": [
      "1. A linha sai do cone superior, desenrolando-se verticalmente pelo porta-fios.",
      "2. Passa pelos discos tensores metálicos calibrados com tensão média de 110 a 130 gramas-força.",
      "3. O filamento trilobal passa pelo olho da agulha 75/11 em velocidade de até 1.200 batidas por minuto.",
      "4. O formato triangular reflete a iluminação do ambiente com brilho intenso e uniforme.",
      "5. A elasticidade recuperável acomoda o estiramento durante a amarração dos nós sem estourar o fio.",
      "6. A peça bordada pode ser lavada repetidamente com alvejante e sabão alcalino sem desbotar nem desbotar as cores."
    ],
    "beginnerExplanation": "A linha de poliéster trilobal é a 'superlinha' de bordado que todo mundo usa! Ela tem duas coisas mágicas: primeiro, ela brilha muito bonito parecendo seda pura porque seus fiozinhos têm formato de tri��ngulo que refletem a luz. Segundo, ela é super forte! Ela não arrebenta fácil na máquina rápida e você pode lavar a toalha ou o uniforme até com cândida e cloro que a cor não sai e o bordado não desbota nunca!",
    "applications": [
      "Bordados em uniformes profissionais, jalecos e roupas de trabalho submetidas a lavagens pesadas",
      "Enxovais de bebê, toalhas de banho e cama lavadas frequentemente",
      "Bonés, jaquetas, tênis e materiais promocionais corporativos",
      "O fio padrão para 95% de todas as matrizes e trabalhos do ateliê de bordado"
    ],
    "commonErrors": [
      "Bordar com linha de costura comum de poliéster fiado (spun) que é cheia de fiapos, fosca e arrebenta a cada minuto",
      "Usar tensão excessivamente apertada nos tensores (a elasticidade da linha puxa o tecido e cria rugas após tirar do bastidor)",
      "Guardar os cones expostos ao sol direto e poeira por anos, ressecando a lubrificação de silicone do fio"
    ],
    "troubleshootingTips": [
      "Calibre a tensão superior para que o avesso do ponto cheio mostre 1/3 de linha de cima nas laterais e 1/3 de linha branca de bobina no meio",
      "Mantenha uma redinha protetora (Thread Net) nos cones de poliéster que desenrolam com muita facilidade",
      "Compre sempre linhas de marcas consagradas com certificação Oeko-Tex para garantir cores vivas e lubrificação homogênea"
    ],
    "dicaArtrelados": "Para saber se a sua linha de poliéster é de alta qualidade: pegue um pedaço de 30 cm e puxe com as duas mãos até quebrar. Ela deve esticar um pouquinho suavemente antes de arrebentar com um estalo limpo, sem desfiar em cabelinhos soltos!",
    "voceSabia": "O formato trilobal foi inspirado na estrutura microscópica dos prismas de cristal lapidados e nas escamas das asas das borboletas azuis Morpho da Amazônia, que geram cor e brilho puramente pela refração da luz!",
    "practicalExercise": "Compare um bordado feito com linha de poliéster trilobal e outro feito com linha de algodão comum sob uma lâmpada: observe como o poliéster trilobal reluz e cria um efeito vivo de profundidade tridimensional!",
    "quickSummary": "Linha de bordar 40wt de filamento sintético triangular de alto brilho, tenacidade extrema e resistência total a cloro e lavagens.",
    "relatedTerms": [
      "Linha de Rayon",
      "Polyester 40wt",
      "Isacord",
      "Madeira Polyneon",
      "Tensão Superior"
    ],
    "tags": [
      "l-008",
      "poliester trilobal",
      "linha de bordar",
      "40wt",
      "120-2",
      "resistencia",
      "brilho",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMANN GROUP. Isacord Polyester Continuous Filament Technical Specification. Bönnigheim: Amann, 2022.",
      "ARTRELADOS. Ciência dos Fios de Bordado: Polímeros, Geometria Trilobal e Resistência Físico-Química. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-009-linha-viscose-rayon-brilho-sedoso-maciez-artesanal",
    "code": "L-009",
    "term": "Linha de Bordar de Viscose / Rayon (Rayon Embroidery Thread / Filamento de Celulose 40wt)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da química da celulose regenerada / Seda artificial.",
    "origin": "Criada no final do século XIX pelo conde Hilaire de Chardonnet (a primeira fibra artificial da história, derivada da polpa de madeira) e consagrada como a linha de bordado de maior prestígio artístico mundial (Madeira Classic, Sulky Rayon, Gunold Sulky).",
    "summary": "Linha nobre de celulose vegetal regenerada renomada pelo toque ultra-macio, caimento fluido impecável e brilho aveludado profundo.",
    "definition": "A Linha de Bordar de Viscose (Rayon 40wt / Celulose Regenerada) é a linha clássica por excelência da alta-costura e do bordado de luxo. Produzida a partir da celulose natural purificada de árvores de reflorestamento, a viscose combina a nobreza e a maciez da seda natural com a uniformidade de um filamento contínuo industrial. Ao contrário do poliéster (que possui uma leve rigidez plástica), o fio de viscose é incrivelmente maleável, assentando-se com perfeição sobre tecidos nobres, sedas, linhos e rendas sem repuxar nem criar aspecto endurecido.",
    "technicalDetails": "Propriedades físicas e químicas da linha de viscose/rayon:\n• Composição: 100% Viscose / Celulose Regenerada de alta pureza;\n• Título Padrão: Nº 40 (40wt / 120/2 Denier);\n• Resistência à Tração: 850 cN a 1.050 cN (ligeiramente menor que o poliéster, exigindo tensões mais suaves e passagens sem atrito);\n• Maciez e Maleabilidade: Menor módulo de rigidez elástica, garantindo bordados macios ao toque da pele (ideal para moda íntima e bebês);\n• Sensibilidade Química: NÃO resiste a alvejantes clorados (o cloro destrói as moléculas de celulose e rasga o fio);\n• Brilho: Brilho aveludado profundo e orgânico, sem o reflexo vítreo ou plástico de alguns fios sintéticos.",
    "howItWorks": [
      "1. A linha de viscose é conduzida pelo circuito de fios com tensores calibrados de forma mais suave (100 a 115 gf).",
      "2. A agulha 75/11 penetra no tecido com mínima resistência mecânica.",
      "3. Como o fio é extremamente flexível, os pontos assentam-se com planicidade perfeita sobre as fibras do tecido.",
      "4. O desenho bordado ganha um brilho sutil, nobre e tridimensional que se adapta ao movimento da roupa.",
      "5. O toque final sobre a peça é sedoso, aveludado e totalmente livre de aspereza.",
      "6. A peça deve ser lavada com sabão neutro e sem alvejantes clorados para preservar o brilho e a integridade das fibras."
    ],
    "beginnerExplanation": "A linha de viscose (Rayon) é a linha mais macia e chique do mundo do bordado! Ela é feita a partir de plantas e madeira, parecendo seda de verdade. Quando você passa a mão por cima de um bordado feito com viscose, ele é tão fofinho e macio que não pinica nada na pele! É a linha perfeita para bordar vestidos de festa, camisas finas de seda e roupinhas delicadas de bebê. Só tem um segredinho: não pode lavar com cloro nem alvejante forte!",
    "applications": [
      "Bordados de alta-costura, vestidos de noiva, véus e moda festa",
      "Enxovais nobres em seda pura, cetim, linho belga e algodão egípcio",
      "Monogramas elegantes em camisas sociais e gravatas de seda",
      "Bordados artísticos de pintura de agulha com degradês botânicos ricos"
    ],
    "commonErrors": [
      "Lavar peças bordadas em viscose com alvejantes à base de cloro ou água sanitária (o bordado desmancha)",
      "Puxar a linha com tensão muito dura de poliéster, provocando quebras frequentes",
      "Bordar em velocidade extrema (1.200 PPM) em máquinas com guias de linha ásperas ou riscadas"
    ],
    "troubleshootingTips": [
      "Alivie ligeiramente a tensão superior em cerca de 10% a 15% ao trocar de poliéster para viscose",
      "Instale uma agulha com olho polido (Embroidery Needle com revestimento de cromo) para evitar atrito nas fibras de celulose",
      "Oriente sempre os clientes de enxovais finos a lavarem as peças bordadas com sabão neutro líquido"
    ],
    "dicaArtrelados": "Se você quer um monograma em camisa social masculina com visual de alfaiataria italiana de luxo: use linha de viscose nº 40 em tom champanhe ou azul marinho. O brilho sedoso e discreto da viscose dá um ar de elegância que o poliéster não consegue igualar!",
    "voceSabia": "Nas décadas de 1950 a 1980, mais de 98% de todos os bordados industriais do planeta eram feitos obrigatoriamente com fios de viscose (Rayon), pois o poliéster para bordar ainda não havia sido inventado!",
    "practicalExercise": "Borde dois monogramas idênticos lado a lado em um pedaço de tecido de linho: um com poliéster e outro com viscose (rayon). Feche os olhos e passe os dedos por cima de ambos para sentir a diferença marcante de maciez e toque!",
    "quickSummary": "Linha nobre de celulose regenerada de brilho aveludado e maciez incomparável, ideal para alta-costura e enxovais de luxo.",
    "relatedTerms": [
      "Linha de Poliéster",
      "Madeira Classic",
      "Seda Artificial",
      "Bordado de Luxo"
    ],
    "tags": [
      "l-009",
      "viscose",
      "rayon",
      "linha de bordar",
      "seda artificial",
      "maciez",
      "luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNE. Classic Rayon Technical Guide and Care Instructions. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Fibras Celulósicas e Naturais: A Nobreza da Viscose e do Linho no Bordado Contemporâneo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-010-linha-de-bobina-canelinha-filament-polyester-60-80wt",
    "code": "L-010",
    "term": "Linha de Bobina / Fio de Canelinha (Bobbin Thread / Filament Polyester 60-80wt)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do sistema de alimentação inferior da máquina.",
    "origin": "Desenvolvida pelas fiações têxteis para fornecer um fio ultrafino, macio e ultra-resistente que coubesse em grande metragem dentro da pequena canelinha de metal (Bobbin), reduzindo as paradas de máquina para troca.",
    "summary": "Linha fina de poliéster (título 60wt a 80wt) utilizada exclusivamente na canelinha inferior para ancorar os pontos e garantir o avesso perfeito.",
    "definition": "A Linha de Bobina (Bobbin Thread / Linha de Canelinha) é o fio sintético de alta tenacidade e espessura reduzida (título 60wt a 80wt / Tex 12 a 18) projetado especificamente para o abastecimento da bobina inferior da máquina de bordar. Fabricada em filamento contínuo de poliéster 100% ou poliéster fiado de microfibra (geralmente nas cores branca ou preta), ela é significativamente mais fina que a linha colorida superior (40wt). Essa diferença de espessura permite que uma única canelinha aloje de 100 a 140 metros de fio, reduz o volume e a rigidez no verso do bordado e assegura que a linha de cima seja puxada suavemente para o avesso, gerando a clássica proporção de 1/3 no teste da coluna de satim.",
    "technicalDetails": "Propriedades e parametrização da linha de bobina:\n• Título Típico: Nº 60 (60wt) ou Nº 80 (80wt) em filamento contínuo de poliéster;\n• Apresentação: Cones grandes de 5.000m a 20.000m para enchedor ou Bobinas Pré-Enroladas com núcleo magnético (Pre-wound Bobbins Magnetic Core);\n• Cores Padronizadas: Branca (para 90% dos bordados claros e médios) e Preta (para tecidos escuros e jaquetas pretas);\n• Tensão de Caixa de Bobina: Calibrada entre 18 e 25 gramas-força no tensiômetro Towa;\n• Vantagem Estrutural: A espessura fina evita o acúmulo de nós e calombos no avesso do bordado, deixando a peça macia ao toque.",
    "howItWorks": [
      "1. A canelinha é enrolada com linha de bobina 60/80 com enrolamento paralelo e uniforme.",
      "2. Encaixa-se a canelinha dentro da caixa de bobina, passando a linha sob a mola tensora.",
      "3. Ao costurar, a linha de bobina é capturada pela laçada da linha superior que desce com a agulha.",
      "4. Como a linha de bobina é fina e macia, ela se assenta no centro do tecido sem aparecer na frente.",
      "5. No verso do bordado, a linha de bobina ocupa exatamente a faixa central de 1/3 da largura dos pontos cheios.",
      "6. A alta metragem da bobina permite bordar milhares de pontos antes de necessitar de reabastecimento."
    ],
    "beginnerExplanation": "A linha de bobina (a famosa 'linha de canelinha') é aquela linha fininha, macia e geralmente branquinha que fica guardada lá dentro da caixinha redonda embaixo da máquina! Ela serve para 'segurar' e dar o nó na linha colorida de cima. Como ela é bem fininha, cabe um montão de linha dentro da canelinha para você não ter que ficar parando o bordado toda hora para encher bobina!",
    "applications": [
      "Alimentação inferior obrigatória de todas as máquinas de bordar computadorizadas",
      "Garantia de avesso limpo e sem aspereza em peças de vestuário e moda infantil",
      "Uso de linha de bobina preta para bordar tecidos pretos, bonés escuros e couro",
      "Bobinas magnéticas pré-bobinadas para linhas industriais de altíssima produtividade"
    ],
    "commonErrors": [
      "Usar linha de bordar colorida grossa 40wt na canelinha (a bobina acaba muito rápido e o bordado fica duro como papelão)",
      "Encher a canelinha na mão com voltas frouxas e desiguais (a linha tranca na mola da caixa de bobina e estoura a linha de cima)",
      "Usar linha de bobina branca em um tecido preto com ponto mal tensionado (a linha branca sobe para a frente e estraga a peça)"
    ],
    "troubleshootingTips": [
      "Adote o uso de bobinas pré-bobinadas com núcleo magnético para ter 100% de uniformidade de tensão do primeiro ao último metro",
      "Use canelinha preta sempre que estiver bordando sobre tecidos pretos ou marinho escuro",
      "Calibre a mola da caixa de bobina usando o 'teste da gota' ou um tensiômetro Towa regulado em 22 gf"
    ],
    "dicaArtrelados": "Nunca use canelinhas enferrujadas, tortas ou amassadas! Uma canelinha torta raspa na parede interna da lançadeira, faz a máquina trepidar e causa quebras misteriosas de linha superior a cada 2 minutos!",
    "voceSabia": "Uma canelinha moderna com linha de poliéster 80wt em núcleo magnético consegue armazenar até 140 metros de linha contínua — o suficiente para bordar mais de 40.000 pontos sem nenhuma troca!",
    "practicalExercise": "Olhe para o avesso de um bordado de ponto cheio na sua máquina: confira se a linha branca da canelinha está formando uma faixa perfeita no terço central, com duas faixas da linha colorida de cima nas laterais!",
    "quickSummary": "Linha sintética ultrafina de poliéster 60-80wt para canelinha, essencial para avessos macios e nós perfeitamente equilibrados.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Pre-wound Bobbins",
      "Coluna de Satim"
    ],
    "tags": [
      "l-010",
      "linha de bobina",
      "canelinha",
      "bobbin thread",
      "60wt",
      "80wt",
      "tensao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COATS GROUP. Epic and Sylko Bobbin Threads: Tension Dynamics in High-Speed Lockstitch. London: Coats, 2022.",
      "ARTRELADOS. A Arte do Avesso Perfeito: Linhas de Bobina, Tensiômetros e Calibração de Canelinhas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-011-linha-metalica-fios-lurex-metalizados-brilho-glamour",
    "code": "L-011",
    "term": "Linha Metálica / Fios Lurex e Metalizados (Metallic Embroidery Thread / Lurex Core Yarn)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da metalização a vácuo sobre filmes de poliéster.",
    "origin": "Evolução moderna dos antiquíssimos fios de ouro e prata legítimos (Passamanaria Real do século XVII), substituídos por filmes de poliéster aluminizado a vácuo desenvolvidos pela Lurex Company nos anos 1940.",
    "summary": "Linha composta por uma alma central têxtil envolta por uma fita microscópica de poliéster metalizado com alumínio e verniz colorido de alto brilho reluzente.",
    "definition": "A Linha Metálica de Bordar (Metallic Thread / Fio Lurex de Bordar) é uma linha de alta complexidade estrutural, composta por um núcleo central (alma) de filamentos de poliamida (Nylon) ou poliéster, ao redor do qual é enrolada em espiral uma fita micrométrica de filme de poliéster metalizado com vapor de alumínio sob vácuo e revestida por uma resina de verniz transparente ou dourada. Seu aspecto visual simula o brilho reluzente de metais preciosos (ouro, prata, bronze, cobre, platina e tons holográficos). Por apresentar maior rigidez à flexão, atrito térmico e tendência a torção espiralada, a linha metálica exige técnicas específicas de passagem de linha, agulhas com olho largo e velocidades reduzidas.",
    "technicalDetails": "Construção e parametrização para fios metálicos:\n• Estrutura do Fio: 65% a 70% Poliéster metalizado e 30% a 35% Alma de Poliamida/Nylon;\n• Título Típico: Nº 40 (40wt) ou Nº 50 (fios metálicos finos para detalhes delicados);\n• Agulha Obrigatória: Agulha Especial para Bordado Metálico (Metallic Needle) calibre 80/12 ou 90/14 com olho superdimensionado e canaleta profunda revestida de teflon;\n• Tensão Superior: Reduzida em 30% a 40% (tensão ultra-frouxa entre 70 e 90 gf) para evitar que a lâmina metálica se descasque da alma;\n• Velocidade Recomendada: 450 a 650 PPM (velocidades acima de 800 PPM aquecem a agulha e derretem a folha de alumínio);\n• Densidade na Matriz: Reduzida em 15% a 20% (espaçamento entre pontos de 0,45 mm a 0,55 mm) para evitar o acúmulo de camadas rígidas.",
    "howItWorks": [
      "1. O cone de linha metálica é instalado no porta-fios com uma redinha protetora de malha elástica.",
      "2. O fio é passado pelos tensores com pressão bem aliviada e sem voltas extras nos guias de arame.",
      "3. Instala-se uma agulha Metallic 80/12 ou 90/14 nova no cabeçote.",
      "4. A máquina borda em velocidade moderada sobre o tecido devidamente estabilizado.",
      "5. A lâmina metálica desliza suavemente pelo olho alongado da agulha sem sofrer atrito nem descascar.",
      "6. Os pontos assentam-se com brilho reflexivo espetacular de metal polido.",
      "7. Ao final, a peça ganha um acabamento nobre, luxuoso e de altíssimo valor comercial agregado."
    ],
    "beginnerExplanation": "A linha metálica é aquela linha dourada, prateada ou furacorda que parece puro metal precioso e reluz como uma joia! Ela é um pouquinho 'temperamental' para bordar porque não é uma linha comum: ela tem uma capinha de papel metálico brilhante enrolada num fiozinho de nylon. Para bordar com ela sem arrebentar, basta colocar uma agulha própria de bordado metálico (que tem o furinho bem grandão), afrouxar a tensão da máquina e diminuir a velocidade para a máquina trabalhar macia!",
    "applications": [
      "Bordados litúrgicos, paramentos sacerdotais e mantos sacros",
      "Emblemas militares nobres, dragomas, quepes e distintivos navais",
      "Moda festa luxo, vestidos de noiva, corsets e figurinos de gala",
      "Detalhes cintilantes em matrizes de Natal, coroas e brasões heráldicos"
    ],
    "commonErrors": [
      "Bordar com linha metálica usando agulha fina comum 75/11 (o atrito descasca a folha metálica e embola tudo no olho da agulha)",
      "Bordar em velocidade máxima de 1.000 PPM (a agulha esquenta como brasa e arrebenta a linha a cada 15 segundos)",
      "Deixar a tensão superior apertada (a linha metálica se comporta como arame e quebra na laçada da lançadeira)"
    ],
    "troubleshootingTips": [
      "Coloque uma redinha (Thread Net) no cone e posicione-o a pelo menos 50 cm de distância do cabeçote para que o fio desenrole desespiralizado",
      "Aplique uma gotinha de lubrificante de silicone líquido especial para linhas na esponjinha guia do cabeçote",
      "Use sempre entretela de boa qualidade para amortecer as batidas da agulha no tecido"
    ],
    "dicaArtrelados": "O segredo de ouro da linha metálica: afaste o cone da máquina! Coloque o cone de linha dourada em uma caneca ou suporte a cerca de 1 metro de distância da máquina. O fio viaja pelo ar, perde toda a torção e entra no cabeçote lisinho como manteiga!",
    "voceSabia": "Na Idade Média, as linhas metálicas eram feitas de fios de prata e ouro maciço martelados à mão tão pesados que um único manto real bordado podia pesar mais de 15 quilos!",
    "practicalExercise": "Coloque uma agulha Metallic 90/14, passe uma linha dourada com tensão frouxa e borde um monograma em velocidade de 500 PPM: veja como o bordado flui sem nenhuma quebra e com brilho de joalheria!",
    "quickSummary": "Linha nobre com alma de nylon envolta em filme metalizado de alumínio que confere brilho de ouro e prata ao bordado.",
    "relatedTerms": [
      "Agulha Metallic",
      "Redinha de Linha",
      "Tensão Superior",
      "Lurex",
      "Bordado Litúrgico"
    ],
    "tags": [
      "l-011",
      "linha metalica",
      "lurex",
      "ouro",
      "prata",
      "brilho",
      "agulha metallic",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNE. Metallic Embroidery Threads: Operation, Needle Selection and Tension Settings. Freiburg: Madeira, 2023.",
      "ARTRELADOS. Ouro, Prata e Luz: Guia Definitivo para Dominar Linhas Metálicas e Especiais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-012-linha-matizada-multicolorida-variegated-space-dyed",
    "code": "L-012",
    "term": "Linha Matizada / Multicolorida (Variegated & Space-Dyed Embroidery Thread)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do processo de tinturaria por zonas descontínuas.",
    "origin": "Técnica de tinturaria têxtil artesanal e industrial (Space-Dyeing) desenvolvida para tingir filamentos contínuos de viscose ou poliéster com intervalos programados de cores alternadas ao longo de todo o carretel.",
    "summary": "Linha de bordar tingida com sequências multicoloridas ou degradês contínuos que geram efeitos artísticos, sombras e listras naturais sem troca de carretel.",
    "definition": "A Linha Matizada (Variegated Thread / Fio Multicolorido Space-Dyed / Multicores) é uma linha de bordar cujo filamento recebe múltiplos banhos de cor em intervalos métricos precisos e repetitivos (de 3 cm a 10 cm por tonalidade) durante o processo de fiação. As variações podem ser monocromáticas (tons sobre tom, como do azul marinho ao azul celeste) ou policromáticas (arco-íris, tons terrosos, outono). Quando bordada em pontos cheios, tatami ou pontos corridos, a linha matizada cria automaticamente efeitos espetaculares de sombreamento, água em movimento, folhagens vivas e transições orgânicas sem a necessidade de nenhuma parada de máquina para troca de cor.",
    "technicalDetails": "Características e aplicação da linha matizada:\n• Processo de Tingimento: Tingimento por zonas programadas (Space-Dyeing) com fixação de alta solidez à luz e à lavagem;\n• Intervalo de Repetição de Cor: Segmentos de cor variando entre 25 mm e 75 mm de comprimento ao longo do fio;\n• Espessura Padrão: Título 40wt em Poliéster Trilobal ou Viscose Rayon 120/2;\n• Comportamento Geométrico na Matriz: A orientação do ângulo do ponto tatami ou satim altera drasticamente o padrão visual de manchas ou listras formadas;\n• Agulha Recomendada: Agulha padrão para bordado calibre 75/11 ou 80/12 com ponta bola leve (SES).",
    "howItWorks": [
      "1. A bordadeira escolhe uma matriz digitalizada com áreas amplas de ponto cheio, monogramas ou motivos florais.",
      "2. Carrega um carretel de linha matizada (por exemplo, degradê verde folha) na agulha da máquina.",
      "3. A máquina borda o desenho continuamente em uma única etapa sem interrupções.",
      "4. À medida que o fio avança, as cores alternam-se naturalmente a cada grupo de pontos.",
      "5. O bordado ganha profundidade artística, luz e sombra orgânicas de forma totalmente automatizada.",
      "6. Cada peça bordada adquire uma distribuição de cores única e exclusiva."
    ],
    "beginnerExplanation": "A linha matizada é aquela linha mágica que tem várias cores ou vários tons diferentes no mesmo carretel! Conforme a máquina vai bordando, a cor vai mudando sozinha: começa azul claro, fica azul escuro, depois azul médio e assim por diante. É perfeita para bordar nomes, flores, folhas, chamas de fogo e ondas do mar! O bordado fica parecendo uma pintura artística feita à mão, e você não precisa trocar de linha nenhuma vez!",
    "applications": [
      "Monogramas sofisticados e nomes personalizados em toalhas e mantas",
      "Pétalas de flores, folhagens de plantas, penas de pássaros e pelagens de animais",
      "Efeitos de água, ondas do mar, céus com nuvens e pôr do sol",
      "Bordados em ponto cruz computadorizado e barrados decorativos"
    ],
    "commonErrors": [
      "Usar linha matizada em desenhos muito pequenininhos e cheios de detalhes minúsculos (as cores se misturam e o desenho fica confuso)",
      "Digitalizar a matriz com muitos cortes e nós curtos (interrompe o ciclo natural e harmônico do degradê da linha)",
      "Combinar uma linha matizada muito chamativa com um tecido estampado muito poluído visualmente"
    ],
    "troubleshootingTips": [
      "Use linhas matizadas sobre tecidos lisos e de cor neutra para que o efeito degradê se destaque com máxima elegância",
      "Para monogramas, utilize fontes cursivas mais encorpadas com colunas de ponto cheio de pelo menos 3,0 mm de largura",
      "Em pontos de preenchimento tatami, experimente mudar o ângulo do ponto em 45° para obter padrões visuais de listras onduladas incríveis"
    ],
    "dicaArtrelados": "Para criar folhas e flores ultra realistas: use uma linha matizada verde que varia do verde-oliva ao verde-claro. Suas folhas bordadas nunca mais vão parecer desenhos planos de plástico e ganharão vida como folhas de verdade na natureza!",
    "voceSabia": "O tingimento multicolorido em meadas de seda era um dos segredos mais protegidos das corporações de bordadeiras da Dinastia Ming na China Antiga, que usavam extratos de raízes e flores para criar meadas com até dez cores secretas!",
    "practicalExercise": "Borde uma folha grande ou um monograma com linha verde matizada e outro idêntico com linha verde lisa: coloque os dois lado a lado e repare como a linha matizada cria luz, sombra e volume naturalmente!",
    "quickSummary": "Linha tingida com sequências multicoloridas ou degradês que cria efeitos artísticos e sombreados automáticos sem troca de fio.",
    "relatedTerms": [
      "Space-Dyeing",
      "Pintura de Agulha",
      "Degradê no Bordado",
      "Ponto Tatami"
    ],
    "tags": [
      "l-012",
      "linha matizada",
      "variegated",
      "space dyed",
      "multicolorida",
      "degrade",
      "cores",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SULKY OF AMERICA. The Art of Embroidering with Variegated and Blendables Threads. Kennesaw: Sulky, 2021.",
      "ARTRELADOS. Cromatismo Têxtil: Efeitos Degradê, Matizes e Ilusão de Óptica no Bordado Eletrônico. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-013-linha-fotoluminescente-glow-in-the-dark-fosforescente",
    "code": "L-013",
    "term": "Linha Fotoluminescente / Glow-in-the-Dark (Phosphorescent Embroidery Thread)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da física dos pigmentos inorgânicos de fósforo/aluminato.",
    "origin": "Desenvolvida com cristais sintéticos de aluminato de estrôncio dopado com európio (tecnologia fotoluminescente moderna) para aplicações em segurança noturna e vestuário esportivo.",
    "summary": "Linha especial que absorve luz natural ou artificial e emite um brilho luminoso esverdeado ou azulado no escuro total por várias horas.",
    "definition": "A Linha Fotoluminescente (Glow-in-the-Dark Embroidery Thread / Fio Fosforescente) é uma linha técnica de poliéster ou poliamida que incorpora micro-pigmentos inorgânicos fosforescentes na massa polimérica durante a extrusão do fio. Esses cristais absorvem fótons de luz visível ou ultravioleta (UV) quando expostos a lâmpadas ou à luz solar, armazenando energia em nível atômico. No escuro total, essa energia acumulada é liberada lentamente na forma de luz visível (geralmente em tons de verde-limão, azul-neon ou aqua) com duração de 2 a 8 horas, recarregando-se infinitamente sem perder a capacidade luminosa.",
    "technicalDetails": "Propriedades e operação com fio fotoluminescente:\n• Composição: Poliéster ou Nylon com micropartículas de aluminato de estrôncio não tóxicas e livres de radiação;\n• Título Típico: Nº 40 (40wt / 120/2 Denier);\n• Tempo de Recarga: 10 a 15 minutos sob luz solar direta ou luz UV (lâmpada negra);\n• Autonomia Luminosa: Brilho intenso nos primeiros 30 minutos, mantendo luminescência residual visível por até 6 horas;\n• Resistência à Lavagem: Suporta lavagens domésticas normais até 40°C sem sabões clorados abrasivos;\n• Agulha Indicada: Agulha padrão para bordado calibre 75/11 ou 80/12 com ponta bola fina (SES).",
    "howItWorks": [
      "1. A linha fotoluminescente (de aparência branca, off-white ou verde-clara à luz do dia) é instalada na máquina de bordar.",
      "2. O bordado é executado normalmente em pijamas, camisetas, fantasias de Halloween ou uniformes de segurança.",
      "3. Durante o dia ou em ambientes iluminados, o bordado apresenta aspecto limpo e discreto.",
      "4. Quando exposta à luz, a peça carrega sua energia luminosa instantaneamente.",
      "5. Ao apagar as luzes, o desenho brilha no escuro com luminosidade esverdeada brilhante.",
      "6. A peça pode ser lavada e recarregada milhares de vezes ao longo de muitos anos."
    ],
    "beginnerExplanation": "A linha Glow-in-the-Dark é a famosa linha que 'brilha no escuro'! De dia, ela parece uma linha branquinha comum, mas basta você deixar a peça um pouquinho no sol ou embaixo de uma lâmpada acesa que ela carrega como se fosse uma bateria mágica. Quando você apaga a luz do quarto, o desenho acende todinho no escuro com uma cor verde fluorescente super divertida! As crianças são apaixonadas por essa linha em pijaminhas, fantasias de esqueleto e estrelinhas no teto!",
    "applications": [
      "Pijamas infantis, almofadas de berço e enxovais temáticos espaciais (estrelas, luas, planetas)",
      "Fantasias temáticas de Halloween, cosplay e roupas para festas e baladas com luz negra",
      "Uniformes de segurança noturna, jaquetas para ciclistas e corredores noturnos",
      "Etiquetas de localização em mochilas de trilha, barracas de camping e estojos"
    ],
    "commonErrors": [
      "Lavar com cândida ou alvejantes à base de cloro (o cloro degrada os cristais fosforescentes e apaga o efeito)",
      "Passar ferro de passar muito quente direto sobre o bordado (o calor excessivo danifica o brilho)",
      "Bordar com tensão muito apertada que esmague e quebre as micropartículas luminosas do fio"
    ],
    "troubleshootingTips": [
      "Use lâmpada de luz negra (UV) no ateliê para testar instantaneamente a intensidade do brilho antes de entregar ao cliente",
      "Prefira preenchimentos em ponto cheio ou tatami de boa densidade para concentrar mais linhas e aumentar a intensidade da luz emitida",
      "Oriente o cliente a não passar ferro quente direto sobre o bordado fosforescente, passando sempre pelo avesso"
    ],
    "dicaArtrelados": "Para fazer bordados espaciais de cair o queixo: borde o contorno dos planetas com linha colorida comum e borde as estrelas e a lua com linha Glow-in-the-Dark. De dia fica um bordado fofo, e de noite o quarto da criança se transforma em um céu estrelado brilhante!",
    "voceSabia": "Ao contrário das antigas tintas de relógio dos anos 1920 que usavam Rádio radioativo, as linhas fotoluminescentes modernas usam aluminato de estrôncio, um mineral 100% ecológico, atóxico e perfeitamente seguro até para recém-nascidos!",
    "practicalExercise": "Borde uma pequena estrela com linha Glow-in-the-Dark na sua máquina. Aproxime a lanterna do seu celular por 30 segundos e depois cubra com a mão em uma concha fechada para ver o brilho espetacular!",
    "quickSummary": "Linha com pigmentos de aluminato que armazena luz e emite brilho verde ou azul fluorescente no escuro por várias horas.",
    "relatedTerms": [
      "Linha Termocrômica",
      "Poliéster 40wt",
      "Moda Infantil",
      "Segurança Têxtil"
    ],
    "tags": [
      "l-013",
      "glow in the dark",
      "brilha no escuro",
      "fotoluminescente",
      "fosforescente",
      "linha especial",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERBA YARNS. Phosphorescent and Photoluminescent Micro-Encapsulated Embroidery Filaments. Mulhouse: Superba, 2022.",
      "ARTRELADOS. Efeitos Especiais e Fios Inteligentes: Fosforescência, Termocromia e Reatividade UV. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-014-linha-termocromica-fotocromica-solar-uv-color-changing",
    "code": "L-014",
    "term": "Linha Termocrômica e Fotocrômica (Solar & UV Color-Changing Embroidery Thread)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da química dos corantes orgânicos espiropiranos e leuco-corantes.",
    "origin": "Tecnologia de microencapsulamento de corantes inteligentes desenvolvida para vestuário interativo (Smart Textiles), permitindo mudança reversível de cor por ativação de temperatura (termocromia) ou raios solares UV (fotocromia).",
    "summary": "Fio de alta tecnologia que muda de cor instantaneamente quando exposto à luz solar (raios UV) ou ao calor do corpo, retornando à cor original na sombra.",
    "definition": "A Linha Fotocrômica e Termocrômica (Solar Color-Changing Thread / Fios que Mudam de Cor) é uma linha de bordar sintética contendo microcápsulas de corantes moleculares reversíveis (como espiropiranos ou leuco-dyes). Na linha fotocrômica (sensível ao sol), o fio é praticamente branco ou translúcido em ambientes internos protegidos; no instante em que a peça é levada para a luz do sol, a radiação ultravioleta abre as ligações químicas das moléculas, fazendo o bordado 'revelar' cores vibrantes (rosa, roxo, azul, amarelo, vermelho) em menos de 3 segundos. Ao retornar para a sombra, as moléculas se fecham e a cor desaparece suavemente.",
    "technicalDetails": "Propriedades físico-químicas dos fios inteligentes:\n• Princípio Fotocrômico: Isomerização molecular reversível fotoquímica ativada por comprimentos de onda UV entre 300 nm e 380 nm;\n• Tempo de Resposta: Mudança de cor em 2 a 5 segundos sob luz solar; retorno à cor base em 1 a 3 minutos na sombra;\n• Ciclos Reversíveis: Suporta mais de 5.000 ciclos completos de transformação sem perda de saturação de cor;\n• Fios Termocrômicos: Mudança ativada por temperatura corporal (geralmente transição a 31°C ou 35°C);\n• Título Típico: Nº 40 (40wt) em Polipropileno ou Poliéster microencapsulado;\n• Cuidados Especiais: Não expor a temperaturas de ferro de passar superiores a 120°C para não estourar as microcápsulas.",
    "howItWorks": [
      "1. A matriz é digitalizada com elementos secretos que serão revelados no sol (como pétalas de flores ou óculos de sol em um personagem).",
      "2. O bordado é executado com a linha solar branca/incolor no ateliê sob iluminação comum.",
      "3. O cliente veste a camiseta: em casa, o desenho parece branco ou monocromático.",
      "4. Quando a pessoa sai ao ar livre na calçada ou parque sob a luz do sol, o bordado ganha cores intensas e saturadas instantaneamente.",
      "5. Ao entrar novamente em um shopping ou carro, as cores esmaecem gradualmente de volta ao branco.",
      "6. A mágica visual surpreende e encanta o público de todas as idades."
    ],
    "beginnerExplanation": "A linha solar (fotocrômica) é como mágica pura no tecido! Dentro de casa, ela é uma linha branquinha e discreta. Mas basta você sair na rua e bater o sol na roupa que o bordado muda de cor na mesma hora, virando rosa choque, azul ou roxo em poucos segundos! Quando você volta para a sombra, ela volta a ficar branquinha. É uma das linhas mais incríveis do mundo para fazer camisetas divertidas de praia, bonés e roupinhas de verão!",
    "applications": [
      "Moda praia infantil e adulta (maiôs, saídas de praia, biquínis e bonés de sol)",
      "Camisetas infantis com elementos surpresa revelados ao ar livre",
      "Moda festival, roupas de corrida e acessórios esportivos de verão",
      "Ações de marketing e brindes promocionais interativos para grandes marcas"
    ],
    "commonErrors": [
      "Guardar as roupas bordadas penduradas no varal sob sol escaldante por dias seguidos (o excesso contínuo de UV degrada os corantes)",
      "Passar ferro de passar muito quente com vapor direto sobre o bordado (as microcápsulas derretem e perdem a cor)",
      "Lavar com alvejantes agressivos ou sabão em pó com excesso de soda cáustica"
    ],
    "troubleshootingTips": [
      "Borde em velocidade moderada (600 PPM) para evitar o aquecimento por atrito na agulha que pode ativar a termocromia temporária durante o bordado",
      "Mantenha os carretéis de linha solar guardados em caixas opacas e fechadas ao abrigo da luz solar direta",
      "Adicione uma etiqueta de instrução de lavagem especial orientando o cliente a secar a peça sempre à sombra"
    ],
    "dicaArtrelados": "Crie uma matriz com o desenho de um guarda-sol ou uma flor onde o miolo é bordado com linha comum e as pétalas com linha solar: quando a criança sair no sol, a flor vai 'desabrochar' em cores mágicas! É um sucesso absoluto de vendas no verão!",
    "voceSabia": "Os corantes fotocrômicos foram desenvolvidos originalmente pela indústria óptica na década de 1960 para criar as famosas lentes de óculos 'Transitions' que escurecem sozinhas ao sair no sol!",
    "practicalExercise": "Borde um pequeno coração com linha solar branca na sua máquina dentro do ateliê: vá até a janela e coloque o bordado no sol da manhã para ver o coração ficar vermelho instantaneamente em 2 segundos!",
    "quickSummary": "Linha inteligente com microcápsulas fotossensíveis que ganha cores vivas instantaneamente ao sol e volta à cor original na sombra.",
    "relatedTerms": [
      "Smart Textiles",
      "Linha Fotoluminescente",
      "Microencapsulamento",
      "Moda Praia"
    ],
    "tags": [
      "l-014",
      "termocromica",
      "fotocromica",
      "muda de cor",
      "linha solar",
      "uv reactive",
      "smart textiles",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE RESEARCH JOURNAL. Microencapsulated Photochromic Dyes in Continuous Embroidery Filaments. London: SAGE, 2022.",
      "ARTRELADOS. Têxteis Interativos e Moda Tecnológica: Fios Solares, Térmicos e Eletrônicos no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-015-linha-hidrossoluvel-alinhavo-water-soluble-thread",
    "code": "L-015",
    "term": "Linha Hidrossolúvel de Alinhavo (Water-Soluble Basting Thread / Fio Solúvel em Água)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do polímero sintético biodegradável Álcool Polivinílico (PVA).",
    "origin": "Desenvolvida com a mesma tecnologia química das entretelas solúveis (Solvy/PVA) para criar linhas de costura e alinhavo temporário que desaparecem 100% em contato com a água sem deixar vestígios.",
    "summary": "Linha de costura e alinhavo fabricada em polímero de PVA que se dissolve completamente em água fria ou morna em poucos segundos sem necessidade de desmanchar pontos.",
    "definition": "A Linha Hidrossolúvel (Water-Soluble Sewing & Basting Thread / Fio Dissolvível em PVA) é uma linha técnica sintetizada a partir do Álcool Polivinílico (PVA). Possui resistência mecânica suficiente para ser utilizada na agulha superior ou na bobina da máquina de bordar e costura para executar alinhamentos temporários, montagens de patchwork, técnicas de 'Trapping' de rendas e costuras de sustentação em 'Bordado Flutuante' (Floating). A grande revolução da linha solúvel é que, ao finalizar a peça, não é necessário usar tesouras nem desmanchadores de costura manuais: basta borrifar água ou mergulhar a peça em água para que a linha suma instantaneamente sem deixar fios presos no tecido.",
    "technicalDetails": "Propriedades e dissolução da linha de PVA:\n• Composição Química: 100% Álcool Polivinílico (PVA) atóxico e 100% biodegradável;\n• Temperatura de Dissolução: Dissolução rápida em água morna (20°C a 40°C) em menos de 10 segundos, ou borrifamento de água fria com leve esfregação manual;\n• Resistência à Tração: 600 cN a 800 cN (requer tensão leve e velocidade moderada de 500 a 650 PPM);\n• Condição de Armazenamento: DEVE ser guardada em sacos plásticos zip hermeticamente fechados com sílica gel (sensível à umidade do ar);\n• Aplicação Estratégica: Fixação temporária de peças delicadas, sustentação de apliques invisíveis e técnicas avançadas de quilting no bastidor.",
    "howItWorks": [
      "1. A bordadeira passa a linha solúvel na agulha ou na bobina para executar o alinhavo de fixação (Basting).",
      "2. A máquina borda uma moldura de alinhavo prendendo o tecido delicado à entretela.",
      "3. Executa-se o bordado definitivo com linhas normais de poliéster por cima.",
      "4. Ao retirar a peça do bastidor, a bordadeira mergulha o tecido em uma bacia com água limpa ou borrifa água nas costuras de alinhavo.",
      "5. A linha de PVA se desintegra e derrete como açúcar na água em segundos.",
      "6. A peça seca perfeitamente limpa, sem nenhum furinho alargado e sem nenhum fiapo residual de alinhavo preso sob os pontos principais."
    ],
    "beginnerExplanation": "A linha solúvel em água é a linha 'invisível mágica'! Ela serve para você fazer aquele alinhavo que segura o pano no lugar para a máquina não entortar o bordado. Em vez de você perder um tempão depois com a tesourinha puxando ponto por ponto e arriscando furar a roupa do cliente, você só molha a costura com um pouquinho de água ou borrifador e a linha derrete todinha na hora! O pano fica limpinho sem nenhum trabalhão de desmanchar costura!",
    "applications": [
      "Alinhavos de bastidor (Basting Box) em tecidos nobres, sedas, veludos e rendas",
      "Técnicas de Trapunto no bastidor e acolchoados temporários de alta precisão",
      "Posicionamento prévio de zíperes, viés e apliques antes da costura definitiva",
      "Montagem de rendas solúveis FSL multicamadas com estruturas temporárias"
    ],
    "commonErrors": [
      "Deixar o carretel de linha solúvel destampado em dias de chuva ou alta umidade (a linha gruda nela mesma e arrebenta no cone)",
      "Bordar o desenho definitivo por engano com a linha solúvel (o bordado inteiro vai sumir na primeira lavada da cliente!)",
      "Usar ferro a vapor direto sobre a linha antes da dissolução (o vapor pode plastificar o PVA e dificultar a remoção)"
    ],
    "troubleshootingTips": [
      "Guarde sempre a linha solúvel dentro de um pote plástico com tampa e um saquinho de sílica para não pegar umidade",
      "Cole uma fita adesiva chamativa no cone (ex: 'LINHA SOLÚVEL') para ninguém confundi-la com linha de costura comum no ateliê",
      "Lave a peça com bastante água para garantir que todo o resíduo do polímero seja enxaguado do tecido"
    ],
    "dicaArtrelados": "Para fazer alinhavos de segurança em toalhas de veludo sem deixar marcas: use a linha hidrossolúvel no Basting! Assim você não precisa se preocupar se a máquina passou o ponto cheio por cima do alinhavo, porque quando você lavar a toalha para tirar o plástico solúvel, a linha de alinhavo some junto!",
    "voceSabia": "O PVA solúvel é o mesmo material utilizado pela indústria farmacêutica nas cápsulas de remédios que se dissolvem no estômago e na fabricação das pastilhas solúveis de máquinas lava-louças!",
    "practicalExercise": "Corte 20 cm de linha solúvel e jogue dentro de um copo com água morna: mexa com o dedo e veja a linha desaparecer completamente diante dos seus olhos em menos de 5 segundos!",
    "quickSummary": "Linha de PVA que se dissolve 100% em água, ideal para alinhavos temporários e fixações sem necessidade de desmanchar pontos.",
    "relatedTerms": [
      "K-Basting",
      "Entretela Hidrossolúvel",
      "PVA",
      "Trapunto"
    ],
    "tags": [
      "l-015",
      "linha hidrossoluvel",
      "water soluble",
      "pva",
      "alinhavo",
      "dissolvivel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Vanish-Lite Water Soluble Thread: Applications in Quilting and Embroidery. St. George: Superior, 2022.",
      "ARTRELADOS. Técnicas de Estabilização Solúvel: Plásticos, Fios e Entretelas Biodegradáveis no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-016-linha-algodao-mercerizado-egipcio-cotton-thread",
    "code": "L-016",
    "term": "Linha de Algodão Mercerizado Egípcio (Mercerized Egyptian Cotton Embroidery Thread 30-50wt)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do processo químico de mercerização de John Mercer (1844).",
    "origin": "Tradicional fiação de algodão de fibra extralonga (Giza Egípcio / Pima Americano) tratada quimicamente com hidróxido de sódio sob tensão para conferir resistência, brilho acetinado natural e acabamento clássico de herança.",
    "summary": "Linha clássica 100% algodão natural de acabamento fosco/acetinado elegante, essencial para peças de enxoval vintage, Richelieu tradicional e ponto cruz.",
    "definition": "A Linha de Algodão Mercerizado (Mercerized Cotton Thread / Fio Egípcio de Fibras Longas) é a linha tradicional por excelência para peças que buscam a estética clássica, sóbria e fosca do bordado artesanal de época. Produzida exclusivamente com algodão nobre de fibra extralonga (ELS - Extra Long Staple), ela passa pelo processo de mercerização, no qual as fibras são estiradas e imersas em banho cáustico gelado. Esse tratamento altera a estrutura celular do algodão, tornando as fibras perfeitamente cilíndricas, aumentando a afinidade tintorial com cores profundas e eliminando a penugem superficial.",
    "technicalDetails": "Propriedades e comportamento do algodão mercerizado:\n• Composição: 100% Algodão Egípcio ou Pima de fibra longa duplamente mercerizado (Double-Mercerized);\n• Títulos Comuns: Nº 30 (30wt - encorpado para ponto cruz e Richelieu), Nº 50 (50wt - fino para rendas e monogramas delicados) e Nº 60;\n• Acabamento Visual: Brilho acetinado suave e acabamento fosco nobre (Matte Finish), sem reflexos sintéticos;\n• Comportamento Térmico: Resiste a temperaturas altíssimas de ferro de passar (até 200°C com vapor intenso);\n• Elasticidade: Baixíssima elasticidade elástica (< 4%), exigindo tensores suaves e amortecimento perfeito da mola estica-fio (Check Spring);\n• Agulha Indicada: Agulha para Bordado ou Quilting calibre 80/12 ou 90/14 com ponta ligeiramente arredondada ou aguda.",
    "howItWorks": [
      "1. A linha de algodão mercerizado é passada pelo cabeçote com tensão superior regulada de forma suave.",
      "2. A agulha penetra suavemente nas fibras do tecido de algodão puro, percal ou linho.",
      "3. Como o fio de algodão não estica como o poliéster, os pontos assentam com estabilidade geométrica absoluta.",
      "4. O desenho ganha um aspecto vintage, macio e texturizado de bordado feito à mão.",
      "5. A peça pode ser passada com ferro bem quente e vaporizada com perfeição.",
      "6. A cada lavagem, as fibras de algodão se acomodam ainda mais, aumentando a beleza e o valor da peça de herança."
    ],
    "beginnerExplanation": "A linha de algodão mercerizado é aquela linha que deixa o bordado parecendo feito à mão pela nossa avó! Em vez de ter aquele brilho de plástico reluzente, ela tem um brilho fosco e chique muito elegante. É a linha perfeita para bordar toalhas de mesa de linho, lençóis de algodão puro e peças antigas de família. O melhor de tudo é que você pode passar o ferro bem quente por cima com vapor sem nenhum medo de derreter nada!",
    "applications": [
      "Bordados em estilo Richelieu clássico, crivo e bainhas abertas",
      "Ponto cruz computadorizado de alta fidelidade artística",
      "Enxovais clássicos de bebê, batizados e peças de família (Heirloom Sewing)",
      "Quilting artístico no bastidor e bordados em vestuário tradicional de linho"
    ],
    "commonErrors": [
      "Puxar o fio com tensão apertada de poliéster (como o algodão não estica, a linha arrebenta facilmente)",
      "Usar agulhas velhas com ponta cega que mastigam as fibras naturais do algodão",
      "Usar linhas de algodão barato não mercerizado cheias de fiapos que entopem a caixa de bobina"
    ],
    "troubleshootingTips": [
      "Limpe a caixa de bobina e o cabeçote com mais frequência após bordar com algodão, pois as fibras naturais soltam mais microfiapos",
      "Use uma gota de óleo na lançadeira para manter a passagem do algodão fluida e silenciosa",
      "Utilize entretela de algodão ou entretela solúvel para manter o toque 100% natural em peças nobres de enxoval"
    ],
    "dicaArtrelados": "Para fazer bordados em ponto cruz que pareçam 100% feitos à mão ponto por ponto: use linha de algodão egípcio nº 30 ou nº 40. O acabamento fosco e o corpo encorpado do algodão transformam a matriz digital em uma verdadeira obra de arte manual!",
    "voceSabia": "O algodão egípcio cultivado nas margens férteis do Rio Nilo possui as fibras mais longas e resistentes do reino vegetal, sendo colhido manualmente há mais de 5.000 anos!",
    "practicalExercise": "Borde um desenho de flores com linha de algodão egípcio sobre um tecido de puro linho: passe com ferro bem quente e vapor e admire a elegância clássica do bordado fosco!",
    "quickSummary": "Linha nobre 100% algodão egípcio mercerizado de acabamento fosco e acetinado, perfeita para enxovais clássicos, Richelieu e ponto cruz.",
    "relatedTerms": [
      "Mercerização",
      "Richelieu",
      "Ponto Cruz Digital",
      "Linho Puro"
    ],
    "tags": [
      "l-016",
      "algodao mercerizado",
      "algodao egipcio",
      "cotton thread",
      "fosco",
      "vintage",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AURIFIL THREADS. Egyptian Cotton Thread: Spinning, Mercerization and Machine Embroidery Standards. Milan: Aurifil, 2022.",
      "ARTRELADOS. Tradição e Elegância Têxtil: Algodões Mercerizados, Rendas Antigas e Bordados de Herança. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-017-linha-condutiva-e-textiles-circuitos-vestiveis-smart-fabrics",
    "code": "L-017",
    "term": "Linha Condutiva para E-Textiles e Roupas Inteligentes (Conductive Silver & Steel Embroidery Thread)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da eletroeletrônica e engenharia de materiais vestíveis (Wearable Tech).",
    "origin": "Desenvolvida por institutos de tecnologia (como o MIT Media Lab) e fabricantes de fios técnicos (Shieldex, Bekaert) para permitir o bordado de circuitos elétricos, sensores táteis, botões touch e antenas diretamente sobre tecidos.",
    "summary": "Linha com alta condutividade elétrica composta por prata pura ou microfilamentos de aço inoxidável que substitui fios de cobre e placas de circuito em roupas inteligentes.",
    "definition": "A Linha Condutiva de Bordar (Conductive Thread / Fios de Prata e Aço para E-Textiles) é um filamento técnico avançado projetado para conduzir corrente elétrica e sinais eletrônicos digitais com baixa resistência ôhmica (de 1 Ω/m a 50 Ω/m). Pode ser construída com alma de nylon revestida por prata pura (99% Ag) através de galvanoplastia ou composta por feixes de microfibras de aço inoxidável austenítico trançadas. Utilizada em máquinas de bordar industriais e computadorizadas, a linha condutiva permite 'bordar circuitos integrados', criando teclados de tecido (Soft Touch Pads), sensores biométricos de eletrocardiograma (ECG), antenas RFID invisíveis e conexões para LEDs luminosos em roupas inteligentes.",
    "technicalDetails": "Propriedades elétricas e mecânicas da linha condutiva:\n• Resistência Elétrica Linear: 1 a 30 Ohms por metro (ideal para alimentação de microcontroladores Arduino LilyPad / Raspberry Pi Pico);\n• Composição Metálica: Poliamida 6.6 banhada em prata coloidal estéril ou 100% Microfibras de Aço Inox 316L;\n• Blindagem contra Oxidação: Tratamento de passivação para resistir a até 50 ciclos de lavagem sem perder condutividade;\n• Não Isolada: Como a superfície do fio é exposta e condutiva, trilhas de circuitos bordadas paralelas NÃO podem se cruzar para não gerar curto-circuito (Short Circuit);\n• Agulha Indicada: Agulha Topstitch ou Titanium calibre 80/12 ou 90/14 com olho polido;\n• Tensão de Trabalho: Baixa voltagem segura (3,3V a 5V DC / Corrente contínua).",
    "howItWorks": [
      "1. O programador digitaliza a matriz no software como se fosse o layout de uma placa de circuito impresso (PCB têxtil).",
      "2. As trilhas elétricas são desenhadas com ponto corrido duplo (Triple Run) ou ponto cheio estreito, garantindo que os polos positivo (+) e negativo (-) nunca se toquem.",
      "3. A máquina borda o circuito com a linha condutiva de prata sobre o tecido.",
      "4. Ao final, soldam-se ou prendem-se micro-LEDs, sensores de batimento cardíaco ou baterias tipo moeda (CR2032) nas extremidades bordadas.",
      "5. A roupa ganha funções eletrônicas ativas: ao tocar em um bordado, acende-se uma luz ou envia-se um comando Bluetooth para o smartphone.",
      "6. A peça pode ser dobrada, amassada e vestida com total flexibilidade e conforto."
    ],
    "beginnerExplanation": "A linha condutiva é um 'fio elétrico disfarçado de linha de costura'! Ela é feita de prata ou aço inoxidável e conduz eletricidade de verdade, como um cabinho elétrico. Com ela na sua máquina de bordar, você pode bordar botões de tecido que acendem luzinhas de LED na roupa quando você encosta o dedo, criar luvas que mexem na tela do celular sem tirar da mão ou até roupinhas de bebê que monitoram a respiração! É a união do bordado tradicional com o futuro da tecnologia!",
    "applications": [
      "Roupas inteligentes de alta tecnologia para monitoramento médico e esportivo (sensores cardíacos)",
      "Bordados em luvas de inverno para funcionamento em telas sensíveis ao toque (Touchscreen Gloves)",
      "Figurinos de shows com iluminação LED dinâmica controlada por microchips",
      "Bordado de antenas RFID invisíveis para controle de estoque e rastreabilidade têxtil"
    ],
    "commonErrors": [
      "Cruzar trilhas positivas e negativas no desenho da matriz (cria curto-circuito e descarrega a bateria)",
      "Bordar com tensão muito alta, esgarçando a camada de prata sobre o nylon e aumentando a resistência elétrica",
      "Lavar a peça com a bateria conectada na roupa"
    ],
    "troubleshootingTips": [
      "Use um multímetro na função de continuidade (bip) para testar se a trilha bordada está conduzindo corrente perfeitamente de ponta a ponta",
      "Para cruzar duas trilhas elétricas sem dar curto, borde uma na frente e outra no avesso com uma entretela isolante no meio",
      "Isole as conexões de bateria com silicone neutro ou resina epóxi flexível para torná-las à prova d'água"
    ],
    "dicaArtrelados": "Quer fazer uma luva de inverno funcionar no celular? Borde um pequeno triângulo com linha condutiva na pontinha do dedo indicador da luva! O bordado transfere a energia estática do seu dedo direto para a tela do celular instantaneamente!",
    "voceSabia": "Trajes de astronautas e roupas de pilotos de caça da Força Aérea já utilizam circuitos inteiros bordados com fios condutivos de prata para monitorar os sinais vitais sem o peso incômodo de cabos elétricos rígidos!",
    "practicalExercise": "Borde uma linha reta de 10 cm com linha condutiva de prata na sua máquina: encoste uma bateriazinha de 3V em uma ponta e um LEDzinho na outra e veja o LED acender através da linha bordada!",
    "quickSummary": "Linha de alta condutividade com prata ou aço inox que permite bordar circuitos elétricos, sensores touch e roupas inteligentes.",
    "relatedTerms": [
      "Smart Textiles",
      "E-Textiles",
      "Wearable Tech",
      "Linha Metálica"
    ],
    "tags": [
      "l-017",
      "linha condutiva",
      "e-textiles",
      "prata",
      "circuito",
      "smart textiles",
      "tecnologia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SHIELDEX STATEX PRODUKTIONS. High-Conductivity Silver-Plated Yarns for Smart Fabrics and Sensor Embroidery. Bremen: Statex, 2023.",
      "ARTRELADOS. Bordado Tecnológico e E-Textiles: Sensores, Circuitos Vestíveis e Engenharia no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-018-linho-puro-linho-misto-tecido-nobre-fladres",
    "code": "L-018",
    "term": "Linho Puro e Linho Misto (Pure Linen & Blended Linen Fabric / Lin de Flandres)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Do latim 'Linum' (planta do linho) / Fibras naturais nobres.",
    "origin": "A fibra têxtil vegetal mais antiga da humanidade (cultivada há mais de 8.000 anos no Egito Antigo e aperfeiçoada na região europeia de Flandres/Bélgica), símbolo de sofisticação, nobreza e frescor na camisaria e no enxoval de luxo.",
    "summary": "Tecido nobre de fibras de linho natural de trama visível, alta resistência e caimento rústico elegante, que exige estabilização firme e compensação de repuxo adequada.",
    "definition": "O Linho (Puro Linho / Linho Misto com Algodão ou Viscose) é um tecido nobre confeccionado a partir das fibras extraídas do caule da planta Linum usitatissimum. Caracterizado por sua textura inconfundível com pequenas irregularidades naturais (nodosidades de fio), excelente condutividade térmica, rigidez inicial que amacia com as lavagens e alta absorção de umidade. No bordado computadorizado, o linho é o suporte nobre por excelência para monogramas clássicos, brasões de família, toalhas de banquete e camisaria de luxo. Devido à sua trama aberta e baixa elasticidade, exige estabilização precisa com entretela de corte limpo (Cutaway) ou rasgável de boa gramatura e agulhas com ponta aguda afiada.",
    "technicalDetails": "Propriedades físicas e parametrização para bordar em linho:\n• Composição: 100% Linho Puro (ou 55% Linho / 45% Algodão no Linho Misto);\n• Trama e Densidade: Tecido plano com fios de espessura variável e espaçamento entre fibras;\n• Comportamento sob Tração: Quase nula elasticidade nas direções do fio (urdume e trama), mas ligeira maleabilidade no viés de 45°;\n• Entretela Recomendada: Entretela rasgável de algodão 60g/m² para toalhas de mesa, ou entretela de corte limpo leve (No-Show Mesh) para camisas e blusas finas;\n• Agulha Indicada: Agulha fina ponta aguda (Microtex / Sharp) calibre 70/10 ou 75/11 para perfurar as fibras lenhosas sem mastigar os fios;\n• Compensação de Encolhimento (Pull Compensation): 0,35 mm a 0,45 mm na matriz digital.",
    "howItWorks": [
      "1. O tecido de linho é engomado levemente e passado com ferro a vapor para assentar a trama.",
      "2. Aplica-se a entretela adequada no verso do linho.",
      "3. Monta-se o conjunto no bastidor com tensão uniforme, sem esticar o tecido na diagonal.",
      "4. Instala-se uma agulha Microtex afiada calibre 75/11 nova.",
      "5. A máquina borda a matriz com densidade equilibrada (0,40 mm) e sob-pontos de sustentação em tatami aberto.",
      "6. A agulha penetra entre os fios grossos do linho com facilidade, sem desviar a trajetória.",
      "7. Ao retirar do bastidor, o bordado assenta-se com nobreza e sem nenhuma ruga ao redor."
    ],
    "beginnerExplanation": "O linho é aquele tecido nobre e chique que todo mundo adora para roupas elegantes de verão e toalhas de banquete luxuosas! Ele é feito de uma plantinha natural e tem aqueles nozinhos charmosos no tecido. Para bordar em linho e ficar perfeito sem repuxar nem enrugar: use sempre uma entretela boa por baixo, uma agulha bem fininha e pontudinha (tipo Microtex) e passe o tecido com ferro a vapor antes de prender no bastidor. O resultado fica digno de capa de revista!",
    "applications": [
      "Toalhas de mesa de banquete, jogos americanos e guardanapos finos de alta gastronomia",
      "Monogramas sofisticados em camisas de linho, vestidos de noiva e blazers de verão",
      "Enxovais clássicos de berço, almofadas decorativas e cortinas rústicas",
      "Marcadores de página, sachês perfumados e artigos de decoração requintados"
    ],
    "commonErrors": [
      "Bordar com agulha grossa de ponta arredondada (a agulha desvia dos nós grossos do linho e faz o ponto sair torto)",
      "Puxar o linho torto no bastidor, deformando a trama quadrada do tecido",
      "Usar densidade ultra pesada de ponto que corta as fibras do linho e cria buracos nas bordas"
    ],
    "troubleshootingTips": [
      "Use sempre agulha Microtex 70/10 ou 75/11 nova; a ponta afiada penetra diretamente nas fibras duras do linho com máxima precisão",
      "Utilize filme plástico solúvel no topo se o linho tiver textura muito rústica para os pontos assentarem com planicidade espelhada",
      "Passe o bordado pelo avesso sobre uma toalha macia para não esmagar o relevo dos pontos"
    ],
    "dicaArtrelados": "Antes de prender o linho no bastidor: borrife um pouquinho de goma de passar caseira (água com uma gotinha de amido) e passe com ferro quente. O linho fica encorpado como papel firme e o bordado sai com a precisão de um desenho impresso!",
    "voceSabia": "Os antigos egípcios usavam tecidos de puro linho tão finos e translúcidos para as vestes dos faraós que eles eram chamados de 'Luz do Sol Tecida'!",
    "practicalExercise": "Pegue um guardanapo de puro linho, use uma agulha Microtex 75/11 e borde uma inicial clássica com linha de viscose ou poliéster: passe com ferro e vapor e sinta o peso e a nobreza da peça finalizada!",
    "quickSummary": "Tecido nobre milenar de fibra natural com trama texturizada, que exige agulha ponta aguda e estabilização de precisão.",
    "relatedTerms": [
      "Agulha Microtex",
      "Lin de Flandres",
      "Compensação de Repuxo",
      "Enxoval de Luxo"
    ],
    "tags": [
      "l-018",
      "linho",
      "linho puro",
      "linho misto",
      "tecido nobre",
      "monograma",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MASTERS OF LINEN EUROPEAN ALLIANCE. Linen Fibers Properties and Luxury Textile Manufacturing. Paris: CELC, 2022.",
      "ARTRELADOS. A Nobreza do Linho: Tradição, Estabilização e Bordados de Alto Padrão em Fibras Naturais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-019-lockstitch-ponto-fixo-duas-linhas-iso-301",
    "code": "L-019",
    "term": "Lockstitch / Ponto Fixo de Duas Linhas (ISO 301 Stitch Standard)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo masculino / Do inglês 'Lockstitch' (ponto travado/fixo) / Norma ISO 4915:301.",
    "origin": "Estrutura geométrica padronizada internacionalmente pela Organização Internacional de Normalização (ISO 4915), que rege todas as máquinas de costura e bordado mecânicas e computadorizadas modernas desde a invenção de Elias Howe em 1846.",
    "summary": "O tipo fundamental de ponto do bordado eletrônico: formado pelo entrelaçamento mecânico de dois fios independentes (agulha superior e bobina inferior) travados no centro do tecido.",
    "definition": "O Lockstitch (Ponto Fixo de Duas Linhas / Ponto Preso / Norma Internacional ISO 301) é a estrutura biomecânica básica que compõe 100% dos pontos produzidos pelas máquinas de bordar computadorizadas convencionais. É constituído por dois sistemas de fios separados: o fio superior (conduzido pela agulha através do tecido) e o fio inferior (liberado pela canelinha da caixa de bobina sob o tecido). No interior do tecido, esses dois fios se cruzam e formam um laço travado (Locking Knot). A grande vantagem do ponto fixo sobre o ponto corrente (Chainstitch) é que, se um ponto for acidentalmente cortado ou rompido na superfície, a costura inteira NÃO se desfaz como uma corrente desmanchando.",
    "technicalDetails": "Geometria e física do ponto fixo ISO 301:\n• Estrutura: 2 fios independentes entrelaçados no plano médio do substrato têxtil;\n• Posição Ideal do Nó: O ponto de cruzamento dos dois fios deve situar-se exatamente na metade da espessura do tecido e da entretela (equilíbrio dinâmico de tensões);\n• Resistência à Tração: O atrito recíproco entre os filamentos impede que o ponto escorregue ou perca a forma;\n• Proporção de Consumo de Linha: Aproximadamente 60% a 70% de fio superior colorido e 30% a 40% de fio inferior de bobina em pontos de preenchimento;\n• Limite de Elasticidade: Baixa elasticidade longitudinal inerente (cerca de 5% a 8%), exigindo compensações digitais ao bordar tecidos com alto teor de elastano.",
    "howItWorks": [
      "1. A agulha desce levando a linha superior através do tecido até atingir a profundidade máxima.",
      "2. Ao iniciar a subida, a agulha forma a laçada por trás de seu rebaixo.",
      "3. O bico rotativo da lançadeira passa e pesca a laçada de linha superior.",
      "4. A lançadeira gira, estende a laçada e a passa ao redor de todo o corpo da bobina.",
      "5. A linha superior envolve a linha inferior que sai da canelinha.",
      "6. A alavanca estica-fio sobe no cabeçote e traciona a linha superior para cima com força calibrada.",
      "7. O nó entre os dois fios é puxado para dentro do tecido, completando o ciclo do ponto fixo ISO 301."
    ],
    "beginnerExplanation": "O Lockstitch (ponto fixo) é o 'nó invisível' que a máquina faz entre a linha de cima e a linha da canelinha! Quando a linha colorida desce pelo pano e dá uma volta na linha branca de baixo, a máquina puxa as duas linhas ao mesmo tempo para o nó ficar bem escondidinho no meio do pano. A coisa mais legal desse ponto é que ele fica super firme: se você cortar uma pontinha de linha, o bordado não desmancha igual tricô!",
    "applications": [
      "A estrutura fundamental de todos os pontos cheios, tatamis e pontos corridos em máquinas de bordar",
      "Confecção de vestuário de alta durabilidade e resistência à tração mecânica",
      "Bordados em calçados, bolsas de couro e estofamentos automotivos",
      "Padronização e controle de qualidade em laboratórios de ensaios têxteis internacionais"
    ],
    "commonErrors": [
      "Desbalancear a tensão, deixando a linha de cima frouxa (o nó desce para o avesso e embola na chapa)",
      "Apertar demais a tensão de cima (o nó sobe para a frente da peça, mostrando pontinhos brancos de canelinha na frente)",
      "Bordar tecidos ultra elásticos com pontos muito compridos e retos, que podem estourar ao vestir a roupa"
    ],
    "troubleshootingTips": [
      "Faça o teste da fita de ponto cheio (teste 'H' ou 'I'): no avesso, deve haver 1/3 de linha de cima em cada lateral e 1/3 de linha de canelinha no centro",
      "Em malhas elásticas, utilize sempre uma boa entretela de malha recortável para absorver a tensão do ponto fixo",
      "Verifique periodicamente a mola de tensão da caixa de bobina para garantir tração homogênea"
    ],
    "dicaArtrelados": "Se você vir pontinhos brancos aparecendo no meio das letras coloridas do seu bordado: não mexa na agulha! É o ponto fixo que está desequilibrado. Afrouxe a tensão superior ou aperte um pouquinho o parafuso da caixa de bobina para o nó descer de volta para o coração do tecido!",
    "voceSabia": "O ponto fixo de duas linhas foi uma das invenções mais disputadas da história industrial dos Estados Unidos, gerando a famosa 'Guerra das Máquinas de Costura' nos tribunais entre 1850 e 1856 até a formação do primeiro consórcio de patentes do mundo!",
    "practicalExercise": "Borde uma coluna de ponto cheio de 5 mm de largura. Observe o tecido pela lateral com uma lupa: veja como as duas linhas se encontram exatamente no meio do tecido sem que nenhuma escape!",
    "quickSummary": "Ponto mecânico padrão internacional formado pelo entrelaçamento travado de dois fios no centro do tecido.",
    "relatedTerms": [
      "Laçada da Lançadeira",
      "Caixa de Bobina",
      "Tensão Superior",
      "Norma ISO 4915"
    ],
    "tags": [
      "l-019",
      "lockstitch",
      "ponto fixo",
      "iso 301",
      "mecanica",
      "fundamentos",
      "tensao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 4915: Textiles - Stitch types - Classification and terminology. Geneva: ISO, 2021.",
      "ARTRELADOS. Fundamentos da Mecânica Têxtil: Ponto Fixo, Formação de Nó e Dinâmica de Fios. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-020-locking-stitches-pontos-amarracao-tie-in-tie-off",
    "code": "L-020",
    "term": "Locking Stitches / Pontos de Amarração (Tie-In & Tie-Off / Trava Inicial e Final)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino plural / Do inglês 'Locking Stitches' (pontos de travamento).",
    "origin": "Comando algorítmico criado nos primeiros softwares de digitalização (Wilcom, Pulse, Tajima DGML) para replicar digitalmente o arremate manual das bordadeiras e impedir que os pontos se desfaçam após o corte automático de linha.",
    "summary": "Sequência de micro-pontos concentrados executados no início (Tie-In) e no final (Tie-Off) de cada objeto bordado para travar a linha e evitar desfiamento.",
    "definition": "Os Pontos de Amarração (Locking Stitches / Tie-In e Tie-Off / Pontos de Arremate e Segurança) são micro-movimentos programados na matriz que fixam a linha superior com segurança antes do início e antes do corte de linha de qualquer segmento bordado. O Tie-In (trava inicial) consiste em 3 a 5 pontos curtos (0,5 mm a 1,0 mm) dados no início do objeto para ancorar o fio que vem solto após o corte anterior. O Tie-Off (trava final) consiste em uma sequência de pontos cruzados em formato de 'X', estrela ou micro-vaivém executados logo antes do acionamento da faca de corte automático. Sem esses pontos, a ponta da linha cortada escorrega para fora do tecido e o bordado desmancha progressivamente nas lavagens.",
    "technicalDetails": "Parâmetros e tipos de arremate digital:\n• Ponto de Amarração Inicial (Tie-In): 3 a 4 pontos de 0,6 mm a 1,0 mm posicionados sob o futuro preenchimento para ficarem 100% invisíveis;\n• Ponto de Amarração Final (Tie-Off): 4 a 6 pontos de 0,5 mm a 0,8 mm configurados como 'Two-Way Loop', 'Bow-Tie' (Laço) ou 'Line Stitch';\n• Comprimento Crítico do Ponto: Não deve ser inferior a 0,4 mm (pontos menores que 0,4 mm não laçam a bobina e picotam o tecido);\n• Posição Estratégica: Sempre inseridos no interior da geometria do objeto para que o acabamento em satim ou tatami cubra os nozinhos de arremate;\n• Redução de Fios Soltos: Essencial para permitir a limpeza limpa com tesoura rente sem comprometer a integridade da peça.",
    "howItWorks": [
      "1. A máquina posiciona a agulha na coordenada de início do novo elemento.",
      "2. Executa 3 micro-pontos de Tie-In concentrados para ancorar o fio no tecido e na entretela.",
      "3. A máquina borda o objeto completo (letra, pétala ou logotipo).",
      "4. Ao chegar ao último ponto, executa 4 micro-pontos de Tie-Off cruzados e compactos.",
      "5. A máquina desacelera, o aparador de linha (Trimmer) aciona a faca e corta a linha superior e inferior.",
      "6. A ponta cortada permanece firmemente travada pelo nó de amarração.",
      "7. O pantógrafo se desloca para o próximo objeto sem nenhum perigo de o elemento anterior desmanchar."
    ],
    "beginnerExplanation": "Os pontos de amarração (Tie-In e Tie-Off) são como o 'nozinho' que você dá na linha quando costura à mão! Antes de começar a bordar uma letra, a máquina dá 3 pontinhos bem pequenininhos para prender a linha no pano. Quando a letra acaba, ela dá mais 4 pontinhos no mesmo lugar para travar bem antes de cortar a linha com a faquinha. Graças a isso, você pode cortar as pontinhas de linha que sobram bem rentes e lavar a roupa na máquina de lavar sem medo de o bordado desmanchar nunca!",
    "applications": [
      "Programação obrigatória em todas as matrizes profissionais de bordado computadorizado",
      "Bordados em roupas esportivas e uniformes submetidos a grande atrito e estiramento",
      "Matrizes com muitos cortes de linha e trocas de cores frequentes",
      "Monogramas pequenos e textos finos onde a ponta da linha precisa ficar invisível"
    ],
    "commonErrors": [
      "Esquecer de ativar o Tie-Off no software de criação (a primeira lavagem do cliente desmancha o final das letras)",
      "Configurar micro-pontos de amarração de 0,1 mm (a agulha bate no mesmo lugar, fura o tecido e a linha arrebenta)",
      "Colocar o ponto de amarração fora do desenho, deixando um carocinho feio de linha visível ao lado da letra"
    ],
    "troubleshootingTips": [
      "Configure o software de matrizes para aplicar automaticamente Tie-In e Tie-Off em todas as trocas de cor e antes de cada corte",
      "Mantenha o comprimento do ponto de arremate entre 0,6 mm e 0,8 mm para máxima firmeza sem criar caroços grossos",
      "Se notar que as pontas das letras estão desmanchando: verifique se o comando de amarração não foi desativado por engano no painel da máquina"
    ],
    "dicaArtrelados": "Ao digitalizar textos pequenos: configure a amarração final para o estilo 'Invisível' (que faz os pontinhos de arremate caminhando por baixo da coluna de ponto cheio). O acabamento fica limpo, sem calombos e 100% à prova de desfiamento!",
    "voceSabia": "Uma matriz de bordado complexa com 20 trocas de cores e 50 cortes automáticos executa mais de 400 pontos de amarração invisíveis durante todo o processo produtivo!",
    "practicalExercise": "No seu software de bordado, ative a visualização de pontos lentos (Stitch Player): observe os primeiros 3 pontinhos e os últimos 4 pontinhos de cada letra e entenda como a amarração é construída!",
    "quickSummary": "Sequência de micro-pontos de travamento dados no início e no final de cada objeto para evitar desfiamento e nós frouxos.",
    "relatedTerms": [
      "Aparador de Linha",
      "Lead-In",
      "Lead-Out",
      "Wilcom",
      "Ponto Satim"
    ],
    "tags": [
      "l-020",
      "locking stitches",
      "tie-in",
      "tie-off",
      "amarracao",
      "arremate",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Digitizing Standards: Tie-In, Tie-Off and Auto-Trimming Algorithms. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Engenharia da Digitalização: Amarrações de Segurança, Compensação e Trajetórias Limpas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-021-layering-sobreposicao-estruturada-camadas-underlay-topstitch",
    "code": "L-021",
    "term": "Layering / Sobreposição Estruturada de Camadas (Underlay to Topstitch Layering)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'Layering' (disposição em camadas/estratos).",
    "origin": "Conceito fundamental da computação gráfica e da digitalização de matrizes industriais, estabelecido para construir desenhos tridimensionais a partir de camadas sucessivas de sustentação, preenchimento e detalhes superiores.",
    "summary": "Estratégia de digitalização que organiza a sequência de bordado em camadas progressivas (fundo, sob-pontos, cor base, sombra e contorno) para conferir profundidade e estabilidade dimensional.",
    "definition": "O Layering (Estratégia de Sobreposição em Camadas / Escalonamento Estrutural de Pontos) é a metodologia avançada de programação de matrizes na qual o bordado é decomposto e construído em múltiplos níveis sobrepostos lógicos. Começa pela camada zero de estabilização estrutural (Underlays / Sob-pontos que unem o tecido à entretela), avança para a camada base de preenchimento amplo (Background / Tatami), segue para as camadas intermediárias de modelagem e sombreamento tonal (Shading / Degrades) e finaliza com as camadas superiores de destaque (Topstitches / Ponto Satim / Contornos e Brilhos). Essa hierarquia assegura que nenhum contorno fique deslocado e confere um visual tridimensional rico e volumoso à peça.",
    "technicalDetails": "Arquitetura e regras de empilhamento de camadas:\n• Camada 1 (Fundação / Underlay): Sob-pontos em grade tatami aberta (ângulo de 45° e 90° em relação à trama) para travar o tecido;\n• Camada 2 (Base / Preenchimento de Fundo): Pontos tatami com densidade padrão de 0,40 mm a 0,45 mm bordados de dentro para fora;\n• Camada 3 (Relevo e Sombra / Shading): Pontos com densidade aberta (0,70 mm a 1,20 mm) mesclados para criar transição de cor;\n• Camada 4 (Destaques e Contornos / Overlays): Ponto cheio com compensação de repuxo generosa (0,40 mm) para cobrir perfeitamente a junção das camadas de baixo;\n• Densidade Acumulada Máxima: O acúmulo de mais de 3 camadas cheias no mesmo ponto deve ser evitado ou compensado com ferramentas de remoção de sobreposição (Overlaps Removal / Filter Underlays) para não emparedar a agulha.",
    "howItWorks": [
      "1. O programador analisa o desenho original e divide a arte em planos visuais (fundo, meio e frente).",
      "2. Programa os sob-pontos de sustentação da primeira camada para estabilizar o tecido.",
      "3. Executa a cor de fundo mais profunda do desenho.",
      "4. Sobrepõe a camada secundária com variação de ângulo de ponto para criar contraste e relevo natural.",
      "5. Aplica as sombras e luzes com densidades graduadas.",
      "6. Finaliza com os contornos e detalhes mais nítidos no topo de tudo.",
      "7. A peça bordada adquire uma riqueza visual incomparável, sem distorções nem desalinhamentos de contorno."
    ],
    "beginnerExplanation": "O Layering é como pintar um quadro a óleo: você primeiro pinta o céu lá no fundo, depois as montanhas no meio e por último os detalhes da casa e das flores na frente! No bordado computadorizado é igualzinho: a máquina primeiro faz a base que segura o pano, depois borda as cores do fundo e por último faz os contornos e detalhes brilhantes por cima de tudo. Isso faz o bordado parecer que tem 3 dimensões e impede que os contornos fiquem tortos ou fora do lugar!",
    "applications": [
      "Digitalização artística de retratos realistas, paisagens botânicas e animais",
      "Brasões com sombras, degradês de cores e elementos heráldicos sobrepostos",
      "Bordados em 3D Puff combinando espuma de EVA e camadas de ponto satim",
      "Garantia de registro e encaixe perfeito em tecidos difíceis como malhas e moletons"
    ],
    "commonErrors": [
      "Bordar os contornos finos antes de bordar o preenchimento de fundo (o preenchimento empurra o tecido e cobre o contorno)",
      "Sobrepor 4 camadas grossas de ponto tatami 100% denso no mesmo lugar (cria uma placa dura de concreto que quebra agulhas)",
      "Não variar os ângulos de ponto entre as camadas sobrepostas (as linhas afundam umas dentro das outras e somem)"
    ],
    "troubleshootingTips": [
      "Altere o ângulo de ponto em pelo menos 30° a 45° entre camadas sobrepostas para que a camada de cima ganhe relevo e brilhe com a luz",
      "Utilize a ferramenta de 'Eliminar Sobreposições Ocultas' no software para remover pontos desnecessários que ficam escondidos embaixo de outros blocos",
      "Digitalize sempre do centro da peça para as bordas para empurrar o excesso de tecido uniformemente para fora"
    ],
    "dicaArtrelados": "Se você quer que um contorno preto fique ultra nítido sobre uma área colorida: nunca borde o contorno na mesma direção do fundo! Se o fundo estiver horizontal (0°), faça o contorno vertical ou diagonal (90° ou 45°). O contraste de luz e ângulo fará o contorno saltar aos olhos!",
    "voceSabia": "As técnicas de layering em matrizes foram adaptadas diretamente dos métodos de pintura renascentista de Leonardo da Vinci, que aplicava até 30 camadas ultrafinas de verniz translúcido (Sfumato) para criar o olhar enigmático da Mona Lisa!",
    "practicalExercise": "No seu software, crie um círculo com ponto tatami azul claro a 0°. Em cima dele, sobreponha um pássaro em ponto tatami azul escuro a 45° e contorne em ponto cheio: borde e veja o relevo espetacular das camadas!",
    "quickSummary": "Organização estratégica do bordado em camadas progressivas e hierárquicas para profundidade visual e estabilidade dimensional.",
    "relatedTerms": [
      "Sob-pontos (Underlay)",
      "Ponto Tatami",
      "Compensação de Repuxo",
      "Pintura de Agulha"
    ],
    "tags": [
      "l-021",
      "layering",
      "camadas",
      "sobreposicao",
      "profundidade",
      "programacao",
      "digitalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Layering and Stitch Sequencing for True-to-Life Embroidery. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Escultura Têxtil: Layering, Hierarquia de Camadas e Profundidade Tridimensional no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-022-lettering-tipografia-fontes-bordado-kerning-compensacao",
    "code": "L-022",
    "term": "Lettering / Tipografia e Fontes de Bordado (Keyboard Lettering & TrueType Font Digitizing)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'Lettering' (estudo e arte de desenhar letras).",
    "origin": "Evolução dos monogramas manuais medievais e das primeiras fontes tipográficas digitalizadas ponto a ponto por mestres puncionadores nos anos 1970 para os primeiros computadores industriais de bordado.",
    "summary": "Arte, regras e parametrização técnica da escrita e tipografia no bordado computadorizado, garantindo legibilidade milimétrica e compensação de repuxo em letras pequenas e grandes.",
    "definition": "O Lettering no Bordado Computadorizado (Tipografia de Bordado / Fontes Nativas de Teclado / Keyboard Lettering) é o conjunto de técnicas de digitalização e configuração geométrica aplicadas à criação de textos, nomes, alfabetos e monogramas no bastidor. Ao contrário da tipografia impressa em papel ou tela (onde os traços são planos e estáticos), as letras bordadas sofrem a tração física e a elasticidade dos fios e do tecido. Isso exige regras rigorosas: colunas de ponto cheio com largura mínima de 1,0 mm a 1,2 mm para legibilidade, espaçamento interletra (Kerning) ampliado, compensação de encolhimento nas curvas (como em 'O', 'S' e 'C') e sob-pontos de coluna central (Center Walk) para evitar que as hastes das letras fiquem mastigadas ou afundem no tecido.",
    "technicalDetails": "Diretrizes e limites técnicos para tipografia bordada:\n• Altura Mínima para Ponto Cheio: 5,0 mm a 6,0 mm com linha 40wt padrão (letras menores que 5 mm exigem linha ultrafina 60wt e agulha 65/9);\n• Largura Mínima de Coluna: 1,0 mm (colunas menores que 0,8 mm quebram agulhas e cortam o tecido);\n• Largura Máxima de Ponto Cheio sem Divisão: 7,0 mm a 9,0 mm (acima disso, os pontos ficam frouxos e enroscam, exigindo conversão para Tatami ou Ponto Dividido);\n• Compensação de Repuxo em Textos: 0,35 mm a 0,50 mm de sobre-largura nas colunas para compensar o estiramento lateral;\n• Kerning (Espaçamento entre Letras): Aumentado em 15% a 25% em relação ao espaçamento gráfico digital para evitar que letras vizinhas se toquem após o encolhimento;\n• Sob-pontos para Letras Pequenas: Center Walk (linha corrida simples no centro da coluna) para estabilizar a haste sem engrossar a letra.",
    "howItWorks": [
      "1. A bordadeira digita o nome desejado no software usando uma fonte nativa digitalizada para bordado (Keyboard Font).",
      "2. O software calcula automaticamente a inclinação dos pontos satim em cada curva de cada letra (ângulo de 90° em relação à linha média da haste).",
      "3. Ajusta-se a compensação de repuxo e o espaçamento entre as letras.",
      "4. A máquina borda o texto com pontos de amarração invisíveis em cada letra ou salto de conexão.",
      "5. A agulha executa a coluna central de sob-ponto e em seguida cobre com os pontos cheios externos.",
      "6. A tração do fio puxa as fibras do tecido: graças à compensação de repuxo pré-calculada, a letra atinge exatamente a espessura visual perfeita.",
      "7. O nome fica 100% nítido, legível a distância e com toque macio."
    ],
    "beginnerExplanation": "O Lettering de bordado é a arte de bordar nomes, frases e letrinhas no tecido com perfeição! Bordar uma letra não é igual a imprimir no papel: a linha puxa o tecido e pode fazer as letras 'murcharem' ou ficarem coladas umas nas outras se forem muito pequenininhas. Por isso, no bordado, toda letrinha precisa ter um espacinho a mais entre elas e ter pelo menos meio centímetro de altura para ficar linda e bem legível!",
    "applications": [
      "Personalização de nomes e logotipos em uniformes corporativos, jalecos e polos",
      "Monogramas sofisticados em toalhas de banho, lençóis, roupões e guardanapos",
      "Enxovais infantis com nomes de bebês bordados em fontes cursivas clássicas",
      "Numeração e nomes de atletas em camisas de futebol e jaquetas esportivas"
    ],
    "commonErrors": [
      "Converter automaticamente fontes TrueType do Windows sem ajustar largura de coluna (as letras saem finas como teias e quebram a linha)",
      "Bordar letras minúsculas de 3 mm com linha grossa padrão (vira um borrão de linha ilegível)",
      "Deixar as letras muito grudadas (Kerning zerado), fazendo as letras vizinhas se fundirem em um bloco embolado"
    ],
    "troubleshootingTips": [
      "Para bordar textos muito pequenininhos (como telefones em uniformes): use linha fina de espessura 60wt e agulha fina 65/9",
      "Prefira sempre usar as fontes nativas pré-digitalizadas do seu software de matrizes em vez de conversão automática de fontes de computador",
      "Coloque plástico hidrossolúvel no topo de toalhas felpudas para que as letrinhas não afundem no meio dos pelos da toalha"
    ],
    "dicaArtrelados": "Regra de ouro para bordar nomes cursivos: nunca use sob-pontos de zigue-zague em letras com menos de 8 mm de altura! Use apenas sob-ponto central (Center Walk). A letra fica fininha, nítida como escrita à mão e incrivelmente elegante!",
    "voceSabia": "Os primeiros monogramas bordados com iniciais nobres surgiram na Grécia Antiga como marcas régias nas moedas e nos mantos dos reis da Macedônia para autenticar documentos oficiais!",
    "practicalExercise": "Escreva seu nome no seu software com uma fonte de bordado em tamanho 15 mm e outro em tamanho 6 mm: borde ambos em um retalho e veja como a estrutura de pontos muda para manter as letras legíveis!",
    "quickSummary": "Arte e parametrização técnica da tipografia no bordado computadorizado para garantir máxima legibilidade e compensação de repuxo.",
    "relatedTerms": [
      "Ponto Satim",
      "Compensação de Repuxo",
      "Kerning",
      "Center Walk",
      "Monograma"
    ],
    "tags": [
      "l-022",
      "lettering",
      "tipografia",
      "fontes",
      "nomes",
      "monogramas",
      "kerning",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. The Typography of Embroidery: Lettering Guidelines and Micro-Font Digitizing. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Caligrafia do Ponto: Tipografia, Kerning, Fontes Nativas e Micro-Textos no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-023-lead-in-ponto-entrada-angulo-ataque-entry-point",
    "code": "L-023",
    "term": "Lead-In / Ponto de Entrada e Ângulo de Ataque (Entry Point / In-Stitch Trajectory)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'Lead-In' (condução para dentro/entrada suave).",
    "origin": "Princípio de controle numérico CNC e digitalização de matrizes industriais formulado para otimizar o fluxo cinemático do pantógrafo e eliminar marcas de início visíveis em blocos de ponto cheio e tatami.",
    "summary": "Coordenada e ângulo geométrico exato onde a agulha inicia a costura de um objeto bordado, posicionando a entrada sob futuras camadas para ocultar nós.",
    "definition": "O Lead-In (Ponto de Entrada / Ponto de Ataque / Entry Point) é o vetor inicial onde a máquina penetra a primeira agulhada para iniciar a construção de um determinado objeto de bordado. Em matrizes de nível profissional, o Lead-In nunca é deixado em uma borda exposta ou visível do desenho. O programador posiciona o Lead-In estrategicamente no centro geométrico do objeto ou na extremidade que será coberta posteriormente, fazendo com que a linha de conexão viaje por baixo da área bordada (Running Stitch Underlay) até atingir o ponto de partida do preenchimento principal. Isso elimina a necessidade de cortes de linha desnecessários e garante que nenhum nó inicial de amarração (Tie-In) fique visível no acabamento externo.",
    "technicalDetails": "Propriedades e regras de parametrização do Lead-In:\n• Posicionamento Estratégico: Localizado no ponto mais próximo da saída (Lead-Out) do objeto anterior para minimizar o curso do pantógrafo;\n• Caminho de Conexão Interno: Trilha de pontos corridos longos (2,5 mm a 3,5 mm) que viajam por dentro da forma até o início do satim/tatami;\n• Ocultação de Tie-In: Os pontos de amarração iniciais são executados diretamente no Lead-In sob a futura camada de ponto cheio;\n• Redução de Ciclos de Corte: O posicionamento inteligente do Lead-In permite bordar desenhos inteiros de 10.000 pontos com apenas 1 ou 2 cortes de linha;\n• Preservação da Tensão: Entradas suaves em ângulo oblíquo evitam solavancos bruscos na alavanca estica-fio.",
    "howItWorks": [
      "1. Ao finalizar um objeto bordado, o pantógrafo move-se em salto direto para a coordenada de Lead-In do próximo objeto.",
      "2. A máquina executa os pontos de amarração inicial de segurança no ponto de Lead-In.",
      "3. Uma trilha de sob-pontos corre por dentro do desenho até a borda de início do preenchimento.",
      "4. O preenchimento principal (ponto cheio ou tatami) é bordado por cima dessa trilha inicial.",
      "5. A trilha de entrada e os nós iniciais ficam completamente soterrados e invisíveis.",
      "6. A transição entre os elementos ocorre com fluidez mecânica contínua e sem paradas de corte."
    ],
    "beginnerExplanation": "O Lead-In é a 'porta de entrada' de um desenho no bordado! Em vez de a máquina começar a bordar bem na bordinha onde todo mundo vai ver o nozinho feio de início, o programador inteligente faz a máquina começar bem no meinho escondido. A agulha entra no meio, dá os pontinhos de trava e depois borda por cima de tudo! O resultado é um bordado super limpo, sem nenhuma pontinha de linha sobrando do lado de fora!",
    "applications": [
      "Digitalização contínua de monogramas cursivos sem nenhum corte de linha entre letras",
      "Ocultação total de nós de início em bordados de alta-costura e moda íntima",
      "Otimização de tempo de máquina em produções industriais de grandes tiragens",
      "Prevenção de descolamento de linhas em pontas afiadas de estrelas e brasões"
    ],
    "commonErrors": [
      "Deixar o Lead-In na ponta mais fina e externa de um objeto (o nó inicial fica exposto e desfiando)",
      "Traçar a linha de entrada por fora do desenho (cria uma 'linha perdida' visível no tecido que precisa ser cortada na tesoura)",
      "Posicionar o Lead-In longe do Lead-Out anterior, forçando o pantógrafo a atravessar o bastidor inteiro de ponta a ponta à toa"
    ],
    "troubleshootingTips": [
      "Utilize a ferramenta 'Resequence / Branching' no seu software para conectar automaticamente os Lead-Ins e Lead-Outs pelo caminho mais curto",
      "Certifique-se de que a trilha de entrada esteja a pelo menos 1,0 mm para dentro da borda externa do objeto",
      "Em textos cursivos, faça o Lead-In de cada letra coincidir com a perninha de ligação da letra anterior"
    ],
    "dicaArtrelados": "Para bordar frases e nomes sem nenhum corte de linha entre as letras: faça o Lead-In da próxima letra começar exatamente onde a letra anterior terminou, passando por dentro da costura. Seu bordado vai rodar até 4 vezes mais rápido e com avesso super limpo!",
    "voceSabia": "A redução de apenas 10 cortes de linha em uma matriz produzida em uma máquina industrial de 12 cabeçotes economiza mais de 45 minutos de trabalho por dia e milhares de metros de linha por ano!",
    "practicalExercise": "Abra uma matriz no seu software e use a ferramenta de edição de nós para mover o ponto de entrada (Lead-In / ícone verde) para o centro do desenho: veja como os nós de início somem por baixo dos pontos!",
    "quickSummary": "Ponto e vetor geométrico inicial onde a costura penetra no objeto, estrategicamente ocultado sob camadas superiores.",
    "relatedTerms": [
      "Lead-Out",
      "Locking Stitches",
      "Branching",
      "Underlay",
      "Trajetória de Ponto"
    ],
    "tags": [
      "l-023",
      "lead-in",
      "entry point",
      "ponto de entrada",
      "programacao",
      "otimizacao",
      "caminho de ponto",
      "artrelados"
    ],
    "bibliographicReferences": [
      "PULSE MICROSYSTEMS. Advanced Pathing, Branching and Entry/Exit Optimization. Toronto: Pulse, 2022.",
      "ARTRELADOS. A Geometria dos Caminhos: Lead-In, Lead-Out e Otimização Cinemática no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-024-lead-out-ponto-saida-transicao-exit-point",
    "code": "L-024",
    "term": "Lead-Out / Ponto de Saída e Transição (Exit Point / Out-Stitch Trajectory)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'Lead-Out' (condução para fora/saída suave).",
    "origin": "Conceito gêmeo do Lead-In na digitalização CNC, essencial para determinar onde um elemento encerra sua trajetória e como a linha se conecta ao próximo objeto com a menor distância vetorial possível.",
    "summary": "Coordenada e vetor final onde a costura de um objeto é encerrada, permitindo conexão limpa ou corte automático seguro.",
    "definition": "O Lead-Out (Ponto de Saída / Exit Point) é a coordenada cartesiana final de um bloco de bordado onde a agulha dá o último ponto antes de executar a amarração final (Tie-Off) e o corte automático de linha ou o salto de deslocamento para o próximo elemento. Um Lead-Out bem planejado direciona a saída do objeto diretamente em direção à entrada (Lead-In) do objeto seguinte, reduzindo drasticamente o comprimento dos fios de salto (Jump Stitches), impedindo que a ponta da linha cortada escape do nó e garantindo que o acabamento visual da extremidade permaneça perfeitamente liso e arredondado.",
    "technicalDetails": "Regras de engenharia para o ponto de saída Lead-Out:\n• Alinhamento Vetorial: Posicionado no ponto mais favorável para a transição imediata ao próximo elemento geométrico;\n• Ocultação de Tie-Off: A amarração final é executada na posição do Lead-Out, preferencialmente recuada 0,5 mm para dentro do preenchimento;\n• Redução de Fios de Salto: Minimiza a distância euclidiana (Δd = √(Δx² + Δy²)) entre objetos consecutivos;\n• Sequenciamento Ótimo: Garante fluxo de bordado contínuo e suave sem movimentos bruscos do pantógrafo em alta aceleração;\n• Controle de Tensão no Corte: Prepara a linha superior com uma folga estável para a ação da faca do aparador automático.",
    "howItWorks": [
      "1. A máquina completa o preenchimento do objeto bordado e conduz a agulha até a coordenada do Lead-Out.",
      "2. Executa a amarração de segurança final (Tie-Off) diretamente no ponto de saída.",
      "3. Se houver corte programado, o pantógrafo move a faca, corta a linha e salta para o próximo bloco.",
      "4. Se for uma conexão contínua (sem corte), a agulha inicia uma costura corrida discreta diretamente do Lead-Out até o Lead-In seguinte.",
      "5. A transição ocorre sem solavancos, preservando a tensão homogênea de toda a matriz.",
      "6. O resultado no avesso e no direito da peça é de limpeza cirúrgica, sem nós desfiando."
    ],
    "beginnerExplanation": "O Lead-Out é a 'porta de saída' de um desenho bordado! É o lugarzinho exato onde a máquina dá o último pontinho antes de cortar a linha ou pular para a próxima letra. Quando o programador escolhe a porta de saída no lugar certo, a máquina já sai pertinho da próxima letra sem ter que ficar puxando fios compridos pelo pano. O bordado fica muito mais limpo e você não precisa perder tempo cortando fiapos com a tesourinha depois!",
    "applications": [
      "Otimização de sequenciamento em matrizes com centenas de elementos menores",
      "Eliminação de fios de salto longos em monogramas e bordados delicados",
      "Prevenção de quebras de linha durante o acionamento do corte automático",
      "Criação de transições perfeitas em monogramas cursivos contínuos"
    ],
    "commonErrors": [
      "Deixar o Lead-Out no lado oposto do próximo objeto (força a máquina a criar um fio de salto gigante atravessando o bordado)",
      "Colocar o Lead-Out em uma borda fina sem espaço para a amarração final (a ponta da letra desmancha)",
      "Programar o Lead-Out sem nós de segurança antes de um corte de linha automático"
    ],
    "troubleshootingTips": [
      "No seu software de digitalização, visualize os ícones de entrada (verde) e saída (vermelho) de cada objeto e posicione-os sempre próximos uns dos outros",
      "Use a ferramenta de 'Otimização de Caminho' para recalcular automaticamente os melhores pontos de Lead-Out de toda a matriz",
      "Verifique se o comprimento do fio de salto entre o Lead-Out e o próximo Lead-In é menor que 2 mm para permitir bordados contínuos sem corte"
    ],
    "dicaArtrelados": "Sempre que for bordar um desenho com vários raminhos de flores: ajuste os Lead-Outs de cada folhinha para terminarem no galho principal. Assim a máquina borda o galho por cima de todos os nozinhos de saída, deixando a matriz sem nenhum fiapo para limpar!",
    "voceSabia": "Softwares modernos de digitalização com inteligência algorítmica conseguem recalcular as posições de Lead-In e Lead-Out de uma matriz com 50.000 pontos em menos de 0,2 segundos, reduzindo até 30% do tempo total de produção!",
    "practicalExercise": "Abra uma matriz no seu software e mova o ponto de saída (Lead-Out / ícone vermelho) para a posição mais próxima da entrada do próximo objeto: observe como a linha pontilhada de salto diminui instantaneamente!",
    "quickSummary": "Coordenada e vetor final onde a costura de um objeto se encerra, garantindo arremate seguro e transição curta.",
    "relatedTerms": [
      "Lead-In",
      "Locking Stitches",
      "Fio de Salto (Jump Stitch)",
      "Aparador de Linha"
    ],
    "tags": [
      "l-024",
      "lead-out",
      "exit point",
      "ponto de saida",
      "programacao",
      "otimizacao",
      "sequenciamento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA SOFTWARE SOLUTIONS. DGML by Pulse: Stitch Pathing, Lead-Out Configuration and Trimming Optimization. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Engenharia de Matrizes: Otimização de Saltos, Lead-Outs e Produtividade em Máquinas Industriais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-025-length-comprimento-de-ponto-running-tatami-length",
    "code": "L-025",
    "term": "Length / Comprimento de Ponto (Stitch Length in Running & Fill Stitches)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'Stitch Length' (comprimento/passo do ponto).",
    "origin": "Parâmetro geométrico primordial de controle numérico de bordado, definido pela distância vetorial linear percorrida pelo pantógrafo entre duas penetrações sucessivas da agulha no tecido.",
    "summary": "Distância milimétrica entre duas perfurações consecutivas da agulha, determinante para a flexibilidade do tecido, cobertura e velocidade da máquina.",
    "definition": "O Comprimento de Ponto (Stitch Length / Passo do Ponto) é a medida linear em milímetros da distância entre uma descida de agulha e a descida imediatamente seguinte. No ponto corrido (Running Stitch), o comprimento varia tipicamente de 2,0 mm a 3,5 mm; no ponto de preenchimento tatami, o comprimento padrão dos traços individuais é de 3,5 mm a 4,5 mm. Pontos muito curtos (menores que 1,2 mm) perfuram o tecido repetidamente no mesmo ponto, provocando buracos, cortes no tecido e quebra de agulhas; pontos excessivamente longos (maiores que 8,0 mm a 10,0 mm) ficam frouxos sobre a superfície, sujeitos a enroscar e repuxar durante o uso da peça.",
    "technicalDetails": "Valores padronizados e limites de comprimento de ponto:\n• Ponto Corrido Simples (Running Stitch): 2,2 mm a 2,8 mm (comprimento ideal para contornos e sob-pontos);\n• Ponto Corrido Curvo (Curve Filtering): Redução automática do comprimento para 1,2 mm a 1,8 mm nas curvas acentuadas para manter o contorno perfeitamente suave e sem cantos facetados;\n• Preenchimento Tatami (Tatami Pitch Length): 3,8 mm a 4,5 mm para flexibilidade equilibrada e brilho uniforme;\n• Ponto de Amarração (Tie-In/Tie-Off): 0,6 mm a 0,8 mm;\n• Limite Mínimo de Segurança (Short Stitch Filter): 0,4 mm a 0,5 mm (todos os pontos menores que isso são eliminados pelo processador da máquina);\n• Limite Máximo para Salto Automático (Jump Trigger): 7,0 mm a 12,0 mm (acima desse valor, a máquina converte o ponto em um salto sem penetração de agulha).",
    "howItWorks": [
      "1. O programador define o valor de comprimento de ponto no software de digitalização.",
      "2. Ao gerar a trilha de pontos, o software divide as curvas e linhas retas em segmentos com o comprimento configurado.",
      "3. A máquina recebe os códigos cartesianos (ΔX, ΔY) e move o pantógrafo na distância exata a cada batida de agulha.",
      "4. Em retas longas, o pantógrafo move-se com passos maiores e mais rápidos.",
      "5. Em curvas fechadas, o comprimento encurta automaticamente para não perder a precisão do desenho.",
      "6. A peça bordada adquire caimento flexível, sem criar rigidez excessiva nem laçadas soltas."
    ],
    "beginnerExplanation": "O comprimento de ponto é o 'tamanho do passo' que a máquina dá entre uma furada e outra no pano! Se o passo for muito pequenininho (parecendo formiguinha), a agulha fura o pano tantas vezes no mesmo lugar que pode rasgar o tecido e quebrar a linha. Se o passo for grande demais, a linha fica frouxa parecendo um varal e pode engatar nas coisas. O segredo é usar um comprimento médio (cerca de 2,5 a 4 milímetros) para o bordado ficar lindo, firme e macio!",
    "applications": [
      "Calibração de sob-pontos e contornos finos em matrizes de alta precisão",
      "Ajuste de flexibilidade em bordados sobre tecidos finos e fluidos (viscose e seda)",
      "Programação de pontos de pesponto e alinhavo temporário (K-Basting)",
      "Desenho de arabescos e motivos botânicos com curvas sinuosas nítidas"
    ],
    "commonErrors": [
      "Deixar pontos menores que 0,3 mm na matriz (corta o tecido como uma lâmina de serra e quebra a linha)",
      "Usar pontos corridos de 6 mm em roupas de bebê (os pezinhos e mãozinhas da criança enroscam nas linhas compridas)",
      "Não ativar a redução de comprimento em curvas, deixando círculos que parecem octógonos cheios de cantos retos"
    ],
    "troubleshootingTips": [
      "Ative sempre o 'Filtro de Pontos Curtos' (Short Stitch Filter) no seu software configurado para 0,4 mm",
      "Em curvas fechadas, reduza o comprimento de ponto para 1,5 mm para que o contorno fique redondo e perfeito",
      "Para tecidos elásticos, use comprimentos de ponto ligeiramente maiores (2,5 mm a 3,0 mm) para permitir que o tecido estique sem estourar as linhas"
    ],
    "dicaArtrelados": "Se você estiver bordando uma linha reta de contorno e ela estiver repuxando o pano: aumente o comprimento do ponto de 2,0 mm para 2,8 mm! Com menos perfurações no tecido, a tração diminui pela metade e o pano fica retinho e sem rugas!",
    "voceSabia": "Nas primeiras matrizes de fita perfurada dos anos 1970, o comprimento de ponto máximo que o motor de passo conseguia movimentar em um único ciclo mecânico sem desacelerar era de exatamente 12,7 mm (meia polegada)!",
    "practicalExercise": "Borde duas linhas retas no mesmo tecido: uma com comprimento de ponto de 1,5 mm e outra com 3,5 mm: passe o dedo sobre ambas e sinta a diferença de maciez e flexibilidade no tecido!",
    "quickSummary": "Distância linear milimétrica entre penetrações sucessivas da agulha, determinante para textura, flexibilidade e integridade do tecido.",
    "relatedTerms": [
      "Ponto Corrido",
      "Ponto Tatami",
      "Short Stitch Filter",
      "Densidade de Ponto"
    ],
    "tags": [
      "l-025",
      "comprimento de ponto",
      "stitch length",
      "length",
      "ponto corrido",
      "passo do ponto",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Stitch Length Dynamics and Vector Path Subdivision Standards. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Parâmetros Críticos da Digitalização: Densidade, Comprimento de Ponto e Filtros de Segurança. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-026-lantejoula-dispositivo-aplicacao-sequin-device-twin-feed",
    "code": "L-026",
    "term": "Lantejoula / Dispositivo Eletrônico de Aplicação de Lantejoulas (Sequin Device / Twin Sequin Feed)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Do árabe 'Sikka' (moeda cunhada) / Mecatrônica têxtil.",
    "origin": "Dispositivo motorizado com controle CNC pneumático e servomotor de passo integrado aos cabeçotes industriais (desenvolvido pela Tajima, Barudan e SWF) nos anos 2000 para dispensar, cortar e costurar lantejoulas e paetês de forma automatizada a até 1.000 peças por minuto.",
    "summary": "Acessório eletrônico motorizado acoplado ao cabeçote de bordado que alimenta rolos de lantejoulas contínuas, corta cada unidade e a fixa no tecido com pontos programados.",
    "definition": "O Dispositivo de Lantejoulas (Sequin Device / Twin Sequin & Reversible Pailette Attachment) é um módulo eletromecânico de alta precisão instalado ao lado da barra de agulhas da máquina de bordar industrial. Ele recebe rolos de fita de lantejoulas plásticas pré-furadas (de 2 mm a 9 mm de diâmetro, planas, côncavas ou reversíveis / lantejoulas mágicas). Um micro-servomotor avança a fita milimetricamente, uma guilhotina microscópica corta a lantejoula individual e a agulha da máquina desce com a linha superior através do furo central da lantejoula, fixando-a com uma costura em estrela (Star Stitch), ponto em 'Y' ou ponto cruzado antes de avançar para a seguinte.",
    "technicalDetails": "Engenharia e recursos do dispositivo de lantejoulas:\n• Tamanhos Suportados: Lantejoulas circulares, estreladas ou ovais de 2 mm a 9 mm de diâmetro;\n• Dispositivo Duplo (Twin Sequin): Dois alimentadores independentes no mesmo cabeçote, permitindo misturar lantejoulas de cores ou tamanhos diferentes no mesmo motivo;\n• Velocidade Operacional: 700 a 1.000 lantejoulas costuradas por minuto com total estabilidade mecânica;\n• Tipos de Fixação de Ponto: Ponto de 3 pontas (Y-Stitch), Ponto de 4 pontas (Cruz), Ponto de Borda (Overlap Sequin) ou Ponto Reversível para lantejoulas mágicas bicolor;\n• Lâmina de Corte: Aço tungstênio de alta dureza com vida útil superior a 20 milhões de cortes;\n• Sensor de Fim de Rolo: Sensor óptico que interrompe a máquina imediatamente se o rolo de lantejoulas terminar.",
    "howItWorks": [
      "1. O operador carrega os rolos de fitas de lantejoulas nos suportes giratórios superiores da máquina.",
      "2. A fita é conduzida através das guias de precisão até a lâmina do cabeçote.",
      "3. O software comanda o disparo: o servomotor avança a fita em exatamente 1 passo (ex: 5 mm).",
      "4. A guilhotina corta a ponte plástica entre a lantejoula e a fita.",
      "5. A sapata abaixa e posiciona a lantejoula sobre a coordenada do tecido.",
      "6. A agulha desce através do orifício central da lantejoula e executa os pontos de fixação.",
      "7. O pantógrafo se desloca e o ciclo se repete até 1.000 vezes por minuto, criando desenhos brilhantes e reluzentes."
    ],
    "beginnerExplanation": "O aplicador de lantejoulas é aquele acessório incrível que parece um robô instalado na máquina de bordar que prega paetês e lantejoulas sozinho! Em vez de alguém ficar costurando lantejoula por lantejoula na mão com agulha, a máquina puxa uma fita cheia de lantejoulas, corta uma pecinha na hora e já prega no pano com a linha num piscar de olhos! É com isso que se fazem aquelas almofadas e camisetas famosas de 'lantejoula mágica' que você passa a mão e ela muda de cor!",
    "applications": [
      "Vestuário infantil com lantejoulas mágicas reversíveis que mudam de cor ao toque",
      "Vestidos de festa luxo, moda noiva, figurinos de dança e Carnaval",
      "Logotipos brilhantes em camisetas de moda feminina e moda jovem",
      "Almofadas decorativas e acessórios reluzentes de alto impacto visual"
    ],
    "commonErrors": [
      "Usar rolos de lantejoulas de baixa qualidade com furos fora de centro (a agulha bate no plástico duro e quebra)",
      "Programar a matriz com sobreposição incorreta de lantejoulas, fazendo uma subir em cima da outra de forma torta",
      "Deixar poeira e pedaços de plástico cortado acumularem dentro da guilhotina móvel"
    ],
    "troubleshootingTips": [
      "Mantenha a lâmina de corte de lantejoulas limpa e lubrificada com microgotas de óleo fino a cada semana",
      "Utilize agulha ponta aguda ou bola fina calibre 75/11 resistente a impacto",
      "Use linha de poliéster 100% resistente e transparente (fio de monofilamento) ou linha da mesma cor da lantejoula para fixações discretas"
    ],
    "dicaArtrelados": "Para fazer lantejoulas reversíveis (aquelas que viram e mudam de cor quando você passa a mão): configure o ponto de fixação no software para o tipo 'Ponto de Borda Simples' (Overlap Top Stitch). Se você pregar com ponto em cruz pelo meio, a lantejoula trava e não vira!",
    "voceSabia": "As primeiras lantejoulas da história foram encontradas costuradas nas vestes de ouro do faraó Tutancâmon em 1323 a.C., feitas de minúsculos discos de ouro puro martelados à mão para proteger o faraó de maus espíritos!",
    "practicalExercise": "Observe um bordado com lantejoulas reversíveis: passe a mão para cima e para baixo e repare como cada lantejoula foi costurada exatamente na mesma bordinha para poder girar livremente 180 graus!",
    "quickSummary": "Dispositivo robótico de cabeçote que alimenta, corta e costura lantejoulas e paetês no bastidor a até 1.000 unidades por minuto.",
    "relatedTerms": [
      "Lantejoula Reversível",
      "Twin Sequin",
      "Moda Festa",
      "Ponto em Y"
    ],
    "tags": [
      "l-026",
      "lantejoula",
      "sequin device",
      "paete",
      "twin sequin",
      "moda festa",
      "automacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA EMBROIDERY MACHINERY. Sequin Device Operating Manual and Digitizing Patterns. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Brilho Automatizado: Aplicação de Lantejoulas, Paetês e Efeitos Reversíveis no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-027-lese-laise-broderie-anglaise-schiffli-eyelet-lace",
    "code": "L-027",
    "term": "Lese / Laise / Broderie Anglaise (Schiffli Eyelet Lace Fabric)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Do francês 'Laise' (tecido rendado furadinho) e 'Broderie Anglaise'.",
    "origin": "Técnica tradicional de bordado vazado em tecido de algodão branco originada na Inglaterra e França no século XIX, posteriormente industrializada em larga escala nas gigantescas máquinas de tear Schiffli da Suíça.",
    "summary": "Tecido leve de algodão caracterizado por vazados circulares ou florais delicados cercados por costuras e cordones de acabamento.",
    "definition": "O Laise (ou Lese / Broderie Anglaise / Tecido Furadinho) é um tecido plano leve, geralmente 100% algodão ou cambraia mista, enriquecido por padrões geométricos ou florais de orifícios perfurados (ilhós vazados) cercados por cordones cheios e bordados em relevo. No bordado computadorizado moderno, o Laise pode ser utilizado como tecido base nobre para monogramas e aplicações, ou pode ser produzido do zero no bastidor através de técnicas de perfuração mecânica (com faquinhas de recorte / Boring Tool / Agulha Lanceta) combinadas com preenchimento em ponto cheio e rendas solúveis.",
    "technicalDetails": "Propriedades e estabilização de tecidos Laise:\n• Composição: 100% Algodão leve, Cambraia de linho ou Voil bordado;\n• Densidade de Vazados: Superfície com dezenas de orifícios abertos que diminuem a estabilidade mecânica do tecido;\n• Estabilização Obrigatória: Entretela rasgável de boa densidade (50 a 60 g/m²) ou entretela hidrossolúvel de base para evitar que os novos pontos afundem nos furos pré-existentes;\n• Agulha Indicada: Agulha universal para bordado calibre 70/10 ou 75/11 com ponta fina (SES);\n• Posicionamento de Monogramas: Deve-se planejar a matriz para que os pontos principais caiam sobre as partes sólidas do tecido, evitando os orifícios abertos.",
    "howItWorks": [
      "1. O tecido Laise é passado e posicionado sobre entretela firme no bastidor.",
      "2. Se o Laise for muito fino ou furadinho, aplica-se uma camada de filme plástico hidrossolúvel no topo.",
      "3. A máquina borda o monograma ou motivo floral em velocidade moderada (600 PPM).",
      "4. Os sob-pontos de sustentação criam uma ponte estável sobre os vazados do tecido.",
      "5. Os pontos cheios assentam-se com nitidez sobre a textura rendada.",
      "6. A peça é lavada para dissolver o plástico solúvel do topo.",
      "7. O resultado é uma peça romântica, delicada e de estética artesanal vintage."
    ],
    "beginnerExplanation": "O Laise (ou Lese) é aquele tecido de algodão todo furadinho e cheio de buraquinhos redondos bordados, muito usado em vestidinhos brancos de verão, batinhas românticas e toalhas de batizado! Como ele já é cheio de furinhos, quando você for bordar um nome em cima dele, basta colocar um plástico solúvel por cima e uma entretela firme por baixo para a agulha não engatar nos buracos do tecido. O bordado fica delicado e com cara de roupa de princesa!",
    "applications": [
      "Vestidos infantis, batinhas de bebê, roupas de batizado e primeira comunhão",
      "Blusas femininas de verão, saídas de praia românticas e camisolas de algodão",
      "Enxovais clássicos de berço, almofadas vintage e barrados de toalhas",
      "Produção de rendas inglesas personalizadas no bastidor com agulha furadora (Borer)"
    ],
    "commonErrors": [
      "Bordar sem plástico solúvel no topo (os pontos caem dentro dos furos do Laise e somem)",
      "Puxar o tecido torto no aro do bastidor, esticando e deformando os círculos dos buraquinhos",
      "Digitalizar fontes minúsculas com pontos finos que coincidem com os vazados do tecido"
    ],
    "troubleshootingTips": [
      "Use sempre fontes com colunas de satim mais largas (pelo menos 2,5 mm) para cobrir eventuais furinhos do tecido com facilidade",
      "Empregue entretela hidrossolúvel para que o verso fique tão delicado e limpo quanto o direito",
      "Passe o tecido pelo avesso com ferro a vapor para não amassar o relevo dos pontos bordados originais do Laise"
    ],
    "dicaArtrelados": "Para criar barrados de Laise personalizados no bastidor: use uma entretela solúvel dupla, faça círculos de 3 mm com ponto cheio em volta e use a agulha de corte (Borer). Você cria seu próprio tecido Laise exclusivo direto na máquina!",
    "voceSabia": "Na Inglaterra vitoriana do século XIX, a 'Broderie Anglaise' era tão cobiçada pela nobreza que as damas da corte competiam para ver quem usava vestidos com o maior número de furinhos bordados por centímetro quadrado!",
    "practicalExercise": "Pegue um pedaço de tecido Laise, coloque plástico hidrossolúvel no topo e borde um monograma clássico: veja como o bordado flutua perfeitamente sobre os furinhos do tecido com nitidez absoluta!",
    "quickSummary": "Tecido leve de algodão furadinho com acabamento rendado romântico, ideal para moda verão, batizados e enxovais vintage.",
    "relatedTerms": [
      "Boring Tool",
      "Free Standing Lace",
      "Cambraia de Linho",
      "Plástico Hidrossolúvel"
    ],
    "tags": [
      "l-027",
      "lese",
      "laise",
      "broderie anglaise",
      "furadinho",
      "algodao",
      "romantico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE HISTORY SOCIETY. Broderie Anglaise and the Swiss Schiffli Lace Industry. Zurich: THS, 2021.",
      "ARTRELADOS. Tecidos Rendados, Laise e Broderie Anglaise: Técnicas de Perfuração e Bordado sobre Vazados. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-028-lastex-linha-elastica-franzidos-smocking-no-bastidor",
    "code": "L-028",
    "term": "Lastex / Linha Elástica para Franzidos e Smocking no Bastidor (Shirring Elastic Thread)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino / Marca registrada da Lastex Yarn Co. / Fios elastoméricos.",
    "origin": "Desenvolvido nos anos 1930 combinando filamentos de borracha natural vulcanizada ou elastano revestidos por poliéster, adaptado criativamente no bordado computadorizado para criar efeitos franzidos tridimensionais (Smocking) direto no bastidor.",
    "summary": "Fio elástico de borracha utilizado na canelinha inferior para produzir franzidos automáticos, babados e efeito 'Ponto Colmeia / Casinha de Abelha' no tecido.",
    "definition": "O Lastex (Linha Elástica de Bobina / Shirring & Smocking Thread) é um fio flexível composto por uma alma elástica de borracha ou elastano (Spandex) recoberta por uma espiral de filamentos de poliéster ou poliamida. No bordado computadorizado, o Lastex é enrolado manualmente na canelinha inferior com leve tração, enquanto a agulha superior utiliza linha comum de poliéster. Quando a máquina borda linhas retas paralelas ou padrões geométricos em zigue-zague sobre tecidos leves (como viscose, crepe ou cambraia), a tensão elástica do Lastex puxa e contrai o tecido, gerando franzidos perfeitos e elásticos (efeito casinha de abelha / Smocking) com altíssima uniformidade.",
    "technicalDetails": "Propriedades e parametrização para bordar com Lastex:\n• Enrolamento da Canelinha: DEVE ser enrolado manualmente na canelinha com tração moderada e constante (nunca no enchedor automático da máquina);\n• Ajuste da Caixa de Bobina: Alívio quase total do parafuso da mola tensora da caixa de bobina para permitir a passagem livre do fio grosso de borracha (ou uso de uma caixa de bobina reserva dedicada);\n• Linha Superior: Linha comum de poliéster ou viscose 40wt com tensão superior ligeiramente aumentada para puxar o elástico;\n• Tecidos Ideais: Tecidos planos leves e fluidos (Viscose, Seda, Chiffon, Cambraia de Algodão, Voil);\n• Ativação Térmica: O franzido atinge sua contração máxima após passar um ferro a vapor sem encostar na peça (o calor do vapor retrai o elástico instantaneamente em até 40%).",
    "howItWorks": [
      "1. A bordadeira enrola o Lastex manualmente na canelinha com uma leve puxadinha de tensão.",
      "2. Encaixa a canelinha na caixa de bobina ajustada para passagem suave.",
      "3. Passa linha colorida comum na agulha superior.",
      "4. Monta o tecido plano no bastidor sem esticar.",
      "5. A máquina borda linhas paralelas com ponto corrido ou padrões em zigue-zague.",
      "6. Ao retirar a peça do bastidor, o tecido contrai-se em franzidos uniformes e elásticos.",
      "7. Borrifa-se vapor de ferro bem quente a 2 cm de distância: o Lastex encolhe e os franzidos ganham textura de favo de mel elástica e impecável."
    ],
    "beginnerExplanation": "O Lastex é aquela linha de elástico fininha que a gente usa para fazer franzidos e babadinhos elásticos em vestidos de verão e blusas ciganinhas! Em vez de usar na agulha, você enrola o Lastex na canelinha com a mão. A máquina borda por cima e, quando você tira o pano do bastidor, o tecido se junta todinho formando aquele franzido elástico maravilhoso que estica no corpo! Se você jogar um vaporzinho de ferro por cima, ele encolhe e fica ainda mais fofinho!",
    "applications": [
      "Bordados com efeito 'Casinha de Abelha' (Smocking) em vestidos infantis clássicos",
      "Franzidos elásticos no busto e mangas de vestidos ciganinha e blusas de verão",
      "Detalhes tridimensionais texturizados em almofadas decorativas e colchas",
      "Punhos elásticos decorados e golas franzidas em alta-costura"
    ],
    "commonErrors": [
      "Enrolar o Lastex no enchedor elétrico da máquina (estica demais o elástico e quebra o carretel)",
      "Passar o ferro quente encostando direto no Lastex (a borracha interna queima, derrete e perde toda a elasticidade)",
      "Tentar usar Lastex em tecidos pesados e duros como jeans ou lona (o elástico não tem força para franzir tecidos grossos)"
    ],
    "troubleshootingTips": [
      "Tenha uma caixa de bobina reserva separada só para Lastex, com o parafuso afrouxado, para não desregular sua caixa de bobina principal de bordado",
      "Use comprimento de ponto longo (3,5 mm a 4,5 mm) na matriz para que o tecido tenha espaço para franzir livremente",
      "Ao terminar o bordado, dê um nozinho manual nas pontas do Lastex no avesso para que o franzido não se solte nas pontas"
    ],
    "dicaArtrelados": "Para ativar o franzido máximo do Lastex: nunca encoste a base de metal do ferro na peça! Apenas segure o ferro a vapor a cerca de 3 dedos de distância e solte jatos fortes de vapor. O tecido vai encolher diante dos seus olhos formando favos de mel perfeitos!",
    "voceSabia": "O ponto Smocking (casinha de abelha) foi criado por camponeses ingleses no século XVIII para que suas camisas de trabalho tivessem elasticidade natural para arar o campo muito antes de a borracha ou o elastano existirem!",
    "practicalExercise": "Enrole Lastex em uma canelinha, passe linha comum em cima e borde 4 linhas retas paralelas espaçadas por 1 cm em um retalho de viscose: solte o vapor do ferro e veja o tecido se transformar em um franzido elástico perfeito!",
    "quickSummary": "Fio elástico de bobina que produz franzidos elásticos automáticos e efeito casinha de abelha (Smocking) no bastidor.",
    "relatedTerms": [
      "Smocking",
      "Caixa de Bobina",
      "Ponto Corrido",
      "Ativação a Vapor"
    ],
    "tags": [
      "l-028",
      "lastex",
      "linha elastica",
      "franzido",
      "smocking",
      "casinha de abelha",
      "babados",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SINGER SEWING COMPANY. Machine Shirring, Smocking and Elastic Bobbin Techniques. Nashville: Singer, 2021.",
      "ARTRELADOS. Efeitos Especiais de Textura: Lastex, Smocking Digital e Franzidos Estruturados no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-029-lenceria-acabamento-bainha-aberta-ponto-paris-wing-needle",
    "code": "L-029",
    "term": "Lenceria / Acabamento de Bainha Aberta e Ponto Paris (Hemstitching & Wing Needle Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino / Do espanhol 'Lencería' (roupa branca/lingerie/enxoval fino).",
    "origin": "Técnica secular de bordado vazado em bainhas de linho e cambraia (Hemstitching / Ajour / Ponto Paris), reproduzida eletronicamente no bastidor com o auxílio de agulhas com asas laterais alargadas (Wing Needles / Agulhas Asa).",
    "summary": "Técnica refinada de bordado que afasta as fibras do tecido para criar orifícios decorativos e rendilhados rendados geométricos em barras de lençóis e toalhas finas.",
    "definition": "A técnica de Lenceria (Bainha Aberta / Ponto Paris / Hemstitching / Ajourado no Bastidor) é um método tradicional de bordado vazado em que a agulha não apenas deposita linha, mas atua mecanicamente para abrir e espaçar os fios da trama do tecido sem cortá-los. Utilizando uma agulha especial com aletas laterais largas (Agulha Asa / Wing Needle calibre 100/16 ou 120/19), a lâmina afasta os fios de urdume e trama a cada penetração, enquanto a linha de bordar superior (de preferência algodão fino 50wt ou viscose) envolve esses pequenos feixes de fibras com pontos decorativos de amarração (como o Ponto Paris ou Ponto Veneziano), criando uma fileira contínua de orifícios quadrados translúcidos de extrema elegância.",
    "technicalDetails": "Propriedades e parametrização do Hemstitching no bastidor:\n• Agulha Obrigatória: Agulha Asa (Wing Needle / Agulha Lanceta) com expansões laterais que atuam como cunhas;\n• Tecidos Compatíveis: Tecidos de fibras naturais com trama visível e desfiável (100% Linho, Cambraia de Algodão, Percal 200 a 400 fios, Batista);\n• Tecidos Incompatíveis: Malhas, microfibras e sintéticos (não abrem furos estáveis);\n• Estabilização Estratégica: Entretela 100% hidrossolúvel (Water-Soluble Stabilizer) para que, após a lavagem, os furos fiquem completamente ocos e translúcidos;\n• Geometria de Pontos: Ponto Paris (Ponto em 'E' ou zigue-zague aberto) com avanço preciso e múltiplas penetrações no mesmo orifício para fixar a abertura.",
    "howItWorks": [
      "1. A bordadeira instala a Agulha Asa (Wing Needle) na barra de agulhas da máquina.",
      "2. Estabiliza o tecido de linho no bastidor usando exclusivamente entretela hidrossolúvel no verso.",
      "3. Carrega a matriz de bainha aberta com pontos de Ponto Paris ou Ajour.",
      "4. A máquina borda em velocidade lenta (400 a 500 PPM): as asas da agulha entram no tecido e empurram as fibras laterais abrindo um furo limpo.",
      "5. A linha de algodão envolve as fibras adjacentes, amarrando-as firmemente para que o furo não se feche.",
      "6. A peça é lavada em água limpa para dissolver a entretela.",
      "7. Ao secar e passar com ferro e vapor, a barra exibe uma galeria clássica de vazados rendados de altíssimo valor de alta-costura."
    ],
    "beginnerExplanation": "A técnica de lenceria (ponto Paris / bainha aberta) é aquele acabamento maravilhoso que a gente vê na barra de lençóis de noiva e toalhas de banquete de linho fino, cheia de furinhos quadrados perfeitamente amarrados parecendo uma rendinha feita à mão! Para fazer isso na máquina, a gente usa uma agulha especial chamada 'Agulha Asa' que tem duas asinhas de avião dos lados. Conforme a agulha desce, as asinhas abrem espaço entre os fios do tecido e a linha amarra as pontinhas para o furinho ficar aberto para sempre!",
    "applications": [
      "Barras de lençóis finos, fronhas e enxovais de noiva e batizado",
      "Toalhas de mesa de banquete, jogos americanos e guardanapos de puro linho",
      "Acabamentos em camisas sociais masculinas de gala e blusas vitorianas",
      "Cortinas clássicas e peças de decoração de alto padrão"
    ],
    "commonErrors": [
      "Tentar fazer Hemstitching em malhas de algodão ou tecidos de poliéster elástico (os furos não abrem e o tecido repuxa)",
      "Usar entretela rasgável comum (a entretela fica presa dentro dos buraquinhos e estraga o visual vazado)",
      "Bordar em velocidade alta (1.000 PPM), entortando a agulha asa e quebrando peças internas da máquina"
    ],
    "troubleshootingTips": [
      "Use sempre entretela 100% solúvel em água por baixo para que os orifícios fiquem perfeitamente ocos e translúcidos",
      "Borde em velocidade reduzida (400 a 500 PPM) para dar tempo de as asas da agulha moldarem as fibras com suavidade",
      "Passe o tecido de linho com bastante vapor antes e depois do bordado para assentar as fibras ao redor dos vazados"
    ],
    "dicaArtrelados": "Para fazer bainhas abertas perfeitas: use linha de algodão egípcio nº 50 no mesmo tom exato do linho. A linha fosca se funde com a cor do tecido e parece que os furinhos foram desfiados e amarrados fio por fio à mão por uma rendeira tradicional!",
    "voceSabia": "As agulhas asa foram criadas na Suíça no final do século XIX para equipar as oficinas das bordadeiras dos conventos da Basiléia, que confeccionavam os paramentos litúrgicos do Vaticano!",
    "practicalExercise": "Instale uma agulha asa na sua máquina, coloque linho com entretela solúvel no bastidor e selecione um ponto de bainha aberta (Ponto Paris): lave com água, passe a ferro e encante-se com o rendilhado aberto!",
    "quickSummary": "Técnica de bainha aberta com agulha asa e entretela solúvel que cria orifícios rendados e vazados clássicos em tecidos nobres.",
    "relatedTerms": [
      "Agulha Asa (Wing Needle)",
      "Ponto Paris",
      "Ajour",
      "Linho Puro",
      "Entretela Solúvel"
    ],
    "tags": [
      "l-029",
      "lenceria",
      "hemstitching",
      "ponto paris",
      "agulha asa",
      "wing needle",
      "ajour",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ NEEDLES. Wing Needle and Hemstitching Applications in Heirloom Embroidery. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. A Nobreza dos Vazados: Ponto Paris, Agulhas Asa, Ajour e Bainhas Abertas no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-030-lurex-fita-fio-metalizado-alta-refletancia-glamour",
    "code": "L-030",
    "term": "Lurex / Fita e Fio Metalizado de Alta Refletância (Lurex Metallic Film & Yarn)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino / Marca registrada da The Lurex Co. / Metalização a vácuo.",
    "origin": "Criado em 1946 pela The Lurex Company nos Estados Unidos, revolucionando a história da moda ao substituir fios pesados de metal fundido por fitas de poliéster metalizado com alumínio microscópico sob vácuo.",
    "summary": "Termo consagrado para fitas e fios têxteis metalizados de altíssimo brilho reflexivo dourado, prateado ou multicolorido usados em bordados de gala e festa.",
    "definition": "O Lurex (Fio Lurex / Fita de Poliéster Metalizada) é a designação mundialmente consagrada para os fios sintéticos compostos por uma fita ultrafina de poliéster revestida com uma camada atômica de alumínio vaporizado e selada com resinas transparentes ou pigmentadas. No universo do bordado e da confecção, o Lurex é utilizado tanto na forma de linhas de bordar metálicas quanto como tecido de suporte e fios de trançado para cordões soutache e passamanarias. Oferece brilho reflexivo cintilante incomparável, leveza e alta durabilidade sem oxidar nem escurecer como os antigos metais nobres.",
    "technicalDetails": "Propriedades físicas e químicas do Lurex:\n• Espessura do Filme: Fitas de poliéster cortadas com largura de 0,2 mm a 0,5 mm e espessura de 12 a 25 microns;\n• Resistência à Oxidação: O filme de alumínio é encapsulado por resina de poliéster, impedindo a ferrugem ou o escurecimento por contato com suor ou ar;\n• Brilhos e Efeitos: Ouro pálido, Ouro antigo, Prata pura, Cobre, Bronze, Holográfico (Furacor) e Tons Neon;\n• Elasticidade: Baixíssima elasticidade longitudinal, exigindo tensores livres de atrito e passagens retilíneas;\n• Temperatura Máxima de Ferro: 130°C (sempre passar com tecido de proteção por cima);\n• Agulha Indicada: Agulha Metallic ou Topstitch calibre 80/12 ou 90/14.",
    "howItWorks": [
      "1. A fita de Lurex enrolada no cone é protegida por uma redinha elástica para evitar o desenrolamento descontrolado.",
      "2. O fio passa pelos tensores da máquina com tração aliviada.",
      "3. A agulha com olho especial conduz o fio através do tecido.",
      "4. A camada de alumínio reflete os raios de luz do ambiente com alto índice de refração.",
      "5. Os pontos formam superfícies cintilantes de brilho glamoroso.",
      "6. A peça finalizada ganha status de luxo e sofisticação visual imediata."
    ],
    "beginnerExplanation": "O Lurex é o nome mais famoso do mundo para aquele fio brilhante de ouro, prata e furacor que todo mundo ama em roupas de festa e Carnaval! Ele é feito de um plástico bem fininho coberto com uma camada de brilho de metal que nunca fica preto nem enferruja. Quando você borda com Lurex, o desenho fica parecendo uma joia de verdade cheia de glamour e brilho!",
    "applications": [
      "Bordados em vestidos de gala, trajes de festa e moda noiva",
      "Emblemas comemorativos, coroas, faixas presidenciais e divisas militares",
      "Customização de sapatos, tênis de festa, bolsas e clutches",
      "Detalhes cintilantes em matrizes natalinas e artigos de decoração de fim de ano"
    ],
    "commonErrors": [
      "Usar o ferro de passar muito quente em cima do Lurex (ele derrete e vira uma mancha opaca)",
      "Bordar sem redinha no cone (o fio de Lurex escorrega para a base do carretel e tranca a linha)",
      "Bordar em velocidade alta sem agulha própria para fios metálicos"
    ],
    "troubleshootingTips": [
      "Coloque sempre uma redinha de proteção no cone de Lurex para manter a saída de fio constante",
      "Passe as peças bordadas com Lurex sempre pelo avesso sobre uma toalha macia",
      "Use lubrificante de silicone para linhas de bordar na passagem do cabeçote se o fio estiver ressecado"
    ],
    "dicaArtrelados": "Para dar um toque sutil de riqueza a qualquer matriz floral: não borde a flor inteira de Lurex! Borde as pétalas com linha colorida comum e use o Lurex dourado apenas no miolinho e nos contornos finos. Fica um bordado sofisticado e de extremo bom gosto!",
    "voceSabia": "O termo 'Lurex' foi criado nos anos 1940 a partir da junção da palavra inglesa 'Lure' (atrair/seduzir) com 'Ex' (excelência), para simbolizar o poder de sedução do brilho do ouro na moda!",
    "practicalExercise": "Borde um pequeno monograma com linha de Lurex prateada em um pedaço de veludo preto: observe como o contraste de luz cria um efeito de puro luxo visual!",
    "quickSummary": "Fita e fio de poliéster metalizado com alumínio sob vácuo de altíssimo brilho cintilante, ícone do glamour e da moda festa.",
    "relatedTerms": [
      "Linha Metálica",
      "Lamé",
      "Agulha Metallic",
      "Moda Festa"
    ],
    "tags": [
      "l-030",
      "lurex",
      "fio metalico",
      "brilho",
      "ouro",
      "prata",
      "glamour",
      "artrelados"
    ],
    "bibliographicReferences": [
      "THE LUREX COMPANY. Technical Bulletin: Metallic Yarns in Modern Embroidery and Weaving. London: Lurex, 2022.",
      "ARTRELADOS. O Poder do Brilho: Lurex, Fios Metalizados e Alta-Costura no Bastidor Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-037-linha-poliester-60wt-75wt-micro-letras-microfilamento",
    "code": "L-037",
    "term": "Linha de Poliéster 60wt e 75wt para Micro-Letras (Micro-Filament Embroidery Thread)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da metrologia e titulação têxtil (Weight System).",
    "origin": "Desenvolvida por fiações técnicas de ponta (Gunold, Madeira, Amann) para atender à demanda da indústria farmacêutica, aeroespacial e de uniformes militares por bordado legível de micro-textos com menos de 4 mm de altura.",
    "summary": "Linha ultrafina de alta tenacidade (títulos 60wt e 75wt) que permite bordar detalhes microscópicos, textos minúsculos e crachás com nitidez fotográfica.",
    "definition": "A Linha de Poliéster para Micro-Letras (Extra-Fine 60wt / 75wt Embroidery Thread / Fio de Microfilamento) é uma linha técnica de altíssima precisão com espessura significativamente mais fina que a linha padrão 40wt (cerca de 30% a 50% mais fina). Produzida com microfilamentos contínuos de poliéster 100% trilobal de alta tenacidade, ela permite à máquina bordar textos minúsculos (com altura de 2,5 mm a 4,0 mm, como números de telefone, endereços de websites, CNPJ e advertências farmacêuticas em uniformes) sem que as hastes das letras se toquem ou se transformem em borrões de linha.",
    "technicalDetails": "Propriedades comparativas das linhas finas:\n• Titulação: Nº 60 (60wt / dtex 84x2) e Nº 75 (75wt / dtex 60x2 - a linha mais fina do mundo para bordado mecânico);\n• Espessura Comparativa: Uma linha 40wt possui diâmetro médio de 0,22 mm, enquanto a 60wt tem 0,14 mm e a 75wt tem 0,09 mm;\n• Agulha Obrigatória: Agulha fina de calibre 65/9 ou 60/8 com ponta aguda (Microtex) ou bola fina (SES);\n• Densidade Digital Recomendada: Exige aumento de densidade na matriz (espaçamento entre pontos de 0,28 mm a 0,32 mm) para manter a cobertura perfeita com fios mais finos;\n• Velocidade Operacional: Execução estável a 700 a 900 PPM com tensão superior aliviada em cerca de 20%.",
    "howItWorks": [
      "1. A bordadeira programa o texto minúsculo no software com colunas de satim de 0,8 mm a 1,0 mm de largura.",
      "2. Instala a linha 60wt ou 75wt no cabeçote e uma agulha fina 65/9.",
      "3. Ajusta a tensão superior de forma suave para não tracionar em excesso o fio delicado.",
      "4. A máquina borda os micro-textos em velocidade moderada.",
      "5. A agulha fina perfura o tecido com orifícios microscópicos quase invisíveis.",
      "6. A linha fina assenta-se com extrema definição e geometria afiada.",
      "7. O resultado é um texto de 3 mm perfeitamente legível a olho nu, com acabamento de joia de precisão."
    ],
    "beginnerExplanation": "A linha 60wt ou 75wt é uma linha 'superfininha' feita especialmente para bordar aquelas letrinhas minúsculas que a linha normal não consegue fazer! Quando você precisa bordar o número de telefone de uma empresa ou um site em um jaleco de médico e as letrinhas têm menos de meio centímetro, a linha comum fica muito grossa e embola tudo. Usando essa linha fininha com uma agulha bem fina, as letrinhas saem tão nítidas e perfeitinhas que parecem impressas no papel!",
    "applications": [
      "Bordado de telefones, sites e redes sociais em logotipos corporativos no peito de camisas e polos",
      "Crachás e etiquetas de identificação de segurança em uniformes militares e hospitalares",
      "Detalhes microscópicos em olhos, cílios e cabelos de personagens e retratos realistas",
      "Bordados em tecidos nobres ultrafinos como musselina de seda, organza e tule sem repuxar"
    ],
    "commonErrors": [
      "Usar agulha grossa 90/14 com linha fina 60wt (o furo da agulha no tecido fica gigante e a linha 'dança' solta)",
      "Manter a densidade padrão de linha grossa (o bordado fica transparente e ralo)",
      "Puxar a linha com tensão apertada de linha grossa (arrebenta o fio com facilidade)"
    ],
    "troubleshootingTips": [
      "Sempre troque a agulha para o calibre 65/9 ou 70/10 ao usar linhas 60wt",
      "No software de matrizes, aumente a densidade dos pontos cheios em 15% a 20% (reduza o espaçamento de 0,40 mm para 0,30 mm)",
      "Use entretela recortável leve (No-Show Mesh) para sustentar as perfurações delicadas sem enrugar o tecido"
    ],
    "dicaArtrelados": "Vai bordar o logotipo de um cliente que tem um número de WhatsApp ou site pequenininho embaixo do nome? Borde o nome grande com linha 40wt normal e as letrinhas do WhatsApp com linha 60wt! A nitidez fica impecável e o cliente vai ficar encantado com o profissionalismo!",
    "voceSabia": "A linha de bordar calibre 75wt possui filamentos tão microscópicos que um único novelo de apenas 100 gramas contém mais de 15 quilômetros lineares de fio contínuo!",
    "practicalExercise": "Escreva um número de telefone com 3 mm de altura no seu software: borde com linha normal 40wt e agulha 75/11 em um retalho e depois borde com linha 60wt e agulha 65/9. Compare as duas com a lupa de bancada e veja a diferença brutal de nitidez!",
    "quickSummary": "Linha de poliéster ultrafina para detalhes microscópicos e micro-textos menores que 4 mm com nitidez cirúrgica.",
    "relatedTerms": [
      "Agulha 65/9",
      "Lettering",
      "Titulação Têxtil (Weight)",
      "No-Show Mesh"
    ],
    "tags": [
      "l-037",
      "linha 60wt",
      "micro-letras",
      "microfilamento",
      "alta precisao",
      "textos pequenos",
      "fios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNINDUSTRIE. Polyneon 60 & 75: Technical Manual for Micro-Lettering and High-Definition Digitizing. Freiburg: Madeira, 2022.",
      "ARTRELADOS. A Arte da Micro-Tipografia: Linhas Finas 60wt, Agulhas 65/9 e Textos Microscópicos no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-038-lancadeira-capacidade-jumbo-bobina-extra-grande-m-style-l-style",
    "code": "L-038",
    "term": "Lançadeira de Capacidade Jumbo / Bobina Extra Grande (Jumbo Rotary Hook / M-Style & L-Style Bobbin)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da mecânica de capacidade ampliada e produtividade industrial.",
    "origin": "Desenvolvida pela Koban e Hirose Hooks no Japão para máquinas industriais pesadas de bordado e quilting, aumentando o diâmetro da canelinha para comportar até 2,5 vezes mais linha que a bobina padrão 'L-Style'.",
    "summary": "Lançadeira industrial com caixa de bobina de grande formato (M-Style) que armazena até 150 metros de linha na canelinha, reduzindo paradas para troca de bobina.",
    "definition": "A Lançadeira Jumbo (Jumbo Rotary Hook / Sistema de Bobina M-Style / Double-Capacity Hook) é um componente mecatrônico de alta capacidade dimensional projetado para acomodar canelinhas de diâmetro aumentado (tamanho 'M' com 25 mm de diâmetro contra os 21 mm da bobina padrão tamanho 'L'). Esse incremento volumétrico permite enrolar entre 130 e 180 metros de linha de bobina fina em cada canelinha (em comparação aos 70-90 metros da canelinha tradicional). Em ambientes de produção industrial de alta tiragem ou em bordados densos contínuos (como casacos, colchas de quilting e jaquetas), a lançadeira Jumbo reduz as interrupções de parada de máquina em mais de 60%, garantindo ganhos massivos de produtividade.",
    "technicalDetails": "Especificações técnicas da lançadeira Jumbo (M-Style):\n• Diâmetro da Canelinha: 25,4 mm (1 polegada) no padrão M-Style vs. 21,2 mm no padrão L-Style;\n• Capacidade de Armazenamento: Aproximadamente 140 a 180 metros de linha 60wt de poliéster contínuo;\n• Autonomia Média: Até 80.000 a 110.000 pontos bordados contínuos com uma única bobina cheia;\n• Pista da Lançadeira Reforçada: Corpo em aço cromo-molibdênio usinado em CNC com diâmetro externo ampliado para maior dissipação térmica a altas rotações;\n• Aplicação Principal: Máquinas industriais de bordado de cabeçotes pesados, máquinas de quilting de braço longo (Longarm) e bordados sobre jaquetas de couro.",
    "howItWorks": [
      "1. A bobina Jumbo (M-Style) é enrolada com até 160 metros de linha de canelinha.",
      "2. É instalada na caixa de bobina de formato ampliado da lançadeira Jumbo.",
      "3. O operador inicia a produção de matrizes grandes de 60.000 pontos.",
      "4. A máquina borda a peça inteira do começo ao fim sem que a linha da bobina termine no meio do desenho.",
      "5. A tensão de saída mantém-se uniforme graças à maior estabilidade inercial da canelinha larga.",
      "6. Menos trocas de canelinha significam menos paradas, menos nós de arremate e maior produtividade operacional diária."
    ],
    "beginnerExplanation": "A lançadeira Jumbo é como um 'tanque de combustível gigante' para a linha de baixo da sua máquina! As máquinas normais usam uma canelinha pequena (tamanho L) que acaba a linha rápido quando o bordado é grande, obrigando você a parar a máquina e trocar de canelinha toda hora. As máquinas com lançadeira Jumbo usam uma canelinha bem mais gordinha e larga (tamanho M) que cabe o dobro de linha! Com ela, você borda desenhos enormes e pesados sem precisar parar para trocar canelinha nenhuma vez!",
    "applications": [
      "Bordados gigantes nas costas de jaquetas jeans e casacos de couro com mais de 70.000 pontos",
      "Quilting contínuo em colchas de cama, mantas e estofados automotivos",
      "Produção industrial em série com máquinas multicabeçotes operando 24 horas por dia",
      "Bordados pesados com fios grossos de lã ou cordonês na canelinha"
    ],
    "commonErrors": [
      "Tentar colocar uma canelinha Jumbo M-Style em uma máquina doméstica feita para canelinha L-Style (a peça não cabe e quebra o suporte)",
      "Encher a canelinha Jumbo até transbordar além da borda metálica, travando a rotação dentro da caixa de bobina",
      "Esquecer de lubrificar a pista da lançadeira Jumbo, que possui maior área de atrito metálico"
    ],
    "troubleshootingTips": [
      "Verifique sempre no manual da sua máquina se ela utiliza bobinas tamanho 'L' (padrão) ou 'M' (Jumbo) antes de comprar canelinhas avulsas",
      "Use canelinhas de alumínio usinado ou canelinhas pré-bobinadas sem abas (Magnetic Core Bobbins) para rotação perfeita",
      "Aplique 1 a 2 gotas de óleo mineral branco na pista da lançadeira Jumbo diariamente"
    ],
    "dicaArtrelados": "Se você faz bordados grandes nas costas de jaquetas: canelinhas Jumbo pré-bobinadas com núcleo magnético são o melhor investimento do mundo! A linha desenrola suave até o último centímetro sem nenhuma variação de tensão!",
    "voceSabia": "As canelinhas tamanho 'M' (Jumbo) foram criadas originalmente para as máquinas de costurar velas de barcos no século XIX, onde os marinheiros precisavam costurar metros e metros de lona grossa no mar sem poder parar a costura!",
    "practicalExercise": "Compare uma canelinha tamanho 'L' ao lado de uma canelinha tamanho 'M': observe a diferença de diâmetro e entenda visualmente por que a Jumbo cabe mais que o dobro de linha!",
    "quickSummary": "Lançadeira industrial reforçada com caixa de bobina tamanho M que armazena até o dobro de linha, reduzindo paradas operacionais.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Linha de Bobina",
      "Quilting"
    ],
    "tags": [
      "l-038",
      "lancadeira jumbo",
      "bobina m-style",
      "canelinha grande",
      "alta capacidade",
      "produtividade",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOKS JAPAN. M-Style Rotary Hooks for High-Capacity Industrial Embroidery. Osaka: Koban, 2022.",
      "ARTRELADOS. Mecânica Avançada: Lançadeiras Jumbo, Caixas de Bobina e Sistemas de Alta Produtividade. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-039-limpeza-preventiva-fiapos-chapa-agulha-manutencao-lint",
    "code": "L-039",
    "term": "Limpeza Preventiva de Fiapos e Chapa de Agulha (Lint Cleaning & Needle Plate Maintenance)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Manutenção & Mecânica",
    "grammarClass": "Substantivo feminino / Da conservação mecânica e higiene do maquinário.",
    "origin": "Procedimento primordial de conservação de máquinas têxteis para remoção de resíduos de fibras vegetais, microfilamentos sintéticos e adesivos de entretela que se acumulam nas partes móveis da lançadeira.",
    "summary": "Rotina essencial de desmontagem da chapa de agulha e remoção de fiapos, poeira e restos de linha acumulados na lançadeira, caixa de bobina e sensores.",
    "definition": "A Limpeza Preventiva de Fiapos (Lint Cleaning / Higienização da Chapa de Agulha e Lançadeira) é o procedimento técnico básico mais eficiente para evitar 80% das quebras de linha, falhas de ponto e travamentos mecânicos na máquina de bordar. A cada ponto executado, a passagem rápida da linha e o atrito com o tecido e a entretela soltam microfibras que se misturam com o óleo lubrificante, formando uma massa compacta de feltro e poeira (Lint). Se não for removida regularmente, essa sujeira acumula-se sob a mola tensora da caixa de bobina, trava as lâminas do cortador de linha, obstrui os sensores ópticos de quebra de fio e arranha a pista da lançadeira.",
    "technicalDetails": "Protocolo técnico de higienização do cabeçote e base:\n• Frequência Mínima: A cada troca de projeto grande (ou a cada 4 a 6 horas de bordado contínuo em toalhas felpudas e tecidos de algodão);\n• Ferramentas Autorizadas: Pincel de cerdas naturais macias, pinça cirúrgica de bico fino e mini-aspirador portátil USB com bocal de borracha;\n• Ferramenta Proibida: Latas de ar comprimido em spray (NUNCA usar ar comprimido, pois ele sopra os fiapos e a poeira para dentro das placas eletrônicas e rolamentos internos selados da máquina);\n• Pontos Críticos de Higienização: A cavidade sob a chapa de agulha, a mola tensora da caixa de bobina, o conjunto de facas de corte automático e as polias dos sensores de passagem de linha superior.",
    "howItWorks": [
      "1. A bordadeira desliga a máquina da tomada por segurança.",
      "2. Remove o bastidor, desparafusa e retira a chapa de agulha metálica.",
      "3. Retira cuidadosamente a canelinha e a caixa de bobina preta (Bobbin Case).",
      "4. Utiliza o pincel macio para varrer todos os tufos de fiapos e poeira acumulados na carcaça da lançadeira.",
      "5. Passa um pedaço de linha ou a ponta de um cartão de visita sob a mola tensora da caixa de bobina para remover micro-fiapos presos.",
      "6. Pinga 1 gota de óleo mineral branco na pista da lançadeira.",
      "7. Remonta a caixa de bobina no batente correto e recoloca a chapa de agulha com os parafusos firmes.",
      "8. A máquina fica 100% limpa, silenciosa e com formação de ponto impecável."
    ],
    "beginnerExplanation": "A limpeza de fiapos é como 'escovar os dentes' da sua máquina de bordar! Conforme a máquina vai bordando toalhas, camisetas e entretelas, solta uma 'pelugem' de fiapos que vai se juntando lá embaixo da chapa onde fica a canelinha. Se você deixar acumular, vira uma bucha de sujeira que emperra a faquinha de corte, desregula a tensão e faz a linha arrebentar toda hora. Tirar a chapinha e passar um pincelzinho macio para tirar os fiapos todo dia é rápido e faz sua máquina funcionar como se fosse nova!",
    "applications": [
      "Manutenção preventiva diária obrigatória em todos os ateliês de bordado",
      "Limpeza imediata após bordar toalhas felpudas, veludos, pelúcias e tecidos de lã",
      "Solução rápida para avisos falsos de quebra de linha no painel da máquina",
      "Prevenção de travamento mecânico das lâminas do aparador automático de linha"
    ],
    "commonErrors": [
      "Usar spray de ar comprimido (o jato sopra a sujeira para dentro dos rolamentos e queima sensores eletrônicos)",
      "Raspar a lançadeira com chaves de fenda de metal ou pontas de tesoura (arranha o aço e a linha passa a desfiar)",
      "Bordar semanas inteiras sem abrir a chapa de agulha para limpar"
    ],
    "troubleshootingTips": [
      "Use sempre um mini-aspirador para sugar a poeira para fora da máquina, em vez de soprar para dentro",
      "Passe a quina de uma folha de papel sulfite ou cartão sob a molinha da caixa de bobina para desobstruir a passagem da linha",
      "Faça da limpeza o último passo do seu dia de trabalho: deixe a máquina limpinha e lubrificada para o dia seguinte"
    ],
    "dicaArtrelados": "Se sua máquina começar a avisar que a linha da bobina acabou mesmo com a canelinha cheia: não se desespere! É apenas fiapo de poeira cobrindo o olhinho do sensor óptico que fica embaixo da chapa. Passe o pincel no sensor e o aviso some na hora!",
    "voceSabia": "Ao bordar um jogo de 4 toalhas de banho felpudas, a máquina acumula em média cerca de 2 gramas de micro-pelos e fibras soltas de algodão dentro da caixa de bobina!",
    "practicalExercise": "Desparafuse a chapa de agulha da sua máquina agora mesmo: retire a caixa de bobina, use um pincel macio para tirar todos os fiapos acumulados e veja quanta poeira escondida sua máquina tinha!",
    "quickSummary": "Procedimento diário de remoção de fiapos e poeira da chapa de agulha e lançadeira com pincel, prevenindo quebras e travamentos.",
    "relatedTerms": [
      "Chapa de Agulha",
      "Caixa de Bobina",
      "Lubrificação",
      "Manutenção Preventiva"
    ],
    "tags": [
      "l-039",
      "limpeza",
      "fiapos",
      "lint cleaning",
      "chapa de agulha",
      "manutencao preventiva",
      "higiene",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER & JANOME SERVICE GUIDELINES. Routine Maintenance: Lint Removal and Hook Cleaning. Nagoya: Brother, 2022.",
      "ARTRELADOS. Higiene Mecânica no Ateliê: Limpeza de Fiapos, Cuidados Diários e Vida Útil do Maquinário. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-040-layout-diagramacao-matrizes-bastidor-composicao-harmonica",
    "code": "L-040",
    "term": "Layout e Diagramação de Matrizes no Bastidor (Embroidery Layout & Composition Design)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do design gráfico e composição visual espacial.",
    "origin": "Prática visual adaptada das artes gráficas e alfaiataria clássica para harmonizar proporções, alinhamentos, eixos de simetria e espaçamentos entre monogramas, arabescos e motivos bordados dentro do bastidor.",
    "summary": "Arte e técnica de planejar a disposição visual, equilíbrio de peso, simetria e proporções de múltiplos elementos bordados em uma mesma composição.",
    "definition": "O Layout de Bordado (Diagramação e Composição Espacial de Matrizes / Embroidery Design Layout) é o planejamento estético e dimensional da disposição de elementos gráficos (textos, arabescos, coroas, molduras, ilustrações e monogramas) dentro do espaço útil do bastidor e em relação à peça de vestuário ou enxoval final. Um layout profissional respeita a Regra dos Terços, os eixos de simetria verticais e horizontais, o peso visual equilibrado de cada bloco de cor, a hierarquia tipográfica (destaque do nome principal sobre títulos secundários) e as distâncias mínimas de respiro entre elementos vizinhos, evitando poluição visual ou desequilíbrios de proporção.",
    "technicalDetails": "Diretrizes de diagramação e composição no bastidor:\n• Eixo Central de Gravidade: O centro do desenho deve coincidir com o ponto focal natural do corpo humano (ex: centro do peito esquerdo a 18-20 cm abaixo do ombro em camisas polos);\n• Espaçamento de Respiro (Padding): Manter no mínimo 5 mm a 8 mm de distância livre entre arabescos e textos para que os pontos não se toquem após o encolhimento do tecido;\n• Hierarquia de Escalas: O nome ou símbolo principal deve ocupar 60% a 70% da área visual da composição, mantendo complementos menores em escala subordinada;\n• Alinhamento Óptico vs. Geométrico: Ajustar letras com hastes curvas (como 'C', 'O', 'S') ligeiramente além das linhas guias retas para compensar a ilusão de ótica humana;\n• Rotação e Ângulo de Bastidor: Alinhamento preciso com o fio do tecido (urdume e trama) para evitar bordados visualmente inclinados ou tortos.",
    "howItWorks": [
      "1. A bordadeira abre a área de trabalho no software e define o bastidor exato da peça.",
      "2. Ativa as linhas de grade (Grid) e os eixos de centro (Crosshairs).",
      "3. Importa o monograma, o nome e os arabescos decorativos.",
      "4. Ajusta as proporções e escalas respeitando a hierarquia visual.",
      "5. Aplica alinhamento centralizado ou justificado com espaçamentos milimétricos uniformes.",
      "6. Visualiza a simulação tridimensional (TrueView) para analisar o equilíbrio das cores e sombras.",
      "7. Salva a matriz agrupada e pronta para bordar com harmonia visual impecável."
    ],
    "beginnerExplanation": "O Layout é a 'arrumação da casa' do seu bordado! Quando você vai bordar um enxoval com o nome do bebê, uma coroinha em cima e um raminho de flores embaixo, você não pode simplesmente jogar tudo de qualquer jeito no bastidor. O layout é colocar cada coisa no seu devido lugar: a coroinha bem centralizada em cima, o nome bem bonito no meio com espaço para respirar e o raminho embaixo abraçando tudo com harmonia! Quando o layout é bem feito, o bordado parece uma obra de arte equilibrada e elegante!",
    "applications": [
      "Montagem de brasões de casamento com iniciais dos noivos, datas e ramos de louro",
      "Personalização de enxovais infantis completos (toalhas, mantas, lençóis e fraldas)",
      "Diagramação de uniformes corporativos combinando logotipo da empresa, nome do colaborador e cargo",
      "Composição de quadros de bastidor decorativos (Hoop Art) e peças de decoração"
    ],
    "commonErrors": [
      "Amontoar textos e desenhos muito grudados uns nos outros (parece uma mancha confusa de longe)",
      "Deixar o nome torto ou fora do centro do bastidor por falta de uso das linhas de grade",
      "Usar uma coroa gigante desproporcional para um nomezinho minúsculo embaixo"
    ],
    "troubleshootingTips": [
      "Ative sempre as linhas de grade (Grid) de 10x10 mm no seu programa para conferir alinhamentos e simetrias com facilidade",
      "Afaste-se 1 metro da tela do computador e aperte os olhos: se o desenho parecer equilibrado e agradável, o layout está perfeito!",
      "Imprima a folha de gabarito em tamanho real 100% e posicione sobre a peça física para testar o tamanho antes de bordar"
    ],
    "dicaArtrelados": "Para criar brasões infantis inesquecíveis: coloque a coroa ocupando cerca de 1/3 da altura total, o nome do bebê no centro com letra bem legível ocupando metade da largura e o raminho inferior com a curvatura acompanhando a base das letras. Fica uma composição clássica e perfeita!",
    "voceSabia": "O conceito de proporção áurea (número Phi = 1,618), utilizado pelos gregos na construção do Partenon e por Michelangelo na Capela Sistina, é amplamente utilizado pelos maiores designers de bordado do mundo para definir o equilíbrio perfeito entre monogramas e molduras!",
    "practicalExercise": "No seu software de bordado, monte um layout com uma inicial maiúscula no centro e dois raminhos curvos laterais: use as ferramentas de alinhamento e centralização para deixá-los perfeitamente simétricos e observe a harmonia do desenho!",
    "quickSummary": "Planejamento visual e proporcional da disposição, simetria e equilíbrio de múltiplos elementos bordados em uma composição.",
    "relatedTerms": [
      "Monograma",
      "Lettering",
      "Grade (Grid)",
      "Gabarito de Posicionamento"
    ],
    "tags": [
      "l-040",
      "layout",
      "diagramacao",
      "composicao",
      "design",
      "harmonia",
      "simetria",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Principles of Embroidery Design: Composition, Scale and Visual Balance. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Estética do Bastidor: Layout, Harmonia Visual, Tipografia e Proporções em Enxovais e Uniformes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-041-long-and-short-stitch-ponto-longo-curto-pintura-agulha-shading",
    "code": "L-041",
    "term": "Long-and-Short Stitch / Ponto Longo e Curto para Pintura de Agulha (Needle Painting Shading Stitch)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino / Do inglês 'Long-and-Short' (longo e curto alternado) / Da pintura com agulha.",
    "origin": "Técnica clássica milenar do bordado artesanal de seda chinês (Suzhou) e da alta-costura europeia, reproduzida digitalmente nos softwares avançados de matrizes para criar transições perfeitas de cores, sombras e texturas hiper-realistas.",
    "summary": "Padrão de pontos alternados de comprimentos desiguais que se interpenetram suavemente, criando degradês de cores hiper-realistas e efeito de pintura artística.",
    "definition": "O Ponto Longo e Curto (Long-and-Short Stitch / Ponto de Pintura de Agulha / Shading Stitch) é a técnica rainha da digitalização artística para reproduzir efeitos de luz, sombra e fusão de cores (Degradês) no bordado computadorizado. Em vez de os pontos terminarem todos em uma linha reta uniforme (o que cria blocos de cores duros e artificiais), as fileiras são geradas com pontos de comprimentos alternados (ex: 3 mm, 6 mm, 4 mm, 7 mm) que penetram aleatoriamente nos espaços da fileira de cor vizinha. Essa interpenetração suave faz com que duas ou mais tonalidades de linha (como amarelo claro, amarelo ouro e laranja) se fundam oticamente aos olhos do observador, imitando com perfeição as pinceladas de uma tela a óleo.",
    "technicalDetails": "Propriedades e parametrização do ponto longo e curto digital:\n• Variação de Comprimento (Length Jitter): Configurada entre 30% a 60% de aleatoriedade nos pontos de término das colunas;\n• Densidade Graduada (Feather Edge / Borda Plumada): A borda de contato é digitalizada com densidade aberta (0,8 mm a 1,2 mm) para que a cor seguinte entre suavemente entre os fios;\n• Direção e Curvatura dos Pontos (Flow Lines): Os pontos devem seguir a direção natural do crescimento das pétalas de flores, pelos de animais ou músculos da anatomia;\n• Espessura de Camadas: Evitar sobrepor mais de 2 camadas plenas para manter o bordado macio e maleável no tecido;\n• Linhas Ideais: Linha 100% Viscose (brilho aveludado e flexibilidade máxima) ou Poliéster 60wt para micro-detalhes.",
    "howItWorks": [
      "1. O artista desenha as linhas de fluxo que determinam a direção do movimento da pintura.",
      "2. Cria a primeira camada de cor base com bordas plumadas e comprimentos longos e curtos alternados.",
      "3. Sobrepõe a segunda cor com tonalidade mais escura ou mais clara, fazendo a agulha penetrar no meio dos fios da primeira cor.",
      "4. Adiciona uma terceira camada de sombra profunda nos recortes inferiores.",
      "5. A máquina borda as cores sucessivas com transições orgânicas e fluidas.",
      "6. A luz ambiente reflete nos diferentes ângulos dos fios.",
      "7. O motivo (uma flor, um pássaro ou um rosto) adquire realismo fotográfico tridimensional sem faixas duras de separação."
    ],
    "beginnerExplanation": "O ponto longo e curto (ou 'pintura com agulha') é o segredo para fazer bordados que parecem quadros pintados de verdade! Quando você quer fazer uma pétala de rosa que começa rosinha claro e vai escurecendo até virar vermelho no fundo, se você fizer linhas retas fica parecendo uma bandeira de listras. Mas com o ponto longo e curto, a máquina dá um ponto comprido e um curto misturando as linhas como se fossem pinceladas de tinta! O resultado é tão suave e realista que parece mágica!",
    "applications": [
      "Pintura de agulha em pétalas de flores botânicas, folhas e orquídeas hiper-realistas",
      "Bordado de plumagens de pássaros, pelos de animais (pets, cavalos, leões) e pelagens",
      "Retratos humanos com sombras suaves de bochechas, lábios e tons de pele",
      "Reprodução de obras de arte clássicas no bastidor em tecidos nobres"
    ],
    "commonErrors": [
      "Digitalizar blocos com bordas retas e duras sem ativar o efeito de borda plumada (cria divisões feias de cor)",
      "Sobrepor 4 camadas grossas de ponto tatami cheio no mesmo lugar (cria uma casca dura e quebra agulhas)",
      "Usar pontos em direções contrárias às nervuras naturais da pétala ou do pelo do animal"
    ],
    "troubleshootingTips": [
      "Use a ferramenta 'Color Blending / Mescla de Cores' no Wilcom ou software similar para calcular os degradês automaticamente",
      "Trabalhe sempre com pelo menos 3 a 5 tons intermediários da mesma família de cores (ex: rosa bebê, rosa médio, magenta e bordô)",
      "Utilize linhas de viscose para um acabamento com brilho de seda pura e toque aveludado"
    ],
    "dicaArtrelados": "Ao bordar flores realistas: digitalize os pontos sempre apontando do miolo da flor para fora, acompanhando as pétalas. Essa direção correta faz a luz bater no bordado e criar um brilho natural idêntico ao de uma flor de verdade colhida no jardim!",
    "voceSabia": "Na China imperial da dinastia Song (século X), as mestras bordadeiras de Suzhou passavam até 5 anos bordando uma única tela de seda com pontos longos e curtos, dividindo um único fio de seda em até 48 filamentos microscópicos!",
    "practicalExercise": "Digitalize uma folha verde dividida em duas cores: ative a borda plumada com ponto longo e curto entre o verde claro e o verde escuro. Borde e veja como a divisão entre as duas cores se torna completamente invisível!",
    "quickSummary": "Padrão de pontos de comprimentos alternados que se interpenetram organicamente para criar degradês e pintura de agulha realista.",
    "relatedTerms": [
      "Pintura de Agulha (Needle Painting)",
      "Degradê de Cores",
      "Borda Plumada (Feather Edge)",
      "Linha Viscose"
    ],
    "tags": [
      "l-041",
      "long-and-short",
      "ponto longo e curto",
      "pintura de agulha",
      "needle painting",
      "degrade",
      "realismo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ROYAL SCHOOL OF NEEDLEWORK. Needle Painting Embroidery: Long and Short Stitch Shading Techniques. London: Search Press, 2021.",
      "ARTRELADOS. Pintura com Agulha Digital: Long-and-Short Stitches, Fusão de Cores e Arte Botânica no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-042-lacre-termico-filme-termocolante-patches-heat-seal-hot-melt",
    "code": "L-042",
    "term": "Lacre Térmico e Filme Termocolante para Patches (Heat-Seal Adhesive Film & Hot-Melt Backing)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino / Da engenharia de polímeros termoplásticos e adesivos industriais.",
    "origin": "Desenvolvido com resinas sintéticas de poliamida e poliuretano termoplástico (Hot-Melt) para a indústria de emblemas militares e moda jovem, permitindo fixar apliques e patches bordados sobre roupas com prensa térmica sem costura manual.",
    "summary": "Filme adesivo termoplástico de alta fusão aplicado no verso de patches e emblemas bordados que se funde com o calor do ferro ou prensa térmica, colando o patch permanentemente na roupa.",
    "definition": "O Filme Termocolante para Patches (Heat-Seal Film / Hot-Melt Adhesive Backing / Lacre Adesivo Térmico) é uma película sólida de polímero adesivo termoplástico de alta aderência (geralmente à base de Copoliéster, Poliamida ou Poliuretano) colada no verso de brasões, emblemas e patches bordados após a remoção do bastidor. Protegido por um papel siliconado destacável, o filme é ativado pelo calor (140°C a 160°C) e pressão de um ferro de passar ou prensa térmica industrial. Ao derreter, o adesivo penetra profundamente nas fibras da peça de vestuário e no verso dos pontos do bordado, criando uma união mecânica permanente e resistente a dezenas de lavagens.",
    "technicalDetails": "Propriedades e aplicação de filme termocolante definitivo:\n• Tipos de Adesivo: Filme Termocolante Definitivo (Permanente resistente a lavagens / Hot-Melt) vs. Filme Provisório para Posicionamento;\n• Temperatura de Fusão: 145°C a 160°C sob prensa térmica (ou posição 'Algodão' sem vapor no ferro de passar doméstico);\n• Pressão e Tempo: Pressão média-alta (3 a 4 bar) durante 15 a 20 segundos de prensagem direta;\n• Prensagem pelo Avesso: Recomenda-se prensar 15 segundos pela frente e mais 10 segundos pelo avesso da roupa para transferir o calor direto à cola;\n• Tempo de Cura: DEVE esfriar 100% em repouso plano antes de puxar ou manipular a peça (a cola atinge sua resistência molecular máxima após o resfriamento total);\n• Resistência à Lavagem: Suporta lavagens até 40°C e centrifugação sem descolar as bordas.",
    "howItWorks": [
      "1. O patch ou emblema é bordado normalmente sobre entretela firme ou tecido sarja.",
      "2. Corta-se o patch no formato final com ferro de solda ou tesoura de precisão e acabamento de borda em cordone.",
      "3. Posiciona-se o filme termocolante no verso do patch (com o papel siliconado voltado para cima).",
      "4. Aplica-se calor de 150°C por 8 a 10 segundos para selar a cola no verso do bordado.",
      "5. Deixa-se esfriar e retira-se a película de papel siliconado: o verso fica coberto por uma camada de cola plástica brilhante.",
      "6. Posiciona-se o patch sobre a jaqueta, jeans ou mochila do cliente.",
      "7. Prensa-se a 150°C por 15 a 20 segundos com um tecido de proteção por cima.",
      "8. Ao esfriar, o patch fica colado de forma definitiva, resistente e com acabamento de alta qualidade comercial."
    ],
    "beginnerExplanation": "O filme termocolante é a famosa 'cola mágica de ferro' para fazer apliques e patches bordados colarem na roupa sem precisar costurar nada! Depois que você borda aquele emblema lindo ou desenho fofo, você passa esse filme no verso dele com o ferro quente. Quando a cliente compra o patch, basta ela colocar sobre a jaqueta jeans ou camiseta, passar o ferro quente por cima por 20 segundos e pronto! O patch gruda para sempre no tecido e pode lavar na máquina de lavar sem medo de soltar!",
    "applications": [
      "Confecção de patches, brasões, insígnias de motoclube e emblemas de times de futebol",
      "Apliques termocolantes infantis para customização de mochilas, estojos e jaquetas jeans",
      "Etiquetas e logotipos termocolantes para uniformes industriais e jalecos profissionais",
      "Reparo e customização rápida de peças de vestuário sem necessidade de desmontar forros"
    ],
    "commonErrors": [
      "Puxar a pontinha do patch antes de ele esfriar completamente (a cola ainda está líquida e descola na hora)",
      "Usar ferro a vapor para aplicar termocolante (a umidade da água impede a cura do polímero adesivo)",
      "Tentar colar patches termocolantes em tecidos tratados com teflon, silicone ou impermeabilizantes"
    ],
    "troubleshootingTips": [
      "Nunca use vapor no ferro de passar ao aplicar termocolante; o calor deve ser 100% seco",
      "Coloque sempre uma folha de papel manteiga ou tecido de algodão fino entre o ferro e o bordado para não queimar as linhas de poliéster",
      "Oriente o cliente a esperar 24 horas após a colagem antes de fazer a primeira lavagem da peça"
    ],
    "dicaArtrelados": "Quer garantir que seu patch termocolante nunca mais solte nem na máquina de lavar mais forte? Prensa 15 segundos pela frente e depois vire a peça do avesso e prense mais 15 segundos direto no tecido atrás do patch! A cola vai derreter no coração das fibras e ficar inquebrável!",
    "voceSabia": "Os patches termocolantes foram popularizados nos anos 1970 pelos fãs de bandas de rock (como Led Zeppelin e Rolling Stones) e astronautas da NASA, que colavam emblemas das missões espaciais em suas jaquetas de voo!",
    "practicalExercise": "Borde um pequeno escudo em sarja: aplique o filme termocolante no verso com ferro seco, retire o papel protetor e cole o emblema em um pedaço de jeans velho. Deixe esfriar e tente puxar a pontinha com força para sentir a aderência permanente!",
    "quickSummary": "Filme adesivo termoplástico de alta fusão ativado por calor e pressão para fixação permanente de patches e emblemas em roupas.",
    "relatedTerms": [
      "Patch Bordado",
      "Prensa Térmica",
      "Ferro de Solda",
      "Sarja para Emblemas"
    ],
    "tags": [
      "l-042",
      "termocolante",
      "patches",
      "heat-seal",
      "lacre termico",
      "emblemas",
      "hot-melt",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD GMBH. BSN Heat-Seal Adhesive Film for Machine-Embroidered Badges and Patches. Stockstadt: Gunold, 2022.",
      "ARTRELADOS. O Universo dos Patches: Materiais, Acabamentos em Ferro de Solda, Termocolantes e Aplicação Térmica. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-049-la-linha-grossa-bobina-bobbin-work-reverse-embroidery",
    "code": "L-049",
    "term": "Lã e Linha Grossa na Bobina (Bobbin Work / Reverse Embroidery with Heavy Wool)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo feminino / Da técnica de bordado reverso com fios estruturados.",
    "origin": "Técnica desenvolvida por artistas têxteis para bordar com fitas de seda, fios grossos de lã e cordões artesanais que não passam pelo olho da agulha tradicional, costurando a peça pelo avesso.",
    "summary": "Técnica de bordado reverso onde linhas grossas, fitas ou lãs são enroladas na canelinha inferior e a matriz é bordada espelhada pelo avesso do tecido.",
    "definition": "O Bobbin Work (Bordado com Lã na Bobina / Bordado Reverso / Heavy Thread Bobbin Embroidery) é uma técnica artística inovadora que contorna a limitação do diâmetro do olho da agulha de bordar. Fios grossos de lã, cordões decorativos, fitas de cetim finas, cordonês e linhas rústicas não cabem no orifício de uma agulha sem quebrar ou mastigar o tecido. No Bobbin Work, o fio volumoso é enrolado manualmente na canelinha inferior (com parafuso da caixa de bobina solto), enquanto a agulha superior utiliza uma linha fina comum de poliéster. O tecido é montado no bastidor 'de cabeça para baixo' (com o avesso virado para cima) e a matriz é digitalizada de forma invertida/espelhada. Ao bordar, a agulha amarra o fio grosso de lã por baixo, criando um relevo tridimensional espesso e aveludado na frente da peça.",
    "technicalDetails": "Propriedades e parametrização para Bobbin Work:\n• Enrolamento da Bobina: Enrolado MANUALMENTE com tração uniforme e sem torções na canelinha;\n• Caixa de Bobina Separada: Uso obrigatório de uma caixa de bobina reserva ajustada com o parafuso de tensão completamente afrouxado ou remoção da mola tensora;\n• Digitalização da Matriz: A matriz DEVE ser espelhada horizontalmente (Mirror Image) no software ou no painel da máquina;\n• Tipo de Ponto na Matriz: Pontos corridos longos (3,0 mm a 4,5 mm), pontos em estrela ou arabescos abertos (evitar pontos cheios ou tatamis densos que esmagam o fio grosso);\n• Linha Superior: Linha fina 40wt ou 60wt da mesma cor da lã ou monofilamento invisível;\n• Tecidos Ideais: Veludos, linhos, sarjas, jeans e tecidos encorpados.",
    "howItWorks": [
      "1. A bordadeira enrola a lã grossa ou fita de cetim na canelinha à mão.",
      "2. Encaixa a canelinha na caixa de bobina reserva com parafuso frouxo.",
      "3. Passa linha fina na agulha superior com tensão ligeiramente aumentada.",
      "4. Monta o tecido no bastidor com o direito virado para baixo (avesso para cima).",
      "5. Espelha a matriz no painel da máquina e reduz a velocidade para 400 a 500 PPM.",
      "6. A máquina borda pelo avesso: a linha fina superior laça o fio grosso da canelinha a cada descida de agulha.",
      "7. Ao retirar o tecido do bastidor e virar para a frente, o bordado exibe uma textura de lã grossa em relevo tridimensional de altíssimo impacto artesanal."
    ],
    "beginnerExplanation": "O Bobbin Work (ou 'bordado de ponta-cabeça') é o truque mais genial do mundo para bordar com lã grossa ou fitas na máquina! Como a lã é gordinha e não passa no buraquinho da agulha, você coloca a lã na canelinha lá embaixo e coloca uma linha fininha na agulha de cima. Depois você prende o pano de costas no bastidor e a máquina borda pelo avesso! Quando você vira o pano de frente, a lã fofinha aparece toda bordada em alto relevo na frente da peça parecendo tricô feito à mão!",
    "applications": [
      "Bordados decorativos em casacos de inverno, jaquetas de lã e ponchos rústicos",
      "Almofadas com texturas aveludadas, tapetes de parede e arte têxtil contemporânea",
      "Contornos grossos em mantas de bebê com fios macios de chenille",
      "Detalhes com fitas metalizadas grossas em trajes teatrais e vestidos de festa"
    ],
    "commonErrors": [
      "Esquecer de espelhar o desenho no painel da máquina (as letras saem invertidas na frente da peça)",
      "Tentar usar a caixa de bobina original sem soltar o parafuso de tensão (o fio grosso tranca e quebra a máquina)",
      "Digitalizar desenhos com preenchimentos densos em ponto tatami (cria um nó gigante de lã no avesso)"
    ],
    "troubleshootingTips": [
      "Tenha sempre uma segunda caixa de bobina pintada de vermelho ou marcada com fita para usar exclusivamente em Bobbin Work",
      "Puxe o fio grosso da bobina para cima através da chapa com a mão antes de iniciar o bordado para segurar a ponta inicial",
      "Faça um teste de 10 pontos em um retalho antes de bordar na peça principal para checar a altura do relevo"
    ],
    "dicaArtrelados": "Para fazer bordados rústicos com cara de tapeçaria antiga: use fio de lã mesclada na canelinha e faça desenhos de arabescos com ponto corrido duplo. O resultado fica parecendo bordado à mão de castelo medieval!",
    "voceSabia": "O Bobbin Work foi inventado na década de 1950 por costureiras de alta-costura em Paris que queriam usar fios de ouro maciço e fitas de seda de Lyon que eram grossos demais para as agulhas da época!",
    "practicalExercise": "Enrole um pedaço de lã para crochê fina em uma canelinha, solte o parafuso da caixa de bobina, coloque o tecido com o avesso para cima e borde uma flor em ponto corrido: vire o tecido e encante-se com o relevo fofinho da lã!",
    "quickSummary": "Técnica de bordado reverso com fios grossos ou lãs na canelinha inferior, bordando a matriz espelhada pelo avesso do tecido.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Bordado Reverso",
      "Espelhamento de Matriz",
      "Lã de Bordar"
    ],
    "tags": [
      "l-049",
      "bobbin work",
      "la na canelinha",
      "bordado reverso",
      "fio grosso",
      "textura",
      "artesanato",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BERNINA CREATIVE CENTER. Bobbin Work and Heavy Decorative Thread Techniques. Steckborn: Bernina, 2022.",
      "ARTRELADOS. Texturas Tridimensionais no Bastidor: Bobbin Work, Fios Estruturados e Bordado Reverso. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-050-linha-multicolorida-espiralizada-multi-ply-variegated-twist",
    "code": "L-050",
    "term": "Linha Multicolorida e Espiralizada (Multi-Ply Variegated Twist Thread)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da fiação de filamentos multicolores retorcidos.",
    "origin": "Técnica de fiação que retorce dois ou três cabos de cores diferentes e contrastantes juntos em uma única linha (Twist / Mouliné de Máquina), criando um efeito marmorizado e texturizado contínuo a cada ponto.",
    "summary": "Linha especial formada pela torção de dois ou mais cabos de cores contrastantes enrolados juntos, produzindo um efeito mesclado marmorizado instantâneo sem necessidade de trocar de cone.",
    "definition": "A Linha Espiralizada Multicolorida (Multi-Color Twist Thread / Fio Mouliné de Máquina / Bicolor & Tricolor Twist) é uma linha de bordar produzida através do retorcimento de filamentos pré-tingidos em cores distintas (por exemplo, um cabo azul marinho retorcido com um cabo dourado e um cabo branco). Diferente da linha matizada convencional (onde o mesmo fio muda de cor ao longo do seu comprimento por tingimento intervalado), a linha espiralizada exibe todas as cores simultaneamente em toda a extensão do fio. Quando bordada em ponto cheio ou tatami, ela gera uma textura visual marmorizada, rústica e vibrante que adiciona riqueza cromática sem exigir nenhuma parada de troca de cor na máquina.",
    "technicalDetails": "Propriedades físicas da linha espiralizada twist:\n• Construção do Fio: 2 ou 3 cabos de poliéster trilobal 100% retorcidos em torção 'Z' calibrada (ex: dtex 135x2);\n• Efeito Óptico: Efeito de 'Barber Pole' (listras de poste de barbeiro) ao longo do filamento que se traduz em pontos bicolores ou tricolores alternados na superfície;\n• Título Típico: Nº 35 a Nº 40 (ligeiramente mais encorpada que o fio monocromático simples);\n• Agulha Indicada: Agulha universal para bordado calibre 75/11 ou 80/12 ponta bola fina ou Topstitch;\n• Aplicação em Matrizes: Ideal para preenchimentos artísticos de troncos de árvores, pelagens de animais, pedras naturais, cabelos e monogramas rústicos.",
    "howItWorks": [
      "1. A linha espiralizada multicolorida é colocada no suporte de carretel da máquina.",
      "2. É conduzida normalmente pelos tensores do cabeçote.",
      "3. A agulha penetra no tecido executando o ponto satim ou tatami.",
      "4. Como os dois cabos coloridos estão torcidos juntos, a cada agulhada uma cor diferente fica em evidência no topo do ponto.",
      "5. A superfície bordada ganha um aspecto marmorizado e vibrante de forma 100% automática.",
      "6. Não há necessidade de programar trocas de cor nem de cortar fios entre tons.",
      "7. A peça atinge uma profundidade artística rica com extrema agilidade produtiva."
    ],
    "beginnerExplanation": "A linha espiralizada (ou 'linha twist') é como uma trancinha mágica de duas cores enroladas juntas no mesmo fio! Em vez de ser só amarela ou só azul, ela tem uma perninha de cada cor girando juntinha. Quando a máquina borda, os pontos saem misturadinhos e marmorizados na mesma hora, parecendo pedra de mármore ou pelo de animal de verdade! É fantástica para fazer troncos de árvores, pelos de cachorrinhos e letras bem diferentes sem ter que ficar trocando de carretel toda hora!",
    "applications": [
      "Bordado de troncos de árvores, folhagens de outono e paisagens naturais",
      "Pelagens texturizadas de animais em retratos de pets (cães, gatos, cavalos)",
      "Monogramas rústicos em estilo Country, Western e peças de couro",
      "Bordados natalinos combinando fios dourados e vermelhos espiralizados"
    ],
    "commonErrors": [
      "Usar em desenhos geométricos corporativos formais que exigem cores sólidas e chapadas",
      "Bordar com tensão excessivamente apertada que destorça os cabos do fio",
      "Usar agulhas muito finas (calibre 65/9) que podem desfiar a torção dos múltiplos cabos"
    ],
    "troubleshootingTips": [
      "Use agulha 80/12 para acomodar o corpo ligeiramente mais espesso dos fios retorcidos",
      "Em pontos cheios, configure densidade ligeiramente mais aberta (0,45 mm) para que o efeito marmorizado se destaque com clareza",
      "Excelente para disfarçar pequenas imperfeições de tecido graças à sua textura visual rica"
    ],
    "dicaArtrelados": "Quer bordar um cachorrinho ou gato com pelagem super natural? Use uma linha twist combinando marrom e bege para o corpo e outra combinando preto e cinza para as patas. A pelagem fica com profundidade realista sem você precisar fazer degradês complexos na matriz!",
    "voceSabia": "A fiação de fios de cores contrastantes torcidas juntas foi criada pelos tecelões escoceses no século XVI para confeccionar os tradicionais tecidos de tweed que camuflavam os caçadores nas colinas das Terras Altas!",
    "practicalExercise": "Coloque um cone de linha twist bicolor na sua máquina e borde uma coluna de ponto cheio de 6 mm: observe como os dois tons se alternam a cada batida de agulha criando um efeito marmorizado deslumbrante!",
    "quickSummary": "Linha formada pelo retorcimento de cabos de cores contrastantes que produz textura marmorizada contínua sem paradas de troca de cor.",
    "relatedTerms": [
      "Linha Matizada",
      "Poliéster Trilobal",
      "Pelagem Realista",
      "Agulha 80/12"
    ],
    "tags": [
      "l-050",
      "linha twist",
      "espiralizada",
      "multicolorida",
      "marmorizada",
      "mouline",
      "fios especiais",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Classic & Polyneon Twist: Multi-Color Embroidery Filament Guide. Freiburg: Madeira, 2022.",
      "ARTRELADOS. A Vibração das Cores: Linhas Matizadas, Fios Twist e Efeitos Ópticos no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-051-lixeira-fiapos-coletor-magnetico-alfinetes-bancada-seguranca",
    "code": "L-051",
    "term": "Lixeira de Fiapos e Coletor Magnético de Alfinetes (Lint Bin & Magnetic Pin Sweeper)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Substantivo feminino / Da ergonomia e segurança ocupacional do ateliê têxtil.",
    "origin": "Acessórios de bancada desenvolvidos para a organização e limpeza rápida de sobras de linhas, pedaços de entretela e coleta segura de agulhas e alfinetes de aço descartados, evitando acidentes e contaminação de peças de bebê.",
    "summary": "Conjunto de acessórios essenciais de bancada composto por lixeira acoplável para aparas de linhas e coletor magnético de neodímio para alfinetes e agulhas.",
    "definition": "A Lixeira de Fiapos de Bancada e o Coletor Magnético de Precisão (Embroidery Scrap & Lint Bin / Magnetic Pin & Needle Sweeper) são ferramentas fundamentais de biossegurança, limpeza e organização do posto de trabalho da bordadeira. A lixeira de bancada (feita em silicone antiestático ou acrílico com boca larga acoplada à mesa da máquina) recebe imediatamente as pontas de linhas cortadas, pedaços de plástico solúvel e sobras de entretela durante o processo de acabamento. O coletor magnético (com poderoso ímã de neodímio embutido em cabo ergonômico ou prato de silicone) recolhe com uma única passada todas as agulhas caídas, alfinetes e pedaços de lâminas de corte da bancada e do chão, garantindo que nenhum fragmento perfurocortante fique esquecido dentro de enxovais de bebês ou roupas infantis.",
    "technicalDetails": "Especificações e normas de segurança no ateliê:\n• Força Magnética do Coletor: Ímã de Neodímio N52 de alto campo magnético capaz de atrair e reter até 30 agulhas e alfinetes instantaneamente;\n• Lixeira Antiestática: Material plástico com tratamento antiestático para evitar que os fiapos de poliéster grudem nas paredes do recipiente pela eletricidade estática;\n• Controle de Qualidade 'Metal-Free': Norma de segurança internacional obrigatória para confecção de vestuário infantil (garantia de que nenhuma agulha quebrada fique na peça entregue ao cliente);\n• Descarte de Agulhas Usadas: Recipiente rígido tipo 'Descarpack' ou garrafa de descarte seguro para agulhas cegas ou tortas;\n• Ergonomia Operacional: Posicionada logo abaixo do nível da tesoura de limpeza para reduzir movimentos repetitivos do braço da operadora.",
    "howItWorks": [
      "1. A bordadeira posiciona a lixeira de fiapos ao lado da máquina ou sob a bancada de acabamento.",
      "2. Conforme corta os fios de salto e limpa os apliques com a tesoura, descarta as aparas diretamente na lixeira.",
      "3. Os fiapos não caem no chão nem flutuam pelo ar do ateliê.",
      "4. Ao trocar de agulha ou se uma agulha quebrar durante o bordado, a operadora passa o coletor magnético sobre a área de trabalho.",
      "5. O ímã atrai todos os pedacinhos de aço com segurança.",
      "6. A agulha quebrada é guardada no recipiente de descarte rígido.",
      "7. O ambiente de trabalho permanece limpo, seguro e com risco zero de acidentes para os clientes."
    ],
    "beginnerExplanation": "A lixeira de fiapos e o pegador magnético de agulhas são os 'anjos da guarda' da limpeza do seu ateliê! Quando você está limpando os fiapinhos do bordado com a tesourinha, em vez de jogar tudo no chão ou na mesa virando aquela bagunça cheia de linhas grudadas, você joga direto na lixeirinha ao lado da máquina. E o coletor magnético é aquele ímã poderoso que você passa na mesa e no chão para puxar qualquer alfinete ou pedacinho de agulha que caiu: assim ninguém espeta o dedo e nenhuma agulha vai parar dentro da roupinha do bebê do seu cliente!",
    "applications": [
      "Limpeza rápida e descarte higiênico de aparas de linhas e sobras de entretelas",
      "Prevenção absoluta de acidentes perfurocortantes em ateliês e fábricas de bordado",
      "Auditoria de segurança em peças infantis, enxovais de berço e pelúcias (norma 'Metal-Free')",
      "Organização ergonômica da bancada de corte e limpeza final de peças"
    ],
    "commonErrors": [
      "Jogar fiapos de linha no chão (os fios enrolam nas rodinhas da cadeira e nos eixos da máquina)",
      "Jogar agulhas quebradas no lixo comum sem proteção (pode furar o saco e machucar os coletores de lixo)",
      "Entregar roupas de bebê sem checar previamente se nenhum alfinete ficou esquecido no tecido"
    ],
    "troubleshootingTips": [
      "Passe o coletor magnético sobre o bastidor e sobre a peça antes de embalar para garantir que não haja alfinetes perdidos",
      "Guarde as agulhas velhas descartadas dentro de uma latinha ou pote plástico com tampa antes de jogar fora",
      "Esvazie a lixeira de fiapos no final de cada expediente para manter a bancada sempre limpa e arejada"
    ],
    "dicaArtrelados": "Tenha um 'ímã varredor' forte perto da máquina: se uma agulha quebrar e a pontinha sumir, nunca ligue a máquina antes de achar o pedaço que quebrou! Passe o ímã dentro da lançadeira e na mesa para pescar o pedaço de aço na hora!",
    "voceSabia": "Grandes confecções de moda infantil utilizam túneis detectores de metais com esteira rolante semelhantes aos de aeroportos para escanear 100% dos lotes de roupas e garantir que nenhuma pontinha de agulha quebrada chegue às mãos dos bebês!",
    "practicalExercise": "Passe um ímã de neodímio sobre sua bancada de costura: veja como ele atrai instantaneamente pequenos fiapos de arame, alfinetes caídos e agulhas que estavam escondidas nos cantinhos!",
    "quickSummary": "Conjunto ergonômico de lixeira antiestática e coletor magnético para recolhimento seguro de fiapos, agulhas e alfinetes no ateliê.",
    "relatedTerms": [
      "Controle de Qualidade",
      "Ergonomia",
      "Troca de Agulha",
      "Tesoura Pelicano"
    ],
    "tags": [
      "l-051",
      "lixeira de fiapos",
      "coletor magnetico",
      "imã",
      "seguranca",
      "organizacao",
      "bancada",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NATIONAL SAFETY COUNCIL. Safety Protocols for Apparel Manufacturing and Needle Breakage Control. Chicago: NSC, 2021.",
      "ARTRELADOS. Organização, Biossegurança e Boas Práticas no Ateliê de Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-052-linha-resistente-chamas-fogo-flame-retardant-aramid-nomex",
    "code": "L-052",
    "term": "Linha Resistente a Chamas e Fogo (Flame-Retardant Aramid Thread / Nomex & Kevlar)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da ciência dos polímeros aromáticos de alta performance (Aramidas).",
    "origin": "Desenvolvida pela DuPont (sob as marcas Nomex e Kevlar) e pela Kermel para atender aos rigorosos padrões internacionais de segurança contra incêndio em uniformes de bombeiros, pilotos de Fórmula 1, astronautas e eletricistas.",
    "summary": "Linha técnica de aramida 100% antichama que não derrete, não queima e não goteja mesmo exposta a temperaturas extremas acima de 370°C.",
    "definition": "A Linha Resistente a Chamas (Flame-Retardant Thread / Fio de Meta-Aramida Nomex e Para-Aramida Kevlar) é uma linha de bordar e costura de alta engenharia que possui propriedades intrínsecas de auto-extinção e resistência térmica extrema. Diferente das linhas convencionais de poliéster ou viscose (que pegam fogo rapidamente ou derretem em plástico líquido fervente em contato com chamas), a linha de aramida não queima, não funde e não goteja quando exposta a chamas diretas ou arco elétrico, carbonizando-se suavemente apenas acima de 370°C a 400°C. É a linha legalmente obrigatória para bordar logotipos, nomes e patentes em uniformes de bombeiros militares, macacões de pilotos de automobilismo (certificação FIA), roupas de eletricistas de alta tensão (norma NR-10) e coletes balísticos.",
    "technicalDetails": "Propriedades de segurança e resistência da linha antichama:\n• Composição: 100% Fibra de Meta-Aramida (Nomex) contínua ou fiada (Spun Aramid);\n• Ponto de Decomposição Térmica: Suporta temperaturas contínuas até 260°C e picos de contato com fogo direto até 370°C sem derreter;\n• Certificações Internacionais: Atende às normas EN ISO 11612, NFPA 1971, NFPA 2112 e norma brasileira NR-10 para proteção contra arco elétrico;\n• Linha de Bobina Obrigatória: O bordado de segurança EXIGE o uso de linha de bobina de aramida antichama correspondente no avesso;\n• Resistência Química: Imune a ácidos, combustíveis de aviação, óleos minerais e solventes industriais;\n• Agulha Indicada: Agulha com revestimento cerâmico ou Titânio calibre 80/12 ou 90/14 ponta aguda.",
    "howItWorks": [
      "1. A empresa encomenda uniformes antichama certificados para brigadistas de incêndio ou eletricistas.",
      "2. A bordadeira instala a linha de aramida Nomex na agulha superior e na canelinha de bobina.",
      "3. Utiliza entretela de algodão 100% tratada com retardante de chamas no verso.",
      "4. A máquina borda os logotipos e identificações com velocidade moderada (600 a 700 PPM).",
      "5. A linha de aramida assenta-se com firmeza e resistência mecânica excepcional.",
      "6. Em uma situação de emergência com fogo ou faíscas elétricas, o bordado não pega fogo e não queima o operador.",
      "7. A peça atende 100% às exigências dos laudos periciais de segurança do trabalho."
    ],
    "beginnerExplanation": "A linha antichama é a famosa linha dos 'bombeiros e pilotos de Fórmula 1'! Uma linha de bordar normal de poliéster é feita de plástico, e se pegar fogo ela derrete e queima a pele da pessoa. A linha de aramida (feita com material de colete à prova de balas) é tão resistente que você pode colocar fogo nela com um isqueiro que ela não queima, não derrete e não pinga nenhuma gota quente! É a linha usada para bordar roupas de pessoas que trabalham com eletricidade pesada, fábricas de petróleo e bombeiros!",
    "applications": [
      "Bordados em uniformes de bombeiros civis e militares, brigadas de emergência e resgate",
      "Macacões de corrida de automobilismo e kart com homologação oficial FIA / CBA",
      "Uniformes de proteção para eletricistas de alta tensão e operários de siderúrgicas (NR-10)",
      "Vestimentas de segurança para plataformas de petróleo, refinarias e aviação militar"
    ],
    "commonErrors": [
      "Bordar o logotipo com linha de aramida antichama na agulha superior e usar linha de bobina comum de poliéster embaixo (o avesso queima e anula a certificação)",
      "Usar entretela sintética inflamável em uniformes de eletricistas",
      "Cortar a linha de aramida com tesouras cegas comuns (a fibra é tão dura que amassa e requer tesouras especiais para aramida)"
    ],
    "troubleshootingTips": [
      "Tenha cones de linha de bobina antichama dedicados para acompanhar a linha superior em uniformes de segurança",
      "Use tesouras de cutelaria com lâminas micro-serrilhadas em aço especial para cortar fios de aramida sem esforço",
      "Forneça um laudo ou certificado de conformidade do fabricante da linha ao entregar o lote de uniformes para a empresa cliente"
    ],
    "dicaArtrelados": "Ao orçar bordados para empresas de energia elétrica ou segurança industrial: destaque que você utiliza linhas e entretelas 100% antichama certificadas pela norma NR-10. O valor agregado é altíssimo e as empresas pagam com muito prazer pelo laudo de segurança!",
    "voceSabia": "O tecido Nomex foi desenvolvido após a trágica corrida das 500 Milhas de Indianápolis em 1964, onde um incêndio na pista impulsionou a criação de roupas que protegessem os pilotos de queimaduras graves!",
    "practicalExercise": "Corte um pedaço de 10 cm de linha de aramida e segure com uma pinça longa de metal: aproxime a chama de um isqueiro e veja como a linha não queima, não solta fumaça tóxica e não derrete!",
    "quickSummary": "Linha técnica de aramida que não derrete e não queima até 370°C, obrigatória para uniformes de bombeiros, eletricistas e pilotos.",
    "relatedTerms": [
      "Norma NR-10",
      "Aramida (Nomex)",
      "Segurança do Trabalho",
      "Agulha Titânio"
    ],
    "tags": [
      "l-052",
      "antichama",
      "linha resistente ao fogo",
      "nomex",
      "aramida",
      "nr-10",
      "seguranca do trabalho",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DUPONT PROTECTION TECHNOLOGIES. Nomex and Kevlar Sewing and Embroidery Yarns Technical Data Sheet. Richmond: DuPont, 2022.",
      "ARTRELADOS. Bordados Técnicos e Normativos: Linhas Antichama, Norma NR-10 e Vestuário de Alta Performance. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-053-limitador-velocidade-aceleracao-angular-speed-limiter-cnc",
    "code": "L-053",
    "term": "Limitador de Velocidade e Aceleração Angular (Speed Limiter & Corner Slowdown CNC)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do controle cinemático e mecatrônica CNC.",
    "origin": "Algoritmo de desaceleração inteligente implementado nos processadores de máquinas de bordar e softwares industriais para reduzir automaticamente a velocidade de rotação do cabeçote em cantos pontiagudos e pontos longos.",
    "summary": "Parâmetro mecatrônico que desacelera a máquina em curvas fechadas, cantos vivos e pontos longos para evitar solavancos do bastidor e quebra de agulha.",
    "definition": "O Limitador de Velocidade e Curva de Aceleração Angular (Corner Slowdown / Adaptive Speed Limiting / Ramp-Down Control) é uma função algorítmica avançada presente no firmware dos controladores das máquinas de bordar modernas. Quando o pantógrafo precisa mudar bruscamente de direção (por exemplo, em um ângulo agudo de 90° ou 180° em um zigue-zague rápido ou na ponta de uma estrela) ou quando a distância entre pontos salta de 2 mm para 8 mm, as forças inerciais (F = m × a) aumentam exponencialmente. O algoritmo detecta essas transições e reduz a velocidade operacional de 1.000 PPM para 500-600 PPM durante os microsegundos críticos da curva, retomando a aceleração máxima na reta seguinte.",
    "technicalDetails": "Engenharia de controle de velocidade adaptativo:\n• Critério de Disparo Angular: Desaceleração automática ativada em variações angulares superiores a 60° entre pontos consecutivos;\n• Critério de Comprimento (Long Stitch Slowdown): Redução proporcional de rotação quando o comprimento do ponto excede 5,5 mm para dar tempo de o motor de passo movimentar o pantógrafo pesado;\n• Proteção contra Deslocamento (Loss of Sync): Impede que o motor de passo perca passos (Slip) e desloque a matriz de centro por excesso de inércia;\n• Redução de Ruído e Vibração: Diminui drasticamente as vibrações harmônicas na mesa e no suporte do bastidor;\n• Preservação da Linha: Evita picos de tensão repentinos que partem linhas delicadas como metálicas e viscose.",
    "howItWorks": [
      "1. O arquivo da matriz é lido pelo processador digital da máquina de bordar.",
      "2. O algoritmo de controle analisa os próximos 100 pontos à frente (Look-Ahead Algorithm).",
      "3. Ao identificar uma curva fechada ou um canto de estrela, o sistema programa uma curva de desaceleração suave (Ramp-Down).",
      "4. A máquina reduz a rotação do cabeçote suavemente antes de atingir o vértice.",
      "5. O pantógrafo executa a curva fechada com precisão milimétrica e sem trancos.",
      "6. Ultrapassado o canto, a máquina reacelera suavemente de volta à velocidade nominal de cruzeiro.",
      "7. A peça bordada atinge cantos nítidos e perfeitos, com zero quebra de linha e máxima vida útil mecânica."
    ],
    "beginnerExplanation": "O limitador de velocidade em curvas é como o 'freio inteligente' de um carro de corrida na sua máquina de bordar! Ninguém faz uma curva fechada na estrada a 150 por hora sem capotar o carro. Na máquina é a mesma coisa: nas retas compridas ela voa rápido a 1.000 pontos por minuto, mas quando chega em uma curvinha difícil ou na ponta de uma estrela afiada, o computador da máquina dá uma freadinha automática, faz a curva com todo o carinho e depois acelera de novo! Graças a isso, a linha não arrebenta e o desenho não sai torto!",
    "applications": [
      "Preservação de cantos pontiagudos em estrelas, coroas e brasões heráldicos",
      "Bordados em alta velocidade com linhas metálicas e fios delicados",
      "Prevenção de vibração e perda de passos em bastidores gigantes pesados",
      "Bordado de bonés estruturados em bastidores cilíndricos rotativos"
    ],
    "commonErrors": [
      "Desativar o controle automático de desaceleração no painel da máquina para tentar forçar velocidade máxima em tudo",
      "Bordar matrizes cheias de cantos vivos em máquinas antigas sem desaceleração em velocidade de 1.000 PPM",
      "Não lubrificar as guias lineares dos eixos X e Y que sofrem com as trocas de direção"
    ],
    "troubleshootingTips": [
      "Mantenha sempre ativada a função 'Auto Slowdown' ou 'Corner Deceleration' no menu de configurações da sua máquina",
      "Em bordados com fios metálicos, defina o limite máximo de velocidade em 600 PPM para garantir estabilidade contínua",
      "Se notar que a máquina está dando solavancos barulhentos nas curvas: reduza a velocidade geral no painel"
    ],
    "dicaArtrelados": "Vai bordar uma matriz com muitos monogramas e pontinhas finas? Ajuste a velocidade da sua máquina para 650 PPM. Você ganha em qualidade de ponto, o bordado fica um espelho de tão lindo e a máquina não arrebenta a linha nenhuma vez!",
    "voceSabia": "Os algoritmos de 'Look-Ahead' (olhar para a frente) usados nas máquinas de bordar computadorizadas são derivados diretamente da tecnologia de controle numérico CNC usada na usinagem das asas dos aviões caça da aviação militar!",
    "practicalExercise": "Borde uma estrela de 5 pontas a 900 PPM com o som ligado: escute a máquina desacelerar suavemente nas pontinhas afiadas da estrela e acelerar nas retas, observando a perfeição dos cantos!",
    "quickSummary": "Algoritmo CNC inteligente que reduz a velocidade em curvas e cantos para evitar solavancos do bastidor e quebra de agulhas.",
    "relatedTerms": [
      "Pontos por Minuto (PPM)",
      "Pantógrafo",
      "Eixos X e Y",
      "Look-Ahead Algorithm"
    ],
    "tags": [
      "l-053",
      "limitador de velocidade",
      "corner slowdown",
      "desaceleracao",
      "cnc",
      "mecanica",
      "precisao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL BULLETIN. Motion Control, Dynamic Acceleration Curves and Corner Slowdown Algorithms. Nagoya: Tajima, 2022.",
      "ARTRELADOS. A Física do Movimento: Inércia, Aceleração, Eixos CNC e Preservação Mecânica no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-054-laminacao-termica-filme-protecao-avesso-comfort-wear",
    "code": "L-054",
    "term": "Laminação Térmica e Filme de Proteção de Avesso (Comfort-Wear Soft Backing Film / Protetor de Bordado Infantil)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino / Da termolaminação e acabamento têxtil de conforto.",
    "origin": "Desenvolvido pela indústria de enxovais e vestuário pediátrico (sob marcas consagradas como Tender Touch, Cloud Cover e Stick-Protect) para cobrir o avesso áspero dos bordados e proteger a pele sensível de bebês contra irritações e atritos.",
    "summary": "Película têxtil macia e ultrafina termocolada sobre o avesso do bordado que sela os nozinhos de linha e cria um toque suave como nuvem em contato com a pele.",
    "definition": "O Protetor de Avesso Termocolante (Comfort-Wear Film / Soft Backing Sealer / Película Protetora de Pele / Interlining de Cobertura) é um tecido não-tecido ultrafino e sedoso de poliamida ou malha de poliéster 100% revestido com micro-pontos de resina termofusível em uma das faces. Após a conclusão e limpeza do bordado, essa película é cortada e posicionada sobre o avesso da peça, cobrindo integralmente todos os pontos, nós de amarração e sobras de entretela. Ao ser prensada com ferro de passar a 130°C por 10 a 15 segundos, ela se funde permanentemente ao verso do tecido, criando uma barreira aveludada e macia que impede que as linhas ásperas pinquem, cocem ou irritem a pele ultrassensível de recém-nascidos e pessoas com dermatite atópica.",
    "technicalDetails": "Propriedades e aplicação do protetor de avesso:\n• Composição: Malha de Poliamida/Poliéster 100% hipoalergênica com toque de seda e elasticidade bielástica (Four-Way Stretch);\n• Gramatura: Extremamente leve (25 g/m² a 35 g/m²), mantendo a maleabilidade natural do body ou camiseta de algodão;\n• Parâmetros de Fusão: 120°C a 135°C (ferro na posição 'Seda/Lã' seco sem vapor) com pressão firme por 10 a 12 segundos;\n• Cantos Arredondados: DEVE ser cortado com tesoura em cantos arredondados (cantos retos ou pontiagudos descolam facilmente nas lavagens);\n• Resistência à Lavagem: Suporta dezenas de ciclos de lavagem na máquina até 40°C sem soltar;\n• Reaplicação Térmica: Caso uma pontinha se solte após muitas lavagens, basta passar o ferro quente novamente para reativar a cola.",
    "howItWorks": [
      "1. O bordado no body de bebê ou camiseta é finalizado e todos os fios de salto são limpos com a tesoura.",
      "2. A bordadeira recorta um pedaço do protetor de avesso cerca de 1,5 cm maior que o desenho.",
      "3. Arredonda todos os 4 cantos com a tesoura para evitar pontas soltas.",
      "4. Posiciona o lado com a cola áspera/brilhante voltado para baixo contra o avesso do bordado.",
      "5. Aplica o ferro de passar morno/seco por 10 a 12 segundos com pressão firme.",
      "6. Deixa a peça esfriar completamente sobre a mesa.",
      "7. O avesso do bordado fica incrivelmente liso, macio e aveludado, pronto para vestir o bebê com conforto total."
    ],
    "beginnerExplanation": "O protetor de avesso (ou 'película toque de seda') é o maior segredo de amor e carinho das mamães bordadeiras! Quando a gente borda um bodyzinho de bebê, o avesso do bordado fica com aqueles nozinhos e linhas de poliéster que podem pinicar e coçar a pele fofinha do recém-nascido. Para deixar o avesso macio como uma nuvem, você corta esse tecidinho mágico, passa o ferro quente por trás do bordado e ele gruda todinho tampando os nós! O verso fica macio como um abraço e o bebê fica protegido e confortável!",
    "applications": [
      "Acabamento obrigatório em bodies de bebê, macacões de recém-nascido e pagões",
      "Camisetas esportivas justas e tops de academia para evitar atrito com a pele durante corridas",
      "Pijamas infantis e roupas de dormir de alta maciez",
      "Bordados em roupas de pessoas com pele sensível ou alergias dermatológicas"
    ],
    "commonErrors": [
      "Cortar o protetor com cantos quadrados retos (as pontas espetam e descolam na primeira lavada)",
      "Colocar o lado da cola virado para cima (a cola gruda na base de metal do ferro e faz uma bagunça)",
      "Passar com ferro muito quente que derreta a película fina de proteção"
    ],
    "troubleshootingTips": [
      "Corte sempre o protetor com as bordas bem arredondadas em formato oval ou circular para máxima durabilidade",
      "Passe a mão no avesso da peça antes de entregar para checar se está 100% macio e sem nenhuma pontinha áspera",
      "Se uma bordinha descolar com o tempo, basta passar o ferro de passar por 5 segundos que ela cola de novo imediatamente"
    ],
    "dicaArtrelados": "Borda enxoval de bebê? Sempre coloque o protetor de avesso e adicione uma etiquetinha dizendo: 'Peça confeccionada com acabamento Toque de Nuvem que protege a pele do seu bebê'. As mamães valorizam imensamente esse cuidado e viram suas clientes fiéis para sempre!",
    "voceSabia": "A pele de um bebê recém-nascido é cerca de 30% mais fina e absorve até 5 vezes mais substâncias que a pele de um adulto, o que a torna extremamente vulnerável a dermatites por atrito com fios sintéticos!",
    "practicalExercise": "Borde um desenho em um body de algodão: aplique o protetor de avesso com o ferro, espere esfriar e passe o dorso da sua mão sobre o avesso para sentir a maciez aveludada do acabamento!",
    "quickSummary": "Película têxtil macia termocolada no avesso do bordado para selar nós e proteger a pele sensível de bebês contra atrito e coceiras.",
    "relatedTerms": [
      "Enxoval de Bebê",
      "Termocolante",
      "Entretela Hidrossolúvel",
      "Acabamento Toque de Nuvem"
    ],
    "tags": [
      "l-054",
      "protetor de avesso",
      "comfort-wear",
      "toque de nuvem",
      "enxoval de bebe",
      "pele sensivel",
      "termocolante",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SULKY OF AMERICA. Tender Touch Soft Embroidery Backing Film Guidelines. Port Charlotte: Sulky, 2022.",
      "ARTRELADOS. O Cuidado com o Enxoval: Proteção de Avesso, Conforto Pediátrico e Padrões de Alta Maciez. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-055-lancamento-ponto-compensacao-elastica-salto-stitch-throw",
    "code": "L-055",
    "term": "Lançamento de Ponto e Compensação Elástica de Salto (Stitch Throw & Jump Elastic Release)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Da aerodinâmica de linha e dinâmica vetorial de salto.",
    "origin": "Conceito de física e programação CNC formulado para quantificar a amplitude lateral máxima que a linha atinge ao ser projetada de uma borda à outra em colunas de ponto cheio em alta velocidade.",
    "summary": "Medida da amplitude e folga vetorial do ponto que compensa a contração elástica do filamento durante os movimentos rápidos de vaivém da agulha.",
    "definition": "O Lançamento de Ponto (Stitch Throw / Amplitude de Ponto / Trajetória Lateral de Ponto Cheio) é a distância transversal máxima percorrida pela barra de agulha e pelo pantógrafo entre as duas bordas opostas de uma coluna de ponto satim. Em altas rotações (acima de 800 PPM), o fio superior sofre uma deformação elástica transitória e a inércia da linha tende a projetá-la ligeiramente além da coordenada perfurada no momento do retorno (efeito Chicote / Whip Effect). O controle preciso do lançamento de ponto no software assegura que as bordas fiquem perfeitamente alinhadas, sem dentes serrilhados nas margens e com tensão equilibrada de ponta a ponta.",
    "technicalDetails": "Propriedades físicas do lançamento de ponto:\n• Amplitude Segura: 1,2 mm a 7,0 mm para ponto cheio contínuo sem divisão;\n• Efeito de Alongamento Elástico: O poliéster estica até 15% a 20% durante a descida rápida da agulha e contrai-se imediatamente após a formação do ponto (exigindo compensação de repuxo proporcional ao lançamento);\n• Filtro de Ponto Longo (Jump Stitch Cut-off): Se o lançamento ultrapassar 8,0 mm a 10,0 mm, o sistema divide o ponto em múltiplos passos ou executa um salto com corte;\n• Alinhamento de Bordas: Bordas em curvas sinuosas utilizam lançamento angular variável (Fractional Stitch Throw) para manter a largura constante mesmo em arcos de 90°;\n• Amortecimento de Tensão: A mola estica-fio absorve a energia cinética residual do lançamento a cada batida de agulha.",
    "howItWorks": [
      "1. O programador define as duas linhas de contorno que delimitam a largura da coluna de satim.",
      "2. O software calcula o lançamento de ponto (distância euclidiana entre a borda esquerda e direita).",
      "3. A máquina recebe as instruções e movimenta o pantógrafo no curso transversal completo.",
      "4. A agulha penetra na margem externa e lança o fio sobre o tecido.",
      "5. A tensão traciona o fio de volta enquanto a agulha penetra na margem oposta.",
      "6. A compensação digital previne que as bordas encolham para dentro do contorno.",
      "7. O cordão de ponto cheio resultante exibe bordas retilíneas, brilhantes e perfeitamente paralelas."
    ],
    "beginnerExplanation": "O lançamento de ponto é o 'tamanho do pulo' de um lado para o outro que a linha dá quando a máquina está fazendo aquele ponto cheio gordinho e brilhante! Se o pulo for pequeno demais (menos de 1 milímetro), a agulha fura quase no mesmo lugar e corta o pano. Se o pulo for grande demais (mais de 1 centímetro), a linha fica frouxa e pode enganchar nas coisas. O programador ajusta esse pulo no tamanho perfeito para o bordado ficar fofinho, firme e brilhante!",
    "applications": [
      "Digitalização de colunas de ponto cheio em monogramas clássicos e arabescos",
      "Bordados em 3D Puff sobre EVA com cobertura total da espuma",
      "Acabamento de bordas cortadas em apliques e patches de sarja",
      "Ajuste fino de nitidez em logotipos corporativos de alta fidelidade visual"
    ],
    "commonErrors": [
      "Programar lançamentos de ponto de 12 mm em ponto satim sem divisão (a linha fica solta e a máquina dá erro)",
      "Programar lançamentos menores que 0,8 mm com agulha grossa (fura e mastiga o tecido)",
      "Não aplicar compensação de repuxo em lançamentos largos em tecidos moles"
    ],
    "troubleshootingTips": [
      "Mantenha a largura de colunas de satim sempre entre 1,5 mm e 6,5 mm para o melhor acabamento visual e durabilidade",
      "Para áreas mais largas que 7 mm, converta o preenchimento para ponto Tatami ou ative a ferramenta 'Ponto Satim Dividido (Auto-Split)'",
      "Aumente a compensação de repuxo à medida que a largura do lançamento de ponto aumentar"
    ],
    "dicaArtrelados": "Quer fazer uma coluna de ponto cheio parecer ainda mais alta e brilhante? Use sob-ponto de zigue-zague com 70% da largura do lançamento principal por baixo! O sob-ponto cria uma almofadinha interna e o ponto cheio de cima brilha como uma barra de ouro!",
    "voceSabia": "O termo 'Stitch Throw' foi criado no início do século XX pelos inventores alemães das primeiras máquinas de costura com zigue-zague mecânico, que literalmente 'arremessavam' a barra de agulha de um lado para o outro por meio de um came excêntrico de bronze!",
    "practicalExercise": "No seu software, desenhe uma coluna de ponto cheio que começa fininha com 1,5 mm e vai engrossando gradualmente até 6 mm: borde em um retalho e veja como o brilho da linha aumenta conforme o lançamento de ponto cresce!",
    "quickSummary": "Medida da amplitude transversal percorrida pelo fio em colunas de ponto cheio, determinando cobertura, relevo e estabilidade.",
    "relatedTerms": [
      "Ponto Satim",
      "Compensação de Repuxo",
      "Auto-Split (Ponto Dividido)",
      "Sob-pontos (Underlay)"
    ],
    "tags": [
      "l-055",
      "lancamento de ponto",
      "stitch throw",
      "ponto cheio",
      "satim",
      "amplitude",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Satin Stitch Geometry, Stitch Throw and Auto-Split Rules. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Dinâmica dos Pontos Cheios: Lançamento de Ponto, Tensões Transversais e Cobertura Espelhada. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-056-lancadeira-eixo-vertical-gancho-vertical-axis-rotary-hook",
    "code": "L-056",
    "term": "Lançadeira de Eixo Vertical / Gancho Vertical (Vertical-Axis Rotary Hook)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica de eixos ortogonais.",
    "origin": "Arquitetura mecânica em que o eixo da lançadeira é montado na vertical (girando no plano horizontal com a canelinha inserida por cima), comum em máquinas domésticas compactas e em máquinas industriais pesadas de pesponto.",
    "summary": "Sistema de lançadeira com eixo montado na posição vertical, onde a canelinha é inserida por cima (Drop-in Bobbin / Top Loading) ou lateralmente com bobina horizontal.",
    "definition": "A Lançadeira de Eixo Vertical (Vertical-Axis Hook / Sistema de Bobina Superior Drop-in / Top-Loading Hook) é uma configuração cinemática na qual o eixo de rotação da lançadeira está orientado verticalmente (perpendicular ao tampo da mesa da máquina). A lançadeira gira em um plano horizontal ao redor da caixa de bobina, que fica apoiada no topo sob uma tampa de acrílico transparente. Embora a maioria das máquinas industriais multicabeçotes utilize lançadeiras de eixo horizontal (Horizontal-Axis), o sistema de eixo vertical é amplamente empregado em máquinas computadorizadas compactas monoelemento pela facilidade de inserção rápida da canelinha por cima sem remover o braço livre e pela visualização imediata da quantidade de linha restante na bobina.",
    "technicalDetails": "Propriedades mecânicas da lançadeira de eixo vertical:\n• Orientação do Eixo: Vertical a 90° em relação à mesa da máquina;\n• Carregamento de Bobina: Superior tipo 'Drop-in' com tampa de encaixe rápido transparente;\n• Formação da Laçada: A agulha desce verticalmente e a lançadeira gira ao redor do plano horizontal capturando a laçada na lateral traseira da agulha;\n• Caixa de Bobina Flutuante: Apoiada sobre ímãs ou batentes de amortecimento polimérico silenciosos (não exige caixa de bobina metálica com trava articulada);\n• Manutenção e Lubrificação: Geralmente autolubrificada ou exige apenas 1 gota na pista central; muito silenciosa em operação residencial;\n• Limite de Velocidade: Opera com estabilidade de 600 a 850 PPM.",
    "howItWorks": [
      "1. A bordadeira abre a tampinha de acrílico transparente na chapa da máquina.",
      "2. Simplesmente solta a canelinha dentro da cavidade (Top Drop-in) com a linha desenrolando no sentido anti-horário.",
      "3. Passa o fio na guia cortadora embutida e fecha a tampa.",
      "4. Ao iniciar o bordado, a lançadeira vertical gira ao redor da canelinha.",
      "5. O bico do gancho pesca a linha superior e a conduz suavemente ao redor do corpo horizontal da bobina.",
      "6. A alavanca estica-fio recolhe o laço e fecha o ponto fixo com extrema suavidade.",
      "7. A operadora monitora visualmente o consumo de linha pela tampa transparente durante todo o bordado."
    ],
    "beginnerExplanation": "A lançadeira de eixo vertical é o famoso sistema de 'canelinha colocada por cima' com tampinha de plástico transparente que a gente vê na maioria das máquinas de bordar domésticas modernas! Em vez de ter que abrir uma portinha embaixo da máquina e colocar aquela pecinha de metal com trava, você só tira a tampinha de acrílico, solta a canelinha lá dentro como se fosse uma moedinha e pronto! O melhor de tudo é que você consegue ver a linha da canelinha acabando pela janelinha transparente antes de a linha sumir!",
    "applications": [
      "Máquinas de bordar domésticas e de pequeno porte (Brother, Janome, Singer, Bernina)",
      "Ateliês que realizam trocas frequentes de cores de linha na bobina",
      "Confecção de pequenas tiragens, personalizações rápidas e nomes no balcão",
      "Bordados em ambientes silenciosos (apartamentos e lojas de shopping)"
    ],
    "commonErrors": [
      "Colocar a canelinha girando para o lado errado (o desenho do 'P' da linha deve desenrolar para a esquerda/anti-horário)",
      "Empurrar a tampa transparente com força e quebrar as travinhas de plástico acrílico",
      "Deixar poeira e fiapos acumularem embaixo da caixa plástica da bobina (faz a canelinha pular fora do lugar)"
    ],
    "troubleshootingTips": [
      "Lembre-se sempre da regra da letra 'P': ao segurar a canelinha no ar, a ponta da linha que desce deve formar o desenho da letra 'P' antes de colocar na máquina",
      "Retire a caixa de bobina plástica a cada 3 dias e limpe a pista magnética com um pincel macio",
      "Use exclusivamente canelinhas de acrílico originais recomendadas pelo fabricante da sua máquina"
    ],
    "dicaArtrelados": "A máquina começou a fazer um barulho de 'tac-tac-tac' na canelinha? Retire a tampinha e a caixa preta de plástico: veja se uma pontinha de linha não ficou presa embaixo da caixa. Limpe e recoloque encaixando a setinha da caixa com a setinha da máquina. O silêncio volta na hora!",
    "voceSabia": "O sistema de lançadeira horizontal com bobina inserida por cima (Drop-in) foi patenteado nos Estados Unidos pela Singer na década de 1970 para tornar a costura mais amigável e acessível a qualquer pessoa sem exigir conhecimentos mecânicos avançados!",
    "practicalExercise": "Abra a tampinha transparente da sua máquina: retire a canelinha, olhe a pista giratória lá dentro, recoloque a canelinha no sentido anti-horário e acompanhe o caminho da linha com o dedo!",
    "quickSummary": "Lançadeira com eixo vertical e inserção de canelinha por cima sob tampa transparente, prática, silenciosa e de fácil monitoramento.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Drop-in Bobbin",
      "Chapa de Agulha"
    ],
    "tags": [
      "l-056",
      "lancadeira vertical",
      "drop-in",
      "bobina superior",
      "mecanica",
      "facilidade",
      "maquina domestica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME & BROTHER ENGINEERING BULLETINS. Top-Loading Vertical Axis Hook Mechanics and Magnetic Bobbin Holders. Tokyo: Janome, 2022.",
      "ARTRELADOS. Sistemas de Lançadeira: Eixos Verticais, Horizontais, Oscilantes e a Mecânica do Ponto Perfeito. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-057-linha-retorcida-tres-cabos-fio-3-ply-twisted-embroidery-thread",
    "code": "L-057",
    "term": "Linha Retorcida de Três Cabos / Fio 3-Ply (Three-Ply Twisted Embroidery Thread)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Da engenharia de fiação e torção têxtil.",
    "origin": "Estrutura de fiação composta por 3 cabos individuais torcidos helicoidalmente em conjunto (3-Ply), conferindo perfil perfeitamente cilíndrico, resistência superior à tração e excelente cobertura em bordados industriais pesados.",
    "summary": "Linha de bordar constituída por três cabos contínuos torcidos juntos, proporcionando maior redondeza geométrica, alta resistência mecânica e acabamento encorpado.",
    "definition": "A Linha de 3 Cabos (Three-Ply / 3-Ply Twisted Embroidery Thread / Linha Trilobal Retorcida Tripla) é uma linha de bordar técnica de alta performance produzida pela torção de três filamentos independentes de poliéster ou viscose. Enquanto as linhas padrão mais econômicas utilizam construção de 2 cabos (2-Ply / 120/2), a construção em 3 cabos (ex: 75/3 ou 100/3) distribui a tensão de torção de maneira 100% equilibrada ao redor do eixo central do fio, gerando um filamento perfeitamente redondo (em vez de ligeiramente ovalado). Essa geometria cilíndrica proporciona um deslizamento muito mais suave pelas guias do cabeçote, cobertura superior do tecido com menos pontos e baixíssimo índice de desfiação sob alta velocidade.",
    "technicalDetails": "Propriedades físicas da linha 3-Ply:\n• Estrutura: 3 cabos de filamentos contínuos trilobais torcidos em sentido 'Z' com contra-torção 'S' balanceada;\n• Resistência à Tração (Tenacidade): Cerca de 25% a 30% mais resistente que linhas 2-Ply do mesmo peso métrico (suporta picos de tração até 1.400 cN);\n• Seção Transversal: Perfil 100% circular que preenche os vãos entre pontos com maior plenitude visual;\n• Redução de Fricção: Menor área de atrito de contato com o olho da agulha, reduzindo drasticamente o aquecimento da agulha a 1.000 PPM;\n• Agulha Recomendada: Agulha padrão para bordado calibre 75/11 ou 80/12 ponta bola fina (SES);\n• Uso Principal: Bordados automotivos, calçados de couro, jaquetas pesadas e produções industriais contínuas.",
    "howItWorks": [
      "1. A linha 3-Ply é instalada no suporte de carretel da máquina de alta velocidade.",
      "2. O fio corre pelas guias e tensores com fluidez perfeita graças à sua seção perfeitamente redonda.",
      "3. A agulha penetra tecidos grossos e couros repetidamente a até 1.100 PPM.",
      "4. A torção tripla absorve o choque mecânico e a fricção térmica sem abrir os cabos nem criar laços soltos.",
      "5. Os pontos assentam-se sobre o tecido com relevo gordinho e cobertura opaca impecável.",
      "6. A quebra de linha cai a níveis praticamente zero durante toda a jornada produtiva.",
      "7. A durabilidade do bordado sob atrito e lavagens industriais pesadas é máxima."
    ],
    "beginnerExplanation": "A linha de 3 cabos (3-Ply) é uma linha 'trançada tripla' super forte e redondinha! A maioria das linhas baratas é feita com apenas 2 fios torcidos, o que deixa a linha meio achatadinha. A linha de 3 cabos junta três fios perfeitos, ficando tão redonda e macia quanto um cabo de aço microscópico! Ela desliza na máquina com uma facilidade incrível, cobre o pano muito melhor sem deixar buraquinhos e é praticamente inquebrável, mesmo se a máquina estiver rodando na velocidade máxima!",
    "applications": [
      "Bordados industriais de alta velocidade em uniformes profissionais e calçados",
      "Estofamentos automotivos em couro e tecidos sintéticos pesados",
      "Bordados em bonés estruturados e jaquetas jeans grossas",
      "Bordados que exigem altíssima resistência à tração e abrasão contínua"
    ],
    "commonErrors": [
      "Usar agulhas velhas com rebarbas de aço que possam cortar um dos três cabos do fio",
      "Bordar com tensão excessivamente apertada por achar que a linha de 3 cabos aguenta qualquer aperto",
      "Confundir linha de 3 cabos de bordado com linha pesada de pesponto de costura reta"
    ],
    "troubleshootingTips": [
      "Utilize linhas 3-Ply sempre que tiver problemas crônicos de quebra de fio em tecidos duros e ásperos",
      "Aproveite a cobertura superior da linha de 3 cabos para abrir ligeiramente o espaçamento de pontos na matriz (de 0,38 mm para 0,42 mm) economizando tempo e pontos",
      "Passe uma gota de lubrificante de silicone nos feltros de passagem de linha em dias muito secos"
    ],
    "dicaArtrelados": "Se você tem um trabalho grande de bonés duros ou mochilas pesadas onde a linha normal fica arrebentando toda hora: troque para uma linha de poliéster 3-Ply com agulha de Titânio 80/12! A máquina vai rodar lisinha sem arrebentar uma única vez!",
    "voceSabia": "As linhas de três cabos (3-Ply) foram criadas durante a corrida espacial dos anos 1960 para costurar os trajes pressurizados dos astronautas do programa Apollo que pisaram na Lua!",
    "practicalExercise": "Desenrole 5 cm de uma linha comum de 2 cabos e 5 cm de uma linha 3-Ply: destorça as pontas com a ponta de uma agulha e conte os cabos individuais para entender a engenharia da torção tripla!",
    "quickSummary": "Linha de bordar composta por três cabos contínuos torcidos juntos, oferecendo perfil perfeitamente cilíndrico, alta cobertura e resistência inquebrável.",
    "relatedTerms": [
      "Poliéster Trilobal",
      "Titulação Têxtil (Weight)",
      "Agulha de Titânio",
      "Bordado Automotivo"
    ],
    "tags": [
      "l-057",
      "linha 3-ply",
      "tres cabos",
      "alta resistencia",
      "fios industriais",
      "poliester",
      "inquebravel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMANN GROUP TECHNICAL BULLETIN. Isacord 3-Ply Polyester Continuous Filament Embroidery Threads. Bönnigheim: Amann, 2022.",
      "ARTRELADOS. A Ciência dos Filamentos: Torções 2-Ply, 3-Ply, Tenacidade Mecânica e Alta Produtividade no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-058-limite-perfuracao-densidade-maxima-cm2-stitch-count-density",
    "code": "L-058",
    "term": "Limite de Perfuração e Densidade Máxima por Centímetro Quadrado (Perforation Limit & Stitch Count Density)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Da metrologia têxtil e integridade estrutural de materiais.",
    "origin": "Regra física e computacional fundamental estabelecida pelos mestres puncionadores para definir a quantidade máxima de furos que um tecido suporta por centímetro quadrado antes de sofrer corte por cisalhamento (efeito picote de selo postal).",
    "summary": "Parâmetro crítico de segurança digital que estabelece o teto máximo de pontos por cm² para evitar furos, rasgos e endurecimento excessivo do tecido bordado.",
    "definition": "O Limite de Perfuração e Densidade Máxima (Stitch Density Limit / Penetration Threshold per Square Centimeter) é a barreira física que determina a quantidade máxima de penetrações de agulha que um determinado substrato têxtil suporta em uma área de 1 cm² sem perder sua integridade mecânica. Enquanto um tecido plano comum suporta com segurança cerca de 1.200 a 1.800 pontos/cm² (equivalente a uma densidade de 0,40 mm com camadas normais), o acúmulo excessivo de mais de 2.500 a 3.000 pontos/cm² (causado por sobreposições descontroladas de múltiplos tatamis, contornos pesados e nós de arremate no mesmo ponto) transforma a agulha em uma serra de picotar, cortando os fios da trama do tecido e criando buracos irreparáveis ao redor do bordado.",
    "technicalDetails": "Limites físicos e parâmetros de densidade por tipo de tecido:\n• Malhas Leves de Algodão (Penteado 30.1): Máximo seguro de 1.000 a 1.400 pontos/cm² (densidade 0,45 mm a 0,50 mm);\n• Tecidos Planos / Sarja / Tricoline: Máximo seguro de 1.500 a 2.000 pontos/cm² (densidade 0,38 mm a 0,42 mm);\n• Lonas Pesadas e Jeans: Suporta até 2.500 a 3.200 pontos/cm² com agulha ponta aguda 90/14;\n• Tecidos Sintéticos / Microfibra / Nylon: Sensíveis ao aquecimento e corte térmico (máximo de 1.200 pontos/cm²);\n• Ferramenta Digital de Remoção de Densidade: Softwares de digitalização profissionais possuem filtros automáticos de densidade (Density Map / Filter Stitches) que alertam em cores quentes (amarelo e vermelho) áreas com excesso de perfurações.",
    "howItWorks": [
      "1. O programador finaliza a digitalização de uma matriz complexa com múltiplas camadas de cores.",
      "2. Ativa o 'Mapa de Densidade' (Density Map / Heatmap) no software Wilcom ou similar.",
      "3. O programa colore as áreas seguras de azul/verde e as áreas perigosas com excesso de pontos em vermelho vivo.",
      "4. O programador aplica a ferramenta de remoção de sobreposições ocultas (Remove Hidden Underlays).",
      "5. Os pontos desnecessários que ficariam escondidos sob outras camadas são deletados automaticamente.",
      "6. A máquina borda a matriz de forma leve, fluida e suave.",
      "7. O tecido preserva 100% de sua maciez original, sem nenhum rasgo e sem sensação de placa de plástico dura."
    ],
    "beginnerExplanation": "O limite de perfuração é a regra de que 'muito furo no mesmo lugar rasga o pano'! Imagina uma folha de papel: se você furar com a agulha uma vez, não acontece nada; mas se você furar 50 vezes no mesmo cantinho, o papel corta e cai um buraco igual picote de folha de caderno! No tecido é igualzinho: um bom programador nunca deixa a máquina dar pontos demais no mesmo pedacinho de pano. O bordado fica fofinho, macio de vestir e a roupa nunca rasga nas bordinhas!",
    "applications": [
      "Otimização de matrizes para camisetas finas de malha de algodão e bodies de bebê",
      "Prevenção de rasgos e 'efeito faca' em tecidos sintéticos como tactel e poliamida",
      "Ajuste de densidade em brasões com muitos elementos sobrepostos",
      "Garantia de toque macio e flexível em peças de alta-costura e moda íntima"
    ],
    "commonErrors": [
      "Colocar 3 preenchimentos de ponto tatami 100% cheios um em cima do outro no mesmo lugar",
      "Digitalizar pequenos círculos de 2 mm com ponto cheio super apertado (fura um buraco redondo no pano)",
      "Não conferir o mapa de densidade do software antes de enviar a matriz para a produção"
    ],
    "troubleshootingTips": [
      "Consulte o mapa de calor de densidade no software de bordado antes de salvar o arquivo definitivo",
      "Utilize a ferramenta 'Eliminar Pontos Sobrepostos' para economizar até 25% de pontos e tempo de máquina",
      "Se o tecido estiver rasgando ao redor das letras: abra o espaçamento entre pontos no software em 10%"
    ],
    "dicaArtrelados": "Menos é mais! Uma matriz bem digitalizada não é a que tem mais pontos, mas sim a que usa a menor quantidade de pontos possível para criar o desenho mais perfeito e macio do mundo! Seu cliente vai amar a maciez da roupa e sua máquina vai durar muito mais!",
    "voceSabia": "Em matrizes industriais de logotipos automotivos para bancos de couro, as montadoras exigem laudos de teste de tração e limitam a densidade máxima a 1.200 pontos/cm² para garantir que o couro não rasgue em caso de impacto com airbag!",
    "practicalExercise": "No seu software de bordado, ative a ferramenta 'Density Map' ou 'Mapa de Densidade': visualize as cores da sua matriz e aprenda a identificar onde estão os pontos em excesso para limpá-los!",
    "quickSummary": "Teto máximo seguro de penetrações de agulha por cm² para evitar furos no tecido, quebras de agulha e rigidez excessiva.",
    "relatedTerms": [
      "Densidade de Ponto",
      "Mapa de Calor (Density Map)",
      "Sob-pontos (Underlay)",
      "Compensação de Repuxo"
    ],
    "tags": [
      "l-058",
      "limite de perfuracao",
      "densidade maxima",
      "density map",
      "seguranca textil",
      "programacao",
      "otimizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Density Management, Stitch Filtering and Fabric Integrity Rules. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Engenharia da Densidade: Limites de Perfuração, Mapas de Calor e Maciez Têxtil no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-059-leitor-optico-codigo-barras-matrizes-barcode-scanner-automation",
    "code": "L-059",
    "term": "Leitor Óptico de Código de Barras para Matrizes (Barcode & QR-Code Scanner Automation)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Da automação industrial 4.0 e rastreabilidade digital.",
    "origin": "Sistema de automação desenvolvido para máquinas industriais modernas (Tajima, Barudan, Brother, Happy Japan) que integra um leitor óptico USB ou sem fio ao painel para carregar a matriz e a sequência de cores correta instantaneamente a partir da ordem de produção.",
    "summary": "Leitor a laser ou câmera 2D acoplada à máquina que lê o código de barras da ordem de serviço e carrega automaticamente a matriz, cores e bastidor corretos sem risco de erro humano.",
    "definition": "O Leitor de Código de Barras para Máquinas de Bordar (Barcode / QR-Code Job Automation Scanner) é um periférico de automação industrial 4.0 conectado diretamente à porta USB ou ao controlador de rede da máquina de bordar. Em produções de confecção seriada ou personalização em massa (mass customization), a ordem de serviço do cliente é impressa com um código de barras exclusivo. Ao bipar o papel com o leitor óptico, o computador da máquina busca instantaneamente o arquivo correto da matriz no servidor de rede do ateliê, carrega o tamanho de bastidor ideal, calibra a sequência de trocas de cores e ajusta o número de peças a produzir, eliminando 100% dos erros operacionais de carregar desenhos errados ou nomes trocados.",
    "technicalDetails": "Especificações e protocolos do sistema de automação por código de barras:\n• Tecnologia de Leitura: Sensor laser 1D linear ou leitor óptico de imagem 2D para códigos QR e DataMatrix;\n• Conexão com a Máquina: Interface USB Plug-and-Play, RS-232 serial ou comunicação sem fio Bluetooth / Wi-Fi Industrial;\n• Integração com Servidor (LAN / DNC): Conexão direta com pastas compartilhadas de rede local contendo milhares de arquivos em formatos DST, PES, EXP ou DSB;\n• Bloqueio contra Erros: O painel só libera o botão de início se a matriz lida pelo leitor for compatível com o bastidor montado no pantógrafo;\n• Rastreabilidade de Produtividade: Registra automaticamente horário de início, tempo total de bordado, operador responsável e paradas por quebra de linha em sistemas ERP/MES.",
    "howItWorks": [
      "1. O setor de vendas ou criação gera a ordem de produção com o código de barras da peça do cliente.",
      "2. A operadora monta o bastidor com a peça de vestuário na máquina de bordar.",
      "3. Pega o leitor óptico e bipa o código de barras impresso na folha de trabalho.",
      "4. O painel da máquina lê o código e puxa o arquivo da matriz da rede em menos de 1 segundo.",
      "5. A sequência correta de 8 cores de linha é programada no painel automaticamente.",
      "6. A operadora confere o gabarito visual e aperta o botão de iniciar.",
      "7. A produção atinge 100% de precisão sem nenhum risco de trocar o nome do cliente ou errar a cor do bordado."
    ],
    "beginnerExplanation": "O leitor de código de barras para máquina de bordar é aquele mesmo leitor de feixe de luz vermelha que o caixa do supermercado usa para passar as compras! No ateliê, em vez de a bordadeira perder tempo procurando no pen drive qual é o arquivo daquele cliente entre centenas de pastas, ela só dá um 'bip' na folha do pedido! A máquina já abre o desenho certo na hora, coloca as cores certas no painel e fica pronta para bordar num piscar de olhos! É maravilhoso para nunca mais errar o nome ou a cor de uma encomenda!",
    "applications": [
      "Fábricas de uniformes com milhares de nomes e logotipos diferentes por dia",
      "Confecções esportivas com numerações e nomes personalizados para atletas",
      "Grandes ateliês de e-commerce e presentes personalizados com alta rotatividade de pedidos",
      "Controle de tempo de máquina e métricas de eficiência produtiva em tempo real"
    ],
    "commonErrors": [
      "Imprimir códigos de barras muito pequenos ou borrados que o leitor não consegue escanear",
      "Renomear os arquivos da matriz no computador com nomes diferentes dos cadastrados no sistema",
      "Deixar o leitor cair no chão de concreto da fábrica e quebrar a lente de leitura"
    ],
    "troubleshootingTips": [
      "Mantenha a lente do leitor de código de barras limpa com um pano de microfibra macio",
      "Utilize suporte de bancada com leitura automática (Hands-Free) para a operadora apenas passar a folha sob o feixe",
      "Padronize a nomenclatura dos arquivos de matrizes com o mesmo número de identificação do pedido do cliente"
    ],
    "dicaArtrelados": "Mesmo em ateliês pequenos: organize suas matrizes no computador por números de pedidos (ex: 10452-Beatriz.pes) e coloque o número no papel do pedido. Fica muito mais rápido de achar e elimina qualquer confusão de nomes parecidos!",
    "voceSabia": "O código de barras foi inventado em 1948 por Bernard Silver e Norman Woodland nos Estados Unidos, inspirado no código Morse, sendo desenhado inicialmente com os dedos na areia de uma praia em Miami!",
    "practicalExercise": "Observe um leitor óptico em funcionamento ou use a câmera do seu celular para ler um QR-Code de um arquivo de bordado: entenda como a leitura digital transfere dados instantaneamente sem erros de digitação!",
    "quickSummary": "Leitor óptico conectado à máquina que carrega a matriz, cores e bastidor corretos automaticamente a partir da ordem de serviço.",
    "relatedTerms": [
      "Automação 4.0",
      "Ordem de Produção",
      "Formato DST",
      "Controle de Qualidade"
    ],
    "tags": [
      "l-059",
      "leitor optico",
      "codigo de barras",
      "qr-code",
      "automacao",
      "industria 4.0",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA NETWORK SYSTEMS. Barcode Automation and Centralized Design Server Integration Manual. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Automação e Indústria 4.0 no Bordado: Leitores Ópticos, Redes DNC e Rastreabilidade Total. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-060-lacre-tensao-bobina-medidor-towa-tension-gauge-scale",
    "code": "L-060",
    "term": "Lacre de Tensão de Bobina e Medidor TOWA (TOWA Bobbin & Top Tension Gauge Scale)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Substantivo masculino / Da metrologia e calibração dinâmica de forças têxteis.",
    "origin": "Instrumento mecânico de precisão desenvolvido pela Towa Industrial Co. no Japão, consagrado mundialmente como o padrão ouro para medir e calibrar a força de tração da linha de bobina e da linha superior em gramas-força (gf / cN).",
    "summary": "Instrumento de medição de precisão que afere a tensão exata em gramas da linha da bobina e da agulha, eliminando o 'achismo' e padronizando o ponto perfeito.",
    "definition": "O Medidor de Tensão TOWA (TOWA Tension Gauge / Dinamômetro de Linha de Bobina / Balança de Tensão Têxtil) é o equipamento analógico ou digital indispensável para a calibração científica da tensão de costura no bordado computadorizado. Em vez de a bordadeira depender de testes manuais subjetivos (como puxar o fio com o dedo ou fazer o 'teste do ioiô'), a caixa de bobina é encaixada no berço do medidor TOWA. A linha é puxada através de roletes calibrados ligados a um ponteiro micrométrico que indica com exatidão matemática a força de resistência em gramas-força (gf). O padrão perfeito para bordado em linhas de bobina 60wt é de 18 a 22 gf, enquanto para a agulha superior é de 110 a 130 gf.",
    "technicalDetails": "Metrologia e valores de calibração do medidor TOWA:\n• Modelos Disponíveis: Medidor TM-1 (para bobinas tamanho 'L' padrão) e TM-2 (para bobinas tamanho 'M' Jumbo);\n• Unidade de Medida: Gramas-força (gf) ou Centinewtons (cN) com escala graduada de 0 a 50 gf;\n• Faixa Padrão para Bobina de Bordado (60wt Poliéster): 18 gf a 24 gf;\n• Faixa para Bobina de Fio Metálico / Lã: 12 gf a 15 gf (tensão aliviada);\n• Faixa para Linha Superior (Top Tension Gauge): 100 gf a 140 gf medida diretamente no olho da agulha com calcador abaixado;\n• Precisão Metrológica: Erro menor que ± 0,5 gf, imune a variações térmicas ambientes.",
    "howItWorks": [
      "1. A bordadeira passa a linha da canelinha sob a mola tensora da caixa de bobina.",
      "2. Encaixa a caixa de bobina no suporte do medidor TOWA.",
      "3. Passa a ponta da linha pelos dois roletes giratórios de precisão do instrumento.",
      "4. Puxa a linha com movimento suave e contínuo de velocidade constante.",
      "5. O ponteiro mecânico deflete na escala graduada e indica o valor exato (ex: 20 gf).",
      "6. Se o valor estiver fora da faixa, a bordadeira gira o micro-parafuso da mola tensora até atingir exatamente 20 gf.",
      "7. A caixa de bobina é instalada na máquina com a certeza matemática de formação perfeita do ponto."
    ],
    "beginnerExplanation": "O medidor TOWA é como a 'balança de precisão' da linha da sua máquina! Antigamente as pessoas ficavam tentando adivinhar se o parafuso da canelinha estava apertado ou frouxo puxando com a mão ou balançando a caixa de bobina como se fosse um ioiô. Com o medidor TOWA, você coloca a canelinha nele, puxa a linha e um ponteirinho mostra na hora o número exato da força! Você aperta ou afrouxa o parafusinho até o ponteiro bater no número 20 e pronto: seu bordado fica 100% perfeito sem nenhuma linha branca subindo para a frente!",
    "applications": [
      "Padronização científica de tensão em todas as cabeças de máquinas multicabeçotes industriais",
      "Eliminação definitiva de pontinhos brancos de canelinha aparecendo na frente do bordado",
      "Calibração rápida após troca de marcas de linhas de canelinha ou canelinhas pré-bobinadas",
      "Treinamento de controle de qualidade e auditoria técnica em ateliês e fábricas"
    ],
    "commonErrors": [
      "Puxar a linha com trancos rápidos e violentos no medidor (o ponteiro oscila e não dá leitura estável)",
      "Esquecer de limpar os fiapos debaixo da mola da caixa de bobina antes de medir no TOWA",
      "Deixar o aparelho cair no chão, descalibrando a mola interna de alta sensibilidade"
    ],
    "troubleshootingTips": [
      "Puxe a linha sempre com velocidade suave e constante de cerca de 10 cm por segundo para uma leitura estável do ponteiro",
      "Guarde o medidor TOWA dentro do seu estojo almofadado original protegido contra poeira e impactos",
      "Calibre todas as suas caixas de bobina no início de cada semana para manter o padrão constante de bordado"
    ],
    "dicaArtrelados": "Tem mais de uma caixa de bobina no seu ateliê? Use o medidor TOWA para deixar todas exatamente com 20 gramas de tensão! Assim, quando acabar a linha no meio de um bordado, você troca de canelinha e o bordado continua com a mesma tensão perfeita sem nenhuma diferença de ponto!",
    "voceSabia": "A empresa japonesa TOWA fabrica instrumentos de medição de precisão para a indústria têxtil e aeroespacial desde 1958, sendo o aparelho mais copiado e respeitado por técnicos de máquinas de costura e bordado dos cinco continentes!",
    "practicalExercise": "Encaixe sua caixa de bobina no medidor TOWA ou observe a medição: puxe a linha suavemente e veja o ponteiro indicar a resistência exata em gramas: gire o parafusinho 1/8 de volta e veja a força mudar na escala com precisão matemática!",
    "quickSummary": "Instrumento japonês de medição de precisão que calibra a força de tração da linha de bobina em gramas (18-22 gf), garantindo tensão perfeita.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Tensão de Bobina",
      "Teste do Ioiô",
      "Lockstitch"
    ],
    "tags": [
      "l-060",
      "towa",
      "medidor de tensao",
      "tensao de bobina",
      "gramas-forca",
      "calibracao",
      "precisao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. JAPAN. Instruction Manual and Standard Tension Values for TM-1 and TM-2 Gauges. Tokyo: Towa, 2022.",
      "ARTRELADOS. A Ciência da Tensão Perfeita: Medidores TOWA, Dinamômetros e Calibração Científica no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-061-linha-acabamento-richelieu-cordone-duplo-buttonhole-border",
    "code": "L-061",
    "term": "Linha de Acabamento Richelieu e Cordone Duplo (Richelieu Buttonhole Stitch & Cordonnet Border)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino / Da tradição histórica do bordado de corte e lenceria.",
    "origin": "Técnica de corte e bordado vazado em relevo associada ao Cardeal Richelieu na França do século XVII, reproduzida com precisão geométrica e cordões duplos de proteção no bordado computadorizado.",
    "summary": "Técnica clássica de bordado vazado combinada com cordão cheio duplo e sob-pontos densos que protegem as bordas recortadas contra qualquer desfiamento.",
    "definition": "O Acabamento Richelieu no Bastidor (Richelieu Embroidery / Cutwork Border / Ponto Caseado com Cordone Duplo) é a técnica clássica de bordado cortado em que áreas selecionadas do tecido interno são removidas com tesoura de ponta curva ou ferro de solda, restando pontes bordadas em relevo (Brides) e contornos reforçados em ponto cheio arredondado (Cordonnet). No bordado computadorizado moderno, a matriz é programada em fases sequenciais com paradas automáticas de corte (Stop Commands): 1ª fase (costura de marcação e alinhavo do recorte), 2ª fase (recorte manual pelo operador), 3ª fase (amarração das bordas cortadas) e 4ª fase (cobertura final em ponto cheio duplo denso com entretela hidrossolúvel), garantindo um acabamento de alta-costura que nunca desfia.",
    "technicalDetails": "Propriedades e etapas da matriz de Richelieu:\n• Fase 1 (Outline / Marcação): Ponto corrido simples que delimita exatamente onde o tecido será vazado;\n• Fase 2 (Stop / Parada de Recorte): A máquina para e recua o bastidor para o operador recortar o tecido interno com tesoura pelicano de ponta fina;\n• Fase 3 (Brides / Pontes de Ligação): A máquina tece pontes suspensas sobre a entretela solúvel que cruzam o espaço aberto;\n• Fase 4 (Cordonnet / Cobertura): Ponto cheio com densidade alta (0,35 mm) e largura de 2,5 mm a 3,5 mm cobrindo as bordas do tecido cortado;\n• Estabilização Obrigatória: Uso de 2 camadas de entretela hidrossolúvel (PVA) montadas no bastidor junto com o tecido de linho ou percal.",
    "howItWorks": [
      "1. A bordadeira monta o tecido de linho ou percal no bastidor com duas camadas de entretela solúvel.",
      "2. A máquina borda o contorno de marcação do vazado (Fase 1).",
      "3. A máquina executa um comando de parada automática (Stop).",
      "4. A operadora recorta cuidadosamente o tecido dentro da marcação com tesoura de precisão, sem furar a entretela solúvel transparente de baixo.",
      "5. A máquina retoma o bordado e tece as pontes suspensas (Brides) no espaço aberto sobre a entretela.",
      "6. Cobre todas as bordas recortadas com um cordão de ponto cheio duplo impecável.",
      "7. Ao lavar a peça em água corrente, a entretela solúvel dissolve-se e a peça revela um vazado Richelieu deslumbrante de alto luxo."
    ],
    "beginnerExplanation": "O bordado Richelieu é aquele bordado clássico e chique de castelo que tem buraquinhos vazados no meio do desenho, como em toalhas de mesa nobres e lençóis de casamento! A máquina marca no pano onde vai ser o buraco e para. Você pega uma tesourinha bem pontudinha, recorta o paninho de dentro sem furar o plástico transparente de baixo e aperta o play. A máquina volta a costurar e faz uma borda cheia e gordinha por cima do corte e tece pontinhas suspensas no meio do buraco! Quando você lava a toalha com água, o plástico derrete e fica aquele bordado vazado deslumbrante que parece feito à mão!",
    "applications": [
      "Toalhas de mesa de banquete luxuosas, jogos americanos e caminhos de mesa de puro linho",
      "Lençóis de noiva, fronhas com barrados recortados e enxovais clássicos de bebê",
      "Vestidos de alta-costura, golas vitorianas e mangas românticas vazadas",
      "Guardanapos finos de linho com monogramas recortados em estilo clássico europeu"
    ],
    "commonErrors": [
      "Cortar a entretela solúvel transparente de baixo junto com o tecido na hora do recorte manual",
      "Deixar rebarbas compridas de tecido para fora da linha de marcação (os fiapos aparecem saindo por baixo do ponto cheio)",
      "Bordar sem entretela solúvel de apoio (os pontos caem no vazio e embolam na lançadeira)"
    ],
    "troubleshootingTips": [
      "Use tesouras curvas especiais para Richelieu (tesoura tipo gavião ou pelicano) com ponta bem afiada para cortar rente à costura",
      "Aplique 2 camadas de entretela hidrossolúvel de boa gramatura para sustentar as pontes abertas com firmeza",
      "Passe o bordado a ferro com bastante vapor pelo avesso sobre uma toalha macia para realçar o relevo do cordone"
    ],
    "dicaArtrelados": "Para cortar o tecido do Richelieu com facilidade e rapidez no bastidor: use uma tesourinha curva de ponta arredondada e apoie a ponta sobre o plástico solúvel sem medo. O corte sai rente à costura e a entretela de baixo fica 100% intacta!",
    "voceSabia": "O bordado Richelieu foi encomendado no século XVII pelo Cardeal Richelieu, primeiro-ministro da França de Luís XIII, para incentivar a indústria francesa de rendas e proibir a importação caríssima de rendas de Veneza na Itália!",
    "practicalExercise": "Digitalize ou pegue uma matriz simples de Richelieu: monte linho com entretela solúvel, recorte o centro na parada da máquina e veja a máquina tecer o cordão de acabamento fechando o vazado com perfeição clássica!",
    "quickSummary": "Técnica secular de bordado vazado combinada com cordão cheio de proteção que sela as bordas cortadas com nobreza e requinte.",
    "relatedTerms": [
      "Richelieu",
      "Cutwork",
      "Entretela Hidrossolúvel",
      "Tesoura Pelicano",
      "Linho Puro"
    ],
    "tags": [
      "l-061",
      "richelieu",
      "cordone",
      "cutwork",
      "vazado",
      "alta costura",
      "enxoval de luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ROYAL SCHOOL OF NEEDLEWORK. Cutwork and Richelieu Embroidery: Heritage Stitching Techniques. London: Search Press, 2021.",
      "ARTRELADOS. O Luxo do Richelieu Computadorizado: Paradas de Corte, Pontes Suspensas, Cordonet e Acabamento sem Desfiamento. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "l-062-lacada-flutuante-e-formacao-deficiente-do-ponto",
    "code": "L-062",
    "term": "Laçada Flutuante, Ninho de Pássaro e Formação Deficiente do Ponto (Birdnesting & Loop Formation Failure)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Problemas & Soluções",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da física da mecânica de costura de dupla laçada (Lockstitch) e do termo técnico industrial 'birdnesting' (emaranhado de linha em formato de ninho de pássaro).",
    "summary": "Emaranhado denso de linha que se forma embaixo do tecido ou na caixa de bobina por falta de tensão superior ou passagem incorreta do fio no estica-fio.",
    "definition": "A Laçada Flutuante e Formação Deficiente de Ponto com Bloqueio por Ninho de Pássaro (Birdnesting Failure / Rotary Hook Thread Tangling / Defective Lockstitch Loop Formation) é a falha operacional crítica em que a linha superior não forma o laço elástico adequado com a linha da bobina, acumulando dezenas de voltas soltas e desordenadas no avesso do tecido ou no compartimento da lançadeira rotativa. Ao contrário do que a maioria dos iniciantes imagina (que supõe se tratar de defeito na bobina inferior), o ninho de pássaro é provocado em 95% dos casos por ausência completa de tensão na linha SUPERIOR (quando a linha escapa do estica-fio, quando os discos de tensão estão sujos com fiapos abertos ou quando o pé-calcador foi abaixado sem engrenar o fio nos tensores).",
    "technicalDetails": "Formação de laço dependente de folga de 1,5 mm a 2,0 mm entre a agulha e a ponta da lançadeira na subida de 2,2 mm a partir do Ponto Morto Inferior (PMI). Tensão superior nula impede a retração do fio pelo estica-fio.",
    "howItWorks": [
      "1. A bordadeira troca de linha para bordar uma flor amarela.",
      "2. Ao passar a linha, ela se distrai e não encaixa o fio dentro do ganchinho do estica-fio.",
      "3. Ela aperta o Start da máquina.",
      "4. Nos primeiros 5 pontos, a máquina emite um barulho mais grave e pesado.",
      "5. Embaixo do bastidor, um bolo gigante e duro de linha amarela trava a placa de agulha e o pantógrafo.",
      "6. A bordadeira para a máquina imediatamente sem forçar o bastidor.",
      "7. Com a tesourinha de precisão do Kit de Emergência, corta os fios emaranhados por baixo.",
      "8. Passa a linha novamente prestando atenção em todos os discos e no estica-fio.",
      "9. A máquina volta a bordar com laçada impecável, fina e uniforme."
    ],
    "beginnerExplanation": "É aquele 'ninho de passarinho' horrível de linha toda embolada que às vezes aparece de repente embaixo do tecido e trava a máquina! Quando isso acontece, 99% das vezes a culpa NÃO é da bobina de baixo, mas sim da linha de CIMA que escapou daquela pecinha de ferro que sobe e desce (o estica-fio) ou não entrou no tensor. Basta passar a linha de cima de novo com carinho que tudo se resolve!",
    "applications": [
      "Diagnóstico rápido de travamentos de máquina e ruídos anormais no cabeçote",
      "Treinamento de novos operadores e bordadeiras no ateliê",
      "Prevenção de quebra de lançadeiras e empenamento de barras de agulha",
      "Procedimento padrão de passagem correta de linhas com pé-calcador levantado"
    ],
    "commonErrors": [
      "❌ Puxar o bastidor com força bruta quando a máquina trava no ninho de linha, entortando a barra de agulha e desregulando o pantógrafo",
      "❌ Mexer no parafuso da caixa de bobina achando que o problema é embaixo, desregulando a tensão inferior sem necessidade",
      "❌ Passar a linha na máquina com o pé-calcador ABAIXADO (os discos de tensão ficam fechados e a linha não entra entre eles)"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO: Sempre passe a linha superior na máquina com o pé-calcador LEVANTADO (para os discos de tensão se abrirem)",
      "Se a linha embolar embaixo: Pare a máquina, corte o bolo de fios por baixo com calma e repasse a linha de cima conferindo o estica-fio",
      "Passe um fio dental sem cera entre os discos de tensão da máquina a cada 15 dias para retirar fiapos invisíveis que deixam os discos abertos"
    ],
    "dicaArtrelados": "A máquina embolou aquele bolo de linha embaixo do bastidor? Respire fundo e não puxe o bastidor para cima! Pegue sua tesourinha curva de ponta fina, deslize a pontinha por baixo da placa e corte os fios com calma. Depois é só passar a linha de cima de novo conferindo o estica-fio. Simples, rápido e sua máquina continua novinha!",
    "voceSabia": "O mecanismo de dupla laçada (Lockstitch) que une a linha de cima com a de baixo foi patenteado pelo inventor americano Elias Howe em 1846 e é o princípio fundamental de todas as máquinas de costura e bordado até hoje!",
    "practicalExercise": "Com a máquina desligada, passe a linha de propósito sem engatar no estica-fio e dê duas voltas no volante com a mão: veja com os próprios olhos a linha sobrando e formando um laço gigante solto na lançadeira. Depois passe corretamente e compare a diferença!",
    "quickSummary": "Emaranhamento de linha no avesso causado por ausência de tensão na linha superior ou desengate do estica-fio.",
    "relatedTerms": [
      "Estica-Fio / Alavanca Puxa-Fio",
      "Ajuste de Tensão da Linha",
      "Caixa de Bobina / Caixa de Canelinha",
      "Problemas & Soluções"
    ],
    "tags": [
      "l-062",
      "lacada flutuante",
      "ninho de passaro",
      "birdnesting",
      "embolamento",
      "tensao",
      "estica-fio",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. Troubleshooting Stitch Defects, Birdnesting & Loop Formation Mechanics. Herzogenrath, 2022.",
      "ARTRELADOS. O Fim das Linhas Emboladas: Diagnóstico Preciso de Laçadas, Ninhos de Pássaro e Tensões Perfeitas no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l-063-linha-metalica-especial-e-fio-metalizado-de-alta-refletividade",
    "code": "L-063",
    "term": "Linha Metálica Especial, Fio Metalizado de Alta Refletividade e Fio de Lurex (Metallic & Lurex Embroidery Threads)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do ouro e prata martelados usados em paramentos eclesiásticos medievais até a invenção da laminação de poliéster metalizado com vapor de alumínio a vácuo (século XX).",
    "summary": "Fios decorativos com alma central de poliamida envolvida por fita metalizada brilhante (ouro, prata, bronze) que exigem agulhas específicas e redução de tensão e velocidade.",
    "definition": "A Linha Metálica para Bordado Computadorizado (Metallic Embroidery Thread / Lurex Foil Filament / Heavy Metal Reflective Yarn) é um fio compósito de alta tecnologia composto por um núcleo central elástico (geralmente poliamida ou poliéster multifilamento) espiralado por uma fita microscópica de poliéster metalizada com deposição de alumínio a vácuo e banho de verniz colorido. Por possuir textura áspera, coeficiente de atrito elevado e tendência natural a torções helicoidais (efeito mola), a linha metálica requer agulha especial com olho extralongo e canaleta profunda (Agulha Schmetz Metallic calibre 80/12 ou 90/14), lubrificação suave com silicone líquido, alívio de tensão superior em 20% a 30% e velocidade moderada entre 500 e 650 PPM.",
    "technicalDetails": "Construção típica: Alma de Poliamida (70%) + Fita Metalizada (30%). Título métrico No. 40 ou No. 50. Requer agulha Metallic/Topstitch com olho 2x maior que a agulha universal para evitar descascamento da fita refletiva.",
    "howItWorks": [
      "1. O ateliê recebe a encomenda de um brasão imperial bordado com fios de ouro reluzentes em veludo para uma formatura.",
      "2. A bordadeira seleciona a linha metálica dourada de alta qualidade (Madeira Metallic FS 40).",
      "3. Instala a agulha Schmetz Metallic calibre 80/12 com olho revestido e canaleta larga.",
      "4. Afrouxa a tensão superior da máquina em dois pontos para o fio correr sem resistência.",
      "5. Posiciona o cone de linha metálica na vertical a pelo menos 40 cm de distância do primeiro guia de linha da máquina.",
      "6. Ajusta a velocidade da máquina para 600 PPM.",
      "7. A máquina borda o brasão suavemente: o ouro reluz com brilho de joia, sem nenhuma quebra de linha ou desfiamento.",
      "8. O cliente fica maravilhado com o luxo e a sofisticação da peça."
    ],
    "beginnerExplanation": "É aquela linha dourada, prateada e brilhante linda que parece puro ouro e prata de verdade! Como ela é feita com uma fitinha brilhosa enrolada num fiozinho, ela é mais sensível e pode desfiar se você costurar muito rápido ou com a agulha errada. Usando a agulha especial para linha metálica (que tem o buraquinho bem grandão) e diminuindo um pouco a velocidade da máquina, ela borda macia e deixa qualquer peça com cara de realeza!",
    "applications": [
      "Brasões de formatura, faixas de rainha, becas universitárias e paramentos religiosos",
      "Enxovais de casamento de luxo, monogramas dourados em toalhas de linho",
      "Fantasias de luxo para carnaval, vestidos de gala e figurinos de teatro",
      "Bordados natalinos com estrelas, velas e detalhes cintilantes"
    ],
    "commonErrors": [
      "❌ Borda linha metálica com agulha comum calibre 75/11 de olho pequeno, descascando a película de ouro e quebrando a linha a cada 20 pontos",
      "❌ Manter a velocidade da máquina em 900 a 1.000 PPM, gerando superaquecimento por atrito no olho da agulha e derretendo o fio metálico",
      "❌ Deixar o cone de linha metálica deitado ou muito perto da máquina, fazendo o fio criar nós em formato de mola antes de entrar nos tensores"
    ],
    "troubleshootingTips": [
      "Use OBRIGATORIAMENTE agulha especial Schmetz Metallic ou Organ Metallic calibre 80/12 ou 90/14",
      "Afrouxe a tensão superior da máquina até o ponto em que o bordado fique macio sem puxar a linha da bobina para cima",
      "Afaste o cone de linha metálica da máquina usando um suporte externo de mesa alto (porta-cones) para o fio desenrolar reto sem torcer",
      "Passe uma gotinha de silicone líquido para fios no topo do cone de linha metálica para diminuir o atrito nos tensores"
    ],
    "dicaArtrelados": "Quer o segredo para a linha dourada bordar igual manteiga sem quebrar nunca? Use agulha própria para linha metálica (Metallic 80/12), baixe a velocidade da máquina para 600 PPM e coloque o carretel em um suporte alto longe da máquina para a linha descer relaxada. O bordado fica um escândalo de lindo e sem nenhuma quebra!",
    "voceSabia": "Na antiguidade, os bordados dourados da realeza usavam fios feitos de ouro puro 24 quilates batido em lâminas ultrafinas e enroladas à mão em fios de seda natural!",
    "practicalExercise": "Coloque uma agulha Metallic 80/12 na sua máquina, instale uma linha dourada e reduza a velocidade para 600 PPM: borde uma pequena estrela de 4 cm e admire o brilho de joia do bordado reluzindo sob a luz!",
    "quickSummary": "Linha decorativa metalizada de alto brilho que exige agulha de olho grande, baixa velocidade e alívio de tensão.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Ajuste de Tensão da Linha",
      "Pontos por Minuto (PPM / SPM)",
      "Agulhas & Fios"
    ],
    "tags": [
      "l-063",
      "linha metalica",
      "fio dourado",
      "lurex",
      "ouro",
      "prata",
      "brilho",
      "agulha metallic",
      "luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA. Metallic Threads Mastery: Composition, Needle Selection & Tension Calibration. Freiburg, 2022.",
      "SCHMETZ. Needles for Metallic & Specialty Filament Threads Guide. Herzogenrath, 2023."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l-064-lupa-articulada-de-bancada-com-iluminacao-circular",
    "code": "L-064",
    "term": "Lupa Articulada de Bancada, Lente de Aumento e Iluminação Circular LED (Magnifying Lamp & Optical Inspection Glass)",
    "letter": "L",
    "level": "Fundamental 🟢",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da óptica de precisão cirúrgica e relojoeira adaptada para ateliês de alta-costura e controle de qualidade de microbordados.",
    "summary": "Luminária de bancada com braço articulado, lente de cristal com aumento de 3x a 8x e anel de LEDs brancos para inspeção de pontos, enfiação de agulhas e limpeza fina.",
    "definition": "A Lupa Articulada de Bancada com Iluminação Circular LED (Optical Inspection Magnifying Lamp / High-CRI LED Workstation Glass) é o equipamento ergonômico de visualização e controle de qualidade óptica instalado na bancada de trabalho da bordadeira. Composta por uma lente biconvexa de cristal óptico de alta transparência (potência dióptrica de 3 a 8 dioptrias, equivalendo a 1,75x a 3x de ampliação real sem distorção cromática) circundada por um anel difusor de LEDs de alto índice de reprodução de cor (IRC/CRI > 90), permite enxergar perfeitamente o olho microscópico da agulha, pontas desfiadas, rebarbas no bico da lançadeira e o alinhamento exato de matrizes sobre tecidos com texturas complexas.",
    "technicalDetails": "Lente óptica de 127 mm de diâmetro em vidro crown. Temperatura de cor de 5.500K a 6.000K (Luz do Dia / Daylight) com dimmer de intensidade luminosa de 0 a 1.200 lúmens e braço pantográfico com molas compensadoras de peso.",
    "howItWorks": [
      "1. A bordadeira precisa enfiar uma linha fina calibre 75 em uma agulha delicada 65/9 para bordar um monograma em lenço de batizado.",
      "2. Ela puxa a lupa articulada suavemente com uma mão posicionando a lente sobre a barra da agulha.",
      "3. O anel circular de LEDs Daylight ilumina a área sem sombras e sem reflexos que cansam a vista.",
      "4. O olho da agulha surge ampliado e nítido como se tivesse 1 cm de largura.",
      "5. A bordadeira passa a linha pelo buraco da agulha de primeira em menos de 2 segundos, sem forçar os olhos.",
      "6. Durante o bordado, inspeciona a formação do ponto com precisão cirúrgica.",
      "7. Ao final do dia de trabalho, a visão está descansada e relaxada, sem dores de cabeça."
    ],
    "beginnerExplanation": "É uma luminária maravilhosa com uma lente de aumento gigante de vidro no meio e uma luz branca de LED em volta que fica presa na sua mesa! Quando você precisa passar a linha no buraquinho da agulha ou ver se o bordado ficou perfeito, basta puxar a lupa: ela aumenta tudo bem grandão e bem iluminado! Você nunca mais vai sofrer para enxergar o buraco da agulha e seus olhos não ficam cansados no final do dia!",
    "applications": [
      "Enfiação rápida de agulhas finas e trocas de linha no cabeçote da máquina",
      "Inspeção minuciosa de microletras, contornos e encaixes de matrizes",
      "Inspeção e polimento da ponta da lançadeira para detecção de rebarbas microscópicas",
      "Acabamento manual de recorte em Richelieu e apliques delicados com tesoura fina"
    ],
    "commonErrors": [
      "❌ Trabalhar em ateliês escuros com lâmpadas amareladas fracas, forçando a visão e não percebendo falhas no bordado",
      "❌ Usar lupas de plástico acrílico barato que riscam facilmente e distorcem a imagem nas bordas",
      "❌ Deixar a lente de aumento exposta à luz solar direta perto da janela (risco de efeito de concentração de raios solares)"
    ],
    "troubleshootingTips": [
      "Escolha sempre lupas com lente de vidro óptico de 5 dioptrias (aumento ideal para ateliê sem cansar os olhos)",
      "Prefira iluminação com LED branco frio (Daylight / 5.500K a 6.000K) que mostra as cores reais das linhas sem distorção",
      "Mantenha a capa protetora de tecido sobre a lente da lupa quando não estiver em uso para evitar poeira e proteger contra a luz do sol"
    ],
    "dicaArtrelados": "Investir em uma boa lupa com luz LED para a sua mesa é cuidar do seu bem mais precioso: a sua saúde visual! Com a iluminação perfeita, você trabalha mais rápido, não erra na passagem de linha e chega ao fim do dia com os olhos descansados e cheia de energia!",
    "voceSabia": "As primeiras lentes de aumento ópticas para trabalhos manuais foram esculpidas em pedras de berilo transparente pelos monges copistas nos mosteiros da Idade Média no século XIII!",
    "practicalExercise": "Posicione uma lupa com luz sobre a placa de agulha da sua máquina e observe o olho da agulha e a laçada sendo formada: veja a riqueza de detalhes microscópicos que normalmente passam despercebidos aos olhos nus!",
    "quickSummary": "Luminária com lente de aumento óptica e LED circular para inspeção de pontos e conforto visual no ateliê.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Inspeção Visual e Controle de Qualidade",
      "Ergonomia do Posto de Trabalho",
      "Ferramentas & Acessórios"
    ],
    "tags": [
      "l-064",
      "lupa de bancada",
      "iluminacao led",
      "lente de aumento",
      "ergonomia",
      "controle de qualidade",
      "visao",
      "ferramentas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DAYLIGHT COMPANY. Optical Magnification & Ergonomic Illumination for Textile Artists. London, 2022.",
      "ARTRELADOS. Ergonomia, Visão e Iluminação no Ateliê de Bordado: Ferramentas de Precisão e Saúde Visual da Bordadeira. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l-065-lixamento-e-polimento-microabrasivo-de-agulhas-e-lancadeiras",
    "code": "L-065",
    "term": "Lixamento e Polimento Microabrasivo da Lançadeira e Placa de Agulha (Micro-Abrasive Polishing & Burr Removal)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da metalurgia de precisão e ajustagem mecânica industrial aplicada à manutenção de componentes móveis de fricção têxtil.",
    "summary": "Procedimento para remover rebarbas e arranhões microscópicos no bico da lançadeira e no furo da chapa de ponto usando lixas microabrasivas e pasta diamantada.",
    "definition": "O Lixamento e Polimento Microabrasivo de Componentes de Costura (Rotary Hook Micro-Polishing / Needle Strike Burr Deburring Protocol) é o procedimento técnico de recuperação de superfícies de contato de aço temperado que sofreram impactos acidentais de agulha (Needle Strikes). Quando uma agulha quebra ou entorta, sua ponta afiada bate com frequência na ponta da lançadeira rotativa ou na borda interna do furo da placa de agulha, criando micro-rebarbas invisíveis a olho nu que funcionam como verdadeiras navalhas, desfiando e cortando a linha de bordar repetidamente. O procedimento utiliza lixas abrasivas ultrafinas de carbureto de silício (grãos 1.200 a 2.500) e pasta de polimento com microdiamantes para restaurar o acabamento espelhado original do metal.",
    "technicalDetails": "Remoção controlada de material em escala submicrométrica (< 0,005 mm) para não alterar a geometria do bico da lançadeira. Polimento final com feltro e óxido de cério ou pasta de diamante de 1 mícron até atingir rugosidade superficial Ra < 0,05 µm.",
    "howItWorks": [
      "1. A máquina quebrou uma agulha em alta velocidade durante um bordado grosso e, depois disso, a linha passa a desfiar e arrebentar a cada 30 segundos.",
      "2. O técnico desliga a máquina, remove a placa de agulha e a caixa de bobina.",
      "3. Passa a ponta da unha e um pedaço de meia-fina de nylon sobre o bico da lançadeira e na borda do furo da placa.",
      "4. A meia-fina desfia e engancha em uma rebarba áspera provocada pela batida da agulha.",
      "5. Com uma tira de lixa de água microabrasiva grão 1.500 embebida em óleo fino, lixa suavemente a rebarba com movimentos em arco.",
      "6. Aplica pasta de polimento fina em um pedaço de feltro ou algodão e lustra o aço até ficar perfeitamente espelhado e liso.",
      "7. Passa a meia-fina novamente: ela desliza suave sem prender em nenhum ponto.",
      "8. Remonta o conjunto e a máquina volta a bordar suavemente sem nenhuma quebra de linha."
    ],
    "beginnerExplanation": "Quando a agulha da máquina quebra no meio do bordado, a pontinha dela pode bater com força na pecinha de ferro que roda lá embaixo (a lançadeira) ou na chapa de metal e deixar uma 'farpa' ou arranhãozinho bem afiado que a gente nem vê! Essa farpinha fica cortando a linha de bordar toda hora. O polimento é como passar uma lixinha fininha e uma pasta mágica de dar brilho para deixar o ferro lisinho como um espelho de novo, fazendo a linha correr macia sem arrebentar!",
    "applications": [
      "Recuperação de lançadeiras caras após quebras severas de agulha",
      "Eliminação definitiva de quebras crônicas de linha que ocorrem sem motivo aparente",
      "Polimento do furo da chapa de agulha e dos guias de linha metálicos",
      "Manutenção preventiva periódica em oficinas e ateliês profissionais"
    ],
    "commonErrors": [
      "❌ Usar lixa grossa de construção civil (como lixa 80 ou 150) ou lima de metal grossa, estragando para sempre o bico da lançadeira",
      "❌ Lixar a ponta da lançadeira em excesso, diminuindo o comprimento do bico e fazendo a máquina pular pontos",
      "❌ Esquecer de limpar o pó de metal e resíduos de pasta de polimento antes de religar a máquina"
    ],
    "troubleshootingTips": [
      "TESTE DA MEIA-FINA: Para descobrir se há rebarbas invisíveis, passe um pedaço de meia-fina de mulher no bico da lançadeira; se puxar fio, há rebarba!",
      "Use apenas lixas microabrasivas de grão 1.200, 1.500 ou 2.000 (encontradas em lojas de funilaria automotiva fina)",
      "Lixe sempre com movimentos suaves na mesma direção e finalize com polidor de metais (tipo Kaol ou Silvo) em um pano macio"
    ],
    "dicaArtrelados": "Sua linha começou a arrebentar sem parar logo depois que você quebrou uma agulha? Faça o teste da meia-fina de mulher na pontinha da lançadeira! Se a meia puxar fio, passe uma lixinha d'água bem fininha (grão 1.500) com uma gotinha de óleo com muito carinho. O arranhão some e sua máquina volta a bordar macia na hora!",
    "voceSabia": "Nas fábricas da Koban e da Towa no Japão, cada bico de lançadeira passa por mais de 12 etapas de polimento manual com pastas de diamante microscópicas até atingir a precisão de um espelho cirúrgico!",
    "practicalExercise": "Pegue uma agulha velha usada e passe a ponta da unha na haste dela: sinta se está lisa. Depois pegue uma meia-fina e passe delicadamente no furo da sua placa de agulha para aprender na prática a identificar qualquer ponto áspero que possa prender fios!",
    "quickSummary": "Eliminação de rebarbas microscópicas na lançadeira e placa de ponto com lixas ultrafinas e pasta de polimento.",
    "relatedTerms": [
      "Gancho da Lançadeira e Sincronismo Angular",
      "Placa de Agulha / Chapa de Ponto",
      "Quebra Constante de Linha Superior",
      "Mecânica & Ajustes"
    ],
    "tags": [
      "l-065",
      "polimento",
      "lancadeira",
      "rebarba",
      "lixa microabrasiva",
      "quebra de linha",
      "manutencao",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOKS. Rotary Hook Maintenance, Deburring Protocols & Surface Finishing. Osaka, 2022.",
      "ARTRELADOS. Segredos da Mecânica Fina: Teste da Meia-Fina, Polimento de Lançadeiras e Resgate de Chapas de Ponto. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l-066-layout-de-producao-continua-e-organizacao-modular-do-atelie",
    "code": "L-066",
    "term": "Layout de Produção Contínua, Fluxo Enxuto e Ergonomia do Ateliê (Continuous Embroidery Production Layout & Lean Workflow)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Ateliê & Produtividade",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'layout' (arranjo físico espacial) e da filosofia de manufatura enxuta (Lean Manufacturing / Sistema Toyota de Produção) aplicada a estúdios de bordado e costura.",
    "summary": "Organização física inteligente das bancadas, máquinas, linhas, bastidores e área de embalagem em fluxo contínuo em formato de 'U' ou 'L' para dobrar a produtividade.",
    "definition": "O Layout de Produção Contínua e Organização Modular do Ateliê de Bordado (Lean Embroidery Workflow / Cellular Ergonomic Layout / 5S Studio Optimization) é o arranjo físico e ergonômico dos equipamentos, matérias-primas e estações de trabalho de modo a criar um fluxo produtivo contínuo, sem cruzamentos e sem desperdício de tempo e deslocamento físico da bordadeira. Baseado na disposição celular em 'U' (onde as estações seguem a ordem natural: 1. Recepção e Corte do Tecido → 2. Estação de Bastidoramento → 3. Máquinas de Bordar em Operação → 4. Estação de Limpeza e Arremate → 5. Passadoria a Vapor e Embalagem Final), o layout elimina passos desnecessários, reduz a fadiga corporal em até 60% e aumenta a capacidade produtiva diária em mais de 80%.",
    "technicalDetails": "Estações de trabalho com altura ergonômica de 90 cm a 95 cm para trabalho em pé/semissentado. Iluminação de 1.000 lux na área de inspeção. Proximidade máxima de 1,2 metro entre a mesa de bastidoramento e a entrada do bastidor na máquina.",
    "howItWorks": [
      "1. A bordadeira reorganiza seu ateliê saindo de um arranjo caótico para o modelo celular em 'U'.",
      "2. Ao lado esquerdo da porta, fica a mesa de preparação com rolos de entretela e cola spray.",
      "3. No centro, fica a bancada ergonômica de bastidoramento com gabaritos alinhados.",
      "4. À direita da mesa, fica a máquina de bordar: enquanto um bastidor está bordando na máquina, o segundo bastidor já está sendo montado na mesa ao lado.",
      "5. Na saída da máquina, fica a mesa de corte de fios com a lupa LED e tesoura pelicano.",
      "6. Ao lado, a tábua de passar com ferro a vapor e a estante de embalagens plásticas com laços e etiquetas.",
      "7. A peça percorre um caminho reto contínuo do tecido cru até a caixa de presente, sem voltas e sem perda de tempo."
    ],
    "beginnerExplanation": "É o jeito inteligente de arrumar os móveis do seu cantinho de bordado para você produzir o dobro no mesmo tempo e sem cansar as costas! Em vez de ficar andando de um lado para o outro procurando tesoura, fita e entretela, você organiza as mesas em ordem: uma mesa para prender o bastidor, a máquina no meio bordando, uma mesa para limpar os fiapos e a tábua de passar no final. Tudo fica pertinho das suas mãos e o trabalho flui gostoso e rápido!",
    "applications": [
      "Planejamento e organização de ateliês domésticos e pequenas confecções comerciais",
      "Redução de custos operacionais e aumento do faturamento por hora trabalhada",
      "Ergonomia preventiva contra dores na coluna, tendinites e cansaço visual",
      "Padronização de processos produtivos para treinamento de ajudantes e funcionários"
    ],
    "commonErrors": [
      "❌ Deixar a máquina bordar parada esperando a bordadeira cortar a entretela da próxima peça, perdendo até 3 horas de máquina ociosa por dia",
      "❌ Guardar ferramentas essenciais em gavetas trancadas ou caixas fechadas longe da bancada de trabalho",
      "❌ Trabalhar em cadeiras inadequadas ou mesas muito baixas que forçam a coluna lombar e cervical"
    ],
    "troubleshootingTips": [
      "Trabalhe sempre com 2 bastidores do mesmo tamanho: enquanto o bastidor 1 está na máquina bordando, você monta o bastidor 2 na mesa!",
      "Tenha um painel furado (Pegboard) na parede acima da mesa de bastidoramento para pendurar bastidores, réguas e tesouras ao alcance dos olhos",
      "Coloque rodinhas traváveis nas mesas do ateliê para facilitar a limpeza diária e a movimentação rápida"
    ],
    "dicaArtrelados": "A regra de ouro dos ateliês milionários: NUNCA deixe a sua máquina parada esperando você colocar o pano no bastidor! Compre sempre um bastidor extra: enquanto a máquina borda um, você monta o próximo com calma na mesa. A máquina não para nunca e seu faturamento no fim do mês dobra!",
    "voceSabia": "O conceito de 'Produção em Célula em U' foi desenvolvido pelo engenheiro Taiichi Ohno na Toyota nos anos 1950 e é considerado o método de organização de trabalho mais eficiente do mundo moderno!",
    "practicalExercise": "Desenhe em uma folha de papel a planta do seu ateliê hoje e trace as linhas do seu caminho andando entre as tarefas: redesenhe organizando em formato de 'U' e veja como você pode economizar centenas de passos todos os dias!",
    "quickSummary": "Organização física em fluxo contínuo (célula em U) que elimina desperdícios e maximiza a produtividade do ateliê.",
    "relatedTerms": [
      "Ergonomia do Posto de Trabalho",
      "Kit de Emergência, Primeiros Socorros e Ferramental",
      "Bastidor de Bordado",
      "Ateliê & Produtividade"
    ],
    "tags": [
      "l-066",
      "layout",
      "produtividade",
      "fluxo enxuto",
      "atelie",
      "ergonomia",
      "organizacao",
      "lean",
      "artrelados"
    ],
    "bibliographicReferences": [
      "OHNO, T. Toyota Production System: Beyond Large-Scale Production. Tokyo: Diamond Inc., 1978 / New York: Productivity Press, 2021.",
      "ARTRELADOS. O Ateliê Produtivo: Como Organizar seu Espaço, Dobrar sua Produção e Faturar Alto com Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "l-067-lamina-de-corte-de-titanio-e-afiacao-de-facas-automaticas",
    "code": "L-067",
    "term": "Lâmina de Corte de Titânio e Afiação de Facas Automáticas (Titanium-Coated Trimmer Blade & Micro-Honing Sharpening)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim lamina (camada fina de metal cortante) e do grego Titanes (deuses gigantes da força mitológica grega). Metalurgia avançada de ferramentas de corte.",
    "summary": "Lâminas móveis e fixas revestidas de nitreto de titânio (TiN) que garantem cortes limpos de linha por milhões de ciclos sem mastigar.",
    "definition": "A lâmina de corte de titânio e afiação de facas automáticas (Automatic Thread Trimmer Blade) é o conjunto composto pela faca móvel (gancho trambulador) e faca fixa (contra-faca) instaladas sob a chapa de agulha da máquina de bordar. Fabricadas em aço-ferramenta de alto teor de carbono com revestimento superficial em Nitreto de Titânio (TiN - tonalidade dourada), essas lâminas possuem dureza superior a 80 HRC e atrito ultra reduzido, permitindo ceifar fios finos de poliéster, algodão e poliamida instantaneamente sem deixar pontas desfiadas ou mastigar a linha.",
    "technicalDetails": "Aço sinterizado HSS com deposição física de vapor (PVD) de Titânio. Ângulo de bisel de corte: 18° a 22°. Pressão de contato da mola ajustável entre 1,2 N e 2,0 N.",
    "howItWorks": [
      "1. Ao receber o comando de corte (TRIM) da matriz, o solenoide aciona a faca móvel.",
      "2. A faca móvel avança por baixo do tecido, captura os fios da agulha e da bobina com seu gancho.",
      "3. Retrai puxando as duas linhas em direção à faca fixa de titânio.",
      "4. No ponto de encontro, as lâminas realizam o corte por cisalhamento perfeito (efeito tesoura de precisão).",
      "5. A mola retentora segura a ponta da linha da bobina para iniciar o próximo ponto sem escapar.",
      "6. A peça sai com o corte rente, limpo e sem fiapos soltos."
    ],
    "beginnerExplanation": "É a tesourinha automática invisível que fica escondida embaixo da chapa da máquina. Ela é feita de um aço dourado super duro com titânio para cortar a linha num piscar de olhos toda vez que a máquina termina uma cor ou pula para outra parte do desenho, sem deixar fiapos mastigados.",
    "applications": [
      "Substituição de facas gastas que deixam rabichos compridos de linha ou falham o corte",
      "Bordados em alta velocidade com milhares de cortes automáticos por hora",
      "Corte limpo de linhas difíceis como metálicas, poliéster grosso e fios de bordar 3D",
      "Prevenção de nós e embolamento de linha debaixo da chapa no início dos pontos"
    ],
    "commonErrors": [
      "❌ Lixar a lâmina de titânio com lixas manuais grossas, arrancando a camada protetora dourada e estragando o fio de corte",
      "❌ Apertar o parafuso da faca fixa com força excessiva, travando o movimento da faca móvel e queimando o solenoide",
      "❌ Deixar pedaços de entretela e cola acumulados entre as lâminas, impedindo o fechamento completo do corte"
    ],
    "troubleshootingTips": [
      "Se a máquina fizer o movimento de corte mas a linha continuar inteira ('mastigada'), limpe os resíduos com ar seco e confira a pressão da mola",
      "Para afiação de manutenção, use apenas pedra de microafiação de diamante (grana 3000+) em ângulo plano ou substitua o par de lâminas",
      "Passe uma gotinha minúscula de óleo na articulação da faca móvel a cada 15 dias"
    ],
    "dicaArtrelados": "Se a sua máquina começar a deixar fiapos compridos no avesso ou falhar cortes com frequência, não force! Muitas vezes é apenas um fiapinho de linha preso entre as lâminas de corte. Uma limpeza cuidadosa com pincel e uma gotinha de óleo resolvem 90% dos casos!",
    "voceSabia": "O revestimento em Nitreto de Titânio (TiN) aumenta a vida útil da lâmina em até 600% em comparação com lâminas de aço carbono comuns, suportando mais de 500.000 cortes perfeitos.",
    "practicalExercise": "Retire a chapa de agulha da sua máquina e observe o mecanismo da faca fixa e móvel. Gire suavemente o sistema com a mão para ver o momento exato em que a lâmina móvel desliza contra a fixa.",
    "quickSummary": "Lâminas de corte de aço com titânio que garantem cortes de linha rápidos, limpos e duráveis na máquina.",
    "relatedTerms": [
      "Corte Automático de Linha (Auto-Trim)",
      "Higienização e Remoção de Fibras do Conjunto de Corte",
      "Solenoide de Corte",
      "Componentes da Máquina"
    ],
    "tags": [
      "l-067",
      "lamina de titanio",
      "facas de corte",
      "auto-trim",
      "corte de linha",
      "afiacao",
      "componentes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Automatic Thread Trimmer Mechanism and Blade Adjustment Guide. Nagoya, 2023.",
      "BARUDAN. Titanium Coated Knife Systems and Tension Settings. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-068-loop-forming-e-dinamica-de-expansao-da-lacada-na-cava",
    "code": "L-068",
    "term": "Loop Forming e Dinâmica de Expansão da Laçada na Cava (Loop Formation Dynamics & Scarf Clearance Physics)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina e Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês loop (laço, argola formada pelo fio) e do latim formatio (criação estruturada). Princípio físico universal da formação do ponto fixo (Lockstitch ISO 301).",
    "summary": "O fenômeno físico em que o fio superior se abre em formato de laço na cava da agulha para ser capturado pela lançadeira.",
    "definition": "A formação da laçada (Loop Formation) é o processo físico-mecânico que ocorre na fração de segundo em que a agulha atinge o Ponto Morto Inferior (PMI) e inicia a subida de retorno de 1,8 mm a 2,2 mm. O atrito do fio com o tecido e a geometria da cava (scarf) fazem com que a linha superior perca a tensão momentaneamente e se curve para fora, expandindo-se em uma alça perfeita (loop) de aproximadamente 2,5 mm a 3,0 mm de diâmetro, no exato instante e posição em que a ponta afiada da lançadeira rotativa passa para entrelaçá-la com o fio da bobina.",
    "technicalDetails": "Elevação da agulha para formação do laço: 2,0 mm ± 0,2 mm. Espaço livre da ponta do gancho na cava da agulha: 0,05 mm a 0,08 mm. Tensão de fricção do canal da agulha: 15 cN a 25 cN.",
    "howItWorks": [
      "1. A agulha desce com a linha e atravessa o tecido e a entretela até o fundo.",
      "2. Ao chegar no ponto mais baixo, o fio está completamente esticado ao longo da ranhura longa da agulha.",
      "3. O eixo principal sobe a agulha cerca de 2 mm.",
      "4. Como o fio fica retido pelo atrito do tecido, a folga de linha é empurrada para o lado da cava (scarf).",
      "5. Abre-se um laço oval perfeito e estável de linha superior.",
      "6. A ponta da lançadeira passa por dentro desse laço sem tocá-lo com força, levando o fio ao redor da bobina.",
      "7. O ponto de bordado é formado perfeitamente sem falhas ou pulos de ponto."
    ],
    "beginnerExplanation": "É o que acontece embaixo do tecido quando a agulha desce e sobe um pouquinho: a linha se abre como uma argolinha perfeita bem na curvinha da agulha. O ganchinho da lançadeira passa por dentro dessa argolinha e amarra a linha de cima com a linha de baixo.",
    "applications": [
      "Compreensão técnica para regulagem milimétrica do tempo de lançadeira (Timing)",
      "Diagnóstico de falhas de ponto (pulos de ponto) em tecidos elásticos ou muito finos",
      "Escolha correta do tamanho da agulha proporcional à espessura da linha",
      "Ajuste da altura da barra de agulhas para diferentes tipos de fios (poliéster, metálico, algodão)"
    ],
    "commonErrors": [
      "❌ Instalar a agulha com a cava virada para o lado errado (para frente ou para o lado), impedindo a abertura da laçada na frente da lançadeira",
      "❌ Usar linha de má qualidade ou ressecada que não forma laço elástico e quebra por torção",
      "❌ Subir ou descer a barra de agulha fora da medida padrão, fazendo o laço abrir muito acima ou muito abaixo do gancho"
    ],
    "troubleshootingTips": [
      "Sempre verifique se a cava (o rebaixo atrás da agulha) está apontando exatamente para a lançadeira (geralmente virada para trás)",
      "Em tecidos elásticos como suplex e lycra, use agulhas com cava profunda (Deep Scarf / SAN 1) para gerar laçadas maiores",
      "Se a máquina estiver pulando pontos, verifique com uma lupa se a ponta da agulha não está despontada ou torta"
    ],
    "dicaArtrelados": "A laçada perfeita é o coração do bordado! Se a sua máquina começou a pular pontos do nada, a primeira coisa a fazer é trocar a agulha e conferir se ela foi encaixada até o topo do suporte com a cava na posição correta!",
    "voceSabia": "Em 1851, Isaac Singer patenteou o mecanismo de subida com elevação de 2 mm após o fundo para garantir que a laçada de linha abrisse com 100% de estabilidade, revolucionando as máquinas de costura e bordado no mundo inteiro.",
    "practicalExercise": "Pegue uma agulha de bordar na mão e passe um pedaço de linha pelo buraco. Puxe a linha para baixo e empurre-a levemente para cima: veja com seus próprios olhos como a linha se curva e forma uma argolinha perfeita ao lado da cava!",
    "quickSummary": "Fenômeno mecânico em que o fio abre uma argola perfeita na cava da agulha para ser laçado pela lançadeira.",
    "relatedTerms": [
      "Cava da Agulha (Scarf)",
      "Lançadeira Rotativa",
      "Ponto Morto Inferior (PMI)",
      "Barra de Agulha",
      "Mecânica da Máquina e Manutenção"
    ],
    "tags": [
      "l-068",
      "loop forming",
      "lacada",
      "cava da agulha",
      "formacao do ponto",
      "mecanica",
      "sincronismo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. The Physics of Loop Formation and Needle Geometry Standards. Herzogenrath, 2023.",
      "ORGAN NEEDLES. Technical Manual: Scarf Dynamics and Lockstitch Timing. Tóquio, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-069-linha-metalica-ouro-e-prata-regulagens-especiais-de-tensao",
    "code": "L-069",
    "term": "Linha Metálica Ouro e Prata: Regulagens Especiais de Tensão (Gold & Metallic Thread Tension & Slow-Speed Calibration)",
    "letter": "L",
    "level": "Iniciante 🟢",
    "category": "Insumos e Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim metallum (metal precioso, ouro e prata) e linea (fio contínuo). Uso tradicional em paramentos sacros, brasões militares e alta-costura desde a antiguidade.",
    "summary": "Parâmetros práticos de velocidade, tensão suave e agulhas de olho grande para bordar com fios metálicos sem quebras.",
    "definition": "A linha metálica para bordado eletrônico (fios ouro, prata, bronze e holográficos) é um insumo de alto impacto visual composto por uma alma central de filamentos de poliamida ou poliéster envolvida por uma fita microscópica de poliéster metalizado com vapor de alumínio ou verniz dourado. Por não ter elasticidade e ser sensível ao atrito térmico, seu bordado exige procedimentos específicos: uso de agulha especial Metallic/Topstitch nº 80/12 ou 90/14 (com olho 2x maior e ranhura larga), alívio de 40% na tensão superior e redução da velocidade da máquina para 550–650 RPM.",
    "technicalDetails": "Espessura padrão nº 40 (Nm 65/2). Elasticidade < 8%. Requer agulhas com olho alongado e polimento espelhado (ex: Schmetz Metallic ou Groz-Beckert SAN 1).",
    "howItWorks": [
      "1. A bordadeira instala o cone de linha metálica utilizando uma redinha elástica protetora para o fio não desenrolar solto.",
      "2. Passa a linha pelos guias sem dar voltas duplas para reduzir o atrito.",
      "3. Afrouxa o tensor superior até a linha passar suave e com leve resistência.",
      "4. Instala a agulha Metallic nº 80/12 com olho grande.",
      "5. Ajusta a velocidade da máquina para 600 RPM no painel de controle.",
      "6. A máquina executa o bordado com brilho reluzente, sem desfiamentos e sem quebra térmica.",
      "7. A peça ganha acabamento nobre de luxo e sofisticação."
    ],
    "beginnerExplanation": "É aquela linha dourada ou prateada maravilhosa que brilha como joia! Como ela é mais delicada e não estica como a linha comum, o segredo para ela não arrebentar é: usar uma agulha com o buraquinho maior, deixar a linha mais frouxinha nos discos de tensão e diminuir um pouco a velocidade da máquina.",
    "applications": [
      "Monogramas de luxo em toalhas de casamento, bodas de ouro e prata",
      "Brasões militares, paramentos sacros e vestimentas religiosas",
      "Detalhes de coroas, estrelas e arabescos em enxovais infantis de realeza",
      "Bordados comemorativos de Natal e Réveillon em artigos de decoração"
    ],
    "commonErrors": [
      "❌ Bordar com agulha comum 75/11 em velocidade máxima (900 RPM), fazendo o atrito descascar a fita metálica e quebrar a linha a cada 10 segundos",
      "❌ Deixar a tensão superior apertada demais, fazendo a linha metálica enrolar em espiral e embolar na caixa de bobina",
      "❌ Não usar redinha no cone, deixando o fio metálico cair na base do suporte e prender no pino"
    ],
    "troubleshootingTips": [
      "Coloque sempre uma redinha própria para linha no cone de fio metálico para controlar o desenrolar suave",
      "Se o fio estiver descascando, borrife um pouco de silicone líquido para bordado na lateral do cone",
      "Use agulhas específicas com a marcação 'METALLIC' ou 'TOPSTITCH' que possuem o olho revestido e duas vezes maior"
    ],
    "dicaArtrelados": "O bordado com linha metálica tem o maior valor percebido pelo cliente! O segredo de ouro do ateliê Artrelados é a paciência: baixe a velocidade da máquina para 600 RPM, use agulha Metallic 80 e afrouxe o tensor. Seu bordado vai rodar perfeito e brilhar como uma verdadeira joia!",
    "voceSabia": "Na antiguidade, os fios de ouro para vestes de reis e imperadores eram feitos de ouro puro 24k batido em lâminas ultrafinas e enrolados à mão ao redor de fios de seda natural.",
    "practicalExercise": "Pegue um cone de linha metálica dourada. Tente passar a linha por uma agulha comum 75/11 e depois por uma agulha Metallic 80/12. Observe com a lupa a diferença enorme no espaço que o fio tem para deslizar sem raspar!",
    "quickSummary": "Linhas douradas e prateadas de alto brilho que exigem agulha de olho grande, velocidade reduzida e tensão frouxa.",
    "relatedTerms": [
      "Agulha de Titânio (Titanium Needle)",
      "Tensão da Linha Superior",
      "Impregnação de Cera e Parafinação de Linhas Especiais",
      "Insumos e Acessórios"
    ],
    "tags": [
      "l-069",
      "linha metalica",
      "dourado",
      "prata",
      "ouro",
      "brilho",
      "regulagem",
      "insumos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Metallic Embroidery Thread Guide: Technical Solutions and Tensioning. Freiburg, 2023.",
      "GÜTERMANN. Sulky Metallic Technical Application Handbook. Gutach, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-070-linhas-de-grade-e-esquadrejamento-no-software-de-matrizes",
    "code": "L-070",
    "term": "Linhas de Grade e Esquadrejamento no Software de Matrizes (Grid Lines, Snapping & Axis Alignment in Embroidery CAD)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim linea (linha reta) e do francês esquarre / équerre (esquadro geométrico de precisão). Ferramenta básica de desenho técnico assistido por computador (CAD).",
    "summary": "Uso de malhas quadriculadas, guias magnéticas e eixos de referência no software para alinhar e centralizar matrizes com precisão milimétrica.",
    "definition": "As linhas de grade e ferramentas de esquadrejamento (Grid Lines & Snap to Grid) constituem a infraestrutura geométrica virtual presente na tela de edição dos softwares de digitalização de bordado. Permitem ao programador definir espaçamentos métricos customizados (ex: grades de 5 mm ou 10 mm), ativar a atração magnética de nós (snapping), alinhar eixos X e Y de elementos simétricos e verificar o centro exato de rotação do bastidor (ponto 0,0), garantindo que monogramas, molduras e logotipos fiquem perfeitamente alinhados, retos e proporcionais.",
    "technicalDetails": "Resolução de grade configurável de 1 mm a 25 mm. Guias auxiliares com snap magnético de precisão vetorial (tolerância de 0,01 mm). Suporte a grades cartesianas ortogonais e isométricas.",
    "howItWorks": [
      "1. Ao abrir um novo projeto no software de bordado, a programadora ativa a visualização da grade métrica (Grid).",
      "2. Configura a distância dos quadrantes para 5 mm ou 10 mm conforme o tamanho da peça.",
      "3. Puxa linhas-guia das réguas superior e lateral para marcar o centro absoluto e as margens do bordado.",
      "4. Ao desenhar molduras e letras, o recurso 'Snap to Grid' atrai os nós diretamente para as interseções perfeitas.",
      "5. Elementos laterais são espelhados com referência no eixo central Y.",
      "6. A matriz final fica 100% esquadrada, sem linhas tortas e perfeitamente equilibrada."
    ],
    "beginnerExplanation": "É aquela folha de papel quadriculado virtual que fica no fundo da tela do seu computador. Ela serve como uma régua mágica que ajuda você a colocar as letrinhas e os desenhos retinhos, centralizados e do mesmo tamanho, sem deixar nada torto ou caído para o lado.",
    "applications": [
      "Centralização exata de desenhos e textos dentro do campo útil do bastidor",
      "Criação de molduras geométricas, brasões retangulares e faixas simétricas",
      "Alinhamento horizontal perfeito de linhas de nomes em jalecos e uniformes",
      "Verificação rápida de dimensões reais da matriz em milímetros ou centímetros"
    ],
    "commonErrors": [
      "❌ Desenhar matrizes com a grade desligada 'no olho', gerando molduras com lados de comprimentos diferentes e cantos fora de esquadro",
      "❌ Ignorar o ponto zero central (origem 0,0), fazendo o bordado começar descentralizado na máquina",
      "❌ Deixar o snap magnético com sensibilidade muito alta em desenhos orgânicos (como flores e animais), travando as curvas naturais"
    ],
    "troubleshootingTips": [
      "Use as teclas de atalho (geralmente a letra 'G' no teclado) para ligar e desligar a grade rapidamente na tela",
      "Dê um clique duplo na régua para criar uma linha-guia na posição exata desejada em milímetros",
      "Utilize a ferramenta de 'Alinhar pelo Centro Vertical/Horizontal' para alinhar múltiplos objetos de uma só vez"
    ],
    "dicaArtrelados": "A simetria é o que nosso cérebro reconhece como perfeição! Antes de fechar uma matriz de monograma ou brasão, ative a grade e passe uma linha guia pelo centro: se tudo estiver alinhadinho no esquadro, o bordado na toalha vai arrancar elogios de todo mundo!",
    "voceSabia": "Os primeiros programas de matrizes dos anos 1980 funcionavam em mesas digitalizadoras com réguas físicas e lupas com mira laser, onde o digitador clicava ponto a ponto sobre um papel vegetal milimetrado preso na prancheta.",
    "practicalExercise": "Abra seu programa de bordados e aperte a tecla 'G' para exibir a grade. Desenhe um quadrado e utilize a ferramenta de espelhar horizontal para criar um arabesco duplo perfeitamente simétrico com base na linha guia central.",
    "quickSummary": "Malha quadriculada e réguas virtuais que garantem alinhamento, centralização e simetria perfeita na matriz.",
    "relatedTerms": [
      "Software de Digitalização",
      "Ponto Zero e Origem do Bastidor",
      "Junção Perpendicular de Colunas Satin",
      "Programação de Bordado"
    ],
    "tags": [
      "l-070",
      "grade",
      "grid",
      "esquadrejamento",
      "alinhamento",
      "simetria",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Workspace Setup, Grids and Precision Alignment Tools Guide. Sydney, 2023.",
      "PULSE MICROSYSTEMS. Vector Snapping and Geometric Symmetry Manual. Toronto, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-071-limitador-de-curso-e-sensores-de-fim-de-curso-do-pantografo",
    "code": "L-071",
    "term": "Limitador de Curso e Sensores de Fim de Curso do Pantógrafo (Pantógrafo Limit Switches & Soft-Limit Boundary Protection)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim limes (fronteira, limite) e do francês curseur (percurso, trajetória). Sistema de segurança mecatrônico de proteção cinemática em equipamentos CNC.",
    "summary": "Sensores ópticos ou mecânicos nos trilhos X/Y que impedem o pantógrafo de bater no chassi da máquina se o bastidor passar do limite.",
    "definition": "O limitador de curso e sensores de fim de curso (Limit Switches & Frame Boundary Sensors) são dispositivos de segurança eletromecânicos ou optoeletrônicos instalados nas extremidades dos eixos X e Y do pantógrafo. Sua função técnica é monitorar a posição absoluta da mesa móvel e interromper instantaneamente a alimentação dos servomotores caso o operador tente carregar um desenho maior do que a área física da máquina ou mova o bastidor manualmente além dos trilhos, evitando colisão destrutiva do bastidor contra o cabeçote ou quebra de correias sincronizadoras.",
    "technicalDetails": "Sensores ópticos de barreira infravermelha tipo 'U' (interrupção de feixe) ou microchaves mecânicas com contatos normalmente fechados (NF). Integração com o algoritmo de limite virtual (Soft-Limit) do painel DSP.",
    "howItWorks": [
      "1. A máquina é ligada e realiza o ciclo de 'Homing' (busca do ponto zero mecânico).",
      "2. O pantógrafo se desloca suavemente até uma lâmina metálica interromper o feixe óptico do sensor de fim de curso.",
      "3. A placa controladora registra a coordenada limite máxima dos eixos X e Y.",
      "4. Durante a produção, se um comando de matriz tentar mover o bastidor além da margem de segurança, o sistema bloqueia o movimento antes do choque mecânico.",
      "5. O painel exibe o alerta: 'Limite de Bastidor Atingido / Over Frame'.",
      "6. A integridade física da máquina, dos motores e do bastidor fica 100% protegida."
    ],
    "beginnerExplanation": "São os 'sensores de freio de segurança' que ficam nas pontas dos trilhos da máquina. Se você escolher sem querer um bordado grande demais para o tamanho do bastidor, esses sensores avisam o computador da máquina para parar na hora, evitando que o bastidor bata com força de encontro à máquina e quebre tudo.",
    "applications": [
      "Proteção mecânica e eletrônica contra colisões do pantógrafo em alta velocidade",
      "Calibração automática do ponto inicial (Homing) ao ligar a máquina de bordar",
      "Alerta de segurança preventiva no painel quando a matriz ultrapassa a área do bastidor selecionado",
      "Preservação de correias dentadas e drivers de potência dos servomotores"
    ],
    "commonErrors": [
      "❌ Desativar ou burlar o sensor de fim de curso no painel técnico para tentar bordar fora do campo útil da máquina",
      "❌ Deixar poeira e fiapos de entretela cobrirem a fresta do sensor óptico, gerando falsos alarmes de 'Over Limit'",
      "❌ Forçar o pantógrafo com as mãos com a máquina ligada, forçando os batentes mecânicos"
    ],
    "troubleshootingTips": [
      "Se o painel acusar erro de limite sem motivo, limpe as fendas dos sensores ópticos nos trilhos com um pincel macio e ar seco",
      "Sempre realize o teste de contorno (Trace/Border Check) no painel antes de apertar o botão de iniciar o bordado",
      "Certifique-se de que o tamanho do bastidor cadastrado no painel é exatamente o mesmo tamanho do bastidor físico instalado"
    ],
    "dicaArtrelados": "Fazer o teste de traçado (o famoso 'Trace' no painel) antes de iniciar qualquer bordado leva apenas 5 segundos e salva o seu bastidor! A máquina dá uma voltinha ao redor do desenho e mostra se a agulha não vai bater na beirada plástica do bastidor!",
    "voceSabia": "Em máquinas industriais modernas, além dos sensores físicos de metal, existem os chamados 'Soft-Limits' (limites virtuais por software), que calculam o perímetro do desenho e recusam o início do bordado caso falte até mesmo 0,1 mm para a margem de segurança.",
    "practicalExercise": "Selecione uma matriz no painel da sua máquina e aperte a função 'Trace / Checagem de Área'. Observe como o bastidor se movimenta delimitando os quatro cantos máximos do desenho sem ultrapassar as margens.",
    "quickSummary": "Sensores de segurança nos trilhos que impedem batidas mecânicas e travam a máquina se o bordado for grande demais.",
    "relatedTerms": [
      "Pantógrafo CNC",
      "Hardware de Controle DSP e Placa-Mãe",
      "Servomotor de Eixo X e Y",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "l-071",
      "fim de curso",
      "limitador",
      "sensores",
      "pantografo",
      "seguranca",
      "protecao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Frame Boundary Limits and Optical Sensor Calibration Manual. Nagoya, 2023.",
      "BARUDAN. DSP Controller Motion Protection and Limit Switch Circuitry. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-072-lencos-finos-e-tecidos-transparentes-tecnicas-de-bainha-e-bordado",
    "code": "L-072",
    "term": "Lenços Finos e Tecidos Transparentes: Técnicas de Bainha e Bordado (Fine Handkerchief & Sheer Fabric Delicate Embroidery)",
    "letter": "L",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim linteum (lenço de linho nobre) e do francês transparent / sheer (tecido etéreo que deixa passar a luz). Tradição clássica de enxovais de noivas e alfaiataria fina.",
    "summary": "Guia completo para bordar monogramas delicados em cambraia de linho, seda, voil e organza sem enrugar o tecido.",
    "definition": "O bordado em lenços finos e tecidos transparentes (como cambraia de linho puro, seda pura, musselina, batiste, voil e organza) é uma das artes mais refinadas da personalização têxtil, amplamente demandada para presentes de casamento (para noivos, pais e padrinhos), batizados e eventos comemorativos. Exige parâmetros técnicos ultra delicados: uso de entretela hidrossolúvel de toque suave (tipo filme ou tecido solúvel em água) tanto na base quanto no topo, agulhas finíssimas ponta aguda (Sharp) nº 60/8 ou 65/9, linhas finas de poliéster nº 60 e matrizes programadas com densidade leve (0,48 mm a 0,55 mm) para não perfurar nem repuxar o tecido.",
    "technicalDetails": "Agulha recomendada: Schmetz Microtex 60/8 ou 65/9 ponta fina especial. Densidade de ponto: 0,50 mm com underlay em ponto corrido central simples. Linhas: espessura nº 60 (mais fina que a convencional nº 40).",
    "howItWorks": [
      "1. A bordadeira prepara o lenço de cambraia de linho com bainha pronta ou tecido de seda.",
      "2. Coloca uma camada de entretela hidrossolúvel (tipo tecido solúvel) no aro do bastidor.",
      "3. Posiciona o lenço alinhado pelo canto com uma segunda camada leve de hidrossolúvel no topo (montagem sanduíche solúvel).",
      "4. Utiliza linha fina nº 60 e agulha fina 65/9.",
      "5. Borda o monograma com pontos cheios leves e elegantes.",
      "6. Retira o lenço do bastidor e dissolve as entretelas em uma tigela com água morna por 2 minutos.",
      "7. Seca à sombra e passa a ferro pelo avesso sobre uma toalha macia: o bordado fica integrado à fibra com avesso limpo e invisível."
    ],
    "beginnerExplanation": "É o jeito de bordar lencinhos delicados de casamento e tecidos transparentes como seda e organza. Como o tecido é muito fininho e transparente, a gente usa entretela que derrete na água morna em cima e embaixo. Depois de bordar, é só enxaguar que a entretela some todinha e o bordado fica super macio e sem nada duro no avesso!",
    "applications": [
      "Lenços de noiva e noivo com datas e iniciais bordadas para o dia do casamento",
      "Lembranças de batizado e primeira comunhão em linho clássico",
      "Véus de noiva e mantilhas em tule e organza de seda",
      "Guardanapos de coquetel de alta gastronomia e eventos diplomáticos"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável comum de papel, deixando restos brancos aparentes através da transparência do tecido fino",
      "❌ Bordar com agulha grossa (80/12 ou 90/14), abrindo buracos permanentes na trama delicada do linho ou da seda",
      "❌ Programar pontos muito pesados e densos, que transformam o monograma em uma 'placa dura' no cantinho do lenço"
    ],
    "troubleshootingTips": [
      "Use sempre entretela hidrossolúvel que se dissolve totalmente em água sem deixar goma pegajosa",
      "Para monogramas pequenos em cantos de lenço, dimensione as letras entre 15 mm e 25 mm de altura máxima",
      "Passe o lenço a ferro morno pelo lado avesso colocado sobre uma toalha felpuda para o monograma ficar estufadinho e em relevo"
    ],
    "dicaArtrelados": "Lenços de casamento personalizados são peças que emocionam e têm altíssimo valor sentimental e financeiro! Bordar no cantinho do lenço com linha fina, agulha 60 e entretela que dissolve na água entrega uma peça digna de família real!",
    "voceSabia": "A tradição do lenço de noiva bordado ('Something Old, Something New') remonta à nobreza vitoriana do século XIX, onde os lenços passavam de geração em geração como relíquias familiares de casamento.",
    "practicalExercise": "Pegue um pedaço de tecido fino de algodão ou voil. Monte um sanduíche com plástico hidrossolúvel embaixo e em cima e borde uma letra pequena com agulha fina. Lave em água corrente e veja como o bordado fica incrivelmente macio e sem resíduos.",
    "quickSummary": "Técnicas com entretela solúvel em água e agulha fina para bordar lenços e tecidos delicados sem marcas.",
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Agulha Ponta Seta (Sharp Point)",
      "Letras Pequenas (Small Lettering)",
      "Técnicas de Bordado"
    ],
    "tags": [
      "l-072",
      "lencos",
      "linho",
      "seda",
      "tecidos transparentes",
      "hidrossoluvel",
      "casamento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Guia Prático de Bordados Finos para Noivas, Lenços e Tecidos Especiais. São Paulo, 2024.",
      "MADEIRA THREADS. Fine Embroidery on Sheer and Delicate Fabrics. Freiburg, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-073-look-ahead-e-previsao-de-trajetoria-em-controladores-dsp",
    "code": "L-073",
    "term": "Look-Ahead e Previsão de Trajetória em Controladores DSP (Look-Ahead DSP Motion Trajectory Planning)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês look ahead (olhar para a frente, antecipar trajetórias). Algoritmo de controle numérico computadorizado (CNC) aplicado a robótica e servomotores industriais.",
    "summary": "Algoritmo inteligente do computador da máquina que lê os pontos seguintes da matriz para desacelerar em curvas e acelerar em retas.",
    "definition": "O Look-Ahead (Previsão Dinâmica de Trajetória Vetorial) é a funcionalidade computacional avançada executada pelo processador de sinal digital (DSP) da máquina de bordar. O algoritmo analisa em tempo real um buffer de 30 a 100 coordenadas vetoriais futuras da matriz de bordado. Ao detectar mudanças bruscas de ângulo (curvas fechadas, cantos vivos ou pontos minúsculos), o sistema calcula curvas de aceleração e desaceleração suaves (S-Curve Profile), reduzindo a velocidade dos servomotores X/Y milissegundos antes da curva para evitar inércia e vibração mecânica, e acelerando novamente em retas longas.",
    "technicalDetails": "Buffer de planejamento: 64 a 128 blocos de vetores. Taxa de amostragem de controle de loop fechado: 1 kHz a 4 kHz. Minimização do erro de seguimento de contorno (Tracking Error < 0,02 mm).",
    "howItWorks": [
      "1. A máquina lê a matriz de bordado do pendrive ou da memória interna.",
      "2. O processador DSP carrega os próximos 50 pontos na fila de previsão (Look-Ahead buffer).",
      "3. Identifica se haverá uma sequência de pontos retos longos ou curvas intrincadas com mudanças de 90°.",
      "4. Modula a frequência de pulsos PWM enviada aos servomotores dos eixos X e Y.",
      "5. A máquina desacelera de forma suave antes do canto vivo e freia sem dar tranco no bastidor.",
      "6. A qualidade geométrica do bordado é mantida impecável sem perda de passos e com operação silenciosa."
    ],
    "beginnerExplanation": "É como se o computador da máquina dirigisse o bordado igual a um piloto experiente: ele olha a pista lá na frente e, quando vê que vai chegar uma curva bem fechada, tira o pé do acelerador suavemente antes de virar, e acelera de novo na reta. Isso evita que a máquina dê trancos e deixe os contornos tortos.",
    "applications": [
      "Eliminação de vibrações e trancos mecânicos do bastidor em altas velocidades",
      "Execução perfeita de detalhes finos, monogramas pequenos e contornos sem desvio",
      "Aumento da vida útil das correias dentadas, polias e rolamentos do pantógrafo",
      "Manutenção de alta produtividade sem comprometer a precisão dos pontos"
    ],
    "commonErrors": [
      "❌ Utilizar pendrives corrompidos ou lentos que travam a leitura contínua do buffer de Look-Ahead, causando microparadas no bordado",
      "❌ Desativar filtros de aceleração suave em configurações técnicas de fábrica sem autorização",
      "❌ Rodar matrizes mal digitalizadas com milhares de micropontos sobrepostos que sobrecarregam o processamento da máquina"
    ],
    "troubleshootingTips": [
      "Mantenha a memória interna da máquina limpa, apagando arquivos antigos que não estão em uso",
      "Em desenhos com muitos detalhes minúsculos, reduza a velocidade máxima no painel para que o controlador trabalhe folgado",
      "Ao salvar arquivos no software, utilize formatos modernos com compressão vetorial otimizada (como .DST, .PES, .EXP)"
    ],
    "dicaArtrelados": "As máquinas modernas são verdadeiros computadores inteligentes! Graças ao Look-Ahead, você pode deixar sua máquina bordando em alta velocidade com a certeza de que ela vai frear suavemente em cada cantinho delicado para entregar um bordado impecável!",
    "voceSabia": "Os algoritmos de Look-Ahead foram originalmente desenvolvidos para os sistemas de navegação aeroespacial e usinagem CNC de precisão na fabricação de turbinas de aviões a jato.",
    "practicalExercise": "Observe sua máquina bordando um desenho com partes retas compridas e detalhes pequenos com curvas. Escute o som do motor: note como o ruído fica mais suave e a máquina reduz a velocidade automaticamente nas curvinhas delicadas!",
    "quickSummary": "Computador de bordo que antecipa as curvas da matriz, acelerando e freando suavemente para bordados perfeitos.",
    "relatedTerms": [
      "Hardware de Controle DSP e Placa-Mãe",
      "Interpolação Linear e Circular do Pantógrafo",
      "Servomotor de Eixo X e Y",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "l-073",
      "look-ahead",
      "dsp",
      "trajetoria",
      "controle numerico",
      "suavizacao",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. High-Speed Motion Control and DSP Look-Ahead Processing. Nagoya, 2023.",
      "BARUDAN. Servo Drive Dynamics & Path Planning Algorithm Guide. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-074-lote-de-producao-e-rastreabilidade-de-insumos-no-atelie",
    "code": "L-074",
    "term": "Lote de Produção e Rastreabilidade de Insumos no Ateliê (Batch Production Management & Thread/Stabilizer Lot Tracking)",
    "letter": "L",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês lot (porção de mercadorias produzidas juntas) e do latim tractus / rastreabilidade (capacidade de seguir o histórico). Pilar de Gestão da Qualidade ISO 9001 aplicado a confecções.",
    "summary": "Método de registro do número de lote de cones de linha e entretelas para garantir uniformidade de cor e qualidade em grandes encomendas.",
    "definition": "O controle de lotes de produção e rastreabilidade de insumos é a prática de gestão operacional que consiste em registrar o código de lote de tintura (Dye Lot Number) dos cones de linha, rolos de entretela e partidas de tecidos utilizados em cada pedido do ateliê. Como processos industriais de tingimento têxtil podem apresentar variações sutis de matiz (de 2% a 5%) entre diferentes partidas químicas de fábrica, a rastreabilidade evita que peças de uma mesma encomenda corporativa de uniformes ou enxovais apresentem diferenças visíveis de tom de linha.",
    "technicalDetails": "Identificação por código alfanumérico de lote (ex: Linha Poliéster Cor 2144 - Lote nº 88421). Ficha técnica de produção (Ordem de Serviço com amostra física costurada arquivada por 12 meses).",
    "howItWorks": [
      "1. Ao receber uma encomenda grande (ex: 50 camisas polo para uma empresa), a bordadeira calcula o consumo total de linha.",
      "2. Separa cones de linha conferindo se todos possuem o mesmo número de lote de tingimento impresso na etiqueta.",
      "3. Anota o número do lote na ficha da Ordem de Serviço (OS) do pedido.",
      "4. Borda uma peça piloto de teste e arquiva a amostra com a data e as regulagens utilizadas.",
      "5. Executa a produção com total uniformidade cromática entre todas as 50 peças.",
      "6. Quando o cliente solicita uma reposição meses depois, o ateliê consulta a ficha técnica e busca a mesma partida de linha."
    ],
    "beginnerExplanation": "É o hábito simples de anotar o número do lote que vem na etiquetinha do cone de linha e do rolo de entretela. Como a fábrica pode fazer um tom de azul levemente diferente em meses diferentes, conferir o lote garante que todas as camisetas daquele cliente fiquem com a cor 100% idêntica!",
    "applications": [
      "Produções em média e grande escala de uniformes corporativos e escolares",
      "Enxovais completos de hotelaria, pousadas e condomínios de luxo",
      "Reordenações e reposições futuras de peças para clientes fidelizados",
      "Controle de custos, estoque e produtividade do ateliê"
    ],
    "commonErrors": [
      "❌ Misturar cones de linha de lotes diferentes no meio de uma encomenda de 100 peças, descobrindo que metade dos logotipos ficou azul-claro e a outra metade azul-escuro",
      "❌ Jogar fora a etiqueta do fundo do cone de linha ao abrir o pacote",
      "❌ Não manter uma ficha técnica simples com as cores de linha usadas para cada cliente corporativo"
    ],
    "troubleshootingTips": [
      "Cole a etiqueta do lote do cone de linha no verso da ficha de papel do cliente",
      "Ao comprar linhas para grandes encomendas, compre sempre 1 cone a mais da mesma partida de tingimento para reserva de segurança",
      "Guarde retalhos de teste com o nome do cliente e a cor da linha em uma pastinha sanfonada no ateliê"
    ],
    "dicaArtrelados": "A organização é o que separa um ateliê amador de uma empresa profissional e lucrativa! Anotar o lote da linha e a cor certinha do cliente na ficha de pedido faz seu cliente se sentir seguro e encantado com o seu profissionalismo!",
    "voceSabia": "Em indústrias têxteis de grande porte com certificação ISO 9001, cada cone de linha possui um código de barras com QR Code que é escaneado pelo operador antes de entrar no cabeçote da máquina para evitar qualquer erro humano de tonalidade.",
    "practicalExercise": "Olhe no fundo de 3 cones de linha da mesma cor no seu ateliê. Procure a etiqueta adesiva e encontre a inscrição 'Lote / Batch / Lot No'. Veja se eles são do mesmo lote de tingimento!",
    "quickSummary": "Controle de números de lote de linha e entretela para garantir cores e qualidade 100% uniformes nos pedidos.",
    "relatedTerms": [
      "Cartela de Cores de Linhas",
      "Linha de Poliéster 120",
      "Ordem de Cores (Color Sequence)",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "l-074",
      "lote de producao",
      "rastreabilidade",
      "tintura",
      "gestao",
      "uniformes",
      "controle de qualidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Gestão Operacional, Fichas Técnicas e Controle de Qualidade no Ateliê de Bordados. São Paulo, 2024.",
      "ISO 9001:2015. Quality Management Systems: Traceability and Production Control. Genebra, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "l-075-linha-de-bobina-fio-inferior-pre-wound",
    "code": "L-075",
    "term": "Linha de Bobina (Fio Inferior / Bobinas Pré-Enroladas Pre-Wound)",
    "pronunciation": "li-nha de bo-bi-na / pri-waund",
    "level": "Fundamental 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Fios",
    "origin": "Do latim 'linum' (linho, fio para costura) e do francês 'bobine' (cilindro para enrolar fios). Padronizado internacionalmente com a invenção da bobina de papelão descartável (Class L e Class M) por fabricantes têxteis norte-americanos na década de 1970.",
    "summary": "Fio contínuo de poliéster 100% ou filamento fino (geralmente No 60 a No 80) alojado na caixa de bobina que entrelaça a linha superior no verso do bordado.",
    "definition": "A Linha de Bobina (Bobbin Thread / Fio de Canelinha / Pre-Wound Bobbin) é o fio inferior de alta tenacidade e baixo calibre (normalmente filamento de poliéster contínuo 60 wt, 70 wt ou 80 wt) que opera na caixa de bobina sob a chapa de agulha. Sua função físico-mecânica é criar a laçada de travamento com o fio superior no exato terço central do avesso dos pontos cheios, proporcionando um verso macio, sem volume excessivo e com estabilidade dimensional inalterável.",
    "technicalDetails": "Apresenta tensão calibrada de 18 g a 25 g em tensiômetros mecânicos (TOWAs). As bobinas pré-enroladas industriais (Pre-Wound Bobbins) contêm até 40% a mais de metragem do que bobinas enroladas manualmente em máquina de costura, além de tensão perfeitamente uniforme da primeira à última volta.",
    "beginnerExplanation": "É a linha fina (normalmente branca ou preta) que fica escondidinha na parte de baixo da máquina, dentro da caixinha da bobina. Ela 'abraça' a linha colorida de cima por baixo do tecido, deixando o bordado bem preso e com o avesso lisinho e fofo!",
    "howItWorks": [
      "1. A bobina pré-enrolada ou cheia é inserida na caixa de bobina respeitando o sentido de rotação horário ou anti-horário indicado pelo fabricante.",
      "2. O fio passa pela mola de tensão da caixa de bobina e pela guia de saída.",
      "3. A ponta da agulha desce com a linha superior e o bico da lançadeira laça o fio inferior.",
      "4. Ao tracionar, a linha de bobina deve aparecer no verso ocupando 1/3 da largura da coluna de ponto cheio (regra de ouro de tensão 1/3 - 1/3 - 1/3).",
      "5. Os sensores ópticos da máquina monitoram o volume restante de fio e avisam no painel antes da bobina esvaziar totalmente."
    ],
    "applications": [
      "Bordados em geral em máquinas domésticas e industriais",
      "Enxovais de bebê, roupas íntimas e peças em contato direto com a pele (onde o avesso deve ser extra macio)",
      "Bordados em toalhas de banho e artigos com verso aparente (usando bobina da mesma cor da linha superior)",
      "Produções de alta velocidade contínua (800 a 1.200 PPM)"
    ],
    "characteristics": [
      "Filamento contínuo de poliéster 100% de alta tenacidade",
      "Espessura fina (calibre 60/2 ou 80/2)",
      "Disponibilidade em bobinas plásticas, magnéticas ou pré-enroladas com laterais de papelão (cardboard sides)"
    ],
    "commonErrors": [
      "❌ Enrolar linha de costura comum grossa na bobina, criando bolhas, nós e travando a lançadeira.",
      "❌ Enrolar a bobina frouxa manualmente, gerando oscilações severas de tensão no meio do bordado.",
      "❌ Usar linha de bobina branca em tecidos e matrizes pretas sem conferir se a tensão está puxando o fio branco para a frente da peça."
    ],
    "troubleshootingTips": [
      "Se a linha branca da bobina estiver aparecendo na frente do bordado: A linha superior está com tensão muito apertada ou a bobina está muito frouxa (aperte o parafuso da caixa de bobina levemente).",
      "Se a linha superior estiver sendo puxada toda para o avesso: A bobina está muito apertada ou a linha de cima está frouxa.",
      "Para toalhas de rosto e banho onde o verso fica visível: Utilize linha de bobina na mesma cor da linha superior (ex: linha azul em cima e bobina azul embaixo)."
    ],
    "dicaArtrelados": "Economize tempo e dor de cabeça no ateliê usando Bobinas Pré-Enroladas (Pre-Wound)! Elas vêm de fábrica com a tensão perfeita de ponta a ponta e cabem quase o dobro de linha que a bobina que enrolamos na máquina!",
    "voceSabia": "Uma bobina pré-enrolada padrão Classe L possui cerca de 120 metros de fio contínuo, enquanto uma bobina enrolada manualmente pela bordadeira raramente passa de 75 metros por conta do enrolamento menos compactado!",
    "practicalExercise": "Borde uma coluna de teste de ponto cheio de 5 cm com linha superior vermelha e linha de bobina branca. Olhe o avesso: você deve ver uma faixa branca de 1/3 certinha no meio e duas faixas vermelhas de 1/3 em cada lateral!",
    "quickSummary": "Fio inferior fino de poliéster para a caixa de bobina; essencial para a laçada perfeita e equilíbrio de tensão 1/3 no avesso.",
    "recommendedSettings": {
      "threadTension": "18 g a 25 g na caixa de bobina",
      "needleType": "75/11",
      "stabilizer": "Conforme o tecido"
    },
    "relatedTerms": [
      "Tensão da Linha Superior e Inferior",
      "Caixa de Bobina (Bobbin Case)",
      "Lançadeira Rotativa (Rotary Hook)",
      "Regra do Terço Central (1/3 - 1/3 - 1/3)",
      "Linha de Poliéster 120"
    ],
    "tags": [
      "l-075",
      "linha de bobina",
      "canelinha",
      "pre-wound",
      "fio inferior",
      "tensao",
      "avesso",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COATS & CLARK INDUSTRIAL. Embroidery Bobbin Thread Standards & Tension Balancing. Charlotte, 2021.",
      "MADEIRA THREADS. Bobbinfill Polyester Filaments and Pre-wound Performance. Freiburg, 2022.",
      "ARTRELADOS. Guia Prático de Tensão Perfeita e Calibração de Bobinas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-26"
  },
  {
    "id": "l-076-lese-laise-broderie-anglaise-bordado-em-tecido-vazado-com-ilhoses",
    "code": "L-076",
    "term": "Lese / Laise: Broderie Anglaise e Tecidos Vazados com Ilhoses (Embroidered Eyelet & Cutwork Lace Fabric)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do francês laise (tecido de largura definida / bordado furadinho) e broderie anglaise (bordado inglês popularizado no século XIX).",
    "summary": "Tecido nobre de puro algodão com furinhos e ilhoses bordados em relevo festonê, clássico em roupas infantis de luxo, vestidos românticos e moda praia de alto padrão.",
    "definition": "Lese ou Laise (Broderie Anglaise e Tecidos com Ilhoses Bordados) é o tecido clássico de algodão leve a médio caracterizado por vazados circulares ou florais (ilhoses / eyelets) contornados por densos cordões de ponto cheio ou festonê. No bordado computadorizado, a produção de laise envolve técnicas de richelieu, pontos de corte (cutwork) ou punção perfuradora mecânica (boring needle), estabilizada por entretelas hidrossolúveis pesadas que garantem ilhoses perfeitamente limpos e sem fiapos soltos.",
    "technicalDetails": "Tecidos 100% cambraia ou tricoline de algodão (gramatura de 90 a 140 g/m²). Agulhas normais 75/11 SES ou agulhas perfuradoras de corte (Boring Needles). Entretela hidrossolúvel de 80 g/m² ou entretela rasgável de algodão macio.",
    "construction": [
      "Base de cambraia ou percal 100% algodão pré-encolhido",
      "Entretela hidrossolúvel de suporte (Water Soluble Film 80 micras ou entretela de tecido solúvel)",
      "Linha de algodão mercerizado 50wt ou poliéster fosco branco/off-white",
      "Matriz com sequência de costura guia, corte/perfuração e acabamento em ponto cheio circular",
      "Agulha perfuradora de ilhós (Boring Needle) ou tesoura de ponta curva para cutwork"
    ],
    "howItWorks": [
      "1. O tecido de cambraia de algodão é montado no bastidor junto com entretela hidrossolúvel.",
      "2. A máquina borda uma linha de reforço circular (running stitch underlay) no local de cada furo.",
      "3. A agulha perfuradora abre os buraquinhos ou o bordadeiro realiza o corte manual com tesourinha.",
      "4. A máquina cobre as bordas dos furos com pontos cheios radiais muito densos (eyelet stitch).",
      "5. Os motivos florais ao redor dos furos são preenchidos com pontos tatami ou relevos acetinados.",
      "6. A peça é lavada em água morna para dissolver 100% da entretela hidrossolúvel.",
      "7. O tecido revela vazados nítidos, geométricos e com caimento leve e romântico."
    ],
    "mainTypes": [
      "Laise Floral Romântica (Com pequenas flores vazadas e folhas em relevo)",
      "Laise Geométrica de Ilhoses (Com círculos e losangos simétricos de estilo contemporâneo)",
      "Barrados de Laise em Festonê (Bordas rendadas recortáveis para bainhas de vestidos e toalhas)"
    ],
    "characteristics": [
      "Frescor, alta respirabilidade e conforto térmico incomparável em dias quentes",
      "Visual delicado, atemporal e nobre associado a coleções de grifes de alto padrão",
      "Excelente aceitação em roupas de batizado, vestidos de noiva rústicos e moda bebê",
      "Bordados que valorizam tecidos de algodão simples com alto valor agregado"
    ],
    "limitations": [
      "Não utilizar tecidos sintéticos que desfiem facilmente ao serem perfurados",
      "Exige estabilização perfeita para que os ilhoses fiquem circulares e não ovais",
      "O corte manual dos furos exige tesouras ultrafinas e mão firme para não romper os pontos"
    ],
    "numberingSystem": [
      "Diâmetro dos Ilhoses: 2,0 mm a 6,0 mm",
      "Gramatura do Tecido: 100 a 130 g/m²",
      "Largura do Cordão de Acabamento: 1,8 mm a 2,5 mm"
    ],
    "advantages": [
      "✔ Peça com altíssima procura no mercado de enxovais de luxo e moda praia",
      "✔ Excelente durabilidade após a lavagem por ser confeccionada em puro algodão",
      "✔ Criação de estampas e texturas vazadas exclusivas impossíveis na costura reta"
    ],
    "commonErrors": [
      "❌ Cortar o tecido antes da costura de reforço, fazendo o buraco desfiar durante o bordado",
      "❌ Usar entretela rasgável dura que deixa resíduos de papel presos dentro dos furinhos",
      "❌ Deixar a tensão da linha frouxa, criando laçadas irregulares ao redor dos ilhoses"
    ],
    "voceSabia": "A Laise (ou Broderie Anglaise) tornou-se febre mundial no século XIX quando a Rainha Vitória da Inglaterra começou a usar vestidos inteiros de algodão branco com furinhos bordados, simbolizando pureza e elegância campestre aristocrática!",
    "curiosidadeTecnica": "Em máquinas industriais multicabeçote, a ferramenta *Borer* (faca perfuradora) é uma agulha especial sem ponta e com 4 lâminas afiadas nas laterais que empurra os fios da trama para os lados sem cortar as fibras, criando furos reforçados que nunca desfiam.",
    "dicaArtrelados": "Ao bordar peças no estilo Laise, utilize linha branca fosca de algodão tanto na agulha quanto na bobina: o acabamento fica tão suave e homogêneo que o bordado parece ter nascido na tecelagem do próprio tecido!",
    "comparisonTable": {
      "headers": [
        "Tecido Vazado",
        "Método de Abertura",
        "Toque Têxtil",
        "Uso Predominante"
      ],
      "rows": [
        [
          "Laise de Algodão",
          "Furos perfurados + Ponto Cheio",
          "Fresco, macio e estruturado",
          "Moda infantil e vestidos de verão"
        ],
        [
          "Renda Guipir / FSL",
          "100% Linhas sem tecido base",
          "Rico e tridimensional",
          "Golas, decotes e aplicações nobres"
        ],
        [
          "Tule Bordado",
          "Pontos sobre malha de rede",
          "Transparente e fluido",
          "Vestidos de festa e véus de noiva"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou Agulha Perfuradora Borer",
      "stabilizer": "Entretela Hidrossolúvel de Tecido Solúvel 80 g/m²",
      "threadTension": "110 a 120 gf (superior) e 22 gf (bobina)",
      "density": "0.38 mm no cordão radial com sobredensidade nos nós"
    },
    "applications": [
      "Vestidos de batizado, pagãos, saídas de maternidade e bodies de bebê",
      "Vestidos românticos de verão, saias longas e saídas de praia nobres",
      "Fronhas, lençóis de berço e toalhas de lavabo com barrados ingleses",
      "Camisas femininas com mangas bufantes e golas trabalhadas em laise"
    ],
    "troubleshootingTips": [
      "Se os furos ficarem com formato oval, aumente a compensação de repuxo no sentido da trama do tecido",
      "Utilize tesoura tipo garça com lâmina curva de microprecisão para abrir os furinhos caso não tenha agulha borer",
      "Enxágue a peça em água corrente morna até remover completamente todo o plástico solúvel"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bordado Richelieu",
      "Entretela Hidrossolúvel",
      "Ponto Festonê",
      "Agulha Perfuradora (Borer)"
    ],
    "tags": [
      "l-076",
      "lese",
      "laise",
      "broderie anglaise",
      "ilhoses",
      "cutwork",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CLUCAS, Joy. The Technique of White Work and Broderie Anglaise. London: Batsford, 2021.",
      "PARRISH, Gail. Automated Eyelet and Cutwork Machine Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tricoline branco de 20x20 cm. Coloque entretela solúvel no verso. Digitalize 4 círculos de 5 mm com costura de contorno simples, corte o miolo com a tesourinha e cubra com ponto cheio de 2 mm de largura. Lave em água morna e veja surgir uma autêntica laise artesanal!",
    "quickSummary": "Tecido clássico de algodão com furinhos e ilhoses bordados de toque romântico e fresco.",
    "beginnerExplanation": "A Laise é aquele tecido furadinho clássico de vestidos brancos de verão e roupas de bebê. A máquina faz costuras firmes ao redor de cada furinho, deixando a roupa linda, fresquinha e super sofisticada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-077-lurex-e-fios-de-efeito-cintilante-metalico",
    "code": "L-077",
    "term": "Lurex & Fios de Efeito Cintilante Metálico (Lurex & Metallic Sparkle Embroidery Threads)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino.",
    "origin": "Marca registrada pela Lurex Company nos anos 1940, derivada do inglês lure (atração / brilho sedutor).",
    "summary": "Fios de bordar compostos por filme de poliéster com deposição de alumínio e resinas protetoras coloridas para brilho radiante e cintilância festiva.",
    "definition": "Lurex & Fios Cintilantes (Metallic Filament Threads) são linhas de bordar eletrônico de alta luminosidade constituídas por uma fita microscópica de poliéster metalizado com alumínio vaporizado a vácuo, envolvida em espiral ao redor de uma alma de poliamida ou raiom. Proporcionam reflexos de pedraria, ouro e glitter sem a rigidez dos fios metálicos maciços, exigindo velocidade moderada, agulhas com canaleta larga e tensão aliviada para evitar o desfiamento da película reflexiva.",
    "technicalDetails": "Título No. 40 (cerca de 135 dtex). Composição de 60% filme de poliéster metalizado e 40% alma sintética. Resistência à tração de 850 cN e ponto de fusão a 250°C.",
    "construction": [
      "Carretel de fio metálico Lurex No. 40 com enrolamento suave",
      "Redinha elástica de proteção para carretel (Thread Net)",
      "Agulha especial 80/12 Metallic ou Titanium com olho oval alongado",
      "Base de tecido com entretela macia e compensação de repuxo de 0,30 mm",
      "Silicone líquido atóxico aplicado na guia de linha para lubrificação"
    ],
    "howItWorks": [
      "1. A linha Lurex é envolvida na redinha de proteção para evitar desenrolamento excessivo.",
      "2. A linha passa pelas guias com trajeto desimpedido e ângulo de entrada suave no tensor.",
      "3. A tensão superior da máquina é reduzida em 20% em relação à linha normal de poliéster.",
      "4. A máquina borda em velocidade constante de 600 PPM para evitar aquecimento por atrito.",
      "5. A agulha Metallic abre a trama do tecido sem raspar a fita de alumínio do fio.",
      "6. A laçada é formada com firmeza e brilho homogêneo na superfície.",
      "7. A peça ganha um reflexo brilhante e luxuoso que não descasca nas lavagens normais."
    ],
    "mainTypes": [
      "Lurex Dourado e Prateado Clássico (Ouro real, ouro rico, prata pura e platina)",
      "Lurex Furta-Cor e Holográfico (Com reflexos multicoloridos de prisma de arco-íris)",
      "Lurex Metálico Tingido (Vermelho rubi, azul safira, verde esmeralda e ônix negro)"
    ],
    "characteristics": [
      "Brilho cintilante incomparável com efeito de joia e pedraria",
      "Toque mais flexível e agradável na roupa em comparação aos fios metálicos antigos",
      "Resistência superior à oxidação e ao escurecimento pelo suor",
      "Excelente impacto visual em logotipos comemorativos e temas de Natal e festas"
    ],
    "limitations": [
      "Não suporta velocidades industriais extremas acima de 850 PPM sem quebra de fio",
      "Não deve ser lavado com alvejantes à base de cloro para não desbotar o alumínio",
      "Exige passar a ferro sempre pelo avesso com pano de proteção e temperatura morna"
    ],
    "numberingSystem": [
      "Espessura Padrão: No. 40 (40wt)",
      "Tensão Recomendada: 85 a 95 gf",
      "Velocidade Ideal: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Transforma qualquer matriz simples em um produto nobre de alto valor comercial",
      "✔ Ampla variedade de tonalidades para combinar perfeitamente com tecidos de festa",
      "✔ Agrega sofisticação imediata em monogramas, brasões e brasões escolares"
    ],
    "commonErrors": [
      "❌ Usar agulha comum com olho pequeno que desfia e encrespa a linha metálica",
      "❌ Deixar a tensão muito apertada, fazendo a linha arrebentar a cada 100 pontos",
      "❌ Deixar o carretel solto sem redinha, fazendo o fio escorregar e prender na base do pino"
    ],
    "voceSabia": "A primeira roupa feita com fios Lurex foi um vestido de gala desenhado em Paris em 1953; na época, o brilho era tão impressionante que a imprensa chamou o tecido de 'o fio de estrelas'!",
    "curiosidadeTecnica": "O revestimento metálico dos fios de Lurex de alta tecnologia é aplicado através de vaporização atômica em câmara de vácuo a 1.200°C, criando uma camada de alumínio com apenas 0,02 micras de espessura (500 vezes mais fina que um fio de cabelo humano).",
    "dicaArtrelados": "Ao bordar com fios metálicos ou Lurex, coloque um pingo de silicone líquido para máquinas no feltro do porta-fios ou na redinha do carretel: a linha desliza macia como manteiga e não arrebenta nunca mais!",
    "comparisonTable": {
      "headers": [
        "Tipo de Fio",
        "Composição",
        "Brilho",
        "Velocidade Recomendada"
      ],
      "rows": [
        [
          "Lurex / Fio Metálico",
          "Filme Poliéster + Alumínio",
          "Metálico Cintilante Intenso",
          "550 a 650 PPM"
        ],
        [
          "Poliéster Trilobal",
          "100% Poliéster Brilhante",
          "Acetinado Sedoso",
          "800 a 1.000 PPM"
        ],
        [
          "Raiom Viscose",
          "100% Celulose Natural",
          "Sedoso Profundo",
          "750 a 850 PPM"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 Metallic ou 80/12 Titanium",
      "stabilizer": "Entretela Rasgável Macia ou Recorte conforme o tecido",
      "threadTension": "85 a 95 gf (tensão aliviada)",
      "density": "0.42 mm a 0.45 mm (densidade 10% mais aberta que o normal)"
    },
    "applications": [
      "Bordados de Natal, temas de Ano Novo, estrelas e sinos comemorativos",
      "Brasões de formatura, monogramas de casamento e vestidos de noiva",
      "Fantasias de carnaval de luxo, roupas de palco e figurinos de dança",
      "Emblemas militares de honra, faixas de miss e estolas religiosas"
    ],
    "troubleshootingTips": [
      "Se a linha metálica começar a desfiar na agulha, troque imediatamente a agulha por uma Metallic nova",
      "Abra a densidade dos pontos cheios no software em 10% para evitar acúmulo excessivo de fios metálicos",
      "Utilize suporte de linha vertical posicionado a 30 cm de distância da máquina para desenrolamento suave"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Agulha Metallic",
      "Tensão de Linha",
      "Fios Metálicos",
      "Karat Gold Thread"
    ],
    "tags": [
      "l-077",
      "lurex",
      "fios metalicos",
      "brilho",
      "linhas cintilantes",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEMMON, Robert. Metallic and Specialty Threads in Machine Embroidery. London, 2021.",
      "PARRISH, Gail. High-Luster Metallic Thread Digitizing and Machine Setup. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um tecido escuro. Coloque um carretel de Lurex dourado com redinha de proteção, agulha 80/12 Metallic e reduza a velocidade para 600 PPM. Borde uma estrela de 5 cm com densidade 0,42 mm. Observe o brilho radiante e sem quebras de linha!",
    "quickSummary": "Linha brilhante com filme de poliéster metalizado para efeitos cintilantes e luxuosos em roupas de festa.",
    "beginnerExplanation": "O Lurex é aquela linha brilhante que parece ouro e prata de verdade. A gente borda em velocidade um pouco mais calma e com uma agulha de buraquinho maior para a linha deslizar fácil e deixar tudo brilhando como uma joia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-078-lancadeira-rotativa-magnetica-e-sistema-de-eixo-flutuante",
    "code": "L-078",
    "term": "Lançadeira Rotativa Magnética & Sistema de Eixo Flutuante (Magnetic Rotary Hook & Floating Core Bobbin Case)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim lancea (arma pontiaguda de arremesso) e do grego magnes (ímã natural). Tecnologia moderna desenvolvida no Japão e Alemanha.",
    "summary": "Mecanismo rotativo de alta precisão com suspensão magnética para captura da laçada da linha superior com atrito quase nulo e ruído ultra-reduzido.",
    "definition": "Lançadeira Rotativa Magnética (Magnetic Suspended Rotary Hook System) é a evolução mecânica do sistema de formação de ponto em máquinas de bordar industriais, na qual a caixa de bobina e o cesto da lançadeira são estabilizados por campos magnéticos permanentes de neodímio. Este sistema elimina a necessidade de molas de pressão metálicas convencionais, reduzindo o aquecimento por fricção em 60%, estabilizando a tensão da bobina mesmo em velocidades superiores a 1.000 PPM e impedindo o giro falso (*backlash*) quando a máquina corta a linha.",
    "technicalDetails": "Rotação sincronizada na proporção 2:1 em relação ao eixo principal (gira 2 vezes a cada descida da agulha). Folga entre a agulha e o bico da lançadeira calibrada entre 0,05 mm e 0,10 mm. Fabricada em liga de aço-titânio temperado.",
    "construction": [
      "Corpo da lançadeira rotativa de precisão com bico temperado a laser",
      "Anel magnético de neodímio embutido na base do cesto",
      "Caixa de bobina com base ferrosa polida e mola tensora micrométrica",
      "Eixo condutor com sistema de lubrificação por micro-capilaridade",
      "Gabarito de calibração de folga de 0,05 mm para ajuste de sincronismo"
    ],
    "howItWorks": [
      "1. A agulha desce ao ponto morto inferior e sobe cerca de 1,8 mm a 2,2 mm.",
      "2. A subida da agulha cria a laçada fofa de linha superior atrás da canaleta.",
      "3. O bico da lançadeira rotativa passa a 0,05 mm da agulha e entra exatamente dentro da laçada.",
      "4. O cesto flutuante suspenso por magnetismo permite que o fio passe ao redor da bobina sem atrito mecânico.",
      "5. A mola magnética impede que a bobina continue girando por inércia quando a máquina para.",
      "6. A linha de cima puxa a linha da bobina e o estica-fio aperta o nó no centro exato do tecido.",
      "7. A máquina produz pontos com tensão 100% constante mesmo durante paradas e arranques bruscos."
    ],
    "mainTypes": [
      "Lançadeira Rotativa Magnética Standard (Tamanho padrão de bobina estilo L para camisas e vestuário)",
      "Lançadeira Magnética Jumbo / Estilo M (Com capacidade 100% maior de linha de bobina para colchas e bonés)",
      "Lançadeira com Revestimento Cerâmico DLC (Diamond-Like Carbon para operação contínua 24h sem superaquecimento)"
    ],
    "characteristics": [
      "Operação ultrassilenciosa e livre de vibrações mecânicas",
      "Eliminação quase total de quebras de linha por giro solto da bobina",
      "Tensão de bobina perfeitamente constante do início ao fim do carretel",
      "Vida útil do mecanismo 3 vezes superior às lançadeiras de atrito convencionais"
    ],
    "limitations": [
      "Custo de reposição superior aos modelos mecânicos comuns de fricção",
      "Exige limpeza periódica de fiapos com ar comprimido para não acumular pó entre os ímãs",
      "Deve-se evitar o uso de solventes químicos agressivos que possam danificar as resinas magnéticas"
    ],
    "numberingSystem": [
      "Folga Agulha-Lançadeira: 0,05 mm a 0,10 mm",
      "Altura do Ponto de Captura: 1,8 mm a 2,2 mm acima do ponto morto inferior",
      "Taxa de Rotação: 2:1 (Dupla rotação por ponto)"
    ],
    "advantages": [
      "✔ Reduz drasticamente paradas de máquina causadas por linha da bobina embolada",
      "✔ Melhora a qualidade visual dos pontos cheios em letras minúsculas",
      "✔ Economia de tempo com menos trocas de bobina e menos retrabalho"
    ],
    "commonErrors": [
      "❌ Bater a agulha na ponta da lançadeira por falta de alinhamento do bastidor",
      "❌ Deixar acúmulo de poeira e fiapos de linha no anel magnético",
      "❌ Usar caixas de bobina de plástico sem alma ferrosa em sistemas magnéticos"
    ],
    "voceSabia": "A lançadeira rotativa foi inventada originalmente em 1851 por Allen B. Wilson, mas foi apenas com a introdução de ímãs de neodímio nos anos 2000 que as máquinas de bordar conseguiram ultrapassar a barreira dos 1.200 pontos por minuto sem quebrar a linha da bobina!",
    "curiosidadeTecnica": "Em uma máquina operando a 1.000 PPM, a lançadeira rotativa gira a 2.000 rotações por minuto; nessa velocidade, o bico da lançadeira passa pela agulha mais de 33 vezes por segundo com uma precisão de fração de milímetro.",
    "dicaArtrelados": "Ao trocar a agulha da sua máquina, certifique-se de que a parte chanfrada (a cavidade atrás da agulha) fique rigorosamente voltada para o bico da lançadeira: é esse milímetro de cavidade que permite a passagem livre da lançadeira sem bater e sem entortar a ponta!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Lançadeira Magnética Moderna",
        "Lançadeira Tradicional com Mola",
        "Lançadeira Oscilante Caseira"
      ],
      "rows": [
        [
          "Velocidade Máxima",
          "1.200 a 1.500 PPM",
          "850 a 1.000 PPM",
          "600 a 700 PPM"
        ],
        [
          "Estabilidade de Tensão",
          "100% Constante (Ímã Neodímio)",
          "Variável com desgaste da mola",
          "Oscilante (ponto irregular)"
        ],
        [
          "Nível de Ruído",
          "Extremamente Baixo",
          "Moderado",
          "Alto (estalos contínuos)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "800 - 1.200 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 Industrial",
      "stabilizer": "Adequado ao tecido em produção",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina magnética)",
      "density": "Compatível com qualquer matriz digitalizada"
    },
    "applications": [
      "Máquinas industriais multicabeçote de alta produtividade para confecção",
      "Bordados de bonés estruturados com rotação pesada",
      "Bordados de letras minúsculas e monogramas de alta definição",
      "Produção ininterrupta de uniformes profissionais e artigos de luxo"
    ],
    "troubleshootingTips": [
      "Se a máquina começar a pular pontos, verifique com uma lupa se o bico da lançadeira não está amassado por batida de agulha",
      "Passe uma lixa d'água 2000 micropulidora no bico da lançadeira caso haja qualquer rebarba microscópica",
      "Aplique uma gota de óleo branco para máquinas finas a cada 4 horas de trabalho contínuo"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Caixa de Bobina",
      "Sincronismo Agulha-Lançadeira (Hook Timing)",
      "Formação do Ponto (Loop Formation)",
      "Manutenção Preventiva"
    ],
    "tags": [
      "l-078",
      "lancadeira rotativa",
      "sistema magnetico",
      "mecanica de maquinas",
      "hook timing",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KOBAYASHI, Kenji. Rotary Hook Mechanics and Industrial Sewing Systems. Tokyo, 2021.",
      "PARRISH, Gail. High-Speed Embroidery Machine Maintenance and Hook Timing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra a chapa de agulha da sua máquina. Gire o volante manualmente devagar e observe o momento exato em que a agulha sobe 2 mm e o bico pontiagudo da lançadeira passa pegando a laçada da linha. Entender esse balé mecânico é o segredo dos mestres do bordado!",
    "quickSummary": "Mecanismo rotativo de alta precisão com suporte magnético para laçamento perfeito e silencioso da linha.",
    "beginnerExplanation": "A lançadeira é aquela pecinha redonda de aço que fica embaixo da chapa da máquina rodando sem parar. Ela tem uma pontinha afiada que pesca a linha da agulha e dá a volta na bobina para dar o nó do bordado!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-079-linho-puro-belga-e-irlandes-no-bordado-de-luxo",
    "code": "L-079",
    "term": "Linho Puro Belga e Irlandês no Bordado de Luxo (Belgian & Irish Pure Linen Embroidery)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim linum (planta do linho cultivada há mais de 8.000 anos). As regiões de Flandres (Bélgica) e Belfast (Irlanda) são os centros mundiais de tecelagem nobre de linho.",
    "summary": "O mais nobre dos tecidos naturais de fibra vegetal, caracterizado por fios nobres de textura elegante, altíssima durabilidade e suporte ideal para monogramas de enxoval e camisaria.",
    "definition": "Linho Puro Belga e Irlandês (Pure Masters of Linen Fabric) é o substrato têxtil de elite obtido a partir dos filamentos longos da planta do linho (*Linum usitatissimum*), famoso pelo toque fresco, brilho natural suave e rusticidade sofisticada. No bordado computadorizado, requer digitalização de precisão com underlays leves e compensação de repuxo moderada (0,30 a 0,35 mm) para acompanhar a rigidez estrutural das fibras sem deformar o desenho nem criar rugas ao redor dos pontos.",
    "technicalDetails": "Composição 100% linho puro lavado ou cambraia de linho (gramatura de 140 a 280 g/m²). Fibra vegetal de celulose cristalina com absorção de umidade de até 20% sem parecer úmido. Trama com contagem de 40 a 80 fios por polegada.",
    "construction": [
      "Tecido de puro linho previamente lavado e passado a ferro úmido",
      "Entretela rasgável de algodão macio (Cotton Soft 50 g/m²)",
      "Linha de algodão mercerizado 50wt, poliéster fosco ou seda pura",
      "Matriz com underlays lineares suaves e densidade equilibrada de 0,40 mm",
      "Agulha 75/11 SES de ponta bola fina para penetrar entre os fios sem quebrar as fibras"
    ],
    "howItWorks": [
      "1. O linho é umedecido e passado a ferro quente para alinhar as tramas antes do corte.",
      "2. A peça é posicionada no bastidor com entretela rasgável de algodão no verso.",
      "3. A máquina borda uma costura de alinhamento prévio para assentar a área.",
      "4. Monogramas e ramos de alfaiataria são bordados com pontos cheios e tatamis elegantes.",
      "5. A tensão de linha equilibrada garante que o linho não enrugue nas bordas dos motivos.",
      "6. A entretela é rasgada suavemente no avesso preservando o toque macio do linho.",
      "7. A peça é passada a ferro pelo avesso com vapor, revelando um acabamento digno de realeza."
    ],
    "mainTypes": [
      "Linho Belga de Alta Gramatura (220 a 280 g/m² para toalhas de mesa, guardanapos e almofadas de luxo)",
      "Cambraia de Linho Irlandês Leve (120 a 160 g/m² para camisas clássicas, lenços de bolso e batas)",
      "Linho Misto com Algodão / Linho Rústico (Para peças casuais com toque despojado e menor amarrotamento)"
    ],
    "characteristics": [
      "Nobreza inconfundível com beleza que melhora a cada lavagem",
      "Hipoalergênico, antibacteriano e termorregulador natural",
      "Suporte perfeito para monogramas clássicos, brasões familiares e bordados botânicos",
      "Altíssima resistência ao desgaste físico e tração mecânica"
    ],
    "limitations": [
      "Amarrota com facilidade natural, o que faz parte do seu charme característico",
      "Não deve ser bordado com matrizes excessivamente densas e pesadas para não enrugar",
      "Exige pré-lavagem obrigatória devido ao encolhimento natural de 3% a 5% no primeiro contato com água"
    ],
    "numberingSystem": [
      "Gramatura Padrão: 160 a 240 g/m²",
      "Densidade de Ponto: 0,38 mm a 0,42 mm",
      "Compensação de Repuxo: 0,30 mm a 0,35 mm"
    ],
    "advantages": [
      "✔ Produto de altíssimo valor de mercado procurado por clientes de alto poder aquisitivo",
      "✔ Peças de enxoval que duram décadas e passam de geração em geração",
      "✔ Fácil de enquadrar no bastidor devido à estabilidade natural da trama"
    ],
    "commonErrors": [
      "❌ Bordar no linho novo sem pré-lavagem: a peça encolhe ao lavar e enruga todo o bordado",
      "❌ Usar densidades maciças que picotam as fibras rígidas do linho",
      "❌ Puxar a entretela com força bruta, deformando os fios da trama do linho"
    ],
    "voceSabia": "Múmias egípcias de faraós de 4.000 anos atrás foram encontradas envoltas em tecidos de linho puro com bordados dourados intactos até os dias de hoje, comprovando que o linho é o tecido mais resistente da história humana!",
    "curiosidadeTecnica": "As fibras de linho tornam-se 20% mais resistentes quando estão molhadas, ao contrário do algodão e da lã, que enfraquecem na água; por isso, toalhas e lençóis de linho bordados suportam centenas de lavagens sem se desgastar.",
    "dicaArtrelados": "Ao passar peças de linho bordadas a ferro, coloque uma toalha felpuda macia sobre a tábua de passar e passe a peça com o bordado virado para baixo: os pontos afundam na toalha e ganham um relevo maravilhoso sem serem amassados pelo ferro!",
    "comparisonTable": {
      "headers": [
        "Propriedade",
        "Puro Linho Belga",
        "Tricoline de Algodão",
        "Poliéster Sintético"
      ],
      "rows": [
        [
          "Origem da Fibra",
          "Caule da planta do Linho",
          "Fruto da planta do Algodão",
          "Derivado de petróleo"
        ],
        [
          "Durabilidade",
          "Dura décadas (Fica melhor lavando)",
          "Boa (Desgasta com o tempo)",
          "Alta (Porém cria bolinhas)"
        ],
        [
          "Sofisticação Visual",
          "Máxima / Aristocrática",
          "Comum / Casual",
          "Comercial / Sintético"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve ou 80/12 Microtex",
      "stabilizer": "Entretela Rasgável Macia de Algodão 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com underlays lineares moderados"
    },
    "applications": [
      "Guardanapos de linho, jogos americanos e toalhas de mesa de jantar de gala",
      "Monogramas de camisa de linho masculina, bolsos e punhos elegantes",
      "Fronhas de travesseiro de enxoval de casamento e jogos de cama de nobreza",
      "Almofadas de linho rústico para decoração de interiores e casas de praia"
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido, adicione um underlay em zigue-zague leve no software para ancorar a trama",
      "Passe o linho ainda levemente úmido com ferro a vapor bem quente",
      "Utilize linhas foscas de algodão ou poliéster semibrilho para manter o visual clássico do linho"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Monogramas & Letreiros",
      "Compensação de Repuxo",
      "Entretela Rasgável",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "l-079",
      "linho",
      "linho puro",
      "linho belga",
      "monogramas",
      "enxovais de luxo",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HEINRICH, Linda. Linen: From Flax Seed to Woven Cloth. Atglen: Schiffer, 2021.",
      "PARRISH, Gail. Luxury Linen Machine Embroidery and Monogramming. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um guardanapo de linho puro lavado. Coloque entretela rasgável macia no verso. Digitalize uma inicial clássica em ponto cheio com contorno acetinado e underlay suave. Borde com linha branca ou crua. Passe a ferro pelo avesso sobre uma toalha: sinta o requinte incomparável do linho!",
    "quickSummary": "Tecido nobre de fibra vegetal milenar, perfeito para monogramas de enxovais de gala e camisaria fina.",
    "beginnerExplanation": "O linho é aquele tecido chique e natural que deixa qualquer almofada, guardanapo ou camisa com cara de casa de novela. A máquina borda letras e desenhos lindos nele com toda a facilidade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-080-la-merina-e-bordados-em-malharia-e-trico-pesado",
    "code": "L-080",
    "term": "Lã Merina & Bordados em Malharia e Tricô Pesado (Merino Wool & Chunky Knit Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da raça de ovelhas Merino originárias da Península Ibérica e aperfeiçoadas na Austrália e Nova Zelândia.",
    "summary": "Fibra animal nobre ultrafina e elástica para suéteres, gorros e cardigãs de tricô que exigem estabilização flutuante e película solúvel de topo.",
    "definition": "Lã Merina & Bordados em Tricô (Merino Wool Knitwear Embroidery) é a técnica de bordar sobre malhas abertas e peças felpudas de lã animal caracterizadas por fibras onduladas microscópicas (17 a 22 micras). Pela sua alta elasticidade e superfície fofa com relevo irregular, o bordado eletrônico exige estabilização sanduíche (entretela de recorte flexível no verso e filme hidrossolúvel no topo) para impedir que os pontos afundem nas malhas e para que a peça não deforme no bastidor.",
    "technicalDetails": "Diâmetro da fibra de lã de 18 a 21,5 micras. Alta elasticidade natural (estica até 30% sem romper). Gramatura de malharia de 200 a 450 g/m². Agulha 75/11 SES de ponta bola arredondada.",
    "construction": [
      "Peça de lã merina ou malha de tricô estruturada",
      "Entretela de recorte especial para malhas (No-Show Mesh / PolyMesh 50 g/m²)",
      "Película plástica hidrossolúvel de topo (Water Soluble Film 35 micras)",
      "Linhas de bordar de poliéster 40wt macio ou fios de lã acrílica de bordar",
      "Técnica de fixação por flutuação com spray adesivo temporário no bastidor"
    ],
    "howItWorks": [
      "1. A entretela de recorte é colocada sozinha no bastidor bem esticada como um tambor.",
      "2. Aplica-se spray adesivo temporário sobre a entretela.",
      "3. A peça de lã é posicionada suavemente por cima (técnica de flutuação) sem esticar a malha.",
      "4. Coloca-se a película hidrossolúvel sobre a lã para conter os pelos e felpas.",
      "5. A máquina borda primeiro uma grade de underlay em tatami aberto para criar uma base sólida.",
      "6. Em seguida, borda os elementos decorativos com densidade equilibrada.",
      "7. A película de topo é retirada e os resíduos são dissolvidos com vapor, mantendo o toque super fofo da lã."
    ],
    "mainTypes": [
      "Suéteres e Cardigãs Finos de Lã Merina (Malharia fechada para logotipos e monogramas de peito)",
      "Gorros e Cachecóis de Tricô Grosso (Malharia aberta canelada para brasões e patchs aplicados)",
      "Mantas de Lã Infantil (Para enxovais de inverno macios e quentinhos)"
    ],
    "characteristics": [
      "Maciez extrema que não pinica e não irrita a pele",
      "Isolamento térmico superior mantendo o corpo aquecido no inverno",
      "Bordados em relevo que parecem flutuar sobre a malha de tricô",
      "Altíssimo valor percebido em roupas de inverno e moda esportiva de montanha"
    ],
    "limitations": [
      "Nunca prender a lã diretamente no aro do bastidor para não esmagar os fios de tricô (marcas permanentes)",
      "Evitar pontos extremamente curtos (< 1,5 mm) que podem cortar as fibras elásticas da lã",
      "A lavagem das peças deve ser manual ou no ciclo delicado com água fria"
    ],
    "numberingSystem": [
      "Espessura da Fibra: 18 a 22 micras",
      "Filme de Topo: 35 a 40 micras",
      "Densidade Recomendada: 0,40 mm a 0,44 mm"
    ],
    "advantages": [
      "✔ Peças de alto valor agregado com excelente margem de lucro no outono/inverno",
      "✔ Bordados perfeitos e nítidos mesmo em superfícies super felpudas",
      "✔ Preservação da elasticidade natural da roupa sem repuxar"
    ],
    "commonErrors": [
      "❌ Esquecer o plástico solúvel por cima: os pontos somem dentro dos pelos da lã",
      "❌ Prender a lã no bastidor e esticar a malha, deixando o bordado enrugado ao soltar",
      "❌ Usar entretela rasgável dura que se desfaz e deforma nas lavagens seguintes"
    ],
    "voceSabia": "As ovelhas da raça Merino possuem a lã mais macia do planeta, sendo capazes de produzir fibras tão finas que um único quilo de lã merina pode ser esticado em um fio de mais de 100 quilômetros de comprimento!",
    "curiosidadeTecnica": "A lã merina possui uma estrutura molecular em mola helicoidal (queratina) que absorve até 35% do seu próprio peso em vapor de água sem parecer molhada, o que faz com que a tensão da linha precise ser regulada ligeiramente mais frouxa para acomodar a expansão térmica da fibra.",
    "dicaArtrelados": "Ao bordar gorros de lã e suéteres de tricô, nunca aperte o aro do bastidor na peça: prenda apenas a entretela no bastidor e flutue a lã com adesivo temporário e plástico solúvel por cima: a malha fica 100% perfeita e sem nenhuma marca de aro!",
    "comparisonTable": {
      "headers": [
        "Tecido de Inverno",
        "Método de Bastidor",
        "Suporte Superior",
        "Entretela Indicada"
      ],
      "rows": [
        [
          "Lã Merina / Tricô",
          "Flutuação com adesivo",
          "Plástico Hidrossolúvel 35 micras",
          "Entretela de Recorte Malha (PolyMesh)"
        ],
        [
          "Moletom Flanelado",
          "Enquadramento tradicional",
          "Plástico Solúvel fino",
          "Entretela Rasgável Macia"
        ],
        [
          "Soft / Fleece",
          "Flutuação ou Bastidor Magnético",
          "Plástico Hidrossolúvel 40 micras",
          "Entretela de Recorte Média"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES Ponta Bola ou 80/12 Ball Point",
      "stabilizer": "Entretela PolyMesh de Recorte + Filme Solúvel no Topo",
      "threadTension": "100 a 110 gf (superior suave) e 20 gf (bobina)",
      "density": "0.42 mm com Underlay Tatami aberto duplo"
    },
    "applications": [
      "Suéteres de lã, cardigãs e casacos de frio de grife",
      "Gorros de tricô, boinas francesas e toucas esportivas de inverno",
      "Cachecóis de lã nobre e xales aconchegantes",
      "Mantas de bebê de tricô para dias frios e berço"
    ],
    "troubleshootingTips": [
      "Se os pontos afundarem na malha, aumente a densidade do underlay tatami sob o desenho no software",
      "Dissolva os restos de plástico de topo aplicando vapor de ferro a 5 cm de distância da lã",
      "Recorte as sobras da entretela PolyMesh no verso deixando uma margem redonda de 5 mm"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Técnica de Flutuação no Bastidor",
      "Película Hidrossolúvel",
      "Entretela de Recorte",
      "Ponto Bola (Ball Point Needle)"
    ],
    "tags": [
      "l-080",
      "la merina",
      "trico",
      "sueter",
      "roupas de inverno",
      "flutuacao",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "D'ALESSANDRO, Stephanie. Knitwear Embroidery and Elastic Fabrics Stabilization. Melbourne, 2021.",
      "PARRISH, Gail. Machine Embroidery on Heavy Knits and Fine Woolens. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um gorro de tricô ou pedaço de malha de lã. Prenda entretela de recorte no bastidor e borrife cola temporária. Apoie a lã em cima sem puxar e coloque um pedaço de plástico solúvel por cima. Borde um floco de neve de 4 cm. Veja como os pontos ficam nítidos e saltados!",
    "quickSummary": "Técnica especializada para bordar em suéteres e malhas de lã felpudas com filme solúvel e flutuação.",
    "beginnerExplanation": "Bordar em suéter de lã e toucas de tricô é fácil quando usamos o truque do plástico transparente por cima: ele não deixa a linha afundar no meio dos pelinhos da lã, fazendo o desenho ficar bem nítido e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-081-laser-cutting-bridge-corte-a-laser-acoplado-a-maquina-de-bordar",
    "code": "L-081",
    "term": "Laser Cutting & Bridge: Corte a Laser Acoplado à Máquina de Bordar (Laser Bridge & In-Hoop Laser Cutting)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Automação & Tecnologia",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do acrônimo inglês LASER (Light Amplification by Stimulated Emission of Radiation) e bridge (ponte rolante industrial).",
    "summary": "Sistema automatizado de corte por feixe óptico a laser montado sobre a máquina de bordar para recorte milimétrico de apliques, vazados e tecidos multicamadas diretamente no bastidor.",
    "definition": "Laser Bridge & In-Hoop Laser Cutting (Sistema de Corte a Laser em Ponte para Bordado) é a tecnologia industrial avançada que integra um cabeçote de corte a laser de CO2 galvanométrico montado sobre um trilho suspenso (ponte) alinhado aos bastidores de máquinas de bordar multicabeçote. O feixe a laser executa cortes vetoriais com velocidade de até 1.500 mm/s diretamente sobre os tecidos montados nos aros, permitindo a produção instantânea de apliques recortados, gravações em couro (*kiss-cutting*), perfurações de ilhoses e bordados vazados sem necessidade de tesouras manuais.",
    "technicalDetails": "Tubo de laser de CO2 com potência de 30W a 100W e comprimento de onda de 10.6 micras. Precisão de posicionamento de ± 0,05 mm com foco de lente de 1,5 a 2,5 polegadas e velocidade de corte de até 2.000 mm/s.",
    "construction": [
      "Ponte móvel suspensa com motorização linear de alta aceleração",
      "Cabeçote óptico galvanométrico com espelhos de berílio refrigerados",
      "Software de CAD/CAM integrado com sincronismo de comandos G-Code / DST",
      "Sistema de exaustão industrial de fumos e fumaça com filtro HEPA de carvão ativado",
      "Sensor de foco automático e ponteiro laser vermelho de alinhamento"
    ],
    "howItWorks": [
      "1. A máquina de bordar posiciona os bastidores sob o cabeçote laser.",
      "2. O laser corta os pedaços de tecido de aplique (sarja, feltro, couro) com bordas seladas termicamente.",
      "3. Os cabeçotes de bordado entram em ação e fixam o aplique com ponto zigue-zague ou cheio.",
      "4. O laser pode retornar para fazer cortes de relevo superficiais (*kiss-cut*) em camadas sobrepostas.",
      "5. A máquina borda os detalhes finais de texto e acabamentos acetinados.",
      "6. O sistema de exaustão remove toda a fumaça instantaneamente sem manchar o tecido.",
      "7. A produção atinge uma agilidade 500% superior ao processo de recorte manual com tesoura."
    ],
    "mainTypes": [
      "Ponte Laser Longa (Laser Bridge que atende de 2 a 12 máquinas industriais simultâneas)",
      "Laser Individual por Cabeçote (Mini-laser de fibra ou diodo montado ao lado de cada agulha)",
      "Sistema de Gravação Superficial / Desgaste (Para efeitos de vintage e desgastado em jeans e couro)"
    ],
    "characteristics": [
      "Velocidade incomparável no recorte de apliques de camisetas e jaquetas esportivas",
      "Selagem térmica instantânea das bordas de tecidos sintéticos que impede que desfiem",
      "Precisão microscópica em cortes complexos impossíveis de fazer com tesouras manuais",
      "Redução drástica de mão de obra e eliminação total de erros de corte manual"
    ],
    "limitations": [
      "Alto investimento inicial em equipamentos e infraestrutura de exaustão industrial",
      "Exige calibração rigorosa de potência para não queimar o tecido de fundo nem a entretela",
      "Não deve ser utilizado com materiais que emitam gases tóxicos como PVC / Vinil comum"
    ],
    "numberingSystem": [
      "Potência do Tubo Laser: 30W a 100W CO2",
      "Velocidade de Corte Vetorial: 500 a 2.000 mm/s",
      "Precisão Óptica: ± 0,05 mm"
    ],
    "advantages": [
      "✔ Produtividade massiva para pedidos industriais de uniformes e jaquetas universitárias",
      "✔ Acabamento com bordas perfeitamente seladas e sem fiapos soltos",
      "✔ Possibilidade de criar efeitos visuais 3D multicamadas de altíssimo valor de mercado"
    ],
    "commonErrors": [
      "❌ Calibrar potência em excesso, queimando e amarelando as bordas do tecido branco",
      "❌ Trabalhar com os espelhos ópticos sujos, reduzindo a força do feixe de corte",
      "❌ Falha de sincronismo de coordenadas entre o software de bordado e o software do laser"
    ],
    "voceSabia": "A tecnologia de ponte laser para bordado foi desenvolvida na Itália nos anos 1990 para atender às grandes fábricas de jaquetas de beisebol e futebol americano dos Estados Unidos, que precisavam recortar milhares de letras de feltro por hora!",
    "curiosidadeTecnica": "O corte a laser em tecidos sintéticos como poliéster e nylon funde as pontas das fibras a mais de 250°C em milissegundos, criando uma micro-solda térmica invisível que impede que a borda do aplique se desfie mesmo após 100 lavagens industriais.",
    "dicaArtrelados": "Mesmo em ateliês menores que não possuem ponte laser, você pode usar uma máquina de corte a laser de bancada para pré-cortar todos os seus apliques de feltro ou sarja com gabarito milimétrico antes de levar ao bastidor: você economiza horas de tesourinha e o bordado fica perfeito!",
    "comparisonTable": {
      "headers": [
        "Processo de Recorte de Aplique",
        "Tempo por Peça",
        "Acabamento da Borda",
        "Custo de Equipamento"
      ],
      "rows": [
        [
          "Ponte Laser Integrada",
          "2 a 5 segundos",
          "Selada a laser / Sem fiapos",
          "Alto / Industrial"
        ],
        [
          "Pré-corte a Laser de Mesa",
          "15 segundos",
          "Selada e precisa",
          "Médio / Acessível"
        ],
        [
          "Recorte Manual com Tesoura",
          "2 a 4 minutos",
          "Sujeito a desvios manuais",
          "Mínimo (Tesoura)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Sincronizado com 850 - 1.000 PPM no bordado",
      "needleType": "80/12 SES para fixação de apliques",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "115 gf (superior) e 24 gf (bobina)",
      "density": "Ponto de cordão estreito de 1,5 a 2,0 mm de largura"
    },
    "applications": [
      "Uniformes de futebol, basquete, beisebol e jaquetas universitárias (Letterman Jackets)",
      "Bonés com apliques de couro gravados a laser e costurados",
      "Moda feminina com recortes vazados e sobreposições de tecidos",
      "Emblemas termocolantes industriais e insígnias militares"
    ],
    "troubleshootingTips": [
      "Se a borda do tecido ficar com manchas amarelas de fumaça, aumente a vazão de ar do bico soprador auxiliar",
      "Limpe as lentes de foco e os espelhos galvanométricos semanalmente com álcool isopropílico e lenço óptico",
      "Faça um teste de potência em um retalho antes de iniciar a produção de cada lote de tecido novo"
    ],
    "relatedTerms": [
      "Automação & Tecnologia",
      "Aplique no Bastidor",
      "Bordado Richelieu",
      "Mecânica & Manutenção",
      "Software de Digitalização"
    ],
    "tags": [
      "l-081",
      "corte a laser",
      "laser bridge",
      "apliques",
      "automacao",
      "tecnologia industrial",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ROSSI, Marco. Laser Cutting Systems in Industrial Textile and Embroidery. Milan, 2021.",
      "PARRISH, Gail. Automated Laser-Appliqué and Multi-Layer Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie um aplique de letra universitária de 10 cm. Se tiver acesso a laser, pré-corte a sarja a laser; caso contrário, use um gabarito impresso com tesoura afiada. Posicione no bastidor sobre a linha guia da máquina e borde o acabamento de ponto cheio estreito. Compare a perfeição da borda!",
    "quickSummary": "Sistema óptico automatizado que corta tecidos e apliques no bastidor com feixe de laser ultrarrápido.",
    "beginnerExplanation": "O corte a laser no bordado é como ter uma tesoura mágica invisível feita de luz. O laser recorta o tecido do aplique em 2 segundos sem queimar e sem deixar nenhum fiapo solto, deixando a máquina bordar tudo rapidinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-082-layout-de-matriz-e-composicao-espacial-no-software",
    "code": "L-082",
    "term": "Layout de Matriz & Composição Espacial no Software (Embroidery Design Layout & Spatial Composition)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês layout (disposição / arranjo gráfico) e do latim compositio (união harmoniosa de elementos).",
    "summary": "Planejamento gráfico e estrutural dos elementos de uma matriz, respeitando proporções visuais, centros de gravidade, eixos de simetria e áreas limites do bastidor.",
    "definition": "Layout de Matriz & Composição Espacial (Embroidery Layout & Graphic Hierarchy) é a disciplina de digitalização que estuda a organização estética e técnica dos elementos visuais (textos, arabescos, brasões, figuras e fundos) dentro da área útil do bastidor. Envolve o cálculo de equilíbrio de massas, fluxo de leitura visual, hierarquia de espessuras de pontos, espaçamento entre letras (*kerning* ótico) e orientação dos ângulos de preenchimento para criar harmonia plástica e evitar deformações no tecido.",
    "technicalDetails": "Margem de segurança perimetral mínima de 10 mm em relação ao aro interno do bastidor. Razão áurea (1:1,618) e regra dos terços aplicadas ao posicionamento dos pontos focais. Resolução de tela de 1:1 para inspeção de proporção.",
    "construction": [
      "Software de digitalização profissional (Wilcom, Embird, Bernina, Pe-Design)",
      "Gabarito digital do bastidor calibrado em escala 1:1 na tela",
      "Linhas guia de grade milimétrica e eixos X e Y de centro exato",
      "Paleta de cores calibrada com linhas de catálogo real (Pantone / Madeira / Isacord)",
      "Visualizador de densidade e simulador de costura tridimensional (TrueView / 3D Stitch)"
    ],
    "howItWorks": [
      "1. Define-se o tamanho exato do bastidor e a área útil máxima com margem de segurança de 10 mm.",
      "2. Importa-se o desenho ou logotipo e posiciona-se o elemento focal principal no centro de interesse visual.",
      "3. Os textos são distribuídos com espaçamento proporcional e alinhamento equilibrado.",
      "4. Arabescos e elementos decorativos secundários são balanceados simetricamente ao redor do centro.",
      "5. Os ângulos de ponto são orientados para criar contraste de luz entre as diferentes partes da matriz.",
      "6. A ordem de costura é programada do centro para as bordas e do fundo para o primeiro plano.",
      "7. A simulação 3D é inspecionada para verificar o equilíbrio visual e a clareza da mensagem."
    ],
    "mainTypes": [
      "Layout Centralizado Simétrico (Brasões, medalhões de toalhas e monogramas clássicos)",
      "Layout Dinâmico Assimétrico (Logotipos esportivos, grafismos modernos e florais orgânicos)",
      "Layout de Barrado Contínuo (Padrões repetitivos e frisos lineares para lençóis e caminhos de mesa)"
    ],
    "characteristics": [
      "Harmonia visual imediata que agrada aos olhos do cliente",
      "Leitura clara e nítida de nomes, marcas e telefones mesmo a distância",
      "Estabilidade mecânica no tecido graças à distribuição equilibrada das densidades",
      "Aspecto profissional que diferencia o ateliê de matrizes amadoras e desordenadas"
    ],
    "limitations": [
      "Nunca encostar elementos bordados a menos de 8 mm da borda do bastidor para evitar colisão do calcador",
      "Evitar excesso de elementos visuais comprimidos em áreas pequenas (< 5 cm)",
      "Textos com menos de 4,5 mm de altura perdem legibilidade no bordado físico"
    ],
    "numberingSystem": [
      "Margem de Segurança do Bastidor: Mínimo 10 mm",
      "Altura Mínima de Texto Padrão: 5,0 mm",
      "Espaçamento Ótico entre Letras: 15% a 25% da largura da letra"
    ],
    "advantages": [
      "✔ Matrizes muito mais bonitas, equilibradas e fáceis de bordar",
      "✔ Menor risco de deformações do tecido por repuxamento assimétrico",
      "✔ Valorização estética que permite cobrar preços mais altos por projetos exclusivos"
    ],
    "commonErrors": [
      "❌ Colocar texto muito colado nos desenhos sem espaço de respiro visual",
      "❌ Desenhar elementos fora do centro do bastidor, gerando torque e repuxamento unilateral",
      "❌ Usar muitas fontes com estilos diferentes na mesma matriz, criando poluição visual"
    ],
    "voceSabia": "A regra de composição clássica dos monogramas de casamento manda que a inicial do casal ou da noiva fique no centro com tamanho 30% maior que as outras iniciais, simbolizando o ponto de união e equilíbrio da família!",
    "curiosidadeTecnica": "O cérebro humano percebe o centro visual de um retângulo cerca de 3% a 5% acima do seu centro geométrico matemático; por isso, posicionar o coração de uma matriz ligeiramente acima do centro perfeito cria uma sensação de leveza e elegância muito superior.",
    "dicaArtrelados": "Ao montar o layout de uma toalha ou camisa no software, ative a ferramenta de visualização do bastidor em tamanho real (100% Zoom): afaste-se 1 metro da tela do computador e aperte os olhos. Se o desenho continuar bonito e legível, seu layout está perfeito!",
    "comparisonTable": {
      "headers": [
        "Aspecto de Layout",
        "Matriz Profissional Equilibrada",
        "Matriz Amadora Desordenada"
      ],
      "rows": [
        [
          "Margens do Bastidor",
          "Respiro seguro de 10 a 15 mm",
          "Elementos colados nas bordas do aro"
        ],
        [
          "Hierarquia de Textos",
          "Nome principal destacado e dados secundários menores",
          "Tudo do mesmo tamanho sem destaque"
        ],
        [
          "Ordem de Costura",
          "Do centro para fora / Lógica estruturada",
          "Pula de um lado para o outro aleatoriamente"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES de uso geral",
      "stabilizer": "Compatível com a peça final",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com variações de ângulo entre camadas"
    },
    "applications": [
      "Digitalização de logotipos corporativos, uniformes de empresas e crachás bordados",
      "Brasões de formatura, monogramas de noiva e toalhas de lavabo personalizadas",
      "Bordados temáticos infantis com animais, nomes e arabescos harmônicos",
      "Quadros decorativos em bastidores de madeira para decoração de interiores"
    ],
    "troubleshootingTips": [
      "Se o texto parecer apertado, aumente o valor de 'Kerning' ou espaçamento entre caracteres no software",
      "Utilize linhas guia diagonais no software para verificar se os pesos dos desenhos estão simétricos",
      "Agrupe elementos relacionados para poder redimensioná-los mantendo as proporções originais"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ordem de Costura (Stitch Sequencing)",
      "Ângulo de Ponto (Stitch Angle)",
      "Monogramas & Letreiros",
      "Compensação de Repuxo"
    ],
    "tags": [
      "l-082",
      "layout",
      "composicao espacial",
      "design de matriz",
      "software de digitalizacao",
      "hierarquia visual",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LIDWELL, William. Universal Principles of Design and Visual Hierarchy. Beverly, 2021.",
      "PARRISH, Gail. Graphic Composition and Spatial Layout in Embroidery Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu software de matrizes. Crie um brasão com uma letra central grande e dois ramos de louro laterais. Alinhe os eixos no centro X e Y. Ajuste o texto do nome embaixo com 15% de espaçamento entre letras. Veja como a simetria transforma o bordado em uma obra de arte!",
    "quickSummary": "Organização harmônica de textos, figuras e arabescos no software para criar matrizes equilibradas e elegantes.",
    "beginnerExplanation": "O layout é o jeito que a gente arruma o desenho e as letrinhas na tela do computador antes de bordar: colocando cada coisa no seu devido lugar, com espaço para respirar, para o bordado ficar lindo e fácil de ler!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-083-loop-stitch-ponto-de-lacada-e-textura-felpuda-3d",
    "code": "L-083",
    "term": "Loop Stitch: Ponto de Laçada e Textura Felpuda 3D (Loop Stitch & Terry Cloth Textured Embroidery)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do inglês loop (alça / laçada / anel de linha) e stitch (ponto de costura).",
    "summary": "Ponto decorativo programado com laçadas de linha soltas no topo ou no avesso para criar texturas tridimensionais de toalha felpuda, miolos de flores e efeito pelúcia.",
    "definition": "Loop Stitch (Ponto de Laçada e Textura Felpuda Tridimensional) é a técnica de bordado computadorizado na qual a máquina é programada com sequências especiais de pontos que deixam alças ou laçadas contínuas de linha salientes na superfície, imitando o tecido atoalhado (*terry cloth*) ou o ponto russo tradicional (*punch needle*). Pode ser executado através de programação de ponto de franja no software com tensão aliviada ou por calcadores e guias especiais de laçada, criando relevos táteis fofinhos e expressivos.",
    "technicalDetails": "Comprimento das laçadas regulável de 2,0 mm a 6,0 mm. Densidade linear de 0,8 mm a 1,2 mm entre fileiras de laçadas. Utilização de linhas macias de algodão 30wt ou poliéster semibrilho com tensão superior aliviada.",
    "construction": [
      "Base de tecido firme (sarja, linho, moletom ou lona de algodão)",
      "Entretela de recorte resistente (Heavy Cutaway 80 g/m²)",
      "Linhas macias de algodão fosco ou lã acrílica para efeito volumoso",
      "Matriz com programação de pontos de laçada ancorados por micro-travas",
      "Película hidrossolúvel de topo para manter as laçadas com altura homogênea"
    ],
    "howItWorks": [
      "1. O tecido é fixado no bastidor com entretela de recorte no verso e filme solúvel no topo.",
      "2. A matriz gera uma linha base de travamento com ponto corrido duplo.",
      "3. A máquina avança e recua rapidamente, deixando uma laçada de linha projetada para cima.",
      "4. Um micro-ponto de ancoragem de 0,5 mm trava o pé da laçada no tecido para que ela não se desfaça.",
      "5. O processo se repete linha por linha, preenchendo a área com centenas de laçadas densas.",
      "6. A película solúvel é removida com água morna ou vapor.",
      "7. A área bordada ganha uma textura felpuda e aveludada com toque fofo irresistível."
    ],
    "mainTypes": [
      "Loop Stitch Atoalhado (Imita textura de toalhas de banho felpudas para bichinhos infantis)",
      "Loop Stitch Floral (Para miolos de girassóis, margaridas e texturas de musgo vegetal)",
      "Loop Stitch em Alto Relevo 3D (Laçadas longas de 5 mm para crinas de cavalos e pelos de animais)"
    ],
    "characteristics": [
      "Sensação tátil tridimensional única que convida ao toque das mãos",
      "Visual lúdico e muito atraente em peças infantis, almofadas e moda jovem",
      "Economia de pontos em relação ao ponto cheio maciço para cobrir grandes áreas",
      "Excelente combinação com pontos tatami e pontos de contorno acetinados"
    ],
    "limitations": [
      "Evitar em peças de bebê muito pequenas que possam prender nos dedinhos ou botões",
      "Exige pontos de arremate muito bem travados para que as laçadas não sejam puxadas",
      "A lavagem das peças deve ser em saquinho protetor para roupas delicadas"
    ],
    "numberingSystem": [
      "Altura das Laçadas: 2,0 mm a 5,0 mm",
      "Espaçamento entre Fileiras: 1,0 mm a 1,5 mm",
      "Densidade da Trava de Base: 0,35 mm"
    ],
    "advantages": [
      "✔ Criação de peças com diferencial tátil e estético exclusivo no mercado",
      "✔ Agrega muito valor a almofadas, jaquetas jeans e produtos de decoração",
      "✔ Rápido de bordar em comparação com relevos tradicionais de espuma EVA"
    ],
    "commonErrors": [
      "❌ Não programar nós de arremate reforçados, fazendo as laçadas se desfazerem ao puxar um fio",
      "❌ Usar linha sintética muito lisa e escorregadia que perde o formato da laçada",
      "❌ Passar ferro quente diretamente sobre as laçadas, amassando o relevo 3D para sempre"
    ],
    "voceSabia": "A textura de laçada é a mesma utilizada há séculos no famoso 'Ponto Russo' manual; com o avanço dos softwares de bordado computadorizado, agora as máquinas domésticas e industriais conseguem reproduzir essa técnica em segundos com precisão matemática!",
    "curiosidadeTecnica": "Para criar laçadas perfeitamente uniformes na máquina de bordar comum sem calcadores especiais, os digitalizadores programam um ponto largo com retorno imediato sobre o mesmo orifício e ajustam a tensão da bobina ligeiramente mais firme, forçando a linha de cima a formar a alça na face superior.",
    "dicaArtrelados": "Ao finalizar um bordado com pontos de laçada, passe suavemente uma escovinha de dente macia ou um pente de bebê sobre as laçadinhas: elas se abrem e se ajeitam, deixando o relevo incrivelmente fofo e homogêneo!",
    "comparisonTable": {
      "headers": [
        "Técnica de Relevo",
        "Método de Criação",
        "Toque Têxtil",
        "Durabilidade na Lavagem"
      ],
      "rows": [
        [
          "Loop Stitch (Laçada)",
          "Pontos com alças de linha programadas",
          "Felpudo e macio (toalha)",
          "Alta (se bem travado)"
        ],
        [
          "Bordado 3D com EVA",
          "Espuma emborrachada sob os pontos",
          "Firme e escultural",
          "Média (sensível a calor)"
        ],
        [
          "Chenille Tradicional",
          "Fios grossos de lã em laçada contínua",
          "Aveludado denso",
          "Alta"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "80/12 Topstitch ou 75/11 SES",
      "stabilizer": "Entretela de Recorte Média 60 g/m² + Película Hidrossolúvel",
      "threadTension": "95 a 105 gf (superior suave) e 24 gf (bobina firme)",
      "density": "Fileiras espaçadas a cada 1,2 mm com 3 micro-travas na base"
    },
    "applications": [
      "Miolos de flores, ovelhinhas, ursinhos e animais de pelúcia em enxovais",
      "Almofadas decorativas com texturas rústicas de estilo escandinavo ou boho",
      "Casacos infantis, moletons e detalhes de golas e punhos",
      "Flâmulas de parede e quadrinhos bordados em bastidores de madeira"
    ],
    "troubleshootingTips": [
      "Se as laçadas ficarem soltas demais e desiguais, aumente a tensão da linha superior em 10 gf",
      "Utilize linhas foscas de algodão número 30 para um efeito felpudo mais encorpado",
      "Nunca passe o ferro quente direto sobre o bordado; use vapor a distância"
    ],
    "relatedTerms": [
      "Pontos Básicos & Decorativos",
      "Ponto Franja (Fringe Stitch)",
      "Bordado 3D com Espuma EVA",
      "Chenille Stitch",
      "Entretela de Recorte"
    ],
    "tags": [
      "l-083",
      "loop stitch",
      "ponto de lacada",
      "efeito atoalhado",
      "textura 3d",
      "pontos decorativos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GIBSON, Pamela. Dimensional Loop and Texture Machine Stitching. London, 2021.",
      "PARRISH, Gail. Specialty Loop and Fringe Digitizing Techniques. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido firme. Digitalize um círculo de 3 cm com preenchimento em ponto de laçada espaçado a cada 1,2 mm com micro-arremate duplo. Borde com linha de algodão e plástico solúvel por cima. Retire o plástico e escove com uma escovinha macia: veja que miolo de flor fofinho!",
    "quickSummary": "Ponto com laçadas soltas de linha para criar texturas fofas atoalhadas e efeitos 3D em animais e flores.",
    "beginnerExplanation": "O Ponto de Laçada faz pequenas alcinhas de linha que parecem os pelinhos de uma toalha de banho ou o corpinho de uma ovelhinha de pelúcia. Fica super fofinho e todo mundo adora passar a mão!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-084-lantejoulas-e-dispositivos-automaticos-de-paetes-sequin-device",
    "code": "L-084",
    "term": "Lantejoulas & Dispositivos Automáticos de Paetês (Automatic Sequin & Spangle Device)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Automação & Tecnologia",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês lentille (lentilha / pequeno disco brilhante) e pailette (pequena palha brilhante de ouro).",
    "summary": "Mecanismo eletropneumático automatizado acoplado ao cabeçote da máquina para dispensar, cortar e costurar lantejoulas individuais e reversíveis em alta velocidade.",
    "definition": "Lantejoulas & Dispositivos Automáticos de Paetês (Motorized Sequin & Spangle Feeder) é o acessório mecânico de automação industrial montado ao lado da barra de agulha que alimenta fitas contínuas de lantejoulas perfuradas (de 2 mm a 9 mm). A cada descida da agulha, uma lâmina pneumática corta uma lantejoula e a máquina executa pontos de travamento (ponto estrela, ponto Y ou ponto corrido duplo) no orifício central, permitindo bordar peças inteiras de alta costura com paetês brilhantes a até 1.000 PPM.",
    "technicalDetails": "Diâmetro de lantejoulas suportado: 2 mm a 9 mm (planas, côncavas ou reversíveis / mágica). Alimentação por motor de passo com avanço milimétrico. Pressão de ar recomendada de 0,4 a 0,6 MPa para a guilhotina de corte.",
    "construction": [
      "Braço alimentador de lantejoulas com guia de carretel rotativo",
      "Lâmina de corte tipo guilhotina de aço rápido de alta durabilidade",
      "Motor de passo com controle eletrônico no painel da máquina",
      "Agulha fina 75/11 SES com calcador especial de base rebaixada",
      "Linha monofilamento de poliamida transparente ou poliéster 60wt ultrafino"
    ],
    "howItWorks": [
      "1. A fita de lantejoulas é inserida no carretel e passada pelo trilho guia do dispositivo.",
      "2. O software aciona o código de comando 'Sequin On' na matriz.",
      "3. O braço motorizado avança exatamente uma lantejoula sob a agulha.",
      "4. A guilhotina corta o elo da fita e a agulha desce no furinho central.",
      "5. A máquina costura 3 pontos em formato de estrela ou 'Y' para travar a lantejoula.",
      "6. O cabeçote se desloca para a próxima coordenada e repete o ciclo em fração de segundo.",
      "7. A peça é coberta por milhares de lantejoulas perfeitamente alinhadas e brilhantes."
    ],
    "mainTypes": [
      "Dispositivo de Lantejoula Simples (Single Sequin para um tamanho e cor de disco por cabeçote)",
      "Dispositivo Duplo / Twin Sequin (Alimenta dois rolos simultâneos com tamanhos ou cores diferentes)",
      "Dispositivo para Paetê Reversível (Para camisetas 'mágicas' que mudam de cor ao passar a mão)"
    ],
    "characteristics": [
      "Velocidade de aplicação até 50 vezes mais rápida que o bordado manual de pedraria",
      "Alinhamento geométrico perfeito com espaçamento milimétrico constante",
      "Resistência superior das lantejoulas que não se soltam com facilidade nas lavagens",
      "Brilho cinematográfico indispensável em vestidos de festa, fantasias e moda infantil"
    ],
    "limitations": [
      "Exige matrizes digitalizadas com códigos de parada e comando específicos para sequin",
      "Requer manutenção periódica e lubrificação da lâmina de corte para evitar engasgos",
      "Não passar ferro quente sobre as lantejoulas para não derreter o plástico metalizado"
    ],
    "numberingSystem": [
      "Diâmetros Comuns: 3 mm, 4 mm, 5 mm, 7 mm e 9 mm",
      "Pressão Pneumática: 0,5 MPa (5 bar)",
      "Velocidade Operacional: 750 a 1.000 PPM"
    ],
    "advantages": [
      "✔ Agrega o maior valor financeiro por peça no mercado de moda festa e noivas",
      "✔ Produção em larga escala de fantasias de carnaval e figurinos de shows",
      "✔ Efeito de paetê mágico reversível com enorme apelo de vendas infantil"
    ],
    "commonErrors": [
      "❌ Usar linha grossa que bloqueia a passagem no furinho minúsculo da lantejoula",
      "❌ Errar a altura do calcador, fazendo a agulha bater na borda da lantejoula e quebrar",
      "❌ Fita de lantejoula virada do avesso no carretel alimentador"
    ],
    "voceSabia": "As lantejoulas foram descobertas originalmente na tumba do Faraó Tutancâmon, no Egito Antigo; eram pequenos discos de ouro puro costurados em suas roupas reais para refletir a luz dos deuses e demonstrar riqueza absoluta!",
    "curiosidadeTecnica": "Nas matrizes para paetê reversível (lantejoulas de dupla face), o ponto de fixação é colocado estrategicamente em apenas uma das bordas do disco em vez do centro; isso permite que todas as lantejoulas girem 180 graus ao simples toque das mãos, revelando uma segunda imagem oculta.",
    "dicaArtrelados": "Para bordar lantejoulas com acabamento invisível de alta costura, use linha monofilamento transparente 100% poliamida na agulha: a linha fica completamente invisível e apenas o brilho puro das lantejoulas se destaca na roupa!",
    "comparisonTable": {
      "headers": [
        "Método de Aplicação",
        "Velocidade por Minuto",
        "Custo de Produção",
        "Precisão Visual"
      ],
      "rows": [
        [
          "Dispositivo Automático Sequin",
          "600 a 800 lantejoulas/min",
          "Baixo (Automatizado)",
          "100% Geométrica"
        ],
        [
          "Aplicação Manual com Agulha",
          "5 a 10 lantejoulas/min",
          "Altíssimo (Mão de obra)",
          "Variável artesanal"
        ],
        [
          "Tecido de Paetê Pré-fabricado",
          "N/A (Tecido cortado)",
          "Médio",
          "Sem desenho personalizado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 850 PPM",
      "needleType": "75/11 DBxK5 ou Agulha Revestida com Titânio",
      "stabilizer": "Entretela de Recorte Firme 80 g/m²",
      "threadTension": "100 gf (linha fina) e 20 gf (bobina)",
      "density": "Programada automaticamente pelo módulo Sequin do software"
    },
    "applications": [
      "Vestidos de noiva de gala, debutantes e alta costura internacional",
      "Fantasias de carnaval de escolas de samba e figurinos teatrais",
      "Camisetas infantis com paetê mágico reversível interativo",
      "Bolsas de festa, sapatos de luxo e almofadas brilhantes"
    ],
    "troubleshootingTips": [
      "Se o dispositivo não cortar a fita, limpe a lâmina de corte com solvente desengraxante",
      "Verifique se o sensor óptico de presença de fita não está bloqueado por poeira de plástico",
      "Ajuste a folga do calcador para 1,0 mm acima da espessura da lantejoula"
    ],
    "relatedTerms": [
      "Automação & Tecnologia",
      "Lurex & Fios Cintilantes",
      "Linha Monofilamento Transparente",
      "Mecânica & Manutenção",
      "Software de Digitalização"
    ],
    "tags": [
      "l-084",
      "lantejoulas",
      "paetes",
      "sequin device",
      "alta costura",
      "brilho",
      "automacao e tecnologia",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MORETTI, Giuliano. Automated Sequin and Bead Attachment in Industrial Embroidery. Bologna, 2021.",
      "PARRISH, Gail. High-Fashion Sequin Device Digitizing and Mechanics. Cincinnati, 2022."
    ],
    "practicalExercise": "Se sua máquina tem acessório de lantejoulas, programe um coração preenchido com paetês de 4 mm. Use linha transparente e observe a máquina costurando 600 lantejoulas por minuto com precisão de joalheria. É puro espetáculo!",
    "quickSummary": "Dispositivo automatizado que alimenta, corta e costura lantejoulas e paetês brilhantes em alta velocidade.",
    "beginnerExplanation": "É um aparelhinho que a gente coloca na máquina de bordar que vai soltando e costurando paetês e lantejoulas brilhantes um por um super rápido, criando aquelas roupas de festa cheias de brilho de passarela!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-085-lona-nautica-e-cordura-bordados-em-tecidos-tecnicos-pesados",
    "code": "L-085",
    "term": "Lona Náutica & Cordura: Bordados em Tecidos Técnicos Pesados (Marine Canvas & Cordura Heavy-Duty Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês bâche / toile de voile (tecido naval) e da marca Cordura (poliamida de alta tenacidade desenvolvida pela DuPont em 1929).",
    "summary": "Bordado em tecidos impermeáveis ultra-resistentes para capotas de barcos, mochilas táticas e estofados náuticos com linhas anti-UV e selantes hidrófugos.",
    "definition": "Lona Náutica & Cordura (Heavy-Duty Technical Fabrics Embroidery) é o segmento do bordado industrial focado em substratos têxteis de extrema tenacidade como lonas acrílicas resinadas (Sunbrella), poliéster plastificado e náilon Cordura 500D a 1000D. Exige agulhas reforçadas com lâmina espessa (90/14 a 100/16 com revestimento de titânio), linhas com tratamento anti-UV de alta resistência mecânica e aplicação de películas impermeabilizantes no verso para vedar os furos da agulha contra infiltrações de água da chuva ou maresia.",
    "technicalDetails": "Tecidos com densidade de 500 a 1000 Denier e gramatura de 300 a 650 g/m². Resistência à abrasão superior a 50.000 ciclos Martindale. Agulhas 90/14 ou 100/16 com ponta R (cortante suave) ou ponta redonda reforçada.",
    "construction": [
      "Base de tecido técnico pesado (Lona Sunbrella náutica ou Cordura 1000D)",
      "Entretela de recorte pesada e resinada (Heavy Cutaway 90 g/m²)",
      "Linha de poliéster 100% filamento contínuo com proteção anti-UV (Sunstop / Serafil)",
      "Fita selante termocolante para vedação estanque no avesso (Seam Sealing Tape)",
      "Agulha de titânio 90/14 ou 100/16 com olho largo reforçado"
    ],
    "howItWorks": [
      "1. A lona pesada é presa em bastidor reforçado ou bastidor magnético de alta pressão.",
      "2. Utiliza-se entretela de recorte pesada no avesso para absorver o impacto das perfurações.",
      "3. A máquina borda em velocidade reduzida de 600 a 650 PPM para evitar aquecimento da agulha.",
      "4. A matriz é digitalizada com densidade mais aberta (0,45 mm) e pontos médios a longos (> 3,0 mm).",
      "5. A linha com proteção solar resiste ao atrito e mantém a cor viva sob sol e chuva.",
      "6. Após o bordado, aplica-se fita selante com ar quente no avesso sobre os furinhos dos pontos.",
      "7. O produto final resiste a anos de exposição solar, salitre marítimo e tempestades sem vazar água."
    ],
    "mainTypes": [
      "Lona Náutica Acrílica Respirável (Sunbrella para capotas de lanchas, iates e capas de veleiros)",
      "Cordura Militar e Tática 1000D (Para mochilas de resgate, coletes balísticos e botas táticas)",
      "Lona Vinílica PVC Impermeável (Para toldos comerciais, capas de estepe e malas de viagem)"
    ],
    "characteristics": [
      "Resistência incomparável contra rasgos, tração mecânica e atrito severo",
      "Imunidade contra desbotamento por radiação ultravioleta e mofo marítimo",
      "Visual robusto, imponente e de altíssima durabilidade técnica",
      "Excelente fixação de logotipos de estaleiros, clubes náuticos e equipes de aventura"
    ],
    "limitations": [
      "Nunca usar pontos muito curtos (< 2,0 mm) que podem picotar e furar a lona como um selo postal",
      "Exige máquinas com boa potência de motor e bastidores com aperto mecânico firme",
      "Requer vedação obrigatória no avesso caso a peça precise ser 100% estanque contra água"
    ],
    "numberingSystem": [
      "Título do Tecido: Cordura 500D a 1000D",
      "Agulha Indicada: 90/14 ou 100/16 Titanium",
      "Densidade Recomendada: 0,44 mm a 0,48 mm"
    ],
    "advantages": [
      "✔ Mercado de altíssimo poder aquisitivo no setor náutico e esportes de aventura",
      "✔ Peças que duram anos expostas às piores intempéries sem perder a beleza",
      "✔ Diferencial técnico que pouquíssimos ateliês comuns conseguem executar com perfeição"
    ],
    "commonErrors": [
      "❌ Usar linha de algodão ou raiom comum que apodrece e desbota em 3 meses no sol da praia",
      "❌ Bordar com matriz ultradensa que rasga a trama rígida da lona náutica",
      "❌ Não vedar o avesso do bordado em capotas de barco, causando goteiras na chuva"
    ],
    "voceSabia": "O tecido Cordura foi desenvolvido secretamente pelos aliados na Segunda Guerra Mundial para fabricar os pneus de aviões bombardeiros; hoje é o padrão ouro mundial em mochilas militares e equipamentos de alta resistência!",
    "curiosidadeTecnica": "Quando uma agulha perfura uma lona náutica impermeável, ela cria milhares de micro-orifícios que quebram a barreira de pressão hidrostática; a aplicação de fita de poliuretano termossoldável a 130°C no avesso regenera a impermeabilidade total de 10.000 mm de coluna d'água.",
    "dicaArtrelados": "Ao bordar em lonas pesadas ou tecidos impermeáveis, troque a linha comum por linha de poliéster com tratamento anti-UV (filamento contínuo) e aumente o tamanho mínimo dos pontos para 3 mm: sua matriz borda rápido, a agulha não quebra e a peça dura uma vida inteira!",
    "comparisonTable": {
      "headers": [
        "Material Têxtil",
        "Resistência UV",
        "Agulha Obrigatória",
        "Aplicação Típica"
      ],
      "rows": [
        [
          "Lona Náutica Sunbrella",
          "Extrema (10 anos no sol)",
          "90/14 Titanium",
          "Capotas de iates e almofadas de piscina"
        ],
        [
          "Cordura 1000D Tática",
          "Altíssima abrasão",
          "100/16 Reforçada",
          "Mochilas de trilha e coletes esportivos"
        ],
        [
          "Sarja de Algodão Comum",
          "Baixa a Média",
          "75/11 Normal",
          "Uniformes e jaquetas urbanas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 680 PPM",
      "needleType": "90/14 SAN 5 ou 100/16 Titanium DBxK5",
      "stabilizer": "Entretela de Recorte Pesada 90 g/m²",
      "threadTension": "125 gf (linha forte) e 25 gf (bobina)",
      "density": "0.45 mm com underlays em zigue-zague aberto"
    },
    "applications": [
      "Bordados em capotas de barcos, iates, lanchas e almofadas de convés",
      "Mochilas táticas militares, estojos de ferramentas e bolsas de camping",
      "Bancos e estofamentos de motos, jipes 4x4 e carros de corrida",
      "Capas de instrumentos musicais pesados e malas técnicas de viagem"
    ],
    "troubleshootingTips": [
      "Se a linha desfiar por aquecimento da agulha na lona grossa, use agulha com acabamento cerâmico de titânio",
      "Aperte o parafuso do bastidor com uma chave de fenda para a lona não escorregar durante o bordado",
      "Passe ferro morno com fita selante no avesso para fechar os buraquinhos contra água"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Agulha Titanium",
      "Linha de Poliéster Anti-UV",
      "Densidade de Pontos",
      "Entretela de Recorte"
    ],
    "tags": [
      "l-085",
      "lona nautica",
      "cordura",
      "tecidos pesados",
      "anti-uv",
      "impermeavel",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "VON BENTHEIM, Dirk. Technical Textiles and Heavy Fabric Stitching. Hamburg, 2021.",
      "PARRISH, Gail. Industrial Heavy-Duty Canvas and Marine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de lona grossa ou mochila velha. Coloque agulha 90/14 e entretela de recorte pesada. Digitalize um logotipo esportivo com densidade 0,45 mm e linha de poliéster forte. Borde a 600 PPM e sinta a robustez de um verdadeiro bordado técnico!",
    "quickSummary": "Bordado de alta tenacidade em lonas marinhas e mochilas táticas com linhas resistentes ao sol e chuva.",
    "beginnerExplanation": "Bordar em lona de barco e mochila pesada é como equipar a máquina para uma aventura na selva: a gente usa uma agulha mais grossinha e linha forte resistente ao sol para o bordado durar anos debaixo de chuva e sol forte!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-086-lettering-cursivo-e-conexoes-continuas-de-letras",
    "code": "L-086",
    "term": "Lettering Cursivo & Conexões Contínuas de Letras (Cursive Script Lettering & Continuous Joining)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim littera (letra do alfabeto) e cursivus (que corre sem interrupção).",
    "summary": "Técnica de digitalização caligráfica onde as letras cursivas são interligadas por pontes contínuas de ponto cheio ou corrido, eliminando nós no avesso e cortes de linha.",
    "definition": "Lettering Cursivo & Conexões Contínuas (Continuous Script Embroidery Digitizing) é a arte de programar alfabetos caligráficos e fontes manuscritas de modo que a máquina borde palavras e nomes inteiros em uma única trajetória ininterrupta. As emendas entre as letras são desenhadas com pontes anatômicas camufladas sob os pontos cheios, eliminando cortes intermediários de tesoura automática (*trims*), nós volumosos no verso da peça e reduzindo o tempo de produção em até 50%.",
    "technicalDetails": "Ângulos de ponto curvos com gradiente contínuo de 0° a 90°. Espessura das hastes de ponto cheio entre 1,2 mm e 3,5 mm. Conexões de entrada e saída programadas no ponto inferior mais baixo da letra seguinte.",
    "construction": [
      "Software de bordado com ferramentas de caligrafia vetorial (Wilcom / Hatch / Bernina)",
      "Fontes digitalizadas profissionais com nós de ligação nativos (Keyboard Lettering)",
      "Linha de poliéster 40wt de alta flexibilidade e brilho sedoso",
      "Compensação de repuxo regulada em 0,35 mm para manter as conexões alinhadas",
      "Underlay central linear (Center Walk) contínuo que percorre toda a palavra"
    ],
    "howItWorks": [
      "1. O nome ou frase é digitado e o espaçamento entre letras (*kerning*) é ajustado para encostar as emendas.",
      "2. O software calcula a entrada no início da primeira letra maiúscula e a saída pelo rabicho da letra.",
      "3. O ponto cheio flui organicamente para a letra seguinte sem cortar a linha nem parar o motor.",
      "4. Um underlay contínuo de ponto corrido guia a agulha e estabiliza a base antes do ponto cheio.",
      "5. A inclinação das colunas de ponto acompanha o movimento caligráfico da caneta-tinteiro.",
      "6. A máquina borda o nome inteiro em 45 segundos em um único disparo ininterrupto.",
      "7. O avesso fica 100% limpo, sem pontas soltas de linha e com toque extremamente suave na pele."
    ],
    "mainTypes": [
      "Caligrafia Cursiva Clássica (Estilo Spenceriano e Inglês Nobre para enxovais e batizados)",
      "Brush Script Contemporâneo (Estilo pincel moderno com traços grossos e finos para moda)",
      "Manuscrito Infantil / Escolar (Letras redondinhas e fluidas para uniformes e batas)"
    ],
    "characteristics": [
      "Velocidade máxima de produção sem paradas para corte e arremate de linha",
      "Avesso impecável e liso que não pinica a pele de bebês em bodies e fraldas",
      "Elegância estética superior que valoriza nomes personalizados em toalhas e camisas",
      "Ausência de pontas de linha que possam desfiar com o atrito da máquina de lavar"
    ],
    "limitations": [
      "Exige cuidado ao redimensionar a fonte para que as conexões finas não fiquem com menos de 0,8 mm",
      "Não aplicar em letras muito pequenas (< 6 mm) sob risco de embolar os pontos",
      "Requer calibração precisa da compensação de repuxo para que as letras não se desconectem no tecido"
    ],
    "numberingSystem": [
      "Altura Ideal da Letra Minúscula: 8 mm a 18 mm",
      "Espessura Mínima da Haste: 1,2 mm",
      "Ângulo de Inclinação Caligráfica: 15° a 22°"
    ],
    "advantages": [
      "✔ Economia colossal de tempo no ateliê em pedidos de nomes e uniformes escolares",
      "✔ Prolonga a vida útil da faca de corte da máquina reduzindo os cortes em 80%",
      "✔ Acabamento de luxo que encanta as clientes mais exigentes de enxovais"
    ],
    "commonErrors": [
      "❌ Deixar as letras ligeiramente separadas, fazendo a máquina cortar a linha entre cada letra",
      "❌ Conectar as letras no lugar errado, criando cruzamentos feios no ponto cheio",
      "❌ Usar ponto cheio muito fino (< 1 mm) que afunda na trama da toalha"
    ],
    "voceSabia": "A escrita cursiva foi criada pelos antigos romanos no século I para agilizar a escrita em papiros sem precisar levantar a pena de ganso da folha; o mesmo princípio de economia de movimento é hoje a base do bordado contínuo no computador!",
    "curiosidadeTecnica": "Cada comando de corte de linha (*trim*) em uma máquina de bordar consome cerca de 4 a 6 segundos (desaceleração, corte da faca, subida do estica-fio, salto de bastidor e reaceleração); em uma palavra de 8 letras, eliminar os cortes economiza mais de 35 segundos por peça.",
    "dicaArtrelados": "Ao personalizar nomes cursivos em toalhas de banho, use sempre a ferramenta 'Auto-Join' ou 'Closest Join' do software: ela une o final de cada letra exatamente na base da letra seguinte. O bordado corre liso e o avesso fica tão limpo que parece feito à mão!",
    "comparisonTable": {
      "headers": [
        "Tipo de Letreiro",
        "Cortes de Linha por Palavra",
        "Tempo de Produção",
        "Toque no Avesso"
      ],
      "rows": [
        [
          "Cursivo Contínuo (Continuous)",
          "1 corte (no final da palavra)",
          "35 a 50 segundos",
          "Ultrassuave / Sem nós"
        ],
        [
          "Letras de Forma Tradicionais",
          "6 a 8 cortes (a cada letra)",
          "90 a 140 segundos",
          "Com nós em cada letra"
        ],
        [
          "Cursivo sem Conexão Ajustada",
          "6 cortes desnecessários",
          "110 segundos",
          "Pontas de linha soltas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES de ponta fina",
      "stabilizer": "Entretela Rasgável Macia ou Hidrossolúvel de topo em toalhas",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina)",
      "density": "0.38 mm a 0.40 mm com underlay Center Walk contínuo"
    },
    "applications": [
      "Nomes bordados em toalhas de banho, roupões e enxovais de casamento",
      "Fraldinhas de boca, bodies de bebê e saídas de maternidade personalizadas",
      "Jalecos médicos, aventais de chef e camisas com nomes de profissionais",
      "Monogramas elegantes em guardanapos de mesa posta e jogos de cama"
    ],
    "troubleshootingTips": [
      "Se as letras se separarem no bordado físico, aumente a compensação de repuxo para 0,40 mm no software",
      "Coloque plástico solúvel por cima em tecidos atoalhados para as perninhas finas das letras não sumirem",
      "Regule a velocidade da máquina para 750 PPM para garantir curvas perfeitas nas letras"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Monogramas & Letreiros",
      "Corte de Linha Automático (Trim)",
      "Compensação de Repuxo",
      "Underlay (Estrutura de Base)"
    ],
    "tags": [
      "l-086",
      "lettering",
      "cursivo",
      "fontes manuscritas",
      "conexoes continuas",
      "nomes bordados",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BLAKE, Wendy. The Art of Script Lettering and Calligraphy in Embroidery. New York, 2021.",
      "PARRISH, Gail. Advanced Monogramming and Continuous Script Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu software de matrizes. Escreva um nome com uma fonte cursiva bonita. Ative a opção de conexão automática nos pontos mais próximos. Observe na simulação como a máquina borda o nome inteiro sem dar nenhum corte de linha. Borde em uma fraldinha e sinta o avesso macio!",
    "quickSummary": "Digitalização caligráfica contínua onde as letras são unidas sem cortes de linha, agilizando a produção.",
    "beginnerExplanation": "O Lettering Cursivo é como escrever com uma canetinha sem tirar a ponta do papel: a máquina borda o nome inteiro de uma vez só, sem ficar cortando a linha toda hora, deixando o bordado mais rápido e o avesso bem lisinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-087-light-reactive-thread-linhas-fotoluminescentes-e-reagentes-uv",
    "code": "L-087",
    "term": "Light-Reactive Thread: Linhas Fotoluminescentes e Reagentes UV (Glow-in-the-Dark & Solar Active Threads)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim lux (luz) e do grego phos (fóssil brilhante). Linhas químicas de terceira geração desenvolvidas no Japão e Alemanha.",
    "summary": "Fios de alta tecnologia que absorvem luz ambiente e brilham no escuro (Glow in the Dark) ou mudam de cor instantaneamente sob a radiação solar ultravioleta.",
    "definition": "Light-Reactive & Glow-in-the-Dark Threads (Linhas Fotoluminescentes e Fotocrômicas) são filamentos especiais de poliéster ou polipropileno aditivados com pigmentos de aluminato de estrôncio ou microcápsulas fotossensíveis. No escuro, as linhas fotoluminescentes emitem uma luminosidade fosforescente verde, azul ou âmbar por até 8 horas contínuas após alguns minutos de exposição à luz; já as linhas fotocrômicas (Solar Active) são brancas em ambientes internos e mudam magicamente para cores vibrantes (rosa, roxo, azul) quando expostas ao sol.",
    "technicalDetails": "Título No. 40 (cerca de 135 dtex). Pigmentação atóxica e livre de radioatividade. Vida útil fotoluminescente de mais de 50 lavagens domésticas sem perda de luminescência.",
    "construction": [
      "Carretel de linha fotoluminescente ou fotocrômica No. 40",
      "Agulha 75/11 ou 80/12 SES com olho polido para evitar atrito nos microcristais",
      "Redinha de proteção elástica para controle de tensão no carretel",
      "Tecido escuro de contraste (para linhas que brilham no escuro) ou claro (para linhas solares)",
      "Entretela rasgável ou recorte conforme o tecido base"
    ],
    "howItWorks": [
      "1. A linha especial é passada pelos tensores da máquina com trajeto suave.",
      "2. A máquina borda em velocidade padrão de 700 a 800 PPM como uma linha normal de poliéster.",
      "3. Os microcristais fotossensíveis presentes no filamento são distribuídos uniformemente nos pontos.",
      "4. Quando a peça bordada é exposta à luz de lâmpadas ou ao sol, os elétrons do pigmento absorvem energia.",
      "5. Ao apagar as luzes, a energia é liberada lentamente em forma de luz verde neon ou azul brilhante.",
      "6. Em linhas solares, a luz ultravioleta do sol ativa as microcápsulas, tingindo o bordado em segundos.",
      "7. A peça gera um efeito visual surpreendente e de enorme impacto em festas e eventos noturnos."
    ],
    "mainTypes": [
      "Linha Glow-in-the-Dark Verde Clássica (Apresenta o brilho noturno mais intenso e duradouro)",
      "Linha Glow-in-the-Dark Azul e Lilás (Brilho noturno suave com visual futurista e místico)",
      "Linha Fotocrômica Solar Active (Muda de cor instantaneamente ao ar livre sob a luz do sol)"
    ],
    "characteristics": [
      "Efeito mágico e interativo que encanta crianças, jovens e adultos",
      "Função prática de segurança para roupas de ciclistas, corredores noturnos e bombeiros",
      "Facilidade de manuseio e bordabilidade idêntica à linha tradicional de poliéster 40",
      "Totalmente segura, hipoalergênica e isenta de metais pesados ou substâncias tóxicas"
    ],
    "limitations": [
      "Não alvejar com produtos à base de cloro ou água sanitária para não oxidar os pigmentos",
      "Não secar em secadoras industriais com temperaturas superiores a 100°C",
      "A linha fotocrômica solar perde a capacidade de mudança de cor após cerca de 2.000 horas de sol direto"
    ],
    "numberingSystem": [
      "Espessura: No. 40 (40wt)",
      "Tempo de Emissão de Luz: 4 a 8 horas contínuas",
      "Velocidade Recomendada: 700 a 800 PPM"
    ],
    "advantages": [
      "✔ Diferencial comercial exclusivo que viraliza nas redes sociais e multiplica as vendas",
      "✔ Ideal para festas de Halloween, fantasias infantis, pijamas e roupas de balada",
      "✔ Agrega alto valor percebido com baixo acréscimo no custo de produção"
    ],
    "commonErrors": [
      "❌ Passar ferro excessivamente quente diretamente sobre a linha sem pano de proteção",
      "❌ Bordar detalhes minúsculos onde a área de emissão de luz fica muito pequena para ser vista",
      "❌ Lavar a peça com água sanitária clorada, destruindo o efeito fosforescente"
    ],
    "voceSabia": "As linhas que brilham no escuro modernas usam cristais de aluminato de estrôncio dopados com európio, que brilham 10 vezes mais forte e 10 vezes mais tempo do que as antigas tintas fosforescentes dos anos 1980!",
    "curiosidadeTecnica": "A luz emitida pelas linhas fotoluminescentes possui comprimento de onda de 520 nanômetros (exatamente na faixa verde-esmeralda), que é o espectro cromático para o qual o olho humano no escuro possui a máxima sensibilidade biológica.",
    "dicaArtrelados": "Ao bordar pijamas infantis com temas de astronauta, dinossauros ou estrelas, borde apenas os olhinhos do monstrinho ou as constelações com a linha que brilha no escuro: quando a mãe apaga a luz do quarto, o desenho ganha vida e as crianças adoram!",
    "comparisonTable": {
      "headers": [
        "Tipo de Linha Especial",
        "Comportamento no Claro",
        "Comportamento no Escuro / Sol",
        "Uso Ideal"
      ],
      "rows": [
        [
          "Glow in the Dark",
          "Branco-marfim suave",
          "Brilha verde neon / azul no escuro",
          "Pijamas, fantasias e segurança noturna"
        ],
        [
          "Solar Active Fotocrômica",
          "Branco neve em ambientes fechados",
          "Fica rosa/azul/roxo ao sair no sol",
          "Moda praia, bonés e camisetas de verão"
        ],
        [
          "Refletiva de Alta Visibilidade",
          "Cinza metálico opaco",
          "Reflete o farol de carros à noite",
          "Uniformes industriais e ciclistas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 ou 80/12 SES de uso geral",
      "stabilizer": "Entretela compatível com a peça",
      "threadTension": "105 a 115 gf (tensão padrão de poliéster)",
      "density": "0.40 mm a 0.42 mm em pontos cheios e tatamis"
    },
    "applications": [
      "Pijamas infantis, roupas de dormir, mantinhas de bebê e naninhas com estrelas",
      "Fantasias de Halloween, caveiras, fantasmas e camisetas para baladas",
      "Logotipos de segurança para jaquetas de ciclistas, mochilas e coletes",
      "Bonés e moda jovem de verão que mudam de cor na praia sob o sol"
    ],
    "troubleshootingTips": [
      "Se a linha parecer fosca no claro, 'carregue' o bordado colocando sob uma lâmpada comum por 2 minutos",
      "Utilize agulha nova 80/12 para garantir que os microcristais da linha passem sem atrito",
      "Combine partes bordadas com poliéster comum e partes com linha luminescente para criar contrastes noturnos"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Lurex & Fios Cintilantes",
      "Linha de Poliéster Trilobal",
      "Densidade de Pontos",
      "Tensão de Linha"
    ],
    "tags": [
      "l-087",
      "linha fotoluminescente",
      "glow in the dark",
      "brilha no escuro",
      "solar active",
      "fotocromica",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SCHUMACHER, Klaus. Luminescent and Smart Photonic Fibers in Textiles. Berlin, 2021.",
      "PARRISH, Gail. Specialty Glow and UV-Reactive Machine Embroidery Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um carretel de linha Glow in the Dark na sua máquina. Borde uma lua com estrelas de 6 cm em uma camiseta escura. Coloque a peça debaixo da luz da lâmpada por 1 minuto e entre em um quarto escuro: encante-se com o brilho verde mágico que surge no tecido!",
    "quickSummary": "Linhas de alta tecnologia que brilham no escuro ou mudam de cor com a luz do sol para efeitos mágicos.",
    "beginnerExplanation": "É uma linha mágica que parece comum de dia, mas quando a gente apaga a luz do quarto ela brilha no escuro como estrelinhas, ou quando a gente vai pro sol ela muda de cor na hora! As crianças piram!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-088-leavers-lace-bordado-rendado-quimico-e-free-standing-lace-fsl",
    "code": "L-088",
    "term": "Leavers Lace & Renda Química: Free Standing Lace FSL (Chemical Lace & Free Standing Lace Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "De John Leavers (inventor da máquina de tear de rendas em 1813 na Inglaterra) e do inglês free standing lace (renda autoportante sem tecido).",
    "summary": "Técnica de produção de rendas nobres autoportantes bordadas exclusivamente sobre entretela hidrossolúvel pesada que se dissolve na água, restando apenas a estrutura de linhas entrelaçadas.",
    "definition": "Leavers Lace & Renda Química FSL (Free Standing Lace / Guipure Embroidery) é a técnica sofisticada de criar rendas completas e peças tridimensionais (golas, brincos, medalhões, marcadores de página e apliques) sem nenhum tecido de base. A matriz é digitalizada com uma malha estrutural matemática de micropontos entrelaçados (*underlay grid*) e nós de travamento perimetrais bordados sobre duas camadas de entretela hidrossolúvel pesada. Após o bordado, a entretela é dissolvida em água morna, revelando uma renda perfeita, firme e autoportante.",
    "technicalDetails": "Requer obrigatoriamente 2 camadas de entretela hidrossolúvel de 40 micras ou 1 camada de 80 g/m² de tecido solúvel (Aquasolv). Grade de base cruzada a 45° e 135° com espaçamento de 1,5 mm a 2,0 mm. Linha de poliéster 40wt ou algodão 50wt idêntica na agulha e na bobina.",
    "construction": [
      "Duas camadas de entretela hidrossolúvel pesada presas no bastidor bem esticadas",
      "Linha de bordar da mesma cor e material tanto na agulha superior quanto na bobina",
      "Matriz com grade de sustentação estrutural cruzada (Underlay Grid)",
      "Cordões de acabamento em ponto cheio com pontos de ancoragem duplos",
      "Bacia com água morna para dissolução controlada da entretela"
    ],
    "howItWorks": [
      "1. Prende-se a entretela hidrossolúvel no bastidor bem firme como uma pele de tambor.",
      "2. A máquina borda uma primeira grade de sustentação em linhas diagonais a 45°.",
      "3. Em seguida, borda uma segunda grade perpendicular a 135°, criando nós de interseção.",
      "4. Os motivos florais, folhas e arabescos são preenchidos sobre essa grade sólida de linhas.",
      "5. Os contornos e bordas são finalizados com ponto cheio denso que une todas as pontas.",
      "6. A peça é retirada do bastidor e mergulhada em água morna por 2 a 3 minutos.",
      "7. A entretela se dissolve completamente, restando uma linda renda de guipir independente.",
      "8. A renda é seca sobre uma toalha plana, mantendo a forma firme e escultural."
    ],
    "mainTypes": [
      "Renda Guipir / FSL Plana (Golas de vestidos, barrados de toalhas e medalhões religiosos)",
      "Renda FSL 3D Montável (Flores tridimensionais, caixinhas rendadas e anjos de Natal montados com encaixes)",
      "Biojoias Rendadas (Brincos leves, gargantilhas e pulseiras de alta joalheria têxtil)"
    ],
    "characteristics": [
      "Peça 100% composta por linhas sem nenhuma sobra de tecido no verso ou nas bordas",
      "Transparência rendada autêntica idêntica às rendas de bilro e agulha de alta costura",
      "Flexibilidade e toque macio que não desfia e não deforma com o tempo",
      "Possibilidade de criar joias têxteis levíssimas e confortáveis para orelhas sensíveis"
    ],
    "limitations": [
      "Se a matriz não tiver a grade estrutural correta, a renda se desmancha inteira ao lavar",
      "Exige usar a mesma linha na agulha e na bobina para que a renda fique bonita dos dois lados",
      "Não colocar menos entretela solúvel do que o recomendado para não rasgar no bastidor"
    ],
    "numberingSystem": [
      "Espaçamento da Grade Estrutural: 1,5 mm a 2,0 mm",
      "Espessura do Filme Solúvel: 2x 40 micras ou 1x 80 g/m²",
      "Densidade do Cordão de Borda: 0,35 mm"
    ],
    "advantages": [
      "✔ Produto artesanal de altíssimo valor comercial com custo de matéria-prima quase nulo",
      "✔ Criação de brincos e joias exclusivas com margens de lucro superiores a 400%",
      "✔ Peças perfeitas tanto pelo direito quanto pelo avesso"
    ],
    "commonErrors": [
      "❌ Usar linha branca comum na bobina com linha colorida em cima: a renda fica manchada no verso",
      "❌ Enxaguar a renda demais retirando todo o amido natural da entretela, deixando a renda mole",
      "❌ Deixar partes do desenho 'flutuando' sem conexão física com a borda principal"
    ],
    "voceSabia": "A técnica de renda química foi inventada em St. Gallen, na Suíça, em 1883; originalmente bordava-se sobre seda pura e depois a peça era mergulhada em banho químico de cloro que dissolvia a seda mas mantinha intactas as linhas de algodão da renda!",
    "curiosidadeTecnica": "Ao dissolver a renda FSL, deixar um resíduo de cerca de 10% da entretela hidrossolúvel no enxágue age como um endurecedor têxtil natural: quando a renda seca, ela ganha a rigidez perfeita para brincos e enfeites natalinos sem precisar de goma artificial.",
    "dicaArtrelados": "Para fazer brincos e colares rendados perfeitos (FSL), use linha de poliéster brilhante na agulha e encha a bobina com a mesma linha: ao tirar da água, coloque o brinco entre duas folhas de papel-toalha sob um livro pesado por 2 horas: ele seca retinho e durinho como uma joia!",
    "comparisonTable": {
      "headers": [
        "Tipo de Renda",
        "Base Utilizada",
        "Visão do Avesso",
        "Aplicação Principal"
      ],
      "rows": [
        [
          "Renda FSL / Guipir",
          "100% Entretela Hidrossolúvel",
          "Idêntica à frente (Perfeita)",
          "Brincos, golas, anjos e medalhões"
        ],
        [
          "Richelieu em Tecido",
          "Tecido cortado com vazados",
          "Tem tecido no verso",
          "Toalhas de mesa e lençóis"
        ],
        [
          "Tule Bordado",
          "Rede de tule sintético",
          "Tule transparente",
          "Vestidos de noiva e véus"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES de ponta fina",
      "stabilizer": "2 camadas de Plástico Hidrossolúvel Pesado (80 micras total)",
      "threadTension": "100 gf (superior) e 20 gf (bobina) bem equilibradas",
      "density": "Grade de base a 1,8 mm com ponto cheio de cobertura a 0,38 mm"
    },
    "applications": [
      "Brincos rendados, gargantilhas de noiva e biojoias de luxo",
      "Golas de vestidos de festa, decotes e punhos em renda guipir",
      "Enfeites natalinos autoportantes, anjos 3D, sinos e flocos de neve",
      "Marcadores de página bíblicos, medalhões de batizado e lembrancinhas"
    ],
    "troubleshootingTips": [
      "Se a renda desmanchar na água, adicione mais linhas de cruzamento na grade de base da matriz",
      "Enxágue apenas rapidamente em água fria se desejar que a renda fique bem engomada e durinha",
      "Passe a ferro morno com papel manteiga de proteção caso a renda fique levemente ondulada"
    ],
    "relatedTerms": [
      "Pontos Básicos & Decorativos",
      "Entretela Hidrossolúvel",
      "Bordado Richelieu",
      "Underlay (Estrutura de Base)",
      "Ponto Festonê"
    ],
    "tags": [
      "l-088",
      "fsl",
      "free standing lace",
      "renda quimica",
      "guipir",
      "brincos rendados",
      "pontos decorativos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "EARNSHAW, Pat. The Identification of Lace and Chemical Lace Heritage. London, 2021.",
      "PARRISH, Gail. Structural Digitizing for Free Standing Lace and 3D Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque 2 camadas de plástico solúvel no bastidor. Encha a bobina com linha de cor igual à de cima. Borde uma matriz de brinco FSL de 4 cm. Mergulhe em um copo com água morna por 1 minuto e coloque para secar em cima de papel toalha: veja que brinco de renda chique e perfeito!",
    "quickSummary": "Técnica de criar rendas completas e brincos bordando apenas sobre plástico solúvel que se desmancha na água.",
    "beginnerExplanation": "É o jeito mágico de fazer renda na máquina de bordar: a gente prende um plástico transparente no bastidor e a máquina borda a renda todinha. Depois a gente joga água morna, o plástico derrete e sobra só a renda linda e durinha na mão!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-089-lamex-linhas-metalicas-planas-em-fita-ultrafina",
    "code": "L-089",
    "term": "Lamex & Linhas Metálicas Planas em Fita Ultrafina (Flat Metallic Ribbon Embroidery Thread)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do francês lamé (tecido com fios planos de ouro/prata) e do sufixo industrial ex.",
    "summary": "Filamento metálico de perfil achatado (fita plana microscópica) que proporciona efeito de espelho líquido e cobertura contínua com menor densidade de pontos.",
    "definition": "Lamex & Linhas Metálicas Planas (Flat Film Metallic Thread) são fios de bordar de alta tecnologia formados por uma microfita laminada plana (de 0,35 mm a 0,50 mm de largura) de filme de poliéster metalizado com alumínio e verniz óptico colorido. Ao contrário dos fios metálicos torcidos convencionais, o fio plano assenta sobre o tecido como minúsculas lâminas de espelho, criando uma superfície espelhada contínua, homogênea e com reflexo de ouro líquido, exigindo guias de linha com passagem reta e agulhas com olho largo.",
    "technicalDetails": "Largura da microfita: 0,38 mm a 0,45 mm. Espessura do filme: 12 a 15 micras. Densidade no software reduzida em 15% a 20% em comparação à linha 40 comum para evitar sobreposição excessiva de lâminas.",
    "construction": [
      "Carretel de fita metálica plana Lamex montado em suporte horizontal",
      "Redinha elástica de tensão suave para desenrolamento contínuo",
      "Agulha especial 80/12 Metallic ou Topstitch com olho largo",
      "Base de tecido com entretela macia e compensação de repuxo de 0,30 mm",
      "Guias de linha lubrificadas para evitar torção da fita"
    ],
    "howItWorks": [
      "1. A fita Lamex desenrola do carretel sem sofrer torção sobre o próprio eixo.",
      "2. Passa pelos tensores com trajeto plano e ângulo reto suave.",
      "3. A agulha com olho retangular acomoda a largura da fita sem dobrar suas bordas.",
      "4. A máquina borda em velocidade estável de 600 PPM com pontos cheios ou tatamis abertos.",
      "5. As lâminas assentam lado a lado na superfície do tecido como placas de armadura espelhada.",
      "6. A laçada inferior é formada com linha fina de poliéster 60wt na bobina.",
      "7. O bordado exibe um brilho contínuo de metal polido, liso ao toque e sem asperezas."
    ],
    "mainTypes": [
      "Lamex Ouro Espelhado (Efeito de folha de ouro de 24 quilates polida para alfaiataria nobre)",
      "Lamex Prata Cromada (Reflexo de espelho líquido prateado e platina)",
      "Lamex Holográfico Prisma (Efeito de reflexão de cores do arco-íris sobre fita plana)"
    ],
    "characteristics": [
      "Superfície plana espelhada com reflexo de luz até 40% superior aos fios torcidos",
      "Toque muito mais liso e macio que não pinica a pele",
      "Alta cobertura visual permitindo usar densidades mais abertas e economizar pontos",
      "Visual de alta joalheria em brasões de gala, roupas de palco e alta costura"
    ],
    "limitations": [
      "Não suporta curvas com ângulos extremamente agudos que possam torcer a fita",
      "Velocidade máxima de operação limitada a 650 PPM",
      "Exige passar a ferro sempre pelo avesso e com temperatura baixa"
    ],
    "numberingSystem": [
      "Largura da Fita: 0,38 mm",
      "Densidade Recomendada: 0,46 mm a 0,50 mm",
      "Velocidade Ideal: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Cria um efeito de metal nobre polido impossível de atingir com fios comuns",
      "✔ Menor consumo de pontos na matriz para preencher a mesma área",
      "✔ Peças com acabamento de grife internacional de alta costura"
    ],
    "commonErrors": [
      "❌ Passar a linha plana em tensores sujos com rebarbas, picotando a fita metálica",
      "❌ Usar densidade de ponto muito fechada (< 0,38 mm), amontoando as lâminas",
      "❌ Deixar o carretel em suporte vertical rígido, torcendo a fita na subida"
    ],
    "voceSabia": "A técnica de bordar com fitas metálicas planas nasceu na corte do Rei Luís XIV, na França (o Rei Sol), onde artesãos usavam lâminas finíssimas de ouro martelado chamadas 'laminettes' para cobrir as casacas do rei com reflexo de espelho puro!",
    "curiosidadeTecnica": "Por ser uma fita plana microscópica, cada ponto de Lamex cobre quase o dobro da largura de uma linha cilíndrica tradicional; por isso, ao digitalizar matrizes para Lamex, o programador deve abrir o espaçamento entre pontos em 20%, gerando uma economia de até 2.000 pontos em um bordado médio.",
    "dicaArtrelados": "Ao bordar com fio metálico plano Lamex, posicione o carretel deitado horizontalmente ou use um suporte de chão a 40 cm de distância da máquina: isso garante que a fita entre na máquina totalmente reta, sem torcer, deixando o bordado com brilho de espelho perfeito!",
    "comparisonTable": {
      "headers": [
        "Tipo de Fio Metálico",
        "Formato do Perfil",
        "Efeito de Brilho",
        "Toque na Pele"
      ],
      "rows": [
        [
          "Lamex Fita Plana",
          "Plano / Fita Chata (0,38 mm)",
          "Espelho contínuo / Metal Líquido",
          "Liso e macio"
        ],
        [
          "Lurex Torcido Clássico",
          "Redondo / Espiral cilíndrica",
          "Cintilância pontilhada",
          "Levemente áspero"
        ],
        [
          "Fio Metálico Maciço Antigo",
          "Arame metálico",
          "Rígido / Pesado",
          "Áspero / Pinica"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 Metallic com olho oval largo",
      "stabilizer": "Entretela Rasgável Macia ou Recorte conforme o tecido",
      "threadTension": "80 a 90 gf (tensão aliviada)",
      "density": "0.48 mm com underlays abertos"
    },
    "applications": [
      "Brasões militares de gala, condecorações e insígnias honoríficas",
      "Vestidos de noiva de alta costura, véus e mantilhas de casamento",
      "Figurinos de teatro de época, mantos reais e trajes litúrgicos",
      "Logotipos de luxo para marcas de perfumes, joias e champanhes"
    ],
    "troubleshootingTips": [
      "Se a fita torcer durante o bordado, coloque uma redinha elástica macia no carretel",
      "Aumente a compensação de repuxo para 0,35 mm no software para compensar a largura da fita",
      "Diminua a velocidade da máquina para 600 PPM para evitar que a fita dobre no olho da agulha"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Lurex & Fios Cintilantes",
      "Agulha Metallic",
      "Densidade de Pontos",
      "Tensão de Linha"
    ],
    "tags": [
      "l-089",
      "lamex",
      "fio metalico plano",
      "fita metalica",
      "metal liquido",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "VALOIS, Hélène. Metallic Ribbon and Lamé Threads in Haute Couture. Paris, 2021.",
      "PARRISH, Gail. Flat Metallic Ribbon Embroidery Techniques and Machine Tensioning. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um carretel de Lamex dourado com suporte horizontal e agulha 80/12 Metallic. Digitalize uma letra 'L' clássica de 5 cm com densidade aberta de 0,48 mm. Borde a 600 PPM. Veja como a superfície parece uma chapa de ouro de verdade!",
    "quickSummary": "Linha metálica em formato de microfita plana que cria efeitos de espelho líquido e ouro polido.",
    "beginnerExplanation": "O Lamex é como uma fita de ouro microscópica e bem chatinha. Quando a máquina borda, os pontinhos deitam no tecido como placas de espelho, fazendo o bordado brilhar como ouro de verdade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-090-linha-monofilamento-de-poliamida-fio-invisivel-transparente",
    "code": "L-090",
    "term": "Linha Monofilamento de Poliamida: Fio Invisível Transparente (Nylon Monofilament Invisible Thread)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego monos (único) e filum (filamento). Fibra sintética desenvolvida no século XX.",
    "summary": "Filamento único 100% transparente de náilon ultrafino utilizado para costuras invisíveis de fixação de apliques, cordões, lantejoulas e soutaches.",
    "definition": "Linha Monofilamento de Poliamida (Clear Invisible Nylon / Polyamide Embroidery Thread) é um fio composto por um filamento único contínuo e transparente (disponível em versão cristal translúcido para tecidos claros e fumê escuro para tecidos pretos). No bordado computadorizado e na confecção, é utilizado para fixar apliques, cordões dourados (*couching*), fitas de lantejoulas e bainhas sem que os pontos fiquem visíveis na superfície, assumindo a cor exata do tecido ou do aviamento que está sendo fixado.",
    "technicalDetails": "Diâmetro ultrafino de 0,08 mm a 0,12 mm (cerca de 50 a 80 dtex). Ponto de fusão de 210°C a 260°C. 100% poliamida virgem de alta flexibilidade e elasticidade controlada.",
    "construction": [
      "Carretel de linha monofilamento de poliamida transparente ultrafina",
      "Redinha protetora de carretel para evitar desenrolamento descontrolado",
      "Agulha fina 65/9 ou 70/10 Microtex com olho polido",
      "Tensão superior aliviada em 30% em relação à linha comum de poliéster",
      "Linha de bobina de poliéster 60wt macio na cor do tecido de fundo"
    ],
    "howItWorks": [
      "1. A linha invisível passa suavemente pelas guias com a redinha no carretel.",
      "2. A máquina borda pontos de fixação (zigue-zague ou ponto corrido) sobre o aplique ou cordão.",
      "3. Por ser 100% transparente, a linha deixa passar a luz e a cor do material abaixo.",
      "4. A laçada inferior é travada de forma discreta pela linha da bobina.",
      "5. O aplique ou cordão soutache fica firmemente preso sem nenhuma linha colorida aparente.",
      "6. A peça ganha um acabamento limpo, minimalista e de alta costura.",
      "7. Na lavagem, o monofilamento de alta qualidade mantém a maleabilidade sem ressecar."
    ],
    "mainTypes": [
      "Monofilamento Cristal Transparente (Incolor para tecidos brancos, claros e coloridos)",
      "Monofilamento Fumê Escuro (Translúcido escurecido para tecidos pretos, marinhos e grafite)",
      "Monofilamento Termorresistente (Especial para suportar passadeiras a vapor e lavanderias)"
    ],
    "characteristics": [
      "Invisibilidade visual quase total a mais de 30 cm de distância",
      "Elimina a necessidade de trocar a cor da linha a cada novo aplique colorido",
      "Altíssima resistência mecânica à tração e ao rompimento",
      "Toque flexível quando utilizada a espessura correta (0,08 mm)"
    ],
    "limitations": [
      "Não utilizar linhas grossas de pesca que endurecem e arranham a pele",
      "Evitar passar ferro quente seco com temperatura acima de 150°C diretamente sobre o fio",
      "Exige controle da ponta do fio no corte para que não fique pontinha espetando no avesso"
    ],
    "numberingSystem": [
      "Diâmetro Recomendado: 0,08 mm a 0,10 mm",
      "Tensão de Trabalho: 75 a 85 gf (aliviada)",
      "Velocidade Indicada: 650 a 750 PPM"
    ],
    "advantages": [
      "✔ Economia imensa de tempo em matrizes de aplique com muitas cores diferentes",
      "✔ Fixação perfeita de cordões e fitas de soutache sem esconder seus detalhes",
      "✔ Acabamento sofisticado e limpo em vestidos de noiva e alta costura"
    ],
    "commonErrors": [
      "❌ Usar linha de náilon comum de pesca que é grossa, dura e machuca a pele",
      "❌ Apertar a tensão demais, fazendo a linha esticar e franzir todo o tecido após o bordado",
      "❌ Passar ferro quente na regulagem de algodão, derretendo a linha transparente"
    ],
    "voceSabia": "A poliamida (náilon) foi a primeira fibra sintética criada pela ciência em laboratório em 1935; antes dela, as costuras invisíveis de alta costura eram feitas desfiando cabelos humanos claros de freiras e artesãs para costurar pérolas em mantos reais!",
    "curiosidadeTecnica": "O índice de refração do monofilamento de poliamida transparente de boa qualidade é de 1,53, que é praticamente idêntico ao índice de refração da luz nas fibras de seda e poliéster, fazendo com que a linha 'suma' opticamente aos olhos humanos.",
    "dicaArtrelados": "Ao usar linha invisível na máquina de bordar, coloque sempre a redinha no carretel e regule a tensão superior bem frouxinha: a linha invisível tem elasticidade e, se você puxar muito, ela estica na hora do ponto e depois encolhe, enrugando o seu tecido!",
    "comparisonTable": {
      "headers": [
        "Tipo de Fio de Fixação",
        "Visibilidade",
        "Tempo de Troca de Cor",
        "Toque Final"
      ],
      "rows": [
        [
          "Monofilamento 0,08 mm",
          "100% Invisível",
          "Zero (Uma única linha fixa tudo)",
          "Macio e imperceptível"
        ],
        [
          "Linha de Poliéster Colorida",
          "Visível (cor correspondente)",
          "Exige trocar o cone a cada cor",
          "Acetinado"
        ],
        [
          "Fio de Pesca Comum",
          "Visível / Rígido",
          "Zero",
          "Duro / Espeta a pele"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 Microtex ou 65/9 Sharp",
      "stabilizer": "Adequado ao tecido da peça",
      "threadTension": "75 a 85 gf (aliviada)",
      "density": "Pontos corridos ou zigue-zagues de fixação espaçados"
    },
    "applications": [
      "Fixação invisível de apliques multicoloridos em vestidos e jaquetas",
      "Costura de cordões dourados, soutaches e fitas finas no bastidor (Couching)",
      "Aplicação de lantejoulas e pedrarias em vestidos de festa e carnaval",
      "Bainhas invisíveis em cortinas de luxo e barras de vestidos de noiva"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar após o bordado, diminua a tensão da linha superior em 15 gf",
      "Use tesourinha de microprecisão bem afiada para aparar as pontas rentes",
      "Passe ferro sempre com pano úmido protetor em temperatura morna"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Aplique no Bastidor",
      "Couching Stitch (Bordado com Cordão)",
      "Lantejoulas & Paetês",
      "Tensão de Linha"
    ],
    "tags": [
      "l-090",
      "linha invisivel",
      "monofilamento",
      "poliamida",
      "fio transparente",
      "apliques",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MILLER, Arthur. Synthetic Invisible Monofilaments in Apparel and Quilting. Chicago, 2021.",
      "PARRISH, Gail. Invisible Thread Applications in Modern Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue 3 retalhos de cores diferentes (vermelho, amarelo, azul) e monte um aplique sobre um pano branco. Use linha invisível na agulha superior. Borde o contorno de fixação de todos os 3 apliques sem trocar de linha uma única vez. Veja como os apliques ficam limpos e perfeitos!",
    "quickSummary": "Linha 100% transparente que assume a cor do tecido para fixação invisível de apliques e cordões.",
    "beginnerExplanation": "A linha invisível é aquele fio transparente que parece mágica: você costura apliques de qualquer cor com ela e ninguém vê a costura, parecendo que o desenho foi colado de tão perfeito!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-091-limpeza-ultrassonica-e-manutencao-de-caixas-de-bobina",
    "code": "L-091",
    "term": "Limpeza Ultrassônica & Manutenção de Caixas de Bobina (Ultrasonic Cleaning & Bobbin Case Maintenance)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim ultra (além) e sonus (som). Tecnologia acústica de desincrustação mecânica.",
    "summary": "Método de manutenção profunda que utiliza ondas sonoras de alta frequência em cuba líquida para desincrustar resíduos de cola em spray, óleo oxidado e fiapos microscópicos das caixas de bobina.",
    "definition": "Limpeza Ultrassônica & Manutenção de Caixas de Bobina (Ultrasonic Bobbin Case & Rotary Hook Restoration) é o procedimento técnico de higienização de componentes de precisão mecânica através de cubas ultrassônicas (frequência de 40 kHz). As ondas acústicas criam microbolhas de cavitação no líquido desengraxante que implodem com força microscópica, removendo 100% dos resíduos de cola em spray endurecida, fiapos compactados sob a mola tensora e vernizes de óleo velho sem riscar o metal polido nem alterar a curvatura da lâmina micrométrica.",
    "technicalDetails": "Frequência de ultrassom: 40.000 Hz (40 kHz). Temperatura do banho: 45°C a 55°C por 5 a 8 minutos. Solução biodegradável desengraxante neutra diluída a 5% em água desmineralizada.",
    "construction": [
      "Cuba ultrassônica digital de bancada com aquecimento regulável",
      "Solução desengraxante atóxica para peças de precisão em aço e latão",
      "Caixas de bobina, cestos de lançadeira e chapas de agulha desmontadas",
      "Tensiômetro mecânico de bobina (Towa Gauge) para recalibração pós-limpeza",
      "Óleo mineral branco de altíssima pureza para relubrificação imediata"
    ],
    "howItWorks": [
      "1. A mola tensora da caixa de bobina é desparafusada com chave de fenda de relojoeiro.",
      "2. As peças metálicas são imersas na cuba ultrassônica com solução aquecida a 50°C.",
      "3. O gerador de ultrassom é ativado a 40 kHz por 6 minutos.",
      "4. Milhões de microbolhas cavitacionais soltam toda a cola grudada e o pó de linha escondido.",
      "5. As peças são enxaguadas em álcool isopropílico para rápida evaporação da umidade.",
      "6. Secam-se as peças com jato de ar comprimido e aplica-se uma micro-gota de óleo fino.",
      "7. A mola é remontada e a tensão é aferida no tensiômetro Towa para exatamente 20 a 22 gramas-força.",
      "8. A caixa de bobina volta a operar com a precisão de uma peça nova de fábrica."
    ],
    "mainTypes": [
      "Banho Ultrassônico Periódico (A cada 3 meses para ateliês com uso intenso de cola spray)",
      "Desincrustação Química de Emergência (Para caixas travadas por linha fundida ou cola seca)",
      "Polimento Microscópico de Mola Tensora (Com lixa d'água 3000 para remover microrranhuras)"
    ],
    "characteristics": [
      "Remoção absoluta de sujeiras microscópicas inacessíveis por pincéis ou panos",
      "Estabilização imediata da tensão da linha da bobina em toda a faixa de velocidade",
      "Prevenção contra corrosão e desgaste prematuro das peças móveis de aço",
      "Economia financeira evitando a troca desnecessária de caixas de bobina caras"
    ],
    "limitations": [
      "Não colocar peças plásticas sensíveis ou ímãs de neodímio em temperaturas acima de 60°C",
      "Secar rigorosamente as peças após o banho para evitar qualquer ponto de oxidação",
      "Exige chave de fenda de tamanho exato para não espanar o minúsculo parafuso de tensão"
    ],
    "numberingSystem": [
      "Frequência Ultrassônica: 40 kHz",
      "Tempo de Banho: 5 a 8 minutos",
      "Calibração Towa Final: 20 a 24 gf"
    ],
    "advantages": [
      "✔ Elimina 95% dos problemas misteriosos de tensão irregular de bobina no ateliê",
      "✔ Prolonga a vida útil das caixas de bobina em mais de 5 anos",
      "✔ Recupera caixas de bobina consideradas perdidas por excesso de cola"
    ],
    "commonErrors": [
      "❌ Passar agulha ou estilete de aço embaixo da mola tensora, riscando o metal e estragando a mola",
      "❌ Deixar as peças úmidas sem secagem rápida e sem lubrificação pós-banho",
      "❌ Usar água de torneira com cloro que pode oxidar o aço polido"
    ],
    "voceSabia": "O princípio da cavitação ultrassônica foi descoberto pela marinha britânica em 1895 ao notar que as hélices dos navios torpedeiros criavam bolhas de vácuo tão violentas que arrancavam pedaços de aço; hoje essa mesma força é controlada para limpar com carinho peças microscópicas de máquinas de bordar e relógios suíços!",
    "curiosidadeTecnica": "A passagem de linha com resíduo de cola em spray sob a mola da caixa de bobina aumenta a fricção estática em até 400%, fazendo a tensão real oscilar descontroladamente de 15 gf para 60 gf a cada segundo, o que gera o famoso 'efeito pipoca' no bordado.",
    "dicaArtrelados": "Nunca use agulhas de costura ou arames para limpar a sujeira embaixo da chapinha da caixa de bobina: use um pedaço de cartolina ou papel cartão dobrado com uma gota de álcool isopropílico. O papel desliza macio, puxa toda a sujeira e não risca o metal!",
    "comparisonTable": {
      "headers": [
        "Método de Limpeza",
        "Eficácia na Remoção de Cola",
        "Risco de Danificar a Mola",
        "Tempo Necessário"
      ],
      "rows": [
        [
          "Banho Ultrassônico 40kHz",
          "100% Perfeita (Atômica)",
          "Zero (Sem atrito mecânico)",
          "6 minutos"
        ],
        [
          "Papel Cartão com Álcool",
          "80% Muito Boa",
          "Muito Baixo",
          "2 minutos"
        ],
        [
          "Estilete / Agulha de Aço",
          "40% Ruim",
          "Altíssimo (Risco de riscar a mola)",
          "1 minuto (Não recomendado)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-manutenção: Operação estável até 1.000 PPM",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Calibração precisa em 22 gf no medidor Towa",
      "density": "N/A"
    },
    "applications": [
      "Manutenção preventiva trimestral de ateliês de bordado e estamparias",
      "Recuperação de caixas de bobina travadas por cola temporária de aplique",
      "Higienização de chapas de agulha, garras de corte e bicos de lançadeira",
      "Calibração de precisão em máquinas multicabeçote industriais"
    ],
    "troubleshootingTips": [
      "Se a tensão continuar irregular após a limpeza, verifique se a mola tensora não perdeu a curvatura de fábrica",
      "Utilize sempre um tensiômetro Towa para aferir a saída da linha após a remontagem",
      "Lubrifique o trilho da lançadeira com uma gota de óleo branco antes de reiniciar a produção"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Manutenção Preventiva",
      "Lançadeira Rotativa"
    ],
    "tags": [
      "l-091",
      "limpeza ultrassonica",
      "caixa de bobina",
      "manutencao preventiva",
      "towa gauge",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KLEIN, Gerhard. Ultrasonic Cleaning Technology in Precision Mechanics. Stuttgart, 2021.",
      "PARRISH, Gail. Bobbin Case Maintenance, Tension Gauging and Hook Restoration. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue uma caixa de bobina antiga do ateliê. Passe uma tirinha de papel sulfite dobrado sob a mola tensora e observe a quantidade de sujeira preta e fiapos que saem. Recoloque a bobina e sinta como a linha volta a puxar suave e sem trancos!",
    "quickSummary": "Limpeza profunda por ondas sonoras que remove colas e fiapos da caixa de bobina, restaurando a tensão perfeita.",
    "beginnerExplanation": "A caixa de bobina vai acumulando poeirinha e cola de spray por baixo da chapinha de metal. Fazer essa limpeza tira toda a sujeira escondida e faz o ponto da máquina ficar retinho e macio de novo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-092-lanca-ponto-e-temporizacao-agulha-lancadeira-hook-timing",
    "code": "L-092",
    "term": "Lança-Ponto & Temporização Agulha-Lançadeira (Hook Timing & Loop Lift Synchronization)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do português lançar (arremessar / pescar) e do inglês hook timing (sincronismo de tempo do gancho da lançadeira).",
    "summary": "Calibração micrométrica do sincronismo espacial e temporal entre o movimento de subida da agulha e a passagem do bico da lançadeira para captura perfeita da laçada de linha.",
    "definition": "Lança-Ponto & Temporização Agulha-Lançadeira (Embroidery Hook Timing & Loop Lift Calibration) é o ajuste mecânico fundamental que sincroniza o ponto morto inferior da barra de agulha com a rotação da lançadeira. Quando a agulha atinge o fundo do seu curso e sobe exatamente entre 1,8 mm e 2,2 mm (*loop lift*), a linha superior afrouxa e forma uma laçada perfeita; nesse exato milésimo de segundo, o bico da lançadeira deve cruzar o centro da cava da agulha a uma distância de 0,05 mm a 0,10 mm, garantindo a formação do nó sem bater e sem falhar o ponto.",
    "technicalDetails": "Subida de laçada (*loop lift*): 2,0 mm ± 0,2 mm. Altura do bico da lançadeira: 0,5 mm a 1,0 mm acima do olho da agulha. Folga lateral agulha-bico: 0,05 mm a 0,10 mm (espessura de uma folha de papel fina).",
    "construction": [
      "Volante graduado da máquina com indicador de graus de rotação (Degree Dial)",
      "Gabarito de altura de barra de agulha e pino calibrador de loop lift",
      "Calibre de folga micrométrico de lâminas de 0,05 mm",
      "Chave Allen ou chave de fenda de alta resistência para parafusos de fixação da lançadeira",
      "Lupa de relojoeiro iluminada com ampliação de 10x para inspeção visual do bico"
    ],
    "howItWorks": [
      "1. A máquina é posicionada manualmente no grau de referência de sincronismo (ex: 200° no painel).",
      "2. A agulha desce ao ponto mais baixo e inicia a subida de 2,0 mm para abrir a laçada de linha.",
      "3. O bico afiado da lançadeira rotativa chega exatamente no centro da cava (rebaixo) da agulha.",
      "4. Ajusta-se a folga lateral para 0,05 mm (o bico passa quase encostando, mas sem bater na agulha).",
      "5. O bico entra dentro da laçada fofa de linha e a expande ao redor da caixa de bobina.",
      "6. Os parafusos de fixação do anel da lançadeira são apertados com torque firme e cruzado.",
      "7. Gira-se o volante manualmente para conferir a passagem livre em todos os cabeçotes.",
      "8. A máquina passa a operar em velocidade máxima sem pular nenhum ponto e sem quebrar agulhas."
    ],
    "mainTypes": [
      "Temporização Padrão para Tecidos Planos (Sincronismo a 2,0 mm para camisas e sarjas)",
      "Temporização Atrasada para Bonés e Couro (Loop lift a 2,2 mm para acomodar materiais densos)",
      "Temporização Adiantada para Malhas Elásticas (Loop lift a 1,8 mm para evitar falha em tecidos que sobem com o calcador)"
    ],
    "characteristics": [
      "Eliminação imediata de falhas de ponto (pontos pulados) e arrebentamento constante de linha",
      "Preservação do bico da lançadeira contra lascas e rebarbas provocadas por batidas de agulha",
      "Funcionamento suave e silencioso do cabeçote mecânico em altas velocidades",
      "Padronização da qualidade de bordado entre todos os cabeçotes de máquinas industriais"
    ],
    "limitations": [
      "Exige ferramentas adequadas e conhecimento mecânico para não desregular a posição original",
      "Sempre desligar a máquina da tomada antes de colocar as mãos no compartimento da lançadeira",
      "Nunca bater com martelo ou forçar o eixo da lançadeira"
    ],
    "numberingSystem": [
      "Subida de Laçada (Loop Lift): 1,8 mm a 2,2 mm",
      "Folga Lateral: 0,05 mm a 0,10 mm",
      "Posição Angular no Painel: 198° a 204° (dependendo da marca da máquina)"
    ],
    "advantages": [
      "✔ Resolve o problema mais grave e comum de máquinas que 'não querem bordar de jeito nenhum'",
      "✔ Economiza centenas de reais em visitas de técnicos para ajustes simples de rotina",
      "✔ Garante que bordados em bonés e tecidos difíceis fiquem 100% perfeitos"
    ],
    "commonErrors": [
      "❌ Deixar o bico da lançadeira encostando na agulha, cegando a ponta e quebrando agulhas",
      "❌ Deixar folga excessiva (> 0,3 mm), fazendo o bico passar longe e não pegar a laçada (ponto pulado)",
      "❌ Apertar apenas um parafuso da lançadeira, fazendo o mecanismo girar em falso durante a produção"
    ],
    "voceSabia": "O princípio de temporização agulha-lançadeira é idêntico em todas as máquinas de bordar do mundo, desde a menor máquina doméstica portátil até a maior máquina industrial japonesa de 24 cabeçotes com 10 metros de comprimento!",
    "curiosidadeTecnica": "A laçada de linha é formada pelo fenômeno de atrito dinâmico: quando a agulha sobe 2 mm, o tecido retém a linha por atrito nas fibras enquanto a agulha sobe livre, forçando a linha a expandir para fora no rebaixo da lâmina.",
    "dicaArtrelados": "Se a sua máquina começou a pular pontos do nada após uma agulha quebrar, verifique se a agulha não entortou ou se a lançadeira não saiu do ponto: 90% das vezes, colocar uma agulha nova retinha com a cava virada para trás resolve o problema na hora!",
    "comparisonTable": {
      "headers": [
        "Estado do Sincronismo",
        "Sintoma na Máquina",
        "Causa Mecânica",
        "Solução"
      ],
      "rows": [
        [
          "Sincronismo Perfeito",
          "Pontos perfeitos e sem quebras",
          "Bico a 0,05 mm no centro da cava",
          "Manter regulagem"
        ],
        [
          "Ponto Atrasado",
          "Pula pontos em curvas rápidas",
          "Bico chega tarde após a laçada fechar",
          "Adiantar a lançadeira"
        ],
        [
          "Folga Muito Larga",
          "Linha não dá nó / Costura solta",
          "Lançadeira passa longe da agulha",
          "Aproximar o bico a 0,05 mm"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: 850 a 1.000 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 nova para calibração",
      "stabilizer": "N/A (Calibração mecânica)",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina)",
      "density": "N/A"
    },
    "applications": [
      "Manutenção e calibração de rotina após batidas de agulha em bastidores",
      "Preparação de máquinas para bordados pesados em bonés e couro",
      "Alinhamento e equalização de cabeçotes em máquinas industriais multicabeçote",
      "Diagnóstico de falhas de ponto e quebras sistemáticas de linha"
    ],
    "troubleshootingTips": [
      "Use uma tira de papel sulfite de 75 g/m² como gabarito de folga: o papel deve passar justo entre a agulha e o bico",
      "Verifique sempre se a agulha está encaixada até o fim do curso no bloco da barra antes de calibrar",
      "Passe uma lixa d'água 2000 na ponta da lançadeira para retirar rebarbas antes de apertar os parafusos"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Formação do Ponto (Loop Formation)",
      "Manutenção Preventiva"
    ],
    "tags": [
      "l-092",
      "lanca ponto",
      "hook timing",
      "sincronismo",
      "temporizacao",
      "mecanica de maquinas",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Manual. Rotary Hook Timing and Needle Bar Synchronization. Nagoya, 2021.",
      "PARRISH, Gail. Advanced Hook Timing and Needle Clearance Calibration. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada e sem linha, gire o volante na mão. Olhe pela abertura da chapa de agulha com uma lanterna e observe o momento exato em que a agulha começa a subir e o bico da lançadeira passa atrás dela. É esse encontro milimétrico que faz a mágica do bordado acontecer!",
    "quickSummary": "Ajuste milimétrico do tempo exato em que a lançadeira passa pegando a laçada da agulha para não pular pontos.",
    "beginnerExplanation": "O sincronismo é como um passo de dança perfeito entre a agulha e a lançadeira: a agulha desce e sobe um pouquinho, e no segundo exato a lançadeira passa pegando a linha para fazer o nó. Se esse tempo tiver certinho, a máquina nunca pula ponto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-093-lambrequins-e-galoes-liturgicos-e-tradicionais",
    "code": "L-093",
    "term": "Lambrequins & Galões Litúrgicos e Tradicionais (Ecclesiastical Galloons & Lambrequin Banners)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Estilos & Tradições",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês lambrequin (faixa recortada decorativa de elmos e tendas medievais) e do francês galon (fita tecida com fios de ouro e seda).",
    "summary": "Confecção de faixas ornamentais nobres, estolas e barrados recortados com fios dourados metálicos, veludos pesados e pedrarias para alfaiataria sacra e decoração solene.",
    "definition": "Lambrequins & Galões Litúrgicos (Ecclesiastical Vestments & Heraldic Galloon Embroidery) é a nobre vertente do bordado computadorizado voltada para a ornamentação de estolas sacerdotais, mantos de imagens sacras, casulas, pálio de altar, estandartes processionais e cortinados de castelos e teatros. Caracteriza-se pelo uso de matrizes com motivos florais barrocos, cruzes bizantinas, cálices e arabescos ricamente trabalhados com fios dourados de alta densidade (*Karat gold threads*), veludos pesados, franjas de canutilhos e acabamentos perimetrais em festonê recortável.",
    "technicalDetails": "Bordados em veludos de algodão e sedas nobres (gramatura de 250 a 450 g/m²). Linhas metálicas douradas e prateadas No. 40 combinadas com fios de seda ou raiom fosco. Entretela de recorte resinada pesada (100 g/m²) ou entretelas duplas.",
    "construction": [
      "Base de veludo alemão, damasco ou seda pura brocada",
      "Entretela de recorte pesada de 100 g/m² com filme termocolante no verso",
      "Linhas metálicas douradas de alto padrão (Madeira Metallic / Isafil Gold)",
      "Película hidrossolúvel de topo para conter os pelos do veludo",
      "Matriz com relevos em tatami ornamental e contornos em ponto cheio espesso"
    ],
    "howItWorks": [
      "1. O tecido nobre de veludo ou damasco é posicionado no bastidor com técnica de flutuação.",
      "2. Coloca-se a película hidrossolúvel sobre o veludo para proteger a textura macia.",
      "3. A máquina borda os monogramas sagrados (IHS, Marianos, Cruzes) com fios dourados e prateados.",
      "4. Texturas ricas de tatami em relevo imitam o ouro forjado à mão dos mantos medievais.",
      "5. As bordas do lambrequim são finalizadas com pontos cheios recortáveis em formato de festonê.",
      "6. A peça é recortada no contorno externo e aplicam-se franjas douradas de canutilhos metálicos.",
      "7. A peça sacra ganha imponência solene e reverência estética centenária."
    ],
    "mainTypes": [
      "Galões Litúrgicos para Estolas e Casulas (Faixas bordadas de 8 a 15 cm de largura com cruzes e arabescos)",
      "Lambrequins de Altar e Pálio (Bandeiras recortadas suspensas com pontas em festonê e franjas)",
      "Estandartes Processionais e Pavilhões Heráldicos (Brasões solenes bordados para solenidades e desfiles)"
    ],
    "characteristics": [
      "Altíssima riqueza ornamental e acabamento de majestade",
      "Durabilidade secular em peças que são guardadas como relíquias religiosas",
      "Combinação espetacular de fios dourados com tecidos escuros e nobres (rubi, esmeralda, roxo litúrgico)",
      "Mercado altamente valorizado e com respeito artístico internacional"
    ],
    "limitations": [
      "Exige digitalização impecável para que o fio metálico não se sobreponha em excesso",
      "O veludo nunca deve ser prensado diretamente com o ferro quente",
      "Requer velocidade moderada de bordado (550 a 650 PPM) para proteger os fios dourados"
    ],
    "numberingSystem": [
      "Largura do Galão: 80 mm a 160 mm",
      "Densidade dos Pontos Cheios: 0,42 mm a 0,45 mm",
      "Gramatura do Veludo: 300 a 450 g/m²"
    ],
    "advantages": [
      "✔ É o nicho de maior valor agregado do bordado mundial (peças vendidas por milhares de reais)",
      "✔ Demanda constante de igrejas, mosteiros, irmandades e grupos tradicionalistas",
      "✔ Trabalho de prestígio artístico incomparável para o portfólio do ateliê"
    ],
    "commonErrors": [
      "❌ Marcar o veludo com o aro do bastidor: o veludo deve ser sempre flutuado com adesivo temporário",
      "❌ Usar linha dourada de baixa qualidade que oxida e fica preta em poucos anos",
      "❌ Cortar o tecido de veludo muito perto do ponto cheio, fazendo a borda desfiar"
    ],
    "voceSabia": "Muitos mantos bordados no século XVII para igrejas barrocas de Minas Gerais e de Roma continuam sendo usados em procissões solenes até hoje, com seus fios de ouro brilhando intactos após mais de 300 anos!",
    "curiosidadeTecnica": "Nas matrizes para arte sacra, os ângulos dos pontos de tatami dourado são rotacionados em setores de 45 graus para imitar a técnica milenar de 'ouro trabalhado' (*opus aurifrigium*), fazendo a luz de velas se refletir em diferentes direções como se o bordado emitisse luz própria.",
    "dicaArtrelados": "Ao bordar peças em veludo litúrgico ou mantos sacros, flutue sempre o veludo sobre entretela colada e coloque filme solúvel por cima: ao terminar, use um vaporizador de roupas a vapor para levantar os pelos do veludo ao redor do bordado. Fica magnífico!",
    "comparisonTable": {
      "headers": [
        "Elemento Tradicional",
        "Tecido Nobre",
        "Tipo de Linha",
        "Uso Solene"
      ],
      "rows": [
        [
          "Galão Litúrgico",
          "Damasco e Seda brocada",
          "Fio Dourado Metálico 40",
          "Estolas e casulas sacerdotais"
        ],
        [
          "Lambrequim Tradicional",
          "Veludo Alemão pesado",
          "Ouro Rico e Prata Real",
          "Barrados de altares e teatros"
        ],
        [
          "Estandarte Religioso",
          "Cetim pesado duchese",
          "Fios policromáticos + Ouro",
          "Procissões e festas de padroeiros"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 Metallic ou Titanium SES",
      "stabilizer": "Entretela de Recorte Pesada 100 g/m² + Película Hidrossolúvel de topo",
      "threadTension": "90 a 100 gf (superior suave) e 22 gf (bobina)",
      "density": "0.42 mm com tatami ornamental e underlays firmes"
    },
    "applications": [
      "Estolas sacerdotais, casulas, dalmáticas, mitras e véus de ombro",
      "Mantos para imagens de Nossa Senhora, Santos padroeiros e Menino Jesus",
      "Lambrequins para púlpitos, altares, confessionários e dosséis",
      "Estandartes de congregações, irmandades e ordens de cavalaria"
    ],
    "troubleshootingTips": [
      "Se o veludo marcar, passe vapor quente pelo avesso sem encostar o ferro",
      "Utilize linhas de poliéster metalizado com certificação resistente à transpiração",
      "Aplique fita termocolante na margem de corte dos lambrequins para selar o tecido contra desfiamento"
    ],
    "relatedTerms": [
      "Estilos & Tradições",
      "Lurex & Fios Cintilantes",
      "Técnica de Flutuação no Bastidor",
      "Ponto Festonê",
      "Película Hidrossolúvel"
    ],
    "tags": [
      "l-093",
      "lambrequins",
      "galoes liturgicos",
      "arte sacra",
      "bordado barroco",
      "fios de ouro",
      "estilos e tradicoes",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DE FARIA, Maria Luiza. O Bordado Sacro e a Ornamentação Barroca no Brasil. Belo Horizonte, 2021.",
      "PARRISH, Gail. Ecclesiastical and Heraldic Embroidery Digitizing Traditions. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de veludo escuro (bordô ou azul marinho). Flutue sobre entretela de recorte e coloque plástico solúvel em cima. Borde uma cruz estilizada com linha metálica dourada a 600 PPM. Retire o plástico com vapor: contemple a solenidade e o esplendor da arte sacra!",
    "quickSummary": "Bordados nobres e solenes em veludo com fios dourados para estolas litúrgicas, mantos sacros e altares.",
    "beginnerExplanation": "São aqueles bordados dourados majestosos de igreja, como as faixas dos padres (estolas) e os mantos de santos. A gente usa linha de ouro brilhante sobre tecidos nobres como veludo para criar peças cheias de beleza e respeito!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-094-laminated-fabrics-e-bordado-em-tecidos-dublados",
    "code": "L-094",
    "term": "Laminated Fabrics & Bordado em Tecidos Dublados (Laminated Foam-Backed & Bonded Fabrics)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim lamina (camada fina / chapa sobreposta) e do português dublado (acoplado em camadas).",
    "summary": "Técnicas de bordar em materiais compostos por múltiplas camadas coladas (tecido + espuma de poliuretano + malha de forro ou neoprene) sem esmagar o acolchoado nem deixar marcas de aro.",
    "definition": "Laminated Fabrics & Tecidos Dublados (Foam-Laminated & Sandwich Bonded Fabrics) são materiais têxteis estruturados formados pela união térmica ou por adesivo de duas ou mais camadas (ex.: courvin dublado com espuma de 3 a 5 mm e malha, neoprene dublado ou sarja acoplada com manta). No bordado eletrônico, a presença da espuma elástica intermediária exige controle de compressão no aro (uso de bastidores magnéticos ou flutuação), compensação de repuxo reforçada e agulhas com ponta cortante suave para não repuxar a espuma interna.",
    "technicalDetails": "Espessura total do laminado: 2,0 mm a 8,0 mm. Espuma interna de densidade D28 a D33. Agulha 80/12 ou 90/14 SES / SD (ponta redonda com microfaca suave). Compensação de repuxo de 0,40 mm a 0,50 mm.",
    "construction": [
      "Tecido dublado (Courvin + Espuma PU + Forro de helanca)",
      "Entretela de recorte média (PolyMesh 60 g/m²) ou filme estabilizador",
      "Bastidor magnético de alta aderência ou técnica de flutuação com cola temporária",
      "Linha de poliéster 40wt de alta resistência à abrasão",
      "Agulha de titânio 80/12 ou 90/14 de penetração suave"
    ],
    "howItWorks": [
      "1. O material dublado é fixado no bastidor sem esmagar a espuma (preferência por bastidor magnético).",
      "2. A máquina borda uma linha de assentamento perimetral para compactar suavemente a área do desenho.",
      "3. A matriz preenche os motivos com densidade equilibrada de 0,40 mm a 0,45 mm.",
      "4. A espuma intermediária confere um relevo acolchoado natural em volta dos pontos cheios.",
      "5. A agulha penetra todas as camadas sem repuxar a malha do forro inferior.",
      "6. A peça é liberada do bastidor com a espuma recuperando 100% da sua espessura original.",
      "7. O resultado é um produto acolchoado de altíssimo padrão para bancos automotivos e bolsas."
    ],
    "mainTypes": [
      "Courvin Dublado Automotivo (Com espuma de 3 mm a 6 mm para bancos de carros e motos)",
      "Neoprene Dublado com Helanca (Para capas de notebook, roupas de mergulho e porta-copos)",
      "Tecido de Mochila Dublado com EVA (Para painéis de bolsas, estojos e mochilas térmicas)"
    ],
    "characteristics": [
      "Efeito acolchoado volumoso com toque fofo e confortável",
      "Estrutura rígida e encorpada que dispensa o uso de forros adicionais",
      "Excelente isolamento térmico e acústico do produto final",
      "Visual sofisticado e esportivo muito valorizado no setor de acessórios"
    ],
    "limitations": [
      "Nunca apertar o aro de bastidor tradicional com parafuso excessivo para não deixar marcas eternas na espuma",
      "Evitar densidades excessivamente pesadas que esmagam e furam a espuma como um queijo suíço",
      "Não passar ferro quente direto sobre o courvin dublado para não derreter o laminado"
    ],
    "numberingSystem": [
      "Espessura da Espuma: 3 mm a 6 mm",
      "Compensação de Repuxo: 0,40 mm a 0,50 mm",
      "Densidade Recomendada: 0,42 mm a 0,46 mm"
    ],
    "advantages": [
      "✔ Nicho muito lucrativo em customização automotiva, capas de bancos e bolsas",
      "✔ O próprio tecido cria um relevo 3D natural e acolchoado sem precisar de EVA avulso",
      "✔ Agilidade na produção com peças estruturadas e fáceis de manusear"
    ],
    "commonErrors": [
      "❌ Apertar o aro do bastidor tradicional na marra, deixando marcas de vinco permanentes na espuma",
      "❌ Usar compensação de repuxo padrão (0,20 mm), fazendo o desenho fechar e deformar",
      "❌ Puxar a linha solta por baixo com força, descolando a camada de forro da espuma"
    ],
    "voceSabia": "A dublagem de tecidos com espuma nasceu na indústria de aviação nos anos 1950 para isolar as cabines de passageiros do frio extremo de grandes altitudes; hoje é o padrão absoluto nos bancos de couro de carros de luxo como Mercedes e BMW!",
    "curiosidadeTecnica": "Quando o calcador da máquina comprime o tecido dublado, a espuma afunda cerca de 60% e depois retorna rapidamente (*spring back*); por isso, a altura do calcador deve ser regulada 1 mm mais alta do que o habitual para evitar o arraste do material.",
    "dicaArtrelados": "Ao bordar courvin ou tecido dublado com espuma em bastidores convencionais, cole tiras de feltro adesivo ou fita crepe grossa nas bordas do aro plástico do bastidor: isso amortece o aperto e impede que a máquina deixe marcas ou 'marcas de aro' na sua peça!",
    "comparisonTable": {
      "headers": [
        "Material Dublado",
        "Espessura Média",
        "Método de Bastidor",
        "Aplicação Típica"
      ],
      "rows": [
        [
          "Courvin Automotivo Dublado",
          "4 mm a 6 mm",
          "Bastidor Magnético ou Flutuação",
          "Bancos de carros, motos e cabeceiras"
        ],
        [
          "Neoprene Dublado",
          "2 mm a 4 mm",
          "Bastidor Magnético ou Tradicional Suave",
          "Capas térmicas, estojos e moda praia"
        ],
        [
          "Sarja Acoplada com Espuma",
          "3 mm",
          "Flutuação com cola temporária",
          "Bolsas femininas e necessaires"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 SES ou 90/14 Leather SD",
      "stabilizer": "Entretela de Recorte Média 60 g/m²",
      "threadTension": "115 gf (superior firme) e 24 gf (bobina)",
      "density": "0.44 mm com compensação de repuxo de 0,45 mm"
    },
    "applications": [
      "Encostos de cabeça e assentos de bancos de carros personalizados e motos",
      "Capas de notebook em neoprene, estojos e luvas térmicas",
      "Necessaires acolchoadas, bolsas femininas estruturadas e malas de viagem",
      "Painéis de cabeceira de cama estofados em capitonê bordado"
    ],
    "troubleshootingTips": [
      "Se o aro marcar o courvin, aplique ar quente suave com secador de cabelo a 15 cm para desmarcar a espuma",
      "Aumente a compensação de repuxo no software caso círculos fiquem ovais pelo afundamento da espuma",
      "Suba a altura do calcador da máquina em 1 mm para não arrastar o tecido acolchoado"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bastidores Magnéticos",
      "Compensação de Repuxo",
      "Técnica de Flutuação no Bastidor",
      "Bordado em Couro & Courvin"
    ],
    "tags": [
      "l-094",
      "tecidos dublados",
      "laminated fabrics",
      "espuma",
      "automotivo",
      "neoprene",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SCHNEIDER, Wolfgang. Laminated Textile Structures and Automotive Upholstery. Frankfurt, 2021.",
      "PARRISH, Gail. Machine Embroidery on Foam-Backed and Bonded Composite Fabrics. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido dublado com espuma (como um pedaço de neoprene ou courvin de banco). Flutue sobre entretela de recorte sem prensar o aro com força. Borde um logotipo com compensação de repuxo de 0,45 mm. Veja como o desenho fica acolchoado com relevo natural lindo!",
    "quickSummary": "Bordados em materiais acoplados com espuma sem deixar marcas de aro e com relevo acolchoado natural.",
    "beginnerExplanation": "Tecido dublado é aquele que vem colado com uma camadinha de espuma fofa por dentro, como banco de carro e capinhas de notebook. A gente borda nele sem apertar muito o bastidor para o desenho ficar lindo e fofinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-095-lycra-e-tecidos-de-alta-compressao-esportiva",
    "code": "L-095",
    "term": "Lycra & Tecidos de Alta Compressão Esportiva (Lycra, Spandex & High-Compression Activewear)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Marca registrada pela DuPont em 1958 para o elastano / spandex (poliuretano segmentado ultra-elástico).",
    "summary": "Bordado em tecidos de moda fitness, maiôs e sungas com 15% a 30% de elastano que exigem entretelas elásticas No-Show Mesh, agulhas de ponta bola fina e underlays flexíveis.",
    "definition": "Lycra & Tecidos de Alta Compressão (Spandex Activewear & Performance Stretch Fabrics) são malhas sintéticas compostas por poliamida ou poliéster combinadas com altas proporções de elastano (Lycra). Por esticarem em todas as direções (4-way stretch) e exercerem forte compressão muscular no corpo, o bordado computadorizado exige agulhas com ponta bola fina (70/10 ou 75/11 SES) para não cortar os filamentos de elastano, entretelas de recorte flexíveis multidirecionais (*No-Show PolyMesh*) e matrizes com densidade aberta e underlays flexíveis que se movem com o corpo sem rasgar a malha.",
    "technicalDetails": "Composição típica: 75% a 85% Poliamida e 15% a 25% Elastano (Lycra). Elasticidade bidirecional superior a 80%. Agulha 70/10 SES Ponta Bola Leve ou 75/11 Ball Point. Entretela No-Show Mesh de recorte térmico (50 g/m²).",
    "construction": [
      "Tecido de Lycra fitness ou malha de compressão esportiva",
      "Entretela de recorte especial para malhas (No-Show PolyMesh 50 g/m²)",
      "Linha de poliéster 40wt macia e flexível",
      "Spray adesivo temporário para fixação sem estiramento no bastidor",
      "Agulha de ponta bola 70/10 SES para preservar as fibras elásticas"
    ],
    "howItWorks": [
      "1. A entretela No-Show Mesh é presa no bastidor bem esticada como um tambor.",
      "2. Borrifa-se adesivo temporário sobre a entretela.",
      "3. A Lycra é posicionada suavemente em cima (técnica de flutuação) no seu estado de repouso natural.",
      "4. A máquina borda um underlay em zigue-zague aberto ou tatami elástico que acompanha os movimentos.",
      "5. A agulha de ponta bola desliza entre as fibras de elastano sem romper nenhuma micro-borracha.",
      "6. O ponto de cobertura é bordado com densidade suave de 0,42 mm.",
      "7. A entretela é recortada rente com tesoura de ponta curva no verso.",
      "8. Ao vestir a peça, o bordado estica confortavelmente junto com a malha no corpo da atleta."
    ],
    "mainTypes": [
      "Lycra Praia e Natação (Resistente ao cloro e salitre para biquínis, maiôs e sungas)",
      "Malha de Compressão Fitness (Suplex de alta gramatura para leggings e tops de academia)",
      "Lycra de Ciclismo com Proteção UV (Para macacões esportivos de alta performance)"
    ],
    "characteristics": [
      "Elasticidade multidirecional extraordinária e rápida recuperação de formato",
      "Toque gelado, secagem ultrarrápida e alto conforto térmico",
      "Bordados que não estouram os pontos mesmo quando a roupa é esticada ao máximo no corpo",
      "Avesso macio que não atrita com a pele durante exercícios físicos intensos"
    ],
    "limitations": [
      "Nunca esticar a Lycra ao prender no bastidor: o tecido enruga feio assim que for retirado da máquina",
      "Nunca usar agulhas afiadas pontiagudas (Sharp) que cortam o elastano e criam furos na malha",
      "Nunca usar entretela rasgável comum que não tem elasticidade e deforma na primeira lavagem"
    ],
    "numberingSystem": [
      "Teor de Elastano: 15% a 30%",
      "Agulha Obrigatória: 70/10 ou 75/11 SES (Ponta Bola)",
      "Densidade Recomendada: 0,42 mm a 0,45 mm"
    ],
    "advantages": [
      "✔ Atendimento ao gigantesco mercado de moda fitness, academias e moda praia",
      "✔ Peças com acabamento profissional que não rasgam na academia nem na piscina",
      "✔ Alta durabilidade das cores e do brilho mesmo após lavagens diárias"
    ],
    "commonErrors": [
      "❌ Usar agulha de ponta fina que corta o elastano, fazendo a legging desfiar e furar em volta do bordado",
      "❌ Puxar a Lycra para ficar bem esticada no aro, criando um bordado enrugado e repuxado",
      "❌ Usar entretela dura que machuca e pinica o corpo durante os treinos esportivos"
    ],
    "voceSabia": "A palavra 'Spandex' é um anagrama da palavra inglesa 'expands' (expande); o material revolucionou o mundo esportivo nos Jogos Olímpicos de 1968 ao permitir que atletas usassem roupas aerodinâmicas coladas ao corpo!",
    "curiosidadeTecnica": "Os filamentos de elastano dentro da Lycra funcionam como microelásticos de borracha sintética sob constante tensão; se uma agulha pontiaguda cortar um único filamento, ele se retrai para dentro do tecido como um elástico arrebentado, criando um furo que aumenta a cada lavagem.",
    "dicaArtrelados": "Ao bordar leggings de academia e biquínis de Lycra, coloque sempre agulha de ponta bola 70/10 SES nova e flutue a Lycra sobre entretela de malha No-Show Mesh com um toque de spray adesivo: o bordado fica impecável e a roupa estica no corpo sem nunca arrebentar!",
    "comparisonTable": {
      "headers": [
        "Tecido Elástico",
        "Teor de Lycra",
        "Entretela Correta",
        "Agulha Obrigatória"
      ],
      "rows": [
        [
          "Lycra / Suplex Fitness",
          "15% a 25% Elastano",
          "No-Show Mesh de Recorte",
          "70/10 ou 75/11 Ponta Bola (SES)"
        ],
        [
          "Meia Malha de Algodão",
          "0% a 5% Elastano",
          "Rasgável Macia ou Recorte",
          "75/11 Ponta Bola"
        ],
        [
          "Tecido Plano de Sarja",
          "0% Elastano (Rígido)",
          "Rasgável Comum",
          "80/12 Ponta Normal (R)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "70/10 SES Ponta Bola Leve",
      "stabilizer": "Entretela No-Show Mesh de Recorte Flexível 50 g/m²",
      "threadTension": "100 a 110 gf (superior macia) e 20 gf (bobina)",
      "density": "0.42 mm com underlays abertos em zigue-zague"
    },
    "applications": [
      "Leggings de academia, tops esportivos, bermudas de compressão e macacões fitness",
      "Biquínis, maiôs de natação, sungas e saídas de praia em Lycra",
      "Uniformes de ginástica artística, patinação e roupas de ciclismo",
      "Faixas de cabeça esportivas e munhequeiras de compressão"
    ],
    "troubleshootingTips": [
      "Se surgirem pequenos furinhos ao redor do bordado após o uso, troque imediatamente a agulha por uma Ponta Bola 70/10",
      "Recorte a entretela No-Show Mesh no verso com tesoura curva deixando uma margem redonda de 5 mm",
      "Evite matrizes com densidades muito pesadas que endureçam a área elástica da malha"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Ponta Bola (Ball Point Needle)",
      "Entretela de Recorte (Cutaway)",
      "Técnica de Flutuação no Bastidor",
      "Compensação de Repuxo"
    ],
    "tags": [
      "l-095",
      "lycra",
      "spandex",
      "fitness",
      "alta compressao",
      "moda praia",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GUPTA, Bhuvenesh. Activewear Performance Fabrics and Stretch Embroidery. New Delhi, 2021.",
      "PARRISH, Gail. Machine Embroidery on High-Elastane and Compression Knits. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de Lycra fitness. Prenda entretela No-Show Mesh no bastidor e flutue a Lycra com adesivo sem esticar. Coloque agulha 70/10 Ponta Bola. Borde um logotipo fitness de 4 cm. Ao tirar do bastidor, puxe a malha com as duas mãos: veja como o bordado estica e volta perfeitamente sem arrebentar!",
    "quickSummary": "Técnica para bordar em tecidos super elásticos de academia e praia com agulha ponta bola e entretela flexível.",
    "beginnerExplanation": "Lycra é aquele tecido elástico de roupa de academia e biquíni. Para bordar nele sem furar e sem enrugar, a gente usa uma agulha com pontinha redondinha que não machuca o elástico e entretela macia de malha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-096-lock-stitch-ponto-de-amarracao-e-arremate-de-seguranca",
    "code": "L-096",
    "term": "Lock Stitch: Ponto de Amarração e Arremate de Segurança (Tie-In, Tie-Off & Secure Lock Stitches)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês lock (trancar / travar) e stitch (ponto de costura).",
    "summary": "Algoritmo de micropontos de segurança programados no início (Tie-In) e no final (Tie-Off) de cada objeto da matriz para travar os fios e impedir que o bordado desfie.",
    "definition": "Lock Stitch (Ponto de Amarração e Arremate de Segurança / Tie-In & Tie-Off) é a sequência matemática de 3 a 5 micropontos de travamento (de 0,4 mm a 0,8 mm) posicionados estrategicamente na entrada e na saída de cada elemento bordado antes e depois de cada corte de linha (*trim*). Essa amarração trava a linha superior com a linha da bobina através de pequenos cruzamentos de nó sob a coluna de pontos principais, garantindo que o bordado suporte centenas de lavagens industriais sem soltar pontas de linha e sem se desmanchar.",
    "technicalDetails": "Comprimento dos micropontos: 0,4 mm a 0,8 mm. Número de pontos de trava: 3 a 5 pontos. Padrões de arremate: Estrela (Star Lock), Linha Reta (Linear Walk Lock) e Zigue-Zague Cruzado (Cross Lock).",
    "construction": [
      "Software de digitalização com módulos de arremate automático (Auto Tie-In / Auto Tie-Off)",
      "Algoritmo de detecção de corte de linha na sequência da matriz",
      "Linha superior e de bobina calibradas com tensão balanceada",
      "Faca de corte da máquina regulada para puxar o rabicho de linha correto pós-arremate",
      "Ocultação dos micropontos sob as colunas de ponto cheio ou tatami"
    ],
    "howItWorks": [
      "1. Ao iniciar um novo objeto, a máquina executa 3 micropontos de Tie-In (amarração inicial).",
      "2. O nó prende firmemente a ponta da linha no tecido antes de acelerar para a velocidade máxima.",
      "3. A máquina borda o desenho principal (letras, figuras ou fundos) cobrindo os micropontos iniciais.",
      "4. Ao chegar no final do objeto, a máquina desacelera suavemente.",
      "5. Executa 4 micropontos de Tie-Off (amarração final) escondidos sob o último ponto cheio.",
      "6. A faca de corte corta a linha por baixo da chapa de agulha.",
      "7. A ponta cortada fica 100% trancada no nó, impedindo qualquer desfiamento futuro."
    ],
    "mainTypes": [
      "Tie-In / Arremate Inicial (Prende a linha nova na entrada para que o primeiro ponto não solte)",
      "Tie-Off / Arremate Final (Trava a linha antes do corte automático para não desfiar na lavagem)",
      "Micro-Lock para Letras Minúsculas (Pontos microscópicos de 0,3 mm que não criam bolinhas visíveis em textos pequenos)"
    ],
    "characteristics": [
      "Garantia absoluta de durabilidade do bordado contra desfiamento na máquina de lavar",
      "Eliminação de paradas de máquina por linha que escapa da agulha no arranque",
      "Acabamento invisível com os nós totalmente camuflados sob os pontos decorativos",
      "Padronização técnica exigida por marcas esportivas e grifes internacionais"
    ],
    "limitations": [
      "Não programar pontos de arremate muito longos (> 1,2 mm) que fiquem saindo para fora das bordas",
      "Não colocar mais de 6 pontos de arremate no mesmo lugar para não quebrar a agulha",
      "Em tecidos muito finos (voil ou seda), o arremate deve ser suave para não criar nódulos duros"
    ],
    "numberingSystem": [
      "Quantidade de Pontos: 3 a 5 micropontos",
      "Comprimento do Ponto de Trava: 0,4 mm a 0,7 mm",
      "Tolerância de Posição: 100% oculto sob o desenho"
    ],
    "advantages": [
      "✔ O bordado nunca desmancha mesmo após 100 lavagens em máquinas de lavar",
      "✔ Reduz em 90% as quebras de linha e desfiamentos nos primeiros 5 pontos de cada cor",
      "✔ Avesso limpo e seguro sem necessidade de dar nós manuais com tesourinha"
    ],
    "commonErrors": [
      "❌ Esquecer de ativar o Tie-Off antes do comando de corte, fazendo o bordado desmanchar na primeira puxada",
      "❌ Fazer arremate fora do desenho, deixando nós feios aparentes na beirada da letra",
      "❌ Colocar muitos pontos de arremate em letras minúsculas, criando um caroço duro de linha"
    ],
    "voceSabia": "A ausência de nós de arremate (*lock stitches*) é a causa número 1 de devoluções de uniformes e toalhas bordadas no comércio; um arremate correto de apenas 4 micropontos custa menos de 1 centésimo de segundo mas garante 10 anos de durabilidade à peça!",
    "curiosidadeTecnica": "Nos softwares de ponta, o algoritmo de *Micro-Tie* calcula a direção do último ponto e posiciona a amarração exatamente no sentido oposto da tração da tesoura de corte, criando um efeito de autofechamento mecânico no nó.",
    "dicaArtrelados": "Ao digitalizar nomes pequenos no software, ative a opção 'Micro-Lock' ou 'Arremate Inteligente': ele faz 3 pontinhos minúsculos que não criam nenhuma bolinha visível no texto, mas travam a linha com tanta força que você pode puxar com a unha que o bordado não solta nunca!",
    "comparisonTable": {
      "headers": [
        "Configuração de Arremate",
        "Resistência à Lavagem",
        "Aspecto Visual",
        "Segurança de Arranque"
      ],
      "rows": [
        [
          "Com Lock Stitch (Tie-In/Out)",
          "100% Inviolável (Não desmancha)",
          "Invisível (Oculto sob os pontos)",
          "Arranque perfeito sem escapar fio"
        ],
        [
          "Sem Lock Stitch (Desativado)",
          "Péssima (Desmancha ao puxar fio)",
          "Limpo temporário",
          "Linha escapa da agulha no início"
        ],
        [
          "Arremate Excessivo Manual",
          "Boa",
          "Caroço visível / Nó duro",
          "Risco de bater agulha"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Desaceleração automática no arremate: 400 PPM",
      "needleType": "Compatível com a produção",
      "stabilizer": "Compatível com a peça",
      "threadTension": "Equilibrada (110 gf superior / 22 gf bobina)",
      "density": "3 a 4 micropontos de 0,5 mm antes de cada corte"
    },
    "applications": [
      "Todas as matrizes de bordado profissional, logotipos, uniformes e enxovais",
      "Bordados em peças infantis, roupas íntimas e moda bebê que exigem toque macio",
      "Uniformes industriais e hospitalares submetidos a lavagens químicas pesadas",
      "Letreiros minúsculos e monogramas de camisaria fina"
    ],
    "troubleshootingTips": [
      "Se as pontas das letras desmancharem ao cortar o excesso de linha, revise as propriedades de Tie-Off no software",
      "Para letras menores que 5 mm, reduza o comprimento do arremate para 0,3 mm",
      "Verifique se a faca móvel de corte não está puxando a linha antes do término do arremate"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Corte de Linha Automático (Trim)",
      "Ordem de Costura (Stitch Sequencing)",
      "Monogramas & Letreiros",
      "Mecânica & Manutenção"
    ],
    "tags": [
      "l-096",
      "lock stitch",
      "tie-in",
      "tie-off",
      "arremate",
      "amarracao de seguranca",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Stitch Locking Algorithms and Quality Tie-Off Digitizing. Sydney, 2021.",
      "PARRISH, Gail. Thread Securing, Tie-In/Tie-Off Mechanics and Trim Management. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra uma matriz no software. Aplique o comando de Arremate Final (Tie-Off) em uma letra. Borde em um retalho, corte o rabicho de linha bem rente com a tesoura e tente puxar a pontinha com uma pinça: sinta a firmeza inquebrável de um ponto de amarração profissional!",
    "quickSummary": "Micropontos de segurança no início e final de cada bordado para travar os fios e nunca desmanchar na lavagem.",
    "beginnerExplanation": "O Lock Stitch é como dar um nozinho cego automático bem escondidinho antes de cortar a linha: a máquina dá 3 pontinhos rápidos no mesmo lugar para a costura nunca mais desmanchar quando a cliente lavar a roupa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-097-long-arm-embroidery-e-bastidores-pantograficos-continuos",
    "code": "L-097",
    "term": "Long-Arm Embroidery & Bastidores Pantográficos Contínuos (Long-Arm Multi-Needle & Roll-to-Roll Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês long-arm (braço longo de grande alcance) e pantograph (pantógrafo mecânico de coordenadas X e Y).",
    "summary": "Sistemas de máquinas industriais de braço estendido e bastidores pantográficos gigantescos para bordados contínuos em colchas de cama, cortinas, rolos de tecido e estofados.",
    "definition": "Long-Arm Embroidery & Pantógrafos Contínuos (Wide-Field Long-Arm & Roll-Fed Embroidery Systems) são máquinas industriais de bordar de grande formato equipadas com braços mecânicos profundos (alcance de 600 mm a 1.200 mm no eixo Y) e sistemas de alimentação contínua rolo a rolo (*roll-to-roll*). Permitem bordar áreas contínuas gigantescas (como colchas king-size, cortinados de teatros, vestidos inteiros sem costura e painéis de tapeçaria) através de movimentação pantográfica sincronizada por fusos de esferas e servo-motores industriais.",
    "technicalDetails": "Área de campo útil: de 600 mm x 1.200 mm até 1.500 mm x 3.000 mm contínuos. Sistema de tração pantográfica por guias lineares temperadas e servo-motores AC de alta resolução (0,01 mm). Alimentadores pneumáticos de tensão de rolo.",
    "construction": [
      "Chassi monobloco de aço estrutural reforçado anti-vibração",
      "Braço longo com profundidade de garganta de 1.000 mm",
      "Mesa pantográfica com rolos desenroladores e tracionadores pneumáticos",
      "Sistema de lubrificação centralizada automática por bomba pressurizada",
      "Painel CNC industrial com leitura contínua de matrizes em gigabytes"
    ],
    "howItWorks": [
      "1. O rolo inteiro de tecido (com manta acrílica e forro) é carregado nos cilindros de alimentação.",
      "2. O sistema pneumático estica o tecido sobre a mesa plana com tensão uniforme de ponta a ponta.",
      "3. O pantógrafo X/Y movimenta o tecido sob os cabeçotes de bordado de longo alcance.",
      "4. A máquina borda padrões contínuos e medalhões gigantescos sem cortes e sem emendas manuais.",
      "5. Ao finalizar o bloco, os rolos avançam automaticamente o tecido para a próxima seção coordenada.",
      "6. Sensores ópticos garantem a emenda perfeitamente invisível entre os blocos bordados.",
      "7. O rolo de tecido sai completamente bordado, pronto para o corte de confecção de colchas de luxo."
    ],
    "mainTypes": [
      "Long-Arm de Cabeçote Único para Quilting de Luxo (Para colchas de casamento e mantas artísticas exclusivas)",
      "Máquina Multi-agulhas Pantográfica Contínua (Para produção industrial de tecidos bordados para confecção)",
      "Sistema de Bastidor de Campo Extremo (Para cortinas monumentais, panos de altar e bandeiras gigantes)"
    ],
    "characteristics": [
      "Capacidade de bordar áreas gigantescas impossíveis em bastidores convencionais",
      "Produção contínua e ininterrupta de rolos inteiros de tecidos nobres",
      "Precisão milimétrica mesmo em deslocamentos pantográficos de mais de 2 metros",
      "Padronização industrial perfeita para o setor de cama, mesa e decoração de interiores"
    ],
    "limitations": [
      "Equipamento de grande porte que exige espaço físico dedicado e piso nivelado",
      "Investimento financeiro elevado voltado para produção industrial e ateliês especializados",
      "Exige calibração rigorosa da tensão dos rolos para não deformar tecidos elásticos"
    ],
    "numberingSystem": [
      "Alcance do Braço: 600 mm a 1.200 mm",
      "Área de Campo Contínuo: até 1.500 mm x 3.000 mm",
      "Velocidade Operacional: 750 a 950 PPM"
    ],
    "advantages": [
      "✔ Criação de colchas de cama inteiras sem nenhuma emenda de bastidor visível",
      "✔ Produtividade em escala industrial para fábricas de enxovais de luxo",
      "✔ Elimina o trabalho manual exaustivo de ficar trocando o tecido de bastidor centenas de vezes"
    ],
    "commonErrors": [
      "❌ Alimentar o tecido torto no rolo, fazendo o bordado perder o esquadro ao longo dos metros",
      "❌ Deixar a tensão da manta frouxa, criando bolsas e rugas no meio da colcha",
      "❌ Esquecer de lubrificar os fusos de esferas do pantógrafo longo, gerando trepidação"
    ],
    "voceSabia": "As máquinas de braço longo (*Long-Arm*) foram criadas nos Estados Unidos no século XIX para que as costureiras pudessem acolchoar colchas de retalhos (*quilts*) gigantescas sem precisar enrolar o edredom inteiro debaixo do braço apertado da máquina comum!",
    "curiosidadeTecnica": "Nos pantógrafos industriais de 3 metros, a inércia do peso do tecido em alta velocidade é compensada por freios eletromagnéticos dinâmicos que param o movimento em menos de 5 milissegundos a cada descida de agulha.",
    "dicaArtrelados": "Mesmo no ateliê com bastidor convencional, você pode simular o efeito de bordado contínuo usando 'Bastidores de Posicionamento' (Endless Hoops) ou matrizes com marcas de encaixe (*Alignment Marks*): você borda um pedaço, avança o tecido e encaixa a cruzeta da máquina na marca anterior. O barrado fica contínuo e sem emendas!",
    "comparisonTable": {
      "headers": [
        "Sistema de Bastidor",
        "Área Máxima de Trabalho",
        "Troca de Tecido",
        "Aplicação Principal"
      ],
      "rows": [
        [
          "Pantógrafo Contínuo Long-Arm",
          "1.500 mm x 3.000 mm contínuos",
          "Automática por rolos",
          "Colchas de cama, cortinas e rolos de tecido"
        ],
        [
          "Bastidor Gigante Jumbo",
          "400 mm x 600 mm",
          "Manual por peça",
          "Jaquetas, bandeiras e almofadas grandes"
        ],
        [
          "Bastidor Convencional",
          "200 mm x 300 mm",
          "Manual a cada desenho",
          "Camisas, toalhas e vestuário"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "80/12 ou 90/14 DBxK5 de alta tenacidade",
      "stabilizer": "Manta acrílica resinada + TNT de forro contínuo",
      "threadTension": "115 gf (superior) e 24 gf (bobina)",
      "density": "0.40 mm com padrões geométricos fluidos"
    },
    "applications": [
      "Colchas de cama king size, edredons de luxo e cobre-leitos bordados",
      "Cortinados monumentais para teatros, auditórios e mansões",
      "Painéis de tapeçaria artística e murais decorativos têxteis",
      "Produção de tecidos bordados por metro para alta costura e alfaiataria"
    ],
    "troubleshootingTips": [
      "Se houver desalinhamento no final do rolo, recalibre os sensores de tração óptica do pantógrafo",
      "Mantenha as guias lineares e fusos limpos e engraxados mensalmente com graxa de lítio branca",
      "Utilize linhas de poliéster em cones industriais grandes de 5.000 metros para evitar trocas frequentes"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Técnicas de Bastidor",
      "Automação & Tecnologia",
      "Manutenção Preventiva",
      "Layout de Matriz"
    ],
    "tags": [
      "l-097",
      "long arm",
      "pantografo continuo",
      "colchas de cama",
      "maquinas industriais",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HARRISON, Christine. Long-Arm Quilting and Continuous Embroidery Automation. Denver, 2021.",
      "PARRISH, Gail. Industrial Wide-Format Embroidery Machines and Pantograph Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie uma matriz de barrado com marcadores de registro (duas cruzetas de alinhamento nas pontas). Borde o primeiro bloco em um tecido longo. Abra o bastidor, avance o tecido, alinhe a agulha na cruzeta e borde o segundo bloco. Experimente a sensação de criar um bordado contínuo infinito!",
    "quickSummary": "Máquinas industriais de braço estendido para bordar colchas de cama inteiras e rolos contínuos de tecido.",
    "beginnerExplanation": "São máquinas gigantes com braços bem compridos e rolos automáticos feitas para bordar colchas de cama de casal enormes e cortinas compridas de uma vez só, sem precisar ficar tirando e pondo o tecido no bastidor!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-098-lurgan-cloth-e-tecidos-de-linho-rustico-para-ponto-cruz",
    "code": "L-098",
    "term": "Lurgan Cloth & Tecidos de Linho Rústico para Ponto Cruz (Lurgan Linen & Evenweave Cross-Stitch Fabrics)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "De Lurgan (cidade histórica de tecelagem de linho na Irlanda do Norte) e do inglês cloth (tecido de trama regular).",
    "summary": "Tecido tradicional de linho puro com contagem rigorosamente idêntica de fios por centímetro na trama e no urdume (Evenweave), perfeito para ponto cruz computadorizado.",
    "definition": "Lurgan Cloth & Linho Evenweave para Ponto Cruz (Counted-Thread Evenweave Linen) é o substrato clássico de linho rústico nobre manufaturado com trama perfeitamente quadrada (mesmo número exato de fios horizontais e verticais por polegada, ex.: 28, 32 ou 36 count). No bordado computadorizado, permite a digitalização e reprodução impecável de matrizes de Ponto Cruz (*Cross Stitch*) e bordados folclóricos eslavos e nórdicos, onde cada cruzeta bordada se alinha matematicamente aos fios naturais do tecido sem distorções geométricas.",
    "technicalDetails": "Contagem de fios: 25 a 36 fios por polegada (Evenweave 100% simétrico). Composição 100% puro linho irlandês ou mistura linho-algodão. Agulha 75/11 SES ou agulha de tapeçaria sem corte para passagem entre os fios.",
    "construction": [
      "Tecido Lurgan Cloth ou Linho Evenweave 28 count lavado e engomado suavemente",
      "Entretela rasgável de algodão macio (Cotton Soft 50 g/m²)",
      "Linha de algodão mercerizado fosco 50wt (para visual idêntico ao ponto cruz manual)",
      "Matriz digitalizada em software com módulo de ponto cruz (Cross Stitch Engine)",
      "Bastidor de madeira ou plástico firme com tensão suave sem deformar as tramas"
    ],
    "howItWorks": [
      "1. O tecido Evenweave é alinhado no bastidor rigorosamente paralelo aos eixos X e Y da máquina.",
      "2. A entretela rasgável de algodão é colocada no verso para estabilização sem rigidez.",
      "3. O software converte a imagem em cruzetas perfeitas de tamanho calibrado (ex.: 1,8 mm x 1,8 mm).",
      "4. A máquina borda cada cruzeta com pontos cruzados diagonais precisos.",
      "5. A linha fosca de algodão mercerizado preenche a cruzeta com textura artesanal inconfundível.",
      "6. A entretela é rasgada suavemente no verso preservando a respirabilidade do linho.",
      "7. A peça é passada a ferro pelo avesso, exibindo um bordado com o charme acolhedor do ponto cruz tradicional feito em minutos."
    ],
    "mainTypes": [
      "Lurgan Cloth 28 Count (Trama média ideal para quadros de cozinha, toalhas de chá e samplers rústicos)",
      "Linho Evenweave Fino 36 Count (Trama fechada para miniaturas botânicas e relicários)",
      "Linho Rústico Burlap / Juta de Trama Regular (Para almofadas campestres e decoração rústica de fazenda)"
    ],
    "characteristics": [
      "Charme artesanal acolhedor que resgata as tradições afetivas de família",
      "Simetria geométrica absoluta das cruzetas graças à trama quadrada do tecido",
      "Velocidade incomparável (faz em 15 minutos o que levaria 3 semanas no ponto cruz manual)",
      "Toque rústico sofisticado que combina perfeitamente com decorações campestres e cottagecore"
    ],
    "limitations": [
      "Exige enquadramento rigorosamente alinhado com a grade do tecido para as cruzetas não ficarem tortas",
      "Não utilizar linhas sintéticas ultrabrilhantes se o objetivo for imitar o ponto cruz manual",
      "O linho deve ser pré-lavado para estabilização dimensional antes do bordado"
    ],
    "numberingSystem": [
      "Contagem de Fios: 28 a 36 count (fios/polegada)",
      "Tamanho da Cruzeta: 1,5 mm a 2,2 mm",
      "Densidade do Ponto: 2 a 4 passadas de linha por cruzeta"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor afetivo e comercial em toalhas de mesa e presentes personalizados",
      "✔ Economia colossal de tempo mantendo a estética tradicional do artesanato manual",
      "✔ Tecido nobre de linho que dura gerações sem se desgastar"
    ],
    "commonErrors": [
      "❌ Enquadrar o tecido torto no bastidor, fazendo o desenho cruzar as linhas da trama de forma diagonal",
      "❌ Usar linha de poliéster com brilho excessivo que destrói a ilusão do ponto cruz manual",
      "❌ Puxar o tecido com força excessiva no bastidor, deformando a contagem quadrada dos fios"
    ],
    "voceSabia": "A cidade de Lurgan, na Irlanda do Norte, foi o coração mundial do linho no século XVIII, produzindo tecidos tão perfeitos e uniformes que eram exportados para as cortes reais de toda a Europa para que as princesas bordassem seus enxovais de casamento!",
    "curiosidadeTecnica": "Nos módulos modernos de *Cross Stitch* de softwares como Wilcom e Embird, você pode programar o número exato de repetições de linha em cada braço da cruzeta (dupla ou tripla) para imitar exatamente a espessura de 2 ou 3 fios da meada de algodão tradicional.",
    "dicaArtrelados": "Ao bordar ponto cruz na máquina computadorizada, use linha de algodão mercerizado fosco na agulha superior e regule a velocidade da máquina para 600 PPM: as cruzetas assentam com uma perfeição tão doce e natural que ninguém acredita que foi feito na máquina!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Ponto Cruz Computadorizado no Linho",
        "Ponto Cruz Manual Tradicional",
        "Ponto Cheio Comum"
      ],
      "rows": [
        [
          "Tempo de Execução",
          "10 a 20 minutos",
          "15 a 40 horas manuais",
          "5 a 10 minutos"
        ],
        [
          "Perfeição das Cruzetas",
          "100% Matemática e idêntica",
          "Variável com a tensão da mão",
          "N/A (Colunas cheias)"
        ],
        [
          "Visual Estético",
          "Artesanal rústico e nostálgico",
          "Artesanal autêntico",
          "Industrial moderno"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "75/11 SES de ponta suave",
      "stabilizer": "Entretela Rasgável Macia de Algodão 50 g/m²",
      "threadTension": "100 gf (superior suave) e 22 gf (bobina)",
      "density": "Cruzetas de 1,8 mm com 2 passadas de linha por braço"
    },
    "applications": [
      "Toalhas de mesa de chá, caminhos de mesa e guardanapos campestres",
      "Quadros de bastidor decorativos de estilo rústico, flores e versículos bíblicos",
      "Enxovais de bebê com motivos folclóricos, animais da floresta e alfabetos clássicos",
      "Almofadas de linho rústico para decoração de casas de campo e fazendas"
    ],
    "troubleshootingTips": [
      "Se as cruzetas parecerem ralas, aumente o número de repetições por braço para 3 no software",
      "Alinhe a borda da trama do tecido com a marcação de grade transparente do bastidor antes de travar o aro",
      "Passe a ferro morno pelo avesso sobre uma toalha fofa para manter as cruzetas em relevo"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Linho Puro Belga e Irlandês",
      "Pontos Básicos & Decorativos",
      "Software de Digitalização",
      "Entretela Rasgável"
    ],
    "tags": [
      "l-098",
      "lurgan cloth",
      "linho evenweave",
      "ponto cruz",
      "cross stitch",
      "artesanato rustico",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "O'NEILL, Sean. The Linen Trade of Lurgan and Ulster Needlecraft Heritage. Belfast, 2021.",
      "PARRISH, Gail. Automated Cross-Stitch Digitizing and Counted-Thread Fabrics. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um tecido de linho rústico de trama quadrada. Digitalize uma pequena flor em ponto cruz de 4 cm no seu software com linha de algodão fosca. Borde a 600 PPM. Coloque a peça em uma moldura de madeira: veja como o bordado ganha uma atmosfera de aconchego e nostalgia irresistível!",
    "quickSummary": "Tecido de linho de trama quadrada simétrica perfeito para ponto cruz computadorizado de estilo rústico.",
    "beginnerExplanation": "É aquele tecido de linho com os quadradinhos da trama bem retinhos e certinhos. A máquina borda ponto cruz nele rapidinho, parecendo aquele bordado de vó feito à mão que demorava um mês para ficar pronto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-099-lampadas-led-espectrais-e-iluminacao-sem-sombra-no-cabecote",
    "code": "L-099",
    "term": "Lâmpadas LED Espectrais & Iluminação Sem Sombra no Cabeçote (Shadowless High-CRI LED Needle Area Lighting)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do acrônimo LED (Light Emitting Diode) e do latim spectrum (imagem luminosa). Tecnologia de iluminação fotométrica moderna.",
    "summary": "Sistemas de iluminação fria de alta fidelidade cromática (CRI > 95) instalados ao redor da barra de agulha para inspeção visual de cores reais e eliminação de sombras nos pontos.",
    "definition": "Lâmpadas LED Espectrais & Iluminação Sem Sombra (High-CRI Shadowless Embroidery Lighting System) são fitas e módulos de diodos emissores de luz (LED) de espectro solar completo com temperatura de cor calibrada entre 5.000K e 6.500K (luz do dia) e Índice de Reprodução de Cor (CRI) superior a 95. Instalados em anel ou barras duplas ao redor do calcador e da chapa de agulha, eliminam totalmente as sombras causadas pelo movimento do estica-fio e do cabeçote, permitindo a identificação instantânea de falhas de ponto, nós, desvios milimétricos de contorno e fidelidade real das cores das linhas.",
    "technicalDetails": "Índice de Reprodução de Cor (CRI): ≥ 95 Ra. Temperatura de Cor: 5.500K a 6.000K (Daylight neutro). Luminância: 1.200 a 2.500 Lux na área da agulha. Consumo energético de 3W a 8W em corrente contínua 12V/24V livre de cintilação (Flicker-Free).",
    "construction": [
      "Anel de micro-LEDs SMD de espectro contínuo montado sob o cabeçote",
      "Lente difusora óptica leitosa de policarbonato para dispersão de luz homogênea",
      "Fonte de alimentação DC estabilizada com dimmer digital de intensidade",
      "Sensor de presença ou chave de acionamento independente do motor",
      "Dissipador térmico de alumínio anodizado para operação fria contínua 24h"
    ],
    "howItWorks": [
      "1. O sistema de LEDs de espectro total banha a área da chapa de agulha com luz branca neutra de 5.500K.",
      "2. A disposição circular ou angular das lâmpadas anula as sombras provocadas pelo calcador móvel.",
      "3. O bordadeiro enxerga as tonalidades exatas das linhas sem a distorção amarelada de lâmpadas incandescentes.",
      "4. Falhas de ponto, pontas de linha soltas e fiapos sob a chapa são identificados instantaneamente.",
      "5. A passagem da linha pelo olho da agulha se torna 100% mais fácil e rápida, sem forçar a vista.",
      "6. A ausência de calor protege tecidos sensíveis e linhas sintéticas contra aquecimento localizado.",
      "7. A produtividade e o conforto visual no ateliê aumentam consideravelmente durante jornadas noturnas."
    ],
    "mainTypes": [
      "Anel de LED Circular de Agulha (Montado diretamente ao redor da barra de agulha para luz 360° sem sombra)",
      "Barra de LED Flexível com Base Magnética (Para fixação rápida na carcaça metálica de qualquer máquina)",
      "Luminária Articulada de Bancada com Luz Solar (Para inspeção final de qualidade e conferência de cores)"
    ],
    "characteristics": [
      "Fidelidade cromática perfeita para combinar tons de linha com logotipos de clientes",
      "Operação 100% fria que não aquece a máquina nem queima os dedos do operador",
      "Zero fadiga ocular para quem passa horas digitalizando e operando máquinas de bordar",
      "Vida útil superior a 50.000 horas contínuas sem necessidade de troca de lâmpadas"
    ],
    "limitations": [
      "Evitar lâmpadas de LED azuis baratas (CRI < 70) que distorcem as cores de linhas verdes e vermelhas",
      "Proteger a fita de LED contra respingos de óleo durante as lubrificações periódicas",
      "Instalar a fiação com trajeto protegido para não enroscar no movimento da barra de agulha"
    ],
    "numberingSystem": [
      "Índice de Cor (CRI): > 95 Ra",
      "Temperatura de Cor: 5.500K a 6.000K",
      "Intensidade Luminosa: 1.500 Lux"
    ],
    "advantages": [
      "✔ Passagem de linha no olho da agulha em 2 segundos sem cansar a visão",
      "✔ Detecção imediata de problemas de ponto antes de estragar a peça",
      "✔ Ambiente de ateliê moderno, profissional e esteticamente iluminado"
    ],
    "commonErrors": [
      "❌ Usar lâmpadas amareladas incandescentes antigas que esquentam e enganam as cores dos tecidos",
      "❌ Iluminar a máquina apenas por trás, criando sombras escuras exatamente na frente da agulha",
      "❌ Usar fitas de LED de baixa qualidade que piscam em alta velocidade (*flicker*), causando dor de cabeça"
    ],
    "voceSabia": "As antigas máquinas de bordar industriais do século XX usavam pequenas lâmpadas de filamento quente que esquentavam tanto a barra de agulha que os operadores chegavam a queimar as pontas dos dedos ao trocar as agulhas; hoje os LEDs modernos iluminam 10 vezes mais consumindo menos que uma lanterna!",
    "curiosidadeTecnica": "O olho humano interpreta cores através de 3 tipos de cones na retina (vermelho, verde e azul); lâmpadas com CRI 95 emitem fótons equilibrados em todo o espectro visível (de 380 a 740 nanômetros), garantindo que um tom de linha bordô não pareça marrom nem preto durante a produção.",
    "dicaArtrelados": "Se a iluminação original da sua máquina de bordar for fraca ou amarelada, cole uma fitinha de LED branco frio (5.500K) de alta intensidade com fita dupla face embaixo do braço da máquina: a área de trabalho se transforma em um estúdio cirúrgico de tão clara, facilitando passar a linha no buraquinho da agulha sem esforço!",
    "comparisonTable": {
      "headers": [
        "Tipo de Iluminação",
        "Fidelidade de Cores (CRI)",
        "Geração de Calor",
        "Presença de Sombras"
      ],
      "rows": [
        [
          "LED Espectral High-CRI",
          "Excelente (CRI > 95)",
          "Zero calor (Totalmente fria)",
          "Nenhuma (Iluminação difusa 360°)"
        ],
        [
          "LED Comum Barato",
          "Ruim (CRI < 70 / Luz azulada)",
          "Baixo",
          "Sombras duras direcionais"
        ],
        [
          "Lâmpada Incandescente Antiga",
          "Média (Luz muito amarela)",
          "Altíssimo (Queima os dedos)",
          "Sombras escuras fortes"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "N/A (Iluminação estática)",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A",
      "threadTension": "N/A",
      "density": "N/A"
    },
    "applications": [
      "Iluminação do cabeçote e área de costura de máquinas domésticas e industriais",
      "Mesa de inspeção final de qualidade e conferência de cores de catálogo",
      "Postos de passagem de linha e enfiamento em ateliês de alta produtividade",
      "Gravação de vídeos e fotografias de bordados em tempo real para redes sociais"
    ],
    "troubleshootingTips": [
      "Se os LEDs piscarem quando o motor acelerar, instale um regulador de tensão independente para a iluminação",
      "Limpe a lente difusora com pano macio seco a cada 15 dias para remover poeira de linha",
      "Utilize interruptor independente para poder manter a luz acesa durante a manutenção da máquina"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Manutenção Preventiva",
      "Sincronismo Agulha-Lançadeira",
      "Linhas & Fios",
      "Automação & Tecnologia"
    ],
    "tags": [
      "l-099",
      "iluminacao led",
      "sem sombra",
      "high cri",
      "luz espectral",
      "conforto visual",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "REA, Mark. The IESNA Lighting Handbook: Human Visual Acuity and High-CRI Illumination. New York, 2021.",
      "PARRISH, Gail. Industrial Sewing Machine Ergonomics and Precision Task Lighting. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque duas linhas de tons muito parecidos (ex.: azul marinho e preto) sob a luz amarela comum do quarto e depois sob a luz de um LED branco puro de 5.500K. Veja como a boa iluminação revela a cor real instantaneamente, evitando erros de troca de linha no ateliê!",
    "quickSummary": "Iluminação de alta tecnologia sem sombras e com cores reais para enxergar cada detalhe do bordado com clareza.",
    "beginnerExplanation": "É aquela luzinha branquinha e brilhante que a gente coloca pertinho da agulha da máquina. Ela não faz sombra, não esquenta os dedos e deixa tudo tão clarinho que passar a linha no buraquinho da agulha fica fácil demais!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-100-luminescence-digitizing-e-mapeamento-de-densidade-para-efeitos-especiais-de-luz",
    "code": "L-100",
    "term": "Luminescence Digitizing & Mapeamento de Densidade para Efeitos Especiais de Luz (Photorealistic Light-Mapping & Luminescence Digitizing)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim lumen (luz) e do inglês digitizing (programação de matrizes). Vertente de arte digital desenvolvida na era moderna do bordado foto-realista.",
    "summary": "Técnica suprema de digitalização artística que mapeia gradientes de densidade, ângulos de reflexão de luz e sobreposições de camadas para criar efeitos hiper-realistas de brilho, neon, chamas e volume tridimensional.",
    "definition": "Luminescence Digitizing & Mapeamento de Densidade para Efeitos Especiais de Luz (Hyper-Realistic Light-Mapping & Stitch Reflection Art) é o ápice da engenharia e da arte de digitalização contemporânea. Consiste em decompor fontes de luz reais em mapas vetoriais de densidade variável (*gradient fills*), variando a penetração da agulha de 0,25 mm a 2,0 mm de espaçamento e combinando ângulos de reflexão especular do fio de poliéster trilobal para simular efeitos de néon brilhante, fogo incandescente, reflexos de lentes (*lens flare*), esferas metálicas cromadas e iluminação volumétrica sem usar fios luminosos físicos.",
    "technicalDetails": "Variação de densidade contínua de 0,30 mm (nas áreas de sombra profunda) até 1,8 mm (nas áreas de halo translúcido). Ângulos de ponto calculados com base no vetor normal da fonte de luz simulada. Até 6 camadas de cores translúcidas sobrepostas com algoritmo de dithering estocástico.",
    "construction": [
      "Software de digitalização avançada com suporte a gradientes de densidade e preenchimentos orgânicos",
      "Paleta cromática de poliéster trilobal de alta luminosidade (de 8 a 15 tons graduados)",
      "Base de tecido preto ou escuro de alto contraste (sarja peletizada ou veludo)",
      "Entretela de recorte de alta estabilidade dimensional (80 g/m²)",
      "Agulha fina 70/10 ou 75/11 SES para micropenetrações sem deformação"
    ],
    "howItWorks": [
      "1. A imagem de referência é analisada identificando o ponto de emissão de luz principal e os halos de difusão.",
      "2. Cria-se a camada de base escura com pontos tatami densos com ângulos que absorvem a luz.",
      "3. As camadas intermediárias de cor são digitalizadas com gradiente de densidade aberta (efeito de transparência).",
      "4. As cores vibrantes de transição (laranja, amarelo, ciano) são intercaladas em micropassadas.",
      "5. O centro da fonte de luz (núcleo incandescente) é bordado em ponto cheio branco puro super denso.",
      "6. Os ângulos das linhas superiores são orientados exatamente para refletir a luz ambiente para os olhos do observador.",
      "7. Ao olhar para a peça bordada, o cérebro humano interpreta o contraste de reflexos como luz própria emitida pelo bordado."
    ],
    "mainTypes": [
      "Efeito Neon Glow (Tubos de néon acesos com halos de luz colorida sobre fundo preto)",
      "Efeito Fogo e Brasas Incandescentes (Chamas realistas com gradientes do vermelho escuro ao amarelo nuclear)",
      "Efeito Esfera Cromada e Ouro Líquido (Reflexos especulares com horizonte curvo e pontos de brilho intenso)"
    ],
    "characteristics": [
      "Impacto visual hipnotizante que faz as pessoas perguntarem se o bordado tem lâmpadas por trás",
      "Profundidade tridimensional absoluta e ilusão perfeita de ótica e luz",
      "Consagração máxima da habilidade artística e técnica do digitalizador",
      "Obras de arte têxteis colecionáveis de altíssimo valor no mercado de luxo e galerias"
    ],
    "limitations": [
      "Exige domínio profundo de teoria das cores, física da luz e software de digitalização avançado",
      "Requer linhas de poliéster trilobal de altíssima qualidade com seção transversal triangular reflexiva",
      "Maior tempo de digitalização e planejamento vetorial em relação a matrizes comerciais comuns"
    ],
    "numberingSystem": [
      "Gradiente de Densidade: 0,30 mm a 1,8 mm",
      "Variação Angular por Objeto: 15° a 30° entre camadas",
      "Camadas Sobrepostas de Luz: 4 a 6 níveis"
    ],
    "advantages": [
      "✔ Criação de bordados artísticos premiados internacionalmente em feiras e bienais têxteis",
      "✔ Eleva o ateliê ao patamar de estúdio de arte de elite, cobrando valores de obra de arte",
      "✔ Demonstração máxima do que a tecnologia e o talento humano podem realizar juntos no bordado"
    ],
    "commonErrors": [
      "❌ Fazer transições duras de cor sem gradiente de densidade, criando listras em vez de luz contínua",
      "❌ Usar o mesmo ângulo de ponto em todas as camadas, anulando o efeito de reflexão especular",
      "❌ Bordar em tecido claro onde o contraste da luz se perde completamente"
    ],
    "voceSabia": "A técnica de mapeamento de luz no bordado é inspirada na pintura barroca do século XVII chamada *Chiaroscuro* (Claro-Escuro), imortalizada por mestres como Caravaggio e Rembrandt, que usavam fundos negros profundos para fazer as figuras brilharem como se fossem iluminadas por tochas divinas!",
    "curiosidadeTecnica": "O fio de poliéster trilobal possui uma seção transversal em formato de triângulo equilátero; cada uma das 3 faces age como um microprisma óptico que reflete 95% da luz incidente em um ângulo de 60 graus; posicionar os pontos na direção correta da luz da sala cria um brilho óptico tão intenso quanto uma lâmpada acesa.",
    "dicaArtrelados": "Para fazer um letreiro neon ou um desenho parecer que está aceso brilhando de verdade, digitalize um fundo preto macio, borde o contorno externo com gradiente aberto da cor que você quer (ex.: magenta ou ciano) e, no centro exato do traço, borde uma linha fina de ponto cheio branco neve: o olho humano junta tudo e vê uma luz brilhando com poder total!",
    "comparisonTable": {
      "headers": [
        "Técnica de Digitalização",
        "Ilusão de Luz e Volume",
        "Complexidade Técnica",
        "Impacto no Cliente"
      ],
      "rows": [
        [
          "Luminescence Digitizing (Artística)",
          "Hiper-realista (Parece luz de verdade)",
          "Avançada / Mestre",
          "Extraordinário / Inesquecível"
        ],
        [
          "Degradê Comercial Comum",
          "Plano com 2 cores",
          "Média",
          "Comercial bonito"
        ],
        [
          "Preenchimento Tatami Simples",
          "Nenhum (Plano chapado)",
          "Básica",
          "Padrão de uniforme"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 ou 75/11 SES de ponta fina",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "105 gf (superior) e 22 gf (bobina) bem afinadas",
      "density": "Mapeada dinamicamente de 0,35 mm a 1,5 mm"
    },
    "applications": [
      "Quadros de arte têxtil hiper-realista para decoração de interiores e galerias",
      "Jaquetas jeans de alta costura com estampas de chamas, dragões e caveiras iluminadas",
      "Logotipos corporativos futuristas com efeito néon e metal cromado de luxo",
      "Peças comemorativas de grandes marcas, capas de instrumentos e jaquetas de show"
    ],
    "troubleshootingTips": [
      "Se o efeito néon parecer apagado, aumente o contraste diminuindo a densidade da cor periférica e usando branco mais puro no centro",
      "Utilize sempre linhas de poliéster 100% trilobal de alta reflexão de luz",
      "Inspecione a matriz em tela preta no software para verificar a suavidade dos halos de luz"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ângulo de Ponto (Stitch Angle)",
      "Densidade de Pontos",
      "Linha de Poliéster Trilobal",
      "Layout de Matriz"
    ],
    "tags": [
      "l-100",
      "luminescence digitizing",
      "efeito neon",
      "luz e sombra",
      "fotorealismo",
      "arte textil",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GARCIA, Carlos. Photorealistic Embroidery and Chiaroscuro Digitizing Mastery. Barcelona, 2021.",
      "PARRISH, Gail. Advanced Optical Density Mapping and Specular Reflection in Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Em um tecido preto, digitalize a palavra 'LUZ' em estilo neon: faça uma borda aberta de 3 mm em rosa choque com densidade 1,2 mm e, no centro de cada letra, borde um ponto cheio estreito de 1,2 mm em branco neve. Borde e apague a luz do quarto com apenas uma luminária acesa ao lado: veja a palavra 'LUZ' brilhar como néon de verdade na sua frente!",
    "quickSummary": "Técnica suprema de digitalização artística com mapas de densidade e reflexão que criam efeitos mágicos de néon e luz tridimensional.",
    "beginnerExplanation": "É o segredo dos maiores mestres do bordado no mundo para fazer um desenho parecer que está aceso como um letreiro de néon ou fogo de verdade: a gente mistura cores claras no centro com cores sombreadas em volta, enganando o olho para parecer que o bordado tem luz própria!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-101-lamina-segura-fio-trimmer-mola-retentora-bobina-faca-fixa",
    "code": "L-101",
    "term": "Lâmina Segura-Fio do Trimmer / Mola Retentora da Linha da Bobina na Faca Fixa (Under-Thread Retaining Leaf Spring / Knife Thread Holder)",
    "pronunciation": "lâ-mi-na se-gú-ra fí-o do trí-mer / mó-la re-ten-tó-ra da lí-nya da bo-bí-na na fá-ka fík-sa (ân-der tréd ri-têi-nin lif sprin / náif tréd hôul-der)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Concebida no Japão nas décadas de 1980 e 1990 pelas engenharias da Tajima, Barudan e Brother para aprimorar os blocos de corte sob a chapa de agulha (Under-Bed Trimmer). Surgiu para erradicar o escape aleatório da cauda da linha da bobina decorrente do vácuo e da turbulência de rotação da laçadeira a 1.000 PPM, introduzindo uma pinça elástica passiva de aço inoxidável montada diretamente no corpo da contra-faca fixa.",
    "summary": "Lâmina elástica ultrafina de aço inoxidável ou bronze fosforoso parafusada sobre ou sob a contra-faca fixa do cortador, cuja pressão calibrada segura a ponta da linha da bobina no instante exato do corte, evitando que ela escape e garantindo a laçada inicial da cor seguinte.",
    "definition": "A Lâmina Segura-Fio do Trimmer e Mola Retentora da Linha da Bobina na Faca Fixa (tecnicamente denominada Under-Thread Retaining Leaf Spring, Fixed Knife Thread Holder, Mola de Pinçamento da Bobina ou Lâmina de Retenção do Trimmer) é o microcomponente elástico de fixação passiva instalado no conjunto de corte inferior da máquina de bordar industrial e multiagulhas. Quando a faca móvel (Movable Knife) é acionada pelo came e recolhe trazendo a linha superior e a linha da bobina em direção à contra-faca fixa para a ação de cisalhamento, as duas linhas são cortadas de forma simultânea. Contudo, enquanto a linha superior é recolhida e pescada pelo limpador de fio superior (Wiper), a linha inferior da bobina ficaria solta no espaço sob a chapa. Pela força centrífuga e vórtice de ar gerados pela laçadeira rotativa girando a até 2.400 RPM, a cauda de linha recém-cortada seria sugada ou empurrada para fora da ranhura de saída da caixa de bobina, caindo solta no fundo da carcaça ou retraindo para dentro da carretilha. A Lâmina Segura-Fio atua exatamente como uma pinça mecânica elástica contínua: montada face a face com a faca fixa, ela possui uma aba flexionada que exerce uma pressão suave e controlada (entre 10 gf e 15 gf). No momento em que a faca móvel atinge o ponto final do curso, a ponta cortada da linha da bobina fica prensada entre a lâmina elástica e o corpo da faca fixa. Essa retenção milimétrica mantém a ponta da bobina aprisionada e orientada para cima, de modo que, na primeira descida da agulha no novo bloco de cor, a laçada seja formada com 100% de certeza sem falhas de ponto, nós embolados ou falsas quebras de linha.",
    "technicalDetails": "Estampada em fita ultrafina de aço inoxidável austenítico AISI 301 temperado extra-duro (Spring Steel) ou bronze fosforoso C5191 com espessura nominal de apenas 0,12 mm a 0,20 mm. Possui tratamento térmico para alta resistência à fadiga por flexão cíclica (mais de 500.000 ciclos de cisalhamento). A superfície de contato possui polimento espelhado (Ra < 0,10 µm) para não esmagar nem cortar o multifilamento de poliéster nº 60 da linha da bobina. É fixada rigidamente à carcaça da chapa de suporte da faca fixa por meio de dois parafusos de precisão de fenda métrica M2 ou M2.5, contando com orifícios oblongos que permitem regular a pressão de pinçamento e o avanço da aba elástica.",
    "construction": [
      "Lâmina Flexível em Aço Inox Temperado (AISI 301): Corpo elástico ultrafino resistente à corrosão e deformação permanente",
      "Aba de Pinçamento Chanfrada (Holding Lip): Borda curva que recebe a linha da bobina sem atrito abrasivo nem cortes acidentais",
      "Base de Apoio com Furos Oblongos: Permite o ajuste fino da pressão contra a face da contra-faca fixa",
      "Parafusos de Fixação Métrica M2/M2.5: Parafusos de aço de alta resistência com arruelas de pressão para montagem rígida",
      "Calço de Espaçamento / Placa de Apoio (Spacer Plate): Calibra a folga mecânica entre a lâmina e o gume afiado da navalha",
      "Tratamento Antiatrito Polido Espelhado: Impede o acúmulo de poeira e cola de entretela adesiva na área de pinçamento"
    ],
    "howItWorks": [
      "1. O comando de corte é acionado e a faca móvel avança, puxando a linha superior e a linha da bobina.",
      "2. A faca móvel recua, arrastando as linhas contra a contra-faca fixa afiada.",
      "3. Poucos milissegundos antes do corte da lâmina, a linha da bobina é forçada para dentro do vão da Lâmina Segura-Fio.",
      "4. A faca fixa executa o corte limpo da linha superior e da linha da bobina.",
      "5. A linha superior cortada sobe para a parte superior do tecido, puxada pelo estica-fio e pelo wiper.",
      "6. A cauda da linha da bobina permanece firmemente pinçada entre a Lâmina Segura-Fio e a faca fixa.",
      "7. Na primeira descida da próxima cor, a linha retida é capturada pelo laço da agulha com amarração imediata e sem escapar!"
    ],
    "beginnerExplanation": "A Lâmina Segura-Fio é a 'mãozinha invisível' que segura a pontinha da linha da bobina depois da tesoura cortar! Sabe quando você corta uma fita adesiva e precisa segurar a pontinha dela com a unha para ela não colar de volta no rolo e você não perder a ponta? É exatamente isso que essa laminha fininha faz embaixo da chapa da sua máquina! Quando a tesourinha automática corta as linhas para mudar de cor, a linha de cima vai embora para o tecido, mas a linha de baixo precisa ficar quietinha esperando a próxima cor começar. Se não tivesse essa laminha de aço segurando a ponta dela feito uma pinça macia, o vento da laçadeira que roda a mil por hora ia jogar a linha longe ou sugar ela para dentro da carretilha. Aí, quando a máquina fosse recomeçar, a agulha ia descer no vento e dar erro de linha na hora! Essa laminha segura a ponta com carinho para o bordado recomeçar perfeito!",
    "applications": [
      "Retenção estática e pinçamento mecânico da cauda da linha da bobina após o corte automático",
      "Eliminação de partidas falsas e costura no ar no primeiro ponto após trocas de cor ou saltos de matriz",
      "Prevenção contra o escape e perda da linha de dentro da mola tensora da caixa de bobina",
      "Estabilização do tamanho da sobra da linha inferior, mantendo o avesso limpo e sem pontas compridas",
      "Proteção da linha contra a turbulência centrífuga da laçadeira em alta rotação (2.400 RPM)"
    ],
    "mainTypes": [
      "Lâmina Segura-Fio Integrada à Faca Fixa: Montada diretamente sobre o corpo da navalha fixa (padrão Tajima e Brother moderno)",
      "Mola Retentora Bipartida de Dupla Pressão: Possui duas abas elásticas independentes para linhas de bobina finas e grossas",
      "Lâmina Segura-Fio em Bronze Fosforoso: Modelo de elasticidade ultra-suave indicado para linhas metálicas e fios delicados",
      "Lâmina com Revestimento Cerâmico Teflonado: Repele resíduos de adesivos de entretela spray e fiapos de linha encerada"
    ],
    "recommendedSettings": {
      "speedPPM": "Suporta retenção elástica em desacelerações de corte de 100 a 250 RPM e costura de 0 a 1.200 PPM",
      "needleType": "Universal para todas as agulhas",
      "stabilizer": "Universal para todas as entretelas",
      "threadTension": "Pressão de retenção da lâmina calibrada entre 10 gf e 15 gf"
    },
    "advantages": [
      "✔ Amarração de primeira: a linha da bobina nunca escapa na retomada da costura",
      "✔ Acaba definitivamente com o erro de 'Quebra de Linha Falsa' no início de cada cor",
      "✔ Sistema 100% passivo e elástico, sem consumo elétrico nem necessidade de motores ou cabos",
      "✔ Construção durável em aço inoxidável que resiste a mais de 500.000 cortes sem deformar"
    ],
    "limitations": [
      "Se fiapos de entretela ou cera de linha se acumularem debaixo da lâmina, a linha escorrega e não é retida.",
      "Se a lâmina for entortada para cima com uma chave de fenda por descuido, ela perde a pressão elástica."
    ],
    "commonErrors": [
      "❌ Raspar a lâmina com lixa grossa ou chave de fenda para tirar fiapos, riscando o aço e cortando a linha antes da hora.",
      "❌ Apertar os parafusos da faca fixa esmagando a lâmina torta sem verificar o alinhamento da aba.",
      "❌ Deixar cola de spray de entretela grudar na lâmina, fazendo a linha ficar presa e não soltar na costura.",
      "❌ Entortar a aba elástica para trás achando que está 'abrindo caminho', deixando a linha solta sem retenção."
    ],
    "troubleshootingTips": [
      "A máquina corta a linha perfeitamente, mas quando vai começar a próxima cor a linha da bobina fugiu e a agulha costura 3 pontos no ar e para: A Lâmina Segura-Fio está frouxa, perdeu a pressão ou tem uma bolinha de fiapo impedindo o aperto; retire a chapa de agulha, limpe a lâmina com álcool isopropílico e pressione suavemente a aba para devolver a curva elástica.",
      "A linha da bobina fica tão presa que arrebenta logo no primeiro ponto da cor seguinte: A lâmina segura-fio está excessivamente apertada contra a faca fixa ou tem cola de spray colando a linha; solte os parafusos de fixação e recoloque a lâmina com alinhamento suave e limpo.",
      "O avesso do bordado fica com pontas soltas de 4 cm no início de cada corte: A lâmina está segurando a linha na posição errada ou o puxador (picker) está empurrando linha em excesso; verifique a sincronia do cortador e a posição da lâmina retentora."
    ],
    "dicaArtrelados": "Quer fazer o 'Teste do Fio de Cabelo da Artrelados' para saber se a sua Lâmina Segura-Fio está prendendo a linha como deve? Com a máquina desligada e a chapa de agulha retirada, pegue um pedaço de linha de bobina com uma pinça e passe por baixo da laminha da faca fixa. Puxe a linha com a mão: você deve sentir uma resistência macia, como se estivesse puxando um fio de cabelo suavemente entre dois dedos! Se a linha correr totalmente solta sem nenhuma resistência, a lâmina está sem pressão; se a linha travar e estourar, está apertada demais. No ponto doce, sua máquina vai amarrar os pontos de primeira pelo resto da vida!",
    "voceSabia": "Essa micro-lâmina de aço é a razão de podermos bordar toalhas, bonés e uniformes com dezenas de trocas de cores sem ter que ficar puxando a linha da bobina para cima com a mão a cada troca! Em um bordado com 15 trocas de cores, ela evita que a máquina pare 15 vezes, economizando preciosos minutos de produção em cada peça do ateliê!",
    "practicalExercise": "Inspeção e Limpeza da Lâmina Segura-Fio: Com a máquina desligada da tomada, desparafuse a chapa de agulha e retire-a. Localize a contra-faca fixa (a lâmina metálica reta ao lado da laçadeira) e veja a laminha fininha de aço montada sobre ela. Passe um pedaço de linha encerada ou fio dental entre a lâmina e a faca para expulsar qualquer fiapo de poeira ou cola acumulado ali. Aplique uma gota de álcool isopropílico com um pincel limpo. Veja como a peça volta a brilhar espelhada e pronta para o trabalho!",
    "quickSummary": "Lâmina elástica ultrafina de aço inox montada junto à faca fixa que pinça a cauda da linha da bobina após o corte, garantindo a laçada inicial da cor seguinte.",
    "relatedTerms": [
      "Navalha Móvel e Navalha Fixa do Corte de Linha (Lâminas do Trimmer / Moving & Fixed Knife)",
      "Puxador de Linha da Bobina / Pescador Inferior do Trimmer (Under Thread Picker)",
      "Came de Acionamento do Trimmer / Excêntrico do Corte de Linha",
      "Caixa de Bobina (Bobbin Case)",
      "Ponto de Amarração (Tie-off / Lock Stitch)",
      "Solenoide de Corte de Linha (Trimmer Solenoid)"
    ],
    "tags": [
      "l-101",
      "lamina-segura-fio",
      "mola-retentora-trimmer",
      "knife-thread-holder",
      "under-thread-retaining-spring",
      "faca-fixa",
      "corte-de-linha",
      "linha-da-bobina",
      "mecanica",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Fixed Knife Retaining Spring and Thread Holding Mechanism Service Standards. Nagoya: Tajima, 2023.",
      "BARUDAN CO., LTD. Thread Trimmer Retainer Spring Clearance & Tension Calibration. Ichinomiya, 2022.",
      "BROTHER INDUSTRIES. Professional Embroidery Trimming Blade and Retainer Leaf Spring Specs. Nagoya, 2021.",
      "ARTRELADOS. A Pinça Invisível da Bobina: Como a Lâmina Segura-Fio Garante a Partida Perfeita em Cada Troca de Cor. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-07"
  }
];

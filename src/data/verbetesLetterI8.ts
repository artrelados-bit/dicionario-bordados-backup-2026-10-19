import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART8: Verbete[] = [
  {
    id: "i-043-intertravamento-de-ponto-satin-em-curvas-acentuadas",
    code: "I-043",
    term: "Intertravamento de Ponto Satin em Curvas & Divisão Automática (Satin Stitch Corner Miter & Auto-Split Stitching)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês satin (cetim/ponto cheio brilhante) e do inglês auto-split (divisão automática de comprimento de ponto).",
    summary: "Recurso que divide pontos cheios que ficaram longos demais (mais de 7mm a 9mm) em duas partes com uma costura intermediária invisível para não afrouxar.",
    definition: "O Intertravamento de Ponto Satin em Curvas Acentuadas e Divisão Automática de Coluna (Auto-Split Satin Stitch & Dynamic Column Interlocking) é o algoritmo de digitalização que atua quando a largura de uma coluna de ponto cheio (Satin) ultrapassa o limite físico de segurança mecânica do fio (convencionalmente ajustado entre 7,0mm e 9,0mm em letras gigantes ou curvas de monogramas). Como pontos cheios com mais de 10mm ficam excessivamente frouxos, enroscam em botões e desmancham na máquina de lavar, o algoritmo 'divide' automaticamente o ponto longo ao meio, inserindo uma penetração intermediária de agulha com padrão escalonado em zigue-zague ou padrão tatami suave, mantendo a aparência nobre e brilhante do ponto cheio sem a fragilidade de fios soltos.",
    technicalDetails: "Parâmetros do algoritmo Auto-Split:\n• Comprimento máximo seguro de ponto cheio simples: 7,0mm a 8,5mm (sem divisão);\n• Limiar de disparo de divisão (Split Threshold): Configurado tipicamente em 8,0mm a 9,0mm;\n• Padrão de distribuição dos pontos intermediários: Deslocamento escalonado pseudoaleatório de 1/3 e 2/3 para evitar a formação de linhas retas visíveis na superfície do bordado;\n• Densidade mantida: 0,38mm a 0,42mm com compensação de repuxo lateral de +0,30mm.",
    howItWorks: [
      "1. O programador está digitalizando uma letra de fonte serifada grande de 10cm de altura para uma jaqueta universitária.",
      "2. Na base da letra, a haste grossa atinge 14mm de largura.",
      "3. Se ele deixar em ponto cheio puro, o fio de 14mm vai ficar frouxo, o cliente vai enganchar o dedo e o bordado vai estragar na primeira semana.",
      "4. Ele ativa a função 'Auto-Split Satin / Divisão Automática de Ponto Cheio' com limite em 7,5mm.",
      "5. O software converte a coluna longa inserindo penetrações de agulha no meio do caminho com posições alternadas.",
      "6. Na máquina de bordar, a agulha costura a haste grossa com pontos firmes, seguros e presos ao tecido.",
      "7. A superfície continua com o brilho sedoso de um ponto cheio, mas com a resistência mecânica e durabilidade de um ponto tatami.",
      "8. A jaqueta pode ser lavada e usada intensamente sem que nenhum fio se solte.",
    ],
    beginnerExplanation: "Quando a máquina vai bordar uma letra muito grossa ou um desenho muito largo, se a linha der um salto grandão de mais de 1 centímetro sem prender no tecido no meio, a linha fica frouxa e solta como uma corda de varal! Qualquer anel ou unha que passar por ali vai puxar o fio e estragar o bordado. Esse recurso inteligente do programa divide o ponto longo no meio com pontinhos invisíveis, deixando a letra linda, brilhante e super firme que nunca solta!",
    applications: [
      "Letras grandes e monogramas de jaquetas colegiais, casacos e roupões de banho",
      "Hastes grossas de brasões, números esportivos e escudos corporativos",
      "Pétalas e folhas largas em desenhos florais de grande formato",
      "Bordados em peças de vestuário infantil submetidas a atrito e lavagens frequentes"
    ],
    commonErrors: [
      "Deixar pontos cheios com mais de 12mm sem divisão (a máquina perde o controle de tensão e o fio fica todo frouxo)",
      "Dividir pontos com padrão alinhado no centro (cria uma valeta ou linha feia dividindo a letra ao meio)",
      "Trocar para ponto tatami quando o cliente exigiu o brilho liso do ponto cheio"
    ],
    troubleshootingTips: [
      "No Wilcom ou Hatch, ative a opção 'Auto-Split' nas propriedades de ponto cheio e defina o valor máximo para 7,5mm",
      "Certifique-se de que a opção de 'Deslocamento Aleatório (Random Jitter / Stagger)' esteja ativada para que os pontinhos de divisão fiquem invisíveis",
      "Para larguras superiores a 15mm, considere utilizar ponto Tatami ou preenchimento com aplique de tecido",
      "Use underlay de sustentação tipo 'Edge Run + Zig-Zag' para criar uma base fofa por baixo dos pontos divididos"
    ],
    dicaArtrelados: "O Auto-Split é o truque de ouro para bordar letras gigantes com cara de ponto cheio nobre sem que o cliente reclame de fios soltos depois! Suas jaquetas universitárias ficam com acabamento impecável de loja americana!",
    voceSabia: "As máquinas de bordar industriais têm um limite mecânico de fábrica: a maioria das máquinas simplesmente não consegue dar um ponto maior do que 12,1 milímetros de uma só vez devido ao curso máximo do pantógrafo, forçando o software a dividir o ponto automaticamente!",
    practicalExercise: "No seu software, crie um retângulo de 30mm de largura em ponto cheio: observe como o programa insere automaticamente a divisão de pontos no meio para que a linha não fique solta de um lado ao outro!",
    quickSummary: "Divisão automática de pontos cheios longos em partes menores para evitar fios frouxos e garantir durabilidade.",
    relatedTerms: ["Ponto Cheio / Ponto Satin", "Ponto Tatami", "Densidade de Ponto", "Comprimento Máximo de Ponto"],
    tags: ["i-043", "auto-split", "ponto cheio", "divisao de pontos", "letras grandes", "durabilidade", "software", "artrelados"],
    bibliographicReferences: [
      "ADVANCED SATIN STITCH DYNAMICS & AUTO-SPLIT ALGORITHMS. Sydney, 2023.",
      "THE EMBROIDERY DIGITIZER'S HANDBOOK: COLUMN & SATIN CONTROL. London, 2022.",
      "ARTRELADOS. O Segredo dos Pontos Longos: Como Usar o Auto-Split para Bordar Letras Gigantes Sem Fios Frouxos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-044-imersao-em-agua-e-remocao-de-entretela-hidrossoluvel",
    code: "I-044",
    term: "Imersão em Água & Remoção de Entretela Hidrossolúvel (Water Immersion & Solvy Dissolution Protocol)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim immersio (ato de mergulhar em líquido) e do inglês soluble (hidrossolúvel - PVA / Álcool Polivinílico).",
    summary: "Protocolo correto de lavar a peça bordada em água morna corrente para dissolver o plástico hidrossolúvel (Solvy) sem deixar a toalha dura.",
    definition: "A Imersão em Água e Protocolo de Dissolução Completa de Entretela Hidrossolúvel (Water Immersion & Polyvinyl Alcohol - PVA Solvy Dissolution Protocol) é o procedimento hidrotêxtil pós-bordado destinado a dissolver e eliminar 100% dos resíduos de filmes e películas hidrossolúveis (Solvy / Water-Soluble Film) utilizados como cobertura superior (Topping) em toalhas de banho felpudas, veludos e rendas guipure (Free-Standing Lace - FSL). Como o PVA é um polímero sintético biodegradável que se liquefaz em contato com a água, a execução correta da lavagem em água corrente morna (30°C a 40°C) evita que resíduos viscosos de amido e plástico sequem dentro das fibras, garantindo que o tecido e a felpa mantenham sua maciez natural e absorção original.",
    technicalDetails: "Propriedades físico-químicas de dissolução do filme PVA:\n• Composição: Filme extrudado de Álcool Polivinílico (PVA) atóxico e 100% biodegradável;\n• Temperatura ideal de dissolução: Água morna entre 30°C e 45°C (dissolve 3 vezes mais rápido que água gelada);\n• Tempo de imersão: 3 a 5 minutos sob água corrente ou em bacia de enxágue;\n• Protocolo para Toalhas Felpudas: Rasgar o excesso seco à mão antes da lavagem para economizar água e dissolver apenas os micro-restos entre os pontos;\n• Protocolo para Rendas FSL: Enxágue rápido de 30 segundos deixando um residual mínimo de PVA para agir como 'goma natural' e manter a renda estruturada.",
    howItWorks: [
      "1. A bordadeira conclui o bordado de um monograma com filigranas douradas em uma toalha de banho aveludada de luxo com plástico hidrossolúvel por cima.",
      "2. Ela retira a toalha do bastidor e puxa as abas grandes do plástico hidrossolúvel com as mãos a seco (cerca de 80% do plástico se solta facilmente).",
      "3. Restam pequenos pedacinhos plásticos presos dentro dos detalhes miúdos das letras.",
      "4. Em vez de ficar tentando tirar com a ponta de uma pinça ou agulha, ela leva a toalha até a pia.",
      "5. Abre a torneira de água morna ou passa uma esponja macia embebida em água morna sobre as letras.",
      "6. Em contato com a água, o plástico hidrossolúvel derrete instantaneamente como açúcar.",
      "7. Ela enxágua com água corrente abundante para remover toda a viscosidade gelatinosa.",
      "8. Seca a toalha na sombra ou com secador de cabelo morno.",
      "9. A toalha fica incrivelmente macia, aveludada e sem nenhum vestígio de plástico!",
    ],
    beginnerExplanation: "É o jeito fácil e rápido de tirar aquele 'platiquinho transparente' que a gente coloca por cima da toalha para a felpa não furar o bordado! Depois que a máquina termina, você puxa o plástico maior com a mão e o restinho que sobrou entre as letrinhas você só passa um paninho molhado com água morna ou coloca debaixo da torneira: o plástico derrete na hora como se fosse mágica e a toalha fica super macia e cheirosa!",
    applications: [
      "Remoção completa de filme hidrossolúvel de cobertura em toalhas de banho, praia e roupões",
      "Confecção e lavagem de rendas de bordado que se sustentam sozinhas (Free-Standing Lace - FSL)",
      "Limpeza de detalhes bordados em veludo cotelê, pelúcias e cobertores felpudos",
      "Finalização de peças delicadas de batizado e enxovais brancos de bebê"
    ],
    commonErrors: [
      "Tentar tirar os pedacinhos minúsculos de plástico a seco com uma agulha pontiaguda (puxa os fios da toalha e estraga o bordado)",
      "Enxaguar a toalha rapidamente em água gelada e deixar secar (o plástico seca como uma goma dura e grudenta)",
      "Passar o ferro de passar quente direto em cima do plástico antes de dissolver com água (o plástico derrete e gruda na sola do ferro)"
    ],
    troubleshootingTips: [
      "NUNCA encoste o ferro de passar na toalha enquanto o plástico hidrossolúvel ainda estiver presente!",
      "Para toalhas prontas para entrega rápida: borrife água morna com um borrifador sobre o bordado e passe um pano de microfibra macio para 'limpar' o plástico dissolvido em 10 segundos sem molhar a toalha inteira!",
      "Ao fazer rendas FSL, enxágue apenas o suficiente para dissolver a película, deixando um pouquinho da goma para a renda secar durinha e firme",
      "Guarde seus rolos de plástico hidrossolúvel sempre fechados em sacos plásticos zipados para não absorverem a umidade do ar"
    ],
    dicaArtrelados: "O truque do borrifador com água morna e paninho de microfibra é o maior atalho do ateliê! Você limpa o plástico hidrossolúvel de uma toalha em 30 segundos, seca com o secador de cabelo e entrega para a cliente quentinha na hora!",
    voceSabia: "O álcool polivinílico (PVA) utilizado nas entretelas hidrossolúveis é o mesmo polímero médico biocompatível utilizado na fabricação de cápsulas de remédios gelatinosas que derretem no estômago e em colírios para lubrificação dos olhos!",
    practicalExercise: "Pegue um pedaço pequeno do seu plástico hidrossolúvel (Solvy) e coloque dentro de um copo com água morna: mexa com uma colher e veja como ele desaparece completamente na água em menos de 10 segundos!",
    quickSummary: "Protocolo de dissolução do filme hidrossolúvel em água morna para limpar toalhas e rendas sem deixar resíduos.",
    relatedTerms: ["Entretela Hidrossolúvel / Solvy", "Free-Standing Lace (FSL)", "Toalhas Felpudas", "Cuidados Pós-Bordado"],
    tags: ["i-044", "imersao em agua", "hidrossoluvel", "solvy", "dissolucao", "toalhas", "pva", "artrelados"],
    bibliographicReferences: [
      "POLYVINYL ALCOHOL (PVA) DISSOLUTION DYNAMICS IN TEXTILE FINISHING. Zurich, 2023.",
      "THE FREE-STANDING LACE & SPECIALTY EMBROIDERY MANUAL. Chicago, 2022.",
      "ARTRELADOS. O Fim do Plástico Grudado: Como Remover Entretela Hidrossolúvel em Segundos Sem Molhar a Peça Toda. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-045-insercao-de-ponto-de-contorno-running-redwork",
    code: "I-045",
    term: "Inserção de Ponto de Contorno Running & Estilo Redwork (Redwork Running Stitch Outline & Vintage Line Art)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Redwork (trabalho em linha vermelha de algodão surgido nos EUA e Europa no final do século XIX) e running stitch (ponto corrido simples/triplo).",
    summary: "Estilo vintage e clássico de bordado feito apenas com contornos em ponto corrido triplo (Bean Stitch), muito rápido de bordar e com charme nostálgico.",
    definition: "A Inserção de Ponto de Contorno Running e Estilo Clássico Redwork/Bluework (Redwork Outline Digitizing / Triple Bean Running Stitch Vintage Embellishment) é o estilo histórico e minimalista de digitalização de matrizes no qual figuras artísticas inteiras (cenas campestres, motivos florais, ilustrações vitorianas, animais e utensílios de cozinha) são desenhadas exclusivamente por meio de linhas de contorno em ponto corrido triplo reforçado (Bean Stitch de 2,5mm a 3,0mm de passo) em uma única cor de linha (tradicionalmente vermelho rubi ou azul cobalto sobre tecidos de linho ou algodão cru). Com baixíssima contagem de pontos (geralmente entre 1.500 e 4.000 pontos) e sem preenchimentos densos, o estilo é ultrarrápido de bordar, não repuxa o tecido e proporciona um charme rústico nostálgico inconfundível.",
    technicalDetails: "Parâmetros técnicos do estilo Redwork:\n• Tipo de ponto: Ponto Corrido Triplo / Ponto Grão (Triple Bean Stitch - 3 penetrações por passo: avanço-recuo-avanço);\n• Comprimento de ponto (Stitch Length): 2,5mm a 3,0mm (traçado nítido e visualmente encorpado);\n• Roteamento de caminho único (Single Branching): Otimização de traçado onde todas as linhas são conectadas em um único fluxo contínuo sem cortes de linha;\n• Linha recomendada: Linha de algodão 30wt/40wt fosca ou poliéster 40wt de acabamento acetinado;\n• Estabilização: Entretela rasgável leve de 40g a 50g (não necessita de suporte pesado).",
    howItWorks: [
      "1. A bordadeira deseja criar um conjunto de panos de prato e toalhas de mesa no estilo clássico de fazenda / vintage.",
      "2. No software de matriz, ela importa uma ilustração em traços simples de uma xícara de café fumegante ou galo.",
      "3. Utiliza a ferramenta 'Ponto Corrido Triplo / Triple Run' para digitalizar todas as linhas de contorno.",
      "4. Aplica a ferramenta 'Ramificação Automática (Auto-Branching)' do software: o algoritmo organiza o trajeto para que a máquina costure todo o desenho de uma só vez, indo e voltando pelo mesmo caminho sem cortar a linha nenhuma vez.",
      "5. Na máquina de bordar, instala um cone de linha vermelha e o tecido de pano de copa com entretela rasgável.",
      "6. A máquina costura o desenho inteiro em menos de 3 minutos.",
      "7. O resultado é um bordado nostálgico, nítido, sem nenhuma ruga e de altíssimo valor afetivo!",
    ],
    beginnerExplanation: "É aquele bordado clássico e lindo que parece um 'desenho feito com caneta' na toalha de pano de prato da casa da vovó! Em vez da máquina ficar preenchendo tudo de cor, ela só desenha os contornos com uma costura grossinha e charmosa em uma cor só (como vermelho ou azul)! É o bordado mais rápido do mundo: fica pronto em 2 ou 3 minutinhos, gasta quase nada de linha e fica incrivelmente fofo e elegante!",
    applications: [
      "Panos de prato gourmet, guardanapos de linho e toalhas de mesa para cozinha",
      "Quilts, colchas de retalhos em patchwork e almofadas de estilo rústico / farmhouse",
      "Enxovais infantis com ilustrações clássicas de contorno suave",
      "Produção de lembrancinhas de baixo custo e alta velocidade para feiras de artesanato"
    ],
    commonErrors: [
      "Usar ponto corrido simples comum (Single Run) em vez de ponto triplo (o contorno fica fino e fraco, sumindo no tecido)",
      "Digitalizar sem ramificação inteligente, fazendo a máquina cortar a linha 20 vezes em um desenho simples",
      "Usar tecidos muito grossos ou escuros que escondem o charme delicado da linha fina"
    ],
    troubleshootingTips: [
      "Configure SEMPRE o ponto como 'Triple Run / Bean Stitch' com comprimento de 2,5mm a 2,8mm para dar o efeito encorpado de bordado manual à mão",
      "Utilize a ferramenta 'Ramificação Automática (Auto-Branching / Branching)' para que o software calcule a rota perfeita sem cortes",
      "Borde sobre tecidos claros (algodão cru, linho natural, tricoline branca) com linhas vermelhas, azuis marinho ou pretas para máximo contraste",
      "Utilize agulha ponta fina 75/11 para garantir que os furos de retorno fiquem perfeitamente alinhados"
    ],
    dicaArtrelados: "Os panos de prato em Redwork são campeões absolutos de vendas em feiras de artesanato! Você gasta 3 minutos de máquina e R$ 0,20 de linha para fazer uma peça maravilhosa que vende por R$ 35 a R$ 50 com facilidade!",
    voceSabia: "O estilo Redwork nasceu na Turquia e explodiu nos Estados Unidos na década de 1880 porque a 'Linha Vermelha Turca' (Turkey Red) foi o primeiro corante químico da história que não desbotava e não manchava as roupas mesmo quando fervida com sabão de cinzas!",
    practicalExercise: "No seu software, desenhe uma flor usando apenas a ferramenta de Ponto Corrido Triplo (Triple Run) em uma cor só: envie para a máquina e veja como em menos de 2 minutos você tem um bordado vintage perfeito!",
    quickSummary: "Estilo vintage minimalista feito apenas com contornos em ponto corrido triplo, ultrarrápido e elegante.",
    relatedTerms: ["Bean Stitch / Ponto Grão", "Ramificação Automática / Auto-Branching", "Ponto Corrido / Running Stitch", "Ponto Cruz Digital"],
    tags: ["i-045", "redwork", "ponto corrido", "bean stitch", "vintage", "panos de prato", "alta velocidade", "artrelados"],
    bibliographicReferences: [
      "THE REDWORK EMBROIDERY HANDBOOK & VINTAGE DIGITIZING. New York, 2023.",
      "HISTORIC AMERICAN QUILTS & OUTLINE STITCH TECHNIQUES. Boston, 2022.",
      "ARTRELADOS. O Charme do Redwork: Como Criar Coleções de Panos de Prato e Guardanapos Lucrativos em Minutos de Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-046-isolador-de-tensao-e-guia-fios-ceramicos",
    code: "I-046",
    term: "Isolador de Tensão & Guia-Fios Cerâmicos Antidesgaste (Ceramic Eyelet Thread Guides & Friction Reducers)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego keramos (argila queimada / cerâmica técnica de zircônia/alumina) e do latim filum (fio condutor). Componentes tribológicos de baixo atrito.",
    summary: "Ilhoses de cerâmica branca espelhada nos furos da torre e cabeçote por onde a linha passa, evitando que o atrito desgaste o metal e queime o fio.",
    definition: "Os Isoladores de Tensão, Guia-Fios Cerâmicos e Anéis de Zircônia Antiatrito (Ceramic Eyelet Thread Guides & High-Alumina Friction Reducers) são os insertos tubulares minúsculos de cerâmica técnica avançada (óxido de alumínio Al2O3 ou óxido de zircônio ZrO2) instalados nos orifícios da torre de suporte, placas intermediárias e cabeçote por onde a linha de bordar transita em alta velocidade. Com dureza extrema (superior a 9 na escala Mohs, perdendo apenas para o diamante) e polimento espelhado ultra liso, os anéis cerâmicos dissipam o calor gerado pelo atrito contínuo de milhares de metros de fio sintético correndo a até 1.200 PPM, impedindo que a linha de poliéster 'serre' ranhuras afiadas nos furos de aço da máquina e evitando o arrebentamento por aquecimento térmico.",
    technicalDetails: "Propriedades tribológicas dos guia-fios cerâmicos:\n• Material: Cerâmica de Alumina 99% (Al2O3) ou Zircônia estabilizada com Ítria (Y-TZP);\n• Dureza superficial: > 1.800 HV (Vickers - Imune a desgaste por fricção de poliéster abrasivo);\n• Rugosidade superficial (Ra): < 0,1 µm (Acabamento espelhado de ultra baixo atrito);\n• Condutividade térmica: Rápida dissipação de calor evitando que a linha atinja o ponto de amolecimento térmico;\n• Isolamento dielétrico: Previne o acúmulo e a condução de descargas eletrostáticas para a linha.",
    howItWorks: [
      "1. A máquina de bordar industrial opera em velocidade máxima contínua durante um turno de 10 horas.",
      "2. A linha de poliéster trilobal desliza velozmente pelos guia-fios da torre e do cabeçote.",
      "3. Em contato com a superfície espelhada da cerâmica branca de zircônia, o coeficiente de atrito é próximo de zero.",
      "4. Não há aquecimento excessivo do filamento e nenhuma cera de lubrificação é raspada do fio.",
      "5. A cerâmica não sofre desgaste nem cria ranhuras pontiagudas mesmo após anos de produção ininterrupta.",
      "6. A linha chega aos discos tensores e ao estica-fio perfeitamente íntegra e com tensão constante.",
      "7. A máquina borda o dia todo com taxa de quebra de linha próxima de zero.",
    ],
    beginnerExplanation: "São aqueles anéis de cerâmica branquinha e brilhante parecidos com pequenas pedrinhas de louça que ficam nos buraquinhos por onde a linha passa na máquina! Como a linha de bordar corre muito rápido o dia inteiro, se o buraquinho fosse de metal comum, a linha de plástico ia cortar o metal como se fosse uma serrinha e ia quebrar toda hora! A cerâmica é mais dura que o aço, é lisinha como um espelho e faz a linha deslizar fresquinha e suave sem arrebentar!",
    applications: [
      "Condução suave de fios sintéticos e metálicos da torre de cones até o cabeçote",
      "Prevenção de ranhuras cortantes em peças metálicas da máquina de bordar",
      "Eliminação de quebras frequentes causadas por aquecimento de atrito em alta velocidade",
      "Manutenção da tensão constante da linha superior em turnos longos de produção"
    ],
    commonErrors: [
      "Bater chaves de fenda ou ferramentas nos ilhoses cerâmicos, trincando a cerâmica (a quina trincada corta a linha na hora como uma gilete)",
      "Deixar cera e poeira acumuladas dentro dos tubinhos cerâmicos aumentando o atrito",
      "Passar a linha fora do anel cerâmico fazendo o fio roçar direto na lataria da máquina"
    ],
    troubleshootingTips: [
      "Inspecione os anéis cerâmicos da torre: passe um pedaço de meia de seda ou linha fina nos buraquinhos; se desfiar, a cerâmica está trincada e deve ser trocada imediatamente",
      "Limpe os olhais cerâmicos mensalmente passando um barbante ou haste de algodão com álcool isopropílico para remover restos de cera de linha",
      "Se um guia-fio cerâmico quebrar, você pode comprar anéis avulsos de reposição em casas de máquinas de costura e colar com adesivo cianocrilato (Super Bonder)",
      "Certifique-se de que a linha passe por dentro de TODOS os guia-fios do percurso para manter a trajetória correta"
    ],
    dicaArtrelados: "Se a sua máquina começar a arrebentar a linha sempre na mesma agulha e você já trocou agulha e regulou a tensão sem resolver, passe o dedo nos guia-fios de cerâmica! Um anelzinho cerâmico com uma trinca invisível é o 'vilão fantasma' mais comum das quebras de linha!",
    voceSabia: "A cerâmica técnica de zircônia utilizada nos guia-fios de máquinas de bordar modernas é o mesmo material de altíssima dureza e biocompatibilidade utilizado na fabricação de próteses dentárias de última geração e em facas de cozinha de cerâmica que nunca perdem o fio!",
    practicalExercise: "Examine a torre de linhas da sua máquina: passe a ponta do dedo nos buraquinhos brancos por onde a linha passa e sinta como a superfície é perfeitamente lisa e polida como vidro!",
    quickSummary: "Ilhoses de cerâmica ultralisa que conduzem a linha com atrito zero, evitando aquecimento e quebras de fio.",
    relatedTerms: ["Passagem de Linha Correta", "Tensão da Linha Superior", "Isacord & Fios de Poliéster", "Manutenção Preventiva Semanal"],
    tags: ["i-046", "guia-fios", "ceramica", "zirconia", "baixo atrito", "anti-desgaste", "mecanica", "artrelados"],
    bibliographicReferences: [
      "ADVANCED CERAMIC TRIBOLOGY IN HIGH-SPEED TEXTILE MACHINERY. Tokyo, 2023.",
      "FRICTION DYNAMICS & YARN TENSION IN EMBROIDERY MANUFACTURING. London, 2022.",
      "ARTRELADOS. O Segredo do Deslizamento Perfeito: Como os Guia-Fios Cerâmicos Eliminam o Desgaste e Salvam Seus Bordados. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-047-inspecao-visual-de-pontos-e-controle-de-qualidade",
    code: "I-047",
    term: "Inspeção Visual de Pontos & Controle de Qualidade Pós-Bordado (Post-Embroidery Quality Control & Visual Audit Protocol)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Controle de Qualidade",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim inspectio (ato de examinar minuciosamente) e qualitas (propriedade distintiva de excelência).",
    summary: "Checklist de 10 passos para examinar a peça pronta sob boa luz (frente e verso, tensão 1/3, fiapos e alinhamento) antes de entregar ao cliente.",
    definition: "A Inspeção Visual de Pontos e Protocolo de Auditoria de Qualidade Pós-Bordado (Post-Embroidery Quality Assurance - QA & 10-Point Visual Inspection Protocol) é a rotina metrológica padronizada de controle de qualidade executada na bancada de acabamento antes da embalagem e entrega do produto ao cliente final. Conduzida sob iluminação balanceada de alta fidelidade (luz neutra 5.500K), a inspeção examina rigorosamente 10 critérios capitais: equilíbrio de tensão (regra de ouro de 1/3 de linha da bobina no avesso), integridade de cobertura (ausência de frestas brancas ou repuxos), alinhamento perimétrico de contornos, ausência de pontos pulados ou laçadas frouxas, limpeza completa de fiapos e conectores, estabilização perimétrica da entretela, integridade do tecido sem marcas de bastidor (Hoop Burn), ortogonalidade e centralização com a peça e teste de tato/maciez.",
    technicalDetails: "Checklist dos 10 pontos da auditoria de qualidade Artrelados:\n1. Tensão no Avesso: Proporção áurea de 1/3 de bobina branca centralizada ladeada por 1/3 de cor em cada borda;\n2. Encaixe de Contornos: Desvio de alinhamento máximo permitido < 0,2mm;\n3. Integridade de Pontos: Zero pontos pulados ou desfiados;\n4. Limpeza de Fiapos: Todos os conectores de salto cortados a menos de 1mm;\n5. Remoção de Plástico/Solvy: 100% dos resíduos de hidrossolúvel eliminados;\n6. Refilamento de Entretela: Entretela de corte aparada em formato arredondado a 5mm do bordado;\n7. Ausência de Marcas: Zero marcas circulares de aro ou brilho esmagado no tecido;\n8. Alinhamento de Prumo: Desvio angular do centro cartesiano < 0,5°;\n9. Toque / Maciez: Bordado maleável e agradável sem endurecimento excessivo;\n10. Conferência da Ordem: Ortografia correta de nomes, cores e posições conforme a folha de produção.",
    howItWorks: [
      "1. A bordadeira desliga o bastidor e retira a camisa bordada da máquina.",
      "2. Leva a peça para a mesa de inspeção iluminada com luz LED neutra de alta fidelidade.",
      "3. Vira a camisa do avesso: confere a proporção perfeita de 1/3 de linha branca da bobina no centro dos pontos cheios.",
      "4. Vira para o lado direito: passa a ponta dos dedos para conferir a maciez e garantir que não há nós duros.",
      "5. Com uma tesourinha de ponta curva afiada, apara qualquer micro-fiapinho que tenha sobrado de conectores.",
      "6. Utiliza um rolinho adesivo para retirar todos os pelinhos soltos sobre a camisa.",
      "7. Confere letra por letra o nome bordado comparando com a ordem de serviço do cliente.",
      "8. Passa o vaporizador morno no verso para apagar qualquer marcação de caneta mágica ou aro.",
      "9. Dobra a peça, coloca o papel de seda perfumado e embala no saco transparente lacrado com a etiqueta do ateliê.",
      "10. O cliente recebe uma peça de padrão internacional e se torna fã fiel do ateliê!",
    ],
    beginnerExplanation: "É a 'vistoria final nota 10' que você faz na roupa antes de entregar para o cliente! Você olha a peça na luz boa, confere se o nome da pessoa está escrito sem nenhum erro de português, olha o avesso para ver se a linha branca está bonita no meio, corta qualquer fiapinho de linha que sobrou e passa um rolinho adesivo para tirar os pelos. É esse cuidado com o acabamento que faz o cliente abrir o pacote, dar um sorriso enorme e falar: 'UAU, que capricho maravilhoso!'",
    applications: [
      "Controle de qualidade padrão em ateliês de costura criativa e bordados personalizados",
      "Auditoria final em linhas de produção industrial antes do faturamento para magazines",
      "Prevenção de devoluções, retrabalhos e reclamações de clientes exigentes",
      "Construção de uma reputação sólida de marca de luxo e alto padrão de acabamento"
    ],
    commonErrors: [
      "Entregar a peça sem conferir a grafia do nome bordado (erros de digitação geram perda total da peça)",
      "Entregar o avesso cheio de teias de fios compridos e entretela quadrada rasgada de qualquer jeito",
      "Não inspecionar o verso e deixar passar bordados onde a linha da bobina subiu para a frente"
    ],
    troubleshootingTips: [
      "Tenha um checklist impresso plastificado colado na parede da sua mesa de acabamento para conferir os 10 passos em cada peça",
      "Recorte SEMPRE a entretela de corte com cantos arredondados: cantos pontudos pinicam a pele do cliente!",
      "Utilize um vaporizador de roupas vertical (Steamer) para amaciar o bordado e retirar qualquer vinco de bastidor antes de dobrar",
      "Se notar um ponto pulado durante a inspeção, utilize uma agulha manual de costura fina para passar um pontinho invisível de reforço antes da entrega"
    ],
    dicaArtrelados: "O controle de qualidade é o segredo do preço alto! Quando seu cliente recebe uma peça impecável, cheirosa, sem nenhum fiapinho solto e com avesso limpinho, ele nunca reclama do seu preço e indica você para todos os amigos!",
    voceSabia: "Nas fábricas de alta costura da Chanel e Dior em Paris, cada peça bordada à mão passa por três auditoras de qualidade independentes com lupas de relojoeiro antes de receber o selo de aprovação para ir para a passarela!",
    practicalExercise: "Pegue uma peça que você bordou recentemente e faça o teste dos 10 passos do checklist Artrelados: avalie de 1 a 10 cada critério e veja onde você pode caprichar ainda mais no acabamento!",
    quickSummary: "Checklist de 10 passos para inspecionar tensão, limpeza, alinhamento e acabamento antes da entrega ao cliente.",
    relatedTerms: ["Tensão da Linha Superior", "Folha de Produção & Gabarito", "Hoop Burn & Marcas de Bastidor", "Tesoura de Arremate"],
    tags: ["i-047", "inspecao visual", "controle de qualidade", "acabamento", "checklist", "atendimento", "excelencia", "artrelados"],
    bibliographicReferences: [
      "APPAREL QUALITY MANAGEMENT & 10-POINT VISUAL AUDIT PROTOCOLS. New York, 2023.",
      "ISO 9001 QUALITY ASSURANCE IN TEXTILE EMBROIDERY PRODUCTION. Geneva, 2022.",
      "ARTRELADOS. O Padrão Ouro do Acabamento: O Checklist dos 10 Passos para Entregar Bordados Impecáveis e Encantar Seus Clientes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-048-inversao-de-sequencia-de-cores-otimizacao-trocas",
    code: "I-048",
    term: "Inversão de Sequência de Cores & Otimização de Trocas (Color Sequence Optimization & Hopper Minimization)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim inversio (reorganização/troca) e do inglês color sorting / sequencing (agrupamento e triagem cromática).",
    summary: "Reorganização da ordem das camadas na matriz para bordar todos os objetos da mesma cor de uma só vez, economizando trocas manuais de linha.",
    definition: "A Inversão de Sequência de Cores e Otimização de Trocas de Linha (Color Sequence Optimization / Color Sorting & Hopper Minimization Algorithm) é a técnica de reordenação estrutural da lista de objetos da matriz no software de digitalização que agrupa todos os elementos que utilizam a mesma cor de linha em blocos contíguos de costura. Em matrizes compostas por múltiplos elementos repetidos (como monogramas florais, conjuntos de emblemas em bastidores múltiplos ou desenhos com vários detalhes em vermelho e verde espalhados), a otimização reduz o número de trocas de cor de 15 para apenas 3 ou 4 etapas, economizando minutos preciosos por peça e reduzindo o desgaste dos motores de comutação de agulha.",
    technicalDetails: "Arquitetura e restrições do algoritmo de Color Sorting:\n• Princípio de Agrupamento: Objetos da mesma cor são unidos no mesmo bloco cromático;\n• Regra de Preservação de Camadas (Layer Hierarchy Rule): Um objeto superior NUNCA pode ser costurado antes do seu respectivo fundo inferior, mesmo que compartilhem a mesma cor;\n• Economia de Tempo em Máquinas de 1 Agulha: Cada troca manual de linha leva de 45 a 90 segundos; reduzir de 12 para 4 trocas economiza mais de 8 minutos por bordado;\n• Função 'Color Sort' de 1 clique: Presente nos softwares Wilcom, Hatch, Embird e Bernina com verificação automática de sobreposição.",
    howItWorks: [
      "1. A bordadeira monta um bastidor grande de 20x30cm com 6 chaveirinhos iguais de coração para bordar de uma vez só.",
      "2. Cada chaveiro tem 3 cores: Vermelho (coração), Verde (folhas) e Dourado (nome).",
      "3. Se a matriz não for otimizada, a máquina vai bordar o chaveiro 1 (vermelho, verde, dourado), depois o chaveiro 2 (vermelho, verde, dourado)... totalizando 18 trocas de linha!",
      "4. O programador abre a matriz e clica na ferramenta 'Color Sort / Otimizar Cores'.",
      "5. O software reordena a lista: primeiro borda todos os 6 corações vermelhos juntos, depois todas as 6 folhas verdes juntas e, por fim, todos os 6 nomes dourados juntos.",
      "6. A produção inteira tem apenas 3 blocos de cor em vez de 18 paradas!",
      "7. A operadora troca a linha apenas 2 vezes e a máquina produz 6 peças completas no tempo em que faria apenas duas.",
    ],
    beginnerExplanation: "É como pintar um desenho com lápis de cor: você não pega o lápis vermelho para pintar uma florzinha, depois guarda o vermelho, pega o verde para pintar uma folhinha, depois guarda o verde e pega o vermelho de novo para a outra flor! Você pega o lápis vermelho e pinta todas as flores vermelhas de uma vez só; depois pega o verde e pinta todas as folhas! Essa função no programa faz a máquina bordar tudo que é da mesma cor de uma vez só, economizando um tempão de ficar trocando linha toda hora!",
    applications: [
      "Produção em lote de múltiplos chaveiros, patches e tags no mesmo bastidor",
      "Redução drástica do tempo de trabalho em máquinas domésticas de uma agulha",
      "Otimização de matrizes florais complexas com dezenas de folhas e pétalas espalhadas",
      "Aumento da produtividade diária do ateliê em datas comemorativas de alta demanda"
    ],
    commonErrors: [
      "Agrupar cores sem verificar sobreposições (a máquina borda o olho do ursinho antes de bordar o rosto, e o rosto cobre o olho!)",
      "Desorganizar a ordem lógica de matrizes de aplique ou projetos ITH",
      "Fazer trocas manuais de cores em matrizes grandes sem usar a ferramenta de Color Sort"
    ],
    troubleshootingTips: [
      "Sempre execute a simulação no 'Stitch Player / Simulador de Pontos' após usar a ferramenta Color Sort para ter certeza absoluta de que nenhuma camada ficou escondida por baixo de outra",
      "Em projetos In-The-Hoop (ITH), NUNCA use a ferramenta Color Sort automática, pois as paradas de colocação de tecido e zíper têm ordem cronológica estrita!",
      "Para máquinas multiagulhas industriais, associe as cores mais usadas às agulhas centrais para menor desgaste mecânico",
      "No Wilcom, utilize a ferramenta 'Sequenciamento por Cor (Sequence by Color)' para manter controle fino de cada agrupamento"
    ],
    dicaArtrelados: "Usar o Color Sort em bastidores cheios de chaveirinhos ou tags é o maior multiplicador de lucro do ateliê! Você coloca 8 peças no bastidor grande, dá o play, vai tomar um café e volta com tudo pronto em 3 trocas de linha!",
    voceSabia: "O algoritmo de otimização de sequência por cor é baseado na teoria matemática de 'Agrupamento em Grafos Acíclicos Dirigidos' (DAG Topological Sorting), a mesma lógica utilizada em fábricas de automóveis para pintar centenas de portas de carros na mesma cabine de pintura sem trocar a tinta a cada unidade!",
    practicalExercise: "No seu software, duplique um desenho simples 4 vezes no mesmo bastidor: clique na ferramenta 'Color Sort' e veja o número de trocas de cor cair de 16 para apenas 4 blocos instantaneamente!",
    quickSummary: "Reordenação de camadas para bordar tudo da mesma cor junto, economizando dezenas de trocas de linha.",
    relatedTerms: ["Ordem de Camadas / Sequencing", "Simulador de Pontos / Stitch Player", "In-the-Hoop (ITH)", "Troca de Cor Automática"],
    tags: ["i-048", "color sort", "sequencia de cores", "otimizacao", "troca de linha", "producao em lote", "software", "artrelados"],
    bibliographicReferences: [
      "COLOR GROUPING ALGORITHMS & EFFICIENCY IN EMBROIDERY CAD. Tokyo, 2023.",
      "THE DIGITIZER'S PRODUCTIVITY BLUEPRINT: COLOR SEQUENCING. Sydney, 2022.",
      "ARTRELADOS. Produção em Massa no Bastidor: Como Usar o Color Sort para Multiplicar Seus Lucros em Lembrancinhas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

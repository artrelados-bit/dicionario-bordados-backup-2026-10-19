import { Verbete } from "../types";

export const VERBETES_LETTER_G_PART2: Verbete[] = [
  {
    id: "g-007-gradiente-de-cores-degrade-de-pontos-color-blending",
    code: "G-007",
    term: "Gradiente de Cores & Degradê de Pontos (Color Blending / Gradient Shading in Digitizing)",
    letter: "G",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim gradiens (que avança passo a passo) e do francês dégrader (atenuar tons progressivamente). Técnica desenvolvida na pintura renascentista (sfumato) e adaptada na digitalização de matrizes nos anos 1990.",
    summary: "Técnica avançada de digitalização que mescla duas ou mais cores de linha através da variação progressiva de densidade de pontos, criando transições suaves e realismo.",
    definition: "O Gradiente de Cores / Degradê de Pontos (Color Blending / Feather Stitch Shading / Gradient Density) é a técnica avançada de programação de matrizes de bordado que realiza a transição tonal contínua e orgânica entre duas ou mais cores distintas de linhas, simulando o efeito de pintura a óleo ou aquarela têxtil (Needle Painting). Isso é alcançado através da sobreposição matemática de camadas de ponto tatami ou ponto cheio com espaçamentos variáveis e bordas irregulares (comprimento de ponto aleatório/espalhado), onde uma cor começa densa e vai se abrindo e rareando gradativamente enquanto a cor seguinte se insere nos espaços vazios, fundindo os fios aos olhos do observador.",
    technicalDetails: "Algoritmos de gradiente: 1) Gradiente Linear: variação contínua de densidade de 0.40mm para 1.20mm; 2) Borda Plumada (Jagged / Feather Edge): comprimentos de pontos alternados (ex: 2.5mm, 4.0mm, 1.8mm) para evitar linhas de corte duras; 3) Ângulos de ponto paralelos ou com desvio máximo de 5° a 10° para que as cores se entrelacem sem empastamento.",
    howItWorks: [
      "1. No software de bordado (Wilcom, Embird, Bernina, Pe-Design), o digitalizador define o contorno do objeto a ser sombreado (ex: a pétala de uma rosa ou o pelo de um animal).",
      "2. Cria a Camada 1 (cor de base, ex: Vermelho Escuro) com densidade gradual (densa na raiz a 0.40mm e espaçada na ponta a 1.20mm) com borda plumada.",
      "3. Cria a Camada 2 (segunda cor, ex: Laranja ou Amarelo) invertendo o sentido do gradiente (espaçada na raiz e densa na ponta) com o mesmo ângulo de inclinação.",
      "4. O software calcula o entrelaçamento microscópico dos pontos nos vãos livres.",
      "5. Na máquina de bordar, a agulha borda primeiramente a cor de base e, em seguida, insere a segunda cor entre os fios.",
      "6. O resultado visual é uma fusão de cores suave, tridimensional e hiper-realista, sem linhas divisórias secas."
    ],
    beginnerExplanation: "É o efeito pôr do sol ou pintura a óleo no bordado! Em vez de ter uma divisão dura onde o vermelho acaba e o amarelo começa de repente, o degradê faz a máquina ir soltando os pontos vermelhos aos poucos e misturando com os fios amarelos. De longe, parece uma pintura perfeita cheia de luz, sombra e profundidade!",
    applications: [
      "Pétalas de flores realistas (rosas, orquídeas, girassóis e folhas com efeito de luz)",
      "Bordados fotográficos e retratos humanos (tons de pele, bochechas e cabelos)",
      "Pelagem de animais (cães, gatos, leões e plumagem de pássaros tropicais)",
      "Logotipos modernos com degradês cromados, metálicos ou fundos de pôr do sol",
      "Efeitos de chama, água, fumaça e paisagens celestes em quadros bordados"
    ],
    commonErrors: [
      "Cruzar os ângulos das duas cores do degradê em 90°: isso cria uma sobreposição grossa e dura (empastamento) em vez de uma mistura suave",
      "Usar densidade cheia e pesada (0.35mm) nas duas camadas sobrepostas, criando uma placa grossa que quebra a agulha e enruga o tecido",
      "Não usar bordas plumadas/irregulares, gerando uma 'faixa listrada' artificial entre as cores"
    ],
    troubleshootingTips: [
      "Mantenha sempre os ângulos de ponto das duas cores perfeitamente paralelos para que as linhas se deitem lado a lado nos vãos livres",
      "A soma das duas densidades no ponto de encontro não deve ultrapassar a densidade padrão de uma camada normal (cerca de 0.40mm total)",
      "Utilize linhas de poliéster brilhante (trilobal) ou viscose: o brilho natural das fibras potencializa a ilusão de ótica de fusão de cores",
      "Programe comprimentos de ponto longos e curtos alternados (efeito plumado) na linha de transição"
    ],
    dicaArtrelados: "O degradê de pontos é o que separa um bordado amador de uma verdadeira obra de arte! Pratique fazer degradê de folhas (verde escuro para verde claro) ou bochechinhas de ursinhos: suas matrizes ganham vida, tridimensionalidade e encantam qualquer cliente!",
    voceSabia: "O olho humano não enxerga a linha individual a 50cm de distância; ele realiza uma 'síntese aditiva' de cores, exatamente como os monitores de televisão fazem com os pixels RGB: quando fios amarelos e azuis finos se cruzam no degradê, nosso cérebro enxerga a cor verde!",
    practicalExercise: "No seu programa de bordado ou matriz de teste, borde um círculo dividido com degradê de vermelho para amarelo: observe a peça de perto e de longe para sentir o efeito ótico de transição!",
    quickSummary: "Técnica de programação que mescla fios de cores diferentes variando a densidade para criar transições e sombras realistas.",
    relatedTerms: ["Ponto Tatami", "Ponto Cheio / Satin Stitch", "Fração de Densidade", "Cartela de Cores de Linha"],
    tags: ["g-007", "gradiente", "degrade", "color blending", "sombreamento", "needle painting", "realismo", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Shading, Color Blending and Feather Edge Mastery. Sydney, 2023.",
      "DEAN, Trish. Digitizing for Embroidery: Creative Textures & Gradients. Marlborough: Crowood Press, 2022.",
      "ARTRELADOS. O Segredo das Matrizes Realistas: Sombreamento e Degradê no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "g-008-gancho-da-lancadeira-bico-da-lancadeira-hook-timing",
    code: "G-008",
    term: "Gancho da Lançadeira / Bico da Lançadeira (Shuttle Rotary Hook Point & Hook Timing)",
    letter: "G",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do germânico gank (curvatura aguda de metal) e do latim lancea (arma arremessada). Mecanismo rotativo de precisão patenteado por Allen B. Wilson em 1851, coração de todas as máquinas de ponto fixo (Lockstitch).",
    summary: "Ponta de aço afiada e ultra-precisa da lançadeira rotativa que passa raspando na agulha para laçar a linha superior e formar o ponto com o fio da bobina.",
    definition: "O Gancho da Lançadeira (Rotary Hook Point / Bico da Lançadeira / Ponta Pega-Laçada) é o elemento mecânico rotativo fundamental de aço especial temperado e polido localizado dentro do compartimento inferior da máquina de bordar (abaixo da chapa de agulha). À medida que a agulha atinge o ponto morto inferior e sobe cerca de 1,8mm a 2,2mm (criando uma pequena laçada de folga na linha superior atrás da canaleta da agulha), o gancho da lançadeira gira em alta velocidade e sua ponta afiada passa a uma distância micrométrica (0,05mm a 0,10mm) do chanfro da agulha, 'pescando' a linha superior e expandindo-a ao redor da cápsula da bobina para entrelaçar com a linha de baixo.",
    technicalDetails: "Sincronismo mecânico (Hook Timing): 1) Folga radial agulha-gancho: 0.05mm a 0.10mm (não deve encostar nem ficar afastado); 2) Altura do gancho: o bico deve cruzar no terço inferior do chanfro (scarf) da agulha quando a barra sobe 2.0mm do ponto mais baixo; 3) Dureza do aço: HRC 60-64 com polimento óptico.",
    howItWorks: [
      "1. O motor da máquina movimenta sincronizadamente a barra de agulha e a lançadeira rotativa.",
      "2. A agulha desce atravessando o tecido, a entretela e a chapa de pontos.",
      "3. Ao chegar no ponto mais baixo e iniciar a subida, a linha superior afrouxa levemente, formando o laço (Loop).",
      "4. O gancho pontiagudo da lançadeira passa exatamente por dentro desse laço de linha.",
      "5. A rotação contínua da lançadeira conduz o fio por trás da caixa de bobina, enlaçando a linha inferior de 60wt.",
      "6. A alavanca estica-fio sobe no cabeçote e puxa o nó para o miolo do tecido, formando o ponto de bordado perfeito.",
      "7. Esse ciclo se repete de 600 a 1.000 vezes a cada minuto!"
    ],
    beginnerExplanation: "É a 'anzolzinha' de aço que fica rodando escondida lá embaixo da chapa da agulha, dentro da máquina! Toda vez que a agulha desce e sobe, esse biquinho passa raspando de fininho atrás da agulha e pesca a linha de cima, dando a volta na bobina para criar o ponto. Se esse biquinho estiver lascado ou fora do tempo certo, a máquina não consegue dar pontos e a linha quebra sem parar!",
    applications: [
      "Formação do ponto fixo (Lockstitch 301) em todas as máquinas de bordar domésticas e industriais",
      "Ajuste e calibração de ponto em manutenções preventivas de ateliê (Timing da Lançadeira)",
      "Polimento de rebarbas causadas por batidas acidentais de agulha",
      "Diagnóstico mecânico de falhas de ponto e quebras repetitivas de linha"
    ],
    commonErrors: [
      "Continuar bordando após uma colisão violenta da agulha na lançadeira: o bico do gancho fica com uma 'rebarba' cortante que fatia todas as linhas de bordado",
      "Tentar lixar o bico da lançadeira com lixa grossa de parede, alterando a geometria micrométrica da ponta",
      "Deixar acumular bolos de fiapos e restos de linha em volta do eixo da lançadeira, travando o giro do gancho"
    ],
    troubleshootingTips: [
      "Se a linha estiver arrebentando a cada 10 pontos mesmo com agulha nova, passe a ponta da unha com muito cuidado no bico da lançadeira: se sentir qualquer pontinha áspera ou arranhão, faça um polimento com lixa d'água 2000 ou chame um técnico",
      "Pingue UMA gota de óleo mineral transparente específico para máquina de costura na pista de rotação do gancho da lançadeira a cada 8 a 16 horas de trabalho contínuo",
      "Nunca force a barra da agulha com as mãos se o gancho travar: retire a chapa de agulha e limpe com um pincel macio"
    ],
    dicaArtrelados: "Uma gotinha de óleo no trilho da lançadeira no início do dia faz a sua máquina trabalhar suave como seda e protege o bico do gancho contra desgaste prematuro! Máquina bem lubrificada e sem fiapos não quebra linha e dura a vida inteira!",
    voceSabia: "O mecanismo da lançadeira rotativa gira DUAS vezes completas para cada UMA descida da agulha! Em uma máquina bordando a 800 pontos por minuto, o gancho da lançadeira executa incríveis 1.600 rotações por minuto com precisão de fração de milímetro!",
    practicalExercise: "Retire a chapa de agulha e a caixinha de bobina da sua máquina desligada: gire o volante lateral manualmente com a mão e observe com os olhos a pontinha do gancho passando milimetricamente atrás do chanfro da agulha!",
    quickSummary: "Ponta de aço de precisão da lançadeira rotativa responsável por laçar a linha superior e entrelaçar com a linha da bobina.",
    relatedTerms: ["Caixa de Bobina / Cápsula de Carretilha", "Chapa de Agulha", "Falso Nó no Avesso (Birdnesting)", "Agulha de Bordado"],
    tags: ["g-008", "gancho da lancadeira", "bico da lancadeira", "hook timing", "mecanica", "ponto fixo", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIES LTD. Technical Rotary Hook Timing, Maintenance and Polishing Manual. Nagoya, 2023.",
      "KOBAN HOOKS. The Mechanics of Rotary Hooks in High-Speed Embroidery. Osaka, 2022.",
      "ARTRELADOS. Mecânica Prática de Ateliê: Lançadeiras, Agulhas e Sincronismo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "g-009-garra-do-bastidor-encaixe-de-trava-do-pantografo",
    code: "G-009",
    term: "Garra do Bastidor / Encaixe de Trava do Pantógrafo (Hoop Bracket, Mounting Arm & Pantograph Clamp)",
    letter: "G",
    level: "Fundamental 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do gótico grawa (gancho de apreensão) e do grego pantographos (desenhador de tudo). Estrutura metálica de fixação mecânica entre o bastidor móvel e o carro de eixos X/Y da máquina computadorizada.",
    summary: "Braço metálico ou encaixe plástico reforçado no aro do bastidor que se acopla com trava de clique ao pantógrafo móvel da máquina de bordar.",
    definition: "A Garra do Bastidor (Hoop Bracket / Mounting Arm / Encaixe de Trava do Carro Pantográfico) é o dispositivo mecânico estrutural de engate rápido integrado à lateral do aro do bastidor de bordado, projetado para se acoplar com rigidez absoluta e tolerância zero aos pinos guia e travas do carro de movimentação cartesiana (pantógrafo nos eixos X e Y). Sua função crítica é transferir instantaneamente todas as acelerações, desacelerações e mudanças bruscas de direção dos motores de passo para a área de tecido esticado sem apresentar qualquer folga angular, jogo mecânico ou vibração lateral.",
    technicalDetails: "Tipos de fixação: 1) Engate Doméstico com trava de pressão/clique e parafusos de retenção borboleta; 2) Engates Industriais tubulares duplos em aço inoxidável com braçadeiras de pressão; 3) Pontos de micro-ajuste de nível para garantir que o bastidor fique 100% paralelo à chapa de agulha a 1,0mm de distância.",
    howItWorks: [
      "1. A bordadeira monta o tecido e a entretela no bastidor e aperta o parafuso de fixação.",
      "2. Leva o bastidor até o braço livre da máquina de bordar.",
      "3. Desliza a garra do bastidor sob o suporte do carro pantográfico, alinhando os pinos guias com os orifícios correspondentes.",
      "4. Pressiona a trava até ouvir o 'clique' sonoro característico ou aperta os botões/parafusos de fixação lateral.",
      "5. Realiza um leve teste tátil com os dedos para conferir se o bastidor não possui nenhuma folga solta.",
      "6. O pantógrafo movimenta o bastidor com extrema rigidez milimétrica durante a execução de cada ponto.",
      "7. Ao terminar, destrava a garra com um simples toque e retira o bastidor sem esforço."
    ],
    beginnerExplanation: "É aquele bracinho de metal ou plástico grosso que fica grudado do lado do bastidor e que você encaixa no ferrinho da máquina até dar aquele barulhinho de 'clique'! É através dele que a máquina segura o bastidor firme e move o tecido para a frente, para trás e para os lados na hora de bordar o desenho.",
    applications: [
      "Conexão rígida e segura de todos os tamanhos de bastidores (10x10, 13x18, 16x26, 20x30cm) à máquina",
      "Troca rápida de bastidores entre peças durante a produção seriada de ateliê",
      "Acoplamento de bastidores especiais (bastidor de boné, bastidor de meias e bastidores magnéticos)",
      "Inspeção de folgas mecânicas que causam contornos desalinhados na matriz"
    ],
    commonErrors: [
      "Encaixar o bastidor pela metade sem ouvir a trava de clique: o bastidor se solta no meio da produção em alta velocidade, entortando a barra de agulha e quebrando o suporte",
      "Apoiar objetos pesados ou forçar o bastidor para baixo enquanto ele estiver encaixado na máquina, empenando a haste de metal da garra",
      "Deixar parafusos do carro pantográfico frouxos, gerando folga que deforma círculos e letras"
    ],
    troubleshootingTips: [
      "Sempre segure o bastidor por ambas as laterais com as duas mãos ao encaixar e desencaixar da máquina",
      "Ouça sempre o som do travamento ou verifique visualmente se a alavanquinha de segurança travou 100%",
      "Se notar que as letras redondas estão saindo ovais ou que os contornos não estão casando, dê um leve toque com o dedo no bastidor encaixado: se ele balançar solto, aperte os parafusos da garra ou do suporte do pantógrafo"
    ],
    dicaArtrelados: "Trate a garra do bastidor com carinho de mãe! Nunca force o encaixe nem empurre com brutalidade. Um encaixe suave e firme garante que seu pantógrafo dure anos sem folgas mecânicas e que seus bordados saiam sempre redondinhos e perfeitos!",
    voceSabia: "Em máquinas industriais multicabeças (com 6 a 12 cabeçotes trabalhando juntos), as garras de bastidor são fresadas em blocos maciços de duralumínio aeroespacial para resistir a forças de desaceleração que ultrapassam 5G a cada troca de ponto!",
    practicalExercise: "Encaixe o bastidor vazio na sua máquina: sinta a firmeza da trava de engate, tente movimentar levemente com a ponta dos dedos para conferir a ausência de jogo e destrave a trava com calma!",
    quickSummary: "Braço de engate rápido com trava de segurança que acopla o bastidor rigidamente ao carro pantográfico da máquina.",
    relatedTerms: ["Bastidor de Bordado", "Compensação de Repuxo", "Função Trace / Contorno Prévio", "Gabarito de Bastidor"],
    tags: ["g-009", "garra do bastidor", "pantografo", "encaixe", "trava", "engate rapido", "componentes", "artrelados"],
    bibliographicReferences: [
      "BROTHER SEWING MACHINES. Hoop Attachment Mechanisms and Carriage Maintenance. Nagoya, 2023.",
      "JANOME EMBROIDERY SYSTEMS. Pantograph Clamp Tolerances and Carriage Alignment. Tokyo, 2022.",
      "ARTRELADOS. Estrutura Mecânica do Bordado: Bastidores, Garras e Eixos X/Y. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "g-010-gaze-voil-tecidos-finos-transparentes-no-bordado",
    code: "G-010",
    term: "Gaze, Voil & Tecidos Finos Transparentes no Bordado (Gauze, Voile & Sheer Fabric Embroidery)",
    letter: "G",
    level: "Avançado 🔴",
    category: "Materiais & Tecidos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Gaze do árabe gazz (seda fina da cidade de Gaza na Palestina) e Voil do francês voile (véu leve de algodão/seda). Tecidos de armação tela aberta e translúcida de extrema leveza e delicadeza.",
    summary: "Técnicas e cuidados para bordar sobre tecidos ultrafinos e translúcidos sem rasgar as fibras, sem enrugar e sem deixar entretelas visíveis no avesso.",
    definition: "O Bordado sobre Gaze, Voil, Organza e Tecidos Transparentes (Sheer Fabrics, Gauze and Voile Embroidery Mastery) é uma das áreas mais sofisticadas do bordado de ateliê, exigindo calibração cirúrgica de todos os parâmetros. Por se tratarem de tecidos com trama aberta, translúcida e de baixíssima densidade estrutural (pesando entre 20g/m² e 50g/m²), qualquer excesso de densidade de pontos ou tensão de linha resulta em furos, rasgos ou franzimento irreversível. O grande desafio técnico consiste em proporcionar estabilidade temporária durante o bordado e garantir que o avesso fique 100% limpo e invisível através da transparência do tecido.",
    technicalDetails: "Parâmetros para tecidos transparentes: Agulha: 60/8 ou 65/9 Microtex/Sharp finíssima; Linha: Fio nº 60 ou 75 (mais fino que o 40 tradicional); Estabilizador: Entretela Hidrossolúvel de filme espesso (Solvy de 80 micras) ou entretela termossolúvel; Densidade da matriz: Reduzida em 30% a 40% (espaçamento de 0.50mm a 0.65mm); Underlays: Apenas ponto corrente central suave.",
    howItWorks: [
      "1. A bordadeira seleciona uma matriz leve, delicada, com contornos suaves e sem blocos maciços de tatami pesado.",
      "2. Reduz a densidade da matriz no software para 0.55mm e programa pontos de underlay ultrafinos.",
      "3. Monta uma camada de entretela hidrossolúvel plástica pesada no bastidor.",
      "4. Posiciona o voil ou gaze sobre a entretela e cobre a parte superior com outra camada de plástico hidrossolúvel fino (efeito sanduíche translúcido).",
      "5. Instala agulha 65/9 Sharp e linha fina de bordado.",
      "6. Borda em velocidade reduzida (400 a 500 PPM) com tensão superior ligeiramente afrouxada.",
      "7. Ao terminar, retira a peça e dissolve toda a entretela em água morna: o bordado surge flutuando no tecido transparente com acabamento de alta costura."
    ],
    beginnerExplanation: "Sabe aquele tecido fininho transparente de cortina, véu de noiva ou vestidinho de festa bem leve que parece uma nuvem? Bordar nele parece difícil porque o tecido é quase transparente e rasga fácil! O segredo das profissionais é prender o tecido no meio de duas folhas de plástico solúvel na água e usar agulha bem fininha: quando você lava, o plástico some e o bordado fica lindo como se tivesse nascido na transparência do tecido!",
    applications: [
      "Véus de noiva, mantilhas e vestidos de noiva em tule, gaze de seda e organza",
      "Cortinas e xales de voil decorativos para salas e quartos de luxo",
      "Detalhes de transparência em blusas femininas de alta costura e lenços de seda",
      "Dosséis e mosquiteiros bordados para berços de bebê e quartos infantis",
      "Toalhas de mesa nobres com sobreposição de tecidos translúcidos"
    ],
    commonErrors: [
      "Usar entretela rasgável ou recortável branca tradicional: o pedaço de entretela fica totalmente visível através do tecido transparente, arruinando a estética da peça",
      "Usar agulha grossa 90/14: a ponta grossa faz buracos visíveis e rompe a trama delicada da gaze",
      "Bordar desenhos pesados com 20.000 pontos cheios em cima de um tecido fino que só aguenta 3.000 pontos"
    ],
    troubleshootingTips: [
      "Use SEMPRE entretela hidrossolúvel (Solvy) ao bordar tecidos transparentes para que nada fique visível no avesso",
      "Coloque na bobina inferior a mesma linha colorida do topo se o avesso da cortina ou véu for ficar aparente",
      "Diminua a velocidade da máquina para 400 ou 500 PPM para evitar que a agulha repuxe a trama leve da gaze",
      "Troque a agulha por uma 65/9 ou 70/10 Microtex novinha com ponta fina e afiada"
    ],
    dicaArtrelados: "Bordar véus de noiva e dosséis de berço em voil e tule é um dos nichos mais lucrativos do bordado de luxo! Com a técnica do sanduíche de plástico solúvel e agulha fina, você entrega um acabamento de encantar qualquer noiva ou mamãe!",
    voceSabia: "Na França do século XVIII, o bordado sobre gaze de seda transparente era conhecido como 'Broderie à l'Aiguille Aérienne' (Bordado Aéreo), reservado exclusivamente para os vestidos de baile da Rainha Maria Antonieta na corte de Versalhes!",
    practicalExercise: "Pegue um pedaço de voil ou cortina transparente: faça um sanduíche com plástico hidrossolúvel, borde uma inicial delicada com agulha fina, lave na água morna e veja como o bordado fica perfeito sem nenhum resíduo visível!",
    quickSummary: "Bordado sobre tecidos translúcidos e ultrafinos realizado com entretela hidrossolúvel, agulha fina e matriz de densidade reduzida.",
    relatedTerms: ["Entretela Hidrossolúvel", "Agulha de Bordado", "Ponto de Alinhavo / Basting Stitch", "Guipure / Renda Guipir"],
    tags: ["g-010", "gaze", "voil", "organza", "transparencia", "alta costura", "hidrossoluvel", "materiais", "artrelados"],
    bibliographicReferences: [
      "ROYAL SCHOOL OF NEEDLEWORK. Embroidering on Fine & Sheer Fabrics. London, 2023.",
      "MADEIRA THREADS. Sheer & Delicate Fabric Embroidery Masterclass. Freiburg, 2022.",
      "ARTRELADOS. Alta Costura no Bordado: Véus, Tules e Voil sem Segredos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "g-011-gorgurao-fita-de-gorgurao-personalizada-no-bastidor",
    code: "G-011",
    term: "Gorgurão & Fita de Gorgurão Personalizada no Bastidor (Grosgrain Ribbon Embroidery & Tags)",
    letter: "G",
    level: "Intermediário 🟡",
    category: "Materiais & Tecidos",
    grammarClass: "Substantivo masculino.",
    origin: "Do francês grosgrain (grão grosso, grão espesso), referindo-se ao tecido ou fita com nervuras horizontais encorpadas de seda, algodão ou poliéster criado na França no século XVII.",
    summary: "Fita encorpada com nervuras transversais muito utilizada para laços, etiquetas, alças e fitas personalizadas bordadas em série no bastidor.",
    definition: "O Bordado em Fita de Gorgurão (Grosgrain Ribbon Embroidery & Custom Label Production) é a técnica de personalização de fitas têxteis caracterizadas por sua tecelagem encorpada com nervuras salientes transversais (caneluras). Por sua alta resistência mecânica, durabilidade e acabamento estruturado que não desfia facilmente nas laterais, o gorgurão é a fita predileta para produção de laços infantis de luxo, etiquetas decorativas personalizadas de marcas artesanais, alças de bolsas, fitas de embalagem de presentes finos e medalhas comemorativas.",
    technicalDetails: "Propriedades da fita: Larguras comuns: 15mm, 22mm, 38mm e 50mm em poliéster 100%. Montagem técnica: Executada na técnica de Flutuação com entretela rasgável autoadesiva (ou entretela padrão com fita dupla face para bordado), com matriz programada em múltiplos alinhados em sequência contínua.",
    howItWorks: [
      "1. A bordadeira monta uma folha de entretela rasgável bem firme no bastidor (ex: 13x18cm ou 16x26cm).",
      "2. A máquina executa um alinhador em ponto de alinhavo (linha guia) marcando onde as fitas devem ser coladas.",
      "3. A bordadeira aplica fita adesiva dupla face ou cola spray temporária ao longo das linhas guias.",
      "4. Estica 3 a 5 tiras de fita de gorgurão paralelas sobre as linhas marcadas, colando-as sem esticar em demasia.",
      "5. A máquina borda os nomes, frases ou logotipos em série em todas as fitas de uma só vez.",
      "6. Ao terminar, retira-se o bastidor, destacam-se as fitas da entretela e corta-se cada unidade no tamanho desejado.",
      "7. Sela-se as pontas cortadas com calor suave (isqueiro ou pirógrafo) para evitar desfiamento."
    ],
    beginnerExplanation: "É aquela fita caneladinha e durinha super charmosa usada para fazer laços de cabelo de princesa, faixas de presentes e etiquetinhas personalizadas! Como a fita é fininha e comprida, você não prende ela no aro do bastidor: você gruda várias fitas lado a lado na entretela com fita dupla face e a máquina borda 5 ou 10 fitinhas ao mesmo tempo!",
    applications: [
      "Fitas bordadas com nome para laços infantis de cabelo, tiaras e presilhas de bebê",
      "Etiquetas de marca e tags personalizadas para produtos de costura criativa e ateliê",
      "Alças de mochilas, bolsas térmicas e sacolas ecológicas personalizadas",
      "Fitas comemorativas para embalagens de luxo de casamentos, batizados e doces finos",
      "Fitas de medalhas esportivas e cordões de crachá corporativos"
    ],
    commonErrors: [
      "Tentar prender a fita fininha direto no aro plástico do bastidor: o aro entorta a fita e o bordado sai totalmente descentralizado e torto",
      "Usar letras grossas demais para a largura da fita, fazendo o ponto cheio extravasar a borda do gorgurão",
      "Não selar as pontas cortadas da fita com calor, fazendo a fita desfiar com o uso"
    ],
    troubleshootingTips: [
      "Utilize SEMPRE o método da flutuação com linha guia pré-bordada para posicionar as fitas com esquadro 100% reto",
      "Para fitas de 22mm ou 38mm, mantenha as letras com altura de 8mm a 14mm para garantir margem de segurança nas bordas",
      "Use agulha 75/11 de ponta fina para perfurar as nervuras durinhas do gorgurão sem desviar",
      "Programe a matriz no software multiplicando os nomes lado a lado para aproveitar o bastidor inteiro de uma só vez"
    ],
    dicaArtrelados: "Bordar fitas de gorgurão em lote é uma das maneiras mais rápidas e lucrativas de ganhar dinheiro no ateliê! Em um bastidor 13x18 ou 16x26, você borda 6 laços com nome de uma só vez em menos de 10 minutos com custo quase zero de material!",
    voceSabia: "O gorgurão era originalmente tecido com fios de seda nobre na cidade de Tours na França no século XVII e era o tecido oficial das faixas e condecorações da nobreza e das ordens de cavalaria militar da realeza europeia!",
    practicalExercise: "Borde uma linha guia no bastidor sobre entretela, cole uma fita de gorgurão de 38mm com fita dupla face, borde o nome de uma criança com uma fonte bonita e sele as pontas com calor para criar uma linda fita de laço!",
    quickSummary: "Fita canelada encorpada bordada na técnica de flutuação em lote para laços, etiquetas e acabamentos finos.",
    relatedTerms: ["Fixação em Flutuação", "Fita Dupla Face para Bordado", "Ponto de Alinhavo / Basting Stitch", "Arremate Térmico"],
    tags: ["g-011", "gorgurao", "fita", "lacos", "etiquetas", "flutuacao", "personalizacao", "materiais", "artrelados"],
    bibliographicReferences: [
      "CREATIVE PUBLISHING INTERNATIONAL. The Complete Photo Guide to Ribbon Embroidery & Trims. Minneapolis, 2022.",
      "MADEIRA THREADS. Ribbon, Webbing & Narrow Fabric Embroidery Techniques. Freiburg, 2023.",
      "ARTRELADOS. O Negócio dos Laços e Fitas Bordadas em Série no Ateliê. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "g-012-gravacao-em-relevo-ponto-esculpido-na-matriz-carving-stamp",
    code: "G-012",
    term: "Gravação em Relevo / Ponto Esculpido na Matriz (Carving Stamp / Embossed Stitch Effect in Digitizing)",
    letter: "G",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês carving (entalhe, escultura em relevo) e stamp (carimbo de prensagem). Recurso matemático de softwares de digitalização profissionais que cria padrões táteis geométricos sobre pontos de preenchimento.",
    summary: "Efeito de digitalização que cria desenhos, monogramas ou texturas entalhadas em baixo ou alto relevo dentro de uma grande área de ponto tatami.",
    definition: "A Gravação em Relevo / Efeito Esculpido (Carving Stamp / Embossed Stitching / Ponto Entalhado) é uma ferramenta avançada de digitalização nos softwares de bordado profissionais que projeta linhas de penetração de agulha com padrão geométrico pré-definido sobre um bloco contínuo de ponto tatami (preenchimento). Sem adicionar novas cores de linha nem aumentar a contagem total de pontos, o software altera o alinhamento das quedas de agulha exatamente ao longo do desenho do carimbo (floral, geométrico, ondas ou monograma), criando um relevo táctil sutil e sofisticado que reflete a luz em ângulos diferentes, simulando tecido jacquard ou couro entalhado.",
    technicalDetails: "Mecanismo computacional: O algoritmo do Carving Stamp insere pontos de penetração forçados no padrão do vetor dentro das carreiras do tatami. Como a linha é puxada para dentro do tecido nesses pontos específicos, cria-se uma micro-canaleta que projeta sombra natural. Não altera a densidade nem a espessura da peça.",
    howItWorks: [
      "1. No software de digitalização (ex: Wilcom Embroidery Studio ou similar), o digitalizador cria uma grande área de preenchimento com Ponto Tatami (ex: o corpo de um casaco, a asa de uma borboleta ou um medalhão de fundo).",
      "2. Seleciona a ferramenta Carving Stamp / Carimbo de Relevo.",
      "3. Desenha um vetor ou seleciona um padrão da biblioteca (arabescos florais, textura de escamas, linhas diagonais ou um monograma).",
      "4. Posiciona e dimensiona o carimbo sobre a área do tatami.",
      "5. O software recompila a matriz, alinhando as quedas de agulha ao longo das linhas do carimbo.",
      "6. Na máquina de bordar, a agulha executa o bloco de tatami e, automaticamente, o relevo esculpido se revela através do jogo de luz e sombra dos fios.",
      "7. A peça ganha uma textura nobre e exclusiva de alta alfaiataria sem pesar nem repuxar o tecido."
    ],
    beginnerExplanation: "É como passar um carimbo mágico que entalha um desenho lindo no meio de um bordado liso! Sabe quando a máquina está preenchendo um fundo grande de uma cor só? Com esse efeito, a máquina vai descendo a agulha em lugares estratégicos e forma desenhos em relevo de flores, arabescos ou xadrez no meio da mesma cor de linha! Fica parecendo tecido nobre de realeza com relevo de verdade!",
    applications: [
      "Texturas nobres em brasões, fundos de medalhões corporativos e escudos heráldicos",
      "Efeito de escamas em animais marinhos, penas de asas de pássaros e peles de répteis",
      "Monogramas elegantes e discretos 'tom sobre tom' em almofadas e enxovais de noiva",
      "Fundos texturizados para jaquetas de couro sintético e bolsas de luxo",
      "Efeito de tecido damasco ou jacquard em mantas e colchas bordadas"
    ],
    commonErrors: [
      "Aplicar carimbos com traços finíssimos menores que 1mm em tecidos felpudos (a felpa esconde o efeito esculpido)",
      "Usar ponto cheio muito solto em vez de ponto tatami firme para aplicar o efeito (o carving stamp só funciona com perfeição sobre tatami estruturado)",
      "Colocar carimbos complexos demais com traços muito próximos, criando áreas com excesso de perfurações"
    ],
    troubleshootingTips: [
      "Para destacar o efeito do relevo esculpido ao máximo, utilize tecidos planos lisos (como tricoline, cetim, sarja ou microfibra) e linha de poliéster brilhante",
      "Utilize o efeito em bordados 'tom sobre tom' (linha da mesma cor do tecido): o relevo cria um contraste luxuoso e discreto através do brilho da luz",
      "Mantenha a densidade do tatami em torno de 0.40mm para que as micro-canaletas fiquem bem definidas",
      "Evite usar plástico hidrossolúvel por cima em tecidos lisos para não amassar as canaletas de relevo"
    ],
    dicaArtrelados: "O Ponto Esculpido é o maior segredo para criar bordados de luxo sem gastar mais linha nem aumentar o tempo de máquina! Experimente fazer almofadas em linho ou microfibra com monogramas entalhados no tatami: o resultado é de uma elegância digna de lojas de decoração de alto padrão!",
    voceSabia: "O efeito de ponto esculpido no bordado computadorizado foi inspirado na milenar técnica italiana do 'Trapunto' e do 'Piqué Renascentista', onde as bordadeiras medievais criavam relevos em relevo falso costurando padrões geométricos com cordões de algodão embutidos!",
    practicalExercise: "No seu software de matriz, crie um quadrado de tatami e aplique um carimbo floral em carving stamp: borde em um retalho de cetim ou tricoline e incline a peça contra a luz para ver o efeito de sombra se revelar!",
    quickSummary: "Recurso de digitalização que entalha texturas e desenhos em relevo dentro do ponto tatami sem adicionar pontos extras.",
    relatedTerms: ["Ponto Tatami", "Compensação de Repuxo", "Fração de Densidade", "Direção de Ponto / Ângulo de Ponto"],
    tags: ["g-012", "gravacao em relevo", "carving stamp", "ponto esculpido", "tatami", "textura", "digitalizacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. User Guide: Carving Stamps, Textures and Stitch Effects. Sydney, 2023.",
      "DEAN, Trish. Creative Digitizing: Carving & Embossing in Embroidery. Marlborough: Crowood Press, 2022.",
      "ARTRELADOS. Segredos da Digitalização Artística: Texturas, Carimbos e Relevos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

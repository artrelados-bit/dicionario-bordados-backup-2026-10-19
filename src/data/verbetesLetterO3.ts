import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART3: Verbete[] = [
  {
    id: "offset-de-tatami-fracao-deslocamento",
    code: "O-017",
    letter: "O",
    term: "Offset de Tatami / Fração de Deslocamento de Linhas (Tatami Offset Fraction)",
    pronunciation: "óf-sét de ta-ta-mi / fra-ção de des-lo-ca-men-to",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Parâmetro fracionário no software que define o deslocamento horizontal dos pontos entre fileiras adjacentes de tatami, gerando texturas lisas, sarjadas ou padrões geométricos decorativos.",
    origin: "Do inglês 'tatami offset fraction', termo cunhado pelos pioneiros do software de bordado na Austrália (Wilcom) na década de 1980 a partir do padrão tradicional das esteiras japonesas Tatami.",
    definition: "O Offset de Tatami (ou Fração de Deslocamento de Ponto Tatami / Row-to-Row Offset) é a variável matemática que governa a distância angular e linear em que a penetração da agulha de uma linha de costura se desloca em relação à penetração da agulha da linha imediatamente anterior. Expressa em fração ou porcentagem (ex: 0,25 ou 25%, 0,33 ou 33%, 0,50 ou 50%), essa alteração modifica radicalmente o reflexo da luz na linha de poliéster, transformando uma superfície de preenchimento fosca uniforme em uma textura sarjada diagonal (Twill), padrão de espinha de peixe (Herringbone) ou efeito de tijolinho (Brick).",
    howItWorks: [
      "1. O programador cria um bloco de preenchimento tatami no software de digitalização.",
      "2. No menu de propriedades do ponto tatami, seleciona a caixa 'Fração de Deslocamento / Offset'.",
      "3. Ao configurar o valor em 0,50 (50%), os pontos de cada linha caem exatamente no meio da linha vizinha, criando uma textura de tijolo clássico.",
      "4. Ao configurar o valor em 0,25 (25%) ou 0,33 (33%), os pontos se alinham em uma diagonal perfeita com ângulo de 45° ou 60° (padrão sarja).",
      "5. Ao configurar o valor com aleatoriedade (Random Tatami Offset), as penetrações são embaralhadas, eliminando qualquer linha indesejada na textura.",
      "6. A máquina costura com brilho facetado e efeito visual sofisticado."
    ],
    beginnerExplanation: "É o jeito como os pontinhos do fundo tatami se organizam no computador! Sabe quando você constrói uma parede de tijolos e coloca o tijolo de cima bem no meio de dois tijolos de baixo? Isso é um offset de 50%! Mudando esse número no programa, você pode fazer o fundo do bordado parecer um tecido jeans, uma parede de tijolinhos ou uma textura super lisa que não marca nada!",
    applications: [
      "Simulação de tecidos texturizados como sarja de jeans, linho e fibra de carbono",
      "Eliminação de linhas de 'listras' indesejadas em grandes áreas de fundo",
      "Criação de efeitos visuais de sombra e relevo em brasões e escudos esportivos",
      "Personalização de padrões geométricos exclusivos para animais, pelagens e escamas"
    ],
    technicalDetails: "Um offset de 0,50 (1/2) produz o menor padrão de linhas direcionais, sendo o mais indicado para fundos planos e logotipos corporativos. O comprimento de ponto padrão para tatami com offset calibrado varia de 3,5 mm a 4,2 mm com densidade de 0,38 mm a 0,42 mm. Valores de offset descalibrados podem causar sobreposição de perfurações no mesmo ponto da trama, enfraquecendo o tecido.",
    commonErrors: [
      "❌ Usar offset de 0,00 (0%), fazendo todas as penetrações da agulha caírem exatamente na mesma coluna, criando sulcos profundos e furos no tecido",
      "❌ Misturar offsets diferentes em dois blocos de mesma cor que deveriam parecer contínuos",
      "❌ Usar comprimento de ponto muito curto (menos de 2,5 mm) com offset 0,25, acumulando rigidez excessiva na peça",
      "❌ Não usar a função 'Aleatório / Random' ao bordar pele humana ou rostos realistas"
    ],
    troubleshootingTips: [
      "Se o fundo tatami ficar com listras verticais feias: Altere o offset de 0,0 para 0,50 (ou ative o modo Tatami Aleatório)",
      "Se o preenchimento parecer duro como uma tábua: Aumente o comprimento do ponto para 4,0 mm e use offset de 0,33",
      "Se o brilho da linha parecer opaco: Gire o ângulo geral do tatami em 45° em conjunto com o offset sarjado"
    ],
    dicaArtrelados: "Para fazer fundo de escudo de futebol ou brasão com visual de camisa esportiva de luxo, use Offset de 0,25 com comprimento de ponto de 4,0 mm: o bordado ganha uma textura diagonal cintilante que reflete a luz igualzinha a um tecido de sarja nobre!",
    voceSabia: "A palavra 'Tatami' vem dos tradicionais tapetes de palha trançada do Japão feudal do século VIII, cujos nós eram matematicamente alternados para que a esteira pudesse ser enrolada sem quebrar as fibras de junco!",
    practicalExercise: "No seu software, crie três quadrados de tatami de 4x4 cm lado a lado. Configure o quadrado 1 com offset 0,50, o quadrado 2 com offset 0,25 e o quadrado 3 com offset aleatório. Borde os três e observe como a luz bate de maneira totalmente diferente em cada um.",
    quickSummary: "Deslocamento de pontos entre linhas de tatami que cria texturas decorativas (tijolo, sarja) e elimina listras indesejadas.",
    relatedTerms: ["Ponto Tatami", "Ângulo de Ponto", "Densidade de Pontos", "Comprimento do Ponto"],
    tags: ["o-017", "offset de tatami", "texturas", "sarja", "preenchimento", "wilcom", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Mastering Tatami Offsets, Textures & Fill Patterns. Wilcom Training Guide, 2021.",
      "GIBBON, P. The Geometry of Stitch Textures: Industrial Pattern Digitizing. Textile Press, 2020."
    ]
  },
  {
    id: "organ-needle-agulhas-japonesas-organ",
    code: "O-018",
    letter: "O",
    term: "Organ Needles / Sistema de Agulhas Japonesas Organ (Organ Sewing Needles System)",
    pronunciation: "or-gan ni-dous / a-gu-lhas ja-po-ne-sas or-gan",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo próprio composto.",
    category: "Agulhas & Fios",
    summary: "Uma das marcas japonesas líderes mundiais na fabricação de agulhas de alta precisão para bordadeiras industriais e domésticas, célebre pelos sistemas DBxK5, HAx1EBBR e acabamento de titânio PD.",
    origin: "Fundada em 1920 em Tóquio, Japão, a Organ Needle Co. Ltd. revolucionou a forjaria de agulhas industriais de costura e bordado com ligas de aço cromo-molibdênio de altíssima pureza.",
    definition: "As Agulhas Organ (Organ Needles) representam o padrão de referência global adotado pela maioria dos grandes fabricantes japoneses de máquinas de bordar (como Tajima, Barudan, Brother, Janome e HappyJapan). A marca é reconhecida por sua tecnologia de ponta na fabricação de sistemas específicos para bordado computadorizado, como o sistema DBxK5 (para máquinas industriais com olho 30% maior) e o sistema 130/705 H-E / HAx1EBBR (para máquinas domésticas), além dos revestimentos de nitreto de titânio Perfect Durability (PD) que proporcionam vida útil até cinco vezes superior às agulhas comuns de cromo.",
    howItWorks: [
      "1. A agulha Organ é forjada a partir de uma barra de aço especial com tratamento térmico a vácuo.",
      "2. O olho é polido por microjateamento químico para garantir deslizamento sem atrito.",
      "3. Nas versões PD (Titanium), recebe um revestimento cerâmico dourado de nitreto de titânio de 3.000 Vickers de dureza.",
      "4. Instalada na máquina, a agulha perfura tecidos pesados ou abrasivos com deflexão mínima.",
      "5. A geometria exclusiva da cava (Scarf) garante que a lançadeira capture a laçada com 100% de precisão.",
      "6. Mantém a ponta afiada por mais de 20 a 30 horas de bordado contínuo em alta velocidade."
    ],
    beginnerExplanation: "É uma das marcas de agulha mais famosas e queridas do mundo, fabricada no Japão! As agulhinhas da Organ são famosas por serem super resistentes, quase não quebrarem e terem um furinho tão polido que a linha corre macia sem desfiar. As agulhas douradas da Organ têm banho de titânio e duram muito mais tempo bordando sem perder a ponta!",
    applications: [
      "Equipamento padrão de fábrica em máquinas Brother, Janome, Bernette, Tajima e Barudan",
      "Bordados em alta velocidade (800 a 1.000 PPM) em polos de piquet e toalhas",
      "Bordados em materiais abrasivos e couros com agulhas Organ PD de titânio",
      "Bordados delicados em sedas e organzas com calibres finos 65/9 e 70/10"
    ],
    technicalDetails: "As agulhas industriais Organ utilizam o sistema DBxK5 (com cabo redondo e olho alongado), enquanto as domésticas utilizam o sistema HAx1EBBR (com cabo achatado e ranhura frontal profunda). A tolerância dimensional de fabricação da Organ é de ±0,002 mm, garantindo sincronismo perfeito com a ponta da lançadeira.",
    commonErrors: [
      "❌ Tentar usar agulhas industriais DBxK5 (de cabo redondo) em máquinas domésticas que exigem cabo achatado (HAx1)",
      "❌ Não trocar a agulha após 15 a 20 horas de uso contínuo, mesmo que ela ainda não tenha quebrado (a ponta perde o corte)",
      "❌ Comprar agulhas falsificadas no mercado paralelo sem o holograma de autenticidade da Organ Japão",
      "❌ Usar calibre 90/14 em tecidos finos de cetim ou percal, abrindo furos permanentes na trama"
    ],
    troubleshootingTips: [
      "Se a linha metálica estiver quebrando com agulha comum: Troque para agulha Organ Metal Stitcher ou Topstitch 80/12",
      "Se a máquina doméstica pular pontos: Verifique se a agulha instalada é do sistema HAx1EBBR de bordado com o lado chato para trás",
      "Se o bordado em boné entortar a agulha: Use o modelo Organ DBxK5 com revestimento de titânio PD calibre 80/12"
    ],
    dicaArtrelados: "Para ter sempre o melhor resultado no seu ateliê: tenha uma caixinha de agulhas Organ 75/11 Ponta Bola (SES) para o dia a dia e uma caixinha de Organ Dourada de Titânio (PD) 80/12 para bonés e toalhas pesadas. Você nunca mais terá dor de cabeça com quebra de linha!",
    voceSabia: "A fábrica da Organ no Japão produz mais de 2 milhões de agulhas por dia e testa cada lote com feixes de raio laser microscópicos para garantir que nenhum orifício tenha a menor rebarba!",
    practicalExercise: "Pegue uma agulha dourada Organ Titanium (PD) e uma agulha comum usada. Passe o dedo suavemente na ponta de ambas (com cuidado) e sinta como a Organ mantém a ponta perfeitamente afiada e lisa mesmo após muitas horas de bordado.",
    quickSummary: "Marca japonesa de agulhas de alta precisão; referência mundial em sistemas DBxK5 e revestimentos de titânio PD.",
    relatedTerms: ["Agulha de Bordar", "Agulha de Titânio (PD Finish)", "Cava da Agulha (Scarf)", "Sistema de Agulha DBxK5 e 130/705 H-E"],
    tags: ["o-018", "organ needles", "agulhas japonesas", "dbxk5", "titanium pd", "qualidade", "artrelados"],
    bibliographicReferences: [
      "ORGAN NEEDLE CO. LTD. Technical Catalog of Industrial & Domestic Embroidery Needles. Tokyo, 2021.",
      "JAPAN SEWING MACHINERY ASSOCIATION. Precision Needle Standards in Computerized Embroidery. Tokyo, 2020."
    ]
  },
  {
    id: "overdrive-de-calcador-ajustavel-mola",
    code: "O-019",
    letter: "O",
    term: "Overdrive de Calcador / Calcador Ajustável por Mola (Spring-Loaded Presser Foot)",
    pronunciation: "ô-ver-drai-ve de cal-ca-dor / a-jus-tá-vel por mo-la",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Mecanismo cinemático com mola helicoidal de ação rápida que pressiona o tecido no momento exato da subida da agulha para suprimir o efeito pula-pula (flagging) e amortecer variações de relevo.",
    origin: "Patenteado na Suíça e no Japão na década de 1970 para possibilitar o bordado de alta velocidade em tecidos acolchoados e de espessura variável.",
    definition: "O Calcador com Mecanismo de Mola Dinâmica (Spring-Loaded / Floating Presser Foot) é um componente biomecânico instalado na barra do calcador da máquina de bordar. Ele opera em sincronismo com a árvore de cames do cabeçote: durante a descida da agulha, o calcador desce e sua mola calibrada exerce uma pressão elástica progressiva sobre o tecido montado no bastidor. Quando a agulha atinge o Ponto Morto Inferior e começa a subir, o calcador mantém o tecido firmemente colado à chapa de agulha por alguns milissegundos adicionais, impedindo que o tecido seja içado pela fricção da linha e da agulha (Flagging), garantindo a perfeita formação da laçada com a lançadeira.",
    howItWorks: [
      "1. A árvore de comando superior aciona a haste do calcador em sincronia com o ciclo de 360° da máquina.",
      "2. O calcador atinge o tecido cerca de 10° a 15° antes da ponta da agulha penetrar o tecido.",
      "3. A mola helicoidal interna absorve o impacto e compensa eventuais variações de espessura (como costuras ou mantas acolchoadas).",
      "4. A agulha penetra, forma a laçada embaixo e inicia o movimento ascendente.",
      "5. A base do calcador continua segurando o tecido plano contra a chapa.",
      "6. A agulha sai completamente do tecido e, somente então, o calcador sobe de 1,0 mm a 2,0 mm.",
      "7. O pantógrafo se desloca livremente no plano XY para a coordenada do próximo ponto."
    ],
    beginnerExplanation: "É aquela molinha que fica em cima do pezinho da máquina! Quando a agulha entra no pano e vai subir de volta, a molinha empurra o pezinho para baixo para segurar o tecido bem firme contra a chapa. Se não tivesse essa molinha, o pano ia subir junto com a agulha (parecendo que estava pulando numa cama elástica) e a máquina ia perder pontos ou embolar linha embaixo!",
    applications: [
      "Supressão total do efeito pula-pula (Flagging) em tecidos grossos ou elásticos",
      "Bordados em peças com enchimento espesso como mantas de bebê, matelassê e jaquetas puffer",
      "Transposição suave de costuras grossas em jeans e bonés estruturados",
      "Redução do ruído mecânico de batida seca do cabeçote"
    ],
    technicalDetails: "A constante de elasticidade (k) da mola do calcador é calculada entre 0,8 e 1,5 N/mm. A folga de flutuação (Hover Height) deve ser regulada de modo que, na posição mais baixa, o calcador comprima o tecido em aproximadamente 0,5 mm sem marcar as fibras. Em máquinas industriais modernas, a altura do calcador pode ser ajustada digitalmente pelo painel (Electronic Foot Height).",
    commonErrors: [
      "❌ Regular o calcador muito alto, deixando o tecido solto para pular junto com a agulha e perder laçadas",
      "❌ Regular o calcador muito baixo, arrastando e marcando tecidos nobres como veludo ou couro",
      "❌ Deixar a mola do calcador quebrar ou perder a pressão por falta de lubrificação, travando a haste para cima",
      "❌ Usar calcador rígido sem mola em bordados de alta velocidade com tecidos volumosos"
    ],
    troubleshootingTips: [
      "Se a máquina pular pontos em tecidos acolchoados: Abaixe a regulagem de altura do calcador no parafuso manual ou no painel digital",
      "Se o calcador deixar marcas redondas brilhantes no tecido: Levante a altura de folga do calcador em 1,0 mm",
      "Se o calcador fizer um rangido agudo ao subir e descer: Aplique 1 gota de óleo mineral branco na haste e na mola"
    ],
    dicaArtrelados: "Quando for bordar toalhas aveludadas ou roupões bem fofos, ajuste a altura do calcador da sua máquina para ficar 1 mm mais altinho: ele vai segurar a toalha sem amassar o veludo e sem deixar marcas de pressão!",
    voceSabia: "Nas máquinas industriais Tajima mais modernas, a altura de cada calcador dos 15 cabeçotes é controlada por micromotores de passo digitais independentes a cada troca de agulha!",
    practicalExercise: "Borde um retalho de manta acrílica com o calcador regulado muito alto (observe o tecido pulando junto com a agulha). Em seguida, ajuste a altura para que o calcador apoie suavemente o tecido. Veja a estabilidade imediata dos pontos.",
    quickSummary: "Mecanismo com mola de amortecimento que pressiona o tecido na subida da agulha para impedir o efeito pula-pula (flagging).",
    relatedTerms: ["Flagging / Efeito Pula-Pula", "Calcador de Bordar", "Nivelamento da Pressão do Calcador", "Lançadeira Rotativa"],
    tags: ["o-019", "calcador ajustavel", "mola", "overdrive", "flagging", "componentes", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Presser Foot Dynamics, Spring Mechanics & Digitally Controlled Foot Height. Nagoya, 2021.",
      "SCHMETZ. The Mechanics of Fabric Movement and Loop Retention in Sewing. Technical Papers, 2020."
    ]
  },
  {
    id: "origem-de-coordenadas-ponto-zero",
    code: "O-020",
    letter: "O",
    term: "Origem de Coordenadas (X:0, Y:0) / Ponto Zero da Matriz (Design Origin & Center Point)",
    pronunciation: "o-ri-gem de co-or-de-na-das / pon-to ze-ro",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    summary: "Ponto de referência cartesiano absoluto (0,0) que define o centro geométrico ou o ponto de ancoragem inicial da matriz, fundamental para o alinhamento exato no bastidor e no painel da máquina.",
    origin: "Do sistema de coordenadas cartesianas desenvolvido pelo filósofo e matemático francês René Descartes em 1637, base matemática de todo comando CNC e bordado computadorizado.",
    definition: "A Origem de Coordenadas (ou Ponto Zero Cartesiano / Design Origin X:0, Y:0) é o ponto de referência espacial absoluto em torno do qual todas as coordenadas de deslocamento do pantógrafo (comandos de vetor X e Y em décimos de milímetro) são calculadas dentro do arquivo digital de bordado (como .DST, .PES, .JEF ou .EXP). Na imensa maioria dos softwares e máquinas, a origem é posicionada no centro geométrico exato do desenho. O alinhamento desse ponto no painel da máquina com a marcação central feita no tecido garante que o bordado seja executado no local exato pretendido, sem colidir com as bordas do bastidor.",
    howItWorks: [
      "1. No software de criação, o programador finaliza a matriz e aciona a ferramenta 'Centralizar na Origem' (Auto-Center).",
      "2. O software recalcula todas as coordenadas relativas para que o centro do desenho coincida com X:0,0 e Y:0,0.",
      "3. O operador marca uma cruz com giz ou caneta fantasminha no centro do peito da camiseta.",
      "4. Monta a camiseta no bastidor alinhando a cruz central com os gabaritos do bastidor.",
      "5. No painel da máquina, posiciona a agulha sobre a cruz do tecido e define aquela coordenada como o Ponto Zero / Origem.",
      "6. A máquina executa o teste de área (Trace) a partir desse ponto central.",
      "7. O bordado é executado com simetria e alinhamento milimétrico impecável."
    ],
    beginnerExplanation: "É o 'coração' ou o ponto central do seu desenho no computador! É a partir desse ponto (X:0, Y:0) que a máquina sabe para onde deve se mover: tantos milímetros para a direita, tantos para a esquerda, para cima e para baixo. Se você alinhar o ponto zero da máquina bem no meio da cruz que você riscou no tecido, o bordado vai sair perfeitamente reto e centralizado!",
    applications: [
      "Centralização milimétrica de logotipos no peito de camisas polos e jalecos",
      "Alinhamento de matrizes de barrado contínuo em toalhas de banho e lençóis",
      "Prevenção de colisões da barra de agulha contra as bordas plásticas do bastidor",
      "Emendas perfeitas de matrizes divididas em vários passos (Multi-Hooping)"
    ],
    technicalDetails: "Nos arquivos binários de bordado (como Tajima .DST), os deslocamentos são codificados como vetores incrementais (delta X e delta Y) medidos em unidades de 0,1 mm (1 décimo de milímetro). Se o ponto de início (Start Point) e o ponto final (End Point) não forem configurados para retornar à Origem (0,0), o pantógrafo pode acumular desvios em produções repetitivas de alta tiragem.",
    commonErrors: [
      "❌ Salvar a matriz com o ponto de origem deslocado em um canto aleatório fora do centro do desenho",
      "❌ Não fazer a checagem de área (Trace) no painel antes de apertar o botão verde de início",
      "❌ Mudar o ponto zero no meio do bordado após uma parada de linha, desalinhando o restante da peça",
      "❌ Confundir a origem da matriz com o ponto de parada inicial da primeira agulha"
    ],
    troubleshootingTips: [
      "Se a máquina acusar 'Desenho fora da área do bastidor' mesmo cabendo no aro: Abra a matriz no software e use a função 'Centralizar Desenho na Origem (0,0)'",
      "Se o bordado começar em um local totalmente torto no tecido: Recoloque a agulha sobre a marcação central do tecido e pressione 'Definir Ponto Zero / Origin Set' no painel",
      "Se o pantógrafo não voltar para o centro ao terminar: Configure no software a opção 'Retornar ao Centro ao Finalizar'"
    ],
    dicaArtrelados: "Crie o hábito de SEMPRE ativar a opção 'Retornar ao Ponto de Origem ao Término' no seu programa de matrizes: assim que o bordado acaba, o bastidor volta sozinho para o centro exato, pronto para você tirar a peça e colocar a próxima sem perder tempo!",
    voceSabia: "O sistema de coordenadas cartesianas foi inventado por René Descartes quando ele estava deitado na cama observando uma mosca voar no teto do seu quarto e percebeu que podia descrever a posição exata da mosca medindo a distância dela até as duas paredes vizinhas!",
    practicalExercise: "Abra uma matriz no seu computador. Mova todo o desenho para o canto superior direito da tela e salve. Abra o arquivo no painel da máquina e tente centralizar. Em seguida, use a ferramenta 'Centralizar na Origem' no software, recarregue na máquina e veja a facilidade de alinhamento.",
    quickSummary: "Ponto cartesiano central de referência (X:0, Y:0); base para o alinhamento correto do desenho no tecido e no bastidor.",
    relatedTerms: ["Trace / Traçado de Área Limite", "Área Útil do Bastidor", "Alinhamento e Centralização no Bastidor", "Otimização de Trajeto e Saltos"],
    tags: ["o-020", "origem de coordenadas", "ponto zero", "centro", "alinhamento", "cartesiano", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Coordinate Systems, Design Centering & Start/End Points. Wilcom Technical Guide, 2021.",
      "TAJIMA MOTOR CONTROLLERS. Cartesian Coordinate Interpretation in CNC Embroidery Systems. Tokyo, 2020."
    ]
  },
  {
    id: "orientacao-de-bastidor-rotacao-90-180-270",
    code: "O-021",
    letter: "O",
    term: "Orientação de Bastidor / Rotação de Matrizes (Hoop Orientation & Rotation)",
    pronunciation: "o-ri-en-ta-ção de bas-ti-dor / ro-ta-ção",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Operação da Máquina",
    summary: "Recurso no software e no painel da máquina para girar a matriz em incrementos angulares de 90°, 180°, 270° ou 1° a 1°, adaptando o desenho à posição física da peça montada no bastidor.",
    origin: "Do latim 'orientare' (voltar-se para o oriente / direcionar), função fundamental de manipulação gráfica presente em controladores CNC desde a década de 1980.",
    definition: "A Orientação de Bastidor (ou Rotação e Espelhamento de Matriz) é a operação de transformação geométrica no plano bidimensional que gira os eixos de coordenadas X e Y de um arquivo de bordado. Permite que peças de vestuário montadas no bastidor de ponta-cabeça ou de lado (para evitar que o corpo volumoso da jaqueta, bolsa ou toalha bata no braço livre da máquina) sejam bordadas na orientação visual correta, bastando aplicar uma rotação de 90° ou 180° no painel digital antes de iniciar a costura.",
    howItWorks: [
      "1. O operador precisa bordar o bolso de uma calça jeans ou uma toalha pesada.",
      "2. Para que o excesso de tecido fique para fora da máquina (sem embolar no braço livre), monta a peça de cabeça para baixo no bastidor.",
      "3. No painel da máquina ou no software, acessa a função 'Girar / Rotação'.",
      "4. Seleciona a opção de rotação em 180° (ou 90° conforme o encaixe do bastidor).",
      "5. O processador da máquina recalcula instantaneamente todos os vetores matemáticos para a nova posição.",
      "6. O operador executa o traçado de área (Trace) para confirmar o posicionamento.",
      "7. A máquina borda o desenho perfeitamente alinhado na posição correta em relação à roupa."
    ],
    beginnerExplanation: "É o botão de girar o desenho na tela da máquina! Às vezes, para colocar uma jaqueta pesada, bolsa ou toalha grande no bastidor sem a roupa ficar presa e batendo no braço da máquina, a gente precisa prender a peça de cabeça para baixo. Com esse botão, você gira o desenho em 90° ou 180° na tela e ele borda em pé direitinho!",
    applications: [
      "Bordados em bolsos prontos de camisas, calças e mochilas sem fechar a abertura",
      "Bordados em barras de toalhas de banho volumosas para deixar o peso do tecido livre na frente da máquina",
      "Gravação de nomes em mangas de camisas e pernas de calças",
      "Espelhamento simétrico de brasões e asas para lados esquerdo e direito de uniformes"
    ],
    technicalDetails: "A rotação matemática aplica a matriz de transformação clássica: X' = X·cos(θ) - Y·sen(θ) e Y' = X·sen(θ) + Y·cos(θ). Em arquivos processados diretamente na máquina, a rotação altera também a direção relativa dos ângulos de ponto e das forças de compensação de repuxo (Pull Compensation), o que deve ser considerado em tecidos com elasticidade unidirecional.",
    commonErrors: [
      "❌ Girar a matriz em 180° sem conferir o sentido no painel, bordando o nome de cabeça para baixo na camisa do cliente",
      "❌ Espelhar horizontalmente (Mirror) um desenho que contém texto legível, fazendo as letras saírem invertidas como em um espelho",
      "❌ Girar a matriz em 90° em um bastidor retangular e esquecer de verificar se a nova largura cabe na área útil",
      "❌ Girar no software e girar novamente no painel da máquina por engano, voltando para a posição errada"
    ],
    troubleshootingTips: [
      "Se você estiver com medo de bordar invertido: Faça SEMPRE o traçado de área (Trace) e observe para qual lado a agulha se desloca",
      "Se as letras saírem invertidas como espelho: Desative a função 'Mirror / Espelhar' no painel da máquina",
      "Se a matriz girada em 90° ultrapassar o bastidor: Troque para um bastidor de tamanho maior ou reduza ligeiramente a escala do desenho"
    ],
    dicaArtrelados: "A regra de ouro Artrelados para toalhas de banho gigantes: prenda a barra da toalha no bastidor de cabeça para baixo, deixando todo o corpo pesado da toalha caído para a sua frente (fora da máquina), e gire a matriz em 180° no painel. A máquina trabalha levinha e sem puxar peso nenhum!",
    voceSabia: "As primeiras bordadeiras com painel eletrônico na década de 1980 só permitiam girar o desenho em ângulos fixos de 90° em 90°; hoje, os painéis modernos permitem girar livremente em frações de 0,1 grau com toque na tela!",
    practicalExercise: "Monte um pedaço de tecido no bastidor. Carregue uma letra 'A' no painel da máquina. Aplique rotações sucessivas de 90°, 180° e 270°, observando o ícone na tela mudar de posição antes de dar o primeiro ponto.",
    quickSummary: "Recurso de rotação angular (90°, 180°, 270°) para ajustar o desenho à posição física da peça no bastidor com total segurança.",
    relatedTerms: ["Trace / Traçado de Área Limite", "Área Útil do Bastidor", "Origem de Coordenadas (X:0, Y:0)", "Alinhamento e Centralização no Bastidor"],
    tags: ["o-021", "orientacao de bastidor", "rotacao", "180 graus", "espelhamento", "painel da maquina", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Operating Instructions: Pattern Editing, Rotation & Mirror Imaging. Brother Manual, 2021.",
      "JANOME SEWING MACHINE CO. Memory Craft Screen Editing & Hoop Orientation Guide. Tokyo, 2020."
    ]
  },
  {
    id: "oleo-sintetico-vs-mineral-viscosidade-iso",
    code: "O-022",
    letter: "O",
    term: "Óleo Sintético vs. Mineral / Viscosidade ISO VG 10-22 (Lubricant Standards)",
    pronunciation: "ó-leo sin-té-ti-co vê-esse mi-ne-ral / vis-co-si-da-de i-so",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Operação da Máquina",
    summary: "Comparativo técnico e especificações normativas de lubrificação mecânica em bordadeiras industriais e domésticas, definindo a viscosidade cinemática correta para lançadeiras, bielas e mancais.",
    origin: "Das normas técnicas internacionais ISO 3448 e DIN 51519 de classificação de lubrificantes industriais de precisão.",
    definition: "O padrão de lubrificação de bordadeiras de alta velocidade exige uma estrita conformidade com a viscosidade cinemática (medida em centistokes / cSt a 40°C). O Óleo Mineral Branco Puro grau ISO VG 10 (viscosidade ~10 cSt) é a formulação padrão universal para a pista de atrito da lançadeira rotativa, pois dissipa rapidamente o calor e não acumula fiapos de linha. Já os Óleos Sintéticos de Éster ou Polialfaolefina (PAO) grau ISO VG 15 a 22 com aditivos antidesgaste são utilizados nos eixos superiores, rolamentos blindados e bielas de cabeçotes industriais, resistindo a regimes de trabalho ininterruptos de 24 horas por dia sem perda de viscosidade.",
    howItWorks: [
      "1. A bomba de óleo mecânica ou o operador aplica o lubrificante nos pontos especificados pelo manual do fabricante.",
      "2. O óleo ISO VG 10 flui instantaneamente pelas microfissuras da pista da lançadeira devido à sua baixa viscosidade.",
      "3. Em rotações de 1.000 RPM, forma uma cunha de pressão hidrodinâmica que levanta a cesta da bobina em milionésimos de milímetro.",
      "4. Nos eixos superiores, o óleo ISO VG 22 sintético cria uma película resistente a altas cargas mecânicas de cisalhamento.",
      "5. Os aditivos inibidores de oxidação impedem a formação de vernizes e gomas mesmo sob temperaturas de até 80°C.",
      "6. A máquina mantém estabilidade acústica, precisão de sincronismo e temperatura de operação controlada."
    ],
    beginnerExplanation: "É a diferença entre os tipos de óleo e a 'grossura' (viscosidade) certa para cada parte da sua máquina! Para a lançadeira onde fica a bobina, o óleo precisa ser bem fininho e transparente (grau ISO 10) para não colar pó nem fiapo de linha. Para os eixos mais pesados de dentro da máquina, usa-se um óleo um pouquinho mais encorpado. Nunca use óleo grosso de carro ou óleo de cozinha na sua bordadeira!",
    applications: [
      "Manutenção preventiva de rotina em ateliês e fábricas de bordado",
      "Prevenção de travamento mecânico de lançadeiras industriais em alta velocidade",
      "Lubrificação de rolamentos lineares e guias de pantógrafo",
      "Conservação de máquinas em ambientes com controle de climatização industrial"
    ],
    technicalDetails: "A classificação ISO VG (Viscosity Grade) estabelece o ponto médio de viscosidade a 40°C: ISO VG 10 (9,0 a 11,0 cSt), ISO VG 15 (13,5 a 16,5 cSt) e ISO VG 22 (19,8 a 24,2 cSt). O uso de óleos com viscosidade superior a ISO VG 32 na lançadeira causa sobrecarga no motor principal por arrasto viscoso e atrai felpas de tecido que travam o cesto da bobina.",
    commonErrors: [
      "❌ Usar óleo automotivo de motor (20W-50) ou óleo hidráulico pesado em bordadeiras, carbonizando as peças",
      "❌ Misturar graxa à base de lítio na pista da lançadeira (graxa é apenas para engrenagens internas de dentes de nylon)",
      "❌ Utilizar óleos vegetais (óleo de soja ou oliva), que oxidam e viram uma cola sólida que destrói a máquina",
      "❌ Ignorar a tabela de pontos de lubrificação diária, semanal e mensal do manual do fabricante"
    ],
    troubleshootingTips: [
      "Se a lançadeira esquentar excessivamente ao toque após 30 minutos: Limpe o excesso de fiapos e aplique óleo mineral ISO VG 10",
      "Se a máquina apresentar manchas escuras de óleo no tecido: O óleo utilizado foi incorreto ou houve aplicação em excesso; lave com solvente têxtil",
      "Se o painel acusar sobrecarga no motor principal (Main Motor Error): Verifique se a lançadeira está travada por falta de lubrificação ou fio embolado"
    ],
    dicaArtrelados: "Compre sempre óleo específico para máquina de costura e bordar com a especificação 'Óleo Mineral Branco / ISO VG 10 ou 15': um único frasco de 500 ml dura mais de um ano no ateliê e mantém a sua máquina funcionando como nova por décadas!",
    voceSabia: "As máquinas de bordar industriais de 24 cabeçotes possuem um sistema de lubrificação central computadorizado com micro-bombas que injetam exatamente 0,02 ml de óleo em cada lançadeira a cada 200.000 pontos bordados automaticamente!",
    practicalExercise: "Consulte o manual da sua máquina de bordar e localize a página do diagrama de lubrificação. Identifique quais pontos exigem óleo mineral diário (como a lançadeira) e quais exigem manutenção periódica especializada.",
    quickSummary: "Especificação de lubrificantes por viscosidade (ISO VG 10-22); garante máxima proteção contra atrito e calor sem atrair fiapos.",
    relatedTerms: ["Óleo Lubrificante Mineral Branco", "Lançadeira Rotativa", "Manutenção Preventiva", "Caixa de Bobina"],
    tags: ["o-022", "oleo sintetico", "oleo mineral", "viscosidade", "iso vg 10", "lubrificacao", "manutencao", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 3448: Industrial Liquid Lubricants -- ISO Viscosity Classification. Geneva, 2021.",
      "KLÜBER LUBRICATION. Specialty Lubricants for High-Speed Textile & Embroidery Machinery. Munich, 2020."
    ]
  },
  {
    id: "open-loop-stepper-vs-closed-loop-servo",
    code: "O-023",
    letter: "O",
    term: "Motores de Passo vs. Servomotores em Bordadeiras (Open-Loop Stepper vs. Closed-Loop Servo)",
    pronunciation: "ô-pen lup sté-per vê-esse clou-sed lup ser-vo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Comparativo dos sistemas eletromecânicos de acionamento do pantógrafo: motores de passo de malha aberta (domésticas) versus servomotores com encoder de malha fechada (industriais).",
    origin: "Da engenharia mecatrônica e robótica industrial das décadas de 1980 e 1990 aplicada à automação de eixos de posicionamento CNC.",
    definition: "O sistema de movimentação do pantógrafo nos eixos X e Y de uma máquina de bordar é controlado por dois tipos principais de atuadores elétricos: 1) Motores de Passo de Malha Aberta (Open-Loop Stepper Motors), comuns em máquinas domésticas e semiprofissionais, que avançam em passos angulares fixos (1,8° por pulso) sem confirmação de posição de retorno; e 2) Servomotores de Malha Fechada (Closed-Loop Servo Motors), padrão em máquinas industriais, equipados com encoders ópticos de alta resolução que monitoram a posição real do bastidor centenas de vezes por segundo, corrigindo instantaneamente qualquer desvio e eliminando a perda de passos (perda de registro) mesmo sob impactos e altas velocidades.",
    howItWorks: [
      "1. A placa-mãe da máquina lê o comando de coordenadas X e Y da matriz de bordado.",
      "2. No sistema Stepper (Passo): envia uma série de pulsos elétricos para as bobinas do motor de passo, que gira em incrementos fixos.",
      "3. Se o bastidor bater na mão do operador em um sistema Stepper, o motor perde passos e o restante do bordado sai totalmente desalinhado.",
      "4. No sistema Servo (Closed-Loop): o encoder óptico acoplado ao eixo do motor lê a posição real a cada fração de milissegundo.",
      "5. Se houver resistência física ou aceleração brusca, o driver do servo aumenta o torque imediatamente para manter a posição exata.",
      "6. Caso ocorra uma colisão grave, o servomotor interrompe a máquina instantaneamente com alarme de erro, protegendo a mecânica.",
      "7. O resultado é precisão de registro micrométrica e operação suave a mais de 1.000 PPM."
    ],
    beginnerExplanation: "É o tipo de motor que empurra o bastidor para lá e para cá! O motor de passo comum (usado na maioria das máquinas de casa) obedece aos comandos cegamente; se você esbarrar a mão no bastidor sem querer enquanto ele anda, ele se perde e o resto do bordado sai torto. Já o servomotor inteligente (das máquinas industriais) tem um sensor que confere a posição o tempo todo: ele nunca perde o lugar e anda macio e super rápido sem tremer!",
    applications: [
      "Diferenciação de desempenho entre bordadeiras domésticas e industriais",
      "Diagnóstico de desvio de contorno por perda de passos em pantógrafos",
      "Bordados pesados em couro e calçados que exigem alto torque dinâmico",
      "Operação contínua de alta produtividade a 1.000 a 1.200 PPM"
    ],
    technicalDetails: "Servomotores AC industriais utilizam encoders de 20 a 24 bits (mais de 1 milhão de pulsos por volta), garantindo resolução de posicionamento inferior a 0,01 mm no pantógrafo. Apresentam curva de torque constante em toda a faixa de RPM, enquanto motores de passo perdem até 50% do seu torque útil quando operam em velocidades superiores a 600 RPM.",
    commonErrors: [
      "❌ Esbarrar o braço, caixa de linhas ou objetos no bastidor de uma máquina doméstica em movimento, causando perda irreversível de passos",
      "❌ Deixar as correias dentadas dos eixos X e Y frouxas, gerando folga mecânica (Backlash) que simula perda de passos",
      "❌ Aumentar a velocidade de uma máquina com motor de passo além do limite mecânico recomendado em matrizes densas",
      "❌ Não limpar os trilhos e guias lineares do pantógrafo, acumulando poeira que trava os rolamentos"
    ],
    troubleshootingTips: [
      "Se o bordado desalinhar no meio do desenho em máquina doméstica: O bastidor sofreu obstrução física; reinicie a partir da origem com o tecido livre",
      "Se as letras saírem ovais em vez de redondas: Ajuste a tensão das correias dentadas dos eixos X e Y conforme o manual de serviço",
      "Se a máquina industrial apresentar alarme 'Servo Driver Error': Verifique se há linha ou tecido preso travando o trilho do pantógrafo"
    ],
    dicaArtrelados: "Em máquinas domésticas e semiprofissionais, mantenha SEMPRE a bancada 100% livre ao redor da máquina: nunca deixe tesouras, caixas de linha ou réguas no caminho onde o bastidor vai andar, para evitar qualquer esbarrão que desalinhe o seu bordado!",
    voceSabia: "Os encoders ópticos de alta resolução usados nos servomotores das bordadeiras industriais foram desenvolvidos originalmente pela indústria aeroespacial para guiar os painéis solares das estações espaciais internacionais em direção ao Sol!",
    practicalExercise: "Com a máquina desligada, mova o pantógrafo suavemente com as mãos e sinta a resistência das correias dentadas. Ligue a máquina e observe o processo automático de busca de referência inicial (Homing) que os motores realizam ao ligar.",
    quickSummary: "Comparativo entre motores de passo (malha aberta) e servomotores inteligentes (malha fechada com encoder anti-desalinhamento).",
    relatedTerms: ["Deslocamento de Contorno (Registration Shift)", "Pantógrafo de Bordadeira", "Manutenção Preventiva", "Área Útil do Bastidor"],
    tags: ["o-023", "motores de passo", "servomotores", "stepper", "servo", "encoder", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA MOTOR & MOTION CONTROL. AC Servo Drive Systems & High-Precision Pantograph Mechanics. Tajima Technical Papers, 2021.",
      "DORF, R. & BISHOP, R. Modern Control Systems: Open-Loop vs Closed-Loop Dynamics. Pearson, 2020."
    ]
  },
  {
    id: "otimizacao-de-densidade-textos-pequenos",
    code: "O-024",
    letter: "O",
    term: "Otimização de Densidade em Textos Pequenos (Small Text Density Optimization)",
    pronunciation: "o-ti-mi-za-ção de den-si-da-de em tex-tos pe-que-nos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    summary: "Conjunto de regras de digitalização para letras com altura inferior a 6 mm: alívio de densidade, subponto central único (Center Run), aumento de compensação de repuxo e uso de linha 60wt e agulha 65/9.",
    origin: "Desenvolvido na indústria de identificação corporativa e crachás de aviação na década de 1980 para tornar legíveis textos de 4 mm e 5 mm em uniformes.",
    definition: "A Otimização de Densidade em Textos Pequenos (Small Lettering Digitizing Protocol) é a engenharia de programação aplicada a caracteres alfanuméricos com altura de haste entre 3,0 mm e 6,0 mm. Em dimensões tão reduzidas, a física do tecido e da linha impõe limites severos: o acúmulo de penetrações de agulha comuns corta as fibras do tecido, fecha os 'olhos' de letras como 'e', 'a', 'o' e 'B', e transforma o texto em um borrão ilegível. A técnica consiste em aliviar o espaçamento entre pontos (de 0,40 mm para 0,46 mm a 0,50 mm), substituir subpontos duplos por um único traço central, abrir os vazados das letras e utilizar linha fina 60wt/75wt com agulha calibre 65/9.",
    howItWorks: [
      "1. O digitalizador seleciona uma fonte de microtexto desenvolvida especificamente para bordado pequeno (Micro Font).",
      "2. Ajusta a densidade do satim para 0,48 mm (mais aberta que o padrão).",
      "3. Configura a subcamada exclusivamente como 'Ponto Central Único' (Center Walk / Center Run).",
      "4. Alarga manualmente os orifícios internos de letras fechadas ('e', 'a', 'o', 'd', 'p', 'g').",
      "5. Aumenta a compensação de repuxo (Pull Compensation) para +0,25 mm nas colunas finas.",
      "6. Na máquina, instala agulha 65/9 e linha de bordar calibre 60wt (fina).",
      "7. O texto de 4 mm é bordado com nitidez cristalina e 100% legível a olho nu."
    ],
    beginnerExplanation: "É o segredo dos profissionais para bordar letrinhas minúsculas (como nomes em crachás, jalecos e logotipos de peito) sem as letras virarem um borrão de linha fechado! Para a letrinha minúscula ficar perfeita e legível, a gente abre os buraquinhos das letras 'e' e 'o', usa uma linha mais fininha (calibre 60), agulha bem fininha (65/9) e não deixa os pontos ficarem amontoados demais!",
    applications: [
      "Nomes de médicos, especialidades e números de CRM em jalecos e fardas",
      "Textos de rodapé, slogans e sites institucionais em camisas polo corporativas",
      "Etiquetas de composição, tamanhos de roupas e logotipos em bonés",
      "Bordados em monogramas delicados de lenços de bolso e punhos de camisaria masculina"
    ],
    technicalDetails: "A largura de coluna em satim para textos pequenos nunca deve ser inferior a 0,8 mm com linha 40wt (ou 0,6 mm com linha 60wt). A linha 60wt é cerca de 30% mais fina que a linha padrão 40wt, permitindo acomodar mais pontos por milímetro quadrado sem provocar espessamento excessivo ou nós no avesso.",
    commonErrors: [
      "❌ Reduzir uma fonte comum grande para 4 mm sem alterar a densidade, fechando completamente os olhos das letras",
      "❌ Usar subcamada pesada em ziguezague em letras minúsculas, criando um calombo de linha",
      "❌ Bordar texto de 4 mm com agulha grossa 80/12 ou 90/14 e linha comum 40wt",
      "❌ Não dar compensação de repuxo nas colunas, fazendo os traços verticais das letras ficarem finos como fios de cabelo"
    ],
    troubleshootingTips: [
      "Se os buracos das letras 'e' e 'a' ficarem tapados de linha: Aumente o espaçamento de pontos para 0,48 mm e amplie a abertura do vazado no software",
      "Se as letras ficarem tortas e ilegíveis: Troque a agulha para 65/9 e use linha fina 60wt no cone superior",
      "Se a linha fina quebrar na máquina: Reduza ligeiramente a tensão superior e diminua a velocidade para 650 RPM"
    ],
    dicaArtrelados: "Para bordar letrinhas minúsculas de 4 mm com perfeição de máquina de escrever: use linha calibre 60wt na cor do texto e coloque entretela hidrossolúvel por cima do tecido. As letrinhas ficam altas, nítidas e 100% legíveis até de longe!",
    voceSabia: "A menor letra bordada legível do mundo já registrada em um livro de recordes tinha apenas 1,2 milímetros de altura e foi realizada em uma máquina industrial japonesa usando nanofios de seda e agulha cirúrgica de calibre 50!",
    practicalExercise: "Escreva a palavra 'ENGENHARIA' com 4,5 mm de altura no software. Na versão A, deixe as configurações padrão de 0,40 mm. Na versão B, use densidade 0,48 mm, subponto center run e compensação +0,25 mm. Borde as duas lado a lado com linha 60wt e compare a nitidez.",
    quickSummary: "Regras de digitalização para microletras (<6 mm); utiliza densidade aliviada (0,48 mm), linha 60wt e agulha fina 65/9.",
    relatedTerms: ["Linha de Bordar Calibre 60wt", "Agulha 65/9 para Detalhes Finos", "Nomes Bordados e Crachás", "Subponto Central (Center Run)"],
    tags: ["o-024", "textos pequenos", "microletras", "densidade", "linha 60wt", "crachas", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Micro Lettering & Small Text Digitizing Masterclass. Wilcom White Papers, 2021.",
      "MADEIRA THREADS. Polyneon 60 & Microtex Needles: Precision Small Lettering Guide. Freiburg, 2020."
    ],
    recommendedSettings: {
      speedPPM: "650 PPM",
      needleType: "65/9 RG ou Microtex",
      stabilizer: "Entretela Recortável 80g + Filme Hidrossolúvel no topo",
      threadTension: "Leve (3.0)",
      density: "0,46 mm a 0,50 mm"
    }
  }
];

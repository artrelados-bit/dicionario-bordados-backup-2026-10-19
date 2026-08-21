import { Verbete } from "../types";

export const VERBETES_LETTER_P_PART3: Verbete[] = [
  {
    id: "ponto-salto-jump-stitch",
    code: "P-017",
    letter: "P",
    term: "Ponto de Salto / Jump Stitch (Saltos de Linha e Deslocamento do Pantógrafo)",
    pronunciation: "pon-to de sal-to",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Comando mecânico em que o pantógrafo se desloca entre duas posições sem penetração da agulha no tecido, transportando a linha livremente ou acionando o corte automático.",
    origin: "Do inglês 'Jump Stitch' (ponto de pulo/salto), originário dos cartões perfurados dos teares mecânicos Jacquard e das primeiras máquinas multicabeças.",
    definition: "O Ponto de Salto (Jump Stitch ou Simplesmente Salto) é a instrução em código de máquina (comando de formato como DST, PES ou EXP) que instrui o pantógrafo a movimentar o bastidor em direção a uma nova coordenada X-Y enquanto a barra da agulha permanece desengatada ou sem penetração no tecido. O salto é utilizado para transitar entre letras separadas, elementos distantes do desenho ou no início de novas cores. Nas máquinas domésticas ou antigas sem corte automático, os saltos geram 'fios de conexão' (Jump threads) visíveis sobre a peça que devem ser aparados manualmente com tesoura de arremate; em máquinas modernas com acionador de trimer (Trim), uma sucessão de saltos rápidos (geralmente 3 a 5 micro-saltos codificados) ativa o corte de linha automático antes do deslocamento.",
    howItWorks: [
      "1. Ao concluir um objeto, o software insere o ponto de amarração (Tie-off).",
      "2. Se a distância até o próximo objeto for superior ao limite de corte (ex: > 2.0 mm), o software emite o comando de corte (Trim) e salto (Jump).",
      "3. A barra da agulha para na posição mais alta (Ponto Morto Superior - PMS).",
      "4. O pantógrafo move o bastidor em alta velocidade na diagonal ou em linha reta até o ponto inicial do novo objeto.",
      "5. A agulha desce novamente na nova posição, executa o ponto de amarração inicial (Tie-in) e retoma o bordado.",
      "6. Se o corte estiver desativado, um fio contínuo fica esticado entre as duas posições sobre o tecido."
    ],
    beginnerExplanation: "É quando a máquina termina de bordar uma letrinha e 'dá um pulo' para começar a letrinha seguinte sem costurar no meio do caminho! Nas máquinas com corte automático ela corta a linha antes de pular; nas máquinas sem corte, fica aquele 'fiozinho' por cima que a gente corta com a tesourinha depois.",
    applications: [
      "Transição entre letras separadas em frases, nomes e monogramas",
      "Deslocamento entre diferentes elementos gráficos de mesma cor na matriz",
      "Comando de gatilho para o acionamento de facas de corte automático (Trim Sequence)",
      "Posicionamento do bastidor em coordenadas de descanso ou troca de aplique"
    ],
    technicalDetails: "Nos formatos industriais (como o DST Tajima), cada comando de salto possui um deslocamento máximo de 12.1 mm (ou 12.7 mm). Para deslocamentos longos (ex: saltar 150 mm), a máquina executa uma cadeia de múltiplos saltos sucessivos de 12 mm em milissegundos. No software, o parâmetro 'Comprimento Mínimo de Salto para Corte' (Jump Length for Trim) é regulado tipicamente entre 1.5 mm e 3.0 mm.",
    commonErrors: [
      "❌ Configurar o limite de corte de salto muito baixo (ex: 0.5 mm), fazendo a máquina cortar a linha a cada milímetro e dobrando o tempo de bordado",
      "❌ Puxar os fios de salto com força bruta com a tesoura antes de cortar, repuxando e deformando a letra vizinha",
      "❌ Deixar saltos longos sem corte em tecidos atoalhados, permitindo que a linha enrosque no calcador durante o movimento rápido",
      "❌ Esquecer o ponto de amarração antes de um salto longo, fazendo a ponta da letra desmanchar"
    ],
    troubleshootingTips: [
      "Se a máquina não estiver cortando a linha entre as letras: Verifique nas configurações do software se a distância de corte de salto (Trim Distance) está configurada para 2.0 mm",
      "Se ficarem fios de salto no avesso prendendo no calcador: Ative o comando de corte no software e verifique se a faca do cortador está afiada",
      "Se o pantógrafo der solavancos violentos durante os saltos: Reduza a velocidade de deslocamento rápido no painel da máquina"
    ],
    dicaArtrelados: "Ao limpar os fios de salto de uma peça bordada sem cortador automático, use uma tesoura de ponta curvada (tipo bico de pato) e corte o fio rente ao ponto com a ponta da tesoura apontada para cima, para nunca picotar o tecido da peça!",
    voceSabia: "O padrão original Tajima (.DST) criado no Japão nos anos 1970 não tinha um comando 'Trim' explícito: o corte de linha era ativado fazendo o pantógrafo registrar exatamente 3 saltos vazios consecutivos no mesmo ponto!",
    practicalExercise: "Escreva a palavra 'B O R D A D O' com letras separadas no software. Configure uma versão com corte entre as letras e outra sem corte (com saltos). Borde as duas e compare o tempo gasto na máquina versus o tempo gasto cortando fiapos na tesoura.",
    quickSummary: "Deslocamento livre do bastidor entre pontos sem costura, que transporta a linha ou aciona o corte automático.",
    relatedTerms: ["Corte de Linha Automático (Trimmer)", "Ponto de Amarração", "Pantógrafo", "Formato DST"],
    tags: ["p-017", "ponto de salto", "jump stitch", "saltos", "corte de linha", "pantografo", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Jump Stitches, Trimming Rules and Path Optimization. Sydney, 2021.",
      "TAJIMA TECHNICAL BULLETIN. The Geometry of Jump Commands in Tajima DST Format. Nagoya, 2020."
    ]
  },
  {
    id: "ponto-plumetis-relevo",
    code: "P-018",
    letter: "P",
    term: "Ponto Plumetis / Relevo Tradicional (Plumetis Stitch)",
    pronunciation: "pon-to plu-me-tís",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino.",
    category: "Pontos Básicos & Decorativos",
    summary: "Ponto de relevo nobre de alta densidade derivado da tradição francesa, executado sobre camadas espessas de ponto suporte para criar monogramas com volume arredondado e toque acetinado.",
    origin: "Do francês 'plumetis' (semelhante a plumas/penas fofas), clássico da alfaiataria francesa e dos enxovais brancos de linho bordados à mão nos séculos XVIII e XIX.",
    definition: "O Ponto Plumetis Computadorizado é uma técnica nobre de alto relevo que recria na máquina de bordar os monogramas e motivos clássicos da tradição de enxoval europeia (Bordado Branco ou 'Broderie Blanche'). Ele é composto por múltiplas camadas escalonadas de ponto suporte sob a coluna (recheio de ponto corrido empilhado ou zigue-zagues graduados) cobertas por uma camada final de ponto satim com densidade ultra-fechada (0.32 mm a 0.38 mm) e acabamento arredondado nas pontas. A concentração de fios sob o satim cria um relevo convexo perfeito que projeta as letras em até 1.5 mm acima da superfície do tecido sem necessitar de EVA (3D Puff), mantendo a peça 100% lavável e macia.",
    howItWorks: [
      "1. O programador digitaliza a forma da letra ou do motivo com extremidades afiladas e curvas suaves.",
      "2. Cria-se o 'recheio interno': uma primeira camada de pontos corridos paralelos concentrados no centro do objeto.",
      "3. Aplica-se uma segunda camada de ponto suporte em zigue-zague estreito com recuo generoso de borda (1.0 mm de recuo).",
      "4. Aplica-se uma terceira camada de Edge Walk ao longo de todo o perímetro.",
      "5. Por fim, a máquina borda a cobertura em ponto satim fechado com densidade de 0.35 mm.",
      "6. A cobertura abraça o recheio empilhado, criando um relevo arredondado e reluzente similar a uma almofadinha acetinada."
    ],
    beginnerExplanation: "É aquele bordado super chique em alto relevo arredondado que parece uma pluminha gordinha de cetim! Muito comum em lençóis de noiva e toalhas de linho clássicas, feito com várias camadas de costura por baixo para a letra ficar bem altinha e macia sem usar espuma.",
    applications: [
      "Monogramas de luxo e iniciais clássicas em jogos de cama de 400 fios e linhos finos",
      "Enxovais de batizado, vestidos de noiva e toalhas de mesa nobres",
      "Brasões heráldicos e monogramas de brasão de família em camisas sociais",
      "Folhagens em relevo, arabescos clássicos e detalhes em bordado branco (White-on-White)"
    ],
    technicalDetails: "Para executar o Plumetis perfeito, a linha ideal é a de viscose brilhante 40wt ou 60wt (para brilho sedoso máximo) ou poliéster brilhante. A agulha deve ser fina (calibre 65/9 ou 70/10) com ponta aguda (Microtex/Sharp) para penetrar com precisão milimétrica sem abrir furos na malha do linho. A compensação de encolhimento deve ser ajustada para +0.45 mm devido ao grande volume de suporte.",
    commonErrors: [
      "❌ Tentar fazer relevo aumentando apenas a densidade da camada superior (sem suporte escalonado), cortando o tecido e quebrando agulhas",
      "❌ Deixar as camadas de suporte muito largas perto da borda, fazendo a base vazar para fora do ponto satim",
      "❌ Borda plumetis em tecidos elásticos sem entretela de corte limpo (Cutaway) pesada, deformando o contorno",
      "❌ Usar linha de algodão fosca e grossa, perdendo o brilho acetinado característico do plumetis"
    ],
    troubleshootingTips: [
      "Se o relevo ficar achatado: Adicione uma camada extra de ponto corrido empilhado no núcleo central da coluna no software",
      "Se as pontas da letra ficarem quadradas e duras: Suavize as terminações no software usando a opção de afilamento automático (Auto-tapering)",
      "Se a agulha desviar ao bater no recheio: Reduza a velocidade de bordado para 500-600 PPM e use agulha reforçada com titânio"
    ],
    dicaArtrelados: "Para fazer o clássico bordado 'Branco sobre Branco' (White-on-White) em linho puro, use o Ponto Plumetis com linha de bordar branca brilhante sobre o linho branco. A luz baterá no relevo criando sombras naturais que destacam o monograma com requinte absoluto!",
    voceSabia: "Na França imperial de Napoleão Bonaparte, todas as camisas e roupas de cama do imperador eram obrigatoriamente marcadas com o monograma 'N' bordado em ponto plumetis de seda por mestres bordadeiros da corte.",
    practicalExercise: "Digitalize a inicial 'M' em estilo caligráfico clássico com 35 mm de altura. Configure 3 níveis de suporte (Center Walk + Zigzag + Edge Walk) com satim 0.35 mm por cima. Borde em tecido de algodão puro branco com linha branca.",
    quickSummary: "Ponto nobre de alto relevo arredondado com suporte escalonado multicamadas, ideal para monogramas de luxo e enxovais de noiva.",
    relatedTerms: ["Ponto Satim", "Underlay (Ponto Suporte)", "Compensação de Encolhimento", "Monograma Bordado"],
    tags: ["p-018", "ponto plumetis", "plumetis stitch", "alto relevo", "monograma de luxo", "enxoval fino", "artrelados"],
    bibliographicReferences: [
      "PARIS EMBROIDERY CONSERVATORY. Masterpieces of French Plumetis and Monogramming. Paris, 2021.",
      "WILCOM INTERNATIONAL. High Loft Satin and Traditional Plumetis Digitizing. Sydney, 2022."
    ]
  },
  {
    id: "pantografo-mecanismo-xy",
    code: "P-019",
    letter: "P",
    term: "Pantógrafo / Mecanismo de Movimento X-Y (Pantograph & Carriage Mechanism)",
    pronunciation: "pan-tó-gra-fo",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino.",
    category: "Componentes da Máquina",
    summary: "Sistema mecânico e eletrônico de precisão acionado por motores de passo ou servomotores que movimenta o bastidor nos eixos X e Y sincronizado com os ciclos da agulha.",
    origin: "Do grego 'panto' (tudo) e 'graphein' (escrever/desenhar), aparelho mecânico de paralelogramo articulado inventado por Christoph Scheiner em 1603 para ampliar e reproduzir desenhos.",
    definition: "O Pantógrafo (também chamado de Carro de Movimento X-Y, Braço do Bastidor ou Mecanismo de Transporte) é o subsistema eletromecânico responsável por toda a geometria dimensional do bordado computadorizado. Ele consiste em uma estrutura de guias lineares retificadas, fusos de esferas ou correias dentadas de poliuretano com alma de aço, tracionadas por servomotores digitais ou motores de passo de alta resolução. O pantógrafo acopla o bastidor e move o tecido com precisão micrométrica (resolução típica de 0.1 mm) nas coordenadas cartesianas X (horizontal) e Y (vertical) exatamente no milésimo de segundo em que a agulha está fora do tecido (entre o Ponto Morto Superior e o início da penetração), parando imóvel durante o tempo de formação da laçada.",
    howItWorks: [
      "1. A CPU da máquina decodifica o arquivo de matriz (ex: comando de deslocamento X = +2.4 mm, Y = -1.1 mm).",
      "2. O encoder do eixo principal da máquina informa o momento exato em que a agulha sai do tecido.",
      "3. Os drivers dos motores de passo enviam pulsos de corrente elétrica calibrados para as bobinas dos motores X e Y.",
      "4. As correias dentadas de alta rigidez movimentam o carro do pantógrafo até a coordenada programada.",
      "5. O pantógrafo atinge a posição e desacelera suavemente até a imobilidade absoluta.",
      "6. A agulha penetra no tecido, a laçada é formada com a lançadeira, e o ciclo se reinicia a até 1.200 vezes por minuto."
    ],
    beginnerExplanation: "É o braço mecânico da máquina que segura o bastidor e fica se mexendo para a frente, para trás e para os lados na maior velocidade! É ele quem desenha o bordado no tecido, mexendo o bastidor enquanto a agulhinha fica só subindo e descendo no mesmo lugar.",
    applications: [
      "Transporte bidimensional do bastidor com precisão milesimal em todas as direções",
      "Garantia de alinhamento e registro geométrico perfeito entre contornos e preenchimentos",
      "Movimentação do bastidor para a posição de troca de bastidor (Frame Out) e corte de apliques",
      "Suporte a bastidores planos, magnéticos, tubulares e dispositivos de boné 270°"
    ],
    technicalDetails: "A velocidade e aceleração do pantógrafo determinam a produtividade da máquina: em curvas complexas ou saltos longos, o controle de curva em 'S' (S-curve acceleration) suaviza as partidas e paradas dos motores para evitar inércia e oscilações no bastidor. A folga mecânica (Backlash) do sistema de correias e guias lineares deve ser inferior a 0.05 mm para garantir que os contornos fechem exatamente sobre os preenchimentos.",
    commonErrors: [
      "❌ Bater com a mão ou esbarrar no pantógrafo durante a operação, fazendo a máquina perder o passo (deslocando todo o desenho)",
      "❌ Deixar o tecido ou a roupa prender embaixo do braço do pantógrafo, travando o motor e queimando o fusível ou entortando as guias",
      "❌ Usar bastidores excessivamente pesados ou pesadas mantas penduradas sem suporte de mesa, forçando as correias do eixo Y",
      "❌ Lubrificar as correias dentadas com graxa comum ou óleo líquido (as correias devem trabalhar sempre secas e limpas)"
    ],
    troubleshootingTips: [
      "Se o bordado ficar torto ou com as cores fora de registro: Verifique a tensão das correias dentadas dos eixos X e Y e aperte os parafusos do engate do bastidor",
      "Se a máquina fizer um ruído agudo e travar o movimento: Limpe as guias lineares de sujeiras e fiapos e inspecione se há fios enrolados nas polias",
      "Se o desenho perder a posição central: Execute o comando de retorno ao ponto de origem (Trace / Return to Origin) no painel"
    ],
    dicaArtrelados: "Ao bordar peças pesadas (como jaquetas de couro, toalhas de banho gigantes ou tapetes), apoie as sobras da peça sobre uma mesa auxiliar nivelada com a máquina. Nunca deixe o peso da peça puxar o pantógrafo para baixo!",
    voceSabia: "As primeiras máquinas de bordar automáticas do século XIX utilizavam pantógrafos gigantes de madeira acionados manualmente por um operador que seguia um desenho ampliado 6 vezes em uma parede!",
    practicalExercise: "Com a máquina desligada (e livre de energia), deslize suavemente o braço do pantógrafo com a mão (conforme manual) e sinta como as guias devem correr macias, sem folgas laterais e sem pontos de travamento duro.",
    quickSummary: "Mecanismo eletromecânico que movimenta o bastidor nos eixos X e Y com alta velocidade e precisão para desenhar o bordado.",
    relatedTerms: ["Motor de Passo (Stepper Motor)", "Perda de Passo", "Bastidor de Bordar", "Ponto de Origem"],
    tags: ["p-019", "pantografo", "eixo x y", "mecanismo", "motores", "componentes", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL SEWING. Mechanical Engineering and Pantograph Kinematics. Nagoya, 2021.",
      "BARUDAN EMBROIDERY MACHINERY. Technical Manual: Carriage Drives and Axis Calibration. Tokyo, 2020."
    ]
  },
  {
    id: "puxamento-tecido-push-pull",
    code: "P-020",
    letter: "P",
    term: "Puxamento do Tecido / Efeito Push-Pull (Pull Compensation & Push Effect)",
    pronunciation: "pu-xa-men-to do te-ci-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Fenômeno físico em que a tensão da linha puxa e encolhe o tecido na direção das colunas de pontos (Pull) enquanto o empurra e alonga nas extremidades (Push).",
    origin: "Do inglês 'Push-Pull Effect' (efeito empurra-puxa), lei da mecânica física têxtil descrita pelos primeiros engenheiros de bordado automatizado industrial.",
    definition: "O Puxamento do Tecido (Efeito Push-Pull) é a lei física inexorável que rege a deformação do tecido durante o bordado. Quando centenas ou milhares de pontos são inseridos sob tensão mecânica: 1) O Efeito PULL (encolhimento/puxamento) ocorre paralelamente à direção dos pontos — a linha retrai e puxa as duas bordas da coluna para o centro, estreitando a largura visual do desenho e criando fendas vazadas entre objetos vizinhos; 2) O Efeito PUSH (alongamento/empurrão) ocorre perpendicularmente à direção dos pontos — as sucessivas perfurações da agulha empurram as fibras do tecido para frente, fazendo o desenho esticar em comprimento. Para que um círculo perfeito na tela não vire uma elipse torta no tecido, o programador DEVE aplicar a Compensação de Encolhimento (Pull Compensation) e calibrar os ângulos de costura.",
    howItWorks: [
      "1. A máquina borda uma coluna de ponto satim com 4.0 mm de largura na direção horizontal (0°).",
      "2. A cada laçada, a elasticidade do fio de poliéster e a tensão da bobina puxam as margens do tecido para o centro.",
      "3. Sem compensação digital, a coluna bordada final fica com apenas 3.4 mm de largura real (perda de 0.6 mm por PULL).",
      "4. Simultaneamente, as sucessivas batidas da agulha empurram o tecido para cima e para baixo, fazendo a coluna crescer em altura (alongamento por PUSH).",
      "5. Ao aplicar a Compensação de Encolhimento (+0.35 mm no software), a máquina digitaliza a coluna com 4.7 mm virtuais para que ela resulte em exatos 4.0 mm físicos no tecido!",
      "6. A compensação neutraliza perfeitamente as deformações têxteis."
    ],
    beginnerExplanation: "Quando a linha entra no tecido bem esticadinha, ela funciona como um elástico: ela puxa as beiradas do tecido para dentro (encolhendo a largura) e empurra o tecido para frente (esticando o comprimento). Se a gente não avisar o programa para compensar isso, o contorno fica fora do lugar e aparece um buraco feio de tecido no meio!",
    applications: [
      "Calibração obrigatória de matrizes para evitar contornos descasados (falhas de registro)",
      "Bordados perfeitos em tecidos elásticos, malhas piquet, moletons e lycra",
      "Preservação da geometria de círculos, quadrados e letras em brasões precisos",
      "União sem vãos entre preenchimentos Tatami e contornos em Satim"
    ],
    technicalDetails: "A Compensação de Puxamento (Pull Compensation) deve ser ajustada de acordo com o tecido e a entretela: Tecidos rígidos (sarja, jeans): +0.15 mm a +0.25 mm; Tecidos planos médios (tricoline, algodão): +0.25 mm a +0.35 mm; Tecidos elásticos (malha, piquet, fleece): +0.40 mm a +0.60 mm. Além da compensação em milímetros, utiliza-se a Compensação Percentual (10% a 15%) e a sobreposição de bordas (Overlap de 0.8 mm a 1.2 mm).",
    commonErrors: [
      "❌ Borda uma logomarca em piquet ou malha com compensação zero, resultando em contornos pretos totalmente descolados do desenho colorido",
      "❌ Tentar corrigir o puxamento esticando o tecido no bastidor com força humana, deformando a peça para sempre após desengatar",
      "❌ Borda círculos geométricos sem compensação direcional, transformando o círculo em um 'ovo' esticado",
      "❌ Usar a mesma matriz digitalizada para jeans rígido em uma camiseta de malha fina sem reajustar o Pull Compensation"
    ],
    troubleshootingTips: [
      "Se aparecer uma fresta vazada de tecido entre o preenchimento e o contorno: Aumente a Pull Compensation no software para 0.40 mm e crie 1.0 mm de sobreposição (overlap)",
      "Se as letras ficarem muito mais finas e mirradas do que na tela do computador: Aumente a compensação de largura de coluna (Column Width / Pull Comp)",
      "Se o tecido enrugar e fizer um 'papinho' no final do bordado: Rotacione o ângulo do ponto em 45° em relação ao fio da urdidura e melhore a entretela"
    ],
    dicaArtrelados: "A regra de ouro Artrelados para casar contornos perfeitamente: sempre faça o contorno de satim 'invadir' 1.0 mm por dentro do preenchimento tatami (Overlap). Com isso, mesmo que o tecido puxe, a emenda continuará 100% perfeita e sem vãos!",
    voceSabia: "O fio de poliéster de bordar possui até 15% a 20% de elongação elástica; ao ser esticado pela máquina, ele tenta encolher de volta ao tamanho original, gerando uma força contínua de puxamento sobre as fibras do tecido!",
    practicalExercise: "Digitalize um quadrado de 40 mm em Tatami e um contorno em satim de 3 mm colado exatamente na borda (sem sobreposição e com Pull Comp = 0). Borde em uma malha de camiseta. Observe a fresta que se abre e refaça aplicando Pull Comp de 0.45 mm e Overlap de 1.0 mm!",
    quickSummary: "Fenômeno físico de encolhimento no sentido dos pontos e expansão perpendicular, corrigido pela compensação digital de matriz.",
    relatedTerms: ["Compensação de Encolhimento (Pull Compensation)", "Overlap (Sobreposição)", "Efeito Push", "Underlay"],
    tags: ["p-020", "puxamento de tecido", "push pull", "pull compensation", "deformacao textil", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Mastering Push-Pull Compensation for High Registration Embroidery. Sydney, 2022.",
      "DEVERSON, B. The Physics of Thread Tension and Fabric Distortion. London, 2021."
    ]
  },
  {
    id: "pique-tecido-piquet-bordado",
    code: "P-021",
    letter: "P",
    term: "Pique de Bordado / Tecido Piquet (Piqué Knit Fabric Embroidery)",
    pronunciation: "pi-quê de bor-da-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino.",
    category: "Tipos de Tecidos",
    summary: "Malha estruturada com textura alveolar em colmeia ou losangos (típica de camisas polo) que exige entretelas estáveis e compensações digitais robustas contra deformações.",
    origin: "Do francês 'piqué' (pespontado, perfurado), tecido desenvolvido na França e Inglaterra no século XVIII com tecelagem especial para simular o relevo de acolchoados provençais.",
    definition: "O Tecido Piquet (Piqué Knit) é a malha mais emblemática e requisitada no mercado de bordado corporativo e uniformização profissional (camisas polo). Sua estrutura de malharia por urdume ou trama apresenta relevos geométricos tridimensionais em formato de pequenos favos de mel, losangos ou casas de abelha. Embora aparente boa firmeza ao toque, o piquet possui alta elasticidade bidirecional e textura vazada: as perfurações da agulha tendem a afundar nos alvéolos, a malha estica assimetricamente durante o bordado e os contornos finos facilmente se desalinham se não houver estabilização com entretela de corte limpo (Cutaway) e alta compensação de encolhimento.",
    howItWorks: [
      "1. A camisa polo de piquet deve ser estabilizada preferencialmente com entretela de corte limpo (Cutaway de 60 g/m² ou 80 g/m²) ou entretela rasgável dupla cruzada a 90°.",
      "2. Aplica-se uma película fina de filme hidrossolúvel (topping) na superfície para impedir que as letras afundem nos favos da malha.",
      "3. A matriz deve ser digitalizada com Ponto Suporte Duplo (Tatami duplo ou Edge Walk + Zigzag).",
      "4. A compensação de encolhimento (Pull Compensation) é calibrada em níveis elevados (+0.40 mm a +0.55 mm).",
      "5. A máquina borda com agulha ponta bola leve (calibre 75/11 SES / Ball Point) para não furar ou cortar os nós da malha.",
      "6. A velocidade é mantida entre 600 e 750 PPM para evitar vibrações excessivas no bastidor."
    ],
    beginnerExplanation: "É aquele tecido clássico de camiseta gola polo que parece uma colmeia cheia de furinhos! Ele é um pouco elástico e os furinhos adoram 'engolir' as letrinhas do bordado. Por isso, a gente sempre usa entretela firme e um plastiquinho solúvel por cima para o bordado ficar perfeitinho.",
    applications: [
      "Bordado de logomarcas corporativas no peito esquerdo de camisas polo",
      "Uniformes executivos, escolares, esportivos e promocionais de alto padrão",
      "Bordados em mangas, costas e golas de polos empresariais",
      "Monogramas pessoais e brasões de clubes de golfe, tênis e náutica"
    ],
    technicalDetails: "Na programação para piquet: 1) Densidade de Satim: 0.40 mm a 0.42 mm; 2) Densidade de Tatami: 0.42 mm com ângulo a 45° (nunca a 0° ou 90° para não coincidir com a trama da colmeia); 3) Underlay obrigatório de malha de grade; 4) Letras menores que 5 mm devem ser evitadas ou reforçadas com traço central grosso.",
    commonErrors: [
      "❌ Borda camisa polo piquet usando apenas uma folha de entretela rasgável fina, fazendo a malha enrugar toda ao redor do logo após a primeira lavagem",
      "❌ Borda em piquet com agulha de ponta fina cortante (Sharp), cortando as laçadas da malha e gerando furinhos que viram buracos",
      "❌ Esticar a camisa com força ao fechar o bastidor, criando o efeito 'tambor esticado' que deforma a gola para sempre quando solta",
      "❌ Borda sem filme solúvel de topping em piquet de favo largo, deixando os contornos afundados e serrilhados"
    ],
    troubleshootingTips: [
      "Se o bordado de polo ficar com aspecto enrugado ao redor do logo: Substitua a entretela rasgável por Entretela de Corte Limpo (Cutaway) de 70 g/m²",
      "Se as pontas das letras sumirem nos furinhos do piquet: Coloque uma folha de filme plástico solúvel por cima e aumente a densidade do underlay",
      "Se surgirem micro-furos ao redor do bordado após lavar: Troque a agulha por uma nova ponta bola 70/10 SES ou 75/11 Ball Point"
    ],
    dicaArtrelados: "O segredo do polo perfeito Artrelados: use SEMPRE Entretela Cutaway (que fica definitiva por dentro e não rasga nas lavagens) + 1 folha de plástico solúvel por cima + Agulha Ponta Bola 75/11. Sua camisa polo ficará com acabamento de grife internacional!",
    voceSabia: "O tecido piquet moderno de camisa polo foi popularizado pelo tenista francês René Lacoste em 1926, que buscava um tecido ventilado e elegante para substituir as camisas sociais pesadas usadas no tênis!",
    practicalExercise: "Pegue um retalho de camisa polo piquet. Borde a mesma logomarca de duas formas: 1) Com 1 entretela rasgável fina e sem topping; 2) Com 1 entretela Cutaway + filme solúvel topping + Pull Comp 0.45 mm. Lave as duas amostras na máquina de lavar e compare a perfeição do segundo!",
    quickSummary: "Malha alveolar de camisa polo com elasticidade e relevo que exige entretela Cutaway, agulha ponta bola e topping solúvel.",
    relatedTerms: ["Entretela de Corte Limpo (Cutaway)", "Agulha Ponta Bola (Ball Point)", "Compensação de Encolhimento", "Filme Hidrossolúvel (Topping)"],
    tags: ["p-021", "tecido piquet", "camisa polo", "malha alveolar", "bordado corporativo", "artrelados"],
    bibliographicReferences: [
      "STITCHES MAGAZINE. The Complete Guide to Embroidering Piqué Polo Shirts. Denver, 2021.",
      "GROZ-BECKERT. Ball Point Needles for Knitted and Piqué Fabrics. Albstadt, 2020."
    ]
  },
  {
    id: "patch-termocolante-emblema",
    code: "P-022",
    letter: "P",
    term: "Patch Termocolante / Emblema Bordado (Embroidered Patch / Badge)",
    pronunciation: "pá-tchi ter-mo-co-lan-te",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino.",
    category: "Acabamento & Finalização",
    summary: "Emblema bordado independente produzido sobre sarja ou tecido especial, finalizado com borda travada (satim/merrow) e filme adesivo termoativado no verso para aplicação com prensa térmica.",
    origin: "Do inglês 'patch' (remendo/emblema), derivado dos brasões militares costurados em uniformes de campanha e das insígnias de aviação da Segunda Guerra Mundial.",
    definition: "O Patch Termocolante (também chamado de Emblema Bordado, Tag Bordada ou Aplique Termoativado) é uma peça de bordado independente e destacada, confeccionada sobre uma base rígida e durável (como sarja de poliéster, nylon cordura ou feltro) que recebe uma película adesiva de copolímero termoplástico no avesso. O processo fabril abrange três etapas fundamentais: 1) Bordado de alta densidade da arte sobre a base têxtil com entretela resinada; 2) Acabamento perimetral com borda de ponto satim denso ou borda merrow para selar as margens; e 3) Laminação a quente no verso com filme termocolante permanente (filme TPU ou poliamida). O produto final pode ser aplicado em bonés, jaquetas, mochilas e uniformes em apenas 15 a 20 segundos usando uma prensa térmica ou ferro de passar.",
    howItWorks: [
      "1. Prende-se no bastidor uma camada de sarja de poliéster estruturada com entretela resinada pesada.",
      "2. A máquina borda o design do patch (fundos tatami, textos e detalhes em satim).",
      "3. Borda-se a linha de corte e em seguida a borda de satim perimetral de 3.5 mm a 4.5 mm de largura.",
      "4. Retira-se a peça do bastidor e recorta-se o contorno rente à borda (ou queima-se a selagem com pirógrafo/ferro de solda se o tecido for sintético).",
      "5. Posiciona-se o filme termocolante no avesso do patch com o papel siliconado voltado para cima.",
      "6. Prensa-se a 150°C a 160°C por 15 segundos na prensa térmica para fundir a cola no bordado.",
      "7. Retira-se o papel protetor e o patch está pronto para ser comercializado ou aplicado na peça final!"
    ],
    beginnerExplanation: "É aquele emblema ou brasão bordado solto (igual aos de motoqueiros, times de futebol e marcas famosas) que vem com uma cola especial atrás. Você coloca na jaqueta ou na mochila, passa o ferro quente ou a prensa térmica por cima, e ele cola na hora para sempre!",
    applications: [
      "Emblemas para jaquetas jeans, jaquetas de couro de motoqueiros e coletes táticos",
      "Escudos de times de futebol, artes marciais e agremiações esportivas",
      "Identificação de uniformes militares, de segurança privada, bombeiros e policiais",
      "Acessórios de moda, personalização de mochilas, bolsas e bonés sem bastidor de boné"
    ],
    technicalDetails: "Os tipos de termocolante mais utilizados são: 1) Filme de Poliamida (para colagem permanente resistente a lavagens a até 60°C); 2) Filme de Poliuretano TPU (para tecidos impermeáveis e couro sintético); e 3) Filme EVA temporário (apenas para posicionamento). A temperatura padrão de prensagem situa-se entre 150°C e 165°C com pressão média-alta (4 a 5 bar) e tempo de 15 a 20 segundos, aplicando o calor preferencialmente pelo avesso da peça para derreter a cola profundamente na fibra da roupa.",
    commonErrors: [
      "❌ Usar tecido 100% algodão para cortar a quente com ferro de solda (algodão queima e não sela; deve-se usar sarja 100% poliéster ou nylon)",
      "❌ Borda o contorno perimetral com satim muito estreito (menor que 3 mm), desfiando a borda do patch",
      "❌ Aplicar temperatura excessiva (acima de 180°C) que queima a linha de poliéster e resseca a cola termocolante tornando-a quebradiça",
      "❌ Tentar colar o patch em tecidos impermeabilizados com silicone ou teflon sem costurar a borda"
    ],
    troubleshootingTips: [
      "Se as pontas do patch descolarem após a lavagem: Aumente o tempo de prensagem para 20 segundos e prense pelo avesso da roupa com pressão alta",
      "Se a cola termocolante vazar pelas laterais do bordado: Recorte o filme termocolante 1 mm menor que a borda do patch antes de laminar",
      "Se a linha do bordado derreter na prensa: Utilize sempre folha de papel teflon protetor entre o prato da prensa e a frente do patch"
    ],
    dicaArtrelados: "Para fazer patches com acabamento perfeito sem tesoura: use sarja 100% poliéster. Depois de bordar a borda de satim, use um pirógrafo com ponta fina de corte (ou ferro de solda de 30W) contornando a borda de satim. O calor corta e sela o poliéster simultaneamente, deixando zero fiapos!",
    voceSabia: "Durante as missões espaciais da NASA (como as missões Apollo e os ônibus espaciais), todos os astronautas usam patches bordados no peito e ombros feitos com tecidos antichamas de Nomex e fios especiais resistentes ao calor extremo!",
    practicalExercise: "Borde um patch redondo de 70 mm com seu logotipo em sarja de poliéster e borda de satim de 4.0 mm. Sele a borda a quente, aplique o filme termocolante no verso e prense em um retalho de jeans. Puxe com força e comprove a aderência inquebrável!",
    quickSummary: "Emblema bordado independente com borda selada e filme termoativado no verso para aplicação rápida com calor.",
    relatedTerms: ["Papel Termocolante", "Ponto Satim", "Prensa Térmica", "Borda Merrow / Overlock"],
    tags: ["p-022", "patch", "termocolante", "emblema", "badge", "prensa termica", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY MAGAZINE. Production and Heat-Sealing of Custom Embroidered Badges. London, 2021.",
      "STAHLS' INTERNATIONAL. Heat Transfer Technologies & Embroidered Patch Application. Sterling Heights, 2022."
    ]
  },
  {
    id: "pesponto-topstitching-computadorizado",
    code: "P-023",
    letter: "P",
    term: "Pesponto / Topstitching Computadorizado (Topstitch / Decorative Outlining)",
    pronunciation: "pes-pon-to",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino.",
    category: "Pontos Básicos & Decorativos",
    summary: "Costura visível de precisão executada na superfície exterior da peça para reforço estrutural, demarcação de vincos, contornos geométricos ou realce decorativo de alta costura.",
    origin: "Do latim 'post-punctum' (ponto feito atrás/depois), método histórico de costura manual aparente e de alta resistência executado após a união das partes internas da peça.",
    definition: "O Pesponto Computadorizado (internacionalmente denominado Topstitching ou Decorative Run) é a execução automatizada de linhas de costura aparentes de altíssima precisão na face externa do artigo têxtil. No bordado computadorizado, o pesponto é utilizado para recriar detalhes de alfaiataria fina, contornos técnicos em bancos automotivos e couros, demarcação de costuras falsas em jeans e bolsos, e pespontos decorativos em bolsas e calçados. Pode ser executado com Ponto Corrido Simples, Ponto Duplo ou Ponto Triplo (Bean Stitch), frequentemente utilizando linhas mais encorpadas (como poliéster 30wt ou 20wt) para conferir relevo marcante e estética industrial premium.",
    howItWorks: [
      "1. O vetor é programado no software como linha contínua acompanhando as costuras ou os limites da peça.",
      "2. Define-se o passo do ponto (geralmente longo, entre 3.0 mm e 4.5 mm) para conferir aspecto de costura pesada.",
      "3. Seleciona-se o tipo de passada: simples, dupla ou tripla dependendo da espessura visual desejada.",
      "4. A máquina é equipada com agulha de calibre apropriado (ex: 80/12 ou 90/14) e linha superior encorpada.",
      "5. A tensão superior é ajustada ligeiramente mais alta para assentar o nó profundamente na camada intermediária do tecido.",
      "6. A máquina costura a linha reta ou curva com espaçamento milimétrico constante e sem oscilações."
    ],
    beginnerExplanation: "É aquela costura bonita, reta e bem aparente que a gente vê na beirada de jaquetas jeans, no painel de carros de luxo ou em bolsas de couro! A máquina faz uma linha de pontinhos perfeitos e grossinhos que dá um acabamento super profissional e chique.",
    applications: [
      "Costuras decorativas e monogramas em jaquetas jeans e calças de brim",
      "Detalhes e acabamentos de estofamento automotivo em couro e courvin",
      "Pespontos geométricos em bolsas, carteiras, sapatos e cintos de couro sintético",
      "Linhas de contorno minimalistas em desenhos modernos de alta-costura"
    ],
    technicalDetails: "O comprimento de passo padrão para pesponto decorativo é de 3.5 mm a 4.5 mm (muito mais longo que o ponto corrido comum de 2.5 mm). Ao utilizar linhas grossas de pesponto (como poliéster 30wt ou 20wt), DEVE-SE utilizar agulha de olho grande (calibre 90/14 ou 100/16 Topstitch) para evitar o aquecimento por atrito e o desfiamento do fio.",
    commonErrors: [
      "❌ Usar passo muito curto (2 mm) para pesponto decorativo, deixando a linha com aparência de costura comum sem destaque",
      "❌ Borda pesponto em couro com agulha cega ou inadequada, rasgando o couro ao longo da linha de furos",
      "❌ Usar linha grossa 30wt em agulha fina 70/10, arrebentando a linha a cada 10 centímetros",
      "❌ Tensão da bobina descalibrada, puxando o nó grosso para a frente da peça"
    ],
    troubleshootingTips: [
      "Se os pontos de pesponto parecerem tortos ou desalinhados: Aumente a firmeza da entretela e use uma agulha nova de ponta aguda (Microtex/Sharp)",
      "Se a linha grossa de pesponto quebrar constantemente: Troque para uma agulha Schmetz Topstitch 90/14 e reduza a velocidade para 500 PPM",
      "Se o couro sintético repuxar na linha da costura: Aumente o passo do ponto para 4.0 mm e aplique silicone spray no calcador"
    ],
    dicaArtrelados: "Para fazer pesponto dourado clássico estilo 'Jeans Levi's', use linha de poliéster 30wt cor amarelo-ouro/ocre com Ponto Triplo (Bean Stitch) e passo de 3.5 mm. O visual fica idêntico às peças originais de fábrica!",
    voceSabia: "Na indústria automobilística de supercarros (como Ferrari e Porsche), os pespontos duplos do painel de couro são bordados por máquinas industriais de ultraprecisão guiadas por câmeras de visão computacional!",
    practicalExercise: "Borde em um pedaço de jeans cru uma linha reta de 10 cm com ponto corrido comum (2.5 mm) e, ao lado, uma linha em Ponto Triplo com passo de 4.0 mm e linha ocre. Compare o impacto visual do verdadeiro pesponto.",
    quickSummary: "Costura aparente com pontos longos e encorpados para realce decorativo de contornos, jeans, couro e estofados.",
    relatedTerms: ["Ponto Triplo (Bean Stitch)", "Ponto Corrido", "Agulha Topstitch", "Linha 30wt"],
    tags: ["p-023", "pesponto", "topstitching", "costura decorativa", "jeans", "couro", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Topstitch and Decorative Run Stitch Techniques. Sydney, 2021.",
      "AUTOMOTIVE LEATHER CRAFT. Computerized Topstitching and Leather Registration. Munich, 2020."
    ]
  },
  {
    id: "paleta-cores-troca-linhas",
    code: "P-024",
    letter: "P",
    term: "Paleta de Cores e Troca de Linhas (Color Palette & Stop Sequences)",
    pronunciation: "pa-le-ta de co-res",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Softwares & Formatos",
    summary: "Gerenciamento digital das tabelas cromáticas de fabricantes de fios e sequenciamento lógico de paradas mecânicas (Stop/Color Change) para troca de linhas na máquina.",
    origin: "Do italiano 'paletta' (pequena pá de pintor para misturar tintas), adaptado à computação gráfica e ao controle de fusos de máquinas multicabeças.",
    definition: "A Paleta de Cores e Sequência de Trocas (Color Palette, Thread Charts & Stop Sequence) é o sistema integrado de mapeamento cromático que sincroniza as cores virtuais desenhadas no software com os cones de linha físicos instalados na máquina de bordar. Cada vez que o programador insere uma nova cor na matriz, o software gera um comando mecânico de troca de cor (Color Change ou Stop Command). Em máquinas de 1 agulha (domésticas), a máquina para, corta a linha e solicita ao operador a troca manual do carretel; em máquinas industriais multicabeças (de 4 a 15 agulhas), a CPU rotaciona automaticamente o bloco de agulhas para o número de agulha previamente indexado na ordem de bordado.",
    howItWorks: [
      "1. No software, o digitalizador seleciona a tabela do fabricante de linhas que utiliza (ex: Isacord, Madeira, Lumina, Polyneon).",
      "2. Ao colorir cada objeto, o software vincula o código exato do cone (ex: Vermelho 1800, Azul 1934).",
      "3. O software organiza a lista de paradas na 'Sequência de Bordado' (Color Sequence).",
      "4. Ao exportar a matriz, os comandos de 'Parada/Troca de Cor' são gravados no cabeçalho do arquivo.",
      "5. No painel da máquina, o operador visualiza a lista de paradas e define a sequência de agulhas (ex: Parada 1 = Agulha 3, Parada 2 = Agulha 8).",
      "6. A máquina executa as trocas automaticamente durante a produção sem erros cromáticos."
    ],
    beginnerExplanation: "É a tabelinha de cores da matriz que avisa a máquina quando parar para trocar de linha! Em máquinas domésticas ela apita na tela dizendo 'Coloque o Azul agora'; em máquinas industriais, ela troca de agulha sozinha girando o cabeçote num piscar de olhos.",
    applications: [
      "Mapeamento exato de cores Pantone e tabelas de fabricantes (Madeira, Isacord, Setta, Lumina)",
      "Otimização do sequenciamento para evitar trocas de cores repetidas e reduzir o tempo de produção",
      "Programação de paradas estratégicas (STOP) para colocação e corte de tecidos de aplique",
      "Pré-visualização realista tridimensional do bordado no computador antes da produção"
    ],
    technicalDetails: "Alguns formatos de arquivo (como Tajima .DST) NÃO armazenam códigos de cores RGB internos, salvando apenas comandos genéricos de 'Troca de Cor' (Stop). Já formatos nativos e modernos (como .EMB, .PES, .VP3, .EXP+) armazenam os códigos exatos dos fios. O programador profissional sempre agrupa objetos de mesma cor para minimizar o número total de paradas de máquina.",
    commonErrors: [
      "❌ Borda uma matriz com 15 trocas de cor quando a mesma arte poderia ser agrupada em apenas 4 trocas, triplicando o tempo de máquina",
      "❌ Salvar em formato .DST e achar que a máquina doméstica vai adivinhar a cor da linha na tela sem consultar a ficha técnica",
      "❌ Esquecer de calibrar a correspondência de agulhas no painel da máquina industrial, bordando a cor errada na posição errada",
      "❌ Não imprimir a folha de especificações (Ficha de Produção / Color Chart) para a operadora de máquina"
    ],
    troubleshootingTips: [
      "Se as cores na tela da máquina ficarem totalmente diferentes do computador: Formatos como .DST não guardam cores; configure a sequência de agulhas no painel da máquina",
      "Se a máquina parar no meio de um desenho sem trocar de cor: Verifique se não foi inserido um comando 'STOP' acidental na matriz",
      "Se o tempo de produção estiver muito alto: Use a ferramenta 'Otimizar Cores' (Color Sequence Optimizer) no software para fundir camadas de mesma cor"
    ],
    dicaArtrelados: "Sempre imprima ou salve em PDF a 'Ficha Técnica de Produção' da matriz contendo a miniatura colorida, o tempo estimado, o número de pontos e a ordem das cores com o código do fabricante. Isso elimina 100% dos erros de linha no ateliê!",
    voceSabia: "As maiores máquinas industriais do mundo possuem até 56 cabeças e 15 agulhas por cabeça, totalizando 840 cones de linha passando simultaneamente pela máquina!",
    practicalExercise: "Abra uma matriz no seu software com várias cores espalhadas. Use o recurso de 'Reordenar por Cor' (Optimize Color Changes) e observe quantos minutos de máquina e trocas de linha foram economizados!",
    quickSummary: "Mapeamento digital de tabelas cromáticas de fios e sequenciamento de paradas para trocas automáticas ou manuais de linha.",
    relatedTerms: ["Sequência de Bordado", "Ficha Técnica de Produção", "Formato DST", "Máquina Multicabeças"],
    tags: ["p-024", "paleta de cores", "troca de linhas", "color palette", "stop sequence", "tabela de fios", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Color Management and Thread Chart Integration. Sydney, 2022.",
      "MADEIRA THREADS. Color Matching Standards for Computerized Embroidery. Freiburg, 2021."
    ]
  }
];

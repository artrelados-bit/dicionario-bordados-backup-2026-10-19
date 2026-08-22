import { Verbete } from "../types";

export const VERBETES_LETTER_J_PART11: Verbete[] = [
  {
    id: "j-062-janela-de-bordado-util-e-margens-limitrofes-do-bastidor",
    code: "J-062",
    term: "Janela de Bordado Útil e Margens Limítrofes do Bastidor (Hoop Sewing Field & Safety Margin Window)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Bastidores & Fixação",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'janua' (porta, abertura) e do inglês 'hoop sewing field' (campo de costura útil do bastidor). Conceito geométrico de segurança CNC têxtil.",
    summary: "Área interna máxima real do bastidor que a agulha consegue alcançar fisicamente sem bater nas bordas de plástico do aro ou no pé-calcador.",
    definition: "A Janela de Bordado Útil e Margens Limítrofes de Segurança (Hoop Sewing Field / Safe Stitching Window / Clearance Boundary) é a delimitação geométrica retangular, oval ou circular que define a extensão física milimétrica máxima em que a barra de agulha e o pé-calcador da máquina de bordar podem se deslocar livremente sem colidir com as paredes plásticas ou metálicas do aro do bastidor. Embora um bastidor comercial seja vendido como '13x18 cm' ou '20x30 cm', a janela útil real de bordado é de aproximadamente 12,6 x 17,6 cm ou 19,5 x 29,5 cm, exigindo que o digitalizador e a bordadeira mantenham uma margem livre de segurança de pelo menos 5 mm a 10 mm em relação ao perímetro físico para evitar acidentes e quebras de agulha.",
    technicalDetails: "Área útil regulamentada pelo firmware da máquina com travamento automático de segurança (Software Limiter). A aproximação excessiva da borda provoca distorção mecânica por perda de rigidez do tecido tensionado próximo ao aro.",
    howItWorks: [
      "1. A bordadeira seleciona uma matriz de 17,8 cm para bordar em um bastidor 13x18 cm.",
      "2. Ao carregar a matriz na máquina, o sistema compara as dimensões com o arquivo de limites da janela útil.",
      "3. Como o desenho atinge 17,8 cm (ficando a apenas 1 mm do aro), o painel emite um aviso de 'Tamanho Excedido'.",
      "4. A bordadeira abre a matriz no software e reduz suavemente 4% do tamanho, deixando o desenho com 17,1 cm.",
      "5. A máquina aceita o arquivo e libera a execução.",
      "6. A função de traçado (Trace) confirma que o pé-calcador passa com folga confortável de 6 mm da borda do bastidor.",
      "7. O bordado é executado com estabilidade perfeita, sem batidas de calcador e sem agulhas quebradas."
    ],
    beginnerExplanation: "É o 'espaço livre de verdade' que a agulha tem para costurar dentro do bastidor! Quando a gente compra um bastidor de 13x18 cm, a gente não pode encher até a última beiradinha de plástico, senão o pé de ferro da agulha bate com tudo na borda e quebra a agulha! É preciso sempre deixar um espacinho de respiro em toda a volta!",
    applications: [
      "Dimensionamento correto de matrizes no software de programação antes de enviar para a máquina",
      "Prevenção de colisões mecânicas entre o pé-calcador e as paredes internas do aro do bastidor",
      "Garantia de tensão uniforme do tecido em toda a extensão do desenho",
      "Padronização de molduras e monogramas com folgas simétricas perfeitas"
    ],
    commonErrors: [
      "❌ Borda matrizes no limite máximo de 100% da área do bastidor, fazendo o pé-calcador raspar no aro e quebrar agulhas",
      "❌ Não acionar o comando de traçado (Trace) para conferir visualmente a janela útil antes de bordar",
      "❌ Esquecer que bastidores com formatos ovais têm as extremidades superiores e inferiores mais estreitas que o centro"
    ],
    troubleshootingTips: [
      "Deixe sempre uma margem de segurança de pelo menos 5 mm a 10 mm entre o desenho e a borda plástica do bastidor",
      "Ao criar molduras e brasões no Wilcom ou Hatch, ative a visualização do bastidor para enxergar a linha pontilhada da janela útil",
      "Se o desenho passar 3 mm da janela útil, prefira trocar para o bastidor imediatamente maior em vez de forçar o menor"
    ],
    dicaArtrelados: "Nunca trabalhe com o desenho colado na borda do bastidor! O tecido perto do aro fica muito esticado e duro, o que pode repuxar o ponto e deixar o bordado torto. Deixar 1 cm de folga garante que o calcador corra suave e seu bordado fique lisinho como veludo!",
    voceSabia: "As máquinas industriais de bordado possuem sensores magnéticos e micro-chaves nos braços do pantógrafo que bloqueiam a descida da agulha se o bastidor ultrapassar a janela útil por apenas 0,1 milímetro!",
    practicalExercise: "Coloque o bastidor 10x10 cm na sua máquina, selecione um desenho de 9,5 cm e acione o botão de Trace: observe a agulha passeando pelos quatro cantos e veja a distância milimétrica que sobra entre o pé-calcador e o plástico do aro!",
    quickSummary: "Área física interna máxima do bastidor com margem de segurança para deslocamento livre da agulha e do calcador.",
    relatedTerms: [
      "Bastidor de Bordado",
      "Jog de Ajuste de Bastidor no Setup Inicial",
      "Calibração de Ponto Zero / Ponto Central",
      "Bastidores & Fixação"
    ],
    tags: [
      "j-062",
      "janela util",
      "campo de bordado",
      "margem de seguranca",
      "bastidor",
      "trace",
      "colisao",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA. Hoop Sewing Fields & Clearance Perimeter Safety Guidelines. Nagoya, 2022.",
      "BROTHER. Embroidery Frame Specifications & Usable Sewing Area Manual. Nagoya, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "j-063-jateamento-criogenico-e-limpeza-a-frio-de-placas-de-agulha",
    code: "J-063",
    term: "Jateamento Criogênico, Limpeza Ultrassônica e Desengraxe a Frio (Ultrasonic & Cryogenic Cleaning of Needle Plates)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Manutenção & Armazenamento",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego 'kryos' (gelo, frio congelante) e do latim 'limpidus'. Tecnologia de manutenção mecatrônica avançada para desincrustação de adesivos e ceras sem agredir o aço temperado.",
    summary: "Técnicas de limpeza de precisão com gelo seco ou cuba ultrassônica para remover resíduos petrificados de cola spray e fibras compactadas da chapa de ponto e lançadeira.",
    definition: "A Limpeza Ultrassônica e Desengraxe a Frio de Placas de Agulha e Conjunto de Lançadeira (Precision Ultrasonic Degreasing & Cold Cryogenic De-Linting) é o procedimento avançado de higienização de componentes mecânicos de alta tolerância da máquina de bordar (placas de ponto, dentes de tração, guias de corte, caixas de bobina e corpo da lançadeira rotativa). Utiliza ondas mecânicas de ultrassom de alta frequência (40 kHz) em solução desengraxante biodegradável ou jatos de micropartículas de gelo seco (-78,5°C) que sublimam instantaneamente. O método quebra a adesão molecular de colas sprays ressecadas, ceras lubrificantes queimadas e poeira têxtil compactada sem riscar a superfície espelhada do aço nem descalibrar as folgas micrométricas.",
    technicalDetails: "Frequência ultrassônica de 40.000 vibrações por segundo gerando microcavitação hidrodinâmica. Não abrasivo para revestimentos de Teflon, Titânio ou Níquel químico.",
    howItWorks: [
      "1. A placa de agulha e a caixa de bobina de uma máquina que borda peças adesivadas diariamente são desmontadas na revisão.",
      "2. As peças metálicas apresentam camadas pretas endurecidas de cola spray misturada com fiapos de linha.",
      "3. As peças são imersas em uma cuba de ultrassom com água destilada e detergente neutro por 10 minutos a 40°C.",
      "4. Milhões de microbolhas implodem contra o metal em escala microscópica.",
      "5. Toda a crosta de cola e resíduos se solta completamente sem necessidade de raspagem manual com facas ou lixas.",
      "6. As peças saem 100% limpas, são secas com jato de ar comprimido e lubrificadas com óleo fino de alta viscosidade.",
      "7. Ao remontar na máquina, a passagem da linha e a laçada ocorrem com fluidez absoluta, sem atritos parasitas."
    ],
    beginnerExplanation: "É como uma 'banheirinha mágica de lavar joias' que limpa as pecinhas de ferro da máquina de bordar! Quando a chapa de agulha fica cheia de cola spray grudenta e fiapos duros que não saem com pincel, a banheira de ultrassom dá vibrações tão rápidas que solta toda a sujeira em minutos, deixando as peças brilhando como novas sem riscar o metal!",
    applications: [
      "Desincrustação profunda de placas de ponto empastadas por cola spray temporária",
      "Limpeza periódica de blocos de facas móveis e lâminas de corte automático",
      "Manutenção de precisão em assistências técnicas e ateliês de alta produtividade",
      "Desengraxe de caixas de bobina sem danificar a mola tensora de precisão"
    ],
    commonErrors: [
      "❌ Raspar a placa de agulha com chave de fenda ou faca de cozinha, criando ranhuras afiadas que passam a cortar a linha de bordar",
      "❌ Usar solventes altamente corrosivos (como acetona pura ou tíner) em peças que contêm arruelas plásticas ou sensores eletrônicos",
      "❌ Remontar peças metálicas na máquina sem secar 100% da umidade, provocando oxidação e ferrugem na lançadeira"
    ],
    troubleshootingTips: [
      "Para limpar a placa de agulha no ateliê sem ultrassom: Use um pano de microfibra com álcool isopropílico 99,8% e passe suavemente nas canaletas",
      "Nunca use lixa grossa para tirar cola de peças metálicas da máquina: um único arranhão microscópico fará a linha desfiar",
      "Mantenha uma cuba ultrassônica compacta no ateliê para limpar sapatilhas, pinças e placas de agulha sem esforço"
    ],
    dicaArtrelados: "A chapa da sua máquina ficou toda empastada e grudenta de cola spray? Nunca raspe com estilete ou tesoura! Molhe um algodão com álcool isopropílico, deixe em cima da cola por 5 minutos para amolecer e limpe com um pano macio. O metal continua lisinho como um espelho e suas linhas nunca mais arrebentam!",
    voceSabia: "A tecnologia de cavitação ultrassônica foi criada a partir de estudos sobre como os golfinhos e baleias utilizam ondas sonoras submarinas para se comunicar através de fluidos!",
    practicalExercise: "Retire a placa da agulha da sua máquina e examine com uma boa luz: veja se há marcas pretas de cola spray ou fiapos duros escondidos embaixo. Limpe cuidadosamente com álcool isopropílico e sinta a diferença no deslizar do fio!",
    quickSummary: "Limpeza de alta tecnologia com ultrassom ou ar frio para desincrustar cola spray e fiapos sem danificar peças metálicas.",
    relatedTerms: [
      "Placa de Agulha / Chapa de Ponto",
      "Cola Temporária em Spray para Tecidos",
      "Manutenção Preventiva e Lubrificação",
      "Manutenção & Armazenamento"
    ],
    tags: [
      "j-063",
      "limpeza ultrassonica",
      "placa de agulha",
      "desengraxe",
      "cola spray",
      "manutencao",
      "chapa de ponto",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN. Precision Cleaning, Ultrasonic Maintenance & Degreasing Protocols. Tokyo, 2022.",
      "KOBAN. Rotary Hook Care & Surface Integrity Maintenance Manual. Osaka, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "j-064-juncao-em-y-e-intersecções-complexas-de-colunas-satin",
    code: "J-064",
    term: "Junção em Y e Intersecções Complexas de Colunas Satin (Y-Branching & Complex Satin Column Intersections)",
    letter: "J",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'junctio' (união, ligação) e da letra 'Y' (formato de bifurcação de caminhos). Teoria geométrica de digitalização de colunas de satim.",
    summary: "Técnica de programação para unir três ramos de ponto cheio em formato de 'Y' sem empilhar pontos no centro, evitando buracos, relevos duros e quebra de agulhas.",
    definition: "A Junção em Y e Intersecções Angulares de Colunas Satin (Y-Branching Topology / Complex Satin Junctions / Mitered Split Splitting) é a técnica de digitalização avançada utilizada para conectar três hastes de ponto cheio que convergem em um mesmo vértice (típico em letras como Y, K, X, ramos de flores ou galhos de árvores). Quando duas ou três colunas de satim são sobrepostas sem planejamento, o ponto central acumula até 300% de densidade, criando um calombo rígido no tecido que entorta agulhas e quebra linhas. A técnica consiste em dividir a junção em peças complementares com corte chanfrado em meia-esquadria (Mitered Cap), sobreposição em degrau fracionado ou ramificação automática com divisão de densidade.",
    technicalDetails: "Aplicação de ângulo de entrada e saída com divisão de densidade proporcional (densidade ajustada para 0,60 mm na zona de transição). Utilização de underlays contínuos que cruzam a junta para evitar aberturas após a lavagem.",
    howItWorks: [
      "1. O programador está digitalizando a letra 'Y' maiúscula em ponto cheio com 4 mm de largura.",
      "2. Em vez de desenhar a haste vertical e jogar os dois braços diagonais por cima criando uma montanha de pontos:",
      "3. Ele divide a junção central em corte de esquadria perfeito a 45 graus.",
      "4. Programa o primeiro braço esquerdo descendo suavemente até o centro.",
      "5. Encaixa o braço direito com ângulo casado de penetração alternada.",
      "6. Continua com a perna vertical inferior a partir do ponto comum.",
      "7. A máquina borda o 'Y' com superfície perfeitamente lisa e plana, sem calombos e com brilho acetinado uniforme em todas as direções."
    ],
    beginnerExplanation: "Sabe quando você vai bordar a letra Y ou o galho de uma árvore e bem no meio onde os três pauzinhos se encontram fica um caroço duro e grosso de linha? A junção em Y é o jeito certo no computador de cortar os pedacinhos com um encaixe perfeito como se fossem pecinhas de madeira de um quebra-cabeça, sem empilhar linha em cima de linha!",
    applications: [
      "Digitalização de fontes e alfabetos tipográficos com letras complexas (Y, X, K, R, B)",
      "Bordado de folhagens, ramos botânicos e ramificações de flores",
      "Brasões heraldicos e logotipos com linhas geométricas entrelaçadas",
      "Bordados em tecidos delicados que não suportam acúmulo de camadas de linha"
    ],
    commonErrors: [
      "❌ Sobrepor três colunas de ponto cheio com 0,40 mm de densidade no mesmo ponto, fazendo a agulha bater em um bloco maciço de linha e quebrar",
      "❌ Não estender os underlays por baixo da junção, fazendo a junta abrir uma fresta branca no meio do 'Y' após o encolhimento do tecido",
      "❌ Deixar nós vetoriais sem alinhamento de ângulo, gerando pontos tortos e desfiados no encontro das colunas"
    ],
    troubleshootingTips: [
      "No Wilcom ou Hatch: Ative a ferramenta 'Smart Corners / Cantos Inteligentes' com opção 'Meia-Esquadria' ou 'Corte Lapidado'",
      "Em letras grandes: Faça um dos ramos passar direto e encaixe o outro como ramificação secundária com sobreposição suave de 0,5 mm",
      "Se a junção ficar muito grossa na máquina: Reduza a densidade dos pontos apenas no nó central da interseção"
    ],
    dicaArtrelados: "Para fazer a letra Y ou galhos de árvore ficarem com acabamento de ateliê fino: divida o encontro das colunas com um encaixe chanfrado! O bordado fica plano, macio ao toque e a máquina borda em velocidade máxima sem quebrar uma única agulha!",
    voceSabia: "A técnica de meia-esquadria em junções têxteis foi diretamente inspirada na marcenaria clássica renascentista, onde mestres marceneiros uniam molduras de quadros com ângulos perfeitos de 45 graus!",
    practicalExercise: "No seu software de bordado, digite uma letra 'Y' de 5 cm: dê um zoom no ponto de encontro das 3 pernas e observe como as linhas de ponto cheio se encontram. Ajuste os ângulos para ficarem perfeitamente chanfrados e simétricos!",
    quickSummary: "Técnica de geometria vetorial que une três colunas de ponto cheio em vértice comum sem empilhamento excessivo de linha.",
    relatedTerms: [
      "Ponto Cheio (Satin)",
      "Tratamento de Cantos em Meia-Esquadria",
      "Compensação de Encolhimento (Pull Compensation)",
      "Programação de Bordado"
    ],
    tags: [
      "j-064",
      "juncao em y",
      "interseccao",
      "colunas satin",
      "cantos inteligentes",
      "programacao",
      "wilcom",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM. Satin Column Topology, Branching Algorithms & Complex Intersections. Sydney, 2022.",
      "DEVERSON, B. Advanced Vector Topologies for Commercial Embroidery Digitizing. London, 2021."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "j-065-justaposicao-de-cores-e-mistura-optica-de-fios-no-bordado",
    code: "J-065",
    term: "Justaposição de Cores, Mistura Óptica e Efeito Pontilhista (Optical Color Juxtaposition & Pointillism Stitching)",
    letter: "J",
    level: "Intermediário 🟡",
    category: "Teoria & Fundamentos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'juxta' (ao lado de, junto) + 'positio' (colocação) e da teoria impressionista das cores de Georges Seurat (1886) aplicada ao entrelaçamento têxtil.",
    summary: "Colocação lado a lado de pontos de cores complementares (ex: azul e amarelo) que a visão humana funde à distância criando novas cores (verde) com riqueza luminosa.",
    definition: "A Justaposição de Cores e Mistura Óptica por Efeito Pontilhista (Optical Color Juxtaposition / Chromatic Stitch Blending / Pointillist Embroidery Dynamics) é a aplicação dos princípios da física óptica e da teoria das cores no bordado computadorizado. Em vez de utilizar apenas linhas unicolores puras para representar tons complexos (como pele humana, pétalas de orquídeas ou plumagens de pássaros), o digitalizador programa passagens alternadas de pontos finos de cores distintas intercaladas lado a lado. À distância normal de observação, a retina humana não distingue os fios individuais, realizando a síntese aditiva no cérebro e gerando nuances cromáticas de alto brilho e realismo impossíveis de alcançar com cones convencionais.",
    technicalDetails: "Espaçamento fracionado de 0,8 mm a 1,2 mm por camada de cor com ângulo de penetração defasado em 15° a 30° para evitar moiré. Uso preferencial de linhas finas calibre 60 ou 75 para maior fidelidade óptica.",
    howItWorks: [
      "1. A bordadeira deseja bordar uma maçã realista com degradê do vermelho intenso até o amarelo dourado.",
      "2. Em vez de fazer uma divisão dura entre duas cores sólidas:",
      "3. O programador digitaliza a primeira camada em amarelo aberto (densidade 0,80 mm) com pontos longos e curtos.",
      "4. Sobrepõe uma segunda camada em vermelho aberto (densidade 0,80 mm) com as pontadas entrelaçadas nos vãos do amarelo.",
      "5. A máquina borda as duas linhas em sequência.",
      "6. De perto, enxergam-se linhas vermelhas e amarelas alternadas; ao afastar a peça a 50 cm dos olhos, surge um tom laranja luminoso e vibrante.",
      "7. O resultado é uma fruta com profundidade tridimensional e acabamento de pintura a óleo."
    ],
    beginnerExplanation: "É o segredo de ouro para fazer degradês e desenhos que parecem pinturas de verdade! Em vez de usar só uma cor de linha chapada, você faz a máquina costurar tracinhos finos de duas cores diferentes juntinhas (como amarelo e vermelho misturados). Quando a gente olha de longe, nossos olhos misturam as duas cores e enxergam um laranja brilhante e maravilhoso!",
    applications: [
      "Bordados fotográficos realistas (PhotoStitch) e retratos humanos com tons de pele",
      "Pétalas de flores, folhagens botânicas e paisagens de natureza viva",
      "Efeitos de brilho metálico e reflexo de luz em desenhos esportivos",
      "Reprodução de obras de arte e tapeçarias em bordado computadorizado"
    ],
    commonErrors: [
      "❌ Misturar cores com densidades muito fechadas (0,35 mm), criando uma placa grossa e dura de tecido em vez de um degradê suave",
      "❌ Borda as duas cores exatamente na mesma direção e ângulo de ponto, fazendo uma linha tampar a outra totalmente",
      "❌ Usar cores muito escuras com cores claras sem camada intermediária de transição"
    ],
    troubleshootingTips: [
      "Para fazer degradê perfeito: Abra a densidade de cada camada para 0,70 mm a 0,90 mm e use a ferramenta 'Densidade Gradual / Ponto Degradê'",
      "Alterne o ângulo de ponto em cerca de 15 a 20 graus entre uma cor e outra para que os fios se entrelacem harmoniosamente",
      "Use linhas de poliéster com brilho trilobal para aumentar o efeito luminoso da reflexão da luz"
    ],
    dicaArtrelados: "Quer impressionar seus clientes com bordados que parecem quadros pintados à mão? Use a mistura de cores com pontos intercalados! Um raminho de folhas com verde-escuro e toques de amarelo lado a lado ganha vida própria e parece que está brilhando no sol!",
    voceSabia: "Essa mesma técnica de ilusão de ótica criada pelos pintores impressionistas no século XIX é a base usada até hoje em todas as telas de celulares e televisores do mundo para formar imagens a partir de micropixels vermelhos, verdes e azuis!",
    practicalExercise: "No seu software, crie dois quadrados sobrepostos: no de baixo coloque amarelo com densidade 0,80 mm e no de cima coloque azul com densidade 0,80 mm e bordas pontilhadas. Veja na tela 3D como o quadrado vira um tom de verde suave!",
    quickSummary: "Entrelaçamento óptico de fios de cores distintas lado a lado que o olho humano funde criando tons e degradês realistas.",
    relatedTerms: [
      "Degradê no Ponto Cheio e Ponto Tatami",
      "Ponto Foto / PhotoStitch",
      "Linha de Poliéster 100%",
      "Teoria & Fundamentos"
    ],
    tags: [
      "j-065",
      "justaposicao",
      "mistura optica",
      "degrade",
      "teoria das cores",
      "pontilhismo",
      "photostitch",
      "artrelados"
    ],
    bibliographicReferences: [
      "CHEVREUL, M. E. The Principles of Harmony and Contrast of Colours and Their Applications to the Arts. Paris, 1839 / New York, 2021.",
      "WILCOM. Shading, Accordion Stitch & Color Blending Techniques in Machine Embroidery. Sydney, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "j-066-jog-de-velocidade-dinamica-e-modulacao-em-curvas-fechadas",
    code: "J-066",
    term: "Jog de Velocidade Dinâmica e Modulação em Curvas Fechadas (Dynamic Speed Jog & Corner Deceleration Modulation)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Comandos de Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'speed jog modulation' (modulação de aceleração e desaceleração dinâmica de servomotores). Engenharia mecatrônica CNC de controle de movimento.",
    summary: "Algoritmo eletrônico da máquina de bordar que reduz automaticamente a velocidade em curvas fechadas e pequenos detalhes, acelerando em retas longas.",
    definition: "A Modulação Dinâmica de Velocidade e Desaceleração em Curvas (Dynamic Speed Jog Modulation / Look-Ahead Cornering / Adaptive RPM Control) é a funcionalidade mecatrônica integrada aos processadores de controle de movimento das máquinas de bordar modernas. O algoritmo analisa os próximos 50 a 200 vetores de pontos gravados na matriz (sistema 'Look-Ahead') e calcula a inércia do pantógrafo: ao detectar curvas acentuadas, ângulos agudos ou saltos curtos, a máquina reduz automaticamente de 1.000 PPM para 550 PPM para evitar deflexão de agulha e quebra de fio. Assim que a trajetória retorna a retas ou preenchimentos amplos, acelera suavemente de volta à velocidade máxima sem intervenção do operador.",
    technicalDetails: "Cálculo de aceleração em curva com controle de 'Jerk' (derivada da aceleração) para suavização de transições. Reduz o estresse mecânico no braço do pantógrafo em até 40% durante bordados complexos.",
    howItWorks: [
      "1. A máquina inicia o bordado de um logotipo corporativo grande programado para rodar a 900 PPM.",
      "2. No preenchimento amplo do fundo em tatami, a máquina atinge 900 PPM em velocidade de cruzeiro.",
      "3. A matriz chega na seção de letras miúdas de 4 mm com curvas muito fechadas.",
      "4. O processador calcula a inércia e desacelera suavemente os servomotores para 550 PPM.",
      "5. A agulha executa as curvinhas das letras miúdas com precisão cirúrgica sem entortar nem vibrar.",
      "6. Finalizadas as letrinhas, o sistema acelera de volta para 900 PPM instantaneamente.",
      "7. A produção ganha velocidade máxima nas áreas abertas com qualidade impecável nos microdetalhes."
    ],
    beginnerExplanation: "É como o piloto automático inteligente de um carro moderno que freia sozinho quando vê uma curva perigosa na estrada e acelera de novo na reta! A máquina de bordar lê o desenho um pouquinho antes: se o desenho tem curvinhas miudinhas, ela diminui a velocidade sozinha para a linha não arrebentar; quando volta para a parte reta, ela acelera no máximo para terminar rápido!",
    applications: [
      "Bordados que combinam grandes áreas de fundo com letras e detalhes minúsculos",
      "Proteção de agulhas finas (calibres 60 e 65) em curvas complexas",
      "Aumento da vida útil das correias e mancais do pantógrafo da máquina",
      "Maximização da produtividade industrial mantendo padrão de altíssima definição"
    ],
    commonErrors: [
      "❌ Desativar o controle adaptativo de velocidade no menu técnico e forçar 1.000 PPM contínuos em microletras, entortando agulhas e quebrando linhas",
      "❌ Borda linhas metálicas ou fios delicados em velocidade máxima sem ativar a curva de desaceleração",
      "❌ Programar matrizes com nós vetoriais excessivos e desnecessários que forçam o processador a desacelerar a máquina o tempo todo"
    ],
    troubleshootingTips: [
      "Em máquinas industriais (Tajima, Barudan, SWF, Brother PR): Mantenha a função 'Auto Speed / Corner Deceleration' sempre ativada no painel",
      "Para bordar monogramas finos e letras cursivas: Defina a velocidade máxima da máquina em 600 a 700 PPM para garantir traçado perfeito",
      "Ao digitalizar no software: Limpe nós vetoriais redundantes para que o movimento da máquina flua como uma onda suave"
    ],
    dicaArtrelados: "Se você quer que suas letrinhas pequenas fiquem legíveis e perfeitas como letras de livro impresso: não tenha pressa! Baixe a velocidade da máquina para 600 PPM na hora dos detalhes. A calma na execução é o maior segredo para um acabamento fino de alto luxo!",
    voceSabia: "Os algoritmos de desaceleração adaptativa 'Look-Ahead' usados nos servomotores das máquinas de bordar são os mesmos princípios de física computacional usados nas asas de aviões supersônicos para reduzir turbulência em curvas!",
    practicalExercise: "Borde uma matriz que tenha um quadrado grande e um nome pequeno escrito no centro: escute o som da sua máquina mudando de ritmo, acelerando no quadrado e diminuindo o som suavemente na hora de escrever as letrinhas!",
    quickSummary: "Controle eletrônico que desacelera automaticamente a máquina em curvas e microdetalhes para precisão total sem quebras.",
    relatedTerms: [
      "Pontos por Minuto (PPM / SPM)",
      "Deflexão da Agulha e Flexão Elástica Dinâmica",
      "Microletras e Fontes de Pequeno Porte",
      "Comandos de Máquina"
    ],
    tags: [
      "j-066",
      "jog de velocidade",
      "desaceleracao",
      "curvas fechadas",
      "look ahead",
      "ppm",
      "mecanica",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA. High-Speed Motion Control, Dynamic Curve Deceleration & Servo Tuning. Nagoya, 2022.",
      "BROTHER. Industrial Embroidery Machine Firmware Architecture & Speed Optimization. Nagoya, 2023."
    ],
    updatedAt: "2026-08-22"
  }
];

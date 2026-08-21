import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART2: Verbete[] = [
  {
    id: "i-007-inclinacao-angular-de-ponto-angulos-de-direcao",
    code: "I-007",
    term: "Inclinação Angular de Ponto & Direção Vetorial de Linha (Stitch Angle & Directional Slope Vectors)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim inclinatio (desvio/tendência angular) e angulus (canto/quina). Princípio básico de refração de luz e escoamento de fios na digitalização de matrizes.",
    summary: "Ângulo em graus que define a direção em que os pontos cheios ou tatami serão costurados, controlando o brilho da linha e a flexibilidade do bordado.",
    definition: "A Inclinação Angular de Ponto (Stitch Angle / Vector Flow Lines / Directional Inclination) é a propriedade vetorial programada no software de digitalização que estabelece o ângulo trigonométrico preciso (de 0° a 360°) no qual a agulha penetrará alternadamente para formar colunas de ponto cheio (Satin) ou blocos de preenchimento (Tatami). Além de determinar o escoamento estético e a refração da luz sobre os filamentos brilhantes de poliéster ou viscose, a inclinação angular comanda diretamente a direção das forças físicas de repuxo (Pull) exercidas sobre o tecido, sendo crucial para conferir volume, tridimensionalidade e estabilidade dimensional ao bordado.",
    technicalDetails: "Geometria angular e comportamento físico:\n• Eixo 0° / 180°: Ponto horizontal (repuxa o tecido no sentido X, empurra no sentido Y);\n• Eixo 90° / 270°: Ponto vertical (repuxa no sentido Y, empurra no sentido X);\n• Eixo 45° / 135°: Ponto diagonal (distribui as forças uniformemente sobre a trama e urdume);\n• Linhas de Ângulo Múltiplas (Turning Stitch Angles): Linhas guias radiais aplicadas em curvas de letras ou pétalas para manter os pontos sempre perpendiculares à linha central da forma.",
    howItWorks: [
      "1. No software de matriz (como Wilcom ou Embird), o digitalizador desenha uma letra curva ou folha.",
      "2. Em vez de definir um ângulo fixo único para a forma inteira, ele insere várias 'Linhas de Inclinação de Ponto' (Stitch Angles).",
      "3. O algoritmo calcula a transição suave de graus entre uma linha e outra ao longo da curva.",
      "4. Ao bordar, a agulha vai girando milimetricamente o sentido das laçadas, acompanhando a anatomia da figura.",
      "5. Quando a luz do ambiente incide sobre o bordado pronto, os filamentos da linha refletem o brilho em direções diferentes, criando um efeito degradê de sombra e luz natural fascinante.",
      "6. A peça bordada dobra com naturalidade no corpo sem ficar como uma placa dura e esticada."
    ],
    beginnerExplanation: "É a direção para onde os pontos da linha ficam 'deitados'! Se todos os pontos ficarem deitados na mesma direção, o desenho fica parecendo um carimbo chapado e sem vida. Mas se você inclinar os pontos seguindo o desenho (como as folhas de uma flor ou as pernas de uma letra), a luz bate na linha brilhante e faz o bordado parecer que tem relevo de verdade e muito luxo!",
    applications: [
      "Digitalização anatômica de pétalas de flores, folhas e penas de pássaros com reflexo realista de luz",
      "Curvatura fluida em letras cursivas e monogramas clássicos bordados em ponto cheio",
      "Controle de repuxo em bordados circulares e brasões corporativos",
      "Criação de efeitos ópticos de profundidade e contraste entre figura e fundo sem trocar a cor da linha"
    ],
    commonErrors: [
      "Usar ângulo de ponto único em uma letra cheia de curvas (ex: letra 'S' ou 'C'), gerando pontos retos em áreas curvas que estragam o desenho",
      "Cruzar linhas de inclinação no software criando ângulos conflitantes que geram nós e amontoados de linha",
      "Programar ângulos exatamente paralelos ao sentido de maior elasticidade de uma malha sem entretela adequada"
    ],
    troubleshootingTips: [
      "Em curvas fechadas de letras, distribua as linhas de ângulo com espaçamento de 3mm a 5mm para que a rotação dos pontos seja suave",
      "Para destacar duas partes da mesma cor em um desenho (ex: a asa e o corpo de um pássaro), use a mesma linha mas com ângulos opostos (ex: 45° e 135°): a refração da luz fará parecer duas cores diferentes!",
      "Em folhas de plantas, utilize duas metades com ângulos em espinha de peixe (Chevron Angle) a 60° para um realismo botânico imediato",
      "Evite inclinações de ponto com saltos bruscos superiores a 45° de um ponto para outro para evitar que a linha fique frouxa"
    ],
    dicaArtrelados: "O segredo dos bordados mais caros e cobiçados do mundo não está na quantidade de cores, mas no domínio dos ângulos de ponto! Uma matriz monocromática feita com inteligência angular cria efeitos de sombra e brilho que encantam qualquer cliente!",
    voceSabia: "O fenômeno do brilho mudar conforme o ângulo do ponto é chamado em física óptica de 'anisotropia de reflexão', o mesmo princípio utilizado na tecelagem de veludos nobres e sedas damascadas desde a Idade Média!",
    practicalExercise: "No seu software de bordado, crie um círculo com ponto tatami dividido em quatro fatias: coloque a fatia 1 a 0°, a fatia 2 a 45°, a fatia 3 a 90° e a fatia 4 a 135°. Borde com linha dourada ou prata e gire a peça na mão sob a luz para ver o show de reflexos!",
    quickSummary: "Direção angular dos pontos na matriz que define a reflexão de luz, o relevo visual e o controle de repuxo mecânico.",
    relatedTerms: ["Ponto Cheio / Ponto Satin", "Ponto Tatami", "Compensação de Repuxo", "Inversão de Sentido de Ponto"],
    tags: ["i-007", "inclinacao de ponto", "stitch angle", "angulos", "brilho", "reflexao de luz", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM DIGITIZING MASTERCLASS. Stitch Angle Dynamics & Directional Vector Flow. Sydney, 2023.",
      "THE EMBROIDERY DIGITIZING MANUAL. Optical Reflections and Thread Anisotropy. London, 2022.",
      "ARTRELADOS. A Luz no Bordado: Como Dominar a Inclinação Angular de Pontos para Criar Peças Tridimensionais. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-008-intertravamento-de-lacada-na-lancadeira-ponto-301",
    code: "I-008",
    term: "Intertravamento de Laçada na Lançadeira & Ponto ISO 301 (Loop Interlocking & Shuttle Timing Dynamics)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do alemão Schlingenfänger (capturador de laçada) e norma técnica internacional ISO 4915 (Ponto fixo 301). Princípio fundamental da costura e bordado mecânico moderno.",
    summary: "Momento milimétrico em que a ponta da lançadeira passa atrás da agulha capturando a laçada da linha superior e entrelaçando-a com a linha da bobina.",
    definition: "O Intertravamento de Laçada na Lançadeira (Shuttle Hook Loop Interlocking & ISO 301 Lockstitch Formation) é o fenômeno cinemático de sincronismo mecânico que constitui o núcleo operacional de qualquer máquina de bordar computadorizada. Durante o ciclo de descida e subida da agulha (na fase de elevação de 1,8mm a 2,2mm a partir do Ponto Morto Inferior - PMI), a folga criada na linha superior projeta uma alça circular elástica (Laçada / Loop) na cava da haste da agulha (Scarf). A ponta afiada da lançadeira rotativa passa a uma distância micrométrica (0,05mm a 0,10mm) do olho da agulha, intercepta a laçada, expande-a e a faz girar 360° ao redor da caixa de bobina, entrelaçando a linha de cima com a de baixo e formando o ponto preso perfeito.",
    technicalDetails: "Metrologia e parâmetros do sincronismo de lançadeira:\n• Ponto Morto Inferior (Bottom Dead Center - BDC / 180° de eixo principal);\n• Elevação de agulha para captura de laçada: 1,8mm a 2,2mm após o PMI (correspondente a 198° - 202° no dial);\n• Folga ponta da lançadeira / agulha (Hook-to-Needle Clearance): 0,05mm a 0,10mm (espessura de uma folha de papel);\n• Altura da ponta da lançadeira: 0,5mm a 1,0mm acima da borda superior do olho da agulha no momento do cruzamento.",
    howItWorks: [
      "1. O motor principal desce a barra da agulha até o ponto mais baixo da sua trajetória.",
      "2. A agulha sobe cerca de 2 milímetros. Pela inércia e atrito com o tecido, a linha superior não sobe na mesma velocidade e 'estufa' para trás na cava da agulha, criando uma laçada aberta.",
      "3. A ponta giratória da lançadeira, girando a até 1.200 RPM, penetra com exatidão cirúrgica no centro dessa laçada.",
      "4. O cesto da lançadeira conduz a linha superior dando uma volta completa ao redor da bobina.",
      "5. A linha de cima abraça a linha que sai da caixa de bobina.",
      "6. O estica-fio da máquina sobe com velocidade, puxando a sobra de linha e fechando o nó no centro da espessura do tecido.",
      "7. Um ponto de bordado 301 está perfeito e concluído em menos de 50 milissegundos!"
    ],
    beginnerExplanation: "É o 'coração' da máquina de bordar trabalhando lá embaixo! Quando a agulha fura o pano e começa a subir, a linha faz uma 'barriguinha' (uma laçada). A ponta da lançadeira passa voando e pesca essa laçadinha, passando ela em volta do carretelzinho da bobina. É assim que a linha de cima e a linha branca de baixo se abraçam para segurar o bordado no tecido! Se esse momento estiver atrasado ou adiantado um pentelhonésimo de segundo, a máquina pula ponto ou quebra a linha!",
    applications: [
      "Formação impecável de todos os pontos de bordado em qualquer velocidade de operação",
      "Calibração de sincronismo mecânico após impacto de agulha no bastidor ou quebra violenta",
      "Prevenção de pontos pulados em tecidos elásticos, espumas volumosas e couros densos",
      "Garantia de amarração firme em acabamentos com nó de arremate"
    ],
    commonErrors: [
      "Lançadeira desregulada com folga excessiva (mais de 0,20mm), fazendo a ponta passar direto sem pescar a laçada (pula ponto)",
      "Lançadeira muito colada na agulha raspando o metal e quebrando a agulha ou cegando a ponta do gancho",
      "Usar agulha colocada ao contrário (com a cava voltada para a frente), impossibilitando a captura da laçada"
    ],
    troubleshootingTips: [
      "Para regular a lançadeira, utilize uma agulha nova 75/11 e gire o volante da máquina MANUALMENTE até a agulha subir 2mm do ponto mais baixo",
      "Passe uma folha de papel sulfite entre a ponta da lançadeira e a cava da agulha: o papel deve passar justo mas sem prender",
      "Se a ponta da lançadeira estiver áspera com rebarba de agulha batida, lixe suavemente com lixa d'água grão 1200 e dê polimento com pasta diamantada",
      "Verifique sempre se a agulha está inserida até o topo do bloco e com a cava virada exatamente para trás"
    ],
    dicaArtrelados: "Quando sua máquina começar a pular pontos direto sem motivo aparente mesmo com agulha nova e linha boa, 99% das vezes é o sincronismo de lançadeira que saiu um tiquinho do lugar após uma agulha bater no bastidor! Um técnico bom regula isso em 10 minutos!",
    voceSabia: "A lançadeira rotativa de movimento contínuo (Rotary Hook) foi inventada e patenteada pelo inventor americano Allen B. Wilson em 1851, permitindo que as máquinas atingissem velocidades centenas de vezes superiores às antigas lançadeiras oscilantes de vaivém!",
    practicalExercise: "Retire a chapa de agulha e a caixa de bobina da sua máquina: coloque uma agulha nova, passe uma linha colorida e gire o volante devagar com a mão, observando com uma lanterna a ponta da lançadeira capturando a laçada de linha atrás da agulha!",
    quickSummary: "Encontro milimétrico sincronizado em que a lançadeira pesca a laçada da agulha para formar o ponto fixo de bordado.",
    relatedTerms: ["Lançadeira Rotativa", "Caixa de Bobina", "Ponto Morto Inferior (PMI)", "Ponto Pulado / Pulo de Ponto"],
    tags: ["i-008", "intertravamento", "lancadeira", "sincronismo", "mecanica", "ponto 301", "manutencao", "artrelados"],
    bibliographicReferences: [
      "KOBAN HOOK SYNCHRONIZATION MANUAL. Rotary Shuttle Dynamics and Timing Calibration. Tokyo, 2023.",
      "SEWING MACHINE & EMBROIDERY MECHANICS. ISO 301 Stitch Formation Physics. Munich, 2022.",
      "ARTRELADOS. A Alma da Máquina de Bordar: Guia Prático de Sincronismo de Lançadeira e Formação de Ponto. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-009-insercao-de-parada-programada-stop-command",
    code: "I-009",
    term: "Inserção de Parada Programada & Código Stop (Stop Command Insertion & Color Change Halt Routine)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês stop command (comando de parada de controle numérico CNC). Instrução padrão G-code / M-code incorporada às linguagens de matrizes DST, PES, JEF e EXP.",
    summary: "Comando inserido na matriz que força a máquina a interromper a costura e levantar a agulha para permitir troca de linha, colocação de aplique ou zíper.",
    definition: "A Inserção de Parada Programada (Stop Command Code / Color Change Halt / Pause Insertion) é o comando digital inserido intencionalmente no fluxo de coordenadas da matriz de bordado que instrui o computador de bordo da máquina a desacelerar, cortar a linha (se ativado), elevar a barra de agulha para a posição superior e suspender a operação até que o operador aperte novamente o botão de partida (Start). É o recurso indispensável para viabilizar trocas manuais de cor em máquinas de uma agulha, posicionamento de tecidos em apliques, colocação de zíperes e forros em projetos In-The-Hoop (ITH) e inserção de fitas e passadores.",
    technicalDetails: "Especificação do código no arquivo de matriz:\n• Código binário Tajima (DST): Comando 'STOP' (função M00 / M01 de parada);\n• Código Brother (PES / PEC): Identificador de bloco de cor ou comando 'Applique Stop';\n• Comportamento da máquina: Freio eletromagnético acionado, agulha no Ponto Morto Superior (PMS), aviso sonoro e mensagem na tela Touchscreen.",
    howItWorks: [
      "1. No software de digitalização, o designer conclui a linha de marcação do aplique (Placement Stitch).",
      "2. Em vez de continuar costurando imediatamente a próxima camada, ele insere um comando 'Stop' (ou simplesmente muda a cor do bloco de linha na lista de cores).",
      "3. O arquivo compilado grava o marcador de interrupção.",
      "4. Na máquina de bordar, o bordado começa a costurar a marcação.",
      "5. Ao atingir o código Stop, a máquina para imediatamente, corta a linha e toca um bip suave.",
      "6. A bordadeira posiciona o tecido do aplique com calma sobre a marcação e passa o ferro ou cola temporária.",
      "7. A operadora aperta o botão verde de Start.",
      "8. A máquina retoma o bordado executando a costura de fixação (Tackdown) sem perder o enquadramento cartesiano nem um único milímetro."
    ],
    beginnerExplanation: "É como colocar uma 'placa de pare' no meio do caminho do bordado! Você avisa o programa: 'Máquina, quando você terminar de desenhar esse círculo, pare e me espere!' A máquina para quietinha, você coloca o retalho do aplique ou o zíper da bolsinha no lugar certo e depois só aperta o botão verde para ela continuar costurando!",
    applications: [
      "Troca de cones de linha colorida em máquinas domésticas de uma agulha",
      "Execução de apliques com corte de tecido na borda",
      "Montagem de peças completas no bastidor (In-The-Hoop)",
      "Aplicação de espuma EVA para bordados em alto relevo 3D Puff"
    ],
    commonErrors: [
      "Esquecer de colocar a parada entre a linha de marcação e a costura final do aplique (a máquina costura tudo de uma vez sem dar tempo de colocar o tecido)",
      "Mover o bastidor com a mão enquanto a máquina está parada (desalinha as coordenadas X/Y)",
      "Inserir paradas em excesso sem necessidade, aumentando o tempo total de produção em fábricas"
    ],
    troubleshootingTips: [
      "Em softwares como Wilcom e Embird, trocar a cor do objeto na lista é a forma mais rápida de criar uma parada automática (Stop)",
      "Para projetos ITH, verifique a lista de paradas na visualização de simulação do software antes de enviar o arquivo para a máquina",
      "Em máquinas industriais multicabeçotes, configure se a parada deve ou não cortar a linha automaticamente para ganhar segundos preciosos",
      "Nunca empurre o pantógrafo nem force o braço do bastidor enquanto a máquina estiver em pausa"
    ],
    dicaArtrelados: "Dominar os comandos de parada (Stop) é o que transforma você de uma simples 'apertadora de botões' em uma verdadeira mestre em costura criativa no bastidor! Toda peça luxuosa e criativa depende de paradas inteligentes!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas do século XIX baseadas nos cartões perfurados de Jacquard, o operador colocava fisicamente um pino metálico mais longo no cartão de papelão para travar a alavanca do tear e avisá-lo de que era hora de trocar a lançadeira manual de seda!",
    practicalExercise: "No seu software, crie um coração: faça o contorno com cor azul e o preenchimento com cor vermelha. Ao carregar na máquina, observe como a máquina para após o azul, esperando você autorizar o início do vermelho!",
    quickSummary: "Comando digital na matriz que pausa a máquina para permitir troca de linha, colocação de aplique ou zíper.",
    relatedTerms: ["In-the-Hoop (ITH)", "Troca de Cor Automática", "Ponto de Origem / Ponto Zero", "Placement Stitch"],
    tags: ["i-009", "parada programada", "stop command", "pausa", "aplique", "ith", "troca de linha", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINE PROGRAMMING STANDARDS. Stop Command & Function Codes. Nagoya, 2023.",
      "DIGITAL EMBROIDERY ARCHITECTURE. CNC G-Code & Halt Sequence Design. Chicago, 2022.",
      "ARTRELADOS. O Poder das Paradas: Como Programar Matrizes com Pausas Perfeitas para Apliques e Projetos ITH. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-010-iluminacao-led-integrada-na-cabeca-de-bordado",
    code: "I-010",
    term: "Iluminação LED Integrada & Temperatura de Cor no Campo de Costura (LED Workspace Illumination & Color Rendering Index)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Equipamentos & Ferramentas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês Light Emitting Diode (Diodo Emissor de Luz) e Color Rendering Index (Índice de Reprodução de Cor). Evolução ergonômica e óptica das estações industriais de bordado.",
    summary: "Sistema de luz LED de alta fidelidade cromática instalado ao redor da agulha que elimina sombras e permite enxergar a passagem de linha e a tensão com perfeição.",
    definition: "A Iluminação LED Integrada no Cabeçote de Bordado (High-CRI LED Needle Area Illumination System / Shadowless Workstation Lighting) é o conjunto de diodos emissores de luz de estado sólido estrategicamente posicionado sob o braço superior da máquina e ao redor da barra de agulha. Projetado com temperatura de cor neutra calibrada (entre 5.000K e 6.500K - Luz do Dia) e elevado Índice de Reprodução de Cor (CRI > 90), o sistema ilumina a zona crítica de formação do ponto sem produzir calor excessivo (que resseca linhas e derrete lubrificantes), eliminando sombras duras projetadas pelo calcador e permitindo à bordadeira inspecionar a laçada, passar a linha pelo olho minúsculo da agulha e detectar nós instantaneamente.",
    technicalDetails: "Parâmetros fotométricos da iluminação de ateliê:\n• Temperatura de cor ideal: 5.500K a 6.000K (Pure Daylight / Branco Puro sem desvio azulado ou amarelado);\n• Índice de Reprodução de Cor (CRI / Ra): >90 (Permite distinguir nuances sutis de linhas de tons parecidos);\n• Fluxo luminoso na chapa de agulha: 800 a 1.200 Lux (Luz abundante sem ofuscamento);\n• Emissão térmica: < 2W térmicos (Protege o acabamento sintético das linhas de poliéster contra degradação térmica precoce).",
    howItWorks: [
      "1. Ao ligar a máquina de bordar, a barra de LEDs ao redor da agulha acende instantaneamente.",
      "2. A luz focalizada banha a chapa de agulha e o tecido em 360°, neutralizando as sombras criadas pelo calcador metálico.",
      "3. A operadora consegue enxergar perfeitamente o pequeno orifício da agulha 75/11 mesmo bordando fios escuros sobre tecidos pretos.",
      "4. Durante a costura em alta velocidade, a iluminação contínua (livre de cintilação estroboscópica / Flicker-Free) permite inspecionar se a linha branca da bobina está subindo ou se há formação de laçadas frouxas.",
      "5. A visão da bordadeira não sofre fadiga visual mesmo após 8 horas de operação contínua no ateliê."
    ],
    beginnerExplanation: "É a luzinha super moderna de LED branquinha que fica bem em cima da agulha da sua máquina! Antigamente as máquinas usavam lâmpadas amarelas que esquentavam, queimavam a mão e deixavam tudo escuro. A luz de LED moderna não esquenta nada, ilumina tudo clarinho como se fosse a luz do sol e ajuda você a passar a linha no buraquinho da agulha sem precisar forçar a vista nem usar óculos de grau forte!",
    applications: [
      "Passagem fácil e rápida de linhas finas em agulhas de pequeno calibre (65/9 e 75/11)",
      "Inspeção visual instantânea de equilíbrio de tensão e qualidade de pontos durante a produção",
      "Diferenciação precisa de tons parecidos de linhas sob luz de alta fidelidade de cor",
      "Redução da fadiga ocular e aumento da segurança ergonômica em jornadas longas de trabalho"
    ],
    commonErrors: [
      "Usar luminárias externas com lâmpadas amareladas (2.700K) que distorcem as cores das linhas na hora de escolher a paleta",
      "Deixar poeira e fiapos de entretela acumularem sobre as lentes dos LEDs, reduzindo a luminosidade",
      "Utilizar fitas de LED de baixa qualidade com efeito estroboscópico que cansa a vista e cria ilusão de ótica nas partes móveis"
    ],
    troubleshootingTips: [
      "Limpe a lente protetora dos LEDs a cada semana com um pincel macio e pano de microfibra seco",
      "Se sua máquina antiga possui lâmpada incandescente comum, substitua-a imediatamente por uma lâmpada LED compatível tipo rosca ou baioneta",
      "Para o ateliê como um todo, instale lâmpadas de teto com temperatura de cor de 5.000K a 6.000K para que a cor vista na mesa seja idêntica à cor sob o sol",
      "Evite apontar luminárias de foco direto contra os sensores ópticos de linha da máquina para não gerar falsos alarmes"
    ],
    dicaArtrelados: "Uma boa iluminação é a ferramenta mais barata que mais aumenta a sua produtividade! Com a área da agulha bem iluminada, você enxerga qualquer errinho de ponto antes que ele vire um estrago grande na peça do cliente!",
    voceSabia: "O Índice de Reprodução de Cor (CRI) foi desenvolvido pela Comissão Internacional de Iluminação (CIE) em 1965 para medir com que fidelidade uma fonte de luz artificial revela as cores reais dos objetos em comparação com a luz natural do meio-dia!",
    practicalExercise: "Pegue dois cones de linha de tons muito próximos (ex: azul marinho e preto): olhe para eles sob uma lâmpada amarela comum e depois sob a luz LED da sua máquina de bordar e veja a diferença nítida na facilidade de enxergar os tons!",
    quickSummary: "Sistema de iluminação LED de alta definição e luz do dia ao redor da agulha que elimina sombras e previne cansaço visual.",
    relatedTerms: ["Passador de Linha Automático", "Ergonomia no Ateliê", "Controle de Qualidade no Bordado", "Paleta de Cores"],
    tags: ["i-010", "iluminacao led", "luz da agulha", "ergonomia", "visibilidade", "temperatura de cor", "manutencao", "artrelados"],
    bibliographicReferences: [
      "ILLUMINATION ENGINEERING SOCIETY (IES). Industrial Textile Workstation Lighting Standards. New York, 2023.",
      "ERGONOMICS IN APPAREL MANUFACTURING. Optical Health and LED Integration. Geneva, 2022.",
      "ARTRELADOS. Iluminação Profissional para Ateliês: Como a Luz Certa Transforma a Precisão dos Seus Bordados. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-011-importacao-vetorial-de-imagem-vetorizacao",
    code: "I-011",
    term: "Importação Vetorial de Imagem & Conversão EPS/SVG (Vector Artwork Importing & Direct Node Digitizing)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim vector (aquele que transporta) e importare (trazer para dentro). Protocolo de intercâmbio gráfico computacional estabelecido nos softwares de pós-produção gráfica.",
    summary: "Processo de trazer desenhos em curvas matemáticas perfeitas (CorelDRAW, Illustrator, EPS, SVG) para o software de bordado para gerar pontos limpos e sem serrilhados.",
    definition: "A Importação Vetorial de Imagem (Vector Graphic Importing / SVG & EPS Curve Conversion / Direct Vector-to-Stitch Processing) é o protocolo digital no qual o programador de matrizes importa arquivos de arte gráfica baseados em vetores matemáticos e curvas Bézier (formatos .AI, .CDR, .EPS, .SVG ou .PDF vetorial) diretamente para o ambiente de digitalização. Diferente da importação de imagens em mapa de bits (Bitmaps / JPEG / PNG), que são compostas por pixels quadrados e bordas borradas que exigem redesenho manual ou geram conversões automáticas imperfeitas, o arquivo vetorial fornece nós de precisão infinita, linhas limpas e curvas perfeitas que podem ser convertidas instantaneamente em colunas de ponto cheio, áreas de tatami e contornos com fidelidade milimétrica.",
    technicalDetails: "Formatos e compatibilidade de nós vetoriais:\n• Formatos vetoriais primários: Adobe Illustrator (.AI / .EPS), CorelDRAW (.CDR), Scalable Vector Graphics (.SVG);\n• Conversão de nós: Nós cúbicos e suaves Bézier convertidos em pontos de inflexão de contorno de bordado;\n• Redução de nós: Algoritmo de simplificação que elimina nós sobrepostos mantendo a tolerância abaixo de 0,05mm;\n• Separação de cores por camadas (Layers): Cada cor vetorial gera automaticamente um bloco de costura distinto.",
    howItWorks: [
      "1. O cliente envia o logotipo da empresa em formato vetorizado limpo (.EPS ou .SVG) feito por um designer gráfico.",
      "2. O programador abre o software de bordado (como Wilcom com integração CorelDRAW ou Hatch Embroidery).",
      "3. Importa o arquivo vetorial: as formas aparecem na tela como curvas perfeitas, sem nenhum pixel estourado.",
      "4. O programador seleciona as formas dos textos e clica em 'Converter em Ponto Cheio'.",
      "5. Seleciona as áreas grandes de fundo e clica em 'Converter em Ponto Tatami'.",
      "6. Ajusta a compensação de repuxo, o ângulo dos pontos e os underlays de sustentação.",
      "7. A matriz é gerada em fração de minutos com contornos perfeitos, alinhamento absoluto e zero distorção.",
      "8. O bordado no tecido reflete com exatidão a identidade visual original da marca do cliente."
    ],
    beginnerExplanation: "É como pegar um desenho feito com régua e compasso de precisão no computador em vez de uma foto borrada do WhatsApp! Quando você usa um desenho em vetor (feito no Corel ou Illustrator), o programa de bordado entende as curvas certinhas na hora e transforma em pontos de bordado perfeitos e sem dentes de serra, economizando horas de trabalho de ter que desenhar tudo do zero com o mouse!",
    applications: [
      "Digitalização corporativa rápida e precisa de logotipos empresariais e brasões institucionais",
      "Importação de fontes e tipografias personalizadas com curvas ultra limpas",
      "Criação de matrizes de personagens e ilustrações infantis a partir de arquivos SVG",
      "Garantia de fidelidade visual 100% idêntica ao manual de identidade visual da marca"
    ],
    commonErrors: [
      "Importar uma imagem JPEG salva dentro de um arquivo PDF fingindo ser vetor (o programa não reconhece as curvas)",
      "Vetor com nós excessivos ou linhas sobrepostas gerando agulhadas duplicadas no mesmo lugar",
      "Confiar cegamente na conversão automática de 1 clique sem ajustar a compensação de repuxo e a ordem de costura"
    ],
    troubleshootingTips: [
      "Sempre peça ao cliente: 'Por favor, envie o logotipo em vetor (em PDF original, AI ou EPS) para garantir a máxima nitidez do seu bordado!'",
      "Antes de converter o vetor em pontos, execute a ferramenta de simplificar curvas (Weld / Remove Overlaps) para eliminar linhas ocultas por baixo de outras formas",
      "Converta textos pequenos sempre com linhas de inclinação de ponto manuais para garantir que as hastes fiquem simétricas",
      "Defina a densidade de pontos e underlays de acordo com o tecido final em que o vetor será bordado"
    ],
    dicaArtrelados: "Ter intimidade com arquivos vetoriais é o grande divisor de águas que dobra a sua velocidade de produção de matrizes! Um logotipo que levaria 1 hora para desenhar ponto por ponto em cima de uma foto borrada fica pronto em 10 minutos a partir de um bom vetor!",
    voceSabia: "As curvas matemáticas utilizadas nos vetores gráficos modernos chamam-se 'Curvas de Bézier' em homenagem ao engenheiro francês Pierre Bézier, que as inventou em 1962 na fábrica da Renault para desenhar as carrocerias aerodinâmicas dos carros franceses!",
    practicalExercise: "Baixe um arquivo gratuito em formato .SVG (por exemplo, a silhueta de uma borboleta): abra no seu programa de matriz e use a ferramenta de conversão em pontos, observando como o desenho fica nítido e perfeito em segundos!",
    quickSummary: "Importação de desenhos em curvas vetoriais que garante linhas nítidas e conversão rápida em pontos perfeitos.",
    relatedTerms: ["Vetorização Manual & Punching", "Curvas de Bézier", "Compensação de Repuxo", "Resolução de Imagem"],
    tags: ["i-011", "importacao vetorial", "vetor", "svg", "eps", "coreldraw", "illustrator", "software", "artrelados"],
    bibliographicReferences: [
      "ADOBE SYSTEMS VECTOR GRAPHICS INTERCHANGE STANDARDS. Bézier Geometry in Manufacturing. San Jose, 2023.",
      "CORELDRAW & WILCOM INTEGRATION GUIDE. Direct Vector-to-Stitch Automation. Sydney, 2022.",
      "ARTRELADOS. O Segredo dos Vetores no Bordado: Como Usar Arquivos SVG e EPS para Digitalizar Matrizes Profissionais em Minutos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-012-isolacao-eletrica-e-aterramento-da-maquina",
    code: "I-012",
    term: "Isolação Elétrica, Aterramento & Descarga Eletrostática (Electrical Grounding, Surge Protection & ESD Safety)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Equipamentos & Ferramentas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim terra (solo/chão condutivo) e do grego elektron (âmbar/eletricidade). Protocolo de segurança elétrica industrial da norma NBR 5410 / IEC 60364.",
    summary: "Conexão de proteção da carcaça e circuitos eletrônicos da máquina a uma haste de aterramento para evitar choques, queima de placas e travamento do painel.",
    definition: "A Isolação Elétrica, Aterramento de Proteção e Controle de Descarga Eletrostática (ESD Grounding & Electrical Surge Protection) é a infraestrutura de engenharia elétrica que garante o desvio seguro de correntes de fuga, picos de sobretensão da rede e cargas estáticas acumuladas pelo atrito contínuo de milhares de metros de linhas sintéticas e tecidos no bastidor para o solo. Em máquinas de bordar computadorizadas equipadas com placas-mãe de alta sensibilidade, microprocessadores e servomotores digitais, a ausência de um aterramento adequado conforme as normas NBR 5410 / IEEE 142 provoca travamentos aleatórios do sistema, perda de posição cartesiana da matriz no meio do bordado, queima de placas controladoras caras e choques elétricos no operador ao tocar na carcaça metálica.",
    technicalDetails: "Especificações técnicas da instalação elétrica de proteção:\n• Resistência ôhmica máxima de aterramento: < 5 Ohms (Haste de cobre cobreado de 2,40m enterrada no solo);\n• Condutor de proteção (Fio Terra): Cabo de cobre verde/amarelo de 2,5mm² a 4,0mm² conectado ao terceiro pino da tomada;\n• Dispositivo Protetor de Surtos (DPS): Classe II instalado no quadro de distribuição para absorver picos de raios;\n• Estabilizador / Nobreak senoidal puro: Protege a fonte chaveada contra oscilações de voltagem da rede.",
    howItWorks: [
      "1. A máquina de bordar opera a 850 PPM: o atrito da linha de poliéster passando em alta velocidade pelos guias plásticos e pelo tecido gera milhares de volts de eletricidade estática.",
      "2. Graças ao fio terra conectado à carcaça e aos chassis internos, toda essa carga estática é drenada continuamente para o solo de forma silenciosa e inofensiva.",
      "3. Na rua, ocorre uma oscilação na rede elétrica ou um raio cai a 2 km de distância, induzindo um surto de voltagem na fiação.",
      "4. O filtro de linha industrial e o sistema de aterramento desviam o surto para a terra antes que ele atinja os microchips da placa-mãe da máquina.",
      "5. A máquina continua bordando sem travar o painel, sem reiniciar e sem perder a coordenada onde estava costurando.",
      "6. A operadora trabalha com total segurança, livre do risco de levar pequenos choques desagradáveis ao apoiar as mãos no bastidor metálico."
    ],
    beginnerExplanation: "É o famoso 'fio terra' que protege a sua máquina de bordar e a sua vida! As máquinas de bordar têm computadores super delicados por dentro, parecidos com um celular ou notebook caro. Se a tomada da parede não tiver o terceiro pino com aterramento de verdade, qualquer raio que cair longe ou a própria eletricidade estática gerada pela linha correndo pode queimar a placa da máquina (que custa uma fortuna) ou dar choque no seu braço!",
    applications: [
      "Proteção definitiva contra queima de placas eletrônicas e queima de servomotores",
      "Eliminação de travamentos misteriosos de tela e congelamento do sistema operacional da máquina",
      "Prevenção de desvio ou perda de coordenadas X/Y no meio de bordados longos",
      "Segurança humana contra choques elétricos para as bordadeiras e mecânicos do ateliê"
    ],
    commonErrors: [
      "Quebrar o terceiro pino da tomada da máquina para encaixar em tomada antiga de 2 pinos",
      "Ligar a máquina em extensões comuns de computador cheias de adaptadores 'benjamins / tês' frouxos",
      "Usar 'estabilizadores' de computador baratos de 300VA que não suportam o pico de corrente do motor da máquina de bordar"
    ],
    troubleshootingTips: [
      "Contrate um eletricista qualificado para testar o aterramento da sua tomada com um terrômetro ou multímetro (a voltagem entre Neutro e Terra deve ser inferior a 2 Volts)",
      "Utilize sempre um Nobreak de onda Senoidal Pura com potência de pelo menos 1.500VA para proteger sua máquina contra quedas de energia repentinas",
      "Em dias de tempestades fortes com raios frequentes, se o ateliê não tiver para-raios com DPS Classe II, faça uma pausa e desconecte as máquinas da tomada",
      "Borrife spray antiestático no chão do ateliê se o piso for de vinílico ou carpete para evitar acúmulo de eletricidade estática no corpo da operadora"
    ],
    dicaArtrelados: "Investir R$ 200 numa boa tomada com aterramento profissional feito por eletricista é o seguro mais barato que você pode fazer para a sua máquina de R$ 10.000 a R$ 50.000! Não economize na segurança da sua ferramenta de trabalho!",
    voceSabia: "O atrito contínuo de linhas sintéticas de poliéster correndo em velocidade industrial pode gerar até 15.000 Volts de eletricidade estática no ar — voltagem suficiente para queimar um microprocessador moderno que opera com apenas 3,3 Volts!",
    practicalExercise: "Olhe para a tomada onde sua máquina está ligada: verifique se ela possui 3 pinos padrão brasileiro e certifique-se de que o pino do meio está realmente conectado à fiação de terra do quadro elétrico!",
    quickSummary: "Sistema de proteção elétrica e aterramento que evita queima de placas eletrônicas, choques e travamentos da máquina.",
    relatedTerms: ["Nobreak Senoidal & Proteção", "Ergonomia no Ateliê", "Manutenção Preventiva Semanal", "Painel Touchscreen"],
    tags: ["i-012", "aterramento", "eletricidade estatica", "protecao eletrica", "placa mae", "nobreak", "seguranca", "artrelados"],
    bibliographicReferences: [
      "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 5410: Instalações Elétricas de Baixa Tensão e Aterramento. Rio de Janeiro: ABNT, 2023.",
      "ELECTRONIC APPAREL MACHINERY PROTECTION. Grounding and Static Dissipation Protocols. Geneva, 2022.",
      "ARTRELADOS. Energia Segura para Bordadeiras: Como Proteger Sua Máquina Contra Raios, Surtos e Eletricidade Estática. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

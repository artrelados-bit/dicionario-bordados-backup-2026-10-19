import { Verbete } from "../types";

export const VERBETES_LETTER_P_PART11: Verbete[] = [
  {
    "id": "p-076-ponto-tatami-preenchimento-e-angulos-de-inclinacao",
    "code": "P-076",
    "term": "Ponto Tatami (Preenchimento / Fill Stitch) e Ângulos de Inclinação",
    "letter": "P",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do japonês tatami (esteira tradicional de palha entrelaçada em padrão regular) e do inglês fill stitch.",
    "summary": "Ponto de preenchimento plano composto por linhas paralelas de pontos corridos com deslocamento sistemático entre carreiras, ideal para cobrir grandes áreas sem afrouxar fios e minimizando repuxos.",
    "definition": "Ponto Tatami (Fill Stitch, Ceeding / Weave Pattern & Stitch Angle Directionality) é a estrutura fundamental de preenchimento para grandes áreas vetoriais no bordado computadorizado (geralmente áreas maiores que 7-8 mm de largura, onde o ponto cheio / satim se tornaria excessivamente longo e frouxo). O tatami é formado por sucessivas carreiras de pontos corridos paralelas em que cada penetração de agulha é deslocada em fração constante em relação à carreira anterior (geralmente em intervalos fracionários de 1/3, 1/4 ou 1/2), criando uma textura tecida uniforme similar a uma esteira. O ângulo de inclinação da costura (Stitch Angle) define a direção em que o tecido será tracionado pela linha e como a luz refletirá no fio de poliéster.",
    "technicalDetails": "Densidade padrão recomendada: 0,40 mm a 0,45 mm de espaçamento entre linhas. Comprimento do ponto individual: 3,5 mm a 4,5 mm. Deslocamento de padrão (Stitch Offset): Padrão clássico 0,25 ou 0,33. Variação angular de segurança: Variar o ângulo em 30° a 45° em relação ao fio reto do tecido para minimizar o repuxo unidirecional. Underlay obrigatório: Tatami leve a 90° ou Tatami em grade cruzada (Grid Underlay).",
    "construction": [
      "Objeto vetorial fechado com contorno definido no software de digitalização",
      "Ponto de entrada (Entry Point) e ponto de saída (Exit Point) programados estrategicamente",
      "Vetor de ângulo de ponto (Stitch Angle Line) orientando a direção das carreiras",
      "Camada de suporte (Underlay) prévia com densidade aberta (1,5 mm a 2,0 mm)",
      "Padrão de repetição de penetração (Tatami Pattern / Split Offset)"
    ],
    "howItWorks": [
      "1. No software de matrizes, cria-se um objeto de grande área (como o fundo de um escudo ou corpo de um desenho).",
      "2. Aplica-se o tipo de ponto 'Tatami / Preenchimento' com densidade de 0,42 mm e comprimento de 4,0 mm.",
      "3. Define-se a linha de ângulo do ponto (por exemplo, a 45 graus em relação ao tecido).",
      "4. Adiciona-se uma camada de underlay com tatami leve em sentido oposto (135 graus).",
      "5. Na máquina de bordar, a agulha costura primeiro a base de underlay para fixar o tecido na entretela.",
      "6. Em seguida, a máquina executa as carreiras densas de tatami no ângulo de 45°.",
      "7. O resultado é um preenchimento 100% liso, plano, estável e com brilho uniforme, sem deformar o tecido nem deixar fios soltos."
    ],
    "mainTypes": [
      "Tatami Tradicional Uniforme (Padrão clássico 1/4 para brasões, fundos e emblemas corporativos)",
      "Tatami com Efeito de Textura / Estampado (Com variações programadas que imitam escamas, tijolos ou couro)",
      "Tatami Curvo / Ângulo Variável (As linhas de ponto acompanham a curvatura anatômica do desenho)"
    ],
    "characteristics": [
      "Estabilidade estrutural perfeita para cobrir qualquer tamanho de desenho sem soltar fios",
      "Toque macio e maleável na peça, sem criar placas duras e pesadas de linha",
      "Excelente reflexão de luz dependendo do ângulo de inclinação escolhido",
      "Alta durabilidade em lavagens frequentes e atrito mecânico constante"
    ],
    "limitations": [
      "Não deve ser usado em colunas muito finas (< 2 mm), onde o satim é visualmente superior",
      "Ângulos paralelos à direção da trama do tecido podem causar vincos profundos se não houver underlay",
      "Densidades muito altas (< 0,35 mm) deixam a peça dura e aumentam o risco de quebra de agulha"
    ],
    "numberingSystem": [
      "Densidade Típica: 0,40 mm - 0,45 mm",
      "Comprimento do Ponto: 3,5 mm - 4,5 mm",
      "Ângulo Ideal de Trabalho: 30° a 60° (evitar 0° ou 90° puros)"
    ],
    "advantages": [
      "✔ Preenche áreas grandes com rapidez, estabilidade e sem deixar o tecido repuxado",
      "✔ Cria um acabamento profissional e liso que valoriza muito uniformes e logotipos",
      "✔ Não corre o risco de prender na unha ou desmanchar como os pontos longos soltos"
    ],
    "commonErrors": [
      "❌ Tentar preencher um círculo de 5 cm com ponto cheio (satim), deixando fios gigantescos frouxos",
      "❌ Programar o ângulo do tatami exatamente no mesmo sentido da costura do tecido, abrindo buracos",
      "❌ Borda sem nenhuma camada de underlay embaixo de um tatami grande"
    ],
    "voceSabia": "O nome 'Tatami' foi dado pelos engenheiros japoneses da Tajima e Barudan nos anos 1970 porque a disposição geométrica das penetrações de agulha imitava exatamente o entrelaçamento das esteiras de palha de arroz das casas tradicionais do Japão!",
    "curiosidadeTecnica": "Um preenchimento tatami com densidade de 0,40 mm possui aproximadamente 25 linhas de costura por centímetro linear; em um quadrado de 10x10 cm, isso representa mais de 60 metros lineares de fio superior aplicados!",
    "dicaArtrelados": "Quando você for preencher áreas grandes no seu programa de bordado, sempre coloque o ângulo do ponto tatami inclinado (por exemplo, a 45° ou 60°). Evite colocar as linhas 100% retas horizontais ou verticais, porque o ângulo inclinado distribui a força da linha e impede que o tecido forme pregas e repuxos!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Ponto Tatami (Preenchimento)",
        "Ponto Cheio (Satim)",
        "Ponto Costura Corrida"
      ],
      "rows": [
        [
          "Área Recomendada",
          "Grandes áreas (> 7 mm)",
          "Colunas e letras (1 a 7 mm)",
          "Contornos e detalhes finos"
        ],
        [
          "Fixação no Tecido",
          "Altíssima (micro-travamentos)",
          "Média (fios suspensos)",
          "Baixa (linha simples)"
        ],
        [
          "Risco de Fio Frouxo",
          "Zero (pontos curtos travados)",
          "Alto em áreas largas",
          "Zero"
        ],
        [
          "Aspecto Visual",
          "Plano com textura de esteira",
          "Brilhante e em alto relevo",
          "Fino e linear"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "75/11 SES ponta bola",
      "stabilizer": "Entretela de Recorte (para malhas) ou Rasgável (para tecidos planos)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm a 0.44 mm"
    },
    "applications": [
      "Fundos de brasões, emblemas militares e patches termocolantes",
      "Bordados de grandes figuras em jaquetas, casacos e moletons",
      "Logotipos corporativos com letras grossas ou escudos maciços",
      "Preenchimento de desenhos em almofadas, toalhas e enxovais"
    ],
    "troubleshootingTips": [
      "Se o tecido repuxar para os lados, altere a inclinação do ângulo do tatami em 45 graus",
      "Se o fundo do tecido aparecer entre os pontos, reduza a densidade de 0,45 mm para 0,40 mm e ative o underlay de grade",
      "Se a peça ficar dura como uma placa de papelão, aumente o espaçamento de densidade para 0,44 mm"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch) e Largura Segura de Coluna",
      "Underlay / Pontos de Suporte",
      "Compensação de Repuxo",
      "Densidade de Pontos"
    ],
    "tags": [
      "p-076",
      "ponto tatami",
      "fill stitch",
      "preenchimento",
      "angulos de ponto",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Tatami Digitizing & Stitch Angle Physics. Sydney, 2021.",
      "PARRISH, Gail. Fill Stitch Dynamics: Tatami Pattern Offsets, Density Calibration and Vector Angle Management. Cincinnati, 2022."
    ],
    "practicalExercise": "No seu programa de bordado, desenhe um retângulo de 6x4 cm. Aplique ponto Tatami com ângulo a 0° (reto) e veja a simulação 3D. Depois mude o ângulo para 45°: observe como a textura ganha vida e reflete a luz de forma muito mais elegante e uniforme!",
    "quickSummary": "O ponto de preenchimento feito de várias costuras juntinhas para cobrir desenhos grandes sem deixar fios soltos.",
    "beginnerExplanation": "Quando você precisa pintar uma área grande no bordado (como o fundo de um escudo ou o corpo de um bichinho), você não pode usar o ponto cheio porque os fios ficariam muito compridos e soltos. O ponto Tatami faz milhares de pontinhos curtinhos e organizados como uma esteira, cobrindo tudo com perfeição e sem repuxar o tecido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-077-ponto-cheio-satin-stitch-e-largura-segura-de-coluna",
    "code": "P-077",
    "term": "Ponto Cheio (Satin Stitch) e Largura Segura de Coluna",
    "letter": "P",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês satin (tecido acetinado brilhante de seda de Zaiton / Quanzhou) e do inglês stitch.",
    "summary": "Ponto em ziguezague denso e contínuo onde os fios atravessam toda a largura da coluna de borda a borda, conferindo brilho e relevo máximo em letras, contornos e detalhes de 1 a 7 mm.",
    "definition": "Ponto Cheio (Satin Stitch, Column Stitch & Auto-Split Safety Limits) é o ponto mais nobre e reluzente do bordado computadorizado, formado por laçadas paralelas e contínuas de fio superior que vão de uma extremidade à outra da coluna sem penetrações intermediárias. Esse trajeto livre da linha expõe toda a superfície cilíndrica do filamento de poliéster ou viscose à luz, gerando o brilho acetinado característico. A largura segura da coluna deve ser rigidamente controlada: colunas menores que 0,8 mm cortam o tecido e quebram a agulha pelo excesso de perfurações concentradas, enquanto colunas maiores que 7,0 mm a 8,0 mm geram laçadas frouxas que enroscam em botões e desmancham na primeira lavagem, exigindo a divisão automática de pontos (*Auto-Split*).",
    "technicalDetails": "Faixa de largura segura ideal: 1,2 mm a 6,5 mm. Limite mínimo crítico: 0,8 mm (abaixo disso, converter para Ponto Corrido). Limite máximo para ponto contínuo: 7,5 mm a 8,0 mm (acima disso, ativar Auto-Split com divisão a cada 4 mm). Densidade padrão recomendada: 0,38 mm a 0,42 mm. Underlay recomendado: Linha de centro (Center Walk) para colunas < 2,5 mm; Borda dupla (Edge Walk) + Ziguezague para colunas de 2,5 a 6 mm.",
    "construction": [
      "Coluna vetorial definida por pares de nós de controle e linhas guia paralelas",
      "Ângulos de ponto perpendiculares ao fluxo e curvatura da coluna",
      "Underlay prévio de sustentação para elevar o relevo tridimensional",
      "Compensação de repuxo adicionada nas laterais (0,20 mm a 0,40 mm)",
      "Recurso Auto-Split programado no software para colunas que excederem 8 mm"
    ],
    "howItWorks": [
      "1. No software de matrizes, digitaliza-se uma letra ou contorno com a ferramenta de Coluna / Ponto Cheio.",
      "2. Calibra-se a largura da coluna para 3,5 mm com densidade de 0,40 mm.",
      "3. O software gera os pontos de underlay (borda dupla) que serão costurados primeiro no centro da coluna.",
      "4. A máquina executa o ziguezague denso por cima do underlay, lançando o fio de um lado ao outro da coluna.",
      "5. O underlay interno 'estufa' o ponto cheio para cima, criando um relevo elegante e impedindo que os pontos afundem no tecido.",
      "6. Caso a coluna atinja 9 mm em algum ponto largo, o recurso Auto-Split insere automaticamente uma perfuração no meio.",
      "7. A letra é bordada com nitidez cirúrgica, bordas lisas, brilho espelhado e resistência total a atritos."
    ],
    "mainTypes": [
      "Ponto Cheio Tradicional (Satim liso com fios de lado a lado para letras e monogramas)",
      "Ponto Cheio com Divisão Automática / Auto-Split (Para colunas largas de 8 a 12 mm com micro-divisões)",
      "Ponto Cheio em Alto Relevo sobre EVA 3D (Com alta densidade cobrindo espuma expandida)"
    ],
    "characteristics": [
      "Máximo brilho e impacto visual devido à reflexão contínua da luz nos fios longos",
      "Bordas perfeitamente nítidas e definidas, ideais para tipografia e letras de leitura fácil",
      "Relevo tátil agradável que destaca o bordado da superfície do tecido",
      "Versatilidade total em contornos de personagens, apliques e logotipos"
    ],
    "limitations": [
      "Nunca ultrapassar 8 mm de largura sem ativar o Auto-Split (o fio fica frouxo e perigoso)",
      "Não aplicar em larguras ultrafinas (< 0,8 mm), que furam o tecido como uma serra",
      "Exige controle rigoroso da tensão da linha para não puxar o tecido para o centro"
    ],
    "numberingSystem": [
      "Largura Mínima Segura: 1,0 mm",
      "Largura Máxima sem Divisão: 7,5 mm",
      "Densidade Típica: 0,38 mm - 0,42 mm"
    ],
    "advantages": [
      "✔ É o ponto mais bonito e nobre do bordado, dando aquele brilho acetinado maravilhoso às letras",
      "✔ Deixa os nomes e monogramas com relevo elegante e bordas super limpas",
      "✔ Valoriza qualquer toalha, jaleco ou enxoval com acabamento de alta costura"
    ],
    "commonErrors": [
      "❌ Borda um número ou letra com 12 mm de largura em satim puro, deixando laçadas soltas gigantescas",
      "❌ Borda letras minúsculas com perninhas de 0,5 mm em ponto cheio, esburacando o tecido",
      "❌ Não colocar pontos de suporte (underlay) embaixo de letras grossas em satim"
    ],
    "voceSabia": "O termo 'Satim' tem mais de mil anos de história: ele deriva do porto de Zaiton (atual Quanzhou, na China), de onde os comerciantes árabes e europeus importavam as sedas mais brilhantes do mundo pela Rota da Seda!",
    "curiosidadeTecnica": "A força de repuxo mecânico do ponto cheio é a mais alta entre todos os pontos de bordado; uma coluna de satim de 4 mm pode encolher o tecido em até 0,35 mm na direção transversal se a compensação de repuxo não for ativada no software.",
    "dicaArtrelados": "Para fazer letras e nomes perfeitos: mantenha a largura das pernas das letras entre 1,5 mm e 5,0 mm. Se você for bordar letras muito gordinhas com mais de 7 mm de largura, ative a opção 'Divisão Automática' (Auto-Split) no seu programa de bordado. Isso coloca um pontinho no meio e evita que a linha fique frouxa parecendo um varal solto!",
    "comparisonTable": {
      "headers": [
        "Largura da Coluna",
        "Comportamento Mecânico",
        "Risco Operacional",
        "Ação Recomendada"
      ],
      "rows": [
        [
          "0,5 mm a 0,8 mm",
          "Perfurações ultra concentradas",
          "Rasgo do tecido / quebra de agulha",
          "Converter para Ponto Corrido"
        ],
        [
          "1,2 mm a 6,5 mm",
          "Equilíbrio perfeito de brilho e tensão",
          "Zero (faixa ideal de satim)",
          "Ponto Cheio com Underlay"
        ],
        [
          "> 8,0 mm",
          "Fios frouxos e laçadas soltas",
          "Enrosca em unhas e desmancha",
          "Ativar Auto-Split ou Tatami"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES ponta bola",
      "stabilizer": "Adequado ao tecido (Recorte para malhas / Rasgável para tecidos firmes)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.38 mm a 0.42 mm"
    },
    "applications": [
      "Bordados de nomes, monogramas e textos personalizados em jalecos e enxovais",
      "Contornos de logotipos, brasões e acabamento de apliques",
      "Bordados em alto relevo 3D sobre EVA em bonés e jaquetas",
      "Detalhes florais, folhas, arabescos e frisos decorativos"
    ],
    "troubleshootingTips": [
      "Se as pontas das letras ficarem ásperas ou com nós, reduza a densidade nas curvas (Density Cornering)",
      "Se o centro da letra afundar no tecido felpudo, adicione underlay em ziguezague e coloque filme hidrossolúvel por cima",
      "Se a linha de baixo branca aparecer nas bordas do satim, aperte ligeiramente a tensão superior ou limpe a caixa de bobina"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Tatami (Preenchimento / Fill Stitch) e Ângulos de Inclinação",
      "Underlay / Pontos de Suporte",
      "Compensação de Repuxo",
      "Densidade de Pontos"
    ],
    "tags": [
      "p-077",
      "ponto cheio",
      "satin stitch",
      "largura de coluna",
      "auto-split",
      "letras bordadas",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Satin Stitch Geometry, Auto-Split Thresholds and Column Digitizing. Sydney, 2021.",
      "PARRISH, Gail. Satin Column Mechanics: Tension Pull, Underlay Architecture and Surface Gloss Optimization. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu programa de criação de matrizes e digite uma letra 'M' maiúscula com 3 cm de altura em ponto cheio. Aproxime a tela com zoom: meça com a régua virtual a largura das colunas. Veja como as linhas paralelas de satim criam uma borda brilhante e perfeita!",
    "quickSummary": "O ponto em ziguezague fechadinho que dá brilho acetinado e relevo às letras e contornos.",
    "beginnerExplanation": "O Ponto Cheio (ou Satim) é aquele ponto clássico e brilhante usado para escrever nomes e contornar desenhos. A linha vai de um lado ao outro da letra sem parar no meio, fazendo a luz bater e brilhar como cetim. Para ficar lindo e seguro, a letra não pode ser nem fininha demais nem larga demais!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-078-pantografo-e-sistema-de-movimentacao-xy-por-correias-sincronizadoras",
    "code": "P-078",
    "term": "Pantógrafo e Sistema de Movimentação X/Y por Correias Sincronizadoras (X/Y Drive Pantograph System)",
    "letter": "P",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego pantos (tudo) e graphein (escrever / reproduzir movimentos mecânicos precisos).",
    "summary": "Estrutura mecânica móvel acionada por servomotores e correias dentadas sincronizadoras que desloca o bastidor com o tecido nos eixos X e Y a cada ponto formado pela agulha.",
    "definition": "Pantógrafo e Sistema de Movimentação X/Y por Correias Sincronizadoras (X/Y Axis Motion Carriage, Timing Belt Transmission & Servo Interpolation) é o mecanismo cinemático fundamental da máquina de bordar responsável por posicionar o tecido com precisão micrométrica sob a agulha entre cada descida da barra. Enquanto o cabeçote executa o movimento vertical contínuo da agulha (eixo Z), o pantógrafo movimenta a armação de alumínio nos eixos transversal (X) e longitudinal (Y). Essa movimentação é acionada por servomotores digitais através de correias dentadas de poliuretano com alma de aço e guias lineares prismáticas, devendo ocorrer exclusivamente durante a fração de ciclo em que a agulha está fora do tecido (*Frame Move Angle*).",
    "technicalDetails": "Janela angular de movimentação do pantógrafo: Entre 280° e 100° do ciclo do eixo principal (aproximadamente 180° de rotação em que a agulha está acima da chapa de ponto). Tensão das correias X/Y: Frequência acústica de 65 Hz a 85 Hz (medida por medidor sônico de tensão). Folga de folga mecânica (Backlash): < 0,05 mm. Velocidade máxima de deslocamento: Até 1.200 pulsos de passo por minuto.",
    "construction": [
      "Travessa mestra e braços de acoplamento do bastidor em liga de alumínio aeronáutico extrudado",
      "Guias lineares de precisão com patins de esferas recirculantes de aço retificado",
      "Correias sincronizadoras dentadas de poliuretano com cordas internas de aço (Passo HTD 3M / 5M)",
      "Polias dentadas de precisão acopladas diretamente a servomotores AC/Brushless de alto torque",
      "Sensores de limite de curso ópticos e magnéticos para determinação do Ponto Zero (Home Position)"
    ],
    "howItWorks": [
      "1. O arquivo da matriz envia os comandos de coordenadas cartesianas (DX, DY) para a placa controladora da máquina.",
      "2. O servomotor do eixo principal gira, movimentando a barra de agulha e o estica-fio.",
      "3. Quando a agulha sobe e sai completamente do tecido (atingindo ~280° no encoder), o freio do pantógrafo é liberado.",
      "4. Os servomotores dos eixos X e Y tracionam as correias dentadas, movendo o bastidor para a nova coordenada em milissegundos.",
      "5. O pantógrafo para e trava perfeitamente imóvel na nova posição antes da ponta da agulha tocar o tecido (a ~100°).",
      "6. A agulha penetra o tecido estático e forma o laço com a linha da lançadeira.",
      "7. Esse ciclo sincronizado se repete de 700 a 1.000 vezes por minuto com precisão de frações de milímetro."
    ],
    "mainTypes": [
      "Pantógrafo de Ponte / Bancada Aberta (Para máquinas industriais multicabeças de 4 a 24 cabeças)",
      "Braço Pantográfico Tubular / Cilíndrico (Para máquinas monocabeça bordarem peças prontas, bonés e mangas)",
      "Sistema de Carro Integrado de Mesa (Para máquinas domésticas e compactas de ateliê)"
    ],
    "characteristics": [
      "Posicionamento bidimensional ultra-rápido com repetibilidade de centésimos de milímetro",
      "Movimento suave e sem solavancos graças ao controle de aceleração e desaceleração por servomotor",
      "Estrutura rígida e leve para suportar bastidores gigantescos sem flexão mecânica",
      "Sincronismo eletrônico perfeito com o giro do cabeçote da máquina"
    ],
    "limitations": [
      "Correias dentadas frouxas causam perda de contorno e desenhos desalinhados",
      "Nunca forçar ou empurrar o pantógrafo com as mãos enquanto a máquina estiver ligada",
      "Sujeira acumulada nos trilhos lineares causa travamentos e erros de limite de bastidor"
    ],
    "numberingSystem": [
      "Tensão Sonora da Correia: 70 Hz a 80 Hz",
      "Folga Tolerada: < 0,05 mm",
      "Janela de Movimento Seguro: 280° a 100° do ciclo"
    ],
    "advantages": [
      "✔ Garante que todos os contornos do desenho casem perfeitamente em cima do preenchimento",
      "✔ Permite que a máquina borde com velocidade máxima de 1.000 PPM sem tremer",
      "✔ Movimentação silenciosa, precisa e sem folgas mecânicas"
    ],
    "commonErrors": [
      "❌ Deixar as correias do pantógrafo frouxas, fazendo o contorno preto ficar fora do lugar",
      "❌ Empurrar o bastidor com a mão enquanto a máquina está bordando para tentar 'ajudar'",
      "❌ Esquecer de limpar e engraxar os trilhos e guias do pantógrafo a cada 6 meses"
    ],
    "voceSabia": "O termo 'Pantógrafo' foi inventado em 1603 pelo astrônomo e matemático alemão Christoph Scheiner para descrever um mecanismo de paralelogramo articulado que copiava e ampliava desenhos à mão; hoje, no bordado, ele é totalmente computadorizado por servomotores!",
    "curiosidadeTecnica": "Em uma máquina operando a 1.000 PPM, o pantógrafo tem apenas 30 milissegundos para acelerar, movimentar o bastidor em até 10 milímetros e desacelerar até a imobilidade absoluta antes da descida da agulha.",
    "dicaArtrelados": "Se você notar que os contornos dos seus bordados começaram a sair 'deslocados' ou tortos em relação ao preenchimento colorido, a causa mais comum não é a matriz, e sim a correia do pantógrafo que está frouxa! Chame seu técnico de confiança para tensionar as correias dos eixos X e Y e engraxar os trilhos da máquina.",
    "comparisonTable": {
      "headers": [
        "Estado do Pantógrafo",
        "Precisão de Contorno",
        "Ruído de Operação",
        "Comportamento a 900 PPM"
      ],
      "rows": [
        [
          "Correias Calibradas e Trilhos Limpos",
          "Casamento 100% perfeito",
          "Suave e silencioso",
          "Firme e sem vibração"
        ],
        [
          "Correia Frouxa (com folga)",
          "Contorno fora do lugar (desalinhado)",
          "Estalos nas mudanças de direção",
          "Perda de passos e linhas tortas"
        ],
        [
          "Trilho Sujo com Linhas Presas",
          "Erro de motor / Parada 'Limit X/Y'",
          "Ruído áspero de atrito",
          "Travamento e perda da peça"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 1.000 PPM (conforme rigidez da máquina)",
      "needleType": "Padrão",
      "stabilizer": "N/A (Mecânica e cinemática)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Movimentação do bastidor em todas as máquinas de bordar computadorizadas",
      "Bordados em grandes áreas contínuas de colchas, bandeiras e fardamentos",
      "Alinhamento preciso de sobreposição de múltiplas cores e camadas de aplique",
      "Translação suave do bastidor de bonés em movimentos curvos combinados"
    ],
    "troubleshootingTips": [
      "Verifique com a máquina desligada se há folga ao puxar o braço do bastidor para frente e para trás",
      "Limpe periodicamente os trilhos lineares de aço com pano seco e aplique fina camada de óleo mineral ou graxa branca",
      "Se o painel der erro de 'Frame Limit', redefina a origem e verifique se o bastidor não está batendo nas bordas"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Ponto Morto Superior (PMS) e Sincronismo do Levantador de Calcador",
      "Velocidade de Bordado (PPM)",
      "Compensação de Repuxo",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "p-078",
      "pantografo",
      "eixos xy",
      "correias dentadas",
      "servomotor",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Service Manual: X/Y Drive Timing Belts & Servo Kinematics. Nagoya, 2021.",
      "PARRISH, Gail. Industrial Motion Control: Pantograph Mechanics, Belt Harmonic Tensioning and Frame Acceleration. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a sua máquina desligada da tomada, segure com delicadeza o braço que segura o bastidor e tente mexer bem de leve para os lados: sinta se o movimento está macio e sem nenhuma 'folguinha solta'. Um pantógrafo bem justinho é o segredo dos contornos perfeitos!",
    "quickSummary": "O braço mecânico computadorizado que mexe o bastidor para lá e para cá a cada ponto da agulha.",
    "beginnerExplanation": "O pantógrafo é a estrutura mecânica que segura o bastidor e move o tecido com velocidade incrível nos eixos X e Y enquanto a agulha sobe e desce. Ele é puxado por correias dentadas super precisas para garantir que cada pontinho caia no lugar exato do desenho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-079-passagem-de-linha-superior-e-sistema-de-guias-pratos-e-estica-fio",
    "code": "P-079",
    "term": "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio (Upper Thread Path & Take-Up System)",
    "letter": "P",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim passus (trajeto ordenado) e do germânico thred (fio de costura).",
    "summary": "Trajeto obrigatório e metódico da linha de bordar desde o cone no porta-fios, passando por ilhoses, discos tensores, mola tira-fio, alavanca estica-fio até o furo da agulha.",
    "definition": "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio (Upper Thread Delivery Path, Check Spring & Take-Up Lever Dynamics) é o roteamento físico e ordenado do fio superior responsável por alimentar a agulha com a tensão e folga dinâmicas exatas durante a costura. O caminho da linha não é apenas um suporte físico, mas um complexo sistema de controle cinemático: o fio sai do cone vertical, passa pelos guias de redução de torção, atravessa os pratos de pré-tensão e tensão principal, engata na mola tira-fio (*Check Spring*), entra no orifício da alavanca do estica-fio móvel (*Take-Up Lever*), desce pela canaleta guia e penetra na agulha de frente para trás. O esquecimento de um único guia ou a passagem fora do estica-fio resulta em embolamento imediato na lançadeira (*Birdnesting*) ou quebra instantânea do fio.",
    "technicalDetails": "Componentes sequenciais do trajeto: 1. Suporte de carretel/cone -> 2. Guia superior com ilhós cerâmico -> 3. Sensor óptico de ruptura -> 4. Pré-tensor de mola -> 5. Tensor principal -> 6. Mola tira-fio de amortecimento -> 7. Alavanca do estica-fio -> 8. Guias de barra de agulha -> 9. Olho da agulha (da frente para trás). Curso angular da mola tira-fio: 4 mm a 6 mm de deflexão elástica.",
    "construction": [
      "Árvore porta-cones com guia-fios de altura regulável para desenrolamento suave",
      "Ilhoses de passagem em cerâmica polida de alta resistência ao atrito contínuo",
      "Conjunto de pratos tensores metálicos polidos com mola helicoidal calibrada",
      "Mola tira-fio (Check Spring) para manter a linha tensionada no início da descida",
      "Alavanca do estica-fio (Take-Up Lever) sincronizada com o eixo principal"
    ],
    "howItWorks": [
      "1. A linha é puxada do cone verticalmente para cima, passando pelo ilhós superior do suporte.",
      "2. Desce pelo cabeçote e dá a volta de medição no sensor óptico de quebra.",
      "3. Passa entre os discos metálicos do conjunto de tensão principal, que freiam o fio na medida exata (110 gf).",
      "4. Encaixa-se na mola tira-fio flexível, que absorve o choque no momento da puxada.",
      "5. Sobe e entra no orifício da alavanca do estica-fio (sempre conferindo visualmente se a linha entrou de verdade).",
      "6. Desce pelos guias finos da barra de agulha e entra no olho da agulha de frente para trás.",
      "7. A máquina costura com estabilidade absoluta: o estica-fio sobe para recolher a laçada e fechar o ponto no centro do tecido com precisão perfeita."
    ],
    "mainTypes": [
      "Passagem de Linha em Máquinas Industriais Multicabeças (Com sistema de tubos e molas individuais por agulha)",
      "Passagem de Linha em Máquinas Domésticas / Comerciais de 1 Agulha (Com canaletas numeradas de 1 a 6)",
      "Passagem com Guias de Baixo Atrito para Fios Metálicos e Especiais (Com lubrificadores de silicone opcionais)"
    ],
    "characteristics": [
      "Formação impecável do laço inferior na lançadeira a cada descida da agulha",
      "Eliminação de nós, laçadas frouxas e arrebentamentos repentinos de linha",
      "Distribuição uniforme de tensão ao longo de milhares de pontos contínuos",
      "Procedimento intuitivo e rápido que se torna automático com a prática diária"
    ],
    "limitations": [
      "Nunca passar a linha com o calcador abaixado em máquinas domésticas (os discos tensores ficam fechados e travam a linha)",
      "Se a linha escapar de dentro do estica-fio, a máquina embolará tudo embaixo em menos de 3 segundos",
      "Não permitir que a linha enrosque na base do carretel no suporte traseiro"
    ],
    "numberingSystem": [
      "Tensão Alvo Superior: 100 gf a 120 gf",
      "Número de Guias Típicos: 6 a 8 pontos de contato",
      "Deflexão da Mola Tira-fio: 5 mm"
    ],
    "advantages": [
      "✔ Garante que sua máquina nunca embole linha embaixo nem arrebente o fio à toa",
      "✔ Proporciona pontos regulares, fechadinhos e com visual limpo e profissional",
      "✔ É o conhecimento fundamental que resolve 90% das queixas de bordados feios"
    ],
    "commonErrors": [
      "❌ Passar a linha sem levantar o pezinho (calcador), impedindo a linha de entrar dentro dos discos de tensão",
      "❌ Esquecer de passar a linha dentro do buraquinho da alavanca do estica-fio",
      "❌ Passar a linha na agulha de trás para frente ou de lado, quebrando a linha no primeiro ponto"
    ],
    "voceSabia": "A alavanca do estica-fio (Take-Up Lever) foi patenteada por Isaac Singer em 1851 e é uma das invenções mecânicas mais geniais da história: ela sobe para puxar o excesso de linha no momento exato em que a agulha sai do tecido, fechando o ponto!",
    "curiosidadeTecnica": "Durante uma única descida e subida da agulha a 900 PPM (em apenas 66 milissegundos), o estica-fio se desloca cerca de 35 mm para cima e para baixo, acelerando a linha a mais de 15 km/h em frações de segundo.",
    "dicaArtrelados": "Regra de ouro que toda bordadeira precisa gravar no coração: **sempre levante o calcador (o pezinho da máquina) antes de passar a linha de cima!** Quando o calcador está levantado, os disquinhos de metal da tensão se abrem para a linha entrar lá no fundo. Se passar com o pezinho abaixado, a linha fica solta por fora e vira aquele ninho de passarinho embaixo do tecido!",
    "comparisonTable": {
      "headers": [
        "Passagem de Linha",
        "Comportamento da Linha",
        "Aspecto no Tecido",
        "Risco de Embolamento"
      ],
      "rows": [
        [
          "Correta com Calcador Levantado",
          "Entra nos discos e no estica-fio",
          "Ponto perfeito e calibrado",
          "Zero"
        ],
        [
          "Com Calcador Abaixado",
          "Fica solta fora dos discos",
          "Laçadas soltas e frouxas",
          "Altíssimo (embola em 3s)"
        ],
        [
          "Fora da Alavanca do Estica-Fio",
          "Não recolhe a sobra do laço",
          "Ninho gigante embaixo (birdnest)",
          "Imediato e severo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "75/11 SES ponta bola",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Rotina diária obrigatória em todas as trocas de cor e preparação de máquinas",
      "Treinamento de novos operadores e bordadeiras no ateliê",
      "Resolução imediata de problemas de quebra de linha ou pontos frouxos",
      "Passagem de fios especiais (fios metálicos, multicoloridos e fluorescentes)"
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 5 pontos, desfaça a passagem e passe a linha do zero com atenção redobrada",
      "Puxe a linha pela agulha com a mão: ela deve oferecer uma resistência suave e constante, sem trancos",
      "Verifique se a linha não enrolou no pino do cone lá no suporte de trás"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Nivelamento de Tensão de Linha",
      "Linha de Bordar 40wt",
      "Olho da Agulha e Geometria da Canaleta Frontal",
      "Mecânica & Manutenção"
    ],
    "tags": [
      "p-079",
      "passagem de linha",
      "estica-fio",
      "discos tensores",
      "mola tira-fio",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SEWING MACHINE DYNAMICS: Upper Thread Kinematics, Check Spring Calibration and Tension Delivery. London, 2021.",
      "PARRISH, Gail. Thread Path Optimization, Friction Coefficients and Take-Up Lever Synchronization in Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Retire a linha da sua máquina completamente. Levante o pezinho calcador e faça a passagem da linha devagar, acompanhando os números ou os guias com os olhos e ouvindo o leve 'clique' quando ela entra nos discos de tensão. No final, puxe a ponta da linha e sinta a tração suave e perfeita!",
    "quickSummary": "O caminho certinho que a linha de cima tem que fazer do carretel até a agulha para o bordado não embolar.",
    "beginnerExplanation": "Passar a linha na máquina é como seguir uma trilha: a linha tem que passar pelos buraquinhos certos, entrar no meio dos pratinhos de tensão e entrar na alavanca que sobe e desce (o estica-fio). Fazendo isso com o pezinho levantado, sua máquina borda suave e nunca mais faz aquele bolo de linha embaixo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-080-ponto-de-uniao-connecting-stitch-e-alinhamento-logico-de-vetores",
    "code": "P-080",
    "term": "Ponto de União (Connecting Stitch) e Alinhamento Lógico de Vetores",
    "letter": "P",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim connectere (ligar/unir de forma contínua) e do grego vectorem (trajetória direcionada).",
    "summary": "Técnica de programação que conecta objetos e letras adjacentes da mesma cor com pontos corridos ocultos sob camadas futuras ou sob colunas de satim, eliminando cortes de linha e saltos desnecessários.",
    "definition": "Ponto de União (Connecting Stitch, Travel Stitch & Vector Node Branching) é a estratégia avançada de digitalização onde o programador conduz a agulha de um elemento bordado para o próximo através de uma linha de costura corrida de baixa densidade estrategicamente posicionada. Em vez de acionar o corte de linha automático (Trimmer), o deslocamento em salto rápido e um novo arremate com início lento, a máquina desliza em ponto corrido contínuo pelo trajeto que será coberto por uma camada de acabamento posterior ou pelo centro de uma coluna vizinha. Isso reduz o desgaste mecânico do cortador, elimina pontas de linha no avesso e acelera o tempo de produção da matriz em até 30%.",
    "technicalDetails": "Comprimento do ponto de união: 2,5 mm a 3,5 mm (evita pontos muito longos que possam escapar ou muito curtos que acumulem volume). Alinhamento de nós: O ponto de saída (Exit Point) do Objeto A deve conectar diretamente ao ponto de entrada (Entry Point) do Objeto B. Camada de cobertura mínima: O ponto de viagem deve ficar a pelo menos 1,0 mm de distância das bordas externas do objeto de acabamento superior.",
    "construction": [
      "Grafo de nós vetoriais ordenados logicamente pelo fluxo de digitalização",
      "Ponto de corrida de viagem (Travel Run) com comprimento calibrado",
      "Sobreposição garantida sob a camada futura de satim ou tatami",
      "Desativação explícita de comando de corte (Trim) e salto (Jump) no nó de transição",
      "Simulador de percurso no software para conferir se nenhum fio de viagem ficou exposto"
    ],
    "howItWorks": [
      "1. Ao digitalizar uma palavra cursiva ou um brasão com múltiplos galhos da mesma cor verde, o programador analisa a rota.",
      "2. Ao terminar a primeira folha, em vez de colocar um corte de linha, ele traça uma linha reta de ponto corrido até o caule principal.",
      "3. Esse ponto corrido viaja exatamente pelo caminho onde mais tarde será bordado o galho de acabamento.",
      "4. Quando a agulha chega ao início da segunda folha, ela inicia o preenchimento imediatamente.",
      "5. Mais tarde, o galho espesso é bordado por cima daquela linha de viagem, cobrindo-a 100%.",
      "6. A máquina executa todo o bordado verde de ponta a ponta sem parar nem uma única vez para cortar linha.",
      "7. A peça sai da máquina com avesso ultra limpo, sem fiapos soltos para aparar na tesoura e bordada em tempo recorde."
    ],
    "mainTypes": [
      "Ponto de União Oculto sob Camada Superior (Viaja por baixo de futuros preenchimentos de tatami ou satim)",
      "Ponto de União em Letras Cursivas / Conectadas (O ponto corrido corre dentro da perninha da própria letra)",
      "Ramificação Automática (Branching Algorithm) (O software calcula a melhor rota de ida e volta sem cortes)"
    ],
    "characteristics": [
      "Redução drástica no número de cortes de linha da matriz (de 40 cortes para menos de 8)",
      "Economia significativa de tempo operacional da máquina em cada peça",
      "Eliminação do risco de desfiamento de pontas cortadas e nós no verso do bordado",
      "Avesso impecável e plano, muito mais suave ao toque da pele"
    ],
    "limitations": [
      "Nunca passar pontos de união sobre áreas de tecido vazio que não receberão cobertura de linha",
      "Não utilizar pontos de união com comprimento excessivo (> 4,5 mm), que podem entortar sob o tecido",
      "Exige atenção do programador para não deixar a linha de viagem 'vazar' nas pontas das letras"
    ],
    "numberingSystem": [
      "Comprimento do Ponto de Viagem: 2,5 mm a 3,2 mm",
      "Distância Segura da Borda: ≥ 1,0 mm",
      "Redução de Tempo Médio: 15% a 30%"
    ],
    "advantages": [
      "✔ Sua máquina borda direto sem ficar parando a toda hora para cortar linha e fazer barulho",
      "✔ Acaba com aquele monte de fiapinho solto atrás do bordado que você precisa ficar limpando na tesoura",
      "✔ Poupa a faca de corte da sua máquina, fazendo ela durar muito mais anos"
    ],
    "commonErrors": [
      "❌ Deixar o ponto de união passar por cima do tecido em branco sem nenhuma cobertura por cima",
      "❌ Usar corte de linha entre duas letras que estão a apenas 1 milímetro de distância uma da outra",
      "❌ Colocar pontos de união muito perto da borda externa, fazendo a linha de baixo aparecer de lado"
    ],
    "voceSabia": "Nos primórdios do bordado industrial nos anos 1980, as máquinas não tinham cortador automático de linha; os digitalizadores eram verdadeiros mestres em planejar caminhos contínuos invisíveis para que a máquina bordasse o desenho inteiro sem intervenção humana!",
    "curiosidadeTecnica": "Cada comando de corte de linha e arremate consome entre 4 e 7 segundos de tempo de ciclo da máquina; em uma matriz de 15.000 pontos com 25 cortes desnecessários, o tempo desperdiçado apenas em paradas de corte chega a quase 3 minutos por peça.",
    "dicaArtrelados": "Ao criar ou editar suas matrizes de bordado, sempre use a ferramenta 'Ramificação' (Branching) ou desenhe pontinhos corridos por baixo das letras para ligar uma letra na outra. A máquina vai bordar o nome inteirinho numa velocidade incrível e sem fazer aquele corte seco a cada letra. O bordado fica muito mais rápido e limpo!",
    "comparisonTable": {
      "headers": [
        "Estratégia de Conexão",
        "Número de Cortes",
        "Tempo de Execução",
        "Qualidade do Avesso"
      ],
      "rows": [
        [
          "Pontos de União Ocultos (Branching)",
          "Mínimo (1 por cor)",
          "Ultra rápido (contínuo)",
          "Limpo, plano e sem fiapos"
        ],
        [
          "Corte a Cada Objeto / Letra",
          "Excessivo (30+ cortes)",
          "Lento com paradas contínuas",
          "Cheio de nós e pontas soltas"
        ],
        [
          "Salto sem Corte (Jump Manual)",
          "Zero cortes na máquina",
          "Rápido na máquina",
          "Péssimo (teia de aranha para cortar na mão)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "75/11 SES ponta bola",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Digitalização de fontes cursivas e nomes conectados em peças personalizadas",
      "Bordado de folhagens, arabescos, galhos florais e detalhes complexos",
      "Otimização de logotipos corporativos para alta produção em larga escala",
      "Redução de volume e atrito no avesso de roupas infantis e bodys de bebê"
    ],
    "troubleshootingTips": [
      "Ative a visualização de 'Conexões / Travel Runs' no software com cor contrastante para inspecionar o trajeto",
      "Se uma linha de viagem estiver visível por baixo de um satim fino, posicione-a exatamente no centro da coluna",
      "Utilize a ferramenta de 'Reordenar Objetos' para garantir que os caminhos de viagem fiquem antes da camada final"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Otimização de Saltos e Trajetória de Deslocamento do Pantógrafo",
      "Corte de Linha Automático (Trimmer)",
      "Ponto de Arremate Inicial e Final (Tie-In & Tie-Off Stitches)",
      "Ponto Cheio (Satin Stitch) e Largura Segura de Coluna"
    ],
    "tags": [
      "p-080",
      "ponto de uniao",
      "connecting stitch",
      "branching",
      "viagem oculta",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Branching & Connecting Stitch Optimization. Sydney, 2021.",
      "PARRISH, Gail. Vector Pathfinding: Travel Run Placement, Trim Elimination and Production Throughput in Embroidery Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe três círculos pequenos alinhados no seu programa de matrizes. Tente ligar o primeiro ao segundo e o segundo ao terceiro com uma linhazinha de ponto corrido reta, e depois cubra tudo com uma barra retangular em satim. Dê o play no simulador: veja como a máquina borda tudo direto sem cortar a linha!",
    "quickSummary": "O pontinho invisível escondido embaixo do bordado para a máquina ir de uma letra para outra sem cortar a linha.",
    "beginnerExplanation": "Em vez de fazer a máquina parar, cortar a linha e começar de novo a cada letrinha, o programador esperto cria uma costurinha bem discreta que passa por baixo da próxima letra. Assim, a máquina borda tudo direto, super rápido, e não deixa aquele monte de linha solta para você ficar cortando na tesoura depois!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-081-ponto-de-arremate-inicial-e-final-tie-in-tie-off-stitches",
    "code": "P-081",
    "term": "Ponto de Arremate Inicial e Final (Tie-In & Tie-Off Stitches)",
    "letter": "P",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês tie-in (amarrar na entrada) e tie-off (amarrar na saída / arrematar ponto).",
    "summary": "Micro-sequência programada de 3 a 5 pontos minúsculos sobrepostos no início e no término de cada bloco de costura, travando a linha com segurança para impedir desmanches.",
    "definition": "Ponto de Arremate Inicial e Final (Tie-In Entry Lock, Tie-Off Exit Anchor & Trimmer Knot Dynamics) é a estrutura mecânica de ancoragem inserida obrigatoriamente antes e depois de qualquer corte de linha na matriz de bordado. O arremate inicial (*Tie-In*) executa pequenos pontos concentrados para prender a ponta solta da linha antes que a velocidade acelere para a costura principal, evitando que o fio escape do olho da agulha; o arremate final (*Tie-Off*) executa um travamento em ziguezague minúsculo ou micro-cruzamento de pontos antes do acionamento da faca de corte, garantindo que o bordado não desfie mesmo após dezenas de lavagens industriais.",
    "technicalDetails": "Comprimento dos micropontos de arremate: 0,6 mm a 1,0 mm. Número de micropontos: 3 a 5 penetrações concentradas. Padrões clássicos: Ponto Bow-Tie (Laço cruzado), Ponto Linear e Ponto Estrela. Tolerância de tensão no arremate: Deve resistir a tração manual de > 350 gf sem escorregar da laçada da bobina.",
    "construction": [
      "Comando automático de Tie-In gerado pelo software de digitalização no nó de entrada",
      "Padrão geométrico de ancoragem em micro-laço dentro da área de cobertura",
      "Comando automático de Tie-Off gerado imediatamente antes do código de corte (Trim)",
      "Posicionamento estratégico dos pontos de arremate sob a área densa da coluna ou preenchimento",
      "Verificação de suavidade para não formar nós duros e salientes no avesso"
    ],
    "howItWorks": [
      "1. A máquina posiciona o pantógrafo na coordenada inicial de uma nova cor.",
      "2. A agulha desce devagar e executa 3 a 4 micropontos de 0,8 mm (o Tie-In), prendendo a linha de cima com a de baixo.",
      "3. O motor acelera suavemente para 850 PPM e borda toda a letra em ponto cheio brilhante.",
      "4. Ao chegar na última laçada da letra, a máquina reduz a rotação instantaneamente.",
      "5. Executa 4 micropontos cruzados no centro da coluna (o Tie-Off), travando o nó definitivo.",
      "6. A faca inferior aciona, corta a linha sob a chapa de ponto e o pantógrafo salta para a próxima posição.",
      "7. A ponta cortada fica perfeitamente ancorada, garantindo um bordado resistente, durável e com acabamento impecável."
    ],
    "mainTypes": [
      "Arremate em Ponto Cruzado / Gravata-Borboleta (Bow-Tie) (O mais seguro para colunas de satim e letras)",
      "Arremate Linear ao Longo da Coluna (Para letras ultrafinas onde o nó não pode alargar a borda)",
      "Arremate Circular em Espiral (Para preenchimentos densos de tatami e patches)"
    ],
    "characteristics": [
      "Garantia absoluta de que nenhuma letra ou contorno vai desmanchar ou soltar fios",
      "Prevenção contra o escape da linha do olho da agulha no início de cada objeto",
      "Totalmente invisível quando programado corretamente sob a camada de acabamento",
      "Compatível com todos os formatos de arquivo de bordado industrial e doméstico"
    ],
    "limitations": [
      "Arremates com pontos menores que 0,4 mm podem quebrar a agulha por perfuração repetida no mesmo ponto",
      "Arremates fora da área do bordado deixam nós feios e visíveis no tecido",
      "Excesso de micropontos (> 8 pontos) cria calombos duros que incomodam a pele do bebê"
    ],
    "numberingSystem": [
      "Número Ideal de Pontos: 3 a 5 micropontos",
      "Comprimento do Microponto: 0,8 mm a 1,0 mm",
      "Resistência à Tração: > 350 gf"
    ],
    "advantages": [
      "✔ Seu bordado pode ser lavado centenas de vezes na máquina sem nunca soltar uma única linha",
      "✔ Evita que a agulha comece a bordar 'no vazio' por ter desfiado a linha no começo",
      "✔ Dá segurança total para você entregar as encomendas aos seus clientes sem medo"
    ],
    "commonErrors": [
      "❌ Desativar o arremate no programa para 'economizar pontos', fazendo o bordado desmanchar na primeira lavagem",
      "❌ Colocar o arremate fora do desenho, deixando um nó saliente no tecido branco",
      "❌ Programar 10 pontos em cima do mesmo buraco, rasgando o tecido fino"
    ],
    "voceSabia": "A palavra 'Arremate' vem do latim ad-ramata (atar firmemente os ramos); na era medieval, os mestres bordadores davam nós duplos à mão com agulhas finas de osso para garantir que os mantos da realeza durassem séculos!",
    "curiosidadeTecnica": "Sem um ponto de arremate correto, a força elástica residual do filamento de poliéster retrai a ponta cortada da linha em até 1,5 mm; essa retração é suficiente para desfazer as 3 primeiras laçadas de uma coluna de satim sob atrito de lavagem.",
    "dicaArtrelados": "Nunca desative as opções 'Arremate Inicial' (Tie-In) e 'Arremate Final' (Tie-Off) no seu programa de bordado! Eles são o verdadeiro 'nó invisível' que garante que a sua toalha ou fralda possa ir para a máquina de lavar e continuar perfeita por anos e anos. Segurança e qualidade em primeiro lugar!",
    "comparisonTable": {
      "headers": [
        "Configuração de Arremate",
        "Segurança Pós-Lavagem",
        "Início de Costura",
        "Aspecto Visual"
      ],
      "rows": [
        [
          "Arremate Calibrado (3-4 pontos)",
          "100% segura (não desmancha)",
          "Perfeito sem falhar",
          "Invisível sob o satim"
        ],
        [
          "Sem Nenhum Arremate",
          "Desmancha e puxa fio",
          "Linha escapa da agulha",
          "Pontas soltas desfiando"
        ],
        [
          "Excesso de Pontos (8+ pontos)",
          "Segura, porém dura",
          "Corta o tecido na agulha",
          "Nó grosso e áspero"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "75/11 SES ponta bola",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Configuração obrigatória em todas as matrizes de nomes, letras e figuras",
      "Bordados em uniformes industriais, aventais e roupas submetidas a lavagens pesadas",
      "Enxovais infantis, fraldas de boca, toalhas de banho e artigos de bebê",
      "Emblemas termocolantes, patches militares e bordados em bonés"
    ],
    "troubleshootingTips": [
      "Se no início de uma letra a linha sempre escapar da agulha, aumente o número de pontos de Tie-In de 3 para 5",
      "Se ficar um nó visível na ponta de uma letra fina, mude o estilo do arremate para 'Linear' no software",
      "Certifique-se de que a faca de corte da máquina esteja afiada para não repuxar o nó do arremate"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Corte de Linha Automático (Trimmer)",
      "Ponto de União (Connecting Stitch) e Alinhamento Lógico de Vetores",
      "Ponto Cheio (Satin Stitch) e Largura Segura de Coluna",
      "Técnicas de Bordado"
    ],
    "tags": [
      "p-081",
      "arremate",
      "tie-in",
      "tie-off",
      "travamento de ponto",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Locking Stitches, Tie-In/Tie-Off Parameters & Thread Security. Sydney, 2021.",
      "PARRISH, Gail. Anchor Knot Mechanics: Stitch Locking Dynamics, Trimmer Interaction and Wash-Fast Durability. Cincinnati, 2022."
    ],
    "practicalExercise": "No seu software de bordado, crie uma palavra com 3 letras. Abra as propriedades do objeto e ative o 'Arremate Inicial e Final'. Aproxime bem o zoom no início e no final de cada letra para ver os 3 micro-pontinhos cruzados: eles são o escudo protetor do seu bordado!",
    "quickSummary": "O nózinho automático no início e no fim de cada parte do bordado para a linha nunca desmanchar.",
    "beginnerExplanation": "O arremate é como aquele nó que a gente dá na linha na costura à mão: antes de começar e logo antes de cortar a linha, a máquina dá 3 pontinhos minúsculos bem juntinhos para travar a linha no tecido. Isso garante que a cliente possa lavar a peça na máquina de lavar sem medo nenhum de desmanchar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "p-082-piquet-pique-e-protocolo-de-bordado-em-camisas-polo",
    "code": "P-082",
    "term": "Piquet (Piqué) e Protocolo de Bordado em Camisas Polo (Piqué Knit Polo Protocol)",
    "letter": "P",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês piqué (tecido acolchoado/picado com relevo em formato de favo de mel patenteado na França).",
    "summary": "Protocolo completo de estabilização com entretela de recorte, pontos de suporte e compensação de repuxo para bordar com perfeição sobre a malha favada e texturizada das camisas polo.",
    "definition": "Piquet (Piqué Knit Fabric Protocol, Honeycomb Structure & Polo Shirt Digitizing Standards) é a metodologia técnica de preparação e execução de bordados sobre tecidos de malharia em ponto piquet (tradicionalmente 100% algodão ou misturas poliéster/algodão como PV). A malha piquet caracteriza-se por sua textura em relevo tridimensional no padrão favo de mel (*Honeycomb*) e alta elasticidade mecânica biaxial. Se bordada com entretela frágil ou sem underlay adequado, a textura áspera engole os contornos finos, os círculos viram ovais deformados pelo repuxo e as letras pequenas afundam nas cavidades dos favos, exigindo entretela de recorte pesada (*Cut-Away*), filme solúvel no topo e compensação de repuxo generosa.",
    "technicalDetails": "Gramatura média do Piquet: 180 a 240 g/m². Agulha mandatória: 75/11 SES de ponta arredondada média (Ponta Bola). Estabilizador indispensável: Entretela de Recorte de 60 a 80 g/m² no avesso (nunca usar entretela rasgável) + Filme Hidrossolúvel de 20 a 35 micras no topo para letras finas. Compensação de repuxo (Pull Compensation): 0,35 mm a 0,45 mm. Estrutura de underlay: Grade cruzada dupla (Tatami leve) sob preenchimentos e borda dupla em letras de satim.",
    "construction": [
      "Tecido de malha piquet em formato favo de mel (100% algodão ou PA/PV)",
      "Entretela de recorte pesada de 80 g/m² resinada no avesso para travar a elasticidade",
      "Filme hidrossolúvel transparente no direito para nivelar os relevos dos favos",
      "Compensação de repuxo reforçada no software em todas as colunas de satim",
      "Gabarito de peito de polo para alinhamento simétrico entre a carcela e a manga"
    ],
    "howItWorks": [
      "1. Aplica-se a entretela de recorte de 80 g/m² no verso da camisa polo com adesivo temporário spray suave.",
      "2. Enquadra-se a polo no bastidor sem esticar a malha (o tecido deve ficar plano e relaxado, sem estiramento).",
      "3. Coloca-se uma folha de filme hidrossolúvel por cima da área onde será bordado o logotipo.",
      "4. A máquina inicia o bordado com agulha 75/11 SES ponta bola em velocidade calibrada para 750 PPM.",
      "5. O underlay em grade assenta os favos da malha, criando uma base plana perfeita.",
      "6. A camada de acabamento borda os detalhes do logotipo sobre o filme plástico.",
      "7. Retira-se a peça: dissolve-se o filme com borrifador de água e recortam-se os excessos de entretela no verso: o bordado fica impecável, redondo e sem deformar na primeira lavagem."
    ],
    "mainTypes": [
      "Piquet 100% Algodão Penteado (Mais nobre, macio e com alto relevo de favos)",
      "Piquet Misto Poliéster/Algodão (PA) (Muito comum em uniformes corporativos e escolares)",
      "Micro-Piquet Esportivo de Poliéster (Dri-Fit com textura fina de absorção de suor)"
    ],
    "characteristics": [
      "Bordados com letras nítidas e legíveis mesmo em fontes menores de 5 mm",
      "Círculos e brasões perfeitamente redondos, sem distorção oval provocada pela malha",
      "Toque macio no peito que não machuca o usuário nem deforma após lavagens",
      "Alta durabilidade e resistência do bordado ao longo de anos de uso profissional"
    ],
    "limitations": [
      "Nunca utilizar entretela rasgável simples (o bordado vai enrugar e abrir buracos na primeira lavagem)",
      "Não esticar a camisa ao fechar o bastidor (se esticar, o tecido enruga como uma sanfona ao soltar)",
      "Evitar agulhas ponta afiada cortante (R / Sharp), que cortam os fios da malha criando furos"
    ],
    "numberingSystem": [
      "Gramatura do Piquet: 190 - 230 g/m²",
      "Entretela Recomendada: Recorte 80 g/m²",
      "Compensação de Repuxo: 0,40 mm"
    ],
    "advantages": [
      "✔ O maior clássico do mercado de uniformes bordado com perfeição absoluta",
      "✔ Logotipos de empresas com círculos e letras que ficam 100% retos e nítidos",
      "✔ Garante clientes corporativos fiéis que elogiam a durabilidade dos seus bordados"
    ],
    "commonErrors": [
      "❌ Borda camisa polo com entretela rasgável para 'facilitar a limpeza', estragando a peça do cliente",
      "❌ Puxar a malha com força no bastidor até ela ficar esticada como um tambor de circo",
      "❌ Borda letras pequenas sem filme solúvel no topo, fazendo a linha sumir dentro dos buraquinhos do piquet"
    ],
    "voceSabia": "A camisa polo em malha piquet foi criada em 1929 pelo lendário tenista francês René Lacoste, que estava cansado de jogar tênis com camisas sociais rígidas de manga comprida e criou o tecido favado para permitir a respiração do corpo!",
    "curiosidadeTecnica": "A malha piquet tem uma elasticidade transversal de até 35% sob tração; ao ser bordada com entretela de recorte colada, essa deformação cai para menos de 1,2%, garantindo que geometrias circulares mantenham excentricidade inferior a 0,05 mm.",
    "dicaArtrelados": "O segredo de ouro para a camisa polo não ficar enrugada depois do bordado: use SEMPRE entretela de recorte (Cut-Away) e NUNCA puxe o tecido na hora de apertar o bastidor! Acomode a polo descansadinha no aro, coloque um plastiquinho solúvel por cima e borde. O logotipo do seu cliente vai ficar reto e lindo como os das grandes grifes!",
    "comparisonTable": {
      "headers": [
        "Combinação de Materiais",
        "Estabilidade do Círculo",
        "Aspecto das Letras",
        "Resultado Pós-Lavagem"
      ],
      "rows": [
        [
          "Entretela Recorte + Filme Solúvel",
          "Perfeitamente Redondo",
          "100% nítidas e legíveis",
          "Impecável e liso"
        ],
        [
          "Entretela Rasgável sem Filme",
          "Ovo / Ovalado deformado",
          "Afundadas nos favos",
          "Enrugado com pregas"
        ],
        [
          "Sem Entretela (Direto na Malha)",
          "Deformação total",
          "Ilegível e embolado",
          "Furos e rasgos no tecido"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES ponta bola média",
      "stabilizer": "Entretela de Recorte 80 g/m² + Filme Hidrossolúvel no topo",
      "threadTension": "Superior: 105 gf / Bobina: 22 gf",
      "density": "0.40 mm com compensação de 0,40 mm"
    },
    "applications": [
      "Bordados corporativos no peito esquerdo de camisas polo empresariais",
      "Uniformes executivos, médicos, escolares e de equipes de vendas",
      "Logotipos em mangas e costas de camisas polo de alta confecção",
      "Bordados esportivos para clubes de golfe, tênis e esportes náuticos"
    ],
    "troubleshootingTips": [
      "Se as letras ficarem afundando no tecido, coloque uma camada de filme hidrossolúvel por cima do piquet",
      "Se os círculos ficarem ovais, aumente a compensação de repuxo no software para 0,45 mm",
      "Ao recortar a entretela no avesso, deixe uma margem arredondada de 1 cm ao redor do bordado para proteger a peça"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Entretela de Recorte (Cut-Away)",
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Compensação de Repuxo",
      "Ponto Cheio (Satin Stitch) e Largura Segura de Coluna"
    ],
    "tags": [
      "p-082",
      "piquet",
      "camisa polo",
      "favo de mel",
      "uniformes",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "APPAREL QUALITY ASSURANCE: Piqué Knit Stabilization, Embroidery Standards & Commercial Uniforms. New York, 2021.",
      "PARRISH, Gail. Knitwear Digitizing: Piqué Fabric Mechanics, Honeycomb Underlay Design and Hoop Distortion Prevention. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de camisa polo velha de piquet. Borde um círculo de 4 cm com entretela rasgável comum. Depois borde o mesmo círculo em outro pedaço usando entretela de recorte e um plastiquinho solúvel em cima. Compare os dois: veja como o segundo fica redondinho e perfeito!",
    "quickSummary": "O jeito certo de bordar camisas polo usando entretela de recorte e plastiquinho para o desenho não afundar nem enrugar.",
    "beginnerExplanation": "A camisa polo é feita de um tecido furadinho que parece uma colmeia de abelha e estica bastante. Se você bordar de qualquer jeito, as letras somem nos buraquinhos e o logotipo fica todo torto. Usando uma entretela de recorte firme embaixo e um plastiquinho por cima, o bordado fica perfeito e dura para sempre!",
    "updatedAt": "2026-08-29"
  }
];

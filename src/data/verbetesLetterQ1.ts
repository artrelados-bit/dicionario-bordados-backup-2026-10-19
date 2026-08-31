import { Verbete } from "../types";

export const VERBETES_LETTER_Q1: Verbete[] = [
  {
    id: "qualidade-do-bordado",
    code: "Q-001",
    letter: "Q",
    term: "Qualidade do Bordado",
    pronunciation: "qua-li-da-de do bor-da-do",
    level: "Iniciante 🟢",
    category: "Terminologia Geral",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim qualitas (natureza, propriedade intrínseca de algo). No contexto têxtil industrial, designa o conjunto de atributos visuais, táteis e estruturais que conferem perfeição, durabilidade e valor estético à peça bordada.",
    summary: "Grau de excelência técnica e estética de uma peça bordada, avaliado pela precisão dos contornos, ausência de enrugamento, estabilidade dimensional e balanço de tensão.",
    definition: "A qualidade do bordado é a conformidade total entre o design digitalizado e o resultado físico têxtil. Envolve nitidez óptica, densidade homogênea sem sobrecarga, casamento milimétrico entre contornos e preenchimentos, toque suave (ausência do aspecto 'placa de ferro') e resistência mecânica a lavagens repetidas.",
    technicalDetails: "A avaliação técnica baseia-se no tripé 'Tecido + Estabilizador + Matriz'. Um bordado de alta qualidade apresenta proporção de 1/3 de linha inferior (bobina) centralizada no verso em pontos satim, linhas de corte limpas, arremates invisíveis e ausência de deformação ou franzimento (puckering) no tecido circundante.",
    beginnerExplanation: "É o resultado final perfeito: quando o desenho fica lisinho, as letras não ficam tortas nem falhadas, o tecido não repuxa nem enruga ao redor e as linhas não soltam nem formam nós.",
    howItWorks: [
      "1. Digitalização equilibrada: matriz com compensação de encolhimento e suporte corretos.",
      "2. Estabilização e bastidor: tecido esticado com tensão uniforme (efeito tambor de pele).",
      "3. Mecânica e insumos: agulha no calibre correto e passagem de linha sem atrito.",
      "4. Formação do ponto: laçadas consistentes sem folga no topo e sem linha da bobina subindo."
    ],
    applications: [
      "Inspeção de qualidade final em lotes corporativos de camisas polo.",
      "Controle de padrão visual em enxovais de bebê de alta sensibilidade tátil.",
      "Avaliação de uniformes profissionais sujeitos a lavagens industriais intensas."
    ],
    characteristics: [
      "Contornos perfeitamente alinhados aos preenchimentos sem frestas brancas.",
      "Verso limpo com arremates curtos e laçadas regulares de 1/3 no centro das colunas.",
      "Superfície plana do tecido sem ondulações periféricas."
    ],
    commonErrors: [
      "❌ Avaliar a qualidade apenas pela frente do bordado, ignorando nós e laçadas no verso.",
      "❌ Culpar a máquina por falhas que decorrem de matriz mal programada ou entretela fraca.",
      "❌ Aumentar excessivamente a densidade na tentativa de cobrir falhas de entretela."
    ],
    troubleshootingTips: [
      "Tecido repuxado: reforce a entretela e aplique compensação de encolhimento (Pull Compensation).",
      "Fios brancos aparecendo na frente: afrouxe a tensão superior ou aperte levemente a caixa da bobina.",
      "Contorno deslocado do recheio: altere a direção dos pontos de suporte e aumente a sobreposição."
    ],
    dicaArtrelados: "O segredo de ouro está no avesso! Vire o bordado: a linha branca de baixo deve ficar certinha no meio da coluna, e o verso deve estar limpinho, sem nós nem bolo de linha. Se o verso estiver bonito, a frente fica perfeita!",
    voceSabia: "Na indústria aeroespacial e militar, os bordados de insígnias passam por testes ópticos computadorizados de reflexão de luz para garantir que a densidade do ponto satim não varie mais do que 0,02 mm.",
    practicalExercise: "Pegue um retalho de tecido plano e borde uma matriz de teste com círculos satim e quadrados tatami. Ao retirar do bastidor, examine com lupa o alinhamento do contorno e meça a proporção da linha no verso.",
    quickSummary: "Qualidade do bordado é a perfeita harmonia entre matriz, tecido, entretela e máquina, resultando em nitidez, toque agradável e durabilidade.",
    relatedTerms: ["Qualidade da Matriz", "Qualidade do Ponto", "Balanço de Tensão", "Compensação de Encolhimento"],
    imageUrl: "/images/q001_qualidade_bordado_v2.jpg?v=2",
    imageCaption: "Como reconhecer a qualidade do bordado: na frente, o tecido liso e os pontos sem frestas; no verso (avesso), a linha branca bem dividida no meio sem embolar fios.",
    tags: ["qualidade", "inspeção", "acabamento", "fundamentos"]
  },
  {
    id: "qualidade-da-matriz",
    code: "Q-002",
    letter: "Q",
    term: "Qualidade da Matriz",
    pronunciation: "qua-li-da-de da ma-triz",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim matrix (origem, molde gerador). Na programação computorizada de bordados, refere-se à estrutura de comandos vetoriais e sequenciamento de pontos gerados no software.",
    summary: "Nível de excelência técnica na digitalização de um arquivo de bordado, englobando sequenciamento lógico, compensação de puxamento e camadas de suporte.",
    definition: "A qualidade da matriz é a inteligência embutida no arquivo digital (DST, PES, EXP, EMB). Uma matriz de alta qualidade minimiza saltos desnecessários, reduz trocas de cor supérfluas, planeja a expansão física do tecido e insere pontos de suporte adequados para evitar distorções estruturais.",
    technicalDetails: "Uma matriz profissional possui fluxo de bordado de dentro para fora ou do centro para as extremidades, evitando empurramento do tecido. Além disso, modula a densidade conforme a espessura da linha e insere ramificações (branching) para costuras contínuas sem paradas bruscas.",
    beginnerExplanation: "É o 'mapa' que a máquina lê. Se o programador desenhou caminhos inteligentes, a máquina borda rápido, sem quebrar linha e sem repuxar o tecido.",
    howItWorks: [
      "1. Estruturação do suporte (underlay) proporcional à área e ao tecido alvo.",
      "2. Sequenciamento progressivo que reduz viagens longas do pantógrafo.",
      "3. Arremates automáticos embutidos no início e fim de cada segmento.",
      "4. Ângulos de ponto dinâmicos que geram brilho e impedem acúmulo de perfurações no mesmo local."
    ],
    applications: [
      "Digitalização de logotipos corporativos com letras minúsculas nítidas.",
      "Criação de matrizes para tecidos elásticos com reforço de compensação lateral.",
      "Otimização de arquivos comerciais para corte de tempo de máquina em produção."
    ],
    characteristics: [
      "Número otimizado de pontos sem densidades redundantes.",
      "Sequência de cores lógica agrupando elementos do mesmo tom.",
      "Caminhos de viagem (travel runs) escondidos sob preenchimentos posteriores."
    ],
    commonErrors: [
      "❌ Fazer digitalização automática (auto-digitizing) sem conferir densidade e ângulos.",
      "❌ Deixar saltos longos atravessando o bordado sem arremate prévio.",
      "❌ Programar objetos grandes com apenas uma direção de ponto tatami."
    ],
    troubleshootingTips: [
      "Linha quebrando no início das letras: adicione pontos de amarração suave (Tie-in) na matriz.",
      "Bordado muito rígido: reduza a densidade em 15% e confira se não há dois preenchimentos sobrepostos.",
      "Máquina parando a todo momento: agrupe os blocos de mesma cor no software."
    ],
    dicaArtrelados: "Antes de rodar 50 peças na máquina, sempre faça uma peça piloto com a matriz nova. Um bom programador sempre valida o comportamento real do fio e do tecido.",
    voceSabia: "Uma matriz mal otimizada pode gastar até 40% mais tempo de máquina e 30% a mais de linha comparada a uma matriz digitalizada com técnicas avançadas de branching e sequenciamento.",
    practicalExercise: "Abra um software de bordado, importe um arquivo e utilize o simulador de costura (Stitch Player). Observe a ordem dos objetos e identifique onde há saltos que poderiam ser evitados.",
    quickSummary: "Qualidade da matriz é a programação inteligente do arquivo digital que garante fluidez de costura, estabilidade do tecido e fidelidade visual.",
    relatedTerms: ["Qualidade do Bordado", "Compensação de Encolhimento", "Sequenciamento", "Pontos de Suporte"],
    tags: ["matriz", "digitalização", "programação", "software"]
  },
  {
    id: "qualidade-do-ponto",
    code: "Q-003",
    letter: "Q",
    term: "Qualidade do Ponto",
    pronunciation: "qua-li-da-de do pon-to",
    level: "Iniciante 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim punctum (picada, furo feito por ponta afiada). No bordado, expressa a conformação geométrica e a integridade de cada laçada individual produzida pela agulha e pela lançadeira.",
    summary: "Perfeição individual e coletiva das laçadas na superfície têxtil, sem fios soltos, laçadas abertas ou desfiamento.",
    definition: "A qualidade do ponto é o estado de firmeza, assentamento e definição de cada inserção de agulha. Manifesta-se pelo paralelismo absoluto em colunas satim, granulação uniforme em preenchimentos tatami e linearidade sem desvios em pespontos corridos.",
    technicalDetails: "Depende da sincronia entre a descida da barra da agulha e a ponta da lançadeira (timing), além do estado físico da ponta da agulha (ausência de rebarbas) e da lubrificação correta dos componentes mecânicos.",
    beginnerExplanation: "É ver cada pontinho reto, brilhante e bem esticado, sem parecer frouxo nem repuxado demais a ponto de furar o tecido.",
    howItWorks: [
      "1. A agulha penetra no tecido levando a linha superior.",
      "2. Na subida de cerca de 2 mm, forma-se o laço (loop).",
      "3. A ponta da lançadeira captura a laçada e a entrelaça com a linha da bobina.",
      "4. A alavanca estica-fio sobe recolhendo a folga e travando o ponto no centro do tecido."
    ],
    applications: [
      "Bordados em fios metálicos exigindo deslizamento sem fricção.",
      "Monogramas pequenos em lenços de seda e cambraia fina.",
      "Costuras de união e contornos de alta definição em apliques."
    ],
    characteristics: [
      "Linha esticada suavemente sobre o tecido sem folgas ou ondulações.",
      "Bordas dos pontos cheios retas e bem delimitadas.",
      "Ausência de desfiamento das fibras do filamento de poliéster ou viscose."
    ],
    commonErrors: [
      "❌ Trabalhar com agulha cega ou torta que deforma a laçada.",
      "❌ Ignorar poeira e fiapos acumulados na caixa da bobina.",
      "❌ Usar linha de bordar com prazo de validade vencido ou ressecada."
    ],
    troubleshootingTips: [
      "Pontos pulando: verifique se a agulha está inserida até o batente superior.",
      "Laçadas frouxas tipo 'ninho de pássaro': passe a linha superior novamente garantindo que entrou nos discos de tensão.",
      "Pontos rasgando o tecido: reduza a velocidade e troque por agulha ponta bola em malhas."
    ],
    dicaArtrelados: "Passe a ponta do dedo levemente sobre a coluna satim: a sensação deve ser de uma superfície macia e contínua, como uma fita de cetim acetinada.",
    voceSabia: "Em uma máquina operando a 800 PPM, a laçada do ponto é formada, entrelaçada e puxada em menos de 0,075 segundos por ciclo.",
    practicalExercise: "Borde uma tira de 10 cm de ponto satim com 4 mm de largura. Observe a uniformidade das bordas e meça com paquímetro se a largura se manteve constante do início ao fim.",
    quickSummary: "Qualidade do ponto é a firmeza e precisão da laçada formada entre a agulha e a lançadeira, gerando beleza visual e toque suave.",
    relatedTerms: ["Ponto Satim", "Ponto Tatami", "Formação da Laçada", "Tensão de Linha"],
    tags: ["ponto", "laçada", "mecânica", "qualidade"]
  },
  {
    id: "qualidade-do-preenchimento",
    code: "Q-004",
    letter: "Q",
    term: "Qualidade do Preenchimento",
    pronunciation: "qua-li-da-de do pre-en-chi-men-to",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim plenus (cheio, completo). Refere-se à capacidade de cobrir superfícies amplas de tecido com pontos tatami ou preenchimentos complexos.",
    summary: "Uniformidade, cobertura e textura de grandes áreas bordadas com pontos tatami, sem falhas de cobertura nem rigidez excessiva.",
    definition: "A qualidade do preenchimento avalia como áreas amplas de bordado são cobertas. Uma área bem preenchida não permite que o tecido de fundo apareça indesejadamente (fator de cobertura), não cria efeito 'armadura de ferro' e distribui as tensões para não deformar a geometria da peça.",
    technicalDetails: "Calculada pela relação entre o comprimento do ponto (3.5 a 4.5 mm), o espaçamento entre linhas (densidade de 0.38 a 0.45 mm), o ângulo de inclinação (stitch angle) e o deslocamento das penetrações (padrão de partição).",
    beginnerExplanation: "É quando uma parte grande do desenho (como o corpo de um urso ou uma bandeira) fica toda preenchida de cor de forma bonita, sem falhas e sem deixar o tecido duro como papelão.",
    howItWorks: [
      "1. Execução de uma camada de suporte em grade (grid underlay) ou tatami leve.",
      "2. Distribuição das linhas de ponto com espaçamento matematicamente calibrado.",
      "3. Cruzamento de ângulos entre o suporte e a camada principal para anular o afundamento.",
      "4. Partição regular dos pontos para evitar linhas indesejadas de divisória óptica."
    ],
    applications: [
      "Preenchimento de brasões e bandeiras de grandes dimensões.",
      "Fundos de paisagens e bordados artísticos com degradê.",
      "Bordados em toalhas de banho felpudas com topping para evitar que a felpa atravesse."
    ],
    characteristics: [
      "Superfície plana, lisa e acetinada sem marcas verticais acidentais.",
      "Flexibilidade da peça preservada para uso confortável.",
      "Bordas externas precisas para receber os contornos posteriores."
    ],
    commonErrors: [
      "❌ Usar densidade ultra-apertada (menor que 0.30 mm) acumulando linhas e quebrando agulhas.",
      "❌ Borda sem suporte prévio causando afastamento entre o preenchimento e a moldura.",
      "❌ Usar o mesmo ângulo de ponto para o preenchimento e para o suporte."
    ],
    troubleshootingTips: [
      "Tecido aparecendo entre as linhas: aumente levemente a densidade ou mude o ângulo para 45°.",
      "Bordado ondulado como telha: utilize entretela de maior gramatura e mude o ângulo do tatami.",
      "Linhas retas indesejadas no meio do desenho: altere o padrão de divisão (partition) dos pontos no software."
    ],
    dicaArtrelados: "Para tecidos leves, use preenchimentos tatami abertos (densidade 0.50 mm a 0.60 mm) sobrepostos em dois ângulos diferentes em vez de uma única camada hiperdensa.",
    voceSabia: "O ponto tatami tem esse nome inspirado nas tradicionais esteiras japonesas de palha trançada, que possuem exatamente o mesmo padrão de linhas intercaladas.",
    practicalExercise: "Crie um quadrado de 5x5 cm com tatami em ângulo de 0° e outro em 45°. Compare a flexibilidade de ambos após o bordado sobre uma malha de algodão.",
    quickSummary: "Qualidade do preenchimento é o equilíbrio perfeito entre cobertura visual completa e maleabilidade têxtil em áreas amplas.",
    relatedTerms: ["Ponto Tatami", "Densidade", "Ângulo de Ponto", "Pontos de Suporte"],
    tags: ["preenchimento", "tatami", "densidade", "cobertura"]
  },
  {
    id: "qualidade-do-contorno",
    code: "Q-005",
    letter: "Q",
    term: "Qualidade do Contorno",
    pronunciation: "qua-li-da-de do con-tor-no",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do italiano contorno (linha que delimita uma figura). No bordado, refere-se ao alinhamento exato e à definição geométrica das linhas perimetrais.",
    summary: "Precisão cirúrgica de alinhamento e espessura das linhas perimetrais em relação às áreas preenchidas, sem desvios ou frestas.",
    definition: "A qualidade do contorno expressa o perfeito fechamento visual do desenho bordado. Caracteriza-se pelo casamento milimétrico entre o contorno (em ponto corrido, triplo ou satim fino) e as bordas das áreas internas preenchidas, sem apresentar espaços vazios (gaps) ou sobreposições tortas.",
    technicalDetails: "Depende diretamente da compensação de encolhimento (Pull Compensation) aplicada na matriz, da firmeza do bastidoramento e da estabilidade dimensional proporcionada pela entretela correta.",
    beginnerExplanation: "É quando a 'linha preta' que contorna o desenho fica exatamente em cima da bordinha da cor, sem deixar aquela fresta branca feia parecendo que o desenho escapou da linha.",
    howItWorks: [
      "1. A matriz antecipa a contração do tecido causada pelo preenchimento interno.",
      "2. O contorno é programado para sobrepor a borda interna em pelo menos 0,5 a 1,0 mm.",
      "3. O ponto é executado após o assentamento total da base interna.",
      "4. O estabilizador trava a trama do tecido para que o pantógrafo retorne com precisão micrométrica à coordenada exata."
    ],
    applications: [
      "Desenhos animados e personagens com contornos pretos marcantes.",
      "Bordados de letras com borda contrastante (outline lettering).",
      "Contornos de aplique garantindo o corte limpo do tecido sobreposto."
    ],
    characteristics: [
      "Encaixe milimétrico sem vazamentos de fundo.",
      "Espessura homogênea da linha de contorno em curvas e retas.",
      "Cantos nítidos com compensação de cantos (Smart Corners / Canto em Mitra)."
    ],
    commonErrors: [
      "❌ Borda do contorno separada do recheio por falta de compensação de encolhimento.",
      "❌ Contorno bordado antes do preenchimento, sendo esmagado e deformado depois.",
      "❌ Bastidor folgado fazendo o tecido se deslocar durante o bordado."
    ],
    troubleshootingTips: [
      "Contorno 'fugindo' para um lado: aumente a compensação de puxamento no sentido perpendicular aos pontos.",
      "Contorno afundando no tecido: coloque uma camada de filme solúvel (topping) por cima.",
      "Cantos arredondados onde deveriam ser pontudos: ative a redução automática de pontos em cantos no software."
    ],
    dicaArtrelados: "Sempre borde os preenchimentos primeiro e deixe os contornos para o final do bloco de desenho, garantindo que o tecido já tenha assentado todas as suas forças.",
    voceSabia: "O olho humano é extremamente sensível a desalinhamentos: conseguimos perceber um espaço vazio de apenas 0,3 mm entre um contorno preto e um fundo colorido.",
    practicalExercise: "Digitalize um círculo com preenchimento amarelo e contorno preto. Borde em malha sem compensação de encolhimento e outro com 0,4 mm de Pull Compensation. Compare os dois resultados lado a lado.",
    quickSummary: "Qualidade do contorno é o alinhamento impecável entre linhas perimetrais e fundos coloridos, evitando frestas indesejadas.",
    relatedTerms: ["Compensação de Encolhimento", "Ponto Corrido", "Ponto Triplo", "Efeito de Puxamento"],
    tags: ["contorno", "precisão", "alinhamento", "deslocamento"]
  },
  {
    id: "qualidade-da-coluna-satin",
    code: "Q-006",
    letter: "Q",
    term: "Qualidade da Coluna Satin",
    pronunciation: "qua-li-da-de da co-lu-na sa-tim",
    level: "Avançado 🔴",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do árabe zaytuni (cetim, tecido lustroso originário de Quanzhou, China). Refere-se à coluna de pontos cheios zig-zag contínuos.",
    summary: "Brilho, paralelismo, definição de borda e controle de densidade em colunas de ponto cheio e tipografias bordadas.",
    definition: "A qualidade da coluna satin mede a perfeição geométrica dos traços de ponto cheio. Envolve o paralelismo exato dos fios, o brilho contínuo proporcionado pelo alinhamento óptico das fibras, a espessura adequada (ideal entre 1.5 e 7 mm) e o uso de pontos curtos (short stitches) em curvas fechadas para evitar acúmulos.",
    technicalDetails: "Uma coluna de alta performance utiliza suporte de linha central (center run) ou zigue-zague interno (edge run), densidade modulada entre 0.38 e 0.42 mm e controle rigoroso de tensão para que a laçada não 'estrangule' o tecido.",
    beginnerExplanation: "É a perfeição das letrinhas e dos arabescos: quando as bordas ficam bem retinhas, os fios ficam perfeitamente paralelos e brilhando, sem parecer frouxos nem embolados.",
    howItWorks: [
      "1. Criação de suporte interno para dar volume e ancorar a coluna no tecido.",
      "2. Lançamento alternado de pontos de um lado a outro do vetor com espaçamento uniforme.",
      "3. Inserção automática de pontos curtos no lado interno das curvas.",
      "4. Finalização com arremate de travamento seguro no final da coluna."
    ],
    applications: [
      "Textos, nomes e monogramas de alta precisão em camisas e toalhas.",
      "Bordas de brasões e emblemas termocolantes.",
      "Elementos ornamentais florais e arabescos clássicos."
    ],
    characteristics: [
      "Brilho acetinado uniforme em toda a extensão do traço.",
      "Bordas perfeitamente paralelas sem 'dentes de serra' ou oscilações.",
      "Espessura equilibrada sem passar do limite que causaria laçadas frouxas (> 8 mm)."
    ],
    commonErrors: [
      "❌ Fazer colunas satim com mais de 8 mm de largura sem converter para tatami ou satim dividido.",
      "❌ Curvas fechadas sem pontos curtos gerando um nó espesso de linha que quebra a agulha.",
      "❌ Falta de suporte interno fazendo a coluna 'afundar' na trama do tecido."
    ],
    troubleshootingTips: [
      "Coluna muito fina (< 1 mm) cortando o tecido: aumente a largura ou troque para ponto corrido.",
      "Fios soltos no meio de colunas largas: ative a função 'Split Satin' (Satim Dividido) no software.",
      "Linha da bobina aparecendo nas bordas: solte a tensão superior ou use linha de bordar com calibragem correta."
    ],
    dicaArtrelados: "Para monogramas em toalhas atoalhadas, use sempre suporte duplo (Center Walk + Edge Walk) e uma camada de plástico hidrossolúvel em cima: suas letras satim parecerão flutuar em alto-relevo.",
    voceSabia: "O ponto satim tem o maior poder de reflexão de luz entre todos os tipos de pontos de bordado porque as fibras de poliéster ficam esticadas paralelamente sem interrupções.",
    practicalExercise: "Borde o alfabeto em caixa alta com altura de 15 mm usando fonte satim. Avalie a clareza de cada letra e verifique se as curvas mantiveram a mesma densidade das retas.",
    quickSummary: "Qualidade da coluna satin é o acabamento brilhante e linear de letras e detalhes através de pontos cheios bem suportados e calibrados.",
    relatedTerms: ["Ponto Satim", "Pontos Curtos", "Satim Dividido", "Letras Bordadas"],
    tags: ["satin", "ponto cheio", "letras", "brilho"]
  },
  {
    id: "qualidade-da-digitalizacao",
    code: "Q-007",
    letter: "Q",
    term: "Qualidade da Digitalização",
    pronunciation: "qua-li-da-de da di-gi-ta-li-za-cao",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês digitizing (conversão de arte gráfica em comandos numéricos de coordenadas X-Y para máquinas de bordar).",
    summary: "Habilidade técnica do programador em transformar uma arte gráfica em um arquivo de bordado fluído, eficiente e esteticamente perfeito.",
    definition: "A qualidade da digitalização reflete a competência técnica e artística do programador (puncher/digitizer). Diferencia-se da vetorização comum por considerar as propriedades físicas dos materiais: elasticidade têxtil, atrito do fio, comportamento da lançadeira, encolhimento e relevo tridimensional.",
    technicalDetails: "Uma digitalização profissional compreende o uso correto de curvas de Bezier, controle de nós vetoriais, aplicação cirúrgica de pontos de suporte, ordenamento de camadas por profundidade visual e minimização de cortes de linha.",
    beginnerExplanation: "É a arte de desenhar no computador pensando como a agulha e a linha vão se comportar no tecido, e não apenas 'copiar e colar' uma foto no programa.",
    howItWorks: [
      "1. Análise da imagem e simplificação de detalhes impossíveis de bordar com agulha física.",
      "2. Criação manual de objetos com ângulos de ponto adequados a cada volume.",
      "3. Configuração de parâmetros de entrada, saída e caminhos de ligação internos.",
      "4. Definição da física de compensação conforme o tecido no qual será bordado."
    ],
    applications: [
      "Desenvolvimento de matrizes profissionais para marcas de moda e confecções industriais.",
      "Adaptação de logotipos corporativos complexos para pequenos tamanhos de bolso.",
      "Restauração e repaginação de arquivos antigos ou com erros de programação."
    ],
    characteristics: [
      "Bordado roda macio na máquina sem paradas ou quebras de fio.",
      "Toque leve da peça bordada sem peso de linhas desnecessárias.",
      "Fidelidade artística absoluta à identidade visual original."
    ],
    commonErrors: [
      "❌ Confiar cegamente em ferramentas automáticas de 'um clique' do software sem ajustes manuais.",
      "❌ Ignorar a espessura física do fio (40wt tem cerca de 0,2 mm de diâmetro real).",
      "❌ Não definir pontos de arremate adequados antes de saltos longos."
    ],
    troubleshootingTips: [
      "Bordado demorando demais: resequencie os objetos no painel de lista de objetos para evitar saltos cruzados.",
      "Letras pequenas ilegíveis: reduza a densidade e use suporte central único em vez de tatami sob colunas estreitas.",
      "Nós constantes na troca de cor: configure o comando de corte com retração de linha correta."
    ],
    dicaArtrelados: "Digitalizar bordado não é desenho gráfico; é escultura com agulha e linha. Pense sempre em qual elemento está 'embaixo' e qual está 'em cima' no relevo da peça.",
    voceSabia: "Antigamente, as matrizes de bordado eram perfuradas manualmente em fitas de papel cartão (fitas Jacquard) ponto a ponto antes do surgimento dos softwares em computadores pessoais.",
    practicalExercise: "Digitalize manualmente um pequeno logotipo de três cores. Compare o tempo de bordado e o resultado estético com a versão digitalizada automaticamente pelo mesmo software.",
    quickSummary: "Qualidade da digitalização é o domínio dos parâmetros de software para criar matrizes que rodam com rapidez, segurança mecânica e beleza estética.",
    relatedTerms: ["Digitalização de Matrizes", "Sequenciamento", "Compensação de Encolhimento", "Branching"],
    tags: ["digitalização", "programação", "software", "vetorização"]
  },
  {
    id: "qualidade-da-imagem-de-referencia",
    code: "Q-008",
    letter: "Q",
    term: "Qualidade da Imagem de Referência",
    pronunciation: "qua-li-da-de da i-ma-gem de re-fe-ren-cia",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim imago (representação visual, retrato). No processo de criação de matrizes, é o arquivo de origem (JPG, PNG, PDF, AI, SVG) usado como base de desenho.",
    summary: "Nitidez, resolução e contraste da arte gráfica que serve como modelo para a programação da matriz de bordado.",
    definition: "A qualidade da imagem de referência determina a facilidade e a precisão com que o digitalizador consegue delimitar formas, identificar cores reais e definir traçados vetoriais. Imagens em alta resolução (300 DPI) ou arquivos vetoriais nativos evitam erros de interpretação e economizam horas de trabalho.",
    technicalDetails: "Imagens com ruído de compressão JPG (artefatos ao redor dos contornos) ou baixa resolução (abaixo de 72 DPI) distorcem as bordas, dificultando a definição exata dos ângulos e larguras de colunas satim.",
    beginnerExplanation: "É a foto ou o arquivo do desenho que o cliente envia. Quanto mais nítido e sem borrões for esse desenho, mais bonito e perfeito será o bordado final.",
    howItWorks: [
      "1. Importação da imagem para a tela de fundo do software de bordado.",
      "2. Calibração da escala real em milímetros para conferência de medidas.",
      "3. Redução de ruído e separação cromática das áreas principais.",
      "4. Traçado dos vetores com base nas arestas nítidas da imagem."
    ],
    applications: [
      "Digitalização de logos enviados em vetor (CDR, AI, SVG) para fidelidade corporativa.",
      "Limpeza gráfica de fotos de desenhos feitos à mão por crianças para bordados afetivos.",
      "Ajuste de contraste de emblemas antigos para restauração de matrizes."
    ],
    characteristics: [
      "Bordas limpas com contraste evidente entre cores vizinhas.",
      "Resolução mínima recomendada de 300 DPI em escala real 1:1.",
      "Ausência de sombras ou gradientes excessivos que não podem ser traduzidos para fios."
    ],
    commonErrors: [
      "❌ Trabalhar com capturas de tela (prints) de baixa qualidade tiradas de redes sociais.",
      "❌ Usar fotos tiradas com ângulo torto ou com sombras cobrindo partes do logo.",
      "❌ Tentar aplicar digitalização automática sobre imagens pixeladas e embaçadas."
    ],
    troubleshootingTips: [
      "Imagem muito embaçada: solicite ao cliente o arquivo original em PDF, EPS ou vetor.",
      "Cores indefinidas: aplique um filtro de contraste e nitidez em um editor de imagens antes de importar no software.",
      "Desenho torto na foto: alinhe o horizonte da imagem usando a ferramenta de rotação de tela."
    ],
    dicaArtrelados: "Ensine seu cliente a sempre enviar a arte em formato vetorizado ou PDF de alta resolução. Isso economiza seu tempo de programação e garante um resultado impecável.",
    voceSabia: "Uma imagem de 72 DPI ampliada para um bordado de costas de jaqueta (25 cm) pode ter pixels individuais maiores que a própria largura de uma coluna de ponto cheio.",
    practicalExercise: "Importe no software uma imagem em 72 DPI e a mesma imagem em vetor SVG. Aproxime com o zoom a 800% e observe a diferença na nitidez das bordas para o traçado dos pontos.",
    quickSummary: "Qualidade da imagem de referência é a base visual limpa e de alta resolução que permite a criação precisa e ágil da matriz de bordado.",
    relatedTerms: ["Digitalização de Matrizes", "Resolução DPI", "Vetorização", "Ficha Técnica"],
    tags: ["imagem", "arte", "vetor", "resolução"]
  }
];

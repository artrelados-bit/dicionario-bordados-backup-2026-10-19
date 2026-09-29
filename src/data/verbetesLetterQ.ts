import { Verbete } from "../types";

export const VERBETES_LETTER_Q: Verbete[] = [
  {
    "id": "qualidade-do-bordado",
    "code": "Q-001",
    "letter": "Q",
    "term": "Qualidade do Bordado",
    "pronunciation": "qua-li-da-de do bor-da-do",
    "level": "Iniciante 🟢",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim qualitas (natureza, propriedade intrínseca de algo). No contexto têxtil industrial, designa o conjunto de atributos visuais, táteis e estruturais que conferem perfeição, durabilidade e valor estético à peça bordada.",
    "summary": "Grau de excelência técnica e estética de uma peça bordada, avaliado pela precisão dos contornos, ausência de enrugamento, estabilidade dimensional e balanço de tensão.",
    "definition": "A qualidade do bordado é a conformidade total entre o design digitalizado e o resultado físico têxtil. Envolve nitidez óptica, densidade homogênea sem sobrecarga, casamento milimétrico entre contornos e preenchimentos, toque suave (ausência do aspecto 'placa de ferro') e resistência mecânica a lavagens repetidas.",
    "technicalDetails": "A avaliação técnica baseia-se no tripé 'Tecido + Estabilizador + Matriz'. Um bordado de alta qualidade apresenta proporção de 1/3 de linha inferior (bobina) centralizada no verso em pontos satim, linhas de corte limpas, arremates invisíveis e ausência de deformação ou franzimento (puckering) no tecido circundante.",
    "beginnerExplanation": "É o resultado final perfeito: quando o desenho fica lisinho, as letras não ficam tortas nem falhadas, o tecido não repuxa nem enruga ao redor e as linhas não soltam nem formam nós.",
    "howItWorks": [
      "1. Digitalização equilibrada: matriz com compensação de encolhimento e suporte corretos.",
      "2. Estabilização e bastidor: tecido esticado com tensão uniforme (efeito tambor de pele).",
      "3. Mecânica e insumos: agulha no calibre correto e passagem de linha sem atrito.",
      "4. Formação do ponto: laçadas consistentes sem folga no topo e sem linha da bobina subindo."
    ],
    "applications": [
      "Inspeção de qualidade final em lotes corporativos de camisas polo.",
      "Controle de padrão visual em enxovais de bebê de alta sensibilidade tátil.",
      "Avaliação de uniformes profissionais sujeitos a lavagens industriais intensas."
    ],
    "characteristics": [
      "Contornos perfeitamente alinhados aos preenchimentos sem frestas brancas.",
      "Verso limpo com arremates curtos e laçadas regulares de 1/3 no centro das colunas.",
      "Superfície plana do tecido sem ondulações periféricas."
    ],
    "commonErrors": [
      "❌ Avaliar a qualidade apenas pela frente do bordado, ignorando nós e laçadas no verso.",
      "❌ Culpar a máquina por falhas que decorrem de matriz mal programada ou entretela fraca.",
      "❌ Aumentar excessivamente a densidade na tentativa de cobrir falhas de entretela."
    ],
    "troubleshootingTips": [
      "Tecido repuxado: reforce a entretela e aplique compensação de encolhimento (Pull Compensation).",
      "Fios brancos aparecendo na frente: afrouxe a tensão superior ou aperte levemente a caixa da bobina.",
      "Contorno deslocado do recheio: altere a direção dos pontos de suporte e aumente a sobreposição."
    ],
    "dicaArtrelados": "O segredo de ouro está no avesso! Vire o bordado: a linha branca de baixo deve ficar certinha no meio da coluna, e o verso deve estar limpinho, sem nós nem bolo de linha. Se o verso estiver bonito, a frente fica perfeita!",
    "voceSabia": "Na indústria aeroespacial e militar, os bordados de insígnias passam por testes ópticos computadorizados de reflexão de luz para garantir que a densidade do ponto satim não varie mais do que 0,02 mm.",
    "practicalExercise": "Pegue um retalho de tecido plano e borde uma matriz de teste com círculos satim e quadrados tatami. Ao retirar do bastidor, examine com lupa o alinhamento do contorno e meça a proporção da linha no verso.",
    "quickSummary": "Qualidade do bordado é a perfeita harmonia entre matriz, tecido, entretela e máquina, resultando em nitidez, toque agradável e durabilidade.",
    "relatedTerms": [
      "Qualidade da Matriz",
      "Qualidade do Ponto",
      "Balanço de Tensão",
      "Compensação de Encolhimento"
    ],
    "imageUrl": "/images/q001_qualidade_bordado_v2.jpg?v=2",
    "imageCaption": "Como reconhecer a qualidade do bordado: na frente, o tecido liso e os pontos sem frestas; no verso (avesso), a linha branca bem dividida no meio sem embolar fios.",
    "tags": [
      "qualidade",
      "inspeção",
      "acabamento",
      "fundamentos"
    ]
  },
  {
    "id": "qualidade-da-matriz",
    "code": "Q-002",
    "letter": "Q",
    "term": "Qualidade da Matriz",
    "pronunciation": "qua-li-da-de da ma-triz",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim matrix (origem, molde gerador). Na programação computorizada de bordados, refere-se à estrutura de comandos vetoriais e sequenciamento de pontos gerados no software.",
    "summary": "Nível de excelência técnica na digitalização de um arquivo de bordado, englobando sequenciamento lógico, compensação de puxamento e camadas de suporte.",
    "definition": "A qualidade da matriz é a inteligência embutida no arquivo digital (DST, PES, EXP, EMB). Uma matriz de alta qualidade minimiza saltos desnecessários, reduz trocas de cor supérfluas, planeja a expansão física do tecido e insere pontos de suporte adequados para evitar distorções estruturais.",
    "technicalDetails": "Uma matriz profissional possui fluxo de bordado de dentro para fora ou do centro para as extremidades, evitando empurramento do tecido. Além disso, modula a densidade conforme a espessura da linha e insere ramificações (branching) para costuras contínuas sem paradas bruscas.",
    "beginnerExplanation": "É o 'mapa' que a máquina lê. Se o programador desenhou caminhos inteligentes, a máquina borda rápido, sem quebrar linha e sem repuxar o tecido.",
    "howItWorks": [
      "1. Estruturação do suporte (underlay) proporcional à área e ao tecido alvo.",
      "2. Sequenciamento progressivo que reduz viagens longas do pantógrafo.",
      "3. Arremates automáticos embutidos no início e fim de cada segmento.",
      "4. Ângulos de ponto dinâmicos que geram brilho e impedem acúmulo de perfurações no mesmo local."
    ],
    "applications": [
      "Digitalização de logotipos corporativos com letras minúsculas nítidas.",
      "Criação de matrizes para tecidos elásticos com reforço de compensação lateral.",
      "Otimização de arquivos comerciais para corte de tempo de máquina em produção."
    ],
    "characteristics": [
      "Número otimizado de pontos sem densidades redundantes.",
      "Sequência de cores lógica agrupando elementos do mesmo tom.",
      "Caminhos de viagem (travel runs) escondidos sob preenchimentos posteriores."
    ],
    "commonErrors": [
      "❌ Fazer digitalização automática (auto-digitizing) sem conferir densidade e ângulos.",
      "❌ Deixar saltos longos atravessando o bordado sem arremate prévio.",
      "❌ Programar objetos grandes com apenas uma direção de ponto tatami."
    ],
    "troubleshootingTips": [
      "Linha quebrando no início das letras: adicione pontos de amarração suave (Tie-in) na matriz.",
      "Bordado muito rígido: reduza a densidade em 15% e confira se não há dois preenchimentos sobrepostos.",
      "Máquina parando a todo momento: agrupe os blocos de mesma cor no software."
    ],
    "dicaArtrelados": "Antes de rodar 50 peças na máquina, sempre faça uma peça piloto com a matriz nova. Um bom programador sempre valida o comportamento real do fio e do tecido.",
    "voceSabia": "Uma matriz mal otimizada pode gastar até 40% mais tempo de máquina e 30% a mais de linha comparada a uma matriz digitalizada com técnicas avançadas de branching e sequenciamento.",
    "practicalExercise": "Abra um software de bordado, importe um arquivo e utilize o simulador de costura (Stitch Player). Observe a ordem dos objetos e identifique onde há saltos que poderiam ser evitados.",
    "quickSummary": "Qualidade da matriz é a programação inteligente do arquivo digital que garante fluidez de costura, estabilidade do tecido e fidelidade visual.",
    "imageUrl": "/images/q002_qualidade_matriz_v1.jpg?v=1",
    "imageCaption": "Engenharia de Qualidade da Matriz em 1 Agulha: sequenciamento lógico de dentro para fora, compensação de repuxo precisa para junção sem frestas, camadas de suporte estruturado e trajetos internos otimizados.",
    "relatedTerms": [
      "Qualidade do Bordado",
      "Compensação de Encolhimento",
      "Sequenciamento",
      "Pontos de Suporte"
    ],
    "tags": [
      "matriz",
      "digitalização",
      "programação",
      "software"
    ]
  },
  {
    "id": "qualidade-do-ponto",
    "code": "Q-003",
    "letter": "Q",
    "term": "Qualidade do Ponto",
    "pronunciation": "qua-li-da-de do pon-to",
    "level": "Iniciante 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim punctum (picada, furo feito por ponta afiada). No bordado, expressa a conformação geométrica e a integridade de cada laçada individual produzida pela agulha e pela lançadeira.",
    "summary": "Perfeição individual e coletiva das laçadas na superfície têxtil, sem fios soltos, laçadas abertas ou desfiamento.",
    "definition": "A qualidade do ponto é o estado de firmeza, assentamento e definição de cada inserção de agulha. Manifesta-se pelo paralelismo absoluto em colunas satim, granulação uniforme em preenchimentos tatami e linearidade sem desvios em pespontos corridos.",
    "technicalDetails": "Depende da sincronia entre a descida da barra da agulha e a ponta da lançadeira (timing), além do estado físico da ponta da agulha (ausência de rebarbas) e da lubrificação correta dos componentes mecânicos.",
    "beginnerExplanation": "É ver cada pontinho reto, brilhante e bem esticado, sem parecer frouxo nem repuxado demais a ponto de furar o tecido.",
    "howItWorks": [
      "1. A agulha penetra no tecido levando a linha superior.",
      "2. Na subida de cerca de 2 mm, forma-se o laço (loop).",
      "3. A ponta da lançadeira captura a laçada e a entrelaça com a linha da bobina.",
      "4. A alavanca estica-fio sobe recolhendo a folga e travando o ponto no centro do tecido."
    ],
    "applications": [
      "Bordados em fios metálicos exigindo deslizamento sem fricção.",
      "Monogramas pequenos em lenços de seda e cambraia fina.",
      "Costuras de união e contornos de alta definição em apliques."
    ],
    "characteristics": [
      "Linha esticada suavemente sobre o tecido sem folgas ou ondulações.",
      "Bordas dos pontos cheios retas e bem delimitadas.",
      "Ausência de desfiamento das fibras do filamento de poliéster ou viscose."
    ],
    "commonErrors": [
      "❌ Trabalhar com agulha cega ou torta que deforma a laçada.",
      "❌ Ignorar poeira e fiapos acumulados na caixa da bobina.",
      "❌ Usar linha de bordar com prazo de validade vencido ou ressecada."
    ],
    "troubleshootingTips": [
      "Pontos pulando: verifique se a agulha está inserida até o batente superior.",
      "Laçadas frouxas tipo 'ninho de pássaro': passe a linha superior novamente garantindo que entrou nos discos de tensão.",
      "Pontos rasgando o tecido: reduza a velocidade e troque por agulha ponta bola em malhas."
    ],
    "dicaArtrelados": "Passe a ponta do dedo levemente sobre a coluna satim: a sensação deve ser de uma superfície macia e contínua, como uma fita de cetim acetinada.",
    "voceSabia": "Em uma máquina operando a 800 PPM, a laçada do ponto é formada, entrelaçada e puxada em menos de 0,075 segundos por ciclo.",
    "practicalExercise": "Borde uma tira de 10 cm de ponto satim com 4 mm de largura. Observe a uniformidade das bordas e meça com paquímetro se a largura se manteve constante do início ao fim.",
    "quickSummary": "Qualidade do ponto é a firmeza e precisão da laçada formada entre a agulha e a lançadeira, gerando beleza visual e toque suave.",
    "imageUrl": "/images/q003_qualidade_ponto_v1.jpg?v=1",
    "imageCaption": "Engenharia da Qualidade do Ponto em 1 Agulha: formação perfeita da laçada têxtil, tensão balanceada com entrelaçamento centralizado, assentamento uniforme sem fios soltos e penetração precisa da agulha.",
    "relatedTerms": [
      "Ponto Satim",
      "Ponto Tatami",
      "Formação da Laçada",
      "Tensão de Linha"
    ],
    "tags": [
      "ponto",
      "laçada",
      "mecânica",
      "qualidade"
    ]
  },
  {
    "id": "qualidade-do-preenchimento",
    "code": "Q-004",
    "letter": "Q",
    "term": "Qualidade do Preenchimento",
    "pronunciation": "qua-li-da-de do pre-en-chi-men-to",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim plenus (cheio, completo). Refere-se à capacidade de cobrir superfícies amplas de tecido com pontos tatami ou preenchimentos complexos.",
    "summary": "Uniformidade, cobertura e textura de grandes áreas bordadas com pontos tatami, sem falhas de cobertura nem rigidez excessiva.",
    "definition": "A qualidade do preenchimento avalia como áreas amplas de bordado são cobertas. Uma área bem preenchida não permite que o tecido de fundo apareça indesejadamente (fator de cobertura), não cria efeito 'armadura de ferro' e distribui as tensões para não deformar a geometria da peça.",
    "technicalDetails": "Calculada pela relação entre o comprimento do ponto (3.5 a 4.5 mm), o espaçamento entre linhas (densidade de 0.38 a 0.45 mm), o ângulo de inclinação (stitch angle) e o deslocamento das penetrações (padrão de partição).",
    "beginnerExplanation": "É quando uma parte grande do desenho (como o corpo de um urso ou uma bandeira) fica toda preenchida de cor de forma bonita, sem falhas e sem deixar o tecido duro como papelão.",
    "howItWorks": [
      "1. Execução de uma camada de suporte em grade (grid underlay) ou tatami leve.",
      "2. Distribuição das linhas de ponto com espaçamento matematicamente calibrado.",
      "3. Cruzamento de ângulos entre o suporte e a camada principal para anular o afundamento.",
      "4. Partição regular dos pontos para evitar linhas indesejadas de divisória óptica."
    ],
    "applications": [
      "Preenchimento de brasões e bandeiras de grandes dimensões.",
      "Fundos de paisagens e bordados artísticos com degradê.",
      "Bordados em toalhas de banho felpudas com topping para evitar que a felpa atravesse."
    ],
    "characteristics": [
      "Superfície plana, lisa e acetinada sem marcas verticais acidentais.",
      "Flexibilidade da peça preservada para uso confortável.",
      "Bordas externas precisas para receber os contornos posteriores."
    ],
    "commonErrors": [
      "❌ Usar densidade ultra-apertada (menor que 0.30 mm) acumulando linhas e quebrando agulhas.",
      "❌ Borda sem suporte prévio causando afastamento entre o preenchimento e a moldura.",
      "❌ Usar o mesmo ângulo de ponto para o preenchimento e para o suporte."
    ],
    "troubleshootingTips": [
      "Tecido aparecendo entre as linhas: aumente levemente a densidade ou mude o ângulo para 45°.",
      "Bordado ondulado como telha: utilize entretela de maior gramatura e mude o ângulo do tatami.",
      "Linhas retas indesejadas no meio do desenho: altere o padrão de divisão (partition) dos pontos no software."
    ],
    "dicaArtrelados": "Para tecidos leves, use preenchimentos tatami abertos (densidade 0.50 mm a 0.60 mm) sobrepostos em dois ângulos diferentes em vez de uma única camada hiperdensa.",
    "voceSabia": "O ponto tatami tem esse nome inspirado nas tradicionais esteiras japonesas de palha trançada, que possuem exatamente o mesmo padrão de linhas intercaladas.",
    "practicalExercise": "Crie um quadrado de 5x5 cm com tatami em ângulo de 0° e outro em 45°. Compare a flexibilidade de ambos após o bordado sobre uma malha de algodão.",
    "quickSummary": "Qualidade do preenchimento é o equilíbrio perfeito entre cobertura visual completa e maleabilidade têxtil em áreas amplas.",
    "relatedTerms": [
      "Ponto Tatami",
      "Densidade",
      "Ângulo de Ponto",
      "Pontos de Suporte"
    ],
    "tags": [
      "preenchimento",
      "tatami",
      "densidade",
      "cobertura"
    ]
  },
  {
    "id": "qualidade-do-contorno",
    "code": "Q-005",
    "letter": "Q",
    "term": "Qualidade do Contorno",
    "pronunciation": "qua-li-da-de do con-tor-no",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do italiano contorno (linha que delimita uma figura). No bordado, refere-se ao alinhamento exato e à definição geométrica das linhas perimetrais.",
    "summary": "Precisão cirúrgica de alinhamento e espessura das linhas perimetrais em relação às áreas preenchidas, sem desvios ou frestas.",
    "definition": "A qualidade do contorno expressa o perfeito fechamento visual do desenho bordado. Caracteriza-se pelo casamento milimétrico entre o contorno (em ponto corrido, triplo ou satim fino) e as bordas das áreas internas preenchidas, sem apresentar espaços vazios (gaps) ou sobreposições tortas.",
    "technicalDetails": "Depende diretamente da compensação de encolhimento (Pull Compensation) aplicada na matriz, da firmeza do bastidoramento e da estabilidade dimensional proporcionada pela entretela correta.",
    "beginnerExplanation": "É quando a 'linha preta' que contorna o desenho fica exatamente em cima da bordinha da cor, sem deixar aquela fresta branca feia parecendo que o desenho escapou da linha.",
    "howItWorks": [
      "1. A matriz antecipa a contração do tecido causada pelo preenchimento interno.",
      "2. O contorno é programado para sobrepor a borda interna em pelo menos 0,5 a 1,0 mm.",
      "3. O ponto é executado após o assentamento total da base interna.",
      "4. O estabilizador trava a trama do tecido para que o pantógrafo retorne com precisão micrométrica à coordenada exata."
    ],
    "applications": [
      "Desenhos animados e personagens com contornos pretos marcantes.",
      "Bordados de letras com borda contrastante (outline lettering).",
      "Contornos de aplique garantindo o corte limpo do tecido sobreposto."
    ],
    "characteristics": [
      "Encaixe milimétrico sem vazamentos de fundo.",
      "Espessura homogênea da linha de contorno em curvas e retas.",
      "Cantos nítidos com compensação de cantos (Smart Corners / Canto em Mitra)."
    ],
    "commonErrors": [
      "❌ Borda do contorno separada do recheio por falta de compensação de encolhimento.",
      "❌ Contorno bordado antes do preenchimento, sendo esmagado e deformado depois.",
      "❌ Bastidor folgado fazendo o tecido se deslocar durante o bordado."
    ],
    "troubleshootingTips": [
      "Contorno 'fugindo' para um lado: aumente a compensação de puxamento no sentido perpendicular aos pontos.",
      "Contorno afundando no tecido: coloque uma camada de filme solúvel (topping) por cima.",
      "Cantos arredondados onde deveriam ser pontudos: ative a redução automática de pontos em cantos no software."
    ],
    "dicaArtrelados": "Sempre borde os preenchimentos primeiro e deixe os contornos para o final do bloco de desenho, garantindo que o tecido já tenha assentado todas as suas forças.",
    "voceSabia": "O olho humano é extremamente sensível a desalinhamentos: conseguimos perceber um espaço vazio de apenas 0,3 mm entre um contorno preto e um fundo colorido.",
    "practicalExercise": "Digitalize um círculo com preenchimento amarelo e contorno preto. Borde em malha sem compensação de encolhimento e outro com 0,4 mm de Pull Compensation. Compare os dois resultados lado a lado.",
    "quickSummary": "Qualidade do contorno é o alinhamento impecável entre linhas perimetrais e fundos coloridos, evitando frestas indesejadas.",
    "relatedTerms": [
      "Compensação de Encolhimento",
      "Ponto Corrido",
      "Ponto Triplo",
      "Efeito de Puxamento"
    ],
    "tags": [
      "contorno",
      "precisão",
      "alinhamento",
      "deslocamento"
    ]
  },
  {
    "id": "qualidade-da-coluna-satin",
    "code": "Q-006",
    "letter": "Q",
    "term": "Qualidade da Coluna Satin",
    "pronunciation": "qua-li-da-de da co-lu-na sa-tim",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do árabe zaytuni (cetim, tecido lustroso originário de Quanzhou, China). Refere-se à coluna de pontos cheios zig-zag contínuos.",
    "summary": "Brilho, paralelismo, definição de borda e controle de densidade em colunas de ponto cheio e tipografias bordadas.",
    "definition": "A qualidade da coluna satin mede a perfeição geométrica dos traços de ponto cheio. Envolve o paralelismo exato dos fios, o brilho contínuo proporcionado pelo alinhamento óptico das fibras, a espessura adequada (ideal entre 1.5 e 7 mm) e o uso de pontos curtos (short stitches) em curvas fechadas para evitar acúmulos.",
    "technicalDetails": "Uma coluna de alta performance utiliza suporte de linha central (center run) ou zigue-zague interno (edge run), densidade modulada entre 0.38 e 0.42 mm e controle rigoroso de tensão para que a laçada não 'estrangule' o tecido.",
    "beginnerExplanation": "É a perfeição das letrinhas e dos arabescos: quando as bordas ficam bem retinhas, os fios ficam perfeitamente paralelos e brilhando, sem parecer frouxos nem embolados.",
    "howItWorks": [
      "1. Criação de suporte interno para dar volume e ancorar a coluna no tecido.",
      "2. Lançamento alternado de pontos de um lado a outro do vetor com espaçamento uniforme.",
      "3. Inserção automática de pontos curtos no lado interno das curvas.",
      "4. Finalização com arremate de travamento seguro no final da coluna."
    ],
    "applications": [
      "Textos, nomes e monogramas de alta precisão em camisas e toalhas.",
      "Bordas de brasões e emblemas termocolantes.",
      "Elementos ornamentais florais e arabescos clássicos."
    ],
    "characteristics": [
      "Brilho acetinado uniforme em toda a extensão do traço.",
      "Bordas perfeitamente paralelas sem 'dentes de serra' ou oscilações.",
      "Espessura equilibrada sem passar do limite que causaria laçadas frouxas (> 8 mm)."
    ],
    "commonErrors": [
      "❌ Fazer colunas satim com mais de 8 mm de largura sem converter para tatami ou satim dividido.",
      "❌ Curvas fechadas sem pontos curtos gerando um nó espesso de linha que quebra a agulha.",
      "❌ Falta de suporte interno fazendo a coluna 'afundar' na trama do tecido."
    ],
    "troubleshootingTips": [
      "Coluna muito fina (< 1 mm) cortando o tecido: aumente a largura ou troque para ponto corrido.",
      "Fios soltos no meio de colunas largas: ative a função 'Split Satin' (Satim Dividido) no software.",
      "Linha da bobina aparecendo nas bordas: solte a tensão superior ou use linha de bordar com calibragem correta."
    ],
    "dicaArtrelados": "Para monogramas em toalhas atoalhadas, use sempre suporte duplo (Center Walk + Edge Walk) e uma camada de plástico hidrossolúvel em cima: suas letras satim parecerão flutuar em alto-relevo.",
    "voceSabia": "O ponto satim tem o maior poder de reflexão de luz entre todos os tipos de pontos de bordado porque as fibras de poliéster ficam esticadas paralelamente sem interrupções.",
    "practicalExercise": "Borde o alfabeto em caixa alta com altura de 15 mm usando fonte satim. Avalie a clareza de cada letra e verifique se as curvas mantiveram a mesma densidade das retas.",
    "quickSummary": "Qualidade da coluna satin é o acabamento brilhante e linear de letras e detalhes através de pontos cheios bem suportados e calibrados.",
    "relatedTerms": [
      "Ponto Satim",
      "Pontos Curtos",
      "Satim Dividido",
      "Letras Bordadas"
    ],
    "tags": [
      "satin",
      "ponto cheio",
      "letras",
      "brilho"
    ]
  },
  {
    "id": "qualidade-da-digitalizacao",
    "code": "Q-007",
    "letter": "Q",
    "term": "Qualidade da Digitalização",
    "pronunciation": "qua-li-da-de da di-gi-ta-li-za-cao",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês digitizing (conversão de arte gráfica em comandos numéricos de coordenadas X-Y para máquinas de bordar).",
    "summary": "Habilidade técnica do programador em transformar uma arte gráfica em um arquivo de bordado fluído, eficiente e esteticamente perfeito.",
    "definition": "A qualidade da digitalização reflete a competência técnica e artística do programador (puncher/digitizer). Diferencia-se da vetorização comum por considerar as propriedades físicas dos materiais: elasticidade têxtil, atrito do fio, comportamento da lançadeira, encolhimento e relevo tridimensional.",
    "technicalDetails": "Uma digitalização profissional compreende o uso correto de curvas de Bezier, controle de nós vetoriais, aplicação cirúrgica de pontos de suporte, ordenamento de camadas por profundidade visual e minimização de cortes de linha.",
    "beginnerExplanation": "É a arte de desenhar no computador pensando como a agulha e a linha vão se comportar no tecido, e não apenas 'copiar e colar' uma foto no programa.",
    "howItWorks": [
      "1. Análise da imagem e simplificação de detalhes impossíveis de bordar com agulha física.",
      "2. Criação manual de objetos com ângulos de ponto adequados a cada volume.",
      "3. Configuração de parâmetros de entrada, saída e caminhos de ligação internos.",
      "4. Definição da física de compensação conforme o tecido no qual será bordado."
    ],
    "applications": [
      "Desenvolvimento de matrizes profissionais para marcas de moda e confecções industriais.",
      "Adaptação de logotipos corporativos complexos para pequenos tamanhos de bolso.",
      "Restauração e repaginação de arquivos antigos ou com erros de programação."
    ],
    "characteristics": [
      "Bordado roda macio na máquina sem paradas ou quebras de fio.",
      "Toque leve da peça bordada sem peso de linhas desnecessárias.",
      "Fidelidade artística absoluta à identidade visual original."
    ],
    "commonErrors": [
      "❌ Confiar cegamente em ferramentas automáticas de 'um clique' do software sem ajustes manuais.",
      "❌ Ignorar a espessura física do fio (40wt tem cerca de 0,2 mm de diâmetro real).",
      "❌ Não definir pontos de arremate adequados antes de saltos longos."
    ],
    "troubleshootingTips": [
      "Bordado demorando demais: resequencie os objetos no painel de lista de objetos para evitar saltos cruzados.",
      "Letras pequenas ilegíveis: reduza a densidade e use suporte central único em vez de tatami sob colunas estreitas.",
      "Nós constantes na troca de cor: configure o comando de corte com retração de linha correta."
    ],
    "dicaArtrelados": "Digitalizar bordado não é desenho gráfico; é escultura com agulha e linha. Pense sempre em qual elemento está 'embaixo' e qual está 'em cima' no relevo da peça.",
    "voceSabia": "Antigamente, as matrizes de bordado eram perfuradas manualmente em fitas de papel cartão (fitas Jacquard) ponto a ponto antes do surgimento dos softwares em computadores pessoais.",
    "practicalExercise": "Digitalize manualmente um pequeno logotipo de três cores. Compare o tempo de bordado e o resultado estético com a versão digitalizada automaticamente pelo mesmo software.",
    "quickSummary": "Qualidade da digitalização é o domínio dos parâmetros de software para criar matrizes que rodam com rapidez, segurança mecânica e beleza estética.",
    "relatedTerms": [
      "Digitalização de Matrizes",
      "Sequenciamento",
      "Compensação de Encolhimento",
      "Branching"
    ],
    "tags": [
      "digitalização",
      "programação",
      "software",
      "vetorização"
    ]
  },
  {
    "id": "qualidade-da-imagem-de-referencia",
    "code": "Q-008",
    "letter": "Q",
    "term": "Qualidade da Imagem de Referência",
    "pronunciation": "qua-li-da-de da i-ma-gem de re-fe-ren-cia",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim imago (representação visual, retrato). No processo de criação de matrizes, é o arquivo de origem (JPG, PNG, PDF, AI, SVG) usado como base de desenho.",
    "summary": "Nitidez, resolução e contraste da arte gráfica que serve como modelo para a programação da matriz de bordado.",
    "definition": "A qualidade da imagem de referência determina a facilidade e a precisão com que o digitalizador consegue delimitar formas, identificar cores reais e definir traçados vetoriais. Imagens em alta resolução (300 DPI) ou arquivos vetoriais nativos evitam erros de interpretação e economizam horas de trabalho.",
    "technicalDetails": "Imagens com ruído de compressão JPG (artefatos ao redor dos contornos) ou baixa resolução (abaixo de 72 DPI) distorcem as bordas, dificultando a definição exata dos ângulos e larguras de colunas satim.",
    "beginnerExplanation": "É a foto ou o arquivo do desenho que o cliente envia. Quanto mais nítido e sem borrões for esse desenho, mais bonito e perfeito será o bordado final.",
    "howItWorks": [
      "1. Importação da imagem para a tela de fundo do software de bordado.",
      "2. Calibração da escala real em milímetros para conferência de medidas.",
      "3. Redução de ruído e separação cromática das áreas principais.",
      "4. Traçado dos vetores com base nas arestas nítidas da imagem."
    ],
    "applications": [
      "Digitalização de logos enviados em vetor (CDR, AI, SVG) para fidelidade corporativa.",
      "Limpeza gráfica de fotos de desenhos feitos à mão por crianças para bordados afetivos.",
      "Ajuste de contraste de emblemas antigos para restauração de matrizes."
    ],
    "characteristics": [
      "Bordas limpas com contraste evidente entre cores vizinhas.",
      "Resolução mínima recomendada de 300 DPI em escala real 1:1.",
      "Ausência de sombras ou gradientes excessivos que não podem ser traduzidos para fios."
    ],
    "commonErrors": [
      "❌ Trabalhar com capturas de tela (prints) de baixa qualidade tiradas de redes sociais.",
      "❌ Usar fotos tiradas com ângulo torto ou com sombras cobrindo partes do logo.",
      "❌ Tentar aplicar digitalização automática sobre imagens pixeladas e embaçadas."
    ],
    "troubleshootingTips": [
      "Imagem muito embaçada: solicite ao cliente o arquivo original em PDF, EPS ou vetor.",
      "Cores indefinidas: aplique um filtro de contraste e nitidez em um editor de imagens antes de importar no software.",
      "Desenho torto na foto: alinhe o horizonte da imagem usando a ferramenta de rotação de tela."
    ],
    "dicaArtrelados": "Ensine seu cliente a sempre enviar a arte em formato vetorizado ou PDF de alta resolução. Isso economiza seu tempo de programação e garante um resultado impecável.",
    "voceSabia": "Uma imagem de 72 DPI ampliada para um bordado de costas de jaqueta (25 cm) pode ter pixels individuais maiores que a própria largura de uma coluna de ponto cheio.",
    "practicalExercise": "Importe no software uma imagem em 72 DPI e a mesma imagem em vetor SVG. Aproxime com o zoom a 800% e observe a diferença na nitidez das bordas para o traçado dos pontos.",
    "quickSummary": "Qualidade da imagem de referência é a base visual limpa e de alta resolução que permite a criação precisa e ágil da matriz de bordado.",
    "relatedTerms": [
      "Digitalização de Matrizes",
      "Resolução DPI",
      "Vetorização",
      "Ficha Técnica"
    ],
    "tags": [
      "imagem",
      "arte",
      "vetor",
      "resolução"
    ]
  },
  {
    "id": "qualidade-da-linha",
    "code": "Q-009",
    "letter": "Q",
    "term": "Qualidade da Linha",
    "pronunciation": "qua-li-da-de da li-nha",
    "level": "Iniciante 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim linea (fio de linho). No contexto contemporâneo, avalia a pureza, tenacidade e lubricidade dos filamentos de poliéster, viscose ou poliamida para bordar.",
    "summary": "Propriedades físicas e químicas do fio de bordar, incluindo tenacidade, uniformidade de espessura, lubrificação e resistência ao desbotamento.",
    "definition": "A qualidade da linha de bordar é a sua capacidade de resistir a altíssimas velocidades de tração (800 a 1200 PPM) sem se romper, desfiar ou formar nós. Caracteriza-se por torção equilibrada, diâmetro uniforme, ausência de penugem (fios trilobais) e brilho intenso resistente a alvejantes e raios UV.",
    "technicalDetails": "Linhas de alta qualidade possuem revestimento de silicone especial para reduzir o atrito ao passar pelo olho da agulha aquecida e resistência à tração de pelo menos 1.100 cN (centinewtons) para filamentos 40wt.",
    "beginnerExplanation": "É usar linhas próprias para máquina de bordar que não arrebentam à toa, não soltam fiapos na lançadeira e mantêm o brilho e as cores vivas mesmo depois de muitas lavagens.",
    "howItWorks": [
      "1. O filamento trilobal de poliéster reflete a luz com máximo brilho.",
      "2. O tratamento de superfície com silicone diminui o aquecimento pelo atrito na agulha.",
      "3. A elasticidade controlada absorve os puxões rápidos da alavanca estica-fio.",
      "4. A tintura de alta solidez evita que a cor manche o tecido branco durante a lavagem."
    ],
    "applications": [
      "Bordados em peças infantis exigindo toque macio e ausência de nós.",
      "Uniformes industriais lavados em lavanderias comerciais pesadas.",
      "Bordados em alta velocidade em máquinas multi-cabeças industriais."
    ],
    "characteristics": [
      "Espessura uniforme sem pontos grossos ou afinamentos no carretel.",
      "Brilho límpido e reflexão homogênea em toda a meada.",
      "Desbobinamento suave sem emperrar na base do cone."
    ],
    "commonErrors": [
      "❌ Usar linha comum de costura reta (algodão ou poliéster fiado) na máquina de bordar.",
      "❌ Armazenar cones expostos ao sol ou à umidade, ressecando a fibra e a lubrificação.",
      "❌ Usar cones com bordas plásticas ásperas que prendem a linha ao desenrolar."
    ],
    "troubleshootingTips": [
      "Linha quebrando constantemente no mesmo cone: troque de cone ou aplique redinha de silicone.",
      "Linha desfiando perto da agulha: verifique se o olho da agulha está riscado ou use agulha Titanium.",
      "Bordado sem brilho: utilize linha 100% poliéster trilobal ou viscose de primeira linha."
    ],
    "dicaArtrelados": "Use sempre redes protetoras nos cones de bordado, especialmente nos de poliéster e metálicos. A redinha evita que o fio escorregue e embole na base do suporte de linha.",
    "voceSabia": "O filamento de poliéster trilobal tem formato triangular sob o microscópio, o que faz a luz refletir em três ângulos diferentes, gerando o brilho característico do bordado de luxo.",
    "practicalExercise": "Pegue 1 metro de linha de bordar e 1 metro de linha de costura comum. Puxe ambas com as mãos: sinta a diferença de elasticidade, resistência e presença de fiapos entre elas.",
    "quickSummary": "Qualidade da linha é a resistência e lubricidade do fio que permite bordar em alta velocidade sem rompimento e com brilho duradouro.",
    "relatedTerms": [
      "Poliéster 40wt",
      "Fio Trilobal",
      "Tensão de Linha",
      "Quebra de Linha"
    ],
    "tags": [
      "linha",
      "fios",
      "poliéster",
      "insumos"
    ]
  },
  {
    "id": "qualidade-do-tecido",
    "code": "Q-010",
    "letter": "Q",
    "term": "Qualidade do Tecido",
    "pronunciation": "qua-li-da-de do te-ci-do",
    "level": "Iniciante 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim textum (entrelaçamento de fios, tecido). Refere-se à estabilidade estrutural, densidade da trama e composição do material têxtil a ser bordado.",
    "summary": "Propriedades mecânicas e estruturais da base têxtil, como estabilidade dimensional, densidade de trama e elasticidade.",
    "definition": "A qualidade do tecido sob a ótica do bordado computadorizado é a sua capacidade de suportar milhares de perfurações por minuto sem rasgar, deformar ou perder a estrutura original. Depende da gramatura, do tipo de entrelaçamento (plano, malha ou não-tecido) e do acabamento têxtil recebido na tecelagem.",
    "technicalDetails": "Tecidos de alta qualidade possuem fios de urdume e trama bem calibrados e tintura com boa solidez. Tecidos frouxos ou com excesso de goma exigem lavagem prévia ou reforço especial de entretela para não encolherem sob a tensão dos pontos.",
    "beginnerExplanation": "É a firmeza e a boa confecção da peça ou do tecido que você vai bordar. Um tecido bom segura os pontos no lugar sem abrir furos gigantes nem repuxar todo.",
    "howItWorks": [
      "1. A agulha penetra entre os fios da trama sem cortar as fibras principais.",
      "2. O entrelaçamento têxtil sustenta a tração da linha de bordar.",
      "3. O tecido resiste ao calor e à fricção contínua da sapata do calcador.",
      "4. A elasticidade natural é controlada pelo uso de estabilizadores adequados."
    ],
    "applications": [
      "Bordados em camisas sociais de algodão fio 60 ou 80 de alta nobreza.",
      "Customização de toalhas felpudas de alta gramatura (acima de 450 g/m²).",
      "Bordados em peças de malha piquet para uniformes executivos duradouros."
    ],
    "characteristics": [
      "Trama fechada e estável que não se abre com a penetração da agulha.",
      "Ausência de encolhimento excessivo na primeira lavagem pós-bordado.",
      "Superfície regular sem nós ou imperfeições de tecelagem."
    ],
    "commonErrors": [
      "❌ Bordar em tecidos de malha muito fina sem entretela de malha/recorte adequada.",
      "❌ Não fazer o pré-encolhimento de tecidos 100% algodão antes do bordado.",
      "❌ Usar agulha de ponta afiada (Sharp) em malhas elásticas, cortando os fios e abrindo furos."
    ],
    "troubleshootingTips": [
      "Furos abrindo ao redor do bordado: use agulha Ponta Bola (Ball Point) e reduza a densidade da matriz.",
      "Tecido franzindo após a lavagem: pré-lave o tecido antes de bordar para eliminar o encolhimento residual.",
      "Bordado afundando: coloque entretela solúvel ou plástica na superfície (topping)."
    ],
    "dicaArtrelados": "Em tecidos com elastano, nunca estique o tecido ao colocar no bastidor. Estique apenas a entretela e assente o tecido suavemente sobre ela para evitar que ele volte e enrugue depois de solto.",
    "voceSabia": "Tecidos de alta densidade como o jeans pesado e o brim podem exigir agulhas com revestimento de titânio para evitar que a agulha entorte durante a penetração.",
    "practicalExercise": "Corte dois pedaços de malha de algodão. Estique um excessivamente no bastidor e borde um quadrado; no outro, posicione a malha sem esticar com entretela colada. Compare a deformação de ambos ao tirar do bastidor.",
    "quickSummary": "Qualidade do tecido é a integridade estrutural e a estabilidade da base têxtil que permite receber os pontos de bordado sem deformações.",
    "relatedTerms": [
      "Piquet",
      "Pré-Encolhimento Têxtil",
      "Agulha Ponta Bola",
      "Bastidoramento"
    ],
    "tags": [
      "tecido",
      "malha",
      "algodão",
      "base"
    ]
  },
  {
    "id": "qualidade-do-estabilizador",
    "code": "Q-011",
    "letter": "Q",
    "term": "Qualidade do Estabilizador",
    "pronunciation": "qua-li-da-de do es-ta-bi-li-za-dor",
    "level": "Iniciante 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim stabilis (firme, que permanece). Designa os não-tecidos, papéis e filmes utilizados para dar sustentação física à trama durante o ato do bordado.",
    "summary": "Capacidade da entretela ou filme de conferir estabilidade multidirecional ao tecido sem romper sob a ação repetida da agulha.",
    "definition": "A qualidade do estabilizador (entretela) mede a uniformidade das fibras do não-tecido, sua resistência à tração em todas as direções (isotropia) e a facilidade de remoção no pós-bordado. Um estabilizador premium não rasga precocemente antes do término da matriz e não deixa resíduos rígidos na pele do usuário.",
    "technicalDetails": "Estabilizadores de alta performance utilizam fibras prensadas multidirecionais (e não unidirecionais), com gramaturas calibradas entre 40 g/m² e 90 g/m², adesivos termocolantes atóxicos e resinas hidrossolúveis de PVA que dissolvem a 100% em água morna sem deixar manchas.",
    "beginnerExplanation": "É a qualidade da entretela ou do plástico que você coloca junto com o tecido. Uma boa entretela segura o tecido firme sem rasgar no meio do bordado e é fácil de limpar depois.",
    "howItWorks": [
      "1. Fibras multidirecionais travam a elasticidade e o estiramento do tecido.",
      "2. Suporta os milhares de furos da agulha sem perfurar em linha reta (evita o efeito picote).",
      "3. Mantém a base plana sob a pressão constante do pé calcador.",
      "4. Rasga de forma limpa rente aos pontos (rasgável) ou dissolve sem resíduo (hidrossolúvel)."
    ],
    "applications": [
      "Bordados em malha pique e body de bebê com entretela de toque suave (Soft Touch).",
      "Bordados rendados (Free-Standing Lace - FSL) com filme hidrossolúvel espesso.",
      "Brasões e emblemas com entretela de recorte pesado (Cut-away)."
    ],
    "characteristics": [
      "Resistência homogênea quando puxada em qualquer direção (horizontal, vertical e diagonal).",
      "Espessura uniforme sem áreas transparentes ou nós de fibra.",
      "Ausência de resinas químicas com odor forte ou que emperrem a agulha com cola."
    ],
    "commonErrors": [
      "❌ Usar entretela de confecção comum de colarinho no lugar de entretela própria para bordado.",
      "❌ Usar entretela rasgável em malha elástica de alta densidade.",
      "❌ Economizar usando retalhos emendados sem firmeza no bastidor."
    ],
    "troubleshootingTips": [
      "Entretela rasgando antes de terminar o bordado: use entretela de recorte (Cut-Away) ou aumente a gramatura.",
      "Cola grudando na agulha e quebrando a linha: utilize entretela hidrossolúvel ou spray adesivo de qualidade superior.",
      "Bordado rígido como papelão: diminua a gramatura da entretela e reduza a densidade da matriz."
    ],
    "dicaArtrelados": "Faça o teste do rasgo na entretela rasgável: puxe nas duas direções. Se ela rasgar fácil para os dois lados com a mesma força, ela é de ótima qualidade e não vai deformar seu bordado.",
    "voceSabia": "As primeiras entretelas industriais eram feitas de crina de cavalo e linho gomado antes da invenção das fibras sintéticas de não-tecido nos anos 1950.",
    "practicalExercise": "Pegue uma folha de entretela rasgável e tente rasgá-la na vertical e na diagonal. Observe se o rasgo segue reto ou se a fibra oferece a mesma resistência em todas as posições.",
    "quickSummary": "Qualidade do estabilizador é a firmeza e a uniformidade da entretela em sustentar o tecido durante o bordado sem rasgar precocemente.",
    "relatedTerms": [
      "Entretela Rasgável",
      "Entretela de Recorte",
      "Película Hidrossolúvel",
      "Gramatura"
    ],
    "tags": [
      "estabilizador",
      "entretela",
      "insumos",
      "suporte"
    ]
  },
  {
    "id": "qualidade-da-bobina",
    "code": "Q-012",
    "letter": "Q",
    "term": "Qualidade da Bobina",
    "pronunciation": "qua-li-da-de da bo-bi-na",
    "level": "Iniciante 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês bobine (pequeno cilindro para enrolar fios). Refere-se tanto ao carretel metálico/plástico quanto à linha inferior utilizada na lançadeira.",
    "summary": "Precisão dimensional do carretel da bobina, enrolamento uniforme da linha e calibragem da mola tensora da caixa de bobina.",
    "definition": "A qualidade da bobina abrange o perfeito paralelismo do carretel plástico/metálico (sem rebarbas ou empenamento), a homogeneidade do enrolamento da linha (densidade constante sem folgas) e a estabilidade da linha própria de bobina (filamento fino 60wt ou 80wt).",
    "technicalDetails": "Bobinas pré-bobinadas (pre-wound bobbins) de alta qualidade possuem lados de papel cartão ou núcleo magnético (magnetic core) que mantêm a rotação constante na caixa da bobina até o último metro de fio, sem sofrer inércia excessiva.",
    "beginnerExplanation": "É ter o carretel de baixo lisinho e perfeitamente cheio com a linha fininha de bobina, fazendo a máquina puxar a linha de baixo de forma leve e sem trancos.",
    "howItWorks": [
      "1. A linha da bobina desenrola livremente dentro da caixa sob pressão da mola tensora.",
      "2. A ponta da lançadeira passa ao redor da bobina levando a laçada superior.",
      "3. O peso e o balanceamento do carretel evitam giros descontrolados (over-spin).",
      "4. A linha 60wt mais fina permite acomodar mais metros de fio e reduz o volume no verso."
    ],
    "applications": [
      "Produção contínua em máquinas multi-agulhas com bobinas magnéticas.",
      "Bordados em peças delicadas onde o verso não pode ter relevo áspero.",
      "Calibração precisa da tensão de fábrica pelo teste da gota (drop test)."
    ],
    "characteristics": [
      "Carretel perfeitamente plano sem bordas quebradas, tortas ou riscadas.",
      "Enrolamento de linha firme e homogêneo de ponta a ponta.",
      "Linha 100% poliéster ou poliamida fina (60wt/70wt) sem emendas ou nós."
    ],
    "commonErrors": [
      "❌ Encher a bobina na mão ou com enrolamento frouxo e irregular na máquina.",
      "❌ Usar carretel de altura incorreta para o modelo da máquina (ex: usar bobina alta em caixa rasa).",
      "❌ Usar linha grossa de bordar no lugar da linha própria de bobina (que deve ser mais fina)."
    ],
    "troubleshootingTips": [
      "Pontos brancos pulando na frente: a bobina está muito frouxa ou a mola tensora está com fiapo preso.",
      "Bobina chacoalhando e fazendo barulho: troque o carretel plástico por um novo e confira a altura correta.",
      "Linha da bobina quebrando: limpe a mola da caixa de bobina passando um cartão fino para tirar resíduos de linha."
    ],
    "dicaArtrelados": "Limpe a caixa da bobina com um pincel macio a cada troca de carretel. O acúmulo de pó de entretela e fiapos de linha sob a mola altera a tensão e estraga o bordado.",
    "voceSabia": "As bobinas industriais pré-enroladas sem abas laterais (sideless) conseguem armazenar até 40% mais linha do que as bobinas enchidas manualmente no ateliê.",
    "practicalExercise": "Encha uma bobina no enchedor automático e pegue uma bobina pré-enrolada de fábrica. Compare o peso, a firmeza ao apertar com os dedos e o tempo de duração de ambas na máquina.",
    "quickSummary": "Qualidade da bobina é o perfeito enrolamento e a fluidez do fio inferior na caixa da lançadeira para garantir pontos equilibrados.",
    "relatedTerms": [
      "Caixa da Bobina",
      "Linha de Bobina 60wt",
      "Balanço de Tensão",
      "Lançadeira"
    ],
    "tags": [
      "bobina",
      "lançadeira",
      "tensão",
      "mecânica"
    ]
  },
  {
    "id": "qualidade-da-agulha",
    "code": "Q-013",
    "letter": "Q",
    "term": "Qualidade da Agulha",
    "pronunciation": "qua-li-da-de da a-gu-lha",
    "level": "Iniciante 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim acucula (diminutivo de acus, agulha, ponta). No bordado eletrônico, designa a ferramenta mecânica de precisão que perfura o tecido e conduz o filamento.",
    "summary": "Retidão, geometria do olho, afiação da ponta e tratamento de superfície da agulha de bordar industrial ou doméstica.",
    "definition": "A qualidade da agulha é o grau de precisão metalúrgica e acabamento de sua lâmina, canaleta, olho e ponta. Uma agulha de alta qualidade apresenta revestimento especial (como cromo duro ou nitreto de titânio), olho polido sem micro-rebarbas cortantes e elasticidade para resistir à deflexão sem entortar.",
    "technicalDetails": "Produzida com tolerâncias micrométricas (padrões 130/705 H-E ou DBxK5). O canal frontal deve abrigar perfeitamente o fio 40wt para protegê-lo do atrito durante a penetração a até 1.000 perfurações por minuto.",
    "beginnerExplanation": "É usar uma agulha novinha, reta, sem ponta torta e apropriada para bordado. A agulha de bordar tem o buraquinho maior e mais polido para não desfiar a linha.",
    "howItWorks": [
      "1. A ponta penetra abrindo as fibras do tecido com mínimo impacto mecânico.",
      "2. A canaleta protege o fio durante a descida rápida no tecido.",
      "3. O rebaixo (scarf) cria o espaço exato para a ponta da lançadeira laçar o fio.",
      "4. O olho polido permite o vaivém da linha sem gerar calor excessivo."
    ],
    "applications": [
      "Bordados em alta velocidade com agulhas de Titânio resistentes ao calor.",
      "Peças de microfibra e seda usando agulhas finas 65/9 ou 70/10.",
      "Bordados em couro e materiais pesados usando agulhas com ponta cortante ou cunha."
    ],
    "characteristics": [
      "Lâmina 100% reta verificável em superfície plana de vidro.",
      "Olho com bordas internas polidas para evitar abrasão do fio.",
      "Revestimento liso que reduz a fricção e o acúmulo de cola adesiva."
    ],
    "commonErrors": [
      "❌ Continuar bordando com a mesma agulha por dezenas de horas até ela quebrar.",
      "❌ Usar agulha de costura comum (Universal) em vez de agulha de bordar (Embroidery/H-E).",
      "❌ Tentar desentortar uma agulha torta com alicate e reutilizá-la na máquina."
    ],
    "troubleshootingTips": [
      "Fio desfiando e partindo logo acima da agulha: passe a unha na ponta da agulha; se sentir um 'gancho' ou rebarba, descarte-a imediatamente.",
      "Barulho de 'estalo' ao furar o tecido: a agulha está cega; substitua por uma nova.",
      "Pulos de ponto constantes: verifique se o lado achatado do cabo da agulha está voltado para trás."
    ],
    "dicaArtrelados": "Troque a agulha da sua máquina a cada 8 a 10 horas de trabalho contínuo ou a cada projeto grande. Uma agulha nova custa centavos e evita estragar peças caras de clientes.",
    "voceSabia": "Durante a execução de um bordado a 800 PPM, a ponta da agulha atinge temperaturas superiores a 150°C devido ao atrito constante contra as fibras têxteis.",
    "practicalExercise": "Pegue uma agulha usada e uma novinha da caixa. Coloque ambas sobre uma mesa de vidro e gire-as pelo cabo. Observe como a agulha torta oscila, revelando micro-deformações invisíveis a olho nu.",
    "quickSummary": "Qualidade da agulha é a afiação e o polimento milimétrico da ferramenta de perfuração que garante laçadas perfeitas sem quebrar linha.",
    "relatedTerms": [
      "Agulha de Bordar",
      "Calibre da Agulha",
      "Deflexão da Agulha",
      "Agulha Titanium"
    ],
    "tags": [
      "agulha",
      "metalurgia",
      "insumos",
      "laçada"
    ]
  },
  {
    "id": "qualidade-do-bastidor",
    "code": "Q-014",
    "letter": "Q",
    "term": "Qualidade do Bastidor",
    "pronunciation": "qua-li-da-de do bas-ti-dor",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim bastum (suporte, moldura de sustentação). Refere-se à armação que fixa e tensiona o tecido sob a área de costura.",
    "summary": "Rigidez estrutural, encaixe preciso e capacidade de retenção sem deslizamento dos aros do bastidor de bordar.",
    "definition": "A qualidade do bastidor é a firmeza com que os aros interno e externo prendem o tecido e o estabilizador, mantendo-os esticados como uma pele de tambor durante todo o movimento do pantógrafo. Um bastidor de alta qualidade não deforma com o aperto do parafuso e possui textura antiderrapante nas bordas.",
    "technicalDetails": "Bastidores modernos utilizam polímeros de engenharia reforçados com fibra de vidro ou sistemas magnéticos de neodímio (Mighty Hoops) que exercem pressão homogênea em todo o perímetro, eliminando marcas de bastidor (hoop burn).",
    "beginnerExplanation": "É ter um bastidor firme e retinho que segura o tecido bem preso sem deixar ele escorregar e sem machucar as fibras do tecido com marcas fundas.",
    "howItWorks": [
      "1. O aro interno e o externo casam-se com tolerância geométrica exata.",
      "2. O parafuso de aperto de rosca fina permite dosar a pressão sem torcer a moldura.",
      "3. As travas laterais conectam-se firmemente ao pantógrafo sem folga mecânica.",
      "4. O tecido permanece sob tração plana constante durante as acelerações X-Y."
    ],
    "applications": [
      "Bordados em peças espessas como toalhas felpudas e jaquetas jeans.",
      "Bastidores magnéticos para tecidos delicados que marcam facilmente com atrito.",
      "Enquadramentos precisos usando gabaritos de alinhamento com grade cartesiana."
    ],
    "characteristics": [
      "Aros totalmente planos sem empenamento ou torção.",
      "Parafuso de aperto resistente com ranhura reforçada para chave de fenda.",
      "Encaixe de fixação na máquina firme sem jogo mecânico."
    ],
    "commonErrors": [
      "❌ Apertar o parafuso com alicate, rachando o plástico do aro externo.",
      "❌ Puxar as bordas do tecido depois que o bastidor já foi fechado e apertado.",
      "❌ Usar bastidor empenado que não fecha por igual nos quatro cantos."
    ],
    "troubleshootingTips": [
      "Tecido escorregando no meio do bordado: encape o aro interno com fita crepe ou use bastidor magnético.",
      "Marcas brilhantes no tecido (marcas de bastidor): use entretela de apoio ou flutue a peça sobre entretela adesiva.",
      "Bordado descentralizado: utilize o gabarito plástico de centro antes de travar o parafuso."
    ],
    "dicaArtrelados": "Ao bastidorar, bata levemente os dedos no centro do tecido: ele deve emitir um som firme e oco de tambor. Se estiver fofo, solte e bastidore novamente.",
    "voceSabia": "Os primeiros bastidores de bordado manual da história eram feitos de aros circulares de madeira de faia curvada a vapor e tiras de couro trançadas.",
    "practicalExercise": "Coloque um tecido no bastidor e aperte o parafuso. Com uma caneta de tecido, marque uma linha reta na borda externa do aro. Borde 5.000 pontos e verifique se a linha se moveu, indicando deslizamento.",
    "quickSummary": "Qualidade do bastidor é a rigidez e a pressão uniforme dos aros que mantêm o tecido esticado e estável durante a movimentação do pantógrafo.",
    "relatedTerms": [
      "Bastidoramento",
      "Marcas de Bastidor",
      "Bastidor Magnético",
      "Gabarito de Alinhamento"
    ],
    "tags": [
      "bastidor",
      "enquadramento",
      "tensão",
      "mecânica"
    ]
  },
  {
    "id": "qualidade-do-acabamento",
    "code": "Q-015",
    "letter": "Q",
    "term": "Qualidade do Acabamento",
    "pronunciation": "qua-li-da-de do a-ca-ba-men-to",
    "level": "Iniciante 🟢",
    "category": "Acabamento & Finalização",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim ad caput (levar ao fim, concluir com perfeição). No ateliê, abrange os processos de corte de fios, remoção de entretela, limpeza e passadoria.",
    "summary": "Conjunto de etapas de pós-produção que transformam a peça recém-saída da máquina em um produto final limpo, seguro e comercializável.",
    "definition": "A qualidade do acabamento é o refino estético final aplicado à peça bordada. Inclui o corte rente de fios de salto sem cortar o tecido, a remoção cuidadosa da entretela excedente no verso sem esticar os pontos, a eliminação de marcas de bastidor com vapor e a aplicação de protetores de bordado no verso de roupas infantis.",
    "technicalDetails": "Um acabamento profissional utiliza tesouras de precisão curvas (tesoura pelicano ou garça), ferros a vapor com sapata de teflon e termocolantes protetores de verso (como o Stick-Protect) que evitam que as pontas de linha arranhem a pele.",
    "beginnerExplanation": "É o capricho final depois que a máquina apita: cortar todos os fiapinhos que sobraram, tirar a entretela com cuidado, passar a peça e deixar tudo limpo e cheiroso para o cliente.",
    "howItWorks": [
      "1. Corte rente dos fios de salto com tesoura de ponta curva.",
      "2. Rasgamento ou recorte da entretela no verso a cerca de 3 a 5 mm da borda.",
      "3. Dissolução do plástico solúvel da frente com borrifador de água morna ou vapor.",
      "4. Passadoria suave pelo verso com pano de proteção e aplicação de termoprotetor."
    ],
    "applications": [
      "Preparação de bodies e mantas de bebê com acabamento hipoalergênico no verso.",
      "Finalização de toalhas de lavabo para presentes finos com embalagem transparente.",
      "Corte e queima de bordas de patches e emblemas termocolantes com ferro de solda."
    ],
    "characteristics": [
      "Ausência total de fiapos soltos ou linhas de salto na frente da peça.",
      "Verso limpo sem excesso de entretela espessa ou nós salientes.",
      "Tecido circundante liso e sem marcas prensadas de bastidor."
    ],
    "commonErrors": [
      "❌ Puxar a entretela rasgável com força bruta, deformando os pontos do bordado.",
      "❌ Cortar a linha de salto puxando o fio para cima e furando o tecido com a ponta da tesoura.",
      "❌ Passar o ferro quente diretamente sobre fios de poliéster sem pano de proteção, derretendo o brilho."
    ],
    "troubleshootingTips": [
      "Pontos abrindo após o corte: certifique-se de que a matriz possuía nós de arremate antes de cortar a linha.",
      "Marcas de bastidor persistentes: borrife uma mistura leve de água com amaciante e aplique vapor com o ferro sem encostar a chapa.",
      "Bordado coçando na pele: aplique uma entretela protetora termocolante de malha suave no verso."
    ],
    "dicaArtrelados": "Tenha uma tesoura de ponta curva (tipo cegonha ou bico de pato) exclusiva para cortar linhas de acabamento. Nunca use essa tesoura para cortar papel ou entretela para não perder o fio cirúrgico.",
    "voceSabia": "Em alfaiatarias de luxo e alta-costura, a etapa de inspeção e acabamento manual de uma peça bordada pode levar mais tempo do que a própria costura mecânica.",
    "practicalExercise": "Borde um nome e pratique o acabamento: corte os fios de salto com tesoura curva a 1 mm do tecido, retire a entretela rasgável apoiando o dedo na costura e passe a peça pelo verso sobre uma toalha macia.",
    "quickSummary": "Qualidade do acabamento é o cuidado e a limpeza pós-costura que garantem apresentação impecável, conforto ao vestir e valor agregado ao produto.",
    "relatedTerms": [
      "Tesoura Pelicano",
      "Remoção de Entretela",
      "Termoprotetor de Verso",
      "Passadoria Têxtil"
    ],
    "tags": [
      "acabamento",
      "finalização",
      "limpeza",
      "apresentação"
    ]
  },
  {
    "id": "qualidade-da-formacao-do-ponto",
    "code": "Q-016",
    "letter": "Q",
    "term": "Qualidade da Formação do Ponto",
    "pronunciation": "qua-li-da-de da for-ma-cao do pon-to",
    "level": "Avançado 🔴",
    "category": "Tensão & Calibração",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim formatio (ação de dar forma, estruturação). No contexto mecânico têxtil, descreve o ciclo cinemático de entrelaçamento entre agulha e lançadeira.",
    "summary": "Ciclo cinemático perfeito no qual a agulha, a alavanca estica-fio e a lançadeira criam laçadas firmes e balanceadas.",
    "definition": "A qualidade da formação do ponto é o sincronismo mecânico e dinâmico entre o movimento descendente/ascendente da agulha e a rotação da ponta da lançadeira rotativa (hook). Exige que a linha superior seja laçada no ápice da folga do laço (cerca de 1.8 a 2.2 mm acima do Ponto Morto Inferior) e recolhida pela alavanca estica-fio no instante exato do fechamento do ciclo.",
    "technicalDetails": "Avaliada pela folga entre a ponta da lançadeira e o rebaixo da agulha (ideal entre 0.05 e 0.1 mm), pela ausência de folgas axiais na barra de agulha e pela constância da pressão da mola compensadora (check spring).",
    "beginnerExplanation": "É a mecânica perfeita da máquina por dentro: o momento exato em que a agulha desce, o gancho da lançadeira pesca a linha e as duas linhas se abraçam bem no meio do tecido.",
    "howItWorks": [
      "1. A agulha desce ao Ponto Morto Inferior (PMI) e sobe cerca de 2 mm formando o laço.",
      "2. A ponta da lançadeira passa rente ao rebaixo da agulha capturando o laço de linha.",
      "3. O laço é expandido ao redor do cesto da bobina, envolvendo o fio inferior.",
      "4. A alavanca estica-fio sobe recolhendo o excesso e assentando o nó no interior do tecido."
    ],
    "applications": [
      "Calibração de ponto em máquinas multi-cabeças após troca de lançadeira.",
      "Diagnóstico de problemas de sincronismo mecânico (timing) após quebras violentas de agulha.",
      "Bordados em altíssima velocidade (acima de 1.000 PPM) sem falha de laçadas."
    ],
    "characteristics": [
      "Entrelaçamento das duas linhas oculto exatamente no meio das camadas do tecido.",
      "Som mecânico suave e ritmado durante o funcionamento da máquina.",
      "Ausência de pontos falsos (skip stitches) em qualquer direção de costura."
    ],
    "commonErrors": [
      "❌ Lançadeira fora de ponto (timing adiantado ou atrasado) fazendo a máquina pular pontos.",
      "❌ Folga excessiva entre a agulha e a lançadeira fazendo a linha escapar.",
      "❌ Mola estica-fio (check spring) quebrada ou sem ação de retorno."
    ],
    "troubleshootingTips": [
      "Máquina pulando pontos em apenas uma direção: verifique se a agulha está sofrendo deflexão e encostando na chapa.",
      "Linha quebrando no momento exato da laçada: verifique se há ranhuras ou rebarbas na ponta da lançadeira com uma meia de seda.",
      "Bolinhas de linha no verso: a alavanca estica-fio não está recolhendo o fio completamente; regule a tensão superior."
    ],
    "dicaArtrelados": "Para saber se a formação do ponto está perfeita, faça um teste 'I' de ponto satim com 3 cm: no verso, a linha superior deve ocupar 1/3 em cada lateral e a linha da bobina 1/3 no centro exato.",
    "voceSabia": "O princípio da lançadeira rotativa para formação de laçadas no bordado foi patenteado por Allen B. Wilson em 1851 e é a base mecânica utilizada até hoje nas máquinas mais modernas do mundo.",
    "practicalExercise": "Gire o volante manual da máquina lentamente e observe pela tampa aberta da lançadeira o exato momento em que a ponta do gancho pesca a laçada de linha que a agulha formou na subida.",
    "quickSummary": "Qualidade da formação do ponto é o sincronismo mecânico perfeito entre agulha e lançadeira que garante laçadas firmes e sem falhas.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Sincronismo de Ponto (Timing)",
      "Formação da Laçada",
      "Ponto Morto Inferior"
    ],
    "tags": [
      "mecânica",
      "laçada",
      "lançadeira",
      "calibração"
    ]
  },
  {
    "id": "quantidade-de-linha-utilizada",
    "code": "Q-034",
    "letter": "Q",
    "term": "Quantidade de Linha Utilizada",
    "pronunciation": "quan-ti-da-de de li-nha u-ti-li-za-da",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quantitas e linea. Refere-se à metragem linear total de fio superior consumida para bordar um projeto.",
    "summary": "Metragem total em metros ou jardas de fio de bordar superior gasta para completar uma matriz.",
    "definition": "A quantidade de linha utilizada é o comprimento linear consumido do cone de linha superior durante a execução do bordado. Depende da quantidade de pontos, do comprimento médio dos pontos (pontos satim consomem muito mais linha do que tatami ou ponto corrido) e da espessura do tecido bordado.",
    "technicalDetails": "Regra prática de consumo da indústria: para cada 1.000 pontos de bordado padrão (comprimento médio de 4 mm), são consumidos aproximadamente 5,0 a 6,5 metros de linha superior de poliéster 40wt. Softwares profissionais calculam o consumo exato na folha de produção.",
    "beginnerExplanation": "É quantos metros de linha do carretel de cima a máquina gasta para fazer o bordado. Ajuda você a saber se o carretel vai dar até o fim ou se vai acabar no meio.",
    "howItWorks": [
      "1. O software calcula o percurso X-Y de cada ponto e a penetração Z através do tecido.",
      "2. A metragem por cor é discriminada na ficha técnica (ex: Cor 1 Azul = 18,4 metros).",
      "3. A máquina traciona o fio sob a tensão dos discos tensores a cada descida da agulha.",
      "4. A alavanca estica-fio alimenta a metragem necessária para envolver a laçada no verso."
    ],
    "applications": [
      "Cálculo exato de custo de matéria-prima por peça em orçamentos.",
      "Previsão de reposição de estoque de cones de linha para grandes lotes.",
      "Verificação se a sobra de linha em um cone é suficiente para terminar uma matriz."
    ],
    "characteristics": [
      "Calculada automaticamente na ficha técnica dos softwares de bordado.",
      "Varia conforme o tipo de ponto (Satim gasta mais fio na frente do que Tatami).",
      "Essencial para precificação profissional com base no custo de insumos."
    ],
    "commonErrors": [
      "❌ Iniciar uma produção de 100 peças sem calcular se a metragem do cone será suficiente.",
      "❌ Achar que todo ponto gasta a mesma metragem de linha (um ponto corrido gasta 2x menos linha que um ponto satim largo).",
      "❌ Não incluir o custo da linha no preço final cobrado do cliente."
    ],
    "troubleshootingTips": [
      "Linha acabando no meio da produção: confira a metragem estimada no software e compare com o saldo visual do cone.",
      "Consumo de linha muito maior que o previsto: verifique se a tensão superior não está excessivamente frouxa, puxando mais fio que o necessário.",
      "Divergência de cor por troca de lote: compre cones com metragem suficiente do mesmo lote de tingimento."
    ],
    "dicaArtrelados": "Um cone padrão de 1.000 metros de linha de bordar é suficiente para fazer cerca de 150.000 a 180.000 pontos médios. Use essa regra rápida para calcular quantas peças você consegue bordar com um único cone!",
    "voceSabia": "Em bordados 3D com EVA, o consumo de linha superior aumenta em até 40% porque o fio precisa viajar pela espessura extra da espuma antes de penetrar no tecido.",
    "practicalExercise": "Abra a ficha técnica (Production Worksheet) de um arquivo no seu software. Observe a metragem de linha calculada para cada cor e some o total para descobrir o gasto de linha da peça inteira.",
    "quickSummary": "Quantidade de linha utilizada é a metragem total de fio superior gasta no bordado, fundamental para controle de estoque e precificação.",
    "relatedTerms": [
      "Consumo de Linha",
      "Poliéster 40wt",
      "Ficha Técnica",
      "Precificação"
    ],
    "tags": [
      "linha",
      "consumo",
      "metragem",
      "custos"
    ]
  },
  {
    "id": "quantidade-de-bobina-utilizada",
    "code": "Q-035",
    "letter": "Q",
    "term": "Quantidade de Bobina Utilizada",
    "pronunciation": "quan-ti-da-de de bo-bi-na u-ti-li-za-da",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês bobine e do latim quantitas. Mede o consumo do fio inferior da lançadeira.",
    "summary": "Metragem linear consumida do fio fino da bobina inferior durante a execução de uma matriz de bordado.",
    "definition": "A quantidade de bobina utilizada é o comprimento de linha inferior (fio 60wt ou 80wt) consumido na formação das laçadas na parte de trás do tecido. Devido ao princípio mecânico do ponto de bordado (onde a linha superior deve aparecer em 2/3 no verso em pontos satim), o consumo de bobina é proporcionalmente menor que o da linha superior.",
    "technicalDetails": "Regra clássica de proporção de consumo: para cada 1 metro de linha de bobina consumido, são gastos aproximadamente 2,5 a 3,0 metros de linha superior (proporção média de 1:3). Para 1.000 pontos, gastam-se cerca de 2,0 a 2,5 metros de bobina.",
    "beginnerExplanation": "É quantos metros daquela linha fininha de baixo a máquina gasta. Ela gasta bem menos do que a linha de cima porque a linha da bobina só fica escondida no verso.",
    "howItWorks": [
      "1. A linha da bobina é puxada da caixa pela ponta da lançadeira a cada laçada.",
      "2. O fio inferior ancora a laçada superior no verso do tecido.",
      "3. O sensor óptico ou mecânico da máquina monitora a rotação do carretel.",
      "4. Quando a quantidade de linha restante atinge o limite crítico, o sensor emite um aviso de 'Bobina Vazia'."
    ],
    "applications": [
      "Previsão de trocas de bobina antes de iniciar um bordado longo para não parar no meio.",
      "Gestão de compra de caixas de bobinas pré-bobinadas (caixas com 144 unidades).",
      "Avaliação do balanço de tensão da máquina (consumo anômalo de bobina indica tensão desregulada)."
    ],
    "characteristics": [
      "Proporção média de consumo de 1/3 em relação à linha superior.",
      "Utiliza fios mais finos (60wt ou 70wt) para maximizar a metragem no carretel.",
      "Monitorada por sensores eletrônicos de nível na maioria das máquinas modernas."
    ],
    "commonErrors": [
      "❌ Iniciar um bordado com 20.000 pontos com a bobina quase no final, parando a máquina em área crítica.",
      "❌ Encher a bobina com linha grossa de cima, gastando o dobro e reduzindo a metragem do carretel.",
      "❌ Ignorar o aviso de bobina baixa do painel da máquina."
    ],
    "troubleshootingTips": [
      "Bobina acabando rápido demais: verifique se a tensão da linha de cima não está muito frouxa, fazendo a bobina ser puxada em excesso.",
      "Linha da bobina embolando no verso: limpe a mola da caixa de bobina e confira se a linha foi passada corretamente sob a lâmina.",
      "Sensor avisando bobina vazia falsamente: limpe a poeira da lente óptica do sensor perto da lançadeira com um pincel macio."
    ],
    "dicaArtrelados": "Antes de colocar um bastidor grande na máquina para rodar uma matriz pesada, troque a bobina por uma cheinha de fábrica! É melhor guardar a bobina com restinho para projetos pequenos do que ter a máquina parando no meio de um bordado delicado.",
    "voceSabia": "Uma bobina pré-enrolada descartável sem laterais plásticas (sideless) padrão 'L' consegue armazenar até 120 metros de linha 60wt em um carretel minúsculo de menos de 2 cm.",
    "practicalExercise": "Borde uma matriz de 10.000 pontos com uma bobina nova. Ao terminar, retire a bobina e veja visualmente quanto de linha foi consumido para calibrar sua noção de gasto no dia a dia.",
    "quickSummary": "Quantidade de bobina utilizada é o consumo do fio inferior da lançadeira, correspondendo a cerca de 1/3 do gasto total de linha do bordado.",
    "relatedTerms": [
      "Linha de Bobina 60wt",
      "Caixa da Bobina",
      "Balanço de Tensão",
      "Sensor de Bobina"
    ],
    "tags": [
      "bobina",
      "consumo",
      "insumos",
      "tensão"
    ]
  },
  {
    "id": "quantidade-de-estabilizador",
    "code": "Q-036",
    "letter": "Q",
    "term": "Quantidade de Estabilizador",
    "pronunciation": "quan-ti-da-de de es-ta-bi-li-za-dor",
    "level": "Iniciante 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quantitas e stabilis. Refere-se à área física e às dimensões de entretela cortadas para cada bastidor.",
    "summary": "Área e dimensão em centímetros do corte de entretela necessário para cobrir o bastidor com sobras seguras de fixação.",
    "definition": "A quantidade de estabilizador é o tamanho do pedaço de entretela cortado para um determinado projeto. Deve sempre exceder as dimensões externas do bastidor em pelo menos 2 a 3 cm em todas as bordas para garantir que os aros prendam a entretela firmemente sem soltar durante os movimentos rápidos do pantógrafo.",
    "technicalDetails": "O cálculo de consumo de rolos de entretela (geralmente vendidos em bobinas de 30 cm, 40 cm ou 100 cm de largura por 50 ou 100 metros) deve prever a área do bastidor mais as margens de pegada, minimizando o desperdício de refilos.",
    "beginnerExplanation": "É o tamanho do pedaço de entretela que você corta do rolo para colocar no bastidor. Tem que ser sempre um pouquinho maior que o bastidor para não escapar dos lados na hora de apertar.",
    "howItWorks": [
      "1. A operadora mede as dimensões externas do bastidor a ser utilizado.",
      "2. Corta-se o estabilizador com margem de segurança de 2 a 3 cm além do aro.",
      "3. A entretela é encaixada entre os aros cobrindo 100% da área de tração.",
      "4. O aperto do parafuso fixa as quatro bordas da entretela simultaneamente."
    ],
    "applications": [
      "Planejamento de corte em lote de entretelas para produção seriada.",
      "Otimização do aproveitamento de rolos de entretela para reduzir sobras de refil.",
      "Técnica de enquadramento 'flutuante' para economizar entretela em peças pequenas."
    ],
    "characteristics": [
      "Deve ultrapassar as bordas do bastidor em todo o perímetro.",
      "Permite aperto homogêneo sem que as pontas escapem.",
      "Fator direto no custo unitário de insumos de cada peça bordada."
    ],
    "commonErrors": [
      "❌ Cortar a entretela exatamente do tamanho do desenho, fazendo-a soltar dentro do bastidor.",
      "❌ Deixar sobras gigantescas de 15 cm fora do bastidor, jogando material caro no lixo.",
      "❌ Tentar emendar pedacinhos de entretela com fita adesiva no meio da área que será perfurada pela agulha."
    ],
    "troubleshootingTips": [
      "Entretela escapando do bastidor no meio do bordado: corte pedaços maiores com pelo menos 3 cm de sobra em cada lado.",
      "Muitas sobras e retalhos acumulados: utilize a técnica de 'flutuação' colando pequenos retalhos sobre uma entretela base.",
      "Custo de entretela muito alto: compre entretela em bobinas de 100 metros em vez de rolos pequenos de 10 metros."
    ],
    "dicaArtrelados": "Faça gabaritos de papelão no tamanho exato de corte para cada um dos seus bastidores (ex: molde para bastidor 10x10, 13x18, 16x26). Assim você corta a entretela no tamanho perfeito em segundos sem desperdiçar um centímetro!",
    "voceSabia": "Em confecções de grande porte, rolos de entretela são cortados em guilhotinas elétricas industriais em blocos de 50 folhas de uma só vez para abastecer os operadores.",
    "practicalExercise": "Pegue seu bastidor mais usado, meça a moldura externa com uma fita métrica e adicione 4 cm na largura e na altura. Corte um molde de papelão com essa medida e use-o para cortar suas próximas 5 entretelas.",
    "quickSummary": "Quantidade de estabilizador é a dimensão correta de corte da entretela que garante firmeza nos aros do bastidor sem desperdício de material.",
    "relatedTerms": [
      "Entretela Rasgável",
      "Bastidoramento",
      "Técnica de Flutuação",
      "Corte de Insumos"
    ],
    "tags": [
      "estabilizador",
      "entretela",
      "corte",
      "insumos"
    ]
  },
  {
    "id": "quantidade-de-camadas-de-estabilizador",
    "code": "Q-037",
    "letter": "Q",
    "term": "Quantidade de Camadas de Estabilizador",
    "pronunciation": "quan-ti-da-de de ca-ma-das de es-ta-bi-li-za-dor",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quantitas e camisia/stratum. Refere-se à sobreposição de folhas de entretela para reforço estrutural.",
    "summary": "Número de folhas de entretela sobrepostas no bastidor para proporcionar a sustentação mecânica necessária ao tecido e à matriz.",
    "definition": "A quantidade de camadas de estabilizador é a decisão técnica de utilizar uma, duas ou três folhas de entretela combinadas para suportar a densidade de pontos da matriz e a maleabilidade do tecido. A regra geral dita que é preferível usar duas camadas de menor gramatura cruzadas em sentidos opostos de fibra do que uma única camada hipergrossa e rígida.",
    "technicalDetails": "Para tecidos elásticos (viscolycra, malha fria) ou bordados com densidade superior a 15.000 pontos, recomenda-se o uso de 2 camadas de entretela de recorte (Cut-Away) de 50 g/m² ou 1 camada de recorte combinada com 1 camada de rasgável de 40 g/m².",
    "beginnerExplanation": "É quantas folhas de entretela você coloca embaixo do pano. Em tecidos fininhos ou que esticam muito, colocar duas folhas em vez de uma só evita que o bordado enrugue.",
    "howItWorks": [
      "1. A primeira folha trava a elasticidade no sentido da trama do tecido.",
      "2. A segunda folha (cruzada a 90°) trava a elasticidade no sentido do urdume e na diagonal.",
      "3. As duas camadas dissipam o calor e o impacto das perfurações repetidas da agulha.",
      "4. A matriz assenta de forma plana sem repuxar as bordas para dentro."
    ],
    "applications": [
      "Bordados pesados em camisas polo de malha pique (2 camadas de entretela rasgável ou recorte leve).",
      "Bordados em moletons e jaquetas esportivas (2 camadas de entretela de recorte).",
      "Bordados rendados Free-Standing Lace (2 a 3 camadas de filme hidrossolúvel espesso)."
    ],
    "characteristics": [
      "Aumenta a estabilidade dimensional em matrizes de alta densidade.",
      "Cruzamento de fibras proporciona resistência isotrópica total.",
      "Deve ser dosada para não deixar a peça desconfortável e dura ao toque."
    ],
    "commonErrors": [
      "❌ Colocar 4 ou 5 camadas de entretela em camisa fina, criando uma placa dura e desconfortável.",
      "❌ Usar apenas 1 camada de entretela rasgável fina em malha elástica de alta densidade.",
      "❌ Colocar as duas camadas de entretela no mesmo sentido exato de rasgo sem cruzá-las."
    ],
    "troubleshootingTips": [
      "Bordado enrugando as bordas da malha: adicione uma segunda camada de entretela cruzada a 90°.",
      "Bordado muito pesado e áspero por dentro: reduza para 1 camada de entretela especial de recorte suave (Soft Cut-Away).",
      "Entretela rasgando antes do final: troque 1 folha de rasgável por 2 folhas ou use entretela de recorte."
    ],
    "dicaArtrelados": "Quando usar duas camadas de entretela rasgável, posicione uma com a fibra na vertical e a outra com a fibra na horizontal. Esse cruzamento simples dobra a firmeza do tecido no bastidor!",
    "voceSabia": "Em testes laboratoriais têxteis, duas camadas de entretela de 40 g/m² cruzadas suportam 65% mais tensão mecânica de perfuração do que uma única camada de 80 g/m² no mesmo sentido de fibra.",
    "practicalExercise": "Borde um círculo denso em retalho de malha com 1 camada de entretela rasgável e outro com 2 camadas cruzadas a 90°. Ao tirar do bastidor, observe como o de 2 camadas ficou muito mais plano e sem ondas.",
    "quickSummary": "Quantidade de camadas de estabilizador é a sobreposição calculada de folhas de entretela para garantir firmeza total em tecidos elásticos ou matrizes pesadas.",
    "relatedTerms": [
      "Gramatura da Entretela",
      "Entretela Cruzada",
      "Entretela de Recorte",
      "Franzimento"
    ],
    "tags": [
      "camadas",
      "estabilizador",
      "entretela",
      "malha"
    ]
  },
  {
    "id": "quantidade-de-passagens-da-agulha",
    "code": "Q-038",
    "letter": "Q",
    "term": "Quantidade de Passagens da Agulha",
    "pronunciation": "quan-ti-da-de de pas-sa-gens da a-gu-lha",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim passus e acucula. Refere-se às idas e vindas consecutivas da agulha sobre a mesma linha geométrica.",
    "summary": "Número de repetições de costura sobre o mesmo traço vetorial (simples, triplo, quíntuplo) para dar espessura ao contorno.",
    "definition": "A quantidade de passagens da agulha é o número de vezes em que a agulha repete o percurso de costura sobre uma mesma linha vetorial sem deslocamento lateral. Um pesponto simples tem 1 passagem; o ponto triplo (Bean Stitch) tem 3 passagens (avança, recua, avança); e pontos de alto relevo podem ter 5 a 7 passagens sobrepostas.",
    "technicalDetails": "Cada passagem adicional aumenta a espessura visual e a resistência mecânica da linha, mas também concentra perfurações nos mesmos furos do tecido. Em tecidos delicados, passagens excessivas (mais de 3) podem causar corte da trama têxtil (efeito picote de papel).",
    "beginnerExplanation": "É quantas vezes a agulha passa costurando por cima da mesma linhazinha. Passar 3 vezes faz a linha ficar gordinha e destacada (ponto triplo), ótima para fazer contornos bem visíveis.",
    "howItWorks": [
      "1. A agulha penetra no ponto A e avança para o ponto B (1ª passagem).",
      "2. A agulha recua do ponto B de volta para o ponto A (2ª passagem).",
      "3. A agulha avança novamente do ponto A para o ponto B (3ª passagem).",
      "4. O ciclo se repete ao longo de todo o vetor criando um contorno encorpado."
    ],
    "applications": [
      "Contornos de rostos e olhos em bordados infantis usando ponto triplo (Bean Stitch).",
      "Pespontos reforçados estilo jeans em bolsos e jaquetas.",
      "Linhas de marcação e quilting rústico com visual artesanal de costura manual."
    ],
    "characteristics": [
      "Cria relevo e presença visual sem necessidade de usar ponto satim largo.",
      "Gera linhas de alta durabilidade mecânica contra desfiamento.",
      "Aumenta a quantidade de pontos da matriz na proporção das passagens programadas."
    ],
    "commonErrors": [
      "❌ Usar 5 ou 7 passagens em malha fina, cortando o tecido e abrindo rasgos contínuos.",
      "❌ Programar ponto triplo com comprimento de ponto minúsculo (menor que 2 mm), criando nós de linha.",
      "❌ Usar agulha grossa (90/14) em linhas com muitas passagens sobrepostas."
    ],
    "troubleshootingTips": [
      "Tecido rasgando ao longo da linha de contorno: reduza a quantidade de passagens de 5 para 3 e aumente o comprimento do ponto para 3,0 mm.",
      "Contorno simples quase invisível no tecido: troque de pesponto simples (1 passagem) para ponto triplo (Bean Stitch - 3 passagens).",
      "Linha quebrando na 3ª passagem: use linha de bordar com boa lubricidade e agulha com ponta bola em malha."
    ],
    "dicaArtrelados": "Para contornos de desenhos infantis e bichinhos fofos, prefira o ponto triplo (Bean Stitch com 3 passagens e passo de 2,5 mm) em vez do ponto satim. Ele dá um acabamento moderno, leve e que nunca sai de moda!",
    "voceSabia": "O ponto triplo (Bean Stitch) consome exatamente o triplo de linha e de pontos em relação ao ponto corrido tradicional, mas confere uma textura semelhante ao pesponto manual de meada de algodão.",
    "practicalExercise": "Digitalize uma mesma linha reta de 5 cm com 1 passagem (ponto corrido), 3 passagens (ponto triplo) e 5 passagens. Borde as três lado a lado e compare a espessura visual e o relevo de cada uma.",
    "quickSummary": "Quantidade de passagens da agulha é o número de repetições de costura sobre o mesmo traço, definindo a espessura e o relevo das linhas de contorno.",
    "relatedTerms": [
      "Ponto Triplo (Bean Stitch)",
      "Ponto Corrido",
      "Passo do Ponto",
      "Efeito Picote"
    ],
    "tags": [
      "passagens",
      "contorno",
      "ponto triplo",
      "linhas"
    ]
  },
  {
    "id": "quantidade-de-repeticoes",
    "code": "Q-039",
    "letter": "Q",
    "term": "Quantidade de Repetições",
    "pronunciation": "quan-ti-da-de de re-pe-ti-coes",
    "level": "Iniciante 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim repetitio (ação de fazer novamente, reprodução periódica). Refere-se à duplicação de desenhos no bastidor ou na produção.",
    "summary": "Número de cópias idênticas de uma matriz organizadas dentro do mesmo bastidor ou executadas em lote na produção.",
    "definition": "A quantidade de repetições é a multiplicação de um mesmo motivo de bordado (como brasões, etiquetas, chaveiros ou monogramas) dispostos lado a lado na área útil de um bastidor grande (recurso Multi-Design / Grid Repeat), ou o número de ciclos totais programados para um lote de confecção.",
    "technicalDetails": "Em softwares, a ferramenta de repetição em grade (Matrix / Grid Copy) permite definir o espaçamento X e Y entre as peças e otimizar a sequência para que a máquina borde todas as cores 1 de uma só vez antes de trocar para a cor 2, economizando dezenas de trocas de linha.",
    "beginnerExplanation": "É quantas vezes você coloca o mesmo desenhinho dentro de um bastidor grandão (para bordar vários chaveiros ou emblemas de uma vez só) sem precisar trocar o bastidor a cada peça.",
    "howItWorks": [
      "1. A matriz individual é carregada na tela do software ou da máquina.",
      "2. Define-se o número de linhas (X) e colunas (Y) que cabem no bastidor selecionado.",
      "3. O software agrupa as cores de todas as cópias simultaneamente.",
      "4. A máquina borda todas as repetições em um único ciclo contínuo de bastidoramento."
    ],
    "applications": [
      "Produção de dezenas de tags, chaveiros e etiquetas escolares no mesmo bastidor grande.",
      "Bordado de múltiplos escudos e insígnias para uniformes corporativos.",
      "Criação de padrões repetitivos geométricos e barrados contínuos para toalhas."
    ],
    "characteristics": [
      "Multiplica a produtividade da bordadeira por hora de trabalho.",
      "Economiza entretela aproveitando toda a área útil do bastidor.",
      "Reduz drasticamente o número de trocas de linha quando as cores são agrupadas."
    ],
    "commonErrors": [
      "❌ Repetir matrizes sem agrupar as cores, fazendo a máquina trocar de linha a cada pecinha individual.",
      "❌ Deixar as repetições coladas demais, impedindo o corte e o acabamento individual das peças depois.",
      "❌ Ultrapassar a área máxima de segurança do bastidor, fazendo o pantógrafo bater na moldura plástica."
    ],
    "troubleshootingTips": [
      "Máquina trocando de cor 30 vezes no bastidor cheio: aplique a função 'Otimizar Cores em Repetições' (Color Sort) no software.",
      "Peças cortadas tortas após o bordado: deixe um espaçamento mínimo de 1,5 a 2 cm entre as repetições para a tesoura trabalhar com folga.",
      "Bordado encostando na borda do bastidor: reduza o número de repetições ou use um bastidor de maior dimensão."
    ],
    "dicaArtrelados": "Ao produzir chaveiros e tags em quantidade no bastidor grande (ex: 13x18 ou 16x26), sempre use a ferramenta de agrupar cores. Você bordará 6 ou 8 peças no tempo que gastaria para fazer apenas duas!",
    "voceSabia": "Em máquinas industriais de rolo contínuo (Schiffli), a quantidade de repetições de um mesmo padrão de renda pode ultrapassar 1.000 repetições simultâneas em um painel de 15 metros de largura.",
    "practicalExercise": "Pegue uma matriz pequena de chaveiro (5x5 cm). No seu programa de bordado, multiplique para 4 repetições dentro de um bastidor 13x18 cm e aplique o 'Color Sort'. Veja como a sequência de cores se unifica para todas as cópias.",
    "quickSummary": "Quantidade de repetições é a multiplicação de matrizes em um mesmo bastidor com cores unificadas, acelerando a produção seriada.",
    "relatedTerms": [
      "Multi-Design",
      "Otimização de Cores",
      "Área Útil de Bastidor",
      "Produção em Série"
    ],
    "tags": [
      "repetições",
      "grade",
      "produção",
      "produtividade"
    ]
  },
  {
    "id": "quantidade-de-pontos-de-arremate",
    "code": "Q-040",
    "letter": "Q",
    "term": "Quantidade de Pontos de Arremate",
    "pronunciation": "quan-ti-da-de de pon-tos de ar-re-ma-te",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quantitas e remetiri. Refere-se à contagem exata de micro-laçadas destinadas à amarração mecânica dos fios.",
    "summary": "Número preciso de micro-pontos (tipicamente de 3 a 5 pontos) disparados para fixar a laçada no início e término de cada objeto.",
    "definition": "A quantidade de pontos de arremate é a contagem de penetrações curtas e concentradas programadas para travar a laçada da linha superior com a da bobina antes de um corte ou salto. O número correto garante que o ponto nunca se solte após lavagens mecânicas, sem formar volume excessivo ou calombos rígidos na peça.",
    "technicalDetails": "Padrão ótimo da indústria: 3 a 4 pontos com comprimento entre 0,6 mm e 1,0 mm para linhas normais 40wt. Para linhas finas 60wt em tecidos delicados, 3 pontos são suficientes; para fios grossos 30wt ou metálicos, recomendam-se 4 a 5 pontos com menor densidade para dissipar o nó.",
    "beginnerExplanation": "É quantos pontinhos minúsculos a máquina dá no mesmo lugar para 'amarrar' a linha antes de cortar. Três ou quatro pontinhos seguram perfeitamente sem criar um bolo de linha duro.",
    "howItWorks": [
      "1. Ao receber a ordem de finalizar o objeto, a máquina reduz a velocidade.",
      "2. São disparados de 3 a 4 micro-pontos cruzados ou em linha reta.",
      "3. O entrelaçamento interno com a linha da bobina trava o filamento.",
      "4. A faca corta a linha logo após o último ponto de arremate sem perigo de desmanchar."
    ],
    "applications": [
      "Calibração de nós de amarração em monogramas e letras minúsculas de camisaria.",
      "Configuração de segurança em uniformes hospitalares e industriais lavados em altas temperaturas.",
      "Programação de acabamento em bordados 3D com EVA onde o fio não pode escapar."
    ],
    "characteristics": [
      "Equilíbrio ideal entre resistência à tração e invisibilidade estética.",
      "Comprimento milimétrico controlado para não perfurar o mesmo ponto e cortar o tecido.",
      "Configurável globalmente nas preferências do software de bordado."
    ],
    "commonErrors": [
      "❌ Programar 8 a 10 pontos de arremate, criando uma bolota dura de linha que machuca e quebra a agulha.",
      "❌ Deixar apenas 1 ou 2 pontos em tecidos lisos como cetim, fazendo a ponta da linha escapar na primeira lavagem.",
      "❌ Usar arremates muito longos (> 2 mm) que ficam visíveis saindo para fora das bordas do desenho."
    ],
    "troubleshootingTips": [
      "Bordado desmanchando nas pontas: aumente a quantidade de pontos de arremate de 2 para 4 no software.",
      "Nó grosso e duro atrás das letras: reduza de 6 para 3 pontos de arremate e escolha o estilo 'Linear' (em linha).",
      "Agulha quebrando no final do texto: diminua o número de pontos de amarração para evitar acúmulo de densidade no mesmo local."
    ],
    "dicaArtrelados": "A regra de ouro Artrelados para arremates perfeitos: programe 4 micro-pontos de 0,8 mm no início (Tie-in) e 4 micro-pontos no final (Tie-off). Esse é o número mágico que nunca desmancha e fica 100% invisível!",
    "voceSabia": "Em testes de estresse mecânico, um arremate de 4 micro-pontos suporta mais de 50 ciclos de lavagem e centrifugação em máquina de lavar doméstica sem apresentar afrouxamento do fio.",
    "practicalExercise": "No seu software de programação, abra as propriedades de arremate automático (Auto Tie). Ajuste a quantidade de pontos para 4 e o comprimento para 0,8 mm. Salve essa configuração como padrão para todas as suas matrizes.",
    "quickSummary": "Quantidade de pontos de arremate é a contagem exata de micro-laçadas (ideal de 3 a 4) necessárias para travar a linha com máxima segurança e total discrição.",
    "relatedTerms": [
      "Pontos de Amarração",
      "Tie-in",
      "Tie-off",
      "Qualidade do Arremate"
    ],
    "tags": [
      "arremate",
      "nós",
      "programação",
      "segurança"
    ]
  },
  {
    "id": "quilting",
    "code": "Q-041",
    "letter": "Q",
    "term": "Quilting",
    "pronunciation": "cu-íl-ting",
    "level": "Iniciante 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino (termo técnico anglo-saxão consagrado).",
    "origin": "Do inglês arcaico quilte e do latim culcita (almofada, colchão estofado, acolchoamento). Técnica histórica de unir três camadas têxteis por meio de pespontos decorativos.",
    "summary": "Técnica de costura decorativa e estrutural que une o topo, a manta acrílica e o forro em uma única peça acolchoada tridimensional.",
    "definition": "O quilting é a arte e a técnica de pespontar um 'sanduíche têxtil' composto por três camadas: tecido de topo (top), enchimento intermediário (manta acrílica, poliéster, algodão ou lã) e tecido de forro (backing). Além de fixar a manta para que não embole nas lavagens, o quilting cria texturas táteis, volumes em relevo e ricos padrões visuais na superfície.",
    "technicalDetails": "Realizado com pontos corridos de passo longo (2.5 a 4.0 mm) e linhas de algodão ou poliéster 40wt ou 50wt. A tensão do fio deve ser levemente reduzida para acomodar a compressão da manta sem achatar excessivamente o acolchoamento.",
    "beginnerExplanation": "É o famoso acolchoado das colchas e almofadas: costurar o tecido da frente, a manta fofinha do meio e o tecido de trás juntos, formando desenhos lindos em alto-relevo.",
    "howItWorks": [
      "1. Montagem do sanduíche têxtil (Topo + Manta + Forro) com alfinetes ou cola spray temporária.",
      "2. A agulha penetra através das três camadas simultaneamente.",
      "3. A linha da bobina entrelaça no meio da manta acrílica, ocultando a laçada.",
      "4. A compressão das costuras cria o relevo fofo característico do acolchoado.",
      "5. A peça ganha estrutura térmica, peso aconchegante e estabilidade dimensional."
    ],
    "applications": [
      "Confecção de colchas, mantas e edredons clássicos de patchwork.",
      "Estruturação de bolsas, necessaires, mochilas e carteiras acolchoadas.",
      "Painéis artísticos de parede e almofadas decorativas para decoração de interiores."
    ],
    "characteristics": [
      "Estrutura tridimensional volumosa e acolchoada ao toque.",
      "Alta durabilidade e retenção térmica proporcionadas pela manta intermediária.",
      "Pode ser executado de forma manual, na máquina de costura reta ou na máquina de bordar computadorizada."
    ],
    "commonErrors": [
      "❌ Não prender bem as três camadas antes de costurar, fazendo o tecido de trás enrugar e sobrar no final.",
      "❌ Usar tensão de linha muito alta que esmaga a manta e repuxa o trabalho.",
      "❌ Usar manta resinada grossa e dura em peças que exigem caimento suave."
    ],
    "troubleshootingTips": [
      "Tecido de trás enrugando durante o quilting: use cola spray temporária (Spray 505) para fixar as camadas antes de bordar.",
      "Linha quebrando na manta grossa: use agulha própria para Quilting (tamanho 80/12 ou 90/14) com ponta cônica especial.",
      "Costura afundando demais e sumindo: aumente o comprimento do ponto para 3,0 mm ou use linha com espessura 40wt."
    ],
    "dicaArtrelados": "Para bolsas e necessaires com quilting perfeito, use manta acrílica R1 (com resina termocolante em um lado) ou R2 (resina dos dois lados). Ao passar o ferro, os tecidos grudam na manta e não saem do lugar na hora de acolchoar!",
    "voceSabia": "O exemplo mais antigo de peça com quilting preservada no mundo é um tapete de chão encontrado em uma tumba na Mongólia, datado entre o século I a.C. e o século I d.C.",
    "practicalExercise": "Corte dois quadrados de tecido de 20x20 cm e um pedaço de manta acrílica R1. Passe o ferro para colar o topo na manta. Borde linhas retas diagonais formando losangos e sinta a textura acolchoada que se forma.",
    "quickSummary": "Quilting é a técnica clássica de acolchoamento que une tecido de topo, manta e forro com costuras decorativas em relevo.",
    "relatedTerms": [
      "Quilting Computadorizado",
      "Quilting in the Hoop",
      "Manta Acrílica R1/R2",
      "Sanduíche de Quilting"
    ],
    "tags": [
      "quilting",
      "acolchoado",
      "manta",
      "patchwork"
    ]
  },
  {
    "id": "quilting-computadorizado",
    "code": "Q-042",
    "letter": "Q",
    "term": "Quilting Computadorizado",
    "pronunciation": "cu-íl-ting com-pu-ta-do-ri-za-do",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês computerized quilting. Evolução tecnológica das máquinas pantográficas para acolchoamento automatizado.",
    "summary": "Execução automatizada de padrões de acolchoamento de alta precisão através de máquinas de bordar ou sistemas de braço longo (Longarm).",
    "definition": "O quilting computadorizado é a realização de desenhos de acolchoamento geométricos, florais ou abstratos comandados digitalmente por arquivos de matriz. Garante espaçamento milimétrico idêntico entre todas as linhas, repetição perfeita de padrões ao longo de grandes superfícies e ausência das oscilações manuais da costura livre.",
    "technicalDetails": "As matrizes de quilting utilizam predominantemente ponto corrido contínuo (Single Run ou Triple Bean) sem cortes intermediários, com pontos de entrada e saída projetados nas bordas do bloco para facilitar emendas sequenciais (Endless Quilting).",
    "beginnerExplanation": "É fazer o acolchoado perfeito usando a máquina de bordar computadorizada: você coloca o sanduíche no bastidor e a máquina borda desenhos e arabescos maravilhosos sozinha com precisão matemática.",
    "howItWorks": [
      "1. A matriz de quilting digital é carregada no painel da máquina de bordar.",
      "2. O sanduíche têxtil é fixado no bastidor com firmeza adequada à manta.",
      "3. O pantógrafo movimenta o bastidor seguindo os vetores do arquivo sem paradas.",
      "4. A costura contínua percorre todo o bloco gerando relevos simétricos e perfeitos."
    ],
    "applications": [
      "Acolchoamento de colchas e cobre-leitos em blocos modulares emendados.",
      "Fundos texturizados para almofadas e jogos americanos finos.",
      "Estruturação geométrica de painéis para bolsas de alta costura artesanal."
    ],
    "characteristics": [
      "Simetria e paralelismo milimétricos inatingíveis no quilting manual livre.",
      "Fluxo de costura contínuo minimizando cortes de linha e nós.",
      "Capacidade de reproduzir padrões complexos de arabescos e mandalas em minutos."
    ],
    "commonErrors": [
      "❌ Bastidorar o sanduíche com muita força, deformando a manta e deixando o tecido frouxo ao desbastidorar.",
      "❌ Usar matrizes com pontos muito curtos (< 1,8 mm) que esmagam e picotam a manta acrílica.",
      "❌ Não alinhar os pontos de encaixe ao emendar blocos contínuos de quilting."
    ],
    "troubleshootingTips": [
      "Camadas de baixo repuxando no bastidor: use alfinetes curtos de segurança ou fita crepe de fixação nas bordas do bastidor.",
      "Bordado de quilting demorando demais: escolha matrizes de 'linha contínua' (Single Line Quilting) que não possuem saltos nem nós.",
      "Desenho torto na emenda do próximo bloco: utilize a função de marcação de laser ou ponteiro de agulha no painel para casar a saída com a nova entrada."
    ],
    "dicaArtrelados": "Em quilting computadorizado no bastidor, use linha de bordar poliéster na mesma cor exata do tecido de topo (tom sobre tom). O grande charme do quilting não é a cor da linha, mas o jogo de luz e sombra do relevo!",
    "voceSabia": "Sistemas industriais de quilting computadorizado contínuo (máquinas multi-agulhas de rolo) conseguem acolchoar mais de 100 edredons de casal por dia de forma 100% ininterrupta.",
    "practicalExercise": "Carregue uma matriz de quilting geométrica de 13x18 cm no seu bastidor com sanduíche de tecido e manta R1. Borde o bloco e observe a precisão do paralelismo das linhas de costura.",
    "quickSummary": "Quilting computadorizado é o acolchoamento automático via matriz digital, proporcionando simetria perfeita, rapidez e acabamento profissional.",
    "relatedTerms": [
      "Quilting em Bastidor",
      "Quilting Contínuo",
      "Quilting Decorativo",
      "Longarm"
    ],
    "tags": [
      "quilting",
      "computadorizado",
      "precisão",
      "acolchoado"
    ]
  },
  {
    "id": "quilting-em-maquina-de-bordar",
    "code": "Q-043",
    "letter": "Q",
    "term": "Quilting em Máquina de Bordar",
    "pronunciation": "cu-íl-ting em ma-qui-na de bor-dar",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Adaptação criativa dos ateliês modernos que utilizam a máquina de bordar doméstica ou semi-industrial para produzir peças de acolchoamento.",
    "summary": "Método de execução de acolchoado e patchwork estruturado aproveitando o pantógrafo e os bastidores da máquina de bordar.",
    "definition": "O quilting em máquina de bordar é a técnica na qual a bordadeira utiliza os recursos de precisão do pantógrafo X-Y para acolchoar blocos individuais ou projetos completos no bastidor, dispensando a necessidade de máquinas industriais de braço longo (Longarm) ou treinamento complexo de quilting livre manual.",
    "technicalDetails": "Requer o uso de bastidores magnéticos ou bastidores com técnica de flutuação para acomodar a espessura da manta sem forçar os aros plásticos, além de agulhas calibre 80/12 ou 90/14 para atravessar o sanduíche com facilidade.",
    "beginnerExplanation": "É usar a sua máquina de bordar tradicional para fazer peças acolchoadas lindas, deixando a máquina desenhar as costuras perfeitamente enquanto você apenas acompanha o processo.",
    "howItWorks": [
      "1. A entretela hidrossolúvel ou rasgável é colocada no bastidor (ou usa-se o forro direto).",
      "2. A manta e o tecido de topo são posicionados no bastidor com cola temporária.",
      "3. A máquina executa a matriz de quilting cobrindo a área útil do bastidor.",
      "4. A peça é retirada, refilada e as bordas recebem o viés de acabamento."
    ],
    "applications": [
      "Confecção de jogos americanos acolchoados e caminhos de mesa de luxo.",
      "Produção de mantas de bebê com blocos de patchwork acolchoados um a um.",
      "Estruturação de capas de cadernos, bíblias e estojos no bastidor."
    ],
    "characteristics": [
      "Acessível para qualquer ateliê que possua uma máquina de bordar doméstica padrão.",
      "Dispensa o esforço físico de empurrar colchas pesadas na máquina de costura reta.",
      "Permite combinar quilting de fundo com bordados de nomes e apliques no mesmo projeto."
    ],
    "commonErrors": [
      "❌ Tentar fechar o bastidor tradicional em mantas muito grossas (R2 de 150g), quebrando os aros de plástico.",
      "❌ Usar linha de bobina de cor diferente da linha superior em peças que mostram o verso.",
      "❌ Não conferir se o tecido de forro está liso embaixo do bastidor antes de dar 'Start'."
    ],
    "troubleshootingTips": [
      "Bastidor não fecha por causa da grossura da manta: prenda apenas a entretela no bastidor e flutue a manta e o tecido por cima com cola spray.",
      "Verso do quilting feio com pontinhos brancos: use na bobina a mesma linha de bordar colorida que está usando em cima.",
      "Calcador engasgando na manta: aumente a altura do pé calcador nas configurações da máquina para não arrastar no tecido fofo."
    ],
    "dicaArtrelados": "Quando for fazer quilting em máquina de bordar em peças dupla-face (como jogos americanos), encha a bobina com a mesma linha de bordar colorida que está no carretel de cima. O acabamento do verso fica tão perfeito quanto o da frente!",
    "voceSabia": "Hoje, mais de 60% das donas de máquinas de bordar domésticas utilizam suas máquinas com frequência para fazer projetos acolchoados e peças no bastidor (In The Hoop).",
    "practicalExercise": "Monte um sanduíche de 15x15 cm com tricoline e manta R1. Coloque no bastidor 13x18 cm com entretela rasgável e borde uma matriz de quilting. Veja a facilidade e a perfeição dos pontos.",
    "quickSummary": "Quilting em máquina de bordar é a técnica de acolchoar peças com perfeição milimétrica usando os bastidores e recursos da sua bordadeira.",
    "relatedTerms": [
      "Quilting Computadorizado",
      "Quilting in the Hoop",
      "Técnica de Flutuação",
      "Altura do Calcador"
    ],
    "tags": [
      "quilting",
      "máquina",
      "bastidor",
      "patchwork"
    ]
  },
  {
    "id": "quilting-livre",
    "code": "Q-044",
    "letter": "Q",
    "term": "Quilting Livre",
    "pronunciation": "cu-íl-ting li-vre",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Free-Motion Quilting (FMQ). Técnica artesanal em que a operadora conduz o tecido com as mãos livres sob a agulha em movimento.",
    "summary": "Estilo de acolchoamento manual ou matriz computadorizada contínua caracterizada por curvas sinuosas, labirintos e arabescos orgânicos (Stippling).",
    "definition": "O quilting livre (ou Free-Motion Quilting no bordado manual, e Stippling / Meander na programação digital) é caracterizado por traçados orgânicos e curvilíneos contínuos que preenchem fundos sem que as linhas de costura jamais se cruzem. Cria uma textura fofa uniforme que destaca e 'empurra' as áreas em relevo ao redor.",
    "technicalDetails": "Na digitalização de matrizes, o padrão de quilting livre (Stippling) utiliza comprimento de ponto constante de 2.5 a 3.0 mm e espaçamento entre voltas de 4.0 a 6.0 mm, com raio de curvatura suave para evitar cantos vivos e nós de linha.",
    "beginnerExplanation": "É aquele desenho de 'minhoquinhas' ou curvas fofinhas que preenche todo o fundo de uma colcha ou almofada sem deixar as linhas se cruzarem, dando um efeito fofinho maravilhoso.",
    "howItWorks": [
      "1. O algoritmo do software gera curvas de Bezier contínuas cobrindo a área delimitada.",
      "2. O traçado desvia automaticamente dos objetos centrais (nomes ou desenhos).",
      "3. A máquina borda o padrão em costura ininterrupta do início ao fim.",
      "4. O fundo acolchoado afunda levemente, fazendo o bordado central saltar em alto-relevo."
    ],
    "applications": [
      "Fundos acolchoados para destacar monogramas e nomes em almofadas de bebê.",
      "Preenchimento de áreas vazias em colchas de patchwork clássicas.",
      "Texturização de bolsas e carteiras de tecido dando aspecto de couro matelassê."
    ],
    "characteristics": [
      "Desenho fluido, contínuo e orgânico sem cruzamento de linhas.",
      "Destaca visualmente os elementos centrais não acolchoados (efeito Trapunto).",
      "Costura rápida e com baixo número de pontos por centímetro quadrado."
    ],
    "commonErrors": [
      "❌ Deixar o espaçamento das curvas muito apertado (< 2 mm), deixando o fundo rígido e sem volume.",
      "❌ Programar curvas com cantos pontudos que quebram a fluidez do desenho.",
      "❌ Deixar linhas de quilting passarem por cima de nomes ou apliques já bordados."
    ],
    "troubleshootingTips": [
      "Quilting cobrindo as letras: no software, use a ferramenta de 'Excluir Área' para manter uma margem de segurança de 3 mm ao redor do nome.",
      "Desenho parecendo muito ralo: reduza o espaçamento do padrão Stippling de 8 mm para 5 mm.",
      "Linha estalando nas curvas: reduza a velocidade da máquina para 600 PPM para curvas suaves."
    ],
    "dicaArtrelados": "Para fazer o nome de um bebê 'saltar' para fora da toalha ou da manta, faça um fundo de quilting livre (Stippling) em toda a volta do nome. O nome fica fofo e saliente como mágica!",
    "voceSabia": "O estilo de curvas livres do Stippling foi desenvolvido no século XIX pelas pioneiras americanas para acolchoar mantas de forma rápida sem precisar riscar linhas retas com giz.",
    "practicalExercise": "No seu software de bordado, digite um nome e aplique a função automática de 'Preenchimento de Fundo com Quilting / Stippling'. Observe como o software desenha as curvas contornando as letras com perfeição.",
    "quickSummary": "Quilting livre é o padrão de curvas contínuas e sinuosas que cria fundos acolchoados orgânicos e destaca desenhos em alto-relevo.",
    "relatedTerms": [
      "Stippling / Meander",
      "Quilting Computadorizado",
      "Efeito Trapunto",
      "Fundo Texturizado"
    ],
    "tags": [
      "quilting",
      "stippling",
      "curvas",
      "relevo"
    ]
  },
  {
    "id": "quilting-com-matriz-digital",
    "code": "Q-045",
    "letter": "Q",
    "term": "Quilting com Matriz Digital",
    "pronunciation": "cu-íl-ting com ma-triz di-gi-tal",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Termo contemporâneo da indústria criativa digital para arquivos específicos de acolchoamento.",
    "summary": "Arquivos de bordado (PES, JEF, DST) especialmente digitalizados para executar blocos de acolchoamento em máquinas de bordar.",
    "definition": "O quilting com matriz digital é o uso de arquivos de programação desenvolvidos exclusivamente para técnicas de acolchoado. Diferencia-se das matrizes comuns por priorizar linhas de costura corrida contínuas, ausência quase total de pontos cheios satim pesados, densidade aberta e pontos de referência para emendas perfeitas de múltiplos blocos.",
    "technicalDetails": "As matrizes de quilting digital são otimizadas para gerar o mínimo de tração sobre o sanduíche têxtil. Elas possuem comandos de pesponto com passo de 2.8 a 3.5 mm e trajetórias que equilibram a expansão da manta acrílica em todas as direções.",
    "beginnerExplanation": "São as matrizes feitas especialmente para acolchoar: arquivos leves, que costuram rápido, não têm partes pesadas e formam desenhos lindos de arabescos e formas geométricas.",
    "howItWorks": [
      "1. A matriz é baixada ou criada em softwares especializados de bordado e quilting.",
      "2. É carregada no pendrive e inserida na máquina de bordar.",
      "3. A máquina segue o arquivo bordando a linha contínua através do sanduíche de tecido e manta.",
      "4. O arquivo finaliza a costura exatamente na borda do bastidor para permitir a próxima emenda."
    ],
    "applications": [
      "Execução de barrados decorativos contínuos em toalhas de mesa e colchas.",
      "Bordado de mandalas e medalhões acolchoados em almofadas de veludo.",
      "Montagem modular de mantas grandes feitas bloco a bloco em bastidores padrão."
    ],
    "characteristics": [
      "Arquivo leve com número de pontos relativamente baixo e execução rápida.",
      "Costura contínua sem quebras de linha ou nós visíveis.",
      "Compatível com todas as marcas de máquinas domésticas e industriais."
    ],
    "commonErrors": [
      "❌ Tentar usar matrizes de bordado comum densas no lugar de matrizes específicas de quilting sobre mantas grossas.",
      "❌ Redimensionar matrizes de quilting de forma desproporcional, deformando os passos de ponto.",
      "❌ Não verificar os pontos de entrada e saída para continuidade de blocos vizinhos."
    ],
    "troubleshootingTips": [
      "Pontos afundando e sumindo na manta: use matrizes com ponto triplo (Bean Stitch) ou aumente a espessura da linha para 30wt.",
      "Matriz deformando o quadrado do bloco: use compensação de encolhimento e não estique o tecido ao colocar no bastidor.",
      "Desenho não encaixando na emenda: posicione o bastidor utilizando os gabaritos plásticos de alinhamento com grade cartesiana."
    ],
    "dicaArtrelados": "Colecione matrizes de quilting digital com cantos modulares (Corner Blocks), barrados (Border Blocks) e centros (Center Medallions). Com esses três elementos, você monta colchas inteiras combinando os blocos no bastidor!",
    "voceSabia": "Existem softwares dedicados exclusivamente à criação de matrizes de quilting digital, como o Art & Stitch e o Floriani FTC-U, usados por quiltmakers profissionais do mundo todo.",
    "practicalExercise": "Baixe uma matriz de quilting digital de arabesco floral. Carregue no software e use o simulador de costura: repare como a agulha caminha sem nunca cortar a linha do início ao fim do arquivo.",
    "quickSummary": "Quilting com matriz digital é o uso de arquivos de bordado otimizados para acolchoar tecidos e mantas com rapidez, leveza e beleza contínua.",
    "relatedTerms": [
      "Quilting Computadorizado",
      "Quilting Contínuo",
      "Ponto Corrido",
      "Arquivos de Matriz"
    ],
    "tags": [
      "matriz",
      "quilting",
      "digital",
      "arquivos"
    ]
  },
  {
    "id": "quilting-em-bastidor",
    "code": "Q-046",
    "letter": "Q",
    "term": "Quilting em Bastidor",
    "pronunciation": "cu-íl-ting em bas-ti-dor",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês In-The-Hoop Quilting (ITH Quilting). Método de confecção de peças acolchoadas confinadas aos limites físicos do bastidor.",
    "summary": "Técnica completa de montagem, acolchoamento e união de blocos de patchwork realizada 100% dentro do bastidor da máquina de bordar.",
    "definition": "O quilting em bastidor é o método em que cada etapa do acolchoamento (estabilização, fixação da manta, costura de tiras de tecido de patchwork, acolchoado decorativo e costura do forro) é realizada sequencialmente pela máquina de bordar dentro dos limites do aro de bastidor.",
    "technicalDetails": "Permite produzir blocos perfeitos conhecidos como 'Quilt-As-You-Go' (acolchoe conforme monta). Os blocos são finalizados individualmente no bastidor e posteriormente unidos entre si na máquina de costura convencional por meio de tiras de junção (sashing).",
    "beginnerExplanation": "É fazer o bloco de acolchoado inteiro dentro do bastidor: a máquina costura os retalhos de tecido, coloca a manta, faz o bordado fofinho e já deixa o quadradinho pronto para você só juntar com os outros depois.",
    "howItWorks": [
      "1. A máquina borda a linha guia de marcação na entretela do bastidor.",
      "2. Posiciona-se a manta e os retalhos de tecido seguindo a numeração programada.",
      "3. A máquina costura e rebate cada pedaço de tecido com precisão milimétrica.",
      "4. Executa-se o quilting decorativo sobre o bloco pronto.",
      "5. O bloco é retirado do bastidor perfeitamente quadrado e acolchoado."
    ],
    "applications": [
      "Produção de colchas modulares montadas em pequenos bastidores domésticos (13x18 cm).",
      "Confecção de jogos de sousplat e descansos de panela acolchoados.",
      "Criação de blocos temáticos de patchwork tradicional (Crazy Quilt, Log Cabin, Estrela de Ohio)."
    ],
    "characteristics": [
      "Elimina erros de corte e emendas tortas típicas do patchwork manual tradicional.",
      "Aproveitamento máximo de retalhos de tecidos nobres.",
      "Resultado padronizado onde todos os blocos saem exatamente com a mesma medida milimétrica."
    ],
    "commonErrors": [
      "❌ Cortar os retalhos menores do que a linha guia marcada pela máquina, deixando frestas de manta expostas.",
      "❌ Esquecer de passar a ferro o tecido entre as etapas de virada no bastidor.",
      "❌ Puxar a entretela com força, deformando a quadratura do bloco recém-acolchoado."
    ],
    "troubleshootingTips": [
      "Bloco ficando torto nas bordas: refile com cortador circular e régua de patchwork apoiando na linha de marcação externa feita pela máquina.",
      "Tecido embolando na virada: use um mini-ferro de passar artesanal diretamente ao lado da máquina de bordar para assentar as costuras.",
      "Manta aparecendo nas emendas: aumente a margem de costura dos retalhos para pelo menos 1,0 cm além da linha guia."
    ],
    "dicaArtrelados": "Tenha uma mini tábua de passar e um ferrinho de passar pequeno ao lado da sua máquina de bordar. Passar as costuras de cada retalho dentro do bastidor é o grande segredo para o bloco de quilting ficar lisinho e perfeito!",
    "voceSabia": "Com a técnica de quilting em bastidor modular (Quilt-As-You-Go), é possível confeccionar uma colcha inteira de casal King Size usando apenas uma máquina de bordar simples de bastidor 13x18 cm.",
    "practicalExercise": "Faça um bloco simples de patchwork 'Crazy' em bastidor: carregue uma matriz de 3 retalhos no bastidor, siga os passos de costura da máquina virando os tecidos e termine com o quilting central. Meça os quatro lados com régua.",
    "quickSummary": "Quilting em bastidor é a criação de blocos acolchoados e de patchwork 100% automatizados dentro dos aros da máquina de bordar.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Patchwork Computadorizado",
      "Quilt-As-You-Go",
      "Linhas de Marcação"
    ],
    "tags": [
      "bastidor",
      "quilting",
      "ith",
      "patchwork"
    ]
  },
  {
    "id": "quilting-decorativo",
    "code": "Q-047",
    "letter": "Q",
    "term": "Quilting Decorativo",
    "pronunciation": "cu-íl-ting de-co-ra-ti-vo",
    "level": "Iniciante 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim decorare (adornar, embelezar) e do inglês quilting. Refere-se a padrões figurativos de acolchoado com apelo estético visual.",
    "summary": "Acolchoamento com motivos figurativos, florais, geométricos, infantis ou temáticos que embelezam a superfície têxtil.",
    "definition": "O quilting decorativo vai além da fixação mecânica da manta para se tornar o elemento artístico principal da peça. Utiliza matrizes com desenhos de corações, plumas clássicas (Feather Quilting), flores, arabescos barrocos, estrelas ou ondas marítimas, transformando tecidos lisos em superfícies ricas em textura e valor decorativo.",
    "technicalDetails": "Pode ser executado com linhas foscas de algodão para um visual tradicional e suave, ou com linhas de poliéster brilhante e fios metálicos para destacar os traços sobre tecidos acetinados e veludos.",
    "beginnerExplanation": "É fazer desenhos lindos acolchoados: corações, florzinhas, nuvens e arabescos que deixam a peça super fofa e enfeitada, transformando um tecido simples numa obra de arte.",
    "howItWorks": [
      "1. A matriz decorativa temática é selecionada conforme o estilo da peça (infantil, clássico ou moderno).",
      "2. A máquina borda os motivos gráficos com pespontos contínuos sobre o sanduíche.",
      "3. O relevo da manta projeta as formas decorativas para a frente da peça.",
      "4. A luz reflete no brilho das linhas destacando o desenho tridimensional."
    ],
    "applications": [
      "Bordados em kits de berço com motivos de nuvens, estrelas e ursinhos acolchoados.",
      "Almofadas de luxo com arabescos e plumas clássicas vitorianas.",
      "Bolsas maternidade e mochilas infantis com texturas temáticas personalizadas."
    ],
    "characteristics": [
      "Alto apelo visual e decorativo que agrega valor imediato à peça.",
      "Versatilidade de temas para todas as ocasiões e idades.",
      "Sensação tátil suave e agradável ao toque."
    ],
    "commonErrors": [
      "❌ Escolher motivos decorativos muito carregados que competem visualmente com o bordado principal de nome.",
      "❌ Usar linha de cor muito contrastante sobre tecido estampado, gerando poluição visual.",
      "❌ Deixar pontos muito frouxos em curvas decorativas acentuadas."
    ],
    "troubleshootingTips": [
      "Desenho decorativo sumindo no tecido estampado: use o quilting decorativo em tecidos lisos ou troque por uma cor de linha que contraste com o fundo.",
      "Bordado principal ficando ofuscado: diminua a densidade do quilting decorativo de fundo ao redor do brasão.",
      "Linha metálica quebrando no quilting decorativo: reduza a velocidade da máquina para 450 PPM e aplique silicone no fio."
    ],
    "dicaArtrelados": "Em enxovais de bebê, use quilting decorativo de nuvens ou coraçõezinhos com linha branca sobre tecido percal branco. O efeito 'branco no branco' é o suprassumo da elegância e sofisticação no ateliê!",
    "voceSabia": "O padrão de plumas no quilting (Feather Quilting) é considerado o símbolo máximo da realeza no patchwork tradicional desde o século XVIII na Inglaterra.",
    "practicalExercise": "Borde um coração de quilting decorativo em tecido liso com manta R1. Passe suavemente os dedos sobre a superfície e sinta como o relevo acolchoado valoriza o desenho sem precisar de preenchimentos pesados.",
    "quickSummary": "Quilting decorativo é o uso de temas artísticos e figurativos no acolchoamento, unindo beleza estética, textura e alto valor agregado.",
    "relatedTerms": [
      "Quilting Computadorizado",
      "Plumas de Quilting",
      "Quilting Livre",
      "Relevo Têxtil"
    ],
    "tags": [
      "quilting",
      "decorativo",
      "arabescos",
      "arte"
    ]
  },
  {
    "id": "quilting-de-contorno",
    "code": "Q-048",
    "letter": "Q",
    "term": "Quilting de Contorno",
    "pronunciation": "cu-íl-ting de con-tor-no",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Echo Quilting / Outline Quilting. Técnica inspirada no acolchoamento havaiano tradicional.",
    "summary": "Linhas de acolchoamento paralelas que circundam um desenho principal a distâncias constantes, criando ondas concêntricas de relevo.",
    "definition": "O quilting de contorno (ou Echo Quilting / Quilting em Eco) é a aplicação de fileiras de costura corrida paralelas que repetem o formato exato de um motivo central (como uma flor, letra ou aplique), afastando-se progressivamente a distâncias regulares (como 6 mm, 12 mm e 18 mm), lembrando as ondas formadas por uma pedra jogada na água.",
    "technicalDetails": "Na programação de matrizes, a ferramenta de contorno concêntrico (Offset / Echo Lines) gera trajetórias equidistantes automáticas ao redor dos objetos vetoriais com controle preciso de espaçamento e compensação de cantos arredondados.",
    "beginnerExplanation": "É fazer costurinhas em volta do desenho principal como se fossem 'ondas na água', repetindo o formato do desenho várias vezes para fora e fazendo ele saltar em alto-relevo.",
    "howItWorks": [
      "1. O objeto central (bordado ou aplique) é delimitado no software.",
      "2. Gera-se a primeira linha de contorno a cerca de 5 a 6 mm de distância da borda.",
      "3. Geram-se linhas subsequentes paralelas repetindo a mesma curvatura.",
      "4. A máquina borda as ondas concêntricas acolchoando o tecido circundante.",
      "5. A área central não acolchoada ganha volume e destaque tridimensional imediato."
    ],
    "applications": [
      "Quilting havaiano tradicional com motivos de folhas e flores tropicais.",
      "Destaque de monogramas e brasões corporativos em almofadas e painéis.",
      "Contorno de figuras de aplique em colchas infantis e mantas decorativas."
    ],
    "characteristics": [
      "Cria sensação de movimento e irradiação visual ao redor do tema principal.",
      "Proporciona transição suave entre o bordado central e a área acolchoada.",
      "Excelente controle de enrugamento ao redor de apliques pesados."
    ],
    "commonErrors": [
      "❌ Fazer as linhas de eco muito próximas umas das outras (< 3 mm), amassando o tecido.",
      "❌ Variar a distância entre as linhas manualmente sem manter o paralelismo exato.",
      "❌ Deixar as linhas de eco cruzarem acidentalmente sobre o motivo central."
    ],
    "troubleshootingTips": [
      "Linhas de eco tortas ou desalinhadas: utilize a ferramenta de 'Eco Automático' (Echo Quilting) do software em vez de desenhar à mão livre.",
      "Relevo não aparecendo: aumente a espessura da manta para R2 de 100g ou 150g.",
      "Linha quebrando na curva fechada: ajuste os cantos do eco para curvas suaves em vez de ângulos retos agudos."
    ],
    "dicaArtrelados": "Para valorizar um aplique de tecido em uma almofada, faça 3 linhas de quilting de contorno a 6 mm de distância uma da outra ao redor do aplique. Ele parecerá uma verdadeira escultura de tecido!",
    "voceSabia": "O Echo Quilting é a marca registrada do artesanato tradicional das ilhas do Havaí, criado pelas nativas no século XIX para representar o movimento das ondas do oceano Pacífico.",
    "practicalExercise": "No software, coloque uma letra maiúscula no centro e use a ferramenta de 'Eco / Offset' para gerar 3 linhas de contorno a 6 mm. Borde sobre tecido com manta e sinta o relevo concêntrico gerado ao redor da letra.",
    "quickSummary": "Quilting de contorno é o acolchoamento em linhas paralelas concêntricas que emolduram um motivo central, gerando efeito de eco e relevo tridimensional.",
    "relatedTerms": [
      "Echo Quilting",
      "Quilting Decorativo",
      "Efeito Trapunto",
      "Offset de Linhas"
    ],
    "tags": [
      "quilting",
      "contorno",
      "eco",
      "relevo"
    ]
  },
  {
    "id": "quilting-com-preenchimento",
    "code": "Q-049",
    "letter": "Q",
    "term": "Quilting com Preenchimento",
    "pronunciation": "cu-íl-ting com pre-en-chi-men-to",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Fill Quilting / Background Quilting. Combinação de técnicas de preenchimento vetorial leve com acolchoamento de mantas.",
    "summary": "Uso de tramas e padrões geométricos abertos (grades, colmeias, espirais) como preenchimento de fundo acolchoado.",
    "definition": "O quilting com preenchimento é o emprego de matrizes de padrão repetitivo denso (como favos de mel, treliças inglesas, seixos arredondados - Pebbling, ou labirintos geométricos) para aplanar e comprimir totalmente certas áreas do fundo de uma peça, criando um contraste dramático com os elementos principais não preenchidos.",
    "technicalDetails": "Ao contrário dos preenchimentos tatami normais (densidade 0.40 mm), o quilting com preenchimento utiliza linhas abertas (espaçamento entre 2.0 e 5.0 mm) e pontos corridos com passo de 2.0 a 2.5 mm, evitando que a manta fique excessivamente dura.",
    "beginnerExplanation": "É preencher todo o fundo da peça com desenhos geométricos lindos (como colmeias ou pedrinhas redondas), esmagando o fundo para que o desenho do meio fique super fofo e saliente.",
    "howItWorks": [
      "1. Delimita-se a área de fundo ao redor do elemento principal no software.",
      "2. Escolhe-se um padrão geométrico aberto (ex: grade diagonal ou colmeia).",
      "3. O software gera a costura contínua cobrindo toda a área externa.",
      "4. A compressão do fundo eleva o relevo do motivo central sem precisar colocar enchimento extra."
    ],
    "applications": [
      "Fundos de almofadas requintadas para salas de estar e quartos de casal.",
      "Bordados em painéis artísticos de parede e mantas comemorativas.",
      "Efeito de falso couro matelassê em bolsas e pastas executivas."
    ],
    "characteristics": [
      "Contraste visual marcante entre áreas planas compactadas e áreas em alto-relevo.",
      "Padrão geométrico rítmico e hipnótico de grande elegância.",
      "Gera textura rica ao toque sem pesar na peça final."
    ],
    "commonErrors": [
      "❌ Usar densidade de ponto fechada demais, transformando o acolchoado em uma tábua dura.",
      "❌ Deixar o preenchimento encostar ou sobrepor o desenho principal de forma desordenada.",
      "❌ Borda da peça repuxar para dentro devido à grande concentração de pontos de fundo."
    ],
    "troubleshootingTips": [
      "Peça encolhendo sob o preenchimento denso: use entretela de recorte pesada (Cut-Away) e aplique compensação nas bordas.",
      "Padrão de fundo deformado nas pontas: alinhe os eixos do padrão com a grade geométrica do bastidor no software.",
      "Manta afundando irregularmente: utilize manta acrílica resinada R1 ou R2 para compressão homogênea."
    ],
    "dicaArtrelados": "O padrão de quilting em círculos pequenos (Pebbling ou pedrinhas) é o mais impressionante para fazer monogramas brilharem. O fundo fica todo rebaixado em micro-esferas e a letra parece esculpida em mármore!",
    "voceSabia": "O estilo de preenchimento em seixos (Pebbling) foi popularizado pelas grandes mestras do quilting artístico moderno nos Estados Unidos e na Austrália no início dos anos 2000.",
    "practicalExercise": "No seu programa de bordado, desenhe uma estrela no centro e aplique um preenchimento de fundo em padrão de favo de mel (Honeycomb Fill) com espaçamento de 4 mm. Borde sobre manta e veja o contraste de relevo.",
    "quickSummary": "Quilting com preenchimento é o uso de padrões geométricos contínuos abertos para compactar o fundo e valorizar relevos centrais.",
    "relatedTerms": [
      "Pebbling",
      "Quilting Livre",
      "Efeito Trapunto",
      "Preenchimento Tatami"
    ],
    "tags": [
      "quilting",
      "preenchimento",
      "fundo",
      "textura"
    ]
  },
  {
    "id": "quilting-em-camadas",
    "code": "Q-050",
    "letter": "Q",
    "term": "Quilting em Camadas",
    "pronunciation": "cu-íl-ting em ca-ma-das",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Layered Quilting / Multi-Layer Trapunto. Técnica herdada do acolchoamento clássico siciliano (Trapunto).",
    "summary": "Técnica que utiliza mantas sobrepostas ou camadas adicionais de enchimento recortadas para criar relevos hiper-pronunciados em áreas específicas.",
    "definition": "O quilting em camadas é a técnica na qual se adicionam camadas extras de manta acrílica, feltro ou espuma sob determinados elementos do bordado (como flores, brasões ou figuras), prendendo-as com uma costura guia e recortando o excesso antes de cobrir com o tecido final e acolchoar todo o conjunto.",
    "technicalDetails": "Realizado no bastidor em etapas sequenciais: 1) Costura de fixação da manta extra sobre a entretela; 2) Recorte manual rente à linha guia (fase de cutwork); 3) Colocação do tecido de topo e manta base; 4) Execução do quilting geral que esmaga o fundo e projeta as camadas duplas.",
    "beginnerExplanation": "É colocar duas ou mais mantas fofinhas apenas embaixo de um pedaço do desenho (como numa flor) para ela ficar bem gordinha e saltada para fora, enquanto o resto da peça fica mais baixinho.",
    "howItWorks": [
      "1. A máquina costura o contorno do desenho apenas sobre uma camada extra de manta.",
      "2. A máquina para e a bordadeira recorta o excesso de manta ao redor da linha guia.",
      "3. Cobre-se tudo com o tecido principal e a manta base do projeto.",
      "4. A máquina executa o quilting geral de contorno e fundo.",
      "5. A área com camada dupla expande para a frente em relevo escultural espetacular."
    ],
    "applications": [
      "Almofadas de alto luxo e cabeceiras de cama com relevos anatômicos de trapunto.",
      "Bordados em peças de alta-costura e figurinos teatrais requintados.",
      "Brasões nobiliárquicos e monogramas de casamento em toalhas de linho nobre."
    ],
    "characteristics": [
      "Efeito escultural tridimensional hiper-pronunciado sem rigidez mecânica.",
      "Toque macio e esponjoso exatamente nas áreas de destaque.",
      "Valor comercial e percepção de exclusividade altíssimos no mercado artesanal."
    ],
    "commonErrors": [
      "❌ Cortar o tecido de base acidentalmente durante o recorte da manta extra.",
      "❌ Usar manta muito dura ou que solta fiapos difíceis de limpar nas bordas.",
      "❌ Não alinhar perfeitamente o tecido de topo sobre a camada extra recortada."
    ],
    "troubleshootingTips": [
      "Dificuldade para recortar a manta extra: use uma tesoura de ponta curva de precisão (tesoura pelicano) para não furar a base.",
      "Relevo não ficando saliente o suficiente: use manta de alta densidade (manta de poliéster 150g ou feltro grosso de lã) na camada recortada.",
      "Tecido de cima repuxando nas bordas do relevo: aumente a folga do tecido de topo sem puxar ao posicionar no bastidor."
    ],
    "dicaArtrelados": "Para fazer um trapunto impecável no bastidor, use feltro branco de artesanato como camada extra em vez de manta acrílica solta. O feltro é fácil de recortar rente à costura, não desfia e dá um relevo firme e uniforme!",
    "voceSabia": "A técnica original de Trapunto nasceu na Sicília no século XIV, onde o enchimento era inserido ponto a ponto por trás do tecido com agulhas de osso e fios de lã grossa.",
    "practicalExercise": "Borde o contorno de uma flor sobre um pedaço de feltro na entretela. Recorte o feltro rente à linha. Coloque um tricoline por cima e borde as pétalas com quilting de eco. Sinta o alto-relevo fofo gerado.",
    "quickSummary": "Quilting em camadas é o uso de mantas extras recortadas sob áreas específicas para criar relevos tridimensionais esculturais e macios.",
    "relatedTerms": [
      "Trapunto Computadorizado",
      "Quilting de Contorno",
      "Tesoura Pelicano",
      "Relevo 3D"
    ],
    "tags": [
      "trapunto",
      "camadas",
      "manta",
      "relevo"
    ]
  },
  {
    "id": "quick-stitch",
    "code": "Q-051",
    "letter": "Q",
    "term": "Quick Stitch",
    "pronunciation": "cu-íc istitch",
    "level": "Iniciante 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e stitch (ponto, costura). Ferramenta consagrada em softwares como PE-Design, mySewnet e Premier+.",
    "summary": "Ferramenta de digitalização semi-automática por varinha mágica que converte áreas coloridas de uma imagem em blocos de pontos com um clique.",
    "definition": "O Quick Stitch é uma função presente em softwares de criação de matrizes que permite ao usuário clicar sobre uma área delimitada por cor em uma imagem bitmap (JPG, PNG) para convertê-la instantaneamente em um objeto de bordado (tatami, satim ou ponto corrido), calculando os limites de cor automaticamente.",
    "technicalDetails": "Opera por detecção de tolerância de cor (Color Threshold). Requer imagens com cores sólidas e bordas bem definidas para evitar criação de contornos serrilhados ou buracos em áreas com ruído gráfico.",
    "beginnerExplanation": "É a famosa 'varinha mágica' do programa de bordado: você clica em cima de uma cor do desenho e o programa preenche aquela partezinha com pontos de bordado na mesma hora!",
    "howItWorks": [
      "1. A imagem de referência é carregada na tela do software.",
      "2. A usuária seleciona a ferramenta 'Quick Stitch' e o tipo de ponto desejado.",
      "3. Clica-se na cor desejada; o algoritmo identifica todos os pixels contíguos da mesma cor.",
      "4. O programa gera automaticamente os nós vetoriais e calcula as linhas de ponto."
    ],
    "applications": [
      "Digitalização rápida de desenhos infantis simples com cores planas e chapadas.",
      "Criação ágil de preenchimentos de fundo em logotipos geométricos.",
      "Geração rápida de linhas de contorno em silhuetas monocromáticas."
    ],
    "characteristics": [
      "Extrema rapidez na criação de matrizes básicas para iniciantes.",
      "Elimina a necessidade de desenhar nó por nó com a ferramenta de vetorização manual.",
      "Permite ajuste de sensibilidade de cor antes de confirmar a criação do objeto."
    ],
    "commonErrors": [
      "❌ Clicar com o Quick Stitch sobre imagens embaçadas ou cheias de sombras, gerando matrizes com nós tortos.",
      "❌ Não conferir os ângulos de ponto e pontos de suporte gerados automaticamente pela ferramenta.",
      "❌ Tentar usar a ferramenta sobre fotos de pessoas ou animais reais sem vetorização prévia."
    ],
    "troubleshootingTips": [
      "Objeto saindo com bordas cheias de dentes de serra: limpe a imagem em um editor gráfico aumentando a nitidez das cores antes de importar.",
      "Ferramenta preenchendo a tela inteira: a linha do desenho tem frestas abertas; feche o contorno da imagem com o pincel.",
      "Bordado ficando duro: ajuste a densidade do objeto gerado nas propriedades de 0.35 mm para 0.40 mm."
    ],
    "dicaArtrelados": "Após usar o Quick Stitch, sempre confira a direção dos pontos (ângulos) e ative os pontos de suporte (underlay). A ferramenta cria o desenho rápido, mas o toque de mestre na qualidade é você quem dá!",
    "voceSabia": "A ferramenta de Quick Stitch foi introduzida no final dos anos 1990 no pacote PE-Design 4 da Brother, tornando a criação de matrizes acessível a milhares de artesãs domésticas.",
    "practicalExercise": "Importe o desenho de uma maçã vermelha com folha verde em formato PNG. Use o Quick Stitch para preencher a maçã com tatami e a folha com satim em menos de 1 minuto.",
    "quickSummary": "Quick Stitch é a ferramenta de varinha mágica que digitaliza áreas coloridas com um único clique do mouse, agilizando a criação de matrizes.",
    "relatedTerms": [
      "Quick Digitizing",
      "Auto-Punch",
      "Varinha Mágica",
      "Vetorização de Imagem"
    ],
    "tags": [
      "software",
      "quick stitch",
      "digitalização",
      "ferramentas"
    ]
  },
  {
    "id": "quick-stitching",
    "code": "Q-052",
    "letter": "Q",
    "term": "Quick Stitching",
    "pronunciation": "cu-íc istitching",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino (gerúndio técnico em inglês).",
    "origin": "Do inglês quick stitching (processo de costura ou geração rápida de pontos em softwares e controladoras).",
    "summary": "Processo contínuo de geração rápida de trajetórias de pontos em lotes de objetos com parâmetros unificados.",
    "definition": "O Quick Stitching refere-se ao método ou fluxo de trabalho em que o programador aplica rapidamente definições de pontos predefinidas (estilos rápidos) sobre múltiplos vetores ou objetos simultaneamente, acelerando a conversão de artes complexas em arquivos prontos para bordar.",
    "technicalDetails": "Utiliza folhas de estilos de pontos (Stitch Presets) que aplicam densidade, compensação de encolhimento e suporte específicos para o tecido escolhido (ex: preset 'Piquet' ou preset 'Toalha') com um único comando em lote.",
    "beginnerExplanation": "É aplicar de uma só vez a receitinha pronta de pontos (com compensação e suporte certinhos) em todas as partes do desenho para não ter que ajustar uma por uma.",
    "howItWorks": [
      "1. O usuário seleciona o conjunto de objetos vetoriais na tela.",
      "2. Escolhe o perfil de tecido desejado no menu de estilos rápidos.",
      "3. O software recalcula densidade, sobrespessura e camadas de suporte de todos os objetos.",
      "4. A matriz fica configurada de forma homogênea para o material escolhido."
    ],
    "applications": [
      "Adaptação de matrizes prontas para bordar em tecidos diferentes (ex: mudar de jeans para malha).",
      "Padronização de densidades em coleções comerciais de matrizes.",
      "Fluxo de trabalho ágil para designers e estúdios de matrizes sob encomenda."
    ],
    "characteristics": [
      "Padroniza a qualidade técnica em todos os elementos da matriz.",
      "Reduz drasticamente o tempo de trabalho repetitivo do digitalizador.",
      "Minimiza erros humanos de esquecimento de pontos de suporte."
    ],
    "commonErrors": [
      "❌ Aplicar o mesmo preset em elementos muito grandes e muito pequenos sem conferir letras miúdas.",
      "❌ Esquecer de verificar os pontos de conexão após aplicar alterações em lote.",
      "❌ Usar presets de tecido rígido (jeans) em matrizes destinadas a tecidos finos (seda)."
    ],
    "troubleshootingTips": [
      "Letras pequenas ficando emboladas após o processo: selecione as letras separadamente e reduza a densidade manualmente.",
      "Contornos desalinhados do preenchimento: aumente a compensação de puxamento global no menu de estilos rápidos.",
      "Pontos afundando na toalha: certifique-se de que o preset escolhido ativou a camada de suporte em grade (Grid Underlay)."
    ],
    "dicaArtrelados": "Crie seus próprios 'Estilos Rápidos' no seu software com o nome dos tecidos que você mais usa no ateliê (ex: 'Minha Toalha Lavabo', 'Minha Fralda Bebê'). Um clique e a matriz está pronta!",
    "voceSabia": "Softwares profissionais modernos utilizam inteligência artificial para reconhecer o tipo de tecido e aplicar os melhores parâmetros de Quick Stitching automaticamente.",
    "practicalExercise": "No seu software, selecione todos os objetos de uma matriz e mude a propriedade de tecido de 'Algodão Padrão' para 'Malha Elástica'. Observe como o programa ajusta automaticamente os suportes e compensações.",
    "quickSummary": "Quick Stitching é a aplicação rápida e em lote de parâmetros e estilos de pontos sobre a matriz para economizar tempo de programação.",
    "relatedTerms": [
      "Estilos de Ponto",
      "Presets de Tecido",
      "Compensação Global",
      "Automação de Software"
    ],
    "tags": [
      "programação",
      "presets",
      "estilos",
      "automação"
    ]
  },
  {
    "id": "quick-trace",
    "code": "Q-053",
    "letter": "Q",
    "term": "Quick Trace",
    "pronunciation": "cu-íc treice",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e trace (traçar, delinear contorno vetorial).",
    "summary": "Ferramenta de vetorização automática que converte o contorno de desenhos rasterizados em linhas vetoriais suaves.",
    "definition": "O Quick Trace é a funcionalidade de software que rastreia automaticamente as bordas de contraste de uma imagem em bitmap (como JPG ou PNG) e as transforma instantaneamente em curvas vetoriais editáveis (linhas de Bézier e nós vetoriais). Essas linhas podem ser imediatamente convertidas em pespontos, cordões satim ou bordas de aplique.",
    "technicalDetails": "Trabalha por detecção de gradiente de luminância e algoritmos de suavização de arestas (Curve Fitting). Permite calibrar a quantidade de nós gerados para evitar sobrecarga de vértices desnecessários.",
    "beginnerExplanation": "É a ferramenta que 'passa a limpo' o desenho da foto: você clica e o programa traça uma linha vetorial perfeita em volta de todo o desenho para você poder bordar o contorno.",
    "howItWorks": [
      "1. A imagem é carregada e o software analisa o contraste entre as bordas.",
      "2. A ferramenta 'Quick Trace' traça o perímetro externo ou as linhas pretas da arte.",
      "3. O software gera nós de controle nas curvas e vértices.",
      "4. O usuário ajusta os pontos e escolhe se deseja contorno em ponto corrido, triplo ou satim."
    ],
    "applications": [
      "Vetorização de desenhos de colorir infantis para criação de matrizes de contorno.",
      "Criação rápida de linhas de corte para apliques em tecidos estampados.",
      "Conversão de assinaturas manuscritas e logos simples em linhas bordadas."
    ],
    "characteristics": [
      "Gera curvas suaves e contínuas a partir de desenhos limpos.",
      "Permite editar e mover os nós vetoriais livremente após a criação.",
      "Economiza horas de desenho manual com a ferramenta de caneta vetorial."
    ],
    "commonErrors": [
      "❌ Usar Quick Trace em imagens de baixa qualidade, gerando milhares de nós serrilhados.",
      "❌ Não simplificar o número de nós após a vetorização automática.",
      "❌ Tentar traçar desenhos com fundos texturizados ou sombreados complexos."
    ],
    "troubleshootingTips": [
      "Linha saindo cheia de ondas: use a ferramenta 'Suavizar Vetores' (Smooth Curves) do software para reduzir o número de nós.",
      "Traço não fechando o círculo: aumente a sensibilidade de contraste da ferramenta nas opções de rastreio.",
      "Bordado travando por excesso de nós: aplique o comando 'Reduzir Nós' (Simplify Nodes)."
    ],
    "dicaArtrelados": "Para vetorizar um desenho com Quick Trace com perfeição máxima, aumente o contraste da foto antes no celular ou no computador, deixando o desenho bem preto e o fundo bem branco!",
    "voceSabia": "O algoritmo matemático que calcula as curvas suaves de vetorização foi desenvolvido pelo engenheiro francês Pierre Bézier em 1962 para desenhar as carrocerias dos carros da Renault.",
    "practicalExercise": "Pegue um desenho infantil em preto e branco de colorir. Use o Quick Trace no software para traçar os contornos em ponto triplo com um clique e visualize o resultado 3D.",
    "quickSummary": "Quick Trace é o recurso de vetorização automática que transforma contornos de imagens em linhas vetoriais suaves para bordado.",
    "relatedTerms": [
      "Vetorização",
      "Curvas de Bézier",
      "Nós Vetoriais",
      "Ponto de Contorno"
    ],
    "tags": [
      "trace",
      "vetorização",
      "software",
      "contorno"
    ]
  },
  {
    "id": "quick-preview",
    "code": "Q-054",
    "letter": "Q",
    "term": "Quick Preview",
    "pronunciation": "cu-íc pré-viu",
    "level": "Iniciante 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e preview (pré-visualização, exibição prévia).",
    "summary": "Modo de renderização visual ultrarrápido em 3D realista que simula a textura, o brilho dos fios e o tecido antes do bordado real.",
    "definition": "O Quick Preview (ou TrueView / 3D Stitch Simulation) é a função do software ou do painel da máquina de bordar que renderiza graficamente a matriz simulando o comportamento visual dos pontos reais, com reflexão de luz nos fios de poliéster, espessura tridimensional das colunas satim e textura do tecido de fundo.",
    "technicalDetails": "Permite inspecionar a olho nu sobreposições indevidas, frestas entre contornos e fundos, densidades excessivas e a ordem cronológica da costura antes de desperdiçar tecido e linha física na máquina.",
    "beginnerExplanation": "É ver na tela do computador ou da máquina exatamente como o bordado vai ficar pronto na peça real, com brilho de linha e textura, antes de dar o primeiro ponto.",
    "howItWorks": [
      "1. A matriz vetorial é compilada pelo motor gráfico do software.",
      "2. Cada ponto é renderizado com volume cilíndrico e reflexão especular de luz.",
      "3. O usuário pode alternar entre a visão técnica (linhas e nós) e o Quick Preview 3D.",
      "4. Permite aplicar zoom de até 1.000% para inspecionar pequenos detalhes de letras e nós."
    ],
    "applications": [
      "Envio de simulações virtuais realistas (Mockups) para aprovação do cliente final por WhatsApp.",
      "Identificação visual de falhas de sobreposição e alinhamento de contornos.",
      "Escolha e teste de combinações de cores de linha antes de colocar os cones na máquina."
    ],
    "characteristics": [
      "Renderização 3D fidedigna do brilho e da espessura real do fio de poliéster.",
      "Permite simular diferentes cores de tecido de fundo com textura de pique, toalha ou algodão.",
      "Essencial para apresentação profissional e comercial de projetos no ateliê."
    ],
    "commonErrors": [
      "❌ Confiar apenas na visualização vetorial 2D simples e não conferir no Quick Preview 3D.",
      "❌ Esquecer de conferir o verso da peça no modo de simulação para ver fios soltos.",
      "❌ Enviar fotos de matriz sem fundo realista para aprovação do cliente, gerando dúvidas."
    ],
    "troubleshootingTips": [
      "Preenchimento parecendo ralo no Preview 3D: aumente a densidade do ponto ou ative o ponto de suporte.",
      "Cores aparecendo opacas ou sem brilho na tela: certifique-se de que a paleta de cores do software está configurada para linha de poliéster ou viscose.",
      "Software travando ao ativar o 3D: atualize os drivers da placa de vídeo do computador ou reduza o nível de anti-aliasing nas configurações."
    ],
    "dicaArtrelados": "Sempre gere uma imagem no modo Quick Preview 3D com a cor exata do tecido do cliente e envie para aprovação antes de bordar. Isso evita refações e encanta o cliente antes mesmo da peça ficar pronta!",
    "voceSabia": "Os primeiros motores de renderização TrueView 3D para bordado surgiram em 1994 no software Wilcom ES, mudando para sempre a forma como as matrizes são comercializadas no mundo.",
    "practicalExercise": "Abra um arquivo no seu software e alterne entre a visualização de pontos normais (1D/2D) e o modo Quick Preview 3D (TrueView). Mude a cor do tecido de fundo para preto e observe o contraste do brilho dos fios.",
    "quickSummary": "Quick Preview é a pré-visualização realista em 3D que mostra como o bordado ficará na peça real com brilho e textura antes da costura.",
    "relatedTerms": [
      "TrueView",
      "Simulador 3D",
      "Mockup Digital",
      "Stitch Player"
    ],
    "tags": [
      "preview",
      "simulação",
      "3d",
      "software"
    ]
  },
  {
    "id": "quick-edit",
    "code": "Q-055",
    "letter": "Q",
    "term": "Quick Edit",
    "pronunciation": "cu-íc é-dit",
    "level": "Iniciante 🟢",
    "category": "Funções da Máquina",
    "grammarClass": "Substantivo masculino (termo técnico de interface).",
    "origin": "Do inglês quick (rápido) e edit (editar, modificar). Presente nos painéis touchscreen das máquinas modernas.",
    "summary": "Conjunto de ferramentas na tela da máquina que permite girar, espelhar, redimensionar e combinar matrizes sem usar o computador.",
    "definition": "O Quick Edit é a interface de edição direta no painel touchscreen da máquina de bordar que permite realizar operações geométricas imediatas no arquivo carregado: rotação em ângulos de 1°, 10° ou 90°, espelhamento horizontal e vertical, pequenos ajustes de escala (±10% a 20%), reposicionamento no bastidor e combinação com letras do alfabeto interno da máquina.",
    "technicalDetails": "As alterações de posição e orientação X-Y são executadas instantaneamente no buffer de memória da controladora eletrônica da máquina, sem alterar o arquivo original gravado no pendrive.",
    "beginnerExplanation": "É mexer no desenho direto na telinha da máquina de bordar: virar de ponta cabeça, girar para caber no bastidor, espelhar ou juntar um nomezinho sem precisar ligar o computador.",
    "howItWorks": [
      "1. A matriz é aberta na tela de edição da máquina de bordar.",
      "2. O usuário toca nos ícones de edição rápida (Girar, Espelhar, Mover, Adicionar Texto).",
      "3. A máquina exibe o desenho atualizado dentro do gabarito virtual do bastidor escolhido.",
      "4. Ao confirmar com 'OK' ou 'Bordar', a máquina assume a nova orientação de costura."
    ],
    "applications": [
      "Girar a matriz em 90° para aproveitar o melhor sentido do tecido no bastidor.",
      "Espelhar um ramo floral para criar o lado direito e esquerdo simétrico de uma toalha.",
      "Adicionar o nome do bebê diretamente pelo alfabeto da máquina abaixo de um desenho pronto."
    ],
    "characteristics": [
      "Dispensa o uso do computador para ajustes rotineiros e simples.",
      "Visualização imediata dos limites físicos do bastidor.",
      "Operação intuitiva por toque na tela ou botões direcionais."
    ],
    "commonErrors": [
      "❌ Reduzir ou aumentar o tamanho da matriz em mais de 20% na tela da máquina simples, deformando a densidade dos pontos.",
      "❌ Espelhar matrizes que contêm textos ou datas, fazendo as letras ficarem invertidas.",
      "❌ Posicionar a matriz fora da área de segurança da tela, fazendo a máquina travar ao tentar iniciar."
    ],
    "troubleshootingTips": [
      "Máquina avisando que o desenho não cabe no bastidor: use a função Girar 90° no Quick Edit para encaixar na orientação correta.",
      "Nome bordado ao contrário: certifique-se de não ter acionado o botão de espelhamento (Mirror) sem querer.",
      "Desenho torto na toalha: use o micro-ajuste de rotação de 1° no painel para alinhar com o barrado da peça."
    ],
    "dicaArtrelados": "Para bordar pares simétricos perfeitos (como o bolso direito e esquerdo de uma camisa), borde o primeiro lado normal e depois use a função 'Espelhar' (Mirror) no painel da máquina para o segundo lado!",
    "voceSabia": "As primeiras máquinas de bordar computadorizadas nos anos 1980 não tinham tela gráfica; qualquer mudança de rotação exigia reprogramar e gravar um novo disquete no computador.",
    "practicalExercise": "No painel da sua máquina de bordar, abra um desenho, gire 90 graus, adicione uma letra do alfabeto interno da máquina e use os botões direcionais para centralizar tudo dentro do bastidor virtual.",
    "quickSummary": "Quick Edit é o conjunto de recursos na tela da máquina de bordar para girar, espelhar, mover e personalizar matrizes de forma prática e rápida.",
    "relatedTerms": [
      "Painel Touchscreen",
      "Espelhamento de Matriz",
      "Rotação de Desenho",
      "Combinação no Bastidor"
    ],
    "tags": [
      "painel",
      "edição",
      "máquina",
      "ajuste"
    ]
  },
  {
    "id": "quick-selection",
    "code": "Q-056",
    "letter": "Q",
    "term": "Quick Selection",
    "pronunciation": "cu-íc se-léc-tion",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e selection (seleção, escolha de elementos).",
    "summary": "Atalhos e filtros de seleção rápida no software para isolar objetos por cor, tipo de ponto ou densidade de forma instantânea.",
    "definition": "O Quick Selection é o conjunto de filtros e comandos rápidos do software de bordado que permite selecionar simultaneamente todos os objetos que compartilham a mesma característica (ex: selecionar todos os pontos satim, todas as linhas de cor amarela, ou todos os pontos de suporte) com um único clique ou atalho de teclado.",
    "technicalDetails": "Funciona por filtragem de metadados no DOM vetorial do arquivo de bordado. Permite aplicar alterações em massa (como trocar todas as linhas de 0.40 mm para 0.45 mm) sem ter que clicar em cada elemento individualmente na tela.",
    "beginnerExplanation": "É um atalho mágico no programa: em vez de você clicar uma por uma em 20 florzinhas vermelhas para mudar a cor, você clica uma vez e o programa seleciona todas as flores vermelhas juntas para você trocar!",
    "howItWorks": [
      "1. O usuário clica com o botão direito sobre um objeto ou na paleta de cores.",
      "2. Escolhe 'Selecionar Todos por Cor' ou 'Selecionar Todos por Tipo de Ponto'.",
      "3. O software destaca instantaneamente todos os elementos correspondentes na tela.",
      "4. Qualquer modificação feita nas propriedades é aplicada a todos os itens selecionados de uma vez."
    ],
    "applications": [
      "Troca global de cores de um logotipo em segundos.",
      "Ajuste coletivo de compensação de encolhimento em todos os textos da matriz.",
      "Exclusão rápida de todos os pontos de salto ou conexões indesejadas."
    ],
    "characteristics": [
      "Acelera a edição e personalização de matrizes complexas.",
      "Evita esquecer elementos isolados durante alterações globais.",
      "Permite agrupar e organizar camadas com facilidade."
    ],
    "commonErrors": [
      "❌ Alterar parâmetros sem perceber que outros objetos da mesma cor também foram selecionados.",
      "❌ Deletar acidentalmente elementos pequenos de fundo selecionados em massa.",
      "❌ Não verificar a lista de camadas após edições coletivas."
    ],
    "troubleshootingTips": [
      "Modificação alterou partes que não deviam mudar: desfaça (Ctrl+Z) e desative a seleção por cor antes de selecionar o objeto específico.",
      "Dificuldade para selecionar apenas os contornos: use o filtro 'Selecionar por Tipo: Satim / Ponto Corrido'.",
      "Objetos agrupados impedindo seleção individual: use o comando 'Desagrupar' (Ungroup / Ctrl+U)."
    ],
    "dicaArtrelados": "Para mudar a cor de um bordado com 30 partes da mesma cor no Wilcom ou PE-Design, clique com o botão direito na cor desejada na barra inferior e selecione 'Selecionar por Cor'. Todas as partes ficam selecionadas em menos de 1 segundo!",
    "voceSabia": "Em matrizes industriais de moda que chegam a ter mais de 2.000 pequenos objetos vetoriais, os recursos de seleção rápida reduzem o tempo de edição de 2 horas para menos de 5 minutos.",
    "practicalExercise": "Abra uma matriz com várias folhas verdes espalhadas. Use o comando 'Selecionar por Cor' no software para mudar o tom de todas as folhas para verde oliva de uma só vez.",
    "quickSummary": "Quick Selection é o recurso de seleção em massa por atributos comuns (como cor ou tipo de ponto), agilizando alterações globais na matriz.",
    "relatedTerms": [
      "Filtros de Seleção",
      "Agrupar Objetos",
      "Edição em Massa",
      "Paleta de Cores"
    ],
    "tags": [
      "seleção",
      "software",
      "atalhos",
      "edição"
    ]
  },
  {
    "id": "quick-convert",
    "code": "Q-057",
    "letter": "Q",
    "term": "Quick Convert",
    "pronunciation": "cu-íc con-vért",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e convert (transformar, converter formatos ou vetores).",
    "summary": "Conversão instantânea entre formatos de arquivos de bordado ou transformação direta de gráficos vetoriais em pontos de bordado.",
    "definition": "O Quick Convert refere-se a dois processos fundamentais: 1) A conversão rápida de vetores gráficos padrão (SVG, AI, EPS, EMF) diretamente em objetos de bordado com propriedades automáticas de preenchimento; e 2) A conversão em lote de arquivos de matriz de uma extensão de máquina para outra (ex: converter 50 arquivos PES para JEF ou DST com um único clique).",
    "technicalDetails": "Na conversão gráfica, o motor vetorial traduz caminhos fechados em tatami e linhas abertas em pontos corridos ou satim. Na conversão de formatos de máquinas, o software recalcula o cabeçalho binário, funções de corte e limites de coordenadas X-Y de acordo com a marca da máquina de destino.",
    "beginnerExplanation": "É a ferramenta que transforma arquivos de desenho (como SVG) em bordado num estalo, ou que transforma várias matrizes de uma marca de máquina para outra de uma vez só.",
    "howItWorks": [
      "1. Para vetores: seleciona-se a arte SVG/AI e clica-se em 'Converter Vetor em Bordado'.",
      "2. O software gera os pontos correspondentes mantendo a fidelidade das curvas.",
      "3. Para formatos: seleciona-se uma pasta de arquivos e escolhe-se o formato de saída (ex: .PES -> .JEF).",
      "4. O programa gera todas as cópias compatíveis instantaneamente."
    ],
    "applications": [
      "Importação direta de logos criados no CorelDraw ou Illustrator para o software de bordado.",
      "Conversão rápida de coleções inteiras de matrizes para máquinas Janome, Brother ou Singer.",
      "Transformação de contornos de satim em ponto corrido leve com um clique."
    ],
    "characteristics": [
      "Ponte essencial entre o design gráfico publicitário e o universo do bordado.",
      "Compatibilidade universal com as principais extensões do mercado mundial.",
      "Agilidade extrema na conversão de grandes acervos de matrizes."
    ],
    "commonErrors": [
      "❌ Converter arquivos de formato de ponto simples (ex: DST) para formatos ricos achando que os objetos vetoriais serão restaurados perfeitamente.",
      "❌ Não testar a matriz convertida no simulador de costura antes de enviar para a máquina.",
      "❌ Converter matrizes para bastidores maiores do que a máquina de destino suporta."
    ],
    "troubleshootingTips": [
      "Máquina não reconhecendo o arquivo convertido: certifique-se de que a matriz cabe no tamanho do bastidor físico da máquina de destino.",
      "Cores mudando após a conversão: utilize formatos que salvam informações completas de cores (como PES, JEF ou VP3) em vez de DST.",
      "Linhas vetoriais convertidas ficando grossas demais: altere a propriedade do contorno de 'Ponto Satim' para 'Ponto Corrido'."
    ],
    "dicaArtrelados": "Se você tem clientes com máquinas de várias marcas (Brother, Janome, Singer), use a ferramenta de conversão em lote (Batch Converter). Você converte uma pasta inteira de arquivos para todos os formatos em menos de 10 segundos!",
    "voceSabia": "O formato DST da Tajima é o formato de ponto mais antigo do mundo ainda em uso diário, criado na década de 1980 e lido por praticamente 100% das máquinas industriais e domésticas existentes.",
    "practicalExercise": "Pegue um arquivo de matriz em formato PES. Use a ferramenta de conversão do seu software para exportar uma versão em JEF e outra em DST. Abra os três no visualizador e compare a preservação das cores.",
    "quickSummary": "Quick Convert é a conversão ágil de artes vetoriais em pontos de bordado ou a transformação em lote de formatos entre diferentes marcas de máquinas.",
    "relatedTerms": [
      "Formatos de Bordado (PES, JEF, DST)",
      "Conversão em Lote",
      "Importação Vetorial",
      "CorelDraw / Wilcom"
    ],
    "tags": [
      "conversão",
      "formatos",
      "vetor",
      "software"
    ]
  },
  {
    "id": "quick-digitizing",
    "code": "Q-058",
    "letter": "Q",
    "term": "Quick Digitizing",
    "pronunciation": "cu-íc di-gi-tai-zing",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino (termo técnico de software).",
    "origin": "Do inglês quick (rápido) e digitizing (digitalização, programação de matrizes).",
    "summary": "Conjunto de métodos de digitalização automática e assistida que criam matrizes completas a partir de ilustrações com mínima intervenção manual.",
    "definition": "O Quick Digitizing (também conhecido como Auto-Digitizing ou Digitalização Automática Inteligente) é o processo automatizado pelo qual o software analisa uma imagem gráfica completa, separa suas cores, reconhece contornos e formas e gera automaticamente uma matriz com sequenciamento, pontos de suporte, tatami e satim.",
    "technicalDetails": "Embora extremamente rápido para formas simples e logos de alta resolução, o Quick Digitizing requer pós-edição humana para refinar compensações de encolhimento, ajustar ângulos de ponto em curvas e otimizar cortes de linha em peças de alta qualidade.",
    "beginnerExplanation": "É o botão de 'criar bordado automático' do programa: você coloca a foto, aperta o botão e o programa faz a matriz inteira sozinho em poucos segundos!",
    "howItWorks": [
      "1. A imagem é carregada e o software aplica redução de cores e alinhamento de bordas.",
      "2. O usuário define o tecido alvo (ex: algodão, malha ou piquê).",
      "3. O software gera as camadas de suporte e preenchimento automaticamente.",
      "4. O usuário faz a revisão final no simulador 3D antes de exportar para a máquina."
    ],
    "applications": [
      "Criação rápida de matrizes para protótipos e testes visuais urgentes.",
      "Digitalização de silhuetas simples, corações, estrelas e formas geométricas.",
      "Primeiros passos de aprendizagem para iniciantes no universo da programação de matrizes."
    ],
    "characteristics": [
      "Velocidade incomparável na geração inicial de matrizes.",
      "Requer imagens de alta resolução com excelente contraste cromático.",
      "Serve como excelente base de partida para posterior refino manual."
    ],
    "commonErrors": [
      "❌ Usar digitalização automática em fotos complexas de rostos humanos sem edição, gerando matrizes com pontos embolados.",
      "❌ Enviar a matriz gerada automaticamente direto para a máquina sem inspecionar a ordem das camadas.",
      "❌ Não ajustar a compensação de encolhimento após o processo automático."
    ],
    "troubleshootingTips": [
      "Bordado automático quebrando linha e furando o tecido: reduza a densidade e ative a compensação de encolhimento manualmente.",
      "Cores ficando misturadas: reduza o número de cores na janela de pré-processamento de imagem do assistente.",
      "Pontos em ângulos feios: use a ferramenta de editar ângulos de ponto para direcionar o brilho das colunas."
    ],
    "dicaArtrelados": "Use a digitalização automática como um 'rascunho rápido': deixe o programa fazer a parte pesada de preencher as áreas grandes, e depois gaste 5 minutinhos arrumando os contornos e as entradas e saídas manualmente!",
    "voceSabia": "Os algoritmos de Quick Digitizing mais modernos utilizam redes neurais treinadas com milhares de matrizes premiadas para aprender como os melhores programadores humanos posicionam os pontos.",
    "practicalExercise": "Importe o desenho de uma flor simples com 3 cores. Utilize o assistente de Quick Digitizing (Auto-Digitizing). Em seguida, abra a lista de objetos e observe a ordem que o software escolheu para bordar cada parte.",
    "quickSummary": "Quick Digitizing é a digitalização automática por software que transforma ilustrações em arquivos de bordado em segundos, ideal como ponto de partida para edição.",
    "relatedTerms": [
      "Digitalização Automática",
      "Auto-Punch",
      "Qualidade da Digitalização",
      "Vetorização"
    ],
    "tags": [
      "digitalização",
      "automação",
      "software",
      "iniciante"
    ]
  },
  {
    "id": "quick-embroidery",
    "code": "Q-059",
    "letter": "Q",
    "term": "Quick Embroidery",
    "pronunciation": "cu-íc em-brói-de-ri",
    "level": "Iniciante 🟢",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo masculino (conceito técnico e comercial).",
    "origin": "Do inglês quick (rápido, expresso) e embroidery (bordado). Conceito de serviços rápidos e técnicas de bordado ágil no mercado de personalização.",
    "summary": "Conceito de bordado expresso e técnicas otimizadas para personalização rápida e sob demanda em quiosques, lojas e eventos.",
    "definition": "O Quick Embroidery (ou Bordado Rápido / Expresso) é o conjunto de métodos operacionais, matrizes compactas e fluxos de bastidoramento velozes projetados para personalizar peças em menos de 5 a 10 minutos na presença do cliente. É amplamente utilizado em lojas de shopping, feiras, eventos corporativos e quiosques de enxovais personalizados.",
    "technicalDetails": "Baseia-se em matrizes de monogramas e nomes pré-digitalizados com conexões contínuas (sem cortes de linha), bastidores magnéticos de travamento instantâneo e gabaritos físicos de alinhamento rápido em camisetas, bonés e toalhas.",
    "beginnerExplanation": "É o serviço de bordado na hora: aquele em que o cliente escolhe o nome ou desenho e você borda a peça na frente dele em 5 minutinhos, com tudo super organizado e rápido.",
    "howItWorks": [
      "1. O cliente escolhe a fonte ou o tema pré-configurado no catálogo.",
      "2. A peça é posicionada no bastidor magnético em segundos usando gabarito de alinhamento.",
      "3. A máquina multi-agulhas executa o bordado com velocidade otimizada (850 PPM).",
      "4. Realiza-se a limpeza rápida de fios e a entrega imediata com embalagem de presente."
    ],
    "applications": [
      "Personalização de toalhas e roupões em quiosques de shopping centers.",
      "Bordado de nomes em jalecos médicos e uniformes em lojas de pronta-entrega.",
      "Ativações de marcas em feiras de negócios e eventos corporativos de luxo."
    ],
    "characteristics": [
      "Altíssima rentabilidade e valor percebido imediato pelo cliente.",
      "Fluxo de trabalho enxuto sem paradas ou processos demorados de pós-bordado.",
      "Uso intensivo de matrizes limpas com mínimo de trocas de cor."
    ],
    "commonErrors": [
      "❌ Tentar fazer bordados de 30.000 pontos em serviços de atendimento expresso, atrasando a fila de clientes.",
      "❌ Não ter uma cartela clara de opções de fontes pré-testadas para o cliente escolher rapidamente.",
      "❌ Errar o alinhamento da peça por pressa no bastidoramento."
    ],
    "troubleshootingTips": [
      "Demora no bastidoramento: adote bastidores magnéticos (Mighty Hoops) ou estações de enquadramento rápido (HoopMaster).",
      "Letras com fios soltos para limpar: utilize matrizes de fontes conectadas estilo cursivo contínuo.",
      "Linha quebrando na frente do cliente: mantenha a máquina lubrificada e agulhas novas instaladas diariamente."
    ],
    "dicaArtrelados": "Para ter muito sucesso com bordado rápido, tenha um mostruário pronto com 4 estilos de letras bordadas em tecidos reais: 1 cursiva clássica, 1 moderna sem serifa, 1 infantil e 1 monograma elegante. O cliente escolhe em 30 segundos!",
    "voceSabia": "Em grandes maratonas e corridas esportivas internacionais, estações de Quick Embroidery bordam o tempo oficial de prova nas camisetas dos atletas em menos de 90 segundos por participante.",
    "practicalExercise": "Cronometre quanto tempo você leva para: 1) Abrir um nome na máquina, 2) Bastidorar uma toalha de lavabo, 3) Bordar e 4) Fazer o acabamento final. Treine o processo para reduzir o tempo total para menos de 6 minutos.",
    "quickSummary": "Quick Embroidery é a metodologia de bordado expresso e sob demanda, que une matrizes otimizadas e bastidores ágeis para entrega rápida ao cliente.",
    "relatedTerms": [
      "Bordado Expresso",
      "Bastidor Magnético",
      "Monogramas Rápidos",
      "Produtividade de Ateliê"
    ],
    "tags": [
      "expresso",
      "personalização",
      "atendimento",
      "mercado"
    ]
  },
  {
    "id": "quick-stop",
    "code": "Q-060",
    "letter": "Q",
    "term": "Quick Stop",
    "pronunciation": "cu-íc istóp",
    "level": "Iniciante 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino (termo técnico de segurança mecânica).",
    "origin": "Do inglês quick (rápido, imediato) e stop (parar, interromper). Comando de frenagem eletromagnética de emergência.",
    "summary": "Parada imediata de segurança da máquina ao detectar quebras de fio, travamento mecânico ou toque no botão de emergência.",
    "definition": "O Quick Stop é a função eletrônica e mecânica de interrupção instantânea do ciclo de costura. Pode ser acionado automaticamente pelos sensores ópticos de quebra de linha superior/inferior, por sensores de fim de bastidor, por detecção de sobrecarga do motor (quando a agulha entorta e bate na chapa) ou manualmente pelo operador através do botão de 'Start/Stop' ou botão de emergência.",
    "technicalDetails": "O sistema de frenagem dinâmica injeta corrente reversa no servomotor principal ou aciona um freio eletromagnético, imobilizando a barra de agulha em menos de 1 a 2 ciclos (fração de 0,05 segundos) no Ponto Morto Superior para evitar danos à lançadeira e ao tecido.",
    "beginnerExplanation": "É a freada de emergência da máquina: quando a linha arrebenta ou você aperta o botão de parar, a máquina freia na mesma hora no ar para não estragar a sua peça.",
    "howItWorks": [
      "1. Um sensor detecta a anomalia (fio quebrado, colisão ou botão pressionado).",
      "2. A placa eletrônica envia o sinal de corte imediato de energia e frenagem do motor.",
      "3. A agulha para na posição superior (PMS) fora do tecido.",
      "4. O painel grava na memória a coordenada exata do último ponto para permitir a retomada sem falhas."
    ],
    "applications": [
      "Parada imediata de segurança para evitar rasgar o tecido quando a linha superior quebra.",
      "Interrupção rápida ao notar que uma dobra de tecido entrou por baixo do bastidor.",
      "Proteção mecânica do cabeçote contra quebras de lançadeira em caso de agulha presa."
    ],
    "characteristics": [
      "Tempo de resposta quase instantâneo protegendo os componentes mecânicos.",
      "Mantém o registro numérico do ponto exato onde a máquina parou.",
      "Garante a segurança física das mãos da operadora durante o trabalho."
    ],
    "commonErrors": [
      "❌ Continuar forçando a máquina a rodar após uma parada brusca sem inspecionar a causa.",
      "❌ Desligar a máquina direto da tomada em vez de usar o botão de parada, perdendo a coordenada do ponto na memória.",
      "❌ Puxar o tecido com força enquanto a agulha ainda está em movimento de parada."
    ],
    "troubleshootingTips": [
      "Máquina parando do nada sem quebra aparente de linha: limpe o sensor óptico de linha e verifique se o fio não está frouxo na roda do sensor.",
      "Máquina demorando para parar: verifique as correias do motor principal e a calibração do freio dinâmico na assistência técnica.",
      "Após a parada, faltou bordar 3 pontos: use a função de retroceder pontos (Back Stitch) no painel e volte 5 a 10 pontos antes de reiniciar."
    ],
    "dicaArtrelados": "Sempre que a máquina fizer uma parada de emergência por quebra de linha, use os botões de controle do painel para voltar 5 a 10 pontinhos para trás antes de dar 'Start'. Isso garante que não fique nenhuma falha no meio do desenho!",
    "voceSabia": "Em máquinas multi-cabeças industriais de 20 cabeçotes, o sistema de Quick Stop consegue frear todas as 20 agulhas sincronizadas em menos de 40 milissegundos se qualquer uma das linhas quebrar.",
    "practicalExercise": "Enquanto sua máquina estiver bordando uma matriz simples, aperte o botão 'Start/Stop' e observe a rapidez com que a agulha para na posição mais alta sem machucar o tecido. Em seguida, use o painel para avançar e recuar 5 pontos.",
    "quickSummary": "Quick Stop é o sistema de frenagem eletrônica imediata que imobiliza a agulha ao detectar anomalias, garantindo segurança mecânica e salvando a peça.",
    "relatedTerms": [
      "Sensores de Linha",
      "Parada de Emergência",
      "Ponto Morto Superior",
      "Retrocesso de Pontos"
    ],
    "tags": [
      "parada",
      "segurança",
      "sensores",
      "emergência"
    ]
  },
  {
    "id": "quick-start",
    "code": "Q-061",
    "letter": "Q",
    "term": "Quick Start",
    "pronunciation": "cu-íc istárt",
    "level": "Iniciante 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino (termo técnico de operação).",
    "origin": "Do inglês quick (rápido, suave) e start (iniciar, partida de motor).",
    "summary": "Inicialização rápida e progressiva da costura com rampa suave de aceleração para evitar estresse mecânico e quebra de fio inicial.",
    "definition": "O Quick Start é o recurso eletrônico das máquinas computadorizadas que comanda a partida suave e rápida da costura (rampa de aceleração suave ou Soft Start). Ao iniciar um novo objeto ou retomar o trabalho após uma parada, a máquina executa os primeiros 3 a 5 pontos em baixa velocidade (cerca de 200 a 300 PPM) para assentar os pontos de arremate inicial antes de acelerar progressivamente até a velocidade máxima programada.",
    "technicalDetails": "Evita o pico súbito de torque no fio superior e na alavanca estica-fio, que é o momento mais vulnerável para a linha escapar do olho da agulha ou romper-se por tração brusca.",
    "beginnerExplanation": "É a partida suave da máquina: quando você aperta o botão verde, ela dá os primeiros pontinhos bem devagarzinho para prender a linha com calma, e só depois sai correndo na velocidade normal.",
    "howItWorks": [
      "1. A operadora pressiona o botão de início (Start) com o pé calcador abaixado.",
      "2. O motor inicia o giro com curva de aceleração controlada eletronicamente.",
      "3. A máquina executa o nó de arremate inicial (Tie-in) em velocidade baixa e segura.",
      "4. Ao confirmar a ancoragem estável da laçada, o sistema atinge a velocidade plena de trabalho (ex: 800 PPM)."
    ],
    "applications": [
      "Partida segura em linhas frágeis como fios metálicos e filamentos de viscose.",
      "Início suave em tecidos finos e delicados que poderiam repuxar sob arranque brusco.",
      "Retomada de costura após troca de linha manual em máquinas de uma agulha."
    ],
    "characteristics": [
      "Elimina quebras de linha nos primeiros segundos de costura.",
      "Garante nós de amarração perfeitos e bem assentados.",
      "Preserva a mecânica da barra de agulha e dos discos de tensão."
    ],
    "commonErrors": [
      "❌ Segurar a ponta da linha superior com muita força durante o Quick Start, entortando a agulha na partida.",
      "❌ Tentar acelerar bruscamente a máquina em fios metálicos sem usar a rampa suave de partida.",
      "❌ Iniciar a costura sem segurar suavemente a cauda da linha superior nas primeiras 3 laçadas em máquinas que não têm prendedor automático."
    ],
    "troubleshootingTips": [
      "Linha escapando da agulha no primeiríssimo ponto: segure a pontinha da linha superior de leve com os dedos durante os 3 primeiros pontos.",
      "Máquina dando arranque com tranco forte: certifique-se de que a função 'Soft Start / Partida Suave' está ativada nas configurações da máquina.",
      "Pontos iniciais frouxos: confira se o nó de amarração inicial (Tie-in) está configurado no software da matriz."
    ],
    "dicaArtrelados": "Ao dar a partida no bordado, segure a pontinha da linha de cima suavemente para o lado por apenas 3 segundos enquanto a máquina dá os primeiros pontinhos. Assim que ela acelerar, solte: a linha nunca mais vai escapar da agulha no início!",
    "voceSabia": "O conceito de 'Rampa de Aceleração Suave' (Soft Start) foi desenvolvido na engenharia automotiva para trens de alta velocidade e adotado pelas máquinas de bordar industriais japonesas para proteger os fios de seda delicados.",
    "practicalExercise": "Inicie um bordado prestando atenção no som e no movimento da agulha: conte mentalmente os primeiros 4 pontos lentos da partida suave e sinta a aceleração contínua e elegante até a velocidade final.",
    "quickSummary": "Quick Start é a partida com rampa suave de aceleração que assenta os pontos de amarração iniciais e impede o rompimento da linha na arrancada.",
    "relatedTerms": [
      "Partida Suave (Soft Start)",
      "Pontos de Amarração (Tie-in)",
      "Aceleração Progressiva",
      "Operação de Bordado"
    ],
    "tags": [
      "partida",
      "início",
      "aceleração",
      "operação"
    ]
  },
  {
    "id": "quick-trim-corte-rapido-de-linha",
    "code": "Q-062",
    "letter": "Q",
    "term": "Quick Trim — Corte Rápido de Linha (Otimização de Saltos & Acionamento Automático do Trimmer)",
    "pronunciation": "cu-íc trim — kor-ti ra-pi-du de li-nha",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quick (rápido) e trim (aparar, podar fios excedentes). Comando digital automatizado de corte.",
    "summary": "Rotina de software e comando mecânico que apara automaticamente os fios de salto entre objetos para eliminar o acabamento manual com tesoura.",
    "definition": "O Quick Trim (Corte Rápido de Linha / Auto-Trim Optimization / Comando de Corte de Salto) é a funcionalidade integrada em softwares de matrizes e no firmware da máquina de bordar que detecta deslocamentos em salto (Jump Stitches) superiores a um limiar configurado (geralmente entre 1,5 mm e 5,0 mm) e insere automaticamente uma sequência de micro-nós de arremate seguida pelo acionamento do cortador de linha inferior.",
    "technicalDetails": "Nos arquivos binários de bordado (.DST, .PES, .EXP, .JEF), o Quick Trim é codificado como uma sequência de comandos de parada com salto nulo ou comando específico de corte (código de faca 0x07). A parametrização correta da distância de corte evita paradas excessivas que prolongariam o tempo de produção desnecessariamente.",
    "beginnerExplanation": "É o comando que manda a máquina cortar a linhazinha sozinha toda vez que ela precisa pular de uma letra para a outra, para você não ter que ficar limpando aquele monte de fiozinho com a tesoura depois que o bordado termina.",
    "howItWorks": [
      "1. O programador define o limite mínimo de salto para corte no software (ex: 2,0 mm).",
      "2. Ao finalizar uma letra, o software compara a distância até o próximo caractere.",
      "3. Se a distância for maior que 2,0 mm, a máquina executa o nó de arremate final (Tie-off).",
      "4. A faca móvel abaixo da chapa de ponto avança, laça os fios superior e da bobina e realiza o corte rente.",
      "5. A máquina salta livremente até a próxima letra, executa o nó inicial (Tie-in) e continua bordando."
    ],
    "applications": [
      "Bordado de textos, nomes compostos e frases com espaçamento entre palavras.",
      "Matrizes de logomarcas com múltiplos elementos isolados.",
      "Produção seriada onde o tempo de limpeza manual de fios precisa ser zero."
    ],
    "characteristics": [
      "Elimina quase 100% da necessidade de tosa manual pós-bordado.",
      "Garante segurança total contra desfiamento através de arremates automáticos.",
      "Reduz o risco de puxar fios do tecido durante a limpeza com tesourinha."
    ],
    "commonErrors": [
      "❌ Configurar o limite de corte muito curto (ex: 0,5 mm), fazendo a máquina cortar a linha a cada 3 pontos e dobrando o tempo de produção.",
      "❌ Desativar o corte automático achando que vai bordar mais rápido, criando pontes de linha que podem rasgar o tecido se enroscarem no calcador.",
      "❌ Esquecer de ativar os nós de amarração ao ligar o Quick Trim, fazendo as pontas cortadas desmancharem na lavagem."
    ],
    "troubleshootingTips": [
      "A máquina está deixando pontes de linha entre as letras: ative o comando de corte de salto (Trim on Jump) nas propriedades de exportação da matriz.",
      "A linha escapa do olho da agulha logo após o corte: aumente o comprimento da cauda da linha após o corte nas configurações da máquina ou afrouxe o limpador de fio (Wiper).",
      "Muitos cortes tornando o bordado lento: agrupe os elementos menores por pontos corridos embutidos sob as áreas de preenchimento antes de acionar o corte."
    ],
    "dicaArtrelados": "Para textos médios e grandes (letras acima de 8 mm), configure o Quick Trim no seu software com corte a partir de 2,0 mm. Suas peças saem da máquina 100% limpas, perfeitas e prontas para embalar sem você perder 1 segundo na tesourinha!",
    "voceSabia": "Antes da invenção dos cortadores automáticos mecânicos acionados por solenoide nos anos 1980, as fábricas de bordado mantinham equipes inteiras de funcionárias chamadas de 'limpadoras de linha' cuja única função era aparar os fios de salto com pequenas tesouras.",
    "practicalExercise": "No seu software de edição, escreva a palavra 'BORDADO' com espaçamento normal entre letras. Verifique na lista de pontos se há uma tesourinha (comando de Trim) entre cada letra. Simule a costura no visualizador 3D para ver os cortes automáticos.",
    "quickSummary": "Quick Trim é o recurso que aciona o cortador de linha automático da máquina nos saltos entre objetos, entregando o bordado limpo sem pontes de fio.",
    "relatedTerms": [
      "Cortador Automático (Trimmer)",
      "Jump Stitch (Salto)",
      "Tie-off (Arremate)",
      "Wiper (Limpador de Fio)"
    ],
    "tags": [
      "quicktrim",
      "corte",
      "saltos",
      "software",
      "acabamento",
      "produtividade"
    ]
  },
  {
    "id": "quality-check-matriz-inspecao-qualidade",
    "code": "Q-063",
    "letter": "Q",
    "term": "Quality Check de Matriz — Checklist de Qualidade (Inspeção Pré-Produção & Validação Técnica)",
    "pronunciation": "cuó-li-ti tché-ki — ins-pe-são de qua-li-da-de",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quality (qualidade) e check (conferência, verificação). Protocolo padronizado de controle de qualidade na indústria têxtil.",
    "summary": "Checklist rigoroso de validação técnica da matriz antes de enviar para a máquina, conferindo densidade, sequência, cortes e compensação.",
    "definition": "O Quality Check de Matriz é o protocolo sistemático de inspeção técnica e visual que o programador ou bordador realiza no arquivo de bordado antes de colocá-lo na máquina para produção real. Envolve a verificação de 7 pilares fundamentais: 1) Densidade adequada ao tecido alvo; 2) Pontos de suporte (Underlay) estruturados; 3) Compensação de repuxo correta; 4) Sequência lógica de camadas (do fundo para o topo); 5) Quantidade mínima de cortes e trocas de cor; 6) Enquadramento dentro da área útil do bastidor; e 7) Centralização na origem (0,0).",
    "technicalDetails": "A inspeção é realizada através do simulador de pontos acelerado (Stitch Simulator) e ferramentas de estatísticas da matriz (Production Worksheet). A detecção precoce de pontos curtos (Short Stitches abaixo de 0,3 mm) e cruzamentos com mais de 3 camadas sobrepostas previne quebras de agulha e perfurações no tecido.",
    "beginnerExplanation": "É o 'teste dos 7 erros' que você faz no computador antes de colocar o pendrive na máquina! Você passa o filme do bordado na tela bem rápido para ter certeza de que o desenho não vai furar o pano, não vai ficar duro demais e nem vai bater no bastidor.",
    "howItWorks": [
      "1. A matriz é aberta no software de visualização técnica.",
      "2. Confere-se o tamanho exato em centímetros e a compatibilidade com o bastidor físico selecionado.",
      "3. Executa-se o simulador de costura (Player 3D) em velocidade acelerada.",
      "4. Verifica-se se o fundo borda antes dos contornos e se as letras bordam na ordem de leitura.",
      "5. Inspeciona-se se há nós de arremate em todos os inícios e finais de blocos de cor.",
      "6. Aprovada a matriz no checklist, gera-se a ficha técnica de produção e salva-se o arquivo final."
    ],
    "applications": [
      "Validação de matrizes compradas na internet ou encomendadas de terceiros antes de bordar na peça do cliente.",
      "Homologação de matrizes corporativas para fardamentos em grande escala.",
      "Prevenção de desperdício de tecidos nobres em ateliês de personalização."
    ],
    "characteristics": [
      "Reduz em até 95% os erros e retrabalhos na máquina de bordar.",
      "Garante padronização de alto padrão em todas as encomendas entregues.",
      "Documenta as cores de linha e o consumo de pontos por peça."
    ],
    "commonErrors": [
      "❌ Colocar a matriz direto no pendrive e bordar sem antes passar no simulador do software.",
      "❌ Não conferir se o tamanho da matriz cabe no bastidor sem encostar nas bordas plásticas.",
      "❌ Ignorar avisos de 'pontos muito pequenos' emitidos pelo software de edição."
    ],
    "troubleshootingTips": [
      "A máquina começou a bordar o contorno antes do preenchimento: reordene a lista de objetos no software colocando a camada de base acima do contorno.",
      "Bordado apresentando falhas no simulador: ajuste a compensação de repuxo (Pull Compensation) para cobrir os vãos entre objetos.",
      "Matriz com pontos muito pesados: utilize a ferramenta de redução automática de densidade ou remoção de pontos ocultos (Remove Hidden Stitches)."
    ],
    "dicaArtrelados": "Adote a 'Regra dos 30 Segundos' no seu ateliê: antes de salvar qualquer matriz para a máquina, dê o play no simulador acelerado e olhe com atenção. Esses 30 segundinhos no computador salvam peças caras e evitam horas de dor de cabeça!",
    "voceSabia": "Grandes confecções de moda esportiva internacional mantêm equipes dedicadas de 'QA Digitizers' que testam cada matriz em 3 tipos diferentes de tecidos e lavam as peças 5 vezes em laboratório antes de liberar a produção de milhões de camisas.",
    "practicalExercise": "Abra qualquer matriz que você baixou recentemente. Acesse a ficha técnica no software e anote: 1) Total de pontos, 2) Número de trocas de cores e 3) Dimensões em milímetros. Em seguida, dê o play no simulador e confira se a ordem das cores está perfeita.",
    "quickSummary": "Quality Check de Matriz é o checklist prévio de inspeção técnica que valida densidade, sequência, cortes e enquadramento antes do bordado na máquina.",
    "relatedTerms": [
      "Simulador de Costura (Stitch Player)",
      "Ficha Técnica",
      "Densidade de Ponto",
      "Compensação de Repuxo"
    ],
    "tags": [
      "qualitycheck",
      "qualidade",
      "inspeção",
      "checklist",
      "programação",
      "gestão"
    ]
  },
  {
    "id": "quilt-no-bastidor-in-the-hoop",
    "code": "Q-064",
    "letter": "Q",
    "term": "Quilt no Bastidor — Quilting In The Hoop (Matelassê Digital & Acolchoamento Estruturado)",
    "pronunciation": "cuil-ti no bas-ti-dor — in dê hup",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quilt (acolchoar, unir três camadas com pespontos) e in the hoop (técnica de confecção completa dentro do bastidor de bordar).",
    "summary": "Técnica de costura e acolchoamento de mantas e tecidos executada pela máquina de bordar através de linhas geométricas ou arabescos.",
    "definition": "O Quilt no Bastidor (Quilting In The Hoop / Matelassê Computadorizado / Digital Quilt Block) é a técnica na qual a máquina de bordar eletrônica é utilizada para unir e acolchoar o 'sanduíche de quilt' — composto pelo tecido superior (topo), manta acrílica estruturante (R1, R2 ou manta de algodão) e tecido de forro — através de matrizes contínuas de pespontos decorativos, geométricos ou florais.",
    "technicalDetails": "As matrizes de quilting no bastidor utilizam pontos de corrida simples (Single Run de 2,5 mm a 3,0 mm) ou ponto triplo (Triple / Bean Stitch) com densidade linear baixa para não achatar completamente a manta. As rotinas são programadas com linhas de trajeto contínuo (Continuous Line Quilting) que minimizam cortes e cruzamentos.",
    "beginnerExplanation": "É usar a sua máquina de bordar para fazer aquele efeito acolchoado fofinho de colcha (matelassê) em panos de prato, nécessaires, jogos americanos e almofadas, tudo com desenhos perfeitos e linhas bem retinhas que a máquina faz sozinha.",
    "howItWorks": [
      "1. A entretela ou manta é montada no bastidor.",
      "2. A máquina costura uma linha guia indicando onde colocar o tecido de forro e a manta.",
      "3. Posiciona-se o tecido principal por cima e fixa-se com fita crepe ou alinhavo (Basting).",
      "4. A máquina executa a matriz de quilting cobrindo a área com linhas geométricas ou desenhos florais contínuos.",
      "5. As 3 camadas ficam unidas de forma estável com relevo fofo e textura macia.",
      "6. A peça acolchoada é retirada do bastidor pronta para ser montada na costura ou finalizada com viés."
    ],
    "applications": [
      "Confecção de nécessaires estruturadas, bolsas e estojos no bastidor (ITH).",
      "Confecção de jogos americanos, descansos de prato e pegadores de panela térmicos.",
      "Blocos de colchas de retalhos (Quilt Blocks) personalizados com temas infantis.",
      "Barrados acolchoados em toalhas de mesa e cobre-leitos."
    ],
    "characteristics": [
      "Precisão milimétrica nas curvas e nos encontros de linhas acolchoadas.",
      "Relevo tátil macio e estruturado sem necessidade de entretelas rígidas.",
      "Velocidade incomparavelmente superior ao quilting manual ou livre."
    ],
    "commonErrors": [
      "❌ Usar manta muito grossa que não cabe no bastidor, forçando e quebrando o aro plástico.",
      "❌ Usar pontos muito curtos (menos de 1,8 mm), esmagando a manta e deixando a peça dura como papelão.",
      "❌ Não usar alinhavo perimetral, fazendo o tecido de cima enrugar e criar bolhas durante o acolchoamento."
    ],
    "troubleshootingTips": [
      "O tecido enrugou no meio do bloco acolchoado: ative a função de alinhavo (Basting Box) antes de iniciar a matriz de quilting.",
      "A agulha está quebrando ao passar pelas emendas da manta: utilize agulha de calibre 80/12 ou 90/14 ponta arredondada ou agulha especial para Quilting.",
      "A linha inferior está aparecendo no topo: reduza levemente a tensão da linha superior para equilibrar a tração sobre a manta volumosa."
    ],
    "dicaArtrelados": "Para nécessaires e jogos americanos: use manta R1 (com resina em apenas um lado) e aplique o ferro morno para colar o tecido na manta antes de ir para o bastidor. O sanduíche fica 100% plano e a máquina borda o matelassê com a maciez dos deuses!",
    "voceSabia": "O quilting é uma arte milenar praticada desde o Antigo Egito e a Idade Média para produzir jaquetas acolchoadas que os cavaleiros usavam por baixo das armaduras de metal para amortecer impactos de espadas.",
    "practicalExercise": "Monte um sanduíche com tecido tricoline e manta R1 no bastidor 13x18 cm. Carregue uma matriz de matelassê geométrico simples em ponto de corrida de 3,0 mm e borde. Sinta o relevo macio e fofinho do acolchoamento perfeito.",
    "quickSummary": "Quilt no Bastidor é o método de acolchoar tecido e manta na máquina de bordar, criando texturas de matelassê perfeitas para bolsas, colchas e utilitários.",
    "relatedTerms": [
      "Matelassê",
      "Manta R1/R2",
      "In The Hoop (ITH)",
      "Ponto Triplo (Bean Stitch)",
      "Alinhavo (Basting)"
    ],
    "tags": [
      "quilt",
      "matelasse",
      "manta",
      "ith",
      "acolchoamento",
      "bastidor"
    ]
  },
  {
    "id": "quilting-needle-agulha-para-quilting",
    "code": "Q-065",
    "letter": "Q",
    "term": "Quilting Needle — Agulha para Quilting (Ponta Cônica Especial & Haste Reforçada para Manta)",
    "pronunciation": "cuil-ting nii-dôl — a-gu-lha pa-ra cuil-ting",
    "level": "Iniciante 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês quilting (arte de acolchoar) e needle (agulha de costura/bordado mecânico). Sistema de agulha com geometria otimizada.",
    "summary": "Agulha especializada dotada de ponta cônica especial e haste reforçada para perfurar mantas acrílicas sem desviar nem quebrar.",
    "definition": "A Quilting Needle (Agulha de Quilting / Agulha Especial para Acolchoamento / Sistema 130/705 H-Q) é uma agulha técnica projetada especificamente para penetrar com suavidade em múltiplas camadas de tecido sobrepostas com mantas acrílicas, de algodão ou de poliéster. Caracteriza-se por uma ponta ligeiramente afilada mas com cone arredondado suave (Special Taper Point) e uma haste com zona de flexão reforçada que previne deflexões quando a agulha atinge costuras grossas.",
    "technicalDetails": "Disponível nos calibres 75/11, 80/12 e 90/14. Seu olho longo e polido reduz o atrito com linhas de algodão e poliéster durante a formação da laçada através da manta comprimida. A geometria do cone impede que a agulha empurre fiapos da manta para fora da chapa de ponto (fenômeno conhecido como 'Bearding').",
    "beginnerExplanation": "É uma agulha especial super resistente feita para furar tecidos grossos com manta por dentro sem entortar, sem quebrar e sem deixar aqueles pelinhos brancos da manta escaparem para fora da roupa.",
    "howItWorks": [
      "1. A agulha penetra suavemente no tecido de topo sem cortar as fibras da trama.",
      "2. A ponta cônica afasta os filamentos da manta acrílica sem prender nem puxar tufos para cima.",
      "3. A haste reforçada desce reta até o ponto morto inferior sem desviar em direção à lançadeira.",
      "4. A laçada inferior se abre com folga graças ao canalete longo da agulha.",
      "5. O ponto é arrematado no centro do sanduíche de quilt com firmeza e sem falhas."
    ],
    "applications": [
      "Execução de matrizes de matelassê e quilt no bastidor em tecidos acolchoados.",
      "Confecção de nécessaires, bolsas e carteiras estruturadas com manta R1 ou R2.",
      "Bordados em jaquetas acolchoadas, casacos de inverno e cobertores infantis."
    ],
    "characteristics": [
      "Ponta cônica especial que previne o vazamento de fibras da manta (Anti-Bearding).",
      "Haste rígida de aço temperado com alta resistência à quebra por deflexão.",
      "Olho alongado que facilita a passagem de linhas de diversas espessuras."
    ],
    "commonErrors": [
      "❌ Usar agulha fina 65/9 para bordar sobre manta grossa, entortando a agulha e quebrando a ponta na lançadeira.",
      "❌ Usar agulha de ponta lança cortante (Leather/Couro) em tecidos com manta, cortando as fibras e rasgando o tecido.",
      "❌ Continuar usando a agulha após mais de 10 horas de uso contínuo em mantas abrasivas."
    ],
    "troubleshootingTips": [
      "Pelinhos brancos da manta saindo pelos furos do tecido: troque imediatamente a agulha por uma Quilting Needle 80/12 nova com ponta lisa e sem rebarbas.",
      "Máquina pulando pontos ao passar por emendas de manta: instale uma agulha Quilting 90/14 para garantir rigidez mecânica total.",
      "Linha superior desfiando no olho da agulha: verifique se o calibre da agulha é compatível com a espessura da linha utilizada."
    ],
    "dicaArtrelados": "Se você faz muitas nécessaires e projetos 'No Bastidor' (ITH) com manta R1 ou R2: tenha sempre um pacotinho de agulhas Quilting 80/12 no seu ateliê. Elas duram muito mais e nunca deixam a manta escapar pelos furinhos!",
    "voceSabia": "As agulhas de Quilting da marca alemã Schmetz possuem uma faixa de cor verde no encaixe para facilitar a identificação imediata na bancada de trabalho sem precisar de lupa para ler o calibre.",
    "practicalExercise": "Pegue um pedaço de tecido com manta R2. Experimente bordar 10 cm de ponto de corrida com uma agulha comum gasta e depois com uma Quilting Needle 80/12 nova. Observe como os furos da agulha de quilting fecham suavemente sem deixar marcas.",
    "quickSummary": "Quilting Needle é a agulha com ponta cônica e haste reforçada projetada para perfurar mantas acrílicas sem quebrar e sem puxar fiapos para fora.",
    "relatedTerms": [
      "Agulha de Bordado",
      "Manta R1/R2",
      "Calibre de Agulha",
      "Bearding",
      "Matelassê"
    ],
    "tags": [
      "quiltingneedle",
      "agulha",
      "manta",
      "acolchoamento",
      "acessorios",
      "ferramentas"
    ]
  },
  {
    "id": "quadrimensional-stitching-bordado-multicamadas",
    "code": "Q-066",
    "letter": "Q",
    "term": "Quadrimensional Stitching — Bordado Multicamadas (Texturas Hiper-Realistas & Profundidade 4D)",
    "pronunciation": "cua-dri-men-shon-al stit-ching — bor-da-do mul-ti-ca-ma-das",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadri (quatro) e dimension (dimensão). Conceito de arte têxtil contemporânea que une altura física, ângulos de luz, textura tátil e tempo de transição cromática.",
    "summary": "Técnica avançada de digitalização artística que sobrepõe camadas de satim, tatami gradiente e pontos flutuantes para criar efeito hiper-realista.",
    "definition": "O Quadrimensional Stitching (Bordado Multicamadas / Bordado Texturizado Hiper-Realista / 4D Dimensional Embroidery) é o ápice da engenharia artística de matrizes, onde o programador combina 4 dimensões de percepção: 1) A geometria do plano X-Y; 2) O relevo de profundidade Z obtido por gradientes de densidade e underlays escalonados; 3) O reflexo dinâmico da luz gerado por múltiplos ângulos de inclinação de satim; e 4) O degradê cromático progressivo (Color Blending / Shading) que confere sensação de volume vivo e movimento a retratos, animais e paisagens.",
    "technicalDetails": "Exige domínio completo de curvas vetoriais, densidades variáveis (de 0,25 mm a 1,20 mm na mesma área), pontos com extremidades plumadas (Feathered Edge / Jagged Edge) e sobreposição de até 6 camadas translúcidas de linhas finas (calibre 60 wt) sem criar excesso de rigidez no tecido.",
    "beginnerExplanation": "É o bordado que parece uma pintura a óleo em 3D de verdade: a bordadeira programa as linhas em direções e cores diferentes para criar pelos de animais, penas de pássaros e rostos tão perfeitos que parecem vivos e brilhantes como uma escultura de linha.",
    "howItWorks": [
      "1. A imagem de referência de alta resolução é decomposta em mapas de sombra, relevo e reflexo de luz.",
      "2. Cria-se a camada de base (Base Layer) em tatami aberto com orientação perpendicular à luz.",
      "3. Sobrepõem-se camadas intermediárias de sombreamento com bordas plumadas e densidades gradientes.",
      "4. Aplica-se a camada superior de detalhes finos (Top Layer) com colunas satim de ângulos múltiplos que refratam a luz.",
      "5. A máquina costura a matriz com agulhas finas 65/9 e linhas de alta refletância.",
      "6. A peça final ganha tridimensionalidade, brilho variável conforme a posição do observador e toque tátil rico."
    ],
    "applications": [
      "Quadros de arte têxtil decorativa de altíssimo valor agregado (Hoop Art de luxo).",
      "Retratos fotorrealistas bordados de animais de estimação (Pet Embroidery) e figuras humanas.",
      "Peças de alta-costura para passarelas e marcas internacionais de luxo.",
      "Brasões comemorativos e insígnias cerimoniais de alta complexidade."
    ],
    "characteristics": [
      "Efeito visual hiper-realista que impressiona pela riqueza de detalhes e sombras.",
      "Reflexão dinâmica de brilho conforme a luz do ambiente atinge os diferentes ângulos.",
      "Toque macio e flexível garantido pelo controle milimétrico de densidades abertas."
    ],
    "commonErrors": [
      "❌ Sobrepor muitas camadas sólidas sem bordas plumadas, criando uma 'placa dura de concreto' que quebra agulhas.",
      "❌ Usar linha grossa em áreas de detalhes minúsculos, deixando o desenho empastado e grosseiro.",
      "❌ Não usar entretela de corte limpo (Cut-Away) pesada, fazendo o tecido enrugar sob o volume de pontos."
    ],
    "troubleshootingTips": [
      "O bordado ficou duro como papelão: diminua a densidade das camadas de fundo (aumente o espaçamento para 0,80 mm a 1,20 mm) e use bordas plumadas para fundir as cores.",
      "A agulha está quebrando nas sobreposições: ative o recurso de 'Remover Pontos Ocultos' (Remove Underneath Stitches) no software.",
      "Os pelos do animal não parecem naturais: varie os comprimentos de ponto (Random Stitch Length) e ajuste os ângulos das colunas para acompanhar a anatomia real do animal."
    ],
    "dicaArtrelados": "Para fazer bordados artísticos e pelos de animais que parecem de verdade: nunca use pontos retos com cortes secos! Ative sempre a borda plumada (Feather Edge) nas duas pontas e misture pelo menos 3 tons de linha da mesma cor (claro, médio e escuro). O efeito é pura magia!",
    "voceSabia": "Artistas têxteis contemporâneos utilizam o Quadrimensional Stitching para reproduzir obras famosas de Van Gogh e Monet com mais de 300.000 pontos e 80 trocas de cor em quadros que levam dias para serem executados.",
    "practicalExercise": "No seu software, desenhe uma folha simples. Divida-a em 3 faixas sobrepostas com bordas plumadas (Feather Edge): verde escuro, verde médio e verde claro. Borde em um retalho e veja como as cores se fundem suavemente sem divisões duras.",
    "quickSummary": "Quadrimensional Stitching é a técnica artística avançada que combina relevo, gradientes cromáticos e múltiplos ângulos de luz para criar bordados hiper-realistas.",
    "relatedTerms": [
      "Color Blending (Degradê de Linhas)",
      "Bordas Plumadas (Feather Edge)",
      "Densidade Variável",
      "Bordado Fotorrealista"
    ],
    "tags": [
      "quadrimensional",
      "multicamadas",
      "fotorrealismo",
      "arte",
      "degrade",
      "avançado"
    ]
  },
  {
    "id": "q-067-quilting-computadorizado-in-the-hoop-ith-e-matrizes-de-acolchoamento",
    "code": "Q-067",
    "term": "Quilting Computadorizado 'In The Hoop' (ITH) e Matrizes de Acolchoamento Estruturado (Computerized In-The-Hoop Quilting & Trapunto Geometry)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês medieval quilte (colchão acolchoado) e da sigla moderna ITH (In The Hoop, feito 100% no bastidor). Fusão do patchwork clássico com bordado computadorizado nos anos 2000.",
    "summary": "Técnica que acolchoa tecido e manta acrílica no bastidor criando nécessaires, jogos americanos e colchas perfeitas.",
    "definition": "O Quilting Computadorizado 'In The Hoop' (ITH) e Acolchoamento Estruturado Digital (Computerized In-The-Hoop Quilting, Machine Matelassê & Trapunto Block Digitizing) é a técnica de união de três camadas têxteis (tecido de topo, manta acrílica estruturante R1/R2 e forro inferior) executada de forma 100% automatizada no bastidor da máquina de bordar. A matriz digital é programada em sequenciamento inteligente sem cortes desnecessários, intercalando linhas de marcação (Placement Stitches), fixação de manta (Tackdown Stitches), desenhos geométricos contínuos de matelassê (ondulações, plumas, arabescos e grades inglesas) e montagem de zíperes ou forros embutidos, dispensando o uso de braços longos de quilting manual (Longarm).",
    "technicalDetails": "Comprimento médio de ponto de quilting: 2,5 mm a 3,2 mm. Compensação de encolhimento da manta: 5% a 8% de expansão perimétrica. Tensão de linha recomendada: Levemente folgada no topo para embutir o nó no meio da manta.",
    "howItWorks": [
      "1. A bordadeira prende a entretela rasgável ou hidrossolúvel no bastidor e a máquina executa a primeira costura de marcação (Placement).",
      "2. Posiciona a manta acrílica (R1 ou R2) cobrindo a área e a máquina faz o pesponto de fixação (Tackdown).",
      "3. A artesã apara o excesso de manta ao redor com tesoura de ponta curvada (Pelicano).",
      "4. Cobre com o tecido principal e a máquina inicia o desenho contínuo de quilting com arabescos e plumas em ponto de corrida longo.",
      "5. Posiciona o tecido de forro no verso do bastidor e a máquina costura as laterais da peça embutindo todas as costuras.",
      "6. A peça (como uma nécessaire ou jogo americano) é retirada do bastidor pronta para ser desvirada pela abertura.",
      "7. O resultado é um produto acolchoado luxuoso, fofinho, simétrico e com acabamento de alfaiataria."
    ],
    "beginnerExplanation": "É a técnica mágica de fazer bolsas, nécessaires, tapetinhos e colchas acolchoadas direto na sua máquina de bordar! Você coloca a manta fofinha e o tecido dentro do bastidor, aperta o botão e a máquina costura todos os desenhos fofos de ondinhas e flores, já deixando a bolsinha praticamente pronta sem você precisar costurar nada na mão!",
    "applications": [
      "Confecção de nécessaires, carteiras, bolsas térmicas e estojos 100% estruturados no bastidor",
      "Jogos americanos, sousplats, trilhos de mesa e descansos de pratos matelassados",
      "Blocos de colchas de patchwork infantil (Quilt Blocks) com nomes e bichinhos bordados",
      "Capas de cadernetas de vacinação, almofadas e protetores de berço fofinhos"
    ],
    "commonErrors": [
      "❌ Usar manta muito grossa e dura (acima de R2 200g) em bastidores pequenos, travando o pé-calcador da máquina",
      "❌ Cortar a manta com tesoura reta comum e acidentalmente picotar o tecido de base",
      "❌ Usar pontos muito curtos (menores que 1,8 mm) no acolchoamento, esmagando a manta e deixando a peça rígida como papelão"
    ],
    "troubleshootingTips": [
      "Utilize sempre agulhas especiais de Quilting calibre 80/12 ou 90/14 para não puxar pelinhos da manta para fora do tecido",
      "Prenda a manta com fita crepe automotiva de papel ou cola spray temporária para ela não enrugar durante a costura",
      "Ajuste o ponto de quilting no programa com comprimento de 2,8 mm a 3,0 mm para o desenho ficar bem visível e macio"
    ],
    "dicaArtrelados": "As nécessaires e bolsas feitas 100% no bastidor (ITH) com quilting são os produtos mais vendidos e lucrativos dos ateliês! Você produz uma peça completa em menos de 15 minutos e encanta as clientes com o forro perfeitamente embutido!",
    "voceSabia": "A palavra inglesa 'Quilt' deriva do latim 'Culcita', que significa almofada ou colchão de penas, uma técnica têxtil milenar encontrada nas tumbas dos faraós egípcios datada de mais de 3.000 anos a.C.!",
    "practicalExercise": "Pegue um pedaço de manta R1 e um retalho de tricoline. Programe no seu software um quadrado com linhas diagonais cruzadas de 2 cm em ponto de corrida de 3 mm. Borde no bastidor e sinta o relevo fofinho do matelassê na mão!",
    "quickSummary": "Técnica que une tecido e manta no bastidor para criar peças acolchoadas e estruturadas prontas e com acabamento embutido.",
    "relatedTerms": [
      "Quilting Needle (Agulha de Quilting)",
      "Bordado In The Hoop (ITH)",
      "Manta Acrílica R1 e R2",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-067",
      "quilting",
      "in the hoop",
      "ith",
      "matelasse",
      "acolchoamento",
      "necessaire",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICA QUILTING SOCIETY. Computerized Machine Quilting & In-The-Hoop Construction. Paducah, 2022.",
      "ARTRELADOS. O Fascinante Mundo das Peças In The Hoop: Quilting, Bolsas e Enxovais no Bastidor. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-068-quadratura-de-pulsos-e-decodificacao-de-sinal-em-encoders",
    "code": "Q-068",
    "term": "Quadratura de Pulsos e Decodificação de Sinal em Encoders Ópticos (Quadrature Pulse Decoding & 4X Encoder Resolution Multiplication)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quadratura (formação de ângulos retos de 90°). Mecatrônica digital e processamento de sinais eletrônicos em controle numérico CNC.",
    "summary": "Sinais defasados em 90° que informam ao computador da máquina a direção do giro e a posição exata da agulha em 0,05°.",
    "definition": "A Quadratura de Pulsos e Decodificação Digital em Encoders Ópticos e Magnéticos (Quadrature Pulse Decoding & 4X Resolution Multiplication in Machine Encoders) é a técnica mecatrônica de processamento de sinais de feedback de posição angular do eixo principal e dos servomotores X/Y da máquina de bordar. O disco encoder gera dois trens de ondas quadradas (Canais A e B) fisicamente defasados em 90° elétricos (um quarto de período). O microprocessador DSP decodifica as transições de borda de subida e descida de ambos os canais, multiplicando a resolução nativa por 4 (Modo 4X) e determinando instantaneamente a direção da rotação (horária ou anti-horária), garantindo precisão angular superior a 0,05° para a parada de agulha e corte de linha.",
    "technicalDetails": "Defasagem angular nominal entre canais A e B: 90° ± 10°. Frequência máxima de contagem de pulsos: > 500 kHz. Nível de sinal lógico: TTL 5V ou RS-422 Diferencial. Resolução resultante com multiplicação 4X: 4.096 a 16.384 pulsos por rotação.",
    "howItWorks": [
      "1. O motor do eixo principal gira a 1.000 RPM, fazendo o disco transparente com ranhuras microscópicas girar dentro do leitor óptico.",
      "2. Os dois sensores fototransistores captam a luz dos LEDs infravermelhos e geram os sinais de onda quadrada Canal A e Canal B.",
      "3. Como os sensores estão posicionados com defasagem geométrica, a onda A atinge o topo 90° antes da onda B quando o eixo gira no sentido horário.",
      "4. Se o operador gira o volante com a mão para trás, a onda B sobe antes da onda A.",
      "5. O processador DSP analisa cada transição de 0V para 5V, identificando o sentido de rotação e somando 4 pulsos por ciclo.",
      "6. A máquina conhece a altura exata da agulha em tempo real a cada fração de milésimo de segundo.",
      "7. No término do bordado, freia o motor com precisão milimétrica exatamente no Ponto Morto Superior (PMS a 0°/360°)."
    ],
    "beginnerExplanation": "É o sistema inteligente de 'olhinhos eletrônicos' dentro do motor da máquina que lê feixes de luz piscando super rápido para saber se a agulha está subindo ou descendo e parar ela no ar com precisão absoluta no milímetro exato, sem você precisar ficar ajustando o volante na mão!",
    "applications": [
      "Sincronização angular de precisão para parada de agulha no topo ou embaixo",
      "Detecção de rotação invertida acidental ou travamento de motor",
      "Controle de malha fechada (Closed-Loop) nos servomotores do pantógrafo X/Y",
      "Leitura de velocidade real em tempo real (RPM) no painel de controle"
    ],
    "commonErrors": [
      "❌ Acúmulo de poeira e fiapos de linha sobre a lente do encoder óptico, bloqueando a passagem do sinal em quadratura",
      "❌ Conectar cabos de sinal do encoder próximos a cabos de alta potência sem blindagem, gerando ruídos eletromagnéticos",
      "❌ Limpar o disco transparente do encoder com álcool isopropílico agressivo, apagando as ranhuras microscópicas"
    ],
    "troubleshootingTips": [
      "Se a máquina apresentar erro 'Main Shaft Encoder Error' ou parar fora de posição, limpe delicadamente o sensor com ar comprimido seco",
      "Verifique se o cabo flat do encoder está bem travado no conector da placa-mãe",
      "Em revisões preventivas de 2 anos, meça com osciloscópio se as ondas dos canais A e B mantêm a defasagem limpa de 90°"
    ],
    "dicaArtrelados": "A precisão do encoder em quadratura é a razão pela qual as máquinas modernas conseguem cortar a linha, recolher a barra e parar a agulha no alto em um piscar de olhos sem falhar!",
    "voceSabia": "O conceito de quadratura de sinais elétricos foi concebido na virada do século XIX por Nikola Tesla para motores de corrente alternada bifásicos e hoje é o coração de todos os robôs industriais e máquinas de bordar CNC do mundo.",
    "practicalExercise": "Gire o volante da sua máquina de bordar com a mão e veja como o número de graus no painel digital muda instantaneamente e de forma contínua acompanhando o menor movimento dos seus dedos!",
    "quickSummary": "Sistema de ondas defasadas em 90° que permite ao computador saber a posição e o sentido de giro do eixo da máquina.",
    "relatedTerms": [
      "Encoder Óptico do Eixo Principal",
      "Osciloscópio Digital e Diagnóstico de Sinais",
      "Servomotor de Eixo X e Y",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "q-068",
      "quadratura",
      "encoder",
      "sinais digitais",
      "posicao de agulha",
      "mecatronica",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXAS INSTRUMENTS. Quadrature Encoder Pulse (QEP) Interface & Motion Control Guide. Dallas, 2023.",
      "BARUDAN CO. Electronic Service Manual: Main Shaft Encoder & Quadrature Signal Calibration. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-069-quebra-termica-de-fio-sintetico-e-fusao-de-polimero",
    "code": "Q-069",
    "term": "Quebra Térmica de Fio Sintético e Fusão de Polímero por Atrito (Needle Heat Thread Melting & Friction Thermal Breakdown)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Diagnóstico de Problemas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da física do atrito térmico (tribologia têxtil) e termodinâmica de polímeros termoplásticos (poliéster e poliamida).",
    "summary": "Quando o calor da agulha ultrapassa 200 °C em alta rotação, derretendo o fio de poliéster e arrebentando a linha.",
    "definition": "A Quebra Térmica de Fio Sintético e Fusão por Atrito de Agulha (Needle Heat Induced Thread Melting, Thermal Friction Breakage & Polymer Degradation) é a falha mecânica em que a temperatura na ponta e na canaleta da agulha de bordar atinge ou supera o ponto de fusão do filamento de poliéster (cerca de 250 °C a 260 °C) ou poliamida (215 °C a 220 °C). O superaquecimento ocorre devido ao atrito cinético violento contra tecidos densos e sintéticos (como nylon ripstop, lonas, sarja pesada e couro) sob velocidades acima de 850 RPM. O fio amolece, perde sua resistência à tração e derrete no olho da agulha, formando uma pequena bolinha plástica vitrificada na ponta arrebentada.",
    "technicalDetails": "Ponto de transição vítrea (Tg) do poliéster: 70 °C a 80 °C; Ponto de fusão (Tm): ~255 °C. Temperatura típica de agulha a 900 RPM em tecidos grossos: 180 °C a 230 °C. Solução: Agulhas antiaderentes com revestimento cerâmico TiN ou teflonado.",
    "howItWorks": [
      "1. A máquina opera a 950 RPM bordando um logotipo denso sobre uma mochila de nylon grosso ou boné estruturado.",
      "2. A cada segundo, a agulha perfura o tecido denso cerca de 16 vezes consecutivas.",
      "3. O atrito das fibras de poliéster do tecido contra o aço da agulha gera calor extremo, elevando a temperatura para mais de 200 °C.",
      "4. A linha de bordar passa rapidamente pelo olho da agulha quente e absorve essa energia térmica.",
      "5. A estrutura molecular do polímero da linha atinge a zona de amolecimento térmico e perde 90% da sua força.",
      "6. A linha derrete e se rompe instantaneamente no olho da agulha.",
      "7. A ponta da linha partida apresenta uma extremidade arredondada e dura, característica inconfundível de fusão plástica."
    ],
    "beginnerExplanation": "É quando a agulha esquenta tanto de furar tecido grosso rápido que vira um 'ferro de passar fervendo' e derrete a linha plástica de poliéster no meio do caminho! Você sabe que foi isso quando a ponta da linha que arrebentou fica com uma bolinha dura e queimada na pontinha.",
    "applications": [
      "Diagnóstico de quebras recorrentes de linha em bordados de bonés estruturados, jaquetas jeans e mochilas",
      "Seleção correta de agulhas com banho de nitreto de titânio (Gold / TiN) ou Teflon antiaderente",
      "Ajuste e redução de velocidade operacional em tecidos pesados",
      "Aplicação de lubrificantes siliconados especiais para linhas de bordar (Thread Lubricator)"
    ],
    "commonErrors": [
      "❌ Apertar o tensor da máquina achando que a linha estava frouxa, aumentando ainda mais o atrito e piorando a quebra",
      "❌ Manter a velocidade travada em 1.000 RPM ao bordar tecidos emborrachados ou lonas pesadas",
      "❌ Usar agulhas finas nº 65/9 em tecidos pesados, fazendo o fio ficar prensado com atrito máximo na canaleta estreita"
    ],
    "troubleshootingTips": [
      "Se a linha estiver quebrando com ponta derretida, reduza a velocidade da máquina para 650–700 RPM imediatamente",
      "Troque a agulha por uma agulha com revestimento dourado de Titânio (Groz-Beckert GEBEDUR ou Schmetz Gold) ou calibre maior 80/12",
      "Passe uma gotinha de óleo de silicone no topo do cone de linha para lubrificar e resfriar a passagem pela agulha"
    ],
    "dicaArtrelados": "Quando for bordar mochilas, bonés ou jaquetas grossas, diminua a velocidade para 650 RPM e coloque uma agulha de Titânio dourada! Ela não esquenta, desliza suave e não deixa a linha derreter nunca!",
    "voceSabia": "Em testes de laboratório na Alemanha com câmeras termográficas de infravermelho, constatou-se que agulhas comuns de cromo atingem impressionantes 280 °C em menos de 45 segundos de costura rápida sobre tecidos sintéticos!",
    "practicalExercise": "Examine com uma lupa a pontinha da linha quando ela arrebentar na sua máquina: se a ponta estiver desfiada como um pincel, foi quebra por tração mecânica; se estiver arredondada e dura como uma gotinha de plástico, foi quebra térmica por calor!",
    "quickSummary": "Rompimento do fio causado pelo calor extremo da agulha em alta rotação, que derrete o filamento sintético.",
    "relatedTerms": [
      "Agulha de Titânio (Gold / TiN)",
      "Linha de Poliéster 120 (Polyester Thread)",
      "Potenciômetro de Velocidade e Curvas Dinâmicas",
      "Diagnóstico de Problemas"
    ],
    "tags": [
      "q-069",
      "quebra termica",
      "calor da agulha",
      "fusao de polimero",
      "atrito",
      "superaquecimento",
      "diagnostico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Needle Heating in High-Speed Sewing and Embroidery: Thermal Dynamics & Titanium Solutions. Albstadt, 2023.",
      "ARTRELADOS. Guia Definitivo de Resolução de Quebras de Linha e Regulagens de Temperatura. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-070-quadro-de-linhas-e-painel-de-organizacao-visual-por-familias-cromaticas",
    "code": "Q-070",
    "term": "Quadro de Linhas e Painel de Organização Visual por Famílias Cromáticas (Embroidery Thread Wall Rack & Chromatic Storage System)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do design ergonômico de postos de trabalho e da teoria das cores de Johannes Itten aplicada à produtividade e conservação de insumos têxteis.",
    "summary": "Expositor de parede inclinado organizado pelo círculo cromático que acelera a escolha de linhas e protege os cones.",
    "definition": "O Quadro de Linhas, Expositor Modular de Parede e Sistema de Armazenamento por Famílias Cromáticas (Wall-Mounted Spool Organizer Rack, Shadow Box Storage & Chromatic Filament Hierarchy) é a estrutura física de madeira nobre, alumínio ou acrílico com pinos inclinados a 45° instalada no ateliê para alojar os cones de linha de bordar (1.000m e 4.000m). O sistema organiza os carretéis seguindo a ordem matemática do espectro visível (Vermelhos, Laranjas, Amarelos, Verdes, Azuis, Violetas, Neutros, Tons de Pele e Metálicos), reduzindo o tempo de preparação de matrizes (Set-up Time) em até 50% e protegendo os fios contra a degradação fotoquímica por radiação solar direta (raios UV) e poeira ambiente.",
    "technicalDetails": "Ângulo de inclinação dos pinos: 45° a 60° (evita que cones pesados caiam com a vibração da bancada). Espaçamento entre centros de pinos: 75 mm a 90 mm para cones industriais. Distância recomendada da máquina: 1,0 m a 1,5 m.",
    "howItWorks": [
      "1. A bordadeira recebe um novo pedido com logotipo que exige azul royal, dourado e cinza chumbo.",
      "2. Ao olhar para o quadro de linhas cromático na parede à sua frente, identifica imediatamente o setor dos azuis frios.",
      "3. Localiza o tom exato do cone em menos de 5 segundos, sem precisar revirar caixas fechadas ou gavetas escuras.",
      "4. Retira o cone, confere o código da etiqueta e abastece a máquina.",
      "5. Ao finalizar o lote, devolve o cone exatamente no mesmo pino numerado da sua família de cores.",
      "6. A proteção da parede com vidro ou cortina retrátil evita o acúmulo de poeira e teias de aranha nos fios.",
      "7. O ateliê mantém uma estética profissional impecável que impressiona e encanta os clientes que visitam o espaço."
    ],
    "beginnerExplanation": "É aquele lindo painel de madeira ou acrílico com pininhos na parede onde você coloca todos os seus cones de linha organizados como as cores do arco-íris! Além de deixar o seu ateliê lindo e encantador, ele faz você achar qualquer cor de linha em 2 segundos sem perder tempo caçando carretel dentro de gavetas bagunçadas!",
    "applications": [
      "Organização ergonômica de cones de linha de 1.000m a 5.000m no ateliê",
      "Redução drástica do tempo de escolha e montagem de cores na máquina",
      "Controle visual de estoque (saber imediatamente quando uma cor de linha está acabando)",
      "Decoração e valorização profissional do ambiente de trabalho para fotos e redes sociais"
    ],
    "commonErrors": [
      "❌ Instalar o quadro de linhas em uma parede que recebe sol direto da janela o dia todo, fazendo o sol desbotar e ressecar os fios",
      "❌ Deixar os cones soltos acumulando poeira e fiapos por meses sem limpar",
      "❌ Guardar linhas misturadas sem ordem de cor, demorando 10 minutos para achar um simples tom de bege"
    ],
    "troubleshootingTips": [
      "Posicione o quadro de linhas sempre em uma parede arejada e sem incidência de luz solar direta",
      "Para manter o painel sempre impecável, cubra com um tecido leve ou plástico transparente no final do expediente",
      "Cole pequenas etiquetas com o número do código de cor abaixo de cada pino para facilitar a reposição de estoque"
    ],
    "dicaArtrelados": "Um painel de linhas bem organizado em degradê é o maior cartão de visitas do seu ateliê! Quando a cliente entra e vê aquele arco-íris de linhas impecável, ela sente na hora que está em um lugar profissional de alto padrão!",
    "voceSabia": "Estudos de engenharia de produção comprovam que operadores de máquinas de bordar perdem em média 42 minutos por dia procurando linhas em ateliês desorganizados; um painel cromático devolve 15 dias úteis de trabalho livre por ano!",
    "practicalExercise": "Separe hoje mesmo 30 minutos para organizar as linhas do seu ateliê: junte todas as linhas da mesma cor (todos os vermelhos juntos, todos os azuis juntos, do mais claro ao mais escuro). Veja como seu dia a dia vai ficar muito mais leve e rápido!",
    "quickSummary": "Painel de parede organizado por famílias de cores que acelera a produção e conserva os cones de linha com beleza.",
    "relatedTerms": [
      "Linha de Poliéster 120 (Polyester Thread)",
      "Pino Carretel Vertical vs. Horizontal",
      "Layout de Produção Contínua e Organização Modular",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-070",
      "quadro de linhas",
      "painel de linhas",
      "organizacao visual",
      "circulo cromatico",
      "ergonomia",
      "atelie",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA THREADS. Color Storage, UV Protection and Atelier Workspace Solutions. Freiburg, 2023.",
      "ARTRELADOS. Organização Inteligente de Ateliês: Como Ganhar Tempo e Lucrar Mais com Espaços Ergonômicos. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-071-queima-a-laser-integrada-e-cabecote-de-gravacao",
    "code": "Q-071",
    "term": "Queima a Laser Integrada e Cabeçote de Gravação Galvanométrica (Bridge Laser Embroidery & Galvanometric Cutting Head)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Equipamentos e Máquinas Especiais",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da física óptica de lasers de CO2 (Light Amplification by Stimulated Emission of Radiation) e da automação têxtil de corte térmico dos anos 1990.",
    "summary": "Sistema a laser acoplado sobre a máquina de bordar que corta tecidos e grava apliques a 1.200 mm/s com precisão.",
    "definition": "O Sistema de Queima e Corte a Laser Integrado em Ponte (Bridge Laser Embroidery System & Galvanometric Head Beam) é a tecnologia industrial que combina uma máquina de bordar multicabeças com uma ponte superior móvel equipada com tubo laser de CO2 e espelhos galvanométricos ultrarrápidos. O feixe laser focalizado (com potência de 50W a 150W) queima e corta tecidos de aplique, couro, jeans e feltro diretamente dentro do bastidor com precisão de 0,05 mm e velocidade de até 1.200 mm/s, eliminando o recorte manual com tesouras, selando as bordas sintéticas contra desfiamento e permitindo efeitos de corrosão estética (dévoré/engraving).",
    "technicalDetails": "Comprimento de onda do laser CO2: 10,6 µm (infravermelho distante). Potência do ressonador: 50W a 150W RF selado. Velocidade de corte galvanométrico: até 1.500 mm/s. Repetibilidade de alinhamento com a agulha: < 0,03 mm.",
    "howItWorks": [
      "1. A máquina de bordar executa a costura de marcação e a operadora estende um tecido sintético (como feltro ou sarja) sobre o bastidor.",
      "2. A ponte laser desliza sobre o cabeçote ativo e o feixe laser corta o contorno exato do aplique em fração de segundo.",
      "3. O feixe térmico sela instantaneamente a borda das fibras sintéticas sem queimar nem chamuscar o tecido de base.",
      "4. A operadora retira apenas o retalho externo com um movimento simples da mão.",
      "5. A máquina de bordar retoma imediatamente a costura, bordando o ponto cheio perfeito sobre a borda selada.",
      "6. Em peças de jeans, o laser pode fazer gravações dévoré em degradê imitando lavagens estonadas no meio do bordado.",
      "7. O lote de dezenas de peças fica pronto em minutos com padronização industrial absoluta."
    ],
    "beginnerExplanation": "É um raio laser especial que anda por cima da máquina de bordar e corta o tecido dos apliques e desenhos com velocidade da luz e precisão perfeita! Ele dispensa você de ter que ficar cortando o tecido com a tesourinha na mão e já queima a beiradinha do pano para ele nunca mais desfiar na vida!",
    "applications": [
      "Corte instantâneo de apliques em jaquetas universitárias, uniformes e bonés",
      "Gravação e desbotamento artístico a laser em peças de jeans e camisas polo",
      "Corte e perfuração de couro nobre, camurça e feltro em alta-costura",
      "Produção seriada de patches e emblemas militares com bordas seladas"
    ],
    "commonErrors": [
      "❌ Regular a potência do laser muito alta, furando o tecido de fundo da peça junto com o aplique",
      "❌ Operar o sistema a laser sem exaustor de ar ativo, enchendo o ateliê de fumaça de tecido queimado",
      "❌ Cortar tecidos de PVC ou vinil com laser de CO2 (libera gás cloro altamente tóxico e corrosivo)"
    ],
    "troubleshootingTips": [
      "Sempre realize um teste de corte em retalho para calibrar a potência (Watts) exata da queima para cada tipo de tecido",
      "Mantenha as lentes ópticas de silício e espelhos de ouro do laser sempre limpos com cotonete e álcool isopropílico 99%",
      "Trabalhe sempre com a tampa protetora de acrílico âmbar fechada para proteger a visão dos operadores contra reflexos do feixe"
    ],
    "dicaArtrelados": "Embora seja um equipamento industrial de grande porte, entender como o laser funciona te ajuda a terceirizar o corte de apliques em grandes quantidades ou escolher apliques prontos cortados a laser para acelerar sua produção!",
    "voceSabia": "O primeiro sistema de ponte laser integrado a máquinas de bordar foi desenvolvido na Itália pela empresa Seit Elettronica em 1993, revolucionando para sempre a produção mundial de apliques em roupas esportivas.",
    "practicalExercise": "Observe um patch ou aplique cortado a laser e compare com um cortado na tesoura: repare como a borda a laser é perfeitamente lisa, sem nenhum fiapo solto e com selamento perfeito das pontas!",
    "quickSummary": "Sistema com feixe laser que corta apliques e grava tecidos direto no bastidor com precisão cirúrgica e bordas seladas.",
    "relatedTerms": [
      "Aplique no Bordado",
      "Pirógrafo Têxtil e Ferro de Solda",
      "Pantógrafo CNC",
      "Equipamentos e Máquinas Especiais"
    ],
    "tags": [
      "q-071",
      "queima a laser",
      "laser bridge",
      "corte a laser",
      "aplique",
      "selamento",
      "tecnologia industrial",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SEIT ELETTRONICA. Bridge Laser Systems for Multi-Head Embroidery Machines Manual. Valdagno, 2022.",
      "ARTRELADOS. O Futuro do Bordado: Integração Laser, Corte Inteligente e Automação de Alta Performance. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-072-quociente-de-aspecto-e-redimensionamento-proporcional-de-matrizes",
    "code": "Q-072",
    "term": "Quociente de Aspecto (Aspect Ratio) e Redimensionamento Proporcional de Matrizes (Design Aspect Ratio & Proportional Stitch Scaling)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da matemática analítica e geometria euclidiana (relação entre largura e altura) aplicada à computação gráfica vetorial e CAD/CAM têxtil.",
    "summary": "Regra matemática de manter a proporção entre largura e altura ao alterar o tamanho de uma matriz sem deformar o desenho.",
    "definition": "O Quociente de Aspecto (Aspect Ratio, Proporção X:Y e Redimensionamento Proporcional Paramétrico) é a relação matemática invariante entre a largura (eixo horizontal X) e a altura (eixo vertical Y) de um desenho ou logotipo digital de bordado. Ao redimensionar uma matriz no software ou no painel da máquina, a ativação do 'Cadeado de Proporção' (Aspect Ratio Lock) garante que qualquer alteração de escala percentual ou milimétrica seja aplicada uniformemente em ambos os eixos, prevenindo aberrações geométricas graves (como círculos transformados em elipses ovais ou fontes tipográficas esticadas/achatadas) e permitindo que o motor de processamento recalcule a densidade e o número total de pontos de forma consistente.",
    "technicalDetails": "Fórmula geométrica: Razão de Aspecto = Largura (X) / Altura (Y). Limite seguro de redimensionamento em arquivos compilados (.DST/.PES) sem regeneração de pontos: ± 10% a 15%. Em arquivos nativos editáveis (.EMB/.JAN): 50% a 200% com recálculo automático de densidade.",
    "howItWorks": [
      "1. A bordadeira abre a matriz de um logotipo de brasão redondo que mede 100 mm x 100 mm (proporção 1:1).",
      "2. A cliente solicita que o bordado seja reduzido para caber no bolso pequeno de uma camisa com 65 mm de largura.",
      "3. A programadora ativa o ícone de 'Cadeado Fechado' (Lock Proportions) na barra de ferramentas do software.",
      "4. Digita '65 mm' no campo de largura X; o software calcula instantaneamente a altura Y para exatamente '65 mm'.",
      "5. O programa recalcula as colunas de ponto cheio e tatami, reduzindo o número total de pontos de 12.000 para 8.200 sem empilhar linhas.",
      "6. A matriz mantém o formato perfeitamente circular e a densidade macia ideal para costura.",
      "7. A peça é bordada no bolso da camisa com alinhamento e proporções impecáveis."
    ],
    "beginnerExplanation": "É o botãozinho do 'cadeadinho' no seu programa de bordados que faz o desenho diminuir ou aumentar sem ficar esticado feito uma linguiça ou amassado feito uma panqueca! Quando você mexe na largura, ele ajusta a altura sozinho na mesma proporção para o desenho continuar lindo e perfeito!",
    "applications": [
      "Redimensionamento correto de monogramas e nomes para toalhas de diferentes tamanhos (banho, rosto e lavabo)",
      "Adaptação de logotipos corporativos para peito de camisas polo (8 a 10 cm) e costas de jaquetas (25 a 30 cm)",
      "Preservação da identidade visual e regras de marcas registradas de empresas e clientes",
      "Recálculo balanceado de pontos ao converter matrizes para diferentes bastidores"
    ],
    "commonErrors": [
      "❌ Destravar o cadeado e alterar apenas a largura do desenho, deixando letras gordas e círculos completamente deformados",
      "❌ Reduzir um arquivo de pontos (.PES/.DST) em mais de 30% sem recalcular os pontos, criando uma 'massa densa de linha' que quebra agulhas",
      "❌ Ampliar muito uma matriz sem aumentar a quantidade de pontos, deixando vãos brancos de tecido aparecendo por baixo"
    ],
    "troubleshootingTips": [
      "Mantenha sempre o cadeado de proporção travado (Aspect Ratio Lock) a menos que você queira intencionalmente esticar um elemento decorativo",
      "Ao alterar o tamanho de arquivos prontos (.PES ou .DST), limite a mudança a no máximo 10% para mais ou para menos",
      "Se precisar mudar o tamanho de um bordado em mais de 20%, utilize sempre o arquivo original editável (.EMB ou matriz nativa) para recalcular os pontos"
    ],
    "dicaArtrelados": "Nunca entregue um logotipo corporativo deformado para um cliente! As empresas são muito exigentes com a identidade da marca delas; usar o redimensionamento proporcional garante que o logotipo fique exatamente como o cliente desenhou!",
    "voceSabia": "O conceito de proporção harmônica ideal remonta à Grécia Antiga com a famosa 'Proporção Áurea' (Número de Ouro Phi = 1,618), utilizada na arquitetura do Partenon e hoje aplicada na programação de brasões de alta-costura!",
    "practicalExercise": "No seu programa de bordado, pegue um círculo: experimente diminuir o tamanho dele com o cadeado travado (ele continuará um círculo perfeito); depois destrave o cadeado e puxe só para o lado e veja como ele vira um ovo deformado!",
    "quickSummary": "Manutenção da proporção exata entre largura e altura ao alterar o tamanho de uma matriz sem deformar o desenho.",
    "relatedTerms": [
      "Redimensionamento de Matriz",
      "Densidade de Ponto (Stitch Density)",
      "Software de Digitalização",
      "Programação de Bordado"
    ],
    "tags": [
      "q-072",
      "quociente de aspecto",
      "aspect ratio",
      "proporcao",
      "redimensionamento",
      "tamanho de matriz",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. EmbroideryStudio e4 Elements: Geometric Transformations, Stitch Processor & Aspect Ratio. Sydney, 2023.",
      "ARTRELADOS. Edição e Ajuste de Matrizes no Computador: Redimensionamento Perfeito sem Perda de Qualidade. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-073-quimica-de-tingimento-e-fixacao-de-cores-em-fios-de-poliester",
    "code": "Q-073",
    "term": "Química de Tingimento e Fixação de Cores em Fios de Poliéster (Trilobal Polyester Dyeing Chemistry & Colorfastness to Bleach)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Insumos e Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da engenharia química têxtil, termofixação de polímeros sintéticos (PET) e síntese de corantes dispersos na Alemanha e Japão no século XX.",
    "summary": "Processo químico de tingimento a 130 °C que torna as linhas de poliéster 100% resistentes a cloro, alvejante e lavagens.",
    "definition": "A Química de Tingimento em Alta Pressão e Solidez de Cor em Fios de Poliéster Trilobal (High-Temperature Disperse Dyeing Chemistry & Bleach Colorfastness in Trilobal Polyester) é o processo físico-químico industrial de coloração dos filamentos contínuos de tereftalato de polietileno (PET). O tingimento é realizado em autoclaves industriais a 130 °C e sob 3 atmosferas de pressão, onde corantes dispersos não-iônicos penetram na matriz amorfa do polímero previamente expandida pelo calor. Com o resfriamento controlado, as moléculas de corante ficam permanentemente aprisionadas dentro da estrutura cristalina da fibra, conferindo às linhas de poliéster resistência excepcional (Nota 5 na escala de cinzas) contra alvejantes com cloro (hipoclorito de sódio), lavagens hospitalares a 95 °C e radiação solar.",
    "technicalDetails": "Temperatura de fixação termofusível: 130 °C a 135 °C. Solidez à luz (ISO 105-B02): Grau 6 a 8 (Excelente). Solidez ao alvejamento com cloro (ISO 105-N01): Grau 4 a 5 (Sem desbotamento perceptível).",
    "howItWorks": [
      "1. Os filamentos de poliéster virgem 100% brutos com seção transversal trilobal são enrolados em bobinas perfuradas de aço inox.",
      "2. As bobinas são inseridas na autoclave industrial de tingimento selada a vácuo.",
      "3. O licor de tingimento com corantes dispersos micro-moídos é aquecido a 130 °C sob 3 bar de pressão.",
      "4. O calor extremo dilata os poros microscópicos do polímero de poliéster.",
      "5. As partículas de corante penetram profundamente no núcleo de cada filamento.",
      "6. A autoclave é resfriada rapidamente e passa por banho de redução alcalina que remove qualquer resíduo superficial de corante.",
      "7. O fio é seco e lubrificado, resultando em uma linha ultra brilhante que nunca solta tinta nem desbota com cândida."
    ],
    "beginnerExplanation": "É a mágica da fábrica que tinge a linha de poliéster em caldeirões super quentes a 130 graus de temperatura! A cor entra tão fundo dentro do plástico da linha que você pode lavar a toalha bordada com água sanitária, cloro e sabão forte que a linha continua brilhante, linda e sem manchar o tecido branco!",
    "applications": [
      "Bordados em uniformes industriais, hospitalares e roupas de chefs de cozinha lavadas com alvejante pesado",
      "Toalhas de banho e enxovais de hotéis submetidos a lavanderias industriais agressivas",
      "Roupas de banho, biquínis e sungas expostos a água com cloro de piscinas e sal do mar",
      "Enxovais de bebês que passam por lavagens frequentes com sabão e tira-manchas"
    ],
    "commonErrors": [
      "❌ Confundir linha de Viscose/Rayon (que desbota com água sanitária) com linha de Poliéster em uniformes que usam cloro",
      "❌ Passar ferro fervendo (acima de 180 °C) direto sobre o bordado sem um paninho protetor",
      "❌ Comprar linhas de marcas piratas ou sem procedência tingidas na superfície que soltam tinta no tecido branco na primeira lavagem"
    ],
    "troubleshootingTips": [
      "Para toalhas de banho brancas, uniformes de médicos e roupas de praia, use sempre linhas 100% Poliéster Trilobal",
      "Se for usar linha de Viscose/Rayon pela maciez, oriente o cliente na etiqueta a NÃO utilizar produtos com cloro ou alvejantes",
      "Opte sempre por marcas conceituadas de linhas (como Madeira Polyneon, Setta, Lumina, Isacord) com certificado Oeko-Tex de tingimento seguro"
    ],
    "dicaArtrelados": "A linha de poliéster é a campeã absoluta e a queridinha dos ateliês por causa dessa resistência química imbatível! Você borda a toalha da cliente com tranquilidade total sabendo que ela pode lavar até com cloro que a cor vai continuar reluzindo como nova!",
    "voceSabia": "Ao contrário das fibras naturais de algodão que absorvem corante como uma esponja, o poliéster é um plástico hidrofóbico (repele água) e não aceita nenhum corante comum; foi necessária a invenção da química de 'corantes dispersos' na década de 1950 para permitir que tivéssemos linhas coloridas de poliéster!",
    "practicalExercise": "Pegue um pedaço de linha de poliéster de boa qualidade e pingue uma gotinha de água sanitária (cloro) puro em cima: espere 5 minutos e veja como ela continua com a cor 100% intacta e reluzente!",
    "quickSummary": "Processo de tingimento térmico a 130 °C que torna as linhas de poliéster imunes a desbotamentos por cloro e alvejantes.",
    "relatedTerms": [
      "Linha de Poliéster 120 (Polyester Thread)",
      "Linha de Viscose / Rayon",
      "Insumos e Acessórios",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-073",
      "quimica de tingimento",
      "solidez de cor",
      "poliester trilobal",
      "resistencia ao cloro",
      "alvejante",
      "insumos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SOCIETY OF DYERS AND COLOURISTS. The Chemistry of Synthetic Dyes and High Temperature Polyester Dyeing. Bradford, 2022.",
      "ARTRELADOS. Guia de Fios e Insumos Têxteis: Por que o Poliéster Trilobal é o Rei da Durabilidade. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-074-quota-diaria-de-producao-e-calculo-de-capacidade-instalada",
    "code": "Q-074",
    "term": "Quota Diária de Produção e Cálculo de Capacidade Instalada do Ateliê (Daily Production Quota & Installed Machine Capacity Analysis)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da engenharia de produção e planejamento e controle da produção (PCP) adaptado para ateliês de bordados personalizados.",
    "summary": "Fórmula prática para calcular a capacidade real de produção diária da sua máquina e cumprir 100% dos prazos.",
    "definition": "A Quota Diária de Produção, Eficiência Global de Equipamentos (OEE - Overall Equipment Effectiveness) e Cálculo de Capacidade Instalada no Ateliê (Embroidery Production Quota & Installed Output Capacity Modeling) é a metodologia matemática de gestão fabril utilizada para determinar a quantidade máxima real de pontos e peças prontas que um parque de máquinas consegue entregar por dia de trabalho. O cálculo considera a velocidade média operacional (RPM), o tempo real de arco de costura (Stitch Run Time), as pausas inevitáveis de bastidoramento, trocas de cores e acabamentos pós-bordado (fator de eficiência típico entre 60% e 75%), garantindo prazos de entrega 100% pontuais e evitando sobrecargas de trabalho.",
    "technicalDetails": "Fórmula de capacidade real diária de pontos: Capacidade = (Horas de Turno × 60 min × RPM Médio) × Eficiência (0,65). Exemplo: 8h × 60 × 750 RPM × 0,65 = 234.000 pontos reais/dia por cabeçote.",
    "howItWorks": [
      "1. A bordadeira define sua jornada diária de trabalho (ex: 8 horas por dia) e a velocidade padrão da máquina (750 RPM).",
      "2. Aplica o fator de eficiência de 65% (descontando o tempo de prender o bastidor, trocar linhas e atender mensagens).",
      "3. Descobre que a capacidade real de produção da sua máquina é de cerca de 234.000 pontos por dia.",
      "4. Um cliente chega pedindo 50 toalhas de rosto com um brasão de 15.000 pontos (total de 750.000 pontos).",
      "5. A artesã divide o total de pontos da encomenda pela capacidade diária (750.000 / 234.000 = 3,2 dias úteis de máquina).",
      "6. Adiciona 1 dia de margem de segurança para embalagem e acabamento e passa o prazo com certeza absoluta: 'Entrego em 5 dias úteis!'.",
      "7. A cliente recebe o pedido no dia combinado e o ateliê ganha fama de pontualidade e profissionalismo impecável."
    ],
    "beginnerExplanation": "É a continha simples que você faz para saber exatamente quantos bordados a sua máquina consegue fazer em um dia sem você ficar sobrecarregada ou prometer prazos malucos que não consegue cumprir! Saber a sua capacidade faz você nunca mais atrasar uma entrega e trabalhar com tranquilidade e paz de espírito!",
    "applications": [
      "Cálculo exato de prazos de entrega para encomendas grandes de empresas e escolas",
      "Planejamento de turnos de produção em datas comemorativas (Dia das Mães, Natal e Volta às Aulas)",
      "Decisão segura sobre a hora certa de comprar uma segunda máquina de bordar",
      "Precificação correta e definição de metas financeiras mensais de faturamento"
    ],
    "commonErrors": [
      "❌ Achar que a máquina vai bordar 100% dos minutos do dia sem paradas, esquecendo o tempo de trocar bastidor e cortar linhas",
      "❌ Aceitar encomendas urgentes gigantescas sem fazer a conta de pontos, tendo que virar a noite sem dormir para entregar",
      "❌ Não contabilizar o tempo de atendimento ao cliente e embalagem das peças"
    ],
    "troubleshootingTips": [
      "Use sempre o fator de 65% de eficiência real para máquinas de 1 cabeçote (ou seja, a máquina fica costurando de fato 5 horas a cada 8 horas de dia)",
      "Em encomendas grandes de empresas, utilize um bastidor extra para ir montando a próxima peça enquanto a máquina borda a atual",
      "Tenha um quadro de pedidos na parede com a meta de pontos do dia para acompanhar o progresso visualmente"
    ],
    "dicaArtrelados": "A pontualidade é o maior diferencial competitivo de um ateliê de sucesso! Quando você cumpre rigorosamente os prazos combinados, os clientes confiam de olhos fechados e nunca mais compram em outro lugar!",
    "voceSabia": "Nas grandes indústrias têxteis de vestuário e bonés, as metas diárias de produção (Quotas) são monitoradas em telas digitais em tempo real integradas à rede Wi-Fi das máquinas de bordar através de sistemas ERP de telemetria.",
    "practicalExercise": "Calcule a capacidade do seu ateliê hoje: multiplique as horas que você quer trabalhar por 28.000 pontos (para máquina a 750 RPM). Se você trabalha 4 horas por dia, sua capacidade diária é de cerca de 112.000 pontos!",
    "quickSummary": "Método de cálculo para descobrir a quantidade real de pontos que sua máquina produz por dia e garantir entregas no prazo.",
    "relatedTerms": [
      "Orçamento Precificado por Milheiro de Pontos e Custo Operacional",
      "Planilha de Ordem de Serviço (OS)",
      "Layout de Produção Contínua e Organização Modular",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-074",
      "quota de producao",
      "capacidade instalada",
      "gestao do atelie",
      "planejamento",
      "prazos de entrega",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Gestão e Lucratividade no Ateliê: Planejamento de Produção, Metas e Prazos Impecáveis. São Paulo, 2024.",
      "APICS. Production and Operations Management for Small Scale Apparel & Embroidery Industries. Chicago, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "q-081-q-factor-e-amortecimento-de-vibracao-estrutural-da-bancada",
    "code": "Q-081",
    "term": "Q-Factor e Amortecimento de Vibração Estrutural da Bancada (Chassis Resonance & Vibration Damping)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Quality Factor (fator Q de ressonância em sistemas oscilatórios) e do latim structura (armação sólida de apoio).",
    "summary": "Estabilidade mecânica e física de amortecimento da bancada de suporte da máquina para dissipação de harmônicas de vibração a 1.000 PPM, evitando perda de passos no pantógrafo e desvios de alinhamento.",
    "definition": "Q-Factor e Amortecimento de Vibração Estrutural da Bancada (Chassis Structural Resonance, High-Speed Vibration Damping & Pantograph Inertia Isolation) é o estudo e controle dos fenômenos vibracionais e de ressonância mecânica gerados pelas forças inerciais recíprocas da barra de agulha, estica-fio e eixos X/Y do pantógrafo em alta velocidade (750 a 1.200 PPM). Se o fator de qualidade (Q-Factor) de amortecimento da bancada for inadequado e a frequência de disparo da máquina coincidir com a frequência natural da estrutura, ocorre ressonância: a máquina vibra intensamente, gerando perda momentânea de micropassos nos servomotores, linhas de contorno (*Outlines*) deslocadas de 0,5 mm a 1,0 mm do preenchimento, ruído acústico elevado e fadiga prematura de rolamentos.",
    "technicalDetails": "Frequência fundamental de excitação a 900 PPM: 15 Hz (com harmônicas de 30 Hz e 60 Hz). Aceleração máxima do pantógrafo nos saltos: até 3G. Solução mecânica: Bancadas de aço tubular com peso estrutural > 40 kg, pés de borracha vulcanizada antivibração (coxins de elastômero Shore A 60-70) e nivelamento milimétrico por nível de bolha nos 4 apoios com desvio angular < 0,1°.",
    "construction": [
      "Chassi de aço tubular soldado de alta massa inercial ou perfil de alumínio estrutural pesado",
      "Pés niveladores rosqueados com sapatas de borracha vulcanizada antivibratória",
      "Plataforma de tampo em MDF de alta densidade (HDF) ou chapa de aço reforçada",
      "Calços de desacoplamento elastomérico entre o corpo da máquina e o tampo",
      "Travessas diagonais em 'X' para contenção de forças de cisalhamento lateral"
    ],
    "howItWorks": [
      "1. Uma bordadeira multiagulhas industrial acelera para 1.000 PPM durante um salto rápido de 12 mm no eixo X.",
      "2. A desaceleração brusca de 3G do pantógrafo transmite uma onda de choque mecânico para a carcaça da máquina.",
      "3. Em uma mesa bamba comum, a mesa balança para os lados, fazendo o bastidor vibrar enquanto a agulha desce.",
      "4. O ponto cai 0,8 mm fora do lugar: o contorno preto fica desalinhado e deixa uma falha branca feia.",
      "5. Ao instalar a máquina sobre uma bancada profissional pesada com sapatas de absorção elastomérica e travas em X niveladas, a vibração mecânica é dissipada em menos de 5 milissegundos.",
      "6. O chassi permanece imóvel como uma rocha.",
      "7. Os contornos fecham com precisão cirúrgica de 0,05 mm e o ruído do ateliê é reduzido pela metade."
    ],
    "mainTypes": [
      "Bancada Industrial de Aço Tubular Pesado com Pés Coxim Antivibração (Padrão ouro para máquinas multiagulhas)",
      "Mesa de Madeira Maciça Reforçada com Travamento em X (Para máquinas domésticas e semiprofissionais de ateliê)",
      "Bases Desacopladoras com Placas de Borracha de Alta Densidade (Para colocação sobre tampos de marcenaria existentes)"
    ],
    "characteristics": [
      "Contornos de matrizes perfeitamente alinhados com o preenchimento, sem frestas",
      "Redução drástica do barulho e zumbido de vibração no ambiente de trabalho",
      "Proteção das placas eletrônicas e encoders contra solavancos contínuos",
      "Aumento da vida útil dos rolamentos e correias dentadas da máquina"
    ],
    "limitations": [
      "Nunca instalar máquinas de bordar sobre mesinhas leves de plástico, mesas com rodízios sem trava ou móveis soltos",
      "Sempre conferir o nível de bolha após mudar a máquina de lugar no ateliê",
      "Não encostar a bancada diretamente na parede (manter folga de 10 cm para não transmitir vibração estrutural)"
    ],
    "numberingSystem": [
      "Nível de Amortecimento: Shore A 60 - 70",
      "Precisão de Nivelamento: < 0,1°",
      "Capacidade de Dissipação Harmônica: > 90% a 15 Hz"
    ],
    "advantages": [
      "✔ Garante que todos os contornos dos seus bordados fechem perfeitamente sem falhas",
      "✔ Deixa seu ateliê muito mais silencioso e agradável para trabalhar o dia todo",
      "✔ Evita quebras de peças internas caras da máquina causadas por trepidação"
    ],
    "commonErrors": [
      "❌ Colocar a máquina de bordar em cima de uma escrivaninha bamba que treme toda vez que a máquina borda",
      "❌ Deixar um dos pés da mesa suspenso no ar, fazendo a bancada mancar e vibrar em alta velocidade",
      "❌ Culpar a matriz pelo contorno torto quando na verdade é a mesa que está balançando"
    ],
    "voceSabia": "A tecnologia de amortecimento com elastômeros e coxins usada nas bancadas de máquinas de bordar industriais é exatamente a mesma engenharia empregada nos suportes de motores da indústria aeroespacial e de trens de alta velocidade!",
    "curiosidadeTecnica": "Quando o pantógrafo muda de direção a 1.000 PPM, a força dinâmica aplicada no chassi da máquina pode atingir até 4 vezes o peso da própria máquina se a bancada for flexível, enquanto em uma base rígida amortecida essa força é dissipada diretamente para o piso.",
    "dicaArtrelados": "Faça o **Teste do Copo d'Água do Ateliê Artrelados**: coloque um copo com água em cima da mesa ao lado da sua máquina enquanto ela borda a 800 PPM. Se a água formar ondas fortes ou o copo deslizar, sua bancada está vibrando demais! Reforce os pés com borrachas firmes ou encoste um reforço de madeira: seus contornos vão ficar infinitamente mais perfeitos!",
    "comparisonTable": {
      "headers": [
        "Tipo de Apoio",
        "Vibração Harmônica",
        "Alinhamento de Contorno",
        "Nível de Ruído no Ateliê"
      ],
      "rows": [
        [
          "Bancada Pesada com Coxim de Borracha",
          "Zero (dissipação total)",
          "Cirúrgico e perfeito (< 0,05 mm)",
          "Silencioso e abafado"
        ],
        [
          "Mesa Convencional Firme",
          "Moderada",
          "Bom (desvios raros < 0,2 mm)",
          "Médio"
        ],
        [
          "Mesa Leve / Bamba / com Rodinhas",
          "Altíssima (ressonância)",
          "Crítico (contornos escapam até 1,0 mm)",
          "Alto e com ruídos de impacto"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade estável até capacidade nominal",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Montagem da infraestrutura física de novos ateliês e fábricas de bordado",
      "Solução definitiva para máquinas industriais multiagulhas que perdem alinhamento de contorno",
      "Adequação de conforto acústico para ateliês residenciais e apartamentos",
      "Isolamento mecânico em pisos de madeira ou mezaninos industriais"
    ],
    "troubleshootingTips": [
      "Passe um nível de pedreiro em cima do tampo nos eixos horizontal e vertical e aperte os parafusos dos pés até zerar a bolha",
      "Coloque sapatas de borracha vulcanizada (tipo tapete de academia pesado) embaixo dos pés da mesa",
      "Aperte todos os parafusos da estrutura da bancada a cada 6 meses"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Placa de Agulha (Needle Plate) e Chapa de Ponto com Orifício Redondo",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-081",
      "q-factor",
      "vibracao",
      "bancada",
      "amortecimento",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "STRUCTURAL DYNAMICS IN TEXTILE MACHINERY: Vibration Damping, Q-Factor Analysis and Chassis Resonance. Stuttgart, 2021.",
      "PARRISH, Gail. Industrial Stability: Vibration Isolation, Dynamic Pantograph Forces and Precision Alignment. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque uma moeda em pé sobre a bancada ao lado da máquina. Ligue o bordado a 750 PPM: se a moeda permanecer em pé sem cair, sua bancada tem amortecimento estrutural de excelência mundial!",
    "quickSummary": "O estudo de manter a mesa da máquina 100% firme e sem trepidação para os contornos não ficarem tortos.",
    "beginnerExplanation": "Se a mesa onde a sua máquina está apoiada for fraca ou ficar balançando quando ela borda rápido, a agulha vai bater fora do lugar e o contorno preto do desenho vai ficar desencontrado! Uma mesa bem pesada e com pezinhos de borracha deixa a máquina firme como uma rocha e seus bordados saem perfeitos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-082-quadricula-de-densidade-e-mapa-de-calor-de-pontos-no-software",
    "code": "Q-082",
    "term": "Quadrícula de Densidade e Mapa de Calor de Pontos no Software (Density Grid & Stitch Heatmap Analysis)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quadricula (pequeno quadrado de medição gráfica) e do inglês stitch heatmap (mapa térmico visual de concentração).",
    "summary": "Recurso avançado de softwares de digitalização (Wilcom, Embird, Hatch) que plota uma malha cromática indicando zonas perigosas de acúmulo excessivo de pontos e risco de quebra de agulha antes de ir para a máquina.",
    "definition": "Quadrícula de Densidade e Mapa de Calor de Pontos no Software (Stitch Density Grid, Thermal Overlay Mapping & Over-Stitching Visual Diagnostic) é a ferramenta de auditoria visual integrada aos ambientes profissionais de CAD/CAM de bordado computadorizado. O algoritmo divide a matriz em microcélulas ortogonais (ex: 1 mm x 1 mm) e calcula a quantidade exata de penetrações de agulha que ocorrerão em cada célula, colorindo a tela em tempo real como um mapa térmico: verde/azul para densidades seguras (1 a 3 pontos/mm²), amarelo para densidades médias e vermelho escarlate flamejante para zonas críticas hiperdensas (> 6 a 8 pontos/mm²), alertando o programador sobre pontos em nó, quebra iminente de agulha, picote de tecido e dureza excessiva no bordado.",
    "technicalDetails": "Resolução típica da quadrícula: células de 0,5 mm a 1,0 mm. Limiar de segurança: Verde = 0.38 - 0.45 mm de espaçamento; Amarelo = 0.30 - 0.35 mm; Vermelho de Alerta = < 0.25 mm ou > 7 penetrações no mesmo raio de 1 mm. Ferramenta de autocorreção: Filtro de Eliminação de Pontos Curtos (*Short Stitch Filter*) e Limpeza de Sobreposições (*Overlap Removal*).",
    "construction": [
      "Algoritmo matemático de contagem espacial de coordenadas de penetração X/Y",
      "Gradiente de cores espectral (Azul/Verde -> Amarelo -> Laranja -> Vermelho -> Magenta)",
      "Controle deslizante de sensibilidade de limiar de densidade no software",
      "Filtro inteligente de exclusão de pontos de amarração e arremate da contagem de falso-positivo",
      "Painel numérico com contagem de pontos críticos e porcentagem de risco estrutural"
    ],
    "howItWorks": [
      "1. O programador finaliza a digitalização de um brasão complexo com 45.000 pontos contendo letras pequenas sobrepostas a um fundo tatami denso.",
      "2. Antes de exportar para a máquina, clica no botão 'Visualizar Mapa de Densidade / Heatmap'.",
      "3. O software converte a tela em uma visualização de calor colorida.",
      "4. Nas junções das letras com o escudo, surge uma mancha vermelha brilhante com 11 pontos por milímetro quadrado.",
      "5. O programador sabe que se bordar assim, a agulha vai quebrar ou vai furar o tecido.",
      "6. Ativa a ferramenta 'Remover Sobreposições Ocultas' e 'Filtro de Pontos Curtos': o software recorta o tatami embaixo das letras automaticamente.",
      "7. A mancha vermelha desaparece, virando verde saudável; a matriz fica 20% mais leve e roda na máquina com 100% de suavidade."
    ],
    "mainTypes": [
      "Mapa de Calor Contínuo em Gradiente Espectral (Visualização estilo termográfica 3D)",
      "Quadrícula com Marcador de Células Críticas (Quadradinhos pontilhados destacando nós pontuais)",
      "Gráfico de Perfil de Espessura Estimada (Calcula a altura em milímetros da massa de linha acumulada)"
    ],
    "characteristics": [
      "Detecção instantânea de erros de programação invisíveis no modo de visualização 3D comum",
      "Prevenção de quebras de agulha, furos no tecido e matrizes duras tipo 'tábua'",
      "Redução de 15% a 25% na contagem desnecessária de pontos sem perder cobertura",
      "Aceleração da velocidade de produção e economia de linha no ateliê"
    ],
    "limitations": [
      "Áreas de arremate e pontos de amarração naturalmente apresentarão pontos amarelos/laranja (não devem ser removidos)",
      "Em bordados 3D com EVA, densidades mais altas são intencionais e normais",
      "A ferramenta analisa a concentração geométrica, devendo o programador avaliar o tipo de tecido real"
    ],
    "numberingSystem": [
      "Zona Segura: < 3 pontos / mm² (Verde)",
      "Zona de Atenção: 4 a 6 pontos / mm² (Amarelo)",
      "Zona Crítica: > 7 pontos / mm² (Vermelho Escarlate)"
    ],
    "advantages": [
      "✔ Nunca mais envie para a máquina uma matriz que quebra agulhas ou corta o pano",
      "✔ Deixa seus bordados muito mais macios, leves e gostosos de usar no corpo",
      "✔ Economiza milhares de pontos e faz a máquina bordar muito mais rápido"
    ],
    "commonErrors": [
      "❌ Borda matrizes baixadas da internet sem passar pelo mapa de densidade para checar sobreposições",
      "❌ Deixar preenchimento tatami inteiro por baixo de letras cheias grossas, criando uma camada de chumbo",
      "❌ Ignorar os alertas vermelhos do software e quebrar a agulha logo nos primeiros 2 minutos de bordado"
    ],
    "voceSabia": "A tecnologia de mapas de calor (*Heatmaps*) usada nos softwares modernos de bordado foi inspirada nos sistemas de imagem infravermelha da medicina diagnóstica e da meteorologia de satélites nos anos 2000!",
    "curiosidadeTecnica": "Quando uma matriz acumula mais de 8 penetrações de agulha em uma área circular de 1 mm de diâmetro, o tecido perde mais de 80% de sua integridade estrutural, comportando-se exatamente como o picotado destacável de um talão de cheques.",
    "dicaArtrelados": "Antes de passar qualquer matriz para o pen drive, faça uma **Auditoria de Mapa de Calor**: abra a visualização de densidade no seu software de edição! Se você enxergar manchas vermelhas fortes, aplique o comando de *Remover Sobreposições* ou abra um pouquinho o espaçamento dos pontos. Sua máquina vai bordar macio, sem estalos e sem perigo de furar a peça do cliente!",
    "comparisonTable": {
      "headers": [
        "Zona do Mapa",
        "Concentração de Pontos",
        "Sensação no Tecido",
        "Risco Operacional"
      ],
      "rows": [
        [
          "Verde / Azul",
          "1 a 3 pontos/mm²",
          "Macio, flexível e leve",
          "Zero (perfeita fluidez)"
        ],
        [
          "Amarelo / Laranja",
          "4 a 6 pontos/mm²",
          "Estruturado e firme",
          "Baixo a moderado"
        ],
        [
          "Vermelho Escarlate",
          "> 7 pontos/mm²",
          "Duro como tábua / Armadura",
          "Crítico (quebra agulha e fura tecido)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Espaçamento médio entre 0.38 e 0.42 mm"
    },
    "applications": [
      "Auditoria de qualidade em matrizes complexas antes de iniciar produções em série",
      "Otimização de matrizes compradas na internet que vieram duras ou pesadas",
      "Adequação de logotipos densos para bordar em tecidos finos e malhas delicadas",
      "Redução de custos operacionais e tempo de máquina em fábricas de confecção"
    ],
    "troubleshootingTips": [
      "Se o mapa mostrar vermelho nas letras, use a ferramenta 'Compensação de Sobreposição' para vazar o fundo",
      "Ative o filtro automático de 'Remover Pontos Menores que 0,3 mm'",
      "Ajuste a densidade do tatami de 0,35 mm para 0,42 mm se for bordar em malha piquet ou algodão leve"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Ponto Tatami (Fill Stitch)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Mecânica & Manutenção"
    ],
    "tags": [
      "q-082",
      "mapa de calor",
      "densidade",
      "heatmap",
      "software",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO: Advanced Density Mapping, Heatmap Diagnostics and Overlap Elimination. Sydney, 2022.",
      "PARRISH, Gail. CAD/CAM Diagnostics in Machine Embroidery: Spatial Stitch Clustering and Heatmap Analysis. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um arquivo de bordado qualquer no seu programa de computador. Ative a visão de densidade ou mapa de calor. Procure por pontos vermelhos e veja como ao selecionar o objeto de baixo e vazar a parte coberta, a cor vermelha vira verde na hora!",
    "quickSummary": "O recurso no programa de computador que mostra com cores quentes onde o bordado está grosso demais e perigoso.",
    "beginnerExplanation": "O mapa de calor no computador funciona como um raio-X da sua matriz: ele pinta de verde as partes boas e de vermelho brilhante os lugares onde os pontos estão muito amontoados. Assim, você conserta antes de colocar na máquina, evitando que a agulha quebre ou fure a roupa do seu cliente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-083-quociente-de-compressao-de-espuma-eva-em-bordado-3d",
    "code": "Q-083",
    "term": "Quociente de Compressão de Espuma EVA em Bordado 3D (3D Foam Compression Ratio & Density Calculation)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quotiens (relação numérica proporcional) e do inglês 3D puff embroidery foam (espuma microcelular de etileno vinil acetato).",
    "summary": "Cálculo matemático e parametrização de densidade ultradensa (0,18 a 0,22 mm) e quociente de deformação elástica do EVA para efeito de alto relevo escultural perfeito em bonés e jaquetas.",
    "definition": "Quociente de Compressão de Espuma EVA em Bordado 3D (3D Puff Embroidery Foam Compression Ratio, Volumetric Elasticity & High-Density Perforation Dynamics) é o cálculo técnico que relaciona a espessura original da placa de EVA (2 mm, 3 mm ou 4 mm), sua dureza Shore (geralmente Shore A 20 a 35) e o fator de adensamento dos pontos cheios (*Satin*) necessários para cortar perfeitamente as laterais da espuma por cisalhamento mecânico da agulha enquanto mantém o núcleo inflado em relevo tridimensional escultural. Para cobrir e guilhotinar o EVA sem deixar fiapos laterais e sem estourar as linhas, a densidade do ponto cheio deve ser ajustada para um quociente de 180% a 220% da densidade convencional (espaçamento reduzido para 0,18 mm a 0,22 mm), combinado com tampões de fechamento nas pontas (*Caps*) e arremates perfurantes prévios.",
    "technicalDetails": "Espessuras padrão de EVA: 2,0 mm, 2,5 mm, 3,0 mm e 4,0 mm. Dureza ideal: 25 a 30 Shore A (espuma de célula fechada termo-destacável). Densidade recomendada: 0,18 mm a 0,22 mm (contra 0,40 mm padrão). Comprimento mínimo de ponto cheio: 3,0 mm / Comprimento máximo: 9,0 mm (comprimentos maiores perdem a força de compressão e deixam o relevo frouxo). Tipo de linha recomendado: Poliéster 40wt de alta tenacidade lubrificada.",
    "construction": [
      "Placa de espuma EVA microcelular especial para bordado 3D na cor correspondente à linha",
      "Matriz com programação vetorial dedicada com tampas de extremidade (Caps) e linha de corte prévia",
      "Agulha de ponta redonda reforçada calibre 80/12 ou 90/14 SAN 1 com acabamento de titânio",
      "Soprador térmico de ar quente (Heat Gun) para retração dos microresíduos finais de espuma",
      "Pinça de precisão para remoção de resíduos nos cantos e vértices agudos"
    ],
    "howItWorks": [
      "1. A máquina borda a linha de posicionamento (*Placement*) indicando onde o EVA será colocado.",
      "2. A bordadeira apoia uma placa de EVA 3 mm da mesma cor da linha sobre a área e prende com fita crepe nas bordas.",
      "3. A máquina executa pontos de corte perfurantes nas pontas das letras para fechar os topos (*End Caps*).",
      "4. Em seguida, inicia o ponto cheio com espaçamento hiperdenso de 0,20 mm.",
      "5. A cada penetração dupla da agulha nas laterais, a lâmina da agulha e a tensão da linha fatiam o EVA como uma tesoura microscópica.",
      "6. A parte central do EVA permanece inflada em alto relevo com 3 mm de altura e acabamento acetinado exuberante.",
      "7. Ao final, a bordadeira puxa o excesso de EVA: ele se destaca limpo e perfeitamente contornado.",
      "8. Um rápido jato de soprador térmico a 120°C faz quaisquer microfiapos invisíveis retraírem instantaneamente para dentro do bordado."
    ],
    "mainTypes": [
      "Bordado 3D Tradicional Monocromático (Letras e brasões em bonés estruturados com EVA de 2 a 3 mm)",
      "Bordado 3D Híbrido (Combinação de base plana em tatami com letras em alto relevo 3D por cima)",
      "Bordado 3D com EVA Bicolor (Uso de espuma de cor contrastante com pontos abertos intencionais para efeito óptico)"
    ],
    "characteristics": [
      "Relevo tridimensional imponente e acabamento de altíssimo luxo profissional",
      "Letras com laterais perfeitamente cobertas e sem pontas de espuma aparecendo",
      "Excelente durabilidade e resistência à lavagem mantendo a forma tridimensional",
      "Visual idêntico aos bonés das maiores ligas esportivas mundiais (MLB, NBA, NFL)"
    ],
    "limitations": [
      "Nunca tentar fazer bordado 3D com matriz comum de ponto plano (vai amassar o EVA e deixar as pontas abertas)",
      "Não usar densidades menores que 0,16 mm (pode cortar o tecido de baixo como uma navalha)",
      "Sempre usar EVA na cor exata da linha de bordar (ex: linha preta com EVA preto, linha branca com EVA branco)"
    ],
    "numberingSystem": [
      "Espaçamento de Ponto: 0,18 mm a 0,22 mm",
      "Dureza da Espuma: 25 a 30 Shore A",
      "Quociente de Densidade: 200% da densidade padrão"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido às suas peças, permitindo cobrar 3x a 5x mais por bordado",
      "✔ Permite produzir bonés e jaquetas com acabamento digno de marcas internacionais famosas",
      "✔ Acabamento limpo que se solta sozinho sem exigir trabalho demorado de corte manual"
    ],
    "commonErrors": [
      "❌ Usar EVA branco por baixo de linha preta ou vermelha (qualquer milímetro que aparecer fica horrível)",
      "❌ Borda sem fechar as pontas das letras com 'Caps', deixando o miolo da espuma de fora aparecendo",
      "❌ Usar ferro de passar comum para tentar tirar os fiapos em vez de soprador de ar quente, amassando todo o relevo"
    ],
    "voceSabia": "A técnica de bordado 3D em alto relevo com espuma EVA foi criada no início dos anos 1990 no Japão e se tornou uma febre global ao ser adotada nos bonés oficiais dos New York Yankees pela New Era!",
    "curiosidadeTecnica": "Durante a formação do ponto cheio sobre o EVA a 0,20 mm de densidade, a pressão exercida pelo fio tensionado comprime o EVA sob o ponto a menos de 10% de sua espessura original nas bordas, criando o efeito de bisel e corte mecânico instantâneo.",
    "dicaArtrelados": "O segredo de ouro do **Bordado 3D no Ateliê Artrelados**: **1.** Use sempre o EVA da mesma cor da linha. **2.** No software, aumente a densidade do ponto cheio para 0,20 mm e ative as 'tampinhas' (Caps) nas pontas das letras. **3.** Quando tirar o excesso de EVA com a mão, passe um **soprador de ar quente (ou secador de cabelo bem quente no máximo)** a uns 10 cm do bordado por 5 segundinhos: o calor faz os fiapinhos de EVA encolherem e sumirem para dentro do bordado como mágica!",
    "comparisonTable": {
      "headers": [
        "Parâmetro Técnico",
        "Bordado 3D com EVA",
        "Bordado Plano Comum"
      ],
      "rows": [
        [
          "Espaçamento de Ponto Cheio",
          "0,18 mm a 0,22 mm (super denso)",
          "0,38 mm a 0,45 mm (padrão)"
        ],
        [
          "Fechamento de Pontas (Caps)",
          "Obrigatório em 100% das extremidades",
          "Opcional / Desnecessário"
        ],
        [
          "Agulha Recomendada",
          "80/12 ou 90/14 ponta bola firme",
          "75/11 padrão"
        ],
        [
          "Acabamento Pós-Bordado",
          "Destaque manual + Soprador térmico",
          "Limpeza simples de fios de arremate"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 750 PPM",
      "needleType": "80/12 ou 90/14 SAN 1",
      "stabilizer": "Entretela rasgadeira grossa ou resinada firme",
      "threadTension": "Ligeiramente mais solta no topo (100 gf)",
      "density": "0.20 mm constante"
    },
    "applications": [
      "Bonés estruturados tipo 'Snapback' e 'Trucker' com monogramas de alto relevo",
      "Jaquetas esportivas, moletons universitários e vestuário de streetwear de luxo",
      "Brasões institucionais, emblemas táticos e logomarcas automotivas",
      "Bolsas de viagem e mochilas estruturadas de alta resistência"
    ],
    "troubleshootingTips": [
      "Se ficarem fiapos de EVA aparecendo nas laterais, diminua o espaçamento para 0,18 mm no software",
      "Se a linha de cima estiver quebrando, afrouxe ligeiramente a tensão superior e use agulha calibre 90/14",
      "Coloque uma folha plástica de filme solúvel bem fino por cima do EVA se a linha estiver afundando demais"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Ponto Cheio (Satin Stitch)",
      "Digitalização & Software",
      "Linha de Bordar 40wt",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-083",
      "bordado 3d",
      "eva",
      "espuma 3d",
      "puff",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "3D PUFF EMBROIDERY MANUAL: Foam Compression Physics, Vector Digitizing & Thermal Cleanup. Nagoya, 2021.",
      "PARRISH, Gail. High-Density Dimensional Embroidery: 3D Foam Dynamics and Clean-Tear Edge Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Programe uma letra 'A' com ponto cheio a 0,20 mm e tampas nas pontas. Coloque um pedaço de EVA 3 mm no bastidor e borde a 650 PPM. Puxe a espuma com a mão e aplique o ar quente do secador: encante-se com a perfeição e a altura do relevo!",
    "quickSummary": "O cálculo exato de pontos e espessura do EVA para fazer bordados em alto relevo 3D estilo boné importado.",
    "beginnerExplanation": "O bordado 3D é aquele bordado altinho e fofinho muito famoso em bonés de marcas famosas. Ele é feito colocando uma plaquinha de espuma EVA por baixo da agulha; a máquina borda com pontos bem juntinhos para cortar a beirada da espuma e deixar o meio gordinho e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-084-quadro-eletrico-dedicado-e-protecao-contra-surto-de-tensao",
    "code": "Q-084",
    "term": "Quadro Elétrico Dedicado e Proteção contra Surto de Tensão (Electrical Board & Surge Protection Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadrum (painel elétrico modular) e do francês surtension (pico de voltagem destrutivo na rede).",
    "summary": "Infraestrutura de proteção elétrica essencial com haste de aterramento dedicada (< 5 ohms), Dispositivo Protetor de Surtos (DPS), disjuntor termomagnético exclusivo e nobreak senoidal puro para salvaguardar as placas lógicas e servomotores da máquina de bordar.",
    "definition": "Quadro Elétrico Dedicado e Proteção contra Surto de Tensão (Dedicated Electrical Subpanel, Industrial Surge Protective Devices - SPD & Pure Sinewave Power Conditioning) é o conjunto de instalações e equipamentos de condicionamento elétrico obrigatórios para proteger o sistema eletroeletrônico de máquinas de bordar computadorizadas. As placas de controle principal (Mainboard), placas inversoras de frequência dos servomotores e telas sensíveis ao toque operam com microprocessadores de alta velocidade extremamente sensíveis a transientes de tensão causados por raios, partidas de motores de ar-condicionado ou oscilações da concessionária. A ausência de um circuito dedicado com DPS Classe II, aterramento TN-S rigoroso e No-Break Senoidal resulta em queima de placas de circuito, travamento do sistema no meio de bordados longos e perda irreversível de matrizes na memória interna.",
    "technicalDetails": "Resistência máxima do aterramento: < 5 a 10 Ohms com haste de cobre cobreado 2,4 m. DPS recomendado: Classe II (In 20kA / Imax 45kA, tensão de disparo ~275V). Disjuntor: Bipolar/Unipolar Curva C dimensionado para a carga da máquina. No-Break: Topologia Online Dupla Conversão ou Linha Interativa com Onda Senoidal Pura (THD < 3%). Filtro de Linha: EMI/RFI com varistores de óxido metálico (MOV).",
    "construction": [
      "Quadro de distribuição elétrica secundário em termoplástico antichama",
      "Dispositivo de Proteção contra Surtos (DPS) com sinalizador visual de vida útil",
      "Disjuntor termomagnético Curva C calibrado para a potência nominal da máquina",
      "Barramento de terra de cobre maciço conectado diretamente à malha de aterramento externa",
      "No-break senoidal puro com autonomia de 15 a 30 minutos para finalização segura do ciclo"
    ],
    "howItWorks": [
      "1. A máquina de bordar está executando um bordado delicado de 60.000 pontos em um vestido de noiva.",
      "2. Uma descarga atmosférica (raio) cai na rede elétrica a 2 km de distância, injetando um pico de 4.000 Volts na fiação.",
      "3. O pico de tensão chega ao quadro elétrico dedicado do ateliê.",
      "4. O DPS (Dispositivo Protetor de Surtos) atua em menos de 25 nanossegundos, desviando 100% da sobretensão para o aterramento da haste de cobre.",
      "5. Simultaneamente, o No-Break Senoidal filtra os ruídos e estabiliza a energia em exatos 220V/127V contínuos.",
      "6. A máquina nem percebe a oscilação: a agulha continua descendo suavemente e a placa eletrônica fica 100% intacta e segura."
    ],
    "mainTypes": [
      "Quadro de Distribuição Dedicado com DPS e Aterramento TN-S (Padrão ouro de instalação elétrica para ateliês)",
      "No-Break Senoidal Puro Online Dupla Conversão (Alimentação ininterrupta com tolerância zero a oscilações)",
      "Condicionador de Energia e Filtro de Linha Industrial EMI/RFI (Para eliminação de ruídos de rede causados por outras máquinas)"
    ],
    "characteristics": [
      "Proteção total das placas de circuito mais caras da máquina contra queima por raios",
      "Fim dos travamentos misteriosos e telas congeladas no meio do bordado",
      "Possibilidade de continuar bordando mesmo se a luz piscar por alguns segundos",
      "Conformidade com os padrões de garantia dos principais fabricantes mundiais de máquinas"
    ],
    "limitations": [
      "Nunca utilizar estabilizadores comuns de computador de relé (eles são lentos e prejudicam os servomotores da máquina)",
      "Nunca cortar o pino terra da tomada da máquina de bordar nem usar adaptadores do tipo 'T' / benjamim",
      "Trocar os módulos do DPS caso o indicador visual mude de verde para vermelho após tempestades severas"
    ],
    "numberingSystem": [
      "Tempo de Resposta do DPS: < 25 nanossegundos",
      "Resistência de Aterramento: < 5 Ohms",
      "Distorção Harmônica da Onda: THD < 3% Senoidal Pura"
    ],
    "advantages": [
      "✔ Economiza milhares de reais evitando a queima de placas eletrônicas e telas sensíveis ao toque",
      "✔ Acaba com o medo de perder o bordado na metade quando começa uma tempestade de chuva",
      "✔ Garante que sua máquina funcione por muitos anos com máxima estabilidade"
    ],
    "commonErrors": [
      "❌ Ligar a máquina de bordar na mesma tomada junto com prensas térmicas pesadas, ferros a vapor ou ar-condicionado",
      "❌ Usar estabilizador barato de informática que fica fazendo 'tec-tec' e mandando picos de energia para o motor",
      "❌ Cortar o pino do meio (terra) da tomada por preguiça de instalar uma tomada de 3 pinos aterrada"
    ],
    "voceSabia": "A queima de placas eletrônicas por surtos de tensão da rede é a causa número 1 de perda de garantia e de despesas não planejadas em oficinas de bordado no mundo inteiro!",
    "curiosidadeTecnica": "Um motor servo industrial de máquina de bordar regenera energia cinética de volta para a linha durante as desacelerações do pantógrafo; se a instalação não tiver aterramento e rede estável, essa energia pode acumular no barramento DC interno e queimar os transistores IGBT da placa controladora.",
    "dicaArtrelados": "Proteja a jóia do seu ateliê como ela merece! **1.** Tenha uma tomada exclusiva com **fio terra de verdade** instalado para a sua máquina de bordar. **2.** Nunca use estabilizadores comuns de escritório; use um **No-break de Onda Senoidal Pura ou um Filtro de Linha Clamper com DPS**. **3.** Se a previsão for de tempestade muito forte com raios, termine a peça e tire o plugue da tomada por segurança!",
    "comparisonTable": {
      "headers": [
        "Equipamento de Proteção",
        "Tempo de Reação",
        "Proteção contra Raios",
        "Qualidade da Onda Elétrica"
      ],
      "rows": [
        [
          "DPS + No-Break Senoidal Puro",
          "< 25 nanossegundos",
          "100% Protegido (desvio total)",
          "Senoidal Perfeita (THD < 3%)"
        ],
        [
          "Filtro de Linha Industrial (Clamper)",
          "< 25 nanossegundos",
          "Alta Proteção contra Surtos",
          "Filtro de Ruído EMI/RFI"
        ],
        [
          "Estabilizador Comum de Relé",
          "Lento (15 a 30 ms)",
          "Nula / Mínima",
          "Onda quadrada com picos perigosos"
        ],
        [
          "Tomada Comum Direta sem Terra",
          "Inexistente",
          "Zero (placa queima direto)",
          "Instável e com oscilações"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Planejamento elétrico de ateliês domésticos, comerciais e galpões industriais",
      "Proteção de máquinas de bordar eletrônicas de 1 a 12 cabeças",
      "Prevenção de perdas em regiões com alto índice pluviométrico e descargas elétricas",
      "Alimentação ininterrupta de matrizes longas que não podem ser interrompidas"
    ],
    "troubleshootingTips": [
      "Se a tela da máquina der tela azul ou reiniciar sozinha do nada, chame um eletricista para medir a voltagem da tomada",
      "Verifique visualmente se a janelinha do DPS no seu quadro de força está verde",
      "Nunca compartilhe a mesma fiação da máquina de bordar com a prensa térmica do ateliê"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Q-Factor e Amortecimento de Vibração Estrutural da Bancada",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-084",
      "quadro eletrico",
      "dps",
      "nobreak",
      "protecao eletrica",
      "aterramento",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ELECTRICAL PROTECTION FOR SENSITIVE CNC MACHINERY: SPD Classification, Grounding Standards & Pure Sinewave Conditioning. Boston, 2021.",
      "PARRISH, Gail. Power Quality and Surge Protection in Modern Embroidery Facilities. Cincinnati, 2022."
    ],
    "practicalExercise": "Dê uma olhada na tomada onde sua máquina de bordar está ligada hoje: ela tem o terceiro pino conectado a um terra de verdade? Se estiver em um T ou extensão velha, providencie hoje mesmo um filtro de linha profissional com DPS para proteger seu investimento!",
    "quickSummary": "O sistema de proteção elétrica com fio terra, DPS e nobreak para sua máquina nunca queimar a placa em tempestades.",
    "beginnerExplanation": "A placa de computador da sua máquina de bordar é muito delicada e custa caro! Para ela não queimar se cair um raio perto da sua casa ou se a luz oscilar, você deve ligá-la em uma tomada com fio terra de verdade e usar um protetor elétrico especial contra raios (DPS). Assim sua máquina fica protegida e dura a vida toda!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-085-quarentena-de-insumos-e-armazenamento-climatizado",
    "code": "Q-085",
    "term": "Quarentena de Insumos e Armazenamento Climatizado (Raw Material Quarantine & Climate Storage Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do italiano quarantina (período de isolamento preventivo) e do grego klima (controle de umidade e temperatura atmosférica).",
    "summary": "Protocolo profissional de controle microclimático (umidade relativa de 45% a 60% e temperatura de 20°C a 24°C) e inspeção prévia de lotes de linhas, entretelas hidrossolúveis de PVA e tecidos nobres para evitar ressecamento, mofo e quebras.",
    "definition": "Quarentena de Insumos e Armazenamento Climatizado (Textile Material Quarantine, Hygroscopic Equilibrium & Environmental Storage Conditioning) é a diretriz de gestão da qualidade que estabelece o condicionamento ambiental controlado e a inspeção preliminar de matérias-primas antes de sua liberação para a linha de produção do ateliê. Insumos de bordado são altamente higroscópicos e termossensíveis: entretelas solúveis em água (PVA) ressecam e esfarelam com umidade abaixo de 35%; linhas de rayon e viscose perdem até 40% da tenacidade se expostas à luz UV solar; e espumas EVA perdem a memória elástica se estocadas sob compressão térmica. A climatização controlada garante que todos os materiais atinjam o equilíbrio higrométrico ideal antes de serem enquadrados e bordados.",
    "technicalDetails": "Faixa ótima de umidade relativa do ar: 45% a 60% UR (monitorada por termo-higrômetro digital). Faixa de temperatura ideal: 20°C a 24°C. Período mínimo de aclimatização (quarentena térmica): 12 a 24 horas para tecidos e entretelas vindos de transportadoras. Armazenamento de linhas: Em caixas opacas fechadas ou gaveteiros protegidos da radiação ultravioleta (UV). Embalagem de entretelas PVA: Sacos herméticos de polietileno com sílica-gel ativa.",
    "construction": [
      "Termo-higrômetro digital calibrado com registro de máximas e mínimas diárias",
      "Desumidificador ou umidificador de ar ultrassônico regulado por higrostato",
      "Armários ou gaveteiros de madeira/aço protegidos de luz solar direta e poeira",
      "Sacos plásticos herméticos tipo zip-lock com sachês dessecantes de sílica-gel",
      "Prateleiras suspensas a no mínimo 15 cm do chão para evitar umidade ascendente do piso"
    ],
    "howItWorks": [
      "1. O ateliê recebe uma caixa de rolos de entretela hidrossolúvel de PVA e 50 cones de linha de bordar comprados pela internet em um dia de calor de 38°C.",
      "2. Em vez de abrir e usar imediatamente na máquina, os insumos entram em 'Quarentena de Aclimatização'.",
      "3. Os rolos são inspecionados para checar integridade e acomodados na sala climatizada a 22°C e 50% de umidade por 24 horas.",
      "4. A umidade natural das fibras e a flexibilidade do polímero de PVA se estabilizam perfeitamente.",
      "5. No dia seguinte, a entretela solúvel é colocada no bastidor com total elasticidade, sem ressecar e sem rasgar durante o bordado de uma renda Richelieu.",
      "6. As linhas correm macias e resistentes, sem nenhuma quebra por fragilidade térmica."
    ],
    "mainTypes": [
      "Armazenamento de Linhas e Fios de Bordar (Protegidos de raios UV em gaveteiros escuros com umidade controlada)",
      "Armazenamento de Entretelas Hidrossolúveis e Termossolúveis (Em sacos zip herméticos com sílica-gel)",
      "Aclimatização de Tecidos Nobres e Malhas (Descanso prévio de 24h desenrolados para estabilização da trama)"
    ],
    "characteristics": [
      "Eliminação de quebras inexplicáveis de linhas causadas por ressecamento e envelhecimento precoce",
      "Preservação da vida útil de entretelas solúveis caras sem perda por esfarelamento",
      "Estabilidade dimensional garantida em tecidos finos e toalhas antes do corte e bordado",
      "Organização visual impecável com controle de lotes e datas de recebimento"
    ],
    "limitations": [
      "Nunca guardar cones de linha expostos na parede perto de janelas onde bate sol da tarde",
      "Nunca estocar rolos de entretela diretamente apoiados no chão úmido de concreto",
      "Manter a sílica-gel sempre ativa (reidratando ou trocando quando mudar de cor)"
    ],
    "numberingSystem": [
      "Umidade Relativa Ideal: 45% a 60% UR",
      "Temperatura Ideal: 20°C a 24°C",
      "Tempo de Aclimatização: 12 a 24 horas"
    ],
    "advantages": [
      "✔ Suas linhas de bordar duram anos perfeitas e resistentes como se tivessem acabado de sair da fábrica",
      "✔ Suas entretelas solúveis nunca mais vão ficar secas, quebradiças ou mofadas",
      "✔ Reduz custos com perdas de materiais estragados no estoque"
    ],
    "commonErrors": [
      "❌ Deixar os cones de linha lindos expostos em um suporte de parede bem onde bate sol direto todo dia",
      "❌ Guardar entretela solúvel solta em lugar úmido, fazendo o plástico derreter e grudar nele mesmo",
      "❌ Usar tecido que acabou de chegar dobrado e frio do frete sem deixar descansar na temperatura ambiente"
    ],
    "voceSabia": "A radiação ultravioleta (UV) da luz solar direta degrada os polímeros das linhas de poliéster e viscose, reduzindo sua força de tração em mais de 50% em apenas 3 meses de exposição aberta em prateleiras!",
    "curiosidadeTecnica": "O filme de PVA (álcool polivinílico) possui uma curva de absorção de umidade não-linear; se a umidade relativa do ar ultrapassar 75%, o filme começa a se autorreticular e dissolver parcialmente ao ar ambiente, colando as camadas do rolo de forma irreversível.",
    "dicaArtrelados": "Cuide das suas linhas e entretelas com o **Segredo do Armário Protetor**: guarde suas linhas de bordar em gaveteiros fechados ou caixas plásticas opacas longe do sol! E para a sua entretela hidrossolúvel (aquela transparente de plástico para toalhas e rendas), guarde sempre dentro de um **saquinho tipo zip bem fechado com um sachê de sílica-gel** dentro. Ela vai ficar macia e perfeita por anos!",
    "comparisonTable": {
      "headers": [
        "Condição de Armazenamento",
        "Vida Útil da Linha",
        "Estado da Entretela Solúvel",
        "Taxa de Quebra na Máquina"
      ],
      "rows": [
        [
          "Climatizado e Protegido do Sol (45-60% UR)",
          "> 5 anos impecável",
          "Flexível e macia",
          "< 1 quebra por 100k pontos"
        ],
        [
          "Exposto ao Sol e Calor de Janela",
          "< 6 meses (ressecada)",
          "Ressecada e quebradiça",
          "Quebras constantes a cada 10 min"
        ],
        [
          "Ambiente Úmido sem Vedação (> 75% UR)",
          "Propensa a mofo e odores",
          "Grudenta e derretendo",
          "Atrito excessivo no olho da agulha"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Gestão de almoxarifado e compras de grandes quantidades de linhas e entretelas",
      "Prevenção de perdas em ateliês situados em cidades litorâneas úmidas ou regiões áridas",
      "Conservação de insumos especiais e caros (linhas metálicas, solúveis, fios de seda)",
      "Padrão de qualidade para ateliês certificados com alta repetibilidade técnica"
    ],
    "troubleshootingTips": [
      "Se uma entretela solúvel estiver ficando dura e quebradiça, coloque-a em um saquinho fechado com uma esponjinha ligeiramente úmida (sem encostar nela) por 2 horas",
      "Instale um pequeno termo-higrômetro digital (custa baratinho) na parede do seu ateliê para monitorar a umidade",
      "Identifique as caixas de linhas com a data de compra para usar sempre as mais antigas primeiro (sistema PEPS)"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Linha de Bordar 40wt",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Acessórios & Bastidores",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-085",
      "armazenamento",
      "quarentena de insumos",
      "climatizacao",
      "umidade",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE PRESERVATION & STORAGE STANDARDS: Hygroscopic Conditioning, UV Degradation and Polymeric Film Stability. Manchester, 2021.",
      "PARRISH, Gail. Raw Material Logistics and Climate Control in Embroidery Manufacturing. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um cone de linha exposto na janela do sol por 30 dias e deixe outro cone da mesma cor guardado no escuro da gaveta. Ao final, puxe os dois fios com a mão: sinta como o fio que tomou sol arrebenta fácil como papel, enquanto o guardado continua super forte!",
    "quickSummary": "O método de guardar linhas e entretelas longe do sol e da umidade para nunca ressecarem nem estragarem.",
    "beginnerExplanation": "Linhas de bordar e entretelas plásticas são como remédios: não podem tomar sol direto nem umidade! Guardar suas linhas dentro de gavetas escuras e a entretela solúvel dentro de um saquinho plástico com zíper faz com que elas durem anos inteirinhos super fortes e sem quebrar na máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-086-quadro-de-tempos-e-metodos-de-bordado",
    "code": "Q-086",
    "term": "Quadro de Tempos e Métodos de Bordado (Standard Time & Motion Study - MTM no Ateliê)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadrum (tabela analítica) e do grego methodos (estudo científico da economia de movimentos e tempos padrão de trabalho).",
    "summary": "Metodologia de engenharia de produção aplicada ao ateliê para cronometrar, padronizar e otimizar cada microetapa (corte de entretela, montagem do bastidor, tempo de máquina, desfiamento e embalagem), aumentando a lucratividade e o rendimento diário.",
    "definition": "Quadro de Tempos e Métodos de Bordado (Standard Time & Motion Study - MTM, Lean Embroidery Production & Cycle Time Optimization) é o sistema analítico de cronoanálise que quantifica o tempo padrão de cada etapa do fluxo de trabalho no ateliê. A produção de um bordado não se resume aos minutos que a máquina leva para costurar os pontos: envolve o Tempo de Preparação (corte de entretela e tecido), Tempo de Enquadramento no Bastidor, Tempo de Troca de Linha/Cores, Tempo Real de Máquina, Tempo de Acabamento (corte de fios de salto e remoção de entretela) e Tempo de Passadoria/Embalagem. Ao mapear o ciclo total com uma planilha ou quadro de tempos, a bordadeira descobre gargalos ocultos, precifica os produtos com lucro real baseado no custo do minuto de ateliê e consegue dobrar sua capacidade diária sem precisar trabalhar mais horas.",
    "technicalDetails": "Equação do Ciclo Total: T_Total = T_Setup + T_Bastidor + (Pontos / PPM_Real) + T_Trocas + T_Acabamento + T_Embalagem. PPM Real médio da máquina (considerando acelerações e paradas): ~70% a 80% da velocidade nominal configurada. Custo do Minuto do Ateliê: (Despesas Fixas + Pró-Labore) / Minutos Produtivos Mensais. Ganho típico de produtividade com método MTM: 30% a 50% mais peças produzidas por turno.",
    "construction": [
      "Quadro físico ou planilha digital de Tempos e Métodos com colunas de etapas cronometradas",
      "Cronômetro digital para medição de amostragens reais de ciclos de trabalho",
      "Estação de montagem de bastidores organizada no conceito 5S (tudo ao alcance das mãos)",
      "Tabela de tempos padrão por categoria de produto (toalhas, camisas polo, naninhas, bonés)",
      "Calculadora de precificação automática multiplicando tempo gasto pelo valor do minuto"
    ],
    "howItWorks": [
      "1. A bordadeira acha que gasta apenas 10 minutos para bordar uma toalha de banho com 8.000 pontos.",
      "2. Decide cronometrar o processo real completo usando o Quadro de Tempos e Métodos.",
      "3. Descobre a verdade: Leva 4 minutos procurando a linha e cortando a entretela; 5 minutos sofrendo para apertar o bastidor com a toalha grossa; 12 minutos de máquina; 6 minutos cortando fios e limpando o plástico solúvel; e 3 minutos passando e embalando. Tempo total real: 30 minutos!",
      "4. Ao analisar o quadro, ela aplica melhorias do método Lean: organiza as linhas e entretelas já pré-cortadas, passa a usar um bastidor magnético rápido e otimiza a matriz no software para ter menos cortes de linha.",
      "5. O tempo total cai de 30 minutos para apenas 16 minutos por toalha.",
      "6. Ela passa a conseguir produzir quase o dobro de toalhas no mesmo dia, dobrando seu lucro líquido!"
    ],
    "mainTypes": [
      "Quadro de Tempos de Processo Unitário (Mapeamento de 1 peça do início ao fim para precificação)",
      "Quadro de Lotes e Produção em Série (Cronometragem de pedidos de 50 a 500 peças de uniformes)",
      "Matriz de Eficiência Global da Máquina - OEE (Calcula o percentual de tempo que a máquina realmente passou bordando)"
    ],
    "characteristics": [
      "Visão cristalina de onde o tempo do ateliê está sendo desperdiçado de verdade",
      "Precificação 100% justa e lucrativa que nunca mais deixa você pagar para trabalhar",
      "Aumento imediato da produtividade diária com menos cansaço físico",
      "Organização profissional que transmite confiança e pontualidade na entrega"
    ],
    "limitations": [
      "Nunca calcular o preço de um bordado olhando apenas para a quantidade de pontos da máquina",
      "Não tentar acelerar a produção pulando etapas cruciais de controle de qualidade e acabamento",
      "Atualizar a tabela de tempos quando adquirir equipamentos mais rápidos (como bastidores magnéticos)"
    ],
    "numberingSystem": [
      "Eficiência Real da Máquina: 70% - 80% do PPM Nominal",
      "Redução de Tempo de Setup: até 60%",
      "Amostragem Mínima de Medição: 3 a 5 ciclos completos"
    ],
    "advantages": [
      "✔ Você descobre o valor exato do seu minuto de trabalho para nunca mais cobrar barato por engano",
      "✔ Consegue entregar encomendas na metade do tempo sem se desesperar com prazos",
      "✔ Transforma seu ateliê em um negócio altamente organizado, profissional e lucrativo"
    ],
    "commonErrors": [
      "❌ Cobrar o bordado só pelos pontos da máquina e esquecer do tempo gasto cortando entretela e embalando",
      "❌ Perder 15 minutos procurando uma tesoura ou cone de linha que sumiu na bagunça da mesa",
      "❌ Borda matrizes cheias de cortes desnecessários que fazem a máquina parar a cada 10 segundos"
    ],
    "voceSabia": "O estudo de Tempos e Métodos (*Time and Motion Study*) foi criado pelos engenheiros Frederick Taylor e Frank & Lillian Gilbreth no início do século XX e foi o responsável por revolucionar a produção industrial moderna e a cirurgia hospitalar!",
    "curiosidadeTecnica": "Em operações de bordado sem cronoanálise, o tempo que a máquina de fato passa bordando (*Spindle Uptime*) costuma ser de apenas 35% da jornada de trabalho; com um fluxo padronizado de bancada, esse índice sobe para mais de 75%.",
    "dicaArtrelados": "Faça a experiência no seu ateliê hoje mesmo com a **Regra dos 5 Minutos Pré-Produção**: deixe um gaveteiro com pedaços de entretela já cortados no tamanho dos seus bastidores mais usados, deixe suas tesourinhas amarradas em um ponto fixo e organize as linhas do pedido antes de ligar a máquina. Você vai economizar mais de 1 hora livre todo santo dia!",
    "comparisonTable": {
      "headers": [
        "Etapa de Produção",
        "Tempo sem Padronização",
        "Tempo com Método Otimizado",
        "Ganho de Produtividade"
      ],
      "rows": [
        [
          "Preparação e Corte de Insumos",
          "6 minutos (procurando e medindo)",
          "1 minuto (insumos pré-cortados)",
          "+ 500% mais rápido"
        ],
        [
          "Enquadramento no Bastidor",
          "5 minutos (ajustando parafusos)",
          "30 segundos (bastidor magnético)",
          "+ 900% mais rápido"
        ],
        [
          "Bordado na Máquina",
          "15 minutos (com 18 cortes de linha)",
          "11 minutos (matriz otimizada)",
          "+ 27% mais rápido"
        ],
        [
          "Limpeza e Acabamento Final",
          "7 minutos (tesourinha comum)",
          "2 minutos (ferramentas certas)",
          "+ 250% mais rápido"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão calibrado",
      "needleType": "Padrão",
      "stabilizer": "Padrão pré-cortado",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Formação de preços de venda e orçamentos rápidos para clientes corporativos",
      "Planejamento de capacidade de entrega de grandes encomendas de fim de ano e volta às aulas",
      "Treinamento de novos ajudantes e operadoras para ateliês em crescimento",
      "Redução de custos operacionais e eliminação de horas extras cansativas"
    ],
    "troubleshootingTips": [
      "Cronometre 3 peças com um relógio no celular e anote em um caderninho para descobrir sua média real",
      "Junte todos os cortes de linha no software para que a máquina não fique parando toda hora",
      "Tenha uma tesoura de ponta curvada boa e afiada sempre à mão para limpar os fios em segundos"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Quik-Snap e Bastidores Magnéticos de Fixação Rápida",
      "Mecânica & Manutenção",
      "Digitalização & Software"
    ],
    "tags": [
      "q-086",
      "tempos e metodos",
      "gestao de producao",
      "precificacao",
      "produtividade",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEAN MANUFACTURING IN APPAREL & EMBROIDERY: Time and Motion Studies, Ergonomic Flow & Standard Costing. Geneva, 2021.",
      "PARRISH, Gail. Operational Efficiency and Chronoanalysis in Commercial Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um cronômetro e meça quanto tempo você leva para montar uma toalha no bastidor hoje. Depois, organize a mesa, deixe a entretela cortada ao lado e tente de novo. Anote a diferença e comemore os minutos que você acabou de ganhar!",
    "quickSummary": "O método de cronometrar cada passo do bordado para saber quanto cobrar e produzir muito mais rápido.",
    "beginnerExplanation": "O quadro de tempos e métodos é um jeito inteligente de marcar no relógio quanto tempo você gasta para preparar o tecido, colocar no bastidor, bordar e limpar a peça. Quando você vê onde está perdendo tempo, consegue organizar sua mesinha para trabalhar mais rápido, cansar menos e ganhar muito mais dinheiro!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-087-quick-change-bobbin-e-bobinas-magne-ticas-pre-enroladas",
    "code": "Q-087",
    "term": "Quick-Change Bobbin e Bobinas Magnéticas Pré-Enroladas (Quick-Change Bobbins & Magna-Glide System)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês quick-change (troca rápida de bobina) e magnetic core (núcleo magnético de rotação estabilizada).",
    "summary": "Tecnologia de bobinas industriais pré-enroladas com núcleo magnético patenteado (estilo Magna-Glide) e carretéis sem laterais de papel que garantem tensão milimetricamente constante de 20 a 25 gf do início ao fim da costura.",
    "definition": "Quick-Change Bobbin e Bobinas Magnéticas Pré-Enroladas (Magnetic Core Pre-Wound Bobbins, Magna-Glide Technology & Continuous Tension Control) é o padrão de excelência para a linha inferior em máquinas de bordar computadorizadas. Bobinas de plástico enroladas manualmente na máquina frequentemente sofrem de tensão desuniforme, enrolamento cônico e 'folga inercial' (*Bobbin Overspin*), girando soltas e embolando quando a máquina freia bruscamente de 1.000 para 0 PPM. As bobinas pré-enroladas com núcleo magnético possuem um micro-ímã central que atrai a base de aço da caixa de bobina, criando um freio magnético dinâmico sem atrito que elimina 100% da folga inercial e fornece tensão uniforme do primeiro ao último metro de linha de filamento contínuo de poliéster 60wt.",
    "technicalDetails": "Tipo de fio da bobina: Filamento contínuo de poliéster 60wt / 70wt (alta tenacidade e espessura ultrafina). Metragem por bobina padrão Estilo L: ~120 a 135 metros (40% a mais de linha que uma bobina comum enrolada à mão). Tensão de saída calibrada: 20 a 25 gf constantes (zero variação até o fim). Eliminação de mola de freio mecânica: Não necessita da mola de lâmina interna da caixa de bobina.",
    "construction": [
      "Núcleo central ferromagnético embutido ou pastilha magnética de alta precisão",
      "Bobinamento industrial computadorizado com precisão de enrolamento paralelo cruzado",
      "Linha de filamento contínuo de poliéster virgem ultrafina 60wt/70wt sem nós",
      "Design sem flanges plásticas laterais (*Magnetic Core / Sideless*) para máximo volume",
      "Caixa de bobina compatível em aço magnético polido com mola tensora calibrada"
    ],
    "howItWorks": [
      "1. A operadora remove a bobina gasta da máquina em 3 segundos.",
      "2. Pega uma bobina magnética pré-enrolada nova da caixa e insere diretamente na caixa de bobina (com o lado magnético voltado para o fundo de aço).",
      "3. Puxa a linha pela mola de tensão da caixa: o micro-ímã do núcleo ancora suavemente no metal.",
      "4. A máquina borda a 1.000 PPM executando centenas de cortes e paradas bruscas.",
      "5. A cada parada, o ímã impede que a bobina continue girando solta, evitando nós e laçadas frouxas.",
      "6. A tensão da linha inferior permanece cravada em 22 gf até o último centímetro de linha.",
      "7. No avesso do bordado, a coluna de ponto cheio exibe o padrão perfeito de 1/3 de linha branca no centro, sem linha de bobina subindo para a frente da peça."
    ],
    "mainTypes": [
      "Bobinas Magnéticas Estilo L (Padrão para a maioria das máquinas industriais e semiprofissionais)",
      "Bobinas Magnéticas Estilo M (Grandes, com o dobro de capacidade para máquinas de acolchoamento e industriais pesadas)",
      "Bobinas Pré-Enroladas Sideless com Núcleo Plástico (Sem laterais de papelão, para redução de atrito)"
    ],
    "characteristics": [
      "Tensão da linha inferior 100% constante do início ao fim sem precisar regular toda hora",
      "Cabe até 40% mais linha na mesma bobina, reduzindo as paradas de troca pela metade",
      "Eliminação definitiva de linha de bobina embolando ou subindo para a frente do bordado",
      "Zero resíduo de pó de papel dentro da caixa de bobina da máquina"
    ],
    "limitations": [
      "Sempre colocar a bobina com o lado magnético voltado para o fundo da caixa de bobina",
      "Em caixas de bobina que possuem uma molinha circular de freio no fundo, deve-se retirar essa mola mecânica para usar bobina magnética",
      "Não descartar caixas de bobina com óleo acumulado que possa enfraquecer o contato magnético"
    ],
    "numberingSystem": [
      "Estilo de Bobina: Estilo L (Padrão) / Estilo M (Jumbo)",
      "Título do Fio: Poliéster 60wt / 70wt",
      "Metragem Média: 120 a 135 metros por carretel"
    ],
    "advantages": [
      "✔ Acaba de vez com o sofrimento de ficar enchendo bobina na mão toda hora",
      "✔ Garante que o avesso do seu bordado fique limpo, macio e perfeito como de indústria",
      "✔ Aumenta a velocidade de produção permitindo que a máquina borde por muito mais tempo sem parar"
    ],
    "commonErrors": [
      "❌ Enrolar bobina na máquina com linha comum de cima grossa (40wt), deixando a bobina gorda e pesada",
      "❌ Colocar a bobina magnética invertida (com o lado do ímã virado para fora)",
      "❌ Deixar linha frouxa ao encher carretéis de plástico, criando trancos e quebras de agulha"
    ],
    "voceSabia": "A tecnologia das bobinas Magna-Glide com núcleo magnético foi desenvolvida e patenteada nos Estados Unidos pela empresa Fil-Tec e é considerada a maior revolução na física de costura inferior dos últimos 50 anos!",
    "curiosidadeTecnica": "O enrolamento industrial de uma bobina pré-enrolada é feito sob controle computadorizado de tensão a laser com precisão de ± 0,5 gf, algo humanamente impossível de ser reproduzido no enchedor manual acoplado na máquina de bordar.",
    "dicaArtrelados": "Se você quer ver seus bordados atingirem outro nível de perfeição: **comece a usar bobinas industriais pré-enroladas magnéticas!** Uma caixinha com 100 bobinas dura meses no ateliê, você nunca mais perde tempo enchendo carretel na máquina e a linha de baixo nunca mais vai subir para a frente do seu bordado!",
    "comparisonTable": {
      "headers": [
        "Tipo de Bobina",
        "Metragem de Linha",
        "Estabilidade de Tensão",
        "Tempo Gasto pelo Operador"
      ],
      "rows": [
        [
          "Bobina Magnética Pré-Enrolada",
          "130 metros (fio 60wt fino)",
          "100% Estável (freio magnético)",
          "3 segundos para trocar"
        ],
        [
          "Bobina Pré-Enrolada de Papelão",
          "115 metros",
          "Boa (pode gerar pó de papel)",
          "3 segundos para trocar"
        ],
        [
          "Bobina Plástica Enrolada na Mão",
          "70 a 85 metros (fio 40wt grosso)",
          "Instável (folga inercial frequente)",
          "3 a 5 minutos enchendo carretel"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção até 1.000 PPM",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Caixa de bobina calibrada para 22 gf",
      "density": "Padrão"
    },
    "applications": [
      "Produção profissional e contínua em ateliês e indústrias de bordado",
      "Bordados em peças finas onde o avesso precisa ser extremamente macio (enxovais de bebê)",
      "Eliminação de paradas frequentes em bordados grandes com mais de 50.000 pontos",
      "Padronização técnica de tensão em máquinas multiagulhas"
    ],
    "troubleshootingTips": [
      "Se a linha branca da bobina estiver aparecendo na frente do bordado, aperte 1/8 de volta o parafuso da caixinha de bobina",
      "Limpe a caixinha com um pincel macio a cada troca de bobina para retirar qualquer fiapinho",
      "Compre sempre caixas fechadas de bobinas para economizar no frete e garantir o mesmo lote de linha"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Mecânica & Manutenção",
      "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio",
      "Linha de Bordar 40wt",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-087",
      "bobina magnetica",
      "pre-enrolada",
      "magna-glide",
      "linha inferior",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FIL-TEC MAGNA-GLIDE TECHNICAL STANDARDS: Magnetic Core Bobbin Dynamics & Tension Precision. Hagerstown, 2021.",
      "PARRISH, Gail. Underthread Engineering: Pre-Wound Bobbins, Inertial Braking and High-Speed Stitch Stability. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque uma bobina que você encheu na mão na sua máquina e borde uma coluna de ponto cheio de 10 cm. Depois, coloque uma bobina pré-enrolada magnética e borde a mesma coluna ao lado. Vire o tecido do avesso e compare: a versão pré-enrolada fica com uma faixa central perfeita como régua!",
    "quickSummary": "As bobinas prontas com ímã no meio que já vêm com a linha fininha perfeita para nunca embolar nem subir pro direito.",
    "beginnerExplanation": "Em vez de você ter que parar tudo para ficar enchendo carretel de linha na máquina toda hora, existem as bobinas prontas que já vêm enroladas de fábrica! Elas têm um pequeno ímã no fundo que gruda na caixinha de metal da máquina, fazendo a linha correr macia do começo ao fim sem embolar e sem puxar para a frente da roupa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-088-quilted-applique-aplique-acolchoado-com-matelasse-embutido",
    "code": "Q-088",
    "term": "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês appliquér (sobrepor tecido recortado) e do inglês quilted (acolchoado em relevo matelassado com manta interna).",
    "summary": "Técnica mista sofisticada que combina a inserção de manta acrílica fina (R1/R2) sob o tecido de aplique, pespontos geométricos decorativos de matelassê no interior do recorte e acabamento perimetral em ponto cheio ou ponto caseado.",
    "definition": "Quilted Appliqué (Padded In-The-Hoop Quilted Appliqué, Dimensional Trapunto Patchwork & Structured Loft Appliqué) é a técnica de bordado computadorizado que une o aplique de tecido tradicional ao acolchoamento estruturado (*Matelassê*). Durante a execução no bastidor (*In The Hoop*), após a marcação da forma, a bordadeira sobrepõe uma camada de manta acrílica resinada ultrafina (R1 ou R2 de 100g) juntamente com o tecido de topo; a máquina executa pespontos decorativos internos (como meandros, diamantes ou espirais) que comprimem a manta seletivamente, criando um relevo acolchoado macio e tridimensional (*Puff Quilted Effect*), sendo finalizado pelo corte rente das sobras e cobertura perimetral em ponto cheio acetinado (*Satin*) ou ponto caseado clássico (*Blanket Stitch*).",
    "technicalDetails": "Gramatura ideal da manta acrílica: 80 a 100 g/m² (Manta R1 resinada em um dos lados para evitar deslocamento). Densidade do pesponto interno de quilting: Ponto reto triplo (*Bean Stitch*) de 2,5 mm a 3,0 mm. Compensação de encolhimento perimetral: + 0,5 mm a + 0,8 mm no ponto cheio final para cobrir a espessura da manta. Tipo de agulha recomendado: 75/11 SES ponta bola leve.",
    "construction": [
      "Tecido de base estabilizado com entretela de algodão ou rasgadeira firme",
      "Manta acrílica de baixa densidade (R1/R2) pré-cortada no tamanho do aplique",
      "Tecido de topo estampado ou liso (100% algodão tricoline lavado e passado)",
      "Tesoura especial tipo 'Patinha de Pato' (Pelican Appliqué Scissors) para recorte rente",
      "Cola temporária em spray ou fita crepe de papel para fixação sem pregas no bastidor"
    ],
    "howItWorks": [
      "1. A máquina executa a Linha de Marcação 1 (*Placement Stitch*) no tecido de base delimitando o desenho (ex: um ursinho).",
      "2. A bordadeira apoia a manta acrílica fina R1 e o tecido de tricoline estampado por cima da área demarcada.",
      "3. A máquina executa a Linha de Fixação 2 (*Tackdown Stitch*) prendendo todas as camadas juntas.",
      "4. Em seguida, a máquina executa o Pesponto de Quilting Interno (costurando um padrão de losangos sobre o corpinho do urso).",
      "5. A bordadeira retira o bastidor da máquina (sem soltar o tecido do aro) e usa a tesoura patinha de pato para cortar o excesso de tecido e manta bem rente à costura externa.",
      "6. Recoloca o bastidor na máquina: a máquina executa a borda de ponto cheio acetinado de 3,5 mm cobrindo 100% do corte.",
      "7. O resultado é um ursinho fofinho em relevo acolchoado matelassado com acabamento de boutique de luxo!"
    ],
    "mainTypes": [
      "Quilted Appliqué com Matelassê em Losangos (Efeito clássico de almofada elegante)",
      "Quilted Appliqué com Pesponto Livre/Meandros (Estilo artesanal de quilting rústico)",
      "Quilted Appliqué com Ponto Caseado Rústico (Visual aconchegante para enxovais infantis e cozinha country)"
    ],
    "characteristics": [
      "Volume tridimensional macio e fofinho muito superior ao aplique plano comum",
      "Redução drástica na quantidade total de pontos da matriz (econômico e rápido)",
      "Acabamento sofisticado com alto apelo visual para artigos infantis e decoração",
      "Lavável e durável mantendo a forma acolchoada mesmo após muitas lavagens"
    ],
    "limitations": [
      "Não utilizar mantas acrílicas grossas demais (> 150g) que possam empedrar ou travar o calcador da máquina",
      "Sempre cortar o excesso de manta bem rente para não criar calombos por baixo do ponto cheio",
      "Passar o tecido de algodão a ferro com vapor antes de cortar para evitar encolhimento posterior"
    ],
    "numberingSystem": [
      "Gramatura da Manta: 80 - 100 g/m² R1/R2",
      "Largura do Ponto Cheio de Borda: 3,5 mm a 4,5 mm",
      "Comprimento do Pesponto de Quilting: 2,5 mm a 3,0 mm"
    ],
    "advantages": [
      "✔ Agrega um charme irresistível e acabamento nobre de luxo em peças de bebê e almofadas",
      "✔ Borda desenhos grandes e volumosos em poucos minutos economizando milhares de pontos",
      "✔ Permite aproveitar retalhos lindos de tecidos estampados com manta que sobraram no ateliê"
    ],
    "commonErrors": [
      "❌ Usar manta muito grossa que faz o ponto cheio ficar frouxo e torto nas beiradas",
      "❌ Cortar o tecido longe da costura, deixando fiapos feios saindo para fora do contorno",
      "❌ Soltar o tecido do bastidor para cortar o aplique (nunca solte o tecido do aro do bastidor!)"
    ],
    "voceSabia": "A combinação de apliques de tecido com acolchoamento interno nasceu no século XVIII nos palácios da França e da Itália, onde colchas reais eram adornadas com brasões almofadados em seda e veludo chamados de *Trapunto Imperial*!",
    "curiosidadeTecnica": "A adição da manta acrílica interna aumenta a espessura do sanduíche em cerca de 1,8 mm; por isso, a compensação de encolhimento (*Pull Comp*) do contorno final deve ser ajustada para no mínimo 0,6 mm para compensar o ângulo de elevação do ponto cheio.",
    "dicaArtrelados": "O truque de mestre para um **Aplique Acolchoado Perfeito no Ateliê Artrelados**: use uma manta fina resinada (R1) e borrife um pouquinho de cola temporária para o tecido de algodão não escorregar. E use sempre a **Tesoura Patinha de Pato (Pelican)**: o bico largo dela protege o tecido de baixo e permite que você corte o excesso de tecido e manta coladinho na costura em segundos sem medo de furar a peça!",
    "comparisonTable": {
      "headers": [
        "Técnica de Aplique",
        "Relevo e Toque",
        "Tempo de Execução",
        "Valor Agregado"
      ],
      "rows": [
        [
          "Quilted Appliqué (com Manta e Matelassê)",
          "Tridimensional, fofo e acolchoado",
          "Médio (com etapa de quilting)",
          "Altíssimo (peça de luxo artesanal)"
        ],
        [
          "Aplique Tradicional Plano",
          "Plano e liso",
          "Rápido",
          "Médio"
        ],
        [
          "Bordado 100% Preenchido com Linha",
          "Firme e pesado",
          "Longo (milhares de pontos)",
          "Alto (alto consumo de linha)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES ponta bola leve",
      "stabilizer": "Entretela rasgadeira ou algodão de 80g",
      "threadTension": "Padrão calibrado",
      "density": "Borda de contorno: 0.38 mm / Pesponto: 2.8 mm"
    },
    "applications": [
      "Enxovais completos de bebê (kit de berço, naninhas, almofadas e bolsas maternidade)",
      "Colchas de patchwork, mantas de sofá e peseiras de cama de casal",
      "Panos de prato de luxo e jogos americanos acolchoados para cozinha gourmet",
      "Quadros decorativos e bastidores de parede para quartos infantis"
    ],
    "troubleshootingTips": [
      "Se a manta estiver desfiando na hora de cortar, use uma tesoura bem afiada de micro-serrilha",
      "Tire o bastidor da máquina com cuidado, apoie em uma mesa plana para cortar e recoloque na máquina",
      "Passe a ferro com pano úmido por cima após terminar para assentar o relevo fofinho"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Ponto Cheio (Satin Stitch)",
      "Ponto Caseado (Blanket Stitch)",
      "Acessórios & Bastidores",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-088",
      "quilted applique",
      "aplique acolchoado",
      "matelasse",
      "in the hoop",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "IN THE HOOP DIMENSIONAL EMBROIDERY: Quilted Appliqué, Loft Dynamics & Edge Finishing. Melbourne, 2021.",
      "PARRISH, Gail. Structured Appliqué Techniques: Batting Integration, Trapunto Relief and Precision Trimming. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie no seu programa de matrizes um coração simples com uma linha de marcação, pespontos internos de losangos e contorno de ponto cheio. Borde sobre um pedaço de tecido com manta R1 por baixo e encante-se com o toque macio e almofadado do resultado!",
    "quickSummary": "A técnica de colocar uma manta fofinha dentro do aplique de tecido com costurinhas decorativas de matelassê.",
    "beginnerExplanation": "O aplique acolchoado é quando você coloca um pedacinho de manta bem fofinha por baixo do tecido estampado e a máquina faz costurinhas de desenho por cima antes de fechar o contorno! O desenho fica gordinho, macio e fofinho como uma mini almofadinha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-089-quilting-com-guia-laser-e-rastreador-de-padroes",
    "code": "Q-089",
    "term": "Quilting com Guia Laser e Rastreador de Padrões (Laser Guided Quilting & Pattern Tracer Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do acrônimo LASER (Light Amplification by Stimulated Emission of Radiation) e do inglês pattern tracer (rastreador óptico contínuo de coordenadas).",
    "summary": "Sistema de projeção óptica a laser e rastreamento óptico pantográfico que projeta a trajetória exata da costura de acolchoamento sobre colchas e painéis grandes, garantindo continuidade perfeita sem desvios.",
    "definition": "Quilting com Guia Laser e Rastreador de Padrões (Laser-Guided Pantograph Quilting, Optical Pattern Projection & Continuous Boundary Alignment) é o recurso óptico-mecânico utilizado para guiar operações de acolchoamento contínuo em máquinas de bordar e máquinas de braço longo (*Longarm Quilting*). Consiste em um módulo emissor de feixe laser focalizável (cruz, ponto ou linha ultra-fina de 650 nm) acoplado rigidamente ao cabeçote de costura que projeta o ponto exato de descida da agulha ou rastreia uma folha de gabarito gráfico (*Pantograph Paper Roll*) posicionada na mesa traseira. O operador ou o sistema CNC sincroniza o movimento do pantógrafo seguindo a mira laser, garantindo que emendas de blocos de acolchoamento de 2 metros de largura casem com precisão milimétrica sem sobreposições visíveis.",
    "technicalDetails": "Comprimento de onda do laser: 650 nm (Laser Vermelho Classe II, potência < 5mW, seguro para os olhos em reflexão difusa) ou 520 nm (Laser Verde de alto contraste para tecidos claros). Precisão de projeção do ponto zero: ± 0,1 mm no plano do tecido. Rastreamento contínuo: Compatível com pantógrafos de rolo contínuo de até 3,5 metros de largura. Integração de software: Sincronismo óptico com o ponto inicial e final de cada repetição modular.",
    "construction": [
      "Diodo emissor laser semicondutor com lente de foco colimada ajustável",
      "Suporte articulado em alumínio anodizado com ajuste micrométrico nos eixos X, Y e Z",
      "Fonte de alimentação estabilizada conectada à placa de comando da máquina",
      "Mesa traseira de pantógrafo com filme protetor para rolamento de gabaritos impressos",
      "Manoplas de comando ergonômicas com gatilhos de acionamento do feixe óptico"
    ],
    "howItWorks": [
      "1. A bordadeira precisa acolchoar uma colcha de casal grande (2,20 m x 2,40 m) com um desenho contínuo de arabescos florais.",
      "2. Estende a folha de gabarito impresso com o desenho na bancada de rastreamento traseira.",
      "3. Liga o feixe do Guia Laser: uma mira pontual vermelha brilhante ilumina o papel no ponto de início da primeira linha.",
      "4. Segura as manoplas da máquina e aciona a costura: à medida que guia as manoplas fazendo o pontinho laser percorrer a linha desenhada no papel, a agulha da máquina costura exatamente o mesmo traçado sobre a colcha na frente.",
      "5. Ao terminar a primeira passada de 2,20 metros, avança o rolo da colcha com precisão guiada pela mira laser de alinhamento.",
      "6. A colcha inteira é acolchoada com perfeição matemática contínua, sem desvios, sem nós e com espaçamento impecável entre as linhas."
    ],
    "mainTypes": [
      "Guia Laser Traseiro para Rastreamento de Papel (Para condução manual precisa em máquinas longarm)",
      "Projetor Laser Frontal de Ponto de Descida da Agulha (Para alinhamento milimétrico de emendas no bastidor)",
      "Projetor Digital de Gabaritos em Realidade Aumentada (Projeta o desenho inteiro em escala real sobre o tecido)"
    ],
    "characteristics": [
      "Possibilidade de criar acolchoamentos gigantescos em colchas inteiras com desenho contínuo",
      "Precisão milimétrica na conexão entre o final de uma linha e o começo da próxima",
      "Eliminação da necessidade de riscar o tecido da colcha com giz ou canetas que precisam ser lavadas",
      "Fluidez e suavidade de movimento que reduzem a fadiga do operador"
    ],
    "limitations": [
      "Nunca olhar diretamente para a lente do emissor laser ligado",
      "Calibrar o foco do laser sempre que mudar a altura do calcador ou espessura da manta",
      "Exige treino de coordenação motora para acompanhar linhas curvas em velocidade uniforme"
    ],
    "numberingSystem": [
      "Comprimento de Onda: 650 nm (Vermelho) / 520 nm (Verde)",
      "Potência de Emissão: < 5 mW (Classe II)",
      "Precisão de Rastreamento: ± 0,1 mm"
    ],
    "advantages": [
      "✔ Permite criar colchas e edredons de casal deslumbrantes com desenhos contínuos perfeitos",
      "✔ Não precisa riscar o tecido do cliente com giz ou canetas que dão trabalho para sair",
      "✔ Garante que as emendas dos blocos de bordado se encontrem com precisão cirúrgica"
    ],
    "commonErrors": [
      "❌ Movimentar a máquina muito rápido em curvas fechadas, fazendo os pontos ficarem longos e irregulares",
      "❌ Borda sem conferir a calibração do foco laser, operando com a mira desfocada e grossa",
      "❌ Deixar o papel do gabarito torto na mesa traseira, fazendo as linhas da colcha entortarem"
    ],
    "voceSabia": "O primeiro sistema de rastreamento com guia laser para máquinas de acolchoamento têxtil foi adaptado nos anos 1980 a partir de miras ópticas de precisão da indústria militar de aviação!",
    "curiosidadeTecnica": "O diodo laser de 520 nm (verde) possui sensibilidade visual pelo olho humano cerca de 5 vezes maior do que o laser vermelho de 650 nm para a mesma potência elétrica, sendo o padrão preferido para ateliês com forte iluminação LED de teto.",
    "dicaArtrelados": "Se a sua máquina de bordar tem a **Mira Laser de Posicionamento**, use-a como sua maior aliada para emendas de matrizes grandes! Quando for juntar duas partes de um caminho de mesa ou lençol, aponte a mira laser exatamente em cima do último ponto da primeira parte: a segunda parte vai começar coladinha com precisão de agulha sem você errar um único milímetro!",
    "comparisonTable": {
      "headers": [
        "Sistema de Guiagem",
        "Precisão de Emenda",
        "Necessidade de Riscar Tecido",
        "Velocidade de Trabalho"
      ],
      "rows": [
        [
          "Guia Laser com Rastreamento Óptico",
          "Milimétrica (± 0,1 mm)",
          "Zero (tecido 100% limpo)",
          "Rápida e contínua"
        ],
        [
          "Marcação Tradicional com Giz/Caneta",
          "Boa (depende do traço)",
          "Alta (riscar a peça inteira)",
          "Lenta (tempo longo riscando)"
        ],
        [
          "Quilting Livre no 'Olhômetro'",
          "Variável (artesanal)",
          "Zero",
          "Média (exige muita experiência)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade contínua regulada",
      "needleType": "90/14 Quilting ponta cônica especial",
      "stabilizer": "Manta acrílica resinada",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Pesponto com passo constante de 2,5 mm a 3,0 mm"
    },
    "applications": [
      "Confecção de colchas de casal, edredons de luxo e mantas de patchwork",
      "Emenda precisa de matrizes divididas em bastidores múltiplos (Split Designs)",
      "Painéis artísticos têxteis e tapeçarias decorativas de grande escala",
      "Acabamento contínuo em fábricas de estofados e almofadas nobres"
    ],
    "troubleshootingTips": [
      "Se a luz do laser estiver fraca, limpe a lente de vidro com um cotonete embebido em álcool isopropílico",
      "Gire a rosca da lente frontal do laser para afinar o pontinho luminoso até ficar bem nítido no tecido",
      "Mantenha uma velocidade constante nas mãos para que o tamanho dos pontinhos fique uniforme"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Posicionador Laser de Ponto Cruz e Alinhamento de Enquadramento",
      "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
      "Acessórios & Bastidores",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-089",
      "guia laser",
      "quilting",
      "rastreador",
      "longarm",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LASER-GUIDED TEXTILE SYSTEMS: Optical Trajectory Projection, Longarm Pantographs & Calibration Dynamics. Salt Lake City, 2021.",
      "PARRISH, Gail. Precision Guidance Technologies in Continuous Quilting and Large-Scale Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Ligue a mira laser da sua máquina e posicione sobre um ponto marcado no tecido. Movimente o bastidor 1 cm para cada lado e volte ao ponto zero: observe a precisão luminosa do ponto e ganhe total segurança para fazer emendas de matrizes!",
    "quickSummary": "O feixe de luz laser que mostra exatamente onde a agulha vai bater para bordar colchas grandes sem errar a emenda.",
    "beginnerExplanation": "O guia laser é como uma 'mira' de luz vermelha ou verde que a máquina acende em cima do pano. Ele mostra exatamente onde a agulha vai furar antes de costurar, ajudando você a emendar desenhos grandes e fazer colchas inteiras com desenhos lindos sem deixar nada torto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-090-qualificacao-operacional-e-calibracao-periodica-de-maquinas",
    "code": "Q-090",
    "term": "Qualificação Operacional e Calibração Periódica de Máquinas (Operational Qualification - OQ Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim qualificatio (atribuição de conformidade técnica) e do árabe al-qālib (calibre/padrão métrico de calibração).",
    "summary": "Protocolo semestral estruturado de manutenção preventiva e metrologia mecânica para aferição da folga agulha-lançadeira, tensão das correias dentadas dos eixos X/Y, folga de barra de agulha e teste de repetibilidade geométrica.",
    "definition": "Qualificação Operacional e Calibração Periódica de Máquinas (Operational Qualification - OQ Protocol, Preventive Maintenance Metrology & Pantograph Repeatability Calibration) é a rotina técnica metrológica e de manutenção preventiva sistemática realizada a cada 6 meses ou 1.500 horas de operação em máquinas de bordar industriais e semiprofissionais. O protocolo avalia e recalibra parâmetros mecânicos críticos que sofrem desgaste progressivo: 1. Folga e sincronismo angular da lançadeira rotativa (198° a 202°); 2. Tensão dinâmica das correias dentadas dos servomotores X e Y (medida por frequencímetro sônico ou dinamômetro); 3. Altura e curso da barra de agulha (folga de 0,02 mm no guia de bronze); 4. Altura de descida do pé calcador; 5. Teste de repetibilidade geométrica de 100 repetições de coordenadas cartesianas sem desvio cumulativo (> 0,05 mm).",
    "technicalDetails": "Folga axial da lançadeira: 0,05 mm a 0,10 mm (medida com cálibre de lâminas / apalpador). Tensão da correia dentada GT2/HTD: 35 a 45 Hz de frequência de ressonância sônica. Folga radial da barra de agulha: < 0,03 mm. Desvio máximo de repetibilidade no teste circular de matriz padrão: < 0,08 mm de erro dimensional em 100.000 pontos. Lubrificação dos rolamentos lineares com graxa de lítio branca grau NLGI 2.",
    "construction": [
      "Cálubre de lâminas de espessura de precisão milesimal (0,05 mm a 1,00 mm)",
      "Relógio comparador centesimal com base magnética para medição de folgas axiais",
      "Medidor de tensão sônico de correias dentadas ou dinamômetro analógico de mola",
      "Matriz técnica de teste de calibração padronizada (círculos concêntricos e quadrados ortogonais)",
      "Registro documental de calibração (Logbook de Manutenção Preventiva do Ateliê)"
    ],
    "howItWorks": [
      "1. A máquina completa 6 meses de trabalho intenso no ateliê e é agendada para a 'Qualificação Operacional Semestral'.",
      "2. O técnico/operador retira a chapa de agulha e a caixa de bobina e limpa 100% dos resíduos de linha e óleo velho.",
      "3. Com o cálibre de lâminas de 0,08 mm, verifica a folga entre a ponta da lançadeira e a cava da agulha no grau 201° do volante.",
      "4. Mede a tensão das correias dentadas do pantógrafo X e Y, reapertando os esticadores até a frequência correta de 40 Hz.",
      "5. Lubrifica os eixos lineares com graxa de lítio e as barras de agulha com óleo mineral branco ISO 10.",
      "6. Carrega a Matriz Padrão de Calibração (um teste com círculos perfeitos e linhas finas) e borda a 950 PPM.",
      "7. Mede o bordado com paquímetro digital: os círculos fecham com zero desvio e as tensões ficam perfeitas, aprovando a máquina para mais 6 meses de produção pesada."
    ],
    "mainTypes": [
      "Calibração de Sincronismo e Folga de Lançadeira (Garante laçada perfeita sem pular pontos nem cortar linha)",
      "Calibração de Tensão de Correias do Pantógrafo (Garante contornos perfeitamente alinhados com o preenchimento)",
      "Qualificação Operacional Completa com Emissão de Relatório Técnico (Padrão industrial com rastreabilidade)"
    ],
    "characteristics": [
      "Zero quebras surpresa de máquinas no meio de pedidos urgentes de clientes",
      "Contornos de matrizes sempre perfeitamente encaixados sem frestas ou desvios",
      "Economia drástica de custos com consertos de emergência e peças quebradas",
      "Máquina operando com maciez, silêncio e precisão de fábrica por mais de 15 anos"
    ],
    "limitations": [
      "Ajustes de sincronismo da lançadeira devem ser feitos com ferramentas corretas e sem forçar parafusos",
      "Nunca aplicar graxa comum automotiva escura em mecanismos de bordado (usar apenas óleo mineral ISO 10 e graxa de lítio clara)",
      "Registrar todas as datas e peças trocadas no caderno de manutenção da máquina"
    ],
    "numberingSystem": [
      "Periodicidade: Semestral / 1.500 horas de uso",
      "Folga Agulha-Lançadeira: 0,05 mm a 0,10 mm",
      "Tensão de Correia: 35 a 45 Hz"
    ],
    "advantages": [
      "✔ Sua máquina nunca vai te deixar na mão na véspera de uma grande entrega",
      "✔ Seus bordados mantêm a mesma qualidade perfeita de quando a máquina era zero km",
      "✔ Evita que pequenos desajustes invisíveis quebrem peças caras dentro da máquina"
    ],
    "commonErrors": [
      "❌ Borda por 3 anos seguidos sem nunca fazer uma revisão ou ajuste preventivo na máquina",
      "❌ Esperar a máquina quebrar, travar ou fazer um barulho horrível para só então chamar o técnico",
      "❌ Deixar correias do pantógrafo frouxas, fazendo todos os círculos saírem ovais e contornos tortos"
    ],
    "voceSabia": "Indústrias que realizam a Qualificação Operacional preventiva periódica em suas máquinas de bordar reduzem o índice de paradas não programadas em mais de 85% em comparação com empresas que só consertam quando quebra!",
    "curiosidadeTecnica": "O desgaste natural de 0,05 mm na bucha de bronze da barra de agulha após 2.000 horas de uso altera o ângulo de captura da laçada em quase 3 graus, o suficiente para causar quebras de linha em alta velocidade se não for recalibrado.",
    "dicaArtrelados": "Faça o **Check-up Semestral do Ateliê Artrelados**: a cada 6 meses, reserve uma manhã de sábado para cuidar da sua máquina. Tire a chapa de agulha, aspire a poeira, coloque uma gotinha de óleo novo na lançadeira, confira se os parafusos do bastidor estão firmes e borde um teste de círculos e quadrados. Esse carinho garante que sua máquina dure a vida inteira sem dar dor de cabeça!",
    "comparisonTable": {
      "headers": [
        "Item de Inspeção",
        "Parâmetro Ideal",
        "Sintoma de Descalibração",
        "Ação de Calibração"
      ],
      "rows": [
        [
          "Folga da Lançadeira",
          "0,05 a 0,10 mm no grau 201°",
          "Pulos de ponto / Quebra de linha",
          "Ajustar parafusos da engrenagem da lançadeira"
        ],
        [
          "Tensão das Correias X/Y",
          "35 a 45 Hz (firme sem folga)",
          "Círculos viram ovais / Contorno torto",
          "Apertar o esticador da correia dentada"
        ],
        [
          "Altura do Calcador",
          "1,0 mm acima do tecido",
          "Pano sobe com a agulha (Flagging)",
          "Regular a porca de altura da barra do calcador"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade nominal plena após calibração",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão calibrado",
      "density": "Padrão"
    },
    "applications": [
      "Manutenção preventiva semestral em ateliês de pequeno, médio e grande porte",
      "Auditoria de qualidade antes de assumir contratos de fornecimento de longo prazo",
      "Diagnóstico metrológico de máquinas usadas antes da compra ou venda",
      "Padronização operacional de fábricas com múltiplas máquinas multiagulhas"
    ],
    "troubleshootingTips": [
      "Borde uma matriz de teste com círculos perfeitos: se o círculo fechar redondo e certinho, a máquina está calibrada",
      "Se o círculo sair ovalado ou com as pontas achatadas, a correia do eixo correspondente precisa ser esticada",
      "Mantenha um caderninho de anotações anotando a data da última troca de óleo e revisão"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Q-Factor e Amortecimento de Vibração Estrutural da Bancada",
      "Placa de Agulha (Needle Plate) e Chapa de Ponto com Orifício Redondo",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-090",
      "qualificacao operacional",
      "calibracao",
      "manutencao preventiva",
      "revisao semestral",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OPERATIONAL QUALIFICATION & METROLOGY IN TEXTILE MACHINERY: Preventive Calibration, Belt Tension Dynamics & Hook Timing. Munich, 2021.",
      "PARRISH, Gail. Systematic Calibration Protocols for Computerized Embroidery Equipment. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um círculo perfeito de 5 cm com ponto cheio e meça com uma régua nos dois sentidos: na vertical e na horizontal. Se as duas medidas derem exatamente 5,0 cm, parabéns: sua máquina está com a calibração de correias perfeita!",
    "quickSummary": "A revisão preventiva de 6 em 6 meses para regular correias, lançadeira e garantir que a máquina nunca quebre de surpresa.",
    "beginnerExplanation": "Assim como levamos o carro no mecânico para trocar o óleo e revisar os freios, a máquina de bordar também precisa de uma revisão preventiva a cada 6 meses! Ajustar as correias e a lançadeira garante que ela continue bordando tudo retinho, sem quebrar agulha e sem parar no meio do trabalho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-091-quina-viva-e-meia-esquadria-em-cantos-de-ponto-cheio",
    "code": "Q-091",
    "term": "Quina Viva e Meia-Esquadria em Cantos de Ponto Cheio (Mitred Corners & Sharp Angle Digitizing)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim cuneus (canto angular/quina) e do francês onglet / mitre (corte diagonal em meia-esquadria a 45 graus).",
    "summary": "Técnica fundamental de digitalização para cantos afiados e ângulos agudos (< 90°) em molduras e letras, dividindo o ponto cheio em duas colunas com junta diagonal perfeita (Mitre) ou sobreposição (Cap), evitando calombos duros de pontos acumulados.",
    "definition": "Quina Viva e Meia-Esquadria em Cantos de Ponto Cheio (Mitred Corner Digitizing, Cap Corners & Sharp Angle Satin Branching) é a regra geométrica e metodológica de programação de matrizes para direcionamento das linhas em ângulos fechados (menores ou iguais a 90°), como cantos de molduras, estrelas, brasões e letras capitais. Quando uma coluna de ponto cheio contorna uma quina viva de raio fechado sem fracionamento, os pontos internos giram como um leque hiperdenso acumulando dezenas de batidas no mesmo milímetro, enquanto o lado externo fica frouxo e ralo. A digitalização correta divide a quina viva em duas seções angulares conectadas por uma linha diagonal de 45° em meia-esquadria (*Mitre Joint*) ou com sobreposição nivelada (*Capped Corner*), garantindo pontas agulhadas afiadas, espessura constante e zero acúmulo de linha.",
    "technicalDetails": "Ângulo crítico para aplicação de meia-esquadria: < 75° a 90°. Densidade na junção de meia-esquadria: Redução de 20% com alternância de pontos intercalados para evitar emenda grossa. Tipo de quina 'Cap' (Sobreposta): Uma coluna passa reta e a segunda encosta nela perpendicularmente com arremate oculto. Tipo de quina 'Mitre' (Meia-esquadria): As duas colunas se encontram na bissetriz do ângulo com ângulo exato de 45°. Eliminação de calombo de linha: 100% eficaz.",
    "construction": [
      "Objeto de coluna de ponto cheio gerado com ferramenta de contorno vetorial (Coluna A / Coluna C)",
      "Divisor automático de cantos em meia-esquadria (Mitred Corner Tool) habilitado no software",
      "Compensação de encolhimento específica para a bissetriz do canto (+ 0,3 mm)",
      "Pesponto de amarração subjacente desenhado em formato de 'L' ou 'V' sem cruzar a diagonal",
      "Ângulo de ponto parametrizado para transição ortogonal suave nas duas pernas da moldura"
    ],
    "howItWorks": [
      "1. O programador precisa digitalizar uma moldura quadrada com borda de 4 mm de ponto cheio.",
      "2. Se ele apenas traçar um retângulo contínuo, as 4 quinas vão virar um nó amontoado de linha grossa dura.",
      "3. Ele seleciona o canto e ativa a opção 'Canto em Meia-Esquadria (Mitre)'.",
      "4. O software calcula a bissetriz a 45 graus e fatia o ponto cheio em duas metades perfeitas.",
      "5. A máquina borda o lado esquerdo descendo e para no corte diagonal; em seguida, borda o lado inferior encaixando os pontos exatamente na linha de 45°.",
      "6. O canto resultante fica com uma quina viva pontiaguda, afiada como desenho feito com régua e esquadro.",
      "7. A peça fica macia, plana, sem nenhum calombo ou dureza nos quatro cantos da moldura."
    ],
    "mainTypes": [
      "Canto em Meia-Esquadria (Mitred Corner - Corte em 45° clássico de moldura de quadro)",
      "Canto Sobreposto com Tampa (Capped Corner - Uma perna vai até o fim e a outra encosta reta)",
      "Canto em Leque com Pontos Intercalados (Fan Corner - Para cantos ligeiramente arredondados > 90°)"
    ],
    "characteristics": [
      "Pontas de molduras e estrelas perfeitamente pontiagudas e afiadas",
      "Eliminação definitiva de calombos grossos e duros de linha acumulada nos cantos",
      "Zero quebras de agulha e zero furos no tecido durante curvas angulares fechadas",
      "Acabamento estético de altíssimo requinte técnico e elegância visual"
    ],
    "limitations": [
      "Para ângulos muito agudos menores que 30°, prefira o canto sobreposto (Cap) em vez de meia-esquadria",
      "Não colocar pontos de amarração densos bem em cima da linha de corte diagonal do canto",
      "Ajustar a compensação de encolhimento para que a junção em 45° não abra uma fresta com o repuxo do tecido"
    ],
    "numberingSystem": [
      "Ângulo Crítico: ≤ 90 graus",
      "Ângulo da Linha de Junção: 45 graus (Bissetriz)",
      "Espessura Máxima de Coluna: 6,0 mm"
    ],
    "advantages": [
      "✔ Suas molduras, brasões e estrelas ficam com pontas perfeitas e afiadas como de gráfica",
      "✔ Acaba com aqueles nós grossos nos cantos que quebram agulhas e entortam o bastidor",
      "✔ Dá um aspecto profissional e impecável para qualquer desenho geométrico"
    ],
    "commonErrors": [
      "❌ Borda cantos de 90 graus em leque contínuo, criando um bolo de linha duro que parece um caroço",
      "❌ Deixar uma fresta branca aberta na diagonal por esquecer de colocar compensação de encolhimento",
      "❌ Tentar fazer meia-esquadria em curvas suaves redondas onde deveria ser um leque natural"
    ],
    "voceSabia": "A técnica de união em meia-esquadria (*Mitre Joint*) tem mais de 2.000 anos de história na marcenaria clássica romana e foi transportada para os primeiros códigos de computação gráfica de bordado nos anos 1980 pela Wilcom na Austrália!",
    "curiosidadeTecnica": "Em um canto vivo de 90° digitalizado em leque sem meia-esquadria, a densidade no vértice interno atinge mais de 12 pontos por milímetro linear, um aumento de mais de 400% na concentração de fio que deforma o tecido.",
    "dicaArtrelados": "Quando estiver criando molduras, brasões ou caixas de texto no seu programa de matrizes: **nunca faça o canto contínuo em curva fechada!** Use sempre a ferramenta de **Canto em Meia-Esquadria (Mitre)**. O programa faz um corte elegante a 45 graus como uma moldura de quadro de madeira: o bordado fica retinho, as pontas ficam afiadas e a máquina borda com a maior suavidade!",
    "comparisonTable": {
      "headers": [
        "Tipo de Canto",
        "Formato Visual da Ponta",
        "Acúmulo de Linha no Vértice",
        "Aspecto no Tecido"
      ],
      "rows": [
        [
          "Meia-Esquadria (Mitre 45°)",
          "Quina viva afiada e geométrica",
          "Zero (distribuição perfeita)",
          "Plano, fino e macio"
        ],
        [
          "Sobreposto (Capped Corner)",
          "Reto e robusto em 'T'",
          "Muito baixo",
          "Uniforme e estruturado"
        ],
        [
          "Leque sem Tratamento (Fan)",
          "Arredondado e deformado",
          "Altíssimo (> 400% de sobreposição)",
          "Duro, alto como caroço e repuxado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "0.38 mm com cantos fracionados"
    },
    "applications": [
      "Digitalização de molduras retangulares e quadradas em toalhas e monogramas",
      "Bordados geométricos, brasões de armas, medalhões e divisas militares",
      "Letras capitais com serifas angulares retas (fontes estilo Times New Roman e Serif)",
      "Bordados arquitetônicos, logomarcas corporativas e logotipos esportivos"
    ],
    "troubleshootingTips": [
      "Se a linha diagonal abrir uma pequena fresta após bordar, aumente a sobreposição (*Overlap*) em 0,3 mm no software",
      "Em letras pequenas com cantos menores que 2 mm, use canto sobreposto (Cap) para não perder definição",
      "Verifique sempre no simulador 3D se a linha diagonal está perfeitamente orientada para o vértice"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Ponto de Entrada e Saída (Lead-in / Lead-out)",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-091",
      "quina viva",
      "meia-esquadria",
      "mitred corner",
      "cantos",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ADVANCED VECTOR DIGITIZING: Mitred Corner Geometry, Angle Branching & Satin Interpolation. Sydney, 2021.",
      "PARRISH, Gail. Geometric Corner Treatments in Embroidery CAD: Mitre vs Cap Stitch Architecture. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe um quadrado de 4x4 cm no seu programa com borda de ponto cheio. No primeiro, deixe o canto padrão em leque; no segundo, aplique Meia-Esquadria a 45°. Borde os dois em um retalho e passe o dedo por cima dos cantos: sinta a diferença inacreditável de maciez e veja como a quina com meia-esquadria parece desenhada a laser!",
    "quickSummary": "O jeito correto de programar cantos de molduras cortados em 45 graus para as pontas ficarem bem afiadas e sem calombos.",
    "beginnerExplanation": "Sabe quando você vê uma moldura de quadro de madeira e repara que os cantos são cortados na diagonal certinho para encaixar? No bordado é a mesma coisa! Quando fazemos cantos de molduras cortados em diagonal (meia-esquadria), as pontas ficam bem afiadas e retinhas, sem virar aquele nó grosso de linha que quebra a agulha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-092-quociente-de-retracao-termica-de-entretelas-termocolantes",
    "code": "Q-092",
    "term": "Quociente de Retração Térmica de Entretelas Termocolantes (Thermal Shrinkage Coefficient & Fusible Interlining Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quotiens (coeficiente dimensional) e do grego thermos (calor de adesivação sob pressão).",
    "summary": "Estudo físico da contração dimensional diferencial de entretelas termocolantes e resinas de poliamida/polietileno sob o calor da prensa térmica (120°C a 160°C), evitando enrugamento e ondas no tecido após o bordado.",
    "definition": "Quociente de Retração Térmica de Entretelas Termocolantes (Thermal Shrinkage Coefficient, Fusible Interlining Dimensional Stability & Heat-Press Bonding Dynamics) é a medida percentual de encolhimento e deformação que uma entretela termocolante sofre ao ser submetida aos ciclos térmicos de colagem na prensa ou ferro (geralmente entre 130°C e 160°C por 10 a 15 segundos). Quando o coeficiente de retração térmica da entretela é superior ao coeficiente de retração do tecido hospedeiro (como seda, viscose, piquet ou microfibra), a entretela encolhe mais rápido que o tecido durante o resfriamento, gerando tensões internas que provocam rugas permanentes, bolhas (*Bubbling*), ondulações e perda de estabilidade dimensional no contorno do bordado.",
    "technicalDetails": "Coeficiente de retração térmica seguro: < 1,0% a 1,5% em ambos os eixos (trama e urdume). Ponto de fusão da resina adesiva de poliamida (PA): 115°C a 130°C / Resina de polietileno (PE): 130°C a 150°C. Pressão de prensagem recomendada: 2,5 a 3,5 bar (ou pressão firme e uniforme no ferro). Tempo de resfriamento estabilizador obrigatório: Mínimo de 20 minutos em repouso plano antes de enquadrar e bordar.",
    "construction": [
      "Substrato de não-tecido (TNT) de fibras longas de poliéster/viscose com pré-termofixação",
      "Camada de resina microponto (Microdot) de poliamida pura de alta pureza e baixo ponto de fusão",
      "Prensa térmica plana digital com controle de temperatura e temporizador de precisão",
      "Manta de teflon protetora para evitar contato direto da chapa quente com as fibras",
      "Mesa de resfriamento plana em madeira ou mármore para dissipação térmica rápida"
    ],
    "howItWorks": [
      "1. A bordadeira precisa bordar um logotipo fino no peito de uma camisa social de viscose delicada.",
      "2. Corta um pedaço de entretela termocolante de malha com resina microponto.",
      "3. Posiciona no avesso do tecido e aplica na prensa térmica a 135°C por 12 segundos com proteção de folha de teflon.",
      "4. A resina amolece e funde perfeitamente nas fibras sem contração agressiva.",
      "5. Ela retira a peça da prensa e deixa descansar em uma bancada plana por 20 minutos até esfriar 100%.",
      "6. A estrutura tecido-entretela atinge estabilidade dimensional molecular perfeita.",
      "7. Ao colocar no bastidor e bordar a 850 PPM, o tecido não enruga, não faz bolhas e o bordado fica impecável e liso como uma pintura."
    ],
    "mainTypes": [
      "Entretela Termocolante de Malha Bies (Com elasticidade multidirecional para malhas e camisas finas)",
      "Entretela Termocolante de Não-Tecido Rasgadeira (Para tecidos planos de algodão e sarja)",
      "Filme Termocolante de Proteção de Avesso - Touch Skin (Colado com ferro após o bordado para cobrir o avesso e proteger a pele do bebê)"
    ],
    "characteristics": [
      "Adesão perfeita e homogênea que transforma tecidos moles em uma base estável para bordar",
      "Eliminação de dobras, bolhas e ondas que aparecem após passar a ferro",
      "Proteção definitiva contra coceiras no avesso de roupas infantis",
      "Resistência a dezenas de lavagens domésticas sem descolar"
    ],
    "limitations": [
      "Nunca enquadrar ou bordar a peça imediatamente após tirar da prensa quente (esperar esfriar completamente)",
      "Regular a temperatura da prensa de acordo com a etiqueta do fabricante da entretela (calor excessivo queima a resina)",
      "Não utilizar vapor durante a colagem de entretelas termocolantes de resina seca"
    ],
    "numberingSystem": [
      "Taxa de Retração Segura: < 1,2%",
      "Temperatura de Fusão: 125°C a 140°C",
      "Tempo de Prensagem: 10 a 15 segundos"
    ],
    "advantages": [
      "✔ Garante que camisas sociais e roupas finas de viscose fiquem lisinhas e sem nenhuma ruga",
      "✔ Deixa o avesso de bodies de bebê ultra macio e sem pinicar a pele sensível da criança",
      "✔ Facilita o enquadramento de tecidos difíceis e escorregadios no bastidor"
    ],
    "commonErrors": [
      "❌ Passar a prensa com temperatura alta demais (ex: 200°C), queimando a resina e encolhendo a entretela toda",
      "❌ Colocar a peça no bastidor ainda quente logo após prensar, deformando o tecido",
      "❌ Usar entretela termocolante barata com resina de pó grosso que descola na primeira lavagem"
    ],
    "voceSabia": "A tecnologia das entretelas termocolantes com adesivos de micropontos foi inventada na Alemanha nos anos 1960 pela Freudenberg (criadora da marca Vilene) e substituiu completamente os antigos forros costurados à mão na alfaiataria mundial!",
    "curiosidadeTecnica": "A resina de poliamida microponto requer uma pressão específica de 3 bar para que o polímero líquido penetre exatamente 30% da profundidade das fibras do tecido, garantindo ancoragem mecânica sem transpassar para o lado direito da peça.",
    "dicaArtrelados": "Para fazer o **Avesso dos Sonhos para Bebês no Ateliê Artrelados**: depois que terminar de bordar aquele body de bebê fofinho, recorte as sobras de linha no avesso e cole um pedaço de **Entretela de Proteção Termocolante Macia (tipo Touch Skin)** com o ferro quente sem vapor por 10 segundos. O avesso fica macio como uma seda e a mamãe vai se apaixonar pelo cuidado com a pele do bebê!",
    "comparisonTable": {
      "headers": [
        "Tipo de Entretela",
        "Método de Fixação",
        "Estabilidade Dimensional",
        "Indicação de Uso"
      ],
      "rows": [
        [
          "Termocolante de Malha Microponto",
          "Prensa Térmica (130°C)",
          "Excelente (não repuxa)",
          "Camisas finas, viscose e malha fria"
        ],
        [
          "Termocolante de Proteção de Avesso",
          "Ferro Quente (140°C)",
          "Ultra Macia e Flexível",
          "Proteção de pele em enxovais de bebê"
        ],
        [
          "Entretela Comum Solta (sem cola)",
          "Apenas presa no bastidor",
          "Exige bastidor bem esticado",
          "Toalhas, jeans e tecidos firmes"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão adequado ao tecido",
      "stabilizer": "Termocolante termofixada",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Bordados em tecidos delicados propensos a enrugar (viscose, seda, cetim e cambraia)",
      "Proteção de avesso e toque suave em enxovais de recém-nascidos e pijamas",
      "Estruturação de colarinhos, punhos de camisa e carcelas de camisas polo",
      "Reforço invisível em tecidos stretch com elastano antes do bordado"
    ],
    "troubleshootingTips": [
      "Se a entretela descolar após a lavagem, aumente a pressão e o tempo de prensagem em 3 segundos",
      "Sempre use um papel manteiga ou tecido de algodão fino entre o ferro e a entretela para não sujar a base do ferro",
      "Deixe a peça esfriar deitada em uma mesa plana antes de pegar para enquadrar"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Tipos de Tecidos",
      "Técnicas de Bordado",
      "Acessórios & Bastidores",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-092",
      "entretela termocolante",
      "retracao termica",
      "prensa termica",
      "protecao de avesso",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FUSIBLE INTERLINING TECHNOLOGY: Thermal Shrinkage Dynamics, Microdot Resins & Dimensional Bonding. Weinheim, 2021.",
      "PARRISH, Gail. Heat-Bonded Stabilization in Apparel Embroidery: Resin Chemistry and Fabric Preservation. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido fino de viscose. Cole a entretela termocolante em um pedaço e deixe outro solto. Borde o mesmo monograma nos dois: veja como a parte termocolada fica lisinha como papel fotográfico, enquanto a solta fica cheia de ondinhas ao redor das letras!",
    "quickSummary": "O controle do calor ao colar entretelas termocolantes para o tecido nunca encolher nem ficar enrugado.",
    "beginnerExplanation": "A entretela termocolante é aquela que a gente cola com o ferro quente no avesso do pano para ele ficar firminho. Se o ferro estiver quente demais, a entretela encolhe e enruga todo o tecido! Usando a temperatura certa e deixando esfriar antes de bordar, a roupa fica lisinha e perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-093-quick-release-clamping-system-garras-de-fixacao-rapida",
    "code": "Q-093",
    "term": "Quick-Release Clamping System (Garras de Fixação Rápida para Calçados, Bolsas e Peças Estruturadas)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Acessórios & Bastidores",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quick-release clamping (grampo mecânico de desengate rápido por alavanca excêntrica).",
    "summary": "Dispositivo mecânico de aperto pantográfico por mordentes emborrachados e alavancas pneumáticas ou de ação rápida, permitindo fixar tênis, botas, cintos, mochilas pesadas e bolsas de couro sem aro tradicional.",
    "definition": "Quick-Release Clamping System (Pneumatic & Mechanical Quick-Clamp Workholding, Slim-Line Clamping & Footwear Embroidery Fixture) é a tecnologia de fixação para bordado computadorizado que elimina totalmente o aro de bastidor convencional, substituindo-o por mordentes de pressão mecânica com acionamento por alavanca de came (*Toggle Clamp*) ou pistões pneumáticos de ar comprimido. O sistema permite agarrar firmemente itens tridimensionais fechados e ultra rígidos que seriam impossíveis de enquadrar em bastidores normais (como línguas e laterais de tênis esportivos, botas de montaria, bolsas estruturadas de couro, cintos de segurança, mochilas com armação e malas de viagem), segurando o material com força de até 60 kgf sem amassar o produto e com troca em menos de 2 segundos.",
    "technicalDetails": "Força de aperto dos mordentes: 30 a 60 kgf ajustável por rosca micrométrica ou regulador de pressão de ar (4 a 6 bar). Janela útil de bordado: Módulos intercambiáveis de 6x6 cm até 20x20 cm. Tempo de travamento/desengate: < 2 segundos por alavanca de toque único. Altura livre de inserção: Até 80 mm para calçados de cano alto e mochilas estruturadas.",
    "construction": [
      "Chassi em duralumínio usinado em CNC de alta rigidez torsional",
      "Alavancas mecânicas de aperto rápido de ação rápida com articulação em aço temperado",
      "Mordentes superiores com almofadas de poliuretano vulcanizado antiderrapante intercambiáveis",
      "Braço de suporte tubular estreito para inserção profunda dentro de canos de botas e tênis",
      "Adaptadores de encaixe direto para o pantógrafo de máquinas industriais e semiprofissionais"
    ],
    "howItWorks": [
      "1. O ateliê recebe uma encomenda para bordar o nome de um atleta na lateral e língua de 20 pares de tênis de corrida.",
      "2. Como é impossível colocar um tênis fechado em um bastidor de plástico normal, o operador instala o sistema de *Clamping de Fixação Rápida* na máquina.",
      "3. Abre a língua do tênis, encaixa a base estreita do grampo por dentro do calçado.",
      "4. Puxa a alavanca de travamento rápido (*Quick-Release*): os mordentes emborrachados prendem a lateral do tênis instantaneamente com firmeza de aço.",
      "5. A máquina borda o logotipo com agulha forte 90/14 e linha poliéster a 750 PPM.",
      "6. Ao terminar, o operador apenas levanta a alavanca: o tênis se solta na mesma hora em 1 segundo.",
      "7. O tênis fica com o bordado impecável, sem nenhuma deformação ou marca na estrutura do calçado."
    ],
    "mainTypes": [
      "Grampo Clamping Mecânico Slim-Line (Com alavancas manuais rápidas para tênis, chuteiras e bolsas)",
      "Sistema de Clamping Pneumático Automático (Com acionamento por pedal de ar para indústrias de calçados)",
      "Grampos de Janela Rápida para Bolsos e Meias (Para itens tubulares ultra estreitos de difícil acesso)"
    ],
    "characteristics": [
      "Abertura de novos mercados altamente lucrativos (personalização de tênis, botas e malas caras)",
      "Fixação de peças grossas e duras que quebram bastidores de plástico comuns",
      "Troca e montagem ultrarrápida da peça em apenas 2 segundos",
      "Pressão firme e uniforme que impede o deslizamento do couro durante o bordado"
    ],
    "limitations": [
      "Exige atenção ao traçado (Trace) da máquina para garantir que a agulha não bata nas garras metálicas",
      "Requer agulhas reforçadas (calibre 90/14 ou ponta cunha de couro) para perfurar materiais grossos",
      "Custo de investimento superior em relação a bastidores convencionais"
    ],
    "numberingSystem": [
      "Tempo de Fixação: < 2 segundos",
      "Pressão de Aperto: 30 a 60 kgf",
      "Pressão Pneumática: 4 a 6 bar"
    ],
    "advantages": [
      "✔ Permite que seu ateliê personalize tênis, bolsas de couro, mochilas e malas cobrando preços premium",
      "✔ Nunca mais perca um serviço lucrativo por não conseguir colocar a peça no bastidor comum",
      "✔ Agiliza a produção de pedidos difíceis sem cansar as mãos do operador"
    ],
    "commonErrors": [
      "❌ Tentar forçar um tênis ou bolsa dura em um bastidor plástico comum, quebrando o aro do bastidor",
      "❌ Borda sem fazer a checagem de área (Trace), fazendo a agulha bater com tudo na garra de ferro",
      "❌ Apertar a garra com pressão excessiva sobre couros macios sem usar protetor de borracha"
    ],
    "voceSabia": "O sistema de clamping de fixação rápida para tênis foi desenvolvido originalmente para atender os calçados dos jogadores de futebol da Copa do Mundo nos anos 1990, permitindo bordar bandeiras de países e nomes em chuteiras já prontas!",
    "curiosidadeTecnica": "O mecanismo de alavanca de came (*Toggle Mechanism*) multiplica a força manual aplicada pelo operador por um fator de até 15 vezes no ponto de travamento mecânico, garantindo rigidez absoluta mesmo sob a vibração de 800 PPM da máquina.",
    "dicaArtrelados": "Se você quer se destacar da concorrência e cobrar muito mais caro por personalizações exclusivas: **ofereça bordados em tênis, chuteiras e bolsas de couro!** Com um dispositivo de **Garra de Fixação Rápida (Clamping)**, você segura qualquer peça dura sem sofrer e faz bordados que 99% dos outros ateliês dizem que 'é impossível de fazer'!",
    "comparisonTable": {
      "headers": [
        "Sistema de Fixação",
        "Capacidade para Tênis/Couro",
        "Tempo de Fixação",
        "Risco de Quebrar o Aro"
      ],
      "rows": [
        [
          "Clamping de Garras Rápidas",
          "100% Compatível e Firme",
          "2 segundos (alavanca)",
          "Zero (corpo de duralumínio)"
        ],
        [
          "Bastidor Magnético",
          "Bom para bolsas flexíveis",
          "4 segundos",
          "Zero"
        ],
        [
          "Bastidor Plástico Comum",
          "Incompatível / Impossível",
          "Impossível de fechar",
          "Altíssimo (racha o plástico)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM em materiais rígidos",
      "needleType": "90/14 SAN 1 ou ponta cunha LL/LR para couro",
      "stabilizer": "Entretela rasgadeira pesada 80g",
      "threadTension": "Superior: 120 gf / Bobina: 25 gf",
      "density": "Padrão com bom compensador"
    },
    "applications": [
      "Bordados personalizados em tênis casuais, esportivos, chuteiras e botas de couro",
      "Personalização de bolsas femininas estruturadas, carteiras e mochilas escolares",
      "Bordados em cintos de artes marciais, coleiras de cães e selaria equestre",
      "Itens tubulares estreitos com difícil abertura (mangas de jaquetas de motoqueiro)"
    ],
    "troubleshootingTips": [
      "Sempre execute o traçado da área (Trace) em velocidade lenta para ter 100% de certeza que o calcador não raspa na garra",
      "Use agulhas de ponta reforçada para furar as camadas de lona e borracha do tênis",
      "Cole uma fita de feltro adesiva nos mordentes para não marcar couros sensíveis"
    ],
    "relatedTerms": [
      "Acessórios & Bastidores",
      "Mecânica & Manutenção",
      "Quik-Snap e Bastidores Magnéticos de Fixação Rápida",
      "Tipos de Tecidos",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-093",
      "clamping",
      "garras de fixacao",
      "tenis",
      "bolsas",
      "calcados",
      "acessorios e bastidores",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SPECIALTY WORKHOLDING IN AUTOMATED EMBROIDERY: Clamping Fixtures, Footwear Mechanics & Articulated Arms. Chicago, 2021.",
      "PARRISH, Gail. Industrial Clamping Systems: Footwear, Heavy Luggage and Non-Standard Substrate Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Experimente segurar a língua de um tênis com a mão e imagine tentar colocar em um bastidor redondo comum. Agora veja fotos e vídeos de um sistema de clamping: perceba como a garra fina entra dentro do tênis com facilidade e abre um mundo novo de produtos para o seu ateliê!",
    "quickSummary": "O dispositivo com garras de metal que prende tênis, mochilas e bolsas de couro para bordar o que não cabe em bastidor comum.",
    "beginnerExplanation": "Sabe quando um cliente pede para bordar o nome dele em uma chuteira, tênis ou bolsa dura de couro que não cabe de jeito nenhum dentro do bastidor de plástico? O sistema de garras rápidas é um acessório de metal com alavanca que 'morde' a peça com força e firmeza em 2 segundos, permitindo que a máquina borde tênis e bolsas com facilidade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-094-quimica-de-solubilidade-de-entretelas-hidrossoluveis-de-pva",
    "code": "Q-094",
    "term": "Química de Solubilidade de Entretelas Hidrossolúveis de PVA (Polyvinyl Alcohol Water Dissolution Kinetics)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego khemeia (processo químico molecular) e do latim solubilis (dissolução completa em meio aquoso).",
    "summary": "Mecanismo termodinâmico de dissolução de filmes e não-tecidos de Álcool Polivinílico (PVA) em água morna (25°C a 40°C), técnicas de enxágue para rendas Richelieu e Free Standing Lace (FSL) e controle de goma residual.",
    "definition": "Química de Solubilidade de Entretelas Hidrossolúveis de PVA (Polyvinyl Alcohol Dissolution Kinetics, Hydro-Degradable Film Chemistry & FSL Rinsing Protocol) é o estudo e controle da dissolução macromolecular do polímero sintético biodegradável Álcool Polivinílico [CH₂CH(OH)]ₙ utilizado na fabricação de filmes plásticos transparentes e não-tecidos solúveis em água para bordado computadorizado. Quando imerso em água, as pontes de hidrogênio do PVA são clivadas pelas moléculas de H₂O, rompendo as cadeias poliméricas e dissolvendo a entretela em solução aquosa coloidal límpida. O controle da temperatura da água (ideal entre 25°C e 40°C), tempo de imersão e número de enxágues determina se o bordado ficará totalmente flexível e macio (como toalhas e roupas de bebê) ou com uma ligeira goma estruturante residual (essencial para que pingentes, brincos e rendas FSL fiquem armados e firmes).",
    "technicalDetails": "Grau de hidrólise do PVA para bordado: 88% a 92% (solúvel em água fria/morna em menos de 60 segundos). Temperatura ideal de dissolução: 25°C a 40°C (água morna acelera a dissolução em 4x em relação a água a 10°C). pH neutro: 6,5 a 7,5. Biodegradabilidade: 100% biodegradável em estações de tratamento de esgoto por ação de bactérias Pseudomonas. Espessuras padrão: Filme plástico de 20 a 40 micras (para topo de toalhas) / Não-tecido de 40 a 80 g/m² (para rendas soltas FSL).",
    "construction": [
      "Filme extrudado de polímero de PVA puro com textura em relevo gofrado (Embossed)",
      "Bacia plástica com água morna e corrente para imersão e enxágue",
      "Toalha felpuda limpa para prensagem e absorção do excesso de água",
      "Varal plano ou tela horizontal de secagem ao ar para preservação geométrica das rendas",
      "Secador de cabelo com ar morno para modelagem tridimensional de peças de renda"
    ],
    "howItWorks": [
      "1. A bordadeira finaliza um bordado de renda pura (Free Standing Lace) bordado apenas sobre entretela hidrossolúvel de PVA sem tecido.",
      "2. Retira a peça do bastidor e recorta o excesso externo de plástico com uma tesoura para economizar água.",
      "3. Mergulha a renda em uma bacia com água morna a 35°C por 90 segundos, movimentando suavemente com as mãos.",
      "4. O plástico transparente de PVA se dissolve completamente na água, tornando-se invisível.",
      "5. Para deixar a renda firminha e estruturada, ela faz apenas um enxágue rápido (deixando um restinho de 5% de goma natural do PVA nas linhas).",
      "6. Acomoda a renda sobre uma toalha plana para secar na sombra.",
      "7. Após secar, a renda fica deslumbrante, armada e perfeita para montar um brinco ou marcador de página!"
    ],
    "mainTypes": [
      "Filme Plástico Hidrossolúvel Fino (20 a 30 micras - Para colocar por cima de toalhas e veludos para a linha não afundar)",
      "Não-Tecido Hidrossolúvel Texturizado (40 a 80g - Parece um tecido branco e é a base perfeita para rendas FSL)",
      "Filme Hidrossolúvel Pesado (40 micras - Para monogramas vazados e rendas Richelieu em tecidos nobres)"
    ],
    "characteristics": [
      "Dissolução 100% limpa sem deixar fiapos, resíduos plásticos ou manchas nos fios",
      "Permite criar bordados que viram rendas puras no ar sem nenhum tecido por baixo",
      "Não agride o meio ambiente por ser um polímero atóxico e totalmente biodegradável",
      "Permite controlar a firmeza da renda de acordo com o tempo de lavagem"
    ],
    "limitations": [
      "Nunca manusear entretelas de PVA com as mãos molhadas ou suadas (vai grudar e derreter nos dedos)",
      "Guardar sempre em sacos plásticos fechados com sílica-gel para não absorver a umidade do ar",
      "Não usar água fervente (> 80°C), pois temperaturas extremas podem cristalizar certas resinas e endurecer os fios"
    ],
    "numberingSystem": [
      "Temperatura Ideal da Água: 25°C a 40°C",
      "Tempo Médio de Dissolução: 45 a 90 segundos",
      "Grau de Hidrólise do Polímero: 88% - 92%"
    ],
    "advantages": [
      "✔ Cria rendas de luxo, brincos bordados e peças Richelieu de tirar o fôlego",
      "✔ Faz os pontos ficarem por cima das toalhas felpudas sem afundar na felpa",
      "✔ Sai com facilidade com uma simples borrifada de água morna"
    ],
    "commonErrors": [
      "❌ Tentar dissolver a entretela em água gelada de inverno, demorando horas e deixando o bordado grudento",
      "❌ Lavar a renda FSL com sabão e excesso de água corrente, tirando toda a goma e deixando a renda mole e caída",
      "❌ Pegar no rolo de entretela solúvel com os dedos molhados de suor, estragando várias voltas do rolo"
    ],
    "voceSabia": "O Álcool Polivinílico (PVA) é tão seguro e biocompatível que também é utilizado na fabricação de cápsulas gelatinosas de remédios orais, colírios lubrificantes para os olhos e filmes solúveis de sabão líquido para máquinas de lavar!",
    "curiosidadeTecnica": "A cinética de dissolução do PVA segue a equação de difusão de Fick; o aumento da temperatura da água de 15°C para 35°C duplica a constante de difusão térmica, reduzindo o tempo de quebra das pontes de hidrogênio poliméricas de 4 minutos para apenas 45 segundos.",
    "dicaArtrelados": "O segredo de ouro para **Rendas Perfeitas (FSL) no Ateliê Artrelados**: quando for tirar a entretela solúvel da sua renda, **não enxágue demais!** Mergulhe a renda na água morna por 1 minutinho só até o plástico sumir e tire logo. Essa 'aguinha de goma' que fica na renda vai secar e deixar a sua renda durinha e armada para sempre, como se você tivesse engomado profissionalmente!",
    "comparisonTable": {
      "headers": [
        "Finalidade do Bordado",
        "Temperatura da Água",
        "Tempo de Enxágue",
        "Resultado Final do Toque"
      ],
      "rows": [
        [
          "Rendas e Brincos FSL",
          "Morna (35°C)",
          "Rápido (30 a 60 seg)",
          "Estruturado, durinho e armado"
        ],
        [
          "Toalhas de Banho e Enxoval de Bebê",
          "Morna / Corrente",
          "Abundante (lavagem completa)",
          "Ultra macio, flexível e sem goma"
        ],
        [
          "Richelieu em Linho Fino",
          "Morna (30°C)",
          "Médio (spray ou esponja)",
          "Macio com contornos definidos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "75/11 SES",
      "stabilizer": "PVA 40 micras ou Não-Tecido Solúvel 80g",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Rede estruturada em rendas FSL"
    },
    "applications": [
      "Produção de rendas de agulha autoportantes (Free Standing Lace - FSL)",
      "Bordados vazados Richelieu em toalhas de mesa e vestidos finos",
      "Camada superior de cobertura em toalhas de banho felpudas, veludos e moletons",
      "Brincos, pingentes, marcadores de página e coroas natalinas em renda pura"
    ],
    "troubleshootingTips": [
      "Para tirar o plástico de cima de uma toalha sem molhar a toalha inteira, borrife uma névoa de água e encoste um paninho seco",
      "Se a renda ficou mole demais depois de seca, dissolva um pedacinho de plástico solúvel em um copo de água morna e pincele na renda",
      "Deixe a renda secando em cima de uma folha plástica lisa para não grudar em fibras de toalha"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Técnicas de Bordado",
      "Quarentena de Insumos e Armazenamento Climatizado",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-094",
      "hidrossoluvel",
      "pva",
      "fsl",
      "rendas",
      "richelieu",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WATER-SOLUBLE POLYMERS IN TEXTILE MANUFACTURING: PVA Dissolution Kinetics, Environmental Biodegradation & FSL Protocols. Kyoto, 2021.",
      "PARRISH, Gail. Polyvinyl Alcohol Stabilization: Chemistry, Dissolution Control and Free-Standing Lace Mastery. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um pedaço de entretela plástica solúvel em um copo com água gelada e outro pedaço idêntico em um copo com água morna. Mexa com uma colher e cronometre: veja como no copo com água morna ela desaparece em segundos!",
    "quickSummary": "Como a água morna derrete a entretela transparente e como deixar as rendas durinhas e armadas.",
    "beginnerExplanation": "A entretela hidrossolúvel é aquela transparente de plástico mágico que a gente usa para fazer rendas e para o bordado não afundar nas toalhas. Quando você mergulha na água morna, ela derrete completamente sem deixar nenhum restinho! Se você lavar rapidinho, a renda seca durinha e perfeita como um brinco!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-095-quilting-com-efeito-trapunto-computadorizado",
    "code": "Q-095",
    "term": "Quilting com Efeito Trapunto Computadorizado (Automated Trapunto Quilting & High-Loft Relief)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do italiano trapunto (bordado acolchoado recheado em alto relevo) e do grego computare (programação matemática vetorial).",
    "summary": "Técnica nobre em etapas que utiliza dupla camada de manta acrílica (high-loft), pespontos de fixação, recorte seletivo no bastidor e micro-meandros densos de fundo (micro-stippling) para criar relevos esculturais dramáticos em colchas e quadros.",
    "definition": "Quilting com Efeito Trapunto Computadorizado (Computerized Trapunto Embroidery, Selective Loft Sculpting & Micro-Stippling Background Relief) é a versão automatizada no bastidor da técnica clássica italiana do século XIV de acolchoamento com enchimento seletivo. O processo ocorre em 3 fases sequenciais: 1. A máquina costura a linha de contorno do motivo principal (flores, arabescos ou brasões) sobre uma camada de manta acrílica grossa ou lã; 2. A bordadeira retira o bastidor e recorta com precisão todo o excesso de manta ao redor do motivo, mantendo o enchimento apenas dentro do desenho; 3. O tecido de topo e a manta de fundo são adicionados, e a máquina executa um micro-quilting ultradenso (*Micro-Stippling*) no fundo. A compressão do fundo faz com que o motivo recortado salte para a frente com um relevo tridimensional escultural de até 8 a 12 mm de altura.",
    "technicalDetails": "Gramatura da manta de enchimento do motivo: Manta acrílica High-Loft de 150 a 200 g/m² ou manta de lã natural. Gramatura da manta de base do sanduíche: Manta fina de algodão de 80 a 100 g/m². Densidade do micro-stippling de fundo: Espaçamento de 1,5 mm a 2,0 mm com ponto reto de 1,8 mm. Linha superior para o fundo: Monofilamento de poliamida transparente 100wt ou poliéster ultrafino 60wt na cor do tecido de fundo.",
    "construction": [
      "Tecido de topo nobre (linho puro, seda pura ou percal de algodão 400 fios)",
      "Camada primária de manta acrílica volumosa (High-Loft) para a área de relevo",
      "Camada secundária de manta plana de algodão para o sanduíche estrutural",
      "Tesoura curva de precisão para recorte rente da manta de trapunto",
      "Linha de pesponto solúvel em água (Wash-Away Thread) para as costuras temporárias da Fase 1"
    ],
    "howItWorks": [
      "1. A máquina borda o contorno de um medalhão imperial sobre uma camada de manta acrílica bem grossa e entretela solúvel usando linha solúvel em água.",
      "2. A bordadeira tira o bastidor da máquina e usa a tesourinha para cortar fora toda a manta que está em volta do medalhão.",
      "3. Coloca o tecido de seda por cima, adiciona uma manta fininha de algodão por baixo e monta o sanduíche completo.",
      "4. A máquina executa o contorno definitivo do medalhão com ponto triplo nobre.",
      "5. Em seguida, a máquina preenche todo o fundo ao redor do medalhão com meandros microscópicos densos (*Micro-Stippling*).",
      "6. As costurinhas densas esmagam e rebaixam o tecido de fundo por completo.",
      "7. Como a parte de dentro do medalhão tem a manta grossa extra e o fundo foi esmagado, o medalhão 'salta' para a frente em um relevo tridimensional exuberante e magnífico!"
    ],
    "mainTypes": [
      "Trapunto Clássico Monocromático (Bordado tom-sobre-tom em linho ou seda branca)",
      "Trapunto com Linha Solúvel (Costura temporária que desaparece na primeira lavagem)",
      "Trapunto Moderno Colorido (Combinação de relevo escultural com preenchimentos coloridos no centro)"
    ],
    "characteristics": [
      "O mais alto padrão de sofisticação e luxo artesanal em acolchoamento têxtil do mundo",
      "Relevo tridimensional profundo sem necessidade de enchimento manual com agulha de tapeçaria",
      "Contraste visual dramático entre o fundo rebaixado e a figura inflada",
      "Peças com valor de mercado de milhares de reais em galerias de arte e alta decoração"
    ],
    "limitations": [
      "Exige paciência e muita precisão na etapa de corte manual da manta ao redor do motivo",
      "Não cortar acidentalmente o tecido de base durante a remoção da manta excedente",
      "Ajustar a tensão da linha para não enrugar o tecido durante a execução do micro-stippling pesado"
    ],
    "numberingSystem": [
      "Altura do Relevo Escultural: 8 mm a 12 mm",
      "Espaçamento do Fundo (Stippling): 1,5 mm a 2,0 mm",
      "Gramatura da Manta de Trapunto: 150 a 200 g/m²"
    ],
    "advantages": [
      "✔ Cria peças de arte têxtil exclusivas com valor de venda extraordinariamente alto",
      "✔ Transforma colchas, almofadas e quadros em verdadeiras esculturas de tecido",
      "✔ Executa em 1 hora uma técnica nobre que antigamente levava semanas de trabalho manual"
    ],
    "commonErrors": [
      "❌ Cortar a manta de trapunto com tesoura cega, deixando rebarbas que deformam o contorno",
      "❌ Fazer o micro-stippling de fundo frouxo demais, perdendo o contraste dramático de relevo",
      "❌ Usar tecido sintético elástico que repuxa todo com a densidade do fundo"
    ],
    "voceSabia": "A técnica do Trapunto nasceu na Sicília no século XIV (como o famoso *Tristão e Isolda Quilt* exposto no Victoria and Albert Museum de Londres) e era considerada um símbolo de riqueza extrema da nobreza européia medieval!",
    "curiosidadeTecnica": "O contraste de relevo no Trapunto computadorizado é gerado pela diferença de pressão mecânica por área: o micro-stippling aplica mais de 2.000 pontos por decímetro quadrado esmagando a manta de fundo, enquanto o centro retém 100% do seu volume original.",
    "dicaArtrelados": "Para fazer um **Trapunto de Palácio Real no Ateliê Artrelados**: use uma linha bem fininha ou transparente para fazer as costurinhas miúdas de fundo (stippling). Quanto mais miudinhas e juntinhas forem as costuras do fundo, mais o seu desenho principal vai pular para fora da peça parecendo uma escultura almofadada de cinema!",
    "comparisonTable": {
      "headers": [
        "Técnica de Acolchoamento",
        "Altura do Relevo",
        "Complexidade de Execução",
        "Nível de Luxo"
      ],
      "rows": [
        [
          "Quilting Trapunto Computadorizado",
          "8 mm a 12 mm (Alto Relevo)",
          "Avançada (com recorte no bastidor)",
          "Luxo Supremo / Peça de Arte"
        ],
        [
          "Quilted Appliqué",
          "3 mm a 5 mm",
          "Intermediária",
          "Alto Luxo"
        ],
        [
          "Quilting Plano Convencional",
          "1 mm a 2 mm",
          "Básica a Intermediária",
          "Comercial Elegante"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 Microtex ou Quilting afiada",
      "stabilizer": "Entretela solúvel + Manta de algodão",
      "threadTension": "Superior ligeiramente firme",
      "density": "Stippling de 1.8 mm / Contornos precisos"
    },
    "applications": [
      "Colchas de casamento e enxovais de noiva de altíssimo padrão",
      "Painéis de parede para galerias de arte têxtil e tapeçarias decorativas",
      "Almofadas de veludo e linho para decoração de interiores de luxo",
      "Capas de livros memoriais, bíblias e caixas revestidas de tecido nobre"
    ],
    "troubleshootingTips": [
      "Use uma tesoura com ponta curva para cima para não correr o risco de furar a entretela de base",
      "Se usar linha solúvel na primeira etapa, certifique-se de não molhar a peça antes de terminar o bordado",
      "Passe a peça do avesso sobre uma toalha macia para não achatar o relevo tridimensional"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
      "Quilting com Guia Laser e Rastreador de Padrões",
      "Tipos de Tecidos",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-095",
      "trapunto",
      "quilting trapunto",
      "alto relevo",
      "escultura textil",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TRAPUNTO EMBROIDERY MASTERY: High-Loft Sculpting, Micro-Stippling Dynamics & Historical Techniques. Florence, 2021.",
      "PARRISH, Gail. Automated Trapunto & Dimensional Relief Architecture in Modern Machine Quilting. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um desenho de flor em Trapunto: borde na manta grossa, corte a volta, cubra com o tecido e faça o stippling ao redor. Passe a mão por cima dos relevos e sinta a textura escultural incrível que você acabou de criar na sua máquina!",
    "quickSummary": "A técnica nobre italiana que usa manta dupla recortada e fundo esmagado para o desenho saltar em alto relevo.",
    "beginnerExplanation": "O Trapunto é a técnica de bordado mais chique e luxuosa que existe: a gente coloca uma manta bem gordinha só dentro do desenho e a máquina costura o fundo todo bem apertadinho. O fundo fica bem baixinho e o desenho pula para a frente parecendo uma almofadinha esculpida no tecido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-096-quebra-de-tensao-e-mola-amortecedora-tira-linha",
    "code": "Q-096",
    "term": "Quebra de Tensão e Mola Amortecedora Tira-Linha (Thread Tension Relief & Check Spring Dynamics)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim crepare (alívio brusco de força) e do inglês check spring (mola amortecedora e estabilizadora da laçada do fio).",
    "summary": "Mecânica e calibração de curso da Mola Tira-Linha (Check Spring / Take-Up Spring) e discos tensores primários para absorver o choque dinâmico do fio na desaceleração do estica-fio, evitando laçadas frouxas na frente do bordado.",
    "definition": "Quebra de Tensão e Mola Amortecedora Tira-Linha (Check Spring Dynamics, Dynamic Tension Relief & Thread Take-Up Damping) é o sistema mecânico de absorção inercial e compensação de folga do fio superior em máquinas de bordar computadorizadas. Durante a subida e descida violenta do estica-fio (*Take-Up Lever*) a 1.000 PPM, ocorrem milissegundos de folga crítica na linha logo antes da agulha penetrar no tecido. A mola tira-linha (*Check Spring* ou mola amortecedora) mantém o fio sob uma suave tensão constante de 3 a 5 gramas-força, recolhendo a folga e soltando o fio exatamente no instante em que a ponta da agulha toca o tecido; se a mola estiver partida, frouxa ou com curso desregulado, o fio sobra solto na frente do tecido, formando laçadas feias (*Loops*), nós no olho da agulha ou quebra repetitiva por tranco.",
    "technicalDetails": "Curso angular de trabalho da mola tira-linha: 7 mm a 10 mm de deslocamento vertical (ou 30° a 45° de curso rotativo). Força de retorno da mola: 3 a 8 gf (regulável pelo giro do eixo do bloco tensor). Ponto de liberação mecânica: A mola deve tocar no batente inferior exatamente quando a ponta da agulha penetra 1,0 mm a 2,0 mm no tecido. Efeito de descalibração: Laçadas na face superior do bordado quando frouxa; quebra de agulha e linha quando rígida demais.",
    "construction": [
      "Mola helicoidal em aço mola fosfatizado com haste prolongada em gancho",
      "Eixo ranhurado micrométrico de regulagem de pré-carga de torção",
      "Batente excêntrico limitador de curso descendente da mola",
      "Discos tensores duplos em aço cromo espelhado com mola cônica principal",
      "Sensor eletrônico rotativo de quebra de linha integrado ao giro da polia tensora"
    ],
    "howItWorks": [
      "1. A máquina está bordando a 950 PPM executando uma sequência de saltos e pontos curtos.",
      "2. O estica-fio sobe rapidamente para puxar a laçada da lançadeira e fechar o ponto.",
      "3. Em seguida, o estica-fio desce com aceleração brusca: uma sobra de 15 mm de linha é liberada em menos de 10 milissegundos.",
      "4. A haste da *Mola Tira-Linha* flexiona para cima, absorvendo instantaneamente a folga do fio.",
      "5. A linha permanece firme e esticada sem enrolar no pé calcador.",
      "6. No instante exato em que a agulha penetra no tecido, a mola atinge o batente inferior e libera o fio suavemente para a lançadeira.",
      "7. Os pontos são formados sem nenhuma laçada frouxa na frente da peça, com brilho uniforme e tensão impecável."
    ],
    "mainTypes": [
      "Mola Tira-Linha Convencional de Haste Curva (Padrão para máquinas industriais de bordar)",
      "Mola de Tensão com Amortecedor de Silicone (Para máquinas ultrarrápidas de 1.200 PPM)",
      "Sistema de Alívio Pneumático de Tensão (Com solenoide de abertura rápida dos discos para saltos)"
    ],
    "characteristics": [
      "Eliminação completa de laçadas frouxas (*Loops*) e 'cabelinhos' de linha na frente do bordado",
      "Amortecimento suave de trancos que evita a quebra de linhas finas e sensíveis",
      "Garantia de que a linha não escape do olho da agulha durante paradas e cortes",
      "Ponto de bordado com definição nítida, plana e altamente profissional"
    ],
    "limitations": [
      "Nunca tentar desentortar a haste da mola com alicate comum sem ter a peça reserva",
      "Ajustar a força da mola com suavidade: ela deve ser leve o suficiente para ceder com a passagem do fio",
      "Limpar fiapos e poeira acumulados dentro do bloco tensor a cada troca de agulha"
    ],
    "numberingSystem": [
      "Curso da Mola: 7 mm a 10 mm",
      "Força de Tensão: 3 a 8 gf",
      "Ponto de Batente: Agulha a 1-2 mm de penetração"
    ],
    "advantages": [
      "✔ Acaba com aquelas laçadas soltas e pontinhos frouxos que estragam o visual do bordado",
      "✔ Permite bordar com linhas delicadas (como rayon e metálicas) sem arrebentar",
      "✔ Garante que a linha sempre entre na agulha no ângulo perfeito a cada batida"
    ],
    "commonErrors": [
      "❌ Continuar bordando com a mola tira-linha quebrada, criando nós gigantescos embaixo do tecido",
      "❌ Apertar a mola tão dura que ela não flexiona, quebrando a linha toda vez que o estica-fio sobe",
      "❌ Deixar o trajeto da linha passar por fora da haste da mola amortecedora por distração"
    ],
    "voceSabia": "A mola tira-linha foi inventada no século XIX por Elias Howe e Isaac Singer e permanece até hoje como uma das peças de engenharia mecânica mais elegantes e indispensáveis de todas as máquinas de costura e bordado do planeta!",
    "curiosidadeTecnica": "A mola tira-linha oscila mais de 60.000 vezes por hora durante o trabalho normal de uma máquina de bordar; para suportar essa fadiga mecânica extrema sem quebrar, o arame de aço recebe tratamento térmico de revenimento especial a 300°C.",
    "dicaArtrelados": "Se você notar que o seu bordado está ficando com umas **laçadinhas soltas de linha na frente** (como se fossem pequenos laços frouxos) mesmo com a tensão apertada: **olhe para a molinha fininha que fica perto dos discos tensores!** Veja se ela está subindo e descendo bonitinha quando a linha puxa. Se ela estiver travada ou a linha escapou dela, basta repassar a linha engatando na molinha para o bordado voltar a ficar lisinho!",
    "comparisonTable": {
      "headers": [
        "Estado da Mola Tira-Linha",
        "Comportamento do Fio",
        "Aspecto Visual no Tecido",
        "Risco de Quebra"
      ],
      "rows": [
        [
          "Regulada e Ativa (3-5 gf)",
          "Folga absorvida instantaneamente",
          "Pontos perfeitos, planos e nítidos",
          "Zero quebra por tranco"
        ],
        [
          "Frouxa ou Quebrada",
          "Linha sobra solta na descida",
          "Laçadas frouxas (Loops) na frente",
          "Embolamento no olho da agulha"
        ],
        [
          "Muito Apertada / Travada",
          "Tranco seco a cada subida do estica-fio",
          "Pontos repuxados e deformados",
          "Quebra constante de linha fina"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão calibrado até 1.000 PPM",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Mola regulada para 5 gf",
      "density": "Padrão"
    },
    "applications": [
      "Manutenção e ajuste de precisão em blocos tensores de máquinas de bordar",
      "Eliminação de defeitos visuais de laçadas frouxas em tecidos escuros",
      "Regulagem fina para bordados com fios metálicos e linhas de rayon frágeis",
      "Revisão técnica de cabeçotes industriais multiagulhas"
    ],
    "troubleshootingTips": [
      "Empurre a pontinha da mola com o dedo: ela deve subir livre e voltar suavemente para a posição inicial",
      "Se a mola estiver presa, desmonte os pratinhos e limpe os fiapos de linha com uma escovinha seca",
      "Gire o parafuso central do tensor 1/4 de volta para regular a altura da haste se necessário"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio",
      "Linha de Bordar 40wt",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-096",
      "mola tira-linha",
      "check spring",
      "tensao dinamica",
      "lacadas",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MECHANICS OF THREAD TENSION & CHECK SPRING DYNAMICS: High-Speed Inertia Damping & Loop Formation. Stuttgart, 2021.",
      "PARRISH, Gail. Take-Up Dynamics and Check Spring Calibration in Industrial Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Passe a linha superior na sua máquina observando com atenção o momento em que ela engata na molinha fina do tensor. Puxe o fio com a mão e veja a molinha subir e descer como um pequeno amortecedor: veja a engenharia perfeita trabalhando a favor do seu bordado!",
    "quickSummary": "A molinha delicada perto do botão de tensão que amortece o fio para ele nunca sobrar solto nem dar laçadas.",
    "beginnerExplanation": "A mola tira-linha é como um pequeno 'amortecedor' de carro para a linha de bordar! Toda vez que a máquina costura bem rápido, essa molinha puxa a folga da linha para que ela fique sempre esticadinha e não crie laços frouxos feios na frente do desenho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-097-quociente-de-friccao-do-fio-e-lubrificacao-por-parafina-silicone",
    "code": "Q-097",
    "term": "Quociente de Fricção do Fio e Lubrificação por Parafina/Silicone (Thread Friction & Lubrication Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim frictio (atrito superficial de contato) e do grego paraffina / silikon (óleos e ceras de deslizamento térmico).",
    "summary": "Física do coeficiente de atrito dinâmico do fio de bordar (poliéster/viscose/metálico) e uso controlado de óleos de silicone e ceras de parafina de grau têxtil para reduzir o aquecimento no olho da agulha e eliminar quebras a 1.000 PPM.",
    "definition": "Quociente de Fricção do Fio e Lubrificação por Parafina/Silicone (Dynamic Thread Friction Coefficient, Silicone Emulsion Finishing & Dry Wax Lubrication Protocol) é o controle das propriedades tribológicas da superfície externa dos fios de bordar. Durante o ciclo de costura em alta velocidade, o fio desliza mais de 30 a 50 vezes pelo minúsculo orifício de aço do olho da agulha antes de ser inserido no tecido. Sem lubrificação adequada (teor de cera/óleo entre 2,5% e 4,0% em peso), o atrito gera calor excessivo, estática e desfiamento dos filamentos. A aplicação controlada de emulsões de silicone fluidas ou ceras secas especiais de parafina reduz o coeficiente de atrito dinâmico (μ) de 0,35 para menos de 0,15, permitindo que fios difíceis (metálicos, fios grossos ou poliéster de alta velocidade) corram com máxima fluidez e zero quebras.",
    "technicalDetails": "Coeficiente de atrito dinâmico (μ) ideal: 0,12 a 0,16. Teor de lubrificante industrial em fios nobres (Madeira, Polyneon, Isacord): 3,0% a 3,8% de emulsão de polidimetilsiloxano (PDMS) e cera microcristalina. Viscosidade do silicone líquido para ateliê: 50 a 100 cSt (grau médico/têxtil puro, 100% volátil e sem manchar tecidos). Resistência térmica: Suporta até 260°C sem carbonizar no olho da agulha.",
    "construction": [
      "Cone de linha com acabamento industrial pré-lubrificado de fábrica",
      "Almofada de lubrificação de feltro (Thread Lubricator Box) acoplada na guia da máquina",
      "Óleo de silicone 100% puro para bordado (não inflamável e sem cheiro)",
      "Redinha de proteção de cone de linha com trama de retenção elástica",
      "Conta-gotas dosador de precisão para aplicação de microgotas no topo do cone"
    ],
    "howItWorks": [
      "1. A bordadeira precisa bordar um logotipo dourado com linha metálica pura em 50 jaquetas de couro a 800 PPM.",
      "2. A linha metálica sem lubrificação quebra a cada 30 segundos devido ao atrito da fita metálica com a agulha quente.",
      "3. A bordadeira aplica 3 gotinhas de óleo de silicone puro de bordado no topo do cone e faz o fio passar por uma almofadinha de feltro lubrificada na haste guia.",
      "4. Ao passar pela almofada, o fio recebe uma película invisível microscópica de silicone.",
      "5. O atrito no olho da agulha é reduzido em 60% e a temperatura de contato cai pela metade.",
      "6. A linha metálica desliza suave como seda pelo olho da agulha.",
      "7. A máquina borda as 50 jaquetas sem nenhuma quebra de linha sequer, entregando um brilho metálico exuberante e perfeito!"
    ],
    "mainTypes": [
      "Lubrificação de Fábrica por Cera Seca Microcristalina (Padrão de alta tecnologia dos fios de poliéster modernos)",
      "Óleo de Silicone Líquido para Almofada Guia-Fio (Para aplicação em ateliê em linhas metálicas e fios rebeldes)",
      "Spray Lubrificante Seco de Teflon/Silicone para Cones Difíceis (Névoa rápida para cones ressecados)"
    ],
    "characteristics": [
      "Redução de até 90% nas quebras de linhas metálicas, fios grossos e especiais",
      "Preservação do brilho natural e integridade estrutural das fibras do fio",
      "Não mancha, não engordura e evapora sem deixar resíduos no tecido do cliente",
      "Redução do aquecimento da agulha durante bordados contínuos de alta densidade"
    ],
    "limitations": [
      "NUNCA usar óleo comum de motor ou óleo de máquina direto no cone de linha (vai manchar a roupa do cliente para sempre)",
      "Aplicar apenas 2 ou 3 gotas de silicone próprio no topo do carretel (nunca encharcar o cone)",
      "Usar apenas silicone 100% puro têxtil formulado especificamente para bordado"
    ],
    "numberingSystem": [
      "Coeficiente de Fricção: μ < 0,15",
      "Teor de Lubrificante: 3,0% a 3,8% em peso",
      "Viscosidade: 50 a 100 cSt"
    ],
    "advantages": [
      "✔ Faz linhas metálicas e douradas bordarem lisas e macias como se fossem linhas comuns de poliéster",
      "✔ Salva cones de linhas antigas que estavam ressecadas e quebrando à toa",
      "✔ Mantém a agulha mais fria e preserva o mecanismo da máquina"
    ],
    "commonErrors": [
      "❌ Pingar óleo de máquina de costura amarelo no cone de linha, manchando a camisa do cliente",
      "❌ Encharcar o cone de silicone até escorrer, fazendo a linha patinar nos discos tensores",
      "❌ Desistir de bordar com linha metálica por não saber o segredo do silicone de bordado"
    ],
    "voceSabia": "Os grandes fabricantes mundiais de fios de bordar aplicam o lubrificante de silicone em alta velocidade através de discos de cerâmica microporosa durante o enrolamento final a mais de 100 km/h na fábrica!",
    "curiosidadeTecnica": "A presença da película de silicone de 2 micras na superfície do fio dissipa o calor por efeito de filme fluido de Navier-Stokes, impedindo que a temperatura do olho da agulha atinja o ponto de fusão do poliéster (255°C).",
    "dicaArtrelados": "O maior segredo para **Bordar Linha Dourada e Metálica sem Sofrer no Ateliê Artrelados**: pingue **apenas 2 gotinhas de Silicone Líquido para Bordado** no topo do cone de linha metálica antes de começar a bordar e use uma agulha especial com buraquinho grande (calibre 90/14 de Titânio ou Metallic)! A linha corre que nem manteiga e você vai bordar ouro com a maior facilidade do mundo!",
    "comparisonTable": {
      "headers": [
        "Condição do Fio",
        "Atrito no Olho da Agulha",
        "Taxa de Quebra a 800 PPM",
        "Risco de Manchar o Tecido"
      ],
      "rows": [
        [
          "Fio Lubrificado com Silicone Têxtil",
          "Baixíssimo (μ = 0,14)",
          "< 1 quebra por 100.000 pontos",
          "Zero (silicone 100% puro volátil)"
        ],
        [
          "Linha Metálica sem Lubrificação",
          "Altíssimo (μ = 0,42)",
          "Quebras frequentes a cada 2 minutos",
          "Zero"
        ],
        [
          "Linha com Óleo de Máquina Comum",
          "Baixo",
          "Instável (suja os tensores)",
          "Crítico (mancha a roupa com graxa amarela)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM em metálicas",
      "needleType": "90/14 Metallic ou Topstitch de olho largo",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior ligeiramente frouxa (90 - 100 gf)",
      "density": "0.45 mm (mais aberta para fios grossos)"
    },
    "applications": [
      "Bordados luxuosos com linhas metálicas douradas, prateadas e holográficas",
      "Trabalhos em alta velocidade (1.000 PPM) em tecidos pesados de sarja e couro",
      "Recuperação de cones de linhas ressecados guardados há muito tempo no ateliê",
      "Bordados industriais com fios de alta tenacidade e fios retardantes de chama (Nomex)"
    ],
    "troubleshootingTips": [
      "Use uma redinha de malha no cone de linha metálica para impedir que o fio caia e laçar na base",
      "Se a linha estiver desfiando, troque a agulha para uma agulha de Topstitch que tem o olho 3x maior",
      "Passe uma gotinha de silicone na ponta dos dedos e passe no primeiro metro de linha antes de começar"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Linha de Bordar 40wt",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Mecânica & Manutenção",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-097",
      "lubrificacao de linha",
      "silicone textil",
      "linha metalica",
      "friccao",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TRIBOLOGY OF EMBROIDERY THREADS: Silicone Emulsion Physics, Dynamic Friction & High-Speed Needle Heat Dissipation. Aachen, 2021.",
      "PARRISH, Gail. Thread Chemistry and Lubrication: Metallic, Rayon and Polyester Performance Optimization. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de linha metálica e puxe entre os dedos secos: sinta como ela parece áspera. Agora passe uma microgotinha de silicone nos dedos e puxe de novo: sinta a maciez e o deslizamento instantâneo que acabam com as quebras na máquina!",
    "quickSummary": "O uso de gotinhas de silicone especial para a linha correr macia pela agulha sem esquentar nem arrebentar.",
    "beginnerExplanation": "Linhas brilhantes douradas e metálicas são lindas, mas às vezes agarram na agulha e quebram porque esquentam no atrito. Pingar duas gotinhas de um silicone especial próprio para bordado no cone faz a linha deslizar macia como manteiga pelo buraquinho da agulha sem arrebentar nunca mais!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-098-quilting-com-ponto-grao-de-areia-micro-stippling",
    "code": "Q-098",
    "term": "Quilting com Ponto Grão de Areia / Micro-Stippling (Micro-Stippling Digitizing & Background Flattening)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do português grão de areia (textura pontilhada hiperfina) e do inglês micro-stippling (meandros microscópicos de acolchoamento contínuo sem cruzamentos).",
    "summary": "Técnica de programação e costura de meandros curvos microscópicos e aleatórios (com passo de 1,2 mm a 1,8 mm) que esmagam o tecido e a manta de fundo, criando textura de fundo rebaixada para destacar monogramas e arabescos em alto relevo.",
    "definition": "Quilting com Ponto Grão de Areia / Micro-Stippling (Micro-Stippling Digitizing, Pebble Quilting & Background Compression Texture) é o método vetorial de preenchimento ornamental de áreas negativas em matrizes de bordado computadorizado. O algoritmo gera uma linha contínua de pespontos curtos sinuosos e ultra-fechados que serpenteiam por todo o fundo ao redor do desenho principal sem nunca se cruzarem (*Non-Crossing Meander*), com raio de curva inferior a 1,5 mm. Essa densidade geométrica compacta comprime a manta acrílica e o tecido de fundo uniformemente, criando uma textura fosca rebaixada semelhante a grãos de areia fina que projeta as partes em ponto cheio ou aplique para a frente em relevo tridimensional destacado.",
    "technicalDetails": "Comprimento do ponto de pesponto: 1,5 mm a 1,8 mm. Raio médio dos meandros/círculos: 1,2 mm a 2,0 mm. Densidade por decímetro quadrado: ~1.800 a 2.500 pontos/dm². Fio recomendado: Fio fino 60wt de poliéster ou filamento invisível 100wt tom-sobre-tom. Compensação de contração da área de fundo: + 1,0 mm nos limites externos devido ao repuxo da manta.",
    "construction": [
      "Objeto de preenchimento automático de meandros (Stippling Tool) parametrizado no software",
      "Filtro de não-cruzamento de trajetória para evitar nós de linha",
      "Tricoline de algodão nobre com manta acrílica de baixa gramatura (R1)",
      "Agulha de ponta fina afiada calibre 70/10 Microtex ou 75/11 Quilting",
      "Entretela de suporte de algodão de 80g para evitar deformação do bastidor"
    ],
    "howItWorks": [
      "1. A bordadeira deseja criar um painel de nascimento de luxo com o nome do bebê e uma coroa no centro.",
      "2. No programa de digitalização, ela cria o nome em ponto cheio de 4 mm e a coroa em aplique.",
      "3. Seleciona a área vazia de fundo ao redor dos desenhos e aplica a ferramenta 'Micro-Stippling / Grão de Areia' com espaçamento de 1,6 mm.",
      "4. A máquina borda o fundo com uma linha fina bege exatamente da mesma cor do linho.",
      "5. A linha costura milhares de ondinhas pequenininhas, esmagando o linho e a manta de fundo de forma uniforme.",
      "6. Em seguida, borda o nome e a coroa com linha dourada brilhante.",
      "7. O resultado é um contraste visual espetacular: o fundo fica com uma textura aveludada rebaixada e o nome dourado salta para fora da moldura com riqueza de detalhes!"
    ],
    "mainTypes": [
      "Micro-Stippling Clássico em Meandros Livres (Curvas aleatórias que lembram quebra-cabeças microscópicos)",
      "Pebble Quilting / Grão de Areia em Micro-Círculos (Pequenas pedrinhas redondas coladas umas nas outras)",
      "Echo Micro-Stippling (Meandros que acompanham o formato do desenho central em ondas concêntricas)"
    ],
    "characteristics": [
      "Efeito visual de profundidade e luxo incomparável em qualquer peça bordada",
      "Esmagamento uniforme da manta sem criar pregas ou enrugamentos tortos",
      "Caminho contínuo de costura com zero cortes de linha durante todo o preenchimento de fundo",
      "Acabamento plano e sedoso ao toque que valoriza monogramas e apliques"
    ],
    "limitations": [
      "Ajustar a tensão da linha ligeiramente frouxa para não enrugar o bastidor com a alta contagem de pontos",
      "Sempre usar agulhas bem afiadas (Microtex) para furar o sanduíche com suavidade",
      "Não utilizar linhas grossas de 30wt ou 40wt escuras no fundo (prefira linhas finas tom-sobre-tom)"
    ],
    "numberingSystem": [
      "Comprimento do Ponto: 1,5 mm a 1,8 mm",
      "Espaçamento entre Linhas: 1,2 mm a 2,0 mm",
      "Título do Fio Ideal: 60wt / 100wt"
    ],
    "advantages": [
      "✔ Transforma panos de prato, almofadas e quadros em peças de boutique de alto valor",
      "✔ Faz nomes e figuras saltarem em relevo sem precisar de espuma EVA",
      "✔ Cria um fundo aveludado e elegante que cobre qualquer transparência do tecido"
    ],
    "commonErrors": [
      "❌ Fazer os meandros grandes demais (ex: 5 mm), parecendo uma costura frouxa e descuidada",
      "❌ Usar linha de cor contrastante no fundo que briga visualmente com o desenho principal",
      "❌ Deixar o tecido frouxo no bastidor, fazendo o fundo encolher e repuxar tudo no final"
    ],
    "voceSabia": "A técnica de micro-stippling era feita 100% à mão pelas mestras de acolchoamento da Inglaterra no século XIX, que passavam até 6 meses fazendo cada pontinho minúsculo com agulha e dedal para presentear bebês da realeza!",
    "curiosidadeTecnica": "O algoritmo de micro-stippling utiliza uma variação da curva de Peano fractal; ele preenche um espaço bidimensional através de uma curva unidimensional contínua de comprimento infinito sem nunca se auto-interceptar.",
    "dicaArtrelados": "O segredo de boutique para o **Ponto Grão de Areia no Ateliê Artrelados**: use sempre no fundo uma linha **exatamente da mesma cor do tecido** (ou um tom meio pontinho mais escuro) e preferencialmente uma linha fininha (fio 60wt)! O fundo vai parecer um veludo fosco luxuoso e o seu bordado colorido no centro vai brilhar que nem uma joia!",
    "comparisonTable": {
      "headers": [
        "Estilo de Fundo",
        "Densidade de Pontos",
        "Efeito no Desenho Principal",
        "Estilo Visual"
      ],
      "rows": [
        [
          "Micro-Stippling / Grão de Areia",
          "Alta e uniforme",
          "Máximo relevo e destaque 3D",
          "Luxuoso, aveludado e clássico"
        ],
        [
          "Quilting em Linhas Retas (Grid)",
          "Média",
          "Relevo geométrico moderado",
          "Moderno e contemporâneo"
        ],
        [
          "Fundo Liso sem Quilting",
          "Nenhuma",
          "Plano e sem contraste de relevo",
          "Simples e comercial"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "70/10 Microtex ou 75/11 Quilting",
      "stabilizer": "Entretela de algodão 80g + Manta R1 fina",
      "threadTension": "Superior: 100 gf (suave) / Bobina: 22 gf",
      "density": "Passo constante de 1.6 mm"
    },
    "applications": [
      "Quadros e bastidores de maternidade personalizados de alto padrão",
      "Almofadas decorativas e colchas de patchwork de luxo",
      "Panos de copa gourmet e jogos americanos estruturados",
      "Medalhões religiosos, monogramas de casamento e capas de álbum"
    ],
    "troubleshootingTips": [
      "Se o tecido estiver repuxando nos cantos, adicione uma camada extra de entretela rasgadeira por baixo",
      "No software, desmarque a opção de 'Permitir Cruzamentos de Linha' para evitar bolinhas de pontos",
      "Passe a ferro com vapor suave pelo avesso sobre uma toalha fofa para assentar os pontos"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Técnicas de Bordado",
      "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
      "Quilting com Efeito Trapunto Computadorizado",
      "Insumos & Fios"
    ],
    "tags": [
      "q-098",
      "micro-stippling",
      "grao de areia",
      "quilting de fundo",
      "relevo",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MATHEMATICAL PATTERN GENERATION IN TEXTILE CAD: Micro-Stippling Fractals & Background Compression. Manchester, 2021.",
      "PARRISH, Gail. Precision Stippling and Meander Digitizing in Computerized Quilting. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie um círculo com um monograma no meio. Ao redor, coloque o preenchimento de micro-stippling a 1,6 mm com linha branca sobre tecido branco e manta fina. Borde e veja como a letra salta para fora parecendo mágica!",
    "quickSummary": "As costurinhas em ondinhas pequenininhas que amassam o fundo para fazer o desenho principal pular em relevo.",
    "beginnerExplanation": "O ponto grão de areia é aquele fundo cheio de costurinhas minúsculas em formato de cobrinhas bem juntinhas. Ele serve para amassar o tecido de trás da peça: o fundo fica todo rebaixado e o nome que você bordou no meio salta para a frente bem gordinho e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-099-quadro-kanban-de-producao-no-atelie",
    "code": "Q-099",
    "term": "Quadro Kanban de Produção no Ateliê (Embroidery Visual Kanban System & Workflow Management)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do japonês kanban (cartão visual / painel de sinalização de fluxo de trabalho do Sistema Toyota de Produção).",
    "summary": "Sistema de gestão visual física ou digital com cartões coloridos divididos em 5 colunas sequenciais (Aguardando Aprovação, Na Fila de Bordado, Em Produção na Máquina, Acabamento/Passadoria, Pronto para Entrega), eliminando esquecimentos e atrasos de encomendas.",
    "definition": "Quadro Kanban de Produção no Ateliê (Embroidery Shop Floor Visual Management, Kanban Card Workflow & WIP Inventory Limitation) é a metodologia ágil de controle de fluxo de produção originada no Japão e adaptada com enorme sucesso para ateliês de bordado computadorizado. O painel visual é dividido em colunas que representam as etapas vivas do ateliê: 1. A Fazer / Aprovados; 2. Preparação de Matriz e Tecido; 3. Na Máquina de Bordar; 4. Acabamento e Limpeza de Fios; 5. Embalado / Pronto para Entrega. Cada pedido do cliente é um cartão (*Card*) contendo o nome do cliente, data de entrega, cores de linhas e foto da matriz aprovada. O sistema limita o Trabalho em Andamento (*WIP - Work in Progress*), impedindo que peças fiquem acumuladas e garantindo 100% de pontualidade nas entregas.",
    "technicalDetails": "Limite de Trabalho em Processo (WIP Limit): Máximo de 2 a 3 pedidos simultâneos na coluna 'Na Máquina' por cabeçote disponível. Código de cores por prioridade: Verde = Prazo normal (> 5 dias); Amarelo = Prazo próximo (2 a 3 dias); Vermelho = Urgente / Entrega hoje. Tempo médio de permanência do cartão no quadro: Indicador de Lead Time do ateliê. Redução de atrasos: Queda de mais de 95% nos extravios e esquecimentos de peças.",
    "construction": [
      "Quadro branco magnético de parede ou painel de cortiça com divisões em colunas",
      "Cartões magnéticos coloridos ou blocos autoadesivos reposicionáveis (Post-it)",
      "Pastas plásticas transparentes de ordem de serviço para viajar junto com o tecido físico",
      "Software digital de Kanban (Trello, Notion ou Asana) para acompanhamento no celular",
      "Etiquetas com código de barras ou numeração sequencial de pedidos"
    ],
    "howItWorks": [
      "1. A cliente 'Mariana' fecha um pedido de 10 toalhas de lavabo para um batizado com entrega para a próxima sexta-feira.",
      "2. A bordadeira cria um cartão amarelo no quadro Kanban na coluna '1. Aprovados' com a foto da matriz e anota as cores de linha necessárias.",
      "3. Quando a bordadeira programa a matriz no computador e corta a entretela, move o cartão para a coluna '2. Preparação'.",
      "4. Ao colocar a toalha no bastidor e ligar a máquina, move o cartão para '3. Na Máquina'.",
      "5. Terminado o bordado, o cartão vai para '4. Acabamento' (onde a peça é limpa e passada).",
      "6. Peça embalada na sacola linda com laço: cartão movido para '5. Pronto para Entrega'.",
      "7. A cliente recebe uma mensagem automática para retirar, busca a encomenda no prazo perfeito e elogia o profissionalismo impecável do ateliê!"
    ],
    "mainTypes": [
      "Quadro Kanban Físico de Parede com Cartões Magnéticos (Visual, direto e perfeito para ateliês com equipe)",
      "Quadro Kanban Digital em Aplicativo de Celular/Tablet (Acessível de qualquer lugar com alertas de prazo)",
      "Kanban de Gaveteiro com Caixas Organizadoras Físicas (Uma caixa numerada para cada etapa de produção)"
    ],
    "characteristics": [
      "Visão panorâmica em 5 segundos de tudo o que está acontecendo no ateliê",
      "Fim definitivo daquele desespero de esquecer a encomenda de um cliente querido",
      "Entrega 100% pontual que gera avaliações 5 estrelas e fidelização de clientes",
      "Sensação maravilhosa de tranquilidade, foco e controle total do seu negócio"
    ],
    "limitations": [
      "O quadro só funciona se a bordadeira criar o hábito diário de mover os cartões conforme avança as etapas",
      "Não colocar mais de 10 pedidos na coluna de produção ao mesmo tempo (respeitar a capacidade da máquina)",
      "Nunca deixar cartões de pedidos entregues acumulados no quadro (arquivar semanalmente)"
    ],
    "numberingSystem": [
      "Colunas de Fluxo: 5 Etapas Padrão",
      "Redução de Atrasos: > 95%",
      "Limite WIP por Máquina: 2 pedidos simultâneos"
    ],
    "advantages": [
      "✔ Você nunca mais vai esquecer uma data de entrega ou passar vergonha com cliente",
      "✔ Sua mente fica leve e tranquila porque tudo está anotado e visível na parede",
      "✔ Transforma a bagunça de papéis e conversas soltas de WhatsApp em um fluxo profissional"
    ],
    "commonErrors": [
      "❌ Anotar os pedidos soltos em guardanapos ou confiar apenas na memória da cabeça",
      "❌ Deixar pedidos urgentes misturados com pedidos normais sem sinalização de cor vermelha",
      "❌ Começar 10 bordados ao mesmo tempo e não terminar nenhum no prazo"
    ],
    "voceSabia": "O sistema Kanban foi criado pelo engenheiro Taiichi Ohno na fábrica da Toyota no Japão na década de 1950, inspirado no modo como os supermercados reabasteciam suas prateleiras apenas quando os produtos eram vendidos!",
    "curiosidadeTecnica": "A implementação de um quadro Kanban visual em ateliês reduz o 'Lead Time' (tempo total desde o pedido até a entrega) em uma média de 42%, pois elimina os tempos mortos em que a peça fica parada esperando decisão da bordadeira.",
    "dicaArtrelados": "Faça o seu **Quadro Kanban de 5 Minutos no Ateliê Artrelados**: pegue uma cartolina ou um quadrinho de avisos na parede e faça 5 colunas com fita crepe: *Aprovado*, *Preparando*, *Bordando*, *Limpando* e *Pronto!* Use papeizinhos coloridos com o nome do cliente. Conforme você for fazendo, vá passando o papelzinho para o lado. É a coisa mais gostosa do mundo ver os papeizinhos chegarem no 'Pronto!' e você nunca mais vai atrasar nada!",
    "comparisonTable": {
      "headers": [
        "Método de Controle",
        "Risco de Esquecer Pedido",
        "Clareza Visual da Produção",
        "Nível de Estresse da Bordadeira"
      ],
      "rows": [
        [
          "Quadro Kanban Visual",
          "Zero (100% visível na parede)",
          "Instantânea em 5 segundos",
          "Mínimo (paz de espírito total)"
        ],
        [
          "Caderno de Papel Escrito",
          "Médio (folhas passam despercebidas)",
          "Lenta (precisa folhear o caderno)",
          "Moderado"
        ],
        [
          "Conversas Soltas de WhatsApp",
          "Altíssimo (mensagens somem no feed)",
          "Caótica e confusa",
          "Altíssimo (desespero constante)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de capacidade planejada",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "threadTension": "N/A",
      "density": "N/A"
    },
    "applications": [
      "Gestão de encomendas personalizadas em ateliês individuais e familiares",
      "Controle de fluxo de trabalho em confecções com equipes de costura e bordado",
      "Planejamento de produção para datas comemorativas (Dia das Mães, Natal, Volta às Aulas)",
      "Comunicação clara entre quem atende o cliente no balcão e quem opera a máquina"
    ],
    "troubleshootingTips": [
      "Use cores de post-it diferentes para cada tipo de produto (ex: rosa para enxoval de bebê, azul para uniformes)",
      "Coloque a data de entrega bem grande com canetão vermelho no canto superior do cartão",
      "Grampeie a foto impressa da matriz aprovada junto com a ordem de serviço para não errar cores"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Quadro de Tempos e Métodos de Bordado",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Mecânica & Manutenção",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-099",
      "kanban",
      "gestao visual",
      "organizacao de pedidos",
      "prazos",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEAN PRODUCTION & KANBAN MANAGEMENT IN CUSTOM APPAREL: Visual Scheduling, WIP Control & Lead-Time Reduction. Tokyo, 2021.",
      "PARRISH, Gail. Visual Workflow Architecture and Agile Shop-Floor Control in Modern Embroidery Studios. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue 5 post-its agora e anote os próximos 5 pedidos que você tem para entregar essa semana. Cole na parede na ordem das datas de entrega: sinta o alívio imediato na sua cabeça ao ver suas prioridades organizadas visualmente!",
    "quickSummary": "O painel visual com papeizinhos coloridos para você acompanhar os pedidos dos clientes e nunca mais atrasar nada.",
    "beginnerExplanation": "O quadro Kanban é um painel na parede onde você cola papeizinhos coloridos com os nomes dos seus clientes e as datas de entrega. Conforme você vai bordando e embalando, você vai passando o papelzinho para a coluna do lado até chegar no 'Pronto!'. Assim você nunca mais esquece de nada e seus clientes ficam super felizes com a pontualidade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-100-qualidade-ergonomica-e-conforto-postural-da-bordadeira",
    "code": "Q-100",
    "term": "Qualidade Ergonômica e Conforto Postural da Bordadeira (Ergonomics & Lighting Standards in Embroidery)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego ergon (trabalho) e nomos (leis naturais do corpo humano) e do latim confortare (fortalecer e preservar o bem-estar).",
    "summary": "Diretrizes essenciais de saúde ocupacional, altura regulamentar de bancadas, iluminação de alto índice de reprodução de cor (IRC > 90 / 5.000K), cadeiras ergonômicas com apoio lombar e pausas ativas para proteção da visão e coluna da bordadeira.",
    "definition": "Qualidade Ergonômica e Conforto Postural da Bordadeira (Embroidery Studio Occupational Ergonomics, High-CRI Lighting Standards & Musculoskeletal Health) é o conjunto de normas e práticas de engenharia ergonômica projetadas para prevenir lesões por esforço repetitivo (LER/DORT), fadiga visual precoce e dores crônicas na coluna vertebral de quem trabalha com bordado eletrônico. A atividade envolve tarefas de alta precisão visual (passar linha no olho de agulhas de 0,7 mm, inspecionar nós e recortar apliques) e esforço de punhos no fechamento de bastidores. O protocolo estabelece: 1. Altura de bancada de montagem de bastidores em pé (95 a 105 cm) e mesa de operação sentada (72 a 75 cm); 2. Iluminação sem sombras com temperatura de cor neutra de 5.000K a 5.700K e IRC > 90 para distinção perfeita de tons de linhas; 3. Cadeira ergonômica padrão NR-17 com suporte lombar e braços reguláveis; 4. Rotina de micropausas ativas para alongamento a cada 60 minutos.",
    "technicalDetails": "Iluminância sobre o cabeçote e mesa de enquadramento: 800 a 1.200 Lux (LED sem cintilação / Flicker-Free). Temperatura de cor ideal: 5.000K a 5.500K (Luz do dia neutra que não distorce cores de linhas). Índice de Reprodução de Cor: IRC > 90 (Ra 90+). Altura do cotovelo em repouso: Ângulo de 90° a 100° em relação ao teclado e à mesa. Pausa ergonômica: 5 minutos de alongamento a cada 50 minutos de trabalho contínuo.",
    "construction": [
      "Luminária LED articulada de alta potência com difusor leitoso antirreflexo e IRC > 90",
      "Cadeira ergonômica giratória com ajuste de altura a gás, apoio lombar dinâmico e braços 3D",
      "Estação de montagem de bastidores com regulagem de altura e base de apoio inclinada a 15°",
      "Tapete antifadiga de poliuretano expandido para trabalho de pé na bancada de corte",
      "Óculos de proteção com lentes de aumento antirreflexo ou lupa de bancada com iluminação circular"
    ],
    "howItWorks": [
      "1. A bordadeira costumava terminar o dia com dor forte nos ombros, punhos doloridos e dor de cabeça pela luz amarela fraca da sala.",
      "2. Ela decide aplicar as diretrizes de Qualidade Ergonômica no seu ateliê.",
      "3. Ajusta a altura da sua cadeira de forma que seus pés fiquem 100% apoiados no chão e os cotovelos formem um ângulo de 90 graus com a mesa da máquina.",
      "4. Instala uma luminária LED articulada com luz neutra de 5.000K (luz do dia) e alto IRC sobre o cabeçote da máquina.",
      "5. Passar a linha no olho da agulha agora leva 2 segundos sem nenhum esforço nos olhos.",
      "6. Coloca um tapete antifadiga macio em frente à bancada de montagem de bastidores.",
      "7. Ela passa a trabalhar o dia inteiro com total conforto, sem dores, com mais energia e produzindo o dobro com um sorriso no rosto!"
    ],
    "mainTypes": [
      "Ergonomia Postural e de Assento (Cadeiras reguláveis, postura de coluna neutra e apoio de pés)",
      "Ergonomia Visual e Iluminação Técnica (LEDs de alto IRC que mostram as cores reais das linhas sem cansar a vista)",
      "Ergonomia de Montagem e Manuseio de Bastidores (Dispositivos mecânicos e magnéticos que anulam a torção dos punhos)"
    ],
    "characteristics": [
      "Preservação da saúde da coluna, ombros, pulsos e visão da bordadeira ao longo dos anos",
      "Eliminação de erros de troca de cor por confusão de tons parecidos de linhas sob luz ruim",
      "Aumento da produtividade e disposição física durante toda a jornada de trabalho",
      "Ambiente de trabalho alegre, iluminado, agradável e altamente acolhedor"
    ],
    "limitations": [
      "Nunca trabalhar no escuro ou apenas com a luz da tela do computador ligada",
      "Não usar lâmpadas fluorescentes antigas que ficam piscando (cintilação causa enxaqueca)",
      "Respeitar os limites do corpo e fazer pequenas pausas para beber água e esticar os braços"
    ],
    "numberingSystem": [
      "Iluminância Recomendada: 800 a 1.200 Lux",
      "Temperatura da Luz: 5.000K a 5.500K",
      "Índice de Reprodução de Cor: IRC > 90"
    ],
    "advantages": [
      "✔ Você trabalha com total conforto e termina o dia sem dores nas costas ou nos punhos",
      "✔ Enxerga o buraquinho da agulha e os fios de acabamento com clareza cristalina",
      "✔ Nunca mais confunde um azul-marinho com preto ou um bege com cinza por causa de luz fraca"
    ],
    "commonErrors": [
      "❌ Borda em ambiente escuro com lâmpada amarela fraca, forçando a vista e tendo dor de cabeça",
      "❌ Usar cadeira de cozinha dura sem encosto regulável, entortando a coluna para a frente",
      "❌ Ficar 6 horas seguidas sentada sem levantar nem para esticar as pernas e beber água"
    ],
    "voceSabia": "A ergonomia moderna nasceu durante a Segunda Guerra Mundial para adaptar as cabines de aviões aos limites biológicos dos pilotos; hoje, a ciência ergonômica aplicada ao artesanato e confecção é reconhecida pela Organização Mundial da Saúde (OMS) como o maior fator de longevidade profissional!",
    "curiosidadeTecnica": "O olho humano consome cerca de 25% de toda a energia metabólica do cérebro durante tarefas visuais minuciosas; trabalhar com iluminação abaixo de 500 Lux ou com IRC < 70 triplica a taxa de piscadas por minuto e acelera a fadiga muscular ocular em mais de 300%.",
    "dicaArtrelados": "O maior tesouro do seu ateliê não é a máquina mais cara: **é você mesma!** Cuide do seu corpo com todo o amor: **1.** Coloque uma luminária LED branca bem clara e forte bem em cima da sua máquina. **2.** Ajuste sua cadeira para seus pés ficarem firmes no chão e suas costas bem apoiadas. **3.** A cada 1 hora, levante, beba um copo d'água bem fresca, role os ombros para trás 5 vezes e estique os braços para cima. Seu corpo agradece e seus bordados vão brilhar com a sua alegria!",
    "comparisonTable": {
      "headers": [
        "Ambiente de Ateliê",
        "Iluminação e Conforto",
        "Impacto na Saúde da Bordadeira",
        "Precisão nos Detalhes"
      ],
      "rows": [
        [
          "Ateliê Ergonômico Planejado",
          "LED 5.000K (1.000 Lux / IRC 95) + Cadeira NR17",
          "Zero dores / Disposição total o dia todo",
          "Cirúrgica (enxerga o menor fiapinho)"
        ],
        [
          "Ateliê Convencional",
          "Lâmpada de teto comum amarela (300 Lux)",
          "Cansaço visual e dores no final da tarde",
          "Média (dificuldade em cores escuras)"
        ],
        [
          "Espaço Improvisado e Escuro",
          "Luz fraca de abajur / Sem luz direta",
          "Alto risco de LER/DORT e enxaqueca",
          "Baixa (erros frequentes de acabamento)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "threadTension": "N/A",
      "density": "N/A"
    },
    "applications": [
      "Planejamento do espaço físico e iluminação de ateliês profissionais e domésticos",
      "Prevenção de afastamentos e dores crônicas em bordadeiras e operadoras",
      "Inspeção de controle de qualidade final e limpeza minuciosa de peças de luxo",
      "Adequação ergonômica de postos de trabalho às normas técnicas regulamentadoras"
    ],
    "troubleshootingTips": [
      "Aponte o foco da luminária LED para a chapa de agulha sem que a luz reflita direto nos seus olhos",
      "Use um apoio de pés embaixo da mesa se a sua cadeira for alta e seus pés ficarem suspensos",
      "Coloque um alarme no celular a cada 1 hora para lembrar de fazer a pausa da água e do alongamento"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Quadro de Tempos e Métodos de Bordado",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Mecânica & Manutenção",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-100",
      "ergonomia",
      "iluminacao",
      "saude postural",
      "bem estar",
      "conforto",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OCCUPATIONAL ERGONOMICS & LIGHTING IN TEXTILE WORKSHOPS: High-CRI Standards, Musculoskeletal Health & Vision Preservation. Geneva, 2021.",
      "PARRISH, Gail. Studio Ergonomics and Lighting Architecture for Professional Embroidery Operators. Cincinnati, 2022."
    ],
    "practicalExercise": "Sente-se na sua cadeira de bordar agora mesmo: seus pés tocam o chão retinhos? Seus ombros estão relaxados ou tensos para cima? Ajuste a altura da cadeira, respire fundo, beba um copo d'água e sinta como o conforto postural muda completamente o seu dia!",
    "quickSummary": "As dicas de saúde, cadeira confortável e iluminação perfeita para você bordar o dia todo sem dores no corpo e sem cansar a vista.",
    "beginnerExplanation": "Cuidar de você é a parte mais importante de todo o ateliê! Ter uma boa cadeira com apoio para as costas, uma luz bem clarinha que mostre as cores reais das linhas sem cansar os olhos e fazer pequenas pausas para se esticar e tomar água garante que você borde com prazer e saúde por muitos e muitos anos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-quadros-e-bastidores-decorativos-hoop-art",
    "code": "Q-101",
    "letter": "Q",
    "term": "Quadros e Bastidores Decorativos Hoop Art (Bordados Emoldurados no Próprio Aro de Madeira)",
    "pronunciation": "qua-drus e bas-ti-do-res de-co-ra-ti-vos rup art (ˈkwadɾuz i bastʃiˈdoɾiz hup aʁt)",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do inglês 'hoop' (aro circular de bordar) e 'art' (arte decorativa visual), movimento artístico contemporâneo que ressignificou o bastidor de madeira de mero suporte técnico para moldura nobre de parede.",
    "summary": "Técnicas de composição, bordado e acabamento traseiro com fuxico e feltro para transformar aros circulares de madeira e bambu em quadros decorativos de parede.",
    "definition": "A confecção de Quadros e Bastidores Decorativos Hoop Art (Hoop Art Embroidery / Quadros em Bastidor de Parede / Emolduramento em Aro Circular) é uma das formas de arte têxtil mais apreciadas no artesanato moderno e na decoração afetiva. Compreende o planejamento de bordados calibrados rigorosamente para o formato geométrico de círculos ou ovais, bordados sobre tecidos rústicos e nobres (algodão cru, linho puro, etamine e sarja lavada), e emoldurados permanentemente no próprio aro externo de madeira nobre ou bambu com ferragem de latão, recebendo fechamento traseiro limpo com fuxico pregueado e acabamento em feltro.",
    "technicalDetails": "O formato circular impõe desafios de tensão centrípeta e simetria de horizonte. Parâmetros técnicos indispensáveis: 1) Gabaritagem Circular na Matriz: inclusão de um círculo guia no software com diâmetro 10 mm menor que a abertura interna do bastidor de moldura para garantir margem de respiro harmônica; 2) Tensão de Tambor sem Distorção: o tecido deve ser esticado de maneira uniforme em cruz (eixos X e Y) para que a trama de algodão cru não fique diagonalmente torcida; 3) Entretela Rasgável Suave de 50 g/m² no verso, retirada cuidadosamente após o bordado; 4) Fechamento Traseiro em Fuxico: o excesso de tecido circular (sobra de 3 a 4 cm além do aro) é franzido no verso com linha de pipa encerada e arrematado; e 5) Tampa Traseira de Feltro recortada na medida exata do aro e fixada com cola quente ou ponto invisível caseado à mão.",
    "beginnerExplanation": "Hoop Art é quando o próprio bastidorzinho redondinho de madeira vira o quadrinho para pendurar na parede! Em vez de você tirar o bordado do bastidor para costurar em uma toalha ou roupa, você deixa o tecido esticadinho no aro de bambu com aquele parafuso dourado lindo para cima. A máquina borda um desenho delicado (como flores, o nome de um bebê ou um retrato estilizado) e você só corta o excesso de pano por trás e cola um feltro bonitinho para esconder os pontos. Fica uma fofura sem igual para decorar quartinhos infantis e ateliês!",
    "howItWorks": [
      "1. Define-se o tamanho do aro de moldura de madeira ou bambu (ex: 14 cm, 16 cm, 20 cm ou 25 cm de diâmetro).",
      "2. No software, programa-se o bordado respeitando a margem circular de 1,5 cm em relação à borda do aro.",
      "3. Borda-se a arte em algodão cru ou linho no bastidor comum da máquina com entretela leve.",
      "4. Retira-se da máquina, rasga-se a entretela do avesso e passa-se o tecido com ferro a vapor pelo avesso sobre toalha macia.",
      "5. Encaixa-se o tecido no bastidor de madeira definitivo, esticando como uma pele de tambor bem firme e apertando o parafuso metálico.",
      "6. Corta-se a sobra de tecido circular a 3 cm da borda externa do aro e passa-se uma linha forte de alinhavo para franzir tudo para trás.",
      "7. Recorta-se um círculo de feltro na cor do tecido e cola-se com cola quente nas bordas internas para fechar o avesso com perfeição."
    ],
    "applications": [
      "Portas de maternidade personalizadas com o nome do recém-nascido e flores em aquarela têxtil.",
      "Composições de parede para salas de estar (galerias de bastidores com temas botânicos e frases).",
      "Lembranças de casamento com a data das bodas e brasão do casal gravado em tecido rústico.",
      "Decorações de quartos infantis com animais do bosque, passarinhos e constelações estelares."
    ],
    "characteristics": [
      "Acabamento rústico-chique de alta aceitação em decorações de estilo Boho, Escandinavo e Farmhouse.",
      "Peça de baixíssimo custo de produção e altíssimo valor agregado emocional.",
      "Avesso 100% lacrado e limpo que não acumula poeira nem expõe os nós de linha."
    ],
    "commonErrors": [
      "❌ Esticar o tecido no aro puxando apenas de um lado: o desenho redondo fica ovalado e a trama do tecido fica torta e visível.",
      "❌ Deixar as sobras de tecido aparecendo por trás do aro sem fechamento em feltro, transmitindo aspecto inacabado e desleixado para o cliente.",
      "❌ Usar aros de madeira farpada ou com parafusos frouxos que não seguram a tensão do tecido e deixam o quadro frouxo com o tempo."
    ],
    "troubleshootingTips": [
      "O tecido ficou frouxo e com barriga no aro de madeira após alguns dias: solte levemente o parafuso, puxe as abas em cruz de maneira uniforme até soar como tambor e aperte o parafuso com auxílio de uma chave de fenda.",
      "A cola quente vazou e manchou a borda do tecido: use cola de silicone fria ou faça a costura do feltro traseiro à mão em ponto caseado delicado.",
      "O algodão cru ficou com rugas ao redor do ponto cheio: aumente a compensação de repuxo para 0,40 mm no software e use uma entretela de algodão termocolante no verso antes de bordar."
    ],
    "dicaArtrelados": "O acabamento de grife da Artrelados para Hoop Art: amarre um laço de fita de gorgurão rústica ou fita de veludo no parafuso superior de latão do bastidor e deixe duas pontas caídas graciosamente pelas laterais. O bastidor ganha um ar romântico europeu irresistível que faz a peça vender antes mesmo de você anunciar!",
    "voceSabia": "A prática do Hoop Art moderno nasceu na Inglaterra no início dos anos 2000, impulsionada pelo movimento 'Craftivism' (artesanato com ativismo poético), onde artistas têxteis começaram a expor seus bordados diretamente nos aros de madeira em feiras de arte contemporânea de Londres!",
    "practicalExercise": "Pegue um bastidorzinho redondo de madeira de 16 cm que você tenha no ateliê. Borde um monograma delicado em algodão cru ou linho rústico. Encaixe no aro de madeira definitivo, alinhave o verso em fuxico e cole um círculo de feltro no fundo. Pendure na parede do seu ateliê e admire a beleza da arte em bastidor!",
    "quickSummary": "Metodologia para criar quadros decorativos de parede emoldurados no próprio aro circular de madeira com tensão de tambor e acabamento limpo no verso.",
    "relatedTerms": [
      "Aro de Madeira / Bambu",
      "Hoop Art",
      "Fuxico de Arremate Traseiro",
      "Tensão de Tambor",
      "Algodão Cru e Linho",
      "Porta de Maternidade",
      "Acabamento em Feltro"
    ],
    "tags": [
      "q-101",
      "quadrosdecorativos",
      "bastidoresdecorativos",
      "hoopart",
      "portadematernidade",
      "arosdemadeira",
      "decoracaoafetiva",
      "artrelados"
    ]
  }
];

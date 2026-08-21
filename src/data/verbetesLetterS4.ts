import { Verbete } from "../types";

export const VERBETES_LETTER_S4: Verbete[] = [
  {
    id: "sequencia-de-objetos",
    code: "S-024",
    letter: "S",
    term: "Sequência de Objetos",
    pronunciation: "se-quên-ci-a de ob-je-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da árvore de hierarquia e empilhamento de camadas de objetos vetoriais em computação gráfica.",
    summary: "Disposição ordenada dos elementos gráficos vetoriais individuais na árvore de camadas do software de digitalização.",
    definition: "A Sequência de Objetos (ou Lista de Objetos / Object Sequence Tree) é a ordenação linear de todos os blocos vetoriais independentes que constituem o arquivo de bordado (como cada pétala, caule, letra, fundo e contorno). Ela determina exatamente qual objeto passa a linha para o seguinte, permitindo que o programador controle os pontos de entrada e saída e as sobreposições com precisão.",
    technicalDetails: "Na interface dos softwares profissionais (como Wilcom EmbroideryStudio ou Pulse), a sequência de objetos é exibida em uma barra lateral acoplada (Sequence Docker), onde cada objeto pode ser selecionado, reordenado por arrasto (drag and drop), agrupado, ocultado ou transformado.",
    beginnerExplanation: "É como uma pilha de pratos na tela do computador: o objeto que está no começo da lista é bordado primeiro (fica por baixo) e os que estão mais para baixo na lista são bordados por cima, formando o desenho em camadas.",
    howItWorks: [
      "1. A programadora desenha os elementos na tela.",
      "2. Cada novo desenho entra como um item na lista de objetos.",
      "3. A programadora clica e arrasta os itens para organizar a ordem perfeita.",
      "4. Os suportes e fundos são colocados no topo da lista.",
      "5. Os contornos e detalhes finos são movidos para o final da lista.",
      "6. A máquina costura obedecendo fielmente a essa hierarquia."
    ],
    applications: [
      "Montagem estruturada de matrizes complexas com dezenas de elementos.",
      "Ajuste de sobreposição entre áreas vizinhas para evitar frestas.",
      "Otimização de trajetos entre pequenos detalhes da mesma cor.",
      "Isolamento de partes específicas do bordado para edição e testes rápidos."
    ],
    characteristics: [
      "Permite reorganizar a ordem de costura sem precisar redesenhar nada.",
      "Facilita a identificação de objetos 'órfãos' ou invisíveis que pesam a matriz.",
      "Essencial para controlar o fluxo físico de repuxo do tecido."
    ],
    commonErrors: [
      "❌ Deixar a sequência de objetos na ordem aleatória em que foram desenhados na tela, gerando uma costura caótica.",
      "❌ Colocar um objeto de contorno antes do preenchimento da mesma área na lista.",
      "❌ Não agrupar objetos correlatos, dificultando a edição posterior da matriz."
    ],
    troubleshootingTips: [
      "Contorno ficando coberto pelo fundo: abra a lista de objetos e arraste o contorno para depois do preenchimento.",
      "Máquina bordando um pedacinho da esquerda, depois um da direita e voltando: reordene os objetos na lista pela proximidade geográfica.",
      "Dificuldade de selecionar um objeto pequeno: clique diretamente sobre o nome dele na lista de objetos para selecioná-lo na tela."
    ],
    dicaArtrelados: "Mantenha a lista de objetos sempre organizada e com nomes claros (ex: 'Fundo Azul', 'Letra A', 'Contorno Preto'). Isso economiza horas de trabalho se você precisar alterar uma cor ou ajustar um tamanho no futuro!",
    voceSabia: "Em softwares profissionais, é possível renomear, colorir e agrupar objetos em pastas dentro da sequência, exatamente como em softwares de design gráfico profissional como Photoshop e Illustrator.",
    practicalExercise: "Abra o painel de 'Lista de Objetos' no seu software. Selecione uma matriz pronta e experimente arrastar o terceiro objeto para a primeira posição. Veja no simulador 3D como a ordem de costura mudou instantaneamente.",
    quickSummary: "Sequência de Objetos é a hierarquia em árvore onde cada elemento do bordado é ordenado na lista do software para definir a sequência perfeita de costura.",
    relatedTerms: ["Sequenciamento da Matriz", "Sequenciamento Manual", "Árvore de Camadas", "Sequência de Cores"],
    tags: ["objetos", "camadas", "lista", "hierarquia", "software"]
  },
  {
    id: "sequenciamento-da-matriz",
    code: "S-025",
    letter: "S",
    term: "Sequenciamento da Matriz",
    pronunciation: "se-quên-ci-a-men-to da ma-triz",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da engenharia de processos têxteis aplicada à lógica de roteamento de arquivos digitais.",
    summary: "Processo de planejamento e organização da ordem de execução de todos os elementos para garantir eficiência, estabilidade e beleza.",
    definition: "O Sequenciamento da Matriz é a etapa estratégica e metodológica da digitalização em que o programador planeja, testa e define o trajeto global que a máquina de bordar percorrerá do primeiro ao último ponto. Esse processo equilibra as tensões mecânicas do tecido, elimina repuxamentos, minimiza cortes de linha e garante que os contornos fechem com precisão cirúrgica sobre os preenchimentos.",
    technicalDetails: "O sequenciamento profissional baseia-se em quatro pilares: 1) Estabilização prévia (Basting/Underlay); 2) Progressão concêntrica (Center-Outward); 3) Agrupamento cromático lógico; e 4) Alinhamento de vetores de entrada/saída (Entry/Exit Points).",
    beginnerExplanation: "É o planejamento inteligente de todo o caminho do bordado: pensar com calma onde a máquina vai começar, por onde vai passar e onde vai terminar, para o tecido não entortar e o desenho ficar retinho e perfeito.",
    howItWorks: [
      "1. O programador estuda a imagem e identifica as partes que ficam por baixo e por cima.",
      "2. Cria uma base de pontos no centro para prender o tecido na entretela.",
      "3. Ordena os preenchimentos em espiral ou de dentro para fora.",
      "4. Liga objetos vizinhos com pontes ocultas para não cortar linha à toa.",
      "5. Aplica os contornos e arremates finais.",
      "6. Testa a simulação na tela para validar o plano de produção."
    ],
    applications: [
      "Criação de matrizes de alta performance para confecções e ateliês.",
      "Resolução de problemas de desalinhamento de contorno em tecidos elásticos.",
      "Otimização de tempo para grandes tiragens industriais.",
      "Padronização de arquivos para garantir que qualquer máquina borde com qualidade."
    ],
    characteristics: [
      "Diferencia um programador amador de um mestre da digitalização.",
      "Reduz em até 40% o tempo total de produção na máquina.",
      "Garante que o bordado fique idêntico em 1 ou em 1.000 peças."
    ],
    commonErrors: [
      "❌ Desenhar a matriz sem pensar na ordem, resultando em um bordado que pula caoticamente de ponta a ponta.",
      "❌ Sequenciar tudo de um lado para o outro (da esquerda para a direita), empurrando todo o tecido para um canto do bastidor.",
      "❌ Deixar os contornos espalhados no meio das cores de fundo em vez de agrupá-los no final."
    ],
    troubleshootingTips: [
      "Bordado ficando torto ou repuxado no final: revise o sequenciamento da matriz e passe a bordar do centro para as extremidades.",
      "Contornos não encaixando no desenho: certifique-se de que cada parte receba seu contorno logo após a camada de base correspondente ou use compensação adequada.",
      "Muitos cortes de linha na máquina: revise o sequenciamento agrupando melhor as cores e aproximando as entradas e saídas."
    ],
    dicaArtrelados: "Antes de salvar a matriz definitiva: feche os olhos e imagine o bastidor se mexendo na máquina. Se você sentir que o bastidor vai 'dançar' demais de um lado para o outro, faça o sequenciamento inteligente do trajeto!",
    voceSabia: "Em fábricas de bordado de grande porte, existem profissionais dedicados exclusivamente a auditar e otimizar o sequenciamento de matrizes para economizar frações de segundo por cabeçote.",
    practicalExercise: "Pegue uma matriz antiga sua que demorava muito para bordar. Abra no programa e refaça o sequenciamento: agrupe cores, ordene do centro para fora e una elementos próximos. Borde novamente e cronometre o tempo economizado!",
    quickSummary: "Sequenciamento da Matriz é o planejamento estratégico da rota global do bordado para garantir estabilidade no tecido, alinhamento de contornos e alta produtividade.",
    relatedTerms: ["Sequenciamento Automático", "Sequenciamento Manual", "Ordem de Bordado", "Compensação de Puxamento", "Registro de Contorno"],
    tags: ["sequenciamento", "estratégia", "produtividade", "estabilidade", "engenharia"]
  },
  {
    id: "sequenciamento-automatico",
    code: "S-026",
    letter: "S",
    term: "Sequenciamento Automático",
    pronunciation: "se-quên-ci-a-men-to au-to-má-ti-co",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "De algoritmos de otimização de rotas e problemas do caixeiro-viajante aplicados a computação gráfica.",
    summary: "Recurso de software que reorganiza a ordem dos objetos e cores da matriz de forma automatizada por algoritmos matemáticos.",
    definition: "O Sequenciamento Automático (ou Auto-Sequence / Auto-Branching / Optimize Color Changes) é a função computacional disponível nos softwares de bordado que analisa a posição espacial de todos os objetos e recalcula instantaneamente a melhor rota de costura, agrupando cores iguais, aproximando pontos de entrada/saída e inserindo caminhos de ligação ocultos.",
    technicalDetails: "Embora extremamente eficiente para monogramas de texto (Lettering) e arabescos contínuos (Branching), o sequenciamento 100% automático de desenhos complexos pode ignorar particularidades físicas de tecidos delicados, exigindo revisão e ajustes pontuais do digitalizador humano.",
    beginnerExplanation: "É o botão mágico do programa que arruma a bagunça do desenho com um clique: ele junta as cores iguais, organiza os objetos que estão pertinho e corta um monte de caminhos compridos automaticamente.",
    howItWorks: [
      "1. A usuária seleciona os objetos ou a matriz inteira.",
      "2. Clica na ferramenta 'Otimizar Sequência' ou 'Ramificação Automática' (Branching).",
      "3. O software executa um cálculo geométrico de menor distância entre nós.",
      "4. Reorganiza a ordem dos objetos na lista e inverte entradas/saídas onde necessário.",
      "5. A matriz fica limpa, rápida e pronta para a máquina em poucos segundos."
    ],
    applications: [
      "Otimização instantânea de fontes e textos criados com ferramentas de escrita.",
      "União de galhos de árvores, arabescos e rendas em uma única passada contínua.",
      "Agrupamento rápido de cores em matrizes convertidas de outros formatos.",
      "Economia de tempo no dia a dia corrido do ateliê de personalização rápida."
    ],
    characteristics: [
      "Extrema rapidez: processa matrizes complexas em menos de um segundo.",
      "Reduz cortes de linha em até 70% em objetos de mesma cor.",
      "Excelente para textos e elementos ornamentais."
    ],
    commonErrors: [
      "❌ Confiar cegamente no sequenciamento automático para matrizes com sobreposições complexas, fazendo contornos bordarem antes dos fundos.",
      "❌ Usar sequenciamento automático em bordados de boné sem forçar a regra de bordar do centro para as laterais.",
      "❌ Não conferir no simulador se algum caminho oculto passou por cima de tecido exposto."
    ],
    troubleshootingTips: [
      "Sequenciamento automático inverteu a ordem de uma camada importante: desfaça o comando ('Ctrl+Z') e selecione apenas os objetos da mesma camada para otimizar.",
      "Linha de ligação automática aparecendo no meio do tecido: ajuste os limites do objeto para que o software passe a linha por dentro do preenchimento.",
      "Texto ficando com pulos entre as letras: selecione o texto completo e aplique a ferramenta 'Ramificação' (Branching) definindo início e fim."
    ],
    dicaArtrelados: "Para textos e nomes manuscritos: nunca perca tempo arrumando letra por letra! Selecione o nome todo, clique em 'Ramificação Automática' (Branching), marque onde o nome começa e onde termina. O programa cria o trajeto perfeito sozinho!",
    voceSabia: "O algoritmo de sequenciamento automático de ramificações (Branching) foi baseado nas fórmulas matemáticas de grafos e árvores mínimas criadas pelo matemático Joseph Kruskal em 1956.",
    practicalExercise: "Escreva um nome comprido com fonte manuscrita. Selecione o texto e use a ferramenta 'Branching'. Observe como todos os cortes intermediários desaparecem instantaneamente da tela.",
    quickSummary: "Sequenciamento Automático é a ferramenta do software que reorganiza e otimiza a rota de costura e cores da matriz em segundos através de algoritmos inteligentes.",
    relatedTerms: ["Sequenciamento Manual", "Ramificação (Branching)", "Otimização de Trajeto", "Sequência de Objetos"],
    tags: ["automático", "algoritmo", "branching", "rapidez", "produtividade"]
  },
  {
    id: "sequenciamento-manual",
    code: "S-027",
    letter: "S",
    term: "Sequenciamento Manual",
    pronunciation: "se-quên-ci-a-men-to ma-nu-al",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do ofício artesanal e meticuloso da digitalização profissional de alta fidelidade.",
    summary: "Método de controle total onde o programador define elemento por elemento a ordem exata, pontos de entrada, saída e sobreposições.",
    definition: "O Sequenciamento Manual é a prática de nível mestre em que o digitalizador assume o controle integral sobre a ordem de execução de cada objeto, definindo manualmente as coordenadas de início e término, a orientação dos trajetos de ligação (Travel Runs), o desfasamento de subpontos e a sequência de camadas com base na sensibilidade física do tecido e na mecânica do bastidor.",
    technicalDetails: "É o único método capaz de garantir registro perfeito em tecidos extremamente instáveis (como malha piquet, seda pura, veludo e lycra) e em suportes curvos de alta deformação (como a testeira de bonés estruturados e calçados).",
    beginnerExplanation: "É quando o profissional faz tudo à mão no computador com todo o carinho: escolhe onde cada florzinha começa, onde termina e como o tecido vai se comportar, garantindo que o bordado saia uma verdadeira obra de arte perfeita.",
    howItWorks: [
      "1. O programador desativa automatismos e analisa a física da peça e do tecido.",
      "2. Define o ponto de ancoragem inicial no centro do bastidor.",
      "3. Posiciona manualmente os pontos de entrada (cruz verde) e saída (cruz vermelha) de cada objeto.",
      "4. Desenha trajetos de ponto corrido ocultos por baixo das áreas a serem cobertas.",
      "5. Organiza as camadas de cores na sequência perfeita de cobertura e registro.",
      "6. O resultado é uma matriz silenciosa, fluida e impecável na máquina."
    ],
    applications: [
      "Digitalização de matrizes de alta costura, vestidos de noiva e marcas de luxo.",
      "Bordados em bonés estruturados, sapatos e mochilas de lona pesada.",
      "Matrizes para tecidos ultra elásticos (roupas esportivas e moda praia).",
      "Emblemas militares com tolerância de encaixe inferior a 0,2 mm."
    ],
    characteristics: [
      "Máximo padrão de qualidade técnica e estabilidade dimensional existente.",
      "Zero desperdício de movimentos ou cortes desnecessários.",
      "Exige profundo conhecimento de física têxtil e comportamento de fios."
    ],
    commonErrors: [
      "❌ Não conferir os pontos de ligação após mover objetos manualmente, deixando pontas de linha expostas.",
      "❌ Esquecer de colocar amarrações manuais ao criar saltos sem corte.",
      "❌ Demorar horas em desenhos simples que poderiam ser resolvidos com ferramentas semi-automáticas."
    ],
    troubleshootingTips: [
      "Contorno desencaixando mesmo com entretela firme: refaça o sequenciamento manual para bordar os contornos imediatamente após cada seção correspondente.",
      "Bordado puxando o tecido para um lado só: alterne as direções de preenchimento manualmente (um objeto a 45°, o vizinho a 135°).",
      "Cortes de linha aparecendo onde não deviam: verifique se as cruzes de início e término dos objetos vizinhos estão encostadas uma na outra."
    ],
    dicaArtrelados: "O segredo dos mestres do bordado: use ferramentas automáticas para o que for simples (como textos), mas faça o sequenciamento manual nas partes nobres e nos contornos principais. É isso que transforma uma matriz comum em uma matriz de luxo!",
    voceSabia: "Nas fábricas de alta costura em Paris e Milão, os digitalizadores sêniores utilizam 100% de sequenciamento manual para criar peças exclusivas de passarela.",
    practicalExercise: "Pegue um logotipo com 3 partes coloridas e um contorno preto. Posicione manualmente as cruzes de entrada e saída de cada cor para que o final de uma encontre o início da próxima. Borde e sinta a perfeição da máquina trabalhando.",
    quickSummary: "Sequenciamento Manual é a arte de programar a rota do bordado ponto a ponto com controle absoluto sobre entradas, saídas e camadas para máxima perfeição têxtil.",
    relatedTerms: ["Sequenciamento Automático", "Sequenciamento da Matriz", "Travel Run", "Registro de Contorno", "Pontos de Entrada e Saída"],
    tags: ["manual", "precisão", "mestre", "qualidade", "alta costura"]
  },
  {
    id: "simulacao-do-bordado",
    code: "S-028",
    letter: "S",
    term: "Simulação do Bordado",
    pronunciation: "si-mu-la-ção do bor-da-do",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da computação gráfica e da renderização em tempo real de processos industriais virtuais.",
    summary: "Visualização digital animada no software ou painel da máquina que reproduz exatamente como o bordado será costurado.",
    definition: "A Simulação do Bordado (ou Player de Bordado / Stitch Player / Slow Redraw) é a ferramenta de renderização dinâmica presente nos softwares de digitalização e nos visores de máquinas computadorizadas que exibe uma animação acelerada da agulha costurando a matriz ponto a ponto, salto a salto e cor a cor, reproduzindo com fidelidade a futura execução física.",
    technicalDetails: "A simulação permite controlar a velocidade de reprodução, pausar em pontos específicos, avançar/retroceder quadro a quadro (Stitch-by-Stitch), inspecionar camadas ocultas e detectar visualmente falhas de trajeto, saltos soltos ou amarrações ausentes antes de gastar tecido e linha.",
    beginnerExplanation: "É como dar o 'Play' em um filminho no computador para assistir a máquina bordando na tela antes de ir para a máquina de verdade. Você vê tudo acontecendo na tela e descobre se tem algum erro antes de estragar o tecido.",
    howItWorks: [
      "1. A usuária clica no botão de simulação ('Player' ou ícone de filme) no programa.",
      "2. A agulha virtual começa a desenhar as linhas na tela em tempo real.",
      "3. A usuária ajusta a barra de velocidade para rápida ou lenta.",
      "4. Observa a formação dos suportes, preenchimentos, letras e contornos.",
      "5. Identifica se há saltos errados ou cortes desnecessários.",
      "6. Efetua os ajustes necessários antes de salvar o arquivo definitivo."
    ],
    applications: [
      "Validação obrigatória de qualidade antes de enviar matrizes para a produção.",
      "Apresentação visual de protótipos digitais para aprovação de clientes.",
      "Detecção antecipada de furos repetidos, saltos longos e trocas de cor erradas.",
      "Treinamento didático de alunas e operadoras de máquinas de bordar."
    ],
    characteristics: [
      "Evita desperdício de tecidos nobres, linhas caras e entretelas.",
      "Permite navegação milimétrica para frente e para trás.",
      "Gera confiança absoluta no trabalho do programador."
    ],
    commonErrors: [
      "❌ Pular a etapa de simulação e colocar a matriz direto na máquina, descobrindo erros graves apenas na peça pronta.",
      "❌ Assistir à simulação em velocidade ultrarrápida (10.000%), não percebendo saltos soltos ou suportes invertidos.",
      "❌ Não conferir a simulação das amarrações de segurança nos pontos de corte."
    ],
    troubleshootingTips: [
      "Simulador travando no computador: desative o modo 3D TrueView durante a simulação e use o modo de linhas vetoriais planas.",
      "Dúvida sobre onde a máquina vai cortar: pause o simulador e avance ponto a ponto usando as setas do teclado.",
      "Simulação na máquina não correspondendo ao arquivo: certifique-se de que exportou a matriz no formato correto de leitura da sua máquina (ex: PES, DST, JEF, EXP)."
    ],
    dicaArtrelados: "Nunca coloque uma matriz na sua máquina sem antes assistir à simulação completa no computador! Esses dois minutinhos na tela evitam quebrar agulhas, estragar toalhas caras e perder horas de trabalho!",
    voceSabia: "Os primeiros simuladores de bordado para computadores pessoais surgiram em 1989 e mostravam apenas linhas verdes em telas pretas de fósforo.",
    practicalExercise: "Abra qualquer matriz no seu programa e aperte o botão do Stitch Player. Controle a velocidade e observe como a agulha virtual desenha primeiro os pontos de sustentação por baixo antes de cobrir por cima.",
    quickSummary: "Simulação do Bordado é a animação digital na tela que reproduz a execução da matriz passo a passo, permitindo validar e corrigir o arquivo antes de costurar.",
    relatedTerms: ["Simulação de Pontos", "Simulação de Execução", "TrueView (Visualização Realista)", "Stitch Player"],
    tags: ["simulação", "player", "animação", "validação", "teste virtual"]
  },
  {
    id: "simulacao-de-pontos",
    code: "S-029",
    letter: "S",
    term: "Simulação de Pontos",
    pronunciation: "si-mu-la-ção de pon-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da computação gráfica voltada à renderização volumétrica e textura fotorrealista de filamentos de linha.",
    summary: "Visualização tridimensional fotorrealista que simula a espessura, o brilho, a textura e o relevo dos fios na tela.",
    definition: "A Simulação de Pontos (ou Modo TrueView / 3D Realistic View / Renderização 3D) é o modo avançado de exibição dos softwares de bordado que calcula o sombreamento, a curvatura cilíndrica dos fios de poliéster/raiom e a refração da luz sobre as passadas de linha, apresentando na tela uma imagem virtual com aparência idêntica à de uma peça bordada e lavada.",
    technicalDetails: "O algoritmo processa o mapa de normais de cada filamento com base no ângulo programado, adicionando brilho especular e sombras nas junções, permitindo avaliar a cobertura real do tecido, a textura dos padrões de satim/tatami e a harmonia das cores.",
    beginnerExplanation: "É o modo da tela que transforma as linhas retas do desenho em fios brilhantes de verdade com textura fofinha e relevo 3D, mostrando exatamente como a peça pronta vai ficar na vida real.",
    howItWorks: [
      "1. A usuária ativa o modo de visualização realista ('3D' ou tecla 'T' / 'TrueView').",
      "2. O motor gráfico substitui os traços vetoriais por modelos volumétricos de fios.",
      "3. Aplica o brilho acetinado característico do fio e a cor escolhida.",
      "4. Simula o relevo e a profundidade das camadas sobrepostas.",
      "5. A usuária aprova o visual estético ou exporta a imagem para catálogo comercial."
    ],
    applications: [
      "Criação de mockups e catálogos virtuais para venda de produtos personalizados nas redes sociais.",
      "Aprovação de layout com clientes sem necessidade de produzir amostras físicas.",
      "Avaliação de texturas decorativas e efeitos de relevo antes do bordado real.",
      "Conferência de fidelidade estética de monogramas e brasões requintados."
    ],
    characteristics: [
      "Altíssimo realismo visual e fotorrealismo de fios têxteis.",
      "Permite escolher a cor e a textura do tecido de fundo na tela (ex: piquê, jeans, malha).",
      "Economiza custos com confecção de amostras físicas de aprovação."
    ],
    commonErrors: [
      "❌ Editar nós e vetores com o modo 3D ativado, dificultando a visualização precisa dos pontos de ancoragem e linhas guia.",
      "❌ Achar que a simulação 3D esconde falhas de densidade ou falta de entretela do mundo real.",
      "❌ Enviar a imagem 3D para o cliente com cores de tela não calibradas para a tabela de linhas reais."
    ],
    troubleshootingTips: [
      "Software lento durante o desenho: trabalhe no modo de visualização vetorial (modo 1D/2D) e ative a simulação de pontos 3D apenas para conferência final.",
      "Simulação mostrando buracos no meio do bordado: aumente a densidade ou ajuste a compensação de repuxo do objeto.",
      "Cliente aprovou o 3D mas reclamou da cor real: utilize sempre tabelas de fios padronizadas e informe que tons de monitores podem variar."
    ],
    dicaArtrelados: "Use a Simulação de Pontos 3D para criar fotos profissionais dos seus bordados antes mesmo de bordar! Adicione uma imagem de toalha de fundo no programa, ative o TrueView e tire um print para divulgar nas suas redes sociais!",
    voceSabia: "O sistema de renderização TrueView da Wilcom foi patenteado no início dos anos 1990 e revolucionou a forma como a indústria da moda passou a encomendar bordados computadorizados.",
    practicalExercise: "Digitalize uma flor com folhas. Alterne entre o modo vetorial plano (tecla 'T' desligada) e o modo de Simulação de Pontos 3D (tecla 'T' ligada). Veja a mágica dos fios ganhando brilho e volume na tela.",
    quickSummary: "Simulação de Pontos é a renderização 3D fotorrealista que exibe o brilho, a textura e o volume dos fios na tela exatamente como na peça pronta bordada.",
    relatedTerms: ["TrueView (Visualização Realista)", "Simulação do Bordado", "Mockup Digital", "Reflexo de Luz", "Paleta de Cores"],
    tags: ["simulação 3d", "trueview", "fotorrealismo", "brilho", "mockup"]
  },
  {
    id: "simulacao-de-execucao",
    code: "S-030",
    letter: "S",
    term: "Simulação de Execução",
    pronunciation: "si-mu-la-ção de e-xe-cu-ção",
    level: "Intermediário 🟡",
    category: "Mecânica & Operação",
    grammarClass: "Substantivo feminino composto.",
    origin: "Dos testes de rastreamento de limites físicos e perímetro de pantógrafo em controle numérico (CNC).",
    summary: "Verificação prévia na própria máquina de bordar que percorre os limites do bastidor para garantir que a agulha não baterá no aro.",
    definition: "A Simulação de Execução (ou Traçado de Área / Trace / Hoop Check / Bounding Box Test) é o procedimento operacional executado no painel da máquina de bordar antes do início da costura. A máquina move o pantógrafo desenhando o perímetro externo máximo da matriz (retângulo ou contorno de limites) com a agulha erguida, permitindo verificar visualmente o enquadramento no bastidor e prevenir colisões mecânicas.",
    technicalDetails: "Muitas máquinas modernas realizam a simulação em dois modos: 'Traçado Retangular' (Bounding Box), que percorre os 4 cantos extremos (X min, X max, Y min, Y max); e 'Traçado de Contorno' (Exact Contour Trace), que segue a silhueta real do bordado a 2 mm de distância da agulha.",
    beginnerExplanation: "É o botão 'Traçar' ou 'Verificar Área' na máquina: ela dá uma volta rápida com o bastidor mostrando exatamente onde o desenho vai cair. Isso garante que a agulha não vai bater na borda de plástico do bastidor e quebrar.",
    howItWorks: [
      "1. A operadora encaixa o bastidor com o tecido na máquina e carrega a matriz.",
      "2. Pressiona o botão 'Traçar / Testar Área' no painel da máquina.",
      "3. O pantógrafo se desloca percorrendo os quatro cantos máximos do desenho.",
      "4. A operadora observa a distância entre a agulha e a borda plástica do aro.",
      "5. Se estiver centralizado e livre de riscos de colisão, dá a partida com total segurança.",
      "6. A produção transcorre sem sustos ou quebras de agulha."
    ],
    applications: [
      "Bordados em peças montadas e pequenas (bolsos, punhos, golas, sapatinhos de bebê).",
      "Centralização precisa de desenhos sobre monogramas impressos ou brasões aplicados.",
      "Prevenção de quebra de agulha e quebra do aro do bastidor por colisão mecânica.",
      "Validação de espaço ao usar bastidores especiais (bastidores magnéticos, de boné ou de meia)."
    ],
    characteristics: [
      "Procedimento de segurança obrigatório em qualquer ateliê profissional.",
      "Executado em menos de 10 segundos na própria máquina.",
      "Protege o pantógrafo e o motor de passo contra trancos e sobrecarga mecânica."
    ],
    commonErrors: [
      "❌ Iniciar o bordado sem fazer o teste de traçado e ouvir a agulha bater com violência no aro plástico do bastidor.",
      "❌ Trocar para um bastidor menor na máquina sem reconfigurar o tamanho do bastidor na tela.",
      "❌ Não observar se o tecido solto em volta do bastidor pode enroscar na barra de agulhas durante o movimento."
    ],
    troubleshootingTips: [
      "Traçado bateu no aro do bastidor: reduza a escala da matriz ou troque por um bastidor de tamanho maior.",
      "Bordado saindo fora do centro da peça: utilize os botões de seta do painel para reposicionar o ponto de partida e repita o traçado.",
      "Máquina travando ao traçar: verifique se o bastidor não está engatado de forma invertida ou se não há panos soltos prendendo o pantógrafo."
    ],
    dicaArtrelados: "Adote a 'Regra do Dedo': ao fazer a Simulação de Execução (Traçado) na sua máquina, veja se sobra pelo menos a largura de um dedo entre a agulha e a borda do bastidor. Sobrando esse espacinho, você borda com 100% de paz e segurança!",
    voceSabia: "Uma colisão de barra de agulha com o aro plástico do bastidor em velocidade máxima pode desalinhar o sincronismo da lançadeira (Timing Hook) e empenar a barra da agulha em menos de um décimo de segundo.",
    practicalExercise: "Coloque um bastidor com tecido na sua máquina. Carregue uma matriz e aperte o botão de 'Traçado / Trace' no painel. Acompanhe com os olhos o movimento do bastidor e veja como ele delimita a área exata da costura.",
    quickSummary: "Simulação de Execução é o teste de traçado na máquina que move o bastidor nos limites do desenho antes de costurar para evitar colisões e garantir a centralização.",
    relatedTerms: ["Traçado de Bastidor (Trace)", "Área de Costura", "Bastidor de Bordado", "Sincronismo de Lançadeira", "Segurança de Ponto"],
    tags: ["traçado", "trace", "segurança", "bastidor", "operação"]
  }
];

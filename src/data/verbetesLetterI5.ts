import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART5: Verbete[] = [
  {
    id: "i-025-inicio-e-fim-de-objeto-de-bordado-cruz-verde-vermelha",
    code: "I-025",
    term: "Início e Fim de Objeto de Bordado & Ponto de Entrada/Saída (Object Entry and Exit Points - Green/Red Cross Coordinates)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim initium (início) e finis (término). Princípio de roteamento e otimização de caminhos na teoria dos grafos aplicada ao bordado digital.",
    summary: "Pontos exatos (cruz verde para entrada e cruz vermelha para saída) onde a agulha começa e termina de costurar um objeto, essenciais para evitar saltos e cortes de linha.",
    definition: "O Início e Fim de Objeto de Bordado e Definição de Pontos de Entrada e Saída (Object Entry & Exit Points / Start & Stop Registration - Green and Red Cross Nodes) é o protocolo fundamental de roteamento geométrico no software de digitalização que estabelece onde o algoritmo iniciará a costura de um determinado bloco gráfico (marcado convencionalmente por uma cruz verde '➕') e onde depositará o último ponto antes de viajar para o próximo objeto (marcado por uma cruz vermelha '❌'). A manipulação inteligente e estratégica desses pontos — posicionando a saída de um objeto exatamente colada à entrada do objeto seguinte — elimina saltos desnecessários (Jump Stitches), reduz drasticamente o número de cortes de linha automáticos e esconde caminhos de viagem por baixo dos preenchimentos.",
    technicalDetails: "Geometria de roteamento e otimização:\n• Ponto de Entrada (Entry Point / Green Cross): Local da primeira penetração com micro-pontos de ancoragem (Tie-In) ou costura de base (Underlay);\n• Ponto de Saída (Exit Point / Red Cross): Local do último ponto de acabamento com nó de amarração (Tie-Off);\n• Conexão Direta (Closest Point Connection): Recurso que calcula a menor distância euclidiana entre objetos vizinhos;\n• Redução de tempo de ciclo: Otimização de entrada/saída reduz o tempo de máquina em até 25% em matrizes complexas.",
    howItWorks: [
      "1. O programador está digitalizando uma palavra de 6 letras conectadas (ex: 'Brasil').",
      "2. Ele digitaliza a primeira letra ('B') com ponto de entrada no topo e saída no pé direito inferior.",
      "3. Em vez de deixar o ponto de entrada da segunda letra ('r') no topo aleatoriamente, ele move a cruz verde da letra 'r' para o pé esquerdo inferior, encostada na saída da letra 'B'.",
      "4. Ele repete esse alinhamento de 'saída colada na entrada' para todas as letras seguintes.",
      "5. Ao compilar o arquivo para a máquina de bordar, o software não precisa gerar nenhum comando de corte nem salto flutuante entre as letras.",
      "6. A máquina costura a palavra inteira em um fluxo contínuo e veloz, sem parar e sem cortar a linha uma única vez.",
      "7. A peça sai da máquina com acabamento limpíssimo e sem nenhum fiapo para aparar.",
    ],
    beginnerExplanation: "É como escolher onde você começa a desenhar com o lápis e onde você termina! No programa de bordado, cada pedaço do desenho tem uma cruzinha verde (onde a máquina começa a costurar) e uma cruzinha vermelha (onde ela termina). Se você colocar a cruzinha vermelha de uma letra bem coladinha na cruzinha verde da próxima letra, a máquina pula de uma para a outra num segundo, sem precisar cortar a linha e sem deixar fios soltos na roupa!",
    applications: [
      "Digitalização contínua de textos cursivos e fontes com emendas invisíveis",
      "Otimização de monogramas e desenhos florais reduzindo o número de cortes de linha",
      "Ocultamento de caminhos de viagem por baixo de pontos cheios e tatamis",
      "Aumento drástico da velocidade de produção em fábricas de bordado de alto volume"
    ],
    commonErrors: [
      "Deixar o ponto de saída em um canto oposto, forçando a máquina a atravessar o desenho com um ponto corrido visível por cima do bordado",
      "Não conferir as entradas e saídas após redimensionar ou mover objetos na tela",
      "Colocar entrada e saída muito próximas em objetos vazados, gerando acúmulo de nós no mesmo ponto"
    ],
    troubleshootingTips: [
      "No Wilcom ou Hatch, pressione a tecla 'H' (Ferramenta Reformar / Reshape) para visualizar e arrastar as cruzes verde e vermelha com o mouse",
      "Sempre posicione a saída de uma camada de Underlay no mesmo ponto onde a camada de acabamento superior começará a costurar",
      "Para desenhos com muitas peças da mesma cor, faça o caminho mental do 'desenho sem tirar o lápis do papel' para posicionar as entradas e saídas",
      "Utilize a função 'Otimizar Pontos de Entrada/Saída' (Auto Closest Join) do software quando tiver dezenas de pequenos detalhes"
    ],
    dicaArtrelados: "Ajustar os pontos de entrada e saída é o grande segredo dos programadores mais rápidos e bem pagos do mercado! Uma matriz bem amarrada com entradas e saídas inteligentes borda 30% mais rápido e economiza facas de corte e tempo de ateliê!",
    voceSabia: "O algoritmo de otimização de entrada e saída de pontos de bordado é baseado no famoso problema matemático do 'Caixeiro Viajante' (Traveling Salesperson Problem), formulado no século XIX para descobrir a rota mais curta possível entre múltiplos destinos!",
    practicalExercise: "No seu software, crie três círculos lado a lado da mesma cor: ative a ferramenta de nós, arraste a cruz vermelha do círculo 1 para encostar na verde do círculo 2 e simule no Stitch Player para ver a máquina costurar tudo sem cortes!",
    quickSummary: "Coordenadas exatas onde a máquina começa (cruz verde) e termina (cruz vermelha) cada objeto, essenciais para evitar cortes de linha.",
    relatedTerms: ["Caminho de Viagem / Travel Run", "Tie-In & Ponto de Ancoragem", "Tie-Off & Ponto de Amarração Final", "Cortador de Linha Automático"],
    tags: ["i-025", "inicio e fim", "entry point", "exit point", "cruz verde", "cruz vermelha", "software", "artrelados"],
    bibliographicReferences: [
      "GRAPH THEORY & TRAVEL PATH OPTIMIZATION IN EMBROIDERY PUNCHING. Zurich, 2023.",
      "WILCOM EMBROIDERYSTUDIO ADVANCED PATHING WORKFLOWS. Sydney, 2022.",
      "ARTRELADOS. O Roteamento Perfeito: Como Posicionar Entradas e Saídas para Matrizes Ultra Rápidas e Sem Fiapos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-026-impermeabilizacao-pre-bordado-e-selagem-costura",
    code: "I-026",
    term: "Impermeabilização Pré-Bordado & Selagem Termocolante de Costura (Pre-Embroidery Waterproofing & Seam Sealing Tape)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim impermeabilis (que não se deixa atravessar por líquidos) e do inglês seam sealing (vedação de costura por fita termoplástica).",
    summary: "Processo de vedação com fita termocolante no avesso do bordado em jaquetas impermeáveis, capas de chuva e mochilas para evitar que a água passe pelos furos da agulha.",
    definition: "A Impermeabilização Pré/Pós-Bordado e Selagem Termocolante de Perfurações (Embroidery Waterproof Seam Sealing Protocol & Hydrophobic Membrane Shielding) é o conjunto de procedimentos de engenharia têxtil aplicado em vestuário técnico de alto desempenho (como jaquetas corta-vento impermeáveis tipo Gore-Tex, capas de chuva de poliuretano, tecidos de náilon ripstop resinados e estofamentos náuticos). Como a máquina de bordar penetra o tecido milhares de vezes (criando micro-furos que destroem a coluna d'água da membrana impermeável), a técnica utiliza fitas seladoras termoplásticas de poliuretano (PU Seam Tape) aplicadas no avesso do bordado com prensa térmica ou ferro quente a 130°C–150°C, fundindo uma barreira elástica 100% estanque sobre a linha da bobina que impede a infiltração de água e vento.",
    technicalDetails: "Propriedades físicas e termofixação da fita de selagem:\n• Material da fita: Poliuretano termoplástico (TPU) de 3 camadas com adesivo ativado por calor (Hot-Melt Adhesive);\n• Temperatura de aplicação: 135°C a 155°C sob pressão de 3 a 4 bar durante 12 a 15 segundos;\n• Resistência à coluna d'água: Suporta pressão hidrostática superior a 10.000 mm H2O (ISO 811);\n• Agulha recomendada: Calibre ultrafino 65/9 ou 70/10 com ponta aguda (Microtex / R) para minimizar o diâmetro do furo na resina do tecido.",
    howItWorks: [
      "1. A empresa de aventuras outdoor encomenda o bordado do seu logotipo no peito de 50 jaquetas impermeáveis de alta montanha (Gore-Tex).",
      "2. O digitalizador reduz a densidade da matriz para 0,45mm e utiliza uma agulha fina Microtex 70/10 para furar o mínimo possível o tecido impermeável.",
      "3. O bordado é executado na máquina com entretela de corte leve.",
      "4. Ao retirar do bastidor, o verso da jaqueta apresenta milhares de micropunturas por onde a chuva passaria facilmente.",
      "5. A operadora recorta um pedaço de fita de selagem impermeável termocolante (Seam Sealing Tape) que cubra todo o avesso do bordado com margem de 10mm.",
      "6. Posiciona a fita sobre o avesso e aplica calor com a prensa térmica a 140°C por 12 segundos com uma folha de teflon protetora.",
      "7. A camada de poliuretano derrete e funde-se intimamente com as fibras e linhas da bobina, criando uma película impermeável invisível e flexível.",
      "8. A jaqueta é testada sob jato d'água pressurizado e permanece 100% seca no lado interno!",
    ],
    beginnerExplanation: "Quando você borda em uma jaqueta de chuva ou capa impermeável, a agulha fura o pano milhares de vezes, virando uma 'peneira' por onde a água da chuva pode entrar e molhar a pessoa! Para a roupa continuar 100% à prova d'água, a gente cola uma fitinha plástica especial que derrete com o calor do ferro no avesso do bordado. Ela veda todos os buraquinhos da agulha e a água nunca mais passa!",
    applications: [
      "Bordados em jaquetas esportivas impermeáveis, anoraks de montanha e corta-ventos",
      "Capas de chuva profissionais, uniformes de motociclistas e roupas de trabalho offshore",
      "Mochilas estanques de camping, sacolas térmicas e capas de barco náuticas",
      "Estofamentos impermeáveis para áreas externas de piscinas e iates de luxo"
    ],
    commonErrors: [
      "Bordar com matrizes hiperdensas e agulha grossa 90/14 em tecidos resinados (o tecido rasga como papel picotado)",
      "Aplicar ferro excessivamente quente derretendo o tecido sintético da jaqueta",
      "Esquecer de selar o verso e entregar uma jaqueta impermeável que vaza água no peito do cliente"
    ],
    troubleshootingTips: [
      "Em tecidos impermeáveis, digitalize com densidades mais abertas (0,45mm a 0,50mm) para não cortar a membrana impermeável",
      "Utilize sempre agulhas ponta fina aguda (Microtex 70/10) e linhas de poliéster impermeabilizadas (Hydrophobic Thread)",
      "Ao aplicar a fita termocolante de selagem, use sempre papel antiaderente ou folha de teflon para proteger a base da prensa",
      "Faça um teste de selagem em um retalho antes de aplicar em jaquetas técnicas caras de clientes"
    ],
    dicaArtrelados: "Oferecer bordado impermeável com selagem térmica de costura é um serviço de altíssimo valor agregado que pouquíssimos ateliês sabem fazer! Você pode cobrar o dobro pelo bordado em jaquetas técnicas garantindo estanqueidade total!",
    voceSabia: "As primeiras fitas de selagem termocolante de costuras impermeáveis foram desenvolvidas pela NASA na década de 1960 para vedar as costuras dos trajes espaciais do Projeto Apollo usados pelos astronautas que pisaram na Lua!",
    practicalExercise: "Borde um pequeno desenho em um pedaço de náilon impermeável (tipo náilon resinado ou Cordura): cole um pedaço de fita termocolante no verso com o ferro morno e jogue água por cima para ver a mágica da vedação estanque!",
    quickSummary: "Aplicação de fita termoplástica no avesso do bordado para vedar os furos da agulha em jaquetas e tecidos impermeáveis.",
    relatedTerms: ["Agulha Microtex", "Densidade de Ponto", "Entretela de Recorte / Cut-Away", "Teflon Protetor"],
    tags: ["i-026", "impermeabilizacao", "jaquetas impermeaveis", "selagem de costura", "seam tape", "gore-tex", "artrelados"],
    bibliographicReferences: [
      "TECHNICAL TEXTILE WATERPROOFING & SEAM SEALING STANDARDS. ISO 811 Hydrostatic Head Testing. Geneva, 2023.",
      "OUTDOOR APPAREL EMBROIDERY & FUNCTIONAL MEMBRANE INTEGRATION. Munich, 2022.",
      "ARTRELADOS. Bordados Técnicos e Impermeáveis: O Guia Completo de Selagem Térmica para Jaquetas e Artigos Outdoor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-027-isometria-e-visualizacao-3d-trueview",
    code: "I-027",
    term: "Isometria & Visualização 3D TrueView de Pontos (TrueView Isometric Stitch Simulation & Thread Luster)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do grego isometria (medidas iguais / projeção tridimensional sem ponto de fuga) e do inglês TrueView (visão real fidedigna).",
    summary: "Modo visual do software que simula na tela o bordado realista em 3D, mostrando a textura do tecido, o relevo dos pontos e o brilho da linha.",
    definition: "A Isometria e Simulação Visual Tridimensional TrueView (TrueView 3D Realistic Stitch Simulation & Isometric Textile Rendering) é o motor gráfico de renderização volumétrica integrado aos softwares profissionais de bordado (como Wilcom, Hatch, Bernina e Tajima DG) que substitui as linhas vetoriais simples de coordenadas por uma representação foto-realista em alta resolução do bordado final. O sistema calcula a espessura física cilíndrica dos filamentos de linha, a sobreposição das camadas de pontos em múltiplos níveis no eixo Z, a refração e o reflexo especular de luz conforme a inclinação angular de cada ponto e a textura tridimensional do tecido de fundo (piquet, jeans, couro, linho ou malha), permitindo ao digitalizador e ao cliente visualizarem o resultado exato antes de costurar um único ponto real.",
    technicalDetails: "Recursos gráficos e algoritmos do motor TrueView:\n• Renderização volumétrica no eixo Z: Cálculo de relevo de pontos cheios, tatami e relevo 3D Puff em espuma;\n• Simulação de brilho (Thread Luster Shader): Reflexo dinâmico de luz sobre filamentos de poliéster, viscose ou fios metálicos dourados/prateados;\n• Texturas realistas de tecidos (Fabric Backgrounds): Mais de 100 texturas têxteis pré-calibradas com textura de trama e sombra;\n• Exportação de imagens de alta resolução (PNG 300 DPI): Para confecção de catálogos virtuais e aprovação instantânea com clientes via WhatsApp.",
    howItWorks: [
      "1. O programador termina de digitalizar um brasão com monogramas dourados e fundo azul marinho.",
      "2. Na tela normal, o desenho aparece como linhas e pontos geométricos.",
      "3. Ele pressiona a tecla de atalho 'T' (ou clica no botão TrueView / Visualização 3D).",
      "4. O motor gráfico renderiza instantaneamente o bordado com o brilho nobre dos fios e a textura realista de uma toalha felpuda ao fundo.",
      "5. O programador consegue enxergar na tela se há alguma falha de cobertura, se os pontos cheios estão com volume bonito e se a compensação de repuxo está correta.",
      "6. Ele clica em 'Exportar Imagem de Aprovação' e envia a foto 3D diretamente para o celular do cliente.",
      "7. O cliente visualiza a peça no WhatsApp como se já estivesse pronta e aprova o trabalho imediatamente.",
    ],
    beginnerExplanation: "É o botão mágico do programa que transforma aquele desenho cheio de linhas estranhas em uma foto 3D super realista que parece o bordado de verdade pronto na roupa! Você vê o brilho da linha, o relevo dos pontos e até o tecido da camisa no fundo! É perfeito para tirar uma foto linda e mandar para a sua cliente no WhatsApp aprovar o pedido antes mesmo de você ligar a máquina!",
    applications: [
      "Aprovação rápida e profissional de amostras virtuais com clientes à distância sem custo de produção física",
      "Detecção precoce de frestas, falhas de densidade e erros de sequência na tela do computador",
      "Criação de mockups e catálogos de produtos para lojas virtuais e redes sociais",
      "Simulação de diferentes combinações de cores de linha e fundos de tecidos em segundos"
    ],
    commonErrors: [
      "Trabalhar sempre com o TrueView ligado durante a edição de nós (deixa o computador lento e esconde os pontos de controle vetoriais)",
      "Confiar apenas na tela sem fazer teste físico de matrizes muito complexas em tecidos elásticos difíceis",
      "Enviar mockups 3D com cores muito diferentes das cores reais dos cones de linha do ateliê"
    ],
    troubleshootingTips: [
      "Trabalhe na edição com a visualização normal de nós vetoriais e ative o TrueView (tecla 'T') apenas para inspecionar o acabamento e salvar fotos de aprovação",
      "Nas configurações de tecido (Fabric Settings) do software, selecione o tecido exato em que a peça será bordada para que o programa ajuste o fundo e os underlays automaticamente",
      "Se o TrueView estiver travando o computador, reduza a qualidade de renderização nas opções gráficas do software",
      "Utilize as paletas de cores oficiais dos fabricantes de linha (Isacord, Madeira, Lumina) para que a cor da tela seja idêntica ao cone real"
    ],
    dicaArtrelados: "O TrueView é a sua maior ferramenta de vendas! Quando a sua concorrente manda um desenho tosco no papel e você manda uma simulação 3D maravilhosa com o brilho da linha dourada e a textura da toalha, o cliente fecha com você na mesma hora!",
    voceSabia: "O sistema TrueView foi introduzido pela primeira vez no software Wilcom na Austrália na década de 1990, revolucionando a indústria global de bordados ao eliminar a necessidade de produzir amostras físicas bordadas em tecido para aprovação de compradores internacionais!",
    practicalExercise: "Abra qualquer matriz no seu computador e aperte a tecla 'T': mude o tecido de fundo para 'Camisa Jeans' e veja como o bordado ganha vida e realismo instantaneamente na tela!",
    quickSummary: "Modo gráfico 3D que simula o bordado real na tela com relevo volumétrico, brilho de fios e textura de tecidos.",
    relatedTerms: ["Simulador de Pontos / Stitch Player", "Paleta de Cores", "Densidade de Ponto", "Mockup Virtual de Bordado"],
    tags: ["i-027", "trueview", "visualizacao 3d", "isometria", "simulacao", "mockup", "software", "artrelados"],
    bibliographicReferences: [
      "3D COMPUTER GRAPHICS & TEXTILE SHADING IN EMBROIDERY CAD. Sydney, 2023.",
      "VIRTUAL PROTOTYPING IN APPAREL DESIGN & MANUFACTURING. London, 2022.",
      "ARTRELADOS. Vendendo Bordados pelo WhatsApp: Como Usar Simulações 3D TrueView para Encantar Clientes e Fechar Pedidos na Hora. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-028-interseccao-de-vetores-e-soldagem-de-formas",
    code: "I-028",
    term: "Intersecção de Vetores, Soldagem de Formas & Operações Booleanas (Vector Intersection, Welding & Boolean Stitch Operations)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim intersectio (corte/cruzamento mútuo) e da álgebra booleana (George Boole, 1847). Métodos fundamentais de computação geométrica vetorial.",
    summary: "Ferramentas do software (União, Intersecção e Exclusão) que fundem formas sobrepostas e eliminam pontos escondidos embaixo de outros objetos para evitar bordados duros.",
    definition: "A Intersecção de Vetores, Soldagem de Formas e Operações Booleanas no Bordado (Vector Intersection, Shape Welding & Boolean Embroidery Operations - Union, Subtract, Intersect & Remove Overlaps) é o conjunto de algoritmos de geometria computacional aplicados na preparação de matrizes que realizam a fusão, recorte ou subtração mútua entre dois ou mais objetos gráficos que se sobrepõem no espaço de desenho. A função primária dessas operações — especialmente a 'Remoção de Sobreposições / Remove Overlaps' — é recortar e eliminar automaticamente os pontos de fundo que ficariam ocultos por baixo de camadas superiores, prevenindo o empilhamento desnecessário de milhares de pontos no mesmo local, o endurecimento excessivo da peça (efeito 'placa de papelão') e quebras frequentes de agulha.",
    technicalDetails: "Operações booleanas essenciais na digitalização:\n• União / Soldagem (Weld / Union): Funde múltiplos objetos adjacentes em um único contorno contínuo sem divisões internas;\n• Subtração / Remoção de Sobreposição (Subtract / Remove Overlaps): Corta a área oculta do objeto inferior mantendo uma margem de sobreposição segura (Overlap Margin) de 0,8mm a 1,2mm para evitar frestas;\n• Intersecção (Intersect): Cria um novo objeto correspondente exatamente à área comum compartilhada por duas formas que se cruzam;\n• Exclusão (Exclude): Elimina a área de cruzamento mantendo apenas as extremidades externas.",
    howItWorks: [
      "1. O programador precisa digitalizar um urso de pelúcia com uma camiseta listrada por cima.",
      "2. Ele digitaliza o corpo inteiro do urso em ponto tatami marrom e, em seguida, desenha a camiseta azul por cima.",
      "3. Se ele não fizer nada, a máquina vai costurar todo o peito marrom (10.000 pontos) e depois bordar toda a camiseta azul por cima (outros 8.000 pontos).",
      "4. O peito do urso ficaria grosso, duro como uma madeira e a agulha quebraria com facilidade.",
      "5. O programador seleciona a camiseta e o corpo do urso e clica em 'Remover Sobreposições / Remove Overlaps'.",
      "6. O software recorta automaticamente o tatami marrom por baixo da camiseta, deixando apenas uma margem de segurança de 1mm de encaixe.",
      "7. A matriz economiza 8.000 pontos inúteis, reduz o tempo de máquina em 10 minutos e o bordado fica super macio e flexível no tecido.",
    ],
    beginnerExplanation: "É como usar uma tesoura mágica no computador para cortar os tecidos que ficam escondidos por baixo de outros! Se você desenhar um macaquinho e colocar uma roupa nele, não precisa a máquina bordar a barriga do macaco por baixo da roupa para depois bordar a roupa por cima! Essa ferramenta recorta o desenho de baixo certinho, fazendo o bordado ficar macio, levinho e muito mais rápido de bordar!",
    applications: [
      "Eliminação de camadas ocultas e redução drástica da contagem total de pontos da matriz",
      "Fusão de letras e arabescos cursivos em um único objeto de ponto cheio contínuo",
      "Prevenção de endurecimento do tecido e redução do consumo desnecessário de linha",
      "Criação de encaixes perfeitos entre diferentes cores sem deixar buracos brancos"
    ],
    commonErrors: [
      "Remover sobreposições com margem zero (ao bordar, o repuxo abre uma fresta branca feia entre o objeto de cima e o de baixo)",
      "Soldar objetos de direções de pontos incompatíveis criando nós caóticos",
      "Esquecer de remover sobreposições em matrizes infantis grandes, criando bordados grossos que incomodam a pele do bebê"
    ],
    troubleshootingTips: [
      "Ao usar a ferramenta 'Remover Sobreposições / Remove Overlaps', configure SEMPRE uma margem de sobreposição de +0,8mm a +1,2mm para compensar o repuxo mecânico do tecido",
      "Para soldar letras cursivas manuscritas, una os nós de encaixe antes de aplicar a ferramenta de ponto cheio",
      "Em detalhes muito pequenos (menos de 2mm), NÃO remova a sobreposição, pois a camada de cima precisa assentar sobre uma base firme",
      "Verifique sempre a ordem de camadas após uma operação booleana para garantir que a ordem de costura continue correta"
    ],
    dicaArtrelados: "Remover sobreposições desnecessárias é o segredo para fazer bordados infantis macios que não pinicam o corpinho do bebê! Uma matriz bem recortada fica suave como uma seda e economiza milhares de pontos na sua máquina!",
    voceSabia: "As operações booleanas de união e intersecção foram criadas em 1847 pelo matemático britânico George Boole e são a base lógica que permite o funcionamento de todos os computadores, celulares e softwares gráficos do mundo moderno!",
    practicalExercise: "No seu software, desenhe um círculo grande vermelho e um quadrado azul menor por cima: aplique a ferramenta 'Remover Sobreposições' e arraste o quadrado para o lado para ver o buraco perfeito recortado no círculo vermelho!",
    quickSummary: "Operações geométricas que fundem formas e eliminam pontos ocultos debaixo de outras camadas, deixando o bordado leve.",
    relatedTerms: ["Compensação de Repuxo", "Contagem de Pontos", "Densidade de Ponto", "Ordem de Camadas / Sequencing"],
    tags: ["i-028", "interseccao", "soldagem", "operacoes booleanas", "remove overlaps", "otimizacao", "software", "artrelados"],
    bibliographicReferences: [
      "COMPUTATIONAL GEOMETRY IN VECTOR EMBROIDERY DESIGN. Boston, 2023.",
      "ADVANCED WILCOM DIGITIZING TECHNIQUES: BOOLEAN SHAPES & OVERLAPS. Sydney, 2022.",
      "ARTRELADOS. Matrizes Leves e Macias: Como Usar Operações Booleanas para Cortar Pontos Ocultos e Encantar Mães de Bebês. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-029-insercao-de-aplicativo-termocolante-com-borda-satin",
    code: "I-029",
    term: "Inserção de Aplicativo Termocolante & Borda Satin (Appliqué Patch In-Hoop Placement & Heat-Seal Bonding)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do francês appliquer (aplicar/sobrepor) e do grego thermos (calor) e kollan (colar). Técnica clássica de economia de pontos e sobreposição têxtil.",
    summary: "Técnica de preencher desenhos grandes usando retalhos de tecido termocolante presos por ponto cheio decorativo nas bordas, economizando 80% de linha e tempo.",
    definition: "A Inserção de Aplicativo Termocolante com Acabamento em Ponto Cheio (In-Hoop Appliqué Placement with Heat-Seal Film & Satin Stitch Border Protocol) é a metodologia de manufatura e digitalização de bordados na qual grandes áreas fechadas de um desenho (como números esportivos, corpos de bichinhos e letras gigantes) são preenchidas por um retalho de tecido recortado (tricoline, feltro, glitter ou sarja) pré-preparado com película adesiva termocolante definitiva no avesso. Executada em três etapas sequenciais na máquina (Linha de Marcação -> Linha de Fixação/Corte -> Cordão de Ponto Cheio perimétrico de 3mm a 4mm), a técnica reduz o tempo de máquina e o consumo de linha em mais de 80% em comparação com preenchimentos maciços de tatami, proporcionando peças incrivelmente leves, coloridas e de toque macio.",
    technicalDetails: "Sequência estrutural da matriz de aplique:\n• Camada 1 - Ponto de Marcação (Placement Stitch): Ponto corrido simples a 2,5mm indicando a silhueta no estabilizador;\n• Camada 2 - Ponto de Fixação (Tackdown Stitch): Ponto corrido duplo ou zigue-zague estreito a 1,5mm da borda para ancorar o tecido antes do corte manual ou a laser;\n• Camada 3 - Borda de Cobertura (Cover Stitch): Ponto cheio (Satin) com largura de 3,2mm a 4,5mm e densidade de 0,38mm com underlay de zigue-zague interno;\n• Termofixação final: Prensa térmica a 150°C por 15 segundos para fusão definitiva do filme termocolante no tecido-base.",
    howItWorks: [
      "1. A bordadeira prepara o retalho de tecido do aplique colando uma folha de papel termocolante definitivo no avesso com ferro morno.",
      "2. Coloca o tecido principal e a entretela no bastidor da máquina.",
      "3. A máquina borda a Etapa 1 (Placement Line): desenha o contorno exato da figura (ex: uma estrela) e para automaticamente (Stop).",
      "4. A operadora posiciona o retalho de tecido preparado cobrindo toda a marcação da estrela.",
      "5. Dá a partida: a máquina executa a Etapa 2 (Tackdown Line), costurando uma costura firme que prende o retalho.",
      "6. A máquina para novamente. Sem tirar a peça do bastidor, a bordadeira utiliza uma tesoura de ponta curvada (tipo bico de pato) e recorta o excesso de tecido bem rente à costura.",
      "7. Dá a partida: a máquina executa a Etapa 3, costurando um cordão denso e brilhante de ponto cheio que cobre perfeitamente a borda cortada.",
      "8. Ao retirar da máquina, passa a prensa térmica no verso para fundir o termocolante para sempre.",
      "9. O aplique fica perfeito, sem desfiar e com acabamento de loja de grife!",
    ],
    beginnerExplanation: "É a técnica mais amada do bordado para fazer desenhos grandes gastando quase nada de linha e tempo! Em vez da máquina ficar 40 minutos bordando um coração gigante ponto por ponto, a máquina desenha o coração, você coloca um retalhinho de tecido bonito em cima, corta a sobrinha com a tesoura e a máquina faz uma moldura linda de ponto cheio em volta! Fica pronto em 5 minutos, fica levinho e lindo!",
    applications: [
      "Números grandes e nomes em camisas de futebol, beisebol e uniformes colegiais",
      "Enxovais infantis, naninhas, fraldas e almofadas com desenhos grandes e macios",
      "Bordados em moletons e jaquetas com tecidos com glitter, pelúcia ou estampas florais",
      "Redução drástica de tempo de produção e custos em peças promocionais de grande formato"
    ],
    commonErrors: [
      "Cortar o tecido do aplique longe demais da linha de fixação (os fiapos de pano sobram para fora do ponto cheio)",
      "Cortar os pontos de fixação com a tesoura por descuido, fazendo a ponta do aplique soltar",
      "Fazer o cordão de ponto cheio muito estreito (menos de 2,5mm), não cobrindo a borda cortada com segurança"
    ],
    troubleshootingTips: [
      "Utilize SEMPRE uma tesoura tipo 'Bico de Pato / Pelicano' para recortar o excesso de tecido: a aba curva protege o tecido de baixo contra cortes acidentais!",
      "Use papel termocolante definitivo de boa qualidade (que não descole nas lavagens) para evitar que o centro do aplique fique estufado",
      "Configure a largura do ponto cheio de acabamento entre 3,5mm e 4,0mm com compensação de repuxo de +0,25mm",
      "Ao recortar o tecido, apoie o bastidor sobre uma mesa plana: NUNCA force o centro do bastidor para baixo para não soltar o tecido do aro"
    ],
    dicaArtrelados: "O aplique é a melhor técnica para você ganhar dinheiro rápido! Um desenho que levaria 30.000 pontos para bordar todo em linha leva apenas 3.000 pontos em aplique! Você gasta 90% menos tempo e linha e o cliente ama porque fica macio e não pesa na roupa!",
    voceSabia: "A técnica do aplique existe há mais de 3.000 anos e foi encontrada em mantos e tendas cerimoniais no Antigo Egito e na Pérsia Antiga, onde reis e nobres aplicavam pedaços de sedas preciosas e veludos sobre tecidos de linho para criar brasões monumentais!",
    practicalExercise: "Baixe uma matriz de aplique de coração: passe o termocolante em um retalho de tecido estampado, siga as 3 etapas de paradas na sua máquina e sinta a satisfação de fazer um aplique com acabamento impecável!",
    quickSummary: "Técnica de preencher figuras grandes com retalhos de tecido cobertos por ponto cheio, economizando 80% de linha e tempo.",
    relatedTerms: ["Placement Stitch / Ponto de Marcação", "Tackdown Stitch / Ponto de Fixação", "Tesoura Bico de Pato", "Ponto Cheio / Ponto Satin"],
    tags: ["i-029", "aplique", "termocolante", "borda satin", "ponto cheio", "patch", "economia de pontos", "artrelados"],
    bibliographicReferences: [
      "APPLIQUÉ EMBROIDERY DIGITIZING & HEAT-SEAL TECHNOLOGY. New York, 2023.",
      "THE ESSENTIAL GUIDE TO MACHINE EMBROIDERY APPLIQUÉ. London, 2022.",
      "ARTRELADOS. O Guia Supremo dos Apliques Perfeitos: Como Ganhar Tempo, Economizar Linha e Criar Peças Deslumbrantes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-030-intensidade-de-tensao-da-mola-check-spring",
    code: "I-030",
    term: "Intensidade de Tensão da Mola Check Spring & Curso Dinâmico (Check Spring Tension & Stroke Calibration)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês check spring (mola de retenção e amortecimento cinemático). Componente mecatrônico do conjunto de discos de tensão superior.",
    summary: "Mola espiral sensível no tensor superior da máquina que amortece o puxão da linha e mantém o fio esticado enquanto a agulha fura o tecido.",
    definition: "A Intensidade de Tensão e Curso Dinâmico da Mola de Recuperação Check Spring (Check Spring Tension Calibration & Stroke Range Dynamics / Take-Up Spring) é o ajuste micromecânico da pequena mola espiral de aço temperado montada concentricamente no bloco de discos de tensão da linha superior da máquina de bordar. Sua função primária é amortecer as oscilações violentas de tração provocadas pelo movimento alternado do estica-fio em alta velocidade (até 1.200 PPM) e manter a linha superior sob suave tensão positiva durante o momento exato em que a agulha penetra o tecido e a lançadeira captura a laçada, evitando a formação de laçadas frouxas, nós 'ninho de pássaro' e falsos alarmes de quebra de linha.",
    technicalDetails: "Metrologia e calibração da mola Check Spring:\n• Força de tensão dinâmica: 5g a 15g de força (ajustável pela rotação do eixo interno do conjunto tensor);\n• Curso angular de trabalho (Stroke): 6mm a 10mm de deflexão vertical;\n• Ponto de liberação mecânica: A mola deve concluir seu curso descendente e encostar no batente metálico exatamente quando a ponta da agulha toca a superfície do tecido;\n• Frequência de fadiga: Suporta mais de 50 milhões de ciclos de deflexão sem perda de elasticidade linear.",
    howItWorks: [
      "1. A máquina está bordando em alta velocidade.",
      "2. O estica-fio desce rapidamente para fornecer folga de linha para a agulha furar o tecido.",
      "3. A mola Check Spring ergue-se instantaneamente, absorvendo a folga da linha e mantendo o fio esticado e alinhado com o olho da agulha.",
      "4. No instante em que a ponta da agulha perfura o tecido, a mola desce até o batente inferior e libera a linha livremente.",
      "5. A laçada forma-se com precisão milimétrica atrás da cava da agulha para a lançadeira capturar.",
      "6. Em seguida, o estica-fio sobe puxando o ponto com força: a mola amortece o impacto inicial, impedindo que a linha estale e arrebente.",
      "7. Todos os pontos são amarrados com consistência uniforme do primeiro ao último ponto do bordado.",
    ],
    beginnerExplanation: "É aquela molinha fininha e brilhante que fica bem perto dos discos de tensão onde você passa a linha de cima! Ela funciona como o 'amortecedor' de um carro: quando a máquina está costurando super rápido, a linha dá trancos fortes. Essa molinha sobe e desce sem parar para amortecer esses trancos e não deixar a linha arrebentar nem ficar frouxa soltando laçadas feias!",
    applications: [
      "Eliminação de laçadas frouxas e pontos feios na superfície superior do bordado",
      "Prevenção de quebras repentinas de linhas finas (60wt) e linhas metálicas delicadas",
      "Calibração de estabilidade para bordados em altíssima velocidade (acima de 900 PPM)",
      "Resolução de falsos alarmes em sensores de quebra de linha ópticos"
    ],
    commonErrors: [
      "Mola quebrada, torta ou travada por excesso de fiapos de linha no conjunto tensor",
      "Mola regulada dura demais (arrebenta fios metálicos e linhas de viscose)",
      "Mola sem curso (não amortece a linha, fazendo o ponto ficar frouxo e desregulado)"
    ],
    troubleshootingTips: [
      "Para testar a mola: puxe a linha com a mão por baixo do estica-fio e observe se a mola sobe e desce de forma suave e rápida sem enroscar",
      "Se a mola estiver fraca, solte o parafuso de fixação do conjunto tensor e gire o eixo central no sentido anti-horário em 1/4 de volta para dar mais pressão",
      "Para linhas metálicas difíceis, reduza a força da mola Check Spring para que ela atue de forma ultra suave",
      "Limpe o conjunto tensor anualmente com um fio dental sem cera passado entre os discos para remover cera acumulada"
    ],
    dicaArtrelados: "Muitas bordadeiras passam meses sofrendo com linhas que arrebentam à toa sem saber que o problema era apenas essa molinha Check Spring que estava presa com fiapos de sujeira! Uma limpeza de 2 minutos nela faz a máquina voltar a costurar como nova!",
    voceSabia: "A mola Check Spring foi patenteada originalmente pela empresa Singer em 1879 e seu design cinemático permanece essencialmente o mesmo até hoje em todas as máquinas de bordar computadorizadas mais modernas do mundo!",
    practicalExercise: "Olhe para a frente da sua máquina onde você passa a linha: localize a molinha de arame fino, empurre-a suavemente com a ponta do dedo e sinta a pressão elástica que ela exerce para amortecer o fio!",
    quickSummary: "Molinha de amortecimento no tensor que absorve trancos e mantém a linha esticada para a laçada perfeita.",
    relatedTerms: ["Tensão da Linha Superior", "Estica-Fio", "Intertravamento de Laçada na Lançadeira", "Quebra de Linha"],
    tags: ["i-030", "check spring", "mola de tensao", "amortecedor", "mecanica", "tensao superior", "manutencao", "artrelados"],
    bibliographicReferences: [
      "THREAD TENSION DYNAMICS & CHECK SPRING CALIBRATION IN INDUSTRIAL SEWING. Tokyo, 2023.",
      "HIGH-SPEED EMBROIDERY MECHANISMS. Take-Up Spring Kinematics. Berlin, 2022.",
      "ARTRELADOS. A Mola Secreta da Sua Máquina: Como Regular a Mola Check Spring para Eliminar Quebras e Laçadas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

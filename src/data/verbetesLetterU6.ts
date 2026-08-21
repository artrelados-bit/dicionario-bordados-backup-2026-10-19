import { Verbete } from "../types";

export const VERBETES_LETTER_U6: Verbete[] = [
  {
    id: "urdume-urdidura-warp-engenharia-textil",
    code: "U-033",
    letter: "U",
    term: "Urdume / Urdidura (Warp)",
    pronunciation: "ur-du-me / ur-di-du-ra (uórp)",
    level: "Intermediário 🟡",
    category: "Insumos & Materiais",
    grammarClass: "Substantivo masculino / feminino.",
    origin: "Do latim 'ordiri' (começar a tecer, ordenar fios no tear) e do inglês técnico 'warp', referindo-se aos fios longitudinais esticados no tear durante a tecelagem.",
    summary: "Conjunto de fios paralelos esticados longitudinalmente no tear que formam a estrutura do tecido plano, determinando a direção de maior resistência à tração.",
    definition: "O Urdume (ou Urdidura / Warp) é o conjunto de fios esticados longitudinalmente no sentido do comprimento da peça no tear mecânico, paralelos à ourela (borda de fábrica). Na física do bordado computadorizado, o urdume representa o eixo de maior tensão mecânica e menor elasticidade de tecidos planos (como tricoline, sarja, brim e percal), sendo o principal parâmetro de referência para orientar os ângulos de costura e a direção da compensação de repuxamento.",
    technicalDetails: "Durante o processo de tecelagem, os fios de urdume sofrem tração constante sob peso mecânico, resultando em menor relaxamento e maior rigidez dimensional se comparados aos fios da trama (weft). Quando um bordado é aplicado com pontos cheios orientados paralelamente ao urdume, o repuxamento é significativamente menor (cerca de 30% a 40% menor) do que quando os pontos são aplicados paralelamente à trama. Na digitalização profissional, orientar a maior força de contração da matriz na direção do urdume garante estabilidade dimensional superior.",
    beginnerExplanation: "São os fios compridos que correm de cima a baixo no tecido (na direção do comprimento da peça). Eles são mais esticados e firmes do que os fios que cruzam deitados, por isso o tecido quase não estica quando você puxa na direção do urdume.",
    howItWorks: [
      "1. Na confecção do tecido, centenas de fios paralelos de urdume são tensionados no carretel do tear.",
      "2. A navete cruza os fios de trama transversalmente por cima e por baixo do urdume.",
      "3. O tecido plano formado tem o urdume paralelo à borda acabada (ourela).",
      "4. No bastidor, o bordador posiciona a peça alinhada com as linhas mestras do urdume.",
      "5. A máquina borda aplicando a tensão das laçadas sobre essa grade de sustentação rígida.",
      "6. A peça mantém a forma retilínea e não deforma no sentido longitudinal."
    ],
    applications: [
      "Análise de estabilidade e tração em camisas sociais de tricoline e popeline.",
      "Orientação de matrizes em tecidos planos pesados como brim, sarja e lona.",
      "Cálculo de compensação de encolhimento (Pull Comp) diferenciada por eixo.",
      "Alinhamento de peças corporativas e toalhas de mesa no bastidor."
    ],
    characteristics: [
      "Sentido de maior resistência mecânica e menor elasticidade no tecido plano.",
      "Corre rigorosamente paralelo à ourela (borda lateral de fábrica do tecido).",
      "Absorve a tração de pontos cheios densos com mínima distorção geométrica."
    ],
    commonErrors: [
      "❌ Cortar o tecido no sentido enviesado (a 45°) sem compensar na matriz, fazendo o bordado repuxar e virar uma hélice.",
      "❌ Ignorar a direção do urdume ao bordar camisas listradas, deixando os contornos tortos em relação às listras.",
      "❌ Esticar o tecido no sentido da trama ao montar no bastidor, deformando a base do urdume."
    ],
    troubleshootingTips: [
      "Bordado repuxando e encurtando no sentido horizontal: os pontos cheios estão paralelos à trama frouxa; aumente a compensação de repuxo ou gire a matriz para apoiar no urdume.",
      "Listras do tecido entortando ao redor do bordado: use entretela de recorte colada para travar o urdume e a trama simultaneamente.",
      "Tecido esgarçando perto das letras: reduza a densidade de penetração no sentido transversal aos fios de urdume."
    ],
    dicaArtrelados: "Para saber onde está o urdume no retalho: puxe o tecido na vertical e na horizontal! O lado que for mais firme e NÃO esticar quase nada é o urdume! Alinhe suas letras principais apoiadas nele para um bordado impecável!",
    voceSabia: "Na tecelagem egípcia antiga de 3.000 a.C., os fios de urdume de linho eram tensionados com pedras pesadas amarradas nas pontas para garantir que as túnicas dos faraós não deformassem.",
    practicalExercise: "Pegue um pedaço de tricoline de 10x10 cm. Puxe com as duas mãos no sentido do comprimento (urdume) e depois no sentido da largura (trama). Sinta com os dedos a firmeza do urdume e veja como ele é mais estável.",
    quickSummary: "Conjunto de fios longitudinais paralelos à ourela no tecido plano, oferecendo a maior resistência à tração e rigidez dimensional para a matriz.",
    relatedTerms: ["Trama (Weft)", "Ourela", "Tecido Plano", "Compensação de Encolhimento", "Fio do Tecido (Grainline)"],
    tags: ["urdume", "urdidura", "warp", "tecido plano", "tecelagem", "tracao", "estrutura textil"]
  },
  {
    id: "urdidura-vs-trama-comportamento-mecanico-de-repuxo",
    code: "U-034",
    letter: "U",
    term: "Urdidura vs. Trama (Comportamento Mecânico de Repuxo)",
    pronunciation: "ur-di-du-ra vêr-sus tra-ma (com-por-ta-men-to me-câ-ni-co de re-pu-xo)",
    level: "Avançado 🔴",
    category: "Física & Dinâmica do Ponto",
    grammarClass: "Locução substantiva feminina.",
    origin: "Fundamentos da mecânica dos sólidos e viscoelasticidade têxtil aplicados à interação agulha-fio-tecido no bordado automatizado.",
    summary: "Estudo comparativo da deformação elástica assimétrica entre os fios longitudinais (urdume) e transversais (trama) sob a tração das laçadas do bordado.",
    definition: "O comportamento mecânico de Urdidura vs. Trama (Warp vs. Weft Mechanical Distortion) é o fenômeno físico pelo qual um tecido plano reage de maneira heterogênea e anisotrópica às forças de penetração da agulha e tração da linha superior. Enquanto o urdume possui fios esticados e rígidos, a trama apresenta fios ondulados (crimped) e com maior mobilidade mecânica, fazendo com que o tecido encolha até 2 a 3 vezes mais na direção da trama do que na direção do urdume sob a mesma quantidade de pontos.",
    technicalDetails: "A física vetorial do bordado demonstra que o coeficiente de deformação elástica (K) varia angularmente: K(trama) > K(urdume) e K(viés 45°) >> K(trama). Se um círculo de tatami de 50 mm for digitalizado com compensação uniforme e bordado sem subponto adequado, ele se transformará em uma elipse achatada no eixo da trama. Para neutralizar essa assimetria, os programadores avançados aplicam compensação de repuxo direcional diferenciada (ex: 0,40 mm no eixo da trama e 0,25 mm no eixo do urdume) e subpontos com passadas em ângulos diagonais a 45°.",
    beginnerExplanation: "É a diferença de força entre os fios em pé (urdume) e os fios deitados (trama) da roupa. Os fios deitados são mais 'frouxos' e encolhem mais quando a máquina puxa os pontos. Sabendo disso, a gente programa o desenho com um reforço extra no lado mais frouxo para o bordado nunca ficar torto ou achatado.",
    howItWorks: [
      "1. A agulha perfura o tecido puxando as laçadas de linha sob alta tensão.",
      "2. Os fios de trama (mais flexíveis) cedem e se aproximam com facilidade, estreitando a peça no sentido horizontal.",
      "3. Os fios de urdume (mais rígidos) oferecem resistência e sofrem menor compressão.",
      "4. Se a matriz não tiver compensação angular balanceada, as formas redondas viram ovais.",
      "5. O programador insere grades de subponto cruzadas a 45° que unem os fios de urdume e trama em uma malha soldada.",
      "6. A força de tração é distribuída igualmente em 360°, mantendo a simetria perfeita da geometria original."
    ],
    applications: [
      "Digitalização de círculos, anéis e monogramas geométricos perfeitos em sarja e tricoline.",
      "Prevenção de fendas e descompasso entre preenchimentos e contornos pretos.",
      "Calibração de matrizes para bandeiras e flâmulas com acabamento retangular exato.",
      "Ajuste fino de compensação direcional em softwares avançados (Wilcom ES / Tajima DG)."
    ],
    characteristics: [
      "Explica cientificamente por que bordados enrugam mais para os lados do que para cima.",
      "Permite antecipar deformações geométricas antes mesmo de colocar a peça na máquina.",
      "Exige o uso de entretelas que ofereçam estabilidade bidirecional isotrópica."
    ],
    commonErrors: [
      "❌ Achar que o tecido encolhe por igual em todas as direções e aplicar compensação idêntica em matrizes complexas.",
      "❌ Bordar círculos grandes sem grade de subponto, resultando em formatos ovais e achatados.",
      "❌ Usar entretelas rasgáveis unidirecionais que rasgam no sentido da trama durante a costura."
    ],
    troubleshootingTips: [
      "Círculo virando oval achatado nas laterais: aumente a compensação de repuxo no eixo perpendicular ao ponto ou ative Tatami Grid Underlay.",
      "Fenda visível abrindo entre o contorno e o preenchimento apenas na vertical: o urdume repuxou menos que a trama; equilibre a sobreposição de bordas (Overlap) em 0.5 mm.",
      "Tecido franzindo em ondas horizontais: use entretela de recorte multidirecional (Cutaway) colada com spray temporário."
    ],
    dicaArtrelados: "Para fazer círculos e luas perfeitas: nunca use subponto reto na mesma direção da trama! Use SEMPRE grade cruzada em 'X' (45° e 135°)! A grade amarra os fios deitados com os fios em pé e seu círculo sai redondo como uma moeda!",
    voceSabia: "Na engenharia aeroespacial, os tecidos de fibra de carbono dos foguetes são tecidos com urdume e trama calculados por supercomputadores para suportar a pressão assimétrica de reentrada na atmosfera da Terra.",
    practicalExercise: "Borde um círculo perfeito de 40 mm em tricoline usando apenas pontos cheios horizontais sem underlay. Meça o diâmetro vertical e horizontal com um paquímetro e comprove a diferença mecânica de deformação entre urdume e trama.",
    quickSummary: "Estudo da deformação elástica assimétrica entre fios longitudinais e transversais do tecido, orientando a compensação de repuxo e subpontos cruzados.",
    relatedTerms: ["Urdume", "Trama", "Anisotropia Têxtil", "Compensação de Repuxo (Pull Comp)", "Deformação Dimensional"],
    tags: ["urdidura", "trama", "repuxo", "fisica do bordado", "geometria", "anisotropia", "estabilidade"]
  },
  {
    id: "uretano-espuma-de-eva-para-bordado-3d-urethane-foam",
    code: "U-035",
    letter: "U",
    term: "Uretano / Espuma de EVA para Bordado 3D (Urethane Foam)",
    pronunciation: "u-re-ta-no / es-pu-ma de e-vê-a pa-ra bor-da-do três-dê (iu-re-thêin foum)",
    level: "Intermediário 🟡",
    category: "Insumos & Materiais",
    grammarClass: "Substantivo masculino.",
    origin: "Do grupo químico dos uretanos/poliuretanos e copolímeros de Etileno Vinil Acetato (EVA), insumo industrial desenvolvido para estruturação tridimensional de calçados e bonés.",
    summary: "Placas de espuma microcelular sintética (EVA de 2 a 3 mm) aplicadas sob a linha de bordado para gerar relevo tridimensional escultural (3D Puff).",
    definition: "O Uretano / Espuma de EVA (Puffy Foam / 3D Embroidery Foam / Urethane Foam Sheet) é o material polimérico microcelular de densidade controlada utilizado como núcleo estrutural para a criação de bordados em alto relevo 3D (3D Puff). Apresenta-se em folhas com espessura calibrada (geralmente 2,0 mm, 2,5 mm ou 3,0 mm) em diversas cores, com formulação de baixa densidade e alta elasticidade que permite que a espuma seja picotada e guilhotinada pelas perfurações contínuas da agulha durante a costura de pontos cheios densos.",
    technicalDetails: "A física do uretano no bordado 3D envolve: 1) Densidade do material: varia entre 35 kg/m³ e 55 kg/m³ para permitir que as agulhas perforem sem emperrar e o excesso de espuma se destaque com corte limpo; 2) Densidade do ponto cheio na matriz: deve ser configurada entre 0,20 mm e 0,25 mm (o dobro da densidade normal) para cobrir totalmente a espuma sem deixar o núcleo visível; 3) Uso obrigatório de linha combinando com a cor do EVA (ex: EVA preto para linha preta, EVA branco para linhas claras); 4) Retração térmica: o material retrai instantaneamente ao receber ar quente de soprador térmico a 120°C, eliminando fiapos residuais.",
    beginnerExplanation: "É aquela folha de espuminha macia (parecida com o EVA de artesanato, mas própria para bordar) que a gente coloca em cima do boné ou jaqueta antes de bordar. A máquina borda por cima dela com pontos bem juntinhos, criando aquele efeito de letra alta, fofa e gordinha que fica em alto relevo tridimensional!",
    howItWorks: [
      "1. A máquina borda primeiro os detalhes planos da matriz diretamente no tecido.",
      "2. A máquina realiza uma pausa programada (Stop) e o operador fixa a folha de EVA sobre a área com fita crepe ou cola spray.",
      "3. A máquina executa os pontos de fechamento (Capping) nas pontas das letras e cobre a espuma com pontos cheios ultra-densos.",
      "4. As penetrações contínuas da agulha picotam o contorno do EVA como um selo de correio.",
      "5. Ao finalizar o bordado, o operador retira a peça e puxa a folha de EVA: ela se destaca facilmente ao redor das letras.",
      "6. Pequenos microfiapos que sobrarem nas bordas são eliminados com um jato rápido de soprador térmico.",
      "7. O bordado fica com um relevo alto, firme e com acabamento de boutique."
    ],
    applications: [
      "Bonés esportivos de aba reta, bonés trucker e baseball caps de alta gama.",
      "Jaquetas colegiais (Varsity), moletons grossos e jaquetas de couro de motociclistas.",
      "Emblemas tridimensionais em mochilas, malas e tênis esportivos.",
      "Monogramas e números em relevo alto para moda streetwear e uniformes de basquete."
    ],
    characteristics: [
      "Cria relevo tridimensional nítido de 2 a 3 mm de altura sobre o tecido.",
      "Fácil de destacar com as mãos após a execução dos pontos corretos.",
      "Retrai e sela instantaneamente sob calor moderado de soprador térmico."
    ],
    commonErrors: [
      "❌ Usar EVA comum escolar duro de 5 mm, que quebra agulhas, entorta barras de agulha e não se solta do bordado.",
      "❌ Usar EVA preto sob linha branca, deixando a cor preta aparecendo pelos vãos dos pontos cheios.",
      "❌ Não usar densidade ultra-fechada (0.22 mm), deixando a espuma exposta e com aspecto feio."
    ],
    troubleshootingTips: [
      "Espuma de EVA aparecendo entre os pontos de linha: reduza o espaçamento do ponto cheio para 0.22 mm e aumente a tensão da linha superior ligeiramente.",
      "Fiapos de EVA espetando para fora nas pontas das letras: passe um soprador térmico (heat gun) a 120°C a 10 cm de distância por 3 segundos.",
      "EVA muito duro que não destaca: utilize espumas próprias para bordado (Puffy Foam importado ou EVA de densidade macia 40D)."
    ],
    dicaArtrelados: "O segredo do EVA perfeito: use SEMPRE a cor da espuma igual ou muito parecida com a cor da linha que vai cobrir (EVA branco para linhas claras, EVA preto para linhas escuras)! E para finalizar, passe um secador de cabelo no quente: os fiapos somem na hora!",
    voceSabia: "As primeiras espumas para bordado 3D foram desenvolvidas na Alemanha nos anos 1980 pela empresa Gunold sob a marca registrada 'Puffy Foam', revolucionando a indústria mundial de bonés da NBA e da MLB.",
    practicalExercise: "Pegue um pedaço de sarja de boné e uma placa de EVA de 2 mm. Programe uma letra 'A' maiúscula com densidade 0.22 mm e fechamento de pontas. Borde com agulha ponta aguda nº 80/12 e experimente destacar a espuma com as mãos.",
    quickSummary: "Placas de espuma microcelular de densidade controlada utilizadas como núcleo interno para criar bordados em alto relevo tridimensional (3D Puff).",
    relatedTerms: ["Bordado 3D (Puffy Foam)", "Capping", "Soprador Térmico", "Densidade de Ponto", "Agulha Ponta Aguda", "Streetwear"],
    tags: ["uretano", "eva", "3d puff", "espuma", "puffy foam", "alto relevo", "bones"]
  },
  {
    id: "ultravioleta-linhas-fotossensiveis-uv-solar-active-threads",
    code: "U-036",
    letter: "U",
    term: "Ultravioleta / Linhas Fotossensíveis (UV Solar Active Threads)",
    pronunciation: "ul-tra-vi-o-le-ta / li-nhas fo-tos-sen-sí-veis (u-vê so-lar ék-tiv thréds)",
    level: "Intermediário 🟡",
    category: "Insumos & Materiais",
    grammarClass: "Locução substantiva feminina plural.",
    origin: "Tecnologia de microencapsulamento fotoquímico de pigmentos fotocrômicos orgânicos (Photochromic Dyes) aplicada a filamentos têxteis sintéticos nos anos 1990.",
    summary: "Linhas especiais de bordado tratadas com pigmentos fotocrômicos que são brancas/invisíveis na sombra e mudam instantaneamente de cor sob a luz solar (raios UV).",
    definition: "As Linhas Fotossensíveis Ultravioleta (UV Solar Active Threads / Fios Fotocrômicos / Solar Reactive Embroidery Threads) são linhas de bordado de alta tecnologia incorporando pigmentos fotocrômicos microencapsulados em seu núcleo de poliéster ou polipropileno. Em ambientes internos sob luz artificial comum, as linhas apresentam tonalidade branca perolada, translúcida ou pastel suave; ao entrarem em contato com a radiação ultravioleta natural do sol (raios UVA e UVB de 300 a 400 nm), as moléculas fotocrômicas alteram sua estrutura geométrica tridimensional reversível, exibindo cores vibrantes (vermelho, azul, roxo, amarelo, verde, laranja) em menos de 2 segundos.",
    technicalDetails: "A cinética fotoquímica dessas linhas permite até 2.000 a 3.000 ciclos completos de transição de cor (sombra -> sol -> sombra). O título padrão é nº 40 (120/2 Denier), compatível com agulhas padrão de bordado nº 75/11. Recomenda-se lavar as peças em água fria ou morna (máximo 40°C) com sabão neutro e evitar secadoras industriais e alvejantes clorados, que degradam os polímeros fotocrômicos e reduzem a vida útil da reatividade solar.",
    beginnerExplanation: "É a linha 'mágica' que muda de cor no sol! Dentro de casa ela parece uma linha branca comum, mas assim que você sai na rua na luz do sol, o bordado ganha cores vivas na mesma hora (vira rosa, azul, roxo, etc.). Quando você volta para dentro de casa, ela volta a ficar branquinha!",
    howItWorks: [
      "1. A matriz é programada normalmente como qualquer bordado colorido com trocas de linha.",
      "2. A máquina é abastecida com cones de linha fotossensível UV (ex: branco-para-vermelho, branco-para-azul).",
      "3. O bordado é executado com velocidade média (650 a 750 PPM) para não superaquecer os pigmentos no olhal da agulha.",
      "4. No ateliê, o bordado finalizado parece branco monocromático discreto.",
      "5. Ao levar a peça para o sol ou iluminar com uma lanterna UV de luz negra, as cores explodem instantaneamente.",
      "6. Ao retornar à sombra, o bordado volta gradualmente à cor neutra original em 30 a 60 segundos."
    ],
    applications: [
      "Moda praia, biquínis, saídas de praia, bermudas de surf e chapéus de sol.",
      "Roupas infantis interativas, camisetas lúdicas e bonés infantojuvenis.",
      "Artigos promocionais para eventos ao ar livre, festivais de verão e maratonas.",
      "Bordados de segurança e autenticação antipirataria em peças de vestuário de grife."
    ],
    characteristics: [
      "Efeito visual surpreendente e altíssimo valor agregado por peça bordada.",
      "Mudança de cor instantânea (menos de 2 segundos de exposição ao sol).",
      "Reversibilidade garantida por centenas de ciclos de exposição e lavagem."
    ],
    commonErrors: [
      "❌ Passar o ferro quente diretamente sobre o bordado UV sem pano de proteção, queimando as microcápsulas fotocrômicas.",
      "❌ Lavar a peça com água sanitária ou sabões com alvejante óptico forte, destruindo o efeito solar.",
      "❌ Guardar os cones de linha expostos à luz solar na janela do ateliê, esgotando a vida útil antes do uso."
    ],
    troubleshootingTips: [
      "Linha não está mudando de cor no sol: certifique-se de que é luz solar natural (vidros de janela comuns com filtro UV bloqueiam a reação).",
      "Linha arrebentando com facilidade: reduza ligeiramente a tensão da linha superior e use agulha ponta afiada nº 75/11 nova.",
      "Efeito fotocrômico perdendo a força após lavagem: oriente o cliente final a lavar à mão com sabão neutro e secar à sombra."
    ],
    dicaArtrelados: "Para encantar clientes em feiras e lojas: borde uma borboleta ou flor com linha UV em um boné e leve uma lanterninha de luz negra UV no bolso! Quando você acender a luz na frente do cliente e o bordado mudar de cor na hora, a venda está garantida!",
    voceSabia: "A tecnologia dos corantes fotocrômicos foi originalmente desenvolvida nos anos 1960 para criar as primeiras lentes de óculos de grau que escurecem no sol (Transitions), sendo adaptada para fios de bordado têxtil décadas depois.",
    practicalExercise: "Borde uma flor simples usando linha UV branca-para-rosa nas pétalas e linha comum verde no caule. Vá até o quintal no sol com a peça e grave um vídeo no celular mostrando a transformação mágica de cores.",
    quickSummary: "Linhas especiais com pigmentos fotocrômicos que mudam instantaneamente de branco para cores vivas quando expostas à luz solar natural.",
    relatedTerms: ["Fotocrômico", "Luz Negra / UV", "Linha Termossensível", "Moda Praia", "Valor Agregado", "Pigmento Microencapsulado"],
    tags: ["ultravioleta", "uv", "linha magica", "muda de cor", "fotossensivel", "solar active", "inovacao"]
  },
  {
    id: "ultravioleta-linhas-fluorescentes-e-luz-negra-blacklight-uv",
    code: "U-037",
    letter: "U",
    term: "Ultravioleta / Linhas Fluorescentes e Luz Negra (Blacklight UV)",
    pronunciation: "ul-tra-vi-o-le-ta / li-nhas flu-o-res-cen-tes e luz ne-gra (blék-lait u-vê)",
    level: "Iniciante 🟢",
    category: "Insumos & Materiais",
    grammarClass: "Locução substantiva feminina plural.",
    origin: "Do fenômeno da fluorescência descoberto pelo físico George Gabriel Stokes em 1852 e da engenharia de corantes fluorescentes para a indústria têxtil e de eventos.",
    summary: "Fios de poliéster em tons neon ultra-luminosos que emitem brilho fluorescente intenso sob lâmpadas de luz negra ultravioleta (Blacklight).",
    definition: "As Linhas Fluorescentes Ultravioleta (Blacklight UV Reactive Threads / Fios Neon Fluorescentes) são linhas de bordado tingidas com corantes fluorescentes especiais capazes de absorver fótons de radiação ultravioleta invisível de onda longa (UVA de 365 nm emitida por lâmpadas de luz negra) e reemitir essa energia instantaneamente na forma de luz visível altamente saturada e brilhante (efeito 'glow' neon). Diferente das linhas fotoluminescentes (Glow-in-the-dark, que armazenam luz e brilham no escuro total), as linhas UV fluorescentes brilham enquanto houver fonte de luz negra ativa.",
    technicalDetails: "Essas linhas são produzidas em poliéster 100% trilobal de alta resistência com título padrão nº 40. O prisma trilobal das fibras potencializa a reflexão de luz interna, conferindo cores diurnas super-saturadas (amarelo neon, verde limão elétrico, laranja atômico, rosa choque, azul ciano) e brilho incandescente sob luz ultravioleta. Apresentam excelente resistência à tração e lavabilidade padrão até 60°C, sendo totalmente compatíveis com as velocidades normais de máquinas industriais (800 a 900 PPM).",
    beginnerExplanation: "São aquelas linhas em cores neon super chamativas (verde-limão, rosa-choque, laranja) que acendem e brilham intensamente como se fossem lâmpadas quando você entra em uma festa, boate, teatro ou boliche com luz negra!",
    howItWorks: [
      "1. A matriz é digitalizada com foco em contrastes fortes (desenhos em contornos nítidos ou tatamis chapados).",
      "2. A máquina é abastecida com cones de poliéster fluorescente Neon UV.",
      "3. O bordado é costurado normalmente sobre fundos escuros (como tecido preto, azul marinho ou cinza chumbo) para máximo impacto.",
      "4. Sob a luz do dia, o bordado exibe cores neon modernas e super chamativas.",
      "5. Ao entrar em ambientes com lâmpadas de luz negra (UV), os pigmentos fluorescentes absorvem a luz invisível e emitem um brilho neon intenso.",
      "6. A peça se destaca à distância com efeito visual futurista e psicodélico."
    ],
    applications: [
      "Roupas para festas, baladas, festivais de música eletrônica, raves e eventos noturnos.",
      "Uniformes de atendentes de boliches, pistas de patinação, casas noturnas e bares temáticos.",
      "Figurinos de dança, espetáculos teatrais, fantasias de carnaval e cosplay.",
      "Bonés, mochilas e jaquetas de moda jovem, streetwear e cultura gamer/cyberpunk."
    ],
    characteristics: [
      "Brilho incandescente instantâneo sob qualquer fonte de luz negra UV.",
      "Cores diurnas neon ultra-saturadas de alto impacto visual.",
      "Mesma resistência mecânica e facilidade de costura do poliéster convencional."
    ],
    commonErrors: [
      "❌ Confundir linha fluorescente UV (que precisa de luz negra) com linha fosforescente Glow-in-the-dark (que brilha no escuro sem luz nenhuma).",
      "❌ Bordar em tecido branco claro, perdendo o contraste dramático que a luz negra proporciona sobre fundos escuros.",
      "❌ Usar alvejante forte que danifica os corantes fluorescentes na lavagem."
    ],
    troubleshootingTips: [
      "Bordado não está brilhando na luz negra: confirme se a lâmpada é realmente de luz negra UV (365-395 nm) e se o fio é fluorescente genuíno.",
      "Cores neon parecendo apagadas de dia: borde sobre tecido preto ou coloque um contorno preto ao redor do desenho.",
      "Linha quebrando na máquina: use lubrificação padrão e agulha nº 75/11; o poliéster fluorescente corre macio como fio normal."
    ],
    dicaArtrelados: "Para criar coleções de Carnaval e moda jovem que vendem que nem água: borde caveirinhas, frases divertidas ou logos em bonés pretos usando linhas Neon Fluorescentes! Na luz do dia é lindo e na balada com luz negra é um escândalo de sucesso!",
    voceSabia: "Os escorpiões da natureza brilham naturalmente sob luz negra exatamente com a mesma fluorescência das linhas neon devido a proteínas fluorescentes presentes na sua carapaça de quitina!",
    practicalExercise: "Borde um logotipo com três cores neon (verde limão, rosa choque e laranja) sobre uma camiseta preta. Leve a peça para um ambiente iluminado por lâmpada de luz negra e registre fotos do efeito luminoso brilhante.",
    quickSummary: "Linhas de poliéster em tons neon que reagem com luminosidade intensa e vibrante quando iluminadas por lâmpadas de luz negra ultravioleta.",
    relatedTerms: ["Luz Negra (Blacklight)", "Neon", "Fluorescência", "Fosforescente (Glow in the Dark)", "Poliéster Trilobal", "Streetwear"],
    tags: ["luz negra", "blacklight", "neon", "fluorescente", "linha neon", "festas", "cyberpunk"]
  },
  {
    id: "umidade-relativa-do-ar-no-atelie-controle-de-clima",
    code: "U-038",
    letter: "U",
    term: "Umidade Relativa do Ar no Ateliê (Controle de Clima)",
    pronunciation: "u-mi-da-de re-la-ti-va do ar no a-te-li-ê (con-tro-le de cli-ma)",
    level: "Intermediário 🟡",
    category: "Manutenção & Mecânica",
    grammarClass: "Locução substantiva feminina.",
    origin: "Diretrizes de climatização industrial da engenharia têxtil (normas ISO 139 e ABNT) para controle de higroscopia e condutividade eletrostática em salas de máquinas.",
    summary: "Parâmetro ambiental crítico (ideal entre 45% e 65%) que previne eletricidade estática, ressecamento de fios, quebras frequentes e travamento eletrônico das máquinas.",
    definition: "A Umidade Relativa do Ar no Ateliê de Bordado (Ambient Relative Humidity Control) é o controle térmico e higrométrico do ar ambiente na sala de bordados e estoque de insumos. As fibras têxteis (fios de bordar de poliéster, raiom, algodão e entretelas) e os componentes eletrônicos das máquinas são altamente sensíveis à umidade atmosférica. O nível ideal de umidade relativa para operação de bordado computadorizado situa-se rigorosamente entre 45% e 65%, com temperatura estável entre 20°C e 24°C.",
    technicalDetails: "Os impactos físicos do desequilíbrio higrométrico são severos: 1) Umidade muito baixa (< 35% - ar seco): os fios sintéticos ressecam e perdem até 25% de elasticidade, a fricção mecânica gera alta eletricidade estática (que atrai fiapos para as placas de circuito e causa quebras frequentes de linha por emperramento nos passadores); 2) Umidade muito alta (> 75% - ar úmido): as entretelas de papel absorvem água e amolecem (perdendo sustentação no bastidor), as linhas de algodão incham e causam emperramento no olhal da agulha, e peças metálicas (lançadeiras e barras de agulha) sofrem corrosão oxidativa (ferrugem).",
    beginnerExplanation: "É a quantidade de umidade no ar da sua sala de bordar. Se o ar estiver muito seco (dias secos de inverno ou com ar condicionado ligado o dia todo no máximo), a linha fica ressecada, dá choque estático e quebra toda hora. Se estiver úmido demais, as entretelas ficam moles e as peças da máquina podem enferrujar. Um termohigrômetro simples de parede resolve tudo!",
    howItWorks: [
      "1. O bordador instala um termohigrômetro digital na parede do ateliê na altura das máquinas.",
      "2. Monitora diariamente os dois números: Temperatura (°C) e Umidade Relativa (%).",
      "3. Se a umidade cair abaixo de 40% (dias muito secos), liga um umidificador de ar ultrassônico ou coloca bacias de água na sala.",
      "4. Se a umidade subir acima de 70% (dias chuvosos contínuos), ativa a função 'Dry / Desumidificar' do ar-condicionado ou usa um desumidificador.",
      "5. Os cones de linha e entretelas mantêm a flexibilidade, lubrificação e maciez originais de fábrica.",
      "6. As máquinas operam suaves com zero estática, mínimas quebras de linha e máxima produtividade."
    ],
    applications: [
      "Controle ambiental de ateliês domésticos e salas de produção industrial de bordados.",
      "Armazenamento correto de caixas de cones de linha e rolos de entretela hidrossolúvel e rasgável.",
      "Prevenção de queima de placas eletrônicas e erros de sensores causados por estática.",
      "Padronização de tensão de linha em trocas de estações do ano (verão úmido vs. inverno seco)."
    ],
    characteristics: [
      "Faixa operacional ideal: 45% a 65% de Umidade Relativa e 20°C a 24°C de Temperatura.",
      "Investimento baixíssimo (termohigrômetro de baixo custo) com retorno gigantesco em produtividade.",
      "Reduz em até 60% as quebras inexplicáveis de linha em dias secos."
    ],
    commonErrors: [
      "❌ Deixar o ar-condicionado gelando o dia todo no modo frio sem umidificador, derrubando a umidade para 20% e quebrando linhas sem parar.",
      "❌ Guardar entretelas hidrossolúveis em locais úmidos sem embalagem plástica selada, fazendo a entretela melar e grudar.",
      "❌ Achar que a máquina quebrou quando, na verdade, a linha está apenas ressecada pelo clima seco."
    ],
    troubleshootingTips: [
      "Linhas quebrando repentinamente em todas as agulhas em dia seco: verifique o higrômetro; se estiver abaixo de 40%, ligue um umidificador de ar imediatamente.",
      "Entretela rasgável rasgando antes da hora no bastidor: o ar está muito úmido; seque a entretela com ar quente ou guarde em saco hermético com sílica-gel.",
      "Choques elétricos ao encostar no bastidor metálico: alta estática por ar seco; umedeça o ambiente e verifique o aterramento elétrico da máquina."
    ],
    dicaArtrelados: "Tenha um termohigrômetro digital na parede do seu ateliê (custa menos de R$ 30)! Se a umidade estiver abaixo de 40%, ligue um umidificador perto das linhas! Você vai ver que aquelas quebras de linha misteriosas somem como mágica!",
    voceSabia: "As gigantescas tecelagens inglesas do século XIX foram construídas na cidade de Manchester justamente porque o clima da região era naturalmente úmido e chuvoso o ano todo, o que impedia que os fios de algodão quebrassem nos teares velozes!",
    practicalExercise: "Coloque um termohigrômetro no seu ateliê. Anote a umidade pela manhã, à tarde e com o ar condicionado ligado. Observe se os dias com mais quebra de linha coincidem com os dias de umidade mais baixa.",
    quickSummary: "Controle da umidade ambiental (ideal de 45% a 65%) para evitar ressecamento de fios, acúmulo de eletricidade estática e oxidação de peças da máquina.",
    relatedTerms: ["Termohigrômetro", "Eletricidade Estática", "Ressecamento de Linha", "Umidificador de Ar", "Armazenamento de Insumos", "Climatização"],
    tags: ["umidade", "clima", "termohigrometro", "estatica", "quebra de linha", "manutencao", "atelie"]
  }
];

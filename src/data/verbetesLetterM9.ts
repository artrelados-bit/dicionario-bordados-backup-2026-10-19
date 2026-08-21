import { Verbete } from "../types";

export const VERBETES_LETTER_M_PART9: Verbete[] = [
  {
    id: "m-049-marca-registro-cruz-posicionamento-crosshair-alignment",
    code: "M-049",
    term: "Marca de Registro e Cruz de Posicionamento (Registration Crosshair & Alignment Marks)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino / Do latim 'registrum' (lista/registro) e 'crux' (cruz).",
    origin: "Técnica gráfica de alinhamento óptico herdada da impressão offset e litografia do século XIX, adaptada com precisão milimétrica para a divisão e junção de grandes matrizes em múltiplos bastidores.",
    summary: "Cruz ou mira em ponto corrido inserida no início e fim de matrizes divididas para garantir o encaixe perfeito de desenhos gigantes.",
    definition: "As Marcas de Registro e Cruzes de Posicionamento (Registration Marks / Alignment Crosshairs / Pontos Guia de Junção / Miras de Encaixe) são elementos geométricos auxiliares digitalizados intencionalmente pelo programador de bordado para permitir a emenda milimétrica de matrizes divididas (Multi-Hooping). Quando um bordado é maior do que o bastidor máximo da máquina (ex: uma barra floral de toalha de banho de 70 cm ou um bordado de costas de 35 cm em uma máquina com bastidor 20x20 cm), a matriz é dividida em partes (Parte 1, Parte 2, etc.). O final da Parte 1 borda uma pequena cruz de alinhamento que serve de mira para a agulha no início da Parte 2 após a remontagem do tecido no bastidor, garantindo emendas invisíveis sem degraus ou desvios.",
    technicalDetails: "Geometria e operação das cruzes de registro:\n• Geometria Padrão: Cruz perpendicular (+) ou em 'X' de 5 mm a 10 mm em ponto corrido simples de 2,0 mm de comprimento com ponto central de perfuração;\n• Posição Estratégica: Digitalizada nos pontos de fronteira extrema entre as partes da matriz, preferencialmente sob áreas que serão cobertas posteriormente por elementos cheios da Parte 2 (para que a marca fique oculta);\n• Linha Utilizada: Linha da mesma cor do fundo ou linha hidrossolúvel/contrastante que possa ser removida facilmente com pinça após o alinhamento;\n• Procedimento com Marcador Laser: A mira laser do cabeçote ou a ponta da agulha é alinhada manualmente pelo operador exatamente sobre o ponto central da cruz bordada na etapa anterior;\n• Tolerância de Encaixe: Erro máximo aceitável inferior a 0,3 mm para junções imperceptíveis a olho nu.",
    howItWorks: [
      "1. O programador divide uma matriz grande de 40 cm em duas metades no software (Parte A e Parte B).",
      "2. No final da Parte A, adiciona duas cruzes de registro (+) em pontos estratégicos.",
      "3. No início da Parte B, programa as mesmas cruzes como o primeiro elemento a ser costurado.",
      "4. A bordadeira monta o tecido no bastidor e borda a Parte A (que finaliza bordando as cruzes de registro).",
      "5. Retira o tecido, avança a posição no bastidor e remonta o tecido esticado.",
      "6. Usa o painel da máquina para mover o bastidor até a agulha ou a mira laser apontar exatamente no centro da cruz bordada.",
      "7. Inicia a Parte B: a máquina continua o bordado exatamente de onde parou, completando a figura com encaixe milimétrico perfeito."
    ],
    beginnerExplanation: "A marca de registro é como uma 'mira telescópica de joguinho' que ajuda você a emendar bordados gigantes! Quando você quer bordar um desenho bem grande (como o nome de uma empresa enorme nas costas de uma jaqueta ou um arranjo de flores longo em uma toalha de mesa) que não cabe no seu bastidor de uma vez só, você divide o desenho em dois pedaços. No final do primeiro pedaço, a máquina faz uma cruzinha de linha no pano. Quando você muda o tecido de lugar no bastidor, você usa essa cruzinha como mira para saber o lugar exato onde começar a segunda parte! O bordado fica emendado tão perfeito que ninguém diz que foi feito em duas vezes!",
    applications: [
      "Junção e emenda de bordados gigantes de costas de jaquetas em múltiplos bastidores",
      "Bordado de barras florais contínuas em toalhas de banho, lençóis e toalhas de mesa",
      "Alinhamento de estampas sublimadas ou serigráficas com bordados computadorizados",
      "Calibração de posicionamento com ponteiros laser em máquinas industriais"
    ],
    commonErrors: [
      "Esquecer de programar as marcas de registro ao dividir uma matriz grande no software",
      "Bordar as cruzes com ponto cheio grosso difícil de desmanchar ou esconder",
      "Mover o bastidor na tela da máquina sem girar o ângulo de rotação quando o tecido foi remontado ligeiramente inclinado"
    ],
    troubleshootingTips: [
      "Programe as cruzes de alinhamento com pontos corridos longos e frouxos para arrancá-los com pinça facilmente depois da junção",
      "Em tecidos escuros, use uma linha de cor clara e contrastante apenas para a cruz de mira",
      "Use as funções de 'Rotação Fina de 1 Grau' no painel da máquina para compensar qualquer inclinação na remontagem do bastidor"
    ],
    dicaArtrelados: "Vai emendar uma barra floral longa em uma toalha de banho? Programe a cruz de registro exatamente embaixo de uma folha ou flor cheia da segunda parte! Assim que você acertar a mira e a segunda parte bordar, a flor cobre a cruz e você nem precisa perder tempo desfiando pontinhos de linha!",
    voceSabia: "As marcas de registro em forma de cruz com círculo central foram inventadas na França no século XVIII pelo gravador Jacques-Fabien Gautier d'Agoty para alinhar as 4 cores de placas de cobre nas primeiras impressões coloridas da história humana!",
    practicalExercise: "Pegue um desenho simples e divida ao meio no software: coloque uma cruz (+) de 8 mm na junção, borde a primeira metade em um retalho, remonte o bastidor acertando a ponta da agulha no centro da cruz e borde a segunda metade: veja como a linha emenda perfeitamente!",
    quickSummary: "Elementos em forma de cruz digitalizados na borda de matrizes divididas que servem de guia para a junção milimétrica de bordados gigantes.",
    relatedTerms: ["Multi-Bastidor (Multi-Hooping)", "Divisão de Matriz", "Ponteiro Laser", "Encaixe Perfeito", "Ponto Corrido"],
    tags: ["m-049", "marca de registro", "cruz de registro", "alinhamento", "multi-hooping", "divisao de matriz", "emenda", "bastidor grande", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL EMBROIDERY DIGITIZING STANDARDS. Multi-Hooping Alignment, Registration Geometry and Splitting Protocols. Boston: IEDS, 2022.",
      "ARTRELADOS. O Segredo dos Bordados Gigantes: Multi-Bastidores, Cruzes de Registro, Miras Laser e Junções Invisíveis. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-050-manutencao-engrenagens-lubrificacao-graxa-litio-gearbox",
    code: "M-050",
    term: "Manutenção de Caixas de Engrenagem e Graxa Branca de Lítio (Gearbox Maintenance & White Lithium Grease)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Manutenção & Cuidados",
    grammarClass: "Substantivo feminino / Do latim 'manutenere' (manter com as mãos) e do grego 'lithos' (pedra/lítio).",
    origin: "Prática fundamental de tribologia e engenharia mecânica pesada para a proteção antidesgaste de dentes de engrenagens helicoidais e caixas de redução cônica em máquinas de bordar operando sob alto torque contínuo.",
    summary: "Procedimento semestral de limpeza e engraxamento das engrenagens internas de aço/nylon da máquina com graxa branca de lítio antitérmica.",
    definition: "A Manutenção e Lubrificação de Caixas de Engrenagem com Graxa de Lítio (Gearbox Lubrication / White Lithium NLGI 2 Maintenance / Engrenagens Cônicas e Helicoidais) é o protocolo preventivo essencial responsável por proteger os conjuntos de transmissão mecânica de força de alta carga da máquina de bordar (engrenagens do eixo da lançadeira, caixas de redução do motor principal, fusos sem-fim e cames de troca de cor). Ao contrário do óleo líquido leve (que escorreria das engrenagens em alta rotação), a graxa branca de lítio com aditivos PTFE/teflon adere firmemente aos dentes metálicos e de poliacetal (POM/Nylon), formando uma película lubrificante de extrema pressão que dissipa calor, amortece impactos mecânicos e previne o desgaste prematuro por atrito seco.",
    technicalDetails: "Tribologia e especificações da graxa de lítio para bordadeiras:\n• Especificação Química: Graxa à base de sabão de lítio complexo com Teflon (PTFE), grau de consistência NLGI 2 (branca e translúcida);\n• Faixa Térmica de Trabalho: -20°C a +140°C com alta estabilidade mecânica sob cisalhamento e resistência à oxidação;\n• Aplicação Estratégica: Engrenagens cônicas espirais do eixo de acionamento da lançadeira, dentes de cames do cabeçote de troca de cor e engrenagens de nylon do redutor do motor;\n• NUNCA Usar na Lançadeira Aberta: Na lançadeira e na barra de agulha usa-se EXCLUSIVAMENTE óleo mineral líquido ultrafino (óleo branco ISO VG 10); o uso de graxa na lançadeira atrai fiapos de linha e trava o mecanismo;\n• Periodicidade de Manutenção: Limpeza com desengraxante e renovação da graxa a cada 1.500 horas de operação ou 6 meses.",
    howItWorks: [
      "1. A máquina é desligada e desconectada da rede elétrica de segurança.",
      "2. O técnico retira as tampas inferiores de proteção do eixo inferior da lançadeira.",
      "3. Remove a graxa velha escurecida e impregnada de poeira usando pincel e desengraxante biodegradável.",
      "4. Seca completamente os dentes das engrenagens de aço e nylon.",
      "5. Aplica uma camada fina e homogênea de graxa branca de lítio com Teflon nos dentes das engrenagens com espátula plástica.",
      "6. Gira o volante manualmente por 5 voltas para que a graxa se distribua uniformemente pelos flancos dos dentes.",
      "7. Remonta as tampas de proteção e liga a máquina.",
      "8. A transmissão mecânica passa a operar com silêncio absoluto, baixíssimo atrito e vida útil de décadas."
    ],
    beginnerExplanation: "A graxa branca de lítio é como a 'pastinha protetora' que cuida das engrenagens de ferro e plástico que ficam escondidas dentro da sua máquina! Sabe aquele óleo líquido transparente que a gente pinga na lançadeira todo dia? O óleo líquido é ótimo para pecinhas que correm soltas, mas se você passar óleo nas engrenagens pesadas lá de dentro, quando a máquina girar rápido o óleo vai voar todo para fora e a engrenagem vai ficar seca e ranger. A graxa branca é grossinha, parece uma pomada: ela gruda nos dentinhos das engrenagens, não espirra, deixa a máquina super macia e silenciosa e não deixa o ferro se desgastar!",
    applications: [
      "Lubrificação periódica das engrenagens do eixo inferior da lançadeira rotativa",
      "Proteção de cames e tracionadores de troca de cores no cabeçote de máquinas industriais",
      "Manutenção de fusos sem-fim e redutores do motor principal de costura",
      "Eliminação de ruídos metálicos secos, rangidos e vibrações de engrenamento"
    ],
    commonErrors: [
      "Passar graxa na lançadeira onde a bobina gira (a graxa vira uma cola com os fiapos de linha e trava a máquina)",
      "Usar graxa automotiva preta grafitada ou graxa de rolamento pesada de caminhão (muito espessa, queima o motor)",
      "Deixar a máquina 5 anos sem engraxar as caixas de redução (os dentes de plástico se desgastam e quebram)"
    ],
    troubleshootingTips: [
      "Use SEMPRE graxa branca especial para máquinas de costura e bordar (com PTFE / Lítio de grau alimentício/têxtil)",
      "Aplique apenas a quantidade necessária para cobrir os dentes; o excesso de graxa espirra nas tampas internas sem utilidade",
      "Se a máquina apresentar um zumbido ou estalo metálico agudo nas engrenagens inferiores: verifique imediatamente o nível de graxa"
    ],
    dicaArtrelados: "Lembre-se sempre da regra de ouro da lubrificação: ÓLEO LÍQUIDO vai na lançadeira e na barra de agulha (onde corre rápido e limpo); GRAXA BRANCA DE LÍTIO vai só nas engrenagens de dentes lá dentro da máquina! Seguindo essa regrinha simples a sua máquina vai funcionar suave e durar a vida inteira!",
    voceSabia: "As graxas complexas de lítio foram criadas durante a Segunda Guerra Mundial para suportar as variações extremas de temperatura nos motores de aviões que voavam em altitudes congelantes e depois pousavam em desertos escaldantes!",
    practicalExercise: "Peça ao seu técnico durante a próxima revisão para mostrar a você onde ficam as engrenagens cônicas da lançadeira e veja como a graxa branca fica aplicada nos dentes de aço!",
    quickSummary: "Lubrificação semestral das engrenagens internas de transmissão com graxa branca de lítio para amortecer impacto e evitar desgaste de dentes.",
    relatedTerms: ["Graxa Branca de Lítio", "Engrenagens Cônicas", "Óleo Mineral", "Manutenção Preventiva", "Tribologia Têxtil"],
    tags: ["m-050", "manutencao de engrenagens", "graxa de litio", "lubrificacao", "redutor", "ruido", "silencio", "cuidados", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL SEWING MACHINERY CO. Mechanical Drive Maintenance, Gearbox Lubrication and Tribological Standards. Nagoia: Tajima, 2022.",
      "ARTRELADOS. Manual de Manutenção Mecânica e Preventiva: Lubrificação de Engrenagens, Graxas Especiais, Óleos e Vida Útil Máxima da Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-051-mapeamento-cores-paleta-linhas-pantonizada-color-mapping",
    code: "M-051",
    term: "Mapeamento de Cores e Paleta de Linhas Pantonizada (Color Palette Mapping & Pantone RGB Conversion)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Software & Formatos",
    grammarClass: "Substantivo masculino / Do latim 'mappa' (carta geográfica) e do sistema de cores Pantone Inc.",
    origin: "Desenvolvido com a padronização digital de cores na década de 1990 para converter códigos de telas RGB/CMYK e referências de marcas corporativas (Pantone Matching System) nos códigos exatos dos catálogos de linhas dos principais fabricantes mundiais.",
    summary: "Sistema do software de bordado que converte cores vetoriais e escalas Pantone nos números reais de cones de linhas (Madeira, Polyneon, Isacord, Setta, etc.).",
    definition: "O Mapeamento de Cores e Conversão de Paleta Têxtil (Embroidery Thread Color Mapping / Pantone PMS to Thread Converter / Tabela de Cores dos Fabricantes) é o módulo do software de digitalização que gerencia a correspondência física e óptica entre as cores gráficas da arte digital (RGB, CMYK ou Pantone) e as cartas de cores reais de cones de linha industrial (Madeira Polyneon, Isacord, Gunold, Sulky, Sylko, Linhas Setta, Polycron, etc.). O sistema armazena espectros de reflexão de cada filamento têxtil, permitindo que o designer visualize no monitor a simulação realista com brilho e textura exatos e exporte relatórios técnicos de produção (Production Worksheet) com a lista precisa dos códigos de cones que o operador deve carregar no cabeçote.",
    technicalDetails: "Arquitetura e espectrometria de cores de bordado:\n• Bibliotecas Nativas de Fabricantes: Tabelas de consulta (LUTs) integradas com mais de 50 marcas globais e nacionais cadastradas com códigos de 4 dígitos;\n• Algoritmo de Distância Cromática (Delta E / CIE Lab): Calcula matematicamente a cor de linha mais próxima fisicamente da cor Pantone solicitada pelo cliente através da menor distância no espaço de cor tridimensional CIE Lab;\n• Renderização Realista 3D (TrueView / 3D Stitch Simulation): Simula o relevo da torção dos filamentos de poliéster trilobal ou viscose rayon sob fontes de luz virtuais;\n• Ficha Técnica de Produção (Production Sheet): Geração automática de documento em PDF com a ordem cronológica de cores, código do fabricante, metragem de linha consumida e tempo estimado por cor;\n• Gestão de Cabeçote (Needle Assignment): Associação automática entre a cor do desenho e o número da agulha física (agulhas 1 a 15) no painel da máquina.",
    howItWorks: [
      "1. O cliente envia o logotipo corporativo com a cor oficial da marca: 'Pantone 286 C' (azul royal corporativo).",
      "2. O designer abre o software de bordado e seleciona a biblioteca da sua marca de linha habitual (ex: Madeira Polyneon ou Linhas Setta).",
      "3. Clica na ferramenta 'Mapeamento Automático de Cores': o algoritmo busca o cone de linha com o menor Delta E em relação ao Pantone 286 C.",
      "4. O software atribui a linha correspondente exata (ex: Madeira 1843).",
      "5. A tela TrueView renderiza o bordado com o brilho têxtil real daquela linha azul.",
      "6. O programador gera a Folha de Produção com o código 'Madeira 1843' associado à Agulha 4.",
      "7. O operador da máquina coloca o cone exato no suporte da agulha 4.",
      "8. O bordado final reproduz com 100% de fidelidade a identidade visual oficial do cliente corporativo."
    ],
    beginnerExplanation: "O mapeamento de cores é o 'tradutor universal de linhas' do seu programa de bordado! Quando uma empresa grande pede para você bordar o logotipo dela, ela exige que a cor seja exatamente o azul ou o vermelho oficial da marca dela (que tem um código internacional chamado Pantone). No programa de bordado, você clica na caixinha de cores e escolhe a marca de linha que você usa no seu ateliê (como Setta, Madeira ou Círculo): o programa acha na hora o número exato do cone que você precisa comprar na loja! Assim, o bordado sai com a cor perfeita, o cliente fica super feliz e você não erra o tom da linha nunca!",
    applications: [
      "Fidelidade rigorosa de cor em uniformes corporativos de grandes marcas mundiais",
      "Geração de fichas técnicas de produção para equipes de operadores de máquina",
      "Cálculo exato de metragem de linha necessária para orçamentos de grandes tiragens",
      "Simulação hiper-realista em 3D para aprovação visual de clientes antes da costura"
    ],
    commonErrors: [
      "Escolher cores 'no olho' na tela do computador com monitor descalibrado (a cor física da linha sai completamente diferente)",
      "Não imprimir a folha de produção com os números dos cones para o operador da máquina",
      "Trocar a marca da linha sem atualizar o catálogo no software de bordado"
    ],
    troubleshootingTips: [
      "Tenha sempre no seu ateliê a Cartela de Cores Física original com amostras de fios reais da sua fábrica de linhas favorita",
      "Compare a cartela física sob iluminação de luz natural do dia para aprovações críticas de cor",
      "No Wilcom ou Pe-Design: configure a sua paleta de trabalho padrão apenas com as linhas que você realmente possui no estoque do ateliê"
    ],
    dicaArtrelados: "Compre a Cartela de Cores Física com amostras de fios reais da fábrica de linhas que você mais usa no seu ateliê! Quando o cliente chegar em dúvida sobre a cor do bordado, mostre a cartela com os fios brilhando de verdade na mão dele: a aprovação é imediata e você passa um profissionalismo espetacular!",
    voceSabia: "O sistema de cores Pantone foi criado em 1963 em Nova Jersey por Lawrence Herbert, que percebeu que cada gráfica imprimia tons de cor diferentes porque não existia uma linguagem numérica padrão para a formulação de pigmentos!",
    practicalExercise: "No seu software de bordado, abra a paleta de cores, procure a opção de fabricantes de linha e troque de 'Cores RGB Genéricas' para a marca da linha que você tem em casa: veja como as cores dos seus desenhos passam a ter os códigos reais dos cones!",
    quickSummary: "Módulo do software que converte referências gráficas (RGB/Pantone) nos números reais de cones de linha e gera fichas técnicas de produção.",
    relatedTerms: ["Pantone PMS", "Catálogo de Linhas", "Ficha de Produção", "Delta E", "TrueView 3D"],
    tags: ["m-051", "mapeamento de cores", "paleta de linhas", "pantone", "catalogo", "trueview", "madeira", "isacord", "setta", "artrelados"],
    bibliographicReferences: [
      "PANTONE COLOR INSTITUTE. Textile Color Matching, CIE Lab Chromatic Distance and Thread Conversion. Carlstadt: Pantone, 2022.",
      "ARTRELADOS. Gestão Profissional de Cores no Bordado: Paletas Pantonizadas, Catálogos Físicos, Fichas de Produção e Fidelidade Visual. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-052-microfibra-tecidos-sinteticos-aveludados-suede",
    code: "M-052",
    term: "Microfibra e Tecidos Sintéticos Aveludados (Microfiber, Suede & Alcantara Substrates)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino / Do grego 'mikros' (pequeno) e do latim 'fibra' (filamento).",
    origin: "Polímeros têxteis ultradefinidos desenvolvidos no Japão na década de 1970 compostos por filamentos de poliéster e poliamida mais finos que um quinto de um fio de cabelo humano (menos de 1 denier), consagrados no vestuário esportivo, estofamento automotivo e moda nobre.",
    summary: "Tecidos sintéticos densos de toque macio e aveludado que exigem agulha Microtex fina 70/10 ou 75/11, entretela de corte e filme solúvel no topo.",
    definition: "A Microfibra e os Tecidos Sintéticos Aveludados (Microfiber, Suede Sintético, Camurça Ecológica, Alcantara & Malha Poliamida Soft) são tecidos tecnológicos estruturados por microfilamentos ultrafinos densamente entrelaçados. Possuem propriedades singulares: toque macio 'pele de pêssego', repelência à água, grande resistência mecânica e superfície semitranslúcida ou aveludada. Ao bordar microfibra e tecidos tipo camurça, o principal cuidado reside na penetração da agulha: agulhas grossas ou com rebarbas cortam os microfilamentos e deixam furos brancos permanentes, enquanto tecidos aveludados tendem a afundar os pontos finos. Recomenda-se o uso de agulha Microtex ou Ponta Bola Fina (70/10 ou 75/11), entretela de corte leve (Cut-Away) e filme hidrossolúvel no topo.",
    technicalDetails: "Propriedades e parametrização para bordar em microfibra e suede:\n• Finura do Filamento: Fios de 0,5 a 0,9 denier (100 vezes mais finos que um fio de cabelo humano);\n• Agulha Obrigatória: Agulha Schmetz Microtex (130/705 H-M calibre 70/10 ou 75/11) para suede/camurça sintética estruturada, ou Ponta Bola Fina (SES 75/11) para microfibra de malharia elástica (dry-fit);\n• Estabilização Segura: Entretela de corte leve (Cut-Away de 50 g/m² a 60 g/m²) colada com adesivo temporário em spray;\n• Película Superior: Filme plástico hidrossolúvel fino no topo ao bordar suede aveludado para evitar que a textura do tecido penetre entre os pontos cheios;\n• Pressão de Bastidor: Montagem com bastidor magnético ou técnica de flutuação para não esmagar permanentemente o toque aveludado (marcas de brilho por fricção);\n• Densidade de Ponto: Calibrada entre 0,40 mm e 0,44 mm com sob-pontos leves.",
    howItWorks: [
      "1. A bordadeira prepara a almofada em suede aveludado ou a camiseta de microfibra esportiva.",
      "2. Aplica cola spray temporária na entretela de corte (Cut-Away) e posiciona no avesso da peça.",
      "3. Prende a peça no bastidor com ajuste suave (ou usa a técnica de flutuação para não marcar o veludo do suede).",
      "4. Posiciona uma folha de filme plástico hidrossolúvel transparente sobre a superfície do tecido.",
      "5. Instala uma agulha Microtex 70/10 nova e calibrada.",
      "6. A máquina costura a matriz: os pontos assentam sobre o filme plástico mantendo relevo perfeito.",
      "7. Ao término, retira-se o plástico e apara-se a entretela do avesso.",
      "8. O bordado exibe nitidez impecável, sem furos esgarçados e sem marcas de aperto no tecido aveludado."
    ],
    beginnerExplanation: "A microfibra e o suede são aqueles tecidos modernos super macios que parecem um 'veludinho gostoso' ou pele de pêssego, muito usados em sofás chiques, almofadas, roupões e camisetas de academia! Por ser feito de fioszinhos microscópicos, se você usar uma agulha grossa de costura normal, ela fura e estraga o tecido. Para bordar almofadas de suede e roupas de microfibra perfeitamente, você só precisa de 3 cuidados: 1) usar uma agulha fininha especial (agulha Microtex 70 ou 75); 2) colocar um plástico que derrete na água por cima na hora de bordar; e 3) não apertar o aro do bastidor com força para não amassar o tecido! Fica um espetáculo de maciez!",
    applications: [
      "Almofadas decorativas de luxo, capas de estofados e mantas em tecido suede e alcantara",
      "Camisetas esportivas dry-fit, bermudas de corrida e agasalhos de microfibra",
      "Bancos automotivos personalizados de alta performance revestidos em alcantara",
      "Roupões de microfibra macia e toalhas de secagem rápida para spas e academias"
    ],
    commonErrors: [
      "Apertar o aro do bastidor tradicional com força extrema sobre suede aveludado (cria uma marca redonda de queima impossível de remover)",
      "Bordar com agulha grossa 90/14 desgastada (perfura os microfilamentos e cria furos brancos visíveis)",
      "Não usar filme solúvel no topo em suede aveludado (os pelinhos do tecido entram no meio do bordado)"
    ],
    troubleshootingTips: [
      "Para bordar suede sem marcas: use a técnica da flutuação (prenda a entretela no bastidor e cole o suede por cima com spray) ou use bastidor magnético",
      "Para reavivar a textura de suede caso tenha ficado levemente marcado: passe uma escovinha macia com vapor suave de ferro a 10 cm de distância",
      "Em microfibras elásticas esportivas (dry-fit): use entretela Cut-Away colada para a estampa não repuxar"
    ],
    dicaArtrelados: "Vai bordar almofadas de suede ou camurça sintética para decoração? NUNCA prenda o suede direto no bastidor de plástico apertando parafuso! Prenda apenas a entretela de corte no bastidor, passe cola spray e assente a capa de almofada por cima flutuando! O tecido não amassa, fica 100% livre de marcas e você entrega um trabalho de alto luxo!",
    voceSabia: "O tecido Alcantara (a microfibra nobre mais famosa do mundo) foi inventado em 1970 pelo cientista japonês Dr. Miyoshi Okamoto; hoje é o material obrigatório nos volantes e bancos de carros de luxo da Ferrari, Lamborghini e Porsche!",
    practicalExercise: "Pegue um retalho de tecido suede ou microfibra: monte na entretela usando a técnica de flutuação, coloque um plástico hidrossolúvel no topo, use agulha Microtex 75/11 e borde um nome em ponto satim: admire o relevo perfeito e a ausência de marcas no tecido!",
    quickSummary: "Tecidos sintéticos densos de microfilamentos que exigem agulha Microtex fina, entretela Cut-Away e montagem sem compressão de bastidor.",
    relatedTerms: ["Suede Sintético", "Microfibra", "Alcantara", "Agulha Microtex", "Flutuação (Float)"],
    tags: ["m-052", "microfibra", "suede", "alcantara", "camurca", "almofada", "microtex", "flutuacao", "luxo", "artrelados"],
    bibliographicReferences: [
      "SYNTHETIC TEXTILES & AUTOMOTIVE EMBROIDERY GUILD. Microfiber and Synthetic Suede Processing, Needling and Framing Standards. Munique: STAEG, 2022.",
      "ARTRELADOS. O Bordado em Microfibras e Tecidos Tecnológicos: Suede, Alcantara, Dry-Fit e Técnicas de Flutuação Sem Marcas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-053-modulo-lantejoula-paete-automatico-sequin-device",
    code: "M-053",
    term: "Módulo de Lantejoula / Paetê Automático (Sequin & Spangle Automatic Dispenser Device)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Equipamentos & Acessórios",
    grammarClass: "Substantivo masculino / Do francês 'paillette' (palheta brilhante) e do árabe 'sikka' (moeda cunhada).",
    origin: "Dispositivo mecatrônico de alta precisão introduzido no início dos anos 2000 por fabricantes como Tajima, Barudan e SWF para alimentar e costurar fitas contínuas de lantejoulas/paetês furados a velocidades de até 1.000 peças por minuto.",
    summary: "Acessório mecatrônico acoplado ao cabeçote que corta, alimenta e costura lantejoulas/paetês no tecido em alta velocidade através de pontos de fixação automáticos.",
    definition: "O Dispositivo Mecatrônico de Lantejoulas e Paetês (Sequin / Spangle Automatic Attachment Device / Alimentador Pneumático de Paetês) é um módulo eletropneumático ou servomotorizado acoplado lateralmente à primeira ou última barra de agulha do cabeçote em máquinas de bordar industriais. Ele alimenta uma fita plástica contínua de lantejoulas metálicas ou holográficas perfuradas (de 2 mm a 9 mm de diâmetro), corta cada disco individualmente com uma micro-guilhotina mecânica sincronizada e posiciona a lantejoula sob a agulha, que a costura imediatamente sobre o tecido com pontos de amarração em formato de estrela, 'Y', gota ou sobreposição contínua (efeito escama de peixe / reversible flip sequin).",
    technicalDetails: "Mecatrônica e programação do dispositivo de paetês:\n• Diâmetros Suportados: Lantejoulas de 2 mm, 3 mm, 4 mm, 5 mm, 7 mm e 9 mm em formatos circulares, quadrados, estrelas ou flores;\n• Dispositivos Duplos e Quádruplos (Twin & Quad Sequin): Permitem alternar entre dois ou quatro tamanhos/cores de lantejoulas no mesmo desenho sem intervenção manual;\n• Tipos de Pontos de Fixação: Ponto em 'Y' (três pernas de ancoragem), Ponto em 'X', Ponto Transversal Simples e Ponto de Escama Sobreposta (Overlap Sequin);\n• Velocidade Operacional Típica: 600 a 1.000 PPM em sincronismo rigoroso com o eixo principal;\n• Formato de Arquivo Especial: Comandos de código de máquina específicos no formato Tajima (.DST) ou Barudan (.DAT) que instruem o acionamento do solenoide de avanço da fita antes da descida da agulha;\n• Linha de Fixação: Poliéster 60wt ou filamento de monofilamento de poliamida transparente 0,10 mm.",
    howItWorks: [
      "1. O operador carrega o rolo de fita de lantejoulas no carretel do dispositivo acoplado ao cabeçote.",
      "2. Passa a linha fina correspondente ou monofilamento na agulha número 1.",
      "3. O software de bordado gera a matriz com o modo 'Sequin Tool' ativado.",
      "4. A máquina inicia o bordado: a cada ciclo de ponto, o motor do dispositivo avança 1 lantejoula.",
      "5. A micro-faca corta o elo da fita plástica liberando o disco.",
      "6. A agulha desce exatamente pelo furo central da lantejoula e costura 3 pontos de ancoragem no tecido.",
      "7. As lantejoulas vão sendo aplicadas uma a uma com alinhamento perfeito, criando desenhos brilhantes e figurinos de luxo em minutos."
    ],
    beginnerExplanation: "O aplicador automático de lantejoulas é uma das invenções mais incríveis do bordado moderno! Em vez de alguém ficar costurando paetê por paetê à mão por semanas, a máquina tem um bracinho robótico que segura um rolo de fita de lantejoulas brilhantes. A cada batida da agulha, ela corta uma lantejoula, coloca no tecido e a agulha dá 3 pontinhos rápidos no buraquinho do meio dela para prender! Ela consegue colocar até mil lantejoulas por minuto com perfeição de fábrica! É assim que são feitas as roupas brilhantes de cantoras famosas e fantasias de Carnaval!",
    applications: [
      "Fantasias luxuosas de Carnaval, figurinos para shows, teatro e espetáculos musicais",
      "Vestidos de festa, saias e blusas de alta-costura com paetês brilhantes e holográficos",
      "Camisetas infantis com paetê mágico reversível ('vai-e-vem' que muda de desenho ao passar a mão)",
      "Emblemas e apliques cintilantes para moda feminina jovem e acessórios de luxo"
    ],
    commonErrors: [
      "Instalar o rolo de fita de lantejoulas virado do lado avesso no alimentador",
      "Usar agulha grossa com ponta de faca (pode partir o plástico da lantejoula ao passar pelo furo central)",
      "Programar o espaçamento menor do que o raio da lantejoula sem ativar o modo de sobreposição (as lantejoulas batem umas nas outras e quebram)"
    ],
    troubleshootingTips: [
      "Verifique se o comprimento do ponto de avanço no software coincide rigorosamente com o diâmetro da lantejoula (ex: 5,0 mm para lantejoula de 5 mm)",
      "Mantenha a micro-lâmina da guilhotina do alimentador afiada e sem resíduos de plástico colados",
      "Use linha fina resistente de poliéster 60wt para que os pontos de amarração fiquem delicados e discretos sobre o paetê"
    ],
    dicaArtrelados: "Vai digitalizar matrizes com lantejoulas para o modo 'paetê mágico' (aquele que a criança passa a mão e a cor muda)? Programe as lantejoulas com sobreposição de 50% em ponto de fixação em gota única na borda superior! Quando a pessoa passa a mão para cima elas viram de um lado, e para baixo mostram a outra cor!",
    voceSabia: "A palavra 'paetê' vem do francês *paillette* (pequena palha brilhante), e as primeiras lantejoulas da história foram encontradas no túmulo do Faraó Tutancâmon no Antigo Egito (1323 a.C.), feitas de lâminas de ouro maciço costuradas em suas vestes reais!",
    practicalExercise: "Observe uma peça de roupa comercial com paetês: olhe de perto os pontos de costura que prendem cada disco e identifique se foi usado o ponto em 'Y' com 3 perninhas ou o ponto simples de sobreposição em escama!",
    quickSummary: "Dispositivo robótico que corta, alimenta e costura lantejoulas e paetês continuamente sobre o tecido em alta velocidade industrial.",
    relatedTerms: ["Lantejoula / Paetê", "Paetê Mágico", "Dispositivo Mecatrônico", "Twin Sequin", "Ponto em Y"],
    tags: ["m-053", "lantejoula", "paete", "sequin device", "spangle", "carnaval", "brilho", "paete magico", "luxo", "artrelados"],
    bibliographicReferences: [
      "TAJIMA SEWING MACHINE CO. Sequin and Spangle Automatic Device Operation, Programming and Feed Mechanism. Nagoia: Tajima, 2022.",
      "ARTRELADOS. A Arte dos Paetês e Lantejoulas Computadorizadas: Dispositivos Automáticos, Paetê Mágico Reversível e Figurinos de Alto Brilho. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-054-movimento-harmonico-senoidal-pantografo-s-curve-motion",
    code: "M-054",
    term: "Movimento Harmônico Senoidal do Pantógrafo (Sinusoidal S-Curve Motion Control & Jerk Reduction)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino / Da matemática harmônica (seno) e cinemática CNC.",
    origin: "Algoritmo mecatrônico de controle numérico computorizado (CNC) que substituiu a aceleração linear trapezoidal abrupta por curvas suaves de aceleração senoidal (Curva em S / Jerk Limiting), eliminando trancos no bastidor.",
    summary: "Algoritmo eletrônico dos servomotores que move o bastidor com aceleração suave em curva senoidal, eliminando trancos e vibrações.",
    definition: "O Controle de Movimento Harmônico Senoidal e Perfis em Curva S (Sinusoidal S-Curve Motion Profile / Jerk-Free Pantograph Trajectory / Suavização Harmônica de Eixos) é o conjunto de equações matemáticas executadas pelos controladores digitais de sinal (DSP) dos servomotores das máquinas de bordar modernas. Em vez de acelerar e frear o pantógrafo em rampas lineares secas (que geram 'jerk' ou trancos mecânicos violentos ao iniciar e parar o bastidor), o algoritmo senoidal modula a aceleração através de uma curva suave em forma de 'S'. Isso permite que o bastidor alcance velocidades de deslocamento superiores a 1.200 PPM com suavidade absoluta, eliminando vibrações no tecido, evitando quebras de agulha por inércia e garantindo que cada ponto caia com precisão geométrica exata.",
    technicalDetails: "Mecatrônica e equações de controle de movimento:\n• Eliminação de 'Jerk' (Derivada da Aceleração): A terceira derivada da posição no tempo (d³x/dt³) é limitada para garantir acelerações contínuas sem descontinuidades abruptas;\n• Janela de Deslocamento do Pantógrafo (Hoop Move Window): O bastidor só pode se mover fisicamente durante a janela em que a agulha está fora do tecido (aproximadamente entre 280° e 80° do ciclo angular do eixo principal — cerca de 30 milissegundos a 1.000 PPM);\n• Algoritmo Preditivo Look-Ahead: O processador analisa os próximos 50 vetores de pontos da matriz em tempo real, calculando a desaceleração ideal antes de curvas fechadas para não perder o passo dos motores;\n• Resolução de Posicionamento Micrométrico: Servomotores AC com encoders ópticos de 24 bits (mais de 16 milhões de pulsos por revolução);\n• Benefícios Têxteis: Redução de 85% no estresse mecânico sobre tecidos delicados e eliminação de falhas de registro causadas por inércia.",
    howItWorks: [
      "1. A máquina de bordar lê o próximo ponto do arquivo de bordado (um salto longo de 8 mm).",
      "2. O DSP calcula a trajetória do bastidor usando a curva de aceleração senoidal em S.",
      "3. Assim que a ponta da agulha sai do tecido (no ângulo de 280°), o motor inicia o movimento com aceleração suave e progressiva.",
      "4. Atinge a velocidade máxima no ponto médio do percurso.",
      "5. Desacelera suavemente conforme a agulha se aproxima do tecido (no ângulo de 80°).",
      "6. O bastidor para completamente imóvel antes que a ponta da agulha toque o tecido.",
      "7. A agulha penetra com precisão micrométrica, sem que o tecido sofra nenhuma oscilação residual de inércia."
    ],
    beginnerExplanation: "O movimento harmônico senoidal é como a 'direção de um motorista super suave e educado'! Sabe quando você anda de carro com alguém que acelera de uma vez e freia no susto dando tranco e fazendo todo mundo bater a cabeça no vidro? As máquinas antigas faziam isso com o bastidor, e por isso o pano vibrava e a agulha quebrava. As máquinas modernas usam esse cálculo matemático inteligente: elas aceleram o bastidor macio como manteiga e freiam devagarzinho antes da agulha descer. O bordado fica silencioso, o tecido não treme e cada pontinho cai exatamente no lugar onde foi desenhado!",
    applications: [
      "Movimentação precisa do pantógrafo em altíssima velocidade industrial (1.000 a 1.500 PPM)",
      "Preservação da integridade de tecidos ultradelicados (tule, organza e sedas)",
      "Eliminação de pontos tremidos e desvios de encaixe em grandes saltos de bastidor",
      "Redução drástica do desgaste mecânico de correias, motores e eixos lineares"
    ],
    commonErrors: [
      "Programar saltos gigantescos de 12 mm em velocidade máxima sem ativar a desaceleração automática no software",
      "Alterar parâmetros de rampa de aceleração na placa-mãe sem conhecimento técnico de fábrica",
      "Operar a máquina com tensão inadequada na correia que anula a precisão do servomotor"
    ],
    troubleshootingTips: [
      "Em bordados com muitos detalhes minúsculos: certifique-se de que a função 'Smooth Motion' ou 'Curve Acceleration' está ativada no painel",
      "Se a máquina dá 'trancos secos' ao mudar de direção: verifique se não há sujeira acumulada nas guias lineares do pantógrafo",
      "Mantenha as guias lineares sempre lubrificadas com óleo fino específico para barramentos CNC"
    ],
    dicaArtrelados: "As máquinas de bordar modernas são verdadeiros robôs de cirurgia mecânica! Elas movem o bastidor, aceleram e freiam em frações de milissegundos enquanto a agulha sobe e desce. Para manter essa precisão harmônica perfeita, limpe e lubrifique os trilhos do pantógrafo toda semana com pano de microfibra limpo!",
    voceSabia: "As equações de aceleração senoidal em curva S utilizadas no controle de movimento dos pantógrafos modernos são as mesmas equações mecatrônicas empregadas em braços robóticos industriais que montam microchips e semicondutores de computadores!",
    practicalExercise: "Olhe atentamente para o bastidor da sua máquina enquanto ela borda em alta rotação: veja como o movimento é contínuo e suave, sem trancos secos, mesmo quando ela faz ziguezagues rápidos!",
    quickSummary: "Algoritmo mecatrônico de servomotores que acelera e freia o bastidor em curva suave senoidal, eliminando trancos e garantindo precisão milimétrica.",
    relatedTerms: ["Pantógrafo", "Curva em S (S-Curve)", "Servomotor AC", "Jerk Control", "Encoder Óptico"],
    tags: ["m-054", "movimento harmonico", "senoidal", "s-curve", "pantografo", "servomotor", "precisao", "mecanica", "artrelados"],
    bibliographicReferences: [
      "INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEERS. S-Curve Trajectory Generation, Jerk-Free Motion Control and DSP Kinematics in Textile CNC. Nova York: IEEE, 2022.",
      "ARTRELADOS. Mecatrônica e Controle de Movimento: Curvas em S, Servomotores, Encoders e Precisão Harmônica no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

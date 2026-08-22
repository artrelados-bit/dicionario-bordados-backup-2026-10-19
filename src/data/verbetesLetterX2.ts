import { Verbete } from "../types";

export const VERBETES_LETTER_X2: Verbete[] = [
  {
    id: "x-shear-inclinacao-vetorial-eixo-x",
    code: "X-006",
    letter: "X",
    term: "X-Shear — Inclinação Vetorial no Eixo X (Skew Horizontal & Compensação de Trama)",
    pronunciation: "éks-xi-er — in-kli-na-são ve-to-ri-al no êi-shu shis (ˈɛks ʃɪər)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês 'shear' (esforço de cisalhamento ou inclinação angular lateral em física e computação gráfica vetorial).",
    summary: "Transformação geométrica no software CAD que inclina paralelamente os objetos no plano horizontal para criar tipografias itálicas ou anular distorções de trama.",
    definition: "O X-Shear (Inclinação no Eixo X / Skew Horizontal / Cisalhamento Vetorial / Slant & Italic Transform) é uma operação matemática de transformação afim em softwares de digitalização de matrizes que desloca as coordenadas X dos nós vetoriais proporcionalmente à sua distância em relação a um eixo base Y fixo. Essa ferramenta é utilizada primordialmente para converter fontes retas em itálicas dinâmicas e, em nível avançado de engenharia de matriz, para pré-compensar a distorção angular de torção mecânica que tecidos em ponto sarja (como jeans e sarja pesada) e malhas diagonais sofrem durante o tracionamento do bastidor.",
    technicalDetails: "Matematicamente, a transformação X-Shear recalcula cada par de coordenadas (x, y) para (x + y * tan(θ), y), onde θ representa o ângulo de cisalhamento. Ao inclinar uma coluna satim ou um preenchimento tatami através do X-Shear, o software recalcula automaticamente os ângulos internos dos pontos e a densidade linear entre as linhas de costura, evitando que a inclinação reduza a cobertura visual ou gere acúmulos excessivos de pontos nas quinas agudas dos glifos.",
    beginnerExplanation: "É a ferramenta do programa de bordado que 'deita' ou inclina as letras e os desenhos para o lado, transformando uma fonte reta comum em uma fonte itálica bonita e veloz, mantendo a altura original certinha sem deformar o desenho!",
    howItWorks: [
      "1. O programador seleciona o bloco de texto ou o vetor de preenchimento no software.",
      "2. Clica na alça central superior de deformação ou digita o ângulo de inclinação (ex.: +12° ou -10°).",
      "3. O software aplica a matriz de transformação X-Shear deslizando os pontos horizontalmente.",
      "4. Os ângulos das linhas de ponto satim acompanham proporcionalmente a nova inclinação da haste.",
      "5. A compensação de repuxo (Pull Compensation) é recalculada nas novas diagonais.",
      "6. A matriz é gerada pronta para costura com caimento aerodinâmico e esportivo."
    ],
    characteristics: [
      "Preservação da altura e da área total do objeto no eixo Y.",
      "Ajuste contínuo do ângulo de inclinação de -45° a +45°.",
      "Recálculo automático dos pontos de entrada e saída (Entry/Exit Points)."
    ],
    applications: [
      "Criação de tipografia itálica personalizada em uniformes de corrida e automobilismo.",
      "Compensação de torção de trama em tecidos de sarja diagonal (Twill/Denim).",
      "Efeitos de velocidade, dinamismo e perspectiva em logomarcas esportivas.",
      "Ajuste fino de alinhamento com listras diagonais estampadas no tecido."
    ],
    commonErrors: [
      "❌ Inclinar excessivamente o texto (acima de 30°), criando ângulos agudos tão fechados que as agulhas quebram nas pontas.",
      "❌ Aplicar X-Shear em fontes serifadas delicadas sem verificar se as serifas horizontais foram esmagadas.",
      "❌ Não recalcular a densidade após a inclinação, deixando as colunas ralas e sem cobertura."
    ],
    troubleshootingTips: [
      "As letras itálicas bordadas ficaram com falhas de cobertura: verifique se o ângulo dos pontos satim ficou paralelo à haste inclinada; gire o ângulo do ponto em 15° a 25° para cruzar a haste com firmeza.",
      "O bordado em tecido sarja fica torto para a direita após pronto: o tecido tem torção natural de urdume; aplique uma inclinação contrária de 2° a 3° no X-Shear no software para compensar a torção da sarja.",
      "As pontas das letras ficaram muito grossas após inclinar: utilize o recurso de afinamento automático de cantos agudos (Smart Corner / Sharp Cornering) no software."
    ],
    dicaArtrelados: "Para criar logomarcas esportivas com sensação de alta velocidade: use o X-Shear em +14° no texto e combine com um preenchimento tatami com ângulo de 45°. O efeito de brilho e dinamismo na jaqueta ou camiseta fica digno de marcas de ponta internacionais!",
    voceSabia: "A escrita inclinada (itálico) foi inventada em 1501 pelo tipógrafo veneziano Aldus Manutius com o objetivo inicial de economizar espaço nas páginas de papel e baratear o custo dos livros impressos na Renascença!",
    practicalExercise: "Escreva uma palavra no seu software de bordado com uma fonte padrão de bloco reto. Use a ferramenta de inclinação horizontal (X-Shear) em 15° para a direita. Observe como o software reorganiza as linhas de ponto satim para acompanhar o novo formato dinâmico.",
    quickSummary: "Transformação vetorial que inclina horizontalmente objetos e fontes no software CAD, conferindo efeito itálico dinâmico e compensação de trama.",
    relatedTerms: ["Itálico", "Skew", "Pull Compensation", "Transformação Afim", "Ângulo de Ponto", "Tipografia", "Wilcom"],
    tags: ["xshear", "inclinacao", "skew", "tipografia", "vetor", "software", "italico"]
  },
  {
    id: "x-position-sensor-sensor-posicao-eixo-x",
    code: "X-007",
    letter: "X",
    term: "X-Position Sensor — Sensor de Posição do Eixo X (Fim de Curso, Encoder Óptico & Origem)",
    pronunciation: "éks-po-zi-shon sen-sor — sen-sor de po-zi-são do êi-shu shis (ˈɛks pəˈzɪʃən ˈsɛnsər)",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'position sensor' (sensor eletrônico de detecção de posicionamento absoluto/incremental por barreira fotoelétrica ou efeito Hall).",
    summary: "Sensor eletromecânico ou óptico que detecta os limites físicos de curso e o ponto de origem zero horizontal do pantógrafo na máquina.",
    definition: "O X-Position Sensor (Sensor de Posição do Eixo X / Limit Switch X / Encoder Óptico do Carro Horizontal / Sensor de Fim de Curso e Origem) é um dispositivo transdutor de estado sólido (fototransistor infravermelho de ranhura, sensor de efeito Hall magnético ou microinterruptor mecânico de alta precisão) instalado na extremidade da estrutura do pantógrafo. Sua função é informar à placa-mãe da máquina a localização exata do carro do bastidor, calibrando a posição de origem 'Home' (0,0) na inicialização e interrompendo o movimento caso o bastidor se aproxime dos limites físicos máximos para evitar colisão contra o chassi.",
    technicalDetails: "Durante o procedimento de inicialização da máquina (Boot / Homing Cycle), o motor do eixo X se desloca até que uma aleta metálica acoplada ao pantógrafo interrompa o feixe infravermelho do X-Position Sensor. O sinal elétrico muda de nível lógico (de 5V para 0V), zerando o contador de pulsos do encoder no firmware. Se poeira têxtil ou fiapos de linha bloquearem a fenda óptica do sensor, a máquina não conseguirá encontrar o ponto zero, gerando erro de sistema no painel e travando a operação.",
    beginnerExplanation: "É o 'olhinho eletrônico' que avisa a máquina onde o bastidor está na horizontal. Quando você liga a máquina e o braço se move sozinho para a esquerda e para a direita até parar no centro, é esse sensor que diz: 'Pronto, cheguei no ponto zero certinho!' e também impede que o bastidor bata com força nas laterais da máquina.",
    howItWorks: [
      "1. Ao ligar a máquina, o sistema inicia a rotina de auto-centralização (Homing).",
      "2. O motor do eixo X move o pantógrafo lateralmente em direção ao sensor.",
      "3. Uma palheta metálica do carro entra na ranhura do sensor óptico cortando o feixe infravermelho.",
      "4. O circuito eletrônico envia um pulso de interrupção instantâneo para a CPU principal.",
      "5. A CPU grava aquela coordenada como a origem de referência absoluta (X = 0).",
      "6. A partir desse momento, cada pulso do servomotor é contado com precisão a partir do ponto zero.",
      "7. Durante o bordado, se o sensor detectar aproximação perigosa do fim de curso, a máquina para e emite alerta sonoro."
    ],
    characteristics: [
      "Tempo de resposta na faixa de microssegundos.",
      "Imunidade a vibrações mecânicas intensas.",
      "Alta repetibilidade de posicionamento (precisão centesimal de repetição)."
    ],
    applications: [
      "Definição da origem zero (0,0) na inicialização de máquinas domésticas e industriais.",
      "Proteção contra choques mecânicos do pantógrafo nas laterais do chassi.",
      "Recuperação precisa da posição do bordado após queda repentina de energia elétrica.",
      "Sincronismo de troca de bastidor e posicionamento de quadros de múltiplos cabeçotes."
    ],
    commonErrors: [
      "❌ Deixar acumular poeira e fiapos de linha na fenda óptica do sensor, impedindo a máquina de ligar.",
      "❌ Bater no suporte metálico do sensor durante a limpeza, entortando a aleta de leitura.",
      "❌ Borrifar óleo lubrificante líquido diretamente sobre o sensor óptico, sujando a lente transmissora."
    ],
    troubleshootingTips: [
      "A máquina liga, o braço bate na lateral com barulho forte e dá erro de 'X-Axis Limit': o sensor óptico do eixo X está sujo de poeira têxtil ou a palheta está desalinhada; desligue a máquina e limpe a fenda do sensor com ar comprimido ou pincel seco.",
      "A máquina não centraliza o bastidor no lugar certo: limpe o encoder do eixo X e refaça o alinhamento de origem no menu técnico da máquina.",
      "Mensagem de erro 'X Sensor Failure' no painel: verifique se o cabo flat do sensor não foi rompido ou soltou do conector da placa-mãe."
    ],
    dicaArtrelados: "Uma vez por mês, passe um pincel macio e seco ou um jato de ar comprimido nos sensores ópticos de fim de curso dos eixos X e Y da sua máquina. Essa limpeza de 1 minuto previne aquele susto horrível do bastidor bater na lateral e perder toda a centralização da produção!",
    voceSabia: "Nas máquinas industriais modernas multicabeçotes (com até 20 cabeças de bordado), um único conjunto de sensores nos eixos X e Y sincroniza perfeitamente mais de 20 bastidores trabalhando juntos com tolerância milimétrica de apenas 0,02 mm!",
    practicalExercise: "Com a máquina desligada, localize visualmente o trilho horizontal do pantógrafo e identifique o pequeno sensor plástico preto em formato de 'U' com seus cabinhos finos. Passe um pincel macio para remover toda a poeira têxtil acumulada ao redor dele.",
    quickSummary: "Sensor eletrônico que define o ponto de origem horizontal e protege o pantógrafo contra colisões nos limites mecânicos da máquina.",
    relatedTerms: ["Encoder", "Pantógrafo", "X-Axis", "Fim de Curso", "Ponto Zero", "Manutenção Preventiva", "Sensor Óptico"],
    tags: ["xpositionsensor", "sensor", "hardware", "eletronica", "manutencao", "eixox", "fimdecurso"]
  },
  {
    id: "xylene-free-fabric-marker-marcador-sem-xileno",
    code: "X-008",
    letter: "X",
    term: "Xylene-Free Fabric Marker — Marcador Têxtil Isento de Xileno (Canetas & Giz Hidrossolúveis)",
    pronunciation: "zai-liin frii fé-brik mar-ker — mar-ka-dor teks-til i-zen-tu de zi-le-nu (ˌzaɪliːn ˈfriː ˈfæbrɪk ˈmɑːrkər)",
    level: "Iniciante 🟢",
    category: "Acabamento & Finalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'xylene-free' (livre de xileno/dimetilbenzeno, solvente petroquímico tóxico) e 'fabric marker' (marcador de tecido de base aquosa ou cerosa para ateliê).",
    summary: "Marcadores temporários, canetas hidrossolúveis e giz para tecido formulados sem solventes tóxicos, que somem com água ou calor sem manchar o bordado.",
    definition: "O Xylene-Free Fabric Marker (Marcador de Tecido Isento de Xileno / Caneta Fantasma Hidrossolúvel ou Termossensível / Water-Soluble & Heat-Erasable Marking Pen) é um instrumento de traçado e gabarito indispensável no ateliê de bordado eletrônico para marcar centros de bastidor, linhas de simetria, posições de bolsos e vértices de alinhamento no tecido. Formulado com polímeros corantes atóxicos solúveis em água (PVP aquoso) ou tintas termo-reativas (que desbotam a 60°C pelo ferro de passar), ele é 100% livre de xileno, tolueno e solventes aromáticos que descoloririam fios de bordado ou danificariam tecidos nobres.",
    technicalDetails: "Marcadores industriais comuns (como canetas permanentes à base de xileno) dissolvem a tintura de poliéster e viscose das linhas e penetram permanentemente no núcleo das fibras celulósicas do algodão, tornando a mancha irreversível. Os marcadores Xylene-Free utilizam tensoativos orgânicos de baixa tensão superficial que permanecem na superfície da fibra, permitindo que as marcas de gabarito desapareçam completamente com uma leve borrifada de água destilada fria ou com o vapor do ferro de passar, sem deixar halos amarelados.",
    beginnerExplanation: "É a famosa 'caneta mágica' ou 'caneta fantasma' de bordado que não tem aquele cheiro forte de química tóxica! Você risca o tecido para saber onde fica o meio certinho do bordado, coloca no bastidor, borda tudo e depois é só passar uma gotinha de água ou o ferro quente que o risco some todinho sem manchar a roupa!",
    howItWorks: [
      "1. Posiciona-se o gabarito plástico de furos sobre a peça de roupa (ex.: peito de camiseta).",
      "2. Utiliza-se a caneta Xylene-Free para marcar o ponto central (origem) e a cruz de nível.",
      "3. O tecido é posicionado no bastidor alinhando o risco com a marcação do aro.",
      "4. A máquina centraliza o laser ou a agulha exatamente sobre a marcação e executa o bordado.",
      "5. Ao término do bordado, borrifa-se água limpa sobre a marca (se for caneta azul hidrossolúvel) ou encosta-se o ferro quente (se for caneta termossensível).",
      "6. A tinta desaparece imediatamente, deixando o tecido e os pontos de linha impecáveis."
    ],
    characteristics: [
      "Fórmula atóxica de base aquosa, inodora e ecológica.",
      "Desaparecimento 100% garantido com água limpa ou calor moderado.",
      "Compatível com sedas, algodão, percal, piquê, linho e tecidos sintéticos."
    ],
    applications: [
      "Marcação do ponto central e dos eixos X/Y para alinhamento no bastidor.",
      "Traçado de linhas guia para bordados contínuos de barrados e toalhas de mesa.",
      "Gabarito de posicionamento de nomes em jalecos, uniformes e camisas polo.",
      "Alinhamento de apliques e tecidos sobrepostos em nécessaires estruturadas."
    ],
    commonErrors: [
      "❌ Usar caneta esferográfica ou marcadores permanentes com solvente xileno, estragando a peça do cliente para sempre.",
      "❌ Passar ferro quente em cima de caneta hidrossolúvel antes de lavar com água, fixando a tinta para sempre nas fibras.",
      "❌ Guardar a caneta destampada, ressecando a ponta de feltro."
    ],
    troubleshootingTips: [
      "O risco da caneta azul não saiu com o ferro: caneta azul é hidrossolúvel (sai com água fria) e o calor do ferro pode queimar a tinta no tecido; passe um algodão com água fria e sabão neutro imediatamente.",
      "A marcação feita com caneta térmica voltou a aparecer no frio intenso: canetas termossensíveis podem reaparecer abaixo de 0°C; para peças de exportação ou inverno, prefira canetas hidrossolúveis de base de água.",
      "A caneta manchou um tecido de seda pura: faça sempre um teste prévio de remoção em um retalho da mesma seda antes de riscar a peça definitiva."
    ],
    dicaArtrelados: "Tenha sempre no ateliê dois tipos de canetas: a **caneta azul (hidrossolúvel)** para toalhas e tecidos que serão lavados ou borrifados com água, e a **caneta branca/prata térmica** para tecidos escuros e couro sintético. Nunca, em hipótese alguma, use caneta esferográfica comum na sua mesa de corte!",
    voceSabia: "O xileno (dimetilbenzeno) era o principal solvente usado nas canetas hidrográficas do século XX, mas foi banido dos materiais escolares e têxteis de ponta por ser neurotóxico e perigoso ao contato prolongado com a pele!",
    practicalExercise: "Pegue um retalho de tecido de algodão branco. Faça um traço com sua caneta hidrossolúvel de tecido. Espere 5 minutos secar e borrife água fria com um borrifador. Observe como a linha se dissolve e desaparece sem deixar nenhum resíduo.",
    quickSummary: "Canetas e marcadores têxteis atóxicos sem solvente xileno que somem com água ou calor, ideais para gabaritos e centralização de bastidor.",
    relatedTerms: ["Caneta Fantasma", "Giz de Alfaiate", "Gabarito de Bastidor", "Centralização", "Alinhamento", "Caneta Hidrossolúvel"],
    tags: ["xylenefree", "canetafantasma", "marcadortextil", "gabarito", "acabamento", "alinhamento", "atelie"]
  },
  {
    id: "x-offset-deslocamento-coordenada-horizontal",
    code: "X-009",
    letter: "X",
    term: "X-Offset — Deslocamento no Eixo X (Ajuste Fino de Coordenada Horizontal & Centralização)",
    pronunciation: "éks-of-set — des-lo-ka-men-tu no êi-shu shis (ˈɛks ˌɔːfsɛt)",
    level: "Intermediário 🟡",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'offset' (deslocamento compensatório ou distância de afastamento em relação a um ponto zero de referência).",
    summary: "Parâmetro digital no painel da máquina ou software que translada toda a matriz para a esquerda ou direita em milímetros para encaixe milimétrico.",
    definition: "O X-Offset (Deslocamento no Eixo X / Compensação de Coordenada Horizontal / X-Shift Coordinate / Horizontal Position Offset) é um valor de ajuste numérico (positivo ou negativo, medido em milímetros ou décimos de milímetro) aplicado à coordenada X inicial de uma matriz de bordado. Utilizado tanto no painel de comando da máquina de bordar quanto em softwares de edição, o X-Offset permite mover o desenho lateralmente no bastidor sem necessidade de soltar e reprensar o tecido, garantindo o alinhamento perfeito de monogramas sobre bolsos, carcelas de camisas e listras verticais.",
    technicalDetails: "Ao aplicar um X-Offset de +5,0 mm no painel da máquina, o microcontrolador adiciona +50 unidades (em escala de 0,1 mm) a todos os vetores absolutos X do arquivo de bordado, recalculando a caixa delimitadora (Bounding Box). Em máquinas multicabeçotes, o X-Offset pode ser configurado individualmente para compensar pequenas variações mecânicas de distância entre os cabeçotes de costura.",
    beginnerExplanation: "É o botão do painel da sua máquina que 'empurra' o bordado alguns milímetros para a direita (+X) ou para a esquerda (-X). Se você colocou o tecido no bastidor e viu que o desenho ficou um pouquinho fora do centro do bolso, você não precisa desbastar tudo: basta ajustar o X-Offset no painel para o bordado cair no lugar certinho!",
    howItWorks: [
      "1. A peça é colocada no bastidor e encaixada no pantógrafo da máquina.",
      "2. O operador aciona o apontador laser ou desce a agulha manualmente para checar o centro da marcação.",
      "3. Nota-se que o desenho está 3 mm deslocado para a esquerda em relação ao bolso.",
      "4. O operador acessa o menu de coordenadas no painel da máquina e adiciona +3,0 mm no valor de X-Offset.",
      "5. O pantógrafo se move instantaneamente 3 mm para a direita, alinhando a agulha com a marcação do tecido.",
      "6. Executa-se o teste de área (Trace) e inicia-se o bordado com alinhamento milimétrico."
    ],
    characteristics: [
      "Ajuste digital instantâneo sem necessidade de re-bastar o tecido.",
      "Incrementos finos de 0,1 mm a 1,0 mm para máxima precisão.",
      "Preservação integral da integridade dos pontos e da densidade original."
    ],
    applications: [
      "Centralização de nomes sobre bolsos de jalecos e camisas sociais.",
      "Alinhamento de bordados com costuras verticais de calças jeans e bonés.",
      "Ajuste fino de matrizes divididas (Multi-Hooping) em bastidores gigantes.",
      "Compensação de folgas mecânicas em máquinas industriais antigas."
    ],
    commonErrors: [
      "❌ Aplicar um X-Offset muito grande sem checar a área útil, fazendo o bastidor bater no calcador.",
      "❌ Não zerar o X-Offset ao colocar uma nova matriz, bordando a próxima peça fora do centro.",
      "❌ Tentar compensar tecido torto apenas com X-Offset sem girar o ângulo de rotação da matriz."
    ],
    troubleshootingTips: [
      "O desenho está cortando a borda lateral do bastidor: o X-Offset está deslocado para um dos lados; acesse o painel e selecione a opção 'Auto Center' para zerar os offsets X e Y.",
      "O laser da máquina aponta 2 mm para o lado da agulha: acerte o valor de Laser Pointer X-Offset no menu de calibração de fábrica da máquina.",
      "Ao bordar a segunda parte de uma matriz dividida, as partes não se encontram: meça a distância com a régua e aplique o X-Offset exato da régua no painel antes de costurar a segunda etapa."
    ],
    dicaArtrelados: "Antes de apertar o botão verde de iniciar o bordado em uma peça nobre, use sempre a função de conferência de tracejado com o laser aceso! Se estiver fora do risco, use as setinhas de X-Offset e Y-Offset no painel para deixar a mira 100% cravada no centro da cruz do gabarito.",
    voceSabia: "Nas máquinas industriais computadorizadas das décadas de 70 e 80 com leitura de fitas perfuradas de papel, não existia ajuste de X-Offset no painel: se o bordador errasse o centro em 1 mm no tecido, tinha que desbastar e esticar o tecido de novo na mão!",
    practicalExercise: "Coloque um tecido marcado com uma cruz no bastidor. No painel da sua máquina, alterne o X-Offset em +10 mm e depois em -10 mm observando como a agulha ou o laser se reposiciona perfeitamente sobre a linha horizontal.",
    quickSummary: "Ajuste numérico milimétrico no eixo horizontal para reposicionar a matriz no bastidor sem necessidade de reprensar o tecido.",
    relatedTerms: ["Y-Offset", "Trace", "Centralização", "Apontador Laser", "Bounding Box", "Painel Digital", "Multi-Hooping"],
    tags: ["xoffset", "deslocamento", "centralizacao", "painel", "ajustefino", "coordenadas", "operacao"]
  },
  {
    id: "xml-embroidery-metadata-metadados-xml",
    code: "X-010",
    letter: "X",
    term: "XML Embroidery Metadata — Metadados XML de Bordado (Estrutura de Ficha Técnica & Integração)",
    pronunciation: "éks-em-él em-brói-de-ri me-ta-dêi-ta — me-ta-da-dus shis-e-mi-e-li (ˌɛksɛmˈɛl ɪmˈbrɔɪdəri ˈmɛtəˌdeɪtə)",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'XML' (Extensible Markup Language, padrão internacional W3C criado em 1996) associado aos metadados de produção e ficheiros de bordado digital.",
    summary: "Formato estruturado de dados em texto que armazena informações de cores, trocas de linha, consumo de metragem, autor e instruções técnicas em arquivos modernos de bordado.",
    definition: "O XML Embroidery Metadata (Metadados XML de Bordado / Ficha Técnica Digital Estruturada / XML Production Sheet & Schema) é o padrão de dados em formato de marcação estruturada (XML/JSON) encapsulado dentro dos formatos contemporâneos de matrizes de bordado (como arquivos compactados .EMB, .PES versões recentes, .VP3, .EXP+ e pacotes de produção ERP). Enquanto arquivos binários antigos (como o .DST tradicional) armazenam apenas coordenadas físicas de agulhada sem registrar nomes de cores, o arquivo XML paralelo descreve códigos de linha de marcas reais (ex.: Madeira, Isacord, Setta, Lumina), sequência exata de paradas, consumo estimado de linha superior e de bobina, tempo de produção e dados do cliente.",
    technicalDetails: "Nos fluxos industriais integrados com Indústria 4.0 e leitor de código de barras na máquina, a máquina de bordar lê a árvore de nós XML `<EmbroideryData>` contendo tags como `<ThreadColor>`, `<StitchCount>`, `<SequenceOrder>` e `<TensionPreset>`. Isso permite que máquinas modernas configurem automaticamente a ordem das agulhas e as tensões eletrônicas sem intervenção manual do operador, eliminando erros humanos na troca de fios.",
    beginnerExplanation: "É como uma 'etiqueta inteligente' invisível dentro do arquivo do bordado que guarda todas as informações importantes: os nomes e números das cores das linhas que você escolheu, quantos metros de linha a máquina vai gastar, o tempo que vai demorar e até as instruções para a bordadeira!",
    howItWorks: [
      "1. O digitador finaliza a matriz no software e atribui as marcas e números reais das linhas nas paletas.",
      "2. Ao salvar a matriz, o software compila o arquivo de pontos e gera a árvore de metadados XML correspondente.",
      "3. O XML armazena o número total de pontos, dimensões em milímetros, sequência de cortes e paradas de cor.",
      "4. O arquivo de produção é enviado para a máquina via rede Wi-Fi, pendrive ou código de barras.",
      "5. A máquina de bordar lê o cabeçalho XML e exibe na tela colorida a visualização real do bordado com as cores certas.",
      "6. A ficha técnica impressa (Production Sheet) é gerada automaticamente a partir dos mesmos dados XML."
    ],
    characteristics: [
      "Padrão aberto e legível por softwares de gestão, ERP e máquinas computadorizadas.",
      "Armazenamento de paletas de cores reais com códigos de fabricantes mundiais.",
      "Integração perfeita com sistemas de automação e cálculo de custo por milheiro de pontos."
    ],
    applications: [
      "Geração automática de folhas de aprovação de bordado para envio a clientes.",
      "Cálculo automático de custo de linha e tempo de máquina em confecções.",
      "Sincronização de rede entre o estúdio de arte e as máquinas industriais no chão de fábrica.",
      "Preservação do histórico de edições, data de criação e versão da matriz."
    ],
    commonErrors: [
      "❌ Salvar matriz apenas em formato .DST cru e perder todos os nomes de cores originais da paleta.",
      "❌ Deletar o arquivo de metadados ao renomear pastas de produção, desconfigurando a ordem de agulhas.",
      "❌ Usar caracteres especiais e acentos inválidos no nome do autor no XML, corrompendo a leitura em máquinas antigas."
    ],
    troubleshootingTips: [
      "A máquina de bordar exibe todas as cores da matriz em tons aleatórios ou preto e branco: arquivos de formato .DST antigo não gravam metadados XML de cores; salve em formato nativo (.PES, .JEF, .VP3) ou utilize a ficha técnica XML impressa para programar as agulhas.",
      "O software de gestão da fábrica não consegue calcular o consumo de linha da matriz: exporte a folha de produção com metadados XML habilitados nas preferências de saída do Wilcom ou Pulse.",
      "O arquivo de bordado não abre na máquina nova: certifique-se de que a versão dos metadados XML do arquivo é compatível com o firmware da sua máquina."
    ],
    dicaArtrelados: "Sempre salve seus trabalhos em dois formatos: no formato original do seu programa (como .EMB do Wilcom ou .PES) que guarda todos os metadados XML de cores e densidade editáveis, e na versão de máquina (.DST/.JEF). Se o cliente pedir uma alteração daqui a dois anos, você terá a receita completa pronta!",
    voceSabia: "O formato XML é a base de arquivos modernos de todo o mundo digital: até mesmo os documentos do Word (.docx) e do Excel (.xlsx) são na verdade pastas compactadas cheias de arquivos XML que guardam todo o conteúdo e formatação!",
    practicalExercise: "No seu software de bordado, clique em 'Imprimir Ficha Técnica / Production Worksheet'. Veja como o programa lista todas as cores, marcas de linha, metros de fio consumidos e tempo estimado de máquina calculados a partir dos metadados XML.",
    quickSummary: "Estrutura digital de dados e metadados que armazena informações de cores, consumo de linhas e instruções de produção na matriz.",
    relatedTerms: ["Ficha Técnica", "Production Worksheet", "DST", "EMB", "PES", "Paleta de Cores", "Indústria 4.0"],
    tags: ["xml", "metadados", "fichatecnica", "softwares", "producao", "paletadecores", "formatos"]
  }
];

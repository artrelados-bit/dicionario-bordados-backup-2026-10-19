import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART7: Verbete[] = [
  {
    id: "i-037-interpolacao-linear-e-curva-bezier-na-digitalizacao",
    code: "I-037",
    term: "Interpolação Linear & Curva de Bézier na Digitalização (Bézier Curve Interpolation in Embroidery Punching)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim interpolare (renovar/inserir intermediários) e homenagem ao engenheiro e matemático francês Pierre Bézier (1910–1999).",
    summary: "Fórmula matemática que conecta nós e alças de controle no software para criar contornos perfeitamente curvos e orgânicos sem serrilhados de pontos.",
    definition: "A Interpolação Linear e Curvas Paramétricas de Bézier na Digitalização de Matrizes (Bézier Polynomial Curve Interpolation & Node Vector Math in Embroidery CAD) é a formulação matemática polinomial de ordem cúbica utilizada nos softwares de digitalização para calcular a trajetória de contornos e colunas de pontos entre nós de controle cartesianos (Control Points & Tangent Handles). Em vez de aproximar curvas por uma sucessão de infinitas retas quebradas (polilinhas serrilhadas), o algoritmo de Bézier calcula uma trajetória suave contínua através de polinômios de Bernstein, permitindo ao digitalizador modelar pétalas de flores, corpos orgânicos e fontes cursivas de altíssima elegância com o menor número possível de nós e perfeita precisão milimétrica.",
    technicalDetails: "Formulação matemática da curva de Bézier cúbica:\n• Equação paramétrica: B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃, para t ∈ [0,1];\n• Ponto P₀ e P₃: Nós âncora inicial e final (Corner Nodes);\n• Pontos P₁ e P₂: Alças tangentes de inclinação e curvatura (Smooth / Symmetric Handles);\n• Resolução de Amostragem (Chord Height Tolerance): Tolerância de desvio linear máxima de 0,05mm convertida em micropassos de agulha de 0,1mm a 4,0mm.",
    howItWorks: [
      "1. O programador precisa desenhar a asa sinuosa e curva de uma borboleta.",
      "2. Em vez de clicar 50 vezes com o mouse criando pontinhos retos quebrados, ele insere apenas 4 nós de Bézier estratégicos.",
      "3. Puxa as alças de controle com o mouse: a curva se deforma com suavidade e curvatura perfeita e contínua.",
      "4. O software calcula a interpolação matemática ao longo da curva.",
      "5. Ao gerar os pontos cheios, a agulha penetra o tecido descrevendo uma curva orgânica sem nenhum solavanco ou dente de serra.",
      "6. O bordado na roupa reflete uma harmonia fluida de alto padrão visual.",
      "7. O arquivo fica leve, rápido de processar e fácil de editar a qualquer momento.",
    ],
    beginnerExplanation: "É a ferramenta que permite fazer curvas perfeitas no computador com poucos cliques! Em vez de você ter que clicar dezenas de vezes para tentar fazer um círculo e ele ficar parecendo uma caixa cheia de pontas duras, você coloca só 3 ou 4 pontinhos e puxa umas 'anteninhas' com o mouse: o traço vira uma curva linda, lisinha e redondinha como se tivesse sido desenhada por um artista com pincel macio!",
    applications: [
      "Digitalização fluida de desenhos florais, arabescos, folhas e pétalas orgânicas",
      "Criação de monogramas cursivos elegantes e tipografias caligráficas com curvas suaves",
      "Modelagem anatômica de corpos de personagens e silhuetas animais",
      "Redução drástica do tamanho de arquivos de matriz e facilidade de redimensionamento"
    ],
    commonErrors: [
      "Colocar nós de controle em excesso (over-nodding) ao longo de uma curva simples, gerando ondulações feias e agulhadas repetidas",
      "Puxar alças tangentes longas demais criando laçadas vetoriais que se cruzam no software",
      "Usar nós retos em áreas curvas, fazendo o contorno bordado parecer um polígono pontudo"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DOS NÓS: Use o MENOR número de nós possível para desenhar qualquer curva! Menos nós = Curva mais suave e bordado mais perfeito!",
      "Posicione os nós de Bézier nos pontos de inflexão extrema da curva (no topo das elevações e no fundo das curvas)",
      "Pressione a tecla 'Barra de Espaço' no Wilcom/Hatch para alternar rapidamente entre ponto curvo (círculo amarelo) e ponto reto (quadrado azul)",
      "Mantenha as alças tangentes simétricas para curvas contínuas e use a tecla 'Alt' para quebrar a alça em quinas afiadas"
    ],
    dicaArtrelados: "A elegância de uma matriz de bordado é medida pela limpeza dos seus nós de Bézier! Quem sabe usar curvas suaves desenha uma matriz complexa na metade do tempo e cria bordados que parecem seda pura no tecido!",
    voceSabia: "Pierre Bézier desenvolveu suas famosas curvas na década de 1960 enquanto trabalhava como engenheiro-chefe na fábrica de automóveis da Renault, na França, para permitir que designers esculpissem no computador as curvas sensuais dos carros esportivos sem precisar de moldes de argila!",
    practicalExercise: "No seu software de matriz, tente desenhar uma letra 'S' perfeita usando apenas 5 cliques com curvas suaves de Bézier: observe a diferença de suavidade em comparação com um desenho feito com 30 cliques retos!",
    quickSummary: "Fórmula de curvas suaves por nós e alças de controle que garante contornos orgânicos e sem serrilhados na matriz.",
    relatedTerms: ["Vetorização Manual & Punching", "Importação Vetorial", "Ponto Cheio / Ponto Satin", "Compensação de Repuxo"],
    tags: ["i-037", "interpolacao", "curvas de bezier", "nos vetoriais", "software", "suavidade", "desenho vetorial", "artrelados"],
    bibliographicReferences: [
      "BÉZIER POLYNOMIALS & VECTOR SPLINES IN TEXTILE CAD/CAM. Paris, 2023.",
      "THE MATHEMATICS OF COMPUTER AIDED EMBROIDERY PUNCHING. Sydney, 2022.",
      "ARTRELADOS. Curvas de Mestre: O Guia Definitivo de Curvas de Bézier para Digitalizar Matrizes com Elegância e Rapidez. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-038-ignicao-termica-e-fusao-de-fio-sintetico",
    code: "I-038",
    term: "Ignição Térmica & Fusão de Fio Sintético (Thermal Wire Cutting, Thread Cautery & Hot-Melt Fusion)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim ignitio (ato de queimar/aquecer) e fusio (derretimento). Técnica de cauterização e termofusão de polímeros termoplásticos.",
    summary: "Uso de pirógrafo térmico, ferro de solda ou fio quente para selar pontas de linhas de poliéster e recortar bordas de emblemas e patches sem desfiar.",
    definition: "A Ignição Térmica, Cauterização e Fusão de Fios Sintéticos (Hot-Wire Thermal Thread Cauterization & Edge Heat-Fusion Sealing) é o procedimento de acabamento e pós-produção que utiliza uma ponta metálica aquecida eletricamente (pirógrafo térmico de precisão de 15W a 30W com ponta de agulha a 200°C–250°C ou cortador térmico a laser) para derreter e selar instantaneamente as pontas de fios de poliéster e poliamida (náilon). Como o poliéster é um polímero termoplástico que funde a aproximadamente 250°C, o calor sela as microfibras em uma micro-esfera vítrea inquebrável, eliminando fiapos rebeldes em segundos e permitindo recortar o perímetro de brasões, patches e emblemas em tecidos sintéticos com bordas 100% seladas que nunca desfilam.",
    technicalDetails: "Termodinâmica de fusão de polímeros têxteis:\n• Ponto de fusão do poliéster (PET): 250°C a 260°C;\n• Ponto de fusão da poliamida (Náilon 6.6): 255°C a 265°C;\n• Temperatura de trabalho da ponta térmica: 220°C a 240°C sob toque rápido (< 0,5 segundo);\n• Ferramentas utilizadas: Pirógrafo de artesanato com ponta bisturi, caneta cauterizadora a pilha ou máquina de corte a laser CO2;\n• Restrição de materiais: Aplicável APENAS a fios sintéticos (NUNCA usar em viscose/rayon ou algodão, que queimam em cinzas em vez de fundir).",
    howItWorks: [
      "1. A bordadeira finaliza a produção de 50 chaveiros e patches bordados sobre tecido sintético (Oxford ou Sarja 100% poliéster).",
      "2. Ao recortar o patch com a tesoura comum, a borda do tecido e as pontinhas dos fios de linha podem soltar fiapos com o uso.",
      "3. Ela liga o cauterizador térmico de precisão com ponta fina.",
      "4. Passa a ponta aquecida suavemente ao redor do cordão de ponto cheio da borda do patch.",
      "5. O calor derrete instantaneamente as fibras externas do poliéster, fundindo o tecido e a linha em uma moldura selada perfeita.",
      "6. Para limpar pequenos fiapinhos que sobraram no verso do bordado, ela aproxima a ponta térmica por um décimo de segundo.",
      "7. O fiapo derrete e vira uma bolinha microscópica que trava o nó para sempre.",
      "8. O emblema fica com acabamento impecável, pronto para ser colado ou costurado em jaquetas!",
    ],
    beginnerExplanation: "É o famoso truque da 'pontinha quente' que as bordadeiras profissionais usam para deixar os bordados limpinhos e sem nenhum fiapo solto! Como a linha de poliéster é feita de um tipo de plástico especial, quando você encosta uma pontinha quente (como um aparelhinho de solda levinho ou pirógrafo), o fiapo derrete na hora e sela a ponta como se fosse uma solda mágica! É perfeito para recortar chaveirinhos e patches sem deixar o tecido desfiar!",
    applications: [
      "Selagem perimétrica e recorte perfeito de patches, emblemas e brasões militares",
      "Queima e fixação invisível de pontas de linha no verso de peças finas",
      "Acabamento estanque de chaveiros e tags de tecido sintético feitos no bastidor",
      "Criação de detalhes vazados e corte de aplicações sem usar tesoura manual"
    ],
    commonErrors: [
      "Tentar queimar fios de viscose (rayon) ou algodão com ponta quente (o fio pega fogo, fica preto e queima o tecido)",
      "Encostar a ponta quente por tempo demais no mesmo lugar, criando um buraco preto no bordado",
      "Trabalhar em ambientes fechados sem ventilação respirando os vapores da queima de polímero"
    ],
    troubleshootingTips: [
      "TESTE DO FIO: Faça a cauterização térmica APENAS com linhas de poliéster (como Isacord, Polyneon e Lumina)!",
      "Passe a ponta térmica sempre em movimento rápido e contínuo, sem parar em nenhum ponto para não queimar a cor da linha",
      "Utilize uma superfície de vidro temperado ou cerâmica como base de corte para trabalhar com a ponta quente",
      "Mantenha o ateliê bem ventilado com exaustor ou janela aberta durante o processo de corte térmico"
    ],
    dicaArtrelados: "Ter uma caneta cauterizadora térmica no ateliê custa menos de R$ 50 e economiza horas de corte manual com tesourinha! Seus patches e chaveirinhos ficam com acabamento industrial de loja de shopping!",
    voceSabia: "O corte e selagem térmica de tecidos sintéticos foi inventado durante a corrida espacial na década de 1960 para produzir os trajes de nylon e mylar dos astronautas sem gerar fiapos que pudessem flutuar na gravidade zero da cabine espacial!",
    practicalExercise: "Pegue um pedaço de linha de poliéster e aproxime a chama de um isqueiro ou a ponta quente de um ferro de solda por 1 segundo: veja como a ponta do fio se transforma em uma bolinha plástica selada instantaneamente!",
    quickSummary: "Uso de calor de precisão para fundir pontas de fios sintéticos e selar bordas de patches sem desfiar.",
    relatedTerms: ["Isacord & Fios de Poliéster", "Emblemas e Patches", "Borda Merrow", "Tesoura de Arremate"],
    tags: ["i-038", "ignicao termica", "cauterizador", "fusao", "patches", "poliester", "acabamento", "artrelados"],
    bibliographicReferences: [
      "THERMAL SEALING & LASER CAUTERIZATION IN APPAREL EMBELLISHMENT. Frankfurt, 2023.",
      "SYNTHETIC FIBER THERMOPLASTIC DYNAMICS & FINISHING. Geneva, 2022.",
      "ARTRELADOS. Acabamento Perfeito com Selagem Térmica: Como Fazer Patches e Emblemas com Bordas Indestrutíveis. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-039-indexacao-cartesiana-coordenadas-xy-pantografo",
    code: "I-039",
    term: "Indexação Cartesiana de Coordenadas X/Y no Pantógrafo (Cartesian X/Y Stepper Coordinate Indexing)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo feminina composto.",
    origin: "Em homenagem ao filósofo e matemático francês René Descartes (Cartesius, 1596–1650) e do grego pantographos (desenhador de todas as coisas).",
    summary: "Sistema de eixos X e Y movido por motores de passo que desloca o bastidor com precisão de centésimos de milímetro a cada ponto costurado.",
    definition: "A Indexação Cartesiana de Coordenadas X/Y e Cinemática do Pantógrafo (Cartesian Coordinate Stepper Motor Indexing & Closed-Loop Pantograph Dynamics) é a arquitetura mecatrônica de controle numérico computadorizado (CNC) que rege a movimentação física do bastidor de bordar no plano bidimensional horizontal. Acionado por servomotores digitais ou motores de passo híbridos acoplados a correias dentadas de poliuretano com alma de aço e guias lineares prismáticas de esferas recirculantes, o sistema traduz cada linha de comando do arquivo de matriz (vetores de deslocamento relativo ΔX e ΔY expressos em décimos de milímetro - 0,1mm) em pulsos elétricos exatos, sincronizando a parada do bastidor no momento da penetração da agulha e seu deslocamento no intervalo de elevação a até 1.200 PPM.",
    technicalDetails: "Parâmetros cinemáticos e metrologia do pantógrafo:\n• Resolução de micropasso: 0,025mm a 0,05mm por pulso de encoder;\n• Aceleração linear máxima: Até 1,5G de aceleração com controle de curva em 'S' (Jerk Reduction);\n• Unidade padrão de matriz (Formato Tajima / DST): 1 unidade = 0,1 milímetro (10 unidades = 1mm);\n• Folga mecânica permitida (Backlash): < 0,03mm nas guias lineares e correias sincronizadoras;\n• Janela de movimentação segura: O bastidor só se move quando o ângulo do eixo principal está entre 280° e 100° (agulha fora do tecido).",
    howItWorks: [
      "1. A CPU da máquina de bordar lê a próxima coordenada na matriz: 'Mova X em +1,2mm e Y em -0,8mm'.",
      "2. O sensor do eixo principal informa que a agulha acabou de sair do tecido e subiu para a posição segura.",
      "3. Os controladores dos motores dos eixos X e Y enviam trens de pulsos elétricos de alta frequência para os motores de passo.",
      "4. As correias dentadas movem o braço do pantógrafo com aceleração suave e desaceleração instantânea no ponto exato em menos de 25 milissegundos.",
      "5. O bastidor para imóvel como uma rocha.",
      "6. A agulha desce e perfura o tecido no alvo matemático perfeito.",
      "7. Esse ciclo se repete 1.000 vezes por minuto com estabilidade e repetibilidade absoluta do primeiro ao último ponto.",
    ],
    beginnerExplanation: "É o sistema super inteligente de 'motores e correias' que move o bastidor para a frente, para trás, para a esquerda e para a direita! É como se fossem as mãos invisíveis de um robô: toda vez que a agulha sobe, os motores andam uma fraçãozinha de milímetro para o lado e param parados; a agulha desce, fura o pano e sobe de novo! É essa dança perfeita e rápida que desenha o bordado no tecido!",
    applications: [
      "Posicionamento micrométrico de pontos em desenhos de alta complexidade e microletras",
      "Garantia de que os contornos fechem exatamente em cima do preenchimento sem sair do lugar",
      "Movimentação suave e silenciosa do bastidor em altas velocidades de produção",
      "Calibração de origem absoluta após interrupção por falta de energia ou parada de emergência"
    ],
    commonErrors: [
      "Bater a mão ou empurrar o bastidor enquanto a máquina está ligada (faz o motor de passo 'perder passos' e desalinha todo o resto do bordado)",
      "Correias dentadas frouxas ou ressecadas que criam folga mecânica (o desenho sai ovalado e os contornos desencaixam)",
      "Deixar o bastidor bater em uma parede ou objeto próximo enquanto o pantógrafo se move"
    ],
    troubleshootingTips: [
      "NUNCA force o movimento do pantógrafo com a mão com a máquina ligada!",
      "A cada 6 meses, inspecione a tensão das correias dentadas dos eixos X e Y: elas devem vibrar com um tom firme ao serem beliscadas, sem estarem frouxas nem hiperesticadas",
      "Limpe os trilhos e guias lineares do pantógrafo com um pano seco e aplique óleo fino ou graxa de lítio branca própria para rolamentos",
      "Se o contorno do seu bordado estiver saindo sempre deslocado para o mesmo lado, verifique se não há sujeira presa no trilho do eixo X ou Y"
    ],
    dicaArtrelados: "Cuidar dos trilhos do pantógrafo é o segredo para ter bordados com contornos perfeitamente encaixados por mais de 10 anos! Mantenha os eixos limpos e lubrificados e sua máquina nunca vai perder o ponto!",
    voceSabia: "O sistema de coordenadas cartesianas foi criado pelo filósofo René Descartes em 1637 quando ele estava deitado na cama olhando uma mosca voar no teto e percebeu que podia descrever a posição exata da mosca usando apenas duas medidas em relação às paredes da sala!",
    practicalExercise: "Com a máquina desligada (ou no modo manual de teste), observe as barras de aço e correias pretas dentadas que conectam o pantógrafo aos motores: veja como cada eixo X (horizontal) e Y (vertical) trabalha em harmonia perfeita!",
    quickSummary: "Sistema de eixos X e Y movido por motores de passo que posiciona o bastidor com precisão de centésimos de milímetro.",
    relatedTerms: ["Pantógrafo da Máquina", "Ponto de Origem / Ponto Zero", "Trace / Traçado Perimétrico", "Compensação de Repuxo"],
    tags: ["i-039", "coordenadas xy", "pantografo", "motores de passo", "eixos", "precisao cartesiana", "mecanica", "artrelados"],
    bibliographicReferences: [
      "ROBOTICS & CNC MOTION CONTROL IN TEXTILE APPAREL MACHINERY. Tokyo, 2023.",
      "STEPPER MOTOR DYNAMICS & CLOSED-LOOP POSITIONING IN EMBROIDERY. Munich, 2022.",
      "ARTRELADOS. A Mecatrônica do Bordado: Como Funcionam os Eixos X e Y e Como Garantir o Encaixe Perfeito de Contornos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-040-imobilizacao-de-tecido-com-spray-adesivo-temporario",
    code: "I-040",
    term: "Imobilização de Tecido com Spray Adesivo Temporário (Temporary Adhesive Spray Stabilization Protocol)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim immobilis (imóvel/sem movimento) e do inglês aerosol spray (dispersão de partículas sob pressão).",
    summary: "Cola em spray reposicionável que une o tecido à entretela temporariamente sem esticar, evitando rugas e marcas de bastidor em toalhas e veludos.",
    definition: "A Imobilização Têxtil por Adesivo em Aerossol Temporário e Reposicionável (Temporary Textile Adhesive Spray Stabilization / Tack Spray Hooping Protocol) é a técnica auxiliar de montagem no bastidor na qual se aplica uma névoa microscópica e homogênea de cola termoplástica acrílica de baixa pegajosidade (Pressure-Sensitive Adhesive - PSA) sobre a superfície da entretela antes do posicionamento do tecido. Esse método cria uma adesão superficial contínua e reversível que imobiliza a peça sem distorcer suas fibras elásticas, viabilizando a técnica de 'bordar flutuando' (Float Hooping - onde apenas a entretela é presa no aro e o tecido é colado por cima sem ser esmagado pelo parafuso), eliminando marcas de aro em veludos e mantendo tecidos escorregadios (cetim e seda) 100% planos durante o bordado.",
    technicalDetails: "Química e aplicação do adesivo em spray têxtil:\n• Composição química: Polímeros acrílicos sintéticos em suspensão de solvente não clorado e gás propelente inodoro;\n• Propriedade reposicionável: Permite colar, descolar e reajustar o tecido até 5 vezes sem perder a aderência;\n• Distância de aplicação: 25cm a 30cm com jato em leque contínuo em cabine de aplicação ou caixa de papelão;\n• Tempo de cura volátil: Aguardar 10 a 15 segundos para evaporação do solvente antes de assentar o tecido (evita que a cola grude na agulha);\n• Remoção pós-bordado: Evapora ou dissolve completamente com vapor de ferro ou lavagem simples com água morna.",
    howItWorks: [
      "1. A bordadeira precisa bordar um nome em um body delicado de bebê de malha fininha ou em uma toalha de veludo nobre.",
      "2. Se ela prender o veludo no bastidor comum, o aro de plástico vai esmagar os pelos do veludo e deixar uma marca feia permanente.",
      "3. Ela prende APENAS a entretela no bastidor, bem esticada.",
      "4. Leva o bastidor até uma caixa de aplicação e borrifa uma névoa suave de spray adesivo temporário sobre a entretela.",
      "5. Espera 10 segundos para o solvente evaporar e a superfície ficar com toque 'adesivo como um post-it'.",
      "6. Apoia a toalha de veludo por cima da entretela colada, alisando suavemente com as palmas das mãos sem puxar o tecido.",
      "7. Encaixa o bastidor na máquina e executa o bordado.",
      "8. O tecido não escorrega, não enruga e não deforma nem um milímetro.",
      "9. Ao terminar, ela simplesmente puxa o veludo: a entretela solta suavemente sem deixar nenhum resíduo de cola no tecido!",
    ],
    beginnerExplanation: "É a famosa 'colinha mágica em spray' do ateliê! Ela funciona exatamente como a cola daquelas folhinhas amarelas de recados (Post-it): gruda com firmeza, mas se você puxar, solta facinho sem estragar o pano e sem deixar sujeira! É o maior segredo para bordar toalhas de veludo, roupas de bebê e tecidos finos sem precisar esmagar eles dentro do bastidor! Você prende só a entretela no bastidor, passa o spray e gruda a roupa por cima!",
    applications: [
      "Técnica de flutuação (Float Hooping) para peças que não cabem no bastidor (meias, golas, bolsos)",
      "Bordados em tecidos aveludados, camurça, couro e cetim sem deixar marcas de aro (Hoop Burn)",
      "Estabilização de tecidos super elásticos (viscolycra e malhas) sem esticar a trama",
      "Fixação rápida de retalhos de tecidos em apliques de grande formato"
    ],
    commonErrors: [
      "Borrifar o spray perto demais (a menos de 10cm), criando poças líquidas de cola que mancham o tecido e grudam na agulha",
      "Borrifar o spray dentro da máquina de bordar ou perto do pantógrafo (a névoa de cola gruda nos trilhos e nos sensores ópticos)",
      "Colocar o tecido imediatamente sem esperar 10 segundos (a cola molhada passa para o tecido e quebra a linha)"
    ],
    troubleshootingTips: [
      "Tenha uma caixa de papelão funda de sapatos ao lado da mesa de montagem: borrife o spray SEMPRE dentro da caixa para conter a névoa longe da sua máquina!",
      "Aplique sempre uma camada fina e uniforme (uma névoa leve é suficiente para segurar o tecido com firmeza)",
      "Se a agulha começar a acumular cola e quebrar linha, passe um algodão com álcool isopropílico na haste da agulha para limpar na hora",
      "Utilize marcas consagradas de spray têxtil temporário (como Odif 505, Quimatic ou AlbaChem) livres de ácidos e CFC"
    ],
    dicaArtrelados: "O spray adesivo temporário é o melhor amigo do ateliê rápido! Ele permite bordar toalhas, nécessaires e roupas infantis sem perder tempo ajustando parafusos duros e garante que suas peças nunca mais saiam com marcas de aro!",
    voceSabia: "O adesivo reposicionável temporário foi descoberto por acidente pelo cientista Spencer Silver nos laboratórios da 3M em 1968 enquanto tentava criar uma supercola para aviões; a cola era fraca demais para aeronaves, mas revelou-se a invenção perfeita para os blocos Post-it e para a indústria têxtil!",
    practicalExercise: "Prenda uma entretela no bastidor e borrife uma nuvem leve de spray temporário: cole um retalho de tecido por cima, passe a mão alisando e depois puxe o tecido para sentir como ele gruda firme e solta limpo sem rasgar!",
    quickSummary: "Cola reposicionável em spray que fixa o tecido na entretela sem esmagar no bastidor, evitando marcas e rugas.",
    relatedTerms: ["Entretela Rasgável", "Entretela de Recorte / Cut-Away", "Hoop Burn & Marcas de Bastidor", "Flutuação de Tecido / Floating"],
    tags: ["i-040", "spray adesivo", "cola temporaria", "odif 505", "flutuacao", "toalhas", "estabilizacao", "artrelados"],
    bibliographicReferences: [
      "PRESSURE-SENSITIVE ADHESIVES IN TEXTILE EMBROIDERY APPLICATIONS. Chicago, 2023.",
      "THE ESSENTIAL GUIDE TO FABRIC STABILIZATION & FLOATING HOOP TECHNIQUES. London, 2022.",
      "ARTRELADOS. O Segredo da Flutuação: Como Usar Spray Adesivo Temporário para Bordar Veludos e Malhas Sem Marcas de Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-041-insercao-de-cordao-e-fio-tubular-cording-device",
    code: "I-041",
    term: "Inserção de Cordão & Fio Tubular - Cording Device (Cording Device & Soutache Embroidery Attachment)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês cording (aplicação de cordas/cordões) e do francês soutache (galão decorativo trançado). Técnica clássica de passementerie automatizada.",
    summary: "Dispositivo especial acoplado à agulha que guia cordões grossos, fitas e fios de lã, prendendo-os ao tecido com micropontos em zigue-zague.",
    definition: "A Inserção Mecatrônica de Cordões, Fios Tubulares e Soutache (Cording & Taping Device / Soutache Embroidery Attachment) é o acessório mecânico de precisão montado no calcador ou cabeçote da máquina de bordar industrial e semi-industrial. Dotado de um bico guia tubular orientável e alimentador de carretel superior, o dispositivo conduz continuamente um cordão espesso (fio de lã, cordão de algodão encerado, fita de cetim ou soutache metálico de 1mm a 4mm de espessura) diretamente sob a trajetória da agulha. Comandada por matrizes digitalizadas com pontos de fixação em zigue-zague ou zigue-zague invisível em linha transparente de monofilamento de náilon, a agulha abraça o cordão e o ancora firmemente ao tecido, criando linhas em relevo escultural exuberante, arabescos barrocos e contornos tridimensionais dramáticos.",
    technicalDetails: "Especificações do sistema Cording/Soutache:\n• Diâmetro de cordão suportado: 0,8mm a 4,5mm (cordões redondos, chatos ou trançados);\n• Bicos guias intercambiáveis: Calibres 1.5mm, 2.5mm, 3.5mm e 4.5mm com polimento interno espelhado;\n• Geometria de ponto de fixação: Zigue-zague estreito transversal (Zig-Zag Underlay) com passo de 1,2mm a 2,0mm e largura de 1,5x o diâmetro do cordão;\n• Linha de fixação recomendada: Monofilamento de náilon transparente 100% invisível ou linha de poliéster 60wt no mesmo tom do cordão.",
    howItWorks: [
      "1. A estilista desenha um casaco nobre de inverno com arabescos dourados em relevo espesso estilo militar barroco.",
      "2. No software, o programador utiliza a ferramenta 'Cording / Pesponto de Cordão', desenhando linhas de contorno vetorizadas simples.",
      "3. O software gera os micropontos de zigue-zague calculados para abraçar o cordão sem furá-lo no meio.",
      "4. Na máquina industrial, o operador instala o bico guia do dispositivo Cording na agulha nº 1 e passa o cordão dourado de 3mm pelo alimentador.",
      "5. A máquina inicia o bordado: o bico mecânico gira e acompanha as curvas do desenho, depositando o cordão com precisão milimétrica.",
      "6. A agulha desce alternadamente de um lado e do outro do cordão com linha transparente, costurando-o firme sobre o tecido de lã do casaco.",
      "7. O resultado é um relevo tridimensional nobre e escultural que salta aos olhos e ao toque, impossível de ser obtido apenas com pontos comuns de linha.",
    ],
    beginnerExplanation: "É um acessório super chique que permite à máquina bordar usando cordõezinhos de verdade, fios de lã ou fitas grossas! A máquina tem um tubinho guia por onde passa o cordão: conforme a máquina vai andando pelo desenho, a agulha vai costurando pontinhos de um lado para o outro do cordão com uma linha invisível, pregando ele no tecido perfeitamente! Fica parecendo aqueles uniformes de gala antigos de príncipes e nobres cheios de cordões dourados em alto relevo!",
    applications: [
      "Casacos de alta costura, trajes cerimoniais, jaquetas militares e roupas barrocas",
      "Almofadas decorativas de luxo, cortinas e estofamentos com detalhes em soutache",
      "Bordados em roupas de dança flamenca, trajes folclóricos e figurinos de época",
      "Criação de contornos e letras em alto relevo com texturas de lã e algodão"
    ],
    commonErrors: [
      "Usar bico guia de diâmetro inadequado (o cordão prende no bico ou fica solto dançando fora da mira da agulha)",
      "Programar curvas com raio fechado demais que fazem o cordão dobrar e encavalar sob o calcador",
      "Usar linha de fixação muito grossa que fica visível e estraga a estética do cordão nobre"
    ],
    troubleshootingTips: [
      "Escolha sempre o bico guia com cerca de 0,5mm de folga a mais do que o diâmetro real do cordão para garantir fluxo livre sem atrito",
      "Utilize linha de monofilamento de poliamida transparente na agulha para que os pontos de fixação fiquem 100% invisíveis sobre o cordão",
      "Em curvas de 90°, programe uma desaceleração automática da velocidade para 400 PPM para que o dispositivo gire o cordão com perfeição",
      "Verifique se o carretel de cordão no suporte superior gira livremente sem trancos de tração"
    ],
    dicaArtrelados: "O bordado com cordão Cording é o segredo mais bem guardado da alta costura européia! Peças com detalhes em cordão soutache podem ser vendidas por valores altíssimos no mercado de noivas e decoração de luxo!",
    voceSabia: "O bordado Soutache originou-se na França e na Hungria no século XV como decoração militar obrigatória nos uniformes dos regimentos de hussardos (cavalaria ligeira), onde as tranças de cordões grossos serviam não apenas como enfeite majestoso, mas também como uma armadura leve para amortecer golpes de espada!",
    practicalExercise: "Se tiver acesso a um calcador de cordão simples na sua máquina doméstica ou industrial, passe um cordão fino encerado pelo orifício do calcador e teste uma costura em zigue-zague sobre um retalho para ver o lindo relevo nascer!",
    quickSummary: "Dispositivo mecânico que guia e costura cordões grossos e fitas no tecido com pontos em zigue-zague.",
    relatedTerms: ["Dispositivo Sequin & Lantejoula", "Ponto Cheio / Ponto Satin", "Monofilamento Transparente", "Velocidade PPM"],
    tags: ["i-041", "cording", "soutache", "cordao", "dispositivo especial", "alta costura", "relevo tridimensional", "artrelados"],
    bibliographicReferences: [
      "AUTOMATED CORDING & TAPING ATTACHMENTS IN INDUSTRIAL EMBROIDERY. Nagoya, 2023.",
      "THE ART OF SOUTACHE & PASSEMENTERIE EMBELLISHMENT. Paris, 2022.",
      "ARTRELADOS. O Charme do Soutache: Como Programar e Bordar com Dispositivos de Cordão Cording para Peças de Alto Luxo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-042-inclinacao-conica-do-cone-de-linha-king-spool",
    code: "I-042",
    term: "Inclinação Cônica do Cone King Spool & Desenrolamento Superior (Cross-Wound King Spool Taper & Thread Unwinding Dynamics)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Linhas & Agulhas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim conus (cone geométrico) e do inglês King Spool (carretel rei cônico de alta capacidade). Dinâmica mecatrônica de escoamento de filamentos.",
    summary: "Formato cônico dos cones de linha de 4.000m que permite que o fio saia voando pelo topo sem puxar o carretel e sem dar trancos na máquina.",
    definition: "A Inclinação Cônica do Cone King Spool e Cinemática de Desenrolamento Axial Superior (Cross-Wound Tapered King Spool & Over-the-Top Unwinding Dynamics) é a geometria de engenharia mecânica dos suportes plásticos e do enrolamento cruzado helicoidal (Cross-Wound) utilizado nos cones industriais de linha de bordar (de 1.000m a 5.000m). Ao contrário de carretéis cilíndricos domésticos comuns (que precisam girar fisicamente em um eixo para liberar linha), o cone cônico permite que o fio se desprenda livremente em espiral para cima pelo topo (Over-the-End Delivery) com atrito e resistência mecânica praticamente nulos, garantindo um suprimento contínuo e sem solavancos mesmo quando a máquina atinge velocidades extremas de até 1.200 pontos por minuto.",
    technicalDetails: "Propriedades físicas e geométricas do cone cônico industrial:\n• Ângulo de conicidade: 4° a 7° de inclinação cônica para liberação centrífuga sem fricção no corpo do cone;\n• Padrão de bobinamento: Enrolamento helicoidal cruzado em ângulo de 15° a 25° (evita que espiras vizinhas caiam ou se encavalem);\n• Altura da guia superior (Thread Mast Eyelet): O olhal metálico da torre deve ficar posicionado a pelo menos 15cm a 25cm exatamente acima do centro do cone;\n• Ranhura de travamento inferior: Sulco perimétrico na base de plástico para prender a ponta solta e evitar desenrolamento indesejado no estoque.",
    howItWorks: [
      "1. A bordadeira instala o cone de linha cônico King Spool em pé na torre de suporte da máquina.",
      "2. Passa a ponta do fio pelo olhal metálico guia localizado verticalmente bem acima da ponta do cone.",
      "3. Quando a máquina dispara a 900 PPM, o estica-fio puxa cerca de 5 a 8 metros de linha por minuto.",
      "4. O fio se solta do cone cônico voando em espirais livres e suaves pelo ar, sem fazer o cone plástico girar ou tremer na base.",
      "5. A tensão de entrada nos discos tensores permanece perfeitamente constante e estável, sem nenhum tranco ou estalo.",
      "6. A laçada na lançadeira forma-se com simetria milimétrica, resultando em um bordado com verso perfeito e zero quebras de linha.",
    ],
    beginnerExplanation: "Você já reparou que os cones grandes de linha de bordar têm um formato de 'cone de trânsito' inclinadinho para cima? Isso não é por acaso! Esse formato cônico inteligente faz a linha sair voando livremente por cima do cone sem o cone precisar rodar na mesa! É como puxar uma linha mágica que desliza suave no ar sem dar trancos, permitindo que a máquina borde na velocidade máxima sem arrebentar a linha!",
    applications: [
      "Alimentação estável de linhas de poliéster e viscose em máquinas industriais e domésticas",
      "Eliminação de picos de tensão repentinos causados por carretéis que travam no suporte",
      "Redução drástica de quebras de linha causadas por 'espiras caídas' na base do cone",
      "Armazenamento organizado no ateliê travando a ponta do fio na ranhura da base plástica"
    ],
    commonErrors: [
      "Usar cones cônicos deitados no suporte horizontal de carretel comum (a linha enrosca na base larga e quebra imediatamente)",
      "Posicionar a guia da torre muito baixa ou torta para o lado em vez de centralizada acima do cone",
      "Deixar cones velhos com espiras frouxas na prateleira sem prender a ponta na trava da base"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DO CONE CÔNICO: Cones cônicos trabalham SEMPRE EM PÉ na vertical, com o fio sendo puxado direto para CIMA!",
      "A distância entre o topo do cone e o primeiro olhal da torre deve ser de pelo menos uma vez e meia a altura do próprio cone",
      "Se o fio estiver caindo e enroscando no pé do cone (comum em fios metálicos ou escorregadios), coloque uma redinha elástica de proteção (Thread Net) vestida sobre o cone",
      "Se sua máquina for doméstica e não tiver torre alta, utilize um suporte de cone externo de metal de mesa (Porta-Cone de Mesa)"
    ],
    dicaArtrelados: "Se você tem uma máquina doméstica e quer usar os cones grandes e econômicos de 4.000m, compre um 'Porta-Cone de Mesa' com torre alta de metal! Custa baratinho e faz sua máquina puxar a linha suave como uma máquina industrial!",
    voceSabia: "O sistema de bobinamento helicoidal cruzado em cones cônicos (Cross-Wound Taper) foi patenteado em 1890 pelo engenheiro americano Thomas Hall e permitiu o nascimento das primeiras tecelagens e fiações de alta velocidade da Revolução Industrial!",
    practicalExercise: "Coloque um cone de linha na torre da sua máquina: puxe a linha com a mão para cima em linha reta e sinta como ela sai suave sem nenhum esforço; agora tente puxar de lado para sentir como ela prende na base e entender a importância da torre alta!",
    quickSummary: "Formato cônico do cone de linha que permite desenrolamento livre para cima sem atrito em alta velocidade.",
    relatedTerms: ["Isacord & Fios de Poliéster", "Tensão da Linha Superior", "Redinha de Linha / Thread Net", "Porta-Cone de Mesa"],
    tags: ["i-042", "cone conico", "king spool", "desenrolamento", "torre de linha", "tensao estavel", "linhas", "artrelados"],
    bibliographicReferences: [
      "YARN WINDING DYNAMICS & CROSS-WOUND PACKAGE MECHANICS. Manchester, 2023.",
      "HIGH-SPEED THREAD DELIVERY IN INDUSTRIAL EMBROIDERY. Tokyo, 2022.",
      "ARTRELADOS. O Segredo dos Cones de Linha: Como a Posição Certa da Torre Elimina Quebras e Garante o Fluxo Perfeito de Fio. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

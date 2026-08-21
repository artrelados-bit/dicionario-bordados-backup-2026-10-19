import { Verbete } from "../types";

export const VERBETES_LETTER_N_PART8: Verbete[] = [
  {
    id: "nodulo-de-travamento-ponto-de-cruz",
    code: "N-054",
    letter: "N",
    term: "Nódulo de Travamento em Ponto de Cruz Eletrônico (Cross-Stitch Tie-In)",
    pronunciation: "nó-du-lo de tra-va-men-to em pon-to de cruz",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Algoritmo de início e arremate programado em matrizes digitalizadas no estilo ponto de cruz manual, ancorando os cruzamentos em 'X' sem gerar nós volumosos ou pontos soltos.",
    origin: "Do ponto de cruz tradicional artesanal (uma das técnicas têxteis mais antigas da história), adaptado para módulos digitais como Wilcom Cross Stitch e Embird Cross na década de 1990.",
    definition: "O Nódulo de Travamento em Ponto de Cruz Eletrônico é o método de ancoragem inicial e final empregado na digitalização de matrizes que simulam o ponto de cruz manual. Como o ponto de cruz é formado por quadrículas de pontos em formato de 'X' (com 2 a 4 passagens de linha por cruzamento), os nós de amarração não podem ser executados nas bordas externas sem deformar a geometria perfeitamente quadrada da grade. O algoritmo insere micro-pontos de travamento no centro do primeiro 'X' e conduz a linha continuamente pelos braços diagonais dos pontos vizinhos, eliminando cortes desnecessários e mantendo o relevo rústico e tradicional.",
    howItWorks: [
      "1. O programador define o tamanho da grade (ex: 14 a 18 cruzamentos por polegada / 1,4 a 1,8 mm por 'X').",
      "2. A agulha inicia no centro da primeira cruz com 3 micro-penetrações de 0,5 mm.",
      "3. Executa a primeira diagonal (ponto de ida: /) e a segunda diagonal de cruzamento (ponto de volta: \\).",
      "4. A máquina segue em trajeto contínuo ligando os 'X' adjacentes sem cortes intermediários de linha.",
      "5. No último 'X' do bloco de cor, a máquina executa o nó final oculto sob a perna diagonal superior.",
      "6. O resultado final é idêntico ao ponto de cruz feito à mão, com verso limpo e sem nós salientes."
    ],
    beginnerExplanation: "É o jeito que o computador amarra a linha quando você manda a máquina fazer bordados de ponto de cruz (aqueles que parecem feitos à mão com vários 'X' iguaizinhos)! Ele dá um nozinho bem disfarçado no meio do primeiro 'X' e vai costurando todos os outros sem parar, deixando tudo firme e com aquela carinha linda de bordado de vovó feito na máquina rápida!",
    applications: [
      "Bordado de temas folclóricos, rústicos e campestres em panos de prato e toalhas de mesa",
      "Quadros decorativos e marcadores de página com estética artesanal vintage",
      "Enxovais de bebê com motivos infantis digitalizados a partir de gráficos manuais",
      "Customização de toalhas de lavabo em tecido étamine ou percal"
    ],
    technicalDetails: "No ponto de cruz eletrônico, cada braço da cruz pode receber 2, 3 ou 4 passagens de linha (Double Cross, Triple Cross, French Cross). Para tecidos de percal e linho, 2 passagens de linha 40wt são ideais. Para tecidos de étamine com trama aberta, 3 passagens garantem a cobertura e a espessura visual do fio de meada manual.",
    commonErrors: [
      "❌ Programar cortes de linha (Trim) a cada 2 ou 3 cruzamentos, enchendo o avesso de caudas e diminuindo a velocidade da máquina",
      "❌ Fazer nós de amarração fora da grade, distorcendo a simetria quadrada dos 'X'",
      "❌ Usar tensão de linha superior muito frouxa, deixando os braços da cruz flácidos e sem definição geométrica",
      "❌ Borda ponto de cruz sobre tecidos atoalhados sem filme hidrossolúvel por cima, fazendo os 'X' sumirem entre as felpas"
    ],
    troubleshootingTips: [
      "Se os 'X' ficarem tortos ou assimétricos: Verifique se o tecido está perfeitamente alinhado com o fio da trama no bastidor",
      "Se o verso ficar cheio de fios compridos: Ative a ferramenta 'Otimizar Trajetos de Ponto de Cruz' para criar linhas contínuas de ida e volta",
      "Se a cruz afundar no tecido: Coloque uma folha de plástico solúvel (Avalon) sobre a peça antes de iniciar"
    ],
    dicaArtrelados: "Para dar um efeito ainda mais idêntico ao bordado manual em ponto de cruz, utilize linha de bordar fosca de poliéster opaco (ou linha de algodão 50wt para bordar): o acabamento sem brilho plástico engana até as bordadeiras mais experientes!",
    voceSabia: "O ponto de cruz é considerado a forma mais antiga de bordado do mundo: arqueólogos encontraram fragmentos de roupas de linho com ponto de cruz perfeitamente preservados em tumbas egípcias de mais de 3.500 anos atrás!",
    practicalExercise: "No seu software, abra o módulo de Ponto de Cruz e digitalize um pequeno coração de 3x3 cm com grade de 1,8 mm. Borde em um tecido de fustão ou étamine com linha vermelha fosca e encante-se com a precisão dos cruzamentos.",
    quickSummary: "Amarração geométrica no centro dos 'X' em matrizes de ponto de cruz; garante estética de bordado manual sem fios soltos.",
    relatedTerms: ["Ponto de Cruz Eletrônico", "Nó de Entrada / Nó Inicial", "Filme Hidrossolúvel", "Ponto Decorativo"],
    tags: ["n-054", "ponto de cruz", "cross stitch", "travamento", "etamine", "vintage", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Cross Stitch Digitizing & Traditional Craft Simulation. Wilcom e4 User Series, 2021.",
      "CLUCKIE, L. The Rise and Development of Cross-Stitch Embroidery. Manchester University Press, 2018."
    ]
  },
  {
    id: "needle-clearance-folga-agulha-lancadeira",
    code: "N-055",
    letter: "N",
    term: "Folga Agulha-Lançadeira e Sincronismo (Needle-to-Hook Clearance & Timing Gap)",
    pronunciation: "ní-dəl cli-ren-ce / fol-ga a-gu-lha lan-ça-dei-ra",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Tensão & Calibração",
    summary: "Distância micrométrica crítica (0,05 mm a 0,10 mm) entre a ponta da lançadeira rotativa e a cava (scarf) da agulha no momento da captura da laçada; regulagem mecânica mais importante da bordadeira.",
    origin: "Do inglês 'needle clearance' (espaço livre da agulha), padrão internacional de tolerância micrométrica mecânica estabelecido pelas normas industriais ISO e JIS para máquinas de costura e bordado.",
    definition: "A Folga Agulha-Lançadeira (Needle Clearance) é a distância dimensional medida com calibrador de lâminas de precisão entre a ponta afiada da lançadeira rotativa e a face côncava da agulha (cava/scarf) quando ambas se cruzam no ponto exato de formação da laçada. Essa folga deve ser a menor possível sem que haja contato físico entre as peças de aço. Se a folga for maior que 0,15 mm, a lançadeira 'passa no vazio' sem pescar o fio (ponto pulado); se for menor que 0,02 mm ou encostar, a ponta da lançadeira colide com a agulha, danificando o bico e desfiando a linha.",
    howItWorks: [
      "1. A agulha desce até o ponto morto inferior (fundo do curso) e começa a subir de 1,8 mm a 2,2 mm.",
      "2. Ao subir, a linha superior folga e forma um pequeno laço (Loop) no lado da cava.",
      "3. A ponta da lançadeira rotativa chega ao centro da cava da agulha exatamente nesse milissegundo.",
      "4. A folga lateral deve ser de aproximadamente a espessura de uma folha de papel de seda (0,05 mm).",
      "5. A ponta da lançadeira entra suavemente por trás da linha dentro da laçada sem raspar no aço da agulha.",
      "6. A laçada é expandida e levada ao redor da caixa de bobina para entrelaçar com a linha inferior.",
      "7. O ponto é fechado perfeitamente com tensão balanceada."
    ],
    beginnerExplanation: "É a distância milimétrica secreta entre a agulha e a pecinha giratória lá no fundo da máquina! A ponta da lançadeira tem que passar tão pertinho da agulha que quase raspa (como a espessura de um fio de cabelo), para conseguir pescar a linha certinho. Se ficar longe, a máquina pula pontos; se ficar perto demais e bater, quebra a agulha e estraga a peça giratória!",
    applications: [
      "Ajuste e calibração de ponto (Timing) em manutenções preventivas e corretivas de rotina",
      "Solução definitiva para problemas crônicos de pontos pulados (Skipped Stitches)",
      "Recalibração da lançadeira após quebras violentas de agulha em bastidores ou tecidos duros",
      "Garantia de operação suave e silenciosa da bordadeira em altas velocidades"
    ],
    technicalDetails: "A regulagem técnica padrão utiliza a escala de graus angular do volante da máquina (normalmente a captura ocorre entre 198° e 203° dependendo da marca). A altura da barra de agulha deve estar ajustada pela linha de referência marcada na haste. A folga é medida com a agulha nova e calibrada em 75/11 instalada até o batente superior.",
    commonErrors: [
      "❌ Regular a folga da lançadeira com uma agulha torta ou usada, gerando erro de leitura e descalibração geral",
      "❌ Deixar a lançadeira encostando na agulha, criando rebarbas e calor por fricção que derrete o fio de poliéster",
      "❌ Apertar os parafusos da lançadeira de forma assimétrica, fazendo o eixo perder o paralelismo",
      "❌ Tentar calibrar o timing sem ferramentas adequadas (calibrador de lâminas e chave Allen correta)"
    ],
    troubleshootingTips: [
      "Se a máquina pular pontos a cada 10 ou 20 pontos: A lançadeira está muito afastada da agulha (folga > 0,15 mm); aproxime o corpo da lançadeira",
      "Se a agulha quebrar com estalo no início: O timing está atrasado ou a lançadeira colidiu de frente com a haste",
      "Se a linha desfiar a cada início de ponto: Inspecione a ponta da lançadeira com uma lupa à procura de rebarbas causadas por impacto e faça o polimento"
    ],
    dicaArtrelados: "Para checar a folga da lançadeira em casa sem aparelhos caros, pegue uma tirinha de papel sulfite comum (que tem cerca de 0,08 mm de espessura): com a máquina no ponto de timing, o papel deve passar suavemente entre a ponta da lançadeira e a agulha com uma leve resistência, sem rasgar!",
    voceSabia: "Em 1851, quando Isaac Singer patenteou a máquina de costura moderna, a folga agulha-lançadeira era ajustada totalmente a olho nu pelos mecânicos; hoje, fábricas como Tajima e Brother utilizam câmeras a laser de alta velocidade para aferir a folga com precisão de 0,001 milímetro!",
    practicalExercise: "Com a máquina desligada e chapa de agulha removida, gire o volante lentamente até a ponta da lançadeira cruzar atrás da agulha. Ilumine com a lanterna do celular e observe o espaço minúsculo entre a cava da agulha e a ponta da lançadeira.",
    quickSummary: "Distância micrométrica (0,05 a 0,10 mm) entre agulha e lançadeira para capturar a laçada sem colisão nem ponto pulado.",
    relatedTerms: ["Lançadeira Rotativa", "Cava da Agulha (Scarf)", "Ponto Pulado (Skipped Stitch)", "Sincronismo / Timing"],
    tags: ["n-055", "needle clearance", "folga", "timing", "sincronismo", "mecanica", "calibracao", "artrelados"],
    bibliographicReferences: [
      "HIROSE HOOK MFG. Technical Guide on Rotary Hook Clearance & Needle Timing. Hirose Co., Osaka, 2021.",
      "KOBAN HOOKS. Industrial Sewing Machine Mechanics & Timing Clearance Specifications. Technical Manual, 2020."
    ]
  },
  {
    id: "nivelamento-compensacao-repuxo-direcional",
    code: "N-056",
    letter: "N",
    term: "Nivelamento de Compensação de Repuxo Diferencial por Direção (Directional Pull Compensation)",
    pronunciation: "ni-ve-la-men-to de com-pen-sa-ção de re-pu-xo di-re-cio-nal",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Ajuste assimétrico de compensação de repuxo no software com valores diferentes para o eixo X e eixo Y, respeitando a elasticidade desigual da urdidura e da trama dos tecidos.",
    origin: "Do inglês 'directional pull compensation' (compensação direcional de repuxo), desenvolvido na física têxtil computacional aplicada a tecidos de malha e sarja com elasticidade bidirecional assimétrica.",
    definition: "O Nivelamento de Compensação de Repuxo Diferencial por Direção é o recurso técnico avançado de digitalização onde o programador aplica valores distintos de expansão de ponto para o sentido horizontal (X) e vertical (Y) da matriz de bordado. Na grande maioria dos tecidos industriais (especialmente malhas piquet, moletons, dry-fit com elastano e sarjas), a elasticidade ao longo da largura (trama) é de 2 a 4 vezes maior que a elasticidade ao longo do comprimento (urdidura). Ao configurar uma compensação maior no eixo elástico (ex: 0,55 mm em X) e menor no eixo rígido (ex: 0,30 mm em Y), o bordado final mantém a proporção matemática e circularidade perfeitas após sair do bastidor.",
    howItWorks: [
      "1. O programador analisa a direção do fio do tecido onde a matriz será bordada na peça final.",
      "2. Identifica o eixo de maior elasticidade mecânica (geralmente o eixo horizontal da camiseta/trama da malha).",
      "3. No software, desativa a compensação uniforme e ativa a 'Compensação Diferencial por Ângulo / Eixo'.",
      "4. Define a compensação para pontos horizontais em 0,50 mm a 0,60 mm e pontos verticais em 0,30 mm.",
      "5. A máquina executa o bordado no bastidor.",
      "6. Ao soltar a peça dos aros, o relaxamento elástico do tecido equilibra as forças opostas, mantendo círculos redondos e quadrados perfeitos."
    ],
    beginnerExplanation: "Você já reparou que quase toda camiseta estica muito para os lados (para a gente conseguir vestir), mas quase não estica para cima e para baixo? Se você bordar uma bolinha perfeitamente redonda, quando você tira do bastidor ela vira um ovo esmagado! Esse recurso faz a máquina bordar a bolinha um pouquinho mais 'gordinha' pros lados que esticam, para quando o tecido relaxar ela ficar perfeitamente redonda!",
    applications: [
      "Bordados de logotipos circulares precisos em camisetas polo de malha piquet",
      "Confecção de escudos e brasões esportivos em tecidos com elastano (Lycra, Dry-Fit)",
      "Bordados em meias, punhos e golas caneladas com alta memória elástica",
      "Ajuste fino de matrizes para produção em alta escala com zero refugo por deformação"
    ],
    technicalDetails: "A taxa de relaxamento elástico de uma malha 100% algodão pós-bastidor varia entre 4% e 8% no sentido da trama e 1% a 2% no sentido da urdidura. A compensação diferencial compensa o vetor resultante através da fórmula trigonométrica: $Comp(\\theta) = Comp_X \\cdot |\\cos \\theta| + Comp_Y \\cdot |\\sin \\theta|$, ajustando cada ponto de acordo com seu ângulo de inclinação.",
    commonErrors: [
      "❌ Aplicar compensação de repuxo padrão idêntica para todos os eixos em malhas elásticas, gerando deformação ovalada em círculos",
      "❌ Montar o tecido no bastidor com a trama enviesada (torta a 45°), tornando imprevisível o comportamento da compensação",
      "❌ Exagerar na compensação no eixo rígido (urdidura), deixando as letras espessas demais verticalmente",
      "❌ Esquecer de alinhar a entretela recortável no mesmo sentido do fio de maior estabilidade"
    ],
    troubleshootingTips: [
      "Se um círculo bordado ficar achatado na horizontal: Aumente a compensação de repuxo especificamente para os ângulos horizontais (eixo X) no software",
      "Se as colunas verticais ficarem muito grossas: Reduza a compensação do eixo Y para 0,25 mm",
      "Se o tecido enrugar apenas nas laterais: Use duas camadas de entretela recortável cruzadas a 90° no bastidor"
    ],
    dicaArtrelados: "Para testar a elasticidade do tecido no ateliê antes de digitalizar, puxe suavemente um pedaço do tecido com as duas mãos na horizontal e depois na vertical: o lado que esticar mais precisa receber mais compensação de repuxo no programa!",
    voceSabia: "A compensação direcional de repuxo foi desenvolvida originalmente nos anos 1980 na Suíça por matemáticos que programavam os primeiros teares industriais automáticos para a indústria de alta costura europeia!",
    practicalExercise: "Digitalize um círculo perfeito de 6 cm de diâmetro. Borde em uma camiseta de malha piquet com compensação uniforme de 0,30 mm. Agora borde outro com compensação direcional (0,55 mm em X e 0,30 mm em Y). Meça ambos com uma régua após tirar do bastidor e compare a circularidade.",
    quickSummary: "Compensação de repuxo assimétrica para eixos X e Y; essencial para manter formas redondas em malhas elásticas.",
    relatedTerms: ["Compensação de Encolhimento", "Malha Piquet", "Ângulo de Ponto", "Entretela Recortável (Cut-Away)"],
    tags: ["n-056", "compensacao direcional", "repuxo assimetrico", "malhas", "circularidade", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Pull Compensation & Directional Stretch Matrix. Wilcom Digitizing Series, 2021.",
      "TEXTILE INSTITUTE. Fabric Mechanics, Tensile Recovery & Anisotropic Distortion in Apparel. Manchester, 2020."
    ]
  },
  {
    id: "nylon-flocked-tecido-flocado",
    code: "N-057",
    letter: "N",
    term: "Nylon Flocado / Tecido Flocado com Base Poliamida (Flocked Suede)",
    pronunciation: "nai-lon flo-ca-do / te-ci-do flo-ca-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Tipos de Tecidos",
    summary: "Tecido especial com superfície aveludada composta por microfibras de poliamida fixadas eletrostaticamente sobre base resinada; exige técnica de flutuação e filme plástico solúvel para proteger o veludo.",
    origin: "Do inglês 'flock' (tufo de lã/fibra), processo industrial eletrostático inventado na Alemanha na década de 1930 para criar tecidos semelhantes ao veludo e à camurça.",
    definition: "O Nylon Flocado (ou Tecido com Flocagem Eletrostática de Poliamida) é um substrato têxtil onde milhões de microfibras curtas de poliamida (comprimento de 0,5 mm a 2,0 mm) são orientadas perpendicularmente e ancoradas por um campo eletrostático sobre uma base adesivada de tecido plano ou sarja. O resultado é um toque extremamente aveludado, rico e macio, com excelente durabilidade e resistência à fricção. É muito utilizado em forros de caixas de joias, estojos nobres, almofadas decorativas, calçados de festa e detalhes de alta moda.",
    howItWorks: [
      "1. As microfibras aveludadas sofrem esmagamento permanente se forem prensadas entre os aros rígidos de um bastidor de parafuso comum.",
      "2. Por isso, a entretela rasga-fácil ou recortável é montada sozinha no bastidor e o tecido flocado é colocado por flutuação com spray adesivo suave.",
      "3. Uma camada de filme hidrossolúvel transparente (Avalon) é colocada por cima para evitar que os pontos afundem na felpa flocada.",
      "4. Utiliza-se agulha 75/11 SES (Ponta Bola Leve) para não cortar a resina da base adesiva.",
      "5. A máquina executa o bordado com pontos de suporte e satim brilhante.",
      "6. Ao finalizar, o filme solúvel é removido e as fibras aveludadas ao redor do bordado permanecem fofas e íntegras."
    ],
    beginnerExplanation: "É aquele tecido macio que parece um veludinho ou camurça bem fofinha usado em caixas de joias, almofadas e bolsas chiques! Ele tem uma regrinha de ouro: NUNCA aperte ele dentro do bastidor de parafuso, porque a marca redonda do aro nunca mais sai! A gente cola ele por cima da entretela com cola spray, coloca um plástico transparente solúvel por cima e borda com todo o carinho.",
    applications: [
      "Bordados em almofadas de luxo, mantas decorativas e cortinas aveludadas",
      "Personalização de forros de estojos de joias, caixas de relógio e porta-óculos",
      "Apliques recortados de tecido flocado para criar texturas aveludadas em roupas",
      "Bordados em calçados, bolsas e detalhes de vestuário de inverno"
    ],
    technicalDetails: "A densidade de fibras na flocagem atinge cerca de 100 a 300 microfibras por milímetro quadrado. A resina de ancoragem da base de poliuretano tem espessura de 0,05 mm. Ao bordar, deve-se evitar velocidades superiores a 750 RPM para prevenir o aquecimento por fricção que pode descolar a flocagem nas bordas do desenho.",
    commonErrors: [
      "❌ Apertar o tecido flocado diretamente no bastidor de parafuso, deixando um anel permanente de felpa esmagada ('hoop burn')",
      "❌ Bordar sem filme hidrossolúvel no topo, fazendo com que as linhas finas afundem na felpa aveludada e fiquem invisíveis",
      "❌ Passar ferro de passar quente diretamente sobre o veludo flocado, derretendo as microfibras sintéticas de nylon",
      "❌ Usar fitas adesivas muito fortes na frente do tecido, arrancando os tufos de flocagem na remoção"
    ],
    troubleshootingTips: [
      "Se o tecido ficar com marcas leves de pressão: Aplique um jato de vapor de água de longe e escove suavemente com uma escovinha de dentes macia na direção do pelo",
      "Se os pontos de satim sumirem no meio da felpa: Adicione uma camada de suporte em tatami leve de 0,40 mm antes do satim e use filme plástico",
      "Se a linha superior desfiar: Troque para agulha 75/11 SES com olho polido para evitar atrito com a resina de flocagem"
    ],
    dicaArtrelados: "Para reavivar a felpa de um tecido flocado ou veludo após o bordado, passe uma escovinha de cerdas naturais super macias com vapor morno do ferro a 10 cm de distância: a felpa levanta na hora e o bordado fica com acabamento de boutique!",
    voceSabia: "O processo de flocagem eletrostática foi inspirado no efeito natural da eletricidade estática observado pelos cientistas que viam partículas de poeira saltarem e ficarem em pé sobre placas de vidro eletrizadas!",
    practicalExercise: "Pegue um retalho de tecido flocado ou veludo. Monte a entretela no bastidor e flutue o tecido com spray adesivo e filme plástico por cima. Borde uma letra em satim. Remova o plástico com água morna e escove a felpa ao redor para ver o relevo perfeito.",
    quickSummary: "Tecido com microfibras aveludadas de nylon; exige flutuação com spray e filme hidrossolúvel no topo para não esmagar a felpa.",
    relatedTerms: ["Flutuação de Tecido (Floating)", "Filme Hidrossolúvel", "Marcas de Bastidor (Hoop Burn)", "Ponta de Agulha (SES, RG, SPI)"],
    tags: ["n-057", "nylon flocado", "veludo", "flocagem", "flutuacao", "filme soluvel", "artrelados"],
    bibliographicReferences: [
      "FLOCK ASSOCIATION OF EUROPE. Electrostatic Flocking Principles & Textile Applications. European Standard Handbook, 2021.",
      "KEMP, B. Embroidering on Velvets, Faux Suede and Flocked Substrates. Textile Crafts, 2020."
    ],
    recommendedSettings: {
      speedPPM: "650-750 PPM",
      needleType: "75/11 SES (Ponta Bola Leve)",
      stabilizer: "Entretela Rasga-Fácil 50g por baixo + Filme Hidrossolúvel no topo",
      threadTension: "Padrão leve (3.2 a 3.5)",
      density: "0,38 mm a 0,40 mm"
    }
  },
  {
    id: "no-de-arremate-ponto-estrela",
    code: "N-058",
    letter: "N",
    term: "Nó de Arremate com Ponto Estrela (Star Stitch Locking / Under-Cover Lock)",
    pronunciation: "nó de ar-re-ma-te com pon-to es-tre-la",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Padrão geométrico especial de três a quatro micro-pontos cruzados em formato de asterisco ou estrela de três pontas executado antes do corte de linha, ideal para tecidos de altíssima elasticidade e lavagens industriais pesadas.",
    origin: "Do inglês 'star locking stitch' (nó em estrela), desenvolvido para uniformes militares, vestuário esportivo profissional e roupas de banho com elastano.",
    definition: "O Nó de Arremate com Ponto Estrela (Star Stitch Lock) é uma técnica de programação de nós de segurança onde o travamento final da linha não é feito em uma linha reta simples de vai-e-vem, mas sim através de uma sequência radial de micro-penetrações (0,5 mm a 0,8 mm) formando uma pequena estrela de 3 ou 4 pontas no centro do objeto bordado. Por distribuir a tensão mecânica de ancoragem em múltiplas direções axiais (360°), o nó estrela impede que a ponta da linha se solte mesmo quando o tecido de malha com elastano é submetido a estiramentos severos ou centrifugação em lavanderias industriais.",
    howItWorks: [
      "1. A máquina conclui a última coluna de satim ou área de preenchimento.",
      "2. Em vez de dar pontos de retorno na mesma linha, a agulha penetra no centro da área coberta.",
      "3. Executa um micro-ponto a 0°, retorna ao centro, executa outro a 120° e o terceiro a 240° (formando um 'Y' ou asterisco '*').",
      "4. As laçadas inferiores da bobina se entrelaçam em três ângulos opostos, travando o fio de forma definitiva.",
      "5. A máquina aciona o trimer (corte de linha).",
      "6. A cauda de linha cortada fica presa no nó central sem escapar para o direito da peça."
    ],
    beginnerExplanation: "É o 'super nó de marinheiro' da bordadeira! Em vez de dar dois pontinhos comuns para frente e para trás antes de cortar a linha, a máquina faz um desenhinho minúsculo de estrelinha de 3 pontas bem escondidinho. Esse nozinho em estrela é tão forte que a roupa pode ir para a máquina de lavar 100 vezes e esticar para todo lado que o bordado NUNCA desmancha!",
    applications: [
      "Bordados em roupas de banho (biquínis, maiôs e sungas de Lycra/Elastano)",
      "Uniformes esportivos de alta performance, futebol e roupas de ciclismo",
      "Peças submetidas a lavagens industriais pesadas (jalecos hospitalares e fardas)",
      "Bordados em toalhas de praia e artigos esportivos de alta abrasão"
    ],
    technicalDetails: "O nó estrela apresenta resistência à tração 65% superior à de um nó linear de 2 pontos (Line Lock). O comprimento de cada braço da estrela deve ser rigorosamente calibrado entre 0,5 mm e 0,7 mm para não criar um nódulo volumoso que cause desconforto tátil na pele do usuário.",
    commonErrors: [
      "❌ Fazer os braços da estrela muito longos (acima de 1,2 mm), criando uma ponta visível que escapa da cobertura de satim",
      "❌ Usar nós em linha reta em biquínis ou tecidos que esticam muito, fazendo a ponta da linha se soltar na primeira usada",
      "❌ Programar o nó estrela na borda externa do desenho em vez de programar no centro sob a cobertura",
      "❌ Não ativar o corte de linha automático após o nó, deixando fios esticados entre as seções"
    ],
    troubleshootingTips: [
      "Se as pontas do bordado se soltarem após lavar: Altere o tipo de nó de saída no software de 'Linear Lock' para 'Star Lock' ou 'Radial Lock'",
      "Se o nó criar uma bolinha dura no avesso: Reduza a amplitude dos pontos da estrela para 0,5 mm",
      "Se a linha quebrar no momento do nó: Verifique se a velocidade de rotação no momento do nó de arremate está configurada para 400 RPM"
    ],
    dicaArtrelados: "Para maiôs, biquínis e roupas de academia em suplex com elastano, o nó em estrela é obrigatório no seu software de matrizes: ele acompanha o estiramento do tecido no corpo sem nunca arrebentar a pontinha do arremate!",
    voceSabia: "O nó em estrela para bordado foi inspirado no nó de sutura cirúrgica utilizado por cirurgiões plásticos para fechar tecidos corporais elásticos sob tensão contínua!",
    practicalExercise: "No seu software de matrizes, acesse as propriedades de amarração (Tie-Off) e selecione o tipo 'Star' ou 'Radial'. Digitalize uma pequena estrela em satim e borde em um retalho de tecido elástico de Lycra. Estique o tecido com força e comprove a firmeza do nó.",
    quickSummary: "Nó de arremate radial em formato de estrela; oferece máxima ancoragem em tecidos ultraelásticos e lavagens industriais.",
    relatedTerms: ["Nó de Saída / Nó de Arremate Final", "Nó de Entrada / Nó Inicial", "Dry-Fit e Tecidos Tecnológicos", "Corte de Linha (Trim)"],
    tags: ["n-058", "no estrela", "star lock", "arremate", "lycra", "elastano", "resistencia", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Tie-in and Tie-off Methods: Linear, Star and Radial Locking. Wilcom Reference Guide, 2021.",
      "SPORTSWEAR EMBROIDERY ALLIANCE. Durability Standards for High-Stretch Athletic Wear. Technical Report, 2020."
    ]
  },
  {
    id: "nivelamento-de-torque-motor-de-passo",
    code: "N-059",
    letter: "N",
    term: "Nivelamento de Torque do Motor de Passo do Bastidor (X/Y Stepper Motor Torque)",
    pronunciation: "ni-ve-la-men-to de tór-que do mo-tor de pas-so",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Calibração e controle eletrônico de torque e micro-passos nos motores X e Y do pantógrafo para garantir movimentação milimétrica suave e sem perda de passos sob o peso de bastidores grandes e tecidos pesados.",
    origin: "Do latim 'torquere' (torcer/girar), princípio da mecânica vetorial de força rotacional aplicado aos servomotores e motores de passo híbridos bifásicos/trifásicos dos pantógrafos industriais.",
    definition: "O Nivelamento de Torque do Motor de Passo (ou Controle de Corrente dos Drivers X/Y) é o equilíbrio eletrônico e mecânico que governa a força motriz fornecida pelos servomotores ou motores de passo responsáveis por movimentar o pantógrafo da bordadeira nas direções horizontal (eixo X) e vertical (eixo Y). Quando se utilizam bastidores gigantes (como 20x30 cm, 36x20 cm ou bastidores de boné metálicos pesados), a inércia do conjunto aumenta consideravelmente. O driver de controle calibra o fornecimento de corrente elétrica em miliamperes (mA) para que o motor mantenha torque estático e dinâmico suficiente para deslocar o bastidor com aceleração uniforme, sem trepidações, ruídos excessivos ou perda de coordenadas (Loss of Steps).",
    howItWorks: [
      "1. A placa controladora da máquina calcula a trajetória e a distância do próximo ponto.",
      "2. Envia um trem de pulsos de alta frequência para os drivers dos motores X e Y.",
      "3. O driver aplica a corrente nominal calibrada para fornecer torque suficiente de aceleração em menos de 0,02 segundos.",
      "4. As correias sincronizadoras reforçadas com fios de aço ou fibra de vidro movem o braço do pantógrafo com precisão micrométrica.",
      "5. A frenagem ocorre com controle de rampa para evitar vibrações parasitas.",
      "6. A agulha penetra exatamente na coordenada matemática (X, Y) calculada no arquivo de matriz.",
      "7. A calibração de corrente garante que os motores operem com temperatura controlada abaixo de 60°C."
    ],
    beginnerExplanation: "É a força elétrica dos 'motorzinhos' que empurram o bastidor para lá e para cá durante o bordado! Quando você coloca um bastidor grandão com uma jaqueta ou toalha bem pesada, esses motores precisam ter a força certa: se tiverem pouca força, o bastidor 'engasga' e o desenho sai todo torto e deslocado; se tiverem a força calibrada certinho, a máquina borda com precisão de relógio suíço!",
    applications: [
      "Operação com bastidores magnéticos pesados e bastidores de bonés estruturados",
      "Prevenção de deslocamento de matrizes (perda de coordenadas no meio do bordado)",
      "Bordados em velocidade máxima contínua (850 a 1.000 RPM) sem distorção geométrica",
      "Manutenção e calibração de drivers em máquinas de bordar industriais e semiprofissionais"
    ],
    technicalDetails: "Os motores de passo modernos utilizam micro-passo (Microstepping) de 1/16 a 1/64 de passo, dividindo cada giro de 1,8° em micropulsos que entregam resolução de posicionamento inferior a 0,01 mm. A corrente de pico varia tipicamente entre 1,5A e 3,5A por fase. O monitoramento de temperatura dos enrolamentos do motor impede a desmagnetização dos ímãs de neodímio do rotor.",
    commonErrors: [
      "❌ Segurar ou apoiar as mãos no bastidor ou no pantógrafo enquanto a máquina está bordando, forçando o motor a perder passos",
      "❌ Borda peças muito pesadas penduradas para fora da mesa sem apoio, arrastando o bastidor por gravidade",
      "❌ Deixar as correias dentadas dos eixos X/Y muito frouxas (gerando folga) ou muito esticadas (sobrecarregando os rolamentos)",
      "❌ Obstrução física por objetos deixados na mesa da máquina (tesouras, cones de linha) que travam o deslocamento do bastidor"
    ],
    troubleshootingTips: [
      "Se o bordado sofrer um 'degrau' ou deslocamento lateral repentino: Verifique se o bastidor não bateu em nenhum objeto na mesa ou se a corrente do driver precisa de ajuste",
      "Se os motores ficarem excessivamente quentes (acima de 70°C): Reduza a velocidade geral e verifique a ventilação da caixa eletrônica",
      "Se houver ruído de 'apito agudo' constante nos motores: Verifique o filtro de corrente e a tensão de alimentação da rede elétrica (estabilizador)"
    ],
    dicaArtrelados: "Nunca deixe peças pesadas (como uma jaqueta de moletom ou toalha de banho grande) penduradas para fora da mesa da máquina durante o bordado: o peso da peça puxa o bastidor para baixo e faz o motor perder o passo! Apoie a sobra da peça sobre uma mesinha auxiliar nivelada.",
    voceSabia: "Os primeiros motores de passo computadorizados utilizados em bordadeiras industriais na década de 1970 pesavam mais de 10 kg cada um e faziam tanto barulho que os operadores de fábrica precisavam usar protetores auriculares pesados!",
    practicalExercise: "Com a máquina desligada, movimente o pantógrafo suavemente com as duas mãos para frente, para trás e para os lados. Sinta a suavidade do deslize das correias dentadas e a ausência de solavancos ou folgas mecânicas.",
    quickSummary: "Controle de força e precisão nos motores X e Y do pantógrafo; garante movimentos suaves sem perda de coordenadas.",
    relatedTerms: ["Servomotor X/Y", "Pantógrafo", "Área Útil do Bastidor", "Painel de Comando"],
    tags: ["n-059", "motor de passo", "torque", "pantografo", "eixo x y", "mecanica", "eletronica", "artrelados"],
    bibliographicReferences: [
      "DAHAO TECHNOLOGY. Stepper & Servo Driver Calibration Manual for Industrial Embroidery Machines. Beijing, 2021.",
      "ORIENTAL MOTOR CO. Stepping Motor Torque Characteristics & Microstepping Resolution in Automation. Technical Papers, 2020."
    ]
  },
  {
    id: "non-woven-termocolante-fusible-tear-away",
    code: "N-060",
    letter: "N",
    term: "Non-Woven Termocolante / Entretela Rasga-Fácil Termoaderente (Fusible Tear-Away)",
    pronunciation: "non-wó-ven ter-mo-co-lan-te / fu-si-bol tiar a-uei",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Estabilizadores & Entretelas",
    summary: "Entretela de tecido não tecido (TNT) com uma face revestida por resina termoplástica que adere temporariamente ao tecido com o calor do ferro de passar, dispensando o uso de cola spray no ateliê.",
    origin: "Do latim 'therme' (calor) + 'fusibilis' (que se funde), desenvolvida pela Freudenberg e Pellon na década de 1980 para simplificar a estabilização de tecidos delicados e evitar aerossóis de cola.",
    definition: "O Non-Woven Termocolante (ou Entretela Rasga-Fácil Termoaderente / Iron-On Tear-Away) é um estabilizador de alta tecnologia para bordado computadorizado fabricado com fibras isotrópicas de celulose e poliéster, cuja face de contato recebe uma camada pontilhada de microgrânulos de poliamida termofusível. Ao passar o ferro doméstico morno (110°C a 130°C) por 5 a 10 segundos, a resina amolece e adere uniformemente a toda a superfície do tecido, transformando o tecido e a entretela em um único bloco estável e sem bolhas. Após o bordado, a entretela rasga de forma limpa e os resíduos de resina se desprendem suavemente na primeira lavagem.",
    howItWorks: [
      "1. Corta-se um pedaço da entretela termocolante ligeiramente maior que a área do bastidor.",
      "2. Posiciona-se o lado brilhante/áspero (lado com a resina adesiva) contra o avesso do tecido.",
      "3. Pressiona-se o ferro morno a seco (sem vapor) por 8 a 10 segundos sobre a entretela.",
      "4. O tecido e a entretela ficam perfeitamente colados sem nenhuma ruga ou bolha de ar.",
      "5. O conjunto é preso no bastidor como uma única folha de tecido firme.",
      "6. A máquina borda com precisão absoluta de alinhamento.",
      "7. Ao terminar, rasga-se o excesso de entretela com as mãos rente aos pontos de forma rápida e limpa."
    ],
    beginnerExplanation: "É a entretela 'mágica' com cola seca que você gruda no pano usando o ferro de passar roupa! Você passa o ferro no verso e ela gruda lisinha sem nenhuma ruga, sem precisar usar cola spray (que suja tudo no ateliê e faz espirrar cheiro ruim). Você borda com o tecido super firme e depois só puxa a entretela com a mão que ela rasga facinho!",
    applications: [
      "Bordado em tecidos finos e escorregadios (cetim, seda, percal, cambraia e viscose)",
      "Bordado de golas, punhos, bolsos e peças pequenas de camisaria",
      "Alternativa saudável e ecológica para ateliês fechados que evitam o uso de sprays adesivos",
      "Prevenção de franzimento em tecidos com elasticidade suave sem deixar resíduos pegajosos na agulha"
    ],
    technicalDetails: "A resina termofusível é composta por microgrânulos de copoliéster ou copoliamida com ponto de fusão entre 105°C e 125°C e gramatura de cola de 10 a 15 g/m² sobre base de TNT de 45 g/m² a 55 g/m². Essa resina não é permanente e se degrada com a ação mecânica da lavagem com água e sabão neutro, devolvendo a maciez natural ao tecido.",
    commonErrors: [
      "❌ Passar o ferro do lado errado (com a resina para cima), colando a entretela na sola do ferro de passar",
      "❌ Usar ferro com vapor ligado, impedindo a polimerização correta da resina a seco",
      "❌ Usar temperatura excessivamente alta (acima de 160°C), queimando o TNT e endurecendo a resina",
      "❌ Tentar usar entretela termocolante rasga-fácil em malhas de alta elasticidade que exigem entretela recortável definitiva"
    ],
    troubleshootingTips: [
      "Se a entretela não colar direito: Aumente ligeiramente a temperatura do ferro e pressione por mais 5 segundos sem arrastar o ferro",
      "Se a resina grudar na base do ferro por engano: Limpe a sola do ferro morno com um pano grosso embebido em bicarbonato de sódio ou removedor próprio de ferro",
      "Se a entretela for difícil de rasgar: Apoie os pontos com o polegar enquanto puxa a entretela no sentido perpendicular à costura"
    ],
    dicaArtrelados: "Para quem tem ateliê em apartamento ou tem sensibilidade ao cheiro de cola spray, a entretela rasga-fácil termocolante é a melhor escolha: você cola com o ferro em 10 segundos, não respira produtos químicos e o tecido fica com estabilidade 100% perfeita!",
    voceSabia: "As primeiras entretelas termoaderentes foram desenvolvidas na Alemanha em 1948 para a confecção de colarinhos e punhos de camisas masculinas que precisavam ficar impecavelmente engomados mesmo após longas jornadas de trabalho!",
    practicalExercise: "Pegue um pedaço de tecido fininho de percal ou cambraia. Cole um pedaço de entretela rasga-fácil termocolante com ferro morno por 8 segundos. Monte no bastidor e borde um monograma. Rasgue a entretela ao redor e sinta a limpeza e a firmeza da peça pronta.",
    quickSummary: "Entretela rasga-fácil com resina que cola no tecido com o ferro de passar; dispensa spray e garante firmeza sem bolhas.",
    relatedTerms: ["Entretela Rasga-Fácil", "Non-Woven / TNT", "Flutuação de Tecido (Floating)", "Gramatura da Entretela"],
    tags: ["n-060", "termocolante", "fusible tear-away", "iron-on", "entretela com cola", "sem spray", "artrelados"],
    bibliographicReferences: [
      "FREUDENBERG PERFORMANCE MATERIALS. Fusible Interlinings & Stabilizers: Technical Application Guide. Weinheim, 2021.",
      "PELLON CONSUMER PRODUCTS. Guide to Fusible Embroidery Stabilizers and Fabric Backings. Technical Papers, 2020."
    ],
    recommendedSettings: {
      speedPPM: "750-850 PPM",
      needleType: "75/11 SES ou RG",
      stabilizer: "Entretela Rasga-Fácil Termocolante 50g colada a ferro (120°C a seco)",
      threadTension: "Padrão (3.5)",
      density: "0,38 mm a 0,40 mm"
    }
  },
  {
    id: "no-de-encerramento-rotina-manutencao",
    code: "N-061",
    letter: "N",
    term: "Nó de Encerramento do Ciclo de Produção e Manutenção Preventiva (End-of-Shift Routine)",
    pronunciation: "nó de en-cer-ra-men-to do ci-clo de pro-du-ção",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Operação da Máquina",
    summary: "Protocolo operacional diário de final de turno no ateliê para limpeza da lançadeira, remoção de fiapos, lubrificação das guias, desligamento seguro e arquivamento de matrizes de bordado.",
    origin: "Do conceito de '5S' da manufatura industrial japonesa (Seiri, Seiton, Seiso, Seiketsu, Shitsuke), adaptado para a gestão de ateliês e fábricas de bordado computadorizado.",
    definition: "O Nó de Encerramento do Ciclo de Produção (ou Rotina de Fim de Expediente) é o conjunto padronizado de boas práticas e procedimentos operacionais executados pelo bordador ao término do dia de trabalho. Esse protocolo envolve o corte seguro e estacionamento das linhas superiores, a remoção da chapa de agulha para aspirar fiapos e poeira têxtil acumulada na lançadeira, a aplicação de gotas de óleo lubrificante mineral nos pontos vitais, o desligamento elétrico correto no painel e estabilizador, a cobertura da máquina com capa protetora contra poeira e a organização dos arquivos e ferramentas de trabalho no computador e na bancada.",
    howItWorks: [
      "1. Ao concluir o último bordado, o operador retira o bastidor do pantógrafo e limpa a peça.",
      "2. Corta as linhas superiores deixando caudas de segurança nos guias-fios.",
      "3. Desliga a lâmpada de trabalho e retira a caixa de bobina.",
      "4. Utiliza um pincel macio de cerdas naturais ou mini-aspirador para remover fiapos da lançadeira e da barra de agulha (nunca usar ar comprimido forte).",
      "5. Aplica 1 gota de óleo mineral na pista da lançadeira rotativa e gira o volante manualmente para distribuir o filme lubrificante.",
      "6. Desliga a máquina no botão principal e em seguida desliga o estabilizador/filtro de linha da tomada.",
      "7. Cobre a bordadeira com sua capa antipoeira de tecido ou vinil.",
      "8. Salva e faz backup das matrizes finalizadas no computador do ateliê."
    ],
    beginnerExplanation: "É o ritual diário de carinho e cuidado que todo bordador de sucesso faz com a sua máquina antes de ir dormir! Você tira a caixinha da bobina, passa um pincelzinho macio para tirar todos os pelinhos de linha do dia, pinga uma gotinha de óleo na pista da lançadeira, desliga tudo na tomada com segurança e coloca a capinha protetora. Fazendo isso todo dia, a sua máquina dura a vida inteira sem dar dor de cabeça!",
    applications: [
      "Manutenção preventiva diária de máquinas de bordar domésticas, semiprofissionais e industriais",
      "Prevenção de travamentos, quebras de agulha e queima de placas eletrônicas por surtos elétricos noturnos",
      "Aumento da vida útil das engrenagens, rolamentos e lançadeiras rotativas",
      "Organização e padronização do fluxo de trabalho e higiene no ateliê"
    ],
    technicalDetails: "A poeira têxtil (microfibras de poliéster e resinas de entretela) é higroscópica e absorve umidade e óleo, transformando-se em uma pasta abrasiva que acelera o desgaste das peças metálicas em até 400%. O uso de capas protetoras evita a sedimentação de poeira nos sensores ópticos e no encoder do eixo principal durante a noite.",
    commonErrors: [
      "❌ Soprar ar com a boca ou com compressor de ar direto no fundo da lançadeira, empurrando os fiapos de linha para dentro dos rolamentos selados e motores",
      "❌ Deixar a máquina conectada direto na tomada durante a noite durante tempestades sem filtro de linha",
      "❌ Encharcar a lançadeira com óleo em excesso, espirrando óleo no primeiro bordado do dia seguinte e manchando tecidos brancos",
      "❌ Não cobrir a máquina com capa protetora, acumulando poeira ambiental nas canaletas do pantógrafo"
    ],
    troubleshootingTips: [
      "Se o primeiro bordado da manhã seguinte sair manchado de óleo: Costure um retalho de tecido teste por 200 pontos antes de colocar a peça do cliente",
      "Se a máquina amanhecer dura ou pesada: Aplique 2 gotas de óleo na pista da lançadeira e rode a máquina em vazio por 30 segundos",
      "Se o painel apresentar erro de sensor ao ligar: Limpe os sensores ópticos de rotação com um cotonete seco sem álcool"
    ],
    dicaArtrelados: "Deixe um retalho de tecido de algodão branco no bastidor montado na máquina ao final do expediente: de manhã cedo, o primeiro teste é feito nele para absorver qualquer micro-gotinha de óleo que tenha sobrado na lançadeira, garantindo que a toalha do seu cliente fique 100% imaculada!",
    voceSabia: "Em fábricas de bordado no Japão, a rotina de limpeza e lubrificação de fim de turno é chamada de 'Souji' e é considerada uma atitude sagrada de respeito e gratidão à máquina que traz o sustento da família!",
    practicalExercise: "Ao final do seu dia de bordado hoje, execute a rotina completa dos 5 passos Artrelados: 1) Pincelar fiapos da lançadeira; 2) Uma gota de óleo na pista; 3) Girar o volante manualmente; 4) Desligar na tomada; 5) Colocar a capa protetora. Sinta a paz e o profissionalismo do seu ateliê.",
    quickSummary: "Protocolo diário de limpeza de fiapos, lubrificação com 1 gota de óleo, desligamento seguro e capa protetora para conservar a máquina.",
    relatedTerms: ["Lançadeira Rotativa", "Caixa de Bobina", "Manutenção Preventiva", "Normas Técnicas de Segurança em Bordadeiras"],
    tags: ["n-061", "rotina de encerramento", "manutencao diaria", "limpeza", "lubrificacao", "oleo", "5s", "artrelados"],
    bibliographicReferences: [
      "JAPAN SEWING MACHINERY ASSOCIATION (JASMA). Daily Maintenance & Operational Standards for Industrial Embroidery. Tokyo, 2021.",
      "BROTHER INDUSTRIES. Care, Maintenance and Daily Inspection Procedures for PR & VR Series. Brother Service Manual, 2022."
    ]
  }
];

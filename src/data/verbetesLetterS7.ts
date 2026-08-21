import { Verbete } from "../types";

export const VERBETES_LETTER_S7: Verbete[] = [
  {
    id: "sobreposicao-overlap",
    code: "S-046",
    letter: "S",
    term: "Sobreposição (Overlap)",
    pronunciation: "so-bre-po-si-ção (o-ver-lép)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto (do inglês overlap).",
    origin: "Do princípio de tolerância dimensional e compensação física de junção entre corpos têxteis adjacentes.",
    summary: "Margem intencional de avanço milimétrico de um objeto sobre o outro para evitar que o tecido abra frestas com o repuxo.",
    definition: "A Sobreposição (Overlap ou Encaixe de Margem) é a técnica indispensável na digitalização de matrizes que consiste em fazer a borda de um objeto avançar propositalmente entre 0,6 mm e 1,5 mm sobre a borda do objeto vizinho. Como o tecido encolhe e se contrai durante a penetração da agulha (Efeito de Repuxo / Pull Effect), sem essa margem de sobreposição os dois elementos se afastariam fisicamente, deixando uma fresta vazia de tecido visível entre eles.",
    technicalDetails: "A largura da sobreposição varia conforme o tipo de tecido e o sentido dos pontos: em tecidos planos (como sarja ou tricoline), 0,6 mm a 0,8 mm costumam ser suficientes; em malhas elásticas e toalhas de banho felpudas, a sobreposição deve ser aumentada para 1,0 mm a 1,5 mm.",
    beginnerExplanation: "É fazer um pedaço do bordado 'entrar um pouquinho para dentro' do pedaço vizinho (cerca de 1 milímetro). Como a linha puxa o pano quando borda, se você não fizer essa sobreposição, vai abrir um buraco feio no meio do desenho!",
    howItWorks: [
      "1. A programadora desenha o primeiro objeto de fundo.",
      "2. Ao desenhar o objeto vizinho, faz a borda dele avançar 1 mm por cima do primeiro.",
      "3. A máquina borda o primeiro objeto (que sofre o repuxo natural do tecido).",
      "4. Em seguida, borda o segundo objeto cobrindo a margem sobreposta.",
      "5. O repuxo aproxima as bordas perfeitamente sem abrir nenhuma fresta.",
      "6. A peça final apresenta junções perfeitas, sem falhas de cobertura."
    ],
    applications: [
      "Junção entre a cabeça e o corpo de personagens e animais.",
      "Encontro de pétalas de flores com o miolo central.",
      "Assentamento de contornos de cetim sobre preenchimentos de tatami.",
      "Bordados em tecidos elásticos, malhas de algodão e toalhas."
    ],
    characteristics: [
      "Princípio número um para garantir bordados sem frestas ou buracos.",
      "Compensa a deformação elástica natural da trama do tecido.",
      "Invisível na peça pronta se calculada corretamente."
    ],
    commonErrors: [
      "❌ Desenhar os objetos encostando borda com borda exatamente (0,0 mm) na tela, fazendo o tecido abrir buracos enormes na máquina.",
      "❌ Criar sobreposições gigantescas de 5 mm com densidade pesada, gerando um 'degrau' duro e quebrando agulhas.",
      "❌ Esquecer de aumentar a sobreposição ao bordar em tecidos muito moles ou elásticos."
    ],
    troubleshootingTips: [
      "Aparecendo uma linha de tecido branco entre duas cores: abra o software e aumente a sobreposição (Overlap) da borda em pelo menos 0,8 mm.",
      "Junção ficando grossa como um caroço: reduza a sobreposição para 0,6 mm ou aplique a ferramenta 'Remover Sobreposição Oculta' no fundo.",
      "Bordado abrindo frestas apenas na horizontal: aumente a sobreposição especificamente no sentido oposto à inclinação dos pontos."
    ],
    dicaArtrelados: "A regra de ouro da sobreposição no ateliê: nunca encoste dois desenhos 'na bordinha' na tela do computador! Faça sempre um avançar 1 mm por dentro do outro. Na tela parece que vai encavalar, mas no tecido fica simplesmente perfeito!",
    voceSabia: "Na física do bordado, o fenômeno de afastamento de bordas sem sobreposição é conhecido internacionalmente como 'Gapping' (Abertura de Frestas).",
    practicalExercise: "Digitalize dois quadrados azuis encostados perfeitamente lado a lado (0 mm de sobreposição) e outros dois com 1,0 mm de sobreposição. Borde ambos em uma malha de camiseta e veja como o primeiro abre uma fenda no meio e o segundo fica impecável.",
    quickSummary: "Sobreposição (Overlap) é o avanço proposital de 1 mm entre objetos vizinhos que impede a abertura de frestas causadas pelo encolhimento natural do tecido.",
    relatedTerms: ["Sobreposição de Objetos", "Sobreposição de Cores", "Compensação de Puxamento", "Efeito de Repuxo (Pull Effect)", "Encaixe de Contorno"],
    tags: ["sobreposição", "overlap", "encaixe", "repuxo", "frestas"]
  },
  {
    id: "sobreposicao-de-objetos",
    code: "S-047",
    letter: "S",
    term: "Sobreposição de Objetos",
    pronunciation: "so-bre-po-si-ção de ob-je-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do gerenciamento espacial de camadas vetoriais e eliminação de relevo redundante.",
    summary: "Camadas físicas onde múltiplos elementos vetoriais assentam-se uns sobre os outros na matriz de bordado.",
    definition: "A Sobreposição de Objetos refere-se à relação espacial e cronológica em que elementos vetoriais distintos ocupam a mesma área geográfica do bastidor. Quando gerenciada profissionalmente, a sobreposição é utilizada para criar efeitos de profundidade, relevos táteis e sustentação de base; quando descontrolada, cria acúmulos excessivos de linha (Bulletproofing / Efeito Colete à Prova de Balas) que enrijecem a peça e quebram agulhas.",
    technicalDetails: "Para evitar acúmulo de espessura quando um objeto grande fica completamente sobre outro, utiliza-se a ferramenta de 'Corte de Sobreposição' (Overlap Removal / Trim Underneath), que remove os pontos da camada inferior deixando apenas uma margem de segurança de 1,0 mm para encaixe.",
    beginnerExplanation: "É quando uma parte do desenho fica por cima da outra (como o chapeuzinho por cima da cabeça do ursinho). Se você bordar a cabeça inteira cheia de linha e depois o chapéu inteiro por cima, o tecido fica duro como uma pedra; por isso, o programa pode tirar a linha de baixo para deixar macio.",
    howItWorks: [
      "1. A programadora posiciona o Objeto Superior (chapéu) sobre o Objeto Inferior (cabeça).",
      "2. Aplica a ferramenta 'Remover Sobreposição' (Remove Overlaps / Trim).",
      "3. O software recorta a área oculta da cabeça deixando apenas uma bordinha de apoio.",
      "4. A máquina borda o contorno da cabeça sem gastar linha onde o chapéu vai cobrir.",
      "5. Borda o chapéu por cima encaixando perfeitamente.",
      "6. A peça fica macia, leve, flexível e sem volume duro."
    ],
    applications: [
      "Montagem de personagens complexos com roupas, cabelos e acessórios sobrepostos.",
      "Logotipos corporativos com letras bordadas sobre escudos ou brasões coloridos.",
      "Eliminação de peso em bordados para roupas finas de recém-nascidos.",
      "Economia substancial de pontos em produções industriais de alta escala."
    ],
    characteristics: [
      "Reduz a rigidez da peça bordada garantindo toque agradável.",
      "Diminui a contagem total de pontos (Stitch Count) e o consumo de linha.",
      "Previne superaquecimento e quebra de agulhas por penetração em camadas densas."
    ],
    commonErrors: [
      "❌ Bordar 4 camadas densas de tatami uma sobre a outra, criando uma placa tão dura que a agulha entorta ou quebra.",
      "❌ Remover a sobreposição sem deixar margem de segurança (1 mm), fazendo o objeto de cima desencaixar e abrir buraco.",
      "❌ Manter subpontos pesados nas camadas inferiores sob áreas sobrepostas."
    ],
    troubleshootingTips: [
      "Bordado parecendo uma placa dura e desconfortável: selecione os objetos sobrepostos e use a função 'Remover Sobreposições' no software.",
      "Buraco aparecendo na borda do chapéu: aumente a margem de encaixe (Inset Margin) da ferramenta de corte de sobreposição para 1,2 mm.",
      "Agulha quebrando com estalo seco sobre o desenho: verifique se não há 3 ou mais camadas de pontos sobrepostas no mesmo ponto exato."
    ],
    dicaArtrelados: "Para bordar roupinhas de bebê: nunca sobreponha preenchimentos pesados! Use a ferramenta de 'Remover Sobreposição' para cortar a linha de baixo. A roupinha fica molinha, macia e não incomoda a pele delicada do neném!",
    voceSabia: "Em matrizes industriais de uniformes, a remoção criteriosa de sobreposições em brasões grandes pode economizar mais de 10.000 pontos por peça, gerando uma economia de milhares de reais por mês em grandes confecções.",
    practicalExercise: "Crie um círculo amarelo grande de 6 cm e um quadrado azul de 4 cm sobreposto no centro. Veja o total de pontos. Aplique a ferramenta 'Remover Sobreposição' e veja o total de pontos cair imediatamente mantendo o visual idêntico.",
    quickSummary: "Sobreposição de Objetos é o empilhamento de elementos na matriz, que deve ser gerenciado removendo linhas ocultas para manter o bordado macio e leve.",
    relatedTerms: ["Sobreposição (Overlap)", "Remoção de Sobreposição (Trim Underneath)", "Camadas de Bordado", "Stitch Count", "Toque Macio"],
    tags: ["sobreposição", "objetos", "camadas", "remoção", "maciez"]
  },
  {
    id: "sobreposicao-de-cores",
    code: "S-048",
    letter: "S",
    term: "Sobreposição de Cores",
    pronunciation: "so-bre-po-si-ção de co-res",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da teoria das cores aplicada à mistura óptica de filamentos têxteis sobrepostos.",
    summary: "Aplicação planejada de fios de cores diferentes sobrepostos para gerar novas tonalidades, sombras e efeitos de degradê.",
    definition: "A Sobreposição de Cores (ou Mistura Óptica de Fios / Color Blending / Layered Shading) é a técnica artística e técnica em que passadas abertas de uma cor de linha são bordadas sobrepostas a uma camada de outra cor, utilizando densidades aliviadas (ex: 0,80 mm a 1,5 mm) e ângulos ligeiramente desfasados (15° a 30° de diferença) para fundir opticamente os pigmentos das fibras.",
    technicalDetails: "Ao contrário da pintura tradicional onde tintas líquidas se misturam fisicamente, no bordado a sobreposição de cores cria uma ilusão óptica na retina humana (fusão aditiva/subtrativa de luz refletida), permitindo criar pelagens de animais, sombras suaves de pele e transições de pôr do sol.",
    beginnerExplanation: "É bordar uma camada de linha amarela bem abertinha por cima de uma camada vermelha: de longe, o olho da gente mistura as duas cores e enxerga um tom de laranja lindo e brilhante, como em uma pintura de quadro.",
    howItWorks: [
      "1. A programadora cria a camada de base na primeira cor (ex: azul escuro).",
      "2. Cria uma segunda camada por cima na cor secundária (ex: azul claro ou branco) com densidade aberta e bordas plumadas.",
      "3. Ajusta o ângulo de ponto com 15° de inclinação em relação à base.",
      "4. A máquina borda as duas cores sucessivamente.",
      "5. Os fios se intercalam na superfície sem criar volume excessivo.",
      "6. O bordado ganha profundidade, brilho realista e transição de sombra."
    ],
    applications: [
      "Bordados realistas de olhos, peles, rostos humanos e animais de estimação (Pets).",
      "Sombreamento e luz de pétalas de orquídeas e rosas multicoloridas.",
      "Efeitos de fogo, chamas, água em movimento e céu crepuscular.",
      "Brasões nobres com efeitos de metal envelhecido e reflexos de ouro."
    ],
    characteristics: [
      "Permite criar centenas de tonalidades intermediárias a partir de poucos cones de linha.",
      "Confere altíssimo valor artístico e artesanal à peça bordada.",
      "Exige controle rigoroso de densidade para não endurecer o tecido."
    ],
    commonErrors: [
      "❌ Sobrepor duas cores com densidade máxima (0,38 mm), gerando um bloco grosso e duro que esconde completamente a cor de baixo.",
      "❌ Usar exatamente o mesmo ângulo de ponto nas duas cores, fazendo os fios de cima caírem exatamente dentro dos sulcos da cor de baixo.",
      "❌ Usar cores com contraste excessivo sem uma camada intermediária de transição."
    ],
    troubleshootingTips: [
      "Cores não se misturando e parecendo blocos separados: ative a opção 'Bordas Plumadas / Pontos Desiguais' (Random Stitch Length) na camada superior.",
      "Bordado ficando muito grosso na área de mistura: abra o espaçamento da camada de cima para 1,2 mm e o da base para 0,60 mm.",
      "Fios da cor superior sumindo: altere o ângulo da cor de cima em 20° para cruzar sobre os fios da base."
    ],
    dicaArtrelados: "Para criar o efeito de pelo de cachorrinho ou gatinho super fofo: borde a primeira camada na cor caramelo e a segunda camada por cima em cor creme com densidade aberta e bordas plumadas. O efeito de pelagem fica tão realista que dá vontade de fazer carinho!",
    voceSabia: "Esta técnica é a evolução digital direta da 'Pintura de Agulha' (Needle Painting), método que ficou famoso na Inglaterra no século XIX durante o movimento Arts and Crafts.",
    practicalExercise: "Crie um quadrado com tatami vermelho com densidade aberta de 0,80 mm. Borde por cima outro quadrado no mesmo lugar com tatami amarelo com densidade de 0,80 mm e ângulo inclinado em 30°. Veja o laranja brilhante que se forma.",
    quickSummary: "Sobreposição de Cores é a técnica de cruzar camadas de linhas de cores diferentes com densidade aberta para criar degradês, sombras e realismo óptico.",
    relatedTerms: ["Color Blending", "Bordas Plumadas (Feather Edge)", "Degradê de Pontos", "Satin com Variação de Densidade", "Silk Shading"],
    tags: ["sobreposição de cores", "mistura óptica", "sombreamento", "arte", "degradê"]
  },
  {
    id: "sobreposicao-de-contornos",
    code: "S-049",
    letter: "S",
    term: "Sobreposição de Contornos",
    pronunciation: "so-bre-po-si-ção de con-tor-nos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do alinhamento periférico e fechamento de limites em desenhos técnicos e ilustrações.",
    summary: "Posicionamento milimétrico do ponto de contorno avançando sobre a margem do preenchimento para garantir fechamento perfeito sem frestas.",
    definition: "A Sobreposição de Contornos (ou Contour Overlap / Outline Inset) é o método técnico de assentar as colunas de contorno (satim fino ou ponto corrido duplo/triplo) não sobre a linha geométrica teórica do desenho, mas com pelo menos 30% a 50% de sua largura repousando fisicamente por dentro da área preenchida de fundo (Tatami ou Satim de base).",
    technicalDetails: "Devido ao repuxamento transversal do preenchimento de fundo, o tecido se contrai em direção ao centro do objeto. Se o contorno for posicionado exatamente na borda teórica, o repuxo puxará o preenchimento para dentro e o contorno cairá para fora sobre o tecido cru, criando a clássica falha de contorno 'vazado'.",
    beginnerExplanation: "É colocar a linha do contorno preto 'mordendo' um pedacinho para dentro da cor de fundo (como se fosse metade dentro e metade fora). Quando a máquina puxar o pano, o contorno vai cair exatamente no lugar certo sem deixar escapar nada.",
    howItWorks: [
      "1. A programadora desenha o preenchimento colorido de fundo.",
      "2. Cria o contorno perimetral (ex: coluna de satim preto de 2 mm).",
      "3. Posiciona o eixo central do contorno avançando 0,8 mm para dentro da cor de fundo.",
      "4. A máquina borda o fundo (que sofre o repuxo e encolhe levemente).",
      "5. Em seguida, a máquina borda o contorno de satim.",
      "6. O contorno cobre a borda do fundo com precisão cirúrgica sem deixar frestas brancas."
    ],
    applications: [
      "Contornos pretos de personagens de desenhos animados e quadrinhos.",
      "Molduras perimetrais de emblemas, brasões e patches bordados.",
      "Contornos de letras em relevo com efeito de borda dupla.",
      "Bordados em tecidos com alta deformação (piquet, malha e moletom)."
    ],
    characteristics: [
      "Solução definitiva para o problema número um de iniciantes: o 'contorno fora do lugar'.",
      "Compensa distorções mecânicas da tensão da linha e elasticidade do tecido.",
      "Garante bordas nítidas e acabamento gráfico profissional."
    ],
    commonErrors: [
      "❌ Posicionar o contorno fino exatamente na borda do vetor, resultando em contornos desalinhados na peça bordada.",
      "❌ Usar contorno fino demais (< 0,8 mm) em tecidos grossos, fazendo o contorno afundar ou sumir sob o fundo.",
      "❌ Bordar o contorno no início da matriz antes de preencher o fundo correspondente."
    ],
    troubleshootingTips: [
      "Contorno preto saindo do lado da cor: aumente a sobreposição do contorno para dentro da área preenchida em 0,6 mm a 1,0 mm.",
      "Contorno sumindo dentro do tatami: aumente a largura da coluna de satim do contorno para no mínimo 1,8 mm a 2,2 mm.",
      "Contorno entortando a peça: use um suporte de ponto corrido central no contorno e certifique-se de que a entretela esteja bem tensionada."
    ],
    dicaArtrelados: "O segredo do contorno perfeito que nunca sai do lugar: faça a coluna do contorno com pelo menos 2 mm de largura e posicione o meio dela exatamente na bordinha do desenho colorido. Metade da linha cai na cor e metade no tecido: fica 100% cravado!",
    voceSabia: "Em animação tradicional (desenhos da Disney), os traços de contorno eram pintados com nanquim espesso exatamente pelo mesmo motivo: cobrir pequenas variações manuais de cor entre os fotogramas.",
    practicalExercise: "Desenhe um coração vermelho com contorno preto de 1,5 mm. No primeiro, coloque o contorno na borda exata. No segundo, faça o contorno sobrepor 0,8 mm para dentro do vermelho. Borde em uma malha e compare a perfeição do segundo.",
    quickSummary: "Sobreposição de Contornos é o assentamento do contorno avançando para dentro do preenchimento para garantir que o encolhimento do tecido não cause desencaixes.",
    relatedTerms: ["Sobreposição (Overlap)", "Registro de Contorno", "Compensação de Puxamento", "Contorno em Satin", "Efeito de Repuxo"],
    tags: ["contornos", "sobreposição", "registro", "alinhamento", "precisão"]
  },
  {
    id: "sobreposicao-de-preenchimentos",
    code: "S-050",
    letter: "S",
    term: "Sobreposição de Preenchimentos",
    pronunciation: "so-bre-po-si-ção de pre-en-chi-men-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do escalonamento e transição de grandes superfícies em geometria de preenchimento vetorial.",
    summary: "Cruzamento e união controlada de duas áreas amplas de tatami para evitar linhas de emenda visíveis no meio do desenho.",
    definition: "A Sobreposição de Preenchimentos (ou Tatami Fill Overlap / Seam Blending) é a técnica de digitalização utilizada na junção de duas ou mais áreas grandes de ponto de preenchimento (Tatami). Consiste em intercalar as passadas de ponto na linha divisória com bordas serrilhadas ou aleatórias (Feather Edge), fazendo as duas superfícies se fundirem sem criar uma 'costura' ou fenda aparente no meio da peça.",
    technicalDetails: "Se dois blocos de tatami forem colocados lado a lado com uma linha reta de divisão, a tensão mecânica cria um sulco visível (efeito fenda de falha geológica). A sobreposição de preenchimentos utiliza uma faixa de transição de 1,5 mm a 3,0 mm com penetrações desfasadas para eliminar qualquer marca de emenda.",
    beginnerExplanation: "É quando você precisa juntar dois pedaços grandes de fundo de bordado (como duas partes de um céu ou o corpo de um animal grande): para não ficar parecendo uma emenda feia no meio, os pontinhos das duas partes se misturam suavemente como dentes entrelaçados.",
    howItWorks: [
      "1. A programadora divide uma área grande em dois blocos de preenchimento gerenciáveis.",
      "2. Aplica uma borda denteada ou irregular na linha de encontro dos dois blocos.",
      "3. Faz o segundo bloco sobrepor a borda do primeiro em 2 mm.",
      "4. Mantém o mesmo ângulo de inclinação de ponto em ambos os blocos.",
      "5. A máquina borda o primeiro bloco e em seguida o segundo bloco.",
      "6. A junção fica 100% invisível, formando uma superfície contínua e perfeita."
    ],
    applications: [
      "Bordados gigantescos em costas de jaquetas e roupões de banho.",
      "Fundos de bandeiras, brasões gigantes e tapeçarias decorativas.",
      "Junção de partes de matrizes divididas para bastidores menores (Multi-Hooping).",
      "Preenchimento contínuo de paisagens e cenários complexos."
    ],
    characteristics: [
      "Elimina linhas de emenda indesejadas em bordados de grande porte.",
      "Distribui a tensão do tecido uniformemente ao longo de grandes superfícies.",
      "Indispensável para técnicas de múltiplos bastidoramentos (Multi-Hooping)."
    ],
    commonErrors: [
      "❌ Juntar dois blocos grandes de tatami com uma linha de corte perfeitamente reta, criando uma cicatriz evidente no meio do desenho.",
      "❌ Usar ângulos de ponto diferentes nos dois blocos que deveriam se fundir, quebrando o reflexo da luz.",
      "❌ Deixar os dois blocos sem nenhuma sobreposição, fazendo abrir uma fenda de tecido no meio."
    ],
    troubleshootingTips: [
      "Linha divisória evidente no meio do fundo azul: ative o recurso 'Bordas Aleatórias / Plumadas' (Jagged Edge / Feather Edge) na linha de junção dos blocos.",
      "Bordado dividido em dois bastidores ficando com emenda torta: aumente a sobreposição de preenchimentos na linha de corte para 3,0 mm.",
      "Fundo ficando com cores diferentes na junção: certifique-se de que os dois blocos usem exatamente o mesmo ângulo em graus e a mesma densidade."
    ],
    dicaArtrelados: "Para dividir um bordado grande que não cabe no seu bastidor: faça o corte da matriz em zigue-zague ou acompanhando os contornos naturais do desenho com 2 mm de sobreposição. Quando você emendar os dois bastidores, ninguém vai conseguir achar onde foi a emenda!",
    voceSabia: "A técnica de sobreposição de preenchimentos com bordas irregulares é o mesmo princípio matemático utilizado no cinema para criar panoramas invisíveis em montagens de tela verde.",
    practicalExercise: "Crie um retângulo de 10x5 cm dividido ao meio em dois blocos de 5x5 cm. No primeiro teste, deixe a emenda reta sem sobreposição. No segundo, aplique 2 mm de sobreposição com borda serrilhada. Borde e veja como a segunda emenda desaparece por completo.",
    quickSummary: "Sobreposição de Preenchimentos é o entrelaçamento suave de grandes áreas de tatami que elimina linhas de emenda visíveis e garante superfícies contínuas.",
    relatedTerms: ["Ponto Tatami", "Multi-Hooping (Múltiplos Bastidores)", "Bordas Plumadas", "Sobreposição de Objetos", "Registro de Contorno"],
    tags: ["preenchimento", "tatami", "emendas", "multi-hooping", "grandes áreas"]
  },
  {
    id: "escala-da-matriz",
    code: "S-051",
    letter: "S",
    term: "Escala da Matriz",
    pronunciation: "es-ca-la da ma-triz",
    level: "Iniciante 🟢",
    category: "Parâmetros de Software",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da relação de proporção dimensional e escala métrica (Scale Ratio) em engenharia de desenho.",
    summary: "Proporção dimensional percentual ou milimétrica de uma matriz em relação ao seu tamanho original de criação.",
    definition: "A Escala da Matriz (ou Fator de Escala / Scale Factor) é a relação matemática entre as dimensões físicas atuais de uma matriz de bordado (largura X e altura Y) e suas dimensões originais de projeto, expressa geralmente em porcentagem (ex: 100%, 120%, 80%) ou em milímetros lineares.",
    technicalDetails: "A alteração de escala afeta diretamente o comportamento físico dos pontos: aumentar ou diminuir a escala em arquivos paramétricos (.EMB) recalcula o número total de pontos mantendo a densidade constante; em arquivos de máquina fechados (.PES/.DST), alterar a escala além de ±15% a ±20% sem interpolação compromete a densidade, deixando os pontos frouxos ou excessivamente empilhados.",
    beginnerExplanation: "É a porcentagem de tamanho do desenho: 100% é o tamanho original. Se você mudar para 120%, ele fica 20% maior; se mudar para 80%, ele fica 20% menor, adaptando o desenho para caber certinho no seu bastidor ou na peça do cliente.",
    howItWorks: [
      "1. A usuária seleciona a matriz no software ou no painel da máquina.",
      "2. Visualiza a caixa de escala (ex: 100% / Largura: 100 mm / Altura: 80 mm).",
      "3. Digita a nova porcentagem desejada (ex: 110%) ou a nova medida em milímetros.",
      "4. O software aplica a transformação proporcional mantendo a proporção de aspecto (Aspect Ratio bloqueado).",
      "5. Recalcula os pontos ou ajusta as coordenadas.",
      "6. A matriz fica perfeitamente dimensionada para o novo bastidor."
    ],
    applications: [
      "Adaptação de um logotipo de peito (8 cm) para caber nas costas de uma jaqueta (24 cm).",
      "Ajuste fino de tamanho para matrizes caberem dentro de bolsos pequenos.",
      "Padronização de tamanhos de brasões para diferentes faixas etárias de uniformes (P, M, G, Infantil).",
      "Criação de conjuntos coordenados de toalhas (banho grande, rosto média e lavabo pequena)."
    ],
    characteristics: [
      "Permite ajuste proporcional simultâneo em largura e altura.",
      "Pode ser aplicada no software do computador ou diretamente no painel da máquina.",
      "Deve ser sempre monitorada quanto à densidade e largura mínima de pontos."
    ],
    commonErrors: [
      "❌ Desbloquear o cadeado de proporção e esticar a matriz em apenas um eixo, deixando o desenho distorcido e deformado.",
      "❌ Aumentar um arquivo DST em 300% direto no painel da máquina, criando pontos de cetim com 20 mm de largura que se desmancham.",
      "❌ Reduzir letras pequenas para menos de 4 mm de altura, fazendo as perninhas das letras virarem nós ilegíveis."
    ],
    troubleshootingTips: [
      "Desenho ficando deformado ao mudar o tamanho: certifique-se de que a opção 'Manter Proporção de Aspecto / Proportional Scale' esteja ativada (cadeado fechado).",
      "Matriz reduzida ficando muito dura e quebrando linha: use um software profissional com recálculo automático de densidade em vez de reduzir no painel simples da máquina.",
      "Matriz não cabe no bastidor por 2 milímetros: reduza a escala em 3% a 5% proporcionalmente; a diferença visual é imperceptível e cabe com total segurança."
    ],
    dicaArtrelados: "Se você precisa fazer um conjunto de toalha de banho, rosto e lavabo com a mesma matriz: use a Escala Proporcional no seu programa de edição (ex: 100% para o banho, 75% para o rosto e 50% para o lavabo) com a opção 'Recalcular Densidade' ativada. O kit fica lindo, harmonioso e perfeito!",
    voceSabia: "Na maioria dos painéis de máquinas de bordar domésticas, o limite de segurança embutido pelo fabricante para alteração de escala é de no máximo ±20% para proteger a mecânica contra quebras de agulha.",
    practicalExercise: "Abra uma matriz no software. Observe as caixas de largura e altura. Altere a escala para 115% com a proporção travada e veja como tanto a largura quanto a altura se ajustam harmoniosamente juntas.",
    quickSummary: "Escala da Matriz é a proporção de tamanho (percentual ou milimétrica) do desenho, usada para ampliar ou reduzir o bordado com controle de proporção e densidade.",
    relatedTerms: ["Escalonamento da Matriz", "Proporção de Aspecto (Aspect Ratio)", "Redimensionamento de Matriz", "Stitch Count", "Área de Costura"],
    tags: ["escala", "tamanho", "proporção", "redimensionamento", "ajuste"]
  },
  {
    id: "escalonamento-da-matriz",
    code: "S-052",
    letter: "S",
    term: "Escalonamento da Matriz",
    pronunciation: "es-ca-lo-na-men-to da ma-triz",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do processamento algorítmico de redimensionamento paramétrico com regeneração estrutural de malhas de pontos.",
    summary: "Processo técnico de redimensionamento de matriz que recalcula matematicamente densidades, subpontos e compensações.",
    definition: "O Escalonamento da Matriz (ou Parametric Rescaling / Density-Aware Resizing) é o procedimento computacional avançado de alterar o tamanho de uma matriz onde o software de bordado não apenas estica ou encolhe as distâncias entre os pontos existentes, mas regenera integralmente a estrutura interna do arquivo: adiciona novas linhas de costura ao ampliar, remove passadas excedentes ao reduzir, recalcula as margens de subponto (Underlay) e ajusta a compensação de encolhimento.",
    technicalDetails: "Ao escalonar uma matriz de 10 cm para 20 cm via regeneração paramétrica, a contagem de pontos (Stitch Count) salta automaticamente de 8.000 para aproximadamente 28.000 pontos, mantendo a densidade de 0,40 mm e a largura máxima de satim em níveis estritamente seguros e estáveis.",
    beginnerExplanation: "É a forma profissional e inteligente de aumentar ou diminuir um bordado: em vez de apenas esticar a linha como se fosse um elástico, o programa 'costura de novo' o desenho no tamanho novo, colocando mais pontinhos onde aumentou e tirando pontinhos onde diminuiu para o bordado ficar sempre impecável.",
    howItWorks: [
      "1. O programador abre o arquivo vetorial mestre (.EMB/.ART).",
      "2. Digita as novas dimensões desejadas (ex: 200% do tamanho original).",
      "3. O motor matemático analisa todas as formas geométricas e trilhos de satim.",
      "4. Se uma coluna de satim ultrapassar 8 mm, converte automaticamente para Auto-Split ou Tatami.",
      "5. Regenera novos subpontos proporcionais e recalcula todas as amarrações.",
      "6. A nova matriz nasce com a mesma qualidade premium do desenho original."
    ],
    applications: [
      "Conversão de matrizes pequenas de peito em matrizes gigantescas para costas de kimonos e jaquetas.",
      "Redução de matrizes complexas para aplicação em bonés e bolsos pequenos.",
      "Desenvolvimento de coleções têxteis com o mesmo motivo em múltiplos tamanhos industriais.",
      "Preservação da maleabilidade do tecido em qualquer dimensão de bordado."
    ],
    characteristics: [
      "Permite ampliações e reduções drásticas (de 50% até 300% ou mais) com perfeição absoluta.",
      "Preserva a densidade ideal e a cobertura sem criar alças soltas ou placas duras.",
      "Exige arquivos originais com informações de objetos vetoriais editáveis."
    ],
    commonErrors: [
      "❌ Tentar fazer escalonamento avançado direto no pendrive da máquina em arquivos DST sem dados de objetos.",
      "❌ Não revisar a largura mínima de pequenos detalhes ao reduzir matrizes em mais de 50%.",
      "❌ Esquecer de ajustar a espessura da linha (ex: trocar de 40wt para 60wt) ao escalonar para tamanhos diminutos."
    ],
    troubleshootingTips: [
      "Matriz ampliada ficou com fios compridos demais: utilize o escalonamento paramétrico no software mestre com o recurso 'Auto-Split' ativado.",
      "Letras sumindo após reduzir a matriz: engrosse manualmente as hastes das letras usando a ferramenta 'Compensação de Repuxo' ou selecione uma fonte de satim menor.",
      "Arquivo binário (.PES) ficando ralo ao ampliar: abra o arquivo em um software profissional e utilize a ferramenta 'Converter em Objetos Editáveis' antes de escalonar."
    ],
    dicaArtrelados: "Sempre que você precisar aumentar muito uma matriz (mais de 20%): faça isso no seu computador usando o arquivo original de trabalho (.EMB) e nunca direto no painel da máquina. Isso garante que o programa coloque mais pontos e o bordado continue cheinho e brilhante!",
    voceSabia: "O algoritmo de escalonamento paramétrico com regeneração automática de pontos da Wilcom foi premiado internacionalmente como uma das maiores inovações da engenharia de software têxtil do século XX.",
    practicalExercise: "Pegue um arquivo .EMB de 5.000 pontos com 5 cm. Aumente para 10 cm no software com regeneração de pontos ativada. Veja o Stitch Count subir automaticamente para cerca de 18.000 pontos mantendo a densidade perfeita.",
    quickSummary: "Escalonamento da Matriz é o redimensionamento profissional que recalcula e regenera a malha de pontos para manter a densidade, suporte e qualidade impecáveis em qualquer tamanho.",
    relatedTerms: ["Escala da Matriz", "Regeneração de Pontos", "Stitch Count", "Auto-Split", "Compensação de Puxamento"],
    tags: ["escalonamento", "redimensionamento avançado", "densidade", "regeneração", "qualidade"]
  },
  {
    id: "simetria-da-matriz",
    code: "S-053",
    letter: "S",
    term: "Simetria da Matriz",
    pronunciation: "si-me-tri-a da ma-triz",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego symmetria (proporção harmônica entre as partes de um todo).",
    summary: "Propriedade geométrica de equilíbrio e espelhamento exato entre os lados esquerdo e direito ou superior e inferior de um bordado.",
    definition: "A Simetria da Matriz é a harmonia geométrica e proporcional em que os elementos de uma matriz de bordado são distribuídos de maneira idêntica ou equilibrada em relação a um ou mais eixos centrais (eixo vertical X:0 ou eixo horizontal Y:0). É a base do design de brasões heráldicos, coroas clássicas, mandalas, molduras barrocas e ornamentos de gola.",
    technicalDetails: "Nos softwares de digitalização, a simetria é obtida com ferramentas de 'Espelhamento com Fusão' (Mirror Merge / Kaleidoscope / Wreath), onde o programador desenha apenas um quarto ou metade da matriz e o software gera automaticamente os quadrantes restantes com sobreposição e sequenciamento contínuo.",
    beginnerExplanation: "É quando os dois lados do desenho são exatamente iguais como se olhassem no espelho (como as asas de uma borboleta, uma coroa ou um brasão). Você desenha um lado e o programa faz o outro lado perfeitamente idêntico.",
    howItWorks: [
      "1. O programador traça o eixo de referência no centro do bastidor.",
      "2. Desenha com precisão a metade esquerda do brasão ou da coroa.",
      "3. Seleciona os objetos e aciona a ferramenta 'Espelhar e Duplicar' (Mirror Copy).",
      "4. O software cria o lado direito com simetria matemática rigorosa.",
      "5. Aplica a união nos pontos de contato centrais para evitar costuras duplas.",
      "6. A matriz nasce perfeitamente balanceada e equilibrada."
    ],
    applications: [
      "Desenvolvimento de brasões de casamento, monogramas nobres e coroas imperiais.",
      "Criação de pares de bordados para golas de camisas, punhos e bolsos simétricos.",
      "Mandalas circulares, flores radiadas e barrados decorativos de toalhas.",
      "Emblemas militares, distintivos policiais e brasões de armas oficiais."
    ],
    characteristics: [
      "Transmite sensação imediata de nobreza, equilíbrio, rigor e sofisticação.",
      "Reduz pela metade o tempo de desenho e digitalização da matriz.",
      "Garante centralização perfeita no peito de camisas e toalhas."
    ],
    commonErrors: [
      "❌ Desenhar os dois lados à mão livre sem usar ferramentas de espelhamento, resultando em um lado torto ou mais alto que o outro.",
      "❌ Não fundir os pontos centrais no eixo de simetria, criando uma linha de nós grossos no meio do brasão.",
      "❌ Inverter a simetria em desenhos que possuem textos ou letras (que não podem ser espelhadas horizontalmente)."
    ],
    troubleshootingTips: [
      "Brasão parecendo torto no peito: utilize as guias de alinhamento e centralize o eixo de simetria exatamente no centro da grade (X:0, Y:0).",
      "Costura duplicada no meio da coroa: selecione os objetos do centro e use o comando 'Soldar / Fundir' (Weld) para unir os nós centrais.",
      "Um lado do bordado repuxando mais que o outro: certifique-se de que os ângulos de ponto sejam espelhados de forma simétrica (ex: 45° na esquerda e 135° na direita)."
    ],
    dicaArtrelados: "Para criar brasões de casamento de luxo: desenhe apenas o ramo de folhas do lado esquerdo com todo o capricho. Depois, use a ferramenta 'Espelhar na Horizontal com Cópia'. O brasão fica com uma simetria tão perfeita que parece joia!",
    voceSabia: "O cérebro humano é biologicamente programado para reconhecer a simetria bilateral como sinônimo de beleza, saúde e perfeição estética desde os tempos pré-históricos.",
    practicalExercise: "Desenhe uma asa de borboleta completa no software. Use a ferramenta 'Espelhar Horizontalmente' para criar a outra asa do outro lado do eixo central. Junte as duas com um corpinho no meio e veja a perfeição da simetria.",
    quickSummary: "Simetria da Matriz é o equilíbrio e espelhamento perfeito entre os lados do desenho, essencial para criar brasões, coroas, mandalas e monogramas clássicos.",
    relatedTerms: ["Simetria Horizontal", "Simetria Vertical", "Espelhamento (Mirroring)", "Mandalas e Brasões", "Origem de Coordenadas (X:0, Y:0)"],
    tags: ["simetria", "espelhamento", "brasões", "equilíbrio", "design clássico"]
  }
];

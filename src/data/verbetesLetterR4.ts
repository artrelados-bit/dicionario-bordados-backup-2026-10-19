import { Verbete } from "../types";

export const VERBETES_LETTER_R4: Verbete[] = [
  {
    id: "repeticao-de-padrao",
    code: "R-025",
    letter: "R",
    term: "Repetição de Padrão",
    pronunciation: "re-pe-ti-ção de pa-drão",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do francês patron (modelo, molde geométrico) e do latim repetitio. Aplicação de tesselação gráfica ao bordado.",
    summary: "Preenchimento de grandes áreas ou fundos com texturas geométricas ou florais que se repetem infinitamente sem emendas visíveis (Tesselação).",
    definition: "A repetição de padrão (Pattern Fill / Motif Fill / Tesselação) é a técnica de digitalização que preenche superfícies fechadas com um mosaico contínuo de micro-desenhos (como favos de mel, escamas, treliças, arabescos ou xadrez) que se encaixam perfeitamente lado a lado nas direções X e Y, criando texturas ricas e fundos decorativos de baixo relevo.",
    technicalDetails: "Ao contrário do tatami convencional que gera uma superfície lisa homogênea, o preenchimento por repetição de padrão calcula a distribuição dos nós de entrada e saída de cada bloco modular com deslocamento (offset) calibrado para evitar linhas de quebra visíveis (banding).",
    beginnerExplanation: "É preencher o fundo do desenho com uma textura linda de azulejo ou colmeia que se repete por todo o espaço, deixando a peça com um toque artístico e elegante.",
    howItWorks: [
      "1. Desenha-se o contorno do objeto grande que receberá o preenchimento.",
      "2. Seleciona-se o padrão de textura desejado na biblioteca de padrões do software (ex: padrão floral ou escama de peixe).",
      "3. O software divide a área em células geométricas modulares e conecta todos os caminhos.",
      "4. A máquina borda a textura contínua com relevos de luz e sombra espetaculares."
    ],
    applications: [
      "Fundos acolchoados para almofadas e painéis de parede decorativos.",
      "Texturização de asas de borboleta, caudas de sereia e escamas de animais.",
      "Efeito de falso couro ou matelassê em bolsas e pastas executivas."
    ],
    characteristics: [
      "Cria relevos táteis ricos com baixa densidade de pontos.",
      "Permite controlar a escala, a rotação e o espaçamento da textura.",
      "Economiza até 30% de pontos em comparação com preenchimentos tatami densos."
    ],
    commonErrors: [
      "❌ Usar padrões muito miúdos em áreas imensas, tornando a textura imperceptível e gerando excesso de pontos.",
      "❌ Escolher padrões com muitas quebras de linha em tecidos elásticos sem a devida entretela.",
      "❌ Rotacionar o padrão em ângulos tortos que desalinham a simetria com as bordas da peça."
    ],
    troubleshootingTips: [
      "Textura parecendo confusa e sem nitidez: aumente a escala do padrão modular nas propriedades do objeto.",
      "Tecido repuxando sob o padrão de fundo: use entretela de recorte (Cut-Away) e aplique compensação de encolhimento de 0.4 mm.",
      "Padrão cortado de forma estranha na borda: ajuste a posição de origem (Ponto X/Y) da textura no software."
    ],
    dicaArtrelados: "Para fazer peças infantis com tema de sereia ou fundo do mar, preencha o corpinho do peixinho com a repetição de padrão em 'Escama de Peixe'. Fica com um relevo 3D deslumbrante sem precisar de técnicas complexas!",
    voceSabia: "A arte matemática de repetir padrões geométricos preenchendo o espaço sem frestas nem sobreposições chama-se 'Tesselação', celebrizada no século XX pelo artista gráfico holandês M.C. Escher.",
    practicalExercise: "No seu programa de bordado, crie um círculo de 10 cm e alterne seu preenchimento entre 'Tatami Comum' e 'Preenchimento com Padrão de Favo de Mel'. Compare a quantidade de pontos e o efeito visual 3D.",
    quickSummary: "Repetição de padrão é o preenchimento de áreas com texturas geométricas ou artísticas contínuas que se encaixam perfeitamente em mosaico.",
    relatedTerms: ["Pattern Fill", "Motif Fill", "Tesselação", "Preenchimento Tatami"],
    tags: ["padrão", "textura", "mosaico", "software", "preenchimento"]
  },
  {
    id: "registro-do-bordado",
    code: "R-026",
    letter: "R",
    term: "Registro do Bordado",
    pronunciation: "re-gis-tro do bor-da-do",
    level: "Intermediário 🟡",
    category: "Terminologia Geral",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim regestum (marca, anotação de alinhamento) e da terminologia gráfica de impressão (Registration).",
    summary: "Casamento milimétrico exato da posição de todos os elementos, cores, contornos e camadas da matriz no tecido.",
    definition: "O registro do bordado (Registration) é a precisão milimétrica com que os diferentes elementos que compõem o desenho (preenchimentos, contornos, detalhes, sombras e apliques) se encaixam e se encontram na peça física bordada. Um bordado com 'bom registro' não apresenta frestas em branco entre contornos e fundos, nem sobreposições tortas ou deformações dimensionais.",
    technicalDetails: "O registro perfeito é o resultado do equilíbrio entre quatro forças: 1) Compensação de puxamento na matriz (Pull Compensation); 2) Sentido e equilíbrio dos ângulos dos pontos; 3) Rigidez do bastidoramento e gramatura da entretela; 4) Tensão correta das linhas superior e inferior.",
    beginnerExplanation: "É o encaixe perfeito de todas as partes do bordado: quando o contorno preto fecha exatamente em cima da cor colorida, sem deixar nenhuma fresta de tecido aparecendo e sem bordar nada fora do lugar.",
    howItWorks: [
      "1. A matriz é digitalizada prevendo que a linha vai puxar o tecido para o centro (compensação).",
      "2. O tecido é fixado com firmeza no bastidor com entretela adequada.",
      "3. A máquina borda cada cor e camada mantendo a coordenada cartesiana precisa.",
      "4. No final, o contorno fecha perfeitamente na borda do desenho sem desvios milimétricos."
    ],
    applications: [
      "Bordados corporativos de marcas famosas com tolerância zero para erros visuais.",
      "Matrizes de múltiplas cores com contornos finos de satim ou ponto triplo.",
      "Projetos complexos com apliques de tecido e montagens modulares no bastidor."
    ],
    characteristics: [
      "Principal indicador visual de qualidade e profissionalismo de uma matriz.",
      "Ausência de 'frestas brancas' (Gaps) entre elementos adjacentes.",
      "Contornos perfeitamente concêntricos e paralelos às figuras bordadas."
    ],
    commonErrors: [
      "❌ Culpar a máquina de bordar pelo erro de registro quando a causa real foi a falta de compensação de encolhimento na matriz.",
      "❌ Deixar o tecido frouxo ou 'mole' no bastidor, fazendo o tecido andar durante a costura.",
      "❌ Bordar primeiro os contornos e só depois os preenchimentos grandes."
    ],
    troubleshootingTips: [
      "Contorno caindo 1 mm para fora do desenho: aumente a compensação de encolhimento (Pull Compensation) do preenchimento no software de 0.20 mm para 0.40 mm.",
      "Bordado ficando torto apenas no sentido da largura: verifique se o tecido não foi esticado ao ser preso no bastidor.",
      "Desalinhamento piorando conforme as cores avançam: troque a entretela rasgável por uma entretela de recorte (Cut-Away) firme."
    ],
    dicaArtrelados: "Se você tem um bordado onde o contorno sempre sai fora do lugar: borde primeiro a cor de fundo com o contorno daquela cor imediatamente em seguida, antes de ir para a próxima cor. O registro fica 100% perfeito!",
    voceSabia: "O termo 'Registro' foi herdado das antigas tipografias e gráficas de jornal do século XIX, onde as quatro chapas de tinta (CMYK) precisavam casar na mesma folha de papel com precisão micrométrica.",
    practicalExercise: "Borde um círculo azul com contorno preto em malha fina usando apenas entretela rasgável simples. Depois, repita o mesmo bordado usando entretela Cut-Away com cola spray. Compare o encaixe do contorno em ambos.",
    quickSummary: "Registro do bordado é o alinhamento e encaixe milimétrico perfeito entre preenchimentos, contornos e cores, sem frestas nem desvios.",
    relatedTerms: ["Perda de Registro", "Compensação de Puxamento (Pull Comp)", "Encolhimento do Tecido", "Alinhamento de Contorno"],
    tags: ["registro", "alinhamento", "qualidade", "precisão", "compensação"]
  },
  {
    id: "registro-entre-camadas",
    code: "R-027",
    letter: "R",
    term: "Registro entre Camadas",
    pronunciation: "re-gis-tro en-tre ca-ma-das",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Termo de controle dimensional em matrizes multicamadas (Layer Registration).",
    summary: "Manutenção do alinhamento geométrico exato entre a camada base de suporte, o preenchimento principal e as camadas superiores de sombreamento.",
    definition: "O registro entre camadas é o casamento dimensional perfeito que ocorre entre as sucessivas camadas sobrepostas de uma matriz de bordado (como: 1ª camada - Underlay/Suporte; 2ª camada - Fundo Tatami; 3ª camada - Sombras e Degradês; 4ª camada - Satim de contorno e detalhes). Garante que as camadas superiores assentem com precisão milimétrica exatamente onde foram projetadas.",
    technicalDetails: "À medida que cada camada de pontos é bordada, o tecido sofre micro-deformações cumulativas (Push-Pull Effect). O registro perfeito entre camadas exige que o programador compense a direção de expansão da camada inferior em relação à contração da camada superior, alternando os ângulos de ponto em cerca de 45° a 90° entre camadas vizinhas.",
    beginnerExplanation: "É garantir que cada parte do desenho que vem por cima (como a sombra, os olhos e o contorno) caia exatamente no lugar certo em cima da camada de baixo, sem escorregar pro lado.",
    howItWorks: [
      "1. A base de suporte ancora o tecido à entretela.",
      "2. A primeira camada de preenchimento é bordada com compensação para manter o tamanho real.",
      "3. As camadas de sombreamento intermediárias assentam suavemente sobre a primeira camada sem puxar o tecido.",
      "4. Os contornos finais selam as bordas de todas as camadas simultaneamente em perfeita harmonia."
    ],
    applications: [
      "Bordados realistas e retratos com múltiplas camadas de sombreamento de cor.",
      "Brasões nobres e emblemas com relevos sobrepostos e texturas ricas.",
      "Bordados em 3D Puff com sobreposição de camadas de espuma EVA."
    ],
    characteristics: [
      "Gera profundidade tridimensional realista e transições suaves de cor.",
      "Exige excelente planejamento de sequenciamento e ângulos de costura.",
      "Evita que o bordado se torne um 'bloco de chumbo' rígido e grosso."
    ],
    commonErrors: [
      "❌ Bordar todas as camadas sobrepostas exatamente com o mesmo ângulo de ponto, fazendo os fios superiores caírem dentro das frestas da camada inferior.",
      "❌ Não usar compensação progressiva em matrizes com mais de 5 camadas sobrepostas.",
      "❌ Acumular densidades altas em todas as camadas, quebrando a agulha na 4ª sobreposição."
    ],
    troubleshootingTips: [
      "Camada de sombra caindo deslocada para a direita: compense o deslocamento na matriz prevendo a direção do puxamento da camada de baixo.",
      "Agulha batendo com barulho seco nas camadas sobrepostas: reduza a densidade da camada de baixo para 0.55 mm e a de cima para 0.50 mm.",
      "Bordado ficando empelotado: desative o Underlay nas camadas que bordam diretamente em cima de outras já preenchidas."
    ],
    dicaArtrelados: "Quando for colocar uma camada de bordado por cima de outra já bordada (como um nome em cima de uma faixa colorida), cruze os ângulos dos pontos: se a faixa de baixo foi bordada na horizontal (0°), borde o nome na vertical (90°) ou diagonal (45°). Fica nítido e super firme!",
    voceSabia: "Em matrizes premiadas internacionalmente de arte oriental, os mestres do bordado utilizam até 12 camadas de fios ultrafinos de seda sobrepostas para criar o efeito hiper-realista da plumagem de pássaros.",
    practicalExercise: "Digitalize dois círculos sobrepostos: um com ângulos paralelos e outro com ângulos cruzados em 90°. Borde ambos e sinta como o círculo com ângulos cruzados tem um registro muito mais firme e relevo superior.",
    quickSummary: "Registro entre camadas é o alinhamento exato de sucessivas camadas de bordado sobrepostas, garantindo profundidade sem deformação nem acúmulo excessivo.",
    relatedTerms: ["Sobreposição de Camadas", "Ângulos Cruzados", "Efeito Push-Pull", "Densidade Progressiva"],
    tags: ["camadas", "registro", "alinhamento", "sombreamento", "programação"]
  },
  {
    id: "registro-de-cores",
    code: "R-028",
    letter: "R",
    term: "Registro de Cores",
    pronunciation: "re-gis-tro de co-res",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do conceito de separação e encontro de cores em matrizes policromáticas (Color Registration).",
    summary: "Encontro preciso e sem falhas entre áreas de cores diferentes no bordado, impedindo que o tecido apareça entre os blocos coloridos.",
    definition: "O registro de cores é o ajuste técnico e geométrico que assegura que duas ou mais áreas preenchidas com linhas de cores diferentes se toquem ou se sobreponham levemente (com uma margem de traspasse ou Trap) sem deixar frestas de tecido de fundo expostas e sem criar calombos de sobreposição indesejados.",
    technicalDetails: "Configura-se mediante a aplicação de 'Sobreposição de Cores' (Color Overlap / Trapping) entre 0.3 mm e 0.6 mm entre blocos vizinhos de cores distintas, compensando a contração física que ocorre na primeira cor antes que a segunda cor comece a ser bordada.",
    beginnerExplanation: "É o encaixe perfeito entre as cores do desenho: quando a parte vermelha encosta perfeitamente na parte amarela sem deixar nenhum espacinho em branco no meio delas.",
    howItWorks: [
      "1. A primeira cor (ex: amarelo) é bordada e contrai ligeiramente o tecido para dentro.",
      "2. A matriz possui programada uma sobreposição de 0.4 mm na borda de encontro com a próxima cor.",
      "3. A segunda cor (ex: vermelho) inicia cobrindo exatamente essa pequena margem sobreposta.",
      "4. O encontro das duas cores fica perfeitamente selado e contínuo, sem frestas vazadas."
    ],
    applications: [
      "Logotipos corporativos policromáticos com múltiplas cores adjacentes.",
      "Personagens infantis de desenhos animados com divisões de cor nítidas.",
      "Bandeiras nacionais e brasões esportivos com faixas de cores contrastantes."
    ],
    characteristics: [
      "Elimina as 'linhas brancas' de tecido exposto entre cores vizinhas.",
      "Garante aspecto profissional e limpo ao bordado colorido.",
      "Indispensável em tecidos claros onde qualquer fresta chama atenção imediata."
    ],
    commonErrors: [
      "❌ Desenhar os blocos de cores no software apenas encostando ponta com ponta (sem nenhuma margem de sobreposição).",
      "❌ Deixar sobreposição excessiva (> 1.2 mm), criando um cordão grosso e duro no encontro das cores.",
      "❌ Trocar a ordem das cores sem recalcular a direção de sobreposição da matriz."
    ],
    troubleshootingTips: [
      "Tecido da camisa aparecendo no meio das duas cores: aumente a sobreposição de cores (Overlap) na matriz para pelo menos 0.4 mm.",
      "Encontro das cores ficando duro e alto: reduza a margem de sobreposição para 0.3 mm e use pontos tatami com densidade equilibrada (0.40 mm).",
      "Cores se afastando apenas no tecido piquê: use entretela de recorte (Cut-Away) pesada e cola spray temporária."
    ],
    dicaArtrelados: "No software de criação, nunca deixe duas cores vizinhas apenas encostadas lado a lado como no papel: faça uma cor entrar cerca de 0.4 mm (cerca de 3 a 4 pontinhos) por baixo da outra. Na máquina, o tecido puxa e o encontro fica perfeito!",
    voceSabia: "Na indústria gráfica, esse avanço milimétrico de uma cor sobre a outra para evitar frestas brancas chama-se internacionalmente de 'Trapping' e é usado desde os tempos das impressões em prensas de Gutenberg.",
    practicalExercise: "Desenhe dois retângulos vizinhos no software: um encostando exatamente na linha do outro e o segundo entrando 0.5 mm por baixo. Borde ambos em uma malha e veja como o primeiro abre uma fresta feia e o segundo fica impecável.",
    quickSummary: "Registro de cores é o casamento milimétrico entre áreas de cores diferentes com leve sobreposição (Trapping) para evitar frestas abertas de tecido.",
    relatedTerms: ["Trapping (Sobreposição de Cores)", "Frestas no Bordado", "Efeito Push-Pull", "Matriz Policromática"],
    tags: ["cores", "registro", "trapping", "alinhamento", "programação"]
  },
  {
    id: "registro-de-objetos",
    code: "R-029",
    letter: "R",
    term: "Registro de Objetos",
    pronunciation: "re-gis-tro de ob-je-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim objectum (colocado diante) e regestum. Alinhamento espacial entre elementos vetoriais independentes.",
    summary: "Posicionamento e casamento geométrico preciso entre diferentes objetos vetoriais que formam uma mesma composição.",
    definition: "O registro de objetos é a capacidade do sistema de bordado (matriz + máquina + estabilização) de manter a integridade posicional relativa entre múltiplos elementos isolados de um desenho (como textos, ícones, brasões e molduras), garantindo que as distâncias, centralizações, paralelismos e simetrias originais da arte sejam fielmente reproduzidas no tecido.",
    technicalDetails: "Envolve o planejamento do sequenciamento de bordado 'do centro para fora' (Center-Out Sequencing) ou em espiral para distribuir uniformemente o acúmulo de tração no bastidor, evitando que objetos periféricos sofram rotação ou deslocamento translacional relativo.",
    beginnerExplanation: "É garantir que todas as partes do desenho fiquem certinhas na posição certa: as letras centralizadas dentro da moldura, as estrelas alinhadas e nenhum pedaço torto ou empurrado para o lado.",
    howItWorks: [
      "1. A matriz é organizada para bordar do centro da área útil em direção às extremidades.",
      "2. Cada objeto é ancorado com suportes próprios para minimizar a movimentação do tecido.",
      "3. O pantógrafo navega entre as coordenadas cartesianas sem perdas de passo mecânico.",
      "4. A composição final mantém a simetria exata projetada na tela do computador."
    ],
    applications: [
      "Molduras circulares ou quadradas com nomes ou brasões centralizados.",
      "Logotipos simétricos com ícones alinhados precisamente a blocos de texto.",
      "Bordados geométricos e mandalas compostas por dezenas de elementos interligados."
    ],
    characteristics: [
      "Preserva a fidelidade matemática e visual da marca ou desenho.",
      "Evita que elementos bordados no final pareçam 'deslocados' do conjunto.",
      "Essencial para matrizes de grande porte com múltiplos objetos espalhados."
    ],
    commonErrors: [
      "❌ Bordar de um lado para o outro (da esquerda para a direita em linha reta), empurrando o tecido e fazendo os objetos da direita ficarem tortos.",
      "❌ Deixar objetos distantes soltos sem planejar a ordem de costura lógica.",
      "❌ Não alinhar o centro da matriz com o centro físico do bastidor."
    ],
    troubleshootingTips: [
      "Nome ficando descentralizado dentro da moldura: altere a ordem da matriz para bordar o nome primeiro e a moldura externa depois.",
      "Objetos das pontas ficando tortos: mude o sequenciamento da matriz para a regra 'Do Centro para Fora' (Center-Out).",
      "Máquina perdendo a posição no meio do bordado: limpe e lubrifique os trilhos do pantógrafo X-Y e verifique a correia do motor de passo."
    ],
    dicaArtrelados: "Para matrizes grandes que têm uma moldura e um nome no meio, a regra de ouro é bordar de dentro para fora: primeiro borde o miolo e o nome, e só depois borde a moldura externa. O alinhamento fica cirúrgico!",
    voceSabia: "Os servomotores dos pantógrafos industriais modernos possuem encoders ópticos que leem a posição dos objetos com precisão de 0,01 milímetros a cada milissegundo.",
    practicalExercise: "Digitalize um quadrado externo e um círculo interno. Experimente bordar primeiro o quadrado e depois o círculo; em seguida faça o inverso (primeiro o círculo e depois o quadrado). Observe a diferença de centralização.",
    quickSummary: "Registro de objetos é o alinhamento posicional e a simetria exata entre todos os elementos que compõem o desenho bordado.",
    relatedTerms: ["Sequenciamento Centro-Fora", "Simetria de Matriz", "Deslocamento Cartesiano", "Registro do Bordado"],
    tags: ["objetos", "alinhamento", "simetria", "sequenciamento", "precisão"]
  },
  {
    id: "registro-do-applique",
    code: "R-030",
    letter: "R",
    term: "Registro do Appliqué",
    pronunciation: "re-gis-tro do a-pli-quê",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês appliquer (aplicar, sobrepor) e do latim regestum. Encaixe preciso de retalhos de tecido aplicados.",
    summary: "Casamento milimétrico perfeito entre as linhas de marcação, o recorte do retalho de tecido e o cordão final de acabamento em apliques.",
    definition: "O registro do appliqué (ou registro de aplique) é a precisão com que as três etapas fundamentais da técnica de aplique se sobrepõem: 1) A linha de marcação na entretela/tecido base; 2) A linha de fixação (Tackdown) que prende o retalho sobreposto; 3) O cordão final de acabamento (Satin ou ponto caseado/E-Stitch), garantindo que as bordas do retalho fiquem 100% cobertas sem fiapos expostos e sem cordões vazados.",
    technicalDetails: "Exige que o cordão satim de acabamento tenha largura mínima de 3.5 mm a 4.5 mm com pelo menos 60% de sua largura repousando sobre o retalho de tecido e 40% sobre o tecido base, além de compensação de recuo milimétrico.",
    beginnerExplanation: "É o encaixe certinho do tecido de aplique: a costura de acabamento (aquele ponto cheio ou caseadinho) precisa cobrir a beiradinha do tecido cortado perfeitamente, sem deixar nenhum fiapo para fora e sem costurar no vazio.",
    howItWorks: [
      "1. A máquina borda a linha guia de marcação (Die Line) no bastidor.",
      "2. O retalho de tecido é posicionado cobrindo a marcação com folga.",
      "3. A máquina borda a costura de fixação (Tackdown) travando o tecido.",
      "4. A bordadeira recorta o excesso de tecido bem rente à costura com tesoura pelicano.",
      "5. A máquina executa o cordão satim ou caseado de acabamento exatamente sobre a borda cortada, selando tudo."
    ],
    applications: [
      "Camisetas infantis com letras e números grandes em aplique de tecido estampado.",
      "Almofadas decorativas e colchas com figuras grandes (bichinhos, flores, nuvens).",
      "Emblemas colegiais e jaquetas esportivas estilo universitário (Varsity Jackets)."
    ],
    characteristics: [
      "Economiza centenas de milhares de pontos em desenhos grandes.",
      "Garante acabamento macio e leve na roupa.",
      "Visual limpo e sem fiapos desfiando após as lavagens."
    ],
    commonErrors: [
      "❌ Recortar o retalho de tecido longe demais da costura de fixação, deixando pontas de tecido sobrando para fora do satim.",
      "❌ Usar tesoura comum reta em vez de tesoura curva de ponta arredondada (tesoura pelicano), cortando o tecido de base por acidente.",
      "❌ Mexer ou empurrar o bastidor ao fazer o recorte manual, perdendo a coordenada de registro da máquina."
    ],
    troubleshootingTips: [
      "Fiapos de tecido aparecendo para fora do cordão de acabamento: use uma tesoura de ponta curva bem afiada e corte a no máximo 1 mm da costura guia.",
      "Cordão de satim caindo no vazio ao lado do aplique: aumente a largura da coluna satim na matriz de 3.0 mm para 4.2 mm.",
      "Bordas do aplique desfiando após a lavagem: use termocolante definitivo (Heat'n Bond) no verso do tecido do aplique antes de bordar."
    ],
    dicaArtrelados: "Ao recortar o aplique dentro do bastidor, use uma tesoura de ponta curvada (tipo tesoura pelicano) e nunca apoie a mão com força sobre o bastidor para não descalibrar o pantógrafo da máquina. O acabamento fica digno de boutique!",
    voceSabia: "A técnica de aplique surgiu na Idade Média como uma forma inteligente de remendar e reforçar roupas nobres com tecidos ricos de seda e veludo sem ter que fazer peças novas do zero.",
    practicalExercise: "Borde um aplique de coração simples: preste atenção no alinhamento da linha de marcação, corte o retalho com calma bem rente aos pontinhos e observe como o cordão final fecha cobrindo 100% da borda cortada.",
    quickSummary: "Registro do appliqué é a perfeita sobreposição da marcação, do corte do retalho e do cordão de acabamento, garantindo apliques limpos e sem fiapos expostos.",
    relatedTerms: ["Appliqué / Aplique", "Linha de Marcação (Die Line)", "Linha de Fixação (Tackdown)", "Tesoura Pelicano"],
    tags: ["applique", "aplique", "registro", "acabamento", "bastidor"]
  },
  {
    id: "rotacao-da-matriz",
    code: "R-031",
    letter: "R",
    term: "Rotação da Matriz",
    pronunciation: "ro-ta-ção da ma-triz",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim rotatio (giro em torno de um eixo). Operação geométrica de transformação angular.",
    summary: "Giro angular completo do arquivo de bordado (em ângulos de 90°, 180°, 270° ou graus livres) para ajustar a orientação no bastidor.",
    definition: "A rotação da matriz é a transformação geométrica que recalcula ou orienta todas as coordenadas cartesianas de pontos (X, Y) e os ângulos de costura da matriz em torno de um ponto central pivô, girando o desenho completo para se adequar à orientação do bastidor físico, ao sentido do fio do tecido ou à posição anatômica da peça de vestuário.",
    technicalDetails: "Pode ser executada no software de edição ou diretamente na tela touchscreen da máquina de bordar. A rotação geométrica matemática preserva integralmente a densidade, a contagem de pontos e o paralelismo dos pontos originais da matriz.",
    beginnerExplanation: "É girar o desenho inteiro (de lado, de cabeça para baixo ou em qualquer ângulo) para ele caber certinho no bastidor ou ficar na posição certa da toalha ou da camisa.",
    howItWorks: [
      "1. A usuária seleciona a matriz completa na tela do computador ou da máquina.",
      "2. Escolhe o comando de rotação (ex: Girar 90° à direita ou digitar 45°).",
      "3. O algoritmo aplica a matriz matemática de rotação cartesiana sobre todos os vetores de pontos.",
      "4. O desenho é exibido na nova orientação perfeitamente posicionado dentro do bastidor virtual."
    ],
    applications: [
      "Girar um bordado horizontal comprido em 90° para caber na vertical de um bastidor 13x18 cm ou 16x26 cm.",
      "Bordar barras de toalhas e caminhos de mesa acompanhando o sentido do barrado.",
      "Ajustar a orientação de logotipos em bolsos inclinados ou mangas de camisa."
    ],
    characteristics: [
      "Operação instantânea sem perda de qualidade dos pontos.",
      "Permite aproveitar 100% da área útil do bastidor.",
      "Disponível em praticamente todos os modelos de máquinas computadorizadas."
    ],
    commonErrors: [
      "❌ Girar uma matriz que já estava no limite máximo do bastidor e esquecer de verificar se a nova largura cabe na nova orientação.",
      "❌ Girar a matriz na máquina e esquecer de conferir o sentido correto do tecido na hora de encaixar o bastidor.",
      "❌ Tentar girar apenas um texto e girar a matriz inteira por engano."
    ],
    troubleshootingTips: [
      "Máquina avisando que o desenho não cabe no bastidor: use a função 'Girar 90°' no painel; na maioria das vezes o desenho cabe na outra posição.",
      "Bordado saindo de cabeça para baixo na toalha: gire a matriz em 180° antes de apertar o Start.",
      "Desenho levemente inclinado em relação à barra da toalha: use o micro-ajuste de rotação de 1° a 1° no painel da máquina para alinhar com o barrado."
    ],
    dicaArtrelados: "Muitas vezes você acha que precisa comprar um bastidor gigante para bordar um nome longo de 17 cm, mas basta girar a matriz em 90° no seu bastidor padrão de 13x18 cm que ele cabe perfeitamente na vertical!",
    voceSabia: "Nos primórdios da computação gráfica nos anos 1960, girar uma imagem em qualquer ângulo exigia o cálculo manual de funções trigonométricas de seno e cosseno para cada ponto individualmente.",
    practicalExercise: "Abra um nome comprido no painel da sua máquina de bordar. Toque no botão 'Girar 90°' e observe como ele se acomoda perfeitamente no formato vertical do bastidor.",
    quickSummary: "Rotação da matriz é o giro do arquivo de bordado para acomodar o desenho no bastidor ou ajustar a posição correta na peça.",
    relatedTerms: ["Rotação do Objeto", "Orientação do Bastidor", "Espelhamento de Matriz", "Quick Edit"],
    tags: ["rotação", "giro", "matriz", "bastidor", "software"]
  },
  {
    id: "rotacao-do-objeto",
    code: "R-032",
    letter: "R",
    term: "Rotação do Objeto",
    pronunciation: "ro-ta-ção do ob-je-to",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim objectum e rotatio. Manipulação vetorial individual no software de criação.",
    summary: "Giro angular aplicado a um único elemento isolado da matriz (uma flor, letra ou asa) sem afetar os outros componentes.",
    definition: "A rotação do objeto é a manipulação vetorial seletiva no software de digitalização que permite girar um elemento específico e independente da composição (como uma folha em um buquê, uma letra em um monograma curvo ou uma estrela decorativa) em torno do seu próprio centro geométrico ou de um ponto de pivô customizado, mantendo todos os demais objetos na posição original.",
    technicalDetails: "Ao rotacionar um objeto vetorial inteligente, o software recalcula automaticamente as linhas de grade, os ângulos dos pontos de preenchimento e as coordenadas de entrada e saída correspondentes à nova orientação espacial.",
    beginnerExplanation: "É girar apenas uma partezinha do desenho no computador (como inclinar uma folhinha ou uma flor) sem mexer no restante do bordado.",
    howItWorks: [
      "1. A usuária seleciona apenas o objeto desejado com a ferramenta de seleção no software.",
      "2. Clica nos nós de rotação ou digita o ângulo exato no painel de propriedades (ex: +30°).",
      "3. O software gira apenas o objeto selecionado recalculando os vetores e ângulos dos pontos.",
      "4. A composição ganha dinamismo visual, ritmo e harmonia estética."
    ],
    applications: [
      "Composição de coroas florais e guirlandas com folhas em ângulos variados.",
      "Inclinação dinâmica de letras e palavras em tipografias caligráficas esportivas.",
      "Ajuste fino de asas de anjos, pétalas e membros de personagens ilustrados."
    ],
    characteristics: [
      "Permite construir arranjos florais e composições ricas a partir de um único elemento base.",
      "Mantém a densidade e propriedades originais do objeto intactas.",
      "Pode ser combinado com ferramentas de repetição circular ou espelhamento."
    ],
    commonErrors: [
      "❌ Rotacionar um objeto com pontos satim sem conferir se a nova direção da linha continuará com bom brilho visual.",
      "❌ Rotacionar acidentalmente a matriz inteira por esquecer de selecionar apenas o objeto desejado.",
      "❌ Mover o ponto pivô de rotação sem querer, fazendo o objeto girar longe do lugar."
    ],
    troubleshootingTips: [
      "Objeto girou todo o desenho junto: desfaça (Ctrl+Z), clique na ferramenta de 'Desagrupar' (Ungroup) e selecione apenas o elemento que deseja girar.",
      "Ângulo de ponto ficando estranho após girar: use a ferramenta de 'Editar Ângulos de Ponto' para direcionar o fluxo de luz do satim.",
      "Giro saindo do eixo correto: dê duplo clique no objeto para recentralizar o ponto pivô de rotação."
    ],
    dicaArtrelados: "Para criar um arranjo floral maravilhoso em poucos segundos: pegue uma única folhinha pronta, duplique 3 vezes e gire cada uma em um ângulo diferente (ex: 0°, 45° e -45°). Você cria um buquê natural e profissional num estalo!",
    voceSabia: "Em softwares de ponta como o Wilcom EmbroideryStudio, você pode posicionar o ponto pivô de rotação na base da haste de uma flor e girar a flor inteira como se ela estivesse balançando com o vento.",
    practicalExercise: "No seu software, desenhe uma estrela. Duplique-a e gire a cópia em 45 graus. Agrupe as duas e veja como você criou uma estrela de 8 pontas perfeita e simétrica.",
    quickSummary: "Rotação do objeto é o giro angular aplicado a um elemento isolado do desenho para criar arranjos dinâmicos e composições artísticas.",
    relatedTerms: ["Rotação da Matriz", "Ponto Pivô de Rotação", "Manipulação Vetorial", "Composição Floral"],
    tags: ["objeto", "rotação", "vetor", "software", "composição"]
  }
];

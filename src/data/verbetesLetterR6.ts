import { Verbete } from "../types";

export const VERBETES_LETTER_R6: Verbete[] = [
  {
    id: "resolucao-da-imagem",
    code: "R-041",
    letter: "R",
    term: "Resolução da Imagem",
    pronunciation: "re-so-lu-ção da i-ma-gem",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim resolutio (separação, definição) e imago (imagem). Medida da densidade de pixels em computação gráfica (DPI/PPI).",
    summary: "Quantidade de pixels por polegada (DPI) da imagem original (JPEG, PNG) importada no software como referência para digitalização.",
    definition: "A resolução da imagem no contexto de bordado computadorizado é a densidade de pixels (medida em DPI - Dots Per Inch / PPI - Pixels Per Inch) do arquivo bitmap (JPEG, PNG, BMP) que o programador insere na tela do software de digitalização como gabarito de fundo. Uma imagem com alta resolução (300 DPI) permite enxergar cantos, letras e detalhes nítidos ao dar zoom, enquanto uma imagem de baixa resolução (72 DPI ou pixelada) prejudica o traçado dos contornos.",
    technicalDetails: "Uma imagem ideal para digitalização manual ou automática possui entre 300 e 600 DPI na escala real de bordado (1:1), com linhas bem contrastadas e sem compressão excessiva de artefatos JPEG ao redor dos traços.",
    beginnerExplanation: "É a nitidez da foto ou desenho que você abre no computador para copiar por cima: quanto mais nítida a imagem, mais fácil é enxergar as letrinhas e os detalhes para desenhar os pontos com perfeição.",
    howItWorks: [
      "1. O cliente envia o logotipo da empresa em formato de imagem bitmap.",
      "2. O programador importa a imagem para a tela de trabalho do software de bordado.",
      "3. Dá zoom nas áreas detalhadas para traçar os vetores dos pontos.",
      "4. Se a imagem tiver boa resolução, as bordas são limpas e fáceis de seguir com o mouse.",
      "5. A matriz resultante reproduz a arte com precisão e contornos retos."
    ],
    applications: [
      "Preparação e tratamento prévio de imagens antes de iniciar a programação da matriz.",
      "Digitalização manual por sobreposição de nós vetoriais sobre a arte do cliente.",
      "Processamento em ferramentas de vetorização automática (Auto-Digitizing)."
    ],
    characteristics: [
      "Imagens em 300 DPI oferecem nitidez cristalina para desenhar detalhes.",
      "Imagens borradas do WhatsApp exigem redesenho prévio ou tratamento gráfico.",
      "Não altera o número de pontos da matriz, mas dita a facilidade do trabalho do programador."
    ],
    commonErrors: [
      "❌ Aceitar prints de tela de celular minúsculos de 50x50 pixels e tentar vetorizar automaticamente.",
      "❌ Tentar aumentar uma imagem pequena de 72 DPI no Paint achando que ela vai ganhar nitidez de verdade.",
      "❌ Digitalizar sobre imagens distorcidas por fotos tiradas em ângulo inclinado da camiseta."
    ],
    troubleshootingTips: [
      "Imagem pixelada ao dar zoom: peça ao cliente o arquivo original em vetor (PDF, EPS, AI, CDR) ou uma imagem com pelo menos 1.500 pixels de largura.",
      "Contornos borrados dificultando o desenho: passe a imagem por um programa de edição rápida (Photoshop/Canva) e aumente o contraste antes de importar.",
      "Cliente só tem a foto da camisa pronta: tire uma foto bem reta de cima (90°) com boa iluminação natural sem sombras."
    ],
    dicaArtrelados: "Sempre peça para o seu cliente enviar o logotipo em formato PDF ou em alta resolução por e-mail ou como documento no WhatsApp. Uma imagem limpa e nítida economiza metade do seu tempo na hora de programar a matriz!",
    voceSabia: "As primeiras imagens digitais enviadas da Lua pela sonda Mariner em 1965 tinham resolução de apenas 200x200 pixels em escala de cinza de 6 bits.",
    practicalExercise: "Importe no seu software um print pequeno de baixa resolução e uma imagem nítida de 300 DPI do mesmo desenho. Dê zoom de 500% em ambos e compare a facilidade de enxergar onde as linhas começam e terminam.",
    quickSummary: "Resolução da imagem é a nitidez em pixels do desenho de referência usado na tela do computador para guiar a criação dos pontos da matriz.",
    relatedTerms: ["Resolução do Desenho", "Bitmap vs. Vetor", "Digitalização Manual", "DPI (Dots Per Inch)"],
    tags: ["imagem", "resolução", "dpi", "pixels", "software"]
  },
  {
    id: "resolucao-do-desenho",
    code: "R-042",
    letter: "R",
    term: "Resolução do Desenho",
    pronunciation: "re-so-lu-ção do de-se-nho",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Conceito vetorial de densidade de nós e precisão de curvas em ilustrações digitais.",
    summary: "Nível de fidelidade geométrica e quantidade de nós vetoriais de uma ilustração usada na criação da matriz de bordado.",
    definition: "A resolução do desenho é o grau de refinamento, detalhamento geométrico e precisão vetorial contido na ilustração ou arte-final antes da conversão para pontos. Um desenho vetorial em alta resolução possui curvas bezier suaves, cantos vivos perfeitamente definidos e camadas de cores separadas, permitindo que o software de bordado interprete as formas com fidelidade matemática absoluta.",
    technicalDetails: "Ao contrário de bitmaps que usam pixels, a resolução do desenho vetorial é expressa pela precisão de coordenadas flutuantes e pela otimização da quantidade de pontos de ancoragem (nós). Desenhos com nós em excesso geram trajetórias irregulares de pontos, enquanto desenhos com nós equilibrados produzem curvas perfeitamente limpas.",
    beginnerExplanation: "É a qualidade do desenho em vetor no computador: quando as curvas são bem redondinhas, as pontas são retas e cada cor está separadinha no seu lugar, facilitando a transformação em bordado.",
    howItWorks: [
      "1. A arte é criada em software de ilustração vetorial (CorelDRAW, Illustrator ou Inkscape).",
      "2. As linhas são simplificadas com nós bem distribuídos e sem sobreposições desnecessárias.",
      "3. O arquivo vetorial é importado no software de bordado.",
      "4. O programa converte os vetores diretamente em objetos de satim e tatami com cantos perfeitos.",
      "5. A matriz herda a limpeza matemática das curvas do desenho."
    ],
    applications: [
      "Conversão direta de logotipos corporativos em matrizes através de pontes de software (CorelDRAW + Wilcom).",
      "Desenho de brasões nobres com linhas finas e arabescos detalhados.",
      "Criação de fontes tipográficas e monogramas para bordado."
    ],
    characteristics: [
      "Escalável para qualquer tamanho sem perder a nitidez nem granular.",
      "Permite editar cores e formas vetoriais com cliques individuais.",
      "Gera matrizes com trajetórias de costura mais fluidas e rápidas."
    ],
    commonErrors: [
      "❌ Importar desenhos vetoriais com milhares de nós duplicados gerados por auto-rastreamento ruim de baixa qualidade.",
      "❌ Deixar linhas invisíveis ou objetos transparentes ocultos na arte vetorial que acabam gerando pontos de máquina.",
      "❌ Usar ilustrações com linhas ultrafinas (< 0.5 mm) incompatíveis com a espessura física do fio de bordar."
    ],
    troubleshootingTips: [
      "Bordado fazendo curvas cheias de bicos: limpe o excesso de nós da curva vetorial usando a ferramenta 'Suavizar / Reduzir Nós'.",
      "Pontos gerados no vazio: limpe as camadas do desenho vetorial removendo linhas de corte e objetos invisíveis.",
      "Linhas finas sumindo no tecido: engrosse os traços do desenho para pelo menos 1.2 mm de largura antes de gerar os pontos de cetim."
    ],
    dicaArtrelados: "Antes de transformar um desenho de Corel ou Illustrator em bordado, use a ferramenta de 'Simplificar Curvas' para remover nós duplicados. Curvas limpas no vetor geram um bordado que corre suave e macio na máquina!",
    voceSabia: "O formato vetorial moderno foi desenvolvido nos anos 1960 pelo engenheiro francês Pierre Bézier para desenhar as curvas aerodinâmicas da lataria dos automóveis da Renault.",
    practicalExercise: "Desenhe uma curva com 20 nós no software vetorial e outra idêntica com apenas 3 nós bem posicionados. Converta ambas em pontos de bordado e repare como a curva com menos nós fica muito mais limpa.",
    quickSummary: "Resolução do desenho é a qualidade e precisão das curvas vetoriais da arte original que determinam a suavidade e o acabamento dos pontos de bordado.",
    relatedTerms: ["Curvas Bézier", "Vetor vs. Bitmap", "Nós de Ancoragem", "Simplificação Vetorial"],
    tags: ["desenho", "vetor", "resolução", "curvas", "software"]
  },
  {
    id: "resolucao-da-matriz",
    code: "R-043",
    letter: "R",
    term: "Resolução da Matriz",
    pronunciation: "re-so-lu-ção da ma-triz",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do padrão industrial de interpolação cartesiana e precisão de pulso do motor de passo (0.1 mm).",
    summary: "Grau de detalhamento, precisão dimensional e resolução mecânica que a matriz de bordado consegue reproduzir no tecido.",
    definition: "A resolução da matriz é a capacidade técnica que o arquivo de bordado possui de representar detalhes gráficos e curvas no plano real, condicionada pela menor unidade de deslocamento que os motores de passo do pantógrafo conseguem executar (geralmente 0.1 mm no formato padrão Tajima/DST) e pela espessura física do fio de poliéster 40wt (cerca de 0.35 mm a 0.40 mm de diâmetro).",
    technicalDetails: "Arquivos de máquina tradicionais salvam coordenadas em décimos de milímetro inteiros (ex: X=125, Y=-43 = 12.5 mm / -4.3 mm). Elementos com dimensões inferiores a 0.8 mm entram na 'zona de difração física' do fio, tornando-se ilegíveis a menos que sejam usadas linhas ultrafinas 60wt/75wt e agulhas 65/9.",
    beginnerExplanation: "É o limite de pequenos detalhes que a máquina de bordar consegue fazer de verdade no tecido: como a linha tem uma espessura física, desenhar coisas menores que 1 milímetro vira apenas um bolinho de linha.",
    howItWorks: [
      "1. O programador projeta os pontos respeitando a espessura física do fio.",
      "2. O software converte as formas em passos de motor calibrados a cada 0.1 mm.",
      "3. O pantógrafo se move com precisão mecânica sobre o tecido.",
      "4. A linha de poliéster 40wt cobre a superfície gerando imagens nítidas até o limite de resolução física do fio.",
      "5. Detalhes minuciosos ganham vida proporcional ao seu tamanho real."
    ],
    applications: [
      "Cálculo do tamanho mínimo de letras em uniformes (mínimo de 4.5 mm a 5.0 mm para letras em satim padrão).",
      "Programação de micro-logotipos para relógios, óculos e etiquetas de grife.",
      "Ajuste fino de densidade e passo para bordados de altíssima definição com linhas especiais 60wt."
    ],
    characteristics: [
      "Limitada pela espessura física do fio e da agulha, não pela tela do computador.",
      "Tamanho mínimo legível para satim: 4.5 mm de altura de letra.",
      "Precisão de coordenadas padronizada internacionalmente em décimos de milímetro (0.1 mm)."
    ],
    commonErrors: [
      "❌ Tentar bordar textos com letrinhas de 2.0 mm com linha comum 40wt e agulha 75/11, gerando um borrão ilegível.",
      "❌ Achar que o bordado pode ter a mesma resolução microscópica de uma impressora de papel (1200 DPI).",
      "❌ Colocar contornos satim finos demais (< 0.7 mm de largura), fazendo a linha quebrar no olho da agulha."
    ],
    troubleshootingTips: [
      "Letras minúsculas virando bolinhas no bordado: aumente o tamanho das letras para pelo menos 5.0 mm ou troque a linha por uma 60wt com agulha 65/9.",
      "Detalhes do olho do bichinho sumindo: simplifique o desenho retirando micro-linhas e deixando apenas o traço principal.",
      "Bordado parecendo serrilhado: verifique se o arquivo não foi corrompido ou convertido múltiplas vezes entre formatos de pontos fechados."
    ],
    dicaArtrelados: "Lembre-se sempre: linha de bordar não é tinta de caneta! Para letras ficarem perfeitamente legíveis na linha 40wt normal, a altura mínima ideal é de 5 milímetros. Menos que isso, a linha engole os espacinhos vazios!",
    voceSabia: "Se colocássemos um bordado eletrônico na mesma escala de resolução gráfica de uma impressora de papel, o bordado teria o equivalente a cerca de 70 a 90 DPI de resolução física máxima devido ao diâmetro do fio.",
    practicalExercise: "Borde a mesma palavra 'BORDADO' em 4 tamanhos diferentes: 3 mm, 5 mm, 8 mm e 12 mm. Compare com uma lupa e veja exatamente onde o limite de resolução física da linha 40wt começa a agir.",
    quickSummary: "Resolução da matriz é o limite físico e mecânico de reprodução de detalhes no tecido, determinado pelo diâmetro do fio e pelo calibre da agulha.",
    relatedTerms: ["Tamanho Mínimo de Letra", "Linha 60wt Micro", "Passo Mecânico (0.1 mm)", "Legibilidade de Bordado"],
    tags: ["matriz", "resolução", "letras", "fios", "limites"]
  },
  {
    id: "renderizacao-da-matriz",
    code: "R-044",
    letter: "R",
    term: "Renderização da Matriz",
    pronunciation: "ren-de-ri-za-ção da ma-triz",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês rendering (representação artística / geração visual tridimensional por computador).",
    summary: "Simulação visual hiper-realista em 3D na tela do computador mostrando o relevo, brilho e textura real dos pontos antes de bordar.",
    definition: "A renderização da matriz (TrueView / 3D Stitch Simulation) é o recurso gráfico dos softwares de bordado que processa todas as coordenadas vetoriais de pontos, espessuras de linha, ângulos de costura e paletas de cores, gerando uma representação visual tridimensional fotorrealista na tela do monitor com simulação de luz, sombra, relevo e brilho especular dos fios.",
    technicalDetails: "Utiliza aceleradores gráficos OpenGL ou DirectX para calcular sombras volumétricas sobre cada segmento de ponto. Permite alternar entre a visão de 'Linhas Vetoriais de Pontos' (visão técnica 2D com nós de penetração da agulha) e a 'Visão Renderizada 3D' (visão artística e comercial).",
    beginnerExplanation: "É o botão '3D' do computador que transforma os risquinhos do programa em um desenho lindo que parece o bordado de verdade pronto na roupa, com brilho e relevo perfeito.",
    howItWorks: [
      "1. O software lê a lista de milhares de coordenadas de pontos X-Y.",
      "2. Aplica algoritmos de iluminação e renderização 3D sobre os vetores.",
      "3. Simula a curvatura cilíndrica dos fios de linha de acordo com o ângulo de cada ponto.",
      "4. A tela exibe o bordado idêntico à peça física real com textura e brilho sedoso.",
      "5. A bordadeira exporta a imagem para enviar como prévia (Mockup) de aprovação para o cliente."
    ],
    applications: [
      "Envio de prévias digitais (Mockups de aprovação) para clientes pelo WhatsApp antes de produzir.",
      "Verificação visual de frestas, falhas de cobertura e sobreposição de cores na tela.",
      "Criação de catálogos comerciais e anúncios virtuais para redes sociais."
    ],
    characteristics: [
      "Permite antecipar erros visuais sem gastar 1 cm de tecido ou linha.",
      "Gera imagens de altíssimo impacto comercial para encantar clientes.",
      "Permite simular diferentes cores de tecido de fundo com um clique."
    ],
    commonErrors: [
      "❌ Confiar apenas na renderização 3D e esquecer de conferir a visão técnica 2D (onde se vê os nós de corte e pontos de suporte).",
      "❌ Salvar a imagem renderizada com fundo transparente sem contrastar com a cor da linha.",
      "❌ Não avisar o cliente que pequenas variações de tom podem ocorrer entre a tela do celular e o fio físico."
    ],
    troubleshootingTips: [
      "Software muito lento ou travando ao ativar o 3D: desative a renderização 3D enquanto estiver desenhando e ative apenas no final para conferir a arte.",
      "Linhas parecendo opacas na tela: ajuste as propriedades de brilho de linha nas opções de renderização do software (alterando para acabamento 'Rayon / Poliéster Trilobal').",
      "Bordado parecendo ralo no 3D: aumente a densidade do preenchimento ou adicione pontos de suporte."
    ],
    dicaArtrelados: "Sempre que terminar uma matriz, gere a renderização 3D com a cor do tecido do cliente no fundo e envie para aprovação com o nome dele. O cliente fica encantado com o profissionalismo e aprova na hora!",
    voceSabia: "O recurso 'TrueView' foi patenteado e introduzido pela primeira vez pela empresa australiana Wilcom no início dos anos 1990, revolucionando a indústria mundial de bordados.",
    practicalExercise: "Abra qualquer matriz no seu software e aperte a tecla de atalho '1' ou 'T' (TrueView / 3D). Alterne entre a visão 2D de pontos e a renderização 3D e observe como os pontos de suporte somem e o relevo salta aos olhos.",
    quickSummary: "Renderização da matriz é a simulação visual 3D na tela que mostra o bordado pronto com relevo, brilho e textura real dos fios para aprovação e conferência.",
    relatedTerms: ["TrueView (Visão 3D)", "Mockup de Bordado", "Simulação de Pontos", "Prévia Comercial"],
    tags: ["renderização", "trueview", "3d", "mockup", "software"]
  },
  {
    id: "reproducao-da-matriz",
    code: "R-045",
    letter: "R",
    term: "Reprodução da Matriz",
    pronunciation: "re-pro-du-ção da ma-triz",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim reproducere (produzir novamente). Execução física dos comandos digitais na máquina de bordar.",
    summary: "Execução física contínua dos pontos da matriz na máquina de bordar para produzir a peça real no tecido.",
    definition: "A reprodução da matriz (ou Execução do Bordado / Stitch-out) é a etapa operacional prática em que a máquina de bordar computadorizada lê o arquivo de instruções digitais (códigos de movimento X-Y, saltos, cortes e paradas de cor) e os transforma na costura física real sobre o tecido tensionado no bastidor.",
    technicalDetails: "Durante a reprodução, a máquina sincroniza a velocidade do eixo principal do cabeçote (rotação da agulha e laçadeira em PPM) com a aceleração dos servomotores dos eixos X e Y do pantógrafo, mantendo a tensão dinâmica das linhas constante.",
    beginnerExplanation: "É a hora em que a máquina começa a costurar de verdade no tecido, lendo o arquivo do pendrive e bordando o desenho ponto por ponto até ficar pronto.",
    howItWorks: [
      "1. A matriz é carregada na memória da máquina através do pendrive USB ou conexão de rede Wi-Fi.",
      "2. O operador passa as linhas nas cores corretas e prende o tecido com entretela no bastidor.",
      "3. O bastidor é fixado firmemente no pantógrafo da máquina.",
      "4. O botão Start (Verde) é pressionado.",
      "5. A máquina reproduz os milhares de pontos com precisão mecânica até o sinal sonoro de finalização."
    ],
    applications: [
      "Produção de encomendas no ateliê e fábricas de confecção.",
      "Bordado de testes (Stitch-out de validação) para aprovação de matrizes recém-criadas.",
      "Produção seriada em máquinas de múltiplos cabeçotes."
    ],
    characteristics: [
      "Transformação do projeto virtual em produto físico tangível.",
      "Exige acompanhamento auditivo e visual atento do operador.",
      "Momento de checagem da calibração real de tensões e corte de linha."
    ],
    commonErrors: [
      "❌ Deixar a máquina bordando sozinha sem ninguém por perto em peças de alto valor, arriscando embolar linha.",
      "❌ Usar carretéis de linha com nós de emenda que travam na passagem da agulha durante a reprodução.",
      "❌ Esquecer de verificar a quantidade de linha na bobina inferior antes de iniciar uma matriz grande."
    ],
    troubleshootingTips: [
      "Máquina parando do nada no meio da reprodução: verifique o sensor de quebra de linha superior ou se a linha da bobina acabou.",
      "Ruído estranho durante a costura: pause imediatamente e verifique se não há linha enrolada no eixo da lançadeira.",
      "Bordado saindo com cores trocadas: confira a sequência de cores na ficha técnica (Worksheet) antes de iniciar cada etapa."
    ],
    dicaArtrelados: "Sempre faça um 'Bordado de Teste' (Stitch-out) em um retalho do mesmo tecido antes de bordar na peça definitiva do cliente. Esse teste de 5 minutos evita perder uma jaqueta ou vestido caro!",
    voceSabia: "As primeiras máquinas a reproduzir matrizes de costura de forma automática usavam fitas de papel perfuradas inventadas por Joseph-Marie Jacquard em 1804 na França.",
    practicalExercise: "Coloque um retalho no bastidor, carregue uma matriz simples e acompanhe a reprodução prestando atenção no som do motor, na formação dos pontos e no momento exato do corte de linha.",
    quickSummary: "Reprodução da matriz é a costura prática do arquivo na máquina de bordar, transformando os dados do computador no bordado físico real.",
    relatedTerms: ["Stitch-out (Bordado de Teste)", "Execução de Bordado", "Ficha Técnica (Worksheet)", "Operação da Máquina"],
    tags: ["reprodução", "execução", "stitch-out", "máquina", "operação"]
  },
  {
    id: "reconhecimento-automatico-de-formas",
    code: "R-046",
    letter: "R",
    term: "Reconhecimento Automático de Formas",
    pronunciation: "re-co-nhe-ci-men-to au-to-má-ti-co de for-mas",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do campo da visão computacional (Computer Vision) e algoritmos de vetorização em softwares de bordado (Auto-Digitizing).",
    summary: "Algoritmo de inteligência de software que escaneia uma imagem e detecta automaticamente contornos, letras e áreas fechadas para converter em pontos.",
    definition: "O reconhecimento automático de formas (Auto-Digitizing / Auto-Trace / Reconhecimento Vetorial) é o conjunto de algoritmos de visão computacional integrados aos softwares de bordado que analisam os pixels de uma imagem bitmap de alto contraste, identificando bordas geométricas, linhas fechadas e transições de cores para convertê-las automaticamente em objetos vetoriais com pontos de bordado (satim ou tatami).",
    technicalDetails: "Funciona por meio de filtros de limiarização (Thresholding), detecção de gradientes de cor e redução de ruído. Requer imagens em alta resolução com cores sólidas e bem separadas. Em imagens complexas com degradês, requer revisão manual humana para ajustar os ângulos e as compensações de encolhimento.",
    beginnerExplanation: "É a ferramenta de 'varinha mágica' do programa que olha para a foto do desenho e tenta transformar em bordado sozinha com um clique, sem você precisar redesenhar nada à mão.",
    howItWorks: [
      "1. A usuária clica na ferramenta 'Digitalização Automática' e seleciona a imagem na tela.",
      "2. O algoritmo analisa os pixels e separa a imagem em áreas de cores homogêneas.",
      "3. Detecta se a forma é uma coluna estreita (converte em Satim) ou uma área grande (converte em Tatami).",
      "4. Gera a lista de pontos automaticamente em segundos.",
      "5. O programador faz a revisão final dos parâmetros e da ordem de costura."
    ],
    applications: [
      "Vetorização ultrarrápida de silhuetas simples, ícones monocromáticos e desenhos infantis em preto e branco.",
      "Criação de bases preliminares de desenhos para posterior edição manual refinada.",
      "Prototipagem rápida de matrizes conceituais em ateliês."
    ],
    characteristics: [
      "Gera uma matriz em poucos segundos com um único clique.",
      "Funciona com máxima perfeição em imagens com traços pretos sobre fundo branco.",
      "Pode gerar excesso de cortes ou ângulos de ponto caóticos se a imagem for complexa."
    ],
    commonErrors: [
      "❌ Tentar usar reconhecimento automático em fotos reais de pessoas ou paisagens com degradês, gerando um emaranhado de pontos ilegíveis.",
      "❌ Não revisar a ordem de costura gerada pelo robô, fazendo a máquina dar dezenas de cortes de linha desnecessários.",
      "❌ Aceitar a compensação de encolhimento padrão do automático sem adequar ao tecido real."
    ],
    troubleshootingTips: [
      "Software gerando manchas estranhas no meio do desenho: reduza o número de cores detectadas nas opções de pré-processamento de imagem do software.",
      "Letras saindo deformadas no automático: apague os objetos gerados e digite o texto manualmente usando as fontes de bordado nativas do software.",
      "Bordado automático quebrando muita linha: faça uma limpeza de pontos curtos e adicione pontos de suporte manualmente."
    ],
    dicaArtrelados: "A digitalização automática é ótima para adiantar desenhos simples (como estrelas, corações e silhuetas). Mas para letras e logotipos corporativos, sempre prefira digitar e desenhar manualmente: o resultado profissional não tem comparação!",
    voceSabia: "Os primeiros algoritmos de auto-digitalização surgiram no final dos anos 1980 em universidades de computação na Suíça e Alemanha utilizando redes neurais primitivas.",
    practicalExercise: "Importe um ícone preto simples (como uma nota musical) e use a ferramenta de 'Auto-Digitalização'. Veja como o software reconhece o formato instantaneamente e transforma em pontos perfeitos.",
    quickSummary: "Reconhecimento automático de formas é a função de software que escaneia imagens de alto contraste e gera pontos de bordado automaticamente em segundos.",
    relatedTerms: ["Auto-Digitizing", "Vetorização Automática", "Limiarização de Imagem", "Digitalização Manual"],
    tags: ["automático", "auto-digitizing", "vetorização", "software", "algoritmo"]
  },
  {
    id: "reconhecimento-de-cores",
    code: "R-047",
    letter: "R",
    term: "Reconhecimento de Cores",
    pronunciation: "re-co-nhe-ci-men-to de co-res",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do processamento digital de imagens em espaços de cores RGB / Lab (Color Quantization / Palette Matching).",
    summary: "Capacidade do software de analisar as tonalidades de uma imagem e mapeá-las para a tabela de cores real dos cones de linha.",
    definition: "O reconhecimento de cores (Color Reduction / Palette Matching) é a função dos softwares de digitalização que analisa os milhares de tons RGB de uma imagem gráfica importada, reduz essas variações a um número controlado de cores sólidas essenciais (quantização de cores) e mapeia cada uma delas para o código numérico correspondente na cartela de linhas reais do fabricante selecionado (como Madeira, Coats, Isacord ou Ricamare).",
    technicalDetails: "Utiliza algoritmos de distância euclidiana no espaço cromático CIELAB (Delta E) para encontrar a cor de linha física mais próxima da cor do pixel da imagem, calculando o consumo estimado de cada tom em metros.",
    beginnerExplanation: "É quando o programa olha para a imagem colorida, separa as cores certinhas e diz qual é o número exato do cone de linha que você deve comprar na loja para ficar idêntico.",
    howItWorks: [
      "1. A usuária carrega a imagem colorida no software de bordado.",
      "2. O software identifica os tons predominantes e agrupa tons semelhantes em cores únicas.",
      "3. O sistema compara cada cor com a tabela digital do fabricante de linhas escolhido.",
      "4. O programa gera a lista de paradas com os códigos exatos dos carretéis (ex: Poliéster Cor 1002 - Amarelo Canário).",
      "5. A máquina exibe os nomes e números das cores na ordem correta de execução."
    ],
    applications: [
      "Separação precisa de camadas de cor em logotipos multicoloridos.",
      "Mapeamento de cartelas de fios para clientes corporativos exigentes com fidelidade da marca.",
      "Planejamento de compra de cones de linha para a produção semanal."
    ],
    characteristics: [
      "Elimina erros de interpretação visual de tons de cor pelo operador.",
      "Permite escolher a marca de linha favorita nas configurações do software.",
      "Gera fichas técnicas de produção (Production Sheet) profissionais com consumo em metros."
    ],
    commonErrors: [
      "❌ Deixar o software detectar 30 tons de azul em uma imagem que tinha apenas 1 azul com ruído de compressão JPEG.",
      "❌ Não calibrar a tabela de marcas de linha no software, ficando com códigos genéricos e sem correspondência física.",
      "❌ Ignorar que cores em monitores não calibrados podem ter pequenas variações sob a luz ambiente."
    ],
    troubleshootingTips: [
      "Software criando 15 trocas de cor desnecessárias: reduza a quantidade de cores na ferramenta de 'Redução de Cores' para apenas as 3 ou 4 cores reais do logotipo.",
      "Cor da linha na tela não combinando com o cone na mão: selecione a marca correta da sua linha nas preferências do programa (ex: Cartela Ricamare / Lumina).",
      "Duas partes da mesma cor bordando em etapas separadas: use a ferramenta 'Mesclar Cores Iguais' (Merge Same Colors)."
    ],
    dicaArtrelados: "Configure a tabela de linhas do seu software com a marca de fios que você realmente usa no seu ateliê (como Ricamare, Linhas Corrente ou Madeira). Assim, o programa já te dá o número exato do cone para colocar na máquina sem você quebrar a cabeça!",
    voceSabia: "O sistema internacional de comparação de cores Delta E é capaz de diferenciar variações de tonalidade tão sutis que são invisíveis para a maioria dos olhos humanos.",
    practicalExercise: "Importe uma bandeira colorida no seu software. Use a ferramenta de redução de cores para limitar a imagem exatamente a 3 cores puras e veja como o desenho fica limpo e pronto para virar bordado.",
    quickSummary: "Reconhecimento de cores é a ferramenta que identifica as cores da imagem e encontra os códigos exatos dos cones de linha reais na cartela do fabricante.",
    relatedTerms: ["Cartela de Linhas", "Redução de Cores", "Delta E (Fidelidade de Cor)", "Ficha de Produção"],
    tags: ["cores", "reconhecimento", "paleta", "fios", "software"]
  },
  {
    id: "reconhecimento-de-contornos",
    code: "R-048",
    letter: "R",
    term: "Reconhecimento de Contornos",
    pronunciation: "re-co-nhe-ci-men-to de con-tor-nos",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Algoritmos de detecção de bordas (Edge Detection / Sobel / Canny) aplicados à digitalização gráfica.",
    summary: "Identificação automática das linhas perimetrais externas e internas de uma imagem para gerar contornos precisos de satim ou pesponto.",
    definition: "O reconhecimento de contornos (Edge Detection / Outline Tracing) é a capacidade algorítmica do software de identificar as fronteiras de alto contraste entre o objeto e o fundo de uma imagem, traçando automaticamente uma linha vetorial contínua fechada sobre a borda perimetral. Essa linha pode ser convertida instantaneamente em contornos de ponto cheio (Satin), ponto corrido, ponto triplo ou em linhas de corte para aplique.",
    technicalDetails: "Utiliza matrizes matemáticas de detecção de gradiente de luminância para localizar os pontos de inflexão de cor com resolução subpixel. Softwares avançados filtram ruídos periféricos para produzir vetores bezier suaves e contínuos.",
    beginnerExplanation: "É a ferramenta que acha a beiradinha exata do desenho sozinha e passa uma linha de contorno em volta de tudo perfeitamente com um clique.",
    howItWorks: [
      "1. A usuária seleciona um objeto ou imagem e clica na ferramenta 'Criar Contorno Automático'.",
      "2. O software detecta as bordas contrastadas de todo o perímetro externo.",
      "3. Cria uma linha vetorial fechada contornando exatamente a silhueta da figura.",
      "4. Aplica o tipo de ponto selecionado (ex: Coluna de Satim com 3.0 mm de largura).",
      "5. O contorno perfeitamente alinhado está pronto para a costura."
    ],
    applications: [
      "Criação automática de cordões satim para acabamento de apliques e emblemas.",
      "Geração de molduras perimetrais ao redor de textos e nomes.",
      "Criação de linhas de corte para plotters a laser ou Silhouette integradas ao bordado."
    ],
    characteristics: [
      "Garante paralelismo perfeito ao redor de formas complexas.",
      "Economiza minutos preciosos de desenho manual com mouse.",
      "Permite definir margens de afastamento positivo ou negativo (Offset)."
    ],
    commonErrors: [
      "❌ Gerar contorno sobre imagens com fundo ruidoso ou com sombras suaves, gerando linhas cheias de serrilhado.",
      "❌ Deixar o contorno muito colado na borda sem margem de compensação de encolhimento para o tecido.",
      "❌ Gerar contornos internos indesejados ao selecionar a imagem inteira em vez de selecionar apenas o perímetro externo."
    ],
    troubleshootingTips: [
      "Contorno saindo todo tremido e serrilhado: aplique um filtro de 'Suavização de Contorno' (Smooth Curve) no software.",
      "Contorno entrando por dentro dos detalhes vazados: selecione a opção 'Apenas Contorno Externo' (External Boundary Only).",
      "Contorno ficando afastado da imagem: ajuste o parâmetro de deslocamento (Offset) para 0.0 mm."
    ],
    dicaArtrelados: "Para fazer apliques rápidos: selecione o desenho pronto, use o 'Reconhecimento de Contornos' com deslocamento de +0.5 mm e configure como ponto de marcação e fixação. Você cria a matriz de aplique em 10 segundos!",
    voceSabia: "Os algoritmos de detecção de contornos mais famosos da história da computação (como o filtro Canny) foram desenvolvidos em 1986 no laboratório de inteligência artificial do MIT.",
    practicalExercise: "Desenhe uma estrela no seu software. Use a ferramenta 'Criar Contorno Automático / Outlines' e aplique uma coluna de satim de 3.0 mm com recuo de 0.5 mm. Veja a precisão matemática do acabamento.",
    quickSummary: "Reconhecimento de contornos é a detecção automática das bordas perimetrais de um desenho para criar linhas de contorno, apliques e molduras perfeitas.",
    relatedTerms: ["Edge Detection", "Linha Perimetral", "Offset de Contorno", "Bordas de Aplique"],
    tags: ["contornos", "reconhecimento", "bordas", "vetorização", "software"]
  }
];

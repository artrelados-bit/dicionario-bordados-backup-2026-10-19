import { Verbete } from "../types";

export const VERBETES_LETTER_X: Verbete[] = [
  {
    id: "x-axis-eixo-x-translacao-horizontal",
    code: "X-001",
    letter: "X",
    term: "X-Axis — Eixo X (Translação Horizontal do Pantógrafo & Coordenadas Cartesianas)",
    pronunciation: "éks-ék-sis — êi-shu shis (ˈɛks ˈæksɪs)",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino.",
    origin: "Do latim cartesiano 'axis' associado à incógnita algébrica 'x' instituída por René Descartes em 1637 para designar a dimensão horizontal na geometria analítica.",
    summary: "Eixo de movimentação mecânica horizontal do pantógrafo que desloca o bastidor para a esquerda (-X) e direita (+X) por servomotores e correias sincronizadas.",
    definition: "O X-Axis (Eixo X / Eixo Horizontal do Pantógrafo / Horizontal Carriage Axis) é o vetor linear mecânico e eletrônico responsável pelo deslocamento bidirecional lateral (esquerda-direita) do bastidor de bordado em relação à barra da agulha fixa no cabeçote. Composto por guias lineares temperadas, fusos de esferas ou correias dentadas de poliuretano com alma de aço e acionado por servomotores ou motores de passo de alta resolução (resolução típica de 0,05 mm a 0,1 mm por pulso), o eixo X interpola suas coordenadas simultaneamente com o eixo Y a cada descida da agulha para posicionar o tecido no ponto exato da penetração.",
    technicalDetails: "Nos arquivos binários de matrizes industriais (como Tajima .DST, Barudan .DSB ou Melco .EXP), todas as coordenadas de ponto são gravadas como valores de incremento relativo delta no eixo X (dX) e delta no eixo Y (dY) medidos em décimos de milímetro (0,1 mm = 1 ponto Tajima). A inércia do conjunto de carros do eixo X é compensada pelo firmware através de curvas de aceleração e desaceleração trapezoidais ou senoidais (S-Curve), evitando vibrações que causariam distorções de contorno em velocidades superiores a 800 PPM.",
    beginnerExplanation: "É o trilho mecânico da máquina que faz o bastidor andar de um lado para o outro (da esquerda para a direita). Quando a máquina borda um desenho largo, é o motor do eixo X que movimenta o bastidor no milímetro exato para que a agulha caia no lugar certinho sem errar!",
    howItWorks: [
      "1. A placa-mãe da máquina lê o comando de ponto com o valor do deslocamento delta X.",
      "2. O driver envia pulsos elétricos modulados para o servomotor do eixo X.",
      "3. A correia dentada ou o fuso linear desloca o carro de suporte do bastidor horizontalmente.",
      "4. O movimento do eixo X ocorre exclusivamente enquanto a agulha está no ponto morto superior (acima do tecido).",
      "5. Ao atingir a coordenada exata, o eixo X para e o eixo Z (barra da agulha) desce para formar a laçada.",
      "6. Sensores ópticos ou magnéticos monitoram se houve perda de passos por esforço mecânico excessivo."
    ],
    applications: [
      "Translação lateral em pontos de preenchimento tatami e colunas satim horizontais.",
      "Deslocamento rápido em saltos (Jump Stitches) entre diferentes blocos de cor.",
      "Centralização automática do bastidor ao carregar um novo arquivo de matriz.",
      "Calibração de limites máximos de área de bordado para evitar colisões com o calcador."
    ],
    characteristics: [
      "Precisão milimétrica com tolerância inferior a ±0,05 mm em máquinas industriais.",
      "Movimentação sincronizada pelo encoder do eixo principal da máquina.",
      "Capacidade de aceleração instantânea de até 2G em pantógrafos modernos."
    ],
    commonErrors: [
      "❌ Deixar o bastidor bater no braço da máquina no limite do eixo X por carregar matriz maior que a área útil.",
      "❌ Falta de lubrificação periódica nas guias do eixo X, gerando travamento e perda de sincronismo nos pontos.",
      "❌ Bater a mão ou puxar o bastidor com a máquina ligada, forçando o motor de passo e descalibrando a origem X."
    ],
    troubleshootingTips: [
      "O contorno do bordado está deslocado apenas para o lado esquerdo ou direito: a correia do eixo X está frouxa ou o motor perdeu passos; ajuste a tensão da correia dentada e limpe fiapos das guias lineares.",
      "A máquina deu erro 'X-Axis Limit Over': a matriz ultrapassa o limite físico do bastidor selecionado; reduza a escala do desenho ou centralize o bastidor no painel.",
      "Barulho seco ou rangido ao movimentar lateralmente: aplique óleo mineral técnico ISO VG 32 nas hastes cilíndricas do eixo X e limpe a poeira têxtil acumulada."
    ],
    dicaArtrelados: "Nunca empurre o pantógrafo do eixo X com a mão enquanto a máquina estiver ligada! Os servomotores geram corrente reversa que pode queimar a placa de controle. Se precisar reposicionar manualmente, use sempre as setas do painel digital da máquina.",
    voceSabia: "Nas primeiras máquinas de bordar manuais do século XIX (sistema pantógrafo Heilmann), o eixo X e o eixo Y eram movidos manualmente pelo operador através de uma alavanca mecânica longa que seguia uma prancha desenhada com seis vezes o tamanho real do bordado!",
    practicalExercise: "No painel da sua máquina de bordar, acesse o modo de rastreamento (Trace/Outline). Observe como o braço do pantógrafo se desloca no eixo X horizontal e verifique se o calcador mantém uma folga segura de pelo menos 1 cm das bordas internas do bastidor.",
    quickSummary: "Eixo horizontal do pantógrafo responsável por mover o bastidor lateralmente com precisão centesimal para formar cada ponto da matriz.",
    relatedTerms: ["Y-Axis (Eixo Y)", "Z-Axis (Eixo Z)", "Pantógrafo", "Servomotor", "Passo de Ponto", "Coordenadas Cartesianas", "DST Format"],
    tags: ["xaxis", "eixox", "pantografo", "mecanica", "coordenadas", "hardware", "manutencao"]
  },
  {
    id: "x-ray-view-visualizacao-raio-x-cad",
    code: "X-002",
    letter: "X",
    term: "X-Ray View — Visualização em Raio-X (Modo Wireframe & Inspeção de Camadas Ocultas CAD)",
    pronunciation: "éks-rêi viú — vi-zu-a-li-za-são em rai-u-shis (ˈɛks reɪ vjuː)",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'X-ray' (radiação X/raio-X descoberta por Wilhelm Röntgen em 1895) e 'view' (modo de visualização translúcida em softwares gráficos 3D e CAD de bordado).",
    summary: "Modo de exibição translúcido ou aramado no software de matrizes que revela pontos de suporte internos, trajetórias de salto e sobreposições ocultas sob o preenchimento.",
    definition: "O X-Ray View (Visualização em Raio-X / Modo Translúcido / Wireframe Inspection Mode / TrueView Transparency Layer) é uma funcionalidade gráfica presente em softwares profissionais de programação e edição de bordado (como Wilcom EmbroideryStudio, Embird, Wings e Hatch) que renderiza os blocos de pontos com níveis ajustáveis de opacidade (transparência de 20% a 80%) ou no formato de linhas de vetor esquemáticas. Esse modo permite ao digitador inspecionar visualmente o que está acontecendo por baixo das camadas superiores de satim e tatami, diagnosticando se o ponto de suporte (underlay), as amarrações e os fios de conexão estão devidamente estruturados sem excesso de acúmulo.",
    technicalDetails: "Ao alternar do modo fotorrealista 3D (TrueView) para o X-Ray View, o renderizador gráfico substitui o sombreado de filamentos por malhas semitransparentes com código de cores por camada ou profundidade de penetração. Isso permite identificar imediatamente 'pontos cegos' perigosos: áreas onde há mais de 4 camadas sobrepostas (que quebrariam agulhas), direções de ângulos de pontos de suporte cruzando-se incorretamente e conectores longos que deveriam ter sido cortados pelo comando trim.",
    beginnerExplanation: "É como ligar um 'raio-X' na tela do seu computador para enxergar o que está escondido debaixo do bordado bonito! Em vez de ver só a linha colorida brilhante por cima, você vê todas as camadas de sustentação, os pontos que prendem a linha e até os fios que viajam por baixo do desenho antes de mandar a matriz para a máquina.",
    howItWorks: [
      "1. O programador abre a matriz no software CAD e pressiona a tecla de atalho do modo Raio-X (ou reduz a opacidade do TrueView).",
      "2. O software converte a renderização sólida dos blocos em camadas translúcidas ou aramadas.",
      "3. O digitador inspeciona a distribuição dos pontos de suporte (tatami sob satim ou zigue-zague).",
      "4. Verifica-se se há acúmulos excessivos de pontos (Bulletproof Spots) em cruzamentos de letras.",
      "5. Identificam-se trajetos de conexão que podem ser embutidos de forma invisível sob outros elementos.",
      "6. Ajustam-se os parâmetros e retorna-se à visualização realista para conferência estética final."
    ],
    applications: [
      "Inspeção de densidade em matrizes complexas antes do teste de máquina.",
      "Verificação da ancoragem correta de pontos de suporte em bordados 3D Puff.",
      "Identificação de nós de travamento (Tie-In/Tie-Off) esquecidos ou mal posicionados.",
      "Otimização de rotas para reduzir cortes de linha automáticos e acelerar a produção."
    ],
    characteristics: [
      "Controle de opacidade camada por camada.",
      "Destaque de pontos de penetração com pequenos nós gráficos (Stitch Points).",
      "Diferenciação cromática entre pontos de sustentação, preenchimento e saltos."
    ],
    commonErrors: [
      "❌ Confiar apenas na visualização 3D sólida e deixar passar nós gigantes ocultos sob o preenchimento.",
      "❌ Programar pontos de suporte muito próximos da borda que vazam para fora da coluna satim.",
      "❌ Não verificar as sobreposições de cores, gerando placas duras como papelão no peito de camisetas."
    ],
    troubleshootingTips: [
      "A agulha quebra sempre no mesmo ponto da matriz: ligue o modo Raio-X no software e verifique se há 3 ou mais camadas sobrepostas naquele exato ponto; delete os pontos ocultos desnecessários.",
      "A máquina está cortando a linha toda hora: no modo Raio-X, observe se os fios de salto podem ser conectados por pontos de corrida (run stitches) por baixo do preenchimento.",
      "O contorno satim está afundando no tecido: confira no Raio-X se o underlay zigue-zague ou borda dupla (edge run) foi gerado corretamente sob a coluna."
    ],
    dicaArtrelados: "Antes de salvar qualquer matriz para enviar à máquina, aperte a tecla de atalho de visualização transparente no seu programa de edição e passe o cursor em velocidade acelerada. 90% dos erros de agulha quebrando ou tecido rasgando são descobertos nessa inspeção de 30 segundos!",
    voceSabia: "Os primeiros softwares de bordado computadorizado na década de 1980 só tinham o modo 'Raio-X' (linhas aramadas verdes sobre fundo preto em monitores fósforo verde), pois os computadores da época não tinham poder de processamento para calcular texturas 3D de linha em tempo real!",
    practicalExercise: "Abra uma matriz de monograma ou brasão no seu software de edição e ative a transparência dos pontos. Encontre a camada de subponto (underlay) e meça com a ferramenta de régua se ela está recuada pelo menos 0,4 mm da borda externa do satim.",
    quickSummary: "Modo de visualização transparente e aramada em softwares CAD que revela as estruturas internas, pontos de suporte e conexões ocultas da matriz.",
    relatedTerms: ["TrueView", "Underlay", "Wireframe", "Densidade", "Simulação de Bordado", "Wilcom", "Embird"],
    tags: ["xrayview", "raiox", "software", "wilcom", "wireframe", "programacao", "inspecao"]
  },
  {
    id: "x-stitch-ponto-cruz-eletronico",
    code: "X-003",
    letter: "X",
    term: "X-Stitch — Ponto Cruz Eletrônico (Digital Cross-Stitch & Matrizes em Grade)",
    pronunciation: "éks-stitxi — pon-tu kruz e-le-trô-ni-ku (ˈɛks stɪtʃ)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'X-stitch' ou 'cross-stitch' (ponto de cruz manual tradicional documentado desde a Idade Média) adaptado para algoritmos de computação gráfica matricial nos anos 1990.",
    summary: "Estilo de ponto programado que replica com precisão milimétrica o ponto cruz tradicional através de cruzamentos perfeitos de linhas sobre uma grade digital.",
    definition: "O X-Stitch (Ponto Cruz Eletrônico / Digital Cross-Stitch / Matriz de Ponto Cruz Computadorizado) é uma modalidade especializada de programação e costura em bordado de máquina que emula a estética artesanal do bordado tradicional feito à mão sobre tecido étamine ou linho. Gerado por módulos dedicados de software CAD (como Wilcom Cross Stitch Module ou Embird Cross Stitch), o desenho é decomposto em uma grade de células quadradas uniformes (geralmente de 1,5 mm a 3,0 mm de lado), onde cada célula recebe uma ou mais passagens de ponto em diagonal cruzada formando um 'X' perfeito.",
    technicalDetails: "Para garantir que o ponto cruz eletrônico tenha volume visual semelhante ao feito à mão com meadas de algodão, os algoritmos do software configuram cada perna do 'X' com 2 a 4 repetições de costura (Single Pass, Double Pass ou French Knot Cross). O trajeto de deslocamento entre os 'Xs' adjacentes é otimizado automaticamente pelo software para viajar pelas costas da grade, evitando fios passantes na face e garantindo que todas as diagonais superiores cruzem exatamente na mesma orientação (por exemplo, barra de baixo no sentido / e barra de cima no sentido \\).",
    beginnerExplanation: "É o clássico ponto cruz de vovó feito na máquina de bordar moderna! O computador divide o desenho em quadradinhos perfeitos e a máquina faz cada 'X' com rapidez e perfeição impressionantes, parecendo que foi bordado à mão durante meses em questão de minutos!",
    howItWorks: [
      "1. Uma imagem bitmap (pixel art ou gráfico de ponto cruz) é importada para o módulo de Cross Stitch.",
      "2. Define-se o tamanho da grade (ex.: 2 mm para efeito padrão ou 1,5 mm para alta definição).",
      "3. Escolhe-se a espessura do ponto (se cada diagonal terá 2, 3 ou 4 passagens de linha).",
      "4. O software gera a sequência contínua de pontos minimizando saltos de linha entre as cruzes.",
      "5. O tecido (toalha de lavabo, linho, algodão ou sarja) é montado no bastidor com entretela rasgável ou solúvel.",
      "6. A máquina costura a matriz com velocidade moderada (500 a 650 PPM) para manter o alinhamento das cruzes.",
      "7. O resultado é um bordado com relevo macio, toque artesanal e geometria impecável."
    ],
    characteristics: [
      "Visual retrô e artesanal indistinguível do bordado manual.",
      "Estrutura leve e respirável com baixo repuxamento do tecido.",
      "Padronização rigorosa do sentido de cruzamento das diagonais."
    ],
    applications: [
      "Barrados de toalhas de banho e rosto infantis com temas lúdicos.",
      "Panos de prato de cozinha, aventais e toalhas de mesa rústicas.",
      "Quadros decorativos e bastidores de parede (Hoop Art) com frases e monogramas.",
      "Enxovais de bebê personalizados em piquê e percal."
    ],
    commonErrors: [
      "❌ Bordar ponto cruz em alta velocidade (acima de 800 PPM), fazendo as cruzes ficarem tortas pela inércia.",
      "❌ Usar linha grossa de algodão em agulha fina 75/11, causando desfiamento e quebras frequentes.",
      "❌ Deixar o tecido frouxo no bastidor, descombinando o encontro exato das pontas dos 'Xs'."
    ],
    troubleshootingTips: [
      "Os pontos em 'X' estão ficando magros e com o tecido aparecendo por baixo: no software, aumente o número de passagens (de 2 para 3 ou 4 repetições por braço) ou use linha de bordar calibre 30 em vez do calibre 40 tradicional.",
      "As cruzes estão desencontradas: verifique a tensão do tecido no bastidor; use bastidor bem ajustado com entretela de boa gramatura (80g) para que a grade não sofra distorção durante a costura.",
      "A linha superior desfiou no meio do ponto cruz: reduza a velocidade da máquina para 600 PPM e utilize agulha ponta redonda (Ball Point 75/11 ou 80/12 Topstitch com olho largo)."
    ],
    dicaArtrelados: "Para dar um aspecto ainda mais fiel ao bordado feito à mão, experimente utilizar linha de bordar fosca (como poliéster fosco Frosted Matt ou linha de algodão calibre 30/40) em vez da linha brilhante tradicional. Seus clientes vão jurar que você bordou ponto a ponto com agulha de mão!",
    voceSabia: "O ponto cruz é uma das formas de bordado mais antigas da humanidade, com fragmentos arqueológicos preservados em tumbas do Antigo Egito (500 a.C.) e na Rota da Seda na Ásia Central!",
    practicalExercise: "Crie uma matriz simples de um coração ou letra inicial no módulo de ponto cruz do seu software com grade de 2,0 mm e 2 repetições por haste. Borde em um retalho de tecido de algodão a 600 PPM e compare o resultado visual com um bordado satim tradicional.",
    quickSummary: "Ponto digital programado em grade ortogonal que replica o charme e a textura do ponto cruz manual com precisão eletrônica.",
    relatedTerms: ["Cross-Stitch Module", "Ponto Decorativo", "Ponto de Corrida", "Grade Vetorial", "Linha Fosca", "Pixel Art"],
    tags: ["xstitch", "pontocruz", "artesanal", "decorativo", "toalhas", "enxoval", "wilcom"]
  },
  {
    id: "x-tack-ponto-travamento-cruzado",
    code: "X-004",
    letter: "X",
    term: "X-Tack — Ponto de Travamento em X (Tie-In & Tie-Off Cruzado de Alta Fixação)",
    pronunciation: "éks-ték — pon-tu de tra-va-men-tu em shis (ˈɛks tæk)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'tack' (pregar/afixar provisoriamente ou com firmeza) associado à geometria em 'X' para distribuição multidirecional de forças de tração.",
    summary: "Padrão de arremate de início ou fim de costura formado por microcruzamentos que ancoram a linha com máxima resistência sem gerar nós volumosos.",
    definition: "O X-Tack (Ponto de Travamento em X / Cruz de Ancoragem / Cross-Tack Tie-Off / Micro-X Knot Lock) é uma rotina programada de micro-pontos de amarração (comprimento de 0,5 mm a 1,0 mm) dispostos em formato de 'X' ou asterisco compacto, executada no início (Tie-In) ou imediatamente antes do corte de linha (Tie-Off) de um objeto de bordado. Projetado especificamente para bordados de alta solicitação mecânica (uniformes industriais, peças esportivas, bonés e couro), o travamento em X distribui a tensão de tração em quatro eixos angulares concorrentes, impedindo que a ponta da linha seja puxada para a frente da peça ou desfaça após sucessivas lavagens.",
    technicalDetails: "Ao contrário dos travamentos lineares convencionais (Line Tie-Off ou Star Lock unidirecional), que podem escorregar facilmente se o corte da tesoura automática for muito rente à laçada da bobina, o X-Tack cria um entrelaçamento mecânico tridimensional com a entretela e o tecido. O software CAD programa 4 a 6 penetrações em coordenadas opostas (+X/+Y, -X/-Y, +X/-Y, -X/+Y) com micro-distanciamento calibrado para evitar que a agulha perfure o mesmo orifício mais de uma vez (o que cortaria o próprio fio da bobina).",
    beginnerExplanation: "É um pequeno nózinho invisível em forma de 'X' que a máquina faz bem no comecinho ou no finalzinho de cada bordado. Ele funciona como uma âncora que prende a ponta da linha tão firme no tecido que ela nunca mais solta, nem mesmo quando a roupa vai para a máquina de lavar várias vezes!",
    howItWorks: [
      "1. A máquina posiciona a agulha no ponto de início ou final do bloco de satim/tatami.",
      "2. Executa um micro-ponto na diagonal superior direita de 0,8 mm.",
      "3. Retorna ao centro e cruza na diagonal superior esquerda.",
      "4. Repete o cruzamento inferior formando um 'X' minúsculo e compacto.",
      "5. A linha de cima e a linha da bobina entrelaçam-se firmemente sob a fibra do tecido.",
      "6. A máquina inicia o bordado do elemento ou aciona o cortador de linha (trimmer) com segurança total contra desfiamento."
    ],
    characteristics: [
      "Resistência superior a arrancamento e tração mecânica.",
      "Perfil plano que não cria carocinhos ou nós desconfortáveis no avesso.",
      "Eliminação do risco de desmanche após o corte automático de linha."
    ],
    applications: [
      "Uniformes profissionais, roupas de trabalho pesado e calças jeans.",
      "Bordados em artigos esportivos submetidos a alto atrito e estiramento.",
      "Fixação de cantos e vértices em apliques termocolantes e patches.",
      "Finalização de colunas satim finas e monogramas pequenos em camisaria."
    ],
    commonErrors: [
      "❌ Programar o X-Tack com tamanho microscópico (menos de 0,3 mm), furando o mesmo buraco e rasgando a entretela.",
      "❌ Esquecer de ativar o ponto de travamento em letras pequenas, fazendo os fios desmancharem com o uso.",
      "❌ Deixar o X-Tack fora do preenchimento, fazendo o nózinho aparecer do lado de fora da letra."
    ],
    troubleshootingTips: [
      "A ponta do bordado está desmanchando depois de cortar o excesso de linha no avesso: ative a opção de travamento em X (Cross Lock / X-Tack) nas propriedades de corte do seu software de matrizes.",
      "A máquina fura o tecido e faz um nó embolado na saída da agulha: aumente o raio do X-Tack de 0,4 mm para 0,8 mm para que a agulha não caia no mesmo orifício repetidamente.",
      "O nó de travamento ficou visível na frente da peça: marque a opção 'Auto Tie-Off Inside Fill' para que o software esconda o X-Tack 1 mm para dentro do preenchimento principal."
    ],
    dicaArtrelados: "Para bordar peças infantis e enxovais de bebê sem que o avesso fique áspero ou com nós grossos que pinicam a pele sensível da criança: configure o travamento da sua matriz com X-Tack de 0,7 mm embutido sob o satim. O acabamento fica super seguro e o avesso plano como veludo!",
    voceSabia: "O princípio do ponto de travamento cruzado foi adaptado dos paraquedas militares da Segunda Guerra Mundial, onde as fitas de náilon de sustentação eram costuradas obrigatoriamente em padrão de 'X envolto em caixa' (Box-X Stitch) para garantir que nenhuma costura se soltasse sob choque violento!",
    practicalExercise: "Abra um arquivo de matriz no seu software e vá até as propriedades de amarração (Connectors / Tie-In & Tie-Off). Altere o tipo de travamento simples para 'Cross/X' e faça o teste visual em zoom de 600% para verificar se o X ficou totalmente escondido sob o início da coluna.",
    quickSummary: "Ponto de ancoragem cruzado em microformato de 'X' que trava as extremidades da linha com alta tenacidade sem formar caroços no avesso.",
    relatedTerms: ["Tie-In", "Tie-Off", "Arremate", "Trimmer", "Ancoragem", "Conectores", "Nó de Bobina"],
    tags: ["xtack", "travamento", "arremate", "tieoff", "resistencia", "programacao", "seguranca"]
  },
  {
    id: "x-basting-alinhavo-cruzado-diagonal",
    code: "X-005",
    letter: "X",
    term: "X-Basting — Alinhavo Cruzado em X (Diagonal Basting Grid & Fixação Flutuante)",
    pronunciation: "éks-bêis-ting — a-li-nha-vu kru-za-du em shis (ˈɛks ˈbeɪstɪŋ)",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'basting' (alinhavo provisório de costura manual) combinado com o padrão geométrico diagonal de reforço em 'X' cruzado.",
    summary: "Estrutura de alinhavo provisório de pontos largos costurada em diagonais cruzadas para prender mantas, veludos e tecidos grossos na entretela antes do bordado.",
    definition: "O X-Basting (Alinhavo Cruzado em X / Grade Diagonal de Alinhavo / Cross Basting Box / Diagonal Tackdown Stitch) é uma técnica de preparação e estabilização de bastidor na qual a máquina costura linhas de ponto de corrida longo (comprimento de 4,0 mm a 6,0 mm com tensão reduzida) formando um quadro perimetral com duas grandes diagonais interceptadas em 'X' cobrindo o tecido e a entretela. Amplamente utilizada na técnica de 'bordado flutuante' (Floating Method) e na fixação de mantas acrílicas (R1/R2), jaquetas acolchoadas e tecidos delicados que não podem ser prensados no aro do bastidor.",
    technicalDetails: "Ao traçar as diagonais cruzadas em 'X' além da moldura retangular convencional, o X-Basting anula as tensões de cisalhamento e o deslocamento elástico bidirecional do tecido. Enquanto o alinhavo retangular simples prende apenas as bordas, o centro da peça pode estufar como uma bolha (efeito colchão) durante a costura de preenchimentos densos; as diagonais do 'X' neutralizam o deslocamento do tecido no centro geométrico do bastidor, garantindo estabilidade absoluta.",
    beginnerExplanation: "É uma costura rápida com pontos bem compridos que a máquina faz em forma de 'X' e de moldura para prender o tecido na entretela antes de começar o desenho de verdade. Como os pontos são bem frouxos e compridos, depois que o bordado termina você puxa a pontinha da linha e ela sai inteira num segundo sem deixar marcas!",
    howItWorks: [
      "1. Coloca-se apenas a entretela firme no aro do bastidor.",
      "2. Pulveriza-se cola temporária e posiciona-se o tecido ou a manta flutuando por cima.",
      "3. Seleciona-se a função de alinhavo (Basting) no painel da máquina ou o arquivo de X-Basting.",
      "4. A máquina costura a moldura externa e duas diagonais em 'X' cruzando o centro com pontos largos de 5 mm.",
      "5. O tecido e a entretela ficam firmemente acoplados sem nenhuma folga ou bolha de ar.",
      "6. A máquina executa a matriz principal de bordado por cima da área estabilizada.",
      "7. Ao término, a linha do X-Basting é cortada e puxada facilmente com uma pinça."
    ],
    characteristics: [
      "Pontos longos de fácil remoção sem agredir a trama do tecido.",
      "Fixação completa do centro e das bordas da peça flutuante.",
      "Eliminação definitiva de marcas de aro em tecidos aveludados e sintéticos."
    ],
    applications: [
      "Bordados flutuantes em toalhas atoalhadas grossas, veludo e camurça.",
      "Fixação de mantas para confecção de nécessaires estruturadas e matelassê (In-The-Hoop).",
      "Estabilização de peças já confeccionadas (bolsos de camisa, mangas e barras).",
      "Bordados em couro legítimo e sintético que sofreriam marcas permanentes pelo bastidor."
    ],
    commonErrors: [
      "❌ Fazer o alinhavo com ponto curto (menos de 2,5 mm), tornando a remoção da linha um pesadelo que pode furar o tecido.",
      "❌ Usar linha de cor forte contrastante que solte tinta no tecido claro durante o alinhavo.",
      "❌ Deixar o X-Basting passar por dentro de áreas de satim denso, prendendo a linha de alinhavo por baixo do bordado."
    ],
    troubleshootingTips: [
      "O tecido estufou no meio do bastidor durante o bordado de preenchimento: adicione a linha de alinhavo em 'X' para travar o centro da peça antes de costurar os tatamis densos.",
      "A linha do alinhavo ficou presa sob o bordado e não quer sair: programe o X-Basting para contornar apenas a área externa da matriz com recuo de 5 mm ou use linha solúvel em água para alinhavar.",
      "O veludo ficou marcado pelo bastidor: não aperte o tecido no aro; prenda só a entretela no bastidor e fixe o veludo por cima usando o X-Basting flutuante."
    ],
    dicaArtrelados: "Para remover o alinhavo em 'X' em dois segundos sem puxar fios do seu tecido: use sempre linha de bobina fina 100% poliéster na agulha para fazer a costura de alinhavo. Por ser uma linha lisa e sem atrito, ela desliza para fora do tecido como manteiga quando você puxa!",
    voceSabia: "O termo 'baste' vem do francês antigo 'bâtir' (construir/estruturar provisoriamente), o mesmo étimo que deu origem à palavra 'bastidor'!",
    practicalExercise: "Coloque uma folha de entretela rasgável no bastidor. Posicione um pedaço de tecido atoalhado por cima sem prender no aro. Programe um quadro com 'X' interno de pontos de 5 mm e borde. Sinta como o tecido fica 100% firme e plano para receber qualquer bordado.",
    quickSummary: "Padrão de alinhavo provisório em moldura e diagonais em 'X' com pontos largos para fixar peças e mantas flutuantes no bastidor.",
    relatedTerms: ["Basting Stitch", "Bordado Flutuante", "Floating Method", "Manta R1/R2", "Marcas de Bastidor", "Alinhavo Perimetral"],
    tags: ["xbasting", "alinhavo", "flutuante", "bastidor", "estabilizacao", "veludo", "toalhas"]
  },
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

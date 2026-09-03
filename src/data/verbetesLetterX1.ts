import { Verbete } from "../types";

export const VERBETES_LETTER_X1: Verbete[] = [
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
    imageUrl: "/images/x001_eixo_x_pantografo_v1.jpg?v=1",
    imageCaption: "Anatomia do Eixo X (X-Axis): o sistema de movimentação horizontal do pantógrafo por correias dentadas e o plano cartesiano que desloca o bastidor a cada ponto da matriz.",
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
    imageUrl: "/images/x002_xray_view_cad_v1.jpg?v=1",
    imageCaption: "Prancha Técnica da Visualização em Raio-X (X-Ray View CAD): corte didático de inspeção em software de matrizes mostrando a transição entre o ponto cheio superficial renderizado e a malha translúcida interna, revelando as camadas ocultas de suporte (underlay zigue-zague e borda), trajetos de salto e pontos de penetração em traço preto nanquim puro de alto contraste.",
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
    imageUrl: "/images/x003_xstitch_eletronico_v3.jpg?v=3",
    imageCaption: "Ilustração Técnica do Ponto Cruz no Bordado Eletrônico Computadorizado (X-Stitch): cabeçote da máquina de bordar com barra de agulha e calcador circular de bordado autêntico com mola vertical operando sobre bastidor eletrônico retangular acoplado ao pantógrafo, formando os pontos em cruz perfeitos (X) no tecido tensionado, em traço preto nanquim puro de alto contraste sobre fundo branco límpido e sem requadros.",
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
  }
];

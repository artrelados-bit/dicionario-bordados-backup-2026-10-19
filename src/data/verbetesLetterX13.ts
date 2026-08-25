import { Verbete } from "../types";

export const VERBETES_LETTER_X13: Verbete[] = [
  {
    id: "x-axis-servo-drive-pantograph-servomotor-eixo-x",
    code: "X-061",
    letter: "X",
    term: "X-Axis Servo Drive & Closed-Loop Feedback — Servomotor de Malha Fechada e Encoder Óptico do Eixo X",
    pronunciation: "éks-ék-sis sér-vo dráiv end clôusd luup fíd-bék — ser-vo-mo-tor de ma-lha fe-sha-da do êi-shu shis",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim cartesiano 'axis' (eixo linear), do latim 'servus' (servomecanismo escravo de controle) e do inglês 'encoder' (transdutor de posição angular rotativo digital).",
    summary: "Sistema mecatrônico de alta resposta que movimenta o pantógrafo horizontalmente com monitoramento contínuo de posição para eliminar perda de passos a 1.200 PPM.",
    definition: "O X-Axis Servo Drive & Closed-Loop Feedback (Servomotor Brushless AC de Malha Fechada do Eixo X / Driver Digital e Encoder Óptico de Alta Resolução / Pantograph Horizontal Motion Drive) é o subsistema de potência e controle eletromecânico responsável por acelerar, desacelerar e posicionar o carro horizontal do bastidor com precisão submilimétrica. Diferente dos motores de passo convencionais de malha aberta (Open-Loop), o servomotor incorpora um encoder óptico rotativo de alta resolução (típico de 2.500 a 10.000 pulsos por revolução) que envia leituras de posição angular em tempo real à CPU a cada 100 microssegundos, corrigindo instantaneamente qualquer desvio inercial ou sobrecarga.",
    technicalDetails: "O algoritmo de controle PID (Proporcional-Integral-Derivativo) integrado ao DSP do driver calibra o torque dinâmico em frações de milissegundo durante transições bruscas de salto (Jump) ou preenchimentos tatami horizontais de alta frequência. Em caso de colisão mecânica acidental do bastidor contra o cabeçote, a defasagem entre o pulso de comando e a leitura real do encoder dispara o alarme 'X-Axis Position Deviation Error / Driver Fault', desativando a alimentação em menos de 5 ms para proteger a integridade do motor e das placas de potência.",
    beginnerExplanation: "É o 'músculo inteligente' de alta tecnologia da máquina que empurra o bastidor para a esquerda e para a direita! Ele tem um sensor especial que confere milhares de vezes por segundo se o bastidor andou exatamente a distância mandada pela matriz. Se o bastidor enroscar em algo, ele percebe na hora e para a máquina antes de quebrar qualquer peça.",
    howItWorks: [
      "1. A placa controladora da máquina calcula a coordenada horizontal requerida pelo próximo ponto da matriz.",
      "2. O sinal digital de comando é enviado ao servo driver do eixo X com perfil de aceleração em curva S.",
      "3. O servomotor AC converte a corrente trifásica modulada em torque mecânico preciso no fuso ou correia.",
      "4. O pantógrafo se desloca horizontalmente com o bastidor enquanto a agulha sobe no ciclo de costura.",
      "5. O encoder óptico lê a rotação real do eixo e envia o feedback de confirmação para a CPU.",
      "6. A CPU compara a posição real com a programada e faz microcorreções de frações de mícron em milissegundos.",
      "7. O bastidor atinge a coordenada exata com estabilidade absoluta no instante em que a agulha desce para costurar."
    ],
    applications: [
      "Movimentação dinâmica do pantógrafo em máquinas industriais multicabeçotes em velocidades de até 1.200 PPM.",
      "Preservação do alinhamento perfeito de contornos em matrizes grandes de jaquetas e bandeiras.",
      "Deslocamento suave de bastidores pesados de boné e bastidores de bordado contínuo em rolo.",
      "Eliminação de distorções por inércia em saltos longos (Jumps) de um lado ao outro do campo de trabalho."
    ],
    characteristics: [
      "Controle de malha fechada (Closed-Loop) com encoder de até 10.000 pulsos por volta.",
      "Aceleração instantânea suave com supressão ativa de ressonância mecânica.",
      "Proteção térmica e proteção eletrônica inteligente contra sobrecorrente e colisão."
    ],
    commonErrors: [
      "❌ Puxar ou forçar o bastidor manualmente com a máquina ligada, gerando corrente reversa e forçando o encoder.",
      "❌ Deixar acumular poeira têxtil e fiapos de linha sobre as aletas de ventilação do servo driver na caixa elétrica.",
      "❌ Operar com correias dentadas do eixo X frouxas, criando folga elástica que confunde o encoder."
    ],
    troubleshootingTips: [
      "A máquina exibe erro 'X-Axis Error / Servo Alarm': verifique se o bastidor não está travado em algum obstáculo físico; limpe as guias lineares e reinicie a máquina para zerar a contagem de pulsos.",
      "O bordado está perdendo o alinhamento horizontal gradualmente ao longo de 20.000 pontos: a correia dentada de acoplamento do servomotor está descalibrada ou gasta; estique ou substitua a correia.",
      "O motor do eixo X emite um chiado agudo contínuo em repouso: o ganho proporcional (Gain PID) no inversor está excessivamente alto; chame o técnico para recalibrar os parâmetros de amortecimento do driver."
    ],
    dicaArtrelados: "Mantenha a caixa elétrica e os motores da sua máquina sempre limpos com um pincel macio seco ou ar comprimido leve! A poeira de linha de poliéster conduz eletricidade estática e pode aquecer os módulos de potência dos servomotores.",
    voceSabia: "Os primeiros servomotores industriais de malha fechada foram adaptados para máquinas de bordar no início dos anos 1990 no Japão, permitindo que a velocidade de produção saltasse de 600 PPM para mais de 1.000 PPM mantendo os contornos cravados!",
    practicalExercise: "Com a máquina ligada e parada no painel, tente empurrar o braço do pantógrafo no eixo X delicadamente com um dedo: sinta a força mecânica de resistência que o servomotor exerce ativamente para manter a posição travada como uma rocha.",
    quickSummary: "Servomotor inteligente com encoder de malha fechada que move o pantógrafo no eixo X com monitoramento contínuo de alta precisão.",
    relatedTerms: ["X-Axis", "Servomotor", "Encoder Óptico", "Pantógrafo", "Closed-Loop", "PPM", "Driver Digital"],
    tags: ["xaxisservo", "servomotor", "encoder", "hardware", "mecanica", "eixox", "manutencao"]
  },
  {
    id: "x-stitch-digital-punching-ponto-cruz-computadorizado",
    code: "X-062",
    letter: "X",
    term: "X-Stitch Digital Punching — Programação e Digitalização de Ponto Cruz Computadorizado (Cross-Stitch Matrix)",
    pronunciation: "éks-stítch dí-ji-tal pán-ching — pro-gra-ma-são de pon-to cruz com-pu-ta-do-ri-za-do",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'cross stitch' (ponto em cruz formado por dois pontos diagonais sobrepostos em X) e 'punching/digitizing' (arte de programar e perfurar comandos de bordado digital).",
    summary: "Técnica de programação em software CAD que simula com perfeição o ponto cruz artesanal em grade regular, controlando passagens e ordem de cruzamento.",
    definition: "O X-Stitch Digital Punching (Digitalização de Ponto Cruz Computadorizado / Módulo Cross-Stitch CAD / Orthogonal Grid Punching) é a metodologia técnica de criação de matrizes de bordado estruturadas sobre uma malha ortogonal uniforme de células quadradas, onde cada pixel do desenho é convertido em dois pontos lineares diagonais sobrepostos formando um 'X' perfeito. O software calcula rotas otimizadas para que todos os pontos inferiores da diagonal sigam rigorosamente a mesma orientação (ex.: sudoeste para nordeste) e todos os pontos superiores cruzem na direção oposta, conferindo o aspecto clássico, uniforme e nobre do bordado manual tradicional sobre etamine ou linho.",
    technicalDetails: "A resolução do ponto cruz digital é definida pela contagem de nós por polegada ou milímetro (típico de 10 a 18 cruzamentos por polegada / 1,4 mm a 2,5 mm por célula). Cada cruzamento pode ser configurado com repetição simples (2 passagens de fio) ou pespontada (3 a 4 passagens de fio - French/Triple Cross) para dar relevo e cobertura. O algoritmo de ramificação (Auto-Branching Cross-Stitch) conecta centenas de cruzes vizinhas de mesma cor através de trajetórias sob os fios sem gerar cortes automáticos, reduzindo o tempo de máquina em até 70%.",
    beginnerExplanation: "É o jeito mágico de fazer a máquina de bordar moderna fazer aquele ponto cruz clássico da vovó! O programa divide o desenho em quadradinhos perfeitos e a máquina costura um 'X'zinho em cada um deles com toda a perfeição e rapidez do mundo!",
    howItWorks: [
      "1. A programadora abre o módulo de ponto cruz (Cross Stitch) no software Wilcom ou PE-Design.",
      "2. Define o tamanho da grade (ex.: células de 2,0 mm de largura por 2,0 mm de altura).",
      "3. Importa o gráfico ou desenha os motivos florais, infantis ou geométricos preenchendo as células com cores.",
      "4. O software calcula automaticamente a sequência de costura cruzando todas as perninhas dos 'X' na mesma direção.",
      "5. A matriz é salva e enviada para a máquina com linha de poliéster 40wt ou algodão 50wt.",
      "6. A máquina borda centenas de cruzes milimetricamente idênticas em poucos minutos.",
      "7. A peça ganha acabamento artesanal nostálgico com a velocidade da produção eletrônica."
    ],
    applications: [
      "Toalhas de lavabo, panos de prato e semaninhas com motivos florais e rústicos.",
      "Quadros decorativos de maternidade, monogramas clássicos e temas infantis.",
      "Enxovais em estilo provençal, toalhas de mesa de piquenique e almofadas rurais.",
      "Reprodução de gráficos de revistas clássicas de ponto cruz em matrizes de máquina."
    ],
    characteristics: [
      "Grade matemática perfeitamente homogênea sem distorções de escala.",
      "Orientação idêntica dos cruzamentos superiores para reflexo de luz uniforme.",
      "Visual aconchegante e afetivo com alta velocidade de execução computadorizada."
    ],
    commonErrors: [
      "❌ Programar cruzes minúsculas de 0,8 mm com tecido grosso, criando amontoados de linha que quebram a agulha.",
      "❌ Misturar direções de cruzamento superior na mesma cor, deixando o bordado com aparência manchada e desleixada.",
      "❌ Bordar sobre malha elástica fina sem entretela rasgável firme, entortando o esquadro dos quadrados."
    ],
    troubleshootingTips: [
      "O ponto cruz ficou ralo e o tecido de fundo aparece no meio dos 'X': aumente o número de passagens por perna de 2 para 3 (Triple Pass) no software para dar mais volume à linha.",
      "As cruzes estão saindo retangulares e esticadas: confira no software se a proporção da grade está cravada em 1:1 (largura igual à altura).",
      "O tecido enrugou no meio das flores de ponto cruz: utilize entretela rasgável de 60g a 80g bem presa no bastidor e ative o ponto de alinhavo prévio."
    ],
    dicaArtrelados: "Para valorizar toalhas de lavabo e panos de prato: use linhas de algodão fosco ou linhas de poliéster acetinado em tons suaves! As clientes se encantam ao ver o efeito de ponto cruz perfeito feito na máquina em menos de 10 minutos!",
    voceSabia: "O ponto cruz é a forma mais antiga de bordado do mundo, com fragmentos arqueológicos preservados encontrados em túmulos do Antigo Egito e da China que datam de mais de 5.000 anos antes de Cristo!",
    practicalExercise: "No seu programa de matrizes, ative a ferramenta Cross-Stitch. Desenhe uma pequena florzinha de 8 pétalas usando células de 2,2 mm. Borde em um retalho de etamine ou tecido de algodão e compare a uniformidade com um bordado à mão.",
    quickSummary: "Digitalização de matrizes em malha ortogonal que reproduz o clássico ponto cruz artesanal com nós e cruzamentos milimetricamente alinhados.",
    relatedTerms: ["Cross-Stitch", "Ponto Cruz", "Etamine", "Wilcom Cross Stitch", "Grade Ortogonal", "Auto-Branching"],
    tags: ["xstitch", "pontocruz", "crossstitch", "programacao", "cad", "artesanal", "vintage"]
  },
  {
    id: "x-ray-density-heat-map-mapa-calor-densidade-matriz",
    code: "X-063",
    letter: "X",
    term: "X-Ray Stitch Density Heat Map — Mapa de Calor e Análise Radiográfica de Densidade de Pontos (Color-Coded Stress Analysis)",
    pronunciation: "éks-rêi stítch dên-si-ti híit map — ma-pa de ca-lor e a-ná-li-ze ra-dio-grá-fi-ca de den-si-da-de",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'heat map' (gráfico de representação térmica por gradiente de cor) e 'X-ray density analysis' (método radiográfico digital de inspeção de concentração de matéria).",
    summary: "Ferramenta analítica do software que colore a matriz com gradientes térmicos (azul a vermelho) para identificar acúmulos perigosos de pontos que picotam o tecido.",
    definition: "O X-Ray Stitch Density Heat Map (Mapa Térmico de Densidade de Pontos / Análise Espectral de Concentração de Penetração / Color-Coded Needle Penetration Density Inspector) é um recurso diagnóstico avançado integrado a suítes profissionais de digitalização (como Wilcom ES, Pulse Signature e Wings). Ele gera uma visualização radiográfica colorida da matriz onde a paleta de cores original é substituída por um gradiente térmico: tons de verde e azul indicam densidades ideais e seguras, amarelo indica alerta de transição e vermelho/magenta indica áreas críticas de hiperdensidade (onde há acúmulo excessivo de agulhadas por milímetro quadrado).",
    technicalDetails: "O algoritmo calcula a densidade de penetração dividindo a área em células microscópicas de 1,0 mm² e contando a frequência de descidas de agulha. Áreas que ultrapassam 8 penetrações por milímetro quadrado são sinalizadas em vermelho vivo. O software permite acionar filtros automáticos de remoção de sobreposição (Auto-Filter / Density Reduction) e eliminação de pontos curtos inferiores a 0,4 mm (Short Stitches Cleanup), prevenindo a formação de 'nós duros' (Bulletproof Stitches) que cortam fibras têxteis e quebram agulhas.",
    beginnerExplanation: "É como um 'mapa de calor' que mostra onde o bordado está leve e onde está pesado demais! As partes que ficam azuis e verdes na tela estão perfeitas e macias; se aparecer alguma parte vermelha e brilhante, é um aviso de perigo de que tem linha demais junta naquele pedacinho, o que poderia furar a roupa ou quebrar a agulha da máquina.",
    howItWorks: [
      "1. A programadora abre o arquivo da matriz no software CAD e clica na ferramenta 'Mapa de Densidade / Density Map'.",
      "2. O visualizador 3D oculta as cores normais e renderiza a matriz em escala de cores térmicas.",
      "3. As regiões verdes representam preenchimentos normais com espaçamento equilibrado de 0,40 mm.",
      "4. As regiões amarelas mostram sobreposições de contorno satim sobre tatami.",
      "5. As manchas vermelhas alertam para pontos onde encontros de letras ou detalhes acumularam camadas triplas.",
      "6. A programadora utiliza a ferramenta de 'Alívio de Densidade' ou move os nós vetoriais para descongestionar a área.",
      "7. A matriz é salva limpa, macia, segura e pronta para bordar sem risco de quebras."
    ],
    applications: [
      "Auditoria de qualidade em matrizes baixadas da internet antes de bordar em roupas caras de clientes.",
      "Otimização de matrizes com muitos detalhes pequenos em tecidos finos (seda, cambraia e malha fria).",
      "Prevenção de quebra de agulhas e desgaste mecânico prematuro da barra de agulha da máquina.",
      "Redução de consumo de linha e tempo de produção em confecções de grande porte."
    ],
    characteristics: [
      "Identificação visual instantânea de pontos críticos e sobreposições invisíveis a olho nu.",
      "Gradiente espectral preciso calibrado de acordo com a espessura da linha (40wt vs 60wt).",
      "Integração com ferramentas automáticas de alívio e remoção de pontos sobrepostos."
    ],
    commonErrors: [
      "❌ Ignorar manchas vermelhas intensas no centro de letras minúsculas, resultando em tecido picotado como papelão.",
      "❌ Deixar preenchimentos de fundo sólidos por baixo de apliques de tecido sem aplicar a exclusão de área.",
      "❌ Reduzir a densidade da matriz inteira indiscriminadamente em vez de corrigir apenas os pontos vermelhos concentrados."
    ],
    troubleshootingTips: [
      "A agulha está batendo com estrondo forte 'tuc-tuc-tuc' em um detalhe do bordado: abra o mapa de calor no software e verifique se não há uma mancha vermelha de hiperdensidade naquele ponto exato; aplique remoção de pontos sobrepostos.",
      "O tecido de malha rasgou e abriu um buraco no contorno do desenho: a densidade do contorno sobre o fundo estava em nível crítico; elimine o fundo sob o contorno ativando a opção 'Remove Underlyings'.",
      "O bordado ficou duro como uma placa de plástico no peito da camiseta: visualize o mapa de calor e dilua a densidade geral de 0,38 mm para 0,44 mm."
    ],
    dicaArtrelados: "Crie o hábito de dar uma 'espiadinha radiográfica' no mapa de calor das suas matrizes antes de bordar! Se você comprou a matriz pronta na internet, essa checagem de 10 segundos no computador evita perder peças de clientes por causa de arquivos mal programados!",
    voceSabia: "Os algoritmos de mapa de calor usados em softwares de bordado derivam da mesma tecnologia matemática desenvolvida pela NASA para analisar o estresse térmico na fuselagem dos ônibus espaciais durante a reentrada na atmosfera da Terra!",
    practicalExercise: "No seu software, crie dois quadrados sobrepostos com preenchimento tatami de 0,40 mm. Ative a visualização de Densidade (Heat Map) e veja a área de cruzamento ficar imediatamente amarela/vermelha. Aplique o comando 'Remover Sobreposições' e veja a área voltar a ficar verde e segura!",
    quickSummary: "Mapa térmico espectral em softwares CAD que identifica visualmente o excesso de pontos e sobreposições perigosas na matriz.",
    relatedTerms: ["Densidade de Ponto", "TrueView", "Overlapping", "Bulletproof Stitching", "Compensação de Repuxo", "Auditoria de Matriz"],
    tags: ["xraydensity", "mapadecalor", "densidade", "auditoria", "qualidade", "softwares", "cad"]
  },
  {
    id: "xenon-arc-lightfastness-solidez-a-luz-de-fios",
    code: "X-064",
    letter: "X",
    term: "Xenon Arc Lightfastness Testing — Ensaio de Arco de Xenônio para Solidez e Resistência ao Desbotamento Solar de Linhas",
    pronunciation: "zé-non ark láit-fást-nes tês-ting — en-sai-u de ar-co de ze-nô-nio pa-ra so-li-dez a luz",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do elemento químico nobre gás xenônio (do grego 'xenos', estranho/raro) e normas internacionais têxteis de ensaio de fotodegradação (ISO 105-B02 e AATCC 16).",
    summary: "Teste laboratorial de fotodegradação que expõe linhas de bordado a lâmpadas de arco de xenônio para certificar resistência a anos de sol sem desbotar.",
    definition: "O Xenon Arc Lightfastness Testing (Ensaio Têxtil de Solidez à Luz com Lâmpada de Arco de Xenônio / Weather-Ometer Accelerated Photo-Aging / ISO 105-B02 Colorfastness to Artificial Light) é o protocolo laboratorial padronizado internacionalmente utilizado pelos fabricantes de fios nobres de bordado (como Isacord, Madeira Polyneon, Coats Sylko e Setta Lumina) para certificar a resistência fotoquímica dos corantes e polímeros contra a radiação solar ultravioleta (UV), calor e intempéries. O ensaio reproduz em poucas horas dentro de uma câmara de xenônio o equivalente a anos de exposição direta à luz solar natural e lavagens industriais.",
    technicalDetails: "As amostras de linha de poliéster e raiom são montadas em suportes de ensaio ao lado de fitas de lã padrão de calibração (Blue Wool Scale, graduada de 1 a 8). A câmara de arco de xenônio com filtros ópticos de vidro borossilicato emite radiação espectral contínua entre 300 nm e 800 nm com irradiância controlada de 1,10 W/m² a 420 nm e temperatura de painel negro de 63°C ± 2°C. As linhas de poliéster trilobal de alta tecnologia atingem Grau 7 a 8 na escala (excelente/máxima solidez), mantendo 98% da vivacidade da cor mesmo após 100 horas contínuas de radiação UV severa.",
    beginnerExplanation: "É o super-teste de laboratório onde as linhas de bordar são colocadas dentro de uma máquina com uma luz artificial ultra-forte que imita o sol mais quente do deserto! As melhores linhas passam no teste sem perder a cor e sem desbotar, garantindo que o logotipo no boné ou no uniforme de trabalho do seu cliente continue bonito e brilhante por anos e anos!",
    howItWorks: [
      "1. O laboratório têxtil enrola amostras dos cones de linha de poliéster em cartelas padronizadas.",
      "2. As cartelas são inseridas no compartimento rotativo da câmara de teste de arco de xenônio.",
      "3. As lâmpadas de xenônio acendem, emitindo radiação espectral idêntica à luz solar direta do meio-dia.",
      "4. O equipamento simula ciclos contínuos de luz intensa, umidade relativa de 50% e variações térmicas.",
      "5. A cada 24 horas, o espectrofotômetro digital afere a variação de cor (delta E) em relação à amostra original.",
      "6. A linha é classificada na escala internacional de solidez de 1 (péssima) a 8 (imune ao desbotamento).",
      "7. Os fios aprovados recebem selos de garantia de solidez solar e resistência ao cloro industrial."
    ],
    applications: [
      "Bordados em uniformes industriais, coletes de trânsito e roupas operacionais expostas ao sol diário.",
      "Bonés, chapéus de praia, jaquetas esportivas, toldos e capas náuticas de embarcações.",
      "Bandeiras oficiais, estandartes e peças comemorativas com exposição permanente ao tempo.",
      "Controle de qualidade de lotes de tingimento em indústrias e tecelagens de fios para bordado."
    ],
    characteristics: [
      "Simulação hiper-acelerada equivalente a mais de 3 anos de exposição solar intensa.",
      "Avaliação instrumental padronizada por espectrofotometria eletrônica (Delta E < 1.0).",
      "Conformidade com normas de qualidade globais ISO 105-B02 e AATCC Test Method 16.3."
    ],
    commonErrors: [
      "❌ Utilizar linhas de baixa qualidade sem procedência para bordar uniformes de equipes de campo que trabalham ao ar livre.",
      "❌ Usar linha de viscose raiom para bordar roupas com lavagem industrial frequente com cloro e exposição solar extrema.",
      "❌ Armazenar cones de linha expostos à luz solar direta na janela do ateliê por meses, degradando os fios antes do uso."
    ],
    troubleshootingTips: [
      "O bordado em uniformes desbotou após 3 meses de uso ao sol: substitua a linha por fios de 100% Poliéster Trilobal com certificação de solidez UV Grau 7/8 (ex.: Isacord ou Polyneon).",
      "A linha perdeu o brilho e ficou esbranquiçada: tratava-se de linha de raiom ou poliéster fiado de baixa solidez; utilize apenas filamentos contínuos trilobais tingidos em massa.",
      "Os cones guardados no ateliê estão arrebentando fácil: proteja seus estoques de linhas guardando os carretéis em gavetas, caixas organizadoras ou armários fechados longe da claridade solar."
    ],
    dicaArtrelados: "Para roupas que vão pegar muito sol e lavagem pesada (como uniformes de obras, bonés e toalhas de praia): use SEMPRE linha de Poliéster Trilobal de primeira linha! O poliéster não desbota no sol, resiste ao cloro da piscina e não arrebenta na máquina!",
    voceSabia: "As lâmpadas de arco de xenônio emitem uma luz branca tão potente e com espectro tão perfeito que também são utilizadas nos projetores gigantes dos cinemas IMAX e nos faróis dos maiores navios quebra-gelo do mundo!",
    practicalExercise: "Guarde uma amostra de bordado feito com sua linha de poliéster favorita em uma gaveta escura e coloque outra amostra idêntica colada na janela ensolarada do seu ateliê. Após 30 dias, compare ambas lado a lado: veja como a linha de qualidade superior mantém a cor 100% intacta!",
    quickSummary: "Ensaio laboratorial de fotodegradação acelerada com lâmpada de xenônio que comprova a resistência das linhas contra o desbotamento solar.",
    relatedTerms: ["Poliéster Trilobal", "Solidez à Luz", "ISO 105-B02", "Delta E", "Raiom vs Poliéster", "Resistência ao Cloro"],
    tags: ["xenonarc", "solidezdeluz", "fios", "poliester", "testeslaboratoriais", "qualidade", "durabilidade"]
  }
];

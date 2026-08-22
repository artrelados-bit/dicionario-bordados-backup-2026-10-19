import { Verbete } from "../types";

export const VERBETES_LETTER_X10: Verbete[] = [
  {
    id: "x-ray-stitch-density-heatmap-mapa-calor-densidade-x",
    code: "X-046",
    letter: "X",
    term: "X-Ray Stitch Density Heatmap — Mapa de Calor Raio-X de Densidade & Diagnóstico de Sobrecarga de Pontos",
    pronunciation: "éks-rêi stitsh dên-si-ti híit-mép — ma-pa de ka-lor rai-u shis de den-si-da-de",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'density heatmap' (mapa termográfico de densidade por gradiente de cores) e 'X-ray diagnostics' (análise profunda de sobreposição de camadas ocultas).",
    summary: "Ferramenta de diagnóstico visual no software CAD que pinta o bordado em cores térmicas (verde, amarelo e vermelho) para indicar áreas com excesso perigoso de agulhadas.",
    definition: "O X-Ray Stitch Density Heatmap (Mapa de Calor de Densidade em Raio-X / Análise Termográfica de Pontos / Stitch Overload Density Diagnostic / Color-Coded Layer Stress Map) é uma ferramenta de inspeção técnica disponível em softwares profissionais de programação (Wilcom, Hatch, Wings, Pulse). Essa função analisa a distribuição espacial de todas as penetrações de agulha e renderiza a matriz com uma escala termográfica de cores: áreas azuis e verdes indicam densidade normal e leve (3 a 5 pontos/mm²); áreas amarelas indicam atenção; e áreas vermelhas ou roxas alertam para sobrecargas críticas de pontos (mais de 12 agulhadas no mesmo milímetro quadrado).",
    technicalDetails: "A sobrecarga pontual (Bulletproof Zones) gera um estresse mecânico extremo sobre a agulha, causando deflexão, aquecimento por fricção acima de 180°C (que derrete filamentos de poliéster) e corte das fibras do tecido. Ao inspecionar o mapa de calor em raio-X, o programador aplica o filtro de remoção automática de sobreposições (Remove Overlaps) ou dilata o espaçamento entre pontos nas zonas vermelhas, eliminando quebras de agulha antes mesmo do arquivo ir para a máquina.",
    beginnerExplanation: "É como ligar uma 'câmera térmica' na tela do seu computador que mostra onde o bordado está muito pesado! As partes fofinhas e levinhas ficam verdinhas, mas onde tiver linha demais amontoada fica tudo vermelho gritando: 'Cuidado, aqui vai quebrar a agulha!' Isso permite consertar o desenho antes de estragar a roupa!",
    howItWorks: [
      "1. O programador finaliza a digitalização da matriz no software CAD.",
      "2. Clica no ícone do 'Mapa de Calor de Densidade' (Density Map / Stitch Heatmap).",
      "3. O software converte a imagem colorida em um gráfico térmico instantâneo.",
      "4. Zonas com preenchimentos normais e leves aparecem em verde claro.",
      "5. Zonas de encontro de letras, nós de travamento e cantos agudos acendem em vermelho intenso.",
      "6. O programador clica na ferramenta de otimização para aliviar as zonas vermelhas.",
      "7. A matriz fica equilibrada, macia ao toque e 100% segura para costura em alta velocidade."
    ],
    applications: [
      "Auditoria de qualidade em matrizes compradas na internet antes de bordar em roupas caras.",
      "Otimização de matrizes de alta produção para uniformes escolares e corporativos.",
      "Eliminação de placas duras e nós grossos em roupas de bebê e lingeries delicadas.",
      "Prevenção de quebra de agulhas finas 65/9 e 75/11 em máquinas de alta velocidade."
    ],
    characteristics: [
      "Gradiente visual de cores intuitivo de azul/verde até vermelho/preto.",
      "Cálculo matemático preciso de agulhadas por milímetro quadrado.",
      "Integração com ferramentas de limpeza e filtragem automática de pontos."
    ],
    commonErrors: [
      "❌ Ignorar as zonas vermelhas no mapa de calor e mandar a matriz para a máquina, furando o tecido do cliente.",
      "❌ Deixar nós de início e fim (Tie-Ins/Tie-Offs) empilhados na mesma coordenada em letras minúsculas.",
      "❌ Colocar 4 camadas de cores sólidas sobrepostas sem recortar o fundo."
    ],
    troubleshootingTips: [
      "O mapa de calor está todo vermelho em um logotipo corporativo: você sobrepôs o texto por cima do preenchimento sem recortar o fundo; selecione o texto e use o comando 'Weld / Remove Underneath' para remover os pontos de fundo.",
      "A agulha quebra sempre que entra em uma área amarela/vermelha: reduza a densidade do satim de 0,35 mm para 0,42 mm e alivie o subponto naquela região.",
      "O bordado fica duro como uma tábua no peito da camiseta: utilize o mapa de calor para identificar e diluir áreas com mais de 3 camadas de pontos sobrepostos."
    ],
    dicaArtrelados: "Baixou uma matriz da internet e está com medo de colocar na sua máquina? Abra no seu software de edição e ative o Mapa de Calor de Densidade! Se a tela ficar cheia de manchas vermelhas, faça a limpeza de pontos antes de bordar. Esse hábito salva suas agulhas e suas roupas!",
    voceSabia: "O conceito de mapa de calor (Heatmap) foi criado pelo estatístico francês Toussaint Loua em 1873 para mapear a densidade populacional e social dos bairros de Paris em tons de cores graduadas!",
    practicalExercise: "Abra uma matriz no seu programa de bordado e ative a ferramenta de visualização de densidade / mapa de calor. Identifique as áreas mais quentes (vermelhas) e veja como elas coincidem exatamente com os encontros e cruzamentos de letras.",
    quickSummary: "Mapa termográfico de cores que identifica visualmente o acúmulo excessivo de pontos e sobreposições perigosas na matriz antes do teste de máquina.",
    relatedTerms: ["Mapa de Calor", "Densidade", "Bulletproof Spot", "Remove Overlaps", "Wilcom", "Auditoria de Matriz", "Quebra de Agulha"],
    tags: ["xraydensity", "mapadecalor", "densidade", "auditoria", "qualidade", "software", "otimizacao"]
  },
  {
    id: "x-distortion-hoop-drag-compensation-arrasto-bastidor-x",
    code: "X-047",
    letter: "X",
    term: "X-Distortion & Hoop Drag Compensation — Compensação de Arrasto e Atrito do Bastidor no Eixo X em Grandes Formatos",
    pronunciation: "éks-dis-tór-shon end hup drég kom-pen-sêi-shon — com-pen-sa-são de ar-ras-to",
    level: "Avançado 🔴",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'hoop drag' (arrasto e atrito mecânico gerado pelo peso do tecido e do bastidor sobre a mesa da máquina) e 'distortion compensation' (ajuste dinâmico de coordenadas).",
    summary: "Técnica de compensação que neutraliza o atrito e o peso de toalhas grandes ou jaquetas arrastando sobre a mesa da máquina durante o movimento horizontal do eixo X.",
    definition: "O X-Distortion & Hoop Drag Compensation (Compensação de Arrasto do Bastidor no Eixo X / Atrito de Grandes Formatos / Pantograph Drag Resistance & Table Friction Management) é o conjunto de cuidados operacionais e parametrizações mecânicas aplicados para bordar peças pesadas e volumosas em bastidores de grande formato (como bastidores 200x300 mm, 360x360 mm ou quadros contínuos de toalhas de banhão). Quando a peça de roupa ou a toalha pesada cai para fora da mesa da máquina, seu peso gera uma força de arraste contrária ao movimento do eixo X, podendo causar atraso de resposta do motor e perda de alinhamento.",
    technicalDetails: "A força de atrito dinâmico (F_arraste = µ_tecido * N + Peso_Suspenso * sen(θ)) exerce um torque resistente sobre a correia dentada e o servomotor do eixo X. Se o peso da peça pendurada ultrapassar 1,5 kgf, o motor de passo pode perder pulsos durante acelerações rápidas de salto, gerando um deslocamento progressivo (Drift) de 1 mm a 3 mm no contorno final. A utilização de mesas extensoras lisas de teflon e suportes de alívio de peso elimina essa força parasita.",
    beginnerExplanation: "Quando você vai bordar uma toalha de banho bem grande e pesada ou um casacão de inverno, o pano fica pendurado para fora da máquina arrastando e pesando. Se você deixar solto, esse peso puxa o bastidor para o lado e o bordado sai todo torto! A compensação de arrasto é apoiar o tecido certinho na mesa para o bastidor correr leve como uma pluma!",
    howItWorks: [
      "1. A bordadeira instala a mesa extensora de apoio larga ao redor do braço da máquina.",
      "2. Monta a toalha pesada no bastidor grande de forma nivelada.",
      "3. Posiciona suportes laterais ou rolos de apoio para segurar as sobras de tecido caídas.",
      "4. No painel da máquina, ajusta a velocidade máxima para um nível seguro (650 a 700 PPM).",
      "5. O motor do eixo X desloca o bastidor com aceleração suave e sem resistência de peso.",
      "6. A agulha penetra no tecido com estabilidade milimétrica constante.",
      "7. Os contornos e sombras do bordado fecham com precisão cirúrgica de ponta a ponta."
    ],
    applications: [
      "Bordados em toalhas de banhão gigantes, roupões de banho e colchas de cama mateladas.",
      "Bordados de jaquetas de couro pesadas, coletes esportivos e sobretudos.",
      "Produção de cortinas decorativas, painéis de tapeçaria e estandartes de igreja.",
      "Bordados de grandes bandeiras em tecidos náuticos e sarjas pesadas."
    ],
    characteristics: [
      "Uso de mesas de apoio de baixo coeficiente de atrito.",
      "Ajuste conservador da velocidade do pantógrafo (600 a 700 PPM).",
      "Eliminação definitiva de perdas de passos por peso excessivo da peça."
    ],
    commonErrors: [
      "❌ Deixar uma toalha de 1 kg inteira pendurada no ar puxando o braço da máquina para baixo durante o bordado.",
      "❌ Bordar em altíssima velocidade (1.000 PPM) com bastidor gigante carregado de tecido grosso.",
      "❌ Não usar mesa extensora, deixando o bastidor enroscar na quina da mesa de trabalho."
    ],
    troubleshootingTips: [
      "O contorno preto do bordado começou perfeito na esquerda e terminou 3 mm torto na direita: o peso da toalha pendurada segurou o movimento do bastidor no eixo X; instale a mesa extensora e apoie o tecido sobre ela durante o trabalho.",
      "O motor do eixo X faz barulho de esforço 'roncando' ao mover o bastidor: há atrito excessivo do bastidor raspando contra o tampo da mesa; limpe a mesa e aplique spray de silicone desmoldante no tampo para deixar a superfície escorregadia.",
      "O bastidor bate na ponta da mesa lateral: ajuste o espaço livre ao redor da máquina garantindo pelo menos 50 cm de área livre em todas as direções."
    ],
    dicaArtrelados: "Vai bordar toalhas de banho gigantes ou mantas de bebê pesadas? Enrole o excesso de tecido que sobra fora do bastidor e prenda com prendedores de plástico (Clips de Costura) formando um rolinho compacto apoiado em cima da mesa extensora. O bastidor fica levinho e sua máquina borda com perfeição de fábrica!",
    voceSabia: "Nas fábricas de bordado da Turquia e de Portugal que produzem enxovais de toalhas para os hotéis mais luxuosos do mundo, as máquinas possuem mesas com 'colchão de ar' (iguais às mesas de pebolim/aero-hockey) para fazer as toalhas flutuarem sem nenhum atrito durante o bordado!",
    practicalExercise: "Coloque uma toalha de banho grande na máquina sem apoiar o tecido e tente mover o bastidor com a mão; sinta o peso do arrasto. Agora enrole a toalha sobre a mesa extensora e mova novamente: sinta como a resistência cai a quase zero instantaneamente.",
    quickSummary: "Conjunto de suportes e ajustes de velocidade que anulam o peso e o atrito de peças grandes arrastando no eixo X, garantindo alinhamento perfeito.",
    relatedTerms: ["Mesa Extensora", "Atrito de Bastidor", "Grandes Formatos", "Pantógrafo", "Perda de Passos", "Toalha de Banho", "Clips de Costura"],
    tags: ["xdistortion", "arrastodebastidor", "grandesformatos", "mesaextensora", "toalhas", "operacao", "qualidade"]
  },
  {
    id: "x-axis-limit-switch-homing-routine-rotina-homing-eixo-x",
    code: "X-048",
    letter: "X",
    term: "X-Axis Limit Switch Homing Routine — Rotina de Homing do Interruptor de Fim de Curso do Eixo X na Inicialização",
    pronunciation: "éks-ék-sis lí-mit su-ítsh hóu-ming ru-tíin — ro-ti-na de hou-ming do êi-shu shis",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'homing routine' (procedimento de busca automática da posição de referência absoluta / Home Position) e 'limit switch' (microinterruptor de fim de curso).",
    summary: "Sequência automática de movimentação executada pela máquina ao ser ligada para tocar o sensor de fim de curso e calibrar o ponto zero absoluto do eixo X.",
    definition: "O X-Axis Limit Switch Homing Routine (Rotina de Homing do Eixo X / Busca da Origem Mecânica / Absolute Zero Homing Sequence / Axis Initialization Cycle) é o algoritmo de inicialização do sistema embarcado executado imediatamente após o acionamento da chave geral da máquina de bordar. A CPU comanda o motor do eixo X a deslocar o pantógrafo em velocidade controlada em direção ao sensor de fim de curso (Home Sensor); no momento exato em que o sensor é acionado, o contador interno de coordenadas é zerado, estabelecendo a base para todas as referências espaciais do bastidor.",
    technicalDetails: "A rotina opera em duas velocidades de aproximação (Dual-Speed Homing): primeiro, o carro se move em alta velocidade (Fast Search) até encontrar o sensor óptico ou magnético; em seguida, recua 3 mm e avança em velocidade ultra lenta (Slow Creep a menos de 1 mm/s) para detectar a borda de subida exata com repetibilidade de ±0,01 mm. Se o sensor não responder em até 5 segundos, o firmware interrompe o processo por segurança acusando 'Error: X-Axis Home Timeout'.",
    beginnerExplanation: "É aquela 'dança' que o braço da máquina faz sozinho toda vez que você liga a tomada! O braço anda para a esquerda bem rápido, encosta no sensor, dá um passinho para trás e encosta de novo bem devagarzinho para dizer para o computador da máquina: 'Pronto, achei o meu ponto de partida com precisão!'",
    howItWorks: [
      "1. A máquina é ligada pelo operador na chave de energia principal.",
      "2. O display exibe a mensagem de inicialização do sistema (System Booting).",
      "3. O driver envia pulsos de baixa corrente para o motor do eixo X em direção ao sensor.",
      "4. O pantógrafo atinge a aleta do sensor óptico de fim de curso.",
      "5. A CPU detecta a mudança de nível lógico (de nível alto 5V para nível baixo 0V).",
      "6. O motor recua milimetricamente e refaz o toque em velocidade microscópica para ajuste fino.",
      "7. A coordenada X absoluta é zerada (X=0) e o pantógrafo se desloca para o centro de trabalho.",
    ],
    applications: [
      "Calibração da origem geométrica (0,0) a cada inicialização da máquina.",
      "Recuperação de trabalho após desligamento acidental ou falta de energia elétrica.",
      "Garantia de que a área útil de bordado fique perfeitamente centralizada no bastidor.",
      "Prevenção de que o bastidor colida com a estrutura metálica do chassi."
    ],
    characteristics: [
      "Dupla velocidade de busca para máxima precisão e repetibilidade.",
      "Tempo total de execução de apenas 2 a 3 segundos.",
      "Diagnóstico automático de falhas em cabos ou sensores ópticos."
    ],
    commonErrors: [
      "❌ Ligar a máquina com o bastidor preso em algum obstáculo na mesa, impedindo o movimento de homing.",
      "❌ Tentar segurar o braço do pantógrafo com a mão enquanto ele faz a rotina de inicialização.",
      "❌ Deixar poeira de entretela tampar a lente do sensor, impedindo a máquina de achar a origem."
    ],
    troubleshootingTips: [
      "A máquina liga, o braço bate na lateral esquerda fazendo um barulho feio e dá erro: o sensor de fim de curso do eixo X está sujo de fiapos ou a palheta metálica está torta; limpe o sensor óptico com pincel macio.",
      "A máquina não completa a inicialização e fica apitando: verifique se não há nenhum objeto (como tesouras, réguas ou caixas de linha) travando o movimento do bastidor na mesa.",
      "O ponto central do bordado fica 5 mm deslocado após ligar a máquina: execute a calibração de 'Home Offset' no menu de serviço técnico da máquina."
    ],
    dicaArtrelados: "Toda vez que você ligar sua máquina de bordar, deixe a área da mesa totalmente livre e desimpedida! Nunca deixe tesouras, celulares ou bastidores soltos em cima da bancada onde o braço vai passar durante a rotina de inicialização!",
    voceSabia: "O termo 'Homing' vem dos pombos-correio (Homing Pigeons), que possuem um sentido magnético biológico que os faz sempre encontrar o caminho de volta para casa (Home) com precisão perfeita a milhares de quilômetros de distância!",
    practicalExercise: "Ligue sua máquina de bordar e observe atentamente o movimento inicial do pantógrafo. Note como ele vai até o extremo, faz um pequeno recuo suave e depois vai para o centro: você acabou de assistir à rotina de Homing do eixo X em funcionamento.",
    quickSummary: "Sequência automática de calibragem executada na inicialização que busca o sensor de fim de curso e define o ponto zero absoluto do eixo X.",
    relatedTerms: ["Homing", "Fim de Curso", "Sensor Óptico", "Ponto Zero", "Origem Mecânica", "Inicialização", "Hardware"],
    tags: ["xhoming", "fimdecurso", "inicializacao", "sensor", "hardware", "manutencao", "operacao"]
  },
  {
    id: "x-segment-splitting-long-stitch-divisao-pontos-longos-x",
    code: "X-049",
    letter: "X",
    term: "X-Segment Splitting & Long Stitch Auto-Split — Divisão Automática de Pontos Longos no Eixo X & Prevenção de Fios Frouxos",
    pronunciation: "éks-sêg-ment splí-ting end long stitsh ó-to split — di-vi-são de pon-tus lon-gus",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'auto-split' (divisão/fracionamento automático de segmentos de pontos) e 'long stitch' (pontos satim excessivamente compridos com risco de laçada solta).",
    summary: "Algoritmo do software CAD que fatia automaticamente pontos de satim com mais de 8 mm no eixo X em pequenos pontos intermediários de tatami para não ficarem frouxos.",
    definition: "O X-Segment Splitting & Long Stitch Auto-Split (Divisão Automática de Pontos Longos no Eixo X / Fracionamento de Satim / Satin Auto-Split & Jump Stitch Limiter) é uma rotina essencial de controle de qualidade na digitalização de matrizes. Como pontos de satim que ultrapassam de 8,0 mm a 10,0 mm de comprimento horizontal ficam frouxos no tecido, enroscam facilmente nas unhas de clientes e podem ser cortados pela máquina como se fossem saltos (Jumps), o algoritmo divide o trajeto longo inserindo penetrações intermediárias alternadas que mantêm o acabamento acetinado com total firmeza estrutural.",
    technicalDetails: "O algoritmo distribui as agulhadas de divisão com deslocamentos pseudo-aleatórios ou padrões de escala (Random Split de 0,2 mm a 0,5 mm), evitando que as penetrações intermediárias fiquem alinhadas em linha reta (o que criaria uma 'rachadura' ou marca de divisão visível no meio do satim). Isso permite bordar letras gigantes e números esportivos de 10 cm a 20 cm de altura com aspecto de satim brilhante, mas com a durabilidade mecânica e firmeza de um preenchimento tatami.",
    beginnerExplanation: "Quando uma letra ou desenho fica muito largo (mais de 1 centímetro de largura), se a agulha tentar dar um ponto de um lado até o outro de uma vez só, a linha fica toda solta e frouxa como uma corda de violão bamba! A divisão automática dá pequenos pontinhos invisíveis no meio do caminho para prender a linha firme no tecido sem estragar o brilho!",
    howItWorks: [
      "1. O digitador cria uma letra grande ou número esportivo com coluna satim larga (ex.: 14 mm de largura no eixo X).",
      "2. No painel de propriedades do software, ativa a função 'Auto-Split' (Divisão Automática).",
      "3. Define o comprimento máximo de ponto permitido (ex.: 7,0 mm ou 8,0 mm).",
      "4. O software analisa as colunas e insere agulhadas intermediárias nas áreas que excedem o limite.",
      "5. As penetrações são desencontradas de forma inteligente para não formar linhas retas visíveis.",
      "6. A máquina costura a matriz com pontos firmes, seguros e sem nenhuma laçada frouxa.",
      "7. A peça pode ser lavada e usada intensamente sem que nenhuma linha puxe fio."
    ],
    applications: [
      "Números grandes e nomes nas costas de camisetas esportivas de futebol e basquete.",
      "Bordados em jaquetas universitárias com letras grandes estilo College/Varsity.",
      "Grandes monogramas em toalhas de banho e colchas de cama de casal.",
      "Bordados em uniformes infantis que sofrem alto atrito e lavagens diárias."
    ],
    characteristics: [
      "Prevenção absoluta de fios soltos que enroscam e puxam na roupa.",
      "Preservação do brilho e da textura acetinada do ponto satim.",
      "Ajuste flexível do comprimento máximo de ponto no software."
    ],
    commonErrors: [
      "❌ Bordar colunas satim com 15 mm de largura sem divisão automática, deixando fios gigantes que se desmancham na primeira lavagem.",
      "❌ Usar divisão alinhada em linha reta, criando um vinco feio parecendo um rasgo no meio da letra.",
      "❌ Configurar o limite de divisão muito baixo (ex.: 3 mm), transformando o satim em tatami comum sem brilho."
    ],
    troubleshootingTips: [
      "A máquina começou a cortar a linha no meio de uma letra larga achando que era salto: o ponto satim ultrapassou 12 mm de comprimento e a máquina interpretou como comando Jump; ative o 'Auto-Split' no software com limite de 8,0 mm.",
      "Ficou uma linha de costura feia e marcada no meio da letra larga: altere o tipo de divisão para 'Random Split' (Divisão Aleatória) para espalhar os pontinhos de forma invisível.",
      "A linha do bordado fica frouxa e 'dança' no tecido: ative o Auto-Split e aumente a tensão da linha superior da máquina para 120 gf."
    ],
    dicaArtrelados: "Vai digitalizar números esportivos ou letras grandes com mais de 8 mm de largura? Nunca deixe o satim puro direto! Ative sempre a opção de 'Auto-Split Aleatório' no seu software. O número fica com aquele brilho lindo de camisa de futebol oficial e não repuxa nem solta um único fio!",
    voceSabia: "As máquinas de bordar têm um limite mecânico máximo de salto por ponto de cerca de 12,1 mm a 12,7 mm imposto pelo padrão dos arquivos .DST; qualquer ponto maior que isso é automaticamente fatiado em múltiplos saltos pelo computador!",
    practicalExercise: "Desenhe um retângulo de 15 mm de largura por 50 mm de comprimento com ponto satim no seu software. Ative e desative a opção 'Auto-Split' e observe no simulador como o software insere pequenos pontos de ancoragem no meio da coluna para segurar a linha.",
    quickSummary: "Recurso no software CAD que fatia pontos satim largos no eixo X com agulhadas intermediárias desencontradas, evitando fios frouxos e puxões.",
    relatedTerms: ["Auto-Split", "Satim", "Pontos Longos", "Tatami", "Jump Stitch", "Camisas Esportivas", "Wilcom"],
    tags: ["xsegmentsplitting", "autosplit", "pontoslongos", "satim", "qualidade", "programacao", "esportivo"]
  },
  {
    id: "x-weft-stability-interfacing-direction-estabilidade-trama-x",
    code: "X-050",
    letter: "X",
    term: "X-Weft Stability & Interfacing Direction — Estabilidade da Trama X do Tecido & Orientação da Entretela Rasgável",
    pronunciation: "éks-wéft sta-bí-li-ti end in-ter-fêi-sing di-rék-shon — es-ta-bi-li-da-de da tra-ma e en-tre-te-la",
    level: "Intermediário 🟡",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês arcaico 'weft' (trama dos tecidos tecidos transversalmente de ourela a ourela / woof) e 'interfacing direction' (orientação anisotrópica do não-tecido da entretela).",
    summary: "Regra fundamental de ateliê que ensina a alinhar o sentido mais resistente da entretela no sentido horizontal da trama (eixo X) para blindar o tecido contra repuxos.",
    definition: "O X-Weft Stability & Interfacing Direction (Estabilidade da Trama no Eixo X / Orientação Direcional de Entretela / Non-Woven Fiber Grain Alignment & Weft Reinforcement) é o princípio técnico de montagem de bastidor que estabelece que o eixo de maior tração mecânica da entretela não-tecida (TNT) deve ser orientado paralelamente ao sentido da trama do tecido (fios horizontais / eixo X). Como a trama é a direção de menor densidade de fios e maior suscetibilidade a deformações em tecidos planos e malhas, a entretela orientada corretamente atua como uma armadura que neutraliza o repuxamento lateral.",
    technicalDetails: "As entretelas rasgáveis tradicionais de celulose e poliéster possuem uma 'direção de fibra' (Grain Line) resultante do processo de calandragem industrial: elas rasgam com facilidade em uma direção (sentido longitudinal) e oferecem alta resistência à tração na direção transversal (sentido transversal). Posicionar o sentido resistente da entretela no eixo X neutraliza as forças de cisalhamento geradas por colunas satim horizontais e subpontos densos, mantendo a estabilidade dimensional com variação inferior a 0,5%.",
    beginnerExplanation: "A entretela rasgável rasga fácil de um lado, mas é super dura e difícil de rasgar do outro lado! O tecido também estica mais para os lados do que para cima. A regra de ouro é colocar o lado mais duro e resistente da entretela alinhado com a largura da sua roupa no bastidor. É como colocar uma barra de aço invisível que não deixa a roupa enrugar de jeito nenhum!",
    howItWorks: [
      "1. A bordadeira pega a folha de entretela e puxa com as mãos para identificar qual lado rasga reto e qual lado resiste.",
      "2. Corta o pedaço de entretela garantindo que o lado mais resistente fique na horizontal.",
      "3. Posiciona a entretela sob a peça de roupa alinhada com a largura da peça (eixo X).",
      "4. Fecha o aro do bastidor mantendo a tensão de tambor uniforme.",
      "5. A máquina executa o bordado com pontos de satim e tatami.",
      "6. A força de tração da linha encontra a resistência máxima das fibras da entretela.",
      "7. Ao terminar, a peça é retirada do bastidor perfeitamente lisa e a entretela rasga de forma limpa e fácil.",
    ],
    applications: [
      "Bordados em camisas sociais de tricoline, percal e popeline de algodão.",
      "Bordados em guardanapos e toalhas de mesa de linho puro.",
      "Bordados em peças de alfaiataria fina e uniformes executivos.",
      "Estabilização de enxovais de berço e batas médicas."
    ],
    characteristics: [
      "Aproveitamento inteligente da anisotropia das fibras da entretela.",
      "Blindagem contra deformações e frestas brancas em contornos.",
      "Remoção fácil e limpa no sentido do rasgo após a costura."
    ],
    commonErrors: [
      "❌ Colocar a entretela na posição errada, fazendo a entretela rasgar no meio da costura sob a agulhada.",
      "❌ Usar pedaços de retalhos de entretela colados de qualquer jeito sem observar a direção dos fios.",
      "❌ Puxar a entretela com força ao rasgar, repuxando os pontos de bordado prontos."
    ],
    troubleshootingTips: [
      "A entretela rasgou sozinha durante o bordado e o tecido enrugou: a entretela foi colocada com o sentido fraco na direção do repuxo; gire a folha de entretela em 90° para usar a direção mais forte.",
      "O contorno do bordado ficou torto na horizontal: a trama do tecido cedeu no eixo X; use duas camadas de entretela de gramatura 60g cruzadas ou entretela de corte limpo (Cutaway).",
      "A entretela está difícil de rasgar e puxa os pontos: rasgue a entretela sempre rente ao bordado apoiando o dedo sobre os pontos para não forçar a linha de costura."
    ],
    dicaArtrelados: "Antes de prender qualquer peça no bastidor, faça o teste de 2 segundos: dê um pequeno picote com a tesoura na ponta da entretela e puxe! Você vai ver na hora para qual lado ela rasga retinha e para qual lado ela é forte. Use o lado forte sempre na largura da roupa!",
    voceSabia: "O termo 'Weft' (trama) tem raízes no inglês antigo 'wefan' (tecer), que também deu origem às palavras inglesas 'weave' (tecelagem) e 'web' (teia de aranha e a própria World Wide Web da internet)!",
    practicalExercise: "Pegue uma folha de entretela rasgável e faça um rasgo de teste nas duas direções com as mãos. Sinta a diferença mecânica nítida de resistência. Marque com uma caneta uma seta na direção resistente para lembrar sempre de alinhá-la com o eixo X do seu bastidor.",
    quickSummary: "Alinhamento do sentido mais resistente da entretela não-tecida no eixo horizontal X para neutralizar a deformação da trama do tecido.",
    relatedTerms: ["Trama", "Weft", "Urdume", "Entretela Rasgável", "Grain Line", "Direção de Fibra", "Estabilização"],
    tags: ["xweftstability", "trama", "entretela", "rasgavel", "estabilizacao", "bastidor", "atelie"]
  }
];

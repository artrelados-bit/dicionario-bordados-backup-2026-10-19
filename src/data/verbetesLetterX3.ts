import { Verbete } from "../types";

export const VERBETES_LETTER_X3: Verbete[] = [
  {
    id: "x-expansion-pull-compensation-expansao-horizontal",
    code: "X-011",
    letter: "X",
    term: "X-Expansion & Pull Compensation — Expansão no Eixo X & Compensação de Repuxo Horizontal",
    pronunciation: "éks-eks-pén-shon end pul kom-pen-sêi-shon — es-pan-são no êi-shu shis",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'expansion' (alargamento dimensional geométrico) e 'pull compensation' (compensação da força de tração elástica da linha ao contrair a trama do tecido).",
    summary: "Ajuste milimétrico programado no software CAD que estende as colunas e contornos no eixo horizontal X para neutralizar o encolhimento físico provocado pela tensão da linha.",
    definition: "O X-Expansion & Pull Compensation (Expansão no Eixo X / Compensação de Repuxo Horizontal / Column Width Expansion / X-Axis Stitch Overcut) é o parâmetro de engenharia de matriz que adiciona intencionalmente uma sobremedida (típica de 0,2 mm a 0,6 mm) às extremidades horizontais de colunas de ponto cheio (satin) e blocos de preenchimento (tatami). Como a tensão mecânica de cada laçada tende a puxar os fios de urdume e trama em direção ao centro do objeto, a expansão no eixo X garante que a figura bordada mantenha suas proporções nominais do desenho original sem criar frestas indesejadas com contornos adjacentes.",
    technicalDetails: "A contração no eixo X é inversamente proporcional à estabilidade do tecido e diretamente proporcional à densidade de pontos e à tensão da linha superior (medida em gf). Em tecidos elásticos (como malhas de piquet, ribana e lycra), o coeficiente de deformação no eixo X pode atingir até 8% de retração; o programador aplica a expansão absoluta por valor fixo (+0,35 mm) ou percentual (+110%) combinada com subpontos perpendiculares (underlay em tatami ou zigue-zague) para ancorar a estrutura antes do preenchimento final.",
    beginnerExplanation: "Quando a máquina borda, a linha puxa o tecido para dentro, fazendo o desenho ficar mais magrinho e estreito do que estava na tela do computador. A expansão no eixo X é o truque de desenhar o bordado um tiquinho mais 'gordinho' para os lados para que, quando a linha puxar, ele termine exatamente do tamanho certo!",
    howItWorks: [
      "1. O programador avalia o tipo de tecido (malha flexível, pique, sarja ou plano).",
      "2. No painel de propriedades do objeto, ativa o recurso de Compensação de Repuxo (Pull Comp).",
      "3. Define a sobremedida no eixo X (ex.: 0,30 mm para algodão ou 0,45 mm para malha pique).",
      "4. O algoritmo do software estende automaticamente as agulhadas externas para além do contorno vetorial original.",
      "5. A máquina executa o subponto e depois o acabamento em satim.",
      "6. A força de tração da linha recolhe o tecido exatamente até a linha de borda planejada.",
      "7. O contorno externo e os preenchimentos encaixam-se com precisão milimétrica sem deixar frestas brancas."
    ],
    applications: [
      "Bordado de logotipos corporativos com letras finas em camisas polo piquet.",
      "Alinhamento de contornos finos (outlines) em volta de áreas preenchidas em tatami.",
      "Encaixe de apliques de tecido sem vazamentos perimétricos.",
      "Preservação da geometria circular perfeita em brasões e medalhões esportivos."
    ],
    characteristics: [
      "Ajuste configurável em milímetros absolutos ou percentual relativo.",
      "Recálculo automático e dinâmico de todos os pontos da coluna.",
      "Compensação independente para colunas satim e preenchimentos tatami."
    ],
    commonErrors: [
      "❌ Não aplicar compensação de repuxo em malha, fazendo círculos virarem ovais achatados.",
      "❌ Exagerar na expansão (+0,8 mm) em tecidos grossos e rígidos como brim, deixando letras pequenas borradas e empastadas.",
      "❌ Aplicar compensação apenas no eixo Y esquecendo que o repuxo atua em ambos os eixos vetoriais."
    ],
    troubleshootingTips: [
      "Ficou um vão branco entre o preenchimento colorido e o contorno preto: aumente a compensação de repuxo no eixo X em +0,2 mm e garanta que o contorno transpasse a borda em pelo menos 0,5 mm.",
      "Um círculo perfeito na tela virou uma elipse deformada na toalha: aumente a compensação no eixo correspondente à direção dos pontos e reforce o subponto estrutural.",
      "As letras pequenas de 5 mm fecharam o miolo das letras 'e' e 'o': reduza a expansão de repuxo para 0,15 mm e diminua a densidade de pontos."
    ],
    dicaArtrelados: "Em camisetas polo de piquet, que esticam muito na horizontal, sempre coloque pelo menos 0,35 mm a 0,40 mm de compensação de repuxo no eixo X e use duas camadas de entretela rasgável de boa gramatura. Seus contornos nunca mais vão sair do lugar!",
    voceSabia: "Se você bordar um quadrado perfeito de 50 mm x 50 mm em satim sobre uma malha sem compensação de repuxo, o quadrado sairá da máquina medindo cerca de 46 mm de largura por 52 mm de altura devido à física de tração dos fios!",
    practicalExercise: "Crie uma matriz com dois círculos idênticos de 30 mm no seu software. No primeiro, deixe a compensação de repuxo em 0,0 mm; no segundo, aplique 0,40 mm. Borde ambos em uma malha de camiseta e meça com um paquímetro a diferença na redondeza final.",
    quickSummary: "Sobredimensionamento milimétrico intencional nas extremidades horizontais da matriz para anular o encolhimento do tecido causado pela tração dos pontos.",
    relatedTerms: ["Pull Compensation", "Push-Pull Effect", "Compensação de Repuxo", "Satim", "Tatami", "Subponto", "Piquet"],
    tags: ["xexpansion", "pullcomp", "repuxo", "programacao", "wilcom", "densidade", "qualidade"]
  },
  {
    id: "x-carriage-linear-rail-ball-bushings-trilho-carro-x",
    code: "X-012",
    letter: "X",
    term: "X-Carriage Linear Rail & Ball Bushings — Trilho Linear do Carro X & Buchas de Esferas Recirculantes",
    pronunciation: "éks-ké-ridj lí-ni-ar rêil end ból bú-shings — tri-lhu li-ne-ar do kar-ru shis",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'carriage' (carro de transporte mecânico móvel), 'linear rail' (trilho temperado retificado) e 'ball bushings' (mancais de esferas com recirculação contínua patenteados pela Thomson Industries em 1945).",
    summary: "Conjunto mecânico de alta precisão composto por eixos de aço cimentado e rolamentos de esferas que sustentam o pantógrafo, garantindo deslizamento suave e sem folgas no eixo X.",
    definition: "O X-Carriage Linear Rail & Ball Bushings (Trilho Linear do Carro X / Guia Prismática de Esferas Recirculantes / X-Axis Linear Motion Guide & Pillow Block) é o sistema mecânico de sustentação e guiamento cinemático horizontal do pantógrafo em máquinas de bordar industriais e semi-industriais (Tajima, Barudan, Brother PR, Happy, SWF). Formado por trilhos de aço temperado com retificação micrométrica e blocos de esferas recirculantes vedados, o conjunto suporta o peso do braço e as forças dinâmicas de aceleração instantânea (até 1.200 PPM), mantendo o movimento rigorosamente paralelo à chapa de ponto com coeficiente de atrito quase nulo.",
    technicalDetails: "A precisão dimensional do conjunto opera na faixa de classe P (precisão industrial com folga radial inferior a 0,005 mm). As esferas de aço cromo 100Cr6 circulam por pistas internas com pré-carga (Preload Level Z0/Z1) para eliminar qualquer jogo mecânico lateral (backlash). Raspadores de borracha sintética nitrílica (NBR) nas extremidades dos blocos impedem a entrada de fiapos têxteis e resíduos de entretela na pista de rolagem, enquanto canais de engraxamento distribuem lubrificante mineral com sabão de lítio.",
    beginnerExplanation: "É o conjunto de trilhos de aço super lisos e carrinhos cheios de bolinhas de rolamento de aço que seguram o braço do bastidor. Eles funcionam como trilhos de trem de alta velocidade que deixam o bastidor deslizar para a esquerda e para a direita de forma ultra suave, rápida e sem tremer nada!",
    howItWorks: [
      "1. O motor de acionamento do eixo X transmite torque através da correia dentada para o carro.",
      "2. As esferas de aço dentro do bloco deslizam pelas pistas retificadas do trilho linear.",
      "3. Conforme o carro avança, as esferas recirculam continuamente por dutos internos de retorno.",
      "4. O pantógrafo se desloca com suavidade absoluta e sem nenhuma folga lateral.",
      "5. Os retentores externos barram fiapos de linha e poeira de entretela.",
      "6. A rigidez do sistema garante que a agulha penetre exatamente na mesma coordenada décimo de milímetro a cada ponto.",
      "7. A cada 200 horas de uso, injeta-se graxa através dos bicos graxeiros para renovar o filme protetor."
    ],
    applications: [
      "Sustentação do bastidor de grande formato em máquinas multicabeçotes industriais.",
      "Absorção de vibrações em bordados de alta velocidade (1.000 a 1.200 PPM).",
      "Garantia de alinhamento perfeito de contornos em bordados de grandes dimensões (jaquetas e banners).",
      "Operação suave em movimentos de microbordado e monogramas de alta definição."
    ],
    characteristics: [
      "Capacidade de carga estática e dinâmica superior a 500 kgf.",
      "Atrito estático mínimo que previne o efeito de 'arranque travado' (Stick-Slip).",
      "Alta durabilidade com vida útil superior a 20.000 horas de operação contínua."
    ],
    commonErrors: [
      "❌ Utilizar lubrificantes pegajosos inadequados (como óleo de cozinha ou WD-40 comum), transformando a poeira têxtil em uma pasta abrasiva que trava as esferas.",
      "❌ Deixar acumular resíduos de cola spray sobre a superfície retificada do trilho de aço.",
      "❌ Forçar o braço do bastidor para baixo com peso excessivo, danificando os trilhos lineares."
    ],
    troubleshootingTips: [
      "O carro do eixo X trava no meio do movimento com ruído áspero: os raspadores do bloco de esferas estão sujos ou as esferas perderam lubrificação; limpe o trilho com querosene e aplique graxa de lítio própria para guias lineares.",
      "O contorno do bordado treme em velocidade alta: verifique se os parafusos de fixação do trilho linear afrouxaram com a vibração; aperte com chave torx no torque especificado.",
      "Há folga perceptível ao empurrar o bastidor para frente e para trás: as buchas de esferas desgastaram por falta de manutenção e precisam ser substituídas."
    ],
    dicaArtrelados: "Mantenha a superfície metálica do trilho do eixo X sempre brilhante e espelhada! Uma vez por semana, passe um pano de microfibra limpo umedecido com vaselina líquida ou óleo mineral leve para retirar a poeira da entretela. Seus motores de passo vão trabalhar frios e sem esforço!",
    voceSabia: "As guias lineares de esferas recirculantes foram desenvolvidas originalmente para a indústria de máquinas-ferramenta CNC de precisão na Alemanha e no Japão antes de serem incorporadas às máquinas de bordar nos anos 1980 pela Tajima!",
    practicalExercise: "Com a máquina desligada e sem bastidor, empurre manualmente o carro do eixo X de uma ponta à outra bem devagar. Sinta se o movimento é contínuo e suave como vidro. Se sentir pequenos trancos ou areia, faça uma limpeza imediata no trilho.",
    quickSummary: "Trilho temperado e blocos de rolamento de esferas que garantem movimento horizontal suave, rígido e sem folgas para o pantógrafo.",
    relatedTerms: ["Pantógrafo", "X-Axis", "Guias Lineares", "Servomotor", "Backlash", "Manutenção Preventiva"],
    tags: ["xcarriage", "trilholinear", "rolamento", "mecanica", "hardware", "manutencao", "pantografo"]
  },
  {
    id: "x-center-alignment-hoop-origin-centralizacao-x",
    code: "X-013",
    letter: "X",
    term: "X-Center Alignment & Hoop Origin — Alinhamento de Centro X & Ponto Zero do Bastidor",
    pronunciation: "éks-sên-ter a-láin-ment end hup ó-ri-djin — a-li-nha-men-to de sen-tru shis",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'center alignment' (alinhamento centralizado ortogonal) e 'hoop origin' (origem geométrica de coordenadas 0,0 no centro do aro do bastidor).",
    summary: "Procedimento de calibração e posicionamento no qual a máquina faz coincidir a coordenada X=0 da matriz com a linha central vertical do bastidor.",
    definition: "O X-Center Alignment & Hoop Origin (Alinhamento de Centro X / Centralização Horizontal no Bastidor / Auto-Center X Coordinate / Hoop Zero Calibration) é a rotina operacional padrão que estabelece o alinhamento perfeito entre a linha central vertical da matriz e o centro físico do bastidor de bordado. Quando o comando de autocentralização é acionado no software ou no painel da máquina, o pantógrafo translada o bastidor no eixo X até que a agulha coincida rigorosamente com o entalhe central superior e inferior do aro de plástico.",
    technicalDetails: "Nos sistemas de coordenadas absolutas de bordado, a origem cartesiana (0,0) situa-se geometricamente no baricentro da área delimitadora máxima do bastidor. O firmware da máquina calcula o centro do desenho somando os pontos extremos da matriz ((X_max + X_min) / 2) e aplica um deslocamento inverso para fazer essa média coincidir com a coordenada zero do pantógrafo. Essa calibração previne que o calcador colida com os aros plásticos durante giros ou saltos rápidos.",
    beginnerExplanation: "É a função mágica do painel que coloca o seu desenho exatamente no meião do bastidor com um único clique! Você não precisa ficar medindo com régua se o bordado está mais para a esquerda ou mais para a direita: a máquina calcula tudo e para a agulha cravada no centro certinho!",
    howItWorks: [
      "1. O operador carrega o arquivo da matriz na memória da máquina de bordar.",
      "2. No painel digital, seleciona o ícone de bastidor e clica em 'Auto-Center' (Centralizar).",
      "3. O software interno calcula as dimensões totais no eixo horizontal X.",
      "4. O servomotor move o bastidor até que a agulha fique posicionada no ponto central (X=0, Y=0).",
      "5. O operador confere visualmente se a agulha ou o laser coincide com a marca central do gabarito.",
      "6. Aciona-se a função de rastreamento (Trace) para confirmar a margem de segurança nas laterais.",
      "7. O bordado é iniciado com simetria perfeitamente equilibrada."
    ],
    applications: [
      "Centralização de nomes e logotipos em toalhas de banho e lavabo.",
      "Posicionamento simétrico de desenhos no peito de camisetas e jaquetas.",
      "Prevenção de batidas de bastidor contra a barra da agulha.",
      "Alinhamento de bordados em molduras e bastidores redondos decorativos."
    ],
    characteristics: [
      "Cálculo matemático instantâneo e automatizado.",
      "Eliminação de erros de medição manual com régua.",
      "Garantia de margem de folga simétrica em ambas as laterais do aro."
    ],
    commonErrors: [
      "❌ Mover a matriz manualmente pelas setas e esquecer de centralizar antes de bordar uma toalha simétrica.",
      "❌ Selecionar no painel um tamanho de bastidor diferente daquele que está instalado fisicamente na máquina.",
      "❌ Bater o bastidor na agulha por carregar matriz larga sem checar o alinhamento de centro."
    ],
    troubleshootingTips: [
      "O desenho está cortando a borda direita mesmo parecendo caber no bastidor: o desenho não está centralizado no eixo X; aperte o botão 'Center/Origin' no painel para reequilibrar as margens.",
      "Ao apertar 'Center', o desenho vai para um canto estranho: a matriz tem um ponto de salto invisível perdido longe do desenho principal; abra no software e delete pontos órfãos.",
      "A agulha central não aponta para o meio do gabarito plástico: execute a calibração de origem do bastidor no menu de serviço técnico da máquina."
    ],
    dicaArtrelados: "Sempre aperte o botão de 'Auto-Center' no painel após carregar qualquer nova matriz, mesmo que ache que ela já veio centralizada do computador! Isso zera qualquer deslocamento antigo de trabalhos anteriores e evita surpresas desagradáveis!",
    voceSabia: "Os bastidores profissionais de bordado possuem pequenas ranhuras ou marcações em relevo nos quatro pontos cardeais (Norte, Sul, Leste, Oeste) justamente para permitir que o bordador confira o alinhamento dos eixos X e Y a olho nu em 3 segundos!",
    practicalExercise: "Encaixe o gabarito plástico transparente no seu bastidor vazio e monte na máquina. No painel, aperte 'Centralizar'. Baixe a agulha (com a máquina desligada ou pelo volante) e veja como a ponta da agulha se encaixa perfeitamente no furinho central do gabarito.",
    quickSummary: "Posicionamento automático da matriz que iguala o centro do desenho com a coordenada zero horizontal do bastidor, garantindo simetria perfeita.",
    relatedTerms: ["Ponto Zero", "Origem", "Auto-Center", "Gabarito de Bastidor", "Bounding Box", "Trace", "Simetria"],
    tags: ["xcenter", "centralizacao", "bastidor", "alinhamento", "origem", "painel", "operacao"]
  },
  {
    id: "x-underlay-subponto-cruzado-reticulado",
    code: "X-014",
    letter: "X",
    term: "X-Underlay — Subponto Cruzado em X (Estrutura de Reticulado Bidirecional & Ancoragem)",
    pronunciation: "éks-an-der-lêi — sub-pon-tu kru-za-du em shis",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'underlay' (camada de base/fundação estrutural) e 'X' (geometria de linhas perpendiculares cruzadas em 45° e 135°).",
    summary: "Subponto de fundação composto por duas camadas de pontos de corrida em diagonais opostas que formam uma malha em X para estabilizar tecidos moles e flexíveis.",
    definition: "O X-Underlay (Subponto Cruzado em X / Reticulado de Fundação / Double Diagonal Tatami Underlay / Cross-Hatch Base Grid) é uma técnica avançada de subponto programada sob grandes áreas de preenchimento ou colunas satim largas. Consiste na costura prévia de duas passagens de pontos de corrida espaçados (comprimento de 3,5 mm a 5,0 mm e espaçamento de grade de 2,0 mm a 4,0 mm) orientadas a 45° e 135° em relação ao eixo horizontal, fundindo o tecido e a entretela em um sanduíche rígido e plano antes da aplicação do bordado definitivo.",
    technicalDetails: "O X-Underlay cria uma rede de micro-âncoras bidirecionais que neutraliza tanto as tensões de urdume (eixo Y) quanto as tensões de trama (eixo X). Essa malha impede que o preenchimento tatami superior afunde nas fibras de toalhas felpudas, moletons e malhas tricotadas, além de reduzir em até 40% a quantidade de pontos necessária na camada superior, já que a base em X cria opacidade visual e bloqueia a cor do tecido de fundo.",
    beginnerExplanation: "É como fazer uma 'cercadinha' ou 'grade de vigas' de linha bem espaçada antes de fazer o bordado de verdade. Essa grade em X segura o tecido firme como se fosse uma tela de concreto armado, impedindo que a toalha afunde ou que o tecido estique e fique todo enrugado!",
    howItWorks: [
      "1. O programador cria um bloco de preenchimento tatami ou satim no software.",
      "2. Nas propriedades de Subponto (Underlay), ativa a opção 'Double Tatami' ou 'Cross-Hatch / X-Grid'.",
      "3. Define o espaçamento da grade (ex.: 2,5 mm) e o recuo da borda externa (0,5 mm).",
      "4. Ao iniciar a costura, a máquina executa primeiro a primeira diagonal a 45°.",
      "5. Em seguida, costura a segunda diagonal a 135° cruzando a primeira e formando uma malha de 'Xs'.",
      "6. O tecido e a entretela ficam perfeitamente travados e planos.",
      "7. A máquina costura a camada final de cobertura com superfície lisa, uniforme e brilhante."
    ],
    applications: [
      "Grandes brasões e logotipos nas costas de jalecos, jaquetas e kimonos.",
      "Bordados em toalhas aveludadas, roupões felpudos e tecidos felpudos.",
      "Bordados sobre malhas de lã, suéteres e moletons pesados.",
      "Superfícies de couro legítimo e sintético para evitar perfurações concentradas."
    ],
    characteristics: [
      "Máxima estabilização dimensional multidirecional.",
      "Excelente cobertura de fundo com economia de pontos no acabamento.",
      "Prevenção eficaz de efeito 'papel amassado' após a lavagem da peça."
    ],
    commonErrors: [
      "❌ Programar o X-Underlay com grade muito fechada (menos de 1,2 mm), deixando o bordado duro como uma placa de ferro.",
      "❌ Deixar o subponto encostar na borda exata do vetor, fazendo linhas da grade vazarem para fora do satim.",
      "❌ Não usar entretela achando que o X-Underlay sozinho substitui a estabilização física."
    ],
    troubleshootingTips: [
      "O bordado ficou pesado e duro no peito da camisa: a grade do X-Underlay está muito densa; aumente o espaçamento da grade de 1,5 mm para 3,0 mm no software.",
      "A felpa da toalha está espetando por entre os pontos do bordado: ative o X-Underlay sob o tatami e adicione um filme plástico solúvel em água (Water-Soluble Topping) por cima do tecido.",
      "Linhas do subponto aparecem fora do contorno: aumente a margem de recuo (Underlay Margin/Offset) para 0,6 mm das bordas externas."
    ],
    dicaArtrelados: "Para bordar toalhas atoalhadas e roupões grossos sem precisar colocar densidades absurdas de pontos que quebram agulhas: use sempre um bom X-Underlay com espaçamento de 2,5 mm e plástico hidrossolúvel por cima. O bordado fica fofo, encorpado e com acabamento de boutique!",
    voceSabia: "O princípio da malha cruzada em X é o mesmo utilizado pelos engenheiros civis nas lajes de concreto armado com treliças de ferro cruzadas para distribuir cargas em todas as direções!",
    practicalExercise: "Crie um quadrado de 50 mm no seu programa de bordado. Aplique um subponto do tipo 'Double Tatami' com grade em X de 3,0 mm. Borde em uma toalha felpuda e observe como a grade achata a felpa perfeitamente antes da passagem final de linha.",
    quickSummary: "Estrutura de fundação em grade diagonal cruzada que trava o tecido e a entretela, oferecendo base sólida e plana para preenchimentos pesados.",
    relatedTerms: ["Underlay", "Tatami", "Subponto", "Estabilização", "Malha de Fundação", "Push-Pull", "Toalha Felpuda"],
    tags: ["xunderlay", "subponto", "fundacao", "tatami", "toalhas", "programacao", "estabilizacao"]
  },
  {
    id: "x-crossing-density-filter-filtro-cruzamentos-x",
    code: "X-015",
    letter: "X",
    term: "X-Crossing Density & Stitch Filter — Filtro de Densidade em Cruzamentos X & Limpeza de Agulhadas",
    pronunciation: "éks-krós-ing dên-si-ti end stitsh fíl-ter — fil-tru de den-si-da-de em kru-za-men-tus shis",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'crossing' (interseção geométrica de caminhos vetoriais) e 'stitch filter' (algoritmo de filtragem e remoção de pontos sobrepostos e redundantes).",
    summary: "Algoritmo inteligente do software que remove automaticamente agulhadas sobrepostas em interseções de traços em X, evitando quebras de agulha e acúmulos rígidos de linha.",
    definition: "O X-Crossing Density & Stitch Filter (Filtro de Densidade em Cruzamentos X / Algoritmo de Limpeza de Interseções / Overlap Stitch Purge & Thinning Filter) é uma rotina de otimização computacional presente em softwares de bordado de alto nível. Quando dois traços de satim ou tatami se cruzam em formato de 'X' (como nas letras X, K, W, brasões ou faixas entrecruzadas), o algoritmo detecta a zona de sobreposição e reduz a densidade da camada inferior ou remove pontos que cairiam a menos de 0,3 mm uns dos outros, mantendo a espessura total do bordado uniforme.",
    technicalDetails: "Sem o filtro de densidade, o cruzamento de duas colunas satim com densidade padrão de 0,40 mm geraria uma densidade crítica de 0,20 mm na área central, quadruplicando a espessura do tecido e criando uma 'zona à prova de balas' (Bulletproof Spot). O filtro de interseção X recalcula as coordenadas aplicando mascaramento booleano (Cutout Underlay / Remove Hidden Stitches), diminuindo a contagem de pontos na área de contato em até 60% e evitando o superaquecimento e quebra da agulha em alta velocidade.",
    beginnerExplanation: "Quando duas linhas grossas de bordado se cruzam fazendo um 'X', o meio do cruzamento fica muito duro e cheio de linha acumulada se o programa não tomar cuidado. Esse filtro é uma limpeza inteligente que o computador faz para tirar os pontos escondidos debaixo do cruzamento, deixando o bordado macio e impedindo que a agulha quebre!",
    howItWorks: [
      "1. O digitador desenha dois objetos ou colunas que se cruzam na tela do software.",
      "2. O software executa a análise geométrica de sobreposição de camadas.",
      "3. O filtro de cruzamento X identifica a área comum de interseção.",
      "4. O programa remove automaticamente os pontos de preenchimento da camada de baixo que ficariam totalmente cobertos pela de cima.",
      "5. Os subpontos na área do cruzamento são aliviados para manter a flexibilidade.",
      "6. A matriz final é gerada com contagem de pontos otimizada e sem caroços.",
      "7. A máquina costura a interseção com fluidez suave e sem nenhum ruído metálico de sobrecarga."
    ],
    applications: [
      "Digitalização de monogramas e tipografias com letras ricas em cruzamentos (X, Y, K, A, M, W).",
      "Bordado de brasões militares, escudos esportivos e faixas heráldicas cruzadas.",
      "Prevenção de quebra de agulhas finas 65/9 e 75/11 em alta velocidade.",
      "Manutenção da maciez e caimento de tecidos finos sob bordados densos."
    ],
    characteristics: [
      "Processamento automático sem necessidade de edição manual ponto a ponto.",
      "Redução da contagem global de pontos da matriz (economia de linha e tempo).",
      "Preservação integral da estética visual da face superior do bordado."
    ],
    commonErrors: [
      "❌ Desativar a remoção de pontos sobrepostos e bordar letras X grossas em tecidos finos, abrindo buracos no tecido.",
      "❌ Deixar nós de travamento (Tie-Offs) caírem bem no meio da zona de cruzamento.",
      "❌ Usar agulhas de ponta fina e afiada em cruzamentos densos sem filtro, cortando as fibras de linha inferiores."
    ],
    troubleshootingTips: [
      "A agulha bate com estalo forte e quebra sempre no centro da letra 'X': abra a matriz no software, selecione os objetos que se cruzam e aplique a função 'Remover Sobreposições' (Remove Overlaps / Weld / Trim Background).",
      "O centro do cruzamento ficou com um calombo duro que machuca a pele: reduza a densidade da coluna superior na área de transição e elimine o subponto pesado da camada inferior.",
      "A linha superior desfia ao passar pela interseção: reduza a velocidade da máquina para 600 PPM e aplique uma gota de óleo de silicone na agulha."
    ],
    dicaArtrelados: "Sempre que terminar de digitalizar letras grandes com hastes que se cruzam (como X, K e R), use a ferramenta de 'Remover Pontos Sobrepostos' do seu programa! Isso tira centenas de pontos desnecessários, economiza linha, diminui o tempo de máquina e deixa o avesso levinho e macio!",
    voceSabia: "Em matrizes industriais de bonés estruturados, a remoção de pontos em cruzamentos é obrigatória: a costura sobre a entretela rígida do boné somada a pontos duplos quebraria a agulha instantaneamente por deflexão mecânica!",
    practicalExercise: "No seu software de bordado, desenhe duas colunas satim de 10 mm de largura cruzando-se em 'X'. Veja a contagem total de pontos. Em seguida, selecione ambas e aplique o comando 'Remove Overlaps'. Compare a contagem de pontos e inspecione a área de cruzamento em modo Raio-X.",
    quickSummary: "Algoritmo de otimização que remove agulhadas ocultas em zonas de cruzamento, evitando acúmulos rígidos, furos no tecido e quebras de agulha.",
    relatedTerms: ["Remove Overlaps", "Filtro de Densidade", "Bulletproof Spot", "Otimização de Matriz", "Wilcom", "Quebra de Agulha"],
    tags: ["xcrossing", "filtrodedensidade", "sobreposicao", "otimizacao", "software", "qualidade", "programacao"]
  }
];

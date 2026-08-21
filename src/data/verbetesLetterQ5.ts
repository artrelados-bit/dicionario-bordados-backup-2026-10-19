import { Verbete } from "../types";

export const VERBETES_LETTER_Q5: Verbete[] = [
  {
    id: "quantidade-de-linha-utilizada",
    code: "Q-034",
    letter: "Q",
    term: "Quantidade de Linha Utilizada",
    pronunciation: "quan-ti-da-de de li-nha u-ti-li-za-da",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim quantitas e linea. Refere-se à metragem linear total de fio superior consumida para bordar um projeto.",
    summary: "Metragem total em metros ou jardas de fio de bordar superior gasta para completar uma matriz.",
    definition: "A quantidade de linha utilizada é o comprimento linear consumido do cone de linha superior durante a execução do bordado. Depende da quantidade de pontos, do comprimento médio dos pontos (pontos satim consomem muito mais linha do que tatami ou ponto corrido) e da espessura do tecido bordado.",
    technicalDetails: "Regra prática de consumo da indústria: para cada 1.000 pontos de bordado padrão (comprimento médio de 4 mm), são consumidos aproximadamente 5,0 a 6,5 metros de linha superior de poliéster 40wt. Softwares profissionais calculam o consumo exato na folha de produção.",
    beginnerExplanation: "É quantos metros de linha do carretel de cima a máquina gasta para fazer o bordado. Ajuda você a saber se o carretel vai dar até o fim ou se vai acabar no meio.",
    howItWorks: [
      "1. O software calcula o percurso X-Y de cada ponto e a penetração Z através do tecido.",
      "2. A metragem por cor é discriminada na ficha técnica (ex: Cor 1 Azul = 18,4 metros).",
      "3. A máquina traciona o fio sob a tensão dos discos tensores a cada descida da agulha.",
      "4. A alavanca estica-fio alimenta a metragem necessária para envolver a laçada no verso."
    ],
    applications: [
      "Cálculo exato de custo de matéria-prima por peça em orçamentos.",
      "Previsão de reposição de estoque de cones de linha para grandes lotes.",
      "Verificação se a sobra de linha em um cone é suficiente para terminar uma matriz."
    ],
    characteristics: [
      "Calculada automaticamente na ficha técnica dos softwares de bordado.",
      "Varia conforme o tipo de ponto (Satim gasta mais fio na frente do que Tatami).",
      "Essencial para precificação profissional com base no custo de insumos."
    ],
    commonErrors: [
      "❌ Iniciar uma produção de 100 peças sem calcular se a metragem do cone será suficiente.",
      "❌ Achar que todo ponto gasta a mesma metragem de linha (um ponto corrido gasta 2x menos linha que um ponto satim largo).",
      "❌ Não incluir o custo da linha no preço final cobrado do cliente."
    ],
    troubleshootingTips: [
      "Linha acabando no meio da produção: confira a metragem estimada no software e compare com o saldo visual do cone.",
      "Consumo de linha muito maior que o previsto: verifique se a tensão superior não está excessivamente frouxa, puxando mais fio que o necessário.",
      "Divergência de cor por troca de lote: compre cones com metragem suficiente do mesmo lote de tingimento."
    ],
    dicaArtrelados: "Um cone padrão de 1.000 metros de linha de bordar é suficiente para fazer cerca de 150.000 a 180.000 pontos médios. Use essa regra rápida para calcular quantas peças você consegue bordar com um único cone!",
    voceSabia: "Em bordados 3D com EVA, o consumo de linha superior aumenta em até 40% porque o fio precisa viajar pela espessura extra da espuma antes de penetrar no tecido.",
    practicalExercise: "Abra a ficha técnica (Production Worksheet) de um arquivo no seu software. Observe a metragem de linha calculada para cada cor e some o total para descobrir o gasto de linha da peça inteira.",
    quickSummary: "Quantidade de linha utilizada é a metragem total de fio superior gasta no bordado, fundamental para controle de estoque e precificação.",
    relatedTerms: ["Consumo de Linha", "Poliéster 40wt", "Ficha Técnica", "Precificação"],
    tags: ["linha", "consumo", "metragem", "custos"]
  },
  {
    id: "quantidade-de-bobina-utilizada",
    code: "Q-035",
    letter: "Q",
    term: "Quantidade de Bobina Utilizada",
    pronunciation: "quan-ti-da-de de bo-bi-na u-ti-li-za-da",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do francês bobine e do latim quantitas. Mede o consumo do fio inferior da lançadeira.",
    summary: "Metragem linear consumida do fio fino da bobina inferior durante a execução de uma matriz de bordado.",
    definition: "A quantidade de bobina utilizada é o comprimento de linha inferior (fio 60wt ou 80wt) consumido na formação das laçadas na parte de trás do tecido. Devido ao princípio mecânico do ponto de bordado (onde a linha superior deve aparecer em 2/3 no verso em pontos satim), o consumo de bobina é proporcionalmente menor que o da linha superior.",
    technicalDetails: "Regra clássica de proporção de consumo: para cada 1 metro de linha de bobina consumido, são gastos aproximadamente 2,5 a 3,0 metros de linha superior (proporção média de 1:3). Para 1.000 pontos, gastam-se cerca de 2,0 a 2,5 metros de bobina.",
    beginnerExplanation: "É quantos metros daquela linha fininha de baixo a máquina gasta. Ela gasta bem menos do que a linha de cima porque a linha da bobina só fica escondida no verso.",
    howItWorks: [
      "1. A linha da bobina é puxada da caixa pela ponta da lançadeira a cada laçada.",
      "2. O fio inferior ancora a laçada superior no verso do tecido.",
      "3. O sensor óptico ou mecânico da máquina monitora a rotação do carretel.",
      "4. Quando a quantidade de linha restante atinge o limite crítico, o sensor emite um aviso de 'Bobina Vazia'."
    ],
    applications: [
      "Previsão de trocas de bobina antes de iniciar um bordado longo para não parar no meio.",
      "Gestão de compra de caixas de bobinas pré-bobinadas (caixas com 144 unidades).",
      "Avaliação do balanço de tensão da máquina (consumo anômalo de bobina indica tensão desregulada)."
    ],
    characteristics: [
      "Proporção média de consumo de 1/3 em relação à linha superior.",
      "Utiliza fios mais finos (60wt ou 70wt) para maximizar a metragem no carretel.",
      "Monitorada por sensores eletrônicos de nível na maioria das máquinas modernas."
    ],
    commonErrors: [
      "❌ Iniciar um bordado com 20.000 pontos com a bobina quase no final, parando a máquina em área crítica.",
      "❌ Encher a bobina com linha grossa de cima, gastando o dobro e reduzindo a metragem do carretel.",
      "❌ Ignorar o aviso de bobina baixa do painel da máquina."
    ],
    troubleshootingTips: [
      "Bobina acabando rápido demais: verifique se a tensão da linha de cima não está muito frouxa, fazendo a bobina ser puxada em excesso.",
      "Linha da bobina embolando no verso: limpe a mola da caixa de bobina e confira se a linha foi passada corretamente sob a lâmina.",
      "Sensor avisando bobina vazia falsamente: limpe a poeira da lente óptica do sensor perto da lançadeira com um pincel macio."
    ],
    dicaArtrelados: "Antes de colocar um bastidor grande na máquina para rodar uma matriz pesada, troque a bobina por uma cheinha de fábrica! É melhor guardar a bobina com restinho para projetos pequenos do que ter a máquina parando no meio de um bordado delicado.",
    voceSabia: "Uma bobina pré-enrolada descartável sem laterais plásticas (sideless) padrão 'L' consegue armazenar até 120 metros de linha 60wt em um carretel minúsculo de menos de 2 cm.",
    practicalExercise: "Borde uma matriz de 10.000 pontos com uma bobina nova. Ao terminar, retire a bobina e veja visualmente quanto de linha foi consumido para calibrar sua noção de gasto no dia a dia.",
    quickSummary: "Quantidade de bobina utilizada é o consumo do fio inferior da lançadeira, correspondendo a cerca de 1/3 do gasto total de linha do bordado.",
    relatedTerms: ["Linha de Bobina 60wt", "Caixa da Bobina", "Balanço de Tensão", "Sensor de Bobina"],
    tags: ["bobina", "consumo", "insumos", "tensão"]
  },
  {
    id: "quantidade-de-estabilizador",
    code: "Q-036",
    letter: "Q",
    term: "Quantidade de Estabilizador",
    pronunciation: "quan-ti-da-de de es-ta-bi-li-za-dor",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim quantitas e stabilis. Refere-se à área física e às dimensões de entretela cortadas para cada bastidor.",
    summary: "Área e dimensão em centímetros do corte de entretela necessário para cobrir o bastidor com sobras seguras de fixação.",
    definition: "A quantidade de estabilizador é o tamanho do pedaço de entretela cortado para um determinado projeto. Deve sempre exceder as dimensões externas do bastidor em pelo menos 2 a 3 cm em todas as bordas para garantir que os aros prendam a entretela firmemente sem soltar durante os movimentos rápidos do pantógrafo.",
    technicalDetails: "O cálculo de consumo de rolos de entretela (geralmente vendidos em bobinas de 30 cm, 40 cm ou 100 cm de largura por 50 ou 100 metros) deve prever a área do bastidor mais as margens de pegada, minimizando o desperdício de refilos.",
    beginnerExplanation: "É o tamanho do pedaço de entretela que você corta do rolo para colocar no bastidor. Tem que ser sempre um pouquinho maior que o bastidor para não escapar dos lados na hora de apertar.",
    howItWorks: [
      "1. A operadora mede as dimensões externas do bastidor a ser utilizado.",
      "2. Corta-se o estabilizador com margem de segurança de 2 a 3 cm além do aro.",
      "3. A entretela é encaixada entre os aros cobrindo 100% da área de tração.",
      "4. O aperto do parafuso fixa as quatro bordas da entretela simultaneamente."
    ],
    applications: [
      "Planejamento de corte em lote de entretelas para produção seriada.",
      "Otimização do aproveitamento de rolos de entretela para reduzir sobras de refil.",
      "Técnica de enquadramento 'flutuante' para economizar entretela em peças pequenas."
    ],
    characteristics: [
      "Deve ultrapassar as bordas do bastidor em todo o perímetro.",
      "Permite aperto homogêneo sem que as pontas escapem.",
      "Fator direto no custo unitário de insumos de cada peça bordada."
    ],
    commonErrors: [
      "❌ Cortar a entretela exatamente do tamanho do desenho, fazendo-a soltar dentro do bastidor.",
      "❌ Deixar sobras gigantescas de 15 cm fora do bastidor, jogando material caro no lixo.",
      "❌ Tentar emendar pedacinhos de entretela com fita adesiva no meio da área que será perfurada pela agulha."
    ],
    troubleshootingTips: [
      "Entretela escapando do bastidor no meio do bordado: corte pedaços maiores com pelo menos 3 cm de sobra em cada lado.",
      "Muitas sobras e retalhos acumulados: utilize a técnica de 'flutuação' colando pequenos retalhos sobre uma entretela base.",
      "Custo de entretela muito alto: compre entretela em bobinas de 100 metros em vez de rolos pequenos de 10 metros."
    ],
    dicaArtrelados: "Faça gabaritos de papelão no tamanho exato de corte para cada um dos seus bastidores (ex: molde para bastidor 10x10, 13x18, 16x26). Assim você corta a entretela no tamanho perfeito em segundos sem desperdiçar um centímetro!",
    voceSabia: "Em confecções de grande porte, rolos de entretela são cortados em guilhotinas elétricas industriais em blocos de 50 folhas de uma só vez para abastecer os operadores.",
    practicalExercise: "Pegue seu bastidor mais usado, meça a moldura externa com uma fita métrica e adicione 4 cm na largura e na altura. Corte um molde de papelão com essa medida e use-o para cortar suas próximas 5 entretelas.",
    quickSummary: "Quantidade de estabilizador é a dimensão correta de corte da entretela que garante firmeza nos aros do bastidor sem desperdício de material.",
    relatedTerms: ["Entretela Rasgável", "Bastidoramento", "Técnica de Flutuação", "Corte de Insumos"],
    tags: ["estabilizador", "entretela", "corte", "insumos"]
  },
  {
    id: "quantidade-de-camadas-de-estabilizador",
    code: "Q-037",
    letter: "Q",
    term: "Quantidade de Camadas de Estabilizador",
    pronunciation: "quan-ti-da-de de ca-ma-das de es-ta-bi-li-za-dor",
    level: "Intermediário 🟡",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim quantitas e camisia/stratum. Refere-se à sobreposição de folhas de entretela para reforço estrutural.",
    summary: "Número de folhas de entretela sobrepostas no bastidor para proporcionar a sustentação mecânica necessária ao tecido e à matriz.",
    definition: "A quantidade de camadas de estabilizador é a decisão técnica de utilizar uma, duas ou três folhas de entretela combinadas para suportar a densidade de pontos da matriz e a maleabilidade do tecido. A regra geral dita que é preferível usar duas camadas de menor gramatura cruzadas em sentidos opostos de fibra do que uma única camada hipergrossa e rígida.",
    technicalDetails: "Para tecidos elásticos (viscolycra, malha fria) ou bordados com densidade superior a 15.000 pontos, recomenda-se o uso de 2 camadas de entretela de recorte (Cut-Away) de 50 g/m² ou 1 camada de recorte combinada com 1 camada de rasgável de 40 g/m².",
    beginnerExplanation: "É quantas folhas de entretela você coloca embaixo do pano. Em tecidos fininhos ou que esticam muito, colocar duas folhas em vez de uma só evita que o bordado enrugue.",
    howItWorks: [
      "1. A primeira folha trava a elasticidade no sentido da trama do tecido.",
      "2. A segunda folha (cruzada a 90°) trava a elasticidade no sentido do urdume e na diagonal.",
      "3. As duas camadas dissipam o calor e o impacto das perfurações repetidas da agulha.",
      "4. A matriz assenta de forma plana sem repuxar as bordas para dentro."
    ],
    applications: [
      "Bordados pesados em camisas polo de malha pique (2 camadas de entretela rasgável ou recorte leve).",
      "Bordados em moletons e jaquetas esportivas (2 camadas de entretela de recorte).",
      "Bordados rendados Free-Standing Lace (2 a 3 camadas de filme hidrossolúvel espesso)."
    ],
    characteristics: [
      "Aumenta a estabilidade dimensional em matrizes de alta densidade.",
      "Cruzamento de fibras proporciona resistência isotrópica total.",
      "Deve ser dosada para não deixar a peça desconfortável e dura ao toque."
    ],
    commonErrors: [
      "❌ Colocar 4 ou 5 camadas de entretela em camisa fina, criando uma placa dura e desconfortável.",
      "❌ Usar apenas 1 camada de entretela rasgável fina em malha elástica de alta densidade.",
      "❌ Colocar as duas camadas de entretela no mesmo sentido exato de rasgo sem cruzá-las."
    ],
    troubleshootingTips: [
      "Bordado enrugando as bordas da malha: adicione uma segunda camada de entretela cruzada a 90°.",
      "Bordado muito pesado e áspero por dentro: reduza para 1 camada de entretela especial de recorte suave (Soft Cut-Away).",
      "Entretela rasgando antes do final: troque 1 folha de rasgável por 2 folhas ou use entretela de recorte."
    ],
    dicaArtrelados: "Quando usar duas camadas de entretela rasgável, posicione uma com a fibra na vertical e a outra com a fibra na horizontal. Esse cruzamento simples dobra a firmeza do tecido no bastidor!",
    voceSabia: "Em testes laboratoriais têxteis, duas camadas de entretela de 40 g/m² cruzadas suportam 65% mais tensão mecânica de perfuração do que uma única camada de 80 g/m² no mesmo sentido de fibra.",
    practicalExercise: "Borde um círculo denso em retalho de malha com 1 camada de entretela rasgável e outro com 2 camadas cruzadas a 90°. Ao tirar do bastidor, observe como o de 2 camadas ficou muito mais plano e sem ondas.",
    quickSummary: "Quantidade de camadas de estabilizador é a sobreposição calculada de folhas de entretela para garantir firmeza total em tecidos elásticos ou matrizes pesadas.",
    relatedTerms: ["Gramatura da Entretela", "Entretela Cruzada", "Entretela de Recorte", "Franzimento"],
    tags: ["camadas", "estabilizador", "entretela", "malha"]
  },
  {
    id: "quantidade-de-passagens-da-agulha",
    code: "Q-038",
    letter: "Q",
    term: "Quantidade de Passagens da Agulha",
    pronunciation: "quan-ti-da-de de pas-sa-gens da a-gu-lha",
    level: "Avançado 🔴",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim passus e acucula. Refere-se às idas e vindas consecutivas da agulha sobre a mesma linha geométrica.",
    summary: "Número de repetições de costura sobre o mesmo traço vetorial (simples, triplo, quíntuplo) para dar espessura ao contorno.",
    definition: "A quantidade de passagens da agulha é o número de vezes em que a agulha repete o percurso de costura sobre uma mesma linha vetorial sem deslocamento lateral. Um pesponto simples tem 1 passagem; o ponto triplo (Bean Stitch) tem 3 passagens (avança, recua, avança); e pontos de alto relevo podem ter 5 a 7 passagens sobrepostas.",
    technicalDetails: "Cada passagem adicional aumenta a espessura visual e a resistência mecânica da linha, mas também concentra perfurações nos mesmos furos do tecido. Em tecidos delicados, passagens excessivas (mais de 3) podem causar corte da trama têxtil (efeito picote de papel).",
    beginnerExplanation: "É quantas vezes a agulha passa costurando por cima da mesma linhazinha. Passar 3 vezes faz a linha ficar gordinha e destacada (ponto triplo), ótima para fazer contornos bem visíveis.",
    howItWorks: [
      "1. A agulha penetra no ponto A e avança para o ponto B (1ª passagem).",
      "2. A agulha recua do ponto B de volta para o ponto A (2ª passagem).",
      "3. A agulha avança novamente do ponto A para o ponto B (3ª passagem).",
      "4. O ciclo se repete ao longo de todo o vetor criando um contorno encorpado."
    ],
    applications: [
      "Contornos de rostos e olhos em bordados infantis usando ponto triplo (Bean Stitch).",
      "Pespontos reforçados estilo jeans em bolsos e jaquetas.",
      "Linhas de marcação e quilting rústico com visual artesanal de costura manual."
    ],
    characteristics: [
      "Cria relevo e presença visual sem necessidade de usar ponto satim largo.",
      "Gera linhas de alta durabilidade mecânica contra desfiamento.",
      "Aumenta a quantidade de pontos da matriz na proporção das passagens programadas."
    ],
    commonErrors: [
      "❌ Usar 5 ou 7 passagens em malha fina, cortando o tecido e abrindo rasgos contínuos.",
      "❌ Programar ponto triplo com comprimento de ponto minúsculo (menor que 2 mm), criando nós de linha.",
      "❌ Usar agulha grossa (90/14) em linhas com muitas passagens sobrepostas."
    ],
    troubleshootingTips: [
      "Tecido rasgando ao longo da linha de contorno: reduza a quantidade de passagens de 5 para 3 e aumente o comprimento do ponto para 3,0 mm.",
      "Contorno simples quase invisível no tecido: troque de pesponto simples (1 passagem) para ponto triplo (Bean Stitch - 3 passagens).",
      "Linha quebrando na 3ª passagem: use linha de bordar com boa lubricidade e agulha com ponta bola em malha."
    ],
    dicaArtrelados: "Para contornos de desenhos infantis e bichinhos fofos, prefira o ponto triplo (Bean Stitch com 3 passagens e passo de 2,5 mm) em vez do ponto satim. Ele dá um acabamento moderno, leve e que nunca sai de moda!",
    voceSabia: "O ponto triplo (Bean Stitch) consome exatamente o triplo de linha e de pontos em relação ao ponto corrido tradicional, mas confere uma textura semelhante ao pesponto manual de meada de algodão.",
    practicalExercise: "Digitalize uma mesma linha reta de 5 cm com 1 passagem (ponto corrido), 3 passagens (ponto triplo) e 5 passagens. Borde as três lado a lado e compare a espessura visual e o relevo de cada uma.",
    quickSummary: "Quantidade de passagens da agulha é o número de repetições de costura sobre o mesmo traço, definindo a espessura e o relevo das linhas de contorno.",
    relatedTerms: ["Ponto Triplo (Bean Stitch)", "Ponto Corrido", "Passo do Ponto", "Efeito Picote"],
    tags: ["passagens", "contorno", "ponto triplo", "linhas"]
  },
  {
    id: "quantidade-de-repeticoes",
    code: "Q-039",
    letter: "Q",
    term: "Quantidade de Repetições",
    pronunciation: "quan-ti-da-de de re-pe-ti-coes",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim repetitio (ação de fazer novamente, reprodução periódica). Refere-se à duplicação de desenhos no bastidor ou na produção.",
    summary: "Número de cópias idênticas de uma matriz organizadas dentro do mesmo bastidor ou executadas em lote na produção.",
    definition: "A quantidade de repetições é a multiplicação de um mesmo motivo de bordado (como brasões, etiquetas, chaveiros ou monogramas) dispostos lado a lado na área útil de um bastidor grande (recurso Multi-Design / Grid Repeat), ou o número de ciclos totais programados para um lote de confecção.",
    technicalDetails: "Em softwares, a ferramenta de repetição em grade (Matrix / Grid Copy) permite definir o espaçamento X e Y entre as peças e otimizar a sequência para que a máquina borde todas as cores 1 de uma só vez antes de trocar para a cor 2, economizando dezenas de trocas de linha.",
    beginnerExplanation: "É quantas vezes você coloca o mesmo desenhinho dentro de um bastidor grandão (para bordar vários chaveiros ou emblemas de uma vez só) sem precisar trocar o bastidor a cada peça.",
    howItWorks: [
      "1. A matriz individual é carregada na tela do software ou da máquina.",
      "2. Define-se o número de linhas (X) e colunas (Y) que cabem no bastidor selecionado.",
      "3. O software agrupa as cores de todas as cópias simultaneamente.",
      "4. A máquina borda todas as repetições em um único ciclo contínuo de bastidoramento."
    ],
    applications: [
      "Produção de dezenas de tags, chaveiros e etiquetas escolares no mesmo bastidor grande.",
      "Bordado de múltiplos escudos e insígnias para uniformes corporativos.",
      "Criação de padrões repetitivos geométricos e barrados contínuos para toalhas."
    ],
    characteristics: [
      "Multiplica a produtividade da bordadeira por hora de trabalho.",
      "Economiza entretela aproveitando toda a área útil do bastidor.",
      "Reduz drasticamente o número de trocas de linha quando as cores são agrupadas."
    ],
    commonErrors: [
      "❌ Repetir matrizes sem agrupar as cores, fazendo a máquina trocar de linha a cada pecinha individual.",
      "❌ Deixar as repetições coladas demais, impedindo o corte e o acabamento individual das peças depois.",
      "❌ Ultrapassar a área máxima de segurança do bastidor, fazendo o pantógrafo bater na moldura plástica."
    ],
    troubleshootingTips: [
      "Máquina trocando de cor 30 vezes no bastidor cheio: aplique a função 'Otimizar Cores em Repetições' (Color Sort) no software.",
      "Peças cortadas tortas após o bordado: deixe um espaçamento mínimo de 1,5 a 2 cm entre as repetições para a tesoura trabalhar com folga.",
      "Bordado encostando na borda do bastidor: reduza o número de repetições ou use um bastidor de maior dimensão."
    ],
    dicaArtrelados: "Ao produzir chaveiros e tags em quantidade no bastidor grande (ex: 13x18 ou 16x26), sempre use a ferramenta de agrupar cores. Você bordará 6 ou 8 peças no tempo que gastaria para fazer apenas duas!",
    voceSabia: "Em máquinas industriais de rolo contínuo (Schiffli), a quantidade de repetições de um mesmo padrão de renda pode ultrapassar 1.000 repetições simultâneas em um painel de 15 metros de largura.",
    practicalExercise: "Pegue uma matriz pequena de chaveiro (5x5 cm). No seu programa de bordado, multiplique para 4 repetições dentro de um bastidor 13x18 cm e aplique o 'Color Sort'. Veja como a sequência de cores se unifica para todas as cópias.",
    quickSummary: "Quantidade de repetições é a multiplicação de matrizes em um mesmo bastidor com cores unificadas, acelerando a produção seriada.",
    relatedTerms: ["Multi-Design", "Otimização de Cores", "Área Útil de Bastidor", "Produção em Série"],
    tags: ["repetições", "grade", "produção", "produtividade"]
  },
  {
    id: "quantidade-de-pontos-de-arremate",
    code: "Q-040",
    letter: "Q",
    term: "Quantidade de Pontos de Arremate",
    pronunciation: "quan-ti-da-de de pon-tos de ar-re-ma-te",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim quantitas e remetiri. Refere-se à contagem exata de micro-laçadas destinadas à amarração mecânica dos fios.",
    summary: "Número preciso de micro-pontos (tipicamente de 3 a 5 pontos) disparados para fixar a laçada no início e término de cada objeto.",
    definition: "A quantidade de pontos de arremate é a contagem de penetrações curtas e concentradas programadas para travar a laçada da linha superior com a da bobina antes de um corte ou salto. O número correto garante que o ponto nunca se solte após lavagens mecânicas, sem formar volume excessivo ou calombos rígidos na peça.",
    technicalDetails: "Padrão ótimo da indústria: 3 a 4 pontos com comprimento entre 0,6 mm e 1,0 mm para linhas normais 40wt. Para linhas finas 60wt em tecidos delicados, 3 pontos são suficientes; para fios grossos 30wt ou metálicos, recomendam-se 4 a 5 pontos com menor densidade para dissipar o nó.",
    beginnerExplanation: "É quantos pontinhos minúsculos a máquina dá no mesmo lugar para 'amarrar' a linha antes de cortar. Três ou quatro pontinhos seguram perfeitamente sem criar um bolo de linha duro.",
    howItWorks: [
      "1. Ao receber a ordem de finalizar o objeto, a máquina reduz a velocidade.",
      "2. São disparados de 3 a 4 micro-pontos cruzados ou em linha reta.",
      "3. O entrelaçamento interno com a linha da bobina trava o filamento.",
      "4. A faca corta a linha logo após o último ponto de arremate sem perigo de desmanchar."
    ],
    applications: [
      "Calibração de nós de amarração em monogramas e letras minúsculas de camisaria.",
      "Configuração de segurança em uniformes hospitalares e industriais lavados em altas temperaturas.",
      "Programação de acabamento em bordados 3D com EVA onde o fio não pode escapar."
    ],
    characteristics: [
      "Equilíbrio ideal entre resistência à tração e invisibilidade estética.",
      "Comprimento milimétrico controlado para não perfurar o mesmo ponto e cortar o tecido.",
      "Configurável globalmente nas preferências do software de bordado."
    ],
    commonErrors: [
      "❌ Programar 8 a 10 pontos de arremate, criando uma bolota dura de linha que machuca e quebra a agulha.",
      "❌ Deixar apenas 1 ou 2 pontos em tecidos lisos como cetim, fazendo a ponta da linha escapar na primeira lavagem.",
      "❌ Usar arremates muito longos (> 2 mm) que ficam visíveis saindo para fora das bordas do desenho."
    ],
    troubleshootingTips: [
      "Bordado desmanchando nas pontas: aumente a quantidade de pontos de arremate de 2 para 4 no software.",
      "Nó grosso e duro atrás das letras: reduza de 6 para 3 pontos de arremate e escolha o estilo 'Linear' (em linha).",
      "Agulha quebrando no final do texto: diminua o número de pontos de amarração para evitar acúmulo de densidade no mesmo local."
    ],
    dicaArtrelados: "A regra de ouro Artrelados para arremates perfeitos: programe 4 micro-pontos de 0,8 mm no início (Tie-in) e 4 micro-pontos no final (Tie-off). Esse é o número mágico que nunca desmancha e fica 100% invisível!",
    voceSabia: "Em testes de estresse mecânico, um arremate de 4 micro-pontos suporta mais de 50 ciclos de lavagem e centrifugação em máquina de lavar doméstica sem apresentar afrouxamento do fio.",
    practicalExercise: "No seu software de programação, abra as propriedades de arremate automático (Auto Tie). Ajuste a quantidade de pontos para 4 e o comprimento para 0,8 mm. Salve essa configuração como padrão para todas as suas matrizes.",
    quickSummary: "Quantidade de pontos de arremate é a contagem exata de micro-laçadas (ideal de 3 a 4) necessárias para travar a linha com máxima segurança e total discrição.",
    relatedTerms: ["Pontos de Amarração", "Tie-in", "Tie-off", "Qualidade do Arremate"],
    tags: ["arremate", "nós", "programação", "segurança"]
  }
];

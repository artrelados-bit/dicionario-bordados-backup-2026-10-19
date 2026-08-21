import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART5: Verbete[] = [
  {
    id: "weight-of-thread-titulagem-e-peso-da-linha",
    code: "W-021",
    letter: "W",
    term: "Weight of Thread — Peso e Titulagem da Linha (Thread Weight & Denier)",
    pronunciation: "uêit of thréd — pe-so e ti-tu-la-gem da li-nha (weɪt əv θrɛd)",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'weight' (peso, graduação de espessura) e 'thread' (linha de costura/bordado). Sistema internacional de classificação de finura e espessura de fios têxteis (Wt, Tex, Denier, dtex).",
    summary: "Sistema métrico e comercial que classifica a espessura, finura e rendimento das linhas de bordar (#40 padrão, #60 extrafina, #30/#12 grossas), regulando a densidade da matriz e o calibre da agulha.",
    definition: "O Weight of Thread (Peso da Linha / Titulagem do Fio / Thread Weight System / Classificação Numérica Wt/Denier) é a especificação técnica que padroniza a espessura e a massa linear dos fios utilizados no bordado eletrônico. No sistema 'Weight' (Wt ou Nº), a numeração é inversamente proporcional à espessura: quanto maior o número, mais fino é o fio (ex: Linha Nº 60 é mais fina que a Linha Nº 40). O padrão universal do bordado computadorizado é a linha de poliéster ou viscose Nº 40 (120 denier / 2 cabos).",
    technicalDetails: "A seleção do peso da linha exige ajustes interdependentes no software e na máquina: 1) Linha Padrão Nº 40: densidade de ponto de 0.40 mm, agulha calibre 75/11; 2) Linha Fina Nº 60: densidade mais fechada de 0.30 a 0.35 mm, agulha fina 65/9 (utilizada para letras minúsculas de 3 a 5 mm e microdetalhes); 3) Linha Grossa Nº 30 ou Nº 12 (lã/Burmilana): densidade aberta de 0.60 a 0.80 mm, agulha de olho longo 90/14 a 100/16 (para efeito rústico e artesanal). Misturar diferentes pesos de linha sem adaptar a densidade no software resulta em bordados empelotados ou falhos.",
    beginnerExplanation: "É a grossura da linha! No bordado, a numeração funciona ao contrário: quanto MAIOR o número, mais FININHA é a linha! A linha comum que todo mundo usa é a Nº 40. Se você for bordar letrinhas minúsculas de 3 mm, usa a linha Nº 60 que é super fininha com agulha fina. Se for bordar ponto rústico fofinho, usa linha Nº 12 que é grossa parecendo lã!",
    howItWorks: [
      "1. O operador define o projeto: logotipo padrão, microletras ou efeito rústico.",
      "2. Escolhe a linha com a titulagem ideal (ex: Madeira Polyneon Nº 40 para brasão; Nº 60 para legendas).",
      "3. Instala a agulha compatível com a espessura da linha (75/11 para Nº 40; 65/9 para Nº 60).",
      "4. No software de matrizes, calibra a densidade de pontos conforme o peso do fio escolhido.",
      "5. Ajusta a tensão da linha na máquina (linhas finas exigem tensão ligeiramente mais suave).",
      "6. A máquina costura com formação perfeita da laçada sem atrito excessivo no olho da agulha.",
      "7. O bordado apresenta nitidez cristalina nos detalhes e toque uniforme na superfície."
    ],
    applications: [
      "Bordados padrão de logotipos corporativos e enxovais (Linha Nº 40).",
      "Microletras em jalecos médicos e etiquetas de segurança de 3 mm (Linha Nº 60).",
      "Bordados rústicos em jaquetas jeans e casacos de inverno (Linhas Nº 30 e Nº 12).",
      "Linhas ultrafinas de bobina (Nº 60 a Nº 80) para garantir avessos macios e leves."
    ],
    characteristics: [
      "Sistema de numeração inversa (quanto maior o número, mais fino o fio).",
      "Regula diretamente a densidade de pontos da matriz no software.",
      "Determina o tamanho do olho da agulha e a tensão mecânica na máquina."
    ],
    commonErrors: [
      "❌ Usar linha grossa Nº 30 em uma matriz programada com densidade densa de linha Nº 40 (0.38 mm), travando a máquina e quebrando a agulha.",
      "❌ Tentar passar linha Nº 12 em agulha fina 70/10, desfiando e cortando o fio imediatamente.",
      "❌ Bordar letras de 3 mm com linha grossa Nº 40 e agulha 90/14, transformando o texto em uma mancha ilegível."
    ],
    troubleshootingTips: [
      "As letras pequenas ficaram todas borradas e ilegíveis: troque a linha por uma Nº 60, use agulha 65/9 e reprograme o espaçamento de pontos para 0.32 mm.",
      "A linha grossa está quebrando na entrada do olho: instale uma agulha Topstitch calibre 90/14 ou 100/16 com olho longo e reduza a tensão superior em 2 voltas.",
      "O bordado ficou ralo e o tecido aparece no fundo: se estiver usando linha Nº 60 por engano no lugar da Nº 40, feche a densidade de pontos no software para 0.30 mm."
    ],
    dicaArtrelados: "Tenha sempre no seu ateliê 2 cones de linha branca e preta Nº 60 com agulhas 65/9! Quando aquele cliente chegar pedindo para bordar 'Dr. Fulano de Tal - Especialista em Cardiologia' em letras de 4 mm no bolso do jaleco, você usa a linha 60 e entrega uma obra de arte que nenhuma outra bordadeira da cidade consegue fazer!",
    voceSabia: "O sistema 'Weight' tradicional originou-se na Inglaterra no século XVIII e baseia-se na quantidade de meadas de 840 jardas de fio necessárias para pesar exatamente uma libra (453 gramas)!",
    practicalExercise: "Pegue um cone de linha de bordar padrão Nº 40 e compare com a linha da sua canelinha (que geralmente é Nº 60 ou 80). Passe os fios entre os dedos e sinta a diferença nítida de espessura e flexibilidade.",
    quickSummary: "Classificação da espessura e finura das linhas têxteis (sistema inverso: maior número = fio mais fino), regulando a densidade da matriz e o calibre da agulha.",
    relatedTerms: ["Titulagem", "Linha 40", "Linha 60", "Denier", "Tex", "Calibre de Agulha", "Microletras", "Densidade de Ponto"],
    tags: ["weightofthread", "pesodalinha", "titulagem", "fios", "linha40", "linha60", "agulhas", "densidade"]
  },
  {
    id: "weight-of-fabric-gramatura-e-peso-do-tecido",
    code: "W-022",
    letter: "W",
    term: "Weight of Fabric — Gramatura e Peso do Tecido (Fabric Weight & GSM)",
    pronunciation: "uêit of fé-bric — gra-ma-tu-ra e pe-so do te-ci-do (weɪt əv ˈfæbrɪk)",
    level: "Iniciante 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculina / feminina.",
    origin: "Do inglês 'weight' (peso) e 'fabric' (tecido). Expressão internacional da densidade de massa superficial têxtil expressa em Gramas por Metro Quadrado (g/m² ou GSM).",
    summary: "Medida da massa por unidade de área de um tecido (g/m²), classificando-o em leve, médio ou pesado para determinar a escolha da entretela, da agulha e da matriz.",
    definition: "O Weight of Fabric (Peso do Tecido / Gramatura Têxtil / Fabric Mass Density / GSM - Grams per Square Meter) é a grandeza física que expressa a massa de um metro quadrado de tecido em gramas (g/m² ou oz/yd²). No bordado eletrônico, a gramatura é o critério primário utilizado para classificar o substrato têxtil em três grandes grupos: Tecidos Leves (abaixo de 130 g/m² - cambraia, seda, voil), Tecidos Médios (140 a 250 g/m² - tricoline, malha de algodão, piquet, sarja leve) e Tecidos Pesados (acima de 260 g/m² - jeans grosso, sarja pesada, lona, couro, moletom peluciado).",
    technicalDetails: "A relação entre a gramatura do tecido e a quantidade de pontos da matriz segue a regra da proporcionalidade mecânica: tecidos leves suportam matrizes leves com densidade aberta (0.45 a 0.50 mm) e exigem entretelas estáveis para prevenir enrugamentos severos (Cutaway leve ou duas camadas de Wash-Away). Tecidos pesados suportam blocos densos de tatami e ponto cheio com mais de 30.000 pontos, exigindo agulhas mais robustas (calibres 80/12 a 90/14) e entretelas rasgáveis médias a pesadas (60 a 80 g/m²).",
    beginnerExplanation: "É o 'peso' ou a grossura do tecido da peça que você vai bordar! Um tecido fininho e levinho (como tecido de camisa de seda ou fraldinha) precisa de matriz levinha e entretela bem pensada para não enrugar. Um tecido grosso e pesado (como jeans e lona) aguenta bordados grandes, cheios e pesados sem sofrer!",
    howItWorks: [
      "1. O operador recebe a peça do cliente e avalia a gramatura do tecido pelo toque e pela ficha técnica.",
      "2. Classifica a peça: Leve (ex: camisa de algodão 110 g/m²), Média (polo 180 g/m²) ou Pesada (jaqueta 320 g/m²).",
      "3. Seleciona a gramatura da entretela correspondente (ex: entretela de 50 g/m² para peças médias).",
      "4. No software, calibra a densidade e o tipo de subponto conforme a resistência do tecido.",
      "5. Escolhe a agulha apropriada para o peso da peça (70/10 para leves; 75/11 para médios; 90/14 para pesados).",
      "6. A máquina executa o bordado em perfeito equilíbrio estrutural com o peso do tecido.",
      "7. A peça mantém caimento natural e estabilidade dimensional sem deformações pós-lavagem."
    ],
    applications: [
      "Seleção técnica de entretelas rasgáveis, recortáveis ou solúveis.",
      "Dimensionamento da densidade de pontos em softwares de digitalização.",
      "Cálculo de precificação e velocidade ideal de produção na máquina.",
      "Prevenção de franzimento e deformação em roupas de verão e vestidos finos."
    ],
    characteristics: [
      "Medido universalmente em Gramas por Metro Quadrado (g/m² / GSM).",
      "Classifica tecidos em Leves (<130 g/m²), Médios (140-250 g/m²) e Pesados (>260 g/m²).",
      "Determina a capacidade de sustentação de pontos da peça."
    ],
    commonErrors: [
      "❌ Bordar um brasão denso de 25.000 pontos em uma camiseta leve de 110 g/m², transformando a camisa em uma placa dura e enrugada como papel amassado.",
      "❌ Usar agulha grossa 90/14 em tecidos leves de cambraia, deixando furos visíveis e cortando os fios da peça.",
      "❌ Usar entretela rasgável fina de 35 g/m² em jaquetas pesadas de sarja, fazendo a entretela romper no primeiro contorno."
    ],
    troubleshootingTips: [
      "O tecido leve franziu todo ao redor do bordado: reduza a densidade de pontos no software em 20%, aumente a compensação de repuxo e substitua a entretela rasgável por entretela recortável (Cutaway leve).",
      "A agulha está entortando e quebrando ao bater no tecido: o tecido tem gramatura pesada; substitua a agulha fina por uma agulha 90/14 Jeans ou titânio.",
      "O bordado ficou pesado e desconfortável na pele em tecido médio: substitua os fundos de tatami pesado por pontos decorativos abertos ou tecidos de aplique."
    ],
    dicaArtrelados: "A regra de ouro da harmonia do bordado: 'Bordado pesado pede tecido pesado; tecido leve pede bordado leve'! Nunca coloque um brasão cheio de fundo sólido em uma camisetinha fina de viscose: para peças leves, use monogramas de contorno vazado ou letrinhas limpas!",
    voceSabia: "Na indústria da moda internacional, a gramatura do tecido é medida com precisão milimétrica cortando um círculo perfeito de 100 cm² do tecido com um cortador circular especial e pesando-o em uma balança analítica digital!",
    practicalExercise: "Pegue uma fralda de bebê, uma camisa polo e uma perna de calça jeans velha. Sinta o peso e a textura de cada um nas mãos e anote mentalmente a diferença de agulha e entretela que você usaria para cada uma.",
    quickSummary: "Massa superficial do tecido expressa em g/m² (GSM), que orienta a escolha técnica da agulha, da entretela e da densidade de pontos da matriz.",
    relatedTerms: ["Gramatura", "GSM", "Tecido Leve", "Tecido Pesado", "Caimento Têxtil", "Entretela Recortável", "Densidade de Ponto"],
    tags: ["weightoffabric", "gramatura", "pesodotecido", "gsm", "tecidos", "estabilidade", "entretela"]
  },
  {
    id: "winding-enrolamento-e-tensao-da-linha-de-bobina",
    code: "W-023",
    letter: "W",
    term: "Winding — Enrolamento e Tensão da Linha de Bobina (Thread Spooling & Winding)",
    pronunciation: "uáin-ding — en-ro-la-men-to e ten-são (ˈwaɪndɪŋ)",
    level: "Iniciante 🟢",
    category: "Acessórios & Equipamentos",
    grammarClass: "Substantivo masculino.",
    origin: "Do verbo inglês 'to wind' (enrolar, dar voltas, bobinar). Ação mecânica de enrolamento contínuo de fios em núcleos cilíndricos, carretéis e canelinhas.",
    summary: "Processo mecânico de enrolamento ordenado e sob tensão constante da linha de bobina nas canelinhas metálicas ou plásticas da máquina de bordar.",
    definition: "O Winding (Enrolamento de Linha / Bobinamento / Enchimento de Canelinha / Thread Winding Process) é a operação mecânica ou eletromecânica pela qual a linha de bobina (Nº 60 a Nº 80) é transferida de cones industriais de alta metragem para as canelinhas (Bobbins) de trabalho (Classe L, Classe 15 ou Classe M). A qualidade do enrolamento — caracterizada pela uniformidade das espiras cruzadas, firmeza de empacotamento e ausência de nós ou laçadas frouxas — é um dos fatores mais determinantes para a estabilidade da tensão inferior durante a costura.",
    technicalDetails: "Durante o Winding, a linha deve passar por um conjunto tensor com mola calibrada que aplica uma resistência controlada de 20 a 30 gf. Se o enrolamento for realizado frouxo (Loose Winding), as espiras externas afundam sob as camadas internas durante o giro na caixa de bobina, travando a saída da linha e causando arrebentamentos na máquina. Se for enrolado com tensão excessiva (Over-Tight Winding), a linha de poliéster é esticada além de seu limite elástico, perdendo tenacidade e contraindo a bobina após o enchimento a ponto de deformar canelinhas plásticas.",
    beginnerExplanation: "É o ato de encher a canelinha com linha! Quando você vai encher a canelinha, a linha precisa ser enrolada bem retinha e firminha, como se fosse um carretel que você acabou de comprar na loja. Se ficar mole e fofa, ela vai travar dentro da máquina e arrebentar a linha toda hora!",
    howItWorks: [
      "1. O operador passa o fio do cone grande pelos guias e entre os discos tensores do enchedor.",
      "2. Encaixa a canelinha no pino rotativo e dá duas voltas manuais com a linha para firmar.",
      "3. Aciona o enchedor da máquina ou a caneladeira elétrica de bancada.",
      "4. O motor gira enrolando a linha de forma homogênea de baixo para cima.",
      "5. A linha forma camadas cruzadas e compactas sob tensão constante.",
      "6. Ao atingir 85% a 90% da capacidade total da canelinha, o sensor desarma o giro.",
      "7. A canelinha cheia apresenta corpo duro e uniforme, pronta para costurar com perfeição."
    ],
    applications: [
      "Preparação de lotes de canelinhas para produção contínua no ateliê.",
      "Enchimento de canelinhas com linhas coloridas especiais para peças com avesso aparente.",
      "Abastecimento diário de máquinas monolinhas e industriais multicabeçotes.",
      "Padronização de tensão mecânica em grandes ateliês de confecção."
    ],
    characteristics: [
      "Exige controle de tensão mecânica (firmeza compacta sem frouxidão).",
      "Distribuição uniforme de espiras cruzadas de ponta a ponta.",
      "Capacidade preenchida ideal: até 85-90% da borda da canelinha."
    ],
    commonErrors: [
      "❌ Encher a canelinha sem passar a linha pelos discos tensores, gerando uma bobina fofa que embola na máquina.",
      "❌ Encher a canelinha até transbordar para fora da borda metálica, fazendo a bobina raspar e travar na caixa de bobina.",
      "❌ Usar canelinha metálica amassada ou com bordas empenadas no enchedor."
    ],
    troubleshootingTips: [
      "A linha da bobina está saindo com trancos durante o bordado: a canelinha foi enrolada frouxa; descarte a linha e enrole novamente passando corretamente pelos tensores.",
      "A linha branca da bobina está aparecendo na frente do bordado: confira se a canelinha foi enrolada com tensão uniforme e faça o teste da gota na caixa de bobina.",
      "O enchedor parou de girar antes de encher a metade: limpe a poeira e fiapos acumulados na borracha do pino do enchedor."
    ],
    dicaArtrelados: "O 'Teste do Polegar' da Artrelados: depois de encher a sua canelinha, aperte a linha com a ponta do seu polegar! Se a linha estiver dura como madeira, está perfeita! Se o seu dedo afundar na linha como se fosse um travesseiro fofo, a linha vai embolar na máquina: aperte os tensores e enrole outra!",
    voceSabia: "Nas fábricas de alta velocidade, a grande maioria dos operadores prefere utilizar canelinhas pré-bobinadas industriais descartáveis (Pre-Wound Bobbins), que são enroladas por robôs em câmaras a vácuo com até 30% mais linha que uma canelinha feita à mão!",
    practicalExercise: "Encha uma canelinha na sua máquina e faça o Teste do Polegar. Verifique se a linha está lisa, firme e preenchendo até 1 mm antes da borda do metal.",
    quickSummary: "Processo mecânico de enrolamento ordenado e sob tensão controlada da linha de bobina nas canelinhas, essencial para a estabilidade da tensão inferior.",
    relatedTerms: ["Bobbin Winding", "Canelinha", "Bobina", "Tensão Inferior", "Caixa de Bobina", "Pre-Wound Bobbin", "Caneladeira"],
    tags: ["winding", "enrolamento", "canelinha", "bobina", "bobinamento", "tensao", "acessorios"]
  },
  {
    id: "bobbin-winding-enrolamento-automatico-da-canelinha",
    code: "W-024",
    letter: "W",
    term: "Bobbin Winding — Enrolamento Automático da Canelinha (Motorized Bobbin Spooling)",
    pronunciation: "bó-bin uáin-ding — en-ro-la-men-to au-to-má-ti-co da ca-ne-li-nha (ˈbɑːbɪn ˈwaɪndɪŋ)",
    level: "Iniciante 🟢",
    category: "Acessórios & Equipamentos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'bobbin' (pequena bobina/canelinha cilíndrica) e 'winding' (enrolamento). Sistema automatizado integrado às máquinas de costura e bordado desde a era industrial.",
    summary: "Mecanismo integrado ou acessório elétrico independente com embreagem e corte automático projetado para encher canelinhas com precisão e parada eletrônica.",
    definition: "O Bobbin Winding (Enrolamento Mecânico da Canelinha / Sistema Automático de Enchimento de Bobinas / Motorized Bobbin Winder) é o subsistema eletromecânico incorporado na carcaça da máquina de bordar ou operado em unidade de bancada independente, equipado com motor próprio ou acoplado ao eixo principal por embreagem de desarme. Sua função é executar o bobinamento uniforme e contínuo de canelinhas através de um conjunto oscilante de guia-fio transversal que garante a distribuição homogênea das espiras de linha.",
    technicalDetails: "Nos sistemas modernos de Bobbin Winding, sensores ópticos de infravermelho ou alavancas mecânicas calibradas monitoram o diâmetro acumulado de linha na canelinha. Ao atingir o volume ideal pré-programado (cerca de 20 a 22 mm de diâmetro para canelinhas Classe L), o sistema desativa a tração do motor elétrico instantaneamente, impedindo a sobrecarga volumétrica. Discos de fricção com ranhuras espiraladas promovem um leve efeito de polimento térmico que reduz a eletricidade estática da linha de poliéster durante o enrolamento a 2.000 RPM.",
    beginnerExplanation: "É o sistema prático da sua máquina de bordar que enche a canelinha para você! Você só coloca a canelinha vazia no pino, empurra a alavanquinha e a máquina enrola tudo sozinha em poucos segundos e para automaticamente quando a canelinha fica cheia!",
    howItWorks: [
      "1. O operador passa o fio pelo guia de mastro e ao redor do botão tensor do enchedor.",
      "2. Passa a ponta da linha pelo furinho da canelinha vazia de dentro para fora.",
      "3. Encaixa a canelinha no pino do enchedor e empurra o pino para a direita (posição de trava).",
      "4. Pressiona o botão de início de bobinamento ou o pedal da máquina.",
      "5. O pino gira rapidamente enquanto a alavanca guia distribui o fio em camadas perfeitas.",
      "6. Ao completar o enchimento, o sensor mecânico destrava o pino para a esquerda e o motor para.",
      "7. O operador corta a pontinha com a lâmina lateral e a canelinha está pronta para o uso."
    ],
    applications: [
      "Enchimento rápido de canelinhas durante pausas de troca de bastidor.",
      "Manutenção de estoque de canelinhas prontas para produções urgentes.",
      "Enchimento independente em máquinas que permitem bordar e encher bobina simultaneamente.",
      "Padronização de carretéis de teste para checagem de tensão diária."
    ],
    characteristics: [
      "Parada automática por sensor óptico ou alavanca de volume.",
      "Desarme de embreagem para proteção do motor da máquina.",
      "Distribuição transversal homogênea da linha de borda a borda."
    ],
    commonErrors: [
      "❌ Segurar a alavanca de parada com a mão para 'encher mais um pouquinho', entortando a canelinha e forçando o motor do enchedor.",
      "❌ Deixar a ponta inicial do fio solta e comprida para fora, fazendo a linha enrolar no eixo do pino e travar o motor.",
      "❌ Usar canelinhas de tamanho incompatível com a máquina (ex: usar canelinha alta Classe 15 em máquina que usa Classe L rasa)."
    ],
    troubleshootingTips: [
      "A canelinha está enchendo em formato de cone (mais linha em cima ou embaixo): solte o parafuso do pino tensor e suba ou desça a altura do pino guia em 1 mm para nivelar o enchimento.",
      "O enchedor patina e não gira a canelinha: substitua o anel de borracha do enchedor de bobina (Bobbin Winder Ring) que pode estar ressecado ou gasto.",
      "A linha quebrou durante o enchimento rápido: reduza a velocidade de bobinamento no painel e certifique-se de que o cone de linha desenrole suavemente sem prender na base."
    ],
    dicaArtrelados: "Sempre que for encher uma canelinha nova, segure a pontinha da linha para cima nos primeiros 5 giros da máquina e depois corte essa pontinha bem rente com uma tesourinha! Assim a ponta nunca embola no eixo e a sua máquina fica sempre limpa e rápida!",
    voceSabia: "As primeiras patentes de enchedores automáticos de bobina acoplados a máquinas de costura foram registradas em 1860 pelo inventor Isaac Singer, revolucionando a costura ao eliminar o enrolamento manual por manivela!",
    practicalExercise: "Encha uma canelinha na sua máquina observando o momento exato em que o pino destrava sozinho. Corte a linha rente e encaixe na caixa de bobina para verificar o giro suave.",
    quickSummary: "Sistema mecanizado com parada automática projetado para encher canelinhas de forma rápida, compacta e uniforme sem necessidade de controle manual.",
    relatedTerms: ["Winding", "Canelinha", "Enchedor de Bobina", "Caixa de Bobina", "Classe L", "Classe 15", "Tensão de Bobina"],
    tags: ["bobbinwinding", "enrolamento", "canelinha", "bobina", "automatico", "maquina", "acessorios"]
  },
  {
    id: "winding-direction-direcao-de-enrolamento-e-giro-da-linha",
    code: "W-025",
    letter: "W",
    term: "Winding Direction — Direção de Enrolamento e Giro da Linha (Clockwise vs. Counterclockwise)",
    pronunciation: "uáin-ding di-rék-shon — di-re-ção de en-ro-la-men-to (ˈwaɪndɪŋ daɪˈrɛkʃən)",
    level: "Iniciante 🟢",
    category: "Acessórios & Equipamentos",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'winding' (enrolamento/giro) e 'direction' (orientação no espaço). Sentido horário (Clockwise) ou anti-horário (Counterclockwise) de rotação da bobina na caixa.",
    summary: "Sentido correto de rotação da canelinha dentro da caixa de bobina (formato da letra 'P' ou horário/anti-horário) que ativa a mola tensora e garante a saída suave da linha.",
    definition: "A Winding Direction (Direção de Enrolamento / Sentido de Saída da Linha da Bobina / Bobbin Rotation Orientation) é a orientação angular estrita pela qual a linha deve desenrolar de dentro da caixa de bobina (Bobbin Case) durante a formação da laçada. A regra universal para a imensa maioria das máquinas domésticas e industriais (como Brother, Tajima, Janome, Barudan e Happy) exige que a canelinha seja inserida de forma que a linha saia desenrolando no sentido anti-horário, formando o desenho visual nítido da letra 'P' (P-Shape Rule).",
    technicalDetails: "A direção de rotação não é uma mera convenção visual, mas um princípio de mecânica de fricção: 1) Sentido Correto (Anti-Horário / Letra P): à medida que a linha é puxada para a fenda da caixa de bobina, o giro cria um efeito de arrasto contra a mola tensora plana de aço, aplicando a resistência necessária de 20 a 25 gf com frenagem estável; 2) Sentido Incorreto (Horário / Letra Q): a linha escapa por baixo da mola sem sofrer atrito, resultando em tensão inferior zerada, linha da bobina subindo em laçadas frouxas para o topo do bordado (Birdnesting) e perda total da sincronia de ponto.",
    beginnerExplanation: "É o lado certo de colocar a canelinha dentro da caixinha dela na máquina! A regra de ouro mais famosa do mundo do bordado é a 'Regrinha da Letra P': segure a canelinha na mão olhando para ela; o fiozinho que sai dela tem que ficar caindo pelo lado esquerdo formando a letra 'P'! Se formar a letra 'Q' (fio saindo pela direita), está ao contrário e o bordado embola!",
    howItWorks: [
      "1. O operador pega a canelinha cheia com a mão esquerda.",
      "2. Puxa a ponta da linha para verificar a direção: o fio deve descer pelo lado esquerdo formando a letra 'P'.",
      "3. Encaixa a canelinha nessa posição dentro da caixa de bobina (ou na lançadeira horizontal).",
      "4. Passa a linha pela fenda lateral da caixa e puxa sob a mola tensora metálica.",
      "5. Ao puxar o fio com os dedos, a canelinha gira suavemente no sentido anti-horário.",
      "6. A mola tensora aplica a resistência calibrada na saída do fio.",
      "7. A máquina borda com avesso perfeito (1/3 de linha branca no centro do ponto cheio) sem laçadas soltas."
    ],
    applications: [
      "Colocação correta da canelinha em todas as máquinas de bordar domésticas e industriais.",
      "Solução imediata de problemas de linha de bobina subindo para o direito da peça.",
      "Treinamento básico obrigatório para novas bordadeiras no ateliê.",
      "Troca rápida de bobinas durante produções em série com zero erros de tensão."
    ],
    characteristics: [
      "Regra universal da 'Letra P' (saída no sentido anti-horário).",
      "Garante a ancoragem perfeita do fio sob a mola tensora da caixa de bobina.",
      "Previne embolamento inferior e laçadas frouxas no topo do bordado."
    ],
    commonErrors: [
      "❌ Inserir a canelinha ao contrário (formando a letra 'Q'), fazendo a linha soltar sem nenhuma pressão e estragar o bordado.",
      "❌ Esquecer de passar a linha por baixo da chapinha/mola metálica da caixa de bobina.",
      "❌ Puxar a linha com força para o lado errado, quebrando a molinha de retenção."
    ],
    troubleshootingTips: [
      "A linha branca da bobina subiu e cobriu as letras coloridas na frente: a canelinha foi colocada ao contrário ou a linha não entrou na mola tensora; retire a canelinha e recoloque formando a letra 'P'.",
      "A linha da bobina está travada e não puxa: verifique se a linha não deu uma volta dupla ao redor do eixo da canelinha.",
      "A canelinha pula e chacoalha dentro da caixa: certifique-se de que a mola de frenagem (Bobbin Brake Spring) no fundo da caixa de bobina esteja instalada e com pressão adequada."
    ],
    dicaArtrelados: "Grave para sempre a musiquinha do ateliê: 'Canelinha com letra P, bordado lindo você vai ver! Canelinha com letra Q, vai dar nó e problema pra você!' Olhe a canelinha antes de colocar na máquina e você nunca mais terá linha branca subindo no bordado!",
    voceSabia: "A regra da letra 'P' foi desenhada nos manuais técnicos japoneses da Brother e da Tajima na década de 1970 como um pictograma internacional intuitivo para que operadores de qualquer país e idioma pudessem operar as máquinas sem erros de tradução!",
    practicalExercise: "Segure uma canelinha suspensa pela linha no ar. Se ela formar o formato da letra 'P', coloque na caixa de bobina e sinta a resistência suave da mola puxando a ponta do fio.",
    quickSummary: "Sentido correto de rotação da canelinha na caixa de bobina (regra da letra 'P' / anti-horário) que engata a mola tensora e garante a estabilidade dos pontos.",
    relatedTerms: ["Regra da Letra P", "Caixa de Bobina", "Tensão de Bobina", "Mola Tensora", "Birdnesting", "Sentido Anti-Horário"],
    tags: ["windingdirection", "direcao", "rotacao", "letrap", "canelinha", "caixadebobina", "tensao", "ajuste"]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART1: Verbete[] = [
  {
    id: "warp-urdume-urdidura-estrutura-longitudinal",
    code: "W-001",
    letter: "W",
    term: "Warp — Urdume / Urdidura (Estrutura Têxtil Longitudinal)",
    pronunciation: "uórp — ur-du-me / ur-di-du-ra (wɔːrp)",
    level: "Iniciante 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino / feminino.",
    origin: "Do inglês arcaico 'wearp' (aquilo que é lançado/estendido) e do latim 'ordiri' (começar a tecer, urdir). Conjunto de fios esticados longitudinalmente no tear.",
    summary: "Conjunto de fios paralelos dispostos no sentido do comprimento (fio reto) do tecido plano, que oferece a maior rigidez e estabilidade mecânica contra o repuxo.",
    definition: "O Warp (Urdume ou Urdidura) é o sistema longitudinal de fios paralelos estendidos sob alta tensão no tear durante a tecelagem plana. O urdume corre estritamente paralelo às ourelas (bordas laterais de acabamento) do rolo de tecido. No bordado computadorizado, o urdume representa o eixo de maior estabilidade mecânica e menor elasticidade, servindo como a principal linha de referência para o alinhamento da entretela, do bastidor e dos ângulos de inclinação dos pontos de preenchimento.",
    technicalDetails: "Devido ao processo de engomagem e tensionamento no tear, os fios do urdume apresentam torção mais firme e maior resistência à tração (N/m²) do que os fios da trama. Quando o bordado aplica pontos cheios (Satin) paralelos ao urdume, o repuxamento mecânico é mínimo. Já pontos costurados perpendicularmente ao urdume tendem a aproximar as colunas longitudinais. O alinhamento ortogonal correto do urdume com o eixo Y do pantógrafo é pré-requisito para evitar deformações geométricas e cantos desalinhados.",
    beginnerExplanation: "É o 'sentido do fio reto' do tecido, aquele que segue paralelo ao comprimento da peça e que quase não estica! Quando você puxa o tecido pelas pontas no sentido do urdume, ele fica bem firme. Conhecer o urdume ajuda a colocar a peça retinha no bastidor para o bordado não ficar torto.",
    howItWorks: [
      "1. O operador localiza a ourela do tecido ou a linha do comprimento para identificar o urdume.",
      "2. Ao posicionar a peça no bastidor, alinha o urdume perfeitamente paralelo às marcas de centro (X ou Y).",
      "3. O digitalizador leva em consideração a orientação do urdume ao definir os ângulos dos subpontos.",
      "4. A máquina costura os pontos distribuindo a tração elástica ao longo da firmeza dos fios do urdume.",
      "5. A peça mantém seu formato geométrico sem desvios angulares.",
      "6. Ao soltar do bastidor, o tecido ao redor do bordado permanece liso e sem dobras.",
      "7. A resistência longitudinal garante longa durabilidade após dezenas de lavagens."
    ],
    applications: [
      "Alinhamento perfeito de camisas sociais, calças e toalhas no bastidor.",
      "Planejamento de orientação de corte em matrizes de grandes formatos.",
      "Cálculo de compensação de repuxo conforme a resistência do tecido plano.",
      "Prevenção de enrugamento em tecidos nobres como linho e cambraia de algodão."
    ],
    characteristics: [
      "Paralelo às ourelas do rolo de tecido.",
      "Apresenta a menor taxa de elasticidade do tecido plano.",
      "Fios mais tensionados e resistentes a perfurações repetidas."
    ],
    commonErrors: [
      "❌ Montar o tecido no bastidor em diagonal (no viés) achando que está paralelo ao urdume, causando repuxamento assimétrico.",
      "❌ Ignorar a linha do urdume em tecidos com riscas de giz ou xadrez, deixando as letras visivelmente tortas.",
      "❌ Puxar o tecido transversalmente com força excessiva durante a colocação do aro do bastidor."
    ],
    troubleshootingTips: [
      "O bordado saiu oval em vez de perfeitamente circular: o tecido foi colocado desalinhado em relação ao urdume; use gabarito com esquadro para montar a peça no bastidor.",
      "As linhas verticais repuxaram o tecido: aumente a compensação de repuxo no sentido da trama e adicione subponto perpendicular ao urdume.",
      "Dificuldade de achar o urdume em retalhos sem ourela: puxe um fio solto na ponta; o fio que sai mais reto e com menos elasticidade pertence ao urdume."
    ],
    dicaArtrelados: "Para nunca errar o alinhamento no bastidor, olhe as tramas do tecido contra a luz: o urdume é sempre a linha que corre bem retinha e não estica nadinha! Alinhe essa linha com as marquinhas centrais do seu bastidor e seus bordados ficarão impecavelmente retos!",
    voceSabia: "Na tecelagem tradicional medieval, os fios do urdume eram encerados à mão com gordura animal para suportar o atrito diário do movimento das lançadeiras sem se romperem!",
    practicalExercise: "Pegue um retalho de tecido de algodão (tricoline) e tente esticar no sentido do comprimento (urdume) e depois na largura (trama). Sinta como o urdume é muito mais rígido e estável.",
    quickSummary: "Sentido longitudinal dos fios do tecido plano paralelo à ourela, caracterizado por alta rigidez e menor elasticidade, essencial para o alinhamento no bastidor.",
    relatedTerms: ["Urdume", "Trama", "Weft", "Ourela", "Fio Reto", "Compensação de Repuxo", "Tecido Plano"],
    tags: ["warp", "urdume", "urdidura", "tecido", "estrutura", "fioreto", "alinhamento"]
  },
  {
    id: "warp-thread-fio-de-urdume-filamento-longitudinal",
    code: "W-002",
    letter: "W",
    term: "Warp Thread — Fio de Urdume (Filamento Longitudinal Estrutural)",
    pronunciation: "uórp thréd — fio de ur-du-me (wɔːrp θrɛd)",
    level: "Intermediário 🟡",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'warp' (urdume) e 'thread' (fio, filamento). Termo de tecnologia têxtil para os fios individuais montados no pente do tear.",
    summary: "Fio individual que compõe a estrutura longitudinal do tecido plano, submetido a alta torção e engomagem para resistir à tração e atrito durante a tecelagem e a costura.",
    definition: "O Warp Thread (Fio de Urdume / Fio de Cadeia) é cada um dos fios individuais que correm no sentido longitudinal de um tecido plano. Esses fios são fiados com maior quantidade de torções por polegada (TPI) e recebem tratamentos químicos de engomagem (Sizing) para resistir à alta tensão cíclica do tear. Durante a penetração da agulha de bordar, o fio de urdume oferece maior resistência mecânica ao deslocamento lateral do que o fio de trama, influenciando diretamente a formação da laçada e a estabilidade da perfuração.",
    technicalDetails: "Em análises microscópicas de penetração de agulhas de bordar, constata-se que agulhas com ponta afiada (Sharp / RG) podem perfurar ou seccionar o fio de urdume caso este esteja sob tensão excessiva no bastidor, originando pequenos furos (Needle Holes) visíveis após a lavagem. Para tecidos de camisa com fios de urdume finos e nobres (algodão egípcio 80 a 120 fios), recomenda-se o uso de agulhas ponta bola fina (Ball Point 65/9 a 70/10 SES), que deslizam entre os fios de urdume sem cortá-los.",
    beginnerExplanation: "É cada um dos fiozinhos compridos que formam a estrutura do tecido no sentido do comprimento. Eles são mais durinhos e bem torcidos para segurar o tecido inteiro firme. Usar a agulha certa evita que você corte esses fiozinhos e fure a roupa do cliente!",
    howItWorks: [
      "1. A agulha de bordar desce em alta rotação em direção ao tecido.",
      "2. Ao penetrar a camada têxtil, a ponta da agulha encontra o fio de urdume.",
      "3. Uma agulha de ponta arredondada (SES) afasta o fio de urdume para o lado sem romper suas fibras.",
      "4. A linha de bordar é inserida criando a laçada na caixa de bobina.",
      "5. A agulha sobe e o fio de urdume retorna suavemente à sua posição de repouso.",
      "6. A integridade estrutural do tecido é 100% preservada ao redor do ponto.",
      "7. A peça não apresenta desfiamentos nem furos após o uso contínuo."
    ],
    applications: [
      "Seleção de ponta de agulha ideal para camisaria fina e tecidos de alta densidade.",
      "Prevenção de furos e cortes de fibras em tecidos de alfaiataria.",
      "Análise de defeitos de corte de fio em perícias de qualidade têxtil.",
      "Ajuste da densidade de pontos para evitar sobrecarga em fios individuais."
    ],
    characteristics: [
      "Maior número de torções e maior resistência à tração que os fios de trama.",
      "Tratado com goma de proteção na fiação industrial.",
      "Fixo na posição vertical em relação à largura do rolo de tecido."
    ],
    commonErrors: [
      "❌ Usar agulha grossa de ponta aguda (90/14 Sharp) em camisas finas, cortando os fios de urdume e abrindo buracos.",
      "❌ Concentrar milhares de pontos em uma área minúscula, rompendo todos os fios de urdume subjacentes.",
      "❌ Rasgar a entretela rasgável com força na direção perpendicular aos fios de urdume, deformando a trama da peça."
    ],
    troubleshootingTips: [
      "Apareceram pequenos furinhos ao redor do contorno após a primeira lavagem: a agulha cortou os fios de urdume; troque para agulha Ball Point fina (70/10 SES) e reduza a densidade em 15%.",
      "O tecido está desfiando na borda do bordado: utilize entretela recortável (Cutaway) para manter os fios de urdume ancorados permanentemente.",
      "A agulha está desviando e entortando ao bater no tecido: o tecido possui fios de urdume sintéticos ultradensos; use agulha de titânio de haste reforçada."
    ],
    dicaArtrelados: "Para camisas de algodão nobre e jalecos de médicos, use sempre agulha 70/10 de ponta bola fina (SES)! Ela entra entre os fios de urdume com a maciez de uma luva, sem cortar nenhum fiozinho da camisa do cliente!",
    voceSabia: "Em um tecido de algodão de 400 fios, existem mais de 200 fios de urdume por polegada quadrada, cada um mais fino que um fio de cabelo humano!",
    practicalExercise: "Desfie 1 cm da ponta de um retalho de tecido plano. Isole um fio de urdume (longitudinal) e um de trama (transversal). Tente arrebentar os dois com as mãos e sinta a maior tenacidade do fio de urdume.",
    quickSummary: "Filamento individual longitudinal do tecido plano caracterizado por alta torção e firmeza, que deve ser preservado pelo uso de agulhas adequadas para evitar furos.",
    relatedTerms: ["Warp", "Urdume", "Fio de Trama", "Weft Thread", "Agulha Ponta Bola", "SES", "Densidade de Fios"],
    tags: ["warpthread", "fiodeurdume", "urdume", "filamento", "tecido", "agulhas", "resistencia"]
  },
  {
    id: "weft-trama-estrutura-transversal-do-tecido",
    code: "W-003",
    letter: "W",
    term: "Weft — Trama (Estrutura Têxtil Transversal)",
    pronunciation: "uéft — tra-ma (wɛft)",
    level: "Iniciante 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino.",
    origin: "Do inglês antigo 'weft' (aquilo que é tecido/cruzado) e do verbo germânico 'wefan' (tecer). Fios inseridos transversalmente de um lado a outro do tear.",
    summary: "Conjunto de fios transversais que cruzam o urdume de ourela a ourela no tecido plano, apresentando maior flexibilidade e propensão a ceder sob a tração dos pontos.",
    definition: "O Weft (Trama ou Enchimento / Woof) é o conjunto de fios inseridos transversalmente de forma perpendicular (em ângulo de 90°) aos fios do urdume durante a tecelagem plana. A trama é conduzida pelas lançadeiras, pinças ou jatos de ar/água através da cala do tear, cruzando de uma ourela à outra. No bordado computadorizado, o sentido da trama apresenta naturalmente maior maleabilidade e elasticidade do que o urdume, tornando-se a direção mais vulnerável ao encurtamento elástico e ao repuxamento de pontos cheios.",
    technicalDetails: "Os fios de trama sofrem menor tensão mecânica durante a fabricação têxtil do que o urdume, resultando em menor rigidez estrutural. Quando blocos extensos de ponto cheio (Satin) são digitalizados com os pontos alinhados paralelamente à trama, a tração da linha de bordar comprime os fios de urdume, reduzindo a largura da peça naquele ponto (efeito cintura de ampulheta). Por essa razão, a compensação de repuxo (Pull Compensation) e a aplicação de subpontos de grade devem ser reforçadas no sentido da trama.",
    beginnerExplanation: "É a 'largura' do tecido, os fios que vão de um lado para o outro deitadinhos cruzando o urdume. Esse sentido é sempre um pouquinho mais mole e estica mais fácil do que o comprimento. Por isso, quando bordamos nesse sentido, o tecido tem mais vontade de enrugar se não tiver entretela boa!",
    howItWorks: [
      "1. O operador identifica o sentido transversal do tecido (perpendicular às ourelas).",
      "2. Avalia a maleabilidade da trama aplicando uma leve tração manual.",
      "3. Posiciona a entretela com o sentido de maior rigidez cruzado contra a elasticidade da trama.",
      "4. O software compensa a contração da trama aumentando a largura dos pontos cheios em 0.35 mm.",
      "5. A máquina costura os subpontos travando a movimentação lateral dos fios de trama.",
      "6. A cobertura superior é aplicada sem deformar a silhueta da peça.",
      "7. O tecido ao redor do bordado mantém-se perfeitamente plano e sem ondulações."
    ],
    applications: [
      "Planejamento de estabilização cruzada de entretelas em tecidos finos.",
      "Ajuste da compensação de repuxo no sentido horizontal de logotipos.",
      "Cálculo de contração em toalhas de banho e panos de prato.",
      "Controle de deformação em tecidos sarjados e cetins de seda."
    ],
    characteristics: [
      "Perpendicular (90°) aos fios de urdume e às ourelas.",
      "Apresenta maior elasticidade e flexibilidade que o urdume.",
      "Sentido que mais sofre com a contração por tensão de linha."
    ],
    commonErrors: [
      "❌ Montar entretela rasgável com a fibra no mesmo sentido fraco da trama, permitindo que a peça enrugue inteira.",
      "❌ Bordar colunas pesadas na direção da trama sem compensação de repuxo suficiente.",
      "❌ Esticar o tecido no bastidor puxando apenas pelas laterais da trama, deformando o esquadro da peça."
    ],
    troubleshootingTips: [
      "O bordado fechou e estreitou na largura: a tração dos pontos comprimiu a trama; aumente a compensação de repuxo (Pull Comp) para 0.40 mm e adicione subponto de grade cruzada.",
      "A toalha de banho ficou com a barra encolhida no meio do bordado: use entretela rasgável encorpada (70 g/m²) ou recorte uma entretela com a fibra perpendicular à trama da toalha.",
      "As letras horizontais parecem mais grossas que as verticais: compense a deformação ajustando a largura das colunas verticais no software."
    ],
    dicaArtrelados: "Lembre-se sempre da regrinha cruzada: se o tecido estica mais no sentido da trama (na largura), coloque a sua entretela virada de modo que a parte mais durinha dela fique contra essa elasticidade! Essa combinação segura qualquer tecido firme!",
    voceSabia: "Em teares a jato de ar industriais modernos, o fio de trama é lançado de um lado a outro do tear em velocidades superiores a 100 km/h por rajadas de ar comprimido ultraprecisas!",
    practicalExercise: "Puxe um tecido no sentido da largura (trama) e solte: observe como ele cede levemente e depois volta. Agora imagine centenas de pontos puxando essa trama: por isso a entretela é tão importante nesse sentido.",
    quickSummary: "Sentido transversal dos fios do tecido plano que cruza o urdume a 90°, caracterizado por maior maleabilidade e alta sensibilidade ao repuxamento de pontos.",
    relatedTerms: ["Trama", "Urdume", "Warp", "Weft Thread", "Pull Compensation", "Estabilização Cruzada", "Tecido Plano"],
    tags: ["weft", "trama", "transversal", "tecido", "estrutura", "repuxo", "elasticidade"]
  },
  {
    id: "weft-thread-fio-de-trama-filamento-transversal",
    code: "W-004",
    letter: "W",
    term: "Weft Thread — Fio de Trama (Filamento Transversal de Preenchimento)",
    pronunciation: "uéft thréd — fio de tra-ma (wɛft θrɛd)",
    level: "Intermediário 🟡",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'weft' (trama) e 'thread' (fio). Fio contínuo conduzido pela lançadeira ou projétil através da cala do tear.",
    summary: "Fio individual que compõe a trama transversal do tecido plano, com torção mais macia que proporciona toque, cobertura e maleabilidade à estrutura têxtil.",
    definition: "O Weft Thread (Fio de Trama / Filamento de Inserção Transversal) é cada um dos fios que compõem a trama de um tecido plano. Geralmente fiado com menor torção por polegada e com fibras mais volumosas do que os fios de urdume, o fio de trama é responsável por fornecer a espessura, o toque tátil (Handfeel) e a densidade de cobertura ao tecido. No processo de bordado, a menor rigidez do fio de trama facilita seu deslocamento sob o impacto da agulha, mas pode causar deslizamento de pontos se a ancoragem do subponto for insuficiente.",
    technicalDetails: "Em tecidos com ligamento sarja (como jeans e brim), os fios de trama passam por cima de dois ou mais fios de urdume em diagonal, criando cristas visíveis. Ao bordar sobre tecidos com fios de trama grossos e texturizados, a penetração da agulha pode empurrar o fio de trama para baixo se a chapa de agulha tiver um orifício muito largo, provocando a flutuação do tecido (Flagging). O uso de filmes hidrossolúveis superiores ou subpontos com densidade calibrada garante que os pontos de bordado fiquem nivelados sobre os fios de trama sem afundar.",
    beginnerExplanation: "É cada um dos fiozinhos deitados na horizontal que preenchem o tecido de lado a lado. Eles costumam ser mais gordinhos e fofinhos para dar aquele toque macio na roupa. Conhecer o fio de trama ajuda a escolher o ponto certo para o bordado não afundar!",
    howItWorks: [
      "1. A agulha desce através da estrutura formada pelo entrelaçamento dos fios de trama e urdume.",
      "2. Os fios de trama, por serem mais macios e flexíveis, acomodam a passagem do ponto.",
      "3. O subponto em grade (Tatami Underlay) cria uma rede de sustentação sobre os fios de trama.",
      "4. O ponto cheio superior apoia-se firmemente sobre a grade sem pressionar os fios de trama para baixo.",
      "5. A tensão de linha equilibrada evita o enrugamento transversal.",
      "6. A peça sai da máquina com textura uniforme e contornos perfeitos.",
      "7. A durabilidade do bordado é assegurada sem danos às fibras transversais."
    ],
    applications: [
      "Bordados em tecidos sarjados pesados (jeans, sarja de algodão, brim).",
      "Ajuste de penetração de agulha em tecidos atoalhados com trama de felpa.",
      "Prevenção de afundamento de pontos em tecidos de linho rústico.",
      "Seleção de subpontos adequados para tecidos com tramas aparentes."
    ],
    characteristics: [
      "Menor torção e toque mais macio que os fios de urdume.",
      "Inserido transversalmente de borda a borda do tecido.",
      "Mais suscetível a deslizamento e compressão sob a tensão da linha."
    ],
    commonErrors: [
      "❌ Bordar sobre tecidos com fios de trama soltos sem subponto, fazendo os pontos de cobertura afundarem e ficarem tortos.",
      "❌ Usar tensão de linha excessivamente alta, esmagando os fios de trama e vincando o tecido permanentemente.",
      "❌ Cortar a entretela rente demais com tesoura cega, pegando e cortando fios de trama da peça."
    ],
    troubleshootingTips: [
      "Os pontos estão afundando entre as linhas da trama: ative o subponto duplo (Double Underlay) no software para criar uma ponte sobre os fios de trama.",
      "O tecido jeans repuxou formando listras horizontais: reduza a tensão da linha superior e utilize agulha própria para jeans (calibre 90/14 Jeans/Denim com ponta média afiada).",
      "Fios de trama brancos estão desfiando no verso do bordado: diminua a densidade dos pontos para evitar perfurações repetidas no mesmo ponto."
    ],
    dicaArtrelados: "Em tecidos com tramas grossas como linho rústico ou sarja de brim, nunca economize no subponto! Uma camadinha leve de subponto em grade antes do ponto cheio faz os pontos flutuarem lindos por cima dos fios de trama sem afundar!",
    voceSabia: "Em tecidos nobres como o Jacquard de seda, fios de trama de até 12 cores diferentes são alternados automaticamente para criar desenhos complexos sem nenhuma gota de tinta!",
    practicalExercise: "Pegue um pedaço de jeans desfiado e puxe um dos fios brancos horizontais: esse é o fio de trama! Note como ele é mais macio e fofo do que os fios azuis verticais do urdume.",
    quickSummary: "Filamento individual transversal que preenche o tecido plano de borda a borda, oferecendo maciez e cobertura à peça, exigindo subpontos de sustentação contra afundamento.",
    relatedTerms: ["Trama", "Weft", "Urdume", "Warp Thread", "Subponto", "Flagging", "Jeans / Denim"],
    tags: ["weftthread", "fiodetrama", "trama", "filamento", "tecido", "estrutura", "subponto"]
  },
  {
    id: "woven-fabric-tecido-plano-e-ligamento-textil",
    code: "W-005",
    letter: "W",
    term: "Woven Fabric — Tecido Plano (Ligamento Têxtil Entrelaçado)",
    pronunciation: "uô-ven fé-bric — te-ci-do pla-no (ˈwoʊvən ˈfæbrɪk)",
    level: "Iniciante 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do particípio inglês 'woven' (tecido, entrelaçado) e 'fabric' (tecido, estrutura). Estrutura têxtil milenar produzida pelo cruzamento ortogonal de urdume e trama.",
    summary: "Família de tecidos estruturados pelo entrelaçamento perpendicular de fios de urdume e trama (como tricoline, sarja, linho e cetim), caracterizada por estabilidade e baixa elasticidade natural.",
    definition: "O Woven Fabric (Tecido Plano / Tecido de Caldearia / Tela Tecida) é a categoria fundamental de materiais têxteis estruturados através do cruzamento em ângulo reto (90°) de dois conjuntos distintos de fios: o urdume (longitudinal) e a trama (transversal). Divide-se nos três ligamentos fundamentais: Tela (Tafetá), Sarja (Twill) e Cetim (Sateen). No bordado computadorizado, os tecidos planos são considerados os materiais mais estáveis e previsíveis para bordar, apresentando baixa elasticidade natural e excelente retenção geométrica de pontos em comparação com malhas e tecidos elásticos.",
    technicalDetails: "A estabilidade mecânica dos tecidos planos permite a utilização de uma ampla variedade de estabilizadores, sendo a entretela rasgável (Tearaway de 50 a 70 g/m²) a mais indicada para a maioria das aplicações padrão (tricoline, camisas, toalhas de mesa). A densidade de pontos padrão (0.40 mm) e compensação de repuxo moderada (0.20 a 0.30 mm) são suficientes para obter resultados de alta precisão geométrica. Para tecidos planos de ligamento cetim com superfícies lisas e escorregadias, recomenda-se o uso de entretela colada com spray temporário para evitar deslizamentos.",
    beginnerExplanation: "São aqueles tecidos 'durinhos' e clássicos que não esticam sozinhos, como pano de prato, camisa social, tecido de almofada, tricoline de patchwork e brim de calça jeans! São os tecidos mais fáceis e gostosos de bordar, porque ficam bem esticadinhos no bastidor sem deformar!",
    howItWorks: [
      "1. O operador seleciona o tecido plano e corta com margem suficiente para o bastidor.",
      "2. Corta uma folha de entretela rasgável de gramatura adequada (50 a 60 g/m²).",
      "3. Monta o tecido e a entretela no bastidor com tensão uniforme e sem esticar a peça.",
      "4. Encaixa o bastidor na máquina e seleciona a matriz digitalizada para tecido plano.",
      "5. A máquina borda com velocidade padrão (750 a 850 SPM) e agulha universal ou ponta fina.",
      "6. Concluído o trabalho, retira o bastidor e rasga a entretela sobressalente do avesso.",
      "7. A peça resulta em um bordado limpo, plano e com contornos nítidos.",
      "8. O acabamento resiste a lavagens frequentes mantendo o visual impecável."
    ],
    applications: [
      "Camisaria masculina e feminina, jalecos médicos e uniformes corporativos.",
      "Enxovais de mesa, panos de copa, guardanapos e jogos americanos.",
      "Almofadas decorativas, colchas e artigos de decoração de interiores.",
      "Bolsas de sarja, ecobags de algodão cru e acessórios estruturados."
    ],
    characteristics: [
      "Formado pelo cruzamento ortogonal de urdume e trama a 90°.",
      "Baixa elasticidade natural no sentido do fio reto e da largura.",
      "Excelente estabilidade dimensional e facilidade de fixação no bastidor."
    ],
    commonErrors: [
      "❌ Apertar o parafuso do bastidor com força exagerada em tecidos planos finos, deixando marcas permanentes de queima por pressão (Hoop Burn).",
      "❌ Usar entretelas recortáveis muito pesadas em tecidos planos leves (como cambraia), deixando a peça dura como uma placa.",
      "❌ Bordar no viés do tecido plano sem estabilização adequada, fazendo o desenho torcer."
    ],
    troubleshootingTips: [
      "Ficaram marcas redondas do aro do bastidor no tecido (Hoop Burn): passe ferro a vapor suave sobre a marca ou coloque tiras de feltro fino no aro antes de fechar o bastidor.",
      "Os pontos estão puxando fios do tecido de camisa: substitua a agulha por uma 70/10 com ponta nova e livre de rebarbas.",
      "O tecido escorregou no bastidor durante o bordado rápido: aplique uma camada fina de spray adesivo temporário entre a entretela e o tecido plano."
    ],
    dicaArtrelados: "Para quem está começando no bordado eletrônico, treinar em tecido plano de algodão (tricoline ou brim leve) com entretela rasgável é o melhor caminho! O tecido se comporta perfeitamente, você aprende a regular a tensão com facilidade e os resultados são sempre apaixonantes!",
    voceSabia: "Fragmentos de tecidos planos de linho com mais de 7.000 anos foram encontrados em escavações no Egito Antigo, preservados em perfeito estado devido à estabilidade das fibras naturais entrelaçadas!",
    practicalExercise: "Borde um monograma de 5 cm em um retalho de tricoline usando entretela rasgável de 50 g/m². Ao soltar do bastidor, rasgue a entretela e observe a nitidez e a limpeza do avesso.",
    quickSummary: "Estrutura têxtil estável formada pelo cruzamento perpendicular de fios de urdume e trama, ideal para bordados de alta precisão com entretela rasgável.",
    relatedTerms: ["Tecido Plano", "Warp", "Weft", "Tricoline", "Sarja", "Entretela Rasgável", "Hoop Burn"],
    tags: ["woven", "fabric", "tecidoplano", "tricoline", "ligamento", "estabilidade", "algodao"]
  }
];

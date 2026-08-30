import { Verbete } from "../types";

export const VERBETES_LETTER_T12: Verbete[] = [
  {
    id: "t-076-tensao-da-linha-superior-e-calibracao-de-discos",
    code: "T-076",
    term: "Tensão da Linha Superior e Calibração de Discos Tensores (Upper Thread Tension Calibration)",
    pronunciation: "ten-são da li-nha su-pe-ri-or e ca-li-bra-são de dis-cos ten-so-res",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Tensão & Ajustes",
    origin: "Do latim 'tensio' (ação de esticar, rigidez) e 'super' (acima). Princípio mecânico de fricção por molas calibradas desenvolvido na era da Revolução Industrial para máquinas de costura e adaptado às altas rotações das máquinas de bordar computadorizadas.",
    summary: "Regulagem da força de retenção dos discos tensores e da mola tira-fio que equilibra o ponto de bordado, garantindo a proporção áurea de 1/3 de linha da bobina no verso.",
    definition: "A Tensão da Linha Superior (Upper Thread Tension & Rotary Tension Disc Calibration) é o ajuste micrométrico da pressão exercida pelos discos metálicos e molas sobre o filamento superior ao longo de todo o cabeçote da máquina de bordar. Seu objetivo fundamental é equilibrar com exatidão a tração da linha da agulha contra a resistência da linha da bobina (carretilha). Quando a tensão superior está calibrada com perfeição, o laço de entrelaçamento entre os dois fios ocorre exatamente no centro da espessura do tecido ou levemente no verso, impedindo que a linha da bobina suba para a face visível ou que o tecido fique repuxado e franzido.",
    technicalDetails: "A tensão dinâmica superior recomendada para linhas de poliéster No 40 oscila entre 110 e 150 gf (gramas-força), aferida com tensiômetros analógicos ou digitais tipo TOWA ou Run-Tension Gauge. O sistema inclui o pré-tensor (20-30 gf) para alinhamento, o tensor primário graduado, a mola tira-fio (check spring com curso de 5 a 8 mm e força de 8 a 15 gf) e o estica-fio balanceado.",
    beginnerExplanation: "É o botãozinho numerado ou os discos no topo da sua máquina que apertam ou soltam a linha colorida do carretel. Se tiver muito apertado, a linha arrebenta e o tecido enruga como uma sanfona; se tiver muito frouxo, a linha forma laços feios e embaraça tudo embaixo da chapa de agulha!",
    howItWorks: [
      "1. O filamento sai do cone no porta-fios, passa pelos guias superiores e entra no pré-tensor.",
      "2. O fio desce e passa entre os discos metálicos do tensor principal, que exercem atrito constante por pressão de mola.",
      "3. O fio engata na mola tira-fio (check spring), que amortece o tranco a cada batida da agulha.",
      "4. O fio sobe até o furo do estica-fio móvel e desce pela canaleta da barra de agulha até o olho da agulha.",
      "5. Durante a descida, a tensão mantém o fio esticado; na subida, o estica-fio recolhe a folga e fecha o nó com a linha da bobina.",
      "6. No verso do bordado, em um ponto cheio de 4 mm, deve-se enxergar exatamente 1/3 de linha colorida na esquerda, 1/3 de linha branca no meio e 1/3 de linha colorida na direita."
    ],
    applications: [
      "Bordados finos sobre tecidos delicados (seda, voal, microfibra) exigindo tensões suaves (90-110 gf).",
      "Bordados industriais de alta velocidade (800 a 1.000 PPM) em uniformes e jeans com tensão firme (130-150 gf).",
      "Ajuste específico para bordar com linhas metálicas, reduzindo a tensão pela metade para evitar quebra por atrito.",
      "Padronização das tensões em máquinas multicabeças para garantir cores e relevos idênticos em todas as cabeças."
    ],
    characteristics: [
      "Ajuste quantificável através de tensiômetros de arraste contínuo.",
      "Interage diretamente com a espessura da linha (No 40 vs No 60) e o tipo de agulha.",
      "Apresenta sensibilidade a resíduos de cola de spray e fiapos acumulados entre os discos."
    ],
    commonErrors: [
      "❌ Apertar os discos de tensão ao máximo quando a linha quebra, piorando o atrito e causando quebras em série.",
      "❌ Passar a linha fora dos discos tensores com o calcador abaixado (os discos ficam fechados e a linha não encaixa).",
      "❌ Não limpar a sujeira e fiapos entre os discos tensores, fazendo a tensão variar aleatoriamente durante o trabalho."
    ],
    troubleshootingTips: [
      "Laços soltos e 'ninhos de passarinho' de linha na parte de baixo do tecido: a linha superior escapou dos discos tensores; reponha a linha com o calcador levantado.",
      "Linha branca da bobina aparecendo nos cantos e curvas das letras na frente: a tensão superior está excessivamente apertada ou a bobina está muito frouxa; afrouxe o tensor superior girando no sentido anti-horário.",
      "Tecido repuxando em volta de letras pequenas mesmo com boa entretela: reduza a tensão superior em 1/4 de volta até o bordado ficar macio."
    ],
    dicaArtrelados: "Passe periodicamente um pedaço de fio dental sem cera dobrado entre os discos de tensão da sua máquina! Você vai se surpreender com a quantidade de poeira e cera acumulada que sai de lá, restaurando a tensão suave original de fábrica instantaneamente!",
    voceSabia: "Nas máquinas industriais modernas com tecnologia 'Active Tension' (Tensão Eletrônica Ativa), pequenos servomotores digitais ajustam a pressão da linha superior a cada fração de segundo conforme a direção do ponto e a velocidade do pantógrafo!",
    practicalExercise: "Borde um teste de três colunas de ponto cheio (letras I maiúsculas de 2,5 cm de altura). Vire o tecido do avesso e examine com uma régua: meça se a linha branca da bobina ocupa exatamente a faixa central de 1/3 da largura da coluna.",
    quickSummary: "Tensão da Linha Superior é o ajuste mecânico dos discos tensores que controla o esticamento do fio de cima para equilibrar o nó do ponto e manter o bordado plano.",
    recommendedSettings: {
      speedPPM: "650 a 850 PPM",
      needleType: "75/11 Ponta Bola ou Microtex",
      density: "0.38 mm a 0.42 mm (Tensão padrão 110-140 gf)"
    },
    relatedTerms: [
      "Tensão da Linha da Bobina",
      "Regra dos Terços (1/3)",
      "Mola Tira-Fio (Check Spring)",
      "Tensiômetro Towa",
      "Ninho de Linha (Birdnesting)"
    ],
    tags: [
      "t-076",
      "tensao superior",
      "discos tensores",
      "calibracao",
      "ajuste de ponto",
      "regra dos tercos",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Upper Thread Tension and Machine Calibration Guide. Freiburg, 2022.",
      "TOWA APPARATUS MFG. Instruction Manual for Digital & Analog Tension Gauges. Tóquio, 2021.",
      "ARTRELADOS. O Segredo da Tensão Perfeita: Calibração Passo a Passo para Ateliês. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-077-tensao-da-linha-da-bobina-e-teste-da-carretilha",
    code: "T-077",
    term: "Tensão da Linha da Bobina e Teste da Carretilha (Bobbin Tension & Drop Test / TOWA Gauge)",
    pronunciation: "ten-são da li-nha da bo-bi-na e tés-te da car-re-ti-lha",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Tensão & Ajustes",
    origin: "Do francês 'bobine' (cilindro para enrolar fios) e 'tension' (força elástica). Procedimento de metrologia têxtil criado para padronizar a ancoragem inferior do ponto de lançadeira (Lockstitch).",
    summary: "Ajuste de precisão da lâmina elástica da caixa de bobina que dita a base de ancoragem de todo o bordado, aferido pelo teste do io-iô ou tensiômetro digital.",
    definition: "A Tensão da Linha da Bobina (Bobbin Case Spring Tension & Dynamic Drag Force) é a resistência mecânica exercida pela lâmina metálica de pressão externa da caixa de bobina sobre o fio inferior (geralmente filamento contínuo de poliéster 60wt a 80wt). No sistema de ponto fixo industrial (Lockstitch ISO 301), a tensão da bobina atua como o alicerce fundamental do sistema: ela deve ser ajustada primeiro e permanecer fixa e estável, servindo de referência absoluta para que todas as agulhas superiores sejam calibradas em função dela.",
    technicalDetails: "A faixa operacional ideal para carretilhas tipo L ou M em bordado eletrônico varia de 18 a 25 gf (gramas-força) para máquinas industriais e de 15 a 20 gf para caixas plásticas de bobina horizontal (Top Drop-in) de máquinas domésticas. O microparafuso de ajuste possui rosca métrica de passo fino (gira-se no sentido horário para aumentar a tensão e anti-horário para aliviar).",
    beginnerExplanation: "É a força com que a caixinha de metal ou plástico segura a linha branca de baixo. Se ela estiver muito frouxa, a linha branca sobe e estraga o desenho na frente; se estiver muito presa, o bordado fica duro, encolhe o tecido e quebra a linha de cima!",
    howItWorks: [
      "1. A carretilha cheia é inserida na caixa de bobina, garantindo que o fio desenrole no sentido horário (ou conforme a ranhura de frenagem).",
      "2. O fio é passado sob a lâmina da mola de tensão até sair pelo orifício guia.",
      "3. Realiza-se a aferição com o tensiômetro TOWA puxando o fio a velocidade constante, observando a escala milimétrica.",
      "4. Se não houver tensiômetro, utiliza-se o Teste de Queda Gravitacional (Teste do Io-Iô): segurando a linha, a caixa fica suspensa e só desce 2 a 4 cm com um leve toque de pulso.",
      "5. Gira-se o microparafuso em frações mínimas de 1/8 de volta até obter a resistência perfeita.",
      "6. A caixa é instalada no cesto da lançadeira para início dos trabalhos."
    ],
    applications: [
      "Bordado diário em peças planas, enxovais de bebê, toalhas e camisas polo.",
      "Calibração obrigatória na troca de fornecedor ou espessura da linha da bobina.",
      "Ajuste especial de baixa tensão para bordados em tecidos extremamente finos e transparentes (organza, tule, cambraia).",
      "Bordados em bonés estruturados exigindo carretilhas magnéticas (Magnetic Core Bobbins) para rotação uniforme."
    ],
    characteristics: [
      "Permite uniformidade em todo o lote de produção.",
      "Caixas com mola anti-recuo (Anti-Backlash Spring) evitam que a carretilha gire em falso ao parar a máquina.",
      "Sensível a acúmulo de poeira e fiapos de corte sob a lâmina metálica."
    ],
    commonErrors: [
      "❌ Apertar o parafuso da bobina em voltas completas, espanando a rosca microscópica da caixinha.",
      "❌ Regular a tensão da linha superior sem antes ter verificado e estabilizado a tensão da bobina.",
      "❌ Enrolar bobinas manuais com tensão irregular, deixando partes frouxas e partes apertadas no mesmo carretel."
    ],
    troubleshootingTips: [
      "A linha branca da bobina aparece na frente do bordado como pontinhos ou riscos: a caixa de bobina está frouxa demais ou há fiapo sob a mola; limpe com uma folha de papel e aperte o parafuso 1/8 de volta.",
      "A linha superior colorida arrebenta a cada 50 pontos e o verso tem apenas linha colorida sem branco: a bobina está travada ou excessivamente apertada; solte o parafuso da bobina 1/8 de volta.",
      "A máquina acusa quebra de linha de bobina sem ter quebrado: a bobina está girando em falso por falta de mola anti-recuo ou o sensor óptico inferior está coberto de poeira."
    ],
    dicaArtrelados: "Ao colocar a bobina na caixinha, passe a ponta de uma agulha sem ponta ou um pedacinho de papel sulfite sob a lâmina da mola de tensão! Fiapos invisíveis de linha costumam se esconder ali e deixam a bobina frouxa do nada!",
    voceSabia: "As bobinas industriais pré-enroladas com núcleo magnético (Magnetic Core Bobbins) utilizam um micro-ímã central que fixa a carretilha na caixa de aço, mantendo a tensão 100% constante do primeiro ao último metro de linha!",
    practicalExercise: "Coloque sua carretilha na caixa de bobina e faça o teste do io-iô com a mão sobre uma mesa macia. Aperte 1/8 de volta e sinta como o peso na mão muda. Volte para a posição correta onde ela desce suavemente.",
    quickSummary: "Tensão da Linha da Bobina é o ajuste da mola da carretilha que fornece a base de tração estável para que todo o ponto de bordado fique perfeito.",
    recommendedSettings: {
      speedPPM: "700 a 900 PPM",
      needleType: "75/11",
      density: "Tensão recomendada: 18 a 25 gf"
    },
    relatedTerms: [
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Teste do Io-Iô",
      "Bobina Pré-Enrolada",
      "Regra dos Terços (1/3)"
    ],
    tags: [
      "t-077",
      "tensao bobina",
      "carretilha",
      "caixa de bobina",
      "towa",
      "io-io",
      "artrelados"
    ],
    bibliographicReferences: [
      "TOWA APPARATUS MFG. Bobbin Tension Gauge Operating Manual. Kyoto, 2021.",
      "GUNOLD EMBROIDERY. Bobbin Thread Tension and Maintenance Standards. Kennesaw, 2022.",
      "ARTRELADOS. Manual de Manutenção Preventiva e Calibração de Caixas de Bobina. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-078-termocolante-definitivo-para-emblemas-e-patches",
    code: "T-078",
    term: "Termocolante Definitivo para Emblemas e Patches (Heat-Seal Adhesive Film / Thermobonding Film)",
    pronunciation: "ter-mo-co-lan-te de-fi-ni-ti-vo pa-ra em-ble-mas e pá-txis",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do grego 'therme' (calor) e do latim 'colla' (grude, adesivo). Tecnologia química de polímeros termoplásticos de fusão a quente (Hot-Melt Adhesives) desenvolvida na década de 1970 para a indústria têxtil e aeroespacial.",
    summary: "Película termoplástica aplicada no verso de emblemas e patches bordados que se funde sob alta temperatura e pressão, colando o bordado definitivamente à roupa.",
    definition: "O Termocolante Definitivo para Emblemas e Patches (Heat-Seal Film / Hot-Melt Thermobonding Adhesive Film / Filme Termofusível Estrutural) é uma película elastomérica de poliamida ou poliuretano de alta viscosidade, coberta por um papel siliconado protetor (liner). Quando submetido ao binômio temperatura-pressão em prensa térmica (145 °C a 160 °C sob 4 a 6 bar de pressão por 12 a 18 segundos), o polímero transita do estado sólido para o estado líquido-viscoso, penetrando profundamente no verso dos pontos de bordado e na trama do tecido da peça. Ao resfriar, polimeriza-se em uma adesão mecânica e química permanente, imune a lavagens automáticas.",
    technicalDetails: "Disponível em espessuras de 80 a 160 micras. O filme de poliamida suporta lavagens até 60 °C e limpeza a seco; o filme de poliuretano oferece flexibilidade e toque macio para tecidos esportivos. O tempo de cura total após prensagem é de 24 horas antes da primeira lavagem do cliente.",
    beginnerExplanation: "É aquela película adesiva mágica que a gente coloca atrás do emblema bordado. Quando você prensa na prensa térmica ou passa com o ferro bem quente pelo avesso da roupa, a cola derrete e gruda o patch na jaqueta ou camiseta para sempre, sem você precisar costurar nenhuma bordinha!",
    howItWorks: [
      "1. O emblema ou patch é bordado sobre tecido sarja ou feltro e selado no contorno.",
      "2. Corta-se o filme termocolante no formato exato do patch (deixando 1 mm menor nas bordas).",
      "3. Posiciona-se o filme no verso do bordado e faz-se a pré-colagem na prensa por 4 a 6 segundos a 140 °C.",
      "4. Deixa-se esfriar totalmente e destaca-se o papel siliconado protetor.",
      "5. Posiciona-se o patch sobre o vestuário do cliente (jaqueta, moletom, boné ou mochila).",
      "6. Prensa-se obrigatoriamente PELO AVESSO da peça a 155 °C por 15 segundos com pressão firme para máxima fusão."
    ],
    applications: [
      "Emblemas de motoclubes, artes marciais e fardamentos corporativos.",
      "Patches decorativos para jaquetas jeans, calças e mochilas de lona.",
      "Aplicação de brasões bordados em locais de difícil acesso à máquina de costura (bolsos prontos, mangas fechadas).",
      "Kits de personalização rápida para eventos, feiras e quiosques de shopping."
    ],
    characteristics: [
      "Dispensa costura perimetral na peça final.",
      "Sela os nós e arremates do verso do bordado, evitando que piniquem a pele.",
      "Altíssima resistência a tração, suor e ciclos sucessivos de máquina de lavar."
    ],
    commonErrors: [
      "❌ Tentar aplicar o patch prensando apenas pela frente por cima do bordado espesso (o calor não chega à cola no verso).",
      "❌ Lavar a peça antes de completar 24 horas de repouso e cura química da cola.",
      "❌ Tentar colar sobre tecidos 100% sintéticos impermeabilizados com silicone ou resina de Teflon."
    ],
    troubleshootingTips: [
      "A ponta do patch soltou após a lavagem: reprense virando a roupa do avesso, aumentando o tempo para 20 segundos a 160 °C com pressão pesada.",
      "A cola vazou para fora da borda do patch e manchou a roupa: corte sempre o termocolante 1 a 2 mm menor que o contorno externo da peça.",
      "O tecido da peça ficou com marca quadrada brilhante da prensa: use sempre uma folha de manta de teflon ou tecido de algodão cru como proteção entre a chapa aquecida e a roupa."
    ],
    dicaArtrelados: "A regra de ouro do termocolante definitivo: prense SEMPRE pelo avesso da roupa! O calor passa facilmente pelo tecido fino da peça e derrete a cola diretamente contra o bordado, garantindo uma fixação 5 vezes mais resistente!",
    voceSabia: "Os termocolantes de poliuretano industrial foram desenvolvidos originalmente pela indústria aeroespacial militar para colar mantas térmicas de proteção acústica na fuselagem de aviões a jato sem adicionar peso de rebites metálicos!",
    practicalExercise: "Pegue um retalho de sarja com termocolante definitivo aplicado. Cole sobre um retalho de jeans prensando pelo avesso por 15 segundos. Espere esfriar 5 minutos e tente puxar a ponta com toda a sua força para constatar a fusão definitiva.",
    quickSummary: "Termocolante Definitivo é a película termoplástica que funde o verso do patch bordado ao tecido da roupa sob calor e pressão, dispensando costura manual.",
    recommendedSettings: {
      speedPPM: "N/A (Aplicação em Prensa)",
      needleType: "N/A",
      density: "Temperatura: 150-160 °C | Tempo: 15 s | Pressão: Alta"
    },
    relatedTerms: [
      "Patch Bordado",
      "Prensa Térmica",
      "Ponto Cheio de Borda (Borda Patch)",
      "Papel Siliconado (Liner)",
      "Termofusão"
    ],
    tags: [
      "t-078",
      "termocolante",
      "heat-seal",
      "patches",
      "emblemas",
      "prensa termica",
      "adesivo definitivo",
      "artrelados"
    ],
    bibliographicReferences: [
      "GUNOLD EMBROIDERY. Heat-Seal Polyurethane Films: Technical Application Guide. Kennesaw, 2022.",
      "FREUDENBERG NONWOVENS. Thermoplastic Adhesives for Textile Bonding. Weinheim, 2021.",
      "ARTRELADOS. Segredos da Produção e Aplicação de Patches Profissionais. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-079-tecido-piquet-e-desafios-de-estruturacao",
    code: "T-079",
    term: "Tecido Piquet e Desafios de Estruturação no Bastidor (Piqué Knit Fabric Hooping & Underlay Strategy)",
    pronunciation: "te-ci-do pi-quê e de-sa-fi-os de es-tru-tu-ra-são no bas-ti-dor",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do francês 'piqué' (pespontado, picado). Tecido de malha em relevo inventado na França no século XVIII para alfaiataria e popularizado no século XX por René Lacoste para camisas polo esportivas.",
    summary: "Estratégias de digitalização, escolha de entretela recortável e enquadramento suave para bordar com perfeição na malha em colmeia das camisas polo.",
    definition: "O Tecido Piquet (Piqué Knit Fabric / Piquet Duplo de Algodão e Poliéster) é uma estrutura têxtil de malharia por urdume ou trama caracterizada por relevos geométricos tridimensionais em formato de pequenos favos de mel (colmeia) ou losangos. Apresenta alta elasticidade transversal, textura irregular e propensão a afundar pontos pequenos nas depressões da malha. No bordado eletrônico, exige estabilização dimensional com entretela de malha recortável (Cut-Away 70g ou 80g), compensação de repuxo generosa (0,40 mm) e camada obrigatória de ponto de suporte (Underlay Tatami/Grade) para evitar deformações no contorno e enrugamento ao redor do bordado.",
    technicalDetails: "Parâmetros de matriz recomendados para Piquet: Pull Compensation de 0,35 a 0,45 mm; Underlay composto por ponto de contorno (Edge Run) somado a grade tatami de 2,5 mm de espaçamento; densidade principal de 0.40 mm com agulha ponta bola fina 75/11 SES (Light Ball Point) e velocidade entre 600 e 750 PPM.",
    beginnerExplanation: "É o tecido clássico das camisas polo que parece um monte de furinhos ou favinhos de mel! Como ele estica bastante e tem buraquinhos na textura, se você bordar sem o apoio certo, as letras pequenas afundam e o peito da camisa fica todo enrugado em volta do bordado!",
    howItWorks: [
      "1. A entretela de malha recortável (Cut-Away) é posicionada por baixo da camisa polo.",
      "2. O tecido piquet é acomodado no bastidor suavemente com spray temporário, SEM NUNCA ESTICAR a malha com as mãos.",
      "3. O parafuso do bastidor é apertado apenas até firmar a peça, mantendo a trama reta e relaxada.",
      "4. A máquina inicia bordando a camada de underlay em grade aberta, que 'grampeia' o piquet na entretela.",
      "5. Em seguida, a máquina borda as colunas de cetim e tatami por cima da grade firme.",
      "6. Ao retirar do bastidor, o bordado permanece liso e a camisa não franze nem deforma após as lavagens."
    ],
    applications: [
      "Logotipos corporativos no peito de camisas polo de uniformes empresariais.",
      "Monogramas elegantes e brasões escolares em golas e peitilhos de piquet.",
      "Bordados em vestidos e uniformes esportivos de tênis e golfe.",
      "Personalização de camisas polo de algodão pima de alto padrão."
    ],
    characteristics: [
      "Requer obrigatoriamente entretela de malha recortável (a entretela rasgável quebra com o uso e o bordado enruga).",
      "Necessita de agulha com ponta bola fina para penetrar entre os fios sem furar a malha.",
      "Exige compensação de encolhimento maior para manter formas circulares perfeitas."
    ],
    commonErrors: [
      "❌ Usar entretela rasgável simples (Tear-Away) em camisa polo (após duas lavagens o bordado vira uma cuia enrugada).",
      "❌ Puxar as bordas da camisa para esticar no bastidor como se fosse couro (quando tira do bastidor, a malha volta e franze tudo).",
      "❌ Digitalizar microletras menores que 4,5 mm sem sob-ponto, fazendo o texto sumir dentro dos favos do piquet."
    ],
    troubleshootingTips: [
      "O círculo do logo corporativo virou uma elipse oval na polo: aumente o Pull Compensation no software para 0,45 mm e use duas camadas de entretela recortável fina cruzadas.",
      "Apareceram pequenos furos nos cantos das letras: troque a agulha por ponta bola 70/10 ou 75/11 SES nova para não cortar as fibras da malha.",
      "As letras pequenas afundaram na textura do piquet: aplique um plástico hidrossolúvel fino (Avalon/Solvy) por cima do tecido antes de bordar."
    ],
    dicaArtrelados: "Em camisas polo de piquet: NUNCA use entretela de rasgar! Use sempre a entretela de malha recortável (Cut-Away) macia! Ela permanece no avesso da polo para sempre, garantindo que o logo da empresa fique esticado e impecável mesmo após 100 lavagens na máquina!",
    voceSabia: "René Lacoste criou a primeira camisa polo de tecido piquet de algodão respirável em 1933 para substituir as camisas sociais pesadas de manga longa que os tenistas usavam, bordando o icônico jacaré verde no peito — que se tornou o primeiro logotipo bordado da história da moda mundial!",
    practicalExercise: "Pegue um retalho de camisa polo velha de piquet. Borde um quadrado de 4 cm usando entretela rasgável e outro igualzinho usando entretela recortável Cut-Away. Lave os dois retalhos na água e compare a firmeza e o acabamento dos dois.",
    quickSummary: "Tecido Piquet é a malha em favos das camisas polo que exige entretela recortável, agulha ponta bola e sob-pontos firmes para evitar deformações.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 SES Ponta Bola Leve (Light Ball Point)",
      density: "0.38 mm a 0.40 mm com Pull Comp de 0.40 mm"
    },
    relatedTerms: [
      "Entretela Recortável (Cut-Away)",
      "Agulha Ponta Bola (SES)",
      "Compensação de Encolhimento (Pull Comp)",
      "Underlay Tatami",
      "Bordado em Malha"
    ],
    tags: [
      "t-079",
      "piquet",
      "camisa polo",
      "malha",
      "cut-away",
      "ponta bola",
      "estruturacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Embroidery on Knits and Piqué Fabrics Guide. Freiburg, 2022.",
      "EMBROIDERY MAGAZINE. The Polo Shirt Challenge: Hooping and Stabilizing Piqué. Londres, 2023.",
      "ARTRELADOS. Guia Definitivo de Bordados em Camisas Polo e Malhas Corporativas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-080-tracao-do-pantografo-nos-eixos-x-e-y",
    code: "T-080",
    term: "Tração do Pantógrafo nos Eixos X e Y (Pantograph Drive Mechanics & Stepper Timing Belt)",
    pronunciation: "tra-são do pan-tó-gra-fo nos ei-xos xis e í-psi-lon",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica & Manutenção",
    origin: "Do grego 'pantographos' (desenhador de tudo) e do latim 'tractio' (arraste, puxamento). Sistema cinemático cartesiano computadorizado desenvolvido na Suíça e Japão para translação bidirecional da mesa de bordado.",
    summary: "Conjunto mecatrônico de motores de passo/servos, polias e correias sincronizadoras que desloca o bastidor com aceleração suave e precisão micrométrica.",
    definition: "A Tração do Pantógrafo nos Eixos X e Y (Pantograph Drive Transmission & X-Y Cartesian Motion Control) é o sistema eletromecânico responsável por movimentar a armação de suporte do bastidor ao longo do plano bidimensional cartesiano sincronizado em tempo real com o ciclo angular do eixo principal da máquina de bordar. O pantógrafo deve acelerar, posicionar e desacelerar o bastidor em uma janela de tempo de apenas 25 a 40 milissegundos (quando a agulha está fora do tecido, entre 270° e 90° do ciclo de costura), garantindo resolução posicional de ±0,05 mm sem perda de passos ou oscilações inerciais.",
    technicalDetails: "Utiliza servomotores AC brushless ou motores de passo híbridos com encoders ópticos de 4.000 a 10.000 pulsos por rotação acoplados a correias dentadas de poliuretano com alma de cabos de aço (perfil HTD 3M ou GT2). A tensão das correias é medida por frequencímetro sônico (70 a 85 Hz).",
    beginnerExplanation: "É o sistema de motores, correias e trilhos que segura e move o braço do bastidor para a esquerda, direita, frente e trás. Ele precisa se mover super rápido bem na hora em que a agulha sobe, parando no lugar exato para a agulha descer no próximo furinho sem tremer nem sair do desenho!",
    howItWorks: [
      "1. A placa-mãe da máquina lê as coordenadas X e Y do próximo ponto gravado no arquivo de bordado (.PES, .DST).",
      "2. O sensor angular do volante indica que a agulha saiu do tecido (início da janela de movimento aos 270°).",
      "3. Os servomotores dos eixos X e Y giram as polias dentadas na fração exata de passos programados.",
      "4. As correias sincronizadoras tracionam os braços do pantógrafo sobre os trilhos prismáticos.",
      "5. O bastidor é posicionado na nova coordenada e freia com precisão absoluta.",
      "6. Aos 90° do ciclo, a agulha penetra o tecido estático e executa a laçada do ponto sem sofrer flexão lateral."
    ],
    applications: [
      "Manutenção e calibração periódica da tensão de correias X/Y em máquinas industriais.",
      "Garantia de encaixe milimétrico em contornos de alta complexidade e letras vazadas.",
      "Ajuste de amortecimento de inércia para bastidores gigantes (bastidores de jaqueta 36x50 cm).",
      "Diagnóstico de folgas mecânicas (Backlash) que causam círculos ovalados e cantos arredondados."
    ],
    characteristics: [
      "Movimentação cartesiana intertravada eletronicamente com o eixo da agulha.",
      "Altíssima capacidade de aceleração dinâmica (até 2,5G de desaceleração).",
      "Necessita de lubrificação correta nas guias lineares e inspeção de dentes das correias."
    ],
    commonErrors: [
      "❌ Deixar as correias dentadas dos eixos frouxas, gerando folga e contornos desalinhados com o preenchimento.",
      "❌ Empurrar ou puxar o pantógrafo com as mãos com a máquina ligada, forçando os drivers e descalibrando o ponto zero (Home).",
      "❌ Colocar objetos pesados sobre a mesa do pantógrafo gerando sobrecarga térmica nos servomotores."
    ],
    troubleshootingTips: [
      "O contorno preto do desenho ficou 2 mm deslocado para a direita do preenchimento colorido: a correia do eixo X está frouxa ou a polia do motor está com o parafuso allen frouxo no eixo.",
      "A máquina perdeu o passo e começou a bordar o resto da matriz em outro lugar: houve travamento mecânico por tecido preso ou pico de oscilação elétrica no driver do motor.",
      "Ruído de trepidação áspera ao mover o bastidor em alta velocidade: limpe e lubrifique os trilhos lineares com graxa branca especial de lítio."
    ],
    dicaArtrelados: "Nunca force o braço do bastidor com as mãos enquanto a máquina estiver ligada! Se precisar centralizar ou mover o bastidor, use sempre as setas direcionais no painel digital da máquina! Isso protege os rolamentos e os sensores dos motores por muitos anos!",
    voceSabia: "Nas máquinas industriais multicabeças de 20 cabeçotes, o pantógrafo chega a pesar mais de 200 quilos de alumínio e aço e se move até 1.200 vezes por minuto com a mesma precisão cirúrgica de um relógio suíço!",
    practicalExercise: "Desligue a máquina de bordar. Com cuidado, sinta com as mãos a firmeza do braço do pantógrafo. Ele deve deslizar com maciez total e não deve apresentar nenhum jogo solto ou estalo quando você tenta mexer levemente para os lados.",
    quickSummary: "Tração do Pantógrafo é o sistema mecânico de alta precisão que move o bastidor nos eixos X e Y em sincronia milissegundo com a descida da agulha.",
    recommendedSettings: {
      speedPPM: "750 a 1.000 PPM",
      needleType: "Compatível com a estrutura",
      density: "Resolução cartesiana: ±0.05 mm"
    },
    relatedTerms: [
      "Pantógrafo",
      "Folga Mecânica (Backlash)",
      "Servomotor Brushless",
      "Correia Sincronizadora",
      "Ponto de Origem (0,0)"
    ],
    tags: [
      "t-080",
      "pantografo",
      "eixos x e y",
      "tracao",
      "correias",
      "servomotores",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA SEWING MACHINE CO. Technical Manual: Pantograph Drive Systems & Belt Tensioning. Nagoya, 2021.",
      "BARUDAN INDUSTRIAL. X-Y Motion Control and Stepper Driver Calibration. Ichinomiya, 2022.",
      "ARTRELADOS. Mecânica Aplicada e Ajustes de Precisão em Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-081-tipografia-de-microletras-no-bordado",
    code: "T-081",
    term: "Tipografia de Microletras no Bordado (Micro-Lettering Typography Digitizing)",
    pronunciation: "ti-po-gra-fi-a de mi-cro-le-tras no bor-da-do",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    origin: "Do grego 'typos' (marca, impressão), 'graphein' (escrever) e 'mikros' (pequeno). Especialidade técnica desenvolvida para digitalização de textos em crachás, brasões militares e jalecos médicos.",
    summary: "Conjunto de regras de digitalização para textos com menos de 5 mm de altura, exigindo fontes lineares sem serifa, linha No 60, agulha fina 65/9 e sob-pontos mínimos.",
    definition: "A Tipografia de Microletras no Bordado (Micro-Lettering & Small Text Digitizing Protocol) é a disciplina avançada de engenharia de software onde caracteres alfanuméricos com altura entre 2,5 mm e 5,0 mm são digitalizados respeitando os limites físicos das fibras têxteis e do diâmetro da agulha. Letras pequenas não admitem as regras convencionais de digitalização: exigem simplificação geométrica das serifas, colunas estreitas de cetim com abertura de 0,7 mm a 1,1 mm, eliminação de sob-pontos duplos (usando apenas Center Run simples), substituição de nós pesados de amarração por pontos retos embutidos e uso mandatário de fio fino No 60 com agulha 65/9.",
    technicalDetails: "Espaçamento de densidade ajustado para 0,28 mm a 0,32 mm (devido ao filamento fino Tex 15). Largura mínima de coluna de cetim fixada em 0,75 mm. Supressão de pontos de amarração volumosos (usar 3 micro-pontos de 0,8 mm). Ângulos de ponto estritamente perpendiculares à haste das letras.",
    beginnerExplanation: "É o segredo dos profissionais para bordar nomes minúsculos de médicos e números de CRM em jalecos sem que as letras virem um borrão enrolado! A gente usa uma linha fininha especial (No 60), uma agulha bem fina e desenha a letra com traços simples e limpinhos no computador.",
    howItWorks: [
      "1. No software de matrizes, o programador escolhe fontes digitais pré-otimizadas para microtexto (Small Fonts/Micro-Fonts).",
      "2. Abre ligeiramente o espaçamento entre as letras (Kerning) para que elas não encostem umas nas outras durante o repuxo.",
      "3. Configura a costura de base (Underlay) para Ponto Corrido Central (Center Run) ultrafino.",
      "4. Define a densidade ajustada para 0,30 mm e remove cortes automáticos desnecessários entre letras próximas.",
      "5. Na máquina, instala a linha ultrafina No 60 e a agulha fina 65/9.",
      "6. Borda a uma velocidade moderada (550 a 650 PPM), entregando textos perfeitamente nítidos e legíveis.",
      "7. As letras minúsculas mantêm os 'olhos' do 'e', 'a' e 'o' 100% abertos e nítidos."
    ],
    applications: [
      "Nomes, especialidades e números de CRM/CRO em jalecos e dólmãs de chefs.",
      "Etiquetas internas de marcas de roupas e tags de tamanho.",
      "Frases minúsculas e versículos bíblicos em mantilhas e enxovais de luxo.",
      "Bordados em tiras de crachá de identificação e brasões de segurança privada."
    ],
    characteristics: [
      "Garante legibilidade absoluta em textos de até 3 mm de altura.",
      "Evita acúmulo de linha e furos no tecido.",
      "Exige combinação obrigatória de matriz correta + linha fina No 60 + agulha fina."
    ],
    commonErrors: [
      "❌ Tentar reduzir uma fonte comum desenhada para 20 mm para 4 mm sem alterar parâmetros (as letras viram uma bolinha sólida de linha).",
      "❌ Usar linha padrão grossa No 40 com agulha grossa 90/14 em letras de 3 mm.",
      "❌ Colocar sob-ponto em zigue-zague ou tatami dentro de hastes fininhas de microletras."
    ],
    troubleshootingTips: [
      "O miolo das letras 'e' e 'o' ficou totalmente fechado e entupido de linha: aumente a largura do espaço interno (Letter Spacing) e utilize apenas Center Run como underlay com linha No 60.",
      "A linha fina No 60 quebra toda hora: reduza a tensão superior em 20 gf e diminua a velocidade para 600 PPM.",
      "As letras saíram com alturas diferentes: aumente o Pull Compensation das hastes verticais para 0,25 mm para neutralizar o repuxo da coluna."
    ],
    dicaArtrelados: "Para textos menores que 5 mm: fuja de fontes com 'serifas' ou fontes cheias de voltinhas manuscritas! Escolha sempre fontes limpas em estilo bastão (como Arial ou Century Gothic) e use agulha 65/9 com linha No 60! O resultado parece impresso a laser!",
    voceSabia: "O menor texto já bordado com legibilidade perfeita em uma máquina de bordar industrial mediu 1,5 mm de altura por letra, utilizando nanofio de poliéster 100wt e agulha cirúrgica 55/7 em um tecido de tafetá de seda japonês!",
    practicalExercise: "Digitalize o nome 'ARTRELADOS' com 4 mm de altura. Borde primeiro com sua linha normal No 40 e agulha 75/11. Depois borde com linha No 60 e agulha 65/9. Pegue uma lupa e veja a diferença astronômica de nitidez!",
    quickSummary: "Tipografia de Microletras é a técnica de digitalização e costura de textos minúsculos com fontes simplificadas, agulha fina 65/9 e linha No 60.",
    recommendedSettings: {
      speedPPM: "550 a 650 PPM",
      needleType: "60/8 ou 65/9 Microtex / Ponta Fina",
      density: "0.28 mm a 0.32 mm (com Linha No 60 / Tex 15)"
    },
    relatedTerms: [
      "Linha No 60 (Micro Linha)",
      "Agulha 65/9",
      "Kerning (Espaçamento)",
      "Underlay Center Run",
      "Compensação de Encolhimento (Pull Comp)"
    ],
    tags: [
      "t-081",
      "microletras",
      "tipografia",
      "textos pequenos",
      "linha 60",
      "agulha 65",
      "programacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Designing and Digitizing Small Lettering Guide. Sydney, 2022.",
      "MADEIRA THREADS. Micro-Lettering Thread & Needle Combinations. Freiburg, 2021.",
      "ARTRELADOS. Guia Prático de Microletras Perfeitas para Jalecos e Uniformes. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-082-texturizacao-em-ponto-tatami-e-efeitos-em-relevo",
    code: "T-082",
    term: "Texturização em Ponto Tatami e Efeitos em Relevo (Tatami Emboss & Texture Carving Patterns)",
    pronunciation: "tes-tu-ri-za-são em pon-to ta-ta-mi e e-fei-tos em re-le-vo",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    origin: "Do japonês 'tatami' (esteira de palha trançada) e do latim 'textura' (trama, padrão). Técnica de computação gráfica vetorial criada para simular profundidade e relevo sem alterar a espessura do fio.",
    summary: "Criação de padrões geométricos, marcas d'água e texturas tridimensionais esculpidas dentro de grandes blocos de preenchimento tatami.",
    definition: "A Texturização em Ponto Tatami e Efeitos em Relevo (Tatami Texture Patterning / Embossed Tatami Carving / Padrões de Relevo Programado) é o recurso avançado de digitalização onde o programador modifica matematicamente a sequência periódica dos pontos de penetração da agulha dentro de um preenchimento tatami contínuo. Em vez da clássica distribuição uniforme que gera uma superfície lisa, os pontos de afundamento são organizados em linhas, ondas, escamas, xadrez, couro ou desenhos figurativos (como monogramas ocultos), gerando sombras e reflexos de luz que criam a ilusão de alto e baixo-relevo 3D na mesma cor de linha.",
    technicalDetails: "Baseia-se na modulação do comprimento de ponto (geralmente entre 3,5 mm e 4,5 mm), ângulo de inclinação e no deslocamento de fração de linha (Pattern Fraction Shift de 0,25 a 0,50). Pode ser aplicado como Carving Stamp (Carimbo de Relevo) sobreposto a objetos vetoriais com densidade de 0,38 mm.",
    beginnerExplanation: "É um efeito mágico que faz um bordado feito com uma cor só de linha parecer que tem desenhos esculpidos em relevo! Por exemplo, bordar uma bola de futebol toda preenchida onde você enxerga os gomos da bola apenas pelas sombras dos pontos, sem precisar trocar de cor!",
    howItWorks: [
      "1. O programador cria uma grande área de preenchimento tatami no software.",
      "2. Acessa a galeria de padrões de texturização (Patterns / Emboss Library).",
      "3. Seleciona um padrão geométrico (ex: escama de peixe, tijolinho, ondas ou textura de favo).",
      "4. O software recalcula as descidas da agulha, criando linhas de afundamento deliberadas.",
      "5. A máquina borda a área com um único cone de linha.",
      "6. A luz do ambiente bate nos diferentes ângulos dos pontos, revelando o efeito de relevo sofisticado.",
      "7. O bordado ganha peso visual nobre sem aumentar o número de pontos nem a rigidez da peça."
    ],
    applications: [
      "Fundos de grandes brasões de futebol e logotipos de montadoras de veículos.",
      "Bordados monocromáticos de alta costura em vestidos de noiva e ternos masculinos.",
      "Simulação de pelagem de animais, escamas de répteis e penas de aves em bordados realistas.",
      "Efeitos de marca d'água com o logotipo da empresa oculto no fundo de jaquetas."
    ],
    characteristics: [
      "Cria relevo e sofisticação sem usar espuma EVA nem fios grossos.",
      "Mantém o bordado leve, maleável e flexível no tecido.",
      "Totalmente escalável em softwares vetoriais de bordado."
    ],
    commonErrors: [
      "❌ Aplicar textura em áreas pequenas com menos de 2 cm de largura (a textura fica cortada e imperceptível).",
      "❌ Usar densidade excessivamente fechada (0,28 mm) que esmaga os pontos e esconde o desenho da textura.",
      "❌ Escolher linhas foscas de algodão sem brilho (as linhas de poliéster brilhante valorizam 10 vezes mais o efeito de luz e sombra)."
    ],
    troubleshootingTips: [
      "O efeito de relevo não aparece no tecido após bordar: aumente o comprimento de ponto do tatami para 4,2 mm e utilize linha de poliéster brilhante de alta qualidade.",
      "O tecido enrugou no meio da textura: aplique uma camada de underlay em grade tatami de 3 mm antes de bordar o preenchimento texturizado.",
      "As linhas da textura ficaram tortas: alinhe o ângulo de inclinação do padrão de relevo a 45° em relação ao ângulo do ponto tatami principal."
    ],
    dicaArtrelados: "Experimente bordar um brasão inteiro em uma única cor (por exemplo, azul-marinho sobre tecido azul-marinho) usando texturas tatami diferentes para cada parte do desenho! O resultado fica parecendo um tecido nobre jacquard de grife internacional!",
    voceSabia: "Na tecelagem tradicional japonesa do período Edo, os mestres teciam quimonos cerimoniais de seda preta com texturas de relevo invisíveis que só podiam ser apreciadas à luz da lua ou de velas — a inspiração direta dos algoritmos modernos de ponto tatami!",
    practicalExercise: "Crie no seu software um círculo de 6 cm de diâmetro com ponto tatami. Aplique o efeito de carimbo/textura de tijolinho ou ondas. Borde em um retalho escuro com linha brilhante e observe como a peça brilha sob a lâmpada do seu ateliê.",
    quickSummary: "Texturização em Ponto Tatami é a técnica de ordenar os pontos de descida da agulha para esculpir desenhos e efeitos de luz e sombra 3D no bordado.",
    recommendedSettings: {
      speedPPM: "700 a 850 PPM",
      needleType: "75/11",
      density: "0.38 mm a 0.42 mm (Comprimento de ponto 4.0 mm)"
    },
    relatedTerms: [
      "Ponto Tatami (Preenchimento)",
      "Carving Stamp (Carimbo de Relevo)",
      "Ângulo do Ponto",
      "Linha de Poliéster Trilobal",
      "Underlay Tatami"
    ],
    tags: [
      "t-082",
      "textura",
      "tatami",
      "emboss",
      "carving",
      "relevo",
      "programacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Creative Tatami Effects and Stitch Carving Manual. Sydney, 2022.",
      "TAJIMA DG. Special Stitch Effects & Pattern Fill Library Guide. Tóquio, 2021.",
      "ARTRELADOS. Efeitos Especiais de Textura e Relevo em Matrizes de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-083-teste-da-borboleta-e-teste-i-h-de-tensao",
    code: "T-083",
    term: "Teste da Borboleta e Teste I-H de Tensão das Agulhas (Fox / I-H Tension Test Matrix)",
    pronunciation: "tés-te da bor-bo-le-ta e tés-te i a-gá de ten-são das a-gu-lhas",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Tensão & Ajustes",
    origin: "Do formato geométrico em asas de borboleta e nas letras 'I' e 'H' maiúsculas. Matriz padronizada de controle de qualidade desenvolvida pelos fabricantes mundiais de máquinas industriais (Tajima, Barudan, Madeira).",
    summary: "Matriz padrão de teste bordada em minutos com colunas de cetim para aferir visualmente o equilíbrio de tensão de todas as agulhas da máquina.",
    definition: "O Teste da Borboleta e Teste I-H de Tensão (Embroidery Machine Tension Test Block / Fox Test / Multi-Needle I-H Test Pattern) é a matriz digital de calibração indispensável utilizada em oficinas e ateliês para inspecionar simultaneamente o balanceamento mecânico das linhas de todas as agulhas do cabeçote. Consiste em uma série de blocos de colunas de ponto cheio (cetim) de 25 mm a 30 mm de altura por 4 mm a 6 mm de largura (em formato de colunas 'I', blocos cruzados 'H' ou asas triangulares 'Borboleta'), bordados sequencialmente por cada uma das agulhas da máquina sobre tecido sarja com entretela firme.",
    technicalDetails: "Ao virar o bastidor do avesso, cada coluna deve exibir a Regra dos Terços: exatamente 1/3 da largura central preenchida pela linha branca da bobina e 1/3 em cada margem lateral com a linha superior colorida. Desvios indicam necessidade imediata de ajuste nos tensores superiores.",
    beginnerExplanation: "É um arquivinho de bordado super rápido que faz uma fileirinha de letrinhas 'I' ou bloquinhos, um com cada linha da sua máquina. Quando termina, você vira o tecido de costas: se todas as colunas tiverem uma faixinha branca bem no meio com as bordinhas coloridas certinhas, sua máquina está 100% regulada!",
    howItWorks: [
      "1. A bordadeira coloca um tecido sarja ou brim branco com entretela firme no bastidor.",
      "2. Carrega a matriz do Teste I-H no painel da máquina de bordar.",
      "3. Configura a troca de cores automática para bordar uma coluna com cada agulha (da agulha 1 até a última).",
      "4. A máquina executa o bordado em velocidade padrão de trabalho.",
      "5. Retira-se o bastidor e examina-se o verso sob boa iluminação.",
      "6. Agulhas que mostram muito branco têm a tensão superior afrouxada; agulhas sem linha branca têm a tensão superior apertada.",
      "7. Repete-se o teste rápido até que todas as agulhas fiquem 100% perfeitamente alinhadas."
    ],
    applications: [
      "Rotina semanal de manutenção e calibração em máquinas domésticas e industriais.",
      "Teste obrigatório antes de iniciar a produção de lotes grandes de uniformes.",
      "Validação das tensões ao trocar de marca ou lote de linha de bordado.",
      "Aferição rápida de máquinas novas ou recém-saídas de revisão mecânica."
    ],
    characteristics: [
      "Diagnóstico 100% visual que dispensa desmontar qualquer peça da máquina.",
      "Permite identificar problemas individuais em uma agulha específica (agulha torta, tensor sujo).",
      "Execução ultrarrápida (menos de 3 minutos para 6 a 15 agulhas)."
    ],
    commonErrors: [
      "❌ Fazer o teste de tensão em tecido de malha elástica sem estabilização adequada (a leitura fica distorcida pelo repuxo).",
      "❌ Regular os tensores das agulhas superiores sem antes ter verificado a caixa da bobina.",
      "❌ Bordejar o teste em velocidade muito lenta que mascara os problemas dinâmicos de alta rotação."
    ],
    troubleshootingTips: [
      "A coluna da agulha 4 ficou 100% colorida no verso sem nenhum traço de linha branca: a tensão da linha superior da agulha 4 está frouxa demais; aperte o botão tensor da agulha 4 em 1/2 volta.",
      "A coluna da agulha 2 ficou 100% branca no verso e a linha branca subiu para a frente: a tensão da linha superior 2 está apertadíssima; solte o botão tensor da agulha 2 em 1/2 volta.",
      "Todas as colunas de todas as agulhas estão sem linha branca no verso: o problema não é nas agulhas de cima, mas sim na caixa da bobina que está muito apertada."
    ],
    dicaArtrelados: "Tenha a matriz do Teste I-H salva em uma pasta especial no seu pendrive! Toda segunda-feira de manhã, gaste 3 minutinhos bordando esse teste antes de começar as encomendas da semana! Isso economiza horas de dor de cabeça com linhas arrebentando!",
    voceSabia: "O teste com a letra 'H' foi criado pelos engenheiros da Tajima no Japão porque as duas hastes verticais testam a tensão no sentido do urdume e a barra horizontal testa a tensão no sentido da trama do tecido na mesma batida!",
    practicalExercise: "Borde uma matriz de teste com 6 colunas de cetim (uma com cada linha do seu suporte). Vire o bastidor, tire uma foto do verso com seu celular com boa luz e analise se a faixa branca central de 1/3 está perfeitamente regular em todas as colunas.",
    quickSummary: "Teste da Borboleta / Teste I-H é a matriz padrão de colunas de ponto cheio para calibrar visualmente a tensão de todas as agulhas pela regra dos terços.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11",
      density: "0.40 mm (Ponto cheio com 4 mm de largura)"
    },
    relatedTerms: [
      "Regra dos Terços (1/3)",
      "Tensão da Linha Superior",
      "Tensão da Bobina",
      "Manutenção Preventiva",
      "Ponto Cheio (Cetim)"
    ],
    tags: [
      "t-083",
      "teste de tensao",
      "teste ih",
      "borboleta",
      "calibracao",
      "agulhas",
      "manutencao",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Machine Tension Calibration: The Classic Column Test. Freiburg, 2022.",
      "TAJIMA SEWING MACHINE CO. Tension Matrix Testing Procedures. Nagoya, 2021.",
      "ARTRELADOS. Guia de Ajuste Fino e Diagnóstico Visual de Tensões no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-084-toalha-felpuda-e-gestao-de-volume",
    code: "T-084",
    term: "Toalha Felpuda e Gestão de Volume Têxtil (Terry Cloth Loop Taming & Topping Film Strategy)",
    pronunciation: "to-a-lha fel-pu-da e ges-tão de vo-lu-me tês-til",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do português 'toalha' (pano de mesa/banho) e do latim 'villis' (pelos, felpos). Técnicas desenvolvidas para lidar com o tecido felpudo de algodão (Terry Cloth) originado na Turquia e popularizado na Inglaterra vitoriana.",
    summary: "Técnicas integradas de plástico hidrossolúvel por cima, entretela por baixo e pontos de grade para domar os pelos de toalhas e impedir pontos afundados.",
    definition: "A Gestão de Volume em Toalha Felpuda (Terry Cloth Embroidery Stabilization & High-Pile Management Protocol) é o conjunto de procedimentos técnicos de montagem no bastidor e programação digital necessários para executar bordados nítidos sobre tecidos felpudos de algodão (como toalhas de banho, roupões e cobertores de microfibra). O felpo alto atua como uma barreira física instável: se bordado diretamente, os pontos afundam entre os fios e as cerdas de algodão escapam entre os pontos após as lavagens. A técnica correta exige a aplicação de uma película plástica hidrossolúvel superior (Topping Film/Solvy), entretela estável inferior e camada de sob-ponto em grade (Knockdown Stitch) na matriz.",
    technicalDetails: "Utiliza filme de álcool polivinílico (PVA) de 20 a 35 micras sobre o tecido para manter os laços de felpo rebaixados. Na matriz, aplica-se Pull Compensation elevado (0,45 mm a 0,55 mm) e densidade de 0,38 mm para ponto cheio. Para áreas maiores, programa-se uma base de pontos leves de contenção (Knockdown Underlay) com espaçamento de 1,5 mm.",
    beginnerExplanation: "É o passo a passo perfeito para bordar toalhas de banho fofinhas sem que o desenho suma no meio dos pelinhos da toalha! Você coloca uma folha de plástico solúvel em água por cima da toalha e entretela por baixo: o plástico amassa os pelos para a agulha bordar por cima, e depois de pronto você só passa uma aguinha e o plástico derrete como mágica!",
    howItWorks: [
      "1. A bordadeira coloca a entretela rasgável ou recortável suave por baixo da toalha.",
      "2. Enquadra a toalha no bastidor sem puxar as felpas.",
      "3. Posiciona uma folha de filme plástico hidrossolúvel (Solvy/Avalon) cobrindo toda a área do bordado por cima.",
      "4. A máquina borda sobre o plástico, que mantém todos os pelos de algodão perfeitamente prensados para baixo.",
      "5. As letras e desenhos ficam com acabamento liso, brilhante e de alto relevo.",
      "6. Ao finalizar, rasga-se o excesso de plástico e borrifa-se água limpa com uma esponja macia: o plástico dissolve instantaneamente.",
      "7. A toalha fica macia e o bordado permanece com definição perfeita por anos."
    ],
    applications: [
      "Personalização de toalhas de banho, rosto e lavabo de enxovais de casamento e bebê.",
      "Bordados em roupões felpudos de hotéis de luxo e spas.",
      "Mantas térmicas de microfibra e cobertores infantis felpudos.",
      "Toalhas de praia aveludadas e panos de copa estruturados."
    ],
    characteristics: [
      "Elimina 100% o problema de pelos escapando entre as letras.",
      "Aumenta o brilho e o relevo visual das linhas de poliéster.",
      "O filme hidrossolúvel desaparece totalmente com água fria sem manchar o tecido."
    ],
    commonErrors: [
      "❌ Bordar toalha felpuda sem plástico solúvel por cima (as letras viram um emaranhado de pelos e o contorno afunda).",
      "❌ Puxar a toalha com força para esticar no bastidor, deformando a barra aveludada.",
      "❌ Molhar a toalha com excesso de água antes de tirar os pedaços grandes de plástico com as mãos."
    ],
    troubleshootingTips: [
      "Pelinhos da toalha estão saindo no meio do nome bordado: aplique o plástico hidrossolúvel por cima e reprograme a matriz adicionando sob-ponto de grade sob as letras.",
      "A toalha ficou com marcas profundas e brancas do aro do bastidor: borrife água morna sobre a marca e passe um vapor suave de ferro sem encostar na felpa para as fibras levantarem.",
      "O plástico solúvel ficou duro e grudado após secar: enxágue com água morna corrente abundante para dissolver todo o resíduo do filme de PVA."
    ],
    dicaArtrelados: "Para tirar os pedacinhos de plástico solúvel que sobram dentro das letrinhas fechadas (como o 'a' e o 'o'): pegue um pedaço do próprio plástico enroladinho como uma bolinha, molhe a pontinha na água e encoste nos cantinhos! Ele gruda nos pedacinhos e puxa tudo de uma vez sem molhar a toalha inteira!",
    voceSabia: "O tecido felpudo absorvente de algodão foi inventado na corte do Império Otomano em Bursa, na Turquia, no século XVII, onde os tecelões puxavam laçadas extras à mão para criar as famosas toalhas turcas de banho termal!",
    practicalExercise: "Pegue uma toalha velha felpuda. Borde a letra 'B' com 4 cm diretamente na felpa sem plástico. Ao lado, borde a mesma letra 'B' usando uma folha de plástico hidrossolúvel por cima. Lave as duas e veja como a diferença é inacreditável!",
    quickSummary: "Gestão de Toalha Felpuda é o uso combinado de filme hidrossolúvel por cima e sob-pontos de sustentação para impedir que os pontos afundem nas felpas da toalha.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Bola Leve (SES)",
      density: "0.38 mm com Pull Comp de 0.45 mm e Filme Solvy"
    },
    relatedTerms: [
      "Plástico Hidrossolúvel (Solvy / Avalon)",
      "Ponto Knockdown (Grade de Contenção)",
      "Compensação de Encolhimento (Pull Comp)",
      "Marca de Bastidor (Hoop Burn)",
      "Underlay Tatami"
    ],
    tags: [
      "t-084",
      "toalha felpuda",
      "terry cloth",
      "hidrossoluvel",
      "solvy",
      "knockdown",
      "enxovais",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. The Ultimate Towel Embroidery Guide: Stabilizers and Toppings. Freiburg, 2022.",
      "SULKY OF AMERICA. Water Soluble Stabilizers for High-Pile Fabrics. Kennesaw, 2021.",
      "ARTRELADOS. Guia de Bordados Impecáveis em Toalhas e Enxovais Felpudos. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-085-trava-de-seguranca-do-bastidor-e-alavanca-rapida",
    code: "T-085",
    term: "Trava de Segurança do Bastidor e Alavanca Rápida (Hoop Cam Lock & Quick-Release Lever)",
    pronunciation: "tra-va de se-gu-ran-sa do bas-ti-dor e a-la-van-ca rá-pi-da",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores & Acessórios",
    origin: "Do germânico 'trappa' (fecho, trava) e do latim 'levare' (erguer, facilitar). Inovação mecânica desenvolvida para substituir o aperto manual cansativo de parafusos por sistemas rápidos de pressão.",
    summary: "Mecanismo de alavanca excêntrica e fecho rápido que fixa tecidos no bastidor com pressão uniforme instantânea, prevenindo fadiga nas mãos e afrouxamentos.",
    definition: "A Trava de Segurança do Bastidor com Alavanca Rápida (Hoop Cam Lever Lock / Quick-Release Clamping System / Bastidor com Trava Excêntrica) é o dispositivo ergonômico e mecânico acoplado ao aro externo dos bastidores modernos. Substitui ou complementa o parafuso borboleta convencional através de um sistema de came rotativo (alavanca de pressão excêntrica). Ao baixar a alavanca com um único movimento do dedo, o mecanismo fecha o aro externo com força radial pré-calibrada e uniforme, travando o tecido e a entretela sem repuxar as fibras e sem risco de afrouxar durante vibrações em alta velocidade.",
    technicalDetails: "O sistema opera com alavanca de polímero reforçado com fibra de vidro ou alumínio anodizado sobre pino de aço inoxidável. Permite pré-ajuste micrométrico da abertura por rosca recartilhada antes do fechamento por alavanca. Reduz o tempo de enquadramento em até 60% em linhas de produção.",
    beginnerExplanation: "É aquela alavanquinha rápida parecida com a trava do selim de bicicleta que tem no bastidor! Em vez de ficar girando um parafuso com os dedos até doer a mão, você só empurra a alavanquinha para baixo e o bastidor trava o tecido bem firme e na hora!",
    howItWorks: [
      "1. A bordadeira ajusta o parafuso da alavanca na espessura aproximada do tecido com entretela.",
      "2. Posiciona o tecido e a entretela sobre o aro interno do bastidor.",
      "3. Encaixa o aro externo por cima da peça.",
      "4. Empurra a alavanca rápida para a posição travada (fechada).",
      "5. A curva excêntrica comprime o aro uniformemente em toda a volta do tecido com tensão de tambor.",
      "6. A trava de segurança impede que a vibração da máquina solte o bastidor durante o bordado a 900 PPM.",
      "7. Ao finalizar, levanta-se a alavanca com um dedo e a peça sai livre instantaneamente."
    ],
    applications: [
      "Produção em série de uniformes, camisas polo e camisetas promocionais.",
      "Prevenção de Lesões por Esforço Repetitivo (LER/DORT) em operadores de bordado.",
      "Enquadramento de tecidos escorregadios que perdem tensão com parafusos convencionais.",
      "Ateliês com alta rotatividade de trocas de peças por hora."
    ],
    characteristics: [
      "Fechamento ergonômico instantâneo com esforço físico mínimo.",
      "Pressão perimetral uniforme que evita marcas unilaterais de bastidor.",
      "Segurança mecânica total contra destravamento acidental em alta velocidade."
    ],
    commonErrors: [
      "❌ Forçar a alavanca para fechar em tecidos super grossos sem ter aliviado a rosca prévia, podendo quebrar o plástico da alavanca.",
      "❌ Não verificar se a alavanca fechou até o fim do curso de segurança antes de encaixar na máquina.",
      "❌ Usar alicates de metal para forçar o fechamento de alavancas de bastidor."
    ],
    troubleshootingTips: [
      "O tecido está escorregando dentro do bastidor mesmo com a alavanca fechada: abra a alavanca, aperte a rosca de ajuste em 1 volta no sentido horário e feche a alavanca novamente.",
      "A alavanca está dura demais e não chega ao final: solte a rosca de ajuste em meia volta antes de forçar para não estalar o plástico do aro.",
      "A alavanca abriu durante o bordado: o pino central está gasto ou o curso não estava totalmente travado além do ponto de topo morto (Over-Center Lock)."
    ],
    dicaArtrelados: "Para quem borda muitas peças por dia: bastidores com trava de alavanca rápida são o melhor investimento para a sua saúde! Eles eliminam as dores nos tendões do polegar causadas por girar parafusos o dia inteiro!",
    voceSabia: "O princípio da trava excêntrica rápida por alavanca foi patenteado em 1927 pelo ciclista italiano Tullio Campagnolo para permitir a troca rápida de rodas de bicicletas durante as corridas nos Alpes sob frio congelante!",
    practicalExercise: "Treine abrir e fechar a alavanca rápida do seu bastidor com apenas um dedo. Cronometre no celular o tempo que você leva para colocar 3 camisetas no bastidor com alavanca versus o bastidor de parafuso comum.",
    quickSummary: "Trava de Segurança com Alavanca Rápida é o sistema de fechamento instantâneo do bastidor que garante firmeza de tambor com ergonomia e sem cansar os dedos.",
    recommendedSettings: {
      speedPPM: "Compatível até 1.200 PPM",
      needleType: "Todos os calibres",
      density: "Pressão radial calibrada"
    },
    relatedTerms: [
      "Aro do Bastidor",
      "Bastidor Magnético",
      "Enquadramento (Hooping)",
      "Marca de Bastidor (Hoop Burn)",
      "Ergonomia no Ateliê"
    ],
    tags: [
      "t-085",
      "trava de bastidor",
      "alavanca rapida",
      "cam lock",
      "ergonomia",
      "enquadramento",
      "acessorios",
      "artrelados"
    ],
    bibliographicReferences: [
      "MIGHTY HOOP. Magnetic & Quick-Lock Hooping Systems Technical Bulletin. Wisconsin, 2022.",
      "BROTHER INTERNATIONAL. Fast Hooping Accessories and Lever Frames Manual. Nagoya, 2021.",
      "ARTRELADOS. Ergonomia, Produtividade e Acessórios Modernos para Bordadeiras. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-086-tolerancia-de-folga-da-agulha-na-lancadeira",
    code: "T-086",
    term: "Tolerância de Folga da Agulha na Lançadeira (Needle-to-Hook Point Clearance / Gap Calibration)",
    pronunciation: "to-le-rân-ci-a de fol-ga da a-gu-lha na lan-sa-dei-ra",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica & Manutenção",
    origin: "Do latim 'tolerare' (suportar, margem permitida) e do francês 'crochet' / 'navette' (lançadeira rotativa). Parâmetro mecânico de precisão micrométrica fundamental para a formação do ponto fixo sem colisões.",
    summary: "Distância microscópica de 0,05 mm a 0,10 mm entre a ponta da lançadeira e a cava da agulha que garante a laçada perfeita sem falhar ponto e sem bater agulha.",
    definition: "A Tolerância de Folga da Agulha na Lançadeira (Needle-to-Rotary Hook Clearance / Bico da Lançadeira vs. Cava da Agulha) é a medida de espaçamento radial crítico entre a ponta afilada do bico da lançadeira rotativa e o fundo rebaixado da cava posterior da agulha (Scarf) no instante exato de laçada (Timing Point, aos 198° a 204° do ciclo da máquina). Essa folga deve ser mantida estritamente entre 0,05 mm e 0,10 mm (a espessura de uma folha fina de papel sulfite ou papel vegetal): se for maior, a ponta passa no vazio e falha o ponto; se for zero ou negativa, a ponta raspa na agulha, gerando rebarbas, quebras de agulha e quebras contínuas de linha.",
    technicalDetails: "Aferida com calibre de lâminas (Feeler Gauge) de 0,05 mm ou 0,08 mm. O ponto de captura ideal ocorre quando a agulha sobe de 1,8 mm a 2,2 mm a partir do Ponto Morto Inferior (PMI) e a ponta da lançadeira se encontra entre 0,5 mm e 1,0 mm acima do topo do olho da agulha.",
    beginnerExplanation: "É a distância microscópica entre a pontinha afiada da lançadeira (que fica girando lá embaixo da chapa) e a agulha que desce. A ponta precisa passar tão pertinho da agulha a ponto de quase encostar para pescar o laço de linha, mas sem encostar de verdade para não quebrar a agulha nem estalar!",
    howItWorks: [
      "1. A agulha desce com a linha superior até o ponto mais baixo (Ponto Morto Inferior).",
      "2. A barra da agulha inicia a subida de 2 mm, criando uma folga no fio que forma um laço aberto (Loop).",
      "3. A ponta da lançadeira rotativa passa velozmente por trás da agulha, exatamente no rebaixo da cava.",
      "4. Com a folga calibrada em 0,05 mm, a ponta penetra com precisão cirúrgica dentro do laço de linha.",
      "5. A lançadeira expande o laço e o conduz ao redor da caixa de bobina, formando o nó do ponto.",
      "6. O ciclo se repete até 20 vezes por segundo com sincronismo milimétrico inalterado."
    ],
    applications: [
      "Sincronização mecânica periódica de lançadeiras rotativas em oficinas e ateliês.",
      "Correção de máquinas que falham pontos sistematicamente em tecidos grossos ou bonés.",
      "Recuperação de lançadeiras após colisões severas de agulha contra a chapa de ponto.",
      "Ajuste ao trocar o calibre padrão de agulhas (de agulha 65/9 para 90/14 pesada)."
    ],
    characteristics: [
      "Medida micrométrica imperceptível a olho nu sem auxílio de lupa ou calibre.",
      "Determina a confiabilidade de 100% da formação do ponto.",
      "Exige chaves allen de precisão para soltar os parafusos do eixo da lançadeira."
    ],
    commonErrors: [
      "❌ Deixar a agulha bater e raspar diretamente no bico da lançadeira, cegando a ponta e criando rebarbas cortantes.",
      "❌ Deixar a folga maior que 0,15 mm (a ponta não alcança o laço e a máquina pula pontos a cada 5 segundos).",
      "❌ Apertar os parafusos da lançadeira sem conferir a folga após o aperto final (o aperto pode puxar o eixo e alterar a medida)."
    ],
    troubleshootingTips: [
      "A máquina pula pontos (deixa pontos em branco) mas a agulha não quebra: a lançadeira está afastada demais da agulha; aproxime o bico da lançadeira até a folga de 0,05 mm.",
      "Ruído metálico de 'clique-clique' a cada descida da agulha: o bico da lançadeira está raspando na lateral da agulha; recue a lançadeira ligeiramente.",
      "A linha desfia e quebra toda hora na mesma agulha: o bico da lançadeira foi riscado por uma agulha antiga que quebrou; faça o polimento do bico com lixa d'água 2000 e pasta diamantada."
    ],
    dicaArtrelados: "Para conferir a folga sem ferramentas caras: coloque uma folha de papel sulfite comum (que tem exatamente 0,08 mm de espessura) entre o bico da lançadeira e a agulha! O papel deve passar raspando de leve sem rasgar nem prender!",
    voceSabia: "Em uma máquina de bordar industrial trabalhando a 1.000 PPM, a ponta da lançadeira passa a poucos centésimos de milímetro da agulha nada menos que 60.000 vezes a cada hora de trabalho contínuo!",
    practicalExercise: "Retire a chapa de agulha da sua máquina e gire o volante manualmente na sua direção com uma lanterna. Observe a ponta afiada da lançadeira passando exatamente atrás do buraquinho da agulha e veja como a distância é incrivelmente minúscula.",
    quickSummary: "Tolerância de Folga na Lançadeira é a distância de 0,05 mm a 0,10 mm entre o bico giratório e a agulha para capturar o laço da linha sem bater.",
    recommendedSettings: {
      speedPPM: "Calibração manual",
      needleType: "Agulha nova reta de referência (DBxK5 ou 130/705H)",
      density: "Folga: 0.05 mm a 0.10 mm | Timing: 198° a 204°"
    },
    relatedTerms: [
      "Lançadeira Rotativa",
      "Sincronismo de Ponto (Timing)",
      "Cava da Agulha (Scarf)",
      "Ponto Pulado (Skipped Stitch)",
      "Calibre de Lâminas"
    ],
    tags: [
      "t-086",
      "tolerancia",
      "folga",
      "lancadeira",
      "agulha",
      "sincronismo",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    bibliographicReferences: [
      "KOBAN HOOKS MFG. Rotary Hook Timing and Clearance Calibration Manual. Osaka, 2021.",
      "TAJIMA SEWING MACHINE CO. Maintenance and Hook Clearance Standards. Nagoya, 2022.",
      "ARTRELADOS. Guia de Sincronismo, Troca e Regulagem de Lançadeiras. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-087-tubo-guia-linha-de-teflon-e-conducao-sem-atrito",
    code: "T-087",
    term: "Tubo Guia-Linha de Teflon e Condução Sem Atrito (PTFE Thread Guide Tubing & Friction Reduction)",
    pronunciation: "tu-bo gui-a li-nha de té-flon e con-du-são sem a-tri-to",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Agulhas & Fios",
    origin: "Do polímero sintético Politetrafluoretileno (PTFE), descoberto por Roy Plunkett nos EUA em 1938 e comercializado sob a marca Teflon pela DuPont.",
    summary: "Tubos flexíveis de Teflon instalados no cabeçote que conduzem os fios dos cones até os tensores sem atrito estático, nós ou poeira.",
    definition: "Os Tubos Guia-Linha de Teflon (PTFE Thread Conduits / Anti-Static Thread Tubing / Condutores Tubulares de Baixo Atrito) são canais flexíveis e translúcidos de politetrafluoretileno instalados entre a árvore do suporte de cones superior e a bancada de pré-tensores no cabeçote de máquinas de bordar industriais e semiprofissionais multicabeças. Devido ao coeficiente de atrito extremamente baixo do PTFE (um dos menores entre todos os sólidos conhecidos), esses tubos conduzem os fios de poliéster, viscose e metálicos isolando-os de turbulências de ar geradas por ventiladores do ateliê, eletricidade estática e poeira suspensa, impedindo que linhas vizinhas se entrelacem em alta rotação.",
    technicalDetails: "Diâmetro interno padronizado de 1,5 mm a 2,5 mm com espessura de parede de 0,5 mm. Resistência térmica contínua de -200 °C a +260 °C. O material dissipa cargas eletrostáticas triboelétricas que causam arrepiamento de microfilamentos têxteis.",
    beginnerExplanation: "São aqueles canudinhos brancos compridos e transparentes que ficam na parte de cima da máquina. A linha passa por dentro deles direto do cone até a agulha, fazendo o fio correr liso e protegido do vento e da poeira, sem embaraçar com os outros carretéis do lado!",
    howItWorks: [
      "1. A linha sai do cone no suporte superior e é inserida na ponta do tubo de Teflon com uma agulha passadora ou ar comprimido.",
      "2. O fio desliza pelo interior do tubo com atrito praticamente nulo.",
      "3. O tubo protege o filamento contra o vento de ventiladores e ar-condicionado do ateliê que poderiam fazer o fio balançar.",
      "4. O fio sai na extremidade inferior do tubo diretamente alinhado sobre os discos pré-tensores.",
      "5. A linha entra no sistema de tensão com velocidade estável e sem torções no trajeto.",
      "6. A máquina borda em velocidade máxima sem quebras por enrosco de fios externos."
    ],
    applications: [
      "Máquinas multicores (6, 10, 12 e 15 agulhas) com cones de linha muito próximos uns dos outros.",
      "Condução segura de linhas metálicas delicadas (Lurex) que desfolham com atrito seco.",
      "Ateliês em regiões de clima seco com alta incidência de eletricidade estática no ar.",
      "Bordados em alta velocidade onde o balanço da linha desestabiliza a alimentação."
    ],
    characteristics: [
      "Coeficiente de atrito quase nulo que não freia o filamento.",
      "Proteção física total contra pó de entretela e fiapos suspensos no ar.",
      "Material inerte e altamente durável imune a ressecamento e rachaduras."
    ],
    commonErrors: [
      "❌ Deixar poeira e fiapos se acumularem dentro do tubo de Teflon por anos sem limpar.",
      "❌ Dobrar o tubo em ângulos retos e vincos fechados que estrangulam a passagem do fio.",
      "❌ Usar mangueiras plásticas de PVC comum em vez de tubos originais de Teflon (o PVC cria atrito e esquenta a linha)."
    ],
    troubleshootingTips: [
      "A linha passa pesada e travando dentro do tubo: injete um jato de ar comprimido ou passe uma linha embebida em álcool isopropílico por dentro do tubo para remover poeira e cera acumuladas.",
      "Fios vizinhos estão se enroscando no ar antes de entrar na máquina: instale ou reposicione os tubos de Teflon para isolar a trajetória de cada cor de linha.",
      "O tubo de Teflon está amassado ou com vinco vincado: corte a parte amassada ou substitua o segmento de tubo por um novo de PTFE."
    ],
    dicaArtrelados: "Para passar a linha dentro do tubo de Teflon em 2 segundos: dê um nó na linha antiga com a linha nova e puxe suavemente pela ponta de baixo! Se a linha tiver arrebentado dentro, use um pedaço de fio de náilon fino ou um sopro de ar comprimido com a bombinha!",
    voceSabia: "O Teflon (PTFE) é tão incrivelmente liso e escorregadio que é a única substância sólida conhecida no planeta Terra na qual as patas de uma lagartixa comum não conseguem se fixar ou grudar!",
    practicalExercise: "Pegue um pedaço de linha de bordado. Puxe-o esfregando na quina de uma mesa de madeira e sinta o atrito. Depois, passe-o por dentro de um tubo de Teflon e puxe: sinta a suavidade impressionante e a leveza do movimento.",
    quickSummary: "Tubos Guia-Linha de Teflon são canais de PTFE que conduzem os fios dos cones até os tensores com atrito zero, protegendo contra vento e nós.",
    recommendedSettings: {
      speedPPM: "Compatível até 1.200 PPM",
      needleType: "Todos os calibres",
      density: "Material: PTFE Puro Antiestático"
    },
    relatedTerms: [
      "Suporte de Cones (Árvore de Linha)",
      "Pré-Tensor",
      "Linha Metálica",
      "Eletricidade Estática",
      "Manutenção Preventiva"
    ],
    tags: [
      "t-087",
      "teflon",
      "tubo guia",
      "ptfe",
      "baixo atrito",
      "passagem de linha",
      "cabecote",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA SEWING MACHINE CO. Thread Path & PTFE Tubing Maintenance Manual. Nagoya, 2021.",
      "GUNOLD EMBROIDERY. Machine Accessories & Friction-Free Thread Delivery. Kennesaw, 2022.",
      "ARTRELADOS. Estrutura do Cabeçote e Condução Eficiente de Linhas no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-088-transicao-cromatica-por-mesclagem-de-ponto",
    code: "T-088",
    term: "Transição Cromática por Mesclagem de Ponto (Color Blending & Gradient Thread Interlacing)",
    pronunciation: "tran-zi-são cro-má-ti-ca por mes-cla-gem de pon-to",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    origin: "Do latim 'transitio' (passagem de um estado a outro) e do grego 'chroma' (cor). Técnica de pintura com agulha (Needle Painting) originada no bordado manual renascentista e digitalizada por algoritmos vetoriais de difusão.",
    summary: "Técnica de programação em que duas ou mais camadas de cores diferentes se entrelaçam com densidades graduadas para criar degradês hiper-realistas.",
    definition: "A Transição Cromática por Mesclagem de Ponto (Color Blending / Gradient Shading / Degradê de Densidade Variável / Needle Blending) é a metodologia avançada de digitalização onde o programador cria passagens suaves e contínuas entre duas ou mais tonalidades de linha dentro do mesmo elemento visual. Em vez de blocos de cor sólidos com divisórias bruscas, o software gera camadas sobrepostas com densidade decrescente (ex: a primeira cor começa densa a 0,35 mm e vai abrindo até 1,2 mm, enquanto a segunda cor entra na direção oposta abrindo de 1,2 mm para 0,35 mm com pontas denteadas intercaladas).",
    technicalDetails: "Utiliza algoritmos de comprimento de ponto aleatório (Random Stitch Length) e bordas franjadas (Feathered Edge / Jagged Edge) com variação de 20% a 50% no comprimento dos pontos. Os ângulos das duas camadas de cor devem ser idênticos ou variar no máximo 5° a 10° para evitar efeito indesejado de gradeamento ou xadrez.",
    beginnerExplanation: "É o efeito de degradê que faz uma cor passar suavemente para outra sem parecer uma linha dura cortada no meio! Por exemplo, bordar uma pétala de rosa que começa vermelha escura na raiz e vai clareando até virar rosa claro na ponta, misturando os fios como se fosse tinta na tela!",
    howItWorks: [
      "1. O programador desenha a forma do objeto no software e duplica a camada vetorial.",
      "2. Na primeira camada (cor escura), aplica o efeito de degradê (Color Blending), fazendo os pontos ficarem espaçados no topo.",
      "3. Ativa as pontas irregulares (bordas denteadas/franjadas) para intercalar os fios.",
      "4. Na segunda camada (cor clara), aplica o degradê inverso, preenchendo os espaços abertos da primeira cor.",
      "5. Mantém os ângulos dos pontos rigorosamente paralelos em ambas as camadas.",
      "6. A máquina borda a primeira cor e, em seguida, borda a segunda cor sobrepondo os fios.",
      "7. A ilusão óptica no olho humano funde as duas cores em um degradê hiper-realista e natural."
    ],
    applications: [
      "Pintura com agulha (Needle Painting) de animais, pelagens e olhos hiper-realistas.",
      "Pétalas de flores, folhagens, frutas e paisagens botânicas de alto luxo.",
      "Degradês de fogo, céu, pôr do sol e água em grandes murais bordados.",
      "Logotipos corporativos modernos com efeitos de iluminação e brilho metálico."
    ],
    characteristics: [
      "Cria efeitos visuais de nível artístico que valorizam o bordado em mais de 300%.",
      "Não endurece o tecido, pois as densidades parciais se complementam (0,6 mm + 0,6 mm = 0,30 mm final).",
      "Exige excelente sincronismo e linhas com brilho uniforme de poliéster trilobal."
    ],
    commonErrors: [
      "❌ Cruzar os ângulos das duas cores em 90° (as cores não se misturam e o bordado fica parecendo um tecido xadrez).",
      "❌ Deixar as duas camadas com densidade normal de 0,40 mm cheia (gera sobrecarga de pontos, quebra agulhas e deixa o bordado duro como madeira).",
      "❌ Usar linhas de composições diferentes (como misturar linha fosca de algodão com linha brilhante de poliéster no mesmo degradê)."
    ],
    troubleshootingTips: [
      "O degradê ficou com uma linha divisória dura e visível entre as duas cores: aumente a profundidade das pontas denteadas (Jagged Edge) para 40% e amplie a área de sobreposição das duas cores para pelo menos 8 mm.",
      "A agulha está quebrando na área onde as duas cores se encontram: a soma das densidades está muito fechada; aumente o espaçamento de ambas as camadas para 0,70 mm na zona de transição.",
      "A cor de cima cobriu totalmente a cor de baixo sem degradê: inverta a ordem de bordado ou aumente o espaçamento dos pontos da cor superior."
    ],
    dicaArtrelados: "Para criar o degradê perfeito: use sempre 3 tons da mesma família de cores (por exemplo: azul-marinho, azul-royal e azul-celeste)! A transição em três etapas fica tão suave que quem olha de perto jura que foi pintado com aerógrafo!",
    voceSabia: "A técnica de mesclagem de pontos (Needle Painting) atingiu seu auge na China no século XI durante a Dinastia Song, onde bordadeiras da corte imperial usavam fios de seda divididos em até 16 microfilamentos para bordar retratos imperiais com detalhes idênticos a fotografias!",
    practicalExercise: "Crie um retângulo de 5x3 cm no seu software. Configure a metade esquerda em vermelho com degradê abrindo para a direita e a metade direita em amarelo com degradê abrindo para a esquerda. Borde a amostra e admire o lindo tom de laranja que se forma naturalmente no centro!",
    quickSummary: "Transição Cromática por Mesclagem é a técnica de entrelaçar duas cores com densidades graduadas e pontas denteadas para criar degradês perfeitos.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Fina ou Microtex",
      density: "0.65 mm a 0.80 mm por camada (Densidade combinada 0.38 mm)"
    },
    relatedTerms: [
      "Pintura com Agulha (Needle Painting)",
      "Ponto Plumetis",
      "Bordas Denteadas (Jagged Edge)",
      "Degradê (Gradient)",
      "Ângulo do Ponto"
    ],
    tags: [
      "t-088",
      "transicao cromatica",
      "degrade",
      "color blending",
      "needle painting",
      "mesclagem",
      "programacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Color Blending & Shading Manual. Sydney, 2022.",
      "MADEIRA THREADS. Needle Painting & Thread Shading Techniques. Freiburg, 2021.",
      "ARTRELADOS. Segredos do Hiper-Realismo e Pintura com Agulha no Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-089-termodecapagem-de-fios-e-limpeza-termica",
    code: "T-089",
    term: "Termodecapagem de Fios e Limpeza Térmica de Bordados (Hot-Air & Heat-Gun Thread Trimming Tool)",
    pronunciation: "ter-mo-de-ca-pa-gem de fi-os e lim-pe-za tér-mi-ca de bor-da-dos",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do grego 'therme' (calor) e do francês 'décaper' (limpar superfície, desbastar). Técnica moderna de pós-produção industrial desenvolvida para limpeza ultrarrápida de micro-pontas de linhas sintéticas.",
    summary: "Uso de ferramentas térmicas controladas (sopradores de ar quente ou ferros de corte) para derreter, selar e eliminar pontas de fios e fiapos em segundos.",
    definition: "A Termodecapagem de Fios e Limpeza Térmica (Thermal Thread Trimming / Hot-Air Defuzzing / Cautério de Ar Quente para Bordados) é o processo profissional de acabamento e controle de qualidade onde ferramentas de calor direcionado (como sopradores térmicos de precisão com bico fino regulados entre 160 °C e 220 °C ou pirógrafos/ferros de solda com ponta de agulha) são utilizados para derreter instantaneamente pontas soltas de linhas de poliéster 100%. Como o poliéster é um termoplástico com ponto de fusão em ~250 °C, o calor rápido faz as micro-pontas encolherem e se fundirem em micro-esferas invisíveis que selam os arremates sem queimar o tecido de algodão ou brim da peça.",
    technicalDetails: "Temperatura operacional recomendada para linha de poliéster 120: 180 °C a 200 °C aplicada com varredura rápida de ar a 5 cm de distância por frações de segundo. Para corte de bordas de patches sobre sarja sintética, utilizam-se cortadores térmicos tipo ponta quente (Hot Knife) a 260 °C.",
    beginnerExplanation: "É o truque dos grandes ateliês para limpar todas aquelas pontinhas minúsculas de linha que sobram entre as letras sem você precisar ficar cortando uma por uma com tesourinha! Você passa um bico de ar quente especial bem rápido por cima e as pontinhas de poliéster somem e derretem na hora, deixando o bordado limpo e perfeito!",
    howItWorks: [
      "1. A peça bordada é retirada da máquina e os fios longos de pulo são aparados grosseiramente com tesoura de arremate.",
      "2. O operador liga o soprador térmico de precisão na temperatura calibrada para poliéster (190 °C).",
      "3. Faz uma varredura contínua e rápida com o bico de ar quente sobre as áreas de letras e detalhes do bordado.",
      "4. O ar quente atinge as pontas soltas de linha de poliéster, que se retraem instantaneamente em micro-bolinhas imperceptíveis.",
      "5. As fibras do tecido base (algodão ou brim) não sofrem alteração pelo tempo de exposição ultracurto.",
      "6. A peça fica 100% limpa, sem fiapos e com os nós perfeitamente selados contra desfiamento futuro."
    ],
    applications: [
      "Limpeza rápida de centenas de uniformes corporativos e camisetas promocionais por hora.",
      "Acabamento impecável de microletras em jalecos médicos e crachás.",
      "Selagem perimetral e corte limpo de bordas de patches e emblemas bordados.",
      "Eliminação de fiapos em bonés estruturados e peças de alta densidade."
    ],
    characteristics: [
      "Aumenta a velocidade de limpeza pós-bordado em mais de 500%.",
      "Sela os pontos de arremate impedindo que os nós se desfaçam na máquina de lavar.",
      "Aplicável exclusivamente a linhas sintéticas de poliéster e poliamida."
    ],
    commonErrors: [
      "❌ Parar o soprador térmico parado no mesmo ponto por mais de 2 segundos, derretendo o tecido ou amarelando a roupa.",
      "❌ Tentar aplicar em bordados feitos com linha 100% algodão ou seda pura (o algodão não derrete, apenas queima/carboniza).",
      "❌ Usar em tecidos sintéticos ultrassensíveis como náilon fininho sem testar em um retalho antes."
    ],
    troubleshootingTips: [
      "O tecido ficou com aspecto levemente brilhante ou endurecido: aumente a distância do bico do soprador para 8 cm e faça movimentos de varredura mais rápidos sem pausar.",
      "As pontas de linha não estão derretendo: a temperatura do aparelho está muito baixa ou a linha utilizada é de algodão/viscose; ajuste a temperatura para 200 °C.",
      "O contorno do patch ficou irregular após corte térmico: use uma régua de metal ou gabarito de vidro como guia de corte para o ferro quente."
    ],
    dicaArtrelados: "Para limpar toalhas e uniformes em segundos: faça movimentos rápidos em 'vaivém' como se estivesse borrifando spray com o soprador de ar quente! NUNCA pare o bico no mesmo lugar! O movimento contínuo limpa todas as pontinhas sem oferecer nenhum risco à roupa!",
    voceSabia: "Na indústria de fabricação de calçados esportivos e uniformes para a Fórmula 1, robôs térmicos automatizados realizam a termodecapagem de mais de 50.000 pontos de bordado em menos de 4 segundos usando feixes de ar ionizado aquecido a laser!",
    practicalExercise: "Pegue um retalho bordado com algumas pontinhas de linha de poliéster levantadas. Use um soprador térmico ou um isqueiro com a chama azul (passando bem rápido a 2 cm sem encostar a chama amarela) e veja como a pontinha de linha some e sela instantaneamente.",
    quickSummary: "Termodecapagem de Fios é a limpeza térmica rápida que utiliza calor direcionado para derreter e selar micro-pontas de linha sintética sem danificar o tecido.",
    recommendedSettings: {
      speedPPM: "N/A (Acabamento Pós-Bordado)",
      needleType: "N/A",
      density: "Temperatura: 180 °C a 200 °C | Varredura rápida"
    },
    relatedTerms: [
      "Tesoura de Arremate (Peliça)",
      "Linha de Poliéster 120",
      "Patch Bordado",
      "Acabamento e Controle de Qualidade",
      "Ponto de Fusão Têxtil"
    ],
    tags: [
      "t-089",
      "termodecapagem",
      "limpeza termica",
      "acabamento",
      "ar quente",
      "patches",
      "selagem",
      "artrelados"
    ],
    bibliographicReferences: [
      "GUNOLD EMBROIDERY. Finishing Tools: Heat Trimming and Edge Sealing. Kennesaw, 2022.",
      "MADEIRA THREADS. Post-Embroidery Trimming and Heat Treatment Standards. Freiburg, 2021.",
      "ARTRELADOS. Guia de Produtividade, Acabamento e Inspeção Final no Ateliê. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_T13: Verbete[] = [
  {
    id: "t-090-trava-de-seguranca-do-calcador",
    code: "T-090",
    term: "Trava de Segurança do Calcador e Altura Dinâmica (Presser Foot Height & Clearance Lock Mechanism)",
    pronunciation: "tra-va de se-gu-ran-sa do cal-sa-dor e al-tu-ra di-na-mi-ca",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do latim 'calcare' (pisar, pressionar) e do francês 'mécanisme'. Dispositivo mecânico de prensagem intermitente introduzido nas primeiras máquinas de costura e aperfeiçoado para bordado eletrônico multiespessura.",
    summary: "Regulagem de precisão da altura do pezinho da máquina (calcador) que segura o tecido no ponto morto inferior sem esmagá-lo nem deixá-lo flutuar (efeito flagging).",
    definition: "A Trava de Segurança do Calcador e Altura Dinâmica (Presser Foot Stroke & Clearance Adjustment Mechanism) é o mecanismo de calibração mecânica ou eletrônica responsável por determinar a distância vertical exata entre a base inferior do calcador e a chapa de agulha no instante em que a barra de agulha atinge o Ponto Morto Inferior (PMI). Sua função essencial é conter a elevação do tecido no momento em que a agulha sobe (evitando o fenômeno patológico do 'flagging' ou batimento do tecido, que impede a abertura do laço pela lançadeira), garantindo simultaneamente que a sapata não exerça pressão de atrito excessiva sobre materiais com relevo, veludos, toalhas felpudas ou espumas EVA para relevo 3D.",
    technicalDetails: "A folga operacional padrão do calcador no PMI deve ser calibrada entre 0,5 mm e 1,0 mm acima da superfície do tecido tensionado (equivalente à espessura de uma folha de cartão grosso ou 2 a 3 folhas de papel sulfite). Em bordados com E.V.A. tridimensional (3D Foam), a altura do calcador deve ser elevada entre 1,5 mm e 2,5 mm por meio do excêntrico traseiro ou regulagem digital no painel para evitar o esmagamento prematuro da espuma.",
    beginnerExplanation: "É a regulagem da altura daquele pezinho de metal furado por onde a agulha passa. Ele precisa descer e segurar o tecido no momento do furo para que o tecido não fique 'quicando' e pulando para cima com a agulha; mas também não pode bater com tanta força a ponto de marcar o tecido ou amassar peças grossas como toalhas e espumas!",
    howItWorks: [
      "1. A barra de agulha desce tracionada pelo eixo principal e a agulha fura o tecido.",
      "2. Milissegundos antes da agulha atingir o ponto mais baixo, o calcador desce e assenta sobre o tecido.",
      "3. O calcador pressiona o tecido suavemente contra a chapa de agulha, imobilizando as fibras têxteis.",
      "4. A agulha sobe cerca de 2 mm a 3 mm; o tecido permanece imóvel graças ao calcador, formando um laço perfeito de linha na cava.",
      "5. A ponta da lançadeira passa e pesca o laço de linha superior sem falhar o ponto.",
      "6. A agulha e o calcador sobem juntos, liberando o bastidor para o pantógrafo se mover para o próximo ponto."
    ],
    applications: [
      "Bordados em relevo 3D com espuma E.V.A. em bonés estruturados e jaquetas.",
      "Bordados em tecidos delicados que marcam facilmente com pressão (veludo alemão, cetim de seda, couro pelica).",
      "Eliminação de falhas de ponto e quebras de linha em toalhas felpudas grossas e cobertores.",
      "Calibração em materiais de espessura variável, como emendas de costura e palas de camisas."
    ],
    characteristics: [
      "Ajuste micrométrico via parafuso excêntrico na barra do calcador ou ajuste eletrônico no painel digital.",
      "Movimento sincronizado com o ciclo de 360° do eixo principal.",
      "Formato circular ou oval com bordas polidas para não desfiar filamentos vizinhos."
    ],
    commonErrors: [
      "❌ Deixar o calcador alto demais em tecidos finos, fazendo o pano quicar para cima e quebrar a agulha por flexão lateral.",
      "❌ Deixar o calcador baixo demais em bordados 3D com EVA, picotando e amassando a espuma antes do ponto cobrir.",
      "❌ Bordejar tecidos acolchoados sem checar a altura do calcador, resultando em estalos secos a cada batida."
    ],
    troubleshootingTips: [
      "A máquina está pulando pontos em áreas grossas do tecido: o calcador está muito alto e o tecido está subindo com a agulha; abaixe a altura do calcador em 0,5 mm.",
      "O bordado 3D de boné ficou esmagado e sem volume: suba o calcador em 1 mm para não amassar a espuma antes da cobertura de cetim.",
      "Apareceram marcas circulares brilhantes no veludo: levante ligeiramente o calcador e utilize plástico hidrossolúvel de proteção por cima da peça."
    ],
    dicaArtrelados: "Para regular a altura perfeita do calcador em segundos: coloque a máquina no ponto mais baixo (gire o volante até o ponto morto inferior). Coloque duas folhas de papel sulfite dobradas embaixo do pezinho. O papel deve deslizar com uma leve resistência, sem rasgar nem ficar solto! Essa é a altura mágica!",
    voceSabia: "As máquinas de bordar industriais de última geração possuem calcadores inteligentes com acionamento motorizado independente (Digital Presser Foot - DPF), que medem a espessura do tecido a cada ponto e ajustam sua altura automaticamente na fração de milissegundos!",
    practicalExercise: "Com a máquina desligada, gire o volante manual até a agulha atingir o ponto mais baixo dentro do tecido. Olhe de lado na altura dos olhos: observe se o calcador está encostando no tecido sem empurrá-lo para dentro do furo da chapa.",
    quickSummary: "Trava do Calcador é o ajuste mecânico da altura da sapata que imobiliza o tecido no instante exato da laçada, eliminando o quique do tecido e falhas de ponto.",
    recommendedSettings: {
      speedPPM: "700 a 850 PPM",
      needleType: "75/11",
      density: "Folga no PMI: 0.5 a 1.0 mm (1.5 a 2.5 mm em 3D Foam)"
    },
    relatedTerms: [
      "Calcador de Bordado",
      "Ponto Morto Inferior (PMI)",
      "Flagging (Batimento do Tecido)",
      "Bordado 3D com EVA",
      "Lançadeira Rotativa"
    ],
    tags: [
      "t-090",
      "calcador",
      "altura do calcador",
      "flagging",
      "presser foot",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Digitally Controlled Presser Foot (DCP) Mechanics. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Presser Foot Timing and Clearance Standards. Ichinomiya, 2021.",
      "ARTRELADOS. Mecânica Prática de Cabeçotes de Bordado: Calcadores, Agulhas e Lançadeiras. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-091-tecido-tactel-e-microfibra-no-bordado",
    code: "T-091",
    term: "Tecido Tactel e Microfibra no Bordado (Tactel & Microfiber Fabric Hooping Strategy)",
    pronunciation: "te-ci-do tac-tel e mi-cro-fi-bra no bor-da-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Marca registrada 'Tactel' (criada pela DuPont nos anos 1980 a partir do latim 'tactilis' - sensação ao toque) e 'microfibra' (fibras sintéticas ultrafinas com menos de 1 decitex).",
    summary: "Estratégias de estabilização, escolha de agulhas e compensação de repuxo para bordar tecidos sintéticos lisos, impermeáveis e de secagem rápida sem enrugar.",
    definition: "O Tecido Tactel e Microfibra no Bordado (Tactel Nylon & Polyester Microfiber Embroidery Protocol) compreende o conjunto técnico de manipulação e parametrização exigido para bordar sobre tecidos sintéticos planos tecidos com filamentos contínuos de alta densidade e finura extrema (poliamida 6.6 ou poliéster). Por serem tecidos leves, escorregadios, com baixa elasticidade mecânica e alta suscetibilidade a deformações por calor e perfuração de agulha, o bordado incorreto provoca o efeito 'zíper' (rasgo contínuo ao longo da linha de pontos), franzimento severo ao redor do bordado e deslizamento dentro dos aros do bastidor.",
    technicalDetails: "Exige o uso de agulhas de ponta aguda fina (Microtex / Sharp Point 65/9 ou 70/10) para separar os microfilamentos sem esmagá-los. Estabilização recomendada com entretela termocolante rasgável de 45g/m² ou entretela recortável leve (Cut-Away 50g) fixada com spray adesivo temporário. No software: Pull Compensation elevado para 0,40 mm, densidade aliviada para 0,42 mm e redução de pontos curtos repetidos.",
    beginnerExplanation: "É aquele tecido fininho e macio usado em bermudas de praia, agasalhos de corrida, jaquetas corta-vento e roupões de microfibra. Como ele é bem liso e escorrega no bastidor, se a gente usar agulha grossa ou puxar demais, o tecido rasga nos furos da agulha e fica todo enrugado em volta do desenho!",
    howItWorks: [
      "1. Aplica-se spray adesivo temporário sobre a entretela e fixa-se o tactel de forma lisa e sem puxar.",
      "2. Enquadra-se no bastidor com aperto moderado ou utiliza-se o método flutuante para evitar marcas brancas de pressão.",
      "3. Instala-se na máquina uma agulha ponta fina Microtex 70/10 nova.",
      "4. No software, utiliza-se sob-ponto em grade aberta tatami para distribuir as tensões sobre uma área ampla.",
      "5. A máquina borda em velocidade média (650 a 750 PPM) com tensões de linha aliviadas.",
      "6. Ao finalizar, o tecido permanece completamente liso, sem rugas nem deformações na peça esportiva."
    ],
    applications: [
      "Bermudas de surf, calções esportivos e jaquetas corta-vento escolares.",
      "Uniformes esportivos de atletismo, ciclismo e artes marciais.",
      "Roupões de microfibra de hotelaria e toalhas esportivas de secagem rápida.",
      "Jaquetas esportivas corporativas em nylon resinado e tactel forrado."
    ],
    characteristics: [
      "Sensível a calor excessivo e furos de agulhas grossas.",
      "Exige controle rigoroso de tensão para não criar ondas de repuxo.",
      "Proporciona bordados com brilho exuberante quando executado com agulha fina."
    ],
    commonErrors: [
      "❌ Usar agulha ponta bola grossa 90/14 em tactel, que esmaga os filamentos e rasga o tecido como um papel picotado.",
      "❌ Esticar o tactel com as mãos ao apertar o bastidor (ao soltar, o tecido encolhe e o bordado vira uma cuia enrugada).",
      "❌ Digitalizar matrizes com densidade pesadíssima (0,30 mm) sem sob-ponto."
    ],
    troubleshootingTips: [
      "O tecido cortou e rasgou ao longo do contorno do bordado: troque imediatamente a agulha por uma Microtex 65/9 ou 70/10 ponta fina nova e alivie a densidade no programa.",
      "Ficaram marcas brancas e brilhantes onde o bastidor apertou o tactel: use o método de bordado flutuante (apenas a entretela no bastidor com o tecido colado por cima).",
      "O bordado ficou enrugado em volta das letras: aumente a compensação de repuxo (Pull Comp) para 0,40 mm e reduza a tensão da linha superior."
    ],
    dicaArtrelados: "Para bordar bermudas e jaquetas de tactel sem deixar marcas de bastidor: prenda no bastidor APENAS a entretela! Passe um pouco de cola spray temporária e cole a peça de tactel por cima, alisando suavemente com as mãos (método flutuante). O bordado fica impecável e sem nenhuma marca de pressão!",
    voceSabia: "Os filamentos de microfibra de alta tecnologia utilizados em tecidos esportivos como o Tactel são até 100 vezes mais finos que um fio de cabelo humano e duas vezes mais finos que um fio de seda natural!",
    practicalExercise: "Pegue um retalho de tactel ou microfibra. Tente bordar uma letra 'A' com agulha 90/14 ponta bola e outra com agulha 70/10 ponta fina Microtex. Compare a perfeição das bordas e a ausência de furinhos ao redor da letra.",
    quickSummary: "Tecido Tactel e Microfibra são tecidos sintéticos leves que exigem agulhas finas Microtex 70/10, método flutuante e densidades aliviadas para não rasgar nem enrugar.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "65/9 ou 70/10 Microtex (Ponta Aguda)",
      density: "0.40 mm a 0.44 mm com Pull Comp de 0.40 mm"
    },
    relatedTerms: [
      "Agulha Microtex (Ponta Aguda)",
      "Método Flutuante (Floating)",
      "Compensação de Encolhimento (Pull Comp)",
      "Entretela Termocolante",
      "Efeito Zíper (Tecido Picotado)"
    ],
    tags: [
      "t-091",
      "tactel",
      "microfibra",
      "jaquetas",
      "bermudas",
      "microtex",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Embroidery on Performance Wear & Microfiber Fabrics. Freiburg, 2022.",
      "DUPONT TEXTILES. Tactel Nylon Processing and Stitching Handbook. Wilmington, 2021.",
      "ARTRELADOS. Segredos do Bordado em Tecidos Sintéticos, Tactel e Impermeáveis. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-092-termofixacao-de-entretela-e-adesivos-em-prensa",
    code: "T-092",
    term: "Termofixação de Entretela e Adesivos em Prensa Térmica (Thermobonding Heat-Press Setting & Dwell Time)",
    pronunciation: "ter-mo-fi-xa-são de en-tre-te-la e a-de-si-vos em pren-sa ter-mi-ca",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do grego 'therme' (calor) e do latim 'fixare' (prender, colar). Processo industrial de termofusão polimérica controlado pelo tripé clássico de variáveis físicas: Temperatura, Tempo e Pressão.",
    summary: "Calibração precisa do tripé Temperatura, Tempo de Exposição e Pressão na prensa térmica para colagem perfeita de entretelas e termocolantes sem queimar o tecido.",
    definition: "A Termofixação de Entretela e Adesivos em Prensa Térmica (Thermobonding Activation Parameters & Dwell Time Calibration) é o procedimento físico-térmico de adesão no qual polímeros termoplásticos (como poliamida, poliéster ou EVA fundíveis) são ativados sob controle rigoroso de três variáveis interdependentes: Temperatura (°C), Tempo de Exposição (*Dwell Time* em segundos) e Pressão Mecânica/Pneumática (bar ou psi). A calibração correta garante que a resina adesiva atinja a viscosidade ideal de fusão, penetrando nas fibras têxteis sem evaporar, queimar ou migrar para o lado direito do tecido.",
    technicalDetails: "Tripé de parâmetros padrão para entretelas termocolantes de bordado: Temperatura de 135 °C a 150 °C; Tempo de 10 a 14 segundos; Pressão de 3 a 5 bar (média-alta). Para termocolantes definitivos de patches: 155 °C a 165 °C por 15 a 20 segundos com resfriamento obrigatório sob pressão antes do manuseio.",
    beginnerExplanation: "É o jeito certo de usar a prensa térmica ou o ferro para grudar as entretelas colantes e os adesivos de patches na roupa. Não adianta só esquentar: você precisa colocar a temperatura certa, apertar com a força certa e esperar os segundos exatos no relógio para colar de verdade e não soltar na primeira lavagem!",
    howItWorks: [
      "1. Regula-se a temperatura digital da prensa térmica de acordo com a ficha técnica da entretela ou adesivo.",
      "2. Ajusta-se a pressão da chapa superior para obter fechamento firme e uniforme.",
      "3. Posiciona-se o tecido sobre a base de silicone protegida com folha de manta de teflon.",
      "4. Aplica-se a entretela termocolante com os pontos de resina voltados contra o verso do tecido.",
      "5. Baixa-se a prensa térmica, disparando a contagem regressiva automática do temporizador (Dwell Time).",
      "6. A prensa abre automaticamente ao final do tempo; a peça é colocada em superfície plana para esfriar e curar a resina por completo."
    ],
    applications: [
      "Fixação de entretelas de malha termocolante em camisas polo e roupas de bebê.",
      "Aplicação de termocolantes definitivos em patches e brasões corporativos.",
      "Estruturação de golas, punhos e vistas de camisas sociais antes do bordado.",
      "Selagem do verso de bordados com películas protetoras macias (Comfort Protect / Skin Touch)."
    ],
    characteristics: [
      "Garante fusão uniforme em 100% da área sem bolhas de ar.",
      "Evita o encolhimento térmico localizado do tecido por calor descontrolado.",
      "Substitui com vantagem o ferro de passar manual em produções seriadas."
    ],
    commonErrors: [
      "❌ Usar temperatura excessivamente alta que 'queima' a resina, fazendo o adesivo perder a cola.",
      "❌ Puxar ou dobrar a peça imediatamente após abrir a prensa com a cola ainda quente e líquida.",
      "❌ Usar ferros domésticos com furos de vapor (os furos não exercem pressão nem calor uniforme)."
    ],
    troubleshootingTips: [
      "A entretela soltou nas bordas após esfriar: a temperatura estava baixa ou o tempo foi insuficiente; aumente em 10 °C e adicione 3 segundos de prensagem.",
      "Apareceram pontinhos brilhantes de cola na frente do tecido: a pressão ou o calor foram excessivos e a cola vazou pelos poros da malha; reduza a pressão da prensa.",
      "A peça de malha ficou deformada e com brilho amarelado: reduza a temperatura para 135 °C e use sempre folha de teflon protetora."
    ],
    dicaArtrelados: "Nunca mexa ou tente puxar a pontinha de um patch ou entretela recém-saído da prensa térmica! A cola termoplástica precisa de pelo menos 2 a 3 minutos para esfriar e cristalizar a ligação definitiva! Paciência de poucos minutos garante fixação para a vida toda!",
    voceSabia: "As grandes fábricas de confecção utilizam prensas de fusão contínua com esteiras rolantes que controlam a temperatura em 3 zonas térmicas diferentes: pré-aquecimento, fusão sob rolos de alta pressão e câmara de resfriamento rápido por ar forçado!",
    practicalExercise: "Cole uma entretela termocolante em um retalho na prensa a 145 °C por 12 segundos. Deixe esfriar por 3 minutos e tente descolar a entretela. Observe como as fibras do tecido se fundiram à resina de forma homogênea.",
    quickSummary: "Termofixação em Prensa é o controle rigoroso de Temperatura, Tempo e Pressão para fundir perfeitamente entretelas e adesivos de bordado sem danificar o tecido.",
    recommendedSettings: {
      speedPPM: "N/A (Prensa Térmica)",
      needleType: "N/A",
      density: "Temp: 140-155 °C | Tempo: 12-15 s | Pressão: 4 bar"
    },
    relatedTerms: [
      "Prensa Térmica",
      "Entretela Termocolante",
      "Termocolante Definitivo",
      "Manta de Teflon",
      "Tempo de Exposição (Dwell Time)"
    ],
    tags: [
      "t-092",
      "termofixacao",
      "prensa termica",
      "dwell time",
      "adesivos",
      "temperatura",
      "artrelados"
    ],
    bibliographicReferences: [
      "FREUDENBERG NONWOVENS. Heat-Press Bonding and Thermoadhesive Technical Guidelines. Weinheim, 2022.",
      "MADEIRA GARN. Stabilizer Fusing & Backing Application Manual. Freiburg, 2021.",
      "ARTRELADOS. Guia de Termofixação e Adesivação Têxtil no Ateliê de Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-093-tiras-de-amortecimento-e-revestimento-do-bastidor",
    code: "T-093",
    term: "Tiras de Amortecimento e Revestimento do Bastidor (Hoop Grip Strips & Friction Rubber Coating)",
    pronunciation: "ti-ras de a-mor-te-si-men-to e re-ves-ti-men-to do bas-ti-dor",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do francês 'amortir' (suavizar o impacto) e do inglês 'hoop grip' (aderência do aro). Técnica de proteção desenvolvida por ateliês de alfaiataria fina para eliminar marcas de queima por pressão em tecidos nobres.",
    summary: "Fitas emborrachadas, tiras de EVA ou viés de algodão aplicadas no aro interno do bastidor para segurar tecidos lisos com firmeza sem deixar marcas permanentes (Hoop Burn).",
    definition: "As Tiras de Amortecimento e Revestimento do Bastidor (Hoop Friction Strips / Anti-Burn Soft Grip Lining / Revestimento de Proteção de Aros) consistem na aplicação de películas texturizadas de borracha sintética, silicone, tiras de EVA ultrafino ou faixas de viés de algodão adesivado nas faces de contato do aro interno e externo do bastidor de bordado. Esse revestimento atua aumentando exponencialmente o coeficiente de atrito mecânico sobre tecidos escorregadios (como cetim, seda, tactel e organza), permitindo reter o material com tensão de tambor perfeita utilizando metade da força de aperto no parafuso e eliminando a 'queimadura de bastidor' (Hoop Burn) gerada pelo atrito plástico rígido contra as fibras têxteis.",
    technicalDetails: "Fitas de silicone autoadesivas com espessura entre 0,5 mm e 1,0 mm e dureza Shore A de 40 a 50. Distribuem a pressão linear ao longo de toda a circunferência do aro, evitando pontos de esmagamento isolados nos cantos e dispensando o uso excessivo de parafusadeiras no bastidor.",
    beginnerExplanation: "São fitinhas emborrachadas ou tiras de tecido macio que a gente cola por dentro do aro do bastidor. Elas funcionam como pneus antiderrapantes: seguram o tecido bem firme para não escorregar, mas são fofinhas e não deixam aquelas marcas feias e brilhantes de plástico amassado na roupa do cliente!",
    howItWorks: [
      "1. Limpa-se o aro interno do bastidor com álcool isopropílico para retirar gordura e poeira.",
      "2. Aplica-se a fita adesiva emborrachada ou tira de viés de algodão em toda a volta externa do aro interno.",
      "3. Ao posicionar o tecido e a entretela, o revestimento emborrachado 'abraça' o tecido com atrito macio.",
      "4. Encaixa-se o aro externo com aperto suave do parafuso manual.",
      "5. O tecido fica esticado como um tambor sem que o operador precise apertar o parafuso com alicate.",
      "6. Ao retirar o tecido após o bordado, a peça não apresenta brilho, marcas esbranquiçadas ou vincos vincados."
    ],
    applications: [
      "Bordados em veludo cotelê, veludo alemão e tecidos aveludados sensíveis a esmagamento.",
      "Bordados em cetim de noiva, seda pura, musseline e tecidos transparentes escorregadios.",
      "Eliminação de deslizamento de jaquetas de nylon impermeável e couro sintético.",
      "Reforma e revitalização de bastidores plásticos antigos com folga de encaixe."
    ],
    characteristics: [
      "Aumenta o atrito sem exigir força excessiva no aperto dos parafusos.",
      "Protege as fibras têxteis nobres contra marcas permanentes de pressão.",
      "Solução de custo irrisório e altíssimo impacto na qualidade final da confecção."
    ],
    commonErrors: [
      "❌ Usar fitas adesivas de papel que ressecam e deixam cola grudenta nas roupas dos clientes.",
      "❌ Usar revestimentos muito grossos (> 2 mm) que impedem o encaixe normal dos aros do bastidor.",
      "❌ Apertar o parafuso do bastidor com alicate de pressão, quebrando as orelhas plásticas do aro."
    ],
    troubleshootingTips: [
      "O tecido escorrega no meio do bordado e o contorno desalinha: aplique tiras emborrachadas no aro interno para travar o deslizamento.",
      "Ficou uma marca quadrada brilhante permanente no tecido preto: o plástico do bastidor esmagou as fibras; passe a usar tiras de amortecimento e suavize as marcas com vaporizador suave de roupas.",
      "O bastidor não fecha com o tecido: a tira colada é muito grossa; substitua por fita de silicone fina de 0,5 mm."
    ],
    dicaArtrelados: "Encape o aro interno do seu bastidor com fita crepe automotiva emborrachada ou viés de algodão 100%! Além de segurar toalhas e camisas polo com o dobro de firmeza sem você cansar os dedos apertando parafuso, nunca mais suas clientes vão reclamar de marca de bastidor na roupa!",
    voceSabia: "Na alta costura tradicional francesa, as bordadeiras manuais cobriam todos os aros de madeira com fitas de sarja de algodão cru lavadas à mão para garantir que os fios de ouro dos vestidos imperiais nunca tocassem a madeira crua!",
    practicalExercise: "Aplique fita adesiva emborrachada ou viés em um dos seus bastidores. Enquadre um tecido liso de cetim ou tactel. Sinta como o tecido trava imediatamente com apenas uma volta leve no parafuso, sem escorregar nada!",
    quickSummary: "Tiras de Amortecimento são revestimentos emborrachados aplicados nos aros do bastidor que impedem o tecido de escorregar e eliminam marcas de pressão nas roupas.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "Compatível com tecido",
      density: "Espessura da fita de amortecimento: 0.5 a 1.0 mm"
    },
    relatedTerms: [
      "Marca de Bastidor (Hoop Burn)",
      "Aro do Bastidor",
      "Bastidor Magnético",
      "Enquadramento no Bastidor",
      "Método Flutuante"
    ],
    tags: [
      "t-093",
      "amortecimento",
      "revestimento",
      "bastidor",
      "hoop burn",
      "marcas de pressao",
      "antiderrapante",
      "artrelados"
    ],
    bibliographicReferences: [
      "HOOPMASTER SYSTEMS. Fabric Protection and Friction Engineering in Commercial Hooping. Dallas, 2022.",
      "EMBROIDERY BUSINESS MAGAZINE. Eliminating Hoop Burn on Delicate Garments. Chicago, 2023.",
      "ARTRELADOS. Técnicas de Enquadramento Perfeito e Proteção de Tecidos Nobres. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-094-torcao-do-fio-no-cone-e-sentido-z-s",
    code: "T-094",
    term: "Torção do Fio no Cone e Sentido Z/S (Thread Twist Direction & Kinking Prevention)",
    pronunciation: "tor-são do fi-o no co-ne e sen-ti-do zê és-si",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'torquere' (torcer, enrolar). Conceito fundamental da engenharia de fiação têxtil derivado da orientação angular das hélices dos cabos (representadas pelas diagonais das letras Z e S).",
    summary: "Estrutura geométrica de torção dos filamentos da linha de bordado (sentido Z universal) que assegura a formação estável do laço na descida da agulha sem desenrolar nem formar nós.",
    definition: "A Torção do Fio no Cone e Sentido Z/S (Thread Twist Geometry / Z-Twist vs S-Twist Dynamics) é a direção helicoidal na qual os microfilamentos contínuos de poliéster ou viscose são reunidos e torcidos durante o processo de fiação industrial (expresso em voltas por metro - TPM). Para máquinas de bordar e costura industrial com lançadeira de rotação horária, o padrão mundial obrigatório é a 'Torção Z' (Z-Twist / Left Twist): a rotação da lançadeira e a descida da agulha tendem a apertar a torção do fio. Se uma linha com 'Torção S' for utilizada, o atrito mecânico na canaleta da agulha desenrola os filamentos, abrindo a linha como uma vassoura, impedindo a captura do laço e causando quebra instantânea.",
    technicalDetails: "Linhas de bordado No 40 padrão possuem torção Z balanceada de 650 a 850 TPM (Twists Per Meter) termofixadas com vapor saturado para anular o torque residual (Kinking Tendency / Efeito Rabo de Porco). O desenrolamento aéreo no suporte de cones deve ser estritamente vertical pelo topo para não adicionar falsas voltas de torção por metro.",
    beginnerExplanation: "É a direção em que os fiozinhos da linha são enroladinhos na fábrica de cones. Todas as linhas próprias para máquina de bordar têm torção em 'Z'. Se você tentar usar uma linha comum de costura manual com torção contrária, a máquina desenrola a linha todinha, ela se abre em fiapos e quebra a cada 10 pontinhos!",
    howItWorks: [
      "1. A linha com torção Z sai do cone no sentido vertical pelo suporte aéreo.",
      "2. Passa pelos tensores e desce pela canaleta frontal da agulha.",
      "3. A agulha desce e a lançadeira rotativa gira no sentido horário para pescar o fio.",
      "4. O movimento da lançadeira 'fecha' ainda mais a torção Z do filamento, mantendo o fio compacto e firme.",
      "5. Um laço perfeito e arredondado é projetado na cava da agulha.",
      "6. A ponta da lançadeira entra com precisão milimétrica no centro do laço sem espetar ou desfiar filamentos soltos."
    ],
    applications: [
      "Seleção criteriosa de marcas profissionais de linhas de poliéster e viscose.",
      "Diagnóstico de linhas que quebram com frequência abrindo pontas desfiadas como pincel.",
      "Ajuste da saída do cone para evitar que o fio saia rodando e forme laçadas helicoidais.",
      "Uso de redinhas de contenção (Thread Nets) em cones com filamentos escorregadios."
    ],
    characteristics: [
      "Padrão universal Z-Twist para máquinas de bordado computadorizado.",
      "Termofixação industrial que anula a memória mecânica de ondulação do fio.",
      "Mantém o brilho trilobal e a resistência à tração em até 1.200 PPM."
    ],
    commonErrors: [
      "❌ Usar linhas baratas de costura manual ou crochê na máquina de bordar (possuem torção errada e abrem na agulha).",
      "❌ Deixar o cone deitado ou inclinado no suporte de fios (adiciona torção extra a cada volta de linha puxada).",
      "❌ Usar cones velhos ressecados que perderam a termofixação e formam pequenos nós espirais (kinks) antes de entrar no tensor."
    ],
    troubleshootingTips: [
      "A linha quebra e a pontinha arrebentada parece um pincel aberto e desfiado: a linha é de má qualidade ou está desenrolando por passagem incorreta nos guias.",
      "A linha fica dando 'laçinhos e nós em espiral' antes de entrar nos discos tensores: o cone está desenrolando de forma descontrolada; coloque uma redinha de nylon (Thread Net) cobrindo o cone.",
      "Linha quebrando apenas em alta velocidade: verifique se o guia aéreo do suporte de cones está posicionado exatamente alinhado no centro vertical acima do cone."
    ],
    dicaArtrelados: "Se você tem um cone de linha brilhante que fica 'dançando' e fazendo nós antes de chegar no tensor da máquina: vista uma redinha de nylon elástica no cone! A redinha segura o fio no lugar, tira os nós e a linha corre suave e macia até a agulha!",
    voceSabia: "Para descobrir se um fio tem torção Z ou S, segure um pedaço de 10 cm na vertical: olhe de perto a inclinação das ranhuras do fio. Se a inclinação for da direita para a esquerda (como a barra diagonal da letra Z), ele é Z-Twist; se for o oposto, é S-Twist!",
    practicalExercise: "Pegue um pedaço de 20 cm da sua melhor linha de bordar. Segure as duas pontas e una-as: observe se a linha forma um arco suave ou se ela se enrola violentamente sobre si mesma formando tranças. Linhas de alta qualidade permanecem estáveis sem trançar.",
    quickSummary: "Torção do Fio em Z é a direção helicoidal padrão de fabricação da linha que impede o filamento de abrir e desfiar durante o giro rápido da lançadeira.",
    recommendedSettings: {
      speedPPM: "750 a 1.000 PPM",
      needleType: "75/11",
      density: "Padrão Z-Twist (650 a 850 voltas/metro)"
    },
    relatedTerms: [
      "Torção Z (Z-Twist)",
      "Torção S (S-Twist)",
      "Redinha de Cone (Thread Net)",
      "Desbobinamento Aéreo",
      "Lançadeira Rotativa"
    ],
    tags: [
      "t-094",
      "torcao do fio",
      "sentido z",
      "sentido s",
      "fiação",
      "cone de linha",
      "linhas",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA GARN. Thread Engineering and Twist Physics in High-Speed Embroidery. Freiburg, 2022.",
      "AMERICAN & EFIRD (A&E). Industrial Sewing and Embroidery Thread Twist Dynamics. Mount Holly, 2021.",
      "ARTRELADOS. Guia de Ciência dos Materiais Têxteis: Linhas, Torções e Fibras para Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-095-trapunto-no-bordado-computadorizado",
    code: "T-095",
    term: "Trapunto no Bordado Computadorizado e Acolchoamento em Alto-Relevo (Machine Trapunto & Quilted Relief Technique)",
    pronunciation: "tra-pun-to no bor-da-do com-pu-ta-do-ri-za-do e a-col-cho-a-men-to em al-to re-le-vo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Técnicas de Aplique e Efeitos Especiais",
    origin: "Do italiano 'trapuntare' (acolchoar, bordar em relevo acolchoado). Técnica renascentista siciliana do século XIV adaptada para matrizes digitais automatizadas.",
    summary: "Técnica requintada de bordado acolchoado onde camadas de manta acrílica ou feltro são costuradas, recortadas e sobrepostas por pontos decorativos, criando relevos fofos tridimensionais.",
    definition: "O Trapunto no Bordado Computadorizado (Automated Machine Trapunto & Dimensional Quilted Relief) é uma técnica artística híbrida de quilting e bordado digital estruturada em quatro fases consecutivas de execução: 1ª Fase de Contorno Guia (*Placement Stitch* sobre manta acrílica ou feltro espesso), 2ª Fase de Recorte Perimétrico Manual da manta excedente com tesoura de ponta curva, 3ª Fase de Cobertura com o tecido principal decorativo e 4ª Fase de Preenchimento com pontos de acolchoamento micro-tatami (*Stippling / Meandering / Micro-Quilting*) ao redor do motivo central. Essa combinação afunda o fundo e faz a figura principal projetar-se em alto-relevo acolchoado exuberante e macio.",
    technicalDetails: "A manta de trapunto recomendada é a manta acrílica resinada R1/R2 (100g a 150g/m²) ou feltro de lã de 2 mm. A densidade de stippling do fundo de contraste é programada entre 0,60 mm e 0,80 mm com comprimentos de ponto curto de 1,8 mm a 2,2 mm para máxima definição do relevo.",
    beginnerExplanation: "É uma técnica clássica e chique que deixa o bordado parecendo uma almofadinha fofa em alto-relevo! A máquina prende uma manta fofinha, você corta a sobra com a tesourinha e coloca o tecido bonito por cima. A máquina borda todo o fundinho bem apertado e o desenho do meio fica 'gordinho' e macio em 3D!",
    howItWorks: [
      "1. Prende-se a entretela e a manta acrílica fofa no bastidor.",
      "2. A máquina borda o contorno do desenho (Placement Line).",
      "3. A máquina para; o operador recorta a sobra da manta bem rente ao contorno com tesoura curva.",
      "4. Cobre-se o bastidor com o tecido nobre principal (linho, percal ou seda) e alisa-se a peça.",
      "5. A máquina borda os pontos de contorno fixando o tecido sobre o relevo acolchoado.",
      "6. A máquina executa o ponto de fundo stippling (minhocão ou grade) que afunda toda a área externa.",
      "7. O motivo central salta aos olhos com volume tridimensional acolchoado permanente."
    ],
    applications: [
      "Colchas de luxo, edredons de bebê e almofadas de alta decoração.",
      "Mantilhas de batizado, vestidos de noiva e enxovais de linho puro.",
      "Painéis de arte têxtil e tapeçarias decorativas para galerias.",
      "Bolsas de couro acolchoado e jaquetas de alta costura."
    ],
    characteristics: [
      "Toque extremamente macio e aconchegante (sem a rigidez do E.V.A.).",
      "Resistência infinita a lavagens e passadoria com ferro quente.",
      "Visual nobre e clássico que agrega altíssimo valor comercial às peças."
    ],
    commonErrors: [
      "❌ Cortar a manta longe do contorno, deixando rebarbas que deformam o relevo final.",
      "❌ Picar o tecido da frente com a ponta da tesoura ao fazer o recorte da manta.",
      "❌ Usar mantas muito grossas e densas que travam a barra do calcador da máquina."
    ],
    troubleshootingTips: [
      "O relevo do trapunto ficou murcho e sem destaque: utilize manta acrílica com maior resiliência (R2 de 150g) e feche mais o stippling do fundo para afundar mais a área externa.",
      "O tecido enrugou em volta da figura em relevo: utilize entretela recortável firme por baixo e aumente a compensação de repuxo do contorno.",
      "A linha arrebenta ao bordar o fundo de stippling: reduza a velocidade para 650 PPM e utilize agulha ponta fina 70/10."
    ],
    dicaArtrelados: "Para fazer um trapunto de luxo em fraldas e almofadas de bebê: use manta acrílica fofinha ou feltro branco no recheio! Ao redor do nome do bebê, faça o fundo com ponto 'stippling' (aquele ponto que parece um labirinto ou cobrinha). As mães se apaixonam pelo toque macio e fofinho!",
    voceSabia: "O bordado Trapunto era conhecido na corte real da Inglaterra do século XIV como 'Quilting de Marselha', e era utilizado para acolchoar os gibões de seda e linho dos cavaleiros para amortecer o peso das pesadas armaduras de ferro!",
    practicalExercise: "Crie uma matriz com uma letra monograma grande no centro e um fundo stippling ao redor. Execute o passo a passo com uma camada de manta acrílica e sinta o relevo acolchoado espetacular na ponta dos seus dedos.",
    quickSummary: "Trapunto Computadorizado é a técnica artística que utiliza recheio de manta acrílica recortada para criar motivos acolchoados em alto-relevo tridimensional.",
    recommendedSettings: {
      speedPPM: "600 a 750 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina",
      density: "Stippling de fundo com ponto de 2.0 mm e espaçamento 0.70 mm"
    },
    relatedTerms: [
      "Stippling (Ponto Minhocão / Quilting)",
      "Manta Acrílica R1/R2",
      "Placement Stitch",
      "Alto-Relevo Têxtil",
      "Tesoura Curva de Peliça"
    ],
    tags: [
      "t-095",
      "trapunto",
      "acolchoado",
      "stippling",
      "alto-relevo",
      "quilting",
      "artrelados"
    ],
    bibliographicReferences: [
      "BERNINA ARTISTIC EMBROIDERY. Mastering Machine Trapunto & Creative Quilting. Steckborn, 2022.",
      "WILCOM EMBROIDERY STUDIO. Trapunto Stitching and Stipple Fill Operations. Sydney, 2023.",
      "ARTRELADOS. Trapunto Moderno: Técnicas de Acolchoamento Tridimensional no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-096-tracado-de-linhas-guia-e-marcacao-a-laser",
    code: "T-096",
    term: "Traçado de Linhas Guia e Marcação a Laser no Bastidor (Crosshair Laser Pointer & Alignment Grid)",
    pronunciation: "tra-sa-do de li-nhas gui-a e mar-ca-são a la-zer no bas-ti-dor",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do latim 'tractus' (desenho, linha) e da sigla 'LASER' (Light Amplification by Stimulated Emission of Radiation). Sistema de metrologia óptica industrial integrado ao cabeçote de bordado.",
    summary: "Uso de ponteiros ópticos a laser em cruz (Crosshair) e gabaritos milimetrados para posicionamento exato de bolsos, peitilhos e junções de grandes matrizes divididas.",
    definition: "O Traçado de Linhas Guia e Marcação a Laser no Bastidor (Laser Crosshair Alignment & Optical Origin Mapping) é a metodologia e o dispositivo eletro-óptico composto por diodos emissores de luz laser vermelha ou verde focalizada em formato de cruz ortogonal (+). Instalado no cabeçote de bordado e alinhado ao eixo exato da agulha No 1, o laser projeta sobre o tecido o ponto de origem cartesiano (0,0) e os eixos horizontal X e vertical Y, permitindo ao operador alinhar a matriz com precisão angular de fração de grau sem riscar ou sujar o vestuário pronto com giz ou canetas.",
    technicalDetails: "Laser diodo de classe 2 (< 1 mW) com comprimento de onda de 650 nm (vermelho) ou 532 nm (verde de alto contraste). Permite conferência de perímetro (Trace/Boundary Box) em tempo real, rotação angular digital e casamento de pontos de registro em matrizes divididas (Multi-Hooping Alignment).",
    beginnerExplanation: "É aquela cruzinha de luz laser vermelha ou verde que a máquina projeta em cima do tecido. Ela mostra exatamente onde o centro do bordado vai cair e se o desenho está retinho, sem você precisar rabiscar a roupa do cliente com lápis ou giz!",
    howItWorks: [
      "1. A bordadeira marca o centro do bolso ou peito da camisa com uma cruzinha de fita crepe.",
      "2. Enquadra a peça no bastidor e encaixa o suporte na máquina de bordar.",
      "3. Ativa o botão do laser de posicionamento no painel de controle.",
      "4. Utiliza as setas direcionais para movimentar o pantógrafo até a cruz do laser coincidir com a marcação da fita.",
      "5. Executa a função 'Trace' (percurso de borda) observando a luz laser contornar a área do bordado.",
      "6. Confirma que a agulha não vai bater nas bordas do bastidor nem costurar sobre botões.",
      "7. Retira a fita e inicia o bordado com alinhamento 100% perfeito."
    ],
    applications: [
      "Bordados corporativos no peito esquerdo de camisas sociais e jalecos.",
      "Alinhamento milimétrico em bolsos fechados, golas e punhos de camisaria.",
      "Casamento perfeito de partes divididas em matrizes gigantes (Multi-Hooping).",
      "Conferência visual de segurança contra colisão de bastidores."
    ],
    characteristics: [
      "Elimina erros humanos de paralelismo e inclinação de logotipos.",
      "Processo limpo que não deixa marcas químicas no tecido.",
      "Agiliza o tempo de preparação de cada peça em até 50%."
    ],
    commonErrors: [
      "❌ Iniciar o bordado sem fazer o teste de contorno (Trace) com o laser, colidindo o calcador na borda plástica do bastidor.",
      "❌ Descalibrar o foco do laser e tentar alinhar com o feixe desfocado e largo.",
      "❌ Olhar diretamente para a lente do laser (risco à saúde ocular)."
    ],
    troubleshootingTips: [
      "O bordado saiu 3 mm descentralizado em relação ao bolso: calibre o ponto zero do laser nas configurações do painel da máquina.",
      "O logotipo ficou levemente torto: use a linha horizontal do laser em cruz para alinhar perfeitamente com a costura horizontal da camisa.",
      "A luz do laser está muito fraca: limpe a lente de vidro do diodo no cabeçote com um cotonete seco."
    ],
    dicaArtrelados: "Antes de apertar o botão verde de iniciar: aperte SEMPRE a tecla 'Trace' no painel com o laser ligado! Em 3 segundos você vê a luz desenhar o quadrado exato onde a agulha vai passar, garantindo que o bordado não vai bater no bastidor nem ficar torto!",
    voceSabia: "Os ponteiros laser com feixe de cor verde (532 nm) foram desenvolvidos porque o olho humano é cerca de 4 a 5 vezes mais sensível à cor verde do que à luz vermelha, permitindo enxergar a cruz de alinhamento com extrema nitidez mesmo sob a luz forte de ateliês!",
    practicalExercise: "Cole um pedacinho de fita crepe com uma cruz desenhada em um retalho no bastidor. Use as setas do painel e alinhe o laser exatamente no centro da cruz. Faça o Trace e comprove a precisão do ponto de início.",
    quickSummary: "Marcação a Laser é o sistema óptico que projeta uma cruz luminosa sobre o tecido para centralizar, nivelar e conferir a área do bordado antes de costurar.",
    recommendedSettings: {
      speedPPM: "N/A (Alinhamento Prévio)",
      needleType: "N/A",
      density: "Precisão de mira: ±0.2 mm"
    },
    relatedTerms: [
      "Laser Crosshair",
      "Trace / Bounding Box",
      "Ponto de Origem (0,0)",
      "Multi-Hooping (Matrizes Divididas)",
      "Centralização de Bordado"
    ],
    tags: [
      "t-096",
      "laser",
      "linhas guia",
      "crosshair",
      "posicionamento",
      "alinhamento",
      "trace",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY SYSTEMS. Laser Positioning and Optical Alignment Standards. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Crosshair Laser Setup and Origin Calibration Manual. Ichinomiya, 2021.",
      "ARTRELADOS. Guia de Produtividade: Centralização a Laser e Alinhamento Rápido no Ateliê. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-097-temperatura-operacional-da-agulha",
    code: "T-097",
    term: "Temperatura Operacional da Agulha e Fricção Térmica (Needle Heat Dissipation & Thread Melting Protection)",
    pronunciation: "tem-pe-ra-tu-ra o-pe-ra-si-o-nal da a-gu-lha e frik-são ter-mi-ca",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Agulhas & Mecânica de Penetração",
    origin: "Do latim 'temperatura' (medida de calor) e 'frictio' (atrito). Estudo termodinâmico de tribologia têxtil focado no aquecimento por atrito em altas rotações.",
    summary: "Controle do aquecimento extremo da lâmina da agulha (que pode passar de 180 °C em alta rotação), prevenindo a quebra e o derretimento de linhas sintéticas.",
    definition: "A Temperatura Operacional da Agulha e Fricção Térmica (High-Speed Needle Heat Dissipation & Thermal Thread Degradation) é o fenômeno termodinâmico gerado pelo atrito cinético de contato entre a lâmina de aço da agulha e as fibras densas do tecido e da entretela durante ciclos contínuos de penetração em velocidades entre 800 e 1.200 PPM. Sob condições severas (tecidos grossos, entretelas resinadas e colas adesivas), a ponta da agulha atinge temperaturas entre 160 °C e 220 °C. Como o ponto de fusão do filamento de poliéster é de aproximadamente 250 °C a 260 °C (e amolece aos 180 °C), o calor excessivo funde e quebra a linha instantaneamente no olho da agulha.",
    technicalDetails: "Soluções técnicas para dissipação de calor: uso de agulhas com revestimento duro de Nitreto de Titânio (Titanium / HAX130EBBR / SAN 1 Gebedur - dureza Vickers de 2.500 HV) que reduzem o coeficiente de atrito em 40%; agulhas com lâmina reforçada e canaleta profunda; redução programada de PPM; e aplicação de óleo de silicone lubrificante especial para bordado no suporte de linha.",
    beginnerExplanation: "Quando a máquina borda super rápido, a agulha fura o tecido tantas vezes por segundo que ela esquenta como uma brasa! Se esquentar demais, ela amolece e derrete a linha colorida bem no buraquinho da agulha, fazendo a linha arrebentar sem parar. Por isso usamos agulhas douradas de titânio que esquentam bem menos!",
    howItWorks: [
      "1. A agulha penetra o tecido a até 20 vezes por segundo (1.200 PPM).",
      "2. O atrito das fibras contra o metal gera calor concentrado na lâmina e no olho da agulha.",
      "3. A temperatura atinge o limiar térmico do poliéster.",
      "4. Se a agulha for comum de cromo, a linha sofre fadiga térmica, amolece e quebra.",
      "5. Com agulhas revestidas de Titânio dourado, o calor é dissipado rapidamente e o atrito cai pela metade.",
      "6. A linha desliza fria pelo olho da agulha, mantendo 100% de sua resistência mecânica e brilho."
    ],
    applications: [
      "Bordados contínuos de alta velocidade em tecidos sintéticos densos (nylon balístico, sarja pesada e couro).",
      "Bordados sobre camadas múltiplas com cola spray e entretelas resinadas espessas.",
      "Grandes lotes industriais ininterruptos em máquinas multicabeças.",
      "Bordados com linhas metálicas de lurex sensíveis a aquecimento por atrito."
    ],
    characteristics: [
      "Dissipação térmica acelerada através de revestimentos cerâmicos e de titânio.",
      "Preservação do brilho e da elasticidade original do fio.",
      "Aumento da vida útil da agulha em até 5 vezes comparado ao acabamento de cromo comum."
    ],
    commonErrors: [
      "❌ Bordejar tecidos sintéticos grossos a 1.000 PPM com agulhas comuns de cromo gastas.",
      "❌ Usar excesso de cola spray adesiva sem limpar a agulha (a cola queima na agulha formando uma crosta preta abrasiva).",
      "❌ Usar agulhas muito finas (65/9) para bordar tecidos pesados como lona e jeans."
    ],
    troubleshootingTips: [
      "A ponta da linha quebra e fica com uma bolinha derretida na extremidade: a agulha está superaquecendo; troque para uma agulha dourada de Titânio (Gebedur) e diminua a velocidade em 150 PPM.",
      "A agulha está preta e grudenta: limpe a lâmina com álcool isopropílico para retirar a cola spray queimada.",
      "Linhas metálicas arrebentando após 1 minuto de bordado: pingue uma gota de óleo de silicone no feltro lubrificante do cabeçote para resfriar a linha."
    ],
    dicaArtrelados: "Para trabalhos pesados ou produções grandes de uniformes: use SEMPRE as agulhas com acabamento dourado de Titânio (Titanium / Gebedur)! O revestimento de titânio não deixa a agulha esquentar, não gruda cola de spray e dura 5 vezes mais que uma agulha comum! É economia pura!",
    voceSabia: "As agulhas industriais de alta tecnologia desenvolvidas pela alemã Groz-Beckert utilizam tecnologia espacial de corte e ranhura aerodinâmica na canaleta que cria micro-vórtices de ar durante a subida e descida para resfriar a lâmina da agulha em tempo real!",
    practicalExercise: "Após a máquina bordar um preenchimento tatami grande a 850 PPM, pare a máquina, espere 5 segundos e toque cuidadosamente na haste da agulha para sentir o calor gerado pelo atrito têxtil.",
    quickSummary: "Temperatura Operacional da Agulha é o controle do calor gerado por atrito em alta velocidade, resolvido com agulhas de titânio e lubrificação para não derreter as linhas.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM em tecidos densos",
      needleType: "75/11 ou 80/12 Revestida de Titânio (Gebedur / Titanium)",
      density: "Compatível com a estrutura"
    },
    relatedTerms: [
      "Agulha de Titânio (Gebedur)",
      "Atrito Cinético Tribológico",
      "Óleo de Silicone para Linha",
      "Derretimento de Linha de Poliéster",
      "Nitreto de Titânio (TiN)"
    ],
    tags: [
      "t-097",
      "temperatura",
      "aquecimento",
      "friccao",
      "titânio",
      "agulhas",
      "resfriamento",
      "artrelados"
    ],
    bibliographicReferences: [
      "GROZ-BECKERT KG. Needle Heat and Tribological Aspects in High-Speed Sewing & Embroidery. Albstadt, 2022.",
      "SCHMETZ NEEDLES. Titanium Nitride Coating & Friction Reduction Manual. Herzogenrath, 2021.",
      "ARTRELADOS. Guia Avançado de Agulhas e Física da Fricção no Bordado Industrial. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-098-tolerancia-de-encolhimento-textil-pos-lavagem",
    code: "T-098",
    term: "Tolerância de Encolhimento Têxtil Pós-Lavagem (Fabric Shrinkage Allowance in Embroidery Sizing)",
    pronunciation: "to-le-ran-si-a de en-co-lhi-men-to tes-til pos la-va-gem",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do latim 'tolerare' (suportar, compensar) e do germânico 'skrink' (encolher, contrair). Conceito de engenharia de vestuário que estuda a diferença de retração dimensional entre fibras naturais e linhas sintéticas.",
    summary: "Cálculo e compensação da retração natural de tecidos de algodão (3% a 8% pós-lavagem) versus linhas sintéticas de poliéster (0% de encolhimento), evitando que o bordado forme 'panelas' ou enrugue.",
    definition: "A Tolerância de Encolhimento Têxtil Pós-Lavagem (Fabric Shrinkage Allowance & Differential Dimensional Stability) é o planejamento técnico de parametrização e estabilização que antecipa o comportamento dimensional do vestuário após os primeiros ciclos de lavagem doméstica e secagem do cliente final. Enquanto os tecidos de fibras naturais (algodão puro, linho, viscose) sofrem retração dimensional de 3% a 8% pelo relaxamento das fibras na água morna, os filamentos de poliéster do bordado possuem retração nula (0%). Se a matriz for excessivamente rígida e a entretela não for recortável permanente, o tecido encolhe ao redor do bordado estático, criando um abaulamento côncavo deformado conhecido como 'efeito cuia' ou 'panelinha'.",
    technicalDetails: "Para tecidos suscetíveis a encolhimento: pré-lavagem ou pré-vaporização do tecido antes do corte; uso mandatário de entretela recortável (Cut-Away) multidirecional que atua como barreira dimensional permanente; redução da densidade total em 10% e aplicação de sob-pontos abertos e flexíveis.",
    beginnerExplanation: "Quando a sua cliente lava uma camiseta 100% algodão ou um pano de prato pela primeira vez em casa, o tecido encolhe um pouquinho. Mas a linha de poliéster do bordado NÃO encolhe nada! Se o bordado for muito duro ou usar entretela que rasga e some, a camiseta encolhe e o bordado fica estufado para fora como uma tigelinha torta!",
    howItWorks: [
      "1. A bordadeira identifica a composição do tecido (ex: malha 100% algodão ou linho cru).",
      "2. Seleciona a entretela de malha recortável (Cut-Away) que não se desfaz na água.",
      "3. No software, programa uma matriz com densidade arejada (0.42 mm) e pontos com boa flexibilidade.",
      "4. O bordado é executado com tensões suaves.",
      "5. Quando a cliente lava a peça em casa, a entretela recortável no verso impede o tecido de encolher de forma agressiva sob o desenho.",
      "6. A peça seca e o bordado permanece plano, liso e esticado como no primeiro dia."
    ],
    applications: [
      "Camisetas 100% algodão penteado e bodys de bebê em malha suedine.",
      "Toalhas de banho e panos de prato de algodão cru e sacaria.",
      "Roupas de cama e toalhas de mesa em linho e cambraia natural.",
      "Uniformes industriais de brim pesado 100% algodão sujeitos a lavanderia pesada."
    ],
    characteristics: [
      "Preserva a estética e o caimento da peça após sucessivas lavagens.",
      "Neutraliza a diferença física de retração entre o tecido natural e a linha sintética.",
      "Exige conscientização na escolha da entretela de ancoragem definitiva."
    ],
    commonErrors: [
      "❌ Usar entretela hidrossolúvel ou rasgável fina em camisetas de algodão puro (na primeira lavagem o bordado enruga irremediavelmente).",
      "❌ Criar matrizes ultra densas como 'tábuas de madeira' sobre malhas finas de algodão.",
      "❌ Bordejar toalhas de mesa de linho cru sem pré-encolher o tecido no vapor."
    ],
    troubleshootingTips: [
      "A cliente reclamou que a camiseta ficou com o bordado 'estufado' após lavar: o tecido encolheu ao redor de um bordado denso com entretela rasgável; substitua sempre por entretela recortável Cut-Away macia.",
      "O bordado ficou repuxado após passar com ferro quente: a entretela sofreu encolhimento térmico; utilize entretelas de alta estabilidade dimensional com certificação Oeko-Tex.",
      "Letras perderam a forma após a primeira lavagem: aumente o Pull Compensation na programação da matriz para compensar a retração dos fios."
    ],
    dicaArtrelados: "Em peças de algodão puro, toalhas de lavabo e bodys de bebê: use SEMPRE entretela recortável macia (Cut-Away) no avesso! A entretela recortável fica para sempre na peça, agindo como um 'escudo invisível' que não deixa o algodão encolher em volta do bordado nas lavagens!",
    voceSabia: "O linho puro é uma das fibras naturais com maior índice de retração do mundo, podendo encolher até 10% no primeiro contato com água quente se não for pré-lavado e pré-encolhido na fábrica!",
    practicalExercise: "Borde o mesmo logotipo em dois pedaços de malha 100% algodão: um com entretela rasgável e outro com entretela recortável Cut-Away. Lave os dois pedaços com água morna e sabão, deixe secar ao sol e veja com seus próprios olhos a diferença no caimento.",
    quickSummary: "Tolerância de Encolhimento é a estratégia de usar entretelas recortáveis e matrizes flexíveis para compensar a retração de tecidos de algodão nas lavagens.",
    recommendedSettings: {
      speedPPM: "700 a 800 PPM",
      needleType: "75/11 Ponta Bola",
      density: "0.40 mm a 0.44 mm (Matriz flexível)"
    },
    relatedTerms: [
      "Entretela Recortável (Cut-Away)",
      "Retração Têxtil (Shrinkage)",
      "Fibras Naturais vs Sintéticas",
      "Pré-Encolhimento no Vapor",
      "Efeito Cuia / Panelinha"
    ],
    tags: [
      "t-098",
      "encolhimento",
      "pos-lavagem",
      "algodao",
      "cut-away",
      "retracao",
      "estabilidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "AATCC (American Association of Textile Chemists and Colorists). Dimensional Changes of Fabrics after Home Laundering. Research Triangle Park, 2022.",
      "MADEIRA THREADS. Fabric Stabilization and Wash Performance Matrix. Freiburg, 2021.",
      "ARTRELADOS. Manual de Durabilidade e Comportamento Pós-Lavagem de Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-099-tensionador-de-fundo-e-freio-de-carretel",
    code: "T-099",
    term: "Tensionador de Fundo e Freio de Carretel (Spool Cap, Cone Base & Thread Net Brake)",
    pronunciation: "ten-si-o-na-dor de fun-do e frei-o de car-re-tel",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'tensio' (tensão, retenção) e do holandês antigo 'karreel' (carretel cilíndrico). Acessórios de controle inercial para desenrolamento uniforme de fios têxteis.",
    summary: "Acessórios como discos retentores (spool caps), bases de borracha e redinhas de nylon que estabilizam o cone e evitam que a linha caia sob a base travando a máquina.",
    definition: "O Tensionador de Fundo e Freio de Carretel (Spool Cap Restraint, Cone Base Cushion & Thread Net System) compreende o conjunto de dispositivos acessórios de suporte primário instalados na árvore porta-fios e nos pinos de carretéis de máquinas de bordar domésticas e industriais. Sua função física é estabilizar a base do cone contra vibrações de alta rotação, eliminar a rotação inercial descontrolada do carretel ao frear a máquina e impedir que os filamentos inferiores escorreguem e se enrolem sob a base plástica do cone (fenômeno que causa travamento mecânico repentino e quebra violenta de linha e agulha).",
    technicalDetails: "Composto por: discos de retenção (Spool Caps com diâmetro 2 mm maior que o carretel horizontal), bases de borracha microporosa antivibração para cones industriais e redinhas de malha elástica de poliamida (Thread Nets) que exercem leve compressão radial constante de 2 a 5 gf sobre filamentos escorregadios (viscose e lurex metálico).",
    beginnerExplanation: "São aquelas tampinhas de plástico (prendedores de carretel), as borrachinhas de apoio e as redinhas de nylon que a gente coloca no cone de linha. Elas servem para não deixar o cone ficar dançando e bambo na máquina e impedem que a linha caia por baixo do carretel e engasgue tudo!",
    howItWorks: [
      "1. Em máquinas com pino horizontal: escolhe-se o disco plástico (spool cap) do tamanho exato da borda do carretel.",
      "2. Encaixa-se o carretel e pressiona-se o disco contra a lateral sem prender o fio.",
      "3. Em cones industriais cônicos: assenta-se o cone sobre a base de borracha texturizada no suporte metálico.",
      "4. Se a linha for muito lisa (metálica ou viscose), veste-se a redinha de nylon elástica no cone.",
      "5. A linha sobe reta e suave pelo guia aéreo sem dar trancos nem cair sob o pé do cone.",
      "6. A alimentação de linha permanece constante e a tensão do ponto fica perfeitamente estável."
    ],
    applications: [
      "Bordados em alta rotação com cones industriais de 4.000 e 5.000 metros.",
      "Estabilização de pequenos carretéis domésticos em máquinas de uma agulha.",
      "Uso obrigatório em cones de linhas metálicas, fios elásticos e fios de poliéster siliconado.",
      "Eliminação de quebras crônicas de linha no início e fim de palavras."
    ],
    characteristics: [
      "Acessórios simples que resolvem mais de 30% das causas misteriosas de quebra de linha.",
      "Mantém o fluxo de alimentação sem variações de tração por balanço.",
      "Compatível com todos os modelos e marcas de máquinas de bordar."
    ],
    commonErrors: [
      "❌ Usar um disco prendedor menor que o carretel horizontal, deixando a linha prender no corte plástico do carretel.",
      "❌ Não usar a redinha em cones de linha metálica, deixando o fio despencar em espirais na mesa da máquina.",
      "❌ Apertar o disco retentor com tanta força que o carretel fica travado e não gira."
    ],
    troubleshootingTips: [
      "A linha deu um estalo seco e quebrou, e você viu a ponta enrolada embaixo do pé do cone: a linha escorregou da base; instale uma base de borracha e vista uma redinha de nylon no cone.",
      "A máquina de uma agulha dá trancos e quebra a linha em carretéis pequenos: troque o disco plástico retentor por um maior que cubra a ranhura de corte do carretel.",
      "A linha fica folgada e frouxa antes de entrar no primeiro guia: ajuste a altura do guia aéreo para que fique a pelo menos 30 cm acima do topo do cone."
    ],
    dicaArtrelados: "Se você usa carretel pequeno deitadinho na sua máquina doméstica: olhe para o carretel! Ele tem uma ranhurinha plástica onde a fábrica prende a ponta da linha. Coloque o carretel com essa ranhura virada para trás e use o disco prendedor grande! Assim a linha nunca vai enroscar no corte plástico!",
    voceSabia: "As redinhas de nylon para cones de linha foram inventadas originalmente como embalagens de proteção para frutas delicadas no Japão, até que um técnico de bordados percebeu que a malha elástica tinha a tensão perfeita para domar fios rebeldes!",
    practicalExercise: "Coloque um cone de linha metálica ou viscose sem redinha e puxe a linha rápido para cima: veja como os fios caem soltos. Agora coloque a redinha de nylon e puxe de novo: sinta como a linha sai controlada e macia.",
    quickSummary: "Discos retentores, bases emborrachadas e redinhas de nylon que estabilizam o cone de linha, garantindo fluxo suave e evitando nós e quebras.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades",
      needleType: "Compatível",
      density: "N/A"
    },
    relatedTerms: [
      "Redinha de Cone (Thread Net)",
      "Prendedor de Carretel (Spool Cap)",
      "Suporte Aéreo Porta-Fios",
      "Desbobinamento Vertical",
      "Linhas Metálicas"
    ],
    tags: [
      "t-099",
      "freio de carretel",
      "spool cap",
      "redinha",
      "suporte de cone",
      "linhas",
      "alimentacao de fio",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Thread Delivery Systems & Spool Handling Manual. Freiburg, 2022.",
      "ROBISON-ANTON. Industrial Embroidery Thread Stand & Feed Optimization. New York, 2021.",
      "ARTRELADOS. Segredos do Suporte de Fios e Alimentação Suave de Linhas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-100-trava-de-seguranca-por-sensor-de-para-choque",
    code: "T-100",
    term: "Trava de Segurança por Sensor de Pára-Choque e Fim-de-Curso (Pantograph Bump-Stop & Limit Switch Sensor)",
    pronunciation: "tra-va de se-gu-ran-sa por sen-sor de pa-ra cho-ke e fim de cur-so",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica & Manutenção",
    origin: "Do francês 'pare-choc' (amortecedor de impacto) e do inglês 'limit switch' (chave limitadora de curso). Sistema de proteção eletromecânico e óptico contra colisões estruturais no pantógrafo.",
    summary: "Microchaves mecânicas e sensores ópticos de limite nos eixos X e Y que interrompem a máquina instantaneamente se o bastidor tentar ultrapassar a área física segura.",
    definition: "A Trava de Segurança por Sensor de Pára-Choque e Fim-de-Curso (Pantograph Travel Limit Switch & Optical Bump-Stop Safety System) é o conjunto de sensores eletromecânicos, chaves de micro-switch ou sensores de barreira óptica infravermelha montados nas extremidades físicas dos trilhos dos eixos X e Y do pantógrafo. Sua função crítica de salvaguarda é monitorar a excursão máxima do bastidor e cortar imediatamente a alimentação dos servomotores caso o operador envie um comando de matriz maior que o campo útil ou se houver perda de passos, impedindo que o bastidor colida com força contra a carcaça de ferro fundido do cabeçote, empenando braços de tração ou quebrando barras de agulha.",
    technicalDetails: "Acionamento por contato normalmente fechado (NC) ou sensor óptico NPN/PNP com tempo de resposta inferior a 5 milissegundos. Integrado a batentes mecânicos de borracha de poliuretano vulcanizado (Bump-Stops) que absorvem o impacto cinético residual.",
    beginnerExplanation: "São os 'sensores de limite' que ficam no finalzinho dos trilhos da máquina. Se você tentar bordar um desenho muito grande que não cabe no bastidor, o braço da máquina encosta nesse sensor e para tudo na mesma hora, antes do bastidor bater na máquina e quebrar as peças caras!",
    howItWorks: [
      "1. A máquina move o pantógrafo em alta velocidade executando a matriz.",
      "2. Se a matriz for maior que o bastidor ou o desenho estiver fora de centro, o braço atinge o limite do trilho.",
      "3. Uma palheta metálica do pantógrafo interrompe o feixe óptico do sensor ou pressiona o micro-switch.",
      "4. O circuito de segurança desarma os drivers dos motores X/Y em milissegundos.",
      "5. A máquina emite um sinal sonoro de alarme e exibe a mensagem 'Limit Error / X-Y Over Travel' na tela.",
      "6. O operador reposiciona o bastidor pelo painel de controle com segurança total."
    ],
    applications: [
      "Proteção de máquinas industriais e semindustriais contra colisões destrutivas.",
      "Calibração automática do ponto de origem 'Home' ao ligar a máquina.",
      "Prevenção de danos graves ao utilizar bastidores de formatos especiais (bonés e meias).",
      "Segurança operacional em produção com operadores em turnos alternados."
    ],
    characteristics: [
      "Atuação ultrarrápida redundante (eletrônica + batente mecânico de borracha).",
      "Preserva os motores de passo, correias dentadas e guias lineares contra empenamento.",
      "Fundamental para a integridade dos sensores de posição absoluta (Encoders)."
    ],
    commonErrors: [
      "❌ Desativar ou isolar os sensores de fim de curso para tentar 'forçar' um bordado maior que a máquina suporta.",
      "❌ Deixar acumular poeira têxtil e fiapos dentro das ranhuras dos sensores ópticos de limite.",
      "❌ Bordejar sem conferir o tamanho do bastidor selecionado no software da máquina."
    ],
    troubleshootingTips: [
      "A máquina apita e acusa 'X-Limit Error' assim que você aperta o botão Start: o desenho é largo demais para o bastidor; reduza o tamanho da matriz no software ou troque por um bastidor maior.",
      "A máquina trava no meio do nada acusando erro de limite: limpe o sensor óptico do eixo X com um jato de ar comprimido suave para remover fiapos de linha.",
      "O pantógrafo bateu no final com um estalo forte: verifique se a palheta metálica do sensor não está torta ou solta."
    ],
    dicaArtrelados: "Sempre selecione no painel da sua máquina o tamanho EXATO do bastidor que você está usando antes de bordar! A máquina avisa na hora se o desenho couber ou se vai passar do limite, protegendo o seu bastidor e a sua máquina de qualquer pancada!",
    voceSabia: "Em uma máquina de bordar industrial a 1.000 PPM, o pantógrafo freia e inverte de direção centenas de vezes por minuto suportando forças de desaceleração que equivalem a até 3 vezes o peso do próprio bastidor!",
    practicalExercise: "Com a máquina ligada e sem bastidor, use as setas do painel para mover o pantógrafo até o final do curso à direita. Observe a mensagem de segurança 'Limit' que surge na tela quando o sensor atua com suavidade.",
    quickSummary: "Sensores de Fim-de-Curso são travas de segurança eletrônicas que impedem o bastidor de ultrapassar a área permitida e bater contra a máquina.",
    recommendedSettings: {
      speedPPM: "N/A (Dispositivo de Proteção)",
      needleType: "N/A",
      density: "Tempo de resposta: < 5 ms"
    },
    relatedTerms: [
      "Sensor Fim-de-Curso (Limit Switch)",
      "Pantógrafo",
      "Ponto Zero (Home Position)",
      "Trace / Limite de Bastidor",
      "Batente Mecânico (Bump-Stop)"
    ],
    tags: [
      "t-100",
      "fim de curso",
      "limit switch",
      "seguranca",
      "pantografo",
      "sensores",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Safety Systems & Limit Sensor Calibration Manual. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. X-Y Travel Limits and Optical Sensor Maintenance. Ichinomiya, 2021.",
      "ARTRELADOS. Manual de Engenharia e Proteção Eletromecânica em Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-101-transparencia-em-tecidos-finos",
    code: "T-101",
    term: "Transparência em Tecidos Finos (Organza, Tule e Voil) (Sheer Fabric Stabilizing & Water-Soluble Film Protocol)",
    pronunciation: "trans-pa-ren-si-a em te-ci-dos fi-nos or-gan-za tu-le e vo-il",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do latim 'trans' (através de) e 'parere' (aparecer). Técnica refinada de alta costura desenvolvida para bordados aéreos e vestuário nupcial.",
    summary: "Protocolo completo para bordar em tecidos transparentes (organza, tule e seda) usando entretela hidrossolúvel, linha da bobina na mesma cor e matrizes leves.",
    definition: "O Protocolo de Bordado em Transparência e Tecidos Finos (Sheer Fabric Embroidery & Water-Soluble Film Protocol) é a metodologia especializada para digitalização e execução de bordados sobre tecidos diáfanos, transparentes e de gramatura levíssima (como organza de seda ou poliéster, tule francês, musseline e voil de algodão). Como nesses tecidos qualquer entretela tradicional recortada permanece visível e inestética no avesso, o protocolo exige estabilização sanduíche com filme ou não-tecido 100% hidrossolúvel (PVA), utilização de linha de bobina rigorosamente idêntica em cor e composição à linha superior da agulha e matrizes com densidade aberta (0,45 mm a 0,55 mm) com caminhos de conexão discretos.",
    technicalDetails: "Uso de filme hidrossolúvel de 40 micras no topo e entretela hidrossolúvel não-tecida (PVA 40g) no verso. Agulha fina 65/9 ou 70/10 Microtex ponta fina aguda. Pull Compensation moderado (0,30 mm) e eliminação de saltos longos de linha sobre áreas transparentes.",
    beginnerExplanation: "É o segredo dos vestidos de noiva e véus para bordar em tecidos transparentes como tule e organza! Como o tecido é transparente, a gente não pode usar entretela de papel que fica feia atrás. Usamos entretela que dissolve na água (hidrossolúvel) e colocamos na bobina de baixo a mesma cor de linha de cima, deixando o bordado perfeito dos dois lados!",
    howItWorks: [
      "1. Faz-se um 'sanduíche': entretela hidrossolúvel embaixo + tecido transparente no meio + plástico hidrossolúvel em cima.",
      "2. Enquadra-se no bastidor com cuidado para não esgarçar a trama delicada da organza.",
      "3. Coloca-se na carretilha da bobina a mesma linha colorida que está na agulha superior.",
      "4. Instala-se agulha finíssima Microtex 65/9 ou 70/10.",
      "5. A máquina borda em velocidade suave (600 a 700 PPM) com tensões perfeitamente equilibradas (50% / 50%).",
      "6. Ao terminar, retira-se o excesso de plástico e enxágua-se em água morna: a entretela desaparece por completo.",
      "7. A peça seca e o bordado parece flutuar magicamente sobre a transparência do tecido."
    ],
    applications: [
      "Véus de noiva, vestidos de festa e mantilhas em tule e organza.",
      "Cortinas nobres de voil e painéis decorativos translúcidos.",
      "Detalhes de transparência em mangas e decotes de alta costura.",
      "Apliques vazados e asas de fadas e borboletas 3D transparentes."
    ],
    characteristics: [
      "Avesso 100% limpo e idêntico à frente sem resíduos de entretelas.",
      "Bordado leve e flexível que não pesa nem repuxa o tecido fino.",
      "Preservação da transparência cristalina original do tule e da organza."
    ],
    commonErrors: [
      "❌ Usar entretela rasgável comum (fica papel branco visível e feio atrás da transparência).",
      "❌ Deixar linha branca na bobina ao bordar com linha vermelha ou dourada em tecido transparente.",
      "❌ Bordejar matrizes pesadas com tatami fechado que rasgam a organza delicada."
    ],
    troubleshootingTips: [
      "O bordado furou e rasgou o tule: a agulha estava grossa ou cega; substitua por agulha Microtex 65/9 nova e alivie a densidade da matriz.",
      "O avesso do bordado ficou feio com pontinhos brancos: encha uma carretilha com a mesma linha de bordar colorida do cone superior e equilibre as tensões.",
      "A organza ficou enrugada após dissolver a entretela: passe a ferro morno com o tecido úmido estendido sobre uma toalha macia."
    ],
    dicaArtrelados: "Para bordar véu de noiva e vestidos de festa transparentes: encha a sua bobina com a MESMA linha colorida da agulha de cima e use entretela hidrossolúvel! Quando você lavar com água morninha, a entretela some e o bordado fica tão perfeito dos dois lados que ninguém sabe dizer qual é a frente e qual é o avesso!",
    voceSabia: "Os vestidos de gala da realeza britânica com bordados sobre tule de seda pura levam centenas de horas de trabalho e utilizam filmes hidrossolúveis especiais biodegradáveis feitos a partir do amido de milho!",
    practicalExercise: "Enquadre um pedaço de organza entre duas folhas de filme hidrossolúvel. Borde uma flor pequena usando linha azul na agulha e a mesma linha azul na bobina. Lave na torneira e encante-se com o resultado transparente perfeito.",
    quickSummary: "Protocolo de Transparência é a técnica para bordar tecidos finos usando entretelas hidrossolúveis, mesma linha na bobina e agulhas ultrafinas Microtex.",
    recommendedSettings: {
      speedPPM: "600 a 700 PPM",
      needleType: "65/9 ou 70/10 Microtex (Ponta Aguda Fina)",
      density: "0.45 mm a 0.55 mm (Matriz aberta e leve)"
    },
    relatedTerms: [
      "Entretela Hidrossolúvel (Solvy / Avalon)",
      "Agulha Microtex",
      "Bordado em Tule e Organza",
      "Linha da Bobina na Cor",
      "Alta Costura Nupcial"
    ],
    tags: [
      "t-101",
      "transparencia",
      "organza",
      "tule",
      "voil",
      "hidrossoluvel",
      "alta costura",
      "artrelados"
    ],
    bibliographicReferences: [
      "BERNINA ARTISTIC EMBROIDERY. Sheer Fabric & Bridal Lace Techniques. Steckborn, 2022.",
      "MADEIRA THREADS. Water-Soluble Stabilizers & Sheer Fabric Solutions. Freiburg, 2021.",
      "ARTRELADOS. Alta Costura no Bordado Computadorizado: Véus, Tules e Tecidos Transparentes. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-102-trilho-de-guia-linear-e-lubrificacao-de-barramentos",
    code: "T-102",
    term: "Trilho de Guia Linear e Lubrificação de Barramentos (Linear Guide Rail & Ball Carriage Maintenance)",
    pronunciation: "tri-lho de gui-a li-ne-ar e lu-bri-fi-ca-são de bar-ra-men-tos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Mecânica & Manutenção",
    origin: "Do latim 'linea' (linha) e do árabe 'al-kuhl' / latim 'lubricare' (tornar liso, escorregadio). Sistema mecânico de translação linear de alta precisão por esferas recirculantes desenvolvido pela indústria mecatrônica pesada.",
    summary: "Manutenção periódica, limpeza de fiapos e lubrificação com graxa de lítio dos trilhos de aço temperado e patins de esferas que movimentam o pantógrafo com suavidade milimétrica.",
    definition: "O Trilho de Guia Linear e Lubrificação de Barramentos (Linear Motion Guide Rails & Recirculating Ball Carriage Maintenance) é o conjunto de elementos de transmissão mecânica constituído por perfis de aço temperado e retificado (trilhos prismáticos) sobre os quais deslizam blocos móveis (patins) contendo fileiras internas de esferas recirculantes de aço cromo. Este sistema sustenta todo o conjunto do pantógrafo nos eixos X e Y, garantindo movimento retilíneo perfeito com coeficiente de atrito inferior a 0,003 e rigidez dinâmica necessária para suportar as fortes desacelerações do bordado em alta rotação sem desvios dimensionais.",
    technicalDetails: "Exige relubrificação periódica a cada 200 a 400 horas de operação com graxa especial branca de lítio com aditivos anti-desgaste (NLGI Grau 2) injetada através dos bicos graxeiros dos patins com pistola de pressão dosada. Limpeza prévia obrigatória com pano seco de microfibra isento de solventes agressivos.",
    beginnerExplanation: "São os trilhos de aço polido por onde o braço do bastidor desliza para frente e para trás. Dentro dos bloquinhos de metal existem centenas de bolinhas de aço microscópicas. Eles precisam estar sempre limpinhos sem poeira de linha e com uma graxinha branca especial para correr macio e não arranhar as peças!",
    howItWorks: [
      "1. O operador desliga a máquina e remove as tampas de proteção do barramento X e Y.",
      "2. Limpa com um pano de microfibra seco todos os resíduos de linha, poeira têxtil e óleo velho dos trilhos.",
      "3. Encaixa a ponteira da pistola de graxa no bico graxeiro do bloco deslizante (patim).",
      "4. Injeta a quantidade exata de graxa branca de lítio recomendada pelo fabricante.",
      "5. Movimenta o pantógrafo manualmente de ponta a ponta várias vezes para distribuir a graxa pelas esferas.",
      "6. Limpa o excesso de graxa expulso pelos retentores com um pano limpo.",
      "7. O pantógrafo volta a operar silencioso, frio e com precisão cirúrgica de posicionamento."
    ],
    applications: [
      "Manutenção preventiva trimestral em máquinas de bordar industriais e semindustriais.",
      "Eliminação de ruídos ásperos e vibrações mecânicas durante translações rápidas de bastidor.",
      "Preservação da vida útil das guias lineares contra desgaste abrasivo prematuro.",
      "Garantia de alinhamento perfeito entre contornos e preenchimentos em matrizes grandes."
    ],
    characteristics: [
      "Movimento ultra-suave com atrito cinético quase nulo.",
      "Suporta altas cargas dinâmicas sem flexão estrutural.",
      "Exige proteção contra poeira e lubrificante com viscosidade correta."
    ],
    commonErrors: [
      "❌ Usar óleos finos desengripantes (tipo WD-40) nos trilhos lineares (o desengripante dissolve a graxa interna das esferas e estraga o patim).",
      "❌ Deixar os trilhos secos sem lubrificação por meses até começar a ranger e travar.",
      "❌ Usar graxas pesadas automotivas com grafite que atraem fiapos de tecido e viram uma lixa abrasiva."
    ],
    troubleshootingTips: [
      "O bastidor está fazendo um ruído metálico áspero ao se mover rápido: os patins estão secos; faça a lubrificação com graxa de lítio imediatamente.",
      "A máquina perde passos no eixo Y em bordados pesados: o trilho está sujo de fiapos acumulados travando o patim; limpe as guias e lubrifique.",
      "Contornos de letras saindo tortos e tremidos: verifique se há folga mecânica por desgaste nas esferas do bloco deslizante."
    ],
    dicaArtrelados: "Nunca espirre óleo spray desengripante nos trilhos da sua máquina de bordar! Use sempre a graxa branca especial de lítio recomendada para guias lineares! Uma aplicação a cada 3 meses mantém sua máquina macia e silenciosa como nova por décadas!",
    voceSabia: "As guias lineares com esferas recirculantes foram inventadas pela empresa japonesa THK na década de 1970 e revolucionaram a robótica mundial, sendo as mesmas utilizadas nos robôs que montam automóveis e em telescópios espaciais!",
    practicalExercise: "Com a máquina desligada, deslize o pantógrafo manualmente e sinta a maciez do movimento. Passe um papel toalha limpo na lateral do trilho de aço: se sair seco ou com pó preto, está na hora de limpar e engraxar.",
    quickSummary: "Trilhos de Guia Linear são os barramentos de aço e patins de esferas que movem o pantógrafo com suavidade, exigindo limpeza e graxa branca de lítio periódica.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "N/A",
      density: "Graxa recomendada: Lítio NLGI Grau 2"
    },
    relatedTerms: [
      "Guia Linear (Linear Rail)",
      "Patim de Esferas (Ball Carriage)",
      "Graxa Branca de Lítio",
      "Pantógrafo",
      "Manutenção Preventiva"
    ],
    tags: [
      "t-102",
      "guia linear",
      "trilhos",
      "lubrificacao",
      "graxa de litio",
      "manutencao",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "THK CO. LTD. Linear Motion Systems Technical Handbook. Tóquio, 2022.",
      "TAJIMA EMBROIDERY MACHINERY. Mechanical Maintenance & Lubrication Schedule. Nagoya, 2021.",
      "ARTRELADOS. Guia Completo de Lubrificação e Manutenção Mecânica de Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "t-103-troca-rapida-de-bastidores-e-sistema-magnetico",
    code: "T-103",
    term: "Troca Rápida de Bastidores e Sistema Magnético (Magnetic Hooping System & Fast-Clamp Frame)",
    pronunciation: "tro-ca ra-pi-da de bas-ti-do-res e sis-te-ma mag-ne-ti-co",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do grego 'magnes' (pedra de magnésia / ímã) e do inglês 'fast-clamp' (fecho rápido). Inovação ergonômica e produtiva introduzida nos anos 2010 com ímãs industriais de terras-raras (Neodímio).",
    summary: "Bastidores modernos equipados com ímãs de neodímio que prendem tecidos grossos ou finos instantaneamente sem parafusos, eliminando marcas de pressão e reduzindo o tempo de preparação em 70%.",
    definition: "O Sistema de Troca Rápida de Bastidores e Enquadramento Magnético (Magnetic Hoop Clamping System / Mighty Hoop / Fast-Clamp Quick Framing) é a tecnologia avançada de fixação de tecidos no pantógrafo composta por dois aros (inferior e superior) magnetizados por pastilhas de ímãs de terras-raras de Neodímio-Ferro-Boro (NdFeB Grau N45 a N52). O sistema elimina completamente o anel de atrito tradicional e os parafusos de aperto manual: a atração magnética de alta densidade de fluxo puxa o aro superior contra o aro inferior com força de retenção constante e autorregulável, adaptando-se automaticamente a qualquer espessura de tecido (desde seda fina até jaquetas pesadas e couro) sem causar esmagamento de fibras nem lesões por esforço repetitivo (LER) no operador.",
    technicalDetails: "Força de atração magnética vertical de 15 a 35 kgf por bastidor. Estrutura em polímero de engenharia reforçado com fibra de vidro. Redução comprovada no tempo de enquadramento de 45 segundos para apenas 8 segundos por peça, eliminando 100% o efeito 'Hoop Burn' (queima por bastidor).",
    beginnerExplanation: "É o bastidor magnético com ímãs super fortes que prende o tecido num piscar de olhos! Você só coloca a entretela, apoia a camisa e 'pá!'... encosta o aro de cima que o ímã gruda sozinho com a força perfeita! Não precisa apertar nenhum parafuso, não cansa as mãos e não deixa nenhuma marca de aro amassado na roupa!",
    howItWorks: [
      "1. A base do bastidor magnético inferior com a entretela é posicionada na estação de montagem.",
      "2. Coloca-se a camisa ou jaqueta sobre a base alisando suavemente.",
      "3. O operador aproxima o aro superior magnético.",
      "4. Os ímãs de neodímio atraem o aro superior com força firme e uniforme em toda a volta.",
      "5. O tecido fica perfeitamente preso com tensão estável e sem deformação de trama.",
      "6. Encaixa-se no pantógrafo da máquina e o bordado é executado com total estabilidade.",
      "7. Ao terminar, basta puxar a alça de desengate rápido para soltar a peça em um segundo."
    ],
    applications: [
      "Bordados em peças grossas e difíceis (jaquetas jeans, moletons forrados, toalhas grossas e bolsas).",
      "Produção de alta escala de camisetas e camisas polo em ateliês e indústrias.",
      "Prevenção de marcas de bastidor em tecidos sensíveis (veludo, cetim e couro).",
      "Ergonomia e saúde ocupacional para bordadeiras, eliminando dores nas mãos e punhos."
    ],
    characteristics: [
      "Ajuste automático de pressão para qualquer espessura de material.",
      "Eliminação total do aperto manual de parafusos.",
      "Produtividade e velocidade até 3 vezes maior na linha de produção."
    ],
    commonErrors: [
      "❌ Deixar os dedos entre os aros ao fechar o bastidor (o impacto dos ímãs de neodímio pode beliscar a pele).",
      "❌ Aproximar cartões de crédito magnéticos, relógios mecânicos ou celulares dos ímãs.",
      "❌ Usar bastidores magnéticos de marcas não certificadas com ímãs fracos que deslizam em alta velocidade."
    ],
    troubleshootingTips: [
      "O tecido grosso escorregou no meio do bordado: use um bastidor magnético com classificação de força maior ou adicione uma folha de entretela com spray temporário para travar o atrito.",
      "Dificuldade para soltar o bastidor da peça: utilize a alavanca de canto projetada para descolar os ímãs em ângulo em vez de puxar reto para cima.",
      "O bastidor não encaixa no pantógrafo: regule a largura dos suportes metálicos de encaixe conforme o modelo específico da sua máquina."
    ],
    dicaArtrelados: "O bastidor magnético é o melhor investimento que uma bordadeira pode fazer pela sua saúde e pelo seu negócio! Ele economiza horas de trabalho todo dia, prende desde um paninho fino até uma jaqueta de couro grossa num clique e NUNCA MAIS machuca seus dedos com parafusos duros!",
    voceSabia: "Os ímãs de Neodímio utilizados nos bastidores magnéticos profissionais modernos são tão poderosos que conseguem sustentar até 1.000 vezes o seu próprio peso em aço e mantêm sua força magnética intacta por mais de 100 anos!",
    practicalExercise: "Experimente enquadrar uma jaqueta jeans grossa em um bastidor tradicional de parafuso e cronometre o tempo. Depois faça o mesmo em um bastidor magnético: compare a facilidade de fechamento e a ausência total de marcas de pressão.",
    quickSummary: "Bastidores Magnéticos utilizam ímãs potentes de neodímio para prender tecidos de qualquer espessura em segundos sem parafusos nem marcas de bastidor.",
    recommendedSettings: {
      speedPPM: "750 a 1.000 PPM",
      needleType: "Compatível com a peça",
      density: "Força de retenção magnética: 15 a 35 kgf"
    },
    relatedTerms: [
      "Bastidor Magnético (Mighty Hoop)",
      "Ímã de Neodímio (NdFeB)",
      "Enquadramento Rápido (Fast Clamping)",
      "Ergonomia no Bordado (LER/DORT)",
      "Marca de Bastidor (Hoop Burn)"
    ],
    tags: [
      "t-103",
      "bastidor magnetico",
      "mighty hoop",
      "troca rapida",
      "neodimio",
      "ergonomia",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "HOOPMASTER & MIGHTY HOOP. Magnetic Hooping Systems Technical Specification & Ergonomics. Dallas, 2022.",
      "EMBROIDERY TRADE MAGAZINE. Revolutionizing Production with Magnetic Clamping Technology. Londres, 2023.",
      "ARTRELADOS. Inovações e Ergonomia no Ateliê: O Poder dos Bastidores Magnéticos. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

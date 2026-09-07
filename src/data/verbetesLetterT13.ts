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
  },
  {
    id: "t-104-typical-maquinas-de-bordado-eletronico",
    code: "T-104",
    term: "Typical (Máquinas de Bordado Eletrônico)",
    pronunciation: "tí-pi-cal (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "T",
    level: "Intermediário a Avançado 🟡🔴",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Marca pertencente ao prestigiado conglomerado industrial Xi'an Typical Industries Co., Ltd. (fundado em 1946 na histórica província de Shaanxi, China). É uma das maiores e mais antigas fabricantes mundiais de maquinário de costura e bordado industrial, com ampla rede de distribuição, reposição de peças e assistência técnica consolidada no mercado brasileiro.",
    summary: "Fabricante industrial de renome global em máquinas de bordado eletrônico de 12 e 15 agulhas, com sistema operacional Dahao, operação plana e tubular para bonés e alta velocidade de até 1.200 PPM.",
    definition: "A Typical é uma conceituada marca de máquinas industriais de bordado computadorizado de cabeçote único e múltiplas cabeças cilíndricas (com 12 ou 15 agulhas por cabeçote), amplamente utilizada em confecções e ateliês profissionais de personalização. Equipadas com o célebre computador de bordo com sistema Dahao (painéis touchscreen coloridos de 8 a 10 polegadas), destacam-se pela robustez do chassi em ferro fundido de alta inércia, estabilidade vibratória em altas velocidades, leitura direta do formato universal .DST e versatilidade na transição entre bordados planos e peças tubulares montadas ou bonés estruturados em curva de 270 graus.",
    technicalDetails: "Acionamento principal e eixos cartesianos X/Y controlados por servomotores digitais de alta resposta dinâmica com parada sincronizada da agulha em ponto morto superior a 100°. Velocidade operacional ajustável de 450 a 1.200 PPM. Laçadeira rotativa vertical industrial tipo 'L' de precisão milimétrica, sistema de corte automático com faca móvel e contrafaca temperada, ponteiro laser para pré-visualização de enquadramento perimetral e memória interna para até 20 milhões de pontos ou 200 matrizes.",
    construction: [
      "Estrutura mecânica reforçada em ferro fundido monobloco com pés niveladores e rodízios industriais",
      "Braço tubular cilíndrico de diâmetro reduzido para bordar mangas, bolsos e bonés montados",
      "Mesa plana removível de engate rápido com tampo laminado de alta resistência",
      "Painel de comando computadorizado Dahao colorido de alta resolução com botões físicos e touch",
      "Sistema de troca automática de cores acionado por motor de passo e came helicoidal",
      "Conjunto de faca e contrafaca de corte automático de fio superior e inferior",
      "Ponteiro de feixe laser vermelho para conferência do ponto zero e contorno de segurança"
    ],
    howItWorks: [
      "1. A matriz de bordado formatada em extensão padrão .DST é transferida via pendrive USB para a memória do painel Dahao.",
      "2. Na tela, o operador seleciona o desenho e define a ordem sequencial de cores, associando cada passo da matriz a uma das 12 ou 15 agulhas físicas da máquina.",
      "3. A peça é enquadrada no bastidor tubular, plano ou de boné e fixada no braço pantográfico.",
      "4. O operador ativa o ponteiro laser e executa a função de traçado perimetral (Border Trace) para checar se o bordado cabe com folga dentro do bastidor sem risco de colisão.",
      "5. A máquina inicia o ciclo operacional com partida progressiva, controlando a rotação de acordo com o comprimento dos pontos gerados.",
      "6. Durante a execução, os sensores ópticos de quebra de fio e os tensores de disco com mola compensadora monitoram a passagem da linha, pausando a operação imediatamente se houver ruptura."
    ],
    beginnerExplanation: "A Typical representa o grande salto de quem sai das máquinas domésticas de uma agulha só e entra no mundo do bordado industrial profissional! Enquanto na máquina caseira você precisa parar e trocar o cone de linha na mão a cada cor diferente, na Typical você já deixa 12 ou 15 cones passados na máquina ao mesmo tempo. Ela troca de cor sozinha em segundos, borda bonés fechados perfeitos e trabalha o dia inteiro sem cansar!",
    applications: [
      "Produção de uniformes profissionais, camisas polo corporativas e jalecos médicos em escala comercial",
      "Bordados em bonés montados estruturados em 270° utilizando o dispositivo cilíndrico rotativo",
      "Bordado de peças tubulares prontas como mangas de jaquetas, pernas de calça e bolsas esportivas",
      "Confecção seriada de emblemas, brasões militares e patches termocolantes de alta densidade",
      "Bordados em artigos pesados como couro sintético, lona, jaquetas jeans e toalhas atoalhadas"
    ],
    mainTypes: [
      "Typical Linha TC-1201 (1 Cabeça e 12 Agulhas): Modelo compacto ideal para pequenos ateliês e personalização ágil",
      "Typical Linha TC-1501 (1 Cabeça e 15 Agulhas): O modelo mais consagrado para alta versatilidade de cores e bonés",
      "Typical Linha TC-1502 (2 Cabeças e 15 Agulhas): Dobra a capacidade produtiva em um único comando",
      "Typical Linha Multi-Cabeças (4, 6, 8 ou 12 Cabeças): Para confecções e facções de vestuário em larga escala"
    ],
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM para peças planas; 650 a 750 PPM para bonés estruturados",
      needleType: "Sistema industrial de cabo redondo DBxK5 (tamanhos 75/11 a 90/14 conforme o tecido)",
      stabilizer: "Entretela rasgável pesada de 80g/m² ou entretela resinada especial para bonés"
    },
    advantages: [
      "✔ Chassi super pesado e estável que absorve vibrações mesmo acima de 900 PPM",
      "✔ Sistema eletrônico Dahao universal, consagrado mundialmente e de facílima operação",
      "✔ Ampla facilidade de encontrar agulhas industriais DBxK5, carretilhas tipo L e peças de reposição",
      "✔ Dispositivo de boné completo em 270° incluso de fábrica com estação de montagem"
    ],
    limitations: [
      "Utiliza agulhas industriais de cabo redondo (DBxK5), exigindo atenção manual no correto alinhamento da cava da agulha durante a colocação.",
      "Equipamento de porte industrial que requer espaço físico dedicado, piso nivelado e aterramento elétrico adequado."
    ],
    commonErrors: [
      "❌ Iniciar o bordado ou movimentar o pantógrafo sem conferir se o ângulo do eixo principal está exatamente em 100° no painel Dahao.",
      "❌ Montar a agulha de cabo redondo com a cava virada para a direção errada (deve ficar voltada para trás, voltada para a ponta da laçadeira).",
      "❌ Esquecer de executar o traçado de contorno com o laser antes de iniciar o bordado em bastidores de boné, podendo causar colisão violenta da agulha com a chapa metálica.",
      "❌ Não lubrificar a laçadeira rotativa vertical e as guias de agulha a cada turno de trabalho de 8 horas."
    ],
    troubleshootingTips: [
      "Erro de Corte de Linha (Trimming Error / Faca Não Retornou): Verifique se não há fiapos ou pedaços de linha travando a faca móvel sob a chapa de agulha e limpe com ar comprimido e pincel.",
      "A máquina não troca de cor e emite alarme de motor de cor: Verifique se não há fios embolados no came do trocador de barras ou se o seletor manual foi desengatado.",
      "Linha escapando do olho da agulha no início da cor: Regule a mola pega-fio superior (thread holding spring) para segurar a ponta do fio com firmeza no corte."
    ],
    dicaArtrelados: "Em máquinas industriais como a Typical, o teste de contorno perimetral com ponteiro laser (Border Trace) deve ser sagrado na sua rotina antes de apertar o botão verde de partida! Esse simples cuidado de 5 segundos evita que a agulha bata na borda do bastidor, quebre a barra de agulha e cause um prejuízo desnecessário. E mantenha sempre a agulha na posição de 100° no painel Dahao antes de qualquer ajuste manual!",
    voceSabia: "O painel computadorizado Dahao presente nas máquinas Typical é tão dominante no mercado mundial que praticamente 8 a cada 10 máquinas industriais de bordado produzidas na Ásia utilizam essa mesma tecnologia eletrônica! Isso torna o aprendizado dos seus comandos um passaporte universal para operar quase qualquer bordadeira industrial do mundo.",
    practicalExercise: "Treine o sequenciamento rápido de cores no Dahao: Salve uma matriz de 4 cores no formato .DST, insira o pendrive na Typical, acesse o menu de cores e vincule: Cor 1 à Agulha 3 (fio azul), Cor 2 à Agulha 1 (fio branco), Cor 3 à Agulha 7 (fio vermelho) e Cor 4 à Agulha 12 (fio preto). Ligue o laser, confirme a área e execute um teste em retalho de sarja.",
    quickSummary: "Fabricante industrial global de alta robustez, consagrada pelas máquinas eletrônicas de 12 e 15 agulhas com sistema Dahao, velocidade de até 1.200 PPM e dispositivo para bonés.",
    relatedTerms: [
      "Tajima",
      "Formato DST",
      "Painel Dahao",
      "Agulha DBxK5",
      "Bastidor de Boné",
      "Velocidade PPM",
      "Troca Automática de Cor",
      "Ponteiro Laser"
    ],
    tags: [
      "t-104",
      "typical",
      "maquinas",
      "equipamento",
      "tc1501",
      "tc1201",
      "dahao",
      "industrial",
      "dst",
      "artrelados"
    ],
    bibliographicReferences: [
      "XI'AN TYPICAL INDUSTRIES CO., LTD. Operation and Technical Maintenance Manual: Multi-Needle Embroidery Machines TC Series. Xi'an: Typical, 2023.",
      "BEIJING DAHAO TECHNOLOGY CORP. Computerized Control System for Embroidery Machines: User Manual. Pequim: Dahao, 2023.",
      "ARTRELADOS. Guia de Operação, Segurança e Manutenção de Bordadeiras Industriais no Brasil. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  },
  {
    id: "t-105-toyota-maquinas-de-bordado-eletronico",
    code: "T-105",
    term: "Toyota (Máquinas de Bordado Eletrônico)",
    pronunciation: "to-yo-ta (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "T",
    level: "Intermediário a Avançado 🟡🔴",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Fundada em 1926 em Kariya, província de Aichi (Japão), por Sakichi Toyoda como Toyoda Automatic Loom Works (o berço industrial de todo o grupo Toyota, concebido muito antes da divisão automobilística). No bordado computadorizado, a divisão Toyota Apparel Equipment desenvolveu nos anos 1980 e 1990 cabeçotes industriais de extrema precisão micrométrica, consagrando a lendária série Toyota Expert e o clássico formato binário de matriz .10O.",
    summary: "Lendária fabricante japonesa (Aichi, 1926), berço do grupo Toyota, célebre pela histórica linha industrial compacta Toyota Expert (AD800 a AD860 de 6 a 12 agulhas) e pelo clássico formato de arquivo .10O.",
    definition: "A Toyota é uma histórica e venerada fabricante japonesa de máquinas industriais compactas de bordado computadorizado de 1 e multi-cabeças (com 6, 9 ou 12 agulhas), celebrada mundialmente pela durabilidade de sua série Toyota Expert (modelos AD800, AD820, AD830, AD850 e AD860). Notabilizou-se pela mecânica de tolerância micrométrica herdada da engenharia de precisão japonesa, cabeçote tubular reforçado para bonés em 270°, sistema de corte rápido com recolhimento de ponta de fio, comunicação serial de alta fidelidade e suporte nativo ao formato proprietário Toyota .10O e ao padrão universal Tajima .DST.",
    technicalDetails: "Acionamento por servomotores AC japoneses de alta inércia e baixíssimo ruído acoplados a eixos cartesianos X/Y de alta rigidez com parada em ponto morto superior a 100°. Velocidade contínua regulável entre 450 e 1.200 PPM. Laçadeira rotativa vertical industrial tipo 'L' de tolerância milimétrica com lubrificação por pavio, conjunto de corte automático por navalha de aço temperado e retentor de linha acionado por came. Conexão original via porta serial RS-232C para o software Toyota Stitch Composer e suporte a emuladores USB modernos. Arquivos suportados: .10O e .DST.",
    construction: [
      "Chassi monobloco fundido em ferro nodular japonês com altíssima absorção de vibração e estabilidade",
      "Braço tubular de perfil estreito e longo para facilitar a rotação de bonés estruturados e peças tubulares fechadas",
      "Torre de tensores manuais duplos graduados com mola puxa-fio de alta sensibilidade para cada agulha",
      "Mecanismo de troca de agulhas linear rápida acionado por came mecânico de precisão",
      "Painel de comando integrado de alta durabilidade com display LCD monocromático e teclado de membrana reforçado",
      "Laçadeiras rotativas verticais industriais japonesas Koban de lubrificação contínua",
      "Interface de comunicação serial RS-232C com possibilidade de adaptação para leitores de pendrive USB"
    ],
    howItWorks: [
      "1. A matriz de bordado criada em formato proprietário Toyota .10O ou universal Tajima .DST é transferida para a máquina via cabo serial ou através de emulador de pendrive USB.",
      "2. No painel de comando da máquina, o operador visualiza a numeração do desenho, programa a sequência de cores associando cada etapa às agulhas disponíveis (1 a 6, 9 ou 12) e ajusta a orientação.",
      "3. O tecido estruturado com entretela ou o boné montado é fixado no bastidor tubular ou no aro de boné em 270° e travado no pantógrafo.",
      "4. O operador realiza o traçado manual de área perimetral para confirmar que a agulha não atingirá a borda do bastidor.",
      "5. Ao acionar o botão de partida, o motor acelera suavemente com rotação silenciosa até atingir a velocidade de cruzeiro de até 1.000 ou 1.200 PPM.",
      "6. A cada mudança de cor, o cabeçote efetua o corte automático da linha, recolhe a ponta superior e desloca a barra de agulha com sincronismo perfeito."
    ],
    beginnerExplanation: "Você sabia que a famosa Toyota, fabricante de carros como o Corolla e a Hilux, nasceu na verdade como uma fábrica de máquinas de tecer e bordar no Japão? No mundo do bordado profissional, as máquinas da linha Toyota Expert são verdadeiras joias clássicas! Elas são tão resistentes, suaves e bem feitas que até hoje, décadas após a fabricação, continuam bordando bonés, toalhas e camisas com uma perfeição e um brilho de ponto cheio que deixa qualquer um encantado!",
    applications: [
      "Bordados industriais de alta precisão em camisas polo, uniformes corporativos e jalecos",
      "Bordados em bonés montados estruturados em 270° com o dispositivo cilíndrico de boné",
      "Bordados em peças tubulares prontas como mangas, punhos, bolsas e mochilas",
      "Personalização de emblemas, distintivos e patches termocolantes com pontos de alta densidade",
      "Trabalhos pesados em tecidos encorpados como brim, lona, couro e jaquetas esportivas"
    ],
    mainTypes: [
      "Toyota Expert AD800 / AD820 (6 Agulhas): O clássico modelo compacto de entrada industrial que popularizou os ateliês profissionais",
      "Toyota Expert AD830 / AD850 (9 Agulhas): Modelo intermediário de alta agilidade para produções comerciais com maior variedade de cores",
      "Toyota Expert AD860 (12 Agulhas): A máquina topo de linha da série Expert com 12 agulhas e velocidade de até 1.200 PPM",
      "Toyota Multi-Cabeças: Versões industriais de 2, 4 e 6 cabeças para confecções de alto volume"
    ],
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM para peças planas normais; 650 a 750 PPM para bonés estruturados",
      needleType: "Sistema industrial de cabo redondo DBxK5 (tamanhos 70/10 para malhas a 90/14 para bonés e brim)",
      stabilizer: "Entretela rasgável de 70g/m² a 80g/m² ou entretela resinada especial para bonés estruturados"
    },
    advantages: [
      "✔ Mecânica japonesa de precisão cirúrgica de durabilidade lendária e baixíssimo índice de manutenção",
      "✔ Formato .10O consagrado e suportado por praticamente todos os softwares de digitalização profissionais",
      "✔ Funcionamento extremamente macio e silencioso em comparação com máquinas convencionais da época",
      "✔ Braço tubular longo e fino que facilita o manuseio de peças tubulares pequenas e bonés montados"
    ],
    limitations: [
      "Modelos clássicos utilizavam originalmente comunicação serial RS-232C ou disquetes, demandando atualização para emulador USB.",
      "Utiliza agulhas industriais de cabo redondo (DBxK5), exigindo atenção manual para o correto alinhamento da cava."
    ],
    commonErrors: [
      "❌ Iniciar o bordado sem converter a matriz para o formato proprietário .10O ou universal .DST.",
      "❌ Instalar a agulha DBxK5 com a cava virada para frente em vez de voltada para trás (direção da laçadeira).",
      "❌ Deixar de engraxar as engrenagens cônicas e lubrificar a laçadeira com óleo mineral apropriado periodicamente.",
      "❌ Esquecer de fazer o teste manual de área antes de iniciar a operação em bastidores de boné."
    ],
    troubleshootingTips: [
      "Erro de leitura de matriz na porta USB emulada: Verifique se o pendrive está formatado em FAT16/FAT32 com arquivos nomeados com até 8 caracteres sem símbolos especiais.",
      "Ruído seco no braço tubular durante o bordado: Pingue uma gota de óleo mineral na pista da laçadeira rotativa e gire o volante manualmente uma volta.",
      "Quebra frequente de agulha em bonés estruturados: Certifique-se de que a agulha é DBxK5 de espessura adequada (85/13 ou 90/14) e que a velocidade foi reduzida para 700 PPM."
    ],
    dicaArtrelados: "As máquinas da linha Toyota Expert são famosas por produzirem um ponto acetinado muito fechado e com brilho impecável! Mas preste muita atenção na instalação da agulha DBxK5: como o cabo dela é redondo, use uma chavinha de fenda pequena encostada na lâmina para garantir que a cava fique exatamente virada para trás (na posição das 12 horas). Isso evita que a ponta da laçadeira japonesa encoste na agulha e garante um bordado macio e sem falhas!",
    "voceSabia": "O fundador da Toyota, Sakichi Toyoda, é reverenciado no Japão como o 'Rei dos Inventores'! Em 1924, ele inventou o primeiro tear mecânico automático do mundo com parada instantânea ao romper o fio, criando o conceito industrial de 'Jidoka' (automação com toque humano), que deu origem ao mundialmente famoso Sistema Toyota de Produção (Lean Manufacturing), hoje aplicado em fábricas do mundo inteiro!",
    "practicalExercise": "Exportando uma Matriz para Formato Toyota .10O: Abra o seu programa de bordado (como Wilcom ou Embird). Abra uma matriz qualquer de logotipo. Vá no menu Arquivo > Salvar Como / Exportar, selecione a extensão 'Toyota (*.10O)' e salve no pendrive. Conecte na sua máquina Toyota Expert e veja os pontos e as paradas de agulha serem reconhecidos instantaneamente com a máxima fidelidade japonesa!",
    "quickSummary": "Lendária fabricante japonesa (Aichi, 1926), berço do grupo Toyota, célebre pela histórica linha industrial compacta Toyota Expert (AD800 a AD860 de 6 a 12 agulhas) e pelo clássico formato de arquivo .10O.",
    "relatedTerms": [
      "Tajima",
      "Barudan (Máquinas de Bordado Eletrônico)",
      "HappyJapan (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Agulha DBxK5",
      "Bastidor de Boné",
      "Velocidade PPM"
    ],
    tags: [
      "t-105",
      "toyota",
      "expert",
      "ad860",
      "ad850",
      "ad800",
      "maquinas",
      "equipamento",
      "10o",
      "japonesa",
      "artrelados"
    ],
    bibliographicReferences: [
      "TOYOTA APPAREL EQUIPMENT / AISIN SEIKI CO., LTD. Instruction and Parts Manual: Toyota Expert AD850 / AD860 Series. Kariya: Toyota, 2020.",
      "TOYOTA MOTOR CORP. The Heritage of Sakichi Toyoda and Textile Machinery Engineering. Nagoya, 2021.",
      "ARTRELADOS. Tradição e Robustez: O Legado das Máquinas Japonesas Toyota no Bordado Profissional. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  },
  {
    id: "t-106-tajima-maquinas-de-bordado-eletronico",
    code: "T-106",
    term: "Tajima (Máquinas de Bordado Eletrônico)",
    pronunciation: "ta-ji-ma (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "T",
    level: "Intermediário a Avançado 🟡🔴",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Fundada em 1944 em Nagoya (Japão) por Tokujiro Tajima como Tajima Kogyo Co., Ltd. Em 1964, a Tajima revolucionou a história mundial da indústria têxtil ao desenvolver a primeira máquina de bordar multi-cabeças do planeta (modelo TM). Nos anos 1970 e 1980, desenvolveu a tecnologia pioneira de fita de papel perfurado e o formato binário .DST (Tajima Data Stitch), que se estabeleceu como o padrão universal absoluto e definitivo de todo o bordado computadorizado global.",
    summary: "Fabricante japonesa máxima (Nagoya, 1944), líder mundial incontestável em tecnologia industrial, criadora do formato universal .DST, pioneira da tecnologia de calcador digital DCP e do sistema inteligente de linha i-TM.",
    definition: "A Tajima é internacionalmente reverenciada como o padrão ouro máximo e a maior inovadora global em engenharia mecatrônica de bordado computadorizado. O Tajima Group desenvolve desde modelos industriais compactos de alta precisão (como a sofisticada Tajima SAI de 8 agulhas e as séries tubulares TMBR-SC e TMBP-SC de 1 cabeça e 15 agulhas) até imponentes linhas industriais planas e tubulares de 2, 4, 6, 8, 12 e até 56 cabeças de produção em massa. Notabilizou-se pela invenção da tecnologia patenteada DCP (Digitally Controlled Presser Foot - Calcador Controlado Digitalmente), corte dinâmico de altíssima velocidade, sistema inteligente de balanceamento de tensão i-TM e pela criação do consagrado formato de arquivo .DST.",
    technicalDetails: "Acionamento mecatrônico de alta precisão por servomotores AC japoneses de altíssima inércia e resposta imediata com parada em ponto morto superior a 100°. Velocidade contínua ajustável de 450 a 1.200 PPM com nível de vibração próximo de zero. Sistema patenteado DCP que mede eletronicamente a espessura do material e ajusta a altura de descida do calcador a cada ponto em frações de milissegundo. Sistema i-TM (Intelligent Thread Management) para alimentação automatizada de linha sem ajuste manual por atrito mecânico. Laçadeiras rotativas verticais japonesas Koban e formato nativo/universal .DST.",
    construction: [
      "Chassi monobloco em ferro fundido especial com estabilização térmica para eliminação total de vibrações em alta velocidade",
      "Tecnologia patenteada DCP com calcador eletrônico acionado por servomotor digital independente",
      "Sistema de alimentação inteligente de linha i-TM que calcula e entrega o comprimento exato de linha para cada ponto",
      "Braço tubular de perfil ultra estreito reforçado para rotação de bonés em 270°/360° e peças tubulares profundas",
      "Painel de comando digital colorido touchscreen de alta resolução com interface intuitiva e suporte multilíngue",
      "Laçadeiras rotativas verticais japonesas Koban de alta precisão milimétrica com lubrificação microdosada",
      "Dispositivo de corte de linha de curso ultracurto com retentor elétrico de fio superior para recomeço invisível"
    ],
    howItWorks: [
      "1. A matriz de bordado criada em formato nativo universal Tajima .DST é transferida para o computador da máquina via pendrive USB, cabo de rede LAN ou sistema DG by Pulse.",
      "2. No painel digital colorido, o operador visualiza o desenho, programa a sequência de cores entre as agulhas (1 a 8, 12 ou 15) e define os parâmetros do calcador digital DCP.",
      "3. O tecido estruturado ou o boné é encaixado no bastidor tubular ou aro de boné em 270° e travado com precisão milimétrica no pantógrafo reforçado.",
      "4. O operador aciona o teste perimetral com ponteiro laser para validar visualmente os limites da área útil de bordado.",
      "5. Ao acionar o botão de início, a máquina acelera com suavidade impressionante até atingir a velocidade de cruzeiro de até 1.200 PPM.",
      "6. A cada mudança de cor, o cabeçote executa o corte automático de linha em frações de segundo, desloca a barra de agulha e retoma o bordado com perfeição cirúrgica."
    ],
    beginnerExplanation: "A Tajima é a marca número um do mundo, o verdadeiro padrão ouro absoluto do bordado industrial! Sabe quando você vê um bordado perfeito de marcas famosas como Nike ou Adidas, ou o escudo de um time de futebol famoso, sem nenhuma pontinha de linha solta e com um brilho de ponto cheio deslumbrante? Quase sempre foi feito em uma Tajima! Foi a Tajima quem inventou o famoso arquivo .DST, que é o formato que toda máquina de bordar do planeta sabe ler. Ter uma Tajima no ateliê é o maior sonho de qualquer bordador profissional!",
    applications: [
      "Bordados industriais de altíssimo luxo em camisas polo, ternos, jaquetas e uniformes corporativos de alto padrão",
      "Bordados em bonés montados estruturados em 270° e 360° com o dispositivo rotativo de boné Tajima",
      "Bordados em peças tubulares difíceis como mangas de camisas, punhos, meias, pernas de calça e mochilas",
      "Confecção de emblemas, brasões militares e patches termocolantes com máxima densidade de ponto",
      "Bordados em alto relevo 3D (EVA) com definição angular perfeita utilizando a tecnologia do calcador DCP"
    ],
    mainTypes: [
      "Tajima SAI (8 Agulhas): O modelo compacto industrial mais refinado do mundo, ideal para boutiques e quiosques de personalização",
      "Tajima TMBR-SC / TMBP-SC (15 Agulhas): As máquinas tubulares de 1 cabeça mais famosas do planeta com tecnologia de calcador DCP",
      "Tajima Multi-Cabeças (Séries TFMX e TMAR): Linhas industriais pesadas de 2 a 30 cabeças para produções industriais em larga escala",
      "Tajima Especializadas (Chenille / Lantejoulas / Cordão): Equipamentos híbridos para efeitos de moda e alta-costura"
    ],
    recommendedSettings: {
      speedPPM: "950 a 1.200 PPM para tecidos planos normais; 750 a 850 PPM para bonés estruturados e relevo 3D",
      needleType: "Sistema industrial de cabo redondo DBxK5 (tamanhos 65/9 para detalhes ultrafinos a 90/14 para bonés e sarja)",
      stabilizer: "Entretela rasgável de alta densidade (70 a 80 g/m²) ou entretela resinada especial para bonés"
    },
    advantages: [
      "✔ Líder mundial incontestável em qualidade de ponto, durabilidade mecânica e retenção de valor de revenda",
      "✔ Tecnologia exclusiva de Calcador Controlado Digitalmente (DCP) que elimina o enrugamento do tecido e falhas de ponto",
      "✔ Sistema de alimentação de linha i-TM que simplifica a tensão e assegura equilíbrio perfeito ponto a ponto",
      "✔ Criadora do formato de arquivo .DST, garantindo 100% de compatibilidade e fidelidade com qualquer software de criação"
    ],
    limitations: [
      "Equipamento de investimento financeiro elevado, posicionado no segmento de máxima categoria industrial.",
      "Utiliza agulhas industriais de cabo redondo (DBxK5), demandando atenção manual para o correto alinhamento da cava."
    ],
    commonErrors: [
      "❌ Operar o calcador DCP com altura descalibrada para apliques em alto relevo 3D com EVA, amassando o material.",
      "❌ Deixar de fazer o teste perimetral com o ponteiro laser antes de iniciar a operação em aros de boné.",
      "❌ Utilizar carretilhas de baixa qualidade com rebarbas mecânicas na laçadeira de tolerância micrométrica japonesa.",
      "❌ Utilizar lubrificantes não homologados nos eixos e rolamentos lineares de alta precisão do cabeçote."
    ],
    troubleshootingTips: [
      "Tecido levantando junto com a agulha em tecidos felpudos (flagging): Ajuste a altura mínima do calcador digital DCP no painel touch para que ele desça ligeiramente mais rente à base.",
      "Bordado em alto relevo 3D perdendo volume: Eleve a altura de trabalho do calcador DCP em 0,8 mm a 1,0 mm para não comprimir a espuma de EVA durante a perfuração.",
      "Quebra de linha em tecidos elásticos: Verifique a calibração do sensor de alimentação inteligente i-TM no menu de tensão automática."
    ],
    dicaArtrelados: "Se você tiver o privilégio de bordar em uma Tajima equipada com calcador digital DCP, explore o ajuste fino de altura ponto a ponto! Para bordados 3D com EVA em bonés, programe a descida do calcador para ficar 0,8 mm a 1,0 mm acima do tecido: o calcador não amassa o relevo da espuma, a agulha penetra suave e as quinas do seu bordado em relevo ficam tão nítidas e esculpidas que parecem moldadas em metal!",
    voceSabia: "O formato de arquivo .DST (Tajima Data Stitch) foi criado originalmente no final da década de 1970 para ser lido por fitas de papel perfurado (Punch Cards)! A lógica binária japonesa desenvolvida pelos engenheiros da Tajima foi tão perfeita e econômica que, mesmo após quase cinco décadas e o surgimento de tecnologias digitais ultrassofisticadas, o .DST continua sendo a língua franca indiscutível de todas as máquinas de bordar do planeta Terra!",
    practicalExercise: "Operando o Enquadramento de Boné na Tajima: Pegue um boné estruturado e posicione-o na estação de enquadramento cilíndrica oficial Tajima. Estique a fita de aço flexível sobre a costura da aba, encaixe o aro no braço tubular da máquina até travar e acione o teste perimetral óptico a laser. Observe a fluidez impecável do movimento de rotação em 270° guiado pelos servomotores japoneses!",
    quickSummary: "Fabricante japonesa máxima (Nagoya, 1944), líder mundial indiscutível em tecnologia industrial, criadora do formato universal .DST, pioneira da tecnologia de calcador digital DCP e do sistema inteligente de linha i-TM.",
    relatedTerms: [
      "Barudan (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Agulha DBxK5",
      "Bastidor de Boné",
      "Calcador de Bordado",
      "Velocidade PPM"
    ],
    tags: [
      "t-106",
      "tajima",
      "sai",
      "tmbr",
      "tmbp",
      "dcp",
      "itm",
      "dst",
      "maquinas",
      "equipamento",
      "japonesa",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA GROUP / TOKAI INDUSTRIAL SEWING MACHINE CO., LTD. Instruction and Technology Manual: TMBR / TMBP & DCP Series. Kasugai: Tajima, 2023.",
      "TAJIMA GROUP. 80 Years of World Leadership in Industrial Embroidery Machinery. Nagoya, 2024.",
      "ARTRELADOS. A Engenharia Tajima e o Padrão Ouro do Bordado Computadorizado Mundial. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  },
  {
    id: "t-107-tajima-dg-by-pulse-software-de-digitalizacao-industrial",
    code: "T-107",
    term: "Tajima DG by Pulse (Software de Digitalização Industrial)",
    pronunciation: "ta-ji-ma de-gê bai pal-se (sof-tu-ér de di-gi-ta-li-za-ção in-dus-tri-al)",
    letter: "T",
    level: "Avançado 🔴",
    category: "Softwares & Programação",
    grammarClass: "Substantivo próprio / Marca de software / Locução substantiva.",
    origin: "Desenvolvido a partir do final da década de 1980 pela empresa canadense Pulse Microsystems Ltd. (Mississauga, Ontário) em aliança tecnológica estratégica exclusiva e global com o Tajima Group (Nagoya, Japão). Foi o primeiro software de bordado industrial do mundo a ser desenvolvido nativamente para ambiente gráfico computacional com controle direto e vetorial dos comandos mecatrônicos de máquinas multi-cabeças.",
    summary: "Suíte de digitalização industrial de topo mundial (Pulse / Tajima Group), referência máxima em mecatrônica de bordado para controle vetorial do calcador digital DCP, geração de bordados em alto relevo 3D de alta densidade, lantejoulas e automação fabril em rede.",
    definition: "O Tajima DG by Pulse (frequentemente abreviado como DG/ML by Pulse ou Tajima DG16) é internacionalmente reconhecido, ao lado do Wilcom EmbroideryStudio, como um dos dois maiores e mais avançados ecossistemas de software de digitalização profissional e automação industrial do planeta. Criado sob medida para extrair 100% do potencial da engenharia mecânica das máquinas Tajima, o software destaca-se por integrar o desenho vetorial de pontos diretamente aos microcontroladores da máquina: controla digitalmente a altura e a pressão do calcador eletrônico DCP (Digitally Controlled Presser Foot) ponto a ponto, programa dispositivos de lantejoulas duplas, cordões e corte a laser, e gerencia redes industriais inteiras de máquinas através do sistema Pulse Cloud e Tajima LAN.",
    technicalDetails: "Arquitetura paramétrica baseada no formato mestre vetorial .PXF (Pulse eXtended Format) e geração pura do código de máquina binário .DST. Algoritmo avançado de compensação de repuxo vetorial variável por espessura de tecido (Variable Pull Compensation), controle de comprimento de salto com desaceleração dinâmica, suporte nativo aos dados de comando de calcador eletrônico DCP embutidos na matriz e integração direta com o sistema de nuvem Pulse Cloud para aprovação de amostras por clientes via navegador e dispositivos móveis.",
    construction: [
      "Ambiente de Digitalização Vetorial: Motor gráfico avançado com suporte a curvas Bézier de precisão milimétrica e preenchimentos orgânicos",
      "Controle Mecatrônico DCP: Módulo que programa a altura exata de subida e descida do calcador da máquina Tajima para cada objeto do desenho",
      "Módulo 3D Foam e Quinas Vivas: Algoritmo patenteado que calcula a perfuração angular das extremidades para cortar o EVA 3D sem deixar pontas",
      "Pulse Cloud Networking: Plataforma em nuvem para envio de matrizes para máquinas Tajima em qualquer lugar do mundo e telemetria de produção",
      "Módulo de Efeitos Especiais: Controle digital de cabeçotes de lantejoulas, dispositivo de cordão (coiling), corte a laser e perfuração (boring)",
      "Vetorizador Automático Autodigitizing: Converte logotipos vetoriais do Adobe Illustrator e CorelDRAW em pontos industriais perfeitos",
      "Formatos Suportados: .PXF nativo, .DST universal, .DSB, .EXP, .PES, .JEF, .TAP, .U01 e mais de 50 extensões industriais"
    ],
    howItWorks: [
      "1. O programador de bordado importa a arte vetorial do cliente (AI, EPS, PDF ou SVG) diretamente para a área de trabalho do Tajima DG by Pulse.",
      "2. Utilizando as ferramentas de ponto cheio e tatami, define o sentido dos ângulos de ponto para criar o direcionamento ideal de luz e relevo.",
      "3. Em logotipos em alto relevo 3D para bonés, ativa o recurso '3D Foam', que cria automaticamente os pontos de corte de quina viva para decepar a espuma de EVA.",
      "4. Nas propriedades de cada objeto, calibra a altura do calcador digital DCP (ex.: 2,5 mm para o relevo 3D e 0,8 mm para o contorno plano).",
      "5. O programador salva o arquivo mestre em formato vetorial editável .PXF e exporta o arquivo de produção industrial Tajima .DST.",
      "6. Através do sistema de rede Pulse LAN ou Pulse Cloud, a matriz é enviada via cabo de rede diretamente para a memória da máquina Tajima na fábrica!"
    ],
    beginnerExplanation: "O Tajima DG by Pulse é o programa de computador que as maiores fábricas de roupas e uniformes do mundo usam para criar os bordados mais perfeitos do mercado! Sabe aqueles bordados em alto relevo super altos e duros que você vê em bonés originais da New Era ou da Fórmula 1, onde o relevo é tão perfeito que parece uma escultura plástica? O programador fez isso no Pulse! Ele conversa diretamente com a máquina Tajima, dizendo até a altura exata que o pezinho da máquina (calcador) tem que descer em cada pontinho para não amassar o relevo!",
    applications: [
      "Digitalização industrial de alta complexidade para uniformes esportivos, marcas de luxo e montadoras automotivas",
      "Criação de matrizes perfeitas para bonés estruturados em relevo 3D (EVA) com a tecnologia de corte de quina viva",
      "Programação de dispositivos industriais especiais como lantejoulas duplas, cordões e corte a laser integrado",
      "Automação e gestão de chão de fábrica com envio de matrizes em tempo real para dezenas de máquinas Tajima via rede",
      "Personalização corporativa em massa através de criação de códigos de barras para carregamento automático de matrizes"
    ],
    mainTypes: [
      "Tajima DG Composer: Nível profissional voltado para criação de letras, monogramas de alto padrão e edição avançada",
      "Tajima DG Creator: Nível intermediário completo para digitalização manual vetorial e pequenas confecções industriais",
      "Tajima DG Illustrator Extreme: O nível topo de linha máximo com controle total mecatrônico de calcador DCP, 3D Foam e efeitos especiais",
      "Pulse Cloud / Passport: Sistema corporativo em nuvem para gerenciamento de fluxo de trabalho de bordado e pedidos online"
    ],
    recommendedSettings: {
      speedPPM: "Gera matrizes industriais de alta performance para operar com estabilidade máxima de 850 a 1.200 PPM em máquinas Tajima",
      needleType: "Calibrado com perfeição para o sistema de agulhas industriais de cabo redondo DBxK5 (tamanhos 65/9 a 90/14)",
      stabilizer: "Entretelas industriais de alta densidade (70 a 80 g/m²) e espumas especiais de EVA 3D de 2 mm a 3 mm"
    },
    advantages: [
      "✔ Integração mecatrônica exclusiva com as máquinas Tajima, permitindo controlar o calcador digital DCP direto pelo software",
      "✔ O melhor algoritmo da indústria mundial para bordados em alto relevo 3D com EVA, gerando quinas vivas sem falhas",
      "✔ Formato mestre .PXF extremamente robusto que preserva 100% dos dados vetoriais, atributos de pontos e comandos especiais",
      "✔ Sistema Pulse Cloud de vanguarda que permite monitorar a produção da fábrica em tempo real pelo celular"
    ],
    limitations: [
      "Software industrial de alto investimento financeiro, direcionado para empresas, digitalizadores profissionais e confecções.",
      "Curva de aprendizado técnico avançada, exigindo conhecimentos aprofundados sobre física de pontos e mecatrônica têxtil."
    ],
    commonErrors: [
      "❌ Exportar matrizes em .DST sem salvar o arquivo mestre em .PXF, perdendo as propriedades vetoriais editáveis do desenho.",
      "❌ Programar objetos de relevo 3D sem fechar as pontas do contorno, permitindo que a espuma de EVA fique aparente após o bordado.",
      "❌ Configurar valores incorretos de altura do calcador DCP nas propriedades do objeto, fazendo o calcador bater no bastidor.",
      "❌ Utilizar densidades excessivas (inferiores a 0,30 mm) em bordados 3D com linhas metálicas, causando quebras sucessivas."
    ],
    troubleshootingTips: [
      "Espuma de EVA aparecendo nas quinas do bordado 3D: No Pulse, selecione o objeto, acione a propriedade '3D Foam Capping' e aumente o ângulo de fechamento para 45°.",
      "Calcador da máquina amassando o relevo em bonés: No menu de atributos do objeto no software, aumente a altura programada do calcador DCP em +0,8 mm.",
      "Arquivo não transfere via rede Pulse LAN: Verifique o endereço de IP da máquina Tajima no painel touch e confirme a liberação da porta de comunicação no roteador."
    ],
    dicaArtrelados: "No Tajima DG by Pulse, ao digitalizar letras em relevo 3D para bonés, ative sempre a função '3D Foam Underlay' com fechamento duplo de pontas! O software cria uma linha de perfuração perpendicular exata na beiradinha da letra que funciona como uma lâmina invisível: quando a máquina termina de bordar, você puxa o excesso de EVA com os dedos e ele se solta de forma tão limpa e perfeita que você não precisa nem passar o soprador térmico!",
    voceSabia: "A Pulse Microsystems foi a primeira empresa de software de bordado do mundo a criar um sistema de digitalização baseado na nuvem (Cloud Computing) e a integrar códigos de barras em ordens de serviço têxteis! Em grandes fábricas industriais, o operador da máquina Tajima só precisa escanear um código de barras impresso na ordem de serviço com um leitor óptico: o software na nuvem localiza a matriz correta e carrega o desenho no visor da máquina em menos de 2 segundos!",
    practicalExercise: "Programando a Altura do Calcador DCP no Tajima DG by Pulse: Abra o software e crie um círculo com ponto cheio largo (simulando um aplique). Abra a janela de 'Object Properties' (Propriedades do Objeto). Localize a aba 'DCP Settings'. Altere a altura padrão de descida do calcador de 'Auto' para 'Manual: +1.2 mm'. Ao bordar esse arquivo na sua Tajima, observe como o calcador flutua suavemente sobre a espessura do aplique sem esmagar o tecido!",
    quickSummary: "Suíte de digitalização industrial de topo mundial (Pulse / Tajima Group), referência máxima em mecatrônica de bordado para controle vetorial do calcador digital DCP, relevo 3D de alta densidade e automação fabril em rede.",
    relatedTerms: [
      "Tajima (Máquinas de Bordado Eletrônico)",
      "Wilcom EmbroideryStudio",
      "Formato DST",
      "Bordado 3D com EVA",
      "Calcador de Bordado",
      "Compensação de Encolhimento",
      "Densidade de Ponto",
      "Velocidade PPM"
    ],
    tags: [
      "t-107",
      "tajima-dg",
      "pulse",
      "pxf",
      "dst",
      "dcp",
      "foam-3d",
      "industrial",
      "softwares",
      "programacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "PULSE MICROSYSTEMS LTD. Tajima DG by Pulse User Guide & Advanced Digitizing Reference Manual. Mississauga: Pulse, 2023.",
      "TAJIMA GROUP. Software and Mecatronics Integration in Industrial Embroidery. Nagoya, 2023.",
      "ARTRELADOS. A Nobreza dos Softwares Industriais: Precisão Mecatrônica e Produção de Alta Escala com o Tajima DG by Pulse. Curitiba, 2024."
    ],
    updatedAt: "2026-09-06"
  },
  {
    id: "t-108-trava-de-seguranca-alavanca-calcador-sensor-altura",
    code: "T-108",
    term: "Trava de Segurança da Alavanca do Calcador e Sensor de Altura (Presser Foot Safety Lock & Lifter Sensor)",
    pronunciation: "trá-va de se-gu-ran-ça da a-la-vân-ca do cal-ca-dor e sen-sor de al-tu-ra (pré-sser fut seif-ti lók end líf-ter sén-sor)",
    letter: "T",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Desenvolvida com a eletrificação e microprocessamento das máquinas de costura e bordado nos anos 1980 e 1990 no Japão (Brother, Janome e Juki). Foi criada como um circuito de intertravamento de segurança obrigatório para evitar acidentes graves com os dedos da operadora e impedir a quebra violenta de agulhas e discos de tensão quando a máquina é acionada por engano com o calcador erguido.",
    summary: "Dispositivo mecatrônico composto por uma trava mecânica de retenção biestável e um sensor eletrônico (óptico ou microrruptor) acoplado à alavanca do calcador que bloqueia o motor principal se o pé estiver levantado e comuta a liberação dos discos de tensão superior.",
    definition: "A Trava de Segurança da Alavanca do Calcador e seu Sensor de Altura (Presser Foot Lifter Sensor & Safety Lockout Mechanism) formam o sistema primário de proteção operacional e intertravamento eletromecânico das máquinas de costura e bordado eletrônico. A alavanca de elevação do calcador possui duas posições mecânicas padronizadas: Posição Baixa (engatada para trabalho, onde a mola comprime o tecido e os discos de tensão se fecham) e Posição Alta (levantada para inserção do bastidor, troca de tecido ou passagem de linha, com abertura forçada dos discos tensores). O conjunto mecatrônico atua em duas frentes vitais: (1) Bloqueio Eletrônico de Partida (Safety Interlock): um sensor óptico de fenda ou microrruptor lê a posição da alavanca; se a bordadeira pressionar o botão 'Start' ou pisar no pedal com o calcador erguido, o processador corta instantaneamente a ignição do motor, acende uma luz de alerta vermelha e exibe a mensagem 'Abaixe o Calcador' no painel touch, impedindo a formação catastrófica de 'ninhos de linha' gigantes na laçadeira; e (2) Trava de Altura Extra (Extra Lift Position): uma lingueta mecânica com ressalto de came que permite empurrar a alavanca além do batente normal (ganhando de 3 mm a 6 mm extras de vão livre) para acomodar a borda volumosa de bastidores, mantas grossas, toalhas e jaquetas sem forçar o cabeçote.",
    technicalDetails: "O sensor de detecção opera sob lógica digital de 5V TTL através de uma chave microswitch de contato banhado a ouro ou fototransistor infravermelho de barreira com tempo de resposta inferior a 2 milissegundos. A trava mecânica do came é usinada em liga de zinco ou náilon com fibra de vidro, possuindo ranhura de clique de retenção calibrada para suportar a carga de retorno da mola mestra do calcador (até 15 N). O conjunto integra a barra de alívio do tensor (Tension Release Cam Pin), garantindo que ao elevar a alavanca, um pino de aço empurre o disco móvel do conjunto tensor em 0,8 mm a 1,2 mm, liberando a linha superior para ser puxada livremente sem resistência.",
    construction: [
      "Alavanca Externa do Calcador (Lifter Lever): Haste ergonômica metálica ou plástica situada na lateral ou traseira do cabeçote",
      "Came Excêntrico de Elevação (Lift Cam): Ressalto mecânico que converte o giro da alavanca na elevação linear da barra do calcador",
      "Pino Desarmador do Disco de Tensão (Tension Release Pin): Haste de aço que afasta os pratos do tensor superior ao levantar o calcador",
      "Sensor Eletrônico de Posição (Foot Position Sensor): Microrruptor ou sensor óptico que informa a CPU sobre a posição do calcador",
      "Trava de Altura Estendida (Extra-Lift Stop): Batente com mola que sustenta o calcador em altura máxima temporária para tecidos grossos",
      "Luz Indicadora de Segurança (Start/Stop LED): Indicador luminoso que fica vermelho quando o calcador está alto e verde quando está abaixado e pronto para bordar"
    ],
    howItWorks: [
      "1. A bordadeira levanta a alavanca para encaixar o bastidor sob a agulha.",
      "2. O came mecânico sobe a barra do calcador e o pino desarmador abre os discos de tensão para soltar a linha.",
      "3. Uma palheta metálica sai da frente do sensor óptico interno (ou desativa o microrruptor).",
      "4. A placa-mãe lê o circuito aberto: o botão de partida fica vermelho e o motor é eletricamente travado.",
      "5. Se a usuária apertar o botão Start, a máquina emite um bipe de alerta e não roda.",
      "6. A bordadeira abaixa a alavanca: o calcador assenta sobre o tecido, os pratos de tensão se fecham abraçando o fio e o sensor fecha contato.",
      "7. O botão de partida acende a luz verde radiante: a máquina autoriza o início do bordado com 100% de segurança!"
    ],
    beginnerExplanation: "A Trava e o Sensor do Calcador são o 'anjo da guarda' da sua máquina! Sabe aquele botão de ligar que fica VERMELHO quando o pezinho da máquina está levantado e só fica VERDE quando você abaixa a alavanca? É esse mecanismo! Se você tentasse bordar com o pezinho levantado, a linha ficaria solta sem pressão nenhuma, embolaria um novelo gigante de linha embaixo da chapa, quebraria a agulha na hora e poderia até machucar seu dedo! Por isso, a máquina tem esse sensor inteligente que diz: 'Opa, o pezinho está alto, eu não vou rodar nem um milímetro enquanto você não abaixar a alavanca!' E a alavanca ainda tem um 'segundo estágio' que sobe mais alto para você enfiar aquela toalha grossa sem amassar o bastidor!",
    "applications": [
      "Intertravamento elétrico de segurança que bloqueia o motor contra partidas acidentais com calcador levantado",
      "Abertura automática dos discos de tensão superior ao erguer o calcador para passar a linha ou retirar o bastidor",
      "Liberação do vão livre estendido (Extra Lift) para acomodar bastidores de boné, toalhas felpudas e couro",
      "Comunicação direta com o painel touch screen exibindo alertas gráficos de orientação à bordadeira",
      "Prevenção contra o enrolamento de linha no eixo da laçadeira provocado por falta de tensão superior"
    ],
    "mainTypes": [
      "Alavanca Traseira Manual com Microrruptor: O padrão consagrado em máquinas domésticas e semiprofissionais",
      "Sistema de Joelheira Mecânica ou Hidráulica: Permite erguer e travar o calcador com a pressão do joelho sem tirar as mãos do tecido",
      "Calcador Automatizado com Motor de Passo / Solenoide: Presente em máquinas modernas onde o calcador sobe e desce sozinho por comando digital",
      "Sensor de Sensorização Ultrassônica / Pressão Digital: Mede eletronicamente a espessura exata do tecido sob o calcador"
    ],
    "recommendedSettings": {
      "speedPPM": "Motor travado em 0 PPM com o calcador levantado; libera de 400 a 1.200 PPM assim que o sensor fecha contato",
      "needleType": "Universal para todas as agulhas",
      "stabilizer": "Universal para todas as entretelas"
    },
    "advantages": [
      "✔ Elimina 100% dos acidentes causados por bordar com linha frouxa e ninhos de linha na laçadeira",
      "✔ Alívio instantâneo da tensão que evita puxar a barra de agulha ao retirar a peça da máquina",
      "✔ Função Extra Lift que facilita o encaixe de bastidores altos sem riscar o tecido",
      "✔ Indicação visual clara através da mudança de cor do botão de partida (Verde / Vermelho)"
    ],
    "limitations": [
      "Se o sensor acumular poeira têxtil ou fiapos, pode acusar falsamente que o calcador está levantado mesmo quando abaixado.",
      "Se o microrruptor interno desalinhar por batida mecânica, a máquina se recusa a iniciar o bordado."
    ],
    "commonErrors": [
      "❌ Forçar a alavanca para cima além do limite do Extra Lift, quebrando o came plástico interno de acionamento.",
      "❌ Passar a linha na máquina com o calcador ABAIXADO (os pratos de tensão ficam fechados e a linha não entra entre eles).",
      "❌ Bater o aro do bastidor na alavanca do calcador ao movimentar peças volumosas na área de trabalho.",
      "❌ Ignorar a mensagem de alerta no visor e tentar forçar a rotação girando o volante à força."
    ],
    "troubleshootingTips": [
      "A máquina exibe a mensagem 'Abaixe o Pé Calcador' e o botão fica vermelho mesmo com a alavanca totalmente abaixada: O sensor óptico ou a alavanca interna do microrruptor está com penugem de linha presa; desmonte a tampa lateral e limpe o contato com pincel seco e álcool isopropílico.",
      "A linha fica completamente frouxa e cheia de laçadas embaixo do bordado logo no início: A bordadeira passou a linha superior com o calcador abaixado (o fio não entrou entre os discos tensores); levante a alavanca, refaça toda a passagem de linha e abaixe o calcador antes de apertar Start.",
      "A alavanca do calcador está 'mole' e cai sozinha sem segurar na posição levantada: A mola de retenção do came desarmou ou quebrou; substitua a mola de torção da alavanca na assistência técnica."
    ],
    "dicaArtrelados": "Grave para sempre essa Regra de Ouro da Artrelados: 'Para passar a linha na máquina, calcador SEMPRE NO ALTO; para bordar, calcador SEMPRE EMBAIXO!' Quando você levanta a alavanca, os pratinhos de tensão se abrem para a linha escorregar bem lá no fundo deles; se você passar a linha com o calcador abaixado, ela fica solta por fora dos discos e quando você aperta o Start a máquina dá aquele ninho de passarinho que trava tudo! Lembre-se sempre de olhar a luz do botão: luz verde no botão é paz no coração do ateliê!",
    "voceSabia": "Antes dos anos 1980, as máquinas de costura não tinham sensores eletrônicos no calcador. As operadoras frequentemente esqueciam de abaixar a alavanca e a linha superior corria totalmente solta, criando um nó tão violento na laçadeira que entortava o eixo da máquina! A introdução do simples sensor de 5 volts com luz verde/vermelha reduziu em mais de 70% os chamados de assistência técnica por travamento de laçadeira no mundo inteiro!",
    "practicalExercise": "Compreendendo o Alívio da Tensão com os Próprios Dedos: Com a máquina desligada e a linha passada normalmente na agulha, segure a ponta da linha perto da agulha com a mão. Com o calcador abaixado, puxe a linha: você sentirá uma resistência firme e pesada (os discos estão apertando o fio). Agora, levante a alavanca do calcador e puxe a linha de novo: ela corre soltinha e macia como seda! Esse milagre é a alavanca abrindo os discos tensores para você trabalhar em paz!",
    "quickSummary": "Dispositivo mecatrônico com trava de retenção e sensor eletrônico que bloqueia o motor se o pé estiver erguido e abre os discos de tensão para passagem suave da linha.",
    "relatedTerms": [
      "Calcador de Bordado",
      "Tensor Superior e Discos de Tensão",
      "Sensor de Quebra de Linha",
      "Laçadeira Rotativa",
      "Barra de Agulha e Bucha Guia",
      "Bastidor de Bordado"
    ],
    "tags": [
      "t-108",
      "trava-do-calcador",
      "sensor-de-altura",
      "alavanca-do-calcador",
      "presser-foot-lifter",
      "seguranca",
      "intertravamento",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES, LTD. Technical Manual: Presser Foot Sensor Microswitch & Interlock Circuitry. Nagoya, 2022.",
      "JANOME SEWING MACHINE CO. Safety Standards & Mechanical Sensor Architecture. Tokyo, 2023.",
      "ARTRELADOS. A Nobreza dos Mecanismos de Proteção: Segredos do Sensor do Calcador, Tensão e Segurança no Ateliê. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  },
  {
    "id": "t-109-trilho-linear-troca-de-cor-guia-carcaca",
    "code": "T-109",
    "term": "Trilho Linear de Troca de Cor / Guia de Deslizamento da Carcaça Frontal (Color Change Carriage Guide Rail & Linear Slide Track)",
    "pronunciation": "trí-lhu li-ne-ár de tró-ka de kór / gí-a de dez-li-za-mẽyn-tu da kar-ká-sa frõn-tál (ká-lor tchêindj ká-ridj gáid rêil end lí-ni-ar sláid træk)",
    "letter": "T",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Desenvolvido com a introdução das máquinas de bordar industriais automáticas japonesas (Tajima, Barudan e Happy) entre as décadas de 1970 e 1980. O salto tecnológico de cabeçotes monoagulha para blocos multiagulhas (de 6 a 15 agulhas) exigiu a criação de um sistema de trilho linear retificado com tolerâncias micrométricas para suportar o peso e a inércia do bloco seletor móvel, permitindo deslocamentos laterais velozes sem qualquer oscilação na distância crítica entre a agulha e a laçadeira rotativa.",
    "summary": "Barra de aço temperado retificada montada horizontalmente no cabeçote que serve de pista de alta precisão para o deslizamento lateral da carcaça de agulhas durante a troca de cor.",
    "definition": "O Trilho Linear de Troca de Cor e Guia de Deslizamento da Carcaça Frontal (tecnicamente denominado Color Change Carriage Guide Rail, Linear Slide Track, Trilho de Deslocamento do Cabeçote, Guia Prismática de Troca de Agulhas ou Eixo Guia da Carcaça Frontal) é o perfil guia usinado e retificado em aço temperado de alta resistência mecânica (ou perfil composto com pistas de rolamento retificadas) fixado horizontalmente na estrutura rígida do cabeçote de bordado industrial. Sua função cinemática primária é atuar como a pista de apoio e sustentação geométrica para os patins deslizantes da Carcaça Frontal de Agulhas (Needle Case Assembly). Durante a troca automática de cores (Color Change), o motor de passo ou servomotor translada todo o conjunto de agulhas e estica-fios sobre esse trilho linear. O Trilho Linear assegura três condições cinemáticas cruciais: paralelismo absoluto entre as canaletas das barras de agulha e a linha de centro da lançadeira; manutenção rigorosa da folga frontal milimétrica (cerca de 0,05 mm a 0,10 mm) entre a agulha ativa e a ponta da laçadeira rotativa independente da agulha selecionada (da agulha 1 à 15); e absorção integral das forças inerciais e das vibrações de impacto geradas pelas penetrações em rotações de 800 a 1.200 PPM, impedindo vibrações harmônicas que causariam perda de registro em contornos finos.",
    "technicalDetails": "Fabricado em aço-liga para rolamento AISI 52100 (100Cr6) temperado por indução superficial com dureza de 58 a 62 HRC e retificação de precisão centesimal (tolerância de retilinidade inferior a 0,005 mm por metro de comprimento). Planicidade e paralelismo das pistas de contato lapidadas com rugosidade Ra ≤ 0,2 µm. Fixado à estrutura de ferro fundido do cabeçote por parafusos Allen de classe 12.9 com torque de aperto de 4,5 N·m a 5,5 N·m. Equipado com raspadores de feltro nas extremidades dos patins para impedir a penetração de fiapos têxteis e pó de entretela nas pistas.",
    "construction": [
      "Perfil Retificado em Aço-Ferramenta Temperado e Estabilizado Termicamente",
      "Pistas de Deslizamento Prismáticas ou Cilíndricas com Retificação Centesimal",
      "Furos Rebaixados e Calibrados para Parafusos de Fixação Estrutural de Alta Rigidez",
      "Batentes Mecânicos Emborrachados de Fim de Curso em Ambas as Extremidades",
      "Raspadores Protetores de Feltro ou Poliuretano Integrados aos Patins Móveis",
      "Superfície Protegida com Tratamento de Oxidação Negra ou Cromo Duro Anticorrosão"
    ],
    "howItWorks": [
      "1. O comando de troca de cor é acionado pela matriz e o servomotor gira o fuso ou correia de tração.",
      "2. A Carcaça Frontal de Agulhas desliza suavemente sobre o Trilho Linear em movimento horizontal retilíneo.",
      "3. Os patins de baixo atrito absorvem o peso do bloco e guiam o movimento sem folgas laterais.",
      "4. O sensor de posicionamento óptico confirma a estação da nova agulha e freia o movimento.",
      "5. A agulha selecionada fica perfeitamente centralizada sob a biela do motor principal.",
      "6. A máquina reinicia a costura; o Trilho Linear absorve os impactos verticais de até 1.200 PPM.",
      "7. A rigidez do trilho mantém a ponta da agulha a exatos 0,05 mm da laçadeira em todas as 15 agulhas!"
    ],
    "beginnerExplanation": "O Trilho Linear de Troca de Cor é como os 'trilhos de um trem-bala de alta precisão' dentro do cabeçote da sua máquina de bordar! Sabe aquela carcaça bonita com 10, 12 ou 15 agulhas que corre de um lado para o outro quando a máquina troca de linha? Ela não corre solta nem pendurada no ar: ela anda em cima desse trilho de aço super polido e reto como uma régua de engenheiro. Se esse trilho estiver sempre bem limpinho e com uma gotinha de óleo, a troca de cor acontece num piscar de olhos, silenciosa e macia. Mas se o trilho ficar cheio de poeira de entretela ou sem óleo, a carcaça engasga, o motor de troca de cor faz força demais e o painel acusa erro de cor!",
    "applications": [
      "Sustentação estrutural e deslizamento retilíneo da carcaça frontal de agulhas em máquinas multiagulhas",
      "Manutenção constante da distância frontal entre agulha e laçadeira em todas as agulhas do cabeçote",
      "Eliminação de folgas laterais e vibrações que causariam falhas de contorno em bordados detalhados",
      "Amortecimento mecânico das forças de impacto transmitidas durante o bordado em alta rotação",
      "Garantia de trocas automáticas de cores velozes, silenciosas e sem perdas de passo"
    ],
    "mainTypes": [
      "Trilho Guia Prismático com Patins de Esferas Recirculantes (Padrão de alta precisão em máquinas Tajima e Barudan)",
      "Eixo-Guia Cilíndrico Retificado Duplo com Buchas Lineares de Bronze ou Teflon (Equipa modelos compactos)",
      "Trilho de Alumínio Anodizado com Fita de Aço Inox Retificada (Leveza para acelerações ultrarrápidas)",
      "Guia Linear com Amortecimento Magnético Integrado (Tecnologia de ponta para redução de ruído)"
    ],
    "recommendedSettings": {
      "speedPPM": "Garante estabilidade dinâmica em acelerações e frenagens de 0 a 1.200 PPM",
      "needleType": "Compatível com todas as agulhas DBxK5 de calibre 65/9 a 110/18",
      "stabilizer": "Universal para todas as entretelas e bases têxteis",
      "threadTension": "A ausência de trepidação no trilho assegura tensão de linha perfeitamente homogênea"
    },
    "advantages": [
      "✔ Movimento lateral ultrassuave que poupa o motor de troca de cor e economiza energia",
      "✔ Alinhamento milimétrico idêntico para todas as agulhas, da cor 1 à cor 15",
      "✔ Aço temperado de até 62 HRC imune ao desgaste mecânico durante décadas de uso",
      "✔ Manutenção simples e rápida realizada em minutos no próprio ateliê"
    ],
    "limitations": [
      "Sensível ao acúmulo de poeira de entretela e cola spray, que podem empastar com o óleo e endurecer o movimento.",
      "Se sofrer impacto mecânico direto (como queda de ferramentas ou batida de bastidor), pode sofrer marcas que travam o patim."
    ],
    "commonErrors": [
      "❌ Aplicar graxa pesada automotiva no trilho linear, criando uma pasta pegajosa com a poeira de linha que trava o cabeçote.",
      "❌ Deixar o trilho seco sem lubrificação por meses, causando desgaste abrasivo e chiado agudo na troca de cor.",
      "❌ Bater o bastidor ou ferramentas de ferro contra as pistas polidas do trilho, provocando dentes no metal.",
      "❌ Usar lixas ou esponjas de aço para limpar o trilho, destruindo a retificação centesimal e a camada temperada."
    ],
    "troubleshootingTips": [
      "A máquina trava no meio da troca de cor com aviso 'Color Change Time Out': O trilho linear está sujo de poeira ou seco; limpe as pistas com pano de microfibra umedecido em óleo mineral fino e comande trocas de cor de ponta a ponta.",
      "O contorno do bordado fecha perfeitamente nas agulhas centrais, mas fica ligeiramente torto nas pontas (agulha 1 ou 15): O trilho linear está com leve empenamento ou folga nos parafusos de sustentação lateral; verifique o aperto dos parafusos do trilho com chave Allen.",
      "O cabeçote emite um ruído de rangido ou vibração rouca ao transladar de cor: O feltro raspador do patim está seco e acumulou fiapos; limpe os feltros com pincel e adicione duas gotas de óleo de máquina em cada feltro."
    ],
    "dicaArtrelados": "O 'Teste do Deslizamento com a Ponta do Dedo da Artrelados': Com a máquina desligada e liberada a trava mecânica de cor (ou girando o seletor manual com suavidade), empurre a carcaça frontal devagarzinho de um lado para o outro. O movimento sobre o trilho deve parecer um 'patins no gelo' — liso, contínuo e sem nenhum degrau ou ponto duro! Se você sentir que em algum pedaço o trilho fica 'pesado' ou 'áspero', pare imediatamente: ali tem poeira acumulada ou falta de óleo. Limpe bem com um paninho macio, passe duas gotinhas de óleo de máquina e sinta a leveza voltar!",
    "voceSabia": "Os trilhos lineares de máquinas industriais de bordar utilizam o mesmo princípio e tolerâncias geométricas das máquinas de usinagem CNC aeroespaciais! Uma variação de míseros 0,02 mm na retitude desse trilho já seria suficiente para a agulha bater na borda da chapa e quebrar a 1.000 pontos por minuto!",
    "practicalExercise": "Inspeção e Limpeza do Trilho Linear: Com a máquina desligada, localize o trilho horizontal de metal brilhante por trás e na base da carcaça frontal de agulhas. Pegue um pano de microfibra limpo embebido com duas gotinhas de óleo mineral e passe suavemente de um lado ao outro por toda a extensão do trilho. Observe a sujeira preta de pó de entretela que sai no pano. Em seguida, acione a troca manual da agulha 1 para a 15 e sinta a diferença no som suave!",
    "quickSummary": "Barra retificada em aço temperado fixada no cabeçote que serve de guia de alta precisão para o deslocamento horizontal da carcaça de agulhas na troca automática de cor.",
    "relatedTerms": [
      "Carcaça Frontal Deslizante de Agulhas / Bloco Seletor de Cores do Cabeçote",
      "Troca Automática de Cores (Color Change)",
      "Motor de Troca de Cor (Color Change Motor)",
      "Bloco Condutor da Barra de Agulha / Engate de Arraste da Agulha Ativa",
      "Pino de Arraste da Barra de Agulha / Pino Condutor da Biela Principal",
      "Alavanca Estica-Fio / Conjunto Estica-Fio do Cabeçote (Take-Up Lever)"
    ],
    "tags": [
      "t-109",
      "trilho-linear",
      "guia-de-deslizamento",
      "linear-rail",
      "color-change-track",
      "troca-de-cor",
      "cabecote",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Linear Guide Rails, Carriage Tolerances and Color Change Standards. Nagoya: Tajima, 2023.",
      "BARUDAN CO., LTD. Linear Slide Tracks, Lubrication Protocols and Head Carriage Alignment. Ichinomiya, 2022.",
      "THK CO., LTD. Precision Linear Motion Systems in Textile and Embroidery Machinery. Tokyo: THK, 2021.",
      "ARTRELADOS. Patins no Gelo do Cabeçote: Como Cuidar do Trilho Linear de Troca de Cor e Eliminar Travamentos. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-07"
  }
];





import { Verbete } from "../types";

export const VERBETES_LETTER_U14: Verbete[] = [
  {
    id: "u-075-underlay-perpendicular-e-ancoragem-cruzada",
    code: "U-075",
    term: "Underlay Perpendicular e Ancoragem Cruzada (Perpendicular Grid & Cross-Hatch Underlay Architecture)",
    pronunciation: "an-der-lei per-pen-di-cu-lar e an-co-ra-gem cru-za-da",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do inglês 'underlay' (camada de base) e do latim 'perpendicularis' (a prumo, em ângulo de 90°). Princípio da engenharia estrutural têxtil para neutralizar o repuxo bidirecional.",
    summary: "Estratégia de digitalização que posiciona os pontos de sustentação exatamente a 90° em relação à camada de acabamento, criando uma malha indeformável sob o bordado.",
    definition: "O Underlay Perpendicular e Ancoragem Cruzada (Perpendicular Cross-Hatch Underlay & Orthogonal Stabilization) é uma metodologia avançada de programação estrutural de matrizes na qual as trajetórias dos subpontos de base são traçadas rigorosamente a 90 graus (ângulo ortogonal reto) em relação à direção angular dos pontos de cobertura (*topstitch*). Essa geometria dissipa as forças de tração mecânica da linha superior transversalmente às fibras do tecido, unindo o tecido e a entretela em um composto compósito rígido antes da passagem da agulha de acabamento e impedindo a formação de 'valas' ou afundamento dos pontos.",
    technicalDetails: "Programado com densidade aberta entre 1,5 mm e 2,5 mm e comprimento de ponto de 3,0 mm a 4,0 mm. Em preenchimentos tatami com ângulo de 45°, o underlay perpendicular deve ser gerado a 135° (ou malha dupla 45°/135°), garantindo recuo perimétrico (*inset distance*) de 0,6 mm a 1,0 mm das bordas para que nenhum ponto da base escape do contorno.",
    beginnerExplanation: "É como fazer uma grade de ferro cruzada antes de jogar o cimento! Se a linha bonita de cima vai deitada da esquerda para a direita, a costura de sustentação embaixo é feita em pé de cima para baixo. Isso trava o pano de um jeito tão firme que o tecido não encolhe nem enruga de jeito nenhum!",
    howItWorks: [
      "1. O software calcula o ângulo do preenchimento principal da matriz (ex: 30°).",
      "2. Gera automaticamente uma camada de ponto corrido longo ou tatami aberto a 120° (90° perpendicular).",
      "3. A máquina borda primeiro esse esqueleto cruzado, unindo o tecido à entretela.",
      "4. Em seguida, a máquina borda a camada de acabamento de cetim ou tatami denso.",
      "5. Os pontos de acabamento assentam como tábuas sobre vigas cruzadas, sem afundar nas fibras.",
      "6. O bordado final fica liso, uniforme e sem deformações nas bordas externas."
    ],
    applications: [
      "Bordados em malhas piquet, viscolycra e tecidos elásticos que repuxam facilmente.",
      "Grandes brasões corporativos e logotipos com preenchimentos densos.",
      "Bordados sobre toalhas felpudas e tecidos de trama aberta como linho rústico.",
      "Letras largas em ponto cheio para evitar o afundamento no centro da coluna."
    ],
    characteristics: [
      "Elimina o encolhimento e a deformação geométrica de círculos e quadrados.",
      "Garante cobertura perfeita com menor quantidade de pontos de acabamento.",
      "Aumenta a durabilidade do bordado após sucessivas lavagens industriais."
    ],
    commonErrors: [
      "❌ Colocar o underlay no mesmo ângulo da camada superior (os pontos caem nos mesmos vãos e o tecido afunda).",
      "❌ Deixar o underlay perpendicular encostar nas beiradas (ele vaza para fora do desenho).",
      "❌ Usar pontos muito curtos no underlay (< 1,5 mm), perfurando o tecido em excesso."
    ],
    troubleshootingTips: [
      "O círculo da matriz ficou ovalado na camisa: aplique underlay perpendicular em grade dupla com recuo de 0,8 mm e aumente a compensação de repuxo.",
      "O ponto cheio afundou no meio da letra: adicione um underlay zig-zag perpendicular antes do ponto de acabamento.",
      "Pontos de base aparecendo nas bordas do bordado: aumente a margem de recuo (Inset Distance) para 0,8 mm no software de digitalização."
    ],
    dicaArtrelados: "A regra de ouro dos grandes programadores: NUNCA coloque a sustentação (underlay) na mesma direção do ponto de cima! Se o ponto de cima for horizontal, a base deve ser vertical. Se for diagonal a 45°, a base deve ser a 135°. Essa cruzada ortogonal é o segredo do bordado perfeitamente plano!",
    voceSabia: "O conceito de ancoragem perpendicular foi herdado da construção civil e das técnicas milenares de tecelagem, onde a trama a 90° sobre o urdume confere resistência mecânica indeformável aos tecidos!",
    practicalExercise: "Digitalize duas matrizes de um círculo de 5 cm: na primeira, use underlay no mesmo sentido do preenchimento; na segunda, use underlay perpendicular a 90°. Borde ambos em malha fina e compare a forma perfeitamente redonda do segundo.",
    quickSummary: "Underlay Perpendicular é a técnica de cruzar os pontos de base a 90° em relação à cobertura, criando um alicerce rígido que impede enrugamento e afundamento.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11",
      density: "Espaçamento de base: 2.0 a 2.5 mm a 90°"
    },
    relatedTerms: [
      "Underlay Tatami / Grid",
      "Compensação de Repuxo (Pull Comp)",
      "Ângulo de Ponto (Stitch Angle)",
      "Recuo Perimetral (Inset Distance)",
      "Topstitch (Ponto de Cobertura)"
    ],
    tags: [
      "u-075",
      "underlay",
      "perpendicular",
      "ancoragem",
      "digitalizacao",
      "subponto",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Digitizing Structural Foundations & Underlay Angles. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Advanced Geometric Underlay Strategies for Knitwear. Mississauga, 2021.",
      "ARTRELADOS. Fundamentos da Digitalização Profissional de Matrizes de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-076-ultrassom-portatil-para-limpeza-de-lotes",
    code: "U-076",
    term: "Ultrassom Portátil para Limpeza e Remoção de Manchas Têxteis (Ultrasonic Stain & Spot Remover Pen)",
    pronunciation: "ul-tras-som por-ta-til pa-ra lim-pe-za e re-mo-são de man-chas tes-teis",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Manutenção & Ferramentas",
    origin: "Do latim 'ultra' (além) e 'sonus' (som). Tecnologia piezoelétrica industrial miniaturizada para higienização e salvamento de peças prontas no ateliê.",
    summary: "Caneta ou ponteira ultrassônica que emite microvibrações acústicas de alta frequência para remover manchas de óleo de máquina e graxa sem esfregar nem danificar o bordado.",
    definition: "O Ultrassom Portátil para Limpeza e Remoção de Manchas Têxteis (Ultrasonic Spot Cleaning Pen & Cavitation Stain Remover) é um dispositivo eletromecânico composto por um transdutor piezoelétrico de alta frequência que converte energia elétrica em vibrações acústicas na faixa de 40 a 50 kHz. Ao ser aplicado sobre uma mancha acidental de óleo de máquina, graxa ou resíduo adesivo umedecida com solução tensoativa neutra, a ponteira gera o fenômeno físico da 'cavitação' (formação e implosão microscópica de microbolhas), desprendendo instantaneamente os contaminantes das fibras têxteis sem atrito mecânico abrasivo.",
    technicalDetails: "Frequência de operação: 45 kHz ± 5 kHz; Consumo de energia: 15W a 30W. Elimina o risco de desfiamento ou 'pilling' (bolinhas) nas linhas de viscose e poliéster, preservando o brilho e a tensão do bordado em peças brancas de alto valor agregado.",
    beginnerExplanation: "É uma canetinha mágica que vibra tão rápido que o ouvido humano nem escuta! Quando a máquina espirra uma gotinha de óleo na camisa branca do cliente, em vez de esfregar com escova e estragar os pontos, você encosta essa canetinha com uma gotinha de sabão e a mancha se desfaz na hora como mágica!",
    howItWorks: [
      "1. A bordadeira identifica uma mancha acidental de óleo ou sujeira na peça bordada.",
      "2. Coloca-se um pano absorvente limpo por baixo da área manchada.",
      "3. Pinga-se uma gota de água com detergente neutro ou desengraxante têxtil suave.",
      "4. Encosta-se suavemente a ponta da caneta de ultrassom sobre a mancha sem fazer força.",
      "5. As ondas de ultrassom quebram a tensão superficial do óleo por cavitação em 5 a 10 segundos.",
      "6. A mancha migra para o pano de baixo e a peça branca fica 100% limpa e impecável."
    ],
    applications: [
      "Salvamento de camisas brancas e jalecos hospitalares manchados com óleo de cabeçote.",
      "Remoção de resíduos de cola spray e fitas adesivas em tecidos nobres e veludos.",
      "Limpeza rápida de marcas de giz e canetas fantasmas recalcitrantes.",
      "Higienização final no controle de qualidade de ateliês de bordados finos."
    ],
    characteristics: [
      "Não agride as fibras delicadas nem desbota as cores das linhas.",
      "Evita o retrabalho e a perda de peças prontas caras dos clientes.",
      "Substitui solventes químicos agressivos e inflamáveis no ambiente de trabalho."
    ],
    commonErrors: [
      "❌ Pressionar a ponta do ultrassom com força excessiva contra o tecido (o efeito vem da onda sonora, não da força mecânica).",
      "❌ Usar o aparelho a seco sem umedecer o local com água (a cavitação exige meio líquido).",
      "❌ Esfregar o tecido com escova de cerdas duras antes de tentar o ultrassom."
    ],
    troubleshootingTips: [
      "A mancha de óleo não sai: adicione uma gota de detergente desengraxante neutro para agir como agente tensoativo junto com o ultrassom.",
      "O óleo está se espalhando: troque o pano absorvente de baixo por uma folha de papel toalha seca e limpa a cada 5 segundos.",
      "O aparelho aqueceu: desligue por 1 minuto para resfriamento do transdutor piezoelétrico."
    ],
    dicaArtrelados: "Se caiu uma gotinha de óleo da lançadeira na camisa branca do cliente: NUNCA esfregue com os dedos nem jogue alvejante! O ultrassom portátil ou uma esponja macia com água morna e detergente neutro dissolve o óleo em segundos sem espalhar a mancha!",
    voceSabia: "A tecnologia de cavitação por ultrassom é a mesma utilizada por joalheiros suíços para limpar engrenagens microscópicas de relógios de ouro e por dentistas para limpeza tártara de alta precisão!",
    practicalExercise: "Pegue um retalho de tecido branco com uma marca proposital de graxa. Umedeça com água e detergente e encoste a ponteira de ultrassom. Observe a mancha desaparecer sem necessidade de fricção mecânica.",
    quickSummary: "Ultrassom Portátil é a ferramenta que remove manchas de óleo e graxa de peças bordadas por ondas acústicas de alta frequência, salvando roupas sem esfregar.",
    recommendedSettings: {
      speedPPM: "N/A (Pós-Processamento)",
      needleType: "N/A",
      density: "Frequência de cavitação: 40 a 50 kHz"
    },
    relatedTerms: [
      "Remoção de Manchas de Óleo",
      "Óleo Mineral Branco",
      "Controle de Qualidade Têxtil",
      "Cavitação Acústica",
      "Desengraxante Neutro"
    ],
    tags: [
      "u-076",
      "ultrassom",
      "limpeza",
      "manchas",
      "oleo de maquina",
      "acabamento",
      "ferramentas",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXTILE CARE ALLIANCE. Ultrasonic Spotting and Garment Cleaning in Industrial Apparel. Zurich, 2022.",
      "JUKI INDUSTRIAL SEWING. Machine Oil Stain Removal and Spot Cleaning Technologies. Tokyo, 2021.",
      "ARTRELADOS. Guia de Salvamento e Limpeza Profissional de Bordados Manchados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-077-unidade-de-retencao-de-fio-no-tracionador",
    code: "U-077",
    term: "Unidade de Retenção de Fio no Tracionador e Mola Garra (Thread Trapping Spring & Retaining Plate)",
    pronunciation: "u-ni-da-de de re-ten-são de fi-o no tra-si-o-na-dor e mo-la gar-ra",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do latim 'retinere' (segurar, prender) e do inglês 'thread trap'. Dispositivo mecatrônico de agarre instalado na barra frontal do cabeçote de bordado.",
    summary: "Conjunto de molas metálicas tipo garra (Trapping Springs) que seguram as pontas das linhas paradas no cabeçote, evitando que se soltem ou entrem nas agulhas em operação.",
    definition: "A Unidade de Retenção de Fio no Tracionador e Mola Garra (Thread Trapping Plate & Upper Thread Gripper Spring Assembly) é o componente mecânico de precisão posicionado na parte inferior frontal do conjunto de troca de cores do cabeçote de bordado. Sua função é reter e imobilizar a ponta cortada de cada uma das 9, 12 ou 15 linhas de cores inativas após o ciclo do trimer (*auto-trim*), mantendo a tensão de reserva pronta para o próximo engate de cor e impedindo que fios soltos caiam na área de trabalho, sejam costurados por baixo de outros pontos (*trapped threads*) ou escapem do olho da agulha no arranque.",
    technicalDetails: "Composta por lâminas de aço-mola inoxidável polido montadas sobre uma barra base com ranhuras em V calibradas. A pressão de retenção deve ser suficiente para prender linhas No 40 e No 60 sem deformar os filamentos e sem permitir escape por vibração do pantógrafo a 1.000 PPM.",
    beginnerExplanation: "São aquelas molinhas ou garrinhas de metal que ficam na frente da máquina, segurando a ponta de cada linha colorida que não está costurando no momento. Elas deixam todas as linhas bem presas e esticadinhas para que nenhuma fique solta dançando e embolando no bordado da agulha vizinha!",
    howItWorks: [
      "1. A máquina conclui uma cor e o sistema de corte (trimer) corta a linha por baixo.",
      "2. A mola garra frontal segura firmemente a pontinha superior da linha que acabou de ser cortada.",
      "3. O cabeçote se desloca para a próxima agulha de cor selecionada.",
      "4. A nova agulha começa a bordar e a mola libera a linha suavemente na primeira descida.",
      "5. A linha da agulha anterior permanece travada na sua respectiva mola, imóvel e protegida.",
      "6. O bordado segue perfeitamente limpo, sem pontas de cores erradas sobrepostas."
    ],
    applications: [
      "Máquinas industriais e semi-industriais multicabeças e multicoloridas (6 a 15 agulhas).",
      "Bordados multicoloridos complexos com dezenas de trocas automáticas de cor.",
      "Eliminação de emaranhados e pontas soltas na superfície do bordado.",
      "Prevenção do escape de linha do olho da agulha no primeiro ponto após a troca de cor."
    ],
    characteristics: [
      "Aço inoxidável temperado com acabamento polido anti-desfiamento.",
      "Manutenção simples com limpeza por pincel ou ar comprimido suave.",
      "Essencial para a automação fluida de cabeçotes industriais."
    ],
    commonErrors: [
      "❌ Deixar fiapos acumulados nas molas de retenção, fazendo a mola perder a pressão e soltar a linha.",
      "❌ Entortar a mola com alicate ou chapa de fenda ao tentar limpá-la.",
      "❌ Passar a linha fora da ranhura de retenção após a troca manual de cones."
    ],
    troubleshootingTips: [
      "A linha sai do olho da agulha logo no primeiro ponto após trocar de cor: a ponta não estava presa na mola de retenção; encaixe a linha na ranhura da garra.",
      "Aparecem pedacinhos de linhas de outras cores costuradas no meio do desenho: a mola de retenção está solta ou suja de poeira; limpe as lâminas com ar comprimido.",
      "A linha fica desfiando ao entrar na mola: verifique se não há rebarbas na lâmina de aço e passe uma lixa 2000 bem fina se necessário."
    ],
    dicaArtrelados: "Crie o hábito diário de passar um pincel macio ou um pedaço de linha encerada entre as molinhas de retenção do cabeçote! A poeira de linha que junta ali afasta as molas e faz a linha escapar. Molas limpinhas garantem trocas de cor perfeitas sem o fio sair da agulha!",
    voceSabia: "Em máquinas industriais de altíssima velocidade, as garras de retenção contam com pequenos ímãs ou sensores pneumáticos para abrir e fechar as lâminas no tempo exato de 0,05 segundos durante o pulo de cor!",
    practicalExercise: "Observe a sua máquina durante uma troca de cor automática: veja como a mola segura a ponta da cor que parou e como a nova cor é liberada suavemente no primeiro ponto. Puxe a ponta com o dedo para sentir a pressão suave da mola.",
    quickSummary: "Unidade de Retenção é o conjunto de molas que prende as pontas das linhas paradas no cabeçote, evitando que se soltem ou embolem durante o bordado.",
    recommendedSettings: {
      speedPPM: "800 a 1.000 PPM",
      needleType: "Compatível com linha",
      density: "Pressão de retenção: 30 a 50 gf"
    },
    relatedTerms: [
      "Troca Automática de Cor",
      "Trimer (Cortador de Linha)",
      "Cabeçote Multicor",
      "Sensor de Quebra de Linha",
      "Ponto de Amarração Inicial"
    ],
    tags: [
      "u-077",
      "retencao de fio",
      "mola garra",
      "troca de cor",
      "cabecote",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL MANUAL. Upper Thread Holding Spring and Trapping Mechanism. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. Color Change Assembly and Thread Trapper Setup. Ichinomiya, 2021.",
      "ARTRELADOS. Mecânica Aplicada ao Bordado: Manutenção de Cabeçotes e Trocas de Cor. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-078-urdidura-longitudinal-e-resistencia-a-tracao",
    code: "U-078",
    term: "Urdidura Longitudinal e Resistência à Tração Têxtil (Warp Tensile Strength & Grainline Stability)",
    pronunciation: "ur-di-du-ra lon-gi-tu-di-nal e re-zis-ten-si-a a tra-são tes-til",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estruturação & Física Têxtil",
    origin: "Do latim 'ordiri' (começar, urdir) e 'longitudo' (comprimento). Conceito clássico da engenharia têxtil sobre a montagem dos fios longitudinais no tear.",
    summary: "Comportamento mecânico dos fios paralelos à ourela do tecido (urdume), que suportam a maior tensão de estiramento no bastidor e ditam a direção de menor deformação do bordado.",
    definition: "A Urdidura Longitudinal e Resistência à Tração Têxtil (Warp Grainline Mechanical Stability & Tensile Vector Analysis) designa o comportamento físico dos fios estruturais que correm paralelamente à ourela (*selvedge*) do tecido no sentido do comprimento da peça no tear. Por serem submetidos a tensões mecânicas elevadas durante a tecelagem, os fios de urdume possuem torção mais alta, maior tenacidade e praticamente elasticidade nula quando comparados aos fios transversais de trama. O conhecimento dessa orientação permite ao bordador enquadrar a peça alinhando as maiores forças de repuxo do bordado com a rigidez natural da urdidura.",
    technicalDetails: "A urdidura possui de 2 a 4 vezes mais resistência à tração e menor coeficiente de deformação linear do que a trama. Em tecidos planos de algodão, sarja e linho, os ângulos de ponto que cruzam a urdidura a 45° ou 90° distribuem o repuxo de forma equilibrada, prevenindo o arqueamento de linhas retas e a formação de rugas diagonais.",
    beginnerExplanation: "É o sentido do fio do tecido que segue o comprimento da peça (na mesma direção daquela bordinha de fábrica chamada ourela). Esse fio é o mais forte e não estica nada! Quando colocamos a roupa no bastidor alinhada com esse fio reto, o bordado não entorta e fica muito mais firme!",
    howItWorks: [
      "1. A bordadeira localiza a ourela ou puxa levemente o tecido para identificar o sentido mais firme (urdume).",
      "2. Posiciona a peça no bastidor mantendo o sentido do fio do urdume perfeitamente paralelo aos eixos do aro.",
      "3. O tecido é tensionado no bastidor sem distorções angulares.",
      "4. A máquina executa os pontos; a resistência natural dos fios de urdume absorve a força da agulha.",
      "5. Ao retirar a peça do bastidor, as fibras retornam ao estado relaxado sem deformar o contorno do logotipo.",
      "6. A peça bordada mantém o caimento impecável e o alinhamento da estampa."
    ],
    applications: [
      "Bordados em camisas sociais de tricoline, oxford e sarja de alfaiataria.",
      "Bordados em uniformes pesados de brim e jaquetas jeans estruturadas.",
      "Cálculo de alinhamento em toalhas de mesa e guardanapos de linho puro.",
      "Evitar deformação de grandes bandeiras e estandartes comemorativos."
    ],
    characteristics: [
      "Sentido de maior estabilidade dimensional e menor estiramento elástico.",
      "Fios mais finos, torcidos e resistentes por centímetro quadrado.",
      "Fator determinante para posicionamento correto de moldes no corte e bordado."
    ],
    commonErrors: [
      "❌ Enquadrar o tecido com o fio enviesado (a 45° no bastidor), fazendo o bordado repuxar em forma de losango.",
      "❌ Puxar as pontas do tecido de forma desigual ao fechar o aro do bastidor.",
      "❌ Cortar painéis de camisas ignorando o sentido do fio reto do tecido."
    ],
    troubleshootingTips: [
      "O bordado quadrado ficou torto parecendo um losango: o tecido foi colocado enviesado no bastidor; alinhe o tecido rigorosamente pelo fio do urdume.",
      "A camisa social franziu ao redor do bolso bordado: use entretela de corte limpo (Cut-Away) e posicione a urdidura reta no bastidor.",
      "Dificuldade em achar o sentido do fio: puxe suavemente o tecido na horizontal e na vertical; a direção que MENOS esticar é a urdidura."
    ],
    dicaArtrelados: "Para saber em 2 segundos qual é o sentido do urdume (o lado mais forte do pano): puxe o tecido com as duas mãos na vertical e depois na horizontal! O lado que não esticar quase nada e for super durinho é o urdume! Enquadre o bastidor sempre reto com esse lado!",
    voceSabia: "Nas antigas fábricas de seda de Lyon, os fios de urdume eram encerados com goma vegetal e cera de abelha pura para suportar o impacto de até 50 mil batidas de tear sem arrebentar um único filamento!",
    practicalExercise: "Pegue um retalho de tecido plano (tricoline ou sarja). Puxe nas duas direções e depois na diagonal (viés). Sinta com os dedos como a urdidura é firme e como o viés estica facilmente. Compreenda porque o alinhamento reto é vital no bastidor.",
    quickSummary: "Urdidura é a direção dos fios mais fortes e compridos do tecido, que não esticam e garantem a máxima sustentação e estabilidade ao bordado.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Compensação de repuxo padrão: 0.35 mm"
    },
    relatedTerms: [
      "Trama (Weft)",
      "Ourela (Selvedge)",
      "Sentido do Fio (Grainline)",
      "Viés do Tecido (Bias)",
      "Estabilidade Dimensional"
    ],
    tags: [
      "u-078",
      "urdidura",
      "urdume",
      "física textil",
      "fio do tecido",
      "tecelagem",
      "artrelados"
    ],
    bibliographicReferences: [
      "THE TEXTILE INSTITUTE. Principles of Weaving and Fabric Mechanics. Manchester, 2021.",
      "CALLISTER, W. D. Ciência e Engenharia dos Materiais Têxteis. São Paulo: Blucher, 2022.",
      "ARTRELADOS. Física do Tecido no Bordado Computadorizado: Urdume, Trama e Deformação. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-079-ultra-velocidade-e-compensacao-cinematica",
    code: "U-079",
    term: "Ultra-Velocidade e Compensação Cinemática de Ponto (High-Speed Inertia & Dynamic Stitch Compensation)",
    pronunciation: "ul-tra ve-lo-si-da-de e com-pen-sa-são si-ne-ma-ti-ca de pon-to",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'ultra' (além) e do grego 'kinematikos' (movimento). Algoritmos modernos de interpolação mecatrônica para compensar a inércia mecânica em velocidades acima de 1.000 PPM.",
    summary: "Ajuste avançado de software e aceleração de servomotores que compensa a inércia do pantógrafo em alta velocidade, evitando pontas arredondadas e perda de definição.",
    definition: "A Ultra-Velocidade e Compensação Cinemática de Ponto (Dynamic High-Speed Inertia Management & Kinematic Stitch Compensation) é o conjunto de algoritmos matemáticos e calibrações mecatrônicas aplicados tanto no software de digitalização quanto nos servomotores do pantógrafo para anular as distorções causadas pela inércia mecânica quando a máquina opera em velocidades de 1.000 a 1.500 PPM. Em altíssima velocidade, a desaceleração brusca do bastidor ao realizar curvas fechadas e cantos agudos tende a arredondar vértices pontiagudos e encurtar pontos satim; a compensação cinemática antecipa a parada e amplia os vetores de deslocamento em milésimos de segundo.",
    technicalDetails: "Algoritmo de *Curve Acceleration / Smart Cornering*: reduz dinamicamente a rotação para 650 PPM em curvas com raio inferior a 2 mm e projeta os pontos de canto 0,15 mm além do vértice geométrico para neutralizar a flexão da agulha e a inércia do aro do bastidor.",
    beginnerExplanation: "Quando a máquina corre a mil por hora, o bastidor é tão rápido que, se tiver que fazer uma curva bem fechada ou uma pontinha fininha, o peso do bastidor faz ele 'derrapar' um pouquinho e a ponta fica redonda. Esse recurso calcula a freada certa para o desenho ficar com pontas super afiadas mesmo bordando no máximo da velocidade!",
    howItWorks: [
      "1. O programador ativa o recurso de cantos inteligentes (*Smart Corners*) e compensação de alta rotação no software.",
      "2. A matriz gera micropontos de transição e amplia levemente as pontas agudas de estrelas e letras.",
      "3. A máquina lê a matriz e aciona a curva de desaceleração nos servomotores X/Y antes de chegar no vértice.",
      "4. A agulha fura no local exato sem sofrer flexão lateral por arraste do tecido.",
      "5. O servomotor retoma a aceleração máxima na reta seguinte.",
      "6. O bordado final apresenta vértices afiados como navalha com máxima produtividade horária."
    ],
    applications: [
      "Grandes produções industriais seriadas operando em regime de 950 a 1.200 PPM.",
      "Logotipos com tipografia minúscula e serifas ultrafinas pontiagudas.",
      "Estrelas, brasões militares e detalhes geométricos de altíssima precisão.",
      "Otimização de tempo de máquina em confecções de grande porte."
    ],
    characteristics: [
      "Maximiza o rendimento sem sacrificar a definição estética das bordas.",
      "Reduz o desgaste prematuro das correias sincronizadoras e guias lineares.",
      "Previne a quebra de agulhas finas provocada por empurrão lateral do bastidor."
    ],
    commonErrors: [
      "❌ Bordejar detalhes microscópicos a 1.200 PPM sem programar desaceleração em cantos agudos.",
      "❌ Usar bastidores gigantes e pesados em velocidade máxima com matrizes cheias de curvas fechadas.",
      "❌ Desativar os filtros de compensação cinemática do painel da máquina industrial."
    ],
    troubleshootingTips: [
      "As pontas das estrelas e letras estão saindo redondas e borradas: ative o recurso 'Smart Corners / Cantos Mitrados' no software e reduza a velocidade em 150 PPM.",
      "A agulha está quebrando com estalo metálico nas curvas rápidas: a agulha está flexionando pelo arraste do pantógrafo; ative a desaceleração de curva no painel.",
      "O contorno preto não encaixa no preenchimento colorido em alta velocidade: aumente a compensação de repuxo e verifique a tensão das correias do pantógrafo."
    ],
    dicaArtrelados: "Não tenha pressa cega de rodar a máquina sempre no talo! Em partes com letrinhas pequenas ou pontas finas, programe o desenho para baixar a velocidade para 700 PPM nesses detalhes e subir para 900 PPM nas partes retas grandes. O bordado fica perfeito e não quebra nenhuma agulha!",
    voceSabia: "Em uma máquina industrial bordando a 1.200 PPM, o bastidor precisa acelerar de 0 a 100 km/h (em escala relativa de deslocamento) e frear completamente até 20 vezes a cada segundo!",
    practicalExercise: "Digitalize uma estrela de 5 pontas. Borde uma a 1.000 PPM sem cantos inteligentes e outra a 750 PPM com cantos mitrados ativados. Olhe as pontas com uma lupa e veja a diferença brutal de nitidez.",
    quickSummary: "Compensação Cinemática é o ajuste inteligente de aceleração que garante cantos pontiagudos e detalhes nítidos mesmo quando a máquina borda em velocidade máxima.",
    recommendedSettings: {
      speedPPM: "Curvas: 650-750 PPM | Retas: 950-1.100 PPM",
      needleType: "75/11 Titânio",
      density: "Smart Corners: Ativado com ângulo mínimo de 45°"
    },
    relatedTerms: [
      "Smart Corners (Cantos Inteligentes)",
      "Inércia do Pantógrafo",
      "Servomotores X/Y",
      "Flexão de Agulha (Needle Deflection)",
      "Velocidade PPM"
    ],
    tags: [
      "u-079",
      "ultra-velocidade",
      "cinematica",
      "smart corners",
      "alta rotacao",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA RESEARCH & DEVELOPMENT. Dynamic Motion Control and Inertia Mitigation. Nagoya, 2023.",
      "WILCOM EMBROIDERY STUDIO. High-Speed Stitch Optimization & Cornering Algorithms. Sydney, 2022.",
      "ARTRELADOS. Alta Produtividade e Qualidade Extrema no Bordado Industrial. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-080-unidade-de-sensor-encoder-do-eixo-principal",
    code: "U-080",
    term: "Unidade de Sensor Encoder do Eixo Principal (Main Shaft Rotary Optical Encoder)",
    pronunciation: "u-ni-da-de de sen-sor en-co-der do ei-xo prin-si-pal",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do inglês 'encoder' (codificador angular) e do latim 'principalis' (primeiro, chefe). Dispositivo optoeletrônico de sincronismo mestre de máquinas CNC.",
    summary: "Sensor óptico rotativo instalado no eixo central da máquina que informa à placa-mãe o grau angular exato (de 0° a 360°) da posição da agulha em tempo real.",
    definition: "A Unidade de Sensor Encoder do Eixo Principal (Main Shaft Rotary Optical Encoder & Angular Position Sensor) é o transdutor optoeletrônico de alta resolução acoplado diretamente ao eixo de manivela principal da máquina de bordar. Composto por um disco graduado de vidro ou metal microperfurado e um par de emissores e receptores infravermelhos, o encoder converte a rotação contínua em milhares de pulsos digitais por volta, informando ao microprocessador (DSP) a posição angular exata da barra de agulha em graus (ex: 100° para descida, 196° para corte, 280° para troca de cor e 100° para repouso no Ponto Morto Superior).",
    technicalDetails: "Resolução típica: 1.024 a 4.096 pulsos por revolução (PPR) com sinal de índice zero (Z-Phase). É o componente que garante a parada obrigatória da máquina no grau exato (Stop Angle / Ponto 100°) após quebra de linha ou término do bordado.",
    beginnerExplanation: "É o 'olho digital' que sabe exatamente onde a agulha está a cada milésimo de segundo! É ele que avisa para a máquina: 'a agulha está lá embaixo furando o pano' ou 'a agulha já subiu, pode mexer o bastidor!'. Sem ele, a máquina ficaria cega e bateria a agulha no bastidor em movimento!",
    howItWorks: [
      "1. O motor principal gira o eixo e as agulhas sobem e descem.",
      "2. O disco do encoder gira junto com o eixo, interrompendo o feixe de luz óptica.",
      "3. O sensor gera milhares de pulsos elétricos por volta.",
      "4. O computador central da máquina lê os pulsos e sabe o grau exato da rotação (de 0° a 360°).",
      "5. Quando a agulha atinge o ponto seguro no topo, o computador comanda o movimento do bastidor.",
      "6. Ao apertar o botão de parar, o encoder comanda o freio eletrônico para travar no ponto 100° exato."
    ],
    applications: [
      "Sincronização milimétrica entre descida da agulha e movimentação do bastidor.",
      "Comando dos tempos de corte de linha (trimer), pega de fio e troca de cores.",
      "Parada de emergência no grau de segurança sem colisão mecânica.",
      "Diagnóstico de erros de posicionamento angular e falhas de freio motor."
    ],
    characteristics: [
      "Precisão angular micrométrica imune a variações de tensão elétrica.",
      "Leitura óptica sem contato físico, garantindo durabilidade de décadas.",
      "Componente vital para a integridade de qualquer máquina computadorizada."
    ],
    commonErrors: [
      "❌ Acúmulo de poeira têxtil ou óleo nas lentes ópticas do disco do encoder (provoca erro de parada de eixo no painel).",
      "❌ Bater no volante manual ou no eixo traseiro, desalinhando o acoplamento do encoder.",
      "❌ Tentar calibrar o ponto 100° da máquina manualmente sem seguir as instruções do manual técnico."
    ],
    troubleshootingTips: [
      "Aparece erro 'Main Shaft Error / Encoder Fault' no painel: limpe o disco óptico com spray limpa-contato seco e verifique o cabo de sinal.",
      "A máquina para sempre com a agulha enfiada no tecido em vez de parar em cima: o ângulo de parada (Stop Angle) está descalibrado; recalibre o ponto 100° no menu técnico.",
      "A máquina dá trancos secos ao parar: verifique se a correia dentada do motor principal não está frouxa."
    ],
    dicaArtrelados: "Se a sua máquina começar a parar fora de posição (com a agulha no meio do caminho em vez de subir até o topo): dê uma olhada no ângulo de parada no painel! Toda máquina deve repousar entre 98° e 102° (ponto 100°). Deixar a máquina calibrada nesse grau evita quebrar agulhas ao tirar o bastidor!",
    voceSabia: "Nas máquinas de bordar modernas, o encoder lê a velocidade angular com tanta precisão que, se a agulha encontrar uma resistência incomum (como bater em um botão ou zíper), o sensor detecta a microdesaceleração em 2 milissegundos e desliga a máquina antes de quebrar a peça!",
    practicalExercise: "Olhe no painel de controle da sua máquina: localize o mostrador de graus do eixo principal. Gire o volante manual devagar com a mão e veja o número subir de 0° a 360° no visor em tempo real.",
    quickSummary: "Encoder do Eixo Principal é o sensor óptico que monitora o grau exato de rotação do cabeçote, sincronizando as agulhas com o movimento do bastidor.",
    recommendedSettings: {
      speedPPM: "Monitoramento contínuo",
      needleType: "N/A",
      density: "Grau padrão de repouso (Stop Angle): 100° ± 2°"
    },
    relatedTerms: [
      "Ponto 100° (Stop Angle)",
      "Ponto Morto Superior (PMS)",
      "Eixo Principal (Main Shaft)",
      "Freio Motor Eletrônico",
      "Painel de Controle (HMI)"
    ],
    tags: [
      "u-080",
      "encoder",
      "eixo principal",
      "sensor optico",
      "stop angle",
      "mecanica",
      "eletronica",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN CO. Main Shaft Encoder Alignment & Calibration Manual. Ichinomiya, 2022.",
      "TAJIMA EMBROIDERY SYSTEMS. Electronic Control & Rotary Encoder Technical Guide. Nagoya, 2021.",
      "ARTRELADOS. Eletrônica e Mecatrônica das Máquinas de Bordar Computadorizadas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-081-underlay-tatami-com-angulo-invertido",
    code: "U-081",
    term: "Underlay Tatami com Ângulo Invertido (Inverse-Angle Tatami Underlay Pattern)",
    pronunciation: "an-der-lei ta-ta-mi com an-gu-lo in-ver-ti-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do japonês 'tatami' (esteira tradicional de palha) e do latim 'inversus' (voltado para o lado oposto). Estrutura de compensação de anisotropia em grandes áreas bordadas.",
    summary: "Camada de base em ponto esteira digitalizada com inclinação angular simétrica inversa à camada de acabamento, travando a expansão lateral do tecido.",
    definition: "O Underlay Tatami com Ângulo Invertido (Inverse-Angle Stabilizing Tatami Underlay) é uma técnica de estruturação de matrizes digitais para grandes superfícies de preenchimento na qual uma camada preliminar aberta de ponto tatami é gerada com o ângulo exatamente invertido (ex: se o topo está a +45°, a base é programada a -45° ou 135°). Essa contraposição de vetores anula a tendência natural do tecido de se esticar ou expandir na direção paralela às passagens da agulha, eliminando o efeito de 'bolsa de ar' e garantindo uma superfície lisa, acetinada e homogênea em grandes brasões.",
    technicalDetails: "Configurado com comprimento de ponto de 3,5 mm a 4,5 mm e densidade/espaçamento aberto de 2,0 mm a 3,0 mm (cerca de 20% a 25% da densidade da cobertura). Recuo perimétrico de segurança de 0,8 mm a 1,2 mm para evitar qualquer escape visual nos limites do objeto.",
    beginnerExplanation: "Quando vamos preencher um desenho bem grande (como o fundo de um brasão), se a linha de cima for inclinada para a direita, a base embaixo é feita inclinada para a esquerda. Elas se cruzam perfeitamente como uma grade, impedindo que o tecido forme um balão frouxo no meio do bordado!",
    howItWorks: [
      "1. O digitalizador define o preenchimento final do objeto com ângulo de 60°.",
      "2. No campo de propriedades de underlay, seleciona 'Tatami' e define o ângulo para 150° (inversão ortogonal).",
      "3. A máquina borda primeiro o tatami aberto de sustentação com passadas largas.",
      "4. O tecido fica perfeitamente esticado e ancorado na entretela em toda a extensão da área.",
      "5. A máquina borda a cobertura final a 60° com densidade padrão.",
      "6. As duas camadas se fundem em uma estrutura plana e macia sem ondulações.",
      "7. O resultado é um preenchimento com brilho impecável e toque agradável."
    ],
    applications: [
      "Grandes brasões de equipes esportivas nas costas de jaquetas e moletons.",
      "Preenchimentos extensos em toalhas de banho, roupões e almofadas decorativas.",
      "Bordados em tecidos sintéticos que criam estática e bolhas com facilidade.",
      "Fundos bordados para aplicação de emblemas de alta definição."
    ],
    characteristics: [
      "Elimina a formação de ondas e rugas no centro de grandes preenchimentos.",
      "Reduz a necessidade de entretelas excessivamente duras e pesadas.",
      "Melhora a reflexão da luz na linha de poliéster, gerando brilho mais vivo."
    ],
    commonErrors: [
      "❌ Programar o underlay tatami muito denso (0,60 mm), transformando o bordado em uma 'placa de papelão' dura.",
      "❌ Esquecer o recuo de borda (fazendo a base vazar sob os contornos).",
      "❌ Usar ângulo idêntico na base e no topo (o que anula a sustentação cruzada)."
    ],
    troubleshootingTips: [
      "O bordado ficou duro como uma casca grossa: aumente o espaçamento do underlay tatami para 2,5 mm e alivie a densidade da cobertura.",
      "Apareceram pontas de linha da base saindo nas beiradas: aumente o recuo perimetral (Inset Margin) para 1,0 mm.",
      "O centro do preenchimento ficou estufado como uma bolha: utilize o underlay tatami com ângulo invertido em vez de underlay zig-zag simples."
    ],
    dicaArtrelados: "Para bordar costas inteiras de jaquetas sem o desenho virar uma tábua dura: use um underlay tatami bem abertinho com ângulo invertido! Ele segura tudo no lugar com pouquíssimos pontos e a roupa continua gostosa e maleável de usar!",
    voceSabia: "Na tecelagem tradicional japonesa, os tatamis são trançados com fibras de junco cruzadas exatamente em ângulos opostos para que as esteiras suportem o peso de pessoas caminhando durante séculos sem perder o nivelamento!",
    practicalExercise: "Crie um quadrado de 8x8 cm no programa. Configure uma versão com underlay corrido simples e outra com underlay tatami aberto em ângulo invertido. Borde em moletom e sinta a diferença de estabilidade e toque.",
    quickSummary: "Underlay Tatami com Ângulo Invertido é a camada de base cruzada que estabiliza grandes áreas de preenchimento, evitando bolhas e mantendo o bordado macio.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11",
      density: "Espaçamento do underlay: 2.5 mm a 135° (Invertido)"
    },
    relatedTerms: [
      "Ponto Tatami (Fill Stitch)",
      "Ângulo de Ponto (Stitch Angle)",
      "Recuo de Subponto (Inset Margin)",
      "Densidade de Preenchimento",
      "Estabilidade de Grandes Áreas"
    ],
    tags: [
      "u-081",
      "underlay tatami",
      "angulo invertido",
      "preenchimento",
      "costas de jaqueta",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Fill Stitch Underlay Engineering & Angle Mapping. Sydney, 2022.",
      "BERNINA ARTISTIC SUITE. Large Area Stabilization & Tatami Architectures. Steckborn, 2021.",
      "ARTRELADOS. Segredos da Digitalização de Grandes Brasões e Costas de Jaquetas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-082-uniformizacao-da-resina-da-entretela-termocolante",
    code: "U-082",
    term: "Uniformização da Resina da Entretela Termocolante (Dot-Coating Adhesive Uniformity & Dot Pitch)",
    pronunciation: "u-ni-for-mi-za-são da re-zi-na da en-tre-te-la ter-mo-co-lan-te",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do latim 'uniformis' (de uma só forma) e 'resina' (goma vegetal/polimérica). Tecnologia de distribuição micrométrica de adesivos fundíveis na indústria de não-tecidos.",
    summary: "Distribuição homogênea dos micro-pontos de cola termoplástica (resina Dot-Coating) na entretela, garantindo aderência sem endurecer o tecido nem criar caroços.",
    definition: "A Uniformização da Resina da Entretela Termocolante (Fusible Interlining Adhesive Dot-Coating Uniformity & Matrix Distribution) refere-se à tecnologia industrial de aplicação controlada de microgotículas de polímeros termoplásticos (como poliamida, polietileno de baixa densidade ou copoliéster) sobre o substrato não-tecido da entretela. Em entretelas de alta qualidade, a resina é aplicada pelo processo de 'Pastilhas de Ponto' (*Double-Dot / Computerized Dot-Coating*) com distribuição de 30 a 50 pontos por centímetro quadrado, assegurando fusão uniforme em 100% da área sem provocar rigidez pontual, vazamento de cola (*strike-through*) ou delaminação pós-lavagem.",
    technicalDetails: "Padrões de aplicação: *Double-Dot* (base de barreira antiumidade + topo termofusível). Densidade de resinagem ideal para bordado: 12 a 18 g/m² de resina sobre não-tecido de 40 a 50 g/m², ativada a 135 °C com pressão uniforme.",
    beginnerExplanation: "É a distribuição perfeita daquela colinha em formato de pontinhos brilhantes atrás da entretela termocolante. Quando os pontinhos de cola são bem miudinhos e espalhados por igual, a entretela gruda no tecido de forma macia e lisa, sem empelotar nem deixar a roupa dura como uma tábua!",
    howItWorks: [
      "1. Cilindros microperfurados a laser aplicam milhares de pontinhos microscópicos de resina na entretela.",
      "2. A bordadeira corta o pedaço de entretela e coloca os pontinhos virados contra o avesso da peça.",
      "3. O calor da prensa ou do ferro funde os pontinhos simultaneamente.",
      "4. A resina líquida penetra apenas na superfície das fibras têxteis sem vazar para a frente.",
      "5. Ao esfriar, o tecido e a entretela tornam-se um corpo único, estável e perfeitamente maleável.",
      "6. A máquina de bordar penetra o conjunto com facilidade sem grudar cola na agulha."
    ],
    applications: [
      "Bordados delicados em camisas polo de piquet, malhas de algodão e roupas de bebê.",
      "Estruturação de punhos, golas e vistas de camisaria fina.",
      "Bordados em tecidos finos de viscose que deformam com entretelas comuns.",
      "Prevenção de franzimento em tecidos de seda e microfibra esportiva."
    ],
    characteristics: [
      "Toque macio que não altera o caimento natural do vestuário.",
      "Aderência uniforme que resiste a lavagens frequentes em máquina.",
      "Não empapa a agulha com resíduos de adesivo durante o bordado."
    ],
    commonErrors: [
      "❌ Usar entretelas baratas com resinagem irregular (que têm placas grossas de cola que grudam na agulha).",
      "❌ Aplicar calor excessivo fazendo a resina evaporar ou vazar para o lado direito do tecido.",
      "❌ Passar o ferro de forma arrastada em vez de prensar ponto a ponto."
    ],
    troubleshootingTips: [
      "A agulha está ficando com uma crosta branca de cola: a entretela tem resina de má qualidade ou foi colada com temperatura insuficiente; limpe a agulha e troque de marca de entretela.",
      "O tecido ficou com aspecto engomado e duro: a entretela tem gramatura pesada demais; mude para entretela de malha termocolante com resina microponto (Double-Dot).",
      "A entretela descolou na primeira lavagem: aumente o tempo de prensagem em 3 segundos na prensa térmica para garantir a fusão completa da resina."
    ],
    dicaArtrelados: "Ao comprar entretela termocolante, olhe contra a luz: os pontinhos de cola devem ser bem pequenininhos, uniformes e brilhantes como uma poeira de cristal! Evite aquelas entretelas com manchas grossas de cola que parecem plástico espalhado; elas estragam o toque da peça e grudam na agulha!",
    voceSabia: "A tecnologia de micro-resina Double-Dot foi criada na Alemanha na década de 1970 para os ternos de alta costura da Hugo Boss, para que as entretelas coladas suportassem as chuvas européias sem descolar as lapelas dos paletós!",
    practicalExercise: "Pegue duas amostras de entretelas termocolantes diferentes. Cole ambas em dois retalhos de malha de camiseta. Dobre os retalhos ao meio e sinta qual deles manteve a maciez e a flexibilidade original do tecido.",
    quickSummary: "Uniformização da Resina é a distribuição perfeita de micropontos de cola na entretela que garante fixação segura mantendo o tecido macio e sem sujar a agulha.",
    recommendedSettings: {
      speedPPM: "N/A (Termocolagem)",
      needleType: "75/11 Ponta Bola (SES)",
      density: "Resinagem padrão: Double-Dot 14 g/m² a 140 °C"
    },
    relatedTerms: [
      "Entretela Termocolante",
      "Resina Double-Dot",
      "Prensa Térmica",
      "Termofixação",
      "Gramatura de Não-Tecido"
    ],
    tags: [
      "u-082",
      "resina",
      "entretela termocolante",
      "double-dot",
      "aderencia",
      "estabilizadores",
      "artrelados"
    ],
    bibliographicReferences: [
      "FREUDENBERG INTERLINING. Advanced Adhesive Dot Coating & Substrate Technologies. Weinheim, 2022.",
      "VILENE NONWOVENS. Fusible Interlinings Application & Care Standards. Swindon, 2021.",
      "ARTRELADOS. Guia Completo de Entretelas, Adesivos e Estabilização Têxtil. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-083-utilizacao-de-fios-conductivos-para-smart-textiles",
    code: "U-083",
    term: "Utilização de Fios Condutivos e Bordados Eletrônicos (Conductive Thread & E-Textiles / Smart Wearables)",
    pronunciation: "u-ti-li-za-são de fi-os con-du-ti-vos e bor-da-dos e-le-tro-ni-cos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'conductivus' (que conduz) e do inglês 'smart textiles' (têxteis inteligentes). Fronteira tecnológica da integração entre mecatrônica, nanotecnologia e bordado digital.",
    summary: "Técnica de bordar circuitos eletrônicos, trilhas condutoras de eletricidade e sensores capacitivos utilizando linhas com filamentos de prata, cobre ou aço inoxidável.",
    definition: "A Utilização de Fios Condutivos e Bordados Eletrônicos (Conductive Yarn Integration & Embroidered Circuitry in Smart Wearables) é o processo de aplicação de fios têxteis tecnológicos de alta condutividade elétrica (compostos por filamentos de poliamida banhados a prata pura 99% ou microfibras de aço inoxidável AISI 316L) através de máquinas de bordar convencionais. O bordado substitui fios de cobre rígidos e placas de circuito impresso (PCB), criando trilhas elétricas flexíveis, botões de toque capacitivos, antenas de radiofrequência (RFID) e sensores biométricos de frequência cardíaca diretamente costurados nas peças de vestuário.",
    technicalDetails: "Resistência linear padrão: 50 a 250 Ohms/metro (para linhas de sinal) ou < 5 Ohms/metro (para alimentação de energia). Exige agulhas de olho largo (Topstitch / Metallic 80/12 ou 90/14) para não raspar a camada condutiva de prata e velocidade reduzida para 500 a 650 PPM.",
    beginnerExplanation: "É bordar circuitos elétricos de verdade usando linhas especiais feitas com fios de prata e metal flexível! Com isso, você pode bordar roupas que acendem luzes de LED, camisetas esportivas que medem os batimentos do coração ou jaquetas com botões bordados que trocam a música do celular!",
    howItWorks: [
      "1. A matriz do circuito é desenhada no software com linhas contínuas sem cruzar polos positivos e negativos.",
      "2. Instala-se o cone de fio condutivo de prata na máquina de bordar.",
      "3. Coloca-se agulha especial com olho largo para não esfolar o metal.",
      "4. A máquina borda as trilhas condutoras sobre o tecido com ponto corrido duplo ou cetim estreito.",
      "5. Conectam-se microcontroladores (como Arduino LilyPad) e luzes LED nos pontos de contato bordados.",
      "6. A peça torna-se uma roupa inteligente, funcional, flexível e totalmente lavável."
    ],
    applications: [
      "Roupas esportivas de alta performance com monitoramento cardíaco e muscular.",
      "Fardamentos de bombeiros e militares com sensores de temperatura corporal e GPS.",
      "Uniformes promocionais de shows com efeitos luminosos em LEDs bordados.",
      "Roupas infantis interativas com sons e sensores de toque bordados."
    ],
    characteristics: [
      "Circuito 100% flexível, maleável e imperceptível ao toque.",
      "Resistência à água e a ciclos normais de lavagem doméstica.",
      "Abre um mercado de altíssimo valor e tecnologia de ponta para o ateliê."
    ],
    commonErrors: [
      "❌ Bordejar cruzando a linha positiva com a negativa (gerando curto-circuito instantâneo no sistema eletrônico).",
      "❌ Usar velocidades altas (> 800 PPM) que raspam a prata do fio por atrito.",
      "❌ Cortar o fio com trimer automático sem deixar pontas suficientes para soldagem ou nó de contato."
    ],
    troubleshootingTips: [
      "O LED bordado não acende: use um multímetro na escala de continuidade e meça as pontas da trilha bordada para checar se o fio arrebentou por dentro do tecido.",
      "A máquina está desfiando a linha de prata: substitua a agulha por uma de olho largo com banho de titânio 90/14 e diminua a velocidade para 500 PPM.",
      "Curto-circuito ao lavar a peça: passe verniz têxtil isolante transparente sobre os pontos de cruzamento elétrico."
    ],
    dicaArtrelados: "Ao criar matrizes para roupas que acendem luzinhas LED: programe pequenos círculos em ponto cheio (como 'ilhoses') nas pontas das trilhas elétricas! Esses círculos bordados funcionam como ilhas de contato perfeitas para costurar ou soldar os LEDs sem soltar!",
    voceSabia: "A agência espacial americana (NASA) e a Agência Espacial Europeia utilizam bordado eletrônico com fios condutivos nas roupas dos astronautas para criar sensores de respiração que não pesam nada e nunca quebram durante as missões na estação espacial!",
    practicalExercise: "Adquira uma amostra de linha condutiva e uma bateria tipo moeda 3V com um LED. Crie uma matriz simples de duas linhas retas. Borde em um retalho e encaixe a bateria e o LED nas pontas para ver o circuito brilhar.",
    quickSummary: "Fios Condutivos permitem bordar circuitos elétricos, sensores e LEDs diretamente nas roupas, transformando peças normais em vestuário tecnológico inteligente.",
    recommendedSettings: {
      speedPPM: "500 a 650 PPM",
      needleType: "80/12 ou 90/14 Metallic / Topstitch",
      density: "Ponto corrido duplo com passo de 2.5 mm"
    },
    relatedTerms: [
      "Smart Textiles (Têxteis Inteligentes)",
      "E-Textiles",
      "Fio de Prata Condutivo",
      "Resistência Ôhmica Linear",
      "Sensor Capacitivo Têxtil"
    ],
    tags: [
      "u-083",
      "fios condutivos",
      "e-textiles",
      "smart wearables",
      "tecnologia",
      "circuitos bordados",
      "artrelados"
    ],
    bibliographicReferences: [
      "BERZOWSKI, P. Smart Textiles and Electronic Embroidery Engineering. London: Springer, 2022.",
      "MADEIRA GARN. HC - High Conductive Specialty Threads Application Handbook. Freiburg, 2021.",
      "ARTRELADOS. Inovação Têxtil: Bordados Eletrônicos e Wearables Inteligentes. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-084-unidade-de-parada-emergencial-e-rearme-mecanico",
    code: "U-084",
    term: "Unidade de Parada Emergencial e Rearme Mecânico (E-Stop Button & Safety Interlock Reset)",
    pronunciation: "u-ni-da-de de pa-ra-da e-mer-gen-si-al e re-ar-me me-ca-ni-co",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do inglês 'Emergency Stop' (botão cogumelo de segurança) e do francês 'réarmer'. Norma internacional de segurança do trabalho em maquinário industrial (ISO 13850 / NR-12).",
    summary: "Botão cogumelo vermelho de emergência de ação rápida que corta a energia dos motores instantaneamente em situações de perigo, e procedimento correto de rearme.",
    definition: "A Unidade de Parada Emergencial e Rearme Mecânico (Emergency Stop Mushroom Pushbutton & Safety Interlock Reset Protocol) é o dispositivo de segurança de atuação primária obrigatório em máquinas de bordar industriais e semi-industriais. Ao ser pressionado pelo operador diante de uma colisão iminente do bastidor, quebra maciça de agulhas ou aprisionamento de vestuário, o botão corta instantaneamente o fornecimento elétrico para os circuitos de potência dos servomotores do pantógrafo e do cabeçote através de relés redundantes de segurança, preservando a memória de coordenadas (ponto atual do bordado) para permitir o retorno sem perda da peça.",
    technicalDetails: "Em conformidade com a norma NR-12 e ISO 13850 (Categoria de Parada 0/1). Possui trava mecânica de retenção tipo 'gira para destravar' (*twist to release*). O rearme só é concluído após a rotação manual do botão e confirmação no painel HMI para evitar partidas acidentais.",
    beginnerExplanation: "É aquele botão vermelho grandão em formato de cogumelo que fica na frente da máquina. Se acontecer qualquer coisa errada (como o bastidor bater ou prender uma manga), você bate a mão nele na hora e a máquina desliga no mesmo segundo! Para voltar, é só girar o botãozinho para destravar!",
    howItWorks: [
      "1. A bordadeira percebe um ruído estranho ou o bastidor enroscando na manga de uma jaqueta.",
      "2. Bate a palma da mão no botão vermelho de emergência (E-Stop).",
      "3. Os contatos elétricos abrem instantaneamente e cortam a força de todos os motores.",
      "4. O computador grava na memória Flash a coordenada X/Y e o número exato do ponto onde parou.",
      "5. A operadora desvencilha a peça presa e resolve o problema com segurança e calma.",
      "6. Gira o botão cogumelo no sentido horário para soltar a trava mecânica.",
      "7. Pressiona 'Reset' no painel; a máquina volta ao ponto exato e continua o bordado sem estragar a peça."
    ],
    applications: [
      "Proteção imediata contra acidentes com dedos e mãos durante a operação.",
      "Interrupção de colisões severas do bastidor contra o cabeçote ou chapa de agulha.",
      "Prevenção de danos graves ao pantógrafo e quebra de eixos por travamento mecânico.",
      "Conformidade obrigatória com normas de segurança do trabalho (NR-12)."
    ],
    characteristics: [
      "Acionamento imediato por impacto físico (fácil de acertar em pânico).",
      "Preservação digital da memória da matriz bordada.",
      "Mecanismo de trava mecânica que impede religamento involuntário."
    ],
    commonErrors: [
      "❌ Puxar a tomada da parede em vez de apertar o botão de emergência (desligar na tomada faz a máquina perder a memória do ponto e perder o alinhamento).",
      "❌ Tentar destravar o botão enquanto a mão ainda está mexendo perto das agulhas.",
      "❌ Obstruir o botão de emergência com rolos de entretela ou caixas de linha."
    ],
    troubleshootingTips: [
      "A máquina não liga e o painel diz 'Emergency Stop Active': o botão vermelho está pressionado; gire-o suavemente no sentido horário para ele saltar para fora.",
      "A máquina desligou no botão mas perdeu o ponto: após destravar, use a função 'Restore / Retomar Bordado' no painel para o bastidor retornar à coordenada gravada.",
      "O botão não trava ao ser empurrado: o mecanismo interno de mola quebrou; solicite a substituição imediata por um técnico qualificado."
    ],
    dicaArtrelados: "Nunca tenha medo de bater a mão no botão vermelho de emergência se ouvir qualquer barulho estranho! As máquinas modernas gravam o número exato do pontinho onde pararam. Bater no botão na hora certa salva a sua máquina, a sua agulha e a roupa cara do cliente!",
    voceSabia: "O formato de cogumelo e a cor vermelha com fundo amarelo foram padronizados internacionalmente após a Segunda Guerra Mundial, para que qualquer trabalhador, mesmo sem saber falar a língua do país da máquina, soubesse onde bater para parar a produção em emergências!",
    practicalExercise: "Com a máquina bordando um retalho de teste, aperte o botão de emergência. Observe a parada imediata. Gire o botão para destravar, aperte 'Reset' no painel e veja a máquina retomar o bordado no mesmo furinho.",
    quickSummary: "Botão de Emergência é o dispositivo vermelho que desliga a máquina no mesmo segundo ao ser pressionado, protegendo a bordadeira e salvando o equipamento.",
    recommendedSettings: {
      speedPPM: "Interrupção em 0.1 s",
      needleType: "N/A",
      density: "Norma de segurança: ISO 13850 / NR-12"
    },
    relatedTerms: [
      "Botão Cogumelo (E-Stop)",
      "Retomada de Ponto (Power Recovery)",
      "Segurança do Trabalho (NR-12)",
      "Painel de Controle",
      "Parada de Emergência"
    ],
    tags: [
      "u-084",
      "emergencia",
      "e-stop",
      "segurança",
      "botao cogumelo",
      "rearme",
      "nr-12",
      "artrelados"
    ],
    bibliographicReferences: [
      "ABNT. NBR ISO 13850: Segurança de Máquinas — Função de Parada de Emergência. Rio de Janeiro, 2021.",
      "TAJIMA INDUSTRIAL MACHINERY. Safety Operations and Emergency Stop Maintenance. Nagoya, 2022.",
      "ARTRELADOS. Manual de Segurança, Saúde Operacional e Ergonomia no Ateliê de Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-085-underlay-circular-e-radial-para-esferas",
    code: "U-085",
    term: "Underlay Circular e Radial para Esferas e Olhos (Radial & Circular Underlay for Balls & Irises)",
    pronunciation: "an-der-lei sir-cu-lar e ra-di-al pa-ra es-fe-ras e o-lhos",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do inglês 'radial underlay' (subponto em raios de roda) e do latim 'sphaera' (globo, círculo perfeito). Geometria de estruturação esférica em matrizes digitais.",
    summary: "Método de programação de subpontos concêntricos e radiais em formato de teia ou raios de bicicleta, garantindo que círculos, bolas esportivas e olhos fiquem 100% redondos.",
    definition: "O Underlay Circular e Radial para Esferas e Olhos (Concentric Radial Underlay & Spherical Distortion Prevention) é uma técnica de digitalização especializada para objetos redondos, íris de personagens e esferas tridimensionais (como bolas de futebol, basquete ou globos terrestres). Em vez de utilizar subpontos lineares convencionais (que achatam o círculo devido à tração unilinear), o software gera trajetórias em espiral concêntrica combinadas com raios ortogonais partindo do centro (*Spoke / Starburst Underlay*). Isso distribui o repuxo uniformemente em 360 graus, mantendo a circunferência matematicamente perfeita.",
    technicalDetails: "Raio de ação: 8 a 16 raios internos com passo de 2,5 mm interligados por anéis concêntricos a cada 2,0 mm de diâmetro. Recuo de borda de 0,8 mm. Elimina o efeito de ovalização em tecidos de malha sem necessidade de compensação de repuxo exagerada.",
    beginnerExplanation: "Quando a máquina borda um círculo ou uma bolinha de olho, o puxão da linha tende a esmagar o círculo e transformá-lo num ovo! Com o underlay radial, a máquina costura primeiro uma teia de aranha redondinha por baixo; essa teia segura o tecido por igual em todos os lados e a bolinha fica perfeitamente redonda!",
    howItWorks: [
      "1. O programador cria o círculo no software e seleciona o padrão de preenchimento radial ou circular.",
      "2. Configura a base para 'Radial / Concentric Underlay'.",
      "3. A máquina borda primeiro os raios e os anéis circulares de dentro para fora.",
      "4. As fibras do tecido são travadas em todos os 360 graus contra a entretela.",
      "5. A máquina sobrepõe o ponto de acabamento de cetim ou tatami.",
      "6. A força de repuxo é dissipada igualmente em todas as direções.",
      "7. Ao soltar do bastidor, o círculo permanece 100% redondo sem virar elipse."
    ],
    applications: [
      "Bordados de bolas de futebol, basquete, tênis e globos terrestres.",
      "Íris e pupilas de olhos em bordados realistas de pets e retratos humanos.",
      "Logotipos redondos corporativos em camisas polo e bonés.",
      "Bordados de medalhas, brasões circulares e moedas comemorativas."
    ],
    characteristics: [
      "Garante redondeza geométrica perfeita mesmo em malhas elásticas.",
      "Cria um suave efeito abaulado 3D natural no centro do círculo.",
      "Evita que o contorno preto circular fique com falhas de encaixe nas laterais."
    ],
    commonErrors: [
      "❌ Usar underlay reto em uma direção só para bordar círculos (o círculo sempre vira um ovo).",
      "❌ Colocar muitos raios no centro, criando um acúmulo de nós e quebrando a agulha no meio do círculo.",
      "❌ Bordejar círculos em malha sem entretela de corte limpo (Cut-Away)."
    ],
    troubleshootingTips: [
      "O contorno circular não encaixou nas laterais da bola: o círculo ovalou por falta de sustentação radial; adicione underlay radial e aumente a compensação de repuxo para 0,40 mm.",
      "A agulha bateu duro e fez um buraco no centro do círculo: reduza o número de raios radiais e ative o filtro de eliminação de pontos curtos no centro.",
      "O olho do personagem parece murcho e sem vida: utilize underlay concêntrico antes do ponto de acabamento para criar relevo arredondado."
    ],
    dicaArtrelados: "Para nunca mais ter problemas com círculos virando 'ovos' em camisas polo: programe uma base em formato de teia de aranha (underlay radial com anéis concêntricos)! O círculo fica tão redondinho que parece desenhado com compasso!",
    voceSabia: "Os desenhistas dos estúdios Disney exigem que todas as matrizes dos olhos do Mickey Mouse e pato Donald usem obrigatoriamente sob-pontos radiais concêntricos para garantir que o olhar dos personagens nunca perca a proporção redonda perfeita em nenhum produto licenciado!",
    practicalExercise: "Digitalize dois círculos de 4 cm: um com underlay corrido reto simples e outro com underlay radial em teia. Borde ambos em uma malha de camiseta e meça com uma régua o diâmetro horizontal e vertical de cada um.",
    quickSummary: "Underlay Radial é a base em formato de teia concêntrica que distribui o repuxo em 360°, fazendo círculos e olhos ficarem perfeitamente redondos.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11",
      density: "Raios: 8 a 12 divisões com anéis a cada 2.0 mm"
    },
    relatedTerms: [
      "Geometria de Círculo Perfeito",
      "Underlay Concêntrico",
      "Compensação de Ovalização",
      "Bordado de Retratos e Pets",
      "Contorno Circular"
    ],
    tags: [
      "u-085",
      "underlay radial",
      "circulo",
      "esferas",
      "olhos",
      "redondeza",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Radial Stitch Mapping and Circular Underlay Standards. Sydney, 2022.",
      "TAJIMA DG/ML BY PULSE. Geometric Symmetry & Distortion Control. Mississauga, 2021.",
      "ARTRELADOS. Técnicas Avançadas de Digitalização: Como Bordar Círculos Perfeitos. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-086-umectacao-de-fios-metalicos-com-silicone-fluido",
    code: "U-086",
    term: "Umectação de Fios Metálicos com Silicone Fluido (Metallic Thread Lubrication & Silicone Conditioning)",
    pronunciation: "u-mek-ta-são de fi-os me-ta-li-cos com si-li-co-ne flui-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'humectare' (umedecer, hidratar) e do polímero sintético 'silicone'. Prática clássica de condicionamento tribológico de fios especiais e metálicos.",
    summary: "Aplicação de óleo de silicone puro 100% mineral no feltro lubrificante do cabeçote ou diretamente no carretel de linha metálica, eliminando quebras e atrito na agulha.",
    definition: "A Umectação de Fios Metálicos com Silicone Fluido (Metallic Thread Conditioning & Low-Viscosity Silicone Lubrication) é o processo preventivo de tratamento superficial aplicado a linhas com revestimento metálico de poliéster e poliamida metalizada (Lurex / Madeira Metallic / Gold & Silver Threads). Por serem linhas rígidas, sem elasticidade e com alto coeficiente de atrito estático, a passagem contínua pelos discos tensores e pelo olho da agulha gera microfraturas na lâmina de alumínio e acúmulo de calor. A aplicação de óleo de silicone 100% dimetilsiloxano de baixa viscosidade (350 cSt) forma uma película molecular lubrificante que reduz o atrito em até 60%, garantindo bordados ininterruptos.",
    technicalDetails: "Utilização de óleo de silicone grau alimentício/têxtil não-manchante (Viscosidade: 350 a 500 cSt). Aplicação por capilaridade através do feltro dosador do cabeçote ou esponja acoplada ao suporte aéreo de cones. É volátil e evapora sem manchar tecidos nobres após algumas horas.",
    beginnerExplanation: "A linha metálica dourada ou prateada é meio durinha e áspera; quando passa rápido no buraquinho da agulha, ela esquenta, rala e arrebenta a toda hora. Pingar umas gotinhas de óleo de silicone próprio no feltro da máquina faz a linha metálica escorregar lisa e macia como manteiga, sem quebrar nunca mais!",
    howItWorks: [
      "1. A bordadeira pinga 3 a 4 gotas de óleo de silicone líquido puro no feltro lubrificante do cabeçote.",
      "2. Passa a linha metálica pelo meio do feltro umedecido.",
      "3. Ao ser tracionada, a linha recebe uma microcamada invisível e fria de silicone.",
      "4. A linha desliza pelos tensores com tensão regular e estável.",
      "5. Passa pelo olho da agulha sem sofrer atrito, sem esquentar e sem descascar o brilho dourado.",
      "6. A máquina borda em velocidade normal e a peça final fica com brilho de joia impecável."
    ],
    applications: [
      "Bordados litúrgicos, mantos sacros e estandartes com linhas douradas e prateadas.",
      "Brasões militares de gala, quepes e divisas com fios metálicos espessos.",
      "Vestidos de noiva, vestidos de festa e detalhes brilhantes em alta costura.",
      "Bordados com linhas que ficaram guardadas por anos e ressecaram no cone."
    ],
    characteristics: [
      "Elimina 90% das quebras de linhas metálicas e especiais.",
      "Não deixa manchas oleosas nem altera a cor brilhante da linha.",
      "Protege os discos tensores e o olho da agulha contra desgaste abrasivo."
    ],
    commonErrors: [
      "❌ Usar óleo de máquina comum ou desengripante (WD-40) na linha (eles mancham o tecido e fedem).",
      "❌ Encharcar o cone de linha com excesso de líquido (o silicone deve ser aplicado por contato leve no feltro).",
      "❌ Bordejar linha metálica com agulha comum 75/11 em vez de agulha própria para metálicos (Metallic 90/14)."
    ],
    troubleshootingTips: [
      "A linha dourada está descascando e empacando no olho da agulha: umedeça o feltro com silicone líquido e troque a agulha por uma Metallic 90/14 com olho grande e polido.",
      "A linha metálica está pulando do cone e dando nós: vista uma redinha de nylon (Thread Net) no cone e pingue duas gotas de silicone na redinha.",
      "Apareceram pontinhos úmidos no tecido: aguarde 1 hora; o silicone mineral puro para bordado evapora completamente sem deixar resíduos."
    ],
    dicaArtrelados: "O segredo de ouro para bordar com linha metálica sem estresse: agulha própria para metálicos 90/14 (que tem o furo grandão), velocidade baixada para 600 PPM e 3 gotinhas de silicone líquido no feltro por onde a linha passa! A linha corre soltinha e o bordado vira uma verdadeira joia!",
    voceSabia: "Os mestres bordadores do Vaticano já usavam banha de baleia purificada no século XVI para lubrificar os fios de ouro puro maciço e fazê-los deslizar suavemente sobre as sedas papais sem romper os filamentos preciosos!",
    practicalExercise: "Coloque uma linha metálica na máquina e borde 1.000 pontos a seco. Em seguida, pingue silicone no feltro guia e borde mais 1.000 pontos. Compare o som suave da máquina e a total ausência de fiapos de metal acumulados na agulha.",
    quickSummary: "Umectação com Silicone é a aplicação de óleo mineral lubrificante que faz linhas metálicas e ressecadas deslizarem pela agulha sem quebrar nem descascar.",
    recommendedSettings: {
      speedPPM: "550 a 650 PPM",
      needleType: "80/12 ou 90/14 Metallic (Olho Largo)",
      density: "Alívio de tensão superior: 80 a 100 gf"
    },
    relatedTerms: [
      "Linhas Metálicas (Lurex)",
      "Agulha Metallic / Topstitch",
      "Óleo de Silicone Mineral",
      "Feltro Lubrificante",
      "Redinha de Cone (Thread Net)"
    ],
    tags: [
      "u-086",
      "silicone",
      "fios metalicos",
      "lubrificacao",
      "lurex",
      "linhas especiais",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Metallic Embroidery Threads: Best Practices and Lubrication Guide. Freiburg, 2022.",
      "GUNOLD GMBH. Specialty Metallic & Viscose Thread Handling Manual. Stockstadt, 2021.",
      "ARTRELADOS. Segredos do Bordado com Fios Metálicos, Dourados e Prateados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-087-universalidade-de-formatos-de-arquivos-tst-dst-pes",
    code: "U-087",
    term: "Universalidade de Formatos de Arquivos de Bordado (Embroidery File Formats & Machine Code Compatibility)",
    pronunciation: "u-ni-ver-sa-li-da-de de for-ma-tos de ar-qui-vos de bor-da-do",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminina composta.",
    category: "Formatos e Conversão de Arquivos",
    origin: "Do latim 'universalis' (que abrange tudo). Padronização internacional de formatos binários de coordenadas para máquinas de bordado computadorizado.",
    summary: "Guia completo dos formatos de arquivos de máquina (.DST, .PES, .JEF, .EXP, .XXX) versus arquivos editáveis de matriz (.EMB, .ART, .PES Master) e sua correta exportação.",
    definition: "A Universalidade de Formatos de Arquivos de Bordado (Stitch File Formats vs. Native Outline Files & Cross-Platform Protocol) é o conjunto de padrões de codificação digital que viabiliza a comunicação entre os softwares de digitalização e os diferentes sistemas operacionais das máquinas de bordar mundiais. Divide-se categoricamente em: 1) Arquivos Nativos de Objetos/Contornos (como .EMB da Wilcom ou .ART da Bernina), que guardam fórmulas matemáticas e nós vetoriais editáveis; e 2) Arquivos de Pontos/Máquina (como .DST da Tajima, .PES da Brother, .JEF da Janome e .EXP da Melco/Bernina), que contêm apenas coordenadas brutas de perfuração (X, Y) e comandos de parada, corte e salto.",
    technicalDetails: "O formato Tajima .DST é o padrão universal industrial (lido por 99% das máquinas do planeta), porém não armazena a tabela de cores RGB no cabeçalho (exige folha de produção impressa). Formatos domésticos (.PES, .JEF, .VP3) armazenam a paleta de cores interna e limites de bastidor dedicados.",
    beginnerExplanation: "É a linguagem que a sua máquina entende! O arquivo do programa (.EMB) é como a receita do bolo com todos os ingredientes que você pode mexer e mudar o tamanho. O arquivo da máquina (.PES, .DST, .JEF) é o bolo já pronto e assado: a máquina só lê onde furar e não deixa você mudar o tamanho sem estragar os pontos!",
    howItWorks: [
      "1. A bordadeira cria e programa a matriz no formato vetorial mestre (.EMB).",
      "2. Salva o arquivo mestre no computador para poder fazer alterações futuras com facilidade.",
      "3. Utiliza a função 'Exportar Arquivo de Máquina' e escolhe a extensão exata da sua máquina (ex: .PES para Brother, .JEF para Janome, .DST para industriais).",
      "4. Salva o arquivo de pontos diretamente no Pen Drive USB formatado em FAT32.",
      "5. Conecta o pen drive na máquina de bordar e carrega o arquivo.",
      "6. A máquina lê cada coordenada de ponto com precisão milimétrica e executa o trabalho perfeitamente."
    ],
    applications: [
      "Conversão e envio de matrizes para clientes com máquinas de marcas variadas.",
      "Padronização de arquivos em ateliês mistos com máquinas domésticas e industriais.",
      "Venda e comercialização de matrizes em lojas virtuais de bordado.",
      "Armazenamento e organização do catálogo de matrizes no computador."
    ],
    characteristics: [
      "O formato .DST funciona em quase qualquer máquina do mundo.",
      "Arquivos de máquina nunca devem ser redimensionados em mais de 10% sem o arquivo fonte mestre.",
      "Facilidade de transmissão por pen drive, cabo de rede ou conexão Wi-Fi."
    ],
    commonErrors: [
      "❌ Tentar abrir um arquivo .EMB direto no painel da máquina de bordar (a máquina não reconhece arquivo de programa).",
      "❌ Aumentar um arquivo .DST em 50% na tela da máquina (os pontos se afastam e o bordado fica ralo e com buracos).",
      "❌ Deletar o arquivo mestre editável e guardar apenas o arquivo de máquina convertido."
    ],
    troubleshootingTips: [
      "A máquina não reconhece o pen drive: certifique-se de que o pen drive está formatado no padrão FAT32 e não tem capacidade maior que 8GB em máquinas mais antigas.",
      "O arquivo .DST abriu na máquina com cores todas trocadas: isso é normal no formato .DST; configure a ordem das cores diretamente na tela da sua máquina.",
      "O nome da matriz não aparece no painel: use nomes curtos com até 8 letras, sem acentos, sem cedilha e sem caracteres especiais (ex: FLOR01.PES)."
    ],
    dicaArtrelados: "Guarde SEMPRE uma cópia da sua matriz no formato mestre do seu programa (.EMB, .ART ou .BE)! Se amanhã o cliente pedir para aumentar o bordado ou mudar uma letra, você faz em 10 segundos! No arquivo da máquina (.PES ou .DST) você não consegue mexer nos pontos com perfeição!",
    voceSabia: "O formato .DST foi criado pela empresa japonesa Tajima na década de 1980 e seus dados eram gravados originalmente em fitas de papel perfuradas (iguais às dos primeiros computadores da história), onde cada furinho no papel correspondia a um pulso do motor da agulha!",
    practicalExercise: "Abra uma matriz no seu programa de computador. Salve uma cópia em .DST e outra em .PES (ou no formato da sua máquina). Abra ambas e observe como o formato nativo permite editar os objetos individualmente enquanto o formato de máquina mostra apenas os furinhos da agulha.",
    quickSummary: "Formatos de Arquivo são as extensões que as máquinas leem (.DST, .PES, .JEF). Guarde sempre o arquivo mestre editável para poder alterar cores e tamanhos no futuro.",
    recommendedSettings: {
      speedPPM: "N/A (Transferência Digital)",
      needleType: "N/A",
      density: "Formatação USB: FAT32 | Nomes com máx. 8 caracteres"
    },
    relatedTerms: [
      "Formato .DST (Tajima Universal)",
      "Formato .PES (Brother/Babylock)",
      "Formato .JEF (Janome)",
      "Arquivo Mestre Editável (.EMB)",
      "Formatação FAT32"
    ],
    tags: [
      "u-087",
      "formatos de arquivo",
      "dst",
      "pes",
      "jef",
      "conversao",
      "compatibilidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Embroidery File Format Standards & Stitch Data Structures. Sydney, 2022.",
      "BROTHER INDUSTRIES. PES & DST Machine Compatibility Protocols. Nagoya, 2021.",
      "ARTRELADOS. Guia Definitivo de Formatos, Conversões e Organização de Matrizes de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-088-unidade-de-guia-fio-oscilante-da-mola-tira-fio",
    code: "U-088",
    term: "Unidade de Guia-Fio Oscilante da Mola Tira-Fio (Take-Up Spring Check Wire & Thread Guide Bridge)",
    pronunciation: "u-ni-da-de de gui-a fi-o o-si-lan-te da mo-la ti-ra fi-o",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do latim 'oscillum' (movimento de balanço) e 'filum' (fio). Mecanismo de compensação elástica de tensão dinâmica durante o ciclo de 360° da agulha.",
    summary: "Ponte metálica e limitador angular de curso da mola tira-fio (Check Spring), responsável por manter a linha esticada até a agulha penetrar o tecido.",
    definition: "A Unidade de Guia-Fio Oscilante da Mola Tira-Fio (Take-Up Check Spring Travel Bridge & Dynamic Thread Guide Assembly) é o conjunto mecatrônico regulável que delimita o curso angular e a tensão da mola de compensação rápida (Check Spring) localizada logo após o disco tensor primário. Sua função mecânica indispensável é recolher a folga estática da linha superior durante o movimento descendente do estica-fio, mantendo o fio sob leve tensão até o instante exato em que a ponta da agulha penetra o tecido; no momento da perfuração, o limitador apoia a mola, liberando a linha para a formação do laço sem puxões bruscos.",
    technicalDetails: "Curso angular operacional recomendado: 6 mm a 8 mm de deflexão vertical; Força elástica calibrada entre 5 e 10 gramas-força (gf). A mola deve atingir seu batente de descanso inferior exatamente quando a ponta da agulha toca a superfície do tecido tensionado no bastidor.",
    beginnerExplanation: "É aquela pecinha de metal com uma molinha fininha que fica subindo e descendo perto dos discos de tensão. Ela funciona como um 'amortecedor' de linha: quando a linha fica frouxa, ela puxa a linha para cima; quando a agulha vai furar o pano, ela entrega a linha macia para não arrebentar!",
    howItWorks: [
      "1. A linha sai dos discos tensores e passa pelo ganchinho da mola tira-fio.",
      "2. O estica-fio desce e a linha tende a ficar frouxa.",
      "3. A mola tira-fio sobe suavemente e recolhe toda a folga da linha no ar.",
      "4. A agulha desce para furar o tecido.",
      "5. A mola encosta no guia limitador no instante exato da perfuração.",
      "6. A linha é liberada livremente para a lançadeira pescar o laço por baixo.",
      "7. O ponto fecha com perfeição, sem laçadas soltas nem estalos de quebra."
    ],
    applications: [
      "Eliminação de pequenos laços soltos (*loops*) na frente do bordado.",
      "Prevenção de quebra de linha no início de alta velocidade e saltos.",
      "Bordados em tecidos com espessura variável (costuras grossas e palas).",
      "Manutenção e calibração de cabeçotes industriais desregulados."
    ],
    characteristics: [
      "Ajuste duplo: força da mola (torção) e curso de movimento (posição do batente).",
      "Fabricada em arame de aço mola temperado de altíssima resistência à fadiga.",
      "Componente fundamental para o sincronismo perfeito de alta rotação."
    ],
    commonErrors: [
      "❌ Deixar a mola tira-fio com o curso travado ou quebrada (gera laços gigantes de linha no verso e falha pontos).",
      "❌ Apertar a mola com força excessiva (faz a linha arrebentar ao tocar no tecido).",
      "❌ Passar a linha por fora do ganchinho da mola tira-fio ao reabastecer a agulha."
    ],
    troubleshootingTips: [
      "Ficam sobras e laçinhos de linha solta na frente do bordado: a mola tira-fio está fraca ou com pouco curso; aumente o curso da mola para 8 mm e aperte levemente a torção.",
      "A linha arrebenta com estalo seco bem na hora que a agulha toca o tecido: a mola tira-fio está com pressão forte demais; alivie a mola girando o eixo do bloco tensor.",
      "A mola não se move durante o bordado: desmonte o bloco tensor e retire fiapos de linha que possam estar travando o eixo da mola."
    ],
    dicaArtrelados: "Sabe quando você olha a máquina trabalhando e vê aquela molinha fininha dançando e pulando no ritmo dos pontos? Ela é o coração da tensão! Se ela estiver parada ou quebrada, o bordado fica cheio de laços frouxos! Uma molinha nova e bem regulada transforma a qualidade dos seus pontos!",
    voceSabia: "A mola tira-fio (Check Spring) foi inventada no século XIX por Isaac Singer e é considerada por engenheiros mecânicos uma das mais brilhantes soluções de amortecimento passivo da história da engenharia moderna!",
    practicalExercise: "Puxe a linha com a mão logo acima da agulha: observe a molinha tira-fio descer cerca de 6 a 8 mm até bater no limitador de metal. Sinta a suavidade do amortecimento antes da linha começar a passar pelos discos de tensão.",
    quickSummary: "Mola Tira-Fio e Guia Oscilante é o amortecedor mecânico que recolhe a folga da linha e entrega o fio suavemente no momento exato do furo da agulha.",
    recommendedSettings: {
      speedPPM: "800 a 1.000 PPM",
      needleType: "75/11",
      density: "Curso da mola: 6 a 8 mm | Tensão: 6 a 8 gf"
    },
    relatedTerms: [
      "Mola Tira-Fio (Check Spring)",
      "Discos Tensores Primários",
      "Estica-Fio (Take-Up Lever)",
      "Laçadas Soltas (Looping)",
      "Tensão Dinâmica da Linha"
    ],
    tags: [
      "u-088",
      "mola tira-fio",
      "check spring",
      "guia-fio",
      "amortecedor de linha",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Check Spring Adjustment and Tension Balancing. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Upper Thread Control and Check Wire Calibration. Ichinomiya, 2021.",
      "ARTRELADOS. Calibração e Manutenção Preventiva do Bloco de Tensões e Molas de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART5: Verbete[] = [
  {
    id: "oscilosscopio-diagnostico-eletronico-placas",
    code: "O-033",
    letter: "O",
    term: "Osciloscópio e Diagnóstico Eletrônico de Placas (Driver & Sensor Diagnostics)",
    pronunciation: "os-ci-los-có-pi-o e di-ag-nós-ti-co e-le-trô-ni-co",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Manutenção & Mecânica",
    summary: "Instrumento de medição de ondas e sinais elétricos utilizado por técnicos especializados para diagnosticar falhas em drivers de motores de passo, sinais de encoders e placas-mãe de bordadeiras.",
    origin: "Do latim 'oscillare' (oscilar) + grego 'skopein' (observar), instrumento clássico de engenharia eletrônica aplicado à mecatrônica têxtil a partir da década de 1970.",
    definition: "O Osciloscópio Digital é o instrumento laboratorial avançado utilizado na manutenção eletrônica preventiva e corretiva de bordadeiras computadorizadas. Ele permite visualizar graficamente a forma de onda, frequência, amplitude e ruído dos pulsos elétricos que trafegam entre a Unidade Central de Processamento (CPU / Placa-Mãe), os drivers de controle de potência (MOSFETs/IGBTs) e os sensores magnéticos (Hall), ópticos (encoders de quadratura) e fotoelétricos de corte de linha e sincronismo de lançadeira (Main Shaft Angle Sensor).",
    howItWorks: [
      "1. O técnico conecta as pontas de prova do osciloscópio nos pontos de teste (Test Points - TP) da placa eletrônica.",
      "2. Gira o eixo principal da máquina manualmente ou aciona o modo de teste no painel.",
      "3. O osciloscópio captura os trens de pulso digital TTL (0V a 5V) emitidos pelos encoders de posição.",
      "4. Analisa a simetria das ondas quadradas dos canais A, B e Z (ponto zero de ângulo 100° da máquina).",
      "5. Detecta ruídos eletromagnéticos, quedas de tensão na fonte chaveada ou transistores com fuga de corrente.",
      "6. Localiza com precisão cirúrgica o microcomponente SMD com defeito sem a necessidade de trocar a placa-mãe inteira.",
      "7. A máquina é reparada e recalibrada com parâmetros de fábrica."
    ],
    beginnerExplanation: "É aquele aparelho com tela cheia de gráficos e ondas que os técnicos de eletrônica usam para ver a 'saúde elétrica' da máquina de bordar por dentro! Ele mostra se o cérebro da máquina (as placas de circuito) está enviando os sinais elétricos limpinhos e na hora exata para os motores e sensores funcionarem sem falhas misteriosas!",
    applications: [
      "Diagnóstico de erros intermitentes de sincronismo de cabeçote (Main Shaft Angle Error)",
      "Verificação de perda de passos em drivers de motores X e Y",
      "Calibração de sensores ópticos de quebra de linha e giro da bobina",
      "Reparo em nível de componentes em placas de potência de máquinas industriais importadas"
    ],
    technicalDetails: "Um encoder óptico de eixo principal típico de bordadeira gera 1.000 a 2.048 pulsos por rotação em dois canais em quadratura com defasagem de 90° elétricos. Se a defasagem entre os canais A e B cair abaixo de 80° devido a poeira no disco óptico, a máquina perde a sincronia de ângulo, acionando o freio do motor principal com código de erro fatal.",
    commonErrors: [
      "❌ Trocar placas inteiras de alto custo sem testar previamente se o defeito era apenas um sensor óptico sujo de pó de linha",
      "❌ Ligar a máquina em tomadas sem aterramento elétrico real (o ruído de rede descalibra os sinais lógicos dos sensores)",
      "❌ Tentar reparar circuitos eletrônicos sem pulseira antiestática (ESD), queimando os microcontroladores",
      "❌ Usar fusíveis com amperagem maior que a nominal após um curto-circuito em placas de potência"
    ],
    troubleshootingTips: [
      "Se a máquina travar com erro de 'Ângulo de Eixo Incorreto': Limpe o sensor óptico do volante com ar comprimido seco",
      "Se a máquina apresentar falhas aleatórias após ligar aparelhos pesados no mesmo cômodo: Instale um Nobreak senoidal puro com filtro de linha de qualidade",
      "Se um eixo X ou Y perder força de repente: O técnico deve checar os MOSFETs do driver do motor no osciloscópio"
    ],
    dicaArtrelados: "Proteja sempre o cérebro eletrônico da sua bordadeira: use SEMPRE um bom estabilizador ou nobreak senoidal com aterramento de verdade no ateliê! A maioria dos problemas misteriosos de placas é causada por oscilações na rede elétrica da rua!",
    voceSabia: "As placas-mãe das bordadeiras Tajima e Brother modernas utilizam microprocessadores RISC de 32 e 64 bits com poder de processamento superior ao dos computadores de bordo da missão Apollo 11 que levou o homem à Lua!",
    practicalExercise: "Observe a traseira ou lateral da sua máquina e identifique onde fica a ventoinha de refrigeração da placa eletrônica. Mantenha essa grade sempre livre de poeira e fiapos com a ajuda de um pincel limpo.",
    quickSummary: "Instrumento de medição de ondas elétricas para diagnóstico avançado de placas, sensores e motores da bordadeira.",
    relatedTerms: ["Sensor de Quebra de Linha", "Manutenção Preventiva", "Normas Técnicas de Segurança em Bordadeiras", "Motores de Passo vs. Servomotores em Bordadeiras"],
    tags: ["o-033", "osciloscopio", "eletronica", "diagnostico", "placas", "sensores", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA ELECTRONICS DIVISION. Troubleshooting Electronic Circuit Boards & Inverter Drives. Nagoya, 2021.",
      "HOROWITZ, P. & HILL, W. The Art of Electronics: Precision Measurement & Signal Analysis. Cambridge, 2020."
    ]
  },
  {
    id: "ondulacao-termica-entretela-termosoluvel",
    code: "O-034",
    letter: "O",
    term: "Ondulação Térmica em Entretela Termosolúvel (Heat-Soluble Film Warping)",
    pronunciation: "on-du-la-ção tér-mi-ca em en-tre-te-la ter-mo-so-lú-vel",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Entretelas & Estabilizadores",
    summary: "Deformação e encolhimento prematuro de filmes plásticos termosolúveis quando expostos a fontes de calor excessivo, atrito da agulha rápida ou lâmpadas halógenas próximas ao bastidor.",
    origin: "Do desenvolvimento de polímeros termoplásticos sensíveis à temperatura (filmes de EVA / polietileno de baixa fusão) na década de 1990 para substituição de químicos de lavagem.",
    definition: "A Ondulação Térmica (Heat-Soluble Film Distortion / Thermal Warping) é o fenômeno físico indesejado de contração e retração elástica que afeta filmes estabilizadores termosolúveis (entretelas que desaparecem sob o calor do ferro de passar seco). Por serem formulados para se desintegrarem em temperaturas entre 120°C e 140°C, esses filmes plásticos são extremamente sensíveis ao calor. O calor de atrito gerado pela agulha em alta velocidade (acima de 850 PPM) ou a proximidade de luminárias incandescentes/halógenas quentes pode aquecer o filme no bastidor, fazendo-o encolher, franzir e deformar o desenho antes do término do bordado.",
    howItWorks: [
      "1. O operador monta o tecido delicado com o filme termosolúvel esticado no bastidor.",
      "2. Se a máquina operar em velocidade excessiva contínua, a agulha de aço aquece por fricção a mais de 90°C.",
      "3. As perfurações repetidas transmitem calor concentrado para a borda do filme plástico.",
      "4. O polímero atinge sua zona de amolecimento térmico e sofre retração volumétrica imediata.",
      "5. O filme encolhe e puxa o tecido ao redor dos pontos, criando ondas e repuxos térmicos permanentes.",
      "6. A matriz perde o alinhamento de contorno devido ao encurtamento do filme estabilizador.",
      "7. A peça fica comprometida e com aspecto franzido."
    ],
    beginnerExplanation: "É quando aquele plástico especial que sai com o ferro quente começa a encolher e enrugar sozinho enquanto a máquina está bordando! Como esse plástico foi feito para derreter no calor, se a agulha esquentar demais (porque está bordando rápido demais) ou se tiver uma lâmpada muito quente em cima da máquina, ele toma um susto de calor, encolhe e entorta o seu bordado!",
    applications: [
      "Bordados em rendas, toalhas de veludo e tecidos que não podem ser molhados em água",
      "Confecção de apliques e brasões sobre tecidos que exigem remoção a seco da entretela",
      "Calibração de velocidade de máquina para filmes termoplásticos sensíveis",
      "Ajuste da iluminação do ateliê para luminárias frias de LED"
    ],
    technicalDetails: "Filmes termosolúveis de polietileno modificado possuem ponto de transição vítrea (Tg) em torno de 65°C a 75°C. Em bordados densos de tatami, a temperatura de ponta de agulha pode ultrapassar 110°C se a máquina operar a 900 PPM. O uso de agulhas com revestimento anti-atrito (Cool Needle / Titanium / Teflon) e redução da velocidade para 650 PPM evita a deformação térmica.",
    commonErrors: [
      "❌ Borda com filme termosolúvel em velocidade máxima (900+ PPM), aquecendo a agulha e derretendo o plástico no bastidor",
      "❌ Usar lâmpadas incandescentes ou dicroicas quentes apontadas diretamente para a área do bastidor",
      "❌ Guardar rolos de entretela termosolúvel perto de janelas com sol direto ou perto de prensas térmicas",
      "❌ Tentar remover a entretela com ferro a vapor em vez de ferro seco (o vapor pode derreter e grudar resíduos no tecido)"
    ],
    troubleshootingTips: [
      "Se o plástico encolher ao redor dos pontos: Reduza a velocidade da máquina para 600 a 650 PPM",
      "Se a agulha estiver esquentando muito: Troque para uma agulha dourada com banho de titânio (PD Finish) que dissipa melhor o calor",
      "Se o filme grudar no ferro na hora de tirar: Use uma folha de papel manteiga ou teflon entre o ferro seco e o bordado"
    ],
    dicaArtrelados: "Para remover a entretela termosolúvel com perfeição após o bordado: use o ferro de passar SEMPRE no modo 'seco' (sem água no reservatório), na temperatura de lã/seda, com um paninho de algodão seco por cima. O plástico se transforma em um pó fininho que você limpa com uma escovinha em 3 segundos!",
    voceSabia: "A entretela termosolúvel foi desenvolvida originalmente no Japão para a indústria de quimonos tradicionais de seda pura que jamais poderiam entrar em contato com água sob pena de manchar os corantes naturais!",
    practicalExercise: "Coloque um pedaço de filme termosolúvel no bastidor. Aproxime a ponta do ferro morno a 5 cm de distância e observe como o filme reage imediatamente ao calor retraindo a superfície. Entenda por que a velocidade da máquina precisa ser moderada.",
    quickSummary: "Deformação prematura de filme termosolúvel por calor da agulha ou lâmpadas; evitada com velocidade reduzida e agulhas de titânio.",
    relatedTerms: ["Entretela Termosolúvel", "Filme Hidrossolúvel", "Agulha de Titânio (PD Finish)", "Velocidade de Bordado (PPM/RPM)"],
    tags: ["o-034", "ondulacao termica", "termosoluvel", "calor", "estabilizadores", "filme plastico", "artrelados"],
    bibliographicReferences: [
      "SULKY OF AMERICA. Heat-Away Stabilizers: Thermal Properties & Temperature Calibration. Technical Bulletin, 2021.",
      "JAPAN TEXTILE POLYMERS. Thermal Sensitivity in Synthetic Embroidery Backings. Tokyo, 2020."
    ]
  },
  {
    id: "olhal-de-fixacao-parafuso-barra-agulha",
    code: "O-035",
    letter: "O",
    term: "Olhal de Fixação e Parafuso de Barra de Agulha (Needle Clamp & Set Screw)",
    pronunciation: "o-lhal de fi-xa-ção e pa-ra-fu-so da bar-ra de a-gu-lha",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Conjunto mecânico usinado na extremidade inferior da barra de agulha que recebe o cabo da agulha e a trava firmemente na altura e no ângulo de rotação perfeitamente calibrados.",
    origin: "Componente padrão de engenharia mecânica para fixação de ferramentas de corte e perfuração em eixos de movimento alternativo linear desde o século XIX.",
    definition: "O Olhal de Fixação da Barra de Agulha (Needle Clamp Body & Needle Set Screw) é o bloco usinado em aço forjado ou duralumínio instalado na extremidade inferior da barra de agulha. Ele possui um alojamento cilíndrico usinado com tolerância H7 para acomodar o cabo da agulha (Shank) até o batente superior interno (Needle Stopper Pin), e um parafuso roscado de fixação de cabeça fenda, sextavada ou Allen. Sua integridade geométrica é vital: qualquer desgaste no olhal ou folga no parafuso causa inclinação angular da agulha, provocando perda de laçadas e colisões destrutivas com a lançadeira.",
    howItWorks: [
      "1. O operador afrouxa o parafuso de fixação com a chave de fenda adequada.",
      "2. Insere a agulha nova empurrando o cabo para cima até bater firmemente no topo do alojamento (batente).",
      "3. Em agulhas industriais de cabo redondo (DBxK5), alinha a canaleta longa para a frente e a cava para trás com ângulo de 0° a 5°.",
      "4. Em agulhas domésticas (HAx1), posiciona a parte achatada do cabo voltada para trás.",
      "5. Aperta o parafuso de fixação com torque firme e moderado (sem espanar a rosca).",
      "6. A barra de agulha desce e sobe em ciclo contínuo mantendo a agulha perfeitamente vertical e rígida.",
      "7. A laçada é formada na altura milimétrica exata da ponta da lançadeira."
    ],
    beginnerExplanation: "É aquela pecinha com um parafusinho lá na ponta da barra de ferro onde você enfia a agulha para prender! Tem que empurrar a agulha até ela bater no fundinho lá em cima antes de apertar o parafuso. Se a agulha não entrar até o final ou se o parafuso ficar frouxo, a agulha desce torta, bate na chapa de metal e quebra na hora!",
    applications: [
      "Troca periódica de agulhas cegas ou tortas em máquinas domésticas e industriais",
      "Alinhamento angular correto da canaleta de linha e da cava da agulha",
      "Substituição do parafuso de fixação desgastado por excesso de torque",
      "Regulagem de altura da barra de agulha durante revisões mecânicas"
    ],
    technicalDetails: "O torque de aperto recomendado para o parafuso de fixação de agulha varia de 0,35 a 0,50 N·m. O uso de chaves de fenda com bitola incorreta ou aperto excessivo provoca o espanamento dos filetes de rosca do bloco da barra de agulha (geralmente rosca métrica M2.5 ou M3), exigindo a substituição completa da barra de agulha.",
    commonErrors: [
      "❌ Apertar o parafuso de fixação com força excessiva ('sangrando a chave'), espanando a rosca da barra de agulha",
      "❌ Não empurrar a agulha até o batente superior, deixando a agulha mais comprida do que deveria e colidindo com a lançadeira",
      "❌ Instalar a agulha industrial de cabo redondo girada para o lado errado (cava para a frente), fazendo a máquina não dar nem um ponto",
      "❌ Usar chaves de fenda inadequadas ou facas para apertar o parafuso, estragando a fenda da cabeça"
    ],
    troubleshootingTips: [
      "Se a máquina pular todos os pontos após trocar a agulha: A agulha foi colocada virada para o lado errado ou não subiu até o batente",
      "Se o parafuso de fixação ficar girando em falso sem apertar: A rosca espanou; substitua o parafuso ou o bloco do olhal da barra de agulha",
      "Se a agulha cair durante o bordado: Limpe o alojamento interno do olhal com um cotonete seco para tirar óleo acumulado e reaperte com a chave correta"
    ],
    dicaArtrelados: "Use SEMPRE a chavinha de fenda original que veio na caixinha da sua máquina para apertar a agulha: ela tem o tamanho e o cabo na medida certa para dar o aperto perfeito com a força dos dedos, sem perigo nenhum de espanar a rosca!",
    voceSabia: "Nas máquinas industriais Tajima mais modernas, os parafusos de fixação de agulha possuem cabeças coloridas codificadas por cabeça para facilitar a identificação visual rápida durante as trocas de agulhas pelos operadores!",
    practicalExercise: "Solte a agulha da sua máquina. Olhe por baixo do olhal com uma lanterna e localize o pino de batente superior. Insira a agulha novamente, sinta o 'toque' mecânico no topo e aperte com a chave de fenda correta.",
    quickSummary: "Mecanismo na barra de agulha que fixa o cabo na altura e ângulo exatos; exige aperto firme sem espanar a rosca.",
    relatedTerms: ["Barra de Agulha (Needle Bar)", "Agulha de Bordar", "Cava da Agulha (Scarf)", "Manutenção Preventiva"],
    tags: ["o-035", "olhal de fixacao", "parafuso de agulha", "barra de agulha", "needle clamp", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Needle Bar Assembly, Clamp Alignment & Torque Specifications. Tokyo, 2021.",
      "BROTHER INDUSTRIES. Needle Clamp & Screwdriver Maintenance Guidelines. Brother Manual, 2020."
    ]
  },
  {
    id: "otimizacao-pontos-curtos-filtro-micro-pontos",
    code: "O-036",
    letter: "O",
    term: "Otimização de Pontos Curtos / Filtro de Micro-Pontos (Short Stitch Filter)",
    pronunciation: "o-ti-mi-za-ção de pon-tos cur-tos / fil-tro de mi-cro pon-tos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Filtro algorítmico no software que detecta e remove ou alonga pontos com comprimento inferior a 0,3 mm ou 0,4 mm, prevenindo o efeito broca, rompimento de tecidos e quebra de linhas.",
    origin: "Desenvolvido na década de 1980 na Suíça e no Japão para solucionar o problema de furos e acúmulo de linha em curvas fechadas e vértices agudos.",
    definition: "O Filtro de Otimização de Pontos Curtos (Short Stitch & Micro-Stitch Filter) é uma rotina de processamento geométrico presente nos softwares de digitalização de alta performance. Em curvas de satim muito fechadas, bicos de estrelas, cantos vivos e nós de amarração, a matemática vetorial frequentemente gera micro-penetrações com deslocamentos minúsculos de 0,1 mm a 0,3 mm. Quando executados em alta velocidade, esses micropontos fazem a agulha bater repetidamente quase no mesmo orifício, agindo como uma broca mecânica que corta as fibras do tecido, acumula bolos de linha na lançadeira e quebra o filamento por superaquecimento. O filtro elimina esses pontos inúteis ou os redistribui espaçadamente.",
    howItWorks: [
      "1. O software analisa a malha vetorial da matriz antes da compilação para o arquivo de máquina (.DST, .PES, etc.).",
      "2. O digitalizador define o limite do filtro de pontos curtos (ex: 'Remover pontos menores que 0,3 mm').",
      "3. O algoritmo varre todos os vértices de satim e tatami em busca de penetrações excessivamente próximas.",
      "4. Nas curvas internas de satim, ativa a distribuição escalonada (Staggered Short Stitches), encurtando alternadamente uma em cada duas linhas.",
      "5. Remove micro-pontos redundantes em nós de amarração sem comprometer a segurança da costura.",
      "6. A contagem total de pontos da matriz é reduzida em 5% a 15% sem nenhuma perda visual de qualidade.",
      "7. A máquina borda macia, sem ruídos de batida seca e sem quebras de agulha."
    ],
    beginnerExplanation: "É um filtro inteligente no computador que apaga aqueles pontinhos minúsculos (menores que a ponta de um alfinete) que não servem para nada e só atrapalham! Quando a máquina tenta dar vários pontinhos no mesmo lugarzinho, a agulha vira uma verdadeira furadeira que rasga o tecido e embola a linha embaixo. Com esse filtro ligado, a matriz fica leve, rápida e não estraga o pano!",
    applications: [
      "Digitalização de pontas de estrelas, triângulos e bicos afiados em logotipos",
      "Curvas fechadas em letras cursivas e arabescos florais",
      "Limpeza e redução de pontos em matrizes pesadas baixadas da internet",
      "Prevenção de furos e rasgos em tecidos finos como seda, percal e malha"
    ],
    technicalDetails: "O diâmetro da ponta de uma agulha 75/11 é de aproximadamente 0,75 mm. Portanto, dois pontos com distância inferior a 0,35 mm caem dentro da mesma zona de impacto físico da agulha anterior. O filtro padrão deve ser configurado com tolerância de corte entre 0,30 mm e 0,40 mm. Em nós de amarração (Tie-off), os micropontos são convertidos em pontos de 0,5 mm a 0,8 mm.",
    commonErrors: [
      "❌ Desativar o filtro de pontos curtos ao digitalizar curvas de satim acentuadas, cortando o tecido no raio interno",
      "❌ Configurar o filtro com valor excessivamente alto (acima de 1,2 mm), apagando detalhes finos e cantos de letras",
      "❌ Borda matrizes antigas não otimizadas em tecidos delicados sem passar pelo filtro de limpeza de pontos",
      "❌ Manter densidade pesada em vértices pontiagudos sem aplicar a função de 'Canto Inteligente / Smart Corners'"
    ],
    troubleshootingTips: [
      "Se a agulha fizer um barulho de 'martelo' muito forte nos cantos do desenho: Aplique o filtro de pontos curtos e ative os cantos chanfrados no software",
      "Se o tecido rasgar e abrir um buraco no centro de uma flor: Reduza a densidade no centro e ative a distribuição de pontos curtos",
      "Se a linha de cima quebrar sempre nas curvas fechadas: Abra a matriz e use a ferramenta 'Limpar Pequenos Pontos / Remove Small Stitches'"
    ],
    dicaArtrelados: "Antes de colocar qualquer matriz na máquina, passe a ferramenta 'Filtrar Pontos Pequenos (< 0,4 mm)' no seu programa: você vai economizar milhares de pontos, diminuir o tempo de bordado e o seu tecido nunca mais vai rasgar!",
    voceSabia: "Em uma matriz grande e complexa com 50.000 pontos digitalizada sem cuidados, o filtro de pontos curtos pode eliminar mais de 6.000 micropontos desnecessários sem que o olho humano note absolutamente nenhuma diferença no desenho!",
    practicalExercise: "Abra uma matriz no seu programa e verifique o total de pontos. Aplique a função 'Remover Pontos Menores que 0,4 mm' e compare o novo número de pontos. Simule o bordado e veja como a matriz fica muito mais limpa e fluida.",
    quickSummary: "Filtro de software que elimina micro-pontos (<0,4 mm), evitando o efeito broca, rasgos no tecido e quebras de linha.",
    relatedTerms: ["Ponto Cheio (Satim)", "Comprimento do Ponto", "Densidade de Pontos", "Ondulação de Ponto Satim / Ponto Efeito Cetim Curvo"],
    tags: ["o-036", "pontos curtos", "filtro de pontos", "micro-pontos", "efeito broca", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Short Stitch Management, Auto-Splitting & Small Stitch Filtering. Wilcom User Guide, 2021.",
      "PULSE MICROSYSTEMS. Reducing Needle Deflection & Thread Breaks with Stitch Clean-Up Tools. DG/ML Manual, 2020."
    ]
  },
  {
    id: "over-stitching-sobreposicao-travamento-continuo",
    code: "O-037",
    letter: "O",
    term: "Over-Stitching / Sobreposição de Travamento em Bordado Contínuo (Continuous Border Over-Stitching)",
    pronunciation: "ô-ver sti-ching / so-bre-po-si-ção de tra-va-men-to",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Técnica de emenda onde os primeiros 5 a 10 pontos de um novo segmento de bordado cobrem e transpassam exatamente os pontos finais do segmento anterior, garantindo continuidade invisível e travamento mecânico sem nós visíveis.",
    origin: "Do inglês 'over-stitching' (sobrecostura), originário da técnica tradicional de montagem de barrados gigantes em xales e toalhas de mesa na indústria têxtil europeia.",
    definition: "O Over-Stitching (ou Pesponto de Sobreposição e Travamento Contínuo) é a metodologia geométrica de emenda milimétrica utilizada em bordados de barrados longos, toalhas de banquete, rolos contínuos e matrizes divididas que exigem múltiplos re-enquadramentos no bastidor (Multi-Hooping). A técnica consiste em projetar a extremidade inicial do novo bloco de bordado para sobrepor os últimos 1,5 mm a 3,0 mm do bloco anterior com densidade gradualmente decrescente (Feathering / Borda Degradê), criando uma fusão óptica e estrutural onde a emenda se torna 100% invisível e indeformável.",
    howItWorks: [
      "1. O programador divide uma matriz longa (ex: barrado de toalha de 80 cm) em 4 partes de 20 cm.",
      "2. Na zona de corte entre as partes, cria uma margem de Over-Stitching de 2,0 mm com pontas em degradê (borda suave).",
      "3. A máquina borda a Parte 1 e marca dois pequenos pontos de cruz guia (Registration Marks).",
      "4. O operador reposiciona a toalha no bastidor, alinhando a agulha com a cruz guia da Parte 1.",
      "5. A máquina inicia a Parte 2 costurando os primeiros pontos diretamente sobre a margem de over-stitching da Parte 1.",
      "6. A sobreposição gradativa absorve qualquer micro-desvio de fração de milímetro no re-enquadramento.",
      "7. A peça final apresenta um barrado contínuo impecável parecendo ter sido bordado em um único bastidor gigante."
    ],
    beginnerExplanation: "É o truque dos profissionais para emendar um bordado no outro sem ninguém perceber onde a emenda foi feita! Quando você vai fazer uma toalha de mesa comprida e precisa mudar o pano de lugar no bastidor várias vezes, você faz o começo do bordado novo 'pisar' um pouquinho em cima do finalzinho do bordado anterior. Assim, a emenda fica perfeita, forte e totalmente invisível!",
    applications: [
      "Barrados contínuos em toalhas de mesa de banquete, lençóis de casal e cortinas",
      "Faixas laterais de kimonos, vestes litúrgicas e faixas comemorativas",
      "Emendas de grandes matrizes divididas que não cabem no bastidor comum",
      "Bordados em rolo contínuo de fita e passamanaria"
    ],
    technicalDetails: "Para que o over-stitching não crie um relevo espesso ou calombo perceptível ao toque, a densidade dos pontos na zona de sobreposição deve ser reduzida em 50% em ambos os segmentos conectados (intercalamento de densidade 50/50). O ângulo dos pontos deve ser mantido rigorosamente idêntico em ambas as partes para garantir a continuidade do reflexo da luz.",
    commonErrors: [
      "❌ Fazer a emenda encostando as pontas secas (borda a borda) sem sobreposição, deixando uma fresta branca evidente na emenda",
      "❌ Sobrepor com densidade 100% nas duas partes, criando um calombo grosso e duro na linha de junção",
      "❌ Mudar o ângulo do ponto na segunda parte, fazendo a emenda brilhar de forma diferente da primeira",
      "❌ Não utilizar pontos de registro em cruz para guiar o re-enquadramento manual"
    ],
    troubleshootingTips: [
      "Se a emenda ficar com uma linha branca no meio: Aumente a margem de over-stitching para 3,0 mm e use marcas de registro a laser",
      "Se a emenda ficar grossa e dura ao toque: Ative a ferramenta 'Borda Suave / Borda em Degradê (Feather Edge)' no software",
      "Se as cores parecerem diferentes na emenda: Certifique-se de que a linha superior utilizada é do mesmo lote e mantenha a mesma tensão"
    ],
    dicaArtrelados: "Para fazer barrados de toalha perfeitos com várias emendas: use o recurso de 'Borda Suave' no software e posicione a emenda sempre no meio de um galho de folha ou arabesco, NUNCA no meio de uma letra ou no rosto de uma figura!",
    voceSabia: "Na confecção do manto de coroação da Rainha Elizabeth II em 1953, que tinha mais de 6 metros de comprimento, as bordadeiras reais utilizaram a técnica manual de over-stitching invisível para unir mais de 30 painéis bordados em bastidores separados!",
    practicalExercise: "Divida um arabesco simples de 15 cm em duas partes de 8 cm com 1 cm de over-stitching no software. Borde a parte 1, re-enquadre o tecido e borde a parte 2 sobreposta. Passe o dedo e veja como é impossível sentir a linha de emenda.",
    quickSummary: "Técnica de sobreposição milimétrica na emenda de bordados contínuos para criar junções perfeitas e 100% invisíveis.",
    relatedTerms: ["Re-enquadramento de Bastidor (Multi-Hooping)", "Overlap / Sobreposição de Objetos", "Trace / Traçado de Área Limite", "Alinhamento e Centralização no Bastidor"],
    tags: ["o-037", "over-stitching", "emendas", "barrados continuos", "multi-hooping", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Multi-Hooping, Continuous Borders & Over-Stitching Blends. Wilcom e4 Guide, 2021.",
      "SULKY OF AMERICA. Seamless Continuous Embroidery on Long Linens and Quilts. Sulky Press, 2020."
    ]
  },
  {
    id: "oximetria-resistencia-quimica-fios-bordar",
    code: "O-038",
    letter: "O",
    term: "Oxidação e Alvejamento / Resistência Química de Fios de Bordar (Oxidation & Bleach Resistance)",
    pronunciation: "o-xi-da-ção e al-ve-ja-men-to / re-sis-tên-ci-a quí-mi-ca",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Agulhas & Fios",
    summary: "Propriedade química fundamental das linhas de bordar 100% poliéster de filamento trilobal com tingimento por dispersão termofixada, garantindo imunidade total contra cloro, alvejantes e lavagens industriais pesadas.",
    origin: "Desenvolvido na década de 1980 na Alemanha e Estados Unidos com o avanço dos polímeros de poliéster para substituir a viscose em uniformes hospitalares e industriais.",
    definition: "A Resistência à Oxidação e Alvejamento (Chlorine & Bleach Fastness / Oxidation Stability) é o índice de solidez química que mede a capacidade dos corantes e polímeros da linha de bordar resistirem ao ataque de agentes oxidantes severos (como hipoclorito de sódio, água sanitária, peróxido de hidrogênio e detergentes alcalinos industriais). Enquanto as linhas tradicionais de raiom/viscose sofrem oxidação imediata e desbotam completamente em contato com alvejantes clorados, as linhas modernas de Poliéster Trilobal 100% possuem pigmentos moleculares incorporados por termofixação a alta pressão que garantem nota máxima (Grau 5 na escala ISO 105-N01) de solidez à lavagem clorada.",
    howItWorks: [
      "1. A linha de poliéster é fiada a partir de polímeros virgens de tereftalato de polietileno (PET).",
      "2. O tingimento é realizado a 130°C sob alta pressão com corantes de dispersão.",
      "3. As moléculas de corante penetram profundamente na estrutura cristalina do polímero e ficam seladas.",
      "4. Quando a peça bordada (ex: jaleco médico ou toalha de hotel) é lavada com água sanitária ou cloro a 60°C.",
      "5. O hipoclorito de sódio ataca a superfície mas não consegue quebrar as ligações químicas do corante protegido.",
      "6. A linha mantém seu brilho original, integridade física e cor vibrante sem desbotar.",
      "7. A peça resiste a mais de 100 ciclos de lavagem industrial pesada."
    ],
    beginnerExplanation: "É a superforça das linhas 100% poliéster que não deixam o bordado desbotar nem perder a cor, mesmo se a sua cliente lavar a toalha ou o jaleco com água sanitária, cloro e sabão em pó forte! Ao contrário das linhas antigas de viscose que ficavam brancas e manchadas com qualquer pingo de alvejante, a linha de poliéster aguenta lavagem pesada de hospital e continua brilhante e perfeita para sempre!",
    applications: [
      "Uniformes hospitalares, roupas cirúrgicas e jalecos médicos submetidos a desinfecção pesada",
      "Toalhas de banho e enxovais para hotelaria, pousadas e spas",
      "Roupas de banho, biquínis e sungas resistentes ao cloro de piscinas e ao sal do mar",
      "Uniformes industriais de mecânicos, petroquímicos e fardas militares"
    ],
    technicalDetails: "A solidez à lavagem com cloro é avaliada pela norma ISO 105-N01 (ensaio com solução de 2g/L de cloro ativo a 30°C). As linhas de Poliéster Trilobal de alta qualidade (como Madeira Polyneon, Isacord e Setta Lumina) atingem Grau 5/5, enquanto linhas de raiom/viscose atingem apenas Grau 1/5 (desbotamento total e perda de resistência tênsil).",
    commonErrors: [
      "❌ Bordar toalhas de hotelaria ou jalecos hospitalares com linha de raiom/viscose, que desbota na primeira lavagem com cloro",
      "❌ Misturar linhas de poliéster e linhas de viscose no mesmo bordado que será submetido a alvejantes",
      "❌ Usar produtos químicos com base ácida concentrada pura diretamente sobre a linha",
      "❌ Não informar ao cliente de hotelaria que o bordado foi feito com linha 100% resistente a alvejantes"
    ],
    troubleshootingTips: [
      "Se o cliente reclamar que o bordado desbotou na lavanderia: Verifique se a linha utilizada era viscose; passe a usar exclusivamente linha 100% poliéster",
      "Se o bordado precisar de resistência extrema a lavagens industriais a 95°C: Utilize linhas de poliéster de alta tenacidade certificadas para lavagem comercial",
      "Se você estiver na dúvida se um cone antigo é poliéster ou viscose: Faça o teste da chama (o poliéster derrete formando uma bolinha dura; a viscose queima como papel)"
    ],
    dicaArtrelados: "No seu ateliê, adote a linha 100% Poliéster Trilobal como padrão universal para tudo: ela brilha tanto quanto a viscose, é muito mais resistente contra quebras na máquina e sua cliente pode lavar até com cândida que o bordado continua impecável!",
    voceSabia: "Na indústria hoteleira de Las Vegas, mais de 2 milhões de toalhas de banho bordadas são lavadas diariamente com soluções concentradas de cloro a altas temperaturas, e todos os bordados utilizam exclusivamente fios de poliéster resistente a alvejantes!",
    practicalExercise: "Pegue dois retalhos bordados (um feito com linha de poliéster e outro com linha de viscose). Pingue uma gota de água sanitária pura sobre ambos e aguarde 5 minutos. Observe como a viscose desbota na hora e o poliéster permanece 100% intacto.",
    quickSummary: "Propriedade química da linha 100% poliéster que resiste a cloro, água sanitária e lavagens hospitalares sem desbotar.",
    relatedTerms: ["Linha 100% Poliéster", "Linha de Viscose / Raiom", "Polyester Trilobal", "Oeko-Tex Standard 100 / Certificação Têxtil"],
    tags: ["o-038", "resistencia quimica", "alvejamento", "cloro", "oximetria", "poliester", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 105-N01: Textiles -- Tests for Colour Fastness to Bleaching with Hypochlorite. Geneva, 2021.",
      "MADEIRA THREADS. Polyneon Technical Performance Dossier: Fastness to Chlorine, Bleach & Industrial Laundering. Freiburg, 2020."
    ]
  },
  {
    id: "optical-sensor-sensor-optico-giro-bobina",
    code: "O-039",
    letter: "O",
    term: "Sensor Óptico de Giro da Bobina (Optical Bobbin Rotation Sensor)",
    pronunciation: "óp-ti-cal sen-sor / sen-sor óp-ti-co de gi-ro da bo-bi-na",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Dispositivo fotoelétrico infravermelho instalado no compartimento da lançadeira que monitora em tempo real a rotação do carretel da bobina, alertando no painel antes da linha inferior acabar.",
    origin: "Desenvolvido e patenteado no Japão pela Tajima e Brother nos anos 2000 para eliminar o problema de bordar 'no vazio' quando a linha da bobina termina.",
    definition: "O Sensor Óptico de Giro da Bobina (Optical Bobbin Thread Sensor / Rotation Monitor) é o sistema eletrônico de monitoramento que detecta ativamente a alimentação da linha inferior na bordadeira. Ele é composto por um emissor e receptor infravermelho (LED IR e fototransistor) posicionados estrategicamente próximos ao cesto da caixa de bobina. O sensor lê a rotação física do carretel da bobina (ou os raios refletores da bobina metálica perfurada) a cada ciclo de laçada. Se a bobina parar de girar enquanto a máquina está costurando (indicando que a linha inferior acabou ou quebrou), o sensor interrompe o motor em menos de 3 pontos com aviso sonoro e visual no painel.",
    howItWorks: [
      "1. A linha da bobina é puxada pela linha superior a cada formação de laçada no tecido.",
      "2. A tração da linha faz o carretel da bobina girar dentro da caixa de bobina.",
      "3. O feixe infravermelho do sensor óptico reflete nas ranhuras ou perfurações da bobina em movimento.",
      "4. O microcontrolador processa a frequência de pulsos de rotação gerados pelo fototransistor.",
      "5. Quando a linha da bobina chega ao fim, a bobina para de girar.",
      "6. O sensor detecta a ausência de pulsos e envia sinal de interrupção imediata à CPU da máquina.",
      "7. A máquina para automaticamente antes de danificar o tecido, exibindo no visor 'Fim de Linha da Bobina'.",
      "8. O operador troca a bobina, volta 3 pontos no painel e retoma o bordado sem falhas."
    ],
    beginnerExplanation: "É o 'olhinho mágico' eletrônico que fica escondido perto da caixinha da bobina! Ele fica vigiando a canelinha girar enquanto a máquina borda. Assim que a linha de baixo acaba, ele percebe na mesma hora e manda a máquina parar imediatamente com um apito! Isso é maravilhoso porque a máquina não fica bordando no vazio sem linha nenhuma!",
    applications: [
      "Prevenção de bordados incompletos ou 'bordados no vazio' em peças grandes",
      "Automação e tranquilidade operacional em ateliês e fábricas",
      "Monitoramento de tensão e travamento da caixa de bobina",
      "Proteção de tecidos nobres contra perfurações desnecessárias sem linha"
    ],
    technicalDetails: "O tempo de resposta do sensor óptico é inferior a 50 milissegundos. Em máquinas industriais, o sensor calcula a velocidade angular da bobina: conforme o diâmetro do carretel de linha diminui, a bobina precisa girar mais rápido para fornecer a mesma quantidade de linha, permitindo prever a quantidade de linha restante com precisão de ±5 metros antes do esgotamento total.",
    commonErrors: [
      "❌ Deixar acumular pó e fiapos de linha sobre a lente do sensor óptico na lançadeira, fazendo o sensor apitar em falso ou não detectar o fim da linha",
      "❌ Usar bobinas plásticas opacas não reflexivas em máquinas que exigem bobinas metálicas perfuradas para leitura óptica",
      "❌ Desativar o sensor de bobina no painel por preguiça de limpar e esquecer a máquina bordando sem linha de baixo",
      "❌ Limpar a lente do sensor com objetos metálicos pontiagudos, riscando a superfície do fotodiodo"
    ],
    troubleshootingTips: [
      "Se o painel acusar 'Linha da Bobina Acabou' mesmo com a bobina cheia: Limpe a lente do sensor óptico com o pincel ou ar comprimido",
      "Se a máquina bordar no vazio sem apitar quando a bobina acabar: Verifique se o sensor de bobina está ativado no menu de configurações do painel",
      "Se o aviso de bobina for muito frequente: Verifique se a mola de retenção da caixa de bobina está travando o carretel"
    ],
    dicaArtrelados: "Faça da limpeza do sensor óptico da bobina um ritual diário: ao final de cada dia de trabalho, passe um pincelzinho macio e seco em volta da lançadeira e da lente do sensor. O sensor vai durar a vida toda e nunca vai te deixar na mão!",
    voceSabia: "Antes da invenção do sensor óptico de bobina nos anos 2000, os bordadores industriais precisavam calcular de cabeça o número de pontos da matriz para adivinhar a hora exata de trocar a bobina antes que ela acabasse no meio da peça!",
    practicalExercise: "Retire a caixa de bobina e localize o pequeno sensor óptico (um pontinho preto ou lente transparente) na lateral do compartimento da lançadeira. Limpe com cuidado com a ponta de um pincel macio.",
    quickSummary: "Dispositivo fotoelétrico que detecta o giro da bobina e para a máquina instantaneamente quando a linha inferior acaba.",
    relatedTerms: ["Caixa de Bobina", "Sensor de Quebra de Linha", "Lançadeira Rotativa", "Towa Gauge / Medidor de Tensão de Bobina"],
    tags: ["o-039", "sensor optico", "bobina", "fim de linha", "fototransistor", "sensores", "artrelados"],
    bibliographicReferences: [
      "TAJIMA OPTOELECTRONICS. Optical Sensing Systems for Lower Thread Monitoring. Tajima Journal, 2021.",
      "BROTHER INDUSTRIES. Bobbin Thread Sensor Calibration & Maintenance Guide. Brother Service, 2020."
    ]
  },
  {
    id: "offset-pantografo-bordado-continuo-rolo",
    code: "O-040",
    letter: "O",
    term: "Offset de Pantógrafo em Bordado Contínuo de Rolo (Roll-to-Roll Pantograph Offset)",
    pronunciation: "óf-sét de pan-tó-gra-fo em bor-da-do con-tí-nuo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Projetos Especiais & ITH",
    summary: "Cálculo e sincronismo de deslocamento automático do pantógrafo e dos rolos tensores em máquinas industriais contínuas (Roll-to-Roll) para bordado ininterrupto de metros de fitas, rendas e tecidos.",
    origin: "Originário dos teares suíços e alemães de renda Schiffli do século XIX, adaptado para as máquinas industriais eletrônicas Tajima e ZSK de rolo contínuo nos anos 2000.",
    definition: "O Offset de Pantógrafo para Bordado Contínuo de Rolo (Roll-to-Roll Continuous Indexing Offset) é o parâmetro cinemático que governa o avanço automatizado do tecido em máquinas equipadas com dispositivo desbobinador e rebobinador de rolo (Roll-to-Roll Embroidery Device / Ribbon Feeder). Ao término de cada ciclo de bordado no campo útil do bastidor, o sistema de servoacionamento avança o rolo de tecido exatamente a distância milimétrica do campo (Pitch de Repetição), compensa a elasticidade do tecido com um micro-offset de recuo e trava os grampos pneumáticos, reiniciando o bordado de forma 100% contínua ao longo de centenas de metros de material.",
    howItWorks: [
      "1. O rolo de tecido ou fita é montado no eixo desbobinador na parte traseira da máquina.",
      "2. O material passa pelos tensores de rolete e pela mesa de trabalho sob os cabeçotes de bordar.",
      "3. Os grampos pneumáticos laterais prendem as bordas do tecido com pressão calibrada.",
      "4. A máquina borda o padrão decorativo em toda a extensão do campo útil.",
      "5. Os grampos se abrem e os motores de tração avançam o tecido no eixo Y pelo valor exato do offset configurado (ex: +350,0 mm).",
      "6. Os grampos fecham novamente e o sistema de visão óptica confirma o alinhamento da emenda.",
      "7. A máquina repete o ciclo continuamente, produzindo rolos inteiros de 50 metros de tecido bordado."
    ],
    beginnerExplanation: "É o sistema das máquinas industriais gigantes que bordam rolos inteiros de tecido sem parar! O tecido entra de um lado num rolo enorme, a máquina borda um pedaço, puxa o rolo para a frente na medida exata do milímetro, e continua bordando o próximo pedaço sem emendas visíveis! É assim que as fábricas fazem metros e metros de rendas, fitas e tecidos bordados para cortinas e vestidos de noiva!",
    applications: [
      "Produção de rolos contínuos de rendas, passamanarias e fitas bordadas",
      "Bordados em peças de tecido aberto de 50 metros para cortinas e enxovais de luxo",
      "Confecção de cintos de segurança, faixas de identificação e alças de bolsas",
      "Fabricação de tecidos inteligentes e compósitos bordados para a indústria automotiva"
    ],
    technicalDetails: "A precisão de repetição do avanço do rolo deve ser inferior a ±0,05 mm em 1.000 mm de deslocamento. O controlador calcula o diâmetro decrescente do rolo alimentador e o diâmetro crescente do rolo rebobinador para ajustar o torque dinâmico dos servomotores, evitando estiramento excessivo ou afrouxamento do tecido na zona de agulhamento.",
    commonErrors: [
      "❌ Configurar o offset de avanço menor que o comprimento real da matriz, fazendo as cabeças bordarem em cima do desenho anterior",
      "❌ Não calibrar a tensão dos roletes de borracha, deixando o tecido deslizar e perder o esquadro",
      "❌ Borda tecidos elásticos sem filme termocolante ou suporte de entretela contínua",
      "❌ Ignorar o desalinhamento lateral da borda (Selvedge Drift) ao longo de rolos longos"
    ],
    troubleshootingTips: [
      "Se as emendas ficarem sobrepostas: Aumente o valor do avanço do rolo (Index Pitch) no painel do dispositivo em 0,5 mm",
      "Se o tecido repuxar em ondas no rolo: Reduza a pressão dos grampos pneumáticos e equilibre o freio do desbobinador",
      "Se o desenho desviar para os lados ao longo do rolo: Instale um sensor de guia de borda óptico (Web Guiding System)"
    ],
    dicaArtrelados: "Para quem quer fazer fitas e faixas contínuas na máquina comum de ateliê: use o 'bastidor de borda contínua' (Endless Hoop) com alavanca de liberação rápida! Você solta a trava, puxa a fita até a marcação e fecha a trava de novo em 3 segundos!",
    voceSabia: "As máquinas de bordar contínuas mais longas do mundo têm mais de 30 metros de comprimento, contam com 120 cabeçotes trabalhando em sincronia e conseguem bordar mais de 5.000 metros quadrados de tecido de renda por dia!",
    practicalExercise: "Pesquise no painel da sua máquina ou no software se há suporte para a função 'Bastidor Contínuo / Endless Embroidery'. Experimente digitalizar uma fita floral com marcadores de emenda para esse modo.",
    quickSummary: "Sincronismo de avanço de pantógrafo para bordado contínuo em rolos industriais de fitas, rendas e tecidos longos.",
    relatedTerms: ["Re-enquadramento de Bastidor (Multi-Hooping)", "Over-Stitching / Sobreposição de Travamento em Bordado Contínuo", "Pantógrafo de Bordadeira", "Operação Multi-Cabeçote em Sincronismo"],
    tags: ["o-040", "offset de pantografo", "rolo continuo", "roll to roll", "fitas", "rendas", "industrial", "artrelados"],
    bibliographicReferences: [
      "ZSK STICKMASCHINEN. Roll-to-Roll & Continuous Ribbon Embroidery Systems. Krefeld, 2021.",
      "TAJIMA ROLL DEVICES. Automatic Fabric Indexing & Continuous Pantograph Control. Tajima Engineering, 2020."
    ]
  }
];

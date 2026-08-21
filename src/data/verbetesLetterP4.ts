import { Verbete } from "../types";

export const VERBETES_LETTER_P_PART4: Verbete[] = [
  {
    id: "passo-de-ponto-comprimento",
    code: "P-025",
    letter: "P",
    term: "Passo de Ponto / Comprimento de Ponto (Stitch Length / Pitch)",
    pronunciation: "pas-so de pon-to",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Distância linear milimétrica percorrida pelo pantógrafo entre duas penetrações sucessivas da agulha no tecido em pontos corridos ou preenchimentos tatami.",
    origin: "Do latim 'passus' (passo/distância percorrida), termo da mecânica de costura que mede a passada do mecanismo de alimentação do tecido.",
    definition: "O Passo de Ponto (internacionalmente conhecido como Stitch Length, Pitch ou Comprimento do Ponto) é a distância matemática em milímetros (mm) entre o orifício onde a agulha penetrou no ciclo anterior e o orifício onde penetrará no ciclo atual. No ponto corrido e no preenchimento Tatami, o passo do ponto determina a flexibilidade, a fidelidade geométrica em curvas, o consumo de linha e a resistência à tração da costura. Em geral, o passo varia de 2.0 mm a 4.5 mm: passos excessivamente curtos concentram perfurações e picotam o tecido; passos excessivamente longos produzem laçadas frouxas que enroscam em botões e desmancham na lavagem.",
    howItWorks: [
      "1. No software de digitalização, o programador define o parâmetro de Comprimento de Ponto (ex: 2.5 mm para ponto corrido; 4.0 mm para Tatami).",
      "2. Quando a agulha sobe ao Ponto Morto Superior, o pantógrafo move o bastidor exatamente a distância do passo programado.",
      "3. A agulha desce na nova coordenada formando a laçada.",
      "4. Em curvas fechadas, o algoritmo de Curva Inteligente (Chord Length) reduz temporariamente o passo para 1.5 mm ou 1.8 mm para suavizar a trajetória.",
      "5. Em trechos retilíneos rápidos, o passo se expande até o valor padrão de máxima eficiência."
    ],
    beginnerExplanation: "É o tamanho de cada pontinho de costura em milímetros! Se você colocar um passo bem pequenininho, os pontinhos ficam bem juntinhos; se colocar um passo maior, a máquina anda mais rápido e os pontinhos ficam mais compridos.",
    applications: [
      "Definição do tamanho dos pontos em traçados lineares e pontos corridos (2.5 mm a 3.0 mm)",
      "Calibração da textura interna do ponto Tatami (3.8 mm a 4.5 mm)",
      "Ajuste da passada em Ponto Triplo (Bean Stitch) para relevo (2.5 mm a 3.5 mm)",
      "Controle de fidelidade de curvaturas em letras e arabescos finos"
    ],
    technicalDetails: "A física do bordado estabelece os seguintes limites operacionais seguros para o passo de ponto: 1) Passo Mínimo: 0.8 mm a 1.0 mm (abaixo disso, ativa-se o filtro de micro-pontos para não cortar o tecido); 2) Passo Padrão de Contorno: 2.5 mm; 3) Passo Padrão de Tatami: 4.0 mm; 4) Passo Máximo sem divisão: 7.5 mm a 8.0 mm (acima disso, a máquina deve dividir o ponto ou emitir salto/jump para não criar fios soltos perigosos).",
    commonErrors: [
      "❌ Usar passo de ponto de 1.0 mm em tecidos finos, agindo como uma serra mecânica e rasgando a peça",
      "❌ Programar passo de ponto de 6.0 mm em roupas infantis, criando laços compridos onde o dedinho da criança pode prender",
      "❌ Deixar o passo do Tatami muito curto (2.0 mm), dobrando desnecessariamente o número de pontos e deixando o bordado pesado e duro",
      "❌ Não permitir a redução automática do passo em curvas, gerando círculos poligonais e facetados"
    ],
    troubleshootingTips: [
      "Se o traço circular parecer quadrado ou 'engasgado': Reduza a tolerância de curva e configure o passo mínimo de curva para 1.8 mm",
      "Se o bordado tatami ficar duro como uma tábua de madeira: Aumente o comprimento do passo de 3.0 mm para 4.2 mm no software",
      "Se a linha soltar ou formar laçadas frouxas durante o uso da peça: Reduza o passo do ponto para menos de 4.0 mm"
    ],
    dicaArtrelados: "Para contornos nítidos e suaves em tecidos de algodão ou malha, a medida mágica Artrelados para o Ponto Corrido é exatamente 2.5 mm de passo. É o equilíbrio perfeito entre redondeza de curvas e segurança têxtil!",
    voceSabia: "Em uma velocidade de 1.000 PPM com passo de ponto de 4.0 mm, o pantógrafo move o bastidor a uma velocidade linear de 4 metros por minuto, parando e acelerando 16 vezes a cada segundo!",
    practicalExercise: "Digitalize uma espiral no software com 3 cópias: uma com passo 1.5 mm, outra com 2.5 mm e a terceira com 5.0 mm. Borde as três e analise no tecido o tempo de execução e a suavidade visual da curva.",
    quickSummary: "Distância milimétrica entre duas perfurações consecutivas da agulha que define a densidade linear, textura e flexibilidade da costura.",
    relatedTerms: ["Ponto Corrido", "Ponto Tatami", "Filtro de Pontos Curtos", "Densidade de Ponto"],
    tags: ["p-025", "passo de ponto", "comprimento de ponto", "stitch length", "pitch", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Stitch Length Dynamics and Geometry Control. Sydney, 2021.",
      "TAJIMA TECHNICAL PAPERS. Kinematic Optimization of Stitch Lengths. Nagoya, 2020."
    ]
  },
  {
    id: "placa-agulha-ponto-maquina",
    code: "P-026",
    letter: "P",
    term: "Placa de Agulha / Placa de Ponto (Needle Plate / Throat Plate)",
    pronunciation: "pla-ca de a-gu-lha",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes da Máquina",
    summary: "Chapa de aço retificado e polido localizada sobre a lançadeira com um orifício central calibrado por onde a agulha passa para formar a laçada sem puxar o tecido para baixo.",
    origin: "Do francês 'plaque' e do latim 'acus' (agulha), peça fundamental do mecanismo de costura mecanizada patenteada no século XIX por Elias Howe e Isaac Singer.",
    definition: "A Placa de Agulha (Needle Plate ou Throat Plate) é o componente metálico plano de alta dureza aparafusado sobre a base ou braço tubular da máquina de bordar, imediatamente acima do cesto da caixa de bobina e da lançadeira rotativa. Diferente das placas de máquinas de costura doméstica (que possuem fendas ovais largas para permitir o zigue-zague e dentes de transporte), a placa de agulha de bordado possui superfície 100% lisa (sem dentes impelidores) e um orifício perfeitamente circular de diâmetro ultra-preciso (geralmente entre 1.6 mm e 2.2 mm). Esse orifício estreito fornece apoio rígido à fibra do tecido, impedindo que o tecido seja empurrado para dentro da lançadeira no momento da penetração da agulha (fenômeno de Flagging/Afundamento).",
    howItWorks: [
      "1. O tecido estabilizado no bastidor repousa apoiado rente à face polida superior da placa de agulha.",
      "2. A agulha desce em alta velocidade e penetra exatamente no centro geométrico do furo da placa.",
      "3. A borda retificada do orifício da placa segura o tecido para que ele não se curve para baixo.",
      "4. Abaixo da placa, a ponta da lançadeira passa a milésimos de milímetro da cava da agulha e laça a linha superior.",
      "5. A agulha sobe ao mesmo tempo em que o pé calcador flutuante segura o tecido contra a placa para evitar que o tecido suba grudado na agulha.",
      "6. O ciclo se repete com tolerância de folga mecânica quase nula."
    ],
    beginnerExplanation: "É aquela chapinha de metal prateada e super lisinha que fica embaixo da agulha, onde tem um buraquinho bem no meio por onde a agulha entra. Ela serve para apoiar o tecido e não deixar a agulha empurrar a roupa para dentro do motor da máquina!",
    applications: [
      "Apoio estrutural rígido e deslizante para o tecido durante a movimentação do pantógrafo",
      "Guia e proteção para a passagem da agulha em direção à lançadeira",
      "Prevenção do afundamento do tecido (Flagging) e contenção de laçadas de linha",
      "Acomodação das lâminas e guias do sistema de corte automático inferior (Trimmer)"
    ],
    technicalDetails: "O diâmetro do furo da placa de agulha deve ser compatível com a aplicação: 1) Furo Pequeno (1.6 mm a 1.8 mm): ideal para tecidos finos, sedas, camisas e letras miúdas com agulhas 65/9 a 75/11; 2) Furo Médio/Grande (2.0 mm a 2.5 mm): para bonés estruturados, jaquetas de couro e agulhas grossas 90/14 a 100/16. A placa deve estar isenta de riscos, rebarbas ou marcas de batida de agulha.",
    commonErrors: [
      "❌ Borda com placa de agulha arranhada por agulhas que entortaram e bateram na borda do furo, desfiando e cortando a linha toda hora",
      "❌ Usar placa de costura com rasgo largo em máquina de bordar, fazendo tecidos finos e malhas serem engolidos pelo buraco",
      "❌ Apertar os parafusos da placa com ferramentas inadequadas, espanando a fenda ou desnivelando a chapa",
      "❌ Não retirar a placa periodicamente para limpar fiapos e poeira acumulados na caixa de bobina"
    ],
    troubleshootingTips: [
      "Se a linha superior desfiar ou quebrar logo no primeiro ponto: Passe o dedo ou uma meia de nylon ao redor do furo da placa; se enroscar, há rebarba cortante que precisa ser polida com lixa 1200 ou trocada",
      "Se o tecido for sugado para dentro do furo da máquina: Troque a placa por uma de furo fino (1.6 mm) e use entretela mais firme",
      "Se a agulha quebrar ao iniciar o bordado: Verifique se a placa de agulha está perfeitamente centralizada e com os parafusos apertados"
    ],
    dicaArtrelados: "Faça a 'Manutenção do Espelho' Artrelados uma vez por semana: desparafuse a placa de agulha, aspire todos os fiapos da lançadeira e inspecione o furo da placa com uma lupa. Se houver qualquer marquinha de agulha, use um cordão com pasta de polir metal para deixá-la brilhante como nova!",
    voceSabia: "Em máquinas industriais para bordar bonés e sapatos, a placa de agulha possui formato semi-esférico convexo elevado (Raised Throat Plate) para se encaixar com perfeição na curvatura do produto!",
    practicalExercise: "Retire a placa de agulha da sua máquina seguindo o manual. Com uma lanterna, limpe os fiapos com pincel seco e passe o polegar sobre o furo procurando rebarbas. Recoloque-a com cuidado alinhando os parafusos.",
    quickSummary: "Chapa metálica retificada com furo calibrado que apoia o tecido e permite a passagem da agulha até a lançadeira.",
    relatedTerms: ["Lançadeira Rotativa", "Caixa de Bobina", "Flagging (Afundamento do Tecido)", "Agulha de Bordar"],
    tags: ["p-026", "placa de agulha", "placa de ponto", "needle plate", "throat plate", "manutencao", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. Interaction between Needle, Throat Plate and Hook Timing. Schmetz Papers, 2021.",
      "TAJIMA MAINTENANCE MANUAL. Throat Plate Inspection and Burr Polishing Standards. Nagoya, 2020."
    ]
  },
  {
    id: "pe-calcador-bordado-flutuante",
    code: "P-027",
    letter: "P",
    term: "Pé Calcador de Bordado / Calcador Flutuante (Embroidery Presser Foot / Hopping Foot)",
    pronunciation: "pé cal-ca-dor de bor-da-do",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Calcador metálico oscilante com mola que se move verticalmente em sincronia com a agulha, pressionando o tecido durante a subida da agulha para evitar que a peça levante.",
    origin: "Do latim 'calcare' (pressionar com o pé/pisar), elemento mecânico de costura transformado em calcador flutuante pulsante (Hopping Foot) nas máquinas de bordar automáticas.",
    definition: "O Pé Calcador de Bordado (também chamado de Calcador Flutuante, Hopping Foot ou Calcador de Bordar) é o dispositivo mecânico oscilante acoplado à barra do calcador que opera de maneira sincronizada e independente da barra da agulha. Diferente dos calcadores de costura reta (que permanecem pressionando o tecido continuamente contra os dentes), o calcador de bordado 'salta' e flutua: quando a agulha penetra e sobe, o calcador desce e pressiona o tecido com firmeza contra a placa de agulha por uma fração de segundo, impedindo o efeito Flagging (quando o tecido sobe colado na agulha destruindo a laçada); no instante seguinte, o calcador sobe ligeiramente para permitir que o pantógrafo mova o bastidor com total liberdade e sem atrito.",
    howItWorks: [
      "1. A agulha penetra no tecido e desce até o Ponto Morto Inferior.",
      "2. No momento em que a agulha inicia o curso de subida (formando a laçada com a lançadeira), o excêntrico do eixo mecânico força o calcador para baixo.",
      "3. O anel do calcador prensa o tecido contra a placa de agulha, garantindo que o tecido fique estático.",
      "4. A laçada é capturada com sucesso pela ponta da lançadeira.",
      "5. A agulha atinge o Ponto Morto Superior e sai totalmente do tecido.",
      "6. A mola do calcador eleva o pé cerca de 1.0 mm a 1.5 mm acima da superfície do tecido.",
      "7. Com o calcador no ar, o pantógrafo move o bastidor instantaneamente para o ponto seguinte."
    ],
    beginnerExplanation: "É aquele pezinho redondinho de metal que fica em volta da agulha e fica 'pulando' sem parar enquanto a máquina borda! Ele dá uma pisadinha rápida no tecido para não deixar a roupa subir grudada na agulha, e logo levanta para o bastidor poder andar solto.",
    applications: [
      "Estabilização pontual do tecido durante a formação da laçada inferior",
      "Eliminação do efeito Flagging (levantamento do tecido junto com a agulha)",
      "Proteção física contra o enroscamento do tecido na haste da agulha",
      "Operação com bastidores especiais de acolchoamento, bonés e peças tubulares"
    ],
    technicalDetails: "A altura de descanso do calcador de bordado (Presser Foot Height) deve ser regulada de acordo com a espessura da peça: para tecidos planos finos (camisas), a folga entre o calcador e o tecido deve ser de aproximadamente 0.8 mm a 1.0 mm; para materiais espessos ou fofos (toalhas atoalhadas, moletons, bonés e bordado 3D com EVA), a altura deve ser elevada para 1.5 mm a 2.5 mm através do parafuso de ajuste de altura para evitar que o calcador amasse a espuma ou empurre a felpa.",
    commonErrors: [
      "❌ Regular o calcador muito baixo em toalhas grossas ou bordados 3D com EVA, fazendo o pezinho bater na espuma e arrastar o tecido",
      "❌ Deixar o calcador muito alto em tecidos finos, fazendo o tecido pular junto com a agulha e pular laçadas (Skip Stitches)",
      "❌ Borda com a mola do calcador quebrada ou travada com fiapos de linha",
      "❌ Usar calcador torto que colide com a agulha em alta velocidade"
    ],
    troubleshootingTips: [
      "Se a máquina pular pontos sucessivos: Abaixe ligeiramente a altura do calcador de bordar para segurar melhor o tecido no momento da subida da agulha",
      "Se o bordado 3D com EVA ficar esmagado ou picotado: Suba a altura do calcador através da alavanca/parafuso traseiro da barra",
      "Se houver barulho metálico 'tec-tec' excessivo: Lubrifique a guia da barra do calcador com 1 gota de óleo mineral branco"
    ],
    dicaArtrelados: "Para saber a altura exata do calcador de bordar: coloque uma moeda de 1 real ou um cartão de crédito sobre o tecido no bastidor. A base do calcador (quando a agulha estiver no ponto mais alto) deve apenas encostar na superfície do cartão sem prensá-lo. Essa é a folga perfeita!",
    voceSabia: "Em máquinas industriais modernas da Tajima e Barudan, o calcador possui controle digital motorizado (Digitally Controlled Presser Foot - DCP), que ajusta a altura milimétrica do calcador ponto a ponto automaticamente conforme a espessura do tecido!",
    practicalExercise: "Borde uma letra em um retalho de tecido fino com o calcador na altura padrão. Depois, dobre uma toalha 4 vezes, ajuste a altura do calcador para acomodar a toalha grossa e observe como a máquina borda suave sem arrastar a peça.",
    quickSummary: "Pé metálico oscilante com mola que pressiona o tecido na subida da agulha para impedir que a peça suba junto com a linha.",
    relatedTerms: ["Flagging (Afundamento/Levantamento)", "Placa de Agulha", "Barra da Agulha", "Bordado 3D Puff"],
    tags: ["p-027", "pe calcador", "calcador flutuante", "hopping foot", "presser foot", "componentes", "artrelados"],
    bibliographicReferences: [
      "BARUDAN EMBROIDERY MACHINERY. Digitally Controlled Presser Foot & Loop Dynamics. Tokyo, 2021.",
      "TAJIMA TECHNICAL MANUAL. Presser Foot Timing and Height Calibration. Nagoya, 2020."
    ]
  },
  {
    id: "pino-porta-carretel-arvore-linhas",
    code: "P-028",
    letter: "P",
    term: "Pino Porta-Carretel e Árvore de Linhas (Spool Pin & Thread Stand Tree)",
    pronunciation: "pi-no por-ta-car-re-tel",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Suporte vertical metálico ou plástico com guias de antena elevadas que sustentam os cones de linha, permitindo o desenrolamento vertical suave e livre de torções.",
    origin: "Do latim 'spinus' (pino/espinho) e do inglês 'Thread Tree' (árvore de linhas), estrutura clássica da fiação têxtil para alimentação contínua de fios.",
    definition: "O Pino Porta-Carretel e a Árvore de Linhas (Spool Pin, Thread Stand ou Thread Tree) constituem a primeira estação do trajeto da linha superior na máquina de bordar. Em máquinas domésticas, consiste em pinos horizontais ou verticais com discos prendedores de carretel (Spool Caps); em máquinas semi-industriais e industriais multicabeças, compreende uma torre metálica elevada com pratos de base com amortecedores de espuma e uma haste telescópica superior com olhais cerâmicos ou metálicos posicionados exatamente sobre o eixo central de cada cone. Esse arranjo vertical garante que o fio de poliéster ou viscose seja desenrolado pelo topo do cone (desbobinamento vertical por torção suave) a altíssimas velocidades sem tombar o carretel, sem oscilações de tensão e sem enroscos.",
    howItWorks: [
      "1. O cone industrial de linha (1.000m ou 4.000m) é encaixado firmemente sobre o prato de base com feltro ou espuma antirruído.",
      "2. A guia superior da antena (olhal da árvore) deve ser erguida totalmente, ficando alinhada perpendicularmente sobre o topo do cone (distância ideal de 20 cm a 30 cm).",
      "3. A linha sai pelo topo do cone em espirais livres sem que o cone precise girar.",
      "4. O fio passa pelo olhal da antena e é direcionado para os pré-tensionadores da máquina.",
      "5. Redes de proteção de carretel (Thread Nets) podem ser vestidas sobre cones escorregadios para evitar que a linha despenque e embole na base."
    ],
    beginnerExplanation: "É aquela torre alta de metal ou plástico com vários ferrinhos e buraquinhos que fica atrás da máquina segurando os cones de linha! Ela serve para a linha subir bem soltinha lá no alto antes de entrar na máquina, sem dar trancos e sem tombar o carretel.",
    applications: [
      "Sustentação firme de cones industriais de 1.000 m, 4.000 m ou 5.000 m",
      "Desbobinamento vertical suave e livre de torções em velocidades de até 1.200 PPM",
      "Organização da sequência cromática de linhas em máquinas de múltiplas agulhas",
      "Prevenção de nós, despenhamento de fios e laçadas frouxas"
    ],
    technicalDetails: "A física do desenrolamento de cones cruzados (Cross-wound cones) EXIGE que a linha seja puxada verticalmente para cima através de uma guia localizada a pelo menos 1,5 vezes a altura do cone. Carretéis retos comuns (Stacked carretéis) de costura tradicional nunca devem ser usados na árvore vertical sem pino horizontal giratório, sob risco de travar a linha.",
    commonErrors: [
      "❌ Borda com a haste telescópica da árvore de linhas abaixada pela metade, fazendo o fio raspar no cone e dar trancos de tensão violenta",
      "❌ Usar cone industrial solto na mesa sem suporte de árvore, fazendo o cone tombar e quebrar a agulha",
      "❌ Esquecer de usar o disco prendedor (Spool Cap) do tamanho correto em carretéis horizontais em máquinas domésticas",
      "❌ Deixar fios vizinhos na árvore de linhas se cruzarem e entrelaçarem durante a vibração da máquina"
    ],
    troubleshootingTips: [
      "Se a linha quebrar com um 'estalo' seco após poucos pontos: Olhe para a base do cone na árvore de linhas; o fio pode ter caído e prendido embaixo da base plástica do cone (use uma redinha de linha)",
      "Se a tensão superior oscilar descontroladamente: Erga a antena da árvore de linhas até o topo máximo da haste telescópica",
      "Se o fio escorregar e embolar na base do cone: Vista uma redinha elástica de proteção (Thread Net) sobre o cone de linha"
    ],
    dicaArtrelados: "Para fios escorregadios ou metálicos que desabam do cone: corte um pedaço de 10 cm de redinha elástica para linha (Thread Net) e vista no cone cobrindo da base até o meio. O fio sairá com suavidade de seda e zero nós!",
    voceSabia: "Em máquinas industriais de alta velocidade, a linha sai do cone da árvore a mais de 30 km/h; a altura da antena é milimetricamente calculada para que a força centrífuga do balão de linha não encoste nos cones vizinhos!",
    practicalExercise: "Inspecione a árvore de linhas da sua máquina. Puxe a haste telescópica até o travamento máximo superior e alinhe o furo da guia exatamente no centro de cada cone. Puxe a linha com a mão e sinta a leveza!",
    quickSummary: "Torre de suporte elevada com guias que permite o desenrolamento vertical livre e suave dos cones de linha.",
    relatedTerms: ["Rede para Carretel (Thread Net)", "Pré-tensão", "Fio de Bordar", "Máquina Multicabeças"],
    tags: ["p-028", "porta carretel", "arvore de linhas", "spool pin", "thread stand", "componentes", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL MANUAL. Thread Stand Setup and Tension Ballistics. Nagoya, 2021.",
      "MADEIRA THREADS. Thread Delivery Dynamics and Cone Handling. Freiburg, 2020."
    ]
  },
  {
    id: "passador-automatico-linha",
    code: "P-029",
    letter: "P",
    term: "Passador Automático de Linha (Automatic Needle Threader)",
    pronunciation: "pas-sa-dor au-to-má-ti-co",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Mecanismo semiautomático ou motorizado composto por um micro-gancho de arame ultra-fino que penetra no olho da agulha para puxar a linha através do orifício.",
    origin: "Do verbo 'passar' e do grego 'automatos' (que se move por si mesmo), inovação mecânica introduzida nas máquinas modernas para agilizar a operação humana.",
    definition: "O Passador Automático de Linha (Automatic Needle Threader ou Sistema de Enfiamento Rápido) é um dispositivo mecânico de precisão projetado para atravessar a ponta do fio de bordar pelo orifício inferior da agulha sem esforço visual do operador. Ele é constituído por uma haste basculante dotada de um micro-gancho de aço temperado com espessura microscópica (inferior a 0.3 mm) e duas abas guia de posicionamento. Quando a alavanca é acionada, o gancho atravessa o olho da agulha de trás para frente, abraça o fio colocado na guia horizontal e, ao retornar por mola, puxa uma laçada de linha para o lado traseiro da agulha.",
    howItWorks: [
      "1. A máquina deve estar obrigatoriamente com a agulha na posição mais alta (Ponto Morto Superior - PMS).",
      "2. O operador passa o fio pelas guias numeradas da máquina até o guia-fio da barra da agulha.",
      "3. Abaixa-se a alavanca do passador: o mecanismo desce e gira suavemente 90° em torno da agulha.",
      "4. O micro-gancho ultrafino penetra no olho da agulha de trás para a frente.",
      "5. O fio é passado horizontalmente na frente do olho sob a guia do passador.",
      "6. Ao soltar suavemente a alavanca, a mola interna recolhe o gancho, que puxa a laçada de linha através do olho da agulha.",
      "7. O operador puxa a ponta da laçada com os dedos e o enfiamento está concluído em 2 segundos."
    ],
    beginnerExplanation: "É aquela alavanquinha mágica da máquina que enfia a linha no buraquinho da agulha para você! Você só puxa a alavanquinha para baixo, passa a linha no ferrinho e solta: a linha passa sozinha pelo olho da agulha sem você precisar forçar a vista.",
    applications: [
      "Agilização extrema nas trocas de carretel em máquinas domésticas de 1 agulha",
      "Conforto ergonômico e acessibilidade visual para o operador de bordado",
      "Enfiamento rápido e seguro de linhas finas e padrão (40wt e 60wt)",
      "Redução drástica do tempo ocioso entre paradas de cor"
    ],
    technicalDetails: "O micro-gancho do passador é extremamente delicado: ele é compatível com agulhas de calibre 75/11 a 90/14. NUNCA deve ser utilizado em agulhas ultrafinas (como 60/8 ou 65/9), pois o olho dessas agulhas é menor que a espessura do gancho, entortando ou quebrando o arame. Também não deve ser usado com linhas grossas (12wt ou fitas metalizadas pesadas) que não cabem no canal do gancho.",
    commonErrors: [
      "❌ Acionar o passador automático com a agulha fora do Ponto Morto Superior (PMS), fazendo o micro-gancho colidir com o metal da agulha e entortar",
      "❌ Forçar a alavanca do passador com agulha fina 65/9 ou com agulha dupla, quebrando a haste plástica do mecanismo",
      "❌ Tentar passar linha metálica pesada ou cordão grosso pelo passador automático",
      "❌ Puxar a linha bruscamente antes do gancho se recolher totalmente"
    ],
    troubleshootingTips: [
      "Se o passador não puxar a linha: Verifique se a agulha está totalmente encaixada no topo da barra e pressione o botão 'Agulha para Cima' na máquina",
      "Se o ferrinho do passador parecer torto: Com uma pinça de precisão e lupa, desentorte suavemente o micro-arame central para alinhá-lo com o centro do olho",
      "Se o gancho quebrar: O conjunto do passador é uma peça de reposição simples e barata; desparafuse a haste e instale um novo passador original"
    ],
    dicaArtrelados: "Para nunca quebrar seu passador automático: sempre aperte o botão 'Subir/Descer Agulha' duas vezes antes de passar a linha. Isso garante que a máquina pare exatamente no Ponto Morto Superior milimétrico onde o buraquinho da agulha fica 100% alinhado com o gancho!",
    voceSabia: "Em máquinas domésticas topo de linha (como Brother Luminaire e Janome Continental), o passador é 100% eletrônico e motorizado: basta apertar um botão e a máquina corta a ponta do fio e enfia a agulha sozinha em 1 segundo!",
    practicalExercise: "Pratique o enfiamento com o passador automático 5 vezes consecutivas com calma, prestando atenção em manter a agulha no topo máximo. Cronometre como o processo leva menos de 3 segundos quando bem executado.",
    quickSummary: "Dispositivo mecânico com micro-gancho que atravessa o olho da agulha para puxar a linha de forma rápida e automática.",
    relatedTerms: ["Olho da Agulha", "Ponto Morto Superior (PMS)", "Agulha de Bordar", "Troca de Cores"],
    tags: ["p-029", "passador automatico", "enfiador de linha", "needle threader", "componentes", "operacao", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Needle Threading Mechanism & Maintenance Manual. Nagoya, 2021.",
      "JANOME SEWING MACHINE CO. Technical Service Guide: Threader Alignment. Tokyo, 2020."
    ]
  },
  {
    id: "painel-controle-touchscreen-ihm",
    code: "P-030",
    letter: "P",
    term: "Painel de Controle Touchscreen / IHM (Machine Control Panel / HMI)",
    pronunciation: "pai-nel de con-tro-le",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Interface Homem-Máquina (IHM) eletrônica com tela sensível ao toque colorida que gerencia o carregamento de arquivos, edição no bastidor, rotação, espelhamento e calibração da máquina.",
    origin: "Do inglês 'HMI' (Human-Machine Interface) e da computação industrial digital desenvolvida para automatizar linhas de manufatura a partir dos anos 1980.",
    definition: "O Painel de Controle (também denominado IHM, Tela Touchscreen ou Console de Comando) é o cérebro operacional e a interface de comunicação entre o bordador e a máquina de bordar computadorizada. Equipado com microprocessador dedicado, memória interna e display gráfico colorido de alta resolução, o painel executa todas as operações cruciais de chão de fábrica: leitura de arquivos de matrizes via USB/Wi-Fi/Rede, pré-visualização em tempo real do traçado dos pontos, espelhamento (Mirror), rotação em graus (1° a 90°), redimensionamento proporcional, mapeamento da sequência de agulhas e cores, traçado de área útil do bastidor (Trace/Outline), contador de pontos e diagnóstico de falhas com alertas em tempo real.",
    howItWorks: [
      "1. O operador insere o pendrive na porta USB ou envia a matriz pela rede sem fio Wi-Fi.",
      "2. A tela exibe as miniaturas gráficas das matrizes armazenadas.",
      "3. Ao selecionar o arquivo, a IHM renderiza o design e calcula as dimensões em milímetros e o número total de pontos.",
      "4. O operador seleciona o bastidor correto e centraliza a peça na tela.",
      "5. Executa-se a função 'Trace' (Traçado): o pantógrafo contorna o perímetro da arte para confirmar que não haverá colisão com as bordas do bastidor.",
      "6. Pressiona-se o botão Start: o painel exibe a velocidade atual (PPM), o cronômetro de tempo restante e o progresso ponto a ponto em tempo real."
    ],
    beginnerExplanation: "É a tela colorida de computador da máquina de bordar! É nela que você escolhe o desenho do pendrive, vê o desenho na tela, gira se precisar, escolhe as cores, manda a máquina checar o tamanho do bastidor e aperta o botão verde para começar a bordar.",
    applications: [
      "Carregamento, gerenciamento e seleção de arquivos de matrizes em formatos universais",
      "Edição básica em máquina: girar, espelhar, combinar desenhos e ajustar posições",
      "Simulação de traçado de perímetro (Trace) para evitar que a agulha bata no bastidor",
      "Monitoramento de sensores: quebra de linha superior, fim de linha de bobina e paradas de segurança"
    ],
    technicalDetails: "Os painéis modernos variam de 3.7 polegadas (domésticas de entrada) até 12 a 15 polegadas capacitivas HD (industriais de última geração como Tajima TMEZ e Barudan KT). A IHM possui portas USB 2.0/3.0, conexão Ethernet LAN e protocolos sem fio para integração com sistemas ERP de controle de produção fabril.",
    commonErrors: [
      "❌ Limpar a tela touchscreen com produtos químicos abrasivos (como álcool puro, acetona ou removedores), manchando e destruindo a sensibilidade do display",
      "❌ Tocar na tela com objetos pontiagudos de metal (como pontas de tesoura ou chaves de fenda), riscando e trincando o painel de toque",
      "❌ Iniciar o bordado sem realizar o teste de traçado (Trace) na tela, fazendo o calcador bater no aro plástico do bastidor e quebrar peças",
      "❌ Desligar a máquina no botão principal durante a gravação de arquivos na memória interna, corrompendo o sistema"
    ],
    troubleshootingTips: [
      "Se o toque na tela estiver descalibrado (toca em um ponto e ativa outro): Acesse o menu de configurações e execute a rotina de 'Calibração de Touchscreen'",
      "Se a matriz não aparecer na tela: Verifique se o pendrive está formatado em FAT32 e se o nome do arquivo não possui caracteres especiais ou acentos",
      "Se a tela congelar: Desligue a máquina, aguarde 15 segundos para descarregar os capacitores e ligue novamente"
    ],
    dicaArtrelados: "Para limpar a tela touch da sua máquina, use apenas uma flanela de microfibra macia levemente umedecida com água limpa. Nunca use produtos químicos e tenha sempre uma caneta touch plástica simples para operar com rapidez e sem engordurar a tela!",
    voceSabia: "Os primeiros painéis de comando de máquinas de bordar industriais nos anos 1980 não tinham tela: eram apenas teclados numéricos e luzes LED vermelhas de 7 segmentos onde o operador digitava códigos hexadecimais para mover o bastidor!",
    practicalExercise: "Carregue uma matriz na sua máquina e explore na tela touch as funções de: 1) Girar 90°; 2) Espelhar horizontalmente; 3) Fazer o traçado (Trace) do bastidor. Observe o movimento correspondente do pantógrafo.",
    quickSummary: "Interface eletrônica com tela sensível ao toque para visualização, edição, configuração de cores e controle total da máquina.",
    relatedTerms: ["Pantógrafo", "Traçado de Bastidor (Trace)", "Pendrive e Formatos de Arquivo", "Troca de Cores"],
    tags: ["p-030", "painel de controle", "touchscreen", "ihm", "display", "operacao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA OPERATIONAL MANUAL. Touch Screen Display & Machine Parameter Programming. Nagoya, 2021.",
      "BROTHER INDUSTRIES. Operation and On-Screen Editing Guide. Nagoya, 2022."
    ]
  },
  {
    id: "poliester-trilobal-linha-bordar",
    code: "P-031",
    letter: "P",
    term: "Poliéster Trilobal / Linha 100% Poliéster (Trilobal Polyester Embroidery Thread)",
    pronunciation: "po-li-és-ter tri-lo-bal",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Agulhas & Fios",
    summary: "Linha sintética de alta performance com filamentos de seção transversal triangular que maximiza a reflexão de luz, conferindo resistência extrema à tração, atrito e alvejantes clorados.",
    origin: "Do grego 'polys' (muitos) e 'ester' (composto orgânico químico), e do formato geométrico 'trilobal' (três lóbulos/lados triangulares) desenvolvido pela DuPont nos anos 1960.",
    definition: "A Linha de Poliéster Trilobal 100% (Polyester Trilobal 40wt) é o padrão ouro e o insumo mais consumido em todo o planeta no bordado computadorizado moderno. Ao contrário do poliéster comum de costura (de fibra cortada e fosca), o poliéster trilobal é composto por múltiplos microfilamentos contínuos extrudados com seção transversal em formato de triângulo de três pontas (trilobal). Essa geometria prismática exclusiva faz com que a luz solar e artificial reflita em múltiplos ângulos, proporcionando um brilho luminoso comparável ao da seda e da viscose, mas com as propriedades mecânicas imbatíveis do poliéster: altíssima resistência à tração (suporta mais de 1.000 PPM sem arrebentar), elasticidade elástica controlada e total imunidade ao cloro, alvejantes e lavagens industriais a quente.",
    howItWorks: [
      "1. Os filamentos de poliéster virgem são fundidos e extrudados através de fieiras triangulares de precisão.",
      "2. Os fios recebem torção calibrada (geralmente 2 ou 3 cabos - 40/2 ou 40/3) e banho de silicone hidrofóbico especial para deslizar com baixo atrito pelos tensores.",
      "3. Ao passar em alta velocidade pelo olho da agulha e pelo tecido, a linha suporta o calor de fricção sem derreter.",
      "4. A seção triangular reflete a luz incidente diretamente para o olho do observador, produzindo alto brilho óptico.",
      "5. A estrutura molecular do polímero resiste a ataques de alvejantes oxidantes (água sanitária/cloro), mantendo a cor 100% inalterada para sempre."
    ],
    beginnerExplanation: "É a melhor linha de bordar que existe para o dia a dia! É aquela linha super brilhante, macia e forte que aguenta bordar rapidíssimo sem quebrar e nunca desbota, mesmo se o cliente lavar a toalha ou o uniforme com cândida/água sanitária na máquina de lavar.",
    applications: [
      "Linha padrão obrigatória para uniformes profissionais, escolares, industriais e hospitalares",
      "Bordados em toalhas de banho, praia e hotelaria sujeitas a cloro e lavagens frequentes",
      "Bordados em artigos esportivos, bonés, mochilas, jaquetas e moda urbana",
      "Bordados infantis e enxovais de bebê que exigem lavagens constantes"
    ],
    technicalDetails: "A especificação padrão é o título 40wt (Tex 27 / Denier 120/2), que oferece o equilíbrio perfeito entre cobertura e resistência em agulhas de calibre 75/11. Para micro-letras e detalhes ultrafinos, utiliza-se Poliéster Trilobal 60wt (Tex 18) com agulhas 65/9. O ponto de fusão térmico do poliéster trilobal é de aproximadamente 250°C a 260°C.",
    commonErrors: [
      "❌ Usar linha de costura reta comum 100% algodão ou poliéster fiado (Spun) para bordar, criando felpas gigantes na lançadeira e quebrando constantemente",
      "❌ Borda uniformes de hotelaria ou hospitais com linha de viscose (rayon) achando que é poliéster, desbotando na primeira lavagem com cloro",
      "❌ Tensão superior excessivamente apertada, esticando o filamento elástico do poliéster e fazendo o bordado enrugar após sair do bastidor",
      "❌ Armazenar cones de poliéster expostos à luz solar direta e poeira por anos, ressecando a lubrificação de silicone do fio"
    ],
    troubleshootingTips: [
      "Se a linha de poliéster fizer laçadas soltas em cima do bordado: Aumente ligeiramente a tensão da linha superior na máquina",
      "Se a linha arrebentar com a ponta esfiapada: Verifique se o olho da agulha está riscado ou se o calibre da agulha é pequeno demais para o título do fio",
      "Se a linha soltar nós ao sair do cone: Vista uma redinha elástica de proteção (Thread Net) cobrindo a metade inferior do cone"
    ],
    dicaArtrelados: "Se você tem dúvidas de que tipo de linha usar no seu ateliê: padronize 100% do seu estoque em Poliéster Trilobal 40wt de boa procedência. Você terá zero dores de cabeça com quebra de linha, cores radiantes e clientes 100% satisfeitos que podem lavar a roupa sem medo!",
    voceSabia: "Enquanto a linha de viscose/rayon perde até 50% de sua resistência mecânica quando fica molhada com água, a linha de poliéster trilobal mantém rigorosamente 100% de sua força mecânica tanto seca quanto molhada!",
    practicalExercise: "Pegue um pedaço de 20 cm de linha de viscose e 20 cm de linha de poliéster trilobal. Mergulhe as duas em um copo com água sanitária pura por 10 minutos. A viscose desbotará ou desmanchará, enquanto o poliéster trilobal sairá impecável e reluzente!",
    quickSummary: "Linha sintética com filamentos triangulares de alto brilho e resistência inquebrável a cloro e lavagens pesadas.",
    relatedTerms: ["Linha de Viscose / Rayon", "Título de Linha (40wt / 60wt)", "Agulha de Bordar", "Tensão Superior"],
    tags: ["p-031", "poliester trilobal", "linha de bordar", "polyester thread", "fios", "resistencia a cloro", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Polyneon Technical Guide & Trilobal Fiber Engineering. Freiburg, 2021.",
      "AMANN GROUP. Isacord 100% Polyester Trilobal Performance Standards. Bönnigheim, 2020."
    ]
  },
  {
    id: "poliamida-nailon-termocolante",
    code: "P-032",
    letter: "P",
    term: "Poliamida / Náilon Termocolante e Fios Especiais (Polyamide / Nylon Threads & Powders)",
    pronunciation: "po-li-a-mi-da",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino.",
    category: "Agulhas & Fios",
    summary: "Polímero sintético termoplástico utilizado na forma de pós e filmes termocolantes de alta fusão para selagem de patches, e como filamentos de náilon de altíssima elasticidade e invisíveis.",
    origin: "Do grego 'polys' (muitos) e 'amida' (função química orgânica nitrogenada), polímero sintético patenteado pela DuPont em 1935 sob o nome comercial de Nylon.",
    definition: "A Poliamida (amplamente conhecida como Nylon ou PA) desempenha papéis de alta tecnologia no universo do bordado computadorizado. Apresenta-se principalmente em três formatos técnicos fundamentais: 1) Resina Termoplástica em Pó / Filme Termocolante de Poliamida: utilizado no avesso de patches e emblemas bordados, fundindo-se a 130°C-150°C e proporcionando colagem permanente com altíssima resistência a lavagens e flexibilidade superior ao EVA; 2) Fio de Monofilamento de Poliamida (Linha Invisível / Fio de Náilon Transparente): filamento transparente usado para prender apliques ou lantejoulas sem que a linha apareça sobre a estampa; e 3) Fios de Poliamida Texturizada: fios elásticos especiais para bordados esportivos em lycra e tecidos de compressão.",
    howItWorks: [
      "1. Na colagem de patches: o pó de poliamida ou o filme termoplástico é aplicado uniformemente no verso do bordado.",
      "2. Ao ser submetida ao calor da prensa térmica (150°C), a cadeia molecular da poliamida derrete e penetra nas fibras do tecido e no fio de bordar.",
      "3. Ao resfriar sob pressão, a poliamida se cristaliza em uma liga elástica, lavável e inquebrável.",
      "4. No bordado com fio invisível de poliamida: o monofilamento transparente passa pelos tensores com tensão ultra-baixa.",
      "5. A máquina costura a borda do aplique de forma invisível, deixando apenas a estampa do tecido à mostra."
    ],
    beginnerExplanation: "A poliamida é um material super resistente que serve tanto para fazer aquela cola em pó/filme super forte que cola patches e emblemas na roupa com o ferro quente, quanto para fazer a famosa 'linha invisível' transparente de náilon para costurar apliques sem que a linha apareça!",
    applications: [
      "Filmes e pós termocolantes de alta resistência para colagem permanente de patches e emblemas",
      "Linha invisível de monofilamento para fixação de apliques estampados, rendas e lantejoulas",
      "Costura de reforço estrutural em calçados, bolsas de nylon cordura e materiais técnicos",
      "Bordados em peças de alta elasticidade e moda praia (biquínis e maiôs de poliamida/elastano)"
    ],
    technicalDetails: "Na laminação com filme termocolante de poliamida: temperatura de 150°C a 160°C, pressão de 4 bar e tempo de 15 a 18 segundos. Para bordar com linha invisível de monofilamento de poliamida: a tensão da linha superior DEVE ser reduzida para níveis quase mínimos (1.0 a 1.5 no botão de tensão), pois o náilon monofilamento possui altíssima memória elástica e pode cortar o tecido ou enrugar a peça se esticado demais.",
    commonErrors: [
      "❌ Borda com linha invisível de náilon usando a mesma tensão alta do poliéster, fazendo o tecido enrugar como uma sanfona após tirar do bastidor",
      "❌ Usar linha de náilon monofilamento grossa de pesca na máquina de bordar, quebrando as guias plásticas e a mola estica-fio",
      "❌ Aplicar pó de poliamida termocolante com ferro de passar muito frio, fazendo o patch descolar na primeira lavagem",
      "❌ Passar ferro de passar fervendo diretamente sobre bordados feitos com fio de náilon sem pano protetor, derretendo a linha transparente"
    ],
    troubleshootingTips: [
      "Se o tecido enrugar muito ao bordar com linha invisível transparente: Reduza a tensão superior para o mínimo possível e use agulha fina 65/9",
      "Se o patch termocolante soltar nas bordas: Aumente o tempo de prensa para 20 segundos e prense aplicando o calor pelo avesso do tecido",
      "Se a linha monofilamento saltar fora dos discos tensores: Utilize uma redinha de carretel para manter o fio estabilizado"
    ],
    dicaArtrelados: "Para fazer patches termocolantes com resistência de lavanderia industrial: use Filme Termocolante de Poliamida de 100 micras. Ele suporta lavagens a até 60°C e centrifugação pesada sem nunca descolar uma pontinha sequer!",
    voceSabia: "O primeiro uso comercial em larga escala do náilon (poliamida 6.6) foi nas cerdas das escovas de dentes em 1938 e logo em seguida nas famosas meias-calças femininas de nylon que causaram filas gigantescas em Nova York em 1940!",
    practicalExercise: "Aplique uma camada de filme termocolante de poliamida no verso de um pequeno patch bordado usando prensa a 155°C por 15 segundos. Cole em um retalho de brim grosso e tente puxar após esfriar para atestar a fusão química.",
    quickSummary: "Polímero de alta tecnologia usado em termocolantes permanentes de patches e como linha invisível elástica de monofilamento.",
    relatedTerms: ["Patch Termocolante", "Prensa Térmica", "Monofilamento", "Poliéster Trilobal"],
    tags: ["p-032", "poliamida", "nailon", "nylon", "termocolante", "linha invisivel", "materiais", "artrelados"],
    bibliographicReferences: [
      "DUPONT MATERIALS SCIENCE. Polyamide Polymers & Thermoadhesive Applications. Wilmington, 2021.",
      "STAHLS' INTERNATIONAL. Industrial Heat-Seal Adhesives and Polyamide Membranes. Sterling Heights, 2020."
    ]
  }
];

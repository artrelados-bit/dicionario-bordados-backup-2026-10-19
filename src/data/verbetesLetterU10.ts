import { Verbete } from "../types";

export const VERBETES_LETTER_U10: Verbete[] = [
  {
    id: "unidade-de-corte-de-fio-superior-e-inferior-trimmer-assembly",
    code: "U-050",
    letter: "U",
    term: "Unidade de Corte de Fio Superior e Inferior (Trimmer Assembly)",
    pronunciation: "u-ni-da-de de cór-te de fi-o su-pe-ri-or e in-fe-ri-or (trí-mer as-sêm-bli)",
    level: "Avançado 🔴",
    category: "Manutenção & Mecânica",
    grammarClass: "Locução substantiva feminina.",
    origin: "Engenharia mecânica têxtil japonesa e alemã de dispositivos de corte pneumático e mecânico automatizado em laçadeiras rotativas.",
    summary: "Conjunto mecânico de faca móvel, contra-faca fixa e travas de retenção que guilhotinam as linhas superior e da bobina após saltos e trocas de cor.",
    definition: "A Unidade de Corte Automático de Fio (Automatic Thread Trimmer Assembly / Underbed Thread Trimmer) é o módulo mecatrônico situado diretamente abaixo da chapa de agulha e adjacente à laçadeira rotativa. É responsável por laçar, tracionar e cortar com precisão cirúrgica a linha superior (agulha) e a linha inferior (bobina) ao término de cada elemento, salto ou troca de cor, mantendo a ponta da linha retida para o início suave do próximo bloco de pontos.",
    technicalDetails: "O ciclo do corte ocorre em 5 etapas mecânicas em menos de 0,3 segundos: 1) O solenoide de corte é energizado pela CPU; 2) O braço de comando avança a Faca Móvel (Moving Knife) para dentro da laçadeira; 3) A ponta em gancho da faca móvel captura simultaneamente o fio superior e o fio da bobina; 4) A faca recua contra a Contra-Faca Fixa (Fixed Knife), realizando o corte por cisalhamento de alta precisão; 5) A mola de retenção (Thread Picker / Bobbin Wiper) segura a ponta da bobina para que ela não escape para dentro da chapa de agulha na próxima arrancada.",
    beginnerExplanation: "É a 'tesourinha automática' que fica escondida embaixo da chapa de metal da sua máquina de bordar. Toda vez que o bordado termina uma letra ou muda de cor, esse mecanismo avança como um ganchinho, puxa as linhas e corta os fios na hora, deixando o avesso limpinho sem você precisar cortar nada na mão!",
    howItWorks: [
      "1. A matriz emite o comando de salto longo ou de troca de cor (função Trim / Stop).",
      "2. A máquina desacelera o motor principal e para o cabeçote na posição de ângulo de corte (ex: 280° no encoder).",
      "3. O solenoide elétrico é disparado com um 'clique' característico.",
      "4. A faca móvel avança por baixo da chapa e laça os dois fios (superior e inferior).",
      "5. A faca recua contra a lâmina fixa de vídia e guilhotina as linhas com folga milimétrica.",
      "6. O limpador de fio (Wiper) puxa a pontinha superior para cima do tecido.",
      "7. A máquina gira o cabeçote para a próxima agulha ou salta para a nova coordenada e retoma o bordado."
    ],
    applications: [
      "Corte automático de linha em matrizes com centenas de letras e detalhes isolados.",
      "Eliminação de 90% do trabalho manual de 'limpeza de fios' com tesoura após o bordado.",
      "Operação contínua em máquinas industriais multicabeças de alta velocidade.",
      "Ajuste de comprimento da ponta de cauda de linha para evitar nós e desfiamentos."
    ],
    characteristics: [
      "Operação ultra-rápida (fração de segundo) com acionamento por solenoide ou motor de passo.",
      "Exige lâminas perfeitamente afiadas e alinhamento milimétrico.",
      "Sensível ao acúmulo de poeira têxtil, restos de entretela e cola spray."
    ],
    commonErrors: [
      "❌ Deixar acumular restos de entretela com cola spray sob a chapa da agulha, travando o movimento da faca móvel.",
      "❌ Regular a contra-faca fixa muito apertada, desgastando o fio da lâmina e fazendo a faca 'mastigar' a linha sem cortar.",
      "❌ Usar lâminas cegas que desfiam a ponta da linha em vez de fazer um corte limpo."
    ],
    troubleshootingTips: [
      "Máquina dá o comando de corte mas a linha não é cortada: a faca fixa perdeu o fio ou há fiapos travando o gancho da faca móvel; limpe e substitua a lâmina fixa.",
      "Linha escapando da agulha logo após o corte: o comprimento da ponta restante está muito curto ou o freio superior está desregulado.",
      "Barulho metálico seco no momento do corte: lubrifique o trilho da faca móvel com uma gota de óleo branco de máquina."
    ],
    dicaArtrelados: "A cada troca de bobina ou no fim do dia: retire a chapa da agulha e passe um pincelzinho macio na faca de corte! Tirar a poeirinha acumulada ali faz a sua tesoura automática durar anos cortando que nem lâmina de barbear!",
    voceSabia: "Antes da invenção do sistema de corte automático de linha em máquinas de bordar na década de 1970 pela ZSK e Tajima, fábricas inteiras mantinham equipes de dezenas de operárias chamadas de 'arrematadeiras', que passavam o dia todo cortando fios soltos com tesourinhas manuais!",
    practicalExercise: "Retire a chapa da agulha da sua máquina. Observe o gancho da faca móvel e a lâmina fixa. Gire o volante manualmente ou acione a função de teste de corte no painel para ver o movimento sincronizado de avanço e recuo das lâminas.",
    quickSummary: "Módulo mecatrônico de faca móvel e fixa localizado sob a chapa de agulha que realiza o corte automático e a retenção das linhas superior e inferior.",
    relatedTerms: ["Faca Móvel", "Contra-Faca Fixa", "Solenoide de Corte", "Wiper (Limpador de Fio)", "Chapa de Agulha", "Laçadeira Rotativa"],
    tags: ["corte de linha", "faca movel", "trimmer", "mecanica", "solenoide", "manutencao", "limpeza de pontos"]
  },
  {
    id: "unidade-de-lubrificacao-centralizada-e-oleo-de-silicone-oiler",
    code: "U-051",
    letter: "U",
    term: "Unidade de Lubrificação Centralizada e Óleo de Silicone (Central Lubrication)",
    pronunciation: "u-ni-da-de de lu-bri-fi-ca-ção cen-tra-li-za-da e ó-leo de si-li-co-ne (sên-tral lu-bri-kei-xun)",
    level: "Intermediário 🟡",
    category: "Manutenção & Mecânica",
    grammarClass: "Locução substantiva feminina.",
    origin: "Engenharia de tribologia e lubrificação automática por bomba dosadora com capilares e feltros de óleo em máquinas de costura e bordado industrial.",
    summary: "Sistema automatizado de microbombeamento e distribuição de óleo lubrificante mineral/silicone para laçadeiras, barras de agulha e engrenagens.",
    definition: "A Unidade de Lubrificação Centralizada (Centralized Automatic Lubrication System / Micro-Pump Oil Distributor) é o sistema integrado de canais, mangueiras capilares e bombas dosadoras projetado para suprir com precisão a quantidade exata de óleo lubrificante de alta pureza (viscosidade ISO VG 10/22 ou óleo mineral branco medicinal) aos pontos de maior atrito e rotação da máquina de bordar (principalmente a laçadeira rotativa e as buchas das barras de agulha).",
    technicalDetails: "A tecnologia divide-se em: 1) Lubrificação por Bomba de Pulso Eletrônica (Timed Electronic Pulse Pump): injeta micro-gotas de óleo calculadas a cada 100.000 ou 500.000 pontos executados; 2) Lubrificação por Pavio e Feltro Capilar (Wick Lubrication): distribui o óleo por capilaridade contínua através de cordões de algodão e feltros comprimidos; 3) Reservatório com Sensor de Nível Óptico: bloqueia a máquina e emite alarme sonoro caso o nível de óleo caia abaixo do limite mínimo de segurança; 4) Filtro de Retorno Magnético para retenção de micro-partículas metálicas de desgaste.",
    beginnerExplanation: "É o 'sistema de troca de óleo' automático da máquina. Em vez de você ter que ficar pingando óleo com a bisnaguinha em dezenas de buraquinhos todo dia, a própria máquina tem um tanquinho com canudinhos transparentes que manda gotinhas de óleo limpo para as peças que giram rápido, sem deixar o óleo escorrer nem manchar a roupa do cliente!",
    howItWorks: [
      "1. O operador completa o reservatório central da máquina com óleo branco mineral lubrificante específico.",
      "2. A máquina entra em ciclo de bordado em alta rotação (ex: 850 PPM).",
      "3. A CPU conta os ciclos de pontos executados.",
      "4. Ao atingir o intervalo programado, a microbomba envia pulsos de pressão para os capilares transparentes.",
      "5. O óleo lubrifica a pista da laçadeira rotativa com um filme microscópico de espessura micrométrica.",
      "6. O excesso de óleo é drenado para o feltro de retorno sem respingar no tecido.",
      "7. As engrenagens trabalham silenciosas, frias e protegidas contra desgaste mecânico prematuro."
    ],
    applications: [
      "Manutenção contínua de máquinas industriais de 1 a 24 cabeças em regime de produção 24/7.",
      "Proteção das laçadeiras de alta rotação contra superaquecimento e travamento.",
      "Redução drástica de manchas acidentais de óleo em peças brancas de clientes.",
      "Aumento da vida útil das buchas de bronze e eixos principais da máquina."
    ],
    characteristics: [
      "Injeção controlada milimetricamente para evitar desperdício e respingos no tecido.",
      "Sensores de proteção contra falta de óleo com bloqueio automático no painel.",
      "Operação silenciosa e redução do aquecimento por atrito metálico."
    ],
    commonErrors: [
      "❌ Usar óleo automotivo, óleo queimado ou óleo de cozinha no reservatório, carbonizando as mangueiras e travando a bomba.",
      "❌ Deixar o reservatório de óleo secar e ignorar os alertas de 'Oil Level Low' no painel de comando.",
      "❌ Regular a vazão da bomba no máximo, fazendo a máquina 'cuspir' óleo e manchar camisas brancas."
    ],
    troubleshootingTips: [
      "Máquina manchando tecidos claros com gotículas pretas: excesso de vazão na laçadeira; regule a válvula dosadora para reduzir o fluxo de óleo.",
      "Mangueiras transparentes com bolhas de ar: realize o procedimento de purga (sangria) de ar pelo painel de manutenção.",
      "Alerta de óleo piscando com o tanque cheio: sensor de boia magnética travado por sujeira; limpe o fundo do reservatório com um pano sem fiapos."
    ],
    dicaArtrelados: "Use APENAS óleo branco mineral cristalino puro (específico para máquinas de bordar)! Ele é transparente como água, não tem cheiro e, se por acaso cair uma micro-gotinha no tecido, sai facilmente com água morna e sabão neutro!",
    voceSabia: "As máquinas de bordar industriais mais modernas possuem sensores térmicos infravermelhos que medem a temperatura da laçadeira em tempo real e injetam óleo automaticamente apenas se a temperatura subir acima de 45°C!",
    practicalExercise: "Localize o reservatório de óleo central da sua máquina de bordar (ou identifique os feltros capilares da laçadeira). Verifique a transparência do óleo e o nível na marcação 'MAX / MIN'. Limpe o visor com um pano seco.",
    quickSummary: "Sistema mecatrônico de microbombeamento e distribuição capilar de óleo mineral que garante lubrificação precisa e contínua das engrenagens sem respingos.",
    relatedTerms: ["Óleo Mineral Branco", "Bomba de Pulso", "Pavio Capilar", "Laçadeira Rotativa", "Viscosidade ISO VG 10", "Manutenção Preventiva"],
    tags: ["lubrificacao", "oleo mineral", "bomba dosadora", "oleo de silicone", "manutencao", "mecanica", "prevencao"]
  },
  {
    id: "unidade-de-sensor-optico-e-mecanico-de-quebra-de-linha",
    code: "U-052",
    letter: "U",
    term: "Unidade de Sensor Óptico e Mecânico de Quebra de Linha (Thread Break Sensor)",
    pronunciation: "u-ni-da-de de sen-sor óp-ti-co e me-câ-ni-co de que-bra de li-nha (thred breik sen-sor)",
    level: "Intermediário 🟡",
    category: "Máquinas & Equipamentos",
    grammarClass: "Locução substantiva feminina.",
    origin: "Evolução da mecatrônica de automação industrial têxtil com sensores piezoelétricos, ópticos infravermelhos e rotativos por encoder.",
    summary: "Conjunto eletrônico de monitoramento em tempo real que detecta o rompimento ou término da linha superior e da bobina, parando a máquina instantaneamente.",
    definition: "A Unidade de Sensor de Quebra de Linha (Thread Break Sensor / Detection Assembly) é o subsistema eletrônico de segurança responsável por monitorar o movimento contínuo da linha superior e da linha da bobina durante a execução do bordado. Caso a linha arrebente, saia do olhal da agulha ou a bobina termine, o sensor detecta a interrupção do fluxo em milissegundos e envia um sinal de parada emergencial à CPU da máquina, evitando que a máquina continue costurando 'em falso' e perfurando o tecido sem bordar.",
    technicalDetails: "Os tipos principais de sensores empregados são: 1) Sensores Rotativos de Encoder com Roldana (Rotary Pulse Sensor): o fio passa enrolado em uma pequena roldana com orifícios; o giro da roldana interrompe um feixe de luz infravermelha gerando pulsos; se os pulsos cessam por mais de 3 a 5 pontos, a máquina para; 2) Sensores de Mola de Contato Elétrico (Check Spring Switch): a mola estica-fio fecha um micro-circuito a cada descida da agulha; 3) Sensores Piezoelétricos: detectam a vibração acústica e a tensão mecânica do fio em movimento; 4) Contador de Pontos Inteligente da Bobina: calcula o consumo de metros e avisa com antecedência o esgotamento da canelinha.",
    beginnerExplanation: "É o 'olho eletrônico' da máquina de bordar que fica vigiando a linha o tempo todo. Se a linha quebrar ou acabar a canelinha embaixo, o sensor percebe na mesma hora (em menos de um segundo!), apita e para a máquina na hora para você não perder o tecido nem ficar bordando no vazio!",
    howItWorks: [
      "1. A linha superior é passada pelo caminho de tensores e dá uma volta na roldana do sensor óptico.",
      "2. O bordado inicia e a linha gira a roldana do sensor em alta velocidade.",
      "3. O sensor óptico emite dezenas de pulsos de luz infravermelha por segundo para a placa-mãe.",
      "4. Caso a linha estoure ou saia do cone, a roldana para de girar instantaneamente.",
      "5. A CPU detecta a ausência de pulsos por 3 pontos consecutivos.",
      "6. A máquina desacelera, freia o motor principal, sobe a agulha e aciona o alarme sonoro/visual.",
      "7. No painel aparece a mensagem 'Thread Break - Needle #03', permitindo voltar os pontos com um clique e retomar o bordado perfeitamente."
    ],
    applications: [
      "Monitoramento autônomo de máquinas permitindo que um único operador cuide de múltiplas máquinas simultaneamente.",
      "Prevenção de furos no tecido causados por agulhas sem linha descendo repetidamente.",
      "Detecção precoce de carretilhas/bobinas vazias no meio de preenchimentos grandes.",
      "Registro de estatísticas de quebra de linha por agulha para controle de qualidade dos cones."
    ],
    characteristics: [
      "Tempo de resposta ultrarrápido (para a máquina em menos de 3 a 5 pontos após o rompimento).",
      "Permite ajuste de sensibilidade de detecção no painel de comando.",
      "Reduz perdas de matéria-prima e tempo de retrabalho."
    ],
    commonErrors: [
      "❌ Passar a linha fora da roldana do sensor óptico, fazendo a máquina acusar falso erro de quebra a cada 5 segundos.",
      "❌ Deixar acumular poeira de linha e fiapos dentro do orifício óptico do sensor infravermelho.",
      "❌ Configurar a sensibilidade do sensor no valor máximo extremo, fazendo a máquina parar com pequenas oscilações normais de tensão."
    ],
    troubleshootingTips: [
      "Máquina apitando 'Quebra de Linha' mas a linha está perfeita e bordando: limpe o feixe óptico do sensor com ar comprimido ou ajuste a sensibilidade no painel.",
      "Máquina continua bordando no vazio por 50 pontos após a linha arrebentar: aumente a sensibilidade do sensor de quebra no menu de parâmetros técnicos.",
      "Roldana do sensor travada: solte o fio acumulado enrolado no eixo da roldana plástica."
    ],
    dicaArtrelados: "Sempre que passar a linha na máquina, certifique-se de que o fio deu uma volta completinha na rodinha do sensor! Se a linha passar frouxa por cima sem rodar a pecinha, a máquina vai achar que a linha quebrou e vai ficar apitando sem parar!",
    voceSabia: "Em grandes fábricas com máquinas de 24 cabeças, os sensores de quebra são conectados a postes de luzes coloridas chamados 'Andon Towers': quando uma linha quebra, uma lâmpada vermelha gigante pisca no topo da máquina para o operador correr até a cabeça exata!",
    practicalExercise: "No painel da sua máquina, localize o menu de 'Sensibilidade de Quebra de Linha' (Thread Break Sensitivity). Ajuste para o valor padrão (geralmente nível 3 ou 5). Provoque intencionalmente uma quebra de linha cortando o fio e conte quantos pontos a máquina leva para parar.",
    quickSummary: "Dispositivo sensorial mecatrônico (óptico, rotativo ou mecânico) que identifica a quebra ou esgotamento das linhas em tempo real e comanda a parada imediata da máquina.",
    relatedTerms: ["Sensor Óptico", "Roldana de Pulso", "Encoder de Linha", "Mola Estica-Fio", "Alarme de Quebra", "Painel de Controle"],
    tags: ["sensor de linha", "quebra de fio", "sensor optico", "seguranca", "automacao", "alerta", "maquinas de bordar"]
  },
  {
    id: "unidade-pantografica-e-guias-lineares-x-y-pantograph-carriage",
    code: "U-053",
    letter: "U",
    term: "Unidade Pantográfica e Guias Lineares X/Y (Pantograph Carriage)",
    pronunciation: "u-ni-da-de pan-to-grá-fi-ca e gui-as li-ne-a-res xis/ip-si-lon (pan-to-gráf cá-ridj)",
    level: "Avançado 🔴",
    category: "Máquinas & Equipamentos",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do grego 'pantographos' (desenhador de tudo) e da evolução dos carros móveis de coordenadas cartesianas CNC acionados por correias dentadas e guias de recirculação de esferas.",
    summary: "Estrutura mecânica de alta precisão que sustenta e movimenta os bastidores nos eixos X (horizontal) e Y (vertical) com tolerância micrométrica.",
    definition: "A Unidade Pantográfica e Guias Lineares X/Y (Pantograph Drive & Linear Motion System) é a estrutura mecânica móvel fundamental da máquina de bordar que suporta os bastidores e desloca o tecido sob as agulhas com exatidão micrométrica. Diferente de uma máquina de costura convencional (onde o tecido é empurrado por dentes retos), na máquina de bordar é o pantógrafo que executa todo o desenho vetorial, acelerando, desacelerando e posicionando o bastidor em qualquer ponto das coordenadas bidimensionais X e Y.",
    technicalDetails: "A engenharia do pantógrafo baseia-se em: 1) Guias Lineares de Precisão com Recirculação de Esferas (THK / Hiwin Linear Rails) com tolerância de folga inferior a 0,02 mm; 2) Acionamento por Correias Sincronizadoras Dentadas com Alma de Aço (Timing Belts HTD/GT2) ou Fusos de Esferas de Alta Velocidade; 3) Servomotores AC de circuito fechado com encoders absolutos de 17 bits; 4) Perfil de aceleração S-Curve: o carro atinge até 1,5G de aceleração e para em repouso absoluto no exato instante em que a agulha perfura o tecido (janela de tempo de apenas 25 milissegundos a 1.000 PPM).",
    beginnerExplanation: "É o 'braço robótico móvel' de metal onde você encaixa o bastidor com a roupa. É ele que anda para a frente, para trás, para a esquerda e para a direita em alta velocidade desenhando os pontos do bordado na exata posição que você programou no computador!",
    howItWorks: [
      "1. A CPU da máquina lê o próximo vetor de coordenadas (ex: X = +1.2 mm, Y = -2.4 mm).",
      "2. No instante em que a agulha sai do tecido e atinge o ponto morto superior, os drivers disparam corrente para os motores X e Y.",
      "3. As correias sincronizadoras tracionam os carros móveis sobre os trilhos de aço temperado.",
      "4. O bastidor é deslocado exatamente 2,68 mm na diagonal em menos de 30 milissegundos.",
      "5. O pantógrafo para em repouso estático absoluto com vibração zero.",
      "6. A agulha desce, perfura o tecido e forma o laço na laçadeira.",
      "7. O ciclo se repete até 1.000 a 1.200 vezes por minuto, construindo o bordado com perfeição geométrica."
    ],
    applications: [
      "Movimentação do bastidor tubular e bastidor plano em máquinas industriais e domésticas.",
      "Bordados gigantes de campo aberto com pantógrafo de mesa corrida (Border Frame / Mesa Contínua de até 1,5 x 5 metros).",
      "Precisão milimétrica em contornos finos, letras pequenas e alinhamento de apliques.",
      "Absorção de inércia e vibrações mecânicas em altas velocidades de produção."
    ],
    characteristics: [
      "Estrutura rígida de alumínio de grau aeronáutico e aço temperado para peso mínimo e rigidez máxima.",
      "Resolução de passo de 0,1 mm por pulso motor.",
      "Zero folga mecânica (Backlash-free) para evitar desenhos deformados."
    ],
    commonErrors: [
      "❌ Empurrar ou puxar o pantógrafo com as mãos com a máquina ligada, forçando os encoders e descalibrando as coordenadas de origem.",
      "❌ Deixar o bastidor colidir com o cabeçote ou mesa por não verificar a área limite (Frame Limit) antes de iniciar.",
      "❌ Falta de lubrificação com graxa de lítio nas guias lineares, causando trepidação e desgaste dos rolamentos."
    ],
    troubleshootingTips: [
      "Bordados redondos ficando ovais ou com contornos desalinhados: correia dentada do eixo X ou Y frouxa; ajuste a tensão com um tensiômetro de correia.",
      "Pantógrafo travando com ruído de arranhado metálico: limpe e engraxe os patins das guias lineares de aço.",
      "Erro de 'X/Y Limit Over' no painel: a matriz é maior que o campo útil do bastidor; reduza o tamanho do desenho ou centralize o bastidor."
    ],
    dicaArtrelados: "NUNCA puxe nem empurre o braço do pantógrafo com a máquina ligada! Se precisar mexer a posição do bastidor, use SEMPRE as setinhas do visor da máquina! Isso protege os motores e garante que seus contornos fiquem sempre 100% encaixados!",
    voceSabia: "O termo 'pantógrafo' vem de um antigo instrumento mecânico de desenho com varetas articuladas inventado pelo padre e matemático Christoph Scheiner em 1603 para copiar e ampliar mapas e gravuras à mão!",
    practicalExercise: "Com a máquina desligada da tomada, observe as guias lineares e correias dentadas embaixo do braço pantográfico. Verifique a firmeza das correias (elas devem estar esticadas como cordas de violão afinadas). Limpe os trilhos com um pano macio.",
    quickSummary: "Estrutura mecatrônica de guias lineares e correias que movimenta os bastidores nos eixos cartesianos X e Y com altíssima velocidade e precisão micrométrica.",
    relatedTerms: ["Guias Lineares", "Correias Sincronizadoras", "Eixos X e Y", "Servomotores", "Backlash (Folga Mecânica)", "Área de Bastidor"],
    tags: ["pantografo", "guias lineares", "eixo x y", "mecanica cnc", "movimentacao", "precisao", "bastidor"]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_U9: Verbete[] = [
  {
    id: "unidade-de-disco-e-emuladores-usb-floppy-emulator",
    code: "U-046",
    letter: "U",
    term: "Unidade de Disco e Emuladores USB (Floppy to USB Emulator)",
    pronunciation: "u-ni-da-de de dis-co e e-mu-la-do-res u-es-se-bê (fló-pi tu u-es-se-bê e-miu-lei-tor)",
    level: "Intermediário 🟡",
    category: "Máquinas & Equipamentos",
    grammarClass: "Locução substantiva feminina.",
    origin: "Evolução do hardware industrial para substituição de leitores mecânicos de disquetes de 3,5\" (1,44 MB) por portas USB com emulação de trilhas magnéticas nos anos 2000.",
    summary: "Dispositivo eletrônico de retrofit que substitui o antigo drive de disquete de 3,5\" em máquinas clássicas por uma entrada de pen drive moderna.",
    definition: "A Unidade de Disco e Emuladores USB (Floppy-to-USB Drive Emulator / Gotek Emulator) é um dispositivo de modernização de hardware (retrofit) instalado no mesmo compartimento físico e com o mesmo conector de fita de 34 vias de um leitor de disquetes de 3,5 polegadas tradicional em máquinas de bordar industriais ou domésticas clássicas (como Tajima TME-DC, Barudan BENS, Brother BAS, SWF e Melco). O emulador converte os dados digitais de um pen drive USB comum em sinais elétricos que o microprocessador legado da máquina interpreta como se fossem setores magnéticos de disquete.",
    technicalDetails: "O emulador opera com controle por firmware interno (como FlashFloppy ou Gotek original). O pen drive é particionado em até 99 ou 999 'disquetes virtuais' de 1,44 MB acessados através de botões seletores frontais e display digital de 2 a 3 dígitos (ex: posição '01' carrega os arquivos do bloco 1; posição '02' carrega o bloco 2). Isso elimina falhas crônicas de motores de passo velhos, mofo e desmagnetização de disquetes antigos, garantindo sobrevida de décadas a máquinas industriais robustas.",
    beginnerExplanation: "É um aparelhinho que a gente coloca no lugar daquele leitor de disquete antigo da máquina de bordar velha. Você tira o leitor de disquete, parafusa esse aparelhinho e passa a usar pen drive normalmente para colocar os bordados na máquina, sem precisar nunca mais caçar disquete para comprar!",
    howItWorks: [
      "1. A máquina de bordar clássica é desligada e o painel de comando é aberto.",
      "2. O técnico desconecta o antigo leitor mecânico de disquete de 3,5\" e o cabo flat de dados.",
      "3. O emulador USB é parafusado no mesmo suporte e conectado ao cabo de 34 vias e à energia de 5V.",
      "4. O operador espeta o pen drive formatado com o software do emulador na entrada USB frontal.",
      "5. Seleciona o número do disquete virtual desejado nos botões frontais (ex: '05').",
      "6. No painel da máquina de bordar, pressiona o botão de 'Carregar Disco' normalmente.",
      "7. A máquina lê o arquivo .DST com velocidade e estabilidade total, sem ruídos mecânicos."
    ],
    applications: [
      "Modernização de máquinas industriais Tajima, Barudan, Happy, Toyota e SWF dos anos 1990 e 2000.",
      "Substituição de drives com defeito em máquinas domésticas clássicas (como Brother PC-8500, Janome Memory Craft antigas).",
      "Eliminação de perdas de produção por erros de leitura de disquetes danificados.",
      "Armazenamento de centenas de matrizes em um único pen drive para pronta produção."
    ],
    characteristics: [
      "Substituição direta 'plug-and-play' sem necessidade de alterar o chicote elétrico da máquina.",
      "Suporta até 999 pastas virtuais simulando disquetes de 1,44 MB.",
      "Altíssima confiabilidade e custo de investimento extremamente baixo."
    ],
    commonErrors: [
      "❌ Ligar o cabo flat invertido (com a faixa vermelha do lado errado), fazendo a luz de leitura do emulador ficar permanentemente acesa sem ler.",
      "❌ Esquecer de formatar o pen drive com o software gerenciador de 100 partições da Gotek antes de gravar os arquivos.",
      "❌ Colocar arquivos com extensões não suportadas pela máquina antiga no pen drive."
    ],
    troubleshootingTips: [
      "Emulador mostrando erro 'E0' ou 'Flash': o pen drive não está formatado em FAT32 ou não possui a tabela de partições do emulador instalada.",
      "Máquina acusando 'Disk Error' no painel: verifique a posição dos jumpers traseiros (S0 / S1) para coincidir com a configuração da sua marca de máquina.",
      "Luz vermelha do emulador sempre acesa: o cabo de fita flat de 34 pinos está invertido; desligue a máquina e inverta a posição do conector."
    ],
    dicaArtrelados: "Se você tem uma máquina Tajima ou Barudan clássica dos anos 90, não venda por preço de banana! Instale um emulador USB Gotek de R$ 150! Sua máquina vai virar moderna, rápida com pen drive e continuar bordando pesado por mais 30 anos!",
    voceSabia: "Milhares de caças militares de alta performance e sistemas de controle de voo de aviões comerciais construídos nos anos 1980 ainda utilizam exatamente esses mesmos emuladores USB de disquete para atualizar seus sistemas de navegação até hoje!",
    practicalExercise: "Visite um ateliê com máquina clássica ou veja o manual de uma Tajima antiga. Observe o conector flat de 34 vias de disquete e compare a praticidade de gerenciar pastas virtuais em pen drive em relação ao antigo disquete magnético.",
    quickSummary: "Dispositivo de retrofit que substitui leitores mecânicos de disquetes de 3,5\" por portas USB, modernizando máquinas de bordar legadas.",
    relatedTerms: ["Emulador Gotek", "Disquete 3,5 Polegadas", "Cabo Flat 34 Vias", "Retrofit", "Tajima / Barudan Legadas", "Formato FAT32"],
    tags: ["emulador usb", "disquete", "floppy", "gotek", "retrofit", "maquinas antigas", "hardware"]
  },
  {
    id: "unidade-de-tensao-mecanica-e-dinamometros-gramas-forca-gf",
    code: "U-047",
    letter: "U",
    term: "Unidade de Tensão Mecânica e Dinamômetros (Gramas-Força / gf)",
    pronunciation: "u-ni-da-de de ten-são me-câ-ni-ca e di-na-mô-me-tros (gra-mas fôr-ça / gê-é-fe)",
    level: "Avançado 🔴",
    category: "Manutenção & Mecânica",
    grammarClass: "Locução substantiva feminina.",
    origin: "Metrologia física internacional e desenvolvimento de tensiômetros têxteis industriais de precisão (Towa Tension Gauge) no Japão.",
    summary: "Medição científica da força de atrito e tensão da linha superior e da bobina através de dinamômetros calibrados em gramas-força (gf).",
    definition: "A Unidade de Tensão Mecânica e Dinamômetros no bordado (Tension Measurement in Gram-Force / Towa Gauge Calibration) é a metodologia científica de ajuste e padronização das forças de frenagem exercidas sobre as linhas de bordar. Em vez de ajustes empíricos e imprecisos baseados em 'tato' ou 'voltas no parafuso', o uso de tensiômetros dinamométricos de mola (como o famoso Towa Gauge japonês) mede a força de resistência em Gramas-Força (gf / cN) em tempo real ao puxar a linha.",
    technicalDetails: "Os valores científicos ideais de tensão para bordado industrial em regime estándar são: 1) Linha da Bobina/Canelinha (Bobbin Tension): calibrada rigorosamente entre 20 gf e 25 gf (medida com o tensiômetro Towa para caixa de bobina tipo L ou M); 2) Linha Superior (Top Thread Tension): calibrada entre 110 gf e 130 gf para linhas de poliéster nº 40 normais; 3) Linhas Metálicas e Especiais: calibradas entre 80 gf e 90 gf; 4) A proporção física ideal entre tensão superior e inferior é de aproximadamente 5:1 a 6:1, o que garante a proporção clássica de 1/3 de branco da bobina centralizado no avesso do ponto cheio.",
    beginnerExplanation: "É o uso de um 'aparelhinho medidor com ponteiro' (o dinamômetro ou tensiômetro de caixinha de bobina) que mede com precisão matemática o aperto da linha. Em vez de você ficar adivinhando no olhômetro se o parafuso está apertado ou frouxo, o ponteiro mostra o número exato (22 gramas-força), garantindo que todas as agulhas bordem perfeitamente iguais!",
    howItWorks: [
      "1. A canelinha com linha de bobina é colocada dentro da caixa de bobina.",
      "2. A caixa de bobina é encaixada dentro do tensiômetro dinamométrico Towa.",
      "3. O operador puxa a linha suavemente através das roldanas do aparelho.",
      "4. O ponteiro do medidor oscila e indica a força exata de retenção em gramas-força (gf).",
      "5. Com uma micro-chave de fenda, ajusta-se o parafuso da mola até o ponteiro cravar em 22 gf.",
      "6. A caixa de bobina é colocada na máquina com tensão 100% perfeita e padronizada.",
      "7. Repete-se o mesmo procedimento para todas as cabeças de uma máquina multicabeças."
    ],
    applications: [
      "Padronização idêntica de tensão em máquinas industriais multicabeças (4, 6, 12 ou 24 cabeças).",
      "Eliminação definitiva do teste empírico de 'puxar no dedo' da linha da bobina.",
      "Controle de qualidade metrológico em fábricas de confecção e bordado com certificação ISO.",
      "Calibração precisa para bordados em tecidos ultra-leves (seda, voal) ou ultra-pesados (couro)."
    ],
    characteristics: [
      "Substitui o achismo por medições numéricas auditáveis e repetíveis.",
      "Garante que 100% dos bordados tenham o mesmo aspecto e maciez no avesso.",
      "Previne quebras de linha por excesso de tensão e laçadas frouxas por falta de tensão."
    ],
    commonErrors: [
      "❌ Puxar a linha no tensiômetro com trancos bruscos, fazendo o ponteiro saltar e dando leitura falsa.",
      "❌ Usar o mesmo tensiômetro sem limpar a poeira de linha acumulada nas roldanas de medição.",
      "❌ Achar que todas as cores de linha superior têm a mesma fricção (cores escuras com mais corante exigem leve ajuste)."
    ],
    troubleshootingTips: [
      "Ponteiro oscilando descontrolado: há fiapos de linha ou restos de cola presos sob a mola da caixa de bobina; limpe com um pedaço de cartão fino.",
      "Bordado puxando a linha de baixo para cima: a bobina está muito apertada (> 30 gf) ou a linha superior está muito frouxa (< 100 gf).",
      "Bordado com avesso todo branco: a bobina está excessivamente frouxa (< 15 gf); aperte o parafuso até atingir 22 gf."
    ],
    dicaArtrelados: "O tensiômetro Towa para caixa de bobina é o melhor investimento para o bordador profissional! Você calibra a bobina em 22 gf em 10 segundos e NUNCA mais perde tempo desmanchando bordado com linha branca subindo na frente!",
    voceSabia: "O tensiômetro de caixa de bobina foi desenvolvido no Japão pela empresa Towa Precision no início dos anos 1970 para atender à exigência de perfeição estética das indústrias de quimonos de seda de Kyoto!",
    practicalExercise: "Utilize um tensiômetro de bobina (ou uma balança digital de precisão puxando a linha). Meça a força com que a linha sai da caixa de bobina e ajuste o parafuso para registrar exatamente entre 20 gf e 25 gf. Borde uma coluna de cetim e comprove o equilíbrio perfeito no avesso.",
    quickSummary: "Medição científica da tensão mecânica das linhas superior e inferior em gramas-força (gf), garantindo padronização matemática e equilíbrio perfeito de pontos.",
    relatedTerms: ["Towa Tension Gauge", "Gramas-Força (gf)", "Tensão da Bobina", "Tensão Superior", "Caixa de Bobina", "Regulagem de Ponto"],
    tags: ["tensao mecanica", "dinamometro", "towa gauge", "gramas-forca", "calibracao", "regulagem", "metrologia"]
  },
  {
    id: "unidades-de-conservacao-ambientais-e-brasoes-institucionais",
    code: "U-048",
    letter: "U",
    term: "Unidades de Conservação Ambientais e Brasões Institucionais",
    pronunciation: "u-ni-da-des de con-ser-va-ção am-bi-en-tais e bra-sões ins-ti-tu-ci-o-nais",
    level: "Avançado 🔴",
    category: "Aplicações & Técnicas",
    grammarClass: "Locução substantiva feminina plural.",
    origin: "Regulamentações governamentais de órgãos de preservação da fauna e flora (ICMBio, IBAMA, Parques Nacionais e Florestas Nacionais) para padronização de uniformes de guardas florestais.",
    summary: "Bordado de alta fidelidade heráldica em uniformes de guarda-parques e brigadistas florestais com motivos de fauna, flora e mapas geográficos detalhados.",
    definition: "O bordado em Uniformes de Unidades de Conservação Ambientais (Environmental Conservation & Park Ranger Embroidery) é o segmento especializado na reprodução de emblemas, brasões e insígnias para agentes ambientais, biólogos, guias ecoturísticos e guarda-parques de Parques Nacionais, Reservas Biológicas e Áreas de Proteção Ambiental (APAs). Caracteriza-se pela representação botânica e zoológica realista de animais silvestres (onças, araras, jacarés, tamanduás) e elementos da flora nativa através de técnicas avançadas de pintura com agulha (Thread Painting) e tatamis com texturas orgânicas.",
    technicalDetails: "A execução dessas matrizes requer: 1) Rigor botânico e taxonômico nas cores e formas das espécies nativas; 2) Aplicação sobre tecidos de combate ecológico (Ripstop camuflado em tons de verde-floresta e cáqui, tecidos com tratamento repelente de insetos e proteção UV); 3) Uso de linhas de poliéster de alta solidez à fotodegradação solar intensa (raios UV de campo aberto); 4) Patches confeccionados com bordas em overloque reforçado ou selagem térmica para aplicação via velcro tático em coletes de campo.",
    beginnerExplanation: "É o bordado dos brasões de parques florestais e reservas ecológicas (como os uniformes do ICMBio, IBAMA e guardas de parques ecológicos). Eles têm desenhos lindos e cheios de detalhes de animais da floresta, árvores e montanhas, feitos para durar muito tempo no sol, na chuva e no meio da mata.",
    howItWorks: [
      "1. A instituição de preservação ambiental envia a arte do brasão com as espécies animais e botânicas representadas.",
      "2. O programador digitaliza a matriz usando transições de degradê de cor e preenchimentos com textura de penas ou pelagem animal.",
      "3. As cores são cuidadosamente calibradas com cones de poliéster de tons terrosos e verdes naturais.",
      "4. A matriz é bordada sobre base de tecido Ripstop cáqui de alta resistência.",
      "5. As bordas do patch recebem contorno de ponto cheio espesso ou fecho de contato (velcro).",
      "6. A peça é inspecionada para certificar a perfeita legibilidade dos nomes das unidades e espécies.",
      "7. O fardamento do agente ambiental está pronto para fiscalização e preservação da natureza em campo aberto."
    ],
    applications: [
      "Fardamentos de guarda-parques e brigadas de combate a incêndios florestais.",
      "Uniformes de agentes do ICMBio, IBAMA, Polícia Ambiental e secretarias de meio ambiente.",
      "Camisas e bonés de guias de ecoturismo, safáris fotográficos e trilhas de montanha.",
      "Emblemas comemorativos de expedições científicas e institutos de conservação da biodiversidade."
    ],
    characteristics: [
      "Altíssimo nível de detalhamento artístico em penas, pelos e folhagens.",
      "Exige fios e tecidos com máxima resistência a intempéries e luz solar contínua.",
      "Padronização oficial com valor de representação de autoridade governamental."
    ],
    commonErrors: [
      "❌ Deixar os olhos e detalhes pequenos dos animais borrados ou sem definição por usar linhas muito grossas.",
      "❌ Usar cores fluorescentes artificiais em brasões que exigem tons terrosos e naturais da fauna real.",
      "❌ Bordar sobre tecidos impermeáveis de jaquetas de campo sem selar o avesso contra entrada de água de chuva."
    ],
    troubleshootingTips: [
      "Olhos do animal sumindo no bordado: use linha nº 60 mais fina com agulha 65/9 para os micro-detalhes da íris e bico.",
      "Penas da ave parecendo uma placa lisa: altere os ângulos de ponto das penas no software para criar efeito tridimensional de plumagem.",
      "Patch desfiando na mochila do guarda-parque: utilize ponto de borda overloque com densidade 0.35 mm e reforce os nós de saída."
    ],
    dicaArtrelados: "Para bordar animais e folhas com realismo fotográfico em brasões ambientais: use ângulos de ponto curvilíneos acompanhando a anatomia do bicho e faça sobreposições em degradê! O animal salta do bordado parecendo vivo!",
    voceSabia: "O Parque Nacional de Yellowstone nos Estados Unidos (o primeiro parque nacional do mundo, criado em 1872) foi a primeira instituição a criar um distintivo bordado com uma cabeça de bisão para identificar seus patrulheiros a cavalo.",
    practicalExercise: "Digitalize um brasão circular de 80 mm contendo uma arara-canindé e folhas de palmeira. Utilize 3 tons de azul e 2 tons de amarelo em degradê de tatami nas penas. Borde em tecido cáqui e avalie a fidelidade das penas.",
    quickSummary: "Bordado heráldico de alta precisão em fardamentos de agentes ecológicos e parques ambientais, combinando realismo botânico e alta resistência a intempéries.",
    relatedTerms: ["Pintura com Agulha (Thread Painting)", "Degradê de Cores", "Ripstop Florestal", "Linha Nº 60", "Heráldica Oficial", "Resistência aos Raios UV"],
    tags: ["meio ambiente", "parques nacionais", "icmbio", "ibama", "fauna", "flora", "brasao ecologico"]
  },
  {
    id: "unidade-central-de-processamento-e-placas-cpu-motherboard",
    code: "U-049",
    letter: "U",
    term: "Unidade Central de Processamento e Placas de Máquinas (CPU & Mainboard)",
    pronunciation: "u-ni-da-de cen-tral de pro-ces-sa-men-to e pla-cas de má-qui-nas (cê-pê-u e main-bórd)",
    level: "Avançado 🔴",
    category: "Manutenção & Mecânica",
    grammarClass: "Locução substantiva feminina.",
    origin: "Engenharia mecatrônica e computação embarcada em sistemas de controle de movimento multieixo (Motion Control DSP) da indústria de máquinas automáticas.",
    summary: "Arquitetura eletrônica de placas-mãe, microcontroladores DSP e drivers de potência que calculam os pulsos dos eixos X/Y e a sincronização do cabeçote.",
    definition: "A Unidade Central de Processamento e Placas de Controle de Máquinas de Bordar (Embroidery Machine CPU, Mainboard & Driver Boards) constitui o cérebro eletrônico embarcado responsável pela interpretação dos códigos binários das matrizes de bordado (.DST, .PES, etc.) e sua conversão instantânea em sinais elétricos digitais e analógicos. Esse sistema orquestra em perfeita harmonia os servomotores dos eixos X e Y do pantógrafo, o motor principal do eixo principal (Main Shaft), o solenoide de corte de linha, o motor de passo do tracionador e os sensores ópticos de quebra de fio a até 1.200 rotações por minuto.",
    technicalDetails: "A arquitetura de hardware divide-se em blocos especializados: 1) CPU / DSP Board (Digital Signal Processor): processa os vetores geométricos da matriz, calcula as curvas de aceleração/desaceleração (S-Curve Motion Profile) e atualiza a tela gráfica do painel; 2) Driver Boards (Placas de Potência X/Y): amplificam os sinais para controlar os motores de passo ou servomotores brushless com precisão de micrômetros por pulso; 3) Power Supply Unit (Fonte Chaveada): converte 110V/220V AC em tensões estáveis de 5V, 12V, 24V e 36/48V DC; 4) Encoder Feedback: lê 1.000 a 4.096 pulsos por volta do volante para garantir que a agulha penetre no tecido exatamente no momento em que o pantógrafo estiver 100% imóvel.",
    beginnerExplanation: "É o 'computador interno' e as placas de circuito que ficam escondidas dentro da máquina de bordar. É essa placa inteligente que lê o arquivo do seu pen drive, faz a tela acender, manda a agulha descer na hora exata e faz o braço da máquina se mexer com precisão milimétrica para desenhar o bordado.",
    howItWorks: [
      "1. Ao ligar a máquina, a placa-mãe (Mainboard) inicializa o firmware e faz o teste automático de todos os sensores (POST).",
      "2. Ao selecionar uma matriz, a CPU descompacta os milhares de comandos de coordenadas (X, Y, Ponto, Salto, Corte, Cor).",
      "3. Ao pressionar Start, a CPU sincroniza o motor principal da agulha com os motores dos eixos X e Y.",
      "4. Em cada fração de segundo, a CPU calcula o deslocamento do bastidor no momento em que a agulha está fora do tecido.",
      "5. Sensores ópticos monitoram a rotação da linha e informam a CPU se houver quebra de fio.",
      "6. A CPU aciona os solenoides de corte e troca automática de agulha com velocidade de milissegundos.",
      "7. A peça é bordada com sincronização milimétrica perfeita do primeiro ao último ponto."
    ],
    applications: [
      "Diagnóstico avançado de códigos de erro de painel (Error 101, Main Shaft Error, X/Y Overcurrent).",
      "Manutenção preventiva e limpeza de dissipadores de calor em placas de potência.",
      "Proteção contra surtos elétricos em ateliês e instalações industriais.",
      "Atualização de firmware de placas controladoras para expansão de memória e compatibilidade."
    ],
    characteristics: [
      "Capacidade de processamento em tempo real com tolerância de sincronismo em microssegundos.",
      "Sistemas modulares com placas separadas para processamento, interface e potência.",
      "Equipado com proteções contra sobrecarga, curto-circuito e superaquecimento."
    ],
    commonErrors: [
      "❌ Ligar a máquina sem aterramento elétrico adequado, acumulando estática que pode queimar os chips DSP da placa-mãe.",
      "❌ Acúmulo de poeira têxtil e fiapos sobre as placas eletrônicas, causando superaquecimento e curto-circuito.",
      "❌ Mudar a chave seletora de voltagem com a máquina ligada ou usar tomadas frouxas que geram faíscas."
    ],
    troubleshootingTips: [
      "Máquina travando na tela inicial com logo: memória Flash corrompida; reinstale o firmware através do pen drive ou consulte a assistência técnica.",
      "Erro de 'X/Y Driver Fault' ou 'Motor Overload': verifique se o bastidor não bateu nas laterais ou se há linha enrolada nas polias dos eixos.",
      "Máquina desligando sozinha após 20 minutos de uso: cooler de ventilação da placa de potência travado com poeira; limpe com ar comprimido seco."
    ],
    dicaArtrelados: "Proteja o cérebro da sua máquina: instale SEMPRE um Nobreak senoidal puro ou um estabilizador de boa qualidade e mantenha o aterramento em dia! Uma placa-mãe nova de máquina de bordar pode custar metade do preço da máquina!",
    voceSabia: "As primeiras placas controladoras de máquinas de bordar automáticas dos anos 1970 utilizavam microprocessadores Intel 8080 de 8 bits com apenas 2 MHz de velocidade e memória de 64 Kilobytes — menos de 1% da potência do menor smartphone atual!",
    practicalExercise: "Abra a tampa de ventilação da sua máquina de bordar (com a máquina desligada da tomada!). Observe as placas de circuito, capacitores e cabos de conexão. Faça uma limpeza suave dos fiapos usando um pincel macio antiestático.",
    quickSummary: "Conjunto eletrônico de placas-mãe, processadores de sinal (DSP) e drivers de potência que orquestram a sincronização de motores e a execução de matrizes.",
    relatedTerms: ["Mainboard", "Processador DSP", "Driver X/Y", "Encoder de Eixo", "Sincronismo Mecatrônico", "Aterramento Elétrico"],
    tags: ["placa-mae", "cpu", "eletronica", "driver", "motores", "manutencao eletrica", "firmware"]
  }
];

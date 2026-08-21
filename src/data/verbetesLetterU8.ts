import { Verbete } from "../types";

export const VERBETES_LETTER_U8: Verbete[] = [
  {
    id: "usb-comunicacao-e-transferencia-de-matrizes-via-pendrive-e-cabo",
    code: "U-043",
    letter: "U",
    term: "USB: Comunicação e Transferência de Matrizes (Pen Drive e Cabo)",
    pronunciation: "u-es-se-bê: co-mu-ni-ca-ção e trans-fe-rên-ci-a de ma-tri-zes (pen drai-vi e ca-bo)",
    level: "Iniciante 🟢",
    category: "Software & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do inglês 'Universal Serial Bus' (barramento serial universal), protocolo de comunicação de dados padrão da indústria de computadores criado em 1996.",
    summary: "Protocolo padrão de transferência de arquivos de matrizes de bordado do computador para a máquina através de pen drives formatados em FAT32 ou cabos diretos.",
    definition: "O sistema USB para Transferência de Matrizes (USB Embroidery Data Transfer) é o padrão físico e lógico universal que substituiu os antigos disquetes de 3,5 polegadas e cartões proprietários (PCMCIA / Compact Flash) no envio de arquivos de bordado (como .PES, .DST, .JEF, .EXP, .XXX) do computador para o painel de comando das máquinas de bordar eletrônicas. Abrange a leitura de unidades de memória flash (Pen Drives / USB Sticks) e a conexão serial direta via cabo USB (Direct-to-Machine Link).",
    technicalDetails: "Os requisitos técnicos estritos para comunicação USB em máquinas de bordar exigem: 1) Formatação do Pen Drive obrigatoriamente no sistema de arquivos FAT32 (sistemas NTFS, exFAT ou APFS do Mac não são reconhecidos pela maioria dos painéis de máquinas); 2) Capacidade de armazenamento recomendada: pen drives pequenos de 2 GB, 4 GB ou no máximo 8 GB / 16 GB (pen drives gigantes de 64 GB a 256 GB causam lentidão extrema ou travamento do microcontrolador da máquina); 3) Nomes de arquivos curtos: sem caracteres especiais, cedilhas, acentos gráficos ou espaços (ex: usar 'FLOR_01.PES' em vez de 'Coração da Vovó!.pes'); 4) Hierarquia de pastas simples (máximo de 1 a 2 níveis de subpastas).",
    beginnerExplanation: "É o jeito que a gente usa para passar o arquivo do bordado do computador para a máquina usando aquele 'pen drive' comum. Para a máquina ler direitinho sem dar erro, o pen drive precisa ser simples (não muito gigante), formatado em FAT32 e com os nomes dos arquivos escritos sem acentos nem caracteres esquisitos.",
    howItWorks: [
      "1. O programador finaliza a matriz no computador e salva no formato aceito pela sua máquina (ex: .PES para Brother, .DST para Tajima/Barudan, .JEF para Janome).",
      "2. Conecta o pen drive no computador e copia o arquivo para a raiz do pen drive.",
      "3. Remove o pen drive com segurança pelo sistema operacional.",
      "4. Insere o pen drive na entrada USB lateral do painel da máquina de bordar.",
      "5. No visor da máquina, seleciona o ícone de Pen Drive / USB.",
      "6. A máquina lista os arquivos na tela com miniatura visual do bordado.",
      "7. O operador seleciona a matriz, que é carregada instantaneamente na memória interna da máquina, pronta para bordar."
    ],
    applications: [
      "Carregamento diário de matrizes em máquinas domésticas e industriais de todas as marcas.",
      "Transferência em tempo real via cabo USB (função Direct Link em máquinas Brother, Janome e Bernina).",
      "Atualização de firmware (sistema operacional) de máquinas de bordar.",
      "Backup de segurança de matrizes favoritas na memória portátil."
    ],
    characteristics: [
      "Padrão universal compatível com 99% das máquinas modernas fabricadas após 2005.",
      "Dispensa fios longos e computadores conectados o tempo todo ao lado da máquina.",
      "Transferência instantânea em poucos segundos."
    ],
    commonErrors: [
      "❌ Usar pen drive de 128 GB formatado em exFAT/NTFS, fazendo a máquina travar ou dizer 'Nenhum dispositivo encontrado'.",
      "❌ Salvar o arquivo com nome cheio de acentos e símbolos (ex: 'Bordado_Coração_João#1.pes'), fazendo o arquivo sumir da tela da máquina.",
      "❌ Puxar o pen drive da máquina enquanto o arquivo está sendo lido, corrompendo a memória do pen drive."
    ],
    troubleshootingTips: [
      "Máquina não reconhece o pen drive: formate o pen drive no computador escolhendo 'FAT32' com tamanho de alocação padrão de 4096 bytes.",
      "Arquivo de bordado sumiu e não aparece na máquina: verifique se o arquivo está na extensão correta da sua máquina (ex: Janome só lê .JEF, Brother lê .PES/DST) e encurte o nome.",
      "Tela da máquina congelando ao abrir o pen drive: você colocou milhares de arquivos juntos na mesma pasta; crie poucas pastas e deixe no máximo 20 a 30 arquivos por pasta."
    ],
    dicaArtrelados: "Dica de ouro da Artrelados para pen drives de bordado: compre um pen drive pequenininho de 4GB ou 8GB exclusivo para a sua máquina de bordar! Nomeie seus arquivos sempre de forma simples (ex: 'LEAO_AZUL.PES') sem acentos nem ç! Sua máquina vai ler na velocidade da luz!",
    voceSabia: "Antes do padrão USB dominar o mercado, as máquinas de bordar industriais nos anos 1980 e 1990 liam as matrizes através de fitas de papel perfuradas de 8 canais (Paper Punch Tapes), onde cada ponto do bordado era um furinho físico na fita de papel!",
    practicalExercise: "Pegue um pen drive, conecte no computador e formate em FAT32. Crie uma pasta chamada 'TESTES' e salve um arquivo com nome curto 'TESTE01.PES'. Coloque na sua máquina e veja como o carregamento é instantâneo.",
    quickSummary: "Padrão universal de transferência de arquivos de matrizes via pen drive formatado em FAT32 ou cabo direto, garantindo compatibilidade e leitura rápida na máquina.",
    relatedTerms: ["Pen Drive (USB Stick)", "Formatação FAT32", "Extensões de Arquivo (.PES/.DST/.JEF)", "Firmware", "Memória Flash", "Painel de Comando"],
    tags: ["usb", "pen drive", "transferencia", "fat32", "formatos", "compatibilidade", "maquinas de bordar"]
  },
  {
    id: "utilizacao-de-fios-metalicos-cuidados-e-tensao-metallic-threads",
    code: "U-044",
    letter: "U",
    term: "Utilização de Fios Metálicos: Cuidados e Tensão (Metallic Threads)",
    pronunciation: "u-ti-li-za-ção de fi-os me-tá-li-cos: cui-da-dos e ten-são (me-tá-lic thréds)",
    level: "Intermediário 🟡",
    category: "Insumos & Materiais",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do grego 'metallon' (metal precioso) e da evolução industrial dos fios de lamelas de poliéster metalizado com alumínio e vapor de ouro sob núcleo de poliamida/viscose.",
    summary: "Guia completo de engenharia e operação para bordar com fios metalizados (ouro, prata e cobre) sem quebras, desfiamentos e perda de brilho.",
    definition: "A Utilização de Fios Metálicos (Metallic Embroidery Thread Handling & Tension Setup) compreende o conjunto de técnicas mecânicas, ajustes de tensão e programação de matrizes indispensáveis para bordar com linhas metalizadas. Os fios metálicos não são fios convencionais de filamento único: são compostos por uma alma/núcleo central de poliamida ou viscose envolvida helicoidalmente por uma fita microscópica de poliéster vaporizado com alumínio metalizado e laca protetora de cor. Essa estrutura composta é altamente propensa a torções, atrito térmico, desfiamento e quebras por excesso de tensão mecânica.",
    technicalDetails: "Para bordar com fios metálicos com 100% de estabilidade, é mandatório seguir o protocolo de ouro: 1) Redução drástica da tensão superior: afrouxar os tensores da máquina em 30% a 40% (a linha metálica deve correr com resistência mínima); 2) Uso obrigatório de Agulha Especial para Fios Metálicos (Needle Metallic / Topstitch nº 80/12 ou 90/14), que possui olhal alongado 2x maior com canaleta profunda e revestimento anti-atrito; 3) Redução de velocidade da máquina: limitar a rotação entre 500 e 600 PPM; 4) Densidade na matriz: reduzir a densidade em 15% a 20% (espaçamento de 0,44 mm a 0,48 mm), pois o fio metálico é mais volumoso que o poliéster padrão; 5) Posicionamento do cone: afastar o cone de 50 cm a 1 metro da máquina com guia de fio vertical para que as torções helicoidais do carretel se desfaçam no ar antes de entrar nos tensores.",
    beginnerExplanation: "É o jeito certo de bordar com aquelas linhas douradas e prateadas brilhantes maravilhosas sem passar raiva com a linha quebrando a cada 30 segundos. Como a linha dourada é delicada e tem uma capinha de metal, a gente precisa afrouxar a tensão da máquina, usar a agulha certa com buraquinho grande e abaixar a velocidade da máquina para ela bordar macio.",
    howItWorks: [
      "1. Na matriz, o programador reduz a densidade do ponto cheio para 0,45 mm e evita sobreposições pesadas.",
      "2. Instala-se na máquina uma agulha especial 'Metallic' nº 80/12 ou 90/14 nova.",
      "3. O cone de linha metálica é colocado no porta-cones (preferencialmente com redinha elástica de proteção para não desenrolar de vez).",
      "4. Afrouxam-se os discos de tensão da linha superior até que o fio corra com suavidade sedosa.",
      "5. A velocidade da máquina é reduzida para 550 PPM.",
      "6. A máquina borda de forma contínua e fluida, sem superaquecer o fio metálico no olhal da agulha.",
      "7. O bordado final reluz com brilho dourado e prateado impecável, com aspecto de joia preciosa."
    ],
    applications: [
      "Paramentos litúrgicos religiosos, estolas sacerdotais e mantos sacros.",
      "Brasões de formatura, monogramas de casamento de luxo e toalhas de lavabo nobres.",
      "Fardamentos de gala militar, dragomas, alamares e divisas de generais.",
      "Vestidos de noiva, alta-costura, figurinos carnavalescos e sapatilhas de dança."
    ],
    characteristics: [
      "Visual nobre e luxuoso inigualável que multiplica o valor de venda da peça.",
      "Exige redução de velocidade e agulhas com olhal alongado.",
      "Apresenta alta sensibilidade a fricção e atrito em tensores apertados."
    ],
    commonErrors: [
      "❌ Usar agulha comum fina (75/11) com olhal pequeno, esfolando a capa dourada da linha e arrebentando a cada 10 pontos.",
      "❌ Bordar na velocidade máxima de 900 PPM, gerando calor por atrito que derrete a película metalizada.",
      "❌ Deixar a tensão apertada de linha normal de poliéster, fazendo o fio metálico estourar na primeira curva."
    ],
    troubleshootingTips: [
      "Linha metálica desfiando e embolando antes de entrar na agulha: coloque uma redinha de proteção no cone e use uma agulha metálica nº 90/14.",
      "Linha quebrando constantemente na hora do ponto cheio: afrouxe o botão de tensão superior da máquina e reduza a velocidade para 500 PPM.",
      "Fio metálico pulando fora dos guias de linha: aumente a distância entre o cone e o primeiro passador de fio para que o fio desenrole suavemente."
    ],
    dicaArtrelados: "O segredo supremo dos Fios Metálicos da Artrelados: coloque uma redinha elástica no cone de linha dourada, use uma agulha Metallic 90/14 (que tem o buraco grandão!) e abaixe a velocidade da máquina para 550 PPM! Você vai bordar ouro o dia inteiro sem a linha arrebentar nenhuma vez!",
    voceSabia: "Na Idade Média, os bordados metálicos eram feitos com fios de ouro e prata puros martelados à mão por ourives até ficarem finos como fios de cabelo (técnica do 'Fio Tirado de Ouro'), sendo acessíveis apenas a reis, imperadores e papas.",
    practicalExercise: "Borde um monograma de 50 mm com linha dourada metálica. Primeiro tente bordar a 850 PPM com agulha comum 75/11. Depois troque para agulha Metallic 90/14, afrouxe a tensão e borde a 550 PPM. Compare a facilidade de costura e o brilho final.",
    quickSummary: "Protocolo técnico de ajustes de tensão frouxa, redução de velocidade, agulhas com olhal ampliado e densidade moderada para bordar perfeitamente com fios metalizados.",
    relatedTerms: ["Linha Metálica", "Agulha Metallic / Topstitch", "Tensão Superior", "Redinha de Cone", "Redução de Velocidade (PPM)", "Alta Costura"],
    tags: ["fio metalico", "linha dourada", "linha prateada", "agulha metallic", "tensao", "luxo", "alta costura"]
  },
  {
    id: "uniao-de-partes-em-grandes-bordados-multi-hooping-e-alinhamento",
    code: "U-045",
    letter: "U",
    term: "União de Partes em Grandes Bordados (Multi-Hooping e Alinhamento)",
    pronunciation: "u-ni-ão de par-tes em gran-des bor-da-dos (múl-ti hu-ping e a-li-nha-men-to)",
    level: "Avançado 🔴",
    category: "Software & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Técnica de divisão matricial desenvolvida para contornar a limitação física do campo útil de bastidores em máquinas domésticas e industriais.",
    summary: "Método de divisão de matrizes gigantes em seções menores com marcadores de registro cruzados para bordar peças de grande formato através de múltiplos enquadramentos.",
    definition: "A União de Partes em Grandes Bordados (Multi-Hooping / Divisão Matricial e Reenquadramento) é a técnica avançada de engenharia de software e produção mecânica que permite bordar composições de grande formato (como colchas de cama de 50x80 cm, estandartes, toalhas de mesa e jaquetas de grande área) em máquinas cujo bastidor físico máximo possui dimensões limitadas (como bastidores 13x18 cm ou 16x26 cm). O desenho original é fatiado no software em múltiplos arquivos correlacionados (Parte A, Parte B, Parte C), cada um contendo pontos de alinhamento e cruzetas de registro milimétricas.",
    technicalDetails: "A execução do Multi-Hooping exige rigor metrológico: 1) Planejamento da Linha de Divisão: as junções nunca devem cortar colunas de ponto cheio ou rostos humanos ao meio; devem ser escondidas sob contornos, folhas ou ramificações naturais; 2) Cruzetas de Registro (Registration Marks / Alignment Crosses): cada seção deve bordar 2 a 3 pontos em cruz (+) no final, que servirão de mira laser ou de agulha para o início exato da seção seguinte; 3) Tolerância de alinhamento: erro máximo admissível menor que 0,3 mm para evitar emendas perceptíveis a olho nu; 4) Uso de bastidores de posicionamento contínuo ou gabaritos de acrílico com mira milimetrada.",
    beginnerExplanation: "É o jeito inteligente de fazer um bordado gigante (daqueles maiores que o tamanho do seu bastidor) dividindo o desenho em pedaços no computador. A máquina borda a primeira parte com duas cruzinhas de mira, depois você muda a posição da toalha no bastidor, alinha a agulha exatamente em cima da cruzinha e borda a segunda parte, emendando tudo com perfeição sem parecer que foi dividido!",
    howItWorks: [
      "1. No software de matrizes, o programador carrega o desenho gigante (ex: ramo de flores de 40 cm de comprimento).",
      "2. Utiliza a ferramenta 'Multi-Hooping' ou divide manualmente o desenho em 2 ou 3 partes que caibam no bastidor da máquina.",
      "3. O software insere cruzetas de alinhamento (+) na extremidade da Parte 1 e no início da Parte 2.",
      "4. A peça de tecido é montada no bastidor e a máquina borda a Parte 1 e as cruzetas de mira.",
      "5. A peça é retirada do bastidor e reenquadrada na nova posição adjacente.",
      "6. O operador move o bastidor no painel até a agulha descer exatamente no centro da cruzeta bordada anteriormente.",
      "7. A máquina borda a Parte 2, conectando perfeitamente os galhos e flores em uma única obra contínua.",
      "8. As cruzetas de registro são desmanchadas com facilidade no final."
    ],
    applications: [
      "Bordados contínuos em barras de lençóis de casal, colchas e toalhas de mesa compridas.",
      "Estandartes religiosos, bandeiras de agremiações e mantos sacros.",
      "Bordados gigantes de costas de jaquetas de motoqueiros em máquinas domésticas.",
      "Bordas infinitas (Endless Embroidery) em cortinas e toalhas de banho.",
      "Composições florais panorâmicas em painéis de decoração têxtil."
    ],
    characteristics: [
      "Quebra a barreira física do tamanho do bastidor da sua máquina.",
      "Permite que máquinas de bastidor pequeno façam trabalhos de grande escala.",
      "Exige paciência, precisão milimétrica e excelente visão de alinhamento."
    ],
    commonErrors: [
      "❌ Cortar o desenho no meio de um tatami ou ponto cheio liso, deixando uma linha de emenda feia visível.",
      "❌ Não usar cruzetas de registro e tentar alinhar a segunda parte 'no olho', resultando em desenhos tortos e desconectados.",
      "❌ Esticar o tecido de forma diferente no segundo enquadramento, fazendo as medidas não baterem."
    ],
    troubleshootingTips: [
      "Segunda parte ficando afastada ou sobreposta em 1 mm: utilize a função de rotação e deslocamento fino de 0.1 mm no painel da máquina antes de costurar.",
      "Dificuldade de enxergar o centro da cruzeta: use a luz laser de mira da máquina ou abaixe a agulha manualmente com o volante para tocar o furo.",
      "Tecido deformando entre os enquadramentos: use entretela contínua e cole o tecido com cola spray temporária sem puxar a trama."
    ],
    dicaArtrelados: "Dica infalível para Multi-Hooping: esconda a divisão das partes em lugares naturais (na junção de um galho, debaixo de uma folha ou entre duas letras)! Ninguém no mundo vai descobrir que o bordado gigante foi feito em duas vezes!",
    voceSabia: "A famosa Tapeçaria de Bayeux, bordada no século XI na França com 70 metros de comprimento, foi confeccionada exatamente pelo princípio ancestral do Multi-Hooping, unindo nove painéis de linho de 8 metros bordados separadamente por freiras em mosteiros diferentes!",
    practicalExercise: "Pegue um ramo de flores longo de 25 cm. Divida em dois arquivos de 13 cm no software com duas cruzetas de registro. Borde a Parte 1 em um tecido, reenquadre o bastidor, alinhe pela cruzeta e borde a Parte 2. Analise a união das linhas com uma lupa.",
    quickSummary: "Metodologia de divisão e reenquadramento de matrizes de grande porte com cruzetas de registro milimétricas, permitindo bordar peças gigantes em bastidores limitados.",
    relatedTerms: ["Multi-Hooping", "Cruzeta de Registro", "Reenquadramento de Bastidor", "Bordado Infinito (Endless)", "Alinhamento a Laser", "Grande Formato"],
    tags: ["multi-hooping", "divisao", "alinhamento", "bastidor", "grande formato", "cruzeta de registro", "tecnicas avancadas"]
  }
];

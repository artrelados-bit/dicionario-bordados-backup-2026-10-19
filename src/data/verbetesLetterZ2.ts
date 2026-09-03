import { Verbete } from "../types";

export const VERBETES_LETTER_Z2: Verbete[] = [
  {
    id: "zigzag-underlay-suporte-zigue-zague-matriz",
    code: "Z-003",
    letter: "Z",
    term: "Zig-Zag Underlay — Ponto de Suporte em Zigue-Zague (Underlay Estrutural para Colunas Satim Médias e Largas)",
    pronunciation: "zíg-zég ân-der-lei — pon-tu de su-por-te zi-gui za-gui (ˈzɪɡ zæɡ ˈʌndərleɪ)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'underlay' (camada de base/fundação interna) combinado com o padrão geométrico zigue-zague de amortecimento mecânico.",
    summary: "Camada de pontos internos em zigue-zague costurada antes do ponto de cobertura, criando volume, sustentação e impedindo que o ponto satim afunde no tecido.",
    definition: "O Zig-Zag Underlay (Suporte em Zigue-Zague / Fundação em Zigue-Zague / Subponto Estrutural para Satim / Internal Zig-Zag Base) é um tipo especializado de ponto de suporte gerado automaticamente pelos softwares de digitalização de bordado. Costurado no interior das colunas de ponto cheio (Satim) com largura entre 2,5 mm e 7,0 mm, ele consiste em um zigue-zague aberto posicionado com recuo de segurança das bordas externas, funcionando como uma 'viga de sustentação' tridimensional.",
    technicalDetails: "O Zig-Zag Underlay combina os benefícios da ancoragem do tecido com o efeito de elevação vertical (Loft Effect). Ele é programado com espaçamento típico entre 1,5 mm e 3,0 mm e um recuo de borda (Margin/Pullback) de 0,4 mm a 0,8 mm para garantir que nenhuma ponta da linha interna escape por baixo da cobertura final de satim. Quando associado a um suporte perimetral de borda (Edge Run Underlay), ele forma uma estrutura compósita indeformável, indispensável para toalhas aveludadas, malhas e tecidos fofos.",
    beginnerExplanation: "É como se fosse a fundação de cimento de uma casa, só que feita com linha por baixo do bordado! Antes da máquina fazer o ponto cheio brilhante que todo mundo vê, ela borda um zigue-zague aberto por baixo. Isso faz o bordado ficar fofinho, em alto relevo e não deixa a linha afundar no meio dos pelinhos da toalha!",
    howItWorks: [
      "1. O programador cria uma coluna de ponto satim com largura de 4,0 mm no software CAD.",
      "2. Ativa a opção de Suporte em Zigue-Zague (Zig-Zag Underlay) nas propriedades do objeto.",
      "3. O software gera a costura interna com espaçamento de 2,0 mm e recuo de borda de 0,5 mm.",
      "4. Na máquina, o cabeçote borda primeiro o zigue-zague prendendo as fibras do tecido e a entretela.",
      "5. A linha de base cria uma elevação de 0,2 mm sobre a superfície têxtil.",
      "6. A máquina borda o ponto satim final por cima com ângulo cruzado em relação ao zigue-zague.",
      "7. O acabamento fica brilhante, nítido e com relevo nobre e volumoso."
    ],
    applications: [
      "Letras e monogramas em ponto satim com largura superior a 3,0 mm.",
      "Bordados em toalhas de banho felpudas, tecidos atoalhados e moletons.",
      "Bordado de brasões e emblemas com efeito de relevo suave.",
      "Prevenção de afundamento de pontos em tecidos de malha piquet de camisas polo."
    ],
    characteristics: [
      "Gera volume tridimensional sem necessidade de EVA emborrachado.",
      "Impede o encolhimento e repuxo da largura das colunas de satim.",
      "Recuo de borda automático para ocultação total da linha de base."
    ],
    commonErrors: [
      "❌ Usar Zig-Zag Underlay em letras microscópicas menores que 2 mm, amontoando linhas e furando o tecido.",
      "❌ Esquecer de configurar o recuo de margem (Pullback), fazendo as pontinhas do zigue-zague vazarem para fora do satim.",
      "❌ Desativar o underlay para 'economizar pontos', resultando em bordados ralos e afundados."
    ],
    troubleshootingTips: [
      "As pontinhas do zigue-zague interno estão aparecendo na lateral da letra: aumente a margem de recuo do underlay para 0,6 mm no software de matrizes.",
      "A coluna de satim em toalha felpuda ficou rala com pelinhos escapando: ative o Zig-Zag Underlay combinado com filme plástico hidrossolúvel colocado por cima da toalha.",
      "O bordado ficou excessivamente duro como uma tábua: aumente o espaçamento do Zig-Zag Underlay de 1,5 mm para 2,8 mm para deixar a fundação mais flexível."
    ],
    dicaArtrelados: "Para letras grandes e encorpadas em toalhas de banho e enxovais: use sempre a combinação campeã do ateliê Artrelados — um contorno interno (Edge Run) com um recheio em Zig-Zag Underlay por baixo e plástico hidrossolúvel por cima! Suas letras vão parecer esculpidas em relevo de luxo!",
    voceSabia: "O uso de pontos cruzados inferiores para dar relevo ao bordado é uma técnica que remonta aos bordados litúrgicos em ouro da Idade Média, onde mestres artesãos costuravam fios de cânhamo por baixo antes de aplicar os fios de ouro batido!",
    practicalExercise: "No seu software de digitalização, desenhe uma letra 'M' em ponto satim com largura de 5 mm. Teste duas opções de suporte: apenas ponto central (Center Run) e suporte em Zig-Zag com recuo de 0,5 mm. Compare em 3D como a fundação em zigue-zague encorpa a estrutura da letra.",
    quickSummary: "Ponto de suporte interno em zigue-zague que atua como fundação estrutural sob colunas satim, garantindo relevo e impedindo afundamentos.",
    relatedTerms: ["Underlay", "Ponto Satim", "Ponto de Suporte", "Edge Run", "Plástico Hidrossolúvel", "Densidade", "Wilcom"],
    imageUrl: "/images/z003_masterpiece_davinci.jpg?v=5",
    imageCaption: "Prancha Técnica Oficial do Ponto de Suporte em Zigue-Zague (Receita Artrelados): corte tridimensional em camadas revelando a entretela, a felpa da toalha domada pela base e pelo filme hidrossolúvel, e a coluna de ponto cheio em relevo nobre (loft); à direita, vista da coluna no software com os dois trilhos retos laterais, o zigue-zague aberto de sustentação com recuo de segurança (0,5 mm) e Checagem em Verde da Receita Artrelados, com tipografia digital de alta definição 100% em português sobre fundo branco puro sem requadros.",
    tags: ["zigzagunderlay", "subponto", "underlay", "suporte", "satim", "programacao", "wilcom"]
  },
  {
    id: "z-twist-torcao-z-fios-rotacao-direita",
    code: "Z-004",
    letter: "Z",
    term: "Z-Twist — Torção Z (Linhas com Fiação Helicoidal à Direita & Estabilidade Rotacional)",
    pronunciation: "zii-tuist — tor-são zê (ˈziː twɪst)",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da convenção internacional têxtil (norma ISO 2) onde a inclinação das fibras helicoidais do fio acompanha o traço diagonal central da letra 'Z' (torção à direita / sentido horário).",
    summary: "Sentido de torção helicoidal das linhas de bordar que impede que o fio se destorça ou desfie durante o atrito contínuo com a lançadeira rotativa.",
    definition: "O Z-Twist (Torção Z / Torção à Direita / Right-Hand Twist / Directional Thread Spinning) é o padrão geométrico e mecânico universal de fiação adotado na fabricação de linhas de bordar computadorizado de alta performance. Caracteriza-se pela torção helicoidal dos filamentos de poliéster ou viscose no sentido da diagonal da letra 'Z'. Esse sentido é cientificamente exigido para compatibilidade com o sentido de rotação da lançadeira (Hook) das máquinas de bordar, que gira em sentido horário; a rotação da máquina mantém a torção da linha fechada, enquanto fios com torção contrária (S-Twist) se abririam e quebrariam instantaneamente.",
    technicalDetails: "Quando a lançadeira rotativa de uma máquina de bordar gira a 1.000 RPM, a ponta metálica do bico da lançadeira penetra na laçada da agulha e aplica um torque de rotação mecânica sobre o fio. Em uma linha com Z-Twist, o atrito da lançadeira aperta e consolida a torção dos cabos (Tightening effect). Se fosse utilizada uma linha com S-Twist (frequente em linhas manuais de tricô e crochê), a lançadeira destorceria os filamentos (Untwisting), abrindo os cabos individuais em forma de leque, o que causaria quebra imediata de linha por esgarçamento e perda de laçadas a cada descida da agulha.",
    beginnerExplanation: "É o jeito que o fio da linha foi enrolado na fábrica! As linhas de bordado de máquina são torcidas no formato da letra 'Z' para que a máquina possa costurar super rápido sem que o fio se desenrole ou vire uma 'vassourinha' na ponta da agulha. Por isso, nunca devemos usar linha de crochê ou de bordar à mão na máquina de bordar!",
    howItWorks: [
      "1. Na fiação industrial, os filamentos paralelos de poliéster são torcidos no sentido horário (Z-Twist).",
      "2. Dois ou três cabos Z são retorcidos juntos com equilíbrio torsional perfeito (Zero Torque Balance).",
      "3. O cone é posicionado na máquina de bordar e a linha passa pelos guias e tensores.",
      "4. A linha desce pelo canalete da agulha e forma a laçada sob a chapa de ponto.",
      "5. A lançadeira rotativa gira no sentido horário e captura a laçada.",
      "6. A força de fricção da lançadeira age a favor da torção Z, mantendo o fio compacto, liso e resistente.",
      "7. A máquina borda em velocidade máxima sem desfiamento ou quebras por destorção."
    ],
    characteristics: [
      "Sentido helicoidal à direita conforme norma internacional ISO 2.",
      "Alta estabilidade torsional sob rotação horária de lançadeiras industriais.",
      "Superfície compacta e lisa com mínimo atrito no olho da agulha."
    ],
    applications: [
      "Todas as linhas industriais superiores de bordado (poliéster 40 wt, viscose, metálicas).",
      "Linhas de bobina contínua de filamento de poliéster (Bobbin Thread 60 wt).",
      "Bordados em altíssima velocidade em máquinas automáticas (acima de 1.000 PPM).",
      "Costuras de alta solicitação mecânica em calçados, bolsas e couro."
    ],
    commonErrors: [
      "❌ Tentar usar meadas manuais de ponto cruz ou linhas de crochê (com torção S) na máquina de bordar, quebrando o fio a cada 3 pontos.",
      "❌ Passar a linha pelos tensores torcendo o fio no sentido contrário por guias montados de forma invertida.",
      "❌ Desenrolar a linha puxando pelo lado do cone em vez de puxar pela ponta superior, introduzindo torções parasitas no fio."
    ],
    troubleshootingTips: [
      "A linha começa a abrir em vários fiozinhos finos e arrebenta antes da agulha: a linha está sofrendo destorção por guia de passagem incorreto ou o cone está tombado na bandeja; use o suporte de cone vertical e coloque rede de linha (Thread Net).",
      "A linha fica fazendo espirais e laços antes de entrar no tensor superior: a linha acumulou torção estática; passe o fio por um guia de feltro lubrificado com uma gota de silicone têxtil.",
      "A máquina pula pontos ao usar linha artesanal de algodão: verifique se a linha possui especificação Z-Twist própria para máquina de bordar."
    ],
    dicaArtrelados: "Puxe sempre a linha de bordar saindo reto para cima pela ponta do cone, exatamente como manda o suporte da máquina! Se a linha sair de lado ou o cone ficar tombado, ela ganha voltas extras de torção a cada volta do carretel e pode embolar no estica-fio!",
    voceSabia: "Na indústria têxtil global, mais de 98% de todas as linhas de costura e bordado de máquina do mundo são obrigatoriamente fabricadas com Z-Twist, enquanto o S-Twist é reservado quase que exclusivamente para bordados manuais, tricô e cordas náuticas!",
    practicalExercise: "Pegue um pedaço de 15 cm de linha de bordar. Segure as duas pontas na vertical sob boa luz e olhe a inclinação dos filamentos torcidos: observe como as linhas diagonais sobem da esquerda para a direita, acompanhando exatamente a inclinação do traço central da letra 'Z'.",
    quickSummary: "Padrão de fiação helicoidal à direita das linhas de bordar que garante estabilidade e impede desfiamentos na lançadeira rotativa.",
    relatedTerms: ["Yarn", "Lançadeira Rotativa", "Filamento Contínuo", "Torção S", "Linhas de Bordar", "Poliéster Trilobal", "Hook Timing"],
    tags: ["ztwist", "torcaoz", "linhas", "fiacao", "morfologia", "poliester", "lancadeira"]
  }
];

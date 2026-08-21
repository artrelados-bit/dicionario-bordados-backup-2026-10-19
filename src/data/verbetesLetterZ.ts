import { Verbete } from "../types";

export const VERBETES_LETTER_Z: Verbete[] = [
  {
    id: "z-axis-eixo-z-sincronismo-barra-agulha",
    code: "Z-001",
    letter: "Z",
    term: "Z-Axis — Eixo Z (Eixo Principal de Sincronismo da Barra de Agulha & Eixo da Árvore)",
    pronunciation: "zii-ék-sis — êi-shu zê (ˈziː ˈæksɪs)",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino.",
    origin: "Do latim cartesiano 'axis' associado à terceira cota tridimensional 'z' da geometria espacial, que na engenharia mecatrônica têxtil designa o eixo rotativo da árvore principal da máquina.",
    summary: "Eixo de rotação central que comanda a descida/subida da barra de agulha, o movimento do estica-fio e o sincronismo angular com a lançadeira rotativa de 0° a 360°.",
    definition: "O Z-Axis (Eixo Z / Eixo Principal da Árvore / Main Shaft Axis / Needle Bar Driving Axis) é o eixo motriz rotativo primordial de uma máquina de bordar industrial ou doméstica. Conectado diretamente ao servomotor principal do cabeçote (Main Motor), o eixo Z gira 360 graus para cada ponto costurado, controlando mecanicamente a biela da barra da agulha, o mecanismo articulado do estica-fio e, através de correias sincronizadas ou eixos de transmissão inferiores, o giro sincronizado da lançadeira rotativa (Hook).",
    technicalDetails: "A posição angular do eixo Z é monitorada com resolução absoluta por um encoder óptico (Main Shaft Encoder) de alta velocidade acoplado à árvore da máquina. Cada ciclo de 360° possui fases críticas milimetricamente calibradas: a 100° ocorre a penetração máxima da agulha no tecido; a 170°–195° a agulha sobe 2 mm formando o laço que é capturado pela ponta da lançadeira (Hook Timing); entre 260° e 300° o estica-fio atinge o ponto morto superior recolhendo o nó; e entre 270° e 90° (enquanto a agulha está fora do tecido) a placa-mãe libera os motores dos eixos X e Y para movimentar o pantógrafo sem risco de quebrar agulhas.",
    beginnerExplanation: "É o eixo mestre da máquina que gira em círculo para fazer a agulha subir e descer no ritmo perfeito! Enquanto o bastidor anda para os lados nos eixos X e Y, o eixo Z comanda a agulha, o estica-fio e a lançadeira lá embaixo. Quando a agulha está fora do pano, o bastidor anda; quando a agulha desce, o bastidor para para não entortar a agulha!",
    howItWorks: [
      "1. O motor principal gira o eixo Z iniciando o ciclo de costura a partir do ponto morto superior (100°/0°).",
      "2. O excêntrico mecânico do eixo Z empurra a barra da agulha para baixo, perfurando o tecido e a entretela.",
      "3. Ao passar do ponto inferior e subir cerca de 1,8 mm a 2,2 mm, a linha afrouxa formando a laçada (Loop).",
      "4. O bico da lançadeira, sincronizado pelo mesmo eixo Z, penetra na laçada e entrelaça a linha da agulha com a da bobina.",
      "5. A alavanca do estica-fio sobe tracionando a linha para assentar o nó no meio do tecido.",
      "6. A agulha sai completamente do tecido e o encoder do eixo Z autoriza o deslocamento dos eixos X e Y.",
      "7. O ciclo se repete de 600 a 1.200 vezes por minuto (PPM) com precisão milimétrica contínua."
    ],
    applications: [
      "Sincronização do ciclo de ponto em alta rotação (Hook Timing & Needle Bar Timing).",
      "Calibração de parada automática da máquina com a agulha sempre na posição superior (Stop Position a 100°).",
      "Acionamento mecânico sincronizado da tesoura automática (Trimmer) e da faca móvel.",
      "Troca automática de agulhas e cores em cabeçotes industriais multicabeçotes."
    ],
    characteristics: [
      "Eixo em aço temperado retificado de alta rigidez torsional.",
      "Monitoramento por encoder óptico de pulso angular de 0° a 360°.",
      "Tolerância de sincronismo com a lançadeira inferior a ±0,05 mm."
    ],
    commonErrors: [
      "❌ Ligar a máquina sem verificar se o eixo Z está na posição correta de parada (Stop Position / 100°), quebrando agulhas no primeiro movimento do bastidor.",
      "❌ Forçar o volante do eixo Z com a mão enquanto a máquina está executando um corte de linha automático.",
      "❌ Falta de lubrificação no eixo Z, causando superaquecimento, ruído agudo e travamento da barra de agulha."
    ],
    troubleshootingTips: [
      "A máquina não dá a partida e emite erro 'Main Shaft Not at Stop Position': gire o volante manual da máquina até o ponteiro alinhar com a marcação de 100° (ponto vermelho/traço de parada) ou aperte a tecla de reposicionamento de eixo no painel.",
      "A agulha quebra toda vez que o bastidor começa a andar: o encoder do eixo Z está com leitura atrasada ou sujo de poeira têxtil; limpe o sensor óptico do eixo principal.",
      "A máquina pula pontos constantemente em todas as cores: o sincronismo entre a ponta da lançadeira e a descida da agulha (ponto do eixo Z) descalibrou; realize a regulagem do tempo de lançadeira (Hook Timing)."
    ],
    dicaArtrelados: "Se a sua máquina der uma travadinha por embolamento de linha na bobina, nunca puxe o volante do eixo Z com força bruta! Desligue a máquina, retire a caixa de bobina, limpe os fios presos e só então gire o volante com a mão suavemente no sentido anti-horário até a agulha subir ao ponto mais alto.",
    voceSabia: "O sistema de árvore de comando com manivela excêntrica para acionamento de agulhas de costura foi patenteado em 1846 pelo inventor norte-americano Elias Howe, sendo o princípio mecânico do eixo Z que move até hoje todas as máquinas de costura e bordado do planeta!",
    practicalExercise: "Com a máquina desligada, localize o volante manual na lateral do cabeçote. Gire o volante suavemente com a mão e observe a janela com a graduação de graus (0° a 360°). Note como a barra de agulha desce no tecido e como o estica-fio atinge o topo exatamente quando a escala marca a posição de descanso.",
    quickSummary: "Eixo rotativo mestre da máquina que comanda o ciclo da agulha, estica-fio e lançadeira com sincronismo angular de 0° a 360°.",
    relatedTerms: ["X-Axis", "Y-Axis", "Hook Timing", "Encoder Principal", "Barra da Agulha", "Estica-Fio", "Volante Manual"],
    tags: ["zaxis", "eixoz", "mecanica", "sincronismo", "hardware", "manutencao", "lancadeira"]
  },
  {
    id: "zig-zag-stitch-ponto-zigue-zague",
    code: "Z-002",
    letter: "Z",
    term: "Zig-Zag Stitch — Ponto Zigue-Zague (Ponto Alternado de Fixação, Contorno & Apliques)",
    pronunciation: "zíg-zég stitxi — pon-tu zi-gui za-gui (ˈzɪɡ zæɡ stɪtʃ)",
    level: "Iniciante 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da onomatopeia francesa e alemã 'zick-zack' (mudança angular alternada de direção de uma linha contínua quebrada em ângulos agudos).",
    summary: "Ponto mecânico alternado formado por penetrações em zigue-zague que serve como ponto de suporte, fixação de apliques e contorno flexível.",
    definition: "O Zig-Zag Stitch (Ponto Zigue-Zague / Ponto Alternado / Open Zig-Zag Stitch / Tackdown Stitch) é um dos pontos estruturais e decorativos fundamentais do bordado computadorizado. Caracterizado por penetrações alternadas da agulha em dois lados opostos de um eixo central com espaçamento aberto (geralmente entre 1,5 mm e 3,0 mm entre os vértices), ele é utilizado prioritariamente para prender o tecido de aplique após o corte (Tackdown), estruturar pontos de suporte elásticos (Underlay) e bordar contornos leves que acompanham a elasticidade natural de malhas.",
    technicalDetails: "Ao contrário da coluna satim (que é um zigue-zague de densidade ultracomprimida com espaçamento de 0,35 mm a 0,45 mm), o Zig-Zag Stitch opera com baixa densidade de cobertura superficial, reduzindo drasticamente o número de pontos e a rigidez da peça. Na confecção de apliques (Appliqué), o zigue-zague aberto 'morde' a borda do tecido cortado com uma penetração dentro do aplique e uma penetração fora na entretela, travando os fios do tecido sem esticar a margem antes de receber a coluna satim de cobertura definitiva.",
    beginnerExplanation: "É aquele clássico pontinho que vai para a esquerda e para a direita como dentes de serra! No bordado computadorizado, a gente usa muito o zigue-zague aberto para prender o tecidinho do aplique bem firme antes de passar o ponto cheio bonito por cima, garantindo que o tecido não desfie e não saia do lugar.",
    howItWorks: [
      "1. A máquina costura a linha de marcação do aplique (Placement Stitch).",
      "2. O tecido do aplique é posicionado e recortado na margem com tesoura de ponta curva.",
      "3. A máquina executa o Zig-Zag Stitch contornando toda a borda com largura de 2,0 mm a 3,0 mm.",
      "4. O zigue-zague grampeia as fibras do tecido cortado contra a base de entretela.",
      "5. A máquina inicia a coluna satim de acabamento final por cima do zigue-zague.",
      "6. O aplique fica plano, sem desfiados nas pontas e com durabilidade permanente a lavagens."
    ],
    applications: [
      "Ponto de fixação e travamento (Tackdown) em apliques de tecido e patches.",
      "Ponto de suporte estrutural (Zig-Zag Underlay) sob colunas satim largas.",
      "Contornos decorativos leves e respiráveis em roupas infantis de verão.",
      "União de partes e emendas em projetos de bordado no bastidor (In-The-Hoop)."
    ],
    characteristics: [
      "Estrutura aberta com excelente flexibilidade e elasticidade mecânica.",
      "Consumo reduzido de linha e baixo impacto de enrugamento no tecido.",
      "Excelente capacidade de retenção mecânica de bordas desfiáveis."
    ],
    commonErrors: [
      "❌ Pular a etapa do ponto zigue-zague no aplique e passar direto o satim, fazendo os fiapos do tecido vazarem para fora da borda com o tempo.",
      "❌ Fazer o zigue-zague muito largo, fazendo as pontas do zigue-zague escaparem por fora do ponto satim final.",
      "❌ Usar tensão excessiva na linha no zigue-zague, repuxando a margem do tecido de aplique."
    ],
    troubleshootingTips: [
      "O tecido do aplique desfiou depois da primeira lavagem: certifique-se de programar a etapa de fixação com Zig-Zag Stitch antes do satim final para prender a trama do tecido.",
      "O zigue-zague de suporte está aparecendo por baixo da coluna satim: reduza a largura do zigue-zague no software para que ele fique pelo menos 0,5 mm mais estreito que a coluna satim externa.",
      "O zigue-zague está franzindo a malha: afrouxe ligeiramente a tensão da linha superior e use entretela de boa gramatura sob o tecido."
    ],
    dicaArtrelados: "Em matrizes de aplique com tecidos que desfiam fácil (como algodão cru ou linho rústico): use sempre o ponto de fixação em zigue-zague duplo antes do acabamento satim. Esse zigue-zague funciona como uma cerca de proteção que nunca deixa nenhum fiapo escapar!",
    voceSabia: "A costura em ponto zigue-zague foi inventada em 1882 pela empresa alemã Gegauf (que mais tarde fundou a icônica marca Bernina), transformando para sempre a indústria de roupas ao permitir costurar tecidos elásticos sem arrebentar a costura!",
    practicalExercise: "Crie uma forma simples no seu software de bordado (como uma estrela). Configure o contorno para ponto Zig-Zag aberto com largura de 3,0 mm e espaçamento de 2,0 mm. Borde em um retalho de tecido e observe como ele prende a borda com leveza e flexibilidade.",
    quickSummary: "Ponto alternado em formato de dentes de serra, essencial para fixação segura de tecidos de aplique e suporte estrutural.",
    relatedTerms: ["Ponto Satim", "Aplique (Appliqué)", "Tackdown", "Underlay", "Ponto de Suporte", "In-The-Hoop"],
    tags: ["zigzagstitch", "pontoziguezague", "aplique", "tackdown", "contorno", "pontosbasicos", "costura"]
  },
  {
    id: "zig-zag-underlay-ponto-suporte-ziguezague",
    code: "Z-003",
    letter: "Z",
    term: "Zig-Zag Underlay — Ponto de Suporte em Zigue-Zague (Subponto Estrutural para Colunas Satim)",
    pronunciation: "zíg-zég an-der-lêi — pon-tu de su-por-ti em zi-gui za-gui (ˈzɪɡ zæɡ ˈʌndərleɪ)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'underlay' (camada de base/fundação subjacente) executada em geometria alternada de zigue-zague sob a coluna de acabamento.",
    summary: "Camada interna de sustentação automática em formato de zigue-zague costurada antes do satim para dar volume, firmeza e impedir afundamento.",
    definition: "O Zig-Zag Underlay (Ponto de Suporte em Zigue-Zague / Subponto Estrutural / Alternating Underlay Grid / Satin Base Foundation) é uma rotina de digitalização prévia na qual a máquina costura uma camada de pontos alternados em zigue-zague aberto no núcleo interno de uma coluna satim antes de aplicar a camada superficial de cobertura. Projetado para criar um 'colchão' interno de ancoragem, o Zig-Zag Underlay eleva as laçadas superiores, impede que os pontos afundem em tecidos com felpas ou texturas (toalhas atoalhadas, veludo, piquê e moletom) e confere relevo tridimensional sem necessidade de EVA.",
    technicalDetails: "O Zig-Zag Underlay é parametrizado nos softwares de digitalização (como Wilcom e Hatch) com espaçamento entre vértices (geralmente entre 1,5 mm e 3,5 mm) e recuo das bordas (Margin / Inset de 0,4 mm a 0,8 mm). Esse recuo garante que as penetrações do zigue-zague fiquem 100% ocultas sob o satim de acabamento. Em colunas satim com largura superior a 5,0 mm, o Zig-Zag Underlay é frequentemente combinado com uma costura perimetral dupla (Double Edge Run) formando uma treliça estrutural indeformável.",
    beginnerExplanation: "É uma costura de sustentação em zigue-zague que a máquina faz escondidinha por baixo do bordado antes de passar a linha bonita por cima! Funciona como a fundação de uma casa: segura o tecido para não enrugar e faz as letras ficarem gordinhas, com um relevo lindo e sem afundar nas felpas da toalha.",
    howItWorks: [
      "1. O software identifica uma coluna satim média ou larga (largura de 3 mm a 8 mm).",
      "2. Calcula o recuo de segurança da margem (ex.: 0,5 mm para dentro de cada borda).",
      "3. A máquina inicia costurando o zigue-zague aberto no centro da coluna sobre a entretela.",
      "4. As fibras do tecido e as felpas da toalha são comprimidas e assentadas pela passagem do zigue-zague.",
      "5. A máquina retorna costurando a coluna satim densa por cima da base de zigue-zague.",
      "6. A camada superior desliza sobre a fundação elevada, criando um acabamento liso, brilhante e sem falhas."
    ],
    applications: [
      "Bordados em toalhas de banho e rosto atoalhadas para evitar que os fios da toalha vazem.",
      "Bordados em camisas polo de malha piquê e moletons felpados.",
      "Criação de relevo e encorpamento em monogramas e letras de luxo em camisaria.",
      "Estabilização de colunas satim longas em tecidos com elasticidade."
    ],
    characteristics: [
      "Espaçamento aberto e calibrado que não sobrecarrega a contagem de pontos.",
      "Recuo automático de borda para invisibilidade total.",
      "Aumento significativo do brilho e relevo do ponto satim superior."
    ],
    commonErrors: [
      "❌ Deixar o zigue-zague sem recuo de borda (Margin = 0), fazendo as pontas do suporte aparecerem fora da letra.",
      "❌ Usar zigue-zague muito denso como suporte em tecidos finos, deixando o bordado duro como pedra.",
      "❌ Não usar Zig-Zag Underlay em toalhas atoalhadas, fazendo as letras afundarem e ficarem invisíveis."
    ],
    troubleshootingTips: [
      "As pontinhas do suporte em zigue-zague estão escapando para fora da coluna satim: aumente o recuo da borda do underlay (Margin / Inset) no software de 0,3 mm para 0,6 mm.",
      "O bordado em toalha de banho ficou ralo e com felpas aparecendo entre os pontos: combine o Zig-Zag Underlay com um plástico hidrossolúvel por cima da toalha.",
      "As letras satim estão ficando muito duras e grossas: reduza a densidade do Zig-Zag Underlay (aumente o espaçamento de 1,5 mm para 2,8 mm) no software."
    ],
    dicaArtrelados: "Para bordar monogramas com aquele relevo acetinado maravilhoso em toalhas de lavabo: ative na sua matriz um suporte de borda dupla (Center Run + Edge Run) combinado com um Zig-Zag Underlay com espaçamento de 2,2 mm. As letras ficam altas e brilhantes parecendo que foram bordadas com espuma 3D!",
    voceSabia: "Na engenharia têxtil, o uso de subpontos estruturais como o Zig-Zag Underlay reduz em até 40% a necessidade de aumentar a densidade da camada superior, economizando linha e evitando que o tecido rasgue!",
    practicalExercise: "No seu software de digitalização, desenhe uma letra 'M' em ponto satim com largura de 5 mm. Teste duas opções de suporte: apenas ponto central (Center Run) e suporte em Zig-Zag com recuo de 0,5 mm. Compare em 3D como a fundação em zigue-zague encorpa a estrutura da letra.",
    quickSummary: "Ponto de suporte interno em zigue-zague que atua como fundação estrutural sob colunas satim, garantindo relevo e impedindo afundamentos.",
    relatedTerms: ["Underlay", "Ponto Satim", "Ponto de Suporte", "Edge Run", "Plástico Hidrossolúvel", "Densidade", "Wilcom"],
    tags: ["zigzagunderlay", "subponto", "underlay", "suporte", "satim", "programacao", "wilcom"]
  },
  {
    id: "z-twist-torcao-z-fios-rotacao-direita",
    code: "Z-004",
    letter: "Z",
    term: "Z-Twist — Torção Z (Linhas com Fiação Helicoidal à Direita & Estabilidade Rotacional)",
    pronunciation: "zii-tuist — tor-são zê (ˈziː twɪst)",
    level: "Avançado 🔴",
    category: "Linhas & Fios",
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
  },
  {
    id: "zero-point-ponto-zero-origem-bastidor",
    code: "Z-005",
    letter: "Z",
    term: "Zero Point — Ponto Zero (Origem Absoluta do Bastidor, Home Position & Start Point)",
    pronunciation: "zí-rou póint — pon-tu zê-ru (ˈzɪroʊ pɔɪnt)",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do conceito matemático de origem das coordenadas cartesianas (0,0) introduzido na programação numérica CNC e no padrão industrial Tajima de bordado.",
    summary: "Coordenada central absoluta (X=0, Y=0) do bastidor que serve como referência de partida, centralização e retorno obrigatório da matriz de bordado.",
    definition: "O Zero Point (Ponto Zero / Origem do Bastidor / Ponto de Início e Fim / Home Position / Coordinate Origin 0,0) é a coordenada espacial cartesiana de referência absoluta calibrada no firmware da máquina de bordar e nos softwares de digitalização. Localizado por convenção universal no centro geométrico exato da área útil do bastidor, o Ponto Zero é o local de onde todos os vetores de deslocamento (dX, dY) são calculados e para onde o pantógrafo retorna automaticamente ao concluir a execução da matriz.",
    technicalDetails: "Nos arquivos padrão da indústria (como .DST, .PES, .EXP, .JEF e .EMB), uma matriz profissionalmente digitalizada deve obrigatoriamente ter seu Start Point (ponto inicial) e seu End Point (ponto final) coincidindo exatamente com o Zero Point (0,0). Essa padronização permite que o operador centralize o bastidor no tecido, inicie a produção e, se houver necessidade de interrupção ou troca de linha, o pantógrafo retorne com precisão de zero micrômetros à mesma coordenada de origem sem perder o esquadro.",
    beginnerExplanation: "É o ponto bem no meinho do bastidor onde tudo começa e onde tudo termina! Quando você coloca o desenho na máquina e aperta o botão de centralizar, a máquina leva a agulha direto para esse 'Ponto Zero'. É a garantia de que o bordado vai sair bem centralizado no lugar que você marcou na roupa!",
    howItWorks: [
      "1. Ao ligar a máquina, o pantógrafo se calibra nos sensores e estabelece o Zero Point no centro da área útil.",
      "2. O operador carrega a matriz de bordado no painel da máquina.",
      "3. O sistema calcula a distância máxima de todos os pontos a partir do Zero Point (Bounding Box).",
      "4. O operador alinha o apontador laser da máquina exatamente sobre a marcação central do tecido.",
      "5. A máquina inicia o bordado a partir do Zero Point e desloca o bastidor ponto a ponto.",
      "6. Ao finalizar o último ponto de travamento e cortar a linha, o pantógrafo retorna automaticamente ao Zero Point.",
      "7. O bastidor se abre para frente facilitando a retirada da peça concluída."
    ],
    characteristics: [
      "Coordenada central (0,0) universal em todos os softwares CAD.",
      "Referência matemática para cálculo de limites de bastidor (Hoop Limits).",
      "Garantia de repetibilidade em produções seriadas de uniformes."
    ],
    applications: [
      "Centralização de monogramas em bolsos, camisetas e fardamentos.",
      "Retomada precisa de bordados interrompidos por falta de energia elétrica.",
      "Alinhamento de matrizes grandes divididas em múltiplos bastidores (Multi-Hooping).",
      "Calibração mecânica de fim de curso e sensores de pantógrafo."
    ],
    commonErrors: [
      "❌ Salvar a matriz com o ponto final longe do centro, fazendo o pantógrafo parar no canto do bastidor e puxar a linha.",
      "❌ Iniciar o bordado sem conferir se o Ponto Zero no painel da máquina está alinhado com a cruz desenhada no tecido.",
      "❌ Deslocar o bastidor com a mão após a centralização, descalibrando o Ponto Zero do motor."
    ],
    troubleshootingTips: [
      "A máquina deu erro 'Design Out of Hoop' ao carregar a matriz: a matriz está fora do Ponto Zero no software; abra o arquivo, use a ferramenta 'Center to Origin (0,0)' e salve novamente.",
      "O bordado terminou e o bastidor não voltou para o meio: ative a opção 'Auto Return to Origin' nas configurações de corte e finalização do software de matrizes.",
      "O laser da máquina não aponta para o centro da grade plástica: recalibre a posição de origem no menu de configurações do bastidor no painel da máquina."
    ],
    dicaArtrelados: "Regra de ouro de todo programador de matriz de sucesso: antes de salvar qualquer matriz no seu computador para enviar ao cliente ou para a máquina, use sempre o atalho de centralização automática (Center Design). Uma matriz que começa e termina no Ponto Zero (0,0) evita 100% dos erros de colisão no bastidor!",
    voceSabia: "O sistema de coordenadas cartesianas com Ponto Zero (0,0) que usamos no bordado eletrônico foi concebido pelo filósofo e matemático francês René Descartes no século XVII enquanto observava o voo de uma mosca no teto de seu quarto e tentava descrever sua posição exata com números!",
    practicalExercise: "Abra qualquer matriz de bordado no seu software de edição. Pressione as teclas de centralização para mover a matriz para a coordenada X=0, Y=0. Observe como a grade milimetrada e os eixos da tela cruzam exatamente no centro do desenho.",
    quickSummary: "Coordenada central cartesiana (0,0) que define a origem geométrica, o início e o ponto de retorno seguro de toda matriz no bastidor.",
    relatedTerms: ["X-Axis", "Y-Axis", "Centralização", "Start Point", "End Point", "Bounding Box", "Pantógrafo"],
    tags: ["zeropoint", "pontozero", "origem", "centralizacao", "coordenadas", "operacao", "pantografo"]
  },
  {
    id: "z-foot-calcador-z-calcador-mola-oscilante",
    code: "Z-006",
    letter: "Z",
    term: "Z-Foot — Calcador Z (Calcador de Bordado Oscilante com Mola & Amortecimento Anti-Flagging)",
    pronunciation: "zii-fut — kal-ka-dor zê (ˈziː fʊt)",
    level: "Iniciante 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do código de identificação de acessórios das fabricantes de máquinas (como o pé 'Z' de bordado livre e quilting Brother/Janome) associado ao amortecimento do eixo vertical Z.",
    summary: "Sapata metálica de pressão com mola interna que pressiona o tecido durante a subida da agulha para impedir a ondulação e a formação de nós frouxos.",
    definition: "O Z-Foot (Calcador Z / Calcador de Bordado Livre / Spring-Loaded Embroidery Foot / Darning Foot / Anti-Flagging Presser Foot) é o componente mecânico terminal instalado na haste de pressão do cabeçote de bordado. Dotado de uma sapatilha circular vazada em aço inoxidável ou plástico transparente e uma mola helicoidal de retorno integrada, sua função essencial é descer e pressionar firmemente o tecido e a entretela contra a chapa de ponto na fração de segundo em que a agulha sobe, eliminando o fenômeno de ondulação do tecido (Flagging) e permitindo a formação perfeita da laçada da linha inferior.",
    technicalDetails: "Durante a costura em alta velocidade, quando a agulha perfura o tecido e inicia o movimento ascendente para formar a laçada, a elasticidade do tecido tende a puxar o tecido para cima junto com a agulha (Flagging). O Z-Foot é acionado pelo parafuso da barra de agulha através de uma alavanca oscilante superior: no momento em que a agulha sobe, a mola do calcador mantém uma força de compressão de 1,5 N a 3,0 N sobre o tecido, impedindo que o material se eleve mais do que 0,5 mm da chapa de ponto. A altura de folga do calcador (Presser Foot Height) pode ser ajustada no painel digital ou por parafuso mecânico de 1,0 mm a 2,5 mm dependendo da espessura do tecido bordado.",
    beginnerExplanation: "É o pezinho de metal com uma molinha que fica em volta da agulha da sua máquina de bordar! Ele desce e dá uma 'seguradinha' no tecido bem na hora em que a agulha sobe, impedindo que o pano venha junto grudado na agulha. É essa molinha que garante que o bordado fique lisinho e não faça aquele barulho de tecido batendo na chapa!",
    howItWorks: [
      "1. A barra de agulha desce para perfurar o tecido e o Z-Foot encosta suavemente na superfície da peça.",
      "2. A agulha penetra o tecido e atinge o ponto morto inferior.",
      "3. A agulha começa a subir; a alavanca superior do calcador comprime a mola contra o tecido.",
      "4. O tecido fica perfeitamente imóvel e plano contra a chapa de ponto.",
      "5. A laçada de linha se abre perfeitamente embaixo e a lançadeira captura o fio sem falha.",
      "6. A agulha sai totalmente do tecido e o calcador se eleva cerca de 1,5 mm.",
      "7. O pantógrafo desloca o bastidor livremente para a próxima coordenada sem arrastar o pé no tecido."
    ],
    characteristics: [
      "Mola helicoidal calibrada para resposta rápida a mais de 800 PPM.",
      "Anel central circular que oferece visão desobstruída do ponto de impacto.",
      "Ajuste milimétrico de altura para tecidos finos, toalhas ou couro."
    ],
    applications: [
      "Execução padrão de qualquer bordado computadorizado em bastidor.",
      "Bordados em peças espessas, mantas acrílicas e jaquetas acolchoadas.",
      "Bordado de ponto livre (Free-Motion Quilting) em máquinas domésticas.",
      "Eliminação de laçadas falsas e quebra de linha em tecidos elásticos."
    ],
    commonErrors: [
      "❌ Deixar o calcador regulado muito baixo em toalhas grossas, esmagando as felpas e arrastando o tecido.",
      "❌ Regular o calcador muito alto em tecidos finos, gerando efeito de ondulação (Flagging) e quebra constante de linha.",
      "❌ Entortar a haste do calcador ao puxar o bastidor com a máquina montada, fazendo a agulha bater no metal do pé."
    ],
    troubleshootingTips: [
      "A agulha bate no pezinho metálico do calcador e quebra com barulho forte: o Z-Foot está torto ou mal parafusado na haste; solte o parafuso, alinhe o furo central perfeitamente com a agulha e aperte com chave de fenda.",
      "A máquina pula pontos ao bordar toalhas atoalhadas grossas: aumente a altura de folga do calcador (Foot Clearance) no menu da máquina de 1,5 mm para 2,5 mm para acomodar o volume da toalha.",
      "O tecido faz barulho alto de estalo (chicote) a cada descida da agulha: o calcador está muito alto; abaixe a regulagem de altura no painel para que ele pressione o tecido com firmeza."
    ],
    dicaArtrelados: "Quando for bordar tecidos muito grossos ou fofos (como mantas de bebê com manta R2 ou jaquetas jeans): entre no menu de configurações da sua máquina de bordar e aumente a altura do calcador em 1 ou 2 níveis. A máquina vai trabalhar macia, sem empurrar o tecido e sem fazer nenhum barulho de esforço!",
    voceSabia: "O mecanismo do calcador oscilante com mola de retorno para bordado foi patenteado em 1898 pelo engenheiro suíço Karl Friedrich Gegauf, permitindo que a máquina de costura pudesse bordar em qualquer direção com os dentes transportadores abaixados!",
    practicalExercise: "Com a máquina desligada, gire o volante manual da máquina bem devagar e observe o pezinho do calcador com a mola. Repare como ele desce e pressiona o tecido exatamente no instante em que a ponta da agulha começa a sair da peça.",
    quickSummary: "Pé calcador com mola amortecedora que estabiliza o tecido durante a subida da agulha, prevenindo ondulações e pulos de ponto.",
    relatedTerms: ["Flagging", "Chapa de Ponto", "Barra da Agulha", "Pé de Quilting", "Altura do Calcador", "Lançadeira"],
    tags: ["zfoot", "calcadorz", "calcador", "componentes", "mecanica", "flagging", "hardware"]
  },
  {
    id: "zero-tension-system-sistema-tensao-zero",
    code: "Z-007",
    letter: "Z",
    term: "Zero-Tension System — Sistema de Tensão Zero (Guias de Passagem Livre para Linhas Especiais)",
    pronunciation: "zí-rou ten-shon sis-tem — sis-te-ma de ten-são zê-ru (ˈzɪroʊ ˈtɛnʃən ˈsɪstəm)",
    level: "Avançado 🔴",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do conceito de passagem passiva sem atrito mecânico (Zero Friction / Zero Drag Feed) desenvolvido para manipulação de fios metálicos e elásticos ultrassensíveis.",
    summary: "Configuração mecânica de passagem de linha direta com discos de tensão totalmente abertos para bordar com fios metálicos, elásticos ou muito frágeis.",
    definition: "O Zero-Tension System (Sistema de Tensão Zero / Passagem Direta de Fio Sensível / Low-Friction Thread Path / Tension Bypass Routine) é um método operacional e de engenharia mecânica no qual o circuito de alimentação da linha superior é reconfigurado para eliminar quase 100% da resistência friccional imposta pelos discos tensores e guias intermediários. Utilizado no bordado com linhas metálicas de ouro/prata (Metallic Threads), fios fotoluminescentes, linhas elásticas ou filamentos puros de seda que se romperiam ou perderiam o revestimento metálico se submetidos à tensão padrão de 120 gf a 140 gf.",
    technicalDetails: "Linhas metálicas possuem um núcleo de poliamida ou poliéster envolvido por uma microfolha de alumínio metalizado extremamente suscetível ao calor por fricção e à torção. Ao adotar o sistema de tensão zero, o bordador remove a linha dos discos de compressão ativos (ou afrouxa o seletor para o nível 0–0,5), direciona o fio através de suportes externos de cone com tubo guia de PTFE/teflon e ajusta a caixa de bobina com tensão ligeiramente mais alta (28 gf a 32 gf). Dessa forma, é a linha inferior que atua tracionando suavemente a linha metálica para o avesso, sem que a agulha estresse o fio metalizado.",
    beginnerExplanation: "É um ajuste especial em que você deixa a passagem da linha da máquina praticamente 'solta', quase sem aperto nenhum nos discos de tensão! A gente usa esse truque quando vai bordar com aquelas linhas douradas ou prateadas brilhantes que quebram à toa. Como a linha passa levinha e solta, ela não esquenta, não quebra e o bordado fica um luxo!",
    howItWorks: [
      "1. O cone de linha metálica é posicionado em um suporte de mesa afastado pelo menos 50 cm da máquina.",
      "2. A linha é passada com rede protetora (Thread Net) para desenrolar sem espirais.",
      "3. A passagem superior nos tensores da máquina é afrouxada ao máximo (nível 0 a 1) ou desviada dos discos principais.",
      "4. Instala-se uma agulha especial para linha metálica (Metallic Needle 80/12 ou 90/14) com olho largo e revestimento antiaderente.",
      "5. A velocidade da máquina é reduzida para 500 a 600 PPM.",
      "6. A máquina executa o bordado com fluxo contínuo e suave de linha.",
      "7. A linha metálica assenta-se perfeitamente no tecido com brilho radiante e zero quebras."
    ],
    characteristics: [
      "Resistência de tração inferior a 30 gf no percurso superior.",
      "Preservação integral do revestimento laminado de linhas metálicas.",
      "Eliminação do superaquecimento no olho da agulha."
    ],
    applications: [
      "Bordados em mantos religiosos, paramentos e vestes cerimoniais com fios de ouro e prata.",
      "Bordados com linhas metálicas e holográficas em vestidos de noiva e festa.",
      "Uso de linhas refletivas de segurança de alta espessura em uniformes noturnos.",
      "Bordados decorativos com fios de seda pura artesanais."
    ],
    commonErrors: [
      "❌ Tentar bordar linha metálica com a tensão normal de linha de poliéster, estalando e quebrando o fio a cada dez segundos.",
      "❌ Bordar com linha metálica em velocidade de 900 PPM, superaquecendo a agulha e derretendo o fio metalizado.",
      "❌ Usar agulha comum 75/11 em vez de agulha específica de linha metálica com olho grande."
    ],
    troubleshootingTips: [
      "A linha metálica está descascando e embolando antes de entrar na agulha: afrouxe a tensão superior para o mínimo possível, coloque uma redinha no cone e borrife uma gota de silicone líquido têxtil no topo do cone de linha.",
      "O bordado com fio dourado está com laçadas frouxas na frente: aumente ligeiramente a tensão da caixa de bobina no parafuso micrométrico para puxar o ponto para baixo com segurança.",
      "A agulha quebra a linha metálica sempre que faz pontos pequenos: no software de matrizes, remova pontos com menos de 1,5 mm de comprimento ao programar para fios metálicos."
    ],
    dicaArtrelados: "O segredo do ateliê Artrelados para bordar com linha dourada metálica sem quebrar NUNCA: coloque o cone de linha dentro de uma caneca no chão ou use um suporte externo afastado da máquina, use agulha Metallic 80/12, reduza a velocidade para 500 PPM e deixe a tensão da linha quase no zero. Você vai bordar minutos a fio sem nenhuma quebra!",
    voceSabia: "Os fios metálicos originais da antiguidade eram feitos de lâminas de ouro puro batidas à mão até a espessura de uma folha de papel e enroladas ao redor de fios de seda; hoje em dia, as linhas metálicas utilizam películas de poliéster metalizado com espessura de apenas 12 micrômetros!",
    practicalExercise: "Coloque um cone de linha metálica na sua máquina. Afrouxe o botão da tensão superior para o número mais baixo e puxe a linha com a mão: sinta como a linha desliza suavemente sem nenhum tranco. Faça um teste bordando uma estrela a 500 PPM com agulha Metallic 80/12.",
    quickSummary: "Configuração de passagem livre e atrito quase nulo para bordar com linhas metálicas e fios delicados sem quebras.",
    relatedTerms: ["Linha Metálica", "Tensão Superior", "Agulha Metallic", "Thread Net", "Silicone Líquido", "Velocidade (PPM)"],
    tags: ["zerotension", "tensaozero", "linhasmetalicas", "ouro", "prata", "operacao", "regulagem"]
  },
  {
    id: "zero-jump-salto-zero-ponto-nulo-matriz",
    code: "Z-008",
    letter: "Z",
    term: "Zero Jump — Salto Zero (Comando de Ponto Nulo, Deslocamento Zero & Ancoragem em Matrizes)",
    pronunciation: "zí-rou djam-p — sal-tu zê-ru (ˈzɪroʊ dʒʌmp)",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da especificação binária de comandos de matrizes CNC/Tajima (.DST) onde um registro de salto é gravado com incremento vetorial zero (dX=0, dY=0).",
    summary: "Instrução técnica de matriz onde o bastidor não se move (dX=0, dY=0), utilizada para executar cortes automáticos, ancoragens e alinhamentos de laser.",
    definition: "O Zero Jump (Salto Zero / Ponto Nulo de Deslocamento / Null Jump Stitch / Zero-Delta Command) é um comando binário especializado inserido na cadeia de instruções de um arquivo de bordado no qual o código de salto (Jump Code) é acompanhado de valores delta nulos nos eixos cartesianos (dX = 0 e dY = 0). Esse comando é utilizado pela controladora da máquina para engatilhar funções secundárias sem movimentar o tecido: acionamento do solenoide do cortador de linha (Trimmer Sequence), disparo de pulsos de parada para colocação de aplique (Stop/Appliqué Command) e execução de múltiplos golpes de agulha no mesmo ponto para ancoragens cegas.",
    technicalDetails: "No protocolo Tajima .DST, um comando de corte de linha automático convencional é codificado por uma sequência encadeada de 3 a 5 comandos 'Zero Jump' consecutivos seguidos por um ponto normal. A placa eletrônica da máquina detecta essa sequência de saltos sem movimento do pantógrafo e sabe que não se trata de uma viagem espacial do bastidor, mas sim da ordem para que o motor da faca de corte engate sob a chapa de ponto e realize a tosa da linha superior e da bobina.",
    beginnerExplanation: "É um comando invisível dentro do arquivo da matriz que diz para a máquina: 'Fique parada no mesmo lugarzinho sem mexer o bastidor e faça o corte da linha!' É assim que o computador do bordado sabe a hora exata de cortar a linha e trocar de cor sem errar o lugar do desenho.",
    howItWorks: [
      "1. O software CAD finaliza um elemento de bordado e precisa cortar a linha para iniciar o próximo.",
      "2. O processador do software insere uma sequência de comandos Zero Jump (dX=0, dY=0) no arquivo.",
      "3. A máquina lê a matriz e chega no bloco de Zero Jump.",
      "4. O pantógrafo permanece rigorosamente estático na coordenada atual.",
      "5. O comando ativa o mecanismo do cortador automático (Trimmer) abaixo da chapa de ponto.",
      "6. A linha é cortada rente, o limpador de fio (Wiper) recolhe a ponta superior e a máquina salta para o próximo bloco.",
      "7. O processo ocorre em frações de segundo sem deixar nós ou puxões de tecido."
    ],
    characteristics: [
      "Incremento relativo nulo (dX=0, dY=0) na coordenada cartesiana.",
      "Uso universal na emulação de cortes de linha em formatos binários industriais.",
      "Sincronização de comandos de parada e troca de cor (Color Change)."
    ],
    applications: [
      "Emulação de comandos de corte de linha automático em arquivos .DST e .EXP.",
      "Programação de pontos de parada para montagem de apliques (Appliqué Stop).",
      "Ancoragem concentrada de início de costura em materiais duros (couro e lona).",
      "Marcação de pontos de referência para leitura de miras a laser."
    ],
    commonErrors: [
      "❌ Inserir sequências de Zero Jump com a função de corte desativada no painel, fazendo a máquina bater 5 agulhadas no mesmo buraco e furar o tecido.",
      "❌ Deletar comandos de salto nulo na edição manual de pontos, fazendo a máquina costurar uma linha direta entre dois desenhos sem cortar.",
      "❌ Não configurar a quantidade correta de saltos para corte no menu da máquina industrial."
    ],
    troubleshootingTips: [
      "A máquina não corta a linha entre as letras em arquivos .DST: verifique nas configurações do painel da máquina se a detecção de cortes está configurada para '3 Jumps' para reconhecer os comandos de Zero Jump da matriz.",
      "A agulha está furando o mesmo buraco várias vezes no final do texto: remova os saltos nulos duplicados no editor de lista de pontos (Stitch List) do seu software.",
      "A matriz perdeu os cortes ao ser convertida de .PES para .DST: certifique-se de ativar a opção 'Export Jumps for Trimming' no software de conversão."
    ],
    dicaArtrelados: "Ao converter arquivos para máquinas industriais que leem formato .DST: verifique sempre se a sua matriz está configurada para gerar de 3 a 4 saltos automáticos nos cortes de linha. Essa é a 'senha mágica' para a máquina cortar todas as linhazinhas perfeitamente sem deixar nenhum fio para você ter que limpar na tesoura depois!",
    voceSabia: "O formato .DST (desenvolvido pela Tajima em 1980) não tinha um comando nativo de corte de linha no seu código original; os engenheiros japoneses inventaram o truque de usar três comandos de 'Zero Jump' seguidos para avisar a máquina que era hora de cortar a linha sem precisar mudar o formato do arquivo!",
    practicalExercise: "Abra uma matriz no seu software de edição e acesse a 'Lista de Eventos de Ponto' (Stitch List). Role até uma troca de cor e localize os pontos com valor X=0,0 e Y=0,0 marcados como 'Jump'. Observe como eles comandam a tesoura automática da máquina.",
    quickSummary: "Instrução de matriz com movimento vetorial zero (0,0) usada para acionar comandos de corte automático e ancoragens.",
    relatedTerms: ["DST Format", "Jump Stitch", "Trimmer", "Lista de Pontos", "Troca de Cor", "Appliqué Stop", "Tajima"],
    tags: ["zerojump", "saltozero", "dst", "cortador", "trimmer", "software", "programacao"]
  },
  {
    id: "zinc-coated-needles-agulhas-zinco-antiaderente",
    code: "Z-009",
    letter: "Z",
    term: "Zinc-Coated & Anti-Adhesive Needles — Agulhas com Revestimento de Zinco & Antiaderentes (Super Non-Stick)",
    pronunciation: "zink-kôu-ted níi-dlz — a-gu-lhas de zin-ku an-ti-a-de-ren-tes (ˈzɪŋk ˌkoʊtɪd ˈniːdəlz)",
    level: "Intermediário 🟡",
    category: "Agulhas & Acessórios",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do elemento químico metálico zinco (do alemão 'Zink') e tratamentos metalúrgicos galvânicos de nitreto de zinco e fluoropolímeros antiaderentes para agulhas industriais de precisão.",
    summary: "Agulhas de bordado tratadas com banho galvânico de zinco e revestimento antiaderente que impedem o acúmulo de resíduos de cola spray e entretelas termocolantes.",
    definition: "As Zinc-Coated & Anti-Adhesive Needles (Agulhas com Revestimento de Zinco e Cromo Antiaderente / Agulhas Super Non-Stick / Anti-Glue Embroidery Needles) são agulhas de alta tecnologia desenvolvidas por fabricantes renomados (como Schmetz, Groz-Beckert e Organ) com revestimento superficial compósito à base de ligas de zinco, cromo duro e polímeros antiaderentes de PTFE. Projetadas especificamente para bordar materiais adesivos (entretelas autoadesivas, colas spray temporárias, velcro e tecidos termofusíveis), elas impedem que a resina da cola grude na haste e no olho da agulha.",
    technicalDetails: "Ao bordar peças montadas com spray adesivo ou entretela adesiva com agulhas normais de níquel, o calor gerado pelo atrito a 800 PPM derrete a cola, que se deposita na canaleta e no olho da agulha (Gunking effect). Esse acúmulo obstrui a passagem da linha, desfia os filamentos e faz o fio arrebentar a cada poucos minutos. As agulhas com acabamento em zinco e camadas Non-Stick possuem coeficiente de atrito até 60% menor, repelindo a aderência de polímeros e permitindo bordar milhares de pontos continuamente sem necessidade de limpar a agulha com álcool.",
    beginnerExplanation: "São agulhas especiais com um acabamento lisinho e antiaderente (como uma frigideira que não gruda comida!). Elas são perfeitas para quando você usa cola spray temporária ou entretela que cola com facilidade, porque a cola não gruda no olho da agulha e a linha não fica arrebentando a toda hora!",
    howItWorks: [
      "1. A peça é fixada no bastidor com auxílio de cola spray temporária ou entretela adesiva.",
      "2. Instala-se a agulha com revestimento antiaderente/zinco (ex.: Schmetz Super Non-Stick 75/11 ou 80/12).",
      "3. A máquina borda em velocidade normal penetrando repetidamente na camada adesivada.",
      "4. O revestimento galvânico de baixa energia superficial impede que as moléculas da cola adiram ao metal aquecido.",
      "5. O olho e o canalete da agulha permanecem 100% limpos e desobstruídos.",
      "6. A linha de bordar desliza livremente mantendo a tensão perfeitamente calibrada.",
      "7. A produção é concluída sem paradas de máquina para limpeza ou trocas de agulha."
    ],
    characteristics: [
      "Revestimento antiaderente de alta durabilidade com liga de zinco e cromo.",
      "Olho de formato largo projetado para reduzir o atrito do fio.",
      "Total resistência ao acúmulo de colas de contato, sprays e resinas sintéticas."
    ],
    applications: [
      "Bordados com técnica flutuante fixados com spray adesivo temporário.",
      "Bordado de patches com entretela termocolante e filmes adesivos de aplique.",
      "Bordados em couro legítimo, sintético, vinil e materiais emborrachados.",
      "Aplicação de fitas de velcro e tecidos técnicos impermeáveis."
    ],
    commonErrors: [
      "❌ Usar agulha comum de níquel com excesso de cola spray, grudando uma 'rolha' de cola no olho da agulha e quebrando a linha.",
      "❌ Limpar agulhas antiaderentes com lixas ou objetos pontiagudos de metal, arranhando e removendo o banho protetor.",
      "❌ Continuar bordando com a agulha torta após bater no aro do bastidor."
    ],
    troubleshootingTips: [
      "A agulha está cheia de cola preta/grudenta no olho e a linha quebra sem parar: substitua por uma agulha antiaderente (Super Non-Stick / Anti-Glue) e limpe a barra de agulha com algodão umedecido em álcool isopropílico.",
      "A linha fica desfiando ao bordar apliques com cola: reduza a quantidade de spray adesivo (uma borrifada leve a 30 cm de distância é suficiente) e utilize agulha antiaderente 80/12.",
      "O ponto da bobina está sendo puxado para cima em tecido colado: o excesso de cola na agulha normal está freando a linha superior; troque para uma agulha com banho de zinco antiaderente."
    ],
    dicaArtrelados: "Se você usa muita cola spray temporária para fazer bordados flutuantes no ateliê: tenha sempre na sua gavetinha uma caixinha de agulhas Super Non-Stick (antiaderentes). Elas custam quase o mesmo que uma agulha comum, mas economizam horas de dor de cabeça e fazem a linha deslizar como mágica!",
    voceSabia: "A tecnologia de revestimento antiaderente em agulhas foi inspirada nas pesquisas aeroespaciais dos anos 1970 sobre filmes finos de fluoropolímeros para impedir o congelamento e acúmulo de partículas nas asas de aeronaves supersônicas!",
    practicalExercise: "Pegue uma agulha comum e uma agulha Super Non-Stick. Aplique uma gota de cola líquida ou passe uma fita adesiva na ponta de cada uma. Note como a agulha com tratamento antiaderente repele o grude com facilidade e limpa instantaneamente com um simples pano seco.",
    quickSummary: "Agulhas de alta performance com revestimento antiaderente e zinco que impedem o acúmulo de cola spray e resinas adesivas.",
    relatedTerms: ["Agulhas de Bordado", "Cola Spray", "Super Non-Stick", "Schmetz", "Entretela Adesiva", "Gunking", "Manutenção"],
    tags: ["zinccoatedneedles", "agulhasantiaderentes", "agulhas", "nonstick", "colaspray", "acessorios", "hardware"]
  },
  {
    id: "zoom-tool-ferramenta-zoom-inspecao-cad",
    code: "Z-010",
    letter: "Z",
    term: "Zoom Tool — Ferramenta de Zoom (Inspeção de Pontos em Alta Resolução & Navegação CAD)",
    pronunciation: "zúum tul — fer-ra-men-ta de zun (ˈzuːm tuːl)",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'zoom' (efeito óptico de aproximação e ampliação contínua de imagem através de lentes teleobjetivas ou renderizadores gráficos vetoriais).",
    summary: "Recurso fundamental de ampliação e navegação visual nos softwares de bordado que permite inspecionar cada agulhada com aumento de até 1.600%.",
    definition: "A Zoom Tool (Ferramenta de Zoom / Lupa de Inspeção / Zoom In & Zoom Out / View Magnifier / Real-Scale 1:1 View) é o recurso óptico e gráfico de ampliação e controle de visualização presente em todos os softwares de digitalização e edição de matrizes de bordado (Wilcom, Embird, PE-Design, Bernina, Hatch). Permite ao programador alternar instantaneamente entre a visualização panorâmica da peça no bastidor, a escala real 1:1 (tamanho físico real em milímetros) e ampliações extremas (de 200% até mais de 1.600%), essenciais para inspecionar penetrações individuais de agulha, recuos de pontos de suporte e sobreposições de cores.",
    technicalDetails: "A precisão milimétrica de uma matriz depende da resolução de exibição na tela. Em zoom de 100% (escala 1:1 calibrada com a resolução DPI do monitor), o bordador visualiza exatamente como a peça será vista a olho nu. Em ampliações de 800% ou mais, a Zoom Tool revela os 'Stitch Points' (nós de penetração da agulha marcados como pequenos pontos vetoriais), permitindo ao digitador identificar pontos muito curtos (menores que 1,0 mm) que quebrariam a agulha, ajustar compensações de repuxo e posicionar nós de travamento (Tie-In/Tie-Off) com precisão cirúrgica.",
    beginnerExplanation: "É a ferramenta de 'lupa' do seu programa de bordado no computador! Com ela você pode aproximar bem de pertinho para ver onde cada pontinho da agulha vai bater no tecido, ou afastar para ver o desenho inteiro dentro do bastidor. É como ter um microscópio para garantir que o bordado não tenha nenhum errinho escondido!",
    howItWorks: [
      "1. O programador abre a matriz e gira a roda do mouse (Scroll Wheel) ou aperta a tecla de atalho 'Z' (Zoom).",
      "2. Clica e arrasta uma caixa de seleção sobre o detalhe específico (ex.: uma letra pequena de 4 mm).",
      "3. O software renderiza a área com ampliação de 800%, exibindo cada filamento de linha individual.",
      "4. O digitador inspeciona a posição dos pontos de penetração e a distância entre as linhas de satim.",
      "5. Ajusta nós vetoriais e corrige eventuais acúmulos excessivos de pontos.",
      "6. Pressiona a tecla '0' ou 'F' (Fit to Window / 1:1) para retornar à visão geral e conferir a harmonia do desenho.",
      "7. A matriz é salva com garantia total de qualidade de costura."
    ],
    applications: [
      "Inspeção minuciosa de monogramas e microletras antes da costura na máquina.",
      "Alinhamento milimétrico de contornos satim sobre preenchimentos tatami.",
      "Verificação de pontos curtos e nós ocultos em áreas densas.",
      "Calibração de escala 1:1 no monitor para conferência com réguas físicas."
    ],
    characteristics: [
      "Ampliação contínua suave com renderização vetorial e TrueView 3D.",
      "Modo de atalho rápido pelo scroll do mouse ou teclas de atalho universais.",
      "Modo escala 1:1 calibrável com o tamanho físico real da tela."
    ],
    commonErrors: [
      "❌ Programar toda a matriz em zoom de 1.200% sem afastar para a escala 1:1, criando detalhes microscópicos que a agulha física de 0,7 mm não consegue bordar.",
      "❌ Não calibrar a resolução do monitor no software, achando que o tamanho na tela é diferente do tamanho real da peça.",
      "❌ Esquecer de inspecionar os cantos das letras em zoom próximo, deixando pontas de underlay vazando para fora."
    ],
    troubleshootingTips: [
      "O bordado na tela parece do tamanho certo mas borda minúsculo na máquina: calibre o tamanho de tela (Screen Calibration) no menu de opções do software usando uma régua plástica de verdade encostada no monitor.",
      "A agulha quebrou em um detalhe pequeno: use a ferramenta de Zoom para aproximar a 1.000% sobre aquele ponto e veja se não há um amontoado de mais de 10 agulhadas no mesmo lugar.",
      "Dificuldade de navegar em zoom muito próximo: segure a barra de espaço do teclado para ativar temporariamente a ferramenta de 'mãozinha' (Pan) e arrastar a tela sem perder o nível de ampliação."
    ],
    dicaArtrelados: "Use sempre a regra dos dois passos no software: faça os ajustes finos com o Zoom bem pertinho (800%) e, antes de salvar, aperte a tecla de escala 1:1 (tamanho real) e dê um passo para trás da cadeira. Se o bordado estiver lindo e legível a um metro de distância da tela, ele vai ficar perfeito na camiseta do seu cliente!",
    voceSabia: "O primeiro software comercial de bordado computadorizado para microcomputadores PC (criado pela Wilcom na Austrália em 1980) já contava com a tecla 'Z' para o comando de zoom, atalho que permanece como padrão universal da indústria há mais de quatro décadas!",
    practicalExercise: "Abra um arquivo de matriz no seu software. Use a roda do mouse para aproximar até 1.000% sobre uma letra. Encontre os pequenos quadradinhos que mostram as penetrações da agulha. Em seguida, aperte a tecla '1' (escala real 1:1) e veja como o desenho se transforma no tamanho exato que terá na peça física.",
    quickSummary: "Ferramenta de aproximação óptica e navegação em softwares CAD que permite inspecionar cada ponto de agulha em altíssima resolução.",
    relatedTerms: ["Pan Tool", "Escala 1:1", "TrueView", "Stitch Points", "Software de Matrizes", "Wilcom", "Embird"],
    tags: ["zoomtool", "zoom", "lupa", "software", "cad", "inspecao", "programacao"]
  }
];

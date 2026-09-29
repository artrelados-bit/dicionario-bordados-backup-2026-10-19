import { Verbete } from "../types";

export const VERBETES_LETTER_Z: Verbete[] = [
  {
    "id": "z-axis-eixo-z-sincronismo-barra-agulha",
    "code": "Z-001",
    "letter": "Z",
    "term": "Z-Axis — Eixo Z (Eixo Principal de Sincronismo da Barra de Agulha & Eixo da Árvore)",
    "pronunciation": "zii-ék-sis — êi-shu zê (ˈziː ˈæksɪs)",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do latim cartesiano 'axis' associado à terceira cota tridimensional 'z' da geometria espacial, que na engenharia mecatrônica têxtil designa o eixo rotativo da árvore principal da máquina.",
    "summary": "Eixo de rotação central que comanda a descida/subida da barra de agulha, o movimento do estica-fio e o sincronismo angular com a lançadeira rotativa de 0° a 360°.",
    "definition": "O Z-Axis (Eixo Z / Eixo Principal da Árvore / Main Shaft Axis / Needle Bar Driving Axis) é o eixo motriz rotativo primordial de uma máquina de bordar industrial ou doméstica. Conectado diretamente ao servomotor principal do cabeçote (Main Motor), o eixo Z gira 360 graus para cada ponto costurado, controlando mecanicamente a biela da barra da agulha, o mecanismo articulado do estica-fio e, através de correias sincronizadas ou eixos de transmissão inferiores, o giro sincronizado da lançadeira rotativa (Hook).",
    "technicalDetails": "A posição angular do eixo Z é monitorada com resolução absoluta por um encoder óptico (Main Shaft Encoder) de alta velocidade acoplado à árvore da máquina. Cada ciclo de 360° possui fases críticas milimetricamente calibradas: a 100° ocorre a penetração máxima da agulha no tecido; a 170°–195° a agulha sobe 2 mm formando o laço que é capturado pela ponta da lançadeira (Hook Timing); entre 260° e 300° o estica-fio atinge o ponto morto superior recolhendo o nó; e entre 270° e 90° (enquanto a agulha está fora do tecido) a placa-mãe libera os motores dos eixos X e Y para movimentar o pantógrafo sem risco de quebrar agulhas.",
    "beginnerExplanation": "É o eixo mestre da máquina que gira em círculo para fazer a agulha subir e descer no ritmo perfeito! Enquanto o bastidor anda para os lados nos eixos X e Y, o eixo Z comanda a agulha, o estica-fio e a lançadeira lá embaixo. Quando a agulha está fora do pano, o bastidor anda; quando a agulha desce, o bastidor para para não entortar a agulha!",
    "howItWorks": [
      "1. O motor principal gira o eixo Z iniciando o ciclo de costura a partir do ponto morto superior (100°/0°).",
      "2. O excêntrico mecânico do eixo Z empurra a barra da agulha para baixo, perfurando o tecido e a entretela.",
      "3. Ao passar do ponto inferior e subir cerca de 1,8 mm a 2,2 mm, a linha afrouxa formando a laçada (Loop).",
      "4. O bico da lançadeira, sincronizado pelo mesmo eixo Z, penetra na laçada e entrelaça a linha da agulha com a da bobina.",
      "5. A alavanca do estica-fio sobe tracionando a linha para assentar o nó no meio do tecido.",
      "6. A agulha sai completamente do tecido e o encoder do eixo Z autoriza o deslocamento dos eixos X e Y.",
      "7. O ciclo se repete de 600 a 1.200 vezes por minuto (PPM) com precisão milimétrica contínua."
    ],
    "applications": [
      "Sincronização do ciclo de ponto em alta rotação (Hook Timing & Needle Bar Timing).",
      "Calibração de parada automática da máquina com a agulha sempre na posição superior (Stop Position a 100°).",
      "Acionamento mecânico sincronizado da tesoura automática (Trimmer) e da faca móvel.",
      "Troca automática de agulhas e cores em cabeçotes industriais multicabeçotes."
    ],
    "characteristics": [
      "Eixo em aço temperado retificado de alta rigidez torsional.",
      "Monitoramento por encoder óptico de pulso angular de 0° a 360°.",
      "Tolerância de sincronismo com a lançadeira inferior a ±0,05 mm."
    ],
    "commonErrors": [
      "❌ Ligar a máquina sem verificar se o eixo Z está na posição correta de parada (Stop Position / 100°), quebrando agulhas no primeiro movimento do bastidor.",
      "❌ Forçar o volante do eixo Z com a mão enquanto a máquina está executando um corte de linha automático.",
      "❌ Falta de lubrificação no eixo Z, causando superaquecimento, ruído agudo e travamento da barra de agulha."
    ],
    "troubleshootingTips": [
      "A máquina não dá a partida e emite erro 'Main Shaft Not at Stop Position': gire o volante manual da máquina até o ponteiro alinhar com a marcação de 100° (ponto vermelho/traço de parada) ou aperte a tecla de reposicionamento de eixo no painel.",
      "A agulha quebra toda vez que o bastidor começa a andar: o encoder do eixo Z está com leitura atrasada ou sujo de poeira têxtil; limpe o sensor óptico do eixo principal.",
      "A máquina pula pontos constantemente em todas as cores: o sincronismo entre a ponta da lançadeira e a descida da agulha (ponto do eixo Z) descalibrou; realize a regulagem do tempo de lançadeira (Hook Timing)."
    ],
    "dicaArtrelados": "Se a sua máquina der uma travadinha por embolamento de linha na bobina, nunca puxe o volante do eixo Z com força bruta! Desligue a máquina, retire a caixa de bobina, limpe os fios presos e só então gire o volante com a mão suavemente no sentido anti-horário até a agulha subir ao ponto mais alto.",
    "voceSabia": "O sistema de árvore de comando com manivela excêntrica para acionamento de agulhas de costura foi patenteado em 1846 pelo inventor norte-americano Elias Howe, sendo o princípio mecânico do eixo Z que move até hoje todas as máquinas de costura e bordado do planeta!",
    "practicalExercise": "Com a máquina desligada, localize o volante manual na lateral do cabeçote. Gire o volante suavemente com a mão e observe a janela com a graduação de graus (0° a 360°). Note como a barra de agulha desce no tecido e como o estica-fio atinge o topo exatamente quando a escala marca a posição de descanso.",
    "quickSummary": "Eixo rotativo mestre da máquina que comanda o ciclo da agulha, estica-fio e lançadeira com sincronismo angular de 0° a 360°.",
    "relatedTerms": [
      "X-Axis",
      "Y-Axis",
      "Hook Timing",
      "Encoder Principal",
      "Barra da Agulha",
      "Estica-Fio",
      "Volante Manual"
    ],
    "imageUrl": "/images/z001_eixo_z_arvore_v1.jpg?v=1",
    "imageCaption": "Anatomia do Eixo Z (Z-Axis): o eixo principal da árvore que coordena o sincronismo mecânico de 0° a 360° entre a barra de agulha, o estica-fio e a lançadeira rotativa.",
    "tags": [
      "zaxis",
      "eixoz",
      "mecanica",
      "sincronismo",
      "hardware",
      "manutencao",
      "lancadeira"
    ]
  },
  {
    "id": "zig-zag-stitch-ponto-zigue-zague",
    "code": "Z-002",
    "letter": "Z",
    "term": "Zig-Zag Stitch — Ponto Zigue-Zague (Ponto Alternado de Fixação, Contorno & Apliques)",
    "pronunciation": "zíg-zég stitxi — pon-tu zi-gui za-gui (ˈzɪɡ zæɡ stɪtʃ)",
    "level": "Iniciante 🟢",
    "category": "Tipos de Ponto",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês 'zigzag' (linha quebrada em ângulos alternados) introduzido na costura mecânica no final do século XIX pela alemã Dürkopp.",
    "summary": "Ponto alternado esquerda-direita de largura e comprimento ajustáveis, essencial para fixação de tecidos de aplique, bordas e estruturas elásticas.",
    "definition": "O Zig-Zag Stitch (Ponto Zigue-Zague / Ponto de Fixação Alternada / Alternating Tackdown Stitch / Appliqué Pre-Stitch) é um dos tipos fundamentais de pontos do bordado mecânico e computadorizado. Caracteriza-se pela penetração alternada da agulha de um lado para o outro de uma linha central, formando uma série contínua de traços triangulares ou angulares. Ao contrário do ponto satim (que possui densidade fechada), o ponto zigue-zague possui espaçamento aberto programado, permitindo prender camadas de tecido sem rigidez excessiva.",
    "technicalDetails": "Nos softwares de digitalização (CAD), o ponto zigue-zague é programado com dois parâmetros principais: **Largura (Width)**, que varia tipicamente de 1,5 mm a 4,0 mm, e **Espaçamento/Passo (Length/Spacing)**, com valores entre 1,5 mm e 3,0 mm. Na confecção de apliques (Appliqué), o zigue-zague atua como o ponto de fixação intermediário (Tackdown Stitch), prendendo o retalho recortado sobre a entretela antes que o ponto satim denso ou a costura de acabamento seja aplicada, evitando o desfiamento das bordas do tecido aplicado.",
    "beginnerExplanation": "É aquele pontinho divertido que vai costurando de um lado para o outro como se fosse um dente de serra! Ele é perfeito para prender tecidos de aplique na toalha ou na roupinha antes de passar o bordado final grosso por cima, garantindo que o tecido não escape nem desfie durante o trabalho!",
    "howItWorks": [
      "1. A máquina executa a marcação da área do aplique com ponto de percurso simples.",
      "2. O operador posiciona o retalho de tecido sobre a marcação.",
      "3. O software comanda a costura em ponto Zig-Zag ao redor de todo o contorno da peça.",
      "4. As passagens alternadas da agulha prendem as fibras do tecido na entretela com elasticidade e firmeza.",
      "5. O operador recorta o excesso de tecido rente às pontas externas do zigue-zague.",
      "6. A máquina entra com o cordão final em ponto satim largo, cobrindo 100% dos pontos de zigue-zague.",
      "7. O aplique fica plano, sem rugas e com acabamento resistente a dezenas de lavagens."
    ],
    "applications": [
      "Ponto de fixação (Tackdown) em apliques de feltro, tricoline, malha e tecidos sintéticos.",
      "Costuras de união flexíveis em tecidos com elasticidade (lycra e malhas).",
      "Efeitos decorativos rústicos de pesponto em barras de enxovais.",
      "Underlay aberto para estabilização de bases de preenchimento leves."
    ],
    "characteristics": [
      "Largura e densidade linear totalmente customizáveis no software.",
      "Alta flexibilidade mecânica que acompanha o estiramento natural do tecido.",
      "Consumo reduzido de linha em comparação com colunas de satim fechadas."
    ],
    "commonErrors": [
      "❌ Recortar o tecido de aplique por dentro do ponto zigue-zague, soltando o retalho antes do acabamento satim.",
      "❌ Programar o zigue-zague de fixação mais largo do que o cordão final de satim, deixando pontas de linha aparecendo para fora.",
      "❌ Usar densidade excessivamente apertada no zigue-zague intermediário, picotando e furando o tecido de aplique."
    ],
    "troubleshootingTips": [
      "O tecido do aplique está escapando nas pontas durante o bordado final: aumente a largura do ponto zigue-zague de 2,0 mm para 2,8 mm e reduza o espaçamento para 1,8 mm no software.",
      "As pontinhas do zigue-zague estão aparecendo por baixo do satim: configure o recuo (Pullback) da borda no software ou aumente a largura do satim final de cobertura em 0,5 mm.",
      "O tecido fino está enrugando na costura do zigue-zague: utilize entretela rasgável de gramatura adequada (duas folhas de 40 g/m²) ou afrouxe ligeiramente a tensão da linha superior."
    ],
    "dicaArtrelados": "Para fazer apliques perfeitos que não descolam nunca: programe sempre uma passagem de ponto zigue-zague antes do ponto cheio final! O zigue-zague 'doma' as bordinhas do tecido e deixa o corte com a tesoura de ponta curva muito mais seguro e fácil de fazer!",
    "voceSabia": "A primeira máquina de costura zigue-zague mecânica da história foi criada pela fabricante alemã Dürkopp em 1886 para confecção de fardas militares e abotoaduras na Europa!",
    "practicalExercise": "No seu programa de bordado, crie um círculo com contorno de Ponto Zigue-Zague com largura de 3,0 mm e espaçamento de 2,5 mm. Simule na tela e observe como ele cria uma fixação firme com metade da quantidade de pontos de um cordão satim tradicional.",
    "quickSummary": "Ponto mecânico alternado esquerda-direita de largura regulável, ideal para prender apliques e bordas com flexibilidade.",
    "relatedTerms": [
      "Aplique (Appliqué)",
      "Tackdown",
      "Ponto Satim",
      "Ponto de Percurso (Run Stitch)",
      "Underlay",
      "Tesoura de Aplique"
    ],
    "imageUrl": "/images/z002_zigzag_stitch_v2.jpg?v=1",
    "imageCaption": "Prancha Técnica do Ponto Zigue-Zague Computadorizado (Zig-Zag Stitch / Tackdown): formação coordenada pelo pantógrafo nos eixos X/Y, bastidor eletrônico de bordado com entalhes de alinhamento em cruz, calcador de bordado (hopping foot) em alta velocidade executando a fixação do aplique com tosa rente por tesoura pato/curva e Checagem em Verde da Faixa de Conformidade Ideal (largura 2,5 a 3,5 mm e passo 2,0 a 2,5 mm), sem requadros e sobre fundo branco contínuo.",
    "tags": [
      "zigzagstitch",
      "pontoziguezague",
      "tiposdeponto",
      "aplique",
      "tackdown",
      "costura",
      "software"
    ]
  },
  {
    "id": "zigzag-underlay-suporte-zigue-zague-matriz",
    "code": "Z-003",
    "letter": "Z",
    "term": "Zig-Zag Underlay — Ponto de Suporte em Zigue-Zague (Underlay Estrutural para Colunas Satim Médias e Largas)",
    "pronunciation": "zíg-zég ân-der-lei — pon-tu de su-por-te zi-gui za-gui (ˈzɪɡ zæɡ ˈʌndərleɪ)",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'underlay' (camada de base/fundação interna) combinado com o padrão geométrico zigue-zague de amortecimento mecânico.",
    "summary": "Camada de pontos internos em zigue-zague costurada antes do ponto de cobertura, criando volume, sustentação e impedindo que o ponto satim afunde no tecido.",
    "definition": "O Zig-Zag Underlay (Suporte em Zigue-Zague / Fundação em Zigue-Zague / Subponto Estrutural para Satim / Internal Zig-Zag Base) é um tipo especializado de ponto de suporte gerado automaticamente pelos softwares de digitalização de bordado. Costurado no interior das colunas de ponto cheio (Satim) com largura entre 2,5 mm e 7,0 mm, ele consiste em um zigue-zague aberto posicionado com recuo de segurança das bordas externas, funcionando como uma 'viga de sustentação' tridimensional.",
    "technicalDetails": "O Zig-Zag Underlay combina os benefícios da ancoragem do tecido com o efeito de elevação vertical (Loft Effect). Ele é programado com espaçamento típico entre 1,5 mm e 3,0 mm e um recuo de borda (Margin/Pullback) de 0,4 mm a 0,8 mm para garantir que nenhuma ponta da linha interna escape por baixo da cobertura final de satim. Quando associado a um suporte perimetral de borda (Edge Run Underlay), ele forma uma estrutura compósita indeformável, indispensável para toalhas aveludadas, malhas e tecidos fofos.",
    "beginnerExplanation": "É como se fosse a fundação de cimento de uma casa, só que feita com linha por baixo do bordado! Antes da máquina fazer o ponto cheio brilhante que todo mundo vê, ela borda um zigue-zague aberto por baixo. Isso faz o bordado ficar fofinho, em alto relevo e não deixa a linha afundar no meio dos pelinhos da toalha!",
    "howItWorks": [
      "1. O programador cria uma coluna de ponto satim com largura de 4,0 mm no software CAD.",
      "2. Ativa a opção de Suporte em Zigue-Zague (Zig-Zag Underlay) nas propriedades do objeto.",
      "3. O software gera a costura interna com espaçamento de 2,0 mm e recuo de borda de 0,5 mm.",
      "4. Na máquina, o cabeçote borda primeiro o zigue-zague prendendo as fibras do tecido e a entretela.",
      "5. A linha de base cria uma elevação de 0,2 mm sobre a superfície têxtil.",
      "6. A máquina borda o ponto satim final por cima com ângulo cruzado em relação ao zigue-zague.",
      "7. O acabamento fica brilhante, nítido e com relevo nobre e volumoso."
    ],
    "applications": [
      "Letras e monogramas em ponto satim com largura superior a 3,0 mm.",
      "Bordados em toalhas de banho felpudas, tecidos atoalhados e moletons.",
      "Bordado de brasões e emblemas com efeito de relevo suave.",
      "Prevenção de afundamento de pontos em tecidos de malha piquet de camisas polo."
    ],
    "characteristics": [
      "Gera volume tridimensional sem necessidade de EVA emborrachado.",
      "Impede o encolhimento e repuxo da largura das colunas de satim.",
      "Recuo de borda automático para ocultação total da linha de base."
    ],
    "commonErrors": [
      "❌ Usar Zig-Zag Underlay em letras microscópicas menores que 2 mm, amontoando linhas e furando o tecido.",
      "❌ Esquecer de configurar o recuo de margem (Pullback), fazendo as pontinhas do zigue-zague vazarem para fora do satim.",
      "❌ Desativar o underlay para 'economizar pontos', resultando em bordados ralos e afundados."
    ],
    "troubleshootingTips": [
      "As pontinhas do zigue-zague interno estão aparecendo na lateral da letra: aumente a margem de recuo do underlay para 0,6 mm no software de matrizes.",
      "A coluna de satim em toalha felpuda ficou rala com pelinhos escapando: ative o Zig-Zag Underlay combinado com filme plástico hidrossolúvel colocado por cima da toalha.",
      "O bordado ficou excessivamente duro como uma tábua: aumente o espaçamento do Zig-Zag Underlay de 1,5 mm para 2,8 mm para deixar a fundação mais flexível."
    ],
    "dicaArtrelados": "Para letras grandes e encorpadas em toalhas de banho e enxovais: use sempre a combinação campeã do ateliê Artrelados — um contorno interno (Edge Run) com um recheio em Zig-Zag Underlay por baixo e plástico hidrossolúvel por cima! Suas letras vão parecer esculpidas em relevo de luxo!",
    "voceSabia": "O uso de pontos cruzados inferiores para dar relevo ao bordado é uma técnica que remonta aos bordados litúrgicos em ouro da Idade Média, onde mestres artesãos costuravam fios de cânhamo por baixo antes de aplicar os fios de ouro batido!",
    "practicalExercise": "No seu software de digitalização, desenhe uma letra 'M' em ponto satim com largura de 5 mm. Teste duas opções de suporte: apenas ponto central (Center Run) e suporte em Zig-Zag com recuo de 0,5 mm. Compare em 3D como a fundação em zigue-zague encorpa a estrutura da letra.",
    "quickSummary": "Ponto de suporte interno em zigue-zague que atua como fundação estrutural sob colunas satim, garantindo relevo e impedindo afundamentos.",
    "relatedTerms": [
      "Underlay",
      "Ponto Satim",
      "Ponto de Suporte",
      "Edge Run",
      "Plástico Hidrossolúvel",
      "Densidade",
      "Wilcom"
    ],
    "imageUrl": "/images/z003_masterpiece_davinci.jpg?v=5",
    "imageCaption": "Prancha Técnica Oficial do Ponto de Suporte em Zigue-Zague (Receita Artrelados): corte tridimensional em camadas revelando a entretela, a felpa da toalha domada pela base e pelo filme hidrossolúvel, e a coluna de ponto cheio em relevo nobre (loft); à direita, vista da coluna no software com os dois trilhos retos laterais, o zigue-zague aberto de sustentação com recuo de segurança (0,5 mm) e Checagem em Verde da Receita Artrelados, com tipografia digital de alta definição 100% em português sobre fundo branco puro sem requadros.",
    "tags": [
      "zigzagunderlay",
      "subponto",
      "underlay",
      "suporte",
      "satim",
      "programacao",
      "wilcom"
    ]
  },
  {
    "id": "z-twist-torcao-z-fios-rotacao-direita",
    "code": "Z-004",
    "letter": "Z",
    "term": "Z-Twist — Torção Z (Linhas com Fiação Helicoidal à Direita & Estabilidade Rotacional)",
    "pronunciation": "zii-tuist — tor-são zê (ˈziː twɪst)",
    "level": "Avançado 🔴",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Da convenção internacional têxtil (norma ISO 2) onde a inclinação das fibras helicoidais do fio acompanha o traço diagonal central da letra 'Z' (torção à direita / sentido horário).",
    "summary": "Sentido de torção helicoidal das linhas de bordar que impede que o fio se destorça ou desfie durante o atrito contínuo com a lançadeira rotativa.",
    "definition": "O Z-Twist (Torção Z / Torção à Direita / Right-Hand Twist / Directional Thread Spinning) é o padrão geométrico e mecânico universal de fiação adotado na fabricação de linhas de bordar computadorizado de alta performance. Caracteriza-se pela torção helicoidal dos filamentos de poliéster ou viscose no sentido da diagonal da letra 'Z'. Esse sentido é cientificamente exigido para compatibilidade com o sentido de rotação da lançadeira (Hook) das máquinas de bordar, que gira em sentido horário; a rotação da máquina mantém a torção da linha fechada, enquanto fios com torção contrária (S-Twist) se abririam e quebrariam instantaneamente.",
    "technicalDetails": "Quando a lançadeira rotativa de uma máquina de bordar gira a 1.000 RPM, a ponta metálica do bico da lançadeira penetra na laçada da agulha e aplica um torque de rotação mecânica sobre o fio. Em uma linha com Z-Twist, o atrito da lançadeira aperta e consolida a torção dos cabos (Tightening effect). Se fosse utilizada uma linha com S-Twist (frequente em linhas manuais de tricô e crochê), a lançadeira destorceria os filamentos (Untwisting), abrindo os cabos individuais em forma de leque, o que causaria quebra imediata de linha por esgarçamento e perda de laçadas a cada descida da agulha.",
    "beginnerExplanation": "É o jeito que o fio da linha foi enrolado na fábrica! As linhas de bordado de máquina são torcidas no formato da letra 'Z' para que a máquina possa costurar super rápido sem que o fio se desenrole ou vire uma 'vassourinha' na ponta da agulha. Por isso, nunca devemos usar linha de crochê ou de bordar à mão na máquina de bordar!",
    "howItWorks": [
      "1. Na fiação industrial, os filamentos paralelos de poliéster são torcidos no sentido horário (Z-Twist).",
      "2. Dois ou três cabos Z são retorcidos juntos com equilíbrio torsional perfeito (Zero Torque Balance).",
      "3. O cone é posicionado na máquina de bordar e a linha passa pelos guias e tensores.",
      "4. A linha desce pelo canalete da agulha e forma a laçada sob a chapa de ponto.",
      "5. A lançadeira rotativa gira no sentido horário e captura a laçada.",
      "6. A força de fricção da lançadeira age a favor da torção Z, mantendo o fio compacto, liso e resistente.",
      "7. A máquina borda em velocidade máxima sem desfiamento ou quebras por destorção."
    ],
    "characteristics": [
      "Sentido helicoidal à direita conforme norma internacional ISO 2.",
      "Alta estabilidade torsional sob rotação horária de lançadeiras industriais.",
      "Superfície compacta e lisa com mínimo atrito no olho da agulha."
    ],
    "applications": [
      "Todas as linhas industriais superiores de bordado (poliéster 40 wt, viscose, metálicas).",
      "Linhas de bobina contínua de filamento de poliéster (Bobbin Thread 60 wt).",
      "Bordados em altíssima velocidade em máquinas automáticas (acima de 1.000 PPM).",
      "Costuras de alta solicitação mecânica em calçados, bolsas e couro."
    ],
    "commonErrors": [
      "❌ Tentar usar meadas manuais de ponto cruz ou linhas de crochê (com torção S) na máquina de bordar, quebrando o fio a cada 3 pontos.",
      "❌ Passar a linha pelos tensores torcendo o fio no sentido contrário por guias montados de forma invertida.",
      "❌ Desenrolar a linha puxando pelo lado do cone em vez de puxar pela ponta superior, introduzindo torções parasitas no fio."
    ],
    "troubleshootingTips": [
      "A linha começa a abrir em vários fiozinhos finos e arrebenta antes da agulha: a linha está sofrendo destorção por guia de passagem incorreto ou o cone está tombado na bandeja; use o suporte de cone vertical e coloque rede de linha (Thread Net).",
      "A linha fica fazendo espirais e laços antes de entrar no tensor superior: a linha acumulou torção estática; passe o fio por um guia de feltro lubrificado com uma gota de silicone têxtil.",
      "A máquina pula pontos ao usar linha artesanal de algodão: verifique se a linha possui especificação Z-Twist própria para máquina de bordar."
    ],
    "dicaArtrelados": "Puxe sempre a linha de bordar saindo reto para cima pela ponta do cone, exatamente como manda o suporte da máquina! Se a linha sair de lado ou o cone ficar tombado, ela ganha voltas extras de torção a cada volta do carretel e pode embolar no estica-fio!",
    "voceSabia": "Na indústria têxtil global, mais de 98% de todas as linhas de costura e bordado de máquina do mundo são obrigatoriamente fabricadas com Z-Twist, enquanto o S-Twist é reservado quase que exclusivamente para bordados manuais, tricô e cordas náuticas!",
    "practicalExercise": "Pegue um pedaço de 15 cm de linha de bordar. Segure as duas pontas na vertical sob boa luz e olhe a inclinação dos filamentos torcidos: observe como as linhas diagonais sobem da esquerda para a direita, acompanhando exatamente a inclinação do traço central da letra 'Z'.",
    "quickSummary": "Padrão de fiação helicoidal à direita das linhas de bordar que garante estabilidade e impede desfiamentos na lançadeira rotativa.",
    "relatedTerms": [
      "Yarn",
      "Lançadeira Rotativa",
      "Filamento Contínuo",
      "Torção S",
      "Linhas de Bordar",
      "Poliéster Trilobal",
      "Hook Timing"
    ],
    "tags": [
      "ztwist",
      "torcaoz",
      "linhas",
      "fiacao",
      "morfologia",
      "poliester",
      "lancadeira"
    ]
  },
  {
    "id": "zero-point-ponto-zero-origem-bastidor",
    "code": "Z-005",
    "letter": "Z",
    "term": "Zero Point — Ponto Zero (Origem Absoluta do Bastidor, Home Position & Start Point)",
    "pronunciation": "zí-rou póint — pon-tu zê-ru (ˈzɪroʊ pɔɪnt)",
    "level": "Iniciante 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do conceito matemático de origem das coordenadas cartesianas (0,0) introduzido na programação numérica CNC e no padrão industrial Tajima de bordado.",
    "summary": "Coordenada central absoluta (X=0, Y=0) do bastidor que serve como referência de partida, centralização e retorno obrigatório da matriz de bordado.",
    "definition": "O Zero Point (Ponto Zero / Origem do Bastidor / Ponto de Início e Fim / Home Position / Coordinate Origin 0,0) é a coordenada espacial cartesiana de referência absoluta calibrada no firmware da máquina de bordar e nos softwares de digitalização. Localizado por convenção universal no centro geométrico exato da área útil do bastidor, o Ponto Zero é o local de onde todos os vetores de deslocamento (dX, dY) são calculados e para onde o pantógrafo retorna automaticamente ao concluir a execução da matriz.",
    "technicalDetails": "Nos arquivos padrão da indústria (como .DST, .PES, .EXP, .JEF e .EMB), uma matriz profissionalmente digitalizada deve obrigatoriamente ter seu Start Point (ponto inicial) e seu End Point (ponto final) coincidindo exatamente com o Zero Point (0,0). Essa padronização permite que o operador centralize o bastidor no tecido, inicie a produção e, se houver necessidade de interrupção ou troca de linha, o pantógrafo retorne com precisão de zero micrômetros à mesma coordenada de origem sem perder o esquadro.",
    "beginnerExplanation": "É o ponto bem no meinho do bastidor onde tudo começa e onde tudo termina! Quando você coloca o desenho na máquina e aperta o botão de centralizar, a máquina leva a agulha direto para esse 'Ponto Zero'. É a garantia de que o bordado vai sair bem centralizado no lugar que você marcou na roupa!",
    "howItWorks": [
      "1. Ao ligar a máquina, o pantógrafo se calibra nos sensores e estabelece o Zero Point no centro da área útil.",
      "2. O operador carrega a matriz de bordado no painel da máquina.",
      "3. O sistema calcula a distância máxima de todos os pontos a partir do Zero Point (Bounding Box).",
      "4. O operador alinha o apontador laser da máquina exatamente sobre a marcação central do tecido.",
      "5. A máquina inicia o bordado a partir do Zero Point e desloca o bastidor ponto a ponto.",
      "6. Ao finalizar o último ponto de travamento e cortar a linha, o pantógrafo retorna automaticamente ao Zero Point.",
      "7. O bastidor se abre para frente facilitando a retirada da peça concluída."
    ],
    "characteristics": [
      "Coordenada central (0,0) universal em todos os softwares CAD.",
      "Referência matemática para cálculo de limites de bastidor (Hoop Limits).",
      "Garantia de repetibilidade em produções seriadas de uniformes."
    ],
    "applications": [
      "Centralização de monogramas em bolsos, camisetas e fardamentos.",
      "Retomada precisa de bordados interrompidos por falta de energia elétrica.",
      "Alinhamento de matrizes grandes divididas em múltiplos bastidores (Multi-Hooping).",
      "Calibração mecânica de fim de curso e sensores de pantógrafo."
    ],
    "commonErrors": [
      "❌ Salvar a matriz com o ponto final longe do centro, fazendo o pantógrafo parar no canto do bastidor e puxar a linha.",
      "❌ Iniciar o bordado sem conferir se o Ponto Zero no painel da máquina está alinhado com a cruz desenhada no tecido.",
      "❌ Deslocar o bastidor com a mão após a centralização, descalibrando o Ponto Zero do motor."
    ],
    "troubleshootingTips": [
      "A máquina deu erro 'Design Out of Hoop' ao carregar a matriz: a matriz está fora do Ponto Zero no software; abra o arquivo, use a ferramenta 'Center to Origin (0,0)' e salve novamente.",
      "O bordado terminou e o bastidor não voltou para o meio: ative a opção 'Auto Return to Origin' nas configurações de corte e finalização do software de matrizes.",
      "O laser da máquina não aponta para o centro da grade plástica: recalibre a posição de origem no menu de configurações do bastidor no painel da máquina."
    ],
    "dicaArtrelados": "Regra de ouro de todo programador de matriz de sucesso: antes de salvar qualquer matriz no seu computador para enviar ao cliente ou para a máquina, use sempre o atalho de centralização automática (Center Design). Uma matriz que começa e termina no Ponto Zero (0,0) evita 100% dos erros de colisão no bastidor!",
    "voceSabia": "O sistema de coordenadas cartesianas com Ponto Zero (0,0) foi concebido pelo filósofo e matemático francês René Descartes em 1637 quando observava o voo de uma mosca no teto de seu quarto e percebeu que podia descrever a posição exata dela medindo a distância até as duas paredes perpendiculares!",
    "practicalExercise": "Abra qualquer matriz no seu software. Observe o ponto em cruz que marca a origem. Selecione a matriz inteira, arraste para o canto e aperte a tecla de atalho de centralizar (ou digite X=0 e Y=0 na barra de propriedades): observe como o desenho pula exatamente para o centro perfeito do bastidor.",
    "quickSummary": "Ponto de referência cartesiano central (0,0) do bastidor de onde se calculam as coordenadas e para onde a máquina retorna ao finalizar.",
    "relatedTerms": [
      "X-Axis",
      "Y-Axis",
      "Start/End Point",
      "Home Position",
      "Hoop Limits",
      "Centralização",
      "Laser Pointer"
    ],
    "tags": [
      "zeropoint",
      "pontozero",
      "origem",
      "coordenadas",
      "bastidor",
      "operacao",
      "software"
    ]
  },
  {
    "id": "z-axis-timing-tempo-sincronismo-lancadeira",
    "code": "Z-006",
    "letter": "Z",
    "term": "Z-Axis Timing — Tempo de Sincronismo da Lançadeira (Hook Timing & Needle Clearance)",
    "pronunciation": "zii-ék-sis tái-ming — tem-pu de sin-cro-nis-mu da lan-sa-dei-ra",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'timing' (ajuste cronométrico e angular de precisão entre componentes rotativos e alternativos de alta velocidade).",
    "summary": "Calibração micrométrica do instante exato em que a ponta da lançadeira passa pelo chanfro da agulha para capturar a laçada de linha sem bater nem falhar pontos.",
    "definition": "O Z-Axis Timing (Sincronismo da Lançadeira Rotativa / Hook Timing / Ponto de Laçada / Needle-to-Hook Synchronization) é a regulagem mecânica mais crítica de uma máquina de bordar industrial ou doméstica. Define a relação angular entre a descida e subida da barra de agulha (eixo Z) e o giro contínuo do bico da lançadeira (Rotary Hook Point) no momento em que a agulha atinge o ponto morto inferior (BDC - Bottom Dead Center) e sobe exatamente entre 1,8 mm e 2,2 mm para abrir o laço de linha.",
    "technicalDetails": "No momento do encontro entre a agulha e a lançadeira (típico entre 195° e 205° do encoder do eixo Z), três grandezas micrométricas devem ser rigorosamente atendidas: 1) **Altura da Barra da Agulha**: o bico da lançadeira deve passar cerca de 0,5 mm a 1,0 mm acima da borda superior do olho da agulha; 2) **Folga Lateral (Hook-to-Needle Clearance)**: a distância entre o bico da lançadeira e o fundo do chanfro (Scarf) da agulha deve ser de apenas **0,05 mm a 0,10 mm** (a espessura de uma folha de papel fino de 75g/m²); 3) **Sincronismo de Subida**: a lançadeira deve cruzar a linha de centro da agulha exatamente quando a agulha sobe 2,0 mm após o ponto mais baixo.",
    "beginnerExplanation": "É o casamento mecânico perfeito entre a agulha e a lançadeira lá dentro da máquina! A agulha desce com a linha de cima, dá uma subidinha de nada para fazer uma 'barriguinha' (o laço) e o bico da lançadeira passa correndo pertinho dela — a uma distância fininha como uma folha de papel — para pegar a linha e amarrar com a linha de baixo. Se essa regulagem estiver atrasada ou adiantada, a máquina pula pontos ou quebra a agulha!",
    "howItWorks": [
      "1. O técnico remove a chapa de ponto e a caixa de bobina para expor a lançadeira.",
      "2. Gira o volante manual no eixo Z até a barra de agulha descer ao ponto mais baixo (Lowest Point / 180°).",
      "3. Continua girando suavemente até a barra subir exatamente 2,0 mm (marcado no calibre de sincronismo ou a 200° no painel).",
      "4. Verifica se a ponta da lançadeira está alinhada perfeitamente com a linha de centro da haste da agulha.",
      "5. Ajusta a folga lateral usando um calibre de lâmina de 0,05 mm entre o bico da lançadeira e o chanfro.",
      "6. Aperta firmemente os três parafusos de fixação da engrenagem da lançadeira.",
      "7. Testa em velocidade máxima: a máquina borda liso sem falhar nenhum ponto."
    ],
    "characteristics": [
      "Tolerância dimensional micrométrica de 0,05 mm a 0,10 mm.",
      "Sincronismo angular calibrado entre 195° e 205° do ciclo do eixo Z.",
      "Eliminação definitiva de quebras de agulha e pontos pulados (Skipped Stitches)."
    ],
    "applications": [
      "Manutenção preventiva periódica em máquinas industriais monocabeçotes e multicabeçotes.",
      "Recalibração após batida violenta de bastidor ou quebra catastrófica de agulha.",
      "Ajuste para bordar materiais ultra pesados (bonés estruturados, couro e lonas).",
      "Diagnóstico avançado de ateliês de alta produtividade."
    ],
    "commonErrors": [
      "❌ Apertar os parafusos da lançadeira com a folga colada na agulha, fazendo a lançadeira bater no metal e cegar a ponta do bico.",
      "❌ Regular a altura da agulha com a agulha torta ou não encaixada até o topo do parafuso prendedor.",
      "❌ Tentar mexer na lançadeira sem afrouxar os parafusos de fixação corretos do eixo inferior."
    ],
    "troubleshootingTips": [
      "A máquina pula pontos em todas as cores mesmo com agulha nova e linha de boa marca: o tempo de lançadeira (Hook Timing) está atrasado ou a folga lateral aumentou; chame o técnico para recalibrar o sincronismo com calibre de folga.",
      "Ouve-se um estalo metálico seco a cada agulhada e a agulha quebra na ponta: a lançadeira está batendo na agulha por falta de folga (menor que 0,05 mm); afaste a lançadeira ligeiramente.",
      "A linha arrebenta desfiada e cheia de rebarbas: o bico da lançadeira foi arranhado por uma agulha antiga que bateu nele; faça o polimento do bico da lançadeira com lixa d'água 1.200 e pasta diamantada de polimento."
    ],
    "dicaArtrelados": "Se você ouvir a agulha bater forte e quebrar no meio de um bordado de boné ou toalha grossa, pare a máquina imediatamente! Troque a agulha e passe a unha delicadamente no bico da lançadeira: se sentir qualquer arranhãozinho ou 'rebarba' que espete seu dedo, passe um polidor suave para não estragar as próximas linhas!",
    "voceSabia": "A invenção da lançadeira rotativa de giro contínuo (Rotary Hook) em 1851 por Allen B. Wilson foi o maior salto tecnológico da história da costura mecânica, permitindo que a velocidade saltasse de 200 pontos por minuto para mais de 1.500 PPM!",
    "practicalExercise": "Com a máquina desligada e chapa de ponto retirada, coloque uma agulha nova 75/11. Gire o volante na mão devagar e ilumine com uma lanterna o ponto onde o bico da lançadeira passa por trás da agulha: observe como ele passa exatamente dentro da cavidade do chanfro (Scarf) sem encostar no metal.",
    "quickSummary": "Calibração milimétrica da distância e do tempo em que a lançadeira captura a laçada da agulha para costurar sem falhas nem quebras.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Chanfro da Agulha (Scarf)",
      "Hook Timing",
      "Skipped Stitches",
      "Chapa de Ponto",
      "Barra da Agulha"
    ],
    "tags": [
      "zaxistiming",
      "hooktiming",
      "lancadeira",
      "sincronismo",
      "mecanica",
      "manutencao",
      "hardware"
    ]
  },
  {
    "id": "zero-tension-threading-passagem-tensao-zero-linhas-metalicas",
    "code": "Z-007",
    "letter": "Z",
    "term": "Zero-Tension Threading & Metallic Delivery — Passagem de Linha com Baixo Atrito & Tensão Mínima para Fios Metálicos",
    "pronunciation": "zí-rou tên-shon thré-ding — pas-sa-jem de ten-são zê-ru pa-ra li-nhas me-tá-li-cas",
    "level": "Intermediário 🟡",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do conceito de engenharia têxtil de coeficiente de atrito dinâmico estático nulo para filamentos metalizados de poliéster e poliamida.",
    "summary": "Configuração especial do circuito de linha superior onde os discos tensores são aliviados para o nível mínimo para permitir que fios metálicos e delicados corram sem quebras.",
    "definition": "O Zero-Tension Threading (Passagem de Tensão Mínima / Circuito de Baixo Atrito / Low-Friction Metallic Thread Routing) é a técnica operacional e de regulagem mecânica aplicada à passagem da linha superior quando se utilizam fios metalizados (ouro, prata, cobre), fios holográficos ou linhas de poliéster ultrafinas (60 wt). Como a fita metalizada externa possui alta memória plástica e fragilidade ao atrito, a tensão dos discos tensores é reduzida ao menor nível funcional possível (típico de 70 a 90 gramas-força em vez dos habituais 110 a 130 gf de linhas comuns de poliéster).",
    "technicalDetails": "Linhas metálicas sofrem do fenômeno de 'Kinking' (formação de nós e laçadas em espiral por torção residual) e aquecimento térmico extremo ao passar por ilhoses e pratos tensores sob alta velocidade. A técnica de Zero-Tension Threading envolve: 1) afrouxamento progressivo dos tensores de disco superior; 2) utilização de suporte de cone externo afastado em pelo menos 1 metro da máquina para permitir o desenrolar natural do fio; 3) aplicação de rede elástica tubular (Thread Net) para amortecer a saída do cone; e 4) passagem do fio por uma almofada de feltro impregnada com uma microgota de óleo de silicone têxtil.",
    "beginnerExplanation": "É o jeito especial de regular a máquina quando você vai usar aquela linda linha metálica dourada ou prateada! Como a linha metálica é delicada e pode arrebentar fácil se for puxada com força, nós afrouxamos bastante os botões de tensão da máquina, colocamos uma redinha no cone e deixamos a linha correr soltinha e suave como seda!",
    "howItWorks": [
      "1. A bordadeira coloca a redinha elástica (Thread Net) sobre o cone de linha dourada metálica.",
      "2. Posiciona o cone preferencialmente em um suporte alto ou afastado da máquina.",
      "3. Passa a linha pelos guias e reduz a pressão do botão de tensão superior em cerca de 2 a 3 voltas.",
      "4. Troca a agulha da máquina por uma agulha especial Metallic 80/12 (com olho largo e polido).",
      "5. Reduz a velocidade da máquina no painel para 500 a 650 PPM.",
      "6. Inicia o bordado: a linha desliza pelos tensores com atrito quase nulo sem formar laços ou nós.",
      "7. O bordado metálico brilha intensamente na peça com pontos impecáveis e sem nenhuma quebra de fio."
    ],
    "characteristics": [
      "Pressão do circuito de tensão superior reduzida para cerca de 70 a 90 gramas-força.",
      "Compatibilidade com agulhas de olho largo para fios metálicos (Metallic Needle).",
      "Uso de rede tubular para controle de desenrolamento anti-kinking."
    ],
    "applications": [
      "Bordados em fios metalizados dourados, prateados e cobreados de alta sofisticação.",
      "Bordado de brasões eclesiásticos, fardamentos militares e vestidos de noiva.",
      "Costura com fios fotoluminescentes e filamentos de alta fragilidade mecânica.",
      "Trabalhos delicados em veludo, cetim e sedas puras."
    ],
    "commonErrors": [
      "❌ Deixar a tensão apertada no mesmo nível da linha comum de poliéster, arrebentando a linha metálica a cada 10 segundos.",
      "❌ Usar agulha comum 75/11 em linha metálica, esmagando e raspando o filme dourado no olho estreito da agulha.",
      "❌ Borda linha metálica na velocidade máxima de 1.000 PPM, superaquecendo a agulha e derretendo o fio sintético."
    ],
    "troubleshootingTips": [
      "A linha dourada está desfiando e acumulando uma 'bolinha' de metal no olho da agulha: troque para uma agulha especial Schmetz Metallic 80/12 ou 90/14 e afrouxe o tensor superior.",
      "A linha metálica pula do cone e enrosca no pino do porta-cones: envolva o cone com uma rede elástica (Thread Net) deixando a borda superior livre.",
      "A agulha quebra a linha metálica sempre que faz pontos pequenos: no software de matrizes, remova pontos com menos de 1,5 mm de comprimento ao programar para fios metálicos."
    ],
    "dicaArtrelados": "O segredo do ateliê Artrelados para bordar com linha dourada metálica sem quebrar NUNCA: coloque o cone de linha dentro de uma caneca no chão ou use um suporte externo afastado da máquina, use agulha Metallic 80/12, reduza a velocidade para 500 PPM e deixe a tensão da linha quase no zero. Você vai bordar minutos a fio sem nenhuma quebra!",
    "voceSabia": "Os fios metálicos originais da antiguidade eram feitos de lâminas de ouro puro batidas à mão até a espessura de uma folha de papel e enroladas ao redor de fios de seda; hoje em dia, as linhas metálicas utilizam películas de poliéster metalizado com espessura de apenas 12 micrômetros!",
    "practicalExercise": "Coloque um cone de linha metálica na sua máquina. Afrouxe o botão da tensão superior para o número mais baixo e puxe a linha com a mão: sinta como a linha desliza suavemente sem nenhum tranco. Faça um teste bordando uma estrela a 500 PPM com agulha Metallic 80/12.",
    "quickSummary": "Configuração de passagem livre e atrito quase nulo para bordar com linhas metálicas e fios delicados sem quebras.",
    "relatedTerms": [
      "Linha Metálica",
      "Tensão Superior",
      "Agulha Metallic",
      "Thread Net",
      "Silicone Líquido",
      "Velocidade (PPM)"
    ],
    "tags": [
      "zerotension",
      "tensaozero",
      "linhasmetalicas",
      "ouro",
      "prata",
      "operacao",
      "regulagem"
    ]
  },
  {
    "id": "zero-jump-salto-zero-ponto-nulo-matriz",
    "code": "Z-008",
    "letter": "Z",
    "term": "Zero Jump — Salto Zero (Comando de Ponto Nulo, Deslocamento Zero & Ancoragem em Matrizes)",
    "pronunciation": "zí-rou djam-p — sal-tu zê-ru (ˈzɪroʊ dʒʌmp)",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da especificação binária de comandos de matrizes CNC/Tajima (.DST) onde um registro de salto é gravado com incremento vetorial zero (dX=0, dY=0).",
    "summary": "Instrução técnica de matriz onde o bastidor não se move (dX=0, dY=0), utilizada para executar cortes automáticos, ancoragens e alinhamentos de laser.",
    "definition": "O Zero Jump (Salto Zero / Ponto Nulo de Deslocamento / Null Jump Stitch / Zero-Delta Command) é um comando binário especializado inserido na cadeia de instruções de um arquivo de bordado no qual o código de salto (Jump Code) é acompanhado de valores delta nulos nos eixos cartesianos (dX = 0 e dY = 0). Esse comando é utilizado pela controladora da máquina para engatilhar funções secundárias sem movimentar o tecido: acionamento do solenoide do cortador de linha (Trimmer Sequence), disparo de pulsos de parada para colocação de aplique (Stop/Appliqué Command) e execução de múltiplos golpes de agulha no mesmo ponto para ancoragens cegas.",
    "technicalDetails": "No protocolo Tajima .DST, um comando de corte de linha automático convencional é codificado por uma sequência encadeada de 3 a 5 comandos 'Zero Jump' consecutivos seguidos por um ponto normal. A placa eletrônica da máquina detecta essa sequência de saltos sem movimento do pantógrafo e sabe que não se trata de uma viagem espacial do bastidor, mas sim da ordem para que o motor da faca de corte engate sob a chapa de ponto e realize a tosa da linha superior e da bobina.",
    "beginnerExplanation": "É um comando invisível dentro do arquivo da matriz que diz para a máquina: 'Fique parada no mesmo lugarzinho sem mexer o bastidor e faça o corte da linha!' É assim que o computador do bordado sabe a hora exata de cortar a linha e trocar de cor sem errar o lugar do desenho.",
    "howItWorks": [
      "1. O software CAD finaliza um elemento de bordado e precisa cortar a linha para iniciar o próximo.",
      "2. O processador do software insere uma sequência de comandos Zero Jump (dX=0, dY=0) no arquivo.",
      "3. A máquina lê a matriz e chega no bloco de Zero Jump.",
      "4. O pantógrafo permanece rigorosamente estático na coordenada atual.",
      "5. O comando ativa o mecanismo do cortador automático (Trimmer) abaixo da chapa de ponto.",
      "6. A linha é cortada rente, o limpador de fio (Wiper) recolhe a ponta superior e a máquina salta para o próximo bloco.",
      "7. O processo ocorre em frações de segundo sem deixar nós ou puxões de tecido."
    ],
    "characteristics": [
      "Incremento relativo nulo (dX=0, dY=0) na coordenada cartesiana.",
      "Uso universal na emulação de cortes de linha em formatos binários industriais.",
      "Sincronização de comandos de parada e troca de cor (Color Change)."
    ],
    "applications": [
      "Emulação de comandos de corte de linha automático em arquivos .DST e .EXP.",
      "Programação de pontos de parada para montagem de apliques (Appliqué Stop).",
      "Ancoragem concentrada de início de costura em materiais duros (couro e lona).",
      "Marcação de pontos de referência para leitura de miras a laser."
    ],
    "commonErrors": [
      "❌ Inserir sequências de Zero Jump com a função de corte desativada no painel, fazendo a máquina bater 5 agulhadas no mesmo buraco e furar o tecido.",
      "❌ Deletar comandos de salto nulo na edição manual de pontos, fazendo a máquina costurar uma linha direta entre dois desenhos sem cortar.",
      "❌ Não configurar a quantidade correta de saltos para corte no menu da máquina industrial."
    ],
    "troubleshootingTips": [
      "A máquina não corta a linha entre as letras em arquivos .DST: verifique nas configurações do painel da máquina se a detecção de cortes está configurada para '3 Jumps' para reconhecer os comandos de Zero Jump da matriz.",
      "A agulha está furando o mesmo buraco várias vezes no final do texto: remova os saltos nulos duplicados no editor de lista de pontos (Stitch List) do seu software.",
      "A matriz perdeu os cortes ao ser convertida de .PES para .DST: certifique-se de ativar a opção 'Export Jumps for Trimming' no software de conversão."
    ],
    "dicaArtrelados": "Ao converter arquivos para máquinas industriais que leem formato .DST: verifique sempre se a sua matriz está configurada para gerar de 3 a 4 saltos automáticos nos cortes de linha. Essa é a 'senha mágica' para a máquina cortar todas as linhazinhas perfeitamente sem deixar nenhum fio para você ter que limpar na tesoura depois!",
    "voceSabia": "O formato .DST (desenvolvido pela Tajima em 1980) não tinha um comando nativo de corte de linha no seu código original; os engenheiros japoneses inventaram o truque de usar três comandos de 'Zero Jump' seguidos para avisar a máquina que era hora de cortar a linha sem precisar mudar o formato do arquivo!",
    "practicalExercise": "Abra uma matriz no seu software de edição e acesse a 'Lista de Eventos de Ponto' (Stitch List). Role até uma troca de cor e localize os pontos com valor X=0,0 e Y=0,0 marcados como 'Jump'. Observe como eles comandam a tesoura automática da máquina.",
    "quickSummary": "Instrução de matriz com movimento vetorial zero (0,0) usada para acionar comandos de corte automático e ancoragens.",
    "relatedTerms": [
      "DST Format",
      "Jump Stitch",
      "Trimmer",
      "Lista de Pontos",
      "Troca de Cor",
      "Appliqué Stop",
      "Tajima"
    ],
    "tags": [
      "zerojump",
      "saltozero",
      "dst",
      "cortador",
      "trimmer",
      "software",
      "programacao"
    ]
  },
  {
    "id": "zinc-coated-needles-agulhas-zinco-antiaderente",
    "code": "Z-009",
    "letter": "Z",
    "term": "Zinc-Coated & Anti-Adhesive Needles — Agulhas com Revestimento de Zinco & Antiaderentes (Super Non-Stick)",
    "pronunciation": "zink-kôu-ted níi-dlz — a-gu-lhas de zin-ku an-ti-a-de-ren-tes (ˈzɪŋk ˌkoʊtɪd ˈniːdəlz)",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Acessórios",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do elemento químico metálico zinco (do alemão 'Zink') e tratamentos metalúrgicos galvânicos de nitreto de zinco e fluoropolímeros antiaderentes para agulhas industriais de precisão.",
    "summary": "Agulhas de bordado tratadas com banho galvânico de zinco e revestimento antiaderente que impedem o acúmulo de resíduos de cola spray e entretelas termocolantes.",
    "definition": "As Zinc-Coated & Anti-Adhesive Needles (Agulhas com Revestimento de Zinco e Cromo Antiaderente / Agulhas Super Non-Stick / Anti-Glue Embroidery Needles) são agulhas de alta tecnologia desenvolvidas por fabricantes renomados (como Schmetz, Groz-Beckert e Organ) com revestimento superficial compósito à base de ligas de zinco, cromo duro e polímeros antiaderentes de PTFE. Projetadas especificamente para bordar materiais adesivos (entretelas autoadesivas, colas spray temporárias, velcro e tecidos termofusíveis), elas impedem que a resina da cola grude na haste e no olho da agulha.",
    "technicalDetails": "Ao bordar peças montadas com spray adesivo ou entretela adesiva com agulhas normais de níquel, o calor gerado pelo atrito a 800 PPM derrete a cola, que se deposita na canaleta e no olho da agulha (Gunking effect). Esse acúmulo obstrui a passagem da linha, desfia os filamentos e faz o fio arrebentar a cada poucos minutos. As agulhas com acabamento em zinco e camadas Non-Stick possuem coeficiente de atrito até 60% menor, repelindo a aderência de polímeros e permitindo bordar milhares de pontos continuamente sem necessidade de limpar a agulha com álcool.",
    "beginnerExplanation": "São agulhas especiais com um acabamento lisinho e antiaderente (como uma frigideira que não gruda comida!). Elas são perfeitas para quando você usa cola spray temporária ou entretela que cola com facilidade, porque a cola não gruda no olho da agulha e a linha não fica arrebentando a toda hora!",
    "howItWorks": [
      "1. A peça é fixada no bastidor com auxílio de cola spray temporária ou entretela adesiva.",
      "2. Instala-se a agulha com revestimento antiaderente/zinco (ex.: Schmetz Super Non-Stick 75/11 ou 80/12).",
      "3. A máquina borda em velocidade normal penetrando repetidamente na camada adesivada.",
      "4. O revestimento galvânico de baixa energia superficial impede que as moléculas da cola adiram ao metal aquecido.",
      "5. O olho e o canalete da agulha permanecem 100% limpos e desobstruídos.",
      "6. A linha de bordar desliza livremente mantendo a tensão perfeitamente calibrada.",
      "7. A produção é concluída sem paradas de máquina para limpeza ou trocas de agulha."
    ],
    "characteristics": [
      "Revestimento antiaderente de alta durabilidade com liga de zinco e cromo.",
      "Olho de formato largo projetado para reduzir o atrito do fio.",
      "Total resistência ao acúmulo de colas de contato, sprays e resinas sintéticas."
    ],
    "applications": [
      "Bordados com técnica flutuante fixados com spray adesivo temporário.",
      "Bordado de patches com entretela termocolante e filmes adesivos de aplique.",
      "Bordados em couro legítimo, sintético, vinil e materiais emborrachados.",
      "Aplicação de fitas de velcro e tecidos técnicos impermeáveis."
    ],
    "commonErrors": [
      "❌ Usar agulha comum de níquel com excesso de cola spray, grudando uma 'rolha' de cola no olho da agulha e quebrando a linha.",
      "❌ Limpar agulhas antiaderentes com lixas ou objetos pontiagudos de metal, arranhando e removendo o banho protetor.",
      "❌ Continuar bordando com a agulha torta após bater no aro do bastidor."
    ],
    "troubleshootingTips": [
      "A agulha está cheia de cola preta/grudenta no olho e a linha quebra sem parar: substitua por uma agulha antiaderente (Super Non-Stick / Anti-Glue) e limpe a barra de agulha com algodão umedecido em álcool isopropílico.",
      "A linha fica desfiando ao bordar apliques com cola: reduza a quantidade de spray adesivo (uma borrifada leve a 30 cm de distância é suficiente) e utilize agulha antiaderente 80/12.",
      "O ponto da bobina está sendo puxado para cima em tecido colado: o excesso de cola na agulha normal está freando a linha superior; troque para uma agulha com banho de zinco antiaderente."
    ],
    "dicaArtrelados": "Se você usa muita cola spray temporária para fazer bordados flutuantes no ateliê: tenha sempre na sua gavetinha uma caixinha de agulhas Super Non-Stick (antiaderentes). Elas custam quase o mesmo que uma agulha comum, mas economizam horas de dor de cabeça e fazem a linha deslizar como mágica!",
    "voceSabia": "A tecnologia de revestimento antiaderente em agulhas foi inspirada nas pesquisas aeroespaciais dos anos 1970 sobre filmes finos de fluoropolímeros para impedir o congelamento e acúmulo de partículas nas asas de aeronaves supersônicas!",
    "practicalExercise": "Pegue uma agulha comum e uma agulha Super Non-Stick. Aplique uma gota de cola líquida ou passe uma fita adesiva na ponta de cada uma. Note como a agulha com tratamento antiaderente repele o grude com facilidade e limpa instantaneamente com um simples pano seco.",
    "quickSummary": "Agulhas de alta performance com revestimento antiaderente e zinco que impedem o acúmulo de cola spray e resinas adesivas.",
    "relatedTerms": [
      "Agulhas de Bordado",
      "Cola Spray",
      "Super Non-Stick",
      "Schmetz",
      "Entretela Adesiva",
      "Gunking",
      "Manutenção"
    ],
    "tags": [
      "zinccoatedneedles",
      "agulhasantiaderentes",
      "agulhas",
      "nonstick",
      "colaspray",
      "acessorios",
      "hardware"
    ]
  },
  {
    "id": "zoom-tool-ferramenta-zoom-inspecao-cad",
    "code": "Z-010",
    "letter": "Z",
    "term": "Zoom Tool — Ferramenta de Zoom (Inspeção de Pontos em Alta Resolução & Navegação CAD)",
    "pronunciation": "zúum tul — fer-ra-men-ta de zun (ˈzuːm tuːl)",
    "level": "Iniciante 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'zoom' (efeito óptico de aproximação e ampliação contínua de imagem através de lentes teleobjetivas ou renderizadores gráficos vetoriais).",
    "summary": "Recurso fundamental de ampliação e navegação visual nos softwares de bordado que permite inspecionar cada agulhada com aumento de até 1.600%.",
    "definition": "A Zoom Tool (Ferramenta de Zoom / Lupa de Inspeção / Zoom In & Zoom Out / View Magnifier / Real-Scale 1:1 View) é o recurso óptico e gráfico de ampliação e controle de visualização presente em todos os softwares de digitalização e edição de matrizes de bordado (Wilcom, Embird, PE-Design, Bernina, Hatch). Permite ao programador alternar instantaneamente entre a visualização panorâmica da peça no bastidor, a escala real 1:1 (tamanho físico real em milímetros) e ampliações extremas (de 200% até mais de 1.600%), essenciais para inspecionar penetrações individuais de agulha, recuos de pontos de suporte e sobreposições de cores.",
    "technicalDetails": "A precisão milimétrica de uma matriz depende da resolução de exibição na tela. Em zoom de 100% (escala 1:1 calibrada com a resolução DPI do monitor), o bordador visualiza exatamente como a peça será vista a olho nu. Em ampliações de 800% ou mais, a Zoom Tool revela os 'Stitch Points' (nós de penetração da agulha marcados como pequenos pontos vetoriais), permitindo ao digitador identificar pontos muito curtos (menores que 1,0 mm) que quebrariam a agulha, ajustar compensações de repuxo e posicionar nós de travamento (Tie-In/Tie-Off) com precisão cirúrgica.",
    "beginnerExplanation": "É a ferramenta de 'lupa' do seu programa de bordado no computador! Com ela você pode aproximar bem de pertinho para ver onde cada pontinho da agulha vai bater no tecido, ou afastar para ver o desenho inteiro dentro do bastidor. É como ter um microscópio para garantir que o bordado não tenha nenhum errinho escondido!",
    "howItWorks": [
      "1. O programador abre a matriz e gira a roda do mouse (Scroll Wheel) ou aperta a tecla de atalho 'Z' (Zoom).",
      "2. Clica e arrasta uma caixa de seleção sobre o detalhe específico (ex.: uma letra pequena de 4 mm).",
      "3. O software renderiza a área com ampliação de 800%, exibindo cada filamento de linha individual.",
      "4. O digitador inspeciona a posição dos pontos de penetração e a distância entre as linhas de satim.",
      "5. Ajusta nós vetoriais e corrige eventuais acúmulos excessivos de pontos.",
      "6. Pressiona a tecla '0' ou 'F' (Fit to Window / 1:1) para retornar à visão geral e conferir a harmonia do desenho.",
      "7. A matriz é salva com garantia total de qualidade de costura."
    ],
    "applications": [
      "Inspeção minuciosa de monogramas e microletras antes da costura na máquina.",
      "Alinhamento milimétrico de contornos satim sobre preenchimentos tatami.",
      "Verificação de pontos curtos e nós ocultos em áreas densas.",
      "Calibração de escala 1:1 no monitor para conferência com réguas físicas."
    ],
    "characteristics": [
      "Ampliação contínua suave com renderização vetorial e TrueView 3D.",
      "Modo de atalho rápido pelo scroll do mouse ou teclas de atalho universais.",
      "Modo escala 1:1 calibrável com o tamanho físico real da tela."
    ],
    "commonErrors": [
      "❌ Programar toda a matriz em zoom de 1.200% sem afastar para a escala 1:1, criando detalhes microscópicos que a agulha física de 0,7 mm não consegue bordar.",
      "❌ Não calibrar a resolução do monitor no software, achando que o tamanho na tela é diferente do tamanho real da peça.",
      "❌ Esquecer de inspecionar os cantos das letras em zoom próximo, deixando pontas de underlay vazando para fora."
    ],
    "troubleshootingTips": [
      "O bordado na tela parece do tamanho certo mas borda minúsculo na máquina: calibre o tamanho de tela (Screen Calibration) no menu de opções do software usando uma régua plástica de verdade encostada no monitor.",
      "A agulha quebrou em um detalhe pequeno: use a ferramenta de Zoom para aproximar a 1.000% sobre aquele ponto e veja se não há um amontoado de mais de 10 agulhadas no mesmo lugar.",
      "Dificuldade de navegar em zoom muito próximo: segure a barra de espaço do teclado para ativar temporariamente a ferramenta de 'mãozinha' (Pan) e arrastar a tela sem perder o nível de ampliação."
    ],
    "dicaArtrelados": "Use sempre a regra dos dois passos no software: faça os ajustes finos com o Zoom bem pertinho (800%) e, antes de salvar, aperte a tecla de escala 1:1 (tamanho real) e dê um passo para trás da cadeira. Se o bordado estiver lindo e legível a um metro de distância da tela, ele vai ficar perfeito na camiseta do seu cliente!",
    "voceSabia": "O primeiro software comercial de bordado computadorizado para microcomputadores PC (criado pela Wilcom na Austrália em 1980) já contava com a tecla 'Z' para o comando de zoom, atalho que permanece como padrão universal da indústria há mais de quatro décadas!",
    "practicalExercise": "Abra um arquivo de matriz no seu software. Use a roda do mouse para aproximar até 1.000% sobre uma letra. Encontre os pequenos quadradinhos que mostram as penetrações da agulha. Em seguida, aperte a tecla '1' (escala real 1:1) e veja como o desenho se transforma no tamanho exato que terá na peça física.",
    "quickSummary": "Ferramenta de aproximação óptica e navegação em softwares CAD que permite inspecionar cada ponto de agulha em altíssima resolução.",
    "relatedTerms": [
      "Pan Tool",
      "Escala 1:1",
      "TrueView",
      "Stitch Points",
      "Software de Matrizes",
      "Wilcom",
      "Embird"
    ],
    "tags": [
      "zoomtool",
      "zoom",
      "lupa",
      "software",
      "cad",
      "inspecao",
      "programacao"
    ]
  },
  {
    "id": "zsk-sistemas-bordado-maquinas-industriais",
    "code": "Z-011",
    "letter": "Z",
    "term": "ZSK — Sistemas de Bordado Industrial & Tecnologia Têxtil Alemã (ZSK Stickmaschinen)",
    "pronunciation": "zê-ésse-ká — sis-tê-mas de bor-da-du in-dus-tri-al (ˌzɛd.ɛsˈkeɪ)",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo próprio / Sigla empresarial alemã.",
    "origin": "Origem alemã, abreviação de 'Zangs Stickmaschinen Krefeld', tradicional empresa de engenharia têxtil fundada na cidade de Krefeld, Alemanha, centro histórico da tecelagem de seda e bordados mecânicos europeus.",
    "summary": "Renomada fabricante alemã de máquinas industriais de bordado e sistemas CAD, pioneira em cabeçotes de alta rotação, bordados técnicos, aplicações com fios de carbono e corte a laser integrado.",
    "definition": "A ZSK (ZSK Stickmaschinen GmbH / ZSK Embroidery Systems) é uma das mais prestigiadas fabricantes mundiais de máquinas de bordado computadorizado industrial e de sistemas de bordado técnico (Technical Embroidery). Com sede em Krefeld, na Alemanha, a marca é referência global pela robustez mecânica, precisão dimensional inigualável e inovação pioneira em cabeçotes múltiplos, cabeçotes mistos para lantejoulas e fitas, dispositivos de corte e gravação a laser integrados e equipamentos especializados na costura de fios condutores elétricos, sensores inteligentes e fibras de carbono para a indústria aeroespacial e automotiva.",
    "technicalDetails": "Os equipamentos ZSK utilizam comandos numéricos computadorizados proprietários de alta velocidade (como as séries Sprint, Racer e Challenger), capazes de operar a velocidades constantes de 1.000 a 1.200 PPM com índices mínimos de vibração estrutural graças à sua fundição maciça em aço alemão. No universo dos arquivos de matrizes, o formato proprietário ZSK (.ZSK / .Z00 / .DSZ) é amplamente reconhecido pelos principais softwares de digitalização (como Wilcom e Wings), suportando comandos avançados de corte de fio dinâmico, controle independente de calcador ajustável e troca ultrarrápida de carretéis de agulha.",
    "beginnerExplanation": "A ZSK é como se fosse a 'Mercedes-Benz' do mundo das máquinas de bordar industriais! Nascida na Alemanha, ela produz máquinas gigantescas e superpotentes que conseguem bordar dia e noite sem parar com uma precisão cirúrgica. Além de bordar camisas e bonés finos, as máquinas deles são tão avançadas que conseguem bordar até fios elétricos e fibra de carbono em roupas inteligentes do futuro!",
    "howItWorks": [
      "1. O desenho é digitalizado no software respeitando os parâmetros de compensação de repuxo e densidade de alta precisão.",
      "2. O arquivo é transferido para o computador de bordo ZSK via rede industrial ou cabo USB.",
      "3. O operador ajusta o cabeçote industrial de acordo com o tipo de fio (poliéster, metalizado ou técnico).",
      "4. O sistema de controle eletrônico ajusta a altura individual do calcador eletropneumático para o tecido.",
      "5. Os motores trifásicos com servocontrole movem o bastidor em alta cadência sem gerar oscilações de ponto.",
      "6. O mecanismo de corte automático de linha inferior e superior apara as pontas com menos de 3 mm de sobra.",
      "7. O lote de produção é concluído com padronização visual perfeita entre todas as peças bordadas."
    ],
    "applications": [
      "Produção seriada em larga escala de uniformes corporativos, bonés e vestuário esportivo de alta costura.",
      "Bordados técnicos funcionais com fios condutores de eletricidade e tecidos inteligentes (Smart Textiles).",
      "Aplicações de lantejoulas, cordões grossos, fitas decorativas e pontos em relevo (Chenille/Moss Stitch).",
      "Gravação e recorte por canhão de laser acoplado ao cabeçote de bordado para apliques de precisão cirúrgica."
    ],
    "characteristics": [
      "Construção em chassi de aço temperado de baixa ressonância acústica.",
      "Calcador com ajuste eletrônico independente por software de acordo com a espessura do tecido.",
      "Compatibilidade nativa com matrizes nos padrões ZSK, Tajima e Barudan."
    ],
    "commonErrors": [
      "❌ Converter matrizes para formatos antigos da ZSK sem checar os comandos de troca de agulha e corte de linha.",
      "❌ Utilizar lubrificação genérica incompatível com as altas exigências térmicas dos mancais industriais alemães.",
      "❌ Programar pontos menores que 0,8 mm que geram atrito desnecessário em alta velocidade de 1.200 PPM."
    ],
    "troubleshootingTips": [
      "O painel acusa erro de leitura de formato de arquivo ZSK: verifique se o software de digitalização exportou com o formato ZSK compatível com a geração da placa da máquina ou salve na versão universal DST para leitura segura.",
      "A linha superior escapa do bico da agulha logo na primeira agulhada após o corte: aumente o comprimento de cauda do corte (Tail Length) no menu de configurações do cabeçote para 4 mm.",
      "Ponto com aspecto frouxo em alta velocidade: calibre os tensores dos pratos de linha utilizando um dinamômetro analógico (Tension Gauge) seguindo as tabelas oficiais do manual de fábrica."
    ],
    "dicaArtrelados": "Mesmo que você trabalhe com máquinas domésticas ou semi-industriais no seu ateliê, estudar a engenharia de ponta de marcas consagradas como a ZSK abre a mente: você aprende a importância de manter a máquina sempre limpa, com folga zero na barra de agulha e tensão equilibrada para alcançar acabamento de boutique!",
    "voceSabia": "A ZSK foi uma das pioneiras mundiais a utilizar máquinas de bordar para criar aquecedores térmicos de assentos de carros esportivos de luxo na Europa, bordando fios de cobre microscópicos diretamente sobre o couro dos bancos!",
    "practicalExercise": "No seu software de programação de matrizes, clique no menu 'Salvar Como / Exportar' e procure na lista de formatos os arquivos com extensão ZSK (.zsk ou .z00). Compare a lista de comandos suportados com o formato DST tradicional e veja a riqueza de recursos que o sistema industrial oferece.",
    "quickSummary": "Tradicional marca alemã de maquinário industrial de bordado e bordado técnico de altíssima precisão e durabilidade mecânica.",
    "relatedTerms": [
      "Tajima",
      "Barudan",
      "Máquina Industrial",
      "Bordado Técnico",
      "Velocidade PPM",
      "Corte de Fio",
      "Cabeçote"
    ],
    "tags": [
      "zsk",
      "maquinasindustriais",
      "engenharia",
      "alemanha",
      "altavelocidade",
      "formatos",
      "equipamento"
    ]
  },
  {
    "id": "ziper-no-bastidor-tecnica-ith-in-the-hoop",
    "code": "Z-012",
    "letter": "Z",
    "term": "Zíper no Bastidor — Técnica In The Hoop (Aplicação Automatizada ITH de Zíperes sem Máquina de Costura)",
    "pronunciation": "zí-per nu bas-ti-dor — té-kni-ka in dê hup (ˈziːpər noʊ bas.tʃiˈdoɾ)",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do inglês onomatopeico 'zip' (som rápido do fecho de dentes entrelaçados registrado pela empresa B.F. Goodrich em 1923) associado à metodologia contemporânea 'In The Hoop' (ITH), criada pela comunidade de bordado digital para confecção de peças utilitárias 100% finalizadas dentro do bastidor.",
    "summary": "Processo sequencial de programação e montagem em que o fecho ecler (zíper) é posicionado, alinhado e costurado diretamente no bastidor da máquina de bordar através de paradas programadas de ponto.",
    "definition": "O Zíper no Bastidor (Aplicação de Zíper ITH / In The Hoop Zipper Attachment / Embutimento de Fecho Automatizado) é a técnica especializada de costura e montagem de peças utilitárias (necessaires, estojos escolares, porta-moedas, bolsas térmicas e capas de almofada) inteiramente estruturadas dentro do bastidor da máquina de bordar computadorizada. A matriz é digitalizada com uma sequência exata de paradas de máquina (Stop/Color Change), guiando a bordadeira na fixação milimétrica da cremalheira (dentes do zíper) e dos tecidos de forro e acabamento com fita microporosa, sem a necessidade de manusear calcadores convencionais de zíper em máquina de costura reta.",
    "technicalDetails": "A matriz para zíper no bastidor é dividida em 5 fases críticas: 1) Marcação de Guia (Placement Stitch): uma linha de ponto corrido com 2,5 mm a 3,0 mm que desenha no estabilizador o retângulo exato onde o zíper deve repousar; 2) Ponto de Fixação da Cremalheira (Tackdown Stitch): costura que prende os cadarços laterais do zíper a 3 mm de distância dos dentes plásticos para evitar que a agulha colida com o metal ou poliéster rígido; 3) Aplicação do Tecido Principal e Forro: costura de rebatimento com ponto reto firme; 4) Abertura do Cursor (Slider Clearance): parada obrigatória na qual a máquina interrompe o ciclo para que a bordadeira puxe o cursor de metal para o meio da peça antes do fechamento perimetral; e 5) Costura de Selagem Periférica: união das camadas com ponto triplo (Bean Stitch) para reforço mecânico das bordas.",
    "beginnerExplanation": "É uma das maiores mágicas do bordado computadorizado! Você não precisa de máquina de costura nem de ter medo de colocar zíper. A própria máquina de bordar risca onde o zíper vai ficar, você prende ele com uma fitinha crepe, a máquina costura as laterais perfeitamente retas e depois costura o forro e os tecidos. No final, você abre o zíper, desvira a peça pelo buraquinho e tem uma necessaire ou estojo prontinho e lindo!",
    "howItWorks": [
      "1. Coloca-se entretela rasgável ou hidrossolúvel no bastidor e a máquina borda o retângulo de marcação do zíper.",
      "2. A bordadeira alinha o zíper sobre a marcação e fixa as extremidades com fita crepe ou fita microporosa.",
      "3. A máquina borda o ponto de fixação prendendo os cadarços do fecho com segurança.",
      "4. Posiciona-se o tecido da frente da peça direito com direito e a máquina passa a costura de união.",
      "5. Vira-se o tecido, rebate-se o acabamento e executa-se o bordado decorativo principal da peça.",
      "6. Na parada programada, abre-se o cursor do zíper até a metade da peça (etapa vital para conseguir desvirar depois).",
      "7. Coloca-se o tecido de fundo e o forro, a máquina fecha todo o contorno com ponto triplo e a peça está pronta para desvirar."
    ],
    "applications": [
      "Confecção seriada de necessaires personalizadas para brindes, maternidade e casamentos.",
      "Estojos escolares, porta-óculos, porta-moedas e carteirinhas funcionais.",
      "Almofadas com zíper embutido invisível bordadas com monogramas e florais.",
      "Bolsas de mão e clutches térmicas confeccionadas sem máquina de costura reta."
    ],
    "characteristics": [
      "Alinhamento paralelo perfeito da cremalheira sem ondulações têxteis.",
      "Dispensa marcação manual com giz ou alfinetes que poderiam quebrar agulhas.",
      "Repetibilidade dimensional exata em lotes de dezenas ou centenas de peças."
    ],
    "commonErrors": [
      "❌ Esquecer de abrir o cursor do zíper antes da costura de fechamento final, prendendo o cursor para fora e tornando impossível desvirar a necessaire.",
      "❌ Usar zíper com dentes metálicos grossos sob a linha de corte da agulha, provocando a quebra imediata da agulha e descalibração da lançadeira.",
      "❌ Fixar o zíper torto ou esticado com excesso de força, criando rugas e ondas no tecido da peça finalizada."
    ],
    "troubleshootingTips": [
      "A agulha bateu no cursor de metal do zíper e quebrou: certifique-se de que a parada de máquina (Stop) esteja programada no software para permitir que você deslize o cursor para uma área fora do percurso da agulha antes do fechamento.",
      "O zíper ficou repuxado e a necessaire ficou torta: nunca puxe o cadarço do zíper ao colar com fita adesiva; posicione-o completamente relaxado e plano sobre a marcação da entretela.",
      "Os dentes do zíper estão abrindo sozinhos após o uso: utilize sempre zíperes de poliéster nº 3 ou nº 5 de boa procedência com dentes espirais de nylon flexíveis adequados para bordado."
    ],
    "dicaArtrelados": "O segredo de ouro das necessaires perfeitas no ateliê: use sempre zíper a metro de nylon número 3 ou 5 e corte o cadarço com cerca de 3 a 4 cm a mais de cada lado do bastidor. Cole essas sobrinhas bem esticadas no aro plástico com fita crepe. Isso garante que a área de costura fique super plana e o cursor deslize com suavidade inigualável!",
    "voceSabia": "A técnica de criação de bolsas e necessaires 100% no bastidor (ITH) surgiu nos anos 2000 na Austrália e nos Estados Unidos, criada por artesãs que não tinham máquina de costura reta e queriam vender peças utilitárias completas usando apenas a sua máquina de bordar!",
    "practicalExercise": "Baixe ou crie uma matriz simples de porta-moedas ITH no bastidor 10x10 cm ou 13x18 cm. Siga as paradas da máquina, cole o zíper com calma, lembre-se de abrir o cursor até o meio antes da última costura e desvire a peça. Sinta a alegria indescritível de ver um produto comercial pronto nascer de dentro do bastidor!",
    "quickSummary": "Técnica automatizada onde zíperes inteiros são costurados e embutidos diretamente no bastidor da máquina de bordar sem necessidade de costura manual.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Necessaire no Bastidor",
      "Placement Stitch",
      "Tackdown Stitch",
      "Ponto Bean",
      "Bastidor Retangular",
      "Entretela Rasgável"
    ],
    "tags": [
      "zipernobastidor",
      "ith",
      "inthehoop",
      "necessaire",
      "fecho",
      "costuraeletronica",
      "utilitarios",
      "artrelados"
    ]
  },
  {
    "id": "zigue-zague-de-basteamento-e-fixacao",
    "code": "Z-013",
    "letter": "Z",
    "term": "Zigue-Zague de Basteamento e Fixação (Ponto de Ancoragem Prévia para Tecidos e Apliques)",
    "pronunciation": "zi-gui za-gui de bas-te-a-men-tu e fi-ksa-são (ˈziɡi ˈzaɡi)",
    "level": "Iniciante 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do francês 'bâtir' (alinhavar provisoriamente, prender sem apertar) combinado com o padrão ondulado 'ziguezague' de oscilação simétrica da agulha.",
    "summary": "Costura de zigue-zague aberta e ampla executada no perímetro da área de bordado para prender o tecido à entretela ou fixar tecidos flutuantes sem alfinetes.",
    "definition": "O Zigue-Zague de Basteamento e Fixação (Basting Zig-Zag / Tacking Zig-Zag / Alinhavo Eletrônico em Zigue-Zague / Ponto de Fixação de Contorno) é uma costura técnica preliminar programada com pontos longos (3,0 mm a 5,0 mm) e largura moderada a ampla (2,0 mm a 4,0 mm), executada antes do início dos elementos bordados definitivos. Sua finalidade principal é promover a ancoragem mecânica temporária entre o tecido superior e o estabilizador (entretela), sendo especialmente valioso na técnica de bordado flutuante (onde o tecido não é preso no aro interno do bastidor) e na retenção de tecidos escorregadios, felpudos ou elásticos.",
    "technicalDetails": "Ao contrário do ponto corrido de basteamento simples, o zigue-zague de basteamento distribui a força de tração em dois eixos diagonais alternados. Isso impede que tecidos de malha, microfibra ou seda deslizem longitudinalmente sob o avanço do pantógrafo. Ele é programado com tensão de linha superior intencionalmente aliviada e densidade muito baixa (espaçamento de 3 a 5 mm entre vértices), garantindo que a linha de basteamento possa ser removida facilmente com um puxão suave ou desmanchador de costura após a finalização da peça sem danificar as fibras têxteis.",
    "beginnerExplanation": "É como se a sua máquina colocasse alfinetes invisíveis e perfeitamente retos no tecido antes de começar a bordar o desenho de verdade! Se você vai bordar uma toalha grossa, um veludo ou um tecido fininho que não cabe no aro do bastidor, você coloca só a entretela no bastidor, apoia o tecido por cima e manda a máquina fazer esse zigue-zague aberto na volta. Ele segura tudo no lugar e não deixa o pano escorregar nem repuxar!",
    "howItWorks": [
      "1. A entretela é tensionada no bastidor como uma pele de tambor.",
      "2. O tecido ou peça a ser bordada é posicionado por cima da entretela (com ou sem spray adesivo temporário).",
      "3. A máquina borda o primeiro passo da matriz: o zigue-zague de basteamento perimetral ao redor da área da arte.",
      "4. Os pontos diagonais prendem o tecido firmemente contra o estabilizador em toda a borda de trabalho.",
      "5. A máquina prossegue executando o bordado principal (satim, tatami, apliques) com total estabilidade dimensional.",
      "6. Ao terminar o bordado e retirar a peça do bastidor, a bordadeira corta a laçada inicial do zigue-zague no verso.",
      "7. O fio solta-se facilmente em segundos sem deixar furos, marcas ou resíduos na peça pronta."
    ],
    "applications": [
      "Técnica de bordado flutuante em toalhas de banho aveludadas, roupões e jaquetas pesadas.",
      "Fixação de tecidos finos e escorregadios (cetim, organza, seda e viscose).",
      "Estabilização de malhas com elastano e tecidos de poliamida esportiva.",
      "Fixação preliminar de retalhos de aplique (patchwork) antes do recorte e acabamento em ponto cheio."
    ],
    "characteristics": [
      "Baixíssima densidade de pontos para remoção rápida e indolor sem rasgar o tecido.",
      "Tracionamento bidirecional cruzado com maior retenção contra o repuxo que o ponto reto.",
      "Compatível com linhas convencionais de poliéster ou linhas hidrossolúveis."
    ],
    "commonErrors": [
      "❌ Programar o zigue-zague de basteamento com densidade fechada, transformando o alinhavo em um contorno permanente impossível de desmanchar.",
      "❌ Bastear em cima de onde haverá detalhes bordados com satim claro, arriscando prender a linha de basteamento por baixo dos pontos definitivos.",
      "❌ Puxar a linha de basteamento com brutalidade na hora de retirar, puxando fios de tecidos delicados de malha."
    ],
    "troubleshootingTips": [
      "O zigue-zague de basteamento ficou preso por baixo do bordado final: programe uma margem de recuo (Offset) de pelo menos 5 mm a 8 mm ao redor da arte no software para que o basteamento fique fora da zona dos pontos definitivos.",
      "A agulha está deixando furinhos visíveis no tecido após tirar o basteamento: utilize agulha mais fina (tamanho 70/10 ponta bola fina) e aumente o comprimento do passo do ponto para 4,0 mm.",
      "O tecido de malha ainda esticou mesmo com o basteamento: utilize uma folha de plástico hidrossolúvel por cima e aumente a largura do zigue-zague para 4,0 mm para ampliar a área de pressão superficial."
    ],
    "dicaArtrelados": "Dica mágica de ateliê para peças de alto luxo: faça o zigue-zague de basteamento usando uma linha com cor bem contrastante em relação ao tecido (por exemplo, linha verde ou amarela em tecido branco). Fica incrivelmente fácil de enxergar onde cortar o alinhavo no final, e você nunca corre o risco de cortar a linha do bordado por engano!",
    "voceSabia": "O conceito de zigue-zague de basteamento foi adaptado da alta costura francesa (onde se chama 'bâti en chevron'), técnica centenária usada por alfaiates parisienses para assentar entretelas em ternos de lã antes de costurar as lapelas!",
    "practicalExercise": "No seu software de edição, crie um retângulo de 10x10 cm com ponto zigue-zague, comprimento de ponto de 4 mm e largura de 3 mm. Coloque só a entretela no bastidor, apoie uma toalhinha de mão por cima e rode o basteamento. Veja como a toalha fica incrivelmente firme sem precisar ser esmagada pelo aro do bastidor!",
    "quickSummary": "Costura técnica aberta em zigue-zague que prende tecidos e apliques à entretela antes do bordado e se desmancha facilmente no final.",
    "relatedTerms": [
      "Ponto Basting",
      "Bordado Flutuante",
      "Alinhavo Eletrônico",
      "Entretela Rasgável",
      "Offset de Segurança",
      "Ponto Corrido"
    ],
    "tags": [
      "ziguezaguebasteamento",
      "basting",
      "tacking",
      "ancoragem",
      "bordadoflutuante",
      "pontosbasicos",
      "atelie"
    ]
  },
  {
    "id": "zero-repuxo-protocolo-anti-distorcao-textil",
    "code": "Z-014",
    "letter": "Z",
    "term": "Zero Repuxo — Protocolo Anti-Distorção Têxtil (Metodologia de Estabilização para Eliminar Rugas no Bordado)",
    "pronunciation": "zê-ru re-pu-shu — pro-to-co-lu an-ti dis-tor-são têks-til (ˈzɛ.ɾu ʁeˈpu.ʃu)",
    "level": "Avançado 🔴",
    "category": "Tensão & Calibração",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do numeral cardinal 'zero' e do particípio do verbo 'repuxar' (tracionar com força em sentido oposto), termo consagrado no chão de fábrica do bordado industrial brasileiro para descrever a ausência total do defeito de franzimento (Puckering).",
    "summary": "Metodologia multidisciplinar de programação e ancoragem no ateliê que equilibra densidade, direção de pontos, compensação de repuxo e entretelas para bordar sem nenhuma ruga.",
    "definition": "O Zero Repuxo (Protocolo Anti-Distorção Têxtil / Zero Puckering Protocol / Sistema de Estabilização Total / Compensação Dimensional Equilibrada) é a metodologia avançada e sistemática desenvolvida no ateliê de bordados de alta performance para erradicar completamente o fenômeno do enrugamento, franzimento e deformação de tecidos finos, malhas e tecidos planos leves. O protocolo atua simultaneamente nas três fases de produção: matriz digital (compensação de repuxo e direcionamento angular balanceado), preparação física (gramatura e alinhamento de entretelas) e calibragem mecânica (tensão milimétrica das linhas e pressão do calcador).",
    "technicalDetails": "O repuxo têxtil é gerado quando os pontos penetram no tecido tracionando os fios de urdume e trama em direção ao centro da coluna. O Protocolo Zero Repuxo combate essa força física por meio de 4 pilares: 1) Compensação de Repuxo Digital (Pull Compensation): expansão paramétrica das colunas de 0,35 mm a 0,50 mm perpendicularmente ao ponto para que o encolhimento resulte na cota exata da arte; 2) Densidade Inteligente: limitação da cobertura em tecidos leves a no máximo 0,42 mm a 0,45 mm de espaçamento para não sobrecarregar a estrutura têxtil; 3) Angulação Cruzada de Camadas: pontos de preenchimento (Tatami) e de suporte (Underlay) orientados a 45° ou 90° entre si para anular vetores de força unidirecionais; e 4) Escolha da Entretela por Coeficiente Elástico: uso mandatório de entretela de corte reto (Cutaway) multidirecional em tecidos que possuem elastano.",
    "beginnerExplanation": "É a fórmula secreta para nunca mais tirar uma camiseta do bastidor e ver aquele círculo de pano enrugado e feio ao redor do bordado! O repuxo acontece porque a linha é puxada com força e junta o pano como uma sanfona. Com o método Zero Repuxo, você aprende a regular o programa no computador para dar uma folguinha na linha, usa a entretela certa para cada tipo de roupa e deixa a tensão macia. O resultado é um bordado liso, plano e elegante como se fosse impresso no tecido!",
    "howItWorks": [
      "1. Análise do tecido: classifica-se a elasticidade da peça (tecido plano rígido, malha leve, piquet ou tecido sintético).",
      "2. Configuração na matriz: aplica-se a compensação de repuxo adequada no software (0,4 mm para malhas de algodão).",
      "3. Underlay estruturante: programa-se uma camada de suporte reticulado (Tatami Underlay) aberta para travar as fibras têxteis antes do preenchimento.",
      "4. Estabilização no bastidor: aplica-se entretela recortável (Cutaway) com peso entre 60 e 80 g/m² e fixação sem esticar o tecido.",
      "5. Calibração da tensão: ajusta-se a bobina (20 a 25 gf no medidor Towa) e a linha superior para correr macia.",
      "6. Execução em velocidade controlada: borda-se a peça entre 600 e 750 PPM para minimizar a inércia dos pontos.",
      "7. Resultado final: a peça sai do bastidor perfeitamente lisa, sem ondas, sem rugas e com toque macio e flexível."
    ],
    "applications": [
      "Bordados corporativos em camisas polo de piquet e camisas sociais de algodão fio 60/80.",
      "Camisetas de malha penteada 30.1 e roupas esportivas em malha dry-fit com elastano.",
      "Bordados grandes em tecidos delicados de seda, viscose, cetim e cambraia de linho.",
      "Uniformização de qualidade para eliminar peças de segunda linha e retrabalho na confecção."
    ],
    "characteristics": [
      "Planicidade absoluta da superfície têxtil após lavagem e secagem.",
      "Preservação do caimento original e da elasticidade natural da roupa.",
      "Eliminação completa de frestas brancas entre contornos de satim e preenchimentos tatami."
    ],
    "commonErrors": [
      "❌ Esticar o tecido de malha com força no aro do bastidor como se fosse um tambor; ao soltar, o tecido volta ao tamanho original e enruga todo o bordado.",
      "❌ Usar entretela rasgável simples em camisetas de algodão, achando que ela vai segurar milhares de pontos densos.",
      "❌ Aumentar a tensão da linha superior na esperança de deixar o ponto 'mais bonito', puxando o tecido para cima e criando franzidos permanentes."
    ],
    "troubleshootingTips": [
      "Apareceram rugas diagonais ao redor do bordado assim que a peça saiu do bastidor: o tecido foi esticado no momento de prender no aro; refaça o processo acomodando o tecido relaxado sobre a entretela presa e use entretela recortável de 80 g/m².",
      "O contorno preto ficou 2 mm afastado do preenchimento colorido, deixando uma fresta: aumente a compensação de repuxo (Pull Compensation) de ambos os objetos no software para pelo menos 0,40 mm.",
      "O bordado ficou parecendo uma 'placa de papelão' dura no peito da camiseta: reduza a densidade de pontos (aumente o espaçamento de 0,38 mm para 0,44 mm) e remova camadas desnecessárias de underlay concentrado."
    ],
    "dicaArtrelados": "A regra de ouro do ateliê Artrelados contra o repuxo: quem manda na tensão é a entretela, não o tecido! Prenda a entretela no bastidor com a firmeza de um tambor afinado, mas apoie a camiseta de malha por cima com a delicadeza de uma pluma, sem puxar nem um milímetro. A entretela segura o esforço das agulhadas e o tecido fica lisinho como seda!",
    "voceSabia": "Em testes de laboratório têxtil industrial, descobriu-se que uma matriz de 10.000 pontos em ponto satim exerce mais de 4 quilos de força mecânica de tração somada sobre o tecido durante a costura!",
    "practicalExercise": "Borde o mesmo logotipo em dois retalhos de malha de camiseta: no primeiro, estique a malha bem forte no bastidor com entretela fina; no segundo, use entretela recortável firme e apoie a malha relaxada com um leve toque de spray temporário. Compare os dois resultados na bancada e veja com seus próprios olhos o poder do Protocolo Zero Repuxo!",
    "quickSummary": "Metodologia técnica completa que combina programação balanceada, entretelas corretas e tensão suave para eliminar qualquer franzido no tecido.",
    "relatedTerms": [
      "Compensação de Repuxo",
      "Pull Compensation",
      "Franzimento (Puckering)",
      "Entretela Recortável (Cutaway)",
      "Tensão de Linha",
      "Direção do Ponto",
      "Tatami Underlay"
    ],
    "tags": [
      "zerorepuxo",
      "puckering",
      "compensacaorepuxo",
      "estabilizacao",
      "qualidade",
      "tensao",
      "malhas",
      "atelie"
    ]
  },
  {
    "id": "zigue-zague-richelieu-eletronico",
    "code": "Z-015",
    "letter": "Z",
    "term": "Zigue-Zague Richelieu Eletrônico (Bordado Vazado Computadorizado com Corte Manual ou Dissolução)",
    "pronunciation": "zi-gui za-gui ri-she-li-ê e-le-trô-ni-cu (ˈziɡi ˈzaɡi ʁiʃəˈljø)",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Homenagem histórica ao Cardeal de Richelieu (Armand Jean du Plessis, primeiro-ministro da França no século XVII e patrono das rendas e bordados cortados franceses), associado à pontaria digital das máquinas computadorizadas modernas.",
    "summary": "Ponto zigue-zague denso e reforçado programado para selar as bordas de orifícios e arabescos no tecido, permitindo recortar o fundo e criar rendas vazadas deslumbrantes.",
    "definition": "O Zigue-Zague Richelieu Eletrônico (Richelieu Cutwork Stitch / Ponto de Cordonê Richelieu / Ponto Caseado para Bordado Vazado Computadorizado / Eyelet & Cutwork Zig-Zag) é a costura especializada de contorno de alta densidade e calibre fechado utilizada para orlar recortes, furos e janelas ornamentais no tecido. O ponto executa uma primeira passada em ponto corrido de fixação, seguida por um zigue-zague intermediário que encorpa a borda e, após o recorte manual ou químico das fibras internas, finaliza com uma coluna de ponto cheio (Satim) ou zigue-zague cerrado que sela permanentemente o corte sem desfiar.",
    "technicalDetails": "A criação do Richelieu computadorizado segue uma engenharia rigorosa de 4 etapas na matriz: 1) Linha de Corte (Cutwork Outline): ponto corrido fino que demarca onde a tesoura curva ou lâmina de corte irá vazar o tecido; 2) Parada de Máquina (Stop): interrupção para remoção do bastidor e corte das fibras internas com tesoura de ponta afiada tipo cegonha ou lâmina bisturi têxtil; 3) Pontes de Ligação (Brides / Richelieu Bars): cordões de ponto zigue-zague reforçados bordados no ar sobre entretela hidrossolúvel para conectar as ilhas do desenho que ficariam soltas; e 4) Acabamento de Cobertura (Overedge Cordonnet): coluna densa de satim ou zigue-zague ultrafechado (espaçamento de 0,30 mm a 0,35 mm) com recuo de compensação que abraça a borda cortada e oculta todos os fiapos.",
    "beginnerExplanation": "É aquela técnica nobre que faz toalhas de mesa e guardanapos de linho parecerem verdadeiras rendas antigas cheias de buraquinhos vazados! A máquina borda o desenho da janelinha, para para você cortar o tecido por dentro com uma tesourinha bem afiada, e depois faz um ponto cheio e brilhante em volta do corte. O resultado é uma peça de luxo com desenhos vazados perfeitos que você pode lavar na máquina sem medo de desfiar!",
    "howItWorks": [
      "1. Monta-se o tecido nobre (linho, percal ou tricoline) no bastidor com duas camadas de entretela hidrossolúvel.",
      "2. A máquina borda a linha de contorno em ponto reto demarcando as áreas que serão vazadas.",
      "3. A máquina emite uma parada programada (Stop); a bordadeira retira o bastidor com cuidado sem desencaixar o tecido.",
      "4. Com uma tesourinha de precisão de ponta curva afiadíssima, recorta-se o tecido dentro da demarcação bem rente à costura (sem cortar a entretela hidrossolúvel de baixo).",
      "5. Encaixa-se o bastidor de volta na máquina e aperta-se o botão iniciar.",
      "6. A máquina borda as 'pontes' (hastes de união) no ar e sela toda a borda cortada com o zigue-zague Richelieu superdenso.",
      "7. Ao terminar, a peça é lavada em água morna: a entretela hidrossolúvel dissolve-se 100%, restando a renda vazada pura e deslumbrante."
    ],
    "applications": [
      "Toalhas de mesa de banquete, caminhos de mesa e jogos americanos de puro linho.",
      "Enxovais de noiva, lençóis de alto luxo e fronhas com monogramas entrelaçados em vazado.",
      "Vestidos de batizado, golas clássicas infantis e peças de alta costura.",
      "Bordados litúrgicos, toalhas de altar e mantos cerimoniais rendados."
    ],
    "characteristics": [
      "Selagem micrométrica anti-desfiamento com coluna de ponto satim/zigue-zague fechado.",
      "Estruturação de pontes suspensas sobre filme de polivinil álcool (PVA hidrossolúvel).",
      "Acabamento idêntico à frente e ao verso em toalhas de mesa nobres."
    ],
    "commonErrors": [
      "❌ Cortar a entretela hidrossolúvel junto com o tecido na etapa de recorte, deixando um buraco vazio sem base para as pontes serem bordadas.",
      "❌ Cortar o tecido longe demais da linha guia (a mais de 1 mm), deixando fiapos brancos espetados para fora do acabamento em satim.",
      "❌ Usar entretela rasgável comum em vez de hidrossolúvel, deixando pedaços feios de papel branco presos no meio do vazado após o término."
    ],
    "troubleshootingTips": [
      "Ficaram fiapinhos de tecido aparecendo por baixo da borda de satim: na próxima peça, corte o tecido a menos de 0,5 mm da costura de guia e aumente a largura da coluna de acabamento no software de 2,5 mm para 3,2 mm para abraçar mais tecido.",
      "A agulha cortou a linha das pontes de Richelieu durante o preenchimento: aumente a tensão da linha das pontes e certifique-se de que foram programadas com pontos de ida e volta (underlay duplo).",
      "A entretela hidrossolúvel rasgou durante o recorte manual: utilize filme hidrossolúvel de alta gramatura (80 a 100 mícrons) ou use duas folhas sobrepostas para dar maior resistência estrutural."
    ],
    "dicaArtrelados": "O truque dos mestres de Richelieu: ao recortar o tecido na bancada, use uma tesoura de ponta curva finíssima tipo 'cegonha' bem afiada até a pontinha. Deite a curva da lâmina contra o tecido e recorte com movimentos suaves e contínuos. O corte sai tão rente e limpo que o ponto de cobertura da máquina cobre 100% dos fiapos sem nenhum esforço!",
    "voceSabia": "O Cardeal de Richelieu promulgou leis severas na França no século XVII proibindo a importação de rendas caras de Veneza, obrigando as bordadeiras francesas a inventarem o ponto Richelieu nacional, que se tornou um dos maiores símbolos de sofisticação e elegância da corte francesa!",
    "practicalExercise": "Em um retalho de linho ou algodão puro, monte o bastidor com duas camadas de plástico hidrossolúvel. Borde uma matriz simples de coração em ponto Richelieu. Pause no stop, recorte o miolo do tecido com carinho, termine o bordado e enxágue em água corrente para ver o coração vazado se transformar em pura renda!",
    "quickSummary": "Costura de zigue-zague densa e reforçada que contorna e sela áreas vazadas do tecido para recriar a clássica técnica do bordado Richelieu.",
    "relatedTerms": [
      "Bordado Richelieu",
      "Cutwork",
      "Entretela Hidrossolúvel",
      "Ponto Cordonê",
      "Ponto Satim",
      "Tesoura de Precisão",
      "Linho"
    ],
    "tags": [
      "ziguezaguerichelieu",
      "richelieu",
      "cutwork",
      "bordadovazado",
      "renda",
      "altacostura",
      "linho",
      "atelie"
    ]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_Z1: Verbete[] = [
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
    imageUrl: "/images/z001_eixo_z_arvore_v1.jpg?v=1",
    imageCaption: "Anatomia do Eixo Z (Z-Axis): o eixo principal da árvore que coordena o sincronismo mecânico de 0° a 360° entre a barra de agulha, o estica-fio e a lançadeira rotativa.",
    tags: ["zaxis", "eixoz", "mecanica", "sincronismo", "hardware", "manutencao", "lancadeira"]
  },
  {
    id: "zig-zag-stitch-ponto-zigue-zague",
    code: "Z-002",
    letter: "Z",
    term: "Zig-Zag Stitch — Ponto Zigue-Zague (Ponto Alternado de Fixação, Contorno & Apliques)",
    pronunciation: "zíg-zég stitxi — pon-tu zi-gui za-gui (ˈzɪɡ zæɡ stɪtʃ)",
    level: "Iniciante 🟢",
    category: "Tipos de Ponto",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês 'zigzag' (linha quebrada em ângulos alternados) introduzido na costura mecânica no final do século XIX pela alemã Dürkopp.",
    summary: "Ponto alternado esquerda-direita de largura e comprimento ajustáveis, essencial para fixação de tecidos de aplique, bordas e estruturas elásticas.",
    definition: "O Zig-Zag Stitch (Ponto Zigue-Zague / Ponto de Fixação Alternada / Alternating Tackdown Stitch / Appliqué Pre-Stitch) é um dos tipos fundamentais de pontos do bordado mecânico e computadorizado. Caracteriza-se pela penetração alternada da agulha de um lado para o outro de uma linha central, formando uma série contínua de traços triangulares ou angulares. Ao contrário do ponto satim (que possui densidade fechada), o ponto zigue-zague possui espaçamento aberto programado, permitindo prender camadas de tecido sem rigidez excessiva.",
    technicalDetails: "Nos softwares de digitalização (CAD), o ponto zigue-zague é programado com dois parâmetros principais: **Largura (Width)**, que varia tipicamente de 1,5 mm a 4,0 mm, e **Espaçamento/Passo (Length/Spacing)**, com valores entre 1,5 mm e 3,0 mm. Na confecção de apliques (Appliqué), o zigue-zague atua como o ponto de fixação intermediário (Tackdown Stitch), prendendo o retalho recortado sobre a entretela antes que o ponto satim denso ou a costura de acabamento seja aplicada, evitando o desfiamento das bordas do tecido aplicado.",
    beginnerExplanation: "É aquele pontinho divertido que vai costurando de um lado para o outro como se fosse um dente de serra! Ele é perfeito para prender tecidos de aplique na toalha ou na roupinha antes de passar o bordado final grosso por cima, garantindo que o tecido não escape nem desfie durante o trabalho!",
    howItWorks: [
      "1. A máquina executa a marcação da área do aplique com ponto de percurso simples.",
      "2. O operador posiciona o retalho de tecido sobre a marcação.",
      "3. O software comanda a costura em ponto Zig-Zag ao redor de todo o contorno da peça.",
      "4. As passagens alternadas da agulha prendem as fibras do tecido na entretela com elasticidade e firmeza.",
      "5. O operador recorta o excesso de tecido rente às pontas externas do zigue-zague.",
      "6. A máquina entra com o cordão final em ponto satim largo, cobrindo 100% dos pontos de zigue-zague.",
      "7. O aplique fica plano, sem rugas e com acabamento resistente a dezenas de lavagens."
    ],
    applications: [
      "Ponto de fixação (Tackdown) em apliques de feltro, tricoline, malha e tecidos sintéticos.",
      "Costuras de união flexíveis em tecidos com elasticidade (lycra e malhas).",
      "Efeitos decorativos rústicos de pesponto em barras de enxovais.",
      "Underlay aberto para estabilização de bases de preenchimento leves."
    ],
    characteristics: [
      "Largura e densidade linear totalmente customizáveis no software.",
      "Alta flexibilidade mecânica que acompanha o estiramento natural do tecido.",
      "Consumo reduzido de linha em comparação com colunas de satim fechadas."
    ],
    commonErrors: [
      "❌ Recortar o tecido de aplique por dentro do ponto zigue-zague, soltando o retalho antes do acabamento satim.",
      "❌ Programar o zigue-zague de fixação mais largo do que o cordão final de satim, deixando pontas de linha aparecendo para fora.",
      "❌ Usar densidade excessivamente apertada no zigue-zague intermediário, picotando e furando o tecido de aplique."
    ],
    troubleshootingTips: [
      "O tecido do aplique está escapando nas pontas durante o bordado final: aumente a largura do ponto zigue-zague de 2,0 mm para 2,8 mm e reduza o espaçamento para 1,8 mm no software.",
      "As pontinhas do zigue-zague estão aparecendo por baixo do satim: configure o recuo (Pullback) da borda no software ou aumente a largura do satim final de cobertura em 0,5 mm.",
      "O tecido fino está enrugando na costura do zigue-zague: utilize entretela rasgável de gramatura adequada (duas folhas de 40 g/m²) ou afrouxe ligeiramente a tensão da linha superior."
    ],
    dicaArtrelados: "Para fazer apliques perfeitos que não descolam nunca: programe sempre uma passagem de ponto zigue-zague antes do ponto cheio final! O zigue-zague 'doma' as bordinhas do tecido e deixa o corte com a tesoura de ponta curva muito mais seguro e fácil de fazer!",
    voceSabia: "A primeira máquina de costura zigue-zague mecânica da história foi criada pela fabricante alemã Dürkopp em 1886 para confecção de fardas militares e abotoaduras na Europa!",
    practicalExercise: "No seu programa de bordado, crie um círculo com contorno de Ponto Zigue-Zague com largura de 3,0 mm e espaçamento de 2,5 mm. Simule na tela e observe como ele cria uma fixação firme com metade da quantidade de pontos de um cordão satim tradicional.",
    quickSummary: "Ponto mecânico alternado esquerda-direita de largura regulável, ideal para prender apliques e bordas com flexibilidade.",
    relatedTerms: ["Aplique (Appliqué)", "Tackdown", "Ponto Satim", "Ponto de Percurso (Run Stitch)", "Underlay", "Tesoura de Aplique"],
    imageUrl: "/images/z002_zigzag_stitch_v2.jpg?v=1",
    imageCaption: "Prancha Técnica do Ponto Zigue-Zague Computadorizado (Zig-Zag Stitch / Tackdown): formação coordenada pelo pantógrafo nos eixos X/Y, bastidor eletrônico de bordado com entalhes de alinhamento em cruz, calcador de bordado (hopping foot) em alta velocidade executando a fixação do aplique com tosa rente por tesoura pato/curva e Checagem em Verde da Faixa de Conformidade Ideal (largura 2,5 a 3,5 mm e passo 2,0 a 2,5 mm), sem requadros e sobre fundo branco contínuo.",
    tags: ["zigzagstitch", "pontoziguezague", "tiposdeponto", "aplique", "tackdown", "costura", "software"]
  }
];

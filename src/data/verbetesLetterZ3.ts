import { Verbete } from "../types";

export const VERBETES_LETTER_Z3: Verbete[] = [
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
    voceSabia: "O sistema de coordenadas cartesianas com Ponto Zero (0,0) foi concebido pelo filósofo e matemático francês René Descartes em 1637 quando observava o voo de uma mosca no teto de seu quarto e percebeu que podia descrever a posição exata dela medindo a distância até as duas paredes perpendiculares!",
    practicalExercise: "Abra qualquer matriz no seu software. Observe o ponto em cruz que marca a origem. Selecione a matriz inteira, arraste para o canto e aperte a tecla de atalho de centralizar (ou digite X=0 e Y=0 na barra de propriedades): observe como o desenho pula exatamente para o centro perfeito do bastidor.",
    quickSummary: "Ponto de referência cartesiano central (0,0) do bastidor de onde se calculam as coordenadas e para onde a máquina retorna ao finalizar.",
    relatedTerms: ["X-Axis", "Y-Axis", "Start/End Point", "Home Position", "Hoop Limits", "Centralização", "Laser Pointer"],
    tags: ["zeropoint", "pontozero", "origem", "coordenadas", "bastidor", "operacao", "software"]
  },
  {
    id: "z-axis-timing-tempo-sincronismo-lancadeira",
    code: "Z-006",
    letter: "Z",
    term: "Z-Axis Timing — Tempo de Sincronismo da Lançadeira (Hook Timing & Needle Clearance)",
    pronunciation: "zii-ék-sis tái-ming — tem-pu de sin-cro-nis-mu da lan-sa-dei-ra",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'timing' (ajuste cronométrico e angular de precisão entre componentes rotativos e alternativos de alta velocidade).",
    summary: "Calibração micrométrica do instante exato em que a ponta da lançadeira passa pelo chanfro da agulha para capturar a laçada de linha sem bater nem falhar pontos.",
    definition: "O Z-Axis Timing (Sincronismo da Lançadeira Rotativa / Hook Timing / Ponto de Laçada / Needle-to-Hook Synchronization) é a regulagem mecânica mais crítica de uma máquina de bordar industrial ou doméstica. Define a relação angular entre a descida e subida da barra de agulha (eixo Z) e o giro contínuo do bico da lançadeira (Rotary Hook Point) no momento em que a agulha atinge o ponto morto inferior (BDC - Bottom Dead Center) e sobe exatamente entre 1,8 mm e 2,2 mm para abrir o laço de linha.",
    technicalDetails: "No momento do encontro entre a agulha e a lançadeira (típico entre 195° e 205° do encoder do eixo Z), três grandezas micrométricas devem ser rigorosamente atendidas: 1) **Altura da Barra da Agulha**: o bico da lançadeira deve passar cerca de 0,5 mm a 1,0 mm acima da borda superior do olho da agulha; 2) **Folga Lateral (Hook-to-Needle Clearance)**: a distância entre o bico da lançadeira e o fundo do chanfro (Scarf) da agulha deve ser de apenas **0,05 mm a 0,10 mm** (a espessura de uma folha de papel fino de 75g/m²); 3) **Sincronismo de Subida**: a lançadeira deve cruzar a linha de centro da agulha exatamente quando a agulha sobe 2,0 mm após o ponto mais baixo.",
    beginnerExplanation: "É o casamento mecânico perfeito entre a agulha e a lançadeira lá dentro da máquina! A agulha desce com a linha de cima, dá uma subidinha de nada para fazer uma 'barriguinha' (o laço) e o bico da lançadeira passa correndo pertinho dela — a uma distância fininha como uma folha de papel — para pegar a linha e amarrar com a linha de baixo. Se essa regulagem estiver atrasada ou adiantada, a máquina pula pontos ou quebra a agulha!",
    howItWorks: [
      "1. O técnico remove a chapa de ponto e a caixa de bobina para expor a lançadeira.",
      "2. Gira o volante manual no eixo Z até a barra de agulha descer ao ponto mais baixo (Lowest Point / 180°).",
      "3. Continua girando suavemente até a barra subir exatamente 2,0 mm (marcado no calibre de sincronismo ou a 200° no painel).",
      "4. Verifica se a ponta da lançadeira está alinhada perfeitamente com a linha de centro da haste da agulha.",
      "5. Ajusta a folga lateral usando um calibre de lâmina de 0,05 mm entre o bico da lançadeira e o chanfro.",
      "6. Aperta firmemente os três parafusos de fixação da engrenagem da lançadeira.",
      "7. Testa em velocidade máxima: a máquina borda liso sem falhar nenhum ponto."
    ],
    characteristics: [
      "Tolerância dimensional micrométrica de 0,05 mm a 0,10 mm.",
      "Sincronismo angular calibrado entre 195° e 205° do ciclo do eixo Z.",
      "Eliminação definitiva de quebras de agulha e pontos pulados (Skipped Stitches)."
    ],
    applications: [
      "Manutenção preventiva periódica em máquinas industriais monocabeçotes e multicabeçotes.",
      "Recalibração após batida violenta de bastidor ou quebra catastrófica de agulha.",
      "Ajuste para bordar materiais ultra pesados (bonés estruturados, couro e lonas).",
      "Diagnóstico avançado de ateliês de alta produtividade."
    ],
    commonErrors: [
      "❌ Apertar os parafusos da lançadeira com a folga colada na agulha, fazendo a lançadeira bater no metal e cegar a ponta do bico.",
      "❌ Regular a altura da agulha com a agulha torta ou não encaixada até o topo do parafuso prendedor.",
      "❌ Tentar mexer na lançadeira sem afrouxar os parafusos de fixação corretos do eixo inferior."
    ],
    troubleshootingTips: [
      "A máquina pula pontos em todas as cores mesmo com agulha nova e linha de boa marca: o tempo de lançadeira (Hook Timing) está atrasado ou a folga lateral aumentou; chame o técnico para recalibrar o sincronismo com calibre de folga.",
      "Ouve-se um estalo metálico seco a cada agulhada e a agulha quebra na ponta: a lançadeira está batendo na agulha por falta de folga (menor que 0,05 mm); afaste a lançadeira ligeiramente.",
      "A linha arrebenta desfiada e cheia de rebarbas: o bico da lançadeira foi arranhado por uma agulha antiga que bateu nele; faça o polimento do bico da lançadeira com lixa d'água 1.200 e pasta diamantada de polimento."
    ],
    dicaArtrelados: "Se você ouvir a agulha bater forte e quebrar no meio de um bordado de boné ou toalha grossa, pare a máquina imediatamente! Troque a agulha e passe a unha delicadamente no bico da lançadeira: se sentir qualquer arranhãozinho ou 'rebarba' que espete seu dedo, passe um polidor suave para não estragar as próximas linhas!",
    voceSabia: "A invenção da lançadeira rotativa de giro contínuo (Rotary Hook) em 1851 por Allen B. Wilson foi o maior salto tecnológico da história da costura mecânica, permitindo que a velocidade saltasse de 200 pontos por minuto para mais de 1.500 PPM!",
    practicalExercise: "Com a máquina desligada e chapa de ponto retirada, coloque uma agulha nova 75/11. Gire o volante na mão devagar e ilumine com uma lanterna o ponto onde o bico da lançadeira passa por trás da agulha: observe como ele passa exatamente dentro da cavidade do chanfro (Scarf) sem encostar no metal.",
    quickSummary: "Calibração milimétrica da distância e do tempo em que a lançadeira captura a laçada da agulha para costurar sem falhas nem quebras.",
    relatedTerms: ["Lançadeira Rotativa", "Chanfro da Agulha (Scarf)", "Hook Timing", "Skipped Stitches", "Chapa de Ponto", "Barra da Agulha"],
    tags: ["zaxistiming", "hooktiming", "lancadeira", "sincronismo", "mecanica", "manutencao", "hardware"]
  }
];

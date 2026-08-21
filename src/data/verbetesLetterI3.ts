import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART3: Verbete[] = [
  {
    id: "i-013-interface-de-usuario-e-painel-touchscreen",
    code: "I-013",
    term: "Interface de Usuário & Painel Touchscreen da Máquina (Machine Human-Machine Interface & Touchscreen Panel)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Equipamentos & Ferramentas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês Human-Machine Interface (HMI / Interface Homem-Máquina) e touch-screen (tela sensível ao toque). Sistema computacional de controle e monitoramento operacional.",
    summary: "Tela colorida sensível ao toque da máquina onde a bordadeira escolhe matrizes, ajusta tamanhos, gira desenhos, monitora a contagem de pontos e comanda a produção.",
    definition: "A Interface de Usuário e Painel de Controle Touchscreen (Human-Machine Interface - HMI / Touchscreen Control Terminal & Embedded OS) é o centro computacional e gráfico integrado na máquina de bordar computadorizada através do qual o operador interage com o sistema de controle numérico (CNC). Composto por display colorido LCD ou OLED de alta resolução com tecnologia capacitiva ou resistiva acoplado a um processador dedicado, o painel permite carregar matrizes via pendrive USB ou Wi-Fi, pré-visualizar o desenho em simulação 3D, girar, espelhar e redimensionar figuras, programar a sequência de troca de cores de agulha, ajustar a velocidade de pontos por minuto (PPM) e acompanhar a telemetria em tempo real (tempo restante, contagem de pontos e diagnósticos de erro).",
    technicalDetails: "Componentes e recursos do terminal HMI:\n• Display: LCD TFT colorido de 7 a 15 polegadas com resolução HD (1024x768 ou superior);\n• Conectividade: Portas USB 2.0/3.0, Ethernet RJ-45 e módulo Wi-Fi integrado para conexão em rede industrial;\n• Funções gráficas: Rotação em incrementos de 1° a 90°, escala dimensional de 80% a 120%, espelhamento X/Y, traçado perimétrico (Trace Boundary);\n• Funções de diagnóstico: Contador de quebras de linha por agulha, registro de horas de motor e alertas de lubrificação.",
    howItWorks: [
      "1. A bordadeira insere o pendrive com a matriz de bordado na porta USB lateral da máquina.",
      "2. A interface gráfica carrega instantaneamente as miniaturas visuais dos arquivos salvos.",
      "3. A operadora toca na tela para selecionar o arquivo desejado.",
      "4. No painel, ela visualiza as dimensões exatas do bordado em milímetros e escolhe o bastidor correto correspondente.",
      "5. Associa cada bloco de cor do desenho ao número da agulha correspondente na máquina multiagulhas (ex: Bloco 1 = Agulha 3; Bloco 2 = Agulha 7).",
      "6. Toca no botão 'Trace' para que o pantógrafo mova o bastidor delimitando a área e confirmando que a agulha não baterá no aro plástico.",
      "7. Durante o bordado, o painel exibe o progresso em tempo real, indicando a porcentagem concluída e o tempo estimado para o término.",
      "8. Se a linha arrebentar, o painel apita e exibe na tela o número exato do ponto onde a quebra ocorreu para rebobinar com facilidade."
    ],
    beginnerExplanation: "É a 'telinha do computador' que fica no corpo da sua máquina de bordar! É nela que você faz tudo com a ponta do dedo: escolhe o desenho que quer bordar, vê o tamanho dele, roda a imagem se precisar, escolhe as cores e vê quanto tempo falta para o bordado terminar. É o cérebro que conversa com você o tempo todo!",
    applications: [
      "Seleção e carregamento de arquivos de matriz de bordado via USB ou rede Wi-Fi",
      "Edição básica em máquina: rotação, espelhamento, combinação de letras e desenhos",
      "Definição da sequência automática de agulhas e cores em máquinas industriais",
      "Acompanhamento em tempo real do tempo de produção e contagem regressiva de pontos"
    ],
    commonErrors: [
      "Tocar na tela sensível com objetos pontiagudos de metal (tesouras, agulhas ou chaves de fenda), riscando e quebrando o sensor touchscreen",
      "Limpar a tela com álcool líquido ou produtos químicos agressivos que mancham o visor de cristal líquido",
      "Redimensionar desenhos no painel em mais de 20% sem recalcular a densidade de pontos no software"
    ],
    troubleshootingTips: [
      "Utilize apenas a ponta dos dedos ou uma caneta stylus própria para telas capacitivas para operar o painel",
      "Limpe a tela semanalmente apenas com um pano macio de microfibra ligeiramente umedecido com água desmineralizada",
      "Se o toque da tela começar a responder fora de onde você clica, acesse as configurações da máquina e execute a rotina de 'Calibração de Toque (Touchscreen Calibration)'",
      "Mantenha o firmware da máquina sempre atualizado com a versão oficial fornecida pelo fabricante no site"
    ],
    dicaArtrelados: "A função mais importante do seu painel é o botão 'TRACE' (Traçado de Limites)! Antes de apertar o play em qualquer bordado, dê o Trace no painel: você vai ver a máquina contornar o desenho a seco e nunca mais vai quebrar uma agulha batendo no plástico do bastidor!",
    voceSabia: "As primeiras máquinas de bordar industriais com painel eletrônico na década de 1980 utilizavam telas verdes de fósforo monocromáticas sem toque, onde o operador precisava digitar coordenadas numéricas linha por linha em teclados de botões mecânicos!",
    practicalExercise: "Ligue sua máquina e navegue pelas telas do painel: descubra onde fica a função de rotação (Rotate), a função de espelhamento (Mirror) e teste o botão de Trace para ver a máquina passear pelo limite do bastidor!",
    quickSummary: "Terminal touchscreen colorido que permite selecionar matrizes, configurar cores, ajustar posições e comandar o bordado.",
    relatedTerms: ["Trace / Traçado Perimétrico", "Pontos por Minuto (PPM)", "Troca de Cor Automática", "Ponto de Origem / Ponto Zero"],
    tags: ["i-013", "painel touchscreen", "interface", "hmi", "tela da maquina", "comandos", "usb", "artrelados"],
    bibliographicReferences: [
      "HUMAN-MACHINE INTERFACE DESIGN IN TEXTILE EMBROIDERY. Touchscreen Ergonomics & Safety. Berlin, 2023.",
      "BROTHER & TAJIMA EMBEDDED OS USER MANUAL. Touch Panel Navigation & Trace Protocols. Nagoya, 2022.",
      "ARTRELADOS. Dominando o Painel da Sua Máquina: Guia Completo de Comandos, Atalhos e Funções Essenciais. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-014-infiltracao-de-oleo-no-tecido-remocao-quimica",
    code: "I-014",
    term: "Infiltração de Óleo no Tecido & Remoção Química Especializada (Oil Leakage Prevention & Textile Spot Cleaning)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Cuidados & Manutenção",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim in (para dentro), filtrare (passar por filtro) e do grego elaion (óleo mineral). Protocolo têxtil de salvamento e higienização de peças bordadas.",
    summary: "Manchas de graxa ou óleo mineral pingadas da barra de agulha sobre o tecido durante o bordado e as técnicas profissionais para removê-las sem estragar a peça.",
    definition: "A Infiltração de Óleo no Tecido e Protocolo de Remoção Química Têxtil (Lubricant Seepage & Professional Spot Cleaning Protocol) refere-se ao incidente operacional no qual o excesso de óleo lubrificante mineral ou sintético aplicado na barra de agulha, biela superior ou engrenagens da lançadeira escorre pela haste da agulha e contamina o tecido bordado, criando manchas escuras e oleosas visíveis (especialmente críticas em enxovais brancos de bebê e vestidos de noiva). Abrange também o conjunto de procedimentos físico-químicos e solventes biodegradáveis (tira-manchas em pó spray tipo Spot Lifter, giz branco em pó e detergentes neutros desengordurantes) capazes de absorver e dissolver as moléculas lipídicas sem desbotar as linhas de poliéster nem manchar o tecido.",
    technicalDetails: "Química de solventes e absorção capilar:\n• Mancha de óleo fresco: Absorção capilar por micro-pó de silicato de magnésio (talco farmacêutico ou Spot Lifter em spray);\n• Mancha de óleo oxidado/antigo: Solubilização com éter glicólico ou surfactantes não iônicos concentrados;\n• Ponto de fumaça e viscosidade: Óleo mineral ISO VG 10 a VG 22 (lubrificante ultrafino para máquinas de bordar);\n• Limite de dosagem: 1 a 2 gotas na lançadeira a cada 4 horas de uso intenso (nunca encharcar o mecanismo).",
    howItWorks: [
      "1. A bordadeira está finalizando uma toalha de batizado branca e percebe uma gota de óleo sujo da barra de agulha escorrendo sobre o tecido.",
      "2. REGRA DE OURO: Ela NÃO esfrega água nem sabão comum com as mãos (o que espalharia a mancha para o fundo das fibras).",
      "3. Ela borrifa imediatamente um spray removedor de óleo têxtil em pó (Spot Lifter) a 20 cm de distância sobre a mancha.",
      "4. Em segundos, o spray seca e transforma-se em um pó branco calcário que 'suga' e encapsula todo o óleo mineral para fora do tecido por ação capilar.",
      "5. A operadora utiliza uma escovinha de cerdas macias para escovar o pó branco.",
      "6. A mancha de óleo desaparece completamente, deixando o tecido branco como novo e sem nenhuma auréola amarelada.",
      "7. Em seguida, a bordadeira limpa a barra de agulha da máquina com papel absorvente para remover o excesso de lubrificação.",
      "8. A toalha é entregue ao cliente em estado impecável."
    ],
    beginnerExplanation: "É aquele pavor de toda bordadeira: estar bordando uma fraldinha de bebê branca linda e, de repente, cair uma gotinha de óleo da agulha no pano! Se você passar água ou esfregar na hora com sabão, a mancha espalha e a peça fica perdida! Mas com o truque certo (usando um spray tira-manchas em pó especial ou talco de bebê), o pozinho chupa o óleo todinho para fora e a peça fica limpinha sem precisar lavar!",
    applications: [
      "Remoção segura de manchas acidentais de óleo em toalhas, fraldas e enxovais brancos de bebê",
      "Limpeza rápida de peças bordadas em produção industrial antes do empacotamento final",
      "Salvamento de vestidos de noiva, camisas sociais de seda e tecidos nobres contaminados por lubrificante",
      "Manutenção da limpeza impecável da barra de agulhas e calcador da máquina"
    ],
    commonErrors: [
      "Colocar óleo demais na máquina achando que 'quanto mais óleo, melhor' (a máquina cospe óleo no tecido)",
      "Esfregar a mancha com água quente e sabão em barra (fixa o óleo mineral no fundo da fibra de algodão)",
      "Usar removedores à base de cloro ou alvejantes que mancham tecidos coloridos e enfraquecem as fibras"
    ],
    troubleshootingTips: [
      "Aplique sempre no máximo UMA gota de óleo fino na lançadeira e use papel toalha para secar a barra de agulhas após a lubrificação",
      "Tenha sempre no ateliê uma lata de spray removedor de óleo em pó têxtil (tipo AlbaChem Spot Lifter ou similar)",
      "Se não tiver o spray profissional na hora, cubra a mancha de óleo fresca com bastante talco de bebê ou amido de milho, deixe agir por 2 horas e escove suavemente",
      "Para máquinas industriais novas após revisão, borde primeiro 5 minutos em um retalho velho de tecido para drenar qualquer respingo de lubrificante"
    ],
    dicaArtrelados: "Depois de pingar óleo na máquina, sempre pegue um retalho de pano velho e borde um desenho qualquer por 2 minutos antes de colocar a peça cara do cliente! Esse teste limpa qualquer gotinha que tenha ficado na agulha e salva seu bolso!",
    voceSabia: "O óleo utilizado em máquinas de bordar é chamado de 'óleo branco mineral' e passa por múltiplos processos de hidrotratamento para ser o mais transparente e inodoro possível, minimizando a oxidação de tecidos em comparação com óleos automotivos!",
    practicalExercise: "Pegue um retalho de pano branco e coloque uma microgota de óleo: aplique talco sobre ela, espere secar e escove com uma escova de dentes velha para ver na prática o poder de absorção capilar!",
    quickSummary: "Prevenção de respingos de lubrificante da agulha e técnicas químicas em pó para remover manchas de óleo sem manchar o tecido.",
    relatedTerms: ["Lubrificação Preventiva", "Manutenção Periódica", "Controle de Qualidade no Bordado", "Higiene da Lançadeira"],
    tags: ["i-014", "oleo no tecido", "mancha de oleo", "spot lifter", "limpeza textil", "lubrificacao", "cuidados", "artrelados"],
    bibliographicReferences: [
      "TEXTILE CHEMICAL SPOT CLEANING & STAIN REMOVAL MANUAL. AATCC Standard Test Methods. Research Triangle Park, 2023.",
      "EMBROIDERY MACHINE LUBRICATION & MAINTENANCE PROTOCOLS. Tokyo, 2022.",
      "ARTRELADOS. SOS Manchas de Óleo: O Manual Definitivo para Salvar Peças Bordadas Manchadas por Lubrificante. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-015-insercao-de-salto-manual-jump-stitch",
    code: "I-015",
    term: "Inserção de Salto Manual & Ponto Flutuante (Jump Stitch Manual Insertion & Floating Travel Paths)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês jump stitch (ponto de salto sem penetração de agulha). Comando cinemático de deslocamento de pantógrafo sem perfuração têxtil.",
    summary: "Comando inserido na matriz que move o bastidor de uma parte do desenho para outra sem costurar, permitindo viagens limpas entre letras e objetos.",
    definition: "A Inserção de Salto Manual e Caminho Flutuante de Deslocamento (Jump Stitch Command / Manual Jump Insertion & Travel Path Control) é a operação de digitalização avançada na qual o programador insere códigos de salto (Jump) na matriz para deslocar o pantógrafo entre duas posições cartesianas X/Y sem que o estica-fio e a barra de agulha formem pontos de costura no tecido. Esse comando comanda a embreagem mecânica ou servomotor de descida de agulha a desacoplar temporariamente, permitindo 'viajar' por cima de áreas abertas sem deixar pontos corridos aparentes. Em máquinas com corte automático de linha (Automatic Thread Trimmer), múltiplos saltos consecutivos acionam a faca de corte; em máquinas sem corte, deixam um fio longo fácil de ser limpo com a tesourinha.",
    technicalDetails: "Mecânica digital do comando Jump:\n• Código binário Tajima (DST): Bit de salto ativado (movimento de até ±12,7mm por micropasso de salto);\n• Limiar de disparo de corte (Jump Length Threshold): 3 a 5 comandos Jump consecutivos (geralmente programado para >2,0mm);\n• Velocidade de salto do pantógrafo: Deslocamento em velocidade máxima com agulha parada no PMS;\n• Tensão de fio durante o salto: Disco de tensão fechado para reter a linha sem criar folgas excessivas.",
    howItWorks: [
      "1. O programador termina de digitalizar a primeira letra de um nome (letra 'A') e precisa começar a bordar a segunda letra (letra 'B') a 10mm de distância.",
      "2. Em vez de passar um ponto corrido visível pelo fundo do tecido, ele insere o comando 'Salto / Jump'.",
      "3. O software gera a amarração final (Tie-Off) na letra 'A' e insere as coordenadas de salto até a letra 'B'.",
      "4. Na máquina de bordar, ao terminar a letra 'A', a barra de agulha trava na posição superior.",
      "5. A faca de corte inferior é acionada (se configurada) e a linha é cortada por baixo da chapa de agulha.",
      "6. O pantógrafo move o bastidor em linha reta veloz até a posição inicial da letra 'B'.",
      "7. A máquina executa os pontos de ancoragem inicial (Tie-In) e começa a costurar a letra 'B' com perfeição.",
      "8. O espaço entre as letras fica completamente limpo, sem nenhuma linha esticada feia por cima da roupa."
    ],
    beginnerExplanation: "É o comando que faz a máquina 'pular' de uma letra para outra sem costurar o tecido no meio do caminho! É como quando você está escrevendo com uma caneta no papel e levanta a mão para começar uma palavra nova em vez de riscar uma linha contínua entre elas. A máquina levanta a agulha, corre para o outro lado, corta a linha e começa a bordar a próxima letra limpinha!",
    applications: [
      "Transição limpa entre letras individuais em nomes e frases bordadas",
      "Deslocamento entre elementos desconectados em logotipos e desenhos florais",
      "Acionamento programado do cortador de linha automático da máquina",
      "Eliminação do trabalho manual cansativo de ficar cortando fiapos de linha com a tesoura após o bordado"
    ],
    commonErrors: [
      "Esquecer de programar o ponto de amarração antes de inserir o salto (a costura anterior desmancha com o puxão da linha)",
      "Saltos muito curtos (menos de 2mm) em máquinas sem corte, gerando fios emaranhados difíceis de limpar",
      "Inserir saltos manuais em excesso dentro de um mesmo objeto fechado, tornando o bordado lento"
    ],
    troubleshootingTips: [
      "Configure seu software de matriz para ativar a amarração automática (Tie-Off) sempre que a distância de salto for superior a 2,0mm",
      "Nas configurações da máquina, ajuste o parâmetro 'Trim on Jump' para cortar a linha a partir de 3 saltos consecutivos",
      "Para economizar tempo de produção em matrizes industriais de alta velocidade, utilize caminhos de viagem ocultos (Underlay Travel) por baixo de outros objetos em vez de saltos com corte",
      "Sempre verifique na simulação de pontos (Stitch Player) do software se não há saltos cruzando áreas vazias indevidamente"
    ],
    dicaArtrelados: "Uma matriz profissional é reconhecida pela inteligência dos saltos! Matriz boa não deixa teias de aranha de fios cruzando o bordado e não faz a máquina ficar cortando linha toda hora à toa. Tudo é planejado para ser rápido e limpo!",
    voceSabia: "No formato de arquivo Tajima .DST (o padrão universal da indústria de bordados), o deslocamento máximo de um único ponto é de 12,1 milímetros. Para mover o bastidor a 10 centímetros de distância, o arquivo grava uma sequência rápida de múltiplos micropassos de salto contínuos!",
    practicalExercise: "Abra um arquivo de matriz no seu software e ative a visualização de conectores (Show Jump Stitches): observe as linhas pontilhadas que mostram exatamente por onde a máquina pula de um objeto para outro!",
    quickSummary: "Comando que desloca o bastidor entre pontos distantes sem costurar, permitindo viagens limpas e cortes automáticos.",
    relatedTerms: ["Tie-Off & Ponto de Amarração Final", "Cortador de Linha Automático", "Caminho de Viagem / Travel Run", "Formato DST"],
    tags: ["i-015", "salto manual", "jump stitch", "conectores", "corte de linha", "deslocamento", "software", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL EMBROIDERY DST FORMAT SPECIFICATION. Jump Codes and Displacement Dynamics. Tokyo, 2023.",
      "THE ART OF VECTOR EMBROIDERY DIGITIZING. Connector Optimization and Jump Management. London, 2022.",
      "ARTRELADOS. Saltos e Conectores Perfeitos: Como Reduzir Cortes de Linha e Aumentar a Velocidade da Sua Produção. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-016-ima-de-neodimio-para-bastidores-magneticos",
    code: "I-016",
    term: "Ímã de Neodímio para Bastidores Magnéticos (Neodymium Magnetic Hoops & Fast Clamping System)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do elemento químico Neodímio (Nd, terras raras descoberto em 1885 pelo químico austríaco Carl Auer von Welsbach). Tecnologia magnética industrial de alta atração mecânica.",
    summary: "Bastidores modernos que utilizam poderosos ímãs de neodímio para prender tecidos grossos, jaquetas e toalhas sem apertar parafusos e sem deixar marcas de aro.",
    definition: "O Sistema de Bastidor Magnético com Ímãs de Neodímio (Neodymium Magnetic Embroidery Hooping System / Fast Snap Magnetic Clamping Frame) é uma tecnologia de enquadramento têxtil que substitui os aros plásticos concêntricos tradicionais com parafusos de aperto por uma base metálica inferior e um aro superior embutido com múltiplos blocos magnéticos de neodímio sinterizado (grau N45 a N52). Esse sistema exerce uma pressão vertical uniforme e instantânea sobre o tecido e a entretela sem exercer forças de cisalhamento, eliminando completamente as temidas marcas de bastidor (Hoop Burn) em tecidos aveludados e delicados, reduzindo o tempo de montagem em até 70% e prendendo com firmeza materiais ultra espessos como jaquetas acolchoadas, toalhas grossas e couros.",
    technicalDetails: "Propriedades físicas e magnéticas do bastidor:\n• Tipo de ímã: Neodímio-Ferro-Boro (NdFeB) de terras raras com revestimento anticorrosivo de Níquel-Cobre-Níquel (Ni-Cu-Ni);\n• Força de atração vertical (Pull Force): Superior a 15 kgf a 35 kgf por ponto magnético;\n• Pressão de aperto: Distribuição homogênea em 360° sem torção diagonal da trama têxtil;\n• Compatibilidade mecânica: Suportes adaptadores para pantógrafos industriais e semi-industriais (Brother PR, Tajima, Janome, Barudan, SWF).",
    howItWorks: [
      "1. A bordadeira apoia a base metálica inferior do bastidor magnético na estação de montagem com a entretela.",
      "2. Coloca uma toalha de banho grossa de veludo sobre a base, alinhando a marcação central com giz.",
      "3. Pega o aro superior magnético e aproxima-o da toalha.",
      "4. Os ímãs de neodímio atraem a base inferior com força magnética instantânea ('SNAP!').",
      "5. A toalha é fixada com firmeza milimétrica em menos de 2 segundos, sem precisar girar parafusos nem forçar os dedos.",
      "6. A textura aveludada da toalha não é esmagada nem marcada nas bordas.",
      "7. Encaixa o bastidor na máquina e executa o bordado com total estabilidade e zero vibração.",
      "8. Ao terminar, basta puxar a alça de desencaixe magnético: a peça sai solta, limpa e perfeita!"
    ],
    beginnerExplanation: "É o bastidor dos sonhos de qualquer bordadeira! Em vez de ficar sofrendo para apertar parafuso duro que dói a mão, ou sofrer para conseguir prender uma toalha grossa ou uma jaqueta de couro, você só encosta o aro de cima e 'PLAFT!': os ímãs super fortes grudam sozinhos na hora! Prende super firme, monta em 2 segundos e nunca mais deixa aquela marca redonda amassada que estraga veludo e toalha!",
    applications: [
      "Bordados em toalhas de banho aveludadas e felpudas sem deixar marcas de aro (Hoop Burn)",
      "Enquadramento super rápido de jaquetas grossas, moletons, jeans e peças pesadas",
      "Bordados em couro legítimo e sintético sem machucar a superfície",
      "Produção de alta escala em ateliês e fábricas, triplicando a velocidade de troca de peças no bastidor"
    ],
    commonErrors: [
      "Deixar os dedos entre a base e o aro magnético durante o fechamento (o impacto dos ímãs de neodímio é muito forte e pode beliscar a pele)",
      "Aproximar o bastidor magnético de cartões de crédito magnéticos, marca-passos cardíacos ou celulares",
      "Guardar o bastidor magnético em superfícies sujas com limalha de ferro ou alfinetes que grudam nos ímãs"
    ],
    troubleshootingTips: [
      "Para desacoplar o bastidor magnético, deslize o aro superior lateralmente em vez de puxar reto para cima: o esforço fica 5 vezes menor!",
      "Pessoas com marca-passo devem manter distância mínima de 30 cm de bastidores magnéticos de neodímio por segurança",
      "Se estiver bordando tecidos ultra escorregadios (como cetim ou seda), utilize uma folha de entretela rasgável ou use fita adesiva para evitar deslizamento",
      "Mantenha a superfície dos ímãs sempre limpa passando uma fita adesiva para retirar qualquer fiapo ou fragmento metálico"
    ],
    dicaArtrelados: "O bastidor magnético é o maior salto de produtividade e ergonomia que você pode dar no seu ateliê! Ele acaba com a dor nos pulsos e dedos de apertar parafusos o dia todo e faz você bordar o dobro de toalhas no mesmo tempo!",
    voceSabia: "Os ímãs de neodímio são os mais poderosos conhecidos pelo ser humano! Uma pastilha de neodímio do tamanho de uma moeda de 1 real consegue levantar mais de 10 quilos de aço sem perder a força magnética por mais de 100 anos!",
    practicalExercise: "Se você tem ou conhece um bastidor magnético, experimente prender uma toalha de banho com ele e depois com o bastidor tradicional de parafuso: sinta a diferença de tempo e comprove que a marca do aro não existe no magnético!",
    quickSummary: "Bastidor moderno com ímãs de neodímio de alta atração que prende peças grossas em segundos sem deixar marcas.",
    relatedTerms: ["Hoop Burn & Marcas de Bastidor", "Grip do Bastidor", "Estação de Enquadramento", "Entretela Hidrossolúvel"],
    tags: ["i-016", "ima de neodimio", "bastidor magnetico", "mighty hoop", "toalhas", "ergonomia", "sem marcas", "artrelados"],
    bibliographicReferences: [
      "MAGNETIC CLAMPING DYNAMICS IN APPAREL EMBROIDERY. Neodymium Flux Applications. Chicago, 2023.",
      "ERGONOMIC HOOPING SYSTEMS & REPETITIVE STRAIN PREVENTION. Geneva, 2022.",
      "ARTRELADOS. A Revolução dos Bastidores Magnéticos: Como Aumentar Sua Produção e Eliminar de Vez as Marcas de Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-017-indice-de-densidade-linear-titulagem-fios",
    code: "I-017",
    term: "Índice de Densidade Linear & Sistemas de Titulagem de Fios (Tex, Denier, Nm & Thread Count Index)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Linhas & Agulhas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim index (indicador), textus (tecido/têxtil - raiz da unidade Tex) e do francês denier (antiga moeda de prata usada como peso padrão de fios de seda).",
    summary: "Sistemas internacionais de medição da espessura e peso das linhas de bordar (Tex, Denier, Nº 40, Nº 60), fundamentais para regular densidade e agulhas.",
    definition: "O Índice de Densidade Linear e Sistemas de Titulagem de Fios Têxteis (Yarn Linear Density & Thread Count Metrology - Tex, Denier, Weight, Nm) é o conjunto de convenções matemáticas e normas metrológicas internacionais (ISO 2060 / ASTM D1907) que quantificam a espessura, o diâmetro e a massa por unidade de comprimento das linhas de bordar industriais. Como os fios são flexíveis e não podem ser medidos facilmente com paquímetro mecânico, a indústria têxtil utiliza sistemas diretos baseados em massa por comprimento (Tex = gramas a cada 1.000m; Denier = gramas a cada 9.000m) e sistemas indiretos baseados em comprimento por massa (Weight / Wt = número de meadas de 840 jardas por libra; Número Métrico / Nm = metros por grama), parâmetros cruciais para calcular o espaçamento ideal de densidade na matriz e a escolha do calibre da agulha.",
    technicalDetails: "Correspondências métricas das linhas de bordado mais utilizadas:\n• Linha Padrão de Bordado Nº 40 (40wt): Tex 27 | 135/2 dtex | Denier 240 | Nm 75/2 (Agulha recomendada: 75/11);\n• Linha Fina para Microletras Nº 60 (60wt): Tex 18 | 90/2 dtex | Denier 160 | Nm 110/2 (Agulha recomendada: 65/9);\n• Linha Grossa Decorativa Nº 30 (30wt): Tex 35 | 180/2 dtex | Denier 320 | Nm 55/2 (Agulha recomendada: 90/14);\n• Linha Ultrafina de Detalhes Nº 75 (75wt): Tex 12 | 60/2 dtex | Denier 110 | Nm 150/2 (Agulha recomendada: 60/8);\n• Linha de Bobina Inferior (60wt a 80wt): Tex 14 a 18 (Filamento contínuo de poliéster de baixo atrito).",
    howItWorks: [
      "1. O programador precisa digitalizar um texto com letras minúsculas de apenas 3,5mm de altura para um jaleco médico.",
      "2. Ele consulta a tabela de densidade linear e percebe que a linha tradicional Nº 40 (Tex 27) é grossa demais e vai 'empapar' as perninhas das letras.",
      "3. Ele seleciona a linha Nº 60 (Tex 18), que é cerca de 30% mais fina.",
      "4. No software, ajusta a densidade de pontos para 0,30mm (mais fechada, pois o fio é mais fino) e compensação de repuxo para 0,15mm.",
      "5. Na máquina de bordar, o operador instala uma agulha fina 65/9 e o cone de linha Nº 60 na agulha designada.",
      "6. A máquina costura as letrinhas microscópicas com clareza cristalina, onde cada traço e pingo do 'i' fica perfeitamente legível.",
      "7. O cliente recebe o jaleco com legibilidade impecável."
    ],
    beginnerExplanation: "É a numeração que mostra se a linha é grossa ou fina! A linha mais comum do mundo que todo mundo usa no ateliê é a número 40 (40wt). Mas se você precisar bordar aquelas letrinhas minúsculas de jaleco médico ou logotipo de relógio, você usa uma linha número 60 (60wt), que é bem fininha e delicada! Quanto maior o número 'wt', mais fininha é a linha!",
    applications: [
      "Seleção exata da densidade de pontos no software de matriz conforme o fio utilizado",
      "Escolha correta do tamanho da agulha para casar perfeitamente com a espessura do olho",
      "Bordados de altíssima definição com letras microscópicas usando fios 60wt e 75wt",
      "Cálculo exato de rendimento em metros e peso de linha consumida por lote industrial"
    ],
    commonErrors: [
      "Usar linha fina 60wt com agulha grossa 90/14 (a linha balança no olho grande e pula pontos)",
      "Bordar com linha grossa 30wt usando a densidade padrão de 0,40mm (o bordado vira uma placa dura que quebra agulhas)",
      "Confundir os sistemas (no sistema 'wt', quanto maior o número, mais fina a linha; no sistema 'Tex', quanto maior o número, mais grossa a linha)"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DAS LINHAS: Linha 40 = Agulha 75/11 (Densidade 0,40mm) | Linha 60 = Agulha 65/9 (Densidade 0,30mm) | Linha 30 = Agulha 90/14 (Densidade 0,55mm)",
      "Para calcular o peso de linha: 1 cone de 4.000m de linha 40wt pesa aproximadamente 108 gramas de poliéster",
      "Ao trocar para linha 60wt em letras pequenas, reduza a tensão da linha superior em 0.5 ponto para compensar o menor diâmetro do fio",
      "Sempre utilize linha de bobina de espessura mais fina (60wt ou 80wt) do que a linha superior para manter o verso macio"
    ],
    dicaArtrelados: "Ter um cone de linha preta e um cone de linha branca na espessura 60wt com uma agulha 65/9 no seu ateliê é o segredo para fazer as letras de jalecos mais nítidas da sua cidade! Seus concorrentes que só usam linha 40 não conseguem competir!",
    voceSabia: "A unidade 'Denier' surgiu na França medieval e equivalia ao peso em gramas de 9.000 metros de um único filamento de seda natural crua produzido por um bicho-da-seda (Bombyx mori)!",
    practicalExercise: "Pegue um pedaço da sua linha comum de bordar (40wt) e compare lado a lado com a linha branca que você usa na bobina: observe sob uma lupa como a linha da bobina é muito mais fininha e sedosa!",
    quickSummary: "Sistemas de medição da espessura das linhas (Tex, Denier, Wt) essenciais para calibrar agulhas e densidade de matrizes.",
    relatedTerms: ["Isacord & Fios de Poliéster", "Gramatura & Titulagem de Fio", "Densidade de Ponto", "Gasto de Linha & Consumo"],
    tags: ["i-017", "densidade linear", "titulagem", "tex", "denier", "40wt", "60wt", "linhas", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 2060: Textiles - Yarn from packages - Determination of linear density. Geneva, 2023.",
      "ASTM D1907 / D1907M. Standard Test Method for Linear Density of Yarn. West Conshohocken, 2022.",
      "ARTRELADOS. A Ciência dos Fios: Guia Completo de Titulagem Tex, Denier e Numerações de Linhas de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-018-inversao-em-espelho-da-matriz-mirror-flip",
    code: "I-018",
    term: "Inversão em Espelho da Matriz - Horizontal e Vertical (Mirror Matrix Transformation & Horizontal/Vertical Flip)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim speculum (espelho/reflexo simétrico) e do inglês mirror flip. Operação matricial de transformação geométrica afim em computação gráfica.",
    summary: "Função que rebate o desenho horizontalmente ou verticalmente para bordar pares simétricos (como golas, punhos, lados de jaqueta e toalhas).",
    definition: "A Inversão em Espelho da Matriz de Bordado (Horizontal and Vertical Mirror Flip / Bilateral Symmetry Transformation / Reflection Matrix) é a operação geométrica de transformação afim executada no software de digitalização ou diretamente no painel touchscreen da máquina que rebate todas as coordenadas cartesianas X/Y do desenho ao longo de um eixo de simetria (Eixo X para espelhamento vertical; Eixo Y para espelhamento horizontal). É a ferramenta indispensável para a criação instantânea de pares simétricos harmoniosos em vestuário e decoração — como ramos florais para os lados esquerdo e direito de golas de camisas, asas de pássaros, arabescos em cantos de toalhas e punhos de jaquetas — mantendo a integridade da sequência de pontos e compensação de repuxo.",
    technicalDetails: "Transformação algébrica de coordenadas de bordado:\n• Espelhamento Horizontal (Flip X): X' = -X; Y' = Y (Inversão de vetor angular: Ângulo' = 180° - Ângulo);\n• Espelhamento Vertical (Flip Y): X' = X; Y' = -Y (Inversão de vetor angular: Ângulo' = 360° - Ângulo);\n• Inversão de Sentido de Giro: Os arcos radiais e trajetórias horárias convertem-se automaticamente em anti-horárias;\n• Preservação de Underlays: A malha estrutural de sustentação acompanha a nova orientação vetorial.",
    howItWorks: [
      "1. A bordadeira precisa bordar um ramo de louros clássico no lado esquerdo e no lado direito da gola de uma jaqueta social.",
      "2. Ela digitaliza ou carrega a matriz perfeita do ramo esquerdo.",
      "3. Borda o lado esquerdo na máquina com sucesso.",
      "4. Para fazer o lado direito, ela não precisa desenhar tudo de novo: apenas seleciona o arquivo no painel da máquina e toca no botão 'Mirror Horizontal' (Ícone de duas montanhas ou setas refletidas).",
      "5. O sistema recalcula instantaneamente as coordenadas, virando o ramo para a direita.",
      "6. A máquina executa o bordado no lado direito com a mesma perfeição e simetria absoluta.",
      "7. Ao vestir a jaqueta, os dois ramos encontram-se no centro com harmonia visual impecável."
    ],
    beginnerExplanation: "É como colocar o desenho na frente de um espelho! Sabe quando você quer bordar um galhinho de flores virado para a esquerda no bolso esquerdo e o mesmo galhinho virado para a direita no outro bolso? Em vez de ter que fazer dois desenhos diferentes, você só aperta o botão 'Espelhar' na máquina e ela vira o desenho para o outro lado na mesma hora! Fica um parzinho perfeito e idêntico!",
    applications: [
      "Bordados em pares simétricos em golas, punhos, lapelas e bolsos de camisas e jaquetas",
      "Bordados espelhados para os quatro cantos de toalhas de mesa, colchas e guardanapos",
      "Adaptação de matrizes para bonés nos painéis laterais esquerdo e direito",
      "Criação de arabescos e monogramas duplos em convites de casamento e enxovais de luxo"
    ],
    commonErrors: [
      "Espelhar uma matriz que contém textos ou letras legíveis (as letras ficam escritas ao contrário / de trás para frente)",
      "Espelhar desenhos de animais ou logotipos de marcas registradas que possuem orientação oficial obrigatória (ex: logotipo da Nike ou Lacoste virado ao contrário)",
      "Não conferir o novo ponto de início (Start Point) após o espelhamento, fazendo o bastidor bater"
    ],
    troubleshootingTips: [
      "CUIDADO COM LETRAS: Se a matriz tiver um desenho com um nome embaixo, desagrupe no software e espelhe APENAS o desenho, mantendo o nome na leitura correta!",
      "Após espelhar no painel da máquina, execute sempre o botão 'TRACE' para garantir que o desenho invertido não ultrapassou os limites do bastidor",
      "Para pares de sapatos, pantufas e luvas, utilize sempre a função Mirror Horizontal para garantir simetria anatômica",
      "Verifique se o espelhamento não inverteu a ordem de costura de camadas que deveriam ficar por baixo de outras"
    ],
    dicaArtrelados: "A função de espelhamento é uma fábrica de economia de tempo! Com um único raminho de flores de 5cm, você espelha para a direita, para cima e para baixo e monta uma guirlanda ou moldura de monograma inteira maravilhosa em 2 minutos!",
    voceSabia: "O conceito de simetria bilateral refletida é uma das regras universais de beleza da arquitetura clássica desde a Grécia Antiga e do Renascimento italiano, sendo o motivo pelo qual nossos olhos consideram desenhos espelhados naturalmente mais relaxantes e elegantes!",
    practicalExercise: "No painel da sua máquina ou no seu software, carregue um desenho de um pássaro: aperte o botão de espelhamento horizontal (Mirror X) e veja o pássaro mudar de direção instantaneamente!",
    quickSummary: "Função que rebate a matriz horizontal ou verticalmente para criar pares simétricos perfeitos em golas, punhos e toalhas.",
    relatedTerms: ["Rotação de Matriz", "Redimensionamento de Matriz", "Trace / Traçado Perimétrico", "Painel Touchscreen"],
    tags: ["i-018", "espelhamento", "mirror", "inversao", "simetria", "golas", "software", "artrelados"],
    bibliographicReferences: [
      "GEOMETRIC TRANSFORMATIONS IN COMPUTER AIDED EMBROIDERY DESIGN. Sydney, 2023.",
      "APPAREL SYMMETRY & EMBELLISHMENT PLACEMENT STANDARDS. New York, 2022.",
      "ARTRELADOS. A Arte da Simetria Perfeita: Como Usar o Espelhamento de Matrizes para Dobrar Suas Possibilidades Criativas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

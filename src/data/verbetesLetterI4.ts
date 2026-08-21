import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART4: Verbete[] = [
  {
    id: "i-019-intercalamento-de-pontos-em-degrade-color-blending",
    code: "I-019",
    term: "Intercalamento de Pontos em Degradê & Fusão Cromática (Stitch Interleaving & Blended Gradient Fills)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim intercalare (inserir entre outros elementos) e do francês dégradé (transição suave de tons). Técnica de transição cromática na digitalização de matrizes realistas.",
    summary: "Técnica de misturar duas ou mais cores de linhas penteando os pontos com densidades variáveis para criar sombras e transições de cor suaves e realistas.",
    definition: "O Intercalamento de Pontos em Degradê e Fusão Cromática de Camadas (Stitch Interleaving / Color Blending & Feathered Gradient Fill) é o método avançado de digitalização pictórica no qual o programador sobrepõe duas ou mais camadas de preenchimento (Tatami ou Ponto Cheio com bordas plumadas / Feather Edge) com comprimentos de ponto irregulares e gradientes de densidade decrescente e crescente opostos (ex: a primeira cor começa densa a 0,40mm e vai abrindo até 1,80mm; a segunda cor começa aberta a 1,80mm e vai fechando até 0,40mm). Esse entrelaçamento óptico e físico de filamentos de cores distintas engana o olho humano pelo princípio da síntese aditiva visual (Pontilhismo / Efeito Dithering), gerando transições suaves, sombras hiper-realistas, pelagens de animais e pôr do sol sem linhas duras de separação.",
    technicalDetails: "Arquitetura do algoritmo de degradê:\n• Gradiente de densidade linear / exponencial: Variação contínua de 0,35mm a 2,50mm de espaçamento entre linhas de ponto;\n• Bordas Plumadas (Feathered Edges): Variação pseudoaleatória do comprimento das extremidades de 20% a 80% para eliminar cortes retos;\n• Ângulo de costura: Ambas as camadas de cor devem compartilhar exatamente o mesmo ângulo vetorial (ex: ambas a 45°) para que os fios se aninhem paralelamente nas ranhuras vizinhas;\n• Ordem de camadas: Cores mais escuras por baixo e tons luminosos por cima para profundidade pictórica.",
    howItWorks: [
      "1. O digitalizador deseja criar o bico de um tucano com transição perfeita do vermelho vivo para o amarelo ouro.",
      "2. No software (como Wilcom Color Blending ou Hatch), ele desenha a forma geométrica do bico.",
      "3. Seleciona a ferramenta 'Mistura de Cores / Color Blend'.",
      "4. O software gera a primeira camada em linha vermelha com densidade que vai rareando gradualmente da esquerda para a direita.",
      "5. Em seguida, gera a segunda camada em linha amarela costurada logo por cima, que começa bem rala e vai ficando densa até a ponta direita.",
      "6. Na máquina de bordar, a agulha costura o vermelho e depois o amarelo no mesmo ângulo.",
      "7. Os fios amarelos e vermelhos se intercalam nas mesmas frestas do tecido.",
      "8. O resultado final visto a 30cm de distância é um degradê alaranjado e dourado deslumbrante, como uma pintura a óleo em fios.",
    ],
    beginnerExplanation: "É a técnica mágica de fazer duas cores de linha se misturarem suavemente como se fossem tinta de aquarela! Em vez de ter uma divisão dura e feia entre o vermelho e o amarelo, o programa 'penteia' os fios das duas cores juntos, deixando um fio vermelho, um amarelo, outro vermelho... De longe, o olho humano junta as duas cores e enxerga um degradê perfeito e natural de encher os olhos!",
    applications: [
      "Bordados hiper-realistas de animais (pelagem de cachorros, penas de pássaros, escamas de peixes)",
      "Pétalas de flores com transição suave de tons (ex: orquídeas, rosas e lírios)",
      "Cenas de paisagens com pôr do sol, céu degradê e reflexos na água",
      "Logotipos modernos e brasões que possuem efeitos de gradiente e iluminação brilhante"
    ],
    commonErrors: [
      "Usar ângulos de ponto diferentes nas duas camadas (os fios se cruzam como uma grade em vez de se misturarem suavemente)",
      "Colocar densidade máxima nas duas camadas (o bordado fica grosso como uma pedra e quebra a agulha)",
      "Não usar bordas plumadas (cria uma linha reta visível no meio da transição de cor)"
    ],
    troubleshootingTips: [
      "Mantenha SEMPRE o mesmo ângulo de ponto nas duas camadas que se misturam para que os filamentos fiquem paralelos",
      "A soma das densidades no centro do degradê não deve ultrapassar a densidade de um ponto comum (cerca de 0,40mm no total combinado)",
      "Utilize linhas de rayon/viscose ou poliéster brilhante para potencializar o reflexo luminoso do degradê",
      "Para transições entre 3 cores (ex: preto -> marrom -> bege), programe duas zonas de transição consecutivas"
    ],
    dicaArtrelados: "Dominar o degradê com mistura de cores é o passaporte para o topo da arte do bordado mundial! Uma matriz realista com degradê perfeito pode ser vendida por 5 a 10 vezes o valor de um bordado simples!",
    voceSabia: "A técnica de degradê no bordado eletrônico é a versão digital direta do 'Ponto Pintura / Ponto Matiz' (Needle Painting / Silk Shading), técnica artística desenvolvida na China Antiga durante a Dinastia Song (século X) para criar retratos imperiais com fios de seda ultrafinos!",
    practicalExercise: "No seu software de matriz, crie um retângulo de 8x4cm: aplique a ferramenta Color Blend entre azul marinho e azul celeste, borde em um retalho e veja o degradê suave nascer na sua máquina!",
    quickSummary: "Técnica de entrelaçamento de cores com densidades variáveis e bordas plumadas para criar degradês e sombras realistas.",
    relatedTerms: ["Ponto Matiz / Needle Painting", "Densidade de Ponto", "Bordas Plumadas / Feather Edge", "Paleta de Cores"],
    tags: ["i-019", "degrade", "color blend", "mistura de cores", "realismo", "ponto pintura", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM COLOR BLENDING & ARTISTIC PHOTO DIGITIZING GUIDE. Sydney, 2023.",
      "THE COMPLETE GUIDE TO NEEDLE PAINTING EMBROIDERY. London, 2022.",
      "ARTRELADOS. Pintura com Linhas: O Guia Definitivo para Criar Degradês e Efeitos Realistas no Software de Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-020-impressao-de-folha-de-producao-gabarito-tecnico",
    code: "I-020",
    term: "Impressão de Folha de Produção & Gabarito Técnico de Matriz (Worksheet Printout & Technical Production Sheet)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim impressio (marca impressa) e do grego technikos (relativo à arte/técnica). Documento padrão de controle de engenharia têxtil em chão de fábrica.",
    summary: "Folha impressa com o desenho em tamanho 1:1, sequência exata de cores, consumo de linha e tempo estimado que guia o operador na máquina.",
    definition: "A Impressão de Folha de Produção e Gabarito Técnico de Bordado (Embroidery Production Worksheet / Job Sheet & 1:1 Technical Template Printout) é o documento técnico padronizado gerado automaticamente pelo software de digitalização que acompanha a ordem de serviço em todas as etapas do ateliê ou chão de fábrica. Contendo a impressão visual do bordado em escala real 1:1 com cruzeta central para posicionamento físico sobre a peça, a folha detalha metadados críticos: dimensões em milímetros (largura x altura), contagem total de pontos, tempo estimado de máquina em diferentes velocidades PPM, sequência cronológica de trocas de cor com os números de referência dos cones (Pantone / Isacord / Madeira), consumo estimado de fio superior e de bobina, e área segura de bastidor.",
    technicalDetails: "Metadados essenciais presentes na folha técnica:\n• Escala de impressão: 100% (Escala 1:1 com mira central X=0, Y=0 para teste sobre a roupa);\n• Consumo de fio: Metros lineares por cor e consumo total de bobina inferior em gramas;\n• Sequência de paradas (Stop Sequence): Número do bloco de cor, nome da cor e código do cone de linha;\n• Dimensões e pontos: Ex: 98,5mm x 45,2mm | 12.450 pontos | 8 cores | 9 paradas;\n• Estimativa de tempo: Minutos calculados a 650 PPM, 750 PPM e 850 PPM.",
    howItWorks: [
      "1. Ao finalizar a programação da matriz no computador, o digitalizador clica em 'Imprimir Folha de Produção / Print Worksheet'.",
      "2. O documento é impresso em folha de papel A4 em tamanho 1:1 real.",
      "3. A bordadeira recebe a folha grampeada na ordem de serviço junto com a peça do cliente.",
      "4. Ela recorta o contorno do papel e posiciona o gabarito impresso sobre o peito da camisa do cliente para conferir com o cliente se a altura e a posição estão do agrado dele.",
      "5. A furação da cruzeta no papel marca o ponto central exato onde a agulha deve descer.",
      "6. Olhando para a tabela de cores na folha, a operadora separa rapidamente os cones de linha certos na estante sem errar os tons.",
      "7. Configura a sequência de agulhas no painel da máquina em segundos guiando-se pela lista da folha.",
      "8. Ao terminar, a peça bordada é inspecionada comparando-a diretamente com a folha de produção antes da embalagem.",
    ],
    beginnerExplanation: "É o 'mapa da mina' impresso no papel que o programa faz para você! Nele vem a foto do bordado no tamanho exatinho que vai sair na roupa, a listinha de todas as cores de linha que você vai precisar, quantos pontos o desenho tem e quanto tempo vai demorar para bordar. Você pode colocar essa folha em cima da camisa para ver se o tamanho vai ficar bonito no peito antes mesmo de gastar linha!",
    applications: [
      "Conferência visual de tamanho e proporção do bordado sobre a peça do cliente antes da produção",
      "Guia rápido e sem erros para a escolha e montagem dos cones de linha no suporte da máquina",
      "Cálculo exato de custos e precificação com base no tempo de máquina e metros de linha gastos",
      "Controle de qualidade final comparando a peça pronta com a especificação técnica aprovada"
    ],
    commonErrors: [
      "Imprimir a folha com a opção 'Ajustar à página' ativada na impressora (distorce o tamanho real 1:1 do desenho)",
      "Bordar sem consultar a folha técnica e trocar a ordem das cores de linha na máquina",
      "Jogar a folha de produção fora antes de inspecionar a peça final"
    ],
    troubleshootingTips: [
      "Ao imprimir a folha de produção, selecione SEMPRE 'Tamanho Real / Escala 100%' nas propriedades da sua impressora",
      "Utilize uma régua para medir o quadrado de calibração de 1 polegada (25,4mm) impresso na margem da folha para confirmar que a escala está perfeita",
      "Anote na folha o número do lote da linha e o tipo de entretela utilizada para repetir o mesmo bordado com facilidade no futuro",
      "Plastifique gabaritos técnicos de logotipos corporativos frequentes para reutilizar centenas de vezes no alinhamento de camisas polo"
    ],
    dicaArtrelados: "A folha de produção impressa é a ferramenta que mais passa profissionalismo para o seu cliente! Quando o cliente chega no seu ateliê e você coloca o gabarito impresso 1:1 no peito da roupa dele para ele aprovar o tamanho no espelho, a confiança no seu trabalho vai para as alturas!",
    voceSabia: "Na indústria aeronáutica e aeroespacial, todo bordado de identificação em trajes espaciais e uniformes de pilotos é acompanhado por uma folha técnica de rastreabilidade militar (AS9100) contendo o número do lote químico da linha e o código de calibração da agulha utilizada!",
    practicalExercise: "Abra qualquer matriz no seu software e vá em Arquivo -> Imprimir Pré-visualização: observe todas as informações ricas de tempo, metros de linha e sequência de cores que o programa calcula automaticamente para você!",
    quickSummary: "Documento técnico impresso com o desenho em tamanho real 1:1, lista de cores, consumo de linha e tempo de produção.",
    relatedTerms: ["Gabarito de Posicionamento", "Gasto de Linha & Consumo", "Paleta de Cores", "Ordem de Serviço"],
    tags: ["i-020", "folha de producao", "worksheet", "gabarito tecnico", "gestao", "tamanho real", "artrelados"],
    bibliographicReferences: [
      "STANDARDS FOR EMBROIDERY PRODUCTION DOCUMENTATION & QUALITY CONTROL. Frankfurt, 2023.",
      "APPAREL MANUFACTURING MANAGEMENT HANDBOOK. Worksheets and Costing Metrics. London, 2022.",
      "ARTRELADOS. Organização Nota 10: Como Usar Folhas de Produção para Eliminar Erros e Lucrar Mais no Ateliê. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-021-indicador-de-quebra-de-linha-sensor-optico",
    code: "I-021",
    term: "Indicador de Quebra de Linha & Sensor Óptico/Rotativo (Thread Break Sensor & Optical Rotary Encoder)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim indicare (apontar/mostrar) e do grego optikos (relativo à visão). Sistema mecatrônico de sensoriamento e controle de circuito fechado.",
    summary: "Sensor inteligente da máquina que detecta na hora quando a linha superior ou da bobina acaba ou arrebenta, pausando a máquina para não bordar no vazio.",
    definition: "O Indicador de Quebra de Linha e Sensor Óptico-Mecânico de Tensão (Automatic Thread Break Detection Sensor / Optical Chopper & Rotary Pulley Encoder) é o dispositivo transdutor mecatrônico instalado no percurso da linha superior e na caixa da bobina que monitora continuamente o fluxo linear de fio enquanto a máquina costura. Composto por uma pequena roldana com encoder óptico de fendas infravermelhas ou por uma alavanca metálica sensível com mola de contato elétrico, o sensor gera pulsos digitais a cada milímetro de linha puxada pelo estica-fio. Se a linha arrebentar, escapar do carretel ou a bobina esgotar, a interrupção dos pulsos faz a CPU da máquina acionar imediatamente o freio do motor em menos de 3 a 5 pontos, emitir um alerta sonoro e exibir na tela o aviso de quebra com o recuo automático de pontos.",
    technicalDetails: "Princípio de funcionamento do sensor de linha:\n• Tipo de sensor: Encoder fotoelétrico infravermelho de roda ranhurada ou contato mecânico por alavanca de tensão;\n• Tempo de resposta: Frenagem do motor em menos de 0,08 segundos (3 a 6 pontos de inércia);\n• Sensibilidade ajustável: Configuração de sensibilidade de 1 a 7 no painel para linhas metálicas ou elásticas;\n• Função de Recuo Automático (Auto Backtrack): A máquina rebobina automaticamente 5 a 10 pontos após a passagem da linha para cobrir a falha com perfeição.",
    howItWorks: [
      "1. A máquina está bordando velozmente a 900 PPM.",
      "2. A linha de poliéster passa pela roldana giratória do sensor antes de entrar no estica-fio.",
      "3. Cada giro da roldana interrompe um feixe de luz invisível no sensor infravermelho, avisando o computador de que a linha está correndo normalmente.",
      "4. Por volta do ponto nº 4.500, a linha sofre um atrito em um nó do carretel e arrebenta.",
      "5. A roldana para de girar instantaneamente.",
      "6. A placa-mãe detecta a ausência de pulsos e dispara o freio elétrico.",
      "7. A máquina para de bordar imediatamente, toca um alarme ('BIP-BIP!') e a luz LED muda para vermelho.",
      "8. A tela exibe: 'Quebra de Linha na Agulha 1'.",
      "9. A bordadeira passa a linha na agulha novamente e aperta o botão de recuo: a máquina volta 5 pontos para trás.",
      "10. Ao apertar Start, a máquina retoma a costura exatamente onde parou, cobrindo a emenda sem deixar nenhuma falha no tecido."
    ],
    beginnerExplanation: "É o 'olhinho mágico' da sua máquina de bordar! Enquanto ela está bordando, esse sensor fica vigiando se a linha está correndo direitinho. Se a linha arrebentar ou o carretel da bobina acabar, a máquina percebe em um segundo e para na hora, apitando para te chamar! Assim ela não fica bordando no seco furando o tecido à toa sem linha!",
    applications: [
      "Parada imediata da máquina em caso de arrebentamento da linha superior",
      "Alerta instantâneo quando o carretel de bobina de baixo chega ao fim",
      "Prevenção de furações a seco que danificam tecidos delicados sem bordar pontos",
      "Possibilidade de operar múltiplas máquinas simultaneamente com segurança no ateliê"
    ],
    commonErrors: [
      "Passar a linha fora da roldana do sensor (a máquina apita direto dizendo que a linha quebrou mesmo estando inteira)",
      "Acúmulo de poeira e fiapos de linha dentro do sensor óptico bloqueando o feixe de luz",
      "Desativar o sensor de quebra no painel e deixar a máquina bordando sozinha no vazio"
    ],
    troubleshootingTips: [
      "Certifique-se sempre de dar uma volta completa de linha na roldana do sensor conforme o esquema de passagem da sua máquina",
      "Utilize uma lata de ar comprimido para soprar os sensores de linha mensalmente, removendo o pó de algodão acumulado",
      "Se o sensor estiver apitando falso alarme com linhas elásticas ou metálicas, reduza a sensibilidade do sensor de linha no painel para o nível 2 ou 3",
      "Após repassar a linha, utilize a função de recuo de pontos no painel para que a nova linha sobreponha os últimos pontos e não solte depois"
    ],
    dicaArtrelados: "Se a sua máquina começar a apitar quebra de linha sem parar, mas a linha estiver firme e costurando, não se desespere! Nove entre dez vezes é apenas uma pelugem de linha que entrou no buraquinho do sensor óptico. Um soprinho de ar comprimido resolve na hora!",
    voceSabia: "Antes da invenção dos sensores ópticos digitais nos anos 1990, as máquinas de bordar industriais utilizavam ganchinhos de arame pendurados nas linhas: quando o fio quebrava, o ganchinho caía sobre uma barra de cobre e fechava um circuito elétrico como um sino de campainha!",
    practicalExercise: "Com a máquina em funcionamento em um retalho, corte a linha superior com a tesourinha a 10cm do cone: observe quantos segundos e quantos pontos a sua máquina leva para parar e apitar na tela!",
    quickSummary: "Sensor inteligente que monitora o fluxo de linha e interrompe a máquina instantaneamente se o fio quebrar ou acabar.",
    relatedTerms: ["Passagem de Linha Correta", "Auto Backtrack / Recuo de Pontos", "Tensão da Linha Superior", "Painel Touchscreen"],
    tags: ["i-021", "sensor de quebra", "quebra de linha", "sensor optico", "encoder", "alarme", "manutencao", "artrelados"],
    bibliographicReferences: [
      "OPTOELECTRONIC THREAD SENSING IN AUTOMATED EMBROIDERY MACHINERY. Tokyo, 2023.",
      "MECHATRONICS IN TEXTILE MANUFACTURING. Closed-Loop Thread Flow Monitoring. Munich, 2022.",
      "ARTRELADOS. O Fim das Falhas no Bordado: Como Funcionam e Como Cuidar dos Sensores de Linha da Sua Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-022-insercao-de-ziper-no-bastidor-projetos-ith",
    code: "I-022",
    term: "Inserção de Zíper no Bastidor em Projetos ITH (Zipper In-The-Hoop Insertion & Precision Taping)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês zipper (termo onomatopaico criado pela B.F. Goodrich em 1923 para fechos ecler de botas) e In-The-Hoop. Engenharia de montagem de bolsas no bastidor.",
    summary: "Técnica de aplicar e costurar um zíper com forro embutido e dentes alinhados diretamente no bastidor da máquina sem usar máquina de costura.",
    definition: "A Inserção de Zíper no Bastidor em Projetos ITH (In-The-Hoop Precision Zipper Attachment & Alignment Protocol) é a metodologia técnica de fixação e costura de fechos ecler (zíperes comuns de nylon nº 3 ou nº 5) diretamente sobre o estabilizador durante a confecção de estojos, nécessaires e bolsas no bastidor de bordar. O processo utiliza linhas guia de marcação milimétricas, fitas microporosas para imobilização temporária da cremalheira (dentes do zíper) e paradas programadas de segurança para o deslocamento físico do cursor (carrinho do zíper), garantindo que a agulha de bordar costure as margens da fita sem atingir os dentes plásticos ou metálicos e sem desviar a simetria da abertura.",
    technicalDetails: "Parâmetros de alinhamento e digitalização de zíper:\n• Linha de marcação central (Center Placement Line): Linha corrida simples indicando o vão do zíper;\n• Linhas de alinhamento de borda (Tape Boundary Lines): Linhas paralelas distantes 12mm a 16mm;\n• Ponto de fixação de zíper (Zipper Tackdown Stitch): Ponto corrido triplo reforçado (Bean Stitch) a 2,5mm dos dentes;\n• Tipo de zíper recomendado: Zíper de nylon contínuo Nº 3 (cremalheira de 3mm com fita de poliéster flexível);\n• Regra de Deslocamento do Cursor: O cursor deve ser puxado para a posição semiaberta antes da costura de fechamento.",
    howItWorks: [
      "1. A máquina de bordar executa a linha de marcação reta no estabilizador indicando o local do zíper.",
      "2. A máquina para (código Stop).",
      "3. A bordadeira posiciona o zíper de nylon sobre a marcação, centralizando os dentes perfeitamente em cima da linha guia.",
      "4. Prende as pontas da fita do zíper com pequenos pedaços de fita microporosa ou fita crepe de baixa aderência nas margens do bastidor.",
      "5. Dá a partida: a máquina costura a primeira lateral da fita do zíper com ponto corrido reforçado.",
      "6. A máquina para novamente. A bordadeira posiciona o tecido superior dobrado rente aos dentes do zíper.",
      "7. A máquina executa o pesponto de acabamento prendendo o tecido e o zíper juntos.",
      "8. REGRA VITAL: Antes de costurar as camadas finais de forro e verso, a operadora abre o carrinho do zíper até a metade.",
      "9. A máquina executa o contorno perimétrico de fechamento da bolsinha.",
      "10. Ao retirar do bastidor, desvira-se a peça facilmente pelo zíper aberto: uma nécessaire com zíper perfeito e forrada nasce pronta!"
    ],
    beginnerExplanation: "É o jeito mais fácil e perfeito do mundo de pregar zíper em bolsinhas e estojos sem sofrer na máquina de costura! A máquina de bordar desenha uma linha retinha na entretela, você encosta o zíper ali, prende com uma fitinha crepe e a máquina costura o zíper retinho e perfeito! O único segredo que você nunca pode esquecer é abrir o zíper até a metade antes de fechar a bolsinha para conseguir virar do lado certo depois!",
    applications: [
      "Confecção de nécessaires forradas com zíper embutido e acabamento sem costura aparente",
      "Estojos escolares infantis, porta-moedas e carteiras com abertura superior ou frontal",
      "Bolsas tipo clutch, porta-óculos e porta-celulares acolchoados feitos no bastidor",
      "Almofadas personalizadas com fechamento traseiro por zíper invisível"
    ],
    commonErrors: [
      "Esquecer de abrir o cursor do zíper até o meio antes de costurar a última camada (não dá para desvirar a peça)",
      "Usar zíperes de metal grosso em matrizes ITH (se a agulha bater no dente de metal, quebra a agulha e danifica a lançadeira)",
      "Colocar fita adesiva colando em cima dos dentes por onde a agulha vai passar (a cola gruda na agulha e quebra a linha)"
    ],
    troubleshootingTips: [
      "Utilize sempre zíper comum de nylon nº 3 com sobras de pelo menos 3cm para fora de cada lado do bastidor para facilitar o manuseio do cursor",
      "Prenda as pontas externas do zíper com fita microporosa (tipo Micropore) fora da área de costura da agulha",
      "Se o calcador da máquina estiver pegando no calombo do cursor do zíper durante a costura, pause a máquina e empurre o cursor cuidadosamente com os dedos",
      "Utilize agulhas de ponta arredondada 75/11 SUK para não cortar as fibras da fita de poliéster do zíper"
    ],
    dicaArtrelados: "Nécessaires com zíper feitas 100% no bastidor são os produtos mais lucrativos do artesanato! Você faz uma peça linda com forro e zíper perfeito em 15 minutos e vende com uma margem de lucro de mais de 300%!",
    voceSabia: "O fecho de correr (zíper) foi aprimorado pelo engenheiro sueco-americano Gideon Sundbäck em 1913, mas foi a Marinha dos Estados Unidos que o popularizou mundialmente ao adotá-lo nos trajes dos marinheiros na Primeira Guerra Mundial!",
    practicalExercise: "Pegue uma sobra de zíper de nylon e uma matriz simples de estojinho ITH: siga o passo a passo de marcação, prenda com fita crepe, lembre-se de abrir o cursor até a metade e veja nascer sua primeira bolsinha perfeita no bastidor!",
    quickSummary: "Método preciso de aplicar e costurar zíperes com forro embutido diretamente no bastidor da máquina de bordar.",
    relatedTerms: ["In-the-Hoop (ITH)", "Placement Stitch / Ponto de Marcação", "Tackdown Stitch / Ponto de Fixação", "Bean Stitch / Ponto Grão"],
    tags: ["i-022", "ziper no bastidor", "ith", "necessaire", "costura criativa", "projetos no bastidor", "artrelados"],
    bibliographicReferences: [
      "IN-THE-HOOP ZIPPERED POUCH & BAG CONSTRUCTION MANUAL. Melbourne, 2023.",
      "SPECIALTY EMBROIDERY HARDWARE ATTACHMENT STANDARDS. New York, 2022.",
      "ARTRELADOS. O Segredo do Zíper no Bastidor: Como Fazer Nécessaires Forradas Perfeitas em Menos de 15 Minutos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-023-instabilidade-dimensional-da-malha-efeito-sanfona",
    code: "I-023",
    term: "Instabilidade Dimensional da Malha & Efeito Sanfona (Dimensional Knit Instability & Accordion Distortion)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Comportamento de Tecidos",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim instabilitas (falta de firmeza/flutuação) e do grego diastasis (dimensão). Fenômeno viscoelástico de deformação de malhas circulares.",
    summary: "Distorção elástica que faz tecidos de malha piquet, viscolycra e ribana esticarem e enrugarem como uma sanfona se não tiverem entretela e underlay certos.",
    definition: "A Instabilidade Dimensional da Malha e Efeito Sanfona (Dimensional Knit Elastic Instability & Accordion Puckering Distortion) é a suscetibilidade físico-mecânica inerente aos tecidos de malha (como piquet de camisas polo, meia malha de algodão penteado, viscolycra, ribana e moletom) a sofrerem deformações anisotrópicas, alongamento plástico permanente e enrugamento sob a ação combinada da tração do bastidor e da penetração repetitiva de agulhas de alta velocidade. Como a malha é constituída por laçadas elásticas entrelaçadas (e não por fios retos de urdume e trama travados como no tecido plano), a tensão da linha de bordar comprime as colunas da malha, criando ondulações semelhantes a um fole de sanfona ao redor do bordado se não for estabilizada com entretela de corte reforçada e underlays de grelha cruzada.",
    technicalDetails: "Mecânica da deformação de malhas elásticas:\n• Elasticidade multidirecional: Alongamento de 20% a 150% no sentido da trama e 10% a 30% no sentido da coluna;\n• Fenômeno de 'Push-Pull elástico': A tração da agulha afunda as laçadas e aproxima as colunas vizinhas, encolhendo o tecido em até 8% na área bordada;\n• Densidade de compensação requerida: Compensação de repuxo de +0,35mm a +0,50mm;\n• Estabilização obrigatória: Entretela de corte permanente (Cut-Away) de 70g a 90g com colagem temporária em spray.",
    howItWorks: [
      "1. A bordadeira precisa bordar um logotipo corporativo denso no peito de uma camisa polo de malha piquet 100% algodão.",
      "2. Se ela usar entretela comum rasgável e esticar a malha ao apertar o bastidor, o tecido deforma como um elástico esticado.",
      "3. Quando a máquina termina de bordar e a peça sai do bastidor, a malha tenta voltar ao tamanho original, mas é segurada pelos pontos rígidos.",
      "4. O resultado é o 'Efeito Sanfona': a camisa fica cheia de ondas e rugas horríveis ao redor do logotipo.",
      "5. A FORMA CORRETA: Ela cola a malha sobre uma entretela de corte (Cut-Away) pesada de 80g com spray adesivo temporário sem esticar a peça.",
      "6. No software, o arquivo foi digitalizado com uma grelha cruzada de underlay (Tatami Underlay leve) e compensação de repuxo de +0,40mm.",
      "7. A máquina costura o bordado sem repuxar a elasticidade natural da malha.",
      "8. Ao retirar do bastidor, a camisa polo está impecavelmente lisa, reta e sem nenhuma ruga!"
    ],
    beginnerExplanation: "Sabe quando você borda em uma camisa polo ou camisetinha e, quando tira do bastidor, a roupa fica toda enrugada parecendo uma sanfona sanfonada em volta do desenho? Isso acontece porque a malha estica como um elástico! Se você puxar o tecido na hora de prender no bastidor ou usar entretela fraquinha, a máquina costura a roupa esticada e depois ela encolhe e enruga tudo! O segredo é nunca esticar a malha no bastidor e usar entretela de recorte!",
    applications: [
      "Bordados corporativos de alta durabilidade em camisas polo de malha piquet",
      "Personalização de camisetas de algodão, viscolycra e regatas esportivas de academia",
      "Bordados em moletons, agasalhos de frio e roupas de bebê em malha suedine",
      "Prevenção definitiva de enrugamento e deformação de logotipos após a primeira lavagem"
    ],
    commonErrors: [
      "Puxar as bordas da malha com as mãos para deixá-la 'esticadinha como um tambor' no bastidor (é a causa nº 1 do efeito sanfona)",
      "Usar entretela rasgável fina de 40g em malha piquet (a entretela esfarela na primeira lavagem e a camisa enruga inteira)",
      "Digitalizar com densidade excessiva (mais de 0,35mm) sem underlay de sustentação adequado"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DA MALHA: Entretela Rasgável NUNCA em malhas! Malhas exigem SEMPRE Entretela de Recorte (Cut-Away)!",
      "Ao colocar a malha no bastidor, apoie-a com suavidade: o tecido deve ficar plano e reto, mas NUNCA esticado!",
      "Utilize spray adesivo temporário para fixar a malha na entretela antes de fechar o aro: isso trava a elasticidade sem precisar apertar demais o parafuso",
      "Use agulha de ponta bola (Ball Point / SES ou SUK) calibre 75/11 para afastar as fibras da malha sem cortar os fios"
    ],
    dicaArtrelados: "O maior terror dos ateliês são as camisas polo enrugadas! Quando você aprende a bordar malha com entretela de corte e cola em spray sem puxar o tecido, suas camisas polo ficam lisinhas como as de grifes de shopping e seus clientes corporativos nunca mais compram de outro lugar!",
    voceSabia: "O tecido piquet (conhecido mundialmente pelo bordado do jacaré no peito) foi criado em 1933 pelo lendário tenista francês René Lacoste para substituir as camisas sociais de manga longa rígidas por uma malha respirável que não limitava o movimento dos braços no tênis!",
    practicalExercise: "Pegue dois retalhos de malha: em um, estique bem o tecido no bastidor com entretela rasgável e borde um círculo; no outro, cole com spray sem esticar em entretela de corte e borde o mesmo círculo. Compare o verso e a lisura das duas peças!",
    quickSummary: "Fenômeno de deformação elástica de malhas que exige entretela de corte, spray adesivo e montagem sem esticar o tecido.",
    relatedTerms: ["Entretela de Recorte / Cut-Away", "Compensação de Repuxo", "Agulha Ponta Bola (SES/SUK)", "Hoop Burn & Marcas de Bastidor"],
    tags: ["i-023", "instabilidade dimensional", "malhas", "camisa polo", "piquet", "efeito sanfona", "enrugamento", "artrelados"],
    bibliographicReferences: [
      "KNITWEAR EMBROIDERY STABILIZATION STANDARDS. Viscoelastic Fabric Mechanics. London, 2023.",
      "THE SCIENCE OF APPAREL DISTORTION & PUCKERING MITIGATION. Geneva, 2022.",
      "ARTRELADOS. O Fim das Camisas Polo Enrugadas: Como Dominar Malhas e Piquet com Acabamento de Grife. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-024-interrupcao-de-emergencia-e-botao-e-stop",
    code: "I-024",
    term: "Interrupção de Emergência & Botão E-Stop de Parada Crítica (Emergency Stop Button & Safety Interlock Circuit)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Equipamentos & Ferramentas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês Emergency Stop (E-Stop / Parada de Emergência) e normas internacionais de segurança de máquinas ISO 13850 / NR-12.",
    summary: "Botão vermelho de emergência tipo 'cogumelo' no corpo da máquina que corta a energia dos motores no mesmo instante para evitar acidentes e quebras graves.",
    definition: "A Interrupção de Emergência e Botão E-Stop de Parada Crítica (Emergency Stop Pushbutton / Safety Interlock Circuit & Rapid Dynamic Braking) é o mecanismo de segurança funcional obrigatório instalado em conformidade com as normas industriais internacionais (ISO 13850, IEC 60204-1 e NR-12 brasileira). Composto por um botão vermelho proeminente em formato de cogumelo com trava mecânica de ação positiva situado em local de fácil e imediato acesso no chassi da máquina, o acionamento do E-Stop interrompe instantaneamente o circuito de alimentação dos servomotores do cabeçote e do pantógrafo, aplicando frenagem regenerativa dinâmica para cessar o movimento da agulha em milissegundos diante de situações críticas (como dedos presos, tecidos engolidos pela lançadeira, bastidores soltos colidindo com a agulha ou chamas).",
    technicalDetails: "Engenharia do circuito de parada de emergência:\n• Tipo de atuador: Botão cogumelo de 40mm vermelho com travamento mecânico por rotação (Turn-to-Release) ou puxão (Pull-to-Release);\n• Categoria de parada (IEC 60204-1): Parada Categoria 1 (Frenagem controlada rápida de servomotor seguida de desenergização dos atuadores);\n• Tempo de resposta: Frenagem total em menos de 0,05 segundos;\n• Manutenção de memória de coordenadas: A CPU preserva a posição cartesiana X/Y absoluta na memória não volátil (EEPROM) para retomada segura.",
    howItWorks: [
      "1. A máquina está bordando a 1.000 PPM quando um pedaço solto da manga de uma jaqueta enrosca no braço móvel do pantógrafo.",
      "2. O tecido começa a ser puxado com força em direção à agulha em movimento rápido.",
      "3. A operadora bate com a palma da mão no botão vermelho de emergência (E-Stop).",
      "4. O botão trava fisicamente afundado e desarma o relé de segurança principal.",
      "5. Os servomotores do cabeçote e do pantógrafo são freados e desligados em uma fração de segundo.",
      "6. A máquina congela completamente o movimento, evitando que a jaqueta seja rasgada, que a agulha quebre na lançadeira ou que a operadora sofra ferimentos.",
      "7. A operadora desenrosca a peça com calma e segurança.",
      "8. Gira o botão vermelho no sentido horário para destravá-lo ('CLIC!').",
      "9. O painel reconhece a restauração do circuito de segurança e permite reiniciar o bordado exatamente de onde parou."
    ],
    beginnerExplanation: "É o botão vermelho grandão em formato de 'cogumelo' que fica bem visível na frente da máquina! Ele serve para salvar você e a sua máquina em qualquer emergência! Se você vir uma linha enrolando tudo, o bastidor batendo ou a roupa engolindo na agulha, você dá uma palmada nesse botão vermelho: a máquina para TUDO no mesmo milissegundo, congelando os motores antes que aconteça um estrago maior!",
    applications: [
      "Parada imediata diante de riscos de acidentes humanos ou aprisionamento de dedos",
      "Interrupção de colisões violentas do bastidor contra o cabeçote ou chapa de agulha",
      "Salvamento de peças caras enroscadas no mecanismo em movimento",
      "Procedimento padrão de segurança operacional em conformidade com a NR-12"
    ],
    commonErrors: [
      "Usar o botão de emergência E-Stop para pausas normais do dia a dia em vez de usar o botão normal de Pause/Stop (estressa os relés e freios mecânicos)",
      "Colocar caixas, cones de linha ou objetos na frente do botão de emergência bloqueando o acesso rápido da mão",
      "Tentar ligar a máquina sem perceber que o botão de emergência ficou travado afundado após ser apertado"
    ],
    troubleshootingTips: [
      "Mantenha sempre a área ao redor do botão de emergência livre de qualquer obstáculo",
      "Se sua máquina industrial não ligar os motores ao bater a chave, verifique se o botão E-Stop não está travado para baixo (gire-o para a direita para soltar a trava)",
      "Teste o funcionamento do botão de emergência uma vez por mês com a máquina costurando em baixa velocidade em um retalho",
      "Ensine todas as pessoas do ateliê onde fica o botão de emergência e como acioná-lo com a palma da mão"
    ],
    dicaArtrelados: "Segurança vem em primeiro lugar sempre! Conhecer o botão de emergência e saber bater nele sem hesitar é a diferença entre perder uma máquina de R$ 30.000 num impacto feio ou salvar a sua produção em 1 segundo!",
    voceSabia: "A cor vermelha brilhante com fundo amarelo contrastante para botões de parada de emergência foi padronizada mundialmente pela Organização Internacional de Normalização (ISO) na década de 1970 para garantir que qualquer ser humano reconheça o botão instantaneamente, mesmo em situações de pânico ou fumaça!",
    practicalExercise: "Localize o botão de emergência na sua máquina: faça o movimento simulado com a mão para memorizar o reflexo muscular de apertá-lo e aprenda a girá-lo para a direita para destravar a trava de segurança!",
    quickSummary: "Botão vermelho de segurança que desliga os motores instantaneamente diante de perigo, travamento ou colisões.",
    relatedTerms: ["Manutenção Preventiva Semanal", "Ergonomia no Ateliê", "Painel Touchscreen", "Isolação Elétrica"],
    tags: ["i-024", "parada de emergencia", "e-stop", "seguranca", "nr-12", "frenagem rapida", "botoes", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 13850: Safety of machinery - Emergency stop function. Geneva, 2023.",
      "MINISTÉRIO DO TRABALHO E EMPREGO. Norma Regulamentadora NR-12: Segurança no Trabalho em Máquinas e Equipamentos. Brasília: MTE, 2022.",
      "ARTRELADOS. Segurança Total no Ateliê: Como Operar Máquinas de Bordar com Segurança e Dominar os Procedimentos de Emergência. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

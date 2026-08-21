import { Verbete } from "../types";

export const VERBETES_LETTER_M_PART5: Verbete[] = [
  {
    id: "m-025-mapeamento-cores-paleta-fios-thread-chart-color-mapping",
    code: "M-025",
    term: "Mapeamento de Cores e Paleta de Fios (Color Mapping & Thread Chart Palette)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino / Do latim 'mappa' (toalha/carta geográfica) e 'color' (cor).",
    origin: "Sistema cromático computacional que correlaciona os códigos de cores digitais RGB/CMYK do software de criação às tabelas numéricas oficiais de cones de linhas dos principais fabricantes globais de fios de bordado.",
    summary: "Processo de associar os tons visuais da matriz no computador aos códigos e números reais das linhas existentes no estoque do ateliê.",
    definition: "O Mapeamento de Cores e Gerenciamento de Paletas de Fios (Thread Color Mapping / Thread Chart Database / Conversão Cromática) é o recurso presente nos softwares de bordado que vincula cada objeto desenhado a uma marca e código numérico específico de linha de bordado (como Madeira, Polyneon, Isacord, Lumina Setta, Polycron, Zenit, Sulky ou Marathon). Como cada marca possui sua própria tabela de tingimento com centenas de códigos proprietários (ex: 'Madeira Polyneon 1801 - Branco Puro' ou 'Setta 5122 - Azul Marinho Real'), o mapeamento garante que a prévia 3D na tela reproduza a cor real do fio e emita a 'Ficha de Produção' (Color Sequence Sheet) correta para o operador abastecer a máquina.",
    technicalDetails: "Arquitetura e funcionalidade dos gráficos de cores no bordado:\n• Bibliotecas Integradas: O software de bordado armazena bancos de dados relacionais com os valores de cor LAB/RGB medidos por espectrofotômetro em cada fio físico dos fabricantes;\n• Conversão Automática de Marcas: Permite converter uma matriz inteira da tabela Madeira para a tabela Setta/Polycron em um clique, escolhendo a cor mais próxima por fórmula de proximidade Delta E (CIE76/CIE2000);\n• Folha de Troca de Cores (Production Sheet): Relatório impresso ou em PDF que lista a ordem cronológica de paradas da máquina com código do fabricante, nome da cor e metragem estimada de linha gasta por bloco;\n• Limitação do Formato DST: O formato .DST não contém a tabela de cores original; a máquina exibe cores genéricas pré-definidas na memória, exigindo o acompanhamento visual da folha de produção.",
    howItWorks: [
      "1. A bordadeira seleciona a marca de linhas que ela tem no ateliê (ex: Linhas Setta / Lumina) como paleta padrão no software.",
      "2. Ao colorir o desenho, clica nas cores reais dos cones que possui na prateleira.",
      "3. O software exibe a simulação na tela com o brilho e tom exatos daquele cone físico.",
      "4. Ao finalizar a matriz, o programa gera a ficha de produção com a sequência de cores numerada (1: Amarelo 5002; 2: Verde 5104; 3: Preto 5000).",
      "5. A bordadeira leva a ficha para a máquina e organiza os cones de linha na ordem da lista.",
      "6. A máquina executa as paradas e a bordadeira troca as cores seguindo a ficha sem pestanejar.",
      "7. A peça bordada sai com a harmonia de cores rigorosamente idêntica ao aprovado pelo cliente."
    ],
    beginnerExplanation: "O mapeamento de cores é como ter o 'catálogo de tintas' das suas linhas de bordar dentro do computador! Em vez de usar um azul qualquer na tela e depois ficar tentando adivinhar qual cone da sua prateleira é o mais parecido, você diz para o programa exatamente a marca de linhas que você usa (por exemplo, Lumina Setta ou Polycron). O computador mostra na tela a cor real daquele cone com o número dele certinho! Quando você manda bordar, você já sabe exatamente qual cone pegar da prateleira na ordem certa, sem confusão!",
    applications: [
      "Padronização corporativa exata de cores de logotipos de empresas (Manual de Identidade Visual / Cores Pantone)",
      "Emissão de fichas técnicas de produção para operadores em indústrias e confecções",
      "Conversão rápida de matrizes compradas na internet para as linhas disponíveis no ateliê",
      "Cálculo preciso da metragem de linha gasta para formação de preço de venda e custos"
    ],
    commonErrors: [
      "Confiar nas cores aleatórias que aparecem na tela da máquina ao abrir um arquivo .DST sem olhar a folha de produção",
      "Usar cores aleatórias na tela do computador sem conferir se possui o cone correspondente no estoque",
      "Tentar reproduzir cores de pele ou degradês finos sem calibrar o monitor do computador"
    ],
    troubleshootingTips: [
      "Imprima ou mantenha no celular a folha de sequência de cores (Color Sequence Worksheet) de toda matriz antes de começar a bordar",
      "Tenha no seu ateliê a cartela física de amostras de fios com meadas reais da sua marca de linha favorita para comparar com a tela",
      "No formato .PES, as cores originais ficam salvas no arquivo; já no formato .DST, siga estritamente a sua ficha de produção externa"
    ],
    dicaArtrelados: "Adquira a 'Cartela de Cores Física' da marca de linhas que você mais usa no ateliê! Ela tem pedacinhos reais de todas as linhas coladas em um mostruário dobrável. Quando o cliente trouxer a camisa para bordar, você encosta a linha real na peça e escolhe a cor perfeita em 5 segundos!",
    voceSabia: "Os grandes fabricantes mundiais de linhas de bordar utilizam espectrofotômetros a laser e iluminação controlada D65 em laboratórios térmicos para garantir que o mesmo código de cor tenha rigorosamente o mesmo tom tingido em lotes fabricados com anos de diferença!",
    practicalExercise: "No seu software de bordado, configure a paleta padrão para a marca de linhas que você tem em casa: abra uma matriz, atribua os números reais dos seus cones e imprima a folha de produção para acompanhar na máquina!",
    quickSummary: "Sistema de gerenciamento de cores que correlaciona os tons do desenho na tela com os números e códigos reais dos cones de linha do fabricante.",
    relatedTerms: ["Ficha de Produção", "Tabela de Cores", "Formato DST", "Linha de Bordar Poliéster", "Pantone"],
    tags: ["m-025", "mapeamento de cores", "color mapping", "paleta de fios", "tabela de linhas", "setta", "polycron", "madeira", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARN GMBH. Thread Color Matching, Spectral Analysis and Global Palette Standards. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Gestão Cromática no Ateliê: Cartelas de Cores, Mapeamento Digital, Espectrofotometria e Fichas de Produção. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-026-mascara-recorte-aplique-in-the-hoop-cut-mask",
    code: "M-026",
    term: "Máscara de Recorte e Aplique In The Hoop (Cut Mask & ITH Appliqué Boundary)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Técnicas de Aplique & ITH",
    grammarClass: "Substantivo feminino / Do italiano 'maschera' e do latim 'recortare'.",
    origin: "Técnica de programação e corte que estabelece as três etapas clássicas de costura mecânica (posicionamento, fixação e acabamento) para embutir tecidos recortados em apliques ou peças montadas inteiramente no bastidor.",
    summary: "Sequência programada de 3 etapas que marca o contorno da peça, fixa o retalho de tecido com ponto corrido/zigue-zague e arremata com ponto cheio.",
    definition: "A Máscara de Recorte e Estrutura de Aplique (Appliqué Cut Mask / Matriz de Aplique em 3 Passos / ITH Cut Line) é a arquitetura de programação digital que comanda a inserção de retalhos de tecidos externos (como tricoline estampada, feltro, glitter, couro sintético) sobre a peça bordada. Toda máscara de aplique profissional é composta por três etapas sequenciais obrigatórias: 1) Linha de Marcação/Posicionamento (Placement Line - que desenha no bastidor onde o tecido deve ser colocado); 2) Linha de Fixação/Pesponto (Tackdown Line - que costura o retalho no lugar para permitir o recorte rente com a tesoura de garça ou pelicano); e 3) Ponto de Acabamento/Borda Cheia (Cover Stitch / Satin Border - coluna densa de ponto cheio que cobre as bordas desfiadas do retalho).",
    technicalDetails: "Estrutura técnica dos 3 passos do aplique:\n• Passo 1 - Ponto de Posicionamento (Placement Line): Ponto corrido simples (comprimento 2,5 mm) costurado apenas na entretela ou tecido base;\n• Passo 2 - Ponto de Fixação (Tackdown Stitch): Ponto corrido duplo ou zigue-zague estreito que prende o tecido do aplique antes do recorte;\n• Margem de Recorte Manual: O operador corta o excesso de tecido a 1,0 mm da linha de fixação com tesoura curvada de ponta fina;\n• Passo 3 - Ponto de Borda (Cover Satin Stitch): Coluna de ponto cheio com largura de 3,0 mm a 4,5 mm e densidade de 0,38 mm a 0,40 mm, com compensação de repuxo de 0,35 mm para garantir cobertura total da borda cortada;\n• Recorte a Laser ou Pré-Cortado (Pre-Cut / ScanNCut): Quando os tecidos são cortados previamente por plotter eletrônica, o passo 1 serve para encaixar o retalho cortado milimetricamente dentro da máscara.",
    howItWorks: [
      "1. A máquina costura a primeira etapa (Passo 1): faz um desenho de contorno simples no bastidor indicando a área exata do aplique e para automaticamente.",
      "2. A bordadeira coloca um retalho de tecido bonito sobre o contorno marcado.",
      "3. Pressiona Iniciar: a máquina executa o Passo 2 (costura uma linha de zigue-zague ou ponto corrido prendendo o retalho no bastidor) e para novamente.",
      "4. Sem tirar o tecido do bastidor, a bordadeira usa uma tesoura de ponta curva (tesoura de aplique/pelicano) e recorta todo o excesso de tecido bem pertinho da costura.",
      "5. Pressiona Iniciar: a máquina executa o Passo 3 (costura uma borda gordinha e brilhante em ponto cheio ou ponto caseado sobre o corte).",
      "6. A borda cobre todos os fiapos do tecido cortado com acabamento impecável.",
      "7. O resultado é um aplique lindo, volumoso, econômico e sem desfiar nas lavagens."
    ],
    beginnerExplanation: "A máscara de aplique é aquele processo mágico de 'colocar um tecido dentro do bordado' em 3 passinhos simples! A máquina faz assim: 1) primeiro ela desenha uma linha mostrando onde o tecido deve ficar; 2) você coloca o retalho de tecido em cima e a máquina passa uma costurinha para prender; 3) a máquina para, você pega a tesourinha e corta as sobras do tecido ao redor da costura; 4) você aperta o botão e a máquina passa um contorno largo e fofinho de linha cheia por cima, escondendo as bordinhas cortadas! É perfeito para economizar linha em desenhos grandes e usar tecidos estampados fofos!",
    applications: [
      "Letras grandes e números em jaquetas universitárias (Letterman Jackets) e moletom",
      "Bordado de personagens infantis, bichinhos e flores em fraldas, bodies e mantas",
      "Confecção de chaveiros, máscaras, bolsinhas e necessaires feitas 100% no bastidor (In The Hoop)",
      "Bordados com glitter têxtil, corino metalizado, lantejoulas e feltro estruturado"
    ],
    commonErrors: [
      "Retirar o tecido de dentro do aro do bastidor para fazer o recorte na mesa (nunca mais volta para a mesma posição)",
      "Recortar o tecido longe demais da costura de fixação (os fiapos de tecido escapam para fora da borda cheia)",
      "Usar tesoura reta cega que corta a linha de fixação ou fura o tecido de base"
    ],
    troubleshootingTips: [
      "Use sempre tesoura de ponta curva ou tesoura 'bico de pato/pelicano' própria para aplique, que permite cortar rente sem furar a base",
      "Aplique entretela termocolante fina no verso do tecido do aplique antes de bordar para evitar que ele desfie durante o corte",
      "Mantenha a largura do ponto de acabamento (Passo 3) com pelo menos 3,5 mm para cobrir com segurança a margem de corte"
    ],
    dicaArtrelados: "Para fazer apliques perfeitos sem nenhum fiapo aparecendo: cole uma entretela termocolante fininha (tipo termocolante definitivo ou papel colante) no avesso do tecido do aplique antes de cortar! Quando você passar a tesoura rente, o tecido fica firme como papel e não solta nem um único fiozinho!",
    voceSabia: "A técnica de aplique têxtil existe desde a Idade Média, quando era utilizada para criar grandes bandeiras e estandartes militares porque era muito mais rápido e leve costurar pedaços grandes de tecidos nobres do que preencher tudo com pontos manuais!",
    practicalExercise: "Pegue um retalho de tecido estampado: crie uma matriz simples de estrela com os 3 passos de aplique no software e execute na sua máquina: pratique cortar com a tesoura de ponta curva bem rente à costura!",
    quickSummary: "Sequência de programação em três etapas (marcação, fixação e acabamento) para embutir retalhos de tecidos decorativos no bordado.",
    relatedTerms: ["Aplique", "Ponto de Fixação (Tackdown)", "Ponto Satim", "Tesoura Pelicano", "In The Hoop (ITH)"],
    tags: ["m-026", "mascara de recorte", "aplique", "ith", "tackdown", "recorte", "tesoura pelicano", "patch", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY APPLIQUÉ MASTER ASSOCIATION. Three-Step Appliqué Engineering, Laser Pre-Cutting and Edge Coverage. Atlanta: EAMA, 2022.",
      "ARTRELADOS. A Arte do Aplique e Projetos In The Hoop: Máscaras de Recorte, Tesouras Especiais e Acabamento de Alta Durabilidade. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-027-movimento-pantografo-resolucao-eixos-pulse-resolution",
    code: "M-027",
    term: "Movimento do Pantógrafo e Resolução de Eixos (Pantograph Kinematics & CNC Pulse Resolution)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Eletrônica & Software",
    grammarClass: "Substantivo masculino / Do grego 'pantos' (tudo) e 'graphein' (escrever).",
    origin: "Instrumento mecânico pantográfico de desenho inventado por Christoph Scheiner em 1603, adaptado no século XX com servomotores digitais CNC para movimentar o bastidor com resolução micrométrica a cada agulhada.",
    summary: "Dinâmica cinemática do braço que move o bastidor nos eixos X e Y e a resolução de pulsos eletrônicos da placa de controle (0,1 mm por passo).",
    definition: "O Movimento do Pantógrafo e Resolução de Eixos (Pantograph Drive Kinematics & Sub-Millimeter Axis Pulse Resolution) é o conjunto de princípios mecânicos e de controle digital que rege a movimentação física do bastidor de bordado. O pantógrafo é a estrutura mecânica articulada ou cartesiana suspensa sobre rolamentos lineares de alta precisão que sustenta o bastidor com o tecido. A resolução de eixos é o menor incremento linear que os motores e encoders conseguem executar (sendo o padrão da indústria de bordados calibrado em exatamente 0,1 mm, ou 1 décimo de milímetro por pulso binário). A cinemática controla as rampas de aceleração e frenagem para que o bastidor não vibre ao mudar bruscamente de direção.",
    technicalDetails: "Especificações cinemáticas e eletrônicas do pantógrafo:\n• Resolução Cartesiana Padrão: 0,1 mm por unidade de coordenada (1 mm = 10 unidades de pulso / 100 pulsos por centímetro linear);\n• Curso Máximo de Deslocamento em Salto (Jump): Até 12,7 mm por pulso de salto individual em formatos .DST tradicionais;\n• Tempo de Resposta Mecânica: O bastidor deve acelerar, percorrer a distância e parar completamente em menos de 30 milissegundos a 1.000 PPM;\n• Guias Lineares: Rolamentos de esferas recirculantes de aço retificado (trilhos lineares tipo THK / Hiwin) para eliminar folgas radiais e atrito;\n• Vibração Residual e Rigidez: Em altas velocidades, forças de inércia exercidas pelo peso do tecido e do aro do bastidor são absorvidas por amortecedores elastoméricos e contra-pesos dinâmicos.",
    howItWorks: [
      "1. A cada ciclo de rotação do cabeçote, a agulha sobe e sai do tecido.",
      "2. O sensor do eixo principal atinge o ângulo de liberação de movimento (270°).",
      "3. A placa-mãe CNC calcula a distância e a rampa de aceleração suave para a próxima coordenada (X/Y).",
      "4. Os drivers enviam a quantidade exata de pulsos elétricos para os servomotores dos eixos.",
      "5. O pantógrafo desliza suavemente sobre os trilhos de esferas com tolerância inferior a 0,02 mm.",
      "6. O movimento cessa exatamente no ângulo de 100° do ciclo, antes da ponta da agulha tocar o tecido.",
      "7. A agulha penetra com precisão cirúrgica sem esforço de flexão lateral.",
    ],
    beginnerExplanation: "O pantógrafo é o 'braço de ferro inteligente' da máquina de bordar que segura o bastidor e passeia com ele para lá e para cá! Toda vez que a agulha sobe no ar, esse braço se move com passos minúsculos de um décimo de milímetro (tão pequeno que não dá nem para ver a olho nu) e para estátua no lugar exato para a agulha descer de novo. Se esse braço tremer ou tiver folga, o bordado sai todo torto e os contornos não encaixam no desenho. Quando o pantógrafo é firme e bem ajustado, os pontos caem com a precisão de um relógio suíço!",
    applications: [
      "Movimentação milimétrica de bastidores planos, bastidores magnéticos e bastidores de boné",
      "Garantia de encaixe perfeito entre preenchimentos de fundo (tatami) e contornos em ponto cheio",
      "Execução de desenhos de alta densidade e micro-letras sem oscilação geométrica",
      "Operação contínua em velocidades de 800 a 1.200 pontos por minuto"
    ],
    commonErrors: [
      "Apoiar as mãos ou objetos pesados sobre o pantógrafo durante o bordado (danifica os trilhos lineares e perde passos)",
      "Permitir que o bastidor colida com as paredes laterais da máquina ou obstáculos na bancada",
      "Deixar os trilhos do pantógrafo sem lubrificação com graxa apropriada (gera ruído e desgaste prematuro)"
    ],
    troubleshootingTips: [
      "Se os contornos pretos do bordado estão caindo 1 ou 2 milímetros fora do preenchimento colorido: verifique se não há folga mecânica nos parafusos de encaixe do pantógrafo",
      "Mantenha os trilhos e guias do pantógrafo sempre limpos de poeira e levemente lubrificados conforme manual do fabricante",
      "Ao prender o bastidor no braço da máquina: empurre até ouvir o 'clique' firme da trava de engate rápido"
    ],
    dicaArtrelados: "Sempre que for encaixar o bastidor no braço do pantógrafo da sua máquina, segure com as duas mãos e sinta o encaixe firme da trava! Se o bastidor ficar com uma folguinha de meio milímetro no engate, o contorno do seu bordado vai desencaixar do preenchimento e estragar a peça!",
    voceSabia: "O pantógrafo original inventado em 1603 era feito de varetas de madeira articuladas e era usado por artistas renascentistas para ampliar ou reduzir desenhos e mapas à mão com proporções geométricas exatas!",
    practicalExercise: "Encaixe o bastidor vazio no pantógrafo da sua máquina, desligue a máquina e tente balançar levemente o braço com a ponta do dedo: observe que ele deve ser absolutamente rígido e sem folgas laterais perceptíveis!",
    quickSummary: "Estrutura mecânica cartesiana e controle CNC que translada o bastidor a cada agulhada com resolução milimétrica de 0,1 mm por pulso.",
    relatedTerms: ["Motor de Passo", "Servomotor", "Coordenadas Cartesianas", "Encaixe de Contorno", "Ponto Morto Superior"],
    tags: ["m-027", "pantografo", "resolucao de eixos", "cinematica", "cnc", "pulsos", "movimento", "trilhos", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL FEDERATION OF ROBOTICS & TEXTILE AUTOMATION. CNC Motion Control and Cartesian Kinematics in Industrial Embroidery. Frankfurt: IFR, 2022.",
      "ARTRELADOS. Engenharia de Movimento no Bordado: Cinemática do Pantógrafo, Resolução de Eixos e Eliminação de Desalinhamentos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-028-matriz-conexao-pontos-salto-ocultos-branching-hidden-travel",
    code: "M-028",
    term: "Matriz de Conexão e Pontos de Salto Ocultos (Branching & Hidden Travel Stitching)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino / Do latim 'conexio' (ligação) e do inglês 'branching' (ramificação).",
    origin: "Algoritmo de teoria dos grafos e otimização de caminhos computacionais (Problema do Carteiro Chinês / Euleriano) aplicado ao puncionamento de bordados pela Wilcom e Tajima no início dos anos 2000.",
    summary: "Técnica de programação que interliga múltiplos ramos de bordado da mesma cor por caminhos ocultos sob pontos futuros, eliminando cortes de linha desnecessários.",
    definition: "A Técnica de Ramificação e Conexão com Pontos Ocultos (Branching / Smart Pathing / Hidden Under-Stitch Traveling) é uma metodologia avançada de digitalização vetorial em que diversos objetos separados da mesma cor (como folhas de um ramo, arabescos, letras cursivas ou pétalas florais) são interligados de forma inteligente em um único trajeto contínuo. Em vez de realizar um corte de linha (Trim) com nós de arremate a cada folha, o software ou puncionador insere pontos corridos de deslocamento que caminham estrategicamente por baixo de áreas que serão cobertas posteriormente por pontos cheios ou tatamis, reduzindo o tempo de máquina em até 40% e gerando um avesso perfeitamente limpo.",
    technicalDetails: "Parâmetros e lógica algorítmica de ramificação (Branching):\n• Teoria de Grafos: O algoritmo calcula o caminho ótimo de entrada e saída (Eulerian Path) para costurar todos os nós da mesma cor sem sobreposições duplicadas visíveis;\n• Travessia Oculta (Hidden Travel): O ponto corrido de transição caminha rigorosamente pelo centro das colunas que receberão cobertura de satim no futuro;\n• Redução de Ciclos de Corte: Cada corte mecânico de linha (Trim) consome entre 4 a 7 segundos de máquina (desaceleração, acionamento da faca, salto, aceleração e arremate); em um logotipo com 20 folhas, a ramificação economiza mais de 2 minutos por peça;\n• Redução de Fios Soltos (Jump Stitches): Elimina a necessidade de limpeza manual com tesoura de arremate após o bordado;\n• Preservação da Maciez: Evita o acúmulo de nós de início e fim no verso, mantendo o avesso plano e suave.",
    howItWorks: [
      "1. O programador desenha 15 folhas e arabescos separados da mesma cor verde em uma coroa de louros no software.",
      "2. Seleciona todos os objetos e aplica a ferramenta 'Ramificação Automática' (Branching) ou cria a rota manual de conexão.",
      "3. Define o ponto de entrada no início da primeira folha e o ponto de saída no final da última folha.",
      "4. O software calcula o trajeto: costura primeiro os sob-pontos e caminhos de ida, e volta cobrindo tudo com ponto cheio perfeito.",
      "5. A máquina de bordar executa todo o ramo verde em um único ciclo ininterrupto sem dar nenhum corte de linha.",
      "6. As facas da máquina não são acionadas desnecessariamente.",
      "7. A peça sai da máquina com a frente impecável e o verso limpo, sem nenhuma 'teia de aranha' de fios soltos."
    ],
    beginnerExplanation: "A conexão com pontos ocultos (ou ramificação) é como fazer um desenho lindo 'sem tirar a caneta do papel'! Quando você borda um galho cheio de folhinhas verdes, a máquina comum costura uma folha, corta a linha, pula para a próxima folha, dá nó, corta a linha de novo... Isso faz a máquina demorar um tempão e deixa o verso cheio de nós duros. Quando a matriz é inteligente e ramificada, a máquina viaja de uma folha para a outra por baixo dos pontos, costurando tudo de uma vez só sem nenhum corte! O bordado fica muito mais rápido e o verso fica limpinho como um espelho!",
    applications: [
      "Bordados de monogramas cursivos conectados e assinaturas caligráficas",
      "Ramos florais, arabescos clássicos, brasões e coroas de louros em enxovais",
      "Logotipos corporativos complexos com dezenas de elementos da mesma cor",
      "Otimização de tempo de máquina em produção seriada de alta escala industrial"
    ],
    commonErrors: [
      "Deixar a máquina dar dezenas de cortes de linha entre elementos minúsculos a 2 mm de distância um do outro",
      "Passar o ponto corrido de transição por fora do desenho sobre o tecido vazio (o fio fica exposto e visível)",
      "Ramificar objetos de cores diferentes gerando costuras cruzadas incorretas"
    ],
    troubleshootingTips: [
      "No Wilcom ou Embird, utilize sempre a ferramenta 'Branching' (atalho 'I' no Wilcom) após desenhar ramos florais ou conjuntos de folhas",
      "Confira na simulação em câmera lenta do software se os pontos de viagem estão perfeitamente escondidos sob as colunas cheias",
      "Se você estiver usando uma máquina doméstica sem corte automático de linha: a ramificação é fundamental para você não precisar cortar centenas de fios na mão"
    ],
    dicaArtrelados: "Quer economizar até 30% do tempo de produção das suas toalhas e enxovais? Aprenda a usar a ferramenta de ramificação (Branching) no seu software de digitalização! Um desenho com flores e folhas que demorava 25 minutos para bordar passa a bordar em apenas 16 minutos, com um verso super limpo e sem fiapos soltos!",
    voceSabia: "O mecanismo de corte automático de linha de uma máquina de bordar é a peça mecânica que mais sofre desgaste; matrizes otimizadas com ramificação inteligente chegam a dobrar a vida útil das facas de corte da máquina!",
    practicalExercise: "No seu software, desenhe 5 pequenos círculos alinhados: agrupe-os e aplique a ferramenta 'Ramificação' (Branching): simule o trajeto na tela e veja como o programa conecta todos eles por baixo sem um único comando de corte!",
    quickSummary: "Algoritmo avançado de programação que interliga objetos da mesma cor por trajetos ocultos, eliminando cortes de linha e aumentando a velocidade.",
    relatedTerms: ["Branching", "Corte de Linha (Trim)", "Ponto de Salto (Jump)", "Otimização de Matriz", "Avesso Limpo"],
    tags: ["m-028", "matriz de conexao", "branching", "pontos ocultos", "wilcom", "otimizacao", "sem cortes", "produtividade", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Branching Architecture and Graph Theory in Stitch Optimization. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Digitalização de Alta Performance: Ramificação Inteligente, Roteamento Oculto e Redução de Cortes na Produção. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-029-manta-termica-manta-silicone-prensa-heat-press-mat",
    code: "M-029",
    term: "Manta Térmica e Manta de Silicone para Prensa (Silicone Heat Press Mat & Thermal Pad)",
    letter: "M",
    level: "Intermediário 🟡",
    category: "Equipamentos & Acessórios",
    grammarClass: "Substantivo feminino / Do latim 'mantum' e do grego 'therme' (calor).",
    origin: "Desenvolvida na indústria de vulcanização de borrachas sintéticas e prensas térmicas de alta temperatura para distribuição homogênea de pressão e proteção de superfícies têxteis sensíveis durante a fixação de entretelas termocolantes e acabamentos.",
    summary: "Base resiliente e resistente a altas temperaturas (até 250°C) de borracha de silicone ou feltro de lã que equaliza a pressão de ferros e prensas térmicas.",
    definition: "A Manta Térmica de Silicone e Base de Lã para Passadoria (Silicone Heat Press Mat / Wool Ironing Pad / Manta Protetora Térmica) é um acessório essencial de termofixação utilizado no ateliê de bordados para acomodar tecidos durante a colagem de entretelas termocolantes, fusão de filmes adesivos de apliques, remoção de marcas de bastidor e fixação de películas macias no verso de bordados de bebês. Sua estrutura elástica e resistente a temperaturas elevadas (de 180°C a 260°C) absorve os relevos volumosos das linhas de bordado, permitindo que a base quente da prensa ou do ferro exerça pressão uniforme sobre a cola sem esmagar ou deformar o brilho dos pontos de bordado.",
    technicalDetails: "Propriedades físicas e termodinâmicas das mantas térmicas:\n• Material Base: Borracha de Silicone de Alta Densidade (espessura de 8 mm a 10 mm) ou Feltro de Lã Pura Prensada 100% natural (espessura de 12 mm a 15 mm);\n• Resistência Térmica Contínua: Suporta até 260°C sem deformação, derretimento ou liberação de gases tóxicos;\n• Resiliência Mecânica (Efeito Amortecedor): Permite que os pontos em relevo afundem suavemente na manta durante a prensagem, garantindo que o calor atinja a entretela termocolante sem achatar as linhas superiores;\n• Distribuição de Pressão: Elimina pontos frios e variações de contato entre o prato da prensa térmica e a costura;\n• Barreira Antiaderente: Frequentemente utilizada em conjunto com folhas de Teflon (PTFE) para evitar que resinas adesivas grudem na base da prensa.",
    howItWorks: [
      "1. A artesã posiciona a manta de silicone ou almofada de lã sobre a bancada de passadoria ou base da prensa térmica.",
      "2. Coloca a peça bordada com a frente voltada para baixo (em contato direto com a manta macia).",
      "3. Posiciona a película protetora de avesso (termoadesivo macio de bebê) sobre o verso do bordado.",
      "4. Cobre com uma folha de Teflon protetor.",
      "5. Abaixa o ferro quente ou fecha a prensa térmica com pressão uniforme por 12 a 15 segundos.",
      "6. A manta macia absorve o relevo das linhas de poliéster na frente, enquanto o calor cola a proteção no verso.",
      "7. Ao retirar a peça, o verso está perfeitamente selado e o bordado na frente mantém 100% do seu relevo fofo e brilho impecável."
    ],
    beginnerExplanation: "A manta térmica (de silicone ou de lã) é como um 'colchão fofinho resistente ao calor' para você passar suas peças bordadas com o ferro ou na prensa térmica! Quando você passa o ferro quente direto em cima do bordado sobre uma mesa dura, o ferro esmaga os pontos e deixa a linha toda achatada e sem graça. Quando você coloca essa mantinha embaixo da peça virada para baixo, o bordado afunda macio nela: você pode passar o ferro com força para colar entretelas e protetores de avesso de bebê sem estragar o relevo e sem queimar o pano!",
    applications: [
      "Aplicação de protetores de avesso termocolantes macios em bodies e enxovais de bebê",
      "Termofixação de filmes termocolantes de aplique (Heat-N-Bond) em alta temperatura",
      "Eliminação rápida de marcas redondas de queima de bastidor com vapor",
      "Colagem uniforme de entretelas termocolantes em tecidos de alfaiataria e jalecos"
    ],
    commonErrors: [
      "Passar o ferro quente com a frente do bordado direto sobre uma mesa dura de madeira (achata o relevo e quebra o brilho da linha)",
      "Usar esponjas comuns de colchão ou espumas sintéticas no lugar de manta térmica (elas derretem e pegam fogo com o calor)",
      "Pressionar a prensa térmica sem folha de teflon por cima de termocolantes expostos (a resina gruda na chapa quente)"
    ],
    troubleshootingTips: [
      "Passe suas peças bordadas sempre pelo avesso sobre uma base macia de lã ou silicone",
      "Use uma folha de Teflon (PTFE) limpa sobre a peça para evitar manchas de brilho em tecidos sintéticos escuros",
      "Mantenha a manta de silicone limpa, passando um pano úmido para remover resíduos de poeira e fiapos térmicos"
    ],
    dicaArtrelados: "Para passar peças bordadas de clientes como um verdadeiro profissional: coloque uma toalha felpuda dobrada ou uma manta de lã na mesa, coloque o bordado virado DE BRUÇOS (frente para baixo) e passe o ferro pelo avesso! O bordado afunda na textura e sai com o brilho e o relevo 100% intactos!",
    voceSabia: "As almofadas de passar feitas de lã pura 100% prensada retêm o calor do ferro em seu interior, de modo que ao passar uma peça sobre elas, o tecido recebe calor dos dois lados simultaneamente, reduzindo o tempo de passadoria pela metade!",
    practicalExercise: "Coloque uma toalha macia dobrada na mesa, vire um bordado com a frente para baixo e passe o ferro com vapor pelo avesso: desvire a peça e comprove como as linhas continuam redondinhas e volumosas!",
    quickSummary: "Base resiliente e resistente a altas temperaturas que equaliza a pressão térmica e preserva o relevo e o brilho dos pontos de bordado.",
    relatedTerms: ["Protetor de Avesso", "Folha de Teflon", "Prensa Térmica", "Termocolante", "Passadoria de Bordados"],
    tags: ["m-029", "manta termica", "manta de silicone", "prensa termica", "passadoria", "relevo", "teflon", "protetor de avesso", "artrelados"],
    bibliographicReferences: [
      "TEXTILE CARE & FINISHING RESEARCH GUILD. Thermal Pressing Dynamics, Silicone Cushioning and Surface Texture Preservation. Milão: TCFRG, 2022.",
      "ARTRELADOS. Finalização e Passadoria de Alta Costura no Bordado: Mantas Térmicas, Prensas, Protetores de Bebê e Acabamento Impecável. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-030-mecanismo-troca-automatica-cores-auto-color-change-cam",
    code: "M-030",
    term: "Mecanismo de Troca Automática de Cores (Auto Color Change Cam & Solenoid System)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino / Do grego 'mekhane' (invenção mecânica) e 'auto' (por si mesmo).",
    origin: "Inovação mecatrônica desenvolvida pela Tajima e Barudan na década de 1980 que substituiu as paradas manuais de máquina por um trilho deslizante com fuso helicoidal acionado por motor de passo ou solenoide.",
    summary: "Sistema eletromecânico que desloca o bloco de barras de agulha lateralmente para posicionar a próxima cor de linha sobre a lançadeira em frações de segundo.",
    definition: "O Mecanismo de Troca Automática de Cores (Automated Color Change Assembly / Color Change Cam, Screw & Solenoid Drive) é o sistema mecatrônico presente em máquinas de bordar multiagulhas e multicabeças que executa a troca física entre diferentes linhas sem intervenção humana. Quando o comando de troca de cor (Stop / Color Change) é lido na matriz, a máquina corta a linha da agulha atual, recolhe a barra de agulha ao ponto morto superior, aciona um servomotor ou solenoide que gira um fuso helicoidal (came cilíndrico) e translada todo o bloco do cabeçote lateralmente sobre rolamentos de precisão, alinhando a nova barra de agulha com o pino de acionamento do virabrequim principal.",
    technicalDetails: "Componentes e cinemática da troca automática de cores:\n• Fuso Helicoidal / Came Cilíndrico de Troca: Eixo ranhurado com canaletas de passo de precisão que converte a rotação do motor em deslocamento linear suave do bloco de agulhas;\n• Sensor de Posição de Agulha (Color Change Potentiometer / Absolute Encoder): Sensor óptico ou potenciômetro de precisão que informa à placa-mãe o número exato da agulha alinhada (ex: Agulha 1 a 15);\n• Tempo Médio de Troca: 1,2 a 2,5 segundos por troca de agulha;\n• Solenoide de Pega de Fio (Thread Picker): Haste eletromecânica acionada durante a troca para puxar suavemente a ponta da linha cortada para dentro do prendedor (Thread Retainer);\n• Micro-Chave de Fim de Curso: Proteção de segurança eletrônica que impede que o cabeçote tente se deslocar além da primeira ou última agulha física.",
    howItWorks: [
      "1. A máquina lê o comando de troca de cor da matriz no final do bloco atual de pontos.",
      "2. O motor principal para no ângulo de 100° (ponto morto superior de segurança).",
      "3. As facas inferiores cortam a linha e a mola de retorno recolhe a barra de agulha.",
      "4. O motor de troca de cor gira o fuso helicoidal.",
      "5. O cabeçote com todas as 15 agulhas desliza suavemente para a esquerda ou direita sobre o trilho.",
      "6. O sensor confirma que a nova agulha selecionada (ex: Agulha 7 - Vermelho) está perfeitamente alinhada com o virabrequim e a lançadeira.",
      "7. O motor principal dá a partida e a máquina retoma a costura imediatamente sem perder nem 2 segundos."
    ],
    beginnerExplanation: "Você já viu uma máquina de bordar industrial de 6 ou 10 agulhas trocando de cor sozinha? É como uma dança mecânica perfeita! Quando a máquina termina de bordar as folhas verdes e precisa bordar a flor vermelha, ela corta a linha verde, o bloco inteiro com todas as agulhas desliza para o lado com um barulhinho suave 'zumm-clique', a agulha vermelha entra no lugar certinho e a máquina volta a costurar na hora! É esse mecanismo automático que faz você economizar horas de trabalho sem precisar ficar enfiando linha na máquina toda hora!",
    applications: [
      "Bordado contínuo e ininterrupto de matrizes multicoloridas com até 15 ou mais cores",
      "Aumento drástico de produtividade em máquinas semi-industriais e industriais de alta produção",
      "Sincronização simultânea de dezenas de cabeçotes em máquinas multicabeças",
      "Execução de logotipos complexos com múltiplas tonalidades e degradês"
    ],
    commonErrors: [
      "Tentar forçar o bloco do cabeçote com a mão para os lados com a máquina ligada (descalibra o sensor de potenciômetro)",
      "Deixar pedaços de linha enrolados no fuso helicoidal traseiro do cabeçote (trava o motor de troca e acusa erro de agulha)",
      "Lubrificar o trilho do cabeçote com graxa pesada e pegajosa que endurece com o frio"
    ],
    troubleshootingTips: [
      "Se a máquina travar no meio da troca de cor com a mensagem 'Color Change Error': desligue e gire manualmente o botão traseiro do fuso de cor até a numeração da agulha travar no centro",
      "Aplique 1 gota de óleo mineral no feltro do trilho deslizante do cabeçote mensalmente para garantir deslizamento suave",
      "Verifique se nenhuma agulha está levemente torta ou pegando no pé calcador vizinho durante o deslocamento lateral"
    ],
    dicaArtrelados: "Em máquinas multiagulhas, programe as cores da matriz para agrupar agulhas vizinhas sempre que possível! Por exemplo: usar as agulhas 1, 2 e 3 em sequência é mais rápido para o cabeçote deslizar do que fazer a máquina pular da agulha 1 para a 15 e depois voltar para a 2!",
    voceSabia: "As primeiras máquinas de bordar automáticas utilizavam um sistema de correntes de bicicleta e discos dentados mecânicos para puxar as barras de agulha antes da invenção dos servomotores digitais no início dos anos 1980!",
    practicalExercise: "Fique de pé ao lado da sua máquina multiagulhas durante um bordado com várias cores: observe atentamente o momento em que a agulha sobe, a faca corta e o cabeçote desliza lateralmente com precisão cirúrgica!",
    quickSummary: "Sistema mecatrônico de alta precisão que translada lateralmente o conjunto de agulhas para alternar as cores da matriz sem paradas manuais.",
    relatedTerms: ["Máquina Multiagulhas", "Barra de Agulha", "Corte Automático", "Sensor de Posição", "Fuso Helicoidal"],
    tags: ["m-030", "troca de cores", "color change", "mecanismo", "solenoide", "fuso helicoidal", "multiagulhas", "industrial", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL SEWING & EMBROIDERY. Mechatronics of Automatic Color Change Systems and Cam Timing. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Engenharia dos Mecanismos de Troca Automática de Cor: Fusos, Sensores Ópticos, Potenciômetros e Alinhamento Mecânico. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

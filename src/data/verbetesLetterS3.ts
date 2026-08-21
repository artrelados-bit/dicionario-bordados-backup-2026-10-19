import { Verbete } from "../types";

export const VERBETES_LETTER_S3: Verbete[] = [
  {
    id: "salto-jump-stitch",
    code: "S-016",
    letter: "S",
    term: "Salto (Jump Stitch)",
    pronunciation: "sal-to (djan-pi istítxi)",
    level: "Iniciante 🟢",
    category: "Mecânica & Operação",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês jump stitch (ponto de salto). Deslocamento do pantógrafo sem penetração mecânica da agulha no tecido.",
    summary: "Movimento em que o pantógrafo desloca o bastidor de um ponto a outro sem costurar, gerando uma ponte de linha flutuante ou acionando o corte.",
    definition: "O Salto (Jump Stitch) é o comando de máquina que orienta o pantógrafo a se mover entre duas coordenadas espaciais distantes sem acionar a descida da agulha para penetração de costura. Em máquinas domésticas sem cortador automático, o salto deixa uma alça de linha esticada sobre o tecido que deve ser cortada manualmente com tesoura; em máquinas modernas e industriais, o salto aciona o solenoide do aparador de linha (Trimmer) se a distância ultrapassar o limite programado.",
    technicalDetails: "Nos formatos de arquivo binários padrão (como DST), saltos superiores a 12,1 mm são divididos internamente em múltiplos micro-saltos codificados (Jump Codes) devido ao limite de deslocamento de 7 bits do protocolo de hardware Tajima original.",
    beginnerExplanation: "É quando a máquina termina de bordar um pedacinho (como a bolinha da letra 'i') e 'pula' pelo ar até o próximo pedaço sem furar o tecido. Isso cria aquele fiozinho esticado que a máquina corta ou que você limpa com a tesourinha.",
    howItWorks: [
      "1. A máquina conclui o último ponto do objeto e executa a amarração de término (Tie-Off).",
      "2. O cortador automático apara a linha ou a agulha permanece erguida.",
      "3. O pantógrafo move o bastidor rapidamente até a coordenada inicial do próximo elemento.",
      "4. A máquina executa a amarração de início (Tie-In).",
      "5. A costura recomeça sem interrupção de produção."
    ],
    applications: [
      "Transição entre letras separadas em uma frase ou nome.",
      "Deslocamento entre objetos de mesma cor espalhados na matriz.",
      "Troca de áreas de costura em emblemas com múltiplos elementos.",
      "Recuo do pantógrafo para comandos de parada e corte de aplique."
    ],
    characteristics: [
      "Permite bordar múltiplos objetos independentes com o mesmo cone de linha.",
      "Consome tempo de máquina na aceleração e desaceleração do pantógrafo.",
      "Se não for aparado ou planejado, pode enroscar na sapatilha ou no calcador."
    ],
    commonErrors: [
      "❌ Deixar saltos longos sem amarrações de segurança nas pontas, fazendo a costura desmanchar quando o fio for cortado.",
      "❌ Não configurar a distância mínima de corte automático no painel da máquina, deixando fios soltos por cima do bordado.",
      "❌ Puxar a linha do salto com força excessiva antes de cortar, repuxando os pontos vizinhos."
    ],
    troubleshootingTips: [
      "Pontos desmanchando ao limpar os fios do salto: ative as 'Amarrações Automáticas' (Tie-Off) no software de digitalização.",
      "Máquina cortando a linha em saltos minúsculos de 1 mm: aumente a distância de corte no painel para no mínimo 2,0 mm a 3,0 mm.",
      "Fios de salto sendo costurados por baixo de outros objetos: reorganize a ordem de bordado para que os saltos ocorram sobre áreas já prontas ou livres."
    ],
    dicaArtrelados: "Para limpar os saltos de linha que sobraram: use sempre uma tesoura de ponta curva de precisão (tipo garça ou bico de pato) e corte rente ao nozinho sem puxar o tecido. O acabamento fica limpíssimo e profissional!",
    voceSabia: "As primeiras máquinas computadorizadas dos anos 1970 não tinham cortador automático; as bordadeiras tinham que passar horas cortando centenas de 'saltos' de linha manualmente com tesourinhas.",
    practicalExercise: "Digitalize a palavra 'ARTE' com letras separadas. Observe as linhas tracejadas de salto entre cada letra no simulador e veja como as amarrações são inseridas no final de cada letra.",
    quickSummary: "Salto (Jump Stitch) é o deslocamento do bastidor pelo ar entre dois pontos do bordado sem costurar, gerando uma ponte de linha ou ativando o corte automático.",
    relatedTerms: ["Salto de Linha", "Salto entre Objetos", "Corte Automático (Trimmer)", "Amarração de Término (Tie-Off)", "Otimizador de Saltos"],
    tags: ["salto", "jump stitch", "movimento", "corte", "operação"]
  },
  {
    id: "salto-de-linha",
    code: "S-017",
    letter: "S",
    term: "Salto de Linha",
    pronunciation: "sal-to de li-nha",
    level: "Iniciante 🟢",
    category: "Mecânica & Operação",
    grammarClass: "Substantivo masculino composto.",
    origin: "Termo de chão de fábrica do bordado brasileiro para descrever a ponte física de linha deixada entre dois pontos distantes.",
    summary: "Fio de linha esticado sobre a superfície do bordado resultante do deslocamento do bastidor entre dois segmentos costurados.",
    definition: "O Salto de Linha é o segmento físico de fio que permanece esticado no topo da peça entre o ponto de término de um elemento e o ponto inicial do próximo elemento da mesma cor. Quando a máquina dispõe de cortador automático funcional e a matriz foi devidamente programada, o salto de linha é cortado pela lâmina inferior; em máquinas sem corte ou em saltos inferiores ao limite programado, ele permanece visível e requer acabamento manual.",
    technicalDetails: "A retenção do salto de linha no topo depende da regulagem do prensador de linha (Thread Holder) e da tensão da mola de recolhimento. Se o fio ficar muito esticado e a lâmina cega mastigar a linha, pode ocorrer escape do fio da agulha no recomeço do ponto.",
    beginnerExplanation: "É aquele pedaço de linha que fica esticado por cima do tecido ligando uma letra à outra ou um pedaço do desenho ao próximo. É o fiozinho que a gente corta para deixar o trabalho limpo e bonito.",
    howItWorks: [
      "1. A máquina borda a primeira letra e sobe a agulha.",
      "2. O bastidor se move até a segunda letra esticando o fio de linha por cima da peça.",
      "3. A agulha desce na segunda letra e continua bordando.",
      "4. Fica visível uma pontezinha de linha sobre o tecido.",
      "5. No final do bordado, a bordadeira apara esse salto com a tesourinha de bico curvo."
    ],
    applications: [
      "Ligação entre letras de nomes e textos espaçados.",
      "Conexão entre detalhes pequenos da mesma cor (estrelinhas, bolinhas, folhas).",
      "Identificação visual do trajeto de bordado durante o monitoramento da produção."
    ],
    characteristics: [
      "Elemento natural da física do bordado com uma única agulha por cor.",
      "Deve ser minimizado na programação com bons trajetos de ponto corrido escondido.",
      "Fácil de remover quando acompanhado de amarrações adequadas."
    ],
    commonErrors: [
      "❌ Deixar os saltos de linha serem costurados por cima por uma camada posterior de outra cor, prendendo o fio debaixo dos pontos para sempre.",
      "❌ Cortar o salto de linha puxando para cima com força, repuxando o tecido e afrouxando os pontos vizinhos.",
      "❌ Usar lâmina de corte amassada ou cega que desfia o salto de linha em vez de cortar limpo."
    ],
    troubleshootingTips: [
      "Salto de linha sendo costurado por baixo: pause a máquina imediatamente após a primeira cor e corte todos os saltos aparentes antes de prosseguir.",
      "Pontas de linha espetadas para fora do bordado: use uma tesourinha de alta precisão com bico curvado e corte o mais rente possível.",
      "Máquina perdendo a linha da agulha após o salto: regule a mola do estica-fio e aumente a sobra de linha (Tail Length) no painel."
    ],
    dicaArtrelados: "Se a sua máquina não tem corte automático: crie o hábito de pausar a máquina a cada troca de cor e limpar todos os saltos de linha visíveis com a tesourinha antes de bordar a próxima cor. O verso e a frente do seu bordado ficarão perfeitos!",
    voceSabia: "Em ateliês de alta costura, as peças passam por um setor especializado chamado 'Limpeza e Acabamento Têxtil', onde profissionais dedicam-se exclusivamente a aparar micro-saltos de linha com iluminação cirúrgica.",
    practicalExercise: "Borde um nome de 5 letras em uma máquina. Ao terminar, use uma pinça e tesoura curva para cortar os 4 saltos de linha entre as letras rente ao tecido. Sinta a transformação visual na peça pronta.",
    quickSummary: "Salto de Linha é o segmento de fio que liga dois objetos distantes da mesma cor, devendo ser aparado automaticamente pela máquina ou limpo manualmente com tesoura.",
    relatedTerms: ["Salto (Jump Stitch)", "Tesoura Garça / Bico de Pato", "Limpeza de Fios", "Acabamento de Bordado"],
    tags: ["salto de linha", "fios", "acabamento", "limpeza", "corte manual"]
  },
  {
    id: "salto-entre-objetos",
    code: "S-018",
    letter: "S",
    term: "Salto entre Objetos",
    pronunciation: "sal-to en-tre ob-je-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do sequenciamento e roteamento de nós vetoriais em softwares de digitalização de matrizes.",
    summary: "Transição e deslocamento do pantógrafo entre dois elementos gráficos distintos de uma mesma matriz.",
    definition: "O Salto entre Objetos é a transferência do processo de costura do ponto final do 'Objeto A' para o ponto inicial do 'Objeto B'. Um salto entre objetos bem planejado pelo programador utiliza trajetos de ligação ocultos (Travel Runs / Caminhos de Ligação) passando por baixo de áreas que serão cobertas posteriormente, minimizando paradas de máquina e cortes de linha desnecessários.",
    technicalDetails: "Quando dois objetos estão a menos de 1,5 mm a 2,0 mm de distância, é preferível conectá-los com ponto corrido embutido (Run Connection); quando a distância é maior que 5,0 mm a 10,0 mm em áreas abertas, programa-se o corte com amarração obrigatória para manter a peça limpa.",
    beginnerExplanation: "É quando a máquina termina de bordar uma florzinha e viaja até outra florzinha do outro lado do desenho. Se o desenhista for esperto, ele esconde o caminho da linha por baixo das folhas para a máquina não precisar cortar o fio à toa.",
    howItWorks: [
      "1. A máquina finaliza a costura do Objeto A.",
      "2. O software verifica se há caminho oculto até o Objeto B.",
      "3. Se houver caminho livre por baixo de preenchimentos futuros, faz um ponto corrido escondido.",
      "4. Se o espaço for aberto sobre o tecido, executa amarração, aciona o corte e faz o salto.",
      "5. A costura do Objeto B tem início limpo e seguro."
    ],
    applications: [
      "Conexão entre partes do mesmo desenho (ex: corpo, orelhas e rabo de um ursinho).",
      "Navegação inteligente em frases longas e arabescos florais.",
      "Redução drástica do tempo de ciclo em produção de milhares de peças.",
      "Eliminação de cortes de linha barulhentos e desgastantes para a mecânica da máquina."
    ],
    characteristics: [
      "Determina a fluidez e a elegância da execução da matriz na máquina.",
      "Diferencia matrizes profissionais de matrizes amadoras ou automáticas.",
      "Protege as lâminas de corte contra desgaste mecânico prematuro."
    ],
    commonErrors: [
      "❌ Passar ponto corrido de ligação por cima de tecido exposto que não será coberto por nada, estragando o visual da peça.",
      "❌ Gerar 50 cortes automáticos em um desenho simples porque os saltos entre objetos foram deixados desordenados.",
      "❌ Não alinhar o ponto de saída do Objeto A com o ponto de entrada mais próximo do Objeto B."
    ],
    troubleshootingTips: [
      "Linha de ligação aparecendo sobre o tecido: no software, ajuste o ponto de término e transforme a ligação em um salto com corte ou passe a linha por baixo de outro objeto.",
      "Máquina fazendo 'tlec-tlec' de corte a cada 3 segundos: agrupe os objetos vizinhos e ajuste os pontos de entrada e saída para criar continuidade.",
      "Tempo de produção muito alto: otimize a rota dos saltos entre objetos usando a ferramenta 'Ramificação Automática' (Branching)."
    ],
    dicaArtrelados: "Para fazer a máquina bordar super rápido e sem ficar cortando linha toda hora: posicione a saída do primeiro objeto pertinho da entrada do próximo e use a ferramenta de 'Ramificação' (Branching). A máquina costura tudo numa viagem só!",
    voceSabia: "Cada corte automático com salto consome cerca de 5 a 7 segundos de máquina (desaceleração, corte, movimento e rampa de arranque). Eliminar 20 cortes em uma matriz economiza mais de 2 minutos por peça bordada!",
    practicalExercise: "Desenhe 4 círculos separados por 2 cm. Programe os 4 com entrada e saída no lado direito e veja a bagunça de saltos. Depois, ajuste os pontos de entrada e saída de forma alternada (esquerda/direita) e veja como os saltos ficam curtos e organizados.",
    quickSummary: "Salto entre Objetos é a transição de costura de um elemento ao próximo, que deve ser otimizada com caminhos ocultos ou cortes limpos para ganhar velocidade e qualidade.",
    relatedTerms: ["Otimização de Trajeto", "Ramificação (Branching)", "Travel Run (Caminho de Ligação)", "Sequência de Objetos"],
    tags: ["salto", "objetos", "transição", "roteamento", "produtividade"]
  },
  {
    id: "salto-excessivo",
    code: "S-019",
    letter: "S",
    term: "Salto Excessivo",
    pronunciation: "sal-to ex-ces-si-vo",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Diagnóstico de falha de digitalização caracterizado pela proliferação desordenada de trajetos aéreos de pantógrafo.",
    summary: "Problema estrutural de matriz onde ocorrem centenas de saltos e cortes de linha por falta de planejamento de sequência.",
    definition: "O Salto Excessivo é uma grave não-conformidade na programação de matrizes de bordado, caracterizada pela ocorrência desnecessária e repetitiva de deslocamentos aéreos do pantógrafo e comandos de corte. Ocorre comumente em matrizes geradas por 'digitalização 100% automática' sem intervenção humana, onde cada pequeno nó ou detalhe gera um corte e um salto desgovernado.",
    technicalDetails: "Matrizes com salto excessivo aumentam o tempo de ciclo em até 300%, elevam dramaticamente o índice de quebra de agulha e linha, aceleram o desgaste térmico dos solenoides de corte e geram nós acumulados no avesso do tecido que podem ferir a pele do usuário.",
    beginnerExplanation: "É quando uma matriz foi tão mal programada que a máquina parece uma pipoca: borda 3 pontinhos aqui, pula para lá, corta a linha, pula de volta, corta de novo... O bordado demora uma eternidade e fica cheio de nós feios por baixo.",
    howItWorks: [
      "1. A matriz automática gera centenas de pequenos objetos desordenados.",
      "2. A máquina executa um micro-detalhe e faz um salto longo.",
      "3. Aciona o corte de linha, desacelera o motor e viaja pelo bastidor.",
      "4. Recomeça em velocidade baixa, dá 5 pontos e corta de novo.",
      "5. A produção perde tempo, gasta linha e arrisca quebrar peças da máquina."
    ],
    applications: [
      "Diagnóstico e auditoria de qualidade de matrizes compradas ou baixadas na internet.",
      "Treinamento de digitalizadores para eliminação de desperdício de movimentos.",
      "Reprogramação de matrizes antigas para ganho de produtividade no ateliê."
    ],
    characteristics: [
      "Causa barulho excessivo e batidas secas de solenoides de corte.",
      "Deixa o verso do bordado empelotado com dezenas de amarrações.",
      "Sintoma clássico de amadorismo na digitalização."
    ],
    commonErrors: [
      "❌ Comprar matrizes baratas na internet e colocar direto na máquina sem verificar a quantidade de saltos no simulador.",
      "❌ Usar ferramentas de 'varinha mágica' ou vetorização automática direta sem ordenar os elementos.",
      "❌ Tentar compensar os saltos excessivos desativando o cortador da máquina, criando um emaranhado de teia de aranha por cima do bordado."
    ],
    troubleshootingTips: [
      "Máquina cortando linha dezenas de vezes em um bordado pequeno: abra a matriz no software e faça o sequenciamento manual ou use a ferramenta 'Otimizar Trajeto'.",
      "Avesso do bordado parecendo um carpete cheio de nós: elimine micro-objetos soltos e junte elementos da mesma cor em um único trajeto contínuo.",
      "Mecanismo de corte esquentando: reduza a quantidade de cortes da matriz reagrupando os objetos por proximidade."
    ],
    dicaArtrelados: "Antes de colocar qualquer matriz desconhecida na sua máquina: dê o 'Play' no simulador do seu computador! Se você vir a máquina pulando de um lado para o outro sem parar como uma louca, pare e reorganize a sequência. Sua máquina vai agradecer!",
    voceSabia: "Em auditorias industriais de grandes marcas têxteis, uma matriz pode ser reprovada sumariamente se apresentar mais de 1 corte a cada 1.000 pontos bordados em elementos da mesma cor.",
    practicalExercise: "Abra uma matriz automática no software e conte quantos cortes de linha ela possui. Aplique a ferramenta 'Ramificação' (Branching) em todos os objetos da mesma cor e veja a quantidade de cortes cair de 30 para apenas 2!",
    quickSummary: "Salto Excessivo é a proliferação descontrolada de cortes e pulos de pantógrafo em matrizes mal programadas, que atrasa a produção e desgasta a máquina.",
    relatedTerms: ["Salto Desnecessário", "Otimizador de Saltos", "Ramificação (Branching)", "Digitalização Automática"],
    tags: ["salto excessivo", "erros", "desperdício", "otimização", "corte"]
  },
  {
    id: "salto-desnecessario",
    code: "S-020",
    letter: "S",
    term: "Salto Desnecessário",
    pronunciation: "sal-to des-ne-ces-sá-ri-o",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Conceito de eficiência algorítmica e eliminação de redundâncias de trajeto em desenho técnico.",
    summary: "Deslocamento aéreo de linha que poderia ter sido evitado mediante ajuste de pontos de conexão ou trajeto oculto.",
    definition: "O Salto Desnecessário é qualquer movimento de salto ou comando de corte inserido em uma matriz que poderia ter sido eliminado sem prejuízo visual para a peça. Decorre tipicamente do posicionamento incorreto dos pontos de início (Green Cross) e término (Red Cross) de objetos vetoriais, ou da falta de utilização de pontos corridos de conexão embutidos sob camadas de preenchimento subsequentes.",
    technicalDetails: "A eliminação de saltos desnecessários é obtida através de técnicas como: inversão de sentido de costura (Reverse Direction), alinhamento de nós contíguos e criação de pontes de passagem de ponto corrido com comprimento de 2,0 mm sob áreas de cobertura futura.",
    beginnerExplanation: "É um pulo de linha que não precisava ter acontecido se o desenho tivesse sido planejado com um pouquinho mais de carinho: a máquina vai lá na frente e depois volta para o mesmo lugar à toa, quando poderia ter feito tudo em ordem.",
    howItWorks: [
      "1. A programadora analisa a ordem dos objetos na lista de camadas.",
      "2. Percebe que o Objeto 1 termina na esquerda e o Objeto 2 começa na direita distante.",
      "3. Inverte o ponto de início/saída do Objeto 2 para que comece pertinho do término do Objeto 1.",
      "4. O salto aéreo desaparece e a máquina costura em sequência perfeita.",
      "5. A matriz ganha fluidez, velocidade e acabamento impecável."
    ],
    applications: [
      "Refinamento de monogramas e caligrafias cursivas conectadas.",
      "Otimização de contornos de personagens e logomarcas.",
      "Ajuste fino de matrizes para produção industrial em larga escala.",
      "Redução de custos de mão de obra de limpeza de fios."
    ],
    characteristics: [
      "Pode ser 100% corrigido no software em poucos minutos de edição.",
      "Reduz a fadiga de operação e o consumo desnecessário de carretilhas.",
      "Gera matrizes suaves, silenciosas e elegantes de bordar."
    ],
    commonErrors: [
      "❌ Deixar o ponto de saída de uma pétala de flor no lado oposto ao início da próxima pétala contígua.",
      "❌ Cortar a linha entre duas letras que já são grudadas uma na outra na escrita cursiva.",
      "❌ Não verificar as conexões após redimensionar ou mover objetos de lugar na matriz."
    ],
    troubleshootingTips: [
      "Máquina cortando linha no meio de uma palavra manuscrita: mova os pontos de início e término das letras para o ponto exato onde os traços se tocam.",
      "Salto longo passando por cima de um fundo que ainda vai ser bordado: mude a ordem das camadas para que o salto fique escondido por baixo ou use um trajeto de ligação.",
      "Fios soltos no meio do desenho: ative a exibição de conectores no software (atalho geralmente 'Ctrl+T' ou 'Ver Conectores') e elimine os saltos avulsos."
    ],
    dicaArtrelados: "Em fontes cursivas (manuscritas): una as letrinhas sobrepondo os pontos finais de uma letra com o início da próxima. O bordado escreve a palavra inteira como uma caneta mágica no papel, sem dar um único corte de linha!",
    voceSabia: "Na gíria dos mestres digitalizadores, programar uma matriz eliminando todos os saltos desnecessários é chamado de 'Fazer o Trajeto da Serpente' (Snake Routing).",
    practicalExercise: "Escreva a palavra 'Amor' em fonte manuscrita no software. Ajuste os pontos de início e fim para que ela borde do 'A' até o 'r' sem cortar nenhuma vez. Veja como a máquina trabalha suave e rápida!",
    quickSummary: "Salto Desnecessário é o pulo de linha evitável que pode ser corrigido reposicionando pontos de entrada/saída ou usando trajetos ocultos para agilizar o bordado.",
    relatedTerms: ["Salto Excessivo", "Travel Run", "Conectores", "Sequenciamento Manual", "Otimização de Trajeto"],
    tags: ["salto desnecessário", "otimização", "conectores", "fluidez", "edição"]
  },
  {
    id: "sequencia-de-bordado",
    code: "S-021",
    letter: "S",
    term: "Sequência de Bordado",
    pronunciation: "se-quên-ci-a de bor-da-do",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da lógica cronológica e estrutural de deposição de camadas físicas no espaço tridimensional.",
    summary: "Ordem cronológica e hierárquica exata em que cada elemento, cor e objeto da matriz é executado pela máquina.",
    definition: "A Sequência de Bordado (ou Ordem de Costura / Stitch Order) é o plano temporal de execução que estabelece qual objeto é bordado primeiro, qual vem a seguir e qual finaliza o trabalho. Uma sequência profissional obedece a regras de física têxtil: do fundo para a frente (Background to Foreground), do centro para as bordas (Center-Out) e das estruturas de suporte para os acabamentos superiores.",
    technicalDetails: "Uma sequência invertida ou incorreta causa desvios graves de registro (quando o contorno não encaixa no preenchimento), rugas de tecido encurralado, sobreposições de cores indesejadas e até colisão da agulha com áreas já bordadas e endurecidas.",
    beginnerExplanation: "É a ordem de quem borda primeiro e quem borda depois, como pintar uma casa: primeiro você pinta o fundo da parede, depois faz as janelas e por último faz os contornos e detalhes finais.",
    howItWorks: [
      "1. A máquina borda os suportes inferiores (Underlay) de ancoragem no tecido.",
      "2. Borda os preenchimentos grandes de fundo (tatami/céu/pele).",
      "3. Borda os objetos intermediários (roupas, flores, detalhes secundários).",
      "4. Borda os pontos nobres de satim (letras, molduras, hastes).",
      "5. Finaliza com os contornos de precisão e pontos de luz.",
      "6. A matriz se encaixa com precisão cirúrgica sem frestas."
    ],
    applications: [
      "Planejamento de qualquer matriz desde o desenho inicial até a produção.",
      "Bordados em camadas com efeitos tridimensionais e sobreposições.",
      "Montagem de apliques e técnicas 'In-The-Hoop' (ITH) em etapas sequenciais.",
      "Produção de peças grandes com estabilidade dimensional absoluta."
    ],
    characteristics: [
      "Governa o sucesso do alinhamento entre preenchimentos e contornos.",
      "Minimiza a quantidade de trocas de carretel/cone de linha.",
      "Evita que o tecido se desloque e crie 'frestas brancas' no desenho."
    ],
    commonErrors: [
      "❌ Bordar os contornos finos primeiro e o preenchimento de fundo depois, fazendo o preenchimento engolir os contornos.",
      "❌ Ficar trocando de cor 20 vezes para lá e para cá por não ter agrupado os objetos da mesma cor na sequência certa.",
      "❌ Bordar das pontas externas em direção ao centro, encurralando uma prega de tecido no meio da peça."
    ],
    troubleshootingTips: [
      "Contorno preto saindo fora do lugar do desenho colorido: altere a sequência para que o contorno borde imediatamente após o preenchimento daquela parte.",
      "Trocas de linha demais na máquina: agrupe os elementos da mesma cor na lista de sequência do software.",
      "Tecido ficando torto no bastidor: certifique-se de que a sequência inicie sempre pelo centro do bastidor."
    ],
    dicaArtrelados: "A regra de ouro da sequência perfeita no ateliê: 1º o fundo, 2º o meio, 3º os detalhes e POR ÚLTIMO os contornos! Seguindo essa regrinha, seus bordados nunca mais vão sair fora do contorno!",
    voceSabia: "Em matrizes tradicionais japonesas de quimonos, a sequência de bordado era considerada uma arte sagrada chamada 'Kigumi', onde a ordem dos fios representava a harmonia da natureza.",
    practicalExercise: "Abra a lista de objetos de uma matriz e observe a árvore de sequência. Experimente arrastar o contorno final para o início da lista e veja no simulador como o desenho ficaria completamente errado se fosse bordado assim.",
    quickSummary: "Sequência de Bordado é a ordem cronológica de costura que constrói o desenho do fundo para a frente e do centro para fora com alinhamento perfeito.",
    relatedTerms: ["Sequência de Cores", "Sequência de Objetos", "Ordem de Bordado", "Registro de Contorno", "Underlay"],
    tags: ["sequência", "ordem", "camadas", "alinhamento", "planejamento"]
  },
  {
    id: "sequencia-de-pontos",
    code: "S-022",
    letter: "S",
    term: "Sequência de Pontos",
    pronunciation: "se-quên-ci-a de pon-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do fluxo computacional e binário de coordenadas de penetração de agulha em tempo real.",
    summary: "Ordem sequencial exata de cada penetração de agulha dentro de um único objeto ou bloco de costura.",
    definition: "A Sequência de Pontos é a microestrutura cronológica que dita a ordem em que cada ponto individual é formado dentro dos limites de um objeto vetorial específico. Governa a transição entre o subponto inferior (Underlay), o ponto de amarração de entrada (Tie-In), as passadas principais de cobertura (Top Stitch) e a amarração de saída (Tie-Off).",
    technicalDetails: "Nos algoritmos de digitalização, a sequência de pontos é calculada para evitar que a agulha cruze sobre linhas recém-formadas em ângulos desfavoráveis, garantindo que o estica-fio consiga tensionar a laçada perfeitamente a cada rotação do eixo principal.",
    beginnerExplanation: "É a ordem passinho a passinho que a agulha faz dentro de uma única letra ou desenho: primeiro ela dá os pontinhos de trava para a linha não soltar, depois faz a base por baixo, depois faz o cetim brilhante por cima e no final dá o nozinho de arremate.",
    howItWorks: [
      "1. A agulha desce 3 vezes no mesmo local fazendo o nó inicial (Tie-In).",
      "2. Percorre o centro da coluna fazendo a linha guia de suporte (Underlay).",
      "3. Chega à extremidade e inicia as passadas completas de ponto cheio (Satin).",
      "4. Avança uniformemente até a outra ponta da coluna.",
      "5. Executa 3 micro-pontos de travamento final (Tie-Off) e para.",
      "6. A coluna fica firme, com nó invisível e acabamento perfeito."
    ],
    applications: [
      "Construção segura de letras de monogramas sem nós aparentes.",
      "Preenchimento ordenado de grandes áreas em tatami sem furos duplicados.",
      "Calibração de subpontos estruturais para toalhas e malhas finas.",
      "Programação de bordados de alta velocidade para máquinas industriais."
    ],
    characteristics: [
      "Garante que o ponto não desmanche após a lavagem da peça.",
      "Assegura a correta deposição mecânica dos filamentos de linha.",
      "Evita quebras de linha por atrito de pontos sobrepostos."
    ],
    commonErrors: [
      "❌ Iniciar as passadas de cobertura sem a amarração prévia, fazendo a linha soltar no primeiro puxão.",
      "❌ Colocar a amarração de término no lado visível de cima da letra em vez de escondê-la por baixo dos pontos.",
      "❌ Criar sequência de pontos com vaivém confuso dentro do mesmo objeto, gerando áreas com espessura irregular."
    ],
    troubleshootingTips: [
      "Linha soltando assim que a máquina corta: verifique se a sequência de pontos contém os pontos de amarração inicial e final ativados.",
      "Nó feio aparecendo no meio da letra: configure a amarração de saída para o modo 'Invisível / Sob a Coluna' (Under-Stitch Tie-Off).",
      "Ponto embolando por baixo no início da costura: reduza a velocidade nos 3 primeiros pontos com o recurso 'Soft Start' da máquina."
    ],
    dicaArtrelados: "Para letras perfeitamente limpas: configure a amarração de término para acontecer POR BAIXO da coluna de cetim e não na ponta externa. O nozinho fica 100% invisível e o acabamento parece mágica!",
    voceSabia: "Em um bordado a 800 PPM, a máquina executa mais de 13 penetrações de agulha por segundo, exigindo que a sequência de pontos seja matematicamente perfeita para não embolar o fio.",
    practicalExercise: "Use o simulador de ponto a ponto do software (teclando a seta para a direita). Observe a agulha fazendo primeiro a amarração, depois o suporte e finalmente o ponto cheio por cima.",
    quickSummary: "Sequência de Pontos é a ordem microscópica de cada descida da agulha dentro de um objeto, desde a amarração inicial até o arremate final.",
    relatedTerms: ["Tie-In (Amarração Inicial)", "Tie-Off (Amarração Final)", "Underlay", "Formação do Ponto", "Stitch"],
    tags: ["pontos", "microsequência", "amarração", "arremate", "precisão"]
  },
  {
    id: "sequencia-de-cores",
    code: "S-023",
    letter: "S",
    term: "Sequência de Cores",
    pronunciation: "se-quên-ci-a de co-res",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da harmonia cromática e do gerenciamento de paradas de máquina para troca de cones de linha.",
    summary: "Ordem programada de utilização das diferentes cores de linha ao longo da execução da matriz.",
    definition: "A Sequência de Cores (ou Tabela de Troca de Cores / Color Stop Sequence) é a listagem ordenada de blocos de cor que dita quando a máquina deve parar (em máquinas de uma agulha) para a troca manual do carretel, ou qual agulha/cabeçote deve ser selecionado automaticamente (em máquinas industriais multi-agulhas com troca automática de cor).",
    technicalDetails: "Uma sequência de cores bem elaborada agrupa todos os elementos da mesma cor em blocos contíguos (a menos que a sobreposição física exija separação em camadas), reduzindo o número total de paradas (Color Stops) ao mínimo indispensável para máxima produtividade.",
    beginnerExplanation: "É a lista que diz qual cor de linha entra primeiro na máquina, qual entra em segundo e qual entra por último. Agrupar as cores evita que você fique trocando de linha toda hora na máquina.",
    howItWorks: [
      "1. A programadora atribui as cores digitais aos objetos da matriz.",
      "2. O software agrupa os objetos da mesma cor no menor número de blocos possível.",
      "3. Gera o arquivo de máquina com comandos 'STOP' ou códigos de agulha (C01, C02, C03...).",
      "4. Na máquina doméstica, o painel avisa a cor do próximo cone a ser colocado.",
      "5. Na máquina industrial, o cabeçote gira automaticamente para a agulha da próxima cor.",
      "6. A peça é bordada com riqueza de cores e tempo otimizado."
    ],
    applications: [
      "Logotipos corporativos policromáticos com especificações rígidas de pantone.",
      "Desenhos infantis e florais com dezenas de tons harmônicos.",
      "Controle de produção em oficinas com máquinas multi-agulhas de 6, 10 ou 15 agulhas.",
      "Fichas técnicas de produção para guiar as operadoras no chão de fábrica."
    ],
    characteristics: [
      "Impacto direto no conforto da bordadeira e no tempo de máquina parada.",
      "Permite visualização realista do produto final na tela antes de bordar.",
      "Deve respeitar as sobreposições físicas de elementos no tecido."
    ],
    commonErrors: [
      "❌ Deixar uma cor picada em 10 etapas diferentes na matriz, obrigando a operadora a trocar o cone 10 vezes desnecessariamente.",
      "❌ Não imprimir a folha de produção com a sequência de cores, fazendo a operadora errar a cor da linha na máquina.",
      "❌ Confundir ordem de cor com ordem de camadas, fazendo uma cor de fundo bordar por cima de um detalhe que já estava pronto."
    ],
    troubleshootingTips: [
      "Trocando de linha muitas vezes na mesma cor: use a ferramenta 'Otimizar Cores / Juntar Cores Iguais' no software de edição.",
      "Cores da tela não batendo com as cores reais do cone: configure a tabela de linhas no software para a marca real de fios que você usa (ex: Linhas Setta, Lumina, Madeira, Isacord).",
      "Máquina multi-agulhas bordando a cor errada: verifique o mapa de agulhas no painel da máquina antes de apertar o play."
    ],
    dicaArtrelados: "Ao criar matrizes no computador: use a ferramenta 'Agrupar Cores Iguais' antes de salvar o arquivo final para o pendrive. Isso reduz o tempo de trabalho pela metade e poupa seus braços de ficarem trocando carretel toda hora!",
    voceSabia: "As máquinas industriais mais modernas trocam de cor automaticamente em menos de 3 segundos utilizando um sistema pneumático ou servomotor de deslocamento de barra de agulhas.",
    practicalExercise: "Abra uma matriz com 8 trocas de cor. Use a ferramenta 'Reordenar por Cor' no software para juntar as cores repetidas, mantendo os contornos por último. Veja quantas trocas de cor foram eliminadas.",
    quickSummary: "Sequência de Cores é a ordem programada de uso de cada cone de linha, devendo ser otimizada para reduzir trocas de carretel e paradas de máquina.",
    relatedTerms: ["Troca de Cor (Color Change)", "Mapa de Agulhas", "Folha de Produção (Run Sheet)", "Sequência de Bordado", "Paleta de Cores"],
    tags: ["cores", "sequência", "paleta", "troca de linha", "produção"]
  }
];

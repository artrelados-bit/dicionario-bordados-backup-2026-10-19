import { Verbete } from "../types";

export const VERBETES_LETTER_Q4: Verbete[] = [
  {
    id: "quantidade-de-pontos",
    code: "Q-026",
    letter: "Q",
    term: "Quantidade de Pontos",
    pronunciation: "quan-ti-da-de de pon-tos",
    level: "Iniciante 🟢",
    category: "Terminologia Geral",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim quantitas (medida, grandeza, contagem). No mercado de bordado, é a unidade métrica padrão de medição de tamanho, tempo e precificação de matrizes.",
    summary: "Número total de perfurações de agulha e laçadas que compõem uma matriz de bordado, usado como base de custo e tempo de máquina.",
    definition: "A quantidade de pontos (Stitch Count) é a somatória de todas as penetrações com laçada registradas no arquivo de bordado. É a métrica fundamental para orçamentos comerciais (ex: valor cobrado por milheiro de pontos), estimativa do tempo de execução na máquina e cálculo da quantidade de linha superior e de bobina consumida.",
    technicalDetails: "Uma matriz padrão de peito (logotipo de 8 a 10 cm) contém tipicamente entre 4.000 e 12.000 pontos; bordados grandes de costas de jaqueta podem ultrapassar 40.000 a 100.000 pontos. O excesso de pontos para uma área pequena indica sobreposição inútil ou densidade descalibrada.",
    beginnerExplanation: "É o número total de pontinhos que a máquina vai dar para fazer o desenho inteiro. Quanto mais pontos o bordado tiver, mais tempo ele demora para ficar pronto e mais linha ele gasta.",
    howItWorks: [
      "1. Cada comando vetorial é convertido em coordenadas de pontos pelo software.",
      "2. O total de pontos é gravado no cabeçalho do arquivo (header DST/PES).",
      "3. O painel da máquina exibe o contador progressivo (ex: 3.450 / 12.000).",
      "4. O tempo estimado é calculado dividindo a quantidade de pontos pela velocidade média (PPM)."
    ],
    applications: [
      "Formulação de tabelas de preços e orçamentos para clientes corporativos.",
      "Planejamento de capacidade de produção diária em oficinas de bordado.",
      "Cálculo de consumo e estoque de linhas de bordar e bobinas."
    ],
    characteristics: [
      "Métrica universal exibida em todos os softwares e painéis de máquinas.",
      "Diretamente proporcional à densidade e à área coberta pelo bordado.",
      "Indica a complexidade e a robustez estrutural da matriz."
    ],
    commonErrors: [
      "❌ Cobrar o bordado apenas pelo tamanho em centímetros, ignorando se tem 2.000 ou 20.000 pontos.",
      "❌ Achar que quanto mais pontos tiver a matriz, mais bonita ela será (excesso de pontos endurece o tecido).",
      "❌ Redimensionar a matriz no software sem verificar se o número de pontos foi recalculado."
    ],
    troubleshootingTips: [
      "Bordado demorando mais que o previsto: verifique a quantidade de pontos e otimize preenchimentos redundantes.",
      "Tecido furando por excesso de pontos: use a ferramenta de filtro de pontos curtos (Short Stitch Filter) para eliminar pontos menores que 0,4 mm.",
      "Orçamento dando prejuízo: recalcule o preço com base na quantidade real de pontos por milheiro + custos fixos."
    ],
    dicaArtrelados: "Para saber o tempo real de bordado em minutos: divida a quantidade de pontos por 500 (em máquinas domésticas) ou por 700 (em máquinas industriais). Isso já inclui o tempo médio de cortes e trocas de cor!",
    voceSabia: "O maior bordado contínuo já registrado na história foi a 'Tapeçaria de Bayeux Moderna', com mais de 35 milhões de pontos de bordado digitalizados.",
    practicalExercise: "Abra três arquivos de bordado diferentes no seu software ou painel da máquina. Anote a quantidade de pontos, meça as dimensões em centímetros e calcule a média de pontos por centímetro quadrado de cada um.",
    quickSummary: "Quantidade de pontos é a contagem total de laçadas de uma matriz, sendo a principal base para precificação e cálculo de tempo de produção.",
    relatedTerms: ["Stitch Count", "PPM", "Precificação de Bordado", "Ficha Técnica"],
    tags: ["pontos", "contagem", "orçamento", "produção"]
  },
  {
    id: "quantidade-de-pontos-por-minuto",
    code: "Q-027",
    letter: "Q",
    term: "Quantidade de Pontos por Minuto",
    pronunciation: "quan-ti-da-de de pon-tos por mi-nu-to",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da sigla internacional SPM (Stitches Per Minute) ou PPM (Pontos Por Minuto). Medida de frequência e velocidade angular do eixo principal da máquina de bordar.",
    summary: "Velocidade de operação da máquina, indicando quantas penetrações de agulha com formação de laçada são executadas a cada 60 segundos.",
    definition: "A quantidade de pontos por minuto (PPM/SPM) expressa a velocidade mecânica de rotação do cabeçote. Máquinas domésticas operam tipicamente entre 400 e 850 PPM, enquanto máquinas industriais operam entre 800 e 1.200 PPM. A velocidade deve ser adaptada ao tipo de fio, complexidade do ponto e rigidez do tecido.",
    technicalDetails: "A máquina desacelera automaticamente em pontos de salto longo (> 6 mm) para dar tempo de o pantógrafo completar o deslocamento físico antes da descida da agulha. Fios metálicos exigem redução da velocidade para 450-550 PPM para dissipar calor.",
    beginnerExplanation: "É o velocímetro da sua máquina de bordar! Mostra o quão rápido a agulha sobe e desce costurando os pontos no tecido a cada minuto.",
    howItWorks: [
      "1. O servomotor principal gira o eixo superior que comanda a barra da agulha e a lançadeira.",
      "2. O painel eletrônico modula a corrente elétrica para acelerar ou desacelerar os PPM.",
      "3. O sistema sincroniza o movimento dos motores de passo do bastidor com a rotação por minuto.",
      "4. Sensores ópticos leem a velocidade e freiam o motor instantaneamente em caso de quebra de linha."
    ],
    applications: [
      "Aceleração para velocidade máxima (1.000 PPM) em grandes preenchimentos tatami lisos.",
      "Redução para velocidade baixa (400-500 PPM) em bordados 3D com EVA ou fios metálicos.",
      "Ajuste intermediário (650-750 PPM) para produção diária padrão com equilíbrio e segurança mecânica."
    ],
    characteristics: [
      "Ajustável em tempo real no painel digital durante a costura.",
      "Influencia diretamente a vibração, ruído e temperatura da agulha.",
      "Fator determinante na produtividade horária de qualquer ateliê."
    ],
    commonErrors: [
      "❌ Rodar a máquina sempre na velocidade máxima permitida, acelerando o desgaste mecânico e quebras de linha.",
      "❌ Bordar fios delicados (metálicos ou solúveis) em alta velocidade sem redução preventiva.",
      "❌ Ignorar a vibração da mesa da máquina em velocidades superiores a 800 PPM."
    ],
    troubleshootingTips: [
      "Linha quebrando constantemente em pontos satim estreitos: reduza a velocidade em 150 a 200 PPM.",
      "Fio metálico desfiando e derretendo: diminua para 450 PPM e aplique silicone spray no cone.",
      "Produção atrasada: aumente a velocidade apenas nos blocos de tatami amplo e plano."
    ],
    dicaArtrelados: "Para o dia a dia, a velocidade ideal de 'cruzeiro' que une produtividade máxima com zero quebras de linha é entre 650 e 750 PPM em máquinas domésticas modernas, e 850 PPM em industriais.",
    voceSabia: "Em 1.000 PPM, a agulha sobe e desce mais de 16 vezes por segundo, tornando o movimento imperceptível a olho nu sem uma câmera de alta velocidade.",
    practicalExercise: "Borde um mesmo logotipo em 500 PPM e depois em 850 PPM. Cronometre a diferença real no relógio e observe a estabilidade e o ruído da sua máquina em cada uma das velocidades.",
    quickSummary: "Quantidade de pontos por minuto é a velocidade operacional da máquina, que deve ser ajustada para equilibrar produtividade e segurança do fio.",
    relatedTerms: ["PPM", "Velocidade de Bordado", "Servomotor", "Fios Metálicos"],
    tags: ["velocidade", "ppm", "produção", "máquina"]
  },
  {
    id: "quantidade-de-saltos",
    code: "Q-028",
    letter: "Q",
    term: "Quantidade de Saltos",
    pronunciation: "quan-ti-da-de de sal-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim saltus (movimento sem apoio contínuo). Indica o número total de deslocamentos sem costura presentes na matriz.",
    summary: "Número total de movimentações do bastidor sem penetração da agulha, refletindo o nível de continuidade da matriz.",
    definition: "A quantidade de saltos é o total de vezes em que o pantógrafo se desloca de um ponto X-Y para outro sem formar laçada de costura. Uma quantidade excessiva de saltos indica que a matriz foi digitalizada com objetos fragmentados ou com sequenciamento desorganizado, o que aumenta o tempo de execução e gera fios soltos.",
    technicalDetails: "Registrada na ficha técnica do arquivo de bordado. Em matrizes profissionais otimizadas com técnicas de ramificação (Branching), a quantidade de saltos é reduzida em até 70% em comparação com digitalizações automáticas convencionais.",
    beginnerExplanation: "É quantas vezes a máquina para de costurar num pedaço e viaja pelo ar até o próximo lugar. Quanto menor esse número, mais rápido e limpo é o bordado.",
    howItWorks: [
      "1. A agulha sobe e para de perfurar enquanto a alavanca estica-fio mantém a linha travada.",
      "2. Os motores X-Y movem o bastidor até o início do próximo objeto.",
      "3. O software contabiliza cada movimento no registro interno de comandos 'JUMP'.",
      "4. A máquina reinicia o ciclo de penetração na nova coordenada."
    ],
    applications: [
      "Auditoria de qualidade em matrizes compradas na internet.",
      "Otimização de monogramas e nomes com letras conectadas.",
      "Redução de tempo de ciclo em produções de grande volume."
    ],
    characteristics: [
      "Indicador direto da maturidade e eficiência da digitalização.",
      "Pode ser convertida em caminhos de viagem (travel runs) no software.",
      "Menor quantidade de saltos resulta em menos fios soltos para limpar manualmente."
    ],
    commonErrors: [
      "❌ Aceitar matrizes com centenas de saltos para desenhos simples de poucas cores.",
      "❌ Deixar saltos longos cruzarem áreas que serão bordadas depois, prendendo o fio por baixo.",
      "❌ Não verificar a lista de comandos no software antes de enviar o arquivo para a máquina."
    ],
    troubleshootingTips: [
      "Muitos fios compridos atravessando a frente do bordado: use a ferramenta de otimização de saltos no software.",
      "Máquina balançando com movimentos bruscos: elimine saltos desnecessários agrupando objetos vizinhos.",
      "Tempo de produção muito alto: una objetos com costura de conexão oculta sob áreas de sobreposição."
    ],
    dicaArtrelados: "Antes de bordar, visualize a matriz no modo 'Mostrar Saltos' do seu programa: se parecer uma teia de aranha cheia de linhas cruzadas, reordene a sequência dos objetos antes de costurar!",
    voceSabia: "Nas máquinas antigas sem cortador de linha, cada salto gerava um fio esticado que precisava ser cortado manualmente um a um com tesoura pela bordadeira.",
    practicalExercise: "Abra um arquivo de bordado com texto no software. Conte quantos saltos existem. Em seguida, use a ferramenta de conexão automática ou una as letras e veja a quantidade de saltos despencar.",
    quickSummary: "Quantidade de saltos é o total de viagens sem costura do bastidor, sendo um indicador crucial de limpeza e rapidez da matriz.",
    relatedTerms: ["Pontos de Salto", "Qualidade dos Saltos", "Caminho de Viagem", "Branching"],
    tags: ["saltos", "otimização", "programação", "eficiência"]
  },
  {
    id: "quantidade-de-cortes",
    code: "Q-029",
    letter: "Q",
    term: "Quantidade de Cortes",
    pronunciation: "quan-ti-da-de de cor-tes",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim curtare (encurtar, decepar). No bordado, expressa o número de comandos mecânicos de acionamento do cortador de linha.",
    summary: "Número total de vezes em que o mecanismo de faca da máquina é disparado para seccionar os fios superior e inferior.",
    definition: "A quantidade de cortes (Trim Count) é a somatória de comandos no arquivo que acionam a faca móvel e o solenoide de corte da linha superior e da bobina. Cada corte adiciona entre 3 e 7 segundos ao tempo de produção (desaceleração, nó de arremate, corte mecânico, salto e retomada de velocidade), tornando a sua minimização um fator essencial de produtividade.",
    technicalDetails: "Em uma produção de 1.000 peças, eliminar 10 cortes desnecessários por peça economiza cerca de 14 horas de máquina parada. A programação profissional substitui cortes curtos por conexões em ponto corrido quando a distância é menor que a largura do elemento posterior.",
    beginnerExplanation: "É quantas vezes a máquina para, puxa a faca e corta a linha embaixo do tecido. Cada corte gasta alguns segundos preciosos da sua produção.",
    howItWorks: [
      "1. A máquina desacelera ao atingir o comando de corte (TRIM).",
      "2. A agulha sobe e o solenoide puxa a lâmina móvel sob a chapa de ponto.",
      "3. As duas linhas são cortadas rente ao tecido e retidas pela mola de cauda.",
      "4. O pantógrafo salta para a nova posição e a costura recomeça."
    ],
    applications: [
      "Cálculo de produtividade horária e custo de tempo em confecções.",
      "Programação de logotipos corporativos com textos em bloco.",
      "Preservação da vida útil das lâminas do cortador mecânico."
    ],
    characteristics: [
      "Exibido na tela de informações da matriz no painel da máquina.",
      "Diretamente ligado ao número de arremates e saltos longos.",
      "Impacta o desgaste mecânico das facas e solenoides de corte."
    ],
    commonErrors: [
      "❌ Permitir que a máquina corte a linha a cada letra de 4 mm em vez de fazer conexão contínua.",
      "❌ Deixar comandos de corte em pontos coincidentes com troca de cor (corte duplo redundante).",
      "❌ Regular a distância mínima de corte para valores muito baixos no software."
    ],
    troubleshootingTips: [
      "Máquina demorando muito em textos pequenos: desative os cortes entre letras e conecte-as com ponto corrido na base.",
      "Linha escapando da agulha após o corte: aumente o comprimento da sobra de linha (tail length) nas configurações.",
      "Faca de corte engasgando: limpe fiapos acumulados na chapa de agulha e lubrifique a articulação da lâmina."
    ],
    dicaArtrelados: "Para textos com menos de 8 mm de altura, configure o software para não cortar a linha entre letras com distância menor que 3 mm. É muito mais rápido limpar 3 fios na tesoura depois do que a máquina parar 20 vezes!",
    voceSabia: "O sistema de corte automático de linha sob a chapa de ponto foi introduzido nas máquinas industriais na década de 1980, revolucionando a velocidade da indústria do bordado mundial.",
    practicalExercise: "Borde um nome de 8 letras com corte ativado em todas as letras e cronometre. Depois, borde o mesmo nome com conexão contínua entre as letras e veja a economia de minutos na produção.",
    quickSummary: "Quantidade de cortes é o número de disparos da faca automática, impactando diretamente o tempo total de produção e o desgaste da máquina.",
    relatedTerms: ["Corte Automático de Linha", "Faca de Corte", "Qualidade dos Saltos", "Produtividade"],
    tags: ["cortes", "tempo", "produção", "eficiência"]
  },
  {
    id: "quantidade-de-trocas-de-linha",
    code: "Q-030",
    letter: "Q",
    term: "Quantidade de Trocas de Linha",
    pronunciation: "quan-ti-da-de de tro-cas de li-nha",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim torcare (girar, permutar, mudar). Representa o número de paradas da máquina para mudança manual ou automática de carretel/agulha.",
    summary: "Número total de paradas para substituição de cor de linha durante a execução da matriz no bordado.",
    definition: "A quantidade de trocas de linha (Color Changes) é o número de eventos em que a máquina interrompe a costura de uma cor para iniciar outra. Em máquinas domésticas de uma agulha, cada troca exige intervenção manual da operadora (cerca de 30 a 60 segundos por troca); em industriais multi-agulhas, a troca ocorre automaticamente pelo deslocamento do bloco de cabeçote.",
    technicalDetails: "Uma matriz profissional agrupa todos os elementos de mesma tonalidade no mesmo bloco cronológico, evitando que a máquina retorne à mesma cor em momentos diferentes (trocas redundantes).",
    beginnerExplanation: "É quantas vezes você tem que parar a máquina para tirar um carretel de cor e colocar outro, ou quantas vezes a máquina multi-agulhas troca de agulha sozinha.",
    howItWorks: [
      "1. A máquina conclui o bloco de cor e executa o arremate final com corte.",
      "2. O comando 'STOP' ou troca de agulha é disparado pelo arquivo.",
      "3. Na máquina de 1 agulha: a operadora troca a linha manualmente e aperta 'Start'.",
      "4. Na máquina multi-agulhas: o cabeçote corre para a próxima agulha programada e retoma a costura."
    ],
    applications: [
      "Otimização de matrizes coloridas para máquinas de bordar domésticas de uma agulha.",
      "Programação de sequência de cores em máquinas multi-agulhas de 6 a 15 agulhas.",
      "Redução do tempo de trabalho humano na confecção de uniformes e brindes."
    ],
    characteristics: [
      "Determina a necessidade de atenção constante da bordadeira ao lado da máquina.",
      "Pode ser visualizada na lista de paradas de cor no painel.",
      "Impacta significativamente o custo da mão de obra por peça."
    ],
    commonErrors: [
      "❌ Borda uma matriz com 15 paradas de cor onde 5 delas usam exatamente o mesmo tom de linha.",
      "❌ Não agrupar as cores no software antes de salvar o arquivo final de produção.",
      "❌ Errar a ordem das linhas na máquina multi-agulhas por falta de ficha de cores impressa."
    ],
    troubleshootingTips: [
      "Máquina parando a todo momento sem mudar de cor: una os objetos da mesma cor no software com o comando 'Agrupar Cores'.",
      "Cores trocadas no bordado final: utilize sempre a folha de ordem de cores (Production Sheet) ao carregar a máquina.",
      "Produção cansativa em máquina de 1 agulha: redesenhe a matriz para ter no máximo 3 ou 4 cores essenciais."
    ],
    dicaArtrelados: "No seu programa de bordado, use a função 'Otimizar Cores' (Color Sort). Ela junta automaticamente todos os pedacinhos da mesma cor em uma única parada, poupando seu tempo e suas mãos!",
    voceSabia: "Em máquinas industriais modernas de 15 agulhas, o cabeçote troca de uma agulha para outra em apenas 1,2 segundo por meio de um sistema pneumático ou motor de passo.",
    practicalExercise: "Abra um arquivo que tenha 8 paradas de cor repetidas. Aplique o comando de ordenação de cores (Color Sort) no software e veja a quantidade de paradas diminuir sem alterar o desenho.",
    quickSummary: "Quantidade de trocas de linha é o número de paradas para mudança de cor, devendo ser minimizada para agilizar o trabalho no ateliê.",
    relatedTerms: ["Troca de Cor", "Otimização de Cores", "Máquina Multi-Agulhas", "Ficha de Cores"],
    tags: ["cores", "trocas", "tempo", "operação"]
  },
  {
    id: "quantidade-de-cores",
    code: "Q-031",
    letter: "Q",
    term: "Quantidade de Cores",
    pronunciation: "quan-ti-da-de de co-res",
    level: "Iniciante 🟢",
    category: "Terminologia Geral",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim color (cor, matiz, pigmento). Expressa a diversidade cromática dos fios empregados na composição da arte.",
    summary: "Número total de tonalidades distintas de linha de bordar empregadas na execução de um projeto gráfico.",
    definition: "A quantidade de cores é a variedade de tonalidades físicas de carretéis de linha necessários para bordar uma matriz. Diferencia-se da 'quantidade de trocas de cor', pois uma matriz pode ter apenas 3 cores diferentes, mas 10 paradas de costura se as cores forem alternadas ao longo das camadas de sobreposição.",
    technicalDetails: "Cada cor adicional requer espaço físico na máquina (cones instalados) e afeta a complexidade do estoque do ateliê. Em matrizes realistas, a quantidade de cores pode chegar a 20 ou 30 tons sutis para gerar transições hiper-realistas de sombra e luz.",
    beginnerExplanation: "É quantas cores de linha diferentes você vai precisar comprar e colocar na máquina para bordar aquele desenho do começo ao fim.",
    howItWorks: [
      "1. A arte gráfica original é separada em canais ou paletas cromáticas.",
      "2. O digitalizador escolhe as linhas correspondentes da cartela de cores (ex: Pantone ou fabricante de linhas).",
      "3. Cada cor é associada a um bloco de costura no arquivo de bordado.",
      "4. A máquina utiliza a sequência para solicitar ou selecionar a agulha correta."
    ],
    applications: [
      "Planejamento de compra de estoque de cones de poliéster de 1.000m ou 4.000m.",
      "Conversão de logos multicoloridos para versões monocromáticas mais econômicas.",
      "Bordados fotográficos com técnica de PhotoStitch exigindo ampla gama de cinzas ou sépias."
    ],
    characteristics: [
      "Define a fidelidade visual em relação à arte gráfica original.",
      "Influencia o custo final de insumos da peça bordada.",
      "Pode ser mapeada nas tabelas de conversão das marcas de linha mais populares."
    ],
    commonErrors: [
      "❌ Criar matrizes com 20 cores para um logotipo simples de empresa que tem apenas 3 cores institucionais.",
      "❌ Usar tons ligeiramente diferentes (ex: dois azuis quase idênticos) sem necessidade estética real.",
      "❌ Confiar apenas nas cores que aparecem no monitor do computador, sem conferir a cartela de fios física."
    ],
    troubleshootingTips: [
      "Cores no bordado saíram diferentes do monitor: utilize sempre uma cartela física de fios reais do seu fabricante.",
      "Cliente achando o bordado caro: ofereça uma versão simplificada do logo com menos cores.",
      "Falta de cones na máquina multi-agulhas: reduza a quantidade de cores da matriz para coincidir com a capacidade da máquina (ex: máximo 6 agulhas)."
    ],
    dicaArtrelados: "Tenha sempre no ateliê a cartela de cores física com amostras de fios reais das marcas que você mais usa. As cores na tela do computador sempre enganam devido ao brilho do monitor!",
    voceSabia: "O olho humano treinado de uma bordadeira é capaz de distinguir mais de 50 variações sutis de tons de vermelho em filamentos de poliéster sob luz natural.",
    practicalExercise: "Pegue um logotipo colorido e abra no software. Crie uma versão com as 6 cores originais e outra simplificada com apenas 3 cores principais. Compare o impacto visual e a facilidade de produção de ambas.",
    quickSummary: "Quantidade de cores é o total de tons diferentes de fio necessários para compor a matriz, determinando riqueza estética e logística de insumos.",
    relatedTerms: ["Paleta de Cores", "Ficha de Cores", "Tabela de Conversão", "PhotoStitch"],
    tags: ["cores", "paleta", "fios", "design"]
  },
  {
    id: "quantidade-de-objetos",
    code: "Q-032",
    letter: "Q",
    term: "Quantidade de Objetos",
    pronunciation: "quan-ti-da-de de ob-je-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim objectum (aquilo que está colocado diante dos olhos). No software vetorial de bordado, representa cada elemento geométrico individual.",
    summary: "Total de elementos vetoriais independentes (linhas, colunas, preenchimentos) que formam a estrutura interna da matriz.",
    definition: "A quantidade de objetos é o número de blocos vetoriais individuais gerados no software durante a digitalização. Cada letra, pétala, contorno ou preenchimento constitui um 'objeto' com propriedades próprias de densidade, tipo de ponto, compensação, entrada e saída.",
    technicalDetails: "Visível na árvore de objetos (Object Tree / Sequence Panel) do software. Matrizes bem construídas mantêm a quantidade de objetos enxuta, utilizando ferramentas de fusão (Weld/Combine) para unir partes contínuas e facilitar futuras edições.",
    beginnerExplanation: "É a quantidade de 'pedacinhos' separados que formam o desenho no programa do computador. Por exemplo, em uma flor, cada pétala e cada folha é um objeto separado.",
    howItWorks: [
      "1. O programador cria vetores individuais para cada elemento da arte.",
      "2. Cada objeto recebe parâmetros técnicos específicos no painel de propriedades.",
      "3. Os objetos são empilhados em camadas que definem a ordem de costura.",
      "4. O software compila todos os objetos gerando o arquivo final com as coordenadas dos pontos."
    ],
    applications: [
      "Edição rápida de matrizes (ex: alterar a cor de apenas uma palavra ou elemento).",
      "Redimensionamento e reorganização de componentes em layouts personalizados.",
      "Conversão de tipos de pontos em elementos específicos (ex: mudar contorno de satim para pesponto)."
    ],
    characteristics: [
      "Permite controle cirúrgico sobre cada fração do bordado no software.",
      "Facilita a aplicação de diferentes tipos de pontos em uma mesma arte.",
      "Facilmente reordenável por arrastar e soltar no painel de camadas."
    ],
    commonErrors: [
      "❌ Fragmentar um desenho simples em centenas de micro-objetos desnecessários através de vetorização automática ruim.",
      "❌ Perder a ordem lógica de sobreposição, fazendo objetos de fundo cobrirem elementos da frente.",
      "❌ Deixar objetos invisíveis ou vazios esquecidos no arquivo, gerando pontos fantasmas."
    ],
    troubleshootingTips: [
      "Dificuldade para mudar cores no software: selecione os objetos na lista de camadas em vez de clicar na tela cheia.",
      "Bordado costurando fora de ordem: reordene os objetos arrastando-os na árvore de sequenciamento.",
      "Arquivo muito pesado para abrir: utilize a ferramenta de união (Merge/Weld) para fundir objetos vizinhos da mesma cor."
    ],
    dicaArtrelados: "Nomeie os objetos mais importantes na lista de camadas do seu software (ex: 'Fundo Azul', 'Contorno Preto', 'Texto Nome'). Isso economiza um tempo enorme quando você precisar alterar o arquivo meses depois!",
    voceSabia: "Em matrizes complexas de alta-costura, como vestidos de noiva e brasões reais, uma única matriz pode conter mais de 1.500 objetos vetoriais perfeitamente sobrepostos.",
    practicalExercise: "Abra um logotipo no software e abra a janela 'Lista de Objetos'. Conte quantos objetos existem, selecione um por um para ver o que cada um faz e mude a ordem de dois deles para ver o efeito na simulação.",
    quickSummary: "Quantidade de objetos é o total de elementos vetoriais individuais que compõem a matriz no software, permitindo ajustes e edições personalizadas.",
    relatedTerms: ["Lista de Objetos", "Vetorização", "Camadas de Bordado", "Sequenciamento"],
    tags: ["objetos", "vetor", "software", "programação"]
  },
  {
    id: "quantidade-de-sequencias",
    code: "Q-033",
    letter: "Q",
    term: "Quantidade de Sequências",
    pronunciation: "quan-ti-da-de de se-quen-cias",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim sequentia (continuidade, sucessão cronológica ordenada). Refere-se à divisão lógica das etapas de execução do bordado.",
    summary: "Número de etapas cronológicas estruturadas na matriz para controlar sobreposições, estabilidade e paradas operacionais.",
    definition: "A quantidade de sequências é a divisão estruturada do bordado em fases bem delimitadas de costura. Em matrizes avançadas (como apliques, bordados 3D com EVA ou projetos no bastidor - ITH), as sequências são essenciais para ditar quando a máquina deve parar para a operadora colocar o tecido de aplique, posicionar o EVA ou cortar a sobra.",
    technicalDetails: "Cada sequência é delimitada por comandos de parada (Stop), troca de cor ou corte de linha, permitindo que a máquina execute tarefas preparatórias (como marcação e fixação) antes da finalização com ponto cheio.",
    beginnerExplanation: "É a divisão dos passos do bordado: Passo 1 faz a marcação, Passo 2 prende o tecido, Passo 3 faz o acabamento. Cada passo é uma sequência organizada.",
    howItWorks: [
      "1. Sequência 1 (Marcação): a máquina borda a linha guia no estabilizador.",
      "2. A máquina para (Stop) para posicionamento do material pelo usuário.",
      "3. Sequência 2 (Fixação): a máquina costura um pesponto prendendo o aplique.",
      "4. Sequência 3 (Acabamento): a máquina cobre as bordas com ponto satim fechado."
    ],
    applications: [
      "Projetos de Patch Aplique com parada para recorte manual do tecido.",
      "Bordados em 3D Puff com parada programada para colocação e retirada da espuma de EVA.",
      "Peças montadas 100% no bastidor (In The Hoop - ITH) como chaveiros, necessaires e máscaras."
    ],
    characteristics: [
      "Estrutura o trabalho da bordadeira em etapas claras e ordenadas.",
      "Evita erros de sobreposição em matrizes multicamadas complexas.",
      "Indispensável para técnicas mistas e artesanato têxtil com bordado computadorizado."
    ],
    commonErrors: [
      "❌ Esquecer de inserir o comando de parada (Stop) entre a marcação e a fixação do aplique.",
      "❌ Programar as sequências fora de ordem física (ex: bordar o olho antes do rosto do personagem).",
      "❌ Não avisar a cliente na ficha técnica que a matriz possui etapas manuais no bastidor."
    ],
    troubleshootingTips: [
      "Máquina bordou o acabamento direto sem parar para colocar o aplique: insira um comando de parada (Stop) ou mude a cor da linha no software entre as sequências.",
      "Tecido do aplique escapou: reforce a sequência de fixação com ponto zig-zag antes do satim.",
      "Sequência errada costurando por cima: inverta a ordem das sequências no painel de camadas."
    ],
    dicaArtrelados: "Em matrizes de aplique e ITH, use cores bem diferentes no programa para cada sequência (mesmo que vá usar a mesma cor de linha física). Assim a máquina é forçada a parar a cada etapa para você trabalhar tranquila!",
    voceSabia: "Projetos no bastidor (In The Hoop) utilizam até 15 sequências meticulosamente programadas para costurar zíperes, forros e acabamentos sem precisar de máquina de costura convencional.",
    practicalExercise: "Crie uma matriz simples de aplique de coração com 3 sequências: 1) Linha de marcação, 2) Pesponto de fixação, 3) Ponto satim de borda. Teste no bastidor colocando um retalho de tecido no passo 2.",
    quickSummary: "Quantidade de sequências é o número de etapas lógicas e cronológicas de uma matriz, fundamental para apliques, 3D e peças no bastidor.",
    relatedTerms: ["Sequenciamento", "Patch Aplique", "In The Hoop (ITH)", "Comando de Parada (Stop)"],
    tags: ["sequências", "etapas", "aplique", "ith"]
  }
];

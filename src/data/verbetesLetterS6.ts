import { Verbete } from "../types";

export const VERBETES_LETTER_S6: Verbete[] = [
  {
    id: "selecao-de-objetos",
    code: "S-039",
    letter: "S",
    term: "Seleção de Objetos",
    pronunciation: "se-le-ção de ob-je-tos",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Dos comandos de interação e seleção gráfica em ambientes CAD (Computer Aided Design).",
    summary: "Ato de isolar e marcar um ou múltiplos elementos vetoriais da matriz para aplicar edições, alterações de cor, escala ou exclusão.",
    definition: "A Seleção de Objetos (ou Object Selection) é a operação básica de interface nos softwares de bordado que ativa um ou mais blocos gráficos da matriz, destacando-os com alças de manipulação (Bounding Box / Control Handles). Permite ao operador aplicar transformações geométricas, alterar parâmetros de ponto (densidade, tipo de ponto, compensação) ou modificar a posição do objeto na lista de camadas.",
    technicalDetails: "Pode ser executada por clique direto no objeto na área de trabalho, por seleção retangular/laço (Marquee Selection / Lasso Selection), por seleção múltipla cumulativa (tecla 'Shift' ou 'Ctrl') ou através da árvore hierárquica na lista de sequência de objetos.",
    beginnerExplanation: "É clicar em cima de uma parte do desenho (como a orelha do ursinho ou uma letra do nome) para poder mudar a cor, aumentar, diminuir, mover de lugar ou apagar.",
    howItWorks: [
      "1. A usuária clica na ferramenta 'Ponteiro / Selecionar' ('0' ou seta preta).",
      "2. Clica sobre o objeto desejado na tela ou na lista lateral.",
      "3. O objeto fica destacado com pontinhos pretos (alças) ao redor.",
      "4. A usuária altera a propriedade desejada (ex: muda de satim para tatami).",
      "5. Clica fora da área para desselecionar e confirmar a alteração.",
      "6. A matriz é atualizada em tempo real."
    ],
    applications: [
      "Isolamento de textos para alteração de grafia ou troca de fontes.",
      "Mudança de tipo de ponto em partes específicas de uma matriz.",
      "Agrupamento e bloqueio de camadas prontas para evitar alterações acidentais.",
      "Cópia, duplicação e espelhamento de elementos ornamentais."
    ],
    characteristics: [
      "Operação mais frequente em qualquer sessão de trabalho no computador.",
      "Suporta atalhos universais de teclado (ex: 'Ctrl+A' para selecionar tudo).",
      "Permite seleção por atributos (ex: 'selecionar todos os objetos com a cor vermelha')."
    ],
    commonErrors: [
      "❌ Clicar para mover uma letra e arrastar a matriz inteira porque os objetos estavam agrupados sem a usuária perceber.",
      "❌ Tentar selecionar um objeto minúsculo com o zoom muito distante, clicando no fundo por engano.",
      "❌ Deixar objetos indesejados selecionados ao apertar a tecla 'Delete', apagando partes importantes da matriz."
    ],
    troubleshootingTips: [
      "Não consegue selecionar um único objeto de um grupo: selecione o conjunto e use o comando 'Desagrupar' ('Ctrl+U') ou clique duas vezes no objeto.",
      "Objeto difícil de clicar porque está atrás de outro: selecione o objeto clicando diretamente no nome dele na lista lateral de objetos.",
      "Perdeu a seleção sem querer: use o atalho 'Ctrl+Z' para desfazer ou use a ferramenta de laço para envolver a área."
    ],
    dicaArtrelados: "Para selecionar vários objetos espalhados pela matriz sem pegar o que está em volta: segure a tecla 'Ctrl' no teclado e vá clicando um por um nos objetos desejados. Eles vão ficando selecionados juntinhos como num passe de mágica!",
    voceSabia: "Em softwares avançados de digitalização, a ferramenta de seleção permite selecionar objetos por tipo de ponto (ex: selecionar todos os pontos corridos de uma vez) com um único clique com o botão direito.",
    practicalExercise: "Abra uma matriz no seu programa. Pratique selecionar apenas uma folha, depois use 'Ctrl' para selecionar 3 folhas ao mesmo tempo e mude a cor das 3 de uma só vez para verde-escuro.",
    quickSummary: "Seleção de Objetos é o comando fundamental de clicar e destacar partes do desenho para editar, transformar, trocar cores ou redimensionar.",
    relatedTerms: ["Seleção de Cores", "Seleção de Pontos", "Agrupar / Desagrupar", "Caixa de Delimitação (Bounding Box)"],
    tags: ["seleção", "objetos", "ferramentas", "atalhos", "edição"]
  },
  {
    id: "selecao-de-cores",
    code: "S-040",
    letter: "S",
    term: "Seleção de Cores",
    pronunciation: "se-le-ção de co-res",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do gerenciamento e filtragem de canais de cor em ambientes gráficos de produção têxtil.",
    summary: "Comando que isola e seleciona instantaneamente todos os objetos da matriz que compartilham a mesma cor de linha.",
    definition: "A Seleção de Cores (ou Select by Color / Color Filter) é a funcionalidade dos softwares de bordado que permite ao operador selecionar automaticamente todos os blocos vetoriais e segmentos de ponto atribuídos a uma determinada cor da paleta com um único comando, independentemente de estarem agrupados ou espalhados em posições diferentes da sequência.",
    technicalDetails: "Essa ferramenta é essencial para reordenar blocos cromáticos, alterar a tonalidade global de um elemento (ex: trocar todos os tons de azul por dourado), ajustar a densidade de uma cor inteira simultaneamente ou verificar a existência de micro-objetos esquecidos em cores erradas.",
    beginnerExplanation: "É uma ferramenta esperta que pega tudo o que é vermelho no desenho de uma só vez com um clique. Assim, se você quiser mudar todos os coraçõezinhos vermelhos para cor-de-rosa, você muda tudo junto em um segundo.",
    howItWorks: [
      "1. A usuária clica com o botão direito sobre o quadradinho da cor na paleta inferior.",
      "2. Escolhe a opção 'Selecionar por Cor' ou 'Ocultar outras cores'.",
      "3. Todos os objetos que usam aquela cor ficam selecionados na tela.",
      "4. A usuária clica na nova cor desejada ou move os objetos juntos.",
      "5. A matriz é atualizada com total harmonia cromática.",
      "6. A ordem de trocas de cor fica limpa e consistente."
    ],
    applications: [
      "Troca rápida de identidade visual de logotipos para versões monocromáticas ou comemorativas.",
      "Otimização e agrupamento de cores antes de enviar o arquivo para a máquina.",
      "Isolamento de contornos pretos para conferência de espessura e densidade.",
      "Auditoria de matrizes para eliminar cores 'invisíveis' ou redundantes."
    ],
    characteristics: [
      "Economiza minutos preciosos em relação a selecionar objeto por objeto.",
      "Garante que nenhum pedaço do desenho fique esquecido com a cor antiga.",
      "Permite ocultar temporariamente outras cores para focar apenas em uma camada."
    ],
    commonErrors: [
      "❌ Mudar a cor de objetos selecionados sem perceber que havia outros objetos distantes com a mesma cor que também foram alterados.",
      "❌ Ter 5 tons de azul quase idênticos na mesma matriz por falta de unificação de paleta.",
      "❌ Não verificar a ordem de camadas após alterar cores em bloco."
    ],
    troubleshootingTips: [
      "Muitas cores parecidas na lista de trocas de linha: use a 'Seleção de Cores' para juntar tons duplicados na mesma cor da paleta.",
      "Dificuldade de enxergar uma cor específica no meio do desenho: use o recurso 'Isolar Cor / Hide Others' para apagar temporariamente todo o resto da tela.",
      "Trocou a cor e a ordem de bordado mudou: verifique se a opção 'Auto-Group by Color' não reordenou as camadas de contorno."
    ],
    dicaArtrelados: "Para criar variações de uma mesma matriz para meninos e meninas em 5 segundos: use a 'Seleção de Cores' para trocar todos os tons de azul por rosa ou lilás de uma só vez. Você duplica as opções do seu catálogo sem esforço!",
    voceSabia: "Em softwares industriais de controle de estamparia e bordado, a seleção por cor é vinculada diretamente aos códigos numéricos das principais marcas de linha do mundo (como Madeira, Isacord, Gutermann e Coats).",
    practicalExercise: "Abra um desenho floral no software. Use o comando 'Selecionar por Cor' na cor verde das folhas e troque todas para verde-oliva com um único clique. Observe como todas as folhas mudam instantaneamente juntas.",
    quickSummary: "Seleção de Cores é a ferramenta que seleciona de uma só vez todas as partes do desenho que usam a mesma cor, facilitando trocas de paleta e ajustes rápidos.",
    relatedTerms: ["Seleção de Objetos", "Sequência de Cores", "Paleta de Cores", "Tabela de Linhas (Thread Chart)", "Isolamento de Camada"],
    tags: ["cores", "seleção por cor", "paleta", "agilidade", "edição rápida"]
  },
  {
    id: "selecao-de-pontos",
    code: "S-041",
    letter: "S",
    term: "Seleção de Pontos",
    pronunciation: "se-le-ção de pon-tos",
    level: "Avançado 🔴",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do modo de edição ponto a ponto em nível binário (Stitch Edit Mode).",
    summary: "Modo avançado de edição microscópica onde o operador seleciona, move, adiciona ou exclui penetrações individuais de agulha.",
    definition: "A Seleção de Pontos (ou Modo de Edição de Pontos / Stitch Edit Mode) é o recurso cirúrgico dos softwares de bordado que permite ao programador descer ao nível atômico do arquivo de máquina (.PES, .DST, .JEF), selecionando penetrações individuais de agulha (representadas por pequenos pontos ou nós na linha) para corrigir imperfeições manuais, remover micro-pontos residuais ou ajustar nós de ancoragem.",
    technicalDetails: "Ao contrário da edição vetorial de objetos (que altera parâmetros matemáticos globais), a seleção e edição de pontos manipula diretamente as coordenadas cartesianas (Delta X, Delta Y) gravadas no arquivo binário, sendo a ferramenta definitiva para restaurar matrizes fechadas das quais não se possui o arquivo mestre original (.EMB).",
    beginnerExplanation: "É como usar uma lente de aumento super poderosa para ver cada furinho de agulha individualmente. Com isso, você pode pegar um pontinho que ficou fora do lugar e puxar para ajeitar, ou apagar um nozinho que estava sobrando.",
    howItWorks: [
      "1. A usuária ativa a ferramenta 'Editar Pontos' ('Stitch Edit' ou ícone de agulha/ponto).",
      "2. O software revela todas as penetrações individuais de agulha como pequenos nós na tela.",
      "3. A usuária clica no ponto específico ou faz uma caixinha de seleção sobre um grupo de pontos.",
      "4. Arrasta o ponto para uma nova posição, deleta na tecla 'Del' ou insere um comando 'Stop/Trim'.",
      "5. A linha se reposiciona imediatamente de acordo com as novas coordenadas.",
      "6. A imperfeição no arquivo de máquina é corrigida cirurgicamente."
    ],
    applications: [
      "Remoção de pontos isolados que ficaram espetados para fora do contorno.",
      "Inserção manual de comandos de parada (Stop) para aplicação de tecidos (Appliqué) em arquivos DST.",
      "Correção de furos repetidos que estavam quebrando linha ou perfurando o tecido.",
      "Restauração de matrizes antigas cujos arquivos originais editáveis foram perdidos."
    ],
    characteristics: [
      "Máximo nível de controle e detalhamento possível em um arquivo de bordado.",
      "Permite consertar arquivos de qualquer marca ou formato de máquina.",
      "Exige precisão e cuidado para não desconfigurar a tensão do ponto."
    ],
    commonErrors: [
      "❌ Deletar pontos de amarração inicial ou final por engano, fazendo a costura desmanchar na máquina.",
      "❌ Mover pontos de satim individualmente sem critério, deixando a coluna com bordas irregulares e denteadas.",
      "❌ Tentar redimensionar uma matriz inteira no modo de seleção de pontos em vez de usar as ferramentas vetoriais."
    ],
    troubleshootingTips: [
      "Um único ponto teimoso espetado para fora da letra: ative o 'Modo de Edição de Pontos', clique exatamente naquele pontinho e aperte 'Delete'.",
      "Arquivo .DST sem paradas para aplique: use a seleção de pontos no final da linha guia do aplique e insira um comando 'Stop / Color Change' manualmente.",
      "Muitos nós acumulados no mesmo lugar: selecione a área de pontos densos e use a função 'Filtrar Pontos Curtos'."
    ],
    dicaArtrelados: "O modo de Seleção de Pontos é a sua 'pinça cirúrgica' digital! Se você comprou uma matriz que tem um pontinho feio espetado para fora, não precisa sofrer: abra a edição de pontos, delete aquele pontinho e sua matriz fica 100% perfeita!",
    voceSabia: "Nas primeiras décadas do bordado computadorizado, não existiam vetores: toda a digitalização de matrizes era feita 100% no modo de seleção e inserção de pontos individuais, um por um, em mesas digitalizadoras!",
    practicalExercise: "Abra um arquivo .DST ou .PES no software. Ative o modo 'Stitch Edit' (Editar Pontos) e veja os nós de cada penetração de agulha. Selecione um ponto de contorno e arraste levemente para o lado para ver a linha se mover.",
    quickSummary: "Seleção de Pontos é o modo de edição microscópica que permite selecionar, arrastar, apagar ou inserir penetrações individuais de agulha no arquivo de máquina.",
    relatedTerms: ["Stitch Edit", "Stitch", "Arquivo Binário (.DST/.PES)", "Filtro de Micro-Pontos", "Edição Vetorial"],
    tags: ["pontos", "stitch edit", "cirúrgico", "correção", "precisão avançada"]
  },
  {
    id: "suavizacao-de-contornos",
    code: "S-042",
    letter: "S",
    term: "Suavização de Contornos",
    pronunciation: "su-a-vi-za-ção de con-tor-nos",
    level: "Intermediário 🟡",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Dos algoritmos de anti-aliasing e filtragem de ruído de alta frequência em traçados vetoriais.",
    summary: "Processo digital que elimina imperfeições, tremores e dentes de serrilhado nas bordas e linhas periféricas dos objetos de bordado.",
    definition: "A Suavização de Contornos (ou Contour Smoothing / Edge Refinement) é o tratamento algorítmico e vetorial aplicado às bordas externas de objetos de bordado para eliminar serrilhados, cantos pontiagudos indesejados e variações microscópicas decorrentes de imagens pixeladas. Transforma contornos irregulares em curvas orgânicas, suaves e contínuas.",
    technicalDetails: "Aplica funções de aproximação polinomial (como splines cúbicas ou filtros de média móvel) que reposicionam as penetrações periféricas da agulha ao longo de uma trajetória limpa, reduzindo a vibração do pantógrafo e conferindo acabamento acetinado de alta costura.",
    beginnerExplanation: "É passar uma 'lixa mágica' na borda do desenho no computador: tira todos aqueles dentes de serrote e tremidos feios, deixando as linhas e curvas bem lisinhas e elegantes.",
    howItWorks: [
      "1. A usuária seleciona o objeto que possui bordas denteadas ou serrilhadas.",
      "2. Aciona a ferramenta 'Suavizar Contornos' (Smooth Contours) no software.",
      "3. O algoritmo recalcula os nós periféricos aproximando-os de curvas perfeitas.",
      "4. As penetrações de agulha na margem alinham-se em uma curva contínua.",
      "5. A máquina borda sem vibrar ou dar trancos no pantógrafo.",
      "6. A peça final ganha um contorno limpo, brilhante e sem falhas visuais."
    ],
    applications: [
      "Limpeza de desenhos infantis escaneados ou vetorizados automaticamente.",
      "Refinamento de contornos de logotipos corporativos com curvas exigentes.",
      "Bordas de apliques e chaveiros ITH para corte limpo da tesoura.",
      "Melhoria de fontes caligráficas manuscritas com traços sinuosos."
    ],
    characteristics: [
      "Confere aspecto profissional de alto padrão mesmo a artes simples.",
      "Evita que o pantógrafo dê micro-trancos ao acompanhar dentes de serra.",
      "Melhora o brilho reflexivo das bordas de cetim."
    ],
    commonErrors: [
      "❌ Aplicar suavização excessiva (100%), arredondando cantos propositalmente retos e pontiagudos (como pontas de estrelas).",
      "❌ Bordar contornos serrilhados sem suavização, resultando em bordas com aspecto descuidado e mastigado.",
      "❌ Não revisar os pontos de encaixe com objetos vizinhos após a suavização."
    ],
    troubleshootingTips: [
      "Borda de satim parecendo uma escadinha: aplique a ferramenta 'Suavizar' com nível moderado (tolerância de 0,3 mm).",
      "Cantos vivos de letras ficaram redondos demais: diminua o nível de suavização e defina manualmente os nós de canto (Corner Nodes).",
      "Máquina vibrando muito em contornos: verifique se o traçado não possui dezenas de nós minúsculos acumulados em poucos milímetros."
    ],
    dicaArtrelados: "Sempre que usar a ferramenta de 'Varinha Mágica' ou 'Conversão Automática': aplique a ferramenta de 'Suavização de Contornos' logo em seguida! Ela limpa o serrilhado dos pixels e faz o bordado parecer que foi desenhado à mão por um mestre!",
    voceSabia: "Os algoritmos matemáticos de suavização de contornos em softwares de bordado utilizam curvas desenvolvidas pelo engenheiro francês Pierre Bézier para projetar a aerodinâmica dos carros da Renault nos anos 1960.",
    practicalExercise: "Desenhe um contorno com muitos cliques rápidos criando uma linha cheia de dentes. Aplique a ferramenta 'Smooth' (Suavizar) do seu programa e veja como a linha se transforma instantaneamente em uma curva sedosa e contínua.",
    quickSummary: "Suavização de Contornos é o filtro que elimina dentes de serrote e tremidos nas bordas do desenho, garantindo linhas lisas e curvas perfeitas no bordado.",
    relatedTerms: ["Suavização de Curvas", "Simplificação de Contorno", "Curvas Bézier", "Anti-Aliasing", "Qualidade de Ponto"],
    tags: ["suavização", "contornos", "serrilhado", "curvas lisas", "acabamento"]
  },
  {
    id: "suavizacao-de-curvas",
    code: "S-043",
    letter: "S",
    term: "Suavização de Curvas",
    pronunciation: "su-a-vi-za-ção de cur-vas",
    level: "Intermediário 🟡",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da modelagem de curvas paramétricas e interpolação spline em design computacional.",
    summary: "Otimização de alças de controle e nós vetoriais para garantir transições fluidas e raios harmônicos em arcos e círculos.",
    definition: "A Suavização de Curvas (ou Curve Smoothing / Bézier Node Optimization) é a técnica de edição vetorial em que nós rígidos, angulosos ou redundantes posicionados ao longo de arcos são convertidos em nós de curva suaves (Smooth Nodes / Symmetrical Nodes), harmonizando as alças tangentes de controle para que a linha flua sem descontinuidades matemáticas.",
    technicalDetails: "No bordado, uma curva perfeitamente suavizada distribui as linhas de direção angular (Stitch Angles) em um leque radial proporcional, eliminando frestas abertas na borda externa e evitando o empilhamento de pontos na curva interna (Short Stitches).",
    beginnerExplanation: "É arredondar as curvas do desenho para que fiquem bem redondinhas e perfeitas como um círculo ou uma pétala de flor, sem parecer que foram feitas com retas quebradas.",
    howItWorks: [
      "1. A usuária seleciona os nós da curva no modo de remodelagem de nós.",
      "2. Clica com o botão direito e escolhe o tipo 'Nó de Curva Suave' (Smooth Node).",
      "3. Ajusta as alças azuis de controle para alongar ou inclinar a curva.",
      "4. O software recalcula as passadas de ponto distribuindo o leque de satim.",
      "5. A linha de bordado deita com curvatura suave e brilho uniforme.",
      "6. A máquina costura com movimento suave e contínuo do bastidor."
    ],
    applications: [
      "Letras redondas de alfabetos e monogramas (O, C, S, G, D, B).",
      "Pétalas de flores, arabescos clássicos e volutas barrocas.",
      "Contornos de rostos e corpos de ilustrações e desenhos animados.",
      "Arcos de medalhões, brasões e molduras ovais."
    ],
    characteristics: [
      "Evita cantos quebrados que arruínam a elegância de letras e arabescos.",
      "Permite controle milimétrico sobre a fluidez estética do desenho.",
      "Facilita o cálculo automático de pontos curtos na curva interna."
    ],
    commonErrors: [
      "❌ Colocar 50 nós retos para fazer uma curva simples, em vez de usar apenas 3 nós de curva com alças suaves.",
      "❌ Quebrar as alças tangentes de nós de curva, criando 'bicos' indesejados no meio de círculos.",
      "❌ Deixar uma curva de satim sem linhas de ângulo adequadas após suavizar o vetor."
    ],
    troubleshootingTips: [
      "Círculo parecendo uma bexiga torta: selecione todos os nós da circunferência e transforme-os em nós de curva simétricos.",
      "Letra 'S' ficando cheia de bicos: remova nós intermediários desnecessários e puxe as alças de curva dos nós principais.",
      "Curva fechada abrindo buraquinhos no tecido: aumente a suavidade das linhas de ângulo e ative a compensação de encolhimento."
    ],
    dicaArtrelados: "Menos é mais: para fazer uma curva perfeita no software de bordado, use o menor número de nós possível! Uma curva com apenas 3 nós bem regulados é mil vezes mais lisa e brilhante do que uma com 20 nós espalhados!",
    voceSabia: "Ao transformar um traçado cheio de nós retos em uma curva suave com poucos nós Bézier, o tamanho do arquivo de matriz pode ser reduzido e o processador da máquina trabalha muito mais rápido.",
    practicalExercise: "Desenhe uma letra 'S' usando apenas nós retos. Depois, use a ferramenta de remodelar para converter os nós em 'Nós de Curva Suave'. Ajuste as alças e veja como a letra se torna imediatamente elegante e profissional.",
    quickSummary: "Suavização de Curvas é o ajuste harmônico dos nós e alças vetoriais para criar arcos e círculos perfeitos, fluidos e sem cantos quebrados.",
    relatedTerms: ["Nós Bézier", "Suavização de Contornos", "Satin em Curva", "Remodelagem de Vetores", "Ângulo do Ponto"],
    tags: ["curvas", "suavização", "nós", "bézier", "elegância"]
  },
  {
    id: "suavizacao-de-pontos",
    code: "S-044",
    letter: "S",
    term: "Suavização de Pontos",
    pronunciation: "su-a-vi-za-ção de pon-tos",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do processamento de sinal digital e filtragem de ruído cinemático em trajetórias de agulha.",
    summary: "Algoritmo de compensação física que suaviza as transições de comprimento e espaçamento de pontos para evitar impactos e quebras de linha.",
    definition: "A Suavização de Pontos (ou Stitch Smoothing / Trajectory Damping) é o processo computacional avançado que analisa a sequência de penetrações da agulha e amortece variações bruscas de comprimento e direção entre pontos vizinhos. Ele impede mudanças repentinas de aceleração no pantógrafo, suaviza a rampa de transição entre comprimentos longos e curtos e elimina picos de tensão mecânica no fio.",
    technicalDetails: "O algoritmo aplica limites de aceleração cinemática (Jerk Limiting) garantindo que nenhum ponto sofra uma variação angular superior a 60° sem um ponto de amortecimento intermediário, prevenindo vibrações no estica-fio, quebra de linha por impacto e aquecimento de agulha.",
    beginnerExplanation: "É o sistema inteligente do programa que evita que a máquina dê 'trancos' na hora de bordar: ele calcula o movimento da agulha para que a máquina deslize macia e suave como um carro em uma pista asfaltada.",
    howItWorks: [
      "1. O software calcula o trajeto preliminar de todos os pontos.",
      "2. O algoritmo de suavização analisa se há pontos que causam trancos mecânicos.",
      "3. Ajusta suavemente a distância e a velocidade nos cantos e curvas.",
      "4. Insere micro-transições graduais para aliviar a tensão da linha.",
      "5. A máquina opera de forma silenciosa, estável e em velocidade constante.",
      "6. O bordado fica uniforme e as linhas nunca arrebentam por impacto."
    ],
    applications: [
      "Matrizes de altíssima velocidade para produção industrial a mais de 1.000 PPM.",
      "Bordados em fios ultra sensíveis (linhas metálicas, fios de lurex e seda pura).",
      "Alívio de desgaste mecânico em pantógrafos e motores de passo de máquinas industriais.",
      "Padronização de arquivos para marcas esportivas e confecções globais."
    ],
    characteristics: [
      "Gera uma operação de máquina extremamente silenciosa e sem vibrações.",
      "Reduz drasticamente o índice de quebra de linha por choque de velocidade.",
      "Prolonga a vida útil das correias dentadas e rolamentos da máquina."
    ],
    commonErrors: [
      "❌ Desativar filtros de suavização ao exportar para formatos industriais de alta velocidade.",
      "❌ Programar cantos agudos de 180° sem desaceleração gradual de pontos.",
      "❌ Usar velocidades de 1.000 PPM em matrizes antigas que não possuem suavização de trajeto."
    ],
    troubleshootingTips: [
      "Máquina fazendo barulho de 'martelada' em curvas rápidas: ative o filtro de suavização de pontos e limite de aceleração no software.",
      "Linha metálica desfiando nos cantos: suavize a transição de pontos no vértice e reduza a velocidade da máquina para 500 PPM.",
      "Pontos pulando laçada em curvas: adicione suavização de comprimento nos nós de entrada e saída."
    ],
    dicaArtrelados: "Se você adora bordar com linha metálica dourada ou prateada: certifique-se de que sua matriz tenha suavização de pontos e diminua a velocidade da máquina para cerca de 500 a 600 PPM. A linha corre macia e brilhante sem desfiar nunca!",
    voceSabia: "As máquinas de bordar industriais mais modernas utilizam microprocessadores DSP de 64 bits dedicados exclusivamente a calcular a suavização da trajetória do pantógrafo a cada milissegundo de costura.",
    practicalExercise: "Borde um desenho com cantos pontiagudos em velocidade máxima (850 PPM) sem suavização e escute o barulho da máquina. Depois, borde a versão com suavização ativada e sinta a diferença no som suave e macio da costura.",
    quickSummary: "Suavização de Pontos é o amortecimento inteligente das trajetórias da agulha que elimina trancos, reduz ruídos e impede a quebra de linha em alta velocidade.",
    relatedTerms: ["Velocidade de Bordado (PPM)", "Fio Metálico", "Short Stitch Filter", "Cinemática do Pantógrafo", "Segurança de Ponto"],
    tags: ["suavização de pontos", "amortecimento", "alta velocidade", "mecânica", "fios sensíveis"]
  },
  {
    id: "simplificacao-de-contorno",
    code: "S-045",
    letter: "S",
    term: "Simplificação de Contorno",
    pronunciation: "sim-pli-fi-ca-ção de con-tor-no",
    level: "Intermediário 🟡",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do algoritmo de Douglas-Peucker e redução de nós em geometria computacional vetorial.",
    summary: "Comando que remove nós redundantes e desnecessários de uma linha vetorial mantendo rigorosamente a mesma forma visual.",
    definition: "A Simplificação de Contorno (ou Node Reduction / Simplify Path) é a operação de otimização vetorial que analisa um traçado contendo dezenas ou centenas de nós e remove todos aqueles que não contribuem para a definição da forma geométrica, recalculando as alças de curva dos nós remanescentes de acordo com uma tolerância de desvio preestabelecida.",
    technicalDetails: "Uma linha vetorizada automaticamente pode conter facilmente mais de 200 nós desordenados para uma simples folha. A simplificação reduz esse número para apenas 4 a 6 nós perfeitos, eliminando micro-pontos, diminuindo o tamanho do arquivo, facilitando a edição e melhorando a qualidade visual dos pontos.",
    beginnerExplanation: "É uma 'faxina de nós' no desenho: se o programa colocou 100 pontinhos para fazer uma folha, a simplificação apaga os 90 pontinhos que estavam sobrando e deixa só os 10 pontinhos principais que realmente importam, deixando tudo levinho e fácil de mexer.",
    howItWorks: [
      "1. A usuária seleciona um objeto vetorial com nós em excesso.",
      "2. Clica na ferramenta 'Simplificar Contorno / Reduzir Nós' (Simplify / Reduce Nodes).",
      "3. Define a tolerância de precisão (ex: 0,05 mm).",
      "4. O software remove os nós redundantes mantendo a forma idêntica.",
      "5. A linha fica limpa e com curvas suaves.",
      "6. A geração de pontos de bordado fica muito mais estável e perfeita."
    ],
    applications: [
      "Otimização obrigatória após vetorização automática de imagens (Auto-Trace).",
      "Limpeza de arquivos SVG e AI importados de outros programas gráficos (Illustrator/Corel).",
      "Facilitação da remodelagem manual de desenhos complexos.",
      "Redução do peso e memória de processamento de matrizes grandes."
    ],
    characteristics: [
      "Reduz em até 80% o número de nós vetoriais sem alterar a aparência visual da arte.",
      "Torna a edição de curvas infinitamente mais rápida e agradável.",
      "Evita travamentos do software de bordado ao manipular arquivos pesados."
    ],
    commonErrors: [
      "❌ Aplicar tolerância muito alta (ex: 1,0 mm), deformando o formato original do desenho.",
      "❌ Deixar centenas de nós acumulados em uma linha reta, gerando pontos microscópicos na hora de bordar.",
      "❌ Não verificar os nós de canto vivo após a simplificação."
    ],
    troubleshootingTips: [
      "Desenho perdeu o formato após simplificar: desfaça o comando ('Ctrl+Z') e reaplique com uma tolerância menor (ex: 0,02 mm).",
      "Software travando ao tentar mover um objeto: aplique a ferramenta de simplificação para eliminar nós corrompidos ou em excesso.",
      "Nós difíceis de selecionar: aumente o zoom na tela e use a ferramenta de simplificação para limpar a área."
    ],
    dicaArtrelados: "Toda vez que você importar um arquivo vetorizado da internet (em SVG ou EPS): use a ferramenta 'Simplificar' antes de transformar em pontos. Isso limpa a sujeira dos nós e garante que seus pontos de bordado nasçam perfeitos e alinhados!",
    voceSabia: "O algoritmo de Douglas-Peucker, base da simplificação de contornos, foi criado em 1973 originalmente para simplificar o traçado de rios e montanhas em mapas cartográficos digitais.",
    practicalExercise: "Vetorize automaticamente um logotipo simples no software e veja a quantidade enorme de nós criados. Em seguida, selecione o contorno e aplique a ferramenta 'Simplify'. Conte quantos nós foram eliminados e veja como a linha ficou limpa.",
    quickSummary: "Simplificação de Contorno é a limpeza inteligente que elimina nós vetoriais redundantes, deixando o traçado leve, suave e ideal para a geração de pontos perfeitos.",
    relatedTerms: ["Suavização de Contornos", "Curvas Bézier", "Vetorização Automática", "Remodelagem de Vetores", "Nós de Controle"],
    tags: ["simplificação", "redução de nós", "otimização", "vetores", "limpeza"]
  }
];

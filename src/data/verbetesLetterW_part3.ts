import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART3: Verbete[] = [
  {
    id: "width-largura-e-dimensoes-de-objeto",
    code: "W-011",
    letter: "W",
    term: "Width — Largura (Dimensão Horizontal e Extensão de Objetos)",
    pronunciation: "uídth — lar-gu-ra (wɪdθ)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina.",
    origin: "Do inglês arcaico 'wīd' (amplo, espaçoso) e do sufixo '-th' que forma substantivos de dimensão. Medida métrica do eixo X nos softwares de digitalização.",
    summary: "Dimensão métrica fundamental medida ao longo do eixo horizontal (X) de um desenho, objeto vetorial ou bastidor no software de matrizes e na tela da máquina.",
    definition: "A Width (Largura / Extensão Horizontal / Eixo X) é o parâmetro geométrico escalar que define a medida física linear de um objeto gráfico, bloco de pontos, letra tipográfica ou área total de bordado ao longo do eixo cartesiano horizontal (eixo X). Nos sistemas CAD/CAM de bordado, a largura é expressa em milímetros (mm) ou polegadas (in) e determina a compatibilidade da matriz com as dimensões internas do bastidor, o posicionamento no painel da máquina e os limites de escalonamento proporcional do desenho.",
    technicalDetails: "Ao alterar a largura (Width) de um desenho, os softwares permitem dois modos de transformação: 1) Escala Proporcional (Aspect Ratio Lock): a altura varia na mesma proporção percentual, preservando as proporções visuais originais; 2) Escala Não-Proporcional (Distorção no Eixo X): apenas a largura é modificada, alterando o espaçamento entre colunas e a densidade relativa de pontos. Em objetos vetoriais com preenchimento em ponto cheio (Satin), a largura do objeto influencia diretamente o comprimento dos pontos individuais, exigindo a divisão automática de pontos (Auto Split) quando ultrapassa 7.0 a 9.0 mm.",
    beginnerExplanation: "É o tamanho do desenho medido de um lado até o outro (na horizontal), deitadinho! Você sempre confere a largura para ter certeza de que o desenho vai caber certinho dentro do seu bastidor e no bolso ou no peito da camiseta!",
    howItWorks: [
      "1. O digitalizador abre a matriz no software e verifica o valor da largura na barra de propriedades.",
      "2. Confere se a largura está de acordo com as especificações da peça (ex: 90 mm para peito de camisa).",
      "3. Ajusta o tamanho digitando o valor exato em milímetros na caixa 'Largura / Width (X)'.",
      "4. O software recalcula as coordenadas dos pontos e ajusta a visualização na tela.",
      "5. A matriz é salva e enviada para a máquina de bordar.",
      "6. No painel da máquina, o operador confirma a largura total antes de iniciar.",
      "7. O pantógrafo movimenta-se respeitando os limites de largura do bastidor sem bater nas laterais."
    ],
    applications: [
      "Dimensionamento de logotipos corporativos para bolso esquerdo (padrão 80 a 100 mm).",
      "Ajuste de faixas para toalhas de banho e enxovais de cama (larguras de 200 a 300 mm).",
      "Verificação de limites de campo útil de bastidores e máquinas tubulares.",
      "Redimensionamento de fontes tipográficas para encaixe em espaços restritos."
    ],
    characteristics: [
      "Medida linear expressa em milímetros ou polegadas no eixo X.",
      "Pode ser ajustada com proporção travada ou de forma assimétrica.",
      "Controla a compatibilidade com a área física do bastidor selecionado."
    ],
    commonErrors: [
      "❌ Aumentar a largura de um arquivo fechado de máquina (.DST) sem recálculo de pontos, deixando os pontos ralos e abertos.",
      "❌ Digitar a largura em centímetros em campos calibrados em milímetros (ex: colocar 10 em vez de 100 mm).",
      "❌ Criar matrizes com largura exatamente igual ao tamanho do bastidor sem deixar margem de segurança de 10 mm."
    ],
    troubleshootingTips: [
      "O desenho está ultrapassando a área permitida no bastidor: reduza a largura (Width) em 5% com proporção travada para dar folga de segurança.",
      "As letras ficaram achatadas e esticadas para os lados: destranque a proporção e ajuste a largura e altura com a mesma porcentagem de escala.",
      "A máquina deu erro de limite de bastidor: confira se a largura máxima configurada no painel não excede o limite físico do aro montado."
    ],
    dicaArtrelados: "Para logos de peito de camisa social ou uniforme polo, grave essa medida de ouro: a largura perfeita quase sempre fica entre 85 mm e 95 mm! Fica elegante, discreto e proporcional em qualquer tamanho de peça (do P ao GG)!",
    voceSabia: "Nas primeiras máquinas mecânicas automatizadas do século XIX, a largura de cada movimento era controlada mecanicamente por alavancas graduadas conectadas a discos excêntricos de metal!",
    practicalExercise: "Abra uma matriz no seu programa, selecione o desenho inteiro e altere a largura de 100 mm para 80 mm com a opção 'Recalcular pontos' ativada. Veja como o software ajusta a densidade perfeitamente.",
    quickSummary: "Medida métrica horizontal do eixo X que define a extensão física de objetos e matrizes, regulando a compatibilidade com o bastidor e o suporte têxtil.",
    relatedTerms: ["Eixo X", "Dimensões", "Proporção", "Aspect Ratio", "Campo Útil", "Escalonamento", "Redimensionamento"],
    tags: ["width", "largura", "eixox", "dimensao", "tamanho", "software", "geometria"]
  },
  {
    id: "width-of-satin-column-largura-da-coluna-satin-ponto-cheio",
    code: "W-012",
    letter: "W",
    term: "Width of Satin Column — Largura da Coluna Satin / Ponto Cheio (Column Width)",
    pronunciation: "uídth of sé-tin có-lum — lar-gu-ra da co-lu-na sa-tin (wɪdθ əv ˈsætɪn ˈkɑːləm)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'width' (largura) e 'satin column' (coluna de ponto cheio). Parâmetro geométrico crucial na digitalização vetorial de letras e contornos.",
    summary: "Distância transversal entre as duas margens paralelas ou curvas de uma coluna de ponto cheio, determinando a extensão individual de cada laçada de linha.",
    definition: "A Width of Satin Column (Largura da Coluna de Ponto Cheio / Espessura do Cordão Satin / Satin Column Width) é a distância métrica perpendicular medida entre as duas bordas de um objeto de ponto cheio (ponto cordão ou zigue-zague denso). Esse parâmetro determina o comprimento físico exato que a agulha percorre de um lado ao outro para ancorar o ponto. No bordado computadorizado, a largura da coluna deve situar-se obrigatoriamente dentro de uma faixa técnica de segurança (idealmente entre 1.2 mm e 7.0 mm) para garantir a integridade estrutural, o brilho e a durabilidade da costura.",
    technicalDetails: "Se a largura da coluna for inferior a 1.0 mm, as penetrações sucessivas da agulha ocorrem praticamente no mesmo ponto, originando acúmulo excessivo de linha, quebra de agulhas e corte do tecido. Por outro lado, se a largura exceder 8.0 mm a 9.0 mm, os pontos tornam-se excessivamente longos e frouxos, tornando-se vulneráveis a prenderem-se em anéis, botões e unhas durante o uso diário da peça. Para colunas com larguras superiores a 7.0 mm, o software deve aplicar a função de Ponto Dividido Automático (Auto Split Satin) ou converter o objeto para preenchimento em Tatami.",
    beginnerExplanation: "É a grossura das perninhas das letras ou dos contornos em ponto cheio! Quando uma letra é muito fininha (menos de 1 mm), a agulha fura o mesmo lugar várias vezes e pode rasgar o tecido. Se a perna da letra for muito larga (mais de 7 ou 8 mm), as linhas ficam soltas e frouxas. O segredo é manter as colunas sempre na medida certa!",
    howItWorks: [
      "1. O digitalizador desenha as linhas guias de uma letra em ponto cheio no software.",
      "2. Mede a largura da coluna em diferentes trechos usando a ferramenta de régua virtual.",
      "3. Confere se os traços mais finos têm no mínimo 1.2 mm e os mais grossos não passam de 6.5 mm.",
      "4. Ativa a função 'Auto Split' para dividir automaticamente pontos que eventualmente ultrapassarem 7.0 mm.",
      "5. Aplica subponto correspondente à largura (Center Walk para finas; Zigzag/Edge Walk para largas).",
      "6. A máquina costura a coluna com pontos de comprimento seguro e tensão uniforme.",
      "7. A coluna de ponto cheio adquire alto relevo, cobertura espelhada e toque suave e duradouro."
    ],
    applications: [
      "Digitalização precisa de fontes tipográficas e nomes personalizados.",
      "Criação de contornos e bordas de aplique com espessura constante.",
      "Desenho de arabescos, folhas e detalhes florais com larguras graduadas.",
      "Padronização de traços em logotipos corporativos de alta exigência visual."
    ],
    characteristics: [
      "Faixa técnica recomendada: de 1.2 mm a 7.0 mm de largura.",
      "Exige divisão automática de pontos (Auto Split) quando acima de 7.5 mm.",
      "Determina a escolha do tipo de subponto estrutural de apoio."
    ],
    commonErrors: [
      "❌ Digitalizar letras minúsculas com pernas de 0.6 mm de largura, criando buracos no tecido e quebrando a agulha repetidamente.",
      "❌ Deixar colunas de 12 mm de largura em ponto cheio livre sem divisão automática, deixando laçadas soltas e caídas.",
      "❌ Não adaptar a largura da coluna ao tipo de tecido (esquecer que tecidos grossos exigem colunas mais largas para serem visíveis)."
    ],
    troubleshootingTips: [
      "A linha do ponto cheio está frouxa e sendo puxada por unhas: ative o 'Auto Split' (Ponto Dividido) no software com comprimento máximo de 5.0 mm ou converta a área larga para Tatami.",
      "A agulha está cortando o tecido em pontas finas de letras: engorde a ponta da coluna para no mínimo 1.2 mm e aumente o comprimento mínimo de ponto para 0.8 mm.",
      "A coluna perdeu o brilho: confira se a densidade não está alta demais (mantenha entre 0.38 e 0.42 mm) e certifique-se de que a largura seja de pelo menos 2.5 mm para permitir reflexão da luz."
    ],
    dicaArtrelados: "A regra de ouro da espessura de letras: nunca faça perninhas de letras com menos de 1.2 mm de largura! Se o logotipo do cliente tiver letrinhas microscópicas, use ponto corrido duplo (Triple Run) em vez de ponto cheio! Fica limpo, elegante e não quebra agulha!",
    voceSabia: "O ponto cheio (Satin Stitch) recebe esse nome em homenagem ao tecido de cetim (Satin), porque quando as colunas têm a largura correta, a luz reflete uniformemente na linha imitando o brilho reluzente do cetim de seda!",
    practicalExercise: "No seu programa de matrizes, use a ferramenta de medição para checar a largura de uma letra 'M'. Identifique o ponto mais largo e o mais fino da coluna e certifique-se de que ambos estejam entre 1.5 e 6.0 mm.",
    quickSummary: "Largura transversal de uma coluna de ponto cheio que deve situar-se entre 1.2 e 7.0 mm para garantir estabilidade mecânica, brilho uniforme e durabilidade.",
    relatedTerms: ["Ponto Cheio", "Satin Stitch", "Auto Split", "Ponto Dividido", "Center Walk", "Subponto", "Tipografia"],
    tags: ["width", "satincolumn", "pontocheio", "coluna", "largura", "programacao", "relevo"]
  },
  {
    id: "width-variation-variacao-de-largura-em-colunas-dinamicas",
    code: "W-013",
    letter: "W",
    term: "Width Variation — Variação de Largura (Colunas Dinâmicas e Caligrafia)",
    pronunciation: "uídth ve-ri-ei-shon — va-ri-a-ção de lar-gu-ra (wɪdθ ˌvɛriˈeɪʃən)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'variation' (mudança gradual de medida) e 'width' (largura). Recurso algorítmico de interpolação entre trilhos vetoriais paralelos ou assimétricos.",
    summary: "Transição suave e gradual da largura ao longo de uma coluna de ponto cheio, simulando traços caligráficos, pinceladas e pétalas com conicidade natural.",
    definition: "A Width Variation (Variação Gradual de Largura / Colunas de Largura Dinâmica / Tapering & Caligraphic Satin) é a propriedade geométrica e algorítmica pela qual uma coluna de ponto cheio modifica sua espessura continuamente ao longo de sua trajetória, variando de traços finos e afilados a seções volumosas e expandidas. Criada a partir de trilhos vetoriais não-paralelos (como ferramentas de Coluna A/B ou Entrada de Ponto Cheio com linhas guias independentes), essa variação é a base para a reprodução de fontes caligráficas, elementos orgânicos, chamas, arabescos e pétalas botânicas.",
    technicalDetails: "O algoritmo de digitalização interpola os pontos ao longo das curvas limites, calculando vetorialmente a inclinação angular dos pontos e a densidade relativa em cada segmento. Em trechos onde a largura varia abruptamente (estreitamento cônico ou Tapering), a densidade deve ser compensada dinamicamente: à medida que a coluna se estreita, o espaçamento entre pontos deve abrir ligeiramente (Short Stitches / Pontos Encurtados) para evitar a sobreposição de furos nas extremidades pontiagudas.",
    beginnerExplanation: "É quando uma linha de bordado começa bem fininha como a ponta de um lápis, vai ficando gordinha no meio e depois termina fininha de novo, igualzinho a uma pincelada de aquarela ou uma pétala de flor! O programa calcula todos os pontos para a transição ficar suave e elegante!",
    howItWorks: [
      "1. O digitalizador desenha duas curvas vetoriais com distâncias variáveis entre si.",
      "2. Insere linhas de ângulo de ponto guiando a orientação das laçadas ao longo da forma.",
      "3. O software gera a coluna de ponto cheio calculando a variação milimétrica de largura a cada ponto.",
      "4. Ativa a função de cantos inteligentes e pontos encurtados automáticos nas partes afiladas.",
      "5. A máquina costura a forma com transição contínua e sem degraus visíveis.",
      "6. A inclinação dos fios reflete a luz com efeito tridimensional de profundidade e movimento.",
      "7. O acabamento imita com perfeição a fluidez de um desenho feito à mão livre."
    ],
    applications: [
      "Digitalização de fontes manuscritas, caligrafia cursiva e monogramas reais.",
      "Bordados florais, folhas afiladas, galhos, caules e pétalas com degradê de forma.",
      "Brasões heraldicos com folhas de louro, fitas onduladas e pergaminhos.",
      "Cabelos de personagens, penas de pássaros e detalhes anatômicos artísticos."
    ],
    characteristics: [
      "Modificação fluida e contínua da espessura ao longo do objeto.",
      "Requer controle de pontos encurtados (Short Stitches) nas pontas finas.",
      "Gera alto dinamismo estético e sensação de profundidade tridimensional."
    ],
    commonErrors: [
      "❌ Deixar a ponta final fechar em 0.0 mm com densidade pesada, criando um nó duro que arrebenta a linha na saída.",
      "❌ Fazer variações bruscas de 90° na largura sem ajustar o ângulo dos pontos, deixando os fios tortos.",
      "❌ Usar subpontos pesados e rígidos que não acompanham a variação de largura da coluna."
    ],
    troubleshootingTips: [
      "A linha arrebenta sempre que chega na pontinha fina da folha: configure o limite mínimo de largura para 1.0 mm e ative o encurtamento de pontos (Short Stitching).",
      "O subponto está saindo para fora na parte estreita da coluna: utilize subponto com recuo proporcional (Proportional Margin Inset) que se adapta à largura do objeto.",
      "A transição de largura ficou com degraus serrilhados: adicione mais nós de curva vetorial suave (Bézier) ao longo do contorno no software."
    ],
    dicaArtrelados: "Para fazer arabescos e monogramas de noiva com aquele visual refinado de caligrafia clássica: use sempre colunas com variação de largura suave e ative o 'Auto Tapering' (afunilamento automático) no final das perninhas das letras! Fica com a elegância de um convite de casamento nobre!",
    voceSabia: "A técnica de variação de largura no bordado digital foi inspirada na caligrafia com penas de ganso e bicos de pena flexíveis do século XVIII, onde a pressão da mão do calígrafo definia a espessura da tinta no pergaminho!",
    practicalExercise: "No seu software de matrizes, desenhe uma folha usando a ferramenta de ponto cheio livre. Comece com 1.5 mm, abra para 5.0 mm no centro e feche em 1.5 mm na ponta. Borde e observe o efeito tridimensional do relevo.",
    quickSummary: "Transição gradual e harmônica de espessura ao longo de uma coluna de ponto cheio, indispensável para caligrafia, arabescos e elementos botânicos.",
    relatedTerms: ["Coluna Dinâmica", "Tapering", "Afunilamento", "Short Stitches", "Caligrafia", "Ponto Cheio", "Arabescos"],
    tags: ["widthvariation", "variacaodelargura", "caligrafia", "arabescos", "tapering", "programacao", "vetor"]
  },
  {
    id: "width-compensation-compensacao-de-largura-pull-offset",
    code: "W-014",
    letter: "W",
    term: "Width Compensation — Compensação de Largura (Pull Compensation Offset)",
    pronunciation: "uídth com-pen-sêi-shon — com-pen-sa-ção de lar-gu-ra (wɪdθ ˌkɑːmpənˈseɪʃən)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'width' (largura) e 'compensation' (ajuste preventivo de perdas). Parâmetro essencial da engenharia de digitalização para neutralizar o repuxamento elástico.",
    summary: "Parâmetro digital que expande simetricamente as margens de colunas de ponto cheio para fora dos limites vetoriais, neutralizando a contração mecânica exercida pela tensão da linha.",
    definition: "A Width Compensation (Compensação de Largura / Sobremedida de Ponto Cheio / Pull Compensation Offset / Column Expansion) é o parâmetro de programação de matrizes que aplica uma expansão milimétrica deliberada (geralmente entre 0.20 mm e 0.60 mm) para além das linhas de contorno nominais de um objeto de ponto cheio. Seu objetivo técnico fundamental é contrabalançar as forças de tensão física e elasticidade dos fios e do tecido que puxam as bordas da coluna para dentro durante a costura, garantindo que o bordado físico resultante termine com a largura exata planejada no projeto gráfico.",
    technicalDetails: "Quando um ponto de bordado é formado, a linha superior e a linha da bobina exercem uma força de tração contínua sobre as fibras do tecido (Pull Effect), estreitando a largura real da coluna costurada em até 20% a 30% em relação ao desenho na tela. O valor da Width Compensation deve ser configurado de acordo com a elasticidade do tecido: 0.15 a 0.20 mm para tecidos planos e firmes (tricoline, sarja, brim); 0.35 a 0.45 mm para malhas de algodão, piquet e toalhas; e 0.50 a 0.70 mm para tecidos altamente elásticos (lycra, suplex, moletons pesados).",
    beginnerExplanation: "Quando a máquina borda, a linha puxa o tecido como se fosse um elástico apertado, fazendo as letras ficarem mais fininhas e magras do que você desenhou no computador. A Compensação de Largura é uma opção no programa que 'engorda' as letras de propósito para que, quando a máquina puxar, elas fiquem no tamanho perfeito e sem frestas!",
    howItWorks: [
      "1. O digitalizador desenha um logotipo com letras de 3.0 mm de largura na tela.",
      "2. Acessa as propriedades do objeto e seleciona a aba 'Compensação de Repuxo / Width Offset'.",
      "3. Define o valor de compensação (ex: 0.40 mm para bordar em camisa polo de piquet).",
      "4. O software recalcula os nós externos expandindo os pontos para 3.4 mm de largura teórica.",
      "5. A máquina costura a matriz no tecido elástico.",
      "6. A tração natural dos pontos contrai o tecido para o centro da coluna.",
      "7. A letra é finalizada fisicamente no tecido com exatos 3.0 mm de largura e cobertura 100% perfeita.",
      "8. Os contornos ao redor fecham perfeitamente sem deixar nenhuma fresta branca."
    ],
    applications: [
      "Ajuste fino de legibilidade para letras e textos pequenos.",
      "Bordados sobre tecidos elásticos (malha polo, suplex, helanca, tricot).",
      "Encaixe milimétrico entre preenchimentos tatami e linhas de contorno em ponto cheio.",
      "Padronização de dimensões em logotipos corporativos com manuais de identidade visual rigorosos."
    ],
    characteristics: [
      "Configurável em milímetros absolutos ou percentual de expansão.",
      "Neutraliza o efeito físico de estreitamento (Pull Effect) da linha.",
      "Permite adaptar a mesma matriz para tecidos firmes ou elásticos com um clique."
    ],
    commonErrors: [
      "❌ Deixar a compensação de largura em 0.0 mm ao bordar em malhas, fazendo as letras ficarem magras, esqueléticas e com buracos.",
      "❌ Aplicar compensação excessiva (mais de 0.8 mm) em letras muito pequenas, fechando os centros vazados das letras 'e', 'a' e 'o'.",
      "❌ Aumentar a densidade de pontos para tentar engrossar letras em vez de usar a compensação de largura correta."
    ],
    troubleshootingTips: [
      "Ficaram frestas brancas vazias entre o contorno e o preenchimento do desenho: aumente a compensação de largura (Pull Comp) no software para 0.40 mm.",
      "O miolo das letras 'e' e 'o' virou um bloco sólido fechado: reduza a compensação de largura para 0.15 mm nas letras minúsculas.",
      "As letras ficaram fininhas e tortas em camisa polo: aumente a compensação de largura para 0.45 mm e coloque filme solúvel por cima."
    ],
    dicaArtrelados: "A regra de ouro da compensação de largura da Artrelados: Tecido firme (sarja, tricoline) = 0.20 mm. Tecido médio ou atoalhado (toalha, moletom) = 0.35 mm. Tecido elástico (malha polo, suplex, lycra) = 0.45 mm a 0.50 mm! Seguindo isso, seus contornos nunca mais saem fora do lugar!",
    voceSabia: "Antes da invenção da compensação automática nos softwares nos anos 1980, os digitalizadores tinham que redesenhar manualmente cada letra 20% mais gorda com réguas milimetradas em papel vegetal!",
    practicalExercise: "No seu software, escreva duas palavras iguais. Na primeira, deixe Pull Comp = 0.00 mm. Na segunda, coloque Pull Comp = 0.40 mm. Dê um zoom de 500% e veja como os pontos da segunda avançam para fora da linha guia preta.",
    quickSummary: "Expansão paramétrica aplicada às bordas de ponto cheio para compensar o repuxo mecânico da linha e manter a largura perfeita no tecido após a costura.",
    relatedTerms: ["Pull Compensation", "Repuxo", "Pull Effect", "Ponto Cheio", "Satin Column", "Contorno", "Encaixe"],
    tags: ["widthcompensation", "compensacaodelargura", "pullcomp", "repuxo", "programacao", "ajuste", "software"]
  },
  {
    id: "width-control-controle-e-limites-de-largura-de-ponto",
    code: "W-015",
    letter: "W",
    term: "Width Control — Controle e Limites de Largura de Ponto (Stitch Width Safeguards)",
    pronunciation: "uídth con-trôul — con-tro-le de lar-gu-ra (wɪdθ kənˈtroʊl)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'width' (largura) e 'control' (regulagem, parâmetros de segurança). Sistema de filtragem e governança de parâmetros de costura nos algoritmos CAD.",
    summary: "Conjunto de regras, travas e filtros de segurança no software e na máquina que monitoram e restringem as larguras mínimas e máximas de pontos permitidas na execução.",
    definition: "O Width Control (Controle de Limites de Largura / Filtro de Amplitude de Pontos / Stitch Width Safeguards) é o conjunto de mecanismos algorítmicos e eletrônicos implementados tanto nos softwares de digitalização quanto nos computadores de bordo das máquinas de bordar industriais para supervisionar, limitar e proteger a amplitude transversal dos pontos. Ele impede a geração ou a execução de pontos com larguras fora dos padrões mecânicos seguros da máquina (como pontos microscópicos menores que 0.4 mm ou pontos excessivamente longos maiores que 12.0 mm).",
    technicalDetails: "O sistema de Width Control atua em três frentes críticas: 1) Limite Mínimo de Ponto (Small Stitch Filter): elimina ou funde pontos com deslocamento inferior a 0.4–0.6 mm, prevenindo o bloqueio da lançadeira e perfurações concentradas que cortam o tecido; 2) Limite Máximo de Salto (Max Jump/Satin Length): divide automaticamente pontos que excedem o alcance do pantógrafo em um único ciclo (comumente 12.1 a 12.7 mm no padrão Tajima .DST); 3) Proteção de Limite de Bastidor: bloqueia comandos que forcem o pantógrafo para fora do campo seguro do bastidor montado.",
    beginnerExplanation: "É como um 'anjo da guarda digital' que não deixa a máquina fazer pontos nem pequenos demais (que possam furar o tecido e quebrar a agulha) e nem compridos demais (que possam travar o motor da máquina ou soltar fios)! Ele mantém tudo dentro dos limites seguros!",
    howItWorks: [
      "1. O digitalizador define as regras de controle de largura nas preferências gerais do software.",
      "2. Ao salvar ou exportar a matriz para arquivo de máquina (.DST, .PES, etc.), o filtro analisa cada coordenada.",
      "3. Se encontrar pontos menores que 0.5 mm, o software funde-os suavemente aos pontos vizinhos.",
      "4. Se encontrar colunas mais largas que o limite configurado, aplica divisão automática de pontos.",
      "5. A matriz chega à máquina 100% otimizada e dentro dos limites seguros de engenharia.",
      "6. A CPU da máquina lê as coordenadas e valida os limites antes de liberar o botão de início.",
      "7. A produção transcorre sem paradas por quebra de linha, agulha torta ou travamento de bastidor."
    ],
    applications: [
      "Limpeza e otimização automática de matrizes digitalizadas automaticamente por imagens (Auto-Digitizing).",
      "Proteção mecânica de máquinas eletrônicas rápidas operando a 1.000 SPM.",
      "Adequação de arquivos de bordado para normas industriais de qualidade.",
      "Prevenção de danos em tecidos ultrafinos ou couros delicados."
    ],
    characteristics: [
      "Filtra e elimina micro-pontos perigosos (menores que 0.5 mm).",
      "Fraciona pontos longos que ultrapassam a amplitude mecânica da máquina.",
      "Garante a estabilidade e a velocidade contínua da produção no ateliê."
    ],
    commonErrors: [
      "❌ Desativar o filtro de pontos pequenos (Small Stitch Filter) achando que terá 'mais detalhes', causando embolamento de linha.",
      "❌ Exportar matrizes com pontos de 15 mm sem corte ou divisão, fazendo a máquina dar erro mecânico de salto.",
      "❌ Ignorar avisos de limite de largura no painel da máquina e forçar o início do bordado."
    ],
    troubleshootingTips: [
      "A máquina está parando e acusando erro de ponto longo (Jump Limit): ative o filtro de comprimento máximo de ponto no software configurado para 12.0 mm.",
      "A máquina está furando o mesmo buraquinho e embolando linha no início das letras: aumente o filtro de pontos mínimos para 0.5 mm no software.",
      "O bordado está demorando muito mais do que o previsto: utilize a ferramenta de limpeza de pontos (Stitch Processor) para eliminar pontos redundantes."
    ],
    dicaArtrelados: "Sempre deixe ativado no seu programa de matrizes o filtro de 'Eliminar pontos menores que 0.5 mm'! Esse simples ajuste limpa a sua matriz, reduz o tempo de máquina em até 10% e elimina 90% das quebras de agulha no início das letras!",
    voceSabia: "O limite de salto máximo de 12.7 mm (127 unidades de 0.1 mm) nas máquinas Tajima foi criado na década de 1970 baseado na capacidade máxima de armazenamento de dados binários de 7 bits em fitas perfuradas!",
    practicalExercise: "No seu programa de matrizes, utilize a ferramenta 'Limpar matriz' (Clean Up) e veja o relatório indicando quantos pontos minúsculos foram eliminados automaticamente sem alterar a aparência visual do desenho.",
    quickSummary: "Mecanismos algorítmicos e eletrônicos que supervisionam e restringem as larguras mínimas e máximas de pontos, protegendo a máquina e garantindo a qualidade da costura.",
    relatedTerms: ["Small Stitch Filter", "Filtro de Pontos", "Auto Split", "Comprimento Máximo", "Limpeza de Matriz", "Otimização"],
    tags: ["widthcontrol", "controledelargura", "seguranca", "filtro", "micropontos", "programacao", "qualidade"]
  }
];

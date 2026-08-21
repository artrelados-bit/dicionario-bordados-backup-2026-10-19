import { Verbete } from "../types";

export const VERBETES_LETTER_Q3: Verbete[] = [
  {
    id: "qualidade-da-tensao-da-linha",
    code: "Q-017",
    letter: "Q",
    term: "Qualidade da Tensão da Linha",
    pronunciation: "qua-li-da-de da ten-sao da li-nha",
    level: "Intermediário 🟡",
    category: "Tensão & Calibração",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim tensio (ato de esticar, esforço de tração). Refere-se ao equilíbrio das forças de atrito aplicadas à linha superior e à linha da bobina.",
    summary: "Equilíbrio preciso entre as tensões dos fios superior e inferior, garantindo pontos assentados sem enrugar o tecido.",
    definition: "A qualidade da tensão da linha é o estado harmônico no qual a resistência de tração dos discos tensores superiores casa perfeitamente com a pressão da mola da caixa de bobina. Esse equilíbrio evita que a linha de baixo suba para a frente ou que a linha de cima fique frouxa e forme laçadas soltas.",
    technicalDetails: "Medida em gramas-força (gf) com tensiômetro analógico ou digital: tensão da linha superior de poliéster 40wt calibrada tipicamente entre 100 e 130 gf, e a tensão da bobina calibrada entre 18 e 25 gf (padrão 'teste da gota').",
    beginnerExplanation: "É o ajuste fino da linha: nem muito apertada a ponto de enrugar o pano ou quebrar a linha, nem muito frouxa a ponto de formar nós e laçadas soltas.",
    howItWorks: [
      "1. A linha passa entre os discos de tensão com pressão ajustável por mola ou controle eletrônico.",
      "2. A mola estica-fio amortece as oscilações bruscas da alavanca.",
      "3. A linha da bobina passa sob a lâmina metálica com pressão fixa.",
      "4. O encontro dos fios ocorre no ponto geométrico ideal no verso das colunas satim (regra dos 3 terços)."
    ],
    applications: [
      "Ajuste para bordados com fios metálicos que requerem tensão superior mais suave (80-90 gf).",
      "Calibração de rotina no início do turno de produção em oficinas industriais.",
      "Bordados em tecidos finos e escorregadios que enrugam facilmente sob tensão excessiva."
    ],
    characteristics: [
      "Verso do ponto satim mostrando 1/3 de linha superior em cada borda e 1/3 de linha branca de bobina no centro.",
      "Frente do bordado 100% limpa sem nenhum ponto branco da bobina visível.",
      "Ausência de franzimento no tecido ao redor de letras e detalhes."
    ],
    commonErrors: [
      "❌ Mexer no parafuso da caixa da bobina sem necessidade antes de checar a linha de cima.",
      "❌ Passar a linha superior com o pé calcador abaixado (discos de tensão fechados).",
      "❌ Tentar corrigir problemas de entretela apertando a tensão da linha ao máximo."
    ],
    troubleshootingTips: [
      "Linha branca da bobina subindo para a frente: solte a tensão superior ou aperte levemente a da bobina.",
      "Linha superior embolando embaixo (ninho de pássaro): passe a linha de cima novamente com o calcador erguido.",
      "Tecido muito franzido e repuxado: reduza a tensão superior em 1 ou 2 números."
    ],
    dicaArtrelados: "Sempre que for passar a linha superior na máquina, certifique-se de que o pé calcador está levantado! Com o calcador alto, os discos de tensão se abrem e a linha entra no fundo da canaleta de pressão.",
    voceSabia: "Em máquinas industriais de alta velocidade, um tensiômetro mecânico tipo 'TOWI' é usado diariamente para garantir que todas as 12 ou 15 agulhas tenham exatamente a mesma tensão em gramas-força.",
    practicalExercise: "Borde 5 colunas de satim com diferentes numerações de tensão superior (de 2 a 6). Vire o tecido e compare os versos para identificar qual número gerou a proporção exata de 1/3 no centro.",
    quickSummary: "Qualidade da tensão da linha é o equilíbrio de força entre o fio de cima e o de baixo que garante bordados lisos e sem nós.",
    relatedTerms: ["Balanço de Tensão", "Tensiômetro Têxtil", "Caixa da Bobina", "Ninho de Pássaro"],
    tags: ["tensão", "calibração", "bobina", "ajuste"]
  },
  {
    id: "qualidade-da-cobertura",
    code: "Q-018",
    letter: "Q",
    term: "Qualidade da Cobertura",
    pronunciation: "qua-li-da-de da co-ber-tu-ra",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim cooperire (tapar completamente, cobrir). Expressa a opacidade visual do fio sobre o fundo têxtil.",
    summary: "Grau de opacidade e fechamento visual de uma área bordada, impedindo que a cor do tecido de fundo apareça entre os pontos.",
    definition: "A qualidade da cobertura (Coverage Factor) é a capacidade dos fios de bordar ocultarem totalmente o tecido subjacente sem gerar espessura excessiva. É influenciada pela espessura do fio (filamento 40wt vs. 60wt), pelo contraste de cores entre o tecido e o fio, pela densidade de pontos e pelo ângulo de inclinação das linhas de costura.",
    technicalDetails: "Quando bordamos linhas brancas sobre tecidos escuros (como preto ou azul-marinho), a qualidade da cobertura exige uma densidade 10% a 15% maior ou uma camada de suporte tatami cruzada para neutralizar o contraste óptico de fundo.",
    beginnerExplanation: "É quando você borda uma cor e ela cobre o tecido de verdade, sem deixar aquele fundinho escuro do tecido aparecendo no meio dos fios.",
    howItWorks: [
      "1. A camada de suporte cria uma barreira física que aplana as fibras do tecido.",
      "2. A camada principal de pontos é aplicada com espaçamento calibrado (ex: 0.40 mm).",
      "3. O brilho e a espessura do fio de poliéster geram reflexão e opacidade contínua.",
      "4. O contraste cromático é absorvido pelo volume tridimensional das laçadas."
    ],
    applications: [
      "Bordados com linhas amarelas ou brancas sobre moletons pretos.",
      "Preenchimentos em tecidos estampados ou xadrez que exigem opacidade total.",
      "Bordados em toalhas de banho felpudas com topping para conter as cerdas."
    ],
    characteristics: [
      "Cor sólida e uniforme sem falhas translúcidas sob luz direta.",
      "Toque flexível sem acúmulo excessivo de massa de linha.",
      "Bordas perfeitamente integradas sem vazamentos ópticos de fundo."
    ],
    commonErrors: [
      "❌ Aumentar a densidade para 0.20 mm achando que é o único modo de cobrir tecido escuro.",
      "❌ Não usar pontos de suporte antes de preenchimentos em cores claras sobre fundos escuros.",
      "❌ Bordar sem filme solúvel sobre tecidos felpudos, fazendo a felpa atravessar o bordado."
    ],
    troubleshootingTips: [
      "Fundo escuro aparecendo: adicione um suporte tipo tatami leve (Grid Underlay) em ângulo de 90°.",
      "Bordado parecendo uma placa rígida: reduza a densidade principal e fortaleça o suporte intermediário.",
      "Pontos afundando na trama: aplique plástico filme hidrossolúvel (Solvy) sobre o tecido."
    ],
    dicaArtrelados: "Para cobrir tecido preto com linha branca sem deixar o bordado duro, use duas camadas de tatami com densidade aberta (0.60 mm cada) cruzadas em 45° e 135° em vez de uma única camada super pesada.",
    voceSabia: "Cores claras como amarelo, branco e rosa possuem menor pigmentação de dióxido de titânio no polímero e naturalmente exigem maior cuidado de cobertura do que cores escuras.",
    practicalExercise: "Borde um quadrado branco de 4x4 cm sobre tecido preto com densidade 0.40 mm sem suporte, e outro idêntico com suporte de grade a 90°. Compare a opacidade visual dos dois sob uma lâmpada forte.",
    quickSummary: "Qualidade da cobertura é a capacidade do bordado cobrir completamente a cor do tecido de fundo com opacidade e maleabilidade.",
    relatedTerms: ["Densidade de Pontos", "Pontos de Suporte", "Opacidade Têxtil", "Ponto Tatami"],
    tags: ["cobertura", "opacidade", "densidade", "cores"]
  },
  {
    id: "qualidade-da-densidade",
    code: "Q-019",
    letter: "Q",
    term: "Qualidade da Densidade",
    pronunciation: "qua-li-da-de da den-si-da-de",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim densitas (espessura, concentração). Expressa o espaçamento milimétrico entre duas linhas paralelas consecutivas de pontos.",
    summary: "Calibração matemática da distância entre linhas de pontos na matriz, equilibrando cobertura visual e maleabilidade têxtil.",
    definition: "A qualidade da densidade é a precisão do espaçamento entre as passadas de agulha (geralmente entre 0.35 mm e 0.45 mm para fios 40wt). Uma densidade bem calibrada garante fechamento visual total sem sobrecarregar o tecido com perfurações excessivas que causam quebra de agulhas, desfiamento de linhas ou o temido efeito 'placa de ferro'.",
    technicalDetails: "Calculada pela fórmula D = Espaçamento entre Linhas (mm). Em softwares, valores menores significam maior concentração de pontos (ex: 0.35 mm é mais denso que 0.45 mm). Deve ser adaptada ao título do fio (linhas 60wt exigem densidade de 0.30 mm, enquanto linhas 30wt exigem 0.55 mm).",
    beginnerExplanation: "É a distância certinha entre uma linha e outra do bordado. Se ficar muito junta, o bordado fica duro e fura o tecido; se ficar muito longe, o tecido fica aparecendo nos vãos.",
    howItWorks: [
      "1. O software calcula o número exato de linhas necessárias para cobrir a largura do objeto.",
      "2. O pantógrafo avança milimetricamente a cada ciclo para posicionar a próxima fileira.",
      "3. O espaçamento é modulado automaticamente em curvas e cantos para evitar concentração.",
      "4. A espessura do fio fecha visualmente o micro-espaço entre as perfurações da agulha."
    ],
    applications: [
      "Ajuste fino de densidade em tecidos de malha delicada para evitar furos.",
      "Bordados em couro legítimo exigindo densidade aberta (0.50 mm a 0.60 mm) para não rasgar.",
      "Calibração de pequenos textos (letras com menos de 5 mm de altura)."
    ],
    characteristics: [
      "Espaçamento visualmente imperceptível a olho nu na distância normal de visualização.",
      "Preservação do caimento e da maciez natural da peça de vestuário.",
      "Ausência de perfurações repetidas no mesmo ponto que cortam a trama do tecido."
    ],
    commonErrors: [
      "❌ Usar a mesma densidade padrão para todos os tipos de tecido sem adaptação.",
      "❌ Reduzir o tamanho de uma matriz em 50% no painel da máquina sem recalcular a densidade de pontos.",
      "❌ Aumentar a densidade para compensar a falta de entretela de sustentação."
    ],
    troubleshootingTips: [
      "Agulha quebrando em preenchimentos espessos: aumente o espaçamento de densidade de 0.38 mm para 0.45 mm.",
      "Bordado cortando o tecido como um picote de papel: a densidade está alta demais; reduza o número de pontos.",
      "Bordado ralo com linhas separadas: diminua o espaçamento entre linhas no software."
    ],
    dicaArtrelados: "Nunca redimensione uma matriz em mais de 10% ou 15% diretamente na tela da máquina de bordar simples! Faça sempre o redimensionamento no software com a opção de recalcular pontos ativada.",
    voceSabia: "Em matrizes digitalizadas para fios metálicos finos, a densidade deve ser aberta em pelo menos 15% a 20% em relação ao fio de poliéster tradicional para evitar atrito destrutivo.",
    practicalExercise: "No software, crie três colunas satim de 20x5 mm com densidades de 0.30 mm, 0.40 mm e 0.50 mm. Borde as três lado a lado em malha de algodão e compare a flexibilidade e a cobertura de cada uma.",
    quickSummary: "Qualidade da densidade é o ajuste milimétrico da distância entre pontos que garante cobertura ideal com maciez e segurança mecânica.",
    relatedTerms: ["Espaçamento de Ponto", "Redimensionamento de Matriz", "Efeito Placa de Ferro", "Ponto Satim"],
    tags: ["densidade", "espaçamento", "programação", "software"]
  },
  {
    id: "qualidade-da-regularidade-dos-pontos",
    code: "Q-020",
    letter: "Q",
    term: "Qualidade da Regularidade dos Pontos",
    pronunciation: "qua-li-da-de da re-gu-la-ri-da-de dos pon-tos",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim regularis (conforme a uma regra, constante, uniforme). Expressa a constância milimétrica das dimensões e tensões ao longo de toda a costura.",
    summary: "Uniformidade rítmica de comprimento, largura e tensão dos pontos ao longo de toda a extensão do bordado.",
    definition: "A qualidade da regularidade dos pontos é a constância milimétrica com que a máquina executa cada laçada, sem variações acidentais de tamanho, largura de coluna satim ou tensão ao longo do tempo. Reflete a precisão dos motores de passo do pantógrafo, a ausência de folgas nas correias de transmissão e a estabilidade do fluxo de linha.",
    technicalDetails: "Uma costura regular não apresenta oscilação de borda (efeito dente de serra) em linhas retas, mantém a distância de passo constante em pespontos e assegura que a tensão não se altere à medida que o cone de linha vai esvaziando.",
    beginnerExplanation: "É ver que todos os pontinhos parecem soldadinhos alinhados: têm exatamente o mesmo tamanho, a mesma largura e o mesmo aperto do começo ao fim do trabalho.",
    howItWorks: [
      "1. Os motores de passo X e Y movem o pantógrafo com pulsos eletrônicos de precisão micrométrica.",
      "2. As correias dentadas transmitem o movimento sem deslizamentos ou folgas mecânicas.",
      "3. O desbobinamento da linha ocorre com atrito constante do primeiro ao último ponto.",
      "4. A sapata do calcador pressiona o tecido com altura uniforme em toda a área."
    ],
    applications: [
      "Pespontos decorativos de alta precisão em camisas sociais e alfaiataria.",
      "Linhas retas e quadriculados geométricos em quilting computadorizado.",
      "Contornos de medalhas e brasões militares exigindo simetria absoluta."
    ],
    characteristics: [
      "Linhas retas perfeitas sem ziguezagues indesejados.",
      "Passo de ponto uniforme do início ao fim de cada contorno.",
      "Transição suave de espessura em arabescos sem 'degraus' visíveis."
    ],
    commonErrors: [
      "❌ Trabalhar com correias do pantógrafo frouxas que causam vibração e perda de regularidade.",
      "❌ Deixar o fio prender na base do carretel causando picos de tensão repentinos.",
      "❌ Tecido solto no bastidor oscilando verticalmente (flagging)."
    ],
    troubleshootingTips: [
      "Bordas de colunas satim parecendo serrilhadas: aperte as correias dos eixos X e Y ou reduza a velocidade da máquina.",
      "Tamanho dos pontos variando em linha reta: verifique se o bastidor está bem travado no suporte do pantógrafo.",
      "Pontos ficando mais apertados no final do bordado: confira se o cone de linha não está tombando ou prendendo o fio."
    ],
    dicaArtrelados: "Faça manutenção preventiva nas correias e guias lineares da sua máquina: lubrificação e tensão correta das correias são o segredo da regularidade milimétrica dos pontos.",
    voceSabia: "Os encoders digitais dos servomotores das máquinas de bordar modernas conseguem dividir uma única rotação em mais de 4.000 pulsos de posicionamento preciso.",
    practicalExercise: "Borde um quadrado de 10x10 cm em ponto corrido simples com passo de 3 mm. Meça com régua milimétrica o tamanho de 10 pontos seguidos para comprovar a regularidade da máquina.",
    quickSummary: "Qualidade da regularidade dos pontos é a constância e precisão geométrica das laçadas mantida ao longo de todo o tempo de execução do bordado.",
    relatedTerms: ["Passo do Ponto", "Pantógrafo", "Eixo X-Y", "Serrilhamento de Borda"],
    tags: ["regularidade", "precisão", "mecânica", "pantógrafo"]
  },
  {
    id: "qualidade-do-arremate",
    code: "Q-021",
    letter: "Q",
    term: "Qualidade do Arremate",
    pronunciation: "qua-li-da-de do ar-re-ma-te",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim remetiri (medir novamente, repassar, prender o término). Designa os micro-pontos de amarração no início (Tie-in) e no fim (Tie-off) de cada elemento.",
    summary: "Execução de micro-pontos de travamento no início e no final dos objetos, garantindo fixação mecânica invisível e segura.",
    definition: "A qualidade do arremate mede a eficiência mecânica e a discrição visual dos nós de amarração da linha. Um arremate perfeito trava as laçadas para que o bordado nunca se desfaça após sucessivas lavagens, sem formar nós grossos, bolotas de linha visíveis ou pontos que machuquem a pele no verso.",
    technicalDetails: "Executado por técnicas como o 'Half Star' (meia estrela), 'Bow Tie' (gravata borboleta) ou 3 a 4 micro-pontos concentrados (0.5 a 1.0 mm de comprimento) inseridos dentro da trajetória da coluna seguinte ou sob a área de cobertura.",
    beginnerExplanation: "É o nózinho invisível que a máquina dá no começo e no final de cada letra ou desenho para a linha não escapar nem desfiar quando a peça for lavada.",
    howItWorks: [
      "1. Ao iniciar um objeto, a máquina dá 3 a 4 pontos minúsculos (Tie-in) antes de acelerar.",
      "2. O bordado principal cobre e esconde esses pontos iniciais.",
      "3. Ao terminar, a máquina executa 3 a 4 micro-pontos cruzados (Tie-off) para travar a laçada.",
      "4. A faca de corte automático corta a linha rente ao nó de arremate."
    ],
    applications: [
      "Bordados em roupas de trabalho e peças esportivas sujeitas a atrito e centrifugação.",
      "Nomes e pequenos textos onde os cortes de linha ocorrem a cada letra.",
      "Bordados rendados (FSL) onde a amarração é o que sustenta a estrutura no ar."
    ],
    characteristics: [
      "Nó 100% invisível na frente da peça bordada.",
      "Resistência total a puxões e lavagens sem soltar fios.",
      "Verso limpo sem acúmulo de 'caroços' de linha que incomodem o usuário."
    ],
    commonErrors: [
      "❌ Deixar objetos sem arremate programado, fazendo as pontas desmancharem no primeiro uso.",
      "❌ Programar arremates com muitos pontos (mais de 6) no mesmo lugar, criando um nó duro que quebra a agulha.",
      "❌ Cortar a linha de salto rente demais manualmente em matrizes sem arremate automático."
    ],
    troubleshootingTips: [
      "Bordado desmanchando após a lavagem: ative a opção de arremate final automático (Tie-off) em todos os objetos no software.",
      "Nó grosso visível no início da letra: altere o estilo de arremate para 'Inline' (ao longo da linha) ou reduza o número de micro-pontos.",
      "Linha escapando da agulha após o corte: ajuste a folga da cauda de linha (tail length) deixada pelo cortador."
    ],
    dicaArtrelados: "Em fontes pequenas (menos de 6 mm), use arremate em linha reta (linear run tie-in) dentro do corpo da letra. O arremate tradicional em estrela fica espesso demais em letras minúsculas.",
    voceSabia: "Um nó de arremate bem programado no software resiste a uma força de tração superior a 2 kg antes de se romper, garantindo décadas de durabilidade.",
    practicalExercise: "Borde 3 letras avulsas com arremate automático ativado e 3 sem arremate. Com uma pinça, puxe suavemente a ponta da linha cortada em ambas e observe qual delas se desfaz imediatamente.",
    quickSummary: "Qualidade do arremate é a criação de micro-nós discretos e firmes no início e fim de cada elemento para garantir durabilidade sem volume indesejado.",
    relatedTerms: ["Pontos de Amarração", "Tie-in", "Tie-off", "Corte Automático de Linha"],
    tags: ["arremate", "nó", "segurança", "programação"]
  },
  {
    id: "qualidade-do-ponto-de-entrada",
    code: "Q-022",
    letter: "Q",
    term: "Qualidade do Ponto de Entrada",
    pronunciation: "qua-li-da-de do pon-to de en-tra-da",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim intrare (entrar, penetrar). Refere-se à coordenada inicial exata onde a agulha começa a costurar um novo objeto.",
    summary: "Posicionamento estratégico do ponto inicial de costura de um objeto na matriz para otimizar o fluxo e ocultar arremates.",
    definition: "A qualidade do ponto de entrada (Entry Point) é a escolha estratégica feita pelo digitalizador quanto ao local exato onde o primeiro ponto de um elemento é disparado. Um ponto de entrada bem localizado reduz a distância de viagem do pantógrafo, permite esconder os nós de amarração sob camadas posteriores e evita marcas de início na superfície visível.",
    technicalDetails: "Definido por um nó vetorial verde no software de programação. O alinhamento ótimo do ponto de entrada de um objeto com o ponto de saída do objeto anterior elimina a necessidade de comandos de corte de linha (Trims) e saltos longos.",
    beginnerExplanation: "É o lugar certinho onde a agulha começa a costurar uma parte do desenho. Escolher um bom lugar de entrada faz o bordado ficar mais rápido e sem fios sobrando.",
    howItWorks: [
      "1. O programador define manualmente a coordenada de entrada do vetor.",
      "2. O pantógrafo desloca-se diretamente para esse ponto com o menor trajeto possível.",
      "3. O arremate inicial (Tie-in) é executado exatamente nessa posição.",
      "4. A costura de preenchimento avança suavemente a partir do ponto de entrada."
    ],
    applications: [
      "Conexão fluida entre letras em textos cursivos sem cortes de linha intermediários.",
      "Digitalização de desenhos com múltiplos níveis de sobreposição (ex: flores com pétalas).",
      "Otimização de tempo de máquina em produções industriais em larga escala."
    ],
    characteristics: [
      "Localizado próximo ao término do objeto anterior para diminuir o salto.",
      "Escondido sob partes mais densas do bordado sempre que possível.",
      "Posicionado de forma a direcionar o fluxo de pontos para longe de áreas sensíveis."
    ],
    commonErrors: [
      "❌ Deixar pontos de entrada e saída em posições opostas aleatórias, gerando viagens longas e cortes constantes.",
      "❌ Colocar o ponto de entrada na borda mais visível de uma coluna satim, deixando o nó exposto.",
      "❌ Iniciar preenchimentos grandes pelas bordas externas empurrando o tecido para o centro."
    ],
    troubleshootingTips: [
      "Muitos cortes de linha no bordado: aproxime o ponto de entrada do objeto atual ao ponto de saída do anterior.",
      "Nó inicial aparecendo no contorno: mova o ponto de entrada para o interior da área que será coberta depois.",
      "Tecido formando pregas no meio: mude a entrada do preenchimento para o centro do desenho e borde para fora."
    ],
    dicaArtrelados: "Em letras cursivas, coloque o ponto de entrada de cada letra exatamente onde a linha de conexão da letra anterior chega. Isso cria o efeito de escrita contínua à mão sem nenhum corte de linha.",
    voceSabia: "Os algoritmos modernos de 'Branching' (ramificação automática) recalculam sozinhos as melhores entradas e saídas de dezenas de objetos com um único clique.",
    practicalExercise: "No software, pegue uma palavra cursiva de 5 letras. Mova manualmente os pontos de entrada e saída para que a máquina borde a palavra inteira sem fazer um único corte de linha.",
    quickSummary: "Qualidade do ponto de entrada é o posicionamento inteligente do início da costura para esconder nós e encurtar caminhos de linha.",
    relatedTerms: ["Ponto de Saída", "Sequenciamento", "Caminho de Viagem", "Branching"],
    tags: ["entrada", "vetor", "programação", "software"]
  },
  {
    id: "qualidade-do-ponto-de-saida",
    code: "Q-023",
    letter: "Q",
    term: "Qualidade do Ponto de Saída",
    pronunciation: "qua-li-da-de do pon-to de sa-i-da",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim salire (sair, partir). Refere-se à coordenada final onde a agulha conclui a costura de um determinado elemento.",
    summary: "Determinação precisa da coordenada de término da costura de um objeto, preparando a transição suave para o elemento seguinte.",
    definition: "A qualidade do ponto de saída (Exit Point) é o planejamento da coordenada onde o último ponto e o arremate final (Tie-off) são executados. Uma saída bem planejada posiciona a agulha no local mais favorável para iniciar o próximo objeto ou para realizar o corte da linha com a menor tensão residual possível.",
    technicalDetails: "Representado por uma cruz ou nó vermelho no software de digitalização. Uma boa saída evita que o último ponto fique solto na borda e garante que o arremate final fique completamente camuflado.",
    beginnerExplanation: "É o local exato onde a máquina termina de bordar um pedaço do desenho e se prepara para ir para o próximo, sem deixar pontas de linha soltas nem nós feios.",
    howItWorks: [
      "1. A costura principal do objeto caminha em direção à coordenada de saída escolhida.",
      "2. No ponto de saída, a máquina dispara os pontos de travamento final (Tie-off).",
      "3. O pantógrafo recebe o comando de saltar diretamente para a próxima entrada ou acionar o cortador.",
      "4. A tensão da linha é liberada momentaneamente para que a faca corte o fio perfeitamente."
    ],
    applications: [
      "Finalização limpa de monogramas e arabescos com arremate embutido.",
      "Transição contínua entre preenchimentos de fundo e contornos perimetrais.",
      "Otimização de sequências de corte em máquinas de alta produtividade."
    ],
    characteristics: [
      "Posicionado estrategicamente perto da entrada do próximo objeto da mesma cor.",
      "Embutido no corpo do bordado para não deixar pontas de arremate salientes.",
      "Finalização sem folgas de linha que possam criar laçadas soltas."
    ],
    commonErrors: [
      "❌ Terminar a costura em uma ponta fina onde o arremate deforma o desenho.",
      "❌ Deixar o ponto de saída distante do próximo objeto sem necessidade de corte.",
      "❌ Esquecer de ativar o nó de arremate final no ponto de saída."
    ],
    troubleshootingTips: [
      "Pontas de linha desfiando no fim do objeto: adicione 3 micro-pontos de arremate final antes do ponto de saída.",
      "Cortes de linha muito frequentes: alinhe o ponto de saída deste objeto com o ponto de entrada do próximo.",
      "Nó final aparecendo na borda externa: mova a coordenada de saída para o centro do objeto."
    ],
    dicaArtrelados: "Ao digitalizar contornos fechados (como círculos e molduras), coloque o ponto de saída sobrepondo o ponto de entrada em pelo menos 1 mm. Isso garante que a junta fique 100% invisível.",
    voceSabia: "Em softwares profissionais, a distância entre a saída de um objeto e a entrada do próximo determina automaticamente se a máquina fará um salto com corte ou um caminho de costura corrida interna.",
    practicalExercise: "Desenhe um círculo com contorno de satim. Mude o ponto de saída para cruzar o ponto de entrada por 1 mm. Borde na máquina e veja como a emenda do círculo fica totalmente imperceptível.",
    quickSummary: "Qualidade do ponto de saída é o planejamento do término da costura que assegura nós firmes e transições diretas para o próximo elemento.",
    relatedTerms: ["Ponto de Entrada", "Pontos de Amarração", "Arremate Final", "Caminho de Viagem"],
    tags: ["saída", "vetor", "programação", "software"]
  },
  {
    id: "qualidade-dos-saltos",
    code: "Q-024",
    letter: "Q",
    term: "Qualidade dos Saltos",
    pronunciation: "qua-li-da-de dos sal-tos",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim saltus (pulo, movimento rápido de um ponto a outro). Refere-se ao deslocamento do pantógrafo sem penetração da agulha no tecido.",
    summary: "Controle da extensão, frequência e trajetórias dos deslocamentos sem costura do bastidor, minimizando linhas soltas e paradas.",
    definition: "A qualidade dos saltos (Jump Stitches) avalia a inteligência com que o pantógrafo se desloca entre áreas não contíguas do bordado. Uma matriz de excelência minimiza saltos longos visíveis, agrupa elementos próximos e utiliza caminhos de viagem camuflados (travel runs) para se mover sem precisar acionar a faca de corte a cada fração de segundo.",
    technicalDetails: "Saltos maiores que a tolerância de corte da máquina (geralmente 2 a 5 mm) disparam comandos de 'Trim' (corte de linha). Saltos curtos (menores que 2 mm) são mantidos sem corte para economizar tempo, exigindo que fiquem ocultos sob o design.",
    beginnerExplanation: "É quando a máquina para de costurar num lugar e vai para outro. Quanto mais inteligente for esse caminho, menos 'linhas compridas' ficam passando por cima do bordado para você ter que cortar na tesoura.",
    howItWorks: [
      "1. A máquina executa o arremate final no ponto de saída do primeiro objeto.",
      "2. Se o corte automático estiver ativado, a lâmina corta a linha superior e inferior.",
      "3. O pantógrafo move-se em alta velocidade para o ponto de entrada do próximo objeto.",
      "4. A máquina reinicia a costura com arremate inicial sem deixar fios esticados no ar."
    ],
    applications: [
      "Bordados de textos com espaçamento entre palavras e letras maiúsculas.",
      "Desenhos com múltiplos detalhes espalhados (ex: estrelas ou bolinhas).",
      "Otimização de tempo em máquinas domésticas que não possuem cortador automático de linha."
    ],
    characteristics: [
      "Número mínimo de saltos cruzando áreas vazias de tecido visível.",
      "Transições curtas e diretas entre letras vizinhas.",
      "Arremates firmes antes e depois de cada salto com corte."
    ],
    commonErrors: [
      "❌ Deixar dezenas de saltos compridos sem corte sobrepostos, que depois são costurados por cima por outros pontos.",
      "❌ Programar cortes de linha em saltos minúsculos de 1 mm, desperdiçando tempo de máquina.",
      "❌ Cortar os fios de salto na tesoura sem conferir se havia arremate prévio, desmanchando o bordado."
    ],
    troubleshootingTips: [
      "Fios de salto sendo costurados por baixo de outros preenchimentos: altere a ordem dos objetos na lista de camadas.",
      "Máquina demorando muito por excesso de cortes: aumente a distância mínima de corte no software de 2 mm para 5 mm.",
      "Linha desfiando no início de cada salto: verifique a calibragem da faca de corte e da mola retentora de linha."
    ],
    dicaArtrelados: "Em máquinas que não cortam a linha automaticamente entre as letras, pause a máquina logo após o primeiro salto e corte a linha rente ao tecido antes que o próximo ponto passe por cima dela!",
    voceSabia: "Em um logotipo comercial com 10 letras, programar caminhos de viagem internos em vez de cortes com salto pode economizar até 45 segundos por peça bordada.",
    practicalExercise: "Digitalize 5 estrelas pequenas separadas por 2 cm. No primeiro arquivo, programe com corte a cada estrela; no segundo, use conexões de costura corrida escondidas. Compare o tempo de bordado e a limpeza de ambos.",
    quickSummary: "Qualidade dos saltos é a otimização dos deslocamentos do pantógrafo entre objetos para evitar excesso de fios soltos e reduzir o tempo de produção.",
    relatedTerms: ["Pontos de Salto", "Corte Automático de Linha", "Caminho de Viagem", "Sequenciamento"],
    tags: ["saltos", "corte", "otimização", "tempo"]
  },
  {
    id: "qualidade-das-transicoes",
    code: "Q-025",
    letter: "Q",
    term: "Qualidade das Transições",
    pronunciation: "qua-li-da-de das tran-si-coes",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim transitio (passagem de um estado ou lugar para outro). Refere-se à continuidade estética e mecânica entre diferentes cores, ângulos ou tipos de ponto.",
    summary: "Harmonia visual e estrutural na união entre diferentes blocos de pontos, cores, texturas ou sentidos de costura.",
    definition: "A qualidade das transições avalia a suavidade e a precisão com que o bordado passa de uma área para outra. Abrange transições de cor (degradês e matizes), transições de ângulo de ponto (curvaturas em colunas satim sem quebra abrupta) e transições entre tipos de pontos (tatami encontrando satim sem sobreposições grosseiras).",
    technicalDetails: "Utiliza técnicas avançadas de mesclagem de densidade (Density Blending), comprimentos de ponto variáveis (Accordion Spacing) e cantos inteligentes em mitra ou sobreposição (Smart Corners) para criar efeitos fluidos e naturais.",
    beginnerExplanation: "É quando uma cor passa para outra suavemente (como um pôr do sol) ou quando uma curva vira sem parecer que foi colada torta, ficando tudo macio e bonito.",
    howItWorks: [
      "1. A primeira cor é bordada com densidade gradualmente decrescente.",
      "2. A segunda cor é intercalada sobre a primeira com densidade crescente e comprimentos variados.",
      "3. Os ângulos de ponto acompanham a curvatura anatômica do desenho.",
      "4. A sobreposição milimétrica impede que se formem frestas de tecido na divisa das áreas."
    ],
    applications: [
      "Bordados realistas e retratos com sombreamento de pele e degradê de olhos.",
      "Bordados botânicos com pétalas de flores passando do amarelo para o laranja e vermelho.",
      "União limpa entre preenchimento de fundo e molduras grossas de brasões."
    ],
    characteristics: [
      "Fusão óptica suave entre cores vizinhas sem linhas de demarcação duras.",
      "Continuidade de brilho nas curvas de colunas satim sem nós ou quebras.",
      "Toque uniforme sem acúmulo de volume na linha de encontro dos objetos."
    ],
    commonErrors: [
      "❌ Tentar fazer degradê colocando duas camadas normais 100% densas uma sobre a outra, criando um calombo de linha.",
      "❌ Fazer curvas de 90° em satim sem usar divisão em mitra, embolando os pontos no lado interno.",
      "❌ Deixar as duas áreas apenas encostadas lado a lado sem sobreposição, abrindo um buraco quando o tecido repuxar."
    ],
    troubleshootingTips: [
      "Degradê parecendo listras duras: use a ferramenta de preenchimento em degradê (Accordion Space) com comprimentos de ponto intercalados.",
      "Borda interna da curva acumulando linha: ative o recurso de 'Pontos Curtos' (Short Stitches) na transição da curva.",
      "Fresta branca na divisa das cores: aumente a sobreposição entre os blocos em 0,8 mm."
    ],
    dicaArtrelados: "Para criar transições de degradê perfeitas, use sempre a mesma família de linha (mesma espessura e brilho) e intercale os pontos com ângulos ligeiramente inclinados (entre 15° e 30°).",
    voceSabia: "A técnica de transição de cores com fios de bordar (Ponto Matiz) existe desde a Idade Média, conhecida como 'Pintura de Agulha' (Needle Painting) nas tapeçarias reais.",
    practicalExercise: "Crie um retângulo de 6x3 cm passando do azul escuro para o azul claro usando a ferramenta de degradê do seu software. Borde e observe a ilusão de sombra e luz criada pelo cruzamento dos fios.",
    quickSummary: "Qualidade das transições é a união harmônica e suave entre diferentes cores, ângulos e pontos, criando continuidade visual e toque suave.",
    relatedTerms: ["Ponto Matiz", "Degradê de Cores", "Pontos Curtos", "Canto em Mitra"],
    tags: ["transição", "degradê", "matiz", "curvas"]
  }
];

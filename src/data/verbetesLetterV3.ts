import { Verbete } from "../types";

export const VERBETES_LETTER_V3: Verbete[] = [
  {
    id: "valvula-solenoide-e-pistoes-pneumaticos-pneumatic-valves-actuators",
    code: "V-011",
    letter: "V",
    term: "Válvula Solenoide e Pistões Pneumáticos (Pneumatic Valves & Actuators)",
    pronunciation: "vál-vu-la so-le-nói-de e pis-tões pneu-má-ti-cos (niu-mé-tic válvs & ác-tu-ei-tors)",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego 'solen' (tubo, canal) e 'eidos' (forma) combinado com 'pneuma' (ar, sopro). Sistemas eletromecânicos acionados por ar comprimido empregados na automação de máquinas industriais de bordar.",
    summary: "Componentes mecatrônicos de alta velocidade acionados por ar comprimido e pulsos elétricos para executar movimentos mecânicos instantâneos como corte de fio, limpadores de linha e troca de bastidores.",
    definition: "As Válvulas Solenoides e Pistões Pneumáticos constituem a infraestrutura de atuação eletropneumática presente em máquinas de bordar industriais de alta performance e cabeçotes múltiplos. Enquanto servomotores controlam movimentos contínuos de rotação e coordenadas cartesianas X/Y, as válvulas solenoides convertem sinais elétricos digitais emitidos pela placa controladora em pulsos de pressão pneumática (6 a 8 bar) para acionar guilhotinas de corte, limpadores de fio (wipers), travas de bastidor e cabeçotes de lantejoulas.",
    technicalDetails: "Uma válvula solenoide de bordado opera através de uma bobina eletromagnética que, ao ser energizada com 24V DC por 15 a 50 milissegundos, atrai uma armadura ferromagnética móvel, abrindo a passagem de ar para um microcilindro pneumático de dupla ação. A resposta ultra-rápida (menos de 0.03 segundos) permite realizar o corte de linha inferior e superior em sincronismo exato com a subida do estica-fio no ângulo de 100° do volante, sem que haja desaceleração perceptível do ciclo produtivo.",
    beginnerExplanation: "São como pequenos músculos de ar comprimido dentro da máquina industrial: quando a máquina precisa cortar a linha ou bater a faquinha de lantejoulas, uma válvula elétrica solta um sopro de ar forte e num piscar de olhos a peça de metal se mexe e volta para o lugar!",
    howItWorks: [
      "1. O compressor de ar central do ateliê alimenta o bloco de válvulas solenoides com ar seco e filtrado a 6 bar.",
      "2. A controladora da máquina emite um comando de corte de linha (Trim) no final de um bloco de cor.",
      "3. A bobina solenoide recebe o sinal elétrico e abre instantaneamente o fluxo de ar para o pistão do cortador.",
      "4. O êmbolo do pistão empurra a faca móvel sob a chapa de agulha, laçando a linha da bobina e a linha superior.",
      "5. A linha é cortada contra a contra-faca fixa e o limpador de fio (wiper) puxa a ponta da linha para cima.",
      "6. A mola de retorno ou ar reverso fecha a válvula, preparando o cabeçote para o próximo disparo."
    ],
    applications: [
      "Acionamento de facas de corte automático em máquinas industriais (Tajima, Barudan, SWF, ZSK).",
      "Controle de disparadores em alimentadores de lantejoulas e dispositivos de corte térmico.",
      "Mecanismo de fixação rápida e troca pneumática de bastidores em linhas de produção contínua.",
      "Sistemas automáticos de lubrificação por névoa e limpeza por jato de ar comprimido."
    ],
    characteristics: [
      "Velocidade de atuação quase instantânea com tempo de resposta em milissegundos.",
      "Alta durabilidade mecânica suportando milhões de ciclos sem desgaste prematuro.",
      "Exige ar comprimido limpo, seco e isento de umidade através de filtros coalescentes."
    ],
    commonErrors: [
      "❌ Operar a máquina industrial sem filtro secador de ar, deixando água entrar nas válvulas e enferrujar os pistões.",
      "❌ Pressão de ar abaixo de 5 bar no manômetro, fazendo as facas de corte falharem e mastigarem a linha.",
      "❌ Deixar poeira e fiapos de linha acumularem sobre os solenoides, provocando superaquecimento das bobinas."
    ],
    troubleshootingTips: [
      "Facas de corte da máquina não acionam no final do bordado: verifique no manômetro traseiro se a pressão do compressor está ajustada entre 6 e 7 bar.",
      "Válvula solenoide fazendo zumbido e esquentando muito: desligue e verifique se há curto-circuito na bobina de 24V ou trava mecânica no êmbolo.",
      "Limpador de linha (wiper) descendo muito devagar: drene o reservatório de água do filtro de ar e aplique uma gota de óleo pneumático fino."
    ],
    dicaArtrelados: "Se você tem máquina industrial com sistema pneumático, faça da drenagem do filtro de ar a sua PRIMEIRA tarefa toda manhã ao abrir o ateliê! Dois segundos para tirar a água do copinho do filtro evitam que você gaste milhares de reais trocando solenoides e pistões queimados!",
    voceSabia: "As primeiras válvulas solenoides foram inventadas em 1820 pelo físico francês André-Marie Ampère ao estudar os primeiros campos magnéticos criados por correntes elétricas em bobinas de cobre!",
    practicalExercise: "Localize o conjunto de válvulas pneumáticas e o manômetro de pressão na sua máquina industrial. Faça a verificação diária da pressão e acione o teste manual de corte pelo painel para ouvir o clique seco e rápido das solenoides.",
    quickSummary: "Dispositivos eletropneumáticos acionados por ar comprimido e pulsos elétricos que comandam cortes, travas e acessórios automáticos em máquinas industriais.",
    relatedTerms: ["Ar Comprimido", "Corte Automático", "Wiper", "Trimmer", "Mecatrônica", "Pressostato"],
    tags: ["valvula", "solenoide", "pneumatico", "industrial", "mecanica", "corte", "ar"]
  },
  {
    id: "vaporizacao-e-passadoria-de-bordados-steam-finishing-grooming",
    code: "V-012",
    letter: "V",
    term: "Vaporização e Passadoria de Bordados (Steam Finishing & Grooming)",
    pronunciation: "va-po-ri-za-ção e pas-sa-do-ri-a de bor-da-dos (stim fi-ni-shing & gru-ming)",
    level: "Iniciante 🟢",
    category: "Acabamento & Finalização",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'vapor' (exalação gasosa, fumaça) e do ato de passar a ferro quente. Etapa fundamental do acabamento têxtil de pós-produção para relaxamento de tensões e brilho.",
    summary: "Processo de aplicação de vapor úmido e calor brando para relaxar as fibras do tecido, assentar os pontos de linha e dissolver resíduos de entretela solúvel.",
    definition: "A Vaporização e Passadoria de Bordados é o procedimento térmico final de beneficiamento da peça bordada onde o vapor de água sob pressão e calor controlado são aplicados para neutralizar as tensões mecânicas acumuladas durante a costura. O vapor hidrata as fibras do tecido (desfazendo o enrugamento/puckering) e realinha os filamentos sintéticos da linha de poliéster ou viscose, conferindo brilho uniforme, maciez ao toque e assentamento perfeito dos relevos.",
    technicalDetails: "Durante a execução do bordado, o atrito e a tração geram tensões elásticas residuais nas laçadas de linha (polímero termoplástico) e deformam a trama do tecido. A água em estado gasoso a 100°C–120°C penetra na estrutura molecular do algodão e do poliéster, diminuindo a rigidez do módulo de Young e permitindo que as fibras se acomodem na sua posição de equilíbrio termodinâmico. A passadoria direta com ferro sobre a frente do bordado NUNCA deve ser realizada, pois achata os pontos e 'esmaga' o relevo tridimensional.",
    beginnerExplanation: "É o 'dia de spa' do bordado! Quando a peça sai da máquina, o tecido sai meio enrugadinho e a linha meio tensa. Um bom banho de vapor quente pelo lado avesso faz a mágica acontecer: o tecido alisa, os pontinhos assentam no lugar certo e o bordado fica com um brilho brilhante de loja de shopping!",
    howItWorks: [
      "1. A peça é retirada do bastidor e os excessos de entretela são limpos com cuidado.",
      "2. Estende-se uma toalha macia ou manta de passadoria espessa sobre a tábua de passar.",
      "3. A peça é colocada com o bordado virado PARA BAIXO (de bruços contra a toalha macia).",
      "4. Utiliza-se ferro a vapor ou vaporizador vertical (Steamer) aplicando jatos generosos de vapor pelo AVESSO da peça.",
      "5. A pressão do ferro afunda o relevo do bordado na toalha fofa sem achatar a linha de cima.",
      "6. A peça esfria na posição horizontal por 1 minuto para fixar o formato perfeitamente liso.",
      "7. Pequenos resíduos de plástico hidrossolúvel desaparecem instantaneamente com a umidade do vapor."
    ],
    applications: [
      "Finalização obrigatória de enxovais de bebê, lençóis de berço e toalhas nobres.",
      "Eliminação imediata de marcas de bastidor deixadas em tecidos delicados.",
      "Dissolução e limpeza de microfilmes hidrossolúveis em letras e monogramas.",
      "Assentamento de bordados em camisas sociais e uniformes corporativos antes de embalar."
    ],
    characteristics: [
      "Restaura o volume original e o brilho acetinado das linhas de bordar.",
      "Não queima nem deforma as fibras sintéticas de poliéster.",
      "Dobra a percepção de valor e profissionalismo na entrega para o cliente final."
    ],
    commonErrors: [
      "❌ Passar ferro seco e pelando diretamente por cima da frente do bordado, derretendo as pontas da linha e achatando o relevo.",
      "❌ Passar tecidos de veludo pela frente, destruindo para sempre as cerdas do tecido.",
      "❌ Dobrar e ensacar a peça ainda quente e úmida, gerando mofo e vincos permanentes no bordado."
    ],
    troubleshootingTips: [
      "Bordado ficando fosco e sem brilho após passar: você usou ferro direto na frente; passe sempre pelo avesso sobre uma toalha fofa com vapor.",
      "Tecido ao redor do bordado com ondinhas de franzido: aplique bastante vapor pelo avesso puxando levemente as pontas do tecido para relaxar a fibra.",
      "Marca redonda do bastidor insistindo em não sair: borrife água morna na marca e aplique vapor quente com ferro a 2 cm de distância."
    ],
    dicaArtrelados: "Monte a 'caminha mágica de passar' no seu ateliê: coloque uma toalha felpuda dobrada em quatro sobre a tábua de passar. Deite seu bordado virado de cara para a toalha e passe o ferro com vapor com vontade pelas costas dele! O bordado afunda na felpa e sai do outro lado estufadinho, macio e impecável!",
    voceSabia: "Nas grandes alfaiatarias italianas e francesas, a técnica de passar peças com relevo sobre almofadas acolchoadas é chamada de 'Stiratura alla Francese' e tem sido passada de mestre para aprendiz há mais de 300 anos!",
    practicalExercise: "Borde dois pequenos monogramas idênticos. Passe um deles com ferro seco direto pela frente e o outro pelo avesso sobre uma toalha fofa com vapor. Coloque os dois lado a lado sob a luz do sol e veja a diferença brutal de brilho e volume.",
    quickSummary: "Técnica térmica de pós-produção que utiliza vapor de água e calor pelo avesso para relaxar tensões, eliminar rugas e realçar o brilho dos pontos.",
    relatedTerms: ["Steamer", "Ferro a Vapor", "Acabamento", "Marca de Bastidor", "Puckering", "Toalha de Passar"],
    tags: ["vaporizacao", "passadoria", "vapor", "acabamento", "ferro", "estetica", "cuidado"]
  },
  {
    id: "variabilidade-de-densidade-e-degrade-variable-density-shading",
    code: "V-013",
    letter: "V",
    term: "Variabilidade de Densidade e Degradê (Variable Density / Shading)",
    pronunciation: "va-ria-bi-li-da-de de den-si-da-de e de-gra-dê (vé-ri-a-bol dên-si-ti / xei-ding)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim 'densitas' (espessura, espessidão) e do francês 'dégradé' (atenuação gradual de cores e tons). Técnica avançada de pintura com agulha no bordado computadorizado.",
    summary: "Programação matricial de transição gradual de espaçamento entre pontos, permitindo criar efeitos de degradê de cores, sombras e transições foto-realistas suaves.",
    definition: "A Variabilidade de Densidade e Degradê (ou Efeito Sombra / Density Shading) é a técnica avançada de digitalização onde o espaçamento entre linhas adjacentes de ponto tatami ou ponto cheio não é uniforme, mas varia progressivamente de uma borda densa (ex: 0.35 mm) até uma borda extremamente aberta e rarefeita (ex: 1.5 a 3.0 mm). Ao sobrepor duas ou mais camadas de cores distintas com gradientes opostos, as linhas de cores diferentes se entrelaçam opticamente, criando a ilusão de fusão contínua de tons e realismo tridimensional.",
    technicalDetails: "O algoritmo de densidade variável (presente no Wilcom Color Blending e PE-Design Gradient Fill) calcula uma taxa de dispersão exponencial ou linear para as coordenadas de descida da agulha. Para obter uma fusão perfeita de duas cores sem criar um 'muro' de linha: a Camada A inicia em 0.40 mm e se expande até 2.0 mm; a Camada B sobreposta inicia em 2.0 mm e se contrai até 0.40 mm, mantendo o mesmo ângulo de ponto ou com uma diferença de apenas 5° para evitar o efeito moiré óptico. O underlay sob áreas de degradê deve ser leve e uniforme para não quebrar a transição tonal.",
    beginnerExplanation: "É como misturar duas tintas no papel usando um pincel macio: em vez de fazer uma divisão dura entre o vermelho e o amarelo, a máquina vai soltando os pontos vermelhos aos poucos enquanto começa a colocar os amarelos no meio deles, criando um tom de laranja perfeito e brilhante!",
    howItWorks: [
      "1. O programador desenha a forma anatômica da pétala, paisagem ou rosto no software.",
      "2. Duplica o objeto geométrico exatamente no mesmo lugar com a cor secundária.",
      "3. No objeto 1 (cor base), ativa o efeito 'Color Blending / Gradiente' com densidade indo de 100% a 10%.",
      "4. No objeto 2 (cor de fusão), aplica o gradiente invertido, indo de 10% a 100%.",
      "5. Ajusta-se o perfil de curva (linear, côncavo ou convexo) para definir onde a mistura de cores será mais intensa.",
      "6. A máquina costura a primeira cor espaçada e depois 'costura por dentro' a segunda cor, misturando os fios com perfeição.",
      "7. O resultado é um degradê artístico contínuo de alta sofisticação."
    ],
    applications: [
      "Bordados realistas de pássaros, animais, flores e retratos humanos (Thread Painting).",
      "Logotipos modernos com gradientes de cores corporativas (como chamas, pores do sol e esferas).",
      "Simulação de reflexos metálicos, cromados e brilho dourado em brasões de luxo.",
      "Bordados em vestidos de alta-costura com efeitos sombreados artísticos."
    ],
    characteristics: [
      "Permite criar infinitas tonalidades intermediárias combinando poucas cores de linha.",
      "Mantém o bordado leve e macio porque a soma das duas densidades equivale a uma camada normal.",
      "Exige precisão milimétrica de registro e estabilidade de bastidor."
    ],
    commonErrors: [
      "❌ Colocar densidade padrão de 0.4 mm nas duas camadas inteiras, criando uma crosta dura e quebrando a agulha.",
      "❌ Usar ângulos de ponto perpendiculares (90° de diferença) no degradê, fazendo os fios ficarem em xadrez em vez de fundidos.",
      "❌ Esquecer de alinhar a origem do gradiente nas duas camadas, fazendo a mistura ficar no lugar errado."
    ],
    troubleshootingTips: [
      "Degradê parecendo uma linha dura dividida ao meio: aumente o comprimento da zona de transição e use curva de gradiente linear suave.",
      "Fios da segunda cor arrebentando ao costurar sobre a primeira: reduza a densidade de partida para no máximo 0.45 mm e use agulha ponta aguda fina (75/11).",
      "O tecido está aparecendo no meio da mistura: diminua o espaçamento máximo da transição para 1.8 mm em vez de 3.0 mm."
    ],
    dicaArtrelados: "Para criar um degradê de cair o queixo em folhas e flores, use sempre linhas da mesma família de cor com três tons: um escuro na base, um médio no meio e um bem claro na ponta. No software, incline os ângulos de ponto acompanhando o movimento das pétalas: a luz vai bater na linha e parecerá uma pintura a óleo de verdade!",
    voceSabia: "A técnica de fusão de pontos por densidade variável é a versão computadorizada do 'Ponto Pintura' (ou Pintura com Agulha), técnica chinesa imperial de Suzhou com mais de 2.500 anos de tradição!",
    practicalExercise: "No seu software de digitalização, crie um retângulo de 5x3 cm. Aplique a ferramenta de mescla de cores (Color Blending) com linha azul escura e azul clara. Borde o teste e veja como a junção fica invisível a olho nu.",
    quickSummary: "Técnica de programação matricial que varia progressivamente o espaçamento entre pontos para criar fusões tonais, sombras e efeitos degradê foto-realistas.",
    relatedTerms: ["Color Blending", "Pintura com Agulha", "Gradiente", "Densidade", "Ponto Tatami", "Thread Painting"],
    tags: ["degrade", "densidade", "sombra", "colorblending", "programacao", "wilcom", "realismo"]
  },
  {
    id: "vies-e-angulo-de-ponto-stitch-angle-fabric-bias",
    code: "V-014",
    letter: "V",
    term: "Viés e Ângulo de Ponto (Stitch Angle & Fabric Bias)",
    pronunciation: "vi-és e ân-gu-lo de pon-to (stítch ên-gol & fé-bric bái-as)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês 'biais' (oblíquo, inclinado) e do latim 'angulus' (canto, quina). Princípio elementar da física têxtil que rege a interação entre a direção da linha e a trama do tecido.",
    summary: "Relação angular entre as linhas de costura da matriz e o sentido dos fios de urdume, trama e viés (45°) do tecido, determinante para o volume e prevenção de deformações.",
    definition: "O Viés e o Ângulo de Ponto representam o direcionamento geométrico vetorial com que as laçadas da agulha são deitadas sobre a estrutura têxtil do tecido no bastidor. Todo tecido plano é composto por fios longitudinais (urdume - reto), transversais (trama) e diagonais (o viés a 45°, que possui a maior elasticidade natural). Quando o ângulo dos pontos de bordado é alinhado no sentido correto, a peça adquire estabilidade mecânica máxima, reflexão luminosa superior e zero franzimento.",
    technicalDetails: "A tração mecânica gerada pelo estica-fio puxa o tecido no sentido paralelo às laçadas (Pull Effect) e o empurra no sentido perpendicular (Push Effect). Se um preenchimento tatami for programado exatamente a 0° (paralelo à trama) ou a 90° (paralelo ao urdume), as agulhadas cairão repetidamente nos mesmos vãos entre os fios do tecido, provocando corte de fibras e enrugamento severo. Ao programar ângulos inclinados entre 30°, 45° ou 60° (cortando o viés do tecido), as perfurações se distribuem uniformemente por diferentes fios de urdume e trama, dissipando a tensão por toda a área.",
    beginnerExplanation: "O tecido é feito de fios cruzados como uma gradezinha. Se você costurar na mesma direção dos fios da grade, o bordado entra no meio deles e enruga tudo! Mas se você inclinar a costura na diagonal (no viés), o bordado fica retinho, brilhante e não repuxa a roupa!",
    howItWorks: [
      "1. O programador identifica o sentido do fio do tecido no bastidor (sentido vertical e horizontal).",
      "2. No software de matrizes, seleciona o objeto e ativa a ferramenta 'Linhas de Ângulo de Ponto' (Stitch Angles).",
      "3. Traça linhas diagonais (geralmente entre 35° e 55°) cortando a estrutura do tecido.",
      "4. Em letras e contornos curvos, insere múltiplos ângulos para que o ponto cheio acompanhe a curva suavemente.",
      "5. A máquina borda as laçadas deitando a linha de forma cruzada em relação à elasticidade da peça.",
      "6. O tecido mantém sua estabilidade dimensional perfeitamente plana ao sair do bastidor."
    ],
    applications: [
      "Evitar deformação de círculos (que viram ovais) em camisas polo de malha piquet.",
      "Bordados em tecidos nobres cortados no viés (como vestidos de seda e cetim).",
      "Direcionamento de brilho e reflexão de luz em monogramas e letras clássicas.",
      "Estabilização de grandes áreas de bordado em tecidos elásticos com elastano."
    ],
    characteristics: [
      "Fundamental para controlar as forças físicas de 'Puxa e Empurra' (Push-Pull).",
      "Define o reflexo de luz e o brilho acetinado característico do fio de poliéster.",
      "Pode ser dinâmico (Turning Satin) ou uniforme (Fixed Angle Tatami)."
    ],
    commonErrors: [
      "❌ Programar toda a matriz com um único ângulo de 0° ou 90°, fazendo a camiseta enrugar inteira.",
      "❌ Bordar colunas de letras com ângulos em 90° em relação à curvatura, criando bordas serrilhadas.",
      "❌ Não considerar a elasticidade do tecido ao definir a inclinação dos pontos."
    ],
    troubleshootingTips: [
      "Círculo perfeito saindo ovalado na máquina: mude o ângulo do ponto tatami de 0° para 45° e reforce o underlay.",
      "Linha abrindo buraquinhos no tecido: incline o ângulo do ponto em pelo menos 20° para a agulha não bater sempre na mesma fibra.",
      "Bordado parecendo fosco e sem vida: ajuste as linhas de ângulo para que fiquem alinhadas com a incidência de luz frontal da peça."
    ],
    dicaArtrelados: "A regra de ouro da digitalização profissional: nunca deixe grandes preenchimentos em 0° ou 90°! Use sempre ângulos diagonais (como 40° ou 130°). O seu bordado ficará infinitamente mais liso, o tecido não vai repuxar e o brilho da linha vai se destacar a metros de distância!",
    voceSabia: "Na alfaiataria clássica, cortar e costurar peças no viés (45°) foi uma revolução introduzida pela estilista francesa Madeleine Vionnet nos anos 1920, permitindo que os tecidos abraçassem as curvas do corpo com caimento perfeito sem necessidade de zíperes!",
    practicalExercise: "Crie dois quadrados de 4x4 cm no software: um com ângulo de 0° e outro com ângulo de 45°. Borde ambos em uma malha de camiseta comum com uma camada de entretela e sinta a diferença de ondulação ao redor de cada um.",
    quickSummary: "Orientação geométrica das linhas de costura em relação à trama e viés do tecido, essencial para evitar enrugamento e realçar o brilho.",
    relatedTerms: ["Push-Pull Effect", "Compensação de Repuxo", "Urdume e Trama", "Turning Satin", "Puckering", "Ponto Tatami"],
    tags: ["vies", "angulo", "trama", "programacao", "wilcom", "estabilidade", "tecido"]
  },
  {
    id: "viscose-linha-de-rayon-rayon-embroidery-thread",
    code: "V-015",
    letter: "V",
    term: "Viscose / Linha de Rayon (Rayon Embroidery Thread)",
    pronunciation: "vis-co-se / li-nha de rei-on (rêi-on em-brói-de-ri trêd)",
    level: "Iniciante 🟢",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino.",
    origin: "Do latim 'viscosus' (viscoso, pegajoso) e 'Rayon' (raio de sol em francês, batizado na década de 1920 por seu brilho radiante). Primeira fibra celulósica artificial produzida a partir da polpa de madeira.",
    summary: "Linha de bordar clássica de brilho sedoso intenso e toque ultra-macio, amplamente utilizada em peças nobres, moda festa, lingerie e enxovais delicados.",
    definition: "A Linha de Viscose (comercialmente conhecida como Linha de Rayon) é um fio de bordar contínuo fabricado a partir de celulose regenerada de polpa de madeira. Historicamente o padrão-ouro de beleza na indústria do bordado, o Rayon destaca-se por seu brilho profundo e natural (muito superior ao brilho plástico do poliéster comum) e por uma maleabilidade e maciez excepcionais que acompanham perfeitamente o caimento de tecidos fluidos e delicados.",
    technicalDetails: "O fio de Rayon 40 (espessura padrão 120D/2) possui tenacidade moderada (cerca de 28–32 cN/tex) e menor elasticidade que o poliéster, o que significa que ele NÃO estica antes de romper. Por essa razão, o Rayon exige passagens de fio ultra-suaves, tensores mecânicos com regulagem mais frouxa (90 a 110 gf) e agulhas perfeitamente polidas (75/11 SES). O Rayon é sensível ao alvejamento com cloro (desbota se lavado com água sanitária), mas suporta temperaturas de passadoria superiores ao poliéster sem derreter.",
    beginnerExplanation: "É a linha mais macia e brilhante do mundo do bordado! Ela brilha como pura seda e não fica com aquele toque duro na roupa. Por ser feita de celulose natural de árvores, ela é mais delicada que a linha de poliéster, então precisa que a máquina esteja bem reguladinha e frouxinha para não arrebentar.",
    howItWorks: [
      "1. O cone de linha de Rayon é instalado no porta-fios da máquina com redinha protetora anti-desbobinamento.",
      "2. A linha percorre os discos tensores que devem estar levemente mais soltos que a tensão usual de poliéster.",
      "3. Utiliza-se agulha específica para bordado (75/11 com olho polido grande).",
      "4. A velocidade da máquina é ajustada para uma faixa estável (600–750 SPM).",
      "5. A linha deita suavemente sobre o tecido, formando pontos com reflexo luminoso de alta nobreza.",
      "6. A peça finalizada apresenta toque extremamente suave e flexível, ideal para contato direto com a pele."
    ],
    applications: [
      "Bordados em vestidos de festa, alfaiataria de luxo e corpetes de noiva.",
      "Enxovais refinados de bebê, cueiros, pijamas e toalhas de linho.",
      "Lingeries, sedas puras, cetins e tecidos finos que exigem caimento fluido.",
      "Reprodução de obras de arte, quadros bordados e motivos florais realistas."
    ],
    characteristics: [
      "Brilho natural profundo e incomparável, idêntico à seda pura.",
      "Toque térmico frio e maciez extrema que não pinica na pele.",
      "Não resiste a alvejantes clorados (deve ser lavada com sabão neutro)."
    ],
    commonErrors: [
      "❌ Apertar os tensores da máquina como se fosse linha de poliéster, fazendo o Rayon arrebentar a cada 100 pontos.",
      "❌ Lavar roupas bordadas em Rayon com água sanitária ou cloro, desbotando a cor instantaneamente.",
      "❌ Deixar o cone de Rayon solto sem redinha, fazendo a linha escorregar da bobina e enroscar no pé do cone."
    ],
    troubleshootingTips: [
      "Linha de Rayon quebrando toda hora: solte 1/4 de volta no tensor superior e coloque a redinha elástica protetora no cone.",
      "Pontas da linha desfiando no olho da agulha: troque a agulha por uma agulha nova própria para bordado com olho revestido de titânio ou cromo.",
      "Bordado frouxo com laços na frente: aperte suavemente o tensor superior até que 1/3 da linha da bobina apareça no avesso."
    ],
    dicaArtrelados: "Para bordar enxoval de bebê de alto padrão, a linha de viscose/rayon é imbatível! Ela não machuca a pele sensível do recém-nascido e confere aquele aspecto clássico de bordado da vovó. Basta colocar a redinha no cone e baixar um pouquinho a velocidade da máquina: o resultado é puro luxo!",
    voceSabia: "O Rayon foi a primeira fibra têxtil criada pelo homem no laboratório do químico francês Conde Hilaire de Chardonnet em 1884, que buscava salvar a indústria têxtil francesa após uma praga dizimar os bichos-da-seda!",
    practicalExercise: "Borde o mesmo monograma em duas toalhas de lavabo: uma com linha de poliéster comum e outra com linha de Rayon/Viscose. Feche os olhos e passe as costas dos dedos sobre os dois bordados para sentir a diferença absurda de maciez.",
    quickSummary: "Fio de bordar clássico à base de celulose vegetal com brilho acetinado sedoso e maciez incomparável, ideal para enxovais e alta-costura.",
    relatedTerms: ["Polyester Thread", "Rayon", "Redinha de Cone", "Tensão Superior", "Brilho Acetinado", "Moda Festa"],
    tags: ["viscose", "rayon", "linha", "fio", "seda", "brilho", "maciez", "nobre"]
  }
];

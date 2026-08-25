import { Verbete } from "../types";

export const VERBETES_LETTER_Z6: Verbete[] = [
  {
    id: "z-axis-motor-brake-freio-eletromagnetico-arvore",
    code: "Z-011",
    letter: "Z",
    term: "Z-Axis Electromagnetic Motor Brake — Freio Eletromagnético de Parada e Retenção do Eixo Principal",
    pronunciation: "zii-ék-sis i-lék-tro-mag-né-tik mô-tor brêik — frêi-u e-le-tro-mag-né-ti-cu do êi-shu prin-ci-pal",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego 'ēlektron' e 'magnētis' (eletromagnetismo) aplicado aos servofreios industriais de retenção instantânea de eixos rotativos de precisão.",
    summary: "Dispositivo mecatrônico de frenagem eletromagnética que trava a árvore principal instantaneamente na posição exata de 100° ao detectar quebra de linha ou comando de parada.",
    definition: "O Z-Axis Electromagnetic Motor Brake (Freio Eletromagnético da Árvore Principal / Servofreio Dinâmico do Eixo Z / Main Shaft Holding & Dynamic Brake) é o conjunto eletromecânico acoplado ao servomotor principal do cabeçote responsável pela desaceleração controlada e travamento mecânico imediato do eixo da árvore em frações de milissegundos assim que a máquina recebe um sinal de parada de emergência, término de bloco de cor ou detecção de quebra de linha por sensor óptico.",
    technicalDetails: "A 1.000 ou 1.200 RPM, a energia cinética rotacional ($E_k = \\frac{1}{2} J \\omega^2$) da árvore principal, bielas e lançadeiras é substancial. Para parar a agulha rigorosamente no ângulo de 100° (ponto morto superior de parada segura / Stop Position) sem ultrapassagem angular (overshoot), o servo-driver aciona primeiramente uma frenagem regenerativa eletrônica por injeção de contra-corrente e, logo em seguida, engata o freio eletromagnético de sapatas com mola de retenção (Spring-Applied Brake). Isso impede que a agulha caia por gravidade ou fique parcialmente inserida no tecido.",
    beginnerExplanation: "É o super freio inteligente do motor da máquina! Quando a linha arrebenta ou o bordado acaba, esse freio elétrico para o giro da máquina num piscar de olhos e sempre com a agulha lá em cima, bem longe do pano! Isso evita que a agulha entorte ou quebre e protege o seu bastidor de qualquer acidente.",
    howItWorks: [
      "1. O sensor de quebra de linha óptico ou giratório detecta a falta de passagem do fio superior.",
      "2. A placa-mãe envia um pulso de corte de rotação e comando de frenagem para o driver do servomotor principal.",
      "3. O driver do eixo Z aplica frenagem regenerativa desacelerando a rotação de 1.000 RPM a 0 RPM em menos de 180° de giro.",
      "4. O solenoide do freio eletromagnético é desenergizado, liberando as molas que pressionam o disco de fricção.",
      "5. A árvore principal para cravada na posição angular de parada segura de 100°.",
      "6. A luz de alarme do cabeçote acende avisando a bordadeira para repassar o fio.",
      "7. Ao religar, o freio se abre instantaneamente e a máquina retoma os pontos de onde parou."
    ],
    applications: [
      "Parada imediata de segurança em máquinas industriais multicabeçotes de 1 a 24 cabeças.",
      "Retenção angular da barra de agulhas durante a troca automática de cores (Color Change).",
      "Proteção mecânica das facas de corte automático durante o ciclo de corte (Trimming).",
      "Segurança operacional em paradas de emergência (E-Stop)."
    ],
    characteristics: [
      "Tempo de resposta ultrarrápido inferior a 50 milissegundos.",
      "Torque de retenção estática superior a 15 Nm.",
      "Parada com repetibilidade angular de ±1 grau na marcação de 100°."
    ],
    commonErrors: [
      "❌ Deixar a máquina com poeira têxtil acumulada na ventoinha do motor, superaquecendo a bobina do freio elétrico.",
      "❌ Tentar forçar o volante manual com a mão enquanto o freio eletromagnético está travado com a máquina ligada.",
      "❌ Operar com lonas do disco de freio gastas, fazendo a máquina 'escorregar' da posição de 100° ao parar."
    ],
    troubleshootingTips: [
      "A máquina para com a agulha enfiada dentro do tecido após a quebra de linha: o freio eletromagnético está descalibrado ou a correia de sincronismo do motor principal está folgada; verifique a tensão da correia e ajuste o ângulo de parada no painel.",
      "A máquina emite ruído agudo de atrito ao costurar: o disco do freio não está desarmando completamente por baixa voltagem na fonte de alimentação de 24V DC.",
      "O volante fica duro de girar mesmo com a máquina desligada da tomada: verifique se não há fiapos de linha enrolados no eixo traseiro do motor principal."
    ],
    dicaArtrelados: "Nunca tente girar o volante manual da sua máquina 'na marra' se ela estiver ligada e com o freio acionado! Se precisar girar o volante com a mão para conferir a agulha, dê um toque na tecla de liberação de eixo no painel ou desligue o interruptor principal da máquina.",
    voceSabia: "Os freios eletromagnéticos industriais modernos utilizam o princípio de falha segura (Fail-Safe): se faltar energia elétrica de repente no ateliê, o freio trava a máquina instantaneamente por ação de molas mecânicas, impedindo qualquer dano à peça!",
    practicalExercise: "Coloque a máquina para bordar um retalho e aperte o botão de parada (Stop). Observe como o cabeçote desacelera e para instantaneamente com o volante alinhado no ponto de parada (100°). Comprove como a agulha fica sempre totalmente recolhida fora do bastidor.",
    quickSummary: "Mecanismo de frenagem eletromagnética que estagna o eixo principal na posição de 100° em milissegundos ao comando de parada.",
    relatedTerms: ["Z-Axis", "Main Motor", "Stop Position (100°)", "Servomotor", "Sensor de Linha", "Segurança da Máquina"],
    tags: ["zaxismotorbrake", "freioeletrico", "seguranca", "hardware", "mecanica", "manutencao", "eixoz"]
  },
  {
    id: "zip-cord-reinforcement-cordonete-vivo-reforco",
    code: "Z-012",
    letter: "Z",
    term: "Zip-Cord Reinforcement — Reforço Estrutural com Cordonê Embutido e Efeito de Cordão Tridimensional",
    pronunciation: "zíp-kórd ri-in-fórs-ment — re-fór-su es-tru-tu-ral com cor-do-nê em-bu-ti-du",
    level: "Avançado 🔴",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'cord' (cordão de alma têxtil) associado aos pontos de cobertura tubular e técnicas de alta-costura para bordas reforçadas.",
    summary: "Técnica que embute um cordão cilíndrico de algodão sob colunas de ponto satim, criando bordas com alto relevo arredondado e extrema resistência mecânica.",
    definition: "O Zip-Cord Reinforcement (Reforço com Cordão Tubular / Bordado sobre Cordonê / Cording Satin Technique / Elevated Cord Edge) é a técnica especializada de bordado mecânico ou computadorizado na qual um cordão flexível de algodão, poliéster ou polipropileno (Zip-Cord ou Alma de Vivo) é guiado e assentado sobre o tecido, sendo imediatamente encapsulado por pontos satim densos e contínuos.",
    technicalDetails: "Diferente do bordado 3D com espuma EVA (que é plano e cortado no laser), o Zip-Cord cria um relevo tubular perfeitamente arredondado e com toque macio. A matriz deve ser programada com uma largura de satim que exceda o diâmetro do cordão em **0,8 mm a 1,2 mm** e com compensação de encolhimento de 0,4 mm para que a linha abrace completamente o cordão sem deixar o enchimento visível. Em máquinas industriais, utiliza-se um calcador especial bipartido com canaleta inferior guia (Cording Foot) ou acessório de alimentação contínua de cordão.",
    beginnerExplanation: "É uma técnica linda onde a máquina borda o ponto cheio por cima de um cordãozinho roliço de algodão! O bordado fica parecendo um cordão de ouro ou uma moldura gordinha e super resistente, perfeita para bordas de almofadas, brasões de luxo e toalhas de mesa sofisticadas!",
    howItWorks: [
      "1. A bordadeira insere o cordão de algodão de 2 mm de diâmetro no calcador especial de cordão da máquina.",
      "2. O software CAD é programado com colunas satim de 3,2 mm de largura acompanhando o desenho.",
      "3. A máquina inicia a costura e o calcador guia o cordão exatamente no centro do trajeto.",
      "4. A agulha bate alternadamente à esquerda e à direita do cordão, abraçando o fio roliço com a linha de bordar.",
      "5. A tensão da linha é ajustada ligeiramente mais firme para moldar a cobertura sobre o cordão.",
      "6. Ao terminar o percurso, a bordadeira corta a ponta do cordão rente ao arremate final.",
      "7. A peça adquire um contorno tubular em alto relevo espetacular e durabilidade eterna."
    ],
    applications: [
      "Acabamento de bordas de almofadas de luxo, colchas de cama e toalhas de banho finas.",
      "Contornos de brasões universitários, jaquetas esportivas e emblemas em relevo.",
      "Bordados litúrgicos, paramentos eclesiásticos e estandartes tradicionais.",
      "Criação de alças e detalhes estruturados em bolsas e nécessaires de tecido."
    ],
    characteristics: [
      "Relevo cilíndrico tubular com toque macio e flexível.",
      "Resistência incomparável ao desgaste por atrito e lavagens pesadas.",
      "Acabamento estético de alta costura com valor agregado superior."
    ],
    commonErrors: [
      "❌ Programar o ponto satim mais estreito do que a espessura do cordão, fazendo a agulha bater em cima do cordão e desviar.",
      "❌ Usar cordão sintético duro que derrete com o calor do ferro de passar roupa.",
      "❌ Não prender o início do cordão com pontos de ancoragem firmes, fazendo o recheio escapar durante o uso."
    ],
    troubleshootingTips: [
      "O cordão branco está aparecendo por baixo da linha colorida: aumente a densidade do satim (reduza o espaçamento de 0,40 mm para 0,35 mm) e utilize cordão da mesma tonalidade da linha de bordar.",
      "A agulha está quebrando ao passar pelo cordão: utilize agulha mais grossa (calibre 90/14 ou Jeans) e certifique-se de que o cordão passe livre pelo canalete do calcador.",
      "O contorno ficou torto e o cordão escapou para fora: utilize o calcador guia de cordão (Cording Foot) com ranhura central apropriada."
    ],
    dicaArtrelados: "Para fazer cordões em relevo perfeitos sem precisar de aparelhos caros: use cordão de algodão cru 100% natural bem macio e programe sua coluna satim com 3,5 mm de largura. O resultado fica tão perfeito e chique que parece feito pelas maiores grifes da Europa!",
    voceSabia: "O bordado sobre cordão (Cording / Soutache) é uma das técnicas mais nobres da indumentária militar desde o século XVIII, utilizado nos uniformes dos regimentos de hussardos e generais imperiais em toda a Europa e no Brasil Imperial!",
    practicalExercise: "Pegue um pedaço de 20 cm de cordão de algodão fino de 2 mm. Posicione sobre um retalho de sarja no bastidor e borde manualmente uma coluna de ponto satim larga de 3,5 mm por cima: sinta com os dedos o relevo firme e redondo proporcionado pelo cordão.",
    quickSummary: "Técnica de encapsulamento de cordão roliço sob pontos satim para criar contornos tubulares em alto relevo e reforço mecânico.",
    relatedTerms: ["Ponto Satim", "Relevo 3D", "Cording Foot", "Calcador de Cordão", "Bordado de Luxo", "Alta Costura"],
    tags: ["zipcord", "cordone", "reforco", "tecnicasespeciais", "relevo", "altacostura", "acabamento"]
  },
  {
    id: "zone-digitizing-subdivisao-zonas-grandes-matrizes",
    code: "Z-013",
    letter: "Z",
    term: "Zone Digitizing & Segmented Sequence — Subdivisão por Zonas e Sequenciamento Inteligente de Preenchimentos Gigantes",
    pronunciation: "zôun dí-ji-tai-zing — sub-di-vi-são por zo-nas em ma-tri-zes gran-des",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'zone partitioning' (particionamento espacial em zonas de tensão mecânica) aplicado à engenharia de matrizes de grande porte para controle de deformação têxtil.",
    summary: "Estratégia de programação CAD que divide áreas gigantes de bordado em zonas menores costuradas de dentro para fora, eliminando o repuxo e enrugamento do tecido.",
    definition: "O Zone Digitizing (Digitalização por Zonas / Particionamento em Zonas / Segmented Area Sequence / Radial Push-Pull Balancing) é a metodologia avançada de programação e vetorização de bordados utilizada para desenhos de grande formato (costas de jaquetas, almofadas, bandeiras e colchas) que excedem 20 cm de largura. Em vez de preencher uma área contínua de 50.000 pontos em um único bloco direcional, o programador subdivide o desenho em zonas independentes costuradas com direções angulares balanceadas e sequência do centro para as bordas.",
    technicalDetails: "Preenchimentos extensos unidirecionais acumulam tensões cumulativas de repuxo (Accumulated Push-Pull Strain) que empurram o tecido para uma extremidade do bastidor, gerando enrugamento grave (Puckering) e desvios de contorno de até 4,0 mm no lado oposto. O Zone Digitizing divide a malha vetorial em quadrantes ou faixas com sobreposição de bordas de 0,8 mm (Overlap Margins) e ângulos de ponto alternados (ex.: Zona A a 45°, Zona B a 135°), dissipando as forças mecânicas uniformemente pela entretela.",
    beginnerExplanation: "É a técnica esperta do computador para bordar desenhos gigantes de costas de jaqueta sem enrugar o pano! Em vez de bordar tudo de uma vez de um lado até o outro (o que puxaria o tecido todo para um canto), o desenhista divide o bordado em pedacinhos como uma pizza e manda a máquina bordar do meio para fora, mantendo a roupa lisinha e perfeita!",
    howItWorks: [
      "1. O programador importa a arte de grande porte (ex.: costas de jaqueta de 28 cm x 25 cm).",
      "2. Identifica as grandes áreas de preenchimento tatami de fundo.",
      "3. Divide a superfície em zonas ou quadrantes vetoriais usando a ferramenta 'Fatiar / Split Object'.",
      "4. Aplica sobreposição de 1,0 mm entre as zonas vizinhas para evitar aberturas após o repuxo.",
      "5. Alterna os ângulos de costura de cada zona em 90 graus em relação à zona adjacente.",
      "6. Ordena a sequência de bordado começando rigorosamente pelo centro geométrico em direção às extremidades.",
      "7. A máquina borda os 70.000 pontos sem repuxar o tecido, mantendo o enquadramento impecável."
    ],
    applications: [
      "Bordados de grande escala para costas de jaquetas jeans, jaquetas de motociclistas e moletons.",
      "Painéis decorativos, quadros bordados e estandartes com mais de 30 cm de comprimento.",
      "Logotipos corporativos gigantes com preenchimento total de fundo tatami.",
      "Matrizes divididas para montagem em bastidores múltiplos contínuos (Endless Hoops)."
    ],
    characteristics: [
      "Eliminação de distorções geométricas e ondas de tecido acumulado.",
      "Dissipação radial equilibrada das forças de tração do fio.",
      "Sobreposição milimétrica perfeita entre blocos adjacentes."
    ],
    commonErrors: [
      "❌ Borda uma área de 25 cm inteira no mesmo ângulo de 0° da esquerda para a direita, empurrando o tecido e fazendo um bolsão enrugado no final.",
      "❌ Cortar as zonas sem programar sobreposição (Overlap), deixando fendas e linhas brancas de tecido aparecendo entre os blocos.",
      "❌ Iniciar o bordado gigante pelos cantos em vez de começar pelo centro."
    ],
    troubleshootingTips: [
      "Ficou uma linha de tecido vazio no encontro entre duas áreas grandes bordadas: adicione uma sobreposição (Overlap) de pelo menos 1,0 mm a 1,5 mm entre os dois blocos no software CAD.",
      "O contorno preto final do desenho gigante ficou completamente fora do lugar no canto direito: o preenchimento acumulou repuxo; reprograme o desenho dividindo em zonas do centro para fora e use duas camadas de entretela de alta gramatura.",
      "O tecido fez um papo ou bolha no meio das costas da jaqueta: aumente a compensação de repuxo (Pull Compensation) para 0,45 mm e use a estratégia de costura radial."
    ],
    dicaArtrelados: "Para bordados gigantes de costas de jaqueta: nunca mande a máquina bordar de cima para baixo ou de ponta a ponta em linha reta! Programe sempre a costura nascendo no coração do desenho e se espalhando para os quatro cantos como os raios do sol. Seu tecido vai ficar esticadinho como uma pintura!",
    voceSabia: "A técnica de subdivisão radial em zonas foi herdada dos mestres tapeceiros renascentistas dos séculos XV e XVI em Flandres e na França, que dividiam os monumentais painéis murais em zonas de tecelagem independentes para manter a geometria dos castelos inalterada!",
    practicalExercise: "No seu software de bordado, pegue um retângulo grande de 20 x 15 cm. Use a ferramenta de cortar objeto e divida-o em 4 quadrantes. Coloque ângulos de 45°, 135°, 45° e 135° em cada um e ordene a costura em cruz a partir do centro: observe a simetria perfeita de distribuição de pontos.",
    quickSummary: "Metodologia de digitalização que particiona áreas gigantes em zonas equilibradas costuradas do centro para fora, prevenindo deformações do tecido.",
    relatedTerms: ["Compensação de Repuxo", "Push-Pull Effect", "Ponto Tatami", "Sequenciamento", "Overlap (Sobreposição)", "Matrizes Grandes"],
    tags: ["zonedigitizing", "zonas", "matrizesgrandes", "programacao", "wilcom", "repuxo", "qualidade"]
  },
  {
    id: "zenith-contrast-theory-teoria-zenite-brilho-bordado",
    code: "Z-014",
    letter: "Z",
    term: "Zenith Lighting & Thread Sheen Contrast — Teoria da Iluminação Zenital e Reflexão Óptica da Linha de Bordar",
    pronunciation: "zê-nith lái-ting end thrêd xiin cón-trast — i-lu-mi-na-são ze-ni-tal e re-fle-sho op-ti-ca do bri-lhu",
    level: "Avançado 🔴",
    category: "Design & Estética",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do árabe 'samt ar-ra's' que originou 'zenith' (o ponto astronômico mais alto da abóbada celeste diretamente acima do observador) combinado com a física de reflexão especular de polímeros trilobais.",
    summary: "Princípio de design e vetorização onde os ângulos dos pontos são orientados em relação à luz ambiente superior para maximizar o brilho e contraste visual do bordado.",
    definition: "O Zenith Lighting & Thread Sheen Contrast (Teoria da Iluminação Zenital e Reflexão Especular de Fios / Light Angle Optimization / Optical Thread Sheen Engineering) é o conceito avançado de design e digitalização que explora a geometria transversal das fibras de poliéster trilobal e viscose para manipular a forma como a luz do ambiente (especialmente a luz zenital vinda do teto ou do sol) incide e reflete na superfície dos pontos de bordado.",
    technicalDetails: "As linhas modernas de poliéster possuem filamentos com secção transversal triangular (Trilobal Profile) que funcionam como microprismas ópticos. Quando os pontos são bordados perpendicularmente à fonte de luz incidente (90° em relação aos raios de luz), a reflexão especular é máxima, criando um brilho intenso e radiante. Quando os pontos são bordados paralelamente à direção da luz (0°), a luz penetra entre os filamentos e é absorvida, criando um tom escuro e aveludado. Ao alternar os ângulos dos pontos em objetos da mesma cor, o programador cria efeitos de sombra, luz e relevo 3D fotográfico sem trocar de linha.",
    beginnerExplanation: "É o segredo dos grandes artistas do bordado que faz um desenho feito com uma única cor de linha parecer que tem brilhos, sombras e relevo de verdade! Como o fio de poliéster brilha como um cristalzinho, se você mudar a direção da costura de um pedaço para o outro, a luz do teto bate e reflete diferente em cada parte, criando um efeito visual mágico e sofisticado!",
    howItWorks: [
      "1. O designer define a posição da fonte de luz principal imaginária no topo da arte (Luz Zenital a 90°).",
      "2. Para áreas que devem parecer iluminadas e brilhantes, programa o ângulo dos pontos na horizontal (perpendicular à luz).",
      "3. Para áreas de sombra e profundidade, programa o ângulo dos pontos na vertical (paralelo à luz).",
      "4. Para superfícies curvas (como uma esfera, maçã ou rosto), cria linhas de ângulo em degradê curvo suave.",
      "5. A máquina borda toda a peça utilizando apenas um único cone de linha de poliéster.",
      "6. Sob a iluminação da sala ou da vitrine, a peça exibe contrastes impressionantes de claro-escuro dinâmico.",
      "7. O cliente percebe uma sofisticação artística incomparável que valoriza o preço final da peça."
    ],
    applications: [
      "Bordados monocromáticos de luxo (Tone-on-Tone) em jaquetas, bolsas e camisas executivas.",
      "Retratos bordados, rostos hiper-realistas e arte botânica de alta complexidade.",
      "Logotipos corporativos metalizados com efeito de iluminação cromada e reflexos.",
      "Bordados em fios brancos sobre fundo preto ou fios pretos sobre couro escuro."
    ],
    characteristics: [
      "Criação de contrastes dinâmicos de luz e sombra sem necessidade de trocar de linha.",
      "Exploração física das microfacetas prismáticas do poliéster trilobal.",
      "Efeito visual que muda sutilmente conforme o observador se movimenta."
    ],
    commonErrors: [
      "❌ Borda todos os elementos de uma arte no mesmo ângulo único de 45°, deixando o desenho totalmente 'chato', sem brilho e sem profundidade.",
      "❌ Ignorar a orientação do vestuário, fazendo o brilho sumir quando a peça é vestida em pé sob a luz ambiente.",
      "❌ Usar linha fosca de algodão cru esperando obter o efeito de reflexão prismática do poliéster trilobal."
    ],
    troubleshootingTips: [
      "O logotipo bordado monocromático ficou parecendo um borrão apagado e sem contraste: alterne a direção dos ângulos dos pontos entre os elementos vizinhos em pelo menos 45 a 90 graus no software.",
      "O efeito de reflexo sumiu na peça pronta: verifique se você usou linha de poliéster trilobal brilhante ou viscose, pois linhas foscas ou de algodão opaco não geram reflexão especular.",
      "A transição de sombra ficou muito brusca: utilize linhas de direção de ponto curvas (Curved Stitch Angles) para suavizar a passagem da luz para a sombra."
    ],
    dicaArtrelados: "Quer impressionar um cliente com um bordado monocromático chique? Borde o brasão dele em uma camisa preta usando linha preta brilhante de poliéster, mas mudando os ângulos dos pontos em cada letra e detalhe! De longe parece discreto, mas quando a luz bate, o bordado brilha e salta aos olhos com pura elegância!",
    voceSabia: "A técnica de orientar os fios de seda em direções cruzadas para criar imagens através do reflexo da luz do sol foi inventada no século X na cidade de Suzhou, na China, sendo conhecida como a técnica imperial de bordado de luzes e sombras!",
    practicalExercise: "Crie dois quadrados idênticos de 3x3 cm lado a lado no seu software. No primeiro, coloque ângulo de 0° (horizontal); no segundo, coloque ângulo de 90° (vertical). Borde os dois com o mesmo cone de linha preta sobre um tecido escuro e olhe sob uma luminária de mesa: veja como um parece prata brilhante e o outro parece preto profundo!",
    quickSummary: "Princípio óptico que manipula os ângulos dos pontos para criar efeitos de luz, sombra e volume tridimensional com a reflexão da linha.",
    relatedTerms: ["Poliéster Trilobal", "Ângulos de Ponto", "Efeito Tom sobre Tom", "Reflexão Especular", "Photostitch", "Design de Matrizes"],
    tags: ["zenithlighting", "iluminacao", "angulos", "brilho", "design", "fotobordado", "estetica"]
  }
];

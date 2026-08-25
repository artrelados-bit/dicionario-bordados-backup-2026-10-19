import { Verbete } from "../types";

export const VERBETES_LETTER_Y11: Verbete[] = [
  {
    id: "y-axis-stepper-linear-rail-trilhos-eixo-y",
    code: "Y-011",
    letter: "Y",
    term: "Y-Axis Stepper & Linear Rail Guides — Guias Lineares Prismáticas e Servomotores de Alta Inércia do Eixo Y",
    pronunciation: "uái-ék-sis sté-per end lí-niar rêil gáids — gui-as li-ne-a-res e ser-vo-mo-tor do êi-shu í-psi-lon",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim cartesiano 'axis' (eixo) associado às guias lineares de aço cromo temperado retificadas desenvolvidas pela engenharia mecânica de máquinas CNC de alta rotação.",
    summary: "Sistema mecatrônico longitudinal que sustenta e desloca o peso do pantógrafo com precisão centesimal e amortecimento de inércia a 1.200 PPM.",
    definition: "O Y-Axis Stepper & Linear Rail Guides (Sistema Mecatrônico do Eixo Y / Guias Lineares Prismáticas de Rolos e Servomotores Longitudinais / Heavy-Duty Pantograph Y-Axis Motion Control) é o conjunto estrutural de acionamento mecânico responsável pela translação anteroposterior do bastidor e do braço transversal do pantógrafo. Devido à sua massa mecânica elevada em relação ao eixo X, o conjunto do eixo Y é suportado por pares de trilhos prismáticos retificados com patins de esferas ou rolos recirculantes de aço temperado e tracionado por fusos de alta precisão ou correias dentadas sincronizadoras com alma de aço de 25 mm a 32 mm de largura.",
    technicalDetails: "A dinâmica do eixo Y requer algoritmos avançados de controle no firmware da máquina para compensar o momento de inércia ($J = m \\cdot r^2$) gerado por bastidores grandes ou pesados montados com peças volumosas (como jaquetas de couro ou toalhões de banho). O driver do servomotor ajusta a curva de aceleração com jerk controlado (S-Curve Profile), aplicando torque de frenagem regenerativo para evitar overshoots (ultrapassagens de coordenada) e vibrações parasitas que causariam desalinhamento de contornos em velocidades de até 1.200 PPM.",
    beginnerExplanation: "É o sistema super forte de trilhos de aço e motores que puxa e empurra o braço da máquina para frente e para trás! Como o braço da máquina é grande e pesado, esse sistema precisa ser super reforçado e suave para não tremer e garantir que cada ponto caia no milímetro exato, mesmo com a máquina trabalhando na velocidade máxima!",
    howItWorks: [
      "1. A controladora da máquina calcula a distância vetorial delta Y necessária para o próximo ponto da matriz.",
      "2. O servo driver do eixo Y injeta pulsos de corrente modulada no servomotor longitudinal.",
      "3. O servomotor gira a polia ou fuso de esferas deslocando os patins sobre as guias lineares prismáticas.",
      "4. Os rolos recirculantes absorvem as forças verticais e laterais sem permitir nenhuma folga estrutural.",
      "5. O bastidor translada no sentido longitudinal enquanto a agulha atinge o ponto morto superior.",
      "6. O freio dinâmico estagna o movimento exatamente no milésimo de segundo em que a agulha desce.",
      "7. A laçada é formada com estabilidade geométrica perfeita e sem nenhuma vibração residual."
    ],
    applications: [
      "Translação pesada do pantógrafo em máquinas multicabeçotes de 6 a 24 cabeças industriais.",
      "Bordados contínuos em bastidores gigantes de colchas de cama e cortinas de grande porte.",
      "Sustentação de acessórios rotativos pesados (como bastidores de bonés de 270° e bastidores cilíndricos de bolsas).",
      "Amortecimento de vibrações estruturais para permitir alta velocidade contínua de costura."
    ],
    characteristics: [
      "Guias de aço cromo-molibdênio retificado com dureza superficial superior a 60 HRC.",
      "Patins com vedação dupla contra penetração de poeira têxtil e fiapos de linha.",
      "Capacidade de carga estática e dinâmica de mais de 500 kgf por patim linear."
    ],
    commonErrors: [
      "❌ Deixar peças pesadas de tecido caírem para fora da mesa de bordado, puxando o bastidor e sobrecarregando os motores do eixo Y.",
      "❌ Operar com correias do eixo Y frouxas ou ressecadas, criando perda de passos nos saltos verticais longos.",
      "❌ Não lubrificar os bicos de graxa dos patins do eixo Y durante a manutenção preventiva semestral."
    ],
    troubleshootingTips: [
      "O bordado está saindo com contornos deslocados apenas na parte superior ou inferior: a correia dentada do eixo Y está frouxa ou com dentes desgastados; ajuste o esticador da correia ou substitua a peça.",
      "O bastidor dá um tranco audível ao se mover no sentido vertical: limpe as guias lineares com desengraxante suave e aplique graxa de lítio de alta pureza nos bicos graxeiros dos patins com pistola de lubrificação.",
      "A máquina exibe erro 'Y-Axis Driver Overcurrent': verifique se não há nenhum cabo elétrico ou pedaço de tecido preso sob o carro do pantógrafo travando o curso mecânico."
    ],
    dicaArtrelados: "Nunca coloque peso sobre o braço transversal do pantógrafo (como apoiar caixas, réguas pesadas ou debruçar o corpo sobre a máquina)! O alinhamento das guias do eixo Y é calibrado com precisão cirúrgica de fábrica e qualquer empenamento afeta o bordado inteiro!",
    voceSabia: "As guias lineares prismáticas com esferas recirculantes foram desenvolvidas no Japão pela THK em 1972 e revolucionaram o mundo das máquinas industriais, substituindo os antigos barramentos de ferro fundido com atrito seco!",
    practicalExercise: "Com a máquina desligada da tomada, empurre suavemente o pantógrafo para frente e para trás no eixo Y com a mão espalmada: sinta a maciez e a fluidez do rolamento das guias lineares, conferindo se o movimento é suave em todo o curso sem pontos duros.",
    quickSummary: "Conjunto mecatrônico de guias prismáticas e servomotores que movimenta o pantógrafo no sentido vertical com máxima rigidez e sem folgas.",
    relatedTerms: ["X-Axis", "Guias Lineares", "Servomotor", "Pantógrafo Industrial", "Inércia Mecânica", "Correia Sincronizadora"],
    tags: ["yaxislrail", "guiaslineares", "eixoy", "mecanica", "hardware", "manutencao", "pantografo"]
  },
  {
    id: "yarn-twist-dynamics-torcao-de-fios-s-z",
    code: "Y-012",
    letter: "Y",
    term: "Yarn Twist Dynamics (Z-Twist vs. S-Twist) — Dinâmica de Torção Helicoidal em Fios de Bordado e Sentido de Giro da Lançadeira",
    pronunciation: "iárn tuíst dai-ná-miks — di-nâ-mi-ca de tor-são he-li-coi-dal de fios z e s",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da física têxtil de torção de filamentos contínuos (Twist Direction standard ISO 2) e da mecânica rotativa de lançadeiras industriais.",
    summary: "Orientação angular da torção dos filamentos da linha (torção em Z ou S) e por que 100% das máquinas de bordar exigem linhas com torção em Z para não desenrolar.",
    definition: "O Yarn Twist Dynamics (Dinâmica de Torção Helicoidal de Fios / Sentido de Torção Z-Twist vs S-Twist / TPI - Turns Per Inch & Rotary Hook Loop Formation) é o parâmetro físico-químico de fiação que define a direção geométrica da espiral formada pelos filamentos que compõem a linha de bordar. No sistema internacional, a **Torção em Z** (Right-Hand Twist) possui filamentos inclinados na mesma direção da barra central da letra 'Z', enquanto a **Torção em S** (Left-Hand Twist) possui espirais inclinadas na direção da letra 'S'.",
    technicalDetails: "As lançadeiras rotativas de todas as máquinas de bordar industriais e domésticas do mundo giram no sentido horário (Clockwise). Quando a agulha desce e sobe 2,0 mm a 2,5 mm, ela forma a laçada (Loop) no lado do chanfro (Scarf). O atrito da rotação horária da lançadeira aplica um micro-torque que aperta e fecha as espirais de uma linha com **Torção Z**, mantendo o triângulo de laçada aberto e firme. Se fosse usada uma linha com **Torção S**, o giro da lançadeira desenrolaria os cabos da linha, abrindo os filamentos como uma vassoura e causando falhas de ponto e quebras instantâneas a 1.000 PPM.",
    beginnerExplanation: "É a direção em que os fiozinhos da linha são torcidos na fábrica! As linhas de bordado de verdade são sempre torcidas no formato da letra 'Z'. Esse sentido é feito de propósito para combinar com o giro da lançadeira lá dentro da máquina: quando a máquina gira rápido, ela mantém a linha bem apertadinha e firme. Se a torção fosse ao contrário, a linha se abriria toda e arrebentaria na hora!",
    howItWorks: [
      "1. A fábrica têxtil reúne os filamentos de poliéster trilobal e aplica torção horária (Z-Twist) de 600 a 800 voltas por metro (TPM).",
      "2. O fio adquire corpo cilíndrico perfeito, alta resistência à tração e elasticidade calibrada.",
      "3. Na máquina de bordar, o fio passa pela agulha e entra no compartimento da lançadeira rotativa.",
      "4. A agulha sobe 2,2 mm gerando o laço de linha superior no momento de sincronismo de 200°.",
      "5. A ponta da lançadeira passa rente ao chanfro da agulha no sentido horário.",
      "6. A rotação horária reforça a torção Z do fio, mantendo o laço estável e fácil de laçar.",
      "7. A linha de bobina é enlaçada com perfeição e a agulha completa o ponto sem desfiamento."
    ],
    applications: [
      "Garantia de estabilidade na formação de laçadas em máquinas operando a mais de 1.000 PPM.",
      "Fabricação de linhas especiais (poliéster, raiom, metálicas e fios fotoluminescentes).",
      "Eliminação de problemas crônicos de desfiamento de fios na passagem pelos pratos tensores.",
      "Controle de qualidade de lotes de linhas em indústrias de fiação e ateliês de alta produção."
    ],
    characteristics: [
      "Padrão universal mandatório para bordado eletrônico: Torção Z (Z-Twist).",
      "Índice de torção calibrado (Turns Per Inch / TPI) entre 15 e 22 voltas por polegada.",
      "Tratamento de termo-fixação a vapor que impede a formação de nós helicoidais (Snarls/Kinks)."
    ],
    commonErrors: [
      "❌ Tentar usar linhas artesanais de crochê ou fios de costura manual torcidos em 'S' na máquina de bordar.",
      "❌ Usar linhas que não passaram por termofixação, criando pequenos 'nózinhos' que travam nos passadores.",
      "❌ Aumentar excessivamente a tensão do fio, esticando a torção e diminuindo a elasticidade natural da linha."
    ],
    troubleshootingTips: [
      "A linha abre os filamentos como um pincel e arrebenta no olho da agulha: a linha é de baixa qualidade ou com torção invertida (S-Twist); troque imediatamente por linha de bordado industrial certificada com torção Z.",
      "A linha fica torcendo sobre si mesma formando laços (kinking) antes de entrar nos tensores: passe o fio por todos os passadores do circuito e utilize a rede tubular elástica (Thread Net) sobre o cone.",
      "A máquina pula pontos mesmo com agulha nova e tempo de lançadeira correto: verifique se o fio não está desfazendo a laçada por falta de torção uniforme no lote do cone."
    ],
    dicaArtrelados: "Linha de bordar profissional tem tecnologia de ponta! Use sempre marcas consagradas (como Isacord, Madeira, Lumina, Setta ou Polyneon): elas possuem a torção Z perfeita e lubrificação de silicone que não deixam a linha abrir nem arrebentar!",
    voceSabia: "O conceito de torção em Z e torção em S é milenar: arqueólogos descobriram que no Antigo Egito e nas civilizações pré-colombianas dos Andes, os artesãos já separavam os fios de linho e algodão em torções Z e S conforme a função e o caimento das túnicas reais!",
    practicalExercise: "Segure um pedaço de 15 cm de linha de bordar verticalmente entre os dedos das duas mãos. Gire a mão superior no sentido anti-horário e veja como a linha começa a abrir os filamentos. Gire no sentido horário e sinta como ela se fecha e fica firme: essa é a torção Z em ação!",
    quickSummary: "Orientação geométrica da torção da linha que se harmoniza com o sentido horário da lançadeira, mantendo o laço perfeito sem desfiamento.",
    relatedTerms: ["Torção Z (Z-Twist)", "Lançadeira Rotativa", "Formação da Laçada", "Poliéster Trilobal", "Filamento Contínuo", "Thread Net"],
    tags: ["yarntwist", "torcaoz", "fios", "lancadeira", "morfologia", "qualidade", "textil"]
  },
  {
    id: "yield-point-tensile-elongation-limite-escoamento-linhas",
    code: "Y-013",
    letter: "Y",
    term: "Yield Point & Tensile Elongation — Limite de Escoamento, Elasticidade e Resistência à Ruptura Dinâmica de Linhas",
    pronunciation: "íild point end tên-sail i-long-gêi-shon — li-mi-te de es-co-a-men-tu e re-sis-tên-si-a a rup-tu-ra de li-nhas",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do conceito de ciência dos materiais 'yield point' (limite elástico além do qual ocorre deformação plástica irreversível) e 'tensile elongation' (alongamento sob tração mecânica).",
    summary: "Comportamento elástico da linha sob os trancos da alavanca estica-fio que define por que o poliéster absorve impactos sem arrebentar nem deformar o tecido.",
    definition: "O Yield Point & Tensile Elongation (Limite de Escoamento e Alongamento sob Tração Dinâmica / Elastic Modulus & Tenacity Breakdown / Stress-Strain Curve in Embroidery Threads) é a propriedade mecânica fundamental das linhas de bordar que descreve como o fio se deforma elasticamente e recupera seu comprimento original quando submetido às forças cíclicas de tração exercidas pela alavanca estica-fio e pelos tensores de prato a 1.000 PPM.",
    technicalDetails: "Na curva de Tensão vs. Deformação (Stress-Strain Curve), o fio opera idealmente dentro do regime elástico linear (abaixo do Limite de Escoamento - Yield Point). As linhas de poliéster trilobal de alta tenacidade possuem tenacidade típica de 4,5 a 5,5 cN/dtex e alongamento de ruptura de **18% a 22%**, o que permite absorver os picos instantâneos de tensão causados por mudanças bruscas de direção do pantógrafo. Ao contrário do algodão (que tem baixo alongamento de 4% a 7% e arrebenta fácil) ou do náilon puro (que tem elasticidade excessiva de >30% e encolhe após o bordado causando franzimento), o poliéster oferece o equilíbrio termomecânico perfeito.",
    beginnerExplanation: "É a capacidade mágica que a linha tem de se esticar um pouquinho quando a máquina dá um tranco rápido e depois voltar ao tamanho normal sem arrebentar! Se a linha fosse dura como arame, ela quebraria a toda hora; se fosse elástica demais como borracha, ela enrugaria a roupa depois de bordada. A linha de poliéster tem a elasticidade perfeita!",
    howItWorks: [
      "1. A alavanca estica-fio sobe bruscamente para puxar a laçada da lançadeira e fechar o ponto no tecido.",
      "2. Esse puxão gera um pico de tração instantâneo de até 180 gramas-força na linha superior.",
      "3. Os filamentos de poliéster se alongam temporariamente em 15% absorvendo o impacto mecânico.",
      "4. Como a tensão está abaixo do limite de escoamento, as cadeias moleculares do polímero não sofrem rompimento.",
      "5. A linha fecha o ponto com precisão e recupera seu comprimento em milissegundos.",
      "6. O ponto assenta perfeitamente sobre a entretela sem franzir o tecido e sem arrebentar o fio."
    ],
    applications: [
      "Bordados em altíssima velocidade em máquinas industriais multicabeçotes (900 a 1.200 PPM).",
      "Absorção de impactos em saltos longos (Jumps) e transições rápidas de pontos satim.",
      "Prevenção de enrugamento em tecidos leves e sedas após a retirada da peça do bastidor.",
      "Especificação técnica para compra de lotes de linhas industriais de alta performance."
    ],
    characteristics: [
      "Alongamento elástico controlado de 18% a 22% com memória mecânica instantânea.",
      "Tenacidade mecânica de 5,0 cN/dtex com alta resistência à abrasão.",
      "Estabilidade dimensional térmica imune a encolhimento durante lavagem ou passagem a ferro."
    ],
    commonErrors: [
      "❌ Apertar os tensores da máquina em níveis extremos, ultrapassando o limite elástico da linha e deixando o bordado enrugado como uma sanfona.",
      "❌ Usar linhas de costura elástica ou fios de nylon comuns na máquina de bordar, deformando o tecido após o desbaste.",
      "❌ Usar cones de linha ressecados e quebradiços que perderam a elasticidade molecular por estocagem sob sol direto."
    ],
    troubleshootingTips: [
      "O tecido plano (tricoline ou percal) fica todo enrugado e repuxado ao redor do bordado assim que sai do bastidor: a tensão superior estava muito apertada esticando a linha durante a costura; afrouxe os tensores superiores até atingir cerca de 110 a 125 gramas-força.",
      "A linha arrebenta com estalo seco em pontos de preenchimento rápido: a linha tem tenacidade insuficiente ou a mola estica-fio está travada sem amortecer os picos de impacto; ajuste a mola estica-fio (Check Spring).",
      "A linha fica frouxa fazendo laços em cima do tecido: a tensão está abaixo do limite mínimo necessário para recolher a laçada; aperte o tensor superior em incrementos de meia volta."
    ],
    dicaArtrelados: "Se a sua máquina está arrebentando a linha sem motivo aparente: verifique se a molinha estica-fio (aquela molinha fininha perto dos tensores) está funcionando livre e com movimento suave! Ela é o 'amortecedor' que absorve os trancos e não deixa a linha arrebentar!",
    voceSabia: "Os ensaios de tração e limite de escoamento de fios têxteis são realizados em equipamentos de precisão chamados dinamômetros eletrônicos (como o padrão mundial Instron ou Uster Tensojet), capazes de realizar mais de 30.000 testes de puxão por hora!",
    practicalExercise: "Pegue 20 cm de linha de poliéster de boa marca e puxe com as duas mãos até quebrar: sinta a força e o leve estiramento elástico que ela oferece antes de se romper. Faça o mesmo com uma linha de algodão comum e sinta a diferença de resistência.",
    quickSummary: "Propriedade físico-mecânica que define a elasticidade da linha sob tração dinâmica, essencial para absorver trancos da máquina sem quebras.",
    relatedTerms: ["Tenacidade Têxtil", "Mola Estica-Fio (Check Spring)", "Tensão de Linha", "Poliéster Trilobal", "Elasticidade", "Ruptura de Fio"],
    tags: ["yieldpoint", "elasticidade", "tenacidade", "fios", "resistencia", "fisicatextil", "qualidade"]
  },
  {
    id: "y-junction-branching-ramificacao-continua-software",
    code: "Y-014",
    letter: "Y",
    term: "Y-Junction Branching in Digitizing — Ramificação Automática em Junções Y e Otimização de Trajetórias Contínuas CAD",
    pronunciation: "uái-jânk-shon brân-ching in dí-ji-tai-zing — ra-mi-fi-ca-são em jun-ções í-psi-lon no sof-twa-re",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'branching' (ramificação algorítmica de árvores vetoriais em grafos matemáticos) e 'Y-junction' (bifurcação de caminhos no formato da letra Y).",
    summary: "Recurso inteligente dos softwares CAD que conecta ramificações em formato de Y e galhos de letras em uma costura contínua sem nenhum corte de linha desnecessário.",
    definition: "O Y-Junction Branching in Digitizing (Ramificação Automática em Bifurcações Y / Auto-Branching & Path Optimization Engine / Tree-Graph Stitch Routing) é o algoritmo de otimização de caminhos e rotas de costura integrado aos softwares profissionais de bordado (como Wilcom EmbroideryStudio, Hatch e Wings). Ele analisa conjuntos de objetos vetoriais que se conectam em nós bifurcados (como a junção dos braços de uma letra 'Y', caules florais, arabescos ou letras cursivas) e calcula a sequência matemática ideal de subpontos e costuras de ida e volta, permitindo bordar todos os ramos em um único trajeto contínuo sem gerar comandos de corte (Trims) ou nós de parada intermediários.",
    technicalDetails: "O algoritmo modela o desenho como um grafo direcionado e resolve o clássico problema matemático do 'Caminho Euleriano'. Quando encontra uma junção em Y, o software programa uma costura de percurso (Travel Run) por baixo de um dos braços até o topo, borda o satim superior descendo até a bifurcação e, em seguida, viaja pelo outro braço para bordá-lo em sequência. Os pontos de viagem ficam 100% ocultos sob as colunas satim superiores, reduzindo o tempo total de produção em até 50% e eliminando dezenas de cortes de linha que desgastariam o mecanismo da faca da máquina.",
    beginnerExplanation: "É a ferramenta inteligente do computador que descobre o caminho mais esperto para bordar letras e desenhos cheios de bracinhos sem ficar cortando a linha toda hora! Ele costura um bracinho, volta por baixo escondidinho e já costura o outro bracinho direto em um trajeto contínuo e perfeito!",
    howItWorks: [
      "1. A programadora desenha todos os traços, letras ou galhos florais que se cruzam na tela do software.",
      "2. Seleciona todos os objetos conectados e clica na ferramenta 'Ramificação Automática / Auto-Branching (tecla I)'.",
      "3. O software solicita que se clique no Ponto de Entrada (início) e no Ponto de Saída (término) desejados.",
      "4. O algoritmo processa as junções em Y, calcula os subpontos de suporte e unifica os blocos em um único objeto inteligente.",
      "5. A matriz é exportada limpa, sem cortes de linha e sem fios soltos para limpar na tesoura.",
      "6. Na máquina, o bordado roda suave e contínuo sem nenhuma pausa da faca cortadora.",
      "7. A peça é concluída na metade do tempo com acabamento impecável."
    ],
    applications: [
      "Digitalização de fontes e alfabetos com letras cursivas e monogramas entrelaçados.",
      "Bordados florais, árvores, folhagens e arabescos com múltiplos ramos bifurcados.",
      "Linhas de contorno complexas em brasões de times e logotipos empresariais.",
      "Otimização de matrizes para produção industrial de alta tiragem em confecções."
    ],
    characteristics: [
      "Eliminação de 80% a 100% dos comandos de corte dentro do mesmo bloco de cor.",
      "Ocultação perfeita de trajetos de viagem por baixo das camadas superiores de satim.",
      "Aumento drástico da produtividade e vida útil do cortador automático da máquina."
    ],
    commonErrors: [
      "❌ Deixar galhos separados sem ramificação automática, fazendo a máquina cortar a linha 20 vezes no mesmo desenho.",
      "❌ Programar trajetórias de viagem que vazam para fora da largura do satim por falta de alinhamento dos nós.",
      "❌ Tentar fazer a ramificação manual ponto a ponto quando o software faz isso de forma perfeita em 1 clique."
    ],
    troubleshootingTips: [
      "A máquina está demorando muito e cortando a linha em cada letra da palavra: selecione todo o texto no software e aplique o comando 'Auto-Branching' para unificar a costura em um trajeto único e contínuo.",
      "Um pontinho de viagem apareceu vazando fora do contorno satim: aumente ligeiramente a largura da coluna satim naquele nó ou mova o nó do trajeto de viagem para o centro da coluna.",
      "A ordem de costura ficou confusa após a ramificação: redefina os pontos de Entrada e Saída (Start/End points) do bloco ramificado para direcionar o fluxo de costura na direção natural do desenho."
    ],
    dicaArtrelados: "A ferramenta de Ramificação (Branching) é o maior segredo dos programadores profissionais de matrizes! Usando o Branching nas suas escritas e desenhos, sua máquina borda liso sem parar, não gasta a faquinha de corte e você nunca mais perde tempo limpando fiapos com tesoura de arremate!",
    voceSabia: "O algoritmo de Auto-Branching para bordado computadorizado foi criado na Austrália pelos matemáticos e fundadores da Wilcom na década de 1980, baseando-se nas teorias de grafos do matemático suíço Leonhard Euler de 1736!",
    practicalExercise: "No seu software de bordado, desenhe a letra 'Y' maiúscula usando duas colunas satim separadas. Selecione as duas e clique no botão 'Ramificar / Auto-Branching'. Simule a costura na tela e veja como o software conecta os dois braços em um único fluxo contínuo sem nenhum corte de linha.",
    quickSummary: "Algoritmo de software que conecta bifurcações em Y e galhos de desenhos em uma rota contínua de costura, eliminando cortes desnecessários.",
    relatedTerms: ["Auto-Branching", "Wilcom", "Caminho de Viagem (Travel Run)", "Otimização de Rota", "Trimmer", "Programação CAD"],
    tags: ["yjunctionbranching", "autobranching", "ramificacao", "software", "cad", "otimizacao", "produtividade"]
  }
];

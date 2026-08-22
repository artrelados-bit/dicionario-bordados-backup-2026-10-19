import { Verbete } from "../types";

export const VERBETES_LETTER_X4: Verbete[] = [
  {
    id: "x-pattern-fill-preenchimento-texturizado-x",
    code: "X-016",
    letter: "X",
    term: "X-Pattern Fill — Preenchimento Texturizado em X (Padrão Geométrico Motif Cross & Efeito Telado)",
    pronunciation: "éks-pé-tern fil — pre-en-shi-men-tu tes-tu-ri-za-du em shis",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'pattern fill' (preenchimento por repetição de padrões vetoriais) e 'X' (motivo geométrico cruciforme em losangos ou cruzes).",
    summary: "Tipo de preenchimento decorativo programado em software que preenche grandes áreas com uma trama geométrica de cruzes e relevos texturizados em X.",
    definition: "O X-Pattern Fill (Preenchimento em Padrão X / Motif Fill Cruzado / Textured Cross-Hatch Fill / Programmed Split X-Grid) é uma técnica de estilização de preenchimento em que o software de bordado decompõe uma área fechada em uma sucessão de pequenos motivos repetitivos em formato de 'X', losangos entrelaçados ou grades diagonais abertas. Em vez de criar um bloco de tatami liso e denso, o preenchimento em padrão X gera uma textura leve, respirável e com aspecto de tapeçaria artesanal nobre, com excelente rendimento e baixíssimo consumo de linha.",
    technicalDetails: "O algoritmo de preenchimento calcula a distribuição dos motivos através de vetores de repetição (Dx, Dy) com ângulos de rotação configuráveis (0° a 360°). Como o padrão X possui áreas abertas entre os pontos de penetração (densidade efetiva de 30% a 50% menor do que o tatami tradicional), a tensão de repuxo exercida sobre o tecido é praticamente nula, permitindo bordar grandes áreas (acima de 150 mm x 150 mm) sem franzir tecidos leves e sedosos.",
    beginnerExplanation: "É um preenchimento especial que desenha uma textura linda cheia de cruzinhas e desenhos geométricos no fundo do bordado, em vez de ficar aquele preenchimento liso e chapado de sempre. Fica parecendo um tecido xadrez ou uma renda elegante, gasta muito menos linha e a roupa fica super leve e macia!",
    howItWorks: [
      "1. O digitador seleciona a forma geométrica que deseja preencher no software CAD.",
      "2. Altera o tipo de ponto de Tatami normal para 'Motif Fill' ou 'Programmed Split'.",
      "3. Escolhe a biblioteca de padrões em 'X' (Cross Pattern / Diamond Mesh).",
      "4. Ajusta a escala do motivo (ex.: cruzes de 3 mm x 3 mm) e o ângulo de inclinação.",
      "5. O software gera a malha contínua de costura interligando todos os motivos sem cortes.",
      "6. A máquina costura o preenchimento em alta velocidade com movimento suave do pantógrafo.",
      "7. O resultado é uma textura decorativa de alto impacto visual com toque flexível e macio."
    ],
    applications: [
      "Fundo de brasões de família, almofadas decorativas e colchas de cama.",
      "Grandes preenchimentos em vestidos de noiva e vestidos de festa sobre tecidos finos.",
      "Bordados em jaquetas jeans e casacos esportivos com efeito de tecido técnico respirável.",
      "Detalhes de asas de borboletas, escamas de dragões e arquitetura em peças artísticas."
    ],
    characteristics: [
      "Redução de até 50% na contagem total de pontos em comparação com o tatami sólido.",
      "Toque maleável sem o efeito de 'placa rígida' no tecido.",
      "Efeito óptico tridimensional com jogos de luz e sombra sob iluminação direta."
    ],
    commonErrors: [
      "❌ Usar padrão X muito miúdo (menos de 1 mm) em tecidos felpudos, fazendo a textura sumir na felpa.",
      "❌ Esquecer de aplicar um contorno de acabamento nas bordas, deixando pontas de fios abertas.",
      "❌ Bordar sobre entretela solúvel muito fina sem estabilização adequada nas quinas."
    ],
    troubleshootingTips: [
      "A textura de cruzes ficou invisível no tecido felpudo: aumente o tamanho do motivo para 4 mm ou use filme plástico solúvel em água por cima do tecido antes de bordar.",
      "O padrão X ficou torto em relação ao contorno: ajuste o ângulo de rotação do motivo (Pattern Angle) no software para alinhar perfeitamente com a horizontal do desenho.",
      "As cruzes estão com pontos frouxos: verifique a tensão da linha superior na máquina e calibre para 120 gf."
    ],
    dicaArtrelados: "Quando tiver que bordar um desenho gigante nas costas de uma jaqueta ou vestido, nunca use tatami 100% fechado! Use um belo preenchimento texturizado em padrão X. A peça fica leve, o cliente ama a textura sofisticada e sua máquina borda na metade do tempo!",
    voceSabia: "Os padrões geométricos em cruz foram amplamente utilizados nas tapeçarias flamengas e francesas dos séculos XV e XVI para criar a ilusão de tecidos brocados de ouro sem sobrecarregar a estrutura física das tapeçarias!",
    practicalExercise: "No seu software de edição de matrizes, crie um círculo grande de 80 mm. Alterne o preenchimento para 'Motif Fill' e selecione um padrão de cruz geométrica. Compare a contagem de pontos com um tatami tradicional e veja a economia de mais de 4.000 pontos.",
    quickSummary: "Preenchimento geométrico decorativo formado pela repetição de motivos em X que confere leveza, textura nobre e economia de pontos à matriz.",
    relatedTerms: ["Motif Fill", "Tatami", "Textura", "Tapeçaria", "Programmed Split", "Densidade Aberta", "Wilcom"],
    tags: ["xpattern", "motiffill", "textura", "pontosdecorativos", "programacao", "economia", "software"]
  },
  {
    id: "x-mirror-horizontal-flip-espelhamento-x",
    code: "X-017",
    letter: "X",
    term: "X-Mirror & Horizontal Flip — Espelhamento Horizontal no Eixo X & Inversão de Matrizes",
    pronunciation: "éks-mí-ror end ho-ri-zôn-tal flip — es-pe-lha-men-tu ho-ri-zon-tal no êi-shu shis",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'mirror' (espelho/reflexão simétrica planar) e 'horizontal flip' (inversão lateral sobre o eixo de coordenadas cartesianas X).",
    summary: "Comando presente em softwares e no painel da máquina que inverte horizontalmente a matriz, criando o par simétrico perfeito para golas, bolsos e calçados.",
    definition: "O X-Mirror & Horizontal Flip (Espelhamento no Eixo X / Inversão Horizontal / Horizontal Mirroring / Left-Right Symmetry Transformation) é a operação geométrica de transformação que multiplica todas as coordenadas X da matriz por -1 em relação ao eixo vertical Y central. Essa função é indispensável na produção de pares simétricos de bordados (como ramos de louro em colarinhos, bordados de sapatos esquerdos e direitos, ombreiras militares e logos em mangas opostas), garantindo que os elementos apontem em direções espelhadas harmoniosas.",
    technicalDetails: "Ao inverter horizontalmente uma matriz no software nativo (.EMB, .PES), o compilador recalcula os ângulos dos pontos satim e a direção de costura do preenchimento tatami para que o brilho da linha e a compensação de repuxo mantenham o mesmo padrão físico do lado original. No entanto, se o espelhamento for executado em arquivo binário fechado (.DST) diretamente no painel da máquina, o operador deve atentar para a ordem das trocas de linha e a compensação de folga mecânica no sentido de rotação.",
    beginnerExplanation: "É o botão que faz o seu bordado 'olhar para o outro lado'! Se você tem o desenho de um passarinho olhando para a esquerda e quer bordar outro na outra ponta da toalha olhando para a direita (um de frente para o outro), basta apertar o botão de espelhar horizontalmente!",
    howItWorks: [
      "1. O operador carrega a matriz no software ou no painel da máquina de bordar.",
      "2. Clica no botão de espelhamento horizontal (ícone de duas montanhas espelhadas ou seta dupla horizontal).",
      "3. O software inverte o desenho da esquerda para a direita instantaneamente.",
      "4. Confere-se se o desenho contém textos com letras (que ficariam escritas ao contrário após o espelhamento).",
      "5. Posiciona-se o tecido do lado oposto no bastidor (ex.: manga direita da camisa).",
      "6. A máquina executa o bordado espelhado com simetria milimétrica.",
      "7. As duas peças prontas formam um conjunto perfeitamente simétrico e profissional."
    ],
    applications: [
      "Bordados em pares de golas de camisas, lapelas de ternos e punhos.",
      "Bordados de calçados (tênis, sapatilhas e botas) para pé esquerdo e pé direito.",
      "Aplicação simétrica de arabescos e ramos florais nas duas pontas de toalhas de mesa.",
      "Bordados em bolsos laterais de calças jeans e mangas de jaquetas."
    ],
    characteristics: [
      "Inversão instantânea sem necessidade de redigitalizar o desenho.",
      "Preservação rigorosa das dimensões e da contagem de pontos original.",
      "Garantia de simetria anatômica em pares de vestuário."
    ],
    commonErrors: [
      "❌ Espelhar uma matriz que contém nomes ou frases escritas, deixando as letras ilegíveis de trás para frente.",
      "❌ Espelhar apenas uma cor da matriz e deixar as outras na posição original.",
      "❌ Bordar os dois lados de uma camisa apontando para a mesma direção por esquecer de espelhar a segunda peça."
    ],
    troubleshootingTips: [
      "O texto do logotipo ficou invertido como em um espelho: você acionou o X-Mirror na matriz inteira; abra no software, desagrupe o texto do emblema e espelhe apenas o desenho decorativo, mantendo o texto legível.",
      "O brilho da linha ficou diferente entre o lado esquerdo e o direito do colarinho: ao espelhar, o ângulo da linha mudou em relação à luz; digitalize o par simétrico no software recalculando os ângulos em vez de apenas espelhar o arquivo .DST no painel.",
      "A máquina não aceita espelhar o arquivo: certifique-se de que o desenho espelhado ainda cabe dentro dos limites da área útil do bastidor selecionado."
    ],
    dicaArtrelados: "Ao bordar monogramas em toalhas de rosto de casal ou camisas com brasões nas duas pontas da gola, lembre-se: arabescos e folhas se espelham, mas letras e iniciais NUNCA se espelham! Mantenha sempre as letras legíveis da esquerda para a direita!",
    voceSabia: "Na heráldica e nos uniformes militares clássicos desde o século XVIII, as figuras de animais (águias, leões, cavalos) bordadas nas mangas devem obrigatoriamente estar voltadas para a frente do corpo da pessoa (olhando para a frente), exigindo o espelhamento exato na manga oposta!",
    practicalExercise: "Carregue uma matriz de um ramo floral no painel da sua máquina. Use a tecla de espelhamento horizontal (X-Mirror) e veja como a ponta da folha vira instantaneamente da esquerda para a direita. Faça um teste de bordado em dois lados de uma toalhinha.",
    quickSummary: "Transformação geométrica que inverte horizontalmente a matriz para criar pares simétricos de desenhos para golas, mangas e calçados.",
    relatedTerms: ["Y-Mirror", "Simetria", "Transformação", "Gola", "Painel Digital", "Colarinho", "Alinhamento"],
    tags: ["xmirror", "espelhamento", "inversao", "simetria", "golas", "operacao", "painel"]
  },
  {
    id: "xy-servo-motor-tuning-pid-calibration-calibracao-pid",
    code: "X-018",
    letter: "X",
    term: "X-Y Servo Motor Tuning & PID Calibration — Calibração PID de Servomotores dos Eixos X e Y",
    pronunciation: "éks uái sér-vo mó-tor tiú-ning end pi-ai-di ka-li-brêi-shon — ser-vo-mo-to-res e ka-li-bra-são",
    level: "Avançado 🔴",
    category: "Agulhas & Mecânica",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês 'tuning' (sintonia fina e calibração de parâmetros dinâmicos) e 'PID' (algoritmo de controle Proporcional-Integral-Derivativo inventado por Nicolas Minorsky em 1922).",
    summary: "Ajuste eletrônico dos parâmetros de ganho dos servomotores dos eixos X e Y que elimina vibrações, overshoot e perda de passos no pantógrafo em alta velocidade.",
    definition: "O X-Y Servo Motor Tuning & PID Calibration (Calibração PID de Servomotores / Sintonia de Malha Fechada do Pantógrafo / Servo Loop Gain Calibration & Damping) é o procedimento técnico especializado de parametrização dos servodrivers que controlam a movimentação do bastidor nos eixos X e Y. Através da calibração dos ganhos Proporcional (Kp), Integral (Ki) e Derivativo (Kd), o sistema garante que o pantógrafo acelere, desloque-se e pare na coordenada exata em frações de milissegundo (menos de 40 ms por ponto a 1.000 PPM) sem oscilar ou ultrapassar o ponto de parada.",
    technicalDetails: "A cada ciclo de ponto, o encoder óptico envia milhares de pulsos de feedback para a placa de controle. Se o ganho proporcional Kp estiver muito alto, o pantógrafo entra em ressonância e produz um zumbido agudo com trepidação nas bordas do bordado (overshoot); se estiver muito baixo, o carro sofre atraso de resposta (lag), gerando perda de definição em monogramas pequenos e contornos fora de registro. O ajuste é feito por osciloscópio digital ou software de diagnóstico do fabricante (Tajima/Barudan/Brother).",
    beginnerExplanation: "É a afinação eletrônica de precisão dos motores que puxam o bastidor para lá e para cá. É como afinar as cordas de um violino: se estiverem muito frouxas, o bastidor anda mole e o desenho sai torto; se estiverem muito duras, a máquina treme inteira e faz barulho. A calibração deixa os motores suaves, rápidos e silenciosos!",
    howItWorks: [
      "1. O técnico conecta o computador de diagnóstico à porta serial/USB dos servodrivers da máquina.",
      "2. Executa o teste de resposta em degrau (Step Response Test) movimentando o bastidor em saltos de 10 mm.",
      "3. O software mede o tempo de estabilização e o sobre-sinal (overshoot) do eixo X.",
      "4. Ajusta-se o ganho Kp para aumentar a rigidez mecânica sem gerar ruído.",
      "5. Calibra-se o filtro derivativo Kd para frear o bastidor suavemente no milímetro exato.",
      "6. Elimina-se o erro estático de posição através do ganho integral Ki.",
      "7. A máquina passa a costurar a 1.000 PPM com silêncio absoluto e contornos cravados.",
    ],
    applications: [
      "Eliminação de trepidação em contornos finos de bordados em alta velocidade.",
      "Compensação do peso de bastidores pesados (bastidores de jaqueta e madeira).",
      "Manutenção preventiva anual em parques industriais de bordado.",
      "Correção de desvios de registro e sobreposição em máquinas multicabeçotes."
    ],
    characteristics: [
      "Controle de malha fechada em tempo real com leitura contínua de encoders.",
      "Compensação automática de inércia em diferentes tamanhos de bastidor.",
      "Operação estável com velocidade de até 1.200 pontos por minuto."
    ],
    commonErrors: [
      "❌ Alterar parâmetros PID no menu secreto da máquina sem treinamento técnico, desestabilizando os motores.",
      "❌ Operar com correias dentadas frouxas achando que o problema de desvio de ponto é do servomotor.",
      "❌ Ignorar superaquecimento dos motores de passo causado por ganho de corrente excessivo."
    ],
    troubleshootingTips: [
      "O bastidor vibra e faz um zumbido elétrico agudo quando para: o ganho derivativo ou proporcional está em ressonância; reduza o valor de ganho do eixo correspondente no driver.",
      "Os cantos das letras quadradas estão saindo arredondados em alta velocidade: o motor está com atraso de resposta (lag); aumente a rigidez de malha fechada do servodriver.",
      "A máquina perde a centralização após 10 minutos bordando rápido: verifique o encoder do motor e a tensão da correia dentada do eixo X."
    ],
    dicaArtrelados: "Se a sua máquina começar a tremer a bancada inteira quando você aumenta a velocidade para 800 ou 900 PPM, reduza a velocidade para 650 PPM e chame um técnico autorizado para calibrar os servomotores e esticar as correias. Isso duplica a vida útil da sua bordadeira!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas japonesas dos anos 70, os eixos eram movidos por freios e embreagens mecânicas acionados por solenoides hidráulicos, que faziam um barulho ensurdecedor de marteladas a cada ponto!",
    practicalExercise: "Ligue sua máquina de bordar e observe como o pantógrafo se move durante a inicialização. Escute o som dos motores: ele deve ser um sussurro suave e limpo. Se ouvir estalos secos ou trepidações fortes, anote no seu caderno de manutenção para revisão.",
    quickSummary: "Calibração eletrônica avançada dos parâmetros PID dos servomotores dos eixos X e Y para garantir paradas milimétricas e bordados sem trepidação.",
    relatedTerms: ["Servomotor", "Motor de Passo", "Encoder", "PID", "Pantógrafo", "Backlash", "Manutenção Preventiva"],
    tags: ["xyservo", "calibracaopid", "servomotor", "eletronica", "manutencao", "hardware", "mecanica"]
  },
  {
    id: "x-lock-stitch-knot-geometry-geometria-no-cruzado",
    code: "X-019",
    letter: "X",
    term: "X-Lock Stitch & Knot Geometry — Geometria de Nó Cruzado X-Lock & Arremate Anti-Desmanche",
    pronunciation: "éks-lók stitsh end nót dji-ó-me-tri — no kru-za-du e ar-re-ma-te",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês 'lock stitch' (ponto fixo de amarração) e 'knot geometry' (topologia de nó entrelaçado tridimensional em engenharia têxtil).",
    summary: "Rotina de arremate de alta segurança programada no software que amarra a linha em padrão geométrico de nó cruzado invisível sob a coluna satim.",
    definition: "O X-Lock Stitch & Knot Geometry (Geometria de Nó Cruzado X-Lock / Micro-Arremate Anti-Desmanche / Cross-Lock Secure Tie-Off) é o padrão de amarração programado na saída de blocos de bordado caracterizado por 4 a 5 micro-agulhadas intercaladas em eixos diagonais concorrentes (comprimento de ponto de 0,4 mm a 0,8 mm). Essa geometria força o filamento da linha superior a laçar a linha da bobina em um nó mecânico de fricção autobloqueante dentro da trama do tecido, impedindo que pontas de linha saltem para a superfície após o corte automático da guilhotina.",
    technicalDetails: "Ao contrário dos nós lineares unidirecionais (que se desfazem se a navalha do cortador de linha cortar a ponta com menos de 1 mm de sobra), o X-Lock distribui a força de retenção por atrito estático em 360 graus. O algoritmo calcula a inserção do nó a uma distância segura de 0,5 mm para dentro do preenchimento principal, garantindo que o nó fique completamente encoberto pela textura visual dos pontos superiores.",
    beginnerExplanation: "É um nózinho especial ultrasseguro que a máquina dá no final de cada letra ou desenho. Ele é feito de um jeito tão engenhoso que prende a ponta da linha para sempre, não solta nunca mesmo puxando com a mão e fica totalmente escondido por baixo do bordado sem ninguém ver!",
    howItWorks: [
      "1. A máquina conclui a última passagem da coluna satim ou tatami.",
      "2. O comando de finalização direciona a agulha para o interior do preenchimento.",
      "3. A agulha executa um micro-ponto diagonal de 0,6 mm para a direita.",
      "4. Em seguida, cruza na diagonal oposta formando o laço cruzado X-Lock.",
      "5. A linha da bobina sobe milimetricamente e trava a laçada no meio do tecido.",
      "6. A guilhotina da máquina executa o corte de linha automático por baixo da chapa.",
      "7. A ponta cortada permanece embutida e travada com zero risco de desmanche."
    ],
    applications: [
      "Bordados em uniformes industriais e roupas submetidas a lavagens industriais pesadas.",
      "Bordados em enxovais hospitalares e hoteleiros higienizados em alta temperatura.",
      "Acabamento de pontas de letras finas e monogramas em camisas sociais nobres.",
      "Artigos esportivos de compressão (leggings, tops e maiôs de natação)."
    ],
    characteristics: [
      "Nó autobloqueante com retenção por atrito mecânico multidirecional.",
      "Perfil microscópico que não cria calombos ásperos no verso da peça.",
      "100% invisível na face frontal do bordado."
    ],
    commonErrors: [
      "❌ Fazer o arremate X-Lock fora do desenho, deixando um ponto saliente feio ao lado da letra.",
      "❌ Programar o nó com pontos de 0,1 mm (muito curtos), batendo no mesmo furo e cortando o próprio tecido.",
      "❌ Desativar o arremate de finalização para economizar pontos, fazendo o bordado desmanchar na primeira lavagem."
    ],
    troubleshootingTips: [
      "As pontas das letras estão desmanchando depois que o cliente lava a roupa: ative a opção de arremate de segurança (Secure Tie-Off / X-Lock) nas propriedades de corte do seu software de matrizes.",
      "Ficou uma 'pontinha de linha espetada' para fora no final do bordado: programe o X-Lock com recuo de 1,0 mm para dentro do corpo da letra antes do comando de corte.",
      "O corte automático falha ao finalizar o nó: verifique se a navalha inferior da máquina está afiada e limpe os fiapos de linha sob a chapa de agulha."
    ],
    dicaArtrelados: "Nunca entregue uma peça a um cliente sem conferir se todas as cores e letras possuem nó de travamento seguro na matriz! O arremate X-Lock leva apenas 1 segundo para ser feito pela máquina, mas garante a reputação de qualidade do seu ateliê por anos!",
    voceSabia: "O conceito do nó autobloqueante por fricção cruzada é inspirado nos nós marinheiros de salvamento (como o Nó de Escota e o Nó de Oito), projetados para suportar toneladas de tração sem escorregar!",
    practicalExercise: "No seu programa de bordado, abra a ferramenta de simulação ponto a ponto (Stitch Player). Vá até o finalzinho de uma letra e observe os últimos 4 pontos: veja como eles formam um pequeno 'X' escondido sob a coluna antes de acionar a tesourinha de corte.",
    quickSummary: "Padrão de arremate programado em nó cruzado que ancora a linha com máxima segurança e durabilidade sem ficar visível na face do bordado.",
    relatedTerms: ["Tie-Off", "Tie-In", "Arremate", "Trimmer", "Nó de Bobina", "Corte Automático", "Wilcom"],
    tags: ["xlock", "arremate", "tieoff", "seguranca", "qualidade", "programacao", "durabilidade"]
  },
  {
    id: "x-scale-horizontal-resizing-redimensionamento-x",
    code: "X-020",
    letter: "X",
    term: "X-Scale & Horizontal Resizing — Redimensionamento Horizontal no Eixo X & Recálculo de Densidade",
    pronunciation: "éks-iskêil end ho-ri-zôn-tal ri-sái-zing — re-di-men-si-o-na-men-to no êi-shu shis",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'scale' (escala proporcional/dimensional) e 'resizing' (redimensionamento de vetores ou blocos de pontos em CAD).",
    summary: "Ferramenta de ajuste de largura que altera as dimensões da matriz no eixo horizontal, recalculando automaticamente os pontos e a densidade ideal.",
    definition: "O X-Scale & Horizontal Resizing (Escala no Eixo X / Redimensionamento Horizontal Independente / Width Rescaling & Density Recalculation) é a função que permite alargar ou estreitar uma matriz de bordado exclusivamente na dimensão horizontal (eixo X), mantendo a altura original (eixo Y) inalterada ou alterando ambas proporcionalmente. Quando executada em softwares profissionais com objetos nativos (.EMB, .PES), a ferramenta recalcula instantaneamente a quantidade de agulhadas para manter a densidade (espaçamento entre pontos) perfeitamente estável.",
    technicalDetails: "Se o redimensionamento no eixo X for realizado em arquivos de ponto compilados (.DST, .EXP) diretamente no painel da máquina ou em visualizadores simples sem recálculo inteligente de densidade, esticar a matriz em +20% no eixo X aumenta o espaçamento entre pontos em 20% (deixando o bordado ralo e com falhas de cobertura); contrair em -20% sobrecarrega a densidade, gerando acúmulo e quebras de agulha. Por isso, redimensionamentos superiores a ±10% devem ser sempre processados no software com regeneração nativa de pontos.",
    beginnerExplanation: "É a ferramenta que estica ou encolhe a largura do seu bordado! Se você tem um nome que precisa caber exatamente em cima de um bolso estreito de 9 cm, você pode usar o redimensionamento do eixo X para 'espremer' as letras para os lados até caber certinho, sem mexer na altura delas!",
    howItWorks: [
      "1. O operador abre a matriz no software de bordado.",
      "2. Desmarca a opção 'Manter Proporção' (Proportional Lock / Cadeado de Proporção).",
      "3. Digita a nova largura desejada em milímetros no campo do eixo X (ou digita a porcentagem, ex.: 85%).",
      "4. O software recalcula as coordenadas vetoriais de todos os nós de curva.",
      "5. Regenera a malha de pontos adicionando ou removendo agulhadas para manter o espaçamento de 0,40 mm.",
      "6. A compensação de repuxo e os subpontos são atualizados automaticamente.",
      "7. A nova matriz ajustada é salva e enviada para a máquina pronta para costura perfeita."
    ],
    applications: [
      "Ajuste de nomes e frases longas para caber na largura de bolsos de jalecos.",
      "Adaptação de logotipos corporativos para faixas horizontais de bonés e fitas.",
      "Correção de proporção em brasões e molduras decorativas.",
      "Ajuste fino de largura para compensar tecidos com alto repuxo horizontal."
    ],
    characteristics: [
      "Ajuste independente dos eixos X e Y ou proporcional com bloqueio de aspecto.",
      "Recálculo dinâmico da densidade em softwares com suporte a objetos vetoriais.",
      "Indicação visual instantânea das novas medidas em milímetros."
    ],
    commonErrors: [
      "❌ Redimensionar arquivo .DST direto no painel da máquina em mais de 20%, deixando o bordado todo ralo e falhado.",
      "❌ Esticar letras finas demais no eixo X, fazendo pontos satim ultrapassarem o comprimento máximo de 10 mm e ficarem frouxos.",
      "❌ Encolher uma matriz complexa pela metade sem remover pontos, entupindo a máquina de linha."
    ],
    troubleshootingTips: [
      "O bordado ficou ralo e o tecido está aparecendo por baixo após aumentar a largura: o redimensionamento foi feito em arquivo de pontos sem recálculo de densidade; abra a matriz original no software e redimensione com recálculo automático ativado.",
      "A máquina pula pontos compridos após esticar o desenho: os pontos satim ultrapassaram 9 mm de comprimento; no software, ative a divisão automática de pontos (Auto Split) para converter pontos longos em tatami.",
      "O desenho não cabe no bastidor por 2 mm: aplique um X-Scale de 97% na largura no software; essa redução de 3% é imperceptível aos olhos e faz a matriz caber com segurança no aro."
    ],
    dicaArtrelados: "Precisa fazer um nome comprido (como 'Mariana Albuquerque') caber em um bolso de 10 cm? Reduza a largura no eixo X para 80% no software mantendo a altura em 100%! As letras ficam em estilo 'condensado' super elegante, perfeitamente legíveis e cabem como uma luva no bolso!",
    voceSabia: "Na tipografia clássica, fontes com proporção horizontal reduzida são chamadas de 'Condensed' (condensadas) e fontes com largura expandida são chamadas de 'Extended' (expandidas), sendo criadas desde o século XIX para anúncios de jornais!",
    practicalExercise: "Abra uma palavra com 10 letras no seu software de bordado. Reduza a largura para 80% no eixo X com o recálculo de densidade ligado. Observe como o número de pontos diminui proporcionalmente e o espaçamento entre as linhas de costura continua perfeito.",
    quickSummary: "Ferramenta de ajuste de largura no eixo X que redimensiona a matriz e recalcula os pontos para preservar a densidade e a qualidade do bordado.",
    relatedTerms: ["Redimensionamento", "Densidade", "Proporção", "Auto Split", "Wilcom", "Embird", "Tipografia Condensada"],
    tags: ["xscale", "redimensionamento", "largura", "escala", "densidade", "software", "vetor"]
  }
];

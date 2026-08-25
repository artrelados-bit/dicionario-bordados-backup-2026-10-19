import { Verbete } from "../types";

export const VERBETES_LETTER_Y1: Verbete[] = [
  {
    id: "y-axis-movement-movimento-eixo-y-pantografo",
    code: "Y-001",
    letter: "Y",
    term: "Y-Axis Movement — Movimento do Eixo Y no Pantógrafo (Translação Vertical e Coordenadas Cartesianas)",
    pronunciation: "uái-ék-sis múuv-ment — mo-vi-men-tu do êi-shu í-psi-lon no pan-tó-gra-fo",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do sistema de coordenadas cartesianas desenvolvido por René Descartes no século XVII, onde o eixo vertical é convencionado pela letra 'Y', aplicado à mecatrônica de máquinas de bordar CNC.",
    summary: "Deslocamento linear anteroposterior (para frente e para trás / para cima e para baixo) do bastidor de bordado, sincronizado milimetricamente com a descida da agulha.",
    definition: "O Y-Axis Movement (Movimento do Eixo Y / Translação Longitudinal do Pantógrafo / Vertical Coordinate Drive) é a movimentação mecânica responsável por deslocar o bastidor no sentido anteroposterior (frente/trás em máquinas de mesa plana ou cima/baixo no plano cartesiano da matriz). Esse movimento é acionado por servomotores ou motores de passo de alta precisão acoplados a correias sincronizadoras ou fusos de esferas, operando em perfeita sincronia com o ciclo da agulha (eixo Z).",
    technicalDetails: "A translação do eixo Y ocorre exclusivamente na janela angular em que a agulha está fora do tecido (tipicamente entre 270° e 90° do ciclo do eixo principal). Como o conjunto do eixo Y movimenta todo o peso da travessa transversal do pantógrafo mais os bastidores acoplados, ele possui maior momento de inércia mecânica em relação ao eixo X. Por isso, a controladora da máquina aplica perfis de aceleração com jerk controlado (S-Curve) para evitar solavancos que possam provocar perda de passos ou desalinhamento de contornos.",
    beginnerExplanation: "É o movimento que a máquina faz empurrando e puxando o bastidor para frente e para trás! Enquanto a agulha sobe e desce, o bastidor anda para cima e para baixo no eixo Y para colocar cada pontinho no lugar exato do desenho que você vê na tela do computador.",
    howItWorks: [
      "1. A matriz envia a coordenada delta Y (+dY ou -dY) correspondente ao próximo ponto do desenho.",
      "2. O motor do eixo Y recebe o trem de pulsos eletrônicos da placa-mãe da máquina.",
      "3. As correias dentadas ou guias lineares deslocam o braço do pantógrafo no sentido longitudinal.",
      "4. O movimento é concluído enquanto a agulha está suspensa no ponto morto superior.",
      "5. A agulha desce no tecido exatamente na nova coordenada milimétrica.",
      "6. A laçada é formada e amarrada com a linha da bobina.",
      "7. O pantógrafo permanece imóvel durante a penetração da agulha e retoma o deslocamento no próximo ciclo."
    ],
    applications: [
      "Posicionamento e execução de todas as colunas de pontos no sentido vertical da matriz.",
      "Deslocamento suave durante saltos longos (Jumps) e trajetos de corte de linha.",
      "Centralização automática do bastidor na origem (0,0) antes de iniciar o trabalho.",
      "Enquadramento de áreas extensas em bastidores gigantes de jaquetas e colchas."
    ],
    characteristics: [
      "Movimentação com resolução centesimal de até 0,01 mm por pulso de motor.",
      "Amortecimento dinâmico de inércia para evitar vibrações em velocidades acima de 850 PPM.",
      "Travamento eletromecânico instantâneo durante a penetração da agulha no tecido."
    ],
    commonErrors: [
      "❌ Deixar toalhas pesadas ou barras de calça caírem para fora da bancada, puxando o bastidor e forçando os motores do eixo Y.",
      "❌ Operar com correias do eixo Y frouxas, causando folgas e 'dentes' nos contornos verticais das letras.",
      "❌ Bater o bastidor contra a carcaça da máquina por não conferir o traçado (Trace) antes de iniciar."
    ],
    troubleshootingTips: [
      "Os contornos do bordado estão saindo deslocados apenas para cima ou para baixo: verifique a tensão da correia dentada do eixo Y e aperte o esticador com uma chave adequada.",
      "A máquina faz um estalo forte e perde a posição no sentido vertical: o bastidor colidiu na borda mecânica ou o tecido pesado travou sob a mesa; desligue, destrave e faça a checagem de área.",
      "O motor do eixo Y aquece excessivamente: verifique se há linhas presas nas polias do eixo ou se as guias lineares necessitam de limpeza e lubrificação com graxa fina."
    ],
    dicaArtrelados: "Ao bordar peças grandes e pesadas (como toalhas de banho grossas, roupões ou mantas), acomode sempre o excesso de tecido sobre a mesa da máquina! Nunca deixe o tecido pesado pendurado para fora no ar, pois o peso puxa o eixo Y e pode fazer o bordado sair torto!",
    voceSabia: "Nas primeiras máquinas automáticas com leitura de cartões perfurados no século XIX, o movimento dos eixos X e Y era comandado por réguas de madeira mecânicas acionadas por alavancas e contrapesos de chumbo!",
    practicalExercise: "No painel da sua máquina de bordar, utilize as teclas direcionais para movimentar o bastidor para cima e para baixo. Observe como o braço do pantógrafo desliza suavemente sobre as guias e note como a tela atualiza os valores de coordenadas milimétricas do eixo Y.",
    quickSummary: "Movimento longitudinal anteroposterior do pantógrafo da máquina de bordar que posiciona o bastidor com precisão no eixo vertical.",
    relatedTerms: ["X-Axis", "Z-Axis", "Pantógrafo", "Coordenadas Cartesianas", "Trace", "Ponto Zero", "Servomotor"],
    tags: ["yaxis", "eixoy", "movimento", "pantografo", "mecanica", "operacao", "precisao"]
  },
  {
    id: "yarn-silicone-lubrication-lubrificacao-fios-alta-velocidade",
    code: "Y-002",
    letter: "Y",
    term: "Yarn Silicone Lubrication — Lubrificação e Silicionamento de Fios para Bordados de Alta Velocidade",
    pronunciation: "iárn sí-li-coun lu-bri-kêi-shon — lu-bri-fi-ca-são de fios com si-li-co-ne",
    level: "Intermediário 🟡",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'yarn lubrication' (tratamento superficial com polímeros de polidimetilsiloxano em linhas de costura e bordado industrial).",
    summary: "Aplicação de microcamada de óleo de silicone puro sobre as linhas de bordar para reduzir o aquecimento térmico, o atrito no olho da agulha e as quebras a 1.000 PPM.",
    definition: "O Yarn Silicone Lubrication (Silicionamento de Fios / Lubrificação Têxtil de Linhas de Bordar / Silicone Thread Conditioning) é o processo industrial e prático de aplicação de uma película microscópica de emulsão de silicone fluido de alta pureza (viscosidade de 350 a 1.000 cSt) sobre os filamentos da linha de bordar superior. Essa lubrificação tem a função vital de reduzir o atrito dinâmico do fio contra as paredes metálicas dos discos tensores, estica-fios e, fundamentalmente, contra o olho da agulha durante operações de alta velocidade.",
    technicalDetails: "A uma velocidade de 900 a 1.000 pontos por minuto, a agulha atinge temperaturas superficiais de até 180 °C devido ao atrito constante contra as fibras do tecido e da entretela. Essa temperatura extrema amolece e funde polímeros sintéticos (poliéster e poliamida), provocando desfiamento e rompimento térmico da linha. A camada de silicone reduz o coeficiente de atrito em até 70%, dissipa o calor por condução e atua como uma barreira térmica que permite que a linha deslize a frio sem sofrer degradação molecular.",
    beginnerExplanation: "É uma gotinha mágica de silicone especial que a gente passa na linha para ela deslizar macia e lisinha pelos buraquinhos e pela agulha da máquina! Quando a máquina costura muito rápido, a agulha fica muito quente; o silicone não deixa a linha queimar nem arrebentar, fazendo a máquina bordar sem parar!",
    howItWorks: [
      "1. A fábrica de linhas aplica a quantidade exata de silicone de alta tecnologia (típico de 3% a 5% em peso) no acabamento do cone.",
      "2. No ateliê, ao utilizar linhas antigas, metálicas ou secas, a bordadeira aplica uma gota de óleo de silicone puro na almofadinha de feltro do passador de linha.",
      "3. O fio passa pela almofada e absorve uma camada microscópica homogênea de lubrificante.",
      "4. Ao passar pelos tensores, a linha corre com resistência uniforme e sem trancos.",
      "5. No olho da agulha superaquecida a 1.000 PPM, o silicone evapora o calor e impede a fusão do poliéster.",
      "6. A linha penetra no tecido sem desfiar os filamentos e forma a laçada perfeita.",
      "7. A peça fica bordada com brilho reluzente e sem nenhuma mancha oleosa no tecido."
    ],
    applications: [
      "Bordados em altíssima velocidade em máquinas industriais (acima de 900 PPM).",
      "Uso de linhas metálicas delicadas (douradas, prateadas e holográficas).",
      "Bordado em tecidos pesados e rígidos (lonas, sarjas grossas, couro e bonés).",
      "Recuperação de cones de linha ressecados guardados há muito tempo no ateliê."
    ],
    characteristics: [
      "Silicone 100% puro e incolor que evapora sem manchar tecidos ou desbotar cores.",
      "Redução drástica da temperatura de atrito no olho da agulha.",
      "Estabilização da tensão da linha superior durante toda a produção."
    ],
    commonErrors: [
      "❌ Usar óleo de máquina comum mineral ou desengripante automotivo na linha, manchando irremediavelmente a roupa do cliente.",
      "❌ Encharcar o cone de linha inteiro com excesso de silicone, fazendo a linha patinar nos tensores e perder o controle de ponto.",
      "❌ Usar silicone industrial com solventes que ressecam as peças plásticas da máquina de bordar."
    ],
    troubleshootingTips: [
      "A linha está quebrando com a ponta derretida (uma bolinha plástica na ponta): a agulha está superaquecendo; passe o fio por um feltro com uma gota de silicone líquido puro para bordado ou reduza a velocidade da máquina.",
      "A linha dourada metálica está desfiando e acumulando no olho da agulha: aplique silicone puro no passa-fios e utilize uma agulha especial Metallic com olho maior.",
      "Apareceram pequenas sombras no tecido branco ao redor do bordado: você utilizou óleo inadequado; lave a peça com água morna e sabão neutro e utilize apenas silicone têxtil volátil de primeira linha."
    ],
    dicaArtrelados: "Tenha sempre no ateliê um frasquinho de silicone líquido puro próprio para bordado (aquele bem transparente e sem cheiro)! Uma gotinha na esponjinha de passagem de linha é o segredo para fazer aquela linha metálica teimosa bordar lisinha e macia como manteiga!",
    voceSabia: "As linhas de bordar modernas das melhores marcas do mundo (como Madeira, Isacord e Setta) já vêm de fábrica com uma nanocamada de silicone termofixada a vapor nos filamentos, o que garante que elas aguentem mais de 1.200 rotações por minuto sem quebrar!",
    practicalExercise: "Pegue um cone de linha comum e passe um pedaço do fio entre os dedos para sentir o atrito. Em seguida, umedeça a ponta do dedo com uma microgota de silicone têxtil e passe novamente no fio: sinta a maciez imediata e o deslizamento suave que ele proporciona.",
    quickSummary: "Tratamento com película microscópica de silicone puro que reduz o atrito e o calor da agulha, evitando quebras em alta velocidade.",
    relatedTerms: ["Silicone Líquido", "Linha Metálica", "Aquecimento da Agulha", "Tensão Superior", "Fios de Poliéster", "Passa-Fios"],
    tags: ["yarnsilicone", "lubrificacao", "silicone", "fios", "manutencao", "qualidade", "agulhas"]
  },
  {
    id: "yarn-tension-gauge-tensiotrometro-dinamometro-linhas",
    code: "Y-003",
    letter: "Y",
    term: "Yarn Tension Gauge — Tensiotrômetro e Dinamômetro Digital de Linha Superior e Bobina",
    pronunciation: "iárn tên-shon guêidj — ten-si-o-trô-me-tru e di-na-mô-me-tru de li-nhas",
    level: "Avançado 🔴",
    category: "Ferramentas & Acessórios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'tension gauge' (medidor dinamométrico de calibração de forças de tração mecânica têxtil em gramas-força).",
    summary: "Instrumento de precisão utilizado para medir e calibrar numericamente a tensão exata da linha superior e da caixa de bobina em gramas-força (gf).",
    definition: "O Yarn Tension Gauge (Tensiotrômetro / Dinamômetro Têxtil para Bordado / Towa Digital Tension Meter / Upper & Lower Thread Calibrator) é um instrumento de medição metrológica mecânico ou eletrônico projetado para quantificar a força de tração exercida sobre a linha superior ou inferior da máquina de bordar. O modelo mais consagrado na indústria é o medidor japonês Towa Gauge (com versões específicas para caixa de bobina tipo 'L' e 'M' e modelos com gancho para linha superior).",
    technicalDetails: "A estabilidade do ponto de bordado obedece à equação de equilíbrio de tensões $T_{sup} \\approx 4 \\cdot T_{inf}$. Com o Yarn Tension Gauge, a bordadeira calibra a tensão da caixa de bobina para a faixa padrão ideal de **18 a 25 gramas-força (gf)** para linhas de bobina 60wt de poliéster. Na linha superior (medida puxando o fio através da agulha com o pé-calcador abaixado), a tensão é ajustada para **100 a 130 gf** para linhas padrão 40wt. Em máquinas industriais multicabeçotes, o tensiotrômetro garante que todas as 12 ou 15 agulhas de todas as cabeças trabalhem com tensões 100% idênticas.",
    beginnerExplanation: "É o 'termômetro' da pressão da linha da máquina! É um aparelhinho de precisão com um visor que mostra um número exato em gramas quando a gente puxa a linha. Assim, em vez de ficar adivinhando no olhômetro se a linha está apertada ou frouxa, você regula com o número exato e o bordado fica perfeito de primeira!",
    howItWorks: [
      "1. A bordadeira insere a caixa de bobina com a carretilha dentro do medidor Towa Gauge.",
      "2. Passa a ponta da linha de bobina pelas roldanas tensoras do aparelho.",
      "3. Puxa a linha suavemente com a mão na velocidade normal de costura.",
      "4. O ponteiro ou visor digital indica o valor exato da resistência em gramas-força (ex.: 22 gf).",
      "5. Se a medição estiver fora da faixa (18-25 gf), gira o parafuso da caixa de bobina até cravar o valor.",
      "6. Para a linha superior, engata o gancho do tensiotrômetro na linha que sai do olho da agulha e puxa para aferir os 110-130 gf.",
      "7. Repete o processo em todos os cones, garantindo padrão industrial uniforme em todo o ateliê."
    ],
    applications: [
      "Padronização técnica da tensão de todas as cabeças em fábricas e ateliês profissionais.",
      "Calibração perfeita da caixa de bobina após limpeza ou substituição de molas.",
      "Ajuste fino para bordados em tecidos nobres e sensíveis (seda, cetim, cambraia e linho).",
      "Solução rápida de problemas crônicos de linha branca da bobina subindo para a frente da peça."
    ],
    characteristics: [
      "Escala micrométrica com graduação de 1 em 1 grama-força (gf / cN).",
      "Modelos dedicados para carretilhas domésticas e industriais (tamanhos L e M).",
      "Eliminação total da subjetividade e adivinhações manuais na regulagem da máquina."
    ],
    commonErrors: [
      "❌ Puxar a linha do aparelho com trancos bruscos em vez de uma puxada suave e contínua, falseando a leitura do dinamômetro.",
      "❌ Fazer a medição da linha superior com o calcador levantado (com os discos tensores abertos).",
      "❌ Deixar poeira ou fiapos acumulados nas roldanas de medição do tensiotrômetro."
    ],
    troubleshootingTips: [
      "O visor do tensiotrômetro oscila loucamente durante a puxada: há fiapo de linha preso embaixo da mola da caixa de bobina ou a linha está enrolada de forma irregular no carretel; limpe a mola com estilete e repita o teste.",
      "A linha superior marca mais de 160 gf mesmo com o botão do tensor quase todo solto: verifique se a linha não está enroscada em algum guia metálico ou enrolada no pino do estica-fio.",
      "O bordado continua com pontos frouxos mesmo marcando os gramas corretos no aparelho: verifique a calibragem da molinha estica-fio (Check Spring) da máquina."
    ],
    dicaArtrelados: "Se você tem uma máquina multicabeçotes ou produz muito em série no seu ateliê, o tensiotrômetro (Towa Gauge) é o melhor investimento que você pode fazer! Ele acaba de vez com aquela dúvida de 'será que apertei demais ou de menos?' e deixa todos os seus bordados com o mesmo padrão de loja de shopping!",
    voceSabia: "A fabricante japonesa Towa Corporation desenvolveu o primeiro medidor de tensão para caixas de bobina de bordado na década de 1970 a pedido dos engenheiros da Tajima, tornando-se o padrão internacional adotado por 100% dos técnicos do mundo!",
    practicalExercise: "Se você tiver acesso a um medidor Towa, meça a tensão da sua caixa de bobina atual. Anote o valor. Em seguida, gire o parafuso em apenas 1/8 de volta no sentido horário e meça novamente: observe como um movimento quase invisível no parafuso altera a leitura em cerca de 4 a 6 gramas-força.",
    quickSummary: "Instrumento dinamométrico de alta precisão que mede e calibra em gramas-força a tensão exata das linhas da máquina de bordar.",
    relatedTerms: ["Towa Gauge", "Tensão Superior", "Caixa de Bobina", "Gramas-Força", "Mola Tensora", "Equilíbrio de Ponto", "Calibração"],
    tags: ["yarntensiongauge", "tensiotrometro", "towagauge", "dinamometro", "regulagem", "tensao", "ferramentas"]
  },
  {
    id: "yoke-embroidery-bordado-palas-camisaria-jaquetas",
    code: "Y-004",
    letter: "Y",
    term: "Yoke Embroidery Placement — Bordado de Palas (Costas de Camisaria, Jeans, Jaquetas e Fardamentos)",
    pronunciation: "iôuk em-brói-de-ri plêis-ment — bor-da-du de pa-las em ca-mi-sas e ja-que-tas",
    level: "Intermediário 🟡",
    category: "Posicionamento & Montagem",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês antigo 'geoc' (jugo/suporte sobre os ombros) que na alfaiataria e modelagem têxtil evoluiu para designar a 'pala' (o recorte anatômico superior que une os ombros e as costas de camisas e jaquetas).",
    summary: "Técnicas de entretelamento, alinhamento anatômico e fixação em bastidor para bordar na pala superior traseira de camisas sociais, jaquetas jeans e fardamentos.",
    definition: "O Yoke Embroidery Placement (Bordado em Palas / Centralização e Fixação de Palas Anatômicas / Shirt & Jacket Yoke Hooping) é a metodologia especializada de enquadramento, estabilização e digitalização de matrizes destinadas à pala superior das costas de peças de vestuário. Por se tratar de uma área estrutural de alta movimentação corporal (tensão muscular dos ombros e escápulas), o bordado na pala exige cuidados rigorosos de alinhamento com a costura horizontal dos ombros e escolha de entretelas que garantam conforto sem irritar a pele.",
    technicalDetails: "A pala de camisas sociais é frequentemente confeccionada com tecido duplo (pala externa e forro interno), enquanto em jaquetas jeans ela é reforçada com costura pesada pespontada. No posicionamento, o centro vertical da matriz deve ser alinhado rigorosamente a **4,0 cm a 6,0 cm abaixo da costura da gola/colarinho** e perfeitamente centralizado em relação à costura do centro das costas. Utiliza-se entretela de recorte macia (Cutaway de 60 g/m²) ou entretela termocolante de proteção no avesso (Cover-A-Stitch / Protege-Bordado) para evitar que o verso áspero dos pontos entre em contato direto com a nuca do usuário.",
    beginnerExplanation: "É o bordado feito naquela parte de cima das costas da camisa ou da jaqueta, bem perto da gola e dos ombros! Como essa parte fica bem visível nas costas de quem veste, o bordado tem que ficar 100% retinho e muito confortável por dentro para não pinicar o pescoço da pessoa!",
    howItWorks: [
      "1. A bordadeira desdobra a camisa ou jaqueta e identifica a linha central da pala traseira.",
      "2. Marca o centro da pala com giz de alfaiate ou caneta fantasminha, posicionando o ponto de origem a 5 cm abaixo do colarinho.",
      "3. Posiciona a entretela de recorte macia por baixo do tecido na área da pala.",
      "4. Enquadra no bastidor ou utiliza a técnica de montagem flutuante para não amassar as costuras grossas dos ombros.",
      "5. Alinha o apontador laser da máquina exatamente sobre o traçado em cruz da pala.",
      "6. Executa o bordado com velocidade calibrada de 700 a 800 PPM.",
      "7. Finaliza recortando a entretela em formato arredondado e aplica a película termocolante macia de proteção no avesso."
    ],
    applications: [
      "Personalização de camisas sociais corporativas para executivos, médicos e advogados.",
      "Bordado de logotipos e brasões em jaquetas jeans, jaquetas de couro e coletes.",
      "Uniformes de fardamento profissional, aviação e hotelaria de alto padrão.",
      "Camisas country, camisas xadrez e jalecos profissionais."
    ],
    characteristics: [
      "Alinhamento anatômico de altíssima visibilidade nas costas do usuário.",
      "Tratamento suave no avesso para proteção contra atrito na nuca e ombros.",
      "Estabilidade dimensional reforçada para suportar movimentos dos braços."
    ],
    commonErrors: [
      "❌ Bordar a matriz muito para baixo, fazendo o logotipo ficar escondido quando a pessoa senta ou dobra as costas.",
      "❌ Prender a costura grossa do ombro dentro do aro do bastidor plástico, entortando a camisa ou quebrando o bastidor.",
      "❌ Deixar nós e pontas duras de linha no avesso sem aplicar película protetora macia."
    ],
    troubleshootingTips: [
      "O bordado na pala ficou torto em relação à gola: utilize sempre um gabarito de alinhamento com régua em 'T' apoiada nas costuras dos dois ombros para traçar a linha guia perfeitamente reta.",
      "O aro do bastidor não fecha por causa da grossura das costuras da jaqueta jeans: utilize a técnica flutuante com entretela autoadesiva (Peel & Stick) ou utilize bastidores magnéticos de fechamento automático.",
      "O cliente reclamou que o bordado pinica nas costas: passe o ferro morno aplicando uma película termocolante macia protetora (Protege-Bordado) sobre todo o verso do bordado."
    ],
    dicaArtrelados: "Para bordar camisas sociais com elegância absoluta: mantenha o logotipo na pala com no máximo 8 a 9 cm de largura e posicione o centro exatamente 5 cm abaixo da gola. Fica discreto, moderno e com um caimento corporativo impecável!",
    voceSabia: "A pala dupla em camisas sociais masculinas foi criada na Inglaterra vitoriana do século XIX para dar sustentação estrutural aos colarinhos duros engomados e distribuir o peso dos suspensórios sem rasgar o linho delicado da camisa!",
    practicalExercise: "Pegue uma camisa social no seu ateliê. Dobre a camisa ao meio pelas costas alinhando as duas costuras dos ombros para achar o vinco central. Com uma fita métrica, meça 5 cm para baixo a partir do centro da gola e marque uma cruz: esse é o ponto exato para centralizar seu bastidor na pala.",
    quickSummary: "Técnica de enquadramento e posicionamento anatômico de bordados na pala superior das costas de camisas, jaquetas e uniformes.",
    relatedTerms: ["Posicionamento", "Gabarito de Alinhamento", "Protege-Bordado", "Camisaria", "Bastidor Magnético", "Bordado Flutuante"],
    tags: ["yokeembroidery", "pala", "camisaria", "jaquetas", "posicionamento", "uniformes", "enquadramento"]
  }
];

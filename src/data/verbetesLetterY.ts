import { Verbete } from "../types";

export const VERBETES_LETTER_Y: Verbete[] = [
  {
    "id": "y-axis-movement-movimento-eixo-y-pantografo",
    "code": "Y-001",
    "letter": "Y",
    "term": "Y-Axis Movement — Movimento do Eixo Y no Pantógrafo (Translação Vertical e Coordenadas Cartesianas)",
    "pronunciation": "uái-ék-sis múuv-ment — mo-vi-men-tu do êi-shu í-psi-lon no pan-tó-gra-fo",
    "level": "Iniciante 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do sistema de coordenadas cartesianas desenvolvido por René Descartes no século XVII, onde o eixo vertical é convencionado pela letra 'Y', aplicado à mecatrônica de máquinas de bordar CNC.",
    "summary": "Deslocamento linear anteroposterior (para frente e para trás / para cima e para baixo) do bastidor de bordado, sincronizado milimetricamente com a descida da agulha.",
    "definition": "O Y-Axis Movement (Movimento do Eixo Y / Translação Longitudinal do Pantógrafo / Vertical Coordinate Drive) é a movimentação mecânica responsável por deslocar o bastidor no sentido anteroposterior (frente/trás em máquinas de mesa plana ou cima/baixo no plano cartesiano da matriz). Esse movimento é acionado por servomotores ou motores de passo de alta precisão acoplados a correias sincronizadoras ou fusos de esferas, operando em perfeita sincronia com o ciclo da agulha (eixo Z).",
    "technicalDetails": "A translação do eixo Y ocorre exclusivamente na janela angular em que a agulha está fora do tecido (tipicamente entre 270° e 90° do ciclo do eixo principal). Como o conjunto do eixo Y movimenta todo o peso da travessa transversal do pantógrafo mais os bastidores acoplados, ele possui maior momento de inércia mecânica em relação ao eixo X. Por isso, a controladora da máquina aplica perfis de aceleração com jerk controlado (S-Curve) para evitar solavancos que possam provocar perda de passos ou desalinhamento de contornos.",
    "beginnerExplanation": "É o movimento que a máquina faz empurrando e puxando o bastidor para frente e para trás! Enquanto a agulha sobe e desce, o bastidor anda para cima e para baixo no eixo Y para colocar cada pontinho no lugar exato do desenho que você vê na tela do computador.",
    "howItWorks": [
      "1. A matriz envia a coordenada delta Y (+dY ou -dY) correspondente ao próximo ponto do desenho.",
      "2. O motor do eixo Y recebe o trem de pulsos eletrônicos da placa-mãe da máquina.",
      "3. As correias dentadas ou guias lineares deslocam o braço do pantógrafo no sentido longitudinal.",
      "4. O movimento é concluído enquanto a agulha está suspensa no ponto morto superior.",
      "5. A agulha desce no tecido exatamente na nova coordenada milimétrica.",
      "6. A laçada é formada e amarrada com a linha da bobina.",
      "7. O pantógrafo permanece imóvel durante a penetração da agulha e retoma o deslocamento no próximo ciclo."
    ],
    "applications": [
      "Posicionamento e execução de todas as colunas de pontos no sentido vertical da matriz.",
      "Deslocamento suave durante saltos longos (Jumps) e trajetos de corte de linha.",
      "Centralização automática do bastidor na origem (0,0) antes de iniciar o trabalho.",
      "Enquadramento de áreas extensas em bastidores gigantes de jaquetas e colchas."
    ],
    "characteristics": [
      "Movimentação com resolução centesimal de até 0,01 mm por pulso de motor.",
      "Amortecimento dinâmico de inércia para evitar vibrações em velocidades acima de 850 PPM.",
      "Travamento eletromecânico instantâneo durante a penetração da agulha no tecido."
    ],
    "commonErrors": [
      "❌ Deixar toalhas pesadas ou barras de calça caírem para fora da bancada, puxando o bastidor e forçando os motores do eixo Y.",
      "❌ Operar com correias do eixo Y frouxas, causando folgas e 'dentes' nos contornos verticais das letras.",
      "❌ Bater o bastidor contra a carcaça da máquina por não conferir o traçado (Trace) antes de iniciar."
    ],
    "troubleshootingTips": [
      "Os contornos do bordado estão saindo deslocados apenas para cima ou para baixo: verifique a tensão da correia dentada do eixo Y e aperte o esticador com uma chave adequada.",
      "A máquina faz um estalo forte e perde a posição no sentido vertical: o bastidor colidiu na borda mecânica ou o tecido pesado travou sob a mesa; desligue, destrave e faça a checagem de área.",
      "O motor do eixo Y aquece excessivamente: verifique se há linhas presas nas polias do eixo ou se as guias lineares necessitam de limpeza e lubrificação com graxa fina."
    ],
    "dicaArtrelados": "Ao bordar peças grandes e pesadas (como toalhas de banho grossas, roupões ou mantas), acomode sempre o excesso de tecido sobre a mesa da máquina! Nunca deixe o tecido pesado pendurado para fora no ar, pois o peso puxa o eixo Y e pode fazer o bordado sair torto!",
    "voceSabia": "Nas primeiras máquinas automáticas com leitura de cartões perfurados no século XIX, o movimento dos eixos X e Y era comandado por réguas de madeira mecânicas acionadas por alavancas e contrapesos de chumbo!",
    "practicalExercise": "No painel da sua máquina de bordar, utilize as teclas direcionais para movimentar o bastidor para cima e para baixo. Observe como o braço do pantógrafo desliza suavemente sobre as guias e note como a tela atualiza os valores de coordenadas milimétricas do eixo Y.",
    "quickSummary": "Movimento longitudinal anteroposterior do pantógrafo da máquina de bordar que posiciona o bastidor com precisão no eixo vertical.",
    "relatedTerms": [
      "X-Axis",
      "Z-Axis",
      "Pantógrafo",
      "Coordenadas Cartesianas",
      "Trace",
      "Ponto Zero",
      "Servomotor"
    ],
    "imageUrl": "/images/y001_eixo_y_pantografo_v1.jpg?v=1",
    "imageCaption": "Anatomia do Eixo Y (Y-Axis Movement): o sistema de movimentação vertical (frente e trás) do pantógrafo e a importância da área livre na bancada para o curso total do bastidor sem colisões.",
    "tags": [
      "yaxis",
      "eixoy",
      "movimento",
      "pantografo",
      "mecanica",
      "operacao",
      "precisao"
    ]
  },
  {
    "id": "yarn-silicone-lubrication-lubrificacao-fios-alta-velocidade",
    "code": "Y-002",
    "letter": "Y",
    "term": "Yarn Silicone Lubrication — Lubrificação e Silicionamento de Fios para Bordados de Alta Velocidade",
    "pronunciation": "iárn sí-li-coun lu-bri-kêi-shon — lu-bri-fi-ca-são de fios com si-li-co-ne",
    "level": "Intermediário 🟡",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'yarn lubrication' (tratamento superficial com polímeros de polidimetilsiloxano em linhas de costura e bordado industrial).",
    "summary": "Aplicação de microcamada de óleo de silicone puro sobre as linhas de bordar para reduzir o aquecimento térmico, o atrito no olho da agulha e as quebras a 1.000 PPM.",
    "definition": "O Yarn Silicone Lubrication (Silicionamento de Fios / Lubrificação Têxtil de Linhas de Bordar / Silicone Thread Conditioning) é o processo industrial e prático de aplicação de uma película microscópica de emulsão de silicone fluido de alta pureza (viscosidade de 350 a 1.000 cSt) sobre os filamentos da linha de bordar superior. Essa lubrificação tem a função vital de reduzir o atrito dinâmico do fio contra as paredes metálicas dos discos tensores, estica-fios e, fundamentalmente, contra o olho da agulha durante operações de alta velocidade.",
    "technicalDetails": "A uma velocidade de 900 a 1.000 pontos por minuto, a agulha atinge temperaturas superficiais de até 180 °C devido ao atrito constante contra as fibras do tecido e da entretela. Essa temperatura extrema amolece e funde polímeros sintéticos (poliéster e poliamida), provocando desfiamento e rompimento térmico da linha. A camada de silicone reduz o coeficiente de atrito em até 70%, dissipa o calor por condução e atua como uma barreira térmica que permite que a linha deslize a frio sem sofrer degradação molecular.",
    "beginnerExplanation": "É uma gotinha mágica de silicone especial que a gente passa na linha para ela deslizar macia e lisinha pelos buraquinhos e pela agulha da máquina! Quando a máquina costura muito rápido, a agulha fica muito quente; o silicone não deixa a linha queimar nem arrebentar, fazendo a máquina bordar sem parar!",
    "howItWorks": [
      "1. A fábrica de linhas aplica a quantidade exata de silicone de alta tecnologia (típico de 3% a 5% em peso) no acabamento do cone.",
      "2. No ateliê, ao utilizar linhas antigas, metálicas ou secas, a bordadeira aplica uma gota de óleo de silicone puro na almofadinha de feltro do passador de linha.",
      "3. O fio passa pela almofada e absorve uma camada microscópica homogênea de lubrificante.",
      "4. Ao passar pelos tensores, a linha corre com resistência uniforme e sem trancos.",
      "5. No olho da agulha superaquecida a 1.000 PPM, o silicone evapora o calor e impede a fusão do poliéster.",
      "6. A linha penetra no tecido sem desfiar os filamentos e forma a laçada perfeita.",
      "7. A peça fica bordada com brilho reluzente e sem nenhuma mancha oleosa no tecido."
    ],
    "applications": [
      "Bordados em altíssima velocidade em máquinas industriais (acima de 900 PPM).",
      "Uso de linhas metálicas delicadas (douradas, prateadas e holográficas).",
      "Bordado em tecidos pesados e rígidos (lonas, sarjas grossas, couro e bonés).",
      "Recuperação de cones de linha ressecados guardados há muito tempo no ateliê."
    ],
    "characteristics": [
      "Silicone 100% puro e incolor que evapora sem manchar tecidos ou desbotar cores.",
      "Redução drástica da temperatura de atrito no olho da agulha.",
      "Estabilização da tensão da linha superior durante toda a produção."
    ],
    "commonErrors": [
      "❌ Usar óleo de máquina comum mineral ou desengripante automotivo na linha, manchando irremediavelmente a roupa do cliente.",
      "❌ Encharcar o cone de linha inteiro com excesso de silicone, fazendo a linha patinar nos tensores e perder o controle de ponto.",
      "❌ Usar silicone industrial com solventes que ressecam as peças plásticas da máquina de bordar."
    ],
    "troubleshootingTips": [
      "A linha está quebrando com a ponta derretida (uma bolinha plástica na ponta): a agulha está superaquecendo; passe o fio por um feltro com uma gota de silicone líquido puro para bordado ou reduza a velocidade da máquina.",
      "A linha dourada metálica está desfiando e acumulando no olho da agulha: aplique silicone puro no passa-fios e utilize uma agulha especial Metallic com olho maior.",
      "Apareceram pequenas sombras no tecido branco ao redor do bordado: você utilizou óleo inadequado; lave a peça com água morna e sabão neutro e utilize apenas silicone têxtil volátil de primeira linha."
    ],
    "dicaArtrelados": "Tenha sempre no ateliê um frasquinho de silicone líquido puro próprio para bordado (aquele bem transparente e sem cheiro)! Uma gotinha na esponjinha de passagem de linha é o segredo para fazer aquela linha metálica teimosa bordar lisinha e macia como manteiga!",
    "voceSabia": "As linhas de bordar modernas das melhores marcas do mundo (como Madeira, Isacord e Setta) já vêm de fábrica com uma nanocamada de silicone termofixada a vapor nos filamentos, o que garante que elas aguentem mais de 1.200 rotações por minuto sem quebrar!",
    "practicalExercise": "Pegue um cone de linha comum e passe um pedaço do fio entre os dedos para sentir o atrito. Em seguida, umedeça a ponta do dedo com uma microgota de silicone têxtil e passe novamente no fio: sinta a maciez imediata e o deslizamento suave que ele proporciona.",
    "quickSummary": "Tratamento com película microscópica de silicone puro que reduz o atrito e o calor da agulha, evitando quebras em alta velocidade.",
    "relatedTerms": [
      "Silicone Líquido",
      "Linha Metálica",
      "Aquecimento da Agulha",
      "Tensão Superior",
      "Fios de Poliéster",
      "Passa-Fios"
    ],
    "imageUrl": "/images/y002_yarn_silicone_v3.jpg?v=3",
    "imageCaption": "Prancha Técnica de Silicionamento e Lubrificação de Linhas de Bordar (Yarn Silicone Lubrication): trajeto da linha desde o cone industrial passando pelo dosador com feltro embebido em óleo de silicone puro (350 cSt), percorrendo os discos tensores e descendo até o cabeçote eletrônico com calcador de mola e agulha operando sobre o bastidor a 1.000 PPM, com legendas legíveis em português no padrão clássico do DIBE sobre fundo branco sem requadros.",
    "tags": [
      "yarnsilicone",
      "lubrificacao",
      "silicone",
      "fios",
      "manutencao",
      "qualidade",
      "agulhas"
    ]
  },
  {
    "id": "yarn-tension-gauge-tensiotrometro-dinamometro-linhas",
    "code": "Y-003",
    "letter": "Y",
    "term": "Yarn Tension Gauge — Tensiotrômetro e Dinamômetro Digital de Linha Superior e Bobina",
    "pronunciation": "iárn tên-shon guêidj — ten-si-o-trô-me-tru e di-na-mô-me-tru de li-nhas",
    "level": "Avançado 🔴",
    "category": "Ferramentas & Acessórios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'tension gauge' (medidor dinamométrico de calibração de forças de tração mecânica têxtil em gramas-força).",
    "summary": "Instrumento de precisão utilizado para medir e calibrar numericamente a tensão exata da linha superior e da caixa de bobina em gramas-força (gf).",
    "definition": "O Yarn Tension Gauge (Tensiotrômetro / Dinamômetro Têxtil para Bordado / Towa Digital Tension Meter / Upper & Lower Thread Calibrator) é um instrumento de medição metrológica mecânico ou eletrônico projetado para quantificar a força de tração exercida sobre a linha superior ou inferior da máquina de bordar. O modelo mais consagrado na indústria é o medidor japonês Towa Gauge (com versões específicas para caixa de bobina tipo 'L' e 'M' e modelos com gancho para linha superior).",
    "technicalDetails": "A estabilidade do ponto de bordado obedece à equação de equilíbrio de tensões $T_{sup} \\approx 4 \\cdot T_{inf}$. Com o Yarn Tension Gauge, a bordadeira calibra a tensão da caixa de bobina para a faixa padrão ideal de **18 a 25 gramas-força (gf)** para linhas de bobina 60wt de poliéster. Na linha superior (medida puxando o fio através da agulha com o pé-calcador abaixado), a tensão é ajustada para **100 a 130 gf** para linhas padrão 40wt. Em máquinas industriais multicabeçotes, o tensiotrômetro garante que todas as 12 ou 15 agulhas de todas as cabeças trabalhem com tensões 100% idênticas.",
    "beginnerExplanation": "É o 'termômetro' da pressão da linha da máquina! É um aparelhinho de precisão com um visor que mostra um número exato em gramas quando a gente puxa a linha. Assim, em vez de ficar adivinhando no olhômetro se a linha está apertada ou frouxa, você regula com o número exato e o bordado fica perfeito de primeira!",
    "howItWorks": [
      "1. A bordadeira insere a caixa de bobina com a carretilha dentro do medidor Towa Gauge.",
      "2. Passa a ponta da linha de bobina pelas roldanas tensoras do aparelho.",
      "3. Puxa a linha suavemente com a mão na velocidade normal de costura.",
      "4. O ponteiro ou visor digital indica o valor exato da resistência em gramas-força (ex.: 22 gf).",
      "5. Se a medição estiver fora da faixa (18-25 gf), gira o parafuso da caixa de bobina até cravar o valor.",
      "6. Para a linha superior, engata o gancho do tensiotrômetro na linha que sai do olho da agulha e puxa para aferir os 110-130 gf.",
      "7. Repete o processo em todos os cones, garantindo padrão industrial uniforme em todo o ateliê."
    ],
    "applications": [
      "Padronização técnica da tensão de todas as cabeças em fábricas e ateliês profissionais.",
      "Calibração perfeita da caixa de bobina após limpeza ou substituição de molas.",
      "Ajuste fino para bordados em tecidos nobres e sensíveis (seda, cetim, cambraia e linho).",
      "Solução rápida de problemas crônicos de linha branca da bobina subindo para a frente da peça."
    ],
    "characteristics": [
      "Escala micrométrica com graduação de 1 em 1 grama-força (gf / cN).",
      "Modelos dedicados para carretilhas domésticas e industriais (tamanhos L e M).",
      "Eliminação total da subjetividade e adivinhações manuais na regulagem da máquina."
    ],
    "commonErrors": [
      "❌ Puxar a linha do aparelho com trancos bruscos em vez de uma puxada suave e contínua, falseando a leitura do dinamômetro.",
      "❌ Fazer a medição da linha superior com o calcador levantado (com os discos tensores abertos).",
      "❌ Deixar poeira ou fiapos acumulados nas roldanas de medição do tensiotrômetro."
    ],
    "troubleshootingTips": [
      "O visor do tensiotrômetro oscila loucamente durante a puxada: há fiapo de linha preso embaixo da mola da caixa de bobina ou a linha está enrolada de forma irregular no carretel; limpe a mola com estilete e repita o teste.",
      "A linha superior marca mais de 160 gf mesmo com o botão do tensor quase todo solto: verifique se a linha não está enroscada em algum guia metálico ou enrolada no pino do estica-fio.",
      "O bordado continua com pontos frouxos mesmo marcando os gramas corretos no aparelho: verifique a calibragem da molinha estica-fio (Check Spring) da máquina."
    ],
    "dicaArtrelados": "Se você tem uma máquina multicabeçotes ou produz muito em série no seu ateliê, o tensiotrômetro (Towa Gauge) é o melhor investimento que você pode fazer! Ele acaba de vez com aquela dúvida de 'será que apertei demais ou de menos?' e deixa todos os seus bordados com o mesmo padrão de loja de shopping!",
    "voceSabia": "A fabricante japonesa Towa Corporation desenvolveu o primeiro medidor de tensão para caixas de bobina de bordado na década de 1970 a pedido dos engenheiros da Tajima, tornando-se o padrão internacional adotado por 100% dos técnicos do mundo!",
    "practicalExercise": "Se você tiver acesso a um medidor Towa, meça a tensão da sua caixa de bobina atual. Anote o valor. Em seguida, gire o parafuso em apenas 1/8 de volta no sentido horário e meça novamente: observe como um movimento quase invisível no parafuso altera a leitura em cerca de 4 a 6 gramas-força.",
    "quickSummary": "Instrumento dinamométrico de alta precisão que mede e calibra em gramas-força a tensão exata das linhas da máquina de bordar.",
    "relatedTerms": [
      "Towa Gauge",
      "Tensão Superior",
      "Caixa de Bobina",
      "Gramas-Força",
      "Mola Tensora",
      "Equilíbrio de Ponto",
      "Calibração"
    ],
    "imageUrl": "/images/y003_towa_gauge_real_v1.jpg?v=1",
    "imageCaption": "Prancha Técnica do Tensiotrômetro Towa Original para Caixa de Bobina (Towa Bobbin Tension Gauge TM-1/TM-3): alojamento de precisão para caixa de bobina metálica (tamanhos L ou M), percurso da linha através de roletes dinamométricos e mostrador analógico calibrado de 0 a 50 gf com Checagem em Verde da Faixa de Conformidade Ideal (18 a 25 gf) para bordado eletrônico de alta precisão, sem requadros e sobre fundo branco contínuo.",
    "tags": [
      "yarntensiongauge",
      "tensiotrometro",
      "towagauge",
      "dinamometro",
      "regulagem",
      "tensao",
      "ferramentas"
    ]
  },
  {
    "id": "yoke-embroidery-bordado-palas-camisaria-jaquetas",
    "code": "Y-004",
    "letter": "Y",
    "term": "Yoke Embroidery Placement — Bordado de Palas (Costas de Camisaria, Jeans, Jaquetas e Fardamentos)",
    "pronunciation": "iôuk em-brói-de-ri plêis-ment — bor-da-du de pa-las em ca-mi-sas e ja-que-tas",
    "level": "Intermediário 🟡",
    "category": "Posicionamento & Montagem",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês antigo 'geoc' (jugo/suporte sobre os ombros) que na alfaiataria e modelagem têxtil evoluiu para designar a 'pala' (o recorte anatômico superior que une os ombros e as costas de camisas e jaquetas).",
    "summary": "Técnicas de entretelamento, alinhamento anatômico e fixação em bastidor para bordar na pala superior traseira de camisas sociais, jaquetas jeans e fardamentos.",
    "definition": "O Yoke Embroidery Placement (Bordado em Palas / Centralização e Fixação de Palas Anatômicas / Shirt & Jacket Yoke Hooping) é a metodologia especializada de enquadramento, estabilização e digitalização de matrizes destinadas à pala superior das costas de peças de vestuário. Por se tratar de uma área estrutural de alta movimentação corporal (tensão muscular dos ombros e escápulas), o bordado na pala exige cuidados rigorosos de alinhamento com a costura horizontal dos ombros e escolha de entretelas que garantam conforto sem irritar a pele.",
    "technicalDetails": "A pala de camisas sociais é frequentemente confeccionada com tecido duplo (pala externa e forro interno), enquanto em jaquetas jeans ela é reforçada com costura pesada pespontada. No posicionamento, o centro vertical da matriz deve ser alinhado rigorosamente a **4,0 cm a 6,0 cm abaixo da costura da gola/colarinho** e perfeitamente centralizado em relação à costura do centro das costas. Utiliza-se entretela de recorte macia (Cutaway de 60 g/m²) ou entretela termocolante de proteção no avesso (Cover-A-Stitch / Protege-Bordado) para evitar que o verso áspero dos pontos entre em contato direto com a nuca do usuário.",
    "beginnerExplanation": "É o bordado feito naquela parte de cima das costas da camisa ou da jaqueta, bem perto da gola e dos ombros! Como essa parte fica bem visível nas costas de quem veste, o bordado tem que ficar 100% retinho e muito confortável por dentro para não pinicar o pescoço da pessoa!",
    "howItWorks": [
      "1. A bordadeira desdobra a camisa ou jaqueta e identifica a linha central da pala traseira.",
      "2. Marca o centro da pala com giz de alfaiate ou caneta fantasminha, posicionando o ponto de origem a 5 cm abaixo do colarinho.",
      "3. Posiciona a entretela de recorte macia por baixo do tecido na área da pala.",
      "4. Enquadra no bastidor ou utiliza a técnica de montagem flutuante para não amassar as costuras grossas dos ombros.",
      "5. Alinha o apontador laser da máquina exatamente sobre o traçado em cruz da pala.",
      "6. Executa o bordado com velocidade calibrada de 700 a 800 PPM.",
      "7. Finaliza recortando a entretela em formato arredondado e aplica a película termocolante macia de proteção no avesso."
    ],
    "applications": [
      "Personalização de camisas sociais corporativas para executivos, médicos e advogados.",
      "Bordado de logotipos e brasões em jaquetas jeans, jaquetas de couro e coletes.",
      "Uniformes de fardamento profissional, aviação e hotelaria de alto padrão.",
      "Camisas country, camisas xadrez e jalecos profissionais."
    ],
    "characteristics": [
      "Alinhamento anatômico de altíssima visibilidade nas costas do usuário.",
      "Tratamento suave no avesso para proteção contra atrito na nuca e ombros.",
      "Estabilidade dimensional reforçada para suportar movimentos dos braços."
    ],
    "commonErrors": [
      "❌ Bordar a matriz muito para baixo, fazendo o logotipo ficar escondido quando a pessoa senta ou dobra as costas.",
      "❌ Prender a costura grossa do ombro dentro do aro do bastidor plástico, entortando a camisa ou quebrando o bastidor.",
      "❌ Deixar nós e pontas duras de linha no avesso sem aplicar película protetora macia."
    ],
    "troubleshootingTips": [
      "O bordado na pala ficou torto em relação à gola: utilize sempre um gabarito de alinhamento com régua em 'T' apoiada nas costuras dos dois ombros para traçar a linha guia perfeitamente reta.",
      "O aro do bastidor não fecha por causa da grossura das costuras da jaqueta jeans: utilize a técnica flutuante com entretela autoadesiva (Peel & Stick) ou utilize bastidores magnéticos de fechamento automático.",
      "O cliente reclamou que o bordado pinica nas costas: passe o ferro morno aplicando uma película termocolante macia protetora (Protege-Bordado) sobre todo o verso do bordado."
    ],
    "dicaArtrelados": "Para bordar camisas sociais com elegância absoluta: mantenha o logotipo na pala com no máximo 8 a 9 cm de largura e posicione o centro exatamente 5 cm abaixo da gola. Fica discreto, moderno e com um caimento corporativo impecável!",
    "voceSabia": "A pala dupla em camisas sociais masculinas foi criada na Inglaterra vitoriana do século XIX para dar sustentação estrutural aos colarinhos duros engomados e distribuir o peso dos suspensórios sem rasgar o linho delicado da camisa!",
    "practicalExercise": "Pegue uma camisa social no seu ateliê. Dobre a camisa ao meio pelas costas alinhando as duas costuras dos ombros para achar o vinco central. Com uma fita métrica, meça 5 cm para baixo a partir do centro da gola e marque uma cruz: esse é o ponto exato para centralizar seu bastidor na pala.",
    "quickSummary": "Técnica de enquadramento e posicionamento anatômico de bordados na pala superior das costas de camisas, jaquetas e uniformes.",
    "relatedTerms": [
      "Posicionamento",
      "Gabarito de Alinhamento",
      "Protege-Bordado",
      "Camisaria",
      "Bastidor Magnético",
      "Bordado Flutuante"
    ],
    "tags": [
      "yokeembroidery",
      "pala",
      "camisaria",
      "jaquetas",
      "posicionamento",
      "uniformes",
      "enquadramento"
    ]
  },
  {
    "id": "yarn-construction-ply-torcao-cabos-linhas-filamentos",
    "code": "Y-005",
    "letter": "Y",
    "term": "Yarn Construction & Ply Count — Estrutura de Fios, Quantidade de Cabos (2-Ply / 3-Ply) e Sentido de Torção (Z-Twist)",
    "pronunciation": "iárn con-strák-shon end plái cáunt — es-tru-tu-ra de fios, ca-bos e tor-são zê",
    "level": "Intermediário 🟡",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Da tecnologia têxtil de fiação e retorção de filamentos sintéticos contínuos (Filament Plying and Twisting Dynamics).",
    "summary": "Configuração estrutural da linha de bordar que determina a quantidade de cabos torcidos juntos (2-Ply ou 3-Ply) e o sentido da torção para garantir resistência e cobertura.",
    "definition": "O Yarn Construction & Ply Count (Estrutura de Fiação / Contagem de Cabos / Retorção de Fios de Bordado / Z-Twist Filament Engineering) é a engenharia física e têxtil que define a arquitetura interna de uma linha de bordar computadorizado. A grande maioria das linhas profissionais de poliéster e viscose 40wt para bordado eletrônico é construída no padrão **2-Ply** (dois cabos retorcidos em espiral) ou **3-Ply** (três cabos retorcidos), com torção final obrigatória no sentido **'Z'** (torção à esquerda).",
    "technicalDetails": "A direção de rotação da lançadeira da máquina de bordar (que gira no sentido horário) exige que a linha superior possua torção tipo 'Z'. Se fosse utilizada uma linha com torção tipo 'S' (comum em costuras manuais antigas), o movimento rotativo contínuo da lançadeira e o atrito na agulha a 850 PPM iriam destorcer os cabos a cada agulhada, fazendo a linha abrir como um leque (Untwisting), engasgar no olho da agulha e romper. A estrutura 2-Ply confere alta flexibilidade, brilho superior e assentamento plano no tecido, enquanto a estrutura 3-Ply oferece maior resistência à tração para materiais extremamente duros.",
    "beginnerExplanation": "É o jeito como a linha é fabricada enrolando dois ou três fiozinhos bem fininhos juntos como se fosse uma trancinha! Além disso, ela é torcida para um lado certinho (chamado torção Z) para que o gancho da máquina não abra a linha no meio enquanto costura super rápido!",
    "howItWorks": [
      "1. Filamentos contínuos de poliéster 100% trilobal são extrudados e reunidos em cabos individuais.",
      "2. Dois cabos recebem uma primeira torção no sentido 'S'.",
      "3. Os dois cabos são então retorcidos juntos no sentido 'Z' formando o fio final 2-Ply 40wt.",
      "4. O fio passa por banho de termofixação para estabilizar a memória mecânica da torção.",
      "5. Recebe acabamento com cera de silicone lubrificante.",
      "6. Na máquina de bordar, a lançadeira rotativa passa pelo laço sem desmanchar a torção do fio.",
      "7. Os cabos permanecem perfeitamente unidos garantindo cobertura densa, brilho intenso e zero nós."
    ],
    "applications": [
      "Identificação do tipo correto de linha para máquinas industriais e domésticas de bordado.",
      "Seleção de linhas ultra-resistentes para bordar calçados, bolsas de lona e bonés.",
      "Escolha de fios ultrafinos (60wt 2-Ply) para digitalização de letras microscópicas.",
      "Avaliação da qualidade estrutural de lotes de linhas para evitar quebras constantes."
    ],
    "characteristics": [
      "Torção 'Z' calibrada para compatibilidade universal com lançadeiras rotativas.",
      "Construção 2-Ply equilibrada que oferece máximo brilho superficial e maciez.",
      "Alta elasticidade recuperável (recuperação elástica de até 95% após estiramento)."
    ],
    "commonErrors": [
      "❌ Usar linha de costura comum manual com torção tipo 'S' na máquina de bordar, abrindo os fios e travando a lançadeira.",
      "❌ Misturar linhas de diferentes construções e espessuras no mesmo bloco de cor, gerando relevos desiguais.",
      "❌ Puxar a linha do cone de ponta-cabeça, alterando o desenrolamento natural dos cabos."
    ],
    "troubleshootingTips": [
      "A linha está abrindo em vários cabelinhos antes de quebrar no olho da agulha: você está utilizando uma linha de baixa qualidade sem termofixação de torção ou com torção invertida; substitua por linha própria de bordado com torção Z.",
      "O bordado está parecendo ralo mesmo com densidade normal: verifique se você não está usando acidentalmente uma linha 60wt (muito fina) em vez da padrão 40wt 2-Ply.",
      "A linha fica fazendo 'laços de porquinho' (enroladinhos em espiral) ao sair do cone: coloque uma rede elástica (Thread Net) para manter a tensão de desenrolamento dos cabos uniforme."
    ],
    "dicaArtrelados": "Nunca use linha de costura comum de algodão ou linhas sem marca na sua máquina de bordar computadorizada! Linhas próprias de bordado têm a torção Z perfeita e a quantidade de cabos certa para aguentar o ritmo do ateliê sem abrir e sem deixar você na mão!",
    "voceSabia": "Para descobrir se uma linha tem torção 'Z' ou 'S', segure um pedaço de 10 cm na vertical: se as listras da espiral acompanharem a diagonal da letra 'Z' (descendo da esquerda para a direita), ela tem torção Z e é perfeita para sua máquina de bordar!",
    "practicalExercise": "Pegue um pedaço de 15 cm de linha de bordar. Tente separar a pontinha com as unhas: observe como ela é formada por dois cabos (2-Ply) perfeitamente torcidos juntos. Gire entre os dedos no sentido anti-horário e veja como eles se abrem facilmente.",
    "quickSummary": "Arquitetura dos filamentos e cabos da linha de bordar com torção Z que garante integridade mecânica durante o giro da lançadeira.",
    "relatedTerms": [
      "Torção Z",
      "Filamentos",
      "Poliéster Trilobal",
      "Lançadeira Rotativa",
      "Thread Net",
      "Linhas 40wt"
    ],
    "tags": [
      "yarnconstruction",
      "ply",
      "torcaoz",
      "linhas",
      "cabos",
      "qualidade",
      "fios"
    ]
  },
  {
    "id": "y-home-position-sensor-ponto-zero-origem-eixo-y",
    "code": "Y-006",
    "letter": "Y",
    "term": "Y-Axis Home Position & Origin Sensor — Sensor de Ponto Zero e Origem Absoluta do Eixo Y",
    "pronunciation": "uái-ék-sis hôum po-zí-shon end ó-ri-djin sén-sor — sen-sor de pon-tu zê-ru do êi-shu í-psi-lon",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do conceito de 'Homing Routine' em máquinas CNC de precisão milimétrica e automação robótica com sensores de barreira óptica.",
    "summary": "Sensor óptico ou magnético que calibra e estabelece o ponto de referência inicial zero (0,0) do eixo vertical do pantógrafo ao ligar a máquina.",
    "definition": "O Y-Axis Home Position & Origin Sensor (Sensor de Ponto Zero do Eixo Y / Chave Fim de Curso de Origem / Y-Home Optical Switch / Homing Limit Sensor) é o componente mecatrônico (geralmente um sensor óptico de fenda infravermelho ou sensor de efeito Hall magnético) responsável por informar à placa de controle da máquina a posição física zero absoluta do eixo Y.",
    "technicalDetails": "Ao ligar a máquina de bordar, o sistema executa automaticamente a rotina de 'Homing' (inicialização dos eixos). O motor do eixo Y movimenta o pantógrafo até que uma lâmina metálica (Flag/Shutter) interrompa o feixe de luz do sensor óptico de origem. Nesse instante, o contador de passos do encoder é zerado ($Y=0$). Todas as coordenadas da matriz ($+dY / -dY$) e os limites mecânicos de segurança do software (Soft Limits) são calculados a partir dessa posição absoluta, impedindo colisões catastróficas contra os batentes de ferro da máquina.",
    "beginnerExplanation": "É o sensor 'olhinho mágico' da máquina que descobre onde fica o centro e o ponto de partida do bastidor assim que você liga o interruptor! Ele garante que a máquina saiba exatamente onde está pisando para nunca bater o bastidor com força nas laterais!",
    "howItWorks": [
      "1. A bordadeira liga a máquina no botão principal.",
      "2. A controladora dispara a rotina de busca de origem (Homing Sequence).",
      "3. O pantógrafo se desloca suavemente no sentido do eixo Y em direção ao sensor.",
      "4. A aleta metálica acoplada ao trilho entra na fenda do sensor óptico e bloqueia o feixe infravermelho.",
      "5. A placa eletrônica detecta a transição de sinal elétrico de 5V para 0V e para o motor instantaneamente.",
      "6. A controladora grava a posição como a coordenada de referência física zero absoluta.",
      "7. O pantógrafo se desloca para o centro exato da área de trabalho pronto para carregar a matriz."
    ],
    "applications": [
      "Inicialização segura e calibração de fábrica de máquinas industriais e domésticas.",
      "Recuperação precisa da posição do bordado após queda de energia elétrica (Power Failure Recovery).",
      "Prevenção de colisões mecânicas através da delimitação dos limites de curso.",
      "Garantia de repetibilidade milimétrica em produções contínuas de milhares de peças."
    ],
    "characteristics": [
      "Precisão de repetibilidade de posicionamento de ±0,02 mm.",
      "Sensor óptico de estado sólido sem peças mecânicas de desgaste por atrito.",
      "Comunicação direta em tempo real com a CPU da máquina."
    ],
    "commonErrors": [
      "❌ Ligar a máquina com as mãos ou bastidores travando fisicamente o movimento livre do pantógrafo durante a inicialização.",
      "❌ Deixar acúmulo de poeira têxtil e fiapos de linha sobre a lente do sensor óptico de origem.",
      "❌ Bater objetos pesados contra o braço do pantógrafo, entortando a aleta de leitura do sensor."
    ],
    "troubleshootingTips": [
      "A máquina dá 'Erro de Eixo Y' ou 'Y-Axis Limit Error' logo ao ser ligada: limpe a fenda do sensor óptico com um pincel macio ou spray de ar comprimido para remover fiapos de linha acumulados.",
      "O bastidor bate forte no fundo da máquina ao tentar inicializar: o sensor óptico está desconectado, com cabo partido ou desalinhado; chame o técnico para verificar a fiação do sensor.",
      "O bordado começou fora de centro após reiniciar a máquina: desligue a máquina, remova o bastidor, ligue novamente e aguarde a conclusão completa da rotina de inicialização automática."
    ],
    "dicaArtrelados": "Sempre que ligar sua máquina de bordar, deixe a área ao redor da mesa totalmente livre e nunca segure o bastidor com as mãos enquanto ela faz aquele barulhinho inicial de 'se encontrar'! É nessa hora que o sensor de origem calibra a precisão de todo o seu trabalho!",
    "voceSabia": "Os sensores ópticos modernos de ponto zero conseguem detectar a posição da aleta metálica com uma precisão menor que um terço da espessura de um fio de cabelo humano!",
    "practicalExercise": "Desligue sua máquina. Remova qualquer bastidor encaixado. Ligue a máquina e observe como o pantógrafo se move automaticamente para um dos cantos e depois volta para o centro: você acabou de assistir à rotina de leitura do sensor de origem do eixo Y.",
    "quickSummary": "Dispositivo sensor que calibra a coordenada zero absoluta do eixo vertical do pantógrafo na inicialização da máquina.",
    "relatedTerms": [
      "Homing",
      "Ponto Zero",
      "Pantógrafo",
      "Eixo Y",
      "Encoder",
      "Sensor Óptico",
      "Limite de Curso"
    ],
    "tags": [
      "yhomeposition",
      "sensororigem",
      "pontozeo",
      "eixoy",
      "mecanica",
      "eletronica",
      "calibracao"
    ]
  },
  {
    "id": "yarn-count-denier-rating-titulacao-fios-bordado",
    "code": "Y-015",
    "letter": "Y",
    "term": "Yarn Count & Denier Rating — Titulação, Espessura e Gramatura de Fios (Tex, Nm, Denier e Classificação 40wt / 60wt)",
    "pronunciation": "iárn cáunt end dê-nier rêi-ting — ti-tu-la-são, es-pes-su-ra e gra-ma-tu-ra de fios",
    "level": "Avançado 🔴",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês 'denier' (antiga moeda francesa usada como padrão de peso de fios de seda) e do sistema internacional de metrologia têxtil (Tex e Número Métrico Nm).",
    "summary": "Sistemas internacionais de medição da espessura e densidade linear das linhas de bordar que determinam a densidade correta da matriz e o calibre da agulha.",
    "definition": "O Yarn Count & Denier Rating (Sistemas de Titulação Têxtil e Classificação Numérica de Linhas / Linear Mass Density / Tex, Nm, Denier & Weight System) é o conjunto de convenções metrológicas padronizadas que quantificam a espessura, o peso linear e o diâmetro dos filamentos têxteis utilizados no bordado eletrônico. Os três sistemas principais são: o **Denier** (peso em gramas de 9.000 metros de fio), o **Tex** (peso em gramas de 1.000 metros de fio) e o **Weight System (wt)** (sistema indireto onde números maiores indicam linhas progressivamente mais finas).",
    "technicalDetails": "No padrão industrial universal de bordado: a linha clássica padrão é a **40 wt** (correspondente a Denier 120/2 ou Tex 27, com diâmetro médio de 0,20 mm), projetada para densidades de matriz entre 0,38 mm e 0,42 mm com agulhas calibre 75/11. A linha ultrafina de detalhamento e microletras é a **60 wt** (Denier 75/2 ou Tex 18, com diâmetro de 0,14 mm), que requer aumento de densidade na matriz para 0,28 mm a 0,32 mm e agulhas calibre 65/9. Já a linha de relevo pesado é a **30 wt** (Denier 180/2 ou Tex 40), que exige densidade mais aberta (0,48 mm a 0,55 mm) e agulhas calibre 90/14.",
    "beginnerExplanation": "É a numeração que diz se a linha é fininha, média ou grossa! A linha comum que todo mundo usa no dia a dia do ateliê é a número 40 (40wt). Se você quiser bordar letrinhas minúsculas de 4 milímetros bem legíveis, você usa a linha 60wt que é super fininha com agulha fina; se quiser um bordado bem encorpado e volumoso, usa a linha 30wt que é mais grossa!",
    "howItWorks": [
      "1. A bordadeira analisa os detalhes do bordado: letras normais ou textos microscópicos de etiquetas.",
      "2. Escolhe a espessura da linha adequada: 40wt para logotipos normais ou 60wt para microletras.",
      "3. Ajusta o calibre da agulha de acordo com o fio: 75/11 para linha 40wt ou 65/9 para linha 60wt.",
      "4. Configura a densidade de pontos no software (espaçamento de 0,40 mm para 40wt ou 0,30 mm para 60wt).",
      "5. A máquina borda os pontos com cobertura perfeita sem encavalar fios nem deixar o tecido aparente.",
      "6. O texto pequeno fica perfeitamente legível e nítido como se tivesse sido impresso no tecido.",
      "7. A peça atinge o padrão visual de alta resolução exigido por marcas corporativas de luxo."
    ],
    "applications": [
      "Bordado de microletras de 3 mm a 5 mm em jalecos médicos e etiquetas técnicas usando linha 60wt.",
      "Produção geral de uniformes, toalhas e enxovais corporativos utilizando a linha padrão 40wt.",
      "Bordados rústicos, contornos marcados e imitação de bordado manual em jeans com linha 30wt.",
      "Especificação precisa de compras de estoques em fábricas de bordado computadorizado."
    ],
    "characteristics": [
      "Relação matemática precisa entre peso linear, diâmetro e cobertura de ponto.",
      "Compatibilidade estrita entre o olho da agulha (calibre) e o diâmetro do fio.",
      "Padronização global com tabelas de conversão oficiais entre Tex, Nm e Denier."
    ],
    "commonErrors": [
      "❌ Tentar usar linha fina 60wt com matriz programada para linha 40wt sem fechar a densidade, deixando o bordado ralo e com buracos.",
      "❌ Passar linha grossa 30wt em agulha fininha 65/9, esmagando o fio no olho da agulha e quebrando a linha.",
      "❌ Usar linha 60wt para preenchimentos grandes inteiros de fundo, gastando milhares de pontos extras sem necessidade."
    ],
    "troubleshootingTips": [
      "As letras minúsculas de 4 mm do logotipo estão saindo borradas e ilegíveis: troque a linha daquela cor para linha de microletras 60wt, coloque agulha 65/9 e ajuste o espaçamento para 0,30 mm no software.",
      "A linha 30wt está arrebentando a toda hora no início do ponto: substitua a agulha por uma agulha de olho largo e calibre 90/14 (Topstitch ou Titanium) e reduza ligeiramente a tensão superior.",
      "O bordado com linha normal 40wt ficou duro e muito pesado: aumente o espaçamento de pontos no software de 0,36 mm para 0,42 mm."
    ],
    "dicaArtrelados": "Tenha sempre no seu ateliê pelo menos um cone de linha preta e um cone de linha branca na espessura 60wt com uma cartela de agulhas 65/9! Quando um cliente pedir jaleco com nomes minúsculos ou detalhes delicados, você fará uma microletra perfeita que vai deixar seus concorrentes de queixo caído!",
    "voceSabia": "O sistema Denier foi criado originalmente para pesar os fios de seda crua na França medieval: 1 Denier equivalia ao peso de uma meada de 9.000 metros de seda que pesava exatamente 1 grama!",
    "practicalExercise": "Pegue um cone de linha comum 40wt e um cone de linha 60wt (ou linha de bobina fina). Coloque um fio de cada lado a lado sobre uma folha de papel branco: compare a diferença visível de espessura e sinta com os dedos a maciez do fio 60wt.",
    "quickSummary": "Sistemas métricos de classificação de espessura de fios (40wt para uso geral e 60wt para microletras) que determinam a densidade correta da matriz e o calibre da agulha.",
    "relatedTerms": [
      "Denier (dtex)",
      "Microletras",
      "Linha 60wt",
      "Densidade de Ponto",
      "Calibre de Agulha",
      "Tex / Nm"
    ],
    "tags": [
      "yarncount",
      "denier",
      "titulacao",
      "fios",
      "microletras",
      "densidade",
      "agulhas"
    ]
  },
  {
    "id": "yellowing-prevention-stabilizers-prevencao-amarelamento-entretelas",
    "code": "Y-016",
    "letter": "Y",
    "term": "Yellowing Prevention in Stabilizers — Prevenção Química e Armazenamento Anti-Amarelamento em Entretelas e Tecidos Brancos",
    "pronunciation": "iê-lou-ing pri-vên-shon in stêi-bi-lái-zerz — pre-ven-são de a-ma-re-la-men-tu em en-tre-te-las",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'yellowing' (amarelamento ou degradação fotoquímica oxidativa de polímeros celulósicos e resinas sintéticas) e 'phenolic yellowing' (amarelamento fenólico em produtos têxteis brancos).",
    "summary": "Cuidados químicos e térmicos de estocagem de entretelas e peças bordadas para evitar o surgimento de manchas amareladas ao longo do tempo.",
    "definition": "O Yellowing Prevention in Stabilizers (Prevenção de Amarelamento Fenólico e Foto-Oxidação em Estabilizadores / Anti-Yellowing Storage & Acid-Free Non-Woven Maintenance) é o conjunto de protocolos de seleção de materiais, termofixação e armazenagem destinados a prevenir a oxidação e a degradação química das fibras de entretelas não tecidas (TNT) e termocolantes que possam transferir manchas amareladas ou castanhas para peças brancas de enxoval (como percal, fustão, cambraia de linho e pique de algodão) após meses de confecção.",
    "technicalDetails": "O amarelamento têxtil ocorre principalmente por dois mecanismos: a foto-oxidação da celulose e lignina presentes em entretelas baratas de polpa de madeira reciclada e a reação de **Amarelamento Fenólico (Phenolic Yellowing)**, onde antioxidantes BHT (Butil-Hidroxitolueno) presentes em sacos plásticos de polietileno de baixa qualidade reagem com gases de dióxido de nitrogênio ($NO_2$) do ar ambiente, formando complexos amarelados (estilbenoquinonas). Para eliminar esse risco, utilizam-se entretelas 100% de poliéster puro ou celulose purificada 'Acid-Free' (livres de ácido) com pH neutro (pH 6,5 a 7,5) e embalagens de polipropileno isentas de BHT.",
    "beginnerExplanation": "É o cuidado especial com a entretela e com o tecido para que a toalhinha de batizado ou a roupinha de bebê branquinha não fique com aquelas manchas amarelas horríveis depois de guardada no armário! Usando entretelas boas e guardando em sacos plásticos certos, o enxoval continua branco e novinho por anos!",
    "howItWorks": [
      "1. O ateliê seleciona entretelas rasgáveis e de recorte fabricadas com 100% de fibras sintéticas puras e livres de ácido.",
      "2. As entretelas são armazenadas em armários escuros e ventilados, protegidas contra a luz solar direta e umidade.",
      "3. Durante a confecção, a bordadeira remove completamente as sobras visíveis de entretela do avesso da peça.",
      "4. Para enxovais de bebês brancos, faz-se o enxágue das sobras de entretelas hidrossolúveis com água morna limpa.",
      "5. As peças finalizadas são embaladas em sacos plásticos de polipropileno cristal transparente sem BHT.",
      "6. A peça chega à cliente com brancura óptica radiante e pH quimicamente balanceado.",
      "7. Mesmo após anos guardado no guarda-roupa da família, o bordado permanece com o fundo impecavelmente branco."
    ],
    "applications": [
      "Enxovais de maternidade brancos, mantas de batizado, vestidos de noiva e toalhas de primeira comunhão.",
      "Armazenamento de rolos de entretela no estoque do ateliê em regiões litorâneas ou muito úmidas.",
      "Bordados em peças de linho puro, cambraia e algodão egípcio de altíssimo valor agregado.",
      "Embalagem e envio de produtos de luxo por e-commerce com garantia de conservação prolongada."
    ],
    "characteristics": [
      "Fibras virgens purificadas livres de ácido (Acid-Free) e sem resinas aromáticas instáveis.",
      "Resistência à oxidação térmica durante a passagem a ferro morno.",
      "Isenção de aditivos fenólicos voláteis (BHT-Free) em plásticos de proteção."
    ],
    "commonErrors": [
      "❌ Usar entretelas baratas de fundo de quintal feitas com papel reciclado ácido para bordar mantas brancas de batizado.",
      "❌ Deixar peças brancas bordadas guardadas dentro de caixas de papelão cru marrom, que soltam vapores ácidos e amarelam o tecido.",
      "❌ Passar o ferro de passar em temperatura excessiva sobre a entretela sintética, queimando e caramelizando as resinas plásticas no avesso."
    ],
    "troubleshootingTips": [
      "A manta de bebê branca apareceu com um quadrado amarelado exatamente no formato da entretela após 6 meses no armário: a entretela utilizada era ácida ou continha resinas fenólicas; lave a peça com sabão neutro e percarbonato de sódio morno (alvejante sem cloro) e substitua seus fornecedores por entretelas certificadas livres de ácido.",
      "A entretela hidrossolúvel deixou uma mancha dura e amarelada após secar: o plástico hidrossolúvel não foi completamente enxaguado; enxágue a peça em água corrente abundante e deixe de molho por 10 minutos antes de estender à sombra.",
      "Rolos de entretela no ateliê estão ficando amarelados nas pontas: guarde os rolos sempre em pé, envolvidos em sacos plásticos de polipropileno limpos dentro de armários fechados longe de janelas ensolaradas."
    ],
    "dicaArtrelados": "Para peças nobres brancas de batizado e noivas: use sempre entretelas rasgáveis de poliéster puro de primeira linha e embale as peças prontas em sacos de polipropileno (aquele plástico brilhante e transparente que faz barulhinho!). Nunca guarde peças brancas em caixas de papelão comum!",
    "voceSabia": "O fenômeno do amarelamento fenólico foi desvendado na década de 1980 na Inglaterra, quando milhares de camisas brancas embaladas para grandes lojas de departamentos amarelaram misteriosamente dentro dos contêineres de transporte apenas por causa do tipo de plástico dos sacos!",
    "practicalExercise": "Inspecione os retalhos de entretela guardados no seu ateliê há mais de 6 meses. Se algum deles estiver com bordas escuras ou amareladas, descarte esse lote e substitua por entretelas de alta qualidade livres de resinas oxidáveis.",
    "quickSummary": "Protocolos de seleção de entretelas livres de ácido e cuidados de embalagem para evitar manchas amareladas em tecidos e bordados brancos.",
    "relatedTerms": [
      "Entretela sem Ácido (Acid-Free)",
      "Amarelamento Fenólico",
      "Enxoval de Bebê",
      "Polipropileno",
      "Entretela Hidrossolúvel",
      "Conservação Têxtil"
    ],
    "tags": [
      "yellowingprevention",
      "amarelamento",
      "entretelas",
      "conservacao",
      "enxoval",
      "atelie",
      "qualidade"
    ]
  },
  {
    "id": "yo-yo-tension-drop-test-teste-queda-caixa-bobina",
    "code": "Y-017",
    "letter": "Y",
    "term": "Yo-Yo Tension Drop Test — Teste de Queda Livre Tipo Io-Iô para Calibração Dinâmica da Caixa de Bobina",
    "pronunciation": "iô-iô tên-shon dróp têst — tês-te de que-da li-vre iô-iô pa-ra cai-sha de bo-bi-na",
    "level": "Iniciante 🟢",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do brinquedo tradicional 'io-iô' (movimento rítmico de descida e retenção gravitacional) e das práticas clássicas de oficina de mestres mecânicos de máquinas de bordar industriais.",
    "summary": "Método manual prático onde a caixa de bobina é suspensa pela linha e deve descer apenas de 2 a 5 cm com um leve toque do pulso, aferindo a tensão ideal da linha inferior.",
    "definition": "O Yo-Yo Tension Drop Test (Teste de Suspensão Gravitacional Io-Iô / Drop Test da Caixa de Bobina / Bobbin Case Gravity Calibrator) é o método empírico padronizado mundialmente utilizado por bordadeiras e técnicos de manutenção para regular e conferir com rapidez a pressão exercida pela mola tensora da caixa de bobina sobre a linha inferior de poliéster 60wt (Bobbin Thread), sem a necessidade imediata de um dinamômetro digital Towa.",
    "technicalDetails": "Ao segurar a ponta da linha de bobina com a caixa de bobina suspensa no ar na vertical: sob a ação exclusiva da força peso da caixa (massa aproximada de 18 a 22 gramas), o conjunto **não deve escorregar** (tensão estática suficiente). Ao aplicar um movimento suave e seco de pulso (Drop impulso para baixo imitando um io-iô), a mola tensora deve ceder ligeiramente, liberando linha para que a caixa desça entre **2,0 cm e 5,0 cm** e pare imediatamente por atrito viscoso. Isso corresponde a uma força de retenção calibrada de **18 a 25 gramas-força (gf)**, a faixa ideal para bordado eletrônico.",
    "beginnerExplanation": "É o jeito mais fácil e famoso do mundo para regular a caixinha de bobina da máquina! Você segura a pontinha da linha com os dedos e deixa a caixinha pendurada no ar. Ela tem que ficar paradinha; aí você dá um toquezinho suave no pulso para cima e para baixo como se fosse um io-iô: a caixinha deve descer só um pouquinho (uns 3 dedinhos) e parar sozinha. Se ela despencar até o chão, está frouxa; se não descer nada nem dando tranco, está apertada demais!",
    "howItWorks": [
      "1. A bordadeira insere a bobina de linha cheia dentro da caixa de bobina metálica.",
      "2. Passa a linha pela fenda lateral e por baixo da lâmina da mola de tensão até sair pelo guia.",
      "3. Segura a ponta do fio com a ponta dos dedos polegar e indicador, deixando a caixa suspensa no ar.",
      "4. Observa: a caixa deve permanecer suspensa e estática no ar sem desenrolar sozinha.",
      "5. Dá um leve movimento de pulso para baixo e para cima (toque de io-iô).",
      "6. A caixa de bobina desce suavemente entre 2 cm e 4 cm e trava imediatamente.",
      "7. Se descer demais, aperta-se o parafuso maior em 1/8 de volta; se não descer, afrouxa-se 1/8 de volta.",
      "8. Instala-se a caixa na máquina com a certeza de uma tensão de fundo perfeita."
    ],
    "applications": [
      "Regulagem diária rápida da caixa de bobina antes de iniciar os trabalhos do dia no ateliê.",
      "Ajuste após trocar de marca ou espessura da linha de bobina inferior.",
      "Eliminação de problemas de linha de bobina branca subindo para a frente do bordado.",
      "Manutenção e limpeza de resíduos de fiapos sob a mola tensora da caixa."
    ],
    "characteristics": [
      "Método 100% prático que não exige ferramentas eletrônicas ou dinamômetros caros.",
      "Aferição rápida em menos de 10 segundos diretamente na bancada.",
      "Equivalência direta à faixa operacional de 18 a 25 gramas-força de tração."
    ],
    "commonErrors": [
      "❌ Girar o parafuso de regulagem da mola dando 3 voltas completas de uma vez, espanando ou soltando o parafuso minúsculo no chão.",
      "❌ Fazer o teste com fiapo de linha preso embaixo da mola tensora, falseando completamente a leitura.",
      "❌ Mexer no parafuso menor de fixação em vez de regular o parafuso maior de tensão da mola."
    ],
    "troubleshootingTips": [
      "A caixinha de bobina despenca direto até a mesa assim que você levanta a linha: a tensão está frouxa demais ou há fiapo de linha sob a mola; passe a ponta de uma agulha ou estilete para limpar a sujeira sob a mola e aperte o parafuso maior no sentido horário em 1/4 de volta.",
      "Você sacode o pulso com força e a caixinha não desce nem 1 milímetro: a tensão está excessivamente apertada; gire o parafuso maior no sentido anti-horário em 1/8 de volta até ela descer suavemente com o toque de io-iô.",
      "A linha branca da bobina está aparecendo em cima das letras do bordado: a linha da bobina está frouxa ou a linha de cima está apertada demais; faça o teste do Io-Iô na caixa de bobina para calibrar o peso correto."
    ],
    "dicaArtrelados": "Lembre-se sempre da regra do relógio para regular a caixa de bobina: mexa no parafuso maior apenas 'um tiquinho de nada', como se fosse de 15 em 15 minutos no ponteiro do relógio! Um movimentinho minúsculo já faz uma diferença enorme na tensão!",
    "voceSabia": "O teste do Io-Iô é ensinado nas escolas de mecânica têxtil no Japão, na Alemanha e no Brasil há mais de 70 anos e continua sendo o teste prático de bancada mais confiável de todo o setor!",
    "practicalExercise": "Tire a caixa de bobina da sua máquina agora. Coloque uma bobina cheia e faça o teste do Io-Iô segurando a pontinha da linha. Dê um leve toquezinho de pulso e observe a descida: regule o parafuso até que ela desça exatamente 3 centímetros com suavidade.",
    "quickSummary": "Teste prático de suspensão gravitacional para regular a tensão da caixa de bobina com movimentos suaves de pulso sem precisar de aparelhos.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Tensão Inferior",
      "Towa Gauge",
      "Linha de Bobina (60wt)",
      "Mola Tensora",
      "Regulagem de Ponto"
    ],
    "tags": [
      "yoyotest",
      "caixadebobina",
      "regulagem",
      "tensao",
      "manutencao",
      "atelie",
      "mecanica"
    ]
  },
  {
    "id": "y-axis-frame-clearance-curso-tubular-bone-bolsas",
    "code": "Y-018",
    "letter": "Y",
    "term": "Y-Axis Frame Clearance & Tubular Arm Limits — Margem de Curso do Eixo Y e Limites de Folga Mecânica em Braços Tubulares de Bonés e Bolsas",
    "pronunciation": "uái-ék-sis frêim clíar-ens — mar-jem de cur-su do êi-shu í-psi-lon em bra-sos tu-bu-la-res",
    "level": "Avançado 🔴",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'clearance' (espaço livre de segurança dimensional contra colisões mecânicas) e 'tubular chassis frame' (chassi com braço cilíndrico saliente para bordado de peças prontas).",
    "summary": "Limites físicos de movimentação vertical do pantógrafo em bastidores de boné e bolsas tubulares para evitar batidas destrutivas contra o corpo da máquina.",
    "definition": "O Y-Axis Frame Clearance & Tubular Arm Limits (Margem de Segurança e Folga de Curso Longitudinal no Eixo Y / Cap Frame & Tubular Cylinder Collision Boundary / Pantograph Over-Travel Protection) é o parâmetro geométrico e eletrônico que delimita o curso útil máximo do pantógrafo no sentido anteroposterior durante o uso de bastidores cilíndricos e sistemas rotativos de bonés (Cap Frames). Como o bastidor de boné se projeta para a frente ao redor do braço tubular da máquina, o espaço mecânico livre no eixo Y é restrito a uma janela de 50 mm a 75 mm de altura.",
    "technicalDetails": "Se a matriz programada contiver elementos vetoriais ou pontos de salto que ultrapassem o limite de curso superior ($Y_{max}$) ou inferior ($Y_{min}$), a estrutura metálica do bastidor ou a aba rígida do boné colidirá violentamente contra o corpo do cabeçote ou contra a base cilíndrica da lançadeira. As máquinas industriais modernas utilizam microchaves ópticas de fim de curso (Optical Limit Switches) e software de checagem de perímetro (Cap Mode Safety Envelope) que forçam a matriz a operar dentro de um campo seguro calibrado (típico de 270° de largura por 55 mm a 65 mm de altura máxima no eixo Y).",
    "beginnerExplanation": "É o limite de segurança de altura que a máquina tem quando você está bordando bonés ou bolsas fechadas! Como o boné é curvo e tem a aba dura na frente, o desenho não pode ser alto demais no sentido vertical, senão o bastidor de ferro bate na carcaça da máquina. O limite de segurança garante que a máquina borde o boné inteiro sem bater em nada!",
    "howItWorks": [
      "1. O operador instala o dispositivo de boné (Cap Driver) e o bastidor rotativo de 270° no pantógrafo.",
      "2. No painel digital da máquina, seleciona-se o modo 'Cap Frame / Bastidor de Boné'.",
      "3. O software da máquina ativa automaticamente as travas de segurança de curso reduzido no eixo Y.",
      "4. Carrega-se a matriz de boné (com altura máxima respeitando entre 50 mm e 60 mm).",
      "5. A máquina faz o traçado automático do laser (Perimeter Trace) percorrendo o contorno do desenho.",
      "6. O operador confirma visualmente que a aba e o aro de metal passam com mais de 15 mm de folga do cabeçote.",
      "7. O bordado no boné é executado com velocidade calibrada de 650 PPM com segurança total."
    ],
    "applications": [
      "Bordados em bonés estruturados de 6 gomos, bonés aba curva e viseiras esportivas.",
      "Bordados em peças tubulares prontas como mangas de camisa, pernas de calça e bolsas de viagem.",
      "Bordados em calçados, tênis e mochilas montadas no braço cilíndrico livre.",
      "Configuração de zonas de segurança em máquinas industriais multicabeçotes."
    ],
    "characteristics": [
      "Envelope de segurança de altura vertical reduzido (máximo de 50 a 65 mm no eixo Y).",
      "Intertravamento eletrônico por sensor óptico de fim de curso (Limit Switch).",
      "Ajuste automático de orientação da matriz para rotação de 180° no painel (Cap Mode)."
    ],
    "commonErrors": [
      "❌ Tentar bordar logotipos de 8 cm de altura em bonés aba curva, fazendo o bastidor de metal bater no cabeçote da máquina.",
      "❌ Esquecer de ativar a função 'Modo Boné' no painel da máquina após montar o bastidor rotativo.",
      "❌ Não prender a aba do boné com as presilhas e travas elásticas laterais, deixando a aba subir e colidir na agulha."
    ],
    "troubleshootingTips": [
      "A máquina exibe erro 'Y-Limit Error / Cap Over-Travel' ao tentar iniciar a matriz de boné: a altura do desenho ultrapassou o limite do bastidor; reduza a altura da matriz no software para no máximo 55 mm a 60 mm.",
      "O bastidor de boné bateu na barra de agulha durante o traçado: desligue a máquina no botão de emergência, verifique se o bastidor foi encaixado até o clique final no eixo do Cap Driver e recalibre a posição central de origem (0,0).",
      "A agulha quebrou ao passar perto da aba do boné: prenda a aba com fita adesiva de papel ou use a mola elástica de contenção de aba do bastidor."
    ],
    "dicaArtrelados": "A regra de ouro para bordar bonés sem sustos: nunca programe logotipos com mais de 5,5 cm a 6,0 cm de altura! Mantenha o desenho nessa faixa de altura e faça sempre o teste do traçado no painel com o laser aceso antes de dar o Start!",
    "voceSabia": "Os primeiros bastidores especiais de boné de 270 graus foram criados na década de 1980 pela japonesa Tajima para atender a febre mundial dos bonés da liga de beisebol norte-americana (MLB)!",
    "practicalExercise": "Coloque o bastidor de boné na sua máquina e carregue uma matriz pequena de 5 cm de altura. Aperte o botão de Trace (Traçado) e observe a folga entre o aro de metal e o cabeçote: comprove como a folga de segurança mantém o trabalho 100% livre de colisões.",
    "quickSummary": "Limites de curso vertical do pantógrafo que garantem que bastidores tubulares de bonés e bolsas operem sem bater na carcaça da máquina.",
    "relatedTerms": [
      "Bastidor de Boné (Cap Frame)",
      "Braço Tubular",
      "Cap Driver",
      "Limit Switch",
      "Envelope de Segurança",
      "Trace com Laser"
    ],
    "tags": [
      "yaxisclearance",
      "bone",
      "capframe",
      "tubular",
      "seguranca",
      "operacao",
      "pantografo"
    ]
  },
  {
    "id": "y-019-y-axis-pantograph-servo-belt-tensioning",
    "code": "Y-019",
    "letter": "Y",
    "term": "Y-Axis Pantograph Dynamics & Servo-Belt Tensioning (Mecânica e Tensão de Correias do Eixo Y no Pantógrafo)",
    "pronunciation": "uái-ék-sis pan-to-gráf dai-ná-miks end ser-vo-belt ten-xio-ning",
    "level": "Avançado 🔴",
    "category": "Componentes & Mecânica da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego 'pantos' (tudo) e 'graphein' (escrever/desenhar), aliado ao sistema cartesiano cartesiano 'Y' e engenharia de servomecanismos CNC.",
    "summary": "Calibração e ajuste de frequência sonora de tensão das correias síncronas de poliuretano com alma de aço do eixo Y para eliminar folgas e perdas de passo.",
    "definition": "O Y-Axis Pantograph Dynamics & Servo-Belt Tensioning (Sincronização Mecatrônica do Eixo Longitudinal Y, Calibração de Frequência Acústica de Correias e Compensação de Inércia de Carga) é o protocolo mecânico e dinâmico de ajuste da tração nas correias dentadas síncronas de alta performance (HTD / STD de 25 a 32 mm com cordonéis internos de aço ou kevlar) responsáveis pelo movimento do eixo Y. Como o eixo Y carrega todo o peso da viga transversal mais os bastidores e os tecidos, sua inércia é até 3 vezes maior do que a do eixo X. A calibração exige o tensionamento exato medido por frequencímetro acústico (faixa áurea de 65 Hz a 78 Hz) para evitar o efeito de chicoteamento (*belt whipping*), ressonâncias harmônicas e desencontros milimétricos entre o contorno e o preenchimento da matriz.",
    "technicalDetails": "Módulo de elasticidade de correias de poliuretano AT5/AT10. Tensão estática recomendada: 120 a 160 N. Frequência de ressonância natural do vão livre: 70 Hz ± 5 Hz. Torque de retenção do servomotor AC: 2.5 a 4.0 N·m com encoder absoluto de 24 bits.",
    "beginnerExplanation": "Sabe quando você borda um desenho e o contorno preto de cima ou de baixo não bate certinho no desenho colorido, ficando torto ou com um vão branco? Muitas vezes isso acontece porque a correia de borracha que puxa o braço da máquina para frente e para trás (o eixo Y) está frouxa como uma corda velha! Ajustar a tensão da correia é como afinar uma corda de violão: ela precisa ficar firme no ponto certo para que o bastidor ande com precisão perfeita sem tremer nem sair do lugar!",
    "howItWorks": [
      "1. A máquina de bordar é desligada e o pantógrafo é posicionado na metade do seu curso vertical.",
      "2. O técnico utiliza um medidor de tensão acústico ou dinamômetro de precisão posicionado no meio da correia do eixo Y.",
      "3. Dá-se um leve toque na correia para fazê-la vibrar como uma corda musical; o aparelho lê a frequência sonora em Hertz.",
      "4. Soltam-se os parafusos de trava do mancal esticador e ajusta-se o fuso tensor até atingir a frequência de 72 Hz.",
      "5. Reapertam-se os parafusos com torquímetro calibrado.",
      "6. Executa-se um teste de matriz geométrica com círculos e quadrados concêntricos a 850 PPM.",
      "7. Verifica-se o alinhamento de contorno: o fechamento vertical fica com tolerância zero de erro (desvio < 0.05 mm)."
    ],
    "applications": [
      "Manutenção preventiva semestral de máquinas de bordar industriais e semi-industriais.",
      "Eliminação de falhas de contorno e sombras brancas em brasões e letras de uniformes.",
      "Estabilização de bastidores pesados em trabalhos de jaquetas de couro e cortinas.",
      "Calibração após substituição de correias desgastadas ou recondicionamento de motores."
    ],
    "characteristics": [
      "Elimina folgas mecânicas (*backlash*) e desalinhamento entre contornos e preenchimentos.",
      "Reduz ruídos mecânicos e vibrações na estrutura da máquina em altas rotações.",
      "Aumenta a vida útil dos rolamentos e polias dos servomotores."
    ],
    "commonErrors": [
      "❌ Apertar a correia com força excessiva (> 95 Hz), sobrecarregando e quebrando o eixo do servomotor.",
      "❌ Deixar a correia excessivamente solta (< 50 Hz), causando saltos de dente da polia e perda de passos.",
      "❌ Lubrificar a correia dentada com graxa ou óleo comum (o óleo decompõe o poliuretano e faz a correia esticar)."
    ],
    "troubleshootingTips": [
      "O contorno do bordado está descentralizado apenas na parte superior e inferior: a correia do eixo Y está frouxa; reaperte o mancal esticador até atingir a firmeza correta.",
      "A máquina está emitindo um zumbido agudo ou chiado contínuo durante o movimento vertical: a correia do eixo Y está esticada demais; afrouxe ligeiramente o tensionador.",
      "O bastidor pula pontos e perde a posição de origem após um salto longo: verifique se os dentes da correia não estão desgastados ou com fiapos presos na polia dentada."
    ],
    "dicaArtrelados": "Para fazer um teste rápido de correia sem ferramentas caras: empurre a correia do eixo Y no centro do vão livre com o dedo polegar. Ela deve ceder no máximo entre 8 mm e 10 mm com pressão média. Se ceder mais do que isso, chame seu técnico para o reaperto preventivo!",
    "voceSabia": "As correias dentadas com cordonéis de aço usadas no pantógrafo de bordado suportam uma força de tração instantânea de mais de 450 kg sem esticar nem 1 décimo de milímetro!",
    "practicalExercise": "Borde uma matriz de teste contendo um quadrado de 10 x 10 cm com preenchimento tatami e um contorno em ponto cheio. Observe se as bordas superior e inferior do contorno encaixam perfeitamente sobre o tatami: se houver vão branco, há folga no eixo Y.",
    "quickSummary": "Y-Axis Servo-Belt Tensioning é o ajuste dinâmico de tração das correias síncronas verticais do pantógrafo para garantir alinhamento perfeito de contornos sem folgas mecânicas.",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "Universal",
      "density": "Frequência de tensão da correia: 65 Hz a 78 Hz (Tensão: 140 N)"
    },
    "relatedTerms": [
      "Pantógrafo",
      "Eixo Y (Translação Vertical)",
      "Correia Síncrona",
      "Backlash (Folga Mecânica)",
      "Perda de Passos (Step Loss)"
    ],
    "tags": [
      "y-019",
      "eixoy",
      "correias",
      "pantografo",
      "mecanica",
      "servomotor",
      "alinhamento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE DIVISION. Pantograph Y-Drive System & Timing Belt Tension Specifications. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. Mechanical Alignment and Drive Belt Resonance Testing. Ichinomiya, 2021.",
      "ARTRELADOS. Engenharia Mecânica, Dinâmica de Eixos e Manutenção Preventiva de Pantógrafos. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-020-y-junction-branching-in-digitizing",
    "code": "Y-020",
    "letter": "Y",
    "term": "Y-Junction Branching in Digitizing (Ramificação em Y e Otimização de Percurso Vetorial sem Cortes)",
    "pronunciation": "uái-djonk-shon brän-ching in di-dji-tai-zing",
    "level": "Avançado 🔴",
    "category": "Programação e Digitalização de Matrizes",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 'branching' (ramificação de galhos de árvores) e 'Y-junction' (bifurcação topológica em formato de Y). Teoria dos grafos e otimização matemática de caminhos de Euler.",
    "summary": "Algoritmo vetorial no software de matrizes que une objetos ramificados em Y (galhos, letras cursivas e arabescos) em uma costura contínua de ida e volta, sem nenhum corte de linha.",
    "definition": "O Y-Junction Branching in Digitizing (Automated Path Branching & Continuous Top-and-Bottom Sequencing / Euler Path Vectorization) é a técnica avançada de programação de matrizes em que múltiplos segmentos de ponto cheio ou ponto corrido conectados em bifurcações tipo 'Y' são compilados como uma única entidade contínua. O algoritmo calcula automaticamente as costuras de viagem sob o subponto (underlay travel) até a ponta do primeiro braço do Y, borda a cobertura em cetim no caminho de retorno até a junção central, viaja pelo segundo braço e finaliza o tronco principal. Isso reduz o tempo de máquina em até 40% ao eliminar dezenas de cortes de linha e arremates desnecessários em arabescos, fontes caligráficas e folhagens botânicas.",
    "technicalDetails": "Baseado na teoria matemática dos grafos e no Algoritmo de Fleury para grafos eulerianos. O software gera automaticamente uma camada oculta de pontos de ancoragem (*traveling underlay*) com passo de 2.0 mm a 2.5 mm posicionada exatamente no eixo neutro central das colunas, garantindo cobertura total pelos pontos cheios subsequentes.",
    "beginnerExplanation": "Sabe quando a máquina está bordando um galho de árvore com vários raminhos ou uma letra cheia de voltinhas, e a cada pontinha ela para, dá nó, corta a linha e pula para o outro lado? Isso faz o bordado demorar uma eternidade e enche a peça de nós no avesso! A ramificação em Y é um comando esperto no programa de computador que faz a máquina ir até a pontinha do galho fazendo uma costurinha por baixo e voltar cobrindo tudo com pontos cheios lisos, bordando a árvore inteira de uma vez só sem dar nenhum corte de linha!",
    "howItWorks": [
      "1. O programador seleciona todos os objetos vetoriais interligados que formam a ramificação em Y no software.",
      "2. Clica na ferramenta de ramificação automática (*Branching / Conectar Ramos*).",
      "3. O software pede para marcar apenas o ponto de entrada (início) e o ponto de saída (fim) do conjunto.",
      "4. O programa gera a rota ótima: calcula os subpontos de ida por dentro da coluna e os pontos de cetim de volta.",
      "5. As junções no centro do Y são costuradas com sobreposição suave para não deixar marcas.",
      "6. A máquina borda todos os braços em sequência fluida e contínua.",
      "7. O bordado termina com zero cortes de linha e o verso da peça fica 100% limpo e macio."
    ],
    "applications": [
      "Digitalização de monogramas cursivos intrincados e caligrafias de casamento.",
      "Bordados florais botânicos, galhos, caules e folhas estilizadas.",
      "Bordados rendados (Free-Standing Lace - FSL) que exigem continuidade estrutural.",
      "Otimização de logotipos com linhas finas e arabescos para produção seriada de alta velocidade."
    ],
    "characteristics": [
      "Elimina de 5 a 20 cortes de linha por desenho, economizando minutos preciosos de máquina.",
      "Verso extremamente limpo e liso, sem nós de arremate que pinicam a pele.",
      "Evita quebras de linha e desfiamentos nas paradas frequentes do trimmer."
    ],
    "commonErrors": [
      "❌ Tentar ramificar objetos com larguras de ponto muito diferentes sem ajustar a densidade individual.",
      "❌ Deixar os pontos de viagem por baixo saírem para fora das bordas da coluna de cetim.",
      "❌ Não verificar a ordem de sobreposição das folhas sobre os caules após aplicar a ramificação automática."
    ],
    "troubleshootingTips": [
      "Apareceram pontinhos de linha saindo do lado da letra: a costura de viagem interna ficou muito larga; ajuste a propriedade de viagem para 'Centralizar no Eixo Neutro' no software.",
      "A junção no meio do Y ficou muito grossa e dura: diminua a densidade de pontos na área de sobreposição no software para 0.45 mm.",
      "A máquina cortou a linha no meio do galho: verifique se todos os nós dos objetos estão realmente encostados antes de aplicar o comando de ramificação."
    ],
    "dicaArtrelados": "Use a ferramenta de Ramificação (Branching) em TODAS as suas fontes cursivas e arabescos! Além de o bordado ficar muito mais bonito e rápido na máquina, o avesso fica tão limpo e lisinho que os clientes vão achar que foi feito por mágica!",
    "voceSabia": "A aplicação dos grafos de Euler à digitalização de bordados foi desenvolvida na década de 1980 pela empresa australiana Wilcom, revolucionando a velocidade da indústria têxtil mundial!",
    "practicalExercise": "Desenhe uma letra 'Y' maiúscula cursiva no seu software. Borde uma versão com 3 objetos separados (com 3 cortes de linha) e outra versão usando a ferramenta de Ramificação (com 0 cortes). Compare o tempo de máquina e o avesso das duas.",
    "quickSummary": "Y-Junction Branching é o algoritmo vetorial que conecta ramificações e letras cursivas em um único trajeto contínuo de ida e volta, eliminando cortes e acelerando o bordado.",
    "recommendedSettings": {
      "speedPPM": "800 a 950 PPM",
      "needleType": "75/11 Ponta Fina ou Ponta Bola",
      "density": "Densidade de cobertura: 0.40 mm com underlay de viagem centralizado"
    },
    "relatedTerms": [
      "Ramificação (Branching)",
      "Caminho de Euler",
      "Costura de Viagem (Travel Stitch)",
      "Otimização de Matrizes",
      "Letras Cursivas no Bordado"
    ],
    "tags": [
      "y-020",
      "branching",
      "ramificacao",
      "otimizacao",
      "digitalizacao",
      "cortesdelinha",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Vector Branching and Travel Path Optimization. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Continuous Path Stitch Generation and Graph Theory in Embroidery. Mississauga, 2021.",
      "ARTRELADOS. Programação Vetorial Inteligente e Redução de Tempos Mortos na Digitalização. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-021-y-shrinkage-and-warp-tensile-compensation",
    "code": "Y-021",
    "letter": "Y",
    "term": "Y-Shrinkage & Warp Tensile Compensation (Compensação de Encolhimento e Repuxo no Eixo Y)",
    "pronunciation": "uái-xrin-keidj end uórp ten-saiel com-pen-sei-xion",
    "level": "Avançado 🔴",
    "category": "Programação e Digitalização de Matrizes",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 'warp' (fios longitudinais do urdume no tear) e 'shrinkage' (encolhimento). Física de tração têxtil aplicada à compensação de matrizes.",
    "summary": "Calibração paramétrica na matriz que compensa a deformação elástica dos fios verticais do urdume, impedindo que letras e brasões fiquem encurtados ou achatados na vertical.",
    "definition": "O Y-Shrinkage & Warp Tensile Compensation (Longitudinal Warp Elastic Recovery, Vertical Pull Compensation & Aspect Ratio Geometry Preservation) é o ajuste de compensação vetorial direcionado para o eixo Y da matriz de bordado. Em tecidos com forte tensão ou elasticidade longitudinal (como sarjas pesadas com elastano, tecidos de malha canelada e fitas de poliéster), a força de tração contínua das agulhadas verticais estira os fios do urdume durante o enquadramento no bastidor. Quando a peça é solta do bastidor, o urdume relaxa e encolhe bruscamente no sentido vertical, achatando logotipos circulares e encurtando letras. A compensação no eixo Y aplica uma pré-extensão calculada (de +5% a +15% na altura ou +0.25 mm a +0.40 mm nas colunas verticais) para restaurar a geometria original após o desbastidoramento.",
    "technicalDetails": "Diferencial de retração Urdume x Trama ($R_y / R_x$). O software de matrizes aplica fator de escala anisotrópica compensatória nos nós vetoriais verticais preservando as proporções ópticas exatas após relaxamento de 24 horas a 20 °C e 65% UR.",
    "beginnerExplanation": "Quando a gente prende um tecido no bastidor, ele fica esticadinho como uma cama elástica. Mas quando a máquina termina de bordar e a gente solta o bastidor, o tecido volta para o tamanho normal e 'encolhe' na altura, fazendo um desenho redondo virar um círculo achatado e as letras parecerem baixinhas e gordas! A compensação no eixo Y faz o desenho ficar um pouquinho mais alto de propósito no computador, para que quando o tecido encolher de volta na vida real, o bordado fique perfeito, retinho e com a altura exata que você queria!",
    "howItWorks": [
      "1. A bordadeira avalia a elasticidade do tecido puxando suavemente no sentido do comprimento (urdume).",
      "2. No software de matrizes, ativa a compensação de repuxo vertical ou aplica escala proporcional de +8% na altura Y.",
      "3. Ajusta o subponto para uma grade dupla perpendicular que ancora o tecido antes dos pontos cheios.",
      "4. A máquina executa o bordado com o tecido firme e estabilizado com entretela de corte limpo.",
      "5. A peça é retirada do bastidor e deixada em repouso por alguns minutos para relaxamento das fibras.",
      "6. As dimensões verticais encolhem exatamente a margem calculada.",
      "7. O logotipo atinge medidas milimétricas e simetria circular absoluta em 360°."
    ],
    "applications": [
      "Bordados em calças jeans com elastano e sarjas de uniformes operacionais.",
      "Monogramas verticais em toalhas de banho felpudas e roupões de algodão.",
      "Logotipos redondos perfeitos em fitas de cetim, gorgurão e alças de poliéster.",
      "Produção de patches militares e condecorações que exigem medidas com tolerância de 0.5 mm."
    ],
    "characteristics": [
      "Garante que círculos e brasões fiquem 100% redondos após saírem do bastidor.",
      "Elimina rugas e ondulações do tecido acima e abaixo do bordado.",
      "Compatível com tecidos de alta elasticidade e diferentes graus de encolhimento têxtil."
    ],
    "commonErrors": [
      "❌ Puxar o tecido com força excessiva no sentido vertical ao apertar o parafuso do bastidor.",
      "❌ Usar entretela rasgadeira fraca em tecidos elásticos no urdume (o tecido encolhe e puxa a entretela junto).",
      "❌ Aumentar a densidade de pontos sem aplicar compensação de altura (piora o encolhimento vertical)."
    ],
    "troubleshootingTips": [
      "O círculo bordado ficou com a altura menor do que a largura após sair do bastidor: aplique um fator de escala de +7% no eixo Y da matriz ou aumente a compensação de repuxo vertical no software.",
      "O tecido ao redor das letras verticais está franzindo como uma sanfona: substitua a entretela por duas camadas de entretela de corte cruzado (Cutaway 80 g/m²).",
      "O contorno preto superior ficou afastado do preenchimento colorido: aumente o transpasse do preenchimento em +0.35 mm no sentido do eixo Y."
    ],
    "dicaArtrelados": "Para saber exatamente quanto o seu tecido encolhe no eixo Y: borde um quadrado de teste de 5,0 x 5,0 cm. Tire do bastidor e meça a altura com uma régua. Se a altura ficou com 4,6 cm, seu tecido encolhe 8% no urdume: basta aumentar a altura da sua matriz em 8% no programa!",
    "voceSabia": "Em tecidos planos como o jeans, os fios do urdume são montados no tear sob uma tensão mecânica de mais de 2.000 quilos de força, guardando uma enorme 'memória elástica' que é liberada durante o bordado!",
    "practicalExercise": "Borde dois círculos de 4 cm em um retalho de sarja com elastano: um com matriz normal e outro com +8% de escala na altura Y. Meça ambos com uma régua após tirar do bastidor e veja a perfeição do segundo.",
    "quickSummary": "Y-Shrinkage Compensation é o ajuste de compensação vetorial na altura da matriz que neutraliza o encolhimento do urdume do tecido, mantendo a geometria e simetria perfeitas.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola (SES) ou Ponta Fina (RG)",
      "density": "Compensação de repuxo vertical: +0.25 mm a +0.40 mm com underlay em grade"
    },
    "relatedTerms": [
      "Urdume (Warp)",
      "Compensação de Repuxo",
      "Entretela de Corte (Cutaway)",
      "Memória Elástica Têxtil",
      "Deformação de Matrizes"
    ],
    "tags": [
      "y-021",
      "yshrinkage",
      "urdume",
      "eixoy",
      "repuxo",
      "compensacao",
      "precisao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE RESEARCH INSTITUTE. Warp Elasticity & Dimensional Recovery in Computerized Stitching. Princeton, 2021.",
      "WILCOM EMBROIDERY STUDIO. Asymmetrical Fabric Pull and Warp Distortion Guide. Sydney, 2022.",
      "ARTRELADOS. Engenharia de Estabilização e Compensação de Repuxo em Tecidos Elásticos. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-022-y-axis-cap-frame-inversion-and-cylindrical-motion",
    "code": "Y-022",
    "letter": "Y",
    "term": "Y-Axis Cap Frame Inversion & Cylindrical Motion (Cinemática Invertida e Eixo Y em Bastidores de Boné)",
    "pronunciation": "uái-ék-sis cäp freim in-ver-xion end si-lin-dri-cal mou-xion",
    "level": "Avançado 🔴",
    "category": "Bastidores & Enquadramento",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 'cap frame' (bastidor cilíndrico de bonés) e 'kinematic inversion' (inversão de coordenadas cinemáticas cartesianas para polares). Mecatrônica de bordado industrial.",
    "summary": "Transformação mecatrônica que converte o movimento cartesiano Y da matriz em rotação angular cilíndrica no dispositivo de bonés, exigindo digitalização de dentro para fora.",
    "definition": "O Y-Axis Cap Frame Inversion & Cylindrical Motion (Cinemática Curvilínea de Bonés de 270°, Inversão de Coordenadas do Eixo Y e Compensação de Raio Cilíndrico) é a conversão dos comandos lineares do eixo Y da máquina para a tração rotativa da coroa dentada do dispositivo de bonés (*Cap Driver*). Ao enquadrar um boné curvo, o centro da testa fica mais próximo do eixo de rotação do que as abas laterais. Além disso, para evitar que o gomo frontal do boné empurre o tecido e crie um papo ou ruga no meio, a programação da matriz exige a inversão de direção (*Cap Mode Rotation 180°*) e o sequenciamento obrigatório de dentro para fora (*Center-Out Sequencing*) e de baixo para cima no eixo Y.",
    "technicalDetails": "Ângulo de rotação angular: 270° de arco com raio médio de 85 mm. Relação de redução de engrenagens do Cap Driver: 1:3.2. Velocidade linear superficial tangencial: limitada a 650 PPM para prevenir vibração e deflexão da aba rígida.",
    "beginnerExplanation": "Bordar um boné não é como bordar uma camiseta plana na mesa: o boné é redondo e tem uma costura grossa no meio! O dispositivo de bonés faz a máquina girar o boné de um lado para o outro como se fosse uma roda. Por causa disso, o desenho precisa ser programado no computador para começar a bordar no meio da testa e ir abrindo para as laterais, empurrando o tecido para os cantos para a frente do boné ficar lisinha e sem rugas!",
    "howItWorks": [
      "1. A bordadeira monta o boné no gabarito cilíndrico com entretela pesada estruturada de 100 g/m².",
      "2. Prende a cinta de aço dentada com o fecho de pressão rente à costura da aba.",
      "3. Encaixa o bastidor no Cap Driver da máquina até travar nas 3 esferas de pressão.",
      "4. No painel da máquina, ativa o ícone de 'Bastidor de Boné' (que inverte a matriz em 180° automaticamente).",
      "5. A matriz executa a sequência Center-Out: inicia no centro do eixo Y e borda expandindo para a esquerda e para a direita.",
      "6. A rotação do eixo Y mantém a superfície curva sempre perpendicular à ponta da agulha.",
      "7. O bordado no boné fica perfeito, sem rugas na costura central e sem desalinhamento."
    ],
    "applications": [
      "Bordados profissionais em bonés estruturados de 6 gomos com costura central grossa.",
      "Bordados contínuos de lateral a lateral em bonés fechados e abertos (campo de 270°).",
      "Personalização de viseiras esportivas e chapéus de praia no braço cilíndrico.",
      "Bordados em peças tubulares rígidas de diâmetro médio."
    ],
    "characteristics": [
      "Permite bordar em superfícies curvas sem desmontar a estrutura do boné.",
      "Sequenciamento obrigatório do centro para as laterais (Center-Out).",
      "Rotação automática da matriz em 180 graus no painel de controle."
    ],
    "commonErrors": [
      "❌ Digitalizar a matriz para boné da esquerda para a direita como se fosse um tecido plano (cria uma onda enorme de tecido no gomo direito).",
      "❌ Operar a máquina em velocidade máxima (> 750 PPM) com bastidor de boné (o peso da aba entorta a agulha).",
      "❌ Não esticar a entretela e o tecido com a fita elástica de contenção de aba."
    ],
    "troubleshootingTips": [
      "O bordado ficou com uma dobra feia em cima da costura do meio do boné: reprograme a matriz no software com ordem de bordado 'Do Centro para Fora' (Center-Out).",
      "A agulha quebrou bem na junção da aba com a testa: a matriz está muito próxima da margem inferior; suba o desenho em pelo menos 15 mm no eixo Y.",
      "As letras das laterais do boné ficaram deformadas e esticadas: diminua a velocidade da máquina para 600 PPM e aperte a trava da cinta metálica do bastidor."
    ],
    "dicaArtrelados": "A regra de ouro de ouro do bordado de bonés: NUNCA borde um boné de um lado para o outro como uma camiseta! Use sempre matriz com sequência 'Do Meio para Fora' e limite a altura do desenho a no máximo 5,5 cm para garantir sucesso 100% garantido!",
    "voceSabia": "Os dispositivos de boné com rotação de 270 graus foram inventados no Japão na década de 1980 pela Tajima especialmente para atender a demanda explosiva dos bonés da liga americana de beisebol (MLB)!",
    "practicalExercise": "Abra uma matriz de boné no seu software e use a ferramenta de simulação do caminho do ponto (Player / Redraw). Verifique se os pontos começam exatamente na linha central da matriz e caminham para as bordas externas.",
    "quickSummary": "Y-Axis Cap Frame Inversion é o sistema mecatrônico de rotação cilíndrica para bonés que converte o eixo Y em movimento curvo e exige digitalização do centro para fora.",
    "recommendedSettings": {
      "speedPPM": "600 a 680 PPM",
      "needleType": "80/12 Ponta Fina Reforçada (SAN 6 ou Titanium)",
      "density": "Densidade adaptada para sarja pesada: 0.40 mm a 0.42 mm"
    },
    "relatedTerms": [
      "Bastidor de Boné (Cap Frame)",
      "Cap Driver",
      "Sequenciamento do Centro para Fora (Center-Out)",
      "Rotação 180°",
      "Entretela para Boné"
    ],
    "tags": [
      "y-022",
      "capframe",
      "bones",
      "eixoy",
      "rotacao",
      "cinematica",
      "bastidor",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA EMBROIDERY MACHINERY. Cap Frame 270 Operation, Setup and Stitch Sequencing Manual. Nagoya, 2021.",
      "NATIONAL EMBROIDERY GUILD. Headwear Embroidery Dynamics: Center-Out Digitizing & Frame Limits. Louisville, 2022.",
      "ARTRELADOS. Guia Definitivo do Bordado em Bonés e Peças Cilíndricas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-023-yoke-embroidery-on-tailored-shirts-and-western-garments",
    "code": "Y-023",
    "letter": "Y",
    "term": "Yoke Embroidery on Tailored Shirts & Western Garments (Bordado em Palas de Camisas e Jaquetas de Alfaiataria)",
    "pronunciation": "iôuk em-broi-de-ri on têi-lord xêrts end ués-tern gár-ments",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas Especiais",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 'yoke' (pala de camisa / recorte de reforço nos ombros e costas da camisaria clássica e moda country/western).",
    "summary": "Técnicas especializadas de enquadramento, estabilização e alinhamento milimétrico para bordar palas traseiras e frontais cortadas no fio reto ou em viés.",
    "definition": "O Yoke Embroidery on Tailored Shirts & Western Garments (Bordado Estrutural em Palas Duplas de Camisaria, Jaquetas Jeans e Moda Western / Grainline Alignment & Shoulder Seam Integration) é o método técnico de aplicação de bordados em painéis de ombro e costas superiores (palas). Como a pala de uma camisa de alfaiataria é frequentemente cortada com tecido duplo e às vezes no sentido do viés (45°) para dar caimento e elasticidade natural ao tronco, o bordado incorreto pode repuxar a linha dos ombros e estragar o caimento da peça. A técnica exige a perfeita identificação do fio reto do tecido (*grainline*), o uso de entretela termocolante hidrossolúvel ou de toque suave no verso interno e gabaritos de mira laser para garantir que o desenho fique 100% paralelo à costura dos ombros.",
    "technicalDetails": "Alinhamento com a linha de centro das costas e margem de segurança de 25 mm em relação à costura do colarinho e das cavas. Densidade de pontos calibrada entre 0.40 mm e 0.44 mm para preservar a maleabilidade do tecido fino (popeline de algodão 80 a 120 fios).",
    "beginnerExplanation": "A pala é aquele pedaço de tecido duplo reforçado que fica bem nas costas da camisa, logo abaixo da gola e em cima dos ombros (muito famosa em camisas sociais e camisas xadrez de rodeio!). Bordar na pala exige um cuidado especial porque a pala precisa ficar bem retinha nos ombros da pessoa: se o bordado repuxar o tecido, a camisa inteira fica torta! Usando a entretela correta e alinhando com a régua na costura das costas, o bordado fica chique, lisinho e com caimento de loja fina!",
    "howItWorks": [
      "1. A bordadeira desabotoa a camisa e abre a pala traseira sobre a mesa de trabalho.",
      "2. Encontra o centro exato dobrando a pala ao meio e marca com giz de alfaiate a linha vertical guia.",
      "3. Aplica uma folha de entretela de corte suave (Cutaway macia de 50 g/m²) fixada com cola spray temporária no interior da pala.",
      "4. Enquadra a pala no bastidor mantendo a costura da gola perfeitamente paralela à borda do aro.",
      "5. Alinha o ponto de mira laser da máquina na marcação central de giz.",
      "6. A máquina borda o logotipo ou arabesco com velocidade suave de 700 PPM.",
      "7. Retira-se do bastidor, apara-se a entretela suavemente e passa-se a ferro pelo avesso com pano de proteção."
    ],
    "applications": [
      "Uniformes corporativos e executivos em camisas sociais de alta camisaria.",
      "Camisas country e western com bordados ricos em arabescos nas palas frontais e traseiras.",
      "Jaquetas jeans e jaquetas de sarja com nomes e logotipos bordados nas costas.",
      "Batas médicas e jalecos de profissionais com identificação nas costas."
    ],
    "characteristics": [
      "Caimento impecável nos ombros sem repuxar a gola ou as cavas da camisa.",
      "Avesso macio que não incomoda nem arranha a nuca e as costas do usuário.",
      "Simetria e alinhamento milimétrico com a costura superior do colarinho."
    ],
    "commonErrors": [
      "❌ Bordar muito perto da costura da gola (< 20 mm), batendo o calcador da máquina no colarinho grosso.",
      "❌ Usar entretela rasgadeira dura e grossa (a pala fica dura como uma tábua e machuca a pele).",
      "❌ Enquadrar a camisa torta sem conferir a linha de centro da pala com uma régua."
    ],
    "troubleshootingTips": [
      "A camisa ficou com o ombro repuxado após passar a ferro: use entretela de corte macia (Cutaway Soft) e reduza a densidade de preenchimento da matriz para 0.44 mm.",
      "O bordado ficou torto em relação à costura das costas: utilize o gabarito plástico transparente de centro do bastidor e confira a horizontalidade com uma régua de alfaiate antes de apertar o aro.",
      "O calcador da máquina está batendo na costura do colarinho: desça a posição inicial da matriz em 15 mm no painel da máquina."
    ],
    "dicaArtrelados": "Para camisas sociais finas: passe sempre uma camada de entretela termocolante bem levinha no verso da pala antes de bordar! Isso estabiliza os dois tecidos da pala juntos e o bordado fica tão perfeito e sem rugas que parece feito na Itália!",
    "voceSabia": "As clássicas camisas western com bordados vistosos nas palas em formato de coração ou asas foram popularizadas no cinema nos anos 1940 pelo lendário estilista Nudie Cohn, vestindo astros como Elvis Presley e Johnny Cash!",
    "practicalExercise": "Marque a linha de centro da pala de uma camisa velha com giz. Enquadre usando o gabarito transparente do bastidor e borde um monograma de 6 cm. Confira se o monograma ficou perfeitamente nivelado em relação à costura da gola.",
    "quickSummary": "Yoke Embroidery é o bordado técnico em palas de camisas e jaquetas que combina alinhamento simétrico rigoroso e entretelas macias para preservar o caimento perfeito dos ombros.",
    "recommendedSettings": {
      "speedPPM": "700 a 780 PPM",
      "needleType": "70/10 ou 75/11 Ponta Fina (Sharp)",
      "density": "Densidade leve e maleável: 0.42 mm a 0.45 mm"
    },
    "relatedTerms": [
      "Pala de Camisa (Yoke)",
      "Camisaria de Alfaiataria",
      "Fio Reto do Tecido (Grainline)",
      "Entretela Cutaway Suave",
      "Moda Western e Country"
    ],
    "tags": [
      "y-023",
      "yoke",
      "palas",
      "camisas",
      "alfaiataria",
      "western",
      "enquadramento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SHIRTMAKERS GUILD OF AMERICA. Tailored Garment Embroidery & Yoke Alignment Protocols. Nova York, 2022.",
      "EMBROIDERY BUSINESS REVIEW. High-End Corporate Shirt Embroidery and Soft Backing Selection. Chicago, 2021.",
      "ARTRELADOS. Guia de Bordado em Roupas Sociais, Uniformes Executivos e Moda Fina. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-024-yarn-dyed-fabric-embroidery-dynamics",
    "code": "Y-024",
    "letter": "Y",
    "term": "Yarn-Dyed Fabric Embroidery Dynamics (Dinâmica de Bordado em Tecidos com Fio Tinto / Fio a Fio)",
    "pronunciation": "iárn-dáid fá-brik em-broi-de-ri dai-ná-miks",
    "level": "Intermediário 🟡",
    "category": "Estruturação & Física Têxtil",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'yarn-dyed' (fio tinto / tecido cujos fios de urdume e trama são tingidos antes da tecelagem, como tecidos xadrez, listrados e jacquards).",
    "summary": "Diretrizes de alinhamento visual, escolha de cores de linha e controle de densidade para bordar sobre tecidos xadrez, listrados e maquinetados fio a fio.",
    "definition": "O Yarn-Dyed Fabric Embroidery Dynamics (Estabilização Óptica e Mecânica em Tecidos Fio Tinto, Geometria Xadrez e Interação de Padrões) é o conjunto de regras técnicas de digitalização e enquadramento para bordar sobre tecidos fabricados com fios pré-tingidos (como tecidos xadrez tipo flanela e vichy, cambraias listradas, seersucker e tecidos maquinetados). Ao contrário de tecidos lisos tingidos em peça, o tecido fio tinto possui uma grade geométrica visual evidente formada pelas linhas de cor da trama e do urdume. Se o bordado for enquadrado com uma inclinação de apenas 1° em relação às linhas do xadrez, o erro visual de paralelismo torna-se imediatamente gritante. Além disso, a matriz precisa usar underlay denso de tatami para evitar que as listras contrastantes do fundo 'vazem' visualmente por entre os pontos do bordado.",
    "technicalDetails": "Alinhamento com a grade do tecido (Weave Grid Coincidence). Compensação óptica por subponto em tatami duplo fechado (densidade 0.80 mm) com camada de bloqueio visual (*Visual Barrier Underlay*) e agulhas 70/10 com ponta fina afiada (Microtex/Sharp).",
    "beginnerExplanation": "Tecido fio tinto é aquele tecido (como a camisa xadrez ou a toalha listradinha) onde as listras já foram feitas com fios coloridos de verdade no tear, e não apenas estampadas por cima! Bordar em tecido xadrez exige atenção redobrada: se o bastidor ficar um pouquinho torto, todo mundo vai ver na hora que o bordado não está alinhado com as linhas do xadrez! Além disso, se o bordado for ralo, as listras escuras do tecido aparecem por baixo da linha clara, então precisamos de uma costura de fundo bem fechadinha!",
    "howItWorks": [
      "1. A bordadeira analisa a padronagem do tecido xadrez ou listrado e escolhe uma linha de cor do xadrez como referência.",
      "2. Aplica entretela de corte limpo (Cutaway) com adesivo temporário para travar a trama.",
      "3. Enquadra o tecido no bastidor alinhando uma das linhas retas do xadrez com a borda do aro ou com a régua do bastidor.",
      "4. No software, programa a matriz com um subponto de tatami leve de fundo (Underlay Block) na mesma cor do bordado.",
      "5. A máquina borda o subponto de bloqueio, cobrindo o contraste das listras do tecido.",
      "6. Em seguida, borda os pontos de cobertura em cetim ou tatami normal.",
      "7. O bordado fica perfeitamente nivelado com as listras do tecido e as cores ficam 100% puras sem transparência."
    ],
    "applications": [
      "Bordados de logotipos em camisas xadrez de flanela, moda country e uniformes de restaurantes temáticos.",
      "Monogramas em jogos americanos e guardanapos de tecido vichy e jacquard fio tinto.",
      "Bordados em camisas sociais masculinas de listras finas (fio a fio / cambraia de algodão).",
      "Personalização de mantas de piquenique, toalhas de mesa xadrez e almofadas rústicas."
    ],
    "characteristics": [
      "Alinhamento geométrico perfeito com as linhas de trama e urdume visíveis do tecido.",
      "Zero transparência das listras de fundo sob as cores claras do bordado.",
      "Preservação da estrutura do tecido sem puxar fios coloridos da trama."
    ],
    "commonErrors": [
      "❌ Enquadrar o tecido 'no olho' sem conferir se a listra do tecido está paralela à borda do bastidor.",
      "❌ Bordar letras brancas com densidade padrão de 0.40 mm direto sobre xadrez preto e vermelho (o xadrez fica aparecendo no meio das letras).",
      "❌ Usar agulha ponta bola gasta que desfia e puxa os fios tintos da trama para a superfície."
    ],
    "troubleshootingTips": [
      "As listras do tecido estão aparecendo por baixo da linha branca do bordado: ative um subponto em tatami fechado (Tatami Underlay a 0.80 mm) no software de matrizes para criar um fundo sólido de bloqueio.",
      "O desenho ficou torto em relação ao xadrez da camisa: use o recurso de rotação de ângulo no painel da máquina para girar a matriz 1° ou 2° até alinhar com o laser na listra do tecido.",
      "A agulha está puxando pontinhos escuros do tecido para cima: troque a agulha por uma agulha ponta fina nova (calibre 70/10 Sharp)."
    ],
    "dicaArtrelados": "Para bordar em tecido xadrez: acenda o laser de mira da sua máquina e mova o bastidor na horizontal! O pontinho de luz deve correr EXATAMENTE em cima da mesma listra do xadrez de ponta a ponta. Se ele desviar, gire o desenho no painel até casar perfeitamente!",
    "voceSabia": "O tecido xadrez 'Tartan' escocês tradicional é um dos tecidos fio tinto mais antigos da humanidade, onde cada clã familiar possuía uma combinação de cores e larguras de fios registrada oficialmente desde o século XVI!",
    "practicalExercise": "Pegue um retalho de tecido xadrez ou listrado. Enquadre usando a régua de alinhamento e borde uma letra 'M' de 3 cm com um subponto de tatami. Verifique o paralelismo com a listra e a opacidade da cor.",
    "quickSummary": "Yarn-Dyed Fabric Dynamics são as regras de enquadramento alinhado à grade do xadrez e uso de subpontos de bloqueio visual para bordar sobre tecidos fabricados com fios pré-tingidos.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "70/10 ou 75/11 Ponta Fina (Sharp / Microtex)",
      "density": "Densidade de cobertura: 0.38 mm com subponto de tatami de bloqueio"
    },
    "relatedTerms": [
      "Tecido Fio Tinto",
      "Xadrez e Tartan",
      "Subponto de Bloqueio (Block Underlay)",
      "Alinhamento por Laser",
      "Agulha Ponta Fina (Sharp)"
    ],
    "tags": [
      "y-024",
      "yarndyed",
      "fiotinto",
      "xadrez",
      "listrado",
      "alinhamento",
      "bloqueio",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE DESIGN GUILD. Pattern Alignment & Color Opacity in Yarn-Dyed Fabrics. Manchester, 2021.",
      "WILCOM EMBROIDERY STUDIO. Contrast Underlays & Grid Coincidence Techniques. Sydney, 2022.",
      "ARTRELADOS. Manual de Bordados em Tecidos Xadrez, Listrados e Padronagens Geométricas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-025-y-shaped-underlay-and-corner-reinforcement",
    "code": "Y-025",
    "letter": "Y",
    "term": "Y-Shaped Underlay & Corner Reinforcement (Subponto de Ancoragem em Y para Vértices e Quinas Fechadas)",
    "pronunciation": "uái-xêipt an-der-lei end cor-ner ri-in-fórs-ment",
    "level": "Avançado 🔴",
    "category": "Programação e Digitalização de Matrizes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da topologia vetorial de subpontos estruturais e engenharia de alívio de nós em vértices agudos de fontes tipográficas.",
    "summary": "Estrutura de subponto em formato de bifurcação em Y que ancora vértices pontiagudos (letras V, W, K e Y) sem acumular volume de pontos nem quebrar agulhas.",
    "definition": "O Y-Shaped Underlay & Corner Reinforcement (Subponto Bifurcado em Y para Vértices Agudos, Alívio de Densidade em Junções Angulares e Ancoragem Estrutural) é a técnica de digitalização de subpontos aplicada especificamente em quinas e encontros de colunas que formam ângulos agudos (inferiores a 45°). Quando duas colunas de cetim se encontram em um vértice fechado, o subponto linear simples convencional tende a ultrapassar as bordas ou acumular uma sobreposição excessiva de pontos no mesmo ponto focal, gerando um nódulo duro (*bullet point*) que desvia a agulha e causa quebras de linha e rasgos no tecido. O subponto em 'Y' divide a linha de ancoragem em dois ramos diagonais que sustentam as laterais sem se cruzar no ápice, garantindo pontas agulhadas extremamente afiadas e toque plano.",
    "technicalDetails": "Ângulo de bifurcação de 30° a 45°. Recuo do ápice (*Apex Inset*): o subponto recua 0.8 mm a 1.2 mm do vértice final da coluna. Comprimento de passo reduzido para 1.8 mm a 2.0 mm para máxima ancoragem na entretela.",
    "beginnerExplanation": "Quando a gente borda letras com bicos finos (como a ponta da letra 'V', do 'W' ou do 'Y'), as duas partes da letra se encontram no mesmo biquinho. Se a gente colocar costura demais ali embaixo, aquele bico vira um caroço duro de linha parecendo uma pedrinha, e a agulha bate ali e quebra com um estalo! O subponto em Y é um desenho esperto de costurinha por baixo que se abre como um garfinho, segurando o tecido dos dois lados sem deixar a ponta dura nem empelotada!",
    "howItWorks": [
      "1. O programador identifica os vértices pontiagudos e quinas afiadas na fonte ou logotipo.",
      "2. No software de matrizes, entra nas propriedades de subponto (Underlay) da coluna angular.",
      "3. Ativa a opção de subponto bifurcado ou desenha manualmente a ancoragem em formato de 'Y'.",
      "4. Configura o recuo do subponto em 1,0 mm da ponta externa do vértice.",
      "5. Aplica a ferramenta de canto inteligente (*Smart Corners / Mitered Corner*) com divisão de densidade.",
      "6. A máquina borda a ancoragem em Y e cobre suavemente com os pontos de cetim.",
      "7. O vértice fica com uma ponta afiada e perfeita, macio ao toque e sem nenhuma quebra de agulha."
    ],
    "applications": [
      "Digitalização de fontes tipográficas com serifas afiadas e letras angulares (A, K, M, N, V, W, X, Y, Z).",
      "Bordado de estrelas de condecorações, brasões militares e pontas de setas.",
      "Bordados corporativos de alta definição com logotipos geométricos pontiagudos.",
      "Contornos finos de arabescos e motivos tribais com quinas vivas."
    ],
    "characteristics": [
      "Pontas e quinas extremamente nítidas e afiadas sem deformação.",
      "Elimina o nódulo duro e o acúmulo excessivo de pontos no vértice.",
      "Reduz a zero o risco de quebras de agulha e cortes no tecido por perfuração excessiva."
    ],
    "commonErrors": [
      "❌ Deixar o subponto chegar até a pontinha extrema do vértice, fazendo o subponto 'escapar' para fora da coluna de cobertura.",
      "❌ Não ativar o alívio de densidade nas esquinas, gerando um caroço duro de linha que fura o tecido.",
      "❌ Usar densidade pesada de 0.30 mm sobre vértices já sobrepostos."
    ],
    "troubleshootingTips": [
      "A agulha está quebrando com frequência exatamente no bico das letras V e W: ative o subponto em Y com recuo de 1.0 mm e ative o canto em esquadria (Mitered Corner) no software.",
      "Apareceu uma pontinha de linha do subponto para fora da quina da estrela: aumente a margem de recuo do subponto (Underlay Margin) para 0.8 mm no objeto.",
      "O bico da letra ficou arredondado e sem definição: diminua a compensação de repuxo apenas no vértice e utilize agulha ponta fina 70/10."
    ],
    "dicaArtrelados": "Para fazer estrelas e letras com bicos afiadíssimos como facas: nunca deixe as costuras de baixo chegarem até a pontinha final! Deixe o subponto parar 1 milímetro antes da ponta: os pontos de cima vão fechar o bico perfeitamente e o bordado fica super limpo e afiado!",
    "voceSabia": "Em análises de microscopia eletrônica, o acúmulo de pontos cheios em esquinas sem alívio pode concentrar até 12 camadas de linha no mesmo ponto de 1 mm², criando uma rigidez comparável ao plástico rígido injetado!",
    "practicalExercise": "Desenhe uma estrela de 5 pontas no seu software. Em uma versão, aplique subponto comum até as pontas; na outra versão, aplique o subponto bifurcado em Y com recuo de 1 mm. Borde as duas e compare a nitidez das pontas e a maciez ao toque.",
    "quickSummary": "Y-Shaped Underlay é a ancoragem estrutural bifurcada em Y para quinas e vértices agudos que garante pontas extremamente afiadas sem acúmulo de nós nem quebras de agulha.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "70/10 ou 75/11 Ponta Fina (Sharp)",
      "density": "Densidade com alívio de canto: 0.40 mm com recuo de 1.0 mm"
    },
    "relatedTerms": [
      "Subponto de Ancoragem (Underlay)",
      "Cantos em Esquadria (Mitered Corners)",
      "Alívio de Densidade (Corner Density Relief)",
      "Microletras e Serifas",
      "Deflexão de Agulha"
    ],
    "tags": [
      "y-025",
      "yshapedunderlay",
      "subponto",
      "quinas",
      "vertices",
      "digitalizacao",
      "precisao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO. Advanced Corner Treatments, Smart Corners & Apex Underlay. Sydney, 2022.",
      "TAJIMA DG/ML BY PULSE. Geometric Corner Density Relief and Vector Apex Optimization. Toronto, 2021.",
      "ARTRELADOS. Geometria Sagrada na Digitalização: Cantos Vivos, Vértices Afiados e Alívio de Nós. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-026-yield-stress-and-thread-breakage-threshold",
    "code": "Y-026",
    "letter": "Y",
    "term": "Yield Stress & Thread Breakage Threshold (Tensão de Ruptura e Limite de Escoamento do Fio de Bordar)",
    "pronunciation": "íild strés end tréd brêi-keidj tréx-hould",
    "level": "Avançado 🔴",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Da física mecânica de materiais poliméricos e curvas de tensão-deformação (Stress-Strain Curve & Tensile Yield Modulus) de filamentos sintéticos contínuos.",
    "summary": "Compreensão da curva de elasticidade e limite de tração das linhas de poliéster e viscose para regular a tensão da máquina abaixo da zona de deformação plástica irreversível.",
    "definition": "O Yield Stress & Thread Breakage Threshold (Ponto de Escoamento Mecânico, Limite Elástico Reversível e Tenacidade Crítica de Fios Têxteis) é a grandeza físico-química que determina a quantidade máxima de força de tração contínua e instantânea (medida em gramas-força / cN/tex) que uma linha de bordar suporta antes de sofrer deformação plástica irreversível ou ruptura total. A linha de poliéster 100% trilobal 40wt possui alta tenacidade (resiste a até 1.100 cN com 18% a 22% de alongamento na ruptura), enquanto a linha de viscose/rayon possui menor limite elástico (resiste a cerca de 750 cN com 12% de alongamento). Quando a tensão da máquina ultrapassa o limite elástico (Yield Point), o fio estica, afina, perde o brilho, deforma as laçadas e arrebenta no olho da agulha.",
    "technicalDetails": "Curva Tensão x Deformação (Stress-Strain). Zona elástica segura de trabalho na máquina: 110 a 140 gf de tensão dinâmica para poliéster 40wt e 90 a 115 gf para viscose 40wt. Tenacidade típica do poliéster trilobal: 4.2 a 4.8 cN/dtex.",
    "beginnerExplanation": "A linha de bordar funciona como um elástico fininho: até um certo ponto de aperto, ela estica e volta ao normal sem nenhum problema. Mas se a máquina apertar a linha além do limite dela (o ponto de escoamento), a linha afina, fica enrugada, perde todo o brilho bonito e estoura com um estalo! Conhecer a força da sua linha ensina você a regular a tensão dos discos na medida certa: nem solta demais para embaraçar embaixo, nem apertada demais para arrebentar a linha!",
    "howItWorks": [
      "1. A linha sai do cone, passa pelos guias e entra nos discos tensores superiores.",
      "2. O estica-fio sobe bruscamente aplicando uma força de tração instantânea no fio.",
      "3. Em uma máquina bem regulada, a força de tração atua estritamente dentro da zona elástica segura (120 gf).",
      "4. O fio se estende ligeiramente para formar a laçada na lançadeira e se recolhe com firmeza no tecido.",
      "5. A laçada assenta-se no centro do tecido sem repuxar a entretela.",
      "6. A linha preserva 100% do seu brilho, cor e tenacidade original.",
      "7. A máquina borda dezenas de milhares de pontos a 900 PPM com zero quebras de linha."
    ],
    "applications": [
      "Calibração precisa de tensiómetros digitais e manuais (como o tensiómetro Towa de linha superior).",
      "Diferenciação de regulagem entre linhas de poliéster (mais fortes) e linhas de viscose (mais delicadas).",
      "Diagnóstico de lotes de linha de baixa qualidade com filamentos enfraquecidos.",
      "Prevenção de quebras de linha em produções industriais de alta velocidade (acima de 900 PPM)."
    ],
    "characteristics": [
      "Conhecimento exato dos limites físicos de força de cada tipo de fio têxtil.",
      "Evita o estiramento excessivo que deforma e encolhe o bordado após a lavagem.",
      "Garante a máxima durabilidade e resistência à tração nas peças prontas."
    ],
    "commonErrors": [
      "❌ Apertar os tensores da máquina com força excessiva para 'esconder' a linha da bobina que está aparecendo por falta de regulagem inferior.",
      "❌ Usar a mesma tensão pesada de poliéster em cones de linha de viscose/rayon (a viscose quebra sem parar).",
      "❌ Puxar a linha da agulha travada com alicate ou com a mão com brutalidade, descalibrando o estica-fio."
    ],
    "troubleshootingTips": [
      "A linha está arrebentando a toda hora e a pontinha arrebentada parece um cabelinho enrolado e esticado: a tensão superior ultrapassou o limite elástico; solte os tensores superiores em 1 a 2 voltas completas.",
      "O bordado ficou opaco e sem brilho após bordar com linha de poliéster brilhante: a linha foi esticada além do limite elástico durante a costura; reduza a tensão dos discos tensores.",
      "A linha metálica quebra no segundo ponto: fios metálicos têm limite elástico quase nulo; reduza a velocidade da máquina para 600 PPM e reduza a tensão em 40%."
    ],
    "dicaArtrelados": "A regra de ouro da tensão perfeita: a linha de cima deve passar pelos seus dedos com a suavidade de puxar um fio de dental novo! Ela deve oferecer uma resistência firme e constante, mas nunca 'prender' a ponto de você sentir que ela vai estourar na sua mão!",
    "voceSabia": "Um único fio de poliéster 40wt de alta tenacidade de qualidade industrial é capaz de sustentar suspenso no ar um peso de mais de 1,2 kg antes de se romper!",
    "practicalExercise": "Pegue um pedaço de 30 cm de linha de poliéster e outro de linha de viscose. Puxe as pontas lentamente com as duas mãos até arrebentar: sinta como o poliéster estica bastante antes de quebrar e a viscose se rompe com menos esforço, exigindo tensão mais suave na máquina.",
    "quickSummary": "Yield Stress é o limite máximo de tração elástica do fio de bordar antes da deformação plástica irreversível, servindo de base para a regulagem da tensão da máquina.",
    "recommendedSettings": {
      "speedPPM": "800 a 900 PPM (Poliéster) / 700 a 800 PPM (Viscose)",
      "needleType": "75/11 Ponta Fina ou Ponta Bola",
      "density": "Tensão de trabalho recomendada: 110 gf a 130 gf (Poliéster 40wt)"
    },
    "relatedTerms": [
      "Tenacidade Têxtil (cN/tex)",
      "Curva Tensão-Deformação",
      "Tensão Superior de Linha",
      "Linha de Poliéster Trilobal",
      "Linha de Viscose (Rayon)"
    ],
    "tags": [
      "y-026",
      "yieldstress",
      "tensao",
      "ruptura",
      "elasticidade",
      "poliester",
      "viscose",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICAN FIBER MANUFACTURERS ASSOCIATION. Stress-Strain Characteristics of Industrial Filament Yarns. Washington, 2021.",
      "MADEIRA THREADS ACADEMY. Thread Tension, Elastic Recovery and Tensile Breakage Protocols. Freiburg, 2022.",
      "ARTRELADOS. Física e Química dos Fios de Bordado: Tensão, Elasticidade e Alta Performance. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-027-y-drive-origin-and-home-sensor-calibration",
    "code": "Y-027",
    "letter": "Y",
    "term": "Y-Drive Origin & Home Sensor Calibration (Calibração do Sensor de Ponto Zero e Curso Máximo do Eixo Y)",
    "pronunciation": "uái-dráiv ó-ri-djin end houm sen-sor ca-li-brêi-xion",
    "level": "Avançado 🔴",
    "category": "Mecânica, Calibração & Manutenção",
    "grammarClass": "Substantivo feminina composta.",
    "origin": "Do inglês 'home sensor' (sensor óptico/magnético de referência zero) e 'origin calibration' (calibração de coordenadas absolutas de máquina CNC).",
    "summary": "Ajuste e higienização dos sensores ópticos infravermelhos que estabelecem a coordenada zero absoluta (Home 0,0) do eixo Y, prevenindo colisões do bastidor.",
    "definition": "O Y-Drive Origin & Home Sensor Calibration (Referenciamento Absoluto de Coordenadas de Máquina, Alinhamento de Fotointerruptores Ópticos e Calibração de Fim de Curso do Eixo Y) é o procedimento técnico de manutenção e regulagem que define a origem mecânica universal ($Y=0$) do pantógrafo. Toda vez que a máquina é ligada, ela executa a rotina de busca de ponto zero (*Homing Routine*): os motores deslocam o pantógrafo até que uma lâmina metálica de obstrução (*flag*) corte o feixe de luz infravermelha do sensor óptico do eixo Y. Se o sensor estiver desalinhado ou sujo com fiapos de linha e poeira têxtil, a máquina calculará o centro de bordado com desvio milimétrico, arriscando bater o bastidor com violência contra a carcaça traseira.",
    "technicalDetails": "Sensor fotoelétrico de fenda transmissiva (Photointerrupter IR LED de 940 nm). Repetibilidade de posicionamento de máquina: ±0.02 mm. Tensão lógica de operação: 5V / 24V DC. Distância de disparo de bandeira metálica: 2.0 mm centralizada na fenda óptica.",
    "beginnerExplanation": "Sabe quando você liga a máquina e ela dá uma andadinha sozinha para trás até achar o cantinho dela e faz 'pi-pi-pi'? Esse movimento se chama 'busca do ponto zero'! A máquina usa um 'olho mágico' (o sensor óptico do eixo Y) para saber exatamente onde ela está no mundo antes de começar a trabalhar. Se esse olhinho estiver sujo de pó de linha, a máquina fica perdida, acha que o meio do bastidor é em outro lugar e pode bater o bastidor na carcaça! Manter esse sensor limpo e calibrado garante que seu bordado comece sempre no centro exato!",
    "howItWorks": [
      "1. Ao ligar a máquina ou pressionar 'Origem/Home', a CPU envia pulsos de recuo lento para o servomotor do eixo Y.",
      "2. O pantógrafo se desloca para a posição limite traseira da mesa.",
      "3. A lâmina metálica presa ao trilho entra na fenda do sensor óptico e bloqueia o feixe infravermelho.",
      "4. O circuito do sensor comuta de estado elétrico (de HIGH para LOW), gerando um sinal de interrupção instantâneo na placa-mãe.",
      "5. A CPU grava essa posição como o ponto $Y=0.00$ absoluto de máquina.",
      "6. A partir desse marco, a máquina calcula com precisão matemática o centro de todos os bastidores cadastrados.",
      "7. O bordado inicia com centralização perfeita e sem nenhum risco de ultrapassagem de curso (*Over-Travel*)."
    ],
    "applications": [
      "Manutenção preventiva de rotina e limpeza de sensores após acúmulo de poeira têxtil.",
      "Calibração de centro de bastidores após substituição de placas eletrônicas ou motores.",
      "Eliminação de erros de 'Y-Limit Exceeded' ou 'Pantograph Home Error'.",
      "Garantia de centralização milimétrica em trabalhos de encaixe e continuação de matrizes grandes."
    ],
    "characteristics": [
      "Repetibilidade centesimal de posição inicial (precisão de 0.02 mm).",
      "Sensor de estado sólido sem contato físico, garantindo vida útil de mais de 10 anos.",
      "Proteção ativa contra colisões destrutivas do pantógrafo contra a estrutura da máquina."
    ],
    "commonErrors": [
      "❌ Deixar poeira e fiapos de linha acumularem na fenda do sensor (a máquina não acha a origem e fica apitando).",
      "❌ Empurrar o pantógrafo com as mãos com a máquina ligada, forçando os motores fora da posição de referência.",
      "❌ Entortar a lâmina metálica de disparo durante limpezas pesadas da mesa traseira."
    ],
    "troubleshootingTips": [
      "A máquina exibe erro 'Y-Axis Sensor Error / Cannot Find Home': desligue a máquina, remova a tampa traseira e limpe a fenda do sensor óptico com um cotonete embebido em álcool isopropílico ou jato de ar seco.",
      "O centro do bastidor na tela não bate com o centro real na peça: o sensor do eixo Y foi levemente deslocado; acesse o menu de calibração técnica no painel e ajuste o 'Y-Offset' até casar perfeitamente.",
      "O pantógrafo bateu na carcaça traseira com barulho de estalo: o sensor não disparou; verifique se o cabo do sensor não está desconectado da placa controladora."
    ],
    "dicaArtrelados": "A cada 6 meses: retire as tampas de proteção do pantógrafo e dê um jato de ar comprimido nos sensores de ponto zero dos eixos X e Y! Uma simples poeirinha de linha ali dentro pode travar sua máquina e atrasar uma entrega importante!",
    "voceSabia": "Antes da invenção dos fotointerruptores ópticos nos anos 1980, as máquinas usavam chaves mecânicas de clique (Microswitches) que desgastavam a mola e perdiam até 2 milímetros de precisão a cada ano!",
    "practicalExercise": "Com a máquina ligada e sem bastidor, aperte a função 'Retornar à Origem (Home)'. Observe o deslocamento do pantógrafo até o clique/sinal do sensor óptico e veja a coordenada marcar exatamente X:0.0 e Y:0.0 no painel digital.",
    "quickSummary": "Y-Drive Home Sensor Calibration é o ajuste e limpeza dos sensores ópticos que definem o ponto zero absoluto do eixo Y, garantindo centralização e prevenindo batidas de bastidor.",
    "recommendedSettings": {
      "speedPPM": "Compatível com todas as velocidades",
      "needleType": "Universal",
      "density": "Tolerância de calibração de ponto zero: ±0.02 mm"
    },
    "relatedTerms": [
      "Ponto Zero (Home Position)",
      "Fotointerruptor Óptico",
      "Eixo Y (Pantógrafo)",
      "Limite de Curso (Over-Travel)",
      "Manutenção Preventiva Mecatrônica"
    ],
    "tags": [
      "y-027",
      "homesensor",
      "pontozero",
      "eixoy",
      "calibracao",
      "manutencao",
      "sensoroptico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN EMBROIDERY MACHINERY. Optical Sensor Alignment and Homing Diagnostics Manual. Ichinomiya, 2021.",
      "TAJIMA TECHNICAL SERVICE DIVISION. Limit Switches, Photo-Interrupters and Zero-Point Offset Setup. Nagoya, 2022.",
      "ARTRELADOS. Guia de Mecatrônica, Sensores e Diagnóstico de Falhas em Máquinas Computadorizadas. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-028-yarn-loft-and-chenille-effect-embroidery",
    "code": "Y-028",
    "letter": "Y",
    "term": "Yarn Loft & Chenille Effect Embroidery (Efeito Chenille e Alto Volume com Linhas de Lã e Meadas)",
    "pronunciation": "iárn lóft end xe-níl i-fékt em-broi-de-ri",
    "level": "Intermediário 🟡",
    "category": "Aplicações & Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'yarn loft' (resiliência volumétrica / densidade aparente e fofura de fios grossos) e do francês 'chenille' (lagarta peluda, aludindo ao fio aveludado e felpudo).",
    "summary": "Técnica de matriz com pontos cheios longos e baixa densidade usando fios grossos de lã ou acrílico para criar o clássico efeito felpudo e aveludado estilo colegial (Letterman Jackets).",
    "definition": "O Yarn Loft & Chenille Effect Embroidery (Bordado de Alto Volume Téxtil, Imitação de Ponto Chenille / Moss Stitch e Aplicação de Fios Encorpados de Lã e Acrílico / Wool-Blend Loft Stitching) é a adaptação técnica de digitalização e costura que permite reproduzir o toque felpudo, aveludado e tridimensional das jaquetas colegiais clássicas americanas (*Varsity / Letterman Jackets*) utilizando máquinas de bordar convencionais de ponto fixo. Ao invés de usar linhas finas comuns 40wt com alta densidade, a técnica utiliza fios encorpados de lã, acrílico ou meadas de bordar (espessura 12wt ou fios de crochê fino) associados a uma digitalização especial com pontos cheios soltos e cruzados em camadas sobrepostas com densidade aberta (0.80 mm a 1.20 mm). O volume natural das fibras (*loft*) expande-se sobre o tecido, preenchendo todos os espaços com um toque quente, fofo e luxuoso.",
    "technicalDetails": "Exige agulha de olho largo e canaleta profunda (Topstitch ou Chenille Needle calibre 100/16 ou 110/18), redução drástica da velocidade de máquina para 500 a 600 PPM e alívio de 50% na tensão superior dos discos para não esmagar a felpa do fio.",
    "beginnerExplanation": "Sabe aquelas letras gigantes, fofinhas e aveludadas que a gente vê nas jaquetas de faculdade americanas dos filmes? Aquele efeito macio como um ursinho de pelúcia se chama efeito Chenille! Você pode fazer esse mesmo efeito lindo na sua máquina de bordar comum usando uma linha de lãzinha ou meada mais gordinha com uma agulha de furo largo: a matriz é programada com pontos bem abertos e soltinhos, e quando a máquina borda, os pelinhos da lã se abrem e criam uma textura fofa e maravilhosa!",
    "howItWorks": [
      "1. O programador digitaliza a matriz com pontos cheios largos e espaçamento bem aberto (densidade de 0.90 mm a 1.10 mm).",
      "2. Coloca-se uma agulha especial de calibre grosso e olho largo (Topstitch 100/16) na máquina.",
      "3. Passa-se o fio encorpado de lã ou acrílico pelos guias com tensão superior super leve e soltinha.",
      "4. Enquadra-se o tecido pesado (como moletom felpado ou feltro de lã) com entretela de corte grosso (Cutaway 80 g/m²).",
      "5. Reduz-se a velocidade da máquina para 550 PPM.",
      "6. A máquina executa os pontos: o fio grosso assenta-se sobre o tecido sem ser esmagado.",
      "7. As fibras volumosas da lã se expandem criando uma superfície aveludada, quente e com relevo espetacular."
    ],
    "applications": [
      "Letras volumosas e emblemas em jaquetas de formatura, moletons colegiais e casacos de inverno.",
      "Bordados decorativos rústicos em almofadas de veludo, mantas de sofá e tapeçarias.",
      "Detalhes aveludados em roupinhas de bebê (como o corpinho peludo de ursinhos e ovelhas).",
      "Emblemas vintage e peças de moda jovem estilo retrô esportivo."
    ],
    "characteristics": [
      "Toque ultra-aveludado, fofo e acolchoado com textura de pelúcia.",
      "Economia massiva de pontos (uma letra que levaria 8.000 pontos finos é feita com apenas 2.500 pontos de lã).",
      "Visual nobre e exclusivo que agrega altíssimo valor comercial às peças de inverno."
    ],
    "commonErrors": [
      "❌ Tentar passar fio grosso de lã em agulha fina comum 75/11 (a linha desfia, quebra e entorta a barra da agulha).",
      "❌ Usar matriz digitalizada para linha normal com densidade de 0.40 mm (o bordado vira um bloco duro e intransponível).",
      "❌ Bordar em velocidade alta (> 750 PPM), fazendo o fio grosso queimar e arrebentar por atrito."
    ],
    "troubleshootingTips": [
      "O fio de lã está arrebentando e desfiando antes de chegar no tecido: troque a agulha por uma agulha Topstitch 100/16 ou Metallic 100/16 que possui o olho 3 vezes maior.",
      "O bordado ficou parecendo uma pedra dura: aumente o espaçamento de pontos no software de 0.40 mm para 0.95 mm para dar espaço para a lã se expandir.",
      "A linha da bobina está subindo para cima do bordado: aperte um pouco o parafuso da caixa de bobina e solte quase totalmente a tensão da linha superior."
    ],
    "dicaArtrelados": "Para fazer moletons de inverno que vendem como água: compre fios de lã especiais para bordado (como a linha Burmilana da Madeira) e use feltro como aplique com efeito Chenille! Suas peças vão parecer importadas das melhores grifes dos Estados Unidos!",
    "voceSabia": "O bordado chenille clássico foi inventado no século XVIII na França e era feito com agulhas de gancho rotativas que puxavam laçadas contínuas de lã pelo avesso do tecido sem usar linha de bobina!",
    "practicalExercise": "Digitalize a letra 'B' com 6 cm de altura com densidade de 1.0 mm. Coloque uma agulha 100/16 e passe um fio de lã fina de bordar. Borde sobre um pedaço de moletom e sinta com os dedos o toque fofinho e aveludado incomparável.",
    "quickSummary": "Yarn Loft & Chenille Effect é a técnica que utiliza fios grossos de lã ou acrílico com matrizes de baixa densidade para criar texturas felpudas e aveludadas estilo colegial.",
    "recommendedSettings": {
      "speedPPM": "500 a 600 PPM",
      "needleType": "100/16 ou 110/18 Topstitch de Olho Largo",
      "density": "Densidade aberta especial: 0.85 mm a 1.20 mm"
    },
    "relatedTerms": [
      "Efeito Chenille",
      "Linha de Lã (Wool Thread)",
      "Agulha Topstitch",
      "Jaqueta Colegial (Varsity Jacket)",
      "Ponto Fofo (Loft Stitch)"
    ],
    "tags": [
      "y-028",
      "chenille",
      "yarnloft",
      "la",
      "moletom",
      "relevo",
      "veludo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNE. Burmilana Wool & Acrylic Embroidery Thread Application Guide. Freiburg, 2022.",
      "EMBROIDERY MAGAZINE. Modern Chenille Techniques & Heavy Yarn Handling. Londres, 2021.",
      "ARTRELADOS. Técnicas Especiais: Efeito Chenille, Fios Especiais de Lã e Alto Relevo em Roupas de Inverno. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-029-yearly-preventive-maintenance-protocol",
    "code": "Y-029",
    "letter": "Y",
    "term": "Yearly Preventive Maintenance Protocol for Embroidery Machines (Protocolo Anual de Revisão Mecânica e Eletrônica)",
    "pronunciation": "iér-li pri-vén-tiv mêin-te-nans pro-to-col for em-broi-de-ri ma-xins",
    "level": "Avançado 🔴",
    "category": "Mecânica, Calibração & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Dos manuais industriais de engenharia de confiabilidade (Total Productive Maintenance - TPM) e protocolos de garantia de fabricantes de máquinas CNC.",
    "summary": "Checklist técnico completo de 25 passos executado anualmente para engraxar caixas de engrenagens, inspecionar folgas de lançadeira e testar fontes de alimentação.",
    "definition": "O Yearly Preventive Maintenance Protocol for Embroidery Machines (Protocolo Anual de Manutenção Preventiva Classe A, Revisão Geral Eletromecânica e Homologação de Confiabilidade Operacional) é o procedimento abrangente e exaustivo realizado a cada 12 meses ou a cada 3.000 horas de operação da máquina de bordar. Enquanto a manutenção diária foca na limpeza superficial e lubrificação da lançadeira, a revisão anual envolve a desmontagem de tampas estruturais, lavagem química de graxas antigas oxidadas, reaperto de parafusos estruturais com torquímetro, calibração do sincronismo da lançadeira (grau de captura em 198° a 202°), teste de ripple em fontes de alimentação DC e atualização de firmware das placas controladoras.",
    "technicalDetails": "Substituição preventiva de buchas sinterizadas de bronze, verificação de desgaste nas engrenagens cônicas helicoidais de dentes espoidais, lubrificação com graxa de lítio grau NLGI 2 com dissulfeto de molibdênio ($MoS_2$) e teste de isolamento elétrico de aterramento (< 5 Ohms).",
    "beginnerExplanation": "Assim como a gente leva o carro para a revisão geral da concessionária uma vez por ano para trocar óleo, filtros e olhar os freios, a sua máquina de bordar também merece um 'dia de spa' completo uma vez por ano! É o momento em que o técnico abre as tampas protegidas, limpa as graxas velhas, engraxa as engrenagens de ferro com graxa nova, confere se todas as agulhas estão retinhas e deixa a máquina regulada, silenciosa e perfeita para trabalhar mais um ano inteirinho sem quebrar nem dar dor de cabeça!",
    "howItWorks": [
      "1. O técnico desliga a máquina e desconecta da rede elétrica.",
      "2. Remove todas as tampas protetoras frontais, laterais e da base inferior da mesa.",
      "3. Aplica ar comprimido desumidificado para remover toda a poeira têxtil acumulada nos circuitos.",
      "4. Remove a graxa velha ressecada das caixas de engrenagem e aplica graxa nova de lítio com bissulfeto de molibdênio.",
      "5. Verifica o ponto de sincronismo entre a ponta da lançadeira e a descida da agulha com calibre de folga (0.05 mm).",
      "6. Inspeciona a lâmina fixa e móvel do sistema de corte de linha e afia ou substitui as facas.",
      "7. Mede as tensões elétricas da fonte (+5V, +24V, +36V) com multímetro digital calibrado.",
      "8. Remonta as tampas, liga a máquina e executa a matriz de teste padrão de 10.000 pontos em velocidade máxima."
    ],
    "applications": [
      "Protocolo obrigatório para manter a garantia de fábrica de máquinas novas.",
      "Prevenção de quebras catastróficas em períodos de pico de encomendas (como volta às aulas e Natal).",
      "Extensão da vida útil da máquina de bordar por mais de 15 a 20 anos em perfeito estado.",
      "Garantia de silêncio acústico, precisão milimétrica e ausência de manchas de óleo nas peças."
    ],
    "characteristics": [
      "Checklist estruturado em 25 pontos críticos mecânicos e eletrônicos.",
      "Aumenta a eficiência operacional e reduz paradas não programadas em até 95%.",
      "Preserva o valor de revenda do equipamento no mercado profissional."
    ],
    "commonErrors": [
      "❌ Esperar a máquina quebrar ou travar de vez para chamar a assistência técnica.",
      "❌ Usar graxa automotiva comum ou graxa de rolamento pesado que endurece e pesa o motor.",
      "❌ Aplicar óleo líquido comum nas placas eletrônicas e sensores ópticos durante a limpeza."
    ],
    "troubleshootingTips": [
      "A máquina está fazendo um ruído metálico áspero no bloco inferior: as engrenagens cônicas da lançadeira estão sem graxa; desmonte a tampa da base e aplique graxa de lítio NLGI 2.",
      "O corte de linha está mastigando a linha inferior ao invés de cortar: as facas atingiram o limite de vida útil anual; substitua o par de lâminas móvel e fixa do trimmer.",
      "A máquina reinicia sozinha quando atinge velocidade alta: a fonte de alimentação está com capacitores estufados; solicite a revisão dos módulos eletrônicos de potência."
    ],
    "dicaArtrelados": "Agende a revisão anual da sua máquina sempre em um mês mais tranquilo (como janeiro ou fevereiro)! Fazer a revisão com calma garante que sua máquina vai aguentar o tranco pesado de todas as datas comemorativas do ano com zero defeitos!",
    "voceSabia": "Máquinas industriais de marcas consagradas (como Tajima e Barudan) que seguem o protocolo anual de manutenção preventiva ultrapassam facilmente a marca de 500 MILHÕES de pontos bordados em 20 anos de uso contínuo!",
    "practicalExercise": "Pegue o manual da sua máquina e anote na primeira página a data da última revisão geral. Se já faz mais de 12 meses, faça um checklist visual: limpe a caixa de bobina, cheque as correias e agende a visita do seu técnico de confiança.",
    "quickSummary": "Yearly Preventive Maintenance Protocol é o checklist anual de revisão profunda que renova graxas, afia facas, calibra lançadeiras e testa fontes, garantindo 20 anos de vida útil à máquina.",
    "recommendedSettings": {
      "speedPPM": "Compatível com todas as velocidades",
      "needleType": "Universal",
      "density": "Periodicidade recomendada: A cada 12 meses ou 3.000 horas de operação"
    },
    "relatedTerms": [
      "Manutenção Preventiva (TPM)",
      "Sincronismo de Lançadeira",
      "Graxa de Lítio NLGI 2",
      "Faca de Corte (Trimmer Blade)",
      "Fonte de Alimentação DC"
    ],
    "tags": [
      "y-029",
      "revisaoanual",
      "manutencao",
      "mecanica",
      "lubrificacao",
      "longevidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE MANUAL. Annual Preventive Maintenance & Overhaul Standards. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. 3000-Hour Factory Inspection & Mechanical Re-Greasing Protocol. Ichinomiya, 2021.",
      "ARTRELADOS. Manual Completo de Manutenção Preventiva, Lubrificação e Cuidados Mecânicos para Ateliês. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-030-yarn-twist-direction-s-twist-vs-z-twist",
    "code": "Y-030",
    "letter": "Y",
    "term": "Yarn Twist Direction - S-Twist vs. Z-Twist (Torção de Fios: Sentido S vs. Sentido Z)",
    "pronunciation": "iárn tuist di-rec-xion: és-tuist vêr-sus zê-tuist",
    "level": "Avançado 🔴",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da física têxtil da fiação e retorção de filamentos sintéticos, onde a inclinação helicoidal das fibras segue a barra central da letra 'S' (anti-horário) ou da letra 'Z' (horário).",
    "summary": "Estudo da direção de torção das linhas de bordar, demonstrando por que linhas de bordado eletrônico exigem torção em Z para não desenrolarem com a rotação horária da lançadeira.",
    "definition": "O Yarn Twist Direction - S-Twist vs. Z-Twist (Direcionalidade Helicoidal de Retorção de Fios de Bordar, Equilíbrio Torsional e Mecânica de Captura de Laçada) é a característica estrutural da fiação que determina o sentido de rotação em que os cabos individuais de filamento são unidos para formar a linha de bordado (2-ply ou 3-ply). No bordado computadorizado de alta velocidade (800 a 1.200 PPM), a ponta da lançadeira rotativa gira no sentido horário. Ao penetrar na laçada formada atrás da agulha, a lançadeira aplica um esforço de torção horária adicional sobre o fio. Linhas com torção em 'Z' (torção à direita) apertam-se e ganham coesão com esse movimento, mantendo o filamento unido. Linhas com torção em 'S' (comuns em costura manual ou crochê) desenrolam-se no olho da agulha, gerando desfiamento, nós frouxos e quebras instantâneas a cada 50 pontos.",
    "technicalDetails": "Número de voltas de torção por metro (Turns Per Meter - TPM): 650 a 850 TPM para linhas 100% poliéster trilobal 40wt com torção Z final (Z-Final Twist / S-Ply Pre-Twist). Fator de torção alfa ($k_t$) calibrado para neutralidade torsional sob tensão dinâmica de 120 gf.",
    "beginnerExplanation": "Você sabia que as linhas de bordar são enroladinhas como uma trancinha? A direção em que essa trança é torcida é super importante! As máquinas de bordar têm uma peça redonda lá dentro (a lançadeira) que gira no sentido do relógio. As linhas de bordado são fabricadas com a torção na direção da letra 'Z': assim, quando a máquina gira rápido, ela ajuda a linha a ficar mais apertadinha e forte! Se você tentar usar uma linha de costura comum ou de crochê (que muitas vezes é torcida na direção 'S'), a máquina vai 'desenrolar' a sua linha e ela vai virar um tufo de fiapos e quebrar na hora!",
    "howItWorks": [
      "1. Na fábrica, múltiplos filamentos de poliéster ou viscose são pré-torcidos individualmente em sentido 'S'.",
      "2. Dois ou três cabos são então retorcidos juntos no sentido oposto 'Z' (estrutura 2-ply ou 3-ply equilibrada).",
      "3. O cone de linha é colocado no porta-fios da máquina de bordar.",
      "4. A agulha desce e cria a laçada (loop) de linha no ponto morto inferior.",
      "5. A ponta da lançadeira passa rente à agulha no sentido horário, capturando a laçada.",
      "6. O atrito da rotação horária reforça a torção 'Z' do fio, mantendo os filamentos 100% compactos e lisos.",
      "7. O ponto é arrematado com brilho impecável e sem nenhum desfiamento no tecido."
    ],
    "applications": [
      "Seleção técnica de linhas para bordados computadorizados industriais de alta rotação.",
      "Identificação de linhas inadequadas de costura manual ou tricô que causam quebras na máquina.",
      "Homologação de fornecedores de fios de poliéster, viscose e fios metalizados.",
      "Regulagem de estabilidade de laçada em máquinas de alta velocidade (1.000+ PPM)."
    ],
    "characteristics": [
      "Torção em 'Z' garante laçadas compactas e estáveis na lançadeira.",
      "Elimina desfiamento e quebras por abertura de filamentos no olho da agulha.",
      "Proporciona reflexão de luz uniforme e brilho acetinado constante no bordado."
    ],
    "commonErrors": [
      "❌ Tentar usar linhas de costura reta ou pesponto comum torcidas em 'S' na máquina de bordar.",
      "❌ Passar a linha pelos tensores no sentido invertido, forçando o desenrolamento do fio.",
      "❌ Usar cones de linha artesanal de procedência duvidosa sem especificação de torção Z industrial."
    ],
    "troubleshootingTips": [
      "A linha começa a abrir em vários fios fininhos e quebra a cada minuto: a linha é de baixa qualidade ou possui torção 'S' inadequada para bordado; substitua por linha própria de bordado com torção 'Z'.",
      "A linha fica torcendo em espiral e fazendo nós antes de entrar no tensor: o cone tem excesso de torção estática; coloque uma redinha elástica de proteção sobre o cone de linha.",
      "Os pontos cheios estão ficando opacos e sem brilho: a torção da linha abriu devido à tensão excessiva nos tensores superiores; afrouxe o botão de tensão em 1/2 volta."
    ],
    "dicaArtrelados": "Para saber se a sua linha tem torção 'Z': segure um pedaço de 10 cm na vertical e olhe bem de perto. Se as ranhuras diagonais da linha seguirem a mesma inclinação da barra do meio da letra 'Z' (da esquerda para a direita descendo), ela é perfeita para sua máquina de bordar!",
    "voceSabia": "Mais de 99% das linhas de bordado eletrônico produzidas no mundo pelas grandes marcas (como Madeira, Gunold, Coats e Linhas Corrente) utilizam obrigatoriamente a torção final em 'Z'!",
    "practicalExercise": "Pegue um pedaço de linha de bordado de boa marca e tente desenrolá-la girando com os dedos no sentido anti-horário e depois no sentido horário. Observe como no sentido horário ela fica ainda mais firme e fechadinha.",
    "quickSummary": "Yarn Twist Direction é a orientação de torção do fio, sendo a torção em 'Z' obrigatória no bordado eletrônico para suportar a rotação horária da lançadeira sem abrir filamentos.",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "75/11 Ponta Bola ou Ponta Fina",
      "density": "Linha padrão: 40wt 100% Poliéster Trilobal com Torção Z"
    },
    "relatedTerms": [
      "Torção Z (Z-Twist)",
      "Torção S (S-Twist)",
      "Poliéster Trilobal",
      "Lançadeira Rotativa",
      "Laçada da Agulha (Loop Formation)"
    ],
    "tags": [
      "y-030",
      "ztwist",
      "stwist",
      "torcao",
      "fios",
      "linhas",
      "fisicatextil",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HEARLE, J. W. S.; GROSBERG, P.; BACKER, S. Structural Mechanics of Yarns. Cambridge: MIT Press, 2021.",
      "MADEIRA THREADS MANUAL. Thread Engineering, Twist Direction and Machine Compatibility. Freiburg, 2022.",
      "ARTRELADOS. Física dos Fios e Engenharia de Insumos para Bordado Computadorizado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-031-yellow-needle-point-identification-code",
    "code": "Y-031",
    "letter": "Y",
    "term": "Yellow Needle Point Identification Code (Código de Identificação da Ponta Amarela em Agulhas Especiais)",
    "pronunciation": "iê-lou ni-dol point ai-den-ti-fi-kei-xion côud",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Mecânica de Penetração",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do sistema internacional de codificação por cores nos cabos de agulhas industriais e domésticas (Schmetz, Organ e Groz-Beckert).",
    "summary": "Identificação da faixa amarela ou haste dourada no cabo da agulha, indicando ponta bola fina para malhas delicadas ou revestimento de nitreto de titânio de altíssima durabilidade.",
    "definition": "O Yellow Needle Point Identification Code (Codificação Cromática Universal de Agulhas, Ponta Bola Fina / Haste Dourada de Titânio TiN) é a convenção industrial de cores gravada no cabo ou no topo da agulha de bordar. A cor amarela possui dois significados técnicos essenciais: 1) Em agulhas domésticas de marcas de referência (como Schmetz), a faixa de cor amarela identifica a ponta bola fina para tecidos de malha elástica (*Jersey / Stretch Needle*), que afasta as laçadas do tecido sem romper os fios de elastano; 2) Em agulhas industriais com revestimento cerâmico (como Organ PD e Groz-Beckert Gebedur), o tom dourado/amarelo indica o tratamento com Nitreto de Titânio (TiN), conferindo dureza de 2.900 HV e durabilidade até 5 vezes maior em bordados de alta rotação.",
    "technicalDetails": "Calibração de ponta: SES (Small Ball Point - raio de 0.05 mm). Revestimento cerâmico: TiN com espessura de 2 a 3 micrômetros. Redução do desgaste por abrasão em 80% comparado a agulhas convencionais de cromo.",
    "beginnerExplanation": "Quando você olha para o cabo da sua agulha e vê uma faixinha amarela ou repara que ela é inteira douradinha como ouro, isso é um aviso importante do fabricante! A faixinha amarela avisa que a agulha tem uma pontinha levemente arredondada (ponta bola) perfeita para bordar tecidos de malha e roupinhas de bebê sem furar o tecido. Já a agulha inteira dourada é feita com revestimento de titânio: ela é super resistente, não perde a ponta fácil e dura centenas de milhares de pontos sem cegar!",
    "howItWorks": [
      "1. A bordadeira confere a tabela de cores da marca de agulhas antes de instalar no cabeçote.",
      "2. Identifica a faixa amarela para projetos em malha de algodão, piquet, lycra e tecidos elásticos.",
      "3. Para produções pesadas e contínuas (como bonés e couro), escolhe a agulha inteira amarela/dourada de titânio.",
      "4. Instala a agulha com a canaleta longa voltada para a frente e o chanfro voltado para a lançadeira.",
      "5. A agulha ponta bola amarela penetra a malha afastando as fibras sem cortá-las.",
      "6. A peça de malha é bordada sem produzir microfuros ou furos de agulha após a primeira lavagem.",
      "7. A agulha de titânio mantém a nitidez do ponto por mais de 50 horas contínuas de bordado."
    ],
    "applications": [
      "Bordados em camisetas polo de piquet, malhas de algodão e bodies de bebê.",
      "Produções intensivas em máquinas industriais operando acima de 900 PPM.",
      "Bordados em materiais sintéticos abrasivos e tecidos resinados pesados.",
      "Identificação visual rápida da agulha correta na gaveta de ferramentas do ateliê."
    ],
    "characteristics": [
      "Identificação visual imediata do tipo de ponta e revestimento.",
      "Proteção total contra furos e rasgos em tecidos de malha e elastano.",
      "Vida útil até 5 vezes superior com revestimento de nitreto de titânio."
    ],
    "commonErrors": [
      "❌ Usar agulha ponta fina afiada (faixa azul/roxa) em malhas elásticas, furando o tecido do cliente.",
      "❌ Continuar usando a agulha amarela de titânio após uma colisão forte no bastidor (a agulha pode entortar mesmo sem quebrar).",
      "❌ Limpar o cabo da agulha com solventes agressivos que apagam a marcação de cor."
    ],
    "troubleshootingTips": [
      "Apareceram furinhos no tecido de malha ao redor do bordado após a lavagem: troque imediatamente a agulha por uma agulha de ponta bola (código amarelo / SES).",
      "A agulha perde o fio rapidamente ao bordar materiais sintéticos duros: utilize agulhas com haste dourada de nitreto de titânio (código PD ou Gebedur).",
      "A linha está desfiando na passagem pelo olho da agulha: verifique se o olho da agulha não sofreu desgaste; substitua a agulha a cada 10 a 15 horas de uso."
    ],
    "dicaArtrelados": "Tenha sempre um pacote de agulhas de ponta bola amarela (calibre 75/11) reservado exclusivamente para bodies de bebê e camisetas polo! Elas entram entre os fios da malha com a maior suavidade do mundo e nunca deixam aqueles furinhos chatos!",
    "voceSabia": "O sistema universal de faixas de cores em agulhas domésticas foi criado pela fábrica alemã Schmetz na década de 1970 para ajudar costureiras e bordadeiras a identificar o tipo de ponta sem precisar de uma lupa de relojoeiro!",
    "practicalExercise": "Examine as agulhas do seu ateliê sob boa iluminação. Separe as agulhas com faixinha amarela (malha) das agulhas sem cor ou com faixas de outras cores (ponta fina/jeans) e guarde em organizadores separados.",
    "quickSummary": "Yellow Needle Identification Code é a marcação amarela que identifica agulhas ponta bola para tecidos de malha elástica ou revestimento cerâmico de titânio de longa vida útil.",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "75/11 Ponta Bola Fina (SES / Stretch) ou Titânio (PD)",
      "density": "Compatível com todas as matrizes"
    },
    "relatedTerms": [
      "Ponta Bola (Ball Point / SES)",
      "Agulha de Titânio (PD / Gebedur)",
      "Código de Cores de Agulhas",
      "Furos na Malha (Needle Holes)",
      "Chanfro da Agulha (Scarf)"
    ],
    "tags": [
      "y-031",
      "agulhas",
      "pontaamarela",
      "pontabola",
      "titanio",
      "malhas",
      "acessorios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ NEEDLES MANUAL. Color Code Identification Chart & Needle Point Selection. Herzogenrath, 2022.",
      "GROZ-BECKERT KG. Gebedur Titanium Coated Needles for High Performance Embroidery. Albstadt, 2021.",
      "ARTRELADOS. Manual Prático de Agulhas, Pontas e Tecnologias de Perfuração Têxtil. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-032-y-axis-coordinate-inversion-in-cap-and-tubular-drivers",
    "code": "Y-032",
    "letter": "Y",
    "term": "Y-Axis Coordinate Inversion in Cap & Tubular Drivers (Inversão de Coordenadas do Eixo Y em Bastidores Cilíndricos)",
    "pronunciation": "uái-ék-sis co-or-di-neit in-ver-xion in cäp end tu-biu-lar drai-vers",
    "level": "Avançado 🔴",
    "category": "Programação e Digitalização de Matrizes",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da álgebra linear e geometria analítica de máquinas CNC aplicadas à transformação de matrizes cartesianas ($Y' = -Y$) para peças tubulares e bonés.",
    "summary": "Rotina de inversão de sinal no vetor do eixo Y executada pelo painel ou software para bordar peças tubulares de cabeça para baixo sem inverter a leitura do texto.",
    "definition": "O Y-Axis Coordinate Inversion in Cap & Tubular Drivers (Transformação Algébrica de Coordenadas Polares, Inversão de Sinal do Vetor Y e Orientação Geométrica Tubular) é a operação matemática executada pelo processador da máquina de bordar ou pelo software de digitalização ao alternar do modo plano para o modo tubular/boné. Como as peças tubulares (como bonés, meias, punhos de camisa e pernas de calça) são encaixadas de frente para a operadora com a abertura voltada para fora do cabeçote, o topo da peça fica fisicamente voltado para o operador, enquanto na tela da máquina ele aponta para cima. A inversão de coordenadas multiplica todos os valores do eixo Y por -1 (ou aplica uma rotação de 180° com espelhamento compensado), garantindo que o texto e os símbolos sejam bordados com a orientação de leitura correta quando a peça for vestida.",
    "technicalDetails": "Transformação de matriz de rotação bidimensional com inversão de sinal: $[X', Y'] = [X cdot cos(180^circ) - Y cdot sin(180^circ), X cdot sin(180^circ) + Y cdot cos(180^circ)] = [-X, -Y]$. Preservação da ordem de sobreposição dos objetos.",
    "beginnerExplanation": "Quando você vai bordar um boné ou uma manga de camisa fechada, você precisa encaixar a peça virada 'de cabeça para baixo' na máquina para ela caber no braço de ferro. Se a máquina bordasse normal, o nome do cliente ia sair de cabeça para baixo! A inversão do eixo Y é um botão mágico no painel da máquina (ou no programa) que vira o desenho em 180° de cabeça para baixo na hora certa, para que quando o cliente colocar o boné na cabeça, o nome fique perfeitamente em pé e lindo para todo mundo ler!",
    "howItWorks": [
      "1. O programador finaliza a matriz na orientação de leitura padrão na tela do computador.",
      "2. A bordadeira monta a peça no bastidor cilíndrico de boné ou tubular.",
      "3. Encaixa o bastidor no braço livre da máquina.",
      "4. No painel de controle, seleciona o ícone de 'Bastidor Tubular / Boné' ou pressiona o botão 'Girar 180°'.",
      "5. A máquina aplica a inversão de coordenadas no eixo Y automaticamente.",
      "6. A bordadeira executa o traçado de área (Trace) e confirma que o topo do desenho está alinhado com o topo real da peça.",
      "7. A máquina borda o desenho; ao retirar a peça do bastidor, o bordado fica perfeitamente posicionado."
    ],
    "applications": [
      "Bordados em bonés de beisebol, viseiras e chapéus no bastidor de 270°.",
      "Bordados em mangas de camisas polo, punhos e pernas de calças prontas.",
      "Personalização de meias esportivas, munhequeiras e caneleiras tubulares.",
      "Bordados em bolsos pequenos e áreas de difícil acesso com bastidores cilíndricos."
    ],
    "characteristics": [
      "Garante a orientação correta de leitura sem necessidade de redesenhar a matriz.",
      "Integração automática com os sensores de limites do bastidor cilíndrico.",
      "Evita o erro clássico de bordar peças prontas de ponta-cabeça."
    ],
    "commonErrors": [
      "❌ Girar a matriz no software de computador E TAMBÉM ativar a rotação no painel da máquina (a matriz gira 360° e volta a ficar de cabeça para baixo!).",
      "❌ Esquecer de fazer o teste de traçado (Trace) antes de iniciar o bordado no braço cilíndrico.",
      "❌ Não centralizar o ponto de origem antes de aplicar a rotação de 180° no painel."
    ],
    "troubleshootingTips": [
      "O bordado saiu de cabeça para baixo no boné: você esqueceu de ativar o modo boné no painel; ative o ícone de rotação de 180° antes de dar o Start.",
      "O desenho saiu de cabeça para baixo mesmo com o modo boné ativado: a matriz já havia sido salva invertida no computador; desative a rotação no painel ou salve a matriz na posição normal.",
      "A máquina deu erro de limite de área após girar o desenho: o desenho girado ultrapassou as margens do bastidor; reduza o tamanho do desenho em 5% e recentralize."
    ],
    "dicaArtrelados": "Adote este padrão no seu ateliê: NUNCA salve matrizes de cabeça para baixo no seu computador! Salve SEMPRE todas as matrizes na posição normal em pé e deixe para ativar a rotação de 180° no painel da máquina na hora de colocar o boné! Assim você nunca vai se confundir!",
    "voceSabia": "Nas primeiras máquinas de bordar automáticas dos anos 1980, não havia botão de rotação no painel: os programadores precisavam redigitalizar o desenho inteiro de cabeça para baixo manualmente em mesas digitalizadoras!",
    "practicalExercise": "Coloque uma matriz de teste no painel da sua máquina. Ative a função de rotação de 180° (ou espelhamento Y) e execute o traçado com o laser para ver o cabeçote contornar a área invertida.",
    "quickSummary": "Y-Axis Coordinate Inversion é a inversão algébrica das coordenadas verticais da matriz que orienta o bordado corretamente em peças tubulares e bonés montados no braço livre.",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM no modo boné/tubular",
      "needleType": "80/12 Ponta Fina Reforçada (SAN 6)",
      "density": "Matriz padronizada na orientação normal com rotação no painel"
    },
    "relatedTerms": [
      "Modo Boné (Cap Mode)",
      "Rotação 180°",
      "Bastidor Tubular",
      "Traçado de Área (Trace)",
      "Origem da Matriz (Design Origin)"
    ],
    "tags": [
      "y-032",
      "inversaodeeixo",
      "eixoy",
      "bones",
      "tubular",
      "rotacao",
      "painel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN EMBROIDERY MACHINERY. Operations Manual: Tubular and Cap Frame Orientation Setup. Ichinomiya, 2021.",
      "TAJIMA TECHNICAL BULLETIN. Coordinate Transformations and Cap Driver Rotation Matrix. Nagoya, 2022.",
      "ARTRELADOS. Guia de Operação de Painéis, Configurações de Bastidores e Cinemática CNC. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-033-yarn-lubrication-and-silicone-thread-emulsion",
    "code": "Y-033",
    "letter": "Y",
    "term": "Yarn Lubrication & Silicone Thread Emulsion (Lubrificação e Emulsão de Silicone para Fios de Alta Velocidade)",
    "pronunciation": "iárn lu-bri-ki-kei-xion end si-li-côun tréd i-môl-xion",
    "level": "Intermediário 🟡",
    "category": "Fios & Linhas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da tribologia química e tecnologia de acabamento têxtil de filamentos sintéticos com polidimetilsiloxano (PDMS).",
    "summary": "Aplicação de emulsões de silicone e óleos lubrificantes atóxicos no cone de linha para reduzir o atrito nos tensores e no olho da agulha em altas velocidades.",
    "definition": "O Yarn Lubrication & Silicone Thread Emulsion (Tratamento Tribológico de Filamentos, Emulsão de Silicone Hidrofóbico e Redução de Coeficiente de Fricção) é o processo químico e mecânico de condicionamento superficial aplicado às linhas de bordar durante a fiação industrial ou no próprio ateliê. Em operações contínuas a mais de 900 PPM, o atrito da linha ao passar pelos discos de tensão metálicos, espirais condutoras e pelo olho da agulha gera temperaturas superiores a 100 °C, causando microdesgastes e acúmulo de eletricidade estática. O banho de emulsão de silicone fluido de alta pureza (viscosidade de 100 a 350 cSt) cria uma película microscópica escorregadia que reduz o coeficiente de atrito em até 60%, estabiliza a tensão dinâmica da linha e anula quebras por superaquecimento.",
    "technicalDetails": "Teor de lubrificação no fio (*Oil Pick-Up - OPU*): 2.5% a 4.0% em peso. Silicone grau farmacêutico atóxico e inodoro, 100% solúvel e lavável em água morna sem deixar manchas ou anéis de óleo no tecido.",
    "beginnerExplanation": "Quando a máquina de bordar trabalha bem rápido, a linha passa raspando nos furinhos e no olho da agulha milhares de vezes por minuto, esquentando e criando atrito como se você estivesse esfregando as mãos com força no frio! As melhores linhas de bordado já vêm de fábrica com um banho invisível de silicone especial que funciona como um óleo deslizante: a linha escorrega suavezinha e macia pelos tensores, a agulha não esquenta e a linha não quebra de jeito nenhum!",
    "howItWorks": [
      "1. Na fábrica, a linha passa por roletes impregnados com emulsão de silicone líquido de alta pureza antes de ser enrolada no cone.",
      "2. No ateliê, para cones ressecados ou linhas metálicas difíceis, a bordadeira aplica umas gotinhas de lubrificante de silicone próprio para bordado no topo do cone.",
      "3. O silicone penetra uniformemente nas fibras da linha por capilaridade.",
      "4. A máquina opera em velocidade máxima (950 PPM).",
      "5. A linha desliza pelos discos de tensão com resistência suave e sem trancos.",
      "6. A temperatura no olho da agulha cai drasticamente, evitando a fusão do poliéster.",
      "7. O bordado é concluído com zero quebras de linha e sem deixar manchas no tecido."
    ],
    "applications": [
      "Condicionamento de linhas metálicas douradas e prateadas que tendem a quebrar com facilidade.",
      "Bordados contínuos em tecidos sintéticos densos (nylon, couro sintético e lona).",
      "Recuperação de cones de linha antigos que ficaram ressecados no armário.",
      "Produções industriais em alta velocidade (1.000+ PPM) com linhas escuras de alto atrito."
    ],
    "characteristics": [
      "Reduz o atrito mecânico nos tensores e na agulha em até 60%.",
      "Previne o aquecimento e o derretimento de fibras de poliéster em alta velocidade.",
      "Fórmula atóxica que sai completamente na primeira lavagem sem manchar."
    ],
    "commonErrors": [
      "❌ Usar óleo de máquina comum ou desengripante automotivo no cone de linha (mancha o tecido e destrói o cone para sempre!).",
      "❌ Encharcar o cone com excesso de lubrificante, fazendo a linha escorregar nos discos e soltar laçadas frouxas.",
      "❌ Aplicar silicone spray industrial que contenha solventes inflamáveis perto da máquina."
    ],
    "troubleshootingTips": [
      "A linha metálica fica quebrando e embolando nos tensores: pingue 3 gotas de lubrificante próprio de silicone líquido no cone de linha ou passe a linha por um bloco lubrificador de feltro.",
      "O cone de linha antigo está quebrando com facilidade: aplique uma camada suave de spray de silicone têxtil a 30 cm de distância e deixe agir por 1 hora antes de bordar.",
      "O bordado ficou com laçadas frouxas após lubrificar o cone: aperte a tensão superior em 1/2 volta para compensar a diminuição do atrito do fio nos tensores."
    ],
    "dicaArtrelados": "Tenha sempre no seu ateliê um frasquinho de silicone líquido puro para bordado (aquele bem fininho e transparente)! Quando você pegar uma linha metálica teimosa que não para de quebrar, passe umas gotinhas no cone: parece milagre, a linha roda lisa até o final!",
    "voceSabia": "A aplicação de emulsões de silicone em fios têxteis foi desenvolvida na Alemanha na década de 1960 pela empresa Wacker Chemie, permitindo o surgimento das máquinas de bordar automáticas de alta rotação!",
    "practicalExercise": "Passe um fio de linha seca entre os dedos apertando levemente e sinta o atrito. Pingue uma microgota de silicone no fio e passe de novo entre os dedos: observe como ele desliza instantaneamente sem nenhuma resistência.",
    "quickSummary": "Yarn Lubrication é a aplicação de silicone líquido atóxico nas linhas de bordar para reduzir o atrito nos tensores e na agulha, eliminando quebras e superaquecimento em alta velocidade.",
    "recommendedSettings": {
      "speedPPM": "850 a 1.000 PPM",
      "needleType": "75/11 ou 80/12 Ponta Fina ou Metálica",
      "density": "Lubrificação recomendada: 2 a 3 gotas de silicone puro por cone"
    },
    "relatedTerms": [
      "Silicone Líquido Têxtil",
      "Atrito da Agulha (Needle Friction)",
      "Linha Metálica",
      "Tensores Superiores",
      "Aquecimento de Agulha"
    ],
    "tags": [
      "y-033",
      "lubrificacao",
      "silicone",
      "fios",
      "linhas",
      "atrito",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD TECHNICAL MANUAL. Thread Lubrication & Silicone Conditioning for High-Speed Embroidery. Stockstadt, 2021.",
      "MADEIRA THREADS. Specialty Thread Care & High-Friction Substrate Solutions. Freiburg, 2022.",
      "ARTRELADOS. Química de Insumos Têxteis, Lubrificação e Controle de Atrito no Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-034-y-splitter-power-harness-for-multi-head-embroidery",
    "code": "Y-034",
    "letter": "Y",
    "term": "Y-Splitter Power Harness for Multi-Head Embroidery (Chicote Elétrico Divisor em Y para Máquinas Multicabeças)",
    "pronunciation": "uái-split-ter páu-er hár-nes for mul-ti-réd em-broi-de-ri",
    "level": "Avançado 🔴",
    "category": "Componentes & Mecânica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da engenharia eletrotécnica e cablagem de automação industrial de máquinas multicabeças CNC com topologia de distribuição em estrela e ramificações em Y.",
    "summary": "Chicotes elétricos bifurcados em Y com conectores blindados que distribuem alimentação e sinais de controle para solenoides de corte e sensores de cada cabeçote.",
    "definition": "O Y-Splitter Power Harness for Multi-Head Embroidery (Chicote Modular de Distribuição Eletromecânica em Y, Barramento de Potência de Solenoides e Cabeamento Blindado de Sensores) é o conjunto de cabos elétricos com derivações em bifurcação tipo 'Y' utilizado para interligar os módulos eletrônicos de máquinas de bordar industriais de 2, 4, 6, 8 e 12 cabeçotes. Esse chicote conduz a corrente contínua de alta amperagem (24V a 48V DC) necessária para disparar simultaneamente os solenoides de corte de linha (*thread trimmers*), motores de troca de cor e sensores ópticos de quebra de linha de cada cabeçote. O design em Y com conectores automotivos de engate rápido permite isolar ou substituir o cabeamento de um cabeçote com defeito sem interromper o funcionamento dos demais.",
    "technicalDetails": "Condutores de cobre estanhado flexível multifilar AWG 18/20 com blindagem contra ruídos eletromagnéticos (EMI Shielding). Queda de tensão máxima permitida ao longo do barramento de 12 cabeçotes: < 0.3V. Conectores banhados a ouro com trava mecânica à prova de vibração.",
    "beginnerExplanation": "Em uma máquina de bordar industrial grandona com várias cabeças bordando ao mesmo tempo, cada cabeça precisa receber energia e comandos elétricos para cortar a linha e trocar de cor no segundo exato! O cabo em Y é como um benjamim ou extensão elétrica super moderna e blindada que divide a energia do motor principal para cada uma das cabeças da máquina com total segurança, garantindo que todas cortem a linha juntas e funcionem como uma orquestra perfeita!",
    "howItWorks": [
      "1. A fonte de alimentação principal da máquina fornece tensão estabilizada de 24V/48V DC.",
      "2. O cabo principal corre pela calha traseira da viga da máquina.",
      "3. Em cada cabeçote, um conector divisor em Y (Y-Splitter) deriva a energia e o sinal de controle para a placa do cabeçote.",
      "4. No momento do comando de corte, a placa envia o pulso elétrico através da perna do Y para o solenoide da faca.",
      "5. O solenoide atua em menos de 20 milissegundos com força total.",
      "6. Caso um cabeçote precise de manutenção, o conector em Y é desacoplado individualmente.",
      "7. A máquina continua operando os outros cabeçotes normalmente sem curto-circuito."
    ],
    "applications": [
      "Máquinas industriais de bordar multicabeças (2 a 12 cabeçotes em linha).",
      "Distribuição de sinal de sensores de quebra de linha por feixe óptico.",
      "Alimentação de motores de passo individuais de troca de cor por agulha.",
      "Diagnóstico e manutenção elétrica preventiva de cabeçotes industriais."
    ],
    "characteristics": [
      "Distribuição de energia uniforme com perda mínima de tensão em todos os cabeçotes.",
      "Conectores blindados resistentes a vibrações mecânicas contínuas.",
      "Facilidade de manutenção modular sem desmontar a fiação principal."
    ],
    "commonErrors": [
      "❌ Puxar os cabos elétricos com força durante a troca de bastidores, danificando os pinos do conector em Y.",
      "❌ Emendar fios partidos com fita isolante comum em vez de usar conectores automotivos crimpados.",
      "❌ Permitir acúmulo de óleo de máquina e sujeira dentro dos plugues elétricos."
    ],
    "troubleshootingTips": [
      "O corte de linha automático falha apenas no cabeçote número 3: verifique o conector divisor em Y daquele cabeçote; pode haver um pino torto ou com mau contato elétrico.",
      "O sensor de linha fica apitando que a linha quebrou mesmo com a linha inteira: limpe os contatos do chicote divisor em Y com spray limpa-contatos elétricos.",
      "A máquina apresenta erro de sobrecarga na placa mãe: verifique se há fios do chicote em Y prensados contra a estrutura metálica do pantógrafo."
    ],
    "dicaArtrelados": "Durante a limpeza semanal da sua máquina multicabeças: inspecione as calhas de cabos atrás dos cabeçotes! Mantenha os chicotes sempre presos com abraçadeiras plásticas (enforca-gato) para que nenhum fio fique solto raspando no pantógrafo móvel!",
    "voceSabia": "As primeiras máquinas multicabeças dos anos 1960 tinham quilômetros de fios rígidos soldados ponto a ponto; a introdução dos chicotes modulares em Y nos anos 1990 reduziu o tempo de montagem de uma máquina de 2 semanas para apenas 2 dias!",
    "practicalExercise": "Com a máquina desligada, localize a calha de cabos atrás dos cabeçotes e observe como o chicote principal se divide em ramos menores em formato de Y para alimentar cada barra de agulha e solenoide.",
    "quickSummary": "Y-Splitter Power Harness é o chicote elétrico bifurcado em Y que distribui energia e comandos de corte para os cabeçotes de máquinas multicabeças com alta precisão e segurança.",
    "recommendedSettings": {
      "speedPPM": "Compatível com todas as velocidades",
      "needleType": "Universal",
      "density": "Tensão de operação: 24V a 48V DC estabilizada"
    },
    "relatedTerms": [
      "Máquina Multicabeças",
      "Solenoide de Corte",
      "Chicote Elétrico",
      "Sensor de Quebra de Linha",
      "Manutenção Eletrônica"
    ],
    "tags": [
      "y-034",
      "ysplitter",
      "chicoteeletrico",
      "multicabecas",
      "solenoide",
      "eletronica",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA EMBROIDERY MACHINERY. Multi-Head Electrical Wiring Harness & Power Distribution Schematics. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL SYSTEMS. Solenoid Control Harness and Sensor Bus Architecture. Ichinomiya, 2021.",
      "ARTRELADOS. Eletrotécnica, Automação e Redes de Comunicação em Máquinas de Bordar Industriais. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-035-yield-value-in-temporary-spray-adhesives",
    "code": "Y-035",
    "letter": "Y",
    "term": "Yield Value in Temporary Spray Adhesives (Rendimento e Cobertura de Adesivos Temporários em Spray)",
    "pronunciation": "íild vá-liu in tem-po-re-ri sprei ad-ri-sivs",
    "level": "Intermediário 🟡",
    "category": "Insumos & Estabilizadores",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da tecnologia de formulação de aerossóis poliméricos e cálculo de área de cobertura por metro quadrado ($m^2/kg$).",
    "summary": "Cálculo de rendimento e técnica de aplicação de cola spray temporária em névoa (Mist) para fixar tecidos na entretela sem grudar cola na agulha.",
    "definition": "O Yield Value in Temporary Spray Adhesives (Rendimento Volumétrico de Aerossóis Têxteis, Cobertura Micrométrica em Névoa e Polímeros Reposicionáveis sem Resíduos) é o índice que quantifica a área útil total de tecido e entretela fixada eficientemente por cada tubo de adesivo spray temporário (como 3M 75, Odif 505 ou similares de 500 ml). Um adesivo de alto rendimento possui bico atuador de névoa fina (*Micro-Mist Spray Pattern*) que deposita microgotículas uniformes de borracha termoplástica sintética, rendendo de 12 a 18 m² de área colada por tubo. Ao contrário de colas baratas que 'espirram' jatos grossos e criam poças viscosas que empelotam a agulha com cola, a cola spray de qualidade proporciona fixação firme e reposicionável instantânea sem manchar tecidos nobres.",
    "technicalDetails": "Tempo em aberto (*Open Tack Time*): de 15 segundos a 30 minutos. Bico de pulverização com leque em cone de 45° a 25 cm de distância. Composição: elastômeros sintéticos livres de CFC e solventes clorados nocivos.",
    "beginnerExplanation": "A cola spray temporária é a melhor amiga da bordadeira para colar panos de prato, toalhas e aplicações na entretela sem precisar encher o bastidor de alfinetes! Mas você já reparou que algumas marcas de cola acabam super rápido e deixam a agulha toda melada de grude? O rendimento da cola é a quantidade de peças que você consegue colar com um único tubinho: aplicando uma 'nuvenzinha' bem leve e de longe, um tubo rende centenas de bordados, a peça fica bem presinha e a agulha não fica suja de cola nunca!",
    "howItWorks": [
      "1. A bordadeira agita bem o tubo de adesivo temporário por 10 segundos.",
      "2. Posiciona a entretela no interior de uma caixa de papelão (caixa de pulverização) para não sujar a mesa.",
      "3. Mantém o tubo em pé a uma distância de 25 a 30 cm da entretela.",
      "4. Aplica uma pulverização rápida e contínua de 1 a 2 segundos em formato de névoa fina cruzada.",
      "5. Aguarda 10 segundos para o solvente volátil evaporar, ativando a aderência tátil (*tack*).",
      "6. Posiciona o tecido sobre a entretela e alisa com a palma da mão.",
      "7. A máquina borda o projeto: a agulha entra e sai sem grudar cola no olho e a peça não escorrega."
    ],
    "applications": [
      "Fixação de tecidos e apliques de feltro no método de flutuação (Floating).",
      "Bordados em toalhas de banho felpudas, veludos e tecidos que não podem ser marcados pelo aro.",
      "Montagem de peças feitas no bastidor (In-The-Hoop - ITH).",
      "Estabilização de malhas finas de viscose e seda em entretela de corte limpo."
    ],
    "characteristics": [
      "Rendimento superior de até 18 m² por lata com bico atuador de névoa fina.",
      "Adesividade reposicionável que permite descolar e colar de novo sem perder a força.",
      "Zero resíduo gomoso na agulha e sai 100% na lavagem da peça."
    ],
    "commonErrors": [
      "❌ Aplicar o spray muito perto (< 10 cm), encharcando a entretela com uma poça líquida de cola.",
      "❌ Espirrar a cola direto em cima da mesa ou perto do cabeçote da máquina (a névoa de cola gruda nas guias de linha!).",
      "❌ Colar o tecido imediatamente sem esperar os 10 segundos de evaporação do gás propelente."
    ],
    "troubleshootingTips": [
      "A agulha está cheia de grude preto de cola e a linha começou a quebrar: limpe a agulha com álcool isopropílico e passe a aplicar o spray a pelo menos 30 cm de distância com uma borrifada muito mais leve.",
      "O tecido descolou da entretela durante o bordado: a poeira do ateliê secou a cola antes da aplicação; aplique o spray e una o tecido em no máximo 1 minuto.",
      "O bico do tubo de cola entupiu: vire a lata de cabeça para baixo e aperte o bico por 2 segundos até sair apenas gás limpo, desentupindo a válvula."
    ],
    "dicaArtrelados": "Tenha uma 'caixa de sapato velha' na sua bancada só para borrifar cola! Coloque a entretela dentro da caixa e borrife a 30 cm: a nuvem de cola fica presa dentro da caixa, seu ateliê fica limpinho e você economiza mais de 50% de cola por mês!",
    "voceSabia": "O conceito do adesivo temporário reposicionável em spray foi desenvolvido nos anos 1970 pela 3M nos EUA, derivado da mesma tecnologia química que deu origem aos famosos blocos adesivos Post-it!",
    "practicalExercise": "Borrife cola spray em um pedaço de entretela a 10 cm de distância e em outro a 30 cm de distância. Toque nos dois com a ponta dos dedos e veja como o segundo fica com uma pegada uniforme e perfeita sem molhar o dedo.",
    "quickSummary": "Yield Value in Spray Adhesives é o rendimento em metros quadrados e a qualidade de cobertura em névoa da cola temporária, garantindo fixação firme sem empelotar a agulha com resíduos.",
    "recommendedSettings": {
      "speedPPM": "Compatível com todas as velocidades",
      "needleType": "75/11 Ponta Bola ou Fina",
      "density": "Distância de pulverização: 25 cm a 30 cm da entretela"
    },
    "relatedTerms": [
      "Cola Spray Temporária",
      "Método de Flutuação (Floating)",
      "Entretela com Adesivo",
      "Goma na Agulha (Needle Gunk)",
      "Aplique no Bastidor"
    ],
    "tags": [
      "y-035",
      "colaspray",
      "rendimento",
      "adesivos",
      "insumos",
      "flutuacao",
      "estabilizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "3M INDUSTRIAL ADHESIVES DIVISION. Repositionable Spray Adhesives for Textile Processing Guide. St. Paul, 2021.",
      "ODIF EMBROIDERY PRODUCTS. Temporary Spray Chemistry & Needle Cleanliness Protocols. Lyon, 2022.",
      "ARTRELADOS. Guia de Insumos Químicos, Adesivos e Estabilizadores para Ateliês de Bordado. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-036-y-seam-construction-and-in-hoop-quilt-joining",
    "code": "Y-036",
    "letter": "Y",
    "term": "Y-Seam Construction & In-Hoop Quilt Joining (Construção de Costuras em Y e Junção de Blocos de Quilt no Bastidor)",
    "pronunciation": "uái-siim con-struc-xion end in-hup cuilt djói-ning",
    "level": "Avançado 🔴",
    "category": "Aplicações & Técnicas Especiais",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do patchwork tradicional e geometria de quilting ('Y-seam' / costura de três peças em ângulos de 120° formando cubos tridimensionais e hexágonos) adaptada para digitalização no bastidor.",
    "summary": "Técnica de programação de matrizes para junção de blocos hexagonais e mosaicos de patchwork no bastidor com costuras de parada precisa em formato de Y sem franzir o tecido.",
    "definition": "O Y-Seam Construction & In-Hoop Quilt Joining (União Automatizada de Blocos de Patchwork em Y, Junção de Hexágonos e Mosaicos Geométricos no Bastidor / Precision Partial Seaming Protocol) é a metodologia de digitalização e costura automatizada de blocos de quilt onde três retalhos de tecido se encontram em um único vértice angular de 120° (como no bloco clássico 'Jardim da Vovó', cubos 3D de Tumbling Blocks e estrelas de 6 pontas). Na costura tradicional de máquina reta, as costuras em Y são temidas por exigirem paradas manuais milimétricas a 1/4 de polegada antes da borda. No bordado eletrônico, a matriz programa as paradas de agulha com coordenadas de precisão absoluta de 0.1 mm, permitindo dobrar e costurar os tecidos em sequência no bastidor sem repuxamento e com vértices planos perfeitos.",
    "technicalDetails": "Ponto corrido de costura reta de união com passo de 2.2 mm a 2.5 mm com ponto de parada exato (*Needle Stop Position*) a 6.0 mm (1/4\") do vértice de interseção. Sequenciamento de sobreposição de abas (*Partial Seaming Sequence*) com paradas programadas de máquina (Color Stop).",
    "beginnerExplanation": "Quem faz patchwork e colchas de retalhos sabe que unir três pedacinhos de pano que se encontram no mesmo bico (como um hexágono ou desenho de favo de mel) é uma das coisas mais difíceis e chatas do mundo! A técnica de costura em Y no bastidor faz a máquina de bordar costurar cada pedacinho com precisão milimétrica: ela costura até o biquinho exato, para para você dobrar o próximo paninho e fecha a junção perfeitamente retinha e sem nenhuma ruga, como mágica!",
    "howItWorks": [
      "1. A matriz inicia bordando as linhas guias do hexágono ou bloco geométrico sobre a entretela e a manta.",
      "2. A máquina borda o primeiro retalho com costura parcial de 1/4 de polegada e executa uma parada de cor.",
      "3. A bordadeira dobra o segundo retalho de tecido sobre a linha de marcação e pressiona com um rolinho de passar.",
      "4. A máquina costura a segunda perna do 'Y' parando exatamente no ponto central da junção.",
      "5. Posiciona-se o terceiro retalho fechando a interseção de 120°.",
      "6. A máquina completa a terceira costura em Y e finaliza com pontos decorativos de quilting ou ponto caseado ao redor.",
      "7. Retira-se o bloco pronto do bastidor: o encontro das três costuras fica 100% plano, sem rugas e sem desvios."
    ],
    "applications": [
      "Confecção de colchas de retalhos de luxo, mantas de bebê e caminhos de mesa no bastidor.",
      "Blocos de patchwork modernos tipo Tumbling Blocks (efeito óptico 3D de cubos).",
      "Almofadas de hexágonos e mosaicos geométricos no estilo inglês (English Paper Piecing no bastidor).",
      "Bolsas e painéis decorativos com motivos de estrelas de 6 e 8 pontas."
    ],
    "characteristics": [
      "Elimina a dificuldade de costurar ângulos em Y à mão ou em máquina reta.",
      "Vértices planos perfeitos com precisão de 0.1 mm em todos os blocos.",
      "Une patchwork e bordado decorativo no mesmo projeto dentro do bastidor."
    ],
    "commonErrors": [
      "❌ Deixar a costura passar do ponto central de 1/4\" de margem, travando o tecido da terceira aba.",
      "❌ Usar ponto muito largo (> 3.5 mm) que deixa a costura do quilt frouxa ao desvirar.",
      "❌ Não passar os retalhos com ferro ou rolinho entre cada etapa de costura no bastidor."
    ],
    "troubleshootingTips": [
      "O centro do bloco em Y ficou repuxado e com uma prega de tecido: a primeira costura passou do ponto de parada central; recalibre a matriz para parar exatamente a 6.0 mm da borda do bloco.",
      "Os cantos dos hexágonos não estão se alinhando perfeitamente: utilize entretela de corte suave (Cutaway de 60 g/m²) como base do bloco para que o tecido não estique durante as costuras.",
      "A agulha bateu grosso no meio do encontro dos três tecidos: abra as costuras pelo avesso e assente com ferro de passar a vapor antes de fechar o bloco."
    ],
    "dicaArtrelados": "Use um rolinho manual de costura de madeira (seam roller) ao lado da sua máquina de bordar! A cada parada para aplicar o próximo retalho de tecido, passe o rolinho na costura: o tecido fica chapado e assentado na hora sem você precisar levantar da cadeira para ir até o ferro!",
    "voceSabia": "O bloco de patchwork 'Jardim da Vovó' (Grandmother's Flower Garden), feito com junções em Y de centenas de hexágonos, era o modelo de colcha mais popular nos Estados Unidos durante a Grande Depressão de 1929!",
    "practicalExercise": "Digitalize um bloco simples de 3 losangos formando um cubo 3D com costura em Y no seu software. Borde no bastidor sobre manta R1 e sinta a satisfação de ver o encontro central perfeito e sem nenhuma ruga.",
    "quickSummary": "Y-Seam Construction é a técnica de união automatizada de blocos geométricos de patchwork em Y no bastidor, garantindo junções de 120° perfeitas e sem franzidos.",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 Ponta Fina (Sharp / Microtex)",
      "density": "Passo de costura de união: 2.2 mm a 2.5 mm com paradas precisas de cor"
    },
    "relatedTerms": [
      "Costura em Y (Y-Seam)",
      "In-The-Hoop Quilting",
      "Patchwork no Bastidor",
      "Hexágonos (English Paper Piecing)",
      "Margem de Costura de 1/4\""
    ],
    "tags": [
      "y-036",
      "yseam",
      "quilting",
      "patchwork",
      "hexágonos",
      "ith",
      "aplicacoes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MODERN QUILT GUILD. Precision Y-Seam Geometry and Automated Block Assembly. Austin, 2022.",
      "NATIONAL EMBROIDERY & QUILTING ASSOCIATION. In-the-Hoop Patchwork Engineering. Denver, 2021.",
      "ARTRELADOS. Quilting e Patchwork no Bastidor: Técnicas Avançadas de Montagem e Blocos 3D. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  },
  {
    "id": "y-037-yoke-stabilizer-hooping-technique-for-winter-coats",
    "code": "Y-037",
    "letter": "Y",
    "term": "Yoke Stabilizer Hooping Technique for Heavy Winter Coats (Técnica de Estabilização de Palas em Casacos Pesados de Inverno)",
    "pronunciation": "iôuk stei-bi-lai-zer hu-ping tek-niik for ré-vi uin-ter côuts",
    "level": "Avançado 🔴",
    "category": "Bastidores & Enquadramento",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 'yoke' (pala de casaco) e 'floating stabilizer hooping' (técnica de enquadramento por flutuação sem prensar o enchimento térmico).",
    "summary": "Método de enquadramento por flutuação com bastidores magnéticos e entretelas resinadas para bordar a pala de casacos acolchoados (doudounes e parcas) sem esmagar as plumas.",
    "definition": "O Yoke Stabilizer Hooping Technique for Heavy Winter Coats (Estabilização por Flutuação em Palas de Casacos Acolchoados, Preservação de Isolamento Térmico de Plumas / Loft Preservation Framing) é a técnica especializada de montagem e bordado na região superior das costas e ombros (pala) de peças pesadas de inverno (como jaquetas doudoune acolchoadas, parcas impermeáveis, casacos de lã batida e jaquetas com forro de pluma de ganso). Prender essas peças grossas em bastidores plásticos convencionais esmaga o enchimento térmico de forma irreversível e cria marcas profundas de queimadura de bastidor (*hoop burn*). A técnica utiliza entretela de corte pesado adesivada enquadrada sozinha no bastidor, enquanto a pala do casaco é 'flutuada' por cima, presa por ímãs de neodímio ou fita adesiva têxtil de alta aderência com subponto de alinhavo perimétrico (*Basting Box*).",
    "technicalDetails": "Preservação do volume térmico (*Loft Retention* > 95%). Agulhas 90/14 ponta bola média (SUK/SES) para não furar a membrana impermeável interna. Alinhavo de fixação com passo largo de 4.5 mm a 5.0 mm ao redor de toda a área de bordado.",
    "beginnerExplanation": "Bordar a parte de trás dos ombros (a pala) de uma jaqueta bem fofa de inverno, daquelas cheias de manta ou penas, parece uma missão impossível! Se você tentar apertar a jaqueta dentro de um bastidor de plástico comum, o bastidor não fecha e, se fechar, vai amassar a fofura da jaqueta para sempre! Com a técnica de flutuação de pala, você prende apenas a entretela no bastidor e apoia a jaqueta por cima com ímãs fortes ou colinha: a máquina borda perfeitamente sem amassar a jaqueta e o casaco continua fofo, quentinho e impecável!",
    "howItWorks": [
      "1. A bordadeira enquadra apenas a entretela de corte pesado (Cutaway 80 g/m²) no bastidor magnético ou plástico.",
      "2. Aplica cola spray temporária na entretela ou remove a película protetora da entretela adesiva.",
      "3. Abre o zíper do casaco pesado e posiciona a pala traseira sobre a área adesivada, mantendo o forro livre.",
      "4. Trava as abas do casaco com ímãs de neodímio nas bordas do bastidor magnético.",
      "5. A máquina executa um alinhavo automático perimétrico (Basting Stitch) para travar a jaqueta na entretela.",
      "6. Borda o logotipo corporativo ou monograma com agulha 90/14 e velocidade reduzida de 650 PPM.",
      "7. Retira-se do bastidor, puxa-se a linha de alinhavo facilmente: a pala do casaco fica perfeita, sem marcas e com o enchimento 100% fofo."
    ],
    "applications": [
      "Bordados corporativos em jaquetas acolchoadas de nylon e parcas de equipes de campo.",
      "Personalização de jaquetas de esqui, montanhismo e casacos térmicos de alta tecnologia.",
      "Bordados em casacos pesados de lã batida, feltro grosso e jaquetas de couro com forro de pele.",
      "Uniformes de inverno de frigoríficos, companhias aéreas e frotas de transporte."
    ],
    "characteristics": [
      "Preserva 100% da fofura e da capacidade de isolamento térmico do casaco.",
      "Zero marcas de queimadura de bastidor (elimina totalmente o hoop burn em tecidos acolchoados).",
      "Permite bordar jaquetas prontas sem precisar descosturar o forro térmico interno."
    ],
    "commonErrors": [
      "❌ Tentar forçar o fechamento de bastidores plásticos tradicionais sobre a jaqueta acolchoada.",
      "❌ Não fazer o alinhavo prévio (Basting Box), fazendo o casaco escorregar durante o bordado.",
      "❌ Usar velocidade alta (> 800 PPM), fazendo o cabeçote puxar o tecido grosso e perder passos."
    ],
    "troubleshootingTips": [
      "O casaco está balançando e tremendo durante o bordado: ative a função de alinhavo de contorno (Basting Box) no software ou painel da máquina para travar o casaco na entretela antes do bordado começar.",
      "O bastidor magnético soltou durante o movimento: reduza a velocidade da máquina para 650 PPM e certifique-se de que a jaqueta esteja apoiada sobre a mesa e não pendurada puxando o braço da máquina.",
      "A agulha está quebrando ao passar pelas costuras grossas da pala: utilize agulha reforçada com haste de titânio (Groz-Beckert SAN 6 calibre 90/14)."
    ],
    "dicaArtrelados": "Ao bordar jaquetas pesadas e casacos de inverno: NUNCA deixe o peso do casaco ficar pendurado para fora da máquina! Apoie o corpo do casaco em uma mesinha auxiliar ou sobre a bancada: com o peso apoiado, a máquina borda leve como uma pluma e o desenho nunca entorta!",
    "voceSabia": "As jaquetas doudoune com isolamento térmico de plumas de ganso (Down Jackets) foram criadas em 1936 pelo aventureiro americano Eddie Bauer após ele quase sofrer hipotermia durante uma pescaria no inverno!",
    "practicalExercise": "Pegue uma almofada fofa ou um pedaço de tecido acolchoado com manta grossa. Enquadre uma entretela no bastidor, passe cola spray e flutue o tecido por cima com um alinhavo. Borde um desenho de teste e comprove como a manta não amassa.",
    "quickSummary": "Yoke Stabilizer Hooping Technique é o método de enquadramento por flutuação em palas de casacos pesados de inverno que preserva o enchimento térmico e elimina marcas de bastidor.",
    "recommendedSettings": {
      "speedPPM": "600 a 680 PPM",
      "needleType": "90/14 Ponta Bola Média (SUK) ou Reforçada (SAN 6)",
      "density": "Densidade adaptada para acolchoados: 0.42 mm a 0.45 mm com alinhavo perimétrico"
    },
    "relatedTerms": [
      "Técnica de Flutuação (Floating)",
      "Bastidor Magnético",
      "Alinhavo no Bastidor (Basting Stitch)",
      "Casacos Acolchoados (Puffer Jackets)",
      "Pala de Casaco (Yoke)"
    ],
    "tags": [
      "y-037",
      "casacos",
      "inverno",
      "flutuacao",
      "bastidormagnetico",
      "alinhavo",
      "enquadramento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "OUTDOOR APPAREL EMBROIDERY GUILD. Puffer Jacket Hooping & Thermal Insulation Preservation. Seattle, 2022.",
      "HOOP MASTER & MIGHTY HOOP. Magnetic Hooping Solutions for Heavy Outerwear. Racine, 2021.",
      "ARTRELADOS. Manual de Bordados em Roupas Pesadas, Jaquetas Acolchoadas e Uniformes de Inverno. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-30"
  }
];

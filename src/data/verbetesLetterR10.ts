import { Verbete } from "../types";

export const VERBETES_LETTER_R10: Verbete[] = [
  {
    id: "r-097-recuo-de-ponta-de-agulha-e-sincronismo-calcador",
    code: "R-097",
    term: "Recuo de Ponta de Agulha na Placa e Sincronismo de Subida do Calcador (Needle Retraction Clearance & Presser Foot Timing)",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução nominal masculina composta.",
    origin: "Do latim retractio (ação de puxar para trás / retornar) e synchronismus (coincidência temporal perfeita de dois movimentos mecânicos). Na cinemática de máquinas de costura e bordado industrial, o sincronismo entre a barra de agulha e o excêntrico do calcador dinâmico foi estabelecido no século XIX pela Singer e refinado pela Tajima no sistema M-Type.",
    summary: "Calibragem mecânica que garante que o calcador segure o tecido firme no exato instante em que a ponta da agulha sobe da chapa, impedindo que o tecido suba junto.",
    definition: "O Recuo de Ponta de Agulha na Placa e Sincronismo de Subida do Calcador (Needle Retraction Clearance, Presser Foot Timing & Flagging Elimination Clearance) é o ajuste micrométrico do ciclo de movimento mecânico relativo entre a barra de agulha e o pé-calcador flutuante da máquina de bordar. Quando a agulha atinge o ponto morto inferior (Bottom Dead Center - BDC) e penetra no tecido para laçar a linha na lançadeira, ela inicia seu curso de subida. Nesse exato milissegundo de subida, o tecido sofre uma força de arraste ascendente pelo atrito da lâmina da agulha e pela tensão do fio; o calcador deve descer e manter o tecido firmemente prensado contra a chapa de agulha até que a ponta da agulha tenha emergido totalmente do tecido (altura de recuo de segurança de pelo menos 1,0 mm a 1,5 mm acima do plano da chapa). Se o calcador subir antes da agulha ou estiver alto demais, o tecido sobe junto com a agulha — efeito destrutivo conhecido como 'dança do tecido' ou 'flagging' —, causando pontos falsos, nós na bobina, quebra súbita de agulhas e rasgamento de tecidos finos.",
    technicalDetails: "Ângulo de sincronismo na escala graduada do volante principal (Timing Dial): o calcador deve tocar o tecido entre 160° e 180° e permanecer em contato compressivo total até 230°-245° do ciclo principal (momento em que a ponta da agulha sai 1,5 mm acima da chapa). Folga estática de altura do calcador (Presser Foot Clearance): regulada entre 0,5 mm e 1,2 mm acima da espessura do tecido comprimido no ponto morto inferior do calcador. Força da mola de pressão do calcador: calibrada entre 12 N e 25 N conforme a densidade têxtil. Curso vertical total do calcador: tipicamente de 5 mm a 8 mm em máquinas multicabeças industriais.",
    construction: [
      "Barra de agulha com buchas de bronze sinterizado autolubrificantes",
      "Came excêntrico do calcador acoplado ao eixo superior principal",
      "Pé-calcador com orifício circular retificado livre de rebarbas",
      "Mola helicoidal de compressão com parafuso micrométrico de pré-carga"
    ],
    howItWorks: [
      "1. A máquina gira o eixo principal a 850 PPM e a barra de agulha desce com a linha superior.",
      "2. O came excêntrico empurra a barra do calcador para baixo frações de segundo antes de a agulha penetrar no tecido.",
      "3. A agulha fura o tecido, desce até o ponto morto inferior e a ponta da lançadeira pega a laçada de linha.",
      "4. A barra de agulha inverte o movimento e começa a subir velozmente.",
      "5. O calcador permanece assentado sobre o tecido, segurando a entretela e o tecido colados na chapa de metal.",
      "6. A ponta afiada da agulha sai limpa do furo do tecido sem arrastar nenhuma fibra para cima.",
      "7. Somente após a ponta da agulha ultrapassar a linha de recuo de segurança (1,5 mm acima da chapa), o calcador sobe.",
      "8. O pantógrafo aproveita o intervalo livre para movimentar o bastidor para a próxima coordenada X/Y sem emperramentos."
    ],
    beginnerExplanation: "Já reparou naquele pezinho de ferro (o calcador) que fica subindo e descendo rapidinho junto com a agulha da máquina? Você já viu quando o tecido fica pulando para cima e para baixo parecendo uma pipoca pulando na panela toda vez que a agulha sobe? Esse pulo é o famoso 'tecido dançarino' (flagging)! Ele acontece quando o calcador está desregulado e sobe antes da hora, ou fica alto demais sem encostar no pano. Quando a agulha sobe, ela puxa o pano junto com ela pelo atrito da linha! Aí a lançadeira lá embaixo perde o ponto, a linha embola no avesso e a agulha bate torta na chapa e quebra com um estalo alto! O sincronismo de recuo nada mais é do que acertar o pezinho para ele segurar o tecido bem firme até a pontinha da agulha sair completamente do pano!",
    practicalExamples: [
      "Regulagem de altura do calcador após trocar o bordado de um pano de prato fino para uma toalha felpuda grossa de banho.",
      "Solução de quebra repetitiva de agulhas em couro sintético causada pelo tecido grudando na haste da agulha na subida.",
      "Ajuste da folga do calcador em máquina industrial de 6 cabeças para eliminar pontos pulados em bordado 3D com EVA.",
      "Inspeção com calibrador de lâminas da distância entre a base do calcador e a chapa de agulha."
    ],
    matrixParametersRelation: [
      "Densidade de Ponto Satim: Em colunas muito fechadas, o número de perfurações amolece o tecido; se o calcador não segurar firme, o tecido rasga ao redor do contorno.",
      "Velocidade de Trabalho (PPM): Em rotações acima de 800 PPM, qualquer atraso de milissegundo no calcador multiplica as vibrações do bastidor.",
      "Espessura do Substrato: Tecidos volumosos (moletons, felpas) exigem elevar a altura base do calcador para não esmagar a fibra, mantendo o curso de prensagem.",
      "Tipo de Ponta da Agulha: Agulhas de ponta bola (SES) geram mais atrito de subida em malhas, exigindo calcador perfeitamente sincronizado."
    ],
    commonMistakes: [
      "❌ Deixar o calcador muito alto em tecidos finos: o tecido pula solto na agulha e a máquina pula pontos a cada 10 segundos.",
      "❌ Deixar o calcador muito baixo e apertado em tecidos delicados de veludo ou seda: a base de metal marca e esmaga o tecido para sempre.",
      "❌ Esquecer de ajustar a altura do calcador ao bordar bonés duros ou peças com espuma EVA 3D.",
      "❌ Tentar entortar o pé-calcador com alicate para tentar resolver problemas de sincronismo que exigem ajuste no parafuso da barra."
    ],
    troubleshootingTips: [
      "A máquina está pulando pontos aleatórios e o tecido fica subindo junto com a agulha: O calcador está regulado alto demais; solte o parafuso da barra do calcador e abaixe-o cerca de 0,5 mm para que ele encoste suavemente no tecido comprimido no ponto mais baixo.",
      "O calcador deixa marcas circulares brilhantes e brilhantes no tecido ao redor do bordado: Pressão excessiva ou borda do calcador com rebarba cortante; alivie a mola de pressão do calcador e passe lixa d'água 1200 na base do pezinho para deixá-lo espelhado.",
      "A agulha bate com a ponta na borda do furo do calcador e quebra: O calcador está desalinhado ou torto; afrouxe o parafuso de fixação, centralize o orifício do calcador exatamente ao redor da agulha e reaperte."
    ],
    dicaArtrelados: "O 'Teste da Folha de Papel da Artrelados': Para saber se a altura do seu calcador está perfeita em qualquer tecido, faça esse teste mágico: coloque o tecido com a entretela no bastidor, abaixe a agulha até o ponto morto inferior usando o volante manual e tente enfiar uma folha comum de papel sulfite dobrada ao meio entre o calcador e o tecido. A folha deve passar com uma levezinha resistência de atrito, sem ficar presa e sem ficar solta voando! Se passar assim, sua altura está nota 10: o tecido não pula, o ponto não falha e a peça não marca!",
    voceSabia: "Em filmagens com câmeras superlentas de 10.000 quadros por segundo feitas em laboratórios têxteis alemães, descobriu-se que quando o calcador sobe antes da agulha, o tecido sobe até 4 milímetros no ar, deformando a laçada da linha inferior e fazendo a lançadeira passar no vácuo em 80% das falhas de ponto!",
    practicalExercise: "Inspeção do Ciclo do Calcador com Volante Manual: Pegue uma toalha grossa no bastidor e coloque na máquina desligada. Gire o volante lentamente no sentido anti-horário com a mão. Observe atentamente: quando a ponta da agulha começa a subir de dentro do furo, o pezinho de metal ainda está encostado na toalha? Gire mais um pouquinho: no momento exato em que a pontinha de prata da agulha sai do tecido, o pezinho começa a subir? Sentir e enxergar esse balé mecânico com as próprias mãos é o maior aprendizado de uma bordadeira!",
    quickSummary: "Calibragem que assegura que o pé-calcador prenda o tecido até a ponta da agulha sair totalmente, impedindo o tecido de dançar e quebrar agulhas.",
    relatedTerms: [
      "Barra de Agulha / Haste da Barra de Agulha (Needle Bar)",
      "Chapa de Agulha / Placa de Ponto (Needle Plate)",
      "Pé-Calcador de Bordado / Calcador Flutuante",
      "Ponto Falso / Ponto Pulado (Skipped Stitch)",
      "Laçadeira Rotativa / Lançadeira (Rotary Hook)"
    ],
    tags: [
      "r-097",
      "recuo-agulha",
      "calcador",
      "sincronismo-mecanico",
      "flagging",
      "tecido-dancante",
      "mecanica-bordado",
      "manutencao-preventiva",
      "pontos-pulados",
      "artrelados"
    ],
    sourceReference: "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL MACHINERY. Technical Guide: Presser Foot Height Adjustment & Needle Timing Clearance. Nagoya: Tajima, 2023.",
      "BARUDAN EMBROIDERY TECH. Mechanical Synchronism: Presser Foot Stroke and Flagging Prevention. Ichinomiya, 2022.",
      "GERMAN TEXTILE ENGINEERING INSTITUTE. High-Speed Needle-Fabric Dynamics and Presser Foot Optimization. Stuttgart, 2021.",
      "ARTRELADOS. O Balé da Agulha e do Calcador: Como Eliminar o Tecido Dançarino e os Pontos Pulados no Ateliê. Curitiba, 2024."
    ],
    updatedAt: "2026-09-16"
  },
  {
    id: "r-098-rotacao-angular-de-matrizes-e-deformacao-de-malha",
    code: "R-098",
    term: "Rotação Angular de Matrizes no Painel e Deformação de Malha Elástica (On-Screen Pattern Rotation & Fabric Grain Bias Distortion)",
    level: "Intermediário 🟡",
    category: "Digitalização & Matrizes",
    grammarClass: "Locução nominal feminina composta.",
    origin: "Do latim rotatio (movimento circular ao redor de um eixo fixo) e do grego bias (direção oblíqua / viés elástico da malha). No bordado computadorizado, descreve o impacto físico da reorientação espacial de matrizes sobre o comportamento elástico e anisotrópico dos tecidos.",
    summary: "Distorção e repuxo que ocorrem ao girar uma matriz de bordado direto na tela da máquina sem recalcular a compensação de repuxo para o sentido do fio do tecido.",
    definition: "A Rotação Angular de Matrizes no Painel e Deformação de Malha Elástica (On-Screen Pattern Rotation, Fabric Grain Bias Distortion & Anisotropic Pull Shift) é a falha dimensional e estética que surge quando o operador de bordado utiliza os botões de rotação rápida da máquina (como girar 45°, 90° ou 180° no painel digital) para acomodar um desenho no bastidor sem considerar que a matriz foi originalmente digitalizada para a orientação do fio do tecido. Os tecidos (especialmente malhas de algodão, piquet, ribana e tecidos com elastano) possuem comportamentos mecânicos totalmente desiguais: esticam muito na horizontal (trama), quase nada na vertical (urdume) e têm elasticidade máxima nas diagonais a 45° (viés). Quando uma matriz de preenchimento denso é girada em 90° no painel, o ângulo dos pontos que antes puxava na vertical firme passa a tracionar na horizontal elástica, esticando a malha, abrindo fendas nos contornos e ovalizando elementos que deveriam ser perfeitamente simétricos.",
    technicalDetails: "Anisotropia de deformação da malha 100% algodão meia-malha 30.1: elasticidade na trama (largura) de 25% a 35%; no urdume (comprimento) de 4% a 8%; no viés (45°) de 40% a 50%. Se uma matriz calibrada para compensação de repuxo de 0,25 mm no sentido do urdume for rotacionada em 90° no painel da máquina, o repuxo real sobre a trama elástica salta para 0,60 mm a 0,80 mm, resultando em um déficit dimensional de mais de 0,5 mm nas bordas. Para rotações no painel superiores a 15° em tecidos elásticos, é obrigatório reabrir a matriz no software gráfico, recalcular os ângulos de tatami, inverter os valores de Pull Compensation e readaptar o underlay de sustentação.",
    construction: [
      "Vetor digital com eixos primários ortogonais (X e Y) referenciados na digitalização",
      "Camadas de ponto tatami e satim com ângulos direcionais pré-calculados",
      "Tecido de malha têxtil com colunas e fileiras de laçadas de alta deformabilidade transversal",
      "Entretela de suporte de alta estabilidade que neutralize as tensões da nova rotação"
    ],
    howItWorks: [
      "1. A matriz de um logotipo de empresa foi criada pelo programador para ser bordada no peito de uma camisa polo em pé (ângulo original 0°).",
      "2. O programador calculou o preenchimento tatami para puxar no sentido vertical da polo (onde o tecido não estica).",
      "3. No ateliê, a bordadeira vê que o bastidor retangular cabe melhor de lado e resolve girar a matriz em 90 graus direto no painel da máquina.",
      "4. Ao apertar o play, os pontos de preenchimento agora costuram deitados, puxando na direção horizontal da polo (que estica facilmente).",
      "5. O tecido da polo encolhe na largura, formando rugas profundas nas laterais do bordado.",
      "6. Quando a máquina vai fazer o contorno preto em volta das letras, as letras encolheram e o contorno cai fora do lugar, deixando uma mancha branca.",
      "7. A camisa é perdida por causa de uma simples rotação de botão no painel.",
      "8. Ao recalcular a matriz no software ou montar o bastidor no sentido correto do tecido, o bordado volta a sair perfeito."
    ],
    beginnerExplanation: "Sabe aquele botãozinho no painel da sua máquina que gira o desenho em 90 graus para ele caber deitadinho no seu bastidor? Ele parece uma bênção, mas esconde uma armadilha perigosa em tecidos de malha e camisetas! Pense comigo: uma camiseta estica muito para os lados (quando a gente veste), mas quase não estica para cima e para baixo, certo? Quando o programador desenhou a matriz no computador, ele calculou os pontos para puxarem na direção firme que não estica. Se você gira o desenho de lado no painel da máquina, os pontos passam a puxar com força bruta exatamente no lado mole da camiseta que estica toda! Aí o tecido encolhe, o bordado fica cheio de calombos e o contorno não encaixa de jeito nenhum! Se for girar, prefira girar no computador para acertar as compensações ou monte a camiseta reta no bastidor!",
    practicalExamples: [
      "Giro de 90° de brasão escolar em jaleco de gabardine sem problemas porque o tecido plano tem pouca elasticidade.",
      "Problema grave de desencaixe de contorno ao girar monograma em toalha felpuda no painel para aproveitar sobra de bastidor.",
      "Ajuste profissional de logotipo esportivo no software Wilcom com rotação manual de ângulos de ponto antes de enviar para a máquina.",
      "Uso de entretela de recorte grossa (Cut-Away) dupla para salvar um bordado que precisou ser obrigatoriamente rotacionado no painel."
    ],
    matrixParametersRelation: [
      "Compensação de Repuxo (Pull Compensation): Deve ser redimensionada no software sempre que a matriz mudar de orientação em relação ao fio do tecido.",
      "Ângulo do Preenchimento Tatami: Se a matriz girar 90°, o ângulo do ponto deve ser reavaliado para não coincidir com a linha de maior elasticidade da malha.",
      "Underlay de Grade Cruzada: Uma grade dupla a 45° e 90° ajuda a blindar o tecido contra deformações se uma rotação no painel for indispensável.",
      "Tensão da Linha Superior: Deve ser ligeiramente afrouxada caso a rotação faça os pontos atuarem sobre o viés elástico."
    ],
    commonMistakes: [
      "❌ Girar desenhos grandes e densos em 90° no painel em camisetas finas de algodão ou dry-fit achando que o tecido se comporta igual em todas as direções.",
      "❌ Girar a matriz em 45° no painel: a diagonal é a linha de maior estiramento (o viés do tecido), gerando deformações em formato de paralelogramo.",
      "❌ Usar entretela de rasgar fina quando a matriz é rotacionada no painel, deixando a malha ceder completamente.",
      "❌ Culpar a máquina ou a agulha pelo desencaixe de contorno que foi causado unicamente pela rotação indevida na tela."
    ],
    troubleshootingTips: [
      "O contorno preto bordou totalmente torto e fora das letras depois que girei o desenho no visor da máquina: O tecido cedeu na direção da rotação; desfaça a rotação no painel e monte o bastidor na posição natural da peça, ou abra a matriz no software, gire o desenho e aumente a compensação de repuxo em 0,35 mm na largura.",
      "O bordado ficou repuxado e cheio de dobras nas laterais após rotação de 90 graus: A tração dos pontos atuou na trama elástica; para salvar as próximas peças sem alterar o arquivo, utilize entretela de recorte pesada (80 g/m²) colada com adesivo temporário e aumente a tensão da entretela no bastidor.",
      "Letras redondas viraram elipses compridas: O estiramento anisotrópico achatou os círculos; compense a distorção no software aplicando formato levemente ovalado na direção contrária ao repuxo."
    ],
    dicaArtrelados: "A 'Regra dos Dois Dedos de Estiramento da Artrelados': Antes de apertar aquele botãozinho de girar a matriz na máquina, faça isso: pegue a peça com as duas mãos e puxe com os dedos na horizontal e depois na vertical. Sentiu qual dos lados estica mais fácil? Agora olhe para a sua matriz: a maioria dos pontos cheios e tatamis NUNCA deve costurar puxando no sentido mais mole e elástico da peça! Se a rotação fizer as linhas puxarem pro lado mole, pare tudo: enquadre a peça reta no bastidor ou recalibre a matriz no computador. Essa conferência de 5 segundos salva horas de retrabalho!",
    voceSabia: "O termo 'anisotropia' vem da física dos materiais e define corpos que possuem propriedades físicas diferentes dependendo da direção observada: a madeira (que racha fácil no sentido do veio) e os tecidos tramados são os exemplos mais clássicos da natureza!",
    practicalExercise: "O Teste do Quadrado Girado: Desenhe um quadrado de 5x5 cm com preenchimento tatami no seu software. Borde o primeiro quadrado reto em um pedaço de malha de camiseta. Agora, vá no painel da sua máquina, gire a matriz em 90 graus e borde o segundo quadrado na mesma malha. Solte o bastidor e meça com uma régua: você verá com seus próprios olhos que o quadrado girado encolheu até 2 milímetros a mais na largura do que o quadrado original!",
    quickSummary: "Perigo técnico de girar desenhos na tela da máquina em tecidos elásticos, que faz a tração dos pontos puxar no sentido mais mole da malha e deformar o bordado.",
    relatedTerms: [
      "Compensação de Encolhimento (Pull Compensation)",
      "Anisotropia Têxtil e Elasticidade da Malha",
      "Ponto Tatami / Ponto Esteira (Tatami Fill Stitch)",
      "Alinhamento no Bastidor e Gabarito de Posicionamento (Hoop Template Alignment)",
      "Entretela de Recorte (Cut-Away)"
    ],
    tags: [
      "r-098",
      "rotacao-matriz",
      "painel-maquina",
      "deformacao-malha",
      "anisotropia-textil",
      "repuxo-elastico",
      "sentido-do-fio",
      "digitalizacao-matriz",
      "qualidade-bordado",
      "artrelados"
    ],
    sourceReference: "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    bibliographicReferences: [
      "EMBROIDERY DIGITIZING GUILD. Fabric Grain Orientation and Anisotropic Strain during Machine Rotation. Dallas: EDG, 2022.",
      "WILCOM INTERNATIONAL. Managing Stitch Angles and Pull Compensation on Bias Fabrics. Sydney: Wilcom, 2023.",
      "KNITTING & TEXTILE TECHNOLOGY REVIEW. Elastic Recovery and Dimensional Stability in Embroidered Knits. Manchester, 2021.",
      "ARTRELADOS. A Armadilha do Botão de Girar: Como a Rotação de Matrizes no Painel Destrói Camisetas e Como Evitar. Curitiba, 2024."
    ],
    updatedAt: "2026-09-16"
  },
  {
    id: "r-099-resina-seladora-de-bordas-de-emblemas-termoselagem",
    code: "R-099",
    term: "Resina Seladora de Bordas de Emblemas / Termoselagem Anti-Desfiamento (Badge Edge Sealing Resin & Hot-Melt Coating)",
    level: "Intermediário 🟡",
    category: "Técnicas de Bordado",
    grammarClass: "Locução nominal feminina composta.",
    origin: "Do latim resina (seiva vegetal condensada / composto polimérico aderente) e do grego therme (calor aplicado para cauterização). No acabamento de aviamentos militares e patches esportivos, surgiu para substituir a queima manual por isqueiro por uma barreira polimérica uniforme e atóxica.",
    summary: "Composto químico líquido ou bastão térmico aplicado no contorno de patches e emblemas recortados para fundir as fibras e impedir que desfiem com o uso.",
    definition: "A Resina Seladora de Bordas de Emblemas e Termoselagem Anti-Desfiamento (Badge Edge Sealing Resin, Fray Check Polymer Coating, Cauterização Química de Contorno ou Selante Líquido para Patches) é a formulação química polimérica à base de poliuretano aquoso, copolímeros acrílicos plastificados ou bastões de poliamida termofusível aplicada na borda perimetral de emblemas, brasões e apliques bordados após o corte manual, mecânico ou a laser. Durante o uso e as lavagens industriais contínuas de jaquetas e uniformes, os fios de urdume e trama da sarja de fundo e as laçadas externas do ponto satim tendem a escapar das microfendas do corte, gerando franjas desgastadas e desfiamentos esbranquiçados. A resina seladora atua por penetração capilar microscópica entre os filamentos, polimerizando em uma película flexível, transparente, invisível e à prova d'água que solda as fibras têxteis sem amarelar, sem deixar a borda dura como pedra e garantindo durabilidade permanente ao acabamento do brasão.",
    technicalDetails: "Base química típica: dispersão aquosa de poliuretano alifático monocomponente (isento de solventes aromáticos clorados). Viscosidade de aplicação: 400 a 800 cP (fluidez balanceada para penetrar nas fibras sem migrar para o centro do bordado). Tempo de secagem ao ar: 15 a 30 minutos; cura acelerada com soprador térmico a 90 °C em 20 segundos. Resistência mecânica: suporta lavagens domésticas a 60 °C e lavagem a seco sem descolamento ou craquelamento. Alternativa por termoselagem com cautério: pirógrafo com ponta de latão em faca a 220 °C em tecidos 100% poliéster ou nylon (fusão térmica instantânea dos filamentos sintéticos).",
    construction: [
      "Emulsão de resina acrílica ou poliuretano de alta transparência com filtros anti-UV",
      "Frasco dosador de precisão com bico de agulha metálica (Fine-Tip Applicator)",
      "Substrato têxtil bordado com borda em satim denso ou corte a fio",
      "Ponta de cauterização térmica regulável em temperatura (opção mecânica)"
    ],
    howItWorks: [
      "1. A bordadeira recorta o patch bordado rente ao contorno de ponto cheio com uma tesoura de ponta curva de precisão.",
      "2. Ao examinar de perto, pequenas pontinhas e cerdas do tecido de sarja de fundo ficam levemente expostas na quina do corte.",
      "3. Com o bico fino do aplicador de resina seladora, a bordadeira corre uma gota microscópica ao longo de todo o perímetro externo da borda.",
      "4. A resina líquida penetra instantaneamente por capilaridade nos nós da linha de bobina e nas fibras cortadas.",
      "5. Em poucos minutos, a água evapora e a resina cura, criando uma barreira elástica e transparente que abraça as fibras.",
      "6. Caso use o método de termoselagem com ferro cautério, a bordadeira desliza a ponta quente de latão a 200 °C pelo contorno de poliéster, cauterizando as pontas na hora.",
      "7. O emblema fica com acabamento de alfaiataria industrial: zero desfiamento, toque macio e resistência eterna a lavagens de máquina.",
      "8. O cliente final recebe um produto com acabamento nobre que nunca desmancha com o uso diário."
    ],
    beginnerExplanation: "Sabe quando você faz aquele patch bordado lindo, corta ele com a tesoura bem pertinho do contorno de ponto cheio e, depois de alguns dias ou da primeira lavada, começam a sair aqueles fiapinhos brancos e desfiados feios pelas beiradas do bordado? Isso dá uma dor no coração danada! O que é a resina seladora de bordas? Ela é um produtinho mágico, líquido e transparente (parece uma colinha bem fininha, como o famoso Fray Check ou termolina leitosa especial) que a gente passa com um biquinho bem fininho na quina de fora do patch cortado. Ela entra no meio das fibras da linha e do tecido, seca invisível e 'solda' todos os fiapos para sempre! O patch pode ir para a máquina de lavar cem vezes que nenhuma pontinha de linha se atreve a desfiar!",
    practicalExamples: [
      "Aplicação de resina seladora transparente nas bordas de 50 patches de moto-clube para jaquetas de couro pesadas.",
      "Selagem de emblemas militares cortados a tesoura em sarja camuflada antes de embalar para entrega.",
      "Cauterização térmica com ferro de solda de ponta fina em brasões de cetim sintético para fantasias de carnaval.",
      "Proteção de pontas de apliques de tecido de algodão em panos de prato para não esgarçar com alvejante."
    ],
    matrixParametersRelation: [
      "Densidade da Borda Satim Externa: Bordas com densidade de 0,38 mm a 0,40 mm facilitam a penetração e ancoragem da resina seladora.",
      "Largura do Ponto Satim de Borda: Deve ter no mínimo 3,5 mm a 4,5 mm de largura para criar um cordão de contenção seguro.",
      "Comprimento do Ponto de Amarração: Nós de arremate fortes evitam que os pontos finais se soltem antes da cura do polímero.",
      "Tolerância de Margem de Corte: Deixar entre 0,5 mm e 0,8 mm de margem de segurança ao cortar com a tesoura para a resina ancorar perfeitamente."
    ],
    commonMistakes: [
      "❌ Passar cola branca escolar comum (PVA): a cola branca fica dura como pedra, mancha o bordado e derrete na primeira lavagem com água morna.",
      "❌ Tentar queimar a borda com isqueiro aberto em tecido de algodão: o algodão não derrete, pega fogo na hora e queima a peça inteira.",
      "❌ Apertar o frasco de resina com força, ensopando o bordado e deixando a frente das letras manchada de resíduo vidrado.",
      "❌ Cortar o patch tão rente que a tesoura corta os próprios fios do ponto satim, arrebentando a costura antes de aplicar o selante."
    ],
    troubleshootingTips: [
      "A resina escorreu para a frente do bordado e deixou uma casquinha dura e brilhante: Você aplicou produto em excesso; passe um cotonete umedecido em álcool 70% ou água morna imediatamente enquanto a resina ainda estiver úmida para dissolver a mancha superficial.",
      "O patch ficou com as bordas afiadas e duras como plástico cortante: Foi utilizado cautério em temperatura excessiva ou resina rígida de má qualidade; use resina de poliuretano flexível têxtil ou reduza a temperatura do pirógrafo para 180 °C.",
      "Os cantos do patch continuam desfiando após a lavagem: A resina foi aplicada apenas na superfície externa; passe a ponta aplicadora por trás, nos nós da linha de carretilha do contorno, garantindo que o líquido penetre até a entretela."
    ],
    dicaArtrelados: "O 'Segredo da Termolina Especial com Bico de Esmalte da Artrelados': Se você não tiver o selante importado no ateliê, anote essa receita de ouro usada pelas melhores artesãs: pegue um frasco vazio de esmalte de unhas bem lavado com acetona, coloque termolina leitosa de alta qualidade misturada com duas gotinhas de álcool e use o próprio pincelzinho macio do esmalte para contornar a borda do patch pelo avesso! O pincel dá controle milimétrico, você não gasta produto à toa, a secagem é rápida e o acabamento fica impecável e supermacio ao toque!",
    voceSabia: "Na fabricação dos distintivos e insígnias oficiais dos astronautas da NASA e das forças especiais aeronáuticas, as bordas são seladas com resinas fluoropoliméricas militares que resistem a temperaturas extremas de -50 °C a +150 °C sem perder a flexibilidade nem soltar um único microfilamento de poeira na gravidade zero!",
    practicalExercise: "Comparativo de Selagem com Água: Pegue dois pedacinhos de sarja cortados com a tesoura. No primeiro, passe a resina seladora (ou a misturinha da Dica Artrelados) na borda e espere secar 10 minutos. No segundo, não passe nada. Agora esfregue a borda dos dois com a ponta dos dedos com força debaixo de uma torneira de água: você verá o pedaço sem resina desmanchar em fios compridos, enquanto o pedaço selado permanece perfeito e intacto como uma rocha!",
    quickSummary: "Composto líquido transparente que sela as bordas cortadas de patches e emblemas, impedindo que os tecidos desfiem com as lavagens.",
    relatedTerms: [
      "Patches e Emblemas Bordados",
      "Overlock Embutido e Acabamento de Patches com Ponto Merrow",
      "Tesoura de Ponta Curva e Tesoura Pelicano para Bordado",
      "Filme Termocolante / Adesivo Termoplástico (Hot-Melt Adhesive Film)",
      "Ponto Cheio / Ponto Satin (Satin Stitch)"
    ],
    tags: [
      "r-099",
      "resina-seladora",
      "termoselagem",
      "cauterizacao-borda",
      "patches-bordados",
      "anti-desfiamento",
      "fray-check",
      "acabamento-emblemas",
      "tecnicas-bordado",
      "artrelados"
    ],
    sourceReference: "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    bibliographicReferences: [
      "EMBLEM MANUFACTURERS ASSOCIATION. Edge Finishing Technologies: Resins, Hot-Cutting and Polymer Coatings for Badges. London: EMA, 2022.",
      "TEXTILE FINISHING MANUAL. Aqueous Polyurethane Dispersions in Garment Edge Stabilization. Zurich, 2021.",
      "MILITARY SPECIFICATIONS STANDARDS. MIL-DTL-14652: Edge Finishing and Fray Resistance of Embroidered Insignia. Washington, 2023.",
      "ARTRELADOS. O Fim do Desfiamento: Como Selar Bordas de Patches com Resina e Cautério sem Endurecer o Tecido. Curitiba, 2024."
    ],
    updatedAt: "2026-09-16"
  },
  {
    id: "r-100-rastreabilidade-e-arquivamento-de-fichas-tecnicas",
    code: "R-100",
    term: "Rastreabilidade e Arquivamento de Fichas Técnicas de Produção no Ateliê (Embroidery Production Spec Sheet & Batch Traceability)",
    level: "Iniciante 🟢",
    category: "Gestão & Produtividade",
    grammarClass: "Locução nominal feminina composta.",
    origin: "Do francês tracer (seguir a pista / rastrear histórico) e do grego tekhe (arte / ofício sistematizado). Na engenharia de qualidade fabril (normas ISO 9001), consolidou-se como a espinha dorsal de padronização para garantir a reprodutibilidade exata de lotes industriais.",
    summary: "Sistema de registro físico e digital de parâmetros (cores de cones, entretelas, tensões e amostras) que garante repetir um bordado anos depois com qualidade 100% idêntica.",
    definition: "A Rastreabilidade e Arquivamento de Fichas Técnicas de Produção no Ateliê (Embroidery Production Spec Sheet, Batch Job Card & Repeat Order Traceability Protocol) é o conjunto de métodos de documentação, catalogação sistemática e arquivamento de parâmetros produtivos utilizado por ateliês profissionais para registrar com precisão cirúrgica cada variável técnica envolvida na confecção de um bordado. Uma ficha técnica profissional de bordado contém o nome e versão exata do arquivo da matriz (.DST/.PES), dimensões finais milimétricas, quantidade de pontos, códigos e marcas dos cones de linha por ordem de troca de cor (ex: Madeira Polyneon #1801, Lumina #5220), tipo e gramatura da entretela utilizada, tamanho de bastidor, pressão da bobina e, fundamentalmente, uma amostra física real ou foto do avesso e direito da peça aprovada pelo cliente. Esse protocolo elimina a perda de tempo com testes repetitivos e assegura que, quando um cliente retornar um ano depois pedindo reposição de 10 uniformes, as peças sejam produzidas com cores, proporções e caimento milimetricamente indistinguíveis do primeiro lote.",
    technicalDetails: "Estrutura padrão de dados da Ficha Técnica Artrelados (Job Sheet): 1. Identificação única (ID do pedido, data e cliente); 2. Metadados do arquivo (hash do arquivo, versão final, largura x altura em mm, contagem de pontos e número de paradas/cortes); 3. Sequência de cores (tabela com número da agulha, marca da linha, código da cor e nome comercial); 4. Engenharia têxtil (composição do tecido base, tipo de entretela - ex: Rasga-Fácil 50g dupla ou Cut-Away 80g, uso de plástico hidrossolúvel); 5. Parâmetros de máquina (tensão calibrada no tensiômetro em gf, velocidade recomendada em PPM e modelo de bastidor); 6. Amostra de retenção (swatch físico grampeado ou imagem digital de alta resolução arquivada em nuvem com backup triplo).",
    construction: [
      "Ficha técnica física impressa padronizada em papel sulfite A4 ou formulário digital em tablet",
      "Banco de dados relacional ou pastas em nuvem organizadas por código de cliente e ano",
      "Plástico protetor tipo envelope canguru transparente anexo ao lote de peças na produção",
      "Envelope de amostra física (swatch de retenção) com retalho bordado do primeiro lote"
    ],
    howItWorks: [
      "1. A bordadeira desenvolve a matriz de um novo cliente (ex: Logotipo Padaria São José) e borda a primeira peça piloto de teste.",
      "2. O cliente aprova a peça piloto e assina a amostra física.",
      "3. A bordadeira preenche a Ficha Técnica de Produção com todos os dados: código da matriz, linhas usadas (ex: amarelo cone 2145, marrom cone 5310), entretela de rasgar dupla e velocidade de 750 PPM.",
      "4. Um retalho bordado idêntico é grampeado na ficha técnica, que é guardada em uma pasta física ou escaneada para a nuvem do ateliê.",
      "5. Oito meses depois, o cliente liga e pede mais 30 camisas polo com urgência para novos funcionários.",
      "6. Em vez de adivinhar as cores ou perder horas testando cones parecidos no olho, a bordadeira puxa a ficha técnica pelo nome do cliente.",
      "7. Em 2 minutos a máquina está montada com exatamente os mesmos cones, o mesmo arquivo e a mesma entretela do ano anterior.",
      "8. As 30 novas camisas saem com acabamento 100% idêntico às antigas, encantando o cliente e fidelizando a parceria comercial."
    ],
    beginnerExplanation: "Sabe o maior pesadelo de quem tem ateliê de bordado? É quando um cliente antigo volta depois de um ano dizendo: 'Borda mais 5 camisas para mim iguaizinhas àquelas do ano passado?'. Aí você vai no computador e tem 15 matrizes com nomes parecidos ('logo_final.pes', 'logo_novo_corrigido.pes', 'logo_ok.pes'), você não lembra se usou linha azul royal ou marinho, e nem sabe qual entretela colocou! O resultado? O bordado novo sai diferente, o cliente reclama e você perde tempo e dinheiro! A ficha técnica é o 'diário de bordo sagrado' de cada cliente: uma folhinha simples onde você anota o nome da matriz certa, os números dos cones de linha, a entretela e grampeia um pedacinho de pano bordado de amostra. Quando o cliente voltar, você faz o trabalho de olhos fechados em minutos e entrega um serviço impecável de profissional de elite!",
    practicalExamples: [
      "Arquivamento de fichas de uniformes para colégios e empresas que repetem compras todo início de ano letivo.",
      "Uso de pasta sanfonada numerada com fichas técnicas e amostras de tecido grampeadas no balcão do ateliê.",
      "Catalogação digital de arquivos de matrizes com nomes padronizados vinculados ao número da ordem de serviço.",
      "Comparação visual da amostra histórica arquivada contra a primeira peça do lote novo antes de liberar a produção."
    ],
    matrixParametersRelation: [
      "Versão do Arquivo da Matriz: Registra o arquivo definitivo aprovado, impedindo que versões preliminares com falhas sejam bordadas por engano.",
      "Ordem de Troca de Cores (Color Sequence): Documenta a sequência exata de alimentação das linhas na máquina, evitando erros de operador.",
      "Velocidade Operacional (PPM): Garante que a máquina rode na velocidade testada que não quebrou fios nem franziu o tecido.",
      "Gramatura e Tipo de Entretela: Assegura a mesma textura e estabilidade em todas as encomendas futuras do mesmo cliente."
    ],
    commonMistakes: [
      "❌ Guardar matrizes com nomes confusos como 'matriz1.dst', 'teste2.pes' ou 'matriz_final_agora_vai.pes' sem ficha explicativa.",
      "❌ Escolher as cores de linha 'no olho' a cada novo pedido, entregando uniformes com tons de azul ou verde diferentes para a mesma empresa.",
      "❌ Não guardar uma amostra física do primeiro bordado aprovado para servir de padrão de qualidade em caso de contestação.",
      "❌ Confiar apenas na memória da bordadeira: se ela adoecer ou mudar de emprego, o ateliê não sabe como reproduzir os trabalhos dos clientes."
    ],
    troubleshootingTips: [
      "O cliente reclamou que a cor da linha da nova encomenda ficou diferente da encomenda anterior: Falta de rastreabilidade de lote; adote imediatamente a ficha técnica anotando a marca e o código numérico exato do cone (e não apenas 'azul claro') e compare com o retalho arquivado.",
      "A produção começou com o arquivo de matriz errado e estragou peças: Falta de identificação única; renomeie todos os arquivos com o padrão '[CódigoCliente]_[NomeDoLogo]_[Data]' e anexe a folha de especificações ao cesto de peças cortadas.",
      "Os arquivos sumiram porque o computador ou pendrive deu pau: Risco grave de operação; crie hoje mesmo uma rotina de backup semanal automático em nuvem (Google Drive, Dropbox ou OneDrive) com pastas separadas por cliente."
    ],
    dicaArtrelados: "O 'Envelope Mágico do Cliente da Artrelados': Quer organizar seu ateliê hoje mesmo sem gastar quase nada? Compre um pacote de envelopes plásticos transparentes e uma caixa organizadora de sapatos. Para cada cliente que você atender, coloque dentro do envelope: 1. Uma folha com os números dos cones de linha e nome do arquivo da matriz; 2. O retalho do primeiro bordado teste assinado pelo cliente; 3. O gabarito de papel impresso com o tamanho real! Quando o cliente ligar pedindo mais, você só pega o envelope dele na caixa: tá tudo lá, pronto, perfeito e sem dor de cabeça!",
    voceSabia: "As grifes internacionais de alta costura em Paris e Milão guardam seus arquivos e amostras de bordados em cofres climatizados à prova de fogo desde o século XIX: a Maison Lesage, maior ateliê de bordado do mundo que atende a Chanel, possui mais de 75.000 amostras catalogadas com suas respectivas fichas técnicas históricas!",
    practicalExercise: "Crie Sua Primeira Ficha Técnica Hoje: Escolha o melhor cliente do seu ateliê. Pegue uma folha de papel e escreva: Nome do Cliente, Nome exato do arquivo no pendrive, Marca e números de cada cone de linha usado, Tipo de entretela e tecido. Borde um retalho de teste, grampeie na folha e guarde em uma pasta. Sinta o orgulho e a paz de espírito de transformar seu ateliê em uma empresa organizada de primeiro mundo!",
    quickSummary: "Sistema de registro organizado de cores, arquivos, entretelas e amostras que permite repetir o bordado de um cliente anos depois com qualidade idêntica.",
    relatedTerms: [
      "Otimização Geral de Processos e Produtividade em Ateliê de Bordado",
      "Folha de Trabalho e Sequência de Cores da Matriz (Color Sequence Sheet)",
      "Linha de Bordar de Poliéster Trilobal",
      "Organização Ergonômica da Bancada de Enquadramento e Mesa de Apoio do Bastidor",
      "Controle de Qualidade em Bordado Computadorizado"
    ],
    tags: [
      "r-100",
      "ficha-tecnica",
      "rastreabilidade",
      "gestao-atelie",
      "produtividade",
      "padronizacao",
      "organizacao-producao",
      "controle-qualidade",
      "reproducibilidade",
      "artrelados"
    ],
    sourceReference: "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    bibliographicReferences: [
      "INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 9001: Quality Management Systems — Traceability & Production Documentation. Geneva: ISO, 2022.",
      "STITCHES MAGAZINE. The Perfect Embroidery Job Sheet: Eliminating Color and File Errors on Reorders. Cleveland, 2023.",
      "APPAREL PRODUCTION WORKFLOW. Spec Sheets and Repeat Order Management for Custom Embroiderers. London: APW, 2021.",
      "ARTRELADOS. A Ficha de Ouro do Ateliê: Como a Rastreabilidade Profissional Fideliza Clientes e Acaba com o Retrabalho. Curitiba, 2024."
    ],
    updatedAt: "2026-09-16"
  }
];

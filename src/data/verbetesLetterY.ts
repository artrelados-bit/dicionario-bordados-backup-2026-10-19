import { Verbete } from "../types";

export const VERBETES_LETTER_Y: Verbete[] = [
  {
    id: "y-axis-eixo-y-translacao-vertical",
    code: "Y-001",
    letter: "Y",
    term: "Y-Axis — Eixo Y (Translação Vertical do Pantógrafo & Coordenadas Cartesianas)",
    pronunciation: "uái-ék-sis — êi-shu í-psi-lon (ˈwaɪ ˈæksɪs)",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino.",
    origin: "Do latim cartesiano 'axis' associado à ordenada 'y' introduzida pela geometria analítica para representar a dimensão vertical ortogonal ao eixo X.",
    summary: "Eixo de movimentação mecânica vertical/profundidade do pantógrafo que desloca o bastidor para frente (+Y) e para trás (-Y) por servomotores acoplados.",
    definition: "O Y-Axis (Eixo Y / Eixo Vertical do Pantógrafo / Longitudinal Carriage Axis) é o vetor linear mecânico e eletrônico encarregado do deslocamento anteroposterior (para frente e para trás / norte-sul) do bastidor de bordado em relação à linha fixa da agulha e da chapa de ponto. Movido por servomotores de alto torque sincronizados com correias de sincronismo ou fusos de esferas com recirculação, o eixo Y trabalha em interpolação linear e circular com o eixo X para posicionar o tecido sob a agulha com precisão de centésimos de milímetro antes de cada descida da barra de agulha.",
    technicalDetails: "Nos arquivos binários de matrizes (como Tajima .DST, Brother .PES e Janome .JEF), os comandos do eixo Y registram valores delta de deslocamento em escala métrica de 0,1 mm por unidade de coordenada. Por suportar a massa do bastidor e do braço móvel perpendicular, o eixo Y possui maior inércia dinâmica do que o eixo X. Por esse motivo, os algoritmos de firmware das máquinas industriais aplicam curvas de frenagem antecipada (deceleration ramps) em saltos longos no eixo Y para evitar o efeito de ressonância ou perda de passos em velocidades acima de 850 PPM.",
    beginnerExplanation: "É o trilho mecânico da máquina que faz o bastidor andar para a frente e para trás. Enquanto o eixo X move o bastidor de um lado para o outro, o eixo Y move o bastidor para cima e para baixo. Juntos, esses dois eixos conseguem levar a agulha para desenhar qualquer formato com perfeição matemática!",
    howItWorks: [
      "1. A placa controladora da máquina processa a próxima instrução de ponto e extrai o valor delta Y.",
      "2. O driver eletrônico alimenta o servomotor do eixo Y com pulsos calculados de alta frequência.",
      "3. O servomotor gira a polia dentada tracionando o braço transversal do pantógrafo.",
      "4. O bastidor é deslocado para frente ou para trás na fração de milissegundo em que a agulha está erguida.",
      "5. O eixo Y atinge a posição exata e trava magneticamente por freio eletrônico.",
      "6. A barra da agulha (eixo Z) desce, penetra o tecido e a lançadeira laça o fio.",
      "7. Sensores ópticos verificam se o deslocamento no eixo Y foi completado sem desvio mecânico."
    ],
    applications: [
      "Translação vertical durante o preenchimento de pontos tatami e colunas satim longitudinais.",
      "Deslocamento rápido para áreas de corte e troca de cores no sentido vertical.",
      "Centralização automática do bastidor na inicialização de um trabalho.",
      "Alinhamento de gabaritos de nomes em faixas verticais e carcelas de camisas."
    ],
    characteristics: [
      "Estrutura mecânica reforçada com guias lineares temperadas e retificadas.",
      "Resolução de deslocamento de 0,05 mm a 0,1 mm por pulso de encoder.",
      "Acoplamento de alto torque com correias industriais com alma de aço ou kevlar."
    ],
    commonErrors: [
      "❌ Deixar peças pesadas de roupa caírem para fora da mesa de bordado, puxando o bastidor e sobrecarregando o motor do eixo Y.",
      "❌ Não verificar se a parte de trás do bastidor bate na parede ou no móvel atrás da máquina durante o movimento vertical.",
      "❌ Falta de lubrificação periódica nas guias do eixo Y, causando perda de passos e deslocamento de contornos."
    ],
    troubleshootingTips: [
      "O contorno satim não fecha no topo ou na base do desenho: a correia do eixo Y está com folga mecânica ou o tecido escorregou no sentido vertical; reaperte a correia de tração Y e use entretela com maior firmeza longitudinal.",
      "A máquina deu erro 'Y-Axis Limit Error': a matriz ultrapassa a área útil vertical do bastidor; reduza a escala do desenho no software ou use um bastidor maior.",
      "O bastidor trava com barulho seco ao se mover para a frente: desligue a máquina, limpe poeira e fiapos acumulados nas guias do eixo Y e aplique óleo mineral técnico ISO VG 32."
    ],
    dicaArtrelados: "Quando for bordar toalhas de banho ou mantas pesadas, apoie o excesso da peça sobre uma mesa de extensão nivelada com a máquina. Se o peso do tecido ficar pendurado para fora da mesa, ele freia o motor do eixo Y e faz todo o bordado perder o alinhamento no meio da produção!",
    voceSabia: "Em grandes máquinas industriais de ponte com 20 ou mais cabeçotes, o eixo Y movimenta uma barra de alumínio naval reforçado de mais de 15 metros de comprimento que pesa mais de 200 kg, com a mesma precisão de uma fração de cabelo!",
    practicalExercise: "No painel da sua máquina, use as setas direcionais de navegação para mover o bastidor todo para frente e todo para trás no eixo Y. Observe a maciez do movimento mecânico e certifique-se de que não haja nenhum cabo ou tecido enroscando na parte traseira.",
    quickSummary: "Eixo mecânico responsável pelo deslocamento vertical e de profundidade do pantógrafo com precisão centesimal durante o bordado.",
    relatedTerms: ["X-Axis (Eixo X)", "Z-Axis (Eixo Z)", "Pantógrafo", "Servomotor", "Passo de Ponto", "Coordenadas Cartesianas", "DST Format"],
    tags: ["yaxis", "eixoy", "pantografo", "mecanica", "hardware", "coordenadas", "manutencao"]
  },
  {
    id: "yarn-fio-textil-morfologia-linhas",
    code: "Y-002",
    letter: "Y",
    term: "Yarn — Fio Têxtil (Estrutura, Filamentos & Morfologia das Linhas de Bordar)",
    pronunciation: "iárn — fí-u têks-til (jɑːrn)",
    level: "Intermediário 🟡",
    category: "Linhas & Fios",
    grammarClass: "Substantivo masculino.",
    origin: "Do inglês arcaico 'gearn' (fio torcido ou fiado derivado de fibras naturais de lã e linho), com raízes proto-germânicas 'garną'.",
    summary: "Estrutura fibrosa contínua composta por filamentos paralelos ou torcidos que formam a linha de bordar superior ou a linha de bobina inferior.",
    definition: "O Yarn (Fio Têxtil / Linha de Fiação Contínua / Embroidery Filament Yarn / Twisted Ply Yarn) é o elemento primário de formação dos pontos no bordado de máquina, constituído pela reunião ordenada e torção mecânica de filamentos têxteis contínuos ou fibras cortadas de polímeros sintéticos (poliéster trilobal, poliamida/nylon) ou fibras naturais (viscose/rayon derivado da celulose, algodão egípcio de fibra longa ou seda pura). A morfologia do fio determina propriedades mecânicas e visuais fundamentais: resistência à tração em alta velocidade, elasticidade sob tensão, coeficiente de atrito na passagem pelos tensores e refletância de luz (brilho ou acabamento fosco).",
    technicalDetails: "As linhas modernas de bordado industrial são predominantemente compostas por filamentos contínuos trilobais de poliéster 100% de alta tenacidade (High Tenacity Filament Polyester). A seção transversal trilobal (em forma de trevo de 3 pontas) atua como microprismas ópticos que refratam a luz conferindo o brilho característico da seda com resistência térmica a até 250°C e imunidade total a descoloração por alvejantes à base de cloro (Bleach Resistant). São produzidas com torção 'Z' calibrada (Right Twist) com 2 a 3 cabos torcidos juntos (Ply) para garantir estabilidade rotacional na ponta da lançadeira.",
    beginnerExplanation: "É o fio de verdade com o qual a máquina desenha a sua matriz no tecido! Existem fios brilhantes de poliéster super fortes que não quebram nem desbotam com cândida, fios de viscose bem macios e fios de algodão com toque rústico. A qualidade do fio é o que faz o bordado brilhar, durar anos e não quebrar a toda hora!",
    howItWorks: [
      "1. Os polímeros termoplásticos fundidos são extrudados por micro-orifícios (fieiras) gerando filamentos ultrafinos contínuos.",
      "2. Dezenas de filamentos são reunidos e recebem torção mecânica helicoidal 'Z' para formar um cabo (Ply).",
      "3. Dois ou três cabos são torcidos juntos (2-Ply ou 3-Ply) formando o fio de bordar final.",
      "4. O fio passa por processo de tingimento sob alta pressão a 130°C para fixação molecular de cor.",
      "5. Aplica-se uma microcamada de lubrificante de silicone têxtil de alta pureza para reduzir o atrito na agulha.",
      "6. O fio é enrolado em cones de precisão cônica para desenrolar suavemente a mais de 1.000 PPM.",
      "7. Ao entrar na máquina, o fio desliza pelos tensores, passa pelo olho da agulha e forma a laçada perfeita."
    ],
    applications: [
      "Bordados em peças de vestuário, artigos de cama, mesa e banho.",
      "Linhas especiais metálicas (Metallic Yarn) com alma de náilon e película de poliéster metalizado.",
      "Linhas fluorescentes, fotoluminescentes (Glow in the Dark) e termocrômicas.",
      "Linhas ultrafinas de bobina (Filament Bobbin Thread 60 wt / 70 wt)."
    ],
    characteristics: [
      "Seção transversal trilobal para máxima dispersão e brilho de luz.",
      "Alongamento controlado de 15% a 22% para absorver impactos de costura.",
      "Lubrificação de silicone térmico para evitar superaquecimento no olho da agulha."
    ],
    commonErrors: [
      "❌ Usar linha comum de costura reta (Spun Polyester) na máquina de bordar, soltando fiapos e quebrando o tempo todo.",
      "❌ Utilizar linhas velhas guardadas há anos no sol, cujos filamentos ressecaram e perderam a tenacidade.",
      "❌ Usar linha de algodão comum em tecidos que serão lavados com alvejante, desbotando a cor."
    ],
    troubleshootingTips: [
      "A linha fica desfiando e criando um 'pom-pom' no olho da agulha: a linha é de baixa qualidade ou a agulha está com rebarba; troque a agulha por uma nova e teste uma linha de poliéster trilobal de boa marca.",
      "A linha quebra constantemente em alta velocidade (acima de 750 PPM): o cone de linha pode estar desenrolando com trancos ou a lubrificação de fábrica evaporou; use rede de proteção no cone (Thread Net) ou borrife uma gota de silicone líquido têxtil no cone.",
      "O bordado desbotou após a primeira lavagem com cloro: use exclusivamente linha 100% poliéster trilobal, que é resistente ao alvejamento."
    ],
    dicaArtrelados: "Nunca use linha de costura comum na máquina de bordar! A linha de bordado tem filamento contínuo, lubrificação especial e torção 'Z' projetada para girar em altíssima rotação na lançadeira sem desfiar. Usar a linha certa resolve 80% dos problemas de quebra no ateliê!",
    voceSabia: "A seção transversal 'trilobal' das linhas de poliéster de bordado foi desenvolvida pela DuPont na década de 1960 para imitar a seção triangular natural dos fios de seda produzidos pelo bicho-da-seda (Bombyx mori)!",
    practicalExercise: "Pegue um pedaço de 10 cm de linha de bordar e um de linha de costura comum. Olhe bem de perto na luz: veja como a linha de bordar é lisa, brilhante e não tem nenhum pelinho solto, enquanto a de costura é opaca e felpuda.",
    quickSummary: "Estrutura do fio contínuo de filamentos torcidos de poliéster, viscose ou algodão que forma os pontos de bordado na máquina.",
    relatedTerms: ["Poliéster Trilobal", "Viscose/Rayon", "Torção Z", "Titulagem", "Linha Metálica", "Filamento Contínuo", "Cone de Linha"],
    tags: ["yarn", "linha", "fiotextil", "poliester", "morfologia", "trilobal", "costura"]
  },
  {
    id: "yarn-count-titulagem-fio-denier-tex",
    code: "Y-003",
    letter: "Y",
    term: "Yarn Count — Titulagem do Fio (Denier, Tex, Dtex, Weight & Numeração Métrica Nm)",
    pronunciation: "iárn káunt — ti-tu-la-jen do fí-u (jɑːrn kaʊnt)",
    level: "Avançado 🔴",
    category: "Linhas & Fios",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'count' (contagem/sistema numérico de mensuração de massa e comprimento de fios têxteis padronizado internacionalmente pelo sistema ISO e ASTM).",
    summary: "Sistema internacional de classificação numérica que indica a espessura e a densidade linear da linha de bordar (ex.: 120D/2, 40 wt, Tex 27, Nm 75).",
    definition: "O Yarn Count (Titulagem do Fio / Numeração Métrica Têxtil / Linear Thread Density / Denier, Tex & Weight Rating) é o sistema metrológico padronizado que expressa a relação entre o peso (massa) e o comprimento de um fio têxtil, definindo com exatidão científica a sua espessura física real. No universo do bordado eletrônico, os sistemas mais utilizados são o **Weight (wt)** (onde 40 wt é a linha padrão de bordar e 60 wt é a linha fina de bobina ou microletras), o **Denier (D)** (massa em gramas de 9.000 metros de fio, ex.: 120D/2) e o sistema universal **Tex** (massa em gramas de 1.000 metros de fio, ex.: Tex 27 para linha 40 wt).",
    technicalDetails: "Existe uma regra fundamental de proporcionalidade inversa e direta nos sistemas de titulagem: nos sistemas diretos (Tex, Denier, Dtex), quanto **maior** o número, mais **grosso** é o fio (ex.: 300D é muito mais grosso que 120D); nos sistemas indiretos (Weight/wt e Numeração Métrica Nm), quanto **maior** o número, mais **fino** é o fio (ex.: uma linha 60 wt é muito mais fina que uma linha 40 wt, e uma linha 30 wt é mais encorpada). A escolha da titulagem afeta diretamente a densidade da matriz: usar uma linha 60 wt exige aumentar a densidade (espaçamento menor, ex.: 0,32 mm) para não deixar o tecido aparecer, enquanto uma linha 30 wt exige reduzir a densidade (ex.: 0,48 mm) para não empelotar.",
    beginnerExplanation: "É o número que vem escrito no cone de linha para você saber se o fio é fino, médio ou grosso! A linha padrão que todo mundo usa para bordar é a '40' (espessura média perfeita). A linha de baixo da bobina é a '60' (mais fininha para não fazer volume). Se você usar uma linha mais grossa (30) ou mais fina (60), precisa avisar o programa de bordado para ajustar a quantidade de pontos!",
    howItWorks: [
      "1. A indústria mede a massa exata de uma metragem de filamento (ex.: 9.000 metros pesam 120 gramas = 120 Denier).",
      "2. Indica-se o número de cabos torcidos (ex.: 120D/2 significa dois cabos de 120 denier torcidos juntos = 240 denier total).",
      "3. O bordador lê a etiqueta do cone e seleciona a agulha compatível (linha 40 wt usa agulha 75/11; linha 60 wt usa agulha 65/9).",
      "4. No software de matrizes, calibra-se o espaçamento entre pontos (0,40 mm para 40 wt; 0,32 mm para 60 wt; 0,50 mm para 30 wt).",
      "5. A máquina costura a matriz com a proporção exata entre o calibre da linha, o furo da agulha e a cobertura do tecido.",
      "6. O bordado resulta em uma cobertura impecável sem nós embolados e com nitidez cristalina."
    ],
    characteristics: [
      "Sistema direto: Tex (g/1000m) e Denier (g/9000m) — número sobe = linha engrossa.",
      "Sistema indireto: Weight (wt) e Nm — número sobe = linha afina.",
      "Padrão global de bordado: Poliéster 40 wt / 120D/2 / Tex 27."
    ],
    applications: [
      "Seleção de linhas ultrafinas (60 wt ou 75 wt) para bordar letras minúsculas de 3 mm a 5 mm em jalecos.",
      "Uso de linhas grossas (30 wt ou 12 wt) para efeito de bordado manual rústico e ponto cheio pesado.",
      "Escolha da linha de bobina (60 wt / 70 wt / 80 wt) para otimizar o rendimento e a maciez do avesso.",
      "Cálculo de consumo volumétrico de linha por milheiro de pontos."
    ],
    commonErrors: [
      "❌ Bordar letras minúsculas com linha grossa 30 wt, transformando as letras em borrões ilegíveis.",
      "❌ Usar linha fina 60 wt em uma matriz programada para linha 40 wt sem aumentar a densidade, deixando o tecido vazar por baixo.",
      "❌ Colocar linha 30 wt em uma agulha fina 65/9, quebrando a linha imediatamente por atrito no canalete."
    ],
    troubleshootingTips: [
      "As letras pequenas de 4 mm do logotipo estão ficando empastadas e ilegíveis: troque a linha superior por calibre fino 60 wt, instale uma agulha fina 65/9 e reduza a densidade no software para 0,35 mm.",
      "O bordado satim está com falhas e o tecido está aparecendo entre as linhas: você está usando uma linha mais fina que a padrão sem ter compensado a densidade na programação da matriz.",
      "A linha grossa 30 wt está arrebentando toda hora: troque a agulha por uma de olho largo (Topstitch ou Embroidery 90/14) e afrouxe ligeiramente o tensor superior."
    ],
    dicaArtrelados: "Grave esta regrinha de ouro do ateliê Artrelados: para o dia a dia, use sempre linha **40** em cima com agulha **75/11**; para letrinhas miúdas de menos de 5 mm, use linha **60** em cima com agulha **65/9**. A nitidez das letrinhas pequenas fica inacreditável!",
    voceSabia: "A palavra 'Denier' vem do nome de uma antiga moeda de prata francesa da época de Júlio César, que era usada como padrão de peso na pesagem de pequenos meadões de seda pura na Idade Média!",
    practicalExercise: "Olhe as etiquetas na base de três cones de linha diferentes no seu ateliê. Encontre as indicações de titulagem (ex.: 120D/2, 40 wt ou Tex 27) e anote em uma tabela qual a agulha ideal para cada um deles.",
    quickSummary: "Sistema padronizado de medição da espessura das linhas (Denier, Tex, Weight), determinante para a escolha de agulhas e densidade da matriz.",
    relatedTerms: ["Denier", "Tex", "Weight (wt)", "Numeração Métrica (Nm)", "Calibre de Agulha", "Densidade", "Linha 40 wt", "Linha 60 wt"],
    tags: ["yarncount", "titulagem", "denier", "tex", "weight", "espessura", "linhas"]
  },
  {
    id: "y-stitch-ponto-y-ponto-pluma-feather",
    code: "Y-004",
    letter: "Y",
    term: "Y-Stitch — Ponto Y (Ponto Pluma Eletrônico & Feather Stitch Programado)",
    pronunciation: "uái-stitxi — pon-tu í-psi-lon (ˈwaɪ stɪtʃ)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do formato geométrico da letra 'Y' que emula o clássico ponto de pluma manual (Feather Stitch / Cretan Stitch) originário do bordado folclórico europeu do século XVII.",
    summary: "Ponto decorativo programado que se ramifica em formato de hastes em 'Y' alternadas, criando guirlandas florais, nervuras de folhas e barras folclóricas.",
    definition: "O Y-Stitch (Ponto Y / Ponto Pluma Computadorizado / Digital Feather Stitch / Alternating Branch Stitch) é um ponto decorativo ornamental pré-programado ou gerado por ferramentas de contorno em softwares de bordado (como Motif Run Stitches no Wilcom e PE-Design) que executa uma costura central com ramificações oblíquas alternadas para a esquerda e para a direita formando uma sucessão contínua de letras 'Y'. Muito utilizado em enxovais clássicos, bainhas abertas simuladas (Hemstitching) e no bordado de ramos de trigo e folhagens botânicas.",
    technicalDetails: "A rotina cinemática do Y-Stitch intercala 3 penetrações por módulo: um avanço linear no eixo de referência, uma deflexão angular de 45° para o braço esquerdo do 'Y' com retorno ao eixo, seguido por um avanço longitudinal e uma deflexão para o braço direito. Os softwares avançados permitem parametrizar a largura dos braços (de 2,0 mm a 6,0 mm), o espaçamento modular e a densidade de repetição (Single ou Triple Bean Y-Stitch para maior relevo visual).",
    beginnerExplanation: "É um pontinho decorativo delicado e lindo que parece uma espinha de peixe ou galhinhos de planta cheios de bracinhos em forma de 'Y'! Ele é perfeito para fazer barrados de toalhas de mesa, roupas de bebê e detalhes em volta de flores, dando um ar clássico e sofisticado ao trabalho.",
    howItWorks: [
      "1. No software de matrizes, seleciona-se uma linha guia curva ou reta e aplica-se o efeito 'Motif Run - Feather/Y-Stitch'.",
      "2. Calibra-se a largura dos braços em 'Y' (ex.: 3,5 mm) e o comprimento do passo.",
      "3. O software gera os pontos garantindo que as curvas acompanhem a tangência do desenho de forma orgânica.",
      "4. O tecido é posicionado no bastidor com entretela solúvel ou rasgável.",
      "5. A máquina borda a sequência rítmica alternando as diagonais sem puxar nem franzir o tecido.",
      "6. Obtém-se um acabamento decorativo leve, arejado e de grande valor estético."
    ],
    characteristics: [
      "Baixíssimo consumo de pontos comparado a colunas satim.",
      "Estrutura leve e flexível que não enrijece tecidos finos.",
      "Efeito botânico e folclórico tradicional."
    ],
    applications: [
      "Barrados e molduras em toalhas de batizado, lençóis de berço e enxovais de bebê.",
      "Bordados botânicos para representar caules, nervuras de folhas e espigas de trigo.",
      "Acabamentos em estilo 'Crazy Quilt' sobre emendas de tecidos.",
      "Detalhes decorativos em vestidos infantis e batas em estilo camponesa."
    ],
    commonErrors: [
      "❌ Programar os braços em 'Y' muito longos (acima de 7 mm) em roupas de criança, facilitando que anéis ou botões enganchem no fio.",
      "❌ Bordar em velocidade excessiva em curvas fechadas, fazendo os braços em 'Y' ficarem assimétricos.",
      "❌ Usar entretela muito grossa em tecidos finos, roubando a leveza natural do ponto."
    ],
    troubleshootingTips: [
      "O ponto Y ficou muito fino e apagado no tecido: altere o estilo do traço no software para 'Triple Run / Bean Stitch', fazendo a máquina passar 3 vezes em cada perninha do Y para ganhar relevo.",
      "As ramificações em Y estão tortas nas curvas: aumente o número de nós de controle na curva da linha guia no software para suavizar a transição angular.",
      "O ponto está repuxando o tecido fino de percal: use entretela solúvel em água por cima e por baixo do tecido com tensão de linha superior levemente afrouxada."
    ],
    dicaArtrelados: "Para criar um efeito de bordado vitoriano antigo deslumbrante em fraldas e toalhinhas de boca de bebê: borde o Y-Stitch com linha de viscose/rayon bege claro ou verde oliva em ponto triplo ao redor de um monograma clássico. O resultado é pura elegância!",
    voceSabia: "O ponto pluma (Feather/Y-Stitch) era o ponto assinatura dos famosos aventais de camponesas da Inglaterra vitoriana e dos cobertores de patchwork 'Crazy Quilt' do final do século XIX!",
    practicalExercise: "Desenhe uma linha ondulada suave no seu programa de matrizes e aplique o ponto motivo Feather/Y-Stitch com largura de 4,0 mm. Simule a costura na tela e observe o movimento rítmico das agulhadas alternando entre esquerda e direita.",
    quickSummary: "Ponto decorativo programado em formato de ramificações em 'Y' alternadas, simulando o clássico ponto pluma artesanal.",
    relatedTerms: ["Ponto Motivo", "Motif Run", "Feather Stitch", "Ponto Triplo (Bean Stitch)", "Bainha Aberta", "Bordado Botânico"],
    tags: ["ystitch", "pontoy", "pontopluma", "decorativo", "enxoval", "motivo", "acabamento"]
  },
  {
    id: "y-compensation-compensacao-repuxo-eixo-y",
    code: "Y-005",
    letter: "Y",
    term: "Y-Compensation — Compensação de Repuxo no Eixo Y (Pull Compensation Longitudinal)",
    pronunciation: "uái-kom-pen-sêi-shon — kom-pen-sa-são de re-pu-shu no êi-shu í-psi-lon (ˈwaɪ ˌkɑːmpənˈseɪʃən)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'pull compensation' (compensação de retração de ponto) calibrada especificamente no eixo cartesiano Y longitudinal.",
    summary: "Ajuste vetorial no software CAD que expande os pontos no sentido vertical (+Y/-Y) para compensar o encolhimento do tecido durante a tração da linha.",
    definition: "A Y-Compensation (Compensação de Repuxo no Eixo Y / Longitudinal Pull Compensation / Directional Y-Expansion / Pull-Push Axis Calibration) é um parâmetro avançado de digitalização de matrizes no qual o programador aplica um valor de expansão adicional (geralmente de +0,2 mm a +0,6 mm ou 10% a 20%) exclusivamente nas colunas e preenchimentos cujos pontos se orientam paralelamente ou obliquamente ao eixo vertical Y. Essencial para anular o efeito 'Pull-Push' (onde o tecido encolhe no sentido da penetração dos pontos e se expande no sentido perpendicular), garantindo que círculos não fiquem ovalados e que contornos satim coincidam perfeitamente.",
    technicalDetails: "A elasticidade da maioria dos tecidos planos e malhas é assimétrica: tecidos de urdume e trama (Woven Fabrics) possuem menor elasticidade no sentido do urdume (eixo Y) e maior elasticidade na trama (eixo X), enquanto malhas de jersey esticam muito mais no sentido da largura. A aplicação de compensação direcional desacoplada (X-Compensation vs Y-Compensation) permite ao software recalcular os vértices vetoriais compensando exatamente a elasticidade longitudinal sem alargar excessivamente o desenho na horizontal.",
    beginnerExplanation: "Quando a máquina borda, a linha puxa o tecido para dentro, fazendo o desenho encolher um pouquinho. A compensação no eixo Y é como um truque no computador que deixa o desenho um pouquinho mais comprido para cima e para baixo de propósito; assim, quando a linha puxar o tecido na hora de bordar, o desenho encolhe e fica no tamanho perfeito, redondinho e sem falhas!",
    howItWorks: [
      "1. O digitador programa uma forma geométrica (ex.: um círculo ou letra) no software CAD.",
      "2. Analisa o sentido dos pontos: se os pontos correm na vertical, haverá repuxo forte no eixo Y.",
      "3. Configura a compensação direcional no eixo Y para +0,35 mm (ou 15% de expansão).",
      "4. O software desloca os pontos externos de penetração para fora no eixo vertical.",
      "5. A peça é colocada no bastidor e a máquina executa o bordado.",
      "6. A força de tração da linha recolhe o tecido exatamente a quantidade compensada.",
      "7. O resultado final bordado no tecido atinge a geometria perfeita planejada no vetor original."
    ],
    characteristics: [
      "Ajuste em valor absoluto (milímetros) ou relativo percentual (%).",
      "Compensação independente entre os eixos X e Y nos softwares profissionais.",
      "Eliminação do vão branco (gapping) entre o preenchimento e o contorno externo."
    ],
    applications: [
      "Bordado de círculos perfeitos, brasões redondos e medalhões sem deformação oval.",
      "Encaixe milimétrico de contornos satim sobre preenchimentos tatami no sentido do urdume.",
      "Bordados em tecidos elásticos, lycra, malha piquet e microfibra esportiva.",
      "Programação de letras com hastes verticais grossas em camisaria social."
    ],
    commonErrors: [
      "❌ Deixar a compensação no eixo Y zerada em tecidos elásticos, fazendo círculos virarem ovais achatadas.",
      "❌ Colocar compensação exagerada (mais de 1,0 mm), transformando letras quadradas em blocos deformados.",
      "❌ Não alinhar o sentido do fio do tecido (urdume) com o eixo Y do bastidor ao colocar a peça."
    ],
    troubleshootingTips: [
      "O contorno satim não encosta no preenchimento na parte de cima e de baixo do desenho: aumente a compensação de repuxo no eixo Y (Pull Compensation) no software em +0,3 mm.",
      "Um círculo perfeito na tela vira uma elipse achatada no tecido: o tecido repuxou no sentido dos pontos verticais; aplique compensação direcional no eixo Y e reforce o ponto de suporte (underlay).",
      "As letras bordadas ficaram muito finas na vertical: aumente o valor de compensação de repuxo do bloco de texto nas propriedades de objeto."
    ],
    dicaArtrelados: "Sempre que for bordar um círculo perfeito em malha piquet ou moletom: programe os pontos de suporte (underlay) cruzados em 90° e adicione pelo menos 0,35 mm de compensação de repuxo no sentido das agulhadas. É essa compensação que garante que o logo do seu cliente saia redondinho como uma moeda!",
    voceSabia: "O fenômeno do repuxo de pontos foi documentado pela primeira vez na física têxtil na Suíça em 1912 por engenheiros de tecelagem, que calcularam que a tensão somada de 10.000 pontos de bordado pode exercer uma força de tração mecânica de mais de 15 kg sobre o tecido!",
    practicalExercise: "No seu programa de bordado, crie dois círculos de 40 mm preenchidos em tatami vertical: um com compensação de repuxo zero e outro com compensação de 0,4 mm. Borde os dois em um retalho de malha e meça com uma régua a diferença de esfericidade entre eles.",
    quickSummary: "Parâmetro digital que expande o desenho no eixo vertical para neutralizar o encolhimento do tecido causado pela tração dos pontos.",
    relatedTerms: ["Pull Compensation", "Push-Pull Effect", "Compensação de Repuxo", "Urdume e Trama", "Underlay", "Deformação Elástica"],
    tags: ["ycompensation", "repuxo", "eixoy", "pullcompensation", "programacao", "wilcom", "geometria"]
  },
  {
    id: "yoke-embroidery-bordado-em-pala",
    code: "Y-006",
    letter: "Y",
    term: "Yoke Embroidery — Bordado em Pala (Camisaria, Alfaiataria & Recortes Anatômicos)",
    pronunciation: "iôuk em-brói-de-ri — bor-da-du em pa-la (ˈjoʊk ɪmˈbrɔɪdəri)",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'yoke' (pala de vestuário / recorte de ombro e costas que une a gola ao corpo da camisa derivado do antigo jugo de jugo/parelha agrícola).",
    summary: "Técnica de estabilização, gabarito e bordado em recortes anatômicos de ombros e costas (palas) em camisas sociais, jaquetas jeans e fardamentos.",
    definition: "O Yoke Embroidery (Bordado em Pala / Bordado de Ombreira e Costas / Shirt Yoke Stitching / Western & Tailoring Yoke Design) é uma especialidade técnica da confecção e do bordado personalizado voltada para a aplicação de matrizes ornamentais, logomarcas corporativas ou monogramas de luxo sobre a pala de camisas sociais (Western shirts ou camisaria fina), jaquetas jeans e jalecos médicos. Caracteriza-se pelo desafio de estabilização em áreas com tecidos duplos, costuras embutidas em curva anatômica e ângulos inclinados de caimento do ombro.",
    technicalDetails: "A pala de camisaria é confeccionada tradicionalmente com duas camadas de tecido (pala externa e pala interna/forro) cortadas no viés ou no sentido do urdume para dar caimento ao ombro. Para bordar a pala sem criar repuxamento visível nas costas da camisa, o bordador deve utilizar entretela de corte limpo (Cut-Away) de gramatura média (60g a 80g) aplicada com adesivo temporário entre as camadas ou bordar a pala externa separadamente antes da montagem da peça na costura industrial (Piece Embroidery). O centro da matriz deve ser calibrado com recuo de 4 cm a 6 cm abaixo da base da gola para evitar interferência com o colarinho dobrado.",
    beginnerExplanation: "A pala é aquele pedaço de tecido que fica nas costas da camisa social, bem na altura dos ombros e logo abaixo da gola. Bordar nessa região exige cuidado especial porque o tecido é duplo e não pode enrugar. Quando bem posicionado e bordado, dá um toque chique e profissional incrível para camisas executivas e uniformes!",
    howItWorks: [
      "1. A camisa é desabotoada e a pala das costas é estendida perfeitamente sobre a mesa de gabarito.",
      "2. Utiliza-se um esquadro ou gabarito em 'T' para traçar o centro exato entre as duas costuras de ombro.",
      "3. Marca-se o centro do bordado a 5 cm abaixo da costura do colarinho.",
      "4. Aplica-se entretela Cut-Away firme no verso da pala com spray adesivo temporário.",
      "5. A peça é colocada no bastidor cuidando para que a gola e a carcela fiquem totalmente livres fora da área de costura.",
      "6. A máquina executa a matriz com densidade balanceada (máximo 0,40 mm de espaçamento).",
      "7. Ao término, a entretela excedente é recortada em formato arredondado com tesoura de ponta curva.",
      "8. A peça é passada a ferro com vapor para assentar as fibras perfeitamente."
    ],
    characteristics: [
      "Posicionamento nobre e de alta visibilidade em uniformes executivos.",
      "Exigência de alinhamento rigoroso em relação à costura central da gola.",
      "Uso preferencial de entretela de recorte suave (Cut-Away) para conforto nas costas."
    ],
    applications: [
      "Logomarcas corporativas em camisas sociais masculinas e femininas.",
      "Bordados estilizados em camisas estilo country/western em jaquetas jeans.",
      "Personalização de jalecos médicos de luxo e uniformes de aviação.",
      "Monogramas exclusivos de alfaiataria fina na nuca externa da camisa."
    ],
    commonErrors: [
      "❌ Bordar muito perto do colarinho, fazendo a gola dobrada cobrir a metade de cima da logomarca.",
      "❌ Prender a gola ou o tecido da frente da camisa por baixo do bastidor, costurando a camisa fechada por acidente.",
      "❌ Usar entretela rasgável frágil em camisa fina de algodão, fazendo o tecido enrugar e repuxar nas costas."
    ],
    troubleshootingTips: [
      "A gola da camisa dobra por cima do topo do bordado: reposicione o centro da matriz para pelo menos 5,5 cm a 7,0 cm abaixo da costura do colarinho.",
      "O bordado ficou torto em relação aos ombros: não use a barra inferior da camisa como guia; meça a distância exata em relação às duas costuras superiores dos ombros.",
      "O avesso do bordado pinica a pele do cliente nas costas: cubra o verso do bordado com uma película protetora termocolante macia (Cover-A-Stitch / protetor de bordado)."
    ],
    dicaArtrelados: "Para bordar palas de camisas sociais sem erro: dobre a camisa exatamente ao meio alinhando as duas costuras de ombro e dê uma leve vincada a ferro no centro das costas. Essa marquinha do vinco é a linha guia perfeita para você centralizar seu bastidor em 10 segundos com precisão milimétrica!",
    voceSabia: "Na camisaria clássica de Savile Row em Londres (o berço da alfaiataria mundial), as palas de camisas nobres são cortadas em duas metades separadas no sentido diagonal do tecido (Split Yoke) para acompanhar a flexão natural dos músculos das costas ao movimentar os braços!",
    practicalExercise: "Pegue uma camisa social. Meça com fita métrica a largura total da pala entre as costuras dos dois ombros. Encontre o ponto central exato e posicione um gabarito de papel a 5 cm abaixo do colarinho para visualizar o enquadramento perfeito de um bordado de 8 cm de largura.",
    quickSummary: "Técnica de posicionamento e bordado no recorte das costas e ombros de camisas e jaquetas, exigindo alinhamento e estabilização de tecidos duplos.",
    relatedTerms: ["Camisaria", "Alfaiataria", "Cut-Away", "Gabarito de Colarinho", "Protetor de Bordado", "Centralização"],
    tags: ["yokeembroidery", "pala", "camisaria", "alfaiataria", "uniformes", "bastidor", "posicionamento"]
  },
  {
    id: "yield-rendimento-de-linha-e-custo",
    code: "Y-007",
    letter: "Y",
    term: "Yield — Rendimento de Linha (Consumo Métrico por Milheiro de Pontos & Engenharia de Custos)",
    pronunciation: "íild — ren-di-men-tu de lí-nha (jiːld)",
    level: "Intermediário 🟡",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino.",
    origin: "Do inglês 'yield' (rendimento produtivo, eficiência de extração ou colheita em processos industriais e manufatura).",
    summary: "Cálculo técnico e métrico da quantidade de metros de linha superior e de bobina consumidos por uma matriz de bordado para controle de custos e estoque.",
    definition: "O Yield (Rendimento de Linha / Taxa de Consumo Métrico / Thread Consumption Ratio & Production Yield) é o índice quantitativo que estabelece o consumo linear médio de linha de bordar superior (agulha) e linha inferior (bobina) necessário para executar um determinado número de pontos (geralmente calculado por cada 1.000 pontos ou por peça bordada). Fundamental para a precificação correta de serviços no ateliê, planejamento de compras de cones e prevenção de paradas de máquina por esgotamento de linha durante grandes lotes industriais.",
    technicalDetails: "A regra padrão universal da indústria para pontos convencionais (comprimento médio de ponto entre 3,5 mm e 4,5 mm e proporção de tensão correta de 1/3 de linha de bobina no avesso) estabelece que **1.000 pontos de bordado consomem aproximadamente 5,0 a 5,5 metros lineares de linha superior** e **2,0 a 2,5 metros de linha de bobina**. Portanto, um cone padrão de 4.000 metros de linha de poliéster 40 wt rende cerca de **750.000 a 800.000 pontos** de bordado contínuo. Softwares profissionais CAD (como Wilcom e Tajima DG) calculam esse consumo automaticamente na ficha técnica (Production Worksheet) considerando comprimentos de salto e cortes.",
    beginnerExplanation: "É a continha que a gente faz para saber quantos metros de linha uma matriz gasta e quantos bordados dá para fazer com um cone inteiro de linha! Saber o rendimento ajuda você a não ficar sem linha no meio de uma encomenda grande e a cobrar o preço certinho do seu cliente sem tomar prejuízo.",
    howItWorks: [
      "1. O arquivo da matriz é aberto no software ou inspecionado no painel da máquina para verificar o número de pontos (ex.: 15.000 pontos).",
      "2. Multiplica-se a contagem pela taxa de consumo: 15 (milhares) × 5,2 metros = 78 metros de linha superior consumidos.",
      "3. Multiplica-se pela taxa da bobina: 15 × 2,2 metros = 33 metros de linha de bobina consumidos.",
      "4. Multiplica-se pela quantidade de peças do pedido (ex.: 50 camisetas = 3.900 metros de linha superior).",
      "5. O bordador constata que precisará de 1 cone fechado de 4.000 metros da cor principal para atender ao pedido sem faltar fio.",
      "6. O custo de linha por peça (geralmente alguns centavos) é inserido na planilha de precificação do ateliê.",
      "7. A produção roda com planejamento financeiro e controle rigoroso de estoque."
    ],
    characteristics: [
      "Proporção média de 5,2 m de linha superior para cada 1.000 pontos.",
      "Proporção média de 2,2 m de linha de bobina para cada 1.000 pontos.",
      "Variação de consumo em função da densidade e do tipo de ponto (tatami consome menos linha por área que satim largo)."
    ],
    applications: [
      "Precificação exata de pedidos em atacado de confecções e uniformes.",
      "Previsão de compras de linhas especiais e metálicas de alto custo.",
      "Planejamento de abastecimento de bobinas em máquinas industriais multicabeçotes.",
      "Auditoria de desperdício e sobras de fios em fábricas têxteis."
    ],
    commonErrors: [
      "❌ Iniciar uma produção de 100 peças com meio cone de linha sem calcular o rendimento prévio, parando a máquina à noite por falta de linha.",
      "❌ Esquecer de calcular o custo de bobinas prontas e entretelas na precificação do bordado.",
      "❌ Calcular o consumo de linha apenas pela área visual em vez da contagem real de pontos da matriz."
    ],
    troubleshootingTips: [
      "A linha da bobina está acabando muito rápido: a tensão superior pode estar excessivamente apertada puxando muita linha da bobina para cima; regule a tensão para manter a faixa de 1/3 no avesso.",
      "O cálculo do software deu 50 metros mas o cone acabou antes: verifique a quantidade de saltos e cortes de linha não otimizados na matriz, que descartam linha a cada troca de cor.",
      "A bobina acabou no meio de uma coluna satim larga: reabasteça a bobina e use o recurso de retroceder pontos (Back Stitch) no painel para retomar 10 pontos antes da falha."
    ],
    dicaArtrelados: "Para precificar rápido no balcão do seu ateliê: considere que cada 1.000 pontos gastam cerca de 5 metros de linha. Um cone padrão de 4.000 metros rende mais de 700 mil pontos! O custo de linha por bordado é baixinho, mas saber calcular o rendimento faz você comprar apenas o que vai usar e nunca deixar dinheiro parado na prateleira!",
    voceSabia: "Em uma fábrica com 10 máquinas multicabeçotes de 12 cabeças trabalhando 16 horas por dia, são consumidos mais de 500 quilômetros de linha de bordar por semana — distância equivalente a uma viagem em linha reta do Rio de Janeiro a São Paulo!",
    practicalExercise: "Pegue uma matriz de 10.000 pontos que você borda com frequência. Calcule quantos metros de linha superior ela gasta (10 × 5,2 m = 52 metros). Divida o comprimento do seu cone (ex.: 4.000 m) por 52 e descubra exatamente quantas peças você consegue bordar com um único cone!",
    quickSummary: "Índice de consumo métrico de linha superior e de bobina por milheiro de pontos, vital para custos e controle de estoque.",
    relatedTerms: ["Consumo de Linha", "Milheiro de Pontos", "Precificação", "Linha de Bobina", "Ficha Técnica", "Gestão de Ateliê"],
    tags: ["yield", "rendimento", "consumo", "custos", "gestao", "estoque", "linhas"]
  },
  {
    id: "y-alignment-grid-grade-alinhamento-vertical",
    code: "Y-008",
    letter: "Y",
    term: "Y-Alignment Grid — Grade de Alinhamento Vertical (Gabarito Plástico Milimetrado de Bastidor)",
    pronunciation: "uái-a-láin-ment grid — gra-de de a-li-nha-men-tu ver-ti-kal (ˈwaɪ əˈlaɪnmənt ɡrɪd)",
    level: "Iniciante 🟢",
    category: "Acessórios & Ferramentas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'alignment' (alinhamento/colimação) e 'grid' (grade cartesiana milimetrada transparente de gabarito para bastidores de bordado).",
    summary: "Placa plástica transparente gravada com eixos milimetrados em cruz que se encaixa no bastidor para posicionar e centralizar o tecido com precisão cirúrgica.",
    definition: "A Y-Alignment Grid (Grade de Alinhamento Vertical e Cruz de Centro / Gabarito Plástico de Encaixe de Bastidor / Hoop Template & Grid Ruler / Alignment Chart) é um acessório rígido ou semirrígido de policarbonato ou acetato transparente que acompanha os bastidores de máquinas de bordar domésticas e industriais. Dotada de recortes de encaixe que se travam com precisão nas bordas internas do aro plástico e gravada com linhas milimetradas com destaque para o eixo central vertical Y e horizontal X, ela serve como guia óptico visual para transferir o centro e o esquadro da marcação do tecido para a máquina.",
    technicalDetails: "A linha central do eixo Y do gabarito plástico coincide com a coordenada Y = 0 do pantógrafo da máquina. Os furinhos ou entalhes situados na interseção central da grade permitem inserir a ponta de uma caneta hidrossolúvel para marcar o tecido ou verificar se a agulha descerá exatamente no ponto desejado antes de travar o parafuso de aperto do bastidor. O uso correto da grade elimina erros de rotação angular (Skews) de 1° a 3° que fariam frases e monogramas parecerem visivelmente tortos em relação à costura da peça.",
    beginnerExplanation: "É aquela plaquinha de plástico transparente cheia de quadradinhos e linhas desenhadas que vem dentro da caixa da sua máquina de bordar! Ela se encaixa certinho dentro do bastidor para você olhar por cima e ver se a linha do meio do tecido está bem retinha com a linha do bastidor antes de apertar o parafuso. É o segredo para nunca mais bordar nada torto!",
    howItWorks: [
      "1. O bordador risca o centro e a linha vertical de nível no tecido com caneta hidrossolúvel.",
      "2. Encaixa a grade plástica transparente dentro do aro interno do bastidor.",
      "3. Posiciona o aro com a grade por cima do tecido sobre a mesa de trabalho.",
      "4. Ajusta o tecido até que o risco feito na peça fique 100% sobreposto à linha do eixo Y gravada na grade plástica.",
      "5. Pressiona o aro interno dentro do aro externo do bastidor mantendo o alinhamento visual.",
      "6. Retira a grade plástica transparente do bastidor antes de acoplar o bastidor na máquina.",
      "7. A máquina borda o arquivo com alinhamento milimétrico e esquadro impecável."
    ],
    characteristics: [
      "Material transparente de alta durabilidade com escala milimétrica gravada a laser.",
      "Ranhuras de encaixe que garantem posição única sem folga no aro.",
      "Furos centrais para passagem de ponta de caneta marcadora."
    ],
    applications: [
      "Centralização de monogramas e logomarcas em bolsos de camisas e jalecos.",
      "Alinhamento rigoroso de frases paralelas a barras de toalhas e lençóis.",
      "Conexão contínua de matrizes divididas em múltiplos bastidores (Multi-Hooping).",
      "Conferência rápida da área máxima útil antes do envio do arquivo."
    ],
    commonErrors: [
      "❌ Esquecer a grade plástica dentro do bastidor e mandar a máquina bordar, quebrando a agulha e furando o gabarito.",
      "❌ Usar a grade de um bastidor 13x18 em um bastidor 10x10, forçando e quebrando as travas de plástico.",
      "❌ Limpar a grade com álcool puro ou acetona, ressecando e deixando o plástico esbranquiçado e opaco."
    ],
    troubleshootingTips: [
      "A agulha bateu no gabarito plástico e quebrou: crie o hábito inegociável de retirar a grade do bastidor antes mesmo de levantar o bastidor da mesa para levar até a máquina.",
      "O gabarito plástico está riscado e difícil de enxergar: limpe apenas com flanela macia umedecida em água e detergente neutro; nunca use solventes químicos.",
      "O bordado saiu inclinado mesmo usando o gabarito: verifique se o tecido não esticou diagonalmente ao apertar o parafuso do bastidor; reaperte mantendo a tensão simétrica dos quatro lados."
    ],
    dicaArtrelados: "Cole um pedacinho de fita crepe colorida ou fita adesiva chamativa em uma das bordas da sua grade de alinhamento. Essa cor bem viva vai chamar a sua atenção e garantir que você NUNCA esqueça a grade de plástico encaixada no bastidor na hora de ligar a máquina!",
    voceSabia: "Os primeiros gabaritos de bastidor eram feitos de folhas de celuloide gravadas à mão no Japão na década de 1970 pelas marcas pioneiras de máquinas de costura e bordado como Brother, Janome e Happy!",
    practicalExercise: "Encaixe a grade plástica no seu bastidor de trabalho. Desenhe uma linha reta em um papel com régua e posicione o bastidor por cima. Gire o papel até a linha ficar perfeitamente alinhada com o eixo Y da grade. Treine esse alinhamento até conseguir acertar de primeira em 5 segundos.",
    quickSummary: "Gabarito plástico milimetrado transparente para bastidores que garante a centralização e o alinhamento reto do tecido com o eixo Y da máquina.",
    relatedTerms: ["Gabarito de Bastidor", "Hoop Template", "Centralização", "Eixo Y", "Multi-Hooping", "Acessórios de Máquina"],
    tags: ["yalignmentgrid", "gabarito", "bastidor", "alinhamento", "eixoy", "centralizacao", "acessorios"]
  },
  {
    id: "yarn-tension-gauge-tensiometro-de-linha",
    code: "Y-009",
    letter: "Y",
    term: "Yarn Tension Gauge — Tensiómetro de Linha (Medidor Mecânico & Digital de Tensão em Gramas-Força)",
    pronunciation: "iárn ten-shon guêidj — ten-si-o-me-tru de lí-nha (jɑːrn ˈtɛnʃən ɡeɪdʒ)",
    level: "Avançado 🔴",
    category: "Acessórios & Ferramentas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'tension gauge' (instrumento dinamométrico de medição de força de tração elástica graduado em gramas-força / cN).",
    summary: "Instrumento dinamométrico de precisão com ganchos guia que mede numericamente a tensão real da linha superior e da caixa de bobina em gramas-força.",
    definition: "O Yarn Tension Gauge (Tensiómetro de Linha / Medidor de Tensão Superior e de Bobina / Embroidery Thread Tension Meter / Towa Gauge) é um instrumento de aferição dinamométrica mecânica ou digital de precisão cirúrgica projetado para quantificar a resistência ao deslizamento das linhas na máquina de bordar. Ele substitui o método empírico de 'puxar com a mão' por leituras numéricas exatas expressas em gramas-força (gf) ou centinewtons (cN), permitindo calibrar todos os cabeçotes de uma máquina industrial ou a sua máquina doméstica exatamente com a mesma tensão de fábrica.",
    technicalDetails: "Os tensiómetros para bordado eletrônico dividem-se em dois tipos: o **Tensiómetro de Caixa de Bobina** (como o padrão mundial Towa TM-1 ou TM-3 para caixas tipo L e M), que afere a pressão da mola da bobina com valor ideal calibrado entre **18 gf e 25 gf** (ou 20 a 24 gf para linhas de bobina 60 wt); e o **Tensiómetro de Linha Superior** (Top Thread Gauge), que mede a resistência do circuito de passadores, tensores de prato e mola estica-fio com valor ideal entre **110 gf e 140 gf** para linha de poliéster 40 wt. Essa relação de 1:5 a 1:6 entre tensão de bobina e tensão superior garante o equilíbrio perfeito da laçada sem formação de loops ou nós aparentes.",
    beginnerExplanation: "É um aparelhinho de medir com um ponteiro que mostra com precisão de balança se a sua linha está muito apertada ou muito frouxa! Em vez de ficar adivinhando e girando o parafuso no 'olhômetro', você coloca a linha nele e ele mostra o número certinho. Com ele, sua máquina borda liso sem quebrar linha e sem puxar a linha branca da bobina para cima!",
    howItWorks: [
      "1. Para medir a bobina, encaixa-se a caixa de bobina no tensiómetro Towa e passa-se o fio pelas roldanas.",
      "2. Puxa-se a linha suavemente observando o ponteiro mecânico na escala graduada.",
      "3. Ajusta-se o micro-parafuso da mola da bobina com chave de fenda até o ponteiro marcar entre 20 gf e 22 gf.",
      "4. Para a linha superior, engata-se o gancho do tensiómetro na linha que sai do olho da agulha com o calcador abaixado.",
      "5. Puxa-se o aparelho para baixo e gira-se o botão tensor superior até atingir cerca de 120 gf a 130 gf.",
      "6. A máquina fica 100% calibrada com precisão de laboratório.",
      "7. Executa-se o bordado com laçadas perfeitas em todas as cores e agulhas."
    ],
    characteristics: [
      "Escala graduada de alta precisão em gramas-força (0 a 50 gf para bobina; 0 a 250 gf para agulha).",
      "Roldanas com micro-rolamentos que eliminam o atrito parasita durante a medição.",
      "Padronização absoluta de tensão em máquinas com 6, 12 ou mais agulhas."
    ],
    applications: [
      "Calibração de caixas de bobina após limpeza profunda ou troca de mola.",
      "Nivelamento de tensão entre todas as agulhas em máquinas multicabeçotes e multiagulhas.",
      "Ajuste fino para bordados em tecidos nobres e extremamente delicados (sedas e voil).",
      "Diagnóstico de pratos tensores gastos ou com acúmulo de sujeira interna."
    ],
    commonErrors: [
      "❌ Apertar o parafuso da bobina com força excessiva, espanando a rosca de latão da caixa de bobina.",
      "❌ Fazer a medição da linha superior com o calcador levantado (quando os tensores estão abertos e desativados).",
      "❌ Deixar cair o tensiómetro no chão, descalibrando a mola interna de precisão."
    ],
    troubleshootingTips: [
      "A linha branca da bobina aparece na frente do bordado: meça a bobina no tensiómetro; se estiver abaixo de 18 gf, aperte o parafuso no sentido horário até atingir 22 gf.",
      "A linha superior fica frouxa fazendo laços embaixo do tecido: a tensão superior está abaixo de 100 gf; gire o botão tensor no sentido horário e meça novamente com o tensiómetro até 125 gf.",
      "A agulha 1 e a agulha 6 da mesma máquina bordam com acabamentos diferentes: calibre ambas no tensiómetro para que todas as agulhas tenham exatamente a mesma leitura de 125 gf."
    ],
    dicaArtrelados: "O tensiómetro de caixa de bobina (estilo Towa) é o melhor investimento de manutenção para o seu ateliê! Regulando a bobina em 22 gf uma vez por semana, você elimina 90% das dores de cabeça com pontos frouxos, linha embolando embaixo e quebras misteriosas de linha!",
    voceSabia: "O tensiómetro mecânico para caixas de bobina de bordado foi inventado no Japão pela Towa Industrial Co. na década de 1980 e tornou-se a ferramenta de calibração padrão de todas as fábricas de máquinas de bordar do mundo como Barudan, Tajima, Brother e Janome!",
    practicalExercise: "Se você tiver acesso a um tensiómetro, meça a sua caixa de bobina. Se não tiver, faça o teste da gota (Drop Test): segure a ponta da linha da bobina na mão com a caixa suspensa. Ela deve descer suavemente alguns centímetros apenas quando você der um leve tranco com o dedo.",
    quickSummary: "Instrumento de medição de precisão em gramas-força para calibrar numericamente a tensão da linha superior e da caixa de bobina.",
    relatedTerms: ["Tensão de Linha", "Towa Gauge", "Caixa de Bobina", "Gramas-Força", "Pratos Tensores", "Calibração", "Mola Estica-Fio"],
    tags: ["yarntensiongauge", "tensiometro", "towa", "tensao", "calibracao", "manutencao", "bobina"]
  },
  {
    id: "yellowing-prevention-prevencao-amarelamento-armazenamento",
    code: "Y-010",
    letter: "Y",
    term: "Yellowing Prevention — Prevenção de Amarelamento (Preservação de Enxovais, Fios & Tecidos)",
    pronunciation: "iê-lou-ing pri-vên-shon — pre-ven-são de a-ma-re-la-men-tu (ˈjɛloʊɪŋ prɪˈvɛnʃən)",
    level: "Iniciante 🟢",
    category: "Acabamento & Finalização",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'yellowing' (amarelamento fenólico / foto-oxidação de polímeros e celulose) e 'prevention' (métodos de conservação têxtil preventiva).",
    summary: "Conjunto de práticas de acabamento, lavagem e armazenamento do ateliê para evitar manchas amareladas em peças bordadas brancas e enxovais de bebê.",
    definition: "A Yellowing Prevention (Prevenção de Amarelamento Têxtil / Controle de Amarelamento Fenólico e Oxidação / Anti-Yellowing Finishing & Packaging) é o conjunto de técnicas químicas, térmicas e de embalagem aplicadas no ateliê de bordado para impedir a formação de manchas amareladas em tecidos brancos (algodão, piquet, percal, linho) e linhas de bordado após a confecção ou durante o armazenamento. Essas manchas ocorrem principalmente por três fatores: resíduos de entretela solúvel ou termocolante não enxaguados, contato com caixas de papelão ácidas ou plásticos de polietileno com antioxidantes BHT, e ferro de passar em temperatura excessiva.",
    technicalDetails: "O amarelamento fenólico (Phenolic Yellowing) é uma reação química entre compostos nitrogenados atmosféricos (NOx) e fenóis estericamente impedidos (antioxidantes como o BHT - Butil-hidroxitolueno) presentes em sacos plásticos de baixa qualidade e papelões reciclados não alcalinos. No ateliê de bordado, o contato prolongado de um enxoval branco embalado em saco plástico comum desencadeia manchas amarelas em poucas semanas. A prevenção exige o uso de embalagens livres de BHT (polipropileno virgem livre de ácido), remoção total de amidos e entretelas solúveis com enxágue em água corrente e temperatura de ferro controlada abaixo de 140°C em fibras sensíveis.",
    beginnerExplanation: "Sabe quando você guarda uma toalhinha de bebê branca bordada novinha no armário e depois de alguns meses ela aparece com manchas amarelas horríveis? Isso acontece por causa de restos de produtos no tecido, ferro quente demais ou saquinhos plásticos ruins! A prevenção de amarelamento ensina como lavar, passar e embalar suas peças para que elas continuem brancas como a neve por anos!",
    howItWorks: [
      "1. Ao término do bordado em tecido branco, remove-se toda a entretela hidrossolúvel com enxágue em água fria corrente abundante.",
      "2. Seca-se a peça à sombra em local ventilado, evitando exposição solar direta prolongada.",
      "3. Passa-se o ferro a vapor com temperatura adequada para a fibra (máximo 140°C no algodão com bordado de poliéster).",
      "4. Utiliza-se um pano de passar (sapata de teflon ou tecido de algodão limpo) entre o ferro e o bordado.",
      "5. A peça é envolvida em papel de seda branco livre de ácido (Acid-Free Tissue Paper).",
      "6. Embala-se em saquinhos de polipropileno virgem (BOPP cristal) isentos de antioxidantes fenólicos BHT.",
      "7. O cliente recebe um produto com garantia de brancura impecável e preservação duradoura."
    ],
    characteristics: [
      "Embalagens plásticas especiais sem BHT e papel de seda neutro (pH 7,0 a 8,5).",
      "Enxágue completo sem deixar resíduos de colas químicas ou amidos.",
      "Proteção térmica contra queima superficial de filamentos sintéticos e celulose."
    ],
    applications: [
      "Enxovais de bebê de alto luxo (mantas, fraldas, vestidos de batizado e saídas de maternidade).",
      "Jogos de cama, mesa e banho brancos e peças de noiva.",
      "Camisaria branca e jalecos médicos personalizados.",
      "Armazenamento de estoque de peças bordadas para pronta-entrega."
    ],
    commonErrors: [
      "❌ Guardar toalhas bordadas brancas dentro de sacos plásticos comuns de supermercado ou caixas de papelão pardo reciclado.",
      "❌ Passar ferro excessivamente quente diretamente sobre a linha branca de poliéster, 'tostando' o polímero.",
      "❌ Borrifar perfume ou amaciante diretamente sobre o tecido branco antes de embalar, criando manchas amarelas com o tempo."
    ],
    troubleshootingTips: [
      "A peça branca guardada amarelou onde encostou na fita adesiva ou plástico: trata-se de amarelamento fenólico; lave a peça com água morna e sabão neutro com uma colher de vinagre de álcool branco ou percarbonato de sódio.",
      "O ferro de passar deixou uma mancha brilhante amarelada no bordado: o calor derreteu a superfície da linha; use sempre sapata antiaderente de teflon na base do seu ferro de passar.",
      "Restos de entretela solúvel endureceram e amarelaram com o ferro: lave a peça em água corrente antes de passar para remover 100% dos resíduos de álcool polivinílico (PVA)."
    ],
    dicaArtrelados: "Para entregar enxovais brancos de bebê impecáveis que vão durar gerações: embale sempre as peças dobradas com uma folha de papel de seda branco neutro e use saquinhos de celofane ou polipropileno brilhante (BOPP). Além de evitar o amarelamento, a apresentação fica digna de boutique de luxo!",
    voceSabia: "O teste padrão industrial de laboratório para amarelamento fenólico (ISO 105-X18) foi criado para simular em 16 horas dentro de uma câmara térmica o que aconteceria com uma peça de roupa branca guardada em estoque por 2 anos!",
    practicalExercise: "Inspecione os saquinhos plásticos que você usa no seu ateliê. Dê preferência a plásticos do tipo polipropileno (BOPP) crocantes e super transparentes em vez de plásticos leitosos e foscos. Embale uma toalhinha de teste com papel de seda neutro e veja a diferença de qualidade no acabamento.",
    quickSummary: "Conjunto de cuidados na lavagem, passagem e embalagem livre de ácidos e BHT para proteger tecidos brancos e fios contra manchas amarelas.",
    relatedTerms: ["Amarelamento Fenólico", "Acid-Free", "Enxoval de Bebê", "Sapata de Teflon", "Embalagem BOPP", "Acabamento de Ateliê"],
    tags: ["yellowingprevention", "amarelamento", "enxoval", "embalagem", "acabamento", "preservacao", "atelie"]
  }
];

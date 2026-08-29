import json
import os

verbetes_l13 = [
  {
    "id": "l-076-lese-laise-broderie-anglaise-bordado-em-tecido-vazado-com-ilhoses",
    "code": "L-076",
    "term": "Lese / Laise: Broderie Anglaise e Tecidos Vazados com Ilhoses (Embroidered Eyelet & Cutwork Lace Fabric)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do francês laise (tecido de largura definida / bordado furadinho) e broderie anglaise (bordado inglês popularizado no século XIX).",
    "summary": "Tecido nobre de puro algodão com furinhos e ilhoses bordados em relevo festonê, clássico em roupas infantis de luxo, vestidos românticos e moda praia de alto padrão.",
    "definition": "Lese ou Laise (Broderie Anglaise e Tecidos com Ilhoses Bordados) é o tecido clássico de algodão leve a médio caracterizado por vazados circulares ou florais (ilhoses / eyelets) contornados por densos cordões de ponto cheio ou festonê. No bordado computadorizado, a produção de laise envolve técnicas de richelieu, pontos de corte (cutwork) ou punção perfuradora mecânica (boring needle), estabilizada por entretelas hidrossolúveis pesadas que garantem ilhoses perfeitamente limpos e sem fiapos soltos.",
    "technicalDetails": "Tecidos 100% cambraia ou tricoline de algodão (gramatura de 90 a 140 g/m²). Agulhas normais 75/11 SES ou agulhas perfuradoras de corte (Boring Needles). Entretela hidrossolúvel de 80 g/m² ou entretela rasgável de algodão macio.",
    "construction": [
      "Base de cambraia ou percal 100% algodão pré-encolhido",
      "Entretela hidrossolúvel de suporte (Water Soluble Film 80 micras ou entretela de tecido solúvel)",
      "Linha de algodão mercerizado 50wt ou poliéster fosco branco/off-white",
      "Matriz com sequência de costura guia, corte/perfuração e acabamento em ponto cheio circular",
      "Agulha perfuradora de ilhós (Boring Needle) ou tesoura de ponta curva para cutwork"
    ],
    "howItWorks": [
      "1. O tecido de cambraia de algodão é montado no bastidor junto com entretela hidrossolúvel.",
      "2. A máquina borda uma linha de reforço circular (running stitch underlay) no local de cada furo.",
      "3. A agulha perfuradora abre os buraquinhos ou o bordadeiro realiza o corte manual com tesourinha.",
      "4. A máquina cobre as bordas dos furos com pontos cheios radiais muito densos (eyelet stitch).",
      "5. Os motivos florais ao redor dos furos são preenchidos com pontos tatami ou relevos acetinados.",
      "6. A peça é lavada em água morna para dissolver 100% da entretela hidrossolúvel.",
      "7. O tecido revela vazados nítidos, geométricos e com caimento leve e romântico."
    ],
    "mainTypes": [
      "Laise Floral Romântica (Com pequenas flores vazadas e folhas em relevo)",
      "Laise Geométrica de Ilhoses (Com círculos e losangos simétricos de estilo contemporâneo)",
      "Barrados de Laise em Festonê (Bordas rendadas recortáveis para bainhas de vestidos e toalhas)"
    ],
    "characteristics": [
      "Frescor, alta respirabilidade e conforto térmico incomparável em dias quentes",
      "Visual delicado, atemporal e nobre associado a coleções de grifes de alto padrão",
      "Excelente aceitação em roupas de batizado, vestidos de noiva rústicos e moda bebê",
      "Bordados que valorizam tecidos de algodão simples com alto valor agregado"
    ],
    "limitations": [
      "Não utilizar tecidos sintéticos que desfiem facilmente ao serem perfurados",
      "Exige estabilização perfeita para que os ilhoses fiquem circulares e não ovais",
      "O corte manual dos furos exige tesouras ultrafinas e mão firme para não romper os pontos"
    ],
    "numberingSystem": [
      "Diâmetro dos Ilhoses: 2,0 mm a 6,0 mm",
      "Gramatura do Tecido: 100 a 130 g/m²",
      "Largura do Cordão de Acabamento: 1,8 mm a 2,5 mm"
    ],
    "advantages": [
      "✔ Peça com altíssima procura no mercado de enxovais de luxo e moda praia",
      "✔ Excelente durabilidade após a lavagem por ser confeccionada em puro algodão",
      "✔ Criação de estampas e texturas vazadas exclusivas impossíveis na costura reta"
    ],
    "commonErrors": [
      "❌ Cortar o tecido antes da costura de reforço, fazendo o buraco desfiar durante o bordado",
      "❌ Usar entretela rasgável dura que deixa resíduos de papel presos dentro dos furinhos",
      "❌ Deixar a tensão da linha frouxa, criando laçadas irregulares ao redor dos ilhoses"
    ],
    "voceSabia": "A Laise (ou Broderie Anglaise) tornou-se febre mundial no século XIX quando a Rainha Vitória da Inglaterra começou a usar vestidos inteiros de algodão branco com furinhos bordados, simbolizando pureza e elegância campestre aristocrática!",
    "curiosidadeTecnica": "Em máquinas industriais multicabeçote, a ferramenta *Borer* (faca perfuradora) é uma agulha especial sem ponta e com 4 lâminas afiadas nas laterais que empurra os fios da trama para os lados sem cortar as fibras, criando furos reforçados que nunca desfiam.",
    "dicaArtrelados": "Ao bordar peças no estilo Laise, utilize linha branca fosca de algodão tanto na agulha quanto na bobina: o acabamento fica tão suave e homogêneo que o bordado parece ter nascido na tecelagem do próprio tecido!",
    "comparisonTable": {
      "headers": ["Tecido Vazado", "Método de Abertura", "Toque Têxtil", "Uso Predominante"],
      "rows": [
        ["Laise de Algodão", "Furos perfurados + Ponto Cheio", "Fresco, macio e estruturado", "Moda infantil e vestidos de verão"],
        ["Renda Guipir / FSL", "100% Linhas sem tecido base", "Rico e tridimensional", "Golas, decotes e aplicações nobres"],
        ["Tule Bordado", "Pontos sobre malha de rede", "Transparente e fluido", "Vestidos de festa e véus de noiva"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou Agulha Perfuradora Borer",
      "stabilizer": "Entretela Hidrossolúvel de Tecido Solúvel 80 g/m²",
      "threadTension": "110 a 120 gf (superior) e 22 gf (bobina)",
      "density": "0.38 mm no cordão radial com sobredensidade nos nós"
    },
    "applications": [
      "Vestidos de batizado, pagãos, saídas de maternidade e bodies de bebê",
      "Vestidos românticos de verão, saias longas e saídas de praia nobres",
      "Fronhas, lençóis de berço e toalhas de lavabo com barrados ingleses",
      "Camisas femininas com mangas bufantes e golas trabalhadas em laise"
    ],
    "troubleshootingTips": [
      "Se os furos ficarem com formato oval, aumente a compensação de repuxo no sentido da trama do tecido",
      "Utilize tesoura tipo garça com lâmina curva de microprecisão para abrir os furinhos caso não tenha agulha borer",
      "Enxágue a peça em água corrente morna até remover completamente todo o plástico solúvel"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bordado Richelieu",
      "Entretela Hidrossolúvel",
      "Ponto Festonê",
      "Agulha Perfuradora (Borer)"
    ],
    "tags": [
      "l-076",
      "lese",
      "laise",
      "broderie anglaise",
      "ilhoses",
      "cutwork",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CLUCAS, Joy. The Technique of White Work and Broderie Anglaise. London: Batsford, 2021.",
      "PARRISH, Gail. Automated Eyelet and Cutwork Machine Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tricoline branco de 20x20 cm. Coloque entretela solúvel no verso. Digitalize 4 círculos de 5 mm com costura de contorno simples, corte o miolo com a tesourinha e cubra com ponto cheio de 2 mm de largura. Lave em água morna e veja surgir uma autêntica laise artesanal!",
    "quickSummary": "Tecido clássico de algodão com furinhos e ilhoses bordados de toque romântico e fresco.",
    "beginnerExplanation": "A Laise é aquele tecido furadinho clássico de vestidos brancos de verão e roupas de bebê. A máquina faz costuras firmes ao redor de cada furinho, deixando a roupa linda, fresquinha e super sofisticada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-077-lurex-e-fios-de-efeito-cintilante-metalico",
    "code": "L-077",
    "term": "Lurex & Fios de Efeito Cintilante Metálico (Lurex & Metallic Sparkle Embroidery Threads)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino.",
    "origin": "Marca registrada pela Lurex Company nos anos 1940, derivada do inglês lure (atração / brilho sedutor).",
    "summary": "Fios de bordar compostos por filme de poliéster com deposição de alumínio e resinas protetoras coloridas para brilho radiante e cintilância festiva.",
    "definition": "Lurex & Fios Cintilantes (Metallic Filament Threads) são linhas de bordar eletrônico de alta luminosidade constituídas por uma fita microscópica de poliéster metalizado com alumínio vaporizado a vácuo, envolvida em espiral ao redor de uma alma de poliamida ou raiom. Proporcionam reflexos de pedraria, ouro e glitter sem a rigidez dos fios metálicos maciços, exigindo velocidade moderada, agulhas com canaleta larga e tensão aliviada para evitar o desfiamento da película reflexiva.",
    "technicalDetails": "Título No. 40 (cerca de 135 dtex). Composição de 60% filme de poliéster metalizado e 40% alma sintética. Resistência à tração de 850 cN e ponto de fusão a 250°C.",
    "construction": [
      "Carretel de fio metálico Lurex No. 40 com enrolamento suave",
      "Redinha elástica de proteção para carretel (Thread Net)",
      "Agulha especial 80/12 Metallic ou Titanium com olho oval alongado",
      "Base de tecido com entretela macia e compensação de repuxo de 0,30 mm",
      "Silicone líquido atóxico aplicado na guia de linha para lubrificação"
    ],
    "howItWorks": [
      "1. A linha Lurex é envolvida na redinha de proteção para evitar desenrolamento excessivo.",
      "2. A linha passa pelas guias com trajeto desimpedido e ângulo de entrada suave no tensor.",
      "3. A tensão superior da máquina é reduzida em 20% em relação à linha normal de poliéster.",
      "4. A máquina borda em velocidade constante de 600 PPM para evitar aquecimento por atrito.",
      "5. A agulha Metallic abre a trama do tecido sem raspar a fita de alumínio do fio.",
      "6. A laçada é formada com firmeza e brilho homogêneo na superfície.",
      "7. A peça ganha um reflexo brilhante e luxuoso que não descasca nas lavagens normais."
    ],
    "mainTypes": [
      "Lurex Dourado e Prateado Clássico (Ouro real, ouro rico, prata pura e platina)",
      "Lurex Furta-Cor e Holográfico (Com reflexos multicoloridos de prisma de arco-íris)",
      "Lurex Metálico Tingido (Vermelho rubi, azul safira, verde esmeralda e ônix negro)"
    ],
    "characteristics": [
      "Brilho cintilante incomparável com efeito de joia e pedraria",
      "Toque mais flexível e agradável na roupa em comparação aos fios metálicos antigos",
      "Resistência superior à oxidação e ao escurecimento pelo suor",
      "Excelente impacto visual em logotipos comemorativos e temas de Natal e festas"
    ],
    "limitations": [
      "Não suporta velocidades industriais extremas acima de 850 PPM sem quebra de fio",
      "Não deve ser lavado com alvejantes à base de cloro para não desbotar o alumínio",
      "Exige passar a ferro sempre pelo avesso com pano de proteção e temperatura morna"
    ],
    "numberingSystem": [
      "Espessura Padrão: No. 40 (40wt)",
      "Tensão Recomendada: 85 a 95 gf",
      "Velocidade Ideal: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Transforma qualquer matriz simples em um produto nobre de alto valor comercial",
      "✔ Ampla variedade de tonalidades para combinar perfeitamente com tecidos de festa",
      "✔ Agrega sofisticação imediata em monogramas, brasões e brasões escolares"
    ],
    "commonErrors": [
      "❌ Usar agulha comum com olho pequeno que desfia e encrespa a linha metálica",
      "❌ Deixar a tensão muito apertada, fazendo a linha arrebentar a cada 100 pontos",
      "❌ Deixar o carretel solto sem redinha, fazendo o fio escorregar e prender na base do pino"
    ],
    "voceSabia": "A primeira roupa feita com fios Lurex foi um vestido de gala desenhado em Paris em 1953; na época, o brilho era tão impressionante que a imprensa chamou o tecido de 'o fio de estrelas'!",
    "curiosidadeTecnica": "O revestimento metálico dos fios de Lurex de alta tecnologia é aplicado através de vaporização atômica em câmara de vácuo a 1.200°C, criando uma camada de alumínio com apenas 0,02 micras de espessura (500 vezes mais fina que um fio de cabelo humano).",
    "dicaArtrelados": "Ao bordar com fios metálicos ou Lurex, coloque um pingo de silicone líquido para máquinas no feltro do porta-fios ou na redinha do carretel: a linha desliza macia como manteiga e não arrebenta nunca mais!",
    "comparisonTable": {
      "headers": ["Tipo de Fio", "Composição", "Brilho", "Velocidade Recomendada"],
      "rows": [
        ["Lurex / Fio Metálico", "Filme Poliéster + Alumínio", "Metálico Cintilante Intenso", "550 a 650 PPM"],
        ["Poliéster Trilobal", "100% Poliéster Brilhante", "Acetinado Sedoso", "800 a 1.000 PPM"],
        ["Raiom Viscose", "100% Celulose Natural", "Sedoso Profundo", "750 a 850 PPM"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 Metallic ou 80/12 Titanium",
      "stabilizer": "Entretela Rasgável Macia ou Recorte conforme o tecido",
      "threadTension": "85 a 95 gf (tensão aliviada)",
      "density": "0.42 mm a 0.45 mm (densidade 10% mais aberta que o normal)"
    },
    "applications": [
      "Bordados de Natal, temas de Ano Novo, estrelas e sinos comemorativos",
      "Brasões de formatura, monogramas de casamento e vestidos de noiva",
      "Fantasias de carnaval de luxo, roupas de palco e figurinos de dança",
      "Emblemas militares de honra, faixas de miss e estolas religiosas"
    ],
    "troubleshootingTips": [
      "Se a linha metálica começar a desfiar na agulha, troque imediatamente a agulha por uma Metallic nova",
      "Abra a densidade dos pontos cheios no software em 10% para evitar acúmulo excessivo de fios metálicos",
      "Utilize suporte de linha vertical posicionado a 30 cm de distância da máquina para desenrolamento suave"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Agulha Metallic",
      "Tensão de Linha",
      "Fios Metálicos",
      "Karat Gold Thread"
    ],
    "tags": [
      "l-077",
      "lurex",
      "fios metalicos",
      "brilho",
      "linhas cintilantes",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEMMON, Robert. Metallic and Specialty Threads in Machine Embroidery. London, 2021.",
      "PARRISH, Gail. High-Luster Metallic Thread Digitizing and Machine Setup. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um tecido escuro. Coloque um carretel de Lurex dourado com redinha de proteção, agulha 80/12 Metallic e reduza a velocidade para 600 PPM. Borde uma estrela de 5 cm com densidade 0,42 mm. Observe o brilho radiante e sem quebras de linha!",
    "quickSummary": "Linha brilhante com filme de poliéster metalizado para efeitos cintilantes e luxuosos em roupas de festa.",
    "beginnerExplanation": "O Lurex é aquela linha brilhante que parece ouro e prata de verdade. A gente borda em velocidade um pouco mais calma e com uma agulha de buraquinho maior para a linha deslizar fácil e deixar tudo brilhando como uma joia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-078-lancadeira-rotativa-magnetica-e-sistema-de-eixo-flutuante",
    "code": "L-078",
    "term": "Lançadeira Rotativa Magnética & Sistema de Eixo Flutuante (Magnetic Rotary Hook & Floating Core Bobbin Case)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim lancea (arma pontiaguda de arremesso) e do grego magnes (ímã natural). Tecnologia moderna desenvolvida no Japão e Alemanha.",
    "summary": "Mecanismo rotativo de alta precisão com suspensão magnética para captura da laçada da linha superior com atrito quase nulo e ruído ultra-reduzido.",
    "definition": "Lançadeira Rotativa Magnética (Magnetic Suspended Rotary Hook System) é a evolução mecânica do sistema de formação de ponto em máquinas de bordar industriais, na qual a caixa de bobina e o cesto da lançadeira são estabilizados por campos magnéticos permanentes de neodímio. Este sistema elimina a necessidade de molas de pressão metálicas convencionais, reduzindo o aquecimento por fricção em 60%, estabilizando a tensão da bobina mesmo em velocidades superiores a 1.000 PPM e impedindo o giro falso (*backlash*) quando a máquina corta a linha.",
    "technicalDetails": "Rotação sincronizada na proporção 2:1 em relação ao eixo principal (gira 2 vezes a cada descida da agulha). Folga entre a agulha e o bico da lançadeira calibrada entre 0,05 mm e 0,10 mm. Fabricada em liga de aço-titânio temperado.",
    "construction": [
      "Corpo da lançadeira rotativa de precisão com bico temperado a laser",
      "Anel magnético de neodímio embutido na base do cesto",
      "Caixa de bobina com base ferrosa polida e mola tensora micrométrica",
      "Eixo condutor com sistema de lubrificação por micro-capilaridade",
      "Gabarito de calibração de folga de 0,05 mm para ajuste de sincronismo"
    ],
    "howItWorks": [
      "1. A agulha desce ao ponto morto inferior e sobe cerca de 1,8 mm a 2,2 mm.",
      "2. A subida da agulha cria a laçada fofa de linha superior atrás da canaleta.",
      "3. O bico da lançadeira rotativa passa a 0,05 mm da agulha e entra exatamente dentro da laçada.",
      "4. O cesto flutuante suspenso por magnetismo permite que o fio passe ao redor da bobina sem atrito mecânico.",
      "5. A mola magnética impede que a bobina continue girando por inércia quando a máquina para.",
      "6. A linha de cima puxa a linha da bobina e o estica-fio aperta o nó no centro exato do tecido.",
      "7. A máquina produz pontos com tensão 100% constante mesmo durante paradas e arranques bruscos."
    ],
    "mainTypes": [
      "Lançadeira Rotativa Magnética Standard (Tamanho padrão de bobina estilo L para camisas e vestuário)",
      "Lançadeira Magnética Jumbo / Estilo M (Com capacidade 100% maior de linha de bobina para colchas e bonés)",
      "Lançadeira com Revestimento Cerâmico DLC (Diamond-Like Carbon para operação contínua 24h sem superaquecimento)"
    ],
    "characteristics": [
      "Operação ultrassilenciosa e livre de vibrações mecânicas",
      "Eliminação quase total de quebras de linha por giro solto da bobina",
      "Tensão de bobina perfeitamente constante do início ao fim do carretel",
      "Vida útil do mecanismo 3 vezes superior às lançadeiras de atrito convencionais"
    ],
    "limitations": [
      "Custo de reposição superior aos modelos mecânicos comuns de fricção",
      "Exige limpeza periódica de fiapos com ar comprimido para não acumular pó entre os ímãs",
      "Deve-se evitar o uso de solventes químicos agressivos que possam danificar as resinas magnéticas"
    ],
    "numberingSystem": [
      "Folga Agulha-Lançadeira: 0,05 mm a 0,10 mm",
      "Altura do Ponto de Captura: 1,8 mm a 2,2 mm acima do ponto morto inferior",
      "Taxa de Rotação: 2:1 (Dupla rotação por ponto)"
    ],
    "advantages": [
      "✔ Reduz drasticamente paradas de máquina causadas por linha da bobina embolada",
      "✔ Melhora a qualidade visual dos pontos cheios em letras minúsculas",
      "✔ Economia de tempo com menos trocas de bobina e menos retrabalho"
    ],
    "commonErrors": [
      "❌ Bater a agulha na ponta da lançadeira por falta de alinhamento do bastidor",
      "❌ Deixar acúmulo de poeira e fiapos de linha no anel magnético",
      "❌ Usar caixas de bobina de plástico sem alma ferrosa em sistemas magnéticos"
    ],
    "voceSabia": "A lançadeira rotativa foi inventada originalmente em 1851 por Allen B. Wilson, mas foi apenas com a introdução de ímãs de neodímio nos anos 2000 que as máquinas de bordar conseguiram ultrapassar a barreira dos 1.200 pontos por minuto sem quebrar a linha da bobina!",
    "curiosidadeTecnica": "Em uma máquina operando a 1.000 PPM, a lançadeira rotativa gira a 2.000 rotações por minuto; nessa velocidade, o bico da lançadeira passa pela agulha mais de 33 vezes por segundo com uma precisão de fração de milímetro.",
    "dicaArtrelados": "Ao trocar a agulha da sua máquina, certifique-se de que a parte chanfrada (a cavidade atrás da agulha) fique rigorosamente voltada para o bico da lançadeira: é esse milímetro de cavidade que permite a passagem livre da lançadeira sem bater e sem entortar a ponta!",
    "comparisonTable": {
      "headers": ["Característica", "Lançadeira Magnética Moderna", "Lançadeira Tradicional com Mola", "Lançadeira Oscilante Caseira"],
      "rows": [
        ["Velocidade Máxima", "1.200 a 1.500 PPM", "850 a 1.000 PPM", "600 a 700 PPM"],
        ["Estabilidade de Tensão", "100% Constante (Ímã Neodímio)", "Variável com desgaste da mola", "Oscilante (ponto irregular)"],
        ["Nível de Ruído", "Extremamente Baixo", "Moderado", "Alto (estalos contínuos)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "800 - 1.200 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 Industrial",
      "stabilizer": "Adequado ao tecido em produção",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina magnética)",
      "density": "Compatível com qualquer matriz digitalizada"
    },
    "applications": [
      "Máquinas industriais multicabeçote de alta produtividade para confecção",
      "Bordados de bonés estruturados com rotação pesada",
      "Bordados de letras minúsculas e monogramas de alta definição",
      "Produção ininterrupta de uniformes profissionais e artigos de luxo"
    ],
    "troubleshootingTips": [
      "Se a máquina começar a pular pontos, verifique com uma lupa se o bico da lançadeira não está amassado por batida de agulha",
      "Passe uma lixa d'água 2000 micropulidora no bico da lançadeira caso haja qualquer rebarba microscópica",
      "Aplique uma gota de óleo branco para máquinas finas a cada 4 horas de trabalho contínuo"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Caixa de Bobina",
      "Sincronismo Agulha-Lançadeira (Hook Timing)",
      "Formação do Ponto (Loop Formation)",
      "Manutenção Preventiva"
    ],
    "tags": [
      "l-078",
      "lancadeira rotativa",
      "sistema magnetico",
      "mecanica de maquinas",
      "hook timing",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KOBAYASHI, Kenji. Rotary Hook Mechanics and Industrial Sewing Systems. Tokyo, 2021.",
      "PARRISH, Gail. High-Speed Embroidery Machine Maintenance and Hook Timing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra a chapa de agulha da sua máquina. Gire o volante manualmente devagar e observe o momento exato em que a agulha sobe 2 mm e o bico pontiagudo da lançadeira passa pegando a laçada da linha. Entender esse balé mecânico é o segredo dos mestres do bordado!",
    "quickSummary": "Mecanismo rotativo de alta precisão com suporte magnético para laçamento perfeito e silencioso da linha.",
    "beginnerExplanation": "A lançadeira é aquela pecinha redonda de aço que fica embaixo da chapa da máquina rodando sem parar. Ela tem uma pontinha afiada que pesca a linha da agulha e dá a volta na bobina para dar o nó do bordado!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-079-linho-puro-belga-e-irlandes-no-bordado-de-luxo",
    "code": "L-079",
    "term": "Linho Puro Belga e Irlandês no Bordado de Luxo (Belgian & Irish Pure Linen Embroidery)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim linum (planta do linho cultivada há mais de 8.000 anos). As regiões de Flandres (Bélgica) e Belfast (Irlanda) são os centros mundiais de tecelagem nobre de linho.",
    "summary": "O mais nobre dos tecidos naturais de fibra vegetal, caracterizado por fios nobres de textura elegante, altíssima durabilidade e suporte ideal para monogramas de enxoval e camisaria.",
    "definition": "Linho Puro Belga e Irlandês (Pure Masters of Linen Fabric) é o substrato têxtil de elite obtido a partir dos filamentos longos da planta do linho (*Linum usitatissimum*), famoso pelo toque fresco, brilho natural suave e rusticidade sofisticada. No bordado computadorizado, requer digitalização de precisão com underlays leves e compensação de repuxo moderada (0,30 a 0,35 mm) para acompanhar a rigidez estrutural das fibras sem deformar o desenho nem criar rugas ao redor dos pontos.",
    "technicalDetails": "Composição 100% linho puro lavado ou cambraia de linho (gramatura de 140 a 280 g/m²). Fibra vegetal de celulose cristalina com absorção de umidade de até 20% sem parecer úmido. Trama com contagem de 40 a 80 fios por polegada.",
    "construction": [
      "Tecido de puro linho previamente lavado e passado a ferro úmido",
      "Entretela rasgável de algodão macio (Cotton Soft 50 g/m²)",
      "Linha de algodão mercerizado 50wt, poliéster fosco ou seda pura",
      "Matriz com underlays lineares suaves e densidade equilibrada de 0,40 mm",
      "Agulha 75/11 SES de ponta bola fina para penetrar entre os fios sem quebrar as fibras"
    ],
    "howItWorks": [
      "1. O linho é umedecido e passado a ferro quente para alinhar as tramas antes do corte.",
      "2. A peça é posicionada no bastidor com entretela rasgável de algodão no verso.",
      "3. A máquina borda uma costura de alinhamento prévio para assentar a área.",
      "4. Monogramas e ramos de alfaiataria são bordados com pontos cheios e tatamis elegantes.",
      "5. A tensão de linha equilibrada garante que o linho não enrugue nas bordas dos motivos.",
      "6. A entretela é rasgada suavemente no avesso preservando o toque macio do linho.",
      "7. A peça é passada a ferro pelo avesso com vapor, revelando um acabamento digno de realeza."
    ],
    "mainTypes": [
      "Linho Belga de Alta Gramatura (220 a 280 g/m² para toalhas de mesa, guardanapos e almofadas de luxo)",
      "Cambraia de Linho Irlandês Leve (120 a 160 g/m² para camisas clássicas, lenços de bolso e batas)",
      "Linho Misto com Algodão / Linho Rústico (Para peças casuais com toque despojado e menor amarrotamento)"
    ],
    "characteristics": [
      "Nobreza inconfundível com beleza que melhora a cada lavagem",
      "Hipoalergênico, antibacteriano e termorregulador natural",
      "Suporte perfeito para monogramas clássicos, brasões familiares e bordados botânicos",
      "Altíssima resistência ao desgaste físico e tração mecânica"
    ],
    "limitations": [
      "Amarrota com facilidade natural, o que faz parte do seu charme característico",
      "Não deve ser bordado com matrizes excessivamente densas e pesadas para não enrugar",
      "Exige pré-lavagem obrigatória devido ao encolhimento natural de 3% a 5% no primeiro contato com água"
    ],
    "numberingSystem": [
      "Gramatura Padrão: 160 a 240 g/m²",
      "Densidade de Ponto: 0,38 mm a 0,42 mm",
      "Compensação de Repuxo: 0,30 mm a 0,35 mm"
    ],
    "advantages": [
      "✔ Produto de altíssimo valor de mercado procurado por clientes de alto poder aquisitivo",
      "✔ Peças de enxoval que duram décadas e passam de geração em geração",
      "✔ Fácil de enquadrar no bastidor devido à estabilidade natural da trama"
    ],
    "commonErrors": [
      "❌ Bordar no linho novo sem pré-lavagem: a peça encolhe ao lavar e enruga todo o bordado",
      "❌ Usar densidades maciças que picotam as fibras rígidas do linho",
      "❌ Puxar a entretela com força bruta, deformando os fios da trama do linho"
    ],
    "voceSabia": "Múmias egípcias de faraós de 4.000 anos atrás foram encontradas envoltas em tecidos de linho puro com bordados dourados intactos até os dias de hoje, comprovando que o linho é o tecido mais resistente da história humana!",
    "curiosidadeTecnica": "As fibras de linho tornam-se 20% mais resistentes quando estão molhadas, ao contrário do algodão e da lã, que enfraquecem na água; por isso, toalhas e lençóis de linho bordados suportam centenas de lavagens sem se desgastar.",
    "dicaArtrelados": "Ao passar peças de linho bordadas a ferro, coloque uma toalha felpuda macia sobre a tábua de passar e passe a peça com o bordado virado para baixo: os pontos afundam na toalha e ganham um relevo maravilhoso sem serem amassados pelo ferro!",
    "comparisonTable": {
      "headers": ["Propriedade", "Puro Linho Belga", "Tricoline de Algodão", "Poliéster Sintético"],
      "rows": [
        ["Origem da Fibra", "Caule da planta do Linho", "Fruto da planta do Algodão", "Derivado de petróleo"],
        ["Durabilidade", "Dura décadas (Fica melhor lavando)", "Boa (Desgasta com o tempo)", "Alta (Porém cria bolinhas)"],
        ["Sofisticação Visual", "Máxima / Aristocrática", "Comum / Casual", "Comercial / Sintético"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve ou 80/12 Microtex",
      "stabilizer": "Entretela Rasgável Macia de Algodão 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com underlays lineares moderados"
    },
    "applications": [
      "Guardanapos de linho, jogos americanos e toalhas de mesa de jantar de gala",
      "Monogramas de camisa de linho masculina, bolsos e punhos elegantes",
      "Fronhas de travesseiro de enxoval de casamento e jogos de cama de nobreza",
      "Almofadas de linho rústico para decoração de interiores e casas de praia"
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido, adicione um underlay em zigue-zague leve no software para ancorar a trama",
      "Passe o linho ainda levemente úmido com ferro a vapor bem quente",
      "Utilize linhas foscas de algodão ou poliéster semibrilho para manter o visual clássico do linho"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Monogramas & Letreiros",
      "Compensação de Repuxo",
      "Entretela Rasgável",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "l-079",
      "linho",
      "linho puro",
      "linho belga",
      "monogramas",
      "enxovais de luxo",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HEINRICH, Linda. Linen: From Flax Seed to Woven Cloth. Atglen: Schiffer, 2021.",
      "PARRISH, Gail. Luxury Linen Machine Embroidery and Monogramming. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um guardanapo de linho puro lavado. Coloque entretela rasgável macia no verso. Digitalize uma inicial clássica em ponto cheio com contorno acetinado e underlay suave. Borde com linha branca ou crua. Passe a ferro pelo avesso sobre uma toalha: sinta o requinte incomparável do linho!",
    "quickSummary": "Tecido nobre de fibra vegetal milenar, perfeito para monogramas de enxovais de gala e camisaria fina.",
    "beginnerExplanation": "O linho é aquele tecido chique e natural que deixa qualquer almofada, guardanapo ou camisa com cara de casa de novela. A máquina borda letras e desenhos lindos nele com toda a facilidade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-080-la-merina-e-bordados-em-malharia-e-trico-pesado",
    "code": "L-080",
    "term": "Lã Merina & Bordados em Malharia e Tricô Pesado (Merino Wool & Chunky Knit Embroidery)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da raça de ovelhas Merino originárias da Península Ibérica e aperfeiçoadas na Austrália e Nova Zelândia.",
    "summary": "Fibra animal nobre ultrafina e elástica para suéteres, gorros e cardigãs de tricô que exigem estabilização flutuante e película solúvel de topo.",
    "definition": "Lã Merina & Bordados em Tricô (Merino Wool Knitwear Embroidery) é a técnica de bordar sobre malhas abertas e peças felpudas de lã animal caracterizadas por fibras onduladas microscópicas (17 a 22 micras). Pela sua alta elasticidade e superfície fofa com relevo irregular, o bordado eletrônico exige estabilização sanduíche (entretela de recorte flexível no verso e filme hidrossolúvel no topo) para impedir que os pontos afundem nas malhas e para que a peça não deforme no bastidor.",
    "technicalDetails": "Diâmetro da fibra de lã de 18 a 21,5 micras. Alta elasticidade natural (estica até 30% sem romper). Gramatura de malharia de 200 a 450 g/m². Agulha 75/11 SES de ponta bola arredondada.",
    "construction": [
      "Peça de lã merina ou malha de tricô estruturada",
      "Entretela de recorte especial para malhas (No-Show Mesh / PolyMesh 50 g/m²)",
      "Película plástica hidrossolúvel de topo (Water Soluble Film 35 micras)",
      "Linhas de bordar de poliéster 40wt macio ou fios de lã acrílica de bordar",
      "Técnica de fixação por flutuação com spray adesivo temporário no bastidor"
    ],
    "howItWorks": [
      "1. A entretela de recorte é colocada sozinha no bastidor bem esticada como um tambor.",
      "2. Aplica-se spray adesivo temporário sobre a entretela.",
      "3. A peça de lã é posicionada suavemente por cima (técnica de flutuação) sem esticar a malha.",
      "4. Coloca-se a película hidrossolúvel sobre a lã para conter os pelos e felpas.",
      "5. A máquina borda primeiro uma grade de underlay em tatami aberto para criar uma base sólida.",
      "6. Em seguida, borda os elementos decorativos com densidade equilibrada.",
      "7. A película de topo é retirada e os resíduos são dissolvidos com vapor, mantendo o toque super fofo da lã."
    ],
    "mainTypes": [
      "Suéteres e Cardigãs Finos de Lã Merina (Malharia fechada para logotipos e monogramas de peito)",
      "Gorros e Cachecóis de Tricô Grosso (Malharia aberta canelada para brasões e patchs aplicados)",
      "Mantas de Lã Infantil (Para enxovais de inverno macios e quentinhos)"
    ],
    "characteristics": [
      "Maciez extrema que não pinica e não irrita a pele",
      "Isolamento térmico superior mantendo o corpo aquecido no inverno",
      "Bordados em relevo que parecem flutuar sobre a malha de tricô",
      "Altíssimo valor percebido em roupas de inverno e moda esportiva de montanha"
    ],
    "limitations": [
      "Nunca prender a lã diretamente no aro do bastidor para não esmagar os fios de tricô (marcas permanentes)",
      "Evitar pontos extremamente curtos (< 1,5 mm) que podem cortar as fibras elásticas da lã",
      "A lavagem das peças deve ser manual ou no ciclo delicado com água fria"
    ],
    "numberingSystem": [
      "Espessura da Fibra: 18 a 22 micras",
      "Filme de Topo: 35 a 40 micras",
      "Densidade Recomendada: 0,40 mm a 0,44 mm"
    ],
    "advantages": [
      "✔ Peças de alto valor agregado com excelente margem de lucro no outono/inverno",
      "✔ Bordados perfeitos e nítidos mesmo em superfícies super felpudas",
      "✔ Preservação da elasticidade natural da roupa sem repuxar"
    ],
    "commonErrors": [
      "❌ Esquecer o plástico solúvel por cima: os pontos somem dentro dos pelos da lã",
      "❌ Prender a lã no bastidor e esticar a malha, deixando o bordado enrugado ao soltar",
      "❌ Usar entretela rasgável dura que se desfaz e deforma nas lavagens seguintes"
    ],
    "voceSabia": "As ovelhas da raça Merino possuem a lã mais macia do planeta, sendo capazes de produzir fibras tão finas que um único quilo de lã merina pode ser esticado em um fio de mais de 100 quilômetros de comprimento!",
    "curiosidadeTecnica": "A lã merina possui uma estrutura molecular em mola helicoidal (queratina) que absorve até 35% do seu próprio peso em vapor de água sem parecer molhada, o que faz com que a tensão da linha precise ser regulada ligeiramente mais frouxa para acomodar a expansão térmica da fibra.",
    "dicaArtrelados": "Ao bordar gorros de lã e suéteres de tricô, nunca aperte o aro do bastidor na peça: prenda apenas a entretela no bastidor e flutue a lã com adesivo temporário e plástico solúvel por cima: a malha fica 100% perfeita e sem nenhuma marca de aro!",
    "comparisonTable": {
      "headers": ["Tecido de Inverno", "Método de Bastidor", "Suporte Superior", "Entretela Indicada"],
      "rows": [
        ["Lã Merina / Tricô", "Flutuação com adesivo", "Plástico Hidrossolúvel 35 micras", "Entretela de Recorte Malha (PolyMesh)"],
        ["Moletom Flanelado", "Enquadramento tradicional", "Plástico Solúvel fino", "Entretela Rasgável Macia"],
        ["Soft / Fleece", "Flutuação ou Bastidor Magnético", "Plástico Hidrossolúvel 40 micras", "Entretela de Recorte Média"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES Ponta Bola ou 80/12 Ball Point",
      "stabilizer": "Entretela PolyMesh de Recorte + Filme Solúvel no Topo",
      "threadTension": "100 a 110 gf (superior suave) e 20 gf (bobina)",
      "density": "0.42 mm com Underlay Tatami aberto duplo"
    },
    "applications": [
      "Suéteres de lã, cardigãs e casacos de frio de grife",
      "Gorros de tricô, boinas francesas e toucas esportivas de inverno",
      "Cachecóis de lã nobre e xales aconchegantes",
      "Mantas de bebê de tricô para dias frios e berço"
    ],
    "troubleshootingTips": [
      "Se os pontos afundarem na malha, aumente a densidade do underlay tatami sob o desenho no software",
      "Dissolva os restos de plástico de topo aplicando vapor de ferro a 5 cm de distância da lã",
      "Recorte as sobras da entretela PolyMesh no verso deixando uma margem redonda de 5 mm"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Técnica de Flutuação no Bastidor",
      "Película Hidrossolúvel",
      "Entretela de Recorte",
      "Ponto Bola (Ball Point Needle)"
    ],
    "tags": [
      "l-080",
      "la merina",
      "trico",
      "sueter",
      "roupas de inverno",
      "flutuacao",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "D'ALESSANDRO, Stephanie. Knitwear Embroidery and Elastic Fabrics Stabilization. Melbourne, 2021.",
      "PARRISH, Gail. Machine Embroidery on Heavy Knits and Fine Woolens. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um gorro de tricô ou pedaço de malha de lã. Prenda entretela de recorte no bastidor e borrife cola temporária. Apoie a lã em cima sem puxar e coloque um pedaço de plástico solúvel por cima. Borde um floco de neve de 4 cm. Veja como os pontos ficam nítidos e saltados!",
    "quickSummary": "Técnica especializada para bordar em suéteres e malhas de lã felpudas com filme solúvel e flutuação.",
    "beginnerExplanation": "Bordar em suéter de lã e toucas de tricô é fácil quando usamos o truque do plástico transparente por cima: ele não deixa a linha afundar no meio dos pelinhos da lã, fazendo o desenho ficar bem nítido e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-081-laser-cutting-bridge-corte-a-laser-acoplado-a-maquina-de-bordar",
    "code": "L-081",
    "term": "Laser Cutting & Bridge: Corte a Laser Acoplado à Máquina de Bordar (Laser Bridge & In-Hoop Laser Cutting)",
    "letter": "L",
    "level": "Avançado 🔴",
    "category": "Automação & Tecnologia",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do acrônimo inglês LASER (Light Amplification by Stimulated Emission of Radiation) e bridge (ponte rolante industrial).",
    "summary": "Sistema automatizado de corte por feixe óptico a laser montado sobre a máquina de bordar para recorte milimétrico de apliques, vazados e tecidos multicamadas diretamente no bastidor.",
    "definition": "Laser Bridge & In-Hoop Laser Cutting (Sistema de Corte a Laser em Ponte para Bordado) é a tecnologia industrial avançada que integra um cabeçote de corte a laser de CO2 galvanométrico montado sobre um trilho suspenso (ponte) alinhado aos bastidores de máquinas de bordar multicabeçote. O feixe a laser executa cortes vetoriais com velocidade de até 1.500 mm/s diretamente sobre os tecidos montados nos aros, permitindo a produção instantânea de apliques recortados, gravações em couro (*kiss-cutting*), perfurações de ilhoses e bordados vazados sem necessidade de tesouras manuais.",
    "technicalDetails": "Tubo de laser de CO2 com potência de 30W a 100W e comprimento de onda de 10.6 micras. Precisão de posicionamento de ± 0,05 mm com foco de lente de 1,5 a 2,5 polegadas e velocidade de corte de até 2.000 mm/s.",
    "construction": [
      "Ponte móvel suspensa com motorização linear de alta aceleração",
      "Cabeçote óptico galvanométrico com espelhos de berílio refrigerados",
      "Software de CAD/CAM integrado com sincronismo de comandos G-Code / DST",
      "Sistema de exaustão industrial de fumos e fumaça com filtro HEPA de carvão ativado",
      "Sensor de foco automático e ponteiro laser vermelho de alinhamento"
    ],
    "howItWorks": [
      "1. A máquina de bordar posiciona os bastidores sob o cabeçote laser.",
      "2. O laser corta os pedaços de tecido de aplique (sarja, feltro, couro) com bordas seladas termicamente.",
      "3. Os cabeçotes de bordado entram em ação e fixam o aplique com ponto zigue-zague ou cheio.",
      "4. O laser pode retornar para fazer cortes de relevo superficiais (*kiss-cut*) em camadas sobrepostas.",
      "5. A máquina borda os detalhes finais de texto e acabamentos acetinados.",
      "6. O sistema de exaustão remove toda a fumaça instantaneamente sem manchar o tecido.",
      "7. A produção atinge uma agilidade 500% superior ao processo de recorte manual com tesoura."
    ],
    "mainTypes": [
      "Ponte Laser Longa (Laser Bridge que atende de 2 a 12 máquinas industriais simultâneas)",
      "Laser Individual por Cabeçote (Mini-laser de fibra ou diodo montado ao lado de cada agulha)",
      "Sistema de Gravação Superficial / Desgaste (Para efeitos de vintage e desgastado em jeans e couro)"
    ],
    "characteristics": [
      "Velocidade incomparável no recorte de apliques de camisetas e jaquetas esportivas",
      "Selagem térmica instantânea das bordas de tecidos sintéticos que impede que desfiem",
      "Precisão microscópica em cortes complexos impossíveis de fazer com tesouras manuais",
      "Redução drástica de mão de obra e eliminação total de erros de corte manual"
    ],
    "limitations": [
      "Alto investimento inicial em equipamentos e infraestrutura de exaustão industrial",
      "Exige calibração rigorosa de potência para não queimar o tecido de fundo nem a entretela",
      "Não deve ser utilizado com materiais que emitam gases tóxicos como PVC / Vinil comum"
    ],
    "numberingSystem": [
      "Potência do Tubo Laser: 30W a 100W CO2",
      "Velocidade de Corte Vetorial: 500 a 2.000 mm/s",
      "Precisão Óptica: ± 0,05 mm"
    ],
    "advantages": [
      "✔ Produtividade massiva para pedidos industriais de uniformes e jaquetas universitárias",
      "✔ Acabamento com bordas perfeitamente seladas e sem fiapos soltos",
      "✔ Possibilidade de criar efeitos visuais 3D multicamadas de altíssimo valor de mercado"
    ],
    "commonErrors": [
      "❌ Calibrar potência em excesso, queimando e amarelando as bordas do tecido branco",
      "❌ Trabalhar com os espelhos ópticos sujos, reduzindo a força do feixe de corte",
      "❌ Falha de sincronismo de coordenadas entre o software de bordado e o software do laser"
    ],
    "voceSabia": "A tecnologia de ponte laser para bordado foi desenvolvida na Itália nos anos 1990 para atender às grandes fábricas de jaquetas de beisebol e futebol americano dos Estados Unidos, que precisavam recortar milhares de letras de feltro por hora!",
    "curiosidadeTecnica": "O corte a laser em tecidos sintéticos como poliéster e nylon funde as pontas das fibras a mais de 250°C em milissegundos, criando uma micro-solda térmica invisível que impede que a borda do aplique se desfie mesmo após 100 lavagens industriais.",
    "dicaArtrelados": "Mesmo em ateliês menores que não possuem ponte laser, você pode usar uma máquina de corte a laser de bancada para pré-cortar todos os seus apliques de feltro ou sarja com gabarito milimétrico antes de levar ao bastidor: você economiza horas de tesourinha e o bordado fica perfeito!",
    "comparisonTable": {
      "headers": ["Processo de Recorte de Aplique", "Tempo por Peça", "Acabamento da Borda", "Custo de Equipamento"],
      "rows": [
        ["Ponte Laser Integrada", "2 a 5 segundos", "Selada a laser / Sem fiapos", "Alto / Industrial"],
        ["Pré-corte a Laser de Mesa", "15 segundos", "Selada e precisa", "Médio / Acessível"],
        ["Recorte Manual com Tesoura", "2 a 4 minutos", "Sujeito a desvios manuais", "Mínimo (Tesoura)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Sincronizado com 850 - 1.000 PPM no bordado",
      "needleType": "80/12 SES para fixação de apliques",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "115 gf (superior) e 24 gf (bobina)",
      "density": "Ponto de cordão estreito de 1,5 a 2,0 mm de largura"
    },
    "applications": [
      "Uniformes de futebol, basquete, beisebol e jaquetas universitárias (Letterman Jackets)",
      "Bonés com apliques de couro gravados a laser e costurados",
      "Moda feminina com recortes vazados e sobreposições de tecidos",
      "Emblemas termocolantes industriais e insígnias militares"
    ],
    "troubleshootingTips": [
      "Se a borda do tecido ficar com manchas amarelas de fumaça, aumente a vazão de ar do bico soprador auxiliar",
      "Limpe as lentes de foco e os espelhos galvanométricos semanalmente com álcool isopropílico e lenço óptico",
      "Faça um teste de potência em um retalho antes de iniciar a produção de cada lote de tecido novo"
    ],
    "relatedTerms": [
      "Automação & Tecnologia",
      "Aplique no Bastidor",
      "Bordado Richelieu",
      "Mecânica & Manutenção",
      "Software de Digitalização"
    ],
    "tags": [
      "l-081",
      "corte a laser",
      "laser bridge",
      "apliques",
      "automacao",
      "tecnologia industrial",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ROSSI, Marco. Laser Cutting Systems in Industrial Textile and Embroidery. Milan, 2021.",
      "PARRISH, Gail. Automated Laser-Appliqué and Multi-Layer Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie um aplique de letra universitária de 10 cm. Se tiver acesso a laser, pré-corte a sarja a laser; caso contrário, use um gabarito impresso com tesoura afiada. Posicione no bastidor sobre a linha guia da máquina e borde o acabamento de ponto cheio estreito. Compare a perfeição da borda!",
    "quickSummary": "Sistema óptico automatizado que corta tecidos e apliques no bastidor com feixe de laser ultrarrápido.",
    "beginnerExplanation": "O corte a laser no bordado é como ter uma tesoura mágica invisível feita de luz. O laser recorta o tecido do aplique em 2 segundos sem queimar e sem deixar nenhum fiapo solto, deixando a máquina bordar tudo rapidinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-082-layout-de-matriz-e-composicao-espacial-no-software",
    "code": "L-082",
    "term": "Layout de Matriz & Composição Espacial no Software (Embroidery Design Layout & Spatial Composition)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês layout (disposição / arranjo gráfico) e do latim compositio (união harmoniosa de elementos).",
    "summary": "Planejamento gráfico e estrutural dos elementos de uma matriz, respeitando proporções visuais, centros de gravidade, eixos de simetria e áreas limites do bastidor.",
    "definition": "Layout de Matriz & Composição Espacial (Embroidery Layout & Graphic Hierarchy) é a disciplina de digitalização que estuda a organização estética e técnica dos elementos visuais (textos, arabescos, brasões, figuras e fundos) dentro da área útil do bastidor. Envolve o cálculo de equilíbrio de massas, fluxo de leitura visual, hierarquia de espessuras de pontos, espaçamento entre letras (*kerning* ótico) e orientação dos ângulos de preenchimento para criar harmonia plástica e evitar deformações no tecido.",
    "technicalDetails": "Margem de segurança perimetral mínima de 10 mm em relação ao aro interno do bastidor. Razão áurea (1:1,618) e regra dos terços aplicadas ao posicionamento dos pontos focais. Resolução de tela de 1:1 para inspeção de proporção.",
    "construction": [
      "Software de digitalização profissional (Wilcom, Embird, Bernina, Pe-Design)",
      "Gabarito digital do bastidor calibrado em escala 1:1 na tela",
      "Linhas guia de grade milimétrica e eixos X e Y de centro exato",
      "Paleta de cores calibrada com linhas de catálogo real (Pantone / Madeira / Isacord)",
      "Visualizador de densidade e simulador de costura tridimensional (TrueView / 3D Stitch)"
    ],
    "howItWorks": [
      "1. Define-se o tamanho exato do bastidor e a área útil máxima com margem de segurança de 10 mm.",
      "2. Importa-se o desenho ou logotipo e posiciona-se o elemento focal principal no centro de interesse visual.",
      "3. Os textos são distribuídos com espaçamento proporcional e alinhamento equilibrado.",
      "4. Arabescos e elementos decorativos secundários são balanceados simetricamente ao redor do centro.",
      "5. Os ângulos de ponto são orientados para criar contraste de luz entre as diferentes partes da matriz.",
      "6. A ordem de costura é programada do centro para as bordas e do fundo para o primeiro plano.",
      "7. A simulação 3D é inspecionada para verificar o equilíbrio visual e a clareza da mensagem."
    ],
    "mainTypes": [
      "Layout Centralizado Simétrico (Brasões, medalhões de toalhas e monogramas clássicos)",
      "Layout Dinâmico Assimétrico (Logotipos esportivos, grafismos modernos e florais orgânicos)",
      "Layout de Barrado Contínuo (Padrões repetitivos e frisos lineares para lençóis e caminhos de mesa)"
    ],
    "characteristics": [
      "Harmonia visual imediata que agrada aos olhos do cliente",
      "Leitura clara e nítida de nomes, marcas e telefones mesmo a distância",
      "Estabilidade mecânica no tecido graças à distribuição equilibrada das densidades",
      "Aspecto profissional que diferencia o ateliê de matrizes amadoras e desordenadas"
    ],
    "limitations": [
      "Nunca encostar elementos bordados a menos de 8 mm da borda do bastidor para evitar colisão do calcador",
      "Evitar excesso de elementos visuais comprimidos em áreas pequenas (< 5 cm)",
      "Textos com menos de 4,5 mm de altura perdem legibilidade no bordado físico"
    ],
    "numberingSystem": [
      "Margem de Segurança do Bastidor: Mínimo 10 mm",
      "Altura Mínima de Texto Padrão: 5,0 mm",
      "Espaçamento Ótico entre Letras: 15% a 25% da largura da letra"
    ],
    "advantages": [
      "✔ Matrizes muito mais bonitas, equilibradas e fáceis de bordar",
      "✔ Menor risco de deformações do tecido por repuxamento assimétrico",
      "✔ Valorização estética que permite cobrar preços mais altos por projetos exclusivos"
    ],
    "commonErrors": [
      "❌ Colocar texto muito colado nos desenhos sem espaço de respiro visual",
      "❌ Desenhar elementos fora do centro do bastidor, gerando torque e repuxamento unilateral",
      "❌ Usar muitas fontes com estilos diferentes na mesma matriz, criando poluição visual"
    ],
    "voceSabia": "A regra de composição clássica dos monogramas de casamento manda que a inicial do casal ou da noiva fique no centro com tamanho 30% maior que as outras iniciais, simbolizando o ponto de união e equilíbrio da família!",
    "curiosidadeTecnica": "O cérebro humano percebe o centro visual de um retângulo cerca de 3% a 5% acima do seu centro geométrico matemático; por isso, posicionar o coração de uma matriz ligeiramente acima do centro perfeito cria uma sensação de leveza e elegância muito superior.",
    "dicaArtrelados": "Ao montar o layout de uma toalha ou camisa no software, ative a ferramenta de visualização do bastidor em tamanho real (100% Zoom): afaste-se 1 metro da tela do computador e aperte os olhos. Se o desenho continuar bonito e legível, seu layout está perfeito!",
    "comparisonTable": {
      "headers": ["Aspecto de Layout", "Matriz Profissional Equilibrada", "Matriz Amadora Desordenada"],
      "rows": [
        ["Margens do Bastidor", "Respiro seguro de 10 a 15 mm", "Elementos colados nas bordas do aro"],
        ["Hierarquia de Textos", "Nome principal destacado e dados secundários menores", "Tudo do mesmo tamanho sem destaque"],
        ["Ordem de Costura", "Do centro para fora / Lógica estruturada", "Pula de um lado para o outro aleatoriamente"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES de uso geral",
      "stabilizer": "Compatível com a peça final",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com variações de ângulo entre camadas"
    },
    "applications": [
      "Digitalização de logotipos corporativos, uniformes de empresas e crachás bordados",
      "Brasões de formatura, monogramas de noiva e toalhas de lavabo personalizadas",
      "Bordados temáticos infantis com animais, nomes e arabescos harmônicos",
      "Quadros decorativos em bastidores de madeira para decoração de interiores"
    ],
    "troubleshootingTips": [
      "Se o texto parecer apertado, aumente o valor de 'Kerning' ou espaçamento entre caracteres no software",
      "Utilize linhas guia diagonais no software para verificar se os pesos dos desenhos estão simétricos",
      "Agrupe elementos relacionados para poder redimensioná-los mantendo as proporções originais"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ordem de Costura (Stitch Sequencing)",
      "Ângulo de Ponto (Stitch Angle)",
      "Monogramas & Letreiros",
      "Compensação de Repuxo"
    ],
    "tags": [
      "l-082",
      "layout",
      "composicao espacial",
      "design de matriz",
      "software de digitalizacao",
      "hierarquia visual",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LIDWELL, William. Universal Principles of Design and Visual Hierarchy. Beverly, 2021.",
      "PARRISH, Gail. Graphic Composition and Spatial Layout in Embroidery Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu software de matrizes. Crie um brasão com uma letra central grande e dois ramos de louro laterais. Alinhe os eixos no centro X e Y. Ajuste o texto do nome embaixo com 15% de espaçamento entre letras. Veja como a simetria transforma o bordado em uma obra de arte!",
    "quickSummary": "Organização harmônica de textos, figuras e arabescos no software para criar matrizes equilibradas e elegantes.",
    "beginnerExplanation": "O layout é o jeito que a gente arruma o desenho e as letrinhas na tela do computador antes de bordar: colocando cada coisa no seu devido lugar, com espaço para respirar, para o bordado ficar lindo e fácil de ler!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "l-083-loop-stitch-ponto-de-lacada-e-textura-felpuda-3d",
    "code": "L-083",
    "term": "Loop Stitch: Ponto de Laçada e Textura Felpuda 3D (Loop Stitch & Terry Cloth Textured Embroidery)",
    "letter": "L",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do inglês loop (alça / laçada / anel de linha) e stitch (ponto de costura).",
    "summary": "Ponto decorativo programado com laçadas de linha soltas no topo ou no avesso para criar texturas tridimensionais de toalha felpuda, miolos de flores e efeito pelúcia.",
    "definition": "Loop Stitch (Ponto de Laçada e Textura Felpuda Tridimensional) é a técnica de bordado computadorizado na qual a máquina é programada com sequências especiais de pontos que deixam alças ou laçadas contínuas de linha salientes na superfície, imitando o tecido atoalhado (*terry cloth*) ou o ponto russo tradicional (*punch needle*). Pode ser executado através de programação de ponto de franja no software com tensão aliviada ou por calcadores e guias especiais de laçada, criando relevos táteis fofinhos e expressivos.",
    "technicalDetails": "Comprimento das laçadas regulável de 2,0 mm a 6,0 mm. Densidade linear de 0,8 mm a 1,2 mm entre fileiras de laçadas. Utilização de linhas macias de algodão 30wt ou poliéster semibrilho com tensão superior aliviada.",
    "construction": [
      "Base de tecido firme (sarja, linho, moletom ou lona de algodão)",
      "Entretela de recorte resistente (Heavy Cutaway 80 g/m²)",
      "Linhas macias de algodão fosco ou lã acrílica para efeito volumoso",
      "Matriz com programação de pontos de laçada ancorados por micro-travas",
      "Película hidrossolúvel de topo para manter as laçadas com altura homogênea"
    ],
    "howItWorks": [
      "1. O tecido é fixado no bastidor com entretela de recorte no verso e filme solúvel no topo.",
      "2. A matriz gera uma linha base de travamento com ponto corrido duplo.",
      "3. A máquina avança e recua rapidamente, deixando uma laçada de linha projetada para cima.",
      "4. Um micro-ponto de ancoragem de 0,5 mm trava o pé da laçada no tecido para que ela não se desfaça.",
      "5. O processo se repete linha por linha, preenchendo a área com centenas de laçadas densas.",
      "6. A película solúvel é removida com água morna ou vapor.",
      "7. A área bordada ganha uma textura felpuda e aveludada com toque fofo irresistível."
    ],
    "mainTypes": [
      "Loop Stitch Atoalhado (Imita textura de toalhas de banho felpudas para bichinhos infantis)",
      "Loop Stitch Floral (Para miolos de girassóis, margaridas e texturas de musgo vegetal)",
      "Loop Stitch em Alto Relevo 3D (Laçadas longas de 5 mm para crinas de cavalos e pelos de animais)"
    ],
    "characteristics": [
      "Sensação tátil tridimensional única que convida ao toque das mãos",
      "Visual lúdico e muito atraente em peças infantis, almofadas e moda jovem",
      "Economia de pontos em relação ao ponto cheio maciço para cobrir grandes áreas",
      "Excelente combinação com pontos tatami e pontos de contorno acetinados"
    ],
    "limitations": [
      "Evitar em peças de bebê muito pequenas que possam prender nos dedinhos ou botões",
      "Exige pontos de arremate muito bem travados para que as laçadas não sejam puxadas",
      "A lavagem das peças deve ser em saquinho protetor para roupas delicadas"
    ],
    "numberingSystem": [
      "Altura das Laçadas: 2,0 mm a 5,0 mm",
      "Espaçamento entre Fileiras: 1,0 mm a 1,5 mm",
      "Densidade da Trava de Base: 0,35 mm"
    ],
    "advantages": [
      "✔ Criação de peças com diferencial tátil e estético exclusivo no mercado",
      "✔ Agrega muito valor a almofadas, jaquetas jeans e produtos de decoração",
      "✔ Rápido de bordar em comparação com relevos tradicionais de espuma EVA"
    ],
    "commonErrors": [
      "❌ Não programar nós de arremate reforçados, fazendo as laçadas se desfazerem ao puxar um fio",
      "❌ Usar linha sintética muito lisa e escorregadia que perde o formato da laçada",
      "❌ Passar ferro quente diretamente sobre as laçadas, amassando o relevo 3D para sempre"
    ],
    "voceSabia": "A textura de laçada é a mesma utilizada há séculos no famoso 'Ponto Russo' manual; com o avanço dos softwares de bordado computadorizado, agora as máquinas domésticas e industriais conseguem reproduzir essa técnica em segundos com precisão matemática!",
    "curiosidadeTecnica": "Para criar laçadas perfeitamente uniformes na máquina de bordar comum sem calcadores especiais, os digitalizadores programam um ponto largo com retorno imediato sobre o mesmo orifício e ajustam a tensão da bobina ligeiramente mais firme, forçando a linha de cima a formar a alça na face superior.",
    "dicaArtrelados": "Ao finalizar um bordado com pontos de laçada, passe suavemente uma escovinha de dente macia ou um pente de bebê sobre as laçadinhas: elas se abrem e se ajeitam, deixando o relevo incrivelmente fofo e homogêneo!",
    "comparisonTable": {
      "headers": ["Técnica de Relevo", "Método de Criação", "Toque Têxtil", "Durabilidade na Lavagem"],
      "rows": [
        ["Loop Stitch (Laçada)", "Pontos com alças de linha programadas", "Felpudo e macio (toalha)", "Alta (se bem travado)"],
        ["Bordado 3D com EVA", "Espuma emborrachada sob os pontos", "Firme e escultural", "Média (sensível a calor)"],
        ["Chenille Tradicional", "Fios grossos de lã em laçada contínua", "Aveludado denso", "Alta"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "80/12 Topstitch ou 75/11 SES",
      "stabilizer": "Entretela de Recorte Média 60 g/m² + Película Hidrossolúvel",
      "threadTension": "95 a 105 gf (superior suave) e 24 gf (bobina firme)",
      "density": "Fileiras espaçadas a cada 1,2 mm com 3 micro-travas na base"
    },
    "applications": [
      "Miolos de flores, ovelhinhas, ursinhos e animais de pelúcia em enxovais",
      "Almofadas decorativas com texturas rústicas de estilo escandinavo ou boho",
      "Casacos infantis, moletons e detalhes de golas e punhos",
      "Flâmulas de parede e quadrinhos bordados em bastidores de madeira"
    ],
    "troubleshootingTips": [
      "Se as laçadas ficarem soltas demais e desiguais, aumente a tensão da linha superior em 10 gf",
      "Utilize linhas foscas de algodão número 30 para um efeito felpudo mais encorpado",
      "Nunca passe o ferro quente direto sobre o bordado; use vapor a distância"
    ],
    "relatedTerms": [
      "Pontos Básicos & Decorativos",
      "Ponto Franja (Fringe Stitch)",
      "Bordado 3D com Espuma EVA",
      "Chenille Stitch",
      "Entretela de Recorte"
    ],
    "tags": [
      "l-083",
      "loop stitch",
      "ponto de lacada",
      "efeito atoalhado",
      "textura 3d",
      "pontos decorativos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GIBSON, Pamela. Dimensional Loop and Texture Machine Stitching. London, 2021.",
      "PARRISH, Gail. Specialty Loop and Fringe Digitizing Techniques. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido firme. Digitalize um círculo de 3 cm com preenchimento em ponto de laçada espaçado a cada 1,2 mm com micro-arremate duplo. Borde com linha de algodão e plástico solúvel por cima. Retire o plástico e escove com uma escovinha macia: veja que miolo de flor fofinho!",
    "quickSummary": "Ponto com laçadas soltas de linha para criar texturas fofas atoalhadas e efeitos 3D em animais e flores.",
    "beginnerExplanation": "O Ponto de Laçada faz pequenas alcinhas de linha que parecem os pelinhos de uma toalha de banho ou o corpinho de uma ovelhinha de pelúcia. Fica super fofinho e todo mundo adora passar a mão!",
    "updatedAt": "2026-08-29"
  }
]

output_path = "src/data/verbetesLetterL13.ts"
header = """import { Verbete } from "../types";

export const VERBETES_LETTER_L_PART13: Verbete[] = """

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header + json.dumps(verbetes_l13, ensure_ascii=False, indent=2) + ";\n")

print(f"Part 13 (L-076 to L-083) generated.")

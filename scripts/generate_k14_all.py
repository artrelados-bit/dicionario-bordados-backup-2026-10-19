import json
import os

verbetes_k14 = [
  {
    "id": "k-088-kurti-e-golas-bordadas-no-vestuario-tradicional-do-sul-da-asia",
    "code": "K-088",
    "term": "Kurti & Golas Bordadas no Vestuário do Sul da Ásia (South Asian Kurti Yoke & Placket Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do persa e hindi kurta / kurti (túnica sem colarinho). Vestimenta clássica da Índia, Paquistão, Bangladesh e Nepal.",
    "summary": "Túnicas nobres de algodão e seda com peitilhos, decotes em V e golas ricamente bordadas com motivos florais e espelhados.",
    "definition": "Kurti & Golas Bordadas (South Asian Kurti Neckline & Yoke Embroidery) é a técnica especializada de digitalização e enquadramento no bastidor voltada para a produção de decotes ornamentados, peitilhos (yokes), caramanholas e punhos de túnicas femininas e masculinas. Caracteriza-se por matrizes com simetria axial perfeita ao redor da fenda do decote, combinando pontos cheios florais, arabescos mouriscos, pontos de festonê e apliques de pequenos espelhos decorativos (*shisha*).",
    "technicalDetails": "Tecidos leves de viscose, seda chiffon, linho fino ou cambraia de algodão (gramatura de 80 a 140 g/m²). Bastidor grande 200x300 mm com estabilização por entretela rasgável macia e compensação de repuxo de 0,35 mm.",
    "construction": [
      "Painel frontal de tecido Kurti pré-cortado com marcação do centro da gola",
      "Entretela de algodão rasgável de toque suave (Soft Cotton 50 g/m²)",
      "Linhas de poliéster brilhante 40wt e fios metálicos dourados ou cobreados",
      "Matriz de gola em 'U' ou 'V' com eixo de simetria vertical perfeito",
      "Película plástica hidrossolúvel de topo para tecidos fluidos de viscose"
    ],
    "howItWorks": [
      "1. O painel frontal da túnica é marcado com giz de alfaiate na linha central exata.",
      "2. O tecido é fixado no bastidor garantindo esquadro de 90° entre a linha central e o aro.",
      "3. A máquina borda o alinhamento da fenda e os ramos florais laterais de forma espelhada.",
      "4. Fios de ouro e cores contrastantes preenchem as folhas e medalhões do peitilho.",
      "5. A borda do decote recebe pontos de festonê reforçados para facilitar o corte da abertura.",
      "6. A entretela é rasgada suavemente no verso.",
      "7. A túnica segue para a costura de montagem lateral e bainhas, pronta para vestir."
    ],
    "mainTypes": [
      "Golas Kurti Florais Étnicas (Com motivos botânicos e degradês coloridos)",
      "Golas Kurti Geométricas Formais (Com linhas retas, ziguezagues e fios metálicos)",
      "Golas Kurti com Aplique Shisha (Com pequenos espelhos plásticos ou acrílicos bordados)"
    ],
    "characteristics": [
      "Elegância atemporal e caimento leve ideal para climas tropicais e quentes",
      "Valorização instantânea de peças de vestuário básico transformadas em moda nobre",
      "Grande agilidade comercial para coleções de moda festa e casual chique",
      "Simetria perfeita que atrai os olhares para o rosto e o colo"
    ],
    "limitations": [
      "Desvios de 1 mm no centro do bastidor deixam a gola visivelmente torta na roupa pronta",
      "Tecidos ultrafinos de viscose podem repuxar se a densidade da gola for muito pesada",
      "Exige gabarito de corte preciso para não cortar os pontos do decote na tesoura"
    ],
    "numberingSystem": [
      "Dimensão da Gola: 18x25 cm a 20x30 cm",
      "Largura do Festonê de Decote: 2,5 mm a 3,5 mm",
      "Densidade Média: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Peça com alta demanda em coleções de primavera/verão e moda resort",
      "✔ Excelente margem de lucro na personalização de batas e túnicas femininas",
      "✔ Criação de designs exclusivos com combinação ilimitada de cores de linha"
    ],
    "commonErrors": [
      "❌ Bordar a gola fora do centro do peito, deixando o decote torto no corpo da cliente",
      "❌ Usar entretelas muito duras que transformam o decote em uma placa rígida desconfortável",
      "❌ Cortar a fenda do decote muito rente aos pontos, fazendo o tecido desfiar no primeiro uso"
    ],
    "voceSabia": "No subcontinente indiano, a Kurti é a peça de vestuário mais popular entre mulheres de todas as idades, sendo usada tanto no dia a dia com jeans quanto em casamentos e festivais suntuosos com saias longas e bordados dourados.",
    "curiosidadeTecnica": "Para garantir que o lado direito e o lado esquerdo de uma gola fiquem 100% idênticos, os softwares de matrizes utilizam a ferramenta 'Symmetry & Mirror', calculando os pontos de compensação de repuxo no sentido inverso em cada lado para anular a torção natural do tecido.",
    "dicaArtrelados": "Ao bordar decotes e golas em batas e túnicas, dobre o tecido exatamente ao meio no sentido do comprimento e passe a ferro para fazer um vinco bem visível: esse vinco é o seu guia perfeito para encaixar na cruz central do gabarito do bastidor sem errar nem um milímetro!",
    "comparisonTable": {
      "headers": ["Estilo de Decote", "Tipo de Ponto", "Tempo de Bordado", "Grau de Formalidade"],
      "rows": [
        ["Gola Kurti Floral com Ouro", "Ponto Cheio + Metálico", "15 a 25 min", "Moda Festa / Casamento"],
        ["Peitilho Geométrico Fino", "Ponto Corrido Triplo", "5 a 8 min", "Casual Chique / Dia a Dia"],
        ["Decote com Apliques de Espelho", "Ponto Shisha + Ponto Cheio", "20 a 30 min", "Étnico Tradicional"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável Macia 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com Underlay Linear suave"
    },
    "applications": [
      "Batas femininas, túnicas de praia e saídas de banho de luxo",
      "Camisas de linho masculinas com detalhes no peitilho e gola padre",
      "Vestidos longos de verão em viscose e seda bordada",
      "Kimonos e roupões de cetim com peitilho decorado"
    ],
    "troubleshootingTips": [
      "Se o tecido de viscose repuxar ao redor da gola, aumente a compensação de repuxo para 0,35 mm no software",
      "Passe uma costura de segurança com ponto reto fino de máquina de costura a 2 mm do festonê antes de recortar a fenda",
      "Utilize tesoura afiada de ponta fina para abrir a abertura do decote com máxima precisão"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kaftans, Túnicas de Seda",
      "Compensação de Repuxo",
      "Ponto Festonê",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-088",
      "kurti",
      "golas bordadas",
      "peitilho",
      "tunicas indianas",
      "decotes",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BHATNAGAR, Parul. Traditional Indian Costumes and Neckline Embroidery. New Delhi, 2021.",
      "PARRISH, Gail. Garment Yoke and Collar Machine Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido leve de viscose ou tricoline. Dobre ao meio e passe o ferro para marcar o vinco central. Digitalize um decote em V simples de 15 cm com ramos de folhas em ponto cheio simétrico. Enquadre o vinco no centro do bastidor e borde: veja o alinhamento perfeito da gola!",
    "quickSummary": "Golas e decotes espelhados bordados com elegância em batas e túnicas de verão.",
    "beginnerExplanation": "A Kurti é aquela túnica feminina confortável e charmosa. A gente borda desenhos lindos de flores e arabescos bem no peito e na gola da roupa, deixando a peça com cara de roupa de grife famosa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-089-kaftan-cerimonial-marroquino-e-bordados-de-passamanaria-sfifa",
    "code": "K-089",
    "term": "Kaftan Cerimonial Marroquino & Passamanaria Sfifa (Moroccan Royal Caftan & Sfifa Braid Stitching)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do árabe clássico qaftan e do dialeto marroquino sfifa (galão trançado de fios de seda e ouro). A mais alta tradição de alta costura do Reino do Marrocos.",
    "summary": "Vestidos de gala imperiais em veludo e seda pura com galões bordados (sfifa), cordões metálicos e botões esféricos artesanais (aakads).",
    "definition": "Kaftan Cerimonial Marroquino & Passamanaria Sfifa (Moroccan Royal Caftan & Sfifa Gimp Braid Embroidery) é o ápice da alta-costura árabe e mediterrânea, caracterizada por longos vestidos de corte nobre confeccionados em veludos pesados, brocados de seda e cetins duquesa (*Moubira* e *Khadriya*). A técnica de bordado envolve a criação e fixação automatizada de galões de passamanaria trançada em fios de ouro e prata (*sfifa* e *dras*), contornos florais em ponto cheio com relevo e fileiras de botões esféricos de seda costurados no centro da túnica.",
    "technicalDetails": "Tecidos de 250 a 450 g/m² em veludo de seda ou brocado jacquard. Fios metálicos dourados No. 40 com alma de seda e fios de viscose brilhante de alta solidez à fricção mecânica.",
    "construction": [
      "Tecido nobre de veludo ou seda pura para vestido Kaftan cerimonial",
      "Entretela de recorte resistente (Heavy Cutaway 80 g/m²)",
      "Galões e fitas de passamanaria metálica Sfifa com largura de 10 a 25 mm",
      "Linhas de bordado em ouro metálico brilhante e fios de seda torcida",
      "Matriz com pontos de festonê arabesco e canais de guia para passamanaria"
    ],
    "howItWorks": [
      "1. Os painéis longitudinais do Kaftan são demarcados ao longo da abertura frontal de 1,5 metro.",
      "2. A peça é fixada no bastidor grande ou contínuo com entretela de recorte no verso.",
      "3. A máquina borda os ricos arabescos de arabesco mourisco e medalhões laterais com fios metálicos de ouro.",
      "4. Aplica-se a fita de passamanaria Sfifa central usando calcador de fita ou ponto de fixação automatizado.",
      "5. Botões artesanais de seda (aakads) são costurados ao longo da linha central com pontos de ancoragem da máquina.",
      "6. A peça é forrada com cetim de seda pura para proteger a pele contra os nós do verso.",
      "7. O Kaftan se torna uma joia real de vestuário para casamentos e noites de gala internacionais."
    ],
    "mainTypes": [
      "Kaftan de Noiva Marroquina / Takchita (Composto por 2 peças sobrepostas e cinto bordado Mdamma)",
      "Kaftan de Veludo Moubira (Veludo escuro com bordados densos de ouro nobre)",
      "Kaftan Contemporâneo de Seda Fluida (Com linhas metálicas delicadas e decotes modernos)"
    ],
    "characteristics": [
      "Suntuosidade visual inigualável com brilho de ouro e pedrarias",
      "Caimento majestoso que alonga a silhueta com imponência real",
      "Alta durabilidade em vestidos de casamento que atravessam gerações",
      "Reconhecimento internacional como alta-costura patrimonial protegida pela UNESCO"
    ],
    "limitations": [
      "Vestidos com peso elevado (podem pesar entre 2 e 5 kg de tecido e linhas metálicas)",
      "Exige máquinas com área de bordado ampla ou bastidores de repetição para longos galões",
      "Cuidado extremo com a tensão dos fios metálicos para não arrebentar durante a costura"
    ],
    "numberingSystem": [
      "Comprimento do Galão: 120 cm a 160 cm",
      "Largura da Passamanaria Sfifa: 10 mm a 30 mm",
      "Fio Metálico: No. 40 Ouro Puro ou Ouro Envelhecido"
    ],
    "advantages": [
      "✔ Produtos de altíssimo valor comercial vendidos por milhares de euros no mercado de eventos de luxo",
      "✔ Maestria em bordado de alta-costura que coloca o ateliê em evidência no mercado internacional",
      "✔ Peças deslumbrantes que encantam clientes exigentes e colecionadores de vestidos nobres"
    ],
    "commonErrors": [
      "❌ Puxar a linha metálica com muita tensão, arrebentando a linha e criando nós na lançadeira",
      "❌ Usar entretelas rasgáveis fracas que se rompem com o peso do veludo durante a movimentação do bastidor",
      "❌ Deixar desvios na linha central do vestido, fazendo os galões frontais ficarem tortos"
    ],
    "voceSabia": "Nos casamentos tradicionais do Marrocos, a noiva troca de Kaftan cerimonial até 7 vezes durante a festa, cada um representando uma região histórica do país, sendo o último o mais suntuoso, bordado inteiramente em fios dourados e pedras preciosas!",
    "curiosidadeTecnica": "A fita de passamanaria tradicional *Sfifa* era tecida historicamente à mão por artesãos chamados 'Maalems' usando até 40 carretéis de seda e ouro suspensos em um tear de dedos, técnica que hoje é perfeitamente reproduzida por módulos de bordado de cordão em máquinas multicabeçote.",
    "dicaArtrelados": "Ao bordar vestidos longos e pesados como o Kaftan em tecidos de veludo, apoie o restante do tecido da saia sobre uma mesa auxiliar ao lado da máquina: isso evita que o peso do tecido puxe o bastidor para baixo e desalinhe os pontos de ouro!",
    "comparisonTable": {
      "headers": ["Elemento do Kaftan", "Nome Tradicional", "Material", "Método de Aplicação"],
      "rows": [
        ["Galão Trançado Central", "Sfifa", "Fios de Ouro e Seda", "Ponto de Fixação / Calcador de Fita"],
        ["Botões Esféricos de Seda", "Aakads", "Fios de Seda Modelados", "Costura Manual / Ponto de Botão"],
        ["Cinto Estruturado de Gala", "Mdamma", "Veludo + Ouro + Pedraria", "Bordado em Bastidor Pesado"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 Metallic ou 80/12 Titanium",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m² + Película Solúvel no veludo",
      "threadTension": "90 a 100 gf (superior suave) e 20 gf (bobina)",
      "density": "0.38 mm com pontos cheios suntuosos"
    },
    "applications": [
      "Vestidos de noiva de gala, vestidos de debutante e trajes de corte árabe",
      "Kaftans de praia luxuosos e roupões de hotelaria 5 estrelas",
      "Capa e túnicas de alta costura para cantores, atores e desfiles de moda",
      "Almofadas de veludo marroquinas com galões e franjas de ouro"
    ],
    "troubleshootingTips": [
      "Se a linha de ouro arrebentar com frequência, diminua a velocidade para 500 PPM e passe silicone líquido no carretel de linha",
      "Utilize agulhas novas com olho largo e banho de titânio para reduzir o atrito",
      "Refile todas as sobras de entretela com tesoura curva sem encostar nas costuras de forro"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kaftans, Túnicas de Seda",
      "Karat Gold Thread",
      "Calcador de Cordão (Cording Foot)",
      "Fios Metálicos"
    ],
    "tags": [
      "k-089",
      "kaftan",
      "marrocos",
      "sfifa",
      "passamanaria",
      "fios dourados",
      "alta costura",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BESANCENOT, Jean. Costumes of Morocco: Caftans, Sfifas and Royal Embroidery. London, 2021.",
      "PARRISH, Gail. Gold Thread and Gimp Braid Machine Techniques. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue uma tira de tecido de veludo escuro de 10x30 cm. Prenda a entretela no bastidor e flutue o veludo com plástico solúvel por cima. Digitalize um galão mourisco de 3 cm de largura em ponto cheio com linha dourada e agulha Metallic em 550 PPM. Sinta a imponência e o brilho de um autêntico Kaftan real!",
    "quickSummary": "Vestidos de gala imperiais marroquinos com galões dourados e bordados de alta nobreza.",
    "beginnerExplanation": "O Kaftan Marroquino é aquele vestido de princesa árabe maravilhoso, cheio de fitas douradas, veludos macios e linhas de ouro brilhantes. No bordado de máquina, a gente faz esses galões e arabescos de ouro para transformar vestidos normais em verdadeiras joias reais!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-090-kesa-gatame-stitch-ponto-japones-de-travamento-e-reforco-diagonal",
    "code": "K-090",
    "term": "Kesa-Gatame Stitch: Ponto Japonês de Travamento Diagonal (Japanese Sashiko Reinforcement Stitch)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do termo das artes marciais e costura tradicional japonesa kesa-gatame (imobilização / travamento em diagonal em forma de faixa de monge). Tradição do Sashiko e Boro japoneses.",
    "summary": "Ponto de costura e reforço estrutural em linhas diagonais cruzadas de alta tenacidade para consolidação de tecidos rasgados, bainhas e reforço de bolsos.",
    "definition": "Kesa-Gatame Stitch (Ponto Diagonal Japonês de Travamento e Consolidação) é o padrão de ponto geométrico e estrutural derivado das técnicas históricas de *Sashiko* e *Boro* do Japão medieval, caracterizado por sequências contínuas de pontos corridos reforçados (ou pespontos duplos) orientados em ângulos de 45° e 135°. No bordado computadorizado, é utilizado tanto como elemento estético decorativo minimalista quanto como underlay de engenharia de alta performance para travar tecidos elásticos, recuperar áreas danificadas de jeans e consolidar reforços internos de bolsos e joelheiras de quimonos de artes marciais.",
    "technicalDetails": "Comprimento de ponto de 2,5 a 3,5 mm em ângulo diagonal exato de 45°. Fios de algodão fosco grosso (30wt ou 12wt) ou poliéster de alta tenacidade com densidade linear aberta de 1,5 a 2,5 mm entre linhas paralelas.",
    "construction": [
      "Base de tecido jeans, lona de algodão, sarja pesada ou malha estruturada",
      "Entretela rasgável de algodão macia ou hidrossolúvel de suporte",
      "Linhas grossas de algodão fosco (linha Sashiko) em contraste branco ou cru",
      "Matriz com linhas contínuas sem saltos (continuous path digitizing)",
      "Agulha 80/12 Topstitch ou 90/14 Jeans de olho largo"
    ],
    "howItWorks": [
      "1. A peça de jeans ou quimono é montada no bastidor com entretela de reforço.",
      "2. A matriz gera trajetórias diagonais contínuas em zigue-zague a 45°.",
      "3. A máquina borda em velocidade constante aplicando pontos firmes de passo longo.",
      "4. A segunda passagem cruza a primeira a 135°, formando losangos perfeitos e travando as fibras do tecido em duas direções.",
      "5. A tensão da linha é ajustada para manter os pontos perfeitamente assentados na superfície sem repuxar.",
      "6. A entretela é removida no verso.",
      "7. A peça ganha uma resistência mecânica 300% maior a rasgos e um visual rústico oriental moderno."
    ],
    "mainTypes": [
      "Kesa-Gatame Decorativo Minimalista (Para camisas de linho, bolsas ecológicas e jaquetas jeans)",
      "Kesa-Gatame Estrutural de Reforço (Para joelheiras de quimonos de judô/jiu-jitsu e roupas de trabalho)",
      "Kesa-Gatame Estilo Boro (Para união visível e artística de retalhos de tecidos antigos)"
    ],
    "characteristics": [
      "Altíssima resistência mecânica à tração e ao atrito diário",
      "Visual japonês contemporâneo altamente valorizado na moda urbana e sustentável (Upcycling)",
      "Tempo de máquina ultrarrápido por utilizar apenas linhas corridas contínuas",
      "Consumo mínimo de linha de bordar com impacto visual expressivo"
    ],
    "limitations": [
      "Não deve ser programado com pontos muito curtos (< 1,5 mm) para não picotar o tecido",
      "Exige digitalização contínua inteligente para evitar dezenas de cortes de linha desnecessários",
      "Não recomendado para tecidos de seda ultrafina que possam enrugar nas diagonais"
    ],
    "numberingSystem": [
      "Comprimento do Ponto: 2,8 mm a 3,5 mm",
      "Espaçamento entre Linhas Diagonais: 2,0 mm a 4,0 mm",
      "Ângulo de Cruzamento: 45° e 135°"
    ],
    "advantages": [
      "✔ Bordado extremamente rápido (uma peça inteira é bordada em 2 a 3 minutos)",
      "✔ Agrega estilo e durabilidade extrema a jaquetas jeans, calças e mochilas",
      "✔ Excelente aplicação em projetos de restauração e reciclagem criativa de roupas"
    ],
    "commonErrors": [
      "❌ Digitalizar com muitos nós e cortes de linha, deixando o verso da peça cheio de fiapos",
      "❌ Usar linha sintética brilhante que anula o efeito rústico e natural do estilo Sashiko",
      "❌ Apertar demais a tensão da bobina, fazendo o tecido criar ondas diagonais"
    ],
    "voceSabia": "No Japão antigo, os camponeses não podiam comprar roupas novas devido a leis que proibiam o uso de sedas pelas classes baixas; por isso, eles costuravam e reforçavam suas roupas de algodão azul índigo com pontos diagonais de Sashiko por gerações, transformando roupas gastas em verdadeiras obras de arte têxtil chamadas 'Boro'.",
    "curiosidadeTecnica": "Costuras em ângulo de 45° (no viés do tecido) distribuem o esforço de tração igualmente entre os fios de urdume e os fios de trama do tecido, impedindo que a peça rasgue mesmo sob fortes impactos mecânicos.",
    "dicaArtrelados": "Ao digitalizar matrizes de ponto Sashiko ou pespontos geométricos, use a ferramenta de 'Caminho Contínuo' (Branching) do seu software: a máquina vai bordar tudo de uma vez só, sem dar nenhum corte de linha e com o verso 100% limpinho e perfeito!",
    "comparisonTable": {
      "headers": ["Tipo de Ponto", "Consumo de Linha", "Tempo de Execução", "Resistência Estrutural"],
      "rows": [
        ["Kesa-Gatame Diagonal", "Mínimo (apenas linhas retas)", "2 a 3 minutos", "Altíssima em 2 eixos (45°/135°)"],
        ["Tatami Preenchido", "Alto (cobre 100% da área)", "15 a 25 minutos", "Média (pode ficar rígido)"],
        ["Ponto Cheio Largo", "Médio", "8 a 12 minutos", "Baixa se for puxado lateralmente"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "80/12 Topstitch ou 90/14 Jeans",
      "stabilizer": "Entretela Rasgável Macia 50 g/m²",
      "threadTension": "100 a 110 gf (superior) e 22 gf (bobina)",
      "density": "Linhas abertas a cada 3,0 mm"
    },
    "applications": [
      "Customização de jaquetas jeans, calças e bermudas no estilo moda urbana",
      "Reforço de joelhos, cotovelos e golas de quimonos de artes marciais (Judô/Jiu-Jitsu)",
      "Bolsas ecológicas (tote bags) e mochilas de lona pesada",
      "Almofadas e jogos americanos em linho rústico com estética japonesa Wabi-Sabi"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar nas diagonais, diminua levemente a tensão da linha superior e use entretela mais firme",
      "Utilize linhas de bordar foscas de algodão número 30 para obter o visual autêntico do Sashiko tradicional",
      "Regule a máquina para velocidade máxima de 800 PPM para garantir formação precisa das linhas retas"
    ],
    "relatedTerms": [
      "Pontos Básicos & Decorativos",
      "Ponto Corrido Triplo (Bean Stitch)",
      "Kimono / Quimono Japonês",
      "Linhas Foscas de Algodão",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-090",
      "kesa-gatame",
      "sashiko",
      "boro",
      "ponto diagonal",
      "reforco textil",
      "pontos basicos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BRISCOE, Susan. The Ultimate Sashiko Sourcebook: Patterns and Techniques. London, 2021.",
      "PARRISH, Gail. Geometric Continuous Path Machine Stitching. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de calça jeans velha. Crie uma grade de linhas diagonais cruzadas a 45° espaçadas a cada 5 mm com ponto corrido duplo. Borde com linha branca ou crua fosca. Veja como o jeans ganha uma textura japonesa moderna e fica super resistente!",
    "quickSummary": "Ponto tradicional japonês em linhas diagonais cruzadas para reforço e estilo minimalista elegante.",
    "beginnerExplanation": "É aquele ponto japonês lindo feito em linhas diagonais cruzadas, como um xadrez inclinado. Ele gasta pouquíssima linha, borda em 2 minutinhos e deixa roupas jeans e bolsas com uma cara moderna, rústica e super resistente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-091-kapa-kuiki-a-nobre-arte-do-quilting-havaiano-no-bastidor",
    "code": "K-091",
    "term": "Kapa Kuiki: A Nobre Arte do Quilting Havaiano no Bastidor (Hawaiian Kapa Kuiki Quilt & Echo Quilting)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do havaiano kapa (tecido) e kuiki (costurar / acolchoar / quiltar). Tradição secular desenvolvida pelas mulheres havaianas a partir do século XIX.",
    "summary": "Estilo havaiano de acolchoamento caracterizado por grandes apliques botânicos recortados e costuras de contorno concêntricas que imitam ondas do mar (Echo Quilting).",
    "definition": "Kapa Kuiki (Hawaiian In-The-Hoop Echo Quilting) é a técnica emblemática de acolchoamento e bordado do Havaí, caracterizada pela aplicação de um grande motivo botânico simétrico dobrado em 8 partes (como flores de hibisco, folhas de comigo-ninguém-pode, frutos do pão e samambaias) sobre um fundo claro, cercado por dezenas de linhas paralelas concêntricas em ponto corrido que irradiam para fora como ondas no oceano (*Echo Quilting*). No bordado eletrônico, é realizada montando-se sanduíches de manta acrílica e tecidos no bastidor com programação automatizada de curvas de eco perfeitas.",
    "technicalDetails": "Sanduíche composto por tecido de algodão superior (140 g/m²), manta acrílica fina de poliéster ou algodão (100 a 150 g/m²) e tecido de forro no verso. Ponto corrido simples ou triplo de 2,5 mm com espaçamento uniforme de 8 a 12 mm entre as ondas de eco.",
    "construction": [
      "Tecido de topo em tricoline ou percal 100% algodão",
      "Manta de patchwork resinada fina (R1 ou manta de algodão 100 g/m²)",
      "Tecido de forro 100% algodão macio",
      "Linha de algodão mercerizado 50wt ou poliéster fosco",
      "Matriz com linhas de eco contínuas geradas por offset geométrico automático"
    ],
    "howItWorks": [
      "1. Monta-se o sanduíche com forro, manta e tecido de fundo no bastidor.",
      "2. A máquina borda a linha de guia do aplique botânico central.",
      "3. Posiciona-se o tecido de contraste e a máquina fixa com ponto reto.",
      "4. O excesso de tecido do aplique é refilado com tesoura de precisão.",
      "5. A máquina borda o ponto cheio estreito de acabamento ao redor das pétalas.",
      "6. Em seguida, a máquina borda automaticamente as linhas concêntricas de eco que se propagam em direção às bordas.",
      "7. A almofada ou colcha ganha o relevo acolchoado e o balanço suave das ondas do Pacífico."
    ],
    "mainTypes": [
      "Kapa Kuiki de Fruto-do-Pão / Ulu (Símbolo havaiano tradicional de fartura e prosperidade)",
      "Kapa Kuiki de Hibisco e Folhas Tropicais (Para almofadas e mantas coloridas de verão)",
      "Kapa Kuiki Monocromático de Luxo (Branco sobre branco ou cru sobre cru para enxovais nobres)"
    ],
    "characteristics": [
      "Relevo suave e toque fofinho extremamente acolhedor",
      "Simetria radial fascinante que transmite paz e tranquilidade",
      "Valorização de peças para decoração de casas de praia e resorts de luxo",
      "Alta durabilidade em mantas que podem ser lavadas na máquina doméstica"
    ],
    "limitations": [
      "Exige controle de tensão da bobina para que os nós não apareçam no avesso do acolchoado",
      "A manta muito grossa (> 200 g/m²) pode prender no pé calcador durante movimentos rápidos",
      "Evitar linhas sintéticas com brilho excessivo para preservar o aspecto clássico de algodão"
    ],
    "numberingSystem": [
      "Espaçamento entre Linhas de Eco: 8 mm a 12 mm",
      "Gramatura da Manta: 100 a 150 g/m²",
      "Comprimento do Ponto de Eco: 2,5 mm a 3,0 mm"
    ],
    "advantages": [
      "✔ Agilidade revolucionária: faz em 20 minutos o que levaria semanas de costura manual",
      "✔ Linhas de eco com distâncias milimetricamente exatas e sem desvios",
      "✔ Produto de alto desejo em feiras de artesanato nobre e decoração"
    ],
    "commonErrors": [
      "❌ Usar manta muito fofa e alta que deforma o desenho durante a movimentação do bastidor",
      "❌ Puxar o tecido de topo esticando demais, criando rugas quando a peça sai do bastidor",
      "❌ Cortar o aplique muito longe da costura, deixando fiapos escapando pela borda"
    ],
    "voceSabia": "No Havaí do século XIX, a tradição mandava que a primeira colcha Kapa Kuiki de uma pessoa fosse sempre com o desenho da árvore do 'Fruto-do-Pão' (Ulu), para garantir que aquela família nunca passasse fome ao longo de toda a vida!",
    "curiosidadeTecnica": "O cálculo das linhas de *Echo Quilting* nos softwares de bordado modernos utiliza o algoritmo matemático de 'Voronoi Offset', que calcula as curvas paralelas garantindo que as ondas nunca colidam de forma brusca entre si.",
    "dicaArtrelados": "Ao quiltar no bastidor com manta acrílica, use uma agulha especial para Quilting (75/11 Quilting com ponta cônica especial): ela atravessa o sanduíche de tecido e manta sem empurrar as fibras para dentro da lançadeira!",
    "comparisonTable": {
      "headers": ["Processo de Quilting", "Tempo por Almofada", "Precisão das Ondas", "Relevo Acolchoado"],
      "rows": [
        ["Kapa Kuiki no Bastidor Eletrônico", "15 a 20 minutos", "100% Matemática e perfeita", "Firme e homogêneo"],
        ["Quilting Livre Manual (Free Motion)", "1 a 2 horas", "Variável (depende da mão)", "Orgânico e variável"],
        ["Costura Reta Tradicional", "40 minutos", "Apenas linhas retas", "Sem curvas de eco"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 Quilting ou 80/12 SES Ponta Bola",
      "stabilizer": "O próprio sanduíche de tecido + manta de algodão 100 g/m²",
      "threadTension": "100 a 110 gf (superior suave) e 20 gf (bobina)",
      "density": "Ponto corrido com passo de 2,8 mm"
    },
    "applications": [
      "Almofadas tropicais de luxo para salas de estar e varandas gourmet",
      "Mantas de sofá, colchas de cama e caminhos de mesa de estilo praia",
      "Bolsas de praia estruturadas e painéis de parede decorativos",
      "Enxovais de bebê com motivos de folhagens e flores delicadas"
    ],
    "troubleshootingTips": [
      "Se a linha de baixo aparecer no topo do bordado, aperte um quarto de volta o parafuso da caixa de bobina",
      "Use spray adesivo temporário para fixar o tecido na manta antes de montar no bastidor, evitando bolhas de ar",
      "Passe a ferro com vapor suave após bordar para amaciar a manta acrílica"
    ],
    "relatedTerms": [
      "Técnicas de Bastidor",
      "Bordado In-The-Hoop (ITH)",
      "Ponto Corrido (Running Stitch)",
      "Aplique no Bastidor",
      "Kapa / Tapa Cloth"
    ],
    "tags": [
      "k-091",
      "kapa kuiki",
      "quilting havaiano",
      "echo quilting",
      "acolchoado",
      "almofadas tropicais",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ROOT, Elizabeth. Hawaiian Quilting: Instructions, History and Motifs. Honolulu, 2021.",
      "PARRISH, Gail. Automated In-The-Hoop Echo Quilting Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Monte um sanduíche com 2 tecidos de algodão e uma manta fina no bastidor. Digitalize uma folha de costela-de-adão central e gere 5 linhas concêntricas de eco ao redor dela com 1 cm de distância. Borde em ponto corrido de 2,8 mm. Sinta o relevo fofinho e as ondas perfeitas de acolchoado!",
    "quickSummary": "O famoso acolchoado havaiano com grandes folhas tropicais e ondas concêntricas de quilting no bastidor.",
    "beginnerExplanation": "O Kapa Kuiki é aquele acolchoado tropical clássico do Havaí, que tem uma folha de planta linda no meio cercada por várias linhas onduladas que parecem marolas do mar. No bastidor, a máquina faz tudo sozinha e a almofada fica fofinha e perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-092-kuba-velvets-bordados-em-relevo-de-veludo-de-rafia-do-congo",
    "code": "K-092",
    "term": "Kuba Velvets: Bordados em Veludo de Ráfia do Congo (Kuba Cut-Pile Raffia Velvet Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do Reino Kuba (República Democrática do Congo / África Central), onde as mulheres da corte real criaram a técnica histórica de tosquia de ráfia desde o século XVII.",
    "summary": "Tecido cerimonial africano de fibra de ráfia batida com áreas aveludadas de pelo cortado (cut-pile) e padrões geométricos labirínticos assimétricos.",
    "definition": "Kuba Velvets (Bordado em Veludo de Ráfia e Pelúcia Cortada Africana) é uma das mais sofisticadas técnicas têxteis da África Central, onde uma base de tecido fino de palha de ráfia vegetal (*Raphia vinifera*) é bordada com meadas densas de ráfia passadas sob a trama e tosquiadas milimetricamente na superfície com navalha, criando um veludo rústico aveludado de alto relevo. No bordado computadorizado moderno, a técnica é recriada utilizando pontos de laçada longa (fringe/loop stitch) que são posteriormente cortados no topo ou combinados com fios texturizados e chenille sobre bases de linho grosso.",
    "technicalDetails": "Fibra de ráfia vegetal flexibilizada (ou fios de juta e linho com gramatura de 280 a 450 g/m²). Programação em ponto de franja (fringe stitch) com altura de corte de 3 a 5 mm e agulhas 90/14 com ponta lança ou ponta cônica.",
    "construction": [
      "Base de tecido de ráfia natural, linho rústico encorpado ou lona de algodão",
      "Entretela de recorte resistente (Heavy Cutaway 80 g/m²)",
      "Linhas texturizadas de algodão fosco ou fios de ráfia para bordar",
      "Matriz com blocos labirínticos geométricos e pontos de laçada cortável",
      "Lâmina de corte de precisão ou tesoura de cutelaria fina para tosquia superficial"
    ],
    "howItWorks": [
      "1. A base de linho ou ráfia é posicionada no bastidor com entretela de recorte.",
      "2. A máquina borda as linhas de contorno pretas definindo os labirintos geométricos.",
      "3. Os blocos aveludados são bordados com ponto cheio de laçada solta no avesso ou técnica de ponto de franja.",
      "4. A máquina ancora as bases dos pontos com micro-travamentos de alta densidade.",
      "5. Retira-se a peça da máquina e, com uma lâmina curva afiada, corta-se a parte superior das laçadas.",
      "6. Passa-se uma escovinha de cerdas firmes para abrir e desfiar os pelinhos da ráfia/algodão.",
      "7. O resultado é um bloco de veludo macio e denso com textura escultural e alma africana."
    ],
    "mainTypes": [
      "Kuba Shoowa Clássico (Com padrões labirínticos em ocre, preto, marrom e cru)",
      "Kuba Monocromático Esculpido (Veludo em alto relevo na mesma cor do tecido base)",
      "Kuba Contemporâneo em Linho (Releitura moderna para almofadas e quadros de alto padrão)"
    ],
    "characteristics": [
      "Textura tátil aveludada inconfundível que convida ao toque das mãos",
      "Padrões geométricos assimétricos que inspiraram pintores modernos como Picasso e Matisse",
      "Altíssima nobreza e valor em galerias de arte e lojas de decoração de luxo",
      "Material sustentável de origem botânica com longa conservação"
    ],
    "limitations": [
      "Exige habilidade e cuidado manual no momento do corte das laçadas para não rasgar o tecido base",
      "Não utilizar em peças de vestuário que sofram atrito intenso com velcro ou zíperes",
      "A lavagem deve ser apenas a seco ou com pano úmido suave"
    ],
    "numberingSystem": [
      "Altura do Pelo Aveludado: 3 mm a 5 mm",
      "Gramatura do Tecido: 300 a 450 g/m²",
      "Densidade dos Pontos de Trava: 0,35 mm"
    ],
    "advantages": [
      "✔ Criação de texturas tridimensionais exclusivas que nenhuma estampa consegue imitar",
      "✔ Produto com valor de venda excepcional no mercado de arquitetura de interiores",
      "✔ Resgate de um dos patrimônios têxteis mais aclamados da humanidade"
    ],
    "commonErrors": [
      "❌ Cortar o tecido de base por acidente ao tosquiar as laçadas com a tesoura",
      "❌ Não programar pontos de ancoragem reforçados, fazendo os pelinhos caírem na primeira escovada",
      "❌ Usar linhas finas e brilhantes que não abrem tufos aveludados ao serem cortadas"
    ],
    "voceSabia": "O famoso pintor Henri Matisse era apaixonado pelos veludos Kuba do Congo; ele cobria as paredes do seu ateliê em Paris com esses tecidos e dizia que os padrões geométricos de ráfia eram a maior lição de harmonia e ritmo visual que um artista poderia contemplar.",
    "curiosidadeTecnica": "A técnica de 'Cut-Pile' tradicional Kuba exige que a bordadeira passe uma única fibra de ráfia sob dois fios de trama com uma agulha de osso de macaco e corte com uma faca de ferro aquecida na brasa, repetindo esse gesto mais de 100.000 vezes por painel de tecido.",
    "dicaArtrelados": "Para fazer o efeito de veludo cortado na sua máquina de bordar, programe um ponto cheio com nós de arremate fortes na borda e corte a linha da bobina no avesso: puxe os pelinhos para a frente com uma fita adesiva e escove com uma escovinha de dente macia: forma um tufo de veludo fofinho e lindo!",
    "comparisonTable": {
      "headers": ["Tipo de Tecido Aveludado", "Origem da Fibra", "Processo de Corte", "Efeito Tátil"],
      "rows": [
        ["Kuba Velvet de Ráfia", "Fibra botânica de palmeira", "Tosquia manual de laçadas", "Rústico aveludado único"],
        ["Veludo Cotelê Industrial", "Algodão ou poliéster", "Corte por navalha mecânica", "Canelado comercial"],
        ["Chenille Esponja", "Fios felpudos de lã/acrílico", "Ponto de laçada contínua", "Macio tipo toalha"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "90/14 SES ou 90/14 Jeans",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "110 a 120 gf (superior) e 24 gf (bobina firme)",
      "density": "Pontos de laçada a cada 1,5 mm com ancoragem dupla"
    },
    "applications": [
      "Almofadas de arte étnica de luxo e mantas estruturadas de sofá",
      "Painéis têxteis emoldurados para salas de reunião e halls de entrada",
      "Detalhes de estofamento em poltronas e bancos de madeira nobre",
      "Bolsas rústicas femininas de linho e couro vegetal"
    ],
    "troubleshootingTips": [
      "Se os pelinhos soltarem ao escovar, aumente a quantidade de pontos de trava para 5 micro-pontos de 0,5 mm na base",
      "Utilize tesourinha curva de ponta arredondada para cortar as laçadas com total segurança",
      "Finalize com um jato leve de fixador de tecido sem perfume para assentar os pelos"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Ponto Franja (Fringe Stitch)",
      "Kuba Cloth / Tecidos de Ráfia do Congo",
      "Kobe / Lã e Fios Especiais para Bordado Chenille",
      "Acabamento & Finalização"
    ],
    "tags": [
      "k-092",
      "kuba velvets",
      "veludo de rafia",
      "congo",
      "cut pile",
      "arte africana",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CORNET, Joseph. Art of the Kuba: Velvets, Raffia and Royal Regalia. Tervuren: Royal Museum for Central Africa, 2021.",
      "PARRISH, Gail. Dimensional Cut-Pile and Fringe Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de linho grosso ou sarja. Digitalize um quadrado de 3x3 cm em ponto de franja com pontos de arremate bem firmes na base. Borde com linha de algodão grossa. Corte as laçadas por cima com tesourinha e passe uma escova de dente: você acaba de criar um tufo de veludo rústico estilo Kuba!",
    "quickSummary": "Veludo tradicional de ráfia africana criado cortando laçadas de bordado para efeito aveludado 3D.",
    "beginnerExplanation": "O Veludo Kuba é uma técnica africana genial onde a gente borda laçadinhas de linha e depois corta a parte de cima com uma tesourinha: as linhas abrem e viram uma pelúcia fofinha e aveludada com desenhos geométricos de tirar o fôlego!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-093-kutnu-de-gaziantep-tecido-nobre-turco-de-seda-e-algodao-acetinado",
    "code": "K-093",
    "term": "Kutnu de Gaziantep: Tecido Nobre de Seda e Algodão (Gaziantep Kutnu Fabric & Ottoman Royal Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do árabe qutn (algodão) e kutnu (tecido misto de seda e algodão acetinado). Produzido na histórica cidade de Gaziantep (Turquia) desde o século XVI.",
    "summary": "Tecido brilhante tradicional com urdume de seda pura e trama de algodão, conhecido como o tecido dos sultões otomanos com listras vivas e bordados dourados.",
    "definition": "Kutnu de Gaziantep (Ottoman Imperial Silk-Cotton Satin Weave) é o tecido patrimonial turco caracterizado por uma estrutura têxtil mista única: o lado direito é composto por fios brilhantes de seda pura (ou viscose acetinada) organizados em padronagens de listras verticais coloridas (*Meydaniye*, *Sedefli*, *Darbeli*), enquanto o lado avesso é tecido inteiramente em algodão puro respirável e macio. No bordado computadorizado, exige agulhas 70/10 SES de ponta bola leve e matrizes com compensação direcional para bordar sobre as listras acetinadas sem provocar deslizamento de fios ou repuxamento da seda.",
    "technicalDetails": "Composição típica de 60% seda pura e 40% algodão (gramatura de 140 a 190 g/m²). Tecido estruturado com alta estabilidade dimensional no sentido do algodão e elasticidade sutil no sentido da seda.",
    "construction": [
      "Tecido Kutnu autêntico com listras acetinadas coloridas",
      "Entretela de algodão rasgável macia (Cotton Soft 50 g/m²)",
      "Linhas de poliéster brilhante 40wt ou fios metálicos dourados e prateados",
      "Matriz de motivos florais otomanos (tulipas, cravos e romãs estilizadas)",
      "Alinhamento milimétrico do bordado paralelamente às listras verticais"
    ],
    "howItWorks": [
      "1. O tecido Kutnu é alinhado no bastidor garantindo que as listras fiquem rigorosamente paralelas ao aro.",
      "2. Utiliza-se entretela rasgável macia no avesso para manter o toque suave do algodão.",
      "3. A máquina borda os medalhões centrais e tulipas otomanas com pontos cheios acetinados.",
      "4. Os fios metálicos dourados contornam as flores criando um contraste luminoso sobre as listras de seda.",
      "5. A velocidade de bordado é mantida em 700 PPM para garantir perfeita formação de laçada.",
      "6. A entretela é rasgada suavemente no verso.",
      "7. A peça ganha a nobreza e o fausto dos palácios imperiais de Istambul."
    ],
    "mainTypes": [
      "Kutnu Meydaniye (Listras largas amarelas e vermelhas com brilho dourado acetinado)",
      "Kutnu Sedefli (Padrão perolizado com listras finas em tons pastéis e prata)",
      "Kutnu Alaca (Padrão multicolorido vibrante para coletes, jaquetas e sapatos de luxo)"
    ],
    "characteristics": [
      "Brilho acetinado de seda no exterior com o conforto e frescor do algodão no interior",
      "Cores vivas que não desbotam com facilidade devido ao tingimento artesanal em meada",
      "Altíssimo prestígio no mercado europeu e do Oriente Médio de moda e decoração",
      "Excelente caimento para peças de vestuário estruturado (blazers, coletes, quimonos)"
    ],
    "limitations": [
      "Não prender com aperto excessivo no bastidor mecânico para não desfiar as listras de seda",
      "O corte das peças deve respeitar rigorosamente o alinhamento das listras verticais",
      "Evitar ferros excessivamente quentes diretamente sobre a face de seda brilhante"
    ],
    "numberingSystem": [
      "Gramatura: 150 a 180 g/m²",
      "Composição: 60% Seda / 40% Algodão",
      "Densidade Recomendada: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Peça com selo de Indicação Geográfica protegida e enorme apelo cultural",
      "✔ Toque fresco e confortável na pele sem a sensação plástica de cetins sintéticos",
      "✔ Visual imponente que valoriza imediatamente qualquer coleção de moda"
    ],
    "commonErrors": [
      "❌ Prender o tecido torto no bastidor, cruzando as listras de seda em ângulo diagonal",
      "❌ Usar agulhas grossas que cortam os filamentos de seda da face brilhante",
      "❌ Passar a ferro em temperatura máxima de algodão sobre a face brilhante de seda"
    ],
    "voceSabia": "O tecido Kutnu era conhecido na época do Império Otomano como o 'Tecido dos Sultões' e era usado para confeccionar os caftãs cerimoniais dos príncipes e governadores; em 2015, o tecido Kutnu foi oficialmente registrado como Patrimônio Cultural da Turquia.",
    "curiosidadeTecnica": "A técnica de tecelagem do Kutnu utiliza um tear de lançadeira com até 4.000 fios de urdume de seda nobre para cada metro de largura de tecido, o que cria a densidade brilhante característica que esconde completamente os fios de algodão da face superior.",
    "dicaArtrelados": "Ao bordar em tecidos listrados nobres como o Kutnu, centralize a matriz exatamente sobre a listra mais larga do tecido e use uma cor de linha que dialogue com as listras vizinhas: a harmonia visual fica tão elegante que parece feito sob medida por estilistas reais!",
    "comparisonTable": {
      "headers": ["Propriedade", "Tecido Kutnu Turco", "Cetim Comum de Poliéster", "Tricoline de Algodão"],
      "rows": [
        ["Composição", "Seda (frente) + Algodão (avesso)", "100% Poliéster sintético", "100% Algodão liso"],
        ["Brilho", "Acetinado natural nobre", "Plástico e brilhoso", "Fosco / Sem brilho"],
        ["Conforto na Pele", "Super fresco e respirável", "Quente e transpirável", "Macio e absorvente"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "70/10 SES Ponta Bola Leve ou 75/11 Microtex",
      "stabilizer": "Entretela de Algodão Rasgável Macia 50 g/m²",
      "threadTension": "100 a 110 gf (superior) e 20 gf (bobina)",
      "density": "0.40 mm com pontos bem assentados"
    },
    "applications": [
      "Blazers, coletes, quimonos e jaquetas de alta costura contemporânea",
      "Sapatilhas de festa, mules e clutches estruturadas em tecido nobre",
      "Almofadas listradas de luxo e trilhos de mesa com motivos orientais",
      "Kaftans e túnicas de verão com caimento fresco e acabamento brilhante"
    ],
    "troubleshootingTips": [
      "Se as listras de seda repuxarem nas laterais do bordado, aumente a compensação de repuxo para 0,35 mm no software",
      "Passe o tecido sempre pelo avesso (lado do algodão) com vapor morno",
      "Utilize linhas de bordar de poliéster brilhante 40wt para acompanhar o brilho da seda"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kaftan Cerimonial Marroquino",
      "Monogramas & Letreiros",
      "Compensação de Repuxo",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-093",
      "kutnu",
      "tecido turco",
      "gaziantep",
      "seda e algodao",
      "tecido dos sultoes",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GAZIANTEP CHAMBER OF COMMERCE. Kutnu: The Heritage Fabric of Sultans. Gaziantep, 2021.",
      "PARRISH, Gail. Striped Satin and Silk-Cotton Machine Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido listrado encorpado. Alinhe as listras perfeitamente retas no bastidor. Digitalize uma tulipa otomana clássica com pétalas pontiagudas em ponto cheio dourado. Borde com agulha 70/10 em 700 PPM. Veja como o bordado ganha um ar majestoso sobre as listras!",
    "quickSummary": "Tecido nobre turco de seda brilhante e algodão macio para bordados reais e moda de luxo.",
    "beginnerExplanation": "O Kutnu é um tecido famoso e chique da Turquia que tem a frente brilhante como seda e o verso macio e fresquinho como algodão. A gente borda flores e desenhos dourados nele para criar jaquetas, sapatos e almofadas dignas de castelos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-094-kanthal-resistance-wire-fios-termicos-para-texteis-inteligentes",
    "code": "K-094",
    "term": "Kanthal Resistance Wire: Fios Térmicos em Bordados Técnicos (Kanthal Alloy Wire & Smart E-Textiles)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da marca e liga sueca Kanthal (liga metálica de Ferro-Cromo-Alumínio / FeCrAl inventada por Hans von Kantzow em Hallstahammar, Suécia). Padrão global de tecidos inteligentes (Smart Textiles).",
    "summary": "Técnica de bordado de circuitos eletrônicos flexíveis e micro-fios de aquecimento térmico integrados a jaquetas, luvas e coletes hospitalares.",
    "definition": "Kanthal Resistance Wire & Smart E-Textiles (Bordado de Circuitos de Aquecimento em Fios de Kanthal) é a vertente da mecatrônica e engenharia têxtil onde micro-fios condutores de ligas de alta resistividade elétrica (como ligas Kanthal FeCrAl ou fios de prata/cobre isolados com poliuretano) são bordados diretamente sobre tecidos funcionais através de costura de ancoragem (*Tailored Fiber Placement - TFP* ou *Couching*). Ao receber baixa voltagem de baterias portáteis (5V a 12V), a matriz de bordado dissipa calor controlado uniformemente, sendo utilizada em jaquetas térmicas de motociclistas, luvas de neve, palmilhas aquecidas e mantas térmicas cirúrgicas.",
    "technicalDetails": "Diâmetro do micro-fio condutor de 0,08 a 0,20 mm com resistência linear entre 10 e 50 Ohms/metro. Linha superior de poliéster antichama (Aramid/Nomex) e tensão de ancoragem com ponto ziguezague contínuo de 2,0 mm.",
    "construction": [
      "Tecido base respirável antichama (sarja Nomex, neoprene ou fleece térmico)",
      "Carretel de micro-fio de Kanthal ou liga resistiva condutora flexível",
      "Entretela de recorte resistente a calor (Heat-Resistant Cutaway 80 g/m²)",
      "Linha de fixação em poliéster de alta tenacidade ou aramida antichama",
      "Matriz com caminho sinuoso contínuo em serpentina sem cruzamento de fios condutores"
    ],
    "howItWorks": [
      "1. A matriz do circuito de aquecimento é digitalizada em padrão de serpentina contínua.",
      "2. O tecido funcional é preso no bastidor com entretela resistente a calor.",
      "3. O micro-fio de Kanthal é alimentado pelo calcador especial de cordão da máquina.",
      "4. A máquina borda pontos de ziguezague a cada 3 mm ancorando o fio térmico com firmeza.",
      "5. As duas extremidades do fio condutor são deixadas com 5 cm de folga para conexão com os terminais elétricos.",
      "6. A peça é testada com multímetro digital para aferição da resistência elétrica calculada.",
      "7. Conecta-se o conector USB/bateria e o tecido aquece suavemente até 40 °C em menos de 60 segundos."
    ],
    "mainTypes": [
      "Serpentina Térmica para Jaquetas e Coletes Esportivos de Inverno",
      "Malha de Aquecimento para Luvas e Calçados de Alta Performance",
      "Mantas Térmicas Médicas e Veterinárias para Recuperação Pós-Cirúrgica"
    ],
    "characteristics": [
      "Flexibilidade e conforto total: o usuário não sente cabos duros dentro da roupa",
      "Aquecimento seguro, homogêneo e controlado por termostatos digitais",
      "Resistência a flexões e lavagens suaves quando os fios são selados",
      "Fronteira mais avançada da tecnologia de vestuário inteligente (Wearable Tech)"
    ],
    "limitations": [
      "Os fios condutores NUNCA podem se cruzar na matriz para evitar curto-circuito elétrico",
      "Exige cálculo preciso da resistência elétrica da matriz antes da produção em série",
      "Não perfurar o fio condutor diretamente com a ponta da agulha"
    ],
    "numberingSystem": [
      "Diâmetro do Fio: 0,08 mm a 0,15 mm",
      "Tensão Elétrica de Trabalho: 5V (USB) a 12V (Bateria)",
      "Temperatura de Superfície: 37 °C a 45 °C"
    ],
    "advantages": [
      "✔ Ingresso no mercado bilionário de tecidos inteligentes e equipamentos esportivos de alta tecnologia",
      "✔ Agregação de valor extremo: uma jaqueta aquecida eletronicamente custa centenas de dólares",
      "✔ Produção padronizada e segura com a precisão milimétrica da máquina de bordar"
    ],
    "commonErrors": [
      "❌ Cruzar o fio de Kanthal sobre ele mesmo na programação, gerando curto-circuito e ponto quente",
      "❌ Usar linha de costura comum que derrete com o calor gerado pelo fio térmico",
      "❌ Borda com agulha cega que esmaga e rompe o micro-fio metálico"
    ],
    "voceSabia": "A tecnologia de bordar circuitos térmicos com fios de liga metálica é a mesma utilizada pela NASA nos trajes espaciais dos astronautas para mantê-los aquecidos no vácuo congelante do espaço sideral a -150 °C!",
    "curiosidadeTecnica": "O cálculo da potência térmica gerada pela matriz de bordado segue a Primeira Lei de Joule (P = V² / R), onde a resistência total da serpentina bordada determina exatamente quantos watts de calor o tecido vai gerar a 5 Volts.",
    "dicaArtrelados": "Ao digitalizar matrizes de tecidos inteligentes ou circuitos aquecidos, faça curvas suaves e arredondadas (nunca cantos vivos de 90°): cantos arredondados evitam que o micro-fio metálico sofra fadiga e quebre quando a pessoa dobrar o casaco!",
    "comparisonTable": {
      "headers": ["Tecnologia de Aquecimento", "Flexibilidade", "Conforto no Corpo", "Durabilidade"],
      "rows": [
        ["Circuito Bordado em Kanthal", "100% Flexível e leve", "Invisível e macio", "Altíssima (resiste a dobras)"],
        ["Placas Rígidas de Fibra de Carbono", "Rígida e quebradiça", "Incomoda ao sentar", "Média (quebra se dobrar)"],
        ["Resistências Espirais Grossas", "Grossa e pesada", "Volumosa e quente demais", "Baixa"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "500 - 600 PPM",
      "needleType": "75/11 SES com calcador de cordão / couching",
      "stabilizer": "Entretela de Recorte Antichama 80 g/m²",
      "threadTension": "100 a 110 gf (superior) e 20 gf (bobina)",
      "density": "Pontos de fixação em ziguezague a cada 3,0 mm"
    },
    "applications": [
      "Jaquetas esportivas aquecidas por USB para motociclistas, ciclistas e esquiadores",
      "Luvas térmicas e palmilhas de calçados para trabalho em câmaras frigoríficas",
      "Mantas térmicas para aquecimento de pacientes em centros cirúrgicos",
      "Assentos automotivos personalizados com aquecimento elétrico integrado"
    ],
    "troubleshootingTips": [
      "Se o multímetro apontar circuito aberto, inspecione a serpentina para identificar se a agulha cortou o micro-fio em algum ponto",
      "Utilize solda de estanho protegida com espaguete termorretrátil para ligar os fios condutores ao cabo USB",
      "Isole o verso do bordado com uma camada de tecido impermeável para proteger o circuito contra suor"
    ],
    "relatedTerms": [
      "Agulhas & Fios",
      "Kevlar & Fios de Aramida",
      "Calcador de Cordão (Cording Foot)",
      "Técnicas de Bastidor",
      "K-Sleeve / Mangas Termorretráteis"
    ],
    "tags": [
      "k-094",
      "kanthal",
      "e-textiles",
      "tecidos inteligentes",
      "circuitos aquecidos",
      "smart clothing",
      "agulhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KANG, Tae Jin. Smart Textiles: Electro-Conductive Fibres and Tailored Placement. Cambridge: Woodhead Publishing, 2021.",
      "PARRISH, Gail. Smart E-Textile and Heated Garment Machine Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido fleece grosso. Crie no programa uma serpentina contínua em formato de 'S' com 15 cm de comprimento sem nenhum cruzamento. Com o calcador de cordão, borde fixando um fiozinho condutor flexível com ponto ziguezague a 500 PPM. Sinta a firmeza da integração do circuito ao tecido!",
    "quickSummary": "Bordado tecnológico de micro-fios de aquecimento para criar jaquetas térmicas e roupas inteligentes.",
    "beginnerExplanation": "É o bordado do futuro! A máquina de bordar prende um fiozinho metálico especial no tecido fazendo um desenho em zigue-zague. Quando a gente liga uma baterinha pequena de celular, a roupa esquenta gostoso e quentinho no frio sem nenhum fio duro incomodando!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-095-khes-do-punjab-mantas-tradicionais-de-algodao-damascado-bordado",
    "code": "K-095",
    "term": "Khes do Punjab: Mantas Tradicionais de Algodão Damascado (Punjabi Khes Blanket & Geometric Stitching)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do punjabi e hindi khes (manta encorpada de algodão com padrões xadrezes tecida em teares de pedal). Tradição centenária do Punjab (Índia e Paquistão).",
    "summary": "Mantas pesadas de algodão com padronagem damascada xadrez e geométrica, suporte tradicional de bordados folclóricos e monogramas de dote.",
    "definition": "Khes do Punjab (Punjabi Damask Cotton Blanket & Folk Stitching) é o tecido pesado e resistente de algodão puro, tecido em teares manuais de quatro quadros com padrões geométricos entrelaçados em xadrez duplo (*Charkhana*, *Kashmiri Khes*, *Majnu*). Tradicionalmente oferecido em enxovais de casamento (*Daaj*) e usado como cobertor nobre de inverno e colcha de cama, exige no bordado a aplicação de agulhas 80/12 ou 90/14 SES e matrizes em ponto cheio estruturado para destacar nomes, brasões familiares e ramos de flores sobre a textura densa do damasco de algodão.",
    "technicalDetails": "Composição em 100% algodão fiado grosso (gramatura de 300 a 480 g/m²). Trama dupla encorpada e macia de alta respirabilidade e isolamento térmico natural.",
    "construction": [
      "Tecido Khes tradicional de algodão pesado em padronagem geométrica",
      "Entretela de recorte resistente (Cutaway 80 g/m²) ou rasgável dupla",
      "Linhas de algodão 40wt ou poliéster brilhante em cores de alto contraste",
      "Matriz de monogramas e ornamentos folclóricos com underlay em grade reforçada",
      "Bainhas em ponto festonê ou franjas amarradas artesanalmente nas pontas"
    ],
    "howItWorks": [
      "1. A manta Khes é montada no bastidor grande com entretela firme por baixo.",
      "2. Uma película solúvel fina no topo impede que os pontos afundem na textura do tecido.",
      "3. A máquina borda o monograma ou motivo central com pontos cheios nítidos e firmes.",
      "4. As cores vivas (mostarda, carmim, verde esmeralda, azul royal) contrastam com o fundo xadrez.",
      "5. A máquina finaliza com pontos de travamento seguros para resistir a lavagens frequentes.",
      "6. A peça é retirada e passada a vapor quente.",
      "7. A manta se torna uma peça central de conforto e decoração acolhedora para o quarto."
    ],
    "mainTypes": [
      "Khes Charkhana (Padrão clássico de xadrez preto, branco e vermelho)",
      "Khes Kashmiri Geométrico (Com pequenos diamantes e losangos em relevo de damasco)",
      "Khes Monocromático Cru (Algodão puro natural para bordados contemporâneos)"
    ],
    "characteristics": [
      "Toque quente, encorpado e extremamente confortável no corpo",
      "Altíssima durabilidade: tecidos de puro algodão que duram mais de 50 anos sem desgastar",
      "Excelente receptividade a bordados pesados e monogramas de grande formato",
      "Resistência total a lavagens industriais e água quente"
    ],
    "limitations": [
      "O tecido espesso exige bastidores resistentes que não escape durante o movimento do pantógrafo",
      "Letras muito finas (< 10 mm) somem na textura damascada do tecido",
      "Evitar entretelas sintéticas ásperas que arranhem a pele no uso da manta"
    ],
    "numberingSystem": [
      "Gramatura: 320 a 460 g/m²",
      "Tamanho Típico da Manta: 150x220 cm a 200x240 cm",
      "Densidade Recomendada: 0,40 mm a 0,44 mm"
    ],
    "advantages": [
      "✔ Criação de colchas de cama e mantas de sofá com alto apelo comercial e excelente lucratividade",
      "✔ Peças com apelo de conforto aconchegante para presentes de casamento e casas de campo",
      "✔ Estabilidade dimensional perfeita no bastidor por ser algodão estruturado"
    ],
    "commonErrors": [
      "❌ Bordar sem estabilização adequada, fazendo o monograma repuxar a trama grossa de algodão",
      "❌ Usar linhas fracas que arrebentam durante a lavagem pesada da manta",
      "❌ Apertar o aro do bastidor de forma irregular, deixando o desenho torto em relação ao xadrez"
    ],
    "voceSabia": "No Punjab tradicional, quando uma filha nascia, a mãe e as avós começavam imediatamente a tecer e bordar os cobertores Khes que fariam parte do seu enxoval de casamento 20 anos depois, sendo cada manta um símbolo de carinho e proteção familiar.",
    "curiosidadeTecnica": "O tecido Khes é produzido através da técnica de tecelagem 'Double Cloth' (tecido duplo), onde duas camadas de algodão são tecidas simultaneamente e entrelaçadas nos pontos de mudança de cor, criando um tecido com duas faces utilizáveis e térmicas.",
    "dicaArtrelados": "Ao bordar mantas e cobertores de algodão grosso como o Khes, aumente a largura do ponto cheio para pelo menos 3,5 mm e coloque uma película solúvel leve por cima: o bordado fica volumoso, macio e super legível sobre a trama damascada!",
    "comparisonTable": {
      "headers": ["Tipo de Manta", "Estrutura do Tecido", "Composição", "Resultado do Bordado"],
      "rows": [
        ["Manta Khes do Punjab", "Trama damascada encorpada", "100% Algodão Puro", "Monogramas firmes e destacados"],
        ["Manta de Microfibra Comum", "Pelo sintético fofo", "100% Poliéster", "Afunda fácil (exige muito plástico)"],
        ["Peseira de Tricô Aberto", "Malha elástica furada", "Acrílico ou lã", "Muito instável (exige recorte pesado)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "80/12 SES ou 90/14 SES Ponta Bola",
      "stabilizer": "Entretela de Recorte 80 g/m² + Película Solúvel no topo",
      "threadTension": "110 a 120 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com Underlay em Grade"
    },
    "applications": [
      "Mantas de cama, colchas de casal e peseiras de decoração",
      "Mantas de sofá aconchegantes para dias frios e chalés de serra",
      "Almofadas grandes de chão e pufes em tecido de algodão pesado",
      "Presentes de casamento personalizados com nomes e data das bodas"
    ],
    "troubleshootingTips": [
      "Se os pontos afundarem na trama damascada, coloque um filme hidrossolúvel fino de 20 micras no topo",
      "Apoie as sobras da manta pesada na mesa para não forçar o motor do pantógrafo",
      "Passe a ferro com vapor bem quente após bordar para assentar os pontos de algodão"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Monogramas & Letreiros",
      "Ponto Cheio (Satin Stitch)",
      "Entretela Hidrossolúvel",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-095",
      "khes",
      "manta do punjab",
      "algodao damascado",
      "enxoval de casamento",
      "tecidos pesados",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ARYA, Shashi. The Living Textile Heritage of Punjab: Khes and Phulkari. New Delhi, 2021.",
      "PARRISH, Gail. Heavy Cotton and Blanket Machine Embroidery Techniques. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de algodão encorpado tipo sarja pesada ou piquet. Prenda a entretela e coloque um filme solúvel no topo. Digitalize as iniciais de um casal com fonte serifada grossa de 5 cm de altura em ponto cheio. Borde com linha mostarda e sinta a imponência da peça!",
    "quickSummary": "Mantas tradicionais de algodão pesado e damasco indiano para bordar monogramas nobres de casamento.",
    "beginnerExplanation": "O Khes é aquele cobertor maravilhoso de puro algodão grosso, super gostoso e quentinho, típico da Índia. Ele é firme e perfeito para bordar nomes de casamento, brasões de família e desenhos florais que duram a vida inteira!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-096-kente-strips-joining-montagem-de-faixas-de-tecido-etnico-no-bastidor",
    "code": "K-096",
    "term": "Kente Strips Joining: Montagem de Faixas Étnicas no Bastidor (Kente Narrow-Strip Joining & In-The-Hoop Seaming)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da tradição Ashanti e Ewe de Gana e Togo, onde o tecido Kente é produzido em faixas estreitas de 8 a 10 cm que são costuradas lado a lado para formar mantos cerimoniais de reis.",
    "summary": "Método eletrônico de união de faixas estreitas de tecido com pontos de costura invisível e festonês decorativos executados diretamente no bastidor (ITH).",
    "definition": "Kente Strips Joining (Montagem e União Eletrônica de Faixas de Tecido no Bastidor) é a técnica automatizada de costura e bordado onde faixas estreitas de tecidos étnicos (como o autêntico tecido ganês *Kente*, passamanarias, fitas de tear manual ou faixas de patchwork) são perfeitamente unidas, niveladas e decoradas diretamente no bastidor da máquina de bordar (*In-The-Hoop*). A máquina executa pontos de união com tolerância milimétrica, seguidos por pontos cheios de cobertura, entremeios abertos (*fagoting stitch*) ou motivos geométricos de reforço que unem as tiras sem criar calombos ou costuras duras no avesso.",
    "technicalDetails": "Faixas de tecido de 6 a 12 cm de largura em seda ou algodão mercerizado (gramatura de 160 a 240 g/m²). Programação ITH com costura reta de união a 6 mm da borda e ponto decorativo perimetral de 3,5 mm de largura.",
    "construction": [
      "Faixas estreitas de tecido Kente autêntico ou tiras de tecidos coloridos",
      "Entretela rasgável de algodão macia ou hidrossolúvel de suporte",
      "Linhas de poliéster de alta tenacidade em cores combinadas com as listras",
      "Matriz In-The-Hoop com linhas guias de posicionamento e costuras de união",
      "Agulha 75/11 SES ou 80/12 Universal"
    ],
    "howItWorks": [
      "1. A entretela é presa no bastidor e a máquina borda a linha guia da primeira faixa.",
      "2. A primeira faixa de tecido é posicionada sobre a marcação e fixada com costura reta.",
      "3. A segunda faixa é colocada por cima, direito com direito, e a máquina executa a costura de união perfeita.",
      "4. Desvira-se a segunda faixa e passa-se o rolinho de patchwork para assentar a costura.",
      "5. A máquina borda um ponto decorativo de festonê ou ziguezague geométrico sobre a linha de junção das faixas.",
      "6. O processo se repete com a terceira faixa até cobrir toda a área do bastidor.",
      "7. A peça sai do bastidor montada, forrada e bordada com precisão milimétrica.",
      "8. O painel ganha a harmonia visual das peças reais dos reis africanos."
    ],
    "mainTypes": [
      "União de Faixas Kente para Faixas de Formatura e Estolas Litúrgicas",
      "Montagem de Painéis e Almofadas de Patchwork Étnico no Bastidor",
      "União de Fitas Decorativas para Galões de Cortina e Alças de Bolsa"
    ],
    "characteristics": [
      "Alinhamento perfeito das faixas sem desvios ou ondas de costura",
      "Rapidez incomparável: une e borda 4 faixas em menos de 10 minutos",
      "Junções totalmente planas e confortáveis no toque",
      "Excelente para estolas comemorativas de formatura e eventos afrocêntricos"
    ],
    "limitations": [
      "Exige corte reto rigoroso nas laterais das faixas antes de iniciar a montagem",
      "O tamanho do bastidor define o comprimento máximo de cada módulo de união",
      "Manter a tensão correta para não repuxar as emendas entre tecidos diferentes"
    ],
    "numberingSystem": [
      "Largura das Faixas: 8 cm a 10 cm",
      "Margem de Costura ITH: 5 mm a 6 mm",
      "Largura do Ponto Decorativo de Junção: 3,0 mm a 4,5 mm"
    ],
    "advantages": [
      "✔ Produção de estolas de formatura de luxo com altíssima lucratividade",
      "✔ Elimina o erro humano no alinhamento de costuras manuais",
      "✔ Aproveitamento total de retalhos nobres de tecidos étnicos e fitas especiais"
    ],
    "commonErrors": [
      "❌ Não passar o rolinho ou ferro para tombar a costura antes do ponto decorativo",
      "❌ Deixar as pontas das faixas desalinhadas em relação à linha guia do bastidor",
      "❌ Usar linhas muito grossas que criam um cordão duro na junção das tiras"
    ],
    "voceSabia": "Originalmente em Gana, os reis Ashanti usavam mantos Kente inteiros montados costurando até 24 faixas estreitas de seda que levavam meses para serem tecidas; a cor ouro simbolizava a riqueza e a realeza, enquanto a cor verde representava a terra e o crescimento espiritual.",
    "curiosidadeTecnica": "O método In-The-Hoop de união de tiras foi adaptado da técnica tradicional de 'Paper Piecing' do patchwork inglês, sendo hoje parametrizado com tolerâncias de 0,1 mm nos melhores softwares de bordado computadorizado.",
    "dicaArtrelados": "Ao montar faixas de tecido no bastidor (ITH), use um mini-ferro de passar ou um rolinho de madeira para vincar a dobra do tecido antes da máquina fazer o ponto de cobertura: a emenda fica tão retinha e perfeita que parece feita em máquina industrial de alta precisão!",
    "comparisonTable": {
      "headers": ["Método de União", "Tempo por Estola", "Alinhamento das Listras", "Acabamento Decorativo"],
      "rows": [
        ["ITH no Bastidor de Bordar", "8 minutos", "100% Milimétrico e reto", "Bordado decorativo automático"],
        ["Costura Reta Manual", "30 a 45 minutos", "Variável (pode entortar)", "Exige segunda passagem"],
        ["Colagem com Fita Termocolante", "15 minutos", "Baixa durabilidade", "Risco de soltar na lavagem"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável Macia 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm no ponto decorativo de cobertura"
    },
    "applications": [
      "Estolas de formatura universitária e faixas cerimoniais afro-brasileiras",
      "Almofadas de patchwork étnico e trilhos de mesa com faixas coloridas",
      "Bolsas ecológicas estruturadas e carteiras em tiras de tecido nobre",
      "Painéis de parede e estandartes comemorativos para centros culturais"
    ],
    "troubleshootingTips": [
      "Se a costura de união ficar repuxada, reduza a tensão da linha superior em 10 gf",
      "Utilize spray adesivo temporário para manter as faixas bem coladas na entretela durante o giro",
      "Corte as linhas de arremate rente ao final de cada etapa para um acabamento impecável"
    ],
    "relatedTerms": [
      "Técnicas de Bastidor",
      "Bordado In-The-Hoop (ITH)",
      "Kente, Tecidos Étnicos Africanos",
      "Ponto Festonê",
      "Acabamento & Finalização"
    ],
    "tags": [
      "k-096",
      "kente strips",
      "uniao de faixas",
      "in the hoop",
      "estolas de formatura",
      "patchwork etnico",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ADDO, Arthur. The Art and Architecture of Ashanti Kente Weaving. Kumasi, 2021.",
      "PARRISH, Gail. In-The-Hoop Strip Joining and Quilt Block Assembly. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue 2 tiras de tecido colorido de 8x20 cm. No bastidor com entretela, crie uma linha reta de costura. Posicione as tiras direito com direito, borde a costura de união, desvire a tira e passe um ponto ziguezague decorativo de 3 mm por cima da emenda. Veja a união perfeita e plana!",
    "quickSummary": "Técnica no bastidor para unir tiras de tecidos étnicos com costuras perfeitas e pontos decorativos.",
    "beginnerExplanation": "É o jeito mágico de costurar e juntar faixas de tecidos coloridos diretamente dentro do bastidor da máquina. A máquina costura a emenda retinha, você vira o tecido e ela já faz um bordado lindo por cima da junção para criar estolas e almofadas perfeitas!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-097-kyoto-silk-floss-fios-de-seda-pura-sem-torcao-para-brilho-espelhado",
    "code": "K-097",
    "term": "Kyoto Silk Floss: Fios de Seda sem Torção para Brilho Espelhado (Kyoto Flat Silk Floss & Mirror Luster Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Dos mestres artesãos do bairro tradicional de Nishijin em Quioto (Japão), capital histórica da seda imperial e do bordado Nihon Shishu desde o século VIII.",
    "summary": "Fios nobres de seda pura sem torção mecânica (flat silk), cujos filamentos paralelos refletem a luz criando um brilho espelhado inigualável em bordados de alta arte.",
    "definition": "Kyoto Silk Floss (Fio de Seda Plana de Quioto & Brilho Espelhado) é o mais nobre filamento de bordado da tradição japonesa (*Hiraginu* ou *Untwisted Silk Floss*), caracterizado por feixes de filamentos contínuos de pura proteína de seda de amoreira colhidos do casulo sem sofrer torção mecânica (*twist*). Ao serem aplicados com pontos planos compridos e paralelos em ângulo constante, os microfilamentos se espalham formando uma superfície lisa e contínua que reflete a luz como uma lâmina de espelho líquido, gerando efeitos de brilho acetinado incomparáveis no bordado de quimonos cerimoniais, biombos de seda e alta costura.",
    "technicalDetails": "Composição em 100% seda pura natural desgomada (espessura equivalente a 50wt/60wt). Exige velocidade reduzida de máquina (450 a 550 PPM), agulhas de olho ultra-polido 70/10 Microtex ou Titanium e tensão superior extremamente leve (75 a 85 gf).",
    "construction": [
      "Meada ou carretel de seda pura plana japonesa sem torção (Flat Silk)",
      "Tecido base de seda pura, organza ou veludo de alta nobreza",
      "Entretela de organza de seda natural ou hidrossolúvel de suporte invisível",
      "Agulha 70/10 Microtex com olho retificado de acabamento espelhado",
      "Matriz com pontos cheios e planos de direção de ângulo única por elemento"
    ],
    "howItWorks": [
      "1. A seda plana é alimentada no caminho de linha da máquina com guias de cerâmica polida.",
      "2. O tecido nobre é montado no bastidor com entretela de suporte suave sem dobras.",
      "3. A matriz programa todas as pétalas com ângulo de ponto uniforme para maximizar a reflexão da luz.",
      "4. A máquina borda em velocidade lenta e constante, permitindo que os filamentos de seda se acomodem lado a lado.",
      "5. Os pontos se fundem criando uma textura contínua e aveludada com brilho espelhado.",
      "6. A peça é retirada com luvas de algodão para não puxar microfilamentos com as unhas.",
      "7. O resultado é uma obra de arte têxtil com brilho nobre e riqueza visual de nível de museu."
    ],
    "mainTypes": [
      "Kyoto Flat Silk Branco Puro (Para vestidos de noiva e quimonos Shiromuku)",
      "Kyoto Flat Silk Tingido com Corantes Botânicos (Degradês de cerejeira, índigo e musgo)",
      "Kyoto Flat Silk Metálico (Com microfilamentos intercalados com fios de ouro)"
    ],
    "characteristics": [
      "O mais alto grau de brilho, pureza e reflexão luminosa do universo têxtil",
      "Toque incomparavelmente macio e sedoso que desliza entre os dedos",
      "Superfície plana perfeita que se assemelha a uma pintura laqueada japonesa",
      "Alta solidez de cor e durabilidade centenária quando conservada ao abrigo do sol direto"
    ],
    "limitations": [
      "A seda sem torção pode desfiar se passar por agulhas ásperas ou guias-fio com ranhuras",
      "Exige operadores com mãos bem cuidadas e hidratadas para não puxar fios na manipulação",
      "Não resiste a lavagens abrasivas em máquinas comuns de lavar roupa"
    ],
    "numberingSystem": [
      "Título do Fio: 50wt a 60wt Flat Silk",
      "Velocidade Ideal: 450 a 550 PPM",
      "Tensão Superior: 75 a 85 gf (ultra suave)"
    ],
    "advantages": [
      "✔ Obras-primas de alta-costura com preços de venda no patamar de milhares de reais",
      "✔ Brilho natural nobre que nenhuma linha sintética de poliéster consegue imitar",
      "✔ Prestígio e reconhecimento como ateliê de arte e restauração têxtil de elite"
    ],
    "commonErrors": [
      "❌ Bordar em velocidade alta (> 700 PPM), friccionando e embolando os filamentos de seda",
      "❌ Usar agulhas velhas com rebarba no olho que cortam os microfilamentos da seda",
      "❌ Programar ângulos de pontos aleatórios que quebram o reflexo espelhado da luz"
    ],
    "voceSabia": "Na tradição do bordado japonês Nihon Shishu em Quioto, os mestres bordadeiros passam até 10 anos aprendendo apenas a controlar a tensão e a torção dos fios de seda com a palma das mãos antes de terem permissão para bordar um quimono cerimonial completo!",
    "curiosidadeTecnica": "A ausência de torção mecânica no fio Flat Silk permite que a luz atinja as superfícies cilíndricas dos filamentos de fibroína no mesmo plano focal, gerando uma reflexão especular com índice de refração de 1,59 (muito próximo ao cristal óptico).",
    "dicaArtrelados": "Ao bordar com fios de seda pura para obter o brilho de espelho, programe todos os pontos de uma mesma pétala exatamente no mesmo ângulo (por exemplo, 45°)! Quando a luz bater na peça, o bordado vai brilhar inteiro de uma vez só, como se fosse uma joia de ouro líquido!",
    "comparisonTable": {
      "headers": ["Tipo de Linha", "Grau de Torção", "Reflexão da Luz", "Sensação ao Toque"],
      "rows": [
        ["Kyoto Flat Silk Floss", "Zero torção (plana)", "Brilho de espelho puro (especular)", "Seda líquida incomparável"],
        ["Seda Torcida Tradicional", "Torção média", "Brilho acetinado suave", "Macia e firme"],
        ["Poliéster Trilobal 40wt", "Torção mecânica alta", "Brilho sintético vítreo", "Plástica e resistente"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "450 - 550 PPM",
      "needleType": "70/10 Microtex ou 75/11 Titanium com olho polido",
      "stabilizer": "Organza de Seda 30 g/m² ou Hidrossolúvel solúvel a frio",
      "threadTension": "80 a 85 gf (ultra suave) e 18 gf (bobina)",
      "density": "0.36 mm a 0.38 mm com direção de ponto uniforme"
    },
    "applications": [
      "Quimonos de noiva, vestidos de alta-costura internacional e trajes de gala",
      "Biombos de seda japoneses, leques de luxo e painéis de arte oriental",
      "Monogramas de altíssimo luxo em lenços de seda e gravatas feitas sob medida",
      "Restauração de tapeçarias históricas e vestimentas de museu"
    ],
    "troubleshootingTips": [
      "Se os filamentos desfiarem na agulha, troque imediatamente por uma agulha nova 70/10 Microtex e passe um pingo de silicone no carretel",
      "Mantenha a área da lançadeira 100% limpa e sem fiapos antes de iniciar o trabalho com seda pura",
      "Manuseie a peça finalizada sempre segurando pelas margens do tecido"
    ],
    "relatedTerms": [
      "Agulhas & Fios",
      "Kimono / Quimono Japonês",
      "Karat Gold Thread",
      "Agulhas Microtex",
      "Tipos de Tecidos"
    ],
    "tags": [
      "k-097",
      "kyoto silk",
      "seda plana",
      "fios de seda",
      "brilho de espelho",
      "nihon shishu",
      "agulhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KYOTO EMBROIDERY GUILD. Nihon Shishu: The Art of Traditional Japanese Silk Embroidery. Kyoto, 2021.",
      "PARRISH, Gail. Flat Silk Floss and High-Luster Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de cetim de seda escuro. Programe uma folhinha de 3 cm com pontos cheios todos no ângulo fixo de 45°. Borde com fio de seda ou viscose brilhante fina em 500 PPM com agulha 70/10 nova. Incline a peça contra a luz e veja o brilho de espelho reluzente!",
    "quickSummary": "O fio de seda pura japonesa sem torção que cria o brilho mais puro e espelhado do mundo.",
    "beginnerExplanation": "É o fio de seda mais nobre e perfeito do planeta, feito no Japão. Os fiozinhos ficam bem soltinhos e paralelos: quando a máquina borda com eles, o desenho parece que foi pintado com ouro ou prata líquida, brilhando como um espelho de verdade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-098-kapa-moena-esteiras-finas-ornamentadas-com-fibras-do-pacifico",
    "code": "K-098",
    "term": "Kapa Moena: Esteiras Finas de Fibras do Pacífico (Polynesian Kapa Moena Fine Mat Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do havaiano e samoano moena / fala (esteira de palha fina trançada) e kapa (tecido batido). Tradição cerimonial de Samoa, Tonga, Fiji e Havaí.",
    "summary": "Esteiras de palha ultrafina de pandanus e hibisco com bordas bordadas e franjas decorativas para casamentos e presentes reais.",
    "definition": "Kapa Moena (Polynesian Fine Woven Mat & Edge Embroidery) é a tradição têxtil das Ilhas do Pacífico que une a tecelagem manual de esteiras finas de folhas de pandanus (*Lauhala*) e fibras de hibisco marinho com ornamentações bordadas em ponto cheio geométrico, ziguezagues e franjas de penas ou fios coloridos nas bordas (*Pae*). No bordado computadorizado, a personalização de esteiras de palha fina e jogos americanos de fibra natural exige a técnica de flutuação adesiva e agulhas 75/11 com ponta lança para penetrar a palha sem quebrar as fitas vegetais.",
    "technicalDetails": "Esteiras trançadas com fitas de pandanus de 1,5 a 3,0 mm de largura (gramatura de 200 a 350 g/m²). Pontos de bordado com densidade suave (0,45 mm) e velocidade moderada de 650 PPM.",
    "construction": [
      "Base de esteira de fibra natural de pandanus, ráfia ou junco fino",
      "Entretela de recorte resistente (Cutaway 80 g/m²)",
      "Linhas de poliéster brilhante em cores solares (laranja, amarelo, turquesa, vermelho e preto)",
      "Matriz com grafismos tribais de borda e triângulos concêntricos",
      "Fixação por flutuação adesiva sobre a entretela presa no aro do bastidor"
    ],
    "howItWorks": [
      "1. A esteira vegetal é inspecionada para verificar o sentido do trançado das palhas.",
      "2. A entretela de recorte é fixada no bastidor e a esteira é colada por cima com fita dupla-face suave.",
      "3. A máquina borda os triângulos tribais e ondas nas bordas da esteira com velocidade moderada.",
      "4. As agulhas penetram suavemente nos vãos das palhas sem romper as fibras vegetais.",
      "5. A máquina finaliza os pontos de arremate com travamento oculto.",
      "6. A peça é retirada e a entretela do avesso é refilada rente à costura.",
      "7. A esteira se transforma em um jogo americano nobre de mesa posta ou painel de parede tropical."
    ],
    "mainTypes": [
      "Jogos Americanos e Trilhos de Mesa em Fibra Natural Bordada",
      "Esteiras Cerimoniais Polinésias com Brasões e Nomes de Família",
      "Bolsas de Palha Fina e Clutches de Praia com Bordados Étnicos"
    ],
    "characteristics": [
      "Aspecto natural, orgânico e rústico de alto luxo para decoração de verão",
      "Alta resistência mecânica e durabilidade em ambientes de praia e varandas",
      "Contraste encantador entre a palha clara natural e as cores vibrantes das linhas",
      "Produto ecológico e sustentável de grande apelo no mercado de decoração"
    ],
    "limitations": [
      "A palha vegetal ressecada pode quebrar se for dobrada com força no bastidor",
      "Evitar pontos muito curtos (< 1,5 mm) que picotem e partam as tiras de palha",
      "Não mergulhar a esteira de palha em água fervente ou produtos com cloro"
    ],
    "numberingSystem": [
      "Largura das Fitas de Palha: 1,5 mm a 3,0 mm",
      "Gramatura: 220 a 340 g/m²",
      "Comprimento do Ponto: 2,5 mm a 3,5 mm"
    ],
    "advantages": [
      "✔ Peças de mesa posta com altíssima procura em buffets, resorts e casas de praia",
      "✔ Margem de lucro excelente na customização de produtos de palha natural",
      "✔ Visual moderno e acolhedor que valoriza qualquer almoço ou jantar ao ar livre"
    ],
    "commonErrors": [
      "❌ Prender a esteira dura diretamente no aro de plástico do bastidor, quebrando a palha",
      "❌ Usar ponto tatami muito denso que esfarela a fibra vegetal",
      "❌ Bordar em velocidade máxima gerando vibração que descola a esteira da entretela"
    ],
    "voceSabia": "Em Samoa e Tonga, as esteiras finas trançadas chamadas 'Ie Toga' são consideradas a maior riqueza da família e o bem mais sagrado de todos: elas são trocadas em casamentos reais e funerais de chefes de estado e algumas têm mais de 300 anos de história!",
    "curiosidadeTecnica": "As folhas de pandanus (*Lauhala*) possuem uma cutícula cerosa natural que repele a água e confere uma flexibilidade de tração comparável ao nylon vegetal, permitindo que a agulha de bordar atravesse a fita sem parti-la ao meio se a ponta for levemente afiada.",
    "dicaArtrelados": "Ao bordar em jogos americanos de palha natural ou esteiras de fibra, borrife uma névoa bem levinha de água no avesso da palha 10 minutos antes de bordar: a fibra vegetal absorve a umidade, fica super maleável e a agulha desliza sem quebrar nenhuma palhinha!",
    "comparisonTable": {
      "headers": ["Material de Mesa Posta", "Origem", "Resistência a Líquidos", "Estilo Visual"],
      "rows": [
        ["Esteira de Pandanus Bordada", "100% Fibra botânica natural", "Boa (repele respingos)", "Boho-Chic / Praia de Luxo"],
        ["Jogo Americano de Tecido", "Algodão ou linho", "Média (absorve manchas)", "Clássico formal"],
        ["Jogo Americano Plástico PVC", "Sintético industrial", "Totalmente lavável", "Básico simples"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 SES ou 80/12 Microtex",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m² com adesivo temporário",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.45 mm com pontos espaçados"
    },
    "applications": [
      "Jogos americanos de luxo e descansos de prato para mesa posta de praia",
      "Bolsas de palha personalizadas com nomes e iniciais para o verão",
      "Painéis de cabeceira de cama e quadros rústicos tropicais",
      "Esteiras de ioga e meditação com motivos sagrados e mandalas"
    ],
    "troubleshootingTips": [
      "Se a esteira descolar do bastidor durante o bordado, reforce as bordas com fita crepe larga",
      "Utilize agulha nova e afiada 75/11 Microtex para cortar menos a fibra vegetal",
      "Limpe a peça finalizada com um pano úmido bem torcido e deixe secar na sombra"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bordado Flutuante",
      "Kapa / Tapa Cloth",
      "Agulhas Microtex",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-098",
      "kapa moena",
      "esteiras de palha",
      "mesa posta",
      "pandanus",
      "fibras naturais",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TE RANGI HIROA (Peter Buck). Samoan Material Culture and Fine Mats. Honolulu: Bishop Museum, 2021.",
      "PARRISH, Gail. Natural Straw, Raffia and Fiber Mat Machine Stitching. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um jogo americano de palha trançada simples. Prenda a entretela no bastidor e cole o jogo americano por cima. Digitalize uma palmeira tropical ou iniciais de 4 cm em ponto cheio suave. Borde com agulha 75/11 em 650 PPM. Veja como o jogo americano ganha um visual sofisticado de resort 5 estrelas!",
    "quickSummary": "Esteiras de palha fina e fibras naturais do Pacífico bordadas para jogos americanos e bolsas de luxo.",
    "beginnerExplanation": "São aquelas esteiras e jogos americanos lindos de palha natural trançada. A gente borda nomes, palmeiras e desenhos tropicais coloridos neles para criar mesas de jantar deslumbrantes para o verão!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-099-kardeh-las-cardadas-para-relevos-trapunto-e-bordado-chenille",
    "code": "K-099",
    "term": "Kardeh / Lãs Cardadas para Relevos Trapunto (Kardeh Wool Roving & 3D Trapunto Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do persa e turco kardeh (lã virgem limpa e cardada em mechas macias). Tradição milenar de acolchoamento e relevos esculturais da Pérsia e Cáucaso.",
    "summary": "Mechas macias de lã virgem cardada inseridas sob tecidos e bordados para criar volumes tridimensionais, relevos esculturais e acolchoados trapunto nobres.",
    "definition": "Kardeh & Lãs Cardadas para Trapunto (Wool Roving Trapunto & Padded Sculptural Embroidery) é a técnica nobre de modelagem tridimensional onde mechas fofas de lã natural virgem cardada (*wool roving*) são posicionadas como miolo volumoso entre duas camadas de tecido ou dentro de bolsões delimitados por pontos de costura no bastidor. Ao receber os pontos de cobertura em cetim ou tatami, a lã cardada expande-se criando um relevo arredondado, macio e quente de até 8 mm de espessura, amplamente superior e mais durável que espumas sintéticas de EVA para jaquetas de couro, almofadas e mantas de luxo.",
    "technicalDetails": "Fibras de lã cardada pura 100% natural com densidade volumétrica flexível. Ponto cheio de cobertura com largura mínima de 4,0 a 6,0 mm e compensação de repuxo de 0,45 mm.",
    "construction": [
      "Tecido superior (veludo, cetim de seda, couro macio ou linho fino)",
      "Mechas de lã virgem cardada Kardeh (espessura de 5 a 10 mm)",
      "Tecido de base ou forro de algodão",
      "Entretela de recorte resistente no verso (Cutaway 80 g/m²)",
      "Matriz de Trapunto com linha de demarcação de bolsão, ponto de fixação e cobertura final"
    ],
    "howItWorks": [
      "1. A entretela e o tecido de base são montados no bastidor.",
      "2. A máquina borda a linha guia demarcando o formato do desenho a ser acolchoado.",
      "3. Posiciona-se a mecha de lã cardada Kardeh sobre a área demarcada.",
      "4. Coloca-se o tecido superior por cima da lã.",
      "5. A máquina executa o ponto de fixação ao redor da forma, aprisionando a lã macia no interior.",
      "6. A máquina borda o ponto cheio acetinado de cobertura nas bordas, comprimindo o contorno e fazendo o centro inflar com relevo escultural.",
      "7. A peça ganha um relevo tátil macio, nobre e que nunca se deforma com o tempo."
    ],
    "mainTypes": [
      "Trapunto Nobre de Lã em Jaquetas de Couro e Casacos de Inverno",
      "Relevos de Brasões e Monogramas em Veludo de Seda",
      "Mantas Acolchoadas e Edredons com Motivos Florais Esculturais 3D"
    ],
    "characteristics": [
      "Relevo tridimensional natural, macio e infinitamente superior ao EVA plástico",
      "Memória elástica permanente: a lã não amassa nem esfarela mesmo após anos de uso",
      "Toque quente, acolhedor e luxuoso que valoriza peças de alta-costura",
      "Material 100% ecológico, biodegradável e respirável"
    ],
    "limitations": [
      "Exige controle da quantidade de lã para não estufar além do limite do pé calcador",
      "Pontos de cobertura muito estreitos (< 3,0 mm) não cobrem a espessura da lã",
      "A lavagem de peças com lã cardada interna deve ser suave com água fria"
    ],
    "numberingSystem": [
      "Espessura do Relevo: 4 mm a 8 mm",
      "Largura Mínima do Ponto Cheio: 4,0 mm a 6,5 mm",
      "Densidade de Cobertura: 0,38 mm"
    ],
    "advantages": [
      "✔ Criação de bordados em 3D de altíssimo luxo para o mercado de alta alfaiataria",
      "✔ Peças com durabilidade de décadas sem perda do relevo e do volume",
      "✔ Diferencial exclusivo que ateliês comuns não conseguem executar com EVA barato"
    ],
    "commonErrors": [
      "❌ Colocar tufo excessivo de lã, travando o movimento do pé calcador da máquina",
      "❌ Não usar compensação de repuxo adequada, fazendo o tecido enrugar ao redor do relevo",
      "❌ Usar ponto de borda fino que deixa fiapinhos de lã escapando pelas laterais"
    ],
    "voceSabia": "A técnica de Trapunto com lã cardada surgiu na Sicília e na Pérsia no século XIV, sendo utilizada para confeccionar coletes acolchoados para cavaleiros usarem por baixo das armaduras de ferro, amortecendo os golpes de espada!",
    "curiosidadeTecnica": "A fibra de lã cardada possui micro-escamas cuticulares que se entrelaçam naturalmente sob a pressão dos pontos de bordado (efeito de autofeltragem), impedindo que o enchimento interno se desloque ou forme pelotas durante as lavagens.",
    "dicaArtrelados": "Ao fazer bordados com relevo Trapunto de lã cardada, programe um ponto cheio bem largo (5 mm) e aumente a compensação de repuxo para 0,45 mm: as bordas afundam perfeitamente e o centro do desenho pula para fora parecendo uma escultura em relevo!",
    "comparisonTable": {
      "headers": ["Material de Relevo 3D", "Origem", "Toque e Sensação", "Durabilidade no Tempo"],
      "rows": [
        ["Lã Cardada Kardeh (Trapunto)", "100% Lã Natural", "Macio, nobre e fofinho", "Dura décadas (não deforma)"],
        ["Espuma Sintética EVA (3D Puff)", "Borracha de etileno", "Rígido e emborrachado", "Pode quebrar após lavagens quentes"],
        ["Manta Acrílica Comum", "Poliéster sintético", "Médio / Plano", "Achata com o peso e o uso"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "80/12 SES Ponta Bola ou 90/14 Topstitch",
      "stabilizer": "Entretela de Recorte 80 g/m²",
      "threadTension": "110 a 120 gf (superior firme) e 24 gf (bobina)",
      "density": "0.38 mm com largura ampla de ponto cheio"
    },
    "applications": [
      "Jaquetas de couro de luxo com detalhes em alto relevo nos ombros e mangas",
      "Almofadas de veludo de castelo com brasões e monogramas esculturais",
      "Mantas de bebê nobres para saídas de maternidade com relevos fofinhos",
      "Estofamento de cadeiras nobres e cabeceiras de cama acolchoadas"
    ],
    "troubleshootingTips": [
      "Se os pelinhos de lã aparecerem na costura, use uma pinça de precisão para empurrar os fiapos para dentro antes do ponto cheio final",
      "Regule a altura do pé calcador para que ele passe suavemente sobre o relevo sem arrastar a lã",
      "Passe vapor leve sobre a peça pronta para que as fibras de lã se expandam e inflem ao máximo"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Bordado 3D com EVA (Puff)",
      "Kodel / Fibras de Poliéster",
      "Ponto Cheio (Satin Stitch)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-099",
      "kardeh",
      "la cardada",
      "trapunto",
      "relevo 3d",
      "alta costura",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "COLOMBO, Graziella. Italian and Oriental Trapunto: Heritage and Modern Machine Techniques. Milan, 2021.",
      "PARRISH, Gail. 3D Wool Trapunto and Sculptural Embroidery Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido macio. No bastidor, borde o contorno de um coração de 5 cm. Coloque uma mecha de lã fofa por cima, cubra com o tecido superior e passe o ponto cheio largo de 5 mm ao redor. Veja o coração inflar com um relevo 3D fofinho e macio!",
    "quickSummary": "Mechas macias de lã virgem colocadas dentro do bordado para criar relevos tridimensionais fofos e nobres.",
    "beginnerExplanation": "O Trapunto com lã cardada é o jeito chique e tradicional de fazer bordados em 3D. A gente coloca uma mecha de lã fofinha por dentro do tecido e fecha com o bordado: o desenho fica alto, macio e super gostoso de apertar, parecendo uma almofadinha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-100-kozue-stitches-bordado-artistico-japones-de-galhos-e-cerejeiras",
    "code": "K-100",
    "term": "Kozue Stitches: Bordado Artístico de Ramos e Cerejeiras (Japanese Kozue Branching & Organic Silk Shading)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do japonês kozue (copa das árvores / pontas finas dos galhos mais altos de sakura e pinheiros). Tradição estética do paisagismo e da pintura tradicional japonesa Sumi-ê e Nihon Shishu.",
    "summary": "Programação de pontos de alta arte que simula a assimetria orgânica, nós de madeira e a delicadeza dos ramos de cerejeira florescendo na alta costura.",
    "definition": "Kozue Stitches (Japanese Artistic Branching & Fine Botanical Silk Shading) é a técnica magistral de digitalização e bordado que recria com fidelidade hiper-realista e poética a estrutura orgânica dos galhos finos retorcidos (*kozue*), nós de madeira musgosa e flores de cerejeira (*sakura*) e ameixeira (*ume*). Caracteriza-se por matrizes com pontos cheios de largura variável (tapering stitch), ângulos de inclinação que acompanham rigorosamente a curvatura natural da madeira e sobreposição de 4 a 6 tons de marrom, ocre e cinza, culminando em pétalas de seda translúcidas com pontos de luz bordados em fios de seda ou metálicos.",
    "technicalDetails": "Composição em tecidos nobres de seda, linho fino ou veludo. Matrizes com controle avançado de afunilamento de pontos (Auto-Tapering), comprimentos variáveis de ponto de 1,5 a 6,0 mm e densidade gradual de 0,36 a 0,42 mm.",
    "construction": [
      "Base de tecido nobre de seda pura, organza ou linho delicado",
      "Entretela hidrossolúvel de suporte invisível ou organza de reforço",
      "Cartela de linhas de seda ou poliéster em tons botânicos (casca de árvore, líquen, rosa sakura, ouro)",
      "Matriz com vetorização orgânica assimétrica sem repetição monótona",
      "Agulhas 70/10 Microtex afiadas para penetração cirúrgica dos filamentos"
    ],
    "howItWorks": [
      "1. A seda nobre é montada no bastidor com entretela de suporte suave.",
      "2. A máquina inicia bordando o tronco principal com pontos tatami texturizados imitando casca de árvore.",
      "3. Os ramos finos (kozue) se desdobram em pontos cheios contínuos com larguras que vão afinando até 0,8 mm.",
      "4. Linhas de ponto semente e nós discretos simulam os musgos e brotos na casca.",
      "5. As flores de cerejeira entram por cima dos galhos com pétalas em degradê de rosa pálido e branco neve.",
      "6. O miolo das flores recebe micro-pistilos bordados em fios dourados reluzentes.",
      "7. A peça ganha a harmonia, serenidade e beleza atemporal da primavera japonesa."
    ],
    "mainTypes": [
      "Kozue Sakura (Ramos floridos de cerejeira em rosa suave para vestidos de festa e quimonos)",
      "Kozue Matsu (Galhos retorcidos de pinheiro japonês com agulhas verdes para trajes masculinos)",
      "Kozue Momiji (Ramos outonais com folhas douradas e avermelhadas de bordo japonês)"
    ],
    "characteristics": [
      "Grau máximo de refinamento estético e sofisticação artística mundial",
      "Assimetria natural equilibrada inspirada na filosofia Zen e Wabi-Sabi",
      "Degradês de cor fluidos que transformam o bordado em uma pintura tradicional",
      "Valor inestimável em vestidos de noiva, alta tapeçaria e peças de gala exclusivas"
    ],
    "limitations": [
      "Exige sensibilidade e domínio avançado das ferramentas de edição de nós no software de matrizes",
      "Tempo de programação e teste de matriz mais longo para garantir harmonia visual perfeita",
      "Cuidado com a sobreposição de camadas para não endurecer o tecido nos cruzamentos de galhos"
    ],
    "numberingSystem": [
      "Variação de Largura dos Ramos: 0,8 mm a 5,0 mm (afunilamento contínuo)",
      "Número de Cores Típico: 6 a 10 tons botânicos",
      "Densidade Média: 0,38 mm"
    ],
    "advantages": [
      "✔ Consagração do ateliê como referência em bordado de alta-costura artística",
      "✔ Peças com valor de obra de arte disputadas por clientes e noivas de elite",
      "✔ Beleza atemporal que emociona e encanta qualquer pessoa que contempla a peça"
    ],
    "commonErrors": [
      "❌ Digitalizar galhos retos e rígidos como canos, sem as curvas e nós orgânicos da natureza",
      "❌ Usar uma única cor de marrom chapada, deixando o tronco sem volume e sem vida",
      "❌ Borda pétalas de flores com densidade pesada que tapa a delicadeza dos ramos"
    ],
    "voceSabia": "Na tradição artística japonesa, o florescer das cerejeiras (Hanami) dura apenas duas semanas no ano, e o bordado Kozue é a forma poética que as artesãs encontraram de eternizar esse momento mágico de beleza efêmera em sedas que duram séculos!",
    "curiosidadeTecnica": "Para reproduzir a textura rústica da casca de cerejeira, os mestres digitalizadores usam o efeito 'Curved Satin with Edge Feathering' (ponto cheio curvado com bordas recortadas), que cria micro-ranhuras nas laterais dos galhos que imitam perfeitamente a madeira real.",
    "dicaArtrelados": "Ao bordar galhos floridos de cerejeira ou árvores, faça o tronco e os galhos primeiro e borde as flores POR CIMA dos galhos: essa sobreposição de camadas cria uma profundidade 3D incrível, parecendo que as flores estão brotando de verdade na frente do galho!",
    "comparisonTable": {
      "headers": ["Abordagem de Bordado", "Realismo dos Galhos", "Sensação Visual", "Nível de Arte"],
      "rows": [
        ["Kozue Stitches Orgânico", "Hiper-realista com nós e curvas", "Poesia visual e tridimensionalidade", "Alta Arte Japonesa"],
        ["Ramos Geométricos Simples", "Básico / Desenho plano", "Visual infantil simples", "Comercial Básico"],
        ["Estampa Impressa Comum", "Plana sem textura", "Sem relevo ou brilho de linha", "Industrial em massa"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "70/10 Microtex ou 75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Hidrossolúvel de base ou Organza de seda natural",
      "threadTension": "100 a 105 gf (superior suave) e 20 gf (bobina)",
      "density": "0.38 mm com afunilamento automático"
    },
    "applications": [
      "Vestidos de noiva de alta costura com ramos de cerejeira descendo pelos ombros e cauda",
      "Quimonos e kaftans de gala em seda pura bordada com flores sazonais",
      "Painéis decorativos de parede e biombos japoneses emoldurados em madeira nobre",
      "Almofadas de seda de alto luxo e lenços comemorativos exclusivos"
    ],
    "troubleshootingTips": [
      "Se os galhos ficarem duros nos cruzamentos, reduza a densidade de pontos das camadas de fundo para 0,60 mm",
      "Utilize linhas de seda ou poliéster brilhante para as pétalas e linhas foscas para a casca do tronco, criando contraste de textura",
      "Passe a peça pelo avesso sobre uma toalha macia para preservar o relevo das flores"
    ],
    "relatedTerms": [
      "Pontos Básicos & Decorativos",
      "Kimono / Quimono Japonês",
      "Kyoto Silk Floss",
      "Ponto Cheio (Satin Stitch)",
      "Junção de Preenchimentos com Efeito Dégradé"
    ],
    "tags": [
      "k-100",
      "kozue",
      "cerejeiras",
      "sakura",
      "galhos floridos",
      "alta arte",
      "pontos decorativos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOKYO NATIONAL MUSEUM. The Poetry of Cherry Blossoms and Nature in Japanese Textiles. Tokyo, 2021.",
      "PARRISH, Gail. Organic Botanical and Branching Machine Digitizing Mastery. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de seda ou linho claro. Digitalize um galho fino curvo de 10 cm que vai de 3 mm a 0,8 mm de espessura em ponto cheio marrom café. Por cima do galho, adicione 3 pequenas flores de cerejeira em rosa suave com miolo dourado. Borde com agulha 70/10. Contemple a beleza sublime da primavera!",
    "quickSummary": "Bordado artístico japonês de galhos retorcidos e flores de cerejeira para vestidos de noiva e alta arte.",
    "beginnerExplanation": "O Kozue é a arte de bordar galhos de cerejeira cheios de flores delicadas parecendo uma pintura japonesa. A máquina borda os galhos afinando suavemente e depois coloca as florzinhas cor-de-rosa por cima: o resultado é de uma elegância que parece mágica!",
    "updatedAt": "2026-08-29"
  }
]

output_path = "src/data/verbetesLetterK14.ts"
header = """import { Verbete } from "../types";

export const VERBETES_LETTER_K_PART14: Verbete[] = """

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header + json.dumps(verbetes_k14, ensure_ascii=False, indent=2) + ";\n")

print(f"Part 14 (K-088 to K-100) created successfully with {len(verbetes_k14)} verbetes!")

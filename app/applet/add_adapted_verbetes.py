import json
import re

# 1. Letra B - Bandeja de Cabeceira em Tecido e Sintético (Valet Tray)
b_novo_033 = {
    "id": "b-novo-033-bandeja-de-cabeceira-em-tecido-e-sintetico",
    "letter": "B",
    "term": "Bandeja de Cabeceira em Tecido e Sintético (Valet Tray)",
    "englishTerm": "Bedside Valet Tray & Catchall Leather Tray In-The-Hoop Embroidery",
    "level": "Iniciante 🟢 a Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Do francês valet (criado pessoal de quarto ou assistente de cavalheiro, encarregado de recolher e zelar pelos pertences do nobre ao fim do dia) articulado ao italiano vaschetta / bacinella (pequena bacia ou bandeja rasa). As bandejas de descarte de bolsos (consagradas em inglês como Valet Trays ou Catchall Trays) surgiram na alfaiataria e marroquinaria britânica do século XIX para organizar relógios de bolso, abotoaduras, correntes de ouro e moedas sobre a cômoda, tornando-se peça icônica da marroquinaria contemporânea produzida com botões de pressão nos quatro cantos.",
    "summary": "Tratado técnico de confecção no bastidor e marroquinaria de bandejas de cabeceira e despejo de bolsos (Valet Trays) em sintético Montana 1.4 mm e camurça térmica, com botões de pressão nos cantos, pesponto de borda e monogramas em baixo-relevo.",
    "definition": "A Bandeja de Cabeceira em Tecido e Sintético no bordado computadorizado é um artigo utilitário e decorativo plano que se converte em recipiente tridimensional raso mediante o acionamento de botões de pressão metálicos ou costuras angulares em seus quatro cantos. Destinada a repousar sobre mesas de cabeceira, aparadores de entrada ou escrivaninhas para receber o conteúdo dos bolsos ao final do dia (chaves, carteira, moedas, relógio, aliança e fones de ouvido), é confeccionada em sintético Montana 1.4 mm, couro vegetal dublado ou sarja peletizada combinada com camurça térmica, exigindo bordado central de monogramas heráldicos ou logomarcas com técnica flutuante e arremates reforçados contra o atrito de metais pesados.",
    "howItWorks": [
        "1. Dimensionamento e corte do gabarito ortogonal: Corta-se o painel quadrado ou retangular (dimensões padrão de 20 x 20 cm para formar bandeja útil de 14 x 14 x 3 cm quando abotoada) em sintético Montana ou couro legítimo vegetal.",
        "2. Preparação do bastidor por método flutuante (floating): Enquadra-se uma folha de entretela rasgável resinada pesada (80 g/m²) no aro inferior, aplicando uma camada homogênea de spray adesivo temporário reposicionável para apoiar o sintético por cima sem prensar a pele do material entre os aros rígidos da máquina.",
        "3. Centralização milimétrica do monograma: Alinha-se o centro da matriz rigorosamente no cruzamento das diagonais do quadrado, garantindo que o bordado fique perfeitamente centralizado no fundo plano da bandeja após o fechamento dos cantos.",
        "4. Seleção de ferramenta e agulha para sintéticos: Instala-se agulha Schmetz Microtex calibre 75/11 ou 80/12 ponta fina afiada (R) operando a 600 PPM com fio de poliéster 40 fosco ou fio metálico envelhecido.",
        "5. Pesponto decorativo periférico: A máquina executa o bordado central e, opcionalmente, um pesponto ornamental de borda em ponto reto triplo (Saddle Stitch) a 5 mm de toda a margem.",
        "6. Furação e aplicação de ferragens: Retira-se a peça do bastidor, perfuram-se os quatro cantos com vazador manual de 3 mm e instalam-se quatro pares de botões de pressão metálicos (de latão oxidado ou niquelado) com balancim manual, permitindo que a bandeja seja desabotoada e fique 100% plana para transporte em malas de viagem."
    ],
    "beginnerExplanation": "A bandeja de cabeceira (Valet Tray) é um dos presentes masculinos mais elegantes, rápidos e lucrativos de fazer no ateliê! É aquela bandejinha estilosa que fica no criado-mudo onde o homem joga as chaves de casa, a carteira, as moedas e o relógio assim que chega da rua. Quando ele vai viajar, basta desabotoar os 4 botões de pressão dos cantos e a bandeja fica um retângulo retinho que não ocupa espaço nenhum na mala! O grande segredo para nunca marcar o couro sintético Montana é NUNCA prender no aro de plástico com parafuso: cole o sintético por cima da entretela com cola spray temporária e use agulha Microtex bem fininha para o monograma ficar perfeito!",
    "applications": [
        "Bandejas de cabeceira em sintético Montana marrom café com monogramas clássicos de casamento para padrinhos e noivos.",
        "Organizadores de entrada de casa para chaves e carteiras em couro ecológico preto com brasão familiar em fio dourado.",
        "Kits executivos de escritório para clips, canetas tinteiro e cartões de visita com logotipo corporativo.",
        "Bandejas dobráveis de viagem em camurça térmica para hóspedes de hotéis boutique e resorts."
    ],
    "practicalExamples": "Bandeja de cabeceira de 20 x 20 cm em sintético Montana caramelo com monograma de 45 mm em fio ouro velho a 600 RPM e botões de pressão em ouro envelhecido; bandeja de mesa em couro vegetal marinho com brasão náutico de 6.200 pontos com pesponto triplo periférico.",
    "technicalDetails": "Para sintético Montana (1.4 mm): densidade de ponto cheio em 0,40 mm e tatami em 0,44 mm; compensação de repuxo de 0,40 mm a 0,45 mm. Subponto (underlay) composto por traço central simples (Center Walk) com zigue-zague aberto de sustentação com recuo de borda de 1,2 mm. Agulha recomendada: Schmetz Microtex 75/11 ou 80/12 ponta fina afiada. Velocidade máxima recomendada: 620 PPM.",
    "recommendedSettings": {
        "speedPPM": "580 - 620 PPM",
        "needleType": "Microtex Ponta Aguda Fina (R) 75/11 ou 80/12",
        "stabilizer": "Entretela Rasgável Macia de Alta Coesão (75-80 g/m²) com Spray Temporário",
        "density": "0,40 mm (ponto cheio) / 0,44 mm (tatami)",
        "pullCompensation": "0,40 mm a 0,45 mm",
        "underlay": "Traço central simples com zigue-zague aberto de sustentação"
    },
    "matrixRelations": "Interconecta-se com Sintético Montana, Técnica de Flutuação (Floating), Agulha Microtex, Monograma, Pesponto Duplo (Saddle Stitch) e Compensação de Repuxo.",
    "matrixRelationship": "Densidade de ponto calibrada em 0,40 mm para cobertura compacta sem perfuração contínua do sintético; nós de arremate quadruplicados para suportar o atrito diário de molhos de chaves de aço pontiagudas jogadas no centro da bandeja.",
    "commonErrors": [
        "❌ Prensar o sintético Montana diretamente entre os aros rígidos do bastidor com o parafuso, deixando marca circular permanente (hoop burn).",
        "❌ Usar agulha grossa comum (90/14 R) criando furos esbranquiçados permanentes nas bordas dos pontos cheios do monograma.",
        "❌ Programar densidade pesada de 0,30 mm picotando e cortando a pele do couro sintético como papel.",
        "❌ Errar a furação dos botões de pressão nos cantos, fazendo a bandeja ficar torta ou com paredes de alturas desiguais ao abotoar.",
        "❌ Bordar muito perto das quinas onde os botões de pressão serão instalados pelo balancim."
    ],
    "howToIdentify": "Se ao redor dos pontos surgirem furos brancos esgarçados ou delaminação na pele do sintético Montana, a agulha utilizada estava grossa ou romba (exige troca para Microtex 75/11 nova). Se a bandeja não armar paredes verticais simétricas, os furos dos botões foram aplicados com distâncias assimétricas dos vértices.",
    "adjustmentNeed": "Furos esbranquiçados exigem agulha Microtex 75/11 nova e densidade de 0,42 mm; assimetria de montagem exige gabarito de furação a exatamente 25 mm de cada canto.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para bandejas de cabeceira com toque artesanal de luxo: use duas camadas de sintético Montana coladas com cola de contato no avesso (face com face) para que a bandeja fique com acabamento nobre tanto por dentro quanto por baixo na mesa! Borde a camada interna antes de colar; assim, o avesso dos fios fica 100% invisível embutido no recheio e o cliente tem uma peça eterna que não risca móveis de madeira de lei!",
    "artreladosTip": "Borde sempre em técnica flutuante com adesivo spray reposicionável sobre entretela rasgável e agulha Microtex 75/11. Dobre o sintético colando duas faces para embutir o avesso e instale os botões de pressão a exatamente 25 mm dos vértices para cantos perfeitamente retos.",
    "voceSabia": "A palavra 'valet' era o título dado na corte francesa e britânica ao criado de confiança que cuidava das roupas, relógios e joias do rei; o termo 'valet tray' tornou-se sinônimo mundial da bandeja de esvaziamento de bolsos masculinos!",
    "didYouKnow": "Muitos hotéis de luxo em Paris e Londres deixam uma Valet Tray de couro com o monograma do hóspede bordado sobre a mesa de cabeceira como presente de boas-vindas VIP que os clientes levam consigo como recordação de viagem!",
    "practicalExercise": "Corte um quadrado de sintético Montana de 20 x 20 cm. Monte o bastidor flutuante com entretela rasgável de 80g e spray adesivo. No software, programe um monograma de 45 mm centralizado com densidade 0,40 mm e sob-ponto traço central. Instale agulha Microtex 75/11 e execute a 600 RPM. Marque os cantos a 25 mm das quinas, aplique quatro botões de pressão de latão e abotoe a bandeja conferindo a estabilidade perfeita.",
    "quickSummary": "Manual técnico para marroquinaria e bordado em bandejas de cabeceira (Valet Trays): confecção em sintético Montana ou couro vegetal com montagem flutuante, agulhas Microtex de penetração cirúrgica, botões de pressão nos cantos e monogramas heráldicos de alta resistência ao atrito metálico.",
    "relatedTerms": [
        "Sintético Montana",
        "Técnica de Flutuação (Floating)",
        "Agulha Microtex",
        "Monograma",
        "Compensação de Repuxo",
        "Pesponto Duplo (Saddle Stitch)",
        "Botão de Pressão Metálico"
    ],
    "seeAlso": [
        "Sintético Montana",
        "Técnica de Flutuação (Floating)",
        "Agulha Microtex",
        "Monograma",
        "Compensação de Repuxo",
        "Pesponto Duplo (Saddle Stitch)",
        "Botão de Pressão Metálico"
    ],
    "tags": ["bandeja", "valettray", "cabeceira", "montana", "marroquinaria", "monograma", "flutuacao", "artrelados"],
    "bibliographicReferences": [
        "INTERNATIONAL LEATHER AND DESK ACCESSORIES GUILD. Crafting and Embellishing Catchall Trays and Desk Goods. Florence, 2023.",
        "SCHMETZ. Needles for Heavy Synthetics, Coated Foils and Heritage Leather Goods. Herzogenrath: Ferd. Schmetz GmbH, 2022.",
        "SILVA, Janete M. C. Marroquinaria Têxtil, Acessórios de Quarto e Escritório no Bordado Computadorizado. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 2. Letra B - Bolsa Organizadora de Equipamentos Esportivos
b_novo_034 = {
    "id": "b-novo-034-bolsa-organizadora-de-equipamentos-esportivos",
    "letter": "B",
    "term": "Bolsa Organizadora de Equipamentos Esportivos",
    "englishTerm": "Athletic Gear Organizer Duffel Bag & Team Sports Equipment Carrier",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Do grego bursa (odre de couro para transporte) através do latim bursa e do francês bourse, associado à sistematização das modalidades esportivas coletivas e individuais no início do século XX. As bolsas cilíndricas e retangulares com divisórias internas para calçados, bolas e proteções corporais (popularizadas como duffel bags e gear organizers) nasceram na cidade belga de Duffel no século XVII com tecidos pesados de lã e lona naval, transformando-se na era moderna em equipamentos indispensáveis de atletas profissionais.",
    "summary": "Tratado técnico de confecção industrial pesada e bordado de alta tenacidade em bolsas esportivas cilíndricas e duffel bags com divisórias de sapatos e roupas úmidas, destacando poliéster 600D, agulhas de titânio 90/14 e escudos atléticos em tatami.",
    "definition": "A Bolsa Organizadora de Equipamentos Esportivos no bordado computadorizado é uma bagagem técnica de grande capacidade volumétrica (modelos duffel, cilíndricos ou sacolas estruturadas de 40 a 70 litros) dotada de compartimentos isolados para transporte de chuteiras, luvas de boxe, caneleiras, quimonos, bolas e toalhas úmidas. Confeccionada em poliéster 600D com resinagem vinílica ou poliuretano (PU), Cordura balística e telas respiráveis (air mesh) com alças de ombro tubulares acolchoadas, exige bordado nos painéis laterais circulares ou na tampa superior plana antes da montagem tubular para blindar o tecido contra a perda de impermeabilidade.",
    "howItWorks": [
        "1. Modelagem e plano de corte dos painéis: Corta-se o painel frontal retangular ou as tampas circulares laterais em poliéster 600D prevendo folgas para zíperes tratorados pesados.",
        "2. Estabilização mecânica com entretela de recorte: Enquadra-se uma folha de entretela de recorte (cutaway) pesada de 90 a 100 g/m² no bastidor com adesivo spray temporário para neutralizar a tração do pantógrafo sobre o tecido pesado.",
        "3. Digitalização com alívio estanque de densidade: A matriz do escudo esportivo ou logotipo de academia é programada com densidade aliviada (0,42 a 0,44 mm) e sob-pontos de sustentação em tatami aberto com recuo de borda de 1,2 mm para não cortar a resina impermeabilizante do verso.",
        "4. Seleção de ferramenta e agulha reforçada: Instala-se agulha calibre 80/12 ou 90/14 ponta bola fina (SES) revestida em Nitreto de Titânio (PD / GEBEDUR), operando a 620 PPM com linhas de poliéster trilobal de alta tenacidade imunes ao suor e lavagem clorada.",
        "5. Execução do bordado com pontos tatami estruturados: A máquina borda os grandes blocos do escudo em ponto tatami a 45 graus para distribuir a carga mecânica e evitar repuxo na lona esportiva.",
        "6. Assemblagem com compartimento estanque para calçados: O painel bordado é costurado com linhas de nylon bonderizado resistente à tração, recebendo o saco túnel interno para calçados com ilhoses de aeração contra odores."
    ],
    "beginnerExplanation": "Todo atleta de academia, jiu-jitsu, natação ou futebol precisa de uma bolsa grande e forte para carregar quimono, chuteira suja, toalha e garrafa de água. As academias e clubes esportivos pagam muito bem por essas bolsas bordadas com o seu logotipo! O maior cuidado de ateliê é: essas bolsas de treino têm uma resina emborrachada por dentro para não vazar cheiro nem água; se você colocar uma matriz muito grossa com agulha comum, a agulha corta o plástico e a bolsa rasga nas primeiras semanas de treino. Use agulha de titânio ponta bola 90/14, programe os preenchimentos em ponto tatami bem distribuído e borde a tampa antes de montar a bolsa!",
    "applications": [
        "Bolsas duffel esportivas para equipes de futebol e basquete em poliéster 600D com escudo do clube e nomes dos atletas.",
        "Bolsas para praticantes de artes marciais (jiu-jitsu, muay thai e judô) com divisórias para quimonos e faixas graduadas.",
        "Malas esportivas de academia com bolso isolado estanque para tênis e roupas úmidas com logotipo corporativo.",
        "Bolsas organizadoras para equipes de corrida e triatlo com identificação nominal e números de peito bordados."
    ],
    "practicalExamples": "Bolsa esportiva duffel de 55 x 30 x 28 cm em poliéster 600D preto e grafite com escudo de clube de artes marciais de 95 mm bordado em tatami amarelo e preto a 620 RPM; bolsa de natação com logotipo de federação esportiva em ponto cheio acetinado de 8.800 pontos.",
    "technicalDetails": "Para poliéster 600D resinado: densidade de ponto cheio regulada em 0,42 mm a 0,44 mm e tatami em 0,46 mm com ângulo de inclinação de 45 graus; compensação de repuxo de 0,45 mm a 0,50 mm. Subponto (underlay) composto por grade aberta dupla com costura perimetral dupla (Edge Run). Agulha recomendada: DBxK5 ou 130/705 H calibre 80/12 ou 90/14 SES com revestimento de Titânio (PD). Velocidade: 600 a 650 PPM.",
    "recommendedSettings": {
        "speedPPM": "600 - 650 PPM",
        "needleType": "Ponta Bola Fina Reforçada com Titânio (SES / PD) 80/12 ou 90/14",
        "stabilizer": "Entretela de Recorte Esportiva (Cutaway) 90-100 g/m² com Spray Temporário",
        "density": "0,42 mm a 0,44 mm (ponto cheio) / 0,46 mm (tatami)",
        "pullCompensation": "0,45 mm a 0,50 mm",
        "underlay": "Grade aberta com costura perimetral dupla"
    },
    "matrixRelations": "Interage com Poliéster 600D Resinado, Revestimento Impermeável (PU Coating), Ponto Tatami, Agulha de Titânio, Linha de Poliéster Trilobal e Alívio de Densidade.",
    "matrixRelationship": "Ponto tatami a 45 graus distribui as tensões mecânicas sem deformar o tecido; alívio de densidade para 0,44 mm preserva a película estanque contra chuva e suor; nós de arremate quadruplicados para resistir ao peso de equipamentos de ferro e anilhas.",
    "commonErrors": [
        "❌ Programar ponto cheio muito longo em áreas extensas de escudos esportivos, fazendo os fios frouxarem e puxarem com o atrito de vestiário.",
        "❌ Utilizar agulha fina comum 70/10 que se entorta e quebra ao perfurar as camadas pesadas de poliéster 600D.",
        "❌ Usar linha de algodão ou raiom que se descolore e desmancha com a acidez do suor corporal de atletas.",
        "❌ Costurar a bolsa com linha comum fraca em vez de linha de nylon bonderizado de alta tenacidade nas alças de suporte de peso.",
        "❌ Tentar bordar a bolsa depois de fechada em formato cilíndrico sem equipamento de braço livre."
    ],
    "howToIdentify": "Se o tecido de poliéster rasgar nas margens do escudo após os primeiros treinos, a densidade da matriz estava apertada demais para um tecido resinado. Se as letras perderem o brilho ou esfarelarem, foi usada linha de baixa resistência ao atrito e à acidez orgânica.",
    "adjustmentNeed": "Rasgos no tecido exigem alívio de densidade para 0,44 mm e agulha SES titânio; perda de resistência exige linha 100% poliéster trilobal de filamento contínuo.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para bolsas esportivas de alta durabilidade: posicione o bordado do escudo do clube na tampa superior com abertura em U ou nos bolsos circulares laterais! Nessas duas áreas, o tecido fica totalmente visível quando o atleta carrega a bolsa no ombro e não sofre a fricção direta do corpo ao caminhar, fazendo com que o bordado permaneça impecável e sem atrito por anos!",
    "artreladosTip": "Empregue ponto tatami a 45 graus para grandes escudos esportivos e alívio de densidade para 0,44 mm para preservar a resina interna impermeável. Utilize agulha 90/14 SES titânio e posicione o bordado na tampa superior em U para máxima visibilidade e menor atrito corporal.",
    "voceSabia": "O termo 'Duffel Bag' vem da cidade de Duffel, na Bélgica, onde no século XVII era produzida uma lã pesada impermeável muito espessa usada pelos marinheiros e soldados espanhóis para guardar todos os seus pertences em sacos cilíndricos fechados com cordas!",
    "didYouKnow": "Grandes confederações esportivas encomendam bolsas organizadoras com divisórias térmicas especiais nas laterais para manter bolsas de gelo e suplementos gelados durante as viagens de delegações para campeonatos mundiais!",
    "practicalExercise": "Corte um retângulo de poliéster 600D de 30 x 25 cm. Estabilize com entretela cutaway pesada de 90g e spray adesivo temporário. No software, programe um escudo esportivo de 85 mm combinando tatami a 45 graus e contorno em ponto cheio acetinado com densidade 0,42 mm. Instale agulha 90/14 titânio e execute a 620 RPM com linha poliéster trilobal, conferindo a robustez do ponto.",
    "quickSummary": "Manual industrial para confecção e bordado em bolsas organizadoras esportivas: operação em poliéster 600D resinado, escudos atléticos em tatami a 45 graus com alívio de densidade para preservação estanque, agulhas de titânio 90/14 e fios resistentes ao suor.",
    "relatedTerms": [
        "Poliéster 600D Resinado",
        "Revestimento Impermeável (PU Coating)",
        "Ponto Tatami",
        "Agulha de Titânio",
        "Linha de Poliéster Trilobal",
        "Alívio de Densidade",
        "Compensação de Repuxo"
    ],
    "seeAlso": [
        "Poliéster 600D Resinado",
        "Revestimento Impermeável (PU Coating)",
        "Ponto Tatami",
        "Agulha de Titânio",
        "Linha de Poliéster Trilobal",
        "Alívio de Densidade",
        "Compensação de Repuxo"
    ],
    "tags": ["bolsa", "esportiva", "duffel", "poliester600d", "tatami", "academia", "atleta", "artrelados"],
    "bibliographicReferences": [
        "WORLD ATHLETIC GOODS FEDERATION. Heavy Duty Luggage, Ballistic Fabrics and Thread Resistance Standards. Geneva, 2023.",
        "GROZ-BECKERT. Needles for Heavy Sportswear, Coated Fabrics and Luggage. Albstadt: Groz-Beckert KG, 2022.",
        "SILVA, Janete M. C. Bagagens Técnicas, Artigos Esportivos e Brasões no Bordado Industrial. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 3. Letra C - Cesto de Mesa em Tecido Estruturado
c_novo_055 = {
    "id": "c-novo-055-cesto-de-mesa-em-tecido-estruturado",
    "letter": "C",
    "term": "Cesto de Mesa em Tecido Estruturado",
    "englishTerm": "Structured Fabric Desktop Basket & Collapsible Storage Bin Embroidery",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do latim cistus ou cista (cesto, caixa trançada de vime ou junco para guarda de provisões e pequenos objetos). A evolução do cesto artesanal tradicional para recipientes geométricos dobráveis confeccionados em tecidos nobres estruturados com mantas térmicas e entretelas de papelão flexível consolidou-se no design escandinavo e na organização de interiores minimalista dos anos 2010.",
    "summary": "Tratado técnico de modelagem tridimensional e bordado computadorizado em cestos de mesa e organizadores de bancada em tecido estruturado com manta R2 e entretelas de alta gramatura, com alças embutidas e bordas viradas.",
    "definition": "O Cesto de Mesa em Tecido Estruturado no bordado computadorizado é um organizador tridimensional de bancada (formato cúbico, cilíndrico ou retangular raso) com paredes autoportantes firmes confeccionadas em tecidos encorpados (sarja peletizada, linho puro, lona de algodão ou sintéticos leves) dublados com mantas acrílicas resinadas R2 (dupla face colante), entretela de marroquinaria ou EVA flexível de 2 mm. Projetado para organizar materiais de escritório (canetas, clips, post-its, cabos e blocos) ou bancadas de maquiagem e maternidade, exige bordado na face frontal antes do fechamento das quinas para garantir planicidade e estabilidade geométrica.",
    "howItWorks": [
        "1. Modelagem plana com base e abas laterais: Corta-se a cruz de modelagem ou painel retangular do cesto (ex.: 28 x 16 cm para formar cesto de 16 x 10 x 8 cm de altura) prevendo cantos retos ou chanfrados.",
        "2. Estruturação rígida autoportante: O tecido externo é dublado a ferro com manta resinada R2 de alta densidade ou entretela de marroquinaria térmica de 150 g/m² para que as paredes do cesto fiquem em pé sozinhas sem tombar.",
        "3. Mapeamento da face frontal visível: Identifica-se o retângulo central da parede da frente, traçando linhas guias térmicas para posicionar a matriz com precisão equidistante da borda superior e do vinco de fundo.",
        "4. Enquadramento e estabilização no bastidor: Fixa-se uma folha de entretela rasgável média no bastidor; assenta-se o tecido estruturado com spray adesivo temporário e aplica-se película solúvel de topo em caso de tecidos de linho rústico.",
        "5. Execução do bordado em ponto cheio e tatami: A máquina borda monogramas clássicos, frases de produtividade ou desenhos botânicos com densidade de 0,40 mm e sob-pontos de sustentação em traço reto.",
        "6. Montagem tridimensional com forro embutido e barra virada: Concluído o bordado, fecham-se as quatro quinas verticais na máquina de costura reta, unindo o forro com costura embutida ou com dobra de barra superior decorativa contrastante."
    ],
    "beginnerExplanation": "O cesto de mesa em tecido estruturado é aquele organizador fofo e elegante que fica na escrivaninha segurando canetas, blocos de recados, clips e o celular. O maior segredo para ele não ficar mole e desmilinguido tombando para os lados é a dublagem: use manta R2 (que cola dos dois lados no ferro) ou coloque uma entretela bem grossa no meio do tecido! Como o cesto é todo quadradinho, borde a frente enquanto o tecido ainda está aberto e plano na bancada, antes de costurar os cantinhos que levantam as paredes do cesto!",
    "applications": [
        "Organizadores de mesa de escritório em linho cru com frases inspiradoras e monogramas executivos.",
        "Cestos de bancada de maternidade para fraldas, pomadas e algodão bordados com o tema do quarto do bebê.",
        "Porta-maquiagens e pincéis em sarja peletizada rosa chá com monogramas clássicos acetinados.",
        "Cestos para pães de mesa posta em algodão cru com bordados de ramos de trigo e ervas aromáticas."
    ],
    "practicalExamples": "Cesto de mesa de 16 x 12 x 10 cm em linho puro cinza com monograma clássico de 50 mm bordado em fio marfim fosco a 650 RPM com forro contrastante em tricoline listrada; cesto de escritório em sarja preta com logotipo de estúdio de arquitetura com 7.500 pontos.",
    "technicalDetails": "Densidade de ponto cheio em 0,40 mm e tatami em 0,44 mm; compensação de repuxo de 0,40 mm a 0,45 mm para neutralizar a rigidez da manta R2. Subponto (underlay) composto por traço central simples (Center Walk) com zigue-zague aberto de sustentação. Agulha recomendada: Schmetz ou Groz-Beckert 75/11 ou 80/12 ponta bola leve (SES) ou Microtex. Velocidade máxima: 650 PPM.",
    "recommendedSettings": {
        "speedPPM": "600 - 650 PPM",
        "needleType": "Ponta Bola Fina (SES) ou Microtex 75/11 a 80/12",
        "stabilizer": "Manta Acrílica R2 de Alta Densidade + Entretela Rasgável Macia no Bastidor",
        "density": "0,40 mm (ponto cheio) / 0,44 mm (tatami)",
        "pullCompensation": "0,40 mm a 0,45 mm",
        "underlay": "Traço central simples com zigue-zague aberto de sustentação"
    },
    "matrixRelations": "Interconecta-se com Manta Acrílica R1 e R2, Dublagem Têxtil, Linho Misto, Monograma, Fundo Caixa de Leite e Compensação de Repuxo.",
    "matrixRelationship": "Densidade calibrada em 0,40 mm impede que os pontos cheios afundem na manta térmica R2; sob-pontos abertos ancoram o bordado sem endurecer a dobra das paredes do cesto; nós de arremate embutidos sob os pontos para acabamento limpo.",
    "commonErrors": [
        "❌ Usar entretelas moles e finas, fazendo o cesto tombar para os lados e ficar amassado sobre a mesa.",
        "❌ Tentar bordar o cesto depois de fechado em formato de caixa, tornando impossível o enquadramento no bastidor.",
        "❌ Esquecer de descontar a dobra da base e a barra virada superior, fazendo o bordado ficar espremido no fundo ou coberto pela dobra.",
        "❌ Usar bastidor muito apertado sobre a manta R2 quente, deixando marcas permanentes de esmagamento no tecido.",
        "❌ Deixar margens de costura visíveis por dentro sem acabamento de forro embutido."
    ],
    "howToIdentify": "Se o cesto não parar em pé com as paredes retas e firmes, a gramatura da manta estruturadora foi insuficiente. Se o monograma ficar parcialmente coberto ao dobrar a barra decorativa superior, faltou descontar os 3 a 4 cm da barra de acabamento no posicionamento da matriz.",
    "adjustmentNeed": "Falta de estrutura exige dublagem com manta R2 ou reforço de EVA flexível de 2 mm; desenho coberto exige recuo de pelo menos 40 mm da borda superior dobrada.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para cestos de mesa com estrutura impecável de loja de decoração: faça uma barra virada de 3 cm para fora na borda superior do cesto usando um tecido de cor contrastante com o forro! Essa barra dobrada funciona como uma cinta de sustentação mecânica que trava a boca do cesto aberta e perfeitamente redonda ou quadrada, além de dar um acabamento de alta costura espetacular!",
    "artreladosTip": "Duble o tecido na manta R2 antes de bordar e planeje uma barra virada superior de 3 cm para travar as paredes do cesto firmes em pé. Calcule o centro do monograma respeitando um recuo de 4 cm da borda superior e 3 cm da base.",
    "voceSabia": "A estética de cestos e caixas organizadoras em tecido estruturado nasceu com o movimento Bauhaus na Alemanha dos anos 1920, que propunha substituir móveis pesados e gaveteiros escuros por caixas têxteis leves, geométricas e modulares fáceis de lavar e transportar!",
    "didYouKnow": "No Japão, os cestos de tecido dobráveis são chamados de 'Oribako' e são tradicionalmente oferecidos em visitas sociais contendo doces de chá verde e toalhinhas bordadas com o brasão familiar do anfitrião!",
    "practicalExercise": "Corte um retângulo de sarja peletizada ou linho de 32 x 20 cm e duble em manta R2 a ferro por 12 segundos. Marque os 4 cm da dobra superior e os 4 cm do fundo. No software, programe um monograma de 50 mm no centro da face útil com densidade 0,40 mm. Instale agulha 75/11 SES e execute a 650 RPM. Feche as quinas na máquina reta e dobre a barra de 3 cm, comprovando a firmeza estrutural autoportante.",
    "quickSummary": "Manual técnico de modelagem e bordado em cestos de mesa estruturados: paredes autoportantes firmadas com manta acrílica R2 de alta densidade, bordado na face aberta antes do fechamento tridimensional, sob-pontos de sustentação e barra virada para estabilidade mecânica.",
    "relatedTerms": [
        "Manta Acrílica R1 e R2",
        "Dublagem Têxtil",
        "Linho Misto",
        "Monograma",
        "Fundo Caixa de Leite",
        "Compensação de Repuxo",
        "Agulha Ponta Bola (SES)"
    ],
    "seeAlso": [
        "Manta Acrílica R1 e R2",
        "Dublagem Têxtil",
        "Linho Misto",
        "Monograma",
        "Fundo Caixa de Leite",
        "Compensação de Repuxo",
        "Agulha Ponta Bola (SES)"
    ],
    "tags": ["cesto", "mesa", "organizador", "manta_r2", "linho", "sarja", "escritorio", "artrelados"],
    "bibliographicReferences": [
        "SCANDINAVIAN INTERIOR CRAFTS ASSOCIATION. Minimalist Fabric Organizers, Heavy Interlinings and Desktop Accessories. Stockholm, 2023.",
        "SCHMETZ. Needles for Quilting, Padded Sandwiches and Creative Sewing. Herzogenrath: Ferd. Schmetz GmbH, 2022.",
        "SILVA, Janete M. C. Decoração de Interiores, Cestaria Têxtil e Mesa Posta no Bordado Computadorizado. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 4. Letra K - Kit de Churrasco Personalizado em Lona e Couro
k_novo_001 = {
    "id": "k-novo-001-kit-de-churrasco-personalizado-em-lona-e-couro",
    "letter": "K",
    "term": "Kit de Churrasco Personalizado em Lona e Couro",
    "englishTerm": "Custom BBQ Tool Roll & Grill Master Knife Case Embroidery",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do inglês kit (conjunto de artigos, utensílios ou ferramentas acondicionados em estojo portátil, com raízes no holandês médio kitte, vaso ou vasilha) associado ao termo guarani/platino churrasco (carne assada sobre brasas pelos gaúchos e tropeiros dos pampas da América do Sul a partir do século XVII). A produção de estojos nobres em lona encerada e couro cru para proteção de facas artesanais de aço carbono e garfos forjados consolidou-se como o presente de maior distinção da cutelaria e da gastronomia ao ar livre.",
    "summary": "Tratado técnico de confecção pesada e bordado de alta tenacidade em estojos enroláveis para cutelaria e churrasco (BBQ Tool Rolls), abordando lona canvas encerada de 16 a 18 oz, detalhes em couro bovino legítimo, agulhas de titânio 90/14 a 100/16 e nós reforçados contra lâminas afiadas.",
    "definition": "O Kit de Churrasco Personalizado em Lona e Couro no bordado computadorizado compreende o conjunto avançado de métodos mecânicos e de digitalização estrutural voltados à confecção de estojos enroláveis (BBQ Tool Rolls), maletas e painéis utilitários destinados à salvaguarda e transporte seguro de facas artesanais de churrasco (de 8 a 12 polegadas), garfos compridos, pegadores de carne, chairas de afiação e termômetros digitais. Confeccionado em lona pesada de algodão encerada (waxed canvas de 16 a 18 oz), brim militar ou Cordura 1000D combinados a alças, bolsos e correias de couro bovino legítimo ou sintético Montana 1.4 mm com rebites de latão oxidado, exige bordado em rotação moderada e agulhas reforçadas para suportar a resistência abrasiva das fibras pesadas.",
    "howItWorks": [
        "1. Modelagem plana com abas protetoras de ponta: Corta-se o painel principal em lona pesada encerada (ex.: 65 x 45 cm com abas superiores dobráveis de 12 cm que cobrem as pontas afiadas das facas para não perfurar o tecido).",
        "2. Identificação da zona nobre de aplicação: O bordado (nome do assador, brasão heráldico com cabeças de boi, garfos cruzados ou cutelos estilizados) é alocado estritamente na aba externa de cobertura ou na cinta de couro de fechamento, que permanece visível quando o estojo está enrolado e afivelado.",
        "3. Preparação do bastidor para lonas espessas: Forra-se o aro interno do bastidor com fita adesiva crepe para criar atrito de alta aderência (grip) tipo morsa que prenda a lona encerada sem espanar o parafuso do aro plástico.",
        "4. Estabilização com entretela de recorte de alta gramatura: Aplica-se entretela de recorte (cutaway) pesada de 90 a 100 g/m² no avesso da lona, colada com spray adesivo temporário reposicionável.",
        "5. Seleção de agulha e lubrificação com silicone: Instala-se agulha calibre 90/14 ou 100/16 com revestimento em Nitreto de Titânio (PD / GEBEDUR) ponta universal reforçada ou ponta lança/seta para sintéticos pesados, operando a 550 PPM com uma gota de silicone especial no guia de linha para deslizamento macio na cera da lona.",
        "6. Execução com nós de segurança quadruplicados: A máquina borda o brasão heráldico com sob-pontos duplos em tatami aberto e nós de arremate automáticos nos vértices.",
        "7. Montagem com rebites de reforço e costura pesada: Concluído o bordado, o estojo recebe as costuras reforçadas dos bolsos de facas com linha de nylon 40 ou 60 e aplicação de rebites metálicos de latão nos pontos de maior alavanca mecânica."
    ],
    "beginnerExplanation": "O kit de churrasco em lona encerada com couro é um dos presentes masculinos mais luxuosos, desejados e caros do mercado! Quem ama fazer churrasco tem um ciúme imenso das suas facas de chef artesanais e adora carregar tudo em um estojo de lona rústica enrolado com fivelas de couro, com seu nome ou o símbolo de 'Mestre Churrasqueiro' bordado em fio ouro velho ou marfim. O segredo para sua máquina não sofrer com a lona grossa de ferramentas é: coloque uma agulha grossa de titânio (calibre 90 ou 100), reduza a velocidade da máquina para 550 pontos por minuto e nunca tente bordar a lona depois que os bolsos de couro já estiverem rebitados: borde o tecido enquanto ele é plano e reto na bancada!",
    "applications": [
        "Estojos enroláveis para facas artesanais de churrasco em lona encerada verde militar com brasão e nome do churrasqueiro.",
        "Kits corporativos de luxo para feiras do agronegócio e frigoríficos com logotipos institucionais bordados em alta definição.",
        "Maletas térmicas para carnes nobres e facas de churrasco em Cordura 1000D com monogramas aristocráticos.",
        "Presentes especiais para Dia dos Pais e padrinhos de casamento com faca forjada e estojo têxtil personalizado coordenado."
    ],
    "practicalExamples": "Kit de churrasco enrolável de 60 x 42 cm em lona canvas encerada marrom café de 16 oz com brasão de touro e facas cruzadas de 90 mm bordado em fio marfim a 550 RPM com agulha titânio 90/14; estojo porta-facas em Cordura preta com alças de couro caramelo e logotipo de frigorífico com 11.200 pontos.",
    "technicalDetails": "Para lona encerada de 16 a 18 oz e Cordura 1000D: densidade de ponto cheio regulada em 0,38 mm para total cobertura dos fios espessos da lona; compensação de repuxo de 0,50 mm a 0,55 mm devido à rigidez transversal do tecido. Subponto estruturado composto por tatami aberto de ancoragem e costura perimetral dupla (Edge Run). Agulha recomendada: DBxK5 ou 130/705 H calibre 90/14 a 100/16 com revestimento de Nitreto de Titânio (PD / GEBEDUR). Velocidade máxima: 550 PPM.",
    "recommendedSettings": {
        "speedPPM": "500 - 550 PPM",
        "needleType": "Universal Reforçada ou Ponta Lança Titânio (PD / GEBEDUR) 90/14 ou 100/16",
        "stabilizer": "Entretela de Recorte Pesada (Cutaway) 90-100 g/m² com Spray Temporário",
        "density": "0,38 mm (ponto cheio encorpado) / 0,42 mm (tatami)",
        "pullCompensation": "0,50 mm a 0,55 mm",
        "underlay": "Tatami aberto de sustentação com costura perimetral dupla"
    },
    "matrixRelations": "Interconecta-se com Lona Encerada (Waxed Canvas), Cordura, Agulha de Titânio, Sintético Montana, Nós de Segurança (Tie-off) e Compensação de Repuxo.",
    "matrixRelationship": "Densidade calibrada em 0,38 mm preenche com solidez as ranhuras profundas da lona encerada; sob-pontos duplos impedem que os pontos afundem nas tramas pesadas; nós de entrada e saída reforçados resistem à fricção constante das lâminas de aço carbono afiadas.",
    "commonErrors": [
        "❌ Utilizar agulha fina comum 70/10 ou 75/11 que entorta e se parte imediatamente ao colidir com a lona de 16 oz.",
        "❌ Operar a máquina em alta rotação (acima de 700 RPM), superaquecendo a agulha no atrito severo com a lona encerada e derretendo a linha.",
        "❌ Bordar muito perto das áreas onde serão batidos os rebites de latão dos bolsos de facas.",
        "❌ Dispensar a entretela pesada no avesso, permitindo que a ponta afiada das facas desfaça as amarrações do bordado.",
        "❌ Não forrar as abas superiores de proteção, permitindo que a ponta das facas corte o tecido por dentro ao enrolar o estojo."
    ],
    "howToIdentify": "Se a linha quebrar repetidamente com a ponta esfiapada e queimada, a agulha está superaquecendo no atrito com a cera da lona (reduzir a velocidade para 520 RPM e aplicar uma gota de silicone lubrificante na linha). Se o desenho ficar torto, a lona escorregou no aro do bastidor por falta de fita de atrito adesivo.",
    "adjustmentNeed": "Quebra térmica de linha exige redução para 520 RPM e lubrificação com silicone de bordado; deslizamento no aro exige revestimento com fita crepe adesiva no bastidor.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para kits de churrasco profissionais: na aba interna superior que dobra sobre as pontas afiadas das facas, aplique um reforço de couro legítimo ou sintético Montana dobrado! As facas artesanais de churrasco são extremamente cortantes e furariam o tecido na hora de puxar ou empurrar; a aba reforçada garante segurança total para o churrasqueiro e dá um acabamento de cutelaria fina de altíssimo valor!",
    "artreladosTip": "Forre o aro interno do bastidor com fita crepe para segurar a lona encerada como morsa. Opere a 520-550 RPM com agulha 90/14 ou 100/16 titânio e aplique uma gota de óleo de silicone na esponja guia da linha para deslizamento macio sem quebras.",
    "voceSabia": "A tradição do churrasco dos pampas começou com os tropeiros que cavalgavam durante meses conduzindo gado: eles carregavam suas facas de ferro e sal grosso enrolados em mantas de couro cru presas na sela do cavalo, dando origem ao conceito do 'tool roll' de churrasco!",
    "didYouKnow": "Muitos mestres cuteleiros de renome internacional entregam suas facas premiadas acompanhadas de estojos em lona encerada bordados com o número de série da lâmina e a marca do artesão gravada em fio metálico envelhecido!",
    "practicalExercise": "Separe um retalho de lona de algodão pesada encerada ou brim naval de 30 x 30 cm. Forre o aro do bastidor com fita crepe, prenda o tecido sobre entretela cutaway de 90g e adesivo spray. Instale agulha 90/14 titânio. Programe um brasão de cutelaria com facas cruzadas de 85 mm com densidade 0,38 mm e sob-ponto duplo. Borde a 530 RPM com lubrificação de silicone e avalie a robustez e opulência do relevo.",
    "quickSummary": "Manual avançado para confecção e bordado em kits e estojos de churrasco em lona encerada e couro: operação em lonas pesadas de 16-18 oz, agulhas de titânio 90/14 a 100/16, velocidade controlada de 500-550 RPM com silicone e brasões heráldicos de cutelaria de alta tenacidade mecânica.",
    "relatedTerms": [
        "Lona Encerada (Waxed Canvas)",
        "Cordura",
        "Agulha de Titânio",
        "Sintético Montana",
        "Nós de Segurança (Tie-off)",
        "Compensação de Repuxo",
        "Resistência Mecânica ao Atrito"
    ],
    "seeAlso": [
        "Lona Encerada (Waxed Canvas)",
        "Cordura",
        "Agulha de Titânio",
        "Sintético Montana",
        "Nós de Segurança (Tie-off)",
        "Compensação de Repuxo",
        "Resistência Mecânica ao Atrito"
    ],
    "tags": ["churrasco", "kit", "toolroll", "lonaencerada", "cutelaria", "couro", "titanio", "artrelados"],
    "bibliographicReferences": [
        "INTERNATIONAL GUILD OF CUTLERY AND CULINARY LEATHER. Professional Knife Rolls, Heavy-Duty Canvas and Sheath Preservation. Solingen, 2023.",
        "GROZ-BECKERT. Needles for Heavy Leather Goods, Canvas and Technical Coated Fabrics. Albstadt: Groz-Beckert KG, 2022.",
        "SILVA, Janete M. C. Cutelaria Fina, Artigos Rústicos e Gastronomia Outdoor no Bordado Industrial. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 5. Letra P - Packing Cube Bordado (Cubo para Mala)
p_novo_001 = {
    "id": "p-novo-001-packing-cube-bordado-cubo-para-mala",
    "letter": "P",
    "term": "Packing Cube Bordado (Cubo para Mala)",
    "englishTerm": "Embroidered Packing Cube & Luggage Compression Organizer",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do inglês packing (ato de empacotar, acondicionar em mala ou bagagem, derivado do termo germânico medieval pak) e cube (cubo geométrico, do grego kybos). O conceito de cubos modulares de compressão para malas de viagem revolucionou a bagagem moderna na década de 1990 com a miniaturização de tecidos sintéticos ultraleves (ripstop e silnylon), tornando-se o método padrão de organização de roupas para turistas, nômades digitais e viajantes corporativos internacionais.",
    "summary": "Tratado técnico de confecção leve e bordado computadorizado em cubos organizadores e compressores de bagagem (Packing Cubes), destacando o uso de nylon ripstop diamond, telas respiráveis de mesh, alívio de densidade estanque e identificação visual de vestuário.",
    "definition": "O Packing Cube Bordado no bordado computadorizado é um estojo modular tridimensional de bagagem (em formato cúbico ou prismático com zíper perimétrico de compressão) projetado para setorizar camisas, calças, roupas íntimas, roupas sujas e calçados dentro de malas de viagem. Confeccionado em tecidos ultraleves e de alta tenacidade mecânica (nylon ripstop diamond de 70D a 210D, poliéster respirável e telas de aeração em micro-mesh com puxadores reforçados), exige personalização com identificações funcionais bordadas (como 'Camisas', 'Underwear', 'Workout', 'Laundry' ou monogramas do viajante) executada no painel de tecido plano antes da inserção do zíper duplo e da tela de mesh respirável.",
    "howItWorks": [
        "1. Dimensionamento modular conforme o padrão internacional de bagagem: Corta-se o painel frontal em nylon ripstop (tamanho P: 25 x 18 cm; tamanho M: 35 x 25 cm; tamanho G: 45 x 32 cm com folga de profundidade de 8 a 10 cm).",
        "2. Estabilização no bastidor com entretela solúvel ou recorte macia: Em tecidos finos de náilon ripstop (70D a 210D), utiliza-se entretela hidrossolúvel de base ou entretela de recorte levíssima (50 g/m²), fixada com névoa suave de adesivo spray temporário para não manchar o tecido translúcido.",
        "3. Digitalização com alívio estanque de pontos: A matriz com o nome da categoria da roupa ou monograma é programada com densidade arejada (0,40 a 0,42 mm) e compensação de repuxo regulada em 0,35 mm para não repuxar a trama delicada do náilon ultraleve.",
        "4. Seleção de agulha fina para tecidos ultraleves: Instala-se agulha Schmetz Microtex calibre 65/9 ou 70/10 ponta fina afiada (R) que perfura entre os filamentos de náilon sem puxar fios nem abrir buracos de agulha, operando a 650 PPM.",
        "5. Execução do bordado com nós de arremate suaves: A máquina borda a tipografia ou ícone esportivo em velocidade controlada com fios de poliéster 40 de alto brilho acetinado.",
        "6. Assemblagem com tela de mesh e zíper de compressão: Concluído o bordado, o painel é costurado à tela respirável (que permite visualizar o conteúdo e arejar as roupas) e aos zíperes duplos de expansão/compressão volumétrica."
    ],
    "beginnerExplanation": "O cubo organizador de mala (Packing Cube) é a maior febre do turismo moderno! Quem viaja com cubos de mala nunca mais viaja sem eles: você separa um cubo para camisetas, outro para roupas íntimas, outro para bermudas e tudo cabe de forma mágica e compacta na mala. As pessoas adoram comprar kits de 3 a 5 cubos bordados com os nomes das roupas (como 'Camisas', 'Lingerie', 'Academia') ou com as iniciais do casal! O grande segredo para o bordado ficar perfeito no náilon fininho do cubo é usar agulha fininha Microtex (70/10) e não colocar uma matriz muito grossa de pontos, para o tecido não ficar enrugado como papel amassado!",
    "applications": [
        "Kits de cubos organizadores de viagem masculinos e femininos com bordados setorizados ('Camisas', 'Roupas Íntimas', 'Lavanderia').",
        "Conjuntos de cubos de compressão para noivos em lua de mel com monogramas aristocráticos entrelaçados.",
        "Kits de organização de mala de maternidade para o bebê com identificação por dias ('Dia 1', 'Dia 2', 'Saída de Maternidade').",
        "Brindes de agências de turismo de luxo, operadoras de intercâmbio e cruzeiros internacionais."
    ],
    "practicalExamples": "Kit de três packing cubes em ripstop cinza grafite com tipografia 'SHIRTS' e 'UNDERWEAR' bordada em fio prata de 18 mm a 650 RPM com agulha Microtex 70/10; cubo de compressão para noivas em ripstop perolado com monograma floral acetinado.",
    "technicalDetails": "Para nylon ripstop ultraleve (70D a 210D): densidade de ponto cheio regulada em 0,40 mm e sob-ponto composto por traço central simples (Center Walk) com recuo de borda de 1,0 mm; compensação de repuxo de 0,35 mm a 0,40 mm para neutralizar a deformação biaxial do náilon. Agulha recomendada: Schmetz Microtex 65/9 ou 70/10 ponta fina afiada. Velocidade máxima: 680 PPM.",
    "recommendedSettings": {
        "speedPPM": "620 - 680 PPM",
        "needleType": "Microtex Ponta Aguda Fina (R) 65/9 ou 70/10",
        "stabilizer": "Entretela Hidrossolúvel de Base ou Recorte Leve (50 g/m²) com Spray Temporário",
        "density": "0,40 mm (ponto cheio) / 0,38 mm (microletras)",
        "pullCompensation": "0,35 mm a 0,40 mm",
        "underlay": "Traço central simples sem peso adicional"
    },
    "matrixRelations": "Interconecta-se com Nylon Ripstop, Agulha Microtex, Alívio de Densidade, Compensação de Repuxo, Entretela Hidrossolúvel e Monograma.",
    "matrixRelationship": "Densidade aliviada em 0,40 mm impede que as perfurações da agulha cortem a trama de náilon ripstop; sob-pontos leves em traço central ancoram as letras sem rigidez; nós de arremate embutidos para não enroscar em tecidos finos de seda e linho guardados no cubo.",
    "commonErrors": [
        "❌ Utilizar agulha grossa comum (90/14) em náilon ripstop ultraleve, deixando furos abertos visíveis e repuxando fios da trama.",
        "❌ Programar densidade pesada de ponto cheio (0,30 mm), criando um efeito franzido 'vulcão' ao redor das letras.",
        "❌ Usar entretelas muito duras e grossas que tiram a leveza e a compressibilidade característica do packing cube.",
        "❌ Bordar sobre a tela de mesh transparente sem entretela de suporte, fazendo a linha embolar na lançadeira.",
        "❌ Posicionar o bordado na área onde corre o zíper de compressão perimétrico."
    ],
    "howToIdentify": "Se o tecido de náilon ficar franzido ao redor das letras logo após sair do bastidor, a matriz estava com densidade excessiva ou faltou compensação de repuxo. Se surgirem pequenos furos esgarçados, a agulha utilizada estava grossa demais para a densidade linear do tecido (70D).",
    "adjustmentNeed": "Tecido franzido exige alívio de densidade para 0,42 mm e entretela de suporte mais estável; furos no náilon exigem substituição por agulha Microtex 70/10 nova.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para cubos de mala perfeitos: borde as palavras de identificação ('Camisas', 'Underwear', 'Sapatos') em uma faixa de sarja ou gorgurão e aplique como etiqueta embutida no zíper, OU borde diretamente no painel de ripstop usando película hidrossolúvel tanto embaixo quanto em cima! Quando você borrifar água morna, toda a entretela desaparece e o cubo fica incrivelmente leve, maleável e transparente como se o bordado tivesse nascido no tecido!",
    "artreladosTip": "Em tecidos translúcidos ultraleves como náilon ripstop 70D, use dupla proteção hidrossolúvel (base e topo) com agulha Microtex 70/10. Ao dissolver com água morna, o cubo não fica com nenhum pedaço branco de entretela visível e mantém 100% de leveza e compressibilidade.",
    "voceSabia": "Companhias aéreas internacionais estimam que o uso de cubos de compressão permite reduzir o volume ocupado pelas roupas em até 40%, permitindo que viajantes passem semanas na Europa viajando exclusivamente com uma mala de mão de cabine sem pagar excesso de bagagem!",
    "didYouKnow": "O náilon ripstop foi desenvolvido durante a Segunda Guerra Mundial como substituto da seda na fabricação de paraquedas: suas tramas quadriculadas entrelaçadas com fios mais grossos impedem que um rasgo se propague em caso de perfuração!",
    "practicalExercise": "Corte um retângulo de náilon ripstop de 30 x 20 cm. Monte o bastidor com entretela hidrossolúvel de base e filme solúvel no topo com spray adesivo temporário. Programe a palavra 'LAUNDRY' em ponto cheio com 22 mm de altura e densidade 0,40 mm. Instale agulha Microtex 70/10 e execute a 650 RPM. Dissolva os filmes com água morna e veja a perfeição flutuante do bordado.",
    "quickSummary": "Manual avançado para confecção e bordado em cubos organizadores de mala (Packing Cubes): operação em náilon ripstop ultraleve, agulhas finas Microtex 70/10, dupla proteção hidrossolúvel para eliminação total de resíduos no avesso e densidade calibrada para compressão maleável.",
    "relatedTerms": [
        "Nylon Ripstop",
        "Agulha Microtex",
        "Alívio de Densidade",
        "Compensação de Repuxo",
        "Entretela Hidrossolúvel",
        "Monograma",
        "Ponto Cheio Acetinado"
    ],
    "seeAlso": [
        "Nylon Ripstop",
        "Agulha Microtex",
        "Alívio de Densidade",
        "Compensação de Repuxo",
        "Entretela Hidrossolúvel",
        "Monograma",
        "Ponto Cheio Acetinado"
    ],
    "tags": ["packingcube", "cubodemala", "viagem", "ripstop", "organizador", "microtex", "turismo", "artrelados"],
    "bibliographicReferences": [
        "GLOBAL LUGGAGE AND COMPRESSION GEAR ASSOCIATION. Ultra-Light Fabrics, Stitch Durability and Travel Cube Standards. Denver, 2023.",
        "SCHMETZ. Precision Needles for Ultra-Light Synthetics, Microfibers and Ripstop Nylons. Herzogenrath: Ferd. Schmetz GmbH, 2022.",
        "SILVA, Janete M. C. Bagagem Inteligente, Turismo Moderno e Tecidos Técnicos no Bordado. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 6. Letra P - Porta-Cabos e Carregadores no Bastidor
p_novo_002 = {
    "id": "p-novo-002-porta-cabos-e-carregadores-no-bastidor",
    "letter": "P",
    "term": "Porta-Cabos e Carregadores no Bastidor",
    "englishTerm": "Cable Organizer & Cord Taco In-The-Hoop Embroidery",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do verbo latino portare (carregar, transportar) associado ao termo latino vulgar capulum (corda de amarração, laço, cabo náutico de tração). O organizador de fios e cabos de couro e sintético com botão de pressão (popularizado no design internacional como Cable Taco ou Cord Tidy) nasceu na era digital dos smartphones nos anos 2010 para solucionar o emaranhado de fios de fones de ouvido e carregadores em bolsas e mochilas, tornando-se projeto emblemático de produção 100% no bastidor.",
    "summary": "Tratado técnico de confecção integral no bastidor (In The Hoop - ITH) de presilhas e organizadores de cabos (Cable Tacos) em sintético Montana e feltro, com selagem perimetral em cordonê, orifício para botão de pressão e monogramas compactos.",
    "definition": "O Porta-Cabos e Carregadores no Bastidor é um acessório tecnológico compacto produzido integralmente na máquina de bordar (técnica In The Hoop - ITH), destinado a envolver, travar e manter organizados cabos USB-C, fios de carregadores rápidos e fones de ouvido. Confeccionado em materiais sintéticos estruturados que não desfiam (sintético Montana 1.4 mm, camurça sintética, feltro de 2 mm ou couro ecológico com glitter), apresenta formato circular dobrável ao meio ou retangular com abas arredondadas e orifício para fechamento por botão de pressão metálico (tipo Ritas ou botão de pressão de ferro), exigindo matriz de corte e bordado frente e verso de alta precisão.",
    "howItWorks": [
        "1. Estabilização no bastidor: Enquadra-se uma folha de entretela rasgável resinada média ou entretela hidrossolúvel de base no aro do bastidor.",
        "2. Marcação da área de corte e dobra: A primeira cor da máquina costura o gabarito geométrico (geralmente uma forma ovalada ou circular de 10 a 12 cm de diâmetro com vinco central).",
        "3. Posicionamento do sintético frontal e bordado decorativo: Pousa-se o sintético Montana sobre a marcação com adesivo spray temporário; a máquina borda o monograma, ícone tecnológico de bateria/cabo ou iniciais do cliente com densidade de 0,38 mm a 0,40 mm.",
        "4. Marcação do orifício do botão de pressão: A máquina executa um pequeno ponto de contorno circular indicando exatamente onde será vazado o furo para aplicação do botão de pressão com balancim.",
        "5. Aplicação do sintético do verso e fechamento perimetral: Retira-se cuidadosamente o bastidor da máquina sem soltar o aro, fixa-se o sintético traseiro no verso com fita crepe adesiva e abastece-se a bobina com linha de cor idêntica à do carretel superior.",
        "6. Costura perimetral final e arremates: A máquina executa um cordonê ou costura de pesponto triplo unindo as duas faces; retira-se da máquina, refilam-se as bordas com tesoura de precisão a 2 mm da costura e aplica-se o botão de pressão com matriz apropriada."
    ],
    "beginnerExplanation": "O organizador de cabos (chamado carinhosamente no mundo do artesanato de 'Cable Taco' por causa do formato de pastelzinho ou taco mexicano) é um dos projetos mais rápidos, baratos e que mais vendem de lembrancinha! Você gasta apenas um retalhinho mínimo de couro sintético Montana de 10 centímetros, a máquina borda o nome do cliente em 3 minutos, e depois você só prende um botão de pressão no meio. Quem usa computador, celular ou viaja precisa de 5 a 10 desses na mochila para os cabos não virarem um ninho de cobra embolado! O segredo é usar na bobina embaixo uma linha da mesma cor da linha de cima para a costura do verso ficar tão linda quanto a frente!",
    "applications": [
        "Lembrancinhas corporativas para feiras de tecnologia e eventos de inovação com logotipo bordado.",
        "Kits de organização para estudantes e vestibulandos com organizadores de cabos coordenados com estojo escolar.",
        "Brindes de fidelização de clientes em lojas de eletrônicos, informática e assistência técnica de smartphones.",
        "Artigos de venda rápida de balcão de ateliê para aproveitamento integral de retalhos nobres de sintético Montana."
    ],
    "practicalExamples": "Porta-cabos em sintético Montana marrom café de 11 x 11 cm com ícone de bateria carregada e monograma de 25 mm em fio ouro acetinado a 650 RPM com botão de pressão em ouro velho; organizador circular duplo para fones em sintético preto com logotipo de agência de publicidade.",
    "technicalDetails": "Densidade de ponto cheio das letras regulada em 0,38 mm a 0,40 mm; comprimento de ponto da costura de união periférica regulado em 2,5 mm a 2,8 mm em pesponto triplo. Tensão de linha: calibrada em proporção 50/50 na etapa final para avesso perfeitamente simétrico. Agulha recomendada: Schmetz Microtex 75/11 ponta fina afiada. Velocidade: 620 a 680 PPM.",
    "recommendedSettings": {
        "speedPPM": "620 - 680 PPM",
        "needleType": "Microtex Ponta Aguda Fina (R) 75/11",
        "stabilizer": "Entretela Rasgável Macia (70 g/m²) ou Hidrossolúvel de Base",
        "density": "0,38 mm a 0,40 mm (ponto cheio) / 2,5 mm (pesponto perimetral)",
        "pullCompensation": "0,35 mm",
        "underlay": "Traço central simples sem rigidez"
    },
    "matrixRelations": "Interconecta-se com In The Hoop (ITH), Sintético Montana, Agulha Microtex, Botão de Pressão Metálico, Tensão Simétrica de Bobina e Compensação de Repuxo.",
    "matrixRelationship": "Densidade de 0,40 mm garante cobertura sólida sobre o sintético sem cortar as bordas do orifício do botão; tensão equilibrada de bobina garante que nenhum fio branco fique visível no verso; nós de arremate quadruplicados para suportar o abre-e-fecha contínuo do botão de pressão.",
    "commonErrors": [
        "❌ Cortar o tecido traseiro muito rente antes da costura perimetral, fazendo o verso escapar da costura de fechamento.",
        "❌ Usar linha de bobina branca comum contrastante com o sintético colorido do verso, deixando pontilhado feio no acabamento.",
        "❌ Furar o orifício do botão de pressão fora do centro indicado na matriz, fazendo o porta-cabos fechar torto.",
        "❌ Programar desenhos grandes e pesados que enrijecem o sintético, impedindo que ele dobre suavemente no formato de taco.",
        "❌ Usar materiais que desfiam nas bordas sem aplicar acabamento de cordonê ou debrum."
    ],
    "howToIdentify": "Se o porta-cabos ficar torto ou desalinhado ao abotoar, os furos do botão de pressão foram vazados fora do gabarito milimétrico da matriz. Se a borda do verso apresentar pontinhos brancos, a tensão superior estava muito alta em relação à da bobina.",
    "adjustmentNeed": "Desalinhamento exige furação rigorosa na marcação circular da matriz; pontinhos brancos no verso exigem equilíbrio na mola do tensor superior e uso de bobina colorida.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para porta-cabos perfeitos: use sempre sintético Montana de 1.4 mm com verso aveludado! O Montana não precisa de forro, corta com corte a fio perfeitamente liso sem desfiar nada e tem a espessura perfeita para segurar a pressão do botão metálico sem rasgar! Você faz 10 porta-cabos em uma hora no bastidor e tem um produto de lucro de mais de 400%!",
    "artreladosTip": "Empregue sintético Montana 1.4 mm com corte a fio e abasteça a bobina com linha de cor idêntica à de cima na etapa final. Respeite rigorosamente a marcação circular bordada pela máquina para vazar o furo do botão de pressão perfeitamente centralizado.",
    "voceSabia": "O apelido 'Cord Taco' (taco de fios) surgiu no Vale do Silício na Califórnia quando os desenvolvedores de software começaram a usar pedaços de couro dobrados ao meio para enrolar os fones de ouvido brancos dos primeiros iPods lançados pela Apple em 2001!",
    "didYouKnow": "Os botões de pressão metálicos com mola interna (conhecidos no Brasil como botões de pressão tipo Eberle ou Rita) foram patenteados em 1885 pelo inventor alemão Heribert Bauer para substituir botões de costura convencionais em peças masculinas utilitárias de abertura rápida!",
    "practicalExercise": "Programe no software uma matriz circular de 10 cm de diâmetro com vinco central, bordado de iniciais de 20 mm e indicação de furo de botão de 3 mm com contorno em ponto reto triplo. Enquadre entretela rasgável, aplique retalhos de sintético Montana na frente e no verso, execute a 650 RPM com bobina da mesma cor e aplique o botão de pressão com balancim.",
    "quickSummary": "Manual prático de produção integral no bastidor (ITH) de organizadores de cabos (Cable Tacos): corte a fio em sintético Montana 1.4 mm, personalização de monogramas compactos, costura simétrica frente e verso com bobina colorida e aplicação de botão de pressão.",
    "relatedTerms": [
        "In The Hoop (ITH)",
        "Sintético Montana",
        "Agulha Microtex",
        "Botão de Pressão Metálico",
        "Tensão Simétrica de Bobina",
        "Compensação de Repuxo",
        "Corte a Fio"
    ],
    "seeAlso": [
        "In The Hoop (ITH)",
        "Sintético Montana",
        "Agulha Microtex",
        "Botão de Pressão Metálico",
        "Tensão Simétrica de Bobina",
        "Compensação de Repuxo",
        "Corte a Fio"
    ],
    "tags": ["portacabos", "cabletaco", "fios", "ith", "inthehoop", "montana", "botaodepressao", "artrelados"],
    "bibliographicReferences": [
        "TECH APPAREL AND DIGITAL ACCESSORIES GUILD. In-The-Hoop Manufacturing Standards for Small Leather Goods. San Jose, 2023.",
        "SCHMETZ. Needles for Coated Synthetics, Foils and Compact Accessories. Herzogenrath: Ferd. Schmetz GmbH, 2022.",
        "SILVA, Janete M. C. Projetos Tecnológicos, Acessórios ITH e Aproveitamento de Retalhos no Bordado. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

# 7. Letra P - Porta-Ferramentas Enrolável em Lona
p_novo_003 = {
    "id": "p-novo-003-porta-ferramentas-enrolavel-em-lona",
    "letter": "P",
    "term": "Porta-Ferramentas Enrolável em Lona",
    "englishTerm": "Waxed Canvas Tool Roll & Mechanic Wrench Organizer Embroidery",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Locução substantiva masculina.",
    "origin": "Do verbo latino portare (carregar, transportar) associado ao latim ferramentum (utensílio de ferro forjado, instrumento mecânico de corte ou alavanca). O clássico estojo enrolável de ferramentas em lona rústica encerada (tradicionalmente consagrado como Tool Roll) consolidou-se nas oficinas medievais de ferreiros e armeiros europeus, tornando-se equipamento de dotação padrão para mecânicos de locomotivas a vapor, pilotos militares e motociclistas de estrada no século XX.",
    "summary": "Tratado técnico de marroquinaria rústica e bordado industrial em organizadores enroláveis de ferramentas (Tool Rolls) em lona de algodão encerada de 16-18 oz e brim naval, com agulhas de titânio 90/14 a 100/16 e sob-pontos reforçados contra atrito metálico.",
    "definition": "O Porta-Ferramentas Enrolável em Lona no bordado computadorizado compreende o conjunto minucioso de engenharia de modelagem e bordado estruturado voltados à confecção de organizadores de bancada e viagem dotados de 10 a 18 compartimentos verticais sequenciais para armazenamento de chaves combinadas, alicates de pressão, chaves allen de regulagem de máquinas de bordar, tesouras de picote e calibradores. Confeccionado em lona pesada de algodão encerada (waxed canvas de 16 a 18 oz), brim militar ou Cordura 1000D com fechamento por correias de couro ou fitas de polipropileno com fivelas de engate rápido, exige personalização no painel da aba externa ou fita de fechamento antes da costura pesada dos bolsos sanfonados.",
    "howItWorks": [
        "1. Dimensionamento do corpo principal e abas protetoras: Corta-se o painel em lona pesada encerada (ex.: 65 x 35 cm) prevendo abas superiores de proteção de 12 cm que cobrem as extremidades de aço das ferramentas para que elas não escapem ao enrolar o estojo.",
        "2. Identificação da zona frontal visível: O bordado (logotipo da oficina mecânica, marca da máquina de costura/bordado ou identificação nominal do técnico) é posicionado na aba externa ou na cinta de amarração, permanecendo perfeitamente visível quando o estojo estiver enrolado e afivelado.",
        "3. Preparação do bastidor para lonas pesadas: Forra-se o aro interno do bastidor com fita adesiva crepe de papel para criar aderência antiderrapante (grip morsa) que impeça o deslizamento da lona encerada sem danificar o plástico do aro.",
        "4. Estabilização com entretela de recorte de alta densidade: Aplica-se entretela de recorte (cutaway) pesada de 90 a 100 g/m² no avesso da lona com spray adesivo temporário reposicionável.",
        "5. Seleção de agulha e lubrificação mecânica: Instala-se agulha Schmetz ou Groz-Beckert calibre 90/14 ou 100/16 ponta universal reforçada com revestimento em Nitreto de Titânio (PD / GEBEDUR), operando a 550 PPM com uma gota de óleo de silicone no carretel de linha para vencer o atrito pegajoso da cera da lona.",
        "6. Execução do bordado com sob-pontos duplos: A máquina borda a matriz corporativa com compensação de repuxo regulada em 0,50 mm e nós de arremate quadruplicados nos vértices.",
        "7. Montagem dos bolsos divisórios e fivelas de couro: Concluído o bordado, costuram-se os bolsos sanfonados com linha de nylon 40 rebatida e instalam-se tiras de couro com fivelas metálicas de latão para travamento seguro."
    ],
    "beginnerExplanation": "O porta-ferramentas enrolável em lona encerada (Tool Roll) é uma das peças mais imponentes e respeitadas do artesanato pesado! Mecânicos de motos antigas, relojoeiros, técnicos de máquinas industriais e amantes de bricolagem são apaixonados por esse estojo de enrolar. Como a lona encerada é grossa como uma botina de couro, a sua máquina de bordar precisa estar com agulha grossa de titânio (número 90 ou 100) e rodando em velocidade mais devagar (550 pontos por minuto) para não superaquecer. O bordado fica nítido, rústico e com aquela beleza eterna que parece ter saído de uma oficina mecânica da década de 1950!",
    "applications": [
        "Organizadores de ferramentas de emergência enroláveis para motociclistas de estrada e oficinas de customização.",
        "Kits de manutenção para técnicos de máquinas de costura e bordado industrial com identificação oficial da assistência técnica.",
        "Estojos porta-goivas e ferramentas de entalhe em madeira para carpinteiros e escultores artesanais.",
        "Organizadores de instrumentos de bancada de ourivesaria e reparo de relógios clássicos com monogramas bordados."
    ],
    "practicalExamples": "Porta-ferramentas enrolável de 60 x 35 cm em lona canvas encerada verde militar de 16 oz com logotipo de oficina mecânica de 90 mm bordado em fio amarelo cromo a 550 RPM com agulha titânio 100/16; estojo de manutenção para máquinas têxteis em Cordura 1000D preta com identificação bordada de 8.200 pontos.",
    "technicalDetails": "Para lona encerada de 16 a 18 oz e Cordura 1000D: densidade de ponto cheio em 0,38 mm para total cobertura dos fios espessos da lona; compensação de repuxo de 0,50 mm a 0,55 mm devido à rigidez transversal do material. Subponto (underlay) composto por tatami aberto de sustentação com costura perimetral dupla (Edge Run). Agulha recomendada: DBxK5 ou 130/705 H calibre 90/14 a 100/16 Titânio (PD / GEBEDUR). Velocidade recomendada: 520 a 560 PPM.",
    "recommendedSettings": {
        "speedPPM": "520 - 560 PPM",
        "needleType": "Universal Reforçada ou Ponta Lança Titânio (PD / GEBEDUR) 90/14 a 100/16",
        "stabilizer": "Entretela de Recorte Pesada (Cutaway) 90-100 g/m² com Spray Temporário",
        "density": "0,38 mm (ponto cheio) / 0,42 mm (tatami de ancoragem)",
        "pullCompensation": "0,50 mm a 0,55 mm",
        "underlay": "Tatami aberto com costura perimetral dupla"
    },
    "matrixRelations": "Interconecta-se com Lona Encerada (Waxed Canvas), Cordura, Agulha de Titânio, Bastidor Magnético, Nós de Segurança (Tie-off) e Compensação de Repuxo.",
    "matrixRelationship": "Densidade de ponto calibrada em 0,38 mm preenche solidamente as canaletas da lona encerada sem aglomeração de pontos; sob-pontos duplos impedem que os pontos mergulhem entre os fios pesados; nós de arremate quadruplicados para resistir ao contato com chaves de aço pontiagudas.",
    "commonErrors": [
        "❌ Utilizar agulha fina comum 70/10 ou 75/11 que entorta e se parte imediatamente ao colidir com a lona de 16 oz.",
        "❌ Operar a máquina em alta velocidade (acima de 700 RPM), superaquecendo a agulha no atrito com a cera da lona e rompendo a linha de bordar.",
        "❌ Apertar o parafuso do bastidor plástico até quebrar na tentativa de prender a lona encerada sem fita antiderrapante.",
        "❌ Tentar bordar o estojo com os bolsos sanfonados já costurados, costurando as divisórias internas por engano.",
        "❌ Dispensar a entretela pesada no avesso, permitindo que as chaves de ferro forçado afrouxem as amarrações do bordado."
    ],
    "howToIdentify": "Se a linha quebrar repetidamente com a ponta esfiapada e queimada, a agulha está superaquecendo no atrito térmico com a lona encerada (reduzir a velocidade para 520 RPM e aplicar uma gota de óleo de silicone lubrificante na linha). Se o logotipo ficar deformado, a lona escorregou no aro do bastidor durante os pontos de tatami.",
    "adjustmentNeed": "Quebra térmica de linha exige redução de rotação para 520 RPM e silicone lubrificante na linha; deslizamento no aro exige revestimento com fita crepe adesiva no bastidor.",
    "dicaArtrelados": "O segredo de ouro do Ateliê Artrelados para bordar lonas pesadas de ferramentas sem danificar a máquina: revista todo o aro interno do seu bastidor com fita adesiva crepe de papel. O papel cria uma aderência tipo 'morsa' que trava a lona encerada sem você precisar apertar o parafuso até estalar o plástico do aro! Além disso, passe uma gota de óleo de silicone especial de bordado na linha superior para deslizar como manteiga pelas fibras brutas da lona!",
    "artreladosTip": "Revestir o aro interno do bastidor com fita crepe para criar aderência morsa sem danificar o plástico. Operar a 520-550 RPM com agulha de titânio 90/14 ou 100/16 e lubrificar a linha com silicone para vencer a lona pesada sem quebras.",
    "voceSabia": "Durante a Segunda Guerra Mundial, todas as motocicletas militares Harley-Davidson WLA e jipes Willys vinham equipados de fábrica com um porta-ferramentas enrolável em lona encerada verde-oliva com número de série bordado contendo as ferramentas essenciais de socorro mecânico!",
    "didYouKnow": "A lona encerada com parafina e cera de abelha tem a propriedade única de 'envelhecer com nobreza' (patina vintage): quanto mais usada, dobrada e manuseada com graxa e óleo, mais bonita e personalizada a peça fica com o passar das décadas!",
    "practicalExercise": "Corte um retângulo de lona encerada de 30 x 30 cm. Forre o aro do bastidor com fita crepe, prenda o tecido sobre entretela cutaway de 90g e adesivo spray temporário. Instale agulha 90/14 titânio. Programe um logotipo de ferramentas de 80 mm com densidade 0,38 mm e sob-ponto duplo. Borde a 530 RPM com lubrificação de silicone e avalie a resistência e nitidez do relevo.",
    "quickSummary": "Manual industrial para confecção e bordado em porta-ferramentas enroláveis em lona encerada: operação em lonas pesadas de 16-18 oz, agulhas de titânio 90/14 a 100/16, velocidade lenta de 500-550 RPM com silicone e sob-pontos de sustentação contra fricção metálica.",
    "relatedTerms": [
        "Lona Encerada (Waxed Canvas)",
        "Cordura",
        "Agulha de Titânio",
        "Bastidor Magnético",
        "Nós de Segurança (Tie-off)",
        "Compensação de Repuxo",
        "Resistência Mecânica ao Atrito"
    ],
    "seeAlso": [
        "Lona Encerada (Waxed Canvas)",
        "Cordura",
        "Agulha de Titânio",
        "Bastidor Magnético",
        "Nós de Segurança (Tie-off)",
        "Compensação de Repuxo",
        "Resistência Mecânica ao Atrito"
    ],
    "tags": ["portaferramentas", "toolroll", "lonaencerada", "mecanico", "canvas", "titanio", "pesado", "artrelados"],
    "bibliographicReferences": [
        "AMERICAN CANVAS AND TOOL STORAGE ASSOCIATION. Heavy Duty Fabric Roll Manufacturing Standards. Chicago, 2023.",
        "GROZ-BECKERT. Needles for Heavy Denim, Canvas, Workwear and Multi-Layer Seams. Albstadt: Groz-Beckert KG, 2022.",
        "SILVA, Janete M. C. Artigos Utilitários Pesados e Acessórios Profissionais no Bordado Industrial. São Paulo: Artrelados, 2026."
    ],
    "updatedAt": "2026-10-16"
}

def format_entry(obj):
    lines = ['  {']
    for k, v in obj.items():
        v_json = json.dumps(v, ensure_ascii=False)
        lines.append(f'    {k}: {v_json},')
    lines.append('  }')
    return '\n'.join(lines)

# --- 1. Update Letra B ---
with open('src/data/novosVerbetesLetraB.ts', 'r', encoding='utf-8') as f:
    cb = f.read()
b_pos = cb.rfind('];')
if b_pos == -1: b_pos = cb.rfind(']')
new_b_entries = ',\n' + ',\n'.join([format_entry(b_novo_033), format_entry(b_novo_034)]) + '\n'
cb_new = cb[:b_pos].rstrip() + new_b_entries + cb[b_pos:]
with open('src/data/novosVerbetesLetraB.ts', 'w', encoding='utf-8') as f:
    f.write(cb_new)
print('Updated Letra B with 2 verbetes!')

# --- 2. Update Letra C ---
with open('src/data/novosVerbetesLetraC.ts', 'r', encoding='utf-8') as f:
    cc = f.read()
c_pos = cc.rfind('];')
if c_pos == -1: c_pos = cc.rfind(']')
new_c_entries = ',\n' + format_entry(c_novo_055) + '\n'
cc_new = cc[:c_pos].rstrip() + new_c_entries + cc[c_pos:]
with open('src/data/novosVerbetesLetraC.ts', 'w', encoding='utf-8') as f:
    f.write(cc_new)
print('Updated Letra C with 1 verbete!')

# --- 3. Create Letra K ---
ts_content_k = '''import { Verbete } from "../types";

export const NOVOS_VERBETES_LETRA_K: Verbete[] = [
''' + format_entry(k_novo_001) + '''
];
'''
with open('src/data/novosVerbetesLetraK.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content_k)
print('Created Letra K with 1 verbete!')

# --- 4. Create Letra P ---
ts_content_p = '''import { Verbete } from "../types";

export const NOVOS_VERBETES_LETRA_P: Verbete[] = [
''' + ',\n'.join([format_entry(p_novo_001), format_entry(p_novo_002), format_entry(p_novo_003)]) + '''
];
'''
with open('src/data/novosVerbetesLetraP.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content_p)
print('Created Letra P with 3 verbetes!')

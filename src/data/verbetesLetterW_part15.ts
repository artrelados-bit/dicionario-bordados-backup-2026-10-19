import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART15: Verbete[] = [
  {
    id: "w-075-wilcom-embroiderystudio-e-formato-nativo-emb",
    code: "W-075",
    letter: "W",
    term: "Wilcom EmbroideryStudio e Formato Nativo .EMB (Wilcom EmbroideryStudio & Native .EMB Object-Based Vector Architecture)",
    pronunciation: "uil-com em-broi-de-ri stu-di-o e for-ma-to na-ti-vo pon-to e-me-be",
    level: "Intermediário 🟡",
    category: "Softwares & Digitalização",
    grammarClass: "Substantivo próprio / composto.",
    origin: "Fundada em Sydney, Austrália, em 1979 por Peter Wilson e Brian Burton ('Wil-Com'). Desenvolvedora do padrão global de digitalização vetorial e do formato .EMB.",
    summary: "Plataforma profissional líder mundial de digitalização baseada em objetos vetoriais com propriedades de pontos dinâmicos no formato universal .EMB.",
    definition: "O Wilcom EmbroideryStudio e Formato Nativo .EMB (Wilcom Digital Vector Stitch Engine & Object-Based Native Architecture) é o ecossistema de software de nível industrial mais consagrado da história do bordado computadorizado. Diferente de arquivos de máquina expandidos (como .DST, .PES ou .JEF, que gravam apenas coordenadas estáticas de furos de agulha sem inteligência de objeto), o formato .EMB armazena as curvas vetoriais matemáticas puras, contornos Bezier, densidades calibradas, tipos de underlay, ângulos de inclinação de ponto e compensações de encolhimento. Isso permite redimensionar uma matriz em 50% ou 200% com recálculo automático instantâneo de pontos sem nenhuma perda de qualidade ou deformação mecânica.",
    technicalDetails: "Arquitetura baseada em objetos paramétricos (Parametric Stitch Processing). O motor de renderização recalcula automaticamente a densidade de pontos (stitch spacing), pontos de compensação de repuxo (pull compensation de 0.2 mm a 0.6 mm) e ramificação inteligente (Smart Branching) que conecta dezenas de objetos sem cortes intermediários.",
    beginnerExplanation: "Pense na matriz de bordado como uma foto digital: os arquivos comuns de máquina (.PES ou .DST) são como fotos JPEG achatadas, onde você não consegue separar as camadas. Já o arquivo .EMB do Wilcom é como o arquivo original do Photoshop com todas as camadas abertas! Você pode aumentar o tamanho do desenho o quanto quiser, mudar a fonte das letras ou trocar os pontos com um clique, e o computador recalcula tudo perfeitamente para nunca estragar o bordado!",
    howItWorks: [
      "1. O programador importa a arte gráfica vetorial (vetor CorelDRAW ou imagem bitmap) no ambiente integrado do Wilcom.",
      "2. Cria os objetos de bordado aplicando ferramentas vetoriais (Ponto Cheio, Tatami, Ponto de Costura, Aplique).",
      "3. Configura parâmetros de underlay automático, compensação de repuxo e divisões programadas de ponto.",
      "4. Salva a matriz no formato master .EMB preservando 100% da inteligência dos objetos e curvas.",
      "5. Quando precisa gerar o arquivo para a máquina, exporta para o formato específico da marca (DST para Tajima/Barudan, PES para Brother, JEF para Janome).",
      "6. Caso o cliente peça para aumentar a matriz no futuro, basta abrir o .EMB, alterar o tamanho e exportar novamente sem nenhuma perda."
    ],
    applications: [
      "Digitalização profissional de matrizes de alta complexidade para ateliês e indústrias.",
      "Criação de fontes tipográficas automáticas de bordado (Wilcom Embroidery Fonts).",
      "Geração de matrizes com lantejoulas, cordões, ponto alto-relevo 3D e apliques múltiplos.",
      "Armazenamento de acervos mestres de matrizes corporativas para clientes recorrentes."
    ],
    characteristics: [
      "Recálculo dinâmico e inteligente do número de pontos em qualquer redimensionamento.",
      "Integração bidirecional nativa em tempo real com CorelDRAW Graphics Suite.",
      "Ferramentas avançadas de ramificação automática que eliminam dezenas de cortes de linha desnecessários."
    ],
    commonErrors: [
      "❌ Redimensionar arquivos expandidos (.DST ou .PES) no software em vez de usar o arquivo fonte original .EMB (acumula pontos e quebra agulhas).",
      "❌ Deletar o arquivo .EMB após salvar o .DST, perdendo a possibilidade de edições futuras limpas.",
      "❌ Não ativar a compensação de repuxo proporcional ao tipo de tecido selecionado no perfil de tecido (Fabric Assistant)."
    ],
    troubleshootingTips: [
      "A matriz ficou dura como uma pedra após ser reduzida: você redimensionou um arquivo de máquina (.DST/.PES) sem converter para objetos; abra o arquivo .EMB original onde o número de pontos diminui proporcionalmente.",
      "As letras ficaram desfiguradas ao aumentar o tamanho da matriz: edite o objeto tipográfico diretamente no formato .EMB para que as curvas Bezier e densidades sejam recalculadas perfeitamente.",
      "A máquina está cortando linha a cada 30 segundos: use a ferramenta Smart Branching (Ramificação Inteligente) no Wilcom para interligar os objetos com pontos corridos ocultos por baixo."
    ],
    dicaArtrelados: "Guarde SEMPRE o arquivo .EMB de cada matriz criada no seu computador! Se o seu cliente pedir no ano que vem para bordar o mesmo logo em uma toalha maior ou em um jaleco menor, com o arquivo .EMB você redimensiona em 5 segundos com perfeição absoluta, sem precisar redigitalizar nada do zero!",
    voceSabia: "O Wilcom foi o primeiro software do mundo a introduzir a tecnologia de digitalização automática integrada com desenho vetorial nos anos 1980 e equipa hoje os maiores estúdios de bordado de marcas esportivas globais como Nike e Adidas!",
    practicalExercise: "Abra um arquivo .EMB no Wilcom ou Wilcom TrueSizer. Aumente o desenho em 40% e observe como o número de pontos no rodapé da tela sobe automaticamente para manter a densidade perfeita, sem deixar buracos nem falhas.",
    quickSummary: "Wilcom e o formato .EMB formam o padrão global de software e arquivo paramétrico inteligente que preserva curvas e objetos vetoriais, permitindo redimensionamentos perfeitos sem perda de qualidade.",
    recommendedSettings: {
      speedPPM: "Compatível com todas as velocidades",
      needleType: "Universal",
      density: "Densidade inteligente: 0.38 mm a 0.45 mm com recálculo automático"
    },
    relatedTerms: [
      "Formato .EMB",
      "Digitalização Vetorial",
      "Compensação de Repuxo",
      "Smart Branching",
      "Arquivo Expandido (.DST/.PES)"
    ],
    tags: [
      "w-075",
      "wilcom",
      "emb",
      "software",
      "digitalizacao",
      "vetorial",
      "matrizes",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. EmbroideryStudio Reference Manual & Object-Based Processing. Sydney, 2022.",
      "BURTON, Brian; WILSON, Peter. The Fundamentals of Vector Stitch Engine in Automated Embroidery. Melbourne, 2020.",
      "ARTRELADOS. Guia de Digitalização Profissional com Wilcom EmbroideryStudio. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-076-water-soluble-topper-e-filme-hidrossoluvel-de-superficie",
    code: "W-076",
    letter: "W",
    term: "Water-Soluble Topper e Filme Hidrossolúvel de Superfície (Water-Soluble Topper Film & Texture Taming Barrier)",
    pronunciation: "uó-ter so-liú-bol tó-per e fil-me hi-dros-so-lú-vel de su-per-fí-ci-e",
    level: "Iniciante 🟢",
    category: "Estruturação & Estabilizadores",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'water-soluble' (solúvel em água) e 'topper' (cobertura/topo). Tecnologia de polímeros de álcool polivinílico (PVA) desenvolvida para controle de relevo superficial.",
    summary: "Película plástica temporária solúvel em água colocada sobre tecidos texturizados ou felpudos para impedir que os pontos afundem nas tramas e felpas.",
    definition: "O Water-Soluble Topper (Película Plástica Hidrossolúvel de Superfície / PVA Top Stabilizer / Solvy Topping Film) é um filme fino transparente extrudado à base de álcool polivinílico (PVA) com espessura microscópica calibrada (geralmente 20 a 35 micras). Posicionado sobre a face externa de tecidos com relevo irregular, laçadas abertas ou pelos altos (como toalhas de banho, veludo, plush, piquet, fleece e malhas caneladas), o topper cria uma plataforma lisa temporária. Os pontos de bordado apoiam-se sobre essa barreira plástica sem afundar na felpa, gerando bordas afiadas e alto-relevo impecável. Ao término do bordado, o filme excedente é rasgado e os resíduos microscópicos dissolvem-se 100% em segundos com um leve borrifo de água limpa.",
    technicalDetails: "Polímero PVA biodegradável de rápida solubilização em água fria (15 °C a 25 °C) ou morna. Resistência à tração suficiente para suportar perfurações a 850 PPM sem rasgar prematuramente. Totalmente atóxico, inodoro e hipoalergênico.",
    beginnerExplanation: "Sabe quando você vai bordar uma toalha de banho bem peluda e as letrinhas parecem que afundaram e sumiram dentro dos pelos? O Water-Soluble Topper é o 'plástico mágico' transparente que a gente coloca por cima da toalha antes de bordar! A linha borda em cima dele bem lisinha e brilhante. Depois você tira o excesso com a mão e passa um paninho úmido: o plástico derrete na hora e a toalha fica perfeita como de loja!",
    howItWorks: [
      "1. A toalha felpuda ou tecido com textura é colocado no bastidor com entretela por baixo.",
      "2. Corta-se uma folha de filme hidrossolúvel no tamanho da área que será bordada.",
      "3. Posiciona-se o filme plástico transparente esticado por cima da frente da toalha.",
      "4. Fixa-se o filme com alfinetes nos cantos externos, fita micropore ou ponto de alinhavo prévio (Basting).",
      "5. A máquina borda normalmente sobre o plástico.",
      "6. Retira-se a peça do bastidor e puxa-se o excesso do plástico com as mãos.",
      "7. Borrifa-se uma leve névoa de água limpa e passa-se um paninho macio: o plástico dissolve completamente sem deixar vestígios."
    ],
    applications: [
      "Bordados em toalhas de banho, toalhas de rosto, roupões e toalhas de praia felpudas.",
      "Peças de veludo alemão, veludo cotelê, microfibra, soft fleece e pelúcia.",
      "Bordados de nomes e logotipos em camisas polo de malha piquet.",
      "Suéteres de tricô, mantas de lã de bebê e tecidos de malha com elastano."
    ],
    characteristics: [
      "Dissolução 100% instantânea em água sem manchar linhas ou tecidos.",
      "Transparência total que não esconde as marcações de posicionamento da peça.",
      "Elimina a necessidade de colocar densidades de ponto exageradas na matriz."
    ],
    commonErrors: [
      "❌ Usar saco plástico comum de polietileno (não dissolve em água e fica picotado feio no bordado para sempre).",
      "❌ Tentar passar ferro quente diretamente sobre o plástico antes de dissolver com água (o plástico queima e gruda no ferro).",
      "❌ Guardar o rolo de filme hidrossolúvel em ambientes úmidos sem embalagem plástica lacrada."
    ],
    troubleshootingTips: [
      "Ficaram fiapos de plástico presos dentro das letras minúsculas: borrife água morna e esfregue de leve com uma escovinha de dente macia; ele dissolve em 3 segundos.",
      "O plástico rasgou no meio do bordado antes da hora: verifique se a agulha está com rebarba ou reduza a densidade do ponto cheio no software.",
      "O plástico enrugou na costura: use fita crepe para prender as quatro pontas do filme bem esticadas na borda do bastidor."
    ],
    dicaArtrelados: "Tenha sempre um borrifador com água limpa e um pedaço de pano de microfibra na bancada de acabamento. Depois de rasgar o excesso de plástico com a mão, dê apenas UMA borrifadinha e encoste a microfibra: o plástico some como mágica e a toalha já sai sequinha e pronta para entregar!",
    voceSabia: "O polímero de PVA hidrossolúvel utilizado nesses filmes foi inventado no Japão e é o mesmo material seguro e biodegradável usado para encapsular remédios que se dissolvem no estômago humano!",
    practicalExercise: "Borde duas letras iguais em uma toalha felpuda: uma com filme hidrossolúvel por cima e outra direto na toalha sem plástico. Compare o resultado sob a luz e veja a diferença brutal de nitidez, brilho e relevo!",
    quickSummary: "Water-Soluble Topper é o filme plástico de PVA hidrossolúvel colocado sobre toalhas e veludos para manter os pontos na superfície, dissolvendo-se totalmente em contato com água.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Espessura do filme: 20 a 35 micras"
    },
    relatedTerms: [
      "Solvy Topping",
      "Entretela Hidrossolúvel",
      "Knockdown Stitch",
      "Toalhas Felpudas",
      "PVA (Álcool Polivinílico)"
    ],
    tags: [
      "w-076",
      "topper",
      "hidrossoluvel",
      "solvy",
      "pva",
      "toalha",
      "veludo",
      "estabilizador",
      "artrelados"
    ],
    bibliographicReferences: [
      "SULKY OF AMERICA. Stabilizer Guide: Solvy Water Soluble Stabilizers and Toppings. Port Charlotte, 2022.",
      "GUNOLD GMBH. Solvy Film: Applications on Terry Cloth, Pique and Knitwear. Stockstadt, 2021.",
      "ARTRELADOS. Guia Técnico dos Estabilizadores Especiais: Água, Calor e Rasgadeiras. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-077-waffle-pique-e-tecido-favo-de-mel-no-bordado",
    code: "W-077",
    letter: "W",
    term: "Waffle Pique e Tecido Favo de Mel no Bordado (Waffle Weave Fabric & Honeycomb Pique Stabilization)",
    pronunciation: "uá-fol pi-quê e te-ci-do fa-vo de mel no bor-da-do",
    level: "Intermediário 🟡",
    category: "Estruturação & Física Têxtil",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'waffle' (massa com formato de colmeia/quadriculada) e do francês 'piqué'. Estrutura têxtil tridimensional de alta absorção inventada no século XIX.",
    summary: "Técnicas de digitalização e estabilização para bordar em tecidos com relevo tridimensional em favo de mel (waffle), prevenindo distorções nos relevos côncavos.",
    definition: "O Waffle Pique e Tecido Favo de Mel no Bordado (Three-Dimensional Honeycomb Waffle Weave & Grid Stabilization Mechanics) é o conjunto de procedimentos técnicos aplicados a tecidos de algodão estruturados em relevos geométricos côncavos e convexos em formato de colmeia. Devido à sua trama tridimensional com células profundas e alta elasticidade diagonal, quando uma agulha penetra na depressão do favo, o ponto afunda; quando penetra na crista, o ponto fica elevado, gerando contornos serrilhados e deformações no desenho. Para bordar waffle com perfeição, exige-se o uso de underlay de tatami leve de ancoragem prévia, filme hidrossolúvel na superfície e entretela rasgadeira de densidade uniforme.",
    technicalDetails: "Estrutura têxtil com encolhimento pós-lavagem de até 8% a 12% se não pré-encolhida. Densidade recomendada para ponto cheio: 0.40 mm a 0.42 mm com underlay Tatami de 90° e filme PVA de 25 micras na face superior.",
    beginnerExplanation: "O tecido 'favo de mel' (ou waffle) é aquele tecido lindo cheio de quadradinhos afundados usado em toalhas de lavabo chiques, roupões de spa e panos de prato nobres. Como ele tem partes fundas e partes altas, se você bordar direto, o bordado fica todo torto e mordido! Para ficar perfeito, colocamos plástico hidrossolúvel em cima e uma entretela firme embaixo, e o bordado fica lisinho como um azulejo!",
    howItWorks: [
      "1. Lava-se ou vaporiza-se o tecido waffle antes de bordar caso não seja pré-encolhido de fábrica.",
      "2. Coloca-se entretela média de rasgar (Tear-Away 60 g/m²) no bastidor com o tecido sem esticar a trama.",
      "3. Aplica-se filme hidrossolúvel (Water-Soluble Topper) por cima do tecido.",
      "4. A matriz executa uma base de underlay em ponto corrido cruzado ou tatami leve para aplainar as cristas do favo.",
      "5. Os pontos cheios de letras e monogramas são bordados sobre a base nivelada.",
      "6. Retira-se o excesso de entretela e dissolve-se o plástico com água morna.",
      "7. A peça fica com monogramas nítidos, relevo nobre e sem repuxar a textura colmeia ao redor."
    ],
    applications: [
      "Toalhas de lavabo e roupões de banho de hotelaria de luxo e spas.",
      "Panos de copa requintados, guardanapos e jogos americanos de tecido favo de mel.",
      "Mantas de bebê e enxovais de maternidade com textura waffle 100% algodão.",
      "Necessaires, roupões de noiva e kimonos de estética."
    ],
    characteristics: [
      "Visual nobre e sofisticado com textura tátil diferenciada.",
      "Alta capacidade de absorção de umidade e secagem rápida.",
      "Exige estabilização superior e inferior para anular a deformação das colmeias."
    ],
    commonErrors: [
      "❌ Bordar sem filme hidrossolúvel na superfície (os pontos caem nos buracos dos favos e somem).",
      "❌ Esticar o tecido waffle no bastidor (quando solta do bastidor, o tecido encolhe e o bordado vira uma cuia enrugada).",
      "❌ Usar densidades ultra-pesadas (< 0.35 mm) que picotam as cristas da trama de algodão."
    ],
    troubleshootingTips: [
      "As letras retas ficaram parecendo uma escadinha torta: a agulha está caindo dentro dos buracos do tecido; ative um underlay reticulado duplo e use filme hidrossolúvel por cima.",
      "O tecido enrugou em volta do monograma após a primeira lavagem: use tecido waffle pré-lavado e troque entretela de papel fraca por entretela não-tecida multidirecional.",
      "A agulha está desfiando os fios do favo de mel: substitua a agulha ponta fina por uma agulha Ponta Bola Pequena (SES 75/11)."
    ],
    dicaArtrelados: "O segredo de ouro do tecido favo de mel: NUNCA puxe o tecido na hora de apertar o bastidor! Enquadre o waffle de forma 100% relaxada e fofa, e use SEMPRE o plástico hidrossolúvel por cima. O seu monograma vai ficar em alto relevo espetacular digno de hotel 5 estrelas!",
    voceSabia: "O tecido waffle foi criado na França no século XVIII e ganhou esse nome porque a sua trama tridimensional imitava com perfeição a textura das famosas fôrmas de assar waffles belgas!",
    practicalExercise: "Borde um monograma de 5 cm em um pedaço de tecido favo de mel com filme hidrossolúvel por cima e entretela de rasgar embaixo sem esticar o tecido. Lave e passe a peça para conferir a estabilidade e o acabamento de luxo.",
    quickSummary: "Waffle Pique é o tecido de textura colmeia tridimensional que exige enquadramento sem tração, filme hidrossolúvel superior e subponto de ancoragem para bordados sem deformações.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola Pequena (SES)",
      density: "Densidade: 0.40 mm a 0.42 mm com filme PVA de topo"
    },
    relatedTerms: [
      "Tecido Favo de Mel",
      "Piqué de Algodão",
      "Water-Soluble Topper",
      "Underlay Reticulado",
      "Estabilidade Dimensional"
    ],
    tags: [
      "w-077",
      "waffle",
      "favodemel",
      "pique",
      "toalhas",
      "enxoval",
      "estabilizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "AMERICAN APPAREL & FOOTWEAR ASSOCIATION. Dimensional Stability & Embroidery on Textured Woven Fabrics. Arlington, 2022.",
      "EMBROIDERY TRADE ASSOCIATION. Digitizing for Pique and Waffle Fabrics. Dallas, 2021.",
      "ARTRELADOS. Manual Prático de Bordados em Tecidos Especiais e Texturizados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-078-whip-stitch-e-ponto-chicote-no-arremate-de-bordas",
    code: "W-078",
    letter: "W",
    term: "Whip Stitch e Ponto Chicote no Arremate de Bordas (Whip Stitch & Decorative Appliqué Edge Binding)",
    pronunciation: "uip stitx e pon-to xi-co-te no ar-re-ma-te de bor-das",
    level: "Intermediário 🟡",
    category: "Pontos & Estruturas de Ponto",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'whip' (chicotear / envolver rapidamente) e 'stitch' (ponto). Técnica tradicional de costura manual adaptada para matrizes eletrônicas.",
    summary: "Tipo de ponto diagonal espaçado que envolve as bordas de tecidos e apliques, proporcionando fixação mecânica segura com baixo consumo de pontos e visual rústico.",
    definition: "O Whip Stitch e Ponto Chicote no Arremate de Bordas (Helical Whip Stitching & Appliqué Edge Encasement) é um padrão de ponto de bordado eletrônico caracterizado por passagens diagonais abertas e inclinadas que abraçam a margem recortada de um tecido ou aplique. Diferente do ponto cheio clássico (cetim fechado) ou do ponto caseado (Blanket Stitch), o ponto chicote possui uma geometria helicoidal com espaçamento largo (1,5 mm a 3,0 mm entre pontadas) que 'chicoteia' a borda do material contra a base. É amplamente utilizado na confecção de emblemas rústicos, apliques de feltro, peças em couro sintético e na fixação de cordões e passamanarias decorativas.",
    technicalDetails: "Comprimento de avanço programável de 1.8 mm a 3.2 mm com largura de coluna de 2.0 mm a 4.0 mm. Consome até 70% menos linha e pontos em comparação com o ponto cheio tradicional, minimizando a rigidez e o tempo de máquina.",
    beginnerExplanation: "É aquele pontinho inclinado e charmoso que dá voltinhas na beirada do tecido, parecendo uma cordinha enrolada na borda! Ele é muito usado quando a gente quer prender um aplique de tecido ou feltro bem rápido, sem gastar um monte de linha e dando aquele ar rústico e artesanal de peça feita com carinho!",
    howItWorks: [
      "1. O programador define a linha perimétrica do aplique no software de matrizes.",
      "2. Seleciona o estilo de contorno como 'Ponto Chicote / Whip Stitch'.",
      "3. Ajusta o espaçamento entre as passadas (ex: 2.2 mm) e a largura do abraço na borda (ex: 2.8 mm).",
      "4. A máquina borda a linha de corte, a bordadeira aplica o tecido de aplique e a máquina executa o ponto chicote.",
      "5. A linha envolve a margem recortada com inclinação constante de aproximadamente 45°.",
      "6. A borda fica perfeitamente presa, flexível e com acabamento decorativo rústico."
    ],
    applications: [
      "Fixação de apliques em feltro, soft, flanela e tecidos que não desfiam facilmente.",
      "Acabamento de bordas em porta-copos, chaveiros in-the-hoop e patches rústicos.",
      "Bordados temáticos estilo Country, Western, Boho Chic e Vintage.",
      "Fixação mecânica rápida de cordões finos e fitas decorativas em matrizes com dispositivo de cordão."
    ],
    characteristics: [
      "Extrema economia de pontos (reduz o tempo de bordado em até 60%).",
      "Toque leve e muito flexível, sem criar aquela 'placa dura' na peça.",
      "Excelente efeito estético rústico e artesanal."
    ],
    commonErrors: [
      "❌ Usar em tecidos que desfiam muito (como cetim ou viscose pura) sem aplicar termocolante prévio nas bordas.",
      "❌ Programar espaçamento aberto demais (> 4 mm), permitindo que a ponta do aplique escape e levante.",
      "❌ Usar linha de espessura muito fina (nº 60), deixando o ponto chicote apagado e sem presença visual."
    ],
    troubleshootingTips: [
      "A beirada do aplique está escapando por entre os pontos: diminua o espaçamento do ponto chicote para 1.8 mm e aumente a largura para 3.5 mm.",
      "Os fios do tecido base estão desfiando: passe termocolante definitivo no verso do tecido do aplique antes de cortar a borda.",
      "O ponto ficou fino e sumido: use linha de bordar calibre 30wt mais grossa ou configure ponto chicote duplo."
    ],
    dicaArtrelados: "Para fazer peças infantis de feltro ou chaveiros 'In The Hoop' rápidos: substitua o ponto cheio pesado pelo Ponto Chicote! O bordado fica pronto na metade do tempo, a máquina trabalha suave e a peça ganha aquele visual artesanal fofo que os clientes adoram!",
    voceSabia: "O ponto chicote é um dos pontos manuais mais antigos da humanidade: arqueólogos encontraram vestígios de calçados de couro e tendas do período Neolítico unidos exatamente com essa técnica de ponto inclinado há mais de 5.000 anos!",
    practicalExercise: "Crie uma matriz simples com formato de coração e aplique de feltro contornado com ponto chicote (largura 3.0 mm, espaçamento 2.0 mm). Borde em uma toalhinha e cronometre como ele é rápido e econômico em relação ao ponto cheio.",
    quickSummary: "Whip Stitch (Ponto Chicote) é o ponto inclinado helicoidal que envolve e arremata bordas de apliques e patches com rapidez, baixo número de pontos e charme rústico.",
    recommendedSettings: {
      speedPPM: "800 a 950 PPM",
      needleType: "75/11 Ponta Fina ou Ponta Bola",
      density: "Espaçamento: 1.8 mm a 2.5 mm | Largura: 2.5 mm a 3.5 mm"
    },
    relatedTerms: [
      "Ponto Caseado (Blanket Stitch)",
      "Ponto Cheio (Satin Stitch)",
      "Bordado de Aplique",
      "In The Hoop (ITH)",
      "Termocolante de Aplique"
    ],
    tags: [
      "w-078",
      "whipstitch",
      "pontochicote",
      "aplique",
      "contorno",
      "rustico",
      "acabamento",
      "artrelados"
    ],
    bibliographicReferences: [
      "EMBROIDERY INDUSTRY COUNCIL. Decorative Applique Stitch Types & Fast Production Methods. Atlanta, 2021.",
      "WILCOM EMBROIDERY STUDIO. Motif Stitches, Blanket and Whip Stitch Properties. Sydney, 2022.",
      "ARTRELADOS. Guia de Apliques Criativos e Otimização de Produção em Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-079-winding-tension-e-calibracao-de-bobinadeira-auxiliar",
    code: "W-079",
    letter: "W",
    term: "Winding Tension e Calibração de Bobinadeira Auxiliar (Bobbin Winding Tension & External Spindle Calibration)",
    pronunciation: "uin-ding ten-xion e ca-li-bra-são de bo-bi-na-dei-ra au-xi-li-ar",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica, Calibração & Manutenção",
    origin: "Do inglês 'winding' (enrolamento/bobinamento) e 'tension' (tensão mecânica). Parâmetro crítico de dinamometria na preparação de canelinhas.",
    summary: "Protocolo de calibração da tensão de enrolamento de linhas em canelinhas através de enchedores externos, prevenindo bobinas deformadas ou laçadas soltas.",
    definition: "A Winding Tension e Calibração de Bobinadeira Auxiliar (External Bobbin Winding Dynamics & Thread Density Calibration) é o controle metrológico da força de estiramento e fricção aplicada à linha inferior durante o processo de enchimento de carretilhas (bobinas/canelinhas). Quando a tensão do enchedor está frouxa demais (< 15 gf), a linha enrola fofa e desordenada, causando laçadas que travam na caixa de bobina. Por outro lado, quando a tensão está excessivamente apertada (> 45 gf), a linha de poliéster é estirada além do seu limite elástico e se contrai com força monumental dentro da carretilha, arqueando as abas plásticas ou metálicas da bobina (*flange bowing*), o que faz a canelinha raspar nas paredes da caixa de bobina e desregular 100% o ponto.",
    technicalDetails: "Faixa de tensão recomendada no tensor do enchedor: 20 a 30 gf (gramas-força) medidos com tensiômetro analógico/digital tipo dinamômetro de fio. O bobinamento deve ser perfeitamente cilíndrico, com nível preenchido até 85% do diâmetro externo da bobina (1 mm abaixo da borda).",
    beginnerExplanation: "Quando você enche a canelinha da máquina no enchedor externo, você não pode deixar a linha nem frouxa que nem um novelo solto, nem apertada demais feito arame esticado! Se ficar fofa, a linha embola embaixo do tecido. Se ficar apertada demais, a linha amassa as beiradas da canelinha e ela não roda direito dentro da máquina. Essa regulagem é o 'ponto certo' para a canelinha encher lisinha, retinha e macia!",
    howItWorks: [
      "1. A bordadeira passa a linha do cone pelos guias e discos de tensão da bobinadeira externa.",
      "2. Passa a ponta da linha pelo furinho da canelinha e acopla no eixo giratório.",
      "3. Ajusta o disco de tensão com a mola para que a linha corra com resistência suave e uniforme.",
      "4. Aciona o motor do enchedor observando a distribuição homogênea de vai-e-vem da linha.",
      "5. O enchedor desliga automaticamente ao atingir 85% de preenchimento.",
      "6. A bordadeira aperta a bobina com as pontas dos dedos: ela deve estar firme e compacta, sem afundar como esponja e sem que as abas laterais estejam abertas.",
      "7. A canelinha é instalada na máquina garantindo rotação perfeitamente livre e tensão constante de 22 gf."
    ],
    applications: [
      "Preparação seriada de canelinhas para produção industrial em máquinas multicabeças.",
      "Eliminação de paradas por corte de linha falso e variações de tensão no verso.",
      "Preservação da vida útil de canelinhas metálicas e de alumínio magnético.",
      "Padronização de tensão para ateliês com alta demanda diária de bordado."
    ],
    characteristics: [
      "Garante desenrolamento suave e sem trancos dentro da caixa de bobina.",
      "Evita o empenamento e deformação permanente das carretilhas.",
      "Aumenta a metragem útil de linha por canelinha em até 30%."
    ],
    commonErrors: [
      "❌ Encher a canelinha em velocidade máxima sem passar a linha pelos discos tensores da bobinadeira.",
      "❌ Encher a canelinha até transbordar a borda externa, fazendo-a travar na tampa da lançadeira.",
      "❌ Usar canelinhas com as abas plásticas trincadas ou tortas por tensão excessiva prévia."
    ],
    troubleshootingTips: [
      "A canelinha está raspando e fazendo barulho dentro da máquina: segure a bobina cheia contra a luz; se as laterais estiverem arqueadas para fora, descarte a bobina e afrouxe o tensor da bobinadeira.",
      "A máquina dá nós gigantescos no avesso a cada 2 minutos: a canelinha foi enchida muito fofa; descarte a linha e encha novamente passando pelos discos de tensão corretamente.",
      "A linha arrebenta durante o enchimento: verifique se não há rebarbas no eixo ou na guia de passagem de fio da bobinadeira."
    ],
    dicaArtrelados: "Faça o 'teste do polegar' na sua canelinha cheia: aperte a linha com a ponta do dedo. A linha deve estar firme como uma borrachinha, nunca mole como um travesseiro nem dura como uma pedra! Canelinha bem enrolada é sinônimo de máquina que borda o dia todo sem nenhuma quebra de linha!",
    voceSabia: "Em fábricas industriais de alta rotação (1.200 PPM), o atrito gerado por uma canelinha torta pode elevar a temperatura da caixa de bobina a mais de 60 °C, derretendo microfibras de poliéster e travando a lançadeira!",
    practicalExercise: "Encha 3 canelinhas: uma passando corretamente pelos discos de tensão, uma sem passar pelo tensor e outra apertando o tensor no máximo. Coloque cada uma na caixa de bobina e sinta na mão como a puxada da linha muda drasticamente.",
    quickSummary: "Winding Tension é a calibração da força de enrolamento de canelinhas em enchedores externos, garantindo densidade perfeita sem deformar a carretilha nem soltar laçadas.",
    recommendedSettings: {
      speedPPM: "Velocidade média de enchimento",
      needleType: "N/A",
      density: "Tensão de enrolamento: 20 a 30 gf | Preenchimento: 85%"
    },
    relatedTerms: [
      "Caixa de Bobina (Bobbin Case)",
      "TOWI Gauge (Tensiômetro)",
      "Canelinha Pré-Enrolada (Pre-Wound)",
      "Linha de Bobina 60wt",
      "Lançadeira Rotativa"
    ],
    tags: [
      "w-079",
      "bobinadeira",
      "canelinha",
      "winding",
      "tensao",
      "bobbin",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL BULLETIN. Bobbin Winding Dynamics and Flange Deformation Prevention. Nagoya, 2021.",
      "GUNOLD TECHNICAL MANUAL. Thread Tension & Bobbin Preparation Mastery. Stockstadt, 2022.",
      "ARTRELADOS. Calibração Mecânica e Manutenção de Precisão para Ateliês de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-080-wool-thread-e-fios-de-la-no-bordado-computadorizado",
    code: "W-080",
    letter: "W",
    term: "Wool Thread e Fios de Lã no Bordado Computadorizado (Wool & Acrylic Specialty Threads for Textured Embroidery)",
    pronunciation: "uul tréd e fi-os de lã no bor-da-do com-pu-ta-do-ri-za-do",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Fios & Linhas",
    origin: "Do inglês 'wool' (lã natural de ovelha) e 'thread' (linha de costura/bordado). Linhas desenvolvidas na Europa para reproduzir efeitos de tapeçaria e tricô em máquinas CNC.",
    summary: "Linhas especiais encorpadas à base de lã e acrílico (título 12wt) que conferem efeito aveludado, textura volumosa de tapeçaria e aspecto artesanal de inverno.",
    definition: "A Wool Thread e Fios de Lã no Bordado Computadorizado (Wool & Acrylic Heavyweight Embroidery Threads / Lana Filaments / 12wt Textured Fibers) é uma categoria nobre de insumo têxtil composta por misturas de lã natural (30% a 50%) e fibras acrílicas de alta tenacidade (50% a 70%) com título extremamente grosso (típico 12wt / Denier 900), correspondendo a quase quatro vezes a espessura de uma linha de poliéster 40wt tradicional. Ao ser bordada com agulhas de olho grande (100/16 ou 110/18) e velocidade reduzida, essa linha preenche rapidamente áreas amplas com baixo número de pontos e cria uma textura macia, aveludada e fosca que imita bordados feitos à mão com fios de lã pura e tapeçaria clássica.",
    technicalDetails: "Título padrão: 12wt (aproximadamente 3 vezes mais grossa que a 40wt). Exige densidade de matriz muito aberta (stitch spacing de 0.8 mm a 1.2 mm), comprimento mínimo de ponto de 3.0 mm e agulha especial com olho largo tipo Topstitch ou Madeira Lana Needle 100/16.",
    beginnerExplanation: "É uma linha especial grossinha feita de lã de verdade com acrílico! Quando você borda com ela, o desenho não fica brilhoso de plástico como as linhas comuns: ele fica fofinho, aveludado e com cara de suéter de inverno ou tapeçaria antiga feita à mão pelas vovós! É perfeita para bordar bichinhos peludinhos, casacos quentinhos e detalhes de Natal!",
    howItWorks: [
      "1. O programador digitaliza a matriz com densidade bem aberta (0.9 mm a 1.0 mm) para não acumular linha.",
      "2. Instala-se na máquina uma agulha especial grossa de olho grande (tamanho 100/16 ou 110/18).",
      "3. Passa-se a linha de lã suavemente pelos guias e afrouxa-se a tensão superior da máquina.",
      "4. Reduz-se a velocidade da máquina para 500 a 600 PPM.",
      "5. A máquina borda criando uma cobertura volumosa com textura aveludada.",
      "6. Ao finalizar, passa-se uma escovinha de cerdas metálicas macias (Lana Brush) sobre o bordado para 'puxar' os pelinhos da lã, criando um efeito de pelúcia fofa espetacular.",
      "7. A peça ganha valor agregado altíssimo e acabamento exclusivo."
    ],
    applications: [
      "Bordados temáticos de outono/inverno em casacos, suéteres, gorros e cachecóis.",
      "Pelagem realista e fofinha de animais (ursos, ovelhas, coelhos e cachorros).",
      "Motivos natalinos clássicos, florais rústicos e arte folk em almofadas de linho.",
      "Reprodução de bordados tradicionais de tapeçaria e ponto cruz computadorizado."
    ],
    characteristics: [
      "Acabamento totalmente fosco, nobre e com toque aveludado e acolhedor.",
      "Preenche grandes superfícies com 50% menos pontos na matriz.",
      "Possibilidade de escovação pós-bordado para criar efeito de pelo e pelúcia."
    ],
    commonErrors: [
      "❌ Tentar bordar linha de lã com agulha fina comum (75/11), desfiando a linha e quebrando a agulha instantaneamente.",
      "❌ Usar a mesma densidade fechada de linha comum (0.40 mm), criando um bloco duro que trava a máquina.",
      "❌ Rodar a máquina em velocidade máxima (> 900 PPM) com fios de lã."
    ],
    troubleshootingTips: [
      "A linha de lã está desfiando no olho da agulha: troque a agulha por uma 100/16 Topstitch de olho largo e verifique se a passagem de linha está livre de arestas cortantes.",
      "A máquina está embolando por baixo: afrouxe a tensão superior da linha e diminua a velocidade para 550 PPM.",
      "O bordado ficou parecendo uma pedra dura: aumente o espaçamento de densidade da matriz no software para 0.9 mm."
    ],
    dicaArtrelados: "Quer deixar o bordado de um ursinho ou ovelhinha parecendo um bicho de pelúcia de verdade? Borde com linha de lã (Madeira Burmilana ou similar) e, quando terminar, passe uma escovinha de cerdas macias em círculos sobre o bordado: os pelinhos sobem e o toque fica irresistivelmente fofinho!",
    voceSabia: "As linhas de lã para máquinas de bordar automáticas foram desenvolvidas inicialmente na Alemanha para bordar os tradicionais trajes folclóricos bávaros (*Trachten* e *Lederhosen*) com a mesma textura dos bordados manuais do século XVIII!",
    practicalExercise: "Digitalize um pequeno círculo com ponto Tatami e densidade de 0.9 mm. Coloque uma agulha 100/16 e linha de lã na máquina. Borde em um pedaço de feltro e passe uma escovinha macia por cima para sentir o incrível efeito de pelúcia.",
    quickSummary: "Wool Thread é a linha especial encorpada de lã e acrílico (12wt) que exige agulha grossa de olho grande e densidade aberta, proporcionando textura de tapeçaria, toque macio e efeito aveludado.",
    recommendedSettings: {
      speedPPM: "500 a 600 PPM",
      needleType: "100/16 ou 110/18 Topstitch ou Madeira Lana",
      density: "Densidade aberta: 0.85 mm a 1.10 mm com pontos longos (> 3 mm)"
    },
    relatedTerms: [
      "Linha 12wt",
      "Agulha Topstitch",
      "Madeira Burmilana",
      "Tapeçaria Computadorizada",
      "Escovação Têxtil (Lana Brush)"
    ],
    tags: [
      "w-080",
      "woolthread",
      "linhadela",
      "burmilana",
      "12wt",
      "aveludado",
      "inverno",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA GARNE. Burmilana 12 Technical Guide & Digitizing Rules for Heavy Threads. Freiburg, 2022.",
      "SUPERIOR THREADS. Working with Heavy Gauge 12wt Threads and Large Eye Needles. St. George, 2021.",
      "ARTRELADOS. Insumos Nobres e Fios Especiais para Bordados Artísticos de Luxo. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-081-wing-needle-e-agulha-asa-para-ponto-ajour-e-bainhas-abertas",
    code: "W-081",
    letter: "W",
    term: "Wing Needle e Agulha Asa para Ponto Ajour e Bainhas Abertas (Wing Needle & Heirloom Hemstitching Ajour Technique)",
    pronunciation: "uing ni-dol e a-gu-lha a-sa pa-ra pon-to a-jur e bai-nhas a-ber-tas",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Agulhas & Mecânica de Penetração",
    origin: "Do inglês 'wing' (asa / aleta lateral) e do francês 'ajour' (abertura de luz / vazado decorativo). Técnica clássica de costura imperial europeia (*Heirloom Sewing*).",
    summary: "Agulha especial com aletas laterais largas em forma de asas que afasta os fios da trama do tecido sem cortá-los, criando furinhos decorativos de ponto ajour e rendas.",
    definition: "A Wing Needle e Agulha Asa para Ponto Ajour e Bainhas Abertas (Winged Hemstitch Needle & Heirloom Openwork Piercing Mechanism) é uma agulha técnica especializada cuja haste possui duas aletas metálicas longitudinais em formato de asas projetadas lateralmente (calibre 100/16 ou 120/19). Durante o ciclo de penetração em tecidos de fibras naturais frouxamente tecidas (como puro linho, cambraia de linho, batista de algodão e percal), as aletas da agulha afastam mecanicamente os fios do urdume e da trama, abrindo orifícios perfeitamente calibrados. Em seguida, os pontos corridos e em ziguezague da matriz amarram as margens desses furos, criando os célebres motivos vazados de bainha aberta (*Hemstitching*) e ponto ajour tradicional sem necessidade de corte a laser ou tesouras.",
    technicalDetails: "Dimensões das asas: largura de até 2.5 mm na parte mais larga da lâmina. Uso exclusivo em tecidos de fibras naturais com ligamento tafetá plano (não funciona em malhas ou sintéticos). Velocidade máxima recomendada: 450 a 600 PPM com linha fina de algodão 50wt ou 60wt e entretela hidrossolúvel não-tecida.",
    beginnerExplanation: "É uma agulha super diferente que parece ter 'duas asinhas' nas laterais! Quando a máquina faz a agulha descer no linho ou algodão, essas asinhas empurram os fios do tecido para os lados e abrem um furinho bem redondinho e perfeito, e a linha costura em volta segurando o buraquinho aberto! É a técnica mágica para fazer aqueles bordados clássicos de batizado, vestidos de daminha e guardanapos de linho puro cheios de furinhos rendados!",
    howItWorks: [
      "1. A bordadeira enquadra o tecido de linho puro ou cambraia de algodão com entretela hidrossolúvel de lavar.",
      "2. Instala a Agulha Asa (Wing Needle 100/16 ou 120/19) na máquina de bordar.",
      "3. Abastece a linha superior e a bobina com fio fino de algodão mercerizado (50wt ou 60wt) na mesma cor do tecido.",
      "4. Carrega uma matriz de ponto ajour ou bainha aberta com perfurações repetidas no mesmo ponto.",
      "5. A máquina penetra a agulha com as asas abrindo o poro e costura ao redor para travar o furo.",
      "6. A velocidade é mantida baixa (500 PPM) para não rasgar o tecido.",
      "7. Ao lavar a peça, a entretela dissolve e o tecido revela uma renda vazada autêntica de alta costura."
    ],
    applications: [
      "Enxovais clássicos de batizado, mandriões de bebê e vestidos de daminha em cambraia.",
      "Guardanapos de linho puro, jogos americanos nobres e toalhas de mesa de banquete.",
      "Bainhas decorativas em lenços masculinos de bolso e camisaria fina.",
      "Detalhes de alfaiataria clássica e paramentos sacros."
    ],
    characteristics: [
      "Cria orifícios vazados perfeitos sem cortar nem esfiapar os fios do tecido.",
      "Proporciona acabamento nobre de renda integrada à própria estrutura do linho.",
      "Elevadíssimo valor comercial e percepção de alta costura artesanal."
    ],
    commonErrors: [
      "❌ Usar agulha asa em tecidos sintéticos de poliéster ou malhas (os fios elásticos fecham o furo e a asinha rasga a peça).",
      "❌ Tentar usar o passador automático de linha da máquina (a asa da agulha destrói o ganchinho do passador).",
      "❌ Usar linha grossa e brilhante de poliéster em vez de fio fino fosco de algodão."
    ],
    troubleshootingTips: [
      "Os furinhos fecharam sozinhos após tirar do bastidor: o tecido possui fibras sintéticas; use apenas tecidos 100% naturais como linho puro ou cambraia de algodão.",
      "A agulha está quebrando ao bater na chapa: certifique-se de que a chapa de agulha possui abertura larga (chapa ziguezague) e que a matriz não ultrapassa a largura máxima.",
      "O passador de linha quebrou: NUNCA acione o passador automático com agulha asa; passe a linha no olho manualmente."
    ],
    dicaArtrelados: "Lembrete importantíssimo de segurança: NUNCA aperte o botão de passar linha automático da sua máquina quando a Agulha Asa estiver instalada! As asinhas dela são largas e vão entortar o ferrinho do passador! Passe a linha com a mão ou com uma pinça e aproveite o bordado mais chique do mundo!",
    voceSabia: "A técnica do ponto ajour com agulha asa foi muito popularizada na França no século XIX pela corte da Imperatriz Eugênia de Montijo, que exigia que todos os lenços e roupas de cama do palácio fossem decorados com essa técnica vazada!",
    practicalExercise: "Pegue um retalho de linho puro 100%, coloque entretela de lavar por baixo e instale uma agulha asa. Selecione um ponto de ajour clássico da sua máquina e borde a 500 PPM. Lave a peça e veja a perfeição dos furinhos rendados!",
    quickSummary: "Wing Needle (Agulha Asa) possui aletas laterais que abrem orifícios decorativos perfeitos em tecidos de linho e algodão, criando o ponto ajour e bainhas abertas de alta costura.",
    recommendedSettings: {
      speedPPM: "450 a 550 PPM",
      needleType: "Schmetz ou Organ Wing Needle 100/16 ou 120/19",
      density: "Uso com matrizes específicas de Ajour / Hemstitching"
    },
    relatedTerms: [
      "Ponto Ajour (Hemstitching)",
      "Heirloom Sewing",
      "Linho Puro e Cambraia",
      "Entretela de Lavar (Wash-Away)",
      "Chapa de Ponto Largo"
    ],
    tags: [
      "w-081",
      "wingneedle",
      "agulhaasa",
      "ajour",
      "linho",
      "heirloom",
      "batizado",
      "alta costura",
      "artrelados"
    ],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. Specialty Needles: The Wing Hemstitch Needle in Decorative Heirloom Sewing. Aachen, 2022.",
      "YENTER, Karen. Classic Heirloom Embroidery: Techniques for Wing Needles and Openwork. Des Moines, 2021.",
      "ARTRELADOS. Técnicas Clássicas de Alta Costura e Ponto Ajour no Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-082-warp-and-weft-grain-e-mecanica-de-urdume-e-trama",
    code: "W-082",
    letter: "W",
    term: "Warp and Weft Grain e Mecânica de Urdume e Trama (Warp and Weft Grain Alignment & Fabric Bias Stability)",
    pronunciation: "uarp end uéft grein e me-ca-ni-ca de ur-du-me e tra-ma",
    level: "Intermediário 🟡",
    category: "Estruturação & Física Têxtil",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês antigo 'weorp' (fios longitudinais do tear) e 'weft' (fios transversais tecidos com a lançadeira). Fundamento milenar da engenharia de tecelagem.",
    summary: "Princípio da física têxtil que estuda a orientação dos fios de urdume e trama no bastidor para anular a deformação diagonal e o enrugamento de matrizes.",
    definition: "O Warp and Weft Grain e Mecânica de Urdume e Trama (Orthogonal Grain Alignment, Bias Mechanics & Textile Tension Balance) é o conhecimento técnico e prático sobre a orientação espacial dos fios longitudinais (Urdume / Warp) e dos fios transversais (Trama / Weft) de um tecido plano durante o enquadramento no bastidor e a digitalização da matriz. Enquanto o urdume (paralelo à ourela) possui baixíssima elasticidade e a trama apresenta leve flexibilidade, a direção diagonal a 45° (o Viés / Bias) possui máxima deformação plástica. Quando uma matriz com pontos pesados é bordada na diagonal do viés sem compensação de tração, o tecido estica e enruga irreversivelmente, tornando mandatório o alinhamento ortogonal rigoroso no bastidor.",
    technicalDetails: "Módulo de elasticidade têxtil: Urdume (alongamento < 2%), Trama (alongamento 3% a 6%), Viés (alongamento de até 25% a 30%). A tensão no bastidor deve ser perfeitamente paralela aos eixos X e Y da máquina para evitar distorção em paralelogramo.",
    beginnerExplanation: "Todo tecido comum é feito como uma redinha de fios: os fios em pé (urdume) são bem durinhos e não esticam; os fios deitados (trama) esticam só um pouquinho; mas se você puxar o tecido na diagonal (o viés), ele estica feito um elástico! Se você colocar o tecido torto no bastidor, a máquina vai puxar o tecido na diagonal e o bordado vai ficar todo enrugado e torto. Colocar retinho no fio do tecido é o segredo para o bordado ficar lisinho!",
    howItWorks: [
      "1. A bordadeira identifica a direção da ourela e dos fios de urdume e trama na peça a ser bordada.",
      "2. Posiciona o gabarito plástico do bastidor alinhado rigorosamente paralelo aos fios do tecido.",
      "3. Enquadra o tecido mantendo os fios retos em ângulo de 90° com os aros do bastidor.",
      "4. Aplica a tensão do bastidor de forma uniforme nos 4 lados sem puxar o tecido na diagonal.",
      "5. A matriz executa o bordado com os ângulos de ponto compensados contra a direção do viés.",
      "6. Ao soltar a peça do bastidor, o tecido relaxa sem nenhuma onda ou repuxamento ao redor do desenho.",
      "7. A peça mantém o caimento plano e perfeito."
    ],
    applications: [
      "Enquadramento de camisas sociais, toalhas de mesa e lençóis de puro algodão.",
      "Bordados geométricos rigorosos em tecidos planos de alfaiataria e tricoline.",
      "Confecção de faixas, barras e barrados longos que não podem entortar.",
      "Prevenção de franzimento em peças de seda pura, viscose e tecidos leves."
    ],
    characteristics: [
      "Anula completamente o enrugamento diagonal (efeito cuia/ondulação).",
      "Garante que linhas retas da matriz permaneçam rigorosamente retas no tecido.",
      "Facilita o alinhamento visual com listras, xadrezes e texturas da peça."
    ],
    commonErrors: [
      "❌ Puxar as pontas do tecido na diagonal para esticar o bastidor (estica o viés e deforma o tecido para sempre).",
      "❌ Colocar a peça torta e tentar compensar girando o desenho no painel da máquina.",
      "❌ Não usar entretela estável em cortes de tecido cortados no viés (enviesados)."
    ],
    troubleshootingTips: [
      "O bordado ficou enrugado em duas pontas diagonais opostas: você puxou o tecido no viés ao apertar o bastidor; coloque o tecido reto e estique apenas suavemente acompanhando o fio.",
      "O círculo bordado virou um oval inclinado: o tecido esticou na diagonal durante o bordado; use entretela não-tecida multidirecional e reforce a fixação.",
      "O tecido de listras ficou torto após o bordado: use o gabarito milimetrado do bastidor para alinhar as linhas da grade exatamente com as listras do tecido."
    ],
    dicaArtrelados: "Regra de ouro do bastidor perfeito: NUNCA puxe o tecido pelas pontas depois de fechar o aro! Se o tecido ficou frouxo, abra o parafuso, ajeite o tecido reto no fio e aperte novamente. Puxar as pontas estica o viés e é a causa número 1 de bordados enrugados no mundo!",
    voceSabia: "Na alta costura francesa, os alfaiates chamam o corte e o bordado no sentido do urdume de 'Droit Fil' (fio reto), e consideram uma ofensa grave à arte da costura colocar qualquer peça no bastidor fora do fio!",
    practicalExercise: "Pegue um retalho quadrado de tricoline. Puxe na vertical (quase não estica), puxe na horizontal (estica um pouquinho) e puxe na diagonal de canto a canto (estica muito!). Sinta nos dedos a força do viés e entenda por que o tecido deve entrar sempre retinho no bastidor.",
    quickSummary: "Warp and Weft Grain é o alinhamento ortogonal dos fios de urdume e trama no bastidor, impedindo que a elasticidade do viés diagonal cause enrugamento e distorção no bordado.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Alinhamento a 90° com os eixos X e Y do bastidor"
    },
    relatedTerms: [
      "Urdume e Trama",
      "Sentido do Fio (Grainline)",
      "Corte no Viés (Bias)",
      "Gabarito de Bastidor",
      "Estabilidade Dimensional"
    ],
    tags: [
      "w-082",
      "urdume",
      "trama",
      "vies",
      "bastidor",
      "fisicatextil",
      "enquadramento",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXTILE INSTITUTE. Principles of Woven Fabric Mechanics and Grain Stability. Manchester, 2021.",
      "CORBMAN, Bernard P. Textiles: Fiber to Fabric and Grain Dynamics. Nova York, 2020.",
      "ARTRELADOS. Física Têxtil Aplicada: Urdume, Trama e Estabilidade no Bastidor. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-083-work-order-e-ordem-de-servico-padronizada-para-bordados",
    code: "W-083",
    letter: "W",
    term: "Work Order e Ordem de Serviço Padronizada para Bordados (Production Work Order & Embroidery Job Specification Sheet)",
    pronunciation: "uork or-der e or-dem de ser-vi-so pa-dro-ni-za-da pa-ra bor-da-dos",
    level: "Iniciante 🟢",
    category: "Gestão, Custos & Precificação",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'work order' (ordem de trabalho / ficha de produção industrial). Ferramenta essencial de gestão de qualidade e processos em ateliês e fábricas.",
    summary: "Documento técnico de produção contendo todas as especificações da matriz, cores de linha, tecido, posição, bastidor e aprovação do cliente para execução sem erros.",
    definition: "A Work Order e Ordem de Serviço Padronizada para Bordados (Embroidery Job Production Sheet & Quality Specification Manifest) é a ficha técnica de controle operacional que formaliza e documenta todas as variáveis de execução de um pedido de bordado. O documento reúne o nome e código da matriz, dimensões exatas em milímetros, contagem total de pontos, sequência rigorosa de troca de cores com os códigos dos cones de linha, tipo de entretela e agulha recomendados, modelo de bastidor, gabarito de posicionamento na peça e assinatura de aprovação do cliente sobre a amostra piloto (*Strike-Off*), blindando o ateliê contra retrabalhos e perdas financeiras.",
    technicalDetails: "Campos mandatórios: Identificação do cliente, Data de entrega, Código e versão da matriz, Total de pontos, Relação de agulhas e cores Pantone/Polyester, Distância do bolso/gola em centímetros, Tipo de entretela utilizada e Checklist de inspeção final de qualidade.",
    beginnerExplanation: "É a 'receita de bolo' e a certidão de nascimento do seu bordado! É uma folha onde você anota tudinho: qual arquivo usar, quais cores de linha colocar em cada agulha, onde exatamente posicionar o bordado na camisa e a assinatura do cliente aprovando. Com essa folhinha em mãos, qualquer pessoa no ateliê consegue bordar a encomenda sem errar nenhuma cor e sem trocar a posição do desenho!",
    howItWorks: [
      "1. Ao fechar o pedido, o atendente preenche a Ordem de Serviço com todos os dados da encomenda.",
      "2. O programador gera a folha de produção da matriz (Print Sheet) com as cores e dimensões reais.",
      "3. Anexa-se a amostra piloto bordada e aprovada pelo cliente à ficha de produção.",
      "4. A operadora da máquina separa os cones de linha exatos descritos na ordem de serviço.",
      "5. Enquadra a peça seguindo a medição exata indicada (ex: 7 cm abaixo da costura do colarinho).",
      "6. Após o bordado, o setor de acabamento faz o checklist (limpeza de linhas, remoção de entretela, passadoria).",
      "7. O pedido é embalado e entregue no prazo sem divergências com o cliente."
    ],
    applications: [
      "Gestão diária de ateliês de pequeno, médio e grande porte.",
      "Controle de produção em pedidos corporativos com centenas de peças.",
      "Registro histórico de cores e matrizes de clientes para pedidos de reposição futura.",
      "Padronização de qualidade e eliminação de perdas de peças por erro operacional."
    ],
    characteristics: [
      "Elimina 100% dos erros de 'troca de cor de linha' ou 'posição invertida'.",
      "Serve como documento jurídico de aprovação formal entre o cliente e o ateliê.",
      "Organiza o fluxo de produção por ordem de prioridade e prazo de entrega."
    ],
    commonErrors: [
      "❌ Confiar na memória ou em mensagens soltas de WhatsApp para escolher a cor da linha de uma encomenda.",
      "❌ Iniciar a produção de dezenas de camisas sem ter a ordem de serviço assinada pelo cliente.",
      "❌ Não anotar o código numérico exato do cone de linha utilizado (dificulta recompras no futuro)."
    ],
    troubleshootingTips: [
      "O cliente alegou que a cor da linha não era a que ele queria: apresente a Ordem de Serviço com a amostra piloto assinada e o código exato da linha aprovada.",
      "O bordado foi feito no lado direito em vez do lado esquerdo do peito: inclua no checklist da ordem de serviço a conferência visual do lado da peça antes do play da máquina.",
      "Faltou linha no meio da produção: anote na ordem de serviço a quantidade estimada de cones necessários antes de iniciar o lote."
    ],
    dicaArtrelados: "Crie uma prancheta física para cada máquina do seu ateliê! NUNCA aperte o botão verde de iniciar o bordado sem antes olhar para a Ordem de Serviço e checar: 'A cor da linha está certa? A posição no peito está certa?'. Esse hábito simples de 10 segundos vai salvar o seu ateliê de perder camisas caras!",
    voceSabia: "As ordens de serviço surgiram durante a Revolução Industrial no século XIX nos estaleiros navais da Inglaterra e reduziram os erros de montagem fabril em mais de 80% em toda a Europa!",
    practicalExercise: "Crie um modelo simples de Ordem de Serviço em uma folha com: Nome do Cliente, Peça, Nome da Matriz, Tamanho, Posição e Lista de Cores de Linha. Preencha na sua próxima encomenda e sinta a tranquilidade de trabalhar com organização profissional.",
    quickSummary: "Work Order (Ordem de Serviço) é o documento técnico de produção que padroniza matriz, cores, posicionamento e especificações do pedido, garantindo execução perfeita e sem erros.",
    recommendedSettings: {
      speedPPM: "Organização operacional",
      needleType: "N/A",
      density: "Controle de qualidade e processos"
    },
    relatedTerms: [
      "Ficha Técnica de Produção",
      "Amostra Piloto (Strike-Off)",
      "Checklist de Qualidade",
      "Sequência de Cores",
      "Gestão de Ateliê"
    ],
    tags: [
      "w-083",
      "workorder",
      "ordemdeservico",
      "fichatecnica",
      "gestao",
      "qualidade",
      "processos",
      "artrelados"
    ],
    bibliographicReferences: [
      "NATIONAL EMBROIDERY ASSOCIATION. Standard Operating Procedures and Work Order Management for Custom Apparel. Chicago, 2022.",
      "PRINTWEAR MAGAZINE. Production Management & Quality Control Sheets in Embroidery Shops. Denver, 2021.",
      "ARTRELADOS. Gestão Profissional de Ateliê: Processos, Fichas Técnicas e Lucratividade. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-084-wash-away-non-woven-stabilizer-e-entretela-hidrossoluvel-nao-tecida",
    code: "W-084",
    letter: "W",
    term: "Wash-Away Non-Woven Stabilizer e Entretela Hidrossolúvel Não-Tecida (Wash-Away Non-Woven Fiber Matrix for Free-Standing Lace)",
    pronunciation: "uóx a-uei non uo-ven es-ta-bi-lai-zer e en-tre-te-la hi-dros-so-lú-vel não te-si-da",
    level: "Intermediário 🟡",
    category: "Estruturação & Estabilizadores",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'wash-away' (lavar e sumir) e 'non-woven' (não-tecido de fibras consolidadas). Evolução dos estabilizadores têxteis para confecção de rendas auto-sustentadas.",
    summary: "Entretela estruturada de fibras não-tecidas que se dissolve completamente na água, ideal para rendas soltas (FSL), rechilieu e bordados sem tecido base.",
    definition: "A Wash-Away Non-Woven Stabilizer e Entretela Hidrossolúvel Não-Tecida (Dissolvable Cellulose/PVA Non-Woven Substrate & Free-Standing Lace Matrix) é um estabilizador têxtil encorpado produzido por deposição de microfibras de álcool polivinílico (PVA) prensadas termicamente, com aparência e toque semelhantes aos de um tecido macio ou feltro fino (gramaturas de 40 g/m² a 80 g/m²). Diferente do plástico hidrossolúvel fino (que serve apenas como cobertura de superfície), essa entretela não-tecida possui altíssima resistência estrutural à tração e suporta milhares de perfurações de agulha sem rasgar. É o insumo obrigatório para bordar rendas soltas auto-sustentadas (*Free-Standing Lace - FSL*), ponto rechilieu, bordados em tule e monogramas vazados, dissolvendo-se 100% ao ser mergulhada em água morna sem deixar nenhum resíduo plástico.",
    technicalDetails: "Gramatura padrão: 40 g/m² (camada dupla para FSL leve) e 80 g/m² (camada única para rendas pesadas). Dissolução total em água a 20 °C a 40 °C em 2 a 5 minutos com enxágue. Mantém uma leve goma natural se enxaguada rapidamente, conferindo estrutura firme à renda.",
    beginnerExplanation: "Sabe aquelas rendas maravilhosas, brincos de bordado, marcadores de página e anjinhos de Natal que são feitos todinhos só com linha de bordar sem nenhum tecido por baixo? Eles são bordados em cima dessa entretela especial de lavar! Ela parece um tecidinho branco bem macio. Você borda a renda toda em cima dela e depois mergulha na água da torneira: a entretela derrete todinha e sobra na sua mão apenas a renda pura e perfeita!",
    howItWorks: [
      "1. A bordadeira coloca uma ou duas camadas da entretela hidrossolúvel não-tecida no bastidor bem esticadas.",
      "2. Carrega uma matriz de renda auto-sustentada (Free-Standing Lace - FSL) digitalizada com underlay cruzado estrutural.",
      "3. Abastece a máquina com a mesma linha na agulha e na bobina para que a renda fique linda dos dois lados.",
      "4. A máquina borda milhares de pontos diretamente sobre a entretela.",
      "5. Retira-se a peça do bastidor e recorta-se o excesso ao redor.",
      "6. Mergulha-se a renda em uma bacia com água morna por 2 minutos.",
      "7. A entretela dissolve por completo; a bordadeira enxágua levemente, molda a renda sobre uma toalha e deixa secar.",
      "8. A peça seca firme, armada e com caimento impecável de renda artesanal nobre."
    ],
    applications: [
      "Confecção de rendas auto-sustentadas (Free-Standing Lace - FSL), brincos, colares e tiaras.",
      "Anjos de Natal, enfeites natalinos 3D e marcadores de livros vazados.",
      "Bordados clássicos de Rechilieu vazados em toalhas de linho e enxovais.",
      "Bordados refinados em tecidos transparentes (organza, tule e musseline de seda)."
    ],
    characteristics: [
      "Dissolução 100% limpa em água morna sem resíduos tóxicos.",
      "Resistência mecânica excepcional a dezenas de milhares de pontos de agulha.",
      "Permite controlar a firmeza da renda final pelo tempo de enxágue na água."
    ],
    commonErrors: [
      "❌ Tentar fazer renda FSL usando plástico fino de toalha (o plástico rasga no meio do bordado e embola tudo).",
      "❌ Usar linha branca comum na canelinha (a renda fica com o verso todo branco e feio).",
      "❌ Enxaguar demais com água quente e sabão quando se deseja uma renda bem durinha e armada."
    ],
    troubleshootingTips: [
      "A renda desmontou e os fios soltaram após lavar: a matriz não era de FSL verdadeira ou faltavam pontos de união estrutural entre os elementos.",
      "A renda ficou mole demais parecendo um pano frouxo: mergulhe a peça novamente em água com uma colher de entretela dissolvida ou goma líquida e deixe secar na horizontal.",
      "A entretela rasgou durante o bordado da renda: use duas camadas de entretela no bastidor ou aumente a gramatura para 80 g/m²."
    ],
    dicaArtrelados: "Dica de ouro para rendas perfeitas: use SEMPRE a mesma cor de linha em cima e na canelinha embaixo! E se você quiser que a renda fique durinha e armada (como para brincos ou enfeites de árvore de Natal), passe na água bem rápido, por apenas 30 segundos: a própria goma da entretela que sobe vai deixar a renda durinha e impecável quando secar!",
    voceSabia: "A técnica de Free-Standing Lace com entretela hidrossolúvel não-tecida permitiu que máquinas de bordar modernas recriassem as lendárias rendas manuais de agulha de Veneza e de Burano do século XVI com precisão nanométrica em apenas 20 minutos!",
    practicalExercise: "Borde um pequeno brinco ou anjinho em FSL sobre duas folhas de entretela hidrossolúvel não-tecida com a mesma linha na bobina. Lave em água morna, deixe secar sobre papel toalha e veja a perfeição da sua primeira renda pura!",
    quickSummary: "Wash-Away Non-Woven é a entretela hidrossolúvel encorpada de fibras não-tecidas indispensável para rendas soltas (FSL) e rechilieu, dissolvendo-se 100% em água.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Gramatura: 40 a 80 g/m² | Mesma linha na agulha e canelinha"
    },
    relatedTerms: [
      "Free-Standing Lace (FSL)",
      "Rechilieu Computadorizado",
      "Entretela de Lavar",
      "PVA Não-Tecido",
      "Gomagem de Renda"
    ],
    tags: [
      "w-084",
      "washaway",
      "fsl",
      "rendas",
      "hidrossoluvel",
      "naotecido",
      "rechilieu",
      "estabilizador",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Free-Standing Lace & Water-Soluble Non-Woven Guide. Freiburg, 2022.",
      "VILENE INDUSTRIAL. Soluble Stabilizers for Lace and Cutwork Embroidery. Weinheim, 2021.",
      "ARTRELADOS. O Fascinante Mundo das Rendas FSL e Bordados Auto-Sustentados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-085-walk-stitch-e-subponto-de-contorno-de-borda-edge-walk",
    code: "W-085",
    letter: "W",
    term: "Walk Stitch e Subponto de Contorno de Borda Edge Walk (Edge Walk Underlay & Column Boundary Reinforcement)",
    pronunciation: "uók stitx e sub-pon-to de con-tor-no de bor-da éd-ji uók",
    level: "Intermediário 🟡",
    category: "Programação e Digitalização de Matrizes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'walk' (caminhar) e 'edge' (borda/margem). Algoritmo fundamental de ancoragem e sustentação perimétrica de colunas de ponto cheio.",
    summary: "Subponto em linha corrida que caminha milimetricamente recuado ao longo das bordas das colunas de cetim, criando trilhos elevados e nítidos para letras miúdas.",
    definition: "O Walk Stitch e Subponto de Contorno de Borda Edge Walk (Edge Walk Underlay Architecture & Perimeter Boundary Foundation) é a estratégia de digitalização de matrizes que projeta trajetórias de ponto corrido lineares contínuas paralelas às margens externas de uma coluna de ponto cheio (cetim). Posicionado com recuo programado (*margin offset* de 0.2 mm a 0.4 mm para dentro da borda final), o Edge Walk atua como um 'trilho de sustentação' duplo elevado. Quando os pontos cheios principais cruzam transversalmente sobre essas linhas de base, as pontadas não afundam no tecido e as bordas da coluna ficam perfeitamente retas, nítidas e tridimensionais, sendo o padrão mandatória para digitalização de letras pequenas (menores que 8 mm) em jalecos e uniformes.",
    technicalDetails: "Margem de recuo (offset): 0.25 mm a 0.35 mm da borda do objeto para evitar que o underlay escape para fora após o encolhimento do tecido. Comprimento do passo do subponto: 1.5 mm a 2.5 mm. Em colunas largas (> 4 mm), combina-se o Edge Walk com o Zigzag Underlay.",
    beginnerExplanation: "Imagine que você vai construir uma calçada de cimento: antes de jogar o cimento, você coloca duas ripas de madeira nas beiradas para o cimento ficar retinho e com a altura perfeita! O subponto 'Edge Walk' são essas 'duas ripinhas invisíveis' de linha que a máquina faz bem nas beiradinhas da letra antes de cobrir com o ponto cheio. Isso faz as letrinhas ficarem altas, nítidas e com as bordas retas como uma navalha!",
    howItWorks: [
      "1. O digitalizador desenha a coluna de letras ou contorno no software de bordado.",
      "2. Ativa o underlay do tipo 'Edge Walk' (Contorno de Borda) nas propriedades do objeto.",
      "3. Configura a margem de recuo interno (ex: 0.3 mm) para o subponto não vazar para fora.",
      "4. A máquina inicia o bordado costurando primeiro as duas linhas corridas nas laterais internas da coluna.",
      "5. Em seguida, borda o ponto cheio por cima dessas duas guias.",
      "6. A linha de cima apoia-se sobre os trilhos, criando bordas perfeitamente retilíneas e com relevo nobre.",
      "7. O texto pequeno fica 100% legível e nítido mesmo em tecidos difíceis como piquet e sarja."
    ],
    applications: [
      "Letras pequenas e nomes em jalecos, uniformes médicos e camisas de empresas.",
      "Contornos finos de logotipos, brasões militares e monogramas clássicos.",
      "Bordados em tecidos com textura (piquet, sarja e malhas) que exigem bordas nítidas.",
      "Estruturação de hastes finas de flores e arabescos detalhados."
    ],
    characteristics: [
      "Garante bordas perfeitamente retas e sem dentes serrilhados.",
      "Eleva a coluna de ponto cheio, criando um relevo tridimensional elegante.",
      "Estabiliza o tecido antes da entrada da densidade principal de pontos."
    ],
    commonErrors: [
      "❌ Deixar o recuo da borda em zero (o underlay escapa para fora do ponto cheio e fica aparecendo no tecido).",
      "❌ Usar passo de ponto longo demais (> 3.5 mm) em curvas apertadas, cortando quinas por dentro.",
      "❌ Não usar underlay em letras miúdas, deixando as margens mastigadas e ilegíveis."
    ],
    troubleshootingTips: [
      "O fio do underlay está aparecendo do lado de fora da letra: aumente o recuo da margem (margin offset) no software para 0.35 mm e aumente a compensação de repuxo da coluna.",
      "As letras pequenas de 5 mm estão embolando: use apenas Edge Walk simples sem zigue-zague interno e reduza a densidade para 0.42 mm com linha nº 60.",
      "As bordas da coluna ficaram afundadas no tecido: ative o Edge Walk duplo (passada de ida e volta) para criar uma base mais alta."
    ],
    dicaArtrelados: "Para letrinhas de jalecos e nomes pequenos: NUNCA use subponto pesado de zigue-zague! Use SEMPRE o 'Edge Walk' (contorno de borda) com recuo de 0.3 mm! As letras ficam fininhas, ultra legíveis e com acabamento de alta relojoaria!",
    voceSabia: "O conceito de Edge Walk foi adaptado dos métodos manuais dos mestres bordadores da corte francesa do século XVII, que costuravam cordões de seda fina nas margens antes de bordar para que o cetim ficasse sempre esticado e perfeito!",
    practicalExercise: "Digitalize a mesma palavra com 7 mm de altura duas vezes: uma sem nenhum underlay e outra com Edge Walk (recuo 0.3 mm). Borde em uma camisa polo de piquet e compare com uma lupa a diferença inacreditável de nitidez e legibilidade.",
    quickSummary: "Edge Walk Underlay é o subponto corrido que acompanha as bordas internas da coluna de cetim, criando trilhos elevados que garantem bordas retas, relevo e nitidez em letras miúdas.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "65/9 ou 70/10 Ponta Fina para letras pequenas",
      density: "Recuo de margem (Offset): 0.25 mm a 0.35 mm | Passo: 2.0 mm"
    },
    relatedTerms: [
      "Underlay (Subponto)",
      "Ponto Cheio (Satin)",
      "Center Walk Underlay",
      "Compensação de Repuxo",
      "Letras Pequenas (Small Lettering)"
    ],
    tags: [
      "w-085",
      "edgewalk",
      "subponto",
      "underlay",
      "letraspequenas",
      "digitalizacao",
      "nitidez",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Underlay Types: Edge Walk, Center Run and Zigzag Foundations. Sydney, 2022.",
      "TAJIMA DG/ML BY PULSE. Small Lettering Mastery & Underlay Margin Offsets. Dallas, 2021.",
      "ARTRELADOS. Segredos da Digitalização de Letras Pequenas e Alta Definição. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-086-workspace-ergonomics-e-organizacao-da-estacao-de-bordado",
    code: "W-086",
    letter: "W",
    term: "Workspace Ergonomics e Organização da Estação de Bordado (Embroidery Studio Ergonomics & Workflow Station Layout)",
    pronunciation: "uork-speis er-go-no-miks e or-ga-ni-za-são da es-ta-são de bor-da-do",
    level: "Iniciante 🟢",
    category: "Gestão, Custos & Precificação",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'workspace' (espaço de trabalho) e do grego 'ergon' (trabalho) + 'nomos' (leis naturais). Ciência aplicada ao conforto, saúde e produtividade operacional.",
    summary: "Princípios ergonômicos e disposição física de bancadas, iluminação, estações de enquadramento e ferramentas para evitar lesões posturais e maximizar a agilidade do ateliê.",
    definition: "A Workspace Ergonomics e Organização da Estação de Bordado (Embroidery Production Cell Optimization & Biomechanical Ergonomics) é o arranjo físico inteligente e biomecanicamente seguro do ambiente de trabalho do ateliê de bordados. Compreende a altura correta da bancada de colocação de bastidores (entre 90 cm e 100 cm para trabalho em pé sem inclinação da coluna lombar), suporte articulado de bastidores (*Hooping Station*), iluminação neutra direcionada sem reflexo na tela da máquina, cadeira ergonômica ajustável com apoio de antebraços, suporte giratório de cones de linha e disposição em triângulo de fluxo (Enquadramento -> Máquina -> Acabamento/Inspeção), reduzindo a fadiga física e aumentando a velocidade do ciclo produtivo.",
    technicalDetails: "Parâmetros biomecânicos: Altura da bancada de enquadramento: cotovelo flexionado a 90° (90 a 105 cm do piso). Iluminação de bancada: 750 a 1.000 Lux com temperatura de cor de 5.000K neutra. Nível de ruído acústico: < 70 dB(A) com tapetes antivibração sob as máquinas.",
    beginnerExplanation: "É organizar o seu ateliê do jeito certo para o seu corpo não doer e o seu trabalho render o dobro! Se a mesa do bastidor for muito baixa, você fica com dor nas costas no fim do dia. Se as tesouras e entretelas ficarem longe, você perde horas andando de um lado para o outro. Com uma mesa na altura certa, boa luz e tudo ao alcance das mãos, você borda feliz, com saúde e entrega muito mais encomendas!",
    howItWorks: [
      "1. A bordadeira calibra a altura da bancada de enquadramento na linha dos seus cotovelos.",
      "2. Instala um suporte de bastidor (Hooping Station) que mantém o bastidor inclinado e firme.",
      "3. Posiciona as ferramentas de uso contínuo (tesoura de garça, pinça, fita crepe) em suportes magnéticos ou gavetas ao alcance do braço sem precisar se inclinar.",
      "4. Organiza a linha de produção em fluxo contínuo: peças brutas à esquerda -> máquina ao centro -> acabamento à direita.",
      "5. Posiciona iluminação LED de alta definição focada na agulha e no enquadramento.",
      "6. Utiliza tapetes ergonômicos antifadiga no chão para quem trabalha em pé.",
      "7. A produtividade do ateliê cresce até 35% com zero afastamentos por dores musculares ou LER/DORT."
    ],
    applications: [
      "Estruturação de novos ateliês de bordado domésticos e comerciais.",
      "Otimização de linhas de produção industrial em fábricas de uniformes.",
      "Prevenção de dores lombares, tendinites em punhos e fadiga visual de bordadeiras.",
      "Redução drástica do tempo morto entre a troca de bastidores na máquina."
    ],
    characteristics: [
      "Aumenta a velocidade de colocação de peças no bastidor em até 40%.",
      "Elimina dores nas costas, pescoço e punhos causadas por postura incorreta.",
      "Ambiente de trabalho limpo, profissional e esteticamente acolhedor."
    ],
    commonErrors: [
      "❌ Colocar bastidor em mesa baixa de sala ou na cama, curvando as costas e tensionando a coluna lombar.",
      "❌ Usar iluminação fraca e amarelada que força a vista para passar a linha na agulha.",
      "❌ Deixar cones de linha, tesouras e entretelas espalhados sem local fixo de armazenamento."
    ],
    troubleshootingTips: [
      "A bordadeira sente dor no ombro e punho ao apertar bastidores: utilize um gabarito de bancada (Hooping Station) com aperto mecânico suave ou bastidores magnéticos modernos.",
      "Dores nas costas no fim do dia: eleve a bancada de trabalho colocando calços de madeira ou adquira uma bancada com regulagem de altura.",
      "Dores de cabeça e cansaço nos olhos: instale luminárias LED de 5.000K (luz branca neutra) diretamente sobre a bancada e o cabeçote da máquina."
    ],
    dicaArtrelados: "A altura da sua mesa de colocar bastidor deve ficar exatamente na altura do seu umbigo quando você estiver em pé! Se a mesa for baixa, coloque calços de madeira nos pés da mesa para subir a altura. Você vai ver como a dor nas costas desaparece como mágica no mesmo dia!",
    voceSabia: "Estudos de engenharia de produção mostram que um operador de máquina de bordar que caminha 5 passos a mais por peça para buscar tesouras e entretelas anda o equivalente a 3 quilômetros a mais por semana à toa dentro do ateliê!",
    practicalExercise: "Fique em pé ao lado da sua mesa de colocar bastidor e dobre os braços em 90 graus. Meça a distância entre as suas mãos e a mesa. Se você tiver que se curvar para alcançar o bastidor, eleve a bancada hoje mesmo e sinta o alívio imediato no corpo.",
    quickSummary: "Workspace Ergonomics é a organização biomecânica do ateliê com bancadas na altura correta, boa iluminação e ferramentas ao alcance, garantindo saúde e agilidade na produção.",
    recommendedSettings: {
      speedPPM: "Ergonomia e produtividade",
      needleType: "N/A",
      density: "Altura da bancada: 90 a 105 cm | Iluminação: 5.000K neutra"
    },
    relatedTerms: [
      "Hooping Station (Estação de Bastidor)",
      "Bastidores Magnéticos",
      "Fluxo de Produção (Workflow)",
      "Iluminação LED de Ateliê",
      "Prevenção de LER/DORT"
    ],
    tags: [
      "w-086",
      "ergonomia",
      "workspace",
      "organizacao",
      "atelie",
      "saude",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "OCCUPATIONAL SAFETY AND HEALTH ADMINISTRATION (OSHA). Ergonomics in Apparel & Textile Manufacturing Workstations. Washington, 2021.",
      "GRANDJEAN, Etienne. Fitting the Task to the Human: A Textbook of Occupational Ergonomics. Londres, 2020.",
      "ARTRELADOS. Ergonomia, Produtividade e Layout Inteligente para Ateliês de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-087-weight-of-thread-e-titulo-de-fios-de-bordar",
    code: "W-087",
    letter: "W",
    term: "Weight of Thread e Título de Fios de Bordar (Thread Weight System, Denier & Tex Classification: 30wt, 40wt, 60wt, 75wt)",
    pronunciation: "ueit ov tréd e ti-tu-lo de fi-os de bor-dar",
    level: "Intermediário 🟡",
    category: "Fios & Linhas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'weight' (peso/espessura métrica) e do latim 'titulus' (classificação numérica têxtil). Sistema internacional padronizado de titulação de fios.",
    summary: "Sistema de classificação de espessura de linhas de bordar (30wt, 40wt, 60wt, 75wt), orientando a escolha exata de agulha e densidade da matriz para cada aplicação.",
    definition: "O Weight of Thread e Título de Fios de Bordar (Thread Weight Classification, Denier, Tex & Metric Number System) é a convenção metrológica internacional utilizada na indústria de bordados para quantificar a espessura linear dos filamentos de linha. No sistema 'Weight' (wt), a escala é inversa: quanto MAIOR o número, mais FINA é a linha. A linha padrão universal de bordado é a 40wt (Tex 27 / Denier 120/2); a linha 30wt é mais grossa e encorpada (ideal para coberturas rápidas e pespontos); a linha 60wt é ultrafina (essencial para letras minúsculas de 4 mm e microdetalhes nítidos); e a linha 75wt é micrométrica (usada em etiquetas de alta definição e bordados médicos).",
    technicalDetails: "Equivalências têxteis fundamentais:\n- 30wt (Tex 35 / Denier 300) -> Agulha 80/12 ou 90/14 -> Densidade matriz: 0.45 mm a 0.50 mm\n- 40wt (Tex 27 / Denier 240) -> Agulha 75/11 -> Densidade matriz: 0.38 mm a 0.42 mm (Padrão)\n- 60wt (Tex 18 / Denier 160) -> Agulha 65/9 ou 70/10 -> Densidade matriz: 0.30 mm a 0.35 mm\n- 75wt (Tex 11 / Denier 100) -> Agulha 55/7 ou 60/8 -> Densidade matriz: 0.25 mm a 0.28 mm",
    beginnerExplanation: "A numeração da linha funciona ao contrário: quanto MAIOR o número, mais FININHA é a linha! A linha normal que todo mundo usa todo dia é a número 40. Se você for bordar um nome com letrinhas miúdas de médico em um bolso de jaleco, a linha 40 fica grossa e borrada; aí você usa a linha fininha número 60 com uma agulha fina 65/9 e as letras ficam perfeitas como uma impressão laser! Já a linha grossa número 30 serve para bordar desenhos grandes bem rápido!",
    howItWorks: [
      "1. A bordadeira analisa a complexidade da matriz (letras grandes, médias ou microdetalhes).",
      "2. Seleciona o título de linha adequado (ex: 60wt para texto de 4 mm no peito de um jaleco).",
      "3. Instala a agulha de calibre proporcional (agulha fina 65/9 para linha 60wt).",
      "4. Calibra a densidade da matriz no software para 0.32 mm (mais fechada para compensar o fio fino).",
      "5. A máquina borda com precisão micrométrica sem quebras de linha.",
      "6. O texto minúsculo fica 100% nítido, sem emendas grosseiras e com leitura perfeita.",
      "7. O cliente aprova a altíssima definição dos detalhes."
    ],
    applications: [
      "40wt: Padrão universal para 90% de todos os bordados de logotipos, toalhas e enxovais.",
      "60wt: Nomes minúsculos em jalecos médicos, uniformes militares, emblemas e brasões.",
      "30wt: Preenchimentos rápidos em peças esportivas, jeans, jaquetas e bordados rústicos.",
      "75wt: Microetiquetas de alta precisão, arte botânica detalhada e brasões imperiais."
    ],
    characteristics: [
      "Permite bordar detalhes minúsculos que seriam impossíveis com linha comum.",
      "Exige correspondência obrigatória entre espessura da linha, tamanho da agulha e densidade da matriz.",
      "Disponível em 100% poliéster brilhante trilobal ou 100% raiom acetinado."
    ],
    commonErrors: [
      "❌ Tentar bordar linha grossa 30wt com agulha fina 65/9 (a linha não cabe no furo e arrebenta a cada 20 pontos).",
      "❌ Usar linha ultrafina 60wt com a mesma densidade aberta da 40wt (o bordado fica transparente e cheio de falhas).",
      "❌ Tentar bordar letras de 3 mm com linha normal 40wt (as letras viram borrões ilegíveis)."
    ],
    troubleshootingTips: [
      "As letras pequenas de 4 mm viraram um borrão sem buraquinhos no 'e' e no 'o': troque a linha por 60wt, use agulha 65/9 e suba a densidade no software.",
      "A linha 30wt está quebrando toda hora: troque a agulha por uma 90/14 de olho grande e afrouxe ligeiramente a tensão.",
      "O bordado com linha 60wt ficou ralo e aparecendo o tecido de fundo: aumente o número de pontos (densidade 0.32 mm) para compensar a finura da linha."
    ],
    dicaArtrelados: "Tenha sempre no seu ateliê pelo menos dois cones de linha preta e dois cones de linha branca no calibre 60wt (bem fininha) e uma cartela de agulhas 65/9! Quando entrar aquele jaleco com nome pequeno de médico, você usa essa combinação e o resultado fica tão perfeito que os clientes vão achar que foi mágica!",
    voceSabia: "O sistema de classificação 'Weight' foi criado na Inglaterra no século XVIII e calcula quantos quilômetros de linha são necessários para pesar exatamente 1 quilograma: ou seja, 1 kg de linha 60wt tem inacreditáveis 60 quilômetros de comprimento!",
    practicalExercise: "Borde o mesmo nome de 5 mm de altura duas vezes em um retalho de microfibra: primeiro com linha normal 40wt e agulha 75/11; depois com linha 60wt e agulha 65/9. Olhe os dois com uma lupa e veja a diferença espetacular de nitidez.",
    quickSummary: "Weight of Thread é a classificação de espessura de linhas (escala inversa: quanto maior o número, mais fina a linha), onde a 40wt é o padrão e a 60wt é a campeã para letras minúsculas.",
    recommendedSettings: {
      speedPPM: "40wt: 850 PPM | 60wt: 750 PPM | 30wt: 700 PPM",
      needleType: "40wt -> 75/11 | 60wt -> 65/9 | 30wt -> 90/14",
      density: "40wt: 0.40 mm | 60wt: 0.32 mm | 30wt: 0.48 mm"
    },
    relatedTerms: [
      "Título Denier e Tex",
      "Linha 40wt e Linha 60wt",
      "Microlettering (Letras Minúsculas)",
      "Calibre de Agulhas",
      "Poliéster Trilobal"
    ],
    tags: [
      "w-087",
      "weight",
      "titulacaodefios",
      "40wt",
      "60wt",
      "30wt",
      "fios",
      "letraspequenas",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA GARNE. Thread Weight Classification and Needle Matching Technical Manual. Freiburg, 2022.",
      "COATS INDUSTRIAL. Thread Sizing: Tex, Metric, Denier and Weight Systems Explained. Londres, 2021.",
      "ARTRELADOS. Guia Definitivo de Fios, Titulações e Agulhas no Bordado de Alta Precisão. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "w-088-woven-badges-vs-embroidered-patches",
    code: "W-088",
    letter: "W",
    term: "Woven Badges vs. Embroidered Patches (Woven Jacquard Badges vs. High-Definition Embroidered Patches)",
    pronunciation: "uo-ven bad-jes ver-sus em-broi-derd pat-xes",
    level: "Intermediário 🟡",
    category: "Aplicações & Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'woven' (tecido em tear mecânico jacquard) e 'embroidered' (bordado em máquina de agulhas). Comparativo industrial clássico de insígnias têxteis.",
    summary: "Análise técnica comparativa entre emblemas tecidos em tear (Woven) e patches tradicionais bordados com agulha, orientando a escolha ideal para cada tipo de cliente.",
    definition: "O Woven Badges vs. Embroidered Patches (Jacquard Micro-Woven Insignias vs. Stitch-Formed Relief Patches) é o estudo comparativo de engenharia têxtil e viabilidade comercial entre dois processos distintos de fabricação de emblemas e apliques. Enquanto o Patch Bordado Tradicional é produzido por agulhas que costuram linhas sobre uma base de tecido pré-existente (criando um relevo tridimensional rico, brilho pronunciado, bordas de cordão merrow e textura tátil encorpada), o Emblema Tecido (Woven Badge) é fabricado diretamente fio a fio em teares computadorizados Jacquard de altíssima densidade, resultando em uma etiqueta plana ultrafina, sem relevo de pontos, mas capaz de reproduzir microdetalhes de até 1 mm com gradientes fotográficos e textos minúsculos que nenhuma máquina de bordar convencional alcança.",
    technicalDetails: "Comparativo técnico:\n- Patch Bordado: Relevo 3D tátil alto (0.8 a 1.5 mm de espessura de ponto), brilho acetinado, borda overloqueada (Merrow Border) ou corte a laser, ideal para lotes de 1 a 500 peças.\n- Woven Badge: Superfície 100% plana e lisa (espessura < 0.5 mm), microdefinição vetorial extrema, ideal para grandes tiragens industriais (> 1.000 peças).",
    beginnerExplanation: "Qual a diferença entre um patch bordado e um emblema tecido? O patch bordado é aquele clássico fofinho e com relevo grosso de linha que a gente faz na máquina de bordar, parecendo um escudo de futebol tradicional com muito brilho. Já o 'woven' é aquela etiquetinha tecida fininha e retinha, igualzinha àquelas etiquetas de marca que vêm na gola das camisas caras! O bordado tem relevo e textura chique; o tecido é plano e consegue desenhar letrinhas microscópicas!",
    howItWorks: [
      "1. O ateliê recebe o logotipo do cliente e analisa o nível de detalhes e a quantidade solicitada.",
      "2. Se o cliente busca relevo nobre, textura de linha, brilho e pedidos de 1 a 300 peças: indica-se o Patch Bordado.",
      "3. Se o logotipo possui textos minúsculos de 2 mm com ilustrações cheias de gradientes complexos para mais de 1.000 peças: indica-se o Woven Badge.",
      "4. No patch bordado, a máquina de bordar executa os pontos sobre sarja ou feltro e sela a borda com ponto cheio reforçado.",
      "5. Aplica-se termocolante de alta fixação ou fecho de contato (velcro) no verso.",
      "6. O cliente recebe um produto com máxima identidade visual e durabilidade extrema.",
      "7. O ateliê posiciona-se como consultor técnico de excelência."
    ],
    applications: [
      "Uniformes militares, motoclubes, artes marciais e coletes táticos (Patches Bordados com relevo).",
      "Marcas esportivas de luxo, camisas de futebol oficiais e etiquetas externas de calças jeans (Woven Badges).",
      "Brindes corporativos, eventos universitários e bonés de alta costura.",
      "Emblemas para jaquetas jeans, mochilas de aventura e roupas infantis."
    ],
    characteristics: [
      "Patches Bordados: Alto relevo, brilho excepcional, textura tátil nobre e produção flexível.",
      "Woven Badges: Fino, plano, leve, ultra-detalhado e ideal para produção em massa.",
      "Ambos aceitam acabamentos com velcro, termocolante ou costura perimétrica direta."
    ],
    commonErrors: [
      "❌ Tentar bordar matrizes com letrinhas de 1.5 mm na máquina de bordar em vez de terceirizar em woven badge.",
      "❌ Vender emblema tecido plano para cliente que pediu explicitamente o visual em alto-relevo do bordado tradicional.",
      "❌ Fazer patches bordados sem aplicar termocolante ou entretela de sustentação adequada no verso."
    ],
    troubleshootingTips: [
      "O cliente corporativo tem um logo com letras minúsculas de 2 mm e quer 5.000 peças: ofereça a solução em Woven Badge com borda bordada a laser.",
      "O patch bordado ficou mole e enrugado: use sarja pesada dublada com entretela termocolante de alta densidade como base.",
      "A borda do patch bordado está desfiando: aumente a largura da borda de ponto cheio para 4.0 mm e queime suavemente com selador térmico."
    ],
    dicaArtrelados: "Seja um consultor para o seu cliente! Se ele chegar com um escudo de motoclube ou empresa querendo volume, relevo e elegância: venda o Patch Bordado! Se ele for uma marca de roupas querendo etiquetas de peito fininhas e cheias de microletrinhas para milhares de peças: ofereça a solução tecida (Woven)! Saber orientar o cliente é o que transforma uma bordadeira comum em uma empresária de sucesso!",
    voceSabia: "Os primeiros patches bordados manuais eram chamados de 'escudos de armas' na Idade Média e eram costurados nas túnicas dos cavaleiros cruzados para que pudessem ser reconhecidos no meio da poeira das batalhas!",
    practicalExercise: "Pegue um patch bordado que você fez e uma etiqueta de gola tecida (woven) de uma camiseta sua. Compare os dois lado a lado: sinta o relevo alto e o brilho do bordado contra a superfície plana e a microdefinição da etiqueta tecida.",
    quickSummary: "Patches Bordados oferecem relevo tridimensional e textura nobre em qualquer tiragem; Woven Badges são planos, ultrafinos e desenham microdetalhes para grandes produções industriais.",
    recommendedSettings: {
      speedPPM: "Patches: 800 PPM",
      needleType: "75/11 Ponta Fina ou Ponta Bola",
      density: "Patch Bordado: 0.38 mm a 0.40 mm sobre Sarja Pesada"
    },
    relatedTerms: [
      "Emblemas e Patches",
      "Borda Merrow (Overloque)",
      "Termocolante de Patch",
      "Sarja para Bordado",
      "Etiquetas Jacquard"
    ],
    tags: [
      "w-088",
      "patches",
      "woven",
      "emblemas",
      "badges",
      "jacquard",
      "apliques",
      "artrelados"
    ],
    bibliographicReferences: [
      "EMBROIDERY & APPAREL PRODUCTION. Badges, Emblems & Woven Label Manufacturing Standards. Chicago, 2022.",
      "TEXTILE INSIGNIA GUILD. Embroidered vs. Woven: A Technical Guide for Apparel Decorators. Leeds, 2021.",
      "ARTRELADOS. Manual de Produção Profissional de Patches, Emblemas e Brasões. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

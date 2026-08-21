import { Verbete } from "../types";

export const VERBETES_LETTER_F_PART8: Verbete[] = [
  {
    id: "f-043-flecha-de-direcao-de-ponto-angulo-de-ponto",
    code: "F-043",
    term: "Flecha de Direção de Ponto / Ângulo de Ponto (Stitch Angle Line / Needle Direction Flow)",
    letter: "F",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do francês flèche (seta orientadora) e do latim angulus (vértice angular). Ferramenta vetorial fundamental desenvolvida nos primeiros softwares de digitalização (como Wilcom e Pulse) nos anos 1980.",
    summary: "Linha vetorial que define a inclinação e orientação exata dos pontos no desenho, responsável pelo brilho acetinado, curvatura orgânica e profundidade 3D.",
    definition: "A Flecha de Direção ou Ângulo de Ponto (Stitch Angle / Stitch Direction Line) é a ferramenta vetorial de programação que determina o ângulo exato (de 0° a 360°) em que a agulha penetrará e depositará cada linha de ponto cheio (satin) ou ponto de preenchimento (tatami) sobre o tecido. A orientação do ângulo de ponto governa dois pilares fundamentais do bordado: 1) A reflexão de luz óptica e o brilho acetinado (o fio reflete luz perpendicularmente ao seu comprimento, permitindo criar relevos, sombras e vida em pétalas de flores, penas de pássaros e arabescos); 2) O sentido mecânico do repuxo do tecido (o tecido encolhe na direção exata do ângulo do ponto, permitindo ao digitalizador balancear forças opostas para não enrugar a peça).",
    technicalDetails: "Controle de ângulos: Ângulo Único Fixo (para tatamis geométricos planos) versus Múltiplos Ângulos Curvilíneos / Curvatura Suave (para colunas de ponto cheio e preenchimentos orgânicos contornando letras e folhagens). Ângulos recomendados para sobreposição de camadas: 45° a 90° de diferença entre o underlay e o acabamento.",
    howItWorks: [
      "1. O programador desenha o contorno de uma folha ou pétala no software de matriz.",
      "2. Em vez de deixar a linha reta padrão, insere 'Linhas de Ângulo de Ponto' acompanhando a curvatura natural da nervura da folha.",
      "3. O software interpola os pontos fazendo com que cada fileira de costura gire suavemente conforme a curva.",
      "4. Quando a máquina de bordar costura, a linha de poliéster ou viscose deita-se seguindo o fluxo natural da forma.",
      "5. Ao incidir a luz ambiente, as partes curvas brilham em ângulos diferentes, gerando um efeito tridimensional vivo e realista.",
      "6. O desenho ganha expressividade artística de pintura com agulha."
    ],
    beginnerExplanation: "É a setinha no programa de computador que diz para a máquina para qual lado a linha vai deitar: se ela vai costurar em pé, deitadinha ou na diagonal! É isso que faz uma florzinha parecer de verdade, porque a linha deita certinho no formato de cada pétala e brilha com a luz!",
    applications: [
      "Digitalização realista de folhas, pétalas de flores, pétalas de rosas e ramos florais",
      "Efeitos de luz e sombra em rostos, penas de pássaros e pelos de animais em ponto tatami",
      "Letras com curvas elegantes (fontes cursivas e caligráficas) em ponto cheio",
      "Brasões nobres e monogramas de luxo com relevo óptico dinâmico"
    ],
    commonErrors: [
      "Deixar todos os objetos de um bordado no mesmo ângulo reto de 0° ou 90°, deixando o bordado chapado, sem brilho e parecendo uma placa plástica dura",
      "Cruzar ângulos de ponto de forma abrupta e quebrada em colunas curvas, criando 'degraus' feios na costura",
      "Colocar o ângulo do acabamento exatamente no mesmo sentido do underlay de sustentação, fazendo o acabamento afundar nas ranhuras da base"
    ],
    troubleshootingTips: [
      "No Wilcom ou Embird, use a ferramenta 'Adicionar Ângulo de Ponto' (Stitch Angles) distribuindo linhas guias suaves a cada 15° a 30° ao longo das curvas",
      "Mantenha sempre pelo menos 45° a 60° de diferença de ângulo entre o ponto de base (underlay) e o ponto final de cobertura",
      "Gire o desenho na visualização 3D TrueView do software para conferir se o reflexo de luz está fluindo de forma natural e harmoniosa"
    ],
    dicaArtrelados: "O segredo de um bordado que parece pintura viva está no ângulo de ponto! Nunca deixe suas folhas e pétalas com pontos retos e travados. Dê curvatura e incline os pontos acompanhando a forma: o brilho da linha de poliéster faz o desenho saltar aos olhos!",
    voceSabia: "A técnica de orientar os fios para criar ilusão de luz e volume foi herdada diretamente da técnica de 'Pintura de Agulha' (Needle Painting) do século XIV na China e França, onde mestres bordadores passavam meses bordando sedas em múltiplos ângulos!",
    practicalExercise: "Digitalize duas folhas iguais no seu software: uma com ângulo reto fixo e outra com 4 ângulos curvados acompanhando a folha. Borde as duas lado a lado e compare o reflexo de luz sob a luminária!",
    quickSummary: "Linha vetorial que define a inclinação e curvatura dos pontos, criando brilho tridimensional e balanceando o repuxo.",
    relatedTerms: ["Ponto Cheio / Satin Stitch", "Ponto Tatami / Fill Stitch", "Compensação de Repuxo", "Underlay"],
    tags: ["f-043", "flecha de direcao", "angulo de ponto", "stitch angle", "brilho", "digitalizacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Designing with Stitch Angles & Flow Lines Masterclass. Sydney, 2023.",
      "DEAN, Bonnie. Creative Digitizing: Stitch Angles and Light Reflection Dynamics. Creative Publishing, 2022.",
      "ARTRELADOS. A Arte dos Ângulos de Ponto: Como Criar Brilho e Volume no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-044-fracao-de-densidade-espacamento-entre-linhas",
    code: "F-044",
    term: "Fração de Densidade / Espaçamento entre Linhas de Ponto (Density Spacing / Pitch Parameter)",
    letter: "F",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim densitas (compactação, espessura). Parâmetro matemático central de programação de matrizes que quantifica a distância micrométrica entre passadas de agulha paralelas.",
    summary: "Medida em milímetros que define a distância entre as linhas de costura, controlando a cobertura, peso, maciez e flexibilidade do bordado.",
    definition: "A Fração de Densidade ou Espaçamento de Ponto (Stitch Density / Line Spacing / Pitch) é o parâmetro geométrico fundamental na digitalização de matrizes que regula a distância milimétrica exata entre duas passadas consecutivas e paralelas de linha de ponto cheio (satin) ou tatami. O valor padrão clássico para fios de poliéster nº 40 é de 0,40mm (o que equivale a cerca de 2,5 a 3 linhas de costura por milímetro linear de tecido). Regular a fração de densidade com precisão cirúrgica é o que define o equilíbrio perfeito entre uma cobertura visual 100% opaca e brilhante e uma peça com toque macio, sem rigidez, empedramento ou perfuração excessiva do tecido.",
    technicalDetails: "Escala padrão de densidade (espaçamento em mm): Ponto Cheio Padrão (Fio 40wt): 0.38mm a 0.42mm; Ponto Tatami Fechado: 0.38mm a 0.40mm; Preenchimento Leve / Sombreado: 0.60mm a 1.20mm; Letras Pequenas (<5mm) com fio 60wt: 0.30mm a 0.35mm; Fios grossos de Algodão (30wt): 0.48mm a 0.55mm.",
    howItWorks: [
      "1. Ao digitalizar um elemento no software, o programador define o parâmetro de espaçamento (ex: 0.40mm).",
      "2. O software calcula que para cobrir uma área de 10mm de largura, a agulha executará exatamente 25 passadas de linha.",
      "3. Se o tecido for grosso (toalha ou brim), mantém-se 0.40mm com underlay estruturado.",
      "4. Se o tecido for fino e delicado (seda ou viscose), aumenta-se o espaçamento para 0.45mm para deixar o bordado maleável e leve.",
      "5. A máquina executa os pontos com perfeita cobertura sem 'empedrar' nem cortar as fibras da roupa.",
      "6. A peça final mantém caimento suave e toque agradável na pele."
    ],
    beginnerExplanation: "É a 'distância' entre uma linha e outra do bordado! Se você colocar as linhas muito juntinhas (menos de 0.30mm), a costura vira uma pedra dura que quebra a agulha e fura o pano. Se colocar as linhas muito longe (mais de 0.60mm), o tecido aparece por baixo. O segredo perfeito para a linha comum 40 é deixar o espaçamento em 0.40mm!",
    applications: [
      "Ajuste da maciez do bordado em enxovais e roupas de bebê",
      "Otimização da contagem de pontos (reduzindo tempo de máquina sem perder cobertura visual)",
      "Criação de efeitos de degradê e sombras artísticas com densidade variável",
      "Adaptação de matrizes para diferentes espessuras de fios (fio 30, fio 40 ou fio 60)"
    ],
    commonErrors: [
      "Programar densidade excessiva (0.25mm a 0.30mm) com fio 40 comum, gerando placas duras como lixa que irritam a pele e provocam furos no tecido",
      "Usar densidade muito rala (0.55mm) em toalhas felpudas sem topping, fazendo as felpas subirem e engolirem o desenho",
      "Não reajustar a densidade ao trocar de linha comum para linha de algodão grossa ou fio metálico"
    ],
    troubleshootingTips: [
      "Mantenha 0.40mm como sua densidade de referência universal para 90% dos trabalhos com linha de poliéster 40wt",
      "Para roupas de bebê onde o conforto é prioritário, use densidade 0.42mm combinada com um bom underlay de sustento",
      "Se estiver bordando com linha fina nº 60 para micro-letras, ajuste a densidade para 0.32mm-0.35mm para garantir leitura perfeita"
    ],
    dicaArtrelados: "Bordado de qualidade não é aquele pesado e duro feito uma lixa! É aquele que cobre 100% com brilho impecável e continua macio e gostoso de pegar. Mantenha seu espaçamento de ponto em 0.40mm e use uma boa base de underlay: o resultado é profissionalismo puro!",
    voceSabia: "Uma matriz mal digitalizada com excesso de densidade (0.28mm em vez de 0.40mm) pode aumentar a quantidade de pontos de um desenho em mais de 45% desnecessariamente, gastando o dobro de linha e desgastando o motor da máquina à toa!",
    practicalExercise: "Crie três quadrados de 3x3cm no seu software com densidades diferentes: 0.30mm, 0.40mm e 0.55mm. Borde os três no mesmo retalho e sinta a diferença de maciez e cobertura com as pontas dos dedos!",
    quickSummary: "Parâmetro que define a distância entre passadas de linha, equilibrando cobertura visual perfeita e maciez do tecido.",
    relatedTerms: ["Ponto Cheio / Satin Stitch", "Ponto Tatami / Fill Stitch", "Underlay / Ponto de Sustentação", "Empedramento do Bordado"],
    tags: ["f-044", "fracao de densidade", "densidade de ponto", "espacamento", "pitch", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. The Mathematics of Stitch Density & Line Pitch. Sydney, 2023.",
      "BERNINA OF AMERICA. Embroidery Software V9: Advanced Density Controls. Steckborn, 2022.",
      "ARTRELADOS. O Equilíbrio da Densidade: Cobertura Impecável com Toque Macio. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-045-flocagem-e-tecido-flocado-para-bordado",
    code: "F-045",
    term: "Flocagem & Tecido Flocado para Bordado (Flock Fabric & Flocked Appliqué)",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim floccus (tufo de lã ou penugem macia). Tecnologia de deposição eletrostática de microfibras têxteis sobre superfícies adesivadas criada na Europa no século XX.",
    summary: "Tecido ou filme com acabamento aveludado e textura camurçada densa, amplamente utilizado em apliques de alto relevo e numerais esportivos.",
    definition: "A Flocagem Têxtil e o Tecido Flocado (Flock Fabric / Flocked Film for Embroidery) é um material composto constituído por uma base de tecido ou filme sintético revestida por milhões de microfibras curtas de poliamida ou rayon (comprimento de 0,5mm a 1,5mm) projetadas eletrostaticamente em posição perpendicular e fixadas por adesivo termoplástico. Apresenta uma textura tátil extremamente aveludada, macia e opaca, semelhante ao veludo cotelê ou camurça nobre. No bordado computadorizado, é muito utilizado como tecido estruturado para apliques em moletons, jaquetas universitárias (Letterman jackets), uniformes esportivos e brasões corporativos.",
    technicalDetails: "Espessura típica: 0,8mm a 1,2mm. Não desfia nas bordas ao ser recortado com tesoura de precisão ou laser. Requer agulha de bordado 75/11 ou 80/12 ponta fina e entretela rasgável ou recortável. Suporta lavagem doméstica a até 40°C.",
    howItWorks: [
      "1. A matriz de aplique executa a linha de marcação na entretela e no tecido da jaqueta.",
      "2. A bordadeira posiciona o recorte de tecido flocado sobre a área marcada.",
      "3. A máquina costura a linha reta de fixação segurando as microfibras aveludadas no lugar.",
      "4. A bordadeira apara o excesso de tecido flocado rente à costura com tesoura pelicano de precisão.",
      "5. A máquina costura a coluna de ponto cheio (satin) sobre a borda, criando uma transição rica entre o brilho da linha e o veludo fosco do flocado.",
      "6. A peça final adquire o clássico visual esportivo premium de jaquetas americanas e artigos universitários."
    ],
    beginnerExplanation: "É aquele tecido com toque aveludado fofinho que parece veludo de camurça que a gente vê em números de jaquetas esportivas e moletons de faculdade! Ele é ótimo para fazer apliques porque não desfia quando corta e dá uma textura aveludada chique e gostosa de passar a mão!",
    applications: [
      "Jaquetas universitárias estilo americanas (Letterman / College jackets) com letras volumosas",
      "Apliques de números e logotipos em moletons, jaquetas e roupas esportivas",
      "Emblemas e patches nobres com fundo aveludado para bonés e mochilas",
      "Roupas infantis e bichinhos de pelúcia com detalhes com toque de camurça"
    ],
    commonErrors: [
      "Passar o ferro de passar roupa excessivamente quente direto sobre as microfibras do flocado, esmagando e derretendo o efeito aveludado",
      "Usar densidade de ponto cheio muito alta sobre as bordas do flocado, perfurando a base adesiva e soltando tufos",
      "Lavar com escova de cerdas duras que arranque as microfibras eletrostáticas"
    ],
    troubleshootingTips: [
      "Passe as peças com aplique flocado sempre pelo avesso ou utilize um pano de algodão macio (press cloth) por cima",
      "Utilize tesoura curva de precisão tipo pelicano para não repuxar as microfibras durante o recorte do contorno",
      "Se notar fiapinhos de flocagem soltos após o recorte, use um rolinho adesivo tira-pelos para limpar a peça antes do ponto cheio final"
    ],
    dicaArtrelados: "Quer elevar o nível dos seus moletons e jaquetas personalizadas? Faça os apliques com tecido flocado aveludado! O contraste entre o brilho da linha de bordado e o toque fosco e macio do veludo flocado deixa qualquer peça com cara de grife internacional!",
    voceSabia: "O processo industrial de flocagem eletrostática carrega as microfibras com milhares de volts de eletricidade estática para que todas as fibras voem e caiam em pé perfeitamente retas sobre a cola, criando aquele toque denso e uniforme de pelinho!",
    practicalExercise: "Faça um pequeno aplique da letra do seu nome em um retalho de moletom usando tecido flocado: sinta o toque macio das microfibras e repare no acabamento limpo das bordas!",
    quickSummary: "Tecido ou filme com microfibras aveludadas eletrostáticas que conferem toque de camurça nobre a apliques e jaquetas.",
    relatedTerms: ["Bordado de Aplique", "Feltro para Bordado e Aplique", "Ponto Cheio / Satin Stitch", "Tesoura Pelicano"],
    tags: ["f-045", "flocagem", "tecido flocado", "flock", "aplique aveludado", "jaqueta college", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Specialty Fabrics & Appliqué Substrates Engineering Guide. Freiburg, 2023.",
      "GUNOLD. Twilly & Flocked Materials Application Matrix for Badges. Kenzingen, 2022.",
      "ARTRELADOS. O Guia dos Apliques Esportivos e Tecidos Aveludados no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-046-falso-courino-couro-sintetico-para-bordado",
    code: "F-046",
    term: "Falso Courino / Couro Sintético para Bordado (PU / PVC Faux Leather)",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim corium (couro, pele curtida). O couro sintético poliuretânico (PU) e vinílico (PVC) foi desenvolvido nos anos 1960 para substituir o couro animal com base têxtil flexível e lâmina polimérica microporosa.",
    summary: "Material sintético laminado com aspecto de couro legítimo, ideal para bolsas, nécessaires e tags, exigindo agulha fina e redução de densidade para não picotar.",
    definition: "O Falso Courino / Couro Sintético (PU / PVC Embroidery Faux Leather / Corino / Montana / Sintético 0.8mm) é um laminado composto formado por uma base têxtil de suporte (geralmente malha de poliéster ou não-tecido compactado) recoberta por uma camada polimérica de Poliuretano (PU) ou Policloreto de Vinila (PVC) com textura gravada em relevo (gravação de couro bovino, saffiano ou liso fosco). Por não possuir a estrutura de autocura elástica dos tecidos tecidos convencionais, cada perfuração de agulha cria um orifício permanente na lâmina plástica: consequentemente, o bordado em sintéticos exige técnica flutuante de bastidor, agulha fina sem navalha (75/11 SUK/Ponta Bola Leve) e densidade de ponto mais aberta para evitar o 'efeito picote' (onde a costura corta o couro como um selo postal).",
    technicalDetails: "Espessuras mais comuns no ateliê: Sintético 0.8mm (Courino clássico para nécessaires e bolsas), Sintético Montana 1.4mm (com verso acamurçado para chaveiros e alças) e Verniz brilhante. Densidade máxima de segurança na matriz: 0.44mm a 0.48mm. Comprimento mínimo de ponto reto: 2.8mm a 3.5mm. Nunca prender diretamente nos aros com parafuso apertado (usar técnica de flutuação).",
    howItWorks: [
      "1. A bordadeira monta apenas a entretela rasgável de 60g ou resinada no bastidor.",
      "2. Aplica fita dupla face para bordado ou cola temporária sobre a entretela.",
      "3. Posiciona o couro sintético esticado e plano sobre a base (sem prensar no aro para não deixar marcas permanentes).",
      "4. Instala uma agulha nova 75/11 ponta bola leve ou microtex fina (nunca usar agulha de couro com navalha tipo Wedge/Leather em sintéticos finos de bordadeira, pois ela rasga a lâmina).",
      "5. A máquina de bordar costura a matriz com velocidade moderada (550 a 650 PPM).",
      "6. Os pontos assentam de forma rica e acetinada sobre a textura do couro sintético.",
      "7. A peça é retirada com acabamento impecável para a montagem de bolsas, carteiras e nécessaires de luxo."
    ],
    beginnerExplanation: "É o couro sintético (aquele material que imita couro de verdade usado em bolsas e carteiras)! Para bordar nele sem estragar, o segredo é nunca prender ele esmagado no bastidor (use o método da flutuação) e não usar matriz com pontos muito apertados, senão a agulha fura tantos buraquinhos juntos que o couro rasga todinho!",
    applications: [
      "Nécessaires personalizadas, bolsas femininas, carteiras e clutches de mão",
      "Chaveiros, porta-passaportes, tags de mala e brindes corporativos de luxo",
      "Capa de caderneta de vacinação de bebê e organizadores de documentos",
      "Patches e etiquetas personalizadas com acabamento de couro para jeans e calçados"
    ],
    commonErrors: [
      "Apertar o sintético diretamente no aro do bastidor plástico, deixando uma marca circular funda e permanente que nunca mais sai",
      "Usar agulha especial com ponta cortante em forma de cunha (Leather/Wedge Point) em sintético fino, cortando o material em pedaços",
      "Bordar matrizes pesadas com preenchimento tatami ultra-denso (0.35mm), fazendo o centro do desenho destacar e cair fora como um recorte picotado"
    ],
    troubleshootingTips: [
      "Borde o couro sintético SEMPRE na técnica de flutuação com fita dupla face ou fita crepe nas bordas",
      "Utilize agulha Schmetz Microtex 75/11 ou Embroidery 75/11 (pontas agudas finas que perfuram sem rasgar a lâmina de PU)",
      "No software de bordado, aumente o espaçamento de densidade de 0.40mm para 0.45mm-0.48mm e mantenha o ponto reto de contorno com pelo menos 3.0mm de passo",
      "Para limpar marcas de dedos ou cola após o bordado, passe um paninho umedecido com água e uma gota de detergente neutro"
    ],
    dicaArtrelados: "Nécessaires e porta-documentos em couro sintético são os campeões absolutos de vendas para presentes corporativos e lembranças de casamento! Borde sempre na flutuação e use matrizes lineares ou com ponto cheio leve: o resultado parece artigo importado de grife!",
    voceSabia: "O couro sintético de PU (Poliuretano) moderno é ecologicamente sustentável e livre de crueldade animal, possuindo microporos respiráveis que aceitam bordados de alta definição sem ressecar com o tempo!",
    practicalExercise: "Corte um pedaço de courino sintético 0.8mm: fixe na flutuação sobre entretela rasgável e borde um monograma com densidade 0.45mm. Veja como a peça fica estruturada, linda e com acabamento de boutique!",
    quickSummary: "Material laminado que imita couro legítimo, excelente para bolsas e brindes, exigindo flutuação e densidade equilibrada.",
    relatedTerms: ["Fixação em Flutuação / Bordado Flutuante", "Agulha 75/11", "Densidade de Ponto", "Bordado no Bastidor (ITH)"],
    tags: ["f-046", "courino", "couro sintetico", "pu", "montana", "necessaires", "bolsas", "artrelados"],
    bibliographicReferences: [
      "SULKY OF AMERICA. Sewing & Embroidering on Faux Leather, Vinyl & Cork. Kennesaw, 2023.",
      "SCHMETZ NEEDLES. Needles and Techniques for Synthetic Leathers & Vinyls. Herzogenrath, 2022.",
      "ARTRELADOS. O Universo das Nécessaires e Sintéticos no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-047-felpa-e-atoalhado-no-bordado",
    code: "F-047",
    term: "Felpa e Atoalhado no Bordado (Terry Cloth & Pile Fabric Stabilization)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim villus (tufo de pelos, felpa) e do francês toile (tela de tecido). Tecidos atoalhados com laçadas de felpa em anel desenvolvidos na Turquia e popularizados mundialmente a partir do século XIX.",
    summary: "Tecido estruturado com laçadas livres de algodão (toalhas de banho e roupões) que exige o uso indispensável de plástico hidrossolúvel por cima (topping) para o bordado não afundar.",
    definition: "A Felpa e Tecido Atoalhado (Terry Cloth / Loop Pile Fabric) é uma estrutura têxtil tridimensional caracterizada por uma tecelagem especial onde fios de urdume suplementares formam milhares de laçadas livres em anel (loops) em uma ou ambas as faces da toalha, responsáveis pela alta capacidade de absorção de líquidos. No bordado computadorizado, a presença dessas felpas flexíveis representa um desafio técnico: se forem bordadas diretamente sem proteção superior, as pontas das felpas passam pelo meio dos pontos cheios e tatamis, espetando para fora e fazendo as letras e desenhos perderem totalmente a nitidez e o brilho. A solução técnica obrigatória é o uso de Topping (Filme Hidrossolúvel por cima) e Underlay estruturado de sustentação.",
    technicalDetails: "Gramaturas típicas de toalhas: 350g/m² (toalhas leves/escolares), 450g/m² a 500g/m² (padrão banho comercial) e 600g/m² a 800g/m² (toalhas de banhão de hotelaria de luxo). Estabilização padrão do sistema sanduíche: Entretela Rasgável 60g por baixo + Toalha no meio + Filme Hidrossolúvel (Solvy de 20-30 micras) por cima.",
    howItWorks: [
      "1. A bordadeira monta a toalha no bastidor (ou na flutuação) com entretela rasgável ou recortável de base.",
      "2. Coloca uma folha de plástico hidrossolúvel transparente (Topping) esticada sobre a área felpuda da toalha.",
      "3. Prende as pontas do plástico com fita crepe ou executa a função de alinhavo prévio (Baste).",
      "4. A máquina executa primeiro o underlay de rede/tatami leve que achata as felpas de forma permanente.",
      "5. Em seguida, os pontos cheios e tatamis assentam sobre o filme liso do plástico.",
      "6. Ao terminar, a bordadeira remove o excesso de plástico seco puxando com os dedos e passa um paninho úmido nos cantinhos.",
      "7. As letras e desenhos revelam um acabamento acetinado liso, nítido e sem nenhuma felpa espetada.",
      "8. A toalha seca e está pronta para o uso diário."
    ],
    beginnerExplanation: "É o tecido fofinho das toalhas de banho, rosto e roupões! Como a toalha é cheia de pelinhos soltos, se você bordar direto nela, os pelinhos entram no meio da linha e deixam o nome todo feio e sumido. A regra de ouro é sempre colocar aquele plástico mágico transparente (hidrossolúvel) por cima da toalha antes de bordar: ele abaixa os pelinhos e deixa as letras lisinhas e brilhantes!",
    applications: [
      "Toalhas de banho, toalhas de rosto, toalhões gigantes e toalhas de lavabo",
      "Roupões de banho de hotelaria e roupões personalizados para noivas",
      "Toalhinhas de boca para bebês, babadores e fraldinhas atoalhadas",
      "Toalhas de praia aveludadas e roupões infantis"
    ],
    commonErrors: [
      "Bordar toalha felpuda sem plástico hidrossolúvel por cima, fazendo as laçadas de felpa engolirem os pontos e deixarem o bordado parecendo 'comido'",
      "Usar entretela muito fina por baixo em toalhas grossas de 500g, fazendo o bordado enrugar a barra da toalha",
      "Puxar as felpas presas com tesoura ou puxador de fio, furando a trama da toalha"
    ],
    troubleshootingTips: [
      "NUNCA borde toalhas sem o filme plástico hidrossolúvel (Topping) na parte superior",
      "Em toalhas felpudas pesadas, utilize uma camada de Underlay de 'Malha Dupla / Grid' ou Tatami leve na matriz para criar um piso plano sólido",
      "Para toalhas de banho grossas que não cabem no aro plástico, utilize o método de flutuação com alfinetes ou fita dupla face nas bordas"
    ],
    dicaArtrelados: "Bordar toalhas de banho é o serviço mais procurado e lucrativo de qualquer ateliê! Guarde esse mandamento: toalha felpuda SEMPRE leva plástico hidrossolúvel por cima e entretela de 50g ou 60g por baixo. Fazendo isso, seus nomes em toalhas vão ficar com aquele acabamento de luxo perfeito que as clientes se apaixonam!",
    voceSabia: "As toalhas de banho felpudas originais foram inventadas na Turquia otomana durante o século XVIII para os banhos turcos dos sultões (Hamam), sendo tecidas manualmente em teares de veludo com laçadas de fio puxadas uma a uma com arames!",
    practicalExercise: "Borde a mesma letra em dois pedaços de toalha de banho: uma sem plástico por cima e outra com plástico hidrossolúvel. Compare a diferença brutal na nitidez, brilho e clareza das bordas!",
    quickSummary: "Estrutura têxtil com laçadas de felpa absorventes que exige filme hidrossolúvel por cima para garantir acabamento liso.",
    relatedTerms: ["Filme Plástico Hidrossolúvel (Topping)", "Entretela Rasgável", "Fixação em Flutuação", "Ponto de Sustentação / Underlay"],
    tags: ["f-047", "felpa", "atoalhado", "toalhas de banho", "terry cloth", "topping", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Toweling & Pile Fabrics Embroidery Master Guide. Freiburg, 2023.",
      "SULKY OF AMERICA. Conquering Towels, Velvets and Bulky Knits. Kennesaw, 2022.",
      "ARTRELADOS. O Segredo das Toalhas Perfeitas: Do Bastidor ao Acabamento Impecável. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-048-fio-desfiando-quebra-por-desfibramento",
    code: "F-048",
    term: "Fio Desfiando / Quebra por Desfibramento (Thread Shredding & Fraying)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Solução de Problemas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim defilare (desfazer os filamentos do fio). Problema mecânico clássico em máquinas de costura e bordar de alta velocidade decorrente de atrito, rebarbas ou incompatibilidade entre agulha e linha.",
    summary: "Defeito comum onde a linha se desmembra em múltiplos fiapos microscópicos na frente do olho da agulha antes de quebrar, causado por agulha gasta ou tensão incorreta.",
    definition: "O Desfibramento do Fio (Thread Shredding / Fraying) é um dos problemas operacionais mais recorrentes e frustrantes do bordado computadorizado. Ocorre quando o fio superior de bordado (poliéster ou viscose), ao deslizar repetidamente em alta velocidade pelo olho e canaleta da agulha, não se rompe com um corte limpo e seco, mas sim começa a se 'esfarelar' e separar seus filamentos individuais, formando um tufo/novelinho de fiapos acumulados imediatamente acima do olho da agulha até que a linha engasga e arrebenta. Suas causas raízes principais são: agulha com micro-rebarba interna no olho, agulha de tamanho incorreto (muito fina para o título da linha), passagem de linha enroscada no carretel ou tensão superior excessivamente apertada.",
    technicalDetails: "Sintoma visual: ponta da linha cortada com aspecto de 'vassourinha' ou fiapos de algodão/poliéster acumulados na barra de agulha. Diferenciação de diagnóstico: quebra seca e esticada indica travamento abrupto ou tensão extrema; quebra com desfibramento indica atrito contínuo, rebarba metálica ou superaquecimento térmico.",
    howItWorks: [
      "1. A máquina borda em velocidade normal (600 a 800 PPM).",
      "2. Uma micro-fissura microscópica dentro do olho da agulha (provocada pelo atrito de milhares de pontos anteriores) atua como uma lâmina de serra sobre a linha.",
      "3. A cada descida da agulha, um dos microfilamentos do fio é cortado.",
      "4. Os filamentos cortados vão se empurrando para trás e acumulando-se na entrada do orifício da agulha.",
      "5. Forma-se uma bolinha de fiapos que impede a linha de deslizar pelo olho.",
      "6. A linha estica até arrebentar, acionando o sensor de fio quebrado da máquina.",
      "7. A troca imediata da agulha por uma peça nova de boa marca elimina a causa física do desfibramento."
    ],
    beginnerExplanation: "É quando a linha colorida começa a 'descascar' e virar um chumaço de fiapos parecendo algodão doce na ponta da agulha até que ela arrebenta! Isso acontece em 99% das vezes porque a agulha já ficou velha, cega ou com uma rebarba que fica raspando e 'lixando' a linha até ela quebrar!",
    applications: [
      "Diagnóstico e correção de paradas intermitentes de máquinas no ateliê",
      "Manutenção preventiva de rotina com descarte de agulhas gastas",
      "Ajuste fino de passagem de linhas especiais delicadas (metálicas, rayon e luminescentes)",
      "Treinamento de operadores em confecções de bordado computadorizado"
    ],
    commonErrors: [
      "Continuar bordando com a mesma agulha que está desfiando a linha, parando a cada 50 pontos para passar a linha novamente com perda imensa de tempo",
      "Apertar ainda mais a tensão superior achando que a linha desfiou por estar frouxa, piorando dramaticamente o atrito",
      "Usar cones de linha ressecados que ficaram anos guardados expostos ao sol da janela"
    ],
    troubleshootingTips: [
      "Passo 1: Troque a agulha IMEDIATAMENTE por uma nova (Organ, Schmetz ou Groz-Beckert 75/11 de bordado)",
      "Passo 2: Retire toda a linha da máquina e passe do zero, garantindo que ela não esteja dando voltas presas no pé do carretel",
      "Passo 3: Se estiver usando linha metálica, mude para agulha Metallic 80/12 (olho 2 vezes maior) e diminua a velocidade para 550 PPM",
      "Passo 4: Borrife um jato leve de silicone spray no carretel de linha para lubrificar as fibras"
    ],
    dicaArtrelados: "A linha começou a desfiar e parecer uma vassourinha? Não perca seu precioso tempo: descarte essa agulha no lixinho e coloque uma agulha novinha em folha! Uma agulha nova custa centavos e devolve a paz e a velocidade ao seu trabalho!",
    voceSabia: "Ao contrário das linhas de costura comuns que têm torção simples, as linhas de bordado de alta qualidade possuem uma torção especial no sentido Z (Z-twist) calculada para não desenrolar com a rotação horário-anti-horária da lançadeira!",
    practicalExercise: "Pegue uma agulha velha que já bordou bastante e passe uma linha nova pelo olho dela puxando para cima e para baixo rapidamente com as mãos: sinta como a linha desfia; repita o teste com uma agulha zerada e sinta o deslizamento 100% liso!",
    quickSummary: "Fenômeno onde a linha se esfarela em fiapos no olho da agulha antes de partir, corrigido com a substituição da agulha.",
    relatedTerms: ["Fricção do Fio no Olho da Agulha", "Agulha 75/11", "Sensor de Fio Quebrado", "Tensão Superior da Linha"],
    tags: ["f-048", "fio desfiando", "quebra de linha", "desfibramento", "fraying", "agulha gasta", "solucao de problemas", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. Troubleshooting Thread Breakage, Shredding & Needle Defects. Herzogenrath, 2023.",
      "SUPERIOR THREADS. The Mechanics of Thread Shredding & Needle Eye Friction. St. George, 2022.",
      "ARTRELADOS. Guia de Primeiros Socorros da Bordadeira: Resolvendo Quebras de Linha em Minutos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

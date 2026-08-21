import { Verbete } from "../types";

export const VERBETES_LETTER_P_PART1: Verbete[] = [
  {
    id: "ponto-satim-cetim",
    code: "P-001",
    letter: "P",
    term: "Ponto Satim / Ponto Cetim (Satin Stitch / Column Stitch)",
    pronunciation: "pon-to sa-tim",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Ponto de zigue-zague compacto em que fios paralelos e contínuos cruzam de uma borda a outra de uma coluna, conferindo brilho acetinado, alto relevo e definição impecável para letras e contornos.",
    origin: "Do francês 'satin', derivado da cidade portuária chinesa de Zaiton (Quanzhou), famosa historicamente pelo comércio de sedas reluzentes tecidas com fios longos e sem torção aparente.",
    definition: "O Ponto Satim (também grafado como Cetim ou Ponto Coluna) é a estrutura fundamental de acabamento e contorno no bordado computadorizado. Ele é formado por uma sucessão contínua de laçadas paralelas em zigue-zague onde a agulha penetra alternadamente na borda esquerda e na borda direita do vetor gerador (coluna). Como os filamentos de poliéster ou viscose ficam esticados de ponta a ponta sem perfurações intermediárias, a luz reflete de maneira homogênea em sua superfície cilíndrica, proporcionando um brilho espelhado característico e um volume táctil pronunciado. É o padrão absoluto para tipografias, monogramas, arabescos, bordas de brasões e contornos de apliques.",
    howItWorks: [
      "1. O programador define dois trilhos vetoriais paralelos (trilho A e trilho B) e as linhas de ângulo de inclinação no software de digitalização.",
      "2. A máquina executa previamente o ponto suporte (underlay) no centro da coluna para erguer a estrutura e estabilizar a fibra do tecido.",
      "3. O pantógrafo desloca a agulha da margem esquerda para a direita em uma passada contínua.",
      "4. A cada penetração, a linha superior forma a laçada na margem exterior, sendo capturada pela lançadeira com o fio da bobina.",
      "5. O avanço milimétrico do pantógrafo entre uma passada e outra determina o espaçamento (densidade, geralmente entre 0.38 mm e 0.45 mm).",
      "6. A alternância contínua cria uma coluna densa, fechada e com bordas ultra-nítidas."
    ],
    beginnerExplanation: "É aquele ponto clássico de bordado que parece uma fitinha de cetim brilhante e gordinha! A agulha dá um pulo de um lado para o outro da letra ou do contorno, cobrindo o tecido sem furar o meio. É o ponto mais usado para bordar nomes, letras de toalhas e contornar desenhos.",
    applications: [
      "Bordado de textos, nomes, monogramas e tipografias de 5 mm a 50 mm de altura",
      "Contornos finais de alta definição em logomarcas e brasões institucionais",
      "Bordas de travamento e acabamento para apliques em tecidos diversos",
      "Arabescos, folhagens e detalhes ornamentais que exigem brilho e relevo tátil"
    ],
    technicalDetails: "A largura ideal de uma coluna de satim varia entre 1.5 mm e 7.0 mm. Colunas menores que 1.0 mm provocam perfurações excessivas e acúmulo de linha (picote do tecido), exigindo conversão para Ponto Reto/Triplo. Colunas maiores que 8.0 mm a 9.0 mm resultam em fios excessivamente frouxos que se soltam e enroscam na lavagem; nesse caso, utiliza-se a função 'Divisão Automática' (Auto-Split Satin) com comprimento máximo de salto calibrado em 7.0 mm.",
    commonErrors: [
      "❌ Programar letras minúsculas (menores que 4 mm) em ponto satim com colunas inferiores a 0.8 mm, triturando o tecido",
      "❌ Bordar colunas muito largas (acima de 10 mm) sem divisão de ponto (Auto-split), deixando laçadas soltas e vulneráveis a puxões de fio",
      "❌ Esquecer o ponto de suporte (underlay), resultando em colunas afundadas na trama do tecido e com densidade irregular",
      "❌ Usar densidade excessivamente fechada (menor que 0.32 mm) somada a alta tensão de linha, enrugando o tecido"
    ],
    troubleshootingTips: [
      "Se as bordas do satim parecerem serrilhadas e desalinhadas: Aumente a compensação de encolhimento (Pull Compensation para 0.35 mm ou 0.40 mm) e firme o bastidor",
      "Se a linha branca da bobina aparecer no topo do satim: A tensão superior está muito alta ou a mola da caixa de bobina está frouxa",
      "Se o ponto afundar no tecido (como em toalhas atoalhadas ou piquet): Insira filme hidrossolúvel de topping e aplique ponto suporte zigue-zague centralizado"
    ],
    dicaArtrelados: "Para letras e textos com legibilidade perfeita, calibre a densidade do satim entre 0.40 mm e 0.42 mm e utilize Ponto Suporte de Traço Central (Center Walk) para colunas finas, ou Zigue-Zague duplo para colunas acima de 3 mm.",
    voceSabia: "O ponto satim consome em média 3 a 4 vezes mais linha do que um preenchimento tatami para cobrir a mesma área visual, porém produz um brilho óptico incomparavelmente superior devido à reflexão contínua da luz no filamento.",
    practicalExercise: "Digitalize no software um retângulo de 5 mm x 30 mm em ponto satim com densidade 0.40 mm. Borde uma versão sem ponto suporte e outra com ponto suporte de zigue-zague. Compare o relevo e a nitidez ao toque!",
    quickSummary: "Ponto contínuo em zigue-zague de borda a borda que confere alto relevo, brilho acetinado e bordas nítidas a letras e contornos.",
    relatedTerms: ["Ponto Tatami", "Compensação de Encolhimento (Pull Compensation)", "Underlay (Ponto Suporte)", "Divisão Automática (Auto-Split)"],
    tags: ["p-001", "ponto satim", "ponto cetim", "satin stitch", "coluna", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Digitizing Best Practices: Perfect Satin Columns & Lettering. Sydney, 2022.",
      "DEVERSON, B. The Complete Guide to Machine Embroidery Digitizing. London: Textile Media, 2021."
    ]
  },
  {
    id: "ponto-tatami-preenchimento",
    code: "P-002",
    letter: "P",
    term: "Ponto Tatami / Ponto de Preenchimento (Tatami Stitch / Fill Stitch)",
    pronunciation: "pon-to ta-ta-mi",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Ponto de preenchimento estrutural composto por fileiras alternadas de pontos retos com desencontros programados, ideal para cobrir grandes superfícies planas de forma estável, uniforme e durável.",
    origin: "Do japonês 'tatami' (畳), tradicional esteira de palha de arroz entrelaçada usada nos pisos japoneses, cuja trama diagonal e intercalada inspirou o algoritmo de preenchimento têxtil.",
    definition: "O Ponto Tatami (também conhecido como Cebrina, Ponto de Preenchimento ou Fill Stitch) é o algoritmo primário para preencher áreas geométricas médias e grandes (superiores a 7 mm ou 10 mm de largura) no bordado computadorizado. Ele opera dividindo a superfície em fileiras paralelas e compactas de pontos retos onde as penetrações da agulha são geometricamente defasadas entre linhas adjacentes (fração padrão de 0.25 a 0.33 do passo do ponto). Esse desenho entrelaçado evita o alinhamento das perfurações — o que rasgaria o tecido em linha reta — e distribui as forças de tensão uniformemente, resultando em uma cobertura plana, estável e resistente a lavagens industriais.",
    howItWorks: [
      "1. O software calcula os contornos do polígono vetorial e traça fileiras retilíneas de acordo com o ângulo de inclinação definido.",
      "2. A agulha perfura o tecido executando pontos retos com comprimento padrão (geralmente entre 3.5 mm e 4.5 mm).",
      "3. Ao final de cada segmento, o pantógrafo desce a distância do espaçamento de fileira (densidade, tipicamente 0.40 mm a 0.45 mm) e retorna na direção oposta.",
      "4. As penetrações da agulha na fileira seguinte são deslocadas milimetricamente (offset) para intercalar as emendas.",
      "5. A sobreposição coordenada das fileiras cria uma 'esteira têxtil' plana, sólida e sem vãos visíveis."
    ],
    beginnerExplanation: "É o ponto usado para pintar grandes desenhos com linha, como o fundo de um escudo, uma bola de futebol inteira ou o corpo de um bichinho. Ele faz pontinhos retos bem juntinhos que parecem uma cestaria ou esteirinha, preenchendo tudo sem deixar buracos e sem repuxar a peça.",
    applications: [
      "Preenchimento de fundos de brasões, bandeiras, mascotes e ilustrações complexas",
      "Cobertura de áreas largas com largura superior a 8 mm (onde o satim ficaria frouxo)",
      "Criação de texturas personalizadas e relevos decorativos (Tatami com relevo ou gravura)",
      "Bases sólidas para suporte de apliques e patches militares/corporativos"
    ],
    technicalDetails: "Os parâmetros cruciais do Tatami são: Espaçamento de Linhas (Densidade: 0.38 mm a 0.45 mm), Comprimento de Ponto (Stitch Length: 3.8 mm a 4.2 mm) e Fração de Deslocamento (Offset: 0.25 ou 0.33). O ângulo de inclinação do ponto tatami nunca deve coincidir com o ângulo do ponto suporte inferior (underlay tatami) nem com a trama principal do tecido; uma rotação de 30° a 45° é recomendada para mitigar o efeito 'Push-Pull'.",
    commonErrors: [
      "❌ Utilizar Tatami em áreas estreitas menores que 3 mm, gerando pontos curtos indesejados e excesso de amarrações",
      "❌ Alinhar o ângulo do Tatami exatamente a 0° ou 90° em tecidos de malha piquet, afundando a linha nos veios do tecido",
      "❌ Deixar as penetrações alinhadas (fração 0.00 ou 0.50), criando sulcos visíveis semelhantes a tábuas de madeira (efeito moiré indesejado)",
      "❌ Esquecer o ponto suporte de grade (Tatami Underlay) em fundos grandes, provocando aberturas e encolhimento no tecido"
    ],
    troubleshootingTips: [
      "Se o fundo tatami ficar ralo mostrando o tecido de fundo: Reduza o espaçamento de 0.45 mm para 0.40 mm ou adicione uma camada de underlay tatami a 90°",
      "Se o tecido repuxar muito no sentido das fileiras: Aumente a compensação de repuxo (Pull Compensation) e rotacione o ângulo do ponto em 30° a 45°",
      "Se surgirem faixas verticais ou listras feias no preenchimento: Modifique a fração de deslocamento do ponto (Stitch Pattern Offset) para quebrar o padrão"
    ],
    dicaArtrelados: "Para criar efeito de profundidade sem trocar de cor, borde duas seções adjacentes com a mesmíssima linha, mas rotacione o ângulo do Tatami em 45° entre elas. A reflexão da luz criará dois tons visuais mágicos (efeito tom sobre tom)!",
    voceSabia: "O ponto tatami foi o primeiro algoritmo de preenchimento vetorial computadorizado desenvolvido nos anos 1970 para os computadores industriais de bordado da Marco e Tajima.",
    practicalExercise: "Borde dois quadrados de 40 mm x 40 mm com Tatami de mesma densidade (0.42 mm): no primeiro, use ângulo de 0°; no segundo, use ângulo de 45°. Observe no tecido como o de 45° deforma muito menos a peça!",
    quickSummary: "Ponto de preenchimento estrutural uniforme com penetrações intercaladas, perfeito para cobrir grandes áreas com durabilidade e estabilidade.",
    relatedTerms: ["Ponto Satim", "Densidade de Ponto", "Ângulo de Ponto (Stitch Angle)", "Underlay (Ponto Suporte)"],
    tags: ["p-002", "ponto tatami", "ponto de preenchimento", "tatami stitch", "fill stitch", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL SEWING. Embroidery Digitizing Principles and Mechanics. Nagoya: Tajima Corp, 2020.",
      "KIDD, L. Digitizing for Embroidery: Structural Fills and Density Control. Cincinnati: ST Publications, 2019."
    ]
  },
  {
    id: "ponto-corrido-reto",
    code: "P-003",
    letter: "P",
    term: "Ponto Corrido / Ponto Reto (Running Stitch / Walk Stitch)",
    pronunciation: "pon-to cor-ri-do",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Sucessão linear de pontos simples alinhados um após o outro, utilizado para traçados finos, detalhes lineares, caminhos de deslocamento ocultos e estruturas de suporte.",
    origin: "Do latim 'currere' (correr), em alusão ao movimento contínuo e veloz da costura manual linear que corre pela extensão do tecido.",
    definition: "O Ponto Corrido (conhecido internacionalmente como Running Stitch, Walk Stitch ou Ponto Reto) é a forma geométrica mais elementar e versátil do bordado computadorizado. Consiste em uma sequência linear de perfurações simples onde o pantógrafo avança uma distância predeterminada (passo do ponto, geralmente de 2.0 mm a 3.0 mm) a cada ciclo da agulha. Ele desempenha três papéis capitais: traçado de linhas de contorno ultra-finas (0.2 mm a 0.4 mm), deslocamento subterrâneo da agulha entre objetos (Travel Stitching para eliminar cortes desnecessários) e estruturação de pontos de suporte (Underlay Center Walk e Edge Walk).",
    howItWorks: [
      "1. A agulha perfura o ponto A e forma a laçada com a bobina.",
      "2. A agulha sobe ao Ponto Morto Superior e o pantógrafo se desloca em linha reta ou curva pelo comprimento do passo programado (ex: 2.5 mm).",
      "3. A agulha perfura o ponto B, ancorando o segmento de linha na superfície.",
      "4. O processo avança continuamente ao longo do vetor geométrico desenhado no software.",
      "5. Em curvas acentuadas, o software encurta dinamicamente o passo do ponto para manter a fidelidade da curvatura sem criar arestas retas."
    ],
    beginnerExplanation: "É o clássico pesponto reto de costura! Uma linha de pontinhos simples que vai andando para a frente. É usado para fazer detalhes bem fininhos (como bigodes de gatinho, fios de cabelo), para costurar ao redor antes de cortar um aplique ou para a máquina andar escondida de um desenho até o outro.",
    applications: [
      "Desenho de linhas finas, bigodes, contornos de rostos e ilustrações estilo 'Redwork' ou 'Blackwork'",
      "Caminhos de viagem (Travel Stitches) por baixo de áreas que serão cobertas posteriormente",
      "Linhas de marcação de posição (Placement Lines) e fixação (Tackdown Lines) em bordados com aplique",
      "Ponto de suporte linear (Edge Walk e Center Walk Underlay)"
    ],
    technicalDetails: "O comprimento padrão do ponto corrido é de 2.5 mm a 3.0 mm. Passos menores que 1.5 mm em curvas muito fechadas causam acúmulo excessivo de furos que cortam o tecido. Passos maiores que 4.0 mm em tecidos finos podem afrouxar e enroscar durante o uso da peça. Em curvas fechadas, deve-se ativar a função de 'Curva Inteligente' (Chord Gap / Curve Tolerance).",
    commonErrors: [
      "❌ Utilizar ponto corrido simples com passo muito longo (acima de 4 mm) para contornos decorativos, resultando em linhas frouxas e frágeis",
      "❌ Deixar o ponto corrido muito curto (abaixo de 1.0 mm) em curvas, gerando nós e quebra constante de linha",
      "❌ Usar ponto corrido simples quando se deseja uma linha visível e destacada (nesse caso, deve-se usar o Ponto Triplo/Bean Stitch)",
      "❌ Realizar viagens de ponto corrido por cima de tecidos claros onde a linha escura ficará visível por transparência"
    ],
    troubleshootingTips: [
      "Se as curvas do desenho parecerem polígonos facetados em vez de círculos suaves: Diminua o passo do ponto para 2.0 mm ou ajuste a tolerância de curva do software",
      "Se a linha soltar nas pontas do contorno: Ative o Ponto de Trava (Tie-in e Tie-off) com 3 micro-pontos de amarração",
      "Se o traço linear ficar quase invisível afundando no tecido: Substitua o ponto corrido simples por Ponto Triplo (Bean Stitch)"
    ],
    dicaArtrelados: "Para bordados estilo 'Line Art' minimalistas ou contornos infantis, nunca use ponto corrido simples de uma passada só: use sempre o Ponto Triplo (Bean Stitch) ou faça 3 passadas de ponto corrido para dar corpo e destaque profissional ao traço!",
    voceSabia: "O ponto corrido é a base do estilo de bordado tradicional inglês 'Redwork' do século XIX, que se tornou famoso por usar linha vermelha de algodão da Turquia sobre linho branco.",
    practicalExercise: "Desenhe uma espiral no software com 50 mm de diâmetro. Gere o bordado com ponto corrido de 2.5 mm. Borde em um retalho e observe como o pantógrafo desenha suavemente a curva sem produzir ruídos mecânicos bruscos.",
    quickSummary: "Sequência linear de pontos retos simples para traçados finos, marcações de aplique e deslocamentos subterrâneos da máquina.",
    relatedTerms: ["Ponto Triplo (Bean Stitch)", "Ponto de Viagem (Travel Stitch)", "Ponto de Alinhavação (Basting)", "Underlay (Ponto Suporte)"],
    tags: ["p-003", "ponto corrido", "ponto reto", "running stitch", "walk stitch", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Vector Drawing and Run Stitch Optimization. Sydney, 2021.",
      "EMBROIDERY TRADE ASSOCIATION. Standard Stitch Types and Mechanical Execution. Dallas, 2020."
    ]
  },
  {
    id: "ponto-triplo-bean-stitch",
    code: "P-004",
    letter: "P",
    term: "Ponto Triplo / Ponto Bean (Triple Stitch / Bean Stitch)",
    pronunciation: "pon-to tri-plo",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Ponto linear reforçado executado em ciclo de três passadas sobre o mesmo segmento (frente-trás-frente), produzindo uma linha grossa, nítida, encorpada e de altíssima durabilidade.",
    origin: "Do inglês 'Bean Stitch' (ponto grão de feijão), assim batizado devido ao pequeno relevo arredondado e volumoso que cada segmento triplo forma na superfície do tecido.",
    definition: "O Ponto Triplo (Bean Stitch ou Ponto Grão) é uma variação robusta do ponto corrido projetada para conferir alto impacto visual e espessura a traçados lineares sem a necessidade de recorrer ao ponto satim. Sua lógica de formação mecânica consiste em avançar um passo à frente (+1), retroceder exatamente sobre o mesmo furo (-1) e avançar novamente para o próximo ponto (+1), depositando três filamentos paralelos no mesmíssimo segmento. Essa sobreposição triplica a espessura da linha e cria pequenos nós de relevo tátil, sendo a escolha de excelência para desenhos estilo 'Quilting', contornos de apliques rústicos, bigodes de personagens e linhas de destaque em tecidos felpudos.",
    howItWorks: [
      "1. A agulha penetra na coordenada inicial (Ponto A).",
      "2. O pantógrafo avança o comprimento de passo programado (ex: 2.8 mm) e a agulha penetra no Ponto B (passada 1).",
      "3. O pantógrafo retrocede com precisão micrométrica até o Ponto A e a agulha penetra no mesmo orifício (passada 2).",
      "4. O pantógrafo avança novamente e a agulha penetra mais uma vez no Ponto B (passada 3).",
      "5. A partir do Ponto B, o ciclo se repete para o Ponto C (+1, -1, +1), tecendo uma linha contínua e espessa."
    ],
    beginnerExplanation: "É um pontinho reto especial que vai e volta: a máquina dá um ponto para frente, um para trás no mesmo buraquinho e outro para frente de novo! Isso faz a linha ficar três vezes mais grossa e bonita, sem sumir no tecido.",
    applications: [
      "Contornos de ilustrações infantis, estilo aquarela, 'Line Art' e 'Sketch Embroidery'",
      "Fixação decorativa e rústica de apliques (Substituindo o ponto cheio tradicional)",
      "Traçados de quilting livre computadorizado em almofadas, mantas e enxovais",
      "Destaque de pequenos detalhes lineares como sorrisos, bigodes, sobrancelhas e galhos de plantas"
    ],
    technicalDetails: "O comprimento de passo ideal para o Ponto Triplo situa-se entre 2.5 mm e 3.2 mm. Em curvas apertadas, um passo de 2.0 mm garante redondeza sem triturar o tecido. Existem também variações de Ponto Quíntuplo (5 passadas) e Ponto Sétuplo (7 passadas) para efeitos manuais superpesados, porém exigem agulhas resistentes (80/12) para evitar quebra de linha.",
    commonErrors: [
      "❌ Usar passo muito curto (menor que 1.8 mm) no ponto triplo, fazendo 3 furos no mesmo micro-espaço e furando o tecido",
      "❌ Utilizar ponto triplo com linha muito grossa (30wt ou 12wt) sem trocar para uma agulha de calibre maior (90/14)",
      "❌ Bordar ponto triplo em malhas muito elásticas sem entretela de boa gramatura, repuxando o tecido na direção do traço",
      "❌ Confundir Ponto Triplo com Ponto Corrido Simples na hora da digitalização, deixando o desenho sem contraste"
    ],
    troubleshootingTips: [
      "Se a linha quebrar durante a execução do ponto triplo: Reduza a velocidade da máquina para 600 PPM e aumente o comprimento de passo para 2.8 mm",
      "Se o tecido ficar com furos visíveis ao redor da linha: Troque a agulha por uma ponta bola fina (calibre 75/11 Ball Point)",
      "Se o traço parecer irregular: Verifique a tensão da bobina para garantir que o nó fique perfeitamente centralizado no tecido"
    ],
    dicaArtrelados: "Para criar o famoso visual de 'desenho feito à mão' (Bordado Sketch), digitalize o desenho principal usando Ponto Triplo com passo de 2.8 mm e preenchimentos com pontos leves e abertos!",
    voceSabia: "Em alguns softwares de programação, você pode selecionar repetições de 5, 7 ou até 9 passadas no ponto Bean para simular com perfeição o ponto de cordão manual de lã!",
    practicalExercise: "No seu software, faça duas linhas onduladas de 10 cm: uma em Ponto Corrido simples (2.5 mm) e outra em Ponto Triplo (2.5 mm). Borde lado a lado em tecido de sarja e sinta com os dedos a diferença brutal de relevo e espessura!",
    quickSummary: "Ponto linear reforçado em 3 passadas no mesmo segmento que triplica a espessura da linha e cria contornos nítidos e volumosos.",
    relatedTerms: ["Ponto Corrido", "Ponto de Haste", "Compensação de Encolhimento", "Aplique Bordado"],
    tags: ["p-004", "ponto triplo", "bean stitch", "triple stitch", "pesponto reforçado", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Creative Digitizing: Triple Bean and Artistic Outlines. Sydney, 2021.",
      "KIDD, L. Specialty Outlines and Sketch Embroidery Digitizing. Cincinnati: ST Books, 2019."
    ]
  },
  {
    id: "ponto-cruz-computadorizado",
    code: "P-005",
    letter: "P",
    term: "Ponto Cruz Computadorizado (Machine Cross Stitch)",
    pronunciation: "pon-to cruz",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Digitalização e execução mecânica de pequenos pontos em formato de 'X' distribuídos em uma grade quadriculada regular, reproduzindo com ultraprecisão o bordado manual tradicional em etamine.",
    origin: "Do latim 'crux' (cruz), uma das técnicas de bordado manual mais antigas da humanidade, datada da Pré-História e popularizada na Europa medieval através dos mosteiros.",
    definition: "O Ponto Cruz Computadorizado é um módulo especializado de digitalização e execução que emula a técnica do ponto cruz manual em máquinas eletrônicas de bordar. O software cria uma malha vetorial ortogonal invisível (medida em contagens por polegada ou milímetros, tipicamente de 1.4 mm a 2.5 mm por cruz) e gera pares de pontos diagonais sobrepostos (/) e (\\) que se interceptam no centro de cada célula. A máquina realiza cada cruzada com número calibrado de passadas (simples, dupla ou tripla) para conferir textura artesanal autêntica, permitindo bordar quadros realistas, toalhas de lavabo, motivos florais e alfabéticos com rapidez centenas de vezes superior à manual.",
    howItWorks: [
      "1. A imagem matricial ou gráfico quadriculado é importado para o módulo de Cross Stitch do software.",
      "2. Cada pixel colorido é convertido em uma cruz com tamanho de grade definido (ex: 14 counts/inch = 1.8 mm por cruz).",
      "3. O software calcula o percurso contínuo de bordado para minimizar saltos e nós entre cruzes adjacentes de mesma cor.",
      "4. A máquina borda primeiro a perna diagonal inferior (/) de uma sequência de células.",
      "5. Em seguida, a máquina retorna bordando a perna diagonal superior (\\) sobrepondo-se no mesmo ângulo.",
      "6. O resultado forma uma textura quadriculada com relevo tátil perfeitamente uniforme."
    ],
    beginnerExplanation: "É o ponto cruz tradicional de vovó feito na máquina computadorizada! A máquina faz pequenos 'X' de linha super perfeitinhos e alinhadinhos em uma grade, criando quadros, flores e nomes com aquele visual artesanal charmoso, só que em poucos minutos.",
    applications: [
      "Bordados em toalhas de banho e lavabo com faixa de etamine integrada",
      "Quadros decorativos rústicos, motivos florais, temas natalinos e infantis",
      "Reprodução de gráficos tradicionais de ponto cruz manual em matrizes digitais",
      "Personalização de enxovais de mesa, guardanapos de linho e panos de prato sofisticados"
    ],
    technicalDetails: "A resolução do ponto cruz é definida pelo tamanho da cruz (Grid Size: de 1.2 mm a 3.0 mm) e pelo número de passadas por braço (Single, Double ou Triple Pass). Para bordar sobre tecido etamine real, o tamanho da grade digital deve coincidir rigorosamente com a contagem dos fios da trama do tecido físico (ex: etamine 14 furos/pol = 1.81 mm de grade). Se bordado sobre tecido liso (linho ou algodão), utiliza-se entretela rasgável ou hidrossolúvel de suporte.",
    commonErrors: [
      "❌ Tentar bordar ponto cruz sobre tecido etamine sem calibrar o tamanho exato da grade, desencontrando as agulhadas dos furinhos do tecido",
      "❌ Usar passadas triplas com linha grossa em grades muito pequenas (menos de 1.4 mm), criando nós empelotados e quebras de linha",
      "❌ Inverter a ordem das diagonais no mesmo projeto, fazendo algumas cruzes fecharem com (/) por cima e outras com (\\), quebrando a uniformidade visual",
      "❌ Bordar com alta velocidade (acima de 750 PPM), provocando vibração do bastidor e desalinhando as quinas do 'X'"
    ],
    troubleshootingTips: [
      "Se as cruzes ficarem tortas ou com pernas abertas: Reduza a velocidade para 500-600 PPM e aperte adequadamente o bastidor",
      "Se a linha embolar por baixo no início de cada cruz: Verifique a configuração de pontos de amarração nos parâmetros de ponto cruz do software",
      "Se as cruzes ficarem muito ralas: Mude a configuração de passada simples (Single Stitch) para passada dupla (Double) ou tripla (Triple)"
    ],
    dicaArtrelados: "Ao bordar ponto cruz sobre linho ou algodão puro (sem etamine), use linha de poliéster fosca (estilo algodão/frosted) com grade de 1.8 mm e passada dupla. Fica idêntico ao ponto cruz manual feito com meada de algodão!",
    voceSabia: "Enquanto uma bordadeira manual experiente leva cerca de 2 semanas para bordar um quadro médio de ponto cruz de 15.000 cruzes, uma máquina computadorizada moderna executa a mesma matriz em menos de 30 minutos!",
    practicalExercise: "Use o gerador de Ponto Cruz do seu software para criar uma inicial em maiúscula com grade de 2.0 mm e passada dupla. Borde sobre um tecido de algodão cru com entretela rasgável e analise o toque rústico obtido.",
    quickSummary: "Emulação computadorizada de cruzes em grade regular que recria a estética e textura do bordado manual tradicional.",
    relatedTerms: ["Ponto de Haste", "Ponto Corrido", "Matriz de Bordado", "Resolução da Grade (Grid Size)"],
    tags: ["p-005", "ponto cruz", "cross stitch", "etamine", "bordado artesanal", "artrelados"],
    bibliographicReferences: [
      "BROTHER INTERNATIONAL. Cross Stitch Creation Guide in PE-Design. Nagoya, 2021.",
      "WILCOM INTERNATIONAL. Cross Stitch Masterclass and Pattern Digitizing. Sydney, 2020."
    ]
  },
  {
    id: "ponto-haste-eletronico",
    code: "P-006",
    letter: "P",
    term: "Ponto de Haste Eletrônico (Stem Stitch)",
    pronunciation: "pon-to de has-te",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Ponto decorativo de linha contínua onde pontos diagonais sobrepõem-se parcialmente em padrão espiralado ou de corda torcida, conferindo efeito orgânico a caules e arabescos.",
    origin: "Do inglês 'Stem Stitch' (ponto de caule), termo tradicional do bordado livre manual utilizado desde a Idade Média para contornar ramos botânicos e ramagens florais.",
    definition: "O Ponto de Haste Eletrônico (Stem Stitch) é um algoritmo especializado de contorno vetorial que emula o ponto de haste do bordado manual livre. Diferente do ponto corrido reto e do ponto satim comum, o ponto de haste é formado por pontos lineares inclinados que avançam e retornam sobrepondo metade do comprimento do ponto anterior, posicionando a laçada sempre para o mesmo lado da linha guia. Essa geometria gera um relevo ondulado que se assemelha a uma corda fina e flexível, sendo insubstituível para bordar caules botânicos, contornos orgânicos, caligrafia fina e ilustrações estilo vintage.",
    howItWorks: [
      "1. O programador traça o vetor linear no software e seleciona o tipo de contorno 'Stem Stitch' (Ponto Haste).",
      "2. O software calcula o comprimento do passo (ex: 3.5 mm), a largura do deslocamento lateral (ex: 1.2 mm) e a taxa de sobreposição (geralmente 50%).",
      "3. A agulha perfura à frente e o pantógrafo faz um leve recuo em ângulo, assentando o fio inclinado ao lado da linha central.",
      "4. Cada novo ponto se sobrepõe ao terço final do ponto anterior, sempre mantendo a linha voltada para o mesmo lado da curva.",
      "5. O resultado contínuo é uma linha encorpada com aspecto trançado e curvatura suave."
    ],
    beginnerExplanation: "É um ponto de contorno lindo que parece uma cordinha torcida ou um galhinho de flor! Ele dá um acabamento artesanal e delicado para caules de flores, arabescos e letrinhas manuscritas finas.",
    applications: [
      "Caules de flores, folhagens, ramos de plantas e motivos botânicos",
      "Letras manuscritas e fontes cursivas de assinatura fina em camisas sociais",
      "Bordados temáticos estilo 'Bordado Livre' ou 'Vintage Linework'",
      "Contornos de rostos e figuras orgânicas com textura delicada"
    ],
    technicalDetails: "Os parâmetros cruciais são: Comprimento do Passo (Step Length: 2.5 mm a 4.0 mm), Largura da Linha (Width: 1.0 mm a 2.5 mm) e Ângulo de Inclinação. Para curvas muito sinuosas, o software deve reduzir automaticamente o comprimento do passo para preservar o aspecto torcido sem deformar o desenho. A densidade deve ser equilibrada para não sobrecarregar a fibra têxtil.",
    commonErrors: [
      "❌ Programar largura de haste muito grande (acima de 3 mm) com passo longo em tecidos elásticos, soltando os laços laterais",
      "❌ Inverter o lado da laçada no meio de uma curva contínua, quebrando a harmonia da torção da corda",
      "❌ Usar ponto de haste com linha grossa sem verificar a passagem livre pelo olho da agulha",
      "❌ Borda sobre tecidos atoalhados sem filme solúvel superior (topping), fazendo a torção afundar nas felpas"
    ],
    troubleshootingTips: [
      "Se a linha parecer reta e sem a torção característica da haste: Aumente o parâmetro de largura (Width) no software para pelo menos 1.5 mm",
      "Se as curvas ficarem com cantos pontudos: Diminua o comprimento do passo para 2.2 mm nas curvas",
      "Se o ponto repuxar o tecido: Aumente a compensação de encolhimento e utilize entretela rasgável de 60 g/m² bem tensionada"
    ],
    dicaArtrelados: "Para monogramas clássicos e iniciais em lenços de bolso ou camisas masculinas, experimente substituir o ponto satim tradicional pelo Ponto de Haste Eletrônico com largura de 1.4 mm. O resultado fica requintado e com ar de alfaiataria fina!",
    voceSabia: "O ponto de haste é o ponto predominante na célebre Tapeçaria de Bayeux do século XI (com mais de 70 metros de comprimento), que retrata a conquista normanda da Inglaterra!",
    practicalExercise: "Desenhe uma letra 'S' em caligrafia cursiva no seu software. Configure como Ponto de Haste (largura 1.5 mm, passo 3.0 mm). Borde em um retalho de tricoline e sinta a textura de corda torcida.",
    quickSummary: "Ponto decorativo de linha torcida com sobreposição parcial, ideal para caules florais, arabescos e contornos orgânicos vintage.",
    relatedTerms: ["Ponto Corrido", "Ponto Triplo (Bean Stitch)", "Ponto Satim", "Underlay"],
    tags: ["p-006", "ponto de haste", "stem stitch", "corda torcida", "bordado botânico", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Specialty Outline Stitches: Stem and Backstitch. Sydney, 2022.",
      "EMBROIDERY MAGAZINE. Historical Hand Stitches in Modern Machine Automation. London, 2020."
    ]
  },
  {
    id: "ponto-alinhavacao-basting",
    code: "P-007",
    letter: "P",
    term: "Ponto de Alinhavação / Ponto de Basting (Basting Stitch / Tack-down)",
    pronunciation: "pon-to de a-li-nha-va-ção",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Técnicas de Bastidor",
    summary: "Costura perimetral provisória com pontos longos e espaçados executada no início do bordado para prender firmemente o tecido à entretela ou segurar o filme plástico sem danificar a peça.",
    origin: "Do francês antigo 'bastir' (construir, costurar provisoriamente com pontos largos), técnica basilar da alfaiataria adaptada à fixação mecânica computadorizada.",
    definition: "O Ponto de Alinhavação (universalmente conhecido como Basting Stitch ou Ponto de Alinhave) é uma operação preliminar de segurança executada pela máquina de bordar antes de iniciar o design principal. Consiste em uma moldura retangular ou contorno geométrico feito com pontos retos longos (geralmente entre 4.0 mm e 7.0 mm de comprimento) e baixa tensão, posicionado próximo à borda do bastidor ou contornando a área do bordado. Sua finalidade técnica primordial é travar o tecido sobre a entretela (especialmente quando o tecido não foi preso diretamente no bastidor, técnica 'flutuante' ou 'hoopless') e fixar películas plásticas hidrossolúveis (topping) sobre toalhas e veludos, sendo facilmente desmanchado ao final com um puxão manual de linha.",
    howItWorks: [
      "1. Apenas a entretela é presa no bastidor e pulverizada com cola temporária (se aplicável).",
      "2. O tecido ou peça pronta é posicionada sobre a entretela flutuante e alinhada com os marcadores do bastidor.",
      "3. Se o tecido for felpudo, coloca-se uma folha de plástico solúvel (Solvy/topping) por cima.",
      "4. A máquina executa o Ponto de Alinhavação (Basting), costurando um retângulo ao redor de toda a área útil com passos largos de 5 mm a 6 mm.",
      "5. O tecido e o plástico ficam rigidamente travados contra a entretela durante as trocas de cor e vibrações.",
      "6. Concluído o bordado, corta-se um dos pontos e a linha de alinhave se solta inteira em um segundo sem deixar marcas."
    ],
    beginnerExplanation: "É uma costura com pontos bem grandões e frouxos que a máquina faz ao redor de tudo antes de começar o bordado de verdade. Serve para 'grampear' o tecido e o plastiquinho na entretela para nada sair do lugar. Depois que o bordado acaba, você puxa a linha e ela sai inteirinha!",
    applications: [
      "Fixação de peças grossas no bastidor (toalhas, jaquetas, moletons, jeans) sem marcar o tecido com o aro",
      "Travamento de tecidos delicados (seda, veludo, couro sintético) pelo método flutuante (hoopless)",
      "Fixação de folhas de plástico hidrossolúvel de topping sobre toalhas atoalhadas e mantas fleece",
      "Prevenção de deslocamento e enrugamento de tecidos finos e escorregadios durante a execução"
    ],
    technicalDetails: "O comprimento de passo deve ser configurado entre 4.5 mm e 7.0 mm. Passos menores que 3.0 mm tornam o desmanche difícil e podem repuxar fios do tecido ao serem removidos. A distância da margem de alinhave deve ser de 3 mm a 5 mm fora da área do bordado final para que os pontos de alinhavação não fiquem presos sob o desenho.",
    commonErrors: [
      "❌ Usar ponto de alinhavação muito curto (2 mm), tornando o desmanche um pesadelo e correndo o risco de rasgar o tecido ao puxar com a tesoura",
      "❌ Posicionar o alinhave muito colado ou por baixo das áreas de ponto satim, costurando a linha de alinhave para sempre dentro da matriz",
      "❌ Borda tecidos felpudos sem alinhave na película plástica, deixando o vento da agulha levantar o plástico e enrolar no calcador",
      "❌ Puxar a linha de alinhave com força bruta e tesoura de ponta grossa, puxando fios da trama da toalha"
    ],
    troubleshootingTips: [
      "Se a linha de alinhave for difícil de remover: Use uma linha de cor contrastante com a peça e com tensão superior bem frouxa para deslizar facilmente",
      "Se o tecido repuxar para dentro durante o alinhave: Reduza a velocidade de alinhavação e verifique se a entretela do bastidor está esticada como um tambor",
      "Se os pontos de alinhave prenderem no desenho: Aumente o offset do basting box no software para 5 mm de distância do design"
    ],
    dicaArtrelados: "Tenha uma função de Basting Box salva no pendrive da máquina em vários tamanhos padrão (10x10, 13x18, 16x26, 20x30). Antes de bordar qualquer toalha de banho ou peça flutuante, rode o alinhave primeiro. É a garantia de que nada vai sair da posição!",
    voceSabia: "A maioria das máquinas modernas domésticas e semi-industriais já possui um botão direto na tela touch chamado 'Basting' ou 'Alinhavar' que gera a moldura de alinhave automaticamente ao redor de qualquer matriz carregada!",
    practicalExercise: "Prenda apenas a entretela rasgável no bastidor. Coloque um pedaço de toalha atoalhada com filme solúvel por cima sem prender no aro. Execute a função de alinhave (basting) e observe como tudo fica perfeitamente preso sem marcar o aro na toalha.",
    quickSummary: "Moldura de costura provisória com pontos largos que trava o tecido e o filme solúvel à entretela antes de iniciar o bordado.",
    relatedTerms: ["Bordado Flutuante (Hoopless)", "Bastidor de Bordar", "Filme Hidrossolúvel (Topping)", "Adesivo Temporário Spray"],
    tags: ["p-007", "ponto de alinhavacao", "basting stitch", "tack down", "tecnica flutuante", "artrelados"],
    bibliographicReferences: [
      "SINGER & HUSQVARNA VIKING. Machine Embroidery Techniques: The Basting Frame Method. Huskvarna, 2020.",
      "EMBROIDERY GUILD OF AMERICA. Stabilizing Un-hoopable Garments. Louisville, 2021."
    ]
  },
  {
    id: "ponto-matiz-shading",
    code: "P-008",
    letter: "P",
    term: "Ponto Matiz / Efeito Matizado (Shading Stitch / Feather Stitch)",
    pronunciation: "pon-to ma-tiz",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Técnica avançada de digitalização artística com densidades variáveis e bordas recortadas em dentes de serra, permitindo misturar suavemente duas ou mais cores de linha para criar degradês realistas.",
    origin: "Do francês 'matiser' (mesclar cores gradualmente), técnica nobre da pintura com agulha (Needle Painting) originada na alta-costura francesa e no bordado de seda chinês de Suzhou.",
    definition: "O Ponto Matiz Computadorizado (conhecido como Shading Stitch, Feather Stitch, Gradient Fill ou Color Blending) é uma das técnicas mais sofisticadas e artísticas da programação de bordados. Consiste em dividir uma superfície colorida em camadas sobrepostas com densidades abertas e variáveis (gradientes de 0.8 mm a 2.0 mm) e bordas irregulares em dentes de serra (Random Edge / Feathering). Ao bordar a primeira cor com densidade decrescente e penetrações intercaladas, e em seguida sobrepor a segunda cor com densidade inversa penetrando nos intervalos da primeira, os filamentos de linha se entrelaçam opticamente na retina humana, criando uma transição tonal suave, tridimensional e realista (degradê) sem linhas duras de separação.",
    howItWorks: [
      "1. O digitalizador desenha as zonas de luz e sombra de uma pétala, rosto, pena de pássaro ou paisagem.",
      "2. Na primeira camada (Cor 1 - ex: Vermelho escuro), ativa-se o recurso de 'Borda Irregular' (Feather Edge) e 'Densidade Gradiente' (passando de 0.40 mm na base para 1.2 mm na ponta).",
      "3. A máquina borda a Cor 1 com comprimentos de ponto aleatórios para evitar uma linha de corte reta.",
      "4. Na segunda camada (Cor 2 - ex: Laranja), programa-se a direção oposta do gradiente (de 1.2 mm para 0.40 mm) com o mesmo ângulo de inclinação.",
      "5. A agulha da Cor 2 penetra diretamente nos espaços vagos deixados pela Cor 1.",
      "6. A fusão óptica das linhas produz uma transição contínua e natural de cores (Pintura com Agulha).",
      "7. Podem ser combinadas 3, 4 ou mais cores em camadas sucessivas."
    ],
    beginnerExplanation: "É o efeito degradê no bordado! A máquina mistura duas ou mais cores de linha (como o vermelho virando laranja e depois amarelo numa pétala de rosa) usando pontinhos compridos e curtos misturados, parecendo uma pintura feita com pincel e tinta.",
    applications: [
      "Pétalas de flores, folhagens, frutas e elementos botânicos realistas",
      "Pelagem e penas de animais em bordados de animais selvagens e pets realistas",
      "Retratos humanos, tons de pele, rostos e transições de luz e sombra em arte sacra",
      "Bandeiras onduladas, chamas de fogo e paisagens com pôr do sol"
    ],
    technicalDetails: "Para um matizado perfeito, as duas camadas de cores adjacentes DEVEM compartilhar rigorosamente o mesmo ângulo de inclinação (Stitch Angle) ou ter no máximo 5° a 10° de variação. A densidade combinada da sobreposição nunca deve ultrapassar 0.35 mm para não empelotar o bordado nem quebrar agulhas. Deve-se usar agulha fina (calibre 65/9 ou 70/10) e linhas de poliéster 40wt ou 60wt.",
    commonErrors: [
      "❌ Sobrepor duas camadas com densidade normal fechada (0.40 mm cada), criando um bloco duro com mais de 0.20 mm de densidade que quebra a agulha",
      "❌ Usar ângulos de ponto perpendiculares entre as duas cores matizadas, gerando um efeito xadrez feio em vez de degradê",
      "❌ Criar bordas retas entre as cores sem aplicar o dente de serra aleatório (Feathering), deixando uma emenda dura e visível",
      "❌ Não usar compensação de encolhimento adequada nas áreas de gradiente, deixando vãos com o tecido aparecendo"
    ],
    troubleshootingTips: [
      "Se as cores parecerem separadas por uma linha dura: Aumente a profundidade da borda irregular (Feathering Depth) para 3 mm a 5 mm",
      "Se a área matizada ficar dura como uma placa de papelão: Abra a densidade das camadas de 0.40 mm para 0.75 mm em cada cor",
      "Se a linha superior quebrar frequentemente na área de transição: Reduza a velocidade para 550 PPM e utilize uma agulha com ponta fina e olho polido"
    ],
    dicaArtrelados: "Para aprender a arte do matizado, comece praticando com apenas 3 tons da mesma família de cor (ex: Azul Marinho, Azul Royal e Azul Céu). Mantenha o mesmo ângulo em todas as camadas e use densidade progressiva de 30% a 70%!",
    voceSabia: "Na China imperial, o bordado de seda de Suzhou com ponto matizado utilizava fios de seda divididos manualmente em até 1/48 avos da espessura de um fio de cabelo humano para criar olhos de gato e peixes dourados com realismo fotográfico!",
    practicalExercise: "Digitalize uma folha de 60 mm x 30 mm dividida em duas metades com degradê: a metade superior em Verde Escuro (gradiente 0.4 mm a 1.0 mm) e a metade inferior em Verde Claro (gradiente 1.0 mm a 0.4 mm). Borde e observe o efeito degradê perfeito.",
    quickSummary: "Técnica avançada de mistura de cores com densidades abertas e bordas desiguais para criar transições e degradês realistas.",
    relatedTerms: ["Ponto Tatami", "Ponto Satim", "Densidade Gradiente", "Pintura com Agulha (Needle Painting)"],
    tags: ["p-008", "ponto matiz", "shading stitch", "feather stitch", "degrade", "pintura com agulha", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Color Blending & Feather Stitch Techniques. Sydney, 2022.",
      "CHAMBERLAIN, M. Needle Painting Embroidery: Fresh Ideas for Beginners. London: Search Press, 2021."
    ]
  }
];

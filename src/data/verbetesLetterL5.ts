import { Verbete } from "../types";

export const VERBETES_LETTER_L_PART5: Verbete[] = [
  {
    id: "l-025-length-comprimento-de-ponto-running-tatami-length",
    code: "L-025",
    term: "Length / Comprimento de Ponto (Stitch Length in Running & Fill Stitches)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino / Do inglês 'Stitch Length' (comprimento/passo do ponto).",
    origin: "Parâmetro geométrico primordial de controle numérico de bordado, definido pela distância vetorial linear percorrida pelo pantógrafo entre duas penetrações sucessivas da agulha no tecido.",
    summary: "Distância milimétrica entre duas perfurações consecutivas da agulha, determinante para a flexibilidade do tecido, cobertura e velocidade da máquina.",
    definition: "O Comprimento de Ponto (Stitch Length / Passo do Ponto) é a medida linear em milímetros da distância entre uma descida de agulha e a descida imediatamente seguinte. No ponto corrido (Running Stitch), o comprimento varia tipicamente de 2,0 mm a 3,5 mm; no ponto de preenchimento tatami, o comprimento padrão dos traços individuais é de 3,5 mm a 4,5 mm. Pontos muito curtos (menores que 1,2 mm) perfuram o tecido repetidamente no mesmo ponto, provocando buracos, cortes no tecido e quebra de agulhas; pontos excessivamente longos (maiores que 8,0 mm a 10,0 mm) ficam frouxos sobre a superfície, sujeitos a enroscar e repuxar durante o uso da peça.",
    technicalDetails: "Valores padronizados e limites de comprimento de ponto:\n• Ponto Corrido Simples (Running Stitch): 2,2 mm a 2,8 mm (comprimento ideal para contornos e sob-pontos);\n• Ponto Corrido Curvo (Curve Filtering): Redução automática do comprimento para 1,2 mm a 1,8 mm nas curvas acentuadas para manter o contorno perfeitamente suave e sem cantos facetados;\n• Preenchimento Tatami (Tatami Pitch Length): 3,8 mm a 4,5 mm para flexibilidade equilibrada e brilho uniforme;\n• Ponto de Amarração (Tie-In/Tie-Off): 0,6 mm a 0,8 mm;\n• Limite Mínimo de Segurança (Short Stitch Filter): 0,4 mm a 0,5 mm (todos os pontos menores que isso são eliminados pelo processador da máquina);\n• Limite Máximo para Salto Automático (Jump Trigger): 7,0 mm a 12,0 mm (acima desse valor, a máquina converte o ponto em um salto sem penetração de agulha).",
    howItWorks: [
      "1. O programador define o valor de comprimento de ponto no software de digitalização.",
      "2. Ao gerar a trilha de pontos, o software divide as curvas e linhas retas em segmentos com o comprimento configurado.",
      "3. A máquina recebe os códigos cartesianos (ΔX, ΔY) e move o pantógrafo na distância exata a cada batida de agulha.",
      "4. Em retas longas, o pantógrafo move-se com passos maiores e mais rápidos.",
      "5. Em curvas fechadas, o comprimento encurta automaticamente para não perder a precisão do desenho.",
      "6. A peça bordada adquire caimento flexível, sem criar rigidez excessiva nem laçadas soltas."
    ],
    beginnerExplanation: "O comprimento de ponto é o 'tamanho do passo' que a máquina dá entre uma furada e outra no pano! Se o passo for muito pequenininho (parecendo formiguinha), a agulha fura o pano tantas vezes no mesmo lugar que pode rasgar o tecido e quebrar a linha. Se o passo for grande demais, a linha fica frouxa parecendo um varal e pode engatar nas coisas. O segredo é usar um comprimento médio (cerca de 2,5 a 4 milímetros) para o bordado ficar lindo, firme e macio!",
    applications: [
      "Calibração de sob-pontos e contornos finos em matrizes de alta precisão",
      "Ajuste de flexibilidade em bordados sobre tecidos finos e fluidos (viscose e seda)",
      "Programação de pontos de pesponto e alinhavo temporário (K-Basting)",
      "Desenho de arabescos e motivos botânicos com curvas sinuosas nítidas"
    ],
    commonErrors: [
      "Deixar pontos menores que 0,3 mm na matriz (corta o tecido como uma lâmina de serra e quebra a linha)",
      "Usar pontos corridos de 6 mm em roupas de bebê (os pezinhos e mãozinhas da criança enroscam nas linhas compridas)",
      "Não ativar a redução de comprimento em curvas, deixando círculos que parecem octógonos cheios de cantos retos"
    ],
    troubleshootingTips: [
      "Ative sempre o 'Filtro de Pontos Curtos' (Short Stitch Filter) no seu software configurado para 0,4 mm",
      "Em curvas fechadas, reduza o comprimento de ponto para 1,5 mm para que o contorno fique redondo e perfeito",
      "Para tecidos elásticos, use comprimentos de ponto ligeiramente maiores (2,5 mm a 3,0 mm) para permitir que o tecido estique sem estourar as linhas"
    ],
    dicaArtrelados: "Se você estiver bordando uma linha reta de contorno e ela estiver repuxando o pano: aumente o comprimento do ponto de 2,0 mm para 2,8 mm! Com menos perfurações no tecido, a tração diminui pela metade e o pano fica retinho e sem rugas!",
    voceSabia: "Nas primeiras matrizes de fita perfurada dos anos 1970, o comprimento de ponto máximo que o motor de passo conseguia movimentar em um único ciclo mecânico sem desacelerar era de exatamente 12,7 mm (meia polegada)!",
    practicalExercise: "Borde duas linhas retas no mesmo tecido: uma com comprimento de ponto de 1,5 mm e outra com 3,5 mm: passe o dedo sobre ambas e sinta a diferença de maciez e flexibilidade no tecido!",
    quickSummary: "Distância linear milimétrica entre penetrações sucessivas da agulha, determinante para textura, flexibilidade e integridade do tecido.",
    relatedTerms: ["Ponto Corrido", "Ponto Tatami", "Short Stitch Filter", "Densidade de Ponto"],
    tags: ["l-025", "comprimento de ponto", "stitch length", "length", "ponto corrido", "passo do ponto", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Stitch Length Dynamics and Vector Path Subdivision Standards. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Parâmetros Críticos da Digitalização: Densidade, Comprimento de Ponto e Filtros de Segurança. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-026-lantejoula-dispositivo-aplicacao-sequin-device-twin-feed",
    code: "L-026",
    term: "Lantejoula / Dispositivo Eletrônico de Aplicação de Lantejoulas (Sequin Device / Twin Sequin Feed)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Do árabe 'Sikka' (moeda cunhada) / Mecatrônica têxtil.",
    origin: "Dispositivo motorizado com controle CNC pneumático e servomotor de passo integrado aos cabeçotes industriais (desenvolvido pela Tajima, Barudan e SWF) nos anos 2000 para dispensar, cortar e costurar lantejoulas e paetês de forma automatizada a até 1.000 peças por minuto.",
    summary: "Acessório eletrônico motorizado acoplado ao cabeçote de bordado que alimenta rolos de lantejoulas contínuas, corta cada unidade e a fixa no tecido com pontos programados.",
    definition: "O Dispositivo de Lantejoulas (Sequin Device / Twin Sequin & Reversible Pailette Attachment) é um módulo eletromecânico de alta precisão instalado ao lado da barra de agulhas da máquina de bordar industrial. Ele recebe rolos de fita de lantejoulas plásticas pré-furadas (de 2 mm a 9 mm de diâmetro, planas, côncavas ou reversíveis / lantejoulas mágicas). Um micro-servomotor avança a fita milimetricamente, uma guilhotina microscópica corta a lantejoula individual e a agulha da máquina desce com a linha superior através do furo central da lantejoula, fixando-a com uma costura em estrela (Star Stitch), ponto em 'Y' ou ponto cruzado antes de avançar para a seguinte.",
    technicalDetails: "Engenharia e recursos do dispositivo de lantejoulas:\n• Tamanhos Suportados: Lantejoulas circulares, estreladas ou ovais de 2 mm a 9 mm de diâmetro;\n• Dispositivo Duplo (Twin Sequin): Dois alimentadores independentes no mesmo cabeçote, permitindo misturar lantejoulas de cores ou tamanhos diferentes no mesmo motivo;\n• Velocidade Operacional: 700 a 1.000 lantejoulas costuradas por minuto com total estabilidade mecânica;\n• Tipos de Fixação de Ponto: Ponto de 3 pontas (Y-Stitch), Ponto de 4 pontas (Cruz), Ponto de Borda (Overlap Sequin) ou Ponto Reversível para lantejoulas mágicas bicolor;\n• Lâmina de Corte: Aço tungstênio de alta dureza com vida útil superior a 20 milhões de cortes;\n• Sensor de Fim de Rolo: Sensor óptico que interrompe a máquina imediatamente se o rolo de lantejoulas terminar.",
    howItWorks: [
      "1. O operador carrega os rolos de fitas de lantejoulas nos suportes giratórios superiores da máquina.",
      "2. A fita é conduzida através das guias de precisão até a lâmina do cabeçote.",
      "3. O software comanda o disparo: o servomotor avança a fita em exatamente 1 passo (ex: 5 mm).",
      "4. A guilhotina corta a ponte plástica entre a lantejoula e a fita.",
      "5. A sapata abaixa e posiciona a lantejoula sobre a coordenada do tecido.",
      "6. A agulha desce através do orifício central da lantejoula e executa os pontos de fixação.",
      "7. O pantógrafo se desloca e o ciclo se repete até 1.000 vezes por minuto, criando desenhos brilhantes e reluzentes."
    ],
    beginnerExplanation: "O aplicador de lantejoulas é aquele acessório incrível que parece um robô instalado na máquina de bordar que prega paetês e lantejoulas sozinho! Em vez de alguém ficar costurando lantejoula por lantejoula na mão com agulha, a máquina puxa uma fita cheia de lantejoulas, corta uma pecinha na hora e já prega no pano com a linha num piscar de olhos! É com isso que se fazem aquelas almofadas e camisetas famosas de 'lantejoula mágica' que você passa a mão e ela muda de cor!",
    applications: [
      "Vestuário infantil com lantejoulas mágicas reversíveis que mudam de cor ao toque",
      "Vestidos de festa luxo, moda noiva, figurinos de dança e Carnaval",
      "Logotipos brilhantes em camisetas de moda feminina e moda jovem",
      "Almofadas decorativas e acessórios reluzentes de alto impacto visual"
    ],
    commonErrors: [
      "Usar rolos de lantejoulas de baixa qualidade com furos fora de centro (a agulha bate no plástico duro e quebra)",
      "Programar a matriz com sobreposição incorreta de lantejoulas, fazendo uma subir em cima da outra de forma torta",
      "Deixar poeira e pedaços de plástico cortado acumularem dentro da guilhotina móvel"
    ],
    troubleshootingTips: [
      "Mantenha a lâmina de corte de lantejoulas limpa e lubrificada com microgotas de óleo fino a cada semana",
      "Utilize agulha ponta aguda ou bola fina calibre 75/11 resistente a impacto",
      "Use linha de poliéster 100% resistente e transparente (fio de monofilamento) ou linha da mesma cor da lantejoula para fixações discretas"
    ],
    dicaArtrelados: "Para fazer lantejoulas reversíveis (aquelas que viram e mudam de cor quando você passa a mão): configure o ponto de fixação no software para o tipo 'Ponto de Borda Simples' (Overlap Top Stitch). Se você pregar com ponto em cruz pelo meio, a lantejoula trava e não vira!",
    voceSabia: "As primeiras lantejoulas da história foram encontradas costuradas nas vestes de ouro do faraó Tutancâmon em 1323 a.C., feitas de minúsculos discos de ouro puro martelados à mão para proteger o faraó de maus espíritos!",
    practicalExercise: "Observe um bordado com lantejoulas reversíveis: passe a mão para cima e para baixo e repare como cada lantejoula foi costurada exatamente na mesma bordinha para poder girar livremente 180 graus!",
    quickSummary: "Dispositivo robótico de cabeçote que alimenta, corta e costura lantejoulas e paetês no bastidor a até 1.000 unidades por minuto.",
    relatedTerms: ["Lantejoula Reversível", "Twin Sequin", "Moda Festa", "Ponto em Y"],
    tags: ["l-026", "lantejoula", "sequin device", "paete", "twin sequin", "moda festa", "automacao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Sequin Device Operating Manual and Digitizing Patterns. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Brilho Automatizado: Aplicação de Lantejoulas, Paetês e Efeitos Reversíveis no Bordado Industrial. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-027-lese-laise-broderie-anglaise-schiffli-eyelet-lace",
    code: "L-027",
    term: "Lese / Laise / Broderie Anglaise (Schiffli Eyelet Lace Fabric)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino / Do francês 'Laise' (tecido rendado furadinho) e 'Broderie Anglaise'.",
    origin: "Técnica tradicional de bordado vazado em tecido de algodão branco originada na Inglaterra e França no século XIX, posteriormente industrializada em larga escala nas gigantescas máquinas de tear Schiffli da Suíça.",
    summary: "Tecido leve de algodão caracterizado por vazados circulares ou florais delicados cercados por costuras e cordones de acabamento.",
    definition: "O Laise (ou Lese / Broderie Anglaise / Tecido Furadinho) é um tecido plano leve, geralmente 100% algodão ou cambraia mista, enriquecido por padrões geométricos ou florais de orifícios perfurados (ilhós vazados) cercados por cordones cheios e bordados em relevo. No bordado computadorizado moderno, o Laise pode ser utilizado como tecido base nobre para monogramas e aplicações, ou pode ser produzido do zero no bastidor através de técnicas de perfuração mecânica (com faquinhas de recorte / Boring Tool / Agulha Lanceta) combinadas com preenchimento em ponto cheio e rendas solúveis.",
    technicalDetails: "Propriedades e estabilização de tecidos Laise:\n• Composição: 100% Algodão leve, Cambraia de linho ou Voil bordado;\n• Densidade de Vazados: Superfície com dezenas de orifícios abertos que diminuem a estabilidade mecânica do tecido;\n• Estabilização Obrigatória: Entretela rasgável de boa densidade (50 a 60 g/m²) ou entretela hidrossolúvel de base para evitar que os novos pontos afundem nos furos pré-existentes;\n• Agulha Indicada: Agulha universal para bordado calibre 70/10 ou 75/11 com ponta fina (SES);\n• Posicionamento de Monogramas: Deve-se planejar a matriz para que os pontos principais caiam sobre as partes sólidas do tecido, evitando os orifícios abertos.",
    howItWorks: [
      "1. O tecido Laise é passado e posicionado sobre entretela firme no bastidor.",
      "2. Se o Laise for muito fino ou furadinho, aplica-se uma camada de filme plástico hidrossolúvel no topo.",
      "3. A máquina borda o monograma ou motivo floral em velocidade moderada (600 PPM).",
      "4. Os sob-pontos de sustentação criam uma ponte estável sobre os vazados do tecido.",
      "5. Os pontos cheios assentam-se com nitidez sobre a textura rendada.",
      "6. A peça é lavada para dissolver o plástico solúvel do topo.",
      "7. O resultado é uma peça romântica, delicada e de estética artesanal vintage."
    ],
    beginnerExplanation: "O Laise (ou Lese) é aquele tecido de algodão todo furadinho e cheio de buraquinhos redondos bordados, muito usado em vestidinhos brancos de verão, batinhas românticas e toalhas de batizado! Como ele já é cheio de furinhos, quando você for bordar um nome em cima dele, basta colocar um plástico solúvel por cima e uma entretela firme por baixo para a agulha não engatar nos buracos do tecido. O bordado fica delicado e com cara de roupa de princesa!",
    applications: [
      "Vestidos infantis, batinhas de bebê, roupas de batizado e primeira comunhão",
      "Blusas femininas de verão, saídas de praia românticas e camisolas de algodão",
      "Enxovais clássicos de berço, almofadas vintage e barrados de toalhas",
      "Produção de rendas inglesas personalizadas no bastidor com agulha furadora (Borer)"
    ],
    commonErrors: [
      "Bordar sem plástico solúvel no topo (os pontos caem dentro dos furos do Laise e somem)",
      "Puxar o tecido torto no aro do bastidor, esticando e deformando os círculos dos buraquinhos",
      "Digitalizar fontes minúsculas com pontos finos que coincidem com os vazados do tecido"
    ],
    troubleshootingTips: [
      "Use sempre fontes com colunas de satim mais largas (pelo menos 2,5 mm) para cobrir eventuais furinhos do tecido com facilidade",
      "Empregue entretela hidrossolúvel para que o verso fique tão delicado e limpo quanto o direito",
      "Passe o tecido pelo avesso com ferro a vapor para não amassar o relevo dos pontos bordados originais do Laise"
    ],
    dicaArtrelados: "Para criar barrados de Laise personalizados no bastidor: use uma entretela solúvel dupla, faça círculos de 3 mm com ponto cheio em volta e use a agulha de corte (Borer). Você cria seu próprio tecido Laise exclusivo direto na máquina!",
    voceSabia: "Na Inglaterra vitoriana do século XIX, a 'Broderie Anglaise' era tão cobiçada pela nobreza que as damas da corte competiam para ver quem usava vestidos com o maior número de furinhos bordados por centímetro quadrado!",
    practicalExercise: "Pegue um pedaço de tecido Laise, coloque plástico hidrossolúvel no topo e borde um monograma clássico: veja como o bordado flutua perfeitamente sobre os furinhos do tecido com nitidez absoluta!",
    quickSummary: "Tecido leve de algodão furadinho com acabamento rendado romântico, ideal para moda verão, batizados e enxovais vintage.",
    relatedTerms: ["Boring Tool", "Free Standing Lace", "Cambraia de Linho", "Plástico Hidrossolúvel"],
    tags: ["l-027", "lese", "laise", "broderie anglaise", "furadinho", "algodao", "romantico", "artrelados"],
    bibliographicReferences: [
      "TEXTILE HISTORY SOCIETY. Broderie Anglaise and the Swiss Schiffli Lace Industry. Zurich: THS, 2021.",
      "ARTRELADOS. Tecidos Rendados, Laise e Broderie Anglaise: Técnicas de Perfuração e Bordado sobre Vazados. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-028-lastex-linha-elastica-franzidos-smocking-no-bastidor",
    code: "L-028",
    term: "Lastex / Linha Elástica para Franzidos e Smocking no Bastidor (Shirring Elastic Thread)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino / Marca registrada da Lastex Yarn Co. / Fios elastoméricos.",
    origin: "Desenvolvido nos anos 1930 combinando filamentos de borracha natural vulcanizada ou elastano revestidos por poliéster, adaptado criativamente no bordado computadorizado para criar efeitos franzidos tridimensionais (Smocking) direto no bastidor.",
    summary: "Fio elástico de borracha utilizado na canelinha inferior para produzir franzidos automáticos, babados e efeito 'Ponto Colmeia / Casinha de Abelha' no tecido.",
    definition: "O Lastex (Linha Elástica de Bobina / Shirring & Smocking Thread) é um fio flexível composto por uma alma elástica de borracha ou elastano (Spandex) recoberta por uma espiral de filamentos de poliéster ou poliamida. No bordado computadorizado, o Lastex é enrolado manualmente na canelinha inferior com leve tração, enquanto a agulha superior utiliza linha comum de poliéster. Quando a máquina borda linhas retas paralelas ou padrões geométricos em zigue-zague sobre tecidos leves (como viscose, crepe ou cambraia), a tensão elástica do Lastex puxa e contrai o tecido, gerando franzidos perfeitos e elásticos (efeito casinha de abelha / Smocking) com altíssima uniformidade.",
    technicalDetails: "Propriedades e parametrização para bordar com Lastex:\n• Enrolamento da Canelinha: DEVE ser enrolado manualmente na canelinha com tração moderada e constante (nunca no enchedor automático da máquina);\n• Ajuste da Caixa de Bobina: Alívio quase total do parafuso da mola tensora da caixa de bobina para permitir a passagem livre do fio grosso de borracha (ou uso de uma caixa de bobina reserva dedicada);\n• Linha Superior: Linha comum de poliéster ou viscose 40wt com tensão superior ligeiramente aumentada para puxar o elástico;\n• Tecidos Ideais: Tecidos planos leves e fluidos (Viscose, Seda, Chiffon, Cambraia de Algodão, Voil);\n• Ativação Térmica: O franzido atinge sua contração máxima após passar um ferro a vapor sem encostar na peça (o calor do vapor retrai o elástico instantaneamente em até 40%).",
    howItWorks: [
      "1. A bordadeira enrola o Lastex manualmente na canelinha com uma leve puxadinha de tensão.",
      "2. Encaixa a canelinha na caixa de bobina ajustada para passagem suave.",
      "3. Passa linha colorida comum na agulha superior.",
      "4. Monta o tecido plano no bastidor sem esticar.",
      "5. A máquina borda linhas paralelas com ponto corrido ou padrões em zigue-zague.",
      "6. Ao retirar a peça do bastidor, o tecido contrai-se em franzidos uniformes e elásticos.",
      "7. Borrifa-se vapor de ferro bem quente a 2 cm de distância: o Lastex encolhe e os franzidos ganham textura de favo de mel elástica e impecável."
    ],
    beginnerExplanation: "O Lastex é aquela linha de elástico fininha que a gente usa para fazer franzidos e babadinhos elásticos em vestidos de verão e blusas ciganinhas! Em vez de usar na agulha, você enrola o Lastex na canelinha com a mão. A máquina borda por cima e, quando você tira o pano do bastidor, o tecido se junta todinho formando aquele franzido elástico maravilhoso que estica no corpo! Se você jogar um vaporzinho de ferro por cima, ele encolhe e fica ainda mais fofinho!",
    applications: [
      "Bordados com efeito 'Casinha de Abelha' (Smocking) em vestidos infantis clássicos",
      "Franzidos elásticos no busto e mangas de vestidos ciganinha e blusas de verão",
      "Detalhes tridimensionais texturizados em almofadas decorativas e colchas",
      "Punhos elásticos decorados e golas franzidas em alta-costura"
    ],
    commonErrors: [
      "Enrolar o Lastex no enchedor elétrico da máquina (estica demais o elástico e quebra o carretel)",
      "Passar o ferro quente encostando direto no Lastex (a borracha interna queima, derrete e perde toda a elasticidade)",
      "Tentar usar Lastex em tecidos pesados e duros como jeans ou lona (o elástico não tem força para franzir tecidos grossos)"
    ],
    troubleshootingTips: [
      "Tenha uma caixa de bobina reserva separada só para Lastex, com o parafuso afrouxado, para não desregular sua caixa de bobina principal de bordado",
      "Use comprimento de ponto longo (3,5 mm a 4,5 mm) na matriz para que o tecido tenha espaço para franzir livremente",
      "Ao terminar o bordado, dê um nozinho manual nas pontas do Lastex no avesso para que o franzido não se solte nas pontas"
    ],
    dicaArtrelados: "Para ativar o franzido máximo do Lastex: nunca encoste a base de metal do ferro na peça! Apenas segure o ferro a vapor a cerca de 3 dedos de distância e solte jatos fortes de vapor. O tecido vai encolher diante dos seus olhos formando favos de mel perfeitos!",
    voceSabia: "O ponto Smocking (casinha de abelha) foi criado por camponeses ingleses no século XVIII para que suas camisas de trabalho tivessem elasticidade natural para arar o campo muito antes de a borracha ou o elastano existirem!",
    practicalExercise: "Enrole Lastex em uma canelinha, passe linha comum em cima e borde 4 linhas retas paralelas espaçadas por 1 cm em um retalho de viscose: solte o vapor do ferro e veja o tecido se transformar em um franzido elástico perfeito!",
    quickSummary: "Fio elástico de bobina que produz franzidos elásticos automáticos e efeito casinha de abelha (Smocking) no bastidor.",
    relatedTerms: ["Smocking", "Caixa de Bobina", "Ponto Corrido", "Ativação a Vapor"],
    tags: ["l-028", "lastex", "linha elastica", "franzido", "smocking", "casinha de abelha", "babados", "artrelados"],
    bibliographicReferences: [
      "SINGER SEWING COMPANY. Machine Shirring, Smocking and Elastic Bobbin Techniques. Nashville: Singer, 2021.",
      "ARTRELADOS. Efeitos Especiais de Textura: Lastex, Smocking Digital e Franzidos Estruturados no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-029-lenceria-acabamento-bainha-aberta-ponto-paris-wing-needle",
    code: "L-029",
    term: "Lenceria / Acabamento de Bainha Aberta e Ponto Paris (Hemstitching & Wing Needle Embroidery)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo feminino / Do espanhol 'Lencería' (roupa branca/lingerie/enxoval fino).",
    origin: "Técnica secular de bordado vazado em bainhas de linho e cambraia (Hemstitching / Ajour / Ponto Paris), reproduzida eletronicamente no bastidor com o auxílio de agulhas com asas laterais alargadas (Wing Needles / Agulhas Asa).",
    summary: "Técnica refinada de bordado que afasta as fibras do tecido para criar orifícios decorativos e rendilhados rendados geométricos em barras de lençóis e toalhas finas.",
    definition: "A técnica de Lenceria (Bainha Aberta / Ponto Paris / Hemstitching / Ajourado no Bastidor) é um método tradicional de bordado vazado em que a agulha não apenas deposita linha, mas atua mecanicamente para abrir e espaçar os fios da trama do tecido sem cortá-los. Utilizando uma agulha especial com aletas laterais largas (Agulha Asa / Wing Needle calibre 100/16 ou 120/19), a lâmina afasta os fios de urdume e trama a cada penetração, enquanto a linha de bordar superior (de preferência algodão fino 50wt ou viscose) envolve esses pequenos feixes de fibras com pontos decorativos de amarração (como o Ponto Paris ou Ponto Veneziano), criando uma fileira contínua de orifícios quadrados translúcidos de extrema elegância.",
    technicalDetails: "Propriedades e parametrização do Hemstitching no bastidor:\n• Agulha Obrigatória: Agulha Asa (Wing Needle / Agulha Lanceta) com expansões laterais que atuam como cunhas;\n• Tecidos Compatíveis: Tecidos de fibras naturais com trama visível e desfiável (100% Linho, Cambraia de Algodão, Percal 200 a 400 fios, Batista);\n• Tecidos Incompatíveis: Malhas, microfibras e sintéticos (não abrem furos estáveis);\n• Estabilização Estratégica: Entretela 100% hidrossolúvel (Water-Soluble Stabilizer) para que, após a lavagem, os furos fiquem completamente ocos e translúcidos;\n• Geometria de Pontos: Ponto Paris (Ponto em 'E' ou zigue-zague aberto) com avanço preciso e múltiplas penetrações no mesmo orifício para fixar a abertura.",
    howItWorks: [
      "1. A bordadeira instala a Agulha Asa (Wing Needle) na barra de agulhas da máquina.",
      "2. Estabiliza o tecido de linho no bastidor usando exclusivamente entretela hidrossolúvel no verso.",
      "3. Carrega a matriz de bainha aberta com pontos de Ponto Paris ou Ajour.",
      "4. A máquina borda em velocidade lenta (400 a 500 PPM): as asas da agulha entram no tecido e empurram as fibras laterais abrindo um furo limpo.",
      "5. A linha de algodão envolve as fibras adjacentes, amarrando-as firmemente para que o furo não se feche.",
      "6. A peça é lavada em água limpa para dissolver a entretela.",
      "7. Ao secar e passar com ferro e vapor, a barra exibe uma galeria clássica de vazados rendados de altíssimo valor de alta-costura."
    ],
    beginnerExplanation: "A técnica de lenceria (ponto Paris / bainha aberta) é aquele acabamento maravilhoso que a gente vê na barra de lençóis de noiva e toalhas de banquete de linho fino, cheia de furinhos quadrados perfeitamente amarrados parecendo uma rendinha feita à mão! Para fazer isso na máquina, a gente usa uma agulha especial chamada 'Agulha Asa' que tem duas asinhas de avião dos lados. Conforme a agulha desce, as asinhas abrem espaço entre os fios do tecido e a linha amarra as pontinhas para o furinho ficar aberto para sempre!",
    applications: [
      "Barras de lençóis finos, fronhas e enxovais de noiva e batizado",
      "Toalhas de mesa de banquete, jogos americanos e guardanapos de puro linho",
      "Acabamentos em camisas sociais masculinas de gala e blusas vitorianas",
      "Cortinas clássicas e peças de decoração de alto padrão"
    ],
    commonErrors: [
      "Tentar fazer Hemstitching em malhas de algodão ou tecidos de poliéster elástico (os furos não abrem e o tecido repuxa)",
      "Usar entretela rasgável comum (a entretela fica presa dentro dos buraquinhos e estraga o visual vazado)",
      "Bordar em velocidade alta (1.000 PPM), entortando a agulha asa e quebrando peças internas da máquina"
    ],
    troubleshootingTips: [
      "Use sempre entretela 100% solúvel em água por baixo para que os orifícios fiquem perfeitamente ocos e translúcidos",
      "Borde em velocidade reduzida (400 a 500 PPM) para dar tempo de as asas da agulha moldarem as fibras com suavidade",
      "Passe o tecido de linho com bastante vapor antes e depois do bordado para assentar as fibras ao redor dos vazados"
    ],
    dicaArtrelados: "Para fazer bainhas abertas perfeitas: use linha de algodão egípcio nº 50 no mesmo tom exato do linho. A linha fosca se funde com a cor do tecido e parece que os furinhos foram desfiados e amarrados fio por fio à mão por uma rendeira tradicional!",
    voceSabia: "As agulhas asa foram criadas na Suíça no final do século XIX para equipar as oficinas das bordadeiras dos conventos da Basiléia, que confeccionavam os paramentos litúrgicos do Vaticano!",
    practicalExercise: "Instale uma agulha asa na sua máquina, coloque linho com entretela solúvel no bastidor e selecione um ponto de bainha aberta (Ponto Paris): lave com água, passe a ferro e encante-se com o rendilhado aberto!",
    quickSummary: "Técnica de bainha aberta com agulha asa e entretela solúvel que cria orifícios rendados e vazados clássicos em tecidos nobres.",
    relatedTerms: ["Agulha Asa (Wing Needle)", "Ponto Paris", "Ajour", "Linho Puro", "Entretela Solúvel"],
    tags: ["l-029", "lenceria", "hemstitching", "ponto paris", "agulha asa", "wing needle", "ajour", "enxoval", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. Wing Needle and Hemstitching Applications in Heirloom Embroidery. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. A Nobreza dos Vazados: Ponto Paris, Agulhas Asa, Ajour e Bainhas Abertas no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-030-lurex-fita-fio-metalizado-alta-refletancia-glamour",
    code: "L-030",
    term: "Lurex / Fita e Fio Metalizado de Alta Refletância (Lurex Metallic Film & Yarn)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino / Marca registrada da The Lurex Co. / Metalização a vácuo.",
    origin: "Criado em 1946 pela The Lurex Company nos Estados Unidos, revolucionando a história da moda ao substituir fios pesados de metal fundido por fitas de poliéster metalizado com alumínio microscópico sob vácuo.",
    summary: "Termo consagrado para fitas e fios têxteis metalizados de altíssimo brilho reflexivo dourado, prateado ou multicolorido usados em bordados de gala e festa.",
    definition: "O Lurex (Fio Lurex / Fita de Poliéster Metalizada) é a designação mundialmente consagrada para os fios sintéticos compostos por uma fita ultrafina de poliéster revestida com uma camada atômica de alumínio vaporizado e selada com resinas transparentes ou pigmentadas. No universo do bordado e da confecção, o Lurex é utilizado tanto na forma de linhas de bordar metálicas quanto como tecido de suporte e fios de trançado para cordões soutache e passamanarias. Oferece brilho reflexivo cintilante incomparável, leveza e alta durabilidade sem oxidar nem escurecer como os antigos metais nobres.",
    technicalDetails: "Propriedades físicas e químicas do Lurex:\n• Espessura do Filme: Fitas de poliéster cortadas com largura de 0,2 mm a 0,5 mm e espessura de 12 a 25 microns;\n• Resistência à Oxidação: O filme de alumínio é encapsulado por resina de poliéster, impedindo a ferrugem ou o escurecimento por contato com suor ou ar;\n• Brilhos e Efeitos: Ouro pálido, Ouro antigo, Prata pura, Cobre, Bronze, Holográfico (Furacor) e Tons Neon;\n• Elasticidade: Baixíssima elasticidade longitudinal, exigindo tensores livres de atrito e passagens retilíneas;\n• Temperatura Máxima de Ferro: 130°C (sempre passar com tecido de proteção por cima);\n• Agulha Indicada: Agulha Metallic ou Topstitch calibre 80/12 ou 90/14.",
    howItWorks: [
      "1. A fita de Lurex enrolada no cone é protegida por uma redinha elástica para evitar o desenrolamento descontrolado.",
      "2. O fio passa pelos tensores da máquina com tração aliviada.",
      "3. A agulha com olho especial conduz o fio através do tecido.",
      "4. A camada de alumínio reflete os raios de luz do ambiente com alto índice de refração.",
      "5. Os pontos formam superfícies cintilantes de brilho glamoroso.",
      "6. A peça finalizada ganha status de luxo e sofisticação visual imediata."
    ],
    beginnerExplanation: "O Lurex é o nome mais famoso do mundo para aquele fio brilhante de ouro, prata e furacor que todo mundo ama em roupas de festa e Carnaval! Ele é feito de um plástico bem fininho coberto com uma camada de brilho de metal que nunca fica preto nem enferruja. Quando você borda com Lurex, o desenho fica parecendo uma joia de verdade cheia de glamour e brilho!",
    applications: [
      "Bordados em vestidos de gala, trajes de festa e moda noiva",
      "Emblemas comemorativos, coroas, faixas presidenciais e divisas militares",
      "Customização de sapatos, tênis de festa, bolsas e clutches",
      "Detalhes cintilantes em matrizes natalinas e artigos de decoração de fim de ano"
    ],
    commonErrors: [
      "Usar o ferro de passar muito quente em cima do Lurex (ele derrete e vira uma mancha opaca)",
      "Bordar sem redinha no cone (o fio de Lurex escorrega para a base do carretel e tranca a linha)",
      "Bordar em velocidade alta sem agulha própria para fios metálicos"
    ],
    troubleshootingTips: [
      "Coloque sempre uma redinha de proteção no cone de Lurex para manter a saída de fio constante",
      "Passe as peças bordadas com Lurex sempre pelo avesso sobre uma toalha macia",
      "Use lubrificante de silicone para linhas de bordar na passagem do cabeçote se o fio estiver ressecado"
    ],
    dicaArtrelados: "Para dar um toque sutil de riqueza a qualquer matriz floral: não borde a flor inteira de Lurex! Borde as pétalas com linha colorida comum e use o Lurex dourado apenas no miolinho e nos contornos finos. Fica um bordado sofisticado e de extremo bom gosto!",
    voceSabia: "O termo 'Lurex' foi criado nos anos 1940 a partir da junção da palavra inglesa 'Lure' (atrair/seduzir) com 'Ex' (excelência), para simbolizar o poder de sedução do brilho do ouro na moda!",
    practicalExercise: "Borde um pequeno monograma com linha de Lurex prateada em um pedaço de veludo preto: observe como o contraste de luz cria um efeito de puro luxo visual!",
    quickSummary: "Fita e fio de poliéster metalizado com alumínio sob vácuo de altíssimo brilho cintilante, ícone do glamour e da moda festa.",
    relatedTerms: ["Linha Metálica", "Lamé", "Agulha Metallic", "Moda Festa"],
    tags: ["l-030", "lurex", "fio metalico", "brilho", "ouro", "prata", "glamour", "artrelados"],
    bibliographicReferences: [
      "THE LUREX COMPANY. Technical Bulletin: Metallic Yarns in Modern Embroidery and Weaving. London: Lurex, 2022.",
      "ARTRELADOS. O Poder do Brilho: Lurex, Fios Metalizados e Alta-Costura no Bastidor Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

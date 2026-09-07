import { Verbete } from "../types";

export const VERBETES_LETTER_V15: Verbete[] = [
  {
    id: "v-090-voo-livre-e-salto-com-retencao-de-cauda",
    code: "V-090",
    term: "Voo Livre e Salto com Retenção de Cauda (Free-Jump Stitch & Tail Thread Retention Mechanism)",
    pronunciation: "vo-o li-vre e sal-to com re-ten-são de cau-da",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Mecatrônica & Automação de Bordado",
    origin: "Do inglês 'jump stitch' (ponto de salto) e 'tail thread retention' (retenção da ponta do fio). Solução eletromecânica para início de bordado limpo sem desfiamento.",
    summary: "Sistema que retém mecanicamente a ponta da linha superior durante saltos longos e reinício de costura, evitando que o fio escape do olho da agulha ou forme nós no avesso.",
    definition: "O Voo Livre e Salto com Retenção de Cauda (Free-Jump Stitch Trajectory & Picker/Hook Tail Thread Retention Mechanism) é a sincronização entre o algoritmo de salto da matriz digital e os atuadores eletromecânicos da cabeça da máquina (*picker* e mola prendedora de linha superior). Quando o pantógrafo executa um deslocamento longo sem costura (*jump* de mais de 5 mm), o mecanismo desengata a barra de agulha e aciona uma lingueta pneumática ou mola retentora que prende a ponta da linha superior cortada (*thread tail*). Isso garante que, ao penetrar novamente no tecido para iniciar o novo bloco de bordado, a cauda da linha não seja puxada para fora do olho da agulha pela inércia, eliminando a formação do emaranhado de nós (*birdnesting*) e reduzindo as paradas falsas do sensor de linha.",
    technicalDetails: "Comprimento padrão da cauda retida: 8 mm a 12 mm calibrado pela faca de corte móvel e curso do picker. A retenção opera sob pressão de mola ajustável (20 a 35 gf) para soltar o fio suavemente no segundo ponto do arremate inicial (Lockstitch).",
    beginnerExplanation: "Sabe quando a máquina dá aquele pulo grande de uma letra para outra e, na hora em que ela vai começar a bordar a próxima letra, a linha escapa do buraquinho da agulha e a máquina apita com erro de linha? Esse sistema é como uma 'mãozinha invisível' que segura a pontinha da linha bem firme durante o pulo, para que a agulha comece a costurar direitinho sem a linha escapar!",
    howItWorks: [
      "1. A matriz emite o comando de corte e salto longo entre dois objetos separados.",
      "2. A faca corta a linha superior e o apanhador (*picker*) segura a ponta da linha cortada.",
      "3. O pantógrafo move o bastidor rapidamente para a nova coordenada de bordado.",
      "4. A barra de agulha desce para dar o primeiro ponto de arremate.",
      "5. A mola retentora segura a cauda da linha, permitindo que a laçada se forme na lançadeira sem que o fio saia do olho da agulha.",
      "6. No segundo ponto, a linha é liberada suavemente e o bordado segue sem nós no avesso e sem paradas."
    ],
    applications: [
      "Bordado de textos com espaçamentos longos e monogramas dispersos.",
      "Matrizes multicoloridas com dezenas de trocas de posição do bastidor.",
      "Produção seriada em alta velocidade (acima de 900 PPM) em máquinas industriais multicabeças.",
      "Eliminação do acabamento manual de corte de pontas soltas na frente da peça."
    ],
    characteristics: [
      "Elimina 100% dos erros de 'fio solto no início do objeto'.",
      "Garante avessos limpos sem tufos de linha acumulada.",
      "Reduz drasticamente o tempo de ciclo e aumenta a produtividade do ateliê."
    ],
    commonErrors: [
      "❌ Mola retentora frouxa ou suja de fiapos de linha, deixando a cauda escapar no primeiro ponto.",
      "❌ Regular a cauda de corte curta demais (< 5 mm), fazendo a linha sair do olho da agulha na arrancada.",
      "❌ Desativar os pontos de arremate inicial (Lockstitch) na matriz digitalizada."
    ],
    troubleshootingTips: [
      "A linha escapa do olho da agulha toda vez que a máquina troca de letra: verifique se a mola retentora do cabeçote não está com fiapos presos e aumente o comprimento da cauda no menu de corte para 10 mm.",
      "Ficam laçadas enormes de linha no início do bordado: ajuste a mola do picker para segurar a cauda com mais firmeza durante o salto.",
      "O corte está quebrando a agulha no salto: revise a folga da faca móvel e o sincronismo mecânico com a lançadeira."
    ],
    dicaArtrelados: "Se a sua máquina está parando em quase todas as letras com aviso de 'Linha Quebrada' logo no primeiro pontinho, não é a tensão! É a ponta da linha que está curta demais e escapa do olho da agulha no salto. Aumente o tamanho da cauda de corte no painel para 10 mm e o problema acaba na hora!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas dos anos 1970, não existia retenção de cauda; as bordadeiras tinham que segurar a ponta da linha com uma pinça manual a cada troca de posição do bastidor!",
    practicalExercise: "Borde um alfabeto completo onde as letras estão bem separadas. Observe no primeiro ponto de cada letra como a linha se comporta: se ela entra firme no tecido ou se escapa do olho da agulha, ajustando a cauda de corte se necessário.",
    quickSummary: "Retenção de Cauda no Salto é o mecanismo que prende a ponta da linha durante pulos longos, impedindo que a agulha desenfie e garantindo um início de costura limpo.",
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM",
      needleType: "75/11 Ponta Fina ou Bola",
      density: "Comprimento da cauda de corte: 10 mm a 12 mm"
    },
    relatedTerms: [
      "Ponto de Salto (Jump Stitch)",
      "Ponto de Arremate (Lockstitch)",
      "Faca de Corte Automático",
      "Birdnesting (Ninho de Linha)",
      "Picker de Retenção"
    ],
    tags: [
      "v-090",
      "salto",
      "retencao de cauda",
      "jump stitch",
      "mecanica",
      "corte",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY SYSTEMS. Jump Mechanism, Thread Trimming & Upper Thread Picker Calibration. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Technical Guide to Automatic Trimming & Thread Retention. Ichinomiya, 2021.",
      "ARTRELADOS. Mecatrônica Avançada e Solução de Falhas de Corte e Início de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-091-vlieseline-e-entretelas-nao-tecidas-europeias",
    code: "V-091",
    term: "Vlieseline e Entretelas Não-Tecidas Europeias (Vlieseline Technical Interlinings & Non-Woven Cellulose Matrix)",
    pronunciation: "vli-ze-li-ne e en-tre-te-las não te-si-das eu-ro-pe-ias",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino próprio/composto.",
    category: "Estruturação & Estabilizadores",
    origin: "Do alemão 'Vlies' (manta não-tecida / velo) e da marca industrial alemã Freudenberg/Vlieseline, pioneira mundial em fibras não-tecidas desde 1948.",
    summary: "Família de entretelas técnicas europeias de fibras de celulose e poliamida não-direcionais de alta densidade e estabilidade dimensional para bordados de alta costura.",
    definition: "A Vlieseline e Entretelas Não-Tecidas Europeias (Engineered Non-Woven Cellulose Matrix & Microdot Fusible Stabilizers) representa o padrão de excelência têxtil internacional em estabilizadores não-tecidos produzidos por deposição hidrodinâmica e consolidação térmica (*thermal bonding*). Diferente de entretelas genéricas de fibras paralelas que rasgam facilmente em um único sentido, as entretelas técnicas tipo Vlieseline possuem arranjo isotrópico multidirecional 360°, garantindo resistência idêntica à tração no sentido do urdume, da trama e do viés. São disponibilizadas em versões de rasgadeira limpa (*Tear-Away*), corte de alta tenacidade (*Cut-Away*) e fusíveis com microresina termocolante de poliamida (*Microdot Coating*), sendo a escolha mandatória para camisaria fina, seda pura e alfaiataria de luxo.",
    technicalDetails: "Gramaturas técnicas: 40 g/m² (ultra-leve para camisas), 60 g/m² (médio padrão), 80 a 100 g/m² (pesado para jaquetas). Ponto de fusão da microresina: 115 °C a 130 °C sob pressão de 2 a 3 bar por 10 a 12 segundos com ferro ou prensa térmica.",
    beginnerExplanation: "É a 'Ferrari das entretelas'! Enquanto aquelas entretelas comuns de papel rasgam fácil para um lado e resistem para o outro, essa entretela alemã especial tem as fibras todas trançadas em todas as direções. Ela não deforma o tecido nem um milímetro, não repuxa a camisa e deixa o avesso com toque super macio e gostoso, parecendo que a peça foi feita na alta costura europeia!",
    howItWorks: [
      "1. A bordadeira escolhe a versão correta da Vlieseline (ex: termocolante suave para camisas de tricoline ou rasgadeira leve).",
      "2. Se for a versão termocolante, passa o ferro morno sobre a entretela por 10 segundos, fundindo a microcola ao tecido sem endurecer a peça.",
      "3. Enquadra a peça no bastidor com tensão uniforme e sem esticar a fibra.",
      "4. A máquina borda letras miúdas e brasões complexos com total estabilidade dimensional.",
      "5. Ao finalizar, o excesso é recortado ou rasgado rente ao bordado com facilidade extrema.",
      "6. A peça bordada mantém o caimento natural do tecido sem criar aquele 'efeito papelão' grosseiro."
    ],
    applications: [
      "Camisaria masculina de luxo (colarinhos, punhos e bolso frontal).",
      "Seda pura, chiffon, organza e tecidos transparentes finíssimos.",
      "Enxovais infantis de algodão egípcio e percal 400 fios.",
      "Alfaiataria estruturada, paletós e vestidos de gala."
    ],
    characteristics: [
      "Resistência multidirecional 360° sem deformação no viés.",
      "Toque suave e macio na pele, sem rigidez plástica.",
      "Solubilidade e lavabilidade impecáveis sem encolhimento nas lavagens."
    ],
    commonErrors: [
      "❌ Usar temperatura excessiva no ferro de passar, queimando as microresinas de poliamida da entretela.",
      "❌ Substituir a entretela técnica de camisaria por entretela de papel barata que esfarela na primeira lavagem.",
      "❌ Puxar a entretela com força bruta contra os pontos cheios finos ao destacar."
    ],
    troubleshootingTips: [
      "O bordado em tecido fino de camisa ficou franzido em volta: utilize Vlieseline termocolante suave (40 g/m²) colada com ferro para estabilizar a trama antes de colocar no bastidor.",
      "A entretela deixou o avesso duro e arranhando a pele: troque a entretela genérica por Vlieseline de toque macio ou adicione proteção de malha termocolante no verso.",
      "A entretela descolou na lavagem: aumente o tempo de prensagem térmica para 12 segundos a 125 °C na hora da aplicação."
    ],
    dicaArtrelados: "Para camisas de tricoline fina de luxo: NUNCA use entretela de rasgar grossa de papel! Use entretela termocolante de microresina com gramatura 40 g/m². O bordado fica plano como uma cédula de dinheiro nova e a camisa mantém o caimento impecável!",
    voceSabia: "A empresa Freudenberg desenvolveu a Vlieseline originalmente na Alemanha nos anos 1940 a partir de pesquisas com fibras sintéticas ultra-absorventes para filtros medicinais e filtros de ar de alto desempenho!",
    practicalExercise: "Borde o mesmo monograma em dois retalhos de tricoline: um com entretela comum de rasgar e outro com entretela técnica Vlieseline termocolante. Lave as duas peças e compare como a Vlieseline não encolhe e mantém a peça lisinha sem rugas.",
    quickSummary: "Vlieseline é a linha de entretelas técnicas não-tecidas europeias com fibras multidirecionais 360°, garantindo máxima estabilidade e maciez em camisaria e tecidos finos.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "65/9 ou 70/10 Ponta Fina (Sharp)",
      density: "Gramatura: 40 a 60 g/m² | Fixação: 120 °C por 10 s"
    },
    relatedTerms: [
      "Entretela Não-Tecida (Non-Woven)",
      "Estabilidade Dimensional",
      "Entretela Fusível (Termocolante)",
      "Camisaria e Alfaiataria",
      "Tear-Away vs. Cut-Away"
    ],
    tags: [
      "v-091",
      "vlieseline",
      "entretela",
      "nao-tecido",
      "estabilizador",
      "camisaria",
      "artrelados"
    ],
    bibliographicReferences: [
      "FREUDENBERG PERFORMANCE MATERIALS. Vlieseline Technical Interlining Manual & Apparel Applications. Weinheim, 2022.",
      "VILENE INDUSTRIAL. Non-Woven Technology for High-Precision Embroidery. Keighley, 2021.",
      "ARTRELADOS. Guia Técnico dos Estabilizadores e Entretelas Especiais no Bordado de Luxo. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-092-varredura-e-alinhamento-angular-de-pantografo",
    code: "V-092",
    term: "Varredura e Alinhamento Angular de Pantógrafo (Frame Traverse Scanning & Axis Squareness Alignment)",
    pronunciation: "var-re-du-ra e a-li-nha-men-to an-gu-lar de pan-to-gra-fo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica, Calibração & Manutenção",
    origin: "Do latim 'verrere' (varrer, percorrer) e 'angularis' (relativo a ângulos). Princípio de geometria e metrologia mecânica CNC para esquadrejamento de eixos cartesianos X-Y.",
    summary: "Procedimento técnico de verificação e alinhamento do esquadro exato (90° ortogonais) entre os eixos X e Y do pantógrafo, corrigindo deformações que transformam quadrados em paralelogramos.",
    definition: "A Varredura e Alinhamento Angular de Pantógrafo (X-Y Axis Orthogonality, Squareness Calibration & Traverse Geometric Inspection) é o protocolo metrológico de calibração que afere a perpendicularidade perfeita (exatamente 90° 00' 00\") entre o eixo transversal horizontal (X) e os eixos longitudinais laterais (Y) da mesa pantográfica da máquina de bordar. Com o uso contínuo, impactos de bastidor ou folga em correias dentadas e fusos de esferas, o pantógrafo pode sofrer desvio angular (*skew / angular deviation*), fazendo com que matrizes geométricas quadradas sejam bordadas como losangos ou paralelogramos distorcidos, com contornos que nunca fecham no ponto final.",
    technicalDetails: "Tolerância angular máxima admitida: desvio menor que 0,15 mm em um curso de teste diagonal de 300 mm x 300 mm (Teorema de Pitágoras com esquadro de precisão mecânica classe 1). O ajuste é realizado tensionando diferencialmente as correias sincronizadoras Y1 e Y2 ou afrouxando os mancais do eixo de ligação transversal.",
    beginnerExplanation: "Sabe quando você manda a máquina bordar uma moldura quadrada e ela sai torta parecendo uma pipa ou um paralelogramo inclinado? Isso acontece porque os trilhos do pantógrafo (os braços que mexem o bastidor para frente e para os lados) saíram do esquadro perfeito de 90 graus! Esse alinhamento é a 'regulagem de esquadro' que deixa os movimentos da máquina retos e perfeitos de novo!",
    howItWorks: [
      "1. O técnico coloca um bastidor grande na máquina e programa um arquivo de teste de esquadro (um quadrado perfeito de 200x200 mm com linhas de centro).",
      "2. A máquina fura o papel milimetrado com a agulha nos 4 cantos do quadrado sem linha.",
      "3. Medem-se com paquímetro digital as duas diagonais (D1 e D2 de canto a canto).",
      "4. Se D1 for diferente de D2 (ex: D1 = 282,8 mm e D2 = 285,1 mm), há desvio angular no pantógrafo.",
      "5. O técnico solta o acoplamento do eixo sincronizador do motor Y e reposiciona a correia no dente correto.",
      "6. Repete o teste até que as duas diagonais fiquem rigorosamente iguais, devolvendo o esquadro perfeito de 90° à máquina."
    ],
    applications: [
      "Calibração de máquinas industriais após transporte, mudança de ateliê ou colisão de bastidor.",
      "Bordados geométricos rigorosos de brasões militares, escudos e molduras retangulares.",
      "Bordados contínuos de barra e emendas panorâmicas que exigem junção perfeita.",
      "Manutenção preventiva periódica semestral de ateliês de alto desempenho."
    ],
    characteristics: [
      "Garante que molduras e quadrados fechem com precisão de décimos de milímetro.",
      "Elimina folgas e folgas diagonais na movimentação do bastidor.",
      "Evita que os contornos de cetim fiquem desalinhados do preenchimento interno."
    ],
    commonErrors: [
      "❌ Culpar o programador da matriz por 'desenho torto' quando o problema real é o pantógrafo fora de esquadro mecânico.",
      "❌ Apertar a correia de um lado do eixo Y muito mais que a do outro lado.",
      "❌ Mover o pantógrafo com as mãos empurrando apenas uma das pontas do bastidor com a máquina ligada."
    ],
    troubleshootingTips: [
      "Os cantos de um quadrado bordado nunca se encontram: faça o teste das duas diagonais com papel milimetrado para conferir o esquadro mecânico do pantógrafo.",
      "A máquina faz um barulho de 'clack' no canto do bastidor: verifique se as guias lineares e patins do eixo Y não estão com sujeira acumulada ou parafusos soltos.",
      "O desenho fica esticado na vertical: calibre a escala de passos por milímetro (Steps/mm) do motor de passo Y no painel técnico."
    ],
    dicaArtrelados: "Teste rápido de esquadro no seu ateliê: mande a máquina fazer um quadrado grande de 15x15 cm em um retalho firme. Meça as duas diagonais em 'X' com uma régua de precisão. Se uma diagonal estiver mais comprida que a outra por mais de 1 mm, seu pantógrafo precisa de alinhamento técnico urgente!",
    voceSabia: "Os primeiros pantógrafos mecânicos foram inventados pelo matemático e astrônomo alemão Christoph Scheiner em 1603 para desenhar mapas e copiar gravuras em escalas aumentadas ou reduzidas com precisão geométrica perfeita!",
    practicalExercise: "Borde um quadrado de 10x10 cm com ponto corrido duplo em entretela firme. Com uma régua rígida, meça os 4 lados e as duas diagonais. Verifique se os ângulos internos estão rigorosamente em 90 graus.",
    quickSummary: "Alinhamento de Pantógrafo é a calibração do esquadro mecânico de 90° entre os eixos X e Y, garantindo que desenhos geométricos e molduras sejam bordados sem distorções angulares.",
    recommendedSettings: {
      speedPPM: "Calibração mecânica",
      needleType: "Agulha sem linha para furação de teste",
      density: "Tolerância diagonal: < 0.2 mm de diferença"
    },
    relatedTerms: [
      "Pantógrafo",
      "Eixo X e Eixo Y",
      "Ortogonalidade Mecânica",
      "Perda de Passo (Step Loss)",
      "Correias Sincronizadoras"
    ],
    tags: [
      "v-092",
      "pantografo",
      "esquadro",
      "alinhamento",
      "calibracao",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Pantograph Calibration & Coordinate System Squareness. Nagoya, 2022.",
      "SWF EMBROIDERY MACHINERY. Mechanical Alignment and X-Y Axis Orthogonality Manual. Seul, 2021.",
      "ARTRELADOS. Alinhamento de Precisão e Geometria Estrutural em Máquinas de Bordar CNC. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-093-variacao-de-ponto-cheio-com-borda-rendilhada",
    code: "V-093",
    term: "Variação de Ponto Cheio com Borda Rendilhada (Feathered Satin Edge & Jagged Column Borders)",
    pronunciation: "va-ri-a-são de pon-to chei-o com bor-da ren-di-lha-da",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'plenus' (cheio) e do inglês 'feathered edge' (borda em pluma/rendilhada). Recurso estético para suavizar margens duras de colunas de cetim.",
    summary: "Recurso de digitalização que estende e retrai aleatoriamente as pontas dos pontos cheios em uma ou ambas as margens, criando efeitos de pelos, plumas, chamas e sombras naturais.",
    definition: "A Variação de Ponto Cheio com Borda Rendilhada (Feathered Satin Edge, Jagged Margins & Variable Column Penetration) é a funcionalidade de software que quebra o alinhamento retilíneo perfeito das perfurações laterais de uma coluna de ponto cheio (cetim). Ao programar um percentual de aleatoriedade no comprimento dos pontos em um dos lados (ou em ambos), a máquina faz algumas pontadas penetrarem mais para fora e outras mais para dentro da coluna, gerando uma borda desfiada, suave e orgânica que imita com fidelidade pelos de animais, folhas de plantas, franjas, labaredas de fogo e transições realistas.",
    technicalDetails: "Parâmetro de rendilhado (*Feathering*): Lado 1, Lado 2 ou Ambos. Amplitude de variação programável de 15% a 60% da largura da coluna com espaçamento de densidade de 0,38 mm a 0,45 mm. Elimina a necessidade de contornos adicionais rígidos.",
    beginnerExplanation: "Quando fazemos um ponto cheio normal, as duas beiradas dele ficam retinhas e duras como uma fita plástica. Com a borda rendilhada (ou ponta em pluma), a máquina faz alguns pontos passarem um pouquinho para fora e outros ficarem mais para dentro, como se fossem os pelinhos de um cachorrinho ou as pontas de uma folha de árvore! Isso tira aquele aspecto duro de desenho de computador e dá um ar super natural e artístico!",
    howItWorks: [
      "1. O programador desenha a coluna de ponto cheio (ex: a orelha de um gato ou uma pétala de flor).",
      "2. Ativa o recurso 'Efeito Rendilhado / Feathering / Borda Desfiada' no painel de propriedades do ponto.",
      "3. Escolhe qual lado da coluna vai ficar desfiado (apenas a borda externa ou ambos os lados).",
      "4. Define a intensidade do efeito (ex: 35% de variação).",
      "5. A máquina borda o objeto criando uma borda suave com pontas irregulares de linha.",
      "6. A peça ganha textura orgânica e profundidade de pintura realista."
    ],
    applications: [
      "Bordados realistas de animais (pelagem de cães, gatos, cavalos e leões).",
      "Asas de pássaros, plumas e penas com efeito de penugem suave.",
      "Desenhos de labaredas de fogo, fumaça e efeitos de água em movimento.",
      "Folhagens botânicas com bordas serrilhadas e pétalas de orquídeas."
    ],
    characteristics: [
      "Transforma desenhos planos em peças com textura tátil e profundidade.",
      "Facilita a transição e mistura de cores sobrepostas sem criar degraus grossos.",
      "Deixa o toque da peça mais leve e flexível nas extremidades."
    ],
    commonErrors: [
      "❌ Colocar rendilhado de 80% em colunas muito estreitas (< 2 mm), criando pontos soltos e laçadas no ar.",
      "❌ Usar em letras corporativas onde o cliente exige contornos perfeitamente retos e afiados.",
      "❌ Aplicar borda rendilhada sem desativar o underlay de contorno na mesma margem (o underlay ficaria exposto)."
    ],
    troubleshootingTips: [
      "O efeito rendilhado ficou com fios soltos que parecem desfiados com defeito: reduza a porcentagem de variação para 25% e use densidade de 0,40 mm.",
      "O underlay apareceu por baixo das pontas rendilhadas: mude o tipo de underlay para Ponto Corrido Central (Center Walk) em vez de contorno de borda.",
      "A borda ficou muito quadrada: aumente a aleatoriedade (*randomness*) do algoritmo nas configurações avançadas do software."
    ],
    dicaArtrelados: "Para fazer o pelo de um ursinho ou cachorrinho parecer de verdade: use o ponto cheio com borda rendilhada externa e suba a densidade para 0,42 mm! Ao sobrepor as camadas de pelo da cabeça para o corpo, os pelos se encaixam como mágica!",
    voceSabia: "O efeito rendilhado foi inspirado na técnica centenária do 'Ponto Pintura' (*Needle Painting* / *Bordado Livre Francês*), onde as bordadeiras intercalavam pontos longos e curtos à mão para retratar pássaros reais em seda!",
    practicalExercise: "Digitalize uma folha de árvore com ponto cheio normal de um lado e com borda rendilhada a 40% do outro lado. Borde em uma toalha e veja a diferença brutal de dinamismo e realismo entre os dois lados.",
    quickSummary: "Ponto Cheio com Borda Rendilhada é o recurso que torna as margens da coluna irregulares e suaves, imitando pelos, penas e sombras com acabamento artístico e natural.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Densidade: 0.40 mm | Rendilhado: 25% a 40%"
    },
    relatedTerms: [
      "Ponto Cheio (Satin Stitch)",
      "Feathering Effect",
      "Ponto Pintura (Needle Painting)",
      "Underlay Central Walk",
      "Bordado Foto-Realista"
    ],
    tags: [
      "v-093",
      "ponto cheio",
      "borda rendilhada",
      "feathering",
      "satin",
      "realismo",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Feathering Effects, Jagged Edges & Fur Digitizing Techniques. Sydney, 2022.",
      "BERNINA EMBROIDERY SOFTWARE. Creative Satin Stitch Effects & Shading. Steckborn, 2021.",
      "ARTRELADOS. Efeitos Especiais de Ponto Cheio e Texturas Orgânicas no Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-094-ventilacao-e-conforto-termico-em-bordados-esportivos",
    code: "V-094",
    term: "Ventilação e Conforto Térmico em Bordados Esportivos (Breathability, Perforated Underlay & Moisture-Wicking Compatibility)",
    pronunciation: "ven-ti-la-são e con-for-to ter-mi-co em bor-da-dos es-por-ti-vos",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estruturação & Física Têxtil",
    origin: "Do latim 'ventilatio' (exposição ao ar, arejamento). Engenharia têxtil moderna voltada para desempenho atlético e tecidos tecnológicos funcionais (Dry-Fit/Climacool).",
    summary: "Conjunto de diretrizes de digitalização e estabilização para bordar roupas esportivas tecnológicas sem bloquear a passagem de ar e o suor do atleta.",
    definition: "A Ventilação e Conforto Térmico em Bordados Esportivos (Breathability Engineering, Micro-Perforated Underlays & Moisture-Wicking Fabric Integration) é o método técnico de concepção de matrizes e seleção de insumos para vestuário de alta performance (como poliamida dry-fit, poliéster microfuradinho e malhas de compressão elastano). Ao aplicar matrizes maciças tradicionais com excesso de pontos e entretelas pesadas sobre o peito de uma camiseta esportiva, cria-se uma 'placa plastificada impermeável' que bloqueia a transpiração, retém o calor e causa assaduras no atleta. A técnica correta utiliza densidades arejadas (0,45 mm a 0,55 mm), preenchimentos com aberturas de ventilação, entretelas de malha leve respirável (*Performance Mesh*) e linhas de poliéster de título fino (No 60).",
    technicalDetails: "Permeabilidade ao ar: matrizes esportivas otimizadas mantêm mais de 65% da taxa de respirabilidade original do tecido segundo a norma ASTM D737. Uso obrigatório de entretela respirável tipo *No-Show Mesh* de 45 g/m² e agulha Ponta Bola Fina (SES 65/9 ou 70/10).",
    beginnerExplanation: "Quando a gente borda uma camisa de academia ou de futebol com um desenho muito pesado e cheio de linha dura, aquela parte do peito vira um 'plástico' que não deixa o ar passar e fica grudando de suor no corpo do atleta! Bordar esportivo do jeito certo é usar desenhos levinhos, pontos abertos e uma entretela de redinha macia que deixa o ar circular e a pele respirar livremente!",
    howItWorks: [
      "1. O digitalizador projeta o logotipo do time ou academia com contornos vazados e preenchimentos abertos em vez de blocos sólidos pesados.",
      "2. Utiliza entretela especial de malha de poliéster ultrafina e respirável (Performance Mesh) em vez de papel duro.",
      "3. Enquadra o tecido dry-fit sem esticar a elasticidade natural da malha.",
      "4. A máquina borda com agulha fina 70/10 para não furar nem romper os microporos do tecido esportivo.",
      "5. Ao finalizar, recorta o excesso da entretela de malha que fica invisível e macia pelo avesso.",
      "6. A camiseta esportiva vai para o treino mantendo a secagem rápida, flexibilidade e total ventilação do atleta.",
      "7. O cliente aprova a qualidade profissional e o conforto ergonômico."
    ],
    applications: [
      "Uniformes de futebol, corrida de rua, ciclismo, crossfit e basquete.",
      "Camisetas tecnológicas de academia em tecidos dry-fit e poliamida com elastano.",
      "Tops femininos de compressão e regatas de maratona.",
      "Agasalhos esportivos corta-vento e jaquetas térmicas de alta respirabilidade."
    ],
    characteristics: [
      "Preserva a troca térmica e a evaporação contínua do suor corporal.",
      "Não forma uma placa rígida no peito do atleta.",
      "Não deforma nem enruga a malha esportiva após repetidas lavagens na máquina."
    ],
    commonErrors: [
      "❌ Colocar um escudo maciço de 80.000 pontos no peito de uma camisa dry-fit de 90 gramas.",
      "❌ Usar entretela de papel dura e grossa (80 g/m²) que arranha o peito e não respira.",
      "❌ Esticar a malha esportiva no bastidor até perder a elasticidade, deformando a camisa para sempre."
    ],
    troubleshootingTips: [
      "A camisa esportiva ficou com o bordado repuxado e cheio de ondas ao redor: reduza a densidade da matriz em 25% e use entretela de malha No-Show Mesh com spray adesivo temporário sem esticar o tecido.",
      "O cliente reclamou que o bordado arranha o mamilo e incomoda na corrida: aplique termocolante de proteção de toque macio (tipo Cover-A-Stitch) no avesso do bordado.",
      "A agulha está deixando buracos visíveis na malha dry-fit: troque a agulha por 65/9 Ponta Bola Pequena (SES) nova."
    ],
    dicaArtrelados: "Roupa de academia e corrida precisa de leveza! Use entretela de malha especial (No-Show Mesh) e reduza os pontos cheios pesados da matriz. O bordado fica tão levinho e confortável que o atleta esquece que tem um bordado na camisa durante a corrida!",
    voceSabia: "Em maratonas oficiais, corredores chegam a sofrer sangramento nos mamilos pelo atrito contínuo de bordados rígidos e pesados contra o peito durante os 42 km de prova!",
    practicalExercise: "Borde o mesmo logo de academia em duas camisetas dry-fit: uma com entretela de papel comum pesada e outra com entretela No-Show Mesh e matriz aliviada. Experimente vestir as duas e sinta a diferença inacreditável de conforto na pele.",
    quickSummary: "Ventilação em Bordados Esportivos é a técnica de digitalizar matrizes leves e usar entretelas de malha respirável, garantindo conforto térmico e evaporação do suor em tecidos de academia.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "65/9 ou 70/10 Ponta Bola Pequena (SES)",
      density: "Densidade: 0.45 a 0.50 mm com entretela No-Show Mesh"
    },
    relatedTerms: [
      "Tecido Dry-Fit",
      "Entretela No-Show Mesh",
      "Respirabilidade Têxtil",
      "Conforto Tátil e Avesso",
      "Compensação de Elasticidade"
    ],
    tags: [
      "v-094",
      "ventilacao",
      "esportivo",
      "dry-fit",
      "conforto",
      "no-show mesh",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXTILE RESEARCH JOURNAL. Moisture Management & Comfort Properties in Embroidered Sportswear. Nova York, 2022.",
      "MADEIRA THREADS. Embroidery on Performance & Technical Athletic Fabrics. Freiburg, 2021.",
      "ARTRELADOS. Guia de Bordado Esportivo de Alto Desempenho e Conforto Térmico. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-095-vetor-curvilineo-bezier-na-digitalizacao",
    code: "V-095",
    term: "Vetor Curvilíneo Bezier na Digitalização (Bezier Curves & Mathematical Node Precision in Embroidery)",
    pronunciation: "ve-tor cur-vi-li-neo be-zi-er na di-gi-ta-li-za-são",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Em homenagem ao engenheiro e matemático francês Pierre Bézier (1910–1999), que desenvolveu as curvas paramétricas na Renault para modelagem de automóveis.",
    summary: "Método geométrico de desenhar contornos e formas perfeitas no software de bordado manipulando nós e alças tangenciais de controle com o menor número de pontos possível.",
    definition: "O Vetor Curvilíneo Bezier na Digitalização (Bezier Mathematical Splines & Vector Node Optimization) é o sistema de modelagem vetorial baseado em curvas polinomiais paramétricas utilizado nos softwares de digitalização de matrizes de bordado. Em vez de criar uma curva clicando dezenas de pontos curtos e facetados (o que gera arestas duras e arquivos pesados), a curva Bezier utiliza apenas dois nós principais conectados por hastes e alças de controle tangenciais (*handles*). Ao puxar e girar essas alças, o programador controla a curvatura, o raio e a suavidade matemática do traçado, gerando colunas de ponto cheio e contornos perfeitamente lisos, com linhas fluidas que a máquina de bordar executa sem solavancos mecânicos.",
    technicalDetails: "Nós de Bezier clássicos: Nó Cúspide (canto vivo independente), Nó Suave (alças colineares de comprimento livre) e Nó Simétrico (alças colineares e de mesmo comprimento). Reduz em até 70% o número de vértices de controle da geometria do objeto.",
    beginnerExplanation: "Quando você desenha um círculo no computador, em vez de ficar dando 50 cliques cheios de pontinhas quebradas como uma escadinha, você usa a 'ferramenta Bezier' dando apenas 4 cliques e puxando as 'alcinhas' de cada ponto! As alças funcionam como imãs que dobram a linha com uma curva perfeitamente lisa e redonda como um espelho!",
    howItWorks: [
      "1. O programador clica no ponto inicial da curva e arrasta o mouse para puxar a alça tangencial.",
      "2. Clica no ponto final da curva e ajusta o ângulo da segunda alça.",
      "3. A curva se ajusta instantaneamente com suavidade matemática perfeita.",
      "4. Para criar uma quina viva, segura a tecla de corte (como 'Alt' ou 'Espaço') transformando o nó em cúspide.",
      "5. O software converte o vetor liso em comandos de penetração de agulha contínuos e sem vibração.",
      "6. A máquina de bordar percorre o contorno sem dar trancos no pantógrafo, gerando bordas afiadas e elegantes."
    ],
    applications: [
      "Digitalização precisa de logotipos corporativos, letras tipográficas e brasões.",
      "Desenho de arabescos, florais, laços e monogramas clássicos com curvas orgânicas.",
      "Vetorização manual limpa de imagens bitmap de baixa resolução.",
      "Redução drástica do tamanho e complexidade dos arquivos de matriz de bordado."
    ],
    characteristics: [
      "Curvas 100% lisas e sem facetas quebradas.",
      "Edição rápida e intuitiva da matriz apenas puxando as alças com o mouse.",
      "Movimentação suave e silenciosa do pantógrafo da máquina durante o bordado."
    ],
    commonErrors: [
      "❌ Ficar clicando centenas de pontos um do ladinho do outro para fazer uma curva simples (cria nós defeituosos e matriz pesada).",
      "❌ Deixar as alças de controle compridas demais cruzando sobre si mesmas, gerando laços internos na geometria.",
      "❌ Não usar nós suaves em curvas contínuas, criando 'bicos' indesejados no meio de círculos."
    ],
    troubleshootingTips: [
      "A curva do bordado ficou cheia de pontas e quinas duras: delete os pontos em excesso no software e use apenas 2 nós com alças Bezier suaves.",
      "O círculo ficou parecendo um ovo torto: use nós simétricos posicionados exatamente nos quadrantes superior, inferior, esquerdo e direito.",
      "A máquina está dando trancos nas curvas: revise a geometria do vetor e elimine nós sobrepostos ou invertidos."
    ],
    dicaArtrelados: "A regra de ouro de todo bom programador de matrizes: 'Menos nós é mais qualidade!'. Para fazer um círculo perfeito, você só precisa de 4 nós bem posicionados com alças Bezier! Quanto menos cliques você der, mais lisa a curva vai ficar na máquina!",
    voceSabia: "Pierre Bézier inventou esse sistema matemático nos anos 1960 para desenhar a carroceria do famoso carro Renault Dauphine e revolucionou não apenas o bordado, mas todos os programas gráficos do planeta (Photoshop, Illustrator, Corel e AutoCAD)!",
    practicalExercise: "Abra seu programa de digitalização e tente desenhar a letra 'S' com apenas 5 nós usando curvas Bezier. Borde o resultado e veja como o contorno fica impecável e sem nenhuma rebarba.",
    quickSummary: "Curvas Bezier na Digitalização é o método de desenhar curvas perfeitas usando nós e alças de controle, garantindo matrizes leves, contornos lisos e bordados elegantes.",
    recommendedSettings: {
      speedPPM: "Qualquer velocidade",
      needleType: "Compatível com a linha",
      density: "Vetor limpo com nós otimizados"
    },
    relatedTerms: [
      "Digitalização Vetorial",
      "Nós e Alças de Controle",
      "Suavização Geométrica",
      "Pierre Bézier",
      "Ponto de Inflexão"
    ],
    tags: [
      "v-095",
      "bezier",
      "vetor",
      "curvas",
      "digitalizacao",
      "software",
      "artrelados"
    ],
    bibliographicReferences: [
      "MORTENSON, Michael E. Geometric Modeling and Bezier Curves in Computer Graphics. Nova York, 2021.",
      "WILCOM EMBROIDERY STUDIO. Vector Drawing Tools & Node Editing Mastery. Sydney, 2022.",
      "ARTRELADOS. Fundamentos da Geometria Vetorial e Nós de Bezier para Digitalizadores de Elite. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-096-volatilidade-termica-e-ponto-de-fusao-de-entretelas-termossoluveis",
    code: "V-096",
    term: "Volatilidade Térmica e Ponto de Fusão de Entretelas Termossolúveis (Thermal Degradation & Heat-Away Stabilizer Residue Removal)",
    pronunciation: "vo-la-ti-li-da-de ter-mi-ca e pon-to de fu-são de en-tre-te-las ter-mos-so-lu-veis",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estruturação & Estabilizadores",
    origin: "Do latim 'volatilis' (que voa/evapora) e do grego 'therme' (calor). Tecnologia de filmes de polímeros que se desintegram por calor a seco.",
    summary: "Processo físico-químico de eliminação de entretelas e filmes especiais que se transformam em pó e somem ao passar ferro quente a seco, ideal para tecidos que não podem ser molhados.",
    definition: "A Volatilidade Térmica e Ponto de Fusão de Entretelas Termossolúveis (Thermal Degradation, Pyrolysis & Heat-Away Film Decarboxylation) é a reação física e termoquímica pela qual um filme ou entretela não-tecida à base de polímeros sensíveis à temperatura (como acetato de celulose modificado ou polietileno biodegradável termossensível) se desidrata e se desintegra em pó microscópico inerte ao ser submetido a calor seco entre 120 °C e 140 °C. Esse método é a solução tecnológica indispensável para estabilizar bordados em materiais que não toleram água (como couro natural, camurça, veludo de seda, tecidos com acabamento dry-clean only e paramentos eclesiásticos com fios metálicos puros), permitindo a remoção de 100% dos resíduos sem lavar a peça.",
    technicalDetails: "Temperatura de degradação térmica: 120 °C a 135 °C com ferro de passar a seco em movimentos circulares por 15 a 25 segundos (NUNCA usar vapor). Os resíduos transformados em microesferas de pó marrom-claro são removidos com escova de cerdas macias ou aspirador de pó têxtil.",
    beginnerExplanation: "É a mágica da 'entretela que some no calor do ferro'! Quando você vai bordar couro de verdade, veludo de seda ou tecidos caríssimos que estragam se você molhar na água, você não pode usar plástico hidrossolúvel de água. Você usa esse plástico especial que, quando você passa o ferro quente e seco por cima, ele vira um pozinho fino que sai todinho com uma simples escovadinha, deixando o bordado limpo sem uma gota de água!",
    howItWorks: [
      "1. A bordadeira utiliza o filme termossolúvel (Heat-Away) sobre ou sob o tecido nobre sensível à água.",
      "2. A máquina borda normalmente os pontos cheios e detalhes.",
      "3. Ao retirar do bastidor, rasga-se o excesso do filme ao redor do bordado com as mãos.",
      "4. Aquece-se o ferro de passar a seco na temperatura média de algodão (130 °C - SEM VAPOR).",
      "5. Passa-se o ferro em movimentos circulares suaves sobre o bordado por 20 segundos.",
      "6. O filme se desintegra instantaneamente virando um pozinho seco.",
      "7. Passa-se uma escovinha macia e a peça fica 100% limpa, livre de entretela e sem tocar em água."
    ],
    applications: [
      "Bordados em couro natural legítimo, nobuck e camurça de calçados e bolsas.",
      "Vestidos de noiva em seda pura, organza e veludo alemão 'Dry Clean Only'.",
      "Bordados com fios metálicos preciosos e fios banhados a ouro que oxidam com umidade.",
      "Rendas e apliques independentes confeccionados sobre tecidos não-laváveis."
    ],
    characteristics: [
      "Zero uso de água, preservando o brilho e a estrutura de tecidos sensíveis.",
      "Remoção 100% completa até mesmo dentro de buraquinhos minúsculos de letras.",
      "Não deixa resíduos pegajosos nem cheiro químico na peça final."
    ],
    commonErrors: [
      "❌ Ligar o vapor do ferro de passar (a umidade empasta o filme e cola na peça).",
      "❌ Usar temperatura baixa demais (o filme não atinge o ponto de quebra e não sai).",
      "❌ Usar temperatura excessiva (> 160 °C) que pode queimar as linhas de poliéster do bordado."
    ],
    troubleshootingTips: [
      "O filme ficou pegajoso e não virou pó: desative completamente o vapor do ferro e passe novamente o ferro bem quente e seco em movimentos circulares.",
      "Sobraram pedacinhos de pó dentro dos nós do bordado: use uma escovinha de dente macia e seca para varrer o pó para fora.",
      "A linha do bordado perdeu o brilho com o calor: coloque uma folha de papel teflon ou papel manteiga entre o ferro e o bordado durante a aplicação térmica."
    ],
    dicaArtrelados: "Regra sagrada para usar plástico que sai no calor (Heat-Away): DESLIGUE O VAPOR DO FERRO! O ferro tem que estar 100% seco! Passe em círculos por 15 segundos e passe uma escovinha de dente macia: o pó sai todinho como mágica!",
    voceSabia: "As entretelas termossolúveis foram criadas nos Estados Unidos nos anos 1980 especialmente para a confecção de brasões e insígnias militares douradas da Marinha americana, cujos fios de ouro legítimo não podiam entrar em contato com água!",
    practicalExercise: "Faça um bordado pequeno em um retalho de camurça ou couro usando filme termossolúvel. Aqueça o ferro seco a 130 °C, passe sobre o bordado e remova os resíduos com uma escova macia, conferindo a limpeza total da peça.",
    quickSummary: "Entretela Termossolúvel é o estabilizador que se desintegra em pó ao ser aquecido com ferro seco, permitindo limpar bordados em couro, seda e tecidos que não podem ser molhados.",
    recommendedSettings: {
      speedPPM: "700 a 800 PPM",
      needleType: "75/11 Ponta Fina ou Ponta Especial Couro",
      density: "Temperatura de remoção: 125 °C a 135 °C (Ferro Seco)"
    },
    relatedTerms: [
      "Heat-Away Stabilizer",
      "Plástico Hidrossolúvel",
      "Bordado em Couro e Seda",
      "Passadoria Técnica",
      "Fios Metálicos Preciosos"
    ],
    tags: [
      "v-096",
      "termossoluvel",
      "heat-away",
      "ferro a seco",
      "couro",
      "seda",
      "estabilizador",
      "artrelados"
    ],
    bibliographicReferences: [
      "SULKY OF AMERICA. Heat-Away Clear Film & Specialty Stabilizer Guide. Port Charlotte, 2022.",
      "GUNOLD GMBH. Thermogaze & Heat-Disintegrating Stabilizers for Delicate Fabrics. Stockstadt, 2021.",
      "ARTRELADOS. Inovações em Estabilizadores Especiais: Água, Calor e Rasgadeiras Técnicas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-097-variacao-de-passo-em-ponto-corrido-triplo",
    code: "V-097",
    term: "Variação de Passo em Ponto Corrido Triplo (Variable Triple Run Stitch & Sculptured Bean Stitch)",
    pronunciation: "va-ri-a-são de pas-so em pon-to cor-ri-do tri-plo",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'triplex' (tríplice, três vezes) e do inglês 'bean stitch' (ponto feijão). Técnica clássica de contorno com espessura manual rústica.",
    summary: "Técnica de programação do ponto corrido que vai e volta três vezes sobre si mesmo com comprimento de passo calibrado, criando contornos encorpados e com relevo de cordão.",
    definition: "A Variação de Passo em Ponto Corrido Triplo (Variable Pitch Bean Stitch, Triple Run Modulation & Sculptured Contouring) é a estratégia de digitalização que configura o ciclo de avanço e recuo do ponto corrido linear no padrão 1-2-1 (a agulha dá um passo para frente, volta um passo para trás sobre o mesmo furo e avança novamente para frente). Ao modular o comprimento do passo (*stitch length*) entre 2,5 mm e 4,0 mm, obtém-se um cordão contínuo com tripla espessura de linha que se destaca nitidamente sobre o tecido sem a rigidez de uma coluna de ponto cheio, conferindo um visual rústico de pesponto feito à mão ou contorno de aquarela.",
    technicalDetails: "Passo recomendado: 2,8 mm a 3,2 mm para curvas fechadas; 3,5 mm a 4,2 mm para retas longas. Consumo de linha 300% maior em relação ao ponto corrido simples, com excelente fixação mecânica que dispensa arremates complexos.",
    beginnerExplanation: "É o famoso 'Ponto Feijão' ou ponto triplo! Em vez de dar só um pontinho simples e fininho que quase não dá para ver no tecido, a máquina dá um passo para frente, dá um passo para trás e depois avança de novo! Isso faz a linha passar três vezes pelo mesmo lugar, criando um contorno grossinho e charmoso como uma costura pesada feita à mão!",
    howItWorks: [
      "1. O programador seleciona a linha de contorno no software de digitalização.",
      "2. Altera o tipo de ponto de 'Ponto Corrido Simples (Run)' para 'Ponto Triplo / Bean Stitch'.",
      "3. Configura o comprimento do passo (ex: 3,0 mm).",
      "4. A máquina borda cada coordenada executando a sequência: avança, recua e avança.",
      "5. A linha se acumula de forma ordenada, criando uma espessura de cordão nítida e uniforme.",
      "6. O desenho ganha um contorno forte e marcante sem endurecer o tecido."
    ],
    applications: [
      "Contornos de matrizes infantis estilo aquarela (*Redwork*, *Bluework* e *Sketch*).",
      "Pespontos decorativos imitando costura pesada de alfaiataria em bolsos e golas.",
      "Bordados em toalhas atoalhadas e tecidos com textura onde o ponto simples sumiria.",
      "Bordado de detalhes anatômicos sutis (olhos, bocas e sobrancelhas de personagens)."
    ],
    characteristics: [
      "Destaca contornos com força visual sem precisar usar ponto cheio largo.",
      "Deixa a peça macia, flexível e confortável no corpo.",
      "Altíssima resistência mecânica à lavagem e fricção contínua."
    ],
    commonErrors: [
      "❌ Usar passo curto demais (< 1,8 mm) em ponto triplo, criando um bloco de 6 perfurações no mesmo milímetro e furando o tecido.",
      "❌ Usar passo longo demais (> 5,0 mm) em curvas apertadas, criando cantos retos e poligonais.",
      "❌ Aplicar em tecidos finíssimos de seda sem entretela de suporte adequada."
    ],
    troubleshootingTips: [
      "O ponto triplo está picotando e cortando o tecido: aumente o comprimento do passo para 3,2 mm e use agulha ponta bola fina (SES 70/10).",
      "As curvas do contorno ficaram quadradas: reduza o comprimento do passo nas curvas para 2,5 mm no software.",
      "O contorno sumiu no meio dos pelos da toalha: aumente o passo para 3,5 mm e coloque filme hidrossolúvel por cima da toalha."
    ],
    dicaArtrelados: "Para fazer matrizes infantis fofas estilo 'rabisco' ou aquarela: use SEMPRE o Ponto Triplo com passo de 3,0 mm! Ele fica gordinho, super visível e dá aquele charme artesanal que as mamães são apaixonadas!",
    voceSabia: "O ponto corrido triplo foi criado originalmente pelas costureiras dos anos 1890 para reforçar os bolsos das primeiras calças jeans da Levi Strauss antes da invenção dos rebites de cobre metálicos!",
    practicalExercise: "Borde o desenho de um ursinho simples: faça metade do contorno com ponto corrido simples e a outra metade com ponto triplo (passo 3,0 mm). Compare como o ponto triplo tem 10 vezes mais presença visual e beleza estética.",
    quickSummary: "Ponto Corrido Triplo (Ponto Feijão) é o ponto que avança e recua três vezes no mesmo traçado, criando contornos encorpados, charmosos e com efeito de pesponto artesanal.",
    recommendedSettings: {
      speedPPM: "800 a 900 PPM",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Comprimento de passo: 2.8 mm a 3.5 mm (Tríplice)"
    },
    relatedTerms: [
      "Ponto Feijão (Bean Stitch)",
      "Ponto Corrido (Run Stitch)",
      "Matrizes Estilo Sketch",
      "Redwork e Bluework",
      "Comprimento de Ponto (Pitch)"
    ],
    tags: [
      "v-097",
      "ponto triplo",
      "bean stitch",
      "ponto feijao",
      "contorno",
      "sketch",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Run Stitch Variations, Bean Stitch & Motif Lines. Sydney, 2022.",
      "EMBROIDERY DESIGN DIGITIZING. Outline Techniques, Redwork & Vintage Bean Stitches. Londres, 2021.",
      "ARTRELADOS. A Força do Ponto Feijão e Contornos Artísticos no Bordado Moderno. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-098-vacuo-de-protecao-na-lancadeira-e-prevencao-de-farpas-de-linha",
    code: "V-098",
    term: "Vácuo de Proteção na Lançadeira e Prevenção de Farpas de Linha (Rotary Hook Thread Trap & Anti-Lint Shield)",
    pronunciation: "va-cu-o de pro-te-são na lan-sa-dei-ra e pre-ven-são de far-pas de li-nha",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do japonês 'ito-kuzu boushi' (prevenção de acúmulo de fiapos). Blindagem mecânica da pista da lançadeira desenvolvida pela Koban e Hirose Hooks.",
    summary: "Protetor mecânico e defletor de ar instalado na pista da lançadeira rotativa que impede que pontas de linha cortada e fiapos de entretela fiquem presos no mecanismo.",
    definition: "O Vácuo de Proteção na Lançadeira e Prevenção de Farpas de Linha (Rotary Hook Thread-Trap Shield, Anti-Lint Deflector & Race Groove Protection) é o conjunto de elementos de engenharia de precisão (como canais de alívio espiralados, defletores de fiapo em aço temperado e pistas com vedação dinâmica) usinados no corpo da lançadeira rotativa industrial. Durante a operação em alta rotação (acima de 900 PPM), o corte automático de linha gera microfiapos e fragmentos de fio cortado (*thread chips*). O protetor defletor direciona o fluxo de ar gerado pelo giro da lançadeira para expulsar esses fragmentos para fora da pista de deslizamento, impedindo que fiapos entrem na ranhura da pista de rolamento e provoquem o travamento mecânico imediato da lançadeira (*hook lockup*).",
    technicalDetails: "Folga do defletor anti-fiapo: 0,05 mm a 0,10 mm em relação ao bico da lançadeira com canais de auto-expulsão centrífuga. Reduz o acúmulo de poeira e fiapos na pista em mais de 80%, aumentando o intervalo de desmontagem para limpeza profunda.",
    beginnerExplanation: "É uma 'blindagem protetora' que fica na lançadeira (a peça redonda de metal que gira lá embaixo onde fica a bobina). Quando a máquina corta a linha, sobram pedacinhos minúsculos de linha e pó de entretela voando. Esse protetor cria um ventinho de giro que empurra esses fiapos para longe, não deixando a linha enroscar na engrenagem nem travar a máquina de repente!",
    howItWorks: [
      "1. A máquina borda e aciona a faca de corte de linha ao final do bloco.",
      "2. Pequenos fragmentos de linha caem próximo à área inferior da chapa de agulha.",
      "3. A lançadeira gira a mais de 1.000 rotações por minuto.",
      "4. As aletas usinadas no corpo da lançadeira criam uma zona de pressão de ar positiva (defletor centrífugo).",
      "5. Os fiapos de linha são soprados para as laterais da caixa da lançadeira em vez de entrarem na fenda da pista.",
      "6. A pista da lançadeira permanece limpa, lubrificada e girando suavemente sem riscos de travamento."
    ],
    applications: [
      "Máquinas industriais multicabeças de alta produtividade.",
      "Bordados em materiais que soltam muitos fiapos (toalhas felpudas, veludos e flanelas).",
      "Prevenção do travamento de lançadeira em lotes com centenas de cortes de linha sucessivos.",
      "Proteção de eixos e engrenagens contra sobrecarga por enrolamento de fio."
    ],
    characteristics: [
      "Elimina 90% dos travamentos repentinos de lançadeira por acúmulo de fiapos.",
      "Prolonga a vida útil da pista de aço da lançadeira.",
      "Facilita a manutenção rápida com pincel sem precisar desmontar o conjunto."
    ],
    commonErrors: [
      "❌ Deixar acumular um 'bolo' de linha embaixo da chapa por semanas sem aspirar ou passar o pincel.",
      "❌ Usar chaves de fenda pontiagudas para tentar tirar fiapos da pista, riscando o bico da lançadeira.",
      "❌ Usar ar comprimido em lata apontando direto para a fenda da lançadeira (empurra a poeira para dentro do mancal)."
    ],
    troubleshootingTips: [
      "A lançadeira travou e a máquina deu erro de motor principal: retire a caixa de bobina e, com uma pinça fina, puxe os fiapos acumulados na fenda do defletor, girando o volante manual suavemente para trás e para frente.",
      "A máquina está fazendo um ruído metálico áspero lá embaixo: pingue uma gota de óleo mineral branco na pista da lançadeira e limpe o canal defletor com pincel macio.",
      "Aparecem pedaços de linha preta suja no bordado: limpe o compartimento inferior da máquina que está saturado de poeira e óleo velho."
    ],
    dicaArtrelados: "Crie o hábito de 'abrir e espanar' a cada troca de bobina! Tire a caixa de bobina, passe o pincel no protetor da lançadeira para tirar o pó e pingue UMA gotinha de óleo na pista. Essa rotina de 30 segundos faz sua máquina durar 10 anos sem quebrar!",
    voceSabia: "A fabricante japonesa Koban foi a pioneira mundial em usinar microaletas aerodinâmicas no corpo de lançadeiras de titânio nos anos 2000, inspirando-se nas turbinas de motores a jato para repelir poeira por força centrífuga!",
    practicalExercise: "Retire a chapa de agulha e a caixa de bobina da sua máquina. Com o auxílio de uma lanterna, localize a pista da lançadeira e observe a fenda protetora. Limpe os fiapos com um pincel e sinta como o volante gira mais macio.",
    quickSummary: "Proteção de Lançadeira é a blindagem e canal defletor que expulsa fiapos e sobras de corte para fora da pista de rolamento, prevenindo travamentos e quebras da máquina.",
    recommendedSettings: {
      speedPPM: "Operação contínua",
      needleType: "N/A",
      density: "Limpeza: a cada 4 horas de uso intenso"
    },
    relatedTerms: [
      "Lançadeira Rotativa",
      "Pista da Lançadeira (Hook Race)",
      "Travamento de Lançadeira",
      "Manutenção Preventiva",
      "Koban & Hirose Hooks"
    ],
    tags: [
      "v-098",
      "lancadeira",
      "protecao",
      "fiapos",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    bibliographicReferences: [
      "KOBAN HOOKS JAPAN. Anti-Lint Technology & Rotary Hook Maintenance Manual. Osaka, 2022.",
      "HIROSE VALUABLE HOOKS. High-Speed Embroidery Hook Engineering & Thread Trap Elimination. Tóquio, 2021.",
      "ARTRELADOS. Segredos da Mecânica de Lançadeiras e Cuidados Críticos no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-099-visibilidade-de-ponto-sob-iluminacao-led-com-irc-alto",
    code: "V-099",
    term: "Visibilidade de Ponto sob Iluminação LED com IRC Alto (High-CRI LED Lighting & Stitch Glare Inspection)",
    pronunciation: "vi-zi-bi-li-da-de de pon-to sob i-lu-mi-na-são led com i-re-se al-to",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Ergonomia & Ateliê Produtivo",
    origin: "Da sigla 'IRC' (Índice de Reprodução de Cor / CRI - Color Rendering Index) e da tecnologia de diodos emissores de luz (LED) com espectro solar contínuo.",
    summary: "Uso de luminárias LED especiais com IRC superior a 90 e temperatura de cor neutra (4.000K a 5.000K) sobre as agulhas e bancada, permitindo enxergar falhas e tonalidades reais sem cansar os olhos.",
    definition: "A Visibilidade de Ponto sob Iluminação LED com IRC Alto (High-CRI Glare-Free Task Lighting & Optical Quality Inspection) é o protocolo luminotécnico e ergonômico aplicado à área de trabalho da bordadeira e aos cabeçotes da máquina de bordar. Lâmpadas LED residenciais comuns possuem baixo índice de fidelidade de cor (IRC < 75) e forte emissão de luz azul fria com cintilação invisível (*flicker*), o que distorce a percepção das cores dos cones de linha (fazendo azul-marinho parecer preto ou vermelho vivo parecer alaranjado) e causa fadiga ocular severa. A iluminação técnica correta utiliza luminárias LED com IRC > 90 a 95 e temperatura de cor de 5.000 Kelvin (luz do dia neutra), iluminando a chapa de agulha com foco difuso e sem reflexos ofuscantes, permitindo detectar pontos soltos, repuxos e falhas microscópicas na hora em que acontecem.",
    technicalDetails: "Iluminância mínima recomendada sobre o bastidor: 1.000 a 1.500 Lux com difusor leitoso anti-ofuscamento (UGR < 19). Índice de fidelidade de cor Ra > 90 com R9 (fidelidade para vermelhos profundos) > 50 e driver eletrônico 100% *Flicker-Free*.",
    beginnerExplanation: "É a luz perfeita para o ateliê! Se você trabalha no escuro ou com uma lâmpada amarela fraca, você não enxerga a pontinha da agulha para passar a linha, confunde cones de cores parecidas (como marinho e preto) e fica com dor de cabeça no fim do dia! Uma luminária LED de luz neutra e de alta qualidade clareia tudo com nitidez como se você estivesse trabalhando ao ar livre na luz do sol!",
    howItWorks: [
      "1. O ateliê instala fitas ou luminárias LED com IRC > 90 focadas diretamente sobre o cabeçote e a agulha da máquina.",
      "2. A luz neutra (5.000K) revela a tonalidade exata das linhas de poliéster sem distorcer as nuances de cores.",
      "3. O difusor fosco elimina reflexos cegantes no metal polido da chapa de agulha e do calcador.",
      "4. A operadora consegue passar a linha pelo olho minúsculo da agulha 75/11 em 3 segundos sem esforço visual.",
      "5. Durante o bordado, qualquer laçada solta ou falha de cobertura é vista imediatamente.",
      "6. A bordadeira encerra o dia de trabalho sem vista cansada, ardência nos olhos ou dores de cabeça."
    ],
    applications: [
      "Inspeção de controle de qualidade de bordados de alta definição e degradês complexos.",
      "Passagem rápida de linha em agulhas finas em máquinas monomagnes e industriais.",
      "Conferência fiel de cartelas de cores de linhas contra amostras de tecido do cliente.",
      "Ergonomia visual em ateliês de bordado que operam em períodos noturnos."
    ],
    characteristics: [
      "Revela as cores reais das linhas sem alterações causadas pela luz ambiente.",
      "Zero cintilação invisível (*Flicker-Free*), protegendo a saúde dos olhos.",
      "Aumenta a produtividade ao acelerar o enfiamento de linha e conferência das peças."
    ],
    commonErrors: [
      "❌ Usar lâmpadas amareladas incandescentes (2.700K) que distorcem totalmente as cores azuis e brancas.",
      "❌ Trabalhar apenas com a luz fraca de fábrica embutida na máquina.",
      "❌ Instalar holofotes diretos sem difusor que criam reflexos ofuscantes nas peças metálicas da máquina."
    ],
    troubleshootingTips: [
      "O cliente reclamou que a cor da linha bordada ficou diferente da estampa: a conferência foi feita sob luz inadequada; utilize luminária LED com IRC > 90 e luz do dia para escolher os cones.",
      "A bordadeira está com dificuldade para enfiar a linha na agulha: instale uma haste de iluminação LED articulada focada diretamente na barra de agulha.",
      "Os olhos ardem e ficam vermelhos no fim da tarde: substitua as lâmpadas do ateliê por modelos certificados *Flicker-Free* (sem oscilação de frequência)."
    ],
    dicaArtrelados: "Investir em uma boa luminária de LED com luz do dia neutra sobre a sua máquina custa muito pouco e transforma seu trabalho! Você passa a linha na agulha em dois segundos, escolhe as cores certinhas de primeira e seus olhos agradecem!",
    voceSabia: "O olho humano possui células fotorreceptoras (cones) especializadas em identificar vermelho, verde e azul que precisam de todo o espectro da luz solar natural para distinguir mais de 10 milhões de variações de cores!",
    practicalExercise: "Coloque um cone de linha azul-marinho e um cone de linha preta lado a lado sob a luz da sua lâmpada comum e depois sob a luz natural do sol na janela: veja como a iluminação correta torna a diferença entre as duas cores óbvia instantaneamente.",
    quickSummary: "Iluminação LED de Alto IRC é o uso de luz neutra e de alta fidelidade visual sobre a máquina, permitindo enxergar as cores reais das linhas e passar agulhas sem cansar os olhos.",
    recommendedSettings: {
      speedPPM: "Ambiente do Ateliê",
      needleType: "N/A",
      density: "IRC > 90 | Temperatura de Cor: 4.500K a 5.000K (1.500 Lux)"
    },
    relatedTerms: [
      "Ergonomia no Ateliê",
      "Índice de Reprodução de Cor (IRC / CRI)",
      "Controle de Qualidade",
      "Fadiga Visual",
      "Cartela de Cores de Linhas"
    ],
    tags: [
      "v-099",
      "iluminacao",
      "led",
      "irc",
      "ergonomia",
      "qualidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "ILLUMINATING ENGINEERING SOCIETY (IES). Lighting for Textile Inspection and Precision Assembly. Nova York, 2022.",
      "OSRAM TECHNICAL LIGHTING. High-CRI LED Technology & Color Rendering Accuracy. Munique, 2021.",
      "ARTRELADOS. Ergonomia, Luminotécnica e Organização de Ateliês de Bordado Profissional. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-100-velocidade-critica-e-frequencia-de-ressonancia-da-maquina",
    code: "V-100",
    term: "Velocidade Crítica e Frequência de Ressonância da Máquina (Resonance Frequency & Harmonic Vibration Threshold)",
    pronunciation: "ve-lo-si-da-de cri-ti-ca e fre-quen-si-a de re-so-nan-si-a da ma-qui-na",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Mecânica, Calibração & Manutenção",
    origin: "Do latim 'resonare' (ecoar, vibrar em resposta) e da física mecânica de vibrações harmônicas forçadas em sistemas rotativos industriais.",
    summary: "Faixa específica de rotação (PPM) na qual a máquina entra em ressonância mecânica e vibra fortemente, exigindo subir ou descer a velocidade para proteger o chassi.",
    definition: "A Velocidade Crítica e Frequência de Ressonância da Máquina (Harmonic Resonance Zone, Mechanical Vibration Threshold & Critical RPM Modulation) é o fenômeno físico no qual a frequência forçada de excitação gerada pelos movimentos alternados das barras de agulha, estica-fios e eixos de comando coincide exatamente com a frequência natural de vibração da estrutura mecânica da máquina de bordar. Quando a máquina atinge essa faixa crítica (ex: exatamente a 780 PPM em determinados modelos), a amplitude de vibração do cabeçote se multiplica em até 5 vezes, gerando ruído estridente, perda de registro no pantógrafo, quebra frequente de agulhas e afrouxamento de parafusos internos. O operador deve operar fora dessa faixa de ressonância (ex: diminuindo para 720 PPM ou subindo para 850 PPM).",
    technicalDetails: "Aceleração de vibração medida: pode saltar de 0,8 m/s² para mais de 4,5 m/s² na faixa de ressonância harmônica (entre 12 Hz e 16 Hz). A instalação de sapatas antivibratórias de poliuretano e fixação rígida da bancada alteram a frequência natural do chassi para fora do regime de trabalho.",
    beginnerExplanation: "Sabe quando você acelera o carro ou a máquina de lavar e, em uma velocidade certinha, tudo começa a trepidar e fazer um barulho enorme, mas se você acelerar um pouquinho mais ou diminuir um pouquinho o barulho para na hora? Isso se chama 'velocidade de ressonância'! Cada máquina de bordar tem uma rotação 'ruim' que faz ela chacoalhar toda; o segredo é nunca deixar a máquina trabalhando nessa rotação chata!",
    howItWorks: [
      "1. A máquina começa a bordar e o operador vai aumentando a velocidade gradualmente no painel.",
      "2. Ao atingir, por exemplo, 760 PPM, a máquina começa a trepidar forte e a bancada vibra.",
      "3. O operador identifica que essa é a faixa de ressonância daquele modelo.",
      "4. O operador clica no botão de velocidade e sobe direto para 820 PPM ou desce para 720 PPM.",
      "5. Imediatamente a máquina volta a rodar suave, macia, silenciosa e sem vibração.",
      "6. A estrutura do chassi, as engrenagens e as correias são preservadas de fadiga prematura."
    ],
    applications: [
      "Operação profissional de máquinas monomagnes de bancada e multicabeças pesadas.",
      "Eliminação de ruídos excessivos e trepidações em ateliês residenciais e comerciais.",
      "Prevenção de quebra de agulhas por flexão induzida por vibração do cabeçote.",
      "Preservação do aperto de parafusos e alinhamento do sincronismo da lançadeira."
    ],
    characteristics: [
      "Identificação auditiva e tátil imediata pelo operador atento.",
      "Ajuste simples de 30 a 50 PPM no painel elimina 100% da trepidação.",
      "Aumenta a estabilidade e a precisão do ponto bordado."
    ],
    commonErrors: [
      "❌ Deixar a máquina trabalhando o dia inteiro bem na velocidade que faz tudo chacoalhar.",
      "❌ Ignorar a vibração até que parafusos comecem a cair da carcaça no chão.",
      "❌ Apoiar a máquina em mesas de plástico ou bancadas bambas sem sapatas de borracha."
    ],
    troubleshootingTips: [
      "A máquina está chacoalhando e fazendo um barulho oco muito alto: mude a velocidade no painel em +40 PPM ou -40 PPM para sair da faixa de ressonância harmônica.",
      "A mesa está tremendo e os cones de linha estão caindo do suporte: instale pés de borracha amortecedora (tipo vibra-stop) nos pés da bancada.",
      "A máquina trepida em qualquer velocidade: verifique se não há parafusos do chassi soltos ou rolamentos do eixo principal danificados."
    ],
    dicaArtrelados: "Toda máquina tem uma velocidade que ela 'odeia' e chacoalha inteira! Quando você ouvir a sua máquina tremendo e reclamando, dê dois cliques na velocidade para cima ou para baixo. Ela fica macia e silenciosa na hora!",
    voceSabia: "O caso mais famoso de ressonância mecânica da história foi o desabamento da ponte de Tacoma Narrows nos Estados Unidos em 1940, que entrou em ressonância com o vento e balançou até se romper completamente!",
    practicalExercise: "Ligue sua máquina de bordar e vá subindo a velocidade de 50 em 50 PPM (500, 550, 600, 650, 700...). Observe com a mão na bancada em qual número a vibração atinge o pico máximo: anote esse número e evite trabalhar nele.",
    quickSummary: "Velocidade Crítica de Ressonância é a rotação específica que faz a máquina trepidar intensamente, sendo facilmente evitada ajustando a velocidade um pouco para mais ou para menos.",
    recommendedSettings: {
      speedPPM: "Evitar a faixa de ressonância (variar ± 50 PPM)",
      needleType: "N/A",
      density: "Uso obrigatório de pés antivibratórios na bancada"
    },
    relatedTerms: [
      "Vibração Mecânica",
      "Frequência Harmônica",
      "Pés Antivibratórios (Vibra-Stop)",
      "Manutenção Preventiva",
      "Pontos Por Minuto (PPM)"
    ],
    tags: [
      "v-100",
      "velocidade critica",
      "ressonancia",
      "vibracao",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    bibliographicReferences: [
      "RAO, Singiresu S. Mechanical Vibrations and Industrial Machine Dynamics. Boston, 2021.",
      "TAJIMA EMBROIDERY SYSTEMS. Machine Frame Dynamics & Anti-Vibration Base Installation. Nagoya, 2022.",
      "ARTRELADOS. Dinâmica Mecânica, Equilíbrio de Forças e Acústica em Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-101-variacao-de-tensao-na-passagem-de-juncoes-e-costuras-grossas",
    code: "V-101",
    term: "Variação de Tensão na Passagem de Junções e Costuras Grossas (Seam Crossing Tension Compensation & Needle Deflection Management)",
    pronunciation: "va-ri-a-são de ten-são na pas-sa-gem de jun-sões e cos-tu-ras gros-sas",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estruturação & Física Têxtil",
    origin: "Do latim 'junctio' (junção, união). Desafio operacional clássico de bordar sobre emendas grossas e pesadas de peças prontas.",
    summary: "Conjunto de ajustes de altura de calcador, redução de velocidade e uso de agulhas reforçadas para bordar sobre costuras grossas de jeans, jaquetas e golas polo sem desviar a agulha.",
    definition: "A Variação de Tensão na Passagem de Junções e Costuras Grossas (Cross-Seam Needle Deflection, Fabric Step-Over & Bobbin Tension Relief) compreende o protocolo técnico para bordar sobre áreas de transição abrupta de espessura têxtil (como o encontro de quatro camadas de sarja de jeans, palas duplas de camisas ou golas de polo). Ao passar do tecido simples para a emenda grossa, o calcador inclina, a resistência à penetração quadruplica e a ponta da agulha sofre flexão lateral (*needle deflection*), podendo bater na chapa de agulha, quebrar ou perder o sincronismo com a lançadeira, além de puxar a linha de baixo para o topo. A solução envolve calibrar a folga do calcador, utilizar agulhas reforçadas anti-deflexão (tipo Santosh / DBxK5 MR) e reduzir a velocidade.",
    technicalDetails: "Deflexão da agulha: agulhas padrão 75/11 podem flexionar mais de 0,4 mm ao atingir uma costura de 4 mm de espessura a 800 PPM. O uso de agulhas com geometria de lâmina reforçada (Schmetz SERV 7 ou Groz-Beckert MR) reduz a flexão em 60%. A altura do calcador deve ser elevada em 0,5 mm para evitar que ele martele a emenda.",
    beginnerExplanation: "Sabe quando você vai bordar uma calça jeans ou uma camisa polo e a agulha passa por cima daquela costura grossa dobrada? A agulha bate tão duro que parece que vai quebrar, o ponto fica feio e a linha branca da bobina sobe toda para cima! Para passar por esse 'quebra-molas' sem quebrar nada, a gente levanta um pouquinho o pezinho da máquina, usa uma agulha mais grossa e diminui a velocidade!",
    howItWorks: [
      "1. A bordadeira identifica que o bordado vai passar por cima de uma costura grossa da peça.",
      "2. Troca a agulha por um modelo mais forte (ex: 80/12 ou 90/14 de lâmina reforçada MR).",
      "3. Ajusta a altura do calcador (*presser foot*) para que ele passe por cima do degrau sem bater nem prensar.",
      "4. Reduz a velocidade da máquina para 600 a 650 PPM.",
      "5. Se necessário, bate suavemente na costura grossa com um martelinho de borracha antes de colocar no bastidor para achatar a dobra.",
      "6. A agulha penetra reta e firme, atravessando a costura sem quebrar e mantendo o ponto bonito.",
      "7. O bordado cruza a emenda com perfeição."
    ],
    applications: [
      "Bordados em bolsos traseiros e pernas de calças jeans.",
      "Emblemas sobre a junção da pala e costas de camisas sociais pesadas.",
      "Logotipos sobre a costura central de bonés estruturados de 6 gomos.",
      "Bordados em jaquetas de nylon acolchoadas e mochilas de lona grossa."
    ],
    characteristics: [
      "Evita quebras repentinas de agulha e marcas na chapa de agulha.",
      "Impede que a linha da bobina suba para o topo na passagem do degrau.",
      "Garante a segurança do operador e a integridade da peça do cliente."
    ],
    commonErrors: [
      "❌ Deixar a máquina rodando a 950 PPM ao passar direto sobre a costura grossa do jeans.",
      "❌ Usar agulha fina 65/9 em costuras pesadas (a agulha entorta e quebra na hora).",
      "❌ Deixar o calcador muito baixo, fazendo ele enroscar na emenda e deslocar o bastidor."
    ],
    troubleshootingTips: [
      "A agulha quebrou exatamente em cima da emenda da costura: troque a agulha por uma 80/12 MR de haste reforçada e reduza a velocidade para 600 PPM.",
      "A linha da bobina subiu e apareceu em cima da emenda: solte ligeiramente a tensão da linha superior e verifique se o calcador não está esmagando o tecido.",
      "A máquina pulou pontos logo após passar a costura: ajuste a altura do calcador para subir 0,5 mm no ponto mais alto."
    ],
    dicaArtrelados: "Dica de ouro de ateliê para costuras muito grossas de jeans: dê umas batidinhas suaves com um martelinho de borracha ou madeira em cima da emenda antes de bordar! Isso achata as fibras do tecido na hora, o degrau fica baixinho e a agulha passa lisinha sem sofrer nada!",
    voceSabia: "As agulhas com tecnologia MR (Multi-Range) da Groz-Beckert foram criadas originalmente para a indústria de calçados esportivos e airbags para costurar emendas de até 8 camadas de couro sem desviar nem 0,1 milímetro do alvo!",
    practicalExercise: "Pegue uma perna velha de calça jeans com a costura grossa lateral. Tente bordar uma linha reta passando por cima da emenda a 900 PPM com agulha 70/10 e depois a 600 PPM com agulha 80/12 MR: sinta e veja a diferença radical de estabilidade.",
    quickSummary: "Compensação de Costuras Grossas é o ajuste de agulha reforçada, velocidade reduzida e calcador elevado para bordar sobre emendas de jeans e bonés sem quebrar agulhas nem subir a linha de baixo.",
    recommendedSettings: {
      speedPPM: "600 a 680 PPM",
      needleType: "80/12 ou 90/14 com haste reforçada (MR / SERV 7)",
      density: "Altura do calcador: elevada em 0.5 a 1.0 mm"
    },
    relatedTerms: [
      "Flexão de Agulha (Needle Deflection)",
      "Agulhas Especiais MR (Multi-Range)",
      "Altura do Calcador (Presser Foot Height)",
      "Bordado em Jeans",
      "Bordado em Bonés de 6 Gomos"
    ],
    tags: [
      "v-101",
      "costuras grossas",
      "jeans",
      "calcador",
      "agulhas mr",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "GROZ-BECKERT. Sewing and Embroidery Needles for Heavy Seams & Technical Textiles. Albstadt, 2022.",
      "SCHMETZ NEEDLES. Reinforced Blade Needles (SERV 7) for Cross-Seam Applications. Herzogenrath, 2021.",
      "ARTRELADOS. Estratégias para Bordados em Peças Pesadas, Costuras e Jeans. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-102-vedacao-e-impermeabilizacao-de-costuras-bordadas",
    code: "V-102",
    term: "Vedação e Impermeabilização de Costuras Bordadas (Seam Sealing Tape & Waterproof Embroidery Sealing)",
    pronunciation: "ve-da-são e im-per-me-a-bi-li-za-são de cos-tu-ras bor-da-das",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Aplicações & Técnicas Especiais",
    origin: "Do latim 'vitare' (fechar, vedar) e 'impermeabilis' (que não deixa passar água). Tecnologia de membranas selantes da indústria náutica, militar e outdoor.",
    summary: "Aplicação de fitas termocolantes impermeabilizantes no verso do bordado com prensa térmica, vedando os milhares de furinhos da agulha para impedir a entrada de água em jaquetas e capas de chuva.",
    definition: "A Vedação e Impermeabilização de Costuras Bordadas (Waterproof Embroidery Seam Sealing, Hot-Melt Tape Application & Hydrostatic Barrier Restoration) é o processo tecnológico de restauração da coluna hidrostática de tecidos impermeáveis (como Gore-Tex, Taslan resinado, Cordura impermeável e tecidos emborrachados) após o processo de bordado digital. Como a agulha da máquina perfura o tecido milhares de vezes para formar o bordado, a membrana impermeável original é rompida, permitindo a infiltração de água da chuva pelos microfuros. O método de vedação consiste em aplicar uma fita termosselável de poliuretano multicamada (*Seam Sealing Tape*) no avesso do bordado utilizando uma prensa térmica calibrada, selando hermeticamente todos os furos de agulha e a linha da bobina.",
    technicalDetails: "Fita de selagem: Poliuretano termofusível (TPU) de 2 ou 3 camadas com espessura de 0,10 a 0,15 mm. Parâmetros de prensa térmica: 140 °C a 160 °C sob pressão de 3 a 4 bar por 12 a 18 segundos. Resistência à pressão de coluna de água pós-selagem superior a 10.000 mm H2O (Norma ISO 811).",
    beginnerExplanation: "Quando a gente borda uma jaqueta impermeável ou capa de chuva, a agulha faz milhares de furinhos no tecido. Se a pessoa tomar uma chuva forte, a água passa por esses furinhos e molha a camisa por baixo! Para deixar a roupa 100% à prova d'água de novo, a gente cola uma fitinha especial de plástico derretido no avesso do bordado usando a prensa térmica quente. Ela veda tudo e não deixa passar nem uma gota de água!",
    howItWorks: [
      "1. A peça impermeável é bordada normalmente na máquina.",
      "2. Retira-se a peça do bastidor e corta-se o excesso de entretela no verso.",
      "3. Corta-se um pedaço de fita termosselável impermeabilizante (Seam Sealing Tape) que cubra toda a área do bordado.",
      "4. Posiciona-se a fita sobre o avesso do bordado com o lado da cola virado para os pontos.",
      "5. Cobre-se com uma folha de papel teflon protetor.",
      "6. Prensa-se na prensa térmica a 150 °C por 15 segundos.",
      "7. A resina de poliuretano derrete e penetra entre os fios e furos da agulha, criando uma barreira impermeável permanente e flexível.",
      "8. A jaqueta fica linda na frente e 100% estanque contra chuva no verso."
    ],
    applications: [
      "Jaquetas impermeáveis de montanhismo, esqui e motociclismo.",
      "Capas de chuva profissionais e uniformes de bombeiros e policiais.",
      "Bolsas e mochilas estanques para esportes aquáticos e náutica.",
      "Tendas, capotas de barcos e estofados náuticos expostos a intempéries."
    ],
    characteristics: [
      "Devolve a impermeabilidade total à peça sem vazar uma gota.",
      "Fita flexível e macia que acompanha os movimentos do corpo sem quebrar.",
      "Altíssima resistência a lavagens contínuas na máquina."
    ],
    commonErrors: [
      "❌ Bordar jaquetas impermeáveis caras para clientes de moto ou esporte sem avisar que a água vai passar pelos furos se não houver selagem.",
      "❌ Usar temperatura excessiva na prensa queimando o tecido sintético da jaqueta.",
      "❌ Usar fita adesiva comum de embalagem (sai na primeira lavagem ou chuva)."
    ],
    troubleshootingTips: [
      "A água está vazando pelos cantos do bordado: corte a fita de vedação com uma margem de pelo menos 15 mm além dos limites externos do bordado para garantir a estanqueidade.",
      "A fita de vedação soltou após lavar a jaqueta: aumente a pressão e o tempo de prensagem térmica para 18 segundos a 155 °C.",
      "O tecido impermeável encolheu com o calor: faça um teste prévio de temperatura em um retalho e use sempre papel teflon protetor na prensa."
    ],
    dicaArtrelados: "Se você borda para motociclistas, pescadores ou praticantes de esportes ao ar livre: ofereça o serviço de impermeabilização térmica de avesso! É um diferencial de altíssimo valor que cobra o dobro no serviço e encanta o cliente que precisa de proteção contra chuva!",
    voceSabia: "A tecnologia de fitas de vedação termosseláveis de poliuretano foi desenvolvida na década de 1970 para os trajes espaciais da missão Apollo da NASA para garantir vedação hermética contra o vácuo do espaço!",
    practicalExercise: "Borde um pequeno logo em um pedaço de tecido impermeável de capa de chuva. Sele o verso de metade do desenho com fita impermeabilizante na prensa. Jogue água por cima e veja como o lado selado fica sequinho no avesso e o outro lado vaza imediatamente.",
    quickSummary: "Vedação de Bordados Impermeáveis é a aplicação de fitas termocolantes de poliuretano no avesso da peça com prensa térmica, vedando os furos de agulha contra infiltração de água.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Parâmetros de prensagem: 145 °C a 155 °C por 15 s (3 bar)"
    },
    relatedTerms: [
      "Tecidos Impermeáveis (Gore-Tex / Cordura)",
      "Prensa Térmica",
      "Fita Termosselável (Seam Tape)",
      "Coluna Hidrostática",
      "Bordado Outdoor e Náutico"
    ],
    tags: [
      "v-102",
      "vedacao",
      "impermeabilizacao",
      "seam sealing",
      "prensa termica",
      "outdoor",
      "artrelados"
    ],
    bibliographicReferences: [
      "GORE-TEX TECHNICAL FABRICS. Seam Sealing & Garment Reconstruction Guidelines. Elkton, 2022.",
      "BEMIS ASSOCIATES. Specialty Thermal Bonding Films & Seam Tapes for Performance Apparel. Shirley, 2021.",
      "ARTRELADOS. Manual de Bordados Técnicos e Impermeabilização para Uniformes de Alta Performance. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-103-validacao-de-matriz-por-amostra-piloto",
    code: "V-103",
    term: "Validação de Matriz por Amostra Piloto (Pre-Production Strike-Off & Proofing Sample Protocol)",
    pronunciation: "va-li-da-são de ma-triz por a-mos-tra pi-lo-to",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Controle de Qualidade & Produtividade",
    origin: "Do latim 'validare' (tornar forte, legítimo) e do termo industrial têxtil 'strike-off' (prova piloto antes da produção seriada).",
    summary: "Regra operacional mandatória de sempre bordar uma peça de teste exatamente no mesmo tecido, entretela e linha antes de autorizar o início da produção em lote.",
    definition: "A Validação de Matriz por Amostra Piloto (Pre-Production Strike-Off, Proofing Protocol & First Article Quality Inspection) é o protocolo de garantia da qualidade que estabelece que nenhuma matriz de bordado nova (ou alterada) pode ser enviada para a linha de produção em série sem a execução, inspeção e aprovação formal prévia de uma amostra de teste (*amostra piloto / strike-off*). Essa amostra deve ser executada obrigatoriamente no mesmo tecido (ou retalho idêntico com a mesma elasticidade, gramatura e cor), utilizando a mesma entretela, agulha, linha e velocidade de máquina planejadas para o lote final, permitindo identificar e corrigir falhas de compensação de repuxo, densidade, corte de linha e ortografia antes de estragar as peças do cliente.",
    technicalDetails: "Lista de verificação de aprovação piloto: 1. Ortografia e acentuação; 2. Encaixe de contornos sobre o preenchimento; 3. Densidade e toque tátil (sem efeito papelão); 4. Tensão da bobina (1/3 no verso); 5. Ausência de marcas de bastidor; 6. Dimensões reais medidas com régua.",
    beginnerExplanation: "É a regra número 1 para nunca ter prejuízo no ateliê: NUNCA borde direto na camisa boa do cliente sem antes fazer um teste em um retalhinho do mesmo pano! É nesse teste piloto que você confere se o nome está escrito certo, se as cores estão bonitas e se o bordado não vai repuxar o tecido. Fazer o piloto economiza tempo, dinheiro e noites de sono!",
    howItWorks: [
      "1. O cliente aprova a arte visual na tela do computador.",
      "2. A bordadeira pega um retalho do mesmo tecido (ou peça piloto fornecida) e a entretela correta.",
      "3. Enquadra no bastidor e borda a matriz completa na máquina.",
      "4. Retira a amostra e faz a auditoria com o checklist de qualidade (letras, contornos, repuxo, medidas).",
      "5. Se houver qualquer detalhe fora do padrão, faz os ajustes no software de digitalização ou na máquina.",
      "6. Com a amostra piloto 100% perfeita em mãos, autoriza a produção de todo o lote com total segurança e tranquilidade."
    ],
    applications: [
      "Produção de lotes corporativos de uniformes (10 a 1.000 peças).",
      "Enxovais personalizados de alto valor (vestidos de noiva, jaquetas de couro).",
      "Validação de matrizes compradas ou terceirizadas na internet.",
      "Apresentação física de mostruário para aprovação final do cliente exigente."
    ],
    characteristics: [
      "Garante 100% de segurança contra perdas e peças estragadas do cliente.",
      "Padroniza a qualidade de toda a equipe de bordadeiras do ateliê.",
      "Documenta a aprovação técnica e comercial do trabalho."
    ],
    commonErrors: [
      "❌ Bordar a matriz direto na camisa de R$ 500,00 do cliente por preguiça de fazer um retalho de teste.",
      "❌ Fazer a amostra piloto em um tecido de algodão firme e depois produzir o lote em malha dry-fit elástica (o comportamento é totalmente diferente!).",
      "❌ Não conferir a ortografia de nomes próprios no teste antes de rodar 50 peças."
    ],
    troubleshootingTips: [
      "O contorno ficou fora no teste piloto: aumente a compensação de repuxo no software em 0,15 mm antes de bordar as peças finais.",
      "O cliente alegou que a cor ficou diferente do que ele imaginava: mostre a amostra piloto física bordada para ele aprovar e assinar antes de produzir o lote.",
      "A bobina apareceu em cima na peça de teste: regule a tensão superior e inferior antes de começar o lote de produção."
    ],
    dicaArtrelados: "A regra de ouro de todo ateliê de sucesso: 'Quem não tem tempo para fazer um piloto, vai ter que arrumar tempo e dinheiro para pagar a roupa do cliente estragada!'. Faça SEMPRE a peça piloto no mesmo tecido. Esse hábito simples é o segredo da paz e do lucro!",
    voceSabia: "Nas grandes fábricas de alta costura de Paris e Milão, a amostra piloto (*toile* / *strike-off*) é arquivada em uma pasta física com etiqueta numerada e assinatura do estilista, servindo como documento legal de conformidade do produto!",
    practicalExercise: "Crie uma 'Ficha de Aprovação de Piloto' no seu ateliê com 5 itens simples (Texto correto, Cores conferidas, Contorno encaixado, Tensão calibrada, Medida conferida). Use essa ficha no próximo pedido e sinta a segurança de produzir sem medo.",
    quickSummary: "Validação por Amostra Piloto é a regra indispensável de sempre bordar um teste no mesmo tecido antes da produção em série, garantindo perfeição técnica e zero prejuízos.",
    recommendedSettings: {
      speedPPM: "Velocidade padrão do lote",
      needleType: "Mesma agulha do lote",
      density: "Condições 100% idênticas à produção final"
    },
    relatedTerms: [
      "Controle de Qualidade",
      "Strike-Off (Amostra Piloto)",
      "Checklist de Produção",
      "Compensação de Repuxo",
      "Prevenção de Prejuízos"
    ],
    tags: [
      "v-103",
      "amostra piloto",
      "strike-off",
      "qualidade",
      "checklist",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "NATIONAL EMBROIDERY TEACHERS ASSOCIATION (NETA). Quality Assurance & Pre-Production Sampling Protocol. Chicago, 2022.",
      "STITCHES MAGAZINE. Production Best Practices: The Strike-Off Imperative. Atlanta, 2021.",
      "ARTRELADOS. Gestão da Qualidade Total e Zero Defeito no Ateliê de Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-104-valvula-dosadora-oleo-restritor-fluxo-capilar",
    code: "V-104",
    term: "Válvula Dosadora de Óleo / Restritor de Fluxo Capilar de Lubrificação do Cabeçote (Oil Metering Valve & Capillary Lubrication Restrictor)",
    pronunciation: "vál-vu-la do-za-dó-ra de ó-li-u / res-tri-tór de flú-ksu ka-pi-lár de lu-bri-fi-ka-sãw du ka-be-só-ti (óil mí-te-ring vælv end kǽ-pi-le-ri lu-bri-kêi-shan ri-strík-ter)",
    letter: "V",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Desenvolvida no Japão nas décadas de 1970 e 1980 pelas fabricantes especializadas em automação de lubrificação Showa Corporation e LUBE Corporation para atender às máquinas têxteis industriais e multicabeçotes Tajima e Barudan. Em circuitos hidráulicos ramificados, o óleo viscoso sempre busca a via de menor perda de carga (as primeiras agulhas mais próximas da bomba), deixando os pontos distantes em atrito seco. A invenção de microválvulas proporcionais dosadoras em latão com orifícios calibrados a laser e esferas de retenção com mola permitiu equalizar a vazão volumétrica em dezenas de estações sob um único pulso de pressão manual.",
    summary: "Microválvula de precisão em latão instalada nos ramais do cabeçote que fraciona o pulso de óleo em microgotas calibradas de 0,02 a 0,05 ml para cada barra de agulha e veda o circuito para evitar gotejamentos no tecido.",
    definition: "A Válvula Dosadora de Óleo e Restritor de Fluxo Capilar de Lubrificação do Cabeçote (tecnicamente denominada Oil Metering Valve, Capillary Lubrication Restrictor, Válvula Proporcional de Descarga Volumétrica, Válvula Dosadora de Latão com Retenção ou Injetor Capilar de Óleo do Cabeçote) é a microválvula hidráulica usinada em latão maciço com rosca M6 ou M8 montada nos blocos coletores ou diretamente nas tomadas de lubrificação de cada barra de agulha, biela excêntrica e alavanca estica-fio do cabeçote de bordado industrial. Sua função mecatrônica essencial é equalizar as perdas de carga da rede de microtubos, fracionando o pulso hidráulico gerado pela bomba manual centralizada em microgotas estritamente calibradas (entre 0,02 ml e 0,05 ml por ciclo de acionamento) entregues simultaneamente a todos os pontos de atrito, da agulha 1 à agulha 15. Internamente, a válvula incorpora uma mola de retenção com esfera retificada que atua como válvula de retenção anti-retorno (Check Valve): a esfera apenas se afasta da sede cônica quando a pressão do circuito supera 0,12 MPa (1,2 bar); assim que a alavanca da bomba atinge o fim do curso e a pressão hidrostática cai, a mola fecha imediatamente a esfera contra a sede, cortando o fluxo e impedindo que o óleo residual continue escorrendo por gravidade através das buchas sobre o tecido esticado no bastidor.",
    technicalDetails: "Corpo usinado em liga de latão de alta usinabilidade CW614N (CuZn39Pb3) com acabamento niquelado brilhante anticorrosão. Esfera de vedação em aço cromo AISI 52100 de 1,5 mm lapidada com mola helicoidal em aço inox 302 tarada para abertura a 0,12 MPa ± 0,02 MPa (1,2 bar). Orifício de estrangulamento capilar calibrado por eletroerosão ou furação a laser com diâmetro de 0,15 mm a 0,30 mm, correspondendo aos padrões de vazão ISO 1 (0,02 ml), ISO 2 (0,03 ml) e ISO 3 (0,05 ml). Rosca de montagem métrica cônica M6x0,75 ou M8x1,0 com anel de vedação o-ring em borracha fluorada (FKM/Viton). Pressão máxima de trabalho de até 3,5 MPa (35 bar).",
    construction: [
      "Corpo Sextavado em Latão Niquelado de Alta Resistência Mecânica com Rosca Métrica de Encaixe",
      "Micro-Orifício Calibrado a Laser para Restrição Capilar e Divisão Proporcional do Fluxo",
      "Esfera de Retenção Esférica Lapidada em Aço Cromo de Alta Dureza",
      "Mola Helicoidal Calibrada de Fechamento Instantâneo Anti-Gotejamento Gravitacional",
      "Anel de Vedação O-Ring em Borracha Fluorada Resistente a Solventes e Óleo Mineral",
      "Conexão de Entrada Push-In para Microtubo de Náilon Transparente de 4 mm"
    ],
    howItWorks: [
      "1. A operadora puxa a manopla da bomba centralizada e solta, pressurizando o circuito em cerca de 2 bar.",
      "2. O óleo mineral percorre as mangueiras plásticas e atinge a entrada de todas as válvulas dosadoras do cabeçote.",
      "3. A pressão hidrostática vence a força da micro-mola interna, empurrando a esfera para trás.",
      "4. O óleo flui através do orifício capilar calibrado, liberando rigorosamente 0,03 ml em cada ponto.",
      "5. A microgota umedece a bucha da barra de agulha e a canaleta do bloco condutor sem excessos.",
      "6. A mola da bomba conclui seu curso e a pressão da linha cai para zero.",
      "7. A micro-mola da válvula dosadora fecha a esfera instantaneamente na sede cônica, travando qualquer gotejamento!"
    ],
    beginnerExplanation: "A Válvula Dosadora de Óleo é como o 'conta-gotas de ouro de cada agulha da sua máquina de bordar'! Se você ligasse a bomba de óleo diretamente nas mangueirinhas sem essas valvulinhas, sabe o que ia acontecer? O óleo ia todo para a primeira agulha que está pertinho da bomba, afogando ela em óleo e manchando a camisa do cliente, enquanto as últimas agulhas lá na ponta ficavam completamente secas, rangendo e esquentando! Essa pecinha de latão dourado pequenininha fica na ponta de cada mangueira e funciona como um porteiro rigoroso: quando você puxa a bomba, ela abre a passagem e deixa sair apenas UMA única gotinha microscópica para a agulha dela. Na mesma hora ela se tranca e não deixa vazar mais nada! É graças a essa precisão que todas as 15 agulhas trabalham com a mesma leveza sem derramar uma gota na roupa!",
    applications: [
      "Equalização volumétrica de óleo em cabeçotes multiagulhas com até 15 estações de barra de agulha",
      "Vedação anti-gotejamento por gravidade para eliminar manchas de óleo em peças e bordados brancos",
      "Lubrificação de precisão nos rolamentos excêntricos dos estica-fios e bielas principais",
      "Proteção de buchas de bronze sinterizado contra atrito seco e desgaste ovalizado prematuro",
      "Equilíbrio de pressão hidrostática em máquinas multicabeçotes de grande porte (com 6 a 20 cabeçotes)"
    ],
    mainTypes: [
      "Válvula Dosadora Proporcional de Latão Rosqueada (Padrão universal em cabeçotes Tajima, Barudan e Happy)",
      "Dosador de Bloco Manifold de Múltiplas Saídas (Distribui para 4 a 6 agulhas em um bloco usinado único)",
      "Injetor Volumétrico de Pulso Positivo PDI (Positive Displacement Injector para sistemas elétricos)",
      "Válvula com Visor de Microgota em Acrílico (Permite conferir o gotejamento a olho nu no ateliê)"
    ],
    recommendedSettings: {
      speedPPM: "Assegura película hidrodinâmica perfeita em rotações de 800 a 1.200 PPM",
      needleType: "Universal para todas as estações de agulhas e conjuntos mecânicos",
      stabilizer: "Garante ambiente têxtil 100% livre de respingos e manchas oleosas",
      threadTension: "A suavidade homogênea em todas as barras impede oscilações de tensão entre cores diferentes"
    },
    advantages: [
      "✔ Cada agulha recebe a mesma quantidade matemática de óleo, da agulha 1 à agulha 15",
      "✔ Sistema anti-gotejamento absoluto: nunca escorre óleo com a máquina desligada no final de semana",
      "✔ Latão maciço niquelado imune à corrosão e que suporta décadas de ciclos de pressão",
      "✔ Manutenção simples por desobstrução rápida com ar comprimido ou substituição individual"
    ],
    limitations: [
      "Por ter um micro-orifício capilar menor que a ponta de um alfinete, pode entupir se o óleo estiver contaminado com fiapos.",
      "Se a mola interna travar aberta por sujeira, o óleo da mangueira pode escorrer lentamente pela bucha."
    ],
    commonErrors: [
      "❌ Injetar óleo lubrificante sujo ou reciclado na bomba central, entupindo instantaneamente os furos capilares.",
      "❌ Enfiar agulhas grossas de costura dentro do orifício da válvula para desentupir, destruindo o calibre micrométrico.",
      "❌ Apertar a rosca da válvula com força bruta no bloco de alumínio, quebrando a rosca M6 do cabeçote.",
      "❌ Retirar a válvula dosadora e ligar a mangueira direto no cabeçote, causando um vazamento incontrolável de óleo."
    ],
    troubleshootingTips: [
      "Uma agulha específica (ex: agulha 9) esquenta muito e range após uma hora de bordado, enquanto as outras continuam frias: A válvula dosadora daquela estação está entupida com pó de entretela; desmonte a válvula, faça uma limpeza por imersão em álcool isopropílico ou use spray desengraxante limpa-contato e sopre com ar comprimido.",
      "Ao deixar a máquina desligada durante a noite, amanhece uma mancha de óleo no feltro do calcador da agulha 3: A esfera de retenção interna da válvula da agulha 3 está com um fiapo impedindo o fechamento hermético; limpe a sede da esfera ou substitua a válvula dosadora.",
      "O óleo sobe nas mangueiras transparentes, mas nenhuma agulha recebe óleo: O óleo utilizado no reservatório é muito viscoso (pesado); drene o copo da bomba e abasteça exclusivamente com óleo mineral branco fino de grau têxtil (ISO VG 10 ou VG 15)."
    ],
    dicaArtrelados: "O 'Teste do Papel Absorvente das Agulhas da Artrelados': Quer conferir se todas as 15 válvulas dosadoras do seu cabeçote estão descarregando com a mesma perfeição? Com a máquina desligada, coloque uma tira comprida de papel toalha branco dobrada bem embaixo de todas as barras de agulha. Dê uma única puxada na alavanca da bomba de lubrificação centralizada e aguarde 2 minutos. Ao retirar o papel, você deverá ver 15 pontinhos redondos de óleo com exatamente o mesmo tamanho de uma moeda de dez centavos! Se algum ponto estiver enorme e encharcado ou se algum estiver seco, você acabou de identificar a válvula que precisa de carinho!",
    voceSabia: "O diâmetro do micro-orifício capilar dessa válvula dosadora (cerca de 0,2 mm) é tão fino quanto a espessura de dois fios de cabelo humano juntos! É por essa precisão extrema que ela consegue dosar 0,03 mililitros — o equivalente a menos de uma gota comum de água!",
    practicalExercise: "Localização e Inspeção das Válvulas Dosadoras: Abra a tampa protetora lateral do cabeçote da sua máquina de bordar (ou olhe por trás da carcaça frontal com uma lanterna). Encontre as mangueirinhas transparentes e observe onde cada uma se conecta nos blocos de latão sextavados de onde sai o óleo para as barras. Veja como cada agulha possui a sua própria válvula independente!",
    quickSummary: "Microválvula em latão que divide o fluxo de óleo mineral da bomba centralizada em microdoses idênticas de 0,02 a 0,05 ml para cada barra de agulha e veda o circuito para evitar gotejamentos no tecido.",
    relatedTerms: [
      "Bomba de Lubrificação Centralizada / Pistão Manual de Óleo e Circuito Distribuidor do Cabeçote",
      "Óleo Mineral Branco USP vs. Óleos Sintéticos de Alta Viscosidade",
      "Barra de Agulha e Parafuso de Fixação (Needle Bar & Needle Clamp)",
      "Carcaça Frontal Deslizante de Agulhas / Bloco Seletor de Cores do Cabeçote",
      "Pavio de Feltro da Laçadeira / Filtro de Lubrificação Capilar do Gancho Rotativo",
      "Alavanca Estica-Fio / Conjunto Estica-Fio do Cabeçote (Take-Up Lever)"
    ],
    tags: [
      "v-104",
      "valvula-dosadora",
      "restritor-capilar",
      "oil-metering-valve",
      "lubrificacao-centralizada",
      "oleo-mineral",
      "anti-gotejamento",
      "manutencao-preventiva",
      "mecanica",
      "artrelados"
    ],
    sourceReference: "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    bibliographicReferences: [
      "SHOWA CORPORATION. Lubrication Engineering & Volumetric Flow Restrictors Manual. Tokyo: Showa, 2022.",
      "LUBE CORPORATION. Centralized Lubrication Units and Metering Valves for Precision Machinery. Nagoya, 2021.",
      "TAJIMA GROUP. Multi-Needle Head Lubrication Circuits, Check Valves and Maintenance Specs. Nagoya: Tajima, 2023.",
      "ARTRELADOS. A Medida Exata da Gota: Segredos das Válvulas Dosadoras do Cabeçote e a Proteção das Roupas Claras. Curitiba, 2024."
    ],
    updatedAt: "2026-09-07"
  }
];

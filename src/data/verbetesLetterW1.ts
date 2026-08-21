import { Verbete } from "../types";

export const VERBETES_LETTER_W1: Verbete[] = [
  {
    id: "wiper-limpador-de-fio-pega-fio-thread-wiper-mechanism",
    code: "W-001",
    letter: "W",
    term: "Wiper / Limpador de Fio e Pega-Fio (Thread Wiper Mechanism)",
    pronunciation: "uái-per / lim-pa-dor de fi-o e pe-ga-fio (fréd uái-per mé-ca-ni-zem)",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino.",
    origin: "Do inglês 'to wipe' (limpar, varrer, recolher). Mecanismo eletromecânico articulado introduzido nas máquinas de costura e bordado industriais automatizadas nos anos 1970.",
    summary: "Haste metálica articulada acionada por solenoide no cabeçote que varre e recolhe a ponta da linha cortada para cima da agulha logo após o corte automático.",
    definition: "O Wiper (Limpador de Fio / Braço Pega-Fio / Thread Wiper) é um atuador mecânico auxiliar montado na lateral inferior do cabeçote de costura, próximo à barra de agulha. Sua função primordial ocorre imediatamente após o acionamento do sistema de corte automático inferior (Trimmer): uma haste de aço em formato de gancho fino dispara transversalmente sob o pé-calcador, 'varrendo' a ponta excedente da linha superior cortada e puxando-a para a parte superior do cabeçote. Isso impede que a ponta solta da linha fique presa no avesso da peça ou seja costurada por baixo dos pontos seguintes, eliminando o clássico 'ninho de pássaro' inicial.",
    technicalDetails: "O sincronismo do Wiper é disparado pela controladora da máquina em um ângulo específico do eixo principal (geralmente entre 310° e 340°, após a lâmina móvel do Trimmer completar o corte e o calcador elevar-se). O movimento é executado por um solenoide de pulso elétrico rápido de 24V ou por uma mola de retorno de alta tensão. Em máquinas multicabeçotes modernas, a haste do limpador possui uma ranhura de borracha ou velcro minúsculo que retém a ponta da linha com atrito suave até que a nova cor ou objeto inicie a amarração, garantindo que o primeiro ponto penetre com tensão perfeita sem desfiamento.",
    beginnerExplanation: "É a 'vassourinha de metal' da máquina: logo que a máquina corta a linha por baixo, esse bracinho de ferro dá um puxãozinho rápido na ponta da linha e joga ela para cima da agulha. Assim, aquela pontinha de linha não fica enroscada por baixo do bordado nem vira aquele bolo de nós feio no começo da costura!",
    howItWorks: [
      "1. A máquina conclui um bloco de cor e o comando TRIM (corte) é disparado.",
      "2. A faca inferior corta a linha da agulha sob a chapa de pontos.",
      "3. O solenoide do Wiper é energizado por uma fração de segundo (cerca de 20 ms).",
      "4. A haste metálica se projeta sob a ponta da agulha e laça o fio cortado.",
      "5. A mola recolhe a haste para cima, levando a sobra de linha para fora da área de costura.",
      "6. O pantógrafo se desloca livremente para a próxima coordenada sem puxar fios soltos.",
      "7. No início do próximo objeto, a agulha desce limpa e forma a laçada perfeita."
    ],
    applications: [
      "Eliminação de pontas de linha soltas costuradas no verso de monogramas e nomes.",
      "Prevenção de embolamento de linha inicial (Birdnesting) em trocas frequentes de cor.",
      "Operação contínua de alta produtividade em máquinas multicabeçotes industriais.",
      "Bordados em peças delicadas e avessos nobres (como fraldas e toalhas de bebê)."
    ],
    characteristics: [
      "Acionamento ultrarrápido sincronizado com o corte de linha inferior.",
      "Fabricado em aço polido de baixo atrito para não desfiar as fibras de poliéster.",
      "Pode ser ativado ou desativado no painel da máquina de acordo com o trabalho."
    ],
    commonErrors: [
      "❌ Deixar a haste do wiper torta, fazendo-a bater na agulha ou no calcador e quebrar a agulha no corte.",
      "❌ Desativar o wiper no painel e esquecer de cortar as pontas superiores manualmente, gerando bolos de linha no avesso.",
      "❌ Acúmulo de fiapos e cola adesiva na ponta do limpador, impedindo o gancho de segurar o fio."
    ],
    troubleshootingTips: [
      "Barulho de batida metálica seca ao cortar linha: a haste do Wiper está desalinhada e colidindo com a barra do calcador; afrouxe o parafuso de fixação e regule a folga lateral (mínimo de 1.5 mm).",
      "A linha fica solta sobre o tecido após o corte: o gancho do Wiper está passando muito alto ou o solenoide perdeu força; limpe o eixo do êmbolo com desengraxante seco.",
      "Wiper não recolhe na volta: mola de retorno quebrada ou frouxa; substitua a mola de tração."
    ],
    dicaArtrelados: "Mantenha a pontinha do seu Wiper sempre limpíssima! Se você usa spray adesivo ou entretela termocolante, uma gotinha de cola pode grudar no ferrinho do limpador. Limpe uma vez por semana com um cotonete embebido em álcool isopropílico para ele nunca falhar na puxada da linha!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas dos anos 1960, não existia o sistema Wiper. As bordadeiras precisavam segurar a ponta de cada linha com uma pinça manual a cada troca de cor para o bordado não desmanchar no primeiro ponto!",
    practicalExercise: "Faça um teste de corte manual pelo painel da sua máquina e observe atentamente o movimento do cabeçote: repare no exato milissegundo em que a haste metálica do Wiper varre a linha para cima logo após a faca cortar embaixo.",
    quickSummary: "Haste metálica acionada por solenoide que recolhe a ponta da linha para cima após o corte, prevenindo nós e pontas soltas no verso.",
    relatedTerms: ["Trimmer", "Corte Automático", "Solenoide", "Pega-Fio", "Ninho de Pássaro", "Laçadeira"],
    tags: ["wiper", "limpador", "fio", "pegafio", "corte", "mecanica", "componentes"]
  },
  {
    id: "water-soluble-stabilizer-entretela-hidrossoluvel-filme-pva-solvy",
    code: "W-002",
    letter: "W",
    term: "Water Soluble Stabilizer / Entretela e Filme Hidrossolúvel (PVA / Solvy)",
    pronunciation: "uó-ter só-liu-bol stei-bi-lai-zer / en-tre-te-la hi-dros-so-lú-vel (pê-vê-á / sól-vi)",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do polímero sintético Álcool Polivinílico (PVA - Polyvinyl Alcohol), biodegradável e solúvel em água, patenteado para uso têxtil na década de 1980.",
    summary: "Estabilizador especial transparente ou de tecido não-tecido que se dissolve 100% em água, usado como cobertura em tecidos felpudos e base para rendas FSL.",
    definition: "A Water Soluble Stabilizer (Entretela Hidrossolúvel / Filme Solvy / PVA Film) é um material estabilizador biodegradável de base polimérica solúvel em água que desaparece por completo após a lavagem sem deixar qualquer resíduo fibroso no bordado. Apresenta-se em duas formas principais: 1) Filme Plástico Transparente (Topping / Película Fina de 20 a 40 micras), aplicado sobre a superfície de toalhas de banho, veludos, piquet e malhas para impedir que os pontos afundem nas fibras felpudas; 2) Entretela Textilizada Hidrossolúvel (Heavyweight Wash-Away / Tecido Não-Tecido de 60 a 90 g/m²), utilizada como base estrutural única para bordar rendas autoportantes (Free Standing Lace - FSL), broderie e monogramas vazados.",
    technicalDetails: "O polímero de PVA possui cadeias moleculares que se desestruturam na presença de água morna (temperatura ideal de 30°C a 40°C) em menos de 60 segundos por hidrólise. Como Topping superior, o filme cria uma barreira plana microscópica que sustenta a tensão do ponto cheio e do tatami, elevando a definição óptica do bordado em até 40% em tecidos de pelo alto. Como entretela de fundo em rendas FSL, exige matrizes com subpontos cruzados densos e nós de amarração em todos os elementos, já que a entretela deixará de existir após o enxágue.",
    beginnerExplanation: "É o 'plástico mágico' do bordado! Você coloca esse plastiquinho transparente por cima da toalha felpuda e borda normalmente. Os pelinhos da toalha ficam todos abaixados e o bordado fica retinho e lindo. Depois, basta jogar um pouquinho de água ou lavar a toalha e o plástico derrete como mágica sem deixar nenhuma marca!",
    howItWorks: [
      "1. A peça felpuda (toalha, veludo ou moletom) é montada no bastidor com entretela tradicional por baixo.",
      "2. Corta-se um pedaço de filme hidrossolúvel transparente no tamanho do bordado.",
      "3. Posiciona-se o filme por cima do tecido (pode-se prender com alfinetes nos cantos ou um ponto de alinhavo prévio).",
      "4. A máquina executa o bordado: a agulha perfura o plástico e assenta os pontos sobre a película lisa.",
      "5. Terminado o bordado, o excesso de plástico ao redor é simplesmente rasgado e destacado com os dedos.",
      "6. Os micro pedacinhos que sobram dentro das letras somem instantaneamente com um borrifador de água ou na primeira lavagem.",
      "7. O resultado é um bordado com superfície aveludada impecável e fios 100% visíveis."
    ],
    applications: [
      "Bordados em toalhas de banho, rosto e roupões felpudos.",
      "Bordados em tecidos com textura: veludo, pelúcia, sherpa, soft, piquet e tricô.",
      "Confecção de rendas de luxo autoportantes (Free Standing Lace - FSL) e brincos bordados.",
      "Monogramas delicados em fraldas de boca e cambraias de linho fino."
    ],
    characteristics: [
      "100% solúvel em água limpa em temperatura ambiente ou morna.",
      "Não tóxico, biodegradável e inodoro.",
      "Disponível em versões filme fino transparente (Topping) e não-tecido estruturado encorpado."
    ],
    commonErrors: [
      "❌ Guardar o plástico hidrossolúvel aberto em dias úmidos ou perto de janelas, fazendo as folhas colarem umas nas outras.",
      "❌ Bordar toalha felpuda SEM o filme por cima, fazendo os pontos sumirem 'engolidos' dentro das fibras da toalha.",
      "❌ Passar ferro quente diretamente em cima do filme hidrossolúvel sem antes removê-lo com água, derretendo plástico na sola do ferro."
    ],
    troubleshootingTips: [
      "Pontos do bordado estão afundando e sumindo na toalha: use uma camada de filme hidrossolúvel (Solvy) por cima do tecido antes de apertar o play da máquina.",
      "A renda FSL desmanchou toda ao ser lavada na água: a matriz não foi programada com subpontos cruzados suficientes de amarração; o bordado FSL precisa de nós estruturais independentes.",
      "O plástico ficou grudento no tecido após enxaguar: mergulhe a peça em uma bacia com água morna por 5 minutos em vez de apenas borrifar superficialmente."
    ],
    dicaArtrelados: "Para toalhas de banho e enxovais de bebê, o filme hidrossolúvel é o segredo de ouro dos bordados de catálogo! E uma super dica: guarde sempre os seus rolos de plástico hidrossolúvel dentro de um saco plástico tipo Ziploc bem fechadinho com um saquinho de sílica para a umidade do ar não estragar seu material!",
    voceSabia: "O PVA foi sintetizado pela primeira vez na Alemanha em 1924 pelos químicos Willy Herrmann e Wolfram Haehnel e hoje é o mesmo polímero seguro utilizado nas cápsulas solúveis de sabão líquido para máquinas de lavar e cápsulas de remédios!",
    practicalExercise: "Pegue uma toalha de banho bem felpuda. Borde uma letra de 4 cm sem filme plástico. Ao lado, borde a mesma letra com uma folhinha de filme hidrossolúvel por cima. Lave com um borrifador e compare a diferença impressionante de nitidez entre as duas!",
    quickSummary: "Película ou entretela solúvel em água que serve de barreira superior em tecidos felpudos ou base para rendas FSL, desaparecendo 100% no enxágue.",
    relatedTerms: ["Solvy", "PVA", "Topping", "FSL", "Free Standing Lace", "Entretela Solúvel", "Tecidos Felpudos"],
    tags: ["water", "soluble", "hidrossoluvel", "pva", "solvy", "topping", "entretela"]
  },
  {
    id: "wilcom-embroidrystudio-software-digitalizacao-industrial-matrizes",
    code: "W-003",
    letter: "W",
    term: "Wilcom EmbroideryStudio (Software de Digitalização Industrial)",
    pronunciation: "uíl-com em-brói-de-ri stu-dio (uíl-cam em-brói-de-ri stiú-dio)",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo próprio masculino.",
    origin: "Desenvolvido em Sydney, Austrália, fundada em 1979 por Bill Wilson e Peter Kobor. Líder mundial em engenharia de softwares CAD/CAM para bordado.",
    summary: "Software australiano profissional líder mundial na digitalização e engenharia de matrizes de bordado industrial com tecnologia proprietária em formato .EMB.",
    definition: "O Wilcom EmbroideryStudio é a principal plataforma de software de nível industrial do mundo para criação, edição e digitalização avançada de matrizes de bordado computadorizado. Conhecido por seu poderoso motor de geração de pontos de alta precisão vetorial, o software utiliza o formato nativo '.EMB' (All-in-One), que preserva as propriedades matemáticas dos objetos de desenho (curvas bézier, densidade, compensação de encolhimento e sequenciamento de subpontos) como elementos vetoriais puros, permitindo redimensionar qualquer arte sem perda de qualidade ou deformação dos pontos.",
    technicalDetails: "O Wilcom integra o motor gráfico CorelDRAW diretamente em sua interface através de uma ponte bidirecional sincronizada, permitindo converter vetores gráficos complexos em pontos de bordado em frações de segundo. Destaca-se por seus algoritmos patenteados de compensação inteligente (Smart Corner, Auto-Underlay, Pull Compensation adaptativa por fração de tecido, Branching automático de trajetos sem saltos e suporte a dispositivos industriais especiais como lantejoulas duplas, miçangas, corte a laser e cordões/chenille). É capaz de exportar e compilar para todos os formatos de máquina do mercado (DST, PES, JEF, EXP, VP3, XXX).",
    beginnerExplanation: "É o 'Photoshop dos bordados profissionais': o programa de computador mais famoso e respeitado do mundo onde os programadores desenham as matrizes de bordado do zero. Ele permite transformar qualquer logotipo ou desenho em pontos perfeitos com controle total de cada agulhada!",
    howItWorks: [
      "1. O programador importa o logotipo do cliente em vetor ou imagem de alta resolução.",
      "2. Cria os objetos de ponto cheio, tatami ou ponto corrido usando ferramentas vetoriais precisas.",
      "3. Define a inclinação das linhas de ponto, os subpontos de sustentação e a compensação de repuxo.",
      "4. Aplica o recurso 'Branching' para que o software crie caminhos contínuos inteligentes sem cortes desnecessários.",
      "5. Simula a peça em 3D realista (TrueView) para verificar o aspecto visual final.",
      "6. Salva o arquivo mestre em .EMB para edições futuras e exporta o arquivo compilado (.DST, .PES) para o pendrive.",
      "7. A máquina lê o arquivo e borda com sincronismo mecânico perfeito."
    ],
    applications: [
      "Digitalização profissional de marcas corporativas, uniformes e monogramas de alto luxo.",
      "Criação de matrizes complexas com múltiplos ângulos de ponto e texturas artísticas.",
      "Programação de dispositivos industriais especiais (lantejoulas, cordões, gravação a laser).",
      "Padronização e conversão de arquivos de matrizes para fábricas têxteis em todo o planeta."
    ],
    characteristics: [
      "Formato nativo de objeto .EMB com escalabilidade matemática perfeita.",
      "Integração nativa completa com CorelDRAW Graphics Suite.",
      "Algoritmos de compensação de repuxo líderes da indústria têxtil global."
    ],
    commonErrors: [
      "❌ Redimensionar matrizes salvas em formatos de máquina (.DST ou .PES) fora do formato original .EMB, alterando a densidade dos pontos incorretamente.",
      "❌ Digitalizar objetos pequenos usando pontos cheios sem ativar a compensação de curvas (Smart Corner), criando agulhadas sobrepostas excessivas.",
      "❌ Deixar de salvar uma cópia mestre em .EMB, perdendo a capacidade de editar propriedades individuais dos objetos no futuro."
    ],
    troubleshootingTips: [
      "O bordado está repuxando muito no tecido: abra o arquivo .EMB no Wilcom, selecione os objetos e aumente a 'Compensação de Puxamento' (Pull Comp) de 0.20 mm para 0.40 mm.",
      "Muitos cortes de linha atrapalhando a produção: use a ferramenta 'Ramificação' (Branching) para unir vários objetos de mesma cor em um trajeto contínuo sem cortes intermediários.",
      "Letras pequenas saindo ilegíveis: altere o tipo de fonte para uma fonte digitalizada manualmente para microletras no catálogo do Wilcom em vez de converter fonte TrueType comum."
    ],
    dicaArtrelados: "Sempre que você criar ou encomendar uma matriz, guarde o arquivo original em formato .EMB como se fosse ouro! O arquivo compilado (.PES ou .DST) é apenas para a máquina bordar, mas o arquivo .EMB é a 'matriz viva' que você pode editar, aumentar ou diminuir sem perder um pingo de qualidade!",
    voceSabia: "A Wilcom revolucionou o mundo do bordado em 1980 ao lançar o primeiro sistema de digitalização gráfica computadorizada multicaractere do planeta baseado em microprocessadores, eliminando os antigos cartões perfurados de papel!",
    practicalExercise: "No seu software de bordado, pegue um desenho salvo em formato compilado (.PES/.DST) e tente aumentar 50%. Faça o mesmo com o arquivo original editável (.EMB). Compare a contagem de pontos e veja como o formato vetorial preserva a densidade perfeita.",
    quickSummary: "Software de digitalização industrial padrão da indústria global que cria matrizes em formato vetorial .EMB com precisão micrométrica.",
    relatedTerms: ["Arquivo .EMB", "Digitalização", "Branching", "Pull Compensation", "TrueView", "CorelDRAW", "Software de Bordado"],
    tags: ["wilcom", "embroidrystudio", "software", "digitalizacao", "emb", "matriz", "cad"]
  },
  {
    id: "wool-thread-burmilana-linha-de-la-bordado-textura-rustica",
    code: "W-004",
    letter: "W",
    term: "Wool Thread / Fio de Lã e Burmilana (Bordado com Textura Rústica)",
    pronunciation: "uúl fréd / bur-mi-la-na (uúl fréd & bur-mi-la-na)",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'wool' (lã natural de ovelha) e da consagrada linha alemã Burmilana desenvolvida pela Madeira Threads (Alemanha), misturando 50% de lã natural e 50% de acrílico.",
    summary: "Linha espessa e macia à base de lã natural e acrílico que produz bordados aveludados com volume 3D, aspecto artesanal rústico e toque quente de tricô.",
    definition: "A Wool Thread (Linha de Lã para Bordado / Burmilana #12 / Madeira Lana #12) é um fio têxtil especial de alta titulação (espessura Nº 12, cerca de três a quatro vezes mais espesso que a linha de poliéster padrão Nº 40) formulado especificamente para rodar em máquinas de bordar computadorizadas. Composta por fibras de lã virgem misturadas com acrílico de alta resistência, essa linha confere ao bordado um aspecto aveludado, encorpado e artesanal que simula o ponto cruz tradicional à mão livre, o bordado crewel inglês e texturas de peles de animais.",
    technicalDetails: "Devido à alta espessura do fio (#12 / dtex 330/2), o bordado com linha de lã exige parâmetros técnicos diferenciados: 1) Agulha especial de olho extra largo (Topstitch ou Madeira Lana Needle 90/14 ou 100/16); 2) Redução drástica da densidade na matriz em cerca de 30% a 40% (espaçamento de pontos aberto de 0.65 a 0.90 mm em vez dos habituais 0.40 mm para evitar aglomeração de fibras); 3) Redução da velocidade da máquina para 500–650 SPM; 4) Tensão de linha superior extremamente suave para não romper os filamentos de lã; 5) Uso de escovinha de cerdas macias (Wire Brush) após o bordado para 'pentear' as fibras e criar um efeito de pelo ultra macio.",
    beginnerExplanation: "É uma linha fofinha e mais grossa feita de lã de verdade! Quando a máquina borda com ela, o desenho não fica brilhante e liso como plástico: fica parecendo um casaquinho de tricô macio, uma pelúcia de ursinho ou um bordado feito à mão pela vovó com muito charme e aconchego!",
    howItWorks: [
      "1. A matriz é digitalizada com densidade aberta e pontos mais longos (3.5 mm a 6 mm).",
      "2. Instala-se na máquina uma agulha de olho largo Schmetz Topstitch 90/14 ou 100/16.",
      "3. Passa-se o cone de fio de lã pelos tensores com a pressão superior reduzida.",
      "4. A velocidade da máquina é ajustada no painel para 550 SPM.",
      "5. A máquina borda sobre casacos de moletom, jaquetas jeans, mantas ou almofadas.",
      "6. Ao finalizar, escova-se levemente o bordado com uma escova de cerdas para eriçar a lã.",
      "7. O resultado é um relevo tridimensional aconchegante com acabamento de alta costura."
    ],
    applications: [
      "Bordados em casacos de inverno, jaquetas jeans, cardigãs e mantas de lã.",
      "Criação de pelos e texturas aveludadas em animais (cães, gatos, leões, ursos de pelúcia).",
      "Almofadas rústicas e decoração de interiores no estilo Boho Chic e escandinavo.",
      "Bordado de estilo Crewel vitoriano e motivos folclóricos em linho cru e sarja."
    ],
    characteristics: [
      "Acabamento fosco, encorpado e com textura rústica aconchegante.",
      "Volume tridimensional natural sem necessidade de colocar espuma EVA por baixo.",
      "Excelente cobertura visual mesmo com menor quantidade de pontos na matriz."
    ],
    commonErrors: [
      "❌ Bordar com linha de lã usando uma agulha comum 75/11, esfolando o fio e quebrando a cada 20 pontos.",
      "❌ Usar matriz digitalizada para linha comum de poliéster 40, gerando um bloco de pontos impenetrável que trava a máquina.",
      "❌ Manter a velocidade da máquina a 900 SPM, arrebentando a linha por excesso de atrito térmico."
    ],
    troubleshootingTips: [
      "Linha de lã quebrando ou desfiando antes do olho da agulha: troque a agulha por uma Topstitch 100/16 de canaleta funda e diminua a tensão do prato tensor.",
      "O tecido está repuxando e o bordado virou uma 'placa dura': aumente o espaçamento dos pontos na matriz para no mínimo 0.70 mm.",
      "Bordado parece murcho: use uma escovinha de pentear bordados (Madeira Lana Brush) em movimentos circulares suaves sobre o bordado pronto para soltar as fibras de lã."
    ],
    dicaArtrelados: "A linha de lã (Burmilana / Lana) é o segredo para transformar jaquetas jeans simples em peças de grife vendidas por valores altíssimos! Se você bordar uma flor ou um leão com essa linha e passar a escovinha no final para eriçar a lã, o cliente fica apaixonado pelo toque fofinho!",
    voceSabia: "O bordado tradicional com fios de lã (conhecido como Bordado Crewel) é uma das técnicas mais antigas da nobreza britânica, famoso desde a Tapeçaria de Bayeux do século XI!",
    practicalExercise: "Compre um carretel de linha de lã para bordar e coloque uma agulha 90/14. Pegue uma matriz floral simples e aumente o espaçamento dos pontos para 0.75 mm. Borde em um jeans velho a 550 SPM e escove com uma escova macia para sentir o efeito aveludado.",
    quickSummary: "Linha espessa de lã e acrílico (#12) que confere volume 3D, toque macio de tricô e acabamento artesanal rústico ao bordado.",
    relatedTerms: ["Burmilana", "Lana Madeira", "Linha Nº 12", "Bordado Crewel", "Agulha Topstitch", "Efeito Aveludado", "Densidade Aberta"],
    tags: ["wool", "thread", "la", "burmilana", "lana", "fio", "textura", "rustico"]
  },
  {
    id: "wing-needle-agulha-asa-efeito-ajour-bainha-aberta-openwork",
    code: "W-005",
    letter: "W",
    term: "Wing Needle / Agulha Asa e Efeito Ajour (Bainha Aberta e Ponto Paris)",
    pronunciation: "uíng ní-dol / a-gu-lha a-sa e e-fei-to a-júr (uíng ní-dol & e-fé a-júr)",
    level: "Avançado 🔴",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'wing' (asa) e do francês 'ajour' (aberto à luz, vazado). Técnica clássica da alta-costura europeia e do bordado de bainhas abertas da Ilha da Madeira.",
    summary: "Agulha especial dotada de duas aletas laterais largas em formato de asa que abrem furos perfurados decorativos no tecido para recriar o ponto Ajour e a bainha aberta.",
    definition: "A Wing Needle (Agulha Asa / Agulha de Aletas / Hemstitch Needle / Schmetz 130/705 H-WING) é uma agulha de formato mecânico singular projetada com duas lâminas metálicas salientes em formato de asas ao longo da haste, logo acima da ponta perfurante. Quando a agulha penetra o tecido, as asas laterais afastam as fibras da trama e da urdidura sem cortá-las, abrindo orifícios decorativos regulares no tecido. Ao subir, a linha de algodão fino costurada pela agulha envolve e amarra esses orifícios, recriando com perfeição computadorizada as técnicas históricas de bainha aberta, ponto Paris e Richelieu vazado (Entredós e Ajour).",
    technicalDetails: "A agulha asa está disponível nas numerações 100/16 e 120/19 (sistema 130/705 H-WING ou 287 WH para industriais). Exige tecidos de fibras naturais com ligamento tafetá bem nítido (como linho puro, cambraia de algodão, percal 400 fios e seda rústica) que permitam o afastamento das fibras. A digitalização para agulha asa utiliza padrões de pontos específicos em estrela, cruzeta ou ziguezague concentrado que penetram três a quatro vezes exatamente no mesmo orifício para esticar a abertura. Exige o uso de linha fina de algodão mercerizado (#50 ou #60) e desativação total de cortes e saltos rápidos que possam forçar a lâmina lateral larga.",
    beginnerExplanation: "É uma agulhinha mágica que tem duas 'asinhas de ferro' nas laterais! Quando ela entra no tecido de linho ou algodão, as asinhas empurram os fios do tecido para os lados e abrem furinhos redondos decorativos super charmosos. A linha vem amarrando as bordas do furo e cria aquele efeito clássico de toalha de banho chique e enxoval de noiva de novela!",
    howItWorks: [
      "1. Monta-se um tecido de linho puro ou cambraia de algodão no bastidor com entretela hidrossolúvel ou rasgável fina.",
      "2. Instala-se a agulha asa Schmetz Wing 100/16 ou 120/19 na barra de agulha da máquina.",
      "3. Passa-se linha de algodão fino fosco (#50 ou #60) na agulha e linha de bobina fina.",
      "4. A máquina executa uma matriz digitalizada para ponto Ajour / Bainha Aberta.",
      "5. A cada penetração, as aletas de asa alargam a trama do tecido abrindo uma janela vazada.",
      "6. A linha envolve as fibras laterais com nós firmes, mantendo o buraquinho aberto e nítido.",
      "7. A peça sai com um acabamento clássico de alta-costura feito em minutos.",
      "8. Ao lavar e engomar com ferro a vapor, os orifícios ficam perfeitamente assentados."
    ],
    applications: [
      "Enxovais clássicos de bebê: barras de cueiros, fraldas nobres, lençóis de berço e vestidos de batizado.",
      "Roupas de cama e mesa de alto luxo: jogos americanos de linho, guardanapos e toalhas de banquete.",
      "Camisas finas masculinas e femininas (guayaberas cubanas, camisas de linho com detalhes em Ajour).",
      "Bordados religiosos e alfaias litúrgicas tradicionais."
    ],
    characteristics: [
      "Aletas laterais largas que afastam os fios sem romper as fibras do tecido.",
      "Efeito vazado clássico sem necessidade de tesourinhas de recorte manual.",
      "Exclusiva para tecidos de fibra natural com boa estrutura de trama."
    ],
    commonErrors: [
      "❌ Usar agulha asa em tecidos sintéticos elásticos (como lycra ou malha), onde o furo fecha sozinho instantaneamente.",
      "❌ Bater a agulha asa na borda do furo da chapa de agulha comum por falta de espaço lateral (verifique a folga!).",
      "❌ Usar linha de poliéster brilhante pesada (#40), preenchendo o orifício e tampando o efeito vazado.",
      "❌ Digitalizar pontos cheios compactos com agulha asa, rasgando o tecido."
    ],
    troubleshootingTips: [
      "Os furos não estão ficando abertos no tecido: utilize linho 100% ou cambraia e umedeça levemente o tecido com goma ou spray amaciante antes de bordar para amaciar as fibras.",
      "A agulha quebrou ao descer: certifique-se de que a chapa de agulha da máquina possui abertura oval larga o suficiente para as aletas da agulha asa passarem sem colisão.",
      "A linha arrebenta ao entrar no tecido: reduza a velocidade para 500 SPM e use agulha asa com canaleta limpa e linha fina de algodão #50 ou #60."
    ],
    dicaArtrelados: "A agulha asa é o maior truque dos ateliês de luxo para multiplicar o valor de toalhas de lavabo e lençóis de linho! Uma barrinha com ponto Paris feito com agulha asa em linho cru transforma uma peça simples em um produto requintado com valor de venda quatro vezes maior!",
    voceSabia: "O bordado Ajour com agulha asa é a mecanização do 'Bordado de Bainha Aberta da Ilha da Madeira', onde bordadeiras artesãs passavam dias desfiando manualmente os fios do linho com pinças antes de coser as bordas!",
    practicalExercise: "Coloque uma agulha asa Schmetz 100/16 na sua máquina. Prenda um retalho de linho cru com entretela rasgável. Selecione um ponto de 'Entredós / Ponto Paris' ou matriz de Ajour e borde a 500 SPM. Passe a ferro com vapor e admire os furinhos perfeitamente vazados.",
    quickSummary: "Agulha especial com aletas laterais que afasta os fios do tecido criando orifícios decorativos para o efeito de bainha aberta e ponto Ajour.",
    relatedTerms: ["Agulha Asa", "Ponto Ajour", "Ponto Paris", "Bainha Aberta", "Linho Puro", "Schmetz Wing", "Hemstitch"],
    tags: ["wing", "needle", "asa", "agulha", "ajour", "paris", "bainha", "luxo"]
  }
];

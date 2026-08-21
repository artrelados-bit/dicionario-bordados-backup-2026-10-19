import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART8: Verbete[] = [
  {
    id: "width-to-height-ratio-proporcao-entre-largura-e-altura",
    code: "W-036",
    letter: "W",
    term: "Width-to-Height Ratio — Proporção Largura/Altura (Aspect Ratio & Proportional Lock)",
    pronunciation: "uídth tu háit rêi-shio — pro-por-ção lar-gu-ra/al-tu-ra (ˈwɪdθ tuː haɪt ˈreɪʃioʊ)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'width' (largura), 'height' (altura) e 'ratio' (razão/proporção matemática). Relação dimensional bidimensional fundamental em geometria analítica e sistemas CAD.",
    summary: "Relação matemática entre a largura e a altura de um objeto vetorial ou matriz (Aspect Ratio), mantida bloqueada por cadeado virtual para redimensionamento sem distorção.",
    definition: "O Width-to-Height Ratio (Proporção entre Largura e Altura / Relação de Aspecto / Proportional Scaling Lock / Aspect Ratio) é a proporção geométrica quantitativa calculada pela divisão da medida de largura (X) pela altura (Y) de um desenho ou elemento de bordado (Ratio = X / Y). No software de digitalização, a função 'Bloquear Proporções' (Lock Aspect Ratio) vincula os dois eixos de modo que qualquer alteração percentual ou milimétrica digitada na largura recalcule instantaneamente a altura correspondente, preservando a fidelidade da marca e a simetria original da arte.",
    technicalDetails: "Quando um desenho com Proporção Largura/Altura de 2.0 (ex: largura de 100 mm por altura de 50 mm) é escalonado com proporção destravada para 120 mm de largura mantendo 50 mm de altura, os ângulos dos pontos de ponto cheio (Satin) sofrem distorção angular, colunas curvas achatam e círculos viram elipses, alterando o espaçamento entre pontos e comprometendo a densidade. A regra de segurança do bordado permite escalonar matrizes até ±10% a 15% mantendo a proporção travada sem exigir a redigitalização dos pontos.",
    beginnerExplanation: "É o botãozinho com desenho de 'cadeado' que você deixa sempre fechado quando vai aumentar ou diminuir um bordado! Com o cadeado fechado, quando você puxa o desenho para o lado, ele cresce para cima junto na mesma medida exata. Se esquecer o cadeado aberto, o desenho fica esticado parecendo que foi amassado por um rolo de massa!",
    howItWorks: [
      "1. O digitalizador seleciona o desenho ou logotipo completo na tela do software.",
      "2. Confere se o ícone do cadeado de 'Proporção Proporcional' (Lock Aspect Ratio) está ativado.",
      "3. Digita a nova largura desejada na caixa X (ex: altera de 80 mm para 90 mm).",
      "4. O software calcula automaticamente o novo valor da altura Y mantendo a proporção idêntica.",
      "5. Todos os círculos permanecem perfeitamente redondos e as letras conservam sua tipografia original.",
      "6. A densidade de pontos é recalculada mantendo a cobertura uniforme.",
      "7. A matriz é salva pronta para a máquina sem nenhuma deformação estética."
    ],
    applications: [
      "Redimensionamento preciso de logotipos corporativos para respeito aos manuais de marca.",
      "Ajuste de matrizes para caberem exatamente em bolsos de camisa ou faixas de toalha.",
      "Escalonamento de fontes tipográficas e monogramas sem distorção estética.",
      "Adaptação de artes para diferentes tamanhos de bastidores da máquina."
    ],
    characteristics: [
      "Representado pelo ícone de cadeado na barra de propriedades de dimensão.",
      "Garante a preservação de círculos, formas geométricas e letras.",
      "Permite redimensionamento seguro de até 15% com recálculo automático de pontos."
    ],
    commonErrors: [
      "❌ Destravar o cadeado e aumentar apenas a largura de um logotipo de cliente, esticando as letras e desfigurando a marca registrada.",
      "❌ Aumentar o tamanho do desenho em 50% em arquivo de máquina (.DST) sem recálculo de densidade, deixando o bordado ralo e com frestas.",
      "❌ Escalonar elementos individuais de uma matriz de forma assimétrica, desalinhando contornos."
    ],
    troubleshootingTips: [
      "O círculo do logo ficou oval e achatado na máquina: certifique-se de ativar o cadeado de proporção travada e redimensione ambos os eixos igualmente.",
      "O bordado não cabe no bastidor por apenas 3 mm: reduza o tamanho total do desenho em 5% com o cadeado travado em vez de esmagar a largura.",
      "A letra perdeu a densidade ao aumentar o tamanho: utilize sempre o arquivo original (.EMB/.PES) com recálculo automático de pontos ativo."
    ],
    dicaArtrelados: "Nunca mexa no tamanho de um logotipo de empresa sem travar o cadeado de proporção no seu programa! Empresas grandes são super rigorosas com a imagem da marca e rejeitam qualquer pedido se o logo estiver minimamente esticado ou achatado!",
    voceSabia: "A Proporção Áurea (1.618), descoberta pelos matemáticos da Grécia Antiga, é a relação de aspecto mais famosa da história e ainda hoje é a proporção largura/altura padrão utilizada em brasões, cartões de visita e logotipos de luxo!",
    practicalExercise: "Desenhe um círculo perfeito de 50x50 mm no seu programa. Destrave o cadeado e mude a largura para 70 mm mantendo a altura em 50 mm. Veja como ele vira uma forma oval achatada. Trave o cadeado novamente e veja como ele cresce proporcionalmente.",
    quickSummary: "Relação matemática entre largura e altura mantida travada por cadeado no software para redimensionar desenhos sem distorcer formas ou desfigurar logotipos.",
    relatedTerms: ["Aspect Ratio", "Proporção", "Escalonamento", "Redimensionamento", "Cadeado de Proporção", "Manual de Marca", "Eixo X e Y"],
    tags: ["widthtoheightratio", "proporcao", "aspectratio", "dimensao", "redimensionamento", "software", "vetor"]
  },
  {
    id: "waterproof-membrane-membrana-impermeavel-e-selagem",
    code: "W-037",
    letter: "W",
    term: "Waterproof Membrane — Membrana Impermeável e Selagem (Seam Sealing & Waterproofing)",
    pronunciation: "uó-ter-pruf mém-brein — mem-bra-na im-per-me-á-vel (ˈwɔːtərpruːf ˈmɛmbreɪn)",
    level: "Avançado 🔴",
    category: "Materiais Especiais",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'waterproof' (à prova d'água) e 'membrane' (filme/película protetora). Tecnologia têxtil respirável e selagem térmica (Gore-Tex, poliuretano microporoso e fitas termoplásticas).",
    summary: "Camada técnica microporosa ou fita termoplástica termoativada (Seam Tape) aplicada no avesso do bordado para vedar os microfuros da agulha e restaurar a impermeabilidade total.",
    definition: "A Waterproof Membrane (Membrana Impermeável / Película de Vedação Termoativada / Seam Sealing Tape & Waterproof Membrane) é uma lâmina fina e flexível de poliuretano termoplástico (TPU) ou PTFE microporoso projetada para ser aplicada no avesso de jaquetas de alta montanha, capas de chuva, roupas de esqui e vestuário náutico bordado. Como cada penetração da agulha de bordar perfura milhares de microfuros no tecido impermeável, a membrana termoativada é prensada no avesso a 140°C–160°C após a costura, fundindo-se sobre as laçadas e bloqueando 100% da passagem de água.",
    technicalDetails: "O processo de selagem e impermeabilização no bordado profissional envolve: 1) Uso de fita adesiva termofusível de vedação de costura de 3 camadas (3-Layer Seam Sealing Tape) ou filme termoadesivo de PU contínuo cobrindo toda a área do avesso do bordado com margem de 10 mm; 2) Prensagem térmica plana sob pressão pneumática de 3 a 4 bar por 12 a 15 segundos; 3) Resistência à coluna d'água superior a 10.000 mm H2O segundo a norma ISO 811, impedindo a penetração de umidade mesmo sob tempestades severas e lavagem em máquina.",
    beginnerExplanation: "Quando a máquina de bordar faz milhares de furinhos em uma jaqueta impermeável de motoqueiro ou capa de chuva, a água passa por esses furinhos e molha quem está usando! A Membrana Impermeável é uma fita adesiva especial que você cola com ferro quente atrás do bordado: ela derrete, veda todos os furinhos e deixa a jaqueta 100% à prova d'água de novo!",
    howItWorks: [
      "1. A jaqueta ou peça impermeável é bordada na máquina com agulha fina 70/10.",
      "2. Corta-se a entretela rente e limpam-se os fios do avesso da peça.",
      "3. Posiciona-se a fita ou folha de membrana impermeável de TPU sobre o avesso do bordado.",
      "4. Aplica-se a prensa térmica ou ferro de passar a 150°C com papel antiaderente por 15 segundos.",
      "5. O poliuretano funde-se penetrando entre os nós de linha e vedando cada microfuro da agulha.",
      "6. Após resfriar por 30 segundos, a vedação atinge resistência química e mecânica total.",
      "7. A peça pode ser usada sob chuvas torrenciais sem deixar passar uma única gota de água.",
      "8. O cliente recebe um produto com certificação profissional de impermeabilidade."
    ],
    applications: [
      "Uniformes impermeáveis para equipes de resgate, bombeiros e defesa civil.",
      "Jaquetas e macacões de motociclistas de alta cilindrada.",
      "Roupas esportivas de esqui, montanhismo, vela náutica e esportes de aventura.",
      "Mochilas e bolsas estanques para equipamentos fotográficos e eletrônicos."
    ],
    characteristics: [
      "Película de TPU/PTFE termoativada por calor e pressão.",
      "Restaura a coluna d'água de 10.000 mm após perfurações da agulha.",
      "Flexível e imperceptível ao vestir a jaqueta."
    ],
    commonErrors: [
      "❌ Bordar jaquetas caras de motoqueiro ou chuva sem aplicar a fita de selagem no avesso, gerando reclamações por vazamento de água.",
      "❌ Usar temperatura excessiva na prensa (mais de 180°C), derretendo o tecido sintético externo da jaqueta.",
      "❌ Deixar pontas de linha compridas no avesso antes de prensar a fita, criando canais de ar por onde a água escorre."
    ],
    troubleshootingTips: [
      "A água está vazando pelos cantinhos do bordado: corte a membrana impermeável com pelo menos 15 mm de sobra para além de todas as bordas do desenho para garantir vedação perimetral.",
      "A fita de vedação descolou na primeira lavagem: aumente o tempo de prensagem térmica para 18 segundos e certifique-se de que a pressão foi firme e homogênea.",
      "A agulha está grudando ao bordar tecido emborrachado: utilize agulha antiaderente revestida de Teflon ou silicone (Super Universal / Non-Stick)."
    ],
    dicaArtrelados: "Vai bordar jaquetas de motociclista ou capas de chuva para empresas? Venda o serviço completo com 'Selagem Térmica Impermeável' no avesso! Isso agrega muito valor ao seu serviço e permite cobrar até 3 vezes mais pelo bordado em peças técnicas!",
    voceSabia: "A tecnologia de membranas impermeáveis e respiráveis microporosas foi inventada em 1969 por Bob Gore (criador do Gore-Tex) a partir de um estiramento mecânico rápido de PTFE aquecido!",
    practicalExercise: "Borde um pequeno teste em um pedaço de tecido impermeável (como náilon resinado ou Cordura). Aplique um pedaço de fita termocolante impermeável no avesso com o ferro de passar. Jogue água em cima e comprove que a água não vaza pelo verso.",
    quickSummary: "Película termoplástica flexível de TPU prensada no avesso do bordado para vedar os furos da agulha e garantir 100% de impermeabilidade em jaquetas técnicas.",
    relatedTerms: ["Impermeabilização", "Seam Sealing", "TPU", "Gore-Tex", "Fita de Vedação", "Tecido Técnico", "Jaquetas de Chuva"],
    tags: ["waterproofmembrane", "impermeavel", "selagem", "tpu", "jaquetas", "vedacao", "materiais"]
  },
  {
    id: "web-stabilizer-entretela-em-teia-ultraleve-spunbond-polypropylene",
    code: "W-038",
    letter: "W",
    term: "Web Stabilizer — Entretela em Teia Ultraleve (Spunbond Polypropylene & Web Backing)",
    pronunciation: "uéb stei-bi-lai-zer — en-tre-te-la em tei-a ul-tra-le-ve (wɛb ˈsteɪbəlaɪzər)",
    level: "Intermediário 🟡",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'web' (teia, malha fibrosa multidirecional) e 'stabilizer' (estabilizador). Processo industrial 'spunbond' de extrusão de filamentos poliméricos contínuos entrelaçados a quente.",
    summary: "Entretela não-tecida de polipropileno com padrão visual de teia ultraleve (Poly-Mesh de 30 a 50 g/m²), recortável, macia e totalmente invisível através de tecidos brancos finos.",
    definition: "O Web Stabilizer (Entretela em Teia / Spunbond Web Backing / Poly-Mesh Stabilizer / Entretela Ultraleve de Polipropileno) é um estabilizador técnico de alto rendimento produzido por extrusão e termosoldagem de microfilamentos contínuos de polipropileno dispostos aleatoriamente em formato de teia de aranha (Spunbond Web Pattern). Extremamente fina, flexível e semitransparente, ela oferece estabilidade multidirecional quase nula em estiramento, suportando matrizes densas sem adicionar peso, rigidez ou opacidade à peça bordada.",
    technicalDetails: "Diferente das entretelas tradicionais de celulose (que criam uma sombra escura e quadrada visível por fora de camisetas brancas de malha fina - fenômeno 'Show-Through'), a Web Stabilizer funde-se visualmente à tonalidade do tecido claro. A estrutura em teia multidirecional retém mais de 80% de sua resistência mecânica mesmo após ser perfurada repetidamente pela agulha em alta densidade, não rasgando nem afrouxando com o calor do ferro ou lavagens contínuas a 60°C.",
    beginnerExplanation: "É uma entretelinha tão fininha e macia que parece uma teia de aranha branquinha e transparente! Ela é a melhor entretela do mundo para bordar camisetas brancas de malha fininha: quando você recorta o excesso no avesso, ela fica tão suave que nem parece que tem entretela e ninguém vê aquela 'placa quadrada' feia por fora da camisa!",
    howItWorks: [
      "1. A folha de entretela em teia (Web/Polymesh) é posicionada sob a malha fina ou camiseta branca.",
      "2. O conjunto é colocado no bastidor sem esticar a malha.",
      "3. A máquina borda o desenho com firmeza absoluta e sem deformar o tecido elástico.",
      "4. Os microfilamentos da teia abraçam os nós da linha com amortecimento suave.",
      "5. Ao finalizar, o operador retira o bastidor e recorta o excesso ao redor do bordado com tesoura curva.",
      "6. A borda recortada fica macia como seda, sem cantos afiados ou resíduos pontiagudos.",
      "7. A camiseta pode ser vestida diretamente contra o corpo com conforto total e sem marcas externas."
    ],
    applications: [
      "Camisetas polo e t-shirts brancas ou de cores claras de malha fina de alta qualidade.",
      "Bordados em peças de bebê, bodies de algodão pima e pijamas sensíveis.",
      "Roupas esportivas de microfibra, dry-fit e tecidos de compressão elástica.",
      "Vestidos e blusas femininas de viscose, seda e tecidos semitransparentes."
    ],
    characteristics: [
      "Extremamente fina, semitransparente e macia como tecido de seda.",
      "Não aparece através de tecidos brancos ou finos (Zero Show-Through).",
      "Resistência multidirecional que não deforma após lavagens industriais."
    ],
    commonErrors: [
      "❌ Tentar rasgar a entretela em teia com as mãos (ela é recortável de polímero flexível e deve ser cortada com tesoura).",
      "❌ Usar entretela rasgável dura de celulose em camiseta branca fina, criando aquele 'quadrado duro' horrível no peito.",
      "❌ Cortar a entretela muito rente aos pontos com tesoura reta, correndo o risco de picotar as linhas do bordado."
    ],
    troubleshootingTips: [
      "O bordado ficou com uma 'sombra quadrada' visível na frente da camisa polo branca: substitua a entretela grossa por Web Stabilizer (Polymesh) bege ou branca semitransparente.",
      "A entretela está pinicando a pele do cliente: use Web Stabilizer de polipropileno 100% virgem que tem acabamento ultra sedoso.",
      "O tecido esticou mesmo com a entretela em teia: utilize a versão com adesivo termocolante suave (Fusible Polymesh) para colar diretamente no avesso da malha antes de prender no aro."
    ],
    dicaArtrelados: "Para camisas brancas finas e roupas de bebê, use sempre a entretela Poly-Mesh (em teia)! Ela é o maior segredo dos grandes ateliês de luxo: o bordado fica impecável e a entretela fica invisível e macia como um carinho!",
    voceSabia: "O processo 'Spunbond' utilizado na fabricação de entretelas em teia é o mesmo processo de alta tecnologia médica utilizado para fabricar máscaras cirúrgicas N95 e campos cirúrgicos estéreis devido à sua pureza e suavidade hipoalergênica!",
    practicalExercise: "Coloque uma folha de entretela rasgável comum e uma folha de Web Stabilizer sob uma camiseta branca. Olhe pela frente da camiseta: veja como a entretela comum aparece como um quadrado escuro e a entretela em teia fica completamente invisível.",
    quickSummary: "Entretela não-tecida ultraleve e semitransparente de polipropileno em padrão de teia, essencial para malhas finas e camisas brancas sem marcar o tecido.",
    relatedTerms: ["Polymesh", "Spunbond", "Show-Through", "Entretela Recortável", "Malha Fina", "Camiseta Branca", "Maciez"],
    tags: ["webstabilizer", "entretelaemteia", "polymesh", "spunbond", "malhafina", "invisivel", "estabilizador"]
  },
  {
    id: "web-pattern-padrao-de-preenchimento-em-teia-spider-web-fill",
    code: "W-039",
    letter: "W",
    term: "Web Pattern — Padrão de Preenchimento em Teia (Spider-Web & Radial Motif Fill)",
    pronunciation: "uéb pé-tern — pa-drão de pre-en-chi-men-to em tei-a (wɛb ˈpætərn)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'web pattern' (motivo geométrico em teia de aranha). Padrão decorativo de digitalização radial e poligonal utilizado em fundos artísticos e temas góticos/infantis.",
    summary: "Padrão de preenchimento decorativo programado no software com linhas radiais e arcos concêntricos que reproduzem a estrutura geométrica de uma teia de aranha.",
    definition: "O Web Pattern (Padrão em Teia / Preenchimento Radial em Teia / Spider-Web Motif Fill) é uma textura programada de preenchimento vetorial decorativo gerada algoritmicamente por um conjunto de raios lineares divergentes a partir de um ponto central (focos radiais) interceptados por arcos concêntricos ou polígonos espiralados. Muito além de temas decorativos específicos (como Halloween ou super-heróis), é utilizado na engenharia de matrizes como uma estrutura de reforço ultraleve para áreas de renda solta (FSL) e fundos decorativos de baixo consumo de pontos.",
    technicalDetails: "O algoritmo de geração do Web Pattern no software permite configurar: 1) Número de raios radiais (Spokes - geralmente 8 a 16 eixos); 2) Espaçamento entre os anéis concêntricos (Ring Pitch de 2.5 mm a 5.0 mm); 3) Curvatura dos segmentos de arco (Sagitta/Catenária); 4) Ponto de amarração central (Center Hub Lock). Quando utilizado para Free Standing Lace (FSL), o Web Pattern conecta todas as interseções com nós triplos de segurança, garantindo que a renda não se desfaça após a dissolução do estabilizador solúvel.",
    beginnerExplanation: "É um tipo de ponto de desenho que faz aquele desenho lindo de teia de aranha certinho, saindo do centro e abrindo em círculos! É muito usado para fazer bordados de heróis de gibi, temas de festas infantis, rendas vazadas e fundos leves que usam pouquíssima linha!",
    howItWorks: [
      "1. O digitalizador desenha um círculo ou polígono no software de matrizes.",
      "2. Seleciona o tipo de preenchimento 'Motif / Padrão Decorativo' e escolhe 'Spider Web'.",
      "3. Posiciona o ponto central de onde os raios da teia vão se abrir.",
      "4. Ajusta o espaçamento entre os fios da teia e a curvatura das linhas.",
      "5. O software calcula o caminho contínuo para bordar toda a teia com o mínimo de saltos.",
      "6. A máquina costura os raios estruturais e em seguida os arcos cruzados.",
      "7. O resultado é um desenho geométrico leve, elegante e com altíssimo impacto visual."
    ],
    applications: [
      "Bordados temáticos infantis (fantasias de super-heróis, personagens e quadrinhos).",
      "Fundos leves para matrizes de Halloween, moda alternativa e gótica.",
      "Estruturação de rendas vazadas circulares (FSL) e mandalas decorativas.",
      "Preenchimentos vazados de alívio de peso em brasões grandes de jaquetas."
    ],
    characteristics: [
      "Padrão radial concêntrico de baixo consumo de linha e pontos.",
      "Excelente integridade estrutural para projetos de renda autônoma (FSL).",
      "Configuração de centro focal e densidade de anéis totalmente editável."
    ],
    commonErrors: [
      "❌ Digitalizar o centro da teia com todos os raios convergindo para o mesmo ponto exato (0,0), criando um nó duro e furando o tecido.",
      "❌ Fazer os anéis da teia muito abertos em rendas FSL, fazendo a renda esfarelar ao dissolver a entretela.",
      "❌ Usar densidade excessiva em temas infantis, deixando a teia pesada e sem o aspecto aéreo característico."
    ],
    troubleshootingTips: [
      "A agulha bateu no centro da teia e quebrou a linha: configure um pequeno círculo vazado no centro (Hub Hole de 2 mm) para que os pontos não colidam no mesmo nó central.",
      "A renda em teia desmanchou na água: aumente o número de raios e ative pontos de amarração dupla nas interseções dos anéis.",
      "As linhas da teia ficaram tortas no tecido: utilize entretela firme e certifique-se de que a tensão da linha esteja perfeitamente calibrada."
    ],
    dicaArtrelados: "Para fazer aquela fantasia de super-herói que a criançada ama: borde o Web Pattern com linha de poliéster prata metálica ou linha que brilha no escuro (Glow-in-the-Dark) sobre feltro preto! Fica simplesmente espetacular e vende como água no mês das crianças e no Carnaval!",
    voceSabia: "A teia de aranha natural é um dos polímeros proteicos mais resistentes da natureza, possuindo resistência à tração 5 vezes superior à do aço de mesma espessura!",
    practicalExercise: "No seu programa de matrizes, crie um círculo de 80 mm e aplique o preenchimento em teia (Web Motif). Mova o ponto de centro para a lateral e veja como a teia ganha uma perspectiva tridimensional dinâmica.",
    quickSummary: "Padrão decorativo de preenchimento radial com geometria de teia de aranha, perfeito para temas de heróis, fundos leves e rendas autônomas.",
    relatedTerms: ["Motif Fill", "Preenchimento Radial", "FSL", "Renda Solta", "Mandala", "Padrão Decorativo", "Halloween"],
    tags: ["webpattern", "padraoteia", "spiderweb", "preenchimento", "motif", "decorativo", "fsl"]
  },
  {
    id: "web-structure-estrutura-em-teia-nao-tecida-interfacing-web",
    code: "W-040",
    letter: "W",
    term: "Web Structure — Estrutura em Teia Não-Tecida (Non-Woven Matrix & Fiber Bonding)",
    pronunciation: "uéb strák-tcher — es-tru-tu-ra em tei-a não-te-ci-da (wɛb ˈstrʌktʃər)",
    level: "Avançado 🔴",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'web structure' (matriz estrutural em teia). Engenharia de materiais não-tecidos (TNT) e processos de calandragem térmica de fibras sintéticas.",
    summary: "Arranjo microscópico tridimensional de fibras têxteis dispostas em teia aleatória e consolidadas por calor e resinas, que define a resistência ao rasgo e picotamento das entretelas.",
    definition: "A Web Structure (Estrutura em Teia Não-Tecida / Matriz de Fibras Consolidadas / Non-Woven Fiber Architecture) é a morfologia física interna e o modo de distribuição das fibras sintéticas (poliéster, poliamida, celulose ou PVA) que constituem as mantas não-tecidas (TNT) utilizadas no bordado computadorizado. Ao contrário dos tecidos planos com eixos fixos ortogonais (urdume e trama), a estrutura em teia apresenta orientação randômica multidirecional das fibras, o que confere isotropia mecânica (mesma resistência à tração em todas as direções).",
    technicalDetails: "A integridade da Web Structure é determinada por três processos industriais de consolidação: 1) Termoligada (Thermobonded): pontos microscópicos de solda térmica fundem as fibras cruzadas, conferindo toque liso e corte limpo; 2) Hidroentrelaçada (Spunlace): jatos de água em altíssima pressão entrelaçam as fibras, gerando extrema maciez e alta absorção; 3) Resina Química (Chemical Bonded): resinas acrílicas que controlam se a entretela rasgará de forma limpa em qualquer direção (Tearaway multidirecional) ou se exigirá corte por tesoura (Cutaway de alta tenacidade).",
    beginnerExplanation: "É o jeito que as fibras e fiapinhos de dentro da entretela são grudados e prensados na fábrica! Quando a teia de fibras é bem feita e de boa qualidade, a entretela rasga suavemente sem esfiapar e segura o bordado no lugar certinho. Se a teia for de má qualidade, ela rasga no meio do bordado e estraga a costura!",
    howItWorks: [
      "1. A fábrica mistura microfibras de poliéster e celulose em fluxo de ar contínuo.",
      "2. As fibras formam uma manta homogênea em teia tridimensional aleatória.",
      "3. Cilindros aquecidos a laser (calandras) comprimem a teia soldando os pontos de contato.",
      "4. A entretela resultante adquire resistência uniforme em 360 graus.",
      "5. No ateliê, ao ser colocada no bastidor, a entretela suporta as perfurações da agulha sem abrir rasgos lineares.",
      "6. Após o bordado, as fibras rompem-se de forma controlada apenas ao redor do contorno dos pontos.",
      "7. O bordado final mantém sua estabilidade dimensional por toda a vida útil da peça."
    ],
    applications: [
      "Seleção técnica de entretelas rasgáveis multidirecionais de alta qualidade.",
      "Prevenção do fenômeno de corte por estampagem em matrizes de alta densidade.",
      "Fabricação de entretelas hidrossolúveis de alta resistência para rendas FSL.",
      "Garantia de toque aveludado no avesso de roupas infantis e de alto padrão."
    ],
    characteristics: [
      "Orientação randômica de fibras que confere resistência isotrópica multidirecional.",
      "Evita a propagação de rasgos na linha de perfuração da agulha.",
      "Define o comportamento de rasgo (limpo e suave) ou resistência ao corte."
    ],
    commonErrors: [
      "❌ Comprar entretelas baratas com estrutura em teia irregular (cheia de pontos grossos e falhas finas), fazendo o bordado repuxar desigualmente.",
      "❌ Confundir entretelas com teia unidirecional (que só rasgam para um lado) com entretelas multidirecionais de qualidade profissional.",
      "❌ Armazenar entretelas em locais úmidos, degradando a resina de consolidação da teia de fibras."
    ],
    troubleshootingTips: [
      "A entretela rasga em tiras compridas e não sai limpa ao redor do bordado: a entretela possui estrutura unidirecional de baixa qualidade; troque por entretela rasgável multidirecional (Easy-Tear).",
      "O tecido afundou durante o bordado de um brasão pesado: a estrutura da entretela era fina demais; use uma entretela de maior gramatura (80 g/m²) com teia termoligada mais densa.",
      "Ficaram fiapos brancos saindo para fora das bordas do bordado: aponte uma tesoura curva de precisão bem afiada rente aos pontos de arremate."
    ],
    dicaArtrelados: "Para saber se a sua entretela rasgável é boa: tente rasgar um pedacinho na horizontal, outro na vertical e outro na diagonal! Se ela rasgar macia e retinha em todas as três direções como uma folha de papel de seda nobre, ela é uma entretela profissional de primeira linha!",
    voceSabia: "A tecnologia moderna de mantas não-tecidas (TNT) foi criada na Alemanha na década de 1930 para reaproveitar fibras têxteis nobres que sobravam da fiação de algodão e lã!",
    practicalExercise: "Pegue duas marcas diferentes de entretela rasgável do seu ateliê e faça o 'Teste do Rasgo em 3 Direções'. Veja qual delas rasga com mais facilidade e deixa menos fiapos soltos.",
    quickSummary: "Estrutura interna de fibras aleatórias consolidadas por calor e resinas que determina a estabilidade, resistência e comportamento de rasgo da entretela de bordado.",
    relatedTerms: ["TNT", "Não-Tecido", "Spunbond", "Calandragem", "Entretela Multidirecional", "Isotropia Têxtil", "Tearaway"],
    tags: ["webstructure", "estruturateia", "tnt", "fibras", "entretela", "engenharia", "estabilidade"]
  }
];

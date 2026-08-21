import { Verbete } from "../types";

export const VERBETES_LETTER_M_PART1: Verbete[] = [
  {
    id: "m-001-matriz-de-bordado-arquivo-programacao-punching",
    code: "M-001",
    term: "Matriz de Bordado (Embroidery Design File / Digitized Stitch Pattern)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino / Do latim 'matrix' (origem, molde gerador) e do francês 'broderie'.",
    origin: "Evolução dos cartões perfurados criados por Joseph Marie Jacquard (1804) e adaptados para o bordado mecânico por Isaak Gröbli (1863), hoje convertidos em coordenadas cartesianas digitais (X, Y) e comandos de máquina executados por microprocessadores CNC.",
    summary: "Arquivo digital contendo todas as coordenadas de pontos (X, Y), comandos de salto, corte de linha, trocas de cores e velocidades que orientam a máquina de bordar na execução do desenho.",
    definition: "A Matriz de Bordado (Embroidery File / Matriz Digitalizada / Arquivo de Pontos) é a instrução computacional vetorial e binária que comanda os servomotores do pantógrafo e o cabeçote da máquina de bordar computadorizada. Diferente de uma imagem gráfica convencional (como JPEG, PNG ou SVG, que apenas exibem pixels ou curvas visuais), a matriz de bordado é um roteiro cinemático completo: ela especifica a ordem exata em que cada agulhada será inserida, os ângulos e tipos de pontos (satim, tatami, corrido), os sob-pontos de sustentação (underlay), a compensação de repuxo mecânico, as paradas automáticas para troca de cor e os cortes de fio.",
    technicalDetails: "Estrutura computacional e dados da matriz de bordado:\n• Coordenadas Cartesianas: Vetores binários de deslocamento incremental em passos de décimos de milímetro (0,1 mm por pulso de motor);\n• Comandos de Máquina (Machine Functions): Stop (parada de troca de cor), Jump (salto sem penetração), Trim (acionamento das facas de corte), End (finalização de arquivo e retorno à origem);\n• Formatos Binários Principais: DST (Tajima / Universal sem paleta de cores interna), PES (Brother / Babylock), JEF (Janome), EXP (Bernina / Melco), VP3 / HUS (Husqvarna Viking / Pfaff), XXX (Singer);\n• Parâmetros Vetoriais: Inclui densidade (espaçamento entre linhas de pontos), comprimento mínimo e máximo de ponto, sob-pontos (Center Walk, Edge Walk, Tatami Underlay) e compensação de tração (Pull Compensation).",
    howItWorks: [
      "1. O programador (puncionador/digitizer) abre o desenho vetorial no software de criação de bordados (Wilcom, Embird, Pe-Design).",
      "2. Converte as formas geométricas em tipos de pontos específicos (ponto cheio para letras, tatami para fundos, ponto corrido para contornos finos).",
      "3. Define a rota de bordado, a ordem sequencial das cores e os pontos de ancoragem e travamento (Lock Stitches).",
      "4. Aplica compensações de repuxo e densidades adequadas ao tecido em que a peça será bordada.",
      "5. Exporta o arquivo no formato nativo da máquina de bordar do cliente (ex: .PES ou .DST).",
      "6. O arquivo é transferido para a máquina via pen drive USB, cabo de rede ou conexão Wi-Fi.",
      "7. A máquina lê as coordenadas, movimenta o pantógrafo e costura a matriz com fidelidade milimétrica sobre o tecido montado no bastidor."
    ],
    beginnerExplanation: "A matriz de bordado é a 'receita de bolo' digital que diz para a máquina de bordar exatamente o que fazer! Uma imagem comum no celular (como uma foto JPG) a máquina não consegue entender. A matriz pega esse desenho e transforma em milhares de passinhos de agulha: onde furar primeiro, que cor usar, quando cortar a linha e quando pular de uma letra para a outra. Sem a matriz de bordado, a máquina de bordar é apenas um computador esperando comandos!",
    applications: [
      "Bordado de logotipos corporativos em camisas polo, jaquetas e uniformes profissionais",
      "Confecção de enxovais de bebê personalizados com nomes, brasões e monogramas",
      "Criação de chaveiros, apliques, máscaras e projetos 100% In The Hoop (feitas no bastidor)",
      "Bordados tridimensionais em relevo 3D Puff para bonés e jaquetas esportivas"
    ],
    commonErrors: [
      "Tentar colocar uma foto em JPG ou PNG direto no pen drive e esperar que a máquina borde",
      "Redimensionar uma matriz pronta em mais de 20% no painel da máquina sem recalcular a densidade de pontos no software",
      "Usar matriz digitalizada para tecido duro (jeans) em um tecido mole e elástico (malha) sem ajustar os sob-pontos e a compensação"
    ],
    troubleshootingTips: [
      "Se o desenho repuxou ou criou frestas entre o preenchimento e o contorno: aumente a compensação de repuxo no software de edição",
      "Ao redimensionar uma matriz, prefira sempre alterar o tamanho dentro do software original de digitalização para que ele aumente ou diminua o número total de pontos mantendo a densidade correta",
      "Salve sempre uma cópia da matriz no formato editável original do software (.EMB, .EOF) antes de exportar para a máquina (.PES, .DST)"
    ],
    dicaArtrelados: "Nunca redimensione uma matriz muito grande no painel da máquina! Se você diminuir um desenho pela metade na máquina, ela vai espremer a mesma quantidade de pontos em um espaço minúsculo, virando uma 'pedra' de linha dura que pode quebrar a agulha e furar a roupa. Redimensione sempre no computador!",
    voceSabia: "O termo 'Punching' (puncionamento) usado até hoje para a criação de matrizes vem da época em que os desenhistas furavam manualmente cartões de papelão rígido com um perfurador de ferro para alimentar os primeiros teares de bordado do século XIX!",
    practicalExercise: "Abra um software de bordado gratuito ou o visualizador da sua máquina: carregue um arquivo de matriz, visualize a simulação do trajeto ponto a ponto e observe como cada elemento é construído antes de iniciar a cor seguinte!",
    quickSummary: "Arquivo digital com coordenadas cartesianas e comandos que instruem a máquina de bordar a costurar o desenho no tecido.",
    relatedTerms: ["Digitalização de Matrizes", "Formato DST", "Formato PES", "Densidade de Ponto", "Compensação de Repuxo"],
    tags: ["m-001", "matriz de bordado", "arquivo de bordado", "punching", "dst", "pes", "wilcom", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Embroidery Studio: Digitizing Fundamentals and Stitch Architecture. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Arte da Digitalização Perfeita: Matrizes, Formatos Digitais, Compensações e Cinemática CNC. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-002-malha-tecidos-elasticos-jersey-knit-embroidery",
    code: "M-002",
    term: "Malha e Tecidos Elásticos (Knit Fabrics, Jersey & Stretch Embroidery)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino / Do latim 'macula' (laço, rede) / Têxteis de laçadas entrelaçadas.",
    origin: "Estrutura têxtil produzida pelo entrelaçamento contínuo de laçadas de fios (diferente dos tecidos planos de urdume e trama), originária da malharia manual ancestral e consagrada no século XX com o vestuário esportivo e casual (camisetas de algodão, viscolycra, ribana e cotton).",
    summary: "Tecido estruturado por laçadas móveis com alta elasticidade e memória mecânica, que exige estabilização firme (entretela de corte), agulha ponta bola e compensação de repuxo moderada.",
    definition: "A Malha (Jersey / Knit Fabrics / Tecidos de Malharia Circular e Retilínea) é um substrato têxtil caracterizado pela sua elasticidade multidirecional, flexibilidade e capacidade de adaptação ao corpo humano. Como suas fibras são compostas por laçadas interligadas que se movem livremente sob tração mecânica, a malha tende a esticar e deformar facilmente quando puxada pela tensão dos pontos de bordado. Para bordar malhas sem criar enrugamento (puckering), distorções geométricas ou furos causados pelo corte das laçadas, é obrigatório o uso de agulha de ponta bola (Ball Point / SES), entretela de corte limpo (Cut-Away) e plastiquinho solúvel (Topping) na superfície para que os pontos não afundem.",
    technicalDetails: "Propriedades físicas e parametrização para bordar em malha:\n• Tipos Principais: Meia Malha Penteada 100% Algodão (30.1 e 24.1), Viscolycra, Piquet de Algodão/Poliéster, Ribana Canelada, Suplex e Moletinho;\n• Estabilização Obrigatória: Entretela de corte definitivo (Cut-Away / Rasga-Fácil Especial) de 50 g/m² a 70 g/m² no verso; NUNCA usar apenas entretela rasgável simples, pois a malha cede nas lavagens;\n• Agulha Indicada: Agulha com ponta bola fina (Ball Point / SES calibre 70/10 ou 75/11) que afasta os fios da malha sem cortá-los;\n• Película Superior (Topping): Filme plástico hidrossolúvel de 20 micras na superfície para manter as colunas de satim e letras flutuando com nitidez;\n• Ajuste de Matriz: Reduzir a densidade de pontos em 10% a 15% (espaçamento de 0,42 mm a 0,45 mm) e aplicar sob-ponto em grade (Tatami Underlay) para ancorar a malha à entretela.",
    howItWorks: [
      "1. A bordadeira aplica uma folha de entretela de corte (Cut-Away) no avesso da camiseta ou body de bebê.",
      "2. Coloca a malha no bastidor sem puxar ou esticar excessivamente o tecido (o tecido deve ficar assentado como uma folha de papel lisa, sem tensão de estiramento).",
      "3. Posiciona uma folha de plástico solúvel (hidrossolúvel) sobre a frente da malha.",
      "4. Instala uma agulha nova de ponta bola fina (Ball Point 75/11).",
      "5. A máquina borda o desenho: a agulha penetra entre as laçadas sem rompê-las e o sob-ponto trava a elasticidade.",
      "6. Ao finalizar, remove-se o plástico solúvel com água morna e recorta-se a entretela de corte pelo avesso deixando uma margem redonda de 5 mm.",
      "7. A camiseta de malha mantém o caimento macio, sem rugas ao redor do bordado e sem deformar após sucessivas lavagens."
    ],
    beginnerExplanation: "Bordar em malha (como camisetas de algodão ou roupinhas de bebê) é diferente de bordar em pano durinho! Como a malha estica para todo lado igual chiclete, se você não segurar ela direito, o bordado puxa o pano e a camiseta fica toda enrugada parecendo um babado. Para bordar malha com perfeição, você precisa de 3 segredinhos: 1) usar agulha ponta bola (que não fura o fio da malha); 2) usar entretela de recorte que não rasga; e 3) nunca esticar a malha na hora de prender no bastidor!",
    applications: [
      "Camisetas casuais de meia-malha de algodão 30.1 com logotipos no peito",
      "Bodies de bebê, pagões e mijões em malha suedine 100% algodão",
      "Camisas polo em malha piquet com brasões e monogramas corporativos",
      "Vestuário fitness em suplex, poliamida e lycra com números e nomes esportivos"
    ],
    commonErrors: [
      "Esticar a malha como um tambor dentro do bastidor (quando tira do bastidor, a malha relaxa e o bordado enruga todo)",
      "Usar agulha ponta fina afiada (Microtex/Universal gasta) que corta os fios da malha, criando furinhos ao redor do bordado após a primeira lavada",
      "Usar entretela rasgável fina que se desfaz na máquina, fazendo o bordado perder o formato com o uso"
    ],
    troubleshootingTips: [
      "Para colocar malha no bastidor sem esticar: monte apenas a entretela no bastidor e cole a camiseta por cima usando cola temporária em spray (técnica de flutuação / Float)",
      "Se aparecerem pequenos furos nas bordas do bordado: troque imediatamente a agulha por uma Ball Point novinha calibre 70/10",
      "Aplique sempre uma película de acabamento macio (protetor de avesso termocolante) no avesso do body de bebê para não irritar a pele sensível"
    ],
    dicaArtrelados: "O maior erro de quem borda malha é esticar o tecido no bastidor! Ao fechar o bastidor, passe a palma da mão suavemente sobre a malha: ela deve estar retinha, mas com a mesma elasticidade natural de quando está sobre a mesa. Se você esticar a malha no aro, ela vai encolher assim que sair da máquina e o bordado vai ficar enrugado para sempre!",
    voceSabia: "O tecido de malha foi introduzido na alta moda feminina no início da década de 1920 pela estilista francesa Coco Chanel, que utilizou o tecido Jersey (antes restrito a roupas de baixo masculinas) para criar vestidos confortáveis e revolucionários!",
    practicalExercise: "Pegue uma camiseta velha de malha: corte um retalho, aplique entretela de corte no avesso, prenda no bastidor sem esticar, use agulha ponta bola e borde um monograma. Compare com outro retalho montado com entretela rasgável e agulha afiada para ver a diferença colossal de estabilidade!",
    quickSummary: "Tecido elástico de laçadas entrelaçadas que exige agulha ponta bola, entretela de corte e estabilização sem estiramento no bastidor.",
    relatedTerms: ["Agulha Ponta Bola", "Entretela de Corte (Cut-Away)", "Flutuação (Float)", "Enrugamento (Puckering)", "Suedine"],
    tags: ["m-002", "malha", "jersey", "tecidos elasticos", "camiseta", "body de bebe", "cut-away", "ponta bola", "artrelados"],
    bibliographicReferences: [
      "KNITTING INDUSTRY FEDERATION. Circular and Flat Knit Embroidery Stability Standards. Leicester: KIF, 2022.",
      "ARTRELADOS. O Segredo das Malhas e Tecidos Elásticos: Estabilização sem Tensão, Agulhas Ball Point e Acabamento de Alta Durabilidade. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-003-microtex-agulha-ponta-aguda-micro-sharp-needle",
    code: "M-003",
    term: "Microtex e Agulhas Ponta Aguda (Microtex / Micro-Sharp Precision Needles)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino / Do sistema métrico 'micro' (muito fino) e 'textil'.",
    origin: "Desenvolvida pela fabricante alemã Schmetz e pela japonesa Organ Needles para permitir a penetração cirúrgica e retilínea em tecidos de microfibras densas, sedas nobres, tecidos resinados e materiais sintéticos laminados.",
    summary: "Agulha com haste ultra-afiada e ponta cônica aguda extrema (SPI / Micro-Sharp), ideal para linhas retas perfeitas, sedas finas, cetins e bordados sobre vinil.",
    definition: "A Agulha Microtex (Micro-Sharp Needle / Agulha de Ponta Aguda Fina / Sistema 130/705 H-M ou DBx1 SPI) é uma agulha especializada caracterizada por uma ponta cônica extremamente delgada, pontiaguda e afiada. Ao contrário da agulha universal ou ponta bola (que arredondam o ápice para empurrar as fibras para o lado), a Microtex perfura o centro das tramas mais compactadas com o mínimo de resistência e deflexão mecânica. É a escolha obrigatória para bordados de micro-letras e detalhes em tecidos de alta densidade de fios (como seda pura, microfibra, tafetá, organza, popeline de algodão egípcio e materiais laminados como corino sintético).",
    technicalDetails: "Geometria e propriedades da agulha Microtex:\n• Formato da Ponta: Ponta Aguda Cônica Extrema (Acute Round Point - SPI / Slim Point);\n• Calibres Típicos: 60/8 (ultrafina para seda), 65/9, 70/10 e 80/12 (para microfibras e sintéticos);\n• Penetração Retilínea: Reduz a deflexão lateral da agulha em até 40% ao perfurar tecidos densos, garantindo pontos de contorno retos sem ziguezagueamento indesejado;\n• Orifício de Perfuração Reduzido: Cria furos microscópicos que se fecham naturalmente após a lavagem em tecidos finos;\n• Limitação de Uso: Por ser muito afiada, NUNCA deve ser usada em tecidos de malha elástica de algodão solta (pode cortar as laçadas e criar furos).\n• Durabilidade: A ponta afiada desgasta-se mais rapidamente que a ponta bola, exigindo troca a cada 6 a 8 horas de bordado contínuo.",
    howItWorks: [
      "1. A bordadeira identifica que o tecido a ser bordado é uma seda pura, cetim de noiva ou microfibra acetinada.",
      "2. Instala uma agulha nova Microtex calibre 70/10 na máquina.",
      "3. Passa linha fina 60wt ou poliéster 40wt de alta qualidade.",
      "4. A máquina inicia o bordado: a ponta cirúrgica da agulha penetra as fibras microscópicas sem empurrar o tecido para baixo nem repuxar o cetim.",
      "5. Os contornos de letras finas e arabescos saem perfeitamente nítidos e retilíneos.",
      "6. Não há marcas de furos grandes ou repuxados ao redor do bordado.",
      "7. A peça de alta-costura é finalizada com padrão de alfaiataria impecável."
    ],
    beginnerExplanation: "A agulha Microtex é como um 'bisturi cirúrgico' em forma de agulha! Enquanto as outras agulhas têm a pontinha levemente arredondada para empurrar os fios do pano, a Microtex é super afiada e pontuda como a ponta de um alfinete de aço! Ela foi feita sob medida para tecidos chiques, lisos e finos como cetim, seda, tafetá e microfibra. Quando ela entra no tecido, ela perfura tão macio e retinho que as letrinhas pequenas do bordado ficam nítidas como se fossem impressas em papel!",
    applications: [
      "Bordados delicados em vestidos de noiva de cetim, tafetá e organza de seda",
      "Monogramas em camisas sociais masculinas de algodão egípcio de alta contagem de fios (fio 80 a 120)",
      "Micro-letras de 3 mm a 5 mm em uniformes corporativos sofisticados",
      "Bordados em courino, vinil impermeável e tecidos sintéticos esportivos impermeáveis"
    ],
    commonErrors: [
      "Usar agulha Microtex afiada em camisetas de malha comum de algodão (corta os fios e cria buracos nas lavagens)",
      "Continuar usando a agulha Microtex após ela perder o fio da ponta (ela fica cega e começa a fazer barulho de 'soco' no tecido)",
      "Usar agulha Microtex grossa (90/14) em tecidos de seda ultrafina (deixa buracos visíveis)"
    ],
    troubleshootingTips: [
      "Se as letras pequenas estão ficando tortas ou com contornos tremidos: substitua a agulha universal por uma Microtex 70/10 novinha",
      "Em cetim de seda: use sempre agulha Microtex 65/9 ou 70/10 com entretela hidrossolúvel ou entretela de papel fina",
      "Passe a ponta da unha na ponta da agulha: se sentir qualquer rebarba ou se a agulha enroscar na pele, descarte-a imediatamente"
    ],
    dicaArtrelados: "Vai bordar nomes pequenos ou monogramas em camisas sociais e roupões de cetim de noiva? Coloque uma agulha Microtex 70/10 com linha fina de poliéster 60wt. O bordado fica tão fino, nítido e perfeito que parece pintura de joalheria!",
    voceSabia: "O raio da ponta de uma agulha Microtex é de apenas 0,02 mm (quase cinco vezes mais afiado que o raio de uma agulha de ponta bola padrão de 0,10 mm)!",
    practicalExercise: "Coloque uma agulha Microtex 70/10 na máquina e borde uma palavra pequena em letra cursiva sobre um retalho de cetim: observe a limpeza das curvas e a ausência total de repuxados no brilho do tecido!",
    quickSummary: "Agulha de ponta extremamente afiada e cônica, ideal para penetração cirúrgica em tecidos finos, densos, cetins e microfibras.",
    relatedTerms: ["Agulha Ponta Bola", "Calibre de Agulha", "Micro-Letras", "Cetim", "Deflexão de Agulha"],
    tags: ["m-003", "microtex", "agulha afiada", "ponta aguda", "cetim", "seda", "micro-letras", "schmetz", "organ", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES GMBH. Microtex Precision Needle Technical Bulletin and Penetration Dynamics. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. Agulhas de Alta Precisão: Geometria de Pontas, Microtex, Titânio e Comportamento Têxtil no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-004-mola-estica-fio-mola-compensacao-check-spring",
    code: "M-004",
    term: "Mola Estica-Fio e Mola de Compensação (Take-up Spring / Thread Check Spring)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Da cinemática mecânica e dinâmica de tensões de linha.",
    origin: "Mecanismo flexível de amortecimento desenvolvido para absorver o choque mecânico e recolher a folga transitória da linha superior durante o movimento alternado da alavanca estica-fio em máquinas de costura e bordado industriais.",
    summary: "Pequena mola espiral calibrada situada junto aos tensores superiores que recolhe a folga da linha e amortece solavancos até a agulha penetrar no tecido.",
    definition: "A Mola Estica-Fio (Check Spring / Take-up Spring / Mola de Compensação de Tensão Superior / Mola Amortecedora de Linha) é um componente mecânico de altíssima sensibilidade localizado no conjunto de tensores superiores do cabeçote da máquina de bordar. Sua função principal é dupla: 1) manter uma leve tensão constante sobre a linha superior durante a descida da alavanca estica-fio, evitando que o fio fique solto e enrosque na ponta da agulha; e 2) amortecer o pico repentino de tração no momento em que a agulha penetra o tecido e a lançadeira começa a expandir a laçada. O curso angular (amplitude de movimento) e a pressão dessa mola determinam a estabilidade do ponto e a ausência de laços soltos na superfície.",
    technicalDetails: "Engenharia e regulagem da mola de compensação (Check Spring):\n• Curso Mecânico Típico: 5 mm a 8 mm de deflexão angular ativa;\n• Ponto de Alívio (Timing): A mola deve liberar a linha exatamente no instante em que a ponta da agulha atinge o tecido;\n• Força de Tensão da Mola: 0,05 N a 0,15 N (calibrada para ceder suavemente ao puxar o fio com os dedos);\n• Amortecimento de Fios Frágeis: Essencial para evitar o rompimento por choque elástico de linhas metálicas, viscose rayon e fios foscos de algodão;\n• Efeito de Mola Quebrada ou Travada: Gera laços soltos gigantescos (Loops) na parte superior do bordado, falhas na detecção de quebra de linha e nós na lançadeira.",
    howItWorks: [
      "1. A linha superior sai dos discos tensores e passa pelo gancho da mola estica-fio (check spring).",
      "2. A alavanca estica-fio principal desce para fornecer linha à agulha.",
      "3. Conforme a linha desce, a mola de compensação sobe suavemente recolhendo a folga e mantendo o fio esticado.",
      "4. Quando a ponta da agulha toca o tecido, a mola encosta no seu batente mecânico inferior e para.",
      "5. A linha entra sob a ação direta dos discos tensores para formar o ponto.",
      "6. A alavanca sobe, a mola retorna à posição inicial e o ciclo se repete até 1.200 vezes por minuto.",
      "7. O resultado é uma linha sem nós, sem laçadas soltas e sem quebras por trancos."
    ],
    beginnerExplanation: "A mola estica-fio (ou mola de compensação) é como o 'amortecedor de carro' da linha de bordar! Conforme a máquina costura em alta velocidade, a linha sobe e desce dando pulinhos rápidos. Se não tivesse essa molinha para segurar o fio esticado com carinho, a linha ficaria frouxa e dançando no ar, enrolando na ponta da agulha ou fazendo aquele bolo de linha horroroso em cima do bordado. Quando a molinha está boa e flexível, a máquina costura macia e suave como seda!",
    applications: [
      "Amortecimento dinâmico de fios metálicos e filamentos delicados em alta rotação",
      "Formação de pontos precisos e uniformes em máquinas monoelemento e industriais multicabeçotes",
      "Eliminação de laços soltos e fios arrepiados na superfície de pontos cheios",
      "Acionamento correto dos sensores ópticos e eletrônicos de quebra de linha"
    ],
    commonErrors: [
      "Esquecer de passar a linha pelo ganchinho da mola de compensação na hora de passar a linha na máquina",
      "Deixar fiapos e poeira acumulados na base da mola impedindo o seu movimento livre de vaivém",
      "Continuar bordando com a mola quebrada ou desencaixada (causa laços soltos contínuos)"
    ],
    troubleshootingTips: [
      "Verifique se a mola se move para cima e para baixo livremente toda vez que você puxa a linha perto da agulha",
      "Se o bordado está cheio de laçadas soltas na frente mesmo com a tensão dos discos apertada: verifique se a linha não escapou da mola de compensação",
      "Limpe o conjunto de tensores superiores com um pincel seco a cada 15 dias para garantir o curso livre da mola"
    ],
    dicaArtrelados: "A máquina começou a fazer laços soltos em cima do bordado de uma hora para outra? Antes de mexer nos botões de tensão, olhe a passagem de linha: 90% das vezes a linha pulou para fora da molinha estica-fio durante uma troca rápida de cone! Passe a linha de novo encaixando na mola e o problema desaparece!",
    voceSabia: "A mola de compensação de linha foi uma das primeiras patentes mecânicas adicionadas às máquinas de costura no século XIX por Isaac Singer para permitir que as máquinas operassem a mais de 300 pontos por minuto sem quebrar a linha!",
    practicalExercise: "Com a máquina desligada e a linha passada: puxe a linha com a mão logo acima da agulha e observe a pequena molinha no tensor superior descendo e subindo como um amortecedor suave!",
    quickSummary: "Mola espiral amortecedora no tensor superior que absorve o choque mecânico e recolhe a folga da linha durante o ciclo de costura.",
    relatedTerms: ["Alavanca Estica-Fio", "Tensão Superior", "Discos Tensores", "Sensor de Quebra de Linha"],
    tags: ["m-004", "mola estica-fio", "check spring", "take-up spring", "tensao superior", "mecanica", "amortecedor", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL BULLETIN. Thread Tension Assembly, Check Spring Calibration and Dynamic Loop Formation. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Cinemática do Cabeçote: Molas de Compensação, Alavancas Estica-Fio e Amortecimento Dinâmico no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-005-monograma-letras-tipografia-lettering-monogram",
    code: "L-005",
    term: "Monograma e Tipografia de Bordado (Monogram, Lettering & Embroidery Typography)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino / Do grego 'monogrammos' (composto por uma só linha/letra).",
    origin: "Prática heráldica e aristocrática milenar de entrelaçar as iniciais de nomes reais em moedas, selos e lençóis nobres, modernizada no bordado computadorizado com fontes vetoriais digitalizadas especificamente para a física dos pontos de costura.",
    summary: "Arte e técnica de digitalizar e bordar letras, iniciais e nomes combinados em estilos clássicos, cursivos ou modernos com clareza visual e leitura perfeita.",
    definition: "O Monograma no Bordado Eletrônico (Monogramming / Embroidery Lettering / Tipografia Bordada) é a composição visual de uma ou mais letras (geralmente as iniciais de uma pessoa, casal, brasão de família ou marca) desenhadas com parâmetros específicos de compensação e densidade para costura. Diferente de fontes tipográficas de computador para impressão gráfica (TrueType / OpenType), as fontes de bordado (Keyboard Embroidery Fonts) possuem propriedades vetoriais tridimensionais exclusivas: controle de ângulo de ponto por segmento, sob-pontos de sustentação anatômicos, compensação de tração para manter a largura das hastes constante e nós de arremate automáticos em cada letra.",
    technicalDetails: "Parâmetros técnicos para digitalização de monogramas e letras:\n• Tipologias Clássicas: Monograma Tradicional de 3 Letras (com a inicial do sobrenome maior ao centro), Monograma Círculo (Circle Monogram), Monograma Diamante (Diamond Monogram), Letras Cursivas e Fontes Serifadas;\n• Largura Mínima de Coluna: A largura mínima de qualquer haste de letra em ponto cheio deve ser de 1,0 mm (ideal entre 1,5 mm e 5,0 mm);\n• Altura Mínima de Letras: Letras com serifa exigem altura mínima de 8 mm a 10 mm; letras sem serifa (Sans-Serif) suportam até 5 mm; micro-letras abaixo de 5 mm exigem digitalização especial em ponto corrido triplo ou linha 60wt;\n• Sob-pontos (Underlay): Ponto corrido central (Center Walk) para hastes finas e sob-ponto duplo zigue-zague/tatami para letras capitulares grandes;\n• Sequenciamento e Ramificação (Branching): Ordenação automática dos segmentos para reduzir cortes de linha e saltos desnecessários entre letras conectadas.",
    howItWorks: [
      "1. A bordadeira seleciona a fonte de bordado adequada no software ou no painel da máquina.",
      "2. Digita as iniciais do cliente (ex: M, C, S) e escolhe a moldura ou moldura floral decorativa.",
      "3. O software gera as colunas de ponto cheio com os ângulos corretos em cada curva da letra.",
      "4. Ajusta a densidade padrão (0,38 mm a 0,40 mm) e adiciona compensação de repuxo de 0,35 mm.",
      "5. A matriz é enviada para a máquina de bordar.",
      "6. A máquina costura primeiro os sob-pontos de base que fixam o tecido e em seguida borda as colunas cheias e brilhantes das letras.",
      "7. O monograma finalizado exibe letras volumosas, contornos nítidos e leitura perfeita.",
    ],
    beginnerExplanation: "O monograma é aquele bordado clássico e elegante com as iniciais do nome da pessoa (como aquelas letras lindas entrelaçadas em toalhas de banho finas, camisas sociais e bolsas de maternidade)! No bordado a máquina, as letras precisam ser desenhadas com muito cuidado: se a perninha da letra for fina demais, ela some no tecido; se for gorda demais, ela fica parecendo uma mancha de tinta. O monograma bem feito tem letras gordinhas, brilhantes e que todo mundo consegue ler com facilidade de longe!",
    applications: [
      "Enxovais de banho de luxo, toalhas de rosto, roupões e jogos de cama de casal",
      "Bolsas de maternidade, mantas de bebê, fraldinhas e bodies personalizados",
      "Punhos e bolsos de camisas sociais masculinas de alta alfaiataria",
      "Guardanapos de linho para casamentos, bodas e jantares formais"
    ],
    commonErrors: [
      "Tentar bordar letras menores que 5 mm usando fontes grossas em ponto cheio (as letras fecham os buracos e viram borrões)",
      "Bordar monogramas em toalhas felpudas sem usar plástico solúvel por cima (as felpas engolem os pontos finos da letra)",
      "Usar fontes gráficas de Windows (TrueType) com conversão automática sem revisar a largura das colunas e os sob-pontos"
    ],
    troubleshootingTips: [
      "Para bordar monogramas em toalhas felpudas: use sempre uma folha de entretela hidrossolúvel por cima para as letras ficarem altas e nítidas",
      "Em toalhas de banho e enxovais, prefira fontes dedicadas de bordado (formatos .BX ou fontes nativas do software) em vez de fontes automáticas de computador",
      "Se as letras do monograma ficarem magrinhas no tecido: aumente a compensação de repuxo (Pull Comp) no software para 0,40 mm"
    ],
    dicaArtrelados: "Para um monograma de casal em toalhas de banho clássicas: a regra de ouro é colocar a inicial da noiva à esquerda (menor), a inicial do sobrenome do casal ao centro (bem grande e destacada) e a inicial do noivo à direita (menor). Esse estilo é o que mais vende e agrega valor no ateliê!",
    voceSabia: "Os monogramas eram utilizados na Grécia Antiga a partir do século V a.C. gravados em moedas de prata para identificar a cidade-estado emissora através das iniciais do seu governante!",
    practicalExercise: "Escolha uma fonte clássica no seu software ou máquina, digite a sua inicial com uma moldura redonda e borde em um retalho de tecido com entretela: observe como as colunas de ponto cheio mudam de ângulo nas curvas para refletir o brilho da linha!",
    quickSummary: "Composição artística de iniciais e nomes bordados com tipografia vetorial otimizada para colunas volumosas, brilho e máxima legibilidade.",
    relatedTerms: ["Micro-Letras", "Ponto Satim", "Compensação de Repuxo", "Fontes BX", "Toalhas de Banho"],
    tags: ["m-005", "monograma", "lettering", "tipografia", "letras", "iniciais", "enxoval de luxo", "wilcom", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY GUILD OF AMERICA. The History, Art and Rules of Monogramming. Louisville: EGA, 2021.",
      "ARTRELADOS. A Arte do Monograma e Tipografia de Alta Precisão: Regras Clássicas, Fontes Digitais e Relevo no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-006-manta-acrilica-r1-r2-quilting-fleece-wadding",
    code: "M-006",
    term: "Manta Acrílica R1 e R2 (Fusible Quilted Fleece / Wadding & Batting)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminino / Da tecnologia de não-tecidos sintéticos e acolchoamento.",
    origin: "Desenvolvida para o universo do patchwork, quilting e marcenaria/tapeçaria fina, adaptada ao bordado computadorizado como estruturador tridimensional térmico e volumoso para peças In The Hoop (ITH), bolsas e nécessaires.",
    summary: "Manta estruturadora acolchoada de poliéster com resina termocolante em uma face (R1) ou nas duas faces (R2), que confere corpo, fofura e acolchoamento ao bordado.",
    definition: "A Manta Acrílica Termocolante R1 e R2 (Fusible Fleece / Batting / Manta Estruturadora de Quilt) é um não-tecido volumoso e macio composto por fibras sintéticas de poliéster 100% termofixadas. A versão R1 possui resina termocolante adesiva ativada pelo calor do ferro em apenas uma das faces (ideal para fixar o tecido principal da frente), enquanto a versão R2 possui resina em ambas as faces (para colar o tecido da frente e o tecido de forro simultaneamente). No bordado computadorizado, a manta é o elemento fundamental para estruturar nécessaires, porta-óculos, almofadas, capas de caderno, chaveiros gordinhos e projetos de quilting no bastidor, proporcionando relevo fofo e estabilidade dimensional.",
    technicalDetails: "Propriedades físicas e termofusão de mantas R1 e R2:\n• Composição: 100% Poliéster virgem cardado e termoligado;\n• Gramaturas Comuns: 100 g/m² (Manta leve / fina), 150 g/m² (Manta média padrão) e 200 g/m² (Manta pesada estruturada);\n• Temperatura de Colagem: 130°C a 150°C (ferro a seco na temperatura 'Algodão/Lã') com pressão por 10 a 12 segundos;\n• Comportamento no Bastidor: Por ser fofa e volumosa, exige que a tensão do bastidor não esmague excessivamente a manta (risco de criar marcas de queima de bastidor);\n• Agulha Recomendada: Agulha universal ou agulha de Quilting calibre 80/12 ou 90/14 com ponta bola fina;\n• Retração Térmica: Suporta lavagens normais sem encolher nem formar bolinhas internas.",
    howItWorks: [
      "1. A artesã recorta um pedaço de manta R1 no tamanho do projeto.",
      "2. Posiciona o tecido de algodão (tricoline) sobre o lado áspero (lado com resina) da manta.",
      "3. Passa o ferro quente seco sobre o tecido por 10 segundos: o tecido e a manta viram uma peça única e estruturada.",
      "4. Monta o conjunto no bastidor com uma folha de entretela rasgável por baixo.",
      "5. A máquina borda o quilting decorativo ou os apliques do projeto In The Hoop.",
      "6. A agulha penetra na massa fofa da manta, criando canaletas de relevo tridimensional acolchoado.",
      "7. O resultado é uma peça firme, fofinha, elegante e com toque aveludado profissional."
    ],
    beginnerExplanation: "A manta R1 ou R2 é aquele 'estofadinho mágico' que a gente coloca dentro de nécessaires, bolsas e carteirinhas para deixar a peça gordinha, estruturada e fofinha! A manta R1 tem cola em um lado só (você passa o ferro e o tecido gruda nela), e a R2 tem cola dos dois lados. Quando a máquina borda em cima desse tecido com manta, cada costura afunda um pouquinho e cria aquele efeito de 'acolchoado de edredom' (quilting) maravilhoso que deixa qualquer artesanato com cara de loja de shopping!",
    applications: [
      "Confecção de nécessaires, estojos escolares e carteiras feitas 100% na máquina de bordar (In The Hoop)",
      "Projetos de Quilting no Bastidor (In The Hoop Quilting Blocks) para colchas e almofadas",
      "Capas de caderneta de vacinação, pastas de documentos de bebê e porta-certidões",
      "Chaveiros de tecido acolchoados e enfeites de Natal tridimensionais"
    ],
    commonErrors: [
      "Encostar o ferro de passar quente direto sobre a manta nua (ela derrete e gruda instantaneamente na base do ferro)",
      "Prender o bastidor com parafuso muito apertado esmagando a manta (deixa o aro do bastidor marcado no tecido para sempre)",
      "Bordar com agulha fina 65/9 (a agulha entorta na manta espessa e pode quebrar na chapa)"
    ],
    troubleshootingTips: [
      "Coloque sempre um papel vegetal ou tecido de proteção se precisar passar o ferro perto da manta exposta",
      "Para evitar marcas de bastidor em tecidos com manta: use a técnica de flutuação (prenda só a entretela no bastidor e cole o tecido com a manta por cima)",
      "Use agulha 80/12 ou 90/14 para perfurar a manta e as camadas de tecido com facilidade e sem falhas de ponto"
    ],
    dicaArtrelados: "Para fazer nécessaires e capas de caderneta no bastidor sem ficar com marcas do aro: prenda somente a entretela no bastidor, passe cola spray e assente a sua manta R1 com o tecido já colado por cima! A peça borda livre, fofinha e sai 100% sem nenhuma marca de bastidor no tecido!",
    voceSabia: "O termo 'R1' e 'R2' foi criado pela indústria têxtil brasileira para diferenciar mantas com 'Resina em 1 face' de mantas com 'Resina em 2 faces'!",
    practicalExercise: "Cole um retalho de tricoline sobre um pedaço de manta R1 com o ferro morno: monte no bastidor e borde um desenho de acolchoado (quilting) geométrico: passe os dedos sobre o relevo fofinho e sinta a estrutura da peça!",
    quickSummary: "Manta sintética volumosa de poliéster com resina termocolante em uma ou duas faces, essencial para estruturar nécessaires, bolsas e projetos acolchoados.",
    relatedTerms: ["In The Hoop (ITH)", "Quilting no Bastidor", "Entretela Termocolante", "Tricoline", "Flutuação (Float)"],
    tags: ["m-006", "manta r1", "manta r2", "manta acrilica", "fusible fleece", "quilting", "ith", "estruturador", "artrelados"],
    bibliographicReferences: [
      "AMERICAN QUILTER'S SOCIETY. Batting and Wadding Varieties, Thermal Bonding and Machine Quilting Standards. Paducah: AQS, 2022.",
      "ARTRELADOS. Estruturação Têxtil no Bastidor: Mantas R1/R2, Feltros, Espumas e Criação de Peças In The Hoop Perfeitas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_M: Verbete[] = [
  {
    "id": "m-001-matriz-de-bordado-arquivo-programacao-punching",
    "code": "M-001",
    "term": "Matriz de Bordado (Embroidery Design File / Digitized Stitch Pattern)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Do latim 'matrix' (origem, molde gerador) e do francês 'broderie'.",
    "origin": "Evolução dos cartões perfurados criados por Joseph Marie Jacquard (1804) e adaptados para o bordado mecânico por Isaak Gröbli (1863), hoje convertidos em coordenadas cartesianas digitais (X, Y) e comandos de máquina executados por microprocessadores CNC.",
    "summary": "Arquivo digital contendo todas as coordenadas de pontos (X, Y), comandos de salto, corte de linha, trocas de cores e velocidades que orientam a máquina de bordar na execução do desenho.",
    "definition": "A Matriz de Bordado (Embroidery File / Matriz Digitalizada / Arquivo de Pontos) é a instrução computacional vetorial e binária que comanda os servomotores do pantógrafo e o cabeçote da máquina de bordar computadorizada. Diferente de uma imagem gráfica convencional (como JPEG, PNG ou SVG, que apenas exibem pixels ou curvas visuais), a matriz de bordado é um roteiro cinemático completo: ela especifica a ordem exata em que cada agulhada será inserida, os ângulos e tipos de pontos (satim, tatami, corrido), os sob-pontos de sustentação (underlay), a compensação de repuxo mecânico, as paradas automáticas para troca de cor e os cortes de fio.",
    "technicalDetails": "Estrutura computacional e dados da matriz de bordado:\n• Coordenadas Cartesianas: Vetores binários de deslocamento incremental em passos de décimos de milímetro (0,1 mm por pulso de motor);\n• Comandos de Máquina (Machine Functions): Stop (parada de troca de cor), Jump (salto sem penetração), Trim (acionamento das facas de corte), End (finalização de arquivo e retorno à origem);\n• Formatos Binários Principais: DST (Tajima / Universal sem paleta de cores interna), PES (Brother / Babylock), JEF (Janome), EXP (Bernina / Melco), VP3 / HUS (Husqvarna Viking / Pfaff), XXX (Singer);\n• Parâmetros Vetoriais: Inclui densidade (espaçamento entre linhas de pontos), comprimento mínimo e máximo de ponto, sob-pontos (Center Walk, Edge Walk, Tatami Underlay) e compensação de tração (Pull Compensation).",
    "howItWorks": [
      "1. O programador (puncionador/digitizer) abre o desenho vetorial no software de criação de bordados (Wilcom, Embird, Pe-Design).",
      "2. Converte as formas geométricas em tipos de pontos específicos (ponto cheio para letras, tatami para fundos, ponto corrido para contornos finos).",
      "3. Define a rota de bordado, a ordem sequencial das cores e os pontos de ancoragem e travamento (Lock Stitches).",
      "4. Aplica compensações de repuxo e densidades adequadas ao tecido em que a peça será bordada.",
      "5. Exporta o arquivo no formato nativo da máquina de bordar do cliente (ex: .PES ou .DST).",
      "6. O arquivo é transferido para a máquina via pen drive USB, cabo de rede ou conexão Wi-Fi.",
      "7. A máquina lê as coordenadas, movimenta o pantógrafo e costura a matriz com fidelidade milimétrica sobre o tecido montado no bastidor."
    ],
    "beginnerExplanation": "A matriz de bordado é a 'receita de bolo' digital que diz para a máquina de bordar exatamente o que fazer! Uma imagem comum no celular (como uma foto JPG) a máquina não consegue entender. A matriz pega esse desenho e transforma em milhares de passinhos de agulha: onde furar primeiro, que cor usar, quando cortar a linha e quando pular de uma letra para a outra. Sem a matriz de bordado, a máquina de bordar é apenas um computador esperando comandos!",
    "applications": [
      "Bordado de logotipos corporativos em camisas polo, jaquetas e uniformes profissionais",
      "Confecção de enxovais de bebê personalizados com nomes, brasões e monogramas",
      "Criação de chaveiros, apliques, máscaras e projetos 100% In The Hoop (feitas no bastidor)",
      "Bordados tridimensionais em relevo 3D Puff para bonés e jaquetas esportivas"
    ],
    "commonErrors": [
      "Tentar colocar uma foto em JPG ou PNG direto no pen drive e esperar que a máquina borde",
      "Redimensionar uma matriz pronta em mais de 20% no painel da máquina sem recalcular a densidade de pontos no software",
      "Usar matriz digitalizada para tecido duro (jeans) em um tecido mole e elástico (malha) sem ajustar os sob-pontos e a compensação"
    ],
    "troubleshootingTips": [
      "Se o desenho repuxou ou criou frestas entre o preenchimento e o contorno: aumente a compensação de repuxo no software de edição",
      "Ao redimensionar uma matriz, prefira sempre alterar o tamanho dentro do software original de digitalização para que ele aumente ou diminua o número total de pontos mantendo a densidade correta",
      "Salve sempre uma cópia da matriz no formato editável original do software (.EMB, .EOF) antes de exportar para a máquina (.PES, .DST)"
    ],
    "dicaArtrelados": "Nunca redimensione uma matriz muito grande no painel da máquina! Se você diminuir um desenho pela metade na máquina, ela vai espremer a mesma quantidade de pontos em um espaço minúsculo, virando uma 'pedra' de linha dura que pode quebrar a agulha e furar a roupa. Redimensione sempre no computador!",
    "voceSabia": "O termo 'Punching' (puncionamento) usado até hoje para a criação de matrizes vem da época em que os desenhistas furavam manualmente cartões de papelão rígido com um perfurador de ferro para alimentar os primeiros teares de bordado do século XIX!",
    "practicalExercise": "Abra um software de bordado gratuito ou o visualizador da sua máquina: carregue um arquivo de matriz, visualize a simulação do trajeto ponto a ponto e observe como cada elemento é construído antes de iniciar a cor seguinte!",
    "quickSummary": "Arquivo digital com coordenadas cartesianas e comandos que instruem a máquina de bordar a costurar o desenho no tecido.",
    "relatedTerms": [
      "Digitalização de Matrizes",
      "Formato DST",
      "Formato PES",
      "Densidade de Ponto",
      "Compensação de Repuxo"
    ],
    "imageUrl": "/images/m001_matriz_bordado_anatomia_v2.jpg?v=2",
    "imageCaption": "Anatomia da Matriz de Bordado: Da programação vetorial de pontos e ângulos no software à conversão em coordenadas X/Y e comandos de máquina para execução no bastidor de 1 agulha.",
    "tags": [
      "m-001",
      "matriz de bordado",
      "arquivo de bordado",
      "punching",
      "dst",
      "pes",
      "wilcom",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Embroidery Studio: Digitizing Fundamentals and Stitch Architecture. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Arte da Digitalização Perfeita: Matrizes, Formatos Digitais, Compensações e Cinemática CNC. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-002-malha-tecidos-elasticos-jersey-knit-embroidery",
    "code": "M-002",
    "term": "Malha e Tecidos Elásticos (Knit Fabrics, Jersey & Stretch Embroidery)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Do latim 'macula' (laço, rede) / Têxteis de laçadas entrelaçadas.",
    "origin": "Estrutura têxtil produzida pelo entrelaçamento contínuo de laçadas de fios (diferente dos tecidos planos de urdume e trama), originária da malharia manual ancestral e consagrada no século XX com o vestuário esportivo e casual (camisetas de algodão, viscolycra, ribana e cotton).",
    "summary": "Tecido estruturado por laçadas móveis com alta elasticidade e memória mecânica, que exige estabilização firme (entretela de corte), agulha ponta bola e compensação de repuxo moderada.",
    "definition": "A Malha (Jersey / Knit Fabrics / Tecidos de Malharia Circular e Retilínea) é um substrato têxtil caracterizado pela sua elasticidade multidirecional, flexibilidade e capacidade de adaptação ao corpo humano. Como suas fibras são compostas por laçadas interligadas que se movem livremente sob tração mecânica, a malha tende a esticar e deformar facilmente quando puxada pela tensão dos pontos de bordado. Para bordar malhas sem criar enrugamento (puckering), distorções geométricas ou furos causados pelo corte das laçadas, é obrigatório o uso de agulha de ponta bola (Ball Point / SES), entretela de corte limpo (Cut-Away) e plastiquinho solúvel (Topping) na superfície para que os pontos não afundem.",
    "technicalDetails": "Propriedades físicas e parametrização para bordar em malha:\n• Tipos Principais: Meia Malha Penteada 100% Algodão (30.1 e 24.1), Viscolycra, Piquet de Algodão/Poliéster, Ribana Canelada, Suplex e Moletinho;\n• Estabilização Obrigatória: Entretela de corte definitivo (Cut-Away / Rasga-Fácil Especial) de 50 g/m² a 70 g/m² no verso; NUNCA usar apenas entretela rasgável simples, pois a malha cede nas lavagens;\n• Agulha Indicada: Agulha com ponta bola fina (Ball Point / SES calibre 70/10 ou 75/11) que afasta os fios da malha sem cortá-los;\n• Película Superior (Topping): Filme plástico hidrossolúvel de 20 micras na superfície para manter as colunas de satim e letras flutuando com nitidez;\n• Ajuste de Matriz: Reduzir a densidade de pontos em 10% a 15% (espaçamento de 0,42 mm a 0,45 mm) e aplicar sob-ponto em grade (Tatami Underlay) para ancorar a malha à entretela.",
    "howItWorks": [
      "1. A bordadeira aplica uma folha de entretela de corte (Cut-Away) no avesso da camiseta ou body de bebê.",
      "2. Coloca a malha no bastidor sem puxar ou esticar excessivamente o tecido (o tecido deve ficar assentado como uma folha de papel lisa, sem tensão de estiramento).",
      "3. Posiciona uma folha de plástico solúvel (hidrossolúvel) sobre a frente da malha.",
      "4. Instala uma agulha nova de ponta bola fina (Ball Point 75/11).",
      "5. A máquina borda o desenho: a agulha penetra entre as laçadas sem rompê-las e o sob-ponto trava a elasticidade.",
      "6. Ao finalizar, remove-se o plástico solúvel com água morna e recorta-se a entretela de corte pelo avesso deixando uma margem redonda de 5 mm.",
      "7. A camiseta de malha mantém o caimento macio, sem rugas ao redor do bordado e sem deformar após sucessivas lavagens."
    ],
    "beginnerExplanation": "Bordar em malha (como camisetas de algodão ou roupinhas de bebê) é diferente de bordar em pano durinho! Como a malha estica para todo lado igual chiclete, se você não segurar ela direito, o bordado puxa o pano e a camiseta fica toda enrugada parecendo um babado. Para bordar malha com perfeição, você precisa de 3 segredinhos: 1) usar agulha ponta bola (que não fura o fio da malha); 2) usar entretela de recorte que não rasga; e 3) nunca esticar a malha na hora de prender no bastidor!",
    "applications": [
      "Camisetas casuais de meia-malha de algodão 30.1 com logotipos no peito",
      "Bodies de bebê, pagões e mijões em malha suedine 100% algodão",
      "Camisas polo em malha piquet com brasões e monogramas corporativos",
      "Vestuário fitness em suplex, poliamida e lycra com números e nomes esportivos"
    ],
    "commonErrors": [
      "Esticar a malha como um tambor dentro do bastidor (quando tira do bastidor, a malha relaxa e o bordado enruga todo)",
      "Usar agulha ponta fina afiada (Microtex/Universal gasta) que corta os fios da malha, criando furinhos ao redor do bordado após a primeira lavada",
      "Usar entretela rasgável fina que se desfaz na máquina, fazendo o bordado perder o formato com o uso"
    ],
    "troubleshootingTips": [
      "Para colocar malha no bastidor sem esticar: monte apenas a entretela no bastidor e cole a camiseta por cima usando cola temporária em spray (t��cnica de flutuação / Float)",
      "Se aparecerem pequenos furos nas bordas do bordado: troque imediatamente a agulha por uma Ball Point novinha calibre 70/10",
      "Aplique sempre uma película de acabamento macio (protetor de avesso termocolante) no avesso do body de bebê para não irritar a pele sensível"
    ],
    "dicaArtrelados": "O maior erro de quem borda malha é esticar o tecido no bastidor! Ao fechar o bastidor, passe a palma da mão suavemente sobre a malha: ela deve estar retinha, mas com a mesma elasticidade natural de quando está sobre a mesa. Se você esticar a malha no aro, ela vai encolher assim que sair da máquina e o bordado vai ficar enrugado para sempre!",
    "voceSabia": "O tecido de malha foi introduzido na alta moda feminina no início da década de 1920 pela estilista francesa Coco Chanel, que utilizou o tecido Jersey (antes restrito a roupas de baixo masculinas) para criar vestidos confortáveis e revolucionários!",
    "practicalExercise": "Pegue uma camiseta velha de malha: corte um retalho, aplique entretela de corte no avesso, prenda no bastidor sem esticar, use agulha ponta bola e borde um monograma. Compare com outro retalho montado com entretela rasgável e agulha afiada para ver a diferença colossal de estabilidade!",
    "quickSummary": "Tecido elástico de laçadas entrelaçadas que exige agulha ponta bola, entretela de corte e estabilização sem estiramento no bastidor.",
    "imageUrl": "/images/m002_malha_elasticos_v2.jpg?v=2",
    "imageCaption": "Engenharia de Bordado em Malhas e Tecidos Elásticos em Bastidor Eletrônico de 1 Agulha: bastidor retangular de encaixe no pantógrafo com estabilização sem tensão, entretela Cut-Away no verso, filme hidrossolúvel superior e agulha Ponta Bola.",
    "relatedTerms": [
      "Agulha Ponta Bola",
      "Entretela de Corte (Cut-Away)",
      "Flutuação (Float)",
      "Enrugamento (Puckering)",
      "Suedine"
    ],
    "tags": [
      "m-002",
      "malha",
      "jersey",
      "tecidos elasticos",
      "camiseta",
      "body de bebe",
      "cut-away",
      "ponta bola",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KNITTING INDUSTRY FEDERATION. Circular and Flat Knit Embroidery Stability Standards. Leicester: KIF, 2022.",
      "ARTRELADOS. O Segredo das Malhas e Tecidos Elásticos: Estabilização sem Tensão, Agulhas Ball Point e Acabamento de Alta Durabilidade. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-003-microtex-agulha-ponta-aguda-micro-sharp-needle",
    "code": "M-003",
    "term": "Microtex e Agulhas Ponta Aguda (Microtex / Micro-Sharp Precision Needles)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino / Do sistema métrico 'micro' (muito fino) e 'textil'.",
    "origin": "Desenvolvida pela fabricante alemã Schmetz e pela japonesa Organ Needles para permitir a penetração cirúrgica e retilínea em tecidos de microfibras densas, sedas nobres, tecidos resinados e materiais sintéticos laminados.",
    "summary": "Agulha com haste ultra-afiada e ponta cônica aguda extrema (SPI / Micro-Sharp), ideal para linhas retas perfeitas, sedas finas, cetins e bordados sobre vinil.",
    "definition": "A Agulha Microtex (Micro-Sharp Needle / Agulha de Ponta Aguda Fina / Sistema 130/705 H-M ou DBx1 SPI) é uma agulha especializada caracterizada por uma ponta cônica extremamente delgada, pontiaguda e afiada. Ao contrário da agulha universal ou ponta bola (que arredondam o ápice para empurrar as fibras para o lado), a Microtex perfura o centro das tramas mais compactadas com o mínimo de resistência e deflexão mecânica. É a escolha obrigatória para bordados de micro-letras e detalhes em tecidos de alta densidade de fios (como seda pura, microfibra, tafetá, organza, popeline de algodão egípcio e materiais laminados como corino sintético).",
    "technicalDetails": "Geometria e propriedades da agulha Microtex:\n• Formato da Ponta: Ponta Aguda Cônica Extrema (Acute Round Point - SPI / Slim Point);\n• Calibres Típicos: 60/8 (ultrafina para seda), 65/9, 70/10 e 80/12 (para microfibras e sintéticos);\n• Penetração Retilínea: Reduz a deflexão lateral da agulha em até 40% ao perfurar tecidos densos, garantindo pontos de contorno retos sem ziguezagueamento indesejado;\n• Orifício de Perfuração Reduzido: Cria furos microscópicos que se fecham naturalmente após a lavagem em tecidos finos;\n• Limitação de Uso: Por ser muito afiada, NUNCA deve ser usada em tecidos de malha elástica de algodão solta (pode cortar as laçadas e criar furos).\n• Durabilidade: A ponta afiada desgasta-se mais rapidamente que a ponta bola, exigindo troca a cada 6 a 8 horas de bordado contínuo.",
    "howItWorks": [
      "1. A bordadeira identifica que o tecido a ser bordado é uma seda pura, cetim de noiva ou microfibra acetinada.",
      "2. Instala uma agulha nova Microtex calibre 70/10 na máquina.",
      "3. Passa linha fina 60wt ou poliéster 40wt de alta qualidade.",
      "4. A máquina inicia o bordado: a ponta cirúrgica da agulha penetra as fibras microscópicas sem empurrar o tecido para baixo nem repuxar o cetim.",
      "5. Os contornos de letras finas e arabescos saem perfeitamente nítidos e retilíneos.",
      "6. Não há marcas de furos grandes ou repuxados ao redor do bordado.",
      "7. A peça de alta-costura é finalizada com padrão de alfaiataria impecável."
    ],
    "beginnerExplanation": "A agulha Microtex é como um 'bisturi cirúrgico' em forma de agulha! Enquanto as outras agulhas têm a pontinha levemente arredondada para empurrar os fios do pano, a Microtex é super afiada e pontuda como a ponta de um alfinete de aço! Ela foi feita sob medida para tecidos chiques, lisos e finos como cetim, seda, tafetá e microfibra. Quando ela entra no tecido, ela perfura tão macio e retinho que as letrinhas pequenas do bordado ficam nítidas como se fossem impressas em papel!",
    "applications": [
      "Bordados delicados em vestidos de noiva de cetim, tafetá e organza de seda",
      "Monogramas em camisas sociais masculinas de algodão egípcio de alta contagem de fios (fio 80 a 120)",
      "Micro-letras de 3 mm a 5 mm em uniformes corporativos sofisticados",
      "Bordados em courino, vinil impermeável e tecidos sintéticos esportivos impermeáveis"
    ],
    "commonErrors": [
      "Usar agulha Microtex afiada em camisetas de malha comum de algodão (corta os fios e cria buracos nas lavagens)",
      "Continuar usando a agulha Microtex após ela perder o fio da ponta (ela fica cega e começa a fazer barulho de 'soco' no tecido)",
      "Usar agulha Microtex grossa (90/14) em tecidos de seda ultrafina (deixa buracos visíveis)"
    ],
    "troubleshootingTips": [
      "Se as letras pequenas estão ficando tortas ou com contornos tremidos: substitua a agulha universal por uma Microtex 70/10 novinha",
      "Em cetim de seda: use sempre agulha Microtex 65/9 ou 70/10 com entretela hidrossolúvel ou entretela de papel fina",
      "Passe a ponta da unha na ponta da agulha: se sentir qualquer rebarba ou se a agulha enroscar na pele, descarte-a imediatamente"
    ],
    "dicaArtrelados": "Vai bordar nomes pequenos ou monogramas em camisas sociais e roupões de cetim de noiva? Coloque uma agulha Microtex 70/10 com linha fina de poliéster 60wt. O bordado fica tão fino, nítido e perfeito que parece pintura de joalheria!",
    "voceSabia": "O raio da ponta de uma agulha Microtex é de apenas 0,02 mm (quase cinco vezes mais afiado que o raio de uma agulha de ponta bola padrão de 0,10 mm)!",
    "practicalExercise": "Coloque uma agulha Microtex 70/10 na máquina e borde uma palavra pequena em letra cursiva sobre um retalho de cetim: observe a limpeza das curvas e a ausência total de repuxados no brilho do tecido!",
    "quickSummary": "Agulha de ponta extremamente afiada e cônica, ideal para penetração cirúrgica em tecidos finos, densos, cetins e microfibras.",
    "imageUrl": "/images/m003_microtex_agulhas_v2.jpg?v=2",
    "imageCaption": "Geometria de Alta Precisão da Agulha Microtex em 1 Agulha: ponta cônica ultra-afiada de 0,02 mm com penetração retilínea sem deflexão em cetim e sedas densas, assegurando pontos cheios e micro-letras perfeitas.",
    "relatedTerms": [
      "Agulha Ponta Bola",
      "Calibre de Agulha",
      "Micro-Letras",
      "Cetim",
      "Deflexão de Agulha"
    ],
    "tags": [
      "m-003",
      "microtex",
      "agulha afiada",
      "ponta aguda",
      "cetim",
      "seda",
      "micro-letras",
      "schmetz",
      "organ",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ NEEDLES GMBH. Microtex Precision Needle Technical Bulletin and Penetration Dynamics. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. Agulhas de Alta Precisão: Geometria de Pontas, Microtex, Titânio e Comportamento Têxtil no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-004-mola-estica-fio-mola-compensacao-check-spring",
    "code": "M-004",
    "term": "Mola Estica-Fio e Mola de Compensação (Take-up Spring / Thread Check Spring)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica e dinâmica de tensões de linha.",
    "origin": "Mecanismo flexível de amortecimento desenvolvido para absorver o choque mecânico e recolher a folga transitória da linha superior durante o movimento alternado da alavanca estica-fio em máquinas de costura e bordado industriais.",
    "summary": "Pequena mola espiral calibrada situada junto aos tensores superiores que recolhe a folga da linha e amortece solavancos até a agulha penetrar no tecido.",
    "definition": "A Mola Estica-Fio (Check Spring / Take-up Spring / Mola de Compensação de Tensão Superior / Mola Amortecedora de Linha) é um componente mecânico de altíssima sensibilidade localizado no conjunto de tensores superiores do cabeçote da máquina de bordar. Sua função principal é dupla: 1) manter uma leve tensão constante sobre a linha superior durante a descida da alavanca estica-fio, evitando que o fio fique solto e enrosque na ponta da agulha; e 2) amortecer o pico repentino de tração no momento em que a agulha penetra o tecido e a lançadeira começa a expandir a laçada. O curso angular (amplitude de movimento) e a pressão dessa mola determinam a estabilidade do ponto e a ausência de laços soltos na superfície.",
    "technicalDetails": "Engenharia e regulagem da mola de compensação (Check Spring):\n• Curso Mecânico Típico: 5 mm a 8 mm de deflexão angular ativa;\n• Ponto de Alívio (Timing): A mola deve liberar a linha exatamente no instante em que a ponta da agulha atinge o tecido;\n• Força de Tensão da Mola: 0,05 N a 0,15 N (calibrada para ceder suavemente ao puxar o fio com os dedos);\n• Amortecimento de Fios Frágeis: Essencial para evitar o rompimento por choque elástico de linhas metálicas, viscose rayon e fios foscos de algodão;\n• Efeito de Mola Quebrada ou Travada: Gera laços soltos gigantescos (Loops) na parte superior do bordado, falhas na detecção de quebra de linha e nós na lançadeira.",
    "howItWorks": [
      "1. A linha superior sai dos discos tensores e passa pelo gancho da mola estica-fio (check spring).",
      "2. A alavanca estica-fio principal desce para fornecer linha à agulha.",
      "3. Conforme a linha desce, a mola de compensação sobe suavemente recolhendo a folga e mantendo o fio esticado.",
      "4. Quando a ponta da agulha toca o tecido, a mola encosta no seu batente mecânico inferior e para.",
      "5. A linha entra sob a ação direta dos discos tensores para formar o ponto.",
      "6. A alavanca sobe, a mola retorna à posição inicial e o ciclo se repete até 1.200 vezes por minuto.",
      "7. O resultado é uma linha sem nós, sem laçadas soltas e sem quebras por trancos."
    ],
    "beginnerExplanation": "A mola estica-fio (ou mola de compensação) é como o 'amortecedor de carro' da linha de bordar! Conforme a máquina costura em alta velocidade, a linha sobe e desce dando pulinhos rápidos. Se não tivesse essa molinha para segurar o fio esticado com carinho, a linha ficaria frouxa e dançando no ar, enrolando na ponta da agulha ou fazendo aquele bolo de linha horroroso em cima do bordado. Quando a molinha está boa e flexível, a máquina costura macia e suave como seda!",
    "applications": [
      "Amortecimento dinâmico de fios metálicos e filamentos delicados em alta rotação",
      "Formação de pontos precisos e uniformes em máquinas monoelemento e industriais multicabeçotes",
      "Eliminação de laços soltos e fios arrepiados na superfície de pontos cheios",
      "Acionamento correto dos sensores ópticos e eletrônicos de quebra de linha"
    ],
    "commonErrors": [
      "Esquecer de passar a linha pelo ganchinho da mola de compensação na hora de passar a linha na máquina",
      "Deixar fiapos e poeira acumulados na base da mola impedindo o seu movimento livre de vaivém",
      "Continuar bordando com a mola quebrada ou desencaixada (causa laços soltos contínuos)"
    ],
    "troubleshootingTips": [
      "Verifique se a mola se move para cima e para baixo livremente toda vez que você puxa a linha perto da agulha",
      "Se o bordado está cheio de laçadas soltas na frente mesmo com a tensão dos discos apertada: verifique se a linha não escapou da mola de compensação",
      "Limpe o conjunto de tensores superiores com um pincel seco a cada 15 dias para garantir o curso livre da mola"
    ],
    "dicaArtrelados": "A máquina começou a fazer laços soltos em cima do bordado de uma hora para outra? Antes de mexer nos botões de tensão, olhe a passagem de linha: 90% das vezes a linha pulou para fora da molinha estica-fio durante uma troca rápida de cone! Passe a linha de novo encaixando na mola e o problema desaparece!",
    "voceSabia": "A mola de compensação de linha foi uma das primeiras patentes mecânicas adicionadas às máquinas de costura no século XIX por Isaac Singer para permitir que as máquinas operassem a mais de 300 pontos por minuto sem quebrar a linha!",
    "practicalExercise": "Com a máquina desligada e a linha passada: puxe a linha com a mão logo acima da agulha e observe a pequena molinha no tensor superior descendo e subindo como um amortecedor suave!",
    "quickSummary": "Mola espiral amortecedora no tensor superior que absorve o choque mecânico e recolhe a folga da linha durante o ciclo de costura.",
    "relatedTerms": [
      "Alavanca Estica-Fio",
      "Tensão Superior",
      "Discos Tensores",
      "Sensor de Quebra de Linha"
    ],
    "tags": [
      "m-004",
      "mola estica-fio",
      "check spring",
      "take-up spring",
      "tensao superior",
      "mecanica",
      "amortecedor",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL BULLETIN. Thread Tension Assembly, Check Spring Calibration and Dynamic Loop Formation. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Cinemática do Cabeçote: Molas de Compensação, Alavancas Estica-Fio e Amortecimento Dinâmico no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-005-monograma-letras-tipografia-lettering-monogram",
    "code": "M-005",
    "term": "Monograma e Tipografia de Bordado (Monogram, Lettering & Embroidery Typography)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do grego 'monogrammos' (composto por uma só linha/letra).",
    "origin": "Prática heráldica e aristocrática milenar de entrelaçar as iniciais de nomes reais em moedas, selos e lençóis nobres, modernizada no bordado computadorizado com fontes vetoriais digitalizadas especificamente para a física dos pontos de costura.",
    "summary": "Arte e técnica de digitalizar e bordar letras, iniciais e nomes combinados em estilos clássicos, cursivos ou modernos com clareza visual e leitura perfeita.",
    "definition": "O Monograma no Bordado Eletrônico (Monogramming / Embroidery Lettering / Tipografia Bordada) é a composição visual de uma ou mais letras (geralmente as iniciais de uma pessoa, casal, brasão de família ou marca) desenhadas com parâmetros específicos de compensação e densidade para costura. Diferente de fontes tipográficas de computador para impressão gráfica (TrueType / OpenType), as fontes de bordado (Keyboard Embroidery Fonts) possuem propriedades vetoriais tridimensionais exclusivas: controle de ângulo de ponto por segmento, sob-pontos de sustentação anatômicos, compensação de tração para manter a largura das hastes constante e nós de arremate automáticos em cada letra.",
    "technicalDetails": "Parâmetros técnicos para digitalização de monogramas e letras:\n• Tipologias Clássicas: Monograma Tradicional de 3 Letras (com a inicial do sobrenome maior ao centro), Monograma Círculo (Circle Monogram), Monograma Diamante (Diamond Monogram), Letras Cursivas e Fontes Serifadas;\n• Largura Mínima de Coluna: A largura mínima de qualquer haste de letra em ponto cheio deve ser de 1,0 mm (ideal entre 1,5 mm e 5,0 mm);\n• Altura Mínima de Letras: Letras com serifa exigem altura mínima de 8 mm a 10 mm; letras sem serifa (Sans-Serif) suportam até 5 mm; micro-letras abaixo de 5 mm exigem digitalização especial em ponto corrido triplo ou linha 60wt;\n• Sob-pontos (Underlay): Ponto corrido central (Center Walk) para hastes finas e sob-ponto duplo zigue-zague/tatami para letras capitulares grandes;\n• Sequenciamento e Ramificação (Branching): Ordenação automática dos segmentos para reduzir cortes de linha e saltos desnecessários entre letras conectadas.",
    "howItWorks": [
      "1. A bordadeira seleciona a fonte de bordado adequada no software ou no painel da máquina.",
      "2. Digita as iniciais do cliente (ex: M, C, S) e escolhe a moldura ou moldura floral decorativa.",
      "3. O software gera as colunas de ponto cheio com os ângulos corretos em cada curva da letra.",
      "4. Ajusta a densidade padrão (0,38 mm a 0,40 mm) e adiciona compensação de repuxo de 0,35 mm.",
      "5. A matriz é enviada para a máquina de bordar.",
      "6. A máquina costura primeiro os sob-pontos de base que fixam o tecido e em seguida borda as colunas cheias e brilhantes das letras.",
      "7. O monograma finalizado exibe letras volumosas, contornos nítidos e leitura perfeita."
    ],
    "beginnerExplanation": "O monograma é aquele bordado clássico e elegante com as iniciais do nome da pessoa (como aquelas letras lindas entrelaçadas em toalhas de banho finas, camisas sociais e bolsas de maternidade)! No bordado a máquina, as letras precisam ser desenhadas com muito cuidado: se a perninha da letra for fina demais, ela some no tecido; se for gorda demais, ela fica parecendo uma mancha de tinta. O monograma bem feito tem letras gordinhas, brilhantes e que todo mundo consegue ler com facilidade de longe!",
    "applications": [
      "Enxovais de banho de luxo, toalhas de rosto, roupões e jogos de cama de casal",
      "Bolsas de maternidade, mantas de bebê, fraldinhas e bodies personalizados",
      "Punhos e bolsos de camisas sociais masculinas de alta alfaiataria",
      "Guardanapos de linho para casamentos, bodas e jantares formais"
    ],
    "commonErrors": [
      "Tentar bordar letras menores que 5 mm usando fontes grossas em ponto cheio (as letras fecham os buracos e viram borrões)",
      "Bordar monogramas em toalhas felpudas sem usar plástico solúvel por cima (as felpas engolem os pontos finos da letra)",
      "Usar fontes gráficas de Windows (TrueType) com conversão automática sem revisar a largura das colunas e os sob-pontos"
    ],
    "troubleshootingTips": [
      "Para bordar monogramas em toalhas felpudas: use sempre uma folha de entretela hidrossolúvel por cima para as letras ficarem altas e nítidas",
      "Em toalhas de banho e enxovais, prefira fontes dedicadas de bordado (formatos .BX ou fontes nativas do software) em vez de fontes automáticas de computador",
      "Se as letras do monograma ficarem magrinhas no tecido: aumente a compensação de repuxo (Pull Comp) no software para 0,40 mm"
    ],
    "dicaArtrelados": "Para um monograma de casal em toalhas de banho clássicas: a regra de ouro é colocar a inicial da noiva à esquerda (menor), a inicial do sobrenome do casal ao centro (bem grande e destacada) e a inicial do noivo à direita (menor). Esse estilo é o que mais vende e agrega valor no ateliê!",
    "voceSabia": "Os monogramas eram utilizados na Grécia Antiga a partir do século V a.C. gravados em moedas de prata para identificar a cidade-estado emissora através das iniciais do seu governante!",
    "practicalExercise": "Escolha uma fonte clássica no seu software ou máquina, digite a sua inicial com uma moldura redonda e borde em um retalho de tecido com entretela: observe como as colunas de ponto cheio mudam de ângulo nas curvas para refletir o brilho da linha!",
    "quickSummary": "Composição artística de iniciais e nomes bordados com tipografia vetorial otimizada para colunas volumosas, brilho e máxima legibilidade.",
    "relatedTerms": [
      "Micro-Letras",
      "Ponto Satim",
      "Compensação de Repuxo",
      "Fontes BX",
      "Toalhas de Banho"
    ],
    "tags": [
      "m-005",
      "monograma",
      "lettering",
      "tipografia",
      "letras",
      "iniciais",
      "enxoval de luxo",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBROIDERY GUILD OF AMERICA. The History, Art and Rules of Monogramming. Louisville: EGA, 2021.",
      "ARTRELADOS. A Arte do Monograma e Tipografia de Alta Precisão: Regras Clássicas, Fontes Digitais e Relevo no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-006-manta-acrilica-r1-r2-quilting-fleece-wadding",
    "code": "M-006",
    "term": "Manta Acrílica R1 e R2 (Fusible Quilted Fleece / Wadding & Batting)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino / Da tecnologia de não-tecidos sintéticos e acolchoamento.",
    "origin": "Desenvolvida para o universo do patchwork, quilting e marcenaria/tapeçaria fina, adaptada ao bordado computadorizado como estruturador tridimensional térmico e volumoso para peças In The Hoop (ITH), bolsas e nécessaires.",
    "summary": "Manta estruturadora acolchoada de poliéster com resina termocolante em uma face (R1) ou nas duas faces (R2), que confere corpo, fofura e acolchoamento ao bordado.",
    "definition": "A Manta Acrílica Termocolante R1 e R2 (Fusible Fleece / Batting / Manta Estruturadora de Quilt) é um não-tecido volumoso e macio composto por fibras sintéticas de poliéster 100% termofixadas. A versão R1 possui resina termocolante adesiva ativada pelo calor do ferro em apenas uma das faces (ideal para fixar o tecido principal da frente), enquanto a versão R2 possui resina em ambas as faces (para colar o tecido da frente e o tecido de forro simultaneamente). No bordado computadorizado, a manta é o elemento fundamental para estruturar nécessaires, porta-óculos, almofadas, capas de caderno, chaveiros gordinhos e projetos de quilting no bastidor, proporcionando relevo fofo e estabilidade dimensional.",
    "technicalDetails": "Propriedades físicas e termofusão de mantas R1 e R2:\n• Composição: 100% Poliéster virgem cardado e termoligado;\n• Gramaturas Comuns: 100 g/m² (Manta leve / fina), 150 g/m² (Manta média padrão) e 200 g/m² (Manta pesada estruturada);\n• Temperatura de Colagem: 130°C a 150°C (ferro a seco na temperatura 'Algodão/Lã') com pressão por 10 a 12 segundos;\n• Comportamento no Bastidor: Por ser fofa e volumosa, exige que a tensão do bastidor não esmague excessivamente a manta (risco de criar marcas de queima de bastidor);\n• Agulha Recomendada: Agulha universal ou agulha de Quilting calibre 80/12 ou 90/14 com ponta bola fina;\n• Retração Térmica: Suporta lavagens normais sem encolher nem formar bolinhas internas.",
    "howItWorks": [
      "1. A artesã recorta um pedaço de manta R1 no tamanho do projeto.",
      "2. Posiciona o tecido de algodão (tricoline) sobre o lado áspero (lado com resina) da manta.",
      "3. Passa o ferro quente seco sobre o tecido por 10 segundos: o tecido e a manta viram uma peça única e estruturada.",
      "4. Monta o conjunto no bastidor com uma folha de entretela rasgável por baixo.",
      "5. A máquina borda o quilting decorativo ou os apliques do projeto In The Hoop.",
      "6. A agulha penetra na massa fofa da manta, criando canaletas de relevo tridimensional acolchoado.",
      "7. O resultado é uma peça firme, fofinha, elegante e com toque aveludado profissional."
    ],
    "beginnerExplanation": "A manta R1 ou R2 é aquele 'estofadinho mágico' que a gente coloca dentro de nécessaires, bolsas e carteirinhas para deixar a peça gordinha, estruturada e fofinha! A manta R1 tem cola em um lado só (você passa o ferro e o tecido gruda nela), e a R2 tem cola dos dois lados. Quando a máquina borda em cima desse tecido com manta, cada costura afunda um pouquinho e cria aquele efeito de 'acolchoado de edredom' (quilting) maravilhoso que deixa qualquer artesanato com cara de loja de shopping!",
    "applications": [
      "Confecção de nécessaires, estojos escolares e carteiras feitas 100% na máquina de bordar (In The Hoop)",
      "Projetos de Quilting no Bastidor (In The Hoop Quilting Blocks) para colchas e almofadas",
      "Capas de caderneta de vacinação, pastas de documentos de bebê e porta-certidões",
      "Chaveiros de tecido acolchoados e enfeites de Natal tridimensionais"
    ],
    "commonErrors": [
      "Encostar o ferro de passar quente direto sobre a manta nua (ela derrete e gruda instantaneamente na base do ferro)",
      "Prender o bastidor com parafuso muito apertado esmagando a manta (deixa o aro do bastidor marcado no tecido para sempre)",
      "Bordar com agulha fina 65/9 (a agulha entorta na manta espessa e pode quebrar na chapa)"
    ],
    "troubleshootingTips": [
      "Coloque sempre um papel vegetal ou tecido de proteção se precisar passar o ferro perto da manta exposta",
      "Para evitar marcas de bastidor em tecidos com manta: use a técnica de flutuação (prenda só a entretela no bastidor e cole o tecido com a manta por cima)",
      "Use agulha 80/12 ou 90/14 para perfurar a manta e as camadas de tecido com facilidade e sem falhas de ponto"
    ],
    "dicaArtrelados": "Para fazer nécessaires e capas de caderneta no bastidor sem ficar com marcas do aro: prenda somente a entretela no bastidor, passe cola spray e assente a sua manta R1 com o tecido já colado por cima! A peça borda livre, fofinha e sai 100% sem nenhuma marca de bastidor no tecido!",
    "voceSabia": "O termo 'R1' e 'R2' foi criado pela indústria têxtil brasileira para diferenciar mantas com 'Resina em 1 face' de mantas com 'Resina em 2 faces'!",
    "practicalExercise": "Cole um retalho de tricoline sobre um pedaço de manta R1 com o ferro morno: monte no bastidor e borde um desenho de acolchoado (quilting) geométrico: passe os dedos sobre o relevo fofinho e sinta a estrutura da peça!",
    "quickSummary": "Manta sintética volumosa de poliéster com resina termocolante em uma ou duas faces, essencial para estruturar nécessaires, bolsas e projetos acolchoados.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Quilting no Bastidor",
      "Entretela Termocolante",
      "Tricoline",
      "Flutuação (Float)"
    ],
    "tags": [
      "m-006",
      "manta r1",
      "manta r2",
      "manta acrilica",
      "fusible fleece",
      "quilting",
      "ith",
      "estruturador",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICAN QUILTER'S SOCIETY. Batting and Wadding Varieties, Thermal Bonding and Machine Quilting Standards. Paducah: AQS, 2022.",
      "ARTRELADOS. Estruturação Têxtil no Bastidor: Mantas R1/R2, Feltros, Espumas e Criação de Peças In The Hoop Perfeitas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-007-maquina-monocabeca-monoelemento-single-head-machine",
    "code": "M-007",
    "term": "Máquina Monocabeça / Monoelemento (Single-Head Embroidery Machine)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Do grego 'monos' (único) e do latim 'machina'.",
    "origin": "Evolução dos equipamentos domésticos e semi-industriais compactos surgidos no Japão e Europa nas décadas de 1980 e 1990 para atender ateliês personalizados, alfaiatarias sob medida e pequenos produtores.",
    "summary": "Equipamento de bordado computadorizado equipado com um único cabeçote de costura (de 1 a 15 agulhas), ideal para personalização individual e alta flexibilidade.",
    "definition": "A Máquina de Bordar Monocabeça (Single-Head Embroidery Machine / Máquina Monoelemento / Máquina de 1 Cabeçote) é o equipamento de bordado computadorizado projetado com uma única estação de trabalho de agulha(s) e pantógrafo independente. Pode variar desde modelos domésticos compactos de 1 agulha (onde a troca de linha é feita manualmente a cada parada da matriz) até modelos industriais e semi-industriais robustos de 6, 10, 12 ou 15 agulhas com troca automática de cores, corte automático de linha e braço livre para bordar bonés e peças tubulares fechadas. É a máquina padrão para personalização sob encomenda de nomes, jalecos, toalhas e brindes exclusivos.",
    "technicalDetails": "Arquitetura mecânica e funcional da máquina monocabeça:\n• Configurações de Agulha: 1 agulha (modelos domésticos planos tipo Brother PE, Janome MC, Bernina) ou 6 a 15 agulhas (modelos industriais compactos tipo Tajima, Barudan, Happy, SWF, Brother PR, Ricoma);\n• Velocidade Operacional Típica: 400 a 850 PPM (domésticas) e 600 a 1.200 PPM (industriais de 1 cabeça);\n• Área de Bordado: Varia de 10x10 cm, 13x18 cm, 16x26 cm, 20x30 cm até 36x50 cm (ou mais com bastidores jumbo);\n• Sistema de Braço Livre (Free-Arm): Permite encaixar pernas de calças, mangas, meias e bastidores cilíndricos de boné sem desmanchar a costura da peça pronta;\n• Consumo Energético e Espaço: Baixo consumo (100W a 300W) e estrutura compacta que cabe em bancadas de ateliês residenciais.",
    "howItWorks": [
      "1. A bordadeira transfere a matriz de bordado para o painel da máquina monocabeça.",
      "2. Se for máquina de 1 agulha: coloca o primeiro carretel da cor inicial; se for multiagulhas: programa a sequência de agulhas (ex: Agulha 1 = Azul, Agulha 2 = Dourado, etc.).",
      "3. Encaixa o bastidor com o tecido no braço do pantógrafo da máquina.",
      "4. Confere o traçado de área (Trace) no painel para ter certeza de que a agulha não baterá nas bordas do bastidor.",
      "5. Pressiona o botão Iniciar (Start): o pantógrafo desloca o tecido nos eixos X e Y enquanto o cabeçote costura.",
      "6. A máquina executa os pontos, realiza os cortes e finaliza a peça com total precisão.",
      "7. A bordadeira retira a peça pronta e pode carregar um novo nome personalizado imediatamente."
    ],
    "beginnerExplanation": "A máquina monocabeça é a máquina de bordar que tem 'uma cabeça só' (ela borda uma peça de cada vez)! É a companheira perfeita para quem tem um ateliê em casa ou uma lojinha de presentes. Ela pode ser daquelas de 1 agulha (onde você troca o carretel toda vez que a máquina avisa que a cor acabou) ou de várias agulhas (onde você coloca vários cones de cores diferentes e a máquina troca de cor sozinha num piscar de olhos). Como ela borda de um em um, você pode colocar o nome de um cliente diferente em cada toalha ou body com total facilidade!",
    "applications": [
      "Ateliês de costura criativa, personalização de enxovais de bebê e toalhas de banho",
      "Bordado de jalecos médicos, uniformes escolares e nomes em dólmãs de chefs",
      "Confecção de amostras, protótipos de alta-costura e tiragens sob demanda",
      "Bordados em bonés estruturados, sapatos e bolsas prontas em máquinas com braço livre"
    ],
    "commonErrors": [
      "Colocar um bastidor maior do que a área máxima física permitida pelo modelo da máquina",
      "Esquecer de conferir o teste de área (Trace) antes de dar o Start, fazendo o pé calcador bater no plástico do bastidor",
      "Esperar produzir milhares de peças idênticas no mesmo dia em uma única máquina de 1 agulha"
    ],
    "troubleshootingTips": [
      "Faça sempre a simulação de área (botão Trace/Gabarito) no painel antes de bordar para evitar que a agulha quebre na borda do bastidor",
      "Mantenha a bancada onde a máquina monocabeça está apoiada completamente firme e nivelada para evitar vibrações que desalinhem os pontos",
      "Em máquinas de 1 agulha, organize os cones de linha da matriz em ordem sequencial na mesa para agilizar as trocas manuais"
    ],
    "dicaArtrelados": "Vai começar um ateliê de personalização? Uma máquina monocabeça doméstica ou semi-industrial é o investimento mais certeiro: ela permite focar em peças exclusivas com nomes de clientes, onde a margem de lucro por peça bordada é muito maior do que na produção em massa de atacado!",
    "voceSabia": "A primeira máquina de bordar computadorizada monoelemento de uso doméstico foi lançada no mercado no final da década de 1980, permitindo que bordadeiras do mundo todo criassem matrizes complexas que antes eram exclusivas de grandes fábricas têxteis!",
    "practicalExercise": "No painel da sua máquina monocabeça, teste carregar um monograma simples, faça o traçado de contorno (Trace) com a luz laser ou agulha baixa e borde em um retalho testando a velocidade máxima e média para comparar a maciez do ponto!",
    "quickSummary": "Máquina de bordar computadorizada com um único cabeçote, perfeita para personalização unitária, nomes, amostras e ateliês criativos.",
    "relatedTerms": [
      "Máquina Multicabeças",
      "Pantógrafo",
      "Braço Livre",
      "Troca Automática de Cores",
      "Traçado de Área (Trace)"
    ],
    "tags": [
      "m-007",
      "maquina monocabeca",
      "single-head",
      "uma cabeca",
      "brother pe",
      "janome",
      "atelie",
      "personalizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JAPAN EMBROIDERY MACHINERY ASSOCIATION. Single-Head CNC Embroidery Machine Standards and Mechanisms. Tóquio: JEMA, 2022.",
      "ARTRELADOS. Guia Definitivo das Máquinas de Bordar: Monocabeças, Industriais, Mecanismos e Manutenção Diária. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-008-maquina-multicabecas-industrial-multi-head-machine",
    "code": "M-008",
    "term": "Máquina Multicabeças / Industrial (Multi-Head Industrial Embroidery Machine)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Do latim 'multi' (muitos) e do grego 'machina'.",
    "origin": "Criada para a produção em larga escala de uniformes, vestuário esportivo e moda global pela integração simultânea de múltiplos cabeçotes sincronizados em um único chassi de alta rigidez estrutural.",
    "summary": "Equipamento industrial de bordado de grande porte equipado com 2, 4, 6, 8, 12, 18 ou mais cabeçotes que bordam a mesma matriz simultaneamente em múltiplos tecidos.",
    "definition": "A Máquina de Bordar Multicabeças (Multi-Head Embroidery Machine / Equipamento de Produção Industrial) é uma máquina CNC de alto rendimento mecânico que possui múltiplos cabeçotes de bordar operando de forma perfeitamente sincronizada em um único pantógrafo compartilhado. Quando o operador inicia o trabalho, todas as cabeças costuram rigorosamente a mesma matriz de bordado ao mesmo tempo em bastidores individuais independentes. É o pilar da indústria de uniformes escolares, camisas corporativas, bonés esportivos e moda de massa, multiplicando a produtividade por cabeça instalada.",
    "technicalDetails": "Arquitetura industrial de máquinas multicabeças:\n• Número de Cabeçotes: 2, 4, 6, 8, 12, 15, 18, 24 até 32 cabeçotes em linha contínua;\n• Agulhas por Cabeça: De 9 a 15 agulhas por cabeçote com troca de cor pneumática ou por solenoide de fuso mecânico;\n• Eixo Principal Compartilhado: Eixo de transmissão central sincronizado por correias dentadas industriais de alta resistência e servomotor principal trifásico;\n• Pantógrafo Único Rígido: Estrutura tubular de alumínio aeronáutico reforçado que desloca todas as peças simultaneamente com precisão de centésimos de milímetro;\n• Sistema de Detecção Individual de Quebra: Se a linha quebrar no cabeçote 3, a máquina para e o operador pode recuar alguns pontos apenas na cabeça afetada para refazer o trecho sem estragar as outras peças;\n• Velocidade Típica: 850 a 1.200 PPM contínuos em regimes de produção 24/7.",
    "howItWorks": [
      "1. O operador industrial carrega a matriz aprovada (.DST) na memória do computador central da máquina.",
      "2. Configura a sequência de cores e programa a velocidade de produção (ex: 950 PPM).",
      "3. Monta os tecidos com entretela nos bastidores de todas as cabeças (ex: 6 camisas polo).",
      "4. Encaixa os bastidores no pantógrafo central longo da máquina.",
      "5. Verifica o alinhamento e pressiona o botão de partida geral.",
      "6. Todos os cabeçotes começam a costurar instantaneamente no mesmo milissegundo, executando as mesmas agulhadas e trocas de fios.",
      "7. Ao término do ciclo, a máquina corta todas as linhas simultaneamente e o operador retira 6 peças prontas de uma só vez."
    ],
    "beginnerExplanation": "Se a máquina monocabeça é como uma pessoa trabalhando sozinha, a máquina multicabeças é como uma 'orquestra sincronizada'! Ela tem vários cabeçotes montados lado a lado (2, 4, 6, 12 cabeças). Quando você aperta o botão, todas as agulhas costuram ao mesmo tempo o mesmo desenho em várias camisas diferentes! Se você colocar 6 camisas nos bastidores, quando o bordado de 10 minutos terminar, você terá 6 camisas prontas de uma vez só. É a máquina que as fábricas de uniformes usam para entregar centenas de peças por dia!",
    "applications": [
      "Produção de grandes lotes de uniformes escolares, industriais e hospitalares",
      "Bordado de bonés em série para marcas esportivas e eventos internacionais",
      "Exportação de artigos de moda, apliques e emblemas militares em larga escala",
      "Confecção seriada de lençóis, toalhas de hotelaria e artigos de cama, mesa e banho"
    ],
    "commonErrors": [
      "Não conferir se todas as cabeças estão com as mesmas cores de linha nas posições correspondentes de agulha",
      "Deixar uma das cabeças com a tensão da caixa de bobina desregulada em relação às demais (gera peças desiguais no lote)",
      "Continuar o bordado após a quebra de linha sem dar o ré (back) nos pontos na cabeça que falhou"
    ],
    "troubleshootingTips": [
      "Padronize a tensão das caixas de bobina de todas as cabeças usando um medidor de tensão digital (Towa Gauge) para garantir uniformidade absoluta",
      "Faça a lubrificação das lançadeiras e barras de agulha rigorosamente a cada 4 horas de produção industrial contínua",
      "Mantenha um mapa de numeração de agulhas e cores visível no painel da máquina para evitar erros de abastecimento pelos operadores"
    ],
    "dicaArtrelados": "Em máquinas multicabeças, o segredo da produtividade é a padronização: use sempre a mesma marca de linha em todas as cabeças, agulhas do mesmo lote e entretelas cortadas no mesmo gabarito! Pequenas variações de tensão entre cabeças geram desperdício de tempo e retrabalho!",
    "voceSabia": "As maiores máquinas multicabeças do mundo, utilizadas em fábricas de bandeiras e cortinas de luxo, podem ultrapassar 30 metros de comprimento e ter mais de 50 cabeçotes sincronizados por controladores eletrônicos de alta precisão!",
    "practicalExercise": "Se você visitar uma confecção industrial ou fábrica de bordados, observe como o pantógrafo longo se move em bloco milimétrico e como as cabeças compartilham o mesmo eixo giratório de sincronismo!",
    "quickSummary": "Equipamento CNC industrial com múltiplos cabeçotes sincronizados que bordam simultaneamente a mesma matriz para alta produção seriada.",
    "relatedTerms": [
      "Máquina Monocabeça",
      "Pantógrafo Industrial",
      "Towa Gauge",
      "Produção Seriada",
      "Troca Automática de Cores"
    ],
    "tags": [
      "m-008",
      "maquina multicabecas",
      "multi-head",
      "tajima",
      "barudan",
      "industrial",
      "uniformes",
      "alta producao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN INDUSTRIAL CORPORATION. Multi-Head Mechanical Sychronization, Drive Shafts and CNC Controller Architecture. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Engenharia Industrial de Bordados: Máquinas Multicabeças, Padronização de Lotes e Produtividade Contínua. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-009-motor-de-passo-servo-motor-eixos-x-y-stepper-servo",
    "code": "M-009",
    "term": "Motor de Passo e Servo Motor dos Eixos X e Y (Stepper & Servo Motors - X/Y Axes)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Do latim 'motor' (o que move) e do inglês 'step' (passo) / 'servus' (servo).",
    "origin": "Motores eletromecânicos de controle digital por pulsos e retroalimentação óptica desenvolvidos para a robótica e máquinas-ferramenta CNC, adaptados para movimentar com precisão micrométrica o pantógrafo de bordado nos eixos cartesianos.",
    "summary": "Motores de alta precisão controlados pela placa-mãe da máquina que movimentam o bastidor nos sentidos horizontal (X) e vertical (Y) a cada milissegundo.",
    "definition": "Os Motores de Passo e Servo Motores de Eixos X e Y (X/Y Axis Drive Motors / Stepper & Digital AC Servo Drives) são os atuadores eletromecânicos responsáveis pela translação do pantógrafo e do bastidor de bordado nas duas dimensões do plano cartesiano. A cada agulhada, enquanto a agulha está erguida fora do tecido (ângulo de 270° a 100° do ciclo de rotação principal), os motores recebem pulsos binários de comando do processador CNC e deslocam o bastidor para a próxima coordenada exata de ponto. Enquanto os motores de passo operam em malha aberta com passos discretos (usados em máquinas menores), os servo motores operam em malha fechada com encoders ópticos de alta resolução, garantindo suavidade, altíssima velocidade e torque sem perda de passos.",
    "technicalDetails": "Especificações eletromecânicas e cinemática dos motores de eixos:\n• Resolução de Posicionamento: 0,1 mm por pulso digital (10 pulsos por milímetro linear de deslocamento);\n• Janela Temporal de Movimento: O deslocamento completo do bastidor deve ocorrer em uma fração de 25 a 40 milissegundos a 1.000 PPM, enquanto a agulha está no ponto morto superior;\n• Aceleração e Desaceleração Dinâmica: Rampas de aceleração trapezoidais e em curva S (S-curve) para evitar solavancos e vibrações que deformem o desenho;\n• Correias Sincronizadoras: Motores conectados ao pantógrafo por correias dentadas de poliuretano com alma de aço ou fibra de vidro (correias tipo HTD / GT2 de passo 3 mm ou 5 mm);\n• Perda de Passo (Step Loss): Em motores de passo, se o bastidor bater em um obstáculo físico, o motor perde a contagem de passos e todo o restante do bordado fica torto e deslocado no tecido.",
    "howItWorks": [
      "1. A placa-mãe da máquina de bordar processa a coordenada seguinte da matriz de bordado (ex: X = +1,2 mm; Y = -2,4 mm).",
      "2. O sensor do eixo principal informa que a agulha subiu e saiu completamente do tecido.",
      "3. O driver eletrônico envia uma sequência ultrarrápida de pulsos elétricos para os motores dos eixos X e Y.",
      "4. Os eixos dos motores giram no ângulo exato, tracionando as correias dentadas do pantógrafo.",
      "5. O bastidor com o tecido é deslocado suavemente para o novo ponto em menos de 30 milissegundos.",
      "6. O pantógrafo para completamente e fica imóvel.",
      "7. A agulha desce no tecido imóvel, a lançadeira laça a linha e o ciclo se reinicia."
    ],
    "beginnerExplanation": "Os motores dos eixos X e Y são as 'pernas mecânicas' da máquina de bordar! Enquanto a agulha fica só subindo e descendo no mesmo buraquinho da chapa, esses motores seguram o bastidor e puxam o tecido para a direita, para a esquerda, para cima e para baixo com uma rapidez inacreditável! Cada vez que a agulha sobe no ar, os motores andam um passinho minúsculo e param no lugar certinho para a agulha descer de novo. São esses motores inteligentes que desenham as flores, letras e contornos perfeitos no tecido!",
    "applications": [
      "Movimentação milimétrica do pantógrafo em máquinas de bordar domésticas e industriais",
      "Execução de saltos longos rápidos (Jumps) e deslocamentos de área de bordado",
      "Sincronização com o sensor de ângulo do eixo principal da máquina",
      "Retorno exato à posição de origem após interrupções de energia elétrica"
    ],
    "commonErrors": [
      "Deixar o bastidor bater na parede, em caixas ou em cones de linha durante o bordado (o motor perde o passo e desalinha o desenho inteiro)",
      "Empurrar ou puxar o bastidor com as mãos com a máquina ligada (força os eixos dos motores e pode queimar os drivers da placa)",
      "Não limpar a poeira e fiapos acumulados nas guias lineares e correias dentadas dos eixos"
    ],
    "troubleshootingTips": [
      "Se o bordado saiu todo torto ou 'deslocado' para o lado do meio para o final: verifique se o bastidor não bateu em nenhum objeto na mesa durante o movimento",
      "Nunca mova o braço do pantógrafo manualmente com a máquina ligada; use sempre as setas direcionais do painel da máquina",
      "Mantenha uma folga de pelo menos 30 cm livre ao redor de todos os lados da máquina para o movimento total do bastidor"
    ],
    "dicaArtrelados": "Crie uma 'zona livre de segurança' ao redor da sua máquina de bordar! Nunca deixe tesouras, réguas, celulares ou outros bastidores encostados na mesa de movimentação. Se o bastidor encostar em uma tesoura esquecida, o motor de passo vai perder o ponto de referência e estragar a peça de forma irreversível!",
    "voceSabia": "Em uma velocidade de 1.000 pontos por minuto, o pantógrafo acelera, se desloca e para completamente mais de 16 vezes a cada segundo, suportando forças de aceleração comparáveis às de carros de corrida de Fórmula 1!",
    "practicalExercise": "Assista a um bordado com velocidade reduzida e observe atentamente: note como o bastidor se move exclusivamente no momento em que a agulha está no ponto mais alto e fica absolutamente imóvel no momento exato em que a ponta da agulha perfura o tecido!",
    "quickSummary": "Motores eletromecânicos de controle digital que movem o pantógrafo nos eixos horizontal (X) e vertical (Y) sincronizados com o ciclo da agulha.",
    "relatedTerms": [
      "Pantógrafo",
      "Coordenadas Cartesianas",
      "Perda de Passo",
      "Ponto Morto Superior",
      "Correia Dentada"
    ],
    "tags": [
      "m-009",
      "motor de passo",
      "servo motor",
      "eixo x",
      "eixo y",
      "pantografo",
      "cinematica",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "STEPPERONLINE CNC AUTOMATION. Stepper and AC Servo Motor Kinematics in High-Speed Textile Equipment. Nanjing: StepperOnline, 2022.",
      "ARTRELADOS. Eletrônica e Mecânica dos Eixos X e Y: Servomotores, Correias Sincronizadas e Eliminação de Deslocamentos de Ponto. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-010-mola-tensao-caixa-bobina-tension-leaf-spring",
    "code": "M-010",
    "term": "Mola de Tensão da Caixa de Bobina (Bobbin Case Tension Leaf Spring)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da metalurgia e engenharia de precisão em aço temperado.",
    "origin": "Pequena lâmina de aço mola desenvolvida no final do século XIX para controlar o atrito exercido sobre a linha inferior da bobina, assegurando a formação equilibrada do ponto de costura e bordado.",
    "summary": "Lâmina curva de aço flexível presa por um microparafuso na lateral da caixa de bobina que regula a resistência e a pressão da linha de baixo.",
    "definition": "A Mola de Tensão da Caixa de Bobina (Bobbin Tension Leaf Spring / Lâmina de Tensão Inferior / Freio da Linha da Bobina) é uma fina tira de aço temperado flexível parafusada na lateral externa da caixa de bobina (seja ela rotativa vertical de metal ou horizontal drop-in de plástico). Sua função mecânica essencial é pressionar a linha da bobina contra o corpo da caixa com uma força de atrito calibrada (entre 18 e 35 gramas-força). Conforme a linha é puxada pela agulha e pela lançadeira, essa mola garante que a linha inferior saia com resistência constante e uniforme, permitindo a formação da proporção correta de 1/3 de linha branca no verso de pontos cheios.",
    "technicalDetails": "Características e ajuste da mola de tensão da bobina:\n• Material: Aço-mola inoxidável temperado com acabamento polido antiabrasivo;\n• Parafusos de Fixação: Dois parafusos microscópicos (o parafuso traseiro fixa a mola; o parafuso dianteiro/central ajusta a pressão de tensão);\n• Sentido de Calibração: Girar no sentido horário (aperta/aumenta a tensão); girar no sentido anti-horário (solta/diminui a tensão);\n• Faixa de Força Recomendada: 18 gf a 25 gf (bordado padrão com linha de bobina fina 60wt) e 25 gf a 35 gf (em tecidos pesados ou couro);\n• Danos por Poeira: O acúmulo de fiapos e restos de linha presos sob a lâmina da mola afasta o aço do corpo da caixa, anulando a tensão e fazendo a linha branca subir completamente para a frente do bordado.",
    "howItWorks": [
      "1. A bordadeira insere a carretilha de bobina na caixa e passa a linha pela fenda lateral.",
      "2. Puxa a linha por baixo da lâmina de aço da mola até ouvir um leve 'clique' de encaixe.",
      "3. A mola exerce uma pressão milimétrica suave sobre a linha de poliéster.",
      "4. Durante o bordado, a linha da bobina é alimentada com fluidez uniforme.",
      "5. A tensão da linha superior e a tensão da mola inferior equilibram-se no centro do tecido.",
      "6. A parte superior do bordado exibe apenas a cor brilhante, enquanto o verso exibe a coluna central de 1/3 da linha da bobina.",
      "7. O resultado é um ponto perfeitamente equilibrado e sem nós aparentes."
    ],
    "beginnerExplanation": "A mola da caixa de bobina é aquela 'lingueta de aço' que fica parafusada na caixinha preta ou de metal onde você coloca a carretilha de baixo! Quando você passa a linha por baixo dessa molinha, ela funciona como um freio suave: segura a linha para ela não sair solta demais e nem presa demais. Se entrar uma sujeirinha de fiapo debaixo dessa lâmina de aço, o freio para de funcionar e a linha de baixo sobe toda para a frente do bordado parecendo pipoca branca!",
    "applications": [
      "Regulagem milimétrica da tensão inferior para bordados em toalhas, malhas e tecidos planos",
      "Calibração com dinamômetro de precisão (Towa Digital Bobbin Tension Gauge)",
      "Padronização de tensão entre diferentes caixas de bobina no ateliê",
      "Adaptação para linhas de bobina especiais (linhas coloridas ou fios elásticos)"
    ],
    "commonErrors": [
      "Girar o parafuso de ajuste da mola dando voltas completas (o parafuso é super sensível; meia volta pode soltá-lo e perdê-lo no chão)",
      "Esquecer de passar a linha por baixo da lâmina da mola ao colocar a bobina nova na máquina",
      "Usar agulha de costura ou objeto pontiagudo de ferro para limpar a mola, arranhando ou entortando o aço para sempre"
    ],
    "troubleshootingTips": [
      "Se a linha branca da bobina subiu toda para a frente do bordado: pegue um cartão de visitas de papel grosso ou pedaço de papelão e passe por baixo da mola para expulsar fiapos de poeira escondidos",
      "Ao regular o parafuso de tensão da bobina, faça micro-ajustes como nos ponteiros de um relógio (gire no máximo o equivalente a 10 a 15 minutos por vez)",
      "Tenha sempre duas caixas de bobina no ateliê: uma já perfeitamente calibrada para bordado comum e outra reserva"
    ],
    "dicaArtrelados": "A linha branca da bobina começou a aparecer em cima do bordado de repente? Antes de achar que a máquina quebrou, tire a caixa de bobina e passe um pedacinho de papel sulfite dobrado por baixo da lâmina da mola: você vai ver sair uma 'bolinha' de fiapo de linha que estava deixando o freio aberto! É o conserto mais rápido e mágico do ateliê!",
    "voceSabia": "O parafuso que ajusta a mola da caixa de bobina é um dos menores parafusos da engenharia têxtil, medindo menos de 1,2 mm de diâmetro!",
    "practicalExercise": "Retire a caixa de bobina da máquina: coloque a bobina, passe a linha pela mola e suspenda a caixa segurando pela ponta da linha. Ao dar um leve toquezinho na linha, a caixinha deve descer alguns centímetros e parar (teste da gota / Drop Test)!",
    "quickSummary": "Lâmina flexível de aço na caixa de bobina que regula a pressão e o atrito da linha inferior para garantir o equilíbrio perfeito dos pontos.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Towa Gauge",
      "Linha de Bobina",
      "Equilíbrio de Tensão",
      "Teste da Gota"
    ],
    "tags": [
      "m-010",
      "mola de tensao",
      "caixa de bobina",
      "tensao inferior",
      "bobbin case",
      "leaf spring",
      "towa",
      "regulagem",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. Bobbin Tension Gauge Operations, Leaf Spring Mechanics and Calibration. Tóquio: Towa, 2022.",
      "ARTRELADOS. O Equilíbrio Perfeito das Tensões: Caixa de Bobina, Molas de Aço, Towa Gauge e Diagnóstico de Ponto. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-011-manutencao-preventiva-lubrificacao-programada-oil-schedule",
    "code": "M-011",
    "term": "Manutenção Preventiva e Lubrificação Programada (Preventive Maintenance & Oil Schedule)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Manutenção & Cuidados",
    "grammarClass": "Substantivo feminino / Do latim 'manu tenere' (manter com as mãos) e 'lubricare' (tornar liso).",
    "origin": "Protocolo técnico de engenharia de confiabilidade mecânica aplicado desde a primeira revolução industrial para prevenir desgaste prematuro, ruído e travamentos de componentes rotativos de alta precisão.",
    "summary": "Rotina periódica essencial de limpeza de fiapos, aspiração, lubrificação das lançadeiras e checagem de parafusos para manter a máquina em perfeito estado.",
    "definition": "A Manutenção Preventiva e Lubrificação Programada (Embroidery Machine Preventive Maintenance / Daily Cleaning & Lubrication Routine) é o conjunto de procedimentos técnicos sistemáticos realizados periodicamente pela bordadeira ou técnico para garantir a máxima durabilidade mecânica, suavidade operacional e precisão de pontos da máquina de bordar. Compreende a remoção regular de poeira e resíduos têxteis acumulados sob a chapa de agulha e lançadeira, a aplicação milimétrica de óleo mineral branco de alta pureza nos pontos de atrito rotativo, a lubrificação com graxa de lítio nas engrenagens e a verificação periódica de folgas, correias e parafusos estruturais.",
    "technicalDetails": "Cronograma e protocolos de manutenção preventiva:\n• Limpeza Diária (ou a cada troca de trabalho longo): Retirar a chapa de agulha, aspirar os fiapos com pincel macio ou mini-aspirador; NUNCA usar ar comprimido em lata (ele empurra a sujeira para dentro dos sensores e placas eletrônicas);\n• Lubrificação da Lançadeira: 1 gota de óleo mineral específico para máquinas de costura no trilho da lançadeira (Hook Race) a cada 4 a 6 horas de uso contínuo (ou diariamente antes de começar a bordar);\n• Lubrificação das Barras de Agulha e Feltros: 1 gota em cada feltro de lubrificação a cada 40 a 50 horas de trabalho;\n• Graxa de Engrenagens: Graxa sintética branca de lítio/teflon nas engrenagens plásticas e metálicas a cada 6 meses;\n• Tipo de Óleo: Óleo mineral claro de alta pureza e baixa viscosidade (ISO VG 10 ou VG 15 / White Spindle Oil); NUNCA usar óleos lubrificantes automotivos, óleos em spray desengripantes (tipo WD-40) ou óleos vegetais de cozinha;\n• Revisão Técnica Geral: Recomendada a cada 1.500 a 2.000 horas ou anualmente para alinhamento de ponto do gancho da lançadeira e atualização de firmware.",
    "howItWorks": [
      "1. A bordadeira desliga a máquina da tomada ao final do dia ou antes de iniciar a manutenção.",
      "2. Retira a agulha, o calcador e os parafusos da chapa de agulha.",
      "3. Remove a caixa de bobina e usa um pincel seco para varrer todos os fiapos acumulados no poço da lançadeira e dentes.",
      "4. Coloca exatamente UMA gota de óleo mineral no trilho giratório da lançadeira.",
      "5. Gira o volante manualmente duas voltas completas para o óleo se espalhar homogeneamente.",
      "6. Passa um tecido de algodão limpo para tirar qualquer excesso de óleo superficial.",
      "7. Remonta a caixa de bobina, a chapa e o calcador: a máquina funciona macia, silenciosa e protegida contra desgaste."
    ],
    "beginnerExplanation": "Fazer a manutenção da sua máquina de bordar é como escovar os dentes: tem que ser um hábito diário! A cada bordado, a linha e o tecido soltam uma poeirinha fininha de algodão que vai se acumulando dentro da máquina junto com o óleo velho, virando uma 'pastinha' que trava as peças e endurece a máquina. Tirar a chapa para limpar os fiapos com um pincel e pingar apenas UMA gotinha de óleo de máquina no trilho da lançadeira todo dia faz sua máquina durar mais de 20 anos bordando macia e silenciosa!",
    "applications": [
      "Preservação do tempo de vida útil de máquinas de bordar domésticas, semi-industriais e industriais",
      "Eliminação de ruídos ásperos, estalos metálicos e aquecimento excessivo do cabeçote",
      "Prevenção de quebras repetitivas de agulha e falhas de sincronismo da lançadeira",
      "Garantia de que manchas de óleo velho ou graxa não sujem as roupas dos clientes"
    ],
    "commonErrors": [
      "Usar spray desengripante multiuso (tipo WD-40) na máquina de bordar (ele resseca os mecanismos e corrói componentes de plástico)",
      "Exagerar no óleo, enchendo a lançadeira de líquido (o excesso de óleo espirra no tecido e mancha a roupa do cliente)",
      "Usar compressor de ar ou assoprar com a boca dentro da lançadeira (o sopro contém saliva que oxida o metal e empurra a sujeira para as placas eletrônicas)"
    ],
    "troubleshootingTips": [
      "Se a máquina começou a fazer um barulho seco parecendo uma máquina de costura antiga: pare imediatamente e coloque 1 gota de óleo no trilho da lançadeira",
      "Sempre borde um retalho de teste (paninho de descarte) logo após lubrificar para absorver qualquer micro-gotícula residual de óleo antes de colocar a peça do cliente",
      "Use apenas pincel de cerdas macias ou aspirador de pó com bico fino para higienizar a lançadeira"
    ],
    "dicaArtrelados": "Tenha uma regra sagrada no seu ateliê: todo dia de manhã, antes de ligar a máquina, tire a caixinha de bobina, passe o pincel e pingue 1 gotinha de óleo na pista da lançadeira! Esse ritual de 1 minuto economiza centenas de reais em técnicos e faz a sua máquina bordar macia como veludo o dia todo!",
    "voceSabia": "Uma lançadeira de máquina de bordar industrial gira em torno de seu próprio eixo a mais de 2.000 rotações por minuto; sem a fina película microscópica de óleo mineral, o atrito de metal com metal elevaria a temperatura a ponto de fundir as peças em poucos minutos de uso contínuo!",
    "practicalExercise": "Pegue a chave de fenda da sua máquina, retire a chapa de agulha e limpe com um pincel todos os fiapos acumulados na lançadeira. Pingue uma gotinha de óleo no trilho, monte de volta e escute como o barulho da máquina fica muito mais suave e gostoso de ouvir!",
    "quickSummary": "Conjunto de cuidados diários e periódicos de limpeza de fiapos e lubrificação controlada com óleo mineral para preservar a vida útil da máquina.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Chapa de Agulha",
      "Óleo Mineral Têxtil",
      "Caixa de Bobina",
      "Desgaste Mecânico"
    ],
    "tags": [
      "m-011",
      "manutencao preventiva",
      "lubrificacao",
      "oleo mineral",
      "limpeza",
      "fiapos",
      "lancadeira",
      "cuidados",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SOCIETY OF TRIBOLOGISTS AND LUBRICATION ENGINEERS. Textile Machine Lubrication and Wear Prevention Standards. Park Ridge: STLE, 2022.",
      "ARTRELADOS. Manual de Conservação e Manutenção Preventiva de Máquinas de Bordar: Limpeza, Lubrificação e Diagnóstico Sonoro. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-012-marcacao-centro-gabarito-posicionamento-placement-template",
    "code": "M-012",
    "term": "Marcação de Centro e Gabarito de Posicionamento (Center Marking & Placement Template)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo feminino / Do latim 'marcare' e do árabe 'qālib' (forma/molde).",
    "origin": "Técnica geométrica de medição de alfaiataria e modelagem têxtil que utiliza réguas, cruzetas e gabaritos transparentes quadriculados para garantir que o bordado fique exatamente alinhado no centro do corpo ou do bolso.",
    "summary": "Processo de traçar os eixos vertical e horizontal (cruz central) no tecido para encaixar perfeitamente o desenho na posição exata desejada na peça.",
    "definition": "A Marcação de Centro e Uso de Gabaritos de Posicionamento (Embroidery Alignment, Crosshair Marking & Placement Templates) é a metodologia prática de transferir as coordenadas de centro do arquivo digital da matriz para a peça física de tecido antes ou durante o fechamento do bastidor. O centro do bordado é indicado pela interseção de dois eixos ortogonais perpendiculares (eixo X horizontal e eixo Y vertical). O alinhamento perfeito evita que logotipos em camisas fiquem tortos, caídos em direção à axila, deslocados em relação aos botões ou desalinhados em barras de toalhas e enxovais.",
    "technicalDetails": "Métodos de marcação e ferramentas de alinhamento:\n• Marcação por Giz ou Caneta Fantasma: Traçado de uma cruz perpendicular de 90° com caneta que apaga com água ou calor do ferro (FriXion / Heat-Erasable);\n• Gabarito de Plástico Transparente do Bastidor (Hoop Template): Placa quadriculada de acrílico gravada em centímetros com orifícios de centro e entalhes de encaixe nos aros do bastidor;\n• Posicionamento a Laser (Laser Crosshair / Pointer): Ponto luminoso vermelho na máquina de bordar que projeta a posição exata da agulha sobre a marcação do tecido;\n• Gabaritos Padronizados de Camisas e Polos: Posicionamento padrão de logotipo no peito esquerdo (7 cm a 9 cm abaixo da gola/ombro e alinhado entre o centro da carcela de botões e a costura lateral da manga);\n• Alinhamento no Painel: Ajuste de rotação milimétrica (1° a 1°) e deslocamento nas setas direcionais da máquina para casar o ponto zero com a cruz marcada.",
    "howItWorks": [
      "1. A bordadeira estende a camisa ou toalha sobre uma mesa de corte plana.",
      "2. Usa uma fita métrica ou gabarito de camisa para localizar o ponto exato do peito esquerdo.",
      "3. Com uma caneta mágica apagável com calor, faz uma cruz suave (eixo vertical e horizontal) marcando o centro.",
      "4. Encaixa o tecido no bastidor alinhando as setas do bastidor e o gabarito transparente com a cruz desenhada.",
      "5. Encaixa o bastidor na máquina de bordar.",
      "6. Abaixa a agulha manualmente ou usa o feixe laser da máquina para conferir se o centro da máquina coincide rigorosamente com o centro da cruz.",
      "7. Dá a partida no bordado com 100% de certeza de que o desenho sairá reto e milimetricamente centralizado."
    ],
    "beginnerExplanation": "Marcar o centro é como colocar uma 'mira telescópica' no tecido antes de bordar! Sabe quando a gente vê uma camisa com o logo torto parecendo que vai cair embaixo do braço? Isso acontece porque a pessoa não marcou o centro. Antes de colocar o tecido no bastidor, você usa uma canetinha que apaga com o ferro e faz uma cruz no lugar certinho onde o desenho deve ficar. Depois, você encaixa a mira do bastidor nessa cruz. Quando a máquina começar a bordar, o desenho vai ficar perfeitamente reto e no lugar exato!",
    "applications": [
      "Centralização exata de brasões e nomes no peito esquerdo de jalecos, camisas polo e dólmãs",
      "Alinhamento perfeito de monogramas em barras de toalhas de banho e jogos de cama",
      "Bordados em bolsos prontos, bonés e punhos de camisas sociais",
      "Montagem de composições com múltiplos bordados conectados em série"
    ],
    "commonErrors": [
      "Confiar apenas 'no olho' para colocar a camisa no bastidor sem medir com régua nem fazer a marcação da cruz",
      "Usar caneta esferográfica comum ou lápis grafite para marcar o centro (a tinta mancha o tecido e não sai nunca mais)",
      "Esquecer de conferir o alinhamento da linha horizontal (o bordado fica centralizado, mas inclinado/torto)"
    ],
    "troubleshootingTips": [
      "Use sempre canetas fantasmas termo-apagáveis próprias para costura (que somem totalmente com o vapor do ferro de passar)",
      "Em toalhas de banho: dobre a toalha ao meio no sentido do comprimento e vinque com os dedos para achar o centro vertical perfeito sem esforço",
      "Use o gabarito quadriculado de plástico que acompanha o bastidor para conferir o esquadro antes de apertar o parafuso"
    ],
    "dicaArtrelados": "Para acertar a altura do bordado no peito esquerdo de camisas masculinas e femininas: trace uma linha horizontal imaginária a partir do segundo botão da camisa e uma linha vertical descendo do meio do ombro. O encontro dessas duas linhas é o centro perfeito para qualquer logotipo de 8 a 10 cm!",
    "voceSabia": "O erro número 1 de devolução de pedidos em confecções de uniformes corporativos não é erro de cor ou de costura, mas sim bordados com logotipos tortos ou deslocados fora do centro anatômico do peito!",
    "practicalExercise": "Pegue uma camisa polo velha: meça a posição do peito esquerdo com a régua, faça a cruz com caneta fantasma, monte no bastidor usando o gabarito plástico e confira na máquina com o feixe laser ou agulha baixa!",
    "quickSummary": "Metodologia geométrica de marcar eixos perpendiculares no tecido para posicionar o bordado de forma impecável, reta e alinhada.",
    "relatedTerms": [
      "Gabarito do Bastidor",
      "Caneta Fantasma",
      "Laser Pointer",
      "Alinhamento",
      "Peito Esquerdo"
    ],
    "tags": [
      "m-012",
      "marcacao de centro",
      "gabarito",
      "posicionamento",
      "peito esquerdo",
      "alinhamento",
      "caneta fantasma",
      "artrelados"
    ],
    "bibliographicReferences": [
      "APPAREL MASTER GUILD. Industrial Garment Placement and Precision Embroidery Standards. Nova York: AMG, 2021.",
      "ARTRELADOS. Alinhamento e Gabaritos de Alta Precisão: Medidas Padronizadas, Peito Esquerdo, Toalhas e Enxovais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-013-microfibra-tecidos-sinteticos-felpudos-microfiber-suede",
    "code": "M-013",
    "term": "Microfibra e Tecidos Sintéticos Felpudos (Microfiber & Suede Fabrics)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Do grego 'mikros' (pequeno) e do latim 'fibra'.",
    "origin": "Desenvolvida no Japão no final da década de 1970 a partir de filamentos sintéticos ultrafinos de poliéster e poliamida com diâmetro inferior a 1 decitex (100 vezes mais fino que um fio de cabelo humano).",
    "summary": "Tecido tecnológico composto por fibras microscópicas com toque aveludado ou felpudo suave, que exige agulha fina (Microtex/Ball Point) e filme solúvel superior.",
    "definition": "A Microfibra (Microfiber / Ultrasuede / Tecidos Sintéticos Acamurçados) é uma família de tecidos compostos por polímeros sintéticos extrudados em espessuras microscópicas ultrafinas. Apresenta-se tanto em versões planas acetinadas (usadas em roupões e toalhas de secagem rápida) quanto em versões peletizadas e aveludadas de toque macio (camurça sintética, suede e plush leve). Por possuir uma densidade de filamentos extremamente alta ou uma superfície aveludada com micropelos, a microfibra requer cuidados específicos no bordado: a agulha deve ser pontiaguda e fina (Microtex 70/10) em tecidos planos, ou ponta bola fina com plástico hidrossolúvel (Topping) em microfibras felpudas para evitar o afundamento dos pontos.",
    "technicalDetails": "Propriedades e parâmetros de bordado em microfibra:\n• Finura do Filamento: < 1 decitex (fio de alta densidade estrutural);\n• Tendência de Repuxo: Média a alta em microfibras de poliéster com toque de pêssego;\n• Estabilização Recomendada: Entretela rasgável de boa qualidade (50 g/m²) ou entretela de corte suave (Cut-Away 60 g/m²) colada com adesivo temporário em spray;\n• Película de Superfície (Topping): Filme plástico hidrossolúvel de 20 micras obrigatório em microfibras toalhadas ou aveludadas;\n• Escolha da Agulha: Microtex 70/10 para microfibras lisas e impermeáveis; Ball Point (SES) 75/11 para microfibras atoalhadas e elásticas;\n• Sensibilidade Térmica: Suporta calor moderado; passar ferro apenas com pano de proteção para não queimar as fibras sintéticas.",
    "howItWorks": [
      "1. A bordadeira aplica adesivo spray temporário sobre uma folha de entretela rasgável ou de corte.",
      "2. Assenta a microfibra sobre a entretela, evitando puxar ou distorcer as fibras.",
      "3. Posiciona uma folha de filme hidrossolúvel transparente na superfície superior da peça.",
      "4. Prende o conjunto no bastidor com aperto suave do parafuso para não marcar o veludo da microfibra.",
      "5. A máquina borda o desenho: os sob-pontos sustentam as letras sobre o plástico sem afundar nos micro-filamentos.",
      "6. Ao finalizar, remove-se o excesso de filme solúvel puxando suavemente e dissolvendo os cantos com vapor.",
      "7. O bordado fica em alto relevo, extremamente nítido e sem áreas afundadas na textura macia."
    ],
    "beginnerExplanation": "A microfibra é aquele tecido super macio e aveludado que a gente encontra em toalhas mágicas de academia, mantinhas de sofá, estofados de suede e roupões de banho levinhos! Como ela tem pelinhos muito fininhos e macios, se você bordar direto nela sem colocar nada por cima, a linha do bordado afunda nos pelos e o desenho fica sumido e 'banguela'. O grande segredo é colocar um plastiquinho solúvel por cima antes de bordar: ele funciona como uma 'ponte de vidro' que segura os pontos em cima do tecido bem visíveis e brilhantes!",
    "applications": [
      "Toalhas de praia e academia de microfibra esportiva de alta absorção",
      "Roupões de banho luxuosos em microfibra aveludada e tecidos suede",
      "Almofadas decorativas e mantas de sofá em tecidos sintéticos peletizados",
      "Flanelas e panos de limpeza técnica personalizados com logotipos de óticas e concessionárias"
    ],
    "commonErrors": [
      "Bordar microfibra felpuda sem película plástica por cima (os pontos cheios e contornos afundam no tecido)",
      "Apertar o parafuso do bastidor com força bruta sobre a microfibra aveludada (cria marcas de queima de bastidor difíceis de tirar)",
      "Passar o ferro de passar roupa muito quente direto sobre a microfibra (derrete o poliéster sintético na hora)"
    ],
    "troubleshootingTips": [
      "Para tirar marcas de bastidor de microfibra: aplique um jato leve de vapor com o ferro a 5 cm de distância e passe uma escova de cerdas macias na direção do pelo",
      "Em microfibras atoalhadas muito fofas, aumente a compensação de repuxo para 0,40 mm no software",
      "Use entretela hidrossolúvel como topping superior e dissolva os restos com uma esponja úmida"
    ],
    "dicaArtrelados": "Para bordar toalhas de microfibra de academia sem deixar marcas redondas de bastidor: monte apenas a entretela no aro do bastidor, passe um pouco de cola spray temporária e cole a toalha de microfibra por cima (flutuação)! Fica perfeito, sem nenhuma marca de aro e super rápido de produzir!",
    "voceSabia": "Uma única fibra de microfibra de poliéster é tão fina que um único grama desse fio pode se estender por mais de 9 quilômetros de comprimento contínuo!",
    "practicalExercise": "Pegue uma flanela de microfibra: coloque plastiquinho solúvel em cima, monte no bastidor com entretela rasgável e borde um nome com fonte em ponto cheio: veja como as letras ficam lisinhas e com relevo perfeito!",
    "quickSummary": "Tecido sintético composto por filamentos ultrafinos e toque aveludado que exige filme solúvel superior para garantir relevo e nitidez.",
    "relatedTerms": [
      "Filme Hidrossolúvel (Topping)",
      "Flutuação (Float)",
      "Queimadura de Bastidor",
      "Suede",
      "Plush"
    ],
    "tags": [
      "m-013",
      "microfibra",
      "suede",
      "toalha de academia",
      "topping",
      "hidrossoluvel",
      "pelos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SYNTHETIC FIBERS & TEXTILES TECHNICAL SOCIETY. Microfiber Engineering and High-Density Stitch Applications. Osaka: SFTS, 2022.",
      "ARTRELADOS. Bordando em Tecidos Tecnológicos: Microfibras, Suedes, Sintéticos e Acamurçados com Relevo Impecável. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-014-mosaico-pontos-pontos-programados-pattern-motif-fill",
    "code": "M-014",
    "term": "Mosaico de Pontos e Pontos Programados (Pattern Fill / Motif Fill / Carving Stamp)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do italiano 'mosaico' (obra com pequenas peças) e do grego 'mouseion'.",
    "origin": "Técnica decorativa milenar transposta para os algoritmos de computação gráfica na década de 1990 para quebrar a monotonia visual de grandes áreas de ponto tatami, inserindo desenhos geométricos repetitivos e texturas em baixo-relevo.",
    "summary": "Preenchimento de bordado decorativo que utiliza arranjos geométricos repetidos (motifs) ou carimbos de relevo (carving) para criar texturas artísticas ricas.",
    "definition": "O Mosaico de Pontos e Preenchimento Programado (Motif Fill / Pattern Fill / Carving Stamps / Efeito Mosaico e Gravura) é uma técnica avançada de puncionamento digital no software de bordados em que grandes áreas de preenchimento são decoradas por padrões repetitivos de agulhadas. Em vez de uma textura lisa e uniforme de ponto tatami tradicional, o software calcula a penetração das agulhas para criar desenhos decorativos tridimensionais integrados à trama (como xadrez, estrelas, escamas de peixe, corações, tranças, tijolinhos ou ondas de água). Essa técnica proporciona grande valor estético, reduz o peso de linha da matriz e quebra a rigidez de peças grandes.",
    "technicalDetails": "Arquitetura algorítmica do preenchimento em mosaico:\n• Tipos Principais: Motif Fill (repetição de pequenos blocos de desenho vetorial conectados), Programmed Tatami (linhas de penetração deslocadas que criam figuras geométricas) e Carving Stamps (carimbos vetoriais que afundam linhas de pontos na trama);\n• Variação de Ângulo e Escala: O programador pode rotacionar o ângulo das colunas de pontos e alterar o tamanho (X/Y) de cada mosaico individualmente;\n• Economia de Pontos: Reduz o consumo total de pontos em até 20% a 30% em comparação com tatamis ultra-densos maciços;\n• Flexibilidade Têxtil: Reduz significativamente a rigidez (efeito 'placa de papelão') de bordados em jaquetas e almofadas;\n• Espaçamento entre Colunas: Densidade típica calibrada entre 0,45 mm e 0,60 mm para evidenciar o relevo da textura.",
    "howItWorks": [
      "1. O programador cria uma forma vetorial ampla (ex: as asas de uma borboleta ou o fundo de um brasão) no software.",
      "2. Seleciona o tipo de preenchimento 'Motif Fill' ou 'Ponto Programado'.",
      "3. Escolhe a estampa da biblioteca de mosaicos (ex: padrão de folhas, favo de mel ou ondas marinhas).",
      "4. Define a escala e o ângulo da textura para acompanhar o caimento anatômico da figura.",
      "5. O software calcula as coordenadas de penetração de agulha gerando o padrão em relevo.",
      "6. A máquina de bordar executa a matriz: o brilho da linha de poliéster reflete a luz de forma tridimensional e dinâmica.",
      "7. O bordado final ganha sofisticação visual comparável a tapeçarias artesanais de luxo."
    ],
    "beginnerExplanation": "O mosaico de pontos é como colocar um 'papel de parede texturizado' dentro do bordado! Sabe quando você vai bordar um desenho muito grande (como uma borboleta ou o fundo de um coração) e não quer que fique aquele bloco liso e pesado de linha? No computador, você pode escolher preencher com mosaico de florzinhas, tijolinhos, estrelinhas ou trancinhas! Quando a máquina costura, ela vai fazendo esses desenhinhos em relevo. O bordado fica super leve, molinho e muito mais elegante de olhar!",
    "applications": [
      "Fundos artísticos de brasões e painéis decorativos de grandes dimensões",
      "Preenchimento de asas de borboletas, pétalas de flores e escamas de animais no bordado realista",
      "Efeito de matelassê e quilting em nécessaires e almofadas no bastidor",
      "Bordados corporativos leves em camisas finas sem endurecer o tecido"
    ],
    "commonErrors": [
      "Usar densidade de pontos muito alta em mosaicos finos (espreme as agulhadas e destrói o desenho da textura)",
      "Escolher mosaicos com traços minúsculos em tecidos felpudos como toalhas de banho (a felpa esconde o relevo)",
      "Esquecer de aplicar sob-pontos (underlay) leves de sustentação antes do preenchimento"
    ],
    "troubleshootingTips": [
      "Para valorizar o efeito mosaico: use linhas brilhantes de poliéster ou viscose trilobal com iluminação angular",
      "Em tecidos médios e lisos (sarja, linho, tricoline), o efeito mosaico atinge sua máxima nitidez visual",
      "Ajuste a escala do mosaico proporcionalmente ao tamanho total do objeto (mosaicos muito pequenos viram ruído visual)"
    ],
    "dicaArtrelados": "Bordar áreas grandes com preenchimento em mosaico geométrico (como favo de mel ou tranças) é o maior segredo para deixar jaquetas jeans e almofadas elegantes e maleáveis! A peça não fica dura como papelão e você economiza milhares de pontos de linha na produção!",
    "voceSabia": "Os efeitos de pontos programados foram inspirados nas antigas técnicas de damasco e jacquard de tecelagem manual de seda da cidade francesa de Lyon no século XVIII!",
    "practicalExercise": "No seu software de bordado: crie um círculo de 8 cm, aplique um preenchimento em mosaico de favo de mel (Honeycomb) e borde em um retalho de tecido com linha dourada: observe o jogo incrível de luz e sombra!",
    "quickSummary": "Técnica de preenchimento decorativo que insere texturas, relevos e padronagens geométricas ricas no interior de grandes áreas de bordado.",
    "relatedTerms": [
      "Ponto Tatami",
      "Carving Stamp",
      "Quilting no Bastidor",
      "Densidade de Ponto",
      "Wilcom Motif"
    ],
    "tags": [
      "m-014",
      "mosaico de pontos",
      "motif fill",
      "pattern fill",
      "pontos programados",
      "carving",
      "textura",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Creative Stitch Effects, Motif Fill Libraries and Carving Architecture. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Efeitos Especiais de Ponto: Mosaicos Programados, Carimbos de Baixo-Relevo e Texturas Tridimensionais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-015-madeira-bordado-madeira-perfurada-wood-embroidery",
    "code": "M-015",
    "term": "Madeira e Bordado em Lâminas de Madeira (Wood Embroidery & Perforated Veneer)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Materiais Especiais",
    "grammarClass": "Substantivo feminino / Do latim 'materia' (substância, tronco de árvore).",
    "origin": "Fusão contemporânea entre a marcenaria fina, corte a laser de precisão e a costura automatizada CNC para criação de capas de cadernos de luxo, joias em madeira e peças de design de interiores.",
    "summary": "Técnica artesanal e industrial de bordar sobre lâminas finas de madeira flexível pré-cortada ou perfurada a laser, exigindo matrizes de baixa densidade.",
    "definition": "O Bordado em Madeira (Wood Machine Embroidery / Bordado em Folhas de Madeira Flexível e Lâminas Perfuradas) é uma técnica inovadora e especializada de bordado mecânico realizada sobre substratos rígidos ou semirrígidos de madeira natural ou MDF fino. Pode ser executada de duas formas principais: 1) Bordado direto em lâminas flexíveis de madeira com suporte têxtil no verso (Wood Veneer with fabric backing), usando agulha de ponta cortante e densidade reduzida; ou 2) Bordado sobre placas de madeira previamente micro-perfuradas a laser, onde a máquina de bordar insere linhas coloridas em pontos corridos ou ponto cruz casando rigorosamente com a furação CNC.",
    "technicalDetails": "Propriedades e parametrização para bordar madeira:\n• Substratos Utilizados: Folhas de lâmina de madeira natural flexível (espessura de 0,3 mm a 0,6 mm) dubladas com tecido ou não-tecido no verso; Placas de MDF fino (1,5 mm a 2,5 mm) micro-perfuradas a laser;\n• Agulha Indicada: Agulha para couro/madeira com ponta cortante de lança (Leather Point - LL / LR calibre 80/12 ou 90/14) para lâminas flexíveis; ou agulha fina 75/11 para furações a laser;\n• Densidade de Matriz: Extremamente baixa; proibido o uso de pontos cheios (satim) pesados ou tatamis densos (eles partem a fibra da madeira no meio);\n• Velocidade Operacional: Reduzida para 350 a 450 PPM para evitar rachaduras pelo impacto mecânico do calcador;\n• Fixação no Bastidor: Uso obrigatório da técnica de flutuação com fita dupla-face forte ou bastidores magnéticos de pressão plana.",
    "howItWorks": [
      "1. A artesã prepara a lâmina de madeira flexível dublada com não-tecido no verso.",
      "2. Prende uma folha de entretela de corte resistente (Cut-Away) no bastidor.",
      "3. Fixa a placa de madeira sobre a entretela usando fita adesiva dupla-face de alta aderência (sem prender a madeira nos aros do bastidor).",
      "4. Carrega uma matriz de bordado com traços lineares abertos (ponto corrido triplo, redwork ou ponto semente leve).",
      "5. Reduz a velocidade da máquina de bordar para 400 PPM.",
      "6. A máquina borda com precisão: a agulha penetra na lâmina de madeira sem estilhaçar a superfície.",
      "7. A peça final exibe a elegância nobre da madeira combinada com o relevo colorido das linhas de bordado."
    ],
    "beginnerExplanation": "Você sabia que dá para bordar em madeira de verdade com a sua máquina de bordar? Não é em uma tora de árvore grossa, claro! A gente usa folhas fininhas e flexíveis de madeira nobre (parecidas com uma cartolina de madeira) ou plaquinhas de madeira cortadas a laser com furinhos. O desenho precisa ser de traços leves e abertos, como um desenho a lápis. O resultado é maravilhoso: capas de caderno de madeira bordadas, chaveiros ecológicos e brincos que parecem joias artesanais exclusivas!",
    "applications": [
      "Capas de agendas, cadernos de luxo e álbuns de casamento em madeira gravada e bordada",
      "Joias contemporâneas, pingentes, brincos e broches em madeira nobre e fios metalizados",
      "Quadros decorativos de arte botânica e elementos de sinalização de interiores",
      "Embalagens e caixas de presente premium para vinhos e cosméticos artesanais"
    ],
    "commonErrors": [
      "Tentar apertar uma lâmina de madeira diretamente no aro de plástico do bastidor (a madeira racha e quebra no meio)",
      "Bordar matrizes com pontos cheios ou tatamis densos normais (o excesso de perfurações corta a madeira como uma serra)",
      "Bordar na velocidade máxima da máquina (as batidas fortes do calcador trincam a madeira)"
    ],
    "troubleshootingTips": [
      "Fixe sempre a madeira por flutuação: monte a entretela no bastidor e cole a madeira por cima com fita dupla-face forte nas bordas",
      "Use matrizes do tipo 'Redwork' ou ponto corrido triplo com comprimento de ponto longo (3,0 mm a 3,5 mm) para espaçar os furos",
      "Hidrate a lâmina de madeira flexível com uma camada levíssima de óleo mineral ou cera natural antes de bordar para evitar ressecamento"
    ],
    "dicaArtrelados": "Para criar capas de cadernos de madeira bordadas inesquecíveis: use lâmina de madeira de Freijó ou Imbuia flexível com ponto corrido duplo e linha metalizada dourada ou cobre! O contraste da madeira natural com o brilho metálico é um dos produtos mais lucrativos para presentear!",
    "voceSabia": "O bordado em madeira e cascas de árvores é praticado há séculos por povos indígenas do Ártico e da América do Norte, que bordavam pelos de alce e fibras vegetais sobre cascas de bétula tratadas!",
    "practicalExercise": "Compre uma folha de lâmina de madeira flexível para marcenaria: corte um pedaço de 10x10 cm, cole com fita dupla-face sobre entretela no bastidor e borde um ramo de folhas em ponto corrido simples na velocidade mínima da sua máquina!",
    "quickSummary": "Técnica requintada de bordar em lâminas finas de madeira flexível ou placas pré-furadas com matrizes abertas e velocidade reduzida.",
    "relatedTerms": [
      "Flutuação (Float)",
      "Ponto Corrido (Running Stitch)",
      "Redwork",
      "Linhas Metálicas",
      "Materiais Rígidos"
    ],
    "tags": [
      "m-015",
      "madeira",
      "wood embroidery",
      "lamina de madeira",
      "caderno de madeira",
      "flutuacao",
      "laser",
      "design",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WOODWORKING & TEXTILE ART COLLABORATIVE. Modern Embroidery on Flexible Veneers and Laser-Cut Substrates. Portland: WTAC, 2022.",
      "ARTRELADOS. Fronteiras do Bordado: Madeira, Cortiça, Acrílico e Materiais Alternativos no Bastidor Eletrônico. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-016-mola-retorno-barra-agulha-needle-bar-return-spring",
    "code": "M-016",
    "term": "Mola de Retorno da Barra de Agulha (Needle Bar Return Spring / Recoil Spring)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica e recuperação elástica de sistemas alternativos.",
    "origin": "Mecanismo de curso mecânico por mola helicoidal de compressão em aço temperado projetado para desacoplar e recolher as barras de agulha inativas em cabeçotes industriais de bordado multiagulhas.",
    "summary": "Mola helicoidal instalada ao redor da haste da barra de agulha que garante o retorno instantâneo da agulha para o ponto morto superior quando ela não está sendo acionada.",
    "definition": "A Mola de Retorno da Barra de Agulha (Needle Bar Return Spring / Recoil Spring / Mola de Recuperação Superior da Agulha) é uma mola helicoidal de compressão fabricada em aço-mola de alta resiliência montada no interior do bloco deslizante de cada agulha no cabeçote de bordar. Em máquinas de bordar multiagulhas (onde existem de 6 a 15 barras de agulha paralelas), apenas a barra da cor ativa é engatada pelo pino de acionamento do virabrequim principal; todas as outras barras permanecem desacopladas e mantidas erguidas no ponto superior pela força constante dessa mola. Ela impede que agulhas inativas desçam por inércia ou gravidade e colidam com o bastidor em movimento.",
    "technicalDetails": "Especificações de engenharia da mola de retorno:\n• Material: Aço-mola para molas mecânicas DIN 17223 / ASTM A228 polido de alta fadiga;\n• Curso Útil: 25 mm a 35 mm de compressão cíclica sem perda de constante elástica;\n• Ciclos de Fadiga: Projetada para resistir a mais de 100 milhões de compressões sem quebra estrutural;\n• Função de Segurança: Mantém o pino de trava superior engatado no trilho de estacionamento das agulhas inativas;\n• Sintomas de Mola Fraca ou Quebrada: A barra de agulha desce sozinha durante a troca de cor, a agulha fura o tecido fora de hora, o sensor de trava apita ou a agulha quebra ao bater no pé calcador adjacente.",
    "howItWorks": [
      "1. A máquina executa o bordado com a agulha número 3 (ativa).",
      "2. As outras agulhas (1, 2, 4, 5, 6...) ficam estacionadas no topo.",
      "3. As molas de retorno mantêm cada barra inativa empurrada firmemente para cima contra o batente de travamento.",
      "4. Quando a matriz comanda uma troca de cor para a agulha 4: o cabeçote desliza lateralmente.",
      "5. O engate do eixo principal desencaixa da barra 3 e engata na barra 4.",
      "6. A mola da barra 3 expande e recolhe a agulha 3 para o topo com segurança absoluta.",
      "7. A máquina retoma a costura com a nova agulha sem risco de choques mecânicos."
    ],
    "beginnerExplanation": "Nas máquinas de bordar industriais que têm várias agulhas (como 6 ou 10 agulhas enfileiradas), você já reparou que só UMA agulha desce para costurar enquanto todas as outras ficam paradinhas lá no alto? O que segura todas essas outras agulhas lá em cima sem cair na sua roupa é a mola de retorno da barra de agulha! É uma mola forte de aço que empurra a agulha para cima o tempo todo. Quando a máquina termina uma cor, essa mola puxa a agulha para o alto num piscar de olhos para a próxima agulha poder descer com segurança!",
    "applications": [
      "Sustentação e retorno seguro de barras de agulha em máquinas industriais multiagulhas (Brother PR, Tajima, Barudan, Happy)",
      "Prevenção de colisões de agulhas durante trocas automáticas de cor em alta velocidade",
      "Absorção de vibrações residuais do cabeçote em rotações acima de 1.000 PPM",
      "Garantia de que a barra de agulha atinja o ponto morto superior antes do pantógrafo se mover"
    ],
    "commonErrors": [
      "Continuar operando a máquina após a mola de uma barra de agulha quebrar (a barra cai e bate no bastidor)",
      "Lubrificar a mola com graxa pesada e pegajosa que junta fiapos e trava o curso da mola",
      "Forçar a barra de agulha para baixo com a mão com o cabeçote travado na posição de estacionamento"
    ],
    "troubleshootingTips": [
      "Se uma das agulhas da sua máquina multiagulhas está caindo sozinha ou parecendo 'frouxa': a mola de retorno daquela barra quebrou e deve ser substituída",
      "Aplique 1 gota de óleo mineral claro no feltro guia da barra de agulha para manter a mola deslizando macia e sem atrito",
      "Durante a limpeza periódica, verifique se não há restos de linha enrolados na espiral da mola de retorno"
    ],
    "dicaArtrelados": "Em máquinas multiagulhas, se você ouvir um barulho metálico fino 'tlec' durante as trocas de cor e a máquina acusar erro de agulha: olhe as barras de agulha por trás do bloco! Se uma delas estiver 1 centímetro mais baixa que as outras, a mola de retorno precisa ser trocada pelo técnico!",
    "voceSabia": "Em uma máquina de bordar industrial de 12 cabeçotes com 15 agulhas cada, existem nada menos que 180 molas de retorno de barra de agulha trabalhando simultaneamente para garantir a troca perfeita de cores!",
    "practicalExercise": "Na sua máquina multiagulhas (ou em um vídeo de demonstração mecânica), observe o bloco de troca de cores deslizando e veja como a agulha anterior sobe rapidamente e trava no alto antes da nova agulha começar a descer!",
    "quickSummary": "Mola helicoidal que mantém as barras de agulha inativas erguidas no ponto morto superior e garante seu retorno seguro após a costura.",
    "relatedTerms": [
      "Barra de Agulha",
      "Troca Automática de Cores",
      "Cabeçote Multiagulhas",
      "Ponto Morto Superior",
      "Mola de Tensão"
    ],
    "tags": [
      "m-016",
      "mola de retorno",
      "barra de agulha",
      "recoil spring",
      "multiagulhas",
      "mecanica",
      "cabecote",
      "seguranca",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA INDUSTRIAL MACHINERY. Needle Bar Mechanics, Recoil Springs and Color Change Dynamics. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Cinemática dos Cabeçotes Industriais: Barras de Agulha, Molas de Retorno e Manutenção de Troca de Cores. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-017-medidor-tensao-digital-dinamometro-tension-gauge",
    "code": "M-017",
    "term": "Medidor de Tensão Digital e Dinamômetro (Digital Tension Gauge & Transducer)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo masculino / Do latim 'metiri' (medir) e 'tensio' (tensão).",
    "origin": "Instrumento dinamométrico de calibração metrológica de precisão (consagrado mundialmente pela fabricante japonesa Towa Corporation) para converter o ajuste empírico de tensões em valores numéricos exatos em gramas-força (gf).",
    "summary": "Aparelho digital de aferição que mede a força exata de tração da linha superior e da caixa de bobina em gramas-força, eliminando suposições.",
    "definition": "O Medidor de Tensão de Bordado (Digital & Analog Thread Tension Gauge / Towa Gauge / Dinamômetro Têxtil) é um instrumento de medição metrológica essencial para a calibração profissional de máquinas de bordar computadorizadas. Existem duas variantes fundamentais: 1) Medidor de Tensão de Bobina (Towa Bobbin Tension Gauge), que acomoda a caixa de bobina e mede o esforço de puxada da linha inferior; e 2) Medidor de Tensão Superior (Top Thread Tension Gauge), que se conecta à linha que sai da agulha para medir a resistência dos discos tensores superiores. O uso do medidor transforma o ajuste de tensão em um procedimento científico e padronizado em gramas-força (gf) ou centinewtons (cN).",
    "technicalDetails": "Parâmetros numéricos e aferição de tensão metrológica:\n• Faixa de Medição: 0 a 500 gramas-força (gf) com resolução de 1 gf;\n• Padrão Universal para Linha de Bobina 60wt: 18 gf a 25 gf (ideal 22 gf para tecidos médios convencionais);\n• Padrão para Linha de Bobina em Bonés Estruturados: 25 gf a 32 gf;\n• Padrão Universal para Linha Superior de Poliéster 40wt: 110 gf a 150 gf (ideal 130 gf);\n• Padrão para Linhas Metálicas e Rayon Frágeis: 90 gf a 110 gf (tensão aliviada);\n• Relação de Força Superior/Inferior: A tensão superior deve ser aproximadamente de 5 a 6 vezes maior que a tensão inferior para garantir o equilíbrio perfeito com 1/3 de branco no avesso dos pontos cheios.",
    "howItWorks": [
      "1. O operador insere a caixa de bobina abastecida no berço de medição do Towa Gauge.",
      "2. Passa a ponta da linha de bobina pelas roldanas do sensor dinamométrico.",
      "3. Puxa a linha continuamente com velocidade constante e suave.",
      "4. O mostrador digital ou analógico indica a força em gramas-força (ex: 22 gf).",
      "5. Se o valor estiver alto (ex: 35 gf), gira o microparafuso da mola no sentido anti-horário; se estiver baixo (ex: 12 gf), gira no sentido horário.",
      "6. Repete o processo em todas as caixas de bobina das cabeças da máquina industrial.",
      "7. Todas as estações passam a operar com rigor metrológico absolutamente idêntico."
    ],
    "beginnerExplanation": "O medidor de tensão (conhecido como 'Towa') é como uma 'balança de precisão' para a linha de bordar! Em vez de ficar tentando adivinhar no olhômetro se a linha de baixo está muito apertada ou muito frouxa, você coloca a caixinha de bobina dentro desse aparelhinho e puxa a linha: ele mostra um número exato na tela (por exemplo, 22 gramas)! Se estiver marcando 30, você solta um pouquinho o parafuso até dar 22. Com isso, seu bordado nunca mais fica repuxado e todas as suas peças saem com a mesma perfeição profissional!",
    "applications": [
      "Padronização metrológica de caixas de bobina em fábricas com múltiplas máquinas",
      "Calibração de tensores superiores para bordados de alta velocidade (1.000+ PPM)",
      "Regulagem precisa para fios nobres e sensíveis (fios metálicos, seda e rayon)",
      "Diagnóstico e solução de problemas de enrugamento (puckering) e quebras de linha misteriosas"
    ],
    "commonErrors": [
      "Puxar a linha no medidor dando trancos rápidos (a leitura correta exige puxada contínua e suave)",
      "Medir a tensão com a caixa de bobina suja com fiapos na mola (gera leitura falsa)",
      "Achar que a mesma regulagem de 22 gf para poliéster vai funcionar perfeitamente com fios elásticos especiais sem reajuste"
    ],
    "troubleshootingTips": [
      "Mantenha uma tabela com os valores-alvo de tensão (gf) colada ao lado da bancada de calibração",
      "Faça a aferição de tensão das caixas de bobina no início de cada turno de trabalho ou sempre que trocar a marca da linha",
      "Se as leituras oscilarem descontroladamente durante a puxada: limpe a mola da caixa de bobina e verifique se a carretilha não está amassada"
    ],
    "dicaArtrelados": "Se você tem mais de uma máquina de bordar no ateliê ou atende encomendas grandes de empresas: ter um medidor de tensão Towa é o melhor investimento que existe! Você calibra todas as bobinas com 22 gramas e nunca mais perde tempo desmanchando bordados enrugados!",
    "voceSabia": "A Towa Corporation, fundada no Japão, tornou-se o padrão ouro global para medição de tensão têxtil, sendo utilizada pelos principais fabricantes de máquinas do planeta como Tajima, Barudan e Brother!",
    "practicalExercise": "Se tiver acesso a um medidor de tensão, teste sua caixa de bobina: puxe a linha suavemente e veja quantos gramas-força ela está puxando. Ajuste o parafuso até atingir entre 20 gf e 24 gf e comprove a perfeição do verso do ponto!",
    "quickSummary": "Instrumento dinamométrico de precisão que mede a força exata de tração das linhas superior e inferior em gramas-força para padronização perfeita.",
    "relatedTerms": [
      "Towa Gauge",
      "Caixa de Bobina",
      "Tensão Superior",
      "Equilíbrio de Tensão",
      "Gramas-Força (gf)"
    ],
    "tags": [
      "m-017",
      "medidor de tensao",
      "dinamometro",
      "towa gauge",
      "gramas-forca",
      "calibracao",
      "metrologia",
      "tensao inferior",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. Digital and Analog Tension Gauge User Manual and Calibration Protocols. Tóquio: Towa, 2022.",
      "ARTRELADOS. Metrologia Têxtil no Bordado: Medidores Towa, Calibração Dinâmica e Padronização Industrial de Linhas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-018-memoria-interna-buffer-processamento-internal-memory-buffer",
    "code": "M-018",
    "term": "Memória Interna e Buffer de Processamento da Máquina (Internal Memory & CNC Buffer)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Eletrônica & Software",
    "grammarClass": "Substantivo feminino / Do latim 'memoria' (faculdade de lembrar) e do inglês 'buffer' (amortecedor de dados).",
    "origin": "Evolução dos módulos de memória RAM/Flash e microcontroladores CNC embarcados que substituíram as antigas fitas de papel perfurado e disquetes magnéticos por armazenamento digital de estado sólido.",
    "summary": "Módulo de memória eletrônica e processador da máquina que armazena as matrizes de bordado e pré-carrega as coordenadas de pontos em tempo real.",
    "definition": "A Memória Interna e Buffer de Processamento (Embroidery Machine Flash Memory & Real-Time CNC Data Buffer) é a arquitetura de armazenamento e processamento digital integrada à placa-mãe da máquina de bordar computadorizada. A memória interna permanente (Flash/EEPROM) armazena as matrizes carregadas pelo usuário (capacidade medida em centenas de milhares ou milhões de pontos / designs). Já o buffer de processamento (FIFO Buffer de RAM) é a área de memória volátil ultrarrápida onde as coordenadas dos próximos pontos a serem costurados são pré-carregadas e decodificadas milissegundos antes do envio aos motores dos eixos X e Y, garantindo que o bordado não sofra travamentos ou pausas mesmo em desenhos com milhões de pontos.",
    "technicalDetails": "Arquitetura digital e especificações do sistema de memória:\n• Tipos de Memória: Memória Não-Volátil (Flash/NAND) para armazenamento de arquivos .PES/.DST e Memória Volátil (SRAM/DRAM) para buffer de execução em tempo real;\n• Capacidade Típica: Varia de 2 milhões de pontos (máquinas domésticas padrão) a 50 milhões ou 100 milhões de pontos / 1.000 designs (máquinas industriais modernas);\n• Buffer Look-Ahead (Antecipação CNC): O processador analisa de 20 a 100 pontos à frente para calcular a rampa ideal de desaceleração do pantógrafo em curvas fechadas;\n• Recuperação por Queda de Energia (Power Resume Memory): Gravação contínua do índice do último ponto costurado na EEPROM; ao religar a máquina, ela retoma o bordado no ponto exato sem perder a sincronia;\n• Interface de Entrada: Portas USB 2.0/3.0, conexões de rede Ethernet (LAN), Wi-Fi integrado e barramentos seriais RS-232 industriais.",
    "howItWorks": [
      "1. A bordadeira insere o pen drive USB na porta da máquina de bordar.",
      "2. Seleciona o arquivo da matriz e clica em 'Salvar na Memória da Máquina'.",
      "3. O microcontrolador grava o arquivo na memória Flash interna permanente.",
      "4. Ao pressionar o botão Iniciar (Start), o sistema transfere o bloco inicial de pontos para o buffer de execução na memória RAM.",
      "5. O processador lê continuamente as coordenadas X/Y do buffer e envia os pulsos para os motores de passo a cada ciclo da agulha.",
      "6. Se houver uma queda repentina de energia, o microchip grava a coordenada exata do último ponto.",
      "7. Ao restabelecer a energia, a máquina pergunta se deseja continuar do ponto onde parou."
    ],
    "beginnerExplanation": "A memória interna da máquina de bordar é como a 'gaveta digital' e o 'cérebro pensante' dela! Sabe quando você coloca o pen drive na máquina e copia a matriz para dentro dela? Ela guarda o desenho nessa memória interna para você não precisar deixar o pen drive espetado o tempo todo. E o buffer é a memória rápida que vai lendo os passinhos da agulha um pouquinho antes de costurar, para a máquina não engasgar no meio do desenho. É graças a essa memória inteligente que, se faltar luz no meio do bordado, quando a energia volta a máquina lembra exatamente em qual ponto parou!",
    "applications": [
      "Armazenamento de matrizes de uso frequente (logotipos escolares, fontes, monogramas e molduras)",
      "Processamento fluido e ininterrupto de matrizes densas e complexas com centenas de milhares de pontos",
      "Recuperação automática de bordados após quedas acidentais de energia elétrica",
      "Gerenciamento de filas de produção em rede Wi-Fi/LAN em ateliês e indústrias"
    ],
    "commonErrors": [
      "Lotar a memória interna da máquina com centenas de matrizes antigas até a capacidade máxima (a máquina fica lenta para ligar e carregar menus)",
      "Puxar o pen drive USB da máquina enquanto ela está transferindo ou gravando o arquivo na memória (pode corromper os arquivos)",
      "Usar pen drives piratas de baixa qualidade ou com formatos incompatíveis (não formatados em FAT32)"
    ],
    "troubleshootingTips": [
      "Faça uma faxina semestral na memória interna da sua máquina: delete matrizes antigas que você já entregou para os clientes para manter o sistema ágil",
      "Formate seus pen drives sempre no formato padrão FAT32 no computador antes de salvar matrizes de bordado",
      "Se a máquina travar ao tentar abrir um arquivo: o arquivo pode estar corrompido; apague-o e regrave uma nova cópia do software"
    ],
    "dicaArtrelados": "Nunca use pen drives gigantescos (tipo 64GB ou 128GB) em máquinas de bordar que pedem pen drives menores! Use sempre pen drives de 4GB a 8GB formatados em FAT32 e com poucos arquivos em cada pasta. A sua máquina vai ler os arquivos na hora, sem lentidão e sem travar os menus!",
    "voceSabia": "As primeiras máquinas de bordar computadorizadas da década de 1980 tinham memória interna de apenas 64 Kilobytes (KB), o suficiente para armazenar apenas um pequeno desenho de 10.000 pontos por vez!",
    "practicalExercise": "No painel da sua máquina de bordar: acesse a pasta da memória interna, visualize quantas matrizes estão salvas nela e exclua desenhos de teste antigos para liberar espaço e deixar o carregamento mais veloz!",
    "quickSummary": "Módulos eletrônicos de memória Flash e buffer de RAM que armazenam os arquivos e pré-processam as coordenadas de pontos em tempo real.",
    "relatedTerms": [
      "Pen Drive USB",
      "Formato FAT32",
      "Queda de Energia (Power Resume)",
      "Coordenadas Cartesianas",
      "Placa-Mãe"
    ],
    "tags": [
      "m-018",
      "memoria interna",
      "buffer",
      "flash memory",
      "processamento",
      "fat32",
      "usb",
      "recuperacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MICROCHIP EMBEDDED SYSTEMS. Flash Memory Management and Real-Time CNC Data Buffering in Motion Controllers. Chandler: Microchip, 2022.",
      "ARTRELADOS. Eletrônica e Software de Máquinas de Bordar: Armazenamento, Memórias Flash, Interfaces USB e Gerenciamento de Arquivos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-019-matriz-vetorial-vs-matriz-pontos-expanded-stitch-file",
    "code": "M-019",
    "term": "Matriz Vetorial vs. Matriz de Pontos Puncionada (Vector Objects vs. Expanded Stitch Files)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Da ciência da computação gráfica e formatos de dados CAD/CAM.",
    "origin": "Evolução dos formatos de arquivos proprietários de software (.EMB, .EOF, .PES editável) em contraste com os formatos expandidos puramente de máquina (.DST, .EXP), originários dos antigos cartões binários.",
    "summary": "Diferença fundamental entre o arquivo vetorial editável (com objetos e propriedades) e o arquivo compilado de máquina (composto apenas por furos e coordenadas rígidas).",
    "definition": "A distinção entre Matriz Vetorial Baseada em Objetos (Object-Based Vector Design / Master File) e Matriz de Pontos Puncionada/Expandida (Expanded Stitch File / Machine Format) é um dos conceitos mais cruciais na digitalização profissional de bordados. O arquivo vetorial mestre (formatos nativos de softwares como .EMB do Wilcom, .EOF do Embird, .BE do Embrilliance) armazena formas geométricas inteligentes, nós de curvas bézier, tipos de pontos configuráveis, parâmetros dinâmicos de sob-ponto e compensação de repuxo. Já o arquivo de pontos puro (formatos como .DST da Tajima ou arquivos de máquina expandidos) armazena apenas uma lista estática de coordenadas (X, Y) e comandos de máquina; se for redimensionado, os pontos são simplesmente esticados ou comprimidos, sem recalcular a densidade original.",
    "technicalDetails": "Comparação técnica entre os dois paradigmas de arquivo:\n• Matriz Vetorial (.EMB, .EOF, .BE, .ART):\n  - Contém objetos inteligentes (Linha A, Satim Complexo, Tatami com Ângulos Dinâmicos);\n  - Permite redimensionar em ±50% ou mais com recálculo automático de quantidade de pontos e densidade milimétrica constante;\n  - Mantém a paleta de cores original e parâmetros de sob-pontos configuráveis;\n• Matriz de Pontos / Expandida (.DST, .EXP, .PES puro exportado):\n  - Contém apenas comandos brutos: PONTO (X, Y), SALTO (X, Y), CORTE, PARADA;\n  - Não contém informações sobre a forma do objeto; se diminuir em 30%, a máquina espremerá todos os pontos no mesmo espaço causando rigidez e quebra de agulhas;\n  - O formato .DST não armazena a paleta de cores interna (as cores exibidas dependem da configuração da máquina).",
    "howItWorks": [
      "1. O programador cria a matriz a partir do logotipo original desenhando objetos vetoriais no software de criação.",
      "2. Salva o 'Arquivo Mestre' no formato nativo editável (.EMB / .EOF).",
      "3. O software compila esses objetos vetoriais em coordenadas de agulhadas e gera o arquivo de máquina (.PES, .DST, .JEF).",
      "4. O arquivo de máquina é enviado para a máquina bordar.",
      "5. Se um dia o cliente pedir o mesmo desenho 30% maior para colocar nas costas de uma jaqueta: o programador abre o arquivo mestre .EMB original.",
      "6. Redimensiona o vetor com dois cliques: o software adiciona automaticamente milhares de novos pontos mantendo a densidade perfeita.",
      "7. Exporta um novo arquivo de máquina impecável, sem distorção e sem perda de qualidade."
    ],
    "beginnerExplanation": "Pense no arquivo vetorial como a 'massa de modelar fresca' e no arquivo de pontos de máquina como um 'boneco de gesso já assado no forno'! Quando você tem o arquivo de desenho no computador (o arquivo vetorial), você pode esticar, diminuir, mudar a cor e mudar o tipo de ponto como quiser que ele se adapta sozinho perfeitamente. Mas quando você salva o arquivo para a máquina (como .DST ou .PES), ele 'endurece' e vira apenas uma lista de furos fixos. Por isso, nunca delete o seu arquivo original do programa de computador: ele é o seu maior tesouro!",
    "applications": [
      "Gerenciamento e arquivo histórico de logotipos corporativos de clientes no ateliê",
      "Redimensionamento profissional de matrizes sem perda de densidade de pontos",
      "Alteração de sob-pontos para adaptar a mesma matriz de sarja para toalha de banho ou malha",
      "Padronização de arquivos para clientes que possuem marcas diferentes de máquinas"
    ],
    "commonErrors": [
      "Deletar o arquivo vetorial editável (.EMB/.EOF) e guardar apenas o arquivo de máquina (.DST/.PES)",
      "Tentar redimensionar um arquivo .DST em mais de 10% no painel da máquina de bordar",
      "Esperar que um arquivo .DST aberto no computador mostre as cores exatas que foram usadas na máquina"
    ],
    "troubleshootingTips": [
      "Guarde sempre duas versões de cada projeto: a pasta 'Mestres' (com arquivos .EMB/.EOF) e a pasta 'Máquinas' (com arquivos .PES/.DST/.JEF)",
      "Se você só tem o arquivo .DST e precisa aumentar o desenho: use ferramentas de reconhecimento de objetos (Convert Stitch to Object) no Wilcom ou Embird antes de redimensionar",
      "Ao enviar arquivos para clientes ou terceiros, forneça o formato específico de máquina que a bordadeira deles utiliza"
    ],
    "dicaArtrelados": "Organize as matrizes do seu ateliê como uma biblioteca profissional: crie uma pasta no computador com o nome do cliente e salve SEMPRE o arquivo editável original (.EMB ou .EOF) junto com o arquivo de máquina (.PES). Se o cliente voltar daqui a 2 anos pedindo o mesmo bordado em um tamanho diferente, você resolve em 30 segundos!",
    "voceSabia": "O formato .DST (Tajima) é o formato universal de máquina de bordar mais antigo e amplamente suportado do mundo, tendo sido criado na década de 1980 baseado no padrão de fita perfurada de 8 bits!",
    "practicalExercise": "No seu software: crie um círculo com ponto tatami, salve em .EMB e exporte em .DST. Abra o .DST de volta no programa e repare como ele não tem mais as propriedades de objeto editável, apenas milhares de pontinhos individuais!",
    "quickSummary": "Matriz vetorial é o arquivo mestre inteligente e editável; matriz de pontos é a compilação estática de coordenadas executada pela máquina.",
    "relatedTerms": [
      "Formato DST",
      "Formato PES",
      "Formato EMB",
      "Densidade de Ponto",
      "Compilação de Pontos"
    ],
    "tags": [
      "m-019",
      "matriz vetorial",
      "arquivo de pontos",
      "expanded",
      "dst",
      "emb",
      "pes",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Vector Object Architecture vs. Expanded Stitch Files. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Bíblia dos Arquivos Digitais: Formatos Vetoriais, DST, PES, Conversões e Preservação de Matrizes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-020-multi-bandeira-bastidor-multiplos-campos-multi-position-hoop",
    "code": "M-020",
    "term": "Multi-Bandeira e Bastidor de Múltiplos Campos (Multi-Position & Multi-Window Hoops)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino / Do latim 'multi' (muitos) e 'bandaria' (faixa/campo).",
    "origin": "Solução mecânica desenvolvida para expandir a área útil de bordado em máquinas domésticas de braço curto, permitindo bordar desenhos longos divididos em etapas sem desencarcerar o tecido do bastidor.",
    "summary": "Bastidor especial longo com múltiplos pontos de engate mecânico que permite bordar matrizes divididas maiores que o campo nativo da máquina.",
    "definition": "O Bastidor Multi-Bandeira ou Bastidor de Múltiplas Posições (Multi-Position Hoop / Repositionable Multi-Window Hoop / Bastidor de Estágios) é um acessório de fixação projetado especificamente para máquinas de bordar domésticas que possuem limitações de deslocamento físico do pantógrafo (como campos nativos de 10x10 cm ou 13x18 cm). O bastidor possui uma estrutura externa longa e múltiplos encaixes ou travas laterais (posições A, B e C). A matriz de bordado é previamente dividida no software em duas ou três partes conectadas; após a máquina bordar a primeira etapa, o operador desencaixa o bastidor do pantógrafo e o reencaixa no estágio seguinte, sem soltar o tecido do aro.",
    "technicalDetails": "Engenharia e operação do bastidor multi-bandeira:\n• Estágios Mecânicos: Geralmente 2 ou 3 posições de engate com travas de clique rápido;\n• Área Total Expandida Típica: Converte uma máquina de 10x10 cm para uma área contínua de 10x17 cm ou 13x18 cm para 13x30 cm;\n• Divisão no Software (Multi-Hooping / Split Design): O software insere marcas de alinhamento e divide os blocos de pontos respeitando as fronteiras de cada campo mecânico;\n• Pontos de Conexão: Uso de pontos corridos de casamento ou cruz de registro para assegurar que a emenda entre os estágios fique invisível;\n• Preservação da Tensão Têxtil: Como o tecido permanece preso no mesmo bastidor durante todos os estágios, o risco de desalinhamento por desencarceramento é eliminado.",
    "howItWorks": [
      "1. A bordadeira cria uma matriz longa (ex: um nome composto ou uma barra de toalha de 30 cm) no software de bordado.",
      "2. O software divide a matriz em duas partes (Parte 1 e Parte 2) e salva os arquivos com marcas de registro.",
      "3. A bordadeira prende o tecido no bastidor multi-bandeira apenas uma vez.",
      "4. Encaixa o bastidor no pantógrafo da máquina na posição 'A' (superior).",
      "5. Borda a Parte 1 do desenho.",
      "6. A máquina para: a bordadeira solta a trava mecânica do bastidor e o desloca para a posição 'B' (inferior), engatando no novo pino.",
      "7. Carrega a Parte 2 na máquina e dá o Start: o bordado se conecta perfeitamente na emenda formando uma única barra longa contínua."
    ],
    "beginnerExplanation": "O bastidor multi-bandeira (ou bastidor de 2 ou 3 estágios) é como um 'truque de mágica' para quem tem uma máquina com campo de bordado menor (como a de 13x18 cm ou 10x10 cm)! Sabe quando você quer bordar um nome bem comprido em uma toalha de banho ou uma frase longa, mas a sua máquina não tem espaço? Esse bastidor é comprido e tem 2 ou 3 'trilhos' de encaixe: a máquina borda a primeira metade do nome, você só empurra o bastidor para o próximo clique sem tirar o pano de dentro, e a máquina borda a segunda metade certinho! É maravilhoso!",
    "applications": [
      "Bordado de barras longas contínuas em toalhas de banho e lençóis de casal",
      "Frases compridas e nomes compostos em faixas de maternidade e panos de prato",
      "Composições florais estendidas e arabescos em barras de vestidos",
      "Maximização da capacidade de produção em máquinas de bordar domésticas de pequeno porte"
    ],
    "commonErrors": [
      "Desprender o tecido do bastidor entre uma etapa e outra (o tecido nunca mais volta para a posição exata)",
      "Inverter a ordem dos arquivos (bordar a Parte 2 antes da Parte 1)",
      "Não conferir o alinhamento da emenda antes de iniciar a segunda parte do bordado"
    ],
    "troubleshootingTips": [
      "Use entretela rasgável ou de corte bem esticada para que o tecido não ceda nas bordas durante a movimentação entre estágios",
      "Ao dividir o desenho no software: posicione a linha de corte em um espaço em branco entre duas letras ou folhas para a emenda ficar 100% invisível",
      "Faça o teste de traçado (Trace) antes de bordar cada uma das etapas para garantir que o cabeçote não bata nas bordas"
    ],
    "dicaArtrelados": "Para fazer emendas perfeitas com o bastidor de múltiplos estágios: nunca corte uma letra ao meio na divisão do software! Divida a matriz sempre no vão entre duas palavras ou entre um ramo de folhas. A emenda fica completamente imperceptível a olho nu!",
    "voceSabia": "Antes da criação dos bastidores multi-bandeira, para bordar uma barra de 30 cm em uma máquina de 10 cm a bordadeira precisava tirar e prender a toalha no bastidor 3 vezes, gastando mais de 15 minutos em marcações manuais para cada peça!",
    "practicalExercise": "No seu software de bordados: crie um texto longo com 25 cm, use a ferramenta 'Dividir Bastidor' (Multi-Hoop) configurada para bastidor de 2 estágios, e observe como o programa cria automaticamente os dois arquivos numerados!",
    "quickSummary": "Bastidor longo com múltiplos pontos de engate mecânico que permite bordar desenhos grandes divididos em etapas contínuas na mesma montagem.",
    "relatedTerms": [
      "Divisão de Matriz (Split Design)",
      "Marcas de Registro",
      "Área de Bordado",
      "Bastidor 13x18",
      "Multi-Hooping"
    ],
    "tags": [
      "m-020",
      "multi-bandeira",
      "multi-position hoop",
      "bastidor de estagios",
      "divisao de matriz",
      "emenda",
      "toalhas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES. Multi-Position Hooping Techniques and Design Splitting Guidelines. Nagoia: Brother, 2022.",
      "ARTRELADOS. Maximizando o Campo de Bordado: Bastidores Multi-Bandeira, Divisão Perfeita de Matrizes e Emendas Invisíveis. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-021-minky-plush-tecido-soft-ultramacio-high-pile-fleece",
    "code": "M-021",
    "term": "Minky, Plush e Tecidos Soft Ultramacios (Minky, Cuddle Plush & High-Pile Fabrics)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Do inglês 'mink' (visom/pele macia) e do francês 'peluche' (felpudo).",
    "origin": "Tecidos sintéticos de microfibra de poliéster 100% desenvolvidos na década de 1990 para reproduzir a maciez extrema e o toque aveludado de peles nobres, consagrando-se como padrão global em naninhas e enxovais de bebês.",
    "summary": "Tecido de microfibra extremamente macio, aveludado e com pelos altos ou relevos (Minky Dots), que exige estabilização firme, agulha Ball Point e plástico hidrossolúvel superior.",
    "definition": "O Minky (Cuddle Fleece / Plush / Tecido Soft Ultramacio / Velboa / Pele de Pêssego) é um tecido sintético de alta tecnologia produzido com microfibras de poliéster cardadas e tosquiadas, caracterizado por sua maciez extrema, caimento fluido e pelos superficiais de altura variável (de 1,5 mm a 5 mm). Apresenta-se em versões lisas, texturizadas com bolinhas em relevo térmico (Minky Dots) ou com efeito de rosas/escamas. No bordado computadorizado, o Minky é amplamente utilizado em naninhas de bebê, mantas e bichinhos de pelúcia, mas apresenta dois desafios técnicos: elasticidade unilateral acentuada e pelos densos que engolem os pontos, exigindo estabilizador de corte no verso e filme solúvel no topo.",
    "technicalDetails": "Propriedades físicas e parametrização para bordar em Minky:\n• Composição: 100% Poliéster virgem de filamentos microscópicos;\n• Altura do Pelo (Pile Height): 1,5 mm a 4,0 mm;\n• Estabilização do Verso: Entretela de corte resistente (Cut-Away 60 g/m² a 80 g/m²) ou entretela rasgável pesada aplicada com cola spray temporária;\n• Película de Superfície Obrigatória (Topping): Filme plástico hidrossolúvel de 20 a 35 micras na face superior;\n• Agulha Indicada: Agulha de Ponta Bola Fina (Ball Point / SES calibre 75/11 ou 80/12);\n• Compensação de Repuxo: Aumentar no software para 0,40 mm a 0,45 mm para evitar que as colunas de satim se estreitem sob a pressão do pelo;\n• Proibição Absoluta de Ferro Quente: O poliéster do Minky derrete com facilidade e o relevo das bolinhas (dots) é destruído se receber calor direto de ferro de passar.",
    "howItWorks": [
      "1. A bordadeira aplica adesivo spray temporário sobre a entretela de corte.",
      "2. Assenta o verso do tecido Minky sobre a entretela, alisando com a mão sem esticar.",
      "3. Cobre a frente com pelos do Minky com uma folha de plástico solúvel (hidrossolúvel).",
      "4. Encaixa o conjunto no bastidor com aperto suave do parafuso (ou monta apenas a entretela e flutua o Minky).",
      "5. A máquina de bordar executa a matriz: o plástico superior impede que os fios afundem no pelo macio.",
      "6. Ao finalizar, puxa-se o excesso de plástico solúvel e removem-se os cantinhos com vaporizador térmico suave.",
      "7. O bordado fica em relevo deslumbrante, nítido e com o toque macio intacto."
    ],
    "beginnerExplanation": "O Minky (ou Plush) é aquele tecido fofinho e quentinho que parece um 'abraço de urso', super usado para fazer naninhas de bebê, mantas fofas e bichinhos de pelúcia! Como ele tem pelinhos macios, se você tentar bordar direto nele sem colocar nada por cima, a linha do bordado vai sumir dentro dos pelos como se tivesse caído na grama alta. Para bordar Minky com perfeição, você só precisa de duas coisas: colocar um plastiquinho solúvel por cima antes de bordar e NUNCA passar ferro quente direto nele (porque o ferro queima e derrete os pelinhos)!",
    "applications": [
      "Naninhas de bebê, mantas de berço e almofadas térmicas de maternidade",
      "Bichinhos de pelúcia e bonecas de pano feitos no bastidor (In The Hoop Plushies)",
      "Casacos infantis, golas de inverno e pantufas fofas personalizadas",
      "Capas de almofada com monogramas em relevo para quartos de bebê"
    ],
    "commonErrors": [
      "Bordar Minky sem plástico solúvel por cima (o bordado fica todo afundado e invisível)",
      "Passar o ferro de passar roupa quente em cima do Minky (derrete os pelos e apaga as bolinhas de relevo)",
      "Esticar o tecido ao fechar o bastidor (deforma a naninha e cria rugas irreversíveis)"
    ],
    "troubleshootingTips": [
      "Para tirar os restos de plástico solúvel do Minky: use um borrifador com água morna ou vaporize com o ferro a 10 cm de distância sem encostar",
      "Monte o Minky no bastidor usando o método da flutuação com cola spray para não deixar marcas redondas de aro nos pelos",
      "Em letras pequenas bordadas em Minky: use matrizes com sob-ponto em grade (Tatami Underlay) para prensar os pelos antes do ponto cheio"
    ],
    "dicaArtrelados": "Para bordar naninhas de Minky sem amassar as bolinhas e sem deixar marca de bastidor: prenda somente a entretela no bastidor, passe cola temporária, cole o Minky e coloque o plástico solúvel por cima! A peça borda com acabamento de loja de brinquedos importada!",
    "voceSabia": "O tecido Minky foi apelidado dessa forma em homenagem à pele do visom ('mink' em inglês), um pequeno mamífero famoso na história da moda pelo toque aveludado e macio da sua pelagem!",
    "practicalExercise": "Pegue um retalho de Minky com bolinhas: monte com entretela e plástico solúvel por cima, borde o rostinho de um ursinho e retire o plástico solúvel com água: sinta como os pontos ficam altos, brilhantes e destacados!",
    "quickSummary": "Tecido sintético de microfibra ultramacio e peludo que exige filme solúvel superior e proteção total contra calor direto de ferro.",
    "relatedTerms": [
      "Naninhas",
      "Filme Hidrossolúvel (Topping)",
      "Flutuação (Float)",
      "Plush",
      "In The Hoop (ITH)"
    ],
    "tags": [
      "m-021",
      "minky",
      "plush",
      "soft",
      "naninha",
      "bebe",
      "topping",
      "hidrossoluvel",
      "fleece",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BABY APPAREL & TOY TEXTILE COUNCIL. Safety, Softness and Machine Embroidery Standards for High-Pile Fabrics. Washington: BATTC, 2022.",
      "ARTRELADOS. O Universo Maternidade: Minky, Plush, Fraldas e Técnicas de Bordado em Pelos Altos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-022-molde-ponto-cruz-digital-cross-stitch-grid",
    "code": "M-022",
    "term": "Molde de Ponto Cruz Digital (Digital Cross-Stitch Grid & Chart Digitizing)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do latim 'modulus' (medida/molde) e da geometria em malha ortogonal.",
    "origin": "Transposição digital computadorizada da mais antiga técnica de bordado manual da humanidade (praticada desde a Antiguidade em tecidos etamine e canhoneira) para matrizes executadas automaticamente por máquinas CNC.",
    "summary": "Digitalização geométrica que converte gráficos quadriculados e esquemas de ponto cruz em trajetos contínuos de pontos em 'X' na máquina de bordar.",
    "definition": "O Molde de Ponto Cruz Digital (Machine Cross-Stitch Digitizing / Digital Cross-Stitch Grid & Chart) é o módulo especializado de programação de bordado que reproduz com fidelidade estética absoluta o aspecto tradicional e rústico do bordado manual em ponto cruz. O software divide a área de desenho em uma grade ortogonal milimétrica (ex: 14 a 18 cruzamentos por polegada / 1,5 mm a 2,5 mm por ponto em X) e calcula um trajeto cinemático contínuo que costura cada 'X' em duas passadas cruzadas (ou cruz plena com 4 fios), conectando as células vizinhas por pequenos pontos de salto ou corridos ocultos.",
    "technicalDetails": "Geometria e parâmetros do ponto cruz eletrônico:\n• Contagem de Malha (Grid Count): Equivalente às contagens de tecido etamine manual (10, 14, 16 ou 18 pontos por polegada / 1,4 mm a 2,5 mm de tamanho de cruz);\n• Tipos de Cruz: Ponto Cruz Simples (2 passadas), Ponto Cruz Pleno Duplo (4 passadas para linha grossa encorpada), Ponto Três Quartos (3/4 stitch) e Ponto Meia Cruz (Half Stitch);\n• Roteamento Automático (Smart Routing): O algoritmo ordena as cruzes para minimizar cruzamentos no verso e reduzir cortes de linha entre cores;\n• Tecidos de Aplicação: Pode ser bordado em tecidos lisos normais (como linho, tricoline, sarja, toalhas de lavabo) simulando o aspecto de tecido etamine sem a necessidade do tecido furado;\n• Linhas Indicadas: Linha de poliéster 40wt tradicional com acabamento fosco (tipo algodão/Frosted Matt) para simular meadas manuais.",
    "howItWorks": [
      "1. A bordadeira importa um gráfico quadriculado de ponto cruz clássico (gráfico em papel ou arquivo de imagem) para o módulo de ponto cruz do software (ex: Wilcom Cross Stitch / Embird Cross Stitch).",
      "2. O software mapeia cada quadradinho colorido para uma célula da grade digital.",
      "3. A bordadeira escolhe o tamanho do ponto em X (ex: 2,0 mm) e o número de passadas (dupla ou simples).",
      "4. O programa gera automaticamente as coordenadas dos 'X' interligados e exporta o arquivo .PES ou .DST.",
      "5. A máquina de bordar é abastecida com as cores e costura a matriz sobre uma toalha de lavabo de algodão liso.",
      "6. A agulha costura centenas de cruzinhas perfeitas em poucos minutos.",
      "7. O resultado é um bordado que parece ter levado semanas de ponto cruz manual, feito com velocidade e perfeição industrial."
    ],
    "beginnerExplanation": "Você ama o visual delicado e aconchegante do ponto cruz tradicional (aquele que as nossas avós faziam à mão furinho por furinho no tecido etamine), mas não tem semanas para fazer tudo na mão? Com o ponto cruz digital, o computador transforma o gráfico de quadradinhos em matriz para a sua máquina de bordar! A máquina vai costurando cada 'X' perfeitinho, um do lado do outro, em poucos minutos. Você pode bordar toalhinhas de lavabo, barrados e quadrinhos fofos que parecem feitos à mão com total perfeição!",
    "applications": [
      "Toalhas de lavabo e panos de copa com motivos natalinos, florais e temas de cozinha",
      "Enxovais rústicos em linho com motivos geométricos e temas tradicionais europeus",
      "Quadros decorativos no bastidor com citações, versículos e alfabetos vintage",
      "Artigos religiosos, toalhas de batizado e bordados folclóricos tradicionais"
    ],
    "commonErrors": [
      "Usar pontos em 'X' muito pequenos (menores que 1,2 mm) em tecidos grossos (as linhas se misturam e perdem a forma de cruz)",
      "Bordar ponto cruz em toalha felpuda sem filme solúvel por cima (as cruzinhas somem na felpa da toalha)",
      "Utilizar densidade de cruz dupla em linhas grossas gerando acúmulo excessivo nos cruzamentos"
    ],
    "troubleshootingTips": [
      "Para obter um visual idêntico ao bordado à mão: utilize linhas de poliéster com acabamento fosco (sem brilho acetinado)",
      "Em tecidos lisos (linho ou tricoline): use entretela rasgável média para sustentar a grade sem enrugamento",
      "Regule a tensão da linha ligeiramente aliviada para que o 'X' assente macio e com relevo no tecido"
    ],
    "dicaArtrelados": "Quer vender toalhas de lavabo com ar de herança de família? Use o módulo de ponto cruz digital com linha fosca cor crua ou tons pastel sobre linho puro! Os clientes se apaixonam pelo visual artesanal e pagam muito mais por esse estilo retrô!",
    "voceSabia": "O ponto cruz é a forma de bordado mais antiga já documentada pela arqueologia, com vestígios encontrados em tumbas no Antigo Egito e na China que datam de mais de 5.000 anos a.C.!",
    "practicalExercise": "No seu software de bordado, abra a ferramenta de Ponto Cruz, desenhe um pequeno coração em grade de 2,0 mm e borde em uma barra de pano de prato: compare a perfeição geométrica dos cruzamentos!",
    "quickSummary": "Digitalização e execução eletrônica de desenhos em grade quadriculada de ponto cruz tradicional com velocidade e precisão CNC.",
    "relatedTerms": [
      "Etamine",
      "Ponto Cruz Manual",
      "Linha Fosca",
      "Grade Digital (Grid)",
      "Ponto em X"
    ],
    "tags": [
      "m-022",
      "molde ponto cruz",
      "ponto cruz digital",
      "cross-stitch",
      "etamine",
      "grafico",
      "vintage",
      "linho",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HAND EMBROIDERY HERITAGE GUILD. Cross-Stitch History, Grid Mapping and Digital Transposition. Londres: HEHG, 2021.",
      "ARTRELADOS. Ponto Cruz Digital na Máquina de Bordar: Parâmetros de Grade, Linhas Especiais e Resgate da Arte Tradicional. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-023-mola-conica-discos-tensores-superiores-conical-tension-spring",
    "code": "M-023",
    "term": "Mola Cônica dos Discos Tensores Superiores (Tension Conical Compression Spring)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica e elasticidade linear progressiva.",
    "origin": "Mola mecânica em espiral cônica de compressão projetada para oferecer uma força de aperto progressiva, linear e sem travamentos sobre os pratos metálicos de fricção de linha superior em máquinas industriais.",
    "summary": "Mola em formato de cone instalada no eixo dos botões tensores superiores que comprime os pratos de aço contra a linha com resposta milimétrica.",
    "definition": "A Mola Cônica dos Discos Tensores Superiores (Upper Thread Tension Conical Compression Spring / Mola do Botão Tensor) é a mola helicoidal de perfil cônico montada no eixo central do conjunto de tensão superior do cabeçote da máquina de bordar. A geometria cônica é adotada intencionalmente pela engenharia porque permite que as espirais da mola se encaixem umas dentro das outras durante a compressão total, proporcionando um curso mais longo e uma curva de resistência mecânica perfeitamente linear e previsível. É a força dessa mola, regulada pelo botão giratório numerado, que pressiona os dois pratos tensores de aço polido contra a linha de bordar.",
    "technicalDetails": "Propriedades físicas e mecânica da mola cônica de tensão:\n• Formato Geométrico: Espiral cônica truncada de passo variável em aço-mola fosfatizado ou niquelado;\n• Vantagem Estrutural: Altura sólida mínima (as espiras colapsam no mesmo plano sem bater ponta com ponta);\n• Resposta Linear de Tensão: Cada quarto de volta no botão tensor resulta em um acréscimo proporcional de força de atrito (aproximadamente 10 a 15 gf por clique graduado);\n• Fadiga Mecânica: Com o uso prolongado de anos em alta velocidade, a mola pode perder sua constante elástica (ficando 'cansada'), exigindo maior aperto do botão para obter a mesma tensão;\n• Interação com Solenoide de Alívio: Em máquinas industriais, quando o calcador sobe ou a máquina executa um salto longo, um pino empurra a mola aliviando os discos instantaneamente para a linha correr livre.",
    "howItWorks": [
      "1. A bordadeira gira o botão frontal de tensão superior para o número desejado (ex: posição 4 ou 130 gf).",
      "2. O botão rosqueado comprime a mola cônica de aço.",
      "3. A base larga da mola pressiona o prato tensor metálico externo contra o prato interno.",
      "4. A linha de bordar passa entre os dois pratos polidos e sofre a fricção controlada.",
      "5. A elasticidade contínua da mola absorve pequenas variações de calibre da linha sem travar.",
      "6. Durante o bordado a 1.000 PPM, a mola mantém a pressão constante.",
      "7. Os pontos são formados no tecido com equilíbrio e tensão rigorosamente estáveis."
    ],
    "beginnerExplanation": "A mola cônica é aquela molinha em formato de 'casquinha de sorvete' que fica escondida atrás do botão giratório de tensão da sua máquina de bordar! Quando você gira o botão para o número 4 ou 5 para apertar a linha, você está na verdade esmagando essa molinha contra os pratinhos de metal. Como ela tem formato de cone, ela aperta a linha de forma suave e perfeita, sem dar trancos. Se essa molinha enferrujar ou ficar cansada, o botão de tensão perde a força e a linha fica sempre frouxa, não importa o quanto você aperte!",
    "applications": [
      "Controle de pressão de fricção nos discos tensores superiores de máquinas domésticas e industriais",
      "Alívio sincronizado de tensão durante saltos longos (Jumps) e cortes de linha",
      "Manutenção da estabilidade de tensão em rotações elevadas de 800 a 1.200 PPM",
      "Calibração metrológica de cabeçotes com medidor digital dinamômetro"
    ],
    "commonErrors": [
      "Montar a mola cônica invertida após desmontar o tensor para limpeza (a base estreita deve ficar voltada para o botão)",
      "Puxar ou esticar a mola com alicate para tentar 'aumentar a força' (deforma a geometria cônica e estraga a calibração)",
      "Deixar óleo ou graxa pesada na mola e nos discos tensores (o óleo atrai poeira e faz a linha escorregar sem atrito)"
    ],
    "troubleshootingTips": [
      "Se você precisa colocar o botão de tensão no número máximo (número 8 ou 9) para a linha parar de ficar frouxa: a mola cônica está cansada e deve ser trocada",
      "Ao fazer a limpeza dos tensores superiores: retire o botão, limpe os discos com pano seco com álcool isopropílico e recoloque a mola cônica na posição correta",
      "Verifique se o pino central de alívio do tensor não está emperrado empurrando a mola para fora"
    ],
    "dicaArtrelados": "Nunca use óleo nos discos tensores e na mola de tensão superior! Os discos de tensão precisam estar 100% secos e espelhados. Se entrar óleo ali, a linha desliza como sabão e você perde o controle da tensão do bordado!",
    "voceSabia": "As molas cônicas são utilizadas na engenharia aeroespacial e em armas de fogo de precisão justamente pela sua capacidade incomparável de colapsar ocupando quase zero de espaço quando totalmente comprimidas!",
    "practicalExercise": "Olhe para o conjunto de tensores da sua máquina (ou de uma máquina industrial): observe o botão giratório numerado e imagine a mola cônica interna comprimindo os pratinhos de metal toda vez que você ajusta o número!",
    "quickSummary": "Mola helicoidal em formato de cone que transmite pressão linear progressiva sobre os discos tensores superiores de linha.",
    "relatedTerms": [
      "Discos Tensores",
      "Tensão Superior",
      "Alívio de Tensão",
      "Botão Tensor",
      "Mola Estica-Fio"
    ],
    "tags": [
      "m-023",
      "mola conica",
      "discos tensores",
      "tensao superior",
      "mola de compressao",
      "mecanica",
      "calibracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICAN SOCIETY OF MECHANICAL ENGINEERS. Precision Conical Spring Dynamics and Linear Compression Systems. Nova York: ASME, 2022.",
      "ARTRELADOS. Desmontagem, Limpeza e Ajuste Fino dos Tensores Superiores: Discos, Molas Cônicas e Alívio Automático. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-024-micro-letras-fontes-pequenas-small-text-digitizing",
    "code": "M-024",
    "term": "Micro-Letras e Fontes Pequenas (Micro-Lettering & Small Text Digitizing)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Do grego 'mikros' (pequeno) e do latim 'littera' (letra).",
    "origin": "Técnica de puncionamento de extrema precisão desenvolvida para bordar etiquetas corporativas, patentes militares, endereços de sites e pequenos nomes de jaleco com altura inferior a 5 mm.",
    "summary": "Técnica especializada de digitalização e execução de textos minúsculos (3 mm a 5 mm de altura) com compensações, linha fina 60wt e agulha 65/9.",
    "definition": "A técnica de Micro-Letras no Bordado Eletrônico (Micro-Lettering / Small Letter Digitizing / Fontes de Alta Definição) compreende as diretrizes avançadas de programação e configuração mecânica necessárias para tornar legíveis textos bordados com altura entre 3,0 mm e 5,5 mm. Letras convencionais nessa escala sofrem com o fechamento dos orifícios internos (como o centro das letras 'e', 'a', 'o', 'B') devido ao diâmetro físico da agulha e da linha padrão 40wt. Para superar esse limite físico, a digitalização de micro-letras exige: colunas estreitas de ponto cheio simples, ausência ou redução drástica de sob-pontos volumosos (Center Walk leve), espaçamento aumentado entre caracteres e uso de agulha ultrafina (65/9 ou 70/10) com linha fina 60wt ou 75wt.",
    "technicalDetails": "Diretrizes e parâmetros para micro-letras perfeitas:\n• Altura de Texto: 3,0 mm a 6,0 mm (abaixo de 3 mm recomenda-se ponto corrido simples de passada única);\n• Linha Recomendada: Linha de bordar fina calibre 60wt ou 75wt (diâmetro 30% menor que a linha padrão 40wt);\n• Agulha Indicada: Agulha Microtex ou Ponta Bola Fina calibre 65/9 ou 70/10;\n• Densidade de Ponto: Reduzir a densidade para 0,45 mm a 0,50 mm (espaçamento mais aberto para não acumular linha no mesmo ponto);\n• Sob-pontos (Underlay): Usar apenas Ponto Corrido Central (Center Walk) ou NENHUM sob-ponto em hastes menores que 1 mm de largura;\n• Abertura de Caracteres (Kerning & Open Counters): Aumentar o espaçamento entre letras em 10% a 15% e alargar manualmente as aberturas internas de letras redondas no software;\n• Nós de Arremate: Usar micro-arremates de travamento (Micro Lock Stitches de 3 pontos curtos de 0,6 mm) para não criar 'bolotas' de linha no início e final das letras.",
    "howItWorks": [
      "1. O programador digita o texto no software de bordado usando uma fonte puncionada especificamente para micro-letras (Small Font / Micro Script).",
      "2. Ajusta a altura da letra para 4,5 mm e aumenta o espaçamento entre as letras.",
      "3. Configura a densidade para 0,45 mm e ativa o sob-ponto Center Walk leve.",
      "4. Instala na máquina de bordar uma agulha nova Microtex 65/9 e passa a linha fina de poliéster 60wt na cor desejada.",
      "5. Ajusta a tensão da máquina com leve alívio para a linha fina correr solta.",
      "6. A máquina borda o texto com velocidade moderada (500 a 600 PPM).",
      "7. As letrinhas minúsculas são formadas com nitidez de alta resolução, legíveis a olho nu sem nenhum borrão."
    ],
    "beginnerExplanation": "Bordar letrinhas minúsculas (como o endereço de um site www... ou um nome pequeno de médico em jaleco) é um dos maiores desafios do bordado! Se você usar a linha e a agulha normais, a agulha fura tantas vezes no mesmo espacinho que a letrinha vira uma 'bolinha de linha amassada' e ninguém consegue ler. O segredo dos profissionais para bordar letras pequenininhas com perfeição é usar uma linha mais fininha (linha 60wt) com uma agulha fina 65/9 e usar uma fonte desenhada no computador própria para letras pequenas. As letras ficam tão limpinhas que parecem impressas a laser!",
    "applications": [
      "Nomes, especialidades e números de CRM em jalecos médicos e scrubs hospitalares",
      "Endereços de websites, e-mails e slogans em camisas corporativas e bonés",
      "Patentes, tipagens sanguíneas e distintivos militares em fardamentos táticos",
      "Etiquetas internas de marca em peças de alta-costura e moda íntima"
    ],
    "commonErrors": [
      "Tentar bordar letras de 3 mm usando fontes cursivas normais desenhadas para 20 mm com linha grossa 40wt",
      "Colocar sob-ponto duplo zigue-zague em letras pequenas (cria um morro de linha dura)",
      "Bordar micro-letras em toalhas atoalhadas felpudas sem filme plástico solúvel superior"
    ],
    "troubleshootingTips": [
      "Se as letras 'e' e 'o' estão saindo completamente fechadas e cheias de linha: abra o software e aumente a abertura central do desenho da letra",
      "Substitua a linha de topo por linha fina calibre 60wt: a diferença de nitidez em letras abaixo de 5 mm é astronômica",
      "Diminua a velocidade da máquina para 550 PPM para garantir que cada micro-ponto caia no lugar exato sem oscilações"
    ],
    "dicaArtrelados": "Vai bordar o nome do médico e o CRM no bolso do jaleco? Tenha sempre no seu ateliê um cone de linha de poliéster preta e branca 60wt e uma agulha 65/9! Suas letrinhas de jaleco vão ficar tão nítidas e elegantes que os médicos da sua cidade só vão querer encomendar com você!",
    "voceSabia": "Uma letra bordada de 4 mm de altura possui hastes com menos de 0,8 mm de largura; isso significa que cabem apenas 4 a 5 fios de linha em toda a largura da coluna da letra!",
    "practicalExercise": "No seu software, selecione uma fonte especial para micro-letras (Small Font), digite 'Dr. Marcelo - CRM 12345' com altura de 4,5 mm e borde em um pedaço de tecido sarja usando agulha fina: confira a leitura perfeita com uma lupa!",
    "quickSummary": "Técnica avançada de digitalização e costura de textos minúsculos com fontes abertas, sob-pontos leves, agulha fina e linha 60wt.",
    "relatedTerms": [
      "Linha 60wt",
      "Agulha Microtex",
      "Monograma",
      "Ponto Satim",
      "Underlay Center Walk"
    ],
    "tags": [
      "m-024",
      "micro-letras",
      "fontes pequenas",
      "small lettering",
      "jaleco",
      "crm",
      "linha 60wt",
      "nitidez",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Micro-Lettering Mastery, Small Font Optimization and Thread Caliber Selection. Sydney: Wilcom, 2022.",
      "ARTRELADOS. O Segredo das Micro-Letras Perfeitas: Linhas 60wt, Agulhas Finais, Fontes Especiais e Legibilidade Máxima em Jalecos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-025-mapeamento-cores-paleta-fios-thread-chart-color-mapping",
    "code": "M-025",
    "term": "Mapeamento de Cores e Paleta de Fios (Color Mapping & Thread Chart Palette)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do latim 'mappa' (toalha/carta geográfica) e 'color' (cor).",
    "origin": "Sistema cromático computacional que correlaciona os códigos de cores digitais RGB/CMYK do software de criação às tabelas numéricas oficiais de cones de linhas dos principais fabricantes globais de fios de bordado.",
    "summary": "Processo de associar os tons visuais da matriz no computador aos códigos e números reais das linhas existentes no estoque do ateliê.",
    "definition": "O Mapeamento de Cores e Gerenciamento de Paletas de Fios (Thread Color Mapping / Thread Chart Database / Conversão Cromática) é o recurso presente nos softwares de bordado que vincula cada objeto desenhado a uma marca e código numérico específico de linha de bordado (como Madeira, Polyneon, Isacord, Lumina Setta, Polycron, Zenit, Sulky ou Marathon). Como cada marca possui sua própria tabela de tingimento com centenas de códigos proprietários (ex: 'Madeira Polyneon 1801 - Branco Puro' ou 'Setta 5122 - Azul Marinho Real'), o mapeamento garante que a prévia 3D na tela reproduza a cor real do fio e emita a 'Ficha de Produção' (Color Sequence Sheet) correta para o operador abastecer a máquina.",
    "technicalDetails": "Arquitetura e funcionalidade dos gráficos de cores no bordado:\n• Bibliotecas Integradas: O software de bordado armazena bancos de dados relacionais com os valores de cor LAB/RGB medidos por espectrofotômetro em cada fio físico dos fabricantes;\n• Conversão Automática de Marcas: Permite converter uma matriz inteira da tabela Madeira para a tabela Setta/Polycron em um clique, escolhendo a cor mais próxima por fórmula de proximidade Delta E (CIE76/CIE2000);\n• Folha de Troca de Cores (Production Sheet): Relatório impresso ou em PDF que lista a ordem cronológica de paradas da máquina com código do fabricante, nome da cor e metragem estimada de linha gasta por bloco;\n• Limitação do Formato DST: O formato .DST não contém a tabela de cores original; a máquina exibe cores genéricas pré-definidas na memória, exigindo o acompanhamento visual da folha de produção.",
    "howItWorks": [
      "1. A bordadeira seleciona a marca de linhas que ela tem no ateliê (ex: Linhas Setta / Lumina) como paleta padrão no software.",
      "2. Ao colorir o desenho, clica nas cores reais dos cones que possui na prateleira.",
      "3. O software exibe a simulação na tela com o brilho e tom exatos daquele cone físico.",
      "4. Ao finalizar a matriz, o programa gera a ficha de produção com a sequência de cores numerada (1: Amarelo 5002; 2: Verde 5104; 3: Preto 5000).",
      "5. A bordadeira leva a ficha para a máquina e organiza os cones de linha na ordem da lista.",
      "6. A máquina executa as paradas e a bordadeira troca as cores seguindo a ficha sem pestanejar.",
      "7. A peça bordada sai com a harmonia de cores rigorosamente idêntica ao aprovado pelo cliente."
    ],
    "beginnerExplanation": "O mapeamento de cores é como ter o 'catálogo de tintas' das suas linhas de bordar dentro do computador! Em vez de usar um azul qualquer na tela e depois ficar tentando adivinhar qual cone da sua prateleira é o mais parecido, você diz para o programa exatamente a marca de linhas que você usa (por exemplo, Lumina Setta ou Polycron). O computador mostra na tela a cor real daquele cone com o número dele certinho! Quando você manda bordar, você já sabe exatamente qual cone pegar da prateleira na ordem certa, sem confusão!",
    "applications": [
      "Padronização corporativa exata de cores de logotipos de empresas (Manual de Identidade Visual / Cores Pantone)",
      "Emissão de fichas técnicas de produção para operadores em indústrias e confecções",
      "Conversão rápida de matrizes compradas na internet para as linhas disponíveis no ateliê",
      "Cálculo preciso da metragem de linha gasta para formação de preço de venda e custos"
    ],
    "commonErrors": [
      "Confiar nas cores aleatórias que aparecem na tela da máquina ao abrir um arquivo .DST sem olhar a folha de produção",
      "Usar cores aleatórias na tela do computador sem conferir se possui o cone correspondente no estoque",
      "Tentar reproduzir cores de pele ou degradês finos sem calibrar o monitor do computador"
    ],
    "troubleshootingTips": [
      "Imprima ou mantenha no celular a folha de sequência de cores (Color Sequence Worksheet) de toda matriz antes de começar a bordar",
      "Tenha no seu ateliê a cartela física de amostras de fios com meadas reais da sua marca de linha favorita para comparar com a tela",
      "No formato .PES, as cores originais ficam salvas no arquivo; já no formato .DST, siga estritamente a sua ficha de produção externa"
    ],
    "dicaArtrelados": "Adquira a 'Cartela de Cores Física' da marca de linhas que você mais usa no ateliê! Ela tem pedacinhos reais de todas as linhas coladas em um mostruário dobrável. Quando o cliente trouxer a camisa para bordar, você encosta a linha real na peça e escolhe a cor perfeita em 5 segundos!",
    "voceSabia": "Os grandes fabricantes mundiais de linhas de bordar utilizam espectrofotômetros a laser e iluminação controlada D65 em laboratórios térmicos para garantir que o mesmo código de cor tenha rigorosamente o mesmo tom tingido em lotes fabricados com anos de diferença!",
    "practicalExercise": "No seu software de bordado, configure a paleta padrão para a marca de linhas que você tem em casa: abra uma matriz, atribua os números reais dos seus cones e imprima a folha de produção para acompanhar na máquina!",
    "quickSummary": "Sistema de gerenciamento de cores que correlaciona os tons do desenho na tela com os números e códigos reais dos cones de linha do fabricante.",
    "relatedTerms": [
      "Ficha de Produção",
      "Tabela de Cores",
      "Formato DST",
      "Linha de Bordar Poliéster",
      "Pantone"
    ],
    "tags": [
      "m-025",
      "mapeamento de cores",
      "color mapping",
      "paleta de fios",
      "tabela de linhas",
      "setta",
      "polycron",
      "madeira",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARN GMBH. Thread Color Matching, Spectral Analysis and Global Palette Standards. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Gestão Cromática no Ateliê: Cartelas de Cores, Mapeamento Digital, Espectrofotometria e Fichas de Produção. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-026-mascara-recorte-aplique-in-the-hoop-cut-mask",
    "code": "M-026",
    "term": "Máscara de Recorte e Aplique In The Hoop (Cut Mask & ITH Appliqué Boundary)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Técnicas de Aplique & ITH",
    "grammarClass": "Substantivo feminino / Do italiano 'maschera' e do latim 'recortare'.",
    "origin": "Técnica de programação e corte que estabelece as três etapas clássicas de costura mecânica (posicionamento, fixação e acabamento) para embutir tecidos recortados em apliques ou peças montadas inteiramente no bastidor.",
    "summary": "Sequência programada de 3 etapas que marca o contorno da peça, fixa o retalho de tecido com ponto corrido/zigue-zague e arremata com ponto cheio.",
    "definition": "A Máscara de Recorte e Estrutura de Aplique (Appliqué Cut Mask / Matriz de Aplique em 3 Passos / ITH Cut Line) é a arquitetura de programação digital que comanda a inserção de retalhos de tecidos externos (como tricoline estampada, feltro, glitter, couro sintético) sobre a peça bordada. Toda máscara de aplique profissional é composta por três etapas sequenciais obrigatórias: 1) Linha de Marcação/Posicionamento (Placement Line - que desenha no bastidor onde o tecido deve ser colocado); 2) Linha de Fixação/Pesponto (Tackdown Line - que costura o retalho no lugar para permitir o recorte rente com a tesoura de garça ou pelicano); e 3) Ponto de Acabamento/Borda Cheia (Cover Stitch / Satin Border - coluna densa de ponto cheio que cobre as bordas desfiadas do retalho).",
    "technicalDetails": "Estrutura técnica dos 3 passos do aplique:\n• Passo 1 - Ponto de Posicionamento (Placement Line): Ponto corrido simples (comprimento 2,5 mm) costurado apenas na entretela ou tecido base;\n• Passo 2 - Ponto de Fixação (Tackdown Stitch): Ponto corrido duplo ou zigue-zague estreito que prende o tecido do aplique antes do recorte;\n• Margem de Recorte Manual: O operador corta o excesso de tecido a 1,0 mm da linha de fixação com tesoura curvada de ponta fina;\n• Passo 3 - Ponto de Borda (Cover Satin Stitch): Coluna de ponto cheio com largura de 3,0 mm a 4,5 mm e densidade de 0,38 mm a 0,40 mm, com compensação de repuxo de 0,35 mm para garantir cobertura total da borda cortada;\n• Recorte a Laser ou Pré-Cortado (Pre-Cut / ScanNCut): Quando os tecidos são cortados previamente por plotter eletrônica, o passo 1 serve para encaixar o retalho cortado milimetricamente dentro da máscara.",
    "howItWorks": [
      "1. A máquina costura a primeira etapa (Passo 1): faz um desenho de contorno simples no bastidor indicando a área exata do aplique e para automaticamente.",
      "2. A bordadeira coloca um retalho de tecido bonito sobre o contorno marcado.",
      "3. Pressiona Iniciar: a máquina executa o Passo 2 (costura uma linha de zigue-zague ou ponto corrido prendendo o retalho no bastidor) e para novamente.",
      "4. Sem tirar o tecido do bastidor, a bordadeira usa uma tesoura de ponta curva (tesoura de aplique/pelicano) e recorta todo o excesso de tecido bem pertinho da costura.",
      "5. Pressiona Iniciar: a máquina executa o Passo 3 (costura uma borda gordinha e brilhante em ponto cheio ou ponto caseado sobre o corte).",
      "6. A borda cobre todos os fiapos do tecido cortado com acabamento impecável.",
      "7. O resultado é um aplique lindo, volumoso, econômico e sem desfiar nas lavagens."
    ],
    "beginnerExplanation": "A máscara de aplique é aquele processo mágico de 'colocar um tecido dentro do bordado' em 3 passinhos simples! A máquina faz assim: 1) primeiro ela desenha uma linha mostrando onde o tecido deve ficar; 2) você coloca o retalho de tecido em cima e a máquina passa uma costurinha para prender; 3) a máquina para, você pega a tesourinha e corta as sobras do tecido ao redor da costura; 4) você aperta o botão e a máquina passa um contorno largo e fofinho de linha cheia por cima, escondendo as bordinhas cortadas! É perfeito para economizar linha em desenhos grandes e usar tecidos estampados fofos!",
    "applications": [
      "Letras grandes e números em jaquetas universitárias (Letterman Jackets) e moletom",
      "Bordado de personagens infantis, bichinhos e flores em fraldas, bodies e mantas",
      "Confecção de chaveiros, máscaras, bolsinhas e necessaires feitas 100% no bastidor (In The Hoop)",
      "Bordados com glitter têxtil, corino metalizado, lantejoulas e feltro estruturado"
    ],
    "commonErrors": [
      "Retirar o tecido de dentro do aro do bastidor para fazer o recorte na mesa (nunca mais volta para a mesma posição)",
      "Recortar o tecido longe demais da costura de fixação (os fiapos de tecido escapam para fora da borda cheia)",
      "Usar tesoura reta cega que corta a linha de fixação ou fura o tecido de base"
    ],
    "troubleshootingTips": [
      "Use sempre tesoura de ponta curva ou tesoura 'bico de pato/pelicano' própria para aplique, que permite cortar rente sem furar a base",
      "Aplique entretela termocolante fina no verso do tecido do aplique antes de bordar para evitar que ele desfie durante o corte",
      "Mantenha a largura do ponto de acabamento (Passo 3) com pelo menos 3,5 mm para cobrir com segurança a margem de corte"
    ],
    "dicaArtrelados": "Para fazer apliques perfeitos sem nenhum fiapo aparecendo: cole uma entretela termocolante fininha (tipo termocolante definitivo ou papel colante) no avesso do tecido do aplique antes de cortar! Quando você passar a tesoura rente, o tecido fica firme como papel e não solta nem um único fiozinho!",
    "voceSabia": "A técnica de aplique têxtil existe desde a Idade Média, quando era utilizada para criar grandes bandeiras e estandartes militares porque era muito mais rápido e leve costurar pedaços grandes de tecidos nobres do que preencher tudo com pontos manuais!",
    "practicalExercise": "Pegue um retalho de tecido estampado: crie uma matriz simples de estrela com os 3 passos de aplique no software e execute na sua máquina: pratique cortar com a tesoura de ponta curva bem rente à costura!",
    "quickSummary": "Sequência de programação em três etapas (marcação, fixação e acabamento) para embutir retalhos de tecidos decorativos no bordado.",
    "relatedTerms": [
      "Aplique",
      "Ponto de Fixação (Tackdown)",
      "Ponto Satim",
      "Tesoura Pelicano",
      "In The Hoop (ITH)"
    ],
    "tags": [
      "m-026",
      "mascara de recorte",
      "aplique",
      "ith",
      "tackdown",
      "recorte",
      "tesoura pelicano",
      "patch",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBROIDERY APPLIQUÉ MASTER ASSOCIATION. Three-Step Appliqué Engineering, Laser Pre-Cutting and Edge Coverage. Atlanta: EAMA, 2022.",
      "ARTRELADOS. A Arte do Aplique e Projetos In The Hoop: Máscaras de Recorte, Tesouras Especiais e Acabamento de Alta Durabilidade. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-027-movimento-pantografo-resolucao-eixos-pulse-resolution",
    "code": "M-027",
    "term": "Movimento do Pantógrafo e Resolução de Eixos (Pantograph Kinematics & CNC Pulse Resolution)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Eletrônica & Software",
    "grammarClass": "Substantivo masculino / Do grego 'pantos' (tudo) e 'graphein' (escrever).",
    "origin": "Instrumento mecânico pantográfico de desenho inventado por Christoph Scheiner em 1603, adaptado no século XX com servomotores digitais CNC para movimentar o bastidor com resolução micrométrica a cada agulhada.",
    "summary": "Dinâmica cinemática do braço que move o bastidor nos eixos X e Y e a resolução de pulsos eletrônicos da placa de controle (0,1 mm por passo).",
    "definition": "O Movimento do Pantógrafo e Resolução de Eixos (Pantograph Drive Kinematics & Sub-Millimeter Axis Pulse Resolution) é o conjunto de princípios mecânicos e de controle digital que rege a movimentação física do bastidor de bordado. O pantógrafo é a estrutura mecânica articulada ou cartesiana suspensa sobre rolamentos lineares de alta precisão que sustenta o bastidor com o tecido. A resolução de eixos é o menor incremento linear que os motores e encoders conseguem executar (sendo o padrão da indústria de bordados calibrado em exatamente 0,1 mm, ou 1 décimo de milímetro por pulso binário). A cinemática controla as rampas de aceleração e frenagem para que o bastidor não vibre ao mudar bruscamente de direção.",
    "technicalDetails": "Especificações cinemáticas e eletrônicas do pantógrafo:\n• Resolução Cartesiana Padrão: 0,1 mm por unidade de coordenada (1 mm = 10 unidades de pulso / 100 pulsos por centímetro linear);\n• Curso Máximo de Deslocamento em Salto (Jump): Até 12,7 mm por pulso de salto individual em formatos .DST tradicionais;\n• Tempo de Resposta Mecânica: O bastidor deve acelerar, percorrer a distância e parar completamente em menos de 30 milissegundos a 1.000 PPM;\n• Guias Lineares: Rolamentos de esferas recirculantes de aço retificado (trilhos lineares tipo THK / Hiwin) para eliminar folgas radiais e atrito;\n• Vibração Residual e Rigidez: Em altas velocidades, forças de inércia exercidas pelo peso do tecido e do aro do bastidor são absorvidas por amortecedores elastoméricos e contra-pesos dinâmicos.",
    "howItWorks": [
      "1. A cada ciclo de rotação do cabeçote, a agulha sobe e sai do tecido.",
      "2. O sensor do eixo principal atinge o ângulo de liberação de movimento (270°).",
      "3. A placa-mãe CNC calcula a distância e a rampa de aceleração suave para a próxima coordenada (X/Y).",
      "4. Os drivers enviam a quantidade exata de pulsos elétricos para os servomotores dos eixos.",
      "5. O pantógrafo desliza suavemente sobre os trilhos de esferas com tolerância inferior a 0,02 mm.",
      "6. O movimento cessa exatamente no ângulo de 100° do ciclo, antes da ponta da agulha tocar o tecido.",
      "7. A agulha penetra com precisão cirúrgica sem esforço de flexão lateral."
    ],
    "beginnerExplanation": "O pantógrafo é o 'braço de ferro inteligente' da máquina de bordar que segura o bastidor e passeia com ele para lá e para cá! Toda vez que a agulha sobe no ar, esse braço se move com passos minúsculos de um décimo de milímetro (tão pequeno que não dá nem para ver a olho nu) e para estátua no lugar exato para a agulha descer de novo. Se esse braço tremer ou tiver folga, o bordado sai todo torto e os contornos não encaixam no desenho. Quando o pantógrafo é firme e bem ajustado, os pontos caem com a precisão de um relógio suíço!",
    "applications": [
      "Movimentação milimétrica de bastidores planos, bastidores magnéticos e bastidores de boné",
      "Garantia de encaixe perfeito entre preenchimentos de fundo (tatami) e contornos em ponto cheio",
      "Execução de desenhos de alta densidade e micro-letras sem oscilação geométrica",
      "Operação contínua em velocidades de 800 a 1.200 pontos por minuto"
    ],
    "commonErrors": [
      "Apoiar as mãos ou objetos pesados sobre o pantógrafo durante o bordado (danifica os trilhos lineares e perde passos)",
      "Permitir que o bastidor colida com as paredes laterais da máquina ou obstáculos na bancada",
      "Deixar os trilhos do pantógrafo sem lubrificação com graxa apropriada (gera ruído e desgaste prematuro)"
    ],
    "troubleshootingTips": [
      "Se os contornos pretos do bordado estão caindo 1 ou 2 milímetros fora do preenchimento colorido: verifique se não há folga mecânica nos parafusos de encaixe do pantógrafo",
      "Mantenha os trilhos e guias do pantógrafo sempre limpos de poeira e levemente lubrificados conforme manual do fabricante",
      "Ao prender o bastidor no braço da máquina: empurre até ouvir o 'clique' firme da trava de engate rápido"
    ],
    "dicaArtrelados": "Sempre que for encaixar o bastidor no braço do pantógrafo da sua máquina, segure com as duas mãos e sinta o encaixe firme da trava! Se o bastidor ficar com uma folguinha de meio milímetro no engate, o contorno do seu bordado vai desencaixar do preenchimento e estragar a peça!",
    "voceSabia": "O pantógrafo original inventado em 1603 era feito de varetas de madeira articuladas e era usado por artistas renascentistas para ampliar ou reduzir desenhos e mapas à mão com proporções geométricas exatas!",
    "practicalExercise": "Encaixe o bastidor vazio no pantógrafo da sua máquina, desligue a máquina e tente balançar levemente o braço com a ponta do dedo: observe que ele deve ser absolutamente rígido e sem folgas laterais perceptíveis!",
    "quickSummary": "Estrutura mecânica cartesiana e controle CNC que translada o bastidor a cada agulhada com resolução milimétrica de 0,1 mm por pulso.",
    "relatedTerms": [
      "Motor de Passo",
      "Servomotor",
      "Coordenadas Cartesianas",
      "Encaixe de Contorno",
      "Ponto Morto Superior"
    ],
    "tags": [
      "m-027",
      "pantografo",
      "resolucao de eixos",
      "cinematica",
      "cnc",
      "pulsos",
      "movimento",
      "trilhos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "INTERNATIONAL FEDERATION OF ROBOTICS & TEXTILE AUTOMATION. CNC Motion Control and Cartesian Kinematics in Industrial Embroidery. Frankfurt: IFR, 2022.",
      "ARTRELADOS. Engenharia de Movimento no Bordado: Cinemática do Pantógrafo, Resolução de Eixos e Eliminação de Desalinhamentos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-028-matriz-conexao-pontos-salto-ocultos-branching-hidden-travel",
    "code": "M-028",
    "term": "Matriz de Conexão e Pontos de Salto Ocultos (Branching & Hidden Travel Stitching)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Do latim 'conexio' (ligação) e do inglês 'branching' (ramificação).",
    "origin": "Algoritmo de teoria dos grafos e otimização de caminhos computacionais (Problema do Carteiro Chinês / Euleriano) aplicado ao puncionamento de bordados pela Wilcom e Tajima no início dos anos 2000.",
    "summary": "Técnica de programação que interliga múltiplos ramos de bordado da mesma cor por caminhos ocultos sob pontos futuros, eliminando cortes de linha desnecessários.",
    "definition": "A Técnica de Ramificação e Conexão com Pontos Ocultos (Branching / Smart Pathing / Hidden Under-Stitch Traveling) é uma metodologia avançada de digitalização vetorial em que diversos objetos separados da mesma cor (como folhas de um ramo, arabescos, letras cursivas ou pétalas florais) são interligados de forma inteligente em um único trajeto contínuo. Em vez de realizar um corte de linha (Trim) com nós de arremate a cada folha, o software ou puncionador insere pontos corridos de deslocamento que caminham estrategicamente por baixo de áreas que serão cobertas posteriormente por pontos cheios ou tatamis, reduzindo o tempo de máquina em até 40% e gerando um avesso perfeitamente limpo.",
    "technicalDetails": "Parâmetros e lógica algorítmica de ramificação (Branching):\n• Teoria de Grafos: O algoritmo calcula o caminho ótimo de entrada e saída (Eulerian Path) para costurar todos os nós da mesma cor sem sobreposições duplicadas visíveis;\n• Travessia Oculta (Hidden Travel): O ponto corrido de transição caminha rigorosamente pelo centro das colunas que receberão cobertura de satim no futuro;\n• Redução de Ciclos de Corte: Cada corte mecânico de linha (Trim) consome entre 4 a 7 segundos de máquina (desaceleração, acionamento da faca, salto, aceleração e arremate); em um logotipo com 20 folhas, a ramificação economiza mais de 2 minutos por peça;\n• Redução de Fios Soltos (Jump Stitches): Elimina a necessidade de limpeza manual com tesoura de arremate após o bordado;\n• Preservação da Maciez: Evita o acúmulo de nós de início e fim no verso, mantendo o avesso plano e suave.",
    "howItWorks": [
      "1. O programador desenha 15 folhas e arabescos separados da mesma cor verde em uma coroa de louros no software.",
      "2. Seleciona todos os objetos e aplica a ferramenta 'Ramificação Automática' (Branching) ou cria a rota manual de conexão.",
      "3. Define o ponto de entrada no início da primeira folha e o ponto de saída no final da última folha.",
      "4. O software calcula o trajeto: costura primeiro os sob-pontos e caminhos de ida, e volta cobrindo tudo com ponto cheio perfeito.",
      "5. A máquina de bordar executa todo o ramo verde em um único ciclo ininterrupto sem dar nenhum corte de linha.",
      "6. As facas da máquina não são acionadas desnecessariamente.",
      "7. A peça sai da máquina com a frente impecável e o verso limpo, sem nenhuma 'teia de aranha' de fios soltos."
    ],
    "beginnerExplanation": "A conexão com pontos ocultos (ou ramificação) é como fazer um desenho lindo 'sem tirar a caneta do papel'! Quando você borda um galho cheio de folhinhas verdes, a máquina comum costura uma folha, corta a linha, pula para a próxima folha, dá nó, corta a linha de novo... Isso faz a máquina demorar um tempão e deixa o verso cheio de nós duros. Quando a matriz é inteligente e ramificada, a máquina viaja de uma folha para a outra por baixo dos pontos, costurando tudo de uma vez só sem nenhum corte! O bordado fica muito mais rápido e o verso fica limpinho como um espelho!",
    "applications": [
      "Bordados de monogramas cursivos conectados e assinaturas caligráficas",
      "Ramos florais, arabescos clássicos, brasões e coroas de louros em enxovais",
      "Logotipos corporativos complexos com dezenas de elementos da mesma cor",
      "Otimização de tempo de máquina em produção seriada de alta escala industrial"
    ],
    "commonErrors": [
      "Deixar a máquina dar dezenas de cortes de linha entre elementos minúsculos a 2 mm de distância um do outro",
      "Passar o ponto corrido de transição por fora do desenho sobre o tecido vazio (o fio fica exposto e visível)",
      "Ramificar objetos de cores diferentes gerando costuras cruzadas incorretas"
    ],
    "troubleshootingTips": [
      "No Wilcom ou Embird, utilize sempre a ferramenta 'Branching' (atalho 'I' no Wilcom) após desenhar ramos florais ou conjuntos de folhas",
      "Confira na simulação em câmera lenta do software se os pontos de viagem estão perfeitamente escondidos sob as colunas cheias",
      "Se você estiver usando uma máquina doméstica sem corte automático de linha: a ramificação é fundamental para você não precisar cortar centenas de fios na mão"
    ],
    "dicaArtrelados": "Quer economizar até 30% do tempo de produção das suas toalhas e enxovais? Aprenda a usar a ferramenta de ramificação (Branching) no seu software de digitalização! Um desenho com flores e folhas que demorava 25 minutos para bordar passa a bordar em apenas 16 minutos, com um verso super limpo e sem fiapos soltos!",
    "voceSabia": "O mecanismo de corte automático de linha de uma máquina de bordar é a peça mecânica que mais sofre desgaste; matrizes otimizadas com ramificação inteligente chegam a dobrar a vida útil das facas de corte da máquina!",
    "practicalExercise": "No seu software, desenhe 5 pequenos círculos alinhados: agrupe-os e aplique a ferramenta 'Ramificação' (Branching): simule o trajeto na tela e veja como o programa conecta todos eles por baixo sem um único comando de corte!",
    "quickSummary": "Algoritmo avançado de programação que interliga objetos da mesma cor por trajetos ocultos, eliminando cortes de linha e aumentando a velocidade.",
    "relatedTerms": [
      "Branching",
      "Corte de Linha (Trim)",
      "Ponto de Salto (Jump)",
      "Otimização de Matriz",
      "Avesso Limpo"
    ],
    "tags": [
      "m-028",
      "matriz de conexao",
      "branching",
      "pontos ocultos",
      "wilcom",
      "otimizacao",
      "sem cortes",
      "produtividade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Branching Architecture and Graph Theory in Stitch Optimization. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Digitalização de Alta Performance: Ramificação Inteligente, Roteamento Oculto e Redução de Cortes na Produção. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-029-manta-termica-manta-silicone-prensa-heat-press-mat",
    "code": "M-029",
    "term": "Manta Térmica e Manta de Silicone para Prensa (Silicone Heat Press Mat & Thermal Pad)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo feminino / Do latim 'mantum' e do grego 'therme' (calor).",
    "origin": "Desenvolvida na indústria de vulcanização de borrachas sintéticas e prensas térmicas de alta temperatura para distribuição homogênea de pressão e proteção de superfícies têxteis sensíveis durante a fixação de entretelas termocolantes e acabamentos.",
    "summary": "Base resiliente e resistente a altas temperaturas (até 250°C) de borracha de silicone ou feltro de lã que equaliza a pressão de ferros e prensas térmicas.",
    "definition": "A Manta Térmica de Silicone e Base de Lã para Passadoria (Silicone Heat Press Mat / Wool Ironing Pad / Manta Protetora Térmica) é um acessório essencial de termofixação utilizado no ateliê de bordados para acomodar tecidos durante a colagem de entretelas termocolantes, fusão de filmes adesivos de apliques, remoção de marcas de bastidor e fixação de películas macias no verso de bordados de bebês. Sua estrutura elástica e resistente a temperaturas elevadas (de 180°C a 260°C) absorve os relevos volumosos das linhas de bordado, permitindo que a base quente da prensa ou do ferro exerça pressão uniforme sobre a cola sem esmagar ou deformar o brilho dos pontos de bordado.",
    "technicalDetails": "Propriedades físicas e termodinâmicas das mantas térmicas:\n• Material Base: Borracha de Silicone de Alta Densidade (espessura de 8 mm a 10 mm) ou Feltro de Lã Pura Prensada 100% natural (espessura de 12 mm a 15 mm);\n• Resistência Térmica Contínua: Suporta até 260°C sem deformação, derretimento ou liberação de gases tóxicos;\n• Resiliência Mecânica (Efeito Amortecedor): Permite que os pontos em relevo afundem suavemente na manta durante a prensagem, garantindo que o calor atinja a entretela termocolante sem achatar as linhas superiores;\n• Distribuição de Pressão: Elimina pontos frios e variações de contato entre o prato da prensa térmica e a costura;\n• Barreira Antiaderente: Frequentemente utilizada em conjunto com folhas de Teflon (PTFE) para evitar que resinas adesivas grudem na base da prensa.",
    "howItWorks": [
      "1. A artesã posiciona a manta de silicone ou almofada de lã sobre a bancada de passadoria ou base da prensa térmica.",
      "2. Coloca a peça bordada com a frente voltada para baixo (em contato direto com a manta macia).",
      "3. Posiciona a película protetora de avesso (termoadesivo macio de bebê) sobre o verso do bordado.",
      "4. Cobre com uma folha de Teflon protetor.",
      "5. Abaixa o ferro quente ou fecha a prensa térmica com pressão uniforme por 12 a 15 segundos.",
      "6. A manta macia absorve o relevo das linhas de poliéster na frente, enquanto o calor cola a proteção no verso.",
      "7. Ao retirar a peça, o verso está perfeitamente selado e o bordado na frente mantém 100% do seu relevo fofo e brilho impecável."
    ],
    "beginnerExplanation": "A manta térmica (de silicone ou de lã) é como um 'colchão fofinho resistente ao calor' para você passar suas peças bordadas com o ferro ou na prensa térmica! Quando você passa o ferro quente direto em cima do bordado sobre uma mesa dura, o ferro esmaga os pontos e deixa a linha toda achatada e sem graça. Quando você coloca essa mantinha embaixo da peça virada para baixo, o bordado afunda macio nela: você pode passar o ferro com força para colar entretelas e protetores de avesso de bebê sem estragar o relevo e sem queimar o pano!",
    "applications": [
      "Aplicação de protetores de avesso termocolantes macios em bodies e enxovais de bebê",
      "Termofixação de filmes termocolantes de aplique (Heat-N-Bond) em alta temperatura",
      "Eliminação rápida de marcas redondas de queima de bastidor com vapor",
      "Colagem uniforme de entretelas termocolantes em tecidos de alfaiataria e jalecos"
    ],
    "commonErrors": [
      "Passar o ferro quente com a frente do bordado direto sobre uma mesa dura de madeira (achata o relevo e quebra o brilho da linha)",
      "Usar esponjas comuns de colchão ou espumas sintéticas no lugar de manta térmica (elas derretem e pegam fogo com o calor)",
      "Pressionar a prensa térmica sem folha de teflon por cima de termocolantes expostos (a resina gruda na chapa quente)"
    ],
    "troubleshootingTips": [
      "Passe suas peças bordadas sempre pelo avesso sobre uma base macia de lã ou silicone",
      "Use uma folha de Teflon (PTFE) limpa sobre a peça para evitar manchas de brilho em tecidos sintéticos escuros",
      "Mantenha a manta de silicone limpa, passando um pano úmido para remover resíduos de poeira e fiapos térmicos"
    ],
    "dicaArtrelados": "Para passar peças bordadas de clientes como um verdadeiro profissional: coloque uma toalha felpuda dobrada ou uma manta de lã na mesa, coloque o bordado virado DE BRUÇOS (frente para baixo) e passe o ferro pelo avesso! O bordado afunda na textura e sai com o brilho e o relevo 100% intactos!",
    "voceSabia": "As almofadas de passar feitas de lã pura 100% prensada retêm o calor do ferro em seu interior, de modo que ao passar uma peça sobre elas, o tecido recebe calor dos dois lados simultaneamente, reduzindo o tempo de passadoria pela metade!",
    "practicalExercise": "Coloque uma toalha macia dobrada na mesa, vire um bordado com a frente para baixo e passe o ferro com vapor pelo avesso: desvire a peça e comprove como as linhas continuam redondinhas e volumosas!",
    "quickSummary": "Base resiliente e resistente a altas temperaturas que equaliza a pressão térmica e preserva o relevo e o brilho dos pontos de bordado.",
    "relatedTerms": [
      "Protetor de Avesso",
      "Folha de Teflon",
      "Prensa Térmica",
      "Termocolante",
      "Passadoria de Bordados"
    ],
    "tags": [
      "m-029",
      "manta termica",
      "manta de silicone",
      "prensa termica",
      "passadoria",
      "relevo",
      "teflon",
      "protetor de avesso",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TEXTILE CARE & FINISHING RESEARCH GUILD. Thermal Pressing Dynamics, Silicone Cushioning and Surface Texture Preservation. Milão: TCFRG, 2022.",
      "ARTRELADOS. Finalização e Passadoria de Alta Costura no Bordado: Mantas Térmicas, Prensas, Protetores de Bebê e Acabamento Impecável. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-030-mecanismo-troca-automatica-cores-auto-color-change-cam",
    "code": "M-030",
    "term": "Mecanismo de Troca Automática de Cores (Auto Color Change Cam & Solenoid System)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Do grego 'mekhane' (invenção mecânica) e 'auto' (por si mesmo).",
    "origin": "Inovação mecatrônica desenvolvida pela Tajima e Barudan na década de 1980 que substituiu as paradas manuais de máquina por um trilho deslizante com fuso helicoidal acionado por motor de passo ou solenoide.",
    "summary": "Sistema eletromecânico que desloca o bloco de barras de agulha lateralmente para posicionar a próxima cor de linha sobre a lançadeira em frações de segundo.",
    "definition": "O Mecanismo de Troca Automática de Cores (Automated Color Change Assembly / Color Change Cam, Screw & Solenoid Drive) é o sistema mecatrônico presente em máquinas de bordar multiagulhas e multicabeças que executa a troca física entre diferentes linhas sem intervenção humana. Quando o comando de troca de cor (Stop / Color Change) é lido na matriz, a máquina corta a linha da agulha atual, recolhe a barra de agulha ao ponto morto superior, aciona um servomotor ou solenoide que gira um fuso helicoidal (came cilíndrico) e translada todo o bloco do cabeçote lateralmente sobre rolamentos de precisão, alinhando a nova barra de agulha com o pino de acionamento do virabrequim principal.",
    "technicalDetails": "Componentes e cinemática da troca automática de cores:\n• Fuso Helicoidal / Came Cilíndrico de Troca: Eixo ranhurado com canaletas de passo de precisão que converte a rotação do motor em deslocamento linear suave do bloco de agulhas;\n• Sensor de Posição de Agulha (Color Change Potentiometer / Absolute Encoder): Sensor óptico ou potenciômetro de precisão que informa à placa-mãe o número exato da agulha alinhada (ex: Agulha 1 a 15);\n• Tempo Médio de Troca: 1,2 a 2,5 segundos por troca de agulha;\n• Solenoide de Pega de Fio (Thread Picker): Haste eletromecânica acionada durante a troca para puxar suavemente a ponta da linha cortada para dentro do prendedor (Thread Retainer);\n• Micro-Chave de Fim de Curso: Proteção de segurança eletrônica que impede que o cabeçote tente se deslocar além da primeira ou última agulha física.",
    "howItWorks": [
      "1. A máquina lê o comando de troca de cor da matriz no final do bloco atual de pontos.",
      "2. O motor principal para no ângulo de 100° (ponto morto superior de segurança).",
      "3. As facas inferiores cortam a linha e a mola de retorno recolhe a barra de agulha.",
      "4. O motor de troca de cor gira o fuso helicoidal.",
      "5. O cabeçote com todas as 15 agulhas desliza suavemente para a esquerda ou direita sobre o trilho.",
      "6. O sensor confirma que a nova agulha selecionada (ex: Agulha 7 - Vermelho) está perfeitamente alinhada com o virabrequim e a lançadeira.",
      "7. O motor principal dá a partida e a máquina retoma a costura imediatamente sem perder nem 2 segundos."
    ],
    "beginnerExplanation": "Você já viu uma máquina de bordar industrial de 6 ou 10 agulhas trocando de cor sozinha? É como uma dança mecânica perfeita! Quando a máquina termina de bordar as folhas verdes e precisa bordar a flor vermelha, ela corta a linha verde, o bloco inteiro com todas as agulhas desliza para o lado com um barulhinho suave 'zumm-clique', a agulha vermelha entra no lugar certinho e a máquina volta a costurar na hora! É esse mecanismo automático que faz você economizar horas de trabalho sem precisar ficar enfiando linha na máquina toda hora!",
    "applications": [
      "Bordado contínuo e ininterrupto de matrizes multicoloridas com até 15 ou mais cores",
      "Aumento drástico de produtividade em máquinas semi-industriais e industriais de alta produção",
      "Sincronização simultânea de dezenas de cabeçotes em máquinas multicabeças",
      "Execução de logotipos complexos com múltiplas tonalidades e degradês"
    ],
    "commonErrors": [
      "Tentar forçar o bloco do cabeçote com a mão para os lados com a máquina ligada (descalibra o sensor de potenciômetro)",
      "Deixar pedaços de linha enrolados no fuso helicoidal traseiro do cabeçote (trava o motor de troca e acusa erro de agulha)",
      "Lubrificar o trilho do cabeçote com graxa pesada e pegajosa que endurece com o frio"
    ],
    "troubleshootingTips": [
      "Se a máquina travar no meio da troca de cor com a mensagem 'Color Change Error': desligue e gire manualmente o botão traseiro do fuso de cor até a numeração da agulha travar no centro",
      "Aplique 1 gota de óleo mineral no feltro do trilho deslizante do cabeçote mensalmente para garantir deslizamento suave",
      "Verifique se nenhuma agulha está levemente torta ou pegando no pé calcador vizinho durante o deslocamento lateral"
    ],
    "dicaArtrelados": "Em máquinas multiagulhas, programe as cores da matriz para agrupar agulhas vizinhas sempre que possível! Por exemplo: usar as agulhas 1, 2 e 3 em sequência é mais rápido para o cabeçote deslizar do que fazer a máquina pular da agulha 1 para a 15 e depois voltar para a 2!",
    "voceSabia": "As primeiras máquinas de bordar automáticas utilizavam um sistema de correntes de bicicleta e discos dentados mecânicos para puxar as barras de agulha antes da invenção dos servomotores digitais no início dos anos 1980!",
    "practicalExercise": "Fique de pé ao lado da sua máquina multiagulhas durante um bordado com várias cores: observe atentamente o momento em que a agulha sobe, a faca corta e o cabeçote desliza lateralmente com precisão cirúrgica!",
    "quickSummary": "Sistema mecatrônico de alta precisão que translada lateralmente o conjunto de agulhas para alternar as cores da matriz sem paradas manuais.",
    "relatedTerms": [
      "Máquina Multiagulhas",
      "Barra de Agulha",
      "Corte Automático",
      "Sensor de Posição",
      "Fuso Helicoidal"
    ],
    "tags": [
      "m-030",
      "troca de cores",
      "color change",
      "mecanismo",
      "solenoide",
      "fuso helicoidal",
      "multiagulhas",
      "industrial",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA INDUSTRIAL SEWING & EMBROIDERY. Mechatronics of Automatic Color Change Systems and Cam Timing. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Engenharia dos Mecanismos de Troca Automática de Cor: Fusos, Sensores Ópticos, Potenciômetros e Alinhamento Mecânico. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-031-moletom-tecidos-felpados-pesados-fleece-sweatshirt",
    "code": "M-031",
    "term": "Moletom e Tecidos Felpados Pesados (Sweatshirt, Heavy Fleece & French Terry)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Do francês 'molleton' (tecido macio e fofo).",
    "origin": "Tecido de malharia pesada de algodão cardado ou mescla com poliéster criado na década de 1920 para agasalhos esportivos e uniformes universitários de inverno, famoso pelo interior aveludado e felpado.",
    "summary": "Tecido pesado, elástico e espesso com verso felpudo, que exige entretela de corte firme (Cut-Away), agulha 80/12 e compensação de repuxo generosa.",
    "definition": "O Moletom (Heavy Fleece / Sweatshirt Knit / French Terry / Moletom Peluciado) é um tecido de malharia pesada (gramatura de 250 g/m² a 400 g/m²) estruturado com fios grossos de algodão, poliéster ou misturas térmicas. Apresenta o lado externo liso e o lado interno felpudo ou com laçadas abertas. Por ser um tecido espesso, elástico e macio, o moletom tende a sofrer afundamento de pontos e forte tração mecânica (repuxo) durante a costura de matrizes densas. Para bordar moletom com acabamento perfeito sem deformar a peça, é indispensável o uso de entretela de corte resistente (Cut-Away), agulha de ponta bola média (Ball Point 80/12) e aplicação de filme solúvel no topo se o bordado tiver letras pequenas ou detalhes finos.",
    "technicalDetails": "Propriedades e parametrização para bordar em moletom:\n• Gramatura Típica: 280 g/m² a 380 g/m² (Moletom 2 cabos ou 3 cabos peluciado);\n• Estabilização Obrigatória: Entretela de corte definitiva (Cut-Away de 70 g/m² a 90 g/m²); NUNCA usar apenas entretela rasgável simples em moletom pesado (o tecido cede e deforma com as lavagens);\n• Agulha Indicada: Ponta Bola Fina a Média (SES / SUK calibre 80/12 ou 90/14);\n• Compensação de Repuxo (Pull Compensation): Aumentar para 0,40 mm a 0,50 mm no software para compensar a elasticidade da malha grossa;\n• Sob-pontos (Underlay): Uso obrigatório de sob-ponto em grade (Tatami / Grid Underlay) para prensar a elasticidade do moletom antes dos pontos cheios;\n• Pressão do Bastidor: Ajustar a abertura do aro para não esmagar excessivamente o tecido grosso, evitando marcas profundas de queima de bastidor.",
    "howItWorks": [
      "1. A bordadeira corta uma folha de entretela de corte resistente (Cut-Away 80 g/m²).",
      "2. Aplica adesivo spray temporário no verso do moletom e fixa sobre a entretela.",
      "3. Encaixa o moletom no bastidor ajustando o parafuso com a folga necessária para a espessura grossa.",
      "4. Se o desenho tiver letras pequenas: posiciona uma folha de filme plástico hidrossolúvel transparente no topo.",
      "5. Instala uma agulha nova Ball Point 80/12 na máquina.",
      "6. A máquina costura a matriz: o sob-ponto em grade estabiliza a malha pesada e o ponto satim cobre com volume impecável.",
      "7. Ao finalizar, recorta-se a entretela de corte pelo avesso em formato arredondado.",
      "8. O agasalho de moletom mantém o caimento impecável, sem franzidos e sem deformar após anos de lavagem."
    ],
    "beginnerExplanation": "Bordar em blusas e calças de moletom é uma delícia porque o tecido é quentinho e grosso, mas exige atenção! Como o moletom é um tecido pesado e estica bastante, se você usar aquela entretela fininha que rasga fácil, o bordado vai repuxar todo e a blusa vai ficar parecendo um saco amassado. O grande segredo para jaquetas e moletons de faculdade é usar uma entretela grossa de recorte que não rasga (Cut-Away) no avesso e uma agulha ponta bola calibre 80. O bordado fica firme, gordinho e dura para sempre!",
    "applications": [
      "Casacos de moletom universitários, agasalhos de turmas de formatura e colegiais",
      "Uniformes corporativos de inverno para indústrias, galpões e frigoríficos",
      "Bordados com aplique de feltro grande e números esportivos em jaquetas de moletom",
      "Bordados em relevo 3D Puff em capuzes e mangas de moletons streetwear"
    ],
    "commonErrors": [
      "Usar entretela rasgável simples fina em moletom grosso (o bordado deforma e cria ondas na primeira lavada)",
      "Apertar o parafuso do bastidor com alicate amassando as fibras grossas (cria uma marca de aro brilhante impossível de tirar)",
      "Bordar com agulha fina 65/9 ou 70/10 (a agulha entorta na malha pesada e quebra na chapa)"
    ],
    "troubleshootingTips": [
      "Para tirar marcas de bastidor em moletom: borrife água com um pouco de amaciante na marca e passe vapor quente com o ferro a 3 cm de distância sem encostar o ferro",
      "Em moletons com apliques de feltro ou tecido: use ponto zigue-zague de fixação com sob-ponto reforçado",
      "Reduza a velocidade da máquina para 650 PPM ao bordar jaquetas de moletom volumosas para evitar oscilações no pantógrafo"
    ],
    "dicaArtrelados": "Para bordar jaquetas de moletom sem deixar marcas de bastidor no peito: use bastidores magnéticos ou monte apenas a entretela de corte no bastidor e cole o moletom por cima com cola spray (técnica da flutuação)! Fica 100% livre de marcas de aro e você ganha agilidade absurda na produção!",
    "voceSabia": "O moletom foi inventado nos Estados Unidos pela empresa Champion em 1919 para manter os trabalhadores de fábricas e atletas aquecidos durante os rigorosos invernos de Nova York!",
    "practicalExercise": "Pegue um pedaço de moletom grosso: monte com entretela de corte no verso e agulha 80/12 ponta bola, borde uma letra grande com ponto cheio e corte a entretela no verso deixando 5 mm: sinta a firmeza e a estabilidade da peça!",
    "quickSummary": "Malharia pesada e felpada que exige entretela de corte (Cut-Away), agulha ponta bola 80/12 e compensação de repuxo generosa.",
    "relatedTerms": [
      "Entretela de Corte (Cut-Away)",
      "Agulha Ponta Bola",
      "Compensação de Repuxo",
      "Flutuação (Float)",
      "Aplique de Feltro"
    ],
    "tags": [
      "m-031",
      "moletom",
      "sweatshirt",
      "fleece",
      "agasalho",
      "inverno",
      "cut-away",
      "ponta bola",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SPORTSWEAR & APPAREL EMBROIDERY TECHNICAL COUNCIL. Heavy Knit Stabilization, Fleeced Fabric Dynamics and Puckering Prevention. Nova York: SATC, 2022.",
      "ARTRELADOS. O Guia do Moletom e Agasalhos Pesados: Estabilização com Cut-Away, Apliques e Bordados Universitários Perfeitos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-032-micro-pontos-fixacao-nos-travamento-lock-stitches-tie",
    "code": "M-032",
    "term": "Micro-Pontos de Fixação e Nós de Travamento (Lock Stitches, Tie-in & Tie-off Stitches)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Da mecânica de pontos de costura e nós de segurança têxtil.",
    "origin": "Rotina algorítmica fundamental de amarração mecânica desenvolvida nos primórdios do bordado automático para ancorar o início e o fim de cada segmento de linha, impedindo que o ponto desmanche após o corte mecânico da faca.",
    "summary": "Sequência de 3 a 5 pontos minúsculos (0,5 mm a 0,8 mm) costurados no início e no final de cada objeto para travar a linha e evitar que o bordado desfie.",
    "definition": "Os Micro-Pontos de Fixação e Nós de Travamento (Tie-In & Tie-Off Stitches / Lock Stitches / Nós de Ancoragem e Arremate) são comandos obrigatórios inseridos no início (Tie-in / Entrada) e no término (Tie-off / Saída) de cada objeto ou bloco de cor na matriz de bordado. O Tie-in executa uma sequência curta de micro-agulhadas para prender a ponta da linha no tecido antes de iniciar o desenho. Já o Tie-off executa um nó de segurança em zigue-zague ou cruzamento de alta fricção imediatamente antes do comando de corte (Trim). Sem esses micro-pontos, a linha superior e a linha da bobina se soltam nas primeiras lavagens, fazendo letras e contornos inteiros desmancharem.",
    "technicalDetails": "Arquitetura e parametrização dos nós de arremate:\n• Comprimento do Micro-Ponto: 0,5 mm a 0,8 mm (comprimento calibrado para não criar bolotas visíveis de linha);\n• Número de Agulhadas: 3 a 4 agulhadas no início (Tie-in) e 4 a 6 agulhadas no final (Tie-off);\n• Estilos de Travamento: Ponto em Linha Reta (Linear Lock), Ponto em 'X' (Cross Lock) e Ponto em Estrela (Star Lock / Bowtie);\n• Ocultação de Nó: No software profissional, o nó de entrada é posicionado sob a primeira coluna de pontos cheios para ficar completamente invisível na frente da peça;\n• Nós para Fios Especiais: Para linhas metálicas e fios escorregadios de rayon, o Tie-off deve ser configurado com 5 pontos em cruz para garantir ancoragem máxima sob fricção de lavagem.",
    "howItWorks": [
      "1. A máquina inicia um novo elemento do desenho (ex: a primeira letra de um nome).",
      "2. Executa automaticamente o Tie-in: costura 3 micro-pontos rápidos de 0,6 mm que ancoram a linha no tecido e na entretela.",
      "3. Costura os sob-pontos e em seguida o ponto cheio volumoso da letra por cima dos micro-pontos, escondendo-os.",
      "4. Ao terminar a última perninha da letra, o software comanda o Tie-off: a agulha dá 4 micro-pontos cruzados de travamento.",
      "5. A faca inferior aciona e corta a linha com segurança.",
      "6. A máquina pula para a letra seguinte.",
      "7. A letra bordada fica permanentemente travada, sem risco de soltar fios mesmo após dezenas de lavagens em máquina de lavar."
    ],
    "beginnerExplanation": "Os micro-pontos de travamento são como o 'nó cego' que a gente dá na linha quando costura à mão! Se você costurar um botão sem dar nó no começo e no fim, a primeira vez que puxar a roupa a linha sai todinha e o botão cai. No bordado computadorizado, a máquina é tão rápida e inteligente que ela dá esse nozinho sozinha: ela dá 3 furinhos minúsculos no mesmo lugar antes de começar a bordar e mais 4 furinhos no final antes da tesourinha cortar a linha. Com isso, o seu bordado fica tão seguro que pode ir na máquina de lavar sem medo nenhum de desmanchar!",
    "applications": [
      "Travamento de início e fim em todas as letras, nomes e monogramas",
      "Ancoragem de contornos finos e detalhes em roupas infantis sujeitas a lavagens pesadas",
      "Fixação de fios metálicos escorregadios que tendem a deslizar e soltar nós",
      "Eliminação de pontas de linha soltas no avesso de toalhas e enxovais de banho"
    ],
    "commonErrors": [
      "Desativar os nós de travamento (Tie-off) no software para economizar pontos (o bordado desmancha na primeira lavagem)",
      "Programar nós gigantescos de 2,0 mm que criam 'caroços' duros e visíveis nas pontas das letras",
      "Cortar os fios com a tesourinha de arremate tão rente ao nó que corta o próprio micro-ponto de segurança"
    ],
    "troubleshootingTips": [
      "No Wilcom ou Embird, verifique sempre se a opção 'Auto Tie-in' e 'Auto Tie-off' está ativada nas propriedades de conectores",
      "Em tecidos finos e delicados (seda/cetim): use o estilo de travamento Linear em vez de cruz para manter o verso plano",
      "Ao aparar fios soltos na frente da peça com a tesourinha: nunca puxe a linha com força bruta; apenas encoste a ponta da tesoura e corte a 1 mm do nó"
    ],
    "dicaArtrelados": "Nunca desative o nó de arremate (Tie-off) das suas matrizes! Aquele nozinho invisível de 4 pontinhos é a garantia de que o nome bordado no jaleco ou na toalhinha de bebê vai durar 10 anos intacto sem desmanchar nem soltar fiozinho nenhum!",
    "voceSabia": "Uma matriz de bordado média de 15.000 pontos com 10 trocas de cor executa mais de 40 sequências de micro-pontos de travamento para garantir que nenhuma ponta de linha se solte!",
    "practicalExercise": "No seu software de bordado: selecione uma letra, vá na aba 'Conectores' (Connectors), observe as opções de Tie-in e Tie-off e simule em velocidade lenta para ver os micro-pontos acontecendo antes e depois da letra!",
    "quickSummary": "Sequência de micro-agulhadas automáticas no início e fim de cada segmento que ancora a linha e impede que o bordado desfie.",
    "relatedTerms": [
      "Corte de Linha (Trim)",
      "Ponto de Salto (Jump)",
      "Conectores",
      "Nó de Arremate",
      "Desmanche de Ponto"
    ],
    "tags": [
      "m-032",
      "micro-pontos",
      "nos de travamento",
      "lock stitch",
      "tie-in",
      "tie-off",
      "arremate",
      "seguranca",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Connectors, Tie-In/Tie-Off Logic and Thread Security Standards. Sydney: Wilcom, 2022.",
      "ARTRELADOS. O Segredo do Avesso Perfeito e Durabilidade Máxima: Conectores, Nós de Travamento e Eliminação de Fios Soltos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-033-modificador-densidade-automatico-density-scaler",
    "code": "M-033",
    "term": "Modificador de Densidade Automático por Proporção (Auto-Density & Density Scaler)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do latim 'densitas' (espessura/concentração) e 'modus' (medida).",
    "origin": "Algoritmo computacional vetorial patenteado pela Wilcom e Pulse Microsystems que recalcula dinamicamente a distância entre passadas de agulha conforme o tamanho ou tipo de tecido é alterado no software.",
    "summary": "Recurso inteligente de software que ajusta automaticamente a quantidade e o espaçamento dos pontos quando uma matriz é ampliada ou reduzida.",
    "definition": "O Modificador de Densidade Automático (Auto-Density Engine / Dynamic Stitch Pitch Scaler / Ajuste Proporcional de Densidade) é o algoritmo de inteligência gráfica nos softwares profissionais de digitalização que mantém a cobertura têxtil perfeita e uniforme independentemente do tamanho do objeto. Quando o desenhista aumenta ou diminui uma forma vetorial (ex: de um logotipo de peito de 8 cm para um bordado de costas de 28 cm), o Auto-Density não apenas estica os pontos existentes, mas recalcula matematicamente o número total de agulhadas, ajustando o espaçamento entre linhas (stitch spacing) e adicionando ou removendo pontos para manter a densidade calibrada (ex: exatamente 0,40 mm).",
    "technicalDetails": "Matemática e operação do modificador de densidade:\n• Cálculo de Espaçamento Fixo (Stitch Spacing): Mantém a distância entre as linhas de satim ou tatami constante (ex: 0,40 mm) independentemente da área total;\n• Densidade por Faixa de Comprimento de Ponto: Em colunas de satim muito largas (acima de 7 mm), o algoritmo divide os pontos automaticamente (Split Satin / Ponto Cheio Fracionado) para evitar fios soltos propensos a enroscar;\n• Densidade em Curvas Fechadas (Corner Density Management): Reduz a densidade de pontos no lado interno de curvas e cantos agudos para evitar o acúmulo excessivo de perfurações no mesmo vértice (evitando quebrar agulhas e cortar o tecido);\n• Ajuste por Tipo de Tecido (Fabric Assistant): Ajusta a densidade base em função do peso têxtil selecionado (ex: malha fina = 0,45 mm; sarja grossa = 0,38 mm);\n• Recálculo de Sob-pontos: Adiciona linhas extras de underlay proporcionalmente quando o objeto é ampliado.",
    "howItWorks": [
      "1. O programador tem um desenho vetorial mestre (.EMB) com 12.000 pontos no tamanho de 9 cm.",
      "2. O cliente solicita o mesmo bordado nas costas de uma jaqueta no tamanho de 25 cm (quase 3 vezes maior).",
      "3. O programador ativa o 'Auto-Density' e digita a nova medida de 25 cm.",
      "4. O software recalcula todas as formas vetoriais: o número total de pontos sobe automaticamente de 12.000 para 48.000 pontos.",
      "5. O espaçamento de 0,40 mm entre as linhas de pontos é preservado rigorosamente em cada pétala e letra.",
      "6. A matriz ampliada é exportada para a máquina de bordar.",
      "7. O bordado nas costas da jaqueta é costurado com cobertura plena, sem frestas abertas e com a mesma densidade e beleza do tamanho pequeno."
    ],
    "beginnerExplanation": "O modificador de densidade automático é o 'cérebro mágico' do programa de bordado! Imagine que você desenhou um coraçãozinho de 3 centímetros que tem 1.000 pontinhos. Se você quiser aumentar esse coração para 20 centímetros sem esse recurso, os mesmos 1.000 pontinhos ficariam todos esticados e espaçados, parecendo uma grade de arame furada onde dá para ver todo o pano por baixo. Com a densidade automática ligada, quando você estica o coração no computador, ele coloca sozinho mais 10.000 novos pontinhos no meio para preencher tudo com linha macia e brilhante! O bordado fica sempre perfeito em qualquer tamanho!",
    "applications": [
      "Redimensionamento de logotipos corporativos de tamanhos pequenos (peito/boné) para tamanhos grandes (costas de jaquetas)",
      "Adaptação instantânea de matrizes para diferentes tipos de tecidos (seda fina, malha, jeans ou sarja)",
      "Eliminação de acúmulo de pontos duros em cantos e vértices de letras pontiagudas",
      "Divisão automática de pontos cheios longos em pontos fracionados seguros (Auto-Split)"
    ],
    "commonErrors": [
      "Aumentar uma matriz no painel da máquina de bordar simples (a máquina estica os pontos sem criar pontos novos, deixando o bordado ralo e feio)",
      "Diminuir um desenho pela metade com a densidade fixa (espreme os pontos e cria uma placa dura que fura o tecido)",
      "Desativar o assistente de cantos inteligentes (Corner Smoothing) em letras com vértices agudos"
    ],
    "troubleshootingTips": [
      "Redimensione suas matrizes SEMPRE dentro do software de bordado no computador com o arquivo original aberto, e nunca na tela da máquina",
      "Verifique a densidade resultante após redimensionar: a faixa ideal de espaçamento para satim e tatami fica entre 0,38 mm e 0,42 mm",
      "Para bordados grandes de costas: ative a função Auto-Split para que nenhum ponto ultrapasse 8,0 mm de comprimento"
    ],
    "dicaArtrelados": "Precisa aumentar um bordado para as costas de um jaleco ou jaqueta? Abra a matriz no seu programa de computador com o arquivo mestre original! O programa vai recalcular a densidade automaticamente e criar milhares de novos pontinhos no lugar certo. Se você tentar aumentar direto na máquina, o bordado vai ficar ralo, torto e com o tecido aparecendo por baixo!",
    "voceSabia": "Os algoritmos de densidade dinâmica foram desenvolvidos originalmente na década de 1980 utilizando equações de interpolação Bézier da engenharia aeronáutica para calcular a curvatura de asas de aviões!",
    "practicalExercise": "No seu software: selecione um desenho vetorial de 5 cm, duplique-o e aumente a cópia para 15 cm com o Auto-Density ativo. Observe na barra de status como a contagem de pontos aumenta proporcionalmente mantendo a distância exata entre as agulhadas!",
    "quickSummary": "Algoritmo inteligente de software que recalcula dinamicamente a quantidade de pontos ao redimensionar formas para manter a densidade constante.",
    "relatedTerms": [
      "Densidade de Ponto",
      "Redimensionamento",
      "Auto-Split",
      "Stitch Spacing",
      "Wilcom EMB"
    ],
    "tags": [
      "m-033",
      "modificador de densidade",
      "auto-density",
      "redimensionamento",
      "wilcom",
      "stitch spacing",
      "proporcao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Automatic Density Management, Corner Stitch Compensation and Scaling Algorithms. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Matemática da Densidade Perfeita: Espaçamento de Pontos, Redimensionamento Seguro e Algoritmos Vetoriais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-034-mola-prensa-fio-suporte-linhas-thread-retainer-spring",
    "code": "M-034",
    "term": "Mola Prensa-Fio do Suporte de Linhas (Thread Retainer Spring / Clip)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino / Da cinemática mecânica e retenção elástica de filamentos.",
    "origin": "Componente em mola espiral ou lâmina flexível de aço instalado na árvore de linha e na barra frontal do cabeçote em máquinas multiagulhas para prender as pontas dos fios inativos após o corte automático.",
    "summary": "Mola metálica ou grampo flexível que segura firmemente a ponta cortada das linhas inativas no cabeçote para evitar que desfiem ou enrosquem na agulha ativa.",
    "definition": "A Mola Prensa-Fio do Suporte de Linhas (Thread Retainer Spring / Upper Thread Holding Clip / Mola Trava-Linha do Cabeçote) é um elemento mecânico de retenção elástica montado na barra frontal de cada agulha em máquinas de bordar multiagulhas e industriais. Sua função essencial é segurar com leve pressão a ponta da linha superior que acabou de ser cortada pela faca automática durante a troca de cor. Ao prender a pontinha da linha inativa, a mola impede que o fio fique solto balançando no ar, enrosque no calcador da agulha vizinha ou se desencaixe dos discos tensores superiores pela vibração do cabeçote a 1.000 PPM.",
    "technicalDetails": "Engenharia e operação da mola de retenção de linha:\n• Material: Aço-mola inoxidável de alta flexibilidade ou polímero de uretano antiestático;\n• Pressão de Retenção: Calibrada entre 5 gf e 10 gf (suficiente para segurar a ponta da linha sem esmagar ou desfiar os filamentos);\n• Interação com o Solenoide Puxador (Picker): Após o corte da linha, o dispositivo puxador (Thread Picker) puxa a ponta da linha superior e a insere entre as espiras da mola prensa-fio;\n• Posicionamento Estratégico: Localizada logo acima de cada barra de agulha e também no suporte superior da árvore de cones de linha;\n• Sintomas de Mola Frouxa ou Suja: A ponta da linha cortada cai solta sobre o tecido, é costurada por cima pela agulha seguinte gerando 'fios fantasmas' ou escapa do olho da agulha no início da próxima cor.",
    "howItWorks": [
      "1. A máquina termina de costurar com a agulha 1 (linha azul).",
      "2. A faca inferior aciona e corta a linha.",
      "3. O gancho mecânico (picker) puxa a ponta superior da linha azul para trás.",
      "4. A ponta da linha azul encaixa entre as espiras da mola prensa-fio frontal.",
      "5. A mola segura a linha azul firme e esticadinha.",
      "6. O cabeçote translada e a agulha 2 (linha vermelha) começa a costurar.",
      "7. A linha azul permanece segura e quieta no seu lugar, sem encostar na agulha vermelha e pronta para quando for chamada novamente."
    ],
    "beginnerExplanation": "A mola prensa-fio é aquele 'prendedorzinho inteligente' que fica em cima de cada agulha nas máquinas de várias agulhas! Sabe quando a máquina corta a linha de uma cor para começar a outra? Se ninguém segurasse a pontinha da linha que foi cortada, o fio ia ficar voando solto e a máquina ia costurar por cima dele, deixando a sua roupa cheia de fios embolados. Essa molinha de aço segura a pontinha da linha cortada com todo o cuidado, mantendo tudo arrumadinho e no lugar certo até a hora daquela cor ser usada de novo!",
    "applications": [
      "Retenção segura de pontas de linha após o corte automático em máquinas multiagulhas",
      "Prevenção de nós acidentais e entrelaçamento de fios no cabeçote em alta rotação",
      "Eliminação de 'fios fantasmas' costurados por baixo de outras cores no tecido",
      "Manutenção da linha pronta e esticada para a próxima reinicialização de costura"
    ],
    "commonErrors": [
      "Deixar fiapos e restos de linha acumulados dentro das espiras da mola prensa-fio (a mola para de segurar a linha nova)",
      "Puxar a linha com força bruta entortando a mola de retenção com alicate",
      "Esquecer de encaixar a ponta da linha na mola prensa-fio ao abastecer manualmente uma nova agulha"
    ],
    "troubleshootingTips": [
      "Passe uma escovinha seca entre as espiras da mola prensa-fio toda semana para retirar poeira acumulada",
      "Se a linha de uma agulha específica sempre escapa do olho da agulha na hora que a cor começa: verifique se a mola prensa-fio não está frouxa demais",
      "Ao passar a linha em uma máquina multiagulhas, passe a ponta pelo olho da agulha e prenda a sobra na mola frontal"
    ],
    "dicaArtrelados": "Toda vez que você for colocar um cone novo na sua máquina multiagulhas, passe a linha pela agulha e prenda a pontinha que sobrou na molinha prensa-fio na frente do cabeçote! Isso evita que a linha escape da agulha no primeiro ponto e garante um início de bordado 100% perfeito!",
    "voceSabia": "Em máquinas industriais de alta velocidade, a vibração gerada pelo cabeçote a 1.200 rotações por minuto é tão intensa que uma ponta de linha solta sem retenção dança no ar como um chicote, podendo se enrolar na agulha vizinha em menos de 1 segundo!",
    "practicalExercise": "Olhe de perto o cabeçote da sua máquina multiagulhas (ou de um ateliê parceiro): localize as pequenas molas espirais ou grampos de aço acima das agulhas e veja como cada linha inativa fica presa suavemente nelas!",
    "quickSummary": "Mola flexível de aço montada no cabeçote que retém a ponta da linha inativa após o corte, evitando emaranhados e fios soltos.",
    "relatedTerms": [
      "Troca Automática de Cores",
      "Corte Automático (Trim)",
      "Cabeçote Multiagulhas",
      "Puxador de Linha (Picker)",
      "Fios Fantasmas"
    ],
    "tags": [
      "m-034",
      "mola prensa-fio",
      "thread retainer",
      "retentor de linha",
      "multiagulhas",
      "cabecote",
      "corte de linha",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN INDUSTRIAL MACHINERY. Thread Retainer Springs, Upper Holding Assemblies and Trimming Mechanics. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Mecanismos Frontais do Cabeçote: Molas Retentoras, Guias de Fio, Sensores e Manutenção Preventiva. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-035-matriz-multicamadas-sobreposicao-compensacao-multi-layer",
    "code": "M-035",
    "term": "Matriz Multicamadas e Sobreposição com Compensação (Multi-Layer Stitching & Push-Pull Shift)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Do latim 'multus' (muito), 'stratum' (camada) e 'compensatio'.",
    "origin": "Técnica de arquitetura de pontos desenvolvida para desenhos artísticos complexos com sobreposição de elementos tridimensionais (animais, paisagens e logotipos com relevo e sombra), compensando a deformação física cumulativa do tecido sob múltiplas camadas de costura.",
    "summary": "Estratégia avançada de puncionamento que gerencia a ordem e a densidade de camadas sobrepostas de pontos para evitar rigidez e desvios de encaixe.",
    "definition": "A Matriz Multicamadas e Gestão de Sobreposições (Multi-Layer Embroidery Architecture / Layer Stitch Sequencing & Shift Compensation) é a metodologia avançada de programação em que múltiplos planos de bordado (como fundos, sombras, elementos intermediários e contornos superiores) são costurados uns sobre os outros de forma estruturada. Como cada camada de pontos adicionada tensiona as fibras do tecido e altera sua elasticidade, camadas sucessivas sofrem o fenômeno físico de deslocamento mecânico (Push-Pull Shift). Para evitar que o bordado vire uma 'placa dura de concreto' ou que os contornos finais saiam desencaixados, o programador deve graduar as densidades das camadas inferiores (reduzindo-as em 20% a 30%), alternar os ângulos de ponto em 45° a 90° entre camadas e aplicar compensação de sobreposição milimétrica.",
    "technicalDetails": "Princípios físicos e programação de matrizes multicamadas:\n• Graduação de Densidade: Camada 1 (Base/Fundo) = Densidade aberta de 0,55 mm a 0,65 mm; Camada 2 (Detalhe intermediário) = Densidade média de 0,45 mm; Camada 3 (Relevo superior) = Densidade cheia padrão de 0,38 mm a 0,40 mm;\n• Cruzamento de Ângulos: Se a camada 1 for costurada a 45°, a camada 2 deve ser costurada a 135° ou 90° para evitar que as agulhadas da segunda camada afundem nos mesmos vãos da primeira;\n• Compensação de Deslocamento Cumulativo (Cumulative Push-Pull): Conforme o tecido é puxado pelas primeiras 20.000 agulhadas, ele encolhe na largura e expande no comprimento; os contornos finais devem ser digitalizados ligeiramente deslocados no software para casar perfeitamente no tecido físico real;\n• Remoção de Pontos Ocultos (Remove Hidden Stitches): Eliminação automática de pontos sob áreas onde uma camada 100% densa cobrirá totalmente a anterior, aliviando o peso e o consumo de linha da matriz.",
    "howItWorks": [
      "1. O programador analisa o desenho complexo (ex: a pelagem de um leão realista com 5 tons de marrom e dourado sobrepostos).",
      "2. Cria a camada base de fundo com densidade aberta e pontos longos.",
      "3. Configura o ângulo das agulhadas em 45°.",
      "4. Desenha a segunda camada de pelos intermediários com ângulo a 90° e densidade calibrada.",
      "5. Aplica a ferramenta 'Remover Sobreposições Ocultas' para que o centro não acumule 5 camadas maciças de linha.",
      "6. Digitaliza os contornos finais pretos com compensação de repuxo extra de 0,40 mm para absorver a retração do tecido.",
      "7. A máquina de bordar costura a matriz: as camadas se fundem com suavidade, criando relevo, profundidade artística e toque macio e flexível."
    ],
    "beginnerExplanation": "Bordar um desenho cheio de camadas (como a carinha de um bichinho peludo, uma flor com várias pétalas e sombras, ou um brasão sofisticado) é como pintar um quadro a óleo! Se você colocar muita tinta pesada em cima de tinta pesada, a tela vira uma crosta grossa e racha. No bordado computadorizado, quando colocamos uma cor em cima da outra, a camada de baixo precisa ser mais levinha e costurada em um ângulo diferente. Assim, as cores se misturam suavemente, a roupa continua macia e gostosa de usar, e os contornos pretos finais encaixam com perfeição cirúrgica no desenho!",
    "applications": [
      "Bordado realista de animais (pets, leões, cavalos e pássaros) com pelagem em camadas",
      "Brasões aristocráticos e escudos heráldicos com fundos texturizados e relevos dourados",
      "Painéis de arte sacra e retratos humanos com degradês de pele e vestes drapeadas",
      "Bordados corporativos de alta densidade em jaquetas esportivas e jaquetas de couro"
    ],
    "commonErrors": [
      "Colocar 3 ou mais camadas de ponto tatami com densidade máxima (0,38 mm) umas sobre as outras (o bordado fica duro como tábua e quebra agulhas)",
      "Usar o mesmo ângulo de ponto em todas as camadas sobrepostas (as linhas da camada de cima afundam nos buracos da camada de baixo)",
      "Digitalizar o contorno final exatamente sobre a linha do vetor na tela do computador sem compensar a retração que o tecido sofreu durante o bordado"
    ],
    "troubleshootingTips": [
      "Use sempre a função 'Remover Pontos Ocultos' (Remove Underlyings / Overlaps) no software para economizar pontos e evitar que o bordado fique duro",
      "Alterne sempre os ângulos de ponto entre camadas sobrepostas (diferença mínima de 30° a 45° entre camadas)",
      "Em bordados com mais de 30.000 pontos sobrepostos: use entretela de corte reforçada (Cut-Away 80 g/m²) para sustentar a retração sem enrugar o tecido"
    ],
    "dicaArtrelados": "Vai digitalizar um desenho com sombras e várias cores sobrepostas? A regra de ouro é: reduza a densidade da camada de baixo em 30% e cruze o ângulo dos pontos! O bordado vai ficar incrivelmente macio ao toque, as cores vão se fundir com perfeição e a sua máquina não vai sofrer com acúmulo de agulhadas duras!",
    "voceSabia": "Nas grandes tapeçarias renascentistas dos séculos XVI e XVII, os mestres bordadeiros sobrepunham até 8 camadas de fios de seda ultrafinos em ângulos cruzados para criar a ilusão de relevo tridimensional sob a luz de velas!",
    "practicalExercise": "No seu software, desenhe dois círculos que se sobrepõem pela metade: aplique a ferramenta 'Remover Sobreposição' no círculo de baixo, coloque ângulos de 45° e 135° e borde em um retalho: observe como a área de junção fica plana e sem calombos duros!",
    "quickSummary": "Estratégia avançada de puncionamento que gradua densidades e cruza ângulos em camadas sobrepostas para evitar rigidez e garantir o encaixe perfeito.",
    "relatedTerms": [
      "Ângulo de Ponto",
      "Push-Pull Compensation",
      "Bordado Realista",
      "Densidade de Ponto",
      "Ponto Tatami"
    ],
    "tags": [
      "m-035",
      "matriz multicamadas",
      "sobreposicao",
      "push-pull",
      "angulos cruzados",
      "relevo",
      "realismo",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Multi-Layer Stitching Architecture, Overlap Management and Push-Pull Displacement. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Engenharia das Matrizes Multicamadas: Densidades Graduadas, Ângulos Cruzados, Bordado Realista e Maciez Têxtil. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-036-materia-prima-seda-pura-musseline-silk-chiffon",
    "code": "M-036",
    "term": "Matéria-Prima: Seda Pura e Musseline Fina (Pure Silk, Chiffon & Georgette Substrates)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Do latim 'saeta' (fio de seda) e da cidade iraquiana de Mosul (musseline).",
    "origin": "Fibras proteicas naturais nobres produzidas pelo bicho-da-seda (*Bombyx mori*) na China Antiga desde 2.700 a.C., associadas ao ápice do luxo na alta-costura global e alfaiataria cerimonial.",
    "summary": "Tecidos nobres de extrema leveza, fluidez e delicadeza que exigem agulha cirúrgica Microtex 60/8 ou 65/9, entretela hidrossolúvel e densidade aliviada.",
    "definition": "A Seda Pura e a Musseline de Seda (Pure Silk Habotai, Silk Satin, Chiffon, Organza & Georgette) constituem a categoria mais nobre, delicada e tecnicamente exigente de substratos têxteis para o bordado computadorizado. Compostos por filamentos proteicos naturais contínuos de fibroína e sericina, esses tecidos possuem espessura microscópica, alta fluidez e baixíssima resistência mecânica à perfuração por agulhas grossas. Qualquer agulha inadequada ou tensão excessiva corta os filamentos de seda, repuxa o tecido e causa furos esgarçados irreversíveis. O bordado de alta-costura em seda pura exige: agulha Microtex ultrafina (60/8 ou 65/9), linhas finas de filamento contínuo (poliéster 60wt ou seda 50wt), estabilização com entretelas hidrossolúveis de lavagem a frio e matrizes com densidade aliviada e sob-pontos leves.",
    "technicalDetails": "Propriedades e parametrização para bordados de alta-costura em seda:\n• Espessura Têxtil: Fios de 10 a 14 denier com gramaturas ultraleves de 20 g/m² a 60 g/m²;\n• Agulha Obrigatória: Agulha Schmetz Microtex (130/705 H-M calibre 60/8 ou 65/9) com ponta aguda extrema (SPI);\n• Estabilização Segura: Duas camadas de entretela hidrossolúvel de lavagem a frio (tipo Solvy / Aquafilm) no verso; NUNCA usar entretela rasgável áspera (as fibras de celulose arranham a seda);\n• Densidade de Matriz: Reduzida em 20% (espaçamento aberto de 0,46 mm a 0,55 mm) com sob-ponto Center Walk levíssimo;\n• Montagem no Bastidor: Uso obrigatório da técnica de flutuação (prender apenas o filme hidrossolúvel no bastidor e colar a seda delicadamente com fita adesiva de papel nas bordas ou spray leve);\n• Remoção do Estabilizador: Enxágue suave em água morna neutra e secagem à sombra entre duas toalhas de algodão sem torcer.",
    "howItWorks": [
      "1. A estilista/bordadeira prepara o vestido de seda pura ou véu de noiva em musseline.",
      "2. Prende duas folhas de filme hidrossolúvel resistente no bastidor de bordar bem esticadas como um tambor.",
      "3. Posiciona a seda pura suavemente sobre o plástico no bastidor, fixando as bordas externas com fita crepe de papel (sem prender a seda no aro de plástico do bastidor).",
      "4. Instala uma agulha Microtex 60/8 nova e passa linha fina 60wt ou filamento de seda pura.",
      "5. Reduz a tensão superior para 90 gf a 100 gf e reduz a velocidade da máquina para 400 PPM.",
      "6. A máquina executa o bordado: a agulha cirúrgica penetra a seda sem cortar as fibras e o plástico sustenta os pontos.",
      "7. Ao término, a peça é imersa em água morna: a entretela dissolve 100% sem deixar resíduos.",
      "8. O vestido de seda é finalizado com bordados flutuantes, límpidos e com caimento nobre de alta-costura parisiense."
    ],
    "beginnerExplanation": "Bordar em seda pura, musseline e véus de noiva é o trabalho mais chique e valioso que uma bordadeira pode fazer, mas exige muito carinho! A seda é tão fininha e delicada que uma agulha comum pode furar e rasgar o tecido na hora. Para bordar seda como os grandes estilistas de Paris fazem, você precisa de 3 segredinhos: 1) usar uma agulha bem fininha e pontuda (agulha Microtex 60 ou 65); 2) usar entretela que derrete na água (hidrossolúvel); e 3) nunca apertar a seda dentro do aro do bastidor (prenda só o plástico no bastidor e cole a seda por cima com fita adesiva)! O bordado sai leve, macio e deslumbrante!",
    "applications": [
      "Vestidos de noiva, véus de tule de seda e mantilhas clericais de alta-costura",
      "Echarpes, lenços de seda pura pintados à mão com monogramas personalizados",
      "Camisolas de luxo e lingeries finas em musseline e cetim de seda natural",
      "Figurinos teatrais nobres, trajes de gala e alfaiataria cerimonial sob medida"
    ],
    "commonErrors": [
      "Prender a seda pura diretamente no aro de plástico do bastidor apertando com parafuso (esgarça os fios e queima o tecido)",
      "Usar agulha grossa universal 80/12 ou 90/14 (deixa buracos gigantescos permanentes na seda)",
      "Usar entretela rasgável comum (ao tentar rasgar a entretela dura, a seda estica e rasga junto)"
    ],
    "troubleshootingTips": [
      "Use SEMPRE agulha Microtex novinha: passe a ponta da unha na agulha antes de colocar na máquina para garantir que não haja nenhuma micro-rebarba",
      "Dissolva a entretela hidrossolúvel em água morna com algumas gotas de sabão neutro para roupas delicadas",
      "Borde sempre com a velocidade da máquina reduzida (400 a 450 PPM) para evitar que o tecido fino vibre no ar"
    ],
    "dicaArtrelados": "Para bordar véus de noiva e vestidos de seda pura sem correr nenhum risco: prenda APENAS a entretela hidrossolúvel no bastidor, passe fita adesiva suave de papel nas quatro bordas prendendo a seda por cima e use agulha Microtex 65/9! A seda fica solta, macia e o bordado sai com a perfeição das passarelas de Milão e Paris!",
    "voceSabia": "Durante a Dinastia Han na China Antiga (206 a.C. – 220 d.C.), o segredo da produção da seda pura era guardado sob pena de morte por decreto imperial; um único quilo de seda bordada chegava a valer o seu peso equivalente em barras de ouro puro!",
    "practicalExercise": "Pegue um pedaço de tecido fininho de musseline ou cetim leve: monte com entretela hidrossolúvel no bastidor, coloque agulha fina Microtex 65/9 e borde um pequeno ramo floral com velocidade baixa: lave em uma bacia com água morna e veja a mágica do bordado flutuando no tecido limpo!",
    "quickSummary": "Substratos têxteis de luxo e extrema finura que exigem agulha cirúrgica Microtex, entretela hidrossolúvel e fixação sem pressão de bastidor.",
    "relatedTerms": [
      "Agulha Microtex",
      "Entretela Hidrossolúvel",
      "Flutuação (Float)",
      "Alta Costura",
      "Musseline"
    ],
    "tags": [
      "m-036",
      "seda pura",
      "musseline",
      "chiffon",
      "alta costura",
      "noiva",
      "microtex",
      "hidrossoluvel",
      "luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HAUTE COUTURE EMBROIDERY FEDERATION. Silk Substrates, Fine Filament Needles and Hydro-Soluble Framing Standards. Paris: HREF, 2022.",
      "ARTRELADOS. A Alta-Costura no Bastidor: Sedas Puras, Musselines, Véus de Noiva e Técnicas de Bordado Invisível. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-055-matriz-preenchimento-degrade-circular-radial-spiral",
    "code": "M-055",
    "term": "Matriz com Preenchimento Degradê Circular e Radial (Radial, Spiral & Circular Gradient Fill Digitizing)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino / Do latim 'radialis' (em raio) e do francês 'dégradé' (gradação de tom).",
    "origin": "Evolução da programação vetorial artística desenvolvida para criar efeitos tridimensionais esféricos (como sóis radiantes, olhos realistas, flores circulares e medalhões) utilizando curvas em espiral e densidades radiantes centrífugas.",
    "summary": "Preenchimento artístico circular ou em espiral com variação progressiva de densidade e cores que cria ilusão de volume esférico e profundidade 3D.",
    "definition": "A Matriz com Preenchimento Degradê Circular e Radial (Radial Stitch Architecture / Spiral & Circular Gradient Fill / Ponto Tatami em Espiral com Fusão de Cores) é a técnica avançada de puncionamento onde os pontos de bordado não seguem linhas retas paralelas convencionais, mas são gerados em trajetórias circulares concêntricas, radiais (do centro para as bordas em raios) ou em espiral contínua. Ao combinar essa geometria circular com a variação matemática de densidade (Gradient / Accordion Stitch) entre duas ou mais cores sobrepostas, cria-se uma transição cromática orgânica e esférica impressionante, simulando esferas tridimensionais brilhantes, íris de olhos hiper-realistas, miolos de flores de girassol e halos luminosos.",
    "technicalDetails": "Geometria e parametrização do degradê circular:\n• Tipos de Trajetória: Ponto Radial (linhas divergentes a partir de um ponto focal central), Ponto em Espiral Consecutiva (trajetória única em caracol do centro para a borda) e Círculos Concêntricos;\n• Modulação de Densidade de Fusão: Cor A (Centro) inicia com espaçamento fechado de 0,38 mm e abre progressivamente até 1,20 mm na borda externa; Cor B (Borda) inicia aberta com 1,20 mm e fecha até 0,38 mm no perímetro externo;\n• Intercalação de Pontos: Os pontos das duas cores se entrelaçam nos mesmos raios angulares, eliminando qualquer linha divisória nítida;\n• Controle de Comprimento de Ponto: Ajuste de 'Auto-Shortening' (encurtamento automático de pontos no polo central) obrigatório para evitar o acúmulo excessivo de agulhadas no centro do círculo (evita furar o tecido e quebrar a agulha);\n• Substrato Recomendado: Tecidos estáveis como sarja, brim ou linho com entretela de corte (Cut-Away) firme para suportar a torção circular das fibras.",
    "howItWorks": [
      "1. O programador desenha uma forma circular perfeita ou pétala radial no software vetorial.",
      "2. Seleciona o tipo de preenchimento 'Radial Stitch' ou 'Spiral Fill' e define o ponto focal no centro.",
      "3. Ativa a ferramenta de 'Densidade Gradiente' (Gradient Fill) para a Cor 1 (ex: amarelo-ouro no centro).",
      "4. Duplica o objeto para a Cor 2 (ex: laranja-fogo na borda) e inverte o sentido do gradiente de densidade.",
      "5. Ativa o filtro de alívio central para que o polo não acumule perfurações repetidas.",
      "6. A máquina de bordar costura a primeira cor em raios que se abrem, e logo em seguida a segunda cor nos mesmos vãos.",
      "7. O resultado é um círculo reluzente com efeito de luz, sombra e volume esférico tridimensional perfeito."
    ],
    "beginnerExplanation": "O degradê circular é aquele efeito deslumbrante onde um círculo bordado parece uma 'esfera 3D brilhante' ou o 'miolo de um girassol' que muda de cor suavemente do centro para fora! Em vez de a máquina bordar em linhas retas normais, ela vai bordando em círculos ou em raios, como os raios do sol. No meinho ela coloca bastante pontinhos de uma cor clara e vai abrindo espaço, e a cor escura de fora vai entrando nesses espacinhos. As duas cores se abraçam com tanta suavidade que o bordado parece uma pintura viva e iluminada!",
    "applications": [
      "Bordado realista de olhos de animais e personagens (íris realista com brilho pupilar)",
      "Miolos de girassóis, rosas, mandalas místicas e pétalas florais circulares",
      "Efeitos de sol radiante, chamas, explosões cósmicas e brasões circulares",
      "Logotipos corporativos modernos com ícones redondos e transições de cor 3D"
    ],
    "commonErrors": [
      "Esquecer de ativar o encurtamento central de pontos (o centro do círculo vira um caroço duro e fura o tecido)",
      "Usar cores com contrastes extremos sem uma cor intermediária de transição",
      "Bordar preenchimentos radiais densos em malhas elásticas finas sem entretela de corte reforçada"
    ],
    "troubleshootingTips": [
      "Ative sempre a função 'Center Hole' ou 'Auto Point Shortening' para manter o centro do círculo leve e plano",
      "Para um degradê perfeito entre cores distantes (ex: do branco ao azul-marinho): use uma terceira cor intermediária (azul-celeste) no meio do caminho",
      "Use linhas de bordar brilhantes de poliéster trilobal para que a reflexão em espiral crie um efeito óptico cintilante incrível"
    ],
    "dicaArtrelados": "Quer fazer o miolo de uma flor ou o sol parecer que está brilhando de verdade? Use o preenchimento Radial com degradê de amarelo no centro para laranja na borda! O efeito de luz tridimensional é tão impressionante que todo mundo vai querer passar a mão para ver como foi feito!",
    "voceSabia": "A geometria de preenchimento em espiral baseada no número de ouro (Proporção Áurea de Fibonacci / 1,618) é a mesma estrutura matemática utilizada pela natureza para distribuir as sementes no centro dos girassóis reais!",
    "practicalExercise": "No seu software, desenhe um círculo de 6 cm, aplique a ferramenta 'Preenchimento Radial' com amarelo no centro abrindo a densidade, sobreponha uma cópia com laranja fechando para a borda e borde em um retalho: veja o efeito tridimensional!",
    "quickSummary": "Técnica vetorial que gera pontos em raios e espirais com densidades graduadas para criar efeitos esféricos e transições cromáticas 3D.",
    "relatedTerms": [
      "Preenchimento Radial",
      "Degradê de Pontos",
      "Proporção Áurea",
      "Auto-Shortening",
      "Bordado Realista"
    ],
    "tags": [
      "m-055",
      "degrade circular",
      "preenchimento radial",
      "espiral",
      "girassol",
      "iris realista",
      "3d",
      "gradiente",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Radial Stitch Digitizing, Curved Coordinates and Gradient Mesh Algorithms. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Magia dos Degradês Radiais e Espirais: Efeitos Tridimensionais, Íris Realistas, Mandalas e Volumes Esculturais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-056-modulo-corta-fio-chapa-agulha-faca-movel-trimmer",
    "code": "M-056",
    "term": "Módulo Corta-Fio de Chapa de Agulha e Faca Móvel (Underbed Thread Trimmer & Movable Knife Mechanism)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino / Do corte mecânico automatizado sob a chapa da lançadeira.",
    "origin": "Mecanismo mecatrônico automatizado introduzido no final do século XX pela Tajima e Brother que revolucionou a produtividade do bordado computadorizado ao cortar as linhas superior e inferior sob a chapa de agulha sem intervenção humana.",
    "summary": "Sistema mecatrônico de faca móvel e contra-faca fixa instalado sob a chapa de agulha que apara automaticamente a linha superior e da bobina após saltos e trocas de cor.",
    "definition": "O Módulo Corta-Fio Automático sob a Chapa de Agulha (Underbed Thread Trimmer / Movable & Fixed Knife Mechanism / Sistema de Faca e Contra-Faca do Cortador) é o conjunto de alta precisão eletromecânica localizado no interior da base da máquina, logo abaixo da chapa de agulha e adjacente à lançadeira. Acionado por um solenoide de alta velocidade ou servomotor de corte, o mecanismo projeta uma lâmina curva afiada (Faca Móvel / Movable Knife) que laça simultaneamente a linha superior e a linha da bobina, puxa os fios contra uma lâmina fixa retificada de aço-tungstênio (Contra-Faca / Fixed Knife) e os corta rente ao verso do tecido, retendo a ponta da bobina para o próximo ciclo.",
    "technicalDetails": "Engenharia de precisão e calibração do conjunto de corte:\n• Componentes Principais: Faca Móvel (com bico pescador de laçadas), Contra-Faca Fixa, Mola Retentora de Fio de Bobina e Solenoide de Atuação Linear;\n• Ciclo de Corte: 1) A máquina desacelera e para com a agulha acima do tecido; 2) O solenoide dispara e a faca móvel avança cruzando a área da lançadeira; 3) O bico da faca móvel captura a linha da agulha e a linha da bobina; 4) A faca recua prensando e cortando os dois fios contra a contra-faca fixa; 5) A mola retém a ponta da bobina com 25 mm a 30 mm de comprimento;\n• Material das Lâminas: Aço rápido temperado (HSS) ou metal duro (Carboneto de Tungstênio) com dureza superior a 62 HRC;\n• Calibração de Pressão da Faca: Parafuso micrométrico de pressão de corte; pressão excessiva gasta a lâmina prematuramente; pressão insuficiente apenas mastiga a linha sem cortar;\n• Sintomas de Faca Cega ou Suja: A máquina tenta cortar a linha mas deixa fios longos puxados pelo bastidor, ou acumula bolotas de linha dentro da chapa travando a lançadeira.",
    "howItWorks": [
      "1. A máquina conclui um elemento do desenho (ex: a letra 'A' de um texto).",
      "2. O comando de parada e corte (Trim Code) é disparado pela matriz.",
      "3. A agulha sobe completamente para a posição de segurança superior.",
      "4. O solenoide inferior é acionado em 40 milissegundos: a faca móvel desliza por baixo da chapa de agulha.",
      "5. A faca móvel fisga com seu gancho a linha superior e a linha da bobina juntas.",
      "6. A lâmina recua e cisalha os dois fios contra a borda afiada da contra-faca fixa.",
      "7. A mola elástica prende a pontinha da linha da bobina para não escapar.",
      "8. O pantógrafo salta livremente para a letra seguinte sem arrastar nenhum fio por cima do tecido."
    ],
    "beginnerExplanation": "O módulo corta-fio é a 'tesourinha invisível' que fica escondida embaixo da chapa da sua máquina! Sabe quando a máquina termina de bordar uma letrinha e pula para a próxima? Se não tivesse esse cortador automático, ela ia arrastar uma linha esticada de uma letra para a outra e você teria que ficar cortando centenas de fiozinhos na mão com a tesoura depois. Essa pecinha tem duas lâminas de aço super afiadas que se encontram num estalo, cortam a linha por baixo do pano e seguram a pontinha pronta para a próxima letra! É o que deixa o bordado limpo, profissional e pronto para usar!",
    "applications": [
      "Corte automático de linha entre letras, palavras e elementos de bordado",
      "Corte de fios durante trocas automáticas de cores em máquinas multiagulhas",
      "Eliminação de fios de salto (Jump Stitches) no avesso e na frente da peça",
      "Aumento drástico de produtividade e redução de mão de obra de acabamento manual"
    ],
    "commonErrors": [
      "Deixar pedaços de linha e poeira acumulados na área da faca (a faca trava aberta e a máquina para com erro de corte)",
      "Puxar o tecido com força para cima durante o barulho do estalo do corte (pode entortar o braço da faca móvel)",
      "Usar linhas grossas fora do padrão sem reajustar a pressão do cortador"
    ],
    "troubleshootingTips": [
      "Limpe a área sob a chapa de agulha com pincel seco ou aspirador a cada troca de bobina para retirar poeira acumulada na faca",
      "Se a máquina está 'mastigando' a linha em vez de cortar: aperte 1/8 de volta no parafuso de pressão da contra-faca ou troque a lâmina",
      "Mantenha a faca lubrificada e livre de restos de cola spray de entretelas adesivas"
    ],
    "dicaArtrelados": "A máquina começou a dar erro de 'Falha de Corte' e deixar fios compridos soltos? Retire a chapa de agulha: você vai encontrar um montinho de poeira e pedacinhos de linha prensados em volta da faquinha! Limpe com um pincel e passe um pano com álcool isopropílico na lâmina: a faquinha volta a cortar afiada como uma gilete!",
    "voceSabia": "Antes da invenção dos cortadores automáticos de linha nas máquinas de bordar na década de 1980, as fábricas de bordado precisavam de equipes inteiras de dezenas de pessoas trabalhando apenas com tesourinhas para cortar manualmente os fios de salto de cada peça!",
    "practicalExercise": "Retire a chapa de agulha da sua máquina (com ela desligada), localize as duas lâminas de metal prateadas ao lado da lançadeira e veja como a faquinha desliza para cortar a linha!",
    "quickSummary": "Mecanismo eletromecânico sob a chapa de agulha com faca móvel e fixa que corta as linhas superior e inferior automaticamente.",
    "relatedTerms": [
      "Corte Automático (Trim)",
      "Faca Móvel",
      "Contra-Faca Fixa",
      "Ponto de Salto (Jump)",
      "Solenoide de Corte"
    ],
    "tags": [
      "m-056",
      "modulo corta-fio",
      "trimmer",
      "faca movel",
      "contra-faca",
      "chapa de agulha",
      "corte automatico",
      "limpeza",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES SEWING & EMBROIDERY DIVISION. Underbed Thread Trimmer Maintenance, Knife Replacement and Timing Calibration. Nagoia: Brother, 2022.",
      "ARTRELADOS. Manutenção e Regulagem do Sistema Corta-Fio: Facas Móveis, Contra-Facas, Ajuste de Pressão e Eliminação de Fios Soltos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-057-matriz-falso-richelieu-cutwork-bastidor-embroidery",
    "code": "M-057",
    "term": "Matriz de Falso Richelieu / Cutwork no Bastidor (Embroidered Cutwork & Faux Richelieu Digitizing)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino / Do Cardeal de Richelieu (França, séc. XVII) e do inglês 'cutwork' (trabalho recortado).",
    "origin": "Técnica nobre da realeza europeia do século XVII caracterizada por orifícios recortados no tecido com pontes de fios tecidas no ar (brandeburgos), adaptada com perfeição automatizada para máquinas de bordar modernas usando entretelas hidrossolúveis.",
    "summary": "Técnica tradicional de bordado vazado com orifícios recortados e pontes de ligação em ponto cheio (caseado) feitas inteiramente no bastidor.",
    "definition": "O Bordado Richelieu e Cutwork Computadorizado (Automated Cutwork & Richelieu Embroidery / Bordado Vazado Tradicional / Rendas com Pontes de Sustentação) é uma das técnicas mais nobres, elegantes e tradicionais do enxoval de cama, mesa e banho. Caracteriza-se pela criação de orifícios geométricos ou florais recortados no tecido, emoldurados por um ponto cheio caseado resistente e unidos entre si por 'pontes' aéreas de sustentação (ilhoses, trancinhas e cordões). No bordado computadorizado moderno, a matriz é digitalizada em 4 etapas precisas: 1) Marcação dos furos; 2) Pausa para o recorte manual cuidadoso do tecido (ou com agulhas cortadoras); 3) Costura das pontes de sustentação sobre entretela hidrossolúvel; e 4) Acabamento final em ponto satim reforçado.",
    "technicalDetails": "Arquitetura e etapas da matriz de Richelieu:\n• Estabilização Obrigatória: Duas camadas de entretela hidrossolúvel pesada (Water-Soluble Film de 80 mícrons) por baixo do tecido;\n• Sequência de Digitalização:\n  Passo 1: Ponto corrido de demarcação da área de corte;\n  Passo 2: Ponto de fixação zigue-zague leve para prender as fibras do tecido cortado;\n  [Parada da Máquina / Stop]: O operador recorta o tecido no interior da área com tesoura de ponta curva de precisão (sem cortar a entretela hidrossolúvel de baixo);\n  Passo 3: Costura das pontes de aranha e barras de sustentação (Brides / Pontes em zigue-zague) que cruzam o vão vazio apoiadas na entretela hidrossolúvel;\n  Passo 4: Ponto cheio caseado largo (2,5 mm a 3,5 mm) de alta densidade (0,38 mm) com sob-ponto zigue-zague para cobrir todas as bordas cortadas;\n• Lavagem Pós-Bordado: A peça é enxaguada em água morna: a entretela dissolve e os orifícios ficam 100% abertos e suspensos pelas pontes bordadas.",
    "howItWorks": [
      "1. A bordadeira monta o tecido de linho ou percal fino no bastidor com duas folhas de entretela hidrossolúvel no verso.",
      "2. A máquina borda o Passo 1: uma linha simples que contorna os orifícios do desenho floral.",
      "3. A máquina para (Stop automático).",
      "4. A bordadeira, com o bastidor apoiado na mesa, usa uma tesourinha curva de ponta fina de Richelieu e recorta o tecido dentro da linha (mantendo o plástico de baixo intacto).",
      "5. Encaixa o bastidor de volta na máquina e aperta o botão de iniciar.",
      "6. A máquina costura as pontinhas de ligação no ar sobre a entretela hidrossolúvel e cobre todas as bordas com ponto cheio impecável.",
      "7. Ao terminar, lava-se a peça em água corrente: a entretela derrete e revela o maravilhoso trabalho vazado de Richelieu clássico."
    ],
    "beginnerExplanation": "O bordado Richelieu é aquele bordado clássico e maravilhoso de toalhas de mesa nobres da vovó, cheio de 'buraquinhos recortados' rodeados por molduras de linha cheia e pontinhas que parecem teias de aranha segurando o tecido! Na máquina de bordar computadorizada, é facílimo de fazer: a máquina faz um desenho marcando onde vai ser o furo, para e espera você cortar o paninho de dentro com uma tesourinha curva. Depois ela mesma costura as pontinhas no ar e faz uma moldura linda em volta! Quando você lava na água morna, o plástico de trás derrete e a toalha fica parecendo uma renda de luxo de palácio real!",
    "applications": [
      "Toalhas de mesa de banquete, jogos americanos e caminhos de mesa de alto luxo em linho puro",
      "Jogos de lençol de núpcias, fronhas e colchas em percal 400 fios",
      "Vestidos de noiva de época, golas de alfaiataria feminina e punhos de alta-costura",
      "Toalhas de batizado, mandris e vestidos de bebê para bênçãos e ocasiões solenes"
    ],
    "commonErrors": [
      "Cortar a entretela hidrossolúvel de baixo na hora de recortar o tecido com a tesoura (as pontes caem no vazio e o bordado estraga)",
      "Recortar o tecido longe da costura guia (deixa fiapos de tecido sobrando para fora do ponto cheio final)",
      "Usar entretela rasgável comum em vez de hidrossolúvel (é impossível arrancar a entretela dos buraquinhos vazados)"
    ],
    "troubleshootingTips": [
      "Use uma tesoura especial de ponta curva de precisão (tesoura de arremate de cutwork) para recortar o tecido bem rente à linha de marcação",
      "Deixe a entretela hidrossolúvel bem esticada no bastidor para que as pontes aéreas não afundem",
      "Após o enxágue com água, passe o ferro a vapor pelo avesso sobre uma toalha felpuda para que as colunas de ponto fiquem com relevo alto e macio"
    ],
    "dicaArtrelados": "Para fazer Richelieu perfeito no linho: use SEMPRE duas folhas de entretela hidrossolúvel transparente no avesso e corte o tecido com uma tesourinha curva de ponta afiada apoiando na mesa sem tirar o tecido do bastidor! Quando você lavar a peça e a água dissolver o plástico, o vazado fica tão perfeito que parece feito pelas bordadeiras reais da França antiga!",
    "voceSabia": "O bordado Richelieu foi batizado em homenagem ao poderoso Cardeal de Richelieu (Primeiro-Ministro da França de 1624 a 1642 durante o reinado de Luís XIII), que era apaixonado por golas e mantos eclesiásticos com trabalhos vazados recortados!",
    "practicalExercise": "Digitalize ou baixe uma matriz simples de Richelieu: monte percal com entretela hidrossolúvel, corte a janelinha com a tesoura curva na pausa da máquina, deixe terminar e dissolva na água: encante-se com a beleza do vazado!",
    "quickSummary": "Técnica clássica de bordado vazado com áreas recortadas e pontes de ligação em ponto cheio confeccionadas sobre entretela hidrossolúvel.",
    "relatedTerms": [
      "Richelieu",
      "Cutwork",
      "Entretela Hidrossolúvel",
      "Tesoura de Ponta Curva",
      "Pontes de Sustentação (Brides)"
    ],
    "tags": [
      "m-057",
      "matriz richelieu",
      "cutwork",
      "falso richelieu",
      "vazado",
      "linho",
      "renda",
      "alta costura",
      "enxoval de luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ROYAL SOCIETY OF EMBROIDERY & NEEDLEWORK. Traditional Richelieu, Cutwork Architecture and Openwork Digitizing Standards. Oxford: RSEN, 2022.",
      "ARTRELADOS. O Clássico Bordado Richelieu e Cutwork: Digitalização de Vazados, Pontes de Sustentação, Tesouras de Precisão e Enxovais Nobres. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-058-medidor-tensao-mecanica-tensiometro-toway-towa-gauge",
    "code": "M-058",
    "term": "Medidor de Tensão Mecânica de Linha - Tensiómetro Towa (Towa Digital/Mechanical Bobbin & Upper Thread Tension Gauge)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo masculino / Do latim 'tensio' (tensão) e 'metrum' (medida) e marca registrada Towa Toki Ltd.",
    "origin": "Instrumento de metrologia têxtil de alta precisão desenvolvido no Japão pela Towa Toki Co. para padronizar e quantificar numericamente em gramas-força (gf / cN) a tensão exata das caixas de bobina e linhas superiores de máquinas industriais.",
    "summary": "Instrumento de aferição de precisão milimétrica que mede numericamente em gramas-força (gf) a tensão da caixa de bobina e da linha superior.",
    "definition": "O Tensiómetro de Linha Towa (Towa Bobbin Tension Gauge / Medidor de Gramas-Força de Tensão Têxtil / Upper & Lower Thread Tension Meter) é o instrumento metrológico padrão de referência mundial utilizado para eliminar o método empírico e impreciso ('no olho' ou 'puxando com o dedo') da regulagem de tensões em máquinas de costura e bordado. Fabricado nas versões mecânica (com ponteiro analógico calibrado) e digital, o tensiómetro mede a resistência exata que a mola da caixa de bobina ou os discos tensores do cabeçote oferecem à passagem da linha quando puxada a uma velocidade constante, expressa numericamente em gramas-força (gf) ou centinewtons (cN).",
    "technicalDetails": "Metrologia e calibração com o tensiómetro Towa:\n• Valores Padrão para Bordado Computadorizado (com linha de poliéster 120/2 e bobina 60wt filamento contínuo):\n  - Tensão da Caixa de Bobina (Inferior): Entre 18 gf e 25 gf (ideal: 20 gf a 22 gf para máquinas industriais e domésticas);\n  - Tensão da Linha Superior (Superior): Entre 110 gf e 130 gf (para fio 40 padrão de poliéster);\n  - Tensão para Fios Metálicos: Entre 80 gf e 95 gf;\n  - Tensão para Fios Finos 60wt: Entre 90 gf e 105 gf;\n• Repetibilidade entre Cabeçotes: Em máquinas multicabeças (ex: 6 ou 12 cabeçotes com 15 agulhas cada), o tensiómetro permite que todas as 180 agulhas operem com rigorosamente a mesmíssima tensão, garantindo uniformidade cromática e estética total na produção;\n• Como Medir na Caixa de Bobina: Encaixa-se a caixa de bobina no suporte do tensiómetro Towa TM-1 (tamanho L) ou TM-3 (tamanho M), passa-se a linha pelas roldanas e puxa-se o filamento suavemente observando a leitura estável do mostrador.",
    "howItWorks": [
      "1. O técnico ou bordadeira retira a caixa de bobina da máquina.",
      "2. Encaixa a caixa de bobina no pino central do tensiómetro Towa.",
      "3. Passa a linha pelas duas roldanas metálicas calibradas do aparelho.",
      "4. Puxa a ponta da linha suavemente em linha reta.",
      "5. O ponteiro se move no mostrador numérico e indica a tensão real (ex: marcou 35 gf — muito apertada).",
      "6. Com uma chave de fenda de precisão, gira o parafuso da mola da caixa de bobina 1/8 de volta no sentido anti-horário.",
      "7. Puxa a linha novamente: o ponteiro crava em 22 gf (valor perfeito de catálogo).",
      "8. A caixa de bobina é instalada na máquina: todos os bordados saem com a proporção áurea perfeita de 1/3 de bobina no verso sem falhas."
    ],
    "beginnerExplanation": "O tensiómetro Towa é como uma 'balança de precisão digital para a linha de bordar'! Sabe quando a gente fica na dúvida se a caixinha de bobina está muito apertada ou muito frouxa, girando aquele parafusinho minúsculo no chute? O tensiómetro acaba com qualquer dúvida! Você encaixa a caixinha nele, puxa a linha e ele mostra na hora o número exato da força da linha na telinha (o ideal é marcar entre 20 e 25). Se der mais, você solta o parafuso; se der menos, você aperta! É a ferramenta secreta que faz todos os ateliês profissionais terem um verso de bordado perfeito e limpinho todos os dias!",
    "applications": [
      "Calibração metrológica padronizada de caixas de bobina em ateliês e indústrias",
      "Equalização de tensão em máquinas industriais multicabeças (6, 8, 12 ou 24 cabeçotes)",
      "Ajuste fino de tensão para fios especiais desafiadores (metálicos, fios 60wt e fios foscos)",
      "Resolução definitiva de problemas de 'fios brancos da bobina subindo para a frente do bordado'"
    ],
    "commonErrors": [
      "Apertar o parafuso da mola da bobina sem medir, fazendo a mola entortar de forma permanente",
      "Puxar a linha no tensiómetro aos trancos rápidos em vez de puxar em velocidade suave e constante",
      "Usar o tensiómetro Towa com roldanas engorduradas ou cheias de poeira acumulada"
    ],
    "troubleshootingTips": [
      "Puxe a linha sempre de forma contínua e suave para que o ponteiro se estabilize em uma leitura precisa",
      "Mantenha a mola e as roldanas do tensiómetro limpas passando um fio dental ou pincel macio",
      "Ao trocar de marca de linha de bobina (ex: de bobina de algodão para bobina de filamento pré-bobinada), confira a tensão no tensiómetro, pois cada fio desliza com atrito diferente"
    ],
    "dicaArtrelados": "Se você tem mais de uma máquina de bordar ou quer ter certeza absoluta de que sua máquina está 100% regulada como de fábrica, tenha um tensiómetro Towa no seu ateliê! Você ajusta a bobina em exatamente 22 gf e o tensor superior em 120 gf: o bordado fica impecável na hora sem precisar de nenhum teste de tentativa e erro!",
    "voceSabia": "A empresa japonesa Towa Toki Ltd. desenvolveu o primeiro tensiómetro de costura na década de 1960 a pedido das fábricas de paraquedas militares do Japão e dos EUA, onde a precisão da tensão das costuras era uma questão de vida ou morte para os soldados!",
    "practicalExercise": "Se tiver um tensiómetro Towa: meça as suas caixas de bobina e anote os valores. Ajuste todas para ficarem rigorosamente calibradas entre 20 e 22 gf e veja como o verso dos seus bordados ganha um padrão perfeito!",
    "quickSummary": "Instrumento metrológico de alta precisão que afere a tensão em gramas-força da caixa de bobina e linha superior para calibração padrão ouro.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Tensão de Linha",
      "Gramas-Força (gf)",
      "Bobina Pré-Enrolada",
      "Regulagem de Tensão"
    ],
    "tags": [
      "m-058",
      "medidor de tensao",
      "tensiometro",
      "towa",
      "gramas-forca",
      "bobina",
      "regulagem",
      "metrologia",
      "padrao ouro",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA TOKI CO. LTD. Instruction Manual for Towa Bobbin Tension Gauge TM-1/TM-3 and Upper Thread Metrology. Tóquio: Towa, 2022.",
      "ARTRELADOS. A Metrologia da Tensão Perfeita: Tensiómetros Towa, Calibração em Gramas-Força, Equalização de Cabeçotes e o Avesso Padrão Ouro. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-059-malha-ribana-canelada-golas-punhos-rib-knit",
    "code": "M-059",
    "term": "Malha Ribana / Canelada e Bordado em Golas/Punhos (Rib Knit & Collar/Cuff Embroidery Stabilization)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Do inglês 'rib' (costela/canelado) e do francês 'col' (gola).",
    "origin": "Estrutura de malharia com sanfona elástica em canelado 1x1 ou 2x2 desenvolvida no século XIX para proporcionar alta elasticidade e ajuste anatômico em punhos, golas e cós de vestuário esportivo e casual.",
    "summary": "Malha sanfonada de altíssima elasticidade (golas e punhos) que exige entretela de corte pesada colada, agulha ponta bola e compensação máxima.",
    "definition": "A Malha Ribana, Canelada e Tecidos de Sanfona Elástica (Rib Knit 1x1 & 2x2 / Ribana de Algodão com Elastano / Golas e Punhos de Moletom) representa uma das estruturas têxteis com maior índice de elasticidade longitudinal e transversal da indústria da confecção. Caracterizada por canaletas verticais alternadas em relevo (costelas), a ribana tende a se esticar, deformar e abrir vãos irregulares sob a tração dos pontos de bordado. O bordado de alta definição em golas, punhos, toucas beanie e bodies em malha canelada exige: entretela de corte reforçada (Cut-Away de 80 g/m²) colada com adesivo temporário em spray, agulha Ponta Bola Média (Ball Point 75/11 ou 80/12), compensação de repuxo no software ampliada para 0,45 mm a 0,55 mm e sob-ponto em tatami/grade para fechar as canaletas da sanfona.",
    "technicalDetails": "Propriedades e parametrização para bordar em ribana e malha canelada:\n• Elasticidade Típica: 40% a 100% de alongamento com memória elástica sob tração;\n• Estabilização Obrigatória: Entretela de corte permanente (Cut-Away de 80 g/m²); NUNCA usar entretela rasgável simples (a ribana volta a esticar após a lavagem e esmaga o bordado em ondas);\n• Agulha Indicada: Ponta Bola Fina a Média (SES / SUK calibre 75/11 ou 80/12);\n• Compensação de Repuxo (Pull Compensation): Aumentar para 0,45 mm a 0,55 mm no software de digitalização;\n• Sob-pontos (Underlay): Sob-ponto em grade cruzada (Tatami Grid Underlay) cobrindo toda a extensão do desenho para impedir que a agulha caia nos vãos profundos das canaletas da ribana;\n• Montagem no Bastidor: Não puxar nem esticar a ribana ao prender no aro; o tecido deve repousar com suas canaletas retas e relaxadas.",
    "howItWorks": [
      "1. A bordadeira prepara o punho de moletom, a touca canelada (beanie) ou a gola polo em ribana.",
      "2. Corta uma folha de entretela de corte firme (Cut-Away 80 g/m²).",
      "3. Aplica cola spray temporária na entretela e assenta a ribana por cima em estado totalmente relaxado (sem esticar a sanfona).",
      "4. Encaixa no bastidor sem tensionar o tecido.",
      "5. Posiciona uma folha de filme plástico hidrossolúvel no topo se houver letras pequenas.",
      "6. A máquina costura a matriz: o sob-ponto em grade 'solda' as canaletas caneladas e o ponto cheio cobre a superfície com volume liso.",
      "7. Ao terminar, retira-se o filme do topo e recorta-se a entretela do verso arredondada a 5 mm.",
      "8. A gola ou punho pode ser esticado para vestir que o bordado permanece plano, reto e sem deformações."
    ],
    "beginnerExplanation": "A malha ribana é aquele tecido caneladinho e sanfonado que a gente tem na gola da camiseta, nos punhos das blusas de frio e em touquinhas de inverno! Como ela é uma sanfona que estica muito, se você tentar bordar nela de qualquer jeito, o bordado entra no meio dos canais da sanfona e fica todo torto e repuxado. Para bordar em golas e toucas caneladas perfeitamente, você só precisa de 3 passos fáceis: 1) usar uma entretela de recorte grossa (Cut-Away) no avesso colada com spray; 2) colocar o pano no bastidor sem esticar a sanfona dele; e 3) usar uma agulha de pontinha redonda (ponta bola)! O bordado fica retinho e lindo!",
    "applications": [
      "Toucas de inverno caneladas estilo beanie com monogramas e logotipos de streetwear",
      "Golas e punhos de jaquetas bomber, agasalhos esportivos e camisas polo",
      "Bodies de bebê em malha canelada macia 100% algodão com nomes personalizados",
      "Bordados em cós elásticos de calças de moletom e vestidos canelados femininos"
    ],
    "commonErrors": [
      "Esticar a ribana ao prender no bastidor (quando solta do bastidor o tecido encolhe e o bordado enruga como uma sanfona amassada)",
      "Usar entretela rasgável fina (o bordado racha e deforma na primeira vez que a peça for esticada para vestir)",
      "Não colocar sob-ponto de sustentação na matriz (os pontos caem nos vãos profundos entre as costelas do tecido)"
    ],
    "troubleshootingTips": [
      "Monte a ribana no bastidor repousada: as canaletas caneladas devem ficar perfeitamente paralelas e verticais",
      "Para toucas beanie de lã ou acrílico grosso: use sempre filme hidrossolúvel no topo para as fibras não passarem pelos pontos",
      "Aumente a densidade do ponto satim em 10% para garantir cobertura total sobre a textura da sanfona"
    ],
    "dicaArtrelados": "Vai bordar toucas de inverno sanfonadas (beanies) ou punhos de moletom? Cole a touca em entretela de corte firme com cola spray SEM ESTICAR O CANELADO! Use um plástico solúvel por cima e borde com agulha ponta bola 80/12: a touca fica um espetáculo de loja de shopping!",
    "voceSabia": "A malharia ribana foi aperfeiçoada no século XIX na Inglaterra utilizando teares circulares com agulhas cruzadas em 90 graus (cilindro e disco), permitindo criar malhas com o dobro da elasticidade natural do algodão sem precisar de fios sintéticos!",
    "practicalExercise": "Pegue uma touca ou punho de ribana: monte com entretela de corte no verso colada com spray, coloque plástico solúvel no topo e borde um nome com ponto cheio e compensação de repuxo alta: estique a malha e veja como o bordado não se deforma!",
    "quickSummary": "Estrutura sanfonada de alta elasticidade que exige entretela de corte reforçada colada, agulha ponta bola e sob-pontos em grade.",
    "relatedTerms": [
      "Ribana",
      "Malha Canelada",
      "Touca Beanie",
      "Entretela de Corte (Cut-Away)",
      "Agulha Ponta Bola"
    ],
    "tags": [
      "m-059",
      "malha ribana",
      "canelada",
      "gola",
      "punho",
      "touca",
      "beanie",
      "cut-away",
      "elasticidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KNITWEAR EMBROIDERY INSTITUTE. Rib Knit Deformation, High Elasticity Underlay Protocols and Beanie Stabilization. Leicester: KEI, 2022.",
      "ARTRELADOS. O Desafio das Malhas Elásticas e Caneladas: Ribanas, Toucas Beanie, Golas, Punhos e Estabilização com Cut-Away. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-060-modificador-ponto-curvo-cantos-franceses-mitra-cornering",
    "code": "M-060",
    "term": "Modificador de Ponto Curvo Inteligente - Cantos Franceses e Mitra (Smart Cornering, Mitered Corners & French Corners)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Da geometria descritiva e cantaria arquitetônica (canto de meia-esquadria).",
    "origin": "Algoritmos de geometria computacional vetorial desenvolvidos pela Wilcom e Pulse para resolver o problema clássico do acúmulo excessivo de agulhadas no lado interno e a abertura de frestas no lado externo de molduras e cantos retos em ponto cheio.",
    "summary": "Algoritmo vetorial que divide cantos agudos e molduras de ponto satim em meia-esquadria (Mitra) ou sobreposição (Canto Francês), evitando buracos e nós duros.",
    "definition": "O Modificador de Cantos Inteligentes e Tratamento de Vértices (Smart Cornering Engine / Mitered Corner & French Cap Corner Digitizing) é o recurso avançado nos softwares de digitalização de bordado que calcula automaticamente a transição geométrica dos pontos cheios (satim) em esquinas, curvas fechadas e cantos em ângulo agudo ou reto (90°). Sem esse algoritmo, uma curva em 90° faria as agulhadas se acumularem no vértice interno (gerando um caroço duro de linha que quebra a agulha e fura o tecido) enquanto o lado externo ficaria com pontos ralos e abertos. O algoritmo oferece duas soluções de alta costura: 1) Canto em Meia-Esquadria (Mitered Corner - corte diagonal limpo a 45° como em molduras de quadros) e 2) Canto Francês / Sobreposto (Cap / French Corner - onde uma coluna termina reta e a outra a cobre por cima).",
    "technicalDetails": "Geometria e equações de tratamento de cantos no software:\n• Canto em Meia-Esquadria (Mitered / Half-Mitre Corner):\n  - Divide a coluna de ponto cheio em dois segmentos simétricos que se encontram em uma linha bissetriz diagonal de 45°;\n  - Reduz o comprimento dos pontos na junção e intercala as agulhadas para evitar linhas abertas;\n• Canto Francês / Sobreposto (Cap / Overlap Corner):\n  - O primeiro segmento é costurado com terminação reta ou arredondada e nó de fixação;\n  - O segundo segmento inicia sobreposto com sob-ponto reforçado, garantindo cobertura 100% plana;\n• Ângulo Limite de Transição: Configurável de 45° a 110° para alternar automaticamente entre curva contínua suave e meia-esquadria;\n• Alívio de Densidade Interna: O algoritmo reduz a densidade em até 40% no vértice interno do canto para que a máquina não dê múltiplos furos na mesma coordenada X/Y;\n• Aplicação Estratégica: Molduras de brasões, letras quadradas (como 'E', 'F', 'H', 'L', 'T'), faixas geométricas e bordas de toalhas.",
    "howItWorks": [
      "1. O programador desenha uma moldura quadrada com colunas de ponto cheio largo (4,0 mm).",
      "2. Seleciona o objeto e ativa a ferramenta 'Smart Corners' (Cantos Inteligentes) nas propriedades.",
      "3. Escolhe o estilo 'Mitered Corner' (Canto em Mitra / Meia-Esquadria).",
      "4. O software calcula instantaneamente o bissetor de 45° em cada um dos 4 vértices.",
      "5. Intercala as agulhadas na costura diagonal sem empilhar perfurações no canto de dentro.",
      "6. A máquina de bordar costura a moldura com velocidade plena e sem quebras de agulha.",
      "7. A moldura quadrada fica com 4 cantos perfeitos, retos, limpos e com acabamento de alta marcenaria/alfaiataria."
    ],
    "beginnerExplanation": "Os cantos inteligentes (mitra e canto francês) são o segredo para fazer 'cantos de moldura perfeitos' no bordado! Imagine fazer uma curva de 90 graus com uma linha grossa: se você só dobrar a linha, o lado de dentro vai virar um bolo grosso e duro de pontinhos acumulados (que pode até quebrar a agulha!) e o lado de fora vai ficar ralo e feio. Os cantos inteligentes fazem o que os marceneiros fazem em molduras de quadros bonitos: eles cortam o cantinho em um ângulo de 45 graus retinho e encaixam as duas partes com perfeição milimétrica! O canto da letra ou da moldura fica lisinho, reto e deslumbrante!",
    "applications": [
      "Molduras geométricas de brasões, diplomas e certificados bordados",
      "Letras com cantos retos e ângulos agudos (letras em fontes de bloco: E, L, T, Z, N)",
      "Bordas perimetrais decorativas em toalhas de mesa, guardanapos e lenços",
      "Logotipos corporativos modernos com triângulos, losangos e faixas geométricas"
    ],
    "commonErrors": [
      "Deixar curvas de 90° com ponto cheio contínuo sem cantos inteligentes (cria um caroço duro que fura o tecido)",
      "Usar meia-esquadria em cantos muito abertos (acima de 120°), onde uma curva suave ficaria mais bonita",
      "Não colocar sob-pontos de sustentação na linha de junção da meia-esquadria"
    ],
    "troubleshootingTips": [
      "No Wilcom, selecione o objeto de satim e pressione a tecla 'H' para inspecionar e mover manualmente a linha da meia-esquadria se desejar um ângulo customizado",
      "Para letras pequenas com fontes serifadas finas: prefira o estilo Canto Francês Sobreposto para garantir leitura nítida",
      "Em molduras largas (acima de 6 mm): ative o sob-ponto Edge Run duplo ao longo da meia-esquadria para travar o encontro das colunas"
    ],
    "dicaArtrelados": "Vai digitalizar uma moldura quadrada ou letras retas em ponto cheio? Ative sempre a opção de 'Cantos em Meia-Esquadria' (Mitered Corners)! Os 4 cantos da moldura se encontram em um corte diagonal de 45° limpo e elegante como uma moldura de quadro de museu, sem empelotar linha e sem risco de quebrar agulha!",
    "voceSabia": "O termo 'Mitra' (Miter) vem do formato angular do chapéu cerimonial usado pelos bispos e papas da Igreja Católica desde a Idade Média, que se tornou sinônimo de junções angulares perfeitas na arquitetura e na alta costura!",
    "practicalExercise": "No seu software: desenhe uma letra 'L' maiúscula em ponto cheio com 5 mm de largura. Teste alternar entre Canto Curvo Simples, Canto em Meia-Esquadria e Canto Sobreposto: veja a diferença brutal de elegância na simulação 3D!",
    "quickSummary": "Algoritmo vetorial inteligente que divide cantos agudos e molduras de ponto satim em meia-esquadria ou sobreposição, evitando nós e buracos.",
    "relatedTerms": [
      "Cantos Inteligentes (Smart Corners)",
      "Meia-Esquadria (Mitered)",
      "Canto Francês (Cap Corner)",
      "Ponto Satim",
      "Wilcom EMB"
    ],
    "tags": [
      "m-060",
      "cantos inteligentes",
      "mitra",
      "canto frances",
      "smart corners",
      "moldura",
      "satim",
      "meia-esquadria",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Smart Cornering Algorithms, Mitered Angle Calculation and Satin Cap Management. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Geometria dos Cantos Perfeitos: Meia-Esquadria, Cantos Franceses, Tratamento de Vértices e Molduras Impecáveis. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-061-matriz-quilt-computadorizado-borda-infinita-continuous-quilting",
    "code": "M-061",
    "term": "Matriz de Quilt Computadorizado e Borda Infinita (Continuous Edge-to-Edge Quilting & Pantograph Digitizing)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino / Do inglês 'quilting' (acolchoamento contínuo) e 'edge-to-edge' (de ponta a ponta).",
    "origin": "Técnica desenvolvida nos EUA na década de 1990 que uniu o patchwork tradicional e as máquinas de braço longo (Longarm Quilting) às máquinas de bordar computadorizadas domésticas e industriais para criar acolchoados contínuos de colchas completas com encaixes perfeitos de ponta a ponta.",
    "summary": "Matriz modular contínua de ponto corrido em arabescos, plumas e ondas que acolchoa mantas e colchas gigantescas através de emendas de borda infinita.",
    "definition": "O Quilt Computadorizado Contínuo e Borda Infinita (Continuous Edge-to-Edge Quilting / E2E Pantograph Digitizing / Acolchoamento Modular no Bastidor) é a técnica especializada de digitalização e costura em que padrões artísticos contínuos de acolchoamento (arabescos, plumas vitorianas, ondas, corações, espirais e mosaicos geométricos em ponto corrido triplo ou simples) são costurados de forma modular e repetitiva para cobrir áreas gigantescas (como colchas de casal King Size, mantas de berço e jogos de cama). A matriz é programada com um ponto de início (Start) exatamente na margem esquerda superior e um ponto de término (End) na margem direita inferior na mesma linha horizontal de referência, permitindo que a bordadeira avance o tecido sucessivamente no bastidor e continue o acolchoamento de forma contínua e infinita com junções 100% invisíveis.",
    "technicalDetails": "Arquitetura e engenharia do acolchoamento contínuo E2E:\n• Ponto Utilizado: Ponto Corrido Simples longo (comprimento de 2,8 mm a 3,5 mm) ou Ponto Corrido Triplo/Feijão (Bean Stitch de 2,5 mm) para criar relevo acolchoado destacado;\n• Princípio dos Pontos de Conexão: Ponto de Entrada (X0, Y-max) alinhado horizontalmente com o Ponto de Saída (X-max, Y-max) para que a próxima passada do bastidor se inicie na mesma cota métrica;\n• Camadas Têxteis (Sanduíche de Quilt): 1) Tecido Principal do Topo (Algodão 100% tricoline ou percal); 2) Manta Estruturadora Interna (Manta R1, Manta R2, Manta de Bambu ou Manta de Algodão 100g); 3) Tecido de Forro do Avesso (Tricoline ou Cambraia);\n• Agulha Indicada: Agulha Schmetz Quilting ou Topstitch calibre 80/12 ou 90/14 (com ponta cônica especial para perfurar o sanduíche com manta sem desviar);\n• Tensão de Linha: Ligeiramente aliviada na parte superior para que o ponto fique gordinho e fofo sem repuxar a manta.",
    "howItWorks": [
      "1. A bordadeira monta o 'sanduíche de quilt' (tecido superior + manta R1 + tecido de forro) com alfinetes de segurança ou cola temporária.",
      "2. Encaixa a primeira seção da colcha no bastidor grande da máquina de bordar.",
      "3. Carrega a matriz de Borda Infinita (E2E) no painel.",
      "4. A máquina costura a primeira linha de arabescos de ponta a ponta e para com a agulha exatamente no ponto final da direita.",
      "5. A bordadeira solta o bastidor, move o tecido para a direita alinhando a marca de início da matriz com a agulha.",
      "6. Prende o bastidor novamente e dá a partida: a máquina continua o desenho sem nenhuma quebra no traçado.",
      "7. Repete o processo em fileiras horizontais sucessivas até acolchoar toda a colcha.",
      "8. O resultado é uma colcha gigantesca King Size perfeitamente acolchoada, macia, luxuosa e com estética de ateliê internacional."
    ],
    "beginnerExplanation": "O quilt de borda infinita é a técnica que permite a você acolchoar colchas de cama gigantescas na sua máquina de bordar normal! Em vez de pagar caríssimo para alguém fazer o acolchoado em máquinas industriais gigantes, você usa matrizes inteligentes de arabescos e ondinhas fofas que se emendam sozinhas. A máquina borda um pedaço, termina exatamente no cantinho certo, você muda o pano de lugar no bastidor e a máquina continua o desenho daquele mesmo pontinho! Você vai mudando o pano como se estivesse carimbando e, quando vê, acolchoou um edredom inteiro de casal de forma macia e perfeita!",
    "applications": [
      "Acolchoamento de colchas de casal, edredons King Size e mantas de berço",
      "Confecção de jogos de cama de luxo, porta-travesseiros e almofadas acolchoadas",
      "Fundos acolchoados para painéis de patchwork e tapeçarias artísticas",
      "Estruturação de nécessaires, bolsas de maternidade e capas de caderneta"
    ],
    "commonErrors": [
      "Usar pontos muito curtos (menos de 2,0 mm) em mantas grossas (o acolchoado fica duro como papelão e sem volume)",
      "Não alinhar a altura horizontal exata na remontagem do bastidor (o desenho fica com degraus visíveis entre as passadas)",
      "Usar agulha fina universal que entorta ao bater nas fibras da manta grossa"
    ],
    "troubleshootingTips": [
      "Use agulha especial Quilting 80/12 ou 90/14 para perfurar as 3 camadas do sanduíche com facilidade",
      "Use linhas de algodão ou poliéster brilhante 40wt com comprimento de ponto calibrado entre 3,0 mm e 3,5 mm para valorizar o relevo fofo da manta",
      "Cole uma fita adesiva de papel no bastidor marcando o alinhamento da linha de centro para agilizar as trocas de posição"
    ],
    "dicaArtrelados": "Quer transformar a sua máquina de bordar em uma máquina de fazer colchas milionárias? Use matrizes de Quilt de Borda Infinita com Manta R1 e linha de algodão brilhante! O acolchoamento fica tão fofo, uniforme e com toque de pluma que suas colchas vão virar as mais disputadas e desejadas da sua região!",
    "voceSabia": "A tradição do Quilting (acolchoamento) remonta ao século I a.C. na Ásia Central, onde tapetes de feltro acolchoados com motivos de animais míticos eram usados para forrar o chão de tendas nômades contra o frio congelante das estepes da Mongólia!",
    "practicalExercise": "Faça um sanduíche pequeno de 30x30 cm com tricoline e manta R1: coloque no bastidor, borde uma matriz de quilt de borda infinita com ponto corrido longo de 3,2 mm e sinta o toque fofo e acolchoado com as mãos!",
    "quickSummary": "Matriz modular contínua de ponto corrido artístico que permite acolchoar colchas e mantas gigantes através de emendas de borda infinita.",
    "relatedTerms": [
      "Quilt Computadorizado",
      "Borda Infinita (Edge-to-Edge)",
      "Sanduíche de Quilt",
      "Manta R1",
      "Ponto Feijão (Bean Stitch)"
    ],
    "tags": [
      "m-061",
      "quilt computadorizado",
      "borda infinita",
      "edge-to-edge",
      "acolchoamento",
      "colcha",
      "manta r1",
      "patchwork",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICAN QUILTING ASSOCIATION. Automated Edge-to-Edge Pantograph Digitizing, Loop Continuity and Hooping Alignment. Paducah: AQA, 2022.",
      "ARTRELADOS. O Universo do Quilt Computadorizado no Bastidor: Bordas Infinitas, Matrizes Modulares, Mantas Estruturadoras e Colchas de Alto Padrão. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "m-062-mapeamento-de-tensao-dinamica-e-sensor-optico-de-fio",
    "code": "M-062",
    "term": "Mapeamento de Tensão Dinâmica e Sensor Óptico de Fio (Dynamic Thread Tension Mapping & Optical Break Sensor)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Comandos de Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da mecatrônica industrial japonesa (Tajima e Barudan) combinando fotossensores infravermelhos e servomotores de tensão ativa controlados por microprocessador.",
    "summary": "Sistema eletrônico que monitora o consumo milimétrico de linha a cada pontada, detectando quebras instantaneamente e ajustando a tensão do fio em tempo real.",
    "definition": "O Mapeamento de Tensão Dinâmica e Monitoramento Óptico de Alimentação de Linha (Digital Thread Tension Mapping / Real-Time Optical Feed Sensing) é a tecnologia eletrônica inteligente integrada aos cabeçotes de bordadeiras industriais e semiprofissionais modernas. O sistema utiliza roletes encoders rotativos e feixes de laser/infravermelho para medir a velocidade de passagem da linha superior com resolução submétrica a cada ciclo de 360° do eixo principal. Se o fio arrebentar ou escapar da agulha, o sensor óptico aciona o freio magnético em menos de 0,05 segundo (após apenas 1 a 2 pontos perdidos), impedindo o avanço em falso do pantógrafo e registrando os picos de atrito para autoajuste automático da tensão.",
    "technicalDetails": "Tempo de resposta do freio eletrônico < 50 ms. Resolução do encoder de linha: 0,1 mm por pulso óptico. Ajuste automático de tensão por motor de passo com resolução de 16 níveis de compressão nos discos tensores.",
    "howItWorks": [
      "1. A máquina inicia o bordado a 1.000 PPM.",
      "2. A linha superior passa por uma pequena polia codificada com sensor óptico infravermelho.",
      "3. A cada pontada, a polia gira e envia pulsos elétricos para o processador central da máquina.",
      "4. Em uma transição de ponto muito longo, a linha sofre atrito e arrebenta.",
      "5. A polia para de girar instantaneamente.",
      "6. Em apenas 2 pontos após a quebra, a máquina para o motor, recua o pantógrafo exatamente 3 pontos e acende o LED vermelho do cabeçote.",
      "7. A operadora passa a linha de volta na agulha e aperta o botão: o bordado recomeça exatamente de onde parou, sem deixar nenhuma falha no tecido."
    ],
    "beginnerExplanation": "É o 'olho eletrônico inteligente' da sua máquina de bordar que fica vigiando a linha o tempo todo! Se a linha arrebentar ou acabar no meio do bordado, a máquina percebe em um piscar de olhos, para de costurar na hora e volta dois pontinhos para trás. Você nunca mais precisa ficar com medo de a máquina 'bordar no vazio' estragando o tecido!",
    "applications": [
      "Detecção ultrarrápida de quebra ou fim de linha em alta velocidade",
      "Compensação dinâmica de tensão em bordados com variação brusca de espessura de tecido",
      "Redução drástica do tempo de retrabalho e reparo manual de pontos perdidos",
      "Monitoramento do consumo real de metros de linha por matriz produzida"
    ],
    "commonErrors": [
      "❌ Deixar fiapos de linha e poeira cobrirem o feixe do sensor óptico, gerando alarmes falsos de 'Linha Quebrada'",
      "❌ Passar a linha fora da rodinha do sensor óptico durante a passagem de fio no cabeçote",
      "❌ Desativar o sensor de quebra no painel para bordar com linhas velhas e podres, resultando em desenhos cheios de buracos"
    ],
    "troubleshootingTips": [
      "Passe um pincel macio ou spray de ar limpo na polia do sensor óptico a cada semana para remover resíduos de cera e poeira têxtil",
      "Certifique-se de que a linha dê uma volta completa de 360° ao redor da rodinha do sensor para garantir tração sem deslize",
      "Se a máquina parar avisando quebra mesmo com a linha inteira: Limpe a ranhura do sensor óptico com um cotonete seco"
    ],
    "dicaArtrelados": "Se a sua máquina começar a apitar avisando que a linha quebrou sendo que a linha está perfeita na agulha: não se desespere! Quase sempre é apenas uma bolinha de fiapo de linha que grudou na rodinha do sensor óptico. Passe um pincelzinho macio ali e sua máquina volta a rodar perfeitamente!",
    "voceSabia": "Os sensores ópticos de bordado de última geração conseguem calcular a espessura da linha com precisão de microns e avisam no painel se você colocar por engano uma linha mais grossa do que a recomendada para a matriz!",
    "practicalExercise": "Com a máquina ligada em um bordado teste, segure suavemente a linha logo acima do tensor com a ponta dos dedos para simular uma quebra: observe no painel a rapidez com que a máquina para e indica o cabeçote correspondente!",
    "quickSummary": "Monitoramento eletrônico infravermelho que detecta quebras de linha instantaneamente e comanda o recuo automático de pontos.",
    "relatedTerms": [
      "Ajuste de Tensão da Linha",
      "Quebra Constante de Linha Superior",
      "Pontos por Minuto (PPM / SPM)",
      "Comandos de Máquina"
    ],
    "tags": [
      "m-062",
      "sensor optico",
      "tensao dinamica",
      "quebra de linha",
      "freio eletronico",
      "monitoramento",
      "tajima",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Digital Tension Control, Optical Thread Sensing & Broken Thread Detection Systems. Nagoya, 2022.",
      "BARUDAN. Advanced Head Electronics & Real-Time Thread Feed Diagnostics. Tokyo, 2023."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "m-063-moire-textil-e-intercorrencias-de-angulo-em-tecidos-listrados",
    "code": "M-063",
    "term": "Moiré Têxtil, Interferência Óptica e Ângulos Críticos em Tecidos Estruturados (Textile Moiré Pattern Interference)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Teoria & Fundamentos",
    "grammarClass": "Substantivo masculino / Do francês 'moiré' (efeito ondulado de tecido chamalotado / seda moiré).",
    "origin": "Descoberto na tecelagem francesa no século XVIII e estudado na física de interferência ondulatória da luz e na engenharia de digitalização de bordados.",
    "summary": "Efeito visual indesejado de manchas onduladas que surge quando o ângulo dos pontos de bordado coincide com o ângulo das listras, sarjas ou tramas do tecido base.",
    "definition": "O Efeito Moiré Têxtil e Interferência Óptica de Ângulo (Textile Moiré Distortion / Grid Interference Defect) é a distorção visual em formato de ondas, manchas cintilantes ou faixas escuras repetitivas que se manifesta na superfície de um bordado computadorizado quando a direção angular dos pontos (em ponto tatami ou ponto cheio) coincide de forma paralela ou quase paralela (diferença inferior a 10°) com a trama geométrica do tecido base (como tecidos de sarja, gabardine, microfibra canelada, piquet ou tecidos listrados). O alinhamento das linhas cria zonas alternadas de sombra e reflexão luminosa que degradam o acabamento do bordado, sendo prevenido pelo ajuste do ângulo do ponto com defasagem de 15° a 45° em relação ao fio reto do tecido.",
    "technicalDetails": "Fenômeno de frequência espacial óptica onde f_resultante = |f_tecido - f_ponto|. Requer rotação angular do preenchimento tatami para 30°, 45° ou 60° em relação à urdidura/trama e uso de entretela estável.",
    "howItWorks": [
      "1. A bordadeira programa um logotipo corporativo quadrado com preenchimento tatami a 0° (horizontal).",
      "2. Ela borda o logotipo em uma camisa de uniforme feita em tecido de sarja pesada com textura diagonal a 45°.",
      "3. Durante o bordado, as agulhadas caem exatamente nos mesmos vales da trama do tecido.",
      "4. Ao retirar a peça do bastidor, o bordado parece ondulado, com manchas listradas esquisitas que mudam conforme a luz bate.",
      "5. O programador altera o ângulo do ponto tatami no software de 0° para 28°.",
      "6. A máquina borda novamente a peça.",
      "7. Com o novo ângulo, os pontos cruzam a sarja de forma alternada, eliminando o Moiré e deixando a superfície perfeitamente lisa e acetinada."
    ],
    "beginnerExplanation": "É aquele efeito óptico chato que faz o bordado parecer cheio de ondas ou listras estranhas, como quando você filma a tela da televisão com o celular e aparecem aquelas ondas na imagem! Isso acontece quando a direção da linha do bordado fica muito parecida com a direção dos fios do tecido. Mudando um pouquinho a inclinação dos pontos no computador, as ondas somem na hora e o bordado fica lisinho!",
    "applications": [
      "Bordado de uniformes profissionais em tecidos de sarja, gabardine e brim",
      "Bordados em camisas polo de malha piquet com textura em favo de mel",
      "Personalização de bonés em tecido ripstop e tecidos canelados",
      "Preenchimentos extensos em jaquetas corta-vento e tecidos técnicos listrados"
    ],
    "commonErrors": [
      "❌ Borda preenchimentos tatami no ângulo exato de 0° ou 90° em tecidos com trama aparente, gerando ondas de Moiré imediatas",
      "❌ Borda em sarja diagonal a 45° usando pontos com inclinação de 45°, fazendo os pontos afundarem dentro das canaletas da sarja",
      "❌ Aumentar a densidade para tentar tapar o efeito Moiré, endurecendo a peça e piorando o enrugamento do tecido"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO DO ÂNGULO: Nunca borde pontos exatamente no mesmo ângulo das canaletas ou listras do tecido base",
      "Para tecidos de sarja (diagonal a 45°): Utilize ângulos de ponto tatami de 15° a 25° ou 65° a 75°",
      "Em malhas piquet: Use um ângulo de tatami a 30° ou 60° combinado com um bom underlay em grade dupla (Tatami Underlay)"
    ],
    "dicaArtrelados": "Vai bordar camisas polo ou calças de sarja e o bordado ficou parecendo uma 'grade de televisão'? Não gaste mais linha aumentando a densidade! Abra a matriz no seu programa e incline o ângulo do preenchimento em 25 ou 30 graus. O bordado fica lisinho, macio e com brilho uniforme de alta qualidade!",
    "voceSabia": "A palavra 'Moiré' vem do francês antigo e era usada pelos comerciantes de seda de Lyon para descrever o tecido chamalote de seda nobre que era prensado entre rolos de cobre para criar reflexos brilhantes semelhantes aos raios da lua!",
    "practicalExercise": "No seu software de bordado, crie um retângulo tatami a 0° e outro idêntico a 35°: borde os dois em um pedaço de tecido de sarja e compare sob a luz a diferença de textura e a ausência total de ondas no segundo!",
    "quickSummary": "Interferência visual ondulada que ocorre quando o ângulo dos pontos coincide com a trama do tecido; eliminada com rotação angular.",
    "relatedTerms": [
      "Ponto Tatami / Ponto Esteira",
      "Ângulo de Ponto (Stitch Angle)",
      "Tecido Sarja e Brim",
      "Teoria & Fundamentos"
    ],
    "tags": [
      "m-063",
      "moire",
      "interferencia optica",
      "angulo de ponto",
      "sarja",
      "piquet",
      "tatami",
      "textura",
      "artrelados"
    ],
    "bibliographicReferences": [
      "OSTER, G. The Science of Moiré Patterns: Physics, Optics and Structural Applications. New York, 2021.",
      "WILCOM. Stitch Angles, Underlay Topologies and Pattern Moire Elimination. Sydney, 2023."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "m-064-microfibra-de-alta-densidade-e-camurca-sintetica-no-bastidor",
    "code": "M-064",
    "term": "Microfibra de Alta Densidade, Camurça Sintética e Suede no Bastidor (High-Density Microfiber & Synthetic Suede)",
    "letter": "M",
    "level": "Fundamental 🟢",
    "category": "Tecidos & Substratos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Desenvolvida nos laboratórios da Toray no Japão na década de 1970 (Ultrasuede / Alcantara). Fibras sintéticas ultrafinas com toque macio de camurça nobre.",
    "summary": "Técnicas de bastidoramento flutuante e digitalização equilibrada para bordar em microfibra, camurça sintética e tecidos suede sem deixar marcas de aro nem afundar os pontos.",
    "definition": "O Bordado em Microfibra de Alta Densidade e Camurça Sintética / Suede (High-Density Microfiber, Faux Suede & Alcantara Embroidery Protocol) é o método técnico de estruturação, fixação e costura em tecidos fabricados com microfilamentos de poliéster e poliuretano que imitam o toque aveludado da camurça natural. Por possuírem felpa superficial densa e sensibilidade extrema à compressão mecânica, o aperto direto de bastidores convencionais de plástico esmaga permanentemente o veludo (defeito conhecido como Hoop Burn / Queimadura de Bastidor). A técnica exige bastidoramento flutuante com entretela recortável (Cut-Away), filme plástico hidrossolúvel de topo (Topping) e underlays em grade aberta.",
    "technicalDetails": "Microfilamentos com espessura inferior a 0,3 denier (100 vezes mais finos que um fio de cabelo). Densidade de cobertura recomendada entre 0,40 mm e 0,44 mm. Agulha indicada: Ponta Bola Fina (SES) calibre 75/11 com banho de cromo.",
    "howItWorks": [
      "1. A bordadeira recebe a encomenda de almofadas sofisticadas em tecido suede aveludado para uma loja de decoração.",
      "2. Em vez de prender o tecido suede direto entre os aros de plástico do bastidor:",
      "3. Ela prende apenas a entretela de recorte (Cut-Away 60g) no bastidor bem esticada.",
      "4. Aplica uma névoa suave de cola spray temporária na entretela.",
      "5. Posiciona o tecido suede aveludado por cima, alisando suavemente com a palma da mão (Flutuação).",
      "6. Coloca uma folha de plástico hidrossolúvel (Soluwater) sobre o suede para a linha não afundar no veludo.",
      "7. A máquina borda o desenho perfeitamente apoiado.",
      "8. Ao retirar, remove o plástico com um paninho úmido: o suede fica 100% livre de marcas redondas de bastidor e com o bordado em alto relevo brilhante."
    ],
    "beginnerExplanation": "A microfibra suede e a camurça sintética são aqueles tecidos super aveludados, macios e chiques usados em almofadas, sofás e jaquetas! Se você apertar o aro de plástico do bastidor direto neles, fica uma marca redonda feia amassada que nunca mais sai! O segredo é prender só a entretela no bastidor, colar o tecido por cima sem apertar e colocar um plástico transparente em cima para a linha não afundar no veludo!",
    "applications": [
      "Almofadas de alto luxo, mantas de sofá e artigos de decoração em suede",
      "Jaquetas, casacos e coletes em camurça sintética e tecido Alcantara automotivo",
      "Bolsas femininas, calçados e nécessaires com toque aveludado de camurça",
      "Toalhas de banho e roupões em microfibra atoalhada de secagem rápida"
    ],
    "commonErrors": [
      "❌ Apertar o aro do bastidor direto sobre o suede, deixando uma marca circular prensada irremovível que inutiliza a peça",
      "❌ Borda sem filme hidrossolúvel de topo, fazendo os pontos finos afundarem dentro da pelugem e desaparecerem",
      "❌ Usar entretela rasga-fácil comum em suede elástico, resultando em franzimento e contornos desencaixados"
    ],
    "troubleshootingTips": [
      "Utilize sempre bastidoramento flutuante ou bastidores magnéticos com revestimento emborrachado para nunca marcar o veludo",
      "Coloque uma folha de filme hidrossolúvel (Topping) por cima do suede para garantir que o ponto cheio fique alto e gordinho",
      "Se ficar uma marquinha leve de bastidor: Borrife vapor de ferro a 10 cm de distância e escove o veludo suavemente com uma escovinha macia de dentes"
    ],
    "dicaArtrelados": "O suede e a camurça sintética são os tecidos mais valorizados na decoração de interiores! Nunca aperte o bastidor de plástico neles: faça o tecido flutuar sobre entretela colada com spray e coloque um plástico solúvel por cima. Suas almofadas vão parecer saídas de uma revista internacional de arquitetura!",
    "voceSabia": "O tecido Alcantara (a versão mais nobre de camurça sintética do mundo) foi inventado pelo cientista japonês Miyoshi Okamoto em 1970 e hoje é utilizado no interior dos carros mais caros do planeta, como Ferrari, Porsche e Lamborghini!",
    "practicalExercise": "Pegue um retalho de tecido suede: monte entretela no bastidor, cole o suede por cima com spray, coloque um plástico solúvel em cima e borde um monograma. Remova o plástico e veja a perfeição do veludo sem nenhuma marca de aro!",
    "quickSummary": "Técnica de bastidoramento flutuante e filme de topo para bordar camurça sintética e suede sem marcas de compressão.",
    "relatedTerms": [
      "Bastidoramento Flutuante",
      "Filme Plástico Hidrossolúvel de Topo (Topping)",
      "Entretela de Recorte (Cut-Away)",
      "Tecidos & Substratos"
    ],
    "tags": [
      "m-064",
      "microfibra",
      "camurca sintetica",
      "suede",
      "alcantara",
      "flutuacao",
      "sem marcas",
      "decoracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TORAY INDUSTRIES. Ultrasuede & Advanced Microfiber Processing & Embroidery Guidelines. Tokyo, 2022.",
      "ARTRELADOS. O Toque Nobre do Suede e Camurça Sintética: Bastidoramento Flutuante, Filmes Solúveis e Decoração de Luxo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "m-065-matriz-com-compensacao-parabolica-de-elasticidade",
    "code": "M-065",
    "term": "Matriz com Compensação Parabólica de Elasticidade em Malhas (Parabolic Elasticity Compensation in Knitwear)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da matemática aplicada e da física da deformação viscoelástica de malhas têxteis sujeitas a tração multiaxial.",
    "summary": "Cálculo matemático de compensação variável que engorda as colunas de ponto cheio mais no centro do que nas pontas, neutralizando a deformação de tecidos com elastano.",
    "definition": "A Compensação Parabólica de Elasticidade e Deformação Viscoelástica (Parabolic Pull Compensation / Non-Linear Knitwear Distortion Modeling) é a técnica avançada de programação de matrizes em que os valores de compensação de encolhimento não são aplicados de forma linear e uniforme ao longo do objeto, mas seguem uma curva parabólica quadrática. Em tecidos de malha com alta porcentagem de elastano (Lycra, Suplex, Viscolycra e Malha PV), a tensão de tração exercida pela linha de bordar atinge seu pico máximo exatamente no centro geométrico do bloco bordado, fazendo com que retângulos virem ampulhetas e círculos virem ovais. A modelagem parabólica adiciona expansão geométrica extra (+0,5 mm a +0,8 mm) no terço médio da coluna, compensando com exatidão a contração diferencial do tecido.",
    "technicalDetails": "Equação de compensação: ΔL(x) = C_base + 4 · C_max · (x/L) · (1 - x/L), onde C_max representa a flecha máxima da parábola de encolhimento central. Integração com underlays em malha de ancoragem octogonal.",
    "howItWorks": [
      "1. A confecção esportiva encomenda o bordado de um logotipo retangular de 8x4 cm em tops de ginástica feitos de Suplex com 18% de elastano.",
      "2. Ao bordar com programação comum, as bordas laterais do retângulo encolhem 3 mm para dentro, virando uma 'cintura de ampulheta' feia.",
      "3. O programador aplica a curva de Compensação Parabólica no software.",
      "4. No computador, o desenho fica ligeiramente bojudo para fora no meio (como um pequeno barril suave).",
      "5. A máquina borda o logotipo no tecido Suplex sobre entretela de malha bidirecional.",
      "6. A tração natural das linhas puxa o centro bojudo exatamente para dentro na medida calculada.",
      "7. Ao retirar do bastidor, o bordado relaxa e assume linhas rigorosamente retas e cantos em 90 graus perfeitos."
    ],
    "beginnerExplanation": "Sabe quando você vai bordar em tecido de academia que estica muito (tipo lycra) e um desenho que era para ser um quadrado perfeito fica com a 'cinturinha fina' afundada no meio parecendo uma ampulheta? A compensação parabólica é o truque de mestre no computador que desenha o meio do quadrado um pouquinho mais gordinho para fora. Quando a máquina costura e a linha puxa o tecido elástico, ele fica reto e perfeito como uma régua!",
    "applications": [
      "Bordados em roupas esportivas (Fitness, Suplex, Lycra, Dry-Fit e Poliamida)",
      "Maiôs, biquínis e roupas de banho com alto teor de elastano",
      "Logotipos geométricos rigorosos (quadrados, círculos e brasões) em camisetas de malha",
      "Leggings, macacões de ciclismo e tecidos com elasticidade 4-way stretch"
    ],
    "commonErrors": [
      "❌ Borda formas geométricas puras em malhas elásticas sem compensação de puxão no centro, gerando peças deformadas e tortas",
      "❌ Esticar a malha ao prender no bastidor para tentar compensar o encolhimento (a peça enruga toda quando sai do bastidor)",
      "❌ Usar entretela rasga-fácil que se rompe durante o bordado, permitindo que a malha estique descontroladamente"
    ],
    "troubleshootingTips": [
      "Nunca estique a malha ao prender no bastidor: o tecido deve ficar pousado sobre a entretela 100% neutro e sem tensão",
      "Use entretela recortável especial para malha (Cut-Away de poliester ou Polymesh / No-Show Mesh)",
      "No Wilcom ou Hatch: Aumente a compensação de encolhimento (Pull Compensation) para 0,45 mm a 0,60 mm e selecione o perfil de tecido 'Pique / Single Knit'"
    ],
    "dicaArtrelados": "Vai bordar roupas de ginástica ou tecidos que esticam muito? Nunca puxe a malha no bastidor! Pouse a malha lisinha sobre a entretela Cut-Away e programe a matriz com compensação extra de encolhimento: quando você tirar a peça da máquina, o desenho fica reto, simétrico e perfeito no corpo!",
    "voceSabia": "Os algoritmos de deformação parabólica usados em softwares avançados de bordado foram adaptados de softwares de simulação estrutural da NASA usados para prever a dilatação de materiais em foguetes espaciais!",
    "practicalExercise": "Desenhe um quadrado de 5x5 cm no programa com compensação de 0,5 mm: borde em um retalho de malha de camiseta sem esticar o tecido e meça com uma régua os quatro lados para constatar a simetria perfeita!",
    "quickSummary": "Ajuste geométrico não-linear que neutraliza o encolhimento central em tecidos elásticos com elastano e lycra.",
    "relatedTerms": [
      "Compensação de Encolhimento (Pull Compensation)",
      "Entretela de Malha (Polymesh / No-Show Mesh)",
      "Tecidos Elásticos e Malhas",
      "Programação de Bordado"
    ],
    "tags": [
      "m-065",
      "compensacao parabolica",
      "malha",
      "elastano",
      "suplex",
      "lycra",
      "pull compensation",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AMERICAN APPAREL & FOOTWEAR ASSOCIATION. Knitwear Digitizing, Viscoelastic Recovery & Pull Compensation Dynamics. Washington, 2022.",
      "WILCOM. Advanced Fabric Profiles & Non-Linear Pull Compensation Formulas. Sydney, 2023."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "m-066-manutencao-e-calibracao-do-cortador-automatico-de-linha-trimmer",
    "code": "M-066",
    "term": "Manutenção, Alinhamento e Calibração do Cortador Automático de Linha (Automatic Thread Trimmer Maintenance & Blade Timing)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês 'thread trimmer' (aparador automático de linha). Mecanismo eletromecânico com solenoide e facas de corte cruzado sob a placa de agulha.",
    "summary": "Procedimento periódico de limpeza de fiapos, lubrificação e ajuste da folga de corte entre a faca móvel e a faca fixa para evitar cortes mastigados e pontas longas de linha.",
    "definition": "A Manutenção e Calibração do Sistema Cortador Automático de Linha (Automatic Trimmer System Maintenance / Movable & Fixed Blade Clearance Calibration) é a rotina técnica preventiva de ajuste e afiação do conjunto de corte subterrâneo instalado sob a placa de agulha da máquina de bordar. Acionado por um solenoide eletromagnético ou servomotor de corte ao final de cada bloco de cor ou salto de ponto, o sistema engata a linha superior e a linha da bobina através de um gancho móvel (Faca Móvel) e as cisalha de encontro a uma contra-lâmina temperada (Faca Fixa). O acúmulo de poeira têxtil, resíduos de cola spray ou desgaste micrométrico nas lâminas causa falhas graves de corte (cortes mascados, desfiamento ou caudas de linha excessivamente curtas que desengatam a agulha na próxima cor).",
    "technicalDetails": "Folga entre faca móvel e faca fixa regulada entre 0,02 mm e 0,05 mm com pressão de mola calibrada. Curso do solenoide de engate sincronizado com ângulo de parada de 280° a 300° do volante.",
    "howItWorks": [
      "1. A máquina de bordar passa a falhar nos cortes automáticos, deixando fios compridos de 5 cm entre as letras ou mastigando a linha sem cortar.",
      "2. O operador desliga a máquina e remove a placa de agulha.",
      "3. Com um pincel e ar comprimido suave, limpa um ninho compacto de fiapos e cola spray acumulado sob o trilho da faca móvel.",
      "4. Inspeciona o gume da faca fixa e aplica uma microgota de óleo fino de máquina no trilho deslizante.",
      "5. Ajusta o parafuso micrométrico de pressão da faca fixa com uma folga de teste usando uma linha fina de bordar.",
      "6. Ao acionar o comando de teste manual de corte (Trimmer Test), a faca cisalha a linha com um estalo seco e limpo, sem mastigar.",
      "7. Remonta a placa de agulha: a máquina volta a cortar todas as linhas com acabamento limpo e caudas perfeitas de 1,5 cm."
    ],
    "beginnerExplanation": "O cortador automático é aquela 'tesourinha escondida' que fica embaixo da chapa de ferro da máquina e corta a linha sozinha toda vez que a máquina troca de cor ou pula de uma letra para outra! Com o tempo, acumulam-se fiapinhos de linha e cola spray ali embaixo que fazem a tesourinha ficar cega e mastigar a linha. Uma limpeza rápida com pincel e uma gotinha de óleo deixam o corte afiado e perfeito de novo!",
    "applications": [
      "Eliminação de falhas de corte e fios mastigados entre letras e trocas de cor",
      "Prevenção de desengate de linha na agulha no início de novas cores",
      "Redução drástica do tempo gasto limpando fiapos com tesourinha manual",
      "Aumento da vida útil das lâminas de aço temperado e solenoides de corte"
    ],
    "commonErrors": [
      "❌ Tentar raspar as facas de corte com estilete ou chave de fenda, tirando o fio de corte de fábrica e destruindo as lâminas",
      "❌ Deixar cola spray empastar as facas de corte sem limpar periodicamente com álcool isopropílico",
      "❌ Apertar o parafuso de ajuste da faca fixa com força excessiva, travando o solenoide e queimando o fusível da placa"
    ],
    "troubleshootingTips": [
      "Limpe a área das facas de corte sob a placa de agulha a cada 15 dias com pincel macio e álcool isopropílico",
      "TESTE DA FOLHA DE PAPEL: A faca móvel e fixa devem cortar uma tira de papel fino de seda ou uma linha 40wt de forma limpa sem rasgar",
      "Se a linha escapar do olho da agulha logo após o corte: Aumente o comprimento da cauda de corte (Tail Length) no menu de configurações da máquina"
    ],
    "dicaArtrelados": "A máquina parou de cortar a linha ou está deixando aqueles fios compridos feios no meio do bordado? Retire a chapa de metal e limpe os fiapos da faquinha com um pincel e álcool isopropílico. Em 3 minutos seu cortador volta a estalar cortando rente e você não precisa perder tempo cortando fiapos na mão!",
    "voceSabia": "O sistema de corte automático com faca móvel subterrânea foi inventado no Japão nos anos 1980 e revolucionou a indústria do bordado mundial, economizando bilhões de horas de trabalho manual de corte de fiapos com tesourinha!",
    "practicalExercise": "Retire a chapa da agulha da sua máquina e localize a faca móvel prateada e a faca fixa preta: limpe com cuidado todos os fiapinhos de poeira acumulados ao redor delas e pingue meia gotinha de óleo no trilho deslizante!",
    "quickSummary": "Manutenção periódica de limpeza e ajuste das facas móvel e fixa do sistema automático de corte de linha.",
    "relatedTerms": [
      "Corte Automático de Linha (Jump Stitch Trimming)",
      "Placa de Agulha / Chapa de Ponto",
      "Manutenção Preventiva e Lubrificação",
      "Mecânica & Ajustes"
    ],
    "tags": [
      "m-066",
      "cortador automatico",
      "trimmer",
      "facas de corte",
      "manutencao",
      "fiapos",
      "solenoide",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER SERVICE MANUAL. Automatic Thread Trimmer Mechanism, Adjustment & Blade Timing. Nagoya, 2022.",
      "ARTRELADOS. O Guia do Corte Perfeito: Manutenção de Trimmers, Afiação de Facas e Eliminação de Fios Mastigados no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "m-067-microfibra-e-tecidos-dry-fit-tecnicas-de-fixacao-e-bordado",
    "code": "M-067",
    "term": "Microfibra e Tecidos Dry-Fit: Técnicas de Fixação e Bordado (Microfiber & Moisture-Wicking Dry-Fit Digitizing)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego mikros (pequeno, filamento micrométrico menor que 1 decitex) e do inglês dry-fit (ajuste que absorve suor e seca rápido). Têxteis tecnológicos de alta performance esportiva.",
    "summary": "Parâmetros técnicos com entretela de corte suave (Cut-Away), agulha ponta bola fina e underlay de grade para bordar tecidos esportivos sem repuxo.",
    "definition": "O bordado em microfibra e malhas esportivas tipo Dry-Fit (poliéster ou poliamida com elastano/spandex e textura microperfurada) representa um dos maiores desafios de estabilização no ateliê. Por possuir altíssima elasticidade multidirecional e baixa gramatura (110 g/m² a 160 g/m²), o tecido tende a enrugar ao redor dos pontos se não for devidamente estabilizado. Exige o uso indispensável de entretela de malha recortável (Cut-Away No-Show Mesh de 50g), agulha ponta bola fina (Ball Point SES/FFG) nº 65/9 ou 70/10, redução de densidade (de 0,40 mm para 0,45 mm a 0,48 mm) e compensação de repuxo generosa (0,40 mm).",
    "technicalDetails": "Agulha: Schmetz ou Groz-Beckert 65/9 SES (Light Ball Point). Entretela: Cut-Away de poliamida multidirecional termoestável. Underlay: Grade dupla leve (Tatami aberto 2,5 mm) para ancorar o tecido à entretela.",
    "howItWorks": [
      "1. A bordadeira aplica uma camada de entretela Cut-Away No-Show Mesh no verso da camisa Dry-Fit utilizando adesivo temporário em spray.",
      "2. Coloca o conjunto no bastidor com tensão moderada, sem esticar a malha esportiva com as mãos.",
      "3. Instala agulha fina ponta bola nº 70/10 para abrir as tramas do fio sem furar nem cortar as fibras sintéticas.",
      "4. A máquina executa a matriz com densidade aliviada e underlay em grade.",
      "5. Ao finalizar, recorta o excesso da entretela pelo avesso com tesoura de ponta curvada, deixando uma margem redonda de 1 cm.",
      "6. A peça esportiva mantém o toque suave no corpo, a respirabilidade do tecido e o bordado 100% plano sem rugas mesmo após dezenas de lavagens."
    ],
    "beginnerExplanation": "É o jeito certo de bordar aquelas camisetas de academia ou corrida que são super levinhas e esticam bastante. Se a gente bordar de qualquer jeito, o desenho repuxa e vira uma conchinha dura. O segredo é usar agulha fininha de ponta arredondada, entretela que não rasga (para segurar o elástico) e diminuir a quantidade de pontos do desenho.",
    "applications": [
      "Camisetas e uniformes esportivos de corrida, ciclismo, futebol e academia",
      "Polos masculinas e femininas em malha tecnológica de alta respirabilidade",
      "Jaquetas corta-vento e coletes de microfibra hidrorrepelente",
      "Shorts e bermudas de compressão em poliamida com elastano"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável comum de papel, que se rompe com o movimento da agulha e deixa a malha esportiva enrugar e deformar completamente",
      "❌ Puxar e esticar a camiseta ao prender o bastidor, fazendo o bordado encolher como um acordeão ao soltar a peça",
      "❌ Usar agulha grossa de ponta cortante (Sharp 90/14), que rasga os filamentos sintéticos e abre buracos permanentes ao redor das letras"
    ],
    "troubleshootingTips": [
      "Ao colocar no bastidor, nunca 'estique' a malha com os dedos: apenas assente o tecido suavemente sobre o aro",
      "Borrife o adesivo spray na entretela e nunca diretamente na camiseta esportiva",
      "Adicione um contorno leve de ponto corrido antes das colunas cheias para travar a malha contra o deslizamento"
    ],
    "dicaArtrelados": "O mercado de uniformes esportivos e academias paga muito bem! Para conquistar esse cliente, use sempre entretela Cut-Away No-Show (aquela fininha de nylon que se corta com a tesoura). O avesso fica super macio na pele do atleta e o bordado não enruga nunca!",
    "voceSabia": "Um único fio de microfibra esportiva é até 100 vezes mais fino que um fio de cabelo humano e duas vezes mais fino que a seda natural da amoreira.",
    "practicalExercise": "Pegue um retalho de malha de academia (Dry-Fit). Borde uma letra em um pedaço com entretela rasgável e outra letra em um pedaço com entretela Cut-Away. Puxe as duas amostras com as mãos e veja a diferença brutal de firmeza e acabamento!",
    "quickSummary": "Técnica com entretela recortável e agulha ponta bola fina para bordar tecidos esportivos sem repuxar.",
    "relatedTerms": [
      "Entretela de Recorte (Cut-Away)",
      "Agulha Ponta Bola (Ball Point)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Técnicas de Bordado"
    ],
    "tags": [
      "m-067",
      "microfibra",
      "dry-fit",
      "esportivo",
      "poliester",
      "cut-away",
      "malharia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Manual de Bordados de Alta Performance em Malhas Tecnológicas e Dry-Fit. São Paulo, 2024.",
      "MADEIRA THREADS. Embroidery on Performance Wear and Microfiber Fabrics. Freiburg, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-068-muelle-de-tira-hilo-e-mola-de-compensacao-de-tensao-superior",
    "code": "M-068",
    "term": "Muelle de Tira-Hilo e Mola de Compensação de Tensão Superior (Check Spring / Thread Take-Up Auxiliary Spring)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do espanhol muelle (mola elástica de arame) e do inglês check spring (mola de verificação e controle de folga de fio). Engenharia mecatrônica de cabeçotes de bordado.",
    "summary": "Mola de arame em espiral nos discos tensores que absorve a folga da linha e evita que ela frouxe quando a agulha penetra o tecido.",
    "definition": "A mola de compensação de tensão superior (Check Spring ou Muelle Tira-Hilo) é um componente mecânico de arame de aço mola calibrado montado no interior do conjunto dos discos tensores de cada agulha. Sua função cinemática é absorver o excesso de folga da linha durante o movimento de descida do estica-fio, mantendo o fio sob tensão leve e constante até o exato milissegundo em que a ponta da agulha perfura o tecido. Sem essa mola devidamente regulada em ângulo de curso (30° a 45°) e pressão, a linha frouxa cria laçadas falsas, quebra por repuxo ou é cortada pela ponta da agulha.",
    "technicalDetails": "Ângulo de deflexão do curso: 30° a 45° (ou 6 mm a 8 mm de deslocamento na ponta). Tensão de retorno: 3 cN a 7 cN (ajustável pelo parafuso de fenda do eixo tensor). Diâmetro do arame de aço: 0,35 mm a 0,45 mm.",
    "howItWorks": [
      "1. A linha passa entre os discos de tensão e é encaixada no gancho da mola de compensação.",
      "2. Conforme o estica-fio sobe para fechar o ponto, a mola flexiona e acompanha a tração da linha.",
      "3. Quando o estica-fio começa a descer para iniciar o próximo ponto, a mola atua puxando o excesso de linha para trás.",
      "4. O fio permanece reto e esticado na frente da agulha durante toda a descida.",
      "5. No momento em que a agulha entra no tecido, a mola atinge o batente metálico e libera a linha suavemente.",
      "6. A laçada inferior é formada com total limpeza e sem fios soltos na chapa da máquina."
    ],
    "beginnerExplanation": "É aquela molinha de arame bem fininha que fica balançando para cima e para baixo pertinho dos discos onde a linha passa. Ela serve como um 'amortecedor' que recolhe a folga da linha para que o fio não fique bambo nem enrosque na ponta da agulha na hora que ela desce no tecido.",
    "applications": [
      "Manutenção e ajuste de precisão em cabeçotes industriais e semi-industriais",
      "Eliminação de laçadas soltas e 'pelos' de linha na face superior do bordado",
      "Prevenção de quebras repentinas de linha na troca de cores ou início de alta velocidade",
      "Regulagem específica para linhas difíceis como metálicas, poliamida e fios elásticos"
    ],
    "commonErrors": [
      "❌ Deixar a mola quebrada, torta ou travada com poeira, fazendo a linha ficar frouxa e embolar na caixa de bobina",
      "❌ Regular a pressão da mola forte demais, arrebentando a linha superior em cada subida do estica-fio",
      "❌ Montar o fio de linha fora do gancho da mola durante a passagem de linha pelo cabeçote"
    ],
    "troubleshootingTips": [
      "Empurre a ponta da molinha com o dedo: ela deve subir e descer suavemente com retorno imediato e elástico",
      "Se a mola estiver mole demais ou sem retorno, solte o parafuso de ajuste lateral e gire o eixo para dar meia volta de pressão na mola",
      "Ao passar a linha na máquina, certifique-se de que a linha 'clicou' por trás do gancho da mola"
    ],
    "dicaArtrelados": "Sempre que uma agulha da sua máquina começar a quebrar linha sem explicação, dê uma olhada nessa molinha! Se ela estiver torta ou solta, a máquina perde o sincronismo da folga do fio. É uma pecinha barata que faz uma diferença gigantesca no resultado final!",
    "voceSabia": "Em máquinas com 15 agulhas, existem 15 molas de compensação individuais montadas no cabeçote, uma para cada cor de linha, devendo todas estar calibradas com a mesmíssima pressão de retorno.",
    "practicalExercise": "Olhe com atenção para os discos de tensão da sua máquina enquanto ela está bordando. Observe o movimento rítmico da molinha subindo e descendo em perfeita sincronia com a agulha!",
    "quickSummary": "Mola elástica que absorve a folga da linha e mantém o fio esticado durante a descida da agulha.",
    "relatedTerms": [
      "Tensão da Linha Superior",
      "Estica-Fio (Take-Up Lever)",
      "Cabeçote de Bordado",
      "Componentes da Máquina"
    ],
    "tags": [
      "m-068",
      "muelle",
      "check spring",
      "mola de tensao",
      "estica-fio",
      "mecanica",
      "regulagem",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Upper Thread Tension Assembly and Check Spring Adjustment. Nagoya, 2023.",
      "BARUDAN. Mechanical Service Handbook: Thread Take-Up Spring Tension Calibration. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-069-marca-dagua-e-assinatura-digital-em-arquivos-de-matriz",
    "code": "M-069",
    "term": "Marca d'Água e Assinatura Digital em Arquivos de Matriz (Digital Watermarking & Embroidery File Copyright Tagging)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do italiano filigrana / marca d'acqua (marca visível em papéis artesanais contra a luz desde o século XIII) e do latim signatura (assinatura de autoria). Proteção de direitos autorais e propriedade intelectual no design têxtil.",
    "summary": "Técnicas de proteção com logotipo em imagens de apresentação e metadados autorais em arquivos de matrizes de bordado.",
    "definition": "A marca d'água e assinatura digital em arquivos de matriz de bordado (Digital Watermarking & Embroidery Copyright Metadata) é o conjunto de procedimentos técnicos que visa proteger os direitos de criação do programador e ateliê. Consiste na aplicação de marcas visuais semitransparentes em imagens simuladas (.PNG/.JPG) enviadas para aprovação do cliente, bem como na inserção de metadados criptografados ou campos de texto de autor no cabeçalho do arquivo de bordado (como formato de arquivo nativo .EMB, .JAN ou .PES), garantindo a autenticidade, histórico de versão e rastreabilidade da matriz.",
    "technicalDetails": "Gravação de metadados em cabeçalho hexadecimal (Header Tags: Author, Company, Copyright Year, Version UUID). Camada gráfica de marca d'água com 20% a 30% de opacidade em PNG alpha channel.",
    "howItWorks": [
      "1. Ao concluir a criação da matriz no software, o programador acessa a janela de 'Propriedades do Design'.",
      "2. Preenche os campos de Autor, Nome do Ateliê, CNPJ/CPF, Data de Criação e Instruções de Uso.",
      "3. O software grava essas informações de forma permanente no cabeçalho do arquivo digital.",
      "4. Ao gerar a imagem de pré-visualização 3D para aprovação do cliente no WhatsApp ou e-mail, aplica a marca d'água do ateliê em diagonal.",
      "5. O cliente visualiza a simulação real do bordado sem poder copiar ou vetorizar o desenho.",
      "6. A propriedade intelectual do ateliê fica 100% protegida contra pirataria e uso indevido."
    ],
    "beginnerExplanation": "É como colocar a sua assinatura de artista nas matrizes que você cria! Nas fotos que você manda para o cliente aprovar, você coloca o seu logotipo meio transparente por cima para ninguém copiar seu trabalho. E dentro do arquivo que vai para a máquina, fica gravado o seu nome e o nome do seu ateliê para sempre.",
    "applications": [
      "Envio de orçamentos e simulações 3D para clientes antes da aprovação do pagamento",
      "Venda de coleções de matrizes autorais em lojas virtuais e redes sociais",
      "Registro de autoria de monogramas e logotipos exclusivos criados para empresas",
      "Organização do acervo digital do ateliê com dados de quem programou e a data"
    ],
    "commonErrors": [
      "❌ Enviar a matriz pronta em arquivo de máquina (.PES, .DST) para o cliente antes de receber o sinal ou pagamento do serviço",
      "❌ Enviar imagens de aprovação sem marca d'água em altíssima resolução, facilitando que terceiros usem conversão automática de imagem",
      "❌ Deixar os campos de autor da matriz em branco, perdendo o registro histórico da criação"
    ],
    "troubleshootingTips": [
      "Utilize ferramentas gratuitas de marca d'água em lote ou gere as simulações direto pelo software de bordado com seu logo configurado",
      "Salve sempre uma cópia mestre no formato original do programa (ex: .EMB) contendo todas as curvas e camadas vetoriais intactas",
      "Crie um contrato simples de prestação de serviços com termos de cessão de direitos de bordado para marcas registradas"
    ],
    "dicaArtrelados": "Valorize o seu tempo e o seu talento de criação! Nunca mande a simulação de um bordado exclusivo sem a sua marquinha bonita por cima. Além de proteger o seu trabalho, transmite uma imagem super profissional e elegante para o seu cliente!",
    "voceSabia": "Os primeiros monogramas de nobreza gravados em matrizes mecânicas no século XIX incluíam pequenas iniciais em micro-pontos escondidas no avesso do bordado para provar a autenticidade do artesão em cortes reais.",
    "practicalExercise": "Abra seu programa de bordados, vá em 'Arquivo > Propriedades do Desenho' e preencha seu nome e o nome do seu ateliê. Salve o arquivo e abra em outro computador para ver seus dados gravados na ficha técnica!",
    "quickSummary": "Proteção de direitos autorais com marca d'água nas simulações e dados de autor gravados na matriz.",
    "relatedTerms": [
      "Software de Digitalização",
      "Ordem de Serviço (OS) no Ateliê",
      "Formatos de Arquivo de Bordado",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "m-069",
      "marca dagua",
      "assinatura digital",
      "direitos autorais",
      "metadados",
      "propriedade intelectual",
      "gestao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Gestão Operacional, Fichas Técnicas e Controle de Qualidade no Ateliê de Bordados. São Paulo, 2024.",
      "WILCOM. Design Properties, Security and Metadata Management Handbook. Sydney, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-070-mosaico-de-lantejoulas-e-dispositivo-de-paetes-duplos-reversiveis",
    "code": "M-070",
    "term": "Mosaico de Lantejoulas e Dispositivo de Paetês Duplos/Reversíveis (Sequin Mosaic & Dual Reversible Sequin Device)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Acessórios e Dispositivos Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do árabe sikka (moeda brilhante cunhada) e do francês paillette (pequena palha dourada cintilante). Moda festiva e efeitos mágicos interativos.",
    "summary": "Alimentador mecânico acoplado à máquina que aplica lantejoulas e cria desenhos mágicos reversíveis que mudam de cor ao passar a mão.",
    "definition": "O mosaico de lantejoulas e dispositivo de paetês duplos (Automatic Sequin / Dual Sequin Device) é um implemento mecatrônico de alta precisão fixado lateralmente na barra de agulhas da máquina de bordar industrial. Alimentado por fitas contínuas de lantejoulas plásticas (de 3 mm a 9 mm de diâmetro), o dispositivo desenrola a fita, corta cada disco individualmente com uma lâmina micrométrica e posiciona o paetê sob a agulha, que o fixa através de pontos em estrela, Y ou triângulo. Com sistemas de paetê duplo ou reversível ('paetê mágico'), é possível criar desenhos interativos que revelam uma imagem ou cor diferente ao se passar a mão na direção oposta.",
    "technicalDetails": "Velocidade operacional com paetês: 600 a 850 RPM. Tipos de fixação: Ponto em X, ponto em triângulo (3 pontos) ou ponto central com arremate. Espessura dos discos: 0,15 mm a 0,20 mm em poliéster metalizado.",
    "howItWorks": [
      "1. O rolo de fita de paetê (com duas cores ou faces contrastantes) é instalado no carretel superior do dispositivo.",
      "2. A matriz de bordado envia os códigos de comando especial para alimentação de lantejoula.",
      "3. O braço mecânico avança 1 paetê exatamente sobre o furo do tecido.",
      "4. A faca pneumática corta a ponte plástica da fita de lantejoula.",
      "5. A agulha desce através do orifício central do paetê e costura as laçadas de fixação.",
      "6. O pantógrafo se desloca formando uma escamação contínua e sobreposta.",
      "7. Cria-se o famoso efeito de 'paetê mágico' que muda de figura ao inverter a inclinação das lantejoulas."
    ],
    "beginnerExplanation": "É aquele aparelhinho incrível que coloca lantejoulas e paetês na máquina de bordar! Ele corta cada lantejoulazinha e a máquina costura no lugar certo uma por uma. É com ele que se fazem aquelas camisetas infantis e almofadas que mudam de cor ou mostram outro desenho quando você passa a mão por cima!",
    "applications": [
      "Roupas infantis interativas com o famoso efeito de 'paetê mágico' reversível",
      "Vestidos de festa, fantasias de carnaval, figurinos de dança e alta-costura",
      "Almofadas decorativas e bolsas glamourosas com frases que mudam de cor",
      "Emblemas e patches luminosos para moda jovem e street-wear"
    ],
    "commonErrors": [
      "❌ Rodar a máquina com paetês na velocidade máxima de pontos comuns (1.000 RPM), desalinhando o alimentador e quebrando agulhas contra o metal",
      "❌ Usar linha grossa de má qualidade que tampa o buraquinho do paetê e não permite que ele gire livremente para o efeito reversível",
      "❌ Configurar o espaçamento entre lantejoulas muito apertado no software, fazendo um disco subir em cima do outro de forma torta"
    ],
    "troubleshootingTips": [
      "Calibre a velocidade da máquina para 650–750 RPM ao bordar áreas com aplicação contínua de lantejoulas",
      "Utilize linha de bordar nº 40 de poliéster de alta tenacidade ou fio de monofilamento de poliamida transparente",
      "Limpe a guia da lâmina de corte de paetês periodicamente para retirar fragmentos de plástico picado"
    ],
    "dicaArtrelados": "Peças com paetê reversível têm um apelo irresistível no público infantil e jovem! O cliente vê a mágica de passar a mão e mudar o desenho na hora. Se você tiver máquina com esse dispositivo, faça amostras para vitrine e veja suas vendas decolarem!",
    "voceSabia": "A palavra lantejoula vem do latim lenticula (pequena lentilha), referindo-se ao formato achatado e redondo das primeiras lantejoulas de ouro e prata costuradas em mantos reais no Egito Antigo.",
    "practicalExercise": "Pegue uma almofada ou peça de roupa com paetê mágico reversível. Olhe com uma lupa a costura no centro de cada lantejoula: veja como a linha forma um ponto fixo permitindo que o disquinho gire para cima e para baixo!",
    "quickSummary": "Dispositivo para costurar lantejoulas automaticamente e criar efeitos mágicos que mudam de cor com o toque.",
    "relatedTerms": [
      "Acessórios e Dispositivos Especiais",
      "Software de Digitalização",
      "Cabeçote de Bordado",
      "Máquinas Industriais"
    ],
    "tags": [
      "m-070",
      "lantejoula",
      "paete",
      "paete magico",
      "dispositivo especial",
      "moda festa",
      "brilho",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Sequin Device Installation and Programming Guide. Nagoya, 2023.",
      "BARUDAN. Multi-Sequin Attachment and Maintenance Handbook. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-071-modulacao-de-largura-de-pulso-pwm-no-controle-de-motores",
    "code": "M-071",
    "term": "Modulação de Largura de Pulso (PWM) no Controle de Motores (Pulse Width Modulation in Embroidery Actuators & Motors)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês Pulse Width Modulation (técnica eletrônica de controle de potência por variação do ciclo de trabalho inventada nos anos 1960).",
    "summary": "Controle eletrônico digital que varia a velocidade e o torque dos motores da máquina por pulsos rápidos de energia sem esquentar os componentes.",
    "definition": "A Modulação por Largura de Pulso (Pulse Width Modulation - PWM) é a tecnologia eletrônica de controle digital utilizada pela placa-mãe e drivers da máquina de bordar para dosar a potência elétrica entregue aos servomotores, motores de passo, solenoides de corte e freios eletromagnéticos. Em vez de variar a voltagem de forma linear (o que dissiparia enorme quantidade de calor), o circuito liga e desliga a tensão em frequências ultra-altas (de 10 kHz a 40 kHz), variando apenas a porcentagem de tempo em que a corrente fica ligada (Duty Cycle de 0% a 100%), garantindo controle de torque máximo, aceleração milimétrica e altíssima eficiência energética.",
    "technicalDetails": "Frequência de chaveamento PWM: 20 kHz a 32 kHz (inaudível ao ouvido humano). Resolução de ciclo de trabalho: 12 bits a 16 bits. Controle de corrente em malha fechada via sensores de efeito Hall.",
    "howItWorks": [
      "1. A CPU da máquina calcula que precisa mover o pantógrafo em 3,2 mm na diagonal no eixo X e Y.",
      "2. O microprocessador gera um sinal de controle PWM com Duty Cycle calculado para aquela distância e velocidade.",
      "3. Transistores MOSFET de potência comutam a corrente de 24V ou 48V milhares de vezes por segundo.",
      "4. O servomotor responde com torque firme e suave, sem solavancos nem perda de passos.",
      "5. Para acionar o solenoide de corte, o PWM envia 100% de energia no primeiro milissegundo para puxar a faca e reduz para 30% apenas para segurar, evitando queimar a bobina.",
      "6. A máquina opera de forma fria, econômica, precisa e extremamente confiável por jornadas contínuas de 24 horas."
    ],
    "beginnerExplanation": "É o sistema eletrônico inteligente que controla a força dos motores da máquina ligando e desligando a energia milhares de vezes por segundo, como se fosse um interruptor super veloz. Isso faz com que os motores se movam com precisão de milímetros sem esquentar a máquina nem gastar energia à toa.",
    "applications": [
      "Controle de velocidade variável contínua do eixo principal (de 100 a 1.200 RPM)",
      "Posicionamento micrométrico dos eixos X e Y do pantógrafo",
      "Acionamento de solenoides de corte automático e pegador de linha sem superaquecimento",
      "Regulação da intensidade do LED de iluminação do cabeçote"
    ],
    "commonErrors": [
      "❌ Instalar placas de motor genéricas sem os filtros PWM adequados, gerando ruídos eletromagnéticos que travam a tela da máquina",
      "❌ Obstruir as ventoinhas de refrigeração traseiras da máquina, fazendo os transistores PWM superaquecerem e entrarem em modo de proteção",
      "❌ Ligar a máquina em tomadas sem aterramento elétrico adequado"
    ],
    "troubleshootingTips": [
      "Mantenha a caixa da placa eletrônica livre de poeira e fiapos com limpeza periódica a seco",
      "Em caso de perda súbita de força do motor em baixas velocidades, chame a assistência técnica para checar os módulos de potência do driver",
      "Utilize sempre estabilizadores ou no-breaks senoidais para proteger os circuitos de chaveamento PWM da máquina"
    ],
    "dicaArtrelados": "A eletrônica das máquinas de bordar modernas é comparável à de robôs industriais! Cuidar da rede elétrica da sua oficina com um bom aterramento e no-break garante que esses circuitos eletrônicos inteligentes durem muitos e muitos anos sem dar dor de cabeça!",
    "voceSabia": "A frequência do PWM nas máquinas modernas é ajustada acima de 20.000 Hz especificamente para que fique acima da faixa audível humana, eliminando aquele zumbido agudo e tornando a máquina super silenciosa.",
    "practicalExercise": "Ligue a luz LED de iluminação da sua máquina de bordar e observe se ela permite ajustar o brilho (mais forte ou mais fraco). Essa mudança de brilho é feita exatamente pela tecnologia PWM variando os pulsos de luz!",
    "quickSummary": "Tecnologia digital que controla motores e solenoides por pulsos elétricos rápidos sem esquentar a máquina.",
    "relatedTerms": [
      "Servomotor de Eixo X e Y",
      "Hardware de Controle DSP e Placa-Mãe",
      "Solenoide de Corte",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "m-071",
      "pwm",
      "eletronica",
      "controle de motores",
      "servomotor",
      "duty cycle",
      "solenoide",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Electronic Control Board and PWM Servo Drive Architecture. Nagoya, 2023.",
      "BARUDAN. Motor Control Circuitry and Inverter Drive Systems Manual. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-072-matriz-monocromatica-e-tecnicas-de-redwork-blackwork-computadorizado",
    "code": "M-072",
    "term": "Matriz Monocromática e Técnicas de Redwork/Blackwork Computadorizado (Monochrome Embroidery, Redwork & Blackwork Digitizing)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego monos (um só) e chroma (cor). O Redwork e Blackwork são estilos históricos tradicionais de bordado manual do século XVI na Inglaterra e século XIX na América, adaptados para matrizes digitais.",
    "summary": "Digitalização de matrizes em uma única cor com traços contínuos em ponto corrido triplo (Bean Stitch) com estilo vintage.",
    "definition": "A matriz monocromática (Single Color Digitizing) e as técnicas digitalizadas de Redwork (linha vermelha sobre tecido branco/cru), Bluework (azul) e Blackwork (preto ou carvão) constituem um estilo clássico de programação de bordados caracterizado pelo uso de uma única cor de linha em toda a composição. A arte da programação consiste em criar trajetórias vetoriais contínuas interligadas predominantemente por ponto corrido triplo (Bean Stitch de 2,5 mm a 3,0 mm) ou ponto caule, eliminando saltos e cortes de linha internos para produzir um bordado fluido, extremamente rápido na máquina e com acabamento visual nostálgico e artesanal.",
    "technicalDetails": "Comprimento do ponto corrido triplo: 2,5 mm a 3,2 mm (3 repetições por furo). Densidade de traçado: único sem underlay pesado. Tempo médio de execução em máquina: 2 a 5 minutos por desenho.",
    "howItWorks": [
      "1. A programadora desenha ou importa uma ilustração linear (estilo desenho à mão livre ou gravura vintage).",
      "2. Planeja o caminho sequencial contínuo para que a agulha vá e volte pelos mesmos traços sem dar saltos (Branching automático ou manual).",
      "3. Aplica o ponto corrido triplo (Bean Stitch) para dar espessura e destaque ao contorno com aspecto de ponto feito à mão.",
      "4. A máquina executa o bordado do início ao fim sem nenhuma troca de cor e com apenas 1 corte no final.",
      "5. A peça fica pronta em poucos minutos, com avesso ultra limpo e sem nós internos.",
      "6. O resultado encanta pela delicadeza atemporal e elegância minimalista."
    ],
    "beginnerExplanation": "É o famoso estilo de bordado em uma cor só (como vermelho no pano branco ou preto no linho cru). Ele parece com aqueles bordados antigos de vovó feitos com muito carinho à mão. Como não tem trocas de cor nem cortes no meio do caminho, a máquina borda super rápido em poucos minutinhos!",
    "applications": [
      "Panos de prato, toalhas de lavabo e jogos americanos com desenhos de cozinha vintage",
      "Enxovais clássicos de bebê com ilustrações delicadas de animais e contos de fadas",
      "Bordados natalinos em vermelho e branco (estilo escandinavo) e páscoa",
      "Barrados geométricos elegantes em toalhas de mesa e lençóis de linho"
    ],
    "commonErrors": [
      "❌ Programar a matriz com dezenas de cortes de linha e saltos soltos, fazendo a máquina parar a cada traço em vez de fazer um caminho contínuo",
      "❌ Usar ponto corrido simples de 1 passada, que fica fino demais e 'some' nas fibras do tecido",
      "❌ Usar entretela grossa e pesada em um desenho que é leve e delicado"
    ],
    "troubleshootingTips": [
      "Utilize a ferramenta de 'Ramificação / Branching' no seu software para juntar todas as linhas em uma trajetória contínua automática",
      "Use entretela rasgável leve de 40g ou 50g, fácil de retirar sem repuxar os pontinhos delicados",
      "Em tecidos atoalhados ou com felpa, aplique um plástico hidrossolúvel fino por cima para os pontinhos não afundarem"
    ],
    "dicaArtrelados": "Matrizes monocromáticas de Redwork são campeãs de vendas para feiras de artesanato e presentes de fim de ano! Elas gastam pouquíssima linha, bordam em menos de 5 minutos na máquina e têm um charme rústico que os clientes amam!",
    "voceSabia": "O estilo Redwork ficou famoso mundialmente nos Estados Unidos na década de 1870 porque a linha vermelha de algodão 'Turkey Red' era a única cor da época que não desbotava nem manchava nas lavagens com sabão caseiro e água fervente.",
    "practicalExercise": "Crie no seu software uma flor simples usando apenas a ferramenta de ponto corrido triplo (Bean Stitch). Conecte as pétalas ao caule sem dar nenhum corte de linha e borde com linha vermelha sobre um pano de prato branco!",
    "quickSummary": "Estilo elegante de bordado em uma só cor com traços contínuos rápidos e charme vintage.",
    "relatedTerms": [
      "Ponto Corrido Triplo (Bean Stitch)",
      "Ramificação Automática (Branching)",
      "Ponto Corrido (Running Stitch)",
      "Programação de Bordado"
    ],
    "tags": [
      "m-072",
      "redwork",
      "blackwork",
      "monocromatico",
      "bean stitch",
      "vintage",
      "uma cor",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. A Arte da Programação Contínua: Redwork, Blackwork e Matrizes Monocromáticas. São Paulo, 2024.",
      "WILCOM. Branching Tools and Single-Color Continuous Path Embroidery. Sydney, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-073-mapeamento-de-tensao-por-dinamometro-tensiometro-towa",
    "code": "M-073",
    "term": "Mapeamento de Tensão por Dinamômetro Tensiômetro Towa (Towa Tension Gauge Thread Mapping Workflow)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Ferramentas do Bordador",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da marca industrial japonesa Towa Appliance Co. Ltd. (fabricante dos mais precisos tensiômetros mecânicos e digitais para caixas de bobina desde 1968).",
    "summary": "Método de medição exata da tensão da bobina (20–25 gf) e da agulha com aparelho tensiômetro Towa, sem achismos.",
    "definition": "O mapeamento de tensão por tensiômetro Towa (Towa Bobbin & Top Thread Tension Gauge Calibration) é o procedimento metrológico padrão da indústria de bordado que substitui o empirismo ('ajuste no olho') por medições quantitativas exatas em gramas-força (gf) ou centinewtons (cN). Utilizando o tensiômetro Towa específico para caixas de bobina tipo L ou M e o medidor de linha superior, o operador calibra a pressão da mola da bobina para valores ideais de 20 a 25 gf para linha nº 60/poliéster e ajusta a linha superior para 110 a 130 gf, garantindo o equilíbrio perfeito de 1/3 de linha superior nas laterais e 1/3 de linha branca no centro do avesso (regra de ouro do bordado).",
    "technicalDetails": "Escala de medição da bobina: 0 a 50 gf (Towa TM-1 ou TM-3 Digital). Tensão ideal da carretilha: 22 gf ± 2 gf. Tensão da linha superior: 120 gf ± 10 gf a 600 RPM. Repetibilidade de medição: 98%.",
    "howItWorks": [
      "1. A bordadeira encaixa a caixa de bobina com a carretilha carregada dentro do compartimento do tensiômetro Towa.",
      "2. Passa a ponta da linha de bobina pelas roldanas de medição e pelo gancho do dinamômetro.",
      "3. Puxa a linha de forma suave e contínua com a mão.",
      "4. O ponteiro analógico ou display digital indica o valor exato da tensão em gramas-força (ex: 22 gf).",
      "5. Se o valor estiver alto (35 gf), gira o parafuso da caixa de bobina no sentido anti-horário em 1/8 de volta.",
      "6. Repete o teste até cravar entre 20 e 25 gf.",
      "7. Todas as agulhas da máquina passam a bordar com precisão cirúrgica, sem quebras e com o avesso perfeito."
    ],
    "beginnerExplanation": "É uma balancinha de precisão especial feita no Japão para medir a força com que a linha sai da caixinha da bobina. Em vez de ficar adivinhando ou puxando com a mão na sorte, esse aparelho mostra o número exato no ponteiro para a tensão ficar perfeita de primeira!",
    "applications": [
      "Calibração de precisão em ateliês profissionais e indústrias de confecção",
      "Padronização da mesma tensão entre múltiplas máquinas ou múltiplos cabeçotes",
      "Diagnóstico definitivo de problemas de laçadas frouxas ou linhas arrebentando",
      "Treinamento de novas bordadeiras e controle de qualidade rigoroso"
    ],
    "commonErrors": [
      "❌ Puxar a linha no tensiômetro com trancos fortes e rápidos em vez de puxar de forma lenta e constante, gerando leitura errada",
      "❌ Tentar calibrar a caixa de bobina com sujeira e restos de cera acumulados sob a mola metálica",
      "❌ Apertar o parafuso minúsculo da bobina com chave de tamanho inadequado, espanando a fenda da mola"
    ],
    "troubleshootingTips": [
      "Passe um pedacinho de papel cartão sob a mola da caixa de bobina para tirar resíduos antes de medir no tensiômetro",
      "Use caixas de bobina originais de boa qualidade com mola de aço não deformada",
      "Calibre a tensão da bobina sempre que trocar de marca ou de espessura de linha inferior"
    ],
    "dicaArtrelados": "Ter um tensiômetro Towa no ateliê é o maior divisor de águas! Você nunca mais vai perder tempo brigando com a tensão da máquina. Em 10 segundos você mede, ajusta para 22 gf e o seu bordado roda redondinho sem nenhuma quebra!",
    "voceSabia": "O tensiômetro Towa foi criado a pedido de fábricas têxteis japonesas nos anos 1960 para que os técnicos pudessem padronizar centenas de máquinas industriais com a exata mesma pressão em segundos.",
    "practicalExercise": "Coloque sua caixa de bobina no tensiômetro Towa (ou faça o teste da queda da bobina na palma da mão). Ajuste o parafuso minúsculo aos poucos até sentir a linha puxar macia e constante sem travar.",
    "quickSummary": "Aparelho japonês de medição precisa da tensão da bobina em gramas-força para avessos perfeitos.",
    "relatedTerms": [
      "Tensão da Linha da Bobina",
      "Caixa de Bobina (Bobbin Case)",
      "Regra do 1/3 do Avesso Perfeito",
      "Ferramentas do Bordador"
    ],
    "tags": [
      "m-073",
      "tensiometro",
      "towa",
      "tensao",
      "bobina",
      "calibracao",
      "gramas-forca",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA APPLIANCE CO. Operation Manual: TM-1 & TM-3 Digital Tension Gauges. Tóquio, 2023.",
      "ARTRELADOS. Calibração de Tensão de Precisão e Uso do Tensiômetro Towa. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-074-mesa-de-extensao-tubular-e-suporte-pantografico-de-braco-livre",
    "code": "M-074",
    "term": "Mesa de Extensão Tubular e Suporte Pantográfico de Braço Livre (Tubular Extension Table & Free-Arm Embroidery Support)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Insumos e Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim mensa (superfície plana de apoio) e do francês tubulaire / pantographe. Ergonomia e sustentação de carga mecânica em bordados de peças pesadas.",
    "summary": "Mesa plana de apoio encaixável no braço da máquina que sustenta o peso de jaquetas, toalhas e colchas sem entortar o bastidor.",
    "definition": "A mesa de extensão tubular (Free-Arm Tubular Extension Table) é um acessório de apoio ergonômico e mecânico confeccionado em resina acrílica de alta densidade ou liga de alumínio que se acopla ao redor do braço livre da máquina de bordar. Sua função técnica é nivelar a área ao redor da chapa de agulha e criar uma ampla superfície plana para sustentar o peso físico de peças têxteis volumosas e pesadas (como jaquetas jeans, toalhas de banho gigantes, roupões e colchas). Ao suportar a gravidade da peça, a mesa impede que o peso do tecido puxe o bastidor para baixo, prevenindo deformação de contornos, desalinhamento de camadas e sobrecarga nos servomotores do pantógrafo.",
    "technicalDetails": "Capacidade de carga estática: até 8 kg. Material: Acrílico de 8 mm com pés niveladores emborrachados ajustáveis por rosca milimétrica. Encaixe perfeito com recorte em 'U' ao redor do braço tubular.",
    "howItWorks": [
      "1. Ao preparar o bordado em uma jaqueta pesada ou toalha de banho com muito tecido solto, a bordadeira acopla a mesa de extensão ao redor do braço livre.",
      "2. Ajusta os pezinhos niveladores até a mesa ficar perfeitamente alinhada e na mesma altura da chapa da máquina.",
      "3. Encaixa o bastidor no pantógrafo com a peça já montada.",
      "4. O excesso de tecido da jaqueta repousa suavemente sobre a superfície lisa da mesa, sem ficar pendurado no ar.",
      "5. Durante a movimentação rápida do bastidor, o tecido desliza sem atrito e sem puxar os eixos X e Y.",
      "6. O bordado é executado com contornos 100% perfeitamente casados e sem esforço mecânico da máquina."
    ],
    "beginnerExplanation": "É uma mesinha extensora de plástico resistente que você encaixa em volta do braço da máquina. Quando você vai bordar uma jaqueta pesada ou uma toalha bem grande, essa mesa serve para apoiar o peso do tecido, evitando que o tecido fique caído e puxe o bastidor para baixo, deixando o desenho torto.",
    "applications": [
      "Bordados em jaquetas jeans pesadas, casacos de lã e coletes de inverno",
      "Toalhões de banho gigantes e jogos de cama de casal/queen/king size",
      "Bordados de painéis grandes e colchas de patchwork",
      "Proteção dos motores da máquina contra esforço excessivo por peso de tecido pendurado"
    ],
    "commonErrors": [
      "❌ Deixar uma toalha pesada ou jaqueta pendurada para fora da mesa de trabalho, fazendo o peso do tecido arrastar o pantógrafo e descasar os contornos do desenho",
      "❌ Regular os pés da mesa em altura errada (mais alta que a chapa), fazendo o bastidor bater na borda da mesa durante o movimento",
      "❌ Apoiar ferramentas de metal pesadas em cima da mesa de extensão durante o bordado"
    ],
    "troubleshootingTips": [
      "Ao montar a mesa de extensão, use um nível de bolha para garantir que a superfície esteja no mesmo plano da máquina",
      "Se não tiver mesa de extensão para uma peça muito pesada, segure suavemente o excesso de tecido com as mãos enquanto a máquina trabalha",
      "Mantenha a superfície da mesa limpa e encerada com cera automotiva para o tecido deslizar com zero atrito"
    ],
    "dicaArtrelados": "Nunca deixe o peso do tecido puxar o bastidor da sua máquina para baixo! Se o tecido ficar pendurado no ar, o motor faz muita força e o contorno sai torto na hora. A mesinha de extensão é a melhor amiga do seu ateliê para peças grandes e pesadas!",
    "voceSabia": "Em máquinas industriais de grande porte, existem mesas pantográficas pneumáticas que sobem e descem sozinhas para apoiar colchas e edredons inteiros durante a confecção de enxovais de hotelaria.",
    "practicalExercise": "Pegue uma toalha de banho bem pesada e coloque no bastidor. Segure o bastidor no ar e sinta o peso puxando para baixo. Depois, apoie a toalha sobre uma mesa plana e sinta como o bastidor fica leve e desliza sem nenhum esforço!",
    "quickSummary": "Mesa plana de apoio que sustenta o peso de tecidos pesados e impede que o bastidor entorte.",
    "relatedTerms": [
      "Braço Livre (Free-Arm)",
      "Pantógrafo CNC",
      "Bastidor Tubular",
      "Insumos e Acessórios"
    ],
    "tags": [
      "m-074",
      "mesa de extensao",
      "braco livre",
      "suporte",
      "peso do tecido",
      "ergonomia",
      "pantografo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Ergonomia, Montagem de Bastidores e Apoio de Carga no Ateliê de Bordados. São Paulo, 2024.",
      "BROTHER. Free-Arm Extension Table and Heavy Garment Support Guide. Nagoia, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "m-075-micro-perfuracao-em-couro-e-vinil",
    "code": "M-075",
    "term": "Micro-Perfuração em Couro & Vinil (Laser & Punching Perforation)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego mikros (pequeno) e do latim perforare (furar através). Técnica de alívio e texturização em materiais nobres.",
    "summary": "Técnica de alívio estrutural e perfuração milimétrica em couros e sintéticos para permitir a passagem da agulha sem rasgar ou picotar o substrato.",
    "definition": "Micro-Perfuração em Couro & Vinil (Perforated Leather & Vinyl Machine Embroidery) é a técnica de digitalização e costura especializada voltada para superfícies contínuas não tecidas (couro legítimo vacum, pelica, courvin e PU automotivo). Como esses materiais não possuem trama para se abrir com a agulha, cada perfuração cria um orifício permanente; a técnica consiste em usar densidades reduzidas em 25% a 35%, pontos com comprimento mínimo de 3,5 mm a 4,5 mm e agulhas especiais com ponta cortante de micro-faca (SD ou DH), evitando o efeito 'picotado de selo postal' que rasga a peça ao longo do contorno.",
    "technicalDetails": "Densidade de ponto: 0,55 mm a 0,65 mm. Comprimento de ponto mínimo: 3,5 mm. Agulha: 80/12 ou 90/14 ponta SD (Round point with small triangular cross-section). Compensação de repuxo: 0,40 mm a 0,55 mm.",
    "construction": [
      "Substrato de couro nobre ou laminado sintético estofado",
      "Entretela de recorte pesada não tecida (80 a 100 g/m²) com fixação por fita dupla face ou spray reposicionável",
      "Agulha Groz-Beckert ou Schmetz 80/12 SD / DH de ponta triangular polida",
      "Linha de poliéster 40wt de alta tenacidade ou linha de poliamida bonderizada 60wt",
      "Bastidor magnético de prensagem plana ou técnica de flutuação para não marcar a flor do couro"
    ],
    "howItWorks": [
      "1. O couro é fixado por técnica de flutuação sobre a entretela presa no bastidor.",
      "2. A máquina é calibrada com velocidade reduzida (550 a 650 PPM) para evitar superaquecimento da agulha.",
      "3. A agulha com micro-faca penetra o couro cortando as fibras colágenas de forma cirúrgica e limpa.",
      "4. Os pontos são digitalizados com espaçamento alargado para que as furações fiquem afastadas.",
      "5. A linha de bobina é ajustada com tensão firme (24 gf) para puxar o nó para o interior da espessura do couro.",
      "6. A camada de entretela absorve as tensões mecânicas, garantindo estabilidade dimensional.",
      "7. O bordado final exibe contornos nítidos e alta durabilidade sem enfraquecer o couro."
    ],
    "mainTypes": [
      "Bordado em Couro Legítimo Automotivo (Bancos, volantes e encostos de cabeça com linha resistente a raios UV)",
      "Bordado em Pelica e Vestuário de Luxo (Jaquetas e saias finas com agulhas ultrafinas 75/11 SD)",
      "Bordado em Sintético Náutico e Courvin (Materiais espessos impermeáveis para tapeçaria e calçados)"
    ],
    "characteristics": [
      "Preservação integral da integridade mecânica do couro após o bordado",
      "Acabamento estético de altíssimo luxo com pontos brilhantes e bem assentados",
      "Eliminação do risco de corte perimetral e destacamento de letras",
      "Elevada resistência a atrito contínuo em aplicações automotivas e calçadistas"
    ],
    "limitations": [
      "Não permite erros ou descosturas: todo ponto furado deixa marca eterna no couro",
      "Exige digitalização sob medida sem pontos curtos nem nós acumulados no mesmo local",
      "Não deve ser prensado em aros plásticos apertados que deformem a textura natural"
    ],
    "numberingSystem": [
      "Densidade Recomendada: 0,55 mm a 0,65 mm",
      "Comprimento de Ponto: 3,5 mm a 5,0 mm",
      "Velocidade de Trabalho: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Agrega imenso valor comercial em jaquetas, bolsas, selaria e estofamentos de luxo",
      "✔ Evita perdas financeiras graves por rasgos e perfurações excessivas em couros caros",
      "✔ Produz bordados flexíveis que acompanham as dobras naturais da peça"
    ],
    "commonErrors": [
      "❌ Usar densidade padrão de tecido (0,40 mm), fazendo a agulha cortar o couro como um zíper de destaque",
      "❌ Utilizar agulha de ponta bola (SES), que esmaga o couro e cria rebarbas feias ao redor do furo",
      "❌ Apertar o parafuso do bastidor sobre o couro, deixando marcas circulares indeléveis"
    ],
    "voceSabia": "Nas oficinas de personalização de carros esportivos italianos, as matrizes de bordado para bancos de couro passam por uma simulação de estresse por elementos finitos para garantir que a distância entre os furos nunca seja inferior a 1,2 mm!",
    "curiosidadeTecnica": "O couro vacum possui três camadas de fibras colágenas entrelaçadas. Uma agulha de ponta redonda comum precisa de 4 vezes mais força para furar o couro do que uma agulha ponta faca SD, aumentando a temperatura da agulha para mais de 180°C em alta velocidade e derretendo a linha.",
    "dicaArtrelados": "Ao digitalizar para couro, nunca use pontos com menos de 3,5 mm de comprimento e aumente a compensação de repuxo para 0,45 mm. Use sempre bastidor magnético ou flutue o couro com fita crepe nas bordas: assim seu couro fica intacto, sem marcas e com bordado de cinema!",
    "comparisonTable": {
      "headers": [
        "Parâmetro de Bordado",
        "Tecido Plano Convencional",
        "Couro e Vinil Micro-Perfurado"
      ],
      "rows": [
        [
          "Densidade de Ponto",
          "0,40 mm (Padrão)",
          "0,55 mm a 0,65 mm (Aberta)"
        ],
        [
          "Tipo de Agulha",
          "Ponta Redonda Leve (SES / RG)",
          "Ponta Micro-Faca Triangular (SD / DH)"
        ],
        [
          "Comprimento Mínimo",
          "1,5 mm a 2,0 mm",
          "3,5 mm a 4,5 mm (Sem pontos curtos)"
        ],
        [
          "Método no Bastidor",
          "Aro tradicional com aperto",
          "Bastidor Magnético ou Flutuação"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 ou 90/14 SD (Groz-Beckert Leather Point)",
      "stabilizer": "Entretela de Recorte Pesada (80 a 100 g/m²) com fixação por fita",
      "threadTension": "115 a 125 gf (superior) e 24 gf (bobina firme)",
      "density": "0.55 mm a 0.65 mm com compensação de repuxo de 0.45 mm"
    },
    "applications": [
      "Bancos esportivos automotivos, encostos de cabeça e volantes personalizados",
      "Jaquetas de couro de motociclistas, coletes de clubes e casacos de luxo",
      "Bolsas femininas estruturadas, carteiras e calçados finos",
      "Artigos de montaria, selas, arreios e bainhas de facas artesanais"
    ],
    "troubleshootingTips": [
      "Se o couro cortar ao redor do bordado, abra a densidade no software para 0,60 mm",
      "Se a linha desfiar, troque a agulha por uma de titânio com ponta SD e passe silicone líquido na linha",
      "Se a máquina fizer barulho seco de impacto, lubrifique a barra de agulha e baixe a velocidade"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Compensação de Repuxo",
      "Bastidores Magnéticos",
      "Densidade de Pontos",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-075",
      "micro perfuracao",
      "couro",
      "vinil",
      "ponta faca",
      "agulha sd",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BERETTA, Giancarlo. Automotive Leather Upholstery & Computerized Stitching. Milão, 2021.",
      "PARRISH, Gail. Precision Machine Embroidery on Genuine and Bonded Leather. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de couro ou courvin grosso. Flutue-o sobre entretela de recorte colada. Crie um quadrado com densidade padrão de 0,40 mm e outro com 0,60 mm e pontos de 4 mm. Borde ambos com agulha SD. Puxe as bordas com as mãos e observe como o primeiro rasga e o segundo permanece inquebrável!",
    "quickSummary": "Técnica de digitalização com pontos espaçados e agulha especial que evita o corte do couro durante o bordado.",
    "beginnerExplanation": "O couro é como uma folha contínua que não se regenera: se você colocar pontos muito juntinhos, a agulha fura um furinho do lado do outro e o couro rasga como papel picotado. A gente afasta os pontos e usa agulha especial para o bordado ficar lindo e o couro bem forte!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-076-matriz-com-ponto-franja-fringe-stitch-3d-fluff",
    "code": "M-076",
    "term": "Matriz com Ponto Franja / Fringe Stitch (3D Fluff Effect)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Pontos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês frange (orla de fios soltos) e do inglês fringe stitch. Técnica clássica adaptada para o bordado computadorizado.",
    "summary": "Técnica de digitalização de pontos cheios especiais com arremates em apenas uma das bordas que, após cortados pelo avesso da peça, se transformam em pelos soltos e franjas volumosas 3D.",
    "definition": "Matriz com Ponto Franja / Fringe Stitch (3D Cut-Thread Fluff & Tassel Embroidery) é a técnica de criação de texturas tridimensionais peludas e móveis no bordado eletrônico. A matriz é estruturada com uma linha de pontos cheios longos (de 7 mm a 12 mm de largura); em uma das margens, programa-se uma linha de travamento densa em ponto corrido e nós de segurança (*tie-in/tie-off*), enquanto a outra margem permanece totalmente solta. Ao final do bordado, corta-se a linha da bobina na margem solta pelo avesso, liberando os fios superiores na frente como uma juba felpuda e aveludada.",
    "technicalDetails": "Largura da coluna de ponto cheio: 7,0 mm a 12,0 mm. Densidade da coluna: 0,32 mm a 0,38 mm. Tensão superior: ligeiramente aliviada (80 a 90 gf). Arremate de segurança: 4 micropontos de 0,6 mm na borda de ancoragem.",
    "construction": [
      "Tecido firme ou entretela de recorte hidrossolúvel/recorte lavável",
      "Linha de poliéster 40wt ou fios foscos de algodão/raiom de cores vibrantes",
      "Linha de bobina contrastante (para facilitar a visualização no corte do avesso)",
      "Tesourinha curva de ponta arredondada ou descosedor de costura com lâmina de segurança",
      "Película hidrossolúvel de topo para manter os pontos perfeitamente alinhados durante o bordado"
    ],
    "howItWorks": [
      "1. A máquina borda primeiro a linha de ancoragem estrutural com nós reforçados na margem de fixação.",
      "2. Em seguida, borda o ponto cheio longo de um lado para o outro em alta densidade sobre a base.",
      "3. Uma segunda linha de pontos de fixação sela definitivamente a borda fixa da franja.",
      "4. Ao terminar o bordado, retira-se a peça do bastidor e vira-se pelo avesso.",
      "5. Com a ponta do descosedor, corta-se cuidadosamente a linha da bobina ao longo da margem solta.",
      "6. Vira-se a peça para a frente e puxam-se os fios com uma escovinha macia de dentes.",
      "7. Os fios se abrem criando um tufo tridimensional incrivelmente macio e realista."
    ],
    "mainTypes": [
      "Franja de Ponto Cheio Direto (Para jubas de leão, barbas de gnomo e crinas de cavalo)",
      "Franja Circular Radial (Para miolos de flores, girassóis e pompons tridimensionais)",
      "Franja com Ponto de Contorno Festonê (Para barrados recortados de toalhas e almofadas)"
    ],
    "characteristics": [
      "Volume físico real e textura tátil fofa impossível de ser obtida com pontos planos",
      "Altíssimo impacto visual e encantamento imediato de clientes infantis e decorativos",
      "Excelente fixação quando os arremates da margem de ancoragem são bem digitalizados",
      "Fácil penteabilidade e durabilidade mesmo após sucessivas lavagens manuais"
    ],
    "limitations": [
      "Exige cuidado cirúrgico ao cortar no avesso para não cortar a linha do lado ancorado",
      "Não recomendável para peças que passarão por lavagens industriais abrasivas pesadas",
      "Requer linhas de bordado de alta qualidade que não desfiem excessivamente após o corte"
    ],
    "numberingSystem": [
      "Largura do Ponto Cheio: 7 mm a 12 mm",
      "Densidade da Franja: 0,35 mm",
      "Velocidade Recomendada: 600 a 700 PPM"
    ],
    "advantages": [
      "✔ Cria um diferencial exclusivo no portfólio do ateliê com bordados lúdicos e interativos",
      "✔ Agrega alto valor de venda em enxovais de bebê, almofadas e naninhas infantis",
      "✔ Técnica rápida de digitalizar e muito prazerosa de finalizar no ateliê"
    ],
    "commonErrors": [
      "❌ Esquecer de colocar os nós de ancoragem na borda fixa, fazendo toda a franja se desmanchar",
      "❌ Cortar o tecido no avesso em vez de cortar apenas a linha da bobina",
      "❌ Usar densidade muito aberta (> 0,50 mm), resultando em uma franja rala e sem volume"
    ],
    "voceSabia": "A técnica de ponto franja no bordado computadorizado foi inspirada nos tapetes orientais milenares tecidos à mão com nós persas e turcos, onde artesãos amarravam e tosavam os fios para criar desenhos em alto relevo felpudo!",
    "curiosidadeTecnica": "Ao cortar a linha da bobina no avesso, cada ponto cheio libera exatamente duas perninhas de linha superior na frente da peça; assim, um miolo de girassol com 500 pontos cheios se transforma instantaneamente em 1.000 filamentos de franja fofa.",
    "dicaArtrelados": "Ao bordar pontos franja, use sempre uma linha de bobina de cor diferente da linha superior (por exemplo, bobina preta se a linha superior for amarela): isso torna o corte no avesso 100% seguro, pois você enxerga perfeitamente onde passar o descosedor sem risco de errar!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Bordado Ponto Cheio Tradicional",
        "Bordado Ponto Franja (Fringe Stitch)"
      ],
      "rows": [
        [
          "Aspecto Visual",
          "Superfície plana acetinada",
          "Tufo tridimensional felpudo e móvel"
        ],
        [
          "Toque Tátil",
          "Liso / Firme",
          "Ultra macio / Pelo de pelúcia"
        ],
        [
          "Finalização",
          "Pronto na saída da máquina",
          "Exige corte e escovação pelo avesso"
        ],
        [
          "Fixação",
          "Preso nas duas pontas",
          "Ancorado com nós duplos em apenas um lado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 SES ou 80/12 Universal",
      "stabilizer": "Entretela de Recorte Média + Película Hidrossolúvel de topo",
      "threadTension": "85 a 95 gf (superior suave) e 22 gf (bobina)",
      "density": "0.35 mm com ancoragem tripla na margem de retenção"
    },
    "applications": [
      "Jubas de leão, cabelos de boneca, barbas de Papai Noel e gnomos",
      "Miolo de girassóis, margaridas e flores ornamentais tridimensionais",
      "Barrados felpudos de toalhas de banho e naninhas de bebê",
      "Cauda de bichinhos, pelos de animais de estimação e pompons em gorros"
    ],
    "troubleshootingTips": [
      "Se os fios da franja soltarem ao pentear, aumente a quantidade de pontos de travamento na borda",
      "Passe uma escovinha de cerdas macias com carinho de baixo para cima para abrir os tufos",
      "Use uma gotinha de termolina leitosa no avesso sobre a linha de ancoragem para blindar os nós"
    ],
    "relatedTerms": [
      "Tipos de Pontos",
      "Ponto Cheio (Satin Stitch)",
      "Nó de Arremate (Tie-Off)",
      "Película Hidrossolúvel",
      "Bordado 3D com EVA"
    ],
    "tags": [
      "m-076",
      "ponto franja",
      "fringe stitch",
      "3d fluff",
      "efeito pelucia",
      "barba de gnomo",
      "tipos de pontos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GIBSON, Cheryl. Fringe Stitch and 3D Dimension in Modern Embroidery. Austin, 2021.",
      "PARRISH, Gail. Creative Digitizing: Cut-Thread Textures and Fringe Effects. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize uma florzinha simples com pétalas cheias normais e um miolo de 2 cm em ponto franja com ancoragem no centro. Borde em um tecido de algodão. Corte a linha da bobina na borda do miolo no avesso e penteie com uma escovinha de dentes. Veja que efeito fofo e encantador!",
    "quickSummary": "Técnica de pontos cheios cortados pelo avesso que viram pelos e franjas tridimensionais super macios.",
    "beginnerExplanation": "O ponto franja é um truque genial de bordado: a máquina costura pontos cheios bem compridos presos apenas de um lado. Depois que o bordado acaba, você dá um cortezinho na linha de trás e os pontinhos da frente se soltam, virando uma franjinha fofa como pelúcia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-077-manutencao-de-rolamentos-e-guias-lineares-do-pantografo",
    "code": "M-077",
    "term": "Manutenção de Rolamentos & Guias Lineares do Pantógrafo (Linear Guides & Bearing Maintenance)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim manualis (feito com as mãos) e do grego pantographos (aparelho para copiar movimentos em todas as escalas).",
    "summary": "Procedimentos de inspeção, limpeza de trilhos, ajuste de folga axial e relubrificação de rolamentos lineares de esferas que movimentam o bastidor nos eixos X e Y.",
    "definition": "Manutenção de Rolamentos & Guias Lineares do Pantógrafo (CNC Linear Rail & Ball Bearing Block Maintenance) é o conjunto de intervenções mecânicas de precisão destinadas a assegurar a movimentação suave, micrométrica e sem folgas do pantógrafo de bordado. Os trilhos e patins com recirculação de esferas suportam o peso dos bastidores e as forças de inércia em velocidades de até 1.200 PPM. A manutenção previne vibrações parasitas, perda de registro de contorno (deslocamento entre cores), ruídos secos de atrito e desgaste prematuro das pistas retificadas de aço temperado.",
    "technicalDetails": "Tolerância de folga axial: < 0,02 mm. Tipo de lubrificante: Graxa de sabão de lítio consistência NLGI 2 ou graxa sintética com PTFE (PolyTetraFluoroEthylene). Periodicidade de higienização: a cada 250 horas de operação.",
    "construction": [
      "Guias lineares retificadas de alta dureza (aço cromo 58-62 HRC) nos eixos X e Y",
      "Blocos de patins com recirculação de microesferas de aço e retentores raspadores de poeira",
      "Pinos graxeiros micrométricos tipo bico lubrificador (Nipple Grease Fittings)",
      "Pano microfibra 100% isento de fiapos e solvente desengraxante atóxico de rápida secagem",
      "Almotolia de graxa sob pressão com bico fino para injeção direta nos patins"
    ],
    "howItWorks": [
      "1. A máquina é desligada e as tampas de proteção do chassi do pantógrafo são removidas.",
      "2. Limpam-se os trilhos de aço com pano de microfibra umedecido em solvente neutro para retirar fiapos e poeira acumulada.",
      "3. Inspecionam-se as pistas lineares com iluminação rasante para detectar sinais de desgaste, ranhuras ou oxidação.",
      "4. Encaixa-se o aplicador de graxa no bico injetor do patim e aplica-se 1 a 2 bombeadas de graxa sintética especial.",
      "5. Movimenta-se o pantógrafo manualmente de ponta a ponta várias vezes para distribuir a graxa nas esferas internas.",
      "6. Remove-se todo o excesso de graxa expulso pelos retentores para evitar que fiapos de linha grudem no trilho.",
      "7. Testa-se a folga mecânica com relógio comparador centesimal antes de recolocar as proteções plásticas."
    ],
    "mainTypes": [
      "Manutenção Preventiva Mensal de Trilhos (Limpeza superficial de poeira e lubrificação com filme fino de óleo protetor)",
      "Engraxamento Semestral de Patins de Esferas (Injeção de graxa pressurizada nos blocos de rolamento)",
      "Ajuste de Pré-Carga e Troca de Raspadores (Ajuste de parafusos de folga cônica para anular folgas de retorno)"
    ],
    "characteristics": [
      "Movimentação do bastidor suave como seda com zero vibração nos vértices do desenho",
      "Encaixe milimétrico absoluto entre preenchimentos e linhas de contorno em bordados multicoloridos",
      "Redução drástica do ruído operacional da máquina e eliminação de estalos secos",
      "Preservação da vida útil das correias dentadas e dos motores de passo e servomotores"
    ],
    "limitations": [
      "Nunca usar graxas de automóvel pesadas (graxa grafitada ou de rolamento de caminhão) que endurecem e travam as microesferas",
      "Jamais passar lixa de ferro ou abrasivos metálicos sobre as guias retificadas",
      "Não aplicar desengripantes ácidos em spray tipo WD-40 dentro dos patins de esferas"
    ],
    "numberingSystem": [
      "Folga Tolerada: < 0,02 mm",
      "Graxa Homologada: NLGI Classe 2 (Base Lítio/PTFE)",
      "Intervalo de Lubrificação: 500 Horas de Produção"
    ],
    "advantages": [
      "✔ Garante que contornos finos fechem perfeitamente em volta das letras sem desencontrar",
      "✔ Evita a substituição caríssima de trilhos e blocos lineares danificados por falta de graxa",
      "✔ Mantém o valor de mercado e a precisão industrial da máquina por mais de 15 anos"
    ],
    "commonErrors": [
      "❌ Deixar os trilhos secos e empoeirados, fazendo as microesferas travarem e cavarem sulcos no aço",
      "❌ Encher o trilho de óleo de motor espesso, criando uma pasta abrasiva com o pó de linha que desgasta o metal",
      "❌ Forçar o pantógrafo na mão com a máquina ligada, sobrecarregando os rolamentos e correias"
    ],
    "voceSabia": "As guias lineares de recirculação de esferas foram criadas originalmente para tornos e centros de usinagem aeroespaciais da NASA; nas máquinas de bordar modernas, elas suportam acelerações de até 5G nas trocas repentinas de direção dos pontos!",
    "curiosidadeTecnica": "Um bloco linear de bordado contém entre 40 e 80 microesferas de aço calibradas com precisão de 0,001 mm. Quando o patim fica sem graxa, o atrito atômico entre as esferas gera calor instantâneo que deforma as esferas, gerando a famosa folga fantasma que faz círculos saírem ovais.",
    "dicaArtrelados": "Uma vez por mês, passe um pano seco de microfibra em toda a extensão do trilho de metal do pantógrafo da sua máquina e aplique apenas 3 gotinhas de óleo branco de máquina de costura no trilho, espalhando com o dedo limpo: o movimento do bastidor fica super macio e os contornos encaixam no milímetro!",
    "comparisonTable": {
      "headers": [
        "Condição do Pantógrafo",
        "Encaixe dos Contornos",
        "Nível de Ruído",
        "Ação Necessária"
      ],
      "rows": [
        [
          "Guias Limpas e Lubrificadas",
          "Perfeito no décimo de milímetro",
          "Silencioso e suave",
          "Manter rotina mensal"
        ],
        [
          "Trilho Seco com Poeira",
          "Contorno desloca 0,5 mm",
          "Chiado seco metálico",
          "Limpar e injetar graxa NLGI 2"
        ],
        [
          "Patim com Folga Axial",
          "Desenhos saem tortos e ovais",
          "Estalos e vibrações",
          "Ajustar pré-carga ou trocar patim"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-manutenção: Operação estável até 1.200 PPM",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Calibração normal de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Manutenção preventiva periódica em máquinas bordadeiras industriais e comerciais",
      "Diagnóstico e correção de falhas de registro onde contornos e olhos não fecham",
      "Revisão técnica completa de pantógrafos após anos de produção intensiva",
      "Equalização dinâmica de múltiplos cabeçotes em máquinas longas"
    ],
    "troubleshootingTips": [
      "Se os contornos estiverem saindo fora do lugar no eixo X, verifique a folga do trilho transversal",
      "Remova com um cotonete os fiapos acumulados nas bordas dos raspadores plásticos do patim",
      "Use sempre graxa sintética transparente ou branca recomendada no manual do fabricante (Tajima/Barudan/Brother)"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Pantógrafo",
      "Manutenção Preventiva",
      "Folga Mecânica (Backlash)",
      "Servo Motores"
    ],
    "tags": [
      "m-077",
      "rolamentos",
      "guias lineares",
      "pantografo",
      "manutencao preventiva",
      "graxa nlgi",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "THK Linear Motion Systems. Technical Guide for Industrial Precision Machinery. Tóquio, 2021.",
      "PARRISH, Gail. CNC Embroidery Machine Mechanics: Rails, Bearings & Pantograph Kinematics. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada da tomada, empurre o pantógrafo suavemente com as pontas dos dedos nos eixos X e Y. Sinta se o movimento corre liso e constante ou se você sente 'degraus' ou areia. Limpe o trilho com um pano limpo e veja a diferença instantânea de maciez!",
    "quickSummary": "Limpeza e lubrificação dos trilhos e rolamentos que movimentam o bastidor para contornos 100% perfeitos.",
    "beginnerExplanation": "O pantógrafo é o braço mecânico que move o bastidor para lá e para cá. Manter os trilhos de aço limpinhos e lubrificados faz a máquina deslizar sem tremer, garantindo que os contornos caiam exatamente em cima do desenho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-078-manta-termica-de-teflon-para-termocolagem-e-apliques",
    "code": "M-078",
    "term": "Manta Térmica de Teflon para Termocolagem & Apliques (PTFE Teflon Heat Press Sheet)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego manthe (cobertura) e de Teflon (marca registrada da fibra fluoropolímera de PTFE resistente ao calor).",
    "summary": "Folha antiaderente resistente a altíssimas temperaturas utilizada sobre prensas e ferros térmicos para proteger tecidos delicados e evitar que filmes termocolantes grudem na base da prensa.",
    "definition": "Manta Térmica de Teflon (PTFE Non-Stick Heat Transfer Sheet) é uma lâmina de tecido de fibra de vidro revestida com politetrafluoretileno (PTFE) de grau industrial. Suporta temperaturas contínuas de até 260°C e picos de 300°C sem deformar nem liberar vapores. No bordado computadorizado e na confecção de patches e apliques termocolantes, a folha de teflon é posicionada entre a placa quente da prensa e o bordado, distribuindo o calor de forma perfeitamente homogênea, protegendo os fios de poliéster contra o brilho excessivo por derretimento superficial e impedindo que o adesivo termofusível extravase e suje a placa metálica da prensa.",
    "technicalDetails": "Espessura padrão: 0,13 mm a 0,18 mm (130 a 180 micras). Faixa de temperatura de trabalho: -70°C a +260°C. Superfície 100% antiaderente com resistência química a resinas de poliuretano, poliamida e colas EVA.",
    "construction": [
      "Tecido de malha de fibra de vidro de alta estabilidade dimensional",
      "Revestimento multicamadas de resina de PTFE (Teflon) sinterizada a quente",
      "Acabamento superficial espelhado sem porosidades para fácil limpeza",
      "Bordas cortadas a laser com cantos arredondados para evitar desfiamento",
      "Espessura calibrada para transferência térmica instantânea com retenção zero"
    ],
    "howItWorks": [
      "1. O bordado ou patch com película termocolante é posicionado sobre a peça de vestuário.",
      "2. A folha de teflon é colocada diretamente sobre a superfície do bordado e do tecido.",
      "3. A prensa térmica é baixada com temperatura de 150°C a 160°C por 12 a 15 segundos.",
      "4. O calor penetra através da manta de teflon, fundindo a resina termocolante de forma uniforme.",
      "5. A manta impede que qualquer resíduo de cola pegajosa encoste na chapa de alumínio da prensa.",
      "6. Ao abrir a prensa, a manta de teflon é removida instantaneamente sem grudar em nada.",
      "7. O bordado fica perfeitamente colado, com toque macio e sem marcas de queimadura ou brilho plástico."
    ],
    "mainTypes": [
      "Manta de Teflon Lisa Tradicional (Para prensagem de patches, apliques e filmes de recorte)",
      "Manta de Teflon Texturizada Fosca (Para dar acabamento acetinado fosco em apliques emborrachados)",
      "Capa Protetora de Teflon com Elástico (Encaixa na chapa superior da prensa térmica permanentemente)"
    ],
    "characteristics": [
      "100% antiaderente: nenhuma cola, resina plástica ou tinta de sublimação gruda em sua superfície",
      "Proteção total contra amarelamento e brilho de ferro em tecidos escuros de algodão e poliéster",
      "Reutilizável milhares de vezes com durabilidade superior a 3 anos de uso diário",
      "Fácil higienização: limpa-se com um pano úmido ou álcool em segundos"
    ],
    "limitations": [
      "Não dobrar a folha de teflon ao meio para não quebrar a trama interna de fibra de vidro",
      "Guardar sempre enrolada em formato de tubo ou estendida na horizontal",
      "Evitar contato com objetos cortantes pontiagudos como tesouras afiadas ou estiletes"
    ],
    "numberingSystem": [
      "Espessura Ideal: 0,13 mm (130 micras)",
      "Temperatura Máxima: 260°C",
      "Pressão na Prensa: 40 a 60 PSI (Média/Firme)"
    ],
    "advantages": [
      "✔ Mantém a prensa térmica sempre limpa como nova, sem manchas pretas de cola queimada",
      "✔ Evita a perda de peças nobres por queima ou marcação de ferro quente",
      "✔ Garante colagem uniforme de patches em bonés, jaquetas e uniformes"
    ],
    "commonErrors": [
      "❌ Prensar bordados sem manta de teflon, derretendo o fio de poliéster e deixando o bordado duro e brilhante",
      "❌ Dobrar a folha de teflon para guardar na gaveta, criando vincos brancos que marcam as peças futuras",
      "❌ Usar papel manteiga comum de cozinha em altas temperaturas, que resseca, queima e gruda na cola"
    ],
    "voceSabia": "O Teflon (PTFE) foi descoberto por acidente em 1938 pelo químico Roy Plunkett nos Estados Unidos enquanto pesquisava gases refrigerantes. Ele encontrou o gás polimerizado em um pó branco tão escorregadio que é até hoje a única substância conhecida onde até mesmo as patas de uma lagartixa não conseguem grudar!",
    "curiosidadeTecnica": "O coeficiente de atrito do PTFE contra o aço é de apenas 0,04, sendo o terceiro menor coeficiente de atrito entre todos os sólidos conhecidos pela física moderna. Isso significa que o calor atravessa a manta sem nenhuma fricção superficial, garantindo transferência perfeita.",
    "dicaArtrelados": "Nunca dobre sua folha de teflon! Ao terminar o trabalho no ateliê, enrole a folha em um caninho de papelão (como aquele rolo de papel toalha) ou prenda com um ímã na lateral da própria prensa: sua folha vai durar anos sem nenhum vinco e seus patches vão colar com perfeição de fábrica!",
    "comparisonTable": {
      "headers": [
        "Material Protetor",
        "Resistência ao Calor",
        "Reutilização",
        "Antiaderência"
      ],
      "rows": [
        [
          "Manta de Teflon PTFE 0,13mm",
          "Até 260°C (Excelente)",
          "Mais de 2.000 vezes",
          "100% Total (Não gruda cola)"
        ],
        [
          "Papel Manteiga Comum",
          "Até 180°C (Fraco)",
          "1 a 2 vezes (Descarta)",
          "Média (Pode grudar resina)"
        ],
        [
          "Pano de Algodão",
          "Até 200°C",
          "Várias vezes",
          "Zero (Cola impregna nas fibras)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "N/A (Processo de prensagem / acabamento térmico)",
      "needleType": "N/A",
      "stabilizer": "Termocolante definitivo no verso do bordado",
      "threadTension": "N/A",
      "density": "Temperatura: 150°C - 160°C por 15 segundos na prensa"
    },
    "applications": [
      "Fixação de patches e emblemas termocolantes em jaquetas jeans e bonés",
      "Termocolagem de apliques em tecido recortado para roupas infantis",
      "Prensagem de entretelas termocolantes no verso de bordados para cobrir o avesso",
      "Proteção de tecidos sintéticos delicados (tactel, helanca, cetim) durante o acabamento térmico"
    ],
    "troubleshootingTips": [
      "Se a folha de teflon acumular resíduos de cola nas bordas, limpe com álcool líquido e pano macio com a prensa morna",
      "Se o bordado ficar opaco após a prensagem, reduza o tempo de aplicação de 15 para 10 segundos",
      "Substitua a manta se houver furos ou ranhuras profundas na fibra de vidro interna"
    ],
    "relatedTerms": [
      "Equipamentos & Acessórios",
      "Termocolante para Apliques",
      "Patches e Emblemas Bordados",
      "Aplique no Bastidor",
      "Acabamento do Avesso"
    ],
    "tags": [
      "m-078",
      "manta de teflon",
      "teflon sheet",
      "prensa termica",
      "termocolante",
      "patches",
      "equipamentos e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DUPONT Fluoropolymers Technical Division. PTFE Properties and Heat Transfer Characteristics. Wilmington, 2021.",
      "PARRISH, Gail. Heat Transfer, Appliqué Adhesion & Teflon Protection in Modern Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um patch bordado com termocolante e posicione sobre um pedaço de tecido escuro. Coloque a folha de teflon por cima e prense com o ferro na temperatura algodão por 15 segundos sem vapor. Levante a folha: sinta como a cola fundiu perfeitamente e o bordado manteve o brilho natural sem queimar!",
    "quickSummary": "Folha antiaderente térmica que protege os bordados e impede que colas grudem na prensa de calor.",
    "beginnerExplanation": "A folha de teflon é aquele plástico especial de alta resistência que você coloca em cima do bordado antes de passar o ferro quente ou fechar a prensa: ela não deixa a cola do aplique sujar o ferro e impede que a linha do bordado derreta ou queime!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-079-micro-bordado-em-alta-definicao",
    "code": "M-079",
    "term": "Micro-Bordado em Alta Definição (Micro-Embroidery & Watchmaking Badges)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego mikros (minúsculo) e do francês broderie. Vertente de alta joalheria têxtil suíça e francesa.",
    "summary": "Técnica de digitalização e execução de bordados em escala nanométrica e milimétrica com linhas ultrafinas 60wt a 75wt e agulhas 55/7 a 65/9 para detalhes microscópicos.",
    "definition": "Micro-Bordado em Alta Definição (High-Definition Micro-Embroidery) é a especialidade do bordado mecânico de ultra-precisão destinada a reproduzir letras com menos de 3 mm de altura, brasões heráldicos de 15 mm e mostradores de relógios de luxo. Utiliza fios de poliéster ou seda de filamento contínuo número 60, 65 ou 75wt (quase metade da espessura da linha 40 comum), agulhas de ponta aguda cirúrgica Microtex 55/7 a 65/9, tecidos de altíssima densidade de trama (como tafetá de seda ou cambraia suíça) e densidades no software reduzidas para 0,28 mm a 0,32 mm com sub-pontos de compensação micrométrica.",
    "technicalDetails": "Espessura da linha: 60wt a 75wt (título dtex 80 a 110). Agulha: 55/7 a 65/9 Microtex ou Sharp. Densidade de digitalização: 0,28 mm a 0,33 mm. Altura mínima de letra legível: 2,2 mm.",
    "construction": [
      "Tecido nobre de trama ultra-cerrada (cetim de seda pura, tafetá 300 fios ou cambraia fina)",
      "Entretela de recorte fina de poliéster resinado de alta densidade (PolyMesh 40 g/m²)",
      "Agulha Microtex 60/8 ou 65/9 com olho polido a laser",
      "Linha superior ultrafina No. 60 ou No. 75 (Madeira Polyneon 60 ou 75 / Gunold 60)",
      "Linha de bobina ultrafina de filamento contínuo 80wt a 100wt"
    ],
    "howItWorks": [
      "1. A matriz é digitalizada nó a nó com pontos manuais e curvas de Bézier com tolerância centesimal.",
      "2. O tecido de trama fechada é montado no bastidor com tensão perfeita de tambor.",
      "3. A máquina é calibrada com velocidade moderada de 600 a 700 PPM para garantir formação de laçada estável.",
      "4. A agulha fina 60/8 penetra sem abrir furos visíveis nem empurrar as fibras do tecido.",
      "5. A linha 60/75wt preenche os menores detalhes com nitidez óptica equivalente a uma impressão de alta resolução.",
      "6. A compensação de repuxo é calibrada em 0,15 mm para preservar as proporções exatas de letras minúsculas.",
      "7. O resultado é um micro-bordado de qualidade de joalheria, legível com auxílio de lupa."
    ],
    "mainTypes": [
      "Micro-Tipografia e Textos Legais (Letras de 2,5 mm a 3,5 mm para jalecos médicos e assinaturas de luxo)",
      "Micro-Emblemas de Joalheria e Relojoaria (Mostradores bordados para caixas de relógio de 35 a 42 mm)",
      "Insígnias Militares de Lapela e Pins Bordados (Brasões com alta riqueza de detalhes em espaços menores que uma moeda de 1 real)"
    ],
    "characteristics": [
      "Resolução de imagem espetacular com contornos e serifas perfeitamente definidos",
      "Eliminação do empastamento de pontos em curvas fechadas e cantos pequenos",
      "Toque incrivelmente suave, liso e flexível devido à espessura reduzida do fio",
      "Nicho de mercado de altíssimo valor e reconhecimento artístico nobre"
    ],
    "limitations": [
      "Exige troca obrigatória de agulha e linha por numerações finas adequadas",
      "Não aceita tecidos felpudos ou malhas muito elásticas sem entretelamento estruturado",
      "A digitalização exige domínio avançado para não sobrecarregar pontos em áreas microscópicas"
    ],
    "numberingSystem": [
      "Linha Superior: No. 60wt a 75wt",
      "Agulha Indicada: 60/8 a 65/9 Microtex",
      "Densidade Média: 0,30 mm"
    ],
    "advantages": [
      "✔ Permite bordar nomes minúsculos e sites/telefones em mangas e punhos de camisas finas",
      "✔ Conquista clientes exigentes de alta costura, joalherias e marcas de luxo",
      "✔ Valor de cobrança até 300% superior por ponto bordado"
    ],
    "commonErrors": [
      "❌ Usar linha 40 comum para bordar letras menores que 4 mm, criando um borrão ilegível de linha",
      "❌ Digitalizar com underlays comuns pesados, empilhando pontos e quebrando agulhas finas",
      "❌ Usar agulha grossa (80/12 ou 90/14) que faz buracos maiores do que as próprias letras"
    ],
    "voceSabia": "A técnica de micro-bordado foi adotada por relojoeiros suíços como Hublot e Piaget para produzir edições limitadas de relógios mecânicos com mostradores inteiramente bordados em fios de ouro e seda por artesãs que usavam microscópios cirúrgicos!",
    "curiosidadeTecnica": "Uma linha de espessura 75wt tem um diâmetro de apenas 0,07 mm (quase a espessura de um fio de cabelo humano). Ela permite colocar 33% mais pontos na mesma área de 1 milímetro quadrado sem aumentar a rigidez do tecido.",
    "dicaArtrelados": "Para bordar letrinhas minúsculas de jaleco com menos de 4 mm de altura, troque o carretel por linha 60wt e coloque uma agulha 65/9 Microtex: desligue o preenchimento de suporte (underlay) e use apenas um ponto corrido central bem levinho. As letrinhas vão sair tão nítidas que parecem impressas a laser!",
    "comparisonTable": {
      "headers": [
        "Especificação",
        "Bordado Padrão Linha 40",
        "Micro-Bordado Linha 60/75"
      ],
      "rows": [
        [
          "Altura Mínima de Letra",
          "5,0 mm a 6,0 mm",
          "2,2 mm a 3,0 mm (Legibilidade perfeita)"
        ],
        [
          "Numeração da Agulha",
          "75/11 a 80/12",
          "60/8 a 65/9 Microtex / Sharp"
        ],
        [
          "Espessura do Fio",
          "Linha 40wt (Padrão)",
          "Linha 60wt a 75wt (Ultrafina)"
        ],
        [
          "Densidade no Software",
          "0,40 mm a 0,45 mm",
          "0,28 mm a 0,33 mm"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "60/8 ou 65/9 Microtex (Ponta aguda polida)",
      "stabilizer": "Entretela de Recorte Fina PolyMesh 40 g/m²",
      "threadTension": "85 a 95 gf (superior aliviada) e 20 gf (bobina)",
      "density": "0.30 mm com compensação de repuxo de 0.15 mm"
    },
    "applications": [
      "Letras minúsculas de assinaturas, jalecos médicos e uniformes executivos",
      "Brasões militares e condecorações em miniaturas e lapelas",
      "Mostradores têxteis para relojoaria e mostruários de joias",
      "Etiquetas de alta costura e monogramas em lenços finos de seda"
    ],
    "troubleshootingTips": [
      "Se as letrinhas fecharem nos miolos das letras 'e' e 'a', aumente o espaçamento entre colunas no software",
      "Use linha de bobina de poliéster ultrafina 80wt para não criar volume no verso",
      "Aplique uma camada de filme plástico hidrossolúvel fino sobre o tecido se a trama for ligeiramente aberta"
    ],
    "relatedTerms": [
      "Técnicas Especiais",
      "Microtex e Agulhas Ponta Aguda",
      "Linhas & Fios",
      "Micro-Letras e Fontes Pequenas",
      "Densidade de Pontos"
    ],
    "tags": [
      "m-079",
      "micro bordado",
      "alta definicao",
      "linha 60wt",
      "linha 75wt",
      "microtex",
      "tecnicas especiais",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SCHUMACHER, Beat. Swiss Micro-Embroidery Techniques in Luxury Watchmaking. Genebra, 2021.",
      "PARRISH, Gail. High-Definition Micro-Lettering & Precision Stitching Standards. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize seu nome completo com apenas 3 mm de altura usando uma fonte com serifa. Coloque linha 60wt na máquina com agulha 65/9 em um retalho de tecido de camisa de algodão fino com entretela PolyMesh. Borde a 600 PPM. Olhe com uma lupa e veja a precisão deslumbrante de cada detalhe!",
    "quickSummary": "Bordados milimétricos com linhas ultrafinas e agulhas especiais para detalhes nítidos como joias.",
    "beginnerExplanation": "É o bordado feito em miniatura, com uma linha tão fininha quanto um fio de cabelo e uma agulhinha bem fina. Isso permite bordar letrinhas pequenininhas e brasões minúsculos com uma nitidez tão perfeita que parece mágica!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-080-matriz-para-ponto-richelieu-com-lamina-de-corte-no-cabecote",
    "code": "M-080",
    "term": "Matriz para Ponto Richelieu com Lâmina de Corte no Cabeçote (Cutwork Needles & Richelieu Digitizing)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Homenagem ao Cardeal de Richelieu na França do século XVII e do inglês cutwork (trabalho de tecido recortado).",
    "summary": "Técnica de digitalização combinada com conjunto de agulhas de corte automático de 4 ângulos (0°, 45°, 90°, 135°) para recortar e bordar rendas e vazados Richelieu diretamente na máquina.",
    "definition": "Matriz para Ponto Richelieu com Lâmina de Corte no Cabeçote (Automated Cutwork & Richelieu Embroidery) é a técnica de digitalização avançada que automatiza a abertura de vazados decorativos e pontes de sustentação (*brides*) sem necessidade de corte manual com tesourinha. Utiliza-se um conjunto de 4 agulhas especiais de corte (lâminas cortantes anguladas) instaladas nas posições de agulha da máquina. A matriz comanda primeiro a costura de reforço, depois movimenta as agulhas de corte em direções sequenciais para extirpar cirurgicamente o pedaço de tecido interno, e finaliza cobrindo as bordas com ponto festonê denso sobre entretela hidrossolúvel.",
    "technicalDetails": "Ângulos das agulhas de corte: 0° (horizontal), 45° (diagonal 1), 90° (vertical), 135° (diagonal 2). Densidade do festonê perimetral: 0,35 mm a 0,40 mm. Compensação de cobertura do corte: 0,8 mm a 1,2 mm.",
    "construction": [
      "Kit de 4 agulhas de lâmina de corte (Cutwork Needles) codificadas por cores",
      "Base de linho fino, cambraia ou percal 100% algodão",
      "Entretela hidrossolúvel dupla de alta resistência (Aquasol / Solvy 80 micras)",
      "Linha de algodão mercerizado fosco No. 50 ou poliéster acetinado No. 40",
      "Matriz digitalizada em software compatível com comandos de parada e corte CNC"
    ],
    "howItWorks": [
      "1. A máquina borda uma linha de assentamento perimetral para delimitar o orifício vazado.",
      "2. A máquina troca para a agulha de corte 1 (ex: amarela a 0°) e corta as linhas horizontais da janela.",
      "3. Troca para as agulhas de corte 2, 3 e 4 para cortar as diagonais e verticais, soltando o retalho de tecido.",
      "4. O retalho cortado é retirado suavemente do bastidor com uma pinça fina.",
      "5. A máquina borda as pontes rendadas (*brides*) suspensas sobre a entretela hidrossolúvel exposta.",
      "6. Em seguida, a máquina borda o ponto festonê de alta densidade por cima de toda a borda cortada.",
      "7. A peça é lavada em água morna: a entretela dissolve e surge uma renda Richelieu legítima e impecável."
    ],
    "mainTypes": [
      "Richelieu Clássico com Pontes Simples (Para toalhas de mesa, caminhos de mesa e jogos americanos nobres)",
      "Richelieu Rococó com Ilhoses Circulares (Para camisolas de batizado, vestidos de noiva e lençóis de linho)",
      "Cutwork Geométrico Moderno (Para detalhes vazados em bolsos, mangas e jaquetas de moda contemporânea)"
    ],
    "characteristics": [
      "Precisão milimétrica absoluta dos vazados cortados pela própria máquina sem esforço manual",
      "Eliminação de 100% dos cortes acidentais que acontecem ao usar tesourinhas manuais",
      "Acabamento perimetral perfeito sem desfiar e com bordas seladas pelo ponto festonê",
      "Alta produtividade industrial permitindo fazer dezenas de toalhas idênticas em série"
    ],
    "limitations": [
      "Exige software de matriz com módulo de corte específico ou programação manual de trocas de cor",
      "Requer máquina com troca de agulha automática ou troca manual sequencial das agulhas de corte",
      "Uso indispensável de entretela hidrossolúvel firme de boa qualidade"
    ],
    "numberingSystem": [
      "Conjunto de Corte: 4 Agulhas Anguladas (0°, 45°, 90°, 135°)",
      "Densidade do Festonê: 0,38 mm",
      "Largura do Ponto Cheio de Borda: 3,5 mm a 4,5 mm"
    ],
    "advantages": [
      "✔ Transforma a confecção de Richelieu tradicional em um processo rápido e altamente lucrativo",
      "✔ Agrega o maior valor histórico e comercial do bordado nobre de cama, mesa e banho",
      "✔ Produto final com qualidade comparável às rendas artesanais de museu"
    ],
    "commonErrors": [
      "❌ Colocar a largura do festonê muito estreita (< 2,5 mm), deixando a borda cortada escapar e desfiar",
      "❌ Esquecer de colocar entretela hidrossolúvel dupla embaixo do tecido, fazendo as pontes caírem no vazio",
      "❌ Inverter a ordem das agulhas de corte, fazendo o corte sair torto ou incompleto"
    ],
    "voceSabia": "A renda Richelieu foi criada no século XVII quando o Cardeal de Richelieu, primeiro-ministro da França, proibiu a importação de rendas caras da Itália para proteger a economia francesa; as artesãs francesas responderam criando essa técnica de recortar o linho e bordar por cima, que virou febre mundial!",
    "curiosidadeTecnica": "As agulhas de corte (Cutwork Needles) não possuem olho nem levam linha: elas têm uma micro-lâmina em forma de cinzel na ponta. Ao descerem no tecido, realizam micro-incisões lineares de 0,8 mm de comprimento; a combinação dos 4 ângulos permite cortar curvas e formas perfeitas.",
    "dicaArtrelados": "Ao bordar Richelieu com lâminas de corte, use sempre duas camadas de entretela hidrossolúvel bem esticadas no bastidor: borrife um tiquinho de água com pincel nas pontes rendadas logo após o bordado para assentar os nós antes de lavar a peça inteira!",
    "comparisonTable": {
      "headers": [
        "Método de Richelieu",
        "Tempo de Execução",
        "Risco de Picar o Tecido",
        "Precisão do Corte"
      ],
      "rows": [
        [
          "Agulhas de Corte Automático",
          "10 minutos (100% na máquina)",
          "Zero (Corte milimétrico CNC)",
          "Perfeita (0,05 mm)"
        ],
        [
          "Corte Manual com Tesourinha",
          "45 minutos (Exige parar a máquina)",
          "Alto (Risco de cortar a linha)",
          "Depende da mão da bordadeira"
        ],
        [
          "Corte a Laser Integrado",
          "2 minutos (Linha de montagem)",
          "Muito baixo (Risco de queima)",
          "Altíssima a laser"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM (Corte: 450 PPM)",
      "needleType": "Kit de Agulhas Cutwork (4 ângulos) + Agulha 75/11 para bordado",
      "stabilizer": "Entretela Hidrossolúvel Dupla (80 micras cada)",
      "threadTension": "100 a 110 gf (superior) e 22 gf (bobina)",
      "density": "0.38 mm com festonê de 4.0 mm de largura"
    },
    "applications": [
      "Toalhas de mesa de banquete, caminhos de mesa e jogos americanos de linho puro",
      "Lençóis de berço de batizado, vestidos infantis de gala e mantilhas de noiva",
      "Cortinas e barrados rendados para decoração de interiores clássica",
      "Almofadas nobres e camisolas de algodão de alta costura"
    ],
    "troubleshootingTips": [
      "Se o retalho de tecido não se soltar facilmente após o corte, aumente a densidade dos golpes da agulha de corte no software",
      "Verifique se o festonê cobre pelo menos 1,0 mm para dentro e 1,0 mm para fora da linha de corte",
      "Lave a peça em água morna com algumas gotas de sabão neutro para dissolver 100% da entretela"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Festonê",
      "Entretela Hidrossolúvel",
      "Película Hidrossolúvel",
      "Matriz de Falso Richelieu / Cutwork no Bastidor"
    ],
    "tags": [
      "m-080",
      "ponto richelieu",
      "cutwork needles",
      "laminas de corte",
      "rendas",
      "linho",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BERNADOTTE, Madeleine. The Art of Ecclesiastical and Table Cutwork Lace. Paris, 2021.",
      "PARRISH, Gail. Automated Cutwork Needle Digitizing and Richelieu Finishing. Cincinnati, 2022."
    ],
    "practicalExercise": "Configure uma matriz simples com um círculo vazado de 4 cm com pontes em cruz e borda em festonê sobre entretela hidrossolúvel dupla e cambraia de algodão. Execute os passos de corte e bordado. Lave com água morna e veja a renda clássica surgir perfeita sem você ter usado tesoura!",
    "quickSummary": "Uso de agulhas com lâminas na ponta que recortam o tecido sozinhas para criar rendas Richelieu perfeitas.",
    "beginnerExplanation": "O Richelieu é aquela renda linda cheia de buraquinhos decorativos. Com as agulhas de corte especiais, a própria máquina bordadeira recorta os tecidos nos lugares certos e faz o acabamento de renda por cima, tudo automático e perfeito!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-081-malha-flame-e-tecidos-com-fios-irregulares",
    "code": "M-081",
    "term": "Malha Flamê & Tecidos com Fios Irregulares (Slub Knit & Irregular Yarn Fabrics)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês flamé (com efeito de chamas / manchas) e do inglês slub yarn (fio fiado com espessura variável proposital).",
    "summary": "Técnicas de estabilização e bordado em malhas com variações intencionais de espessura de fios, evitando repuxos assimétricos, ondas e perfurações.",
    "definition": "Malha Flamê & Tecidos com Fios Irregulares (Slub Cotton Knit Embroidery) são malhas de vestuário casual que apresentam alternância rítmica de trechos espessos e trechos quase transparentes de fio na mesma trama. Essa irregularidade estrutural confere charme estético, mas reduz a resistência à tração em áreas finas, exigindo entretelas de malha flexível (PolyMesh ou termofusível suave), agulhas de ponta bola fina 70/10 SES para não cortar os filamentos finos e matrizes com pontos leves, underlays abertos e compensação de repuxo generosa de 0,40 mm.",
    "technicalDetails": "Gramatura média da malha: 120 a 160 g/m². Variação de densidade da trama: até 40% entre nós de flamê e vãos. Agulha: 70/10 ou 75/11 Ball Point (SES). Compensação de repuxo: 0,40 mm a 0,45 mm.",
    "construction": [
      "Malha flamê 100% algodão penteado ou mescla viscose/algodão",
      "Entretela de recorte leve não-tecida multidirecional (PolyMesh 50 g/m²)",
      "Adesivo temporário em spray de baixo resíduo ou entretela termocolante hidrossolúvel",
      "Linha de poliéster 40wt ou linha de algodão 50wt fosca",
      "Película hidrossolúvel de topo leve (Solvy 20 micras) para nivelar as saliências dos fios"
    ],
    "howItWorks": [
      "1. A entretela PolyMesh é colada suavemente no avesso da malha flamê para neutralizar o estiramento.",
      "2. O tecido é encaixado no bastidor sem esticar a trama, mantendo a textura natural do flamê.",
      "3. Coloca-se a película hidrossolúvel por cima para que o calcador deslize sobre os nós do fio sem prender.",
      "4. A máquina borda em velocidade moderada de 650 a 750 PPM com agulha de ponta bola fina.",
      "5. A matriz aplica pontos leves que repousam suavemente sobre a malha sem afundar nos vãos finos.",
      "6. A compensação de repuxo compensa a elasticidade assimétrica natural das fibras de algodão.",
      "7. A peça é finalizada lavando a película de topo, mantendo o caimento leve e despojado da camiseta."
    ],
    "mainTypes": [
      "Camisetas em Malha Flamê 100% Algodão (Moda jovem casual e streetwear)",
      "Viscose Flamê para Moda Feminina (Tecidos fluidos com alto caimento e grande elasticidade)",
      "Linho com Efeito Flamê Rústico (Tecido plano com fios de espessura artesanal variável)"
    ],
    "characteristics": [
      "Caimento extremamente leve, fresco e moderno nas roupas prontas",
      "Textura visual mesclada com aspecto rústico e artesanal",
      "Toque macio do bordado quando digitalizado com densidades abertas",
      "Alta valorização comercial em marcas de moda praia e casual chique"
    ],
    "limitations": [
      "Não suporta bordados pesados tipo brasão com tatamis maciços de alta densidade",
      "Nunca esticar a malha ao prender no bastidor para não deformar permanentemente a camiseta",
      "Evitar agulhas ponta fina cortante que furam e desmancham os fios finos da malha"
    ],
    "numberingSystem": [
      "Gramatura Típica: 130 a 150 g/m²",
      "Compensação de Repuxo: 0,40 mm",
      "Densidade Recomendada: 0,44 mm a 0,48 mm"
    ],
    "advantages": [
      "✔ Permite bordar com perfeição no tecido mais vendido e procurado da moda casual de verão",
      "✔ Evita que camisetas fiquem com buracos ao redor do bordado após a primeira lavagem",
      "✔ Mantém o bordado leve sem transformar a frente da camiseta em uma placa dura"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável comum, que estoura nos pontos finos e faz a malha franzir",
      "❌ Puxar a malha com força no aro do bastidor, deixando a camiseta torta com a gola torta",
      "❌ Usar densidade fechada de 0,35 mm, que picota e fura os fios finos da malha flamê"
    ],
    "voceSabia": "Originalmente, os fios flamê (slub) eram considerados defeito de fiação nas tecelagens do século XIX quando a máquina falhava; no século XXI, máquinas japonesas de última geração foram reprogramadas para criar essas imperfeições calculadas que viraram sinônimo de luxo despojado!",
    "curiosidadeTecnica": "Nas áreas finas da malha flamê, a densidade de fios por centímetro quadrado cai até 50%; por isso, o uso da película hidrossolúvel por cima funciona como uma ponte física que impede a agulha de empurrar o nó do ponto para dentro da camiseta.",
    "dicaArtrelados": "Ao bordar camisetas de malha flamê, nunca aperte o bastidor puxando o tecido! Prenda a entretela PolyMesh no bastidor, borrife cola spray bem levinha e deite a camiseta por cima alisando com a mão (técnica de flutuação). O bordado não repuxa nada e a malha não perde a forma!",
    "comparisonTable": {
      "headers": [
        "Aspecto",
        "Malha Penteada Lisa",
        "Malha Flamê Irregular"
      ],
      "rows": [
        [
          "Estrutura da Trama",
          "Fios regulares e homogêneos",
          "Variação de partes grossas e finas"
        ],
        [
          "Risco de Furos",
          "Baixo",
          "Alto nos trechos finos sem ponta bola"
        ],
        [
          "Entretela Indicada",
          "Rasgável média ou Recorte",
          "Recorte PolyMesh ou Hidrossolúvel"
        ],
        [
          "Compensação de Repuxo",
          "0,25 mm a 0,30 mm",
          "0,40 mm a 0,45 mm (Reforçada)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 ou 75/11 Ball Point (SES / Ponta Bola Fina)",
      "stabilizer": "Entretela PolyMesh de Recorte 50 g/m² + Película de Topo Solúvel",
      "threadTension": "100 a 110 gf (superior suave) e 20 a 22 gf (bobina)",
      "density": "0.45 mm com underlays abertos em zigue-zague leve"
    },
    "applications": [
      "Camisetas e regatas masculinas e femininas de moda casual e praia",
      "Vestidos e saídas de banho leves em viscose flamê",
      "Roupas infantis leves e bodies de bebê confortáveis",
      "Uniformes de academias e estúdios de pilates que prezam por leveza"
    ],
    "troubleshootingTips": [
      "Se surgirem pequenos furos nos cantos das letras, substitua imediatamente a agulha por uma 70/10 SES nova",
      "Aumente a compensação de repuxo no programa se os círculos ficarem ligeiramente ovais",
      "Use entretela termocolante hidrossolúvel para garantir toque macio no avesso"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Malha e Tecidos Elásticos",
      "Compensação de Repuxo",
      "Película Hidrossolúvel",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-081",
      "malha flame",
      "slub knit",
      "fios irregulares",
      "camisetas",
      "polymesh",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KAUFMANN, Dieter. Modern Knitted Fabrics: Slub Yarns and Stitch Dynamics. Stuttgart, 2021.",
      "PARRISH, Gail. Embroidery Stabilization for High-End Knitwear and Slub Textures. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de camiseta de malha flamê. Borde um desenho circular simples com entretela rasgável comum puxando o tecido no bastidor. Em outro retalho, borde o mesmo desenho flutuado sobre entretela PolyMesh com ponta bola 70/10 e plástico solúvel por cima. Compare o toque e o formato perfeitamente redondo do segundo!",
    "quickSummary": "Técnicas de bordado para malhas de fios com espessura variável, garantindo leveza sem furos nem repuxo.",
    "beginnerExplanation": "A malha flamê é aquele tecido gostoso e levinho de camiseta que tem umas listrinhas e nós naturais mais grossinhos e outras partes bem fininhas. A gente usa agulha de pontinha redonda e entretela macia para bordar sem furar o tecido e sem deixar a camiseta dura!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-082-modulacao-de-angulo-em-degraus-step-angle-curved-satin",
    "code": "M-082",
    "term": "Modulação de Ângulo em Degraus (Step Angle & Curved Satin Transitions)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim modulatio (variação rítmica e proporcional) e do inglês step angle (ângulo de ponto em degraus graduados).",
    "summary": "Técnica de programação de linhas de direção em curvas de ponto cheio que evita o acúmulo excessivo de pontos e nós no raio interno da curva.",
    "definition": "Modulação de Ângulo em Degraus (Curved Satin Smart Angle Partitioning) é a técnica de digitalização avançada em que os ângulos de penetração da agulha em colunas curvas de ponto cheio são fragmentados em setores angulares graduados (*smart cornering* / particionamento em leque). Ao curvar uma coluna de cetim, os pontos no raio externo viajam uma distância muito maior do que no raio interno; a modulação em degraus recalcula automaticamente a densidade interna e aplica pontos curtos alternados (*short stitches*), impedindo que dezenas de furos se sobreponham no mesmo milímetro, o que causaria quebra de agulha, arrebentamento de linha e relevos indesejados.",
    "technicalDetails": "Graduação máxima de ângulo entre nós adjacentes: 5° a 8°. Comprimento de pontos curtos internos: 40% a 60% da largura total da coluna. Alívio de densidade radial: até 50% no vértice interno.",
    "construction": [
      "Software de digitalização com suporte a vetores e linhas de direção manuais (Wilcom, Embird, Bernina, Wings)",
      "Curvas de Bézier com nós de controle e guias angulares em leque",
      "Algoritmo de compensação de pontos curtos (*Smart Corners & Short Stitches*) ativado",
      "Densidade nominal da coluna regulada entre 0,38 mm e 0,42 mm",
      "Underlays em zigue-zague leve ou ponto de contorno interno com recuo de 0,6 mm"
    ],
    "howItWorks": [
      "1. O programador define o contorno da curva e adiciona guias de direção perpendiculares à trajetória.",
      "2. O software calcula o comprimento do arco interno e do arco externo da curva.",
      "3. O algoritmo insere pontos curtos alternados no lado interno para aliviar a aglomeração de furos.",
      "4. A máquina borda a curva com movimento suave do pantógrafo, sem paradas bruscas.",
      "5. A linha superior assenta com brilho acetinado contínuo e reflexo de luz uniforme em todo o arco.",
      "6. A parte interna da curva permanece lisa, plana e macia, sem formar um caroço duro de linha.",
      "7. A agulha passa sem esforço pelo vértice, zerando o risco de quebras e desgaste mecânico."
    ],
    "mainTypes": [
      "Canto em Meia-Esquadria / Mitra (Mitred Corner para ângulos retos de 90° em molduras e monogramas)",
      "Curvatura em Leque Fluido (Smart Fan Cornering para letras cursivas, arabescos e motivos florais)",
      "Intersecção em Degrau Sobreposto (Lap Joint Corner para fitas largas e listras heráldicas)"
    ],
    "characteristics": [
      "Brilho de reflexão de luz impecável e uniforme ao longo de toda a curva da coluna",
      "Eliminação total de nós volumosos e bolos de linha no canto interno",
      "Costura fluida e silenciosa com preservação da ponta da agulha",
      "Acabamento estético de alta alfaiataria em logotipos e letras decorativas"
    ],
    "limitations": [
      "Exige domínio das ferramentas avançadas de edição de nós e linhas de ângulo no software",
      "Curvas muito fechadas (< 45°) devem ser preferencialmente divididas em dois objetos sobrepostos",
      "Não se aplica a pontos de tatami ou preenchimentos complexos com múltiplos furos"
    ],
    "numberingSystem": [
      "Variação Angular Máxima: 8° por ponto",
      "Redução de Pontos Curtos: 50% de recuo",
      "Densidade Nominal: 0,40 mm"
    ],
    "advantages": [
      "✔ Reduz em até 90% a quebra de agulhas e linhas durante a execução de monogramas e arabescos",
      "✔ Proporciona bordados de luxo com toque macio e acabamento acetinado de alta classe",
      "✔ Agiliza a produção eliminando paradas de máquina para repor fios partidos"
    ],
    "commonErrors": [
      "❌ Deixar os ângulos em 90° retos dentro de curvas, criando um buraco preto no centro do arco",
      "❌ Desativar a função de pontos curtos (*short stitches*), empilhando 30 furos no mesmo ponto interno",
      "❌ Mudar o ângulo bruscamente em 45° de uma vez só, criando uma costura feia e partida"
    ],
    "voceSabia": "A matemática dos ângulos graduados em bordado foi inspirada na técnica dos marceneiros renascentistas italianos que entalhavam molduras douradas em madeira (*intarsia*), calculando a divisão dos ângulos para que a madeira nunca rachasse nos cantos!",
    "curiosidadeTecnica": "Em uma curva fechada de 90° sem modulação de ângulo, a densidade no raio interno pode atingir 0,08 mm (5 vezes mais apertado que o normal), gerando uma força de impacto de penetração que pode empenar a barra de agulha da máquina em questão de segundos.",
    "dicaArtrelados": "Ao digitalizar letras cursivas com muitas curvas, adicione linhas de direção manuais a cada centímetro da curva e certifique-se de que a opção 'Pontos Curtos' (Short Stitches) esteja marcada com 50% no seu software: suas letras vão bordar com uma maciez incrível e sem nunca estourar a linha!",
    "comparisonTable": {
      "headers": [
        "Abordagem de Curva",
        "Aspecto no Canto Interno",
        "Risco de Quebra de Linha",
        "Reflexo da Luz"
      ],
      "rows": [
        [
          "Modulação em Degraus (Smart Angle)",
          "Plano, limpo e macio",
          "Zero (Excelente fluxo)",
          "Brilho contínuo e fluido"
        ],
        [
          "Ângulo Fixo Automático",
          "Bolo duro de linha e furos acumulados",
          "Altíssimo",
          "Luz cortada e fosca"
        ],
        [
          "Canto em Esquadria (Mitra)",
          "Linha diagonal nítida de divisão",
          "Muito Baixo",
          "Efeito de moldura elegante"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES ou Universal",
      "stabilizer": "Adequado ao tecido da peça",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com ativação de Short Stitches a 50%"
    },
    "applications": [
      "Monogramas elegantes e tipografias cursivas com arabescos complexos",
      "Logotipos corporativos circulares e emblemas desportivos com arcos",
      "Bordados florais de alta definição, pétalas curvas e folhas estilizadas",
      "Brasões heráldicos e fitas ornamentais com dobras tridimensionais"
    ],
    "troubleshootingTips": [
      "Se a linha superior arrebentar sempre na mesma curva, abra o software e adicione mais linhas de direção intermediárias",
      "Verifique se o recuo de pontos curtos está regulado para alternar entre 30% e 60%",
      "Evite larguras de ponto cheio superiores a 8,5 mm em curvas muito fechadas"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Repuxo",
      "Densidade de Pontos",
      "Modificador de Ponto Curvo Inteligente"
    ],
    "tags": [
      "m-082",
      "modulacao de angulo",
      "smart angle",
      "pontos curtos",
      "curvas em cetim",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Vector Digitizing & Stitch Angle Dynamics. Sydney, 2021.",
      "PARRISH, Gail. Precision Curve Mechanics and Cornering in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize a letra 'S' em ponto cheio de 4 cm de altura de duas formas: uma com ângulo automático único e outra modulando os ângulos gradualmente em leque com pontos curtos ativados. Borde as duas lado a lado. Sinta com os dedos o verso e a frente de ambas e veja a perfeição da segunda!",
    "quickSummary": "Programação inteligente de ângulos em curvas de ponto cheio que evita bolos de linha e quebra de agulha.",
    "beginnerExplanation": "Quando a máquina faz uma curva em ponto cheio, o lado de dentro fica muito apertado e o de fora fica mais aberto. Essa técnica distribui os pontinhos como um leque suave, fazendo a curva ficar lisa, brilhante e sem embolar a linha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-083-manta-siliconada-e-estruturacao-em-matelasse-tridimensional",
    "code": "M-083",
    "term": "Manta Siliconada & Estruturação em Matelassê Tridimensional (Siliconized Batting & 3D Trapunto Quilting)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego manthe (agasalho / cobertura) e do francês matelasser (acolchoar / forrar com almofadas).",
    "summary": "Uso de mantas de poliéster virgem com tratamento de silicone e resina para criação de acolchoados fofos, matelassês profundos e efeito trapunto no bastidor de bordar.",
    "definition": "Manta Siliconada & Estruturação em Matelassê Tridimensional (High-Loft Siliconized Quilted Batting) é o material estabilizador e estruturador composto por fibras de poliéster ocas e conjugadas, tratadas com banho de silicone líquido e termofixadas. Essa composição confere à manta alta memória elástica (*resilience*), permitindo que ela seja comprimida pelo bastidor e pelos pontos de bordado e retorne com volume máximo nos vãos livres, gerando almofadados profundos com toque sedoso para nécessaires, colchas de bebê, jaquetas acolchoadas e peças de decoração de alto padrão.",
    "technicalDetails": "Gramaturas mais utilizadas: 100 g/m² (fina), 150 g/m² (média) e 200 g/m² (alta densidade). Fibras 100% poliéster virgem siliconado com ponto de fusão de 250°C. Recuperação elástica: > 95% após prensagem.",
    "construction": [
      "Tecido superior de acabamento (tricoline 100% algodão, cetim de seda ou microfibra acetinada)",
      "Manta siliconada de média ou alta resiliência (100 a 150 g/m²)",
      "Tecido de forro inferior ou entretela de sustentação macia (TNT 40 g/m²)",
      "Adesivo temporário em spray para montagem do 'sanduíche' têxtil sem rugas",
      "Matriz com linhas de acolchoamento contínuo (*stippling*, favo de mel ou losangos) e pontos de relevo"
    ],
    "howItWorks": [
      "1. Monta-se o sanduíche: forro inferior + manta siliconada + tecido de topo com adesivo temporário.",
      "2. O conjunto é fixado no bastidor com tensão homogênea sem esmagar o volume da manta.",
      "3. A máquina borda primeiro as linhas de pesponto do matelassê em ponto corrido triplo ou zigue-zague fino.",
      "4. As costuras comprimem a manta nos trajetos das linhas, forçando as fibras a inflarem nos espaços abertos.",
      "5. Em seguida, a máquina borda os monogramas ou desenhos centrais com compensação de repuxo de 0,45 mm.",
      "6. A peça é retirada do bastidor e as fibras siliconadas expandem imediatamente para o volume original.",
      "7. O resultado é um acolchoado tridimensional exuberante, macio ao toque e termicamente isolante."
    ],
    "mainTypes": [
      "Manta Siliconada Solta High-Loft (Para colchas de berço, almofadas e efeito trapunto profundo)",
      "Manta R1 Siliconada Termocolante Unilateral (Com resina de um lado para fixar o tecido de topo com ferro)",
      "Manta R2 Siliconada Dupla Face (Com resina dos dois lados para estruturar bolsas e nécessaires firmes)"
    ],
    "characteristics": [
      "Volume tridimensional exuberante com recuperação elástica imediata após lavagens",
      "Toque incrivelmente sedoso, fofo e confortável que não deforma nem esfarela",
      "Isolamento térmico e acústico de alta performance em roupas e acessórios",
      "Hipoalergênica, antimofo e lavável em máquina doméstica comum"
    ],
    "limitations": [
      "Exige regular a altura do calcador da máquina para não arrastar ou travar no volume alto",
      "Não passar ferro quente seco diretamente sobre a manta sem pano úmido ou folha de teflon",
      "Evitar densidades de bordado muito pesadas que esmagam o volume e endurecem a peça"
    ],
    "numberingSystem": [
      "Gramatura Padrão: 100 a 150 g/m²",
      "Espessura Livre: 6 mm a 12 mm",
      "Velocidade de Trabalho: 650 a 750 PPM"
    ],
    "advantages": [
      "✔ Transforma tecidos planos simples em produtos estruturados de luxo com altíssima margem de lucro",
      "✔ Ideal para confecção de bolsas, estojos, capas de caderno e kits completos de maternidade",
      "✔ Proporciona um efeito acolchoado irresistível ao toque de clientes finais"
    ],
    "commonErrors": [
      "❌ Apertar o parafuso do bastidor até o limite, esmagando a fibra e deixando marcas brancas definitivas",
      "❌ Deixar o calcador da máquina muito baixo, empurrando o tecido e criando pregas feias",
      "❌ Usar manta comum sem silicone que vira uma placa dura e esfarela após a primeira lavagem"
    ],
    "voceSabia": "A técnica de matelassê tridimensional com acolchoamento nasceu na corte francesa de Versalhes no século XVIII com o nome de *Trapunto*, onde nobres encomendavam coletes e almofadas acolchoadas com lã de ovelha para se protegerem do inverno rigoroso dentro dos castelos de pedra!",
    "curiosidadeTecnica": "O tratamento com óleo de silicone nas fibras de poliéster reduz o coeficiente de atrito entre as próprias fibras em 80%, fazendo com que elas escorreguem umas sobre as outras e retornem à forma esférica fofa instantaneamente quando a pressão mecânica cessa.",
    "dicaArtrelados": "Ao bordar peças acolchoadas com manta siliconada, suba a altura do calcador da sua máquina em 1,5 mm a 2,0 mm na regulagem do painel ou no parafuso traseiro: a máquina vai deslizar macia sobre as almofadinhas sem empurrar o tecido e sem fazer pregas!",
    "comparisonTable": {
      "headers": [
        "Tipo de Manta",
        "Composição",
        "Memória Elástica (Resiliência)",
        "Toque Final"
      ],
      "rows": [
        [
          "Manta Poliéster Siliconada",
          "100% Poliéster Virgem Oco com Silicone",
          "Excelente (> 95%)",
          "Super macio / Sedoso"
        ],
        [
          "Manta Acrílica Comum",
          "Poliéster reciclado prensado",
          "Média (60% a 70%)",
          "Áspero / Rígido"
        ],
        [
          "Manta de Algodão Pura",
          "100% Fibras Naturais de Algodão",
          "Baixa (Volume plano compacto)",
          "Pesado / Tradicional"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 ou 90/14 SES (Ponta Bola Leve)",
      "stabilizer": "Manta Siliconada 120 g/m² + TNT 40 g/m² na base",
      "threadTension": "110 gf (superior) e 24 gf (bobina firme)",
      "density": "0.45 mm com compensação de repuxo de 0.45 mm"
    },
    "applications": [
      "Nécessaires estruturadas, bolsas femininas acolchoadas e mochilas térmicas",
      "Colchas de berço de bebê, protetores laterais e almofadas de amamentação",
      "Jaquetas acolchoadas estilo puffer, coletes térmicos e capas de tablet",
      "Caminhos de mesa em matelassê e jogos de cozinha de luxo"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar durante o matelassê, aumente o uso de adesivo spray temporário entre as camadas",
      "Use agulha 80/12 nova para atravessar o sanduíche têxtil sem repuxar fios da manta",
      "Digitalize as linhas de quilt com comprimento de ponto generoso de 2,8 mm a 3,5 mm"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Manta Acrílica R1 e R2",
      "Matriz ITH - In The Hoop",
      "Compensação de Repuxo",
      "Altura do Calcador"
    ],
    "tags": [
      "m-083",
      "manta siliconada",
      "matelasse",
      "trapunto",
      "acolchoado 3d",
      "necessaire",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LECLERC, Brigitte. Trapunto Quilting and 3D Structural Batting Techniques. Lion, 2021.",
      "PARRISH, Gail. High-Loft Batting Stabilization & In-The-Hoop Matelassé Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Monte um sanduíche de 20x20 cm com tecido tricoline, manta siliconada 150g e forro de algodão. Borde uma matriz de matelassê em losangos com um monograma no centro. Retire do bastidor e passe a mão: sinta o volume fofinho e o toque macio que só a manta siliconada proporciona!",
    "quickSummary": "Manta fofa com silicone de alta memória elástica para fazer nécessaires e acolchoados em alto relevo.",
    "beginnerExplanation": "A manta siliconada é como um recheio de travesseiro bem macio e fofinho prensado em lâmina. Quando a máquina borda sobre ela, os pontos afundam nas linhas e o tecido estufa nos meios, criando aquelas almofadinhas fofas que deixam bolsas e colchas lindas!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-084-micro-ajuste-de-folga-do-bico-da-lancadeira-rotary-hook-clearance",
    "code": "M-084",
    "term": "Micro-Ajuste de Folga do Bico da Lançadeira (Rotary Hook Clearance & Deflection Gap)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego mikros (pequeno) e do português lançadeira (dispositivo móvel que lança e entrelaça a linha).",
    "summary": "Calibração centesimal do afastamento lateral entre a cava da agulha e a ponta do gancho rotativo (0,05 mm a 0,10 mm) para anular quebras de agulha e falhas de ponto.",
    "definition": "Micro-Ajuste de Folga do Bico da Lançadeira (Rotary Hook-to-Needle Clearance & Axial Gap Calibration) é a regulagem mecânica de altíssima precisão que define a distância transversal milimétrica entre a lâmina da agulha (no rebaixo da cava / *scarf*) e a ponta afilada do gancho da lançadeira rotativa. Essa folga deve ser calibrada rigorosamente entre 0,05 mm e 0,10 mm (a espessura de uma folha de papel de seda fina); uma folga menor que 0,05 mm faz o bico bater na agulha em alta velocidade, cegando o gancho e estilhaçando agulhas, enquanto uma folga superior a 0,15 mm faz o bico passar no vazio sem capturar a laçada de linha, gerando pontos pulados e falhas graves de costura.",
    "technicalDetails": "Folga transversal ideal: 0,05 mm a 0,10 mm. Altura do cruzamento: 0,5 mm a 0,8 mm acima do olho da agulha. Subida de laçada (*loop lift*): 2,0 mm a partir do Ponto Morto Inferior (PMI). Chave de regulagem: Allen métrica de 2,0 mm ou 2,5 mm.",
    "construction": [
      "Calibre de lâminas micrométrico de precisão centesimal (lâminas de 0,05 mm e 0,08 mm)",
      "Lupa de relojoeiro iluminada com ampliação óptica de 10x a 20x",
      "Agulha de calibração nova e 100% reta (tamanho 80/12 DBxK5 ou Schmetz 130/705 H)",
      "Chave Allen de aço cromo-vanádio de alta resistência para parafusos do colar da lançadeira",
      "Lanterna LED cirúrgica para iluminação direta do compartimento inferior da lançadeira"
    ],
    "howItWorks": [
      "1. A máquina é desligada e a chapa de agulha e a caixa de bobina são removidas.",
      "2. Instala-se uma agulha nova e calibrada no bloco da barra de agulha, empurrando até o batente superior.",
      "3. Gira-se o volante manualmente até o grau exato de sincronismo (ex: 200° no painel).",
      "4. Afrouxam-se suavemente os parafusos de fixação da lançadeira no eixo rotativo.",
      "5. Desloca-se a lançadeira axialmente até que o bico fique a 0,05 mm da cava da agulha (sem encostar).",
      "6. Passa-se a lâmina calibradora de 0,05 mm entre a agulha e o bico: ela deve deslizar com leve atrito.",
      "7. Apertam-se os parafusos da lançadeira de forma alternada e com torque firme e equilibrado.",
      "8. Gira-se o volante manualmente por 360° para garantir que não haja contato mecânico em nenhum ponto."
    ],
    "mainTypes": [
      "Calibração Padrão para Tecidos Médios (Folga de 0,05 mm para malhas e algodão)",
      "Calibração de Alta Deflexão para Bon��s e Couro (Folga de 0,08 mm com defletor de agulha regulado para evitar flexão)",
      "Calibração para Fios Metálicos e Grossos (Folga de 0,10 mm com altura de 1,0 mm acima do olho)"
    ],
    "characteristics": [
      "Captura 100% infalível da laçada de linha em todas as velocidades (de 400 a 1.200 PPM)",
      "Preservação absoluta da integridade do bico da lançadeira contra lascas e rebarbas",
      "Eliminação definitiva de quebras inexplicáveis de linha e desfiamentos durante o bordado",
      "Estabilidade mecânica perfeita mesmo ao bordar materiais pesados que flexionam a agulha"
    ],
    "limitations": [
      "Exige paciência, iluminação adequada e ferramentas calibradas de precisão",
      "Nunca bater com ferramentas de metal no corpo da lançadeira para não empenar o eixo",
      "Sempre verificar o alinhamento da agulha antes de mexer na posição da lançadeira"
    ],
    "numberingSystem": [
      "Folga Transversal: 0,05 mm a 0,10 mm",
      "Altura Acima do Olho: 0,6 mm a 0,8 mm",
      "Grau no Volante: 198° a 204°"
    ],
    "advantages": [
      "✔ Resolve na raiz o problema de máquinas que 'pulam pontos' ou 'quebram agulhas do nada'",
      "✔ Economiza centenas de reais em visitas técnicas especializadas para ajustes de rotina",
      "✔ Garante que sua máquina opere com a maciez e precisão de quando saiu da fábrica"
    ],
    "commonErrors": [
      "❌ Deixar o bico encostando na agulha, produzindo um 'clique' metálico que cega a lançadeira em minutos",
      "❌ Fazer o ajuste com uma agulha torta ou desgastada, desregulando toda a máquina",
      "❌ Apertar apenas um parafuso do colar, fazendo a lançadeira girar em falso no meio do bordado"
    ],
    "voceSabia": "A folga de 0,05 mm entre o bico da lançadeira e a agulha é menor do que a espessura de um único fio de cabelo humano médio (que mede cerca de 0,07 mm)! É um dos ajustes mecânicos mais precisos de toda a engenharia industrial moderna.",
    "curiosidadeTecnica": "Quando a agulha perfura tecidos espessos como a copa de um boné estruturado, ela sofre uma força de deflexão lateral de até 0,3 mm para trás; se a folga e a chapa protetora de agulha não estiverem milimetricamente ajustadas, a agulha é arremessada diretamente contra o bico da lançadeira.",
    "dicaArtrelados": "Não tem lâmina de calibre no ateliê? Use um pedacinho de papel sulfite comum de 75 g/m² dobrado ao meio bem vincado: uma folhinha simples tem exatamente 0,08 mm de espessura. Se o papel passar justo entre o bico da lançadeira e a agulha sem prender e sem folga, sua máquina está regulada com perfeição!",
    "comparisonTable": {
      "headers": [
        "Folga do Bico",
        "Sintoma no Bordado",
        "Efeito Mecânico",
        "Diagnóstico"
      ],
      "rows": [
        [
          "Folga Correta (0,05 a 0,08 mm)",
          "Pontos perfeitos e nó uniforme",
          "Passagem suave sem atrito",
          "Regulagem ideal"
        ],
        [
          "Folga Zero (Encostando)",
          "Quebra constante de agulha e linha",
          "Bico bate e cega a ponta",
          "Afastar a lançadeira urgente"
        ],
        [
          "Folga Larga (> 0,15 mm)",
          "Pontos pulados e nós soltos",
          "Bico passa longe da laçada",
          "Aproximar a lançadeira a 0,05 mm"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Operação estável até 1.000 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 nova para calibração",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "N/A"
    },
    "applications": [
      "Manutenção corretiva após colisões de bastidor ou quebras violentas de agulha",
      "Preparação mecânica de máquinas para bordar bonés estruturados e couro",
      "Revisão técnica preventiva anual em ateliês e fábricas de bordado",
      "Equalização de múltiplos cabeçotes em máquinas bordadeiras industriais"
    ],
    "troubleshootingTips": [
      "Se a máquina continuar quebrando agulha após o ajuste, verifique se a barra de agulha não está empenada",
      "Passe uma lixa d'água 3000 com uma gota de óleo na ponta da lançadeira para remover qualquer micro-rebarba",
      "Lubrifique a pista da lançadeira com 2 gotas de óleo mineral antes de ligar o motor"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Lança-Ponto & Temporização Agulha-Lançadeira",
      "Caixa de Bobina",
      "Manutenção Preventiva"
    ],
    "tags": [
      "m-084",
      "micro ajuste",
      "folga da lancadeira",
      "rotary hook clearance",
      "ponto pulado",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Service Manual. Rotary Hook Clearance and Needle Deflection Standards. Nagoya, 2021.",
      "PARRISH, Gail. Precision Clearance Gauging & Hook Timing in Industrial Embroidery Machines. Cincinnati, 2022."
    ],
    "practicalExercise": "Retire a chapa de agulha e a caixa de bobina da máquina. Com uma lanterna e o volante na mão, desça a agulha até o ponto em que o bico da lançadeira passa atrás dela. Pegue uma tirinha de papel sulfite e passe entre os dois. Sinta a folga com a ponta dos dedos: agora você domina o coração mecânico da sua bordadeira!",
    "quickSummary": "Ajuste milimétrico do espaço de 0,05 mm entre a agulha e o bico da lançadeira para nunca mais pular ponto.",
    "beginnerExplanation": "O bico da lançadeira precisa passar raspando atrás da agulha (a uma distância menor que a espessura de um fio de cabelo), mas sem encostar nela. Se passar longe, a máquina não laça a linha e pula pontos; se bater, quebra a agulha. Esse ajuste deixa essa distância perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-085-matriz-com-pontos-de-conexao-rapida-smart-branching",
    "code": "M-085",
    "term": "Matriz com Pontos de Conexão Rápida / Smart Branching (Automated Branching & Hidden Connectors)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim connectere (ligar / entrelaçar) e do inglês branching (ramificação em galhos).",
    "summary": "Técnica algorítmica de digitalização que une múltiplos objetos de mesma cor em um único bloco contínuo, escondendo pontos de viagem por baixo dos preenchimentos e eliminando cortes de linha.",
    "definition": "Matriz com Pontos de Conexão Rápida / Smart Branching (Intelligent Branching & Continuous Path Digitizing) é a tecnologia computacional presente em softwares modernos de digitalização (como Wilcom e Hatch) que recalcula automaticamente a ordem de entrada, costura e saída de dezenas de objetos vetoriais independentes da mesma cor. O algoritmo traça uma rota contínua como uma árvore com galhos: ele programa a máquina para viajar por baixo dos futuros pontos cheios usando pontos corridos ocultos (*hidden travel runs*), bordar as extremidades e retornar finalizando as camadas superiores, eliminando até 85% dos comandos de corte de linha e nós desnecessários.",
    "technicalDetails": "Redução média no tempo de bordado: 20% a 35%. Economia de cortes de linha: até 85%. Comprimento dos pontos de conexão oculta: 2,0 mm a 2,5 mm. Tolerância de recuo da borda: 0,8 mm a 1,2 mm.",
    "construction": [
      "Software de digitalização com motor de ramificação inteligente (*Smart Branching Engine*)",
      "Objetos vetoriais de mesma cor (letras cursivas, arabescos, ramos de flores, contornos complexos)",
      "Definição automática ou manual do ponto inicial (Start Point) e ponto final (End Point) do grupo",
      "Geração automática de underlays contínuos e camadas de acabamento superiores",
      "Comandos de corte programados apenas nas mudanças reais de cor da linha"
    ],
    "howItWorks": [
      "1. O programador desenha ou seleciona todos os elementos de mesma cor na tela do computador.",
      "2. Aciona-se o comando de ramificação inteligente (*Branching*) no software.",
      "3. O software analisa a topologia do desenho e calcula o caminho mais curto e eficiente.",
      "4. Ele cria automaticamente os pontos de viagem escondidos (*travel stitches*) que passarão por baixo.",
      "5. A máquina borda todos os galhos, folhas e letras sem parar e sem cortar a linha uma única vez.",
      "6. A costura finaliza no ponto exato mais próximo da próxima cor do bordado.",
      "7. O avesso da peça fica extremamente limpo, plano e sem aquele emaranhado de nós e pontas soltas."
    ],
    "mainTypes": [
      "Ramificação de Textos e Monogramas Cursivos (Une todas as letras sem corte entre palavras)",
      "Ramificação de Arabescos e Galhos Florais (Borda árvores e trepadeiras complexas em fluxo contínuo)",
      "Ramificação de Contornos Perimetrais (Borda todos os contornos pretos de um desenho animado em uma única passada)"
    ],
    "characteristics": [
      "Redução drástica no tempo total de máquina parada para realizar cortes e arremates",
      "Avesso impecável e macio, sem nós grosseiros que pinicam a pele em roupas infantis",
      "Aumento significativo da vida útil da faca cortadora e dos solenoides da máquina",
      "Bordado mais fluido, silencioso e com menor risco de desfiamento de linha"
    ],
    "limitations": [
      "Os objetos ramificados devem ser todos da mesma cor e estarem fisicamente próximos",
      "Exige atenção para que os pontos de viagem não passem por áreas abertas e vazadas do tecido",
      "Não substitui o planejamento correto de sequência em desenhos com muitas sobreposições de cores"
    ],
    "numberingSystem": [
      "Economia de Tempo: 25% a 35%",
      "Comprimento de Ponto de Viagem: 2,2 mm",
      "Recuo de Borda Oculta: 1,0 mm"
    ],
    "advantages": [
      "✔ Aumenta a lucratividade do ateliê ao permitir bordar mais peças por hora na mesma máquina",
      "✔ Elimina o trabalho manual cansativo de ficar limpando pontinhas de linha com a tesourinha no final",
      "✔ Agrega acabamento profissional de padrão internacional aos arquivos de matriz"
    ],
    "commonErrors": [
      "❌ Deixar pontos de viagem passarem por fora do desenho sobre o tecido branco, criando linhas aparentes",
      "❌ Ramificar objetos com direções de pontos conflitantes que geram repuxo excessivo no tecido",
      "❌ Não definir o ponto final do grupo, fazendo a máquina dar uma viagem longa até a próxima cor"
    ],
    "voceSabia": "O algoritmo de Smart Branching utilizado nos softwares de bordado modernos é baseado no famoso 'Problema do Caixeiro-Viajante' (*Travelling Salesperson Problem*), um dos teoremas matemáticos mais complexos da computação gráfica mundial!",
    "curiosidadeTecnica": "Cada corte automático de linha em uma máquina de bordar leva entre 4 e 7 segundos (desaceleração, acionamento da faca, salto do pantógrafo e arremate inicial). Em um bordado com 30 cortes eliminados pelo Smart Branching, economizam-se mais de 3 minutos por peça bordada.",
    "dicaArtrelados": "Ao digitalizar nomes ou frases cursivas no seu programa, selecione todas as letrinhas da mesma cor e aperte a tecla de atalho de 'Ramificar' (Branching): a máquina vai bordar o nome inteiro de uma vez só, sem nenhum corte no meio, e o verso vai ficar liso e perfeito como mágica!",
    "comparisonTable": {
      "headers": [
        "Aspecto da Matriz",
        "Digitalização Tradicional com Cortes",
        "Matriz com Smart Branching"
      ],
      "rows": [
        [
          "Quantidade de Cortes",
          "20 a 40 cortes por matriz",
          "Apenas 1 corte na troca de cor"
        ],
        [
          "Tempo de Execução",
          "Lento (Muitas paradas de faca)",
          "Até 35% mais rápido"
        ],
        [
          "Acabamento do Avesso",
          "Cheio de nós e pontas soltas",
          "100% Limpo, liso e contínuo"
        ],
        [
          "Desgaste da Máquina",
          "Alto em facas e travas",
          "Mínimo com costura contínua"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 Universal ou Ball Point",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com underlays integrados na ramificação"
    },
    "applications": [
      "Nomes, frases e assinaturas em uniformes escolares e corporativos",
      "Galhos, folhagens e arabescos barrocos em toalhas de banho e enxovais",
      "Contornos perimetrais de brasões e personagens em jaquetas e camisetas",
      "Desenhos monocromáticos de alta velocidade para produções industriais em larga escala"
    ],
    "troubleshootingTips": [
      "Se uma linha de viagem ficar visível por baixo do ponto cheio, aumente a largura da coluna no software",
      "Selecione manualmente o nó inicial e final para posicionar a saída exatamente onde começa a cor seguinte",
      "Revise a simulação 3D no computador antes de enviar o arquivo final para a máquina"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Matriz de Conexão e Pontos de Salto Ocultos",
      "Módulo Corta-Fio de Chapa de Agulha e Faca Móvel",
      "Densidade de Pontos",
      "Compensação de Repuxo"
    ],
    "tags": [
      "m-085",
      "smart branching",
      "pontos de conexao",
      "sem cortes",
      "otimizacao de matriz",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM Software International. Smart Branching Algorithms and Path Optimization. Sydney, 2021.",
      "PARRISH, Gail. Advanced Pathing, Branching and Thread Trim Reduction in Commercial Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu programa de bordar e digite uma palavra cursiva de 5 letras. Veja quantos cortes ela tem. Agora aplique a ferramenta 'Ramificar' (Smart Branching) sobre ela. Repare como todos os cortes somem e o caminho fica contínuo. Envie para a máquina e cronometre a economia de tempo!",
    "quickSummary": "Recurso inteligente do software que une elementos da mesma cor sem cortes de linha e sem nós no avesso.",
    "beginnerExplanation": "O Smart Branching é como um atalho inteligente no computador: ele junta todas as letrinhas e galhos da mesma cor em um caminho só. A máquina borda tudo direto sem ficar cortando a linha toda hora, deixando o bordado muito mais rápido e o verso lisinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-086-microfibra-dry-fit-com-elastano",
    "code": "M-086",
    "term": "Microfibra Dry-Fit com Elastano (High-Performance Activewear & Spandex)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês dry-fit (ajuste seco / evaporação rápida de suor) e de elastano (fibra sintética de poliuretano segmentado).",
    "summary": "Técnicas de bordado de alta performance em tecidos esportivos tecnológicos ultrafinos com alta elasticidade bidirecional, sem repuxar, sem abrir buracos e sem deformar a peça.",
    "definition": "Microfibra Dry-Fit com Elastano (High-Performance Stretch Activewear Embroidery) é a aplicação de bordados computadorizados em tecidos tecnológicos sintéticos (composição de 85% a 92% poliéster ou poliamida com 8% a 15% de elastano/Spandex). Esses materiais possuem trama aberta para respirabilidade e alta capacidade de estiramento multidirecional. O bordado exige entretelas de recorte macias multidirecionais (PolyMesh), agulhas de ponta bola ultrafina 65/9 ou 70/10 SES, linhas leves 40wt ou 60wt e compensação de repuxo calibrada entre 0,45 mm e 0,55 mm para neutralizar a retração elástica após a retirada do bastidor.",
    "technicalDetails": "Composição típica: 88% Poliamida + 12% Elastano. Elasticidade transversal: > 60%. Agulha: 65/9 ou 70/10 Ball Point (SES). Compensação de repuxo: 0,50 mm. Densidade: 0,45 mm a 0,50 mm com underlays abertos.",
    "construction": [
      "Tecido Dry-Fit esportivo com elastano de secagem ultrarrápida",
      "Entretela de recorte leve multidirecional PolyMesh (50 g/m²) colada com adesivo temporário",
      "Agulha de ponta bola fina 70/10 SES com haste reforçada",
      "Linha de poliéster 40wt resistente ao cloro e à transpiração intensa",
      "Película hidrossolúvel de topo para assentamento uniforme dos pontos"
    ],
    "howItWorks": [
      "1. A entretela PolyMesh é colada com spray temporário no avesso da peça esportiva.",
      "2. O tecido é fixado no bastidor (de preferência bastidor magnético ou flutuação) sem esticar as fibras.",
      "3. Coloca-se a película hidrossolúvel sobre a área a ser bordada para conter a elasticidade superficial.",
      "4. A máquina borda em velocidade estável de 700 a 800 PPM com agulha ponta bola fina 70/10.",
      "5. A matriz aplica pontos com compensação de repuxo de 0,50 mm e densidades leves que esticam com a roupa.",
      "6. Ao soltar a peça do bastidor, a malha esportiva relaxa sem formar pregas ao redor do logotipo.",
      "7. A peça é lavada para remover a película, mantendo a flexibilidade e o conforto térmico durante o treino."
    ],
    "mainTypes": [
      "Camisetas Esportivas Dry-Fit de Corrida e Ciclismo (Bordados leves de patrocinadores e equipes)",
      "Leggings e Tops de Compressão com Alta Porcentagem de Elastano (Logotipos em áreas de estiramento severo)",
      "Polos Esportivas de Golfe e Tênis (Monogramas elegantes em tecido piquet dry-fit tecnológico)"
    ],
    "characteristics": [
      "Bordado totalmente estável que não deforma e não franze mesmo após centenas de lavagens",
      "Preservação integral da respirabilidade e do conforto térmico do tecido esportivo",
      "Toque suave no avesso que não arranha nem causa assaduras na pele dos atletas em movimento",
      "Altíssima resistência mecânica e resistência a suor, atrito e lavagens intensas"
    ],
    "limitations": [
      "Nunca usar entretela rasgável comum, que estoura com o estiramento e deforma a camiseta",
      "Evitar densidades pesadas de tatami maciço que criam uma 'placa dura' no peito do atleta",
      "Não puxar a camiseta ao prender no bastidor plástico convencional"
    ],
    "numberingSystem": [
      "Percentual de Elastano: 8% a 15%",
      "Compensação de Repuxo: 0,45 mm a 0,55 mm",
      "Densidade Recomendada: 0,46 mm a 0,50 mm"
    ],
    "advantages": [
      "✔ Abre as portas do lucrativo mercado de personalização de marcas esportivas e academias",
      "✔ Elimina o problema crônico de camisetas esportivas que enrugam e ficam tortas no peito",
      "✔ Garante acabamento de padrão internacional em uniformes de alta performance"
    ],
    "commonErrors": [
      "❌ Esticar o tecido Dry-Fit ao colocar no bastidor, fazendo o bordado encolher e virar uma tigela ao soltar",
      "❌ Usar agulha de ponta afiada cortante que corta os filamentos de elastano, abrindo buracos",
      "❌ Usar entretelas pesadas e grossas que incomodam e machucam o corpo durante a corrida"
    ],
    "voceSabia": "Os tecidos Dry-Fit utilizam fibras com micro-canais capilares em formato de trevo ou estrela que transportam o suor da pele para a superfície externa em milésimos de segundo; o bordado correto deve respeitar esses canais sem sufocar a respirabilidade do atleta!",
    "curiosidadeTecnica": "O fio de elastano presente no Dry-Fit pode se esticar em até 500% do seu comprimento original e voltar à forma inicial; se for perfurado por uma agulha ponta fina comum, o filamento se rompe internamente e cria o temido 'efeito escada' (desfiamento) na malha.",
    "dicaArtrelados": "Ao bordar camisetas esportivas Dry-Fit, nunca use entretela rasgável! Use entretela PolyMesh (aquela fininha de nylon que parece uma telinha macia) e flutue a camiseta sobre o bastidor: a camiseta não deforma, o bordado não repuxa e o avesso fica super macio sem machucar a pele!",
    "comparisonTable": {
      "headers": [
        "Parâmetro",
        "Camiseta de Algodão Comum",
        "Microfibra Dry-Fit com Elastano"
      ],
      "rows": [
        [
          "Elasticidade",
          "Baixa a Média (10% a 20%)",
          "Altíssima Bidirecional (40% a 70%)"
        ],
        [
          "Tipo de Entretela",
          "Rasgável Média ou Recorte",
          "Recorte PolyMesh Flexível Multidirecional"
        ],
        [
          "Compensação de Repuxo",
          "0,25 mm a 0,30 mm",
          "0,45 mm a 0,55 mm (Reforçada)"
        ],
        [
          "Ponta da Agulha",
          "Universal ou Ponta Bola Leve",
          "Ponta Bola Fina Cirúrgica (65/9 ou 70/10 SES)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "65/9 ou 70/10 Ball Point (SES / Ponta Bola Fina)",
      "stabilizer": "Entretela PolyMesh 50 g/m² + Película Hidrossolúvel de Topo",
      "threadTension": "100 a 110 gf (superior suave) e 20 gf (bobina)",
      "density": "0.48 mm com compensação de repuxo de 0.50 mm"
    },
    "applications": [
      "Uniformes de corrida, ciclismo, futebol e equipes de atletismo",
      "Roupas de academia, tops esportivos e calças legging de compressão",
      "Camisas polo esportivas de golfe e fardamentos corporativos tecnológicos",
      "Bolsas de ginástica, testeiras e munhequeiras de alto desempenho"
    ],
    "troubleshootingTips": [
      "Se a malha franzir ao redor do bordado após soltar do bastidor, aumente a compensação de repuxo para 0,55 mm",
      "Use bastidores magnéticos para evitar marcas de compressão permanentes no tecido sintético",
      "Borde sempre com película hidrossolúvel por cima para evitar que os pontos cheios afundem na trama"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Malha e Tecidos Elásticos",
      "Compensação de Repuxo",
      "Bastidores Magnéticos",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-086",
      "dry fit",
      "elastano",
      "microfibra",
      "activewear",
      "polymesh",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MAYER, Thomas. High-Tech Synthetic Microfibers and Spandex Embroidery Dynamics. Munique, 2021.",
      "PARRISH, Gail. Activewear & Performance Stretch Fabric Stabilization Standards. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de camiseta de ginástica Dry-Fit. Prenda no bastidor tradicional esticando com as mãos e borde um círculo de 5 cm com entretela rasgável. Em outro pedaço, flutue sobre entretela PolyMesh sem esticar a malha e borde com compensação de 0,50 mm. Solte ambos e veja como o primeiro vira uma tigela enrugada e o segundo fica perfeitamente liso!",
    "quickSummary": "Técnicas de bordar em tecidos esportivos elásticos com entretelas flexíveis e compensação reforçada.",
    "beginnerExplanation": "O tecido Dry-Fit de academia é super elástico e macio. Se você esticar ele no bastidor ou usar entretela dura, ele encolhe e fica todo amassado. A gente usa entretela macia tipo PolyMesh e agulha fininha de ponta redonda para o bordado esticar junto com a camiseta sem deformar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-087-monofilamento-termossoluvel-melt-away-basting-thread",
    "code": "M-087",
    "term": "Monofilamento Termossolúvel (Melt-Away Basting Thread & Heat-Sensitive Yarn)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego monos (único) e do latim termo (calor) + solvere (dissolver). Fio polimérico especial que se desintegra com o calor.",
    "summary": "Filamento sintético termossensível utilizado para pespontos provisórios e alinhamentos que desaparece e se desfaz completamente sob o calor do ferro ou prensa térmica sem deixar resíduos.",
    "definition": "Monofilamento Termossolúvel (Heat-Vanishing / Melt-Away Basting & Temporary Stitch Thread) é uma linha de alta tecnologia confeccionada a partir de polímeros termoplásticos de baixo ponto de fusão controlada (geralmente entre 110°C e 135°C). No bordado eletrônico e na alfaiataria de alta precisão, é empregado para bordar grelhas de alinhavo prévio (*basting boxes*), fixação temporária de apliques complexos e montagem de peças no bastidor; ao final do trabalho, basta passar o ferro quente ou aplicar a prensa térmica para que o fio se desintegre e desapareça sem necessidade de desmanchar pontos manualmente.",
    "technicalDetails": "Temperatura de fusão: 115°C a 130°C. Título do fio: dtex 130 a 160 (espessura similar à linha 40 comum). Resistência mecânica suficiente para suportar velocidades de até 750 PPM sem quebrar.",
    "construction": [
      "Carretel de fio termossolúvel sintético especial em cor translúcida ou branca",
      "Agulha padrão 75/11 ou 80/12 com olho polido",
      "Tensão da linha superior regulada em nível padrão ou ligeiramente aliviado",
      "Linha de bobina: pode-se usar o próprio fio termossolúvel na bobina ou linha comum",
      "Ferro de passar a vapor ou prensa térmica para ativação pós-bordado"
    ],
    "howItWorks": [
      "1. A linha termossolúvel é colocada na agulha superior da máquina de bordar.",
      "2. A máquina executa uma grade de pesponto largo (*basting stitch*) para prender tecidos difíceis à entretela.",
      "3. Executam-se também os pontos de posicionamento de apliques e rendas no bastidor.",
      "4. Troca-se para as linhas convencionais de poliéster para executar o bordado definitivo por cima.",
      "5. Ao finalizar o bordado, retira-se a peça do bastidor.",
      "6. Aplica-se o ferro quente ou prensa térmica a 130°C sobre o tecido por alguns segundos.",
      "7. O fio termossolúvel derrete e é absorvido pelas fibras microscópicas, sumindo sem deixar rastros."
    ],
    "mainTypes": [
      "Fio Termossolúvel a Seco (Desintegra-se apenas com a temperatura do ferro seco a 125°C)",
      "Fio Termo-Vaporizador (Dissolve-se rapidamente sob jato de vapor de água quente)",
      "Linha de Bobina Termossensível (Usada para soltar automaticamente bainhas e matelassês de prova)"
    ],
    "characteristics": [
      "Eliminação absoluta do trabalho manual demorado de puxar alinhavos com tesourinha e pinça",
      "Zero risco de puxar fios do tecido nobre ou estragar pontos definitivos durante o desmanche",
      "Totalmente invisível e inodoro após a fusão térmica correta",
      "Excelente resistência durante o bordado na máquina sem arrebentar prematuramente"
    ],
    "limitations": [
      "Guardar os carretéis em local fresco, longe da luz solar direta e de fontes de calor",
      "Nunca passar ferro quente na peça antes da hora para não derreter o alinhavo no meio do bordado",
      "Não utilizar como linha de bordado definitiva, pois ela derreterá na primeira passada de ferro"
    ],
    "numberingSystem": [
      "Ponto de Fusão: 120°C a 130°C",
      "Velocidade de Trabalho: 650 a 750 PPM",
      "Temperatura de Ativação: Regulagem 'Seda/Lã' no ferro"
    ],
    "advantages": [
      "✔ Economiza horas de trabalho manual em produções seriadas de apliques e alinhavos",
      "✔ Preserva tecidos delicadíssimos (como veludos, sedas e tules) contra furos de descosedor",
      "✔ Agilidade incomparável na montagem de peças complexas In The Hoop (ITH)"
    ],
    "commonErrors": [
      "❌ Usar ferro em temperatura muito baixa (< 100°C), deixando pedacinhos de linha grudados",
      "❌ Passar o ferro sobre o carretel ou deixar a linha perto do motor quente da máquina",
      "❌ Confundir o carretel termossolúvel com linha de poliéster normal e bordar o desenho definitivo com ela"
    ],
    "voceSabia": "O fio termossolúvel foi desenvolvido inicialmente na indústria de alfaiataria militar britânica para fixar bolsos e dragonas temporárias durante a prova de fardas de generais antes da costura final, sendo adaptado com grande sucesso para o bordado computadorizado!",
    "curiosidadeTecnica": "Ao atingir 125°C, as cadeias poliméricas do fio termossolúvel sofrem despolimerização instantânea, transformando o sólido em um microfilme líquido invisível de apenas 2 micras que é totalmente neutralizado na primeira lavagem da roupa.",
    "dicaArtrelados": "Identifique o carretel de linha termossolúvel com uma fita adesiva colorida bem chamativa (como fita crepe vermelha): assim você nunca vai correr o risco de confundi-lo com uma linha de costura normal e bordar uma matriz inteira que desaparece ao passar o ferro!",
    "comparisonTable": {
      "headers": [
        "Tipo de Fio de Alinhavo",
        "Método de Remoção",
        "Tempo de Remoção",
        "Risco de Puxar o Tecido"
      ],
      "rows": [
        [
          "Fio Termossolúvel",
          "Ferro de passar quente (125°C)",
          "3 segundos (Instantâneo)",
          "Zero (Sem esforço mecânico)"
        ],
        [
          "Linha Hidrossolúvel",
          "Lavagem ou borrifador de água",
          "Exige molhar e secar a peça",
          "Zero"
        ],
        [
          "Linha de Costura Comum",
          "Puxar com descosedor e pinça",
          "5 a 15 minutos por peça",
          "Alto risco de picar o tecido"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 Universal ou Microtex",
      "stabilizer": "Adequado ao projeto",
      "threadTension": "100 gf (superior suave) e 20 gf (bobina)",
      "density": "Pontos corridos largos de alinhavo (comprimento de 3,5 mm a 5,0 mm)"
    },
    "applications": [
      "Alinhavo perimetral prévio (*basting frame*) para fixar tecidos flutuados no bastidor",
      "Fixação temporária de apliques de tecido antes do corte ou costura definitiva",
      "Montagem de golas, bolsos e peças estruturadas no bastidor (In The Hoop)",
      "Costura provisória de rendas e soutaches em vestidos de noiva e alta costura"
    ],
    "troubleshootingTips": [
      "Se restar algum resíduo visível, aumente ligeiramente a temperatura do ferro para a posição algodão e use vapor",
      "Certifique-se de que a linha de bobina também seja termossolúvel caso queira que o verso se solte 100%",
      "Armazene a linha em saquinho plástico fechado com dessecante de sílica gel"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha Hidrossolúvel de Pesponto Provisório",
      "Técnica de Flutuação no Bastidor",
      "Aplique no Bastidor",
      "Matriz ITH - In The Hoop"
    ],
    "tags": [
      "m-087",
      "termossoluvel",
      "melt away thread",
      "alinhavo temporario",
      "linhas e fios",
      "ferro quente",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "PARRISH, Gail. Specialty Vanishing Threads and Temporary Basting Mechanics. Cincinnati, 2022.",
      "THOMPSON, Claire. Heat-Activated Soluble Polymers in Modern Textile Manufacturing. Manchester, 2021."
    ],
    "practicalExercise": "Coloque a linha termossolúvel na agulha superior e borde um quadro de alinhavo de 10x10 cm sobre um retalho de algodão preso à entretela. Retire do bastidor e passe o ferro quente a 130°C sobre o alinhavo por 5 segundos. Veja os pontos simplesmente desaparecerem diante dos seus olhos!",
    "quickSummary": "Linha especial para alinhavos temporários que derrete e some completamente ao encostar o ferro quente.",
    "beginnerExplanation": "É uma linha mágica feita para prender tecidos de mentirinha: a máquina costura o alinhavo com ela para segurar o tecido no lugar e, quando o bordado acaba, você só passa o ferro quente por cima e a linha derrete e desaparece na hora sem você ter que puxar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-088-matriz-de-bordado-em-alto-relevo-com-multiplas-camadas-de-eva",
    "code": "M-088",
    "term": "Matriz de Bordado em Alto Relevo com Múltiplas Camadas de EVA (Multi-Layer 3D Foam)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego matris (molde) e da sigla EVA (Etileno Vinil Acetato). Técnica de relevo extremo para bonés e jaquetas.",
    "summary": "Técnica de digitalização com sobreposição de lâminas de EVA de densidades diferentes para criação de relevos tridimensionais esculpidos com degraus e efeito chanfrado.",
    "definition": "Matriz de Bordado em Alto Relevo com Múltiplas Camadas de EVA (Multi-Layer 3D Foam Digitizing) é a evolução da técnica 3D convencional em que se utilizam duas ou mais camadas de placas de EVA de espessuras ou durezas distintas (por exemplo, base de EVA de 2 mm recoberta por relevo central de 3 mm). A matriz é digitalizada com densidades ultra-fechadas (0,18 mm a 0,22 mm), pontos de fechamento angular de 90° nas bordas e comandos automáticos de parada (*Stop/Pause*) para inclusão e fixação sequencial de cada lâmina de espuma, permitindo criar letras e brasões com relevo chanfrado e tridimensionalidade multinível.",
    "technicalDetails": "Densidade do ponto cheio de cobertura: 0,18 mm a 0,22 mm. Espessura combinada de EVA: 4,0 mm a 6,0 mm. Dureza Shore: 35 a 45 Shore A. Agulha: 80/12 ou 90/14 SES com revestimento de titânio (SAN 1).",
    "construction": [
      "Substrato rígido ou estruturado (sarja pesada de boné, brim ou feltro grosso)",
      "Entretela de recorte pesada resinada (80 a 100 g/m²)",
      "Conjunto de placas de EVA de cores coordenadas com a linha (espessuras de 2 mm e 3 mm)",
      "Linha de poliéster 40wt de alta resistência à tração mecânica",
      "Soprador térmico profissional ou ferro a vapor para retração dos microresíduos de espuma"
    ],
    "howItWorks": [
      "1. A máquina borda a linha de base e a primeira grade de contenção sobre o tecido.",
      "2. Coloca-se a primeira placa de EVA de 2 mm sobre a área do desenho.",
      "3. A máquina borda a camada de base com pontos de corte perimetrais para selar a primeira borda.",
      "4. Realiza-se o comando de parada e adiciona-se a segunda placa de EVA de 3 mm na área central.",
      "5. A máquina borda a cobertura final em ponto cheio ultra-denso (0,20 mm), picotando as duas camadas de EVA.",
      "6. Retira-se a peça do bastidor e destaca-se o excesso de EVA pelas linhas de corte criadas pela agulha.",
      "7. Aplica-se ar quente com o soprador térmico: os micro-pelos residuais de EVA encolhem e o relevo fica perfeito."
    ],
    "mainTypes": [
      "Relevo 3D Chanfrado / Bisotado (Letras de boné com bordas em declive e centro ultra-alto)",
      "Relevo Multinível em Brasões Militares (Escudos com coroas em 3D e faixas secundárias em relevo médio)",
      "Relevo 3D Monocromático com Brilho Acetinado (Logotipos de marcas esportivas de luxo)"
    ],
    "characteristics": [
      "Impacto visual imponente e tridimensionalidade real de até 5 mm de altura",
      "Bordas e vértices perfeitamente selados sem deixar a espuma colorida exposta",
      "Alta durabilidade e resistência à compressão mecânica sem perder o volume",
      "Produto de altíssimo valor agregado com grande apelo no mercado de moda jovem e streetwear"
    ],
    "limitations": [
      "Exige máquina potente com boa regulagem de folga da barra de agulha e do calcador",
      "Não recomendável para detalhes minúsculos ou letras com traços menores que 4,5 mm de largura",
      "Consome até 2,5 vezes mais linha do que um bordado plano tradicional"
    ],
    "numberingSystem": [
      "Densidade da Cobertura: 0,20 mm",
      "Espessura Máxima de EVA: 5 mm a 6 mm",
      "Velocidade de Execução: 500 a 600 PPM"
    ],
    "advantages": [
      "✔ Agrega o maior valor de venda no mercado de bonés personalizados e moda streetwear",
      "✔ Cria produtos exclusivos de qualidade comparável aos bonés oficiais da MLB e NBA",
      "✔ Acabamento impecável com toque emborrachado firme e sofisticado"
    ],
    "commonErrors": [
      "❌ Usar densidade comum (0,40 mm), deixando o EVA aparecer entre os fios de linha",
      "❌ Usar EVA de cor diferente da linha superior (ex: EVA branco com linha preta), mostrando pontos brancos",
      "❌ Esquecer os pontos de corte nas pontas das letras, dificultando o destaque do excesso de espuma"
    ],
    "voceSabia": "A técnica de bordado 3D em bonés foi criada na década de 1990 nos Estados Unidos pela marca New Era para os bonés oficiais da liga de beisebol (MLB), onde as letras 'NY' e 'LA' viraram ícones globais da cultura urbana!",
    "curiosidadeTecnica": "Ao perfurar o EVA com densidade de 0,20 mm, a agulha atua como uma guilhotina mecânica com mais de 50 perfurações por centímetro linear; quando o calor do atrito atinge 80°C, a borracha termoplástica do EVA sofre micro-solda térmica nas bordas.",
    "dicaArtrelados": "Ao bordar com EVA, use sempre a cor da borracha idêntica à cor da sua linha superior (exemplo: linha azul com EVA azul royal). Ao terminar, passe o soprador térmico a 15 cm de distância por apenas 3 segundos: qualquer pedacinho de EVA que tenha ficado aparente encolhe instantaneamente e o bordado fica impecável!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Bordado 3D Camada Única",
        "Bordado 3D Múltiplas Camadas"
      ],
      "rows": [
        [
          "Altura do Relevo",
          "2 mm a 3 mm",
          "4 mm a 6 mm (Esculpido em degraus)"
        ],
        [
          "Complexidade de Digitalização",
          "Média",
          "Alta (Múltiplas camadas e paradas)"
        ],
        [
          "Aspecto Visual",
          "Plano com relevo uniforme",
          "Degraus tridimensionais chanfrados"
        ],
        [
          "Densidade Necessária",
          "0,22 mm",
          "0,18 mm a 0,20 mm (Ultra-fechada)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "500 - 600 PPM",
      "needleType": "80/12 ou 90/14 SES Titânio (Groz-Beckert SAN 1)",
      "stabilizer": "Entretela de Recorte Pesada 80 a 100 g/m²",
      "threadTension": "120 a 130 gf (superior firme) e 26 gf (bobina)",
      "density": "0.20 mm com pontos de fechamento em 90° nas extremidades"
    },
    "applications": [
      "Bonés estruturados de aba curva e aba reta tipo snapback",
      "Jaquetas esportivas colegiais (letterman jackets) e moletons pesados",
      "Bolsas de ginástica e mochilas militares com brasões tridimensionais",
      "Emblemas de artes marciais e uniformes de motociclismo"
    ],
    "troubleshootingTips": [
      "Se o EVA estiver visível nas extremidades das colunas, adicione pontos de tampa perpendicular no software",
      "Suba a altura do calcador da máquina para não esmagar o EVA durante o deslocamento",
      "Use agulhas de titânio para evitar superaquecimento e derretimento do EVA na haste"
    ],
    "relatedTerms": [
      "Técnicas Especiais",
      "Bordado 3D com EVA",
      "Densidade de Pontos",
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Repuxo"
    ],
    "tags": [
      "m-088",
      "bordado 3d",
      "eva multiplo",
      "multi layer foam",
      "bones",
      "alto relevo",
      "tecnicas especiais",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "NEW ERA Cap Company Archives. 3D Puff Embroidery Engineering Standards. Buffalo, 2021.",
      "PARRISH, Gail. Advanced 3D Foam Layering & Multi-Level Digitizing Masterclass. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize a letra 'A' em ponto cheio de 5 cm de altura com densidade de 0,20 mm e extremidades fechadas. Borde sobre sarja com duas placas sobrepostas de EVA 2 mm (total 4 mm). Destaque a sobra de EVA e finalize com ar quente do soprador térmico. Veja a perfeição do relevo 3D de padrão internacional!",
    "quickSummary": "Uso de várias camadas de EVA para criar bordados em alto relevo super alto e esculpido em bonés.",
    "beginnerExplanation": "O bordado 3D é aquele bordado fofinho e alto dos bonés de beisebol. Quando usamos mais de uma camada de borracha EVA por baixo da linha, o bordado fica super alto, parecendo uma escultura em relevo que chama a atenção de longe!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-089-manutencao-eletrica-de-solenoides-de-corte-e-selecao-de-cor",
    "code": "M-089",
    "term": "Manutenção Elétrica de Solenoides de Corte & Seleção de Cor (Solenoid Actuators & Trimmer Coils)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego solen (tubo / condutor em espiral) e eidos (em forma de). Atuador eletromecânico da máquina.",
    "summary": "Diagnóstico de bobinas eletromagnéticas, testes de continuidade com multímetro, descarbonização de êmbolos e ajuste do curso de disparo da faca e troca de cor.",
    "definition": "Manutenção Elétrica de Solenoides de Corte & Seleção de Cor (Embroidery Solenoid Actuator Maintenance & Coil Resistance Testing) é o conjunto de procedimentos técnicos de revisão dos atuadores eletromagnéticos responsáveis por converter pulsos elétricos da placa controladora em movimento mecânico linear instantâneo. Esses componentes acionam o mecanismo da faca móvel de corte de linha, o pino de trava da troca automática de cor (*color change solenoid*) e o recolhedor de fio (*thread wiper*). A manutenção inclui medição de resistência ôhmica da bobina, limpeza de pó têxtil acumulado no êmbolo de ferro doce e ajuste de curso mecânico para garantir respostas em milissegundos sem falhas de corte nem erros no painel.",
    "technicalDetails": "Tensão de operação dos solenoides: 24V DC a 36V DC. Resistência ôhmica típica: 8 Ω a 22 Ω (dependendo do modelo Tajima/Barudan/Brother/Happy). Tempo de resposta de disparo: < 40 milissegundos. Folga de curso livre: 2,5 mm a 4,0 mm.",
    "construction": [
      "Bobina de enrolamento de fio de cobre esmaltado de alta condutividade",
      "Êmbolo móvel de ferro doce sinterizado com mola cônica de retorno em aço inox",
      "Placa de acionamento eletrônico com transistores MOSFET e diodos de proteção contra surtos (Flyback Diodes)",
      "Multímetro digital calibrado com escalas de resistência (Ohms) e continuidade sonora",
      "Solvente limpa-contatos elétricos não condutivo de secagem rápida"
    ],
    "howItWorks": [
      "1. A máquina é desenergizada completamente e o painel de acesso aos solenoides é aberto.",
      "2. Desconectam-se os cabos do solenoide para evitar leituras parasitas dos circuitos da placa-mãe.",
      "3. Mede-se a resistência da bobina com o multímetro: compara-se o valor com a especificação do manual técnico.",
      "4. Se a bobina estiver aberta (resistência infinita) ou em curto-circuito (resistência zero), ela é substituída.",
      "5. Desmonta-se o êmbolo móvel e remove-se todo o pó de linha e graxa seca com spray limpa-contatos.",
      "6. Inspeciona-se a mola de retorno: caso esteja fadigada ou quebrada, instala-se uma mola nova calibrada.",
      "7. Remonta-se o conjunto a seco (sem óleo, para não colar pó) e testa-se o disparo através do menu de diagnóstico do painel."
    ],
    "mainTypes": [
      "Solenoide de Acionamento da Faca Móvel (Trimmer Solenoid - comanda o corte de linha inferior)",
      "Solenoide de Seleção e Engate de Cores (Color Change Solenoid - comanda o pino do cabeçote)",
      "Solenoide do Pega-Fio / Puxador Superior (Thread Wiper Solenoid - esconde a ponta de linha cortada)"
    ],
    "characteristics": [
      "Disparos rápidos, silenciosos e com 100% de precisão mecânica nos comandos da matriz",
      "Eliminação total de erros de travamento tipo 'Trimmer Error' ou 'Color Change Error'",
      "Proteção das placas eletrônicas de potência contra queima de transistores de comando",
      "Vida útil prolongada dos componentes eletromecânicos por mais de 10 anos"
    ],
    "limitations": [
      "Nunca lubrificar o êmbolo do solenoide com óleos líquidos comuns que atraem poeira e travam o movimento",
      "Manter a máquina sempre conectada a aterramento elétrico eficiente e estabilizador de voltagem",
      "Não forçar o êmbolo com alicates para não riscar a superfície polida de deslizamento"
    ],
    "numberingSystem": [
      "Tensão Nominal: 24V / 36V DC",
      "Resistência da Bobina: 12 Ω ± 10%",
      "Curso Mecânico: 3,5 mm"
    ],
    "advantages": [
      "✔ Evita paradas inesperadas da linha de produção durante trabalhos urgentes",
      "✔ Diagnostica com exatidão se o defeito é mecânico (sujeira) ou elétrico (bobina queimada)",
      "✔ Reduz custos de assistência técnica ao permitir manutenção preventiva no próprio ateliê"
    ],
    "commonErrors": [
      "❌ Jogar óleo mineral dentro do solenoide, criando uma pasta preta que trava o êmbolo em poucos dias",
      "❌ Trocar o solenoide sem verificar se a mola de retorno estava apenas desencaixada",
      "❌ Operar a máquina com voltagem instável, superaquecendo as bobinas eletromagnéticas"
    ],
    "voceSabia": "Os solenoides foram inventados pelo físico francês André-Marie Ampère em 1820; hoje, uma máquina de bordar industrial de 12 cabeçotes possui mais de 48 solenoides disparando centenas de vezes por minuto com sincronismo de fração de segundo!",
    "curiosidadeTecnica": "Quando o solenoide desliga, a energia eletromagnética acumulada na bobina gera um pico de tensão reversa de até 300 Volts (efeito de força contra-eletromotriz); se o diodo de proteção da placa estiver com defeito, esse pico queima o transistor da controladora instantaneamente.",
    "dicaArtrelados": "Se sua máquina der erro de corte de linha e a faca não estiver travada, desligue a máquina e aplique um spray limpa-contatos elétricos seco dentro do corpinho do solenoide de corte: acione o êmbolo manualmente algumas vezes com o dedo para soltar a poeira têxtil acumulada. 90% dos problemas de corte são resolvidos em 2 minutos sem gastar nada!",
    "comparisonTable": {
      "headers": [
        "Condição do Solenoide",
        "Resistência Medida no Multímetro",
        "Comportamento da Máquina",
        "Ação Recomendada"
      ],
      "rows": [
        [
          "Bobina Saudável e Limpa",
          "10 Ω a 18 Ω (Estável)",
          "Disparo rápido e corte perfeito",
          "Apenas limpeza periódica a seco"
        ],
        [
          "Êmbolo Sujo com Poeira",
          "12 Ω (Elétrica perfeita)",
          "Faca emperra ou falha o corte",
          "Limpar com spray de contatos a seco"
        ],
        [
          "Bobina Queimada / Aberta",
          "Resistência Infinita (OL)",
          "Não aciona nada / Dá erro no painel",
          "Trocar a bobina do solenoide"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-manutenção: Operação normal em todas as faixas de velocidade",
      "needleType": "N/A (Manutenção elétrica)",
      "stabilizer": "N/A",
      "threadTension": "N/A",
      "density": "N/A"
    },
    "applications": [
      "Manutenção corretiva de erros de corte automático de linha em máquinas bordadeiras",
      "Revisão do sistema de troca automática de agulhas e cores em máquinas industriais",
      "Prevenção de falhas de puxador de fio (Thread Wiper) em bordados contínuos",
      "Inspeção técnica semestral de segurança elétrica e atuadores"
    ],
    "troubleshootingTips": [
      "Se o solenoide esquentar em excesso, verifique se a voltagem de alimentação está correta",
      "Certifique-se de que a mola de retorno tenha pressão suficiente para devolver o êmbolo à posição inicial",
      "Utilize sempre peças de reposição com a mesma especificação ôhmica e voltagem original"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Módulo Corta-Fio de Chapa de Agulha e Faca Móvel",
      "Mecanismo de Troca Automática de Cores",
      "Manutenção Preventiva",
      "Servo Motores"
    ],
    "tags": [
      "m-089",
      "solenoide",
      "atuador eletrico",
      "corte de linha",
      "troca de cor",
      "manutencao eletrica",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BARUDAN Technical Engineering Manual. Solenoid Actuators and Electronic Trimmer Systems. Ichinomiya, 2021.",
      "PARRISH, Gail. Industrial Embroidery Electronics: Actuators, Sensors and Power Supplies. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada, localize o solenoide do corta-fio embaixo da mesa ou atrás do cabeçote. Empurre o êmbolo de metal com o dedo e sinta a mola retornar. Aplique um jato de spray limpa-contatos seco e movimente novamente: sinta como o movimento fica instantaneamente mais livre e macio!",
    "quickSummary": "Testes e limpeza dos acionadores elétricos que comandam o corte de linha e a troca de cores na máquina.",
    "beginnerExplanation": "O solenoide é como um pequeno ímã elétrico que dá um 'puxão' rápido para fazer a faca cortar a linha ou mudar a cor da agulha. Manter essa pecinha limpinha e sem poeira garante que a máquina nunca engasgue na hora de cortar a linha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-090-musseline-de-seda-e-gaze-de-algodao",
    "code": "M-090",
    "term": "Musseline de Seda & Gaze de Algodão (Ultra-Sheer Fabric Embroidery)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da cidade de Mossul (Iraque), berço das tecelagens de musseline no século IX, e do árabe ghazz (seda crua).",
    "summary": "Técnicas de digitalização e fixação para bordar tecidos ultraleves, transparentes e vaporosos sem enrugar, sem repuxar e com acabamento de avesso perfeito para alta costura.",
    "definition": "Musseline de Seda & Gaze de Algodão (Ultra-Sheer Organza & Silk Chiffon Embroidery) é a aplicação de bordados de alta costura sobre tecidos translúcidos e de baixíssima gramatura (20 a 40 g/m²). Devido à extrema delicadeza dos fios e à transparência total da peça, não é possível utilizar entretelas permanentes comuns nem nós volumosos no avesso. O processo exige o uso de filme hidrossolúvel fino superior e inferior (ou entretela hidrossolúvel de tecido não-tecido), agulhas Microtex ultrafinas 60/8 ou 65/9, linhas nobres de seda ou poliéster 60wt e matrizes com pontos de densidade aberta (0,50 mm a 0,60 mm) e caminhos de ida e volta limpos.",
    "technicalDetails": "Gramatura do tecido: 20 a 45 g/m². Agulha: 60/8 ou 65/9 Microtex Sharp com ponta cirúrgica. Estabilização: Entretela hidrossolúvel dupla (Solvy 80 micras na base e 20 micras no topo). Densidade: 0,52 mm a 0,60 mm.",
    "construction": [
      "Tecido de musseline de seda pura, chiffon, georgette ou gaze de algodão nobre",
      "Entretela hidrossolúvel translúcida de base (Aquasol / Solvy Fabric 60 a 80 g/m²)",
      "Película hidrossolúvel ultrafina de topo para proteger as micro-fibras",
      "Agulha Microtex Schmetz 60/8 ou Organ 65/9",
      "Linha de bordado ultrafina 60wt ou seda natural de tonalidades suaves"
    ],
    "howItWorks": [
      "1. A entretela hidrossolúvel de base é fixada no bastidor com tensão uniforme de tambor.",
      "2. A musseline de seda é acomodada sobre a entretela com técnica de flutuação e fita adesiva de papel nas bordas.",
      "3. Uma película hidrossolúvel fina é colocada por cima para envolver o tecido em um sanduíche solúvel.",
      "4. A máquina borda em velocidade moderada de 550 a 650 PPM para garantir perfeita formação de laçada sem vibração.",
      "5. A matriz executa pontos leves com arremates invisíveis de micropontos (0,4 mm).",
      "6. A peça é retirada do bastidor e o excesso de plástico é destacado a seco com as mãos.",
      "7. Mergulha-se a peça em água morna com algumas gotas de sabão de coco: a entretela dissolve 100%, deixando apenas o bordado suspenso na transparência da seda."
    ],
    "mainTypes": [
      "Bordados em Musseline de Seda para Vestidos de Noiva (Flores e arabescos em véus e caudas transparentes)",
      "Monogramas em Lenços Finos de Gaze de Algodão (Acabamento de luxo para alfaiataria clássica)",
      "Bordados em Chiffon e Organza para Alta Costura (Mangas bufantes, decotes e capas transparentes)"
    ],
    "characteristics": [
      "Transparência absoluta preservada sem nenhuma entretela residual visível",
      "Avesso impecável e limpo, indistinguível da frente quando observado a distância",
      "Fluidez, caimento leve e movimento natural do tecido preservados integralmente",
      "Nicho comercial de altíssimo valor e reconhecimento nas passarelas de moda"
    ],
    "limitations": [
      "Não suporta preenchimentos maciços de tatami nem blocos pesados de ponto cheio",
      "Exige manuseio cuidadoso para não puxar os fios delicados da seda durante a montagem",
      "Requer lavagem delicada pós-bordado para dissolução total dos polímeros solúveis"
    ],
    "numberingSystem": [
      "Gramatura do Tecido: 25 a 40 g/m²",
      "Densidade da Matriz: 0,55 mm",
      "Velocidade Máxima: 600 PPM"
    ],
    "advantages": [
      "✔ Abre as portas do disputado e nobre mercado de vestidos de noiva e vestidos de festa de luxo",
      "✔ Agrega valores de cobrança exclusivos pela raridade e maestria da técnica",
      "✔ Resultados visuais etéreos que parecem pinturas flutuando no ar"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável comum, deixando restos brancos que aparecem através do tecido transparente",
      "❌ Usar agulhas grossas (75/11 ou 80/12) que deixam furos permanentes e rasgam a seda",
      "❌ Apertar o bastidor diretamente sobre a musseline, criando vincos e fios puxados irreparáveis"
    ],
    "voceSabia": "A musseline de seda era tão fina e preciosa na antiguidade que as cortesãs romanas e as rainhas egípcias a chamavam de 'vento tecido', pois um vestido inteiro podia ser dobrado e passado por dentro de um anel de ouro!",
    "curiosidadeTecnica": "A musseline de seda tem apenas 30 a 40 fios por centímetro linear; cada golpe de agulha grossa rompe até 4 filamentos de seda simultaneamente. A agulha Microtex 60/8, por ter diâmetro de apenas 0,6 mm, penetra deslizando entre as fibras sem rompê-las.",
    "dicaArtrelados": "Para bordar tecidos transparentes como musseline e organza, use entretela hidrossolúvel de tecido não-tecido (aquela que parece um paninho branco que dissolve na água): monte a entretela no bastidor e flutue a musseline por cima com fita crepe nas bordas. Após bordar, passe água morna com um cotonete: o bordado fica flutuando na transparência com um avesso de cinema!",
    "comparisonTable": {
      "headers": [
        "Especificação",
        "Tecido Plano Convencional (Tricoline)",
        "Musseline de Seda / Gaze Fina"
      ],
      "rows": [
        [
          "Transparência",
          "Opaco / Não transparente",
          "100% Translúcido e etéreo"
        ],
        [
          "Estabilizador",
          "Entretela Rasgável ou Recorte",
          "Entretela Hidrossolúvel Total (Dissolve 100%)"
        ],
        [
          "Tipo de Agulha",
          "75/11 Universal",
          "60/8 ou 65/9 Microtex Ponta Fina Aguda"
        ],
        [
          "Densidade dos Pontos",
          "0,40 mm",
          "0,52 mm a 0,60 mm (Muito Leve)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "60/8 ou 65/9 Microtex Sharp (Schmetz / Organ)",
      "stabilizer": "Entretela Hidrossolúvel de não-tecido (base) + Solvy Fino (topo)",
      "threadTension": "80 a 90 gf (superior suave) e 18 gf (bobina fina)",
      "density": "0.55 mm com compensação de repuxo de 0.20 mm"
    },
    "applications": [
      "Véus de noiva, caudas transparentes e decotes de vestidos de gala",
      "Mangas bufantes em organza e vestidos de daminhas de honra",
      "Lenços finos de seda com monogramas e iniciais personalizadas",
      "Cortinas nobres em gaze de linho e xales de festa sofisticados"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar durante a costura, alivie a tensão da linha superior para 85 gf",
      "Lave a peça em água morna corrente e seque na horizontal sobre uma toalha macia",
      "Use linha 60wt da mesma cor do tecido para criar um efeito de tom sobre tom discreto e refinado"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Entretela Hidrossolúvel",
      "Microtex e Agulhas Ponta Aguda",
      "Matéria-Prima: Seda Pura e Musseline Fina",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-090",
      "musseline",
      "gaze de algodao",
      "seda pura",
      "alta costura",
      "hidrossoluvel",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CHEVALLIER, Anne. Haute Couture Embroidery on Sheer Silk & Chiffon. Paris, 2021.",
      "PARRISH, Gail. Ultra-Light Fabric Stabilization & Water-Soluble Embroidery Chemistry. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido transparente (chiffon ou organza). Prenda entretela hidrossolúvel no bastidor e flutue o tecido por cima com fita. Borde um galho floral com pontos leves e linha 60wt. Lave em uma tigela com água morna. Veja a mágica dos pontos flutuando na transparência sem nenhuma entretela aparente!",
    "quickSummary": "Técnicas de bordado em tecidos transparentes com entretela solúvel e agulhas ultrafinas para alta costura.",
    "beginnerExplanation": "A musseline é aquele tecido de seda super fininho e transparente usado em vestidos de noiva. Como a entretela comum ficaria aparecendo feia no verso, a gente usa uma entretela especial que derrete na água: depois de bordar, você lava com água morna e sobra apenas o bordado lindo flutuando no tecido transparente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-091-marcador-optico-a-laser-para-encaixe-de-matrizes-grandes",
    "code": "M-091",
    "term": "Marcador Óptico a Laser para Encaixe de Matrizes Grandes (Crosshair Laser Positioning)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim opticus (relativo à visão) e da sigla LASER (Light Amplification by Stimulated Emission of Radiation).",
    "summary": "Dispositivo de projeção de feixe de luz em cruz (red dot / crosshair laser) instalado no cabeçote da máquina para alinhamento milimétrico e emendas perfeitas de bordados gigantes.",
    "definition": "Marcador Óptico a Laser para Encaixe de Matrizes Grandes (Optical Laser Crosshair Positioning Device) é um acessório de alinhamento óptico fixado no cabeçote ou integrado ao software da máquina bordadeira. Ele projeta uma cruz luminosa vermelha ou verde de alta intensidade diretamente sobre a superfície do tecido montado no bastidor, indicando a coordenada exata (X, Y) do ponto onde a agulha penetrará. É indispensável para a divisão e recomposição de matrizes gigantes (*multi-hooping*), encaixe contínuo de barras de toalhas e vestidos longos e rotação angular sem necessidade de riscar o tecido.",
    "technicalDetails": "Comprimento de onda do laser: 635 nm a 650 nm (vermelho) ou 520 nm (verde de alto contraste). Precisão de projeção óptica: ± 0,1 mm no plano focal do bastidor. Alimentação: 5V DC via barramento da máquina ou bateria auxiliar.",
    "construction": [
      "Diodo emissor laser de estado sólido com lente óptica geradora de cruz (*crosshair lens*)",
      "Suporte articulado de alumínio anodizado com parafusos de micro-ajuste nos eixos X e Y",
      "Chave de acionamento rápido no painel ou acoplamento eletrônico automático",
      "Lente protetora anti-poeira têxtil com tratamento antirreflexo",
      "Gabarito de calibração milimetrado para sincronização com o furo da chapa de agulha"
    ],
    "howItWorks": [
      "1. O operador aciona o feixe de laser através do botão de alinhamento óptico no painel.",
      "2. A cruz de luz é projetada sobre o tecido, marcando o centro ou os pontos de registro da matriz.",
      "3. Utilizando as teclas direcionais do painel, o operador movimenta o pantógrafo até que a cruz laser coincida perfeitamente com a marca de giz no tecido.",
      "4. Para emendas contínuas, ajusta-se a cruz sobre a marca de referência bordada na etapa anterior.",
      "5. A máquina calcula o ângulo e a rotação exata da matriz em graus decimais.",
      "6. Confirma-se a posição inicial e o laser é desligado automaticamente.",
      "7. O bordado inicia exatamente na emenda, criando uma composição contínua sem degraus visíveis."
    ],
    "mainTypes": [
      "Laser em Cruz Integrado de Fábrica (Controlado pelo sistema operacional da máquina com calibração digital)",
      "Projetor Laser Externo Articulado (Adaptável a qualquer máquina através de suporte magnético)",
      "Sistema de Câmera Óptica com Mira Digital (Leitura por inteligência visual na tela LCD colorida)"
    ],
    "characteristics": [
      "Encaixe milimétrico absoluto de matrizes divididas em múltiplos bastidores",
      "Eliminação do risco de sujar tecidos nobres com canetas e gizes de marcação pesada",
      "Agilidade extrema no setup de produção, reduzindo o tempo de preparação em 70%",
      "Visualização prévia do perímetro total do bordado através do rastreamento a laser (*trace box*)"
    ],
    "limitations": [
      "Exige calibração periódica da mira do laser com o furo real de descida da agulha",
      "Nunca olhar diretamente para a saída do feixe óptico para proteger a visão",
      "A visibilidade da cruz vermelha pode diminuir sob luz solar direta ou em tecidos vermelhos brilhantes"
    ],
    "numberingSystem": [
      "Precisão de Alinhamento: ± 0,1 mm",
      "Comprimento de Onda: 650 nm (Vermelho) / 520 nm (Verde)",
      "Tempo de Posicionamento: < 15 segundos"
    ],
    "advantages": [
      "✔ Permite bordar peças gigantescas como colchas e toalhas de banquete emendando matrizes com perfeição",
      "✔ Facilita o posicionamento exato de logotipos sobre bolsos de camisas e golas prontas",
      "✔ Agrega velocidade e profissionalismo de ponta ao dia a dia do ateliê"
    ],
    "commonErrors": [
      "❌ Utilizar o laser sem calibrar previamente a distância focal em relação à agulha ativa",
      "❌ Mexer na articulação física do laser acidentalmente durante a limpeza da máquina",
      "❌ Esquecer de confirmar o ponto zero antes de dar a partida no bordado"
    ],
    "voceSabia": "A tecnologia de miras a laser cruzadas foi desenvolvida inicialmente para sistemas de mira cirúrgica em tomógrafos hospitalares e alinhamento de asas de aviões a jato, sendo adaptada pelas maiores montadoras de máquinas de bordar do Japão e da Suíça!",
    "curiosidadeTecnica": "Ao utilizar o laser verde (520 nm), o olho humano tem uma sensibilidade visual até 5 vezes maior do que com o laser vermelho tradicional, permitindo enxergar a cruz de alinhamento com perfeita nitidez mesmo sob holofotes de 1.000 lumens em fábricas de grande porte.",
    "dicaArtrelados": "Para fazer emendas gigantes de toalha de mesa sem emenda aparente, programe duas cruzinhas simples em ponto corrido no final da primeira parte da matriz. Na segunda parte, use o marcador laser para acertar a mira exatamente em cima dessas cruzinhas: a emenda fica tão perfeita que nem com lupa alguém descobre onde ela foi dividida!",
    "comparisonTable": {
      "headers": [
        "Método de Alinhamento",
        "Tempo de Ajuste",
        "Precisão de Encaixe",
        "Marcação no Tecido"
      ],
      "rows": [
        [
          "Marcador Óptico a Laser",
          "15 segundos",
          "Milimétrica (± 0,1 mm)",
          "Zero (Luz pura / Não suja)"
        ],
        [
          "Gabarito Plástico Tradicional",
          "2 a 3 minutos",
          "Média (± 1,0 mm)",
          "Exige caneta ou giz"
        ],
        [
          "Descida Manual da Agulha",
          "1 minuto",
          "Boa (± 0,5 mm)",
          "Risco de furo acidental"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Operação pós-alinhamento na velocidade normal",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Emendas contínuas de barras de toalhas de banquete e caminhos de mesa compridos",
      "Posicionamento de nomes e brasões em peças prontas (bolsos, punhos e golas)",
      "Bordados gigantes em vestidos de festa divididos em 3 ou 4 bastidores",
      "Alinhamento de patches e emblemas sobre uniformes já confeccionados"
    ],
    "troubleshootingTips": [
      "Se a cruz do laser estiver fora do furo da agulha, faça a recalibração pelo menu de alinhamento óptico",
      "Limpe a lente de vidro do laser com um cotonete seco para remover a poeira de linha acumulada",
      "Utilize óculos de proteção adequados ao manusear lasers de alta intensidade"
    ],
    "relatedTerms": [
      "Equipamentos & Acessórios",
      "Marcação de Centro e Gabarito de Posicionamento",
      "Multi-Bandeira e Bastidor de Múltiplos Campos",
      "Pantógrafo",
      "Marca de Registro e Cruz de Posicionamento"
    ],
    "tags": [
      "m-091",
      "marcador a laser",
      "crosshair laser",
      "alinhamento optico",
      "emenda de matrizes",
      "equipamentos e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BROTHER Sewing & Embroidery Engineering. Optical Alignment & Laser Positioning Systems. Nagoya, 2021.",
      "PARRISH, Gail. Multi-Hooping Mastery, Laser Crosshairs & Seamless Re-Hooping. Cincinnati, 2022."
    ],
    "practicalExercise": "Marque um pontinho a lápis em um retalho preso ao bastidor. Ligue o feixe laser da sua máquina ou adaptador. Mova o bastidor pelas setas do painel até a cruz luminosa cobrir o pontinho com precisão. Abaixe a agulha manualmente e veja a agulha cair com perfeição exatamente no centro da cruz!",
    "quickSummary": "Luz em cruz projetada no tecido que mostra onde a agulha vai descer para alinhar e emendar bordados gigantes.",
    "beginnerExplanation": "O marcador a laser é como uma mira luminosa que projeta uma cruzinha vermelha em cima do tecido. Ele mostra com exatidão onde o bordado vai começar, facilitando muito encaixar desenhos grandes e emendar barras de toalhas compridas sem errar o lugar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-092-matriz-de-ponto-apanhado-com-fios-grossos-machine-couching-stitch",
    "code": "M-092",
    "term": "Matriz de Ponto Apanhado com Fios Grossos / Machine Couching Stitch (Cording & Yarn Attachment)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Tipos de Pontos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês coucher (deitar / assentar) e do inglês machine couching. Técnica de fixação de cordões nobres sobre a superfície do tecido.",
    "summary": "Técnica de aplicação mecânica contínua de fios grossos, cordões de lã, fitas e soutaches sobre o tecido através de zigue-zagues ou pontos decorativos de retenção.",
    "definition": "Matriz de Ponto Apanhado com Fios Grossos / Machine Couching Stitch (Computerized Cording & Soutache Couching) é a técnica de bordado computadorizado em que fios de espessura elevada (como lãs artesanais, cordões de seda, fitas de cetim ou fios metalizados trançados de 1 mm a 3 mm de diâmetro) são assentados sobre o tecido e presos por micro-pontos de zigue-zague ou pontos cruzados executados por uma linha de bordado fina e transparente (monofilamento) ou contrastante. Utiliza-se um calcador especial com guia central perfurada (*couching foot*) que conduz o cordão exatamente sob o trajeto da agulha.",
    "technicalDetails": "Diâmetro do cordão apanhado: 1,0 mm a 3,5 mm. Largura do zigue-zague de retenção: 1,5 mm a 2,2 mm. Passo do ponto de fixação: 2,0 mm a 3,0 mm. Tensão da linha de retenção: 90 a 100 gf.",
    "construction": [
      "Calcador especial de ponto apanhado com orifício guia central ou dispositivo giratório de cordão (*cording device*)",
      "Guia auxiliar de linha superior presa à carcaça da máquina para alimentar o cordão grosso sem atrito",
      "Cordão de lã nobre, fio de chenille, soutache ou cordão metálico trançado",
      "Linha de retenção fina (poliamida monofilamento 100wt ou poliéster fino 60wt)",
      "Tecido firme ou entretela de recorte adequada à peça"
    ],
    "howItWorks": [
      "1. O cordão grosso é passado pelo guia aéreo e enfiado pelo buraquinho central do calcador especial de couching.",
      "2. A linha fina de costura é enfiada na agulha normal da máquina bordadeira.",
      "3. A matriz digitalizada em linhas curvas suaves guia o movimento do pantógrafo.",
      "4. À medida que o bastidor se desloca, o cordão grosso é puxado suavemente pelo calcador e deitado sobre o tecido.",
      "5. A agulha executa micro-pontos de zigue-zague de um lado para o outro do cordão, prendendo-o firmemente.",
      "6. A velocidade da máquina é calibrada em 500 a 650 PPM para permitir a alimentação suave do cordão.",
      "7. O resultado é um bordado em relevo linear espetacular com textura de lã ou cordão rústico artesanal."
    ],
    "mainTypes": [
      "Ponto Apanhado com Fio de Lã e Chenille (Para casacos de inverno, almofadas rústicas e mantas de bebê)",
      "Ponto Apanhado com Soutache e Cordão de Seda (Para alta costura, vestidos de gala e fardamentos nobres)",
      "Ponto Apanhado Metálico de Fita Dourada (Para paramentos litúrgicos, brasões e trajes de época)"
    ],
    "characteristics": [
      "Textura tátil exuberante e relevo linear contínuo impossível de se obter com linhas comuns",
      "Economia maciça de pontos na matriz (uma única linha de cordão substitui colunas largas de cetim)",
      "Rapidez incomparável na execução de desenhos grandes e arabescos contínuos",
      "Toque rústico, artesanal e com altíssimo apelo visual de alta costura"
    ],
    "limitations": [
      "Exige calcador específico compatível com a espessura do cordão utilizado",
      "A matriz deve ser digitalizada apenas com curvas suaves (evitar cantos retos agudos de 90°)",
      "Requer alimentação contínua do novelo de cordão sem nós nem emaranhados externos"
    ],
    "numberingSystem": [
      "Diâmetro do Cordão: 1,5 mm a 3,0 mm",
      "Passo do Zigue-zague: 2,5 mm",
      "Velocidade Recomendada: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Agrega um diferencial exclusivo de artesanato de luxo ao portfólio do ateliê",
      "✔ Reduz em até 80% o número de pontos de matrizes florais e arabescos",
      "✔ Permite bordar com lãs e fios grossos que jamais passariam pelo olho de uma agulha"
    ],
    "commonErrors": [
      "❌ Digitalizar curvas muito fechadas, fazendo o calcador dobrar e engasgar o cordão grosso",
      "❌ Usar linha de retenção muito grossa, escondendo o brilho e a beleza natural do cordão",
      "❌ Deixar o novelo de lã preso no suporte, esticando o cordão e enrugando todo o tecido"
    ],
    "voceSabia": "A técnica de ponto apanhado (couching) foi a técnica principal utilizada para confeccionar a famosa 'Tapeçaria de Bayeux' no século XI na França, uma obra-prima de 70 metros de comprimento bordada com fios grossos de lã que sobreviveu intacta por quase 1.000 anos!",
    "curiosidadeTecnica": "Como o cordão grosso não passa pelo olho da agulha nem pela lançadeira, ele sofre zero atrito mecânico durante a costura; isso permite utilizar fios com brilho de vidro, lantejoulas embutidas e fibras sensíveis ao atrito.",
    "dicaArtrelados": "Ao bordar ponto apanhado (couching) com cordão de lã colorido, use linha transparente invisível (monofilamento de poliamida 100wt) na agulha superior: a máquina vai prender a lã no tecido de forma totalmente invisível, e o bordado vai parecer ter sido tricotado à mão diretamente sobre a peça!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Ponto Cheio Tradicional (Satin)",
        "Ponto Apanhado com Cordão (Couching)"
      ],
      "rows": [
        [
          "Número de Pontos",
          "Muito Alto (Ex: 15.000 pontos)",
          "Ultra Baixo (Ex: 1.800 pontos)"
        ],
        [
          "Tempo de Execução",
          "20 minutos",
          "3 minutos (Ultra Rápido)"
        ],
        [
          "Espessura do Relevo",
          "0,5 mm a 1,0 mm",
          "2,0 mm a 3,5 mm (Relevo volumoso real)"
        ],
        [
          "Material do Relevo",
          "Linha 40wt de poliéster",
          "Cordão grosso de lã, seda ou soutache"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "75/11 ou 80/12 Universal",
      "stabilizer": "Entretela de Recorte Média (60 a 80 g/m²)",
      "threadTension": "95 gf (linha de retenção superior) e 22 gf (bobina)",
      "density": "Passo de zigue-zague aberto de 2.5 mm com largura de 1.8 mm"
    },
    "applications": [
      "Casacos de lã, jaquetas de inverno e xales com arabescos rústicos",
      "Almofadas decorativas com motivos botânicos e letras em relevo de cordão",
      "Vestidos de noiva com aplicações de soutache de seda e pérolas",
      "Paramentos religiosos e trajes solenes com cordões metálicos dourados"
    ],
    "troubleshootingTips": [
      "Se o zigue-zague escapar do cordão nas curvas, reduza a velocidade da máquina para 500 PPM",
      "Certifique-se de que o cordão deslize livremente pelo orifício do calcador sem agarrar",
      "Dê um nó manual nas pontinhas do cordão no início e fim do bordado e puxe para o avesso"
    ],
    "relatedTerms": [
      "Tipos de Pontos",
      "Monofilamento de Fixação e Sutache",
      "Linhas & Fios",
      "Ponto Festonê",
      "Calcador de Bordado"
    ],
    "tags": [
      "m-092",
      "ponto apanhado",
      "machine couching",
      "cordao grosso",
      "soutache",
      "la no bordado",
      "tipos de pontos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CLARK, Fiona. Historic and Modern Machine Couching & Cording Techniques. Londres, 2021.",
      "PARRISH, Gail. Specialty Cord Attachment, Soutache Digitizing & Couching Mechanics. Cincinnati, 2022."
    ],
    "practicalExercise": "Instale o calcador de couching na máquina e passe um cordão de lã de 2 mm pelo furo guia. Digitalize uma espiral simples em ponto zigue-zague largo e coloque linha transparente na agulha. Borde a espiral a 550 PPM. Veja que efeito rústico e tridimensional incrível surge em poucos segundos!",
    "quickSummary": "Técnica que costura cordões de lã, fitas e soutaches grossos sobre o tecido usando uma linha fininha.",
    "beginnerExplanation": "O ponto apanhado é um jeito esperto de bordar com fios bem grossos (como cordão de lã ou fita) que não cabem no buraco da agulha: a máquina vai deitando o cordão no tecido e dando pontinhos invisíveis por cima para segurar tudo no lugar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-093-manutencao-de-sensores-de-rotacao-de-linha-encoder-wheels",
    "code": "M-093",
    "term": "Manutenção de Sensores de Rotação de Linha (Encoder Wheels & Optical Sensors)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim sensus (percepção) e do inglês encoder wheel (roda codificadora de pulsos ópticos).",
    "summary": "Limpeza de discos ranhurados, desobstrução de fototransistores infravermelhos e calibração de sensibilidade do detector de quebra de linha superior.",
    "definition": "Manutenção de Sensores de Rotação de Linha (Optical Thread Break Sensor & Encoder Wheel Servicing) é a rotina de conservação dos módulos optoeletrônicos instalados na parte superior de cada cabeçote de bordado. A linha superior passa abraçando uma polia emborrachada solidária a um disco com ranhuras microscópicas (encoder óptico); ao passar, a linha faz o disco girar entre um emissor de luz infravermelha e um fototransistor receptor. Se a linha quebrar ou acabar, a polia para de girar, gerando a interrupção dos pulsos elétricos que comanda a parada imediata do motor da máquina.",
    "technicalDetails": "Resolução do encoder: 12 a 24 pulsos por rotação completa. Comprimento de onda do LED infravermelho: 940 nm. Tensão de sinal lógico: 0V (bloqueado) a 5V DC (feixe aberto). Faixa de detecção: 3 a 5 pontos sem rotação para disparo do alarme.",
    "construction": [
      "Roldana guia de rotação suave montada sobre micro-rolamento blindado de aço inoxidável",
      "Disco codificador circular de plástico fotogravado com fendas radiais de precisão",
      "Sensor óptico em formato de garfo (Photo-Interrupter) com LED emissor infravermelho e fotodiodo",
      "Cabo plano de comunicação flexível (Flat Cable) conectado à placa de circuito do cabeçote",
      "Pincel antiestático de cerdas naturais e soprador de ar comprimido isento de umidade"
    ],
    "howItWorks": [
      "1. A linha superior é passada pela ranhura da polia do sensor com tensão suficiente para gerar atrito de giro.",
      "2. Conforme os pontos são formados, o movimento de puxar linha faz a polia e o disco ranhurado girarem continuamente.",
      "3. O feixe infravermelho passa pelas fendas do disco, enviando um trem de pulsos de onda quadrada à CPU.",
      "4. Se a linha arrebentar, o disco para de girar imediatamente.",
      "5. A CPU detecta a ausência de pulsos após 3 ciclos de descida de agulha e aciona o freio do motor principal.",
      "6. A manutenção consiste em remover periodicamente a penugem de linha acumulada na fenda óptica do sensor.",
      "7. A limpeza previne falsos alarmes de quebra (máquina parando sem linha quebrada) ou falhas na detecção real."
    ],
    "mainTypes": [
      "Sensores Ópticos de Encoder Rotativo (Os mais precisos e utilizados em máquinas industriais modernas)",
      "Sensores Mecânicos de Mola de Contato Elétrico (Sistemas de gangorra com chave microswitch)",
      "Sensores Piezoelétricos de Vibração (Detectam a pulsação física da linha de bordado sob alta velocidade)"
    ],
    "characteristics": [
      "Parada instantânea da máquina no exato ponto da quebra, evitando perda de dezenas de pontos em branco",
      "Eliminação total de falsos disparos provocados por acúmulo de poeira têxtil nas fendas ópticas",
      "Rotação livre e ultra-macia que não adiciona resistência nem altera a tensão do fio",
      "Operação 100% confiável e silenciosa para produções industriais ininterruptas"
    ],
    "limitations": [
      "Nunca passar solventes agressivos ou álcool isopropílico no disco plástico do encoder para não torná-lo opaco",
      "Não utilizar ar comprimido com óleo ou água que possam manchar as lentes infravermelhas",
      "Exige passar a linha com a volta completa correta na roldana para garantir o giro mecânico"
    ],
    "numberingSystem": [
      "Tensão de Trabalho: 5V DC",
      "Sensibilidade de Parada: 3 a 5 pontos perdidos",
      "Frequência de Limpeza: A cada 100 horas de produção"
    ],
    "advantages": [
      "✔ Evita que a máquina continue bordando 'no vazio' sem linha, economizando tempo precioso de retoque",
      "✔ Acaba com a irritação de ter que reiniciar a máquina por falsos alarmes de quebra de linha",
      "✔ Mantém os cabeçotes operando em sincronia total em máquinas multicabeças"
    ],
    "commonErrors": [
      "❌ Deixar acumular bolo de fiapos no sensor, cegando o feixe óptico e fazendo a máquina apitar direto",
      "❌ Passar a linha por fora da roldana do encoder, desativando completamente a proteção de quebra",
      "❌ Lubrificar a polia do sensor com óleo comum, colando fiapos e travando o micro-rolamento"
    ],
    "voceSabia": "Nas primeiras máquinas de bordar automáticas do século XX, a detecção de quebra era feita por pequenas alavancas de ferro pesadas que caíam sobre uma barra de cobre eletrizada para dar um curto-circuito de segurança e desligar o motor!",
    "curiosidadeTecnica": "O LED infravermelho do sensor emite luz invisível ao olho humano no comprimento de onda de 940 nm. Se você apontar a câmera do seu celular para o sensor com a máquina ligada, verá a luz piscando em tom arroxeado na tela do telefone!",
    "dicaArtrelados": "Sua máquina está apitando 'Quebra de Linha' mesmo quando a linha está perfeitamente inteira e costurando? Pegue um pincel macio e seco (ou passe o canudo de uma bombinha de ar) no pequeno buraquinho por onde passa a linha na parte de cima do cabeçote: 99% das vezes é apenas um fiapinho de poeira tampando o sensor de luz!",
    "comparisonTable": {
      "headers": [
        "Estado do Sensor",
        "Sintoma no Painel",
        "Comportamento da Máquina",
        "Causa Mais Provável"
      ],
      "rows": [
        [
          "Sensor Limpo e Calibrado",
          "Luz verde / Normal",
          "Borda contínuo e para só quando quebra",
          "Operação perfeita"
        ],
        [
          "Fenda Óptica com Fiapos",
          "Alarme 'Thread Break' falso",
          "Para a cada 20 segundos sem quebra",
          "Poeira bloqueando o LED"
        ],
        [
          "Linha Fora da Roldana",
          "Sem alarme",
          "Linha quebra e máquina continua no vazio",
          "Passagem incorreta do fio"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-manutenção: Operação estável até 1.200 PPM",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção eletrônica)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Manutenção preventiva de rotina em cabeçotes de máquinas industriais e semiprofissionais",
      "Correção de paradas intermitentes fantasmas em bordados de alta velocidade",
      "Calibração da sensibilidade de detecção de linha inferior e superior",
      "Revisão periódica de ateliês para máxima eficiência de produção"
    ],
    "troubleshootingTips": [
      "Se a máquina continuar acusando erro após a limpeza, verifique o ajuste de sensibilidade no painel (aumente de 3 para 5 pontos)",
      "Verifique se o anel de borracha da roldana não está ressecado ou gasto",
      "Use um jato suave de ar comprimido seco para desobstruir as cavidades profundas do sensor"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Manutenção Preventiva",
      "Mapeamento de Tensão Dinâmica e Sensor Óptico de Fio",
      "Mola Estica-Fio e Mola de Compensação",
      "Linhas & Fios"
    ],
    "tags": [
      "m-093",
      "sensores de linha",
      "encoder wheel",
      "quebra de linha",
      "alarme falso",
      "manutencao preventiva",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HAPPY Embroidery Machines Tech Division. Optical Thread Break Sensors & Encoder Diagnostics. Tóquio, 2021.",
      "PARRISH, Gail. Modern Embroidery Electronics: Optical Sensors, Encoders & Diagnostic Flowcharts. Cincinnati, 2022."
    ],
    "practicalExercise": "Localize o sensor de linha superior no cabeçote da sua máquina. Passe a linha e observe a pequena rodinha girar enquanto puxa o fio com a mão. Pegue um pincel de pintura macio e limpe ao redor da fenda. Veja como a detecção de quebra fica super rápida e precisa!",
    "quickSummary": "Limpeza e ajuste das rodinhas e sensores de luz que avisam a máquina quando a linha arrebenta.",
    "beginnerExplanation": "O sensor de linha é como um olhinho eletrônico que fica vigiando a linha girar na rodinha. Se a linha quebra, a rodinha para e a máquina breca na hora. Limpar a poeirinha desse sensor evita que a máquina fique parando à toa achando que a linha quebrou!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-094-manta-r1-resinada-para-patchwork-embutido-e-quilt-no-bastidor",
    "code": "M-094",
    "term": "Manta R1 Resinada para Patchwork Embutido & Quilt no Bastidor (Fusible Fleece R1 Batting)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego manthe (cobertura) e R1 (Resinada em 1 Face / Unilateral).",
    "summary": "Manta compactada de poliéster com adesivo termocolante em apenas um dos lados, ideal para estruturar peças sem perder a maciez do forro.",
    "definition": "Manta R1 Resinada (Single-Sided Fusible Polyester Fleece) é uma manta não-tecida de média densidade (geralmente entre 100 e 150 g/m²) composta por microfibras de poliéster calandradas, possuindo uma face tratada com micro-pontos de resina termoplástica de poliamida ativada por ferro quente. Ao ser passada a ferro sobre o verso do tecido principal, ela adere de forma permanente, criando uma base estruturada, macia e estável para bordados de quilt no bastidor, blocos de patchwork embutido (*in-the-hoop*) e confecção de carteiras, porta-óculos e capas protetoras sem deixar o forro interno grudado.",
    "technicalDetails": "Composição: 100% Poliéster virgem calandrado. Gramatura: 100 a 150 g/m². Resina adesiva: Poliamida unilateral termofusível com ativação a 130°C - 145°C. Espessura: 2,5 mm a 4,0 mm.",
    "construction": [
      "Manta não-tecida calandrada com toque suave e estrutura compacta",
      "Face superior lisa com micro-pontos de resina termocolante brilhante",
      "Face inferior fosca e macia sem resina (permite soltura natural do forro)",
      "Tecido principal (tricoline de algodão, jeans leve ou sarja)",
      "Ferro de passar a seco em temperatura média (posição lã/algodão) sem vapor"
    ],
    "howItWorks": [
      "1. Corta-se a Manta R1 na medida desejada e posiciona-se a face resinada áspera contra o avesso do tecido principal.",
      "2. Passa-se o ferro a seco (sem vapor) por 10 a 12 segundos exercendo pressão firme para ativar a resina.",
      "3. O tecido e a manta tornam-se uma peça única perfeitamente estruturada e sem rugas.",
      "4. O conjunto é fixado no bastidor da bordadeira sobre uma entretela leve ou técnica de flutuação.",
      "5. A máquina borda o desenho de quilt, aplicação ou relevo com facilidade, sem esticar o tecido.",
      "6. No final do projeto In The Hoop, o tecido de forro é costurado por baixo sem grudar na manta.",
      "7. A peça é desvirada: a face externa fica armada e linda, enquanto o interior fica livre e macio."
    ],
    "mainTypes": [
      "Manta R1 100g Leve (Para porta-moedas, carteirinhas finas e blocos de colcha)",
      "Manta R1 150g Média (Para nécessaires, capas de caderno e bolsas médias)",
      "Manta R1 com Fibras de Bambu ou Algodão (Para peças de alta respirabilidade e toque nobre)"
    ],
    "characteristics": [
      "Aderência térmica perfeita que impede a formação de bolhas de ar e rugas durante o bordado",
      "Estrutura firme e encorpada sem deixar a peça rígida como papelão",
      "Versatilidade para projetos In The Hoop onde o forro interno precisa ficar solto",
      "Lavável em máquina com excelente estabilidade dimensional sem esfarelar"
    ],
    "limitations": [
      "Identificar corretamente a face com cola antes de encostar o ferro para não sujar a base",
      "Não utilizar ferro com vapor excessivo durante a colagem inicial",
      "Não recomendável para peças que exigem colagem nos dois lados simultaneamente (onde se usa R2)"
    ],
    "numberingSystem": [
      "Gramatura Padrão: 100 g/m² e 150 g/m²",
      "Temperatura de Colagem: 135°C a 145°C",
      "Tempo de Pressão: 10 a 15 segundos"
    ],
    "advantages": [
      "✔ Facilita imensamente a confecção de nécessaires e estojos 100% feitos dentro do bastidor (ITH)",
      "✔ Garante que o tecido nunca fique solto ou franzido durante a costura de matelassê",
      "✔ Agrega toque profissional e acolchoado de alta qualidade a peças artesanais"
    ],
    "commonErrors": [
      "❌ Passar o ferro do lado da resina sem tecido de proteção, colando a manta na base do ferro",
      "❌ Arrastar o ferro para lá e para cá em vez de prensar estático, criando pregas e dobras",
      "❌ Usar temperatura fraca demais no ferro, fazendo a cola se soltar durante o bordado"
    ],
    "voceSabia": "O termo 'R1' foi criado originalmente na indústria têxtil brasileira para diferenciar mantas com uma camada de resina adesiva daquelas com duas camadas ('R2'), tornando-se um padrão adotado por artesãs de toda a América Latina!",
    "curiosidadeTecnica": "A resina de poliamida utilizada na Manta R1 é composta por micro-esferas termofusíveis de apenas 80 micras. Quando o calor do ferro atinge 140°C, essas esferas derretem e penetram nas micro-ranhuras das fibras de algodão do tecido, criando uma adesão mecânica inquebrável após o resfriamento.",
    "dicaArtrelados": "Para nunca errar a face com cola da sua Manta R1, passe os dedos nas duas superfícies: a face lisa e macia é o lado sem cola; a face que tiver um brilhinho discreto e parecer uma lixa fininha é o lado da resina! Coloque esse lado áspero virado para o avesso do seu tecido e passe o ferro bem quente!",
    "comparisonTable": {
      "headers": [
        "Tipo de Manta",
        "Faces com Resina",
        "Melhor Aplicação",
        "Comportamento do Forro"
      ],
      "rows": [
        [
          "Manta R1 Resinada",
          "1 Face (Unilateral)",
          "Peças com forro solto / Nécessaires ITH",
          "Forro permanece livre e solto"
        ],
        [
          "Manta R2 Resinada",
          "2 Faces (Bilateral)",
          "Bolsas duras / Peças coladas dos dois lados",
          "Forro e tecido principal colam juntos"
        ],
        [
          "Manta Sem Resina",
          "Zero Resina",
          "Colchas soltas e artesanato tradicional",
          "Exige alfinetes ou cola spray"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 ou 80/12 SES (Ponta Bola Leve)",
      "stabilizer": "Manta R1 colada ao tecido + Entretela rasgável de apoio",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.42 mm a 0.45 mm com compensação de 0.40 mm"
    },
    "applications": [
      "Nécessaires, bolsas, estojos e carteiras 100% montadas no bastidor (In The Hoop)",
      "Porta-óculos, capinhas de celular e bolsas térmicas acolchoadas",
      "Blocos de colcha e painéis de patchwork embutido no bastidor",
      "Jogos americanos estruturados e descansos de pratos de luxo"
    ],
    "troubleshootingTips": [
      "Se a manta descolar do tecido nas bordas, repasse o ferro quente por mais 5 segundos pressionando firme",
      "Use uma folha de teflon ou papel manteiga sobre o tecido para não queimar o tecido ao colar a manta",
      "Espere o tecido esfriar totalmente após a passagem do ferro antes de montar no bastidor"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Manta Acrílica R1 e R2",
      "Manta Siliconada & Estruturação em Matelassê Tridimensional",
      "Matriz ITH - In The Hoop",
      "Termocolante para Apliques"
    ],
    "tags": [
      "m-094",
      "manta r1",
      "resinada",
      "patchwork",
      "in the hoop",
      "necessaires",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SOARES, Luciana. Estruturadores e Mantas na Costura Criativa e Bordado Computadorizado. São Paulo, 2021.",
      "PARRISH, Gail. Fusible Interfacings & Batting Structures in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um quadrado de tecido tricoline e cole a face resinada da Manta R1 com o ferro a seco. Coloque no bastidor e borde um pequeno matelassê em ondas com um nome no centro. Sinta como o tecido ficou firme, fofo e acolchoado com facilidade extrema!",
    "quickSummary": "Manta de poliéster com cola em um dos lados para estruturar tecidos e fazer nécessaires no bastidor.",
    "beginnerExplanation": "A Manta R1 é aquela manta fofinha que tem uma colinha brilhante de um lado só. Você passa o ferro quente e ela gruda no verso do tecido, deixando ele acolchoado e firminho para bordar bolsas e carteiras lindas sem enrolar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-095-matriz-com-efeito-esculpido-em-baixo-relevo-carving-stamp",
    "code": "M-095",
    "term": "Matriz com Efeito Esculpido em Baixo Relevo / Carving Stamp & Pattern Fill",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês carving (entalhe / escultura em madeira) e stamp (carimbo / estampa).",
    "summary": "Técnica de programação que insere padrões geométricos, arabescos e desenhos em baixo relevo dentro de áreas maciças de tatami sem mudar de cor e sem cortar a linha.",
    "definition": "Matriz com Efeito Esculpido em Baixo Relevo (Carving Stamp & Embossed Pattern Fill Digitizing) é a técnica de digitalização avançada que altera estrategicamente o padrão de penetração da agulha no interior de um preenchimento tatami maciço. Ao definir linhas de vetor como um 'carimbo' (*carving stamp*), o software programa as descidas da agulha para formarem sulcos milimétricos alinhados; quando a luz incide sobre o bordado, as áreas afundadas criam sombras ópticas que revelam desenhos florais, brasões, texturas de couro de réptil ou monogramas como uma escultura em baixo relevo na mesma cor de linha.",
    "technicalDetails": "Densidade do tatami base: 0,38 mm a 0,42 mm. Comprimento de ponto do tatami: 4,0 mm a 4,5 mm. Largura do sulco de relevo: 0,8 mm a 1,5 mm. Ângulo de incidência de luz recomendado: 45° em relação à textura.",
    "construction": [
      "Software profissional de digitalização com ferramenta de Carving Stamp ou Pattern Fill",
      "Objeto de preenchimento complexo em ponto tatami uniforme",
      "Vetores secundários definidos como 'estampa de entalhe' (desenhos em linhas finas)",
      "Linha de poliéster ou raiom com alto brilho acetinado para maximizar o contraste de sombra",
      "Tecido firme ou entretela de recorte para suportar a densidade contínua do tatami"
    ],
    "howItWorks": [
      "1. O programador cria uma área ampla de preenchimento em ponto tatami regular.",
      "2. Desenha-se o motivo decorativo (flores, curvas ou logotipo) em linhas vetoriais sobre o tatami.",
      "3. Aplica-se a ferramenta de 'Carimbo de Escultura' (*Carving Stamp*) sobre os vetores.",
      "4. O software recalcula as laçadas do tatami, alinhando as descidas da agulha exatamente sobre o desenho.",
      "5. A máquina borda o objeto de forma contínua e rápida como um único bloco de cor sem trocas de carretel.",
      "6. Os pontos afundados criam um contraste dramático de luz e sombra com as partes lisas.",
      "7. O resultado é um efeito visual sofisticado de alto luxo, similar a um tecido adamascado ou couro entalhado."
    ],
    "mainTypes": [
      "Textura Adamascada e Floral (Arabescos clássicos esculpidos no fundo de brasões)",
      "Textura Geométrica e Favo de Mel (Efeitos esportivos modernos de fibra de carbono em logotipos)",
      "Monogramas em Marca d'Água (Iniciais nobres gravadas em baixo relevo no fundo de almofadas)"
    ],
    "characteristics": [
      "Efeito visual de altíssimo requinte e elegância aristocrática com zero custos adicionais de linha",
      "Execução ultrarrápida na máquina (borda tudo de uma vez só sem nenhuma troca de cor)",
      "Superfície plana e lisa ao toque que não enrosca nem desfia no uso diário",
      "Resistência infinita a lavagens e atrito mecânico por ser um tatami maciço"
    ],
    "limitations": [
      "Exige áreas relativamente amplas de tatami para que o desenho esculpido seja bem visível",
      "O efeito depende da iluminação ambiente: linhas muito foscas ou escuras reduzem o contraste",
      "Não se aplica a pontos cheios estreitos com menos de 8 mm de largura"
    ],
    "numberingSystem": [
      "Densidade da Base: 0,40 mm",
      "Comprimento de Ponto: 4,2 mm",
      "Profundidade Visual: 100% por contraste de luz"
    ],
    "advantages": [
      "✔ Permite criar bordados de luxo para marcas refinadas sem aumentar o tempo de produção",
      "✔ Agrega um visual de estamparia nobre e jacquard computadorizado às peças bordadas",
      "✔ Surpreende os clientes com um detalhamento artístico que parece impossível de fazer na máquina"
    ],
    "commonErrors": [
      "❌ Usar desenhos com detalhes minúsculos demais no carimbo, tornando os sulcos imperceptíveis",
      "❌ Usar linha totalmente fosca sem brilho, diminuindo o efeito de sombra e relevo óptico",
      "❌ Digitalizar o tatami com densidade muito aberta (> 0,55 mm), fazendo o desenho sumir"
    ],
    "voceSabia": "A técnica de esculpir padrões no tatami foi inspirada nas técnicas de tecelagem medieval de seda da cidade de Damasco na Síria (daí a palavra 'Adamascado'), onde tecelões criavam padrões florais apenas invertendo a direção do brilho da seda na mesma cor!",
    "curiosidadeTecnica": "O olho humano enxerga o efeito de baixo relevo no Carving Stamp não porque há menos linha no sulco, mas porque a agulha fura em linha contínua, forçando as laçadas superiores a se inclinarem em um ângulo de 35°, refletindo a luz para longe da visão do observador.",
    "dicaArtrelados": "Ao usar o efeito Carving Stamp (baixo relevo) no seu programa, escolha uma linha de bordado bem brilhante (como raiom ou poliéster brilhante) em tons metálicos, pérola, dourado ou prata: a luz bate nas ranhuras e o desenho parece ter sido gravado a laser com um brilho deslumbrante!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Preenchimento Tatami Liso Comum",
        "Tatami com Efeito Esculpido (Carving Stamp)"
      ],
      "rows": [
        [
          "Aparência Visual",
          "Superfície uniforme e plana",
          "Desenhos e texturas esculpidas em baixo relevo"
        ],
        [
          "Trocas de Cor",
          "1 cor",
          "1 cor (Mesma velocidade e sem cortes)"
        ],
        [
          "Toque Tátil",
          "Liso",
          "Liso com micro-sulcos acetinados"
        ],
        [
          "Valor Agregado",
          "Padrão comercial comum",
          "Alta sofisticação / Padrão de luxo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 Universal ou Microtex",
      "stabilizer": "Entretela de Recorte Média (60 a 80 g/m²)",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com comprimento de ponto de 4.0 mm"
    },
    "applications": [
      "Fundos de brasões heráldicos e escudos de clubes esportivos de luxo",
      "Almofadas nobres em veludo ou cetim com efeito de tecido adamascado",
      "Logotipos corporativos com texturas de fibra de carbono ou couro estilizado",
      "Toalhas de banquete e caminhos de mesa clássicos monocromáticos"
    ],
    "troubleshootingTips": [
      "Se o efeito esculpido ficar pouco visível, gire o ângulo do tatami em 45° no software",
      "Aumente ligeiramente a densidade do tatami base para 0,38 mm para acentuar a profundidade",
      "Utilize linhas de alta qualidade com acabamento trilobal de alto brilho"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Mosaico de Pontos e Pontos Programados",
      "Ponto Tatami",
      "Densidade de Pontos",
      "Compensação de Repuxo"
    ],
    "tags": [
      "m-095",
      "carving stamp",
      "baixo relevo",
      "efeito esculpido",
      "pattern fill",
      "tatami decorativo",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM Software International. Carving Stamps & User-Defined Motif Fills. Sydney, 2021.",
      "PARRISH, Gail. Creative Pattern Fills, Optical Textures & Embossing in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie um quadrado de 8x8 cm em ponto tatami no seu programa. Desenhe uma florzinha simples em linhas e converta-a em 'Carving Stamp' dentro do quadrado. Borde com linha pérola ou dourada em tecido preto. Observe como a flor aparece esculpida na luz sem você ter colocado nenhuma cor diferente!",
    "quickSummary": "Criação de desenhos entalhados em baixo relevo dentro de fundos maciços usando a mesma cor de linha.",
    "beginnerExplanation": "O efeito esculpido é como carimbar um desenho dentro do bordado: a máquina borda um fundo liso e faz os pontinhos afundarem exatamente onde você desenhou, criando desenhos lindos com sombra e brilho sem precisar trocar a cor da linha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-096-modulo-de-troca-de-bobina-rapida-e-caixas-de-bobina-jumbo",
    "code": "M-096",
    "term": "Módulo de Troca de Bobina Rápida & Caixas de Bobina Jumbo (Jumbo Rotary Hooks)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês jumbo (gigante / tamanho extra-grande) e do latim rotare (girar em círculo).",
    "summary": "Sistemas de lançadeiras rotativas de grande capacidade (tamanho M ou Jumbo) que armazenam até 2,5 vezes mais linha inferior do que as caixas de bobina convencionais tipo L.",
    "definition": "Módulo de Troca de Bobina Rápida & Caixas de Bobina Jumbo (Jumbo Rotary Hooks & High-Capacity Bobbin Systems) é o conjunto mecânico de lançadeiras rotativas sobredimensionadas projetadas para alojar bobinas tamanho M (diâmetro de 25,4 mm) ou Jumbo (diâmetro de 28 mm a 32 mm), em comparação com as bobinas industriais padrão tamanho L (21,2 mm). Essas lançadeiras de alta litragem comportam de 130 a 160 metros de linha de bobina por carga (contra 60 a 70 metros da bobina comum), permitindo que máquinas industriais e multicabeças bordem produções massivas contínuas (como colchas, cortinas e jaquetas) com redução de mais de 60% nas paradas para troca de carretel inferior.",
    "technicalDetails": "Diâmetro da bobina Jumbo: 25,4 mm a 30,0 mm (Tamanho M / Jumbo). Capacidade de linha: 130 a 160 metros (fio 60wt / 70dtex). Torque de giro equilibrado: mola compensadora interna de teflon. Velocidade máxima compatível: até 1.000 PPM.",
    "construction": [
      "Lançadeira rotativa sobredimensionada em aço cromo temperado retificado",
      "Caixa de bobina tipo M em aço especial com mola de tensão de lâmina graduada",
      "Bobina de alumínio furada balanceada dinamicamente ou bobina plástica descartável pré-bobinada",
      "Mola anti-giro livre de teflon no fundo da cápsula para evitar laçadas frouxas na desaceleração",
      "Sistema de lubrificação automática por micro-mecha de feltro ou gotejamento pressurizado"
    ],
    "howItWorks": [
      "1. A bobina Jumbo com até 160 metros de linha de poliéster é instalada na caixa sobredimensionada.",
      "2. A tensão da linha é calibrada com tensiômetro Towa para 22 a 25 gramas-força (gf).",
      "3. A cápsula é travada no centro da lançadeira rotativa de grande diâmetro com clique sonoro audível.",
      "4. A máquina opera continuamente em alta velocidade (800 a 1.000 PPM) formando laçadas amplas e perfeitas.",
      "5. A mola interna controla a inércia da bobina pesada durante paradas e frenagens bruscas do pantógrafo.",
      "6. A quantidade de paradas de produção por turno de 8 horas cai de 15 paradas para apenas 5 paradas.",
      "7. A produção diária do ateliê aumenta expressivamente com ganho real de lucratividade por máquina."
    ],
    "mainTypes": [
      "Lançadeiras Jumbo para Máquinas Monocabeça e Tubulares (Para produção contínua de jaquetas e moletons)",
      "Lançadeiras Jumbo para Máquinas de Matelassê e Quilt Contínuo (Para bordados em rolos de tecido de 2,5 metros)",
      "Sistemas de Gaveta com Troca Automática de Bobina (Robôs que substituem a bobina gasta sem operador)"
    ],
    "characteristics": [
      "Autonomia de costura contínua até 2,5 vezes superior às máquinas comuns",
      "Redução drástica do tempo ocioso de operador em chão de fábrica industrial",
      "Tensão inferior ultra-constante e homogênea do início ao fim da bobina",
      "Construção mecânica reforçada de alta durabilidade para regime severo de 24 horas"
    ],
    "limitations": [
      "Exige que a máquina tenha sido projetada de fábrica com lançadeira tamanho M (não cabe em máquinas tamanho L)",
      "Bobinas maiores têm maior massa e inércia, exigindo caixas com mola anti-giro em perfeito estado",
      "Custo inicial de reposição de peças ligeiramente superior ao padrão convencional"
    ],
    "numberingSystem": [
      "Padrão Industrial Convencional: Tamanho L (21,2 mm)",
      "Padrão Jumbo / Alta Capacidade: Tamanho M (25,4 mm a 30,0 mm)",
      "Metragem de Linha: 130 a 160 metros"
    ],
    "advantages": [
      "✔ Aumenta a eficiência global de produção (OEE) do ateliê em mais de 18%",
      "✔ Evita paradas no meio de desenhos gigantescos como colchas, costas de jaquetas e painéis",
      "✔ Diminui o estresse do operador em ter que vigiar e encher bobinas a cada 20 minutos"
    ],
    "commonErrors": [
      "❌ Tentar forçar uma bobina tamanho M dentro de uma lançadeira tamanho L comum",
      "❌ Retirar a molazinha metálica do fundo da caixa de bobina, deixando a bobina pesada girar solta",
      "❌ Usar linha de bobina de má qualidade com nós e fiapos que travam a lançadeira grande"
    ],
    "voceSabia": "As lançadeiras Jumbo foram criadas originalmente para as máquinas de bordar os paraquedas gigantes dos ônibus espaciais da NASA e as velas dos barcos da Copa América, onde uma costura de 50 metros não podia ter nenhuma interrupção de linha de bobina!",
    "curiosidadeTecnica": "Uma bobina Jumbo tamanho M cheia pesa cerca de 8 gramas (quase o dobro da bobina L). A 1.000 PPM, essa massa gera uma energia cinética de rotação que precisa ser freada pela mola interna em menos de 0,02 segundo a cada parada da máquina.",
    "dicaArtrelados": "Ao trabalhar com bobinas de grande capacidade, use sempre bobinas pré-bobinadas de fábrica sem flange plástico (aquelas que vêm com linha de filamento contínuo compactada magneticamente): elas cabem até 20% mais linha do que as bobinas cheias na mão e garantem uma tensão constante do primeiro ao último ponto!",
    "comparisonTable": {
      "headers": [
        "Especificação",
        "Caixa de Bobina Padrão (Tipo L)",
        "Caixa de Bobina Jumbo (Tipo M)"
      ],
      "rows": [
        [
          "Diâmetro da Bobina",
          "21,2 mm",
          "25,4 mm a 30,0 mm (Jumbo)"
        ],
        [
          "Metragem de Linha",
          "60 a 70 metros",
          "130 a 160 metros (+130% mais linha)"
        ],
        [
          "Frequência de Troca",
          "A cada 30 a 40 minutos",
          "A cada 90 a 120 minutos de bordado"
        ],
        [
          "Indicação Ideal",
          "Bordados pequenos / Peças normais",
          "Grandes produções / Costas de jaquetas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "DBxK5 ou 130/705 H conforme a máquina",
      "stabilizer": "Adequado ao projeto",
      "threadTension": "110 a 120 gf (superior) e 24 gf (tensiômetro Towa para bobina M)",
      "density": "Padrão de produção"
    },
    "applications": [
      "Bordados gigantes em costas de jaquetas jeans, jaquetas de couro e kimonos",
      "Quilting e matelassê em colchas de casal, edredons e painéis decorativos",
      "Produção industrial seriada de toalhas de banho e uniformes corporativos",
      "Fardamentos militares pesados e equipamentos táticos de alta resistência"
    ],
    "troubleshootingTips": [
      "Se a linha de bobina formar laçadas frouxas no avesso durante paradas, substitua a mola de teflon do fundo da caixa",
      "Lubrifique a pista da lançadeira Jumbo com 2 gotas de óleo a cada troca de bobina",
      "Verifique com o tensiômetro se a mola de tensão da cápsula não acumulou fiapos de linha"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Mola de Tensão da Caixa de Bobina",
      "Medidor de Tensão Mecânica de Linha - Tensiómetro Towa"
    ],
    "tags": [
      "m-096",
      "bobina jumbo",
      "tamanho m",
      "lancadeira rotativa",
      "alta capacidade",
      "produtividade industrial",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KOBAN Rotary Hooks Technical Guide. Jumbo Hook Systems & High-Capacity Bobbins. Osaka, 2021.",
      "PARRISH, Gail. Industrial Sewing Automation: Jumbo Bobbins & Continuous Production Flow. Cincinnati, 2022."
    ],
    "practicalExercise": "Compare uma bobina tamanho L comum com uma bobina tamanho M Jumbo lado a lado. Enrole ambas com a mesma linha de bobina até o limite. Conte as voltas ou cronometre o tempo de costura de cada uma na máquina. Veja como a bobina Jumbo borda mais que o dobro do tempo sem parar!",
    "quickSummary": "Lançadeiras e bobinas gigantes que guardam mais que o dobro de linha para bordar sem parar o tempo todo.",
    "beginnerExplanation": "A caixa de bobina Jumbo é como um tanque de combustível maior para a máquina de bordar: ela cabe muito mais linha de baixo, permitindo que você borde desenhos gigantescos ou várias peças seguidas sem precisar parar toda hora para trocar a bobina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-097-malha-suplex-e-tecidos-de-compressao",
    "code": "M-097",
    "term": "Malha Suplex & Tecidos de Compressão (Supplex & Heavy Compression Fabrics)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês Supplex (marca registrada de poliamida texturizada com toque de algodão) e de compressão (força de sustentação muscular).",
    "summary": "Técnicas de estabilização estruturada para bordar em malhas pesadas de alta compressão (poliamida com elastano grosso) para moda fitness e ciclismo.",
    "definition": "Malha Suplex & Tecidos de Compressão (Supplex Knit & High-Compression Activewear Embroidery) é a metodologia de bordado técnico voltada para tecidos densos e elásticos de alta gramatura (280 a 380 g/m²) compostos por microfilamentos de poliamida texturizada a ar combinados com 12% a 20% de elastano de alto módulo elástico. Como essas peças são vestidas sob forte tensão e estiramento no corpo do atleta, o bordado deve possuir elasticidade intrínseca, compensação de repuxo superdimensionada (0,50 mm a 0,60 mm), entretelas de recorte de poliamida multidirecionais e underlays em zigue-zague elástico que acompanham os movimentos musculares sem arrebentar fios.",
    "technicalDetails": "Gramatura do tecido: 280 a 380 g/m². Composição: 86% Poliamida + 14% Elastano. Elasticidade de recuperação: > 90%. Agulha: 75/11 ou 80/12 SES (Ball Point). Compensação de repuxo: 0,50 mm a 0,60 mm.",
    "construction": [
      "Tecido Suplex de poliamida de alta gramatura para bermudas de compressão ou leggings",
      "Entretela de recorte flexível multidirecional PolyMesh 60 g/m² ou entretela termofusível de malha",
      "Adesivo temporário de fixação em spray ou bastidor de pressão magnética",
      "Agulha de ponta bola média 75/11 SES de haste reforçada",
      "Linha de poliéster 40wt de alta tenacidade e película hidrossolúvel de topo"
    ],
    "howItWorks": [
      "1. A entretela PolyMesh é termocolada ou fixada com adesivo spray no avesso do Suplex.",
      "2. O tecido é posicionado no bastidor magnético em seu estado de repouso natural, sem ser esticado.",
      "3. Coloca-se a película hidrossolúvel de topo para evitar que os pontos cheios penetrem na textura da malha.",
      "4. A máquina borda em velocidade de 700 a 800 PPM com pontos cheios e compensação de 0,55 mm.",
      "5. A matriz aplica pontos de suporte (underlays) em zigue-zague cruzado flexível.",
      "6. Ao soltar do bastidor, o bordado repousa perfeitamente plano sobre o tecido denso.",
      "7. Quando o atleta veste a legging e o tecido estica no corpo, o bordado se expande suavemente sem estourar nenhum ponto."
    ],
    "mainTypes": [
      "Leggings e Tops de Alta Compressão para Academia (Logotipos em áreas de alta tensão muscular)",
      "Bermudas e Bretelles de Ciclismo com Suplex Power (Bordados de equipes de ciclismo e patrocinadores)",
      "Macacões de Ginástica Olímpica e Natação (Bordados resistentes a cloro, atrito e suor intenso)"
    ],
    "characteristics": [
      "Elasticidade mecânica do bordado que acompanha a expansão do tecido no corpo",
      "Preservação integral da sustentação e da firmeza da malha de compressão",
      "Toque interno plano e sedoso que não causa atrito nem queima a pele do atleta",
      "Resistência incomparável a lavagens frequentes em água fria e secagem rápida"
    ],
    "limitations": [
      "Nunca utilizar entretela rasgável que se rompe com o estiramento no corpo",
      "Não digitalizar tatamis densos e duros que transformam o logotipo em uma couraça rígida",
      "Evitar agulhas de ponta cortante que rompem os filamentos de elastano do tecido"
    ],
    "numberingSystem": [
      "Gramatura do Suplex: 300 a 350 g/m²",
      "Compensação de Repuxo: 0,55 mm",
      "Densidade Recomendada: 0,44 mm a 0,48 mm"
    ],
    "advantages": [
      "✔ Abre o mercado de confecções de moda fitness e roupas de academia de alta lucratividade",
      "✔ Garante que o logotipo não rache e não descosture quando o cliente vestir a roupa",
      "✔ Agrega acabamento de nível industrial de marcas consagradas (Nike, Adidas, Lululemon)"
    ],
    "commonErrors": [
      "❌ Puxar o Suplex com força no bastidor de aro plástico, deixando a legging deformada e torta",
      "❌ Usar agulha ponta fina afiada que fura os fios de borracha e faz a malha desfiar em escadinha",
      "❌ Usar densidade excessivamente apertada (0,32 mm), travando a elasticidade natural da malha"
    ],
    "voceSabia": "O tecido Supplex foi desenvolvido pela multinacional DuPont para unir o toque suave e macio do algodão natural com a resistência extrema e secagem rápida do nylon, sendo o tecido mais utilizado no mundo em roupas de yoga e crossfit!",
    "curiosidadeTecnica": "O Suplex de compressão exerce uma pressão mecânica de 15 a 25 mmHg sobre o corpo para melhorar a circulação sanguínea. Um bordado mal digitalizado sem flexibilidade cria um 'anel de estrangulamento' na fibra, causando rompimento prematuro da costura.",
    "dicaArtrelados": "Ao digitalizar para tecido Suplex ou roupas de academia, use sempre ponto de suporte (underlay) em zigue-zague aberto no sentido diagonal e nunca use ponto de contorno reto rígido: isso dá uma flexibilidade elástica incrível para o bordado esticar junto com a roupa no corpo sem arrebentar nenhuma linha!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Malha de Algodão Comum",
        "Malha Suplex de Compressão"
      ],
      "rows": [
        [
          "Gramatura",
          "140 a 180 g/m² (Média)",
          "300 a 380 g/m² (Pesada e Firme)"
        ],
        [
          "Elasticidade e Memória",
          "Média (Alonga e deforma)",
          "Altíssima (Alonga até 80% e retorna 100%)"
        ],
        [
          "Tipo de Entretela",
          "Rasgável ou Recorte Leve",
          "Recorte PolyMesh ou Malha Termofusível"
        ],
        [
          "Compensação de Repuxo",
          "0,30 mm a 0,35 mm",
          "0,50 mm a 0,60 mm (Máxima)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 ou 80/12 Ball Point (SES / Ponta Bola)",
      "stabilizer": "Entretela PolyMesh 60 g/m² + Película Hidrossolúvel de topo",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.46 mm com compensação de repuxo de 0.55 mm"
    },
    "applications": [
      "Calças legging, bermudas de compressão e tops de ginástica de alto padrão",
      "Uniformes de ciclismo de estrada e mountain bike (bretelles e jaquetas)",
      "Kimonos leves de jiu-jitsu com lycra interna e rashguards de artes marciais",
      "Fardamentos de dança, patinação artística e roupas de banho esportivas"
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido formando um franzido ao redor, aumente a compensação de repuxo no software",
      "Utilize bastidores magnéticos para prender o tecido pesado sem deixar marcas de compressão",
      "Lave a peça com água fria para dissolver a película de topo sem alterar a elasticidade do Suplex"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Malha e Tecidos Elásticos",
      "Microfibra Dry-Fit com Elastano",
      "Compensação de Repuxo",
      "Bastidores Magnéticos"
    ],
    "tags": [
      "m-097",
      "suplex",
      "compressao",
      "moda fitness",
      "legging",
      "polymesh",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DUPONT Textiles Innovation Division. Supplex Fabric Performance and Stitch Dynamics. Wilmington, 2021.",
      "PARRISH, Gail. High-Compression Knitwear & Activewear Embroidery Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido Suplex grosso. Prenda no bastidor com entretela PolyMesh e borde um logotipo em ponto cheio com compensação de 0,55 mm e underlay em zigue-zague. Retire do bastidor e estique o tecido com as duas mãos com força: veja como o bordado estica junto com o tecido e volta perfeito sem quebrar nenhuma linha!",
    "quickSummary": "Bordados elásticos e resistentes para tecidos grossos de academia e roupas de compressão de atletas.",
    "beginnerExplanation": "O Suplex é aquele tecido grosso, firme e super elástico usado em calças de academia e roupas de ginástica. A gente usa entretela macia e pontos com elasticidade para que, quando a pessoa vestir a calça e o tecido esticar na perna, o bordado estique junto sem arrebentar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-098-modulacao-de-velocidade-curva-em-cantos-agudos",
    "code": "M-098",
    "term": "Modulação de Velocidade Curva em Cantos Agudos (Corner Speed Deceleration)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim modulatio (controle rítmico) e velocitas (rapidez de movimento). Algoritmo de controle cinemático CNC.",
    "summary": "Recurso computacional da máquina e do software que desacelera gradualmente a velocidade do pantógrafo antes de curvas fechadas e cantos agudos, evitando quebras de agulha e vibrações.",
    "definition": "Modulação de Velocidade Curva em Cantos Agudos (Corner Speed Deceleration & Adaptive CNC Feedrate) é o controle cinemático dinâmico implementado nos microprocessadores das máquinas de bordar modernas e nas matrizes digitalizadas. Quando o desenho exige uma mudança brusca de trajetória em ângulo agudo (< 60°) ou arcos muito fechados, o sistema desacelera suavemente a rotação da máquina (por exemplo, de 900 PPM para 550 PPM) 3 a 5 pontos antes do vértice, executando o canto com estabilidade micrométrica e acelerando progressivamente em seguida, neutralizando a inércia do bastidor pesado e eliminando quebras de agulha por impacto.",
    "technicalDetails": "Ângulo de ativação de desaceleração: < 75°. Redução de velocidade angular: 30% a 45% do valor nominal. Algoritmo de aceleração: Curva Senoidal S-Curve (Jerk Reduction). Ganho de precisão de vértice: ± 0,05 mm.",
    "construction": [
      "Controladora CNC com processador DSP de alta velocidade de interpolação geométrica",
      "Software de digitalização com comandos embutidos de velocidade dinâmica (*Speed Change Triggers*)",
      "Servomotores de malha fechada nos eixos X e Y com encoders de alta resolução",
      "Algoritmo de cálculo preditivo de trajetória com leitura avançada de vetores (*Look-Ahead Buffer*)",
      "Chassi mecânico rígido com amortecedores dinâmicos de pantógrafo"
    ],
    "howItWorks": [
      "1. A controladora da máquina lê os blocos de pontos que serão bordados nos próximos 20 milissegundos.",
      "2. O algoritmo identifica uma mudança direcional brusca em ângulo agudo no trajeto da matriz.",
      "3. O sistema calcula a força centrífuga e a inércia do bastidor para aquela massa de tecido.",
      "4. A máquina inicia uma desaceleração progressiva em rampa senoidal (sem trancos).",
      "5. A agulha executa os pontos do vértice com rotação controlada e penetração limpa sem deflexão.",
      "6. Ultrapassado o canto, a controladora acelera novamente até a velocidade máxima de cruzeiro.",
      "7. O resultado são pontas de estrelas, cantos de letras e brasões perfeitamente afiados e nítidos."
    ],
    "mainTypes": [
      "Desaceleração Automática por Hardware CNC (Gerenciada pelo computador interno da própria máquina)",
      "Comandos de Velocidade Programados no Software (Inserção manual ou automática de códigos de RPM na matriz)",
      "Controle Adaptativo por Sensor de Carga Inercial (Ajuste de velocidade proporcional ao peso do bastidor)"
    ],
    "characteristics": [
      "Pontas de estrelas, triângulos e serifas de letras perfeitamente pontiagudas e afiadas",
      "Redução em mais de 95% das quebras de agulha provocadas por batidas laterais em cantos",
      "Eliminação total do barulho de 'tranco' mecânico do pantógrafo em mudanças de direção",
      "Aumento substancial da vida útil das correias dentadas e mancais da máquina"
    ],
    "limitations": [
      "Pode aumentar em 3% a 5% o tempo total de bordado de desenhos com centenas de cantos afiados",
      "Exige que a máquina possua servomotores rápidos com boa resposta de frenagem",
      "Softwares muito antigos podem não suportar a inserção de comandos intermediários de velocidade"
    ],
    "numberingSystem": [
      "Velocidade de Cruzeiro: 850 a 1.000 PPM",
      "Velocidade em Curvas Fechadas: 500 a 600 PPM",
      "Ângulo Crítico de Redução: < 60°"
    ],
    "advantages": [
      "✔ Permite bordar matrizes complexas e detalhadas em alta velocidade sem risco de quebra constante",
      "✔ Garante a máxima nitidez visual em pontas de brasões, estrelas e letras góticas",
      "✔ Protege a mecânica da máquina contra desgastes prematuros de eixos e correias"
    ],
    "commonErrors": [
      "❌ Forçar a máquina a rodar a 1.000 PPM fixa em desenhos cheios de ziguezagues pontiagudos",
      "❌ Desativar a função de controle de aceleração em curva no menu de parâmetros técnicos",
      "❌ Usar bastidores gigantes muito pesados sem ativar o modo de redução de velocidade para bastidor grande"
    ],
    "voceSabia": "Os algoritmos de curva senoidal (S-Curve) usados no controle de velocidade de cantos em máquinas de bordar foram desenvolvidos originalmente pela engenharia aeroespacial para suavizar o acoplamento de naves na Estação Espacial Internacional sem causar solavancos!",
    "curiosidadeTecnica": "Em uma máquina operando a 1.000 PPM, a agulha sobe e desce 16,6 vezes por segundo. Se o pantógrafo mudar de direção em 90° instantaneamente nessa velocidade, a agulha sofre uma força lateral de desaceleração equivalente a 8 vezes o seu próprio peso (8G), o que causa flexão instantânea contra a chapa de agulha.",
    "dicaArtrelados": "Ao bordar desenhos com muitas pontas afiadas (como estrelas, coroas ou letras góticas), programe a velocidade da sua máquina no painel para 700 ou 750 PPM em vez da velocidade máxima: as pontas das estrelas vão sair incrivelmente afiadas e a máquina vai trabalhar suave sem dar nenhum tranco!",
    "comparisonTable": {
      "headers": [
        "Comportamento em Cantos",
        "Velocidade Fixa Máxima (1.000 PPM)",
        "Modulação de Velocidade Curva"
      ],
      "rows": [
        [
          "Nitidez dos Vértices",
          "Arredondados ou com falhas",
          "Perfeitamente agudos e nítidos"
        ],
        [
          "Vibração do Pantógrafo",
          "Trancos fortes e ruído seco",
          "Movimento suave e silencioso"
        ],
        [
          "Quebra de Agulha",
          "Frequente em cantos agudos",
          "Praticamente nula"
        ],
        [
          "Vida Útil Mecânica",
          "Desgaste acelerado de correias",
          "Máxima durabilidade industrial"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Cruzeiro: 800 PPM / Cantos: 550 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 / SAN 1",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Estrelas de condecorações militares e insígnias com pontas agudas perfeitas",
      "Letras com serifas finas, tipografias góticas e traços heráldicos",
      "Bordados em couro e materiais pesados que oferecem alta resistência de penetração",
      "Logotipos corporativos geométricos com ângulos retos e triângulos precisos"
    ],
    "troubleshootingTips": [
      "Se as pontas das estrelas saírem arredondadas, ative a redução automática de canto no painel da máquina",
      "Verifique a tensão das correias do pantógrafo se houver folga perceptível nos vértices",
      "Insira comandos de mudança de velocidade na matriz através do editor de lista de comandos do software"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Movimento Harmônico Senoidal do Pantógrafo",
      "Modificador de Ponto Curvo Inteligente",
      "Pantógrafo",
      "Mecânica & Manutenção"
    ],
    "tags": [
      "m-098",
      "modulacao de velocidade",
      "desaceleracao em curva",
      "cantos agudos",
      "pontas perfeitas",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Motion Control Technical Guide. Dynamic S-Curve Acceleration and Corner Feedrate. Nagoya, 2021.",
      "PARRISH, Gail. Precision Cornering, Kinetic Motion and Needle Deflection Prevention. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde uma estrela de 5 pontas a 1.000 PPM em velocidade fixa. Em seguida, borde a mesma estrela a 650 PPM. Compare as pontinhas das duas estrelas com uma lupa: veja como a estrela bordada com velocidade controlada tem pontas perfeitamente agulhadas e sem nenhuma falha!",
    "quickSummary": "Redução inteligente de velocidade antes de curvas e pontas para o bordado sair perfeito sem quebrar agulhas.",
    "beginnerExplanation": "É como um carro que diminui a velocidade antes de fazer uma curva bem fechada para não derrapar: a máquina bordadeira desacelera um pouquinho quando vai fazer uma pontinha afiada de estrela ou letra, deixando a ponta bem fininha e sem quebrar a agulha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-099-manutencao-de-molas-e-hastes-dos-calcadores-independentes",
    "code": "M-099",
    "term": "Manutenção de Molas & Hastes dos Calcadores Independentes (Independent Presser Foot Springs & Bars)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim manualis (feito com as mãos) e calcatorium (peça que calca e pressiona o tecido).",
    "summary": "Inspeção de desgaste, troca de molas helicoidais fadigadas, alinhamento concêntrico e ajuste de pressão das hastes individuais de calcador em máquinas multicabeças.",
    "definition": "Manutenção de Molas & Hastes dos Calcadores Independentes (Independent Presser Foot Spring Tension & Bar Alignment Maintenance) é o conjunto de intervenções mecânicas especializadas voltadas para o conjunto móvel de sustentação do tecido em cada agulha do cabeçote. O calcador deve descer e pressionar o tecido firmemente no milissegundo em que a agulha sobe, impedindo que o tecido seja puxado para cima junto com a agulha (*efeito flagging*). A manutenção envolve descarbonização das hastes guia, alinhamento do anel do calcador exatamente concêntrico com o furo da chapa e substituição de molas de pressão cansadas.",
    "technicalDetails": "Curso vertical do calcador: 4,0 mm a 6,0 mm. Força elástica da mola: 250 a 350 gramas-força (gf). Folga concêntrica com a agulha: 0,8 mm a 1,2 mm ao redor de todo o anel. Altura de repouso: 1,0 mm a 1,5 mm acima do tecido.",
    "construction": [
      "Haste de aço retificado e polido de alta dureza para cada agulha do cabeçote",
      "Mola helicoidal de compressão em aço mola com tratamento térmico antiferrugem",
      "Anel do calcador estampado com cromagem dura para baixo atrito sobre os tecidos",
      "Parafuso de aperto micrométrico com fenda fresada para travamento no bloco excêntrico",
      "Graxa fluida sintética com teflon para lubrificação de hastes verticais"
    ],
    "howItWorks": [
      "1. Desliga-se a máquina e retiram-se as tampas frontais de proteção das barras de agulha do cabeçote.",
      "2. Inspeciona-se visualmente a altura e a compressão das molas de todos os calcadores das agulhas.",
      "3. Movimenta-se cada calcador verticalmente com o dedo para checar se desliza livre sem engasgos.",
      "4. Se houver pó têxtil acumulado, limpam-se as hastes com pincel e solvente desengraxante a seco.",
      "5. Ajusta-se o parafuso da haste para que o anel do calcador fique rigorosamente centralizado com a agulha.",
      "6. Regula-se a altura do calcador para que desça até quase encostar no tecido sem esmagá-lo.",
      "7. Aplica-se 1 gota de óleo fino de máquina nas buchas de bronze e remonta-se a tampa frontal."
    ],
    "mainTypes": [
      "Manutenção Preventiva de Calcadores Tubulares (Para máquinas de braço livre com bordado em peças prontas)",
      "Ajuste de Calcadores com Micro-Regulagem Externa (Sistemas com botão giratório de altura rápida no painel frontal)",
      "Troca de Molas Reforçadas para Tecidos Pesados (Molas com maior pressão para bordar bonés e couro)"
    ],
    "characteristics": [
      "Eliminação definitiva do efeito flagging (tecido pulando e subindo junto com a agulha)",
      "Formação perfeita e estável da laçada de linha no interior da lançadeira rotativa",
      "Deslizamento suave do calcador sobre costuras grossas e apliques sem travar",
      "Proteção total da agulha contra colisões com o anel do próprio calcador"
    ],
    "limitations": [
      "Nunca entortar a haste do calcador com alicate para tentar desviar de agulhas tortas",
      "Sempre substituir a agulha antes de tentar realinhar o centro do calcador",
      "Não deixar óleo em excesso nas hastes verticais para não pingar e manchar roupas brancas"
    ],
    "numberingSystem": [
      "Folga de Centralização: 1,0 mm uniforme",
      "Pressão da Mola: 300 gf",
      "Altura Acima da Chapa: 1,2 mm"
    ],
    "advantages": [
      "✔ Acaba com quebras de agulha misteriosas causadas pela agulha raspar na borda do calcador",
      "✔ Garante que pontos fiquem firmes e sem laçadas frouxas ao bordar toalhas felpudas e moletons",
      "✔ Mantém o padrão de qualidade idêntico entre todas as agulhas do cabeçote"
    ],
    "commonErrors": [
      "❌ Deixar o calcador torto, fazendo a agulha bater na bordinha de metal e quebrar a ponta",
      "❌ Operar com molas quebradas ou cansadas, fazendo o tecido pular solto no bastidor",
      "❌ Encharcar as hastes com óleo preto, manchando bordados de clientes em tecidos claros"
    ],
    "voceSabia": "O calcador de bordado foi desenvolvido pelo inventor Isaac Singer em 1851; no bordado computadorizado, o calcador realiza mais de 60.000 subidas e descidas por hora em regime industrial contínuo!",
    "curiosidadeTecnica": "Se o calcador demorar apenas 3 milissegundos para descer devido a uma mola suja ou emperrada, o tecido sobe 2 mm junto com a agulha; esse movimento reduz a folga da laçada inferior em 70%, gerando pontos pulados instantaneamente.",
    "dicaArtrelados": "Uma vez a cada 6 meses, com a máquina desligada, empurre o calcador de cada agulha para cima com o dedo indicador e solte: ele deve voltar instantaneamente para baixo com um clique seco e rápido! Se algum voltar devagarzinho ou parecer preguiçoso, limpe a haste com um cotonete com óleo e ele voltará a voar!",
    "comparisonTable": {
      "headers": [
        "Estado do Calcador",
        "Comportamento do Tecido",
        "Qualidade dos Pontos",
        "Risco Mecânico"
      ],
      "rows": [
        [
          "Mola Saudável e Alinhado",
          "Firme e plano durante o golpe",
          "Pontos nítidos e nós perfeitos",
          "Zero (Operação ideal)"
        ],
        [
          "Mola Cansada / Torta",
          "Tecido pula (Flagging)",
          "Pontos pulados e laçadas soltas",
          "Médio (Falhas de bordado)"
        ],
        [
          "Anel Desalinhado / Torto",
          "Firme",
          "Normal",
          "Altíssimo (Agulha bate no anel)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-manutenção: Operação estável até 1.200 PPM",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Revisão semestral de cabeçotes de máquinas bordadeiras industriais e comerciais",
      "Correção de falhas de pontos pulados em tecidos felpudos e acolchoados",
      "Alinhamento concêntrico após quebras violentas de agulha contra o calcador",
      "Equalização de pressão de calcador em máquinas de bordar bonés estruturados"
    ],
    "troubleshootingTips": [
      "Se a agulha estiver raspando no calcador, solte o parafuso de fixação e centralize o anel com precisão",
      "Substitua molas que tenham perdido mais de 10% do seu comprimento livre original",
      "Limpe as ranhuras das buchas de guia com ar comprimido e pano microfibra seco"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Micro-Ajuste de Altura do Calcador",
      "Manutenção Preventiva",
      "Barra de Agulha",
      "Lançadeira Rotativa"
    ],
    "tags": [
      "m-099",
      "calcador independente",
      "mola do calcador",
      "flagging",
      "ponto pulado",
      "manutencao preventiva",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Service Guide. Presser Foot Timing, Spring Mechanics & Stroke Alignment. Nagoya, 2021.",
      "PARRISH, Gail. Precision Presser Foot Dynamics & Flagging Prevention in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada, abaixe a agulha número 1 manualmente girando o volante. Olhe de cima: veja se a agulha passa exatamente no centro do anelzinho de metal do calcador com folga igual em toda a volta. Repita para as outras agulhas. Assim você garante segurança total!",
    "quickSummary": "Inspeção e regulagem das molas e pezinhos da máquina para segurar o tecido e não quebrar agulhas.",
    "beginnerExplanation": "O calcador é o pezinho de metal que desce para segurar o tecido no momento exato em que a agulha sobe. Cuidar para que a molinha dele esteja forte e que o pezinho esteja bem centralizado faz a máquina bordar macia sem pular pontos e sem bater na agulha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-100-mapeamento-termico-de-cabecotes-e-diagnostico-de-sobrecarga-mecanica",
    "code": "M-100",
    "term": "Mapeamento Térmico de Cabeçotes & Diagnóstico de Sobrecarga Mecânica (Thermal Imaging Diagnostics)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego therme (calor) e do latim mappa (carta geográfica / mapa visual de diagnóstico).",
    "summary": "Uso de termografia infravermelha e pirômetros a laser para identificar pontos de atrito excessivo, rolamentos travados e aquecimento de motores antes que ocorra quebra catastrófica.",
    "definition": "Mapeamento Térmico de Cabeçotes & Diagnóstico de Sobrecarga Mecânica (Infrared Thermography & Preventative Overheat Diagnostics) é o método preditivo não destrutivo de inspeção avançada que utiliza câmeras térmicas infravermelhas e termômetros a laser digitais para monitorar a temperatura de operação dos componentes críticos da máquina de bordar em plena produção. Ao escanear mancais de eixos, caixas de engrenagem, lançadeiras rotativas, blocos de agulha e servomotores dos eixos X e Y, o técnico detecta gradientes anormais de temperatura (> 15°C acima da temperatura ambiente), identificando lubrificação deficiente, falta de folga mecânica ou sobrecarga elétrica antes que ocorra travamento de eixo ou queima de motor.",
    "technicalDetails": "Faixa térmica operacional saudável de mancais: 35°C a 48°C. Temperatura de alerta em lançadeiras: > 60°C. Temperatura crítica de servomotores: > 70°C. Emissividade calibrada para ligas de aço/alumínio: ε = 0,92 a 0,95.",
    "construction": [
      "Câmera termográfica infravermelha portátil de alta resolução (resolução térmica < 0,05°C)",
      "Pirômetro óptico a laser de medição pontual rápida sem contato",
      "Software de análise termográfica com paletas de cores Ironbow e Rainbow",
      "Tabela de temperaturas nominais de referência fornecida pelo fabricante da máquina",
      "Kit de graxas sintéticas e óleos de alta performance para intervenção corretiva imediata"
    ],
    "howItWorks": [
      "1. A máquina de bordar é colocada para operar em carga normal de produção (750 a 850 PPM) por 30 minutos.",
      "2. O técnico aponta a câmera termográfica para o conjunto de cabeçotes e bloco inferior das lançadeiras.",
      "3. A tela infravermelha gera um mapa térmico colorido em tempo real, destacando pontos em vermelho e branco.",
      "4. Comparam-se as temperaturas de todos os cabeçotes: se o cabeçote 3 estiver a 65°C e os outros a 42°C, há anomalia.",
      "5. Identifica-se o ponto exato de atrito excessivo (ex: rolamento sem graxa ou engrenagem muito apertada).",
      "6. A máquina é parada para intervenção pontual: lubrificação profunda, ajuste de folga ou troca de rolamento.",
      "7. Realiza-se um novo escaneamento térmico para confirmar que a temperatura retornou à faixa verde segura."
    ],
    "mainTypes": [
      "Inspeção Termográfica de Rotina Mensal (Escaneamento geral de motores, fontes e fiações elétricas)",
      "Diagnóstico de Alta Precisão em Lançadeiras e Eixos (Medição de atrito em alta velocidade de costura)",
      "Auditoria de Painéis Eletrônicos e Placas de Potência (Detecção de superaquecimento em transistores MOSFET)"
    ],
    "characteristics": [
      "Diagnóstico preventivo 100% não invasivo sem necessidade de desmontar a máquina inteira",
      "Identificação precoce de defeitos semanas antes de causarem travamento mecânico real",
      "Prevenção absoluta de incêndios elétricos e queima de placas eletrônicas caríssimas",
      "Máxima confiabilidade operacional para fábricas e ateliês com prazos rigorosos de entrega"
    ],
    "limitations": [
      "Exige câmera térmica ou termômetro a laser calibrado para medições confiáveis",
      "As medições devem ser feitas com a máquina em funcionamento aquecida e não com ela fria",
      "Superfícies de cromo polido espelhado exigem ajuste de emissividade para não refletir calor falso"
    ],
    "numberingSystem": [
      "Temperatura Normal de Cabeçote: 35°C a 45°C",
      "Temperatura de Alerta (Amarelo): 50°C a 60°C",
      "Temperatura Crítica (Vermelho): > 65°C"
    ],
    "advantages": [
      "✔ Evita paradas catastróficas que podem custar milhares de reais em peças e dias de atraso",
      "✔ Aumenta a vida útil dos motores e cabeçotes em mais de 50% com manutenção no momento exato",
      "✔ Garante que todas as cabeças de máquinas multicabeças trabalhem com o mesmo esforço mecânico"
    ],
    "commonErrors": [
      "❌ Ignorar cheiro de queimado ou peças quentes ao toque até que a máquina trave de vez",
      "❌ Medir temperatura com a máquina recém-ligada sem dar o tempo mínimo de estabilização de 30 minutos",
      "❌ Colocar excesso de óleo pesado em cabeçotes superaquecidos em vez de desengraxar e trocar rolamentos gastos"
    ],
    "voceSabia": "A termografia infravermelha foi desenvolvida pelas Forças Armadas para visão noturna em aeronaves de caça; hoje, engenheiros da Fórmula 1 e das maiores indústrias têxteis do mundo utilizam câmeras térmicas para prever quebras mecânicas antes que elas aconteçam!",
    "curiosidadeTecnica": "Para cada 10°C de aumento de temperatura acima do limite nominal em componentes eletrônicos e isolamentos de motores elétricos, a vida útil útil da peça cai pela metade (Regra de Arrhenius da termodinâmica).",
    "dicaArtrelados": "Não tem câmera térmica no ateliê? Use um termômetro digital de cozinha a laser (aqueles de apontar para panela que custam baratinho): aponte o laser para a carcaça da lançadeira e para os motores laterais da sua máquina após 1 hora de bordado. Se a temperatura estiver abaixo de 45°C, sua máquina está super saudável e trabalhando como um relógio suíço!",
    "comparisonTable": {
      "headers": [
        "Componente da Máquina",
        "Temperatura Saudável",
        "Temperatura de Alerta",
        "Ação Recomendada"
      ],
      "rows": [
        [
          "Lançadeira Rotativa",
          "38°C a 46°C",
          "> 55°C",
          "Lubrificar pista com óleo fino de costura"
        ],
        [
          "Mancais do Eixo Principal",
          "35°C a 42°C",
          "> 50°C",
          "Injetar graxa sintética NLGI 2"
        ],
        [
          "Servomotores X/Y",
          "45°C a 55°C",
          "> 70°C",
          "Verificar peso do bastidor e tensão de correias"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-diagnóstico: Operação em regime pleno de produção",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Diagnóstico preditivo)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Inspeção preditiva semestral em ateliês e indústrias de bordado computadorizado",
      "Diagnóstico de ruídos anormais e aquecimentos em máquinas recém-adquiridas ou reformadas",
      "Balanceamento de carga mecânica entre cabeçotes de máquinas multicabeças",
      "Auditoria de segurança contra superaquecimento em quadros elétricos e fontes de alimentação"
    ],
    "troubleshootingTips": [
      "Se um cabeçote estiver muito mais quente que os outros, verifique se a barra de agulha não está presa ou seca",
      "Limpe as aletas de refrigeração e ventoinhas dos motores de passo com um pincel seco",
      "Mantenha um registro mensal das temperaturas para acompanhar a evolução do desgaste mecânico"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Manutenção Preventiva",
      "Lançadeira Rotativa",
      "Servo Motores",
      "Manutenção de Caixas de Engrenagem e Graxa Branca de Lítio"
    ],
    "tags": [
      "m-100",
      "mapeamento termico",
      "camera termica",
      "sobrecarga mecanica",
      "diagnostico preditivo",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FLIR Systems Thermal Imaging Handbook for Precision Machinery. Wilsonville, 2021.",
      "PARRISH, Gail. Advanced Predictive Maintenance & Thermal Diagnostics in Computerized Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Após 1 hora de bordado contínuo na sua máquina, encoste o dorso da mão limpa nas tampas laterais dos motores e na chapa próxima à lançadeira (com a máquina parada). Sinta se o calor está apenas morno e suave ou se está quente a ponto de queimar. Aprender a sentir o calor da sua máquina é o segredo para ela durar a vida inteira!",
    "quickSummary": "Uso de medidores de calor a laser para achar peças com atrito antes que elas quebrem ou travem a máquina.",
    "beginnerExplanation": "O mapeamento térmico é como tirar a temperatura da máquina de bordar: com um termômetro a laser, você descobre se tem alguma pecinha esquentando demais por falta de óleo antes que ela quebre, mantendo sua máquina sempre saudável e pronta para trabalhar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-101-melco-maquinas-de-bordado-eletronico",
    "code": "M-101",
    "term": "Melco (Máquinas de Bordado Eletrônico)",
    "pronunciation": "mel-co (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    "letter": "M",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Locução substantiva.",
    "origin": "Fundada em 1972 em Denver, Colorado (Estados Unidos), pioneira global no desenvolvimento do primeiro sistema computadorizado de monogramas e digitalização digital de bordado da história. Revolucionou o mercado têxtil mundial ao introduzir a primeira máquina modular industrial sem fios de tensão manuais do mundo (sistema Acti-Feed).",
    "summary": "Fabricante norte-americana pioneira em máquinas industriais modulares de 16 agulhas (linha EMT16X), famosa pela tecnologia patenteada Acti-Feed sem botões de tensão manual, velocidade de até 1.500 PPM e formato .EXP / .OFM.",
    "definition": "A Melco é uma das mais inovadoras e lendárias fabricantes norte-americanas de equipamentos de bordado computadorizado do planeta. Destaca-se mundialmente pelo conceito de bordado industrial modular de 16 agulhas (com modelos célebres como a Melco EMT16 e EMT16X, e a clássica Amaya), onde múltiplas máquinas operam em rede a partir de um único computador central com o software Melco OS. Sua maior inovação é o sistema patenteado Acti-Feed, que substituiu completamente os tradicionais botões mecânicos de tensão manual por roletes acionados por microprocessadores que alimentam a quantidade exata de linha requerida por cada ponto.",
    "technicalDetails": "Equipada com o sistema patenteado de alimentação ativa de fio Acti-Feed (Active Thread Delivery), que mede a espessura do tecido e entrega a metragem micrométrica de linha por ponto, eliminando tensões manuais. Velocidade de até 1.500 PPM em peças planas e bonés. Braço tubular cilíndrico ultra-compacto com menor diâmetro de costura para bolsos pequenos e bonés estruturados. Conexão em rede Ethernet operacional modular gerenciando até 30 cabeçotes independentes via Melco OS / DesignShop. Suporte a arquivos no formato proprietário .OFM e ao padrão universal .EXP.",
    "construction": [
      "Chassi de aço tubular de alta precisão com pés emborrachados antivibração",
      "Cabeçote móvel com conjunto de 16 agulhas acionadas por servomotores digitais",
      "Sistema de roletes motorizados Acti-Feed com sensores de pressão e espessura têxtil",
      "Braço cilíndrico de perfil fino para peças tubulares estreitas e bonés de alta curvatura",
      "Corte automático de linha por solenoides ultrarrápidos com pega-fio integrado",
      "Ponteiro de feixe laser duplo para alinhamento e cruzamento de ângulos no tecido",
      "Interface de comunicação Ethernet de alta velocidade com controle central no Melco OS"
    ],
    "howItWorks": [
      "1. A matriz em formato nativo .OFM ou .EXP é enviada do computador do ateliê diretamente para o software Melco OS via rede local.",
      "2. O operador seleciona as cores associando aos 16 cones de linha instalados na máquina e define o tipo de tecido no sistema Acti-Feed (como sarja, malha ou couro).",
      "3. O tecido é montado no bastidor e travado no braço pantográfico cilíndrico estreito.",
      "4. O feixe laser duplo confere o centro e o ângulo exato do bordado.",
      "5. A máquina inicia a costura: o sistema Acti-Feed calcula instantaneamente a espessura do material e desenrola apenas a quantidade exata de fio superior necessária para cada ponto.",
      "6. Em caso de quebra ou término de linha, apenas aquela máquina modular específica pausa, enquanto as outras máquinas da mesma rede continuam bordando normalmente sem parar a produção."
    ],
    "beginnerExplanation": "A Melco é famosa por ser uma das máquinas industriais mais fáceis e inteligentes de mexer no mundo! Sabe aqueles vários botões de rosquear que as máquinas comuns têm para regular a tensão da linha? Na Melco eles não existem! Ela tem uma tecnologia chamada Acti-Feed, onde um microcomputador calcula a espessura do tecido e solta a quantidade exata de linha que a agulha precisa para dar o ponto perfeito. Além disso, ela tem 16 agulhas e pode ser ligada em rede: você começa com uma máquina e vai adicionando outras conforme seu negócio for crescendo!",
    "applications": [
      "Bordados em bonés montados estruturados de alta curvatura com velocidade de até 1.200 PPM",
      "Personalização sob demanda em ateliês e quiosques de shopping com flexibilidade de 16 cores",
      "Bordado em pequenos bolsos montados, mangas e luvas devido ao braço cilíndrico super fino",
      "Produção seriada em redes modulares (onde cada máquina pode bordar uma peça ou cor diferente)",
      "Bordados em peças delicadas ou elásticas (malhas dry-fit e sedas) com controle de tensão Acti-Feed"
    ],
    "mainTypes": [
      "Melco EMT16X: A geração topo de linha atual com 16 agulhas, velocidade de 1.500 PPM e novo sistema de corte",
      "Melco EMT16: Geração consagrada em milhares de ateliês industriais pelo mundo",
      "Melco Amaya (XT / Bravo): A lendária máquina precursora que introduziu a tecnologia modular e o Acti-Feed",
      "Melco Bravo: Versão simplificada para pequenos empreendedores e ateliês de personalização de presentes"
    ],
    "recommendedSettings": {
      "speedPPM": "1.000 a 1.200 PPM para cruzeiro em peças normais; até 1.500 PPM em retas tatami e 900 PPM em bonés",
      "needleType": "Sistema industrial DBxK5 (tamanhos 70/10 para malhas finas até 90/14 para bonés e sarjas)",
      "stabilizer": "Entretela rasgável de 60g/m² a 80g/m² ou entretela de recorte para malhas esportivas"
    },
    "advantages": [
      "✔ Sistema Acti-Feed automático patenteado que elimina completamente os ajustes manuais de tensão",
      "✔ Conjunto amplo de 16 agulhas/cores, reduzindo ao mínimo a necessidade de trocar cones de linha",
      "✔ Conceito modular: se uma máquina da rede quebrar uma linha, as outras continuam produzindo sem interrupção",
      "✔ Braço cilíndrico extremamente fino que facilita bordar em áreas apertadas onde outras máquinas não entram"
    ],
    "limitations": [
      "Depende de conexão com computador executando o software Melco OS para envio e controle de produção.",
      "Requer que o operador compreenda os parâmetros digitais do Acti-Feed no computador para tecidos muito elásticos."
    ],
    "commonErrors": [
      "❌ Selecionar o perfil errado de tecido no Acti-Feed (ex: deixar ajustado para couro ao bordar uma malha fina de algodão, soltando linha em excesso).",
      "❌ Passar a linha fora dos roletes motorizados do Acti-Feed, impedindo o tracionamento controlado do fio.",
      "❌ Desligar o cabo de rede Ethernet ou fechar o software Melco OS no meio da transmissão da matriz.",
      "❌ Não fazer a calibração periódica da espessura do tecido (Material Thickness Test) ao trocar para tecidos com espuma 3D."
    ],
    "troubleshootingTips": [
      "Linha de bobina subindo para cima do bordado: Aumente o valor do Acti-Feed (Auto Lower Limit) em 2 ou 3 pontos no software Melco OS para soltar mais linha superior.",
      "Bordado fofo ou com laçadas visíveis no direito: Reduza o valor do Acti-Feed no painel do computador para tornar a alimentação de linha mais firme.",
      "Máquina não comunica com o computador: Verifique se o cabo de rede Ethernet está conectado e se o endereço IP da máquina está sincronizado no Melco OS."
    ],
    "dicaArtrelados": "Na Melco, o grande pulo do gato é dominar o Acti-Feed! Para tecidos normais como piquê e algodão, deixe a configuração em 'Auto'. Mas quando for bordar bonés estruturados ou bordados 3D com EVA, defina o limite inferior manual (Lower Limit) em torno de 4 a 6 pontos a mais: isso dá a folga exata para a linha abraçar a espessura do boné sem puxar o tecido e sem quebrar!",
    "voceSabia": "A Melco foi a criadora do primeiro sistema computadorizado de digitalização de bordado do mundo em 1972! Antes da Melco, não existiam computadores para desenhar bordados: os artesãos precisavam desenhar os pontos à mão em papel quadriculado gigante e perfurar fitas de papel cartão com socadores manuais!",
    "practicalExercise": "Ajuste fino do Acti-Feed: No software Melco OS, selecione um padrão de teste de letras pequenas de 1 cm. Borde a primeira amostra no modo 'Auto Acti-Feed'. Depois, borde uma segunda amostra alterando o parâmetro em +3 pontos. Vire as duas peças do avesso e compare a perfeição do balanceamento da linha de bobina no verso de cada letra!",
    "quickSummary": "Fabricante norte-americana pioneira e revolucionária em máquinas industriais modulares de 16 agulhas (EMT16X), famosa pelo sistema Acti-Feed sem tensores manuais e velocidade de 1.500 PPM.",
    "relatedTerms": [
      "Tajima",
      "Barudan (Máquinas de Bordado Eletrônico)",
      "Typical (Máquinas de Bordado Eletrônico)",
      "Formato EXP",
      "Agulha DBxK5",
      "Bastidor de Boné",
      "Velocidade PPM",
      "Tensão de Linha"
    ],
    "tags": [
      "m-101",
      "melco",
      "maquinas",
      "equipamento",
      "emt16x",
      "actifeed",
      "modular",
      "industrial",
      "ofm",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MELCO INTERNATIONAL LLC. Melco EMT16X Operator Manual & Acti-Feed System Reference. Denver: Melco, 2023.",
      "MELCO INTERNATIONAL LLC. DesignShop v12 Digitizing & Melco OS Network Operations. Denver, 2024.",
      "ARTRELADOS. A Revolução da Tensão Digital: Como Opera o Sistema Acti-Feed no Bordado Moderno. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "m-102-mola-tira-fio-mola-de-compensacao-check-spring",
    "code": "M-102",
    "term": "Mola Tira-Fio / Mola de Compensação (Check Spring / Take-Up Spring)",
    "pronunciation": "mó-la ti-ra-fi-o / mó-la de com-pen-sa-ção (tché-ki sprin-gui)",
    "letter": "M",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Originada na engenharia mecânica das primeiras máquinas de costura e bordado industrial do século XIX (Singer e Wheeler & Wilson). Foi aperfeiçoada no século XX pelos fabricantes japoneses (Tajima, Barudan e Brother) com a introdução de ligas de aço mola temperado de altíssima resistência à fadiga elástica contínua para suportar regimes de alta rotação acima de 1.000 PPM.",
    "summary": "Mola helicoidal de aço temperado com haste extensora integrada ao conjunto de tensão superior da máquina, responsável por absorver o chicoteamento da linha, manter o fio esticado durante a descida da agulha e estabilizar a formação do laço inferior na laçadeira.",
    "definition": "A Mola Tira-Fio (também denominada tecnicamente como Mola de Compensação, Mola Amortecedora de Tensão ou em inglês Check Spring / Thread Take-Up Spring) é um microcomponente mecânico de extrema precisão localizado junto ao disco do tensor superior de linha de máquinas de bordar domésticas, industriais e semi-industriais. Trata-se de uma mola espiral de arame de aço carbono calibrado dotada de uma haste móvel em formato de gancho ou arco que oscila contra um batente fixo. Sua função primária e vital é amortecer a inércia da linha no instante em que a alavanca estica-fio desce repentinamente para liberar fio para a agulha, impedindo que a linha forme uma laçada frouxa antes da penetração no tecido e garantindo que a linha permaneça sob leve tensão controlada até o momento exato em que a ponta da agulha entra no tecido e a laçadeira engata o laço inferior.",
    "technicalDetails": "Fabricada em aço-mola fosfatizado ou niquelado de alta resistência dinâmica à fadiga por torção (diâmetro do fio de aço entre 0,35 mm e 0,55 mm dependendo da classe da máquina). O curso mecânico de oscilação angular da haste da mola varia entre 5,0 mm e 9,0 mm antes do repouso no batente limitador. A força elástica de deflexão é calibrada entre 25 gf e 45 gf (gramas-força). Opera em sincronismo com a árvore de comando da laçadeira: quando a agulha atinge o ponto morto inferior (PMI) e sobe entre 1,8 mm e 2,2 mm para abrir o laço, a mola tira-fio deve atingir seu batente de descanso, transferindo a tensão integralmente para a laçadeira para evitar a perda do laço.",
    "construction": [
      "Corpo Helicoidal Interno: Espiral cilíndrica de torção que se aloja dentro do tubo do eixo do conjunto de tensão superior",
      "Haste Oscilante Externa: Braço longo de arame polido com terminação curva por onde a linha superior passa apoiada",
      "Pino Batente de Fim de Curso: Limitador mecânico metálico que restringe a descida máxima da haste da mola",
      "Anel Excêntrico de Regulagem: Cilindro fendido que permite girar o corpo da mola para endurecer ou suavizar a pressão elástica",
      "Porca ou Parafuso de Bloqueio: Trava micrométrica que fixa o eixo do tensor na carcaça do cabeçote da máquina"
    ],
    "howItWorks": [
      "1. A linha sai do cone, passa pelos guias de linha superiores e entra entre os pratinhos de tensão metálicos.",
      "2. Ao sair dos pratinhos, a linha engata na haste curva da mola tira-fio antes de subir para a alavanca do estica-fio.",
      "3. Quando a máquina inicia o ciclo de ponto, o estica-fio desce bruscamente: a mola tira-fio se flexiona para cima, recolhendo instantaneamente a folga de linha.",
      "4. Conforme a agulha desce em direção ao tecido, a mola acompanha o movimento mantendo a linha perfeitamente esticada sem chicotear.",
      "5. No instante em que a ponta da agulha toca o tecido, a haste da mola encosta no seu batente metálico inferior e para de descer.",
      "6. Com a mola parada, a linha fica imóvel e a laçadeira captura o laço perfeitamente formado embaixo da chapa, gerando o ponto com laçamento firme!"
    ],
    "beginnerExplanation": "A Mola Tira-Fio é como se fosse o 'amortecedorzinho invisível' da linha da sua máquina de bordar! Sabe aquele araminho fininho e delicado que parece um bigodinho de gato que fica pulando alegremente para cima e para baixo ali perto dos discos onde a linha passa? É ela! Quando a máquina está bordando a 800 pontos por minuto, a linha dá trancos fortíssimos a cada segundo. Se não fosse essa molinha elástica puxando a linha de volta toda vez que ela fica frouxa, a linha embolaria toda na ponta da agulha antes mesmo de furar o pano, criando aqueles bolos horríveis de linha embaixo do bastidor!",
    "applications": [
      "Estabilização dinâmica da linha em velocidades industriais e domésticas de 400 a 1.200 PPM",
      "Prevenção absoluta de laçadas frouxas e nós na descida da agulha ao bordar pontos cheios largos",
      "Controle de amortecimento para linhas delicadas que quebram facilmente por estresse térmico e mecânico (como fios metálicos e rayon)",
      "Uniformização da laçada em tecidos volumosos como toalhas felpudas, piquet e malhas elásticas",
      "Ajuste da firmeza do ponto no avesso do bordado em conjunto com a caixa de bobina"
    ],
    "mainTypes": [
      "Mola Tira-Fio Externa de Cabeçote Único (Doméstica): Encontrada em máquinas Brother, Janome e Singer, com mola semiexposta próxima ao estica-fio",
      "Mola Tira-Fio de Cartucho / Sub-Tensor (Industrial): Módulo encapsulado individual para cada agulha em máquinas Tajima, Barudan, SWF e Bai",
      "Mola Tira-Fio de Alta Tensão: Arame mais grosso calibrado para linhas pesadas de calçados, couros e estofados",
      "Mola Tira-Fio Macia de Baixa Tensão: Arame ultrafino desenvolvido para linhas de poliamida fina e fios metálicos brilhantes"
    ],
    "recommendedSettings": {
      "speedPPM": "Projetada para responder instantaneamente a oscilações mecânicas de 400 a 1.200 ciclos por minuto",
      "needleType": "Compatível com agulhas domésticas cabo chato (130/705 H) e industriais de cabo redondo (DBxK5)",
      "stabilizer": "Adequada para todas as categorias de entretelas (rasgáveis, hidrossolúveis e filmes plásticos)"
    },
    "advantages": [
      "✔ Elimina o chicoteamento da linha e a oscilação livre do fio entre o tensor superior e o olho da agulha",
      "✔ Garante que o laço inferior seja formado com formato e tamanho perfeitamente idênticos a cada fração de segundo",
      "✔ Protege os fios metálicos e linhas frágeis contra rompimentos bruscos causados pelo tranco do estica-fio",
      "✔ Melhora a estética visual do bordado, deixando a superfície acetinada sem pontinhos frouxos ou desfiados"
    ],
    "limitations": [
      "Componente sujeito a desgaste físico e fadiga elástica após milhões de pontos bordados, exigindo substituição periódica.",
      "Extremamente vulnerável a puxões bruscos de linha na direção errada durante a passagem manual de linha pela bordadeira."
    ],
    "commonErrors": [
      "❌ Puxar a linha do cone para trás com força ao despassar a máquina, entortando ou quebrando o arame da mola tira-fio.",
      "❌ Permitir o acúmulo de cera de linha, cola de entretela adesiva e poeira dentro do eixo da mola, travando o seu movimento.",
      "❌ Regular a pressão da mola excessivamente dura, fazendo com que a linha arrebente assim que a agulha tenta penetrar no tecido.",
      "❌ Regular a mola sem pressão alguma (solta), permitindo que a linha forme alças frouxas no avesso do bordado."
    ],
    "troubleshootingTips": [
      "Bordado formando alças e laçadas frouxas no avesso sem motivo aparente: Verifique se a mola tira-fio está se movimentando livremente; se ela estiver travada para baixo ou caída, desmonte o conjunto do tensor e faça a limpeza ou troca.",
      "Linha quebrando constantemente logo após o corte ou na troca de cor: A mola tira-fio pode estar com o curso muito curto, dando tranco excessivo no início do ponto; ajuste o anel limitador para aumentar o curso em 2 mm.",
      "Fio metálico desfiando antes de chegar na agulha: Alivie a pressão da mola tira-fio girando o eixo do tensor levemente no sentido anti-horário para torná-la mais macia."
    ],
    "dicaArtrelados": "Quer saber se a sua mola tira-fio está viva e saudável em menos de 5 segundos? Com a máquina desligada e a linha passada, puxe a linha com a mão logo acima do olho da agulha: a molinha tem que descer suavemente e, assim que você soltar a linha, ela deve 'pular' de volta para cima instantaneamente com energia! Se ela demorar para subir, ficar emperrada no meio do caminho ou estiver caída sem força, passe um pedaço de fio dental sem cera entre os discos e ao redor da mola para tirar fiapos velhos ou chame o técnico para trocá-la!",
    "voceSabia": "Em um bordado de tamanho médio com 40.000 pontos bordado em uma máquina a 800 PPM, a haste dessa pequenina mola de arame sobe, desce e amortece a linha nada menos que 40.000 vezes em apenas 50 minutos! Ela é uma das peças mecânicas que mais se movimenta em todo o planeta, trabalhando incansavelmente para que cada pontinho do seu bordado fique impecável!",
    "practicalExercise": "Diagnóstico Visual da Mola Tira-Fio em Funcionamento: Coloque a sua máquina para bordar um pedaço de retalho em velocidade lenta (400 PPM). Fique olhando atentamente para a frente do cabeçote, na altura do conjunto de tensão. Observe como a molinha tira-fio pula em perfeita sincronia com o estica-fio: a cada descida da agulha ela recolhe a linha frouxa. Se você notar que em alguma agulha ela não se mexe, você acabou de descobrir por que aquela cor vivia arrebentando linha!",
    "quickSummary": "Mola elástica helicoidal integrada ao tensor superior que amortece o tranco da linha, recolhe folgas e estabiliza a formação do laço inferior na laçadeira durante a rotação da máquina.",
    "relatedTerms": [
      "Conjunto de Tensão Superior",
      "Estica-Fio",
      "Laçadeira Rotativa",
      "Caixa de Bobina",
      "Quebra de Linha",
      "Tempo da Máquina de Bordar",
      "Velocidade PPM"
    ],
    "tags": [
      "m-102",
      "mola-tira-fio",
      "mola-compensacao",
      "check-spring",
      "tensor",
      "estica-fio",
      "mecanica",
      "manutencao",
      "pecas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA GROUP. Industrial Embroidery Machine Maintenance & Tension Adjustment Manual. Nagoya: Tajima, 2023.",
      "BROTHER INDUSTRIES, LTD. Technical Service Manual: Upper Thread Tension Assembly & Check Spring Calibration. Nagoya, 2022.",
      "ARTRELADOS. A Mecânica Invisível do Bordado: Segredos, Ajustes e Diagnóstico da Mola Tira-Fio. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  },
  {
    "id": "m-103-mola-de-compressao-do-pe-calcador-amortecedor",
    "code": "M-103",
    "term": "Mola de Compressão do Pé Calcador e Amortecedor (Presser Foot Spring & Cushion Assembly)",
    "pronunciation": "mó-la de com-pres-são do pé cal-ca-dor e a-mor-te-ce-dor (pré-sser fut spring end cú-shon as-sém-bli)",
    "letter": "M",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Concebida no final do século XIX nas primeiras máquinas de costura industrial e aperfeiçoada no pós-guerra pela indústria mecatrônica japonesa e alemã (Tajima, ZSK, Brother e Pfaff) para suportar os impactos verticais em altíssimas rotações (acima de 800 PPM), eliminando a flutuação do tecido (flagging) e amortecendo os choques contra o leito da máquina.",
    "summary": "Mola helicoidal de aço temperado e anel amortecedor de poliuretano montados na haste vertical do pé calcador que exercem pressão descendente precisa no momento da penetração e recuo da agulha, impedindo que o tecido suba junto com o fio e estabilizando a formação do laço inferior.",
    "definition": "A Mola de Compressão do Pé Calcador e seu Amortecedor Elastômero (Presser Foot Spring & Cushion Assembly) compõem o sistema de retenção dinâmica do tecido no cabeçote de bordado eletrônico. Diferente das máquinas de costura convencionais — onde o calcador fica continuamente abaixado e arrastando sobre o tecido —, no bordado computadorizado o pé calcador salta ritmicamente em sincronia com a barra de agulha (movimento 'hop'). A mola de compressão é um elemento elástico helicoidal de aço de alta resiliência posicionado ao redor da haste do calcador, delimitado por um colar de ajuste superior e um anel amortecedor de borracha nitrílica ou poliuretano na base. Sua função primordial é aplicar uma força elástica descendente instantânea e calibrada (tipicamente entre 150 g e 400 g de pressão) sobre o pé calcador exatamente na fração de segundo em que a agulha atinge o Ponto Morto Inferior e começa a sua ascensão de 2 mm. Essa pressão mecânica impede o 'efeito de flutuação' (flagging) — fenômeno em que a elasticidade do tecido o faz subir colado à lâmina da agulha —, garantindo que o tecido permaneça perfeitamente imóvel e rente à chapa para que a laçadeira rotativa capture a alça da linha com tolerância zero de erro.",
    "technicalDetails": "Fabricada em fio de aço-mola fosfatado ou aço inoxidável temperado com constante elástica (k) rigorosamente calibrada entre 1,8 N/mm e 3,5 N/mm, dependendo da classe da máquina (doméstica leve ou industrial pesada). A mola suporta ciclos de compressão contínua de até 20 Hz (1.200 batidas por minuto) sem perder a memória elástica. O anel amortecedor (cushion washer) de poliuretano ou borracha termoplástica de dureza 70 a 85 Shore A absorve o impacto do retorno da haste do calcador, reduzindo o ruído mecânico do cabeçote em até 6 dB e impedindo a transmissão de microvibrações harmônicas que possam descalibrar os sensores ópticos superiores.",
    "construction": [
      "Mola Helicoidal de Compressão (Helical Spring): Corpo em espiral de aço temperado com extremidades retificadas planas para assentamento uniforme",
      "Anel Amortecedor de Impacto (Cushion Washer / Rubber Stopper): Arruela de poliuretano de alta densidade que dissipa a energia de choque do calcador",
      "Haste Vertical do Pé Calcador (Presser Foot Bar): Eixo de aço polido que guia o deslizamento coaxial da mola e sustenta a sapata inferior",
      "Colar de Pré-Carga com Parafuso Sextavado (Spring Collar): Anel limitador que permite elevar ou baixar a compressão inicial da mola",
      "Bucha Guia do Calcador: Mancal de bronze ou bucha plástica autolubrificante cravada no bloco do cabeçote",
      "Sapata Circular de Contato (Presser Foot Ring): Extremidade inferior em anel aberto ou fechado que prensa o tecido ao redor do orifício da agulha"
    ],
    "howItWorks": [
      "1. A barra de agulha inicia a descida em alta velocidade empurrada pela biela central.",
      "2. O came mecânico aciona a haste do pé calcador, que desce antes da agulha atingir o tecido.",
      "3. O anel inferior do pé calcador toca o tecido e a haste para momentaneamente; a descida contínua do cabeçote comprime a Mola de Compressão.",
      "4. A agulha fura o tecido, atravessa a entretela e alcança o Ponto Morto Inferior (PMI).",
      "5. Quando a agulha inicia a subida de 2 milímetros, o tecido tenta ser puxado para cima pelo atrito da linha e da agulha.",
      "6. A Mola de Compressão reage instantaneamente, empurrando o pé calcador contra o tecido com força firme e mantendo o pano colado na chapa.",
      "7. A laçada perfeita se forma embaixo, a ponta da laçadeira captura a linha e, logo em seguida, a haste sobe e o anel amortecedor absorve o impacto suavemente sem barulho metálico!"
    ],
    "beginnerExplanation": "A Mola do Pé Calcador é como se fosse o 'dedinho protetor' da máquina que segura o pano na hora certa! Você já tentou puxar uma agulha de dentro de um pano grosso e sentiu que o pano quer vir junto grudado na agulha? Na máquina de bordar é a mesma coisa: se o pano subir junto com a agulha, a linha embola lá embaixo e a máquina dá ponto pulado! É aí que essa mola entra em ação: toda vez que a agulha fura e vai subir, a mola aperta o pezinho da máquina com firmeza contra o tecido para o pano não levantar nem um milímetro! E a borrachinha amortecedora serve para que o pezinho não fique batendo com barulho de 'martelo' no ferro da máquina!",
    "applications": [
      "Eliminação absoluta do efeito de flutuação do tecido (flagging) em malhas elásticas, piquet e tecidos flexíveis",
      "Prevenção contra a quebra de agulhas provocada pelo levantamento do tecido e deflexão da lâmina",
      "Garantia de laçadas inferiores nítidas e uniformes na laçadeira rotativa em velocidades de 600 a 1.200 PPM",
      "Amortecimento acústico e dissipação de ondas de choque metálicas no interior do cabeçote de bordado",
      "Estabilização de bordados 3D com EVA espesso, mantendo a espuma firme sem deformar a peça"
    ],
    "mainTypes": [
      "Mola de Compressão Cilíndrica Padrão (Mais comum): Espiral cilíndrica uniforme usada em máquinas Brother, Janome, Sun Special e Tajima",
      "Mola de Compressão Cônica Progressiva: Molas cônicas que oferecem resistência progressiva suave no início e rígida no final do curso",
      "Conjunto de Calcador com Amortecedor Hidráulico / Mola Dupla: Utilizado em cabeçotes industriais alemães de altíssima performance (ZSK)",
      "Sistema de Calcador Eletrônico Ajustável por Motor (Digital Foot): Sistema moderno onde um motor de passo substitui a pré-carga mecânica da mola"
    ],
    "recommendedSettings": {
      "speedPPM": "Calibrada para responder com estabilidade milissegunda em rotações contínuas de 400 a 1.200 PPM",
      "needleType": "Universal para todas as espessuras de agulha (65/9 a 100/16)",
      "stabilizer": "Vital para manter tecidos finos e flexíveis colados em entretelas hidrossolúveis e rasgáveis"
    },
    "advantages": [
      "✔ Previne o descalibramento do laço inferior, erradicando falhas de ponto em tecidos difíceis",
      "✔ Anel amortecedor de poliuretano que reduz drasticamente o ruído e o estresse mecânico no cabeçote",
      "✔ Resposta elástica instantânea que acompanha o ritmo vertiginoso de até 20 batidas por segundo",
      "✔ Permite regular a altura e a pressão do calcador para bordar desde organza ultrafina até toalhas felpudas e jaquetas grossas"
    ],
    "limitations": [
      "Com o passar dos anos e milhões de batidas, a mola sofre fadiga mecânica e perde a força de expansão original.",
      "O anel amortecedor de borracha resseca, racha e esfarela com o calor e a poeira têxtil, aumentando o ruído da máquina."
    ],
    "commonErrors": [
      "❌ Deixar o anel amortecedor de borracha se desgastar até o calcador bater ferro com ferro contra o cabeçote.",
      "❌ Regular o colar da mola com pressão excessiva ao bordar tecidos aveludados, deixando marcas permanentes de esmagamento no tecido.",
      "❌ Regular a mola frouxa demais ao bordar bonés estruturados ou couro, fazendo o tecido subir junto com a agulha e quebrar o fio.",
      "❌ Utilizar molas de caneta ou molas genéricas de dureza inadequada em substituição à peça original de fábrica."
    ],
    "troubleshootingTips": [
      "A máquina está fazendo um 'tec-tec-tec' muito alto e estalado no cabeçote a cada descida da agulha: O anel amortecedor de poliuretano (cushion washer) se rompeu ou esfarelou; substitua o anel de borracha na haste do calcador para restaurar o amortecimento silencioso.",
      "Pontos pulados frequentes apenas em tecidos elásticos (como lycra ou malha fria) sem que a linha arrebente: A mola de compressão do calcador está fraca ou com altura muito alta, permitindo que a malha suba junto com a agulha (flagging); abaixe a regulagem da altura do calcador em 0,5 mm para aumentar a pressão sobre o tecido.",
      "Bordado deixando um anel amassado e brilhoso em volta de cada flor em tecidos de veludo ou microfibra: A pressão da mola está excessiva; afrouxe ligeiramente o colar de ajuste superior para diminuir a carga da mola sobre o tecido."
    ],
    "dicaArtrelados": "Está bordando aquela toalha grossa de banho bem felpuda ou um tecido com espuma 3D e percebeu que a máquina começou a dar pulo de ponto ou fazer um barulho estalado? Faça o 'Ajuste do Milímetro de Ouro' da Artrelados: com a máquina desligada e a agulha no Ponto Morto Inferior (lá no fundo do curso), afrouxe o parafuso de regulagem da haste do pé calcador e deixe ele descer até tocar a felpa da toalha sem esmagar o tecido, mantendo uma pressão firme da mola. Você vai ver que a toalha para de pular, a agulha entra macia e o laço embaixo fica tão perfeito que parece uma pintura!",
    "voceSabia": "Em um bordado médio de 25.000 pontos bordado a 800 PPM, essa pequena mola de compressão é esmagada e liberada exatamente 25.000 vezes em pouco mais de meia hora! O aço de alta resiliência utilizado nessas molas é o mesmo grau de liga metálica empregado nas molas de válvulas de motores de corrida de Fórmula 1, projetado para suportar milhões de compressões sem perder a sua elasticidade milimétrica!",
    "practicalExercise": "Diagnóstico do Amortecedor e Elasticidade da Mola: Com a máquina desligada e o bastidor retirado, pegue a sapata do pé calcador com a ponta dos dedos e empurre-a para cima contra a resistência da mola. Sinta a força: ela deve subir oferecendo uma resistência elástica suave e firme e, ao soltá-la, deve retornar para baixo imediatamente com um toque macio e silencioso. Se você ouvir uma pancada seca de metal contra metal, o anel amortecedor precisa de troca; se a volta for lenta ou arranhada, uma gotinha de óleo mineral na haste resolverá na hora!",
    "quickSummary": "Mola helicoidal de aço e arruela amortecedora que aplicam pressão dinâmica sobre o pé calcador na subida da agulha, evitando a flutuação do tecido e silenciando o cabeçote.",
    "relatedTerms": [
      "Calcador de Bordado",
      "Barra de Agulha e Bucha Guia",
      "Laçadeira Rotativa",
      "Efeito Flagging (Flutuação do Tecido)",
      "Ponto Morto Inferior (PMI)",
      "Velocidade PPM"
    ],
    "tags": [
      "m-103",
      "mola-do-calcador",
      "presser-foot-spring",
      "amortecedor",
      "flagging",
      "calcador",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Presser Foot Mechanism, Spring Tension and Hop Timing Calibration. Nagoya: Tajima, 2023.",
      "ZSK STICKMASCHINEN GMBH. Mechanical Head Components: Presser Foot Cushion Dampers & Springs. Krefeld, 2022.",
      "ARTRELADOS. O Segredo do Calcador Perfeito: Ajuste de Altura, Amortecimento e Eliminação do Efeito Flagging. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  },
  {
    "id": "m-104-mola-tensao-retorno-pega-fio-tensor-check-spring",
    "code": "M-104",
    "term": "Mola de Tensão de Retorno / Mola Pega-Fio do Tensor (Check Spring / Take-Up Spring)",
    "pronunciation": "mó-la de ten-são de re-tór-no / mó-la pé-ga fío do ten-sór (tchék sprin / têik-ap sprin)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Criada nos primórdios da evolução das máquinas de costura industriais de ponto fixo no final do século XIX para estabilizar o fio superior sob velocidades crescentes. No bordado computadorizado moderno (Tajima, Barudan, Brother, Janome), tornou-se o elemento de ajuste fino mais sensível do bloco tensor para permitir o uso seguro de fios difíceis (fios metalizados, poliamida ultra-fina e poliéster de alta torção).",
    "summary": "Mola espiral de torção em arame de aço temperado montada no bloco do tensor principal, com uma haste externa curva que oscila verticalmente a cada ponto, mantendo uma suave tensão elástica contínua sobre a linha superior até a agulha penetrar no tecido.",
    "definition": "A Mola de Tensão de Retorno e Estabilização do Tensor (universalmente conhecida como Check Spring, Thread Take-Up Spring, Mola Pega-Fio Auxiliar ou Mola Amortecedora de Tensão) é o microcomponente mecânico de alta precisão instalado coaxialmente no conjunto de discos do tensor superior da máquina de bordar eletrônica. Sua função cinemática essencial ocorre entre a descida da alavanca pega-fio e a penetração da agulha no tecido: quando a alavanca pega-fio principal desce com extrema velocidade para ceder linha à laçadeira inferior, a linha superior tenderia a ficar flácida e desgovernada no ar entre os tensores e o olho da agulha; a haste da Check Spring atua justamente nesse instante, flexionando-se para cima e recolhendo instantaneamente qualquer excesso de folga residual de linha até que a ponta da agulha entre firmemente no tecido. Assim que a agulha perfura o material e a alavanca puxa o nó, a linha vence a resistência da mola, puxando-a para baixo até encostar no seu batente mecânico ajustável. Essa ação elástica constante (com curso vertical de 5 mm a 8 mm e força de 5 a 15 gf) impede que o fio superior forme laços mortos (loops), evita que a linha pule para fora dos discos tensores em paradas bruscas e protege fios frágeis (como linhas metalizadas douradas ou prateadas) contra estiramentos e rompimentos causados pelos trancos secos da alavanca pega-fio a 1.000 PPM.",
    "technicalDetails": "Confeccionada em arame trefilado de aço-carbono para molas temperado ASTM A228 (Music Wire) ou aço inoxidável AISI 302 com diâmetro de fio de 0,4 mm a 0,6 mm. Possui corpo com 3 a 5 espiras helicoidais internas que se alojam dentro do tambor ranhurado do eixo tensor e um braço saliente externo com terminação em gancho arredondado polido espelhado (Ra < 0,1 µm) para contato sem atrito. A tensão da mola é regulável girando o eixo tensor com chave de fenda (faixa de trabalho ideal de 8 a 12 gramas-força medida com tensiômetro de precisão), e a amplitude do curso de oscilação é calibrada pela posição angular do colar limitador excêntrico (Stop Plate) entre 5 mm e 8 mm de curso livre.",
    "construction": [
      "Braço Oscilante com Gancho de Apoio: Haste elástica curva por onde a linha superior passa apoiada ao sair dos discos de tensão",
      "Corpo Espiral Helicoidal de Torção: 3 a 5 voltas de arame de aço de altíssima resiliência que armazenam a energia elástica",
      "Ponta de Ancoragem Interna: Extremidade reta que se encaixa no rasgo do pino ranhurado do eixo tensor",
      "Eixo Ranhurado e Parafuso de Bloqueio: Pino central que permite girar e calibrar a pré-carga de torção da mola",
      "Batente Limitador de Curso (Stop Plate): Chapa metálica excêntrica ajustável que define exatamente onde a mola para de descer",
      "Manga Protetora de Teflon / Arruela Guia: Espaçador antiatrito que mantém a mola alinhada sem raspar nos discos tensores"
    ],
    "howItWorks": [
      "1. A linha superior sai dos discos do tensor e passa por cima do gancho da Mola de Retorno (Check Spring).",
      "2. A alavanca pega-fio desce para fornecer linha à laçadeira inferior embaixo da chapa.",
      "3. Conforme a linha afrouxa, a mola sobe suavemente, mantendo o fio levemente esticado e guiado em linha reta.",
      "4. A ponta da agulha perfura o tecido com a linha perfeitamente controlada, sem nenhuma folga solta.",
      "5. No instante em que a agulha penetra o tecido, a linha puxa a Check Spring para baixo até ela encostar no batente.",
      "6. A alavanca pega-fio sobe como um raio para fechar o nó; a mola permanece firme no batente sem atrapalhar a puxada.",
      "7. Esse ciclo se repete perfeitamente a cada rotação, evitando laçadas frouxas e rompimentos de fios sensíveis!"
    ],
    "beginnerExplanation": "A Mola de Tensão de Retorno (ou Check Spring) é o 'amortecedor elástico da linha' da sua máquina de bordar! Já percebeu uma molinha fininha com um bracinho de arame que fica pulando para cima e para baixo bem ali onde você passa a linha nos discos de tensão? Ela faz um trabalho de ouro: quando a máquina está bordando a toda velocidade, a linha quer ficar chicoteando e dançando no ar; essa molinha inteligente segura a linha com carinho e recolhe a folga bem na hora em que a agulha vai furar o pano. Se essa molinha quebrar ou perder a força, a linha fica frouxa, faz laçadas feias parecendo 'argolinhas' em cima do bordado, ou pior: arrebenta toda hora com trancos secos, principalmente se for linha dourada metálica! Cuidar dessa molinha é o grande segredo para bordar com linhas metalizadas sem nenhum estresse!",
    "applications": [
      "Recolhimento instantâneo da folga de linha superior antes da agulha penetrar no tecido",
      "Prevenção absoluta de laçadas frouxas (loops) e nós na face superior do bordado",
      "Amortecimento elástico dos trancos da alavanca pega-fio em linhas frágeis e metalizadas",
      "Estabilização da passagem do fio em altas rotações industriais (de 800 a 1.200 PPM)",
      "Garantia de que a linha superior não salte para fora dos discos tensores durante cortes e saltos de ponto"
    ],
    "mainTypes": [
      "Check Spring em Espiral Interna (Padrão Industrial): Montada dentro do tambor do eixo tensor (padrão Tajima e Barudan)",
      "Check Spring Frontal Exposta (Padrão Doméstico/Semi-Industrial): Visível na lateral do tensor com ajuste por mola externa (Janome/Brother)",
      "Check Spring de Alta Flexibilidade para Fio Metálico: Arame mais fino (0,4 mm) com menor resistência para proteger fios delicados",
      "Check Spring Reforçada para Linha Grossa de Cordão: Arame de 0,6 mm para costura de linhas pesadas de algodão ou ponto chenille"
    ],
    "recommendedSettings": {
      "speedPPM": "Projetada para oscilar perfeitamente em velocidades de 0 a 1.200 PPM sem fadiga mecânica",
      "needleType": "Universal para todas as agulhas",
      "stabilizer": "Universal para todas as entretelas"
    },
    "advantages": [
      "✔ Elimina 100% dos 'pelinhos' e argolinhas de linha frouxa que surgem na superfície do bordado",
      "✔ Permite bordar com linhas metálicas douradas e prateadas na velocidade máxima sem quebrar o fio",
      "✔ Ajuste duplo: calibragem de curso (milímetros) e calibragem de força (gramas-força)",
      "✔ Construção em aço-mola de alta durabilidade que suporta centenas de milhões de oscilações"
    ],
    "limitations": [
      "Se a mola quebrar a pontinha do gancho, a linha passa direto e os pontos cheios ficam cheios de laçadas soltas.",
      "Uma mola com força excessiva repuxa a linha antes da descida da agulha, entortando a agulha em tecidos grossos."
    ],
    "commonErrors": [
      "❌ Passar a linha sem engatar na haste da mola tensora, deixando o fio livre e sem amortecimento.",
      "❌ Deixar a mola com a haste travada embaixo no batente sem nenhuma folga para oscilar para cima.",
      "❌ Entortar a haste da mola com alicate ou tesoura durante a limpeza de fiapos no bloco tensor.",
      "❌ Apertar a pressão da mola no máximo achando que vai resolver problema de tensão de bobina."
    ],
    "troubleshootingTips": [
      "O bordado está ficando com pequenas 'laçadas' ou pontinhos frouxos de linha na frente do tecido: A mola Check Spring perdeu a força elástica ou quebrou a ponta; gire o eixo do tensor para dar mais pré-carga na mola ou substitua a mola de retorno.",
      "A linha metalizada dourada arrebenta toda vez que a máquina atinge 600 PPM: A mola Check Spring está com o curso muito curto ou com pressão muito dura, dando trancos secos no fio metálico; afrouxe a tensão da mola para cerca de 8 gf e aumente o curso para 8 mm.",
      "A mola não se move e fica presa no fundo: Há fiapos de linha e cera de lubrificação acumulados dentro do tambor da mola; desmonte o conjunto tensor, limpe o tambor com álcool isopropílico e remonte."
    ],
    "dicaArtrelados": "Quer bordar aquele brasão dourado lindo com linha metálica sem a linha arrebentar nem uma vez? Anote o 'Segredo dos Oito Milímetros' da Artrelados: confira a sua Check Spring! A haste da mola deve ter um curso livre de exatamente 8 milímetros e deve ser tão macia que uma leve soprada quase faça ela se mexer (cerca de 8 a 10 gramas-força de resistência). Quando a agulha fura o tecido, a molinha deve tocar no batente exatamente no instante em que a ponta da agulha toca o tecido. Esse amortecimento suave é como uma suspensão de veludo que protege a linha metálica mais delicada do mundo!",
    "voceSabia": "A Check Spring é tão crucial para o equilíbrio dinâmico da costura que, em um bordado industrial longo de 100.000 pontos, ela sobe e desce exatamente 100.000 vezes! Por causa dessa fadiga extrema, os melhores fabricantes do mundo usam o mesmo aço 'Music Wire' empregado nas cordas dos pianos de cauda da orquestra sinfônica, capazes de vibrar sem perder o tom nem a elasticidade por décadas!",
    "practicalExercise": "Sentindo a Elasticidade da Check Spring com o Dedo: Com a máquina desligada e a linha passada, encoste suavemente a ponta do indicador na haste da mola Check Spring logo abaixo do disco tensor. Empurre-a suavemente para baixo e solte: sinta como ela desce macia até o batente de metal e, ao soltar, pula imediatamente para cima com vivacidade elástica. Esse movimento lépido e sem atrito é a assinatura de uma máquina regulada pela Artrelados!",
    "quickSummary": "Mola helicoidal de torção no bloco tensor que recolhe a folga do fio superior antes da agulha entrar no tecido, eliminando laçadas soltas e trancos em linhas metalizadas.",
    "relatedTerms": [
      "Tensor Superior e Discos de Tensão",
      "Alavanca Pega-Fio / Pescador de Linha Superior com Sensor de Ruptura (Thread Take-Up Lever & Breakage Sensor)",
      "Barra de Agulha e Bucha Guia",
      "Laçadas na Frente do Tecido (Top Loops)",
      "Linha Metálica",
      "Tensiômetro de Precisão"
    ],
    "tags": [
      "m-104",
      "mola-check-spring",
      "mola-pega-fio-tensor",
      "take-up-spring",
      "tensor-superior",
      "amortecedor-de-linha",
      "fio-metalico",
      "mecanica",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Upper Thread Tension Assembly, Check Spring Calibration & Stroke Adjustment Manual. Nagoya: Tajima, 2023.",
      "BARUDAN CO., LTD. Thread Tension Dynamics, Check Spring Tensioning for Metallic Threads. Ichinomiya, 2022.",
      "BROTHER INDUSTRIES, LTD. Thread Control Mechanisms and Check Spring Maintenance in Multi-Needle Machines. Nagoya, 2022.",
      "ARTRELADOS. A Dança Suave da Linha: Segredos da Check Spring, Linhas Metálicas e Ponto Perfeito. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  },
  {
    "id": "m-105-mola-retencao-linha-bobina-anti-giro-freio-bobbin-case",
    "code": "M-105",
    "term": "Mola de Retenção de Linha da Bobina / Mola Anti-Giro da Caixa de Bobina (Bobbin Case Anti-Spin Spring / Brake Spring)",
    "pronunciation": "mó-la de re-ten-ção de lí-nha da bo-bí-na / mó-la ân-ti jí-ro da cái-sha de bo-bí-na (bó-bin kêis ân-tai spin sprin / brêik sprin)",
    "letter": "M",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Criada com a aceleração dos sistemas de laçadeira rotativa industrial no Japão pela Towa, Koban e Hirose nas décadas de 1960 e 1970. Surgiu da necessidade crítica de frear a inércia rotativa da bobina metálica quando as máquinas saltavam de 400 PPM para mais de 1.000 PPM, eliminando o desenrolamento espontâneo de linha inferior nas paradas bruscas e cortes de linha.",
    "summary": "Disco côncavo circular ou estrela arqueada de aço-mola fosfatizado de baixíssima espessura instalado no fundo interno da caixa de bobina, atuando como um freio elástico constante que elimina o giro livre por inércia da carretilha nas paradas da máquina.",
    "definition": "A Mola de Retenção de Linha da Bobina e Dispositivo Anti-Giro da Caixa de Bobina (universalmente denominada Bobbin Case Anti-Spin Spring, Bobbin Brake Spring, Mola Aranha de Freio da Bobina ou Lâmina Estrela Anti-Inércia) é o microcomponente elástico montado no interior do copo da caixa de bobina metálica (padrão L ou M) na máquina de bordar computadorizada. Durante o bordado a alta rotação (de 800 a 1.200 PPM), a linha inferior é puxada em ciclos frenéticos de tração e folga. A carretilha (bobina de alumínio, aço ou plástico) atinge altíssimas velocidades de rotação angular; no instante em que a máquina executa um corte automático, uma desaceleração brusca ou um salto de ponto (Jump), o fornecimento de linha para de repente, mas a bobina continuaria girando desgovernada pela força centrífuga e inércia mecânica (fenômeno conhecido como 'Bobbin Spin' ou giro em falso). Esse giro residual desenrola vários centímetros de linha frouxa dentro da laçadeira, gerando o temido 'ninho de pássaro' (birdnesting) no avesso na retomada do próximo ponto ou fazendo a linha escapar da faca de corte. A mola anti-giro, posicionada no fundo da caixa, exerce uma pressão axial suave e permanente contra a face traseira da bobina: com suas abas elásticas levemente arqueadas para a frente, ela atua exatamente como uma pastilha de freio elástica contínua. Ela permite que a bobina gire livremente sob a tração ativa da linha, mas interrompe a rotação no mesmo milissegundo em que a tração cessa, garantindo tensão uniforme de 18 a 22 gf do primeiro ao último ponto do bordado.",
    "technicalDetails": "Estampada em lâmina ultrafina de aço inoxidável austenítico AISI 301 ou aço-mola de alto carbono C75 temperado com espessura de apenas 0,10 mm a 0,15 mm. Possui geometria circular com duas ou três orelhas arqueadas simétricas (tipo estrela de freio) e um orifício central com ranhura de trava que se encaixa no pino guia central do fundo da caixa de bobina sem rodar com a carretilha. O tratamento superficial por fosfatização negra ou polimento acetinado reduz o atrito excessivo com bobinas de alumínio usinado ou plástico. A força elástica de deflexão axial é calibrada para aplicar entre 3 e 5 gramas de resistência friccional estática, compensando inclusive a redução de peso da bobina conforme a linha vai se esgotando.",
    "construction": [
      "Corpo Circular Estampado com Abas Flexíveis: Disco fino de aço temperado com abas arqueadas que encostam na bobina",
      "Orelhas Elásticas Arqueadas de Fricção (Brake Petals): Lâminas curvadas para a frente que aplicam a frenagem suave e contínua",
      "Orifício Central de Encaixe no Pino: Abertura calibrada que abraça o eixo metálico central da caixa de bobina",
      "Dentes de Retenção Antirrotação: Travas que fixam a mola firmemente no fundo impedindo que ela gire junto com a carretilha",
      "Acabamento Fosfatizado / Antiatrito: Tratamento químico que evita o desgaste precoce e reduz o ruído metálico a 1.000 PPM",
      "Bordas Arredondadas Polidas: Extremidades sem cantos vivos para não riscar nem marcar a carretilha de alumínio"
    ],
    "howItWorks": [
      "1. A bordadeira insere a carretilha cheia dentro da caixa de bobina, prensando levemente a Mola Anti-Giro no fundo.",
      "2. A linha inferior passa pela ranhura e sob a mola tensora externa da caixa.",
      "3. Conforme a máquina costura a 1.000 PPM, a laçadeira puxa a linha inferior a cada volta.",
      "4. A tração da agulha vence a leve pressão da mola e a bobina gira perfeitamente solta e suave.",
      "5. A máquina atinge um comando de corte automático ou salto e para a barra de agulha em 10 milissegundos.",
      "6. A mola anti-giro freia a bobina instantaneamente, não permitindo que ela continue girando por inércia.",
      "7. A linha fica perfeitamente esticada e sob controle, pronta para o corte limpo da faca sem embolar no avesso!"
    ],
    "beginnerExplanation": "A Mola Anti-Giro é o 'freio de mão' da carretilha da sua máquina de bordar! Já percebeu que no fundinho da caixinha de ferro da bobina tem uma chapinha fininha de metal parecendo uma estrelinha prateada ou escura? Ela é super importante: quando a máquina está bordando a toda velocidade e para de repente para cortar a linha ou pular para outra letra, a carretilha lá dentro quer continuar rodando feito uma rodinha de bicicleta no ar. Se ela continuar rodando sozinha, ela desenrola um monte de linha solta dentro da máquina, e no próximo ponto essa linha solta embola tudo embaixo do tecido parecendo uma 'teia de aranha' horrível! Essa molinha no fundo encosta na carretilha e freia ela no segundo exato em que a máquina para. Se você perder essa molinha ou ela amassar, a sua máquina começa a embolar linha embaixo toda hora sem motivo aparente!",
    "applications": [
      "Frenagem instantânea da inércia da bobina em paradas de alta rotação e desacelerações bruscas",
      "Eliminação de ninhos de linha (birdnesting) e bolotas no avesso após paradas de corte",
      "Manutenção da tensão constante da linha da bobina mesmo quando a carretilha está quase no fim",
      "Estabilização do corte automático inferior, garantindo sobras de linha de 2,0 a 2,5 cm no avesso",
      "Prevenção do tremor e vibração axial da carretilha metálica dentro da caixa de bobina"
    ],
    "mainTypes": [
      "Mola Anti-Giro Padrão Circular com Duas Abas: O modelo mais comum em caixas de bobina industriais padrão L (Towa/Hirose)",
      "Mola Tipo Estrela de Três Pontas (Tri-Wing Brake): Distribui a frenagem em 120° para caixas de bobina grandes formato M",
      "Mola de Aço Inox para Bobinas Descartáveis de Papelão (Pre-Wound): Especialmente calibrada para não frear demais carretilhas leves",
      "Mola com Arruela de Teflon Embutida: Versão ultra-silenciosa para redução de atrito e aquecimento em turnos industriais pesados"
    ],
    "recommendedSettings": {
      "speedPPM": "Suporta frenagens contínuas em rotações de 0 a 1.200 PPM com mais de 50.000 paradas por dia",
      "needleType": "Universal para todas as agulhas",
      "stabilizer": "Universal para todas as entretelas"
    },
    "advantages": [
      "✔ Acaba definitivamente com os nós e laçadas soltas no início de cada letra ou detalhe bordado",
      "✔ Mantém o ponto de tensão da bobina perfeitamente calibrado (18 a 22 gf) do início ao fim do carretel",
      "✔ Prolonga a vida útil da caixa de bobina evitando que a carretilha raspe direto no fundo de ferro",
      "✔ Peça de reposição de baixíssimo custo com impacto monumental na qualidade visual do bordado"
    ],
    "limitations": [
      "Se a mola for amassada para trás, ela perde o arqueamento e para de frear a bobina.",
      "Se fiapos grossos de linha se acumularem debaixo da mola, a carretilha fica alta demais e raspa na laçadeira."
    ],
    "commonErrors": [
      "❌ Perder a mola ao lavar ou assoprar a caixa de bobina e usá-la sem a mola (causando ninhos imediatos).",
      "❌ Colocar a mola virada ao contrário (com as abas arqueadas para baixo), travando a bobina no fundo.",
      "❌ Deixar uma camada dura de poeira e cera de linha acumular embaixo da mola sem tirar para limpar.",
      "❌ Pressionar o meio da mola com chave de fenda até amassar e perder o efeito elástico."
    ],
    "troubleshootingTips": [
      "Toda vez que a máquina corta a linha e vai para a próxima letra, faz uma bolota de linha no avesso no primeiro ponto: A mola anti-giro da caixa de bobina quebrou, caiu ou perdeu a pressão; verifique o fundo da caixa de bobina e instale uma nova mola anti-giro arqueada.",
      "A linha da bobina está dura de puxar mesmo com o parafuso externo todo solto: Tem fiapo de linha compactado debaixo da mola anti-giro empurrando a bobina contra a borda da caixa; remova a mola com uma pinça, limpe o fundo com álcool e recoloque.",
      "A bobina trepida e faz um zumbido agudo durante o bordado a alta velocidade: A mola anti-giro ressecou ou está gasta; aplique meia gota de silicone seco ou troque a lâmina de freio."
    ],
    "dicaArtrelados": "Ao comprar caixas de bobina de reposição baratas na internet, muitas vêm sem a Mola Anti-Giro no fundo ou com uma mola reta sem pressão! Faça o 'Truque do Teste da Moedinha da Artrelados': pegue a sua caixa de bobina vazia e olhe lá no fundo. Tem uma chapinha pretinha ou prateada em forma de estrelinha? Aperte-a suavemente com a ponta do indicador: ela deve ceder e voltar para cima com uma pressão elástica macia, como se fosse um colchãozinho! Se o fundo for só o ferro liso da caixa, coloque imediatamente uma mola anti-giro. A quantidade de paradas por corte falhado e de ninhos no avesso vai cair para zero no mesmo dia!",
    "voceSabia": "Quando uma máquina de bordar industrial está operando a 1.000 pontos por minuto, a carretilha da bobina gira a incríveis 3.000 rotações por minuto dentro da caixinha! Quando a máquina freia, a inércia da carretilha equivale a uma miniatura de um carro em alta velocidade na estrada! Sem a mola anti-giro, a carretilha continuaria rodando por mais de 5 voltas inteiras no ar, soltando quase 15 centímetros de linha embolada dentro da máquina!",
    "practicalExercise": "Inspeção e Limpeza da Mola Anti-Giro: Retire a caixa de bobina da máquina e tire a carretilha de linha. Com a ponta de uma pinça de bordado bem fininha, retire com cuidado a mola anti-giro do fundo da caixa. Observe como ela tem uma leve curva para cima. Limpe todo o pó de linha que costuma ficar escondido embaixo dela com um cotonete seco. Encaixe a mola de volta no pino central, certificando-se de que as pontinhas curvadas fiquem viradas para você. Coloque a bobina e sinta a diferença de maciez no giro!",
    "quickSummary": "Lâmina circular flexível de aço no fundo da caixa de bobina que atua como freio elástico contínuo, impedindo o giro por inércia da carretilha e eliminando ninhos no avesso.",
    "relatedTerms": [
      "Caixa de Bobina (Bobbin Case)",
      "Carretilha / Bobina (Bobbin)",
      "Laçadeira Rotativa (Rotary Hook)",
      "Tensão da Bobina",
      "Ninho de Linha (Birdnesting)",
      "Towa Bobbin Gauge"
    ],
    "tags": [
      "m-105",
      "mola-anti-giro",
      "mola-caixa-bobina",
      "bobbin-brake-spring",
      "anti-spin",
      "freio-de-bobina",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO., LTD. Bobbin Case Mechanism, Tension Spring & Anti-Spin Brake Specifications. Tokyo: Towa, 2023.",
      "KOBAN HOOKS & BOBBIN CASES. Rotary Hook and Bobbin Tension Mechanics for High-Speed Embroidery. Hiroshima, 2022.",
      "TAJIMA GROUP. Bobbin Case Maintenance, Brake Spring Calibration and Thread Nesting Prevention. Nagoya: Tajima, 2023.",
      "ARTRELADOS. O Freio Invisível da Carretilha: Segredos da Mola Anti-Giro, Fim dos Ninhos e Tensão Perfeita. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  },
  {
    "id": "m-106-mola-segura-linha-superior-retentora-pos-corte",
    "code": "M-106",
    "term": "Mola Segura-Linha Superior do Cabeçote / Mola Retentora de Linha Pós-Corte (Upper Thread Holding Spring & Pick-Up Spring Wire)",
    "pronunciation": "mó-la se-gú-ra lí-nha su-pe-ri-ór do ka-be-só-te / mó-la re-ten-tó-ra de lí-nha pós-kór-te (á-per thrêd hôul-ding spring end pík-ap spring uáir)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Desenvolvida no Japão pela Tajima e Barudan no final da década de 1970 com o advento das primeiras máquinas de bordar multiagulhas com corte automático inferior (Under-Bed Thread Trimmer). Antes de sua invenção, a chicotada ascendente do estica-fio ao retornar aos 100° pós-corte frequentemente despassava a agulha recém-cortada, obrigando a introdução de uma mola de retenção resiliente montada na parte frontal do bloco de agulhas.",
    "summary": "Arame elástico de aço harmônico curvado em gancho ou espiral posicionado acima do prendedor de agulha que retém levemente a ponta da linha superior após o corte do trimmer, impedindo que o fio escape do olho da agulha no recomeço do bordado.",
    "definition": "A Mola Segura-Linha Superior do Cabeçote e Mola Retentora de Linha Pós-Corte (tecnicamente denominada Upper Thread Holding Spring, Pick-Up Spring Wire, Thread Retaining Spring, Mola Pega-Fio do Bloco de Agulhas ou Mola Trava-Linha da Troca de Cor) é o componente elástico passivo montado na régua frontal do bloco deslizante de agulhas (Needle Case) ou integrado logo acima do parafuso prendedor de cada agulha (Needle Clamp). Sua função mecânica e operacional é atuar como uma pinça elástica de retenção temporária para a extremidade cortada da linha superior. Quando a faca móvel do trimmer executa o corte sob a chapa de agulha e a alavanca puxa-fio (estica-fio) completa seu curso ascendente até a posição angular de parada a 100°, a linha superior sofre uma rápida aceleração para cima. A Mola Segura-Linha abraça a linha com uma pressão de retenção calibrada de 2 gf a 5 gf: firme o suficiente para evitar que o chicoteamento puxe o rabo de linha para fora do furo da agulha (despassando o fio), mas flexível e suave o bastante para que, no instante em que a barra de agulha desce para dar o primeiro ponto da próxima cor ou salto de bastidor, a linha se desprenda do arame sem oferecer resistência, formando a laçada perfeita com a lançadeira rotativa sem ruptura.",
    "technicalDetails": "Confeccionada em fio de aço-mola de alto carbono estufado (aço harmônico JIS G3521 SWIC ou aço inoxidável AISI 302 temperado) com diâmetro calibrado entre 0,4 mm e 0,6 mm. O arame possui extremidade arredondada por polimento eletroquímico ou brunimento abrasivo (Ra ≤ 0,025 µm) para evitar qualquer corte ou desgaste abrasivo na linha de poliéster ou viscose. Fixada por microparafusos M2 ou cravada sob pressão em buchas plásticas na régua guia do cabeçote. A força de deflexão elástica nominal situa-se entre 0,03 N e 0,06 N, assegurando retenção estática do fio e liberação dinâmica instantânea no primeiro ciclo de penetração.",
    "construction": [
      "Haste de Ancoragem e Fixação: Base metálica reta prensada ou parafusada na chapa frontal do bloco de agulhas",
      "Corpo Arqueado de Flexão Elástica: Seção de arame mola temperado que absorve impactos e oscilações do cabeçote",
      "Alça de Retenção em Gancho ou Espiral (Wire Loop): Vão calibrado onde a ponta da linha repousa sob suave pressão",
      "Ponta Polida Anti-Abrasão (Rounded Nose): Extremidade sem quinas vivas para não desfiar filamentos ao liberar a linha",
      "Alojamento de Calibração de Altura: Fenda de regulagem que permite aproximar ou afastar a mola em relação à haste da agulha",
      "Tratamento Superficial Niquelado ou Cromado: Proteção anticorrosiva que mantém o arame espelhado por anos"
    ],
    "howItWorks": [
      "1. A máquina conclui a sequência de uma cor e o trimmer corta a linha superior embaixo da chapa de agulha.",
      "2. O estica-fio sobe para a posição de 100°, puxando a sobra de linha cerca de 3 a 5 cm para cima.",
      "3. A ponta cortada da linha superior se apoia na curva elástica da Mola Segura-Linha.",
      "4. A mola retém a pontinha do fio com uma pressão delicada, mantendo-a apontada para baixo e impedindo que ela fuja pelo olho da agulha.",
      "5. O cabeçote faz a troca de cor (Color Change), deslocando o bloco de agulhas para a direita ou esquerda.",
      "6. Na partida da nova agulha, a barra desce; a ponta da linha é puxada para dentro do tecido e se solta suavemente da mola.",
      "7. O primeiro ponto é laçado com sucesso embaixo pela laçadeira sem falhas e sem despassar a agulha!"
    ],
    "beginnerExplanation": "A Mola Segura-Linha Superior é a 'mãozinha invisível' que segura a pontinha da linha para ela não fugir do buraco da agulha! Sabe quando a máquina corta a linha para trocar de cor ou saltar de uma letra para outra, e o estica-fio dá aquele puxão para cima? Se não tivesse nada segurando a ponta da linha ali perto da agulha, o puxão ia sugar a linha inteira para fora do furinho, e você teria que parar a máquina, pegar a pinça e enfiar a linha na agulha tudo de novo! A mola segura-linha é aquele araminho brilhante e fininho que fica bem em cima da agulha. Ela dá um 'beliscãozinho' super carinhoso na linha — forte o bastante para o vento e o tranco não levarem o fio embora, mas leve como um beijo para a linha se soltar sozinha no primeiro ponto que a máquina furar o tecido!",
    "applications": [
      "Retenção passiva e segura da cauda da linha superior após corte automático do trimmer",
      "Prevenção absoluta de despassamento de agulha (agulha sem linha) no início de blocos de bordado",
      "Estabilização de pontas de linha durante movimentos rápidos de troca de cor (Color Change)",
      "Padronização do comprimento da ponta de linha inicial para avessos limpos sem pontas compridas",
      "Compatibilidade com máquinas multiagulhas industriais e semicomerciais de 1 a 20 agulhas por cabeçote"
    ],
    "mainTypes": [
      "Mola Segura-Linha em Arame Simples em Gancho (Padrão clássico Tajima, Barudan e Happy)",
      "Mola em Espiral Helicoidal Dupla (Garante retenção superior para linhas escorregadias de viscose e seda)",
      "Mola Retentora Integrada na Guia de Barra de Agulha (Montada individualmente em cada haste de agulha)",
      "Sistema de Retenção Magnética com Palheta Auxiliar (Presente em cabeçotes eletrônicos ultra-silenciosos de última geração)"
    ],
    "recommendedSettings": {
      "speedPPM": "Suporta desacelerações bruscas e retomadas instantâneas de 0 a 1.200 PPM",
      "needleType": "Compatível com agulhas DBxK5 de espessura 65/9 a 90/14",
      "stabilizer": "Universal para todas as entretelas",
      "threadTension": "A pressão de retenção do arame deve ser mínima (2 a 5 gf), suficiente apenas para segurar o peso da sobra de linha"
    },
    "advantages": [
      "✔ Elimina o despassamento automático da agulha após o corte, economizando dezenas de paradas por hora",
      "✔ Mantém a ponta da linha sempre orientada na vertical, facilitando a captura pela laçadeira no 1º ponto",
      "✔ Peça simples, de altíssima durabilidade e sem componentes elétricos propensos a falhas",
      "✔ Arame polido a diamante que não marca, não amassa e não desfia fios finos de poliéster ou metálicos"
    ],
    "limitations": [
      "Se o arame for entortado com força por um esbarrão, ele pode apertar demais a linha e arrebentar o fio no 1º ponto.",
      "Se a mola ficar muito aberta ou amassada para trás, a linha não é retida e a agulha despassa no corte."
    ],
    "commonErrors": [
      "❌ Puxar panos ou bastidores com força esbarrando nas molas e entortando os arames para os lados.",
      "❌ Apertar o arame com alicate grosso achando que precisa 'prender com força', travando a linha e quebrando agulha.",
      "❌ Não passar a linha pelo vão da mola na hora de passar a linha na agulha, deixando o fio solto no ar.",
      "❌ Deixar linha quebrada embaraçada no arame da mola, acumulando tensão extra e desfiando o bordado."
    ],
    "troubleshootingTips": [
      "Toda vez que a máquina corta a linha e troca para uma cor específica, a linha escapa do olho da agulha no primeiro ponto: A mola segura-linha daquela agulha está amassada para fora ou frouxa demais; com uma pinça delicada, empurre suavemente o arame para mais perto da haste até ele encostar levemente na linha sem estrangular.",
      "A linha arrebenta logo no primeiro ponto após a troca de cor: O arame da mola foi amassado com muita pressão contra a barra de agulha e está prensando o fio como um alicate; afaste o arame cerca de meio milímetro para que a linha corra macia.",
      "A ponta inicial do bordado está ficando com um fiapo comprido de 5 cm no lado direito do tecido: O trimmer está deixando muita sobra de linha ou a mola segura-linha está fora da posição correta; alinhe a altura da mola conforme o gabarito do manual."
    ],
    "dicaArtrelados": "O 'Ajuste da Pinça de Sobrancelha da Artrelados': Se você notar que a linha de uma agulha específica vive escapando do buraquinho logo após o corte, nunca use um alicate de eletricista para entortar a molinha! Pegue a sua pinça de ponta fina de passar linha (ou uma pinça comum de sobrancelha) e aperte delicadamente a curvinha do arame bem na base. Dê um toque minúsculo de meio milímetro para dentro. Teste passando um pedacinho de linha: ao puxar com a mão, você deve sentir a linha deslizar macia como se estivesse passando entre as cerdas de uma escova de dentes macia! Essa calibragem cirúrgica acaba com o despassamento de agulha para sempre no seu ateliê!",
    "voceSabia": "Em uma produção de uniformes com 10.000 peças bordadas contendo 5 trocas de cor cada, a máquina executa 50.000 cortes automáticos de linha! Se as molas segura-linha estiverem desreguladas e falharem em apenas 1% dos cortes, a bordadeira terá que enfiar a agulha na mão 500 vezes, perdendo mais de 3 horas de produção útil de trabalho!",
    "practicalExercise": "O Teste de Retenção e Liberação da Linha Superior: Com a agulha passada, corte a linha manualmente sob a chapa deixando cerca de 4 cm de ponta. Encaixe a linha no araminho da mola segura-linha. Agora, gire o volante da máquina bem devagar com a mão fazendo a agulha descer: observe como a mola segura o fio até a agulha quase furar o tecido e, no instante certo, solta a pontinha suavemente. É a harmonia mecânica em ação!",
    "quickSummary": "Arame elástico de aço montado acima da agulha que segura levemente a ponta da linha após o corte do trimmer, impedindo o despassamento no início da próxima costura.",
    "relatedTerms": [
      "Barra de Agulha e Parafuso de Fixação (Needle Bar & Needle Clamp)",
      "Agulha DBxK5",
      "Navalha Móvel e Navalha Fixa do Corte de Linha (Lâminas do Trimmer / Moving & Fixed Knife)",
      "Troca Automática de Cores (Color Change)",
      "Lâmina Segura-Fio do Trimmer / Mola Retentora da Linha da Bobina na Faca Fixa",
      "Alavanca Puxa-Fio (Thread Take-Up Lever)"
    ],
    "tags": [
      "m-106",
      "mola-segura-linha",
      "mola-retentora",
      "pick-up-spring",
      "upper-thread-holder",
      "despassamento-de-agulha",
      "pos-corte",
      "mecanica",
      "cabecote",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Needle Case Assembly, Upper Thread Holding Spring Adjustment & Maintenance. Nagoya: Tajima, 2023.",
      "BARUDAN CO., LTD. Multi-Head Needle Bar & Thread Retaining Wire Alignment Standards. Ichinomiya, 2022.",
      "HAPPY JAPAN. Technical Service Manual: Needle Clamp Thread Springs & Trimmer Recovery. Yamagata, 2023.",
      "ARTRELADOS. Adeus Agulha Despassada: Como Regular a Mola Segura-Linha Superior e Produzir sem Paradas. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-07"
  },
  {
    "id": "m-107-mola-retorno-barra-agulha-recuperacao-superior",
    "code": "M-107",
    "term": "Mola de Retorno da Barra de Agulha / Mola de Recuperação Superior (Needle Bar Return Spring & Recoil Spring)",
    "pronunciation": "mó-la de re-tór-nu da bár-ra de a-gú-lha / mó-la de re-ku-pe-ra-sãw su-pe-ri-ór (ní-dl bar ri-têrn spring end rí-kóil spring)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Originada nos sistemas mecânicos de costura e aperfeiçoada com as máquinas de bordar automáticas japonesas (Tajima, Barudan e Brother) nas décadas de 1970 e 1980. O princípio de recuperação elástica por mola helicoidal de compressão axial foi adotado para desacoplar a barra de agulha do mecanismo condutor excêntrico após cada ciclo de ponto, viabilizando o movimento lateral independente da carcaça de agulhas (Needle Case) durante a troca automática de cores (Color Change) sem que as agulhas inativas ficassem projetadas para baixo.",
    "summary": "Mola helicoidal cilíndrica de compressão montada ao redor da haste da barra de agulha que impulsiona a barra instantaneamente de volta ao ponto morto superior, mantendo-a armada no topo e evitando colisões na troca de cor.",
    "definition": "A Mola de Retorno da Barra de Agulha e Mola de Recuperação Superior (tecnicamente denominada Needle Bar Return Spring, Needle Bar Recoil Spring, Mola de Rearme da Barra ou Mola de Suspensão de Agulha Inativa) é o elemento elástico helicoidal de compressão instalado concentricamente ao redor da haste cilíndrica de cada barra de agulha, situado no vão axial entre a bucha inferior da carcaça e o bloco condutor da agulha (Needle Bar Driver / Guide Block). Sua função primordial na cinemática do cabeçote é assegurar o retorno mecânico ultrarrápido da barra de agulha ao Ponto Morto Superior (PMS) assim que o pino condutor do excêntrico principal completa a fase de penetração e ascensão. Quando a barra de agulha é selecionada para bordar, o condutor empurra a haste para baixo, comprimindo a mola e armazenando energia potencial elástica. Conforme a biela sobe, a mola se expande instantaneamente, empurrando a barra de agulha para cima contra o batente com amortecedor elastomérico. Adicionalmente, quando o cabeçote realiza a troca automática de cor (Color Change) e o pino condutor desengata da agulha atual para engatar na próxima, é a Mola de Retorno que mantém a agulha inativa rigidamente travada no topo. Se essa mola perder sua constante elástica ou se romper, a barra de agulha despenca pela ação da gravidade, colidindo violentamente contra a chapa, a carcaça ou o bastidor durante o deslocamento horizontal do cabeçote.",
    "technicalDetails": "Fabricada em fio de aço-corda para piano de alto carbono estufado JIS G3522 SWP-A/B ou aço inoxidável mola AISI 302 temperado, com diâmetro de fio calibrado entre 0,7 mm e 0,9 mm. O diâmetro externo da espiral situa-se entre 8,0 mm e 9,5 mm (com diâmetro interno livre de 6,4 mm a 7,2 mm para permitir folga radial com a barra de agulha de 6,0 mm sem atrito parasita). Comprimento livre inicial de 65 mm a 85 mm, número de espiras ativas entre 22 e 32 com extremidades esquadrejadas e retificadas (Square & Ground Ends). A constante elástica (k) varia de 0,15 N/mm a 0,28 N/mm, desenvolvendo força de retenção estática no PMS de 3,5 N a 5,0 N, suficiente para resistir a acelerações inerciais de até 15G em trocas de cor em menos de 0,4 segundo.",
    "construction": [
      "Corpo Helicoidal Cilíndrico em Fio de Aço-Mola Temperado (SWP-A / AISI 302)",
      "Espiras com Passo Uniforme para Deformação Axial Perfeitamente Linear",
      "Extremidades Esquadrejadas e Retificadas Planas para Apoio Firme sem Inclinação",
      "Diâmetro Interno Calibrado com Folga Livre para Deslizamento sem Tocar na Barra",
      "Tratamento Térmico de Alívio de Tensões após Enrolamento a Frio (250°C - 300°C)",
      "Revestimento Superficial Fosfatizado ou Niquelado com Alta Resistência ao Óleo Mineral"
    ],
    "howItWorks": [
      "1. A máquina engata o condutor na barra de agulha selecionada para a sequência de bordado.",
      "2. O condutor desce empurrando a barra; a Mola de Retorno é comprimida acumulando energia elástica.",
      "3. A agulha perfura o tecido, a laçadeira rotativa captura o laço da linha e a biela inicia o retorno.",
      "4. A Mola de Retorno empurra vigorosamente a barra para cima, auxiliando o motor principal a vencer a inércia.",
      "5. No topo do curso (Ponto Morto Superior), o amortecedor de borracha dissipa o choque de chegada.",
      "6. Ao finalizar a cor, o condutor desengata da barra; a mola mantém a agulha armada e erguida no teto da canaleta.",
      "7. O cabeçote se move suavemente de lado (Color Change) sem que nenhuma agulha raspe ou bata no bastidor!"
    ],
    "beginnerExplanation": "A Mola de Retorno da Barra de Agulha é como o 'pula-pula interno' da agulha da sua máquina! Toda vez que a máquina fura o tecido, a máquina empurra a barra de agulha para baixo com muita força. Essa mola espiral, que fica enrolada na barra de ferro, é esmagada feito uma sanfona. Assim que a agulha termina de furar o pano, a mola dá um pulo elástico e joga a barra de volta lá para cima num piscar de olhos! E tem mais: sabe quando a máquina termina uma cor e o cabeçote corre para o lado para pegar a próxima cor? Todas as agulhas que estão 'dormindo' precisam ficar quietinhas lá no alto, encolhidas. Se uma dessas molas quebrar ou ficar fraca, a agulha cai solta para baixo. Aí, na hora que o cabeçote correr de lado, a agulha caída bate com tudo na chapa ou no bastidor e quebra no meio com um barulho assustador! Essa molinha é a sentinela que mantém cada agulha no seu devido lugar!",
    "applications": [
      "Retorno elástico instantâneo da barra de agulha ao Ponto Morto Superior após a formação do ponto",
      "Sustentação gravitacional e travamento superior das barras de agulha inativas durante a operação",
      "Prevenção absoluta de colisões de agulhas caídas contra o bastidor na troca automática de cores",
      "Alívio de carga inercial no eixo excêntrico principal em regimes severos de até 1.200 PPM",
      "Estabilização do ciclo de disparo em máquinas multiagulhas industriais de 1 a 24 cabeçotes"
    ],
    "mainTypes": [
      "Mola Helicoidal Padrão em Aço-Carbono Fosfatizado (Montagem de fábrica Tajima, Barudan e Brother)",
      "Mola em Aço Inoxidável Polido (Ideal para ateliês litorâneos com alta umidade e maresia)",
      "Mola de Passo Progressivo (Com espiras mais juntas na base para amortecimento progressivo superior)",
      "Conjunto de Mola com Tubo Protetor Anti-Vibração (Utilizado em cabeçotes eletrônicos ultra-rápidos)"
    ],
    "recommendedSettings": {
      "speedPPM": "Projetada para operar de 0 a 1.200 PPM com ciclagem de até 20 Hz sem fadiga elástica",
      "needleType": "Compatível com todas as barras de agulha de 6,0 mm (sistema DBxK5)",
      "stabilizer": "Universal para todas as entretelas e tipos de bordado",
      "threadTension": "A força da mola garante que a barra suba completamente antes do estica-fio puxar a laçada"
    },
    "advantages": [
      "✔ Garante que as agulhas inativas nunca despenquem sobre o bastidor durante o trabalho",
      "✔ Vida útil extrema de centenas de milhões de compressões sem perda da constante elástica",
      "✔ Auxilia o motor principal, reduzindo o consumo de energia e o aquecimento do cabeçote",
      "✔ Facilidade de inspeção visual: basta observar se todas as barras estão alinhadas no topo"
    ],
    "limitations": [
      "Após muitos anos de uso contínuo, a mola pode perder comprimento livre (fadiga por fluência), reduzindo a pressão no topo.",
      "Fios de linha arrebentados que se enrolam entre as espiras podem travar a mola e impedir o curso completo da agulha."
    ],
    "commonErrors": [
      "❌ Puxar a mola com a mão para 'esticar' quando ela fica fraca, deformando as espiras e descalibrando a força.",
      "❌ Ignorar uma agulha que fica meio caída após a troca de cor, arriscando uma colisão fatal no bastidor.",
      "❌ Deixar acúmulo de fiapos e graxa seca entre as espiras da mola, impedindo o fechamento total da espiral.",
      "❌ Instalar molas com diâmetro interno muito justo que raspam na barra de agulha e provocam travamentos."
    ],
    "troubleshootingTips": [
      "Uma agulha específica não sobe até o batente do topo e fica 1 centímetro mais baixa que as outras: A mola de retorno daquela agulha partiu ao meio ou está com fadiga severa; desmonte o bloco condutor e instale uma mola nova imediatamente antes de bordar.",
      "A máquina deu erro de travamento no motor de troca de cor (Color Change Error): Uma das agulhas inativas caiu porque sua mola quebrou e a ponta da barra bateu na guia lateral durante o deslocamento; erga a agulha manualmente, limpe os fragmentos e substitua a mola.",
      "A barra de agulha parece lenta para subir e a linha superior fica frouxa no início do ponto: A mola está cheia de poeira de linha empastada com óleo velho; lave a mola e a barra com desengraxante suave e aplique algumas gotas de óleo mineral novo."
    ],
    "dicaArtrelados": "O 'Teste do Toque de Piano da Artrelados': Quer verificar todas as molas de retorno do seu cabeçote em menos de 10 segundos? Com a máquina desligada, passe a ponta do seu dedo indicador empurrando cada barra de agulha para baixo, uma por uma, cerca de 1 a 2 centímetros, e solte imediatamente (como se estivesse dedilhando teclas pesadas de um piano!). Você deve sentir uma resistência firme e, ao soltar, a barra tem que disparar de volta para cima fazendo um 'ploc' seco e instantâneo no amortecedor. Se alguma agulha subir devagar, com preguiça ou ficar no meio do caminho, você encontrou a mola que precisa de atenção antes que ela quebre seu bastidor!",
    "voceSabia": "Em um bordado denso executado a 1.000 pontos por minuto, a mola de retorno da barra de agulha ativa é comprimida e liberada 60.000 vezes por hora! Isso significa que, ao longo de um único mês de trabalho em um ateliê movimentado, essa pequena espiral de aço se deforma e recupera mais de 10 milhões de vezes sem perder a elasticidade!",
    "practicalExercise": "Verificação de Alinhamento Visual no Topo: Olhe horizontalmente para a frente do seu bloco de agulhas. Os parafusos de fixação ou as pontas dos condutores de todas as agulhas devem formar uma linha perfeitamente reta e nivelada. Se uma das agulhas estiver 2 milímetros mais baixa que as vizinhas, desça-a manualmente e inspecione a mola de retorno!",
    "quickSummary": "Mola de compressão em aço montada na barra de agulha que a faz retornar imediatamente ao topo e impede que agulhas inativas caiam sobre o bastidor na troca de cor.",
    "relatedTerms": [
      "Barra de Agulha e Parafuso de Fixação (Needle Bar & Needle Clamp)",
      "Amortecedor de Borracha da Barra de Agulha / Anel Batente de Impacto do Cabeçote",
      "Bucha da Barra de Agulha / Guia de Deslizamento em Bronze Autolubrificante",
      "Troca Automática de Cores (Color Change)",
      "Motor de Troca de Cor (Color Change Motor)",
      "Mola de Compressão do Pé Calcador e Amortecedor"
    ],
    "tags": [
      "m-107",
      "mola-de-retorno",
      "barra-de-agulha",
      "recoil-spring",
      "troca-de-cor",
      "ponto-morto-superior",
      "mecanica",
      "manutencao",
      "cabecote",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Multi-Head Needle Bar Recoil Springs & Color Change Safety Standards. Nagoya: Tajima, 2023.",
      "BARUDAN CO., LTD. Needle Case Driving Stud & Return Spring Maintenance Manual. Ichinomiya, 2022.",
      "BROTHER INDUSTRIES. Professional Embroidery Machine Head Mechanism & Spring Diagnostics. Nagoya, 2023.",
      "ARTRELADOS. O Pula-Pula da Precisão: Segredos da Mola de Retorno da Agulha e Como Evitar Batidas no Bastidor. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-07"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_S5: Verbete[] = [
  {
    id: "software-de-bordado",
    code: "S-031",
    letter: "S",
    term: "Software de Bordado",
    pronunciation: "sóf-ti-ué-re de bor-da-do",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto (do inglês embroidery software).",
    origin: "Dos primeiros sistemas CAD/CAM industriais desenvolvidos nas décadas de 1970 e 1980 para a indústria têxtil.",
    summary: "Categoria geral de programas de computador dedicados à criação, personalização, edição, conversão e visualização de matrizes de bordado.",
    definition: "O Software de Bordado (ou Embroidery Software Suite) é o ecossistema de aplicações computacionais especializadas que traduzem elementos visuais e artísticos em instruções matemáticas e comandos numéricos executáveis por máquinas de bordar. Abrange desde programas simples de catálogo e troca de formatos até estações completas de engenharia têxtil CAD/CAM.",
    technicalDetails: "Um software de bordado moderno processa dados vetoriais com controle de curvas Bézier e nós, gerando arquivos proprietários de alta resolução (como .EMB, .ART, .PXF) que preservam os parâmetros de ponto editáveis antes da exportação para os formatos binários de máquina (como .PES, .DST, .JEF, .EXP, .XXX).",
    beginnerExplanation: "É o programa que a gente instala no computador para abrir os desenhos de bordado, mudar as cores, escrever nomes, juntar figurinhas e mandar o arquivo prontinho para o pendrive da máquina.",
    howItWorks: [
      "1. A usuária instala o programa no computador ou utiliza versão em nuvem.",
      "2. Abre imagens ou arquivos de matrizes existentes.",
      "3. Utiliza as ferramentas da interface para criar ou alterar o desenho.",
      "4. O programa calcula os pontos, densidades e amarrações.",
      "5. Salva o arquivo no formato que a máquina da usuária consegue ler.",
      "6. A máquina executa o bordado com perfeição física no tecido."
    ],
    applications: [
      "Criação e desenho de matrizes exclusivas para ateliês e fábricas.",
      "Personalização rápida de nomes em toalhas, enxovais e uniformes escolares.",
      "Dimensionamento e conversão de matrizes entre diferentes marcas de máquinas.",
      "Organização e gerenciamento de acervos com milhares de arquivos digitais."
    ],
    characteristics: [
      "Interface gráfica intuitiva adaptada para o universo da costura e da arte têxtil.",
      "Controle minucioso de parâmetros físicos (densidade, compensação, suporte, corte).",
      "Compatibilidade com os principais formatos e marcas de máquinas mundiais."
    ],
    commonErrors: [
      "❌ Achar que um programa de desenho comum (como CorelDRAW, Illustrator ou Canva) gera arquivos de máquina de bordar sem um módulo específico de pontos.",
      "❌ Usar softwares desatualizados ou sem suporte oficial que geram arquivos corrompidos.",
      "❌ Salvar direto no formato de máquina (.DST/.PES) e perder o arquivo de trabalho original (.EMB) com os parâmetros editáveis."
    ],
    troubleshootingTips: [
      "Programa não abrindo arquivos de máquina: verifique se o formato é compatível com a versão instalada ou use um conversor confiável.",
      "Software muito lento: feche outros aplicativos pesados em segundo plano e aumente a memória dedicada à renderização gráfica.",
      "Matriz perdendo a capacidade de edição: salve sempre uma cópia no formato original vetorial do programa (ex: .EMB) além do formato da máquina."
    ],
    dicaArtrelados: "Tenha sempre duas versões de cada matriz no seu computador: a versão de trabalho editável (arquivo .EMB do seu software) e a versão de costura para o pendrive (arquivo .PES, .DST ou .JEF). Assim você pode alterar qualquer nome ou tamanho no futuro com apenas um clique!",
    voceSabia: "O primeiro software de bordado comercial para microcomputadores foi lançado na Austrália pela Wilcom em 1979, revolucionando para sempre a indústria têxtil mundial.",
    practicalExercise: "Abra o seu software de bordado favorito. Explore os menus principais de 'Visualizar', 'Ferramentas de Ponto' e 'Exportar para Máquina'. Identifique onde fica a barra de propriedades de densidade e compensação.",
    quickSummary: "Software de Bordado é o programa de computador que transforma desenhos, textos e ideias em arquivos com comandos de pontos para a máquina de bordar.",
    relatedTerms: ["Software de Digitalização", "Software de Edição", "Software de Conversão", "Arquivo de Matriz", "Formato DST / PES / JEF"],
    tags: ["software", "tecnologia", "programas", "computador", "ferramentas"]
  },
  {
    id: "software-de-digitalizacao",
    code: "S-032",
    letter: "S",
    term: "Software de Digitalização",
    pronunciation: "sóf-ti-ué-re de di-gi-ta-li-za-ção",
    level: "Avançado 🔴",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês digitizing software (programas de programação paramétrica de pontos a partir de imagens).",
    summary: "Software profissional avançado equipado com ferramentas de criação vetorial de satim, tatami, subpontos e compensações a partir do zero.",
    definition: "O Software de Digitalização (ou Digitizing Software / Embroidery CAD) é a classe mais avançada de programas de bordado, desenvolvida para transformar ilustrações gráficas (JPG, PNG, SVG, AI) em matrizes paramétricas completas. Ele disponibiliza ferramentas para desenhar colunas de satim, preenchimentos complexos com furos, caminhos com curvas Bézier, suportes estruturais multiníveis e algoritmos de compensação física.",
    technicalDetails: "Diferencia-se dos editores básicos por trabalhar com objetos vetoriais 'inteligentes': ao redimensionar uma flor ou letra em um software de digitalização, o programa recalcula matematicamente o número total de pontos, mantendo a densidade original inalterada e preservando a integridade da peça.",
    beginnerExplanation: "É o programa profissional de quem cria matrizes do zero: você coloca uma foto ou desenho na tela, desenha por cima com as ferramentas especiais de bordado e escolhe cada tipo de ponto, suporte e brilho.",
    howItWorks: [
      "1. O programador importa a imagem de referência (logotipo ou ilustração).",
      "2. Cria os objetos de ponto usando ferramentas de Coluna, Tatami e Ponto Corrido.",
      "3. Configura os parâmetros de densidade, subpontos e compensação de repuxo.",
      "4. Define as linhas de direção angular dos pontos para refletir a luz.",
      "5. Organiza o sequenciamento de camadas e cores.",
      "6. Exporta a matriz perfeita pronta para o chão de fábrica."
    ],
    applications: [
      "Desenvolvimento de matrizes profissionais para venda em lojas virtuais.",
      "Digitalização de logomarcas empresariais com rigor milimétrico de identidade visual.",
      "Criação de matrizes de aplique, chaveiros 3D e peças 'In-The-Hoop' (ITH).",
      "Criação de rendas solúveis (Free-Standing Lace - FSL) e bordados de alta costura."
    ],
    characteristics: [
      "Gera arquivos paramétricos de alta fidelidade (.EMB, .ART, .PXF).",
      "Recalcula pontos automaticamente ao alterar tamanhos e proporções.",
      "Contém as ferramentas mais completas e precisas do mercado têxtil."
    ],
    commonErrors: [
      "❌ Tentar criar matrizes profissionais usando apenas conversores automáticos de baixa resolução sem desenhar os vetores de ponto.",
      "❌ Não configurar a compensação de encolhimento de acordo com o tecido pretendido.",
      "❌ Esquecer de salvar o arquivo no formato mestre paramétrico antes de fechar o programa."
    ],
    troubleshootingTips: [
      "Contornos desalinhados com o fundo: aumente a compensação de repuxo (Pull Compensation) de 0,20 mm para 0,40 mm no software.",
      "Curvas de satim com cantos duros: use nós Bézier e adicione linhas de ângulo radiais em leque.",
      "Pontos afundando no tecido: ative o suporte duplo de grade cruzada (Double Tatami Underlay) nas propriedades do objeto."
    ],
    dicaArtrelados: "Aprender a digitalizar suas próprias matrizes é o maior salto de liberdade do seu ateliê! Com um bom software de digitalização, você nunca mais fica dependente de matrizes prontas da internet e pode bordar qualquer ideia na hora!",
    voceSabia: "Os principais softwares profissionais de digitalização do mundo (como Wilcom, Pulse e Bernina) possuem motores matemáticos com mais de 40 anos de desenvolvimento contínuo.",
    practicalExercise: "Importe uma estrela simples em JPG no seu software de digitalização. Use a ferramenta de Coluna Satim para desenhar as 5 pontas manualmente, definindo as linhas de ângulo para o centro. Compare com uma vetorização automática.",
    quickSummary: "Software de Digitalização é o programa profissional para criar matrizes completas do zero com controle total sobre pontos, vetores, densidades e compensações.",
    relatedTerms: ["Software de Bordado", "Software de Edição", "Digitalização de Matrizes", "Compensação de Puxamento", "Wilcom / Pulse / Bernina"],
    tags: ["digitalização", "software profissional", "criação", "vetores", "cad têxtil"]
  },
  {
    id: "software-de-edicao",
    code: "S-033",
    letter: "S",
    term: "Software de Edição",
    pronunciation: "sóf-ti-ué-re de e-di-ção",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da necessidade de personalização rápida, montagem e ajustes de matrizes sem complexidade de programação do zero.",
    summary: "Programa focado na modificação, personalização de nomes, combinação, rotação e ajustes de matrizes já existentes.",
    definition: "O Software de Edição (ou Embroidery Customizer / Editor) é o aplicativo intermediário voltado para usuárias, ateliês e pequenas confecções que precisam manipular matrizes existentes sem necessariamente desenhá-las do zero. Permite unir desenhos, adicionar textos e monogramas com fontes instaladas, espelhar, girar, alterar cores e reordenar a sequência de execução.",
    technicalDetails: "Editores operam tanto sobre arquivos proprietários quanto sobre arquivos binários (.PES, .JEF, .DST). Ao redimensionar arquivos de máquina sem dados paramétricos, softwares de edição de qualidade possuem algoritmos de interpolação que adicionam ou removem pontos proporcionalmente para manter a densidade segura (dentro de um limite seguro de ±15% a ±20%).",
    beginnerExplanation: "É o programa que você usa para fazer o trabalho do dia a dia: abrir uma matriz de ursinho que você comprou, escrever o nome do bebê embaixo, mudar a cor do lacinho para rosa e salvar para bordar.",
    howItWorks: [
      "1. A usuária abre a matriz comprada ou salva no computador.",
      "2. Clica na ferramenta de texto e digita o nome desejado escolhendo a fonte.",
      "3. Posiciona o nome harmoniosamente abaixo ou ao lado do desenho.",
      "4. Troca as cores da paleta para combinar com a linha que tem no ateliê.",
      "5. Salva o arquivo montado diretamente no pendrive da máquina.",
      "6. A peça personalizada fica pronta com rapidez e praticidade."
    ],
    applications: [
      "Personalização de toalhas de banho, enxovais de bebê e jalecos profissionais.",
      "Montagem de composições combinando duas ou três matrizes no mesmo bastidor.",
      "Espelhamento e duplicação de bordados para golas e bolsos simétricos.",
      "Alteração rápida de tamanhos para caber em bastidores menores."
    ],
    characteristics: [
      "Curva de aprendizado rápida e interface extremamente amigável.",
      "Excelente custo-benefício para quem não deseja ser programador profissional.",
      "Inclui ricas bibliotecas de alfabetos, fontes e molduras prontas."
    ],
    commonErrors: [
      "❌ Aumentar o tamanho de um arquivo de máquina em 200% em um editor simples, esticando os pontos até ficarem frouxos como arames.",
      "❌ Reduzir o tamanho da matriz em 50% sem recalcular os pontos, acumulando um bolo duro de linha.",
      "❌ Não agrupar o desenho com o texto antes de centralizar no bastidor virtual."
    ],
    troubleshootingTips: [
      "Bordado ficando muito ralo ao aumentar de tamanho: ative a opção 'Recalcular Pontos / Density Compensation' ao redimensionar ou limite o aumento a no máximo 15%.",
      "Texto ficando torto em relação ao desenho: use as ferramentas de alinhamento automático ('Alinhar ao Centro' / 'Alinhar pela Base').",
      "Letras com furos ou nós feios: escolha fontes originais do programa de bordado em vez de fontes TrueType convertidas automaticamente."
    ],
    dicaArtrelados: "Para escrever nomes com fontes perfeitas e sem falhas no seu editor: prefira sempre as 'Fontes Pré-Digitalizadas' (Keyboard Embroidery Fonts) que já vêm embutidas no programa, pois elas foram testadas ponto por ponto por especialistas!",
    voceSabia: "Softwares de edição como Embrilliance Essentials, PE-Design Plus e Embird Editor são os programas mais populares e utilizados por ateliês de personalização em todo o planeta.",
    practicalExercise: "Abra uma matriz no seu programa de edição. Escreva seu nome embaixo usando uma fonte de satim do programa. Troque a cor do texto para dourado, selecione tudo e clique em 'Centralizar no Bastidor'. Salve e veja a facilidade.",
    quickSummary: "Software de Edição é o programa ideal para o dia a dia do ateliê, perfeito para escrever nomes, juntar desenhos, trocar cores e ajustar matrizes com rapidez.",
    relatedTerms: ["Software de Bordado", "Software de Digitalização", "Fontes de Bordado (Lettering)", "Redimensionamento de Matriz", "Alinhamento no Bastidor"],
    tags: ["edição", "textos", "personalização", "nomes", "montagem"]
  },
  {
    id: "software-de-conversao",
    code: "S-034",
    letter: "S",
    term: "Software de Conversão",
    pronunciation: "sóf-ti-ué-re de con-ver-são",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da proliferação de formatos de arquivo proprietários criados por diferentes fabricantes de máquinas (Brother, Janome, Bernina, Tajima, Singer, Pfaff, Husqvarna).",
    summary: "Utilitário voltado a converter matrizes de um formato de máquina para outro (ex: de .PES para .JEF ou de .DST para .EXP).",
    definition: "O Software de Conversão (ou Embroidery File Converter / Format Transcoder) é a ferramenta digital projetada para traduzir arquivos de bordado entre diferentes formatos e extensões proprietárias de mercado sem alterar a estrutura dos pontos. Ele decodifica os cabeçalhos e coordenadas binárias do formato original e os reescreve na sintaxe exigida pelo painel da máquina de destino.",
    technicalDetails: "Conversores de qualidade preservam as informações de trocas de cor (Color Stops), comandos de corte (Trims) e coordenadas de centro (Origin X/Y), adaptando os limites do bastidor às especificações físicas do modelo da máquina selecionada (como limites de deslocamento e rotação).",
    beginnerExplanation: "É o programa que funciona como um tradutor: se você tem uma máquina Janome que só lê arquivos .JEF e comprou uma matriz que veio em .PES (da Brother), o conversor transforma o arquivo em segundos para a sua máquina conseguir bordar.",
    howItWorks: [
      "1. A usuária seleciona os arquivos que deseja converter no computador.",
      "2. Escolhe o formato de destino compatível com sua máquina (ex: .JEF, .PES, .DST, .EXP).",
      "3. Clica no botão 'Converter' ou 'Salvar Como'.",
      "4. O programa gera os novos arquivos na pasta de destino em frações de segundo.",
      "5. A usuária copia para o pendrive e conecta diretamente na máquina de bordar.",
      "6. A máquina reconhece o arquivo e carrega a imagem na tela perfeitamente."
    ],
    applications: [
      "Adaptação de matrizes compradas na internet para a marca específica da sua máquina.",
      "Conversão em lote (Batch Conversion) de centenas de arquivos de uma única vez.",
      "Compatibilização de arquivos industriais (.DST) para máquinas domésticas com paleta de cores.",
      "Visualização e impressão de fichas de catálogo em formatos universais (PDF)."
    ],
    characteristics: [
      "Geralmente gratuito ou incluído nos pacotes de software de bordado.",
      "Processamento ultrarrápido em lotes de centenas de arquivos.",
      "Indispensável para quem trabalha com mais de uma marca de máquina no ateliê."
    ],
    commonErrors: [
      "❌ Converter uma matriz que é maior do que o bastidor da sua máquina e esperar que a máquina consiga bordar sem acusar erro.",
      "❌ Converter para formato .DST e achar que o arquivo perdeu as cores (o DST é industrial e não grava paletas de cor, apenas paradas).",
      "❌ Usar conversores genéricos online de sites suspeitos que corrompem as coordenadas dos pontos."
    ],
    troubleshootingTips: [
      "Máquina não reconhecendo o arquivo no pendrive: confirme se converteu exatamente para a extensão da sua máquina (ex: Janome = .JEF; Brother = .PES; Bernina = .EXP; Singer = .XXX).",
      "Arquivo convertido ficou monocromático: se converteu para .DST, configure as cores diretamente no painel da máquina na hora de bordar.",
      "Bordado ficando fora da área do bastidor: gire a matriz em 90° no conversor para alinhar com a orientação do bastidor da sua máquina."
    ],
    dicaArtrelados: "Se você tem muitas matrizes para converter de uma vez: use a função 'Conversão em Lote' (Batch Converter) do Wilcom TrueSizer, Bernina ArtLink ou Embird. Você seleciona uma pasta inteira com 500 matrizes e ele converte tudo em menos de 1 minuto!",
    voceSabia: "Existem mais de 40 formatos diferentes de arquivos de bordado no mundo, mas apenas 4 dominam mais de 90% do mercado global: .DST (Tajima/Universal), .PES (Brother), .JEF (Janome) e .EXP (Bernina/Melco).",
    practicalExercise: "Baixe um conversor gratuito confiável (como Wilcom TrueSizer ou Bernina ArtLink). Abra um arquivo .PES e converta para .JEF e .DST. Abra os três arquivos e veja como os pontos permanecem perfeitamente idênticos.",
    quickSummary: "Software de Conversão é o tradutor digital que muda a extensão do arquivo de matriz para torná-lo compatível com a marca e o modelo da sua máquina de bordar.",
    relatedTerms: ["Formatos de Matriz (.PES, .JEF, .DST, .EXP)", "Conversão em Lote", "Wilcom TrueSizer", "Software de Gerenciamento"],
    tags: ["conversão", "formatos", "pes", "jef", "dst", "compatibilidade"]
  },
  {
    id: "software-de-gerenciamento-de-matrizes",
    code: "S-035",
    letter: "S",
    term: "Software de Gerenciamento de Matrizes",
    pronunciation: "sóf-ti-ué-re de ge-ren-ci-a-men-to de ma-tri-zes",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto.",
    origin: "Dos sistemas digitais de gerenciamento de ativos de mídia (Digital Asset Management - DAM) adaptados para o universo do bordado.",
    summary: "Programa organizador que cataloga, visualiza miniaturas, busca por palavras-chave e gerencia grandes acervos de matrizes no computador.",
    definition: "O Software de Gerenciamento de Matrizes (ou Embroidery Catalog Manager / Thumbnail Viewer) é a solução tecnológica dedicada a organizar, catalogar, etiquetar e pesquisar coleções de matrizes armazenadas no disco rígido ou em nuvem. Permite visualizar miniaturas reais dos bordados diretamente no Windows Explorer ou em galerias dedicadas, dispensando a abertura manual de cada arquivo em softwares pesados.",
    technicalDetails: "Softwares de gerenciamento avançados (como Embrilliance Thumbnailer, BuzzXplore ou Wilcom Workspace) extraem metadados embutidos nos cabeçalhos dos arquivos (dimensões em mm, contagem total de pontos, paleta de cores, número de trocas de cor e notas de produção), permitindo buscas instantâneas por categorias (ex: 'Natal', 'Flores', 'Bebê', 'Brasões').",
    beginnerExplanation: "É o organizador que transforma os arquivos do seu computador em fotos coloridas dos bordados com o tamanho e número de pontos. Com ele, você acha aquela matriz de 'ursinho marinheiro' em 2 segundos sem precisar abrir arquivo por arquivo.",
    howItWorks: [
      "1. A usuária instala o gerenciador no computador.",
      "2. O programa rastreia as pastas de matrizes e gera ícones com a imagem real de cada desenho.",
      "3. A usuária digita o que procura na barra de busca (ex: 'borboleta').",
      "4. O programa lista instantaneamente todas as matrizes de borboletas com tamanho e pontos.",
      "5. A usuária seleciona a matriz ideal e envia diretamente para o pendrive.",
      "6. A organização do ateliê ganha agilidade e profissionalismo incomparáveis."
    ],
    applications: [
      "Organização de acervos com mais de 50.000 matrizes acumuladas ao longo dos anos.",
      "Atendimento rápido a clientes no balcão mostrando opções de desenhos na tela.",
      "Impressão automática de catálogos e fichas técnicas ilustradas em PDF.",
      "Localização instantânea de matrizes por tamanho de bastidor (ex: 'mostrar matrizes até 10x10 cm')."
    ],
    characteristics: [
      "Exibe miniaturas coloridas (Thumbnails) diretamente nas pastas do computador.",
      "Suporta busca avançada por tamanho, número de pontos, cores e tags.",
      "Economiza horas preciosas de procura no atendimento diário."
    ],
    commonErrors: [
      "❌ Deixar todas as matrizes soltas na pasta 'Downloads' com nomes genéricos (ex: 'matriz1.pes', 'desenho.jef'), perdendo horas para encontrar um arquivo.",
      "❌ Não fazer backup regular em nuvem ou disco externo do seu acervo catalogado.",
      "❌ Salvar matrizes duplicadas em dezenas de pastas diferentes, consumindo espaço do computador."
    ],
    troubleshootingTips: [
      "Pastas do Windows mostrando apenas ícones brancos sem a foto do bordado: instale uma extensão de visualização de miniaturas de bordado (como Embrilliance Thumbnailer ou Wilcom TrueSizer).",
      "Demora para encontrar matrizes de clientes: organize suas pastas por temas principais (Datas Comemorativas, Infantil, Florais, Profissões, Nomes) e adicione palavras-chave aos arquivos.",
      "Computador travando com muitas matrizes: utilize o gerenciador para encontrar e eliminar arquivos duplicados."
    ],
    dicaArtrelados: "Organize seu ateliê como uma biblioteca de luxo: crie pastas por temas (ex: '01_Infantil', '02_Casamento', '03_Religiosos') e use um visualizador de miniaturas. Quando o cliente pedir um desenho, você mostra as opções na tela em menos de 10 segundos!",
    voceSabia: "Ateliês profissionais de bordado que utilizam softwares de gerenciamento de matrizes economizam em média 45 minutos por dia que antes eram perdidos apenas procurando arquivos de clientes.",
    practicalExercise: "Crie hoje mesmo 5 pastas temáticas principais no seu computador e organize suas últimas 20 matrizes dentro delas com nomes claros e descritivos. Veja como o seu dia de trabalho fica mais leve e produtivo!",
    quickSummary: "Software de Gerenciamento de Matrizes é o organizador digital que exibe miniaturas dos bordados, busca por temas e cataloga todo o seu acervo com facilidade.",
    relatedTerms: ["Miniaturas de Bordado (Thumbnails)", "Catálogo de Matrizes", "Metadados de Matriz", "Backup de Ateliê", "Ficha Técnica"],
    tags: ["gerenciamento", "organização", "catálogo", "miniaturas", "produtividade"]
  },
  {
    id: "scanner",
    code: "S-036",
    letter: "S",
    term: "Scanner",
    pronunciation: "is-câ-ner",
    level: "Iniciante 🟢",
    category: "Hardware & Equipamentos",
    grammarClass: "Substantivo masculino (do inglês scanner).",
    origin: "Do verbo inglês to scan (examinar, perscrutar, varrer opticamente uma superfície). Dispositivo óptico de digitalização de imagens.",
    summary: "Dispositivo óptico que digitaliza desenhos em papel, tecidos ou logos impressos, convertendo-os em imagens digitais de alta resolução.",
    definition: "O Scanner é o equipamento periférico de captura de imagens por varredura óptica que converte desenhos físicos em papel, fotos, croquis artesanais, amostras de tecidos e impressos comerciais em arquivos de imagem digital bidimensional (JPG, PNG, TIFF). No ecossistema do bordado, atua como a primeira ponte entre a arte física e o computador.",
    technicalDetails: "Para fins de digitalização de matrizes, a resolução óptica recomendada situa-se entre 300 DPI e 600 DPI (pontos por polegada), com fidelidade cromática de 24 bits (RGB), garantindo contornos nítidos e livres de distorções de perspectiva (ao contrário de fotos tiradas de celular com inclinação angular).",
    beginnerExplanation: "É o aparelho que tira uma 'xerox digital' do desenho que está no papel e manda direto para a tela do computador com altíssima nitidez e sem ficar torto, para você poder transformar em bordado.",
    howItWorks: [
      "1. A usuária coloca o desenho em papel ou a amostra de tecido sobre o vidro do scanner.",
      "2. O carro óptico com barra de LED e sensores CCD/CIS percorre a superfície.",
      "3. Os sensores capturam as cores e contornos com precisão milimétrica.",
      "4. O arquivo de imagem é transferido para o computador em alta resolução.",
      "5. A imagem é aberta no software de bordado com escala 1:1 rigorosamente perfeita.",
      "6. A programadora inicia o processo de desenho dos pontos sobre a imagem nítida."
    ],
    applications: [
      "Digitalização de desenhos infantis e assinaturas manuscritas para bordar em toalhas.",
      "Captura de logotipos impressos em cartões de visita e uniformes antigos de clientes.",
      "Escaneamento de rendas antigas e peças vintage para reprodução computadorizada.",
      "Mapeamento de texturas de tecidos para inserção como fundo realista na simulação 3D."
    ],
    characteristics: [
      "Elimina distorções de lente e sombras comuns em fotos tiradas com celular.",
      "Preserva as dimensões e proporções físicas reais da arte original em escala 1:1.",
      "Gera imagens limpas com alto contraste de cores para facilitar o trabalho."
    ],
    commonErrors: [
      "❌ Escanear em baixa resolução (72 DPI), gerando imagens pixeladas que dificultam enxergar onde passam os contornos.",
      "❌ Usar vidro do scanner sujo com poeira ou manchas de dedo, gerando pontinhos pretos na imagem digital.",
      "❌ Tirar foto com o celular torto em vez de escanear, distorcendo círculos que viram ovais no bordado."
    ],
    troubleshootingTips: [
      "Imagem saindo muito escura ou com fundo cinza: aumente o contraste e o brilho nas configurações do software do scanner.",
      "Tamanho da imagem não batendo no programa de bordado: escaneie com uma régua posicionada ao lado do desenho para calibrar a escala 1:1 no software.",
      "Linhas do desenho saindo borradas: selecione o modo 'Preto e Branco / Linhas Artísticas' (Line Art) com resolução de 600 DPI."
    ],
    dicaArtrelados: "Para bordar uma assinatura ou cartinha escrita à mão por uma criança: coloque o papel no scanner em 300 DPI no modo preto e branco. A imagem vai para o programa limpinha, sem sombras, e você digitaliza cada letrinha com a emoção exata do traço original!",
    voceSabia: "Algumas máquinas de bordar modernas de última geração possuem um scanner embutido diretamente na barra do cabeçote, que escaneia o tecido preso no bastidor em tempo real para posicionamento milimétrico!",
    practicalExercise: "Escreva seu nome à mão com canetinha preta em uma folha branca. Escaneie a 300 DPI e abra a imagem no software de bordado. Veja a diferença abissal de nitidez em relação a uma foto tirada na mão com celular.",
    quickSummary: "Scanner é o dispositivo óptico que transfere desenhos físicos e papéis para o computador em alta resolução e sem distorções para serem digitalizados.",
    relatedTerms: ["Scaneamento de Imagem", "Segmentação de Imagem", "Resolução (DPI)", "Escala 1:1", "Vetorização"],
    tags: ["scanner", "hardware", "captura", "digitalização", "imagem"]
  },
  {
    id: "scaneamento-de-imagem",
    code: "S-037",
    letter: "S",
    term: "Scaneamento de Imagem",
    pronunciation: "is-ca-ne-a-men-to de i-ma-gem",
    level: "Iniciante 🟢",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do processo operacional de captura e amostragem óptica digital de imagens bidimensionais.",
    summary: "Procedimento técnico de digitalização óptica de um desenho físico para prepará-lo para a criação da matriz de bordado.",
    definition: "O Scaneamento de Imagem (ou Escaneamento / Image Scanning) é a operação técnica de captura de um original físico (desenho, logotipo, tecido, croquis) através de sensores ópticos calibrados. No contexto do bordado, o objetivo do scaneamento é obter uma imagem com alto contraste, contornos nítidos, iluminação uniforme e fidelidade dimensional para servir de guia de fundo (Backdrop/Artwork) durante a digitalização de pontos.",
    technicalDetails: "O processo envolve ajustes essenciais de pré-captura: calibração de balanço de branco, eliminação de ruídos de fundo (Descreening para eliminar retículas de impressão gráfica), equalização de histograma e definição de perfil de cores sRGB com resolução de 300 a 600 DPI.",
    beginnerExplanation: "É o ato de escanear o desenho com capricho: regular a claridade, a nitidez e a limpeza da imagem para que o desenho chegue ao computador perfeitamente visível e fácil de transformar em matriz.",
    howItWorks: [
      "1. A operadora limpa o vidro do scanner e alinha a folha de desenho.",
      "2. Abre o aplicativo de captura e clica em 'Pré-Visualizar'.",
      "3. Ajusta o enquadramento apenas na área do desenho.",
      "4. Regula o contraste e o brilho para clarear o fundo e escurecer os traços.",
      "5. Executa o escaneamento final em 300 DPI e salva o arquivo em formato PNG ou TIFF.",
      "6. A imagem é importada no software de bordado como base de desenho."
    ],
    applications: [
      "Reprodução de logomarcas antigas de uniformes escolares e profissionais.",
      "Transformação de desenhos infantis e artes de clientes em bordados afetivos.",
      "Restauração e réplica de bordados tradicionais de família e patrimônio têxtil.",
      "Criação de matrizes a partir de croquis de estilistas e designers de moda."
    ],
    characteristics: [
      "Garante paralelismo geométrico sem as inclinações de fotos de celular.",
      "Facilita a identificação das cores e dos detalhes menores do desenho.",
      "Economiza tempo precioso na hora de traçar as linhas de pontos."
    ],
    commonErrors: [
      "❌ Escanear com folha amassada ou dobrada, criando sombras escuras que parecem linhas na tela do computador.",
      "❌ Salvar em formatos com alta compressão (JPG com baixa qualidade), enchendo o contorno de 'fantasmas' e borrões.",
      "❌ Esquecer de alinhar o desenho na horizontal com a régua do scanner."
    ],
    troubleshootingTips: [
      "Fundo do papel saindo cinza: aumente a luz de destaque (Highlights) no software de escaneamento até o fundo ficar 100% branco.",
      "Desenho com efeito de 'teia de aranha' vindo de revista: ative a função 'Destramar / Descreen' do scanner para suavizar as retículas de impressão gráfica.",
      "Cores da imagem muito diferentes do original: use o modo de cor de 24 bits e calibre o perfil do scanner."
    ],
    dicaArtrelados: "Se você precisa escanear um bordado antigo para copiar: coloque um pedacinho de cartolina preta atrás da peça para dar contraste no scanner e use 600 DPI. Cada pontinho antigo vai aparecer na tela com uma nitidez incrível para você copiar perfeitamente!",
    voceSabia: "A tecnologia de sensores ópticos CIS (Contact Image Sensor) utilizada na maioria dos scanners modernos consome 90% menos energia do que as antigas lâmpadas fluorescentes dos scanners industriais dos anos 1990.",
    practicalExercise: "Pegue um cartão de visitas com logotipo impresso. Faça dois escaneamentos: um com 75 DPI e outro com 300 DPI com ajuste de contraste. Dê zoom nos dois no software de bordado e veja a diferença brutal de qualidade.",
    quickSummary: "Scaneamento de Imagem é o processo de captura óptica com ajuste de luz e contraste para fornecer uma base digital nítida para a programação do bordado.",
    relatedTerms: ["Scanner", "Segmentação de Imagem", "Resolução (DPI)", "Artwork / Imagem Guia", "Vetorização"],
    tags: ["scaneamento", "captura", "nitidez", "preparação", "imagem"]
  },
  {
    id: "segmentacao-de-imagem",
    code: "S-038",
    letter: "S",
    term: "Segmentação de Imagem",
    pronunciation: "seg-men-ta-ção de i-ma-gem",
    level: "Intermediário 🟡",
    category: "Software & Tecnologia",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do processamento digital de imagens e visão computacional (Image Segmentation / Color Reduction).",
    summary: "Separação e simplificação de uma imagem em regiões de cores sólidas e contornos claros para conversão em objetos de bordado.",
    definition: "A Segmentação de Imagem (ou Redução e Separação de Cores / Color Reduction & Cleanup) é a etapa de processamento digital em que uma imagem bitmap com milhões de tonalidades contínuas (como fotos ou ilustrações com degradês complexos) é simplificada e dividida em um número finito de áreas homogêneas e sólidas correspondentes às cores de linha que serão realmente bordadas na máquina.",
    technicalDetails: "Algoritmos como K-Means Clustering, Posterização e Limiarização (Thresholding) agrupam pixels semelhantes em regiões vetoriais fechadas com bordas nítidas, eliminando ruídos de antialiasing e facilitando a geração automática ou manual de preenchimentos de satim e tatami.",
    beginnerExplanation: "É como passar a imagem por um filtro que limpa todas as sujeirinhas e manchas de cor, transformando um desenho cheio de tons misturados em blocos limpinhos com cores sólidas (ex: vermelho puro, azul puro, amarelo puro), prontinho para virar bordado.",
    howItWorks: [
      "1. A usuária carrega a imagem colorida no software de bordado.",
      "2. Aciona a ferramenta de 'Preparação de Imagem / Redução de Cores'.",
      "3. O software analisa a imagem e sugere o número de cores reais (ex: 4 cores).",
      "4. O algoritmo agrupa os milhares de tons de pixels nessas 4 cores principais.",
      "5. Suaviza e fecha as bordas de cada área colorida.",
      "6. A imagem fica limpa, com contornos retos e perfeita para receber os pontos de bordado."
    ],
    applications: [
      "Preparação de logotipos de empresas recebidos em arquivos JPG de baixa qualidade.",
      "Vetorização e conversão semi-automática de desenhos infantis e clipart.",
      "Isolamento de elementos específicos de uma ilustração complexa.",
      "Redução de custos de produção diminuindo o número de cores da matriz."
    ],
    characteristics: [
      "Elimina o efeito 'borrão' (antialiasing) nas bordas das figuras.",
      "Gera formas fechadas com contornos nítidos e fáceis de preencher.",
      "Passo preliminar indispensável para ferramentas de auto-digitalização."
    ],
    commonErrors: [
      "❌ Tentar converter uma imagem em bordado sem fazer a segmentação de cores antes, gerando uma matriz com 60 trocas de cores falsas.",
      "❌ Reduzir demais as cores (ex: de 10 cores para 2), perdendo detalhes fundamentais do desenho original.",
      "❌ Não revisar as bordas segmentadas, deixando pequenos 'buracos' ou ilhas de pixels soltos."
    ],
    troubleshootingTips: [
      "Software gerando muitas cores desnecessárias na conversão: diminua a quantidade de cores na ferramenta de redução para o número exato de cones de linha que você vai usar.",
      "Contorno do desenho saindo todo picotado: use a ferramenta de 'Suavizar Bordas' (Smooth Edges) após a segmentação.",
      "Detalhe importante desaparecendo na limpeza: aumente a sensibilidade de detalhes ou aumente temporariamente a contagem de cores na segmentação."
    ],
    dicaArtrelados: "Antes de clicar em qualquer ferramenta de criação automática de pontos: use a ferramenta 'Redução de Cores' do seu software para deixar o desenho com apenas 3 ou 4 cores limpinhas. O programa gera uma matriz infinitamente mais bonita e profissional!",
    voceSabia: "Em computação gráfica e inteligência artificial, a segmentação semântica de imagens é a mesma tecnologia utilizada por carros autônomos para separar ruas, pedestres e veículos.",
    practicalExercise: "Abra um logotipo colorido em JPG no seu software de bordado. Abra a ferramenta 'Preparação de Imagem / Reduzir Cores' e reduza de 256 cores para apenas 3 cores sólidas. Veja como as bordas ficam imediatamente limpas e prontas para bordar.",
    quickSummary: "Segmentação de Imagem é a limpeza e simplificação de cores de um desenho que transforma tons misturados em blocos sólidos e nítidos para criar os pontos de bordado.",
    relatedTerms: ["Redução de Cores", "Vetorização Automática", "Antialiasing", "Scaneamento de Imagem", "Preparação de Imagem"],
    tags: ["segmentação", "redução de cores", "limpeza", "vetorização", "preparação"]
  }
];

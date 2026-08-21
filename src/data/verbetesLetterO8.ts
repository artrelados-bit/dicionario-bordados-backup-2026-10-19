import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART8: Verbete[] = [
  {
    id: "ondulacao-radial-bordado-circular-brasao",
    code: "O-056",
    letter: "O",
    term: "Ondulação Radial em Bordado Circular / Brasão Redondo (Radial Puckering in Circular Patches)",
    pronunciation: "on-du-la-ção ra-di-al em bor-da-do cir-cu-lar",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Problemas & Soluções",
    summary: "Deformação e abaulamento em formato de domo ou cuia que ocorre em medalhões, escudos e patches redondos quando digitalizados com preenchimento tatami unidirecional sem compensação angular concêntrica.",
    origin: "Fenômeno da mecânica dos sólidos e deformação plástica de tecidos estudado na indústria de emblemas militares da Alemanha e dos EUA desde os anos 1970.",
    definition: "A Ondulação Radial em Brasões Redondos (Radial Hoop Distortion & Domed Puckering) é o efeito indesejado de abaulamento côncavo ou convexo que transforma um emblema perfeitamente circular em uma cúpula estufada ou ondulada ao ser retirado do bastidor. Como as forças de tração do preenchimento tatami puxam o tecido e a entretela em apenas um eixo (ex: de cima para baixo a 90°), o perímetro circular sofre contração assimétrica. Ao adicionar um contorno denso de satim ao redor do círculo, a borda prende essa tensão não uniforme, forçando o centro do medalhão a estufar como uma tampa de panela.",
    howItWorks: [
      "1. O digitalizador cria um fundo circular em tatami com ângulo único a 45° ou 90°.",
      "2. A máquina borda milhares de pontos puxando o tecido na direção do ângulo do ponto.",
      "3. O círculo sofre encolhimento no eixo do ponto e expansão elástica no eixo perpendicular (efeito empuxo).",
      "4. Em seguida, a máquina borda a borda redonda externa de satim denso.",
      "5. A borda circular atua como um anel de aço rígido que 'trava' o tecido deformado no lugar.",
      "6. Ao soltar o bastidor, as tensões internas não encontram alívio e empurram o centro para cima.",
      "7. O brasão fica com efeito abaulado em relevo involuntário e bordas onduladas."
    ],
    beginnerExplanation: "É quando você borda um brasão redondo ou um escudo de time de futebol e, na hora que você tira do bastidor, ele fica estufado no meio parecendo uma cuiinha ou uma tampinha de garrafa! Isso acontece porque os pontinhos puxaram o tecido só para um lado e a bordinha redonda travou tudo. O segredo é usar um recheio de sustentação especial em cruz e regular a compensação de repuxo direitinho!",
    applications: [
      "Digitalização de emblemas redondos de artes marciais, escudos de futebol e distintivos policiais",
      "Bordados circulares em toalhas de mesa, almofadas e jaquetas de motociclistas",
      "Confecção de patches termocolantes redondos perfeitamente planos",
      "Calibração de compensação de repuxo radial em softwares de bordado"
    ],
    technicalDetails: "Para neutralizar a ondulação radial em círculos de diâmetro superior a 60 mm, a matriz deve utilizar: 1) Subcamada em grade cruzada (Double Tatami) com recuo de 1,2 mm; 2) Divisão do círculo em fatias com ângulos divergentes (Radial Stitching) ou tatami com densidade relaxada (0,45 mm a 0,50 mm); 3) Compensação de repuxo elíptica (+0,4 mm no eixo paralelo ao ponto).",
    commonErrors: [
      "❌ Borda círculos grandes (> 8 cm) com tatami super pesado (densidade 0,35 mm) em ângulo único sem subponto",
      "❌ Aplicar a borda de satim imediatamente após o tatami sem deixar margem de overlap elíptica",
      "❌ Usar entretela rasga-fácil fina em escudos redondos de alta densidade",
      "❌ Esticar o tecido no bastidor em apenas uma direção antes de fechar o aro"
    ],
    troubleshootingTips: [
      "Se o brasão redondo ficar estufado no meio como um domo: Reduza a densidade do tatami em 15% e ative a subcamada em grade cruzada",
      "Se o círculo virar um oval depois de bordado: Aumente a compensação de repuxo no eixo perpendicular ao ponto no software",
      "Para patches de escudo perfeitamente planos: Borde sobre duas camadas de entretela recortável (Cut-Away) pesada de 80g/m²"
    ],
    dicaArtrelados: "Para emblemas redondos 100% retinhos e planos como uma régua: use SEMPRE duas camadas de entretela recortável no bastidor e programe o fundo com densidade de 0,45 mm e subponto em grade! O patch fica firme, plano e com toque aveludado!",
    voceSabia: "Os distintivos e medalhões circulares dos uniformes dos astronautas da NASA passam por testes rigorosos de planicidade com escâneres a laser 3D para garantir que a ondulação radial não ultrapasse 0,2 mm!",
    practicalExercise: "Digitalize um círculo de 7 cm de diâmetro. Borde a versão A em entretela fina e a versão B em duas camadas de entretela recortável com subponto em grade. Coloque os dois sobre a mesa e veja como a versão B fica perfeitamente plana.",
    quickSummary: "Deformação em domo estufado em bordados circulares; prevenida com subcamada em grade cruzada e densidade calibrada.",
    relatedTerms: ["Ponto Tatami", "Compensação de Encolhimento", "Overlapping de Subponto / Grade Cruzada Ancorada", "Patch / Emblema Bordado"],
    tags: ["o-056", "ondulacao radial", "brasao redondo", "domo", "patches circulares", "solucoes", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Digitizing Circular Emblems, Patches & Radial Pull Compensation. Technical Note, 2021.",
      "EMBROIDERY TRADE ASSOCIATION. Patch Planarity & Structural Distortion Control in Round Insignias. London, 2020."
    ]
  },
  {
    id: "organizacao-arquivos-matrizes-metadados",
    code: "O-057",
    letter: "O",
    term: "Organização de Arquivos de Matrizes e Gestão de Metadados (Embroidery Asset & Metadata Management)",
    pronunciation: "or-ga-ni-za-ção de ar-qui-vos de ma-tri-zes e ges-tão de me-ta-da-dos",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Formatos & Arquivos",
    summary: "Sistema de catalogação digital, renomeação padronizada, armazenamento em nuvem e documentação de metadados técnicos (número de pontos, dimensões, marcas de fios e entretelas) de acervos de matrizes de bordado.",
    origin: "Metodologia de gestão de ativos digitais (Digital Asset Management - DAM) desenvolvida para estúdios de design e adaptada para a indústria de bordado nos anos 2000.",
    definition: "A Gestão de Metadados e Arquivos de Matrizes (Embroidery Cataloging & Metadata Indexing) é o conjunto de métodos e ferramentas de organização sistemática do acervo de matrizes do ateliê. Consiste em armazenar os arquivos originais editáveis (como .EMB, .PES original) junto com os arquivos compilados de máquina (.DST, .JEF, etc.), miniaturas visuais de pré-visualização (thumbnails PNG/JPG), e metadados estruturados (nome do cliente, data, dimensões milimétricas em X e Y, total de pontos, paleta exata de cores com números de cones, tipo de agulha e entretela recomendada). Isso permite localizar qualquer trabalho antigo em segundos e garantir que reordenações futuras saiam com exata repetibilidade de qualidade.",
    howItWorks: [
      "1. Ao finalizar a digitalização de uma matriz, o programador salva o arquivo editável (.EMB) e o arquivo de máquina (.PES/.DST).",
      "2. Aplica a regra de nomenclatura padronizada do ateliê (ex: '2026-05_CLIENTE_MARCOS_LOGO-PEITO_90x45mm_8500p.PES').",
      "3. Salva a folha de produção em PDF (Worksheet) com a lista de cores e tempo estimado de máquina.",
      "4. Armazena a pasta do projeto em disco local com sincronização automática em nuvem (Google Drive, OneDrive ou Dropbox).",
      "5. Insere tags de busca rápida no software de catálogo (ex: #medicina, #jaleco, #floral, #infantil).",
      "6. Quando o cliente solicita uma nova encomenda 1 ano depois, a matriz exata é localizada em 5 segundos.",
      "7. A produção é retomada sem necessidade de redigitalizar ou refazer testes."
    ],
    beginnerExplanation: "É o jeito inteligente e organizado de guardar todas as suas matrizes de bordado no computador e na nuvem para nunca mais perder nada! Em vez de deixar arquivos com nomes malucos como 'desenho1.pes' ou 'matriz_nova_final_mesmo.pes' jogados na área de trabalho, você guarda tudo em pastinhas organizadas com o nome do cliente, tamanho e data. Se o cliente pedir outra camisa 2 anos depois, você acha em 5 segundos!",
    applications: [
      "Gestão de acervos profissionais com mais de 10.000 matrizes de bordado",
      "Backup automático em nuvem contra perda por queima de computador ou vírus",
      "Rápida recuperação de trabalhos antigos para clientes recorrentes",
      "Padronização e documentação técnica para equipe de bordadeiras e operadores"
    ],
    technicalDetails: "Arquivos de matrizes em formatos de código de máquina (.DST) não possuem metadados de cores embutidos (o padrão DST só registra comandos mecânicos de pulo e parada). Portanto, o arquivamento simultâneo do arquivo de desenho de alto nível (.EMB/.PES) ou do relatório em PDF (Worksheet) é o único método seguro de preservar a informação exata da paleta de cores original.",
    commonErrors: [
      "❌ Salvar matrizes na área de trabalho com nomes confusos como 'teste.pes' ou 'sem_titulo.dst'",
      "❌ Não fazer backup semanal na nuvem e perder anos de arquivos quando o computador pifar",
      "❌ Salvar apenas o arquivo de máquina (.DST) e deletar o arquivo editável (.EMB), impossibilitando alterações futuras de tamanho",
      "❌ Guardar pendrives soltos nas gavetas sem cópia de segurança no computador principal"
    ],
    troubleshootingTips: [
      "Se você não conseguir lembrar quais cores usou em um bordado antigo: Abra o PDF da ficha técnica gerado no dia da digitalização",
      "Se o computador queimar: Acesse a sua pasta de nuvem sincronizada (Google Drive / OneDrive) e restaure todo o acervo",
      "Para achar matrizes rapidamente: Crie pastas categorizadas por temas (ex: /Infantil, /Religioso, /Corporativo, /Florais)"
    ],
    dicaArtrelados: "A regra de ouro Artrelados para nomear matrizes: sempre comece o nome do arquivo com a data invertida e o nome do cliente! Exemplo: '2026-08_MARIA_TOALHA_JARDIM.pes'. Seu computador vai organizar tudo em ordem cronológica perfeita automaticamente!",
    voceSabia: "Os maiores estúdios de bordado de Hollywood possuem bancos de dados catalogados com mais de 500.000 matrizes históricas de figurinos, indexadas por metadados de época desde os anos 1950!",
    practicalExercise: "Crie hoje mesmo uma pasta no seu computador chamada 'Matrizes Organizadas'. Dentro dela, crie 5 subpastas temáticas (ex: /Bebê, /Corporativo, /Toalhas, /Brasões, /Datas Comemorativas). Mova 10 arquivos antigos para essas pastas renomeando-os com padrão claro.",
    quickSummary: "Método de organização, backup em nuvem e metadados de matrizes; garante localização imediata e preservação do acervo.",
    relatedTerms: ["Formatos de Arquivos de Bordado", "Ficha Técnica de Produção", "Otimização de Arquivo DST / Tajima Binary Data", "Organização de Paleta de Cores Digitais"],
    tags: ["o-057", "organizacao de matrizes", "metadados", "backup", "nuvem", "arquivos", "gestao", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY DIGITAL ASSETS ASSOCIATION. Standardized File Naming & Metadata Taxonomy for Industrial Embroidery. Munich, 2021.",
      "WILCOM ASSET MANAGEMENT. Embroidery Design Library, Tagging & Cloud Backup Best Practices. Wilcom White Papers, 2020."
    ]
  },
  {
    id: "olho-de-gato-ponto-cruzado-decorativo",
    code: "O-058",
    letter: "O",
    term: "Olho de Gato / Ponto Cruzado Decorativo de Alívio (Cat's Eye Stitch Structure)",
    pronunciation: "o-lho de ga-to / pon-to cru-za-do de-co-ra-ti-vo",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Padrão de ponto geométrico vazado com formato de losango concêntrico e perfuração central aberta, utilizado em monogramas vazados, rendas e barrados clássicos de cama e banho.",
    origin: "Originário das rendas tradicionais de agulha e do bordado 'Richelieu' italiano do século XVII, adaptado para as máquinas automáticas de bordar no século XX.",
    definition: "O Ponto Olho de Gato (Cat's Eye Motif / Open Diamond Stitch) é uma estrutura decorativa de ponto de fantasia programado que combina traçados em cruzados diagonais sobrepostos formando um losango vazado com abertura óptica no centro. Ao contrário de um ponto de satim denso, o Olho de Gato gera uma textura leve, aerada e translúcida de grande impacto visual com baixíssimo consumo de linha. É amplamente utilizado na criação de monogramas vazados de estilo clássico, preenchimentos de rendas guipir e barrados delicados de enxovais finos de mesa e banho.",
    howItWorks: [
      "1. O programador seleciona a ferramenta de preenchimento por motivos decorativos (Motif Fill).",
      "2. Escolhe a matriz do motivo 'Olho de Gato / Cat's Eye'.",
      "3. Define o tamanho da célula do losango (ex: 4,0 mm x 2,5 mm) e o espaçamento entre colunas.",
      "4. A máquina costura os pontos diagonais cruzando as laçadas nas bordas do losango.",
      "5. A perfuração central permanece aberta, permitindo que a cor e a textura do tecido de fundo apareçam com elegância.",
      "6. A densidade global de pontos da peça cai em mais de 65% em comparação com um tatami tradicional.",
      "7. O resultado é um bordado nobre, macio ao toque e extremamente flexível."
    ],
    beginnerExplanation: "É um pontinho decorativo lindo que faz desenhos com formato de losangos abertinhos que parecem o olho de um gatinho! Em vez de cobrir o tecido todo com linha grossa e pesada, ele faz uma telinha desenhada super delicada que deixa o tecido aparecer por baixo. Fica maravilhoso em toalhas de linho, jogos de cama de casal e roupas de bebê porque fica super macio e chique!",
    applications: [
      "Letras e monogramas clássicos vazados em lençóis de percal e toalhas de lavabo",
      "Fundos rendados e barrados de toalhas de mesa de banquete",
      "Vestuário de bebê e batizado que exige bordados leves que não arranham a pele",
      "Almofadas decorativas, xales e cortinas de linho e voil"
    ],
    technicalDetails: "O motivo Olho de Gato utiliza nós de fixação nas extremidades com pontos de travamento de 0,6 mm. Como possui alto fator de abertura (Aperture Factor > 50%), não exerce forças significativas de tração no tecido, permitindo o uso de entretelas hidrossolúveis ou rasga-fácil leves mesmo em tecidos finos.",
    commonErrors: [
      "❌ Digitalizar as células do Olho de Gato muito pequenas (< 1,5 mm), fazendo as linhas se amontoarem e perderem o formato de losango",
      "❌ Borda Olho de Gato sobre tecidos felpudos sem filme hidrossolúvel por cima (as felpas sobem pelos vãos do desenho)",
      "❌ Usar linha de má qualidade que desfia nas travessias de ponto longo",
      "❌ Aplicar densidade de subponto pesado por baixo, estragando o efeito vazado e transparente do ponto"
    ],
    troubleshootingTips: [
      "Se os vãos do Olho de Gato fecharem: Aumente a escala do motivo no software para 4,5 mm",
      "Se as felpas da toalha aparecerem no meio do losango: Coloque uma folha de plástico hidrossolúvel por cima antes de bordar",
      "Se o ponto parecer muito ralo: Use linha de poliéster 40wt com acabamento brilhante ou duplique o traçado do motivo"
    ],
    dicaArtrelados: "Para criar toalhas de lavabo com visual de bordado europeu tradicional: use o ponto Olho de Gato para preencher as letras do monograma e finalize com uma bordinha de satim fino! Fica com ar de enxoval de castelo real!",
    voceSabia: "O bordado com pontos vazados estilo Olho de Gato era o favorito da nobreza francesa da corte do Rei Luís XIV em Versalhes no século XVII para ornamentar lenços de seda e golas de camisas reais!",
    practicalExercise: "Abra o seu software de matrizes e teste a ferramenta de 'Preenchimento com Motivos / Motif Fill'. Selecione o padrão Olho de Gato e preencha uma letra de 8 cm. Veja como o número de pontos cai de 6.000 para menos de 1.800 pontos.",
    quickSummary: "Ponto decorativo em losangos vazados concêntricos; cria texturas leves, elegantes e arejadas para monogramas e rendas.",
    relatedTerms: ["Ponto de Cruz Eletrônico", "Ponto Apanhado (Trapunto / Quilt)", "Monogramas e Letras Clássicas", "Ponto Tatami"],
    tags: ["o-058", "olho de gato", "cats eye", "motivos decorativos", "vazado", "rendas", "enxoval", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Motif Libraries, Traditional Openwork & Lace Patterns. Wilcom Guide, 2021.",
      "CAULFEILD, S. The Dictionary of Needlework: Historical Openwork & Decorative Filigree. London, 2020."
    ]
  },
  {
    id: "overhang-balanco-frontal-braco-pantografo",
    code: "O-059",
    letter: "O",
    term: "Balanço Frontal e Rigidez Mecânica do Pantógrafo (Pantograph Cantilever Stability)",
    pronunciation: "ô-ver-rêng / ba-lan-ço fron-tal e ri-gi-dez me-câ-ni-ca",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Manutenção & Mecânica",
    summary: "Estudo dinâmico da estabilidade e absorção de vibração do braço em balanço (cantilever) do pantógrafo em bastidores grandes de bordadeiras domésticas e industriais de braço único.",
    origin: "Princípio clássico da engenharia estrutural mecânica aplicado ao amortecimento de ressonância em máquinas de precisão nos anos 1990.",
    definition: "O Balanço Frontal do Pantógrafo (Pantograph Cantilever Rigidity & Dynamic Deflection) é o comportamento elástico e vibracional do braço móvel do pantógrafo que se projeta em balanço a partir da torre de sustentação do eixo Y. Em máquinas de cabeçote único com campos de bordado grandes (como 200x300 mm ou 360x360 mm), a extremidade frontal do bastidor fica suspensa sem apoio na mesa. Durante acelerações rápidas do pantógrafo a 850 PPM, as forças de inércia geram microvibrações e deflexão mecânica na ponta do bastidor, que podem causar desalinhamento de contornos finos se a máquina não estiver perfeitamente nivelada e calibrada.",
    howItWorks: [
      "1. O motor do eixo Y executa uma parada brusca ou inversão de sentido a 850 PPM.",
      "2. A massa combinada do bastidor grande, do aro de metal, do tecido pesado e da entretela gera momento de inércia.",
      "3. O braço em balanço do pantógrafo sofre uma microdeflexão elástica (fração de décimo de milímetro).",
      "4. Em máquinas industriais, guias lineares temperadas e vigas de alumínio aeronáutico de alta rigidez amortecem a vibração em menos de 10 milissegundos.",
      "5. A agulha penetra no tecido no ponto de coordenadas exatas sem desvio milimétrico.",
      "6. Em máquinas domésticas com bastidores gigantes, mesas extensoras de apoio plano eliminam o peso morto em balanço.",
      "7. Os contornos de satim alinham perfeitamente com os preenchimentos sem deixar falhas brancas."
    ],
    beginnerExplanation: "É o peso e o balanço do bastidor grande quando a máquina se move rápido para lá e para cá! Quando você usa um bastidor grandão cheio de tecido pesado, a ponta do bastidor fica meio 'solta no ar' e pode tremer um pouquinho durante os movimentos rápidos. Para não tremer e o bordado não ficar torto, o segredo é usar a mesa extensora de apoio e regular a velocidade da máquina com carinho!",
    applications: [
      "Bordados em bastidores extragrandes (20x30 cm, 24x36 cm ou maiores)",
      "Bordados em peças pesadas como toalhas de banhão, jaquetas de couro e cobertores",
      "Uso de mesas extensoras de apoio acrílico ou metálico em máquinas de bordar",
      "Calibração e eliminação de folgas nas guias lineares e correias do pantógrafo"
    ],
    technicalDetails: "A deflexão estática da extremidade do bastidor (delta = F·L³ / 3·E·I) cresce com o cubo do comprimento do braço (L³). Dobrar o tamanho do campo do bastidor multiplica a tendência de vibração por 8 vezes. O uso de mesas extensoras de apoio reduz o estresse mecânico no rolamento do pantógrafo em mais de 75%.",
    commonErrors: [
      "❌ Borda toalhas pesadas e grossas em bastidores gigantes sem usar a mesa extensora de apoio da máquina",
      "❌ Deixar o tecido pesado da toalha ou jaqueta cair para fora da bancada puxando o bastidor para baixo por gravidade",
      "❌ Borda matrizes complexas de alta densidade na velocidade máxima (1.000 PPM) em bastidores extragrandes",
      "❌ Apoiar as mãos ou objetos pesados sobre o braço do pantógrafo durante o funcionamento da máquina"
    ],
    troubleshootingTips: [
      "Se os contornos finos ficarem desalinhados apenas na parte da frente do bastidor grande: Reduza a velocidade de 850 PPM para 650 PPM e instale a mesa extensora",
      "Se o bastidor fizer um barulho de 'chacoalho' nas paradas rápidas: Aperte os parafusos de fixação do conector do braço do pantógrafo",
      "Se o tecido pesar e arrastar: Apoie o restante da toalha ou lençol sobre a mesa para que não fique pendurado puxando o bastidor"
    ],
    dicaArtrelados: "Quando for bordar toalhas grandes ou colchas: NUNCA deixe o resto do tecido pendurado caindo para fora da mesa! Enrole o excesso de tecido e acomode com carinho em cima da bancada ou coloque uma cadeira de apoio do lado. O pantógrafo vai se mover leve e solto!",
    voceSabia: "As vigas dos pantógrafos das bordadeiras industriais Tajima e Barudan são extrudadas em perfis de alumínio e magnésio de alta densidade desenvolvidos pelos mesmos fornecedores das asas dos aviões caça supersônicos!",
    practicalExercise: "Encaixe o seu maior bastidor na máquina sem tecido. Pressione levemente a ponta dianteira com o dedo indicador e sinta a rigidez elástica do conjunto. Coloque a mesa extensora de apoio por baixo e sinta como a estabilidade se torna total.",
    quickSummary: "Comportamento dinâmico do braço em balanço do pantógrafo; exige mesa extensora e velocidade controlada em bastidores grandes.",
    relatedTerms: ["Pantógrafo de Bordadeira", "Mesa Extensora e Suportes de Apoio", "Bastidor de Bordar", "Velocidade de Bordado (PPM/RPM)"],
    tags: ["o-059", "overhang", "pantografo", "balanco", "estabilidade", "mesa extensora", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA MECHANICAL ENGINEERING. Pantograph Rigidity, Cantilever Mechanics & Frame Dynamics. Tokyo, 2021.",
      "BROTHER SERVICE ENGINEERING. Wide Frame Stability & Extension Table Utilization. Brother Manual, 2020."
    ]
  },
  {
    id: "offset-compensacao-ponto-bone-estruturado",
    code: "O-060",
    letter: "O",
    term: "Offset de Compensação de Ponto em Boné Estruturado (Cap Curve Distortion Offset)",
    pronunciation: "óf-sét de com-pen-sa-ção de pon-to em bo-né es-tru-tu-ra-do",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Projetos Especiais & ITH",
    summary: "Ajuste geométrico e sequencial obrigatório para bordados em bonés cilíndricos com costura central reforçada (Buckram), programando sempre do centro para as laterais e de baixo para cima.",
    origin: "Desenvolvido na indústria de bonés de beisebol profissional dos EUA (Major League Baseball) e adaptado para sistemas de bastidor de boné 270° nos anos 1980.",
    definition: "O Offset de Compensação em Bonés Estruturados (Cap Digitizing Rules & 3D Curve Offset) é a disciplina de engenharia de matrizes indispensável para bordar na superfície convexa de bonés de 6 gomos com entretela rígida de reforço frontal (Buckram). A curvatura 3D e a lombada da costura central de 4 camadas criam um comportamento cinemático único: o tecido é empurrado em direção às abas laterais e para cima a cada penetração da agulha. Por essa razão, a matriz DEVE ser digitalizada com ordem de costura 'Centro para Fora' (Center-Out) e 'Base para o Topo' (Bottom-Up), com compensação de repuxo extra de +0,45 mm a +0,60 mm.",
    howItWorks: [
      "1. O programador configura o tipo de produto no software como 'Boné Estruturado / Cap'.",
      "2. Divide a matriz para bordar a partir do centro da costura em direção às extremidades esquerda e direita.",
      "3. Configura a ordem de bordado para começar nos elementos inferiores e subir em direção ao topo da copa do boné.",
      "4. Aplica compensação de repuxo generosa (+0,5 mm) em todos os pontos de satim e tatami.",
      "5. No bastidor de boné 270°, o boné é montado esticado e travado com a cinta de aço dentada.",
      "6. A máquina gira o cilindro do boné executando as laçadas com agulha forte 80/12 (DBxK5).",
      "7. As tensões e o excesso de tecido são empurrados para as bordas livres, eliminando qualquer bolha de ar ou prega central.",
      "8. O logotipo fica perfeitamente reto, simétrico e indeformável sobre a curva do boné."
    ],
    beginnerExplanation: "É o jeito especial que a gente programa a matriz para bordar bonés de frente dura sem deixar o desenho torto nem fazer um 'papo' no meio da costura! Como o boné é todo redondinho e tem aquela costura dura bem no meio da testa, a máquina precisa SEMPRE começar bordando no meio e ir abrindo para os lados, e de baixo para cima! Assim, o tecido estica lisinho e o desenho fica reto e perfeito!",
    applications: [
      "Bordados em bonés profissionais de beisebol, bonés trucker e bonés de aba reta",
      "Bordados 3D em alto relevo com EVA sobre a costura frontal de bonés",
      "Personalização de viseiras esportivas e chapéus estruturados",
      "Prevenção de quebra de agulhas na travessia da lombada central do boné"
    ],
    technicalDetails: "A espessura da costura central de um boné estruturado pode ultrapassar 3,5 mm de tecido sarja com buckram termofundido. Ao cruzar essa lombada, a agulha sofre deflexão lateral de até 0,4 mm. O uso de agulhas SAN 1 (Grobz-Beckert) de haste reforçada e aumento da compensação de repuxo para 0,55 mm evita que os pontos de contorno se separem do preenchimento.",
    commonErrors: [
      "❌ Borda bonés com ordem tradicional da esquerda para a direita (empurra todo o tecido para a direita, criando uma prega gigante)",
      "❌ Borda de cima para baixo (empurra o tecido contra a aba rígida, enrugando a frente do boné)",
      "❌ Usar matriz digitalizada para camiseta plana diretamente no boné sem adaptar a ordem nem a compensação",
      "❌ Montar o boné no bastidor frouxo sem travar a cinta de aço sob a aba"
    ],
    troubleshootingTips: [
      "Se o boné fizer um 'papo' ou prega de tecido no meio do bordado: Redigitalize a matriz com a ordem estrita de 'Centro para Fora' e 'Baixo para Cima'",
      "Se a agulha quebrar toda vez que passar pela costura do meio: Troque para agulha reforçada 80/12 SAN 1 e reduza a velocidade para 650 PPM",
      "Se as letras ficarem tortas e desalinhadas na curva: Aumente a compensação de repuxo e aperte a cinta do bastidor de boné"
    ],
    dicaArtrelados: "A regra de ouro dos bonés: NUNCA use uma matriz de camiseta em um boné sem reordenar os pontos! No seu programa, ative a opção 'Ordem de Boné (Center-Out)' com apenas um clique. Seu boné vai sair reto e lisinho de primeira!",
    voceSabia: "Mais de 100 milhões de bonés bordados da Major League Baseball (MLB) e da NBA são produzidos anualmente nos Estados Unidos e na Ásia utilizando rigorosamente a regra geométrica Center-Out de digitalização!",
    practicalExercise: "Abra um logotipo no seu software de bordado. Abra a lista de objetos e reordene os elementos para que comecem do centro para as bordas e de baixo para cima. Simule o bordado no modo 3D e veja a lógica perfeita da expansão do tecido.",
    quickSummary: "Sequência obrigatória (Centro para Fora / Baixo para Cima) e compensação reforçada para bordados na curva de bonés estruturados.",
    relatedTerms: ["Bordado em Bonés e Artigos Cilíndricos", "Compensação de Encolhimento", "Ordem de Bordado", "Agulha SAN 1 / Anti-Deflexão"],
    tags: ["o-060", "bones", "center-out", "buckram", "bastidor de bone", "estruturado", "programacao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA CAP SYSTEMS. Cap Frame Operations, 270-Degree Drivers & Center-Out Digitizing. Tokyo, 2021.",
      "KAPLAN, S. The Master Guide to Cap Embroidery: Mechanics, Hooping & Digitizing. Stitches Mag, 2020."
    ]
  },
  {
    id: "otimizacao-geral-processos-produtividade-atelie",
    code: "O-061",
    letter: "O",
    term: "Otimização Geral de Processos e Produtividade em Ateliê (Overall Embroidery Workflow Optimization)",
    pronunciation: "o-ti-mi-za-ção ge-ral de pro-ces-sos e pro-du-ti-vi-da-de",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Operação da Máquina",
    summary: "Metodologia integrada de gestão Lean aplicada ao ateliê de bordado (5S, setup rápido, preparação antecipada de bastidores e manutenção programada), maximizando o tempo de máquina ligada e o lucro operacional.",
    origin: "Da metodologia japonesa de manufatura enxuta (Toyota Production System / Lean Manufacturing) adaptada para confecções e ateliês têxteis contemporâneos.",
    definition: "A Otimização Geral do Fluxo de Trabalho (Embroidery Shop Lean Workflow & Overall Equipment Efficiency - OEE) é a abordagem sistemática de engenharia de processos que visa maximizar o rendimento produtivo e a rentabilidade do ateliê de bordados. Baseia-se no princípio fundamental de que uma máquina de bordar só gera lucro e faturamento enquanto o volante estiver girando e a agulha estiver em movimento de costura. Envolve a eliminação de gargalos: preparação de bastidores em estação externa enquanto a máquina borda (Single Minute Exchange of Die - SMED), organização 5S de ferramentas e linhas, padronização de agulhas e entretelas, rotinas diárias de lubrificação e controle informatizado de pedidos.",
    howItWorks: [
      "1. Estação de Montagem Paralela: O operador monta o próximo tecido no segundo bastidor enquanto a máquina borda a peça atual.",
      "2. Quando a máquina termina e corta a linha, a troca de bastidor leva menos de 10 segundos.",
      "3. Disposição 5S: Tesouras de arremate, pinças, chaves e óleos ficam fixados em painéis magnéticos ao alcance imediato da mão.",
      "4. Paleta Padrão: As agulhas da máquina multi-agulhas mantêm sempre as cores básicas fixas (preto, branco, dourado, marinho, vermelho, verde).",
      "5. Bobinas Pré-bobinadas: Utiliza caixas de bobinas prontas industriais (bobinas Magnéticas / M-Class), eliminando paradas para encher canelinhas.",
      "6. Manutenção Preventiva: Limpeza e lubrificação são realizadas diariamente em horário fixo antes de ligar a produção.",
      "7. A eficiência de máquina ligada (OEE) sobe de 45% para mais de 85%, dobrando a capacidade diária de entrega do ateliê."
    ],
    beginnerExplanation: "É o método dos campeões para você produzir o dobro de peças no mesmo dia trabalhando com calma, sem correria e sem estresse! O segredo é ter dois bastidores do mesmo tamanho (enquanto a máquina borda um, você já vai prendendo o pano no outro), deixar suas tesourinhas e réguas sempre no mesmo lugar certinho e usar canelinhas já cheias. Assim, a sua máquina trabalha sem parar e você fatura muito mais!",
    applications: [
      "Aumento imediato do faturamento e capacidade de atendimento em datas comemorativas (Dia das Mães, Natal, Volta às Aulas)",
      "Redução de desperdício de tecidos, linhas e tempo ocioso de máquina",
      "Organização ergonômica de estações de trabalho em ateliês e fábricas",
      "Padronização de qualidade para equipes com múltiplos operadores"
    ],
    technicalDetails: "O indicador OEE (Overall Equipment Effectiveness) em ateliês de bordado é calculado por: OEE = Disponibilidade (tempo bordando / tempo total de turno) x Desempenho (PPM real / PPM nominal) x Qualidade (peças perfeitas de 1ª qualidade / total produzido). Ateliês desorganizados operam com OEE entre 35% e 48%; ateliês otimizados com processos Lean atingem OEE entre 78% e 88%.",
    commonErrors: [
      "❌ Esperar a máquina terminar de bordar para começar a montar o próximo tecido no bastidor (perde metade do dia com máquina parada)",
      "❌ Ficar parando a máquina para encher bobina na hora em vez de ter uma caixinha com 20 bobinas já cheias prontas",
      "❌ Trabalhar com bancada desorganizada, perdendo minutos preciosos procurando a tesourinha ou a régua a cada peça",
      "❌ Não fazer a manutenção diária e a máquina quebrar no meio de uma encomenda urgente com prazo apertado"
    ],
    troubleshootingTips: [
      "Se você sente que trabalha o dia todo mas produz poucas peças: Compre um segundo bastidor do seu tamanho favorito e adote a montagem paralela",
      "Se a máquina parar toda hora para trocar de linha: Padronize as primeiras agulhas da sua máquina com as cores mais usadas no seu ateliê",
      "Se você perder muito tempo arrematando fiapos na mão: Ajuste o cortador automático e ative a limpeza de pontos curtos no software"
    ],
    dicaArtrelados: "A regra de ouro Artrelados da produtividade máxima: tenha SEMPRE dois bastidores do tamanho que você mais usa (ex: dois bastidores 13x18 cm)! Enquanto a máquina borda um, você fecha o outro com calma. Quando a máquina apitar, você só tira um e encaixa o outro em 5 segundos! Sua produção dobra no primeiro dia!",
    voceSabia: "A aplicação dos princípios de produção enxuta (Lean) na indústria têxtil foi criada por Sakichi Toyoda, o inventor japonês do primeiro tear automático inteligente em 1924, que mais tarde fundou a lendária montadora de automóveis Toyota!",
    practicalExercise: "Cronometre no relógio quanto tempo você leva para trocar um bastidor na sua máquina hoje. Aplique a técnica de deixar o segundo bastidor já montado ao lado e cronometre a troca. Veja como você economiza mais de 2 horas em um dia de produção!",
    quickSummary: "Metodologia Lean de produtividade no ateliê (montagem paralela de bastidores, 5S e bobinas prontas); dobra a capacidade diária.",
    relatedTerms: ["Estação de Montagem (Hooping Station)", "Manutenção Preventiva", "Bobina Pré-Enrolada (Pre-Wound)", "Operação da Máquina"],
    tags: ["o-061", "produtividade", "lean", "otimizacao de processos", "5s", "gestao de atelie", "sucesso", "artrelados"],
    bibliographicReferences: [
      "WOMACK, J. & JONES, D. Lean Thinking: Banish Waste and Create Wealth in Your Organization. Free Press, 2021.",
      "EMBROIDERY BUSINESS ACADEMY. Shop Workflow Optimization, Lean Hooping & Equipment Effectiveness. Chicago, 2020."
    ]
  }
];

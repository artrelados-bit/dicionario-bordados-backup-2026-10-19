import { Verbete } from "../types";

export const VERBETES_LETTER_R7: Verbete[] = [
  {
    id: "rastreamento-de-imagem-raster",
    code: "R-049",
    letter: "R",
    term: "Rastreamento de Imagem (Raster)",
    pronunciation: "ras-tre-a-men-to de i-ma-gem ras-ter",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do alemão raster (grade, retícula) e do inglês Vector Tracing. Processo de conversão de mapa de bits em traçados vetoriais.",
    summary: "Processo digital de varredura que converte imagens de pixels em traços vetoriais matemáticos interpretáveis por softwares de bordado.",
    definition: "O rastreamento de imagem (Raster-to-Vector Tracing) é o processo computacional de converter uma imagem matricial formada por pixels (JPEG, PNG, TIFF) em linhas, arcos e curvas vetoriais contínuas matemáticas (formato Bezier/SVG). Como as máquinas de bordar operam por coordenadas vetoriais X-Y e não por matriz de pontos de tela, o rastreamento é a ponte tecnológica indispensável que permite transformar uma arte visual em pontos de costura.",
    technicalDetails: "Utiliza algoritmos de esqueletização (Skeletonization) para linhas finas e contornos de polígonos fechados (Polygonization) para áreas sólidas. A sensibilidade do traçado pode ser ajustada em parâmetros como tolerância de cantos, filtro de ruído e suavização de curvas.",
    beginnerExplanation: "É passar a foto do desenho pelo 'tradutor' do computador: ele transforma os pontinhos borrados da foto em riscos retos e perfeitos de vetor para o programa conseguir criar os pontos de bordado.",
    howItWorks: [
      "1. A imagem raster (mapa de pixels) é carregada no módulo de rastreamento.",
      "2. O algoritmo varre a grade de pixels linha por linha identificando contrastes.",
      "3. Cria nós de ancoragem ao longo das bordas das figuras coloridas.",
      "4. Conecta os nós com curvas matemáticas suaves, gerando o vetor limpo.",
      "5. Os objetos vetoriais são enviados para a geração dos pontos de máquina."
    ],
    applications: [
      "Vetorização de logotipos enviados por clientes em formatos de imagem comuns.",
      "Conversão de desenhos feitos à mão em papel e escaneados para o computador.",
      "Preparação de ilustrações para criação de matrizes de alta definição."
    ],
    characteristics: [
      "Permite ampliar ou reduzir a arte vetorial ao infinito sem perder qualidade.",
      "Reduz arquivos pesados de imagem para leves estruturas de dados matemáticos.",
      "Primeiro passo técnico da digitalização computadorizada profissional."
    ],
    commonErrors: [
      "❌ Rastrear imagens com sombras e degradês complexos sem limpar o fundo antes, gerando milhares de micro-vetores caóticos.",
      "❌ Não ajustar o nível de suavização, resultando em linhas com 'dentes de serra'.",
      "❌ Achar que o rastreamento gera o bordado pronto sem precisar definir tipos de pontos e direções."
    ],
    troubleshootingTips: [
      "Vetor cheio de cantos quebrados: aumente o nível de 'Suavização de Curvas' (Curve Smoothing) no módulo de rastreamento.",
      "Detalhes pequenos desaparecendo durante o rastreamento: diminua o 'Filtro de Ruído' (Noise Reduction) nas configurações.",
      "Linhas retas ficando onduladas: ative a opção 'Alinhar Nós aos Eixos Ortogonais' para forçar ângulos retos perfeitos."
    ],
    dicaArtrelados: "Se você usa o Wilcom ou o Embird, antes de rastrear uma imagem aumente o contraste dela no computador para deixar as cores bem vivas e sem sombras. O rastreamento sai 10 vezes mais limpo e rápido!",
    voceSabia: "O conceito de varredura 'Raster' vem dos primeiros tubos de raios catódicos das televisões antigas dos anos 1930, onde um canhão de elétrons varria a tela linha por linha em altíssima velocidade.",
    practicalExercise: "Importe um desenho simples de flor em preto e branco no software. Execute o comando 'Rastrear Bitmap / Quick Trace' e observe como os pixels quadrados se transformam instantaneamente em curvas vetoriais lisas.",
    quickSummary: "Rastreamento de imagem é a conversão dos pixels de uma foto em linhas vetoriais limpas que o software de bordado usa para gerar os pontos.",
    relatedTerms: ["Rasterização", "Vetorização de Imagem", "Curvas Bézier", "Digitalização Automática"],
    tags: ["rastreamento", "raster", "vetorização", "software", "pixels"]
  },
  {
    id: "rasterizacao",
    code: "R-050",
    letter: "R",
    term: "Rasterização",
    pronunciation: "ras-te-ri-za-ção",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino.",
    origin: "Do alemão raster (grade) e do sufixo de ação -ização. Operação gráfica inversa à vetorização.",
    summary: "Conversão de um desenho vetorial ou de uma matriz de bordado em uma imagem de grade de pixels (PNG, JPG) para visualização e impressão.",
    definition: "A rasterização é a operação matemática inversa ao rastreamento: consiste em converter objetos vetoriais geométricos, textos ou simulações tridimensionais de pontos de bordado em uma grade bidimensional de pixels coloridos (bitmap) com resolução fixa (DPI). É o processo que permite exibir o bordado na tela do celular do cliente, gerar catálogos em PDF, imprimir fichas técnicas ou criar mockups promocionais para e-commerce.",
    technicalDetails: "Realiza a amostragem de dados espaciais contínuos e aplica filtros de suavização de bordas (Anti-Aliasing) para evitar serrilhados nas transições entre os fios e o fundo da imagem. A resolução padrão de exportação para internet é de 72 a 150 DPI e para impressão gráfica é de 300 DPI.",
    beginnerExplanation: "É salvar o bordado do computador como uma foto normal (como JPG ou PNG) para você poder mandar no WhatsApp para o cliente ver como vai ficar, colocar no Instagram ou imprimir no papel.",
    howItWorks: [
      "1. A matriz de bordado está finalizada na tela do software com todos os seus pontos.",
      "2. A usuária seleciona a opção 'Exportar Imagem' ou 'Salvar como Imagem'.",
      "3. O software processa os vetores e gera uma grade retangular de pixels com cores e sombras fiéis.",
      "4. Aplica transparência no fundo (PNG) ou adiciona a textura do tecido escolhido.",
      "5. A foto em alta definição é salva e pode ser visualizada em qualquer celular ou computador sem precisar de programa de bordado."
    ],
    applications: [
      "Geração de mockups comerciais de alta qualidade para lojas virtuais e redes sociais.",
      "Criação de fichas de aprovação de orçamento enviadas em PDF para clientes.",
      "Impressão de catálogos físicos com as matrizes disponíveis no ateliê."
    ],
    characteristics: [
      "Permite que qualquer pessoa veja a arte sem precisar de software específico de bordado.",
      "Pode incluir marcas d'água de proteção contra cópia da matriz.",
      "Preserva as cores exatas da cartela de fios configurada."
    ],
    commonErrors: [
      "❌ Enviar a foto rasterizada para o cliente sem marca d'água transparente, correndo o risco de a concorrência copiar a arte.",
      "❌ Exportar imagens com resolução muito baixa (< 72 DPI), ficando com visual borrado nas redes sociais.",
      "❌ Esquecer de ativar a simulação 3D antes de exportar, gerando uma imagem plana sem relevo de fios."
    ],
    troubleshootingTips: [
      "Imagem ficando com fundo branco feio no WhatsApp: exporte no formato PNG com a opção 'Fundo Transparente' ativada.",
      "Foto do bordado parecendo sem nitidez: aumente a resolução de exportação para 300 DPI nas preferências do software.",
      "Clientes usando a foto sem pagar: adicione o logotipo do seu ateliê como marca d'água semi-transparente no centro da imagem."
    ],
    dicaArtrelados: "Ao rasterizar e salvar as fotos das suas matrizes para divulgar no Instagram, coloque sempre o nome do seu ateliê bem suave no meio da foto. Isso valoriza o seu trabalho profissional e protege a sua criação exclusiva!",
    voceSabia: "Todo monitor de computador, smartphone e televisão do planeta realiza o processo de rasterização em tempo real dezenas de vezes por segundo para transformar dados digitais na luz dos pixels da tela.",
    practicalExercise: "Abra sua matriz favorita no software. Ative o modo 3D e use o comando 'Arquivo > Exportar como Imagem (PNG)'. Abra o arquivo gerado no seu visualizador de fotos e veja a perfeição dos detalhes.",
    quickSummary: "Rasterização é a transformação do arquivo de bordado em uma foto (PNG/JPG) de alta definição para mandar para o cliente, postar na internet ou imprimir.",
    relatedTerms: ["Rastreamento de Imagem (Raster)", "Mockup Comercial", "Anti-Aliasing", "Exportação PNG"],
    tags: ["rasterização", "exportação", "imagem", "mockup", "software"]
  },
  {
    id: "richelieu",
    code: "R-051",
    letter: "R",
    term: "Richelieu",
    pronunciation: "ri-xe-li-ê",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino.",
    origin: "Nomeado em homenagem ao Cardeal Richelieu (1585-1642), primeiro-ministro francês de Luís XIII, célebre apreciador e promotor das rendas e bordados vazados franceses.",
    summary: "Técnica nobre clássica de bordado vazado onde áreas do tecido são recortadas e unidas por pequenas pontes de linha bordadas no ar (Brides).",
    definition: "O Richelieu (ou Bordado Vazado Richelieu / Cutwork Lace) é uma das técnicas mais nobres e tradicionais da história têxtil. Consiste na criação de motivos ornamentais contornados por pontos de caseado ou cordões de satim, no qual partes selecionadas do tecido de fundo são recortadas e removidas fisicamente, deixando aberturas decorativas que são sustentadas e interligadas por pequenas pontes estruturais bordadas (chamadas tecnicamente de 'Brides' ou 'Presilhas').",
    technicalDetails: "No método tradicional manual e artesanal, exige tecidos nobres de fibra natural pura (linho puro ou percal 100% algodão) e linhas de algodão ou seda de alta torção. A estabilização moderna é feita com entretelas hidrossolúveis pesadas (Aquafilm / Solufix) que dissolvem totalmente em água após o término.",
    beginnerExplanation: "É aquele bordado clássico de realeza, lindo e rendado, onde o tecido é cortado com furinhos decorativos e a máquina faz pontezinhas de linha cruzando os buracos, parecendo uma renda de luxo.",
    howItWorks: [
      "1. A bordadeira prende o tecido com entretela hidrossolúvel no bastidor.",
      "2. A máquina borda as linhas de marcação e as 'pontes de ligação' (Brides) no ar.",
      "3. O processo é pausado e a bordadeira recorta o tecido das áreas vazadas com tesoura fina.",
      "4. A máquina borda os cordões de satim perfeitos cobrindo e selando todas as bordas cortadas.",
      "5. A peça é lavada em água morna: a entretela dissolve e sobra apenas o bordado rendado perfeito."
    ],
    applications: [
      "Toalhas de mesa nobres para banquetes e jogos de jantar de linho puro.",
      "Enxovais finos de cama, lençóis de núpcias e capas de travesseiro de percal.",
      "Vestidos de noiva de alta costura, véus, golas vitorianas e batas de batizado."
    ],
    characteristics: [
      "Visual de altíssimo luxo com valor de mercado muito superior ao bordado comum.",
      "Transparência real obtida pela ausência física do tecido de fundo.",
      "Combinação perfeita entre técnicas de costura e recorte manual minucioso."
    ],
    commonErrors: [
      "❌ Usar entretela rasgável comum em vez de hidrossolúvel, ficando com pedaços de papel presos dentro dos furinhos vazados.",
      "❌ Recortar o tecido longe demais das linhas guias, deixando fiapos aparecendo fora do cordão de acabamento.",
      "❌ Cortar as pontes de linha (Brides) por acidente durante o recorte manual com a tesoura."
    ],
    troubleshootingTips: [
      "Pontes de linha se rompendo na lavagem: certifique-se de que a matriz tenha pelo menos 3 passagens de ponto corrido reforçado nas Brides antes do zigue-zague de acabamento.",
      "Tecido desfiando nas bordas vazadas: aumente a densidade do cordão satim de acabamento para 0.38 mm e use tesoura de ponta curva afiada.",
      "Entretela solúvel rasgando no bastidor: utilize entretela hidrossolúvel de alta espessura (80 micras) ou duas camadas sobrepostas."
    ],
    dicaArtrelados: "Para fazer um Richelieu dos sonhos: use uma tesoura de ponta bem fininha e afiada (tipo tesoura de cutícula ou tesoura curvinha de bordado). Corte com calma bem pertinho da costura sem encostar nas pontezinhas de linha. O resultado fica digno de palácio!",
    voceSabia: "O Cardeal Richelieu proibiu a importação de rendas italianas na França no século XVII para incentivar as bordadeiras francesas a criarem o seu próprio estilo nacional, originando a fama mundial do Bordado Richelieu.",
    practicalExercise: "Borde uma pequena flor em Richelieu usando entretela hidrossolúvel: siga as paradas para recortar o miolo com a tesoura e sinta a emoção de ver a renda perfeita surgir após mergulhar a peça na água.",
    quickSummary: "Richelieu é a técnica nobre de bordado rendado com tecido vazado e pontes estruturais de linha (Brides), criando peças clássicas de altíssimo luxo.",
    relatedTerms: ["Richelieu Computadorizado", "Brides (Pontes de Richelieu)", "Entretela Hidrossolúvel", "Cutwork"],
    tags: ["richelieu", "renda", "vazado", "luxo", "técnicas"]
  },
  {
    id: "richelieu-computadorizado",
    code: "R-052",
    letter: "R",
    term: "Richelieu Computadorizado",
    pronunciation: "ri-xe-li-ê com-pu-ta-do-ri-za-do",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Adaptação tecnológica contemporânea do bordado Richelieu manual para matrizes de máquinas eletrônicas.",
    summary: "Matriz digital programada com paradas estratégicas automáticas para recorte do tecido e construção de presilhas e cordões de satim perfeitos.",
    definition: "O Richelieu computadorizado é a transposição digital da técnica tradicional de corte e costura para arquivos de máquinas de bordar. A matriz é estruturada em uma sequência lógica obrigatória de 4 fases por parada de cor: 1) Linha guia de demarcação dos vazados; 2) Construção das presilhas/pontes no ar (Brides com pontos de ancoragem e zigue-zague); 3) Parada de máquina (Stop) para recorte manual do tecido; 4) Cordão satim denso com compensação perimetral para cobrir as bordas cortadas.",
    technicalDetails: "As pontes (Brides) são programadas sobre entretela hidrossolúvel com passadas triplas de suporte e zigue-zague fechado (passo 0.8 mm a 1.2 mm). O cordão de acabamento final deve ter largura de 3.5 mm a 5.0 mm com margem de segurança de pelo menos 1.0 mm sobre o tecido intacto.",
    beginnerExplanation: "É a matriz de bordado feita especialmente para a máquina ajudar você a fazer o Richelieu: a máquina costura a marcação, para sozinha para você cortar o tecido com a tesourinha e depois faz o acabamento de cetim perfeito.",
    howItWorks: [
      "1. A máquina borda as linhas de contorno e constrói as pontezinhas rendadas sobre o tecido com entretela solúvel.",
      "2. A máquina dá um comando automático de parada (Stop) e avança o bastidor para a bordadeira.",
      "3. Sem tirar o tecido do aro do bastidor, a bordadeira recorta as partes internas com tesoura fina.",
      "4. Aperta-se o botão Start: a máquina retorna e cobre todas as beiradas com cordões de cetim cheinhos.",
      "5. Ao dissolver a entretela na água, a renda fica perfeita e resistente."
    ],
    applications: [
      "Produção de barrados de toalhas de banho e rosto em estilo clássico europeu.",
      "Camisas femininas de luxo, camisolas de seda e lingeries nobres.",
      "Toalhas de altar para igrejas e peças comemorativas de bodas de ouro/prata."
    ],
    characteristics: [
      "Padronização e simetria impossíveis de alcançar no bordado manual livre.",
      "Extrema rapidez de execução em comparação com o trabalho manual tradicional.",
      "Garante que as pontes de linha fiquem com espessura e tensão uniformes."
    ],
    commonErrors: [
      "❌ Retirar o tecido de dentro do aro do bastidor para fazer o recorte na mesa (perdendo o alinhamento da máquina).",
      "❌ Programar cordão de acabamento fino demais (< 2.5 mm), que não consegue segurar o tecido cortado.",
      "❌ Usar velocidade alta na máquina durante a execução das pontes no ar, fazendo as laçadas escaparem."
    ],
    troubleshootingTips: [
      "Bordas do tecido escapando para fora do cordão satim: aumente a largura do cordão de acabamento na matriz para 4.0 mm e adicione compensação de encolhimento.",
      "Presilhas (Brides) ficando frouxas: programe um ponto de ancoragem firme no tecido em ambas as pontas da ponte antes de lançar a linha no ar.",
      "Recorte difícil nos cantos: use uma tesourinha de lâmina curva com micro-serrilha de precisão cirúrgica."
    ],
    dicaArtrelados: "A regra sagrada do Richelieu na máquina: NUNCA tire o tecido de dentro do bastidor na hora de cortar! Apenas desencaixe o bastidor da máquina com cuidado, apoie sobre a mesa plana, faça os recortes com a tesourinha e encaixe o bastidor de volta na máquina. O registro fica perfeito!",
    voceSabia: "Hoje existem pontas de corte a laser acopladas aos cabeçotes de máquinas industriais de bordar que executam os recortes de Richelieu em frações de segundo sem necessidade de intervenção manual.",
    practicalExercise: "Abra uma matriz de Richelieu no simulador do seu software e avance passo a passo. Observe como a programação faz primeiro as pontes sobre a área vazada e só depois aplica o cordão de cetim por cima.",
    quickSummary: "Richelieu computadorizado é a matriz programada com paradas automáticas e pontes de suporte para executar o bordado rendado vazado com precisão eletrônica.",
    relatedTerms: ["Richelieu", "Brides (Presilhas de Bordado)", "Comando Stop / Parada", "Entretela Solúvel em Água"],
    tags: ["richelieu", "computadorizado", "vazado", "matriz", "técnicas"]
  },
  {
    id: "rebordado",
    code: "R-053",
    letter: "R",
    term: "Rebordado",
    pronunciation: "re-bor-da-do",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino.",
    origin: "Do prefixo re- (repetição/sobreposição) e bordado. Técnica de sobreposição decorativa mista.",
    summary: "Técnica de enriquecer um bordado eletrônico existente aplicando pedrarias, pérolas, fitas ou novas camadas de pontos à mão ou à máquina.",
    definition: "O rebordado é o processo misto ou híbrido de arte têxtil no qual uma peça previamente bordada na máquina eletrônica recebe uma segunda camada de intervenção ornamental. Isso pode incluir a aplicação manual de cristais, vidrilhos, pérolas e lantejoulas sobre os pontos de máquina, a sobreposição de fitas de seda e fios metalizados ou o retorno da peça ao bastidor para acrescentar novos relevos e detalhes.",
    technicalDetails: "No design de alta costura, as matrizes de base são programadas com pequenos pontos circulares vazados (Eyelets / Marcadores de Pedraria) de 1.0 mm que servem como guia exato de posicionamento para a costureira fixar cada cristal ou pérola manualmente.",
    beginnerExplanation: "É deixar o bordado da máquina ainda mais chique e valioso: bordar o desenho na máquina e depois pregar pérolas, pedrinhas brilhantes ou fitas por cima com a mão para dar um acabamento de luxo.",
    howItWorks: [
      "1. A matriz é bordada na máquina criando a estrutura floral ou o arabesco principal.",
      "2. A peça é retirada do bastidor e passa pelo acabamento e passagem a ferro.",
      "3. A artesã ou estilista aplica pérolas, miçangas ou cristais Swarovski sobre pontos estratégicos da flor.",
      "4. Fios de seda ou pontos manuais adicionam texturas orgânicas exclusivas.",
      "5. A peça se transforma em um item de alta costura com valor de venda multiplicado."
    ],
    applications: [
      "Vestidos de noiva, véus e vestidos de festa para madrinhas e debutantes.",
      "Roupas finas de batizado, mandriões e tiaras infantis com pérolas.",
      "Customização de jaquetas jeans premium e bolsas de grife."
    ],
    characteristics: [
      "Combina a perfeição geométrica da máquina com a exclusividade do artesanato manual.",
      "Multiplica o valor agregado da peça em até 5 a 10 vezes no mercado de luxo.",
      "Proporciona textura tátil tridimensional incomparável."
    ],
    commonErrors: [
      "❌ Colocar pedrarias pesadas em tecidos finos sem a devida entretela de sustentação, repuxando o tecido.",
      "❌ Usar cola quente ou colas comuns que soltam e mancham o bordado na primeira lavagem.",
      "❌ Bordar pedrarias na máquina sem agulha própria para lantejoulas, quebrando a agulha ao bater nas pedras."
    ],
    troubleshootingTips: [
      "Pedrarias soltando da roupa: use sempre linha 100% poliamida invisível ou linha de pesca fina (0.20 mm) com nós duplos pelo avesso.",
      "Cola manchando o tecido ao redor do bordado: substitua por costura manual ponto a ponto com agulha fina para miçanga nº 12.",
      "Marcação de pedraria torta: programe micro-pontos guia de 1 mm na matriz para saber exatamente onde cada pérola deve ser pregada."
    ],
    dicaArtrelados: "Para criar vestidos de noiva e batizado inesquecíveis: borde arabescos delicados em tom champanhe na máquina e reborde o miolo das flores com pérolas barrocas e mini-vidrilhos. As noivas e mães se apaixonam à primeira vista!",
    voceSabia: "Nas grandes casas de alta costura de Paris (como Chanel e Dior), o ateliê Lesage mantém mais de 60 toneladas de pérolas e cristais antigos dedicados exclusivamente ao trabalho de rebordado manual sobre bases têxteis.",
    practicalExercise: "Borde uma rosa simples na máquina. Pegue agulha fina e linha invisível e pregue 3 pequenas pérolas brancas no centro da flor. Veja como a peça ganha um ar de joia imediatamente.",
    quickSummary: "Rebordado é o enriquecimento do bordado de máquina com pedrarias, pérolas ou pontos manuais, transformando a peça em um artigo de luxo exclusivo.",
    relatedTerms: ["Alta Costura", "Aplicação de Pedrarias", "Eyelets (Pontos Guia)", "Bordado Híbrido"],
    tags: ["rebordado", "pedraria", "luxo", "alta costura", "acabamento"]
  },
  {
    id: "recorte-no-bordado",
    code: "R-054",
    letter: "R",
    term: "Recorte no Bordado",
    pronunciation: "re-cor-te no bor-da-do",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim re- e curtare (cortar, diminuir). Operação de corte manual ou a laser de tecidos estruturais.",
    summary: "Ato de cortar o tecido excedente ao redor de apliques, rendas, bordados ITH ou áreas vazadas de Richelieu.",
    definition: "O recorte no bordado (Trimming / Cutwork) é a intervenção manual ou automatizada (laser) pela qual o excesso de tecido periférico, a sobra de retalhos de apliques ou o miolo de áreas vazadas é cortado com tesouras especiais rente à costura de fixação (Tackdown) antes da execução dos cordões de acabamento ou durante a finalização da peça.",
    technicalDetails: "Exige o uso de tesouras especializadas com lâminas curvas, pontas arredondadas e lâmina em formato de bico de pelicano (Pelican Appliqué Scissors / Duckbill Scissors), que protegem o tecido de base de cortes acidentais enquanto garantem um corte rente de 0.5 mm a 1.0 mm da linha de costura.",
    beginnerExplanation: "É a hora de pegar a tesourinha e cortar as sobras de tecido que ficaram para fora da costura, deixando tudo bem aparadinho para o ponto cheio cobrir e fazer o acabamento perfeito.",
    howItWorks: [
      "1. A máquina executa a costura de fixação prendendo o tecido no bastidor.",
      "2. O bastidor é desencaixado da máquina e apoiado firmemente em uma mesa plana.",
      "3. A bordadeira segura a sobra de tecido levantada com uma mão.",
      "4. Com a tesoura pelicano apoiada paralelamente ao tecido, recorta todo o contorno a cerca de 1 mm da linha.",
      "5. O bastidor é recolocado na máquina para receber o cordão final de cobertura."
    ],
    applications: [
      "Recorte de sobras em técnicas de aplique com tecidos estampados.",
      "Recorte perimetral de chaveiros, tags e bonecos no bastidor (In The Hoop).",
      "Remoção de tecidos vazados em bordados Richelieu e rendas Cutwork.",
      "Corte e acabamento de patches e emblemas termocolantes."
    ],
    characteristics: [
      "Determina se o acabamento final terá fiapos feios ou bordas limpas.",
      "Exige tesouras de altíssima precisão e excelente corte até a ponta.",
      "Deve ser feito sem puxar o tecido preso nos aros do bastidor."
    ],
    commonErrors: [
      "❌ Cortar longe demais da costura (ex: a 3 mm de distância), fazendo as pontas do tecido escaparem para fora do cetim.",
      "❌ Cortar a linha da costura guia por acidente ao usar tesouras cegas ou retas.",
      "❌ Apoiar o peso do corpo sobre o bastidor durante o corte, entortando os aros plásticos."
    ],
    troubleshootingTips: [
      "Tecido cortado acidentalmente: aplique uma pequena gota de cola de silicone líquido no verso ou uma tirinha de entretela termocolante para salvar a peça antes de cobrir com o satim.",
      "Tesoura mastigando o tecido: afie as lâminas ou adquira uma tesoura pelicano de aço forjado própria para aplique.",
      "Fiapos sobrando: use uma pinça de precisão para segurar as pontinhas e apare com tesoura curva fina."
    ],
    dicaArtrelados: "Invista em uma boa 'Tesoura Pelicano' (aquela tesoura que tem uma lâmina chata parecendo um bico de pato). A lâmina chata corre por baixo empurrando o tecido de base e impede que você fure a peça do cliente sem querer!",
    voceSabia: "A tesoura bico de pelicano foi patenteada nos Estados Unidos no século XIX originalmente para aparar tapetes e carpetes tufados sem cortar a trama de sustentação do piso.",
    practicalExercise: "Pegue um retalho de tecido preso com uma costura reta. Tente recortar a sobra usando uma tesoura comum de papel e depois usando uma tesoura curva de bordado. Note a diferença na velocidade e na precisão do corte.",
    quickSummary: "Recorte no bordado é o corte cuidadoso das sobras de tecido rente à costura de guia para permitir acabamentos limpos em apliques, Richelieu e chaveiros.",
    relatedTerms: ["Recorte de Appliqué", "Tesoura Pelicano", "Linha de Fixação (Tackdown)", "Acabamento de Bordas"],
    tags: ["recorte", "tesoura", "aplique", "acabamento", "bastidor"]
  },
  {
    id: "recorte-de-applique",
    code: "R-055",
    letter: "R",
    term: "Recorte de Appliqué",
    pronunciation: "re-cor-te de a-pli-quê",
    level: "Iniciante 🟢",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês appliquer (sobrepor tecido). Procedimento de corte manual ou pré-corte digital de retalhos.",
    summary: "Etapa de aparar o retalho de tecido do aplique exatamente rente à costura de fixação (Tackdown) antes do ponto de acabamento.",
    definition: "O recorte de appliqué (ou corte de aplique) é o procedimento técnico específico em que o retalho de tecido sobreposto é aparado rente à costura de fixação (Tackdown). Pode ser realizado de forma manual no bastidor com tesoura pelicano ou através de pré-recorte digital prévio (Die-Cutting) utilizando máquinas de corte eletrônicas (Silhouette, Cricut, ScannCut) ou corte a laser, onde o tecido entra no bastidor já cortado na medida exata.",
    technicalDetails: "No recorte manual, a margem ideal de corte residual é de 0.8 mm a 1.2 mm da costura guia. No pré-recorte digital, a matriz deve conter uma tolerância de recuo (Inset/Offset) de 0.3 mm para acomodar o retalho pré-cortado perfeitamente sob a linha guia.",
    beginnerExplanation: "É quando a máquina prende o tecidinho colorido do aplique, você corta toda a beiradinha que sobrou com a tesoura e a máquina passa o ponto de cetim por cima para esconder o corte e ficar lindo.",
    howItWorks: [
      "1. A máquina borda a linha de marcação no tecido base.",
      "2. Coloca-se o tecido do aplique (com termocolante no verso) cobrindo a marcação.",
      "3. A máquina executa a costura de fixação (Tackdown).",
      "4. A bordadeira desencaixa o bastidor e recorta todo o excesso com a tesourinha pelicano bem rente.",
      "5. O bastidor volta para a máquina e o ponto cheio cobre a borda cortada com acabamento perfeito."
    ],
    applications: [
      "Bordado de letras, números e nomes grandes em blusões de moletom e bodies de bebê.",
      "Almofadas decorativas com bichinhos e flores em tecido estampado.",
      "Toalhas de banho e panos de prato temáticos com barrados recortados."
    ],
    characteristics: [
      "Reduz em até 80% o número de pontos de uma matriz grande.",
      "Deixa a peça leve e confortável sem placas duras de linha.",
      "Permite combinar estampas e texturas reais com o bordado."
    ],
    commonErrors: [
      "❌ Puxar o retalho de tecido com força enquanto corta, esticando a malha e desfiando as beiradas.",
      "❌ Deixar pontas de tecido compridas demais que escapam para fora do ponto cheio.",
      "❌ Esquecer de aplicar termocolante no verso do tecido do aplique, fazendo o tecido desfiar com o tempo."
    ],
    troubleshootingTips: [
      "Tecido desfiando por baixo do ponto cheio após algumas lavagens: use sempre papel termocolante definitivo no verso do tecido antes de bordar.",
      "Tecido do aplique escapando do ponto cheio: aumente a largura do cordão satim de acabamento para pelo menos 4.0 mm no software.",
      "Corte ficando mastigado: use tesoura pelicano bem afiada e corte com a lâmina apoiada rente aos pontos."
    ],
    dicaArtrelados: "Para o aplique ficar com acabamento de loja de shopping: cole papel termocolante no verso do tecido estampado antes de colocar no bastidor. Ao passar o ferro no final, o tecido do aplique se funde à camisa e nunca mais desfia nem solta fiapos!",
    voceSabia: "Com o avanço das plotters de corte domésticas (como a ScanNCut), muitas bordadeiras hoje escaneiam o arquivo da matriz e cortam 50 retalhos de tecido idênticos no laser ou lâmina em menos de 2 minutos!",
    practicalExercise: "Faça um aplique de estrela simples em um retalho: teste cortar um lado com termocolante no verso do tecido e o outro lado sem termocolante. Lave e compare como o lado com termocolante fica muito mais selado e perfeito.",
    quickSummary: "Recorte de appliqué é a poda cuidadosa das sobras do retalho de tecido preso pela costura guia para receber o cordão de acabamento final.",
    relatedTerms: ["Appliqué / Aplique", "Papel Termocolante", "Linha de Fixação (Tackdown)", "Pré-recorte Digital"],
    tags: ["applique", "recorte", "termocolante", "técnicas", "bastidor"]
  }
];

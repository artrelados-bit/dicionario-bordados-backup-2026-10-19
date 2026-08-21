import { Verbete } from "../types";

export const VERBETES_LETTER_M_PART4: Verbete[] = [
  {
    id: "m-019-matriz-vetorial-vs-matriz-pontos-expanded-stitch-file",
    code: "M-019",
    term: "Matriz Vetorial vs. Matriz de Pontos Puncionada (Vector Objects vs. Expanded Stitch Files)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino / Da ciência da computação gráfica e formatos de dados CAD/CAM.",
    origin: "Evolução dos formatos de arquivos proprietários de software (.EMB, .EOF, .PES editável) em contraste com os formatos expandidos puramente de máquina (.DST, .EXP), originários dos antigos cartões binários.",
    summary: "Diferença fundamental entre o arquivo vetorial editável (com objetos e propriedades) e o arquivo compilado de máquina (composto apenas por furos e coordenadas rígidas).",
    definition: "A distinção entre Matriz Vetorial Baseada em Objetos (Object-Based Vector Design / Master File) e Matriz de Pontos Puncionada/Expandida (Expanded Stitch File / Machine Format) é um dos conceitos mais cruciais na digitalização profissional de bordados. O arquivo vetorial mestre (formatos nativos de softwares como .EMB do Wilcom, .EOF do Embird, .BE do Embrilliance) armazena formas geométricas inteligentes, nós de curvas bézier, tipos de pontos configuráveis, parâmetros dinâmicos de sob-ponto e compensação de repuxo. Já o arquivo de pontos puro (formatos como .DST da Tajima ou arquivos de máquina expandidos) armazena apenas uma lista estática de coordenadas (X, Y) e comandos de máquina; se for redimensionado, os pontos são simplesmente esticados ou comprimidos, sem recalcular a densidade original.",
    technicalDetails: "Comparação técnica entre os dois paradigmas de arquivo:\n• Matriz Vetorial (.EMB, .EOF, .BE, .ART):\n  - Contém objetos inteligentes (Linha A, Satim Complexo, Tatami com Ângulos Dinâmicos);\n  - Permite redimensionar em ±50% ou mais com recálculo automático de quantidade de pontos e densidade milimétrica constante;\n  - Mantém a paleta de cores original e parâmetros de sob-pontos configuráveis;\n• Matriz de Pontos / Expandida (.DST, .EXP, .PES puro exportado):\n  - Contém apenas comandos brutos: PONTO (X, Y), SALTO (X, Y), CORTE, PARADA;\n  - Não contém informações sobre a forma do objeto; se diminuir em 30%, a máquina espremerá todos os pontos no mesmo espaço causando rigidez e quebra de agulhas;\n  - O formato .DST não armazena a paleta de cores interna (as cores exibidas dependem da configuração da máquina).",
    howItWorks: [
      "1. O programador cria a matriz a partir do logotipo original desenhando objetos vetoriais no software de criação.",
      "2. Salva o 'Arquivo Mestre' no formato nativo editável (.EMB / .EOF).",
      "3. O software compila esses objetos vetoriais em coordenadas de agulhadas e gera o arquivo de máquina (.PES, .DST, .JEF).",
      "4. O arquivo de máquina é enviado para a máquina bordar.",
      "5. Se um dia o cliente pedir o mesmo desenho 30% maior para colocar nas costas de uma jaqueta: o programador abre o arquivo mestre .EMB original.",
      "6. Redimensiona o vetor com dois cliques: o software adiciona automaticamente milhares de novos pontos mantendo a densidade perfeita.",
      "7. Exporta um novo arquivo de máquina impecável, sem distorção e sem perda de qualidade."
    ],
    beginnerExplanation: "Pense no arquivo vetorial como a 'massa de modelar fresca' e no arquivo de pontos de máquina como um 'boneco de gesso já assado no forno'! Quando você tem o arquivo de desenho no computador (o arquivo vetorial), você pode esticar, diminuir, mudar a cor e mudar o tipo de ponto como quiser que ele se adapta sozinho perfeitamente. Mas quando você salva o arquivo para a máquina (como .DST ou .PES), ele 'endurece' e vira apenas uma lista de furos fixos. Por isso, nunca delete o seu arquivo original do programa de computador: ele é o seu maior tesouro!",
    applications: [
      "Gerenciamento e arquivo histórico de logotipos corporativos de clientes no ateliê",
      "Redimensionamento profissional de matrizes sem perda de densidade de pontos",
      "Alteração de sob-pontos para adaptar a mesma matriz de sarja para toalha de banho ou malha",
      "Padronização de arquivos para clientes que possuem marcas diferentes de máquinas"
    ],
    commonErrors: [
      "Deletar o arquivo vetorial editável (.EMB/.EOF) e guardar apenas o arquivo de máquina (.DST/.PES)",
      "Tentar redimensionar um arquivo .DST em mais de 10% no painel da máquina de bordar",
      "Esperar que um arquivo .DST aberto no computador mostre as cores exatas que foram usadas na máquina"
    ],
    troubleshootingTips: [
      "Guarde sempre duas versões de cada projeto: a pasta 'Mestres' (com arquivos .EMB/.EOF) e a pasta 'Máquinas' (com arquivos .PES/.DST/.JEF)",
      "Se você só tem o arquivo .DST e precisa aumentar o desenho: use ferramentas de reconhecimento de objetos (Convert Stitch to Object) no Wilcom ou Embird antes de redimensionar",
      "Ao enviar arquivos para clientes ou terceiros, forneça o formato específico de máquina que a bordadeira deles utiliza"
    ],
    dicaArtrelados: "Organize as matrizes do seu ateliê como uma biblioteca profissional: crie uma pasta no computador com o nome do cliente e salve SEMPRE o arquivo editável original (.EMB ou .EOF) junto com o arquivo de máquina (.PES). Se o cliente voltar daqui a 2 anos pedindo o mesmo bordado em um tamanho diferente, você resolve em 30 segundos!",
    voceSabia: "O formato .DST (Tajima) é o formato universal de máquina de bordar mais antigo e amplamente suportado do mundo, tendo sido criado na década de 1980 baseado no padrão de fita perfurada de 8 bits!",
    practicalExercise: "No seu software: crie um círculo com ponto tatami, salve em .EMB e exporte em .DST. Abra o .DST de volta no programa e repare como ele não tem mais as propriedades de objeto editável, apenas milhares de pontinhos individuais!",
    quickSummary: "Matriz vetorial é o arquivo mestre inteligente e editável; matriz de pontos é a compilação estática de coordenadas executada pela máquina.",
    relatedTerms: ["Formato DST", "Formato PES", "Formato EMB", "Densidade de Ponto", "Compilação de Pontos"],
    tags: ["m-019", "matriz vetorial", "arquivo de pontos", "expanded", "dst", "emb", "pes", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Vector Object Architecture vs. Expanded Stitch Files. Sydney: Wilcom, 2022.",
      "ARTRELADOS. A Bíblia dos Arquivos Digitais: Formatos Vetoriais, DST, PES, Conversões e Preservação de Matrizes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-020-multi-bandeira-bastidor-multiplos-campos-multi-position-hoop",
    code: "M-020",
    term: "Multi-Bandeira e Bastidor de Múltiplos Campos (Multi-Position & Multi-Window Hoops)",
    letter: "M",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino / Do latim 'multi' (muitos) e 'bandaria' (faixa/campo).",
    origin: "Solução mecânica desenvolvida para expandir a área útil de bordado em máquinas domésticas de braço curto, permitindo bordar desenhos longos divididos em etapas sem desencarcerar o tecido do bastidor.",
    summary: "Bastidor especial longo com múltiplos pontos de engate mecânico que permite bordar matrizes divididas maiores que o campo nativo da máquina.",
    definition: "O Bastidor Multi-Bandeira ou Bastidor de Múltiplas Posições (Multi-Position Hoop / Repositionable Multi-Window Hoop / Bastidor de Estágios) é um acessório de fixação projetado especificamente para máquinas de bordar domésticas que possuem limitações de deslocamento físico do pantógrafo (como campos nativos de 10x10 cm ou 13x18 cm). O bastidor possui uma estrutura externa longa e múltiplos encaixes ou travas laterais (posições A, B e C). A matriz de bordado é previamente dividida no software em duas ou três partes conectadas; após a máquina bordar a primeira etapa, o operador desencaixa o bastidor do pantógrafo e o reencaixa no estágio seguinte, sem soltar o tecido do aro.",
    technicalDetails: "Engenharia e operação do bastidor multi-bandeira:\n• Estágios Mecânicos: Geralmente 2 ou 3 posições de engate com travas de clique rápido;\n• Área Total Expandida Típica: Converte uma máquina de 10x10 cm para uma área contínua de 10x17 cm ou 13x18 cm para 13x30 cm;\n• Divisão no Software (Multi-Hooping / Split Design): O software insere marcas de alinhamento e divide os blocos de pontos respeitando as fronteiras de cada campo mecânico;\n• Pontos de Conexão: Uso de pontos corridos de casamento ou cruz de registro para assegurar que a emenda entre os estágios fique invisível;\n• Preservação da Tensão Têxtil: Como o tecido permanece preso no mesmo bastidor durante todos os estágios, o risco de desalinhamento por desencarceramento é eliminado.",
    howItWorks: [
      "1. A bordadeira cria uma matriz longa (ex: um nome composto ou uma barra de toalha de 30 cm) no software de bordado.",
      "2. O software divide a matriz em duas partes (Parte 1 e Parte 2) e salva os arquivos com marcas de registro.",
      "3. A bordadeira prende o tecido no bastidor multi-bandeira apenas uma vez.",
      "4. Encaixa o bastidor no pantógrafo da máquina na posição 'A' (superior).",
      "5. Borda a Parte 1 do desenho.",
      "6. A máquina para: a bordadeira solta a trava mecânica do bastidor e o desloca para a posição 'B' (inferior), engatando no novo pino.",
      "7. Carrega a Parte 2 na máquina e dá o Start: o bordado se conecta perfeitamente na emenda formando uma única barra longa contínua."
    ],
    beginnerExplanation: "O bastidor multi-bandeira (ou bastidor de 2 ou 3 estágios) é como um 'truque de mágica' para quem tem uma máquina com campo de bordado menor (como a de 13x18 cm ou 10x10 cm)! Sabe quando você quer bordar um nome bem comprido em uma toalha de banho ou uma frase longa, mas a sua máquina não tem espaço? Esse bastidor é comprido e tem 2 ou 3 'trilhos' de encaixe: a máquina borda a primeira metade do nome, você só empurra o bastidor para o próximo clique sem tirar o pano de dentro, e a máquina borda a segunda metade certinho! É maravilhoso!",
    applications: [
      "Bordado de barras longas contínuas em toalhas de banho e lençóis de casal",
      "Frases compridas e nomes compostos em faixas de maternidade e panos de prato",
      "Composições florais estendidas e arabescos em barras de vestidos",
      "Maximização da capacidade de produção em máquinas de bordar domésticas de pequeno porte"
    ],
    commonErrors: [
      "Desprender o tecido do bastidor entre uma etapa e outra (o tecido nunca mais volta para a posição exata)",
      "Inverter a ordem dos arquivos (bordar a Parte 2 antes da Parte 1)",
      "Não conferir o alinhamento da emenda antes de iniciar a segunda parte do bordado"
    ],
    troubleshootingTips: [
      "Use entretela rasgável ou de corte bem esticada para que o tecido não ceda nas bordas durante a movimentação entre estágios",
      "Ao dividir o desenho no software: posicione a linha de corte em um espaço em branco entre duas letras ou folhas para a emenda ficar 100% invisível",
      "Faça o teste de traçado (Trace) antes de bordar cada uma das etapas para garantir que o cabeçote não bata nas bordas"
    ],
    dicaArtrelados: "Para fazer emendas perfeitas com o bastidor de múltiplos estágios: nunca corte uma letra ao meio na divisão do software! Divida a matriz sempre no vão entre duas palavras ou entre um ramo de folhas. A emenda fica completamente imperceptível a olho nu!",
    voceSabia: "Antes da criação dos bastidores multi-bandeira, para bordar uma barra de 30 cm em uma máquina de 10 cm a bordadeira precisava tirar e prender a toalha no bastidor 3 vezes, gastando mais de 15 minutos em marcações manuais para cada peça!",
    practicalExercise: "No seu software de bordados: crie um texto longo com 25 cm, use a ferramenta 'Dividir Bastidor' (Multi-Hoop) configurada para bastidor de 2 estágios, e observe como o programa cria automaticamente os dois arquivos numerados!",
    quickSummary: "Bastidor longo com múltiplos pontos de engate mecânico que permite bordar desenhos grandes divididos em etapas contínuas na mesma montagem.",
    relatedTerms: ["Divisão de Matriz (Split Design)", "Marcas de Registro", "Área de Bordado", "Bastidor 13x18", "Multi-Hooping"],
    tags: ["m-020", "multi-bandeira", "multi-position hoop", "bastidor de estagios", "divisao de matriz", "emenda", "toalhas", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Multi-Position Hooping Techniques and Design Splitting Guidelines. Nagoia: Brother, 2022.",
      "ARTRELADOS. Maximizando o Campo de Bordado: Bastidores Multi-Bandeira, Divisão Perfeita de Matrizes e Emendas Invisíveis. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-021-minky-plush-tecido-soft-ultramacio-high-pile-fleece",
    code: "M-021",
    term: "Minky, Plush e Tecidos Soft Ultramacios (Minky, Cuddle Plush & High-Pile Fabrics)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino / Do inglês 'mink' (visom/pele macia) e do francês 'peluche' (felpudo).",
    origin: "Tecidos sintéticos de microfibra de poliéster 100% desenvolvidos na década de 1990 para reproduzir a maciez extrema e o toque aveludado de peles nobres, consagrando-se como padrão global em naninhas e enxovais de bebês.",
    summary: "Tecido de microfibra extremamente macio, aveludado e com pelos altos ou relevos (Minky Dots), que exige estabilização firme, agulha Ball Point e plástico hidrossolúvel superior.",
    definition: "O Minky (Cuddle Fleece / Plush / Tecido Soft Ultramacio / Velboa / Pele de Pêssego) é um tecido sintético de alta tecnologia produzido com microfibras de poliéster cardadas e tosquiadas, caracterizado por sua maciez extrema, caimento fluido e pelos superficiais de altura variável (de 1,5 mm a 5 mm). Apresenta-se em versões lisas, texturizadas com bolinhas em relevo térmico (Minky Dots) ou com efeito de rosas/escamas. No bordado computadorizado, o Minky é amplamente utilizado em naninhas de bebê, mantas e bichinhos de pelúcia, mas apresenta dois desafios técnicos: elasticidade unilateral acentuada e pelos densos que engolem os pontos, exigindo estabilizador de corte no verso e filme solúvel no topo.",
    technicalDetails: "Propriedades físicas e parametrização para bordar em Minky:\n• Composição: 100% Poliéster virgem de filamentos microscópicos;\n• Altura do Pelo (Pile Height): 1,5 mm a 4,0 mm;\n• Estabilização do Verso: Entretela de corte resistente (Cut-Away 60 g/m² a 80 g/m²) ou entretela rasgável pesada aplicada com cola spray temporária;\n• Película de Superfície Obrigatória (Topping): Filme plástico hidrossolúvel de 20 a 35 micras na face superior;\n• Agulha Indicada: Agulha de Ponta Bola Fina (Ball Point / SES calibre 75/11 ou 80/12);\n• Compensação de Repuxo: Aumentar no software para 0,40 mm a 0,45 mm para evitar que as colunas de satim se estreitem sob a pressão do pelo;\n• Proibição Absoluta de Ferro Quente: O poliéster do Minky derrete com facilidade e o relevo das bolinhas (dots) é destruído se receber calor direto de ferro de passar.",
    howItWorks: [
      "1. A bordadeira aplica adesivo spray temporário sobre a entretela de corte.",
      "2. Assenta o verso do tecido Minky sobre a entretela, alisando com a mão sem esticar.",
      "3. Cobre a frente com pelos do Minky com uma folha de plástico solúvel (hidrossolúvel).",
      "4. Encaixa o conjunto no bastidor com aperto suave do parafuso (ou monta apenas a entretela e flutua o Minky).",
      "5. A máquina de bordar executa a matriz: o plástico superior impede que os fios afundem no pelo macio.",
      "6. Ao finalizar, puxa-se o excesso de plástico solúvel e removem-se os cantinhos com vaporizador térmico suave.",
      "7. O bordado fica em relevo deslumbrante, nítido e com o toque macio intacto."
    ],
    beginnerExplanation: "O Minky (ou Plush) é aquele tecido fofinho e quentinho que parece um 'abraço de urso', super usado para fazer naninhas de bebê, mantas fofas e bichinhos de pelúcia! Como ele tem pelinhos macios, se você tentar bordar direto nele sem colocar nada por cima, a linha do bordado vai sumir dentro dos pelos como se tivesse caído na grama alta. Para bordar Minky com perfeição, você só precisa de duas coisas: colocar um plastiquinho solúvel por cima antes de bordar e NUNCA passar ferro quente direto nele (porque o ferro queima e derrete os pelinhos)!",
    applications: [
      "Naninhas de bebê, mantas de berço e almofadas térmicas de maternidade",
      "Bichinhos de pelúcia e bonecas de pano feitos no bastidor (In The Hoop Plushies)",
      "Casacos infantis, golas de inverno e pantufas fofas personalizadas",
      "Capas de almofada com monogramas em relevo para quartos de bebê"
    ],
    commonErrors: [
      "Bordar Minky sem plástico solúvel por cima (o bordado fica todo afundado e invisível)",
      "Passar o ferro de passar roupa quente em cima do Minky (derrete os pelos e apaga as bolinhas de relevo)",
      "Esticar o tecido ao fechar o bastidor (deforma a naninha e cria rugas irreversíveis)"
    ],
    troubleshootingTips: [
      "Para tirar os restos de plástico solúvel do Minky: use um borrifador com água morna ou vaporize com o ferro a 10 cm de distância sem encostar",
      "Monte o Minky no bastidor usando o método da flutuação com cola spray para não deixar marcas redondas de aro nos pelos",
      "Em letras pequenas bordadas em Minky: use matrizes com sob-ponto em grade (Tatami Underlay) para prensar os pelos antes do ponto cheio"
    ],
    dicaArtrelados: "Para bordar naninhas de Minky sem amassar as bolinhas e sem deixar marca de bastidor: prenda somente a entretela no bastidor, passe cola temporária, cole o Minky e coloque o plástico solúvel por cima! A peça borda com acabamento de loja de brinquedos importada!",
    voceSabia: "O tecido Minky foi apelidado dessa forma em homenagem à pele do visom ('mink' em inglês), um pequeno mamífero famoso na história da moda pelo toque aveludado e macio da sua pelagem!",
    practicalExercise: "Pegue um retalho de Minky com bolinhas: monte com entretela e plástico solúvel por cima, borde o rostinho de um ursinho e retire o plástico solúvel com água: sinta como os pontos ficam altos, brilhantes e destacados!",
    quickSummary: "Tecido sintético de microfibra ultramacio e peludo que exige filme solúvel superior e proteção total contra calor direto de ferro.",
    relatedTerms: ["Naninhas", "Filme Hidrossolúvel (Topping)", "Flutuação (Float)", "Plush", "In The Hoop (ITH)"],
    tags: ["m-021", "minky", "plush", "soft", "naninha", "bebe", "topping", "hidrossoluvel", "fleece", "artrelados"],
    bibliographicReferences: [
      "BABY APPAREL & TOY TEXTILE COUNCIL. Safety, Softness and Machine Embroidery Standards for High-Pile Fabrics. Washington: BATTC, 2022.",
      "ARTRELADOS. O Universo Maternidade: Minky, Plush, Fraldas e Técnicas de Bordado em Pelos Altos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-022-molde-ponto-cruz-digital-cross-stitch-grid",
    code: "M-022",
    term: "Molde de Ponto Cruz Digital (Digital Cross-Stitch Grid & Chart Digitizing)",
    letter: "M",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino / Do latim 'modulus' (medida/molde) e da geometria em malha ortogonal.",
    origin: "Transposição digital computadorizada da mais antiga técnica de bordado manual da humanidade (praticada desde a Antiguidade em tecidos etamine e canhoneira) para matrizes executadas automaticamente por máquinas CNC.",
    summary: "Digitalização geométrica que converte gráficos quadriculados e esquemas de ponto cruz em trajetos contínuos de pontos em 'X' na máquina de bordar.",
    definition: "O Molde de Ponto Cruz Digital (Machine Cross-Stitch Digitizing / Digital Cross-Stitch Grid & Chart) é o módulo especializado de programação de bordado que reproduz com fidelidade estética absoluta o aspecto tradicional e rústico do bordado manual em ponto cruz. O software divide a área de desenho em uma grade ortogonal milimétrica (ex: 14 a 18 cruzamentos por polegada / 1,5 mm a 2,5 mm por ponto em X) e calcula um trajeto cinemático contínuo que costura cada 'X' em duas passadas cruzadas (ou cruz plena com 4 fios), conectando as células vizinhas por pequenos pontos de salto ou corridos ocultos.",
    technicalDetails: "Geometria e parâmetros do ponto cruz eletrônico:\n• Contagem de Malha (Grid Count): Equivalente às contagens de tecido etamine manual (10, 14, 16 ou 18 pontos por polegada / 1,4 mm a 2,5 mm de tamanho de cruz);\n• Tipos de Cruz: Ponto Cruz Simples (2 passadas), Ponto Cruz Pleno Duplo (4 passadas para linha grossa encorpada), Ponto Três Quartos (3/4 stitch) e Ponto Meia Cruz (Half Stitch);\n• Roteamento Automático (Smart Routing): O algoritmo ordena as cruzes para minimizar cruzamentos no verso e reduzir cortes de linha entre cores;\n• Tecidos de Aplicação: Pode ser bordado em tecidos lisos normais (como linho, tricoline, sarja, toalhas de lavabo) simulando o aspecto de tecido etamine sem a necessidade do tecido furado;\n• Linhas Indicadas: Linha de poliéster 40wt tradicional com acabamento fosco (tipo algodão/Frosted Matt) para simular meadas manuais.",
    howItWorks: [
      "1. A bordadeira importa um gráfico quadriculado de ponto cruz clássico (gráfico em papel ou arquivo de imagem) para o módulo de ponto cruz do software (ex: Wilcom Cross Stitch / Embird Cross Stitch).",
      "2. O software mapeia cada quadradinho colorido para uma célula da grade digital.",
      "3. A bordadeira escolhe o tamanho do ponto em X (ex: 2,0 mm) e o número de passadas (dupla ou simples).",
      "4. O programa gera automaticamente as coordenadas dos 'X' interligados e exporta o arquivo .PES ou .DST.",
      "5. A máquina de bordar é abastecida com as cores e costura a matriz sobre uma toalha de lavabo de algodão liso.",
      "6. A agulha costura centenas de cruzinhas perfeitas em poucos minutos.",
      "7. O resultado é um bordado que parece ter levado semanas de ponto cruz manual, feito com velocidade e perfeição industrial."
    ],
    beginnerExplanation: "Você ama o visual delicado e aconchegante do ponto cruz tradicional (aquele que as nossas avós faziam à mão furinho por furinho no tecido etamine), mas não tem semanas para fazer tudo na mão? Com o ponto cruz digital, o computador transforma o gráfico de quadradinhos em matriz para a sua máquina de bordar! A máquina vai costurando cada 'X' perfeitinho, um do lado do outro, em poucos minutos. Você pode bordar toalhinhas de lavabo, barrados e quadrinhos fofos que parecem feitos à mão com total perfeição!",
    applications: [
      "Toalhas de lavabo e panos de copa com motivos natalinos, florais e temas de cozinha",
      "Enxovais rústicos em linho com motivos geométricos e temas tradicionais europeus",
      "Quadros decorativos no bastidor com citações, versículos e alfabetos vintage",
      "Artigos religiosos, toalhas de batizado e bordados folclóricos tradicionais"
    ],
    commonErrors: [
      "Usar pontos em 'X' muito pequenos (menores que 1,2 mm) em tecidos grossos (as linhas se misturam e perdem a forma de cruz)",
      "Bordar ponto cruz em toalha felpuda sem filme solúvel por cima (as cruzinhas somem na felpa da toalha)",
      "Utilizar densidade de cruz dupla em linhas grossas gerando acúmulo excessivo nos cruzamentos"
    ],
    troubleshootingTips: [
      "Para obter um visual idêntico ao bordado à mão: utilize linhas de poliéster com acabamento fosco (sem brilho acetinado)",
      "Em tecidos lisos (linho ou tricoline): use entretela rasgável média para sustentar a grade sem enrugamento",
      "Regule a tensão da linha ligeiramente aliviada para que o 'X' assente macio e com relevo no tecido"
    ],
    dicaArtrelados: "Quer vender toalhas de lavabo com ar de herança de família? Use o módulo de ponto cruz digital com linha fosca cor crua ou tons pastel sobre linho puro! Os clientes se apaixonam pelo visual artesanal e pagam muito mais por esse estilo retrô!",
    voceSabia: "O ponto cruz é a forma de bordado mais antiga já documentada pela arqueologia, com vestígios encontrados em tumbas no Antigo Egito e na China que datam de mais de 5.000 anos a.C.!",
    practicalExercise: "No seu software de bordado, abra a ferramenta de Ponto Cruz, desenhe um pequeno coração em grade de 2,0 mm e borde em uma barra de pano de prato: compare a perfeição geométrica dos cruzamentos!",
    quickSummary: "Digitalização e execução eletrônica de desenhos em grade quadriculada de ponto cruz tradicional com velocidade e precisão CNC.",
    relatedTerms: ["Etamine", "Ponto Cruz Manual", "Linha Fosca", "Grade Digital (Grid)", "Ponto em X"],
    tags: ["m-022", "molde ponto cruz", "ponto cruz digital", "cross-stitch", "etamine", "grafico", "vintage", "linho", "artrelados"],
    bibliographicReferences: [
      "HAND EMBROIDERY HERITAGE GUILD. Cross-Stitch History, Grid Mapping and Digital Transposition. Londres: HEHG, 2021.",
      "ARTRELADOS. Ponto Cruz Digital na Máquina de Bordar: Parâmetros de Grade, Linhas Especiais e Resgate da Arte Tradicional. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-023-mola-conica-discos-tensores-superiores-conical-tension-spring",
    code: "M-023",
    term: "Mola Cônica dos Discos Tensores Superiores (Tension Conical Compression Spring)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Da cinemática mecânica e elasticidade linear progressiva.",
    origin: "Mola mecânica em espiral cônica de compressão projetada para oferecer uma força de aperto progressiva, linear e sem travamentos sobre os pratos metálicos de fricção de linha superior em máquinas industriais.",
    summary: "Mola em formato de cone instalada no eixo dos botões tensores superiores que comprime os pratos de aço contra a linha com resposta milimétrica.",
    definition: "A Mola Cônica dos Discos Tensores Superiores (Upper Thread Tension Conical Compression Spring / Mola do Botão Tensor) é a mola helicoidal de perfil cônico montada no eixo central do conjunto de tensão superior do cabeçote da máquina de bordar. A geometria cônica é adotada intencionalmente pela engenharia porque permite que as espirais da mola se encaixem umas dentro das outras durante a compressão total, proporcionando um curso mais longo e uma curva de resistência mecânica perfeitamente linear e previsível. É a força dessa mola, regulada pelo botão giratório numerado, que pressiona os dois pratos tensores de aço polido contra a linha de bordar.",
    technicalDetails: "Propriedades físicas e mecânica da mola cônica de tensão:\n• Formato Geométrico: Espiral cônica truncada de passo variável em aço-mola fosfatizado ou niquelado;\n• Vantagem Estrutural: Altura sólida mínima (as espiras colapsam no mesmo plano sem bater ponta com ponta);\n• Resposta Linear de Tensão: Cada quarto de volta no botão tensor resulta em um acréscimo proporcional de força de atrito (aproximadamente 10 a 15 gf por clique graduado);\n• Fadiga Mecânica: Com o uso prolongado de anos em alta velocidade, a mola pode perder sua constante elástica (ficando 'cansada'), exigindo maior aperto do botão para obter a mesma tensão;\n• Interação com Solenoide de Alívio: Em máquinas industriais, quando o calcador sobe ou a máquina executa um salto longo, um pino empurra a mola aliviando os discos instantaneamente para a linha correr livre.",
    howItWorks: [
      "1. A bordadeira gira o botão frontal de tensão superior para o número desejado (ex: posição 4 ou 130 gf).",
      "2. O botão rosqueado comprime a mola cônica de aço.",
      "3. A base larga da mola pressiona o prato tensor metálico externo contra o prato interno.",
      "4. A linha de bordar passa entre os dois pratos polidos e sofre a fricção controlada.",
      "5. A elasticidade contínua da mola absorve pequenas variações de calibre da linha sem travar.",
      "6. Durante o bordado a 1.000 PPM, a mola mantém a pressão constante.",
      "7. Os pontos são formados no tecido com equilíbrio e tensão rigorosamente estáveis."
    ],
    beginnerExplanation: "A mola cônica é aquela molinha em formato de 'casquinha de sorvete' que fica escondida atrás do botão giratório de tensão da sua máquina de bordar! Quando você gira o botão para o número 4 ou 5 para apertar a linha, você está na verdade esmagando essa molinha contra os pratinhos de metal. Como ela tem formato de cone, ela aperta a linha de forma suave e perfeita, sem dar trancos. Se essa molinha enferrujar ou ficar cansada, o botão de tensão perde a força e a linha fica sempre frouxa, não importa o quanto você aperte!",
    applications: [
      "Controle de pressão de fricção nos discos tensores superiores de máquinas domésticas e industriais",
      "Alívio sincronizado de tensão durante saltos longos (Jumps) e cortes de linha",
      "Manutenção da estabilidade de tensão em rotações elevadas de 800 a 1.200 PPM",
      "Calibração metrológica de cabeçotes com medidor digital dinamômetro"
    ],
    commonErrors: [
      "Montar a mola cônica invertida após desmontar o tensor para limpeza (a base estreita deve ficar voltada para o botão)",
      "Puxar ou esticar a mola com alicate para tentar 'aumentar a força' (deforma a geometria cônica e estraga a calibração)",
      "Deixar óleo ou graxa pesada na mola e nos discos tensores (o óleo atrai poeira e faz a linha escorregar sem atrito)"
    ],
    troubleshootingTips: [
      "Se você precisa colocar o botão de tensão no número máximo (número 8 ou 9) para a linha parar de ficar frouxa: a mola cônica está cansada e deve ser trocada",
      "Ao fazer a limpeza dos tensores superiores: retire o botão, limpe os discos com pano seco com álcool isopropílico e recoloque a mola cônica na posição correta",
      "Verifique se o pino central de alívio do tensor não está emperrado empurrando a mola para fora"
    ],
    dicaArtrelados: "Nunca use óleo nos discos tensores e na mola de tensão superior! Os discos de tensão precisam estar 100% secos e espelhados. Se entrar óleo ali, a linha desliza como sabão e você perde o controle da tensão do bordado!",
    voceSabia: "As molas cônicas são utilizadas na engenharia aeroespacial e em armas de fogo de precisão justamente pela sua capacidade incomparável de colapsar ocupando quase zero de espaço quando totalmente comprimidas!",
    practicalExercise: "Olhe para o conjunto de tensores da sua máquina (ou de uma máquina industrial): observe o botão giratório numerado e imagine a mola cônica interna comprimindo os pratinhos de metal toda vez que você ajusta o número!",
    quickSummary: "Mola helicoidal em formato de cone que transmite pressão linear progressiva sobre os discos tensores superiores de linha.",
    relatedTerms: ["Discos Tensores", "Tensão Superior", "Alívio de Tensão", "Botão Tensor", "Mola Estica-Fio"],
    tags: ["m-023", "mola conica", "discos tensores", "tensao superior", "mola de compressao", "mecanica", "calibracao", "artrelados"],
    bibliographicReferences: [
      "AMERICAN SOCIETY OF MECHANICAL ENGINEERS. Precision Conical Spring Dynamics and Linear Compression Systems. Nova York: ASME, 2022.",
      "ARTRELADOS. Desmontagem, Limpeza e Ajuste Fino dos Tensores Superiores: Discos, Molas Cônicas e Alívio Automático. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "m-024-micro-letras-fontes-pequenas-small-text-digitizing",
    code: "M-024",
    term: "Micro-Letras e Fontes Pequenas (Micro-Lettering & Small Text Digitizing)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino / Do grego 'mikros' (pequeno) e do latim 'littera' (letra).",
    origin: "Técnica de puncionamento de extrema precisão desenvolvida para bordar etiquetas corporativas, patentes militares, endereços de sites e pequenos nomes de jaleco com altura inferior a 5 mm.",
    summary: "Técnica especializada de digitalização e execução de textos minúsculos (3 mm a 5 mm de altura) com compensações, linha fina 60wt e agulha 65/9.",
    definition: "A técnica de Micro-Letras no Bordado Eletrônico (Micro-Lettering / Small Letter Digitizing / Fontes de Alta Definição) compreende as diretrizes avançadas de programação e configuração mecânica necessárias para tornar legíveis textos bordados com altura entre 3,0 mm e 5,5 mm. Letras convencionais nessa escala sofrem com o fechamento dos orifícios internos (como o centro das letras 'e', 'a', 'o', 'B') devido ao diâmetro físico da agulha e da linha padrão 40wt. Para superar esse limite físico, a digitalização de micro-letras exige: colunas estreitas de ponto cheio simples, ausência ou redução drástica de sob-pontos volumosos (Center Walk leve), espaçamento aumentado entre caracteres e uso de agulha ultrafina (65/9 ou 70/10) com linha fina 60wt ou 75wt.",
    technicalDetails: "Diretrizes e parâmetros para micro-letras perfeitas:\n• Altura de Texto: 3,0 mm a 6,0 mm (abaixo de 3 mm recomenda-se ponto corrido simples de passada única);\n• Linha Recomendada: Linha de bordar fina calibre 60wt ou 75wt (diâmetro 30% menor que a linha padrão 40wt);\n• Agulha Indicada: Agulha Microtex ou Ponta Bola Fina calibre 65/9 ou 70/10;\n• Densidade de Ponto: Reduzir a densidade para 0,45 mm a 0,50 mm (espaçamento mais aberto para não acumular linha no mesmo ponto);\n• Sob-pontos (Underlay): Usar apenas Ponto Corrido Central (Center Walk) ou NENHUM sob-ponto em hastes menores que 1 mm de largura;\n• Abertura de Caracteres (Kerning & Open Counters): Aumentar o espaçamento entre letras em 10% a 15% e alargar manualmente as aberturas internas de letras redondas no software;\n• Nós de Arremate: Usar micro-arremates de travamento (Micro Lock Stitches de 3 pontos curtos de 0,6 mm) para não criar 'bolotas' de linha no início e final das letras.",
    howItWorks: [
      "1. O programador digita o texto no software de bordado usando uma fonte puncionada especificamente para micro-letras (Small Font / Micro Script).",
      "2. Ajusta a altura da letra para 4,5 mm e aumenta o espaçamento entre as letras.",
      "3. Configura a densidade para 0,45 mm e ativa o sob-ponto Center Walk leve.",
      "4. Instala na máquina de bordar uma agulha nova Microtex 65/9 e passa a linha fina de poliéster 60wt na cor desejada.",
      "5. Ajusta a tensão da máquina com leve alívio para a linha fina correr solta.",
      "6. A máquina borda o texto com velocidade moderada (500 a 600 PPM).",
      "7. As letrinhas minúsculas são formadas com nitidez de alta resolução, legíveis a olho nu sem nenhum borrão."
    ],
    beginnerExplanation: "Bordar letrinhas minúsculas (como o endereço de um site www... ou um nome pequeno de médico em jaleco) é um dos maiores desafios do bordado! Se você usar a linha e a agulha normais, a agulha fura tantas vezes no mesmo espacinho que a letrinha vira uma 'bolinha de linha amassada' e ninguém consegue ler. O segredo dos profissionais para bordar letras pequenininhas com perfeição é usar uma linha mais fininha (linha 60wt) com uma agulha fina 65/9 e usar uma fonte desenhada no computador própria para letras pequenas. As letras ficam tão limpinhas que parecem impressas a laser!",
    applications: [
      "Nomes, especialidades e números de CRM em jalecos médicos e scrubs hospitalares",
      "Endereços de websites, e-mails e slogans em camisas corporativas e bonés",
      "Patentes, tipagens sanguíneas e distintivos militares em fardamentos táticos",
      "Etiquetas internas de marca em peças de alta-costura e moda íntima"
    ],
    commonErrors: [
      "Tentar bordar letras de 3 mm usando fontes cursivas normais desenhadas para 20 mm com linha grossa 40wt",
      "Colocar sob-ponto duplo zigue-zague em letras pequenas (cria um morro de linha dura)",
      "Bordar micro-letras em toalhas atoalhadas felpudas sem filme plástico solúvel superior"
    ],
    troubleshootingTips: [
      "Se as letras 'e' e 'o' estão saindo completamente fechadas e cheias de linha: abra o software e aumente a abertura central do desenho da letra",
      "Substitua a linha de topo por linha fina calibre 60wt: a diferença de nitidez em letras abaixo de 5 mm é astronômica",
      "Diminua a velocidade da máquina para 550 PPM para garantir que cada micro-ponto caia no lugar exato sem oscilações"
    ],
    dicaArtrelados: "Vai bordar o nome do médico e o CRM no bolso do jaleco? Tenha sempre no seu ateliê um cone de linha de poliéster preta e branca 60wt e uma agulha 65/9! Suas letrinhas de jaleco vão ficar tão nítidas e elegantes que os médicos da sua cidade só vão querer encomendar com você!",
    voceSabia: "Uma letra bordada de 4 mm de altura possui hastes com menos de 0,8 mm de largura; isso significa que cabem apenas 4 a 5 fios de linha em toda a largura da coluna da letra!",
    practicalExercise: "No seu software, selecione uma fonte especial para micro-letras (Small Font), digite 'Dr. Marcelo - CRM 12345' com altura de 4,5 mm e borde em um pedaço de tecido sarja usando agulha fina: confira a leitura perfeita com uma lupa!",
    quickSummary: "Técnica avançada de digitalização e costura de textos minúsculos com fontes abertas, sob-pontos leves, agulha fina e linha 60wt.",
    relatedTerms: ["Linha 60wt", "Agulha Microtex", "Monograma", "Ponto Satim", "Underlay Center Walk"],
    tags: ["m-024", "micro-letras", "fontes pequenas", "small lettering", "jaleco", "crm", "linha 60wt", "nitidez", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Micro-Lettering Mastery, Small Font Optimization and Thread Caliber Selection. Sydney: Wilcom, 2022.",
      "ARTRELADOS. O Segredo das Micro-Letras Perfeitas: Linhas 60wt, Agulhas Finais, Fontes Especiais e Legibilidade Máxima em Jalecos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

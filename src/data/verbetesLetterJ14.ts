import { Verbete } from "../types";

export const VERBETES_LETTER_J_PART14: Verbete[] = [
  {
    "id": "j-088-jumper-de-fim-de-curso-e-sensores-de-limite-de-eixo-xy",
    "code": "J-088",
    "term": "Jumper de Fim de Curso e Sensores de Limite de Eixo X/Y (X/Y Axis Limit Switches & Jumpers)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês jumper (ponte de conexão elétrica) e limit switch (interruptor de fim de curso). Princípio de automação mecatrônica e segurança de máquinas CNC.",
    "summary": "Sensores eletro-ópticos e chaves de segurança que impedem o pantógrafo de colidir contra os limites mecânicos do chassi.",
    "definition": "O conjunto de jumpers de fim de curso e sensores de limite de eixo X/Y (X/Y Axis Limit Switches & Limit Jumpers) é o sistema eletromecânico e optoeletrônico de proteção instalado nas extremidades das guias lineares do pantógrafo da máquina de bordar. Composto por microswitches de precisão ou sensores ópticos infravermelhos tipo 'ferradura' e pontes de configuração na placa-mãe (jumpers), sua função é detectar a aproximação máxima do carro nos limites físicos da área útil de bordado, enviando um sinal de interrupção imediata aos servomotores antes que ocorra uma colisão destrutiva com a estrutura da máquina.",
    "technicalDetails": "Sensores ópticos fotoelétricos infravermelhos com tempo de resposta < 1 milissegundo. Jumpers de configuração de lógica (Normalmente Aberto - NO / Normalmente Fechado - NC) com circuito de debounce digital.",
    "construction": [
      "Sensor óptico infravermelho transmissor/receptor em canal U",
      "Lâmina metálica de interrupção (flag/obturador) acoplada ao carro móvel",
      "Microswitch mecânico de segurança redundante com contato de prata",
      "Placa de interface com conectores e jumpers de seleção de modo",
      "Cabo blindado contra interferência eletromagnética (EMI)"
    ],
    "howItWorks": [
      "1. Ao ligar a máquina, o pantógrafo se desloca até o ponto zero mecânico (Home Position).",
      "2. A lâmina do carro entra no sensor óptico, cortando o feixe de luz infravermelha.",
      "3. O sensor envia o sinal para a CPU principal, que grava a coordenada (0,0) absoluta.",
      "4. Durante o bordado, se a matriz ultrapassar o tamanho do bastidor selecionado, o sensor de limite é acionado.",
      "5. O circuito do sensor dispara a frenagem dinâmica instantânea dos servomotores X e Y.",
      "6. O painel exibe o alerta 'Limite de Área Excedido' (Frame Limit Over), preservando correias e motores."
    ],
    "mainTypes": [
      "Sensores Ópticos Tipo Transmissivo (Isentos de desgaste mecânico por atrito)",
      "Microswitches Mecânicos de Alavanca com Rolete (Para proteção física extrema)",
      "Sensores de Proximidade Indutivos Blindados (Para ambientes industriais com poeira)"
    ],
    "characteristics": [
      "Proteção total contra quebras de bastidor e danos a motores de passo",
      "Calibração automática do ponto zero (homing) com precisão de 0,05 mm",
      "Resposta ultrarrápida para paradas de emergência em fração de segundo",
      "Alta durabilidade e facilidade de diagnóstico através dos LEDs na placa"
    ],
    "limitations": [
      "Poeira excessiva de linha ou óleo respingado no canal óptico pode acionar falsos alarmes de limite",
      "Jumpers configurados na polaridade errada impedem a inicialização da máquina",
      "Exige limpeza periódica com ar seco e pincel antiestático"
    ],
    "numberingSystem": [
      "Tensão Operacional: 5V DC ou 24V DC industrial",
      "Tempo de Resposta: < 1 ms",
      "Repetibilidade de Posição: ± 0,02 mm"
    ],
    "advantages": [
      "✔ Previne acidentes graves de quebra de bastidor e descarrilamento de correias",
      "✔ Garante o retorno exato ao ponto de origem após cortes de energia",
      "✔ Aumenta a vida útil dos fusos de esferas e guias lineares"
    ],
    "commonErrors": [
      "❌ Jampear ou desativar os sensores de limite para tentar 'forçar' matrizes maiores que o bastidor",
      "❌ Deixar acumular bolotas de poeira e fiapos dentro da ranhura do sensor óptico",
      "❌ Dobrar a lâmina metálica de acionamento do sensor durante trocas de bastidor brutas"
    ],
    "voceSabia": "O termo 'jumper' vem do verbo inglês to jump (pular), porque ele é uma pequena capinha plástica com condutor de metal que 'pula' e conecta dois pinos de uma placa eletrônica para ativar ou desativar funções específicas.",
    "curiosidadeTecnica": "Em caso de colisão a 1.000 PPM sem a ação dos sensores de fim de curso, a energia cinética do pantógrafo seria suficiente para romper uma correia dentada de poliéster com alma de aço de 15 mm de largura em menos de 0,1 segundo.",
    "dicaArtrelados": "Se sua máquina ligar e der mensagem de 'Erro de Limite' sem você ter mandado bordar nada, não entre em pânico! Na maioria das vezes é só uma poeirinha de entretela tampando a luz do sensor: passe um pincel macio ou um ar seco no cantinho do trilho que ela volta a funcionar na hora!",
    "comparisonTable": {
      "headers": [
        "Tecnologia de Fim de Curso",
        "Vida Útil em Ciclos",
        "Sensibilidade a Poeira",
        "Precisão de Ponto Zero"
      ],
      "rows": [
        [
          "Sensor Óptico Infravermelho",
          "Infinita (sem contato físico)",
          "Média (requer limpeza)",
          "Altíssima (± 0,01 mm)"
        ],
        [
          "Microswitch Mecânico",
          "1 a 2 milhões de cliques",
          "Excelente (imune à poeira)",
          "Boa (± 0,05 mm)"
        ],
        [
          "Sensor Magnético Hall",
          "Infinita (sem contato)",
          "Altíssima (totalmente selado)",
          "Excelente (± 0,02 mm)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Módulo Eletrônico de Segurança)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Autocalibração de ponto zero (Homing) na inicialização da máquina de bordar",
      "Interrupção de emergência antes de batidas de bastidor contra o cabeçote",
      "Limitação eletrônica de segurança em áreas de bastidores magnéticos e tubulares",
      "Diagnóstico e testes de movimentação em bancadas técnicas especializadas"
    ],
    "troubleshootingTips": [
      "Se o pantógrafo der solavancos e bater no fim do trilho, limpe a ranhura do sensor com álcool isopropílico",
      "Verifique se o cabo do sensor não está partido ou com mau contato no conector da placa-mãe",
      "Ao trocar a placa eletrônica, certifique-se de que os jumpers de seleção de bastidor estão na mesma posição da placa original"
    ],
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor de Eixo X e Y",
      "Ponto Zero (Origem da Matriz)",
      "Área Útil de Bordado",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-088",
      "sensor de limite",
      "fim de curso",
      "pantografo",
      "seguranca eletromechanica",
      "ponto zero",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA. Electronic Control Board and Limit Switch Sensor Diagnostics. Nagoya, 2023.",
      "OMRON. Optical and Mechanical Limit Sensors for Automated Machinery. Kyoto, 2022."
    ],
    "practicalExercise": "Ligue sua máquina de bordar e observe atentamente o movimento inicial do pantógrafo. Ele vai até o cantinho da máquina, aciona os sensores suavemente e depois volta exatamente para o centro: esse é o sistema de fim de curso encontrando a casa dele!",
    "quickSummary": "Sensores de segurança que impedem o bastidor de bater e quebrar nos cantos da máquina.",
    "beginnerExplanation": "São pequenos olhinhos eletrônicos colocados no final dos trilhos da máquina. Quando o bastidor vai muito para o canto e chega perto de bater, esses sensores avisam o computador da máquina para parar imediatamente e não quebrar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-089-jaleco-infantil-e-uniformes-escolares-tecnicas-de-fixacao",
    "code": "J-089",
    "term": "Jaleco Infantil e Uniformes Escolares: Técnicas de Fixação (School Uniform & Kids Apron Embroidery)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jalot / jaquet (vestimenta protetora) e do latim uniformis (de uma só forma). Especialidade de personalização em massa para o mercado escolar e infantil.",
    "summary": "Métodos de bordado hipoalergênico, vedação de avesso suave e posicionamento rápido para aventais e roupas infantis.",
    "definition": "O bordado em jalecos infantis, babadores e uniformes escolares (School Uniform & Kids Apron Embroidery) é o conjunto de técnicas especializadas de bastidor, seleção de materiais hipoalergênicos e acabamento têxtil voltadas para peças de uso escolar de crianças. Caracteriza-se pela aplicação obrigatória de película termocolante ultra-macia no avesso (para proteger a pele sensível da criança contra o atrito áspero dos nós e linhas de poliéster), uso de linhas com certificação OEKO-TEX Standard 100 resistentes a lavagens frequentes com água sanitária e gabaritos de colocação rápida em bolsos pequenos e peitilhos.",
    "technicalDetails": "Tecidos típicos de Oxford, gabardine, microfibra e malha PV (67% poliéster / 33% viscose). Proteção de avesso com entretela de malha termocolante de 40 g/m² aplicada com ferro a 135 °C por 12 segundos.",
    "construction": [
      "Tecido base leve e resistente a manchas (Oxfordine, Gabardine ou Algodão)",
      "Entretela rasgável de toque suave (Soft Tearaway 50 g/m²)",
      "Linha de poliéster 100% trilobal com alta solidez de cor e certificação infantil",
      "Matriz com pontos cheios curtos e compensação de repuxo balanceada",
      "Película protetora termocolante de malha 'Toca Macia' cobrindo 100% do avesso"
    ],
    "howItWorks": [
      "1. O peito ou bolso do jaleco infantil é demarcado com gabarito de centralização.",
      "2. A peça é fixada no bastidor magnético ou bastidor pequeno com entretela rasgável macia.",
      "3. A máquina borda o nome da criança e o desenho temático (bichinhos, lápis, flores) com pontos limpos.",
      "4. A entretela do verso é rasgada delicadamente rente ao contorno dos pontos.",
      "5. As pontas de linha soltas são refiladas com tesoura de ponta curva de precisão.",
      "6. Aplica-se a película termocolante suave com ferro quente no avesso do bordado.",
      "7. A peça fica confortável como uma segunda pele, sem causar coceiras ou alergias na criança."
    ],
    "mainTypes": [
      "Bordado em Peitilho de Jaleco / Avental Escolar (Posicionamento no lado esquerdo superior)",
      "Bordado em Bolso Montado com Bastidor Tubular Livre ou Flutuante",
      "Identificação em Toalhinhas Escolares de Boca com Barrado de Tecido"
    ],
    "characteristics": [
      "Acabamento 100% suave no avesso, sem pinicar a pele das crianças",
      "Altíssima resistência a mais de 100 lavagens em máquina doméstica",
      "Cores vibrantes que não desbotam com o uso diário na escola",
      "Excelente nicho comercial com altíssima demanda na volta às aulas"
    ],
    "limitations": [
      "Bolsos pequenos montados exigem técnica de bordado flutuante para não fechar o bolso com costura",
      "Não utilizar linhas metálicas ásperas em áreas que tocam diretamente a pele do bebê ou criança",
      "Evitar densidades pesadas que transformem o peito do jaleco em uma placa dura"
    ],
    "numberingSystem": [
      "Gramatura do Oxford Infantil: 140 a 160 g/m²",
      "Tamanho Padrão do Nome: 60 mm a 90 mm de largura",
      "Temperatura de Termosselagem do Avesso: 130 °C a 140 °C"
    ],
    "advantages": [
      "✔ Fidelização de mães e escolas pela qualidade do conforto infantil",
      "✔ Produção rápida e lucrativa nos meses de janeiro, fevereiro e julho",
      "✔ Peças duradouras que resistem a todo o ano letivo"
    ],
    "commonErrors": [
      "❌ Entregar a peça com o avesso cru cheio de nós duros e entretela áspera, fazendo a criança chorar de coceira",
      "❌ Bordar através das duas camadas do bolso fechando a abertura e inutilizando o bolso da criança",
      "❌ Usar linha de algodão barata que desbota na primeira lavagem com sabão em pó forte"
    ],
    "voceSabia": "A certificação OEKO-TEX Standard 100 Classe 1 é o teste químico mais rigoroso do mundo têxtil, garantindo que as linhas e entretelas não soltem formaldeído, metais pesados ou substâncias cancerígenas na saliva ou suor dos bebês.",
    "curiosidadeTecnica": "O atrito repetitivo de um avesso de bordado áspero contra o peito de uma criança pequena durante 4 horas de aula pode provocar dermatite de contato mecânica em menos de 3 dias de uso escolar.",
    "dicaArtrelados": "Nunca entregue uma peça infantil sem aplicar a entretela de proteção termocolante no avesso (aquela malhazinha protetora de colar com o ferro). As mães amam esse carinho e vão indicar o seu ateliê para todas as amigas da escola!",
    "comparisonTable": {
      "headers": [
        "Tratamento do Avesso",
        "Sensação ao Toque",
        "Reação na Pele Infantil",
        "Valor Percebido"
      ],
      "rows": [
        [
          "Com Película Termocolante Macia",
          "Suave como algodão",
          "Zero irritação / 100% confortável",
          "Profissional Premium"
        ],
        [
          "Avesso Cru com Entretela Rasgada",
          "Áspero com nós de linha",
          "Pinica e causa vermelhidão",
          "Amador / Básico"
        ],
        [
          "Avesso com Entretela de Recorte Grossa",
          "Placa dura e rígida",
          "Incômodo constante ao se movimentar",
          "Inadequado para crianças"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável 50 g/m² + Protetor Termocolante de Avesso no final",
      "threadTension": "100 a 110 gf (superior) e 20 a 22 gf (bobina)",
      "density": "0.40 mm a 0.42 mm"
    },
    "applications": [
      "Personalização de aventais, jalecos e batas escolares infantis",
      "Uniformes de creches, escolas maternais e colégios particulares",
      "Toalhinhas de boca, mochilas e estojos para volta às aulas",
      "Uniformes de escolinhas de esportes, natação, balé e judô"
    ],
    "troubleshootingTips": [
      "Se o tecido fino de microfibra enrugar ao redor do nome, aumente a compensação de repuxo para 0,35 mm e use duas camadas de entretela rasgável leve",
      "Para bordar bolsos pequenos sem desmanchar a costura, use bastidor magnético ou prenda apenas a entretela no bastidor e cole o bolso por cima com fita crepe",
      "Corte sempre as pontinhas de linha no avesso com menos de 2 mm de comprimento antes de colar a malha protetora"
    ],
    "relatedTerms": [
      "Entretela Termocolante",
      "Protetor de Avesso Macio",
      "Bastidor Magnético",
      "Micro-Lettering (Micro-Letras)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-089",
      "jaleco infantil",
      "uniforme escolar",
      "volta as aulas",
      "avesso macio",
      "hipoalergenico",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OEKO-TEX. Standard 100: Testing and Certification for Baby and Children Wear. Zurich, 2023.",
      "PARRISH, Gail. Complete Guide to Children's Wear Embroidery and Comfort Finishing. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um nome de criança em um retalho de tecido de jaleco. Limpe os fios do verso, corte um pedaço de entretela de malha termocolante 1 cm maior que o bordado e passe o ferro a vapor por 10 segundos. Passe as costas da sua mão no avesso e sinta a maciez do toque aveludado.",
    "quickSummary": "Técnicas especiais para bordar roupas e uniformes infantis com toque super macio e sem pinicar a pele.",
    "beginnerExplanation": "É o jeito especial de bordar o nome da criança no jaleco ou toalhinha da escola e depois colar uma pelinha de tecido bem macia no avesso com o ferro de passar. Assim o bordado fica lindo e nunca pinica a pele delicada da criança!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-090-juncao-de-formatos-vetoriais-svg-ai-eps-para-digitalizacao",
    "code": "J-090",
    "term": "Junção de Formatos Vetoriais (SVG, AI, EPS) para Digitalização (Vector Format Merging & Pre-Processing)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim vector (aquele que conduz, grandeza orientada) e do inglês Scalable Vector Graphics (SVG). Princípios de computação gráfica e geometria analítica de Pierre Bézier (1960).",
    "summary": "Importação, limpeza de nós de curvas Bézier e fusão de arquivos vetoriais para geração de matrizes de bordado perfeitas.",
    "definition": "A junção e pré-processamento de formatos vetoriais (Vector Pre-Processing, Curve Merging & Bézier Optimization) é o procedimento técnico executado em softwares gráficos (como CorelDRAW, Illustrator ou Inkscape) e softwares de matrizaria (Wilcom, Embird, Bernina) onde arquivos em formatos vetoriais matemáticos (SVG, AI, EPS, DXF, CDR) são higienizados, fundidos (ferramentas Weld/Union) e simplificados antes da conversão em pontos de bordado. Elimina nós redundantes, preenchimentos sobrepostos desnecessários e linhas invisíveis, gerando formas vetoriais limpas que são interpretadas pelo software de bordado com traçados suaves e sem excesso de perfurações de agulha.",
    "technicalDetails": "Redução de nós Bézier com algoritmo de Douglas-Peucker (tolerância de 0,05 mm). Conversão de contornos em curvas preenchidas fechadas (Outline to Object) para correta interpretação de ponto cheio.",
    "construction": [
      "Arquivo vetorial original limpo (curvas fechadas sem auto-intersecções)",
      "Eliminação de nós duplos e alinhamento tangencial de nós suaves",
      "Fusão booleana de objetos da mesma cor (Weld / Merge)",
      "Importação direta no ambiente de digitalização automática ou manual",
      "Atribuição de parâmetros de pontos (Tatami, Ponto Cheio ou Costura)"
    ],
    "howItWorks": [
      "1. O cliente envia a logomarca em formato vetorial (ex: arquivo .AI ou .SVG do Corel/Illustrator).",
      "2. O designer abre o vetor e remove gradientes complexos de impressão e sombras em bitmap.",
      "3. As partes que se cruzam na mesma cor são unidas com o comando 'Soldar' (Weld/Unite).",
      "4. A ferramenta de redução de nós é aplicada, deixando apenas os pontos essenciais de curva.",
      "5. O arquivo vetorizado limpo é importado para o software de bordado.",
      "6. As curvas perfeitas são convertidas diretamente em blocos de pontos cheios e tatamis elegantes.",
      "7. A matriz gerada fica leve, com traçados impecáveis e zero pontos falsos."
    ],
    "mainTypes": [
      "SVG (Scalable Vector Graphics - Padrão universal leve para web e matrizaria moderna)",
      "AI / EPS (Adobe Illustrator - Padrão da indústria de design gráfico profissional)",
      "CDR (CorelDRAW - Formato amplamente integrado ao Wilcom EmbroideryStudio)"
    ],
    "characteristics": [
      "Qualidade matemática infinita sem perda de resolução ao redimensionar",
      "Redução de até 80% no tempo de criação de uma matriz profissional",
      "Contornos ultra-suaves sem 'dentes de serra' típicos de imagens pixeladas (JPG/PNG)",
      "Facilidade para alterar cores e proporções em segundos"
    ],
    "limitations": [
      "Vetores mal desenhados com milhares de nós sobrepostos criam matrizes defeituosas e cheias de cortes",
      "Degradês vetoriais complexos precisam ser simplificados manualmente para o bordado",
      "Exige conhecimento básico de edição gráfica vetorial"
    ],
    "numberingSystem": [
      "Padrão de Cores: RGB / CMYK convertido para Cartela de Cores de Linhas de Bordado",
      "Tolerância de Simplificação de Nós: 0,02 mm a 0,05 mm",
      "Extensões Principais: .SVG, .AI, .EPS, .CDR, .EMF"
    ],
    "advantages": [
      "✔ Matrizes com contornos perfeitamente lisos e curvas elegantes",
      "✔ Agilidade imensa na digitalização de logomarcas empresariais",
      "✔ Elimina o retrabalho de redesenhar imagens de baixa qualidade"
    ],
    "commonErrors": [
      "❌ Tentar digitalizar automaticamente arquivo JPG embaçado em vez de pedir o vetor original para o cliente",
      "❌ Importar vetor sem soldar as partes sobrepostas, fazendo a máquina bordar duas vezes no mesmo lugar",
      "❌ Deixar linhas invisíveis com espessura 'fio de cabelo' no arquivo vetorial, gerando pontos corridos indesejados"
    ],
    "voceSabia": "O formato SVG foi criado pelo consórcio W3C em 1999 e é baseado em linguagem XML de texto puro: se você abrir um arquivo SVG no bloco de notas, você verá as equações matemáticas exatas de cada curva do seu desenho!",
    "curiosidadeTecnica": "Uma curva desenhada com 50 nós desnecessários gera até 300 comandos extras de micropontos em uma matriz de bordado, aumentando a vibração do pantógrafo e o risco de quebra de agulha em 40%.",
    "dicaArtrelados": "Sempre que um cliente pedir para bordar uma logomarca de empresa, peça a ele o arquivo 'em vetor' (.AI, .Corel ou .PDF vetorizado). Você vai economizar horas de trabalho e sua matriz vai ficar com um acabamento perfeito de alta costura!",
    "comparisonTable": {
      "headers": [
        "Tipo de Arquivo Base",
        "Facilidade de Digitalização",
        "Qualidade das Curvas",
        "Tempo de Programação"
      ],
      "rows": [
        [
          "Vetor Limpo (.SVG / .AI / .CDR)",
          "Excelente e Imediata",
          "Curvas perfeitas e limpas",
          "5 a 15 minutos"
        ],
        [
          "Imagem PNG de Alta Resolução",
          "Média (exige redesenho)",
          "Boa se desenhada manualmente",
          "30 a 60 minutos"
        ],
        [
          "Foto de Baixa Qualidade (WhatsApp)",
          "Péssima e demorada",
          "Bordas serrilhadas e tortas",
          "Mais de 2 horas de redesenho"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Etapa de Design e Software)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Digitalização rápida de logomarcas empresariais e escudos esportivos",
      "Criação de apliques a laser integrando corte vetorial e bordado de contorno",
      "Conversão de artes tipográficas e monogramas desenhados no Illustrator/Corel",
      "Padronização de arquivos mestres para catálogos de ateliês de bordado"
    ],
    "troubleshootingTips": [
      "Se ao converter o vetor em bordado aparecerem pontos soltos indesejados, selecione o vetor no Corel/Illustrator e use o comando 'Simplificar Curvas'",
      "Certifique-se de que todas as fontes do arquivo foram convertidas em curvas (Ctrl+Q no Corel ou Ctrl+Shift+O no Illustrator) antes de importar",
      "Exclua camadas ocultas e guias de corte do arquivo gráfico para que o software de matriz não as interprete como linhas de costura"
    ],
    "relatedTerms": [
      "Digitalização Automática e Manual",
      "Software de Edição de Matrizes",
      "Curvas de Bézier",
      "Formatos de Arquivo (.DST, .PES, .JEF)",
      "Softwares & Formatos"
    ],
    "tags": [
      "j-090",
      "vetores",
      "svg",
      "illustrator",
      "coreldraw",
      "digitalizacao",
      "softwares e formatos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "W3C. Scalable Vector Graphics (SVG) 2 Specification. World Wide Web Consortium, 2022.",
      "WILCOM. CorelDRAW Graphics Suite Integration with EmbroideryStudio. Sydney, 2023."
    ],
    "practicalExercise": "Abra um arquivo vetorial em formato SVG simples no seu computador (como uma estrela ou coração). Abra o mesmo no software de matrizes e use a ferramenta de conversão automática em ponto cheio. Veja como as curvas se transformam instantaneamente em linhas de bordar perfeitamente orientadas.",
    "quickSummary": "Uso de desenhos em formato vetorial limpo para criar matrizes com curvas lisinhas e com rapidez incrível.",
    "beginnerExplanation": "O arquivo em vetor é aquele desenho que você pode aumentar do tamanho de uma moeda até o tamanho de um prédio sem perder nada de qualidade. Usar ele para fazer o bordado é o melhor caminho porque a máquina consegue entender cada curva com perfeição!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-091-jogo-de-escovas-de-carvao-e-manutencao-de-motores-auxiliares",
    "code": "J-091",
    "term": "Jogo de Escovas de Carvão e Manutenção de Motores Auxiliares (Carbon Brush Set for Auxiliary Motors)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim carbo (carvão mineral, grafite condutor) e do inglês brush (escova de contato elétrico rotativo). Invenção de Nikola Tesla e Werner von Siemens no século XIX.",
    "summary": "Pares de pastilhas de grafite eletrocondutor com mola que transmitem corrente para motores de bobinadores e exaustores.",
    "definition": "O jogo de escovas de carvão (Carbon Brushes & Commutator Maintenance Set) é o par de blocos condutores de grafite sintético de alta pureza e cobre prensado acoplados a molas espirais de pressão constante instalados nos motores elétricos auxiliares universais de corrente contínua da máquina de bordar (como motores de bobinadores externos de canelinha, bombas de vácuo, sopradores de aparas e motores de elevação de bancada). Sua função é conduzir a corrente elétrica para as lâminas do coletor rotativo (comutador) do rotor; seu desgaste natural por atrito exige inspeção periódica e substituição antes que o grafite atinja o limite mínimo de segurança.",
    "technicalDetails": "Composição em eletrografite de granulação ultrafina com condutividade de 98% IACS. Mola de pressão calibrada para exercer entre 150 e 250 g/cm² sobre o comutador.",
    "construction": [
      "Bloco prismático de grafite auto-lubrificante retificado",
      "Cordoalha flexível de cobre eletrolítico trançado (shunt wire)",
      "Mola helicoidal ou espiral de compressão em aço inox",
      "Terminal de contato tipo forquilha ou latão de engate rápido",
      "Porta-escova tubular de latão isolado termicamente"
    ],
    "howItWorks": [
      "1. A corrente elétrica passa pelo cabo e pela cordoalha de cobre até o bloco de carvão.",
      "2. O carvão encosta suavemente nas lâminas de cobre do comutador giratório do motor.",
      "3. O grafite transmite a eletricidade criando os campos magnéticos que fazem o motor girar.",
      "4. As propriedades auto-lubrificantes do grafite reduzem o atrito mecânico a altas rotações.",
      "5. A mola empurra o carvão continuamente para a frente conforme ele sofre microdesgaste natural.",
      "6. O motor opera com torque vigoroso, sem faíscas excessivas e de forma contínua."
    ],
    "mainTypes": [
      "Escovas de Grafite-Cobre para Motores Auxiliares de 24V/110V/220V",
      "Escovas com Dispositivo de Desarme Automático (Auto-Cut / Auto-Stop)",
      "Motores Brushless Modernos (Sem escovas, padrão dos servomotores do cabeçote principal)"
    ],
    "characteristics": [
      "Transmissão elétrica estável com baixa resistência ôhmica",
      "Propriedade auto-lubrificante que protege as lâminas de cobre do rotor",
      "Fácil substituição sem necessidade de desmontar todo o motor",
      "Garante que o bobinador de canelinhas funcione na velocidade máxima"
    ],
    "limitations": [
      "Gera micro-poeira de grafite que deve ser aspirada em manutenções preventivas",
      "Escovas gastas abaixo de 5 mm de comprimento geram faíscas e queimam o induzido",
      "Não aplicável aos servomotores principais modernos de acionamento do cabeçote (que são 'Brushless')"
    ],
    "numberingSystem": [
      "Dimensões Comuns: 5x5x12 mm / 6x9x15 mm",
      "Comprimento Mínimo de Descarte: 5,0 mm",
      "Dureza Shore do Grafite: 45 a 65 HD"
    ],
    "advantages": [
      "✔ Recupera a potência original de bobinadores e motores que ficaram fracos",
      "✔ Custo de manutenção extremamente baixo comparado à troca do motor inteiro",
      "✔ Evita queimas prematuras do comutador por centelhamento elétrico"
    ],
    "commonErrors": [
      "❌ Deixar o carvão gastar até o final, fazendo a mola de aço bater no cobre do rotor e destruir o motor",
      "❌ Lixar o carvão com formato torto, causando faíscas intensas e superaquecimento",
      "❌ Usar carvão de tamanho errado que fica preso dentro do porta-escovas sem descer"
    ],
    "voceSabia": "O grafite é uma das formas puras do elemento Carbono (assim como o diamante), mas sua estrutura atômica em camadas planas faz com que ele deslize facilmente, sendo um dos poucos materiais condutores de eletricidade que funcionam também como lubrificante sólido.",
    "curiosidadeTecnica": "O limite de descarte de uma escova de carvão é quando ela atinge 1/3 do seu comprimento original. Abaixo disso, a mola perde a pressão de contato, o que gera micro-arcos voltaicos que elevam a temperatura do comutador acima de 300 °C em minutos.",
    "dicaArtrelados": "Se o seu enchedor de canelinhas externo começar a ficar fraco, engasgando ou saindo um cheirinho de queimado, não jogue o aparelho fora! Abra a tampinha lateral e veja se não é apenas a escovinha de carvão que acabou: trocando o parzinho de carvão, ele volta a funcionar com força total!",
    "comparisonTable": {
      "headers": [
        "Condição da Escova",
        "Desempenho do Motor",
        "Nível de Faíscas",
        "Saúde do Coletor"
      ],
      "rows": [
        [
          "Escova Nova e Assentada",
          "Potência máxima e suave",
          "Mínimo (quase invisível)",
          "100% Protegido e polido"
        ],
        [
          "Escova Perto do Fim (< 5 mm)",
          "Motor fraco com engasgos",
          "Intenso e com estalos",
          "Superaquecimento com marcas pretas"
        ],
        [
          "Escova Totalmente Gasta",
          "Motor para de funcionar",
          "Fogo contínuo no interior",
          "Induzido riscado e destruído"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Manutenção Elétrica de Motores Auxiliares)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Manutenção preventiva de bobinadores elétricos externos de canelinhas de alta capacidade",
      "Revisão de motores de exaustão e sopradores de ar em ateliês industriais",
      "Sistemas de elevação automatizada de mesas de corte e bastidores",
      "Ferramentas elétricas auxiliares da bancada de manutenção do ateliê"
    ],
    "troubleshootingTips": [
      "Se o motor auxiliar estiver emitindo cheiro de ozônio ou faíscas visíveis pela grade traseira, desligue imediatamente e inspecione as escovas de carvão",
      "Ao instalar escovas novas, passe uma lixa d'água 600 muito fina no comutador de cobre para tirar a crosta preta de carvão velho",
      "Verifique se o carvão desliza livremente dentro do canal de latão sem travar antes de recolocar a tampa"
    ],
    "relatedTerms": [
      "Bobinador de Canelinha",
      "Servomotor de Eixo X e Y",
      "Manutenção Preventiva",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-091",
      "escova de carvao",
      "bobinador",
      "motores auxiliares",
      "manutencao eletrica",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SIEMENS. Carbon Brushes and Commutator Maintenance in Small Fractional Horsepower Motors. Munich, 2022.",
      "TAJIMA. Auxiliary Motor and Bobbin Winder Maintenance Guide. Nagoya, 2023."
    ],
    "practicalExercise": "Desconecte seu bobinador de canelinhas da tomada. Com uma chave de fenda comum, desrosqueie a tampinha plástica preta lateral do motor. Puxe a molinha com o pedacinho de carvão e observe o formato retangular de grafite brilhante com a cordoalha de cobre.",
    "quickSummary": "Pecinhas de carvão condutor com molas que alimentam a eletricidade de motores de encher canelinhas.",
    "beginnerExplanation": "São dois bloquinhos de carvão especial com molinhas que ficam dentro dos motorzinhos elétricos (como o enchedor de canelinha). Eles passam a eletricidade para o motor girar e se desgastam devagarinho com o tempo, precisando ser trocados quando ficam bem pequenininhos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-092-jateamento-de-ar-quente-para-retracao-de-pelos-em-toalhas",
    "code": "J-092",
    "term": "Jateamento de Ar Quente para Retração de Pelos em Toalhas (Hot Air Fluff Flattening)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Acabamento & Finalização",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim jactare (lançar ar com pressão) e do germânico thwahljo (toalha, pano felpudo). Técnica de termofixação desenvolvida na indústria de acabamento de enxovais de banho.",
    "summary": "Técnica térmica de acabamento que utiliza fluxo de ar quente controlado para encolher micro-fiapos e selar a felpa ao redor do bordado.",
    "definition": "O jateamento de ar quente para retração de pelos em toalhas (Hot Air Fluff Flattening & Fiber Singeing Protocol) é o procedimento técnico de pós-acabamento de enxovais onde um soprador térmico com temperatura calibrada (entre 120 °C e 160 °C) ou ferro a vapor vertical com jato de ar quente seco é direcionado sobre a área bordada em toalhas de banho felpudas, veludos e tecidos 'Sherpa'. O calor controlado contrai termicamente os micro-fiapos soltos de algodão e dissolve instantaneamente resíduos microscópicos de filme hidrossolúvel aprisionados entre os pontos cheios, assentando as felpas periféricas e destacando o relevo do bordado com acabamento impecável de loja de luxo.",
    "technicalDetails": "Fluxo de ar térmico regulado entre 130 °C e 150 °C a uma distância de segurança de 8 a 15 cm com movimentação pendular contínua (tempo de exposição máximo de 3 a 5 segundos por área).",
    "construction": [
      "Soprador térmico profissional com display digital de temperatura ou ferro gerador de vapor seco",
      "Bico direcionador tipo fenda plana de 50 mm para dispersão homogênea do ar",
      "Pano de algodão cru ou folha de teflon para proteção em tecidos sensíveis",
      "Escovinha de cerdas naturais para alinhamento da felpa pós-térmico"
    ],
    "howItWorks": [
      "1. A toalha bordada é retirado do bastidor e o filme plástico solúvel superficial é rasgado.",
      "2. O operador liga o soprador térmico regulado exatamente em 140 °C.",
      "3. O bico de ar quente é movimentado suavemente em movimentos circulares sobre as letras e arabescos.",
      "4. Os pequenos micro-resíduos transparentes de plástico solúvel encolhem e desaparecem imediatamente com o calor.",
      "5. As fibras de algodão que estavam espetadas entre as letras de ponto cheio retraem e deitam.",
      "6. As letras ganham um contorno afiado, brilhante e em alto relevo contra o fundo macio da toalha.",
      "7. A peça fica pronta para embalagem com aspecto nobre e sem necessidade de molhar ou lavar a toalha."
    ],
    "mainTypes": [
      "Jateamento com Soprador Térmico Digital (Para ateliês de alta produtividade e personalização rápida)",
      "Termo-Assentamento com Ferro a Vapor Vertical / Steamer Profissional",
      "Termo-Limpeza com Prensa Térmica e Folha de Teflon Protetora"
    ],
    "characteristics": [
      "Elimina 100% das casquinhas plásticas de hidrossolúvel sem precisar molhar a toalha",
      "Assenta as felpas rebeldes ao redor de nomes e monogramas finos",
      "Realça o brilho das linhas de poliéster trilobal pelo alinhamento molecular térmico",
      "Permite entregar a toalha seca, cheirosa e embalada imediatamente para o cliente"
    ],
    "limitations": [
      "Manter o soprador parado no mesmo ponto por mais de 5 segundos pode queimar o tecido de algodão ou derreter linhas sintéticas",
      "Não aplicar sobre fios metalizados sensíveis ao calor sem proteção de pano",
      "Exige controle rigoroso da temperatura conforme a composição da toalha"
    ],
    "numberingSystem": [
      "Temperatura Ideal para Toalhas de Algodão: 130 °C a 150 °C",
      "Temperatura para Veludos de Poliéster: 110 °C a 125 °C",
      "Distância de Aplicação: 10 cm a 15 cm"
    ],
    "advantages": [
      "✔ Agilidade: entrega a toalha perfeita em 10 segundos sem esperar secar da água",
      "✔ Visual impecável com letras bem definidas e sem fiapos atravessando o bordado",
      "✔ Encantamento do cliente ao receber uma peça com apresentação impecável"
    ],
    "commonErrors": [
      "❌ Usar soprador térmico de obra em temperatura máxima (> 300 °C), derretendo o bordado e chamuscando a toalha",
      "❌ Deixar o bico de ar muito perto (< 3 cm) e parado no mesmo lugar",
      "❌ Tentar queimar fiapos com isqueiro aberto, correndo risco de queimar o tecido e criar fumaça preta"
    ],
    "voceSabia": "Na indústria têxtil de fiação de alta qualidade, existe um processo chamado 'Chamuscagem' (Singeing), onde os tecidos de algodão passam a mais de 100 km/h por cima de chamas de gás para queimar a penugem e deixar o tecido super liso como seda.",
    "curiosidadeTecnica": "O filme hidrossolúvel de PVA (Álcool Polivinílico) possui ponto de transição vítrea a 85 °C e ponto de fusão a 140 °C. O calor do ar quente dissolve e retrai o polímero instantaneamente em micro-esferas invisíveis a olho nu.",
    "dicaArtrelados": "Sabe aquelas casquinhas de plástico solúvel que ficam presas dentro de letrinhas miúdas como 'a', 'e' e 'o' em toalhas de banho? Em vez de ficar cutucando com pinça ou molhando a toalha inteira, passe o ar quente do secador de cabelo no modo bem quente ou um soprador a 130 °C: o plástico some na hora como mágica!",
    "comparisonTable": {
      "headers": [
        "Método de Limpeza de Toalha",
        "Tempo de Processo",
        "Remoção de Fiapos",
        "Necessidade de Secagem"
      ],
      "rows": [
        [
          "Ar Quente Controlado (140 °C)",
          "10 segundos",
          "Excelente (retrai e assenta)",
          "Nenhuma (entrega na hora seco)"
        ],
        [
          "Lavagem com Água",
          "2 a 4 horas de secagem",
          "Boa (mas despenteia a felpa)",
          "Obrigatória secagem completa"
        ],
        [
          "Pinça Manual",
          "10 a 15 minutos",
          "Regular (pode puxar fios)",
          "Seco mas muito demorado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Procedimento de Pós-Acabamento)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Acabamento nobre em toalhas de banho, rosto e lavabo de alta gramatura (500 g/m²)",
      "Remoção de resíduos de filme solúvel em roupões de veludo e mantas de bebê",
      "Finalização de peças em tecido felpudo estilo 'Sherpa', carneirinho e pelúcia",
      "Higienização e alisamento rápido de peças antes da embalagem para presentes"
    ],
    "troubleshootingTips": [
      "Se a linha de poliéster perder o brilho, a temperatura estava muito alta; reduza para 120 °C e aumente a distância para 15 cm",
      "Para toalhas brancas de puro algodão egípcio, use sempre movimentos rápidos de vai-e-vem para não amarelar o tecido",
      "Mantenha o ambiente arejado durante o uso de sopradores térmicos"
    ],
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Toalhas de Banho e Felpudos",
      "Pós-Acabamento de Bordado",
      "Tesoura de Limpeza",
      "Acabamento & Finalização"
    ],
    "tags": [
      "j-092",
      "ar quente",
      "toalhas de banho",
      "retracao de pelos",
      "felpa",
      "hidrossoluvel",
      "acabamento",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOWEL MANUFACTURERS ASSOC. Finishing, Steaming and Thermal Embellishment of High-Pile Terry Towels. New York, 2022.",
      "PARRISH, Gail. Professional Finishing Techniques for Machine Embroiderers. Cincinnati, 2023."
    ],
    "practicalExercise": "Borde um monograma em uma toalha de banho usando plástico solúvel por cima. Rasgue o plástico superficial. Pegue um secador de cabelo comum na potência máxima e direcione o ar quente a 5 cm de distância fazendo movimentos circulares durante 10 segundos. Veja os pelinhos assentarem e as letrinhas ficarem perfeitas!",
    "quickSummary": "Uso de ar quente para sumir com restinhos de plástico solúvel e assentar os pelinhos de toalhas de banho.",
    "beginnerExplanation": "É o truque de passar um ventinho bem quente sobre a toalha bordada para fazer aquelas casquinhas de plástico transparente sumirem no mesmo instante e deixar as letras bem lisinhas e destacadas no meio da felpa, sem precisar molhar a toalha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-093-juncao-de-areas-preenchidas-com-ponto-tatami-reversivel",
    "code": "J-093",
    "term": "Junção de Áreas Preenchidas com Ponto Tatami Reversível (Reversible Fill-Stitch Geometry)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do japonês tatami (esteira de palha trançada) e do latim reversibilis (que pode ser invertido). Princípio de tecelagem e matrizaria com equilíbrio bidirecional de forças mecânicas.",
    "summary": "Método de matrizaria que divide grandes fundos em blocos com direções de costura alternadas para anular o repuxo no tecido.",
    "definition": "A junção de áreas preenchidas com ponto tatami reversível (Reversible & Multi-Directional Tatami Stitch Geometry) é a técnica avançada de engenharia de matrizes onde uma grande superfície plana de preenchimento é particionada em sub-blocos contíguos com ângulos de inclinação alternados em 90° ou 45° e trajetos de costura em sentidos opostos (ida e volta balanceada). Ao inverter a direção da tração mecânica gerada pela linha a cada segmento, as forças de repuxo do tecido se auto-anulam, impedindo o enrugamento, o efeito de 'tigela' (empenamento côncavo) e permitindo bordar grandes brasões e fundos sólidos com caimento liso e toque leve.",
    "technicalDetails": "Divisão em grade de polígonos com junção em esquadria sem costuras visíveis (Seamless Joint). Densidade uniforme de 0,42 mm com compensação de repuxo cruzada de 0,35 mm em cada bloco.",
    "construction": [
      "Superfície grande fragmentada em blocos geométricos complementares",
      "Bloco A: Ângulo de penetração de ponto a 45°",
      "Bloco B: Ângulo de penetração de ponto a 135° (perpendicular ao Bloco A)",
      "Costura de transição sem nós ou paradas de máquina (Continuous Stitch Path)",
      "Underlay em grade Tatami a 90° unificando a base antes do preenchimento final"
    ],
    "howItWorks": [
      "1. O digitalizador identifica uma área grande de fundo (ex: escudo de 120 mm de largura).",
      "2. Em vez de bordar tudo em uma única direção horizontal que amassaria o tecido, divide a área em quatro quadrantes.",
      "3. O software traça o primeiro quadrante puxando o tecido para o canto superior direito.",
      "4. O segundo quadrante é bordado imediatamente no ângulo oposto, puxando o tecido no sentido contrário.",
      "5. A força mecânica de uma metade neutraliza a força da outra metade sobre as fibras do tecido.",
      "6. A junção entre os quadrantes é fundida com micro-intercalamento de pontos invisível.",
      "7. A peça sai do bastidor 100% reta, plana e sem nenhuma onda ou ruga."
    ],
    "mainTypes": [
      "Tatami Reversível em Quadrantes Cruzados (Para brasões e escudos esportivos grandes)",
      "Tatami com Efeito Óptico Damasco / Xadrez Tonal (Pelo reflexo diferenciado da luz nos ângulos)",
      "Tatami Espiral Concéntrico Reversível (Para fundos circulares e medalhões)"
    ],
    "characteristics": [
      "Eliminação quase total do enrugamento e deformação do tecido em matrizes gigantes",
      "Criação de efeitos visuais sofisticados onde a mesma cor de linha parece ter tons diferentes sob a luz",
      "Excelente flexibilidade e caimento da peça de vestuário",
      "Redução da necessidade de aplicar entretelas pesadas ou placas rígidas"
    ],
    "limitations": [
      "Exige domínio avançado de ferramentas de particionamento vetorial e controle de nós de ângulo",
      "A linha de encontro entre os blocos deve ser programada com cuidado para não deixar marcas visíveis indesejadas",
      "Não recomendada para figuras minúsculas menores que 20 mm"
    ],
    "numberingSystem": [
      "Ângulos Padrão de Reversão: 45° e 135° ou 30° e 120°",
      "Densidade Média: 0,40 mm a 0,44 mm",
      "Comprimento de Ponto Tatami: 4,0 mm a 4,5 mm"
    ],
    "advantages": [
      "✔ Tecido 100% plano após retirar do bastidor, sem efeito de 'canoa' ou 'tigela'",
      "✔ Efeito luxuoso de reflexo de luz e textura têxtil refinada",
      "✔ Maior estabilidade dimensional em peças grandes como costas de jaquetas"
    ],
    "commonErrors": [
      "❌ Preencher uma área de 15x15 cm com pontos todos no mesmo ângulo reto de 0°, deformando completamente o tecido",
      "❌ Deixar uma fresta vazia na linha de junção dos blocos por falta de sobreposição milimétrica",
      "❌ Usar underlays pesados demais que endurecem os blocos reversíveis"
    ],
    "voceSabia": "A técnica de alternar a direção das esteiras de palha 'Tatami' é uma tradição secular japonesa: as esteiras são colocadas em padrões cruzados nas salas de chá para garantir que o piso suporte o peso dos passos sem afundar em nenhuma direção específica.",
    "curiosidadeTecnica": "Quando dois blocos de ponto Tatami com a mesma linha são bordados a 90° um do outro, a reflexão especular da luz nas fibras cilíndricas de poliéster cria uma diferença de luminância de até 35%, fazendo parecer que foram usadas duas cores diferentes de linha!",
    "dicaArtrelados": "Ao bordar costas de jaquetas ou fundos grandes de brasões, divida o fundo em 4 partes no seu programa de matrizes e inverta o ângulo dos pontos em formato de 'X'. Seu bordado vai ficar incrivelmente plano e com um efeito de reflexo de luz de encher os olhos!",
    "comparisonTable": {
      "headers": [
        "Estratégia de Preenchimento",
        "Repuxo no Tecido",
        "Efeito de Reflexo de Luz",
        "Caimento da Peça"
      ],
      "rows": [
        [
          "Tatami Reversível Multi-Ângulo",
          "Mínimo (Forças neutralizadas)",
          "Rico e com brilho dimensional",
          "Super maleável e plano"
        ],
        [
          "Tatami Único Unidirecional",
          "Altíssimo (enruga o tecido)",
          "Plano e monótono",
          "Rígido com efeito concha"
        ],
        [
          "Ponto Cheio Gigante",
          "Extremo (inviável > 10 mm)",
          "Fios soltos e frouxos",
          "Estraga a peça"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou 80/12 SES",
      "stabilizer": "Entretela de Recorte Macia 70 g/m² ou 2 camadas de Rasgável 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.42 mm com Underlay em Grade Leve"
    },
    "applications": [
      "Fundos sólidos de brasões corporativos, militares e de motoclubes",
      "Bordados gigantes de costas de jaquetas, kimonos e roupões",
      "Tapetes e almofadas com padronagens geométricas e xadrezes texturizados",
      "Painéis de arte têxtil contemporânea e quadros decorativos bordados"
    ],
    "troubleshootingTips": [
      "Se a linha de emenda entre os blocos ficar aparente demais, aplique um ligeiro 'Overlap' de 0,3 mm e ative o desalinhamento aleatório de pontos (Random Tatami)",
      "Certifique-se de que o underlay cruze toda a área antes dos blocos para dar unidade estrutural à base",
      "Use linhas trilobais brilhantes para valorizar ao máximo o jogo de luz entre os blocos invertidos"
    ],
    "relatedTerms": [
      "Ponto Tatami (Fill Stitch)",
      "Compensação de Repuxo",
      "Efeito Push-Pull",
      "Ângulo de Ponto",
      "Programação de Bordado"
    ],
    "tags": [
      "j-093",
      "tatami reversivel",
      "anti repuxo",
      "fundos grandes",
      "efeito optico",
      "matrizaria avancada",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Stitch Types and Directional Fill Optimization in Large Scale Digitizing. Sydney, 2023.",
      "DEVEREUX, Keith. Advanced Structural Geometry for Automated Embroidery. London, 2021."
    ],
    "practicalExercise": "No seu software, crie um quadrado de 80x80 mm dividido na diagonal em dois triângulos. Configure o triângulo de cima com pontos a 45° e o de baixo com pontos a 135°. Borde ambos com a mesma linha azul marinho e admire como a luz cria dois tons maravilhosos no mesmo bordado!",
    "quickSummary": "Divisão de fundos grandes em blocos com direções de pontos opostas para não enrugar o tecido.",
    "beginnerExplanation": "É o segredo de dividir um fundo grande de bordado em pedaços e fazer as linhas irem para direções diferentes. Como um lado puxa para a direita e o outro puxa para a esquerda, o tecido fica retinho e não enruga de jeito nenhum!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-094-jogo-de-rolamentos-lineares-do-pantografo",
    "code": "J-094",
    "term": "Jogo de Rolamentos Lineares do Pantógrafo (Linear Ball Bushing & Guide Rails)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês roulement (movimento de rolar) e do grego pantographos (desenhador universal). Sistema de translação mecânica linear de alta precisão (Hiroshi Teramachi / THK, 1972).",
    "summary": "Patins e guias com esferas recirculantes de aço temperado que sustentam e movimentam o bastidor com fluidez micrométrica.",
    "definition": "O jogo de rolamentos lineares e guias do pantógrafo (Linear Motion Bearings, Guide Rails & Ball Bushings) é o conjunto de trilhos retificados em aço cromo temperado (dureza 58-62 HRC) e blocos patins equipados com circuitos recirculantes de microesferas de aço que guiam a movimentação cartesiana nos eixos X (horizontal) e Y (profundidade) da máquina de bordar. Esse conjunto suporta o peso do pantógrafo e dos bastidores carregados, convertendo o giro dos servomotores em translações perfeitamente retilíneas com folga zero, mínimo atrito cinético e repetibilidade posicional micrométrica a cada ponto bordado.",
    "technicalDetails": "Guias lineares de precisão classe H ou P com pré-carga leve (ZF/Z0). Esferas de aço inoxidável AISI 52100 com retentores raspadores de poeira nas extremidades do bloco.",
    "construction": [
      "Trilho de aço perfilado com pistas de rolamento retificadas em arco gótico",
      "Bloco patim de aço com canais de recirculação interna de esferas",
      "Vedação raspadora frontal e lateral de borracha sintética nitrílica (NBR)",
      "Bico engraxador (Grease Nipple) para injeção de lubrificante lítio grau NLGI 2",
      "Calços de fixação com parafusos de alta resistência classe 12.9"
    ],
    "howItWorks": [
      "1. Os servomotores X e Y recebem pulsos digitais da placa-mãe para mover o pantógrafo.",
      "2. As correias dentadas ou fusos transferem o movimento para o carro do pantógrafo.",
      "3. O bloco patim desliza ao longo do trilho sustentado por centenas de microesferas de aço em circuito fechado.",
      "4. O atrito de rolamento é quase zero, permitindo acelerações instantâneas de até 2G sem vibração.",
      "5. Os raspadores de borracha limpam a poeira de linha do trilho conforme o carro se desloca.",
      "6. O bastidor para com precisão exata no local do próximo furo de agulha com desvio menor que 0,01 mm."
    ],
    "mainTypes": [
      "Guias Lineares Perfiladas com Patim de Esferas (Padrão das máquinas industriais modernas)",
      "Buxas Lineares Cilíndricas (Linear Ball Bushing) em Eixos Retificados Redondos",
      "Patins com Rolos Cruzados de Alta Rigidez para Máquinas Pesadas de Grande Formato"
    ],
    "characteristics": [
      "Movimentação suave e silenciosa sem folgas radiais ou axiais",
      "Altíssima capacidade de carga dinâmica suportando bastidores pesados",
      "Excelente precisão de repetibilidade garantindo contornos 100% alinhados",
      "Longa vida útil com lubrificação periódica com graxa de lítio com bissulfeto de molibdênio"
    ],
    "limitations": [
      "Sensível ao acúmulo de poeira de entretela resinada se os raspadores estiverem rasgados",
      "Nunca deve ser lubrificado com óleo vegetal ou graxa grafitada espessa",
      "Impactos mecânicos violentos no pantógrafo podem marcar as pistas do trilho (brinelling)"
    ],
    "numberingSystem": [
      "Largura do Trilho Padrão: 15 mm a 20 mm (Série MGN/HSR)",
      "Dureza do Trilho: 58 a 62 HRC",
      "Tolerância de Paralelismo: < 0,005 mm por metro"
    ],
    "advantages": [
      "✔ Movimento do bastidor macio, sem trancos e sem barulho de atrito",
      "✔ Garante que contornos finos fechem perfeitamente sobre os preenchimentos",
      "✔ Protege os servomotores contra sobrecarga de torque e superaquecimento"
    ],
    "commonErrors": [
      "❌ Deixar os trilhos do pantógrafo secos sem graxa, causando desgaste prematuro e folgas no bordado",
      "❌ Empurrar o pantógrafo com força bruta com a máquina ligada e os motores travados",
      "❌ Usar desengripante líquido (WD-40) nos trilhos, que dissolve a graxa interna dos rolamentos"
    ],
    "voceSabia": "A primeira guia linear com esferas recirculantes do mundo foi criada no Japão na década de 1970 pela empresa THK ('Toughness, High Quality, Know-how'), revolucionando a precisão dos robôs industriais e das máquinas de bordar computadorizadas.",
    "curiosidadeTecnica": "O coeficiente de atrito de uma guia linear de esferas é de apenas 0,002 — o que significa que é necessária uma força de apenas 20 gramas para empurrar um pantógrafo industrial de 10 kg de peso!",
    "dicaArtrelados": "Uma vez por mês, limpe a parte de cima dos trilhos do pantógrafo com um pano limpo e seco para tirar a poeira de linha. Em seguida, passe uma película fininha de graxa branca de lítio com a ponta do dedo: sua máquina vai deslizar macia como patins no gelo!",
    "comparisonTable": {
      "headers": [
        "Sistema de Guiamento",
        "Nível de Precisão",
        "Atrito Mecânico",
        "Desgaste com o Tempo"
      ],
      "rows": [
        [
          "Guia Linear com Esferas Recirculantes",
          "Centasimal (0,01 mm)",
          "Mínimo (0,002)",
          "Quase Nulo com lubrificação"
        ],
        [
          "Bucha de Bronze / Nylon Deslizante",
          "Média (0,1 mm)",
          "Médio a Alto",
          "Gera folga progressiva"
        ],
        [
          "Rodízios de Plástico em Canaleta",
          "Baixa (0,3 mm)",
          "Médio com folga",
          "Desgasta e entorta fácil"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Módulo Mecânico Estrutural)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Movimentação cartesiana de alta precisão do pantógrafo em máquinas de bordar",
      "Sistemas de troca de mesa plana para tubular em máquinas industriais",
      "Translação do cabeçote em máquinas de acolchoamento e quilting de grande porte",
      "Manutenção e substituição em revisões estruturais de 10 anos de operação"
    ],
    "troubleshootingTips": [
      "Se o bordado estiver saindo com círculos ovalados ou contornos desencaixados, balance o pantógrafo manualmente para testar se há folga nos patins lineares",
      "Se ouvir um ruído seco de 'esferas estalando', aplique graxa de lítio com a pistola engraxadora pelo bico do patim",
      "Verifique se todos os parafusos de fixação do trilho estão apertados no torque correto com chave Allen"
    ],
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor de Eixo X e Y",
      "Compensação de Repuxo",
      "Manutenção Preventiva",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-094",
      "rolamento linear",
      "guia linear",
      "pantografo",
      "precisao mecanica",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "THK. Linear Motion Systems Technical Handbook. Tokyo, 2022.",
      "TAJIMA. Pantograph Drive Mechanism and Linear Guide Maintenance. Nagoya, 2023."
    ],
    "practicalExercise": "Com a máquina desligada e sem bastidor, empurre suavemente a barra do pantógrafo com dois dedos para frente e para trás. Sinta a incrível suavidade do movimento linear sem nenhuma folga ou tranco: são os rolamentos de alta precisão em ação!",
    "quickSummary": "Trilhos e rolamentos especiais de aço que fazem o bastidor se movimentar lisinho e no lugar exato.",
    "beginnerExplanation": "São os trilhos de ferro super polidos com bolinhas de aço por onde o braço da máquina corre. Eles fazem o bastidor deslizar bem macio e sem tremer, garantindo que cada pontinho caia exatamente no lugar certo do desenho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-095-jaqueta-corta-vento-e-tecidos-impermeaveis-vedacao",
    "code": "J-095",
    "term": "Jaqueta Corta-Vento e Tecidos Impermeáveis: Vedação (Windbreaker & Waterproof Shell Embroidery)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês jaquette (casaco leve) e do inglês windbreaker / waterproof (barreira contra vento e água). Tecnologia de tecidos técnicos laminados para vestuário outdoor.",
    "summary": "Técnicas de furação mínima, agulha fina e termosselagem de avesso para bordar jaquetas impermeáveis sem vazar água.",
    "definition": "O bordado em jaquetas corta-vento, anoraks e tecidos técnicos impermeáveis (Waterproof Shell & Windbreaker Embroidery) é a técnica especializada de digitalização, manuseio no bastidor e termovedação de costura aplicada sobre tecidos de poliamida/nylon resinado, poliéster Ripstop ou membranas microporosas hidrofóbicas (Gore-Tex, Dermizax). Por envolver tecidos onde cada penetração de agulha cria um microfuro permanente que compromete a barreira impermeável, exige matrizes de baixa densidade com pontos de contorno leves, agulhas ultrafinas afiadas (Microtex 65/9 ou 70/10) e a aplicação pós-bordado de fita seladora termoplástica no avesso para restaurar a estanqueidade à água.",
    "technicalDetails": "Tecidos com membrana laminada de poliuretano (PU) com coluna d'água de 5.000 a 20.000 mm. Vedação de avesso com fita seladora termocolante de 3 camadas aplicada a 160 °C com pressão média.",
    "construction": [
      "Tecido exterior de nylon resinado ou Ripstop com tratamento DWR (Durable Water Repellent)",
      "Entretela de recorte leve (Cutaway 40 g/m²) ou entretela solúvel que não retenha umidade",
      "Agulha Microtex 65/9 com ponta aguçada cônica fina",
      "Linha de poliéster com acabamento hidrofóbico anti-umidade",
      "Fita de termosselagem de costura (Seam Sealing Tape) colada no verso cobrindo os furos"
    ],
    "howItWorks": [
      "1. A jaqueta é fixada no bastidor magnético ou com fita de contato para não amassar a resina impermeável.",
      "2. A agulha fina Microtex perfura o nylon abrindo furos minúsculos de fração de milímetro.",
      "3. A matriz executa pontos cheios leves e contornos abertos, evitando concentração excessiva de furos.",
      "4. Após o término do bordado, a entretela de recorte no verso é aparada rente aos pontos.",
      "5. Uma fita seladora termoplástica impermeável é posicionada sobre todo o avesso do bordado.",
      "6. Aplica-se calor de 150 °C a 160 °C com uma mini-prensa ou ferro de ponta protegida por papel vegetal.",
      "7. A fita derrete e veda 100% dos microfuros de agulha, garantindo que nenhuma gota de chuva entre na jaqueta."
    ],
    "mainTypes": [
      "Bordado em Peito de Corta-Vento com Forro Interno Embutido (Acesso pelo zíper de serviço)",
      "Bordado em Jaquetas Técnicas de Montanhismo com Fita Seladora Termoplástica",
      "Personalização de Capas de Chuva e Coletes Náuticos de Nylon Resinado"
    ],
    "characteristics": [
      "Preserva a funcionalidade técnica do tecido esportivo e outdoor",
      "Evita o vazamento de água e a passagem de vento frio pelas costuras",
      "Visual esportivo de alta sofisticação para marcas de aventura e corporativas",
      "Alta durabilidade em lavagens frias sem descolamento da fita seladora"
    ],
    "limitations": [
      "Não aceita matrizes ultra-densas com milhares de pontos acumulados, que funcionariam como uma 'serra' picotando o nylon",
      "Não usar alfinetes no tecido fora do campo de bordado (cada furo é permanente)",
      "Não passar ferro quente direto sobre o nylon impermeável sem folha de proteção"
    ],
    "numberingSystem": [
      "Agulha Recomendada: 65/9 Microtex ou 70/10 RG",
      "Largura da Fita Seladora: 20 mm a 30 mm",
      "Temperatura de Termosselagem: 140 °C a 160 °C (tempo de 10 a 15 s)"
    ],
    "advantages": [
      "✔ Peças técnicas de alto valor de revenda com garantia total de impermeabilidade",
      "✔ Protege a jaqueta do cliente contra rasgos ao redor do bordado",
      "✔ Padrão de qualidade profissional comparável a marcas internacionais de montanhismo"
    ],
    "commonErrors": [
      "❌ Usar agulha grossa de ponta bola (90/14), que esburaca o nylon e cria rasgos ao redor das letras",
      "❌ Esquecer de selar o verso, fazendo a água da chuva escorrer para o peito do usuário",
      "❌ Apertar o aro do bastidor tradicional com muita força, quebrando a película impermeável do tecido"
    ],
    "voceSabia": "A tecnologia de fitas de termosselagem de costuras foi desenvolvida para os trajes espaciais da missão Apollo e roupas de mergulho profundo antes de se tornar o padrão mundial das jaquetas de esqui e montanha.",
    "curiosidadeTecnica": "Um bordado com 5.000 pontos em uma área de 5x5 cm perfura o tecido 5.000 vezes; sem a fita de selagem no verso, essa área perde 98% da sua resistência à pressão hidrostática, permitindo a infiltração de água mesmo sob chuva leve.",
    "dicaArtrelados": "Ao bordar jaquetas corta-vento de marca, procure por um zíper escondido na parte interna do forro (chamado zíper de acesso ou bordador). Ele serve exatamente para você colocar o bastidor só no tecido de fora, sem costurar o forro interno junto!",
    "comparisonTable": {
      "headers": [
        "Tratamento do Bordado",
        "Resistência à Chuva",
        "Risco de Picotar o Nylon",
        "Qualidade Final"
      ],
      "rows": [
        [
          "Agulha Fina + Fita Termosseladora",
          "100% Impermeável (Estanque)",
          "Quase Zero (furos mínimos)",
          "Padrão Internacional Outdoor"
        ],
        [
          "Bordado Comum sem Vedação",
          "Vaza água pelos furos da agulha",
          "Baixo se a matriz for leve",
          "Inadequado para chuva"
        ],
        [
          "Matriz Muito Densa sem Cuidado",
          "Vazamento total e rasgo fácil",
          "Altíssimo (corta o tecido)",
          "Perda da jaqueta do cliente"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "65/9 ou 70/10 Microtex Ponta Fina Aguda",
      "stabilizer": "Entretela de Recorte Leve 40 g/m² + Fita Seladora Termoplástica no verso",
      "threadTension": "95 a 105 gf (superior) e 20 gf (bobina)",
      "density": "0.45 mm a 0.48 mm (matriz leve)"
    },
    "applications": [
      "Personalização de jaquetas corta-vento para corrida, ciclismo e motoclubes",
      "Uniformes corporativos de alta tecnologia para engenharia de campo e petrolíferas",
      "Jaquetas impermeáveis de esqui, pesca esportiva e náutica",
      "Mochilas estanques e capas protetoras de equipamentos fotográficos"
    ],
    "troubleshootingTips": [
      "Se o tecido de nylon enrugar ao redor do bordado, reduza a densidade da matriz para 0,46 mm e use bastidor magnético",
      "Para aplicar a fita seladora no verso sem queimar o nylon, coloque uma folha de papel manteiga ou teflon entre o ferro e o tecido",
      "Teste a vedação após a secagem borrifando algumas gotas de água no bordado para confirmar que o tecido continua repelente"
    ],
    "relatedTerms": [
      "Agulha Microtex",
      "Bastidor Magnético",
      "Compensação de Repuxo",
      "Entretela de Recorte (Cutaway)",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-095",
      "corta vento",
      "jaqueta impermeavel",
      "nylon",
      "termosselagem",
      "outdoor",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GORE-TEX. Technical Seam Sealing and Embroidery Guidelines for Performance Outerwear. Newark, 2022.",
      "PARRISH, Gail. Technical and Performance Fabrics Machine Embroidery Guide. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de guarda-chuva velho ou nylon impermeável. Coloque entretela de recorte, use agulha 70/10 fina e borde uma palavra pequena com pontos leves. No verso, passe um pedaço de fita termocolante com o ferro morno protegido por papel vegetal. Pingue água em cima e veja que não vaza nada!",
    "quickSummary": "Uso de agulhas bem fininhas e fita térmica colada no verso para bordar casacos de chuva sem vazar água.",
    "beginnerExplanation": "É o jeito certo de bordar em jaquetas corta-vento e casacos de chuva. Usamos uma agulha fininha para não fazer furos grandes e depois colamos uma fitinha mágica de vedação no verso com o ferro morno para não deixar a água da chuva passar pelos furinhos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-096-juncao-de-camadas-de-enchimento-3d-foam-com-ponto-de-fixacao",
    "code": "J-096",
    "term": "Junção de Camadas de Enchimento 3D Foam com Ponto de Fixação (3D Foam Tacking & Border Joint)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 3D Foam (espuma tridimensional de EVA) e tacking (alinhavo de fixação provisória). Técnica desenvolvida na indústria de bonés esportivos de beisebol nos anos 1990.",
    "summary": "Programação de costuras perfurantes e tampas em ponto cheio que prendem e cortam o EVA para relevos 3D perfeitos.",
    "definition": "A junção de camadas de enchimento 3D Foam com ponto de fixação e corte perimetral (3D Foam Tacking, Capping & Border Joints) é a metodologia técnica de matrizaria e execução de bordados em alto relevo tridimensional que utiliza placas de espuma de Etileno Vinil Acetato (EVA de 2 mm a 3 mm de densidade média/alta). O processo programa uma costura de ancoragem perimetral rápida (Tack-down stitch), seguida de 'tampas' nas extremidades abertas das letras (Capping stitches) e uma camada de ponto cheio de altíssima densidade (0,20 mm a 0,25 mm) que 'guilhotina' a espuma ao mesmo tempo em que a encapa, permitindo destacar as sobras de EVA manualmente sem deixar rebarbas visíveis.",
    "technicalDetails": "Densidade do Ponto Cheio 3D entre 0,20 mm e 0,26 mm (o dobro da densidade normal). Agulha ponta redonda afiada (RG ou SES) calibre 80/12 ou 90/14 com revestimento de titânio para perfurar a espuma.",
    "construction": [
      "Tecido base firme (sarja de boné ou brim estruturado)",
      "Costura de posicionamento que marca o local da placa de EVA",
      "Placa de EVA de 2 mm a 3 mm na mesma cor (ou tom próximo) da linha de bordar",
      "Tampas de vedação nas pontas das letras em ponto cheio perpendicular (End Capping)",
      "Camada principal em Ponto Cheio hiper-denso com compensação de repuxo de 0,50 mm",
      "Arremates de travamento reforçados nas pontas"
    ],
    "howItWorks": [
      "1. A máquina costura o underlay plano no tecido marcando o contorno da letra.",
      "2. A máquina para (Stop programado) e o operador coloca a placa de EVA sobre a área marcada.",
      "3. A máquina costura uma linha de ponto corrido leve para fixar a placa no lugar.",
      "4. As extremidades das letras recebem as 'tampas' em ponto cheio para fechar as pontas abertas.",
      "5. A máquina borda o Ponto Cheio ultra denso; a força e proximidade dos furos da agulha cortam o EVA como uma faca de picotar.",
      "6. Ao terminar, o operador puxa a placa de EVA e ela se solta perfeitamente rente à borda dos pontos.",
      "7. Um leve jato de ar quente retrai eventuais micro-fiapos de espuma, deixando o relevo impecável."
    ],
    "mainTypes": [
      "Bordado 3D Foam Tradicional em Bonés Fechados e Abertos",
      "Bordado Híbrido 3D + Ponto Plano (Combinação de letras em relevo com detalhes retos)",
      "Bordado 3D com Dupla Camada de EVA (Para relevos extremos de 4 mm a 5 mm em brasões)"
    ],
    "characteristics": [
      "Efeito visual tridimensional imponente com relevo de 2 a 4 mm de altura",
      "Acabamento padrão oficial de bonés de ligas americanas (MLB, NBA, NFL)",
      "Excelente rigidez e durabilidade sem deformar após lavagens",
      "Alto valor comercial agregado nas peças personalizadas"
    ],
    "limitations": [
      "Não aceita curvas finas menores que 2,5 mm de largura (a espuma não cabe dentro da coluna)",
      "Aumenta a contagem de pontos da matriz em cerca de 80% a 100%",
      "Exige que a cor do EVA seja idêntica ou muito parecida com a cor da linha para não aparecer no fundo"
    ],
    "numberingSystem": [
      "Espessura do EVA: 2,0 mm, 2,5 mm e 3,0 mm",
      "Dureza do EVA: 45 a 55 Shore A (espuma de alta densidade especial para bordado)",
      "Densidade do Ponto Cheio: 0,20 mm a 0,24 mm"
    ],
    "advantages": [
      "✔ Visual de alto impacto profissional que valoriza qualquer marca",
      "✔ Destaque fácil da espuma sem necessidade de tesouras manuais",
      "✔ Relevo firme que não murcha com o uso diário"
    ],
    "commonErrors": [
      "❌ Esquecer de programar as tampas nas pontas das letras ('Capping'), fazendo a espuma ficar exposta nas pontas",
      "❌ Usar densidade normal (0,40 mm), que não corta o EVA e deixa pedaços de borracha espetados para fora",
      "❌ Usar EVA comum escolar muito mole ou de cor contrastante (ex: EVA preto com linha branca)"
    ],
    "voceSabia": "O bordado 3D com EVA tornou-se febre mundial a partir dos anos 1990 quando o time de beisebol New York Yankees adotou o famoso monograma 'NY' em alto relevo tridimensional nos seus bonés oficiais da New Era.",
    "curiosidadeTecnica": "A densidade ultra-alta de 0,22 mm faz com que a agulha penetre a cada fração de milímetro. Essa perfuração concentrada funciona microscopicamente como o picote de um canhoto de cheque bancário, permitindo que a borracha se solte com a leve tração dos dedos.",
    "dicaArtrelados": "Para um bordado 3D perfeito sem nenhum fiapo de EVA aparecendo: use sempre EVA próprio para bordado (mais denso que o escolar), programe as 'tampas' nas pontas e, no final, passe um soprador térmico a 130 °C ou a pontinha do ferro: qualquer pontinha de espuma restante encolhe e desaparece na hora!",
    "comparisonTable": {
      "headers": [
        "Parâmetro do Bordado 3D",
        "Configuração Correta",
        "Configuração Errada",
        "Consequência do Erro"
      ],
      "rows": [
        [
          "Densidade do Ponto Cheio",
          "0,20 a 0,24 mm (Hiper-densa)",
          "0,40 mm (Padrão plano)",
          "Espuma não corta e fica presa"
        ],
        [
          "Tampas nas Pontas (Capping)",
          "Presentes e perpendiculares",
          "Ausentes",
          "Espuma fica aberta e feia nas pontas"
        ],
        [
          "Cor do EVA",
          "Idêntica à cor da linha",
          "Cor contrastante",
          "Borracha aparece entre os pontos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "DBxK5 80/12 SES ou 90/14 SES Titânio",
      "stabilizer": "Entretela Especial para Boné 80 g/m² resinada",
      "threadTension": "115 a 130 gf (superior ligeiramente mais solta) e 25 gf (bobina)",
      "density": "0.20 mm a 0.24 mm"
    },
    "applications": [
      "Logomarcas e letras em relevo nos painéis frontais de bonés de marca",
      "Jaquetas esportivas e casacos de times universitários estilo 'Varsity'",
      "Bolsas esportivas, mochilas táticas e capas de raquetes de tênis",
      "Emblemas e brasões militares em alto relevo 3D"
    ],
    "troubleshootingTips": [
      "Se ficarem pontinhas de EVA saindo pelas laterais dos pontos cheios, passe um secador de cabelo no quente ou soprador térmico rápido para encolhê-las",
      "Se a linha superior arrebentar durante o bordado 3D, aplique um pouco de silicone líquido spray na carretilha e use agulha nova revestida com titânio",
      "Aumente a compensação de repuxo para 0,50 mm para que a largura da coluna de ponto cubra totalmente a altura do EVA"
    ],
    "relatedTerms": [
      "3D Foam (EVA para Bordado)",
      "Ponto Cheio (Satin)",
      "Bastidor de Boné (Cap Frame)",
      "Compensação de Repuxo",
      "Programação de Bordado"
    ],
    "tags": [
      "j-096",
      "3d foam",
      "eva",
      "alto relevo",
      "bones",
      "matrizaria 3d",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. 3D Puff and Foam Embroidery Digitizing Best Practices. Sydney, 2023.",
      "NEW ERA CAP CO. Technical Standards for 3D Embroidered Emblems. Buffalo, 2022."
    ],
    "practicalExercise": "No seu software, programe a letra 'A' com 40 mm de altura e colunas de 6 mm de largura. Configure densidade de 0,22 mm e coloque tampas nas pontas inferiores da letra. Coloque uma placa de EVA de 2 mm sobre o bastidor e borde. Destaque o EVA no final e sinta o relevo tridimensional incrível!",
    "quickSummary": "Técnica de colocar borracha EVA sob os pontos bem juntinhos para criar letras e desenhos em alto relevo 3D.",
    "beginnerExplanation": "É o jeito de fazer aquelas letras fofinhas e saltadas para fora nos bonés de marca! A gente coloca uma folhinha de EVA emborrachado na máquina, ela borda com os pontos bem juntinhos cortando a espuma, e quando termina você só puxa a sobra e o desenho fica em 3D maravilhoso!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-097-jogo-de-suportes-magneticos-de-bancada-para-atelie",
    "code": "J-097",
    "term": "Jogo de Suportes Magnéticos de Bancada para Ateliê (Magnetic Tool Holders & Hooping Station)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego magnes (pedra imantada da Magnésia) e do latim supportare (sustentar). Equipamento ergonômico de produtividade inspirado nas linhas de montagem aeroespaciais.",
    "summary": "Estações de montagem e barras imantadas em neodímio para fixação ergonômica de bastidores e ferramentas de precisão.",
    "definition": "O jogo de suportes magnéticos de bancada e estação de montagem de bastidores (Magnetic Tool Holders & Hooping Station Array) é o conjunto de barras magnéticas em neodímio de alta atração (N45/N52), gabaritos angulares imantados e bases de bancada com fixação por ímãs permanentes. São projetados para organizar ferramentas críticas de corte (tesouras de precisão, pinças, chaves Allen) ao lado do cabeçote da máquina e prover um apoio ergonômico e antiderrapante para entelar peças difíceis (como camisetas, bolsas e toalhas) no esquadro exato sem necessidade de força física excessiva do operador.",
    "technicalDetails": "Ímãs de terras raras (Neodímio-Ferro-Boro - NdFeB) com revestimento triplo de níquel-cobre-níquel (Ni-Cu-Ni). Força de atração magnética de 5 a 15 kg por ponto de fixação.",
    "construction": [
      "Base de bancada em chapa de aço inoxidável escovado com grade milimetrada gravada a laser",
      "Barras magnéticas lineares com perfil emborrachado anti-arranhões",
      "Gabaritos e esquadros com pastilhas de neodímio embutidas",
      "Suporte articulado de pinça e tesoura de fácil alcance manual"
    ],
    "howItWorks": [
      "1. A base de montagem magnética é fixada na bancada ao lado da máquina de bordar.",
      "2. O aro inferior do bastidor magnético ou tradicional é posicionado sobre a base metálica.",
      "3. A grade milimetrada alinha a costura e o centro da peça no esquadro perfeito.",
      "4. A entretela e a peça de roupa são estendidas de forma plana e sem rugas.",
      "5. Os suportes magnéticos superiores travam o aro superior com pressão instantânea e homogênea.",
      "6. As ferramentas manuais (tesoura, pinça e chave) ficam sempre presas na barra imantada ao alcance dos olhos.",
      "7. O operador ganha em média 3 minutos a cada peça montada, reduzindo o cansaço das mãos."
    ],
    "mainTypes": [
      "Estação Magnética de Entelamento de Camisetas e Polos (HoopMaster / Hoop Station)",
      "Barras Magnéticas de Parede/Bancada para Tesouras e Pinças de Precisão",
      "Gabaritos Magnéticos Angulares para Centralização Rápida de Bolsos e Golas"
    ],
    "characteristics": [
      "Fixação rápida e ergonômica que previne dores nos pulsos e tendinites",
      "Mantém a bancada de trabalho 100% limpa, organizada e sem ferramentas perdidas",
      "Centralização exata e repetível em lotes de centenas de peças iguais",
      "Estrutura metálica ultra resistente com durabilidade vitalícia"
    ],
    "limitations": [
      "Não aproximar ímãs fortes de cartões magnéticos bancários, celulares ou marcapassos cardíacos",
      "Ímãs de neodímio não devem sofrer quedas no chão para não trincar a cerâmica magnética",
      "Exige bancada firme e nivelada para melhor aproveitamento da ergonomia"
    ],
    "numberingSystem": [
      "Grau Magnético: N45 ou N52 (Alta Potência)",
      "Tolerância da Grade Laser: 0,5 mm",
      "Dimensões da Base: 40x50 cm ou 50x60 cm"
    ],
    "advantages": [
      "✔ Agilidade: reduz o tempo de colocação no bastidor em mais de 50%",
      "✔ Todas as peças do lote saem com o bordado exatamente na mesma altura do peito",
      "✔ Fim do estresse de procurar tesouras e pinças sumidas na bagunça da mesa"
    ],
    "commonErrors": [
      "❌ Colocar tesouras soltas sobre a mesa da máquina onde a vibração pode derrubá-las na lançadeira",
      "❌ Deixar os ímãs de neodímio baterem bruscamente um contra o outro, lascando o revestimento",
      "❌ Entelar 'no olho' sem usar as linhas guias do suporte de esquadro"
    ],
    "voceSabia": "A metodologia japonesa '5S' de organização e o conceito 'Kaizen' de melhoria contínua utilizam suportes magnéticos e gabaritos visuais para eliminar movimentos inúteis, economizando até 2 horas de trabalho por dia em uma fábrica.",
    "curiosidadeTecnica": "Os ímãs de Neodímio perdem menos de 1% de sua força magnética a cada 100 anos em temperatura ambiente, sendo praticamente permanentes para toda a vida útil do seu ateliê.",
    "dicaArtrelados": "Instale uma barra magnética emborrachada bem na lateral da sua máquina de bordar. Coloque ali sua tesoura de bico de pato, sua pinça de precisão e a chavinha de agulha: suas ferramentas nunca mais vão sumir e seu ritmo de trabalho vai voar!",
    "comparisonTable": {
      "headers": [
        "Processo de Trabalho",
        "Tempo Médio por Peça",
        "Precisão de Alinhamento",
        "Cansaço do Operador"
      ],
      "rows": [
        [
          "Com Estação Magnética de Bancada",
          "30 a 45 segundos",
          "Milimétrica e idêntica no lote",
          "Quase Nulo (Ergonômico)"
        ],
        [
          "Montagem Manual na Mesa Comum",
          "2 a 3 minutos",
          "Varia conforme o cansaço",
          "Alto (dor nos pulsos)"
        ],
        [
          "Sem Gabarito / No Olho",
          "Demorado com retrabalho",
          "Frequente desvio de centro",
          "Estressante e improdutivo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Equipamento Ergonômico de Bancada)",
      "needleType": "Não aplicável",
      "stabilizer": "Compatível com todos os tipos de entretelas",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Estações de colocação rápida de bastidores em confecções de uniformes e polos",
      "Organização de ferramentas manuais na área de operação de máquinas industriais",
      "Alinhamento repetitivo de monogramas em jogos de toalhas e lençóis de cama",
      "Bancadas de preparação e conferência de qualidade em ateliês de médio e grande porte"
    ],
    "troubleshootingTips": [
      "Se a peça estiver escorregando na base, limpe a superfície com álcool isopropílico para retirar a poeira e resíduos de spray adesivo",
      "Mantenha os ímãs protegidos com capas de silicone ou fita de tecido para não marcar tecidos finos de seda",
      "Fixe a base magnética na mesa com parafusos ou grampos sargentos para que ela não se desloque durante o manuseio"
    ],
    "relatedTerms": [
      "Bastidor Magnético",
      "Gabarito de Centralização",
      "Ergonomia no Ateliê",
      "Tesoura de Limpeza",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-097",
      "suporte magnetico",
      "estacao de bastidor",
      "ergonomia",
      "organizacao de atelie",
      "neodimio",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HOOPMASTER. Ergonomic Hooping Stations and Magnetic Alignment Systems Manual. Brookfield, 2023.",
      "KAIZEN INSTITUTE. 5S Workplace Organization in Apparel and Embroidery Production. Zurich, 2022."
    ],
    "practicalExercise": "Coloque uma barra magnética ao lado da sua máquina. Prenda sua tesoura, sua pinça e sua chave de agulha nela. Durante um dia inteiro de produção de bordados, pegue e devolva as ferramentas sempre na barra magnética e note como sua bancada ficou limpa e seu trabalho rendeu muito mais!",
    "quickSummary": "Suportes e réguas com ímãs fortes para prender bastidores retos e organizar tesouras na bancada.",
    "beginnerExplanation": "São réguas e suportes especiais com ímãs potentes que você coloca na mesa para ajudar a colocar a camiseta no bastidor bem retinha e sem esforço, além de segurar as tesouras e pinças sempre no lugar certo para não sumirem!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-098-juncao-de-matrizes-espelhadas-para-monogramas-e-brasoes-simetricos",
    "code": "J-098",
    "term": "Junção de Matrizes Espelhadas para Monogramas e Brasões Simétricos (Mirror Symmetry Digitizing)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim speculum (espelho, reflexo) e do grego symmetria (proporção harmônica entre as partes). Princípio clássico da arquitetura greco-romana e da heráldica renascentista.",
    "summary": "Método de programação por espelhamento vetorial exato com balanceamento de compensação de repuxo nos dois hemisférios.",
    "definition": "A junção de matrizes espelhadas para monogramas e brasões simétricos (Mirror Symmetry Digitizing & Dual-Hemisphere Joint) é a técnica de desenho e programação de matrizes onde uma metade perfeita do desenho (ramos de louro, asas, pergaminhos ou molduras barrocas) é digitalizada com rigor e posteriormente duplicada e espelhada no eixo vertical (Y) ou horizontal (X). O processo exige a reprogramação técnica do sequenciamento de costura e da compensação de repuxo no hemisfério espelhado para que a tração mecânica dos pontos não puxe o tecido assimetricamente, garantindo que o centro da matriz feche em uma linha invisível e perfeitamente reta.",
    "technicalDetails": "Espelhamento vetorial com alinhamento de nó central no esquadro exato (tolerância 0,00 mm). Inversão da ordem de costura para bordar de dentro para fora (Center-Out Sequencing) nos dois lados.",
    "construction": [
      "Metade mestre perfeitamente desenhada e limpa de nós",
      "Eixo de simetria vertical centralizado na coordenada X=0",
      "Duplicação espelhada com fusão dos nós centrais coincidentes",
      "Sequenciamento programado do centro para as extremidades em ambos os lados",
      "Elemento central (coroa, monograma ou escudo) bordado por cima da junção"
    ],
    "howItWorks": [
      "1. O digitalizador desenha com precisão cirúrgica apenas a metade esquerda da moldura do brasão.",
      "2. Aplica a ferramenta 'Espelhar e Copiar Horizontalmente' (Mirror Copy).",
      "3. Os nós que tocam o centro exato são soldados para criar uma forma contínua e sem degraus.",
      "4. O software reorganiza a ordem dos pontos para que a máquina borde primeiro o ramo esquerdo a partir do centro e depois o ramo direito também a partir do centro.",
      "5. A tensão do tecido no bastidor é distribuída igualmente para a esquerda e para a direita.",
      "6. A peça bordada final apresenta simetria visual 100% perfeita, transmitindo requinte e equilíbrio heráldico."
    ],
    "mainTypes": [
      "Simetria Bilateral Clássica (Para brasões de família, ramos de folhas e medalhões)",
      "Simetria Quádrupla / Caleidoscópica (Para toalhas de centro de mesa e mandalas)",
      "Espelhamento com Ajuste Diferencial de Ângulo de Ponto (Para manter o brilho da linha idêntico)"
    ],
    "characteristics": [
      "Economia de 50% no tempo de desenho vetorial da matriz",
      "Perfeição geométrica absoluta impossível de ser alcançada no desenho manual livre",
      "Equilíbrio de forças de repuxo evitando que o bordado entorte para um dos lados",
      "Padrão obrigatório para monogramas nobres de casamento e enxovais clássicos"
    ],
    "limitations": [
      "Textos e letras no centro do brasão nunca devem ser espelhados (ficariam invertidos)",
      "O ângulo dos pontos cheios deve ser verificado após o espelhamento para manter a reflexão de luz correta",
      "Exige compensação de repuxo idêntica nos dois lados da matriz"
    ],
    "numberingSystem": [
      "Tolerância de Centralização: 0,00 mm (Coordenada Zero no Software)",
      "Compensação de Repuxo Simétrica: 0,35 mm a 0,45 mm",
      "Densidade de Ponto Cheio: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Simetria visual impecável digna de brasões imperiais e marcas de luxo",
      "✔ Agilidade extraordinária na criação de molduras e arabescos complexos",
      "✔ Bordado equilibrado que não torce nem enruga o tecido no bastidor"
    ],
    "commonErrors": [
      "❌ Espelhar a matriz inteira incluindo as letras do nome, deixando o texto ao contrário como se fosse no espelho",
      "❌ Deixar uma linha de costura visível ou um degrau na emenda central por falta de fusão dos nós",
      "❌ Bordar tudo da esquerda para a direita, empurrando o tecido e deixando o lado direito deformado"
    ],
    "voceSabia": "A heráldica medieval e os brasões da nobreza europeia exigiam simetria estrita como símbolo de honra, equilíbrio e justiça, sendo os desenhistas reais punidos se um dos lados do escudo tivesse um milímetro de diferença!",
    "curiosidadeTecnica": "Ao espelhar um objeto com pontos cheios, a inclinação dos pontos também é espelhada. Isso faz com que a luz reflita no mesmo ângulo em ambos os lados, dando a sensação de que o brasão é uma escultura metálica brilhante no tecido.",
    "dicaArtrelados": "Ao criar molduras e brasões para toalhas de casamento, desenhe só a metade esquerda com muito carinho. Depois use a ferramenta de espelhar com cópia do seu programa: você ganha metade do tempo e seu brasão fica perfeitamente simétrico como uma joia!",
    "comparisonTable": {
      "headers": [
        "Método de Criação",
        "Tempo de Digitalização",
        "Simetria dos Dois Lados",
        "Equilíbrio de Tensão"
      ],
      "rows": [
        [
          "Espelhamento Digital com Solda Central",
          "Rápido (15 minutos)",
          "Perfeita (100% idêntica)",
          "Totalmente equilibrado"
        ],
        [
          "Desenho Manual dos Dois Lados",
          "Lento (45 minutos)",
          "Sempre apresenta assimetrias",
          "Risco de repuxo assimétrico"
        ],
        [
          "Cópia sem Reordenação de Costura",
          "Rápido",
          "Simétrico mas entorta o tecido",
          "Deforma o lado final"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Hidrossolúvel de Lavar",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm no Ponto Cheio"
    },
    "applications": [
      "Brasões de casamento e monogramas com ramos de oliveira para enxovais",
      "Escudos heráldicos, condecorações militares e emblemas de famílias",
      "Molduras barrocas para toalhas de lavabo e jogos de cama de luxo",
      "Logomarcas simétricas de escritórios de advocacia e clínicas médicas"
    ],
    "troubleshootingTips": [
      "Se o centro da moldura ficar com um espaço vazio, amplie a sobreposição dos dois lados em 0,4 mm na coordenada X=0",
      "Certifique-se de que a ordem de bordado comece pelo centro e vá para as pontas para evitar empurrar o tecido",
      "Borde as iniciais ou texto central sempre por último para coroar o brasão no centro exato"
    ],
    "relatedTerms": [
      "Monograma",
      "Ponto Cheio (Satin)",
      "Compensação de Repuxo",
      "Sequenciamento de Cores",
      "Programação de Bordado"
    ],
    "tags": [
      "j-098",
      "matriz espelhada",
      "simetria",
      "brasao",
      "monograma",
      "enxoval de casamento",
      "matrizaria",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Symmetry, Mirroring and Heraldic Design Digitizing. Sydney, 2023.",
      "FOX-DAVIES, Arthur. A Complete Guide to Heraldry and Symmetrical Embellishments. London, 2022."
    ],
    "practicalExercise": "No seu programa de bordados, desenhe um ramo de louro com 5 folhas do lado esquerdo da tela. Use a ferramenta 'Espelhar Horizontalmente com Cópia' e una as duas pontas no centro. Borde em uma toalhinha branca e veja a harmonia perfeita da simetria clássica.",
    "quickSummary": "Técnica de desenhar metade do brasão e espelhar para o outro lado com encaixe perfeito e no centro exato.",
    "beginnerExplanation": "É o truque de desenhar apenas um ladinho daquela moldura bonita de brasão ou raminhos de flores e depois mandar o computador espelhar para o outro lado. Fica tudo perfeitamente igualzinho dos dois lados, como se fosse no espelho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-099-jogo-de-reguas-e-gabaritos-de-esquadro-para-centralizacao",
    "code": "J-099",
    "term": "Jogo de Réguas e Gabaritos de Esquadro para Centralização (Hooping Alignment Rulers & Squares)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim regula (régua, padrão reto) e squadrare (tornar quadrado, esquadro de 90°). Ferramental clássico de alfaiataria e modelagem adaptado para a precisão do bordado computadorizado.",
    "summary": "Conjunto de réguas acrílicas transparentes milimetradas e gabaritos em 'L' para marcação rápida de centros e alinhamento no bastidor.",
    "definition": "O jogo de réguas e gabaritos de esquadro para centralização de bordado (Hooping Alignment Rulers, Placement Squares & Positioning Templates) é o conjunto de réguas transparentes cortadas a laser em acrílico óptico de alta resistência (gravação milimetrada em duas cores, transferidor angular de 0° a 360° e recortes específicos para golas em 'V', golas redondas e bolsos). Sua função é permitir a marcação instantânea e precisa do ponto central e dos eixos ortogonais (X e Y) em peças de vestuário prontas, eliminando bordados tortos, caídos ou fora do padrão industrial de posicionamento de peito esquerdo e barras de toalhas.",
    "technicalDetails": "Acrílico cristal de 3 mm com corte a laser e escala gravada em baixo-relevo anti-desgaste. Marcas de centro calibradas para distâncias oficiais de peito esquerdo (18 a 22 cm a partir da costura do ombro).",
    "construction": [
      "Gabarito curvo para gola redonda e gola pólo (Collar Placement Guide)",
      "Régua em 'T' com esquadro de 90° para alinhamento com a costura lateral da camiseta",
      "Gabarito em 'L' para bolsos de camisas sociais e jalecos médicos",
      "Furos centrais de marcação para caneta fantasminha ou giz de alfaiate",
      "Escalas duplas em centímetros e polegadas com linhas guias coloridas"
    ],
    "howItWorks": [
      "1. A camiseta ou camisa polo é estendida plana sobre a mesa de trabalho.",
      "2. O operador encaixa o gabarito curvo na costura da gola da peça.",
      "3. A régua indica automaticamente a posição padrão universal do peito esquerdo (ex: tamanho M = 19 cm abaixo do ombro e 9 cm do centro).",
      "4. O operador faz um pontinho com a caneta mágica apagável no furinho central da régua.",
      "5. O bastidor é posicionado sobre a peça alinhando a cruzeta transparente com a marcação feita.",
      "6. A peça é travada no bastidor 100% reta e no esquadro exato da trama do tecido.",
      "7. Todas as camisas da produção saem com o bordado exatamente no mesmo lugar."
    ],
    "mainTypes": [
      "Gabarito Universal para Peito de Camisetas e Polos (Adulto P, M, G, GG e Infantil)",
      "Régua de Esquadro para Centralização em Barras de Toalhas de Banho e Rosto",
      "Gabarito de Bolso e Lapela para Camisaria Social e Jalecos Médicos"
    ],
    "characteristics": [
      "Elimina 100% dos erros de bordados tortos ou descentralizados no peito",
      "Agilidade total: marcação de centro feita em menos de 10 segundos por peça",
      "Padronização visual impecável em encomendas corporativas de grandes lotes",
      "Material transparente que permite enxergar listras e estampas por baixo"
    ],
    "limitations": [
      "Não utilizar canetas permanentes ou giz com cera que manchem o acrílico ou o tecido",
      "Guardar as réguas penduradas ou em gavetas planas para não riscar a transparência",
      "Ajustar a distância conforme o biotipo específico caso o cliente solicite uma posição personalizada"
    ],
    "numberingSystem": [
      "Tamanhos Padronizados: Infantil (2 a 12 anos), Adulto Feminino e Adulto Masculino (P ao XG)",
      "Espessura do Acrílico: 3,0 mm padrão profissional",
      "Precisão Dimensional: ± 0,2 mm"
    ],
    "advantages": [
      "✔ Fim do medo de bordar camiseta e o logotipo ficar caído embaixo do braço ou na barriga",
      "✔ Rapidez impressionante na preparação de grandes pedidos de uniformes",
      "✔ Apresentação profissional que impressiona o cliente na visita ao ateliê"
    ],
    "commonErrors": [
      "❌ Medir a posição do bordado a olho, fazendo cada camiseta do lote sair com o bordado em uma altura diferente",
      "❌ Marcar a distância a partir da barra da camisa em vez de medir a partir da costura do ombro e da gola",
      "❌ Usar caneta comum que não apaga com o ferro ou com água, manchando a roupa do cliente"
    ],
    "voceSabia": "A posição padrão do bordado de peito esquerdo em polos corporativas tem um motivo psicológico: ela fica posicionada exatamente sobre a linha do coração, local onde as pessoas olham naturalmente ao cumprimentar alguém com um aperto de mão!",
    "curiosidadeTecnica": "A distância padrão do peito esquerdo para uma polo masculina tamanho 'G' é de 19 a 21 cm abaixo da costura do ombro e alinhada verticalmente com a linha divisória entre a gola e a manga. Usar a régua garante que essa proporção seja mantida mesmo em tecidos que esticam.",
    "dicaArtrelados": "Tenha sempre pendurado perto da sua mesa o joguinho de réguas de centralização de gola! Em 5 segundos você marca o centro da camiseta com a caneta fantasminha que apaga no ferro, encaixa o bastidor e tem certeza absoluta de que o bordado vai ficar perfeito!",
    "comparisonTable": {
      "headers": [
        "Método de Centralização",
        "Tempo por Peça",
        "Precisão no Lote",
        "Risco de Erro de Posição"
      ],
      "rows": [
        [
          "Com Jogo de Réguas / Gabaritos",
          "5 a 10 segundos",
          "100% Idêntica em todas as peças",
          "Quase Nulo"
        ],
        [
          "Com Fita Métrica Comum",
          "1 a 2 minutos",
          "Boa, mas sujeita a erros de leitura",
          "Baixo a Médio"
        ],
        [
          "No Olhômetro / Sem Medição",
          "Rápido mas perigoso",
          "Cada peça sai diferente",
          "Altíssimo (risco de perder peças)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Instrumento de Medição Manual)",
      "needleType": "Não aplicável",
      "stabilizer": "Compatível com todos os estabilizadores",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Marcação de centro em polos, camisetas e regatas para uniformes escolares e corporativos",
      "Alinhamento milimétrico de monogramas em toalhas de banho, lavabo e caminhos de mesa",
      "Centralização de nomes e especialidades em jalecos de médicos e dentistas",
      "Padronização de bordados em pernas de calças, shorts e bermudas de academia"
    ],
    "troubleshootingTips": [
      "Use caneta termossensível (fantasminha) de boa qualidade para marcar o centro pelo furinho da régua, testando sempre antes em um retalho",
      "Se o tecido for muito elástico (como lycra ou viscolycra), estenda-o suavemente sobre a mesa sem puxar antes de colocar a régua",
      "Limpe suas réguas acrílicas apenas com pano macio e água com sabão neutro para manter a transparência cristalina"
    ],
    "relatedTerms": [
      "Caneta Fantasminha (Termossensível)",
      "Gabarito de Centralização",
      "Bastidor Tradicional e Magnético",
      "Ponto Zero (Origem da Matriz)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-099",
      "reguas de bordado",
      "gabaritos de gola",
      "centralizacao",
      "peito esquerdo",
      "uniformes",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "APPAREL SIZING STANDARDS. Standard Guide for Placement of Embroidered Emblems on Apparel. ASTM International, 2022.",
      "PARRISH, Gail. Precision Placement and Hooping Standards for Commercial Embroidery. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue uma camiseta polo do seu armário e coloque-a estendida na mesa. Encaixe a régua de gola no decote, olhe a marcação correspondente ao tamanho da camiseta e faça uma cruzinha com a caneta que apaga com ferro. Encaixe o bastidor e veja como o centro fica exatamente no lugar perfeito!",
    "quickSummary": "Réguas transparentes com encaixe de gola que mostram o lugar exato para bordar no peito da camiseta.",
    "beginnerExplanation": "São réguas transparentes feitas no formato certinho da gola da camiseta. Você só encosta ela na gola e ela já mostra com um furinho o lugar exato onde o bordado do peito tem que ficar, sem precisar ficar fazendo contas ou adivinhando!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-100-justaposicao-de-densidades-e-equilibrio-de-tensao-estrutural",
    "code": "J-100",
    "term": "Justaposição de Densidades e Equilíbrio de Tensão Estrutural (Structural Density Juxtaposition)",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tensão & Calibração",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim juxta (ao lado de, junto) e ponere (colocar, dispor) e structura (construção organizada). Teoria avançada da física do ponto e biomecânica têxtil.",
    "summary": "Harmonização de áreas densas com áreas arejadas na mesma matriz para evitar o empenamento e garantir caimento perfeito.",
    "definition": "A justaposição de densidades e equilíbrio de tensão estrutural (Structural Density Juxtaposition & Mechanical Tension Balance) é o princípio supremo de engenharia e maestria em matrizaria de bordado eletrônico que rege a coexistência harmônica de diferentes zonas de densidade de pontos dentro de uma mesma matriz. Consiste em calibrar matematicamente a transição entre blocos compactos de alta cobertura (como pontos cheios de 0,38 mm) e áreas de suporte ou fundos leves e arejados (tatamis abertos de 0,60 mm a 0,80 mm), distribuindo as tensões residuais da linha de forma equilibrada por toda a trama do tecido para evitar repuxos localizados, quebras de agulha e rigidez excessiva na peça acabada.",
    "technicalDetails": "Gradiente estrutural com razão de densidade progressiva menor que 1:2 entre objetos adjacentes. Balanceamento vetorial de linhas de força mecânica em conformidade com o módulo de elasticidade de Young do tecido.",
    "construction": [
      "Camada de underlay estruturante com densidade aberta (1,5 mm a 2,5 mm)",
      "Áreas centrais densas com compensação de repuxo generosa (0,40 mm a 0,55 mm)",
      "Zonas perimetrais de alívio de tensão com densidade progressivamente decrescente",
      "Sequenciamento do centro para as bordas (Center-Out) dissipando as forças de tração",
      "Calibração milimétrica da proporção de 1/3 da linha da bobina no verso de todas as áreas"
    ],
    "howItWorks": [
      "1. O digitalizador analisa o peso e a elasticidade do tecido que receberá o bordado.",
      "2. Em vez de aplicar uma densidade única e pesada em toda a matriz, varia os espaçamentos de acordo com o tamanho de cada elemento.",
      "3. Letras pequenas recebem pontos mais finos e curtos com underlay leve; áreas grandes recebem tatami aberto e maleável.",
      "4. A máquina executa os pontos sem sobrecarregar a estrutura física das fibras do tecido.",
      "5. A tensão da linha superior (110 gf) e da bobina (22 gf) trabalha em equilíbrio perfeito com a densidade programada.",
      "6. Ao retirar a peça do bastidor, o tecido relaxa sem formar ondas, pregas ou efeito de 'couro duro'.",
      "7. O bordado integra-se ao tecido como uma segunda pele, mantendo a maciez, a beleza e a durabilidade eterna."
    ],
    "mainTypes": [
      "Equilíbrio Estrutural para Tecidos Leves e Delicados (Seda, Cambraia, Viscose)",
      "Equilíbrio Estrutural para Malhas Elásticas e Roupas Esportivas (Poliamida, Piquet, Moletom)",
      "Equilíbrio Estrutural para Bordados Gigantes de Alta Densidade (Jaquetas, Brasões e Bandeiras)"
    ],
    "characteristics": [
      "O ápice da qualidade e sofisticação técnica no bordado computadorizado",
      "Peça bordada com toque macio, maleável e caimento natural no corpo",
      "Zero enrugamento ou deformação dimensional após lavagens repetidas",
      "Longevidade extrema das linhas e do tecido sem rasgos ao longo do tempo"
    ],
    "limitations": [
      "Exige experiência avançada do digitalizador e conhecimento profundo da física dos tecidos",
      "Não pode ser obtida por digitalizações automáticas genéricas de programas básicos",
      "Requer máquina regulada com tensiômetro e sincronismo mecânico perfeito"
    ],
    "numberingSystem": [
      "Densidade de Ponto Cheio Fino: 0,38 mm a 0,40 mm",
      "Densidade de Tatami Equilibrado: 0,42 mm a 0,46 mm",
      "Densidade de Fundos Arejados: 0,60 mm a 0,90 mm"
    ],
    "advantages": [
      "✔ Bordados com caimento de alta costura que valorizam qualquer peça de vestuário",
      "✔ Elimina 100% das peças perdidas por enrugamento ou quebra de tecido",
      "✔ Reconhecimento do ateliê como referência máxima de qualidade técnica no mercado"
    ],
    "commonErrors": [
      "❌ Aplicar densidade pesada de 0,35 mm em uma matriz inteira de 20 cm, criando uma placa dura e estragando a roupa",
      "❌ Colocar contornos hiper-densos ao lado de fundos soltos sem transição suave, rasgando o tecido na divisa",
      "❌ Tentar compensar matriz mal programada apertando a tensão da máquina ao extremo"
    ],
    "voceSabia": "A engenharia têxtil moderna estuda o bordado computadorizado como uma estrutura de compósito mecânico flexível: quando a agulha insere 20.000 pontos em uma peça, ela está literalmente criando uma nova malha de reforço estrutural sobre o tecido base.",
    "curiosidadeTecnica": "Uma matriz desbalanceada com excesso de densidade pode exercer mais de 30 kgf de tração concentrada em uma área de 10 cm², o que é suficiente para deformar permanentemente a estrutura molecular de tecidos sintéticos.",
    "dicaArtrelados": "O segredo de um bordado de mestre não é colocar o máximo de pontos possível, mas sim colocar o ponto exato onde ele é necessário! Um bordado leve, com densidade bem dosada, fica mais bonito, mais brilhante, não enruga a roupa e ainda borda muito mais rápido!",
    "comparisonTable": {
      "headers": [
        "Abordagem de Matrizaria",
        "Caimento no Tecido",
        "Toque ao Tato",
        "Tempo de Máquina"
      ],
      "rows": [
        [
          "Justaposição Equilibrada Artrelados",
          "Perfeito e maleável como seda",
          "Macio e flexível",
          "Rápido e otimizado (15 min)"
        ],
        [
          "Densidade Pesada Uniforme",
          "Rígido como placa de papelão",
          "Duro e áspero",
          "Lento e sobrecarregado (30 min)"
        ],
        [
          "Densidade Frouxa sem Suporte",
          "Transparente com falhas",
          "Frouxo com laçadas soltas",
          "Rápido mas de má qualidade"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM em regime de produção contínua",
      "needleType": "75/11 SES Ponta Bola Leve ou 70/10 FFG",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Entretela de Recorte Macia",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina na proporção de 1/3)",
      "density": "Graduação harmonizada de 0.38 mm a 0.60 mm"
    },
    "applications": [
      "Bordados de alta costura em vestidos de festa, camisas finas e linho puro",
      "Coleções de marcas de moda feminina, masculina e infantil premium",
      "Enxovais completos de noiva e bebê com acabamento de luxo inigualável",
      "Padrão ouro de formação técnica para bordadeiras, matrizistas e ateliês profissionais"
    ],
    "troubleshootingTips": [
      "Se o bordado ficar duro como uma placa no peito da camisa, reduza a densidade geral da matriz em 15% e aumente o comprimento dos pontos de underlay",
      "Sempre verifique o verso do bordado: a linha branca da canelinha deve ocupar exatamente o terço central (1/3) de cada coluna de ponto cheio",
      "Borde uma amostra em tecido idêntico ao da peça final para validar o caimento antes de rodar a produção"
    ],
    "relatedTerms": [
      "Densidade de Ponto",
      "Compensação de Repuxo",
      "Efeito Push-Pull",
      "Tensão da Linha Superior",
      "Ponto Cheio (Satin)",
      "Ponto Tatami",
      "Tensão & Calibração"
    ],
    "tags": [
      "j-100",
      "justaposicao de densidades",
      "equilibrio estrutural",
      "fisica do ponto",
      "alta costura",
      "matrizaria de mestre",
      "tensao e calibracao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. The Art and Science of Embroidery Digitizing: Structural Density & Balance. Sydney, 2023.",
      "DEVEREUX, Keith. Masterclass in Industrial Embroidery Mechanics and Thread Tension Dynamics. London, 2022."
    ],
    "practicalExercise": "Pegue um tecido fino de tricoline ou cambraia. Borde uma matriz com densidade equilibrada e underlay leve. Ao retirar do bastidor, passe a mão por cima do bordado de olhos fechados: sinta como a linha e o tecido parecem uma coisa só, macia e flexível. Esse é o bordado perfeito do DIBE Artrelados!",
    "quickSummary": "O equilíbrio perfeito entre partes cheias e partes leves na matriz para o bordado ficar macio e o tecido nunca enrugar.",
    "beginnerExplanation": "É o grande segredo dos mestres do bordado: dosar a quantidade certa de linhas para que o bordado fique lindo, brilhante e bem coberto, mas sem ficar pesado ou duro como uma tábua. A roupa continua macia, gostosa de vestir e perfeitamente lisinha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-101-janome-maquinas-de-bordado-eletronico",
    "code": "J-101",
    "term": "Janome (Máquinas de Bordado Eletrônico)",
    "pronunciation": "ja-nô-mi (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Locução substantiva.",
    "origin": "Fundada em 1921 em Tóquio (Japão) por Yosaku Ose como Pine Sewing Machine Mill, adotando em 1954 o nome definitivo Janome (que em japonês significa literalmente 'Olho de Serpente' 蛇の目, devido ao formato perfeitamente circular de sua inovadora carretilha rotativa). Pioneira global na introdução da primeira máquina de bordar e costurar computadorizada residencial do mundo (Memory Craft 8000 em 1990).",
    "summary": "Fabricante japonesa de renome mundial, consagrada pelo formato nativo .JEF, mecânica super robusta, linha Memory Craft e bastidores gigantes de até 20x36 cm.",
    "definition": "A Janome é uma das mais tradicionais, prestigiadas e respeitadas fabricantes japonesas de máquinas de costura e bordado eletrônico computadorizado do planeta. Destaca-se globalmente pela excepcional durabilidade mecânica de sua transmissão interna, baixíssimo nível de vibração e pela aclamada linha de bordado plano Memory Craft (com modelos reverenciados no Brasil como a MC-400E, MC-500E e a gigante MC-550E), além das multiagulhas semi-industriais compactas de braço livre MB-4S (4 agulhas) e MB-7 (7 agulhas). Seu ecossistema opera sob o padrão nativo de arquivos .JEF e .JPX.",
    "technicalDetails": "Equipadas com laçadeira rotativa horizontal magnética silenciosa com caixa de bobina de encaixe rápido e mola de tensão de alta sensibilidade para linha 60wt. Velocidade ajustável entre 400 e 860 PPM. Sistema exclusivo de pantógrafo com acionamento linear de alta precisão angular que suporta bastidores extragrandes sem deflexão do braço mecânico. Leitura de matrizes via porta USB 2.0 (formatada em FAT32) e suporte ao software de digitalização Digitizer MBX / Artistic Digitizer.",
    "construction": [
      "Chassi estrutural fundido em liga de alumínio reforçado com blindagem antivibração",
      "Tela sensível ao toque LCD colorida panorâmica de alta resolução com edição na tela",
      "Sistema de fixação do bastidor por pinos de travamento duplo de alta estabilidade",
      "Enfiador automático de agulha com proteção de descida para evitar empenamento",
      "Sensor duplo de quebra de linha: óptico superior e tacômetro de rotação na bobina",
      "Mecanismo de corte automático e programável de salto de pontos e final de cor",
      "Iluminação em LED distribuída em 5 pontos focais sobre toda a área do bastidor"
    ],
    "howItWorks": [
      "1. A matriz criada no software é exportada na extensão .JEF (ou .JPX com pré-visualização gráfica de alta resolução).",
      "2. O arquivo é transferido para o pendrive dentro da pasta padrão criada pela própria máquina ('Embf' ou 'MyDesign').",
      "3. O bastidor Janome adequado à dimensão do bordado é travado no carro pantográfico através dos pinos de encaixe com clique sonoro.",
      "4. Na tela colorida, a bordadeira visualiza o layout, ajusta escala, faz rotações finas em passos de 1 grau ou 45 graus e executa a simulação do traçado perimetral (Trace).",
      "5. A máquina inicia suavemente o ciclo de costura em aceleração progressiva, desacelerando automaticamente em curvas complexas de ponto cheio.",
      "6. Em caso de quebra ou término de fio, o sensor interrompe o motor em menos de 0,1 segundo e permite recuar os pontos com exatidão cirúrgica para retomar sem falhas visíveis."
    ],
    "beginnerExplanation": "A Janome é uma das máquinas de bordar mais queridas e resistentes do mundo! O grande destaque dela são os bastidores enormes: enquanto muitas máquinas domésticas só bordam até 13x18 cm, modelos como a Janome MC-500E bordam até 20x28 cm e a MC-550E chega a incríveis 20x36 cm! Isso significa que você borda toalhas de banho inteiras, costas de jaquetas e mantas grandiosas sem precisar ficar dividindo nem emendando a matriz.",
    "applications": [
      "Bordados contínuos de grande porte em barras de toalhas de banho e rosto sem emenda (bastidores RE28b e RE36b)",
      "Bordados infantis e de enxovais delicados com agulha especial Blue Tip para não furar malhas",
      "Personalização corporativa de jaquetas, casacos pesados e roupões atoalhados com alta densidade",
      "Bordados em peças tubulares montadas e bonés com os modelos multiagulhas MB-4S e MB-7",
      "Confecção de apliques e rendas FSL (Free Standing Lace) com estabilidade milimétrica"
    ],
    "mainTypes": [
      "Linha Memory Craft Histórica e Entrada (MC-200E, MC-300E, MC-350E): Bastidores 14x14 cm e 14x20 cm",
      "Linha Intermediária Robusta (MC-400E): Campo de bordado quadrado de 20x20 cm com mesa extensora",
      "Linha Campeã de Ateliê (MC-500E): Bastidor de 20x28 cm e pacote com 4 bastidores inclusos (14x14, 14x20, 20x20 e 20x28 cm)",
      "Linha de Bastidor Gigante (MC-550E): Bastidor monumental RE36b de 20x36 cm e mesa de extensão extralarga",
      "Linha Multiagulhas Profissional de Bancada (MB-4S de 4 agulhas e MB-7 de 7 agulhas): Troca automática de cones de linha e cilindro livre"
    ],
    "recommendedSettings": {
      "speedPPM": "MC-500E / MC-550E: 650 a 750 PPM para detalhes finos; até 860 PPM em pontos tatami",
      "needleType": "Sistema cabo chato 130/705 H (com recomendação das originais Janome Blue Tip 75/11 ou Red Tip 90/14)",
      "stabilizer": "Entretela rasgável de 60g/m² a 80g/m² ou entretela hidrossolúvel dupla para toalhas aveludadas"
    },
    "advantages": [
      "✔ Um dos maiores campos úteis de bordado em máquinas de cabeçote plano no mundo (20x36 cm na MC-550E)",
      "✔ Chassi metálico super reforçado que garante estabilidade e reduz a vibração ao mínimo",
      "✔ Sistema de fixação de bastidor que não empena nem desliza durante o bordado de peças pesadas",
      "✔ Mesa extensora generosa de série que suporta colchas e toalhas sem puxar o carro mecânico"
    ],
    "limitations": [
      "A máquina não lê matrizes cujo desenho exceda em 1 mm o limite do bastidor selecionado, exigindo atenção ao dimensionar no computador.",
      "Pendrives devem ser rigorosamente formatados em FAT32 e de capacidade moderada (até 16GB ou 32GB) para leitura ágil."
    ],
    "commonErrors": [
      "❌ Tentar abrir arquivos com bastidor maior do que a máquina suporta: a tela simplesmente não exibe a matriz ou emite mensagem de erro de tamanho.",
      "❌ Salvar a matriz fora da pasta padrão criada pela Janome no pendrive ('Embf'): a máquina não enxerga arquivos soltos na raiz.",
      "❌ Forçar o encaixe do bastidor para baixo sem acionar a alavanca de liberação dos pinos de pressão, danificando os rolamentos do pantógrafo.",
      "❌ Usar carretilhas plásticas de altura errada ou metálicas antigas na laçadeira horizontal, o que desregula o tensor inferior."
    ],
    "troubleshootingTips": [
      "Máquina não reconhece o pendrive: Conecte o pendrive limpo na máquina e entre no menu para formatá-lo diretamente na Janome. Ela criará a pasta oficial 'Embf'. Depois, coloque a matriz em .JEF dentro dessa pasta.",
      "Linha de cima quebrando em pontos pequenos: Substitua a agulha por uma Janome Blue Tip 75/11 original e reduza a velocidade da máquina de 860 para 650 PPM no menu de configurações.",
      "Ponto de bobina aparecendo em cima: Verifique se a linha superior não escapou do estica-fio móvel ou se não há poeira de entretela presa sob a lâmina da caixa de bobina."
    ],
    "dicaArtrelados": "O segredo de ouro das máquinas Janome é a agulha Blue Tip (tamanho 75/11 de ponta azul). Ela foi projetada com uma ponta bola especial e um olho ligeiramente ampliado que praticamente zera a perda de pontos (skipped stitches) e protege tecidos de malha e toalhas atoalhadas de puxarem fios. E nunca se esqueça: antes de passar suas matrizes para o pendrive, insira o pendrive virgem na Janome para ela criar a pastinha oficial dela!",
    "voceSabia": "A palavra 'Janome' (蛇の目) significa literalmente 'Olho de Cobra' em japonês! Esse nome foi escolhido pelo fundador em 1921 porque as primeiras carretilhas de bobina redonda que ele inventou para substituir as antigas laçadeiras longas de ferro pareciam exatamente com os olhos redondos e vigilantes de uma cobra!",
    "practicalExercise": "Aprenda o protocolo de formatação e pastas Janome: Insira um pendrive de 8GB ou 16GB na porta USB da sua máquina Janome. Acesse a tela de configurações e selecione 'Formatar USB'. Retire o pendrive e espete no computador: observe que foi criada automaticamente a pasta 'Embf'. Salve um bordado teste em .JEF dentro dela e espete de volta na máquina para comprovar a leitura instantânea!",
    "quickSummary": "Fabricante japonesa sinônimo de robustez e alta engenharia, mundialmente consagrada pelos bastidores gigantescos de 20x28 cm e 20x36 cm da linha Memory Craft e pelo formato .JEF.",
    "relatedTerms": [
      "Brother (Máquinas de Bordado Eletrônico)",
      "Formato JEF",
      "Bastidor de Bordado",
      "Agulha Blue Tip Janome",
      "Caixa de Bobina",
      "Tensão de Linha",
      "Ponto Tatami"
    ],
    "tags": [
      "j-101",
      "janome",
      "maquinas",
      "equipamento",
      "mc500e",
      "mc550e",
      "mc400e",
      "mb7",
      "jef",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME SEWING MACHINE CO. Memory Craft 500E/550E Instruction Book and Service Reference. Tokyo: Janome, 2023.",
      "JANOME SEWING MACHINE CO. MB-Series Multi-Needle Embroidery Technical Guide. Tokyo, 2022.",
      "ARTRELADOS. Guia de Operação e Bastidores Especiais Janome para Grandes Dimensões. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "j-102-juki-maquinas-de-bordado-eletronico",
    "code": "J-102",
    "term": "Juki (Máquinas de Bordado Eletrônico)",
    "pronunciation": "dju-ki (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    "letter": "J",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Locução substantiva.",
    "origin": "Fundada em 1938 em Tóquio (Japão) como Tokyo Juki Industrial Co., Ltd. Consolidou-se como a maior fabricante do planeta em maquinário industrial para vestuário e equipamentos mecatrônicos têxteis pesados. No bordado computadorizado, foi pioneira absoluta no desenvolvimento da primeira máquina com passagem de linha 100% autônoma por motor elétrico e sucção na tela LCD (série HZL-010) e nas consagradas máquinas industriais de bordado de ciclo programável da série AMS.",
    "summary": "Lendária fabricante japonesa (Tóquio, 1938), líder mundial em maquinário industrial pesado, célebre pela inovadora série HZL com enfiador robótico autônomo e pelas imponentes máquinas computadorizadas de bordado de ciclo programável AMS a até 2.800 PPM.",
    "definition": "A Juki é uma gigante industrial japonesa e a mais respeitada autoridade mundial em engenharia mecatrônica de costura e bordado programado. Destaca-se pelas inovadoras máquinas combinadas residenciais de bordado computadorizado da série HZL (como a lendária HZL-010, pioneira mundial no enfiamento de linha 100% automático por motor elétrico, tela colorida sensível ao toque e formato .JUK) e pela linha industrial líder global de bordados de ciclo programável da série AMS (modelos AMS-210EN, AMS-221EN e AMS-224EN), indispensáveis nas maiores indústrias de calçados esportivos, artigos em couro automotivo, jaquetas técnicas, cintos de segurança e etiquetas de marcas de luxo operando via formato universal .DST.",
    "technicalDetails": "Nas máquinas da série residencial HZL, o módulo de bordado de engate rápido opera com carro pantográfico motorizado de alta suavidade, leitura de cartões SmartMedia e formato .JUK/.DST. Na consagrada linha industrial programável AMS, os eixos X/Y são acionados por motores de passo de micropasso com servomotor direto AC no cabeçote atingindo até 2.800 PPM. Possui calcador intermediário programável com ajuste digital de altura a cada ponto, corte automático de linha pesada por lâmina rotativa de corte duplo e painel de comando programável IP-420 colorido touchscreen.",
    "construction": [
      "Chassi monobloco em ferro fundido de altíssima densidade mecânica para resistência a vibrações em alta velocidade",
      "Calcador intermediário programável acionado por motor de passo com regulagem digital de altura ponto a ponto",
      "Sistema de enfiador de agulha totalmente elétrico e autônomo acionado por botão (série HZL)",
      "Módulo de corte automático de linha reforçado com contrafaca temperada para cortar fios grossos e técnicos",
      "Painel de programação digital avançado IP-420 colorido com tela sensível ao toque e porta USB",
      "Laçadeira rotativa industrial de capacidade ampliada com lubrificação automática microdosada",
      "Grampos de fixação pneumáticos ou mecânicos de alta pressão para estabilização de couros e tecidos densos"
    ],
    "howItWorks": [
      "1. A matriz de bordado técnico ou decorativo em formato .DST ou .JUK é transferida para o painel de comando da máquina Juki via pendrive USB.",
      "2. No painel digital colorido, o operador confere os contornos do desenho, define a altura do calcador intermediário e ajusta a velocidade ideal para a gramatura do material.",
      "3. A peça (seja uma etiqueta nobre, cabedal de calçado, cinto ou tecido estruturado) é encaixada no grampo pantográfico e travada com segurança mecânica ou pneumática.",
      "4. O operador aciona o teste perimetral óptico para garantir que o ciclo de costura ocorrerá com folga total em relação às bordas metálicas da chapa.",
      "5. Ao pressionar o pedal de comando ou botão Start, a máquina inicia o ciclo operacional, acelerando até 2.500 ou 2.800 PPM com fixação milimétrica de cada ponto.",
      "6. Ao concluir o ciclo, a navalha de aço temperado corta o fio rente ao avesso e o calcador se eleva automaticamente, liberando a peça finalizada com perfeição industrial."
    ],
    "beginnerExplanation": "A Juki é a verdadeira rainha da força e da durabilidade no mundo da costura e do bordado! Sabe aquele tênis de corrida famoso que tem um bordado de reforço perfeito nas laterais, ou aquela jaqueta de couro e bolsa de marca que duram décadas sem soltar um único ponto? Quase tudo isso é feito em máquinas Juki! No ateliê, ela ficou famosa por inventar máquinas que colocavam a linha no buraquinho da agulha sozinhas com um simples toque na tela, e nas indústrias ela é a máquina mais respeitada do mundo quando você precisa bordar materiais grossos que nenhuma outra máquina consegue aguentar!",
    "applications": [
      "Bordados técnicos e decorativos em calçados esportivos, tênis e chuteiras de alta performance",
      "Gravação e bordado de monogramas e logotipos em couro nobre, bolsas e estofamentos automotivos",
      "Fixação de etiquetas tecidas e emblemas de marcas de luxo em camisas polo, jeans e jaquetas",
      "Bordados de reforço estrutural em cintos de segurança, mochilas táticas e equipamentos de proteção",
      "Bordados decorativos residenciais em roupas finas e enxovais com a linha combinada HZL"
    ],
    "mainTypes": [
      "Juki HZL-010 / HZL-009: Máquinas combinadas lendárias com enfiador elétrico robotizado e módulo de bordado",
      "Juki AMS-210EN: Máquina industrial de ciclo programável de bordado compacto (áreas de 13x10 cm e 22x10 cm)",
      "Juki AMS-221EN: Modelo industrial de médio porte de alta precisão (área de 25x16 cm e 30x20 cm)",
      "Juki AMS-224EN: Modelo de grande formato para couros automotivos e jaquetas com campo de até 60x40 cm"
    ],
    "recommendedSettings": {
      "speedPPM": "2.000 a 2.500 PPM em materiais industriais planos; 1.500 a 1.800 PPM em couros espessos e linhas grossas",
      "needleType": "Sistema industrial pesado DPx17 ou DPx5 (tamanhos 90/14 a 130/21) e 130/705 H na série doméstica HZL",
      "stabilizer": "Entretela resinada pesada, tecido termocolante estruturado ou bases plásticas de reforço industrial"
    },
    "advantages": [
      "✔ Líder mundial incontestável em robustez mecânica, precisão e longevidade operacional contínua",
      "✔ Calcador intermediário programável que elimina totalmente o salto do tecido e a perda de pontos em materiais grossos",
      "✔ Velocidades de trabalho extraordinárias de até 2.800 PPM com estabilidade de ponto insuperável",
      "✔ Corte automático de linha de alta potência capaz de cortar linhas grossas de nylon e poliéster técnico"
    ],
    "limitations": [
      "A linha industrial AMS é projetada para ciclos programados e requer conhecimentos de fixação em gabaritos metálicos.",
      "Equipamentos industriais de alto investimento voltados primariamente para produção especializada e confecção pesada."
    ],
    "commonErrors": [
      "❌ Bordar couro ou sintético com a altura do calcador intermediário desregulada, gerando marcas de compressão na superfície.",
      "❌ Utilizar agulhas de ponta comum redonda em couros rígidos em vez de agulhas com ponta cortante tipo LR ou S.",
      "❌ Operar em velocidades superiores a 2.000 PPM sem verificar o nível de óleo no cárter com bomba automática.",
      "❌ Esquecer de calibrar a pressão do grampo de fixação de acordo com a espessura do material bordado."
    ],
    "troubleshootingTips": [
      "Ponto pulando ou quebra de linha em tecidos grossos: Ajuste a altura do calcador intermediário programável no painel IP-420 para descer 0,5 mm mais rente à peça no momento da subida da agulha.",
      "Faca de corte não apara linha espessa: Afie ou substitua a navalha móvel temperada e verifique a pressão da mola do mecanismo de corte inferior.",
      "Alarme de erro no enfiador automático da linha HZL: Limpe os sensores ópticos do cabeçote com pincel macio e confirme se o estica-fio está no ponto mais alto."
    ],
    "dicaArtrelados": "Ao bordar etiquetas ou detalhes em couro em uma máquina programável Juki AMS, o segredo de mestre é a regulagem milimétrica do Calcador Intermediário Programável! Programe a descida do calcador para encostar suavemente no couro (deixando apenas 0,3 a 0,5 mm de folga): o couro não sobe junto com a agulha (acabando com o efeito de repuxo) e o seu bordado fica com uma definição geométrica tão perfeita que parece feito a laser!",
    "voceSabia": "O nome 'JUKI' é uma homenagem à tradição da mecânica de precisão japonesa: ele nasce da união das palavras japonesas 'JU' (que remete a armas de alta precisão e engenharia de tolerâncias micrométricas) e 'KI' (máquina)! A engenharia da Juki é tão avançada que a empresa colabora com tecnologias têxteis utilizadas inclusive em roupas e equipamentos da indústria aeroespacial!",
    "practicalExercise": "Ajuste Fino de Altura de Calcador no Painel Juki: Em uma máquina Juki com comando digital, acesse a tela de parâmetros do calcador intermediário. Posicione uma peça de couro de 2 mm de espessura no grampo de fixação. Altere o parâmetro de altura de 1.5 mm para 2.5 mm. Acione o ciclo de teste sem linha: observe como o calcador toca no couro sem esmagar o relevo e sobe suavemente sem fazer barulho nem deixar marcas na peça!",
    "quickSummary": "Lendária fabricante japonesa (Tóquio, 1938), líder mundial em maquinário industrial pesado, célebre pela inovadora série HZL com enfiador robótico e pelas imponentes máquinas programáveis de bordado AMS a até 2.800 PPM.",
    "relatedTerms": [
      "Janome (Máquinas de Bordado Eletrônico)",
      "Brother (Máquinas de Bordado Eletrônico)",
      "Tajima",
      "Formato DST",
      "Agulha DPx17",
      "Calcador de Bordado",
      "Velocidade PPM"
    ],
    "tags": [
      "j-102",
      "juki",
      "maquinas",
      "equipamento",
      "ams210en",
      "ams221en",
      "hzl",
      "industrial",
      "dst",
      "japonesa",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JUKI CORPORATION. Instruction Manual and Engineering Technical Reference: Computer-Controlled Cycle Machine AMS-EN Series. Tokyo: Juki, 2023.",
      "JUKI CORPORATION. The Heritage of Precision Stitching and Industrial Mecatronics. Tokyo, 2022.",
      "ARTRELADOS. Máquinas Industriais Programáveis e Tecnologia Mecatrônica Japonesa no Bordado. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "j-103-jack-maquinas-de-bordado-eletronico-e-automacao-textil",
    "code": "J-103",
    "term": "Jack (Máquinas de Bordado Eletrônico e Automação Têxtil)",
    "pronunciation": "djek (má-qui-nas de bor-da-do e-le-trô-ni-co e au-to-ma-ção têx-til)",
    "letter": "J",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Marca comercial / Locução substantiva.",
    "origin": "Fundada em 1995 em Taizhou, província de Zhejiang (China), como Jack Technology Co., Ltd. Consolidou-se como a maior fabricante global em volume de vendas de equipamentos de costura e mecatrônica têxtil do planeta, pioneira mundial na integração de inteligência artificial com comandos por voz em português, servomotores diretos integrados e sistemas computadorizados de bordado de ciclo programável da série JK-T.",
    "summary": "Maior fabricante mundial em volume da atualidade (Zhejiang, 1995), líder em tecnologia têxtil com comandos por voz em português, servomotores inteligentes e máquinas industriais de bordado de ciclo programável JK-T a até 2.700 PPM.",
    "definition": "A Jack Technology é uma das mais inovadoras e dominantes corporações globais de engenharia têxtil contemporânea, com presença expressiva e liderança de mercado nas confecções e ateliês de todo o Brasil. No segmento de bordado computadorizado e pesponto decorativo, consagrou-se com as avançadas máquinas computadorizadas de bordado de ciclo programável da série JK-T (como a JK-T1900, JK-T1906 e a versátil JK-T3020 para áreas de 30x20 cm), amplamente utilizadas para bordar logotipos, etiquetas tecidas, reforços geométricos, calçados, bolsas e detalhes decorativos em couro e tecidos pesados. Destaca-se por painéis digitais touchscreen coloridos com comandos e avisos falados por voz em português, motores de passo de micropasso nos eixos X/Y, servomotor direct-drive no cabeçote e total compatibilidade com o formato universal .DST.",
    "technicalDetails": "Equipada com servomotor de acionamento direto AC Direct-Drive coaxial acoplado ao cabeçote (eliminando correias e ruídos) e motores de passo de alta resolução nos eixos cartesianos X/Y para movimentação pantográfica do grampo com tolerância de 0,05 mm. Velocidade programável de costura e bordado técnico de até 2.700 PPM. Painel digital touchscreen com assistente de voz falada em língua portuguesa, porta USB frontal para importação de matrizes em formato universal Tajima .DST ou formato de padrão programado .VDP/.DXF, sistema de corte automático de linha com ponta ultracurta de até 2 mm e calcador intermediário programável com controle digital de altura.",
    "construction": [
      "Chassi monobloco fundido em ferro de alta densidade com pintura eletrostática anticorrosiva e design ergonômico moderno",
      "Servomotor Direct-Drive integrado diretamente no eixo superior sem correias de transmissão para silêncio e resposta imediata",
      "Motores de passo de micropasso independentes para os eixos cartesianos X e Y de alta precisão pantográfica",
      "Painel digital colorido touchscreen capacitivo com alto-falante integrado e inteligência de comando e aviso por voz",
      "Calcador intermediário programável com regulagem digital de altura ponto a ponto para evitar vibração do material",
      "Mecanismo de corte automático de linha reforçado com lâminas de aço rápido para corte de fios grossos e técnicos",
      "Grampos de fixação de troca rápida (mecânicos ou pneumáticos) com gabaritos vazados para áreas de até 300x200 mm"
    ],
    "howItWorks": [
      "1. A matriz de bordado técnico ou decorativo em formato universal Tajima .DST é inserida via pendrive USB na porta do painel Jack.",
      "2. A máquina reproduz uma saudação por voz em português confirmando a leitura do arquivo e exibe a prévia gráfica na tela touch.",
      "3. O operador seleciona o desenho, define a altura do calcador intermediário de acordo com a espessura da peça e fixa o material no grampo de aperto.",
      "4. O operador aciona o pedal de aproximação: o grampo desce prendendo firmemente a peça (etiqueta, bolso, calçado ou cinto).",
      "5. Ao acionar o pedal de costura, a máquina borda em altíssima velocidade (até 2.700 PPM), executando o desenho programado com exatidão micrométrica.",
      "6. Ao finalizar, o sistema corta a linha rente ao avesso, eleva o grampo e avisa por voz em português que a operação foi concluída com sucesso."
    ],
    "beginnerExplanation": "A Jack é a marca de máquinas inteligentes mais moderna e famosa do Brasil hoje em dia! O diferencial mais incrível dela é que as máquinas literalmente 'falam' com você em português! Se a linha arrebentar, se o óleo estiver baixo ou se ela terminar o bordado, uma voz simpática da própria máquina te avisa pelo alto-falante o que aconteceu! As máquinas de bordado programado da Jack são aquelas usadas para bordar etiquetas perfeitas de marcas famosas em camisas polo, bolsos de calças jeans e reforços de tênis esportivos em segundos!",
    "applications": [
      "Bordados técnicos e decorativos de logotipos em etiquetas de marcas de luxo e camisas polo",
      "Gravação e bordados geométricos em calçados esportivos, tênis e chuteiras de couro e sintético",
      "Bordados de reforço estrutural em bolsos de calças jeans, jaquetas e uniformes profissionais pesados",
      "Bordados personalizados e costuras programadas em alças de mochilas, bolsas e cintos de segurança",
      "Bordados em peças de couro legítimo, estofamentos automotivos e artigos de marroquinaria"
    ],
    "mainTypes": [
      "Jack JK-T1900: Máquina computadorizada de ciclo de alta velocidade para presilhas, travetes e pequenos bordados técnicos",
      "Jack JK-T1906: Modelo programável para bordados de etiquetas e monogramas compactos em área de 60x50 mm",
      "Jack JK-T3020: Máquina de bordado de ciclo programável de médio formato com campo amplo de 300x200 mm",
      "Jack JK-T6040: Modelo industrial de grande formato para painéis de couro, jaquetas técnicas e peças automotivas"
    ],
    "recommendedSettings": {
      "speedPPM": "2.000 a 2.500 PPM para tecidos planos e sarjas; 1.500 a 1.800 PPM para couros e linhas grossas",
      "needleType": "Sistema industrial resistente DPx17 ou DPx5 (tamanhos 80/12 a 120/19 de acordo com o material)",
      "stabilizer": "Entretela resinada pesada, tecido termocolante estruturado ou bases plásticas de reforço industrial"
    },
    "advantages": [
      "✔ Sistema interativo inovador com voz falada em português que orienta o operador e avisa sobre erros em tempo real",
      "✔ Servomotor Direct-Drive integrado extremamente econômico, gerando até 70% de economia de energia e zero ruído",
      "✔ Altíssima produtividade industrial operando em velocidades de até 2.700 PPM com estabilidade absoluta",
      "✔ Compatibilidade universal com o formato Tajima .DST, permitindo usar matrizes criadas em Wilcom e Embird"
    ],
    "limitations": [
      "Equipamento de ciclo programado com grampo de fixação, voltado para peças dentro da área útil do gabarito (ex.: 30x20 cm).",
      "Exige atenção ao posicionamento dos gabaritos metálicos para não haver colisão da agulha com a chapa de aperto."
    ],
    "commonErrors": [
      "❌ Iniciar o ciclo sem fazer a simulação visual sem linha para verificar se a agulha não toca na borda do grampo metálico.",
      "❌ Borda materiais espessos com o calcador intermediário muito alto, provocando repuxo e quebra de agulha.",
      "❌ Utilizar agulhas normais de ponta redonda em couros rígidos em vez de agulhas especiais com ponta tipo espada (LR).",
      "❌ Esquecer de ativar o volume da voz no painel digital, perdendo os alertas inteligentes de manutenção."
    ],
    "troubleshootingTips": [
      "Mensagem de voz avisando sobre sobrecarga no motor (Error E-07): Verifique se há linha enrolada no volante ou sob a chapa da agulha e reinicie a máquina.",
      "Ponta de linha sobrando muito comprida no final do ciclo: Acesse o menu de parâmetros de corte no painel touch e calibre a folga da navalha móvel para 1.5 mm.",
      "Ponto pulando no início do bordado: Ajuste a altura do calcador intermediário para descer 0,5 mm mais próximo da peça na tela digital."
    ],
    "dicaArtrelados": "Nas máquinas Jack com tecnologia de voz, ative sempre a função de Alerta de Manutenção Preventiva! A própria máquina monitora a quantidade de pontos executados e te avisa por voz exatamente quando é hora de colocar a gotinha de óleo na laçadeira e limpar a caixa de bobina: isso evita aquecimento prematuro das peças e mantém a sua Jack com precisão de fábrica por muitos anos!",
    "voceSabia": "A Jack foi a primeira fabricante do mundo a introduzir inteligência artificial com processamento de voz em máquinas têxteis industriais! Seus engenheiros gravaram vozes nativas em dezenas de idiomas — incluindo o português do Brasil com sotaque perfeitamente natural — para que operadores iniciantes possam aprender a operar a máquina sem sequer precisarem ler o manual impresso!",
    "practicalExercise": "Importação de Matriz .DST e Teste de Gabarito na Jack JK-T3020: Salve um logotipo de 10x10 cm em formato .DST em um pendrive. Conecte o pendrive na porta USB frontal da Jack. Ouça a confirmação sonora da máquina, toque no desenho na tela touch e acione a função 'Trace' (Traçado sem costura). Observe o grampo se mover enquanto a voz confirma o término do teste, garantindo segurança total para iniciar o bordado!",
    "quickSummary": "Maior fabricante mundial em volume da atualidade (Zhejiang, 1995), líder em tecnologia têxtil com comandos por voz em português, servomotores inteligentes e máquinas industriais de bordado de ciclo programável JK-T a até 2.700 PPM.",
    "relatedTerms": [
      "Zoje (Máquinas de Bordado Eletrônico)",
      "Typical (Máquinas de Bordado Eletrônico)",
      "Juki (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Agulha DPx17",
      "Calcador de Bordado",
      "Velocidade PPM"
    ],
    "tags": [
      "j-103",
      "jack",
      "jkt3020",
      "jkt1900",
      "voz",
      "directdrive",
      "maquinas",
      "equipamento",
      "dst",
      "industrial",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JACK TECHNOLOGY CO., LTD. Operation and Electronic Programming Manual: JK-T Series Computer-Controlled Cycle Machine. Taizhou: Jack, 2023.",
      "JACK TECHNOLOGY CO., LTD. Smart Sewing and IoT Mechanics in Modern Garment Production. Taizhou, 2023.",
      "ARTRELADOS. Inovações Tecnológicas, Interatividade por Voz e Produtividade no Bordado Industrial. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  }
];



import { Verbete } from "../types";

export const VERBETES_LETTER_D2: Verbete[] = [
  {
    "id": "d-023-distribuicao-de-pontos",
    "code": "D-023",
    "term": "Distribuição de Pontos",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos distribuição e pontos.",
    "category": "Programação de Bordado",
    "summary": "Maneira como os pontos são organizados, espalhados e equilibrados no espaço dentro da matriz.",
    "definition": "A distribuição de pontos corresponde à maneira como os pontos são organizados e espalhados dentro de um objeto ou região da matriz de bordado. Está intimamente relacionada à densidade, mas não deve ser confundida com ela: enquanto a densidade se refere à concentração pura de pontos em determinada área, a distribuição descreve como esses pontos estão espacialmente arranjados (uniformes, concentrados, afastados, radiais ou acompanhando curvas).",
    "technicalDetails": "Analisa a regularidade topológica dos pontos na malha vetorial. Uma distribuição equilibrada evita acúmulos pontuais que criam relevos duros ou falhas periféricas causadas pela tração das linhas.",
    "construction": [
      "Malha geométrica de penetrações",
      "Espaçamento constante ou progressivo",
      "Alinhamento às curvas do objeto",
      "Balanceamento de underlay e cobertura"
    ],
    "howItWorks": [
      "1. O software calcula o posicionamento de cada ponto ao longo do vetor.",
      "2. O digitalizador ajusta a dispersão para acompanhar a geometria do desenho.",
      "3. A máquina costura os pontos de forma equilibrada, mantendo a tensão homogênea no tecido."
    ],
    "mainTypes": [
      "Distribuição Uniforme (Padrão em preenchimentos regulares)",
      "Distribuição Anatômica / Orgânica (Acompanha pétalas e folhas)",
      "Distribuição Concentrada / Focal (Para centros de flores e olhos)"
    ],
    "advantages": [
      "✔ Constrói uma superfície visualmente equilibrada e sem falhas",
      "✔ Evita acúmulo de linha e rigidez excessiva em cantos fechados",
      "✔ Proporciona tensão uniforme sobre o tecido durante a execução"
    ],
    "limitations": [
      "Formas com pontas muito agudas exigem técnicas especiais (como cantos em meia-esquadria ou corte de pontos) para manter a distribuição regular."
    ],
    "commonErrors": [
      "❌ Olhar apenas o número total de pontos sem verificar onde eles estão concentrados.",
      "❌ Permitir que dezenas de pontos se acumulem no mesmo vértice de uma forma triangular.",
      "❌ Deixar áreas desigualmente cobertas por má distribuição do underlay."
    ],
    "voceSabia": "Uma matriz pode ter a mesma quantidade de pontos de outra, mas se a distribuição for ruim, uma parecerá pesada e repuxada enquanto a outra ficará leve e perfeita!",
    "curiosidadeTecnica": "Em cantos muito estreitos no ponto Satin, softwares modernos usam o recurso de 'Smart Corners' (Cantos Inteligentes) para redistribuir e reduzir pontos nas curvas fechadas.",
    "dicaArtrelados": "Uma matriz bonita não é apenas uma matriz com a quantidade certa de pontos: é uma matriz em que os pontos estão harmoniosamente bem distribuídos!",
    "applications": [
      "Preenchimentos gerais, cantos de molduras, pétalas, folhas e monogramas."
    ],
    "troubleshootingTips": [
      "Se os cantos de letras ou estrelas ficarem duros como pedras, ative a opção de redução automática de pontos em cantos agudos no software."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Distância entre Pontos",
      "Ponto de Preenchimento",
      "Direção do Ponto"
    ],
    "tags": [
      "d-023",
      "distribuicao de pontos",
      "equilibrio",
      "topologia",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distributio, -onis (divisão harmônica, partilha ordenada, de distribuere) e punctum (ponto perfurado). Na programação gráfica CAD têxtil, refere-se ao algoritmo topológico de dispersão espacial de perfurações ao longo de nós vetoriais.",
    "beginnerExplanation": "Distribuição de pontos é como os pontos estão espalhados pelo desenho: se eles estão bem divididos de forma suave e organizada, ou se estão todos amontoados em um canto só. Uma boa distribuição faz o bordado ficar macio e plano, sem aquelas bolotas duras nos cantos das letras.",
    "practicalExercise": "Desenhe uma estrela de 5 pontas no software e borde em ponto cheio (Satin). Observe os bicos finos da estrela: se os pontos estiverem se acumulando todos na mesma pontinha, ative a opção de 'Cantos Inteligentes' (Smart Corners) ou reduza a densidade na curva para redistribuir os pontos com suavidade.",
    "quickSummary": "Distribuição de pontos é o arranjo espacial equilibrado das perfurações de agulha sobre a forma vetorial, evitando acúmulos e deformações no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Distribution, Smart Corners & Density Balancing. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Vector Topologies for Textile Embroidery. London: Textile Press, 2021.",
      "ARTRELADOS. Distribuição Harmônica de Pontos e Tratamento de Cantos Agudos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-024-desenho-de-bordado-pratica",
    "code": "D-024",
    "term": "Desenho de Bordado (Prática & Conceito)",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada por substantivos masculinos.",
    "category": "Design & Criação",
    "summary": "Guia prático para a escolha, análise e adaptação de imagens visuais antes de transformá-las em matrizes.",
    "definition": "O desenho de bordado é a representação visual daquilo que se deseja transformar em bordado computadorizado (uma flor, um logotipo, um nome, um personagem ou símbolo). Uma imagem gráfica (como um arquivo JPG ou PNG) não é automaticamente uma matriz: para ser executada pela máquina, ela precisa ser convertida em uma estrutura de objetos, coordenadas de pontos e comandos mecânicos.",
    "technicalDetails": "Consiste na etapa de pré-avaliação do arquivo de imagem. Uma imagem visualmente linda na tela do celular pode conter linhas de 0.2mm ou textos microscópicos que são fisicamente inviáveis para uma agulha de 0.75mm com linha de poliéster.",
    "construction": [
      "Imagem fonte de referência (JPG, PNG, BMP)",
      "Análise de escala e proporção real",
      "Separação visual de planos e contornos",
      "Planejamento de adaptação para pontos"
    ],
    "howItWorks": [
      "1. A imagem é recebida e analisada quanto à nitidez e viabilidade técnica.",
      "2. Identificam-se detalhes que precisarão ser engrossados ou simplificados.",
      "3. O desenho é redimensionado para o tamanho final antes da digitalização."
    ],
    "mainTypes": [
      "Desenho Linear Simples (Fácil conversão para pontos corridos ou satin)",
      "Desenho Preenchido em Cores Sólidas (Ideal para blocos tatami)",
      "Desenho Complexo / Fotográfico (Exige simplificação prévia profunda)"
    ],
    "advantages": [
      "✔ Garante que o bordado mantenha a identidade visual do projeto original",
      "✔ Evita perdas de tempo tentando digitalizar detalhes impossíveis de bordar",
      "✔ Facilita o alinhamento de expectativas estéticas com o cliente"
    ],
    "limitations": [
      "Imagens com baixa resolução ou muitos degradês exigem redesenho vetorial prévio."
    ],
    "commonErrors": [
      "❌ Tentar bordar um logotipo com letras de 2mm exatamente como está no cartão de visitas.",
      "❌ Supor que a máquina de bordar funciona como uma impressora a jato de tinta.",
      "❌ Não adaptar o desenho ao tipo de tecido onde ele será aplicado."
    ],
    "voceSabia": "A menor letra legível em bordado com agulha 75/11 e linha 40 comum precisa ter pelo menos 4.5mm a 5.0mm de altura. Menor do que isso, os furos da agulha se fundem e a letra vira um borrão!",
    "curiosidadeTecnica": "Ao avaliar um desenho, reduza a imagem na tela do computador até que ela meça exatamente os centímetros reais que terá na peça e afaste-se 50cm: o que você não conseguir ler com os olhos também não funcionará no bordado.",
    "dicaArtrelados": "Não pergunte apenas: 'a imagem é bonita?'. Pergunte: 'esta imagem pode ser transformada em um bom bordado com linha e agulha?' Essa pergunta muda completamente a sua visão de produção!",
    "applications": [
      "Avaliação de artes de clientes, criação de novas matrizes e orçamentos de ateliê."
    ],
    "troubleshootingTips": [
      "Se um detalhe do desenho estiver pequeno demais, engrosse-o no software gráfico antes de abrir o programa de bordado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "Digitalização de Bordado",
      "Vetorização",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-024",
      "desenho de bordado",
      "arte",
      "viabilidade",
      "escala",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deexsignare (traçar, delinear com marcas) e do grego praktike (relativo à ação, empírico, de prassein, fazer). Representa a ponte prática entre a arte ilustrativa e a física mecânica da agulha.",
    "beginnerExplanation": "É o passo a passo prático de como escolher e preparar um desenho antes de bordar: ver se as letras não são pequenas demais, se os detalhes finos vão aparecer no pano e se a imagem combina com o tipo de peça (toalha, camiseta, boné).",
    "practicalExercise": "Pegue três desenhos diferentes (uma foto de família cheia de sombras, um desenho infantil simples de contorno preto e um logotipo corporativo). Analise os três e classifique: qual deles está 100% pronto para bordar, qual precisa de pequenas adaptações e qual precisa ser redesenhado do zero.",
    "quickSummary": "Desenho de bordado prático é a metodologia de análise prévia e adaptação dimensional de artes visuais para a realidade física do bordado.",
    "bibliographicReferences": [
      "LEE, C. Practical Artwork Adaptation for Machine Embroidery. Seoul, 2022.",
      "PUNDOLE, F. Graphic Principles for Embroidery Digitizers. Mumbai, 2021.",
      "ARTRELADOS. Metodologia Artrelados de Triagem e Adaptação de Desenhos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-025-digitalizacao-automatica-regras",
    "code": "D-025",
    "term": "Digitalização Automática (Regras & Limitações)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "Análise profunda de funcionamento, vantagens reais e armadilhas da conversão automática de matrizes.",
    "definition": "A digitalização automática é o recurso dos softwares de bordado que analisa uma imagem e tenta convertê-la de forma autônoma em objetos e pontos. Embora pareça um processo mágico e instantâneo, o programa não compreende a física dos tecidos, a elasticidade nem as tensões da linha, exigindo sempre rigorosa revisão técnica e ajustes humanos.",
    "technicalDetails": "Funciona bem para imagens com cores sólidas puras, alto contraste, sem degradês e com formas geométricas limpas. Falha frequentemente em fotografias, texturas complexas e pequenos textos.",
    "construction": [
      "Reconhecimento automatizado de formas",
      "Redução algorítmica de cores",
      "Atribuição genérica de ângulos e pontos",
      "Inserção automática de cortes e saltos"
    ],
    "howItWorks": [
      "1. O usuário importa uma imagem nítida de alto contraste no software.",
      "2. O programa agrupa os pixels por similaridade de cor.",
      "3. Gera blocos de pontos cheios ou tatami de forma automática.",
      "4. O operador precisa inspecionar e corrigir sequências, pontos curtos e compensações."
    ],
    "mainTypes": [
      "Conversão Automática de Imagem Bitmap (PNG/JPG)",
      "Conversão Automática de Desenho Vetorial (SVG/EPS)",
      "Conversão Automática de Tipografia TrueType do Windows"
    ],
    "advantages": [
      "✔ Agilidade para criar rascunhos e modelos iniciais de apresentação",
      "✔ Reduz o tempo de traçado em desenhos com muitas formas geométricas simples",
      "✔ Excelente ferramenta auxiliar para quem está iniciando os estudos"
    ],
    "limitations": [
      "Gera sequências pouco eficientes com saltos longos, excesso de pontos e falta de compensação de repuxamento."
    ],
    "commonErrors": [
      "❌ Enviar a matriz gerada automaticamente direto para a máquina sem revisão.",
      "❌ Acreditar que o software sabe qual entretela ou tecido você vai utilizar.",
      "❌ Confundir uma imagem com simulação 3D bonita na tela com uma matriz estável na máquina."
    ],
    "voceSabia": "Uma matriz gerada automaticamente pode levar 10 segundos para ser criada no software, mas gastar 20 minutos a mais na máquina por causa de dezenas de cortes desnecessários!",
    "curiosidadeTecnica": "A conversão automática de texto TrueType funciona bem para fontes retas (Arial, Impact), mas costuma deformar completamente fontes cursivas finas ou com serifa.",
    "dicaArtrelados": "Use a digitalização automática como ponto de partida, nunca como ponto de chegada! Uma matriz bonita na tela ainda precisa ser uma matriz eficiente na máquina. Antes de bordar, confira: sequência + pontos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "Conversão rápida de formas básicas, símbolos simples e estudos de viabilidade."
    ],
    "troubleshootingTips": [
      "Após a conversão automática, exclua os micro-objetos de menos de 1mm que o software gerou por engano nas bordas das cores."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Digitalizador de Bordado",
      "Desenho Digitalizado",
      "Underlay"
    ],
    "tags": [
      "d-025",
      "digitalizacao automatica",
      "software",
      "regras",
      "limitacoes",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis e grego automatos (automático), aliado ao latim regula (regra, norma) e limitatio (delimitação de fronteiras).",
    "beginnerExplanation": "São as regras essenciais para você não cair em ciladas ao usar a conversão automática do software: imagens precisam ter contornos nítidos e cores sólidas; você nunca deve confiar na matriz sem antes passar um 'pente fino' no simulador para apagar pontos curtos e nós escondidos.",
    "practicalExercise": "Pegue um logotipo simples com círculos e letras: faça a conversão automática e abra a lista de objetos do software. Conte quantos pequenos cortes de linha foram criados. Junte manualmente as partes da mesma cor para eliminar cortes e compare o tempo final estimado da matriz!",
    "quickSummary": "Digitalização automática com regras e limitações é a aplicação criteriosa de ferramentas de conversão assistida sob estrito controle e pós-edição humana.",
    "bibliographicReferences": [
      "BERNINA. Auto-Digitizing Best Practices & Quality Control. Steckborn, 2023.",
      "HATCH. When to Use Auto-Digitize and How to Fix It. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual de Sobrevivência e Otimização para Matrizes Automáticas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-026-digitalizacao-manual-tecnica",
    "code": "D-026",
    "term": "Digitalização Manual (Técnica & Decisões)",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Programação de Bordado",
    "summary": "Metodologia consciente de construção de matrizes onde cada decisão técnica é controlada pelo digitalizador.",
    "definition": "Na digitalização manual, o profissional constrói os objetos da matriz conscientemente, definindo parâmetros, caminhos, pontos de entrada/saída, ângulos e underlays de acordo com a física do tecido e o acabamento pretendido. Em vez de delegar decisões ao computador, o digitalizador assume o controle de toda a engenharia da matriz.",
    "technicalDetails": "Permite calibrar tolerâncias de Pull Compensation (+0.30mm a +0.60mm), aplicar underlays adequados (linha central, ziguezague ou tatami duplo) e construir caminhos contínuos que eliminam paradas de corte.",
    "construction": [
      "Definição de entrada e saída por objeto",
      "Seleção criteriosa de tipo de ponto por espessura",
      "Estruturação de underlay por camadas",
      "Planejamento de sobreposição de segurança (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador estuda o desenho e define a ordem cronológica de costura.",
      "2. Traça os nós de contorno e aplica a linha de direção do ponto.",
      "3. Configura a densidade e o underlay conforme o tecido de destino.",
      "4. Conecta os objetos com pequenos pontos de viagem ocultos."
    ],
    "mainTypes": [
      "Digitalização Manual por Colunas (Colunas A, B, C no Wilcom)",
      "Digitalização Manual por Preenchimento Complexo",
      "Digitalização Ponto a Ponto Cirúrgica"
    ],
    "advantages": [
      "✔ Máxima precisão e encaixe perfeito entre contornos e fundos",
      "✔ Zero quebras de linha e bordado extremamente macio e flexível",
      "✔ Alta velocidade de produção na máquina com avesso limpíssimo"
    ],
    "limitations": [
      "Exige curva de aprendizado gradual e prática com o software de programação."
    ],
    "commonErrors": [
      "❌ Clicar pontos em excesso tentando desenhar contornos perfeitos, sobrecarregando a curva.",
      "❌ Esquecer de planejar onde o objeto anterior terminou antes de criar o próximo.",
      "❌ Não aplicar folga de transpasse (overlap) entre o fundo e o contorno."
    ],
    "voceSabia": "Digitalizadores experientes gastam 40% do tempo apenas planejando a sequência mental antes de dar o primeiro clique no software!",
    "curiosidadeTecnica": "Na digitalização manual, menos nós de vetor produzem curvas mais suaves e pontos mais uniformes do que curvas cheias de nós acumulados.",
    "dicaArtrelados": "Digitalizar manualmente não significa fazer tudo difícil: significa saber exatamente por que você está fazendo cada escolha! O objetivo não é clicar mais, é decidir melhor!",
    "applications": [
      "Matrizes para alta costura, uniformes executivos, enxovais personalizados e marcas de moda."
    ],
    "troubleshootingTips": [
      "Ao criar colunas Satin em curvas, mantenha as guias de ângulo sempre perpendiculares às bordas da coluna para evitar distorções."
    ],
    "relatedTerms": [
      "Digitalização Automática",
      "Ponto de Entrada",
      "Ponto de Saída",
      "Ponto Satin",
      "Underlay"
    ],
    "tags": [
      "d-026",
      "digitalizacao manual",
      "tecnica",
      "decisoes",
      "precisao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis manualis (programação manual) e techne (arte, ofício prático) e decisio (determinação clara após ponderação, de decidere).",
    "beginnerExplanation": "É a tomada de decisões conscientes do programador experiente: escolher se uma pétala deve ser bordada antes ou depois do caule, qual ângulo de ponto vai valorizar a luz e qual costura de base vai segurar o tecido sem repuxar.",
    "practicalExercise": "Pegue um desenho de um pássaro: planeje no papel a ordem exata das camadas (1º o bico de fundo, 2º o corpo, 3º as asas sobrepostas, 4º os olhos e contornos finais). Depois digitalize no software seguindo rigorosamente essa ordem: veja como o pássaro ganha vida e volume perfeito no tecido!",
    "quickSummary": "Digitalização manual técnica e decisória é o processo deliberado de engenharia de pontos onde cada escolha atende a critérios estéticos e físicos precisos.",
    "bibliographicReferences": [
      "GARCIA, E. Decision Making in Advanced Embroidery Digitizing. Barcelona, 2022.",
      "TAJIMA. Pulse DGML Advanced Master Series. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. A Arte da Decisão: Sequenciamento e Estruturação de Matrizes. São Paulo, 2024."
    ]
  },
  {
    "id": "d-027-digitalizacao-por-objetos",
    "code": "D-027",
    "term": "Digitalização por Objetos",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e locução prepositiva.",
    "category": "Programação de Bordado",
    "summary": "Método de construção que divide o desenho em elementos individuais e independentes com configurações próprias.",
    "definition": "A digitalização por objetos é a metodologia moderna de criação de matrizes na qual o desenho é decomposto em elementos vetoriais individuais e autônomos (como pétala, folha, caule, letra, fundo). Em vez de enxergar a imagem como um bloco único, o digitalizador cria cada parte como um 'objeto' inteligente com suas próprias propriedades de ponto, direção, densidade e underlay.",
    "technicalDetails": "Adotada pelos principais softwares modernos baseados em objetos (Wilcom EMB, Hatch, Brother PE-Design, Bernina). Permite redimensionar, alterar tipo de ponto e mudar propriedades a qualquer momento sem perder a integridade geométrica.",
    "construction": [
      "Objeto vetorial fechado (área de preenchimento)",
      "Objeto vetorial aberto (linha de contorno / ponto corrido)",
      "Objeto de coluna (largura variável em satin)",
      "Lista sequencial de objetos (Object List)"
    ],
    "howItWorks": [
      "1. O desenho é dividido mentalmente em suas partes constituintes.",
      "2. Cada parte é traçada como um objeto independente no software.",
      "3. Cada objeto recebe parâmetros específicos adequados à sua função.",
      "4. Os objetos são ordenados na lista de sequência para criar o fluxo de costura."
    ],
    "mainTypes": [
      "Objetos de Preenchimento (Tatami, Padrões)",
      "Objetos de Coluna (Ponto Cheio com ângulo dinâmico)",
      "Objetos de Linha (Ponto Corrido simples, triplo ou decorativo)",
      "Objetos de Apliquê Automatizado"
    ],
    "advantages": [
      "✔ Flexibilidade total para editar qualquer parte do desenho a qualquer momento",
      "✔ Redimensionamento perfeito com recálculo automático de densidade",
      "✔ Facilidade para reordenar a sequência de costura arrastando objetos na lista"
    ],
    "limitations": [
      "Exige que o arquivo seja salvo no formato proprietário original do software (ex: .EMB) para manter as propriedades de objeto editáveis."
    ],
    "commonErrors": [
      "❌ Criar uma única área enorme tentando reproduzir vários elementos diferentes juntos.",
      "❌ Salvar a matriz apenas em formato de máquina (.DST/.PES) e perder os dados vetoriais dos objetos.",
      "❌ Esquecer de ajustar a sobreposição entre objetos que se encostam."
    ],
    "voceSabia": "Quando você exporta uma matriz para formato de máquina (.DST ou .PES), todos os objetos vetoriais são 'achatados' em coordenadas brutas de pontos, dificultando edições complexas posteriores!",
    "curiosidadeTecnica": "Trabalhar por objetos permite que o software recalcule automaticamente a quantidade de pontos quando a matriz é ampliada ou reduzida em até 20%.",
    "dicaArtrelados": "Quando olhar para uma imagem, tente 'quebrá-la' mentalmente em pequenas peças! Pergunte: 'Quais objetos individuais eu consigo identificar aqui?' Essa habilidade é a base de todo o raciocínio da digitalização!",
    "applications": [
      "Construção modular de todas as matrizes modernas em softwares profissionais."
    ],
    "troubleshootingTips": [
      "Sempre guarde uma cópia mestra no formato de objeto (.EMB, .JAN, .ART) antes de gerar o arquivo final de máquina."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Sequência de Pontos",
      "Sobreposição",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-027",
      "digitalizacao por objetos",
      "vetorial",
      "emb",
      "modulos",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis (digital) e objectum (aquilo que está diante dos olhos, elemento delimitado, de objicere). Paradigma central da computação gráfica moderna orientada a objetos vetoriais.",
    "beginnerExplanation": "Digitalização por objetos significa que você constrói o desenho dividindo-o em 'peças de Lego' inteligentes (cada folha é um objeto, cada letra é outro objeto). Assim, se você quiser mudar o tamanho ou o tipo de ponto depois, o software recalcula tudo automaticamente sem estragar a matriz!",
    "practicalExercise": "No seu software, selecione uma folha desenhada como objeto vetorial de ponto cheio (Satin): mude o tamanho dela aumentando em 50%. Observe como o software aumentou a quantidade de pontos automaticamente mantendo a mesma densidade perfeita, graças à digitalização por objetos!",
    "quickSummary": "Digitalização por objetos é a modelagem de matrizes através de elementos vetoriais paramétricos que preservam propriedades editáveis de pontos e formas.",
    "bibliographicReferences": [
      "WILCOM. Object-Based Embroidery Design Architecture. Sydney: Wilcom, 2022.",
      "EMBIRD. Working with Vector Objects and Properties in Digitizing. Bratislava, 2023.",
      "ARTRELADOS. O Poder dos Objetos Vetoriais na Criação e Redimensionamento. São Paulo, 2024."
    ]
  },
  {
    "id": "d-028-ponto-de-entrada",
    "code": "D-028",
    "term": "Ponto de Entrada (Entry Point)",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Programação de Bordado",
    "summary": "Coordenada exata onde a agulha inicia a costura de um determinado objeto na matriz.",
    "definition": "O ponto de entrada (conhecido internacionalmente como Entry Point) é a posição geométrica exata onde a máquina de bordar inicia a execução dos pontos de um objeto específico. É a 'porta de entrada' pela qual a linha chega ao elemento para iniciar sua construção estrutural e preenchimento.",
    "technicalDetails": "Simbolizado nos softwares por um marcador verde (geralmente uma cruz ou quadrado verde). O ponto de entrada deve ser planejado em conjunto com o ponto de saída do objeto anterior para minimizar o salto de linha e evitar cruzamentos.",
    "construction": [
      "Marcador de entrada (Entry Node)",
      "Ponto de ancoragem inicial (Tie-in / Arremate)",
      "Ligação com o ponto de saída anterior",
      "Início do subponto (underlay)"
    ],
    "howItWorks": [
      "1. A máquina move o bastidor até as coordenadas do ponto de entrada.",
      "2. Executa os micropontos de trava (Tie-in) se for o início de uma nova cor ou após corte.",
      "3. Inicia o traçado do underlay a partir desse local.",
      "4. Segue costurando a forma até o ponto de saída."
    ],
    "mainTypes": [
      "Ponto de Entrada Manualmente Posicionado (Otimizado pelo digitalizador)",
      "Ponto de Entrada Automático (Calculado pelo software)",
      "Ponto de Entrada Oculto (Posicionado sob outro objeto que cobrirá a emenda)"
    ],
    "advantages": [
      "✔ Reduz distâncias de salto e agiliza a execução do bordado",
      "✔ Evita linhas esticadas visíveis sobre o tecido",
      "✔ Facilita conexões contínuas e limpas entre letras e monogramas"
    ],
    "limitations": [
      "Um ponto de entrada mal posicionado obriga o underlay a cruzar o objeto de forma desordenada."
    ],
    "commonErrors": [
      "❌ Deixar o ponto de entrada na extremidade oposta ao término do objeto anterior.",
      "❌ Posicionar o ponto de entrada em áreas de pontas finas de letras onde o arremate pode criar bolinhas aparentes.",
      "❌ Não conferir os pontos de entrada após reordenar a sequência de objetos."
    ],
    "voceSabia": "Em letras cursivas, posicionar o ponto de entrada exatamente onde a letra anterior tocou permite bordar uma palavra inteira sem nenhum corte de linha e com visual contínuo!",
    "curiosidadeTecnica": "Quando o ponto de entrada e de saída de um preenchimento Tatami estão no mesmo lado do objeto, a máquina é forçada a fazer uma viagem interna de retorno com pontos corridos.",
    "dicaArtrelados": "Antes de escolher o ponto de entrada de um objeto, pense no objeto que será bordado imediatamente antes dele! A melhor entrada é sempre aquela que facilita a conexão com o elemento anterior com o menor trajeto possível.",
    "applications": [
      "Programação de textos, monogramas, preenchimentos complexos e sequenciamento de matrizes."
    ],
    "troubleshootingTips": [
      "Se houver uma linha de salto cruzando sobre o desenho, arraste o ponto de entrada para mais perto da saída do objeto anterior."
    ],
    "relatedTerms": [
      "Ponto de Saída",
      "Sequência de Pontos",
      "Direção de Costura",
      "Ponto de Salto"
    ],
    "tags": [
      "d-028",
      "ponto de entrada",
      "entry point",
      "sequencia",
      "caminho",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim punctum (ponto) e intrare (entrar, penetrar em um espaço). Conceito de controle de fluxo de costura nascido na automação têxtil.",
    "beginnerExplanation": "Ponto de entrada é o local exato onde a máquina dá o primeiro ponto para começar a costurar um objeto. Posicionar a entrada pertinho de onde o objeto anterior terminou evita que a máquina precise cortar a linha ou dar um pulo comprido.",
    "practicalExercise": "Selecione uma letra 'C' no seu software de bordado: use a ferramenta de nós/edição para mover o ponto de entrada (geralmente um triângulo verde ou cruz verde) da ponta de cima para a ponta de baixo da letra. Veja como a simulação muda o caminho da agulha instantaneamente.",
    "quickSummary": "Ponto de entrada é a coordenada inicial onde a máquina inicia a formação de pontos de determinado objeto da matriz.",
    "bibliographicReferences": [
      "WILCOM. Entry and Exit Point Optimization for Continuous Stitching. Sydney, 2023.",
      "KRAUSZ, P. Machine Embroidery Efficiency & Jump Reduction. New York, 2021.",
      "ARTRELADOS. Controle de Entradas e Saídas para Matrizes de Alta Produtividade. São Paulo, 2024."
    ]
  },
  {
    "id": "d-029-ponto-de-saida",
    "code": "D-029",
    "term": "Ponto de Saída (Exit Point)",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Programação de Bordado",
    "summary": "Coordenada final onde a máquina conclui a costura de um objeto antes de seguir para a próxima etapa.",
    "definition": "O ponto de saída (conhecido internacionalmente como Exit Point) é o local onde a máquina de bordar conclui a sequência de pontos de um objeto ou segmento da matriz antes de se deslocar para o próximo elemento. Ele determina para onde a agulha irá após terminar a costura atual, influenciando diretamente a distância do salto, a necessidade de cortes e a fluidez de todo o bordado.",
    "technicalDetails": "Simbolizado nos softwares de bordado por um marcador vermelho (geralmente uma cruz ou losango vermelho). Deve ser planejado em estreita consonância com o ponto de entrada do próximo objeto para garantir caminhos curtos e seguros.",
    "construction": [
      "Marcador de saída (Exit Node)",
      "Micropontos de travamento final (Tie-off / Arremate)",
      "Comando de corte de linha (se configurado)",
      "Vetor de deslocamento até o próximo objeto"
    ],
    "howItWorks": [
      "1. A máquina conclui o preenchimento de topo do objeto.",
      "2. Alcança a coordenada exata do ponto de saída.",
      "3. Executa o arremate de segurança (Tie-off) para que a linha não desfie.",
      "4. Corta a linha ou realiza um salto limpo em direção ao próximo ponto de entrada."
    ],
    "mainTypes": [
      "Ponto de Saída Estratégico (Alinhado ao próximo início)",
      "Ponto de Saída com Corte Automático Programado",
      "Ponto de Saída com Ponto de Viagem Embutido"
    ],
    "advantages": [
      "✔ Reduz drasticamente o número de cortes de linha e o tempo total de produção",
      "✔ Elimina fios soltos no avesso e na frente da peça",
      "✔ Assegura que o nó de travamento final fique protegido e oculto"
    ],
    "limitations": [
      "O ponto de saída não pode ser escolhido em qualquer lugar arbitrário: ele depende do sentido de avanço dos pontos e do ângulo programado."
    ],
    "commonErrors": [
      "❌ Colocar a saída em local distante sem planejar o próximo objeto.",
      "❌ Confundir ponto de saída com comando de corte (a saída encerra o objeto, o corte é um comando mecânico adicional).",
      "❌ Ignorar o ponto de saída em letras e criar saltos que cruzam sobre as letras vizinhas."
    ],
    "voceSabia": "Em matrizes bem planejadas, o ponto de saída de uma pétala e o ponto de entrada da pétala seguinte ficam a menos de 1mm de distância, permitindo saltos invisíveis sem corte!",
    "curiosidadeTecnica": "O ponto de saída é a última coordenada do objeto antes do acionamento do solenoide da navalha cortadora de linha.",
    "dicaArtrelados": "O ponto de saída deve ser escolhido pensando no próximo passo da máquina! Não pense apenas: 'Onde termina este objeto?'. Pense: 'Onde termina este objeto e para onde a máquina precisa ir depois?' Essa mudança de visão transforma desenho em engenharia!",
    "applications": [
      "Otimização de trajetórias, redução de cortes, monogramas e produção industrial em alta velocidade."
    ],
    "troubleshootingTips": [
      "Se a máquina estiver dando corte a cada letra de um nome, posicione a saída de cada letra no ponto de conexão da próxima e desative o corte manual."
    ],
    "relatedTerms": [
      "Ponto de Entrada",
      "Ponto de Salto",
      "Corte de Linha",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-029",
      "ponto de saida",
      "exit point",
      "arremate",
      "corte",
      "otimizacao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim punctum (ponto) e exire (sair, partir de um local).",
    "beginnerExplanation": "Ponto de saída é o local exato onde a máquina dá o último pontinho de um objeto antes de passar para o próximo. Colocar a saída de um objeto do ladinho da entrada do próximo é o grande segredo para um avesso limpinho sem fiapos soltos!",
    "practicalExercise": "Digitalize duas folhas vizinhas de uma flor: posicione a saída da primeira folha exatamente no mesmo nó onde começa a entrada da segunda folha. Borde na máquina e veja que não haverá nenhum corte de linha e nenhum fiapo no avesso entre as duas folhas!",
    "quickSummary": "Ponto de saída é a coordenada final onde a máquina conclui a costura de um objeto, estratégica para encadeamentos suaves de linha.",
    "bibliographicReferences": [
      "TAJIMA. Minimizing Trims Through Exit Point Placement. Nagoya, 2022.",
      "BARUDAN. Continuous Embroidery Sequences and Trimming Logic. Tokyo, 2021.",
      "ARTRELADOS. O Segredo do Avesso Perfeito: Alinhamento de Entradas e Saídas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-030-digitalizacao-de-logotipo",
    "code": "D-030",
    "term": "Digitalização de Logotipo",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Processo técnico de adaptação e transformação de identidades visuais de marcas em matrizes de alta precisão.",
    "definition": "A digitalização de logotipo é o processo técnico e de design responsável por transformar a representação gráfica de uma marca, símbolo ou identidade corporativa em uma matriz de bordado eletrônico de alta qualidade. Esse processo não consiste em simplesmente converter um arquivo de imagem (PNG ou JPG): exige interpretar a arte, simplificar detalhes minúsculos e reconstruí-la na linguagem física de pontos, fios e tecidos.",
    "technicalDetails": "Envolve adequação à escala (versões para peito de 8cm a 10cm vs costas de 25cm a 30cm), seleção de pontos para textos pequenos (mínimo de 4.5mm para Satin com linha 40 ou uso de linha fina 60), calibração de compensação de repuxo e compatibilização da paleta de cores da marca com os códigos de cones de poliéster.",
    "construction": [
      "Análise e vetorização limpa do logo",
      "Adaptação de pequenos textos e slogans",
      "Definição da ordem de sobreposição das cores",
      "Criação de transpasses de segurança (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador recebe o manual de marca ou vetor do cliente.",
      "2. Avalia a escala de aplicação (camisa polo, boné, jaleco, jaqueta).",
      "3. Simplifica detalhes que desapareceriam na escala de bordado.",
      "4. Aplica pontos Tatami em fundos e Ponto Cheio nas letras e contornos.",
      "5. Realiza o teste prático no tecido definitivo do uniforme."
    ],
    "mainTypes": [
      "Logotipo para Peito / Camisa Polo (8cm a 10cm - foco em legibilidade)",
      "Logotipo para Costas / Jaqueta (20cm a 28cm - foco em leveza e baixo peso)",
      "Logotipo para Boné Estruturado (Costura do centro para as bordas)",
      "Logotipo em Relevo 3D / EVA (Para marcas esportivas e bonés premium)"
    ],
    "advantages": [
      "✔ Fidelidade rigorosa à identidade corporativa do cliente",
      "✔ Textos e contornos nítidos e perfeitamente legíveis mesmo de longe",
      "✔ Alta durabilidade em lavagens industriais frequentes de uniformes"
    ],
    "limitations": [
      "Logotipos com degradês complexos ou textos com menos de 3.5mm exigem adaptação ou simplificação para viabilidade em bordado."
    ],
    "commonErrors": [
      "❌ Perguntar apenas 'qual é o programa que converte o logo automaticamente?'.",
      "❌ Tentar reproduzir letras minúsculas sem engrossar as hastes ou simplificar o traço.",
      "❌ Usar a mesma matriz de peito de camisa para bordar em bonés ou toalhas."
    ],
    "voceSabia": "Um mesmo logotipo de empresa frequentemente precisa de 3 ou 4 versões diferentes de matriz: uma para camiseta de malha, uma para camisa social de tricoline, uma para boné e outra para jaqueta grossa!",
    "curiosidadeTecnica": "Em logotipos com círculos perfeitos, a compensação de repuxo adiciona cerca de 0.4mm no eixo de tração para que o círculo não vire um formato oval após o bordado sair do bastidor.",
    "dicaArtrelados": "Especial para quem atende clientes: nunca pergunte apenas 'qual é o arquivo do logotipo?'. Pergunte sempre: 'onde, em qual tamanho e em qual tecido esse logotipo será bordado?' Essas três respostas mudam completamente a estrutura da matriz!",
    "applications": [
      "Uniformes empresariais, jalecos médicos, camisas polo, bonés corporativos e brindes promocionais."
    ],
    "troubleshootingTips": [
      "Para bordar slogans com letras de 4mm a 5mm, utilize agulha 65/9 e linha de bordado fina Título 60 com ponto corrido duplo ou satin leve."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Desenho Vetorial",
      "Compensação de Puxão",
      "Ponto Satin"
    ],
    "tags": [
      "d-030",
      "digitalizacao de logotipo",
      "uniformes",
      "marcas",
      "identidade visual",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do grego logos (palavra, conceito) e typos (marca, figura gravada), e do latim digitalis. Ramo comercial mais lucrativo e técnico do bordado industrial contemporâneo.",
    "beginnerExplanation": "É a criação de matrizes para marcas e empresas (em camisas polo, bonés, jalecos e uniformes). Exige muito capricho porque as letras precisam ficar retinhas, legíveis e com as cores fiéis à marca do cliente.",
    "practicalExercise": "Pegue um logotipo corporativo que contenha um símbolo grande e um texto pequeno embaixo: digitalize o símbolo primeiro e depois as letras, garantindo que letras com menos de 5mm usem ponto cheio com compensação de repuxo (pull compensation) calibrada em 0.35mm. Borde em uma camisa polo piquê com entretela de malha!",
    "quickSummary": "Digitalização de logotipo é a programação técnica de identidades visuais corporativas, exigindo alta precisão dimensional e máxima legibilidade tipográfica.",
    "bibliographicReferences": [
      "NNEP. Commercial Logo Embroidery: Quality Standards & Lettering. Canton, 2022.",
      "BLANCO, R. Ponchado de Logotipos Corporativos y Marcas. Madri: Ediciones Técnicas, 2021.",
      "ARTRELADOS. Como Bordar Logotipos Perfeitos em Uniformes e Piquê. São Paulo, 2024."
    ]
  },
  {
    "id": "d-031-desenho-vetorial",
    "code": "D-031",
    "term": "Desenho Vetorial",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Design & Criação",
    "summary": "Representação gráfica baseada em fórmulas matemáticas e curvas que permite ampliação sem perda de definição.",
    "definition": "Um desenho vetorial é uma representação gráfica construída por meio de elementos matemáticos como linhas, curvas de Bézier, polígonos e pontos de controle (nós), em vez de ser formado por uma grade fixa de pixels. Isso permite que a imagem seja redimensionada para qualquer tamanho sem perder a nitidez e sem apresentar o efeito serrilhado típico de imagens rasterizadas (JPG/PNG). No bordado, serve como a base gráfica ideal para a digitalização.",
    "technicalDetails": "Formatos vetoriais padrão incluem SVG, AI, EPS, CDR e PDF vetorial. Ao contrário de uma imagem rasterizada que possui resolução fixa em DPI, o vetor possui definição geométrica infinita, facilitando o traçado exato dos objetos de bordado.",
    "construction": [
      "Pontos de ancoragem e nós de controle",
      "Curvas matemáticas de Bézier",
      "Linhas de contorno e preenchimentos vetoriais",
      "Camadas de objetos agrupados"
    ],
    "howItWorks": [
      "1. O designer cria ou recebe a arte em formato vetorial.",
      "2. As curvas são manipuladas e simplificadas para eliminar nós excessivos.",
      "3. O software de bordado importa o vetor e utiliza seus nós como guias diretas para gerar pontos."
    ],
    "mainTypes": [
      "Vetor SVG (Formato aberto universal)",
      "Vetor AI / EPS (Adobe Illustrator)",
      "Vetor CDR (CorelDRAW - amplamente integrado com softwares de bordado)"
    ],
    "advantages": [
      "✔ Contornos ultra nítidos e formas perfeitamente definidas",
      "✔ Permite redimensionar a arte livremente antes de gerar a matriz",
      "✔ Facilita a separação automática ou manual de cores e objetos"
    ],
    "limitations": [
      "Um arquivo vetorial NÃO é uma matriz de bordado: ele define apenas a forma visual, não contendo informações de pontos, direções, underlay ou cortes."
    ],
    "commonErrors": [
      "❌ Achar que salvar um arquivo como .SVG já permite colocá-lo no pendrive da máquina de bordar.",
      "❌ Ampliar o vetor em 300% e achar que a matriz de pontos gerada no tamanho original continuará funcionando sem ajustes.",
      "❌ Não simplificar nós desnecessários antes de importar no software de bordado."
    ],
    "voceSabia": "O CorelDRAW é o motor gráfico por trás do software Wilcom EmbroideryStudio: você desenha em vetor de um lado e o programa gera os pontos de bordado em tempo real do outro!",
    "curiosidadeTecnica": "A sequência recomendada para iniciantes é: 1. Imagem (Ideia visual) → 2. Vetor (Organização geométrica de formas) → 3. Matriz (Tradução física em pontos de linha).",
    "dicaArtrelados": "O vetor é o desenho organizado; a matriz é o desenho traduzido para a linguagem da máquina! E guarde a regra de ouro: Não tente fazer a máquina bordar tudo o que seus olhos conseguem ver no vetor. Escolha o que realmente precisa e consegue aparecer com qualidade no tecido!",
    "applications": [
      "Base essencial para digitalização de logotipos, brasões, mascotes e tipografias."
    ],
    "troubleshootingTips": [
      "Se o software de bordado travar ao importar um vetor, use a ferramenta de 'Simplificar Curvas' no Corel ou Illustrator para reduzir a quantidade de nós."
    ],
    "relatedTerms": [
      "Vetorização",
      "Desenho de Bordado",
      "Digitalização de Bordado",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-031",
      "desenho vetorial",
      "svg",
      "cdr",
      "ai",
      "curvas",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deexsignare (desenhar) e vector, -oris (aquele que transporta, condutor geométrico, de vehere, transportar). Arte gráfica baseada em fórmulas matemáticas e curvas de Bézier.",
    "beginnerExplanation": "Desenho vetorial é uma imagem feita por linhas e curvas matemáticas no computador (em formatos como SVG, CDR ou AI). Ao contrário de uma foto comum que fica cheia de quadradinhos (pixels) quando você amplia, o vetor nunca perde a qualidade nem a nitidez!",
    "practicalExercise": "Abra um arquivo em vetor no seu computador e aumente o zoom para 800%: repare como as linhas continuam perfeitamente lisinhas e afiadas. Agora faça o mesmo com uma foto JPG: veja como as bordas ficam embaçadas. Por isso o vetor é o melhor amigo do digitalizador de bordado!",
    "quickSummary": "Desenho vetorial é a representação gráfica composta por coordenadas matemáticas que permite ampliações infinitas sem perda de definição para o bordado.",
    "bibliographicReferences": [
      "ADOBE. Illustrator Vector Graphics Reference Manual. San Jose: Adobe Press, 2022.",
      "CORELDRAW. Working with Bézier Curves & Vector Shapes. Ottawa: Alludo, 2023.",
      "ARTRELADOS. Guia de Vetores Essenciais para Bordadeiras e Programadores. São Paulo, 2024."
    ]
  },
  {
    "id": "d-032-vetorizacao",
    "code": "D-032",
    "term": "Vetorização",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino.",
    "category": "Design & Criação",
    "summary": "Processo de converter imagens rasterizadas (pixels) em traçados vetoriais matemáticos para pré-produção.",
    "definition": "Vetorização é o processo de transformar uma imagem rasterizada (formada por pixels em arquivos como JPG, PNG ou fotos) em uma representação vetorial composta por linhas, curvas e pontos de controle. No universo do bordado computadorizado, a vetorização é a etapa preparatória essencial para limpar contornos borrados, corrigir imperfeições e delimitar as áreas que serão preenchidas por pontos.",
    "technicalDetails": "Pode ser realizada manualmente (desenhando sobre a imagem com a ferramenta caneta/bézier) ou de forma automática (rastreio de bitmap por contraste). A vetorização manual garante contornos suaves e sem o ruído típico de imagens comprimidas.",
    "construction": [
      "Traçado de nós de controle e tangentes",
      "Fechamento de polígonos de cor",
      "Ajuste de espessura mínima de traços (mínimo 0.8mm)",
      "Eliminação de fundos e artefatos de compressão"
    ],
    "howItWorks": [
      "1. A imagem bitmap é inserida como plano de fundo no software gráfico.",
      "2. O designer traça as linhas mestras do desenho com curvas suaves.",
      "3. As cores são consolidadas em paletas limpas e reduzidas.",
      "4. O vetor gerado é exportado diretamente para o ambiente de digitalização de bordado."
    ],
    "mainTypes": [
      "Vetorização Manual (Máxima precisão e limpeza de nós)",
      "Vetorização Automática / Rastreio Rápido (Quick Trace)",
      "Redesenho Técnico Adaptativo (Já aplicando compensações para bordado)"
    ],
    "advantages": [
      "✔ Transforma fotos ou logos borrados da internet em artes de alta definição",
      "✔ Permite separar cada camada de cor em objetos individuais",
      "✔ Agiliza e profissionaliza todo o processo posterior de geração de matrizes"
    ],
    "limitations": [
      "Vetorização NÃO é digitalização de bordado: o vetor organiza as formas gráficas, mas ainda requer a criação de pontos e parâmetros de costura."
    ],
    "commonErrors": [
      "❌ Confiar cegamente no rastreio automático de bitmaps de baixa qualidade, gerando centenas de nós serrilhados.",
      "❌ Vetorizar sem limpar ruídos da imagem original.",
      "❌ Manter microdetalhes que desaparecerão na escala física real do bordado."
    ],
    "voceSabia": "Muitos birôs de digitalização cobram uma taxa separada para vetorizar o logotipo do cliente antes de gerar a matriz, pois a qualidade final do bordado depende diretamente da precisão desse traçado!",
    "curiosidadeTecnica": "Uma curva vetorial bem desenhada no Illustrator ou Corel utiliza apenas 3 a 4 nós de controle para formar um círculo perfeito; um rastreio automático mal feito pode criar mais de 80 nós no mesmo círculo.",
    "dicaArtrelados": "Vetorizar é organizar o desenho antes de ensinar a máquina a bordá-lo! Quando você entende isso, percebe que uma boa vetorização economiza horas de trabalho na digitalização. Primeiro organize o desenho, depois pense nos pontos!",
    "applications": [
      "Recuperação de logotipos antigos de clientes, desenhos infantis, mascotes e brasões."
    ],
    "troubleshootingTips": [
      "Ao vetorizar manualmente, use o menor número possível de nós para que as curvas do bordado fiquem suaves e contínuas na máquina."
    ],
    "relatedTerms": [
      "Desenho Vetorial",
      "Digitalização de Logotipo",
      "Desenho Digitalizado",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-032",
      "vetorizacao",
      "rastreio",
      "desenho",
      "preparacao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim vector (condutor geométrico) com o sufixo de ação -izar (transformar em vetor). Processo clássico da computação gráfica aplicada.",
    "beginnerExplanation": "Vetorização é o processo de redesenhar por cima de uma imagem embaçada para transformá-la em linhas e curvas limpas no computador. É como colocar um papel vegetal por cima de uma foto antiga e passar a caneta com traços firmes e perfeitos.",
    "practicalExercise": "Pegue uma foto de baixa qualidade de uma flor recebida pelo WhatsApp: coloque-a no fundo do seu programa gráfico (ou módulo de desenho do Wilcom/Hatch) e use a ferramenta de curvas para redesenhar o contorno de cada pétala com linhas vetoriais limpas. Compare o resultado antes e depois!",
    "quickSummary": "Vetorização é a conversão de imagens rasterizadas (pixels) em trajetórias vetoriais nítidas e preparadas para a digitalização de matrizes.",
    "bibliographicReferences": [
      "LEE, C. Image Vectorization Techniques for Embroidery. Seoul: Design & Stitch, 2021.",
      "PUNDOLE, F. From Pixel to Vector: Artwork Preparation. Mumbai: Stitches Publishing, 2022.",
      "ARTRELADOS. Passo a Passo da Vetorização Rápida para o Ateliê. São Paulo, 2024."
    ]
  },
  {
    "id": "d-033-detalhamento-da-matriz",
    "code": "D-033",
    "term": "Detalhamento da Matriz",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal masculina.",
    "category": "Programação de Bordado",
    "summary": "Nível de informação, refinamento e quantidade de microelementos aplicados na construção de um bordado.",
    "definition": "O detalhamento da matriz corresponde ao nível de informação, precisão visual e quantidade de elementos minuciosos utilizados na construção de um desenho para bordado. Uma matriz pode variar desde um estilo minimalista até uma estrutura altamente complexa e realista. No entanto, no bordado computadorizado vigora a lei física dos materiais: mais detalhes não significam necessariamente um bordado melhor.",
    "technicalDetails": "O limite de detalhamento é determinado pela física da agulha (diâmetro de 0.70mm a 0.80mm), da espessura do fio (Título 40 = ~0.38mm) e da estrutura das tramas do tecido. Tentar colocar microdetalhes abaixo de 1mm causa acúmulo de linha e perda de legibilidade.",
    "construction": [
      "Hierarquia visual de elementos principais e secundários",
      "Filtro de microdetalhes e linhas finas",
      "Escala proporcional de aplicação",
      "Adequação ao relevo e textura do tecido"
    ],
    "howItWorks": [
      "1. O digitalizador analisa a complexidade da arte original.",
      "2. Identifica os elementos essenciais que garantem o reconhecimento do desenho.",
      "3. Elimina ou funde detalhes minúsculos que virariam borrões no tecido.",
      "4. Aplica pontos com precisão nas áreas de maior impacto visual."
    ],
    "mainTypes": [
      "Detalhamento Minimalista / Alto Contraste (Ideal para marcas e uniformes)",
      "Detalhamento Moderado (Padrão para ilustrações e desenhos infantis)",
      "Detalhamento Realista / Avançado (Para retratos, pelagens e arte sacra em grandes formatos)"
    ],
    "advantages": [
      "✔ Cria bordados nítidos, elegantes e de fácil reconhecimento visual",
      "✔ Mantém o bordado leve, confortável e flexível na peça de roupa",
      "✔ Otimiza o tempo de máquina e evita quebras repetitivas de agulha"
    ],
    "limitations": [
      "Bordados pequenos (abaixo de 5cm) exigem simplificação drástica do detalhamento para manter a legibilidade."
    ],
    "commonErrors": [
      "❌ Tentar reproduzir cada fio de cabelo ou ruga de uma foto em um bordado de bolso de 8cm.",
      "❌ Aumentar a densidade na tentativa de fazer microdetalhes aparecerem.",
      "❌ Ignorar que tecidos felpudos (toalhas) engolem e escondem pequenos detalhes."
    ],
    "voceSabia": "A técnica de simplificação inteligente é a maior virtude de um grande digitalizador: saber o que NÃO bordar é tão importante quanto saber o que bordar!",
    "curiosidadeTecnica": "Em desenhos com muitos detalhes, mudar para agulha fina 65/9 e linha de bordado Título 60 (mais fina que a convencional) permite aumentar o detalhamento em cerca de 25%.",
    "dicaArtrelados": "No bordado, simplificar não significa empobrecer! Às vezes, simplificar e limpar o desenho é justamente o segredo que permite que o bordado fique incrivelmente elegante, nítido e profissional.",
    "applications": [
      "Adaptação de fotografias para bordado, escudos complexos, caricaturas e brasões."
    ],
    "troubleshootingTips": [
      "Se os detalhes de um rosto bordado ficarem irreconhecíveis, elimine as sombras intermediárias e mantenha apenas os traços de contorno principais."
    ],
    "relatedTerms": [
      "Definição do Bordado",
      "Digitalização de Logotipo",
      "Densidade de Pontos",
      "Comprimento do Ponto"
    ],
    "tags": [
      "d-033",
      "detalhamento",
      "simplificacao",
      "escala",
      "nitidez",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do francês détailler (cortar em pedaços miúdos, examinar minuciosamente, de dé- + tailler, cortar) e do latim matrix (molde gerador).",
    "beginnerExplanation": "Detalhamento da matriz é o ajuste fino de cada minúsculo detalhe do bordado: acertar os olhos de um personagem, criar fios de cabelo finos, fazer brilhos nas folhas e garantir que tudo fique nítido sem criar uma montanha grossa de linha.",
    "practicalExercise": "Borde o rostinho de um ursinho de pelúcia: para o focinho e olhos, use uma agulha mais fina (65/9 ou 70/10) e linha título 60 para os microdetalhes pretos. Veja como os detalhes ganham uma nitidez impressionante que encanta os clientes de enxoval!",
    "quickSummary": "Detalhamento da matriz é o refinamento técnico e artístico dos microelementos do bordado para garantir nitidez, expressividade e acabamento superior.",
    "bibliographicReferences": [
      "NICOLAS, C. Micro-Detailing and High-Definition Machine Embroidery. Paris, 2022.",
      "MADEIRA. Specialty Threads (40wt vs 60wt) for Fine Lettering and Details. Freiburg, 2023.",
      "ARTRELADOS. Segredos do Detalhamento e Linhas Finas no Bordado Infantil. São Paulo, 2024."
    ]
  },
  {
    "id": "d-034-direcao-de-preenchimento",
    "code": "D-034",
    "term": "Direção de Preenchimento",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Orientação angular predominante em que os pontos são distribuídos para cobrir áreas sólidas da matriz.",
    "definition": "A direção de preenchimento é a orientação angular predominante na qual as passagens de pontos são distribuídas dentro de uma área sólida ou fechada da matriz de bordado (como em blocos de Ponto Tatami ou preenchimentos complexos). Essa escolha define para que lado as linhas seguirão (horizontal, vertical, diagonal ou curvilínea), alterando drasticamente o reflexo de luz, a textura, a rigidez e as forças de repuxamento sobre o tecido.",
    "technicalDetails": "Configurada em graus no software. Em grandes áreas de preenchimento, ângulos diagonais a 45° ou 135° são preferidos porque distribuem as forças de tração igualmente entre os fios de urdume e trama do tecido plano.",
    "construction": [
      "Linha de ângulo de preenchimento",
      "Camada de underlay posicionada a 90° de suporte",
      "Deslocamento alternado de passagens",
      "Compensação de encolhimento paralela ao ângulo"
    ],
    "howItWorks": [
      "1. O programador define o ângulo de inclinação dentro do polígono vetorial.",
      "2. O software traça as passagens de agulha paralelas a esse eixo.",
      "3. A linha de poliéster reflete a iluminação ambiente conforme a orientação das fibras.",
      "4. Dois objetos vizinhos com direções opostas criam contraste nítido de planos."
    ],
    "mainTypes": [
      "Preenchimento Diagonal (45° / 135° - Padrão universal mais estável)",
      "Preenchimento Horizontal (0° / 180°)",
      "Preenchimento Vertical (90° / 270°)",
      "Preenchimento com Direções Cruzadas (Para criar efeito de xadrez ou textura de tecido)"
    ],
    "advantages": [
      "✔ Cria contrastes visuais ricos e separação de planos com a mesma cor de linha",
      "✔ Evita deformações excessivas ao equilibrar a tração no tecido",
      "✔ Proporciona acabamento liso e homogêneo com brilho sedoso"
    ],
    "limitations": [
      "Preenchimentos extensos com pontos no mesmo sentido das tramas do tecido podem afundar e perder cobertura."
    ],
    "commonErrors": [
      "❌ Utilizar exatamente a mesma direção em todos os preenchimentos da matriz, deixando o desenho sem dinamismo.",
      "❌ Escolher a direção sem observar o sentido da forma orgânica (ex: bordar uma folha na transversal pura).",
      "❌ Alinhar o preenchimento na horizontal exata sobre malhas muito elásticas."
    ],
    "voceSabia": "Você pode bordar uma bandeira xadrez usando apenas UMA única cor de linha branca: basta programar os quadrados alternando a direção de preenchimento entre 45° e 135°!",
    "curiosidadeTecnica": "Direção de preenchimento é a orientação dos pontos de cobertura; o underlay de base deve ser sempre programado em ângulo cruzado (perpendicular ou a 60°) para criar uma grade estrutural que trava o tecido.",
    "dicaArtrelados": "Não pense na direção do ponto apenas como uma simples seta: pense nela como o 'sentido' da linha dentro do desenho! Quando você aprende a enxergar e direcionar a linha, suas matrizes ganham vida e volume!",
    "applications": [
      "Fundos de brasões, preenchimento de personagens, folhas, pétalas e áreas geométricas."
    ],
    "troubleshootingTips": [
      "Se uma área grande de preenchimento estiver repuxando o tecido para dentro, mude a direção de 0° para 45° e aumente a compensação de repuxo para 0.35mm."
    ],
    "relatedTerms": [
      "Direção do Ponto",
      "Ponto de Preenchimento",
      "Densidade de Pontos",
      "Underlay"
    ],
    "tags": [
      "d-034",
      "direcao de preenchimento",
      "tatami",
      "angulos",
      "textura",
      "brilho",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim directio (direção) e do latim vulgar implere (encher, completar um espaço vazio).",
    "beginnerExplanation": "Direção de preenchimento é o ângulo em que os pontos correm dentro de uma área grande (como um círculo, um coração ou uma letra grande). Mudar esse ângulo ajuda a evitar que o tecido encolha e dá vida e movimento ao desenho.",
    "practicalExercise": "Em um coração dividido ao meio por uma linha central, preencha o lado esquerdo com pontos a 45° e o lado direito com pontos a 135°. Borde em tecido vermelho: veja como o coração parece ter duas metades tridimensionais que se encontram no meio pelo jogo de luz!",
    "quickSummary": "Direção de preenchimento é a inclinação angular aplicada aos pontos de cobertura de grandes áreas para otimizar estabilidade e reflexão de luz.",
    "bibliographicReferences": [
      "WILCOM. Fill Stitch Directions and Fabric Stress Management. Sydney, 2022.",
      "KRAUSZ, P. Fill Stitch Engineering and Directional Aesthetics. New York, 2021.",
      "ARTRELADOS. Ângulos de Preenchimento: Equilíbrio Têxtil e Estética Visual. São Paulo, 2024."
    ]
  },
  {
    "id": "d-035-distancia-de-salto",
    "code": "D-035",
    "term": "Distância de Salto (Jump Distance)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Espaço percorrido pelo bastidor entre dois pontos sem formação de costura naquele trecho.",
    "definition": "A distância de salto (Jump Distance) é o espaço percorrido pela máquina entre dois pontos ou regiões do bordado durante um movimento de salto, sem realizar costura contínua naquele trecho. De maneira simples: é a distância que a agulha precisa 'atravessar' quando sai de onde terminou um objeto e vai até onde começará o próximo.",
    "technicalDetails": "Nos softwares e máquinas, existe um parâmetro limite de corte automático (geralmente calibrado entre 2.0mm e 5.0mm). Saltos menores que esse valor são realizados em movimento contínuo (deixando fio esticado para limpeza); saltos maiores acionam o comando mecânico de arremate e corte de linha.",
    "construction": [
      "Vetor de deslocamento livre do pantógrafo",
      "Ponto de partida (saída do objeto anterior)",
      "Ponto de chegada (entrada do próximo objeto)",
      "Comutação entre salto livre e corte automático"
    ],
    "howItWorks": [
      "1. A máquina conclui um objeto no ponto de saída.",
      "2. Avalia se a distância até o próximo objeto ultrapassa o limite de corte configurado.",
      "3. Se for menor: a agulha sobe e o bastidor se desloca diretamente deixando o fio esticado.",
      "4. Se for maior: a máquina aciona o cortador, arremata e desloca-se com a linha cortada."
    ],
    "mainTypes": [
      "Salto Curto com Conexão (1mm a 3mm - Não exige corte)",
      "Salto Longo com Corte Automático (Acima de 4mm a 7mm)",
      "Salto Oculto / Ponto de Viagem (Caminho costurado por baixo de outros objetos)"
    ],
    "advantages": [
      "✔ Saltos curtos bem planejados eliminam cortes desnecessários e aceleram a produção",
      "✔ Otimiza o movimento cinemático do pantógrafo",
      "✔ Evita o desgaste prematuro da navalha de corte da máquina"
    ],
    "limitations": [
      "Saltos longos deixados sem corte sobre tecidos claros geram fios visíveis que podem ser repuxados durante o uso se não forem aparados."
    ],
    "commonErrors": [
      "❌ Confundir distância de salto com distância entre pontos normais de costura.",
      "❌ Tentar eliminar absolutamente todos os saltos ou colocar corte em qualquer distância de 2mm.",
      "❌ Ignorar saltos longos que cruzam áreas abertas do bordado."
    ],
    "voceSabia": "Cada comando de corte automático de linha em uma máquina industrial leva de 2 a 4 segundos: em uma matriz com 50 cortes desnecessários, você perde mais de 3 minutos por peça apenas cortando linha!",
    "curiosidadeTecnica": "Ao simular a matriz no software, ative a visualização de 'Linhas de Conexão' (Connectors / Jump Lines) para enxergar todos os saltos em linhas pontilhadas vermelhas ou pretas.",
    "dicaArtrelados": "Um bom bordado não depende apenas dos pontos que aparecem no tecido, mas também dos caminhos que a máquina percorre entre eles! Procure saltos longos na simulação como quem procura estradas desnecessárias em um mapa: se puder encurtar a rota, seu bordado ficará mais limpo e muito mais rápido!",
    "applications": [
      "Otimização de sequências de letras, separação de brasões, monogramas e produção em série."
    ],
    "troubleshootingTips": [
      "Se as letras estiverem conectadas por fios feios que você precisa cortar na tesourinha, reduza o valor do 'Comprimento de Salto para Corte' no software para 2.0mm."
    ],
    "relatedTerms": [
      "Ponto de Entrada",
      "Ponto de Saída",
      "Corte de Linha",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-035",
      "distancia de salto",
      "jump distance",
      "corte",
      "otimizacao",
      "pantografo",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distantia (afastamento) e do germânico salti (salto, pulo mecânico sem perfuração de agulha). Comando mecânico primário dos formatos industriais de bordado.",
    "beginnerExplanation": "Distância de salto é a distância que o bastidor percorre de um ponto a outro sem a agulha costurar (quando a máquina pula de uma letra para a próxima). Se o pulo for maior que a distância configurada, a máquina aciona o cortador de linha automático.",
    "practicalExercise": "No painel da sua máquina ou no software, verifique o ajuste de corte por salto (geralmente regulado em 2.0mm a 5.0mm). Borde uma frase com letras cursivas: veja como nos saltos pequenos ela passa direto e nos saltos maiores ela corta a linha automaticamente.",
    "quickSummary": "Distância de salto é o deslocamento do bastidor entre objetos sem perfurações, gatilho para o acionamento do cortador de linha automático.",
    "bibliographicReferences": [
      "TAJIMA. Trimming Mechanisms and Jump Length Parameters. Nagoya, 2022.",
      "BROTHER. Jump Stitch Length and Automatic Thread Trimming. Nagoya, 2023.",
      "ARTRELADOS. Como Configurar Saltos e Eliminar Fiados de Linha na Produção. São Paulo, 2024."
    ]
  },
  {
    "id": "d-036-diagrama-de-pontos",
    "code": "D-036",
    "term": "Diagrama de Pontos",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal masculina.",
    "category": "Softwares & Formatos",
    "summary": "Representação gráfica ou esquemática que permite visualizar a estrutura interna, trajetórias e ordem dos pontos da matriz.",
    "definition": "O diagrama de pontos é a representação gráfica e estrutural utilizada para visualizar, analisar e compreender a organização de cada ponto individual que compõe uma matriz de bordado. Enquanto a imagem simulada na tela mostra como o bordado deverá parecer, o diagrama de pontos revela a sua 'planta baixa': a posição de cada furo de agulha, as trajetórias de deslocamento, a sequência de objetos e os pontos de entrada e saída.",
    "technicalDetails": "Visualizado nos softwares ao desativar o modo 3D / TrueView e ativar a visualização em grade com nós de ponto (Needle Points / Wireframe Mode), permitindo leitura técnica de penetrações e trajetórias de viagem.",
    "construction": [
      "Marcação de pontos de penetração da agulha",
      "Linhas vetoriais de conexão de trajeto",
      "Numeração cronológica de objetos e cores",
      "Indicadores visuais de paradas e cortes"
    ],
    "howItWorks": [
      "1. O operador abre a matriz no software e desativa a visualização de linha realista (3D).",
      "2. O diagrama expõe a malha real de pontos e a densidade de furos.",
      "3. Utiliza-se a barra de reprodução (Stitch Player) para simular a costura passo a passo.",
      "4. Identificam-se pontos sobrepostos desnecessários ou falhas de percurso."
    ],
    "mainTypes": [
      "Visualização em Aramado / Wireframe (Mostra contornos e linhas de direção)",
      "Visualização Ponto a Ponto com Nós (Destaca cada furo de agulha)",
      "Diagrama de Ordem de Produção (Ficha técnica impressa com dados e cores)"
    ],
    "advantages": [
      "✔ Permite enxergar a verdadeira estrutura interna do bordado além da ilusão da tela",
      "✔ Facilita o diagnóstico prévio de pontos acumulados perigosos para a agulha",
      "✔ Excelente ferramenta pedagógica para aprender a 'ler' matrizes de bordado"
    ],
    "limitations": [
      "A representação visual dos símbolos e cores varia de acordo com cada software de bordado."
    ],
    "commonErrors": [
      "❌ Olhar apenas para a imagem 3D simulada e nunca inspecionar o diagrama de pontos.",
      "❌ Confundir o diagrama com o arquivo final da máquina.",
      "❌ Não realizar a simulação virtual passo a passo antes de carregar o arquivo na máquina."
    ],
    "voceSabia": "A imagem 3D do software é como a foto de uma casa pronta; o diagrama de pontos é a planta baixa arquitetônica com todas as vigas e encanamentos!",
    "curiosidadeTecnica": "Ao observar o diagrama de pontos, densidades muito altas aparecem como manchas escuras e sólidas de furos de agulha concentrados.",
    "dicaArtrelados": "Não olhe uma matriz apenas como uma imagem: aprenda a enxergá-la como um caminho feito de pontos! Quando você começa a observar onde começa → por onde passa → onde termina → para onde vai depois, você passa a entender como a máquina pensa!",
    "applications": [
      "Revisão técnica de arquivos, auditoria de matrizes compradas na internet e controle de qualidade."
    ],
    "troubleshootingTips": [
      "Use o reprodutor de pontos (Stitch Player) na velocidade máxima para conferir se a ordem de bordado está lógica antes de colocar a linha na máquina."
    ],
    "relatedTerms": [
      "Sequência de Pontos",
      "Ponto de Entrada",
      "Ponto de Saída",
      "Digitalização de Bordado"
    ],
    "tags": [
      "d-036",
      "diagrama de pontos",
      "wireframe",
      "estrutura",
      "leitura de matriz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do grego diagramma (figura desenhada, esquema gráfico composto por linhas, de diagraphein, marcar com linhas) e de punctum (ponto).",
    "beginnerExplanation": "Diagrama de pontos é o mapa técnico do bordado na tela do computador: você consegue ver cada furinho de agulha, as linhas de costura por baixo (underlay) e até onde a máquina vai pular ou cortar a linha antes de colocar o tecido no bastidor.",
    "practicalExercise": "Abra uma matriz no software e ative a visualização em 'Modo Pontos' ou 'Modo 1:1' (desativando o efeito 3D realista TrueView). Use a barra de rolagem da simulação para ver a agulha descendo ponto por ponto: analise como as camadas de baixo são construídas antes das camadas de cima!",
    "quickSummary": "Diagrama de pontos é a visualização analítica e esquemática de todas as penetrações de agulha e comandos mecânicos da matriz.",
    "bibliographicReferences": [
      "WILCOM. Stitch View, Needle Points and Sequence Inspection. Sydney, 2022.",
      "TAJIMA. DGML Stitch Editing and Sequence Diagram. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Como Ler e Auditar o Diagrama de Pontos de uma Matriz. São Paulo, 2024."
    ]
  },
  {
    "id": "d-037-dimensao-da-matriz",
    "code": "D-037",
    "term": "Dimensão da Matriz",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Terminologia Geral",
    "summary": "Medidas físicas reais de largura e altura que o desenho ocupará no tecido quando bordado.",
    "definition": "A dimensão da matriz corresponde às medidas físicas que indicam o espaço que o desenho bordado ocupará no tecido, expressas em largura e altura (normalmente em milímetros ou centímetros, como 100 x 80 mm ou 10 x 8 cm). É fundamental compreender que a dimensão da matriz representa o tamanho real do bordado, que deve ser totalmente compatível com a área útil do bastidor e o espaço disponível na peça física.",
    "technicalDetails": "Diferencia-se do tamanho em Kilobytes do arquivo digital. O redimensionamento de uma matriz em mais de 10% a 15% exige recálculo automático de pontos pelo software para não comprometer a densidade original.",
    "construction": [
      "Largura física horizontal (X em mm)",
      "Altura física vertical (Y em mm)",
      "Área delimitadora retangular (Bounding Box)",
      "Área efetiva de cobertura por pontos"
    ],
    "howItWorks": [
      "1. A bordadeira confere as medidas em milímetros no painel ou software.",
      "2. Mede com uma fita métrica o local exato da peça (ex: bolso, toalha, peito).",
      "3. Seleciona o bastidor adequado garantindo a folga da distância de segurança."
    ],
    "mainTypes": [
      "Dimensão Nominal (Medida externa máxima de largura x altura)",
      "Área Efetiva de Bordado (Superfície real coberta pelos pontos)",
      "Dimensão Proporcional Redimensionada"
    ],
    "advantages": [
      "✔ Garante o enquadramento perfeito do bordado na peça sem erros de proporção",
      "✔ Assegura a compatibilidade imediata com os bastidores disponíveis no ateliê",
      "✔ Permite planejar a compra correta de entretelas e o consumo de materiais"
    ],
    "limitations": [
      "Aumentar ou diminuir drasticamente as dimensões sem um software que recalcule pontos deforma a densidade e quebra a matriz."
    ],
    "commonErrors": [
      "❌ Confundir a dimensão da matriz com o tamanho nominal do bastidor.",
      "❌ Dobrar o tamanho da matriz sem verificar se os pontos ficaram espaçados demais e ralos.",
      "❌ Reduzir uma matriz para menos da metade fazendo letras e detalhes virarem bolhas duras de linha."
    ],
    "voceSabia": "Duas matrizes com exatamente a mesma dimensão de 10x10cm podem ter 5.000 pontos (se for um traço leve) ou 25.000 pontos (se for um brasão totalmente preenchido em tatami)!",
    "curiosidadeTecnica": "A área retangular (largura x altura) raramente é 100% preenchida: a maioria dos desenhos possui formas irregulares que cobrem apenas 40% a 60% da área do retângulo envolvente.",
    "dicaArtrelados": "Antes de bordar, meça duas vezes: a matriz e o espaço disponível na peça! Pense sempre no trio: 1. Tamanho da matriz; 2. Capacidade do bastidor; 3. Espaço disponível na peça. Quando os três estão em harmonia, seu trabalho começa com total segurança!",
    "applications": [
      "Enquadramento de matrizes, escolha de bastidores, personalização de toalhas e camisas."
    ],
    "troubleshootingTips": [
      "Se precisar mudar o tamanho de uma matriz pronta em mais de 20%, solicite ao digitalizador que gere uma nova versão recalculada para a nova escala."
    ],
    "relatedTerms": [
      "Área Útil do Bastidor",
      "Bastidor",
      "Densidade de Pontos",
      "Distância de Segurança"
    ],
    "tags": [
      "d-037",
      "dimensao da matriz",
      "largura altura",
      "tamanho",
      "bastidor",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dimensio, -onis (ação de medir, extensão mensurável, de dimetiri) e de matrix (molde gerador).",
    "beginnerExplanation": "Dimensão da matriz é a altura e a largura exatas do desenho em milímetros ou centímetros (por exemplo: 10cm x 10cm). É importantíssimo conferir a dimensão para ter certeza de que o desenho vai caber dentro do seu bastidor e no peito da camiseta!",
    "practicalExercise": "Antes de enviar um arquivo para a máquina, meça a área útil do bolso ou do peito da peça com uma fita métrica. Compare com a dimensão informada no painel da máquina: certifique-se de que o desenho deixa pelo menos 15mm de folga livre em todos os lados.",
    "quickSummary": "Dimensão da matriz é a medida física real (largura e altura) do projeto de bordado, essencial para enquadramento no bastidor e proporção na peça.",
    "bibliographicReferences": [
      "BROTHER. Embroidery Field Limits and Hoop Dimension Chart. Nagoya, 2022.",
      "JANOME. Hoop Sizing and Design Scaling Precautions. Tokyo, 2023.",
      "ARTRELADOS. Guia de Dimensões Padrão para Cada Tipo de Peça e Bastidor. São Paulo, 2024."
    ]
  },
  {
    "id": "d-038-densidade-de-linha",
    "code": "D-038",
    "term": "Densidade de Linha",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e locução adjetiva.",
    "category": "Agulhas & Fios",
    "summary": "Concentração e volume de passagens de linha produzidas pelos pontos sobre a superfície do tecido.",
    "definition": "A densidade de linha refere-se ao grau de concentração de linha produzido pelos pontos de bordado em determinada área da matriz. Quanto mais próximas e numerosas forem as passagens de linha em uma região, maior será a densidade e o volume de cobertura sobre o tecido. A densidade de linha depende do espaçamento entre pontos, da espessura do fio utilizado, do tipo de ponto e da quantidade de camadas superpostas.",
    "technicalDetails": "Interage diretamente com o Título da linha (ex: Título 40 de 120D/2 vs Título 60 de 75D/2). Linhas mais espessas proporcionam maior cobertura visual com menor número de passagens, enquanto fios mais finos exigem passagens mais próximas para evitar transparência.",
    "construction": [
      "Espaçamento entre passagens lineares",
      "Calibre e espessura do fio de poliéster/rayon",
      "Número de camadas sobrepostas",
      "Estrutura do substrato têxtil"
    ],
    "howItWorks": [
      "1. A agulha deposita passagens de linha paralelas sobre o tecido.",
      "2. O diâmetro do fio preenche o espaço entre as penetrações vizinhas.",
      "3. O equilíbrio entre espessura da linha e espaçamento gera uma superfície lisa e fechada."
    ],
    "mainTypes": [
      "Densidade de Linha Padrão (Para linha Título 40 tradicional)",
      "Densidade para Linhas Especiais / Metálicas (Espaçamento ligeiramente mais aberto para acomodar o fio Lurex)",
      "Densidade para Linha Fina Título 60 (Espaçamento mais fechado para microletras)"
    ],
    "advantages": [
      "✔ Garante cobertura opaca e cores intensas da linha",
      "✔ Permite dosar o relevo e o toque táctil do bordado na peça",
      "✔ Evita desperdício de metros de linha em matrizes comerciais"
    ],
    "limitations": [
      "Concentração excessiva de linha provoca rigidez, calor por atrito na agulha e enrugamento do tecido."
    ],
    "commonErrors": [
      "❌ Supor que 'quanto mais cheio de linha, melhor a qualidade'.",
      "❌ Usar a mesma configuração de espaçamento ao trocar de linha comum 40 para linha metálica ou linha fina 60.",
      "❌ Ignorar a espessura da linha ao avaliar a cobertura de uma matriz."
    ],
    "voceSabia": "As linhas metálicas (ouro e prata) são mais grossas e rígidas que as linhas normais de poliéster: por isso, a densidade de linha deve ser aberta em cerca de 10% a 15% para a máquina bordar macio e sem arrebentar!",
    "curiosidadeTecnica": "A fórmula de cobertura perfeita estabelece que o espaçamento entre linhas deve ser rigorosamente igual ao diâmetro físico do fio comprimido pelo pé-calcador.",
    "dicaArtrelados": "Densidade não é uma corrida para colocar o máximo de linha possível: é uma busca pelo equilíbrio! Uma boa matriz coloca a quantidade certa de linha no lugar certo, respeitando o tecido e a linha. Quando o bordado está duro ou repuxando, colocar mais linha nunca é a solução!",
    "applications": [
      "Calibração de linhas comuns, metálicas, fluorescentes e fios finos para microbordados."
    ],
    "troubleshootingTips": [
      "Se a linha metálica estiver desfiando e quebrando no cabeçote, abra a densidade de linha em 0.05mm e diminua a velocidade para 600 PPM."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Linha de Bordado",
      "Espaçamento entre Pontos",
      "Ajuste de Densidade"
    ],
    "tags": [
      "d-038",
      "densidade de linha",
      "fios",
      "espessura",
      "cobertura",
      "poliester",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade, espessura) e de linea (fio de linho, linha). Conceito têxtil que relaciona a espessura física do fio ao espaçamento da matriz.",
    "beginnerExplanation": "Densidade de linha é a relação entre a grossura do fio de bordado (como a linha 120/2 comum ou a linha 60 mais fininha) e a quantidade de pontos da matriz. Uma linha fininha exige pontos mais juntinhos para cobrir bem; uma linha grossa pede pontos mais afastados para não encavalar.",
    "practicalExercise": "Pegue um cone de linha título 40 tradicional e um cone de linha título 60 extrafina. Borde a mesma matriz em ponto Tatami com os dois cones lado a lado no mesmo tecido: veja como a linha 60 deixa transparecer o tecido (exigindo mais densidade), enquanto a linha 40 cobre perfeitamente.",
    "quickSummary": "Densidade de linha é a calibração do espaçamento de pontos em consonância com a espessura e título do fio de bordado utilizado.",
    "bibliographicReferences": [
      "MADEIRA. Thread Weights (40, 60, 75) and Corresponding Stitch Density. Freiburg, 2023.",
      "GUNOLD. Technical Guide to Specialty Threads & Density Setup. Stockstadt, 2022.",
      "ARTRELADOS. Escolha de Linhas Especiais e Calibração de Densidade. São Paulo, 2024."
    ]
  },
  {
    "id": "d-039-deteccao-de-cores",
    "code": "D-039",
    "term": "Detecção de Cores",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Softwares & Formatos",
    "summary": "Recurso do software para identificar, agrupar e separar áreas cromáticas de uma imagem durante a preparação.",
    "definition": "A detecção de cores é o processo pelo qual um software de bordado identifica e analisa as diferentes tonalidades presentes em uma imagem gráfica e utiliza essas informações para separar regiões, agrupar cores semelhantes (redução de cores) e gerar propostas de objetos de bordado. É uma etapa preliminar fundamental na digitalização assistida e automática.",
    "technicalDetails": "Analisa os valores RGB dos pixels. Em imagens com compressão JPG ou degradês suaves, o algoritmo pode detectar centenas de variações de uma mesma cor devido ao antialiasing, exigindo redução prévia para uma paleta controlada de 3 a 8 cores de linha.",
    "construction": [
      "Algoritmo de leitura RGB / CMYK",
      "Tabela de redução de cores (Color Reduction Table)",
      "Agrupamento por tolerância cromática",
      "Mapeamento com catálogos de linhas de bordado"
    ],
    "howItWorks": [
      "1. A imagem é importada e o software analisa a quantidade de cores nos pixels.",
      "2. O usuário define o número máximo de cores reais de linha desejadas.",
      "3. O software agrupa tons vizinhos e delimita os contornos de cada bloco de cor.",
      "4. Cada bloco de cor vira um objeto ou parada de troca de linha na máquina."
    ],
    "mainTypes": [
      "Detecção Automática por Tolerância (Varredura de pixels)",
      "Redução Manual de Cores (Agrupamento orientado pelo usuário)",
      "Mapeamento Automático com Paletas de Linhas Comerciais (Madeira, Isacord, Lumina, etc.)"
    ],
    "advantages": [
      "✔ Agiliza imensamente a separação de camadas em desenhos multicoloridos",
      "✔ Elimina pequenas variações de ruído e sombras indesejadas de fotos",
      "✔ Associa as cores da tela aos códigos reais de cones de linha disponíveis no ateliê"
    ],
    "limitations": [
      "A detecção automática de cores não substitui o planejamento da sequência de trocas de cor pelo digitalizador."
    ],
    "commonErrors": [
      "❌ Deixar o software detectar 30 variações de azul para uma imagem simples, gerando 30 trocas de linha na máquina.",
      "❌ Confundir a cor mostrada no monitor com a tonalidade física exata do cone de linha.",
      "❌ Ignorar a ordem e sequência das trocas de cor, fazendo a máquina trocar para a mesma linha várias vezes."
    ],
    "voceSabia": "Uma foto de maçã pode conter mais de 2.000 tons diferentes de vermelho na tela do computador, mas para bordar com perfeição no ateliê você precisa apenas de 2 ou 3 tons de linha bem escolhidos!",
    "curiosidadeTecnica": "Quantidade de cores não é o mesmo que quantidade de trocas de linha: uma matriz com 3 cores pode exigir 8 trocas de linha se a sequência de objetos for mal planejada!",
    "dicaArtrelados": "No bordado eletrônico, nem toda cor que existe na imagem precisa virar um cone de linha! Antes de aceitar a detecção automática, pergunte: 'Quais cores realmente são necessárias para reconhecer o desenho?' O segredo é simplificar com inteligência!",
    "applications": [
      "Preparação de logos, separação de matrizes infantis multicoloridas e conversão de ilustrações."
    ],
    "troubleshootingTips": [
      "Se a matriz estiver exigindo muitas trocas de linha desnecessárias, use a ferramenta de 'Reordenar por Cores' (Color Sort) no software para agrupar todas as partes da mesma cor."
    ],
    "relatedTerms": [
      "Digitalização Automática",
      "Matriz de Bordado",
      "Cores de Linha",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-039",
      "deteccao de cores",
      "reducao de cores",
      "paleta",
      "troca de linha",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim detectio, -onis (ação de descobrir, desvendar, de detegere, tirar o teto/revelar) e do latim color, -oris (cor, matiz óptico).",
    "beginnerExplanation": "Detecção de cores é a ferramenta do software que lê uma imagem e separa automaticamente quais são as cores presentes nela. Ajuda a definir a ordem de troca de linha na máquina sem que você precise adivinhar as cores uma a uma.",
    "practicalExercise": "Importe uma imagem com 4 cores bem contrastantes para o seu software. Use a ferramenta de redução e detecção de cores para limitar a paleta exatamente a 4 cores: repare como o programa remove automaticamente pequenas manchas e ruídos de tons intermediários.",
    "quickSummary": "Detecção de cores é o recurso computacional de identificação e separação cromática de elementos visuais para estruturação das paradas de máquina.",
    "bibliographicReferences": [
      "WILCOM. Color Palette Reduction & Automatic Color Classification. Sydney, 2022.",
      "BERNINA. Managing Thread Charts and Automatic Color Separation. Steckborn, 2023.",
      "ARTRELADOS. Como Padronizar Paletas de Cores de Linhas Nacionais no Software. São Paulo, 2024."
    ]
  },
  {
    "id": "d-040-distorcao-do-bordado",
    "code": "D-040",
    "term": "Distorção do Bordado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Solução de Problemas",
    "summary": "Alteração de forma, proporção ou alinhamento observada no tecido em relação ao desenho original previsto na matriz.",
    "definition": "A distorção do bordado ocorre quando o desenho executado no tecido apresenta forma, proporções ou encaixes diferentes daqueles visualizados no computador (por exemplo: um círculo que vira uma elipse oval, letras inclinadas ou vãos entre o fundo e o contorno). A distorção resulta do combate físico entre a tração da linha, a estabilidade da entretela, o bastidoramento e a elasticidade natural do tecido.",
    "technicalDetails": "Relaciona-se com o efeito mecânico Push & Pull: os pontos puxam o tecido no sentido do ângulo da linha (Pull) e expandem as laterais perpendiculares (Push). Quando a estabilização é insuficiente, a distorção torna-se visível.",
    "construction": [
      "Tração de encolhimento no sentido dos pontos",
      "Expansão nas bordas perpendiculares",
      "Deformação por tensão desbalanceada",
      "Movimentação do tecido dentro do aro do bastidor"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido e a linha exerce tração ao travar o nó.",
      "2. Milhares de pontos acumulam força puxando as fibras têxteis para o centro.",
      "3. Se a entretela não segurar o tecido ou o bastidor estiver frouxo, a forma geométrica se deforma.",
      "4. Ao sair do bastidor, o tecido relaxa evidenciando a distorção."
    ],
    "mainTypes": [
      "Distorção por Repuxamento (Encolhimento paralelo ao ponto)",
      "Distorção por Bastidoramento Excessivo (Tecido esticado artificialmente no aro)",
      "Distorção por Deslocamento de Registro (Contorno fora do preenchimento)"
    ],
    "advantages": [
      "✔ Compreender a distorção permite aplicar compensações precisas na digitalização"
    ],
    "limitations": [
      "Tentar corrigir distorções apenas aumentando a densidade piora a deformação."
    ],
    "commonErrors": [
      "❌ Culpar imediatamente a matriz quando o problema foi o tecido frouxo no bastidor.",
      "❌ Esticar o tecido com força excessiva ao montar o bastidor (como uma pele de tambor esticada demais).",
      "❌ Bordar malhas elásticas usando entretela rasga-fácil em vez de entretela recorta-fácil."
    ],
    "voceSabia": "Se você esticar demais uma camiseta de malha ao fechar o bastidor, ela parecerá linda enquanto estiver presa; mas assim que você abrir o aro, a malha encolherá de volta e o bordado ficará totalmente enrugado!",
    "curiosidadeTecnica": "Distorção refere-se à perda de proporção em relação ao projeto original; deformação refere-se à alteração física e estrutural do tecido durante as forças de costura.",
    "dicaArtrelados": "Quando o bordado se distorcer, não procure um culpado: procure a causa! Compare a matriz com o bordado pronto e veja onde a forma começou a mudar. Lembre-se da regra de ouro: a matriz é criada na tela, mas o bordado acontece no tecido! Observe sempre os dois!",
    "applications": [
      "Diagnóstico e correção de matrizes com problemas de encaixe, formas ovais e repuxamento."
    ],
    "troubleshootingTips": [
      "Se formas circulares estiverem saindo ovais, aumente a Compensação de Repuxo (Pull Compensation) no software para 0.40mm e use entretela mais encorpada."
    ],
    "relatedTerms": [
      "Deformação do Bordado",
      "Compensação de Puxão",
      "Bastidoramento",
      "Estabilizador"
    ],
    "tags": [
      "d-040",
      "distorcao",
      "repuxamento",
      "deformacao",
      "bastidor",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distortio, -onis (ação de torcer, deformar a forma original, de distorquere, torcer para os lados) e do árabe al-burdā (bordado).",
    "beginnerExplanation": "Distorção do bordado é quando o desenho sai deformado no tecido: um círculo perfeito que vira um ovo achatado, um quadrado que vira losango ou contornos que saem fora da figura. Isso acontece porque a linha puxa o tecido enquanto costura!",
    "practicalExercise": "Borde um círculo perfeito de 5cm em uma malha com entretela fraca e frouxa no bastidor. Ao tirar da máquina, meça o círculo na vertical e na horizontal com uma régua: veja como ele ficou menor no sentido dos pontos (encolheu) e maior no sentido oposto (esticou). Esse é o efeito clássico de distorção!",
    "quickSummary": "Distorção do bordado é a alteração geométrica indesejada da forma original causada pelas forças de repuxamento e compressão da linha sobre o tecido.",
    "bibliographicReferences": [
      "KRAUSZ, P. Push and Pull Dynamics in Machine Embroidery. New York: Textile Press, 2021.",
      "TAJIMA. Fabric Distortion Control and Mechanical Stability. Nagoya, 2022.",
      "ARTRELADOS. Guia Definitivo contra Deformações e Repuxo no Bordado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-041-definicao-do-bordado",
    "code": "D-041",
    "term": "Definição do Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Qualidade do Bordado",
    "summary": "Grau de nitidez, clareza e precisão com que contornos, letras e detalhes da matriz são reproduzidos no tecido.",
    "definition": "A definição do bordado é a qualidade com que os elementos de uma matriz são reproduzidos fisicamente no tecido, permitindo que contornos, letras, detalhes finos, curvas e formas sejam percebidos com clareza, nitidez e organização. Um bordado com excelente definição mantém a identidade da arte, preserva os espaços internos vazios e apresenta bordas limpas e bem delimitadas.",
    "technicalDetails": "Resultado da harmonia entre a digitalização precisa, escolha do tipo de ponto correto (Satin para traços finos vs Tatami para áreas largas), comprimento de ponto equilibrado, underlay adequado, espessura da linha e estabilidade do tecido.",
    "construction": [
      "Bordas de contorno nítidas e cravadas",
      "Espaços internos de letras preservados (vãos do 'A', 'O', 'e')",
      "Comprimento de ponto proporcional às curvas",
      "Camada de underlay que sustenta o topo"
    ],
    "howItWorks": [
      "1. O digitalizador projeta os objetos com largura mínima segura (mínimo 1.0mm para Satin).",
      "2. A agulha perfura o tecido com alinhamento preciso sem mastigar os fios.",
      "3. O ponto de cobertura assenta perfeitamente sobre a base de underlay.",
      "4. O desenho final apresenta leitura imediata e visual de alto padrão."
    ],
    "mainTypes": [
      "Definição de Tipografia e Letras (Legibilidade total de monogramas)",
      "Definição de Contornos (Encaixe milimétrico de bordas)",
      "Definição em Tecidos Texturizados (Com uso de filme solúvel superior)"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido e padrão profissional ao produto final",
      "✔ Garante a satisfação imediata de clientes exigentes e marcas corporativas",
      "✔ Mantém o bordado impecável mesmo após dezenas de lavagens"
    ],
    "limitations": [
      "Tecidos com textura grossa (piquê pesado, toalhas felpudas) exigem filme plástico hidrossolúvel por cima para não engolir a definição dos pontos."
    ],
    "commonErrors": [
      "❌ Achar que para deixar o bordado mais definido basta aumentar a densidade (o excesso esconde os detalhes).",
      "❌ Bordar letras minúsculas em ponto Tatami em vez de ponto Satin.",
      "❌ Tentar manter todos os microdetalhes de uma arte complexa em tamanhos reduzidos."
    ],
    "voceSabia": "Em uma pequena letra 'A' bordada, colocar pontos demais fecha o triângulo central da letra, fazendo com que ela perca totalmente a definição e vire uma mancha sólida!",
    "curiosidadeTecnica": "A definição de um bordado é análoga à resolução óptica: enquanto na tela do computador ela depende de pixels, no tecido ela depende da relação entre o calibre da agulha, o diâmetro da linha e a trama do tecido.",
    "dicaArtrelados": "Definição não é colocar mais pontos: é fazer com que cada ponto trabalhe a favor do desenho! Quando um detalhe estiver pequeno demais para funcionar, simplifique. O melhor detalhe é aquele que continua perfeitamente visível depois que o bordado sai da tela e chega ao tecido!",
    "applications": [
      "Controle de qualidade de monogramas, jalecos, crachás bordados e peças de enxoval fino."
    ],
    "troubleshootingTips": [
      "Em toalhas de banho e veludo, use sempre uma folha de plástico hidrossolúvel por cima do tecido para que os pontos não afundem na felpa, garantindo 100% de definição."
    ],
    "relatedTerms": [
      "Detalhamento da Matriz",
      "Ponto Satin",
      "Densidade de Pontos",
      "Underlay"
    ],
    "tags": [
      "d-041",
      "definicao",
      "nitidez",
      "clareza",
      "legibilidade",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim definitio, -onis (delimitação precisa de contornos, de definire, estabelecer os limites de algo, de finis, fronteira/limite).",
    "beginnerExplanation": "Definição do bordado é o grau de nitidez, clareza e limpeza visual do bordado pronto: letras que você consegue ler de longe sem esforço, bicos de estrelas afiados e contornos perfeitamente alinhados sem fiapos soltos.",
    "practicalExercise": "Borde a mesma palavra com letras de 6mm em duas situações: 1) com agulha 75/11 gasta e tensão frouxa; 2) com agulha 70/10 nova ponta fina, linha de qualidade e entretela firme. Coloque as duas peças lado a lado e compare a nitidez das letras: essa é a diferença de uma alta definição!",
    "quickSummary": "Definição do bordado é o padrão de nitidez, precisão de contornos e legibilidade dos detalhes alcançado na peça executada.",
    "bibliographicReferences": [
      "SCHMETZ. Needle Sharpness and Edge Definition in Automated Stitching. Germany, 2022.",
      "MADEIRA. Achieving Crisp Lettering and High Definition in Embroidery. Freiburg, 2023.",
      "ARTRELADOS. Como Atingir Nitidez Máxima em Nomes e Detalhes Pequenos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-042-deformacao-do-bordado",
    "code": "D-042",
    "term": "Deformação do Bordado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Solução de Problemas",
    "summary": "Alteração física e estrutural do tecido ou do desenho causada pelas forças dinâmicas da costura.",
    "definition": "A deformação do bordado ocorre quando o desenho executado no tecido perde, total ou parcialmente, sua forma, estabilidade ou proporções originais devido à reação física das fibras têxteis durante a costura. Isso acontece quando as forças de tração exercidas pela linha e pelo impacto da agulha superam a capacidade de sustentação do tecido e da entretela, gerando franzimento, ondulações e repuxamento.",
    "technicalDetails": "Diferencia-se da distorção puramente geométrica por focar na alteração física e mecânica do substrato têxtil (rugas, ondas, enrugamento ao redor do aro e encolhimento pós-bastidor).",
    "construction": [
      "Força de tração acumulada nas fibras",
      "Fadiga mecânica do tecido por perfurações sucessivas",
      "Instabilidade de entretelamento",
      "Tensão desbalanceada entre linha superior e inferior"
    ],
    "howItWorks": [
      "1. A máquina executa milhares de perfurações com linha tracionada.",
      "2. O tecido flexível é puxado em direção ao centro do bordado.",
      "3. Se a entretela for fraca ou o bastidoramento inadequado, formam-se ondas e rugas.",
      "4. Ao retirar o bastidor, o tecido relaxa de forma irregular mantendo a deformação."
    ],
    "mainTypes": [
      "Deformação por Elasticidade (Comum em tecidos com elastano / malhas)",
      "Deformação por Densidade Excessiva (Tecido endurecido e empurrado)",
      "Deformação Pós-Bastidor (Surge logo após soltar a peça do aro)"
    ],
    "advantages": [
      "✔ Identificar a mecânica da deformação orienta a escolha correta do conjunto entretela + bastidor"
    ],
    "limitations": [
      "Deformações graves com ruptura de fibras têxteis são permanentes e irrecuperáveis na peça."
    ],
    "commonErrors": [
      "❌ Esticar a malha ao máximo no bastidor tentando deixá-la esticada como um tambor.",
      "❌ Aumentar a densidade na tentativa de cobrir rugas causadas por falta de entretela.",
      "❌ Culpar a máquina de bordar antes de checar a gramatura do estabilizador."
    ],
    "voceSabia": "Em tecidos delicados ou com elastano, o bastidor deve apenas APOIAR e ESTABILIZAR o tecido, nunca esticá-lo! Esticar a peça no bastidor é a causa número 1 de deformações no ateliê!",
    "curiosidadeTecnica": "A regra de ouro da estabilidade estabelece: Matriz correta + tecido adequado + estabilização correta + bastidoramento adequado = zero deformação.",
    "dicaArtrelados": "O tecido também participa ativamente da construção do bordado! Não adianta ter uma matriz perfeita se o tecido estiver mal estabilizado ou esticado incorretamente. Quando aparecer uma deformação, descubra por que o tecido se moveu antes de alterar o arquivo!",
    "applications": [
      "Bordados em malha, viscolycra, tecidos finos de seda, cetim e peças esportivas."
    ],
    "troubleshootingTips": [
      "Ao bordar tecidos elásticos, use entretela de malha ou recorta-fácil de 200g/m² e aplique spray adesivo temporário para fixar o tecido sem esticá-lo."
    ],
    "relatedTerms": [
      "Distorção do Bordado",
      "Bastidoramento",
      "Estabilizador",
      "Compensação de Puxão"
    ],
    "tags": [
      "d-042",
      "deformacao",
      "rugas",
      "franzimento",
      "malha",
      "estabilidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deformatio, -onis (ação de desfigurar, alterar a forma correta, de deformare, tirar a forma bela).",
    "beginnerExplanation": "Deformação do bordado é quando a peça de roupa fica franzida, enrugada ou com ondas feias ao redor do desenho depois de bordada. Acontece quando esticamos a camiseta com muita força ao prender no bastidor ou quando usamos entretela inadequada.",
    "practicalExercise": "Pegue um pedaço de malha e estique-o com as mãos com muita força ao fechar o parafuso do bastidor. Borde um desenho denso e depois retire do bastidor: veja como a malha encolhe de volta e forma um monte de ondas e rugas ao redor do bordado. Repita sem esticar a malha e veja a diferença!",
    "quickSummary": "Deformação do bordado é o enrugamento ou ondulamento estrutural do tecido ao redor da área bordada gerado por bastidoramento incorreto ou estabilização insuficiente.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Puckering and Fabric Deformation: Root Causes & Solutions. London, 2022.",
      "GUNOLD. Hooping Techniques to Prevent Garment Distortion. Stockstadt, 2021.",
      "ARTRELADOS. O Bastidoramento Correto: Como Evitar Franzimentos em Malhas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-043-defeito-de-bordado",
    "code": "D-043",
    "term": "Defeito de Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Solução de Problemas",
    "summary": "Guia completo de diagnóstico e solução para qualquer falha, irregularidade ou resultado indesejado na produção.",
    "definition": "Um defeito de bordado é qualquer alteração, falha mecânica, imperfeição visual ou irregularidade estrutural que comprometa a aparência, a qualidade, a durabilidade ou o acabamento esperado de uma peça bordada. O defeito pode ter origem na matriz digital, na preparação do tecido, na estabilização, na escolha da agulha e linha, na calibração de tensão ou na mecânica da máquina de bordar.",
    "technicalDetails": "Exige metodologia de diagnóstico investigativo: isolar variáveis uma a uma (agulha → linha → tensão → entretela → bastidor → matriz) para descobrir a causa raiz sem trocar múltiplos parâmetros simultaneamente.",
    "construction": [
      "Análise do aspecto visual frontal",
      "Inspeção técnica do verso do bordado (1/3 de bobina)",
      "Verificação da formação de laçadas e nós",
      "Auditoria da matriz e condições da máquina"
    ],
    "howItWorks": [
      "1. A bordadeira observa o defeito no tecido (frente e verso).",
      "2. Identifica em que momento da costura a falha começou.",
      "3. Formula hipóteses (agulha com rebarba, tensão frouxa, entretela inadequada).",
      "4. Realiza testes controlados alterando UMA variável por vez até solucionar."
    ],
    "mainTypes": [
      "Defeitos de Linha & Tensão (Quebras, linha da bobina subindo, laços frouxos)",
      "Defeitos de Cobertura (Tecido aparente, preenchimento ralo)",
      "Defeitos de Registro & Geometria (Contornos desalinhados, formas ovais)",
      "Defeitos de Acabamento (Marcas de bastidor, fiapos soltos, nós duros)"
    ],
    "advantages": [
      "✔ Desenvolve autonomia e raciocínio técnico avançado na bordadeira",
      "✔ Reduz drasticamente o desperdício de peças caras e tempo de retrabalho",
      "✔ Garante padrão de qualidade consistente e profissional no ateliê"
    ],
    "limitations": [
      "Continuar bordando com a máquina apresentando ruídos estranhos ou quebras repetitivas pode danificar a lançadeira ou a barra de agulha."
    ],
    "commonErrors": [
      "❌ Culpar a máquina imediatamente sem verificar a passagem de linha ou o estado da agulha.",
      "❌ Alterar dez configurações ao mesmo tempo sem descobrir a causa real do problema.",
      "❌ Olhar apenas para a frente do bordado e nunca inspecionar o avesso.",
      "❌ Continuar a produção quando a máquina está quebrando linha a cada 100 pontos."
    ],
    "voceSabia": "O avesso do bordado conta a verdadeira história do que aconteceu: olhar a proporção de 1/3 da linha de bobina no verso revela instantaneamente se o problema era tensão superior ou inferior!",
    "curiosidadeTecnica": "Crie um 'caderno de ocorrências do ateliê': fotografe a frente, o verso e anote a solução encontrada para cada defeito resolvido. Com o tempo, você terá seu próprio manual de maestria em bordado.",
    "dicaArtrelados": "Não tente corrigir um defeito antes de descobrir sua causa real! Siga sempre a regra de ouro do DIBE: Observar → Investigar → Identificar → Corrigir → Testar. Assim, cada problema superado deixa de ser uma frustração e se torna um degrau na sua evolução profissional!",
    "applications": [
      "Solução de problemas em ateliês, manutenção preventiva, controle de qualidade e treinamento."
    ],
    "troubleshootingTips": [
      "Em caso de falha persistente, substitua a agulha por uma nova e repasse toda a linha superior do zero com o pé-calcador levantado."
    ],
    "relatedTerms": [
      "Definição do Bordado",
      "Deformação do Bordado",
      "Ajuste de Tensão",
      "Bastidoramento",
      "Quebra de Linha"
    ],
    "tags": [
      "d-043",
      "defeito de bordado",
      "diagnostico",
      "solucao de problemas",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim defectus, -us (falta, imperfeição, fraqueza, falha mecânica, de deficere, faltar/falhar) e do árabe al-burdā (bordado).",
    "beginnerExplanation": "Defeito de bordado é qualquer coisa que dê errado na produção: linha de cima quebrando, linha branca da bobina aparecendo por cima, pano furado, contorno torto ou nó embaixo do tecido. Cada defeito tem uma causa clara e pode ser resolvido com método!",
    "practicalExercise": "Crie o 'Caderno de Casos do Ateliê': sempre que acontecer um defeito (linha arrebentando, bobina subindo, etc.), fotografe a frente e o verso da peça, anote qual era o tecido, qual era a agulha e como você conseguiu resolver. Em poucas semanas você terá seu próprio manual de soluções rápidas!",
    "quickSummary": "Defeito de bordado é qualquer anomalia visual, mecânica ou estrutural no produto bordado, corrigível através do diagnóstico metódico das variáveis de produção.",
    "bibliographicReferences": [
      "MADEIRA. Complete Embroidery Troubleshooting Guide: From Cause to Cure. Freiburg, 2023.",
      "BARUDAN. Technical Troubleshooting Manual for Commercial Embroidery. Tokyo, 2022.",
      "ARTRELADOS. Manual Mestre de Diagnóstico e Solução de Defeitos no Bordado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-085-densidade-fracionada-gradiente",
    "code": "D-085",
    "term": "Densidade Fracionada / Densidade Gradiente (Gradient Density)",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada pelos substantivos densidade, fração e gradiente.",
    "category": "Programação de Bordado",
    "summary": "Técnica de variação progressiva do espaçamento entre pontos para criar degradês suaves, sombreados realistas e transições de cor perfeitas sem sobrecarregar o tecido.",
    "definition": "A densidade fracionada ou gradiente é a técnica de digitalização avançada em que a distância entre as linhas de penetração de ponto não permanece constante, mas varia de forma progressiva e contínua ao longo de um eixo geométrico (por exemplo, iniciando em uma densidade fechada de 0,38 mm e espaçando gradativamente até 1,20 mm ou 2,00 mm). Isso permite misturar duas ou mais cores de fios sobrepostas sem gerar acúmulo excessivo de massa de linha nem rigidez no tecido.",
    "technicalDetails": "Baseia-se em curvas de distribuição matemática (linear, exponencial ou logarítmica) aplicadas ao cálculo das linhas de varredura no software de matrizes. Ao sobrepor dois blocos de pontos com gradientes invertidos (um abrindo de 0,4 mm para 1,5 mm e o seguinte fechando de 1,5 mm para 0,4 mm com outra cor), os fios se intercalam opticamente, gerando a ilusão de uma terceira cor intermediária por síntese aditiva visual.",
    "howItWorks": [
      "1. No software de matrizes, seleciona-se o objeto de preenchimento (tatami ou ponto cheio).",
      "2. Ativa-se a ferramenta de 'Gradiente de Densidade / Efeito Acordeom'.",
      "3. Define-se a densidade inicial (ex: 0,40 mm) e a densidade final (ex: 1,50 mm), bem como o sentido do gradiente.",
      "4. Cria-se uma segunda camada sobreposta com a cor secundária e o gradiente no sentido inverso.",
      "5. A máquina borda primeiro a cor de base e depois a cor de sobreposição, mesclando os fios perfeitamente."
    ],
    "beginnerExplanation": "É o jeito de fazer 'degradê' no bordado, como o pôr do sol ou o sombreado de uma pétala. Em vez de preencher tudo apertadinho, a máquina vai deixando os pontinhos cada vez mais afastados, permitindo que outra cor de linha se misture por cima sem ficar um bloco duro de linha.",
    "applications": [
      "Bordados realistas de animais (pelagem com transições suaves de cor).",
      "Pétalas de flores, folhagens botânicas e efeitos de luz e sombra em rostos e paisagens.",
      "Logotipos corporativos modernos com degradê de marcas que antes eram impossíveis de bordar com fidelidade."
    ],
    "characteristics": [
      "Reduz a contagem de pontos em até 40% em relação a preenchimentos maciços convencionais.",
      "Elimina a rigidez (efeito 'placa de papelão') em desenhos grandes sombreados."
    ],
    "commonErrors": [
      "❌ Deixar as duas camadas com densidade padrão fechada (0,40 mm), gerando sobreposição pesada que quebra agulha e empedra o tecido",
      "❌ Espaçar demais a densidade final (acima de 2,5 mm) em tecidos de malha, fazendo a cor de fundo do tecido vazar de forma descontrolada",
      "❌ Usar ponto de suporte (underlay) muito denso embaixo da área de degradê, que compete visualmente com a transição de cores"
    ],
    "troubleshootingTips": [
      "Se a transição de cor ficar marcada como uma linha reta: Aumente o intervalo de sobreposição das duas camadas em pelo menos 3 mm no software.",
      "Se o degradê ficar ralo e sem cor: Diminua a densidade máxima para 1,2 mm e utilize linha trilobal de alto brilho.",
      "Se a agulha quebrar na área de encontro das cores: Desative o underlay da segunda camada de gradiente."
    ],
    "dicaArtrelados": "Para fazer o degradê perfeito no estilo Artrelados, use underlay apenas na primeira cor de fundo. A segunda cor do gradiente deve entrar com 'Underlay Nenhum' e compensação de encolhimento de 0,35 mm — o resultado fica leve, sedoso e com toque de veludo!",
    "voceSabia": "A técnica de gradiente de densidade foi inspirada no pontilhismo da pintura impressionista francesa do século XIX (como nas obras de Georges Seurat), onde pequenos pontos de cores puras colocados lado a lado são mesclados diretamente pelo olho humano!",
    "practicalExercise": "Crie no seu software um retângulo de 6x4 cm dividido em duas metades com gradiente invertido (uma azul abrindo para a direita e uma amarela abrindo para a esquerda). Borde sobre tricoline e veja como o centro forma um verde suave e natural.",
    "quickSummary": "Variação progressiva do espaçamento dos pontos para criar degradês suaves, sombreados e transições de cores realistas.",
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela rasgável de boa sustentação"
    },
    "relatedTerms": [
      "Densidade de Pontos",
      "Ponto Tatami (Fill Stitch)",
      "Curvatura e Ângulo de Ponto",
      "Ponto de Suporte (Underlay)",
      "Fio de Poliéster Trilobal"
    ],
    "tags": [
      "d-085",
      "densidade fracionada",
      "densidade gradiente",
      "degrade",
      "sombreamento",
      "mistura de cores",
      "artrelados"
    ],
    "origin": "Do latim densitas (espessura, compressão) e do latim gradiens (que caminha por degraus).",
    "updatedAt": "2026-08-28",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Gradient Density & Accordion Stitching Techniques. Sydney, 2023.",
      "MADEIRA THREADS. Color Blending and Shading in Machine Embroidery. Freiburg, 2022.",
      "ARTRELADOS. Guia de Degradê e Sombreado Realista no Bordado Computadorizado. Curitiba, 2024."
    ]
  },
  {
    "id": "d-086-dentes-impelidores-rebaixados",
    "code": "D-086",
    "term": "Dentes Impelidores Rebaixados (Drop Feed / Feed Dogs Inactive)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo masculino plural e adjetivo.",
    "category": "Equipamentos & Hardware",
    "summary": "Mecanismo dentado sob a chapa que fica obrigatoriamente abaixado ou desativado no bordado computadorizado para que o bastidor seja guiado exclusivamente pelo pantógrafo.",
    "definition": "Os dentes impelidores (feed dogs) constituem o sistema de tração mecânica dentada situado logo abaixo da chapa de agulha das máquinas de costura convencionais. No bordado computadorizado, esse mecanismo deve permanecer permanentemente rebaixado (drop feed) ou fisicamente desconectado do eixo principal, garantindo que o transporte do tecido seja executado de forma 100% autônoma e bidirecional pelos servomotores do pantógrafo nos eixos cartesianos X e Y.",
    "technicalDetails": "Nas máquinas industriais exclusivas de bordado, os dentes impelidores nem sequer existem de fábrica, sendo a base do cabeçote totalmente lisa. Nas máquinas domésticas híbridas (costura e bordado), existe uma alavanca traseira ou controle eletrônico que rebaixa os dentes abaixo do nível da chapa de agulha (ou utiliza-se uma tampa de cobertura plástica darning plate), evitando que as garras de aço arranhem o tecido ou entrem em conflito com a movimentação omnidirecional do bastidor.",
    "howItWorks": [
      "1. Ao acoplar a unidade de bordado na máquina híbrida, a máquina emite o aviso para rebaixar os dentes impelidores.",
      "2. O operador move a chave mecânica 'Drop Feed' na parte traseira da máquina para a posição de dentes baixos.",
      "3. Os dentes descem cerca de 1,5 mm abaixo da superfície da chapa de agulha.",
      "4. O bastidor fica livre para deslizar suavemente em qualquer ângulo de 360 graus sob a ação do pantógrafo."
    ],
    "beginnerExplanation": "São aqueles 'dentinhos de serrote' que ficam embaixo da agulha na máquina de costura comum para puxar o pano para frente. No bordado computadorizado, eles precisam ficar sempre abaixados e escondidos, porque é o próprio bastidor da máquina que vai movimentar o tecido para lá e para cá sozinho.",
    "applications": [
      "Configuração obrigatória em todas as máquinas domésticas de costura e bordado antes de iniciar qualquer trabalho de bordado.",
      "Prevenção de danos e desfiamentos na parte inferior de tecidos finos e acetinados.",
      "Garantia de movimentação suave e livre do bastidor em alta velocidade."
    ],
    "characteristics": [
      "Permanecem totalmente imóveis e abaixo da linha da chapa durante todo o ciclo de bordado.",
      "Evitam resistência por atrito contra a entretela montada no bastidor."
    ],
    "commonErrors": [
      "❌ Esquecer os dentes levantados ao encaixar o módulo de bordado, fazendo os dentes rasgarem a entretela por baixo e travando o bastidor",
      "❌ Forçar a alavanca de rebaixamento com a agulha abaixada ou com a máquina em movimento",
      "❌ Acumular fiapos de linha e poeira entre as ranhuras dos dentes rebaixados, impedindo que eles desçam até o final"
    ],
    "troubleshootingTips": [
      "Se o bastidor estiver travando ou dando trancos ao se mover: Verifique se os dentes impelidores estão totalmente rebaixados.",
      "Se a alavanca de drop feed não descer: Gire o volante manualmente uma volta completa para liberar a engrenagem interna.",
      "Se a máquina não tiver alavanca de rebaixo: Encaixe a plaquinha plástica de cobertura (tampa isoladora de dentes) que acompanha o kit da máquina."
    ],
    "dicaArtrelados": "Ao fazer a limpeza semanal da sua máquina, retire a chapa de agulha e passe o pincel entre as ranhuras dos dentes impelidores: o acúmulo de pó de entretela e óleo velho pode travar o rebaixo e arranhar o fundo dos seus bastidores!",
    "voceSabia": "O sistema de dentes impelidores foi patenteado por Allen B. Wilson em 1850 (chamado de four-motion feed) e transformou a história da costura no mundo. Porém, para que o bordado computadorizado nascesse na década de 1970, foi necessário anular completamente essa invenção para dar lugar aos motores de passo X e Y!",
    "practicalExercise": "Localize a chave de dentes impelidores na sua máquina. Mova para a esquerda e veja os dentinhos afundarem; depois passe o dedo suavemente sobre a chapa de agulha para sentir a superfície totalmente plana e segura para o bastidor.",
    "quickSummary": "Mecanismo de dentes que fica abaixado no bordado para que o bastidor deslize livremente guiado pelos motores da máquina.",
    "recommendedSettings": {
      "speedPPM": "Não se aplica (estado mecânico)",
      "needleType": "Não se aplica",
      "stabilizer": "Não se aplica"
    },
    "relatedTerms": [
      "Chapa de Agulha",
      "Pantógrafo",
      "Bastidor",
      "Bastidoramento",
      "Braço Cilíndrico"
    ],
    "tags": [
      "d-086",
      "dentes impelidores",
      "drop feed",
      "transporte do tecido",
      "pantografo",
      "hardware",
      "artrelados"
    ],
    "origin": "Do latim dens (dente) e do latim impellere (empurrar para a frente).",
    "updatedAt": "2026-08-28",
    "bibliographicReferences": [
      "SINGER SEWING COMPANY. Mechanics of Feed Dog Systems and Free-Motion Embroidery. Elizabeth, 2021.",
      "BROTHER INDUSTRIES. Service Manual: Feed Dog Mechanism & Embroidery Unit Interlocking. Nagoya, 2022.",
      "ARTRELADOS. Manual de Operação e Mecânica Básica para Bordadeiras. Curitiba, 2024."
    ]
  },
  {
    "id": "d-087-distorcao-push-pull",
    "code": "D-087",
    "term": "Distorção de Push-Pull (Push and Pull Distortion)",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal de origem mista (substantivo português e termos técnicos em inglês).",
    "category": "Física & Dinâmica do Bordado",
    "summary": "Fenômeno físico em que os pontos encolhem o tecido no sentido da linha (Pull) e esticam o tecido no sentido do avanço da costura (Push), gerando vãos e desalinhamentos.",
    "definition": "A distorção de push-pull é a resposta mecânica e viscoelástica intrínseca de qualquer substrato têxtil submetido à penetração e tração contínua de linhas de bordar. O efeito 'Pull' (encolhimento) ocorre ao longo do eixo das colunas de pontos, onde a tensão do fio puxa as bordas do tecido para dentro; simultaneamente, o efeito 'Push' (empurramento) ocorre na direção perpendicular (no sentido do avanço do bloco), onde a inserção física repetitiva dos fios empurra as fibras do tecido para fora, transformando círculos perfeitos em ovais e gerando frestas entre o preenchimento e o contorno externo.",
    "technicalDetails": "A intensidade do push-pull é diretamente proporcional à densidade da matriz, à largura do ponto e à elasticidade do tecido, e inversamente proporcional à rigidez do estabilizador. A equação de compensação exige o acréscimo de sobreposição geométrica nas extremidades do eixo de tração (Pull Compensation entre 0,35 mm e 0,60 mm) e o recuo milimétrico no eixo de avanço (Push Offset de -0,20 mm a -0,30 mm).",
    "howItWorks": [
      "1. A máquina costura uma sequência de pontos de preenchimento na horizontal.",
      "2. Cada laçada traciona o tecido nas pontas esquerda e direita, fazendo a forma encolher no sentido horizontal (Pull).",
      "3. Ao mesmo tempo, o volume dos milhares de fios entrando lado a lado empurra o tecido para cima e para baixo (Push).",
      "4. Ao chegar a hora do contorno final, se a matriz não tiver compensação programada, o contorno não se encaixa nas laterais (deixando frestas brancas) e invade o tecido nas pontas superior e inferior."
    ],
    "beginnerExplanation": "É o que faz um círculo perfeito virar um ovo ou o contorno preto ficar fora do lugar (com aquele espacinho em branco feio entre o desenho e a linha de contorno). A linha quando aperta puxa o tecido para dentro de um lado e empurra para fora do outro.",
    "applications": [
      "Programação de matrizes profissionais de alta precisão para roupas esportivas, malhas e tecidos elásticos.",
      "Ajuste de logotipos geométricos complexos com contornos finos de 1 mm colados em letras e escudos.",
      "Controle dimensional de bordados técnicos com tolerância milimétrica em uniformes industriais."
    ],
    "characteristics": [
      "Acontece em 100% dos bordados computadorizados do mundo em maior ou menor grau.",
      "Pode ser completamente neutralizado com matriz bem programada e entretela correta."
    ],
    "commonErrors": [
      "❌ Culpar a máquina ou a agulha pelo contorno fora do lugar, quando na verdade o erro é a falta de compensação de push-pull na matriz",
      "❌ Tentar corrigir o push-pull esticando o tecido com força excessiva no bastidor, o que deforma o tecido ainda mais",
      "❌ Digitalizar círculos e quadrados com linhas geométricas puras sem sobreposição de encaixe nas bordas"
    ],
    "troubleshootingTips": [
      "Se houver fresta vazia entre o preenchimento e o contorno lateral: Aumente a compensação de encolhimento (Pull Compensation) para 0,45 mm no software.",
      "Se o contorno superior/inferior estiver invadindo a área de fora: Recue o limite do preenchimento em 0,2 mm na direção do avanço dos pontos.",
      "Se o bordado estiver deformando em malha piquet: Utilize entretela recortável resinada de 80g e adicione ponto de suporte em tatami leve cruzado."
    ],
    "dicaArtrelados": "Lembre-se da Regra Mestra Artrelados: 'No sentido em que a agulha vai e volta (linha), o bordado encolhe. No sentido em que o bordado caminha para a frente, o bordado empurra'. Programe sempre a compensação a favor da linha e seu contorno vai cravar com precisão cirúrgica!",
    "voceSabia": "Em tecidos extremamente elásticos como lycra ou suplex de academia, o efeito de encolhimento (pull) pode fazer um desenho de 10 cm encolher até 4 mm inteiros se não houver entretela recortável e compensação de matriz!",
    "practicalExercise": "Crie um quadrado de 4x4 cm preenchido com tatami horizontal e coloque um contorno de ponto cheio exatamente em cima das bordas sem compensação. Borde em um retalho de malha e veja com os próprios olhos as frestas laterais criadas pelo efeito push-pull.",
    "quickSummary": "Comportamento físico em que a linha encolhe o tecido de um lado e o empurra do outro, exigindo compensação milimétrica na matriz.",
    "recommendedSettings": {
      "speedPPM": "700 a 850 PPM",
      "needleType": "75/11 Ponta Bola em malhas",
      "stabilizer": "Entretela recortável 80g em tecidos elásticos"
    },
    "relatedTerms": [
      "Compensação de Encolhimento (Pull Compensation)",
      "Ponto de Suporte (Underlay)",
      "Bastidoramento",
      "Ponto Tatami (Fill Stitch)",
      "Ponto Cheio (Satin Stitch)"
    ],
    "tags": [
      "d-087",
      "push pull",
      "distorcao",
      "encolhimento",
      "compensacao de encolhimento",
      "registro de contorno",
      "artrelados"
    ],
    "origin": "Dos verbos ingleses to push (empurrar) e to pull (puxar/tracionar) e do latim distortio (ato de deformar).",
    "updatedAt": "2026-08-28",
    "bibliographicReferences": [
      "KAHN, Max. Push and Pull Phenomena in Computerized Embroidery. Nova York, 2022.",
      "WILCOM EMBROIDERYSTUDIO. Digitizing for Fabric Types: Managing Push-Pull Forces. Sydney, 2023.",
      "ARTRELADOS. A Física do Bordado: Dominando o Efeito Push-Pull e Encaixes Perfeitos. Curitiba, 2024."
    ]
  },
  {
    "id": "d-088-dst-formato-universal-tajima",
    "code": "D-088",
    "term": "DST (Data Stitch Tajima / Formato Universal de Matriz)",
    "level": "Intermediário 🟡",
    "grammarClass": "Sigla substantivada masculina.",
    "origin": "Sigla em inglês para Data Stitch Tajima, criada na década de 1980 pela corporação japonesa Tajima Industries Ltd. Tornou-se o padrão internacional universal de código de máquina para bordado industrial.",
    "category": "Formatos & Arquivos de Bordado",
    "summary": "O formato de arquivo de bordado mais universal do mundo, compatível com quase todas as marcas de máquinas industriais e domésticas existentes.",
    "definition": "O arquivo DST é um formato binário de baixo nível (stitch-based / formato de máquina puro) que armazena exclusivamente instruções sequenciais de coordenadas de deslocamento cartesiano relativo (delta X e delta Y), comandos de salto (jump), instruções de parada (stop) e comandos de corte de linha (trim). Por ser um formato puramente mecânico, o DST não embute em seu cabeçalho a tabela de cores RGB dos fios nem as propriedades vetoriais originais dos objetos, cabendo ao operador atribuir as cores das linhas diretamente no painel da máquina.",
    "technicalDetails": "Utiliza codificação ternária compactada de 3 bytes por coordenada de ponto, com limite máximo de salto simples de 12,1 mm por comando (saltos maiores são fracionados em múltiplos comandos de jump sequenciais). O cabeçalho (header) de 512 bytes em código ASCII armazena metadados básicos como nome do arquivo, contagem total de pontos, extensões máximas (+X, -X, +Y, -Y) e número de paradas para troca de cor.",
    "howItWorks": [
      "1. O programador finaliza a matriz no software e exporta o arquivo no formato .DST.",
      "2. O arquivo é transferido para o pen drive e espetado na máquina de bordar.",
      "3. O processador da máquina lê os comandos binários de X e Y, movendo os servomotores passo a passo.",
      "4. Quando o arquivo encontra um comando 'Stop', a máquina para e solicita a próxima cor (que o operador define no painel ou nas agulhas)."
    ],
    "beginnerExplanation": "É o tipo de arquivo de bordado mais famoso do mundo. É como se fosse o 'PDF' ou 'MP3' do bordado: quase qualquer máquina de qualquer marca (Tajima, Barudan, Brother, Janome, Happy, Ricoma) consegue ler e bordar um arquivo .DST sem reclamar!",
    "applications": [
      "Padrão universal para envio de matrizes para clientes que possuem marcas variadas de máquinas de bordar.",
      "Formato nativo de produção em máquinas industriais multicabeças de grande escala.",
      "Backup de emergência de arquivos de bordado para leitura garantida em qualquer equipamento."
    ],
    "characteristics": [
      "Compatibilidade universal com 99,9% das máquinas computadorizadas do mercado.",
      "Arquivo leve (poucos kilobytes) e imune a erros de incompatibilidade de versão de software."
    ],
    "commonErrors": [
      "❌ Abrir um arquivo DST na máquina e achar que a matriz está estragada porque as cores aparecem trocadas na tela (o formato DST não grava as cores originais, apenas o aviso de troca de linha)",
      "❌ Tentar redimensionar um arquivo DST em mais de 10% no painel da máquina sem recalcular a densidade de pontos no software",
      "❌ Salvar por cima do arquivo vetorial original (.EMB ou .JAN) apenas em DST, perdendo a capacidade de editar os objetos vetoriais com facilidade no futuro"
    ],
    "troubleshootingTips": [
      "Se as cores na tela da máquina ficarem estranhas: Defina a ordem de cores manualmente no painel da máquina consultando a ficha técnica (PDF de produção) da matriz.",
      "Se a máquina não reconhecer o pen drive com DST: Certifique-se de que o pen drive está formatado em FAT32 e que o nome do arquivo tem menos de 8 caracteres sem acentos.",
      "Se você precisa alterar o tamanho da matriz: Redimensione sempre no software a partir do arquivo original de criação (.EMB, .PES, etc.) antes de exportar o novo DST."
    ],
    "dicaArtrelados": "Ao enviar matrizes para clientes ou alunas, envie sempre a duplinha de ouro Artrelados: o arquivo .DST (para rodar em qualquer máquina) acompanhado da Ficha Técnica em PDF colorida com a lista exata da ordem das cores de linha!",
    "voceSabia": "O formato DST foi criado originalmente para ser lido através de fitas de papel perfuradas (paper tape punchers) que eram inseridas nas primeiras máquinas de bordar computadorizadas nos anos 1980, antes da existência dos disquetes e pen drives!",
    "practicalExercise": "Exporte uma matriz simples do seu software em .DST e em .PES. Abra os dois arquivos em um visualizador e compare: observe como o DST abre com cores aleatórias padrão, mas tem exatamente a mesma perfeição e contagem de pontos do arquivo nativo.",
    "quickSummary": "Formato de arquivo universal para bordado industrial e doméstico, compatível com quase todas as máquinas do mercado.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade da máquina",
      "needleType": "Conforme a matriz",
      "stabilizer": "Conforme o artigo"
    },
    "relatedTerms": [
      "Formatos de Arquivo de Bordado",
      "PES (Formato Brother / Babylock)",
      "JEF (Formato Janome)",
      "EXP (Formato Bernina / Melco)",
      "Ponto de Parada (Stop / Color Change)"
    ],
    "tags": [
      "d-088",
      "dst",
      "tajima",
      "formato de arquivo",
      "formato universal",
      "matriz",
      "software",
      "artrelados"
    ],
    "updatedAt": "2026-08-28",
    "bibliographicReferences": [
      "TAJIMA INDUSTRIES. Tajima DST File Specification & Protocol Standard. Nagoya, 2021.",
      "EMBROIDERY SOFTWARE ASSOCIATION. Universal Machine File Formats: The DST Standard. Atlanta, 2022.",
      "ARTRELADOS. Guia Definitivo de Formatos e Extensões de Arquivos de Bordado. Curitiba, 2024."
    ]
  },
  {
    "id": "d-089-desbobinador-suporte-cone-linha",
    "code": "D-089",
    "term": "Desbobinador / Suporte de Cone de Linha (Thread Stand / Spool Pin)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos desbobinador, suporte, cone e linha.",
    "category": "Equipamentos & Hardware",
    "summary": "Haste vertical com guia de fio suspensa que permite ao cone grande de linha desenrolar suavemente para cima, eliminando trancos e quebras de linha.",
    "definition": "O desbobinador ou suporte externo de cones (thread stand) é um dispositivo mecânico vertical dotado de base com lastro pesado e haste telescópica de metal culminando em um olhal guia-fio suspenso a pelo menos 25 cm a 35 cm acima do topo do carretel. Sua função técnica primária é permitir o desbobinamento axial superior (desenrolamento pelo topo sem rotação física do cone), neutralizando a inércia do peso do cone de 4000 metros e entregando o filamento à bateria de tensores da máquina com tensão residual próxima de zero.",
    "technicalDetails": "Diferencia o desenrolamento tangencial (usado em pequenos carretéis domésticos horizontais de 100m, onde o carretel gira sobre o próprio eixo) do desenrolamento axial vertical (obrigatório para cones industriais cônicos de 1000m a 5000m). O desbobinamento axial requer espaço aéreo vertical livre para que a espiral de saída da linha se desfaça no ar antes de entrar no primeiro tensor, evitando torções e a formação de laços parasitas.",
    "howItWorks": [
      "1. O cone grande de linha de bordar (1000m ou 4000m) é posicionado na base do suporte atrás ou ao lado da máquina.",
      "2. A ponta da linha sobe em linha reta e passa de cima para baixo pelo olhal da haste suspensa do desbobinador.",
      "3. A linha desce suavemente e entra no trajeto normal de passagem de linha da máquina de bordar.",
      "4. Quando a máquina borda a 800 PPM, a linha se desprende do cone em círculos perfeitos no ar, sem puxar o carretel e sem dar trancos."
    ],
    "beginnerExplanation": "É aquela torre ou suporte alto de metal que fica do lado da máquina para segurar os cones grandes de linha. Ele serve para fazer a linha sair por cima do cone bem levinha e solta, sem enroscar no pé do carretel e sem ficar quebrando a linha toda hora.",
    "applications": [
      "Uso indispensável de cones industriais econômicos de 4000 metros em máquinas domésticas de bordar.",
      "Alimentação estável de linhas especiais e delicadas como fios metálicos (ouro/prata) e fios de poliéster trilobal.",
      "Suporte múltiplo de cones para organização de sequências de cores em produção contínua."
    ],
    "characteristics": [
      "Base estável com peso para não tombar com a vibração da máquina.",
      "Haste alta ajustável que garante ângulo perfeito de saída da linha."
    ],
    "commonErrors": [
      "❌ Colocar um cone grande de 4000m deitado no pino horizontal da máquina doméstica, fazendo o carretel travar e arrebentar a linha instantaneamente",
      "❌ Deixar a haste do suporte muito baixa, fazendo a linha raspar na borda plástica do cone e desfiar o fio",
      "❌ Passar a linha com o suporte muito longe da máquina, criando curvatura excessiva e atrito desnecessário"
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 50 pontos com cone grande: Instale um suporte de cone vertical e erga a haste no ponto mais alto possível.",
      "Se a linha metálica estiver enrolando em espiral e dando nós: Coloque uma redinha elástica de proteção (thread net) envolvendo o cone no desbobinador.",
      "Se o cone estiver vibrando e dançando na base: Coloque um feltro circular ou base de borracha sob o cone de linha."
    ],
    "dicaArtrelados": "Se você usa cones grandes de 4000m na sua máquina doméstica, o suporte de cone externo de metal é o melhor investimento do seu ateliê! Mantenha a haste sempre bem esticada para o alto — isso reduz em 90% as quebras de linha e economiza muito dinheiro comprando cones grandes em vez de tubinhos pequenos!",
    "voceSabia": "Cones industriais possuem aquele formato cônico afunilado para cima justamente para permitir que a linha voe livremente para o ar a velocidades de até 1500 pontos por minuto sem que o carretel precise se mover nem 1 milímetro!",
    "practicalExercise": "Monte um cone de 4000 metros no suporte vertical e puxe 2 metros de linha com a mão rapidamente para o alto: repare como a linha desenrola suavemente em espirais fluidas no ar sem nenhum esforço ou tranco.",
    "quickSummary": "Suporte vertical com guia alta que permite usar cones grandes de linha com desenrolamento suave e sem quebras.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade",
      "needleType": "Não se aplica",
      "stabilizer": "Não se aplica"
    },
    "relatedTerms": [
      "Fio de Poliéster Trilobal",
      "Fio Metálico",
      "Tensão da Linha",
      "Redinha de Linha (Thread Net)",
      "Velocidade em PPM"
    ],
    "tags": [
      "d-089",
      "desbobinador",
      "suporte de cone",
      "thread stand",
      "cone de linha",
      "passagem de linha",
      "hardware",
      "artrelados"
    ],
    "origin": "Do português desbobinar (tirar da bobina/carretel) e do latim supportare (sustentar).",
    "updatedAt": "2026-08-28",
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Systems: Vertical Stands vs Horizontal Pins. Utah, 2022.",
      "MADEIRA GARN. Industrial Thread Feeding and Spool Stand Optimization. Freiburg, 2023.",
      "ARTRELADOS. Acessórios Essenciais e Estrutura de Ateliê de Bordados. Curitiba, 2024."
    ]
  }
];


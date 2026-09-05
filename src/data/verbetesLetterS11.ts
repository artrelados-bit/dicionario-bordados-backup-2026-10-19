import { Verbete } from "../types";

export const VERBETES_LETTER_S11: Verbete[] = [
  {
    id: "s-089-sobrecarga-de-densidade-por-cruzamento-de-objetos",
    code: "S-089",
    letter: "S",
    term: "Sobrecarga de Densidade por Cruzamento de Objetos (Overlap Density Accumulation & Heavy Layering)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim super (acima/excesso) e cargare (carregar). Problema clássico de digitalização vetorial não otimizada.",
    summary: "Acúmulo excessivo de camadas de pontos onde dois desenhos se cruzam, gerando uma placa dura que quebra agulhas.",
    definition: "A Sobrecarga de Densidade por Cruzamento de Objetos (Overlap Density Accumulation / Heavy Layering / Stacked Density Penalty) é o acúmulo patológico de múltiplas camadas de pontos de preenchimento, costuras de base e contornos executados na mesma coordenada geográfica do tecido sem a devida aplicação de ferramentas de remoção de sobreposição oculta (Remove Overlaps / Trim Object). Esse excesso faz com que a contagem de penetrações de agulha por milímetro quadrado ultrapasse a capacidade de absorção mecânica do tecido, resultando em uma área espessa, rígida, com perfurações cortantes e elevado risco de quebra de agulhas e linhas.",
    technicalDetails: "Uma área padrão com ponto tatami de 0.40 mm e base tatami já atinge cerca de 6 a 8 camadas de fio. Quando outro objeto sólido é bordado por cima sem corte de sobreposição, o empilhamento atinge mais de 16 camadas de poliéster em menos de 1 mm de espessura, elevando a força de penetração da barra de agulha em mais de 300% e provocando deflexão da lâmina contra a chapa de agulha.",
    beginnerExplanation: "É quando a matriz borda um desenho cheio por cima de outro desenho que já estava todo bordado por baixo, sem 'vazar' o fundo. Fica um morro grosso de linha empilhada que endurece o pano como uma tábua, faz a agulha bater forte e entortar, e pode até rasgar a peça.",
    howItWorks: [
      "1. A programadora desenha o fundo completo de um brasão ou desenho.",
      "2. Em seguida, coloca um texto ou figura sólida por cima sem abrir um buraco no fundo.",
      "3. A máquina borda todo o fundo denso.",
      "4. Quando chega na figura de cima, a agulha fura repetidamente sobre as linhas já costuradas.",
      "5. O atrito extremo aquece a agulha, esmaga o tecido e deforma o alinhamento da matriz."
    ],
    construction: [
      "Camadas vetoriais sobrepostas na árvore de objetos",
      "Ferramenta de divisão e remoção de sobreposição (Remove Hidden Overlaps)",
      "Margem de recuo e sobreposição calibrada (Overlap Margin = 0.8 mm)",
      "Compensação de repuxo nos nós de encaixe"
    ],
    mainTypes: [
      "Sobreposição Total Oculta (Fundo sólido bordado desnecessariamente sob outro sólido)",
      "Sobreposição Parcial em Brasões e Bordas Complexas",
      "Cruzamento de Letras Grandes com Faixas de Fundo"
    ],
    characteristics: [
      "Bordado pesado, armado e desconfortável ao toque",
      "Furos cortantes e rasgos nas bordas da área sobreposta",
      "Batidas secas e estalos fortes da máquina ao passar pela região"
    ],
    applications: [
      "Otimização de matrizes complexas e brasões institucionais.",
      "Programação de logotipos de empresas em camisas leves.",
      "Redução de custos de produção e tempo de máquina."
    ],
    commonErrors: [
      "❌ Colocar letras cheias em cima de um círculo sólido sem usar a função 'Remover Sobreposição'",
      "❌ Cortar a sobreposição sem deixar margem de encaixe (0.8 mm), fazendo abrir um vão branco entre as cores",
      "❌ Tentar compensar a dureza afrouxando a tensão da máquina em vez de corrigir a matriz"
    ],
    troubleshootingTips: [
      "Se a máquina bater com força e fizer um barulho de martelada: A matriz tem sobreposição pesada; abra o arquivo no software e use a ferramenta 'Remover Sobreposições'.",
      "Se abrir um vão no tecido onde as cores se encontram: Adicione uma sobreposição de 0.8 mm a 1.0 mm para compensar o repuxo das linhas.",
      "Se a agulha quebrar ou entortar na passagem de letras sobrepostas: Elimine o preenchimento do fundo sob as letras."
    ],
    dicaArtrelados: "Nunca borde desenho sólido em cima de outro desenho sólido! Use sempre a ferramenta 'Remover Sobreposição' no seu programa de matrizes, deixando uma beiradinha de encaixe de 1 mm. A peça fica macia, leve de usar e sua máquina trabalha macia e silenciosa!",
    voceSabia: "Eliminar as sobreposições ocultas em uma matriz comercial de jaqueta pode reduzir o tempo de bordado de 35 minutos para apenas 18 minutos, economizando mais de 40% de linha e energia!",
    practicalExercise: "No seu software, desenhe um círculo azul de 5 cm e uma estrela amarela de 4 cm em cima. Use o comando 'Remover Sobreposição' e veja como o software abre uma janela na forma exata da estrela dentro do círculo azul.",
    quickSummary: "Empilhamento excessivo de camadas de pontos que endurece o bordado e quebra agulhas, exigindo a remoção de sobreposições no software.",
    recommendedSettings: {
      density: "Densidade única de 0.40 mm com sobreposição de encaixe de 0.8 mm",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela recortável média"
    },
    relatedTerms: [
      "Remover Sobreposição (Remove Overlaps)",
      "Densidade de Ponto (Stitch Density)",
      "Sequenciamento de Camadas",
      "Deflexão de Agulha",
      "Compensação de Repuxo"
    ],
    tags: ["s-089", "sobrecarga", "sobreposicao", "densidade", "camadas", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Overlap Management and Stitch Economy Guidelines. Sydney, 2023.",
      "PULSE MICROSYS. Vector Optimization and Layer Trimming Algorithms. Toronto, 2022.",
      "ARTRELADOS. Otimização Avançada de Matrizes: Como Eliminar Sobreposições e Reduzir Custos. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-090-selecao-de-espessura-de-entretela-por-gramatura",
    code: "S-090",
    letter: "S",
    term: "Seleção de Espessura de Entretela por Gramatura (Stabilizer Weight Selection Matrix)",
    level: "Iniciante 🟢",
    category: "Entretelas e Estabilizadores",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim selectio (escolha) e do francês grammage (massa em gramas por metro quadrado). Critério de engenharia de materiais têxteis.",
    summary: "Escolha da gramatura ideal da entretela (de 35g a 120g/m²) de acordo com o peso do tecido e a quantidade de pontos do bordado.",
    definition: "A Seleção de Espessura de Entretela por Gramatura (Stabilizer Weight Selection Matrix / Grammage-to-Stitch-Count Correlation) é o método técnico de dimensionamento da densidade superficial de massa da entretela (expressa em gramas por metro quadrado - g/m²), correlacionando o peso do tecido base e a densidade total de pontos da matriz de bordado. A regra geral de equilíbrio dita que a entretela deve absorver as forças de tração do fio de bordar proporcionando rigidez dimensional temporária ou permanente sem sobrecarregar a flexibilidade natural da peça.",
    technicalDetails: "Classificação padrão das entretelas por gramatura: Leves (30 a 45 g/m² - para tecidos finos e matrizes de até 5.000 pontos), Médias (50 a 70 g/m² - para polos, sarjas e matrizes de 5.000 a 15.000 pontos), Pesadas (80 a 120 g/m² - para jaquetas, bonés, emblemas e matrizes com mais de 20.000 pontos). Em tecidos com alto elastano (>5%), a gramatura deve ser associada a entretelas recortáveis (Cutaway) multidirecionais.",
    beginnerExplanation: "É saber escolher o 'peso' ou a grossura da entretela para cada trabalho: tecidos levinhos com desenhos simples usam entretela fininha (40g); já camisetas polo e desenhos médios usam entretela média (60g); e jaquetas grossas ou bordados cheios de pontos usam entretela pesada (80g ou mais).",
    howItWorks: [
      "1. A bordadeira analisa a espessura e a elasticidade do tecido que será bordado.",
      "2. Verifica a quantidade de pontos e o tipo de preenchimento da matriz (tatami denso ou ponto corrido leve).",
      "3. Consulta a matriz de gramatura para definir se usará 1 folha de 80g ou 2 folhas de 45g.",
      "4. Enquadra a entretela sob o tecido garantindo sustentação perfeita.",
      "5. O bordado é executado sem repuxamento e a peça mantém o caimento ideal após a lavagem."
    ],
    construction: [
      "Fibras não-tecidas (TNT) de celulose e poliéster",
      "Distribuição isotrópica de fibras (resistência multidirecional)",
      "Classificação por peso superficial: 35g, 45g, 60g, 80g, 100g e 120g/m²",
      "Acabamento resinado ou termocolante"
    ],
    mainTypes: [
      "Gramatura Leve (30g a 45g/m² - Tecidos delicados e linho)",
      "Gramatura Média (50g a 70g/m² - Camisas polo, malha piquet, algodão)",
      "Gramatura Pesada (80g a 120g/m² - Bonés, jaquetas, emblemas e patches)",
      "Composição por Múltiplas Camadas (2x 40g em vez de 1x 80g)"
    ],
    characteristics: [
      "Sustentação sob medida sem deixar a roupa dura como cartolina",
      "Eliminação de dobras e enrugamentos ao redor do bordado",
      "Estabilidade dimensional garantida do primeiro ao último ponto"
    ],
    applications: [
      "Padronização de processos produtivos em ateliês e fábricas de bordado.",
      "Bordados em malhas elásticas, tecidos finos e tecidos pesados.",
      "Cálculo de custos de insumos por peça produzida."
    ],
    commonErrors: [
      "❌ Usar uma entretela fina de 35g para bordar um brasão de 25.000 pontos em malha, fazendo o tecido rasgar no meio",
      "❌ Usar entretela pesada de 120g em body de bebê, deixando o avesso áspero e duro na pele da criança",
      "❌ Achar que dobrar uma entretela de má qualidade substitui uma boa entretela de gramatura calibrada"
    ],
    troubleshootingTips: [
      "Se o bordado repuxar e fizer ondas em volta do desenho: A gramatura da entretela foi insuficiente; troque para uma entretela de 70g ou use duas camadas cruzadas.",
      "Se a entretela rasgar antes do bordado terminar: O tecido está puxando demais; substitua a entretela rasgável por uma recortável (Cutaway) de 60g.",
      "Se a roupa de bebê ficar dura: Use entretela de malha termocolante de 40g no verso para dar maciez absoluta."
    ],
    dicaArtrelados: "Para camisas polo e malhas de uniforme: a combinação campeã do ateliê é 1 folha de entretela recortável (Cutaway) de 60g a 70g! A camisa pode ser lavada 100 vezes na máquina que o bordado continua lisinho e perfeito para sempre!",
    voceSabia: "As fábricas de entretelas industriais testam a resistência de suas mantas utilizando canhões de ar que medem a pressão necessária para romper o papel não-tecido em diferentes direções!",
    practicalExercise: "Separe no seu ateliê amostras de entretela de diferentes gramaturas (40g, 60g, 80g). Sinta com os dedos a diferença de espessura e tente rasgar cada uma para entender a resistência mecânica de cada peso.",
    quickSummary: "Escolha da grossura da entretela (35g a 120g/m²) proporcional ao tecido e à quantidade de pontos para garantir firmeza e maciez.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível com tecido",
      stabilizer: "35g a 120g/m² conforme o projeto"
    },
    relatedTerms: [
      "Entretela Rasgável (Tearaway)",
      "Entretela Recortável (Cutaway)",
      "Gramatura Têxtil (GSM)",
      "Colocação no Bastidor",
      "Compensação de Repuxo"
    ],
    tags: ["s-090", "entretela", "gramatura", "espessura", "estabilizador", "tecidos", "artrelados"],
    bibliographicReferences: [
      "FREUDENBERG NONWOVENS. Technical Stabilizer Selection Guide for Industrial Embroidery. Weinheim, 2022.",
      "MADEIRA GARN. Stabilizers and Backings: Weight, Structure and Performance Matrix. Freiburg, 2021.",
      "ARTRELADOS. Guia Definitivo de Entretelas: Tipos, Gramaturas e Aplicações no Bordado Moderno. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-091-superficie-de-aplique-em-tecido-de-reforco",
    code: "S-091",
    letter: "S",
    term: "Superfície de Aplique em Tecido de Reforço (Appliqué Patch Placement & Tackdown Stitching)",
    level: "Iniciante 🟢",
    category: "Técnicas de Aplique e Efeitos Especiais",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do francês appliquer (colocar sobre/aplicar) e do latim superficies. Técnica tradicional adaptada ao controle numérico computadorizado.",
    summary: "Sequência programada de 3 passos para fazer apliques perfeitos: marcação, costura de fixação e acabamento em cordão.",
    definition: "A Superfície de Aplique em Tecido de Reforço (Appliqué Patch Placement & Tackdown Stitching / Sequência de Aplicação Digital / Appliqué Sequence) é o método padronizado de digitalização e costura estruturado em três etapas consecutivas de execução: 1ª Linha de Posicionamento (*Placement Line* ou Marcação na peça base), 2ª Linha de Fixação (*Tackdown Stitch* que prende o retalho de tecido recortado sobre a marcação) e 3ª Coluna de Acabamento (*Cover Stitch*, usualmente em cordão de cetim denso, ponto caseado ou ponto cheio com recobrimento total das bordas cortadas).",
    technicalDetails: "A linha de marcação utiliza ponto corrido simples de 2,5 mm. A linha de fixação deve ter recuo de 0,4 mm para o interior e utilizar ponto corrido duplo ou zigue-zague aberto de 1,2 mm de largura. A coluna de cobertura deve ter largura mínima de 3,0 mm a 4,0 mm e densidade de 0.38 mm, garantindo que o corte do tecido fique 100% selado sob os pontos de cetim.",
    beginnerExplanation: "É a famosa técnica do aplique em 3 passos na bordadeira: primeiro a máquina faz um desenho fininho mostrando onde colocar o paninho; depois você coloca o paninho por cima e a máquina prende com uma costura; você corta a sobra com a tesourinha e a máquina faz o acabamento lindo de ponto cheio por cima da borda.",
    howItWorks: [
      "1. A máquina borda a Linha de Marcação no tecido principal preso no bastidor.",
      "2. A máquina para automaticamente (comando Stop) e o operador posiciona o tecido do aplique por cima da marcação.",
      "3. Aperta-se o botão Start e a máquina executa a Linha de Fixação (Tackdown).",
      "4. A máquina para novamente; com uma tesourinha de ponta curva (peliça), corta-se o excesso do tecido bem rente à costura.",
      "5. A máquina retoma o bordado e executa o cordão de acabamento em ponto cheio cobrindo a borda cortada.",
      "6. O aplique fica perfeito, sem desfiamentos e com alto valor estético."
    ],
    construction: [
      "1º Objeto: Linha guia de posicionamento (corrido simples)",
      "Comando de Parada de Máquina (Stop / Color Change)",
      "2º Objeto: Linha de fixação e assentamento (Tackdown)",
      "Comando de Parada para recorte manual",
      "3º Objeto: Cordão de acabamento acetinado ou caseado"
    ],
    mainTypes: [
      "Aplique Tradicional com Recorte no Bastidor",
      "Aplique Pré-Cortado a Laser ou Plotter de Recorte",
      "Aplique Revertido com Termocolante Permanente"
    ],
    characteristics: [
      "Economia gigantesca de pontos em desenhos grandes",
      "Toque macio e leve mesmo em áreas extensas",
      "Possibilidade de combinar estampas e texturas variadas de tecidos"
    ],
    applications: [
      "Enxovais de bebê, fraldas, toalhas infantis e almofadas.",
      "Letras grandes e números esportivos em jaquetas universitárias.",
      "Customização de bolsas, nécessaires e peças de decoração."
    ],
    commonErrors: [
      "❌ Esquecer de programar a parada da máquina entre a marcação e a fixação, fazendo a máquina costurar direto",
      "❌ Cortar o tecido longe da costura, deixando fiapos aparecendo para fora do cordão de acabamento",
      "❌ Puxar o tecido ao recortar com a tesoura, deformando o tecido preso no bastidor"
    ],
    troubleshootingTips: [
      "Se os fiapos do paninho ficarem saindo para fora do cordão: Corte mais rente à costura usando tesoura curva e aumente a largura do cordão de cetim para 3.5 mm no software.",
      "Se o paninho do aplique enrugar ao costurar: Use termocolante definitivo no avesso do retalho antes de aplicar.",
      "Se a máquina não parar para você colocar o tecido: Verifique se você trocou a cor do objeto no programa (a troca de cor gera a parada automática na máquina)."
    ],
    dicaArtrelados: "O segredo do aplique perfeito sem fiapos: passe termocolante no avesso do tecido do aplique antes de bordar! Na hora de cortar com a tesourinha curva, o tecido fica firme como um papel e não desfia nada! O acabamento em ponto cheio fica lisinho como de loja de shopping!",
    voceSabia: "A técnica de aplique existe desde a Idade Média, quando os nobres usavam pedaços de veludo e seda costurados sobre estandartes e brasões militares para economizar meses de bordado manual!",
    practicalExercise: "Crie no seu programa de matrizes uma forma de coração simples usando o assistente automático de aplique (Appliqué Tool). Observe as 3 etapas geradas automaticamente na lista de objetos.",
    quickSummary: "Sequência técnica de marcação, fixação e acabamento acetinado para aplicar tecidos sobre o bordado com perfeição.",
    recommendedSettings: {
      density: "Cordão de acabamento com 0.38 mm de densidade e 3.5 mm de largura",
      speedPPM: "700 a 800 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela rasgável ou termocolante"
    },
    relatedTerms: [
      "Tackdown (Costura de Fixação)",
      "Placement Line (Linha de Marcação)",
      "Ponto Caseado (Blanket Stitch)",
      "Tesoura de Peliça / Curva",
      "Termocolante para Bordado"
    ],
    tags: ["s-091", "aplique", "tackdown", "placement", "recorte", "patch", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Automated Appliqué Tools and Fabrication Methods. Sydney, 2023.",
      "BERNINA INTERNATIONAL. Creative Appliqué and Edge Finish Techniques. Steckborn, 2022.",
      "ARTRELADOS. O Guia Completo do Aplique Perfeito no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-092-supressao-de-micro-pontos-em-curvas-fechadas",
    code: "S-092",
    letter: "S",
    term: "Supressão de Micro-Pontos em Curvas Fechadas (Short Stitch Filtering in Tight Arcs)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim suppressio (ato de anular/remover) e do grego mikros (pequeno). Algoritmo avançado de geometria computacional para bordado digital.",
    summary: "Recurso inteligente que elimina o acúmulo de pontinhos na curva de dentro de letras e desenhos, evitando nós duros.",
    definition: "A Supressão de Micro-Pontos em Curvas Fechadas (Short Stitch Generation & Tight Arc Filtering / Compensação de Raio Interno de Cetim / Algoritmo de Ponto Curto) é a rotina algorítmica de digitalização que redistribui e alterna os pontos de penetração no raio interno de colunas de cetim que realizam curvas acentuadas. Como o comprimento do arco interno é muito menor que o arco externo, se todos os pontos penetrarem na mesma borda interna, cria-se uma concentração excessiva de furos e fios no mesmo ponto físico, perfurando o tecido como um picote e travando a agulha.",
    technicalDetails: "O algoritmo divide os pontos consecutivos da coluna de cetim em frações alternadas: um ponto penetra na borda interna total, o próximo recua para 1/2 ou 2/3 da largura da coluna, e o terceiro volta à borda. Isso reduz a densidade de penetrações no raio interno em até 60%, mantendo a cobertura total no raio externo sem criar o indesejado 'efeito serra' ou 'nó cego'.",
    beginnerExplanation: "Quando a máquina faz uma curva bem fechadinha (como na curva da letra 'S' ou de uma folhinha), o lado de dentro da curva é muito apertado. Se a máquina furar todos os pontos no mesmo buraquinho de dentro, ela rasga o pano e quebra a linha. Esse recurso faz a máquina intercalar os pontos para a curva ficar macia e perfeitamente desenhada.",
    howItWorks: [
      "1. A programadora desenha uma curva fechada com coluna de ponto cheio (cetim).",
      "2. O software calcula a diferença de comprimento entre o raio externo e o raio interno da curva.",
      "3. Ativa-se a função automática de 'Pontos Curtos' (Auto Short Stitches).",
      "4. O software programa pontos longos alternados com pontos que param no meio do caminho da curva.",
      "5. A máquina borda a curva suavemente sem concentrar linha no lado de dentro.",
      "6. A curva fica com brilho acetinado contínuo, macia e sem furar o tecido."
    ],
    construction: [
      "Cálculo de curvatura angular por spline vetorial",
      "Parâmetro de ativação de ponto curto (comprimento mínimo < 1.2 mm)",
      "Alternância de penetração fracionada (50% a 75% da largura)",
      "Distribuição proporcional de densidade angular"
    ],
    mainTypes: [
      "Pontos Curtos Automáticos em Curvas de Cetim (Auto Short Stitches)",
      "Filtragem Manual de Raio Interno para Letras Minúsculas",
      "Supressão Gradual em Espirais e Volutas Rococó"
    ],
    characteristics: [
      "Eliminação de furos e rasgos no lado interno de curvas",
      "Curvas perfeitamente lisas e uniformes sem acúmulo de volume",
      "Menor aquecimento da agulha e redução drástica de quebras de linha"
    ],
    applications: [
      "Letras cursivas com laços e curvas fechadas (letras l, e, g, s).",
      "Bordado de arabescos, volutas, flores e monogramas clássicos.",
      "Bordados em tecidos delicados que rasgam facilmente com furos repetidos."
    ],
    commonErrors: [
      "❌ Desativar a função de 'Pontos Curtos' achando que a curva vai ficar mais cheia, resultando em tecido furado e rasgado",
      "❌ Programar curvas de 90° em ponto de cetim sem usar cantos em esquadria (Mitre) ou divisão em gomos",
      "❌ Deixar a densidade muito alta (> 0.35 mm) em curvas de raio menor que 3 mm"
    ],
    troubleshootingTips: [
      "Se o tecido estiver rasgando e abrindo um buraco no lado de dentro da curva: Ative a opção 'Pontos Curtos' (Short Stitches) nas propriedades da coluna de cetim no software.",
      "Se a linha estiver arrebentando toda vez que faz a curva da letra: Reduza a densidade no software e diminua a velocidade da máquina para 700 PPM.",
      "Se o lado de fora da curva estiver ralo: Diminua o espaçamento geral do cetim mas mantenha os pontos curtos ativados para proteger o lado interno."
    ],
    dicaArtrelados: "Deixe a opção 'Pontos Curtos' (Short Stitches) SEMPRE ativada no seu software de matrizes! É ela que garante que a máquina faça curvas perfeitamente redondas em letras cursivas sem picotar o tecido como se fosse um papel de picote!",
    voceSabia: "Nas primeiras máquinas de bordar manuais, as bordadeiras faziam essa compensação no olho, puxando o bastidor mais rápido por fora e segurando devagar por dentro da curva!",
    practicalExercise: "No seu programa de bordado, desenhe um 'S' cursivo com coluna de cetim. Abra as propriedades do objeto, marque e desmarque a opção 'Pontos Curtos' e observe na tela como os pontos do lado de dentro se organizam para não amontoar.",
    quickSummary: "Algoritmo que alterna os pontos no lado interno de curvas fechadas para evitar concentração excessiva de furos e quebra de agulhas.",
    recommendedSettings: {
      density: "0.40 mm com Auto Short Stitch ativado (limiar de 1.5 mm)",
      speedPPM: "700 a 800 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela recortável média"
    },
    relatedTerms: [
      "Ponto Cetim / Ponto Cheio (Satin Stitch)",
      "Canto em Esquadria (Mitred Corner)",
      "Densidade Angular",
      "Micro-Pontos (Short Stitches)",
      "Digitalização de Fontes"
    ],
    tags: ["s-092", "micro-pontos", "curvas", "pontos curtos", "cetim", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Cornering, Tight Arcs and Short Stitch Mathematical Processing. Sydney, 2023.",
      "PULSE MICROSYS. Curve Geometry and Stitch Density Optimization in Lettering. Toronto, 2022.",
      "ARTRELADOS. Engenharia de Curvas e Cantos Perfeitos na Digitalização de Matrizes. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-093-solubilidade-termica-de-entretela-termodissoluvel",
    code: "S-093",
    letter: "S",
    term: "Solubilidade Térmica de Entretela Termodissolúvel (Thermal Film Disintegration / Heat-Away Stabilizer)",
    level: "Intermediário 🟡",
    category: "Entretelas e Estabilizadores",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim solubilis (que se dissolve) e do grego thermos (calor). Inovação química de polímeros termossensíveis para acabamento têxtil a seco.",
    summary: "Película estabilizadora que desaparece e esfarela ao passar com o ferro quente a seco, sem precisar molhar o tecido.",
    definition: "A Solubilidade Térmica de Entretela Termodissolúvel (Heat-Away Film Degradation / Termodecomposição de Estabilizador a Seco / Película Termossensível) é a propriedade físico-química de filmes ou mantas não-tecidas fabricadas com polímeros sintéticos termodegradáveis (como polietileno modificado de baixa densidade ou etilenovinilacetato modificado) que perdem completamente sua coesão molecular e se transformam em pó quebradiço quando submetidos ao calor seco de um ferro de passar ou prensa térmica entre 120°C e 140°C.",
    technicalDetails: "Ao contrário da entretela hidrossolúvel (que requer lavagem com água), o filme termodissolúvel desintegra-se por pirólise suave controlada em menos de 10 a 20 segundos de aplicação térmica sem vapor. Os resíduos carbonizados em micro-pó são facilmente removidos com uma escova de cerdas macias, sendo o estabilizador ideal para tecidos nobres que mancham ou perdem a goma com água (como sedas puras, veludos molhados, couros e linhos engomados).",
    beginnerExplanation: "É um plástico especial de bordar que 'some' no calor do ferro de passar a seco! Você borda o desenho em cima dele e, depois de pronto, passa o ferro quente por cima: o plástico vira uma poeirinha marrom que você só passa uma escovinha e limpa tudo, sem precisar molhar nem lavar a peça.",
    howItWorks: [
      "1. A bordadeira enquadra o tecido delicado com a entretela termodissolúvel no bastidor.",
      "2. O bordado (como um Richelieu ou renda) é executado normalmente.",
      "3. A peça é retirada do bastidor e colocada sobre a tábua de passar com o avesso para cima.",
      "4. Aplica-se o ferro seco (sem vapor) aquecido na temperatura média (algodão/seda) fazendo movimentos circulares suaves.",
      "5. O filme plástico ferve, encolhe e se desfaz em minúsculas partículas secas.",
      "6. Passa-se uma escovinha macia e a peça fica limpa, com o bordado perfeito e o tecido impecável a seco."
    ],
    construction: [
      "Polímero sintético termodegradável de estrutura cristalina sensível",
      "Espessura padrão entre 30 e 50 micras",
      "Faixa de fusão/degradação térmica entre 120°C e 150°C",
      "Isento de compostos tóxicos e solúvel a seco"
    ],
    mainTypes: [
      "Filme Plástico Termodissolúvel Transparente (Heat-Away Film)",
      "Manta Não-Tecida Termodissolúvel (Heat-Away Non-Woven)",
      "Película Dupla para Rendas FSL a Seco"
    ],
    characteristics: [
      "Remoção 100% a seco sem utilização de uma única gota de água",
      "Preservação absoluta da textura de sedas, veludos e tecidos mancháveis",
      "Rapidez e praticidade na finalização de peças finas"
    ],
    applications: [
      "Bordados em vestidos de festa de seda pura, tafetá e crepe.",
      "Bordados em jaquetas de couro legítimo e sintético.",
      "Rendas Richelieu em tecidos nobres que não podem ir para a lavanderia."
    ],
    commonErrors: [
      "❌ Usar ferro com vapor (a umidade gruda o filme no tecido e estraga o efeito)",
      "❌ Deixar o ferro parado no mesmo ponto por muito tempo, queimando a linha de poliéster do bordado",
      "❌ Tentar rasgar o plástico frio à força em vez de aplicar o ferro quente"
    ],
    troubleshootingTips: [
      "Se o plástico virar uma goma grudenta: O ferro estava frio ou com vapor; seque a base do ferro, aumente um pouco a temperatura e passe novamente a seco.",
      "Se sobrar poeirinha marrom nos cantinhos do bordado: Passe uma escova de dentes macia e seca para soltar os resíduos instantaneamente.",
      "Se a linha do bordado perder o brilho: Use um paninho de algodão fino seco entre o ferro e o bordado para proteger o brilho do fio."
    ],
    dicaArtrelados: "Para limpar vestidinhos de festa de seda ou tecidos que mancham com água: a entretela termodissolúvel a seco é mágica! Use sempre o ferro SEM VAPOR em movimentos circulares. Em 15 segundos o plástico esfarela todinho e você só passa uma escovinha macia. Fica um luxo!",
    voceSabia: "Esse tipo de película foi desenvolvido nos anos 90 para os ateliês de alta costura de Paris e Milão que precisavam bordar rendas em vestidos de noiva de seda sem molhar a peça nem uma vez!",
    practicalExercise: "Pegue um pedacinho de filme termodissolúvel, coloque sobre a tábua e encoste a ponta do seu ferro seco quente. Observe como o plástico encolhe instantaneamente e se transforma em um pozinho quebradiço ao toque.",
    quickSummary: "Estabilizador termossensível que se desintegra em pó sob o calor do ferro de passar a seco, ideal para tecidos finos que não podem molhar.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "70/10 Ponta Aguda",
      stabilizer: "Filme termodissolúvel a seco (degradação a 130°C)"
    },
    relatedTerms: [
      "Entretela Hidrossolúvel (Water Soluble)",
      "Renda Richelieu",
      "Bordado em Seda",
      "Acabamento a Seco",
      "Estabilizadores Especiais"
    ],
    tags: ["s-093", "termodissoluvel", "heat-away", "entretela a seco", "calor", "ferro", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS & STABILIZERS. Heat-Away Film & Dry-Removal Stabilizers Application Guide. Freiburg, 2022.",
      "GUNOLD EMBROIDERY SUPPLIES. Thermogaze and Heat-Disintegrating Backings Manual. Stockstadt, 2021.",
      "ARTRELADOS. Guia de Estabilizadores Especiais: Hidrossolúveis, Termodissolúveis e Técnicas a Seco. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-094-sincronizacao-de-fase-de-alimentacao-do-fio",
    code: "S-094",
    letter: "S",
    term: "Sincronização de Fase de Alimentação do Fio (Thread Take-up Lever Phase Timing)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do grego syn (junto) e chronos (tempo) e do latim alimentatio. Parâmetro mecatrônico de cinemática de eixos em máquinas de ponto fixo (Lockstitch).",
    summary: "Relação mecânica exata entre a subida da agulha e a puxada da alavanca estica-fio para apertar o ponto na hora certa.",
    definition: "A Sincronização de Fase de Alimentação do Fio (Thread Take-up Lever Phase Timing / Ciclo Cinemático do Estica-Fio / Sincronismo de Recolhimento) é o ajuste mecânico angular do eixo de manivela da alavanca estica-fio em relação ao eixo principal (Main Shaft) e à barra de agulha. Esse sincronismo determina o instante exato em que a alavanca estica-fio atinge o ponto morto superior para recolher a folga de linha puxada pela lançadeira, puxar a linha de baixo para o centro do tecido e assentar o nó de amarração com a tensão correta.",
    technicalDetails: "Durante um ciclo de 360° do eixo principal, o estica-fio deve atingir seu ponto mais alto entre 50° e 65° após o ponto morto superior da agulha. Se estiver adiantado (< 45°), o fio é puxado antes de ser liberado pelo bico da lançadeira, provocando quebra violenta de linha; se estiver atrasado (> 75°), a linha fica frouxa no avesso formando laços ('ninhos de passarinho') mesmo com os discos tensores apertados.",
    beginnerExplanation: "É o casamento de tempo perfeito entre a agulha e aquele bracinho de metal que fica subindo e descendo na frente da máquina (o estica-fio). Quando a agulha sobe, o estica-fio sobe junto na fração de segundo exata para puxar a linha e dar o 'apertãozinho' final que deixa o ponto perfeito no tecido.",
    howItWorks: [
      "1. A agulha desce e leva a linha para baixo do tecido.",
      "2. A lançadeira gira e pesca o laço de linha superior, abrindo-o ao redor da caixa de bobina.",
      "3. O estica-fio desce para fornecer a folga de linha necessária para a lançadeira dar a volta completa.",
      "4. No momento exato em que a linha escapa da lançadeira, o estica-fio sobe rapidamente com força constante.",
      "5. Ele recolhe todo o excesso de linha e puxa o nó para dentro do tecido.",
      "6. O ponto fecha firme, liso e sem nenhuma folga sobrando.",
      "7. O ciclo se repete até 1.000 vezes por minuto com sincronismo milimétrico."
    ],
    construction: [
      "Alavanca estica-fio em aço temperado de alta resistência dinâmica",
      "Came de acionamento excêntrico acoplado ao eixo principal",
      "Rolamentos de esferas blindados de alta rotação",
      "Guia-fio de cerâmica polida no orifício de passagem"
    ],
    mainTypes: [
      "Sincronismo de Estica-Fio Industrial por Came Excêntrico",
      "Sistema de Estica-Fio Eletrônico com Ajuste de Curso Dinâmico",
      "Estica-Fio Articulado Duplo para Alta Velocidade"
    ],
    characteristics: [
      "Formação de pontos 100% firmes e regulares em qualquer velocidade",
      "Eliminação de laçadas soltas e nós no avesso da peça",
      "Prevenção de quebra de linha por choque mecânico com a lançadeira"
    ],
    applications: [
      "Calibração de cabeçotes industriais após desmontagem ou manutenção.",
      "Solução de problemas crônicos de pontos frouxos que não respondem à tensão.",
      "Ajuste fino de máquinas de alta performance (1.000 a 1.200 PPM)."
    ],
    commonErrors: [
      "❌ Montar o came do estica-fio fora do ponto após trocar correia ou rolamento",
      "❌ Apertar os discos de tensão no máximo achando que vai resolver ponto frouxo causado por estica-fio atrasado",
      "❌ Deixar linha enrolada no eixo traseiro da alavanca estica-fio"
    ],
    troubleshootingTips: [
      "Se o avesso estiver cheio de laçadas frouxas mesmo com o tensor apertado: O estica-fio está atrasado e não está puxando a linha a tempo; chame o técnico para calibrar o sincronismo do came.",
      "Se a linha estalar e arrebentar exatamente no momento em que a agulha sobe: O estica-fio está adiantado e puxando a linha enquanto a lançadeira ainda está segurando o fio.",
      "Se a máquina fizer um ruído metálico ritmado no cabeçote: Verifique se não há folga radial na bucha da manivela do estica-fio."
    ],
    dicaArtrelados: "Aquele bracinho de metal que sobe e desce na frente da sua máquina é o verdadeiro coração do ponto bonito! Nunca force a passagem de linha e mantenha a canaleta dele sempre limpa sem fiapos. Ele é o responsável por dar aquele puxãozinho mágico que deixa o bordado impecável!",
    voceSabia: "Em uma máquina bordando a 1.000 pontos por minuto, a alavanca estica-fio sobe e desce quase 17 vezes por segundo, atingindo acelerações superiores a 50 vezes a força da gravidade!",
    practicalExercise: "Com a máquina desligada, gire o volante manual lentamente: observe como a alavanca estica-fio desce quando a agulha entra no tecido e como ela dá uma puxada rápida para cima exatamente no momento em que a linha sai de baixo da lançadeira.",
    quickSummary: "Sincronismo mecânico entre a agulha e a alavanca estica-fio que recolhe a folga de linha e aperta o ponto com precisão.",
    recommendedSettings: {
      speedPPM: "800 a 1000 PPM",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Alavanca Estica-Linha (Take-up Lever)",
      "Sincronismo de Lançadeira (Hook Timing)",
      "Tensão Superior de Linha",
      "Ponto Fixo (Lockstitch)",
      "Manutenção Preventiva"
    ],
    tags: ["s-094", "sincronizacao", "estica-fio", "alimentacao de linha", "mecanica", "cinematica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Main Shaft Kinematics & Take-up Lever Phase Timing Standards. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL EMBROIDERY. Mechanical Timing and Stitch Tightening Dynamics. Ichinomiya, 2021.",
      "ARTRELADOS. Manual de Engenharia Mecânica de Máquinas de Bordar: Eixos, Cames e Sincronismos. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-095-suavizacao-de-borda-por-ponto-plumetis",
    code: "S-095",
    letter: "S",
    term: "Suavização de Borda por Ponto Plumetis (Plumetis Feathered Edge Shading)",
    level: "Avançado 🔴",
    category: "Técnicas de Aplique e Efeitos Especiais",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do francês plumetis (bordado leve como pluma/pena) e do latim suavis. Técnica artística clássica da corte francesa adaptada à pintura digital com agulha.",
    summary: "Técnica de pontos acetinados com pontas desiguais e alternadas que misturam cores e criam efeito de pintura realista.",
    definition: "A Suavização de Borda por Ponto Plumetis (Plumetis Feathered Edge Shading / Ponto Pluma Digital / Efeito Borda Dentada / Jagged Satin Blending) é o método técnico de programação de colunas de ponto de cetim ou tatami em que as extremidades dos pontos em uma ou ambas as margens não terminam em uma linha reta contínua, mas sim em comprimentos aleatórios e intercalados (efeito denteado ou pluma). Isso permite que uma segunda camada de cor diferente penetre entre os intervalos vazios da primeira camada, gerando uma transição cromática contínua, suave e realista (pintura com agulha / *needle painting*).",
    technicalDetails: "A amplitude de variação do comprimento do ponto plumetis é configurada no software entre 20% e 60% da largura total da coluna. A densidade da primeira camada é aliviada para 0.60 mm a 0.80 mm (densidade aberta), permitindo que a camada subsequente de tom vizinho se entrelace perfeitamente sem criar elevação de relevo ou sobrecarga de linha.",
    beginnerExplanation: "É uma técnica linda de programação onde as pontinhas dos pontos ficam 'despenteadas' de propósito, parecendo penas de pássaro. Assim, quando você borda uma cor por cima da outra (por exemplo, amarelo e laranja), as linhas se misturam suavemente como se fossem tinta de aquarela em um quadro.",
    howItWorks: [
      "1. A programadora desenha a primeira área de cor (ex: amarelo claro da pétala de uma flor).",
      "2. Ativa a função 'Borda Dentada / Plumetis' (Jagged Edge / Feathering) na borda de transição.",
      "3. Configura o espaçamento mais aberto (0.65 mm) para deixar vãos entre os pontos.",
      "4. Desenha a segunda cor (ex: laranja) com a borda denteada sobreposta entrando nos vãos da primeira cor.",
      "5. A máquina borda as duas cores sucessivamente.",
      "6. A luz reflete no bordado criando um degradê perfeito e hiper-realista sem linhas divisórias duras."
    ],
    construction: [
      "Vetor de coluna de cetim ou preenchimento tatami",
      "Algoritmo de variação randômica de comprimento terminal (Random Edge Length)",
      "Gradiente de densidade direcional",
      "Camadas sobrepostas com ângulo de ponto convergente"
    ],
    mainTypes: [
      "Plumetis de Borda Única (Single Edge Feathering para Pétalas e Folhas)",
      "Plumetis Duplo (Both Edges Feathering para Sombras e Degradês Centrais)",
      "Plumetis com Ponto Tatami Longo para Pelagens de Animais"
    ],
    characteristics: [
      "Mistura de cores incrivelmente realista e artística",
      "Eliminação de faixas e blocos duros de cor",
      "Toque leve, macio e maleável na peça final"
    ],
    applications: [
      "Bordados realistas de animais (olhos, pelos, penas de pássaros).",
      "Flores botânicas sombreadas, pétalas de rosas e folhagens.",
      "Retratos humanos bordados e paisagens de arte têxtil."
    ],
    commonErrors: [
      "❌ Manter a densidade fechada padrão (0.40 mm) nas duas camadas, criando um bolo grosso e duro de linha",
      "❌ Bordar as duas cores com ângulos de ponto totalmente cruzados em 90°, perdendo o efeito de mesclagem suave",
      "❌ Usar cores com contraste extremo (preto e branco puro) sem uma cor intermediária de transição"
    ],
    troubleshootingTips: [
      "Se o degradê parecer duas faixas separadas: Aumente a profundidade da variação dos dentes (Feather Depth) para pelo menos 3.0 mm no software.",
      "Se o bordado ficar muito grosso no meio da mistura: Aumente o espaçamento de ambas as camadas para 0.65 mm a 0.75 mm.",
      "Se a linha quebrar na transição: Verifique se não há micro-pontos acumulados nas pontas mais curtas dos dentes."
    ],
    dicaArtrelados: "Para fazer pétalas de flores que parecem vivas e pintadas à mão: use o ponto plumetis com linhas de viscose brilhante! Misture 3 tons da mesma cor (ex: rosa claro, rosa médio e rosa escuro). O efeito de luz e sombra é tão lindo que as clientes do ateliê ficam encantadas!",
    voceSabia: "O ponto Plumetis era o ponto favorito da Rainha Maria Antonieta no século XVIII, que mandava bordar seus vestidos de seda com penas e flores tão delicadas que pareciam plumas reais sopradas pelo vento!",
    practicalExercise: "No seu programa de matrizes, crie uma folha verde com dois tons: aplique a borda plumetis na junção do verde escuro com o verde claro. Simule na tela e veja a mágica da fusão de cores acontecendo.",
    quickSummary: "Técnica de pontos com pontas desiguais e alternadas que permite mesclar cores e criar degradês hiper-realistas de pintura com agulha.",
    recommendedSettings: {
      density: "0.60 mm a 0.75 mm nas áreas de mescla com variação de borda de 40%",
      speedPPM: "750 a 850 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina",
      stabilizer: "Entretela recortável macia"
    },
    relatedTerms: [
      "Pintura com Agulha (Needle Painting)",
      "Borda Dentada (Jagged Edge / Feathering)",
      "Degradê no Bordado (Color Shading)",
      "Ponto Cheio / Cetim",
      "Digitalização Artística"
    ],
    tags: ["s-095", "plumetis", "feathering", "degrade", "sombreamento", "pintura com agulha", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Creative Needle Painting, Shading and Feathering Techniques. Sydney, 2023.",
      "BERNINA ARTISTIC EMBROIDERY. Mastering Realistic Shading & Plumetis Effects. Steckborn, 2022.",
      "ARTRELADOS. A Arte da Pintura com Agulha: Luz, Sombra e Degradês no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-096-seguranca-operacional-e-protecao-optica-em-bordadeiras",
    code: "S-096",
    letter: "S",
    term: "Segurança Operacional e Proteção Óptica em Bordadeiras (Light Curtain & Operator Safety Systems)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim securitas (livre de perigo) e do grego optikos (visão). Normas internacionais de segurança do trabalho (NR-12 e ISO 13849).",
    summary: "Sistemas de sensores de barreira de luz, capas de proteção e botões de emergência que protegem as mãos da bordadeira.",
    definition: "A Segurança Operacional e Proteção Óptica em Bordadeiras (Light Curtain Safety Barriers / Machine Interlocks & Operator Safety Systems / Dispositivos de Proteção NR-12) compreende o conjunto de componentes eletroeletrônicos e mecânicos de salvaguarda instalados em máquinas de bordar industriais e comerciais. Inclui cortinas de luz infravermelha de barreira, sensores magnéticos de tampa de cabeçote, travas de segurança de rotação de volante e botões de parada de emergência do tipo cogumelo com travamento mecânico, projetados para interromper imediatamente a movimentação mecânica da máquina e do pantógrafo diante da aproximação indevida do operador durante o ciclo de alta velocidade.",
    technicalDetails: "As cortinas de luz ópticas emitem múltiplos feixes infravermelhos paralelos (espaçamento de 14 a 30 mm) na zona de perigo do bastidor. A interrupção de um único feixe aciona o relé de segurança de categoria 4, cortando a alimentação dos servomotores e ativando o freio eletromagnético do eixo principal em menos de 0,08 segundos (80 milissegundos), evitando acidentes com agulhas e pantógrafos em alta velocidade (1.000 PPM).",
    beginnerExplanation: "São todos os dispositivos de segurança da máquina de bordar: o botão vermelho de emergência que desliga tudo num clique, os sensores invisíveis de luz que param a máquina se você colocar a mão perto da agulha em movimento e as tampinhas que não deixam a máquina ligar se estiverem abertas.",
    howItWorks: [
      "1. A máquina está bordando a 900 PPM com o pantógrafo se movendo rapidamente.",
      "2. Uma barreira invisível de feixes de luz infravermelha monitora a frente da mesa.",
      "3. Se o operador esticar a mão para pegar uma tesoura ou ajeitar o tecido na área de risco, o feixe é cortado.",
      "4. O circuito de segurança dispara o freio elétrico em milésimos de segundo.",
      "5. A máquina para instantaneamente antes que a agulha atinja a mão do operador.",
      "6. Um alerta de segurança aparece no painel e o bordado só é retomado após a liberação manual segura."
    ],
    construction: [
      "Emissor e receptor óptico de múltiplos feixes infravermelhos",
      "Relés de segurança redundantes de duplo canal",
      "Botão de parada de emergência tipo cogumelo com chave de liberação",
      "Freio regenerativo e eletromecânico acoplado ao servomotor principal"
    ],
    mainTypes: [
      "Barreira Óptica / Cortina de Luz (Safety Light Curtain)",
      "Sensores de Enclausuramento e Chaves Fim-de-Curso de Tampas",
      "Sistema de Parada de Emergência Centralizada para Múltiplos Cabeçotes"
    ],
    characteristics: [
      "Tempo de resposta ultrarrápido (inferior a 80 milissegundos)",
      "Proteção total contra esmagamento de dedos e perfurações de agulha",
      "Conformidade rigorosa com normas de segurança do trabalho (NR-12)"
    ],
    applications: [
      "Ambientes industriais de alta produção com operadores múltiplos.",
      "Máquinas multicabeças de grande porte (4 a 20 cabeças).",
      "Proteção diária em ateliês e escolas técnicas de bordado."
    ],
    commonErrors: [
      "❌ Colocar fitas adesivas ou espelhos para burlar a cortina de luz e trabalhar com a proteção desativada",
      "❌ Tentar passar a linha na agulha ou ajeitar o fio com a máquina em funcionamento",
      "❌ Não testar o botão de emergência periodicamente para checar se ele está travando corretamente"
    ],
    troubleshootingTips: [
      "Máquina não liga e acusa 'Safety Interlock Open': Verifique se as tampas de proteção estão fechadas e se a cortina de luz não está com as lentes sujas de poeira.",
      "Máquina parando do nada sem motivo aparente: Limpe os sensores ópticos de segurança com um pano de microfibra seco.",
      "Botão de emergência travado para dentro: Gire o botão no sentido horário para destravar o mecanismo de mola."
    ],
    dicaArtrelados: "Segurança em primeiro lugar SEMPRE: nunca enfie a mão no bastidor, não tente cortar linhas e não ajeite o tecido enquanto a máquina estiver bordando! Se precisar fazer qualquer ajuste, aperte a tecla Stop e espere a máquina parar 100%. Mãos protegidas bordam melhor e com tranquilidade!",
    voceSabia: "As agulhas industriais de bordado penetram no tecido a mais de 15 vezes por segundo; um impacto em um osso do dedo acontece tão rápido que o cérebro humano não tem tempo nem de piscar os olhos!",
    practicalExercise: "Localize o botão vermelho de emergência da sua máquina. Pressione-o uma vez e observe a parada imediata e o aviso na tela. Em seguida, destrave-o girando suavemente no sentido horário.",
    quickSummary: "Dispositivos eletro-ópticos e mecânicos de proteção que param a máquina instantaneamente para proteger as mãos da bordadeira.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Botão de Parada de Emergência",
      "Norma Regulamentadora NR-12",
      "Freio Eletromagnético",
      "Pantógrafo",
      "Manutenção Preventiva"
    ],
    tags: ["s-096", "seguranca", "cortina de luz", "protecao", "emergencia", "nr-12", "mecanica", "artrelados"],
    bibliographicReferences: [
      "INTERNATIONAL ELECTROTECHNICAL COMMISSION. IEC 61496: Safety of Machinery - Electro-Sensitive Protective Equipment. Geneva, 2022.",
      "TAJIMA MACHINERY CORP. Industrial Embroidery Safety Systems & Operation Guidelines. Nagoya, 2021.",
      "ARTRELADOS. Manual de Segurança Operacional, Normas NR-12 e Boas Práticas no Ateliê de Bordados. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-097-soltura-de-ponto-por-falha-de-retencao",
    code: "S-097",
    letter: "S",
    term: "Soltura de Ponto por Falha de Retenção (Loop Slackening & Skipped Loop Catch)",
    level: "Avançado 🔴",
    category: "Defeitos e Soluções no Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim solutio (afrouxamento) e retentio (ato de reter). Defeito mecatrônico de formação de laço na lançadeira.",
    summary: "Falha mecânica em que a linha superior não é puxada direito ou a lançadeira escapa o laço, deixando fios soltos no bordado.",
    definition: "A Soltura de Ponto por Falha de Retenção (Loop Slackening / Loose Loop Drop / Falha de Captura e Aperto / Skipped Loop Catch) é o defeito de costura caracterizado pelo afrouxamento descontrolado do laço de linha superior na face frontal do bordado ou pela formação de tufos de fios soltos no avesso. Ocorre quando a ponta da lançadeira captura o laço mas o perde prematuramente antes da conclusão do giro de 360°, ou quando a mola tira-fio e os discos de tensão perdem o controle dinâmico da linha durante a desaceleração da barra de agulha.",
    technicalDetails: "Causado frequentemente por folga axial excessiva na pista da lançadeira (> 0,15 mm), rebarbas no bico da lançadeira, mola tira-fio com curso insuficiente (< 4 mm) ou posicionamento incorreto da agulha em relação à chapa (agulha torta ou descentralizada). A linha não recebe a tração restauradora necessária no instante de 50° do ciclo, acumulando folga residual de até 15 mm de fio por ponto.",
    beginnerExplanation: "É quando a máquina borda mas deixa 'alcinhas' ou pontinhos soltos e frouxos parecendo laçinhos levantados na frente da peça, ou faz um bolo de linha solta embaixo. Isso acontece porque a linha escapou do caminho da lançadeira ou a molinha do estica-fio não puxou a linha na hora certa.",
    howItWorks: [
      "1. A agulha desce e forma o laço de linha embaixo do tecido.",
      "2. A lançadeira tenta laçar o fio, mas por causa de uma rebarba ou folga mecânica, a linha escorrega antes do tempo.",
      "3. O estica-fio sobe para apertar o ponto, mas a linha já está fora da posição correta.",
      "4. O nó não fecha no meio do tecido e sobra linha frouxa.",
      "5. Essa linha excedente fica levantada na frente da peça em formato de alça feia e solta.",
      "6. A peça perde o padrão de qualidade e pode desfiar com o uso."
    ],
    construction: [
      "Bico e pista da lançadeira rotativa",
      "Mola tira-fio (Check Spring) com tensão e curso regulados",
      "Discos de tensão superior principais e auxiliares",
      "Alavanca estica-linha sincronizada"
    ],
    mainTypes: [
      "Alças Soltas na Frente do Bordado (Top Loop Dropping)",
      "Ninhos de Linha Esporádicos no Avesso (Bottom Looping)",
      "Ponto Falso sem Amarração (False Stitch Drop)"
    ],
    characteristics: [
      "Bordado com aspecto desleixado e pontos arrepiados",
      "Risco de o pé calcador enganchar nas alças soltas e quebrar a agulha",
      "Instabilidade de tensão que varia sem motivo aparente"
    ],
    applications: [
      "Diagnóstico e correção de falhas de acabamento em ateliês.",
      "Manutenção e polimento de lançadeiras e caixas de bobina.",
      "Calibração de mola tira-fio e tensores superiores."
    ],
    commonErrors: [
      "❌ Apertar ainda mais o tensor achando que é falta de aperto, quando o problema é uma rebarba na lançadeira",
      "❌ Continuar bordando com agulha torta ou com a ponta rombuda",
      "❌ Não polir a lançadeira após uma quebra de agulha que riscou a ponta metálica"
    ],
    troubleshootingTips: [
      "Se o bordado estiver fazendo laços soltos na frente: Verifique se a linha não escapou da mola tira-fio ou se o cone de linha não está tombando no suporte.",
      "Se a linha estiver frouxa no avesso: Retire a caixa de bobina e passe a unha na ponta da lançadeira; se sentir qualquer 'arranhão' ou rebarba, faça o polimento com lixa d'água 1200.",
      "Se o problema ocorrer apenas em uma agulha da máquina multiagulhas: Troque a agulha daquela posição por uma nova e limpe os discos tensores daquela trilha."
    ],
    dicaArtrelados: "Toda vez que uma agulha quebrar com um barulho forte: pare a máquina e passe a ponta da sua unha no bico da lançadeira lá embaixo! Se a unha enroscar num risquinho de metal, use uma lixa d'água 1200 bem fininha para polir e deixar lisinho como vidro. Adeus pontos soltos!",
    voceSabia: "Uma lançadeira industrial gira duas voltas completas para cada descida de agulha; a 1.000 pontos por minuto, ela gira a impressionantes 2.000 rotações por minuto em um espaço menor que uma xícara de café!",
    practicalExercise: "Com a máquina desligada e a chapa de agulha removida, examine o bico da lançadeira com uma lupa e boa iluminação. Observe como ele deve ser afiado e espelhado como uma lâmina cirúrgica para nunca soltar o laço de linha.",
    quickSummary: "Defeito em que a linha superior não é retida e apertada corretamente pela lançadeira, deixando alças e laçadas frouxas no bordado.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola Nova",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Lançadeira Rotativa (Rotary Hook)",
      "Mola Tira-Fio (Check Spring)",
      "Polimento de Lançadeira",
      "Ninho de Linha (Birdnesting)",
      "Tensão Superior"
    ],
    tags: ["s-097", "soltura de ponto", "lacadas", "defeitos", "lancadeira", "estica-fio", "artrelados"],
    bibliographicReferences: [
      "KOBAN HOOKS & ROTARY SYSTEMS. Hook Timing, Clearance & Loop Retaining Engineering. Osaka, 2022.",
      "TAJIMA TECHNICAL SERVICE. Stitch Formation Defects and Rotary Hook Troubleshooting. Nagoya, 2021.",
      "ARTRELADOS. Guia Prático de Diagnóstico e Resolução de 50 Defeitos no Bordado Eletrônico. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-098-simetria-angular-em-brasoes-e-mandalas",
    code: "S-098",
    letter: "S",
    term: "Simetria Angular em Brasões e Mandalas (Radial Symmetry & Rotational Alignment in Digitizing)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do grego syn (junto) e metron (medida) e do sânscrito mandala (círculo sagrado). Geometria vetorial aplicada ao design têxtil digital.",
    summary: "Técnica de programação para espelhar e girar elementos em círculo com compensação de repuxo balanceada para desenhos perfeitamente redondos.",
    definition: "A Simetria Angular em Brasões e Mandalas (Radial Symmetry & Rotational Multi-Axis Alignment / Simetria Radial Vetorial / Mandala Digitizing Method) é a técnica matemática de digitalização em que um segmento unitário ou pétala de um desenho é multiplicado e rotacionado em torno de um ponto de ancoragem central fixo (eixo polar 360°) em ângulos regulares e exatos (ex: 4 repetições a 90°, 6 a 60°, 8 a 45° ou 12 a 30°), com compensação dinâmica de repuxo balanceada para neutralizar a deformação anisotrópica do tecido.",
    technicalDetails: "Como o tecido estica de forma diferente no urdume (0°), na trama (90°) e no viés (45°), uma mandala perfeitamente circular no computador se tornará ovalada se todos os segmentos tiverem a mesma compensação de repuxo. O método exige sequenciamento radial de costura (do centro para a periferia) e aplicação de compensação de repuxo diferencial (+0.15 mm extra nos eixos diagonais a 45° e 135°).",
    beginnerExplanation: "É o jeito profissional de programar desenhos redondos lindos (como mandalas, flores de muitos lados e brasões da polícia ou de famílias): você desenha uma pétala perfeita e o programa repete ela em círculo. O segredo é programar para bordar de dentro para fora para a mandala não ficar torta nem oval no pano.",
    howItWorks: [
      "1. A programadora desenha com precisão cirúrgica um único gomo ou pétala da mandala no software.",
      "2. Define o ponto pivô exatamente no centro geométrico do círculo.",
      "3. Utiliza a ferramenta de 'Simetria Radial / Espelhamento Circular' (Circle/Radial Symmetry).",
      "4. O software gera automaticamente todos os gomos em 360 graus com encaixe milimétrico.",
      "5. Organiza o sequenciamento para bordar em espiral ou anéis concêntricos do miolo para as bordas externas.",
      "6. A máquina borda a mandala inteira com simetria visual absoluta e círculo 100% redondo."
    ],
    construction: [
      "Ponto de ancoragem central (Centro X=0, Y=0)",
      "Matriz de rotação angular fracionada (360° / N segmentos)",
      "Costura de base concêntrica de ancoragem",
      "Compensação de repuxo diferencial por quadrante"
    ],
    mainTypes: [
      "Simetria Radial Concêntrica (Mandalas e Rosáceas)",
      "Simetria Bilateral com Eixo Central (Brasões e Brasões Militares)",
      "Simetria Hexagonal e Octogonal de Flocos de Neve e Estrelas"
    ],
    characteristics: [
      "Harmonia visual e proporção matemática perfeita",
      "Redução de até 80% no tempo de criação da matriz",
      "Encaixe milimétrico entre pontas e contornos geométricos"
    ],
    applications: [
      "Bordado de mandalas decorativas em almofadas, jaquetas e toalhas.",
      "Brasões institucionais, emblemas militares e escudos de futebol.",
      "Rendas circulares, flores rococó e detalhes de toalhas de mesa."
    ],
    commonErrors: [
      "❌ Bordar os gomos de fora primeiro e fechar o centro por último, criando um papo enrugado gigante no meio da mandala",
      "❌ Colocar o ponto pivô fora do centro exato, fazendo os gomos ficarem tortos e com vãos desiguais",
      "❌ Não usar entretela firme recortável em mandalas densas com muitos pontos"
    ],
    troubleshootingTips: [
      "Se o desenho redondo ficar parecendo um ovo ovalado na peça: Use entretela recortável (Cutaway 80g) e mude o sequenciamento para bordar em anéis do centro para fora.",
      "Se as pontinhas dos gomos não se encontrarem no meio: Aumente a sobreposição central em 0.5 mm no software.",
      "Se o centro da mandala ficar com um caroço duro de linha: Elimine as costuras de base e alivie a densidade na ponta onde todos os gomos se encontram."
    ],
    dicaArtrelados: "Para bordar mandalas e brasões redondos impecáveis: comece o bordado SEMPRE pelo miolo central e vá expandindo em círculos para fora! Isso vai 'empurrando' qualquer onda do tecido suavemente para as bordas e sua mandala fica retinha e perfeitamente redonda como uma moeda!",
    voceSabia: "A geometria das mandalas é estudada desde a antiguidade no Tibete e na Índia e foi introduzida na psicologia por Carl Jung como símbolo de perfeição e equilíbrio mental!",
    practicalExercise: "No seu programa de bordado, use a ferramenta de simetria circular para criar uma flor de 8 pétalas a partir de uma única folhinha. Veja como o software distribui os 8 gomos instantaneamente em ângulos de 45 graus.",
    quickSummary: "Técnica de multiplicação e rotação de elementos em 360 graus com compensação de repuxo para desenhos perfeitamente redondos.",
    recommendedSettings: {
      density: "0.40 mm com alívio no ponto central (Underlay concêntrico)",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina",
      stabilizer: "Entretela recortável firme (Cutaway 80g)"
    },
    relatedTerms: [
      "Simetria Radial (Radial Symmetry)",
      "Compensação de Repuxo",
      "Sequenciamento de Camadas",
      "Brasões Bordados",
      "Digitalização Geométrica"
    ],
    tags: ["s-098", "simetria", "mandalas", "brasoes", "geometria", "rotacao", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Mirror Merge, Kaleidoscope and Radial Symmetry Tools. Sydney, 2023.",
      "BERNINA EMBROIDERY SOFTWARE. Advanced Rotational Geometry in Emblems and Mandalas. Steckborn, 2022.",
      "ARTRELADOS. A Geometria Sagrada do Bordado: Mandalas, Brasões e Simetrias Perfeitas. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-099-sensibilidade-de-deteccao-de-quebra-de-linha",
    code: "S-099",
    letter: "S",
    term: "Sensibilidade de Detecção de Quebra de Linha (Thread Sensor Threshold Calibration)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim sensibilitas (faculdade de sentir) e do grego optikos. Ajuste digital de limiar de tolerância em controladores de bordado.",
    summary: "Regulagem no painel da máquina que ajusta a tolerância do sensor para não dar alarmes falsos com linhas especiais ou metálicas.",
    definition: "A Sensibilidade de Detecção de Quebra de Linha (Thread Sensor Threshold Calibration / Parâmetro de Sensibilidade de Quebra / Thread Break Sensitivity Setting) é o parâmetro de software e hardware ajustável no painel operacional da máquina de bordar que define o número mínimo de pontos executados sem rotação da roldana do sensor óptico antes que a máquina interprete a condição como quebra de linha e pare o cabeçote.",
    technicalDetails: "O valor padrão situa-se geralmente entre 3 e 6 pontos. Linhas muito finas (60wt), linhas com acabamento fosco/encerado ou linhas metálicas possuem coeficientes de atrito e dinâmicas de deslizamento distintas; calibrar a sensibilidade para um limiar muito alto (ex: 10 pontos) fará a máquina bordar no vazio em caso de quebra real, enquanto um limiar muito baixo (1 a 2 pontos) gerará falsos alarmes em pontos curtos ou paradas momentâneas.",
    beginnerExplanation: "É o ajuste no visor da máquina que ensina a máquina a não ser 'tão fresca' nem 'tão dorminhoca': se o sensor estiver sensível demais, ele apita dizendo que a linha quebrou toda hora sem ter quebrado nada; se estiver fraco demais, a linha quebra e a máquina continua costurando no ar por um tempão antes de perceber.",
    howItWorks: [
      "1. A bordadeira acessa o menu de configurações da máquina (ícone de engrenagem no visor).",
      "2. Localiza a opção 'Sensibilidade do Sensor de Linha' (Thread Sensor Sensitivity).",
      "3. Ajusta o nível de sensibilidade em uma escala de 1 a 10 (ou número de pontos de tolerância).",
      "4. Para linhas normais de poliéster 40wt, mantém no nível médio padrão (nível 5 ou 4 pontos).",
      "5. Para linhas metálicas ou muito escorregadias, reduz a sensibilidade para evitar falsos alarmes.",
      "6. A máquina trabalha estável, parando na hora certa se a linha romper de verdade."
    ],
    construction: [
      "Circuito integrado digital com conversor analógico-digital (ADC)",
      "Temporizador de contagem de pulsos por ciclo de agulha",
      "Menu de interface de usuário (IHM) com controle numérico",
      "Filtro digital contra ruídos elétricos de motor"
    ],
    mainTypes: [
      "Ajuste Global de Sensibilidade para Todas as Agulhas",
      "Ajuste Individual por Agulha (em Máquinas Multiagulhas Industriais)",
      "Sensibilidade de Sensor de Bobina / Linha Inferior"
    ],
    characteristics: [
      "Eliminação definitiva de alarmes falsos de quebra de linha",
      "Proteção contra bordados no vazio em caso de rompimento real",
      "Adaptação rápida a diferentes tipos e marcas de linhas de bordar"
    ],
    applications: [
      "Bordados com linhas metálicas (Lurex/Glitter) e linhas fluorescentes.",
      "Bordados com linhas finas 60wt e 75wt para microletras.",
      "Calibração de máquinas de alta rotação em dias úmidos ou secos."
    ],
    commonErrors: [
      "❌ Desativar o sensor de quebra por completo para não ouvir o alarme, correndo o risco de a máquina bordar 500 pontos no vazio",
      "❌ Deixar a sensibilidade no máximo ao usar linha metálica que desliza na rodinha do sensor",
      "❌ Não limpar a lente do sensor antes de mexer na configuração digital do painel"
    ],
    troubleshootingTips: [
      "Se a máquina parar acusando quebra a cada 10 segundos com a linha intacta: Reduza a sensibilidade do sensor no painel (ex: passe do nível 7 para o nível 4) e dê duas voltas na rodinha do sensor.",
      "Se a linha quebrar e a máquina demorar mais de 20 pontos para parar: Aumente a sensibilidade do sensor no painel de configurações.",
      "Se apenas a agulha 1 der alarme falso: Limpe a roldana da agulha 1 com álcool isopropílico para retirar resíduos de poeira."
    ],
    dicaArtrelados: "Vai bordar com linha metálica dourada ou prateada? Entre no menu da sua máquina e diminua um pontinho na sensibilidade do sensor de linha! A linha metálica é lisinha e escorrega na rodinha do sensor, gerando falsos alarmes. Com esse ajuste simples, você borda linha metálica sem nenhuma parada chata!",
    voceSabia: "As máquinas de bordar industriais mais modernas utilizam inteligência artificial com algoritmos de aprendizado de máquina que aprendem o padrão de vibração da linha e autoajustam a sensibilidade sozinhos durante o bordado!",
    practicalExercise: "Entre no menu de configurações da sua máquina de bordar e encontre o parâmetro de sensibilidade do sensor de linha. Veja qual o nível atual configurado e anote para saber como retornar ao padrão quando necessário.",
    quickSummary: "Regulagem eletrônica no painel que calibra a tolerância do sensor para detectar quebras reais sem disparar alarmes falsos.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível com a linha",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Sensor de Quebra de Linha Superior",
      "Linha Metálica para Bordado",
      "Alarme de Quebra de Linha",
      "Painel de Controle (IHM)",
      "Manutenção Preventiva"
    ],
    tags: ["s-099", "sensibilidade", "sensor", "quebra de linha", "alarme falso", "painel", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL GROUP. Thread Break Sensor Sensitivity & Pulse Threshold Calibration. Nagoya, 2022.",
      "BROTHER EMBROIDERY TECH. Electronic Sensor Settings & Troubleshooting Guide. Nagoya, 2021.",
      "ARTRELADOS. Guia de Configurações Eletrônicas e Calibração de Sensores no Bordado Digital. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-100-separacao-de-elementos-por-ponto-de-linha-de-corte",
    code: "S-100",
    letter: "S",
    term: "Separação de Elementos por Ponto de Linha de Corte (Boring Stitch & Eyelet Piercing Knife)",
    level: "Avançado 🔴",
    category: "Técnicas de Aplique e Efeitos Especiais",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do inglês boring (perfurar/furar) e do francês broderie anglaise. Técnica clássica de bordado vazado mecanizado.",
    summary: "Técnica de bordado vazado (Richelieu/Ilhós) onde uma agulha-faca perfura o tecido antes de fazer a borda bordada.",
    definition: "A Separação de Elementos por Ponto de Linha de Corte (Boring Stitch Technique / Broderie Anglaise Perfurada / Faca de Furar / Eyelet Piercing Knife) é a técnica especializada de bordado eletrônico em que uma agulha especial perfuradora com lâmina de corte em formato de cruz ou lanceta (Borer Knife / Agulha Perfuradora) é instalada em uma das posições de agulha do cabeçote para abrir orifícios vazados precisos no tecido. Em seguida, a máquina troca automaticamente para uma agulha comum com linha e costura uma coluna circular densa de cordão de cetim ou ponto caseado ao redor do furo, selando as bordas e criando o legítimo bordado inglês e ilhoses vazados perfeitos.",
    technicalDetails: "O dispositivo perfurador (Boring Device) é montado na barra de agulha sem linha e acionado por comandos específicos de 'Borer On / Borer Off' na matriz. O borer desce repetidamente em padrão de cruz ou círculo de 1 mm a 4 mm no tecido engomado ou linho; em seguida, a máquina executa pontos de reforço concêntricos seguidos de coluna de cetim de 1,5 mm de largura e densidade de 0.35 mm.",
    beginnerExplanation: "É um jeito de fazer bordado com furinhos vazados perfeitos (tipo bordado Richelieu ou ilhós de furinho): a máquina coloca uma agulhinha especial que tem uma laminha afiada, abre o buraquinho no pano e logo em seguida borda um anelzinho de linha perfeito em volta do furo para não desfiar.",
    howItWorks: [
      "1. A matriz comanda a troca para a posição do Borer (agulha perfuradora sem linha).",
      "2. A faca perfuradora desce no tecido abrindo um furo em formato de cruz ou círculo no linho.",
      "3. A matriz comanda a troca para a agulha de bordar com linha normal.",
      "4. A máquina executa pontos de ancoragem circular ao redor das abas do furo aberto.",
      "5. Em seguida, borda o cordão de cetim em anel prendendo todas as fibras cortadas para dentro.",
      "6. Cria-se um orifício vazado limpo, resistente e de altíssimo luxo tradicional."
    ],
    construction: [
      "Agulha perfuradora com lâmina afiada em cruz de quatro arestas (Borer Knife)",
      "Chapa de agulha especial com orifício largo para borer",
      "Comandos de controle de profundidade de perfuração",
      "Sequência de matriz com blocos de perfuração e acabamento em cetim"
    ],
    mainTypes: [
      "Bordado Inglês Tradicional com Ilhoses Perfurados (Broderie Anglaise)",
      "Bordado Richelieu com Abertura Automática por Borer",
      "Ilhoses de Ventilação para Bonés e Roupas Esportivas"
    ],
    characteristics: [
      "Furos perfeitamente redondos e limpos sem necessidade de tesourinha manual",
      "Acabamento nobre tradicional de enxovais clássicos europeus",
      "Produtividade incomparável para produção de rendas e toalhas de linho"
    ],
    applications: [
      "Toalhas de mesa de linho nobre, caminhos de mesa e jogos americanos.",
      "Enxovais de bebê de alto padrão, batas e vestidos clássicos.",
      "Ilhoses de bonés e peças de vestuário técnico."
    ],
    commonErrors: [
      "❌ Instalar a faca de borer em máquina com chapa de agulha comum de furo estreito, quebrando a lâmina contra o metal",
      "❌ Tentar furar tecidos sintéticos elásticos que fecham o furo em vez de abrir com a lâmina",
      "❌ Não colocar entretela hidrossolúvel de suporte embaixo do linho"
    ],
    troubleshootingTips: [
      "Se as pontas do tecido cortado ficarem aparecendo para fora do ilhós: Aumente a largura do cordão de cetim para 2.0 mm e ative o ponto de reforço de borda.",
      "Se o borer quebrar na descida: Verifique se a chapa de agulha foi trocada para a chapa com orifício oval alargado para dispositivo de furo.",
      "Se o tecido repuxar ao redor do furinho: Aplique entretela hidrossolúvel bem esticada no bastidor."
    ],
    dicaArtrelados: "Para fazer o verdadeiro bordado inglês e ilhoses vazados perfeitos em linho e cambraia de algodão: o segredo é engomar levemente o tecido antes de colocar no bastidor! As fibras ficam firmes, a lâmina abre o furinho perfeitamente e o anelzinho de cetim fecha com acabamento de alta costura!",
    voceSabia: "O bordado inglês (*Broderie Anglaise*) tornou-se febre mundial no século XIX quando a Rainha Vitória da Inglaterra começou a usar vestidos brancos inteiramente cobertos por esses pequenos furinhos bordados à mão!",
    practicalExercise: "Se a sua máquina tiver a função de ilhós automático no menu de pontos utilitários/decorativos, selecione o ponto de ilhós em um retalho de tricoline firme com entretela e observe a máquina abrindo e arrematando o círculo com perfeição.",
    quickSummary: "Técnica que utiliza agulha-faca especial para abrir orifícios vazados perfeitos no tecido e arrematar com cordão acetinado.",
    recommendedSettings: {
      density: "Cordão de ilhós com 0.35 mm de densidade e 1.8 mm de largura",
      speedPPM: "600 a 700 PPM durante a perfuração",
      needleType: "Agulha Borer (Perfuradora) + Agulha 75/11 Ponta Aguda",
      stabilizer: "Entretela hidrossolúvel pesada (80g)"
    },
    relatedTerms: [
      "Broderie Anglaise",
      "Bordado Richelieu",
      "Agulha Borer / Perfuradora",
      "Ilhós Bordado",
      "Bordado Vazado"
    ],
    tags: ["s-100", "borer", "broderie anglaise", "richelieu", "ilhós", "perfuracao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Boring Device (Borer) Setup and Digitizing Standards. Nagoya, 2022.",
      "WILCOM EMBROIDERY STUDIO. Broderie Anglaise and Boring Stitch Functionality Manual. Sydney, 2023.",
      "ARTRELADOS. O Fascínio do Bordado Vazado: Richelieu, Borer e Broderie Anglaise na Era Digital. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-101-sobretensao-em-fios-metalicos",
    code: "S-101",
    letter: "S",
    term: "Sobretensão em Fios Metálicos (Metallic Thread Over-Tension Brittleness)",
    level: "Intermediário 🟡",
    category: "Agulhas e Fios de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim super (acima) e tensio (tensão/esticamento) e do grego metallon (metal). Fenômeno de física mecânica em filamentos compostos.",
    summary: "As causas do rompimento e enrolamento do fio metálico (dourado/prateado) por excesso de aperto nos tensores e como regular.",
    definition: "A Sobretensão em Fios Metálicos (Metallic Thread Over-Tension Brittleness / Tensão Crítica em Linhas de Lurex / De-Lamination & Kinking Failure) é a falha mecânica destrutiva provocada pelo excesso de pressão nos discos tensores superiores ou guias de linha ao se bordar com fios metálicos de poliéster/poliamida recobertos por micro-lâminas de alumínio metalizado (Lurex/Glitter). Por possuir alma elástica revestida por folha metálica quebradiça e inelástica, a tração excessiva estica a alma plástica, rompe a lâmina metálica externa, provoca desfolhamento (*stripping*) e gera nós em espiral (*kinking*) que travam no olho da agulha.",
    technicalDetails: "A tensão de trabalho recomendada para linha metálica 40wt situa-se entre 90gf e 110gf no tensiômetro de linha superior (cerca de 30% a 40% menor que a linha de poliéster comum, que opera entre 130gf e 150gf). Além disso, deve-se utilizar agulha especial com olho largo polido (Topstitch ou Metallic Needle 80/12 ou 90/14) para minimizar o atrito por dobra angular.",
    beginnerExplanation: "A linha dourada ou prateada é muito mais delicada que a linha comum: ela tem um plastiquinho brilhante enrolado num fiozinho fino. Se você apertar a tensão da máquina demais, o plástico brilhante quebra, descasca todinho parecendo uma sanfona e embola no buraquinho da agulha. Por isso, linha metálica deve ser bordada com a tensão bem soltinha e macia.",
    howItWorks: [
      "1. A linha metálica sai do cone sob rotação suave.",
      "2. Se os tensores estiverem muito apertados, a folha de alumínio metalizado sofre tração excessiva.",
      "3. A lâmina metálica se rompe e se descola da alma do fio (efeito sanfona/desfolhamento).",
      "4. O acúmulo de lâmina metálica descascada não passa pelo olho da agulha e forma uma bolinha.",
      "5. A linha arrebenta e o bordado para com falha.",
      "6. Soltando a tensão superior e usando a agulha correta, o fio metálico corre suave e reluzente."
    ],
    construction: [
      "Alma central em filamento de Poliamida (Nylon) ou Poliéster",
      "Revestimento helicoidal em fita de alumínio/poliéster metalizado a vácuo",
      "Camada protetora externa de verniz de poliuretano",
      "Agulha de olho alargado (sistema Metallic / Topstitch)"
    ],
    mainTypes: [
      "Desfolhamento por Sobretensão (Fio descasca antes do olho da agulha)",
      "Enrolamento em Espiral por Torção (Kinking Loop)",
      "Quebra Térmica por Atrito em Alta Velocidade"
    ],
    characteristics: [
      "Brilho cintilante de alto impacto visual em roupas e enxovais de luxo",
      "Exige velocidades mais baixas (550 a 650 PPM)",
      "Necessidade de tensão superior ultra-suave e lubrificação por silicone"
    ],
    applications: [
      "Bordados natalinos, brasões de luxo, fardamentos militares e coroas.",
      "Vestidos de noiva, vestidos de festa e detalhes religiosos.",
      "Monogramas de alto padrão em toalhas e lençóis."
    ],
    commonErrors: [
      "❌ Bordar linha metálica na velocidade máxima de 900 PPM com a tensão apertada de linha comum",
      "❌ Usar agulha fina comum (70/10 Ponta Bola) que esmaga a linha metálica no olho estreito",
      "❌ Colocar o cone de linha metálica deitado ou deixar a linha cair em trancos do suporte"
    ],
    troubleshootingTips: [
      "Se a linha dourada estiver descascando e embolando na agulha: Afrouxe a tensão superior em 2 ou 3 voltas e troque a agulha para uma agulha específica Metallic 80/12 ou 90/14.",
      "Se a linha metálica ficar desenrolando solta do cone e caindo na mesa: Coloque uma redinha de proteção elástica (Thread Net) envolvendo o cone de linha.",
      "Se a linha quebrar toda hora: Reduza a velocidade de bordado para 600 PPM e passe uma gotinha de óleo de silicone mineral na esponja guia-fio."
    ],
    dicaArtrelados: "O trio sagrado para bordar linha dourada e prateada sem nenhuma quebra: 1) Coloque a redinha de proteção no cone; 2) Troque para uma agulha Metallic ou Topstitch 80/12 (que tem o buraco bem grandão); 3) Afrouxe a tensão no painel e baixe a velocidade para 600 PPM! Você vai bordar ouro puro com a maior tranquilidade do mundo!",
    voceSabia: "Na antiguidade, os mantos dos reis e faraós eram bordados com fios de ouro e prata legítimos martelados até ficarem finos como lâminas e enrolados em fios de seda natural!",
    practicalExercise: "Pegue 20 cm de linha metálica dourada com as mãos. Puxe com força rápida até estourar: observe como a capinha dourada se enruga toda como uma mola descascando da alma branca. Essa é a física da sobretensão acontecendo diante dos seus olhos.",
    quickSummary: "Falha de rompimento e descascamento da linha metálica causada por excesso de aperto nos tensores e atrito na agulha.",
    recommendedSettings: {
      speedPPM: "550 a 650 PPM",
      needleType: "Agulha Metallic ou Topstitch 80/12 ou 90/14 de Olho Largo",
      stabilizer: "Entretela macia e película hidrossolúvel se necessário",
      threadTension: "Tensão superior aliviada em 35% (90gf a 110gf)"
    },
    relatedTerms: [
      "Linha Metálica (Metallic Thread)",
      "Agulha Metallic / Topstitch",
      "Redinha de Proteção de Cone (Thread Net)",
      "Tensão Superior de Linha",
      "Desfolhamento de Fio (Stripping)"
    ],
    tags: ["s-101", "linha metalica", "lurex", "sobretensao", "dourada", "fios", "agulhas", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARN. Metallic Thread Embroidery Mastery & Tension Balancing Guide. Freiburg, 2022.",
      "SUPERIOR THREADS. Metallic Thread Anatomy, Needle Selection & Tension Chart. Utah, 2021.",
      "ARTRELADOS. O Segredo dos Fios Metálicos: Técnicas, Agulhas e Regulagens para Bordar Ouro e Prata. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-102-suporte-cilindrico-de-bones-e-pecas-tubulares",
    code: "S-102",
    letter: "S",
    term: "Suporte Cilíndrico de Bonés e Peças Tubulares (Cap Frame Drive & Tubular Cylinder Arm)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim cylindrus (cilindro) e do francês tubulaire. Sistema eletromecânico para bordado tridimensional curvo.",
    summary: "Braço tubular e bastidor curvo especial que permite bordar bonés estruturados, mangas e barras sem abrir a costura.",
    definition: "O Suporte Cilíndrico de Bonés e Peças Tubulares (Cap Frame Rotary Drive & Tubular Cylinder Arm / Dispositivo Rotativo de Bonés / Braço Livre Cilíndrico) é o conjunto mecânico composto pelo braço estreito em balanço da máquina de bordar (onde se aloja a lançadeira rotativa sem mesa plana ao redor) e o driver de anel curvo rotativo de 270° a 360°. Esse sistema permite encaixar e rotacionar itens fechados e tridimensionais (como a copa estruturada de bonés, mangas de jaquetas, meias, punhos e pernas de calças prontas), bordando sobre superfícies curvas sem costurar a parte de trás da peça.",
    technicalDetails: "O driver de bonés converte o movimento do eixo Y do pantógrafo em rotação angular ao redor do cilindro do cabeçote através de cabos de aço sincronizados ou anel de engrenagens de alta precisão. O enquadramento exige gabarito de montagem com cinta de aço flexível e entretela resinada pesada (Cap Backing de 100g a 120g/m²). A matriz deve ser programada obrigatoriamente para bordar do centro para as laterais e da base da aba para o topo da copa (Center-Out / Bottom-Up).",
    beginnerExplanation: "É o acessório especial e o 'braço fino' da máquina de bordar que permite bordar bonés e peças fechadas (como a manga de uma camisa ou a perna de uma calça pronta). O bastidor é redondo e a máquina gira o boné para os lados enquanto a agulha borda, sem fechar nem costurar o outro lado da peça.",
    howItWorks: [
      "1. A bordadeira monta o boné no gabarito especial usando entretela de boné de 100g e trava a cinta de aço.",
      "2. O bastidor cilíndrico é encaixado no anel giratório do braço tubular da máquina.",
      "3. No painel da máquina, seleciona-se o modo 'Cap Frame / Bastidor de Boné' (que inverte a rotação e a orientação da matriz).",
      "4. A máquina executa o bordado girando o boné suavemente para a esquerda e direita.",
      "5. A matriz borda do centro para as pontas para não criar ondas na costura central do boné.",
      "6. Retira-se o boné perfeitamente estruturado, firme e sem deformações."
    ],
    construction: [
      "Braço cilíndrico em ferro fundido com leito de lançadeira integrado",
      "Driver rotativo de anel com transmissão por cabo de aço ou engrenagem cônica",
      "Bastidor curvo de 270° com travas de pressão e cinta flexível de aço inox",
      "Gabarito de bancada (Cap Gauge Stand) com travas de aba"
    ],
    mainTypes: [
      "Bastidor Cilíndrico de Boné 270 Graus (Wide Cap Frame para Frente e Laterais)",
      "Bastidor Semi-Cilíndrico para Frente de Bonés (Semi-Wide Frame)",
      "Braço Tubular Livre para Meias, Punhos e Mangas"
    ],
    characteristics: [
      "Capacidade de bordar peças prontas e fechadas sem abrir costuras",
      "Bordado frontal e lateral contínuo de orelha a orelha em bonés",
      "Estrutura rígida de alta precisão imune a vibrações"
    ],
    applications: [
      "Bordado de bonés promocionais, bonés esportivos (estilo aba reta/curva) e viseiras.",
      "Personalização de punhos de camisas, mangas de jalecos e pernas de calças jeans.",
      "Bordados em bolsas prontas, mochilas tubulares e meias esportivas."
    ],
    commonErrors: [
      "❌ Bordar bonés com matriz comum que começa de um lado e vai para o outro, empurrando o tecido e criando um papo gigante na costura central",
      "❌ Não usar entretela grossa de boné (usar entretela fina comum de camisa), deixando o bordado todo repuxado e mole",
      "❌ Encaixar o bastidor de boné sem travar os engates de segurança no anel do motor"
    ],
    troubleshootingTips: [
      "Se o bordado repuxar ou a agulha quebrar na costura central do boné: Programe a matriz no modo 'Do Centro para Fora' (Center-Out) e use agulha grossa reforçada SERV 7 80/12 ou 90/14.",
      "Se as letras ficarem tortas nas laterais do boné: Estique bem o boné na cinta de aço do gabarito de montagem antes de travar.",
      "Se o bastidor bater na mesa da máquina: Verifique se a mesa plana foi removida para deixar o braço tubular totalmente livre."
    ],
    dicaArtrelados: "A regra de ouro do bordado de bonés: SEMPRE programe a matriz para bordar do centro para as pontas e de baixo para cima (da aba para o topo da cabeça)! Isso assenta o tecido sobre a costura dura do meio e garante que seu boné saia reto, liso e sem nenhuma ruga!",
    voceSabia: "Os bonés profissionais de beisebol da liga americana MLB são bordados em máquinas industriais com bastidores de bonés de 270° utilizando relevo 3D de borracha EVA com densidade de 0.20 mm e mais de 15.000 pontos por boné!",
    practicalExercise: "Observe o braço inferior da sua máquina: se a mesa de apoio puder ser desencaixada (braço livre), retire a mesa e veja como o braço cilíndrico permite vestir uma manga de camisa ou perna de calça diretamente sob a agulha.",
    quickSummary: "Dispositivo mecânico com braço tubular e bastidor curvo giratório que permite bordar bonés estruturados e peças fechadas.",
    recommendedSettings: {
      speedPPM: "600 a 750 PPM para bonés estruturados",
      needleType: "80/12 ou 90/14 Ponta Bola Reforçada (SERV 7)",
      stabilizer: "Entretela pesada para bonés (Cap Backing 100g a 120g/m²)"
    },
    relatedTerms: [
      "Bastidor de Boné (Cap Frame)",
      "Braço Tubular (Cylinder Arm)",
      "Bordado 3D em Relevo (Puffy Foam)",
      "Sequenciamento Center-Out",
      "Gabarito de Enquadramento"
    ],
    tags: ["s-102", "bastidor de bone", "braco tubular", "cap frame", "bones", "pecas tubulares", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL EMBROIDERY. Cap Frame Drive Operation & 270-Degree Digitizing Mastery. Nagoya, 2022.",
      "BARUDAN PRECISION MACHINERY. Tubular Cylinder Arm & Cap Frame Maintenance Guide. Ichinomiya, 2021.",
      "ARTRELADOS. O Guia Definitivo do Bordado de Bonés: Bastidores, Técnicas, Entretelas e 3D. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-103-swf-sunstar-maquinas-de-bordado-eletronico",
    code: "S-103",
    term: "SWF / SunStar (Máquinas de Bordado Eletrônico)",
    pronunciation: "és-dáblio-éfe / san-star (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "S",
    level: "Intermediário a Avançado 🟡🔴",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Desenvolvida em Incheon (Coreia do Sul) pela SunStar Co., Ltd. (empresa fundada originalmente em 1974 como Korea Cutting Machine). A divisão SWF (acrograma de Sewing With Fine arts) projetou a Coreia do Sul ao estrelato global nos anos 1990 e 2000 ao patentear a lendária tecnologia Dual Function, que permite operar duas alas de cabeçotes com matrizes totalmente diferentes ao mesmo tempo em uma única máquina.",
    summary: "Gigante industrial sul-coreana em máquinas computadorizadas de bordado de 1 até 56 cabeças (séries MAN, E-T1501 e K-Series), pioneira na tecnologia patenteada Dual Function e leitora universal .DST e .SST.",
    definition: "A SWF é uma das três mais célebres fabricantes industriais de máquinas de bordado computadorizado do planeta, com forte tradição e presença maciça em polos têxteis e confecções no Brasil e no mundo. Desenvolve desde equipamentos compactos de cabeçote único tubular com 15 agulhas (como a série E-T1501 e a moderna MAS-12 com tela touch de 10.4 polegadas) até linhas monumentais multi-cabeças (com até 56 cabeçotes simultâneos). Seu maior marco histórico é o sistema patenteado Dual Function, que divide o pantógrafo em seções independentes, permitindo bordar trabalhos diferentes na mesma máquina simultaneamente.",
    technicalDetails: "Acionamento por servomotores AC digitais de alta rotação sincronizados com parada de agulha a 100°. Velocidade de operação ajustável de 450 a 1.200 PPM. Laçadeira rotativa vertical industrial tipo 'L' de alta precisão com lubrificação concentrada, sistema de corte de linha rápido por faca rotativa com solenoide, encoders ópticos de quebra de fio superior e inferior e tela touchscreen de alta resolução. Suporta arquivos binários universais .DST e o formato proprietário .SST.",
    construction: [
      "Chassi monobloco construído em aço estrutural de alta inércia para absorção de vibrações em alta rotação",
      "Cabeçotes independentes com conjunto seletor para 12 ou 15 agulhas acionados por motor de passo",
      "Sistema de pantógrafo dividido com alavancas mecânicas para operação no modo Dual Function",
      "Braço cilíndrico tubular estreito reforçado para bonés estruturados, mangas e calçados",
      "Painel de comando computadorizado colorido de até 10.4 polegadas com interface gráfica interativa",
      "Conjunto de corte automático de linha com retenção por mola e faca rotativa temperada",
      "Ponteiro laser de alinhamento com função de traçado perimetral de segurança (Trace)"
    ],
    howItWorks: [
      "1. A matriz de bordado formatada em extensão .DST ou .SST é transferida para o computador de bordo da SWF via pendrive USB ou conexão de rede.",
      "2. No painel colorido, o operador escolhe a matriz, associa cada cor a uma das agulhas ativas (de 1 a 15) e seleciona o tipo de bastidor.",
      "3. O operador aciona o teste de contorno (Trace) com o feixe laser para certificar que o desenho possui margem segura de borda.",
      "4. A máquina inicia o ciclo operacional com aceleração senoidal progressiva, mantendo rotações entre 850 e 1.200 PPM.",
      "5. Em modelos com Dual Function, o operador pode desacoplar o pantógrafo central e carregar uma matriz diferente para cada lado da máquina, bordando bonés na ala esquerda e camisetas na ala direita ao mesmo tempo.",
      "6. Em caso de quebra de linha ou fim de bobina, o sensor óptico para o cabeçote instantaneamente e permite recuar os pontos com precisão cirúrgica."
    ],
    beginnerExplanation: "A SWF é a grande concorrente sul-coreana das máquinas industriais japonesas! Ela é famosa por ser uma máquina forte, rápida e com peças de aço que duram décadas. A grande sacada que deixou a SWF famosa no mundo todo foi a tecnologia 'Dual Function': em uma máquina de várias cabeças, você pode mandar metade da máquina bordar um desenho (como camisetas da empresa X) e a outra metade bordar outro desenho completamente diferente (como bonés da empresa Y), dobrando a produtividade do ateliê!",
    applications: [
      "Bordados industriais de alta velocidade em uniformes empresariais, camisas polo e jalecos",
      "Bordados em bonés montados estruturados de 6 gomos em 270° com o dispositivo cilíndrico",
      "Produção de peças tubulares prontas como mangas de jaqueta, calças jeans e bolsas esportivas",
      "Produção flexível de pedidos fracionados utilizando a tecnologia Dual Function em multi-cabeças",
      "Bordados de alta densidade em couro, mochilas pesadas e emblemas militares com relevo 3D (EVA)"
    ],
    mainTypes: [
      "SWF MAN-12 / MAS-12: Modelo de 1 cabeça e 12 agulhas compacto com tela touch de 10.4\", ideal para ateliês modernos",
      "SWF E-T1501: Modelo clássico comercial de cabeçote único com 15 agulhas, robustez incomparável e alta versatilidade",
      "SWF Série Dual Function (D-Series de 2, 4, 6 e 8 Cabeças): O sistema patenteado que borda 2 trabalhos diferentes na mesma máquina",
      "SWF Série K / KS (Multi-Cabeças Industriais): Máquinas de produção pesada de até 1.200 PPM para grandes fábricas"
    ],
    recommendedSettings: {
      speedPPM: "850 a 1.050 PPM para peças planas normais; 650 a 750 PPM para bonés estruturados e bordados 3D com EVA",
      needleType: "Sistema industrial de cabo redondo DBxK5 (tamanhos 75/11 para tecidos normais até 90/14 para bonés)",
      stabilizer: "Entretela rasgável de 80g/m² ou entretela resinada especial para bonés estruturados"
    },
    advantages: [
      "✔ Chassi pesado de aço sul-coreano que proporciona estabilidade superior e vibração nula em 1.000 PPM",
      "✔ Tecnologia patenteada Dual Function que permite bordar 2 pedidos diferentes simultaneamente em uma mesma máquina",
      "✔ Painel colorido interativo de alta resolução com tutoriais e diagnóstico eletrônico integrado",
      "✔ Sistema de corte de linha rápido e preciso que reduz o tempo morto entre saltos de matriz"
    ],
    limitations: [
      "Utiliza agulhas industriais de cabo redondo (DBxK5), necessitando de prática do operador para alinhar a canaleta da agulha.",
      "Equipamento de porte industrial que requer instalação com aterramento elétrico de qualidade e piso nivelado."
    ],
    commonErrors: [
      "❌ Ligar o modo Dual Function sem liberar a trava mecânica do pantógrafo central, forçando os motores de passo.",
      "❌ Iniciar o bordado sem certificar se o ponteiro de ângulo do eixo principal está exatamente em 100°.",
      "❌ Deixar de soprar e limpar com pincel a faca de corte rotativa e o sensor de linha inferior a cada fim de semana.",
      "❌ Não lubrificar a laçadeira rotativa vertical com uma gota de óleo mineral no início de cada turno de trabalho."
    ],
    troubleshootingTips: [
      "Alarme de Head Synchronization Error: Verifique se todas as chaves manuais de desengate dos cabeçotes estão na mesma posição e reinicie o comando no painel.",
      "Corte de fio deixando pontas compridas ou escapando da agulha: Limpe a área sob a chapa de agulha e regule a mola de retenção superior (Thread Holding Spring).",
      "Alarme falso de quebra de linha: Limpe o leitor óptico traseiro com um cotonete seco para remover poeira e fiapos de linha acumulados."
    ],
    dicaArtrelados: "Nas máquinas SWF, a lubrificação da laçadeira rotativa é o coração da máquina! Crie o hábito de dar UMA única gota de óleo mineral puro na canaleta da laçadeira todo dia antes de começar o primeiro bordado da manhã. E a cada semana, coloque uma gotinha nas canaletas das barras de agulha: sua SWF vai manter aquele som macio e silencioso de fábrica por mais de uma década!",
    voceSabia: "A tecnologia Dual Function da SWF foi uma das invenções mais premiadas da história da indústria têxtil mundial! Antes dela, se uma fábrica tinha uma máquina de 4 cabeças e recebia uma encomenda urgente de apenas 2 camisas, as outras 2 cabeças eram obrigadas a ficar paradas sem produzir nada. Com a SWF, a fábrica coloca as 2 camisas na esquerda e continua bordando bonés na direita!",
    practicalExercise: "Conferência de Limites na SWF: Carregue um desenho novo no painel da SWF, selecione o bastidor redondo de 15 cm e pressione o botão 'Trace' com o ponteiro laser ligado. Acompanhe com os olhos a agulha contornando o tecido e certifique-se de que ela mantém pelo menos 1,5 cm de distância da borda plástica do bastidor antes de apertar a partida!",
    quickSummary: "Gigante industrial sul-coreana da SunStar, mundialmente celebrada pelas máquinas de 12 e 15 agulhas, velocidade de até 1.200 PPM e pela pioneira tecnologia patenteada Dual Function.",
    relatedTerms: [
      "Tajima",
      "Barudan (Máquinas de Bordado Eletrônico)",
      "Typical (Máquinas de Bordado Eletrônico)",
      "Ricoma (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Bastidor de Boné",
      "Agulha DBxK5",
      "Velocidade PPM"
    ],
    tags: [
      "s-103",
      "swf",
      "sunstar",
      "maquinas",
      "equipamento",
      "dualfunction",
      "et1501",
      "industrial",
      "dst",
      "artrelados"
    ],
    bibliographicReferences: [
      "SUNSTAR PRECISION CO., LTD. SWF Operation & Maintenance Manual: Dual Function Series & Compact Systems. Incheon: SunStar, 2023.",
      "SWF EMBROIDERY MACHINERY. Technical Specifications & Cap Frame Integration Guide. Seul, 2022.",
      "ARTRELADOS. Guia Técnico e Comparativo das Grandes Fabricantes Mundiais de Bordado. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  },
  {
    id: "s-104-singer-maquinas-de-bordado-eletronico",
    code: "S-104",
    term: "Singer (Máquinas de Bordado Eletrônico)",
    pronunciation: "sín-guer (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "S",
    level: "Iniciante a Intermediário 🟢🟡",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Fundada em 1851 em Nova York (Estados Unidos) por Isaac Merritt Singer e Edward Clark como I.M. Singer & Co. Pioneira mundial na produção seriada de máquinas de costura doméstica e no desenvolvimento do primeiro motor elétrico prático. No bordado computadorizado, democratizou o acesso residencial às bordadeiras microprocessadas com as séries Quantum Stylist e Futura, criando a clássica extensão de matriz .XXX.",
    summary: "Fabricante americana mais tradicional da história (Nova York, 1851), pioneira na popularização do bordado residencial acessível com as séries Quantum Stylist EM200, Futura e SE9185, e criadora do formato .XXX.",
    definition: "A Singer é a mais icônica e tradicional fabricante de máquinas de costura e bordado do mundo, pertencente ao grupo multinacional SVP Worldwide (ao lado das suecas Husqvarna Viking e da alemã Pfaff). No segmento de bordado computadorizado, notabilizou-se pelo pioneirismo em bordadeiras residenciais de baixo custo e alta acessibilidade, com destaque para a bordadeira pura Singer Quantum Stylist EM200 (Superb, com campo amplo de 260x150 mm), a linha híbrida Singer Futura (XL-400 e XL-580 com interface conectada ao computador) e a moderna linha combinada SE9185 com tela colorida touch e conectividade Wi-Fi via ecossistema mySewnet. Utiliza laçadeira horizontal rotativa com caixa de bobina plástica e suporta nativamente formatos .XXX e .DST.",
    technicalDetails: "Acionamento por motor digital eletrônico de torque constante ajustado para até 700 PPM. Equipada com sistema de iluminação de 3 lâmpadas LED StayBright sem aquecimento nem sombras. Tela LCD de navegação para edição básica de matrizes (redimensionamento em escala, rotação em passos de 1° a 90°, espelhamento horizontal e vertical e combinação de alfabetos). Corte automático de linha superior e inferior acionado por solenoide, passador de agulha automático mecânico e sensores ópticos de fim de bobina e quebra de fio superior. Formato nativo Singer .XXX e padrão universal .DST.",
    construction: [
      "Chassi interno fundido em liga de alumínio reforçada para estabilidade em bancadas residenciais",
      "Laçadeira horizontal rotativa com caixa de bobina em polímero e tampa plástica transparente de acrílico",
      "Carro pantográfico com acoplamento frontal e motor de passo para eixo X/Y de curso suave",
      "Conjunto de iluminação com 3 lâmpadas LED brancas StayBright posicionadas ao redor da área de trabalho",
      "Tela LCD integrada para visualização de parâmetros, troca de cores e seleção de bastidores",
      "Módulo de corte de linha inferior automático com lâmina fixa e faca móvel de aço temperado",
      "Porta USB lateral para leitura direta de matrizes a partir de pendrives convencionais"
    ],
    howItWorks: [
      "1. A matriz de bordado em formato .XXX ou .DST é salva em um pendrive USB comum e conectada na porta lateral da máquina Singer.",
      "2. Na tela LCD da máquina, a bordadeira escolhe a matriz, ajusta o tamanho ou orientação e confirma o bastidor recomendado (Grande 26x15 cm ou Pequeno 10x10 cm).",
      "3. O tecido e a entretela são montados no bastidor e encaixados no carro pantográfico com a trava de clique sonoro.",
      "4. A bordadeira passa a linha pelo percurso guiado numerado e aciona o passador de agulha embutido.",
      "5. Ao pressionar o botão verde Start/Stop, a máquina borda com velocidade ajustável de até 700 PPM, parando automaticamente a cada troca de cor programada.",
      "6. Ao finalizar a matriz, a tesoura automática interna apara as linhas rente ao tecido e avisa o operador com sinal sonoro suave."
    ],
    beginnerExplanation: "A Singer é aquela marca amiga que todo mundo conhece e que já faz parte da história da nossa família! No bordado computadorizado, a Singer ajudou milhares de bordadeiras a abrirem seus primeiros ateliês sem precisar fazer dívidas enormes. A Quantum Stylist EM200, por exemplo, é uma bordadeira pura que já vem com um bastidor bem grandão de 26x15 cm: você pode bordar toalhas de banho inteiras, almofadas, camisas e enxovais de bebê com muita facilidade e com a confiança de uma marca centenária!",
    applications: [
      "Bordados em toalhas de banho, rosto e lavabo com o bastidor grande de 260x150 mm",
      "Personalização de fraldas, mantas de piquê, bodys e roupas infantis de algodão",
      "Monogramas e nomes escolares em jalecos, aventais e camisas de uniforme",
      "Almofadas decorativas, panos de prato temáticos e peças de patchwork",
      "Bordados de pequenos logotipos e brasões corporativos em peças planas"
    ],
    mainTypes: [
      "Singer Quantum Stylist EM200 (Superb): Bordadeira pura com campo de 260x150 mm e 200 desenhos embutidos",
      "Singer Futura XL-400 / XL-580: Modelos híbridos que conectam ao computador para envio direto de matrizes",
      "Singer SE9185: Linha contemporânea conectada com tela colorida touch de 7 polegadas e nuvem mySewnet",
      "Singer Legacy SE300: Máquina combinada de costura e bordado de alto desempenho com 250 pontos"
    ],
    recommendedSettings: {
      speedPPM: "550 a 650 PPM para acabamento acetinado regular; até 700 PPM em tatami e contornos",
      needleType: "Sistema doméstico cabo chato 130/705 H (tamanhos 75/11 para tecidos leves a 90/14 para toalhas)",
      stabilizer: "Entretela rasgável de 50g/m² a 60g/m² ou filme hidrossolúvel para o relevo de toalhas felpudas"
    },
    advantages: [
      "✔ Excelente custo-benefício com bastidor grande de fábrica (260 x 150 mm na linha EM200)",
      "✔ Marca consagrada com ampla rede de peças de reposição e assistência técnica no Brasil",
      "✔ Laçadeira horizontal à prova de travamentos com tampa de acrílico para visualização da linha",
      "✔ Leitura direta de pendrive sem necessidade de computadores conectados na bancada"
    ],
    limitations: [
      "Velocidade máxima de 700 PPM, ligeiramente inferior à de máquinas industriais ou semi-industriais.",
      "Troca de linha manual a cada cor, comum em equipamentos de agulha única."
    ],
    commonErrors: [
      "❌ Utilizar carretilhas plásticas convencionais retas em vez do padrão curvo original Class 15J.",
      "❌ Puxar as bordas do tecido depois de travar o parafuso do bastidor, gerando franzimento após o bordado.",
      "❌ Iniciar a costura sem certificar-se de que a alavanca do calcador foi abaixada.",
      "❌ Deixar poeira e fiapos de linha acumularem na fenda da faca de corte inferior sob a chapa."
    ],
    troubleshootingTips: [
      "Linha da carretilha aparecendo por cima do bordado: Reduza ligeiramente a tensão da linha superior no disco manual graduado (ajuste de 4 para 3 ou 2.5).",
      "Aviso sonoro com máquina parada ao apertar Start: Abaixe a alavanca do calcador e confira se a haste do enfiador de linha retornou ao ponto mais alto.",
      "Bordado desalinhado no bastidor: Encaixe as abas plásticas do bastidor no carro pantográfico com firmeza até ouvir o clique duplo de engate."
    ],
    dicaArtrelados: "Nas máquinas Singer Quantum Stylist EM200 e SE9185, a carretilha oficial tem um design especial com bordas levemente abauladas chamado Class 15J. Quando for comprar carretilhas extras para o seu ateliê, nunca use carretilhas de metal e exija sempre a 15J transparente: ela desliza sem vibrar dentro da caixinha de bobina e os seus pontos cheios de contorno saem perfeitos sem nenhuma falha!",
    voceSabia: "A primeira máquina de costura patenteada por Isaac Singer em 1851 custava cerca de 100 dólares na época (o equivalente a vários meses de salário de uma família)! Para tornar a máquina acessível a todas as mulheres, a Singer inventou o primeiro sistema de crediário e venda a prazo da história moderna: as bordadeiras compravam a máquina pagando uma pequena entrada e quitavam as parcelas com o próprio dinheiro que faturavam com suas costuras!",
    practicalExercise: "Encaixe Firme de Bastidor na EM200: Pegue o bastidor grande de 26x15 cm e monte um retalho de algodão com entretela rasgável. Aproxime o bastidor do carro pantográfico da sua Singer e empurre com os dedos nas duas orelhas plásticas de fixação até ouvir o estalo duplo da trava. Puxe levemente para cima para confirmar o travamento seguro e dê a partida para bordar sem nenhum desvio milimétrico!",
    quickSummary: "Fabricante americana mais tradicional da história (Nova York, 1851), pioneira na popularização do bordado residencial com as séries Quantum Stylist EM200, Futura e SE9185, e criadora do formato .XXX.",
    relatedTerms: [
      "Husqvarna Viking / Pfaff (Máquinas de Bordado Eletrônico)",
      "Brother (Máquinas de Bordado Eletrônico)",
      "Janome (Máquinas de Bordado Eletrônico)",
      "Formato XXX",
      "Agulha Cabo Chato (130/705 H)",
      "Caixa de Bobina",
      "Velocidade PPM"
    ],
    tags: [
      "s-104",
      "singer",
      "quantum",
      "em200",
      "futura",
      "se9185",
      "maquinas",
      "equipamento",
      "xxx",
      "artrelados"
    ],
    bibliographicReferences: [
      "SVP WORLDWIDE / SINGER CO. Instruction Manual: Singer Quantum Stylist EM200 & SE9185 Systems. Nashville: Singer, 2023.",
      "SINGER SEWING CO. The Heritage and Innovation of Machine Embroidery. Nova York, 2022.",
      "ARTRELADOS. A História Viva da Costura e o Bordado Computadorizado Acessível. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  }
];

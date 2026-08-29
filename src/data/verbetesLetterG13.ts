import { Verbete } from "../types";

export const VERBETES_LETTER_G_PART13: Verbete[] = [
  {
    "id": "g-075-gradiente-densidade-variavel-efeito-meio-tom",
    "code": "G-075",
    "letter": "G",
    "term": "Gradiente de Densidade Variável e Efeito Meio-Tom (Variable Density Gradient & Halftone Feathering)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Das técnicas de gravação em meio-tom (halftone) do início do século XX, adaptadas para os motores de densidade paramétrica da Wilcom e Tajima na década de 1990.",
    "summary": "Recurso de software que varia progressivamente o espaçamento entre pontos dentro do mesmo objeto, criando transições suaves de cor, transparência e efeito 3D.",
    "definition": "O Gradiente de Densidade Variável e Efeito Meio-Tom (Variable Density Gradient & Accordion Stitch Spacing) é a técnica matemática de digitalização em que o espaçamento entre as linhas de costura é modulado de forma contínua ao longo de um eixo geométrico (linear, radial ou curvo), variando de uma densidade fechada (0.35 mm) até uma densidade ultra-aberta (1.80 mm). Ao sobrepor duas camadas com gradientes opostos e cores complementares, cria-se uma fusão cromática perfeita sem degraus visíveis, permitindo reproduzir céus ao entardecer, sombras em rostos realistas, reflexos metálicos e volume esférico em pétalas e frutos.",
    "technicalDetails": "O software utiliza funções de interpolação não-linear (curvas de Bézier, exponenciais ou senoidais) para calcular o deslocamento entre linhas consecutivas. Em regiões de baixa densidade, o algoritmo ativa comprimentos de ponto variáveis e bordas recortadas (Feather Edge) para que as picadas da agulha não formem linhas de corte retilíneas sobre o tecido.",
    "construction": [
      "Curva de controle de gradiente paramétrico (Linear, Exponencial ou Senoidal)",
      "Variação dinâmica de espaçamento (0.35 mm a 2.00 mm)",
      "Bordas esfumadas intercaladas (Feather Stitch / Jagged Edge)",
      "Sobreposição cruzada de camadas com ângulos defasados em 15° a 30°",
      "Reforço de esteira ralo para estabilização da base"
    ],
    "howItWorks": [
      "1. O programador desenha a primeira camada com a cor base (ex: azul escuro) e aplica o gradiente fechando em cima e abrindo embaixo.",
      "2. Desenha a segunda camada com a cor de transição (ex: amarelo ou laranja) com o gradiente invertido (aberto em cima e fechado embaixo).",
      "3. Defasa o ângulo de ponto da segunda camada em cerca de 20° para evitar o empilhamento das picadas de agulha.",
      "4. Na máquina de bordar, as duas cores de linha se entrelaçam opticamente na zona central de meio-tom, gerando um degradê perfeito e fotográfico."
    ],
    "mainTypes": [
      "Gradiente Linear (Para fundos de paisagens, céus e bandeiras)",
      "Gradiente Radial / Cônico (Para esferas, olhos, botões e pétalas florais)",
      "Gradiente em Curva Orgânica (Para corpos de animais, asas de pássaros e tecidos em movimento)"
    ],
    "characteristics": [
      "Fusão de cores ultra suave sem a dureza de blocos de cor chapados",
      "Redução significativa do peso e da rigidez do bordado em grandes áreas",
      "Reprodução de realismo fotográfico e profundidade tridimensional"
    ],
    "limitations": [
      "Exige tecidos firmes e com bom contraste óptico com as linhas de bordar",
      "Não deve ser usado com linhas muito grossas ou ásperas que mascaram o efeito de meio-tom"
    ],
    "numberingSystem": [
      "Densidade na Zona Fechada: 0.36 mm a 0.40 mm",
      "Densidade na Zona Aberta: 1.20 mm a 1.80 mm",
      "Defasagem Angular entre Camadas: 15° a 30°"
    ],
    "advantages": [
      "✔ Transições de cores realistas que parecem pintura sobre o tecido",
      "✔ Menor consumo de fio em comparação com preenchimentos maciços de duas cores",
      "✔ Bordados muito mais macios e confortáveis ao toque"
    ],
    "commonErrors": [
      "❌ Deixar os ângulos de ponto das duas camadas no mesmo sentido (a cor de cima cai exatamente nos vãos da de baixo e fica listrada)",
      "❌ Abrir a densidade demais (acima de 2.5 mm), deixando fios soltos que podem enroscar",
      "❌ Usar reforço de esteira pesado que aparece nos vãos do gradiente aberto"
    ],
    "voceSabia": "O olho humano mistura as cores das linhas de bordar à distância exatamente como funciona a tela de uma TV ou a impressão gráfica colorida! Esse fenômeno chama-se 'mistura óptica aditiva'.",
    "curiosidadeTecnica": "Em softwares de alta gama como o Wilcom EmbroideryStudio, o efeito chama-se 'Color Blending' e calcula a fração de cobertura por microárea usando o método de difusão de erro de Floyd-Steinberg.",
    "dicaArtrelados": "Para fazer o degradê perfeito de um pôr do sol em toalhas: use primeiro uma camada de vermelho com gradiente abrindo para baixo, e por cima uma de amarelo abrindo para cima com ângulo inclinado em 20 graus. O resultado é um tom alaranjado magnífico no meio!",
    "applications": [
      "Bordados realistas de animais (penas de araras, pelagem de felinos e escamas de peixes)",
      "Retratos humanos e rostos com sombreamento anatômico",
      "Bandeiras de países com faixas em degradê e brasões requintados",
      "Logotipos modernos de empresas com identidades visuais gradientes"
    ],
    "troubleshootingTips": [
      "Se o degradê ficou com aspecto listrado e feio, aumente a defasagem angular entre as duas cores para 25°.",
      "Se a cor de fundo do tecido está aparecendo no meio do gradiente, adicione uma terceira cor intermediária suave ou reduza a abertura máxima para 1.2 mm.",
      "Se os fios estão ficando frouxos na área aberta, diminua o comprimento máximo de ponto para 3.5 mm."
    ],
    "relatedTerms": [
      "Degradê (Color Blending)",
      "Efeito Meio-Tom (Halftone)",
      "Densidade de Ponto",
      "Bordas Esfumadas (Feather Stitch)",
      "Ângulo de Ponto"
    ],
    "tags": [
      "gradiente-densidade",
      "meio-tom",
      "degrade",
      "color-blending",
      "programacao",
      "wilcom",
      "realismo"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Color Blending, Accordion Spacing and Gradient Stitching Manual. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Halftone Simulation in Machine Embroidery. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Color Blending, Accordion Spacing and Gradient Stitching Manual. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Advanced Halftone Simulation in Machine Embroidery. Nagoya: Tajima, 2022.",
      "ARTRELADOS. A Arte do Meio-Tom e Gradientes Cromáticos no Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie um quadrado de 40 x 40 mm no seu programa. Aplique um preenchimento tatami azul com gradiente de 0.40 mm a 1.50 mm de cima para baixo. Em seguida, crie outro quadrado idêntico em cima com linha branca, gradiente inverso (1.50 mm a 0.40 mm) e ângulo inclinado a 25°. Borde e veja o efeito de céu com nuvens perfeito!",
    "quickSummary": "O gradiente de densidade abre e fecha o espaçamento das linhas de bordado para criar degradês perfeitos de cores, sombras e brilhos sem divisões duras.",
    "beginnerExplanation": "Sabe quando você pinta com lápis de cor e vai apertando bem forte no começo e depois vai soltando a mão para a cor ficar clarinha? O gradiente de densidade faz exatamente isso com a linha da máquina de bordar, misturando duas cores de um jeito lindo e suave!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Universal ou Ponta Bola",
      "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
      "threadTension": "105 a 115gf",
      "density": "0.38 mm na base fechada / 1.40 mm no topo aberto"
    }
  },
  {
    "id": "g-076-geracao-automatica-nos-simplificacao-curvas-bezier",
    "code": "G-076",
    "letter": "G",
    "term": "Geração Automática de Nós e Simplificação de Curvas Bézier (Automatic Node Generation & Bézier Curve Reduction)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Dos algoritmos de geometria computacional aplicados à digitalização gráfica e conversores vetoriais de CAD têxtil da década de 1980.",
    "summary": "Processo de software que ajusta a densidade e o posicionamento de nós vetoriais de controle, garantindo curvas orgânicas com mínima carga computacional e máxima fluidez mecânica.",
    "definition": "A Geração Automática de Nós e Simplificação de Curvas Bézier (Automatic Node Placement & Spline Optimization) é a rotina algorítmica executada durante a criação e edição de contornos de objetos de bordado. Quando um vetor é desenhado ou importado de programas gráficos (CorelDraw, Illustrator), ele pode conter milhares de nós sobrepostos e irregulares. Esse módulo redistribui os nós de ancoragem nos pontos de inflexão máxima da curva (vértices e ápices) e calcula as alças tangenciais de controle (handles), reduzindo a quantidade de nós em até 80% sem deformar a silhueta original do desenho.",
    "technicalDetails": "O algoritmo aplica a curva cúbica de Bézier definida por B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃ para t ∈ [0,1]. Ele ajusta a posição dos nós de controle P₁ e P₂ de forma a manter a continuidade de curvatura G² (Geométrica de Segunda Ordem), garantindo que a variação de raio de curvatura seja gradual, evitando solavancos nos servomotores do pantógrafo.",
    "construction": [
      "Algoritmo de eliminação de nós redundantes (Douglas-Peucker)",
      "Classificador de nós (Nós de Canto Rígido vs Nós Suaves de Curva)",
      "Controlador de manípulos tangenciais simétricos e assimétricos",
      "Tolerância vetorial de erro de contorno ajustável (0.05 mm a 0.15 mm)",
      "Interface de manipulação gráfica de nós em tempo real"
    ],
    "howItWorks": [
      "1. O operador desenha uma forma curva ou importa um logotipo com muitos nós serrilhados.",
      "2. Executa a ferramenta de simplificação de nós ou conversão automática para curvas suaves.",
      "3. O software detecta onde a curva muda de sentido e posiciona apenas os nós estritamente necessários.",
      "4. O cálculo de pontos de bordado resulta em bordas perfeitamente lisas, sem microparadas ou ruídos na máquina."
    ],
    "mainTypes": [
      "Simplificação Automática Global de Vetores (Para logotipos importados de vetorização automática)",
      "Conversão Manual de Nó de Canto em Nó de Arco (Para edição refinada de tipografia)",
      "Redução Inteligente com Preservação de Cantos Vivos (Corner-Preserving Spline Optimization)"
    ],
    "characteristics": [
      "Contornos curvos impecáveis e sem aspecto de polígono ou escadinha",
      "Diminuição drástica do tamanho do arquivo da matriz (.EMB / .PES / .DST)",
      "Movimentação do bastidor extremamente macia e silenciosa na máquina"
    ],
    "limitations": [
      "Tolerâncias de simplificação muito altas (acima de 0.3 mm) podem arredondar cantos afiados propositais",
      "Exige que o programador saiba diferenciar nós amarelos (suaves) de nós azuis (cantos)"
    ],
    "numberingSystem": [
      "Tolerância Padrão de Simplificação: 0.08 mm a 0.12 mm",
      "Distância Mínima entre Nós: 0.8 mm",
      "Ângulo de Detecção de Canto Vivo: 45° a 70°"
    ],
    "advantages": [
      "✔ Facilidade enorme para redimensionar e editar matrizes sem deformações",
      "✔ Redução de quebras de linha provocadas por micro-vibrações da agulha",
      "✔ Matrizes profissionais limpas que bordam muito mais rápido"
    ],
    "commonErrors": [
      "❌ Deixar 30 nós em uma curva simples de apenas 2 cm (deveria ter apenas 2 nós)",
      "❌ Usar nó de canto em um arco redondo (cria uma ponta feia na costura)",
      "❌ Usar nó suave na ponta de uma estrela (arredonda a ponta afiada)"
    ],
    "voceSabia": "Um círculo perfeito no software de bordado profissional precisa de apenas 4 nós de controle (um em cima, um embaixo, um na esquerda e um na direita). Se tiver mais do que isso, a máquina vai bordar mais devagar e trepidando!",
    "curiosidadeTecnica": "As curvas Bézier foram desenvolvidas pelo engenheiro francês Pierre Bézier em 1962 para projetar as carrocerias dos carros da Renault, tornando-se o padrão mundial de todos os softwares de computação gráfica e bordado digital.",
    "dicaArtrelados": "Ao editar uma matriz no Wilcom, aperte 'H' para ver os nós. Se uma linha tiver uma fileira enorme de quadradinhos juntos, selecione todos e aperte 'Delete' deixando apenas os das pontas. Sua matriz vai ficar mil vezes mais limpa e bonita!",
    "applications": [
      "Limpeza e otimização de logotipos vetorizados automaticamente a partir de fotos",
      "Digitalização de arabescos e monogramas caligráficos com linhas sinuosas",
      "Ajuste de contornos anatômicos em matrizes florais e botânicas",
      "Redução de arquivos pesados de bordado que travam a memória de máquinas antigas"
    ],
    "troubleshootingTips": [
      "Se a máquina está fazendo barulho de estalo em uma curva, inspecione a matriz e apague nós sobrepostos na mesma coordenada.",
      "Se uma ponta afiada ficou redonda após aplicar a simplificação, clique no nó e altere a propriedade para 'Canto Rígido'.",
      "Se a curva perdeu o formato original, reduza o valor da tolerância de simplificação para 0.05 mm."
    ],
    "relatedTerms": [
      "Nós de Controle (Vector Nodes)",
      "Curvas Bézier",
      "Vetorização de Matrizes",
      "Tolerância de Contorno",
      "Pontos Pequenos"
    ],
    "tags": [
      "geracao-nos",
      "bezier",
      "simplificacao",
      "curvas",
      "programacao",
      "wilcom",
      "otimizacao"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Vector Path Editing and Node Manipulation Guide. Sydney: Wilcom, 2023. TAJIMA GROUP. Bézier Spline Curves in Modern Digitizing. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Vector Path Editing and Node Manipulation Guide. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Bézier Spline Curves in Modern Digitizing. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Otimização Geométrica e Controle de Nós Bézier no Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Importe um desenho no seu software e faça a vetorização automática. Conte quantos nós foram criados na borda. Em seguida, use a ferramenta de simplificação de nós para reduzir essa quantidade a menos da metade. Borde as duas versões e compare a maciez do movimento do bastidor!",
    "quickSummary": "A geração de nós organiza os pontos de controle das linhas curvas no computador, deixando o desenho lisinho, o arquivo leve e o bordado macio.",
    "beginnerExplanation": "Imagine que os nós são alfinetes que seguram uma linha curva no lugar. Se você colocar alfinetes demais, a linha fica toda picotada e torta. Esse recurso tira os alfinetes que estão sobrando e deixa só os necessários, fazendo a curva ficar redonda, limpa e perfeitamente lisa!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Universal ou Ponta Bola",
      "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
      "threadTension": "105 a 115gf",
      "density": "Padrão"
    }
  },
  {
    "id": "g-077-grupo-objetos-hierarquia-agrupamento-matriz",
    "code": "G-077",
    "letter": "G",
    "term": "Grupo de Objetos e Hierarquia de Agrupamento na Matriz (Object Grouping & Multi-Level Layer Hierarchy)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Dos sistemas operacionais de CAD e design gráfico vetorial, incorporado aos softwares de bordado computadorizado para organizar matrizes complexas.",
    "summary": "Recurso de organização estrutural que une múltiplos elementos e camadas de bordado em blocos lógicos, facilitando a movimentação, duplicação e alteração de escala.",
    "definition": "O Grupo de Objetos e Hierarquia de Agrupamento (Object Grouping & Sequence Hierarchy) é o recurso de arquitetura de projeto no software de bordado que permite reunir diferentes elementos (como o preenchimento, o reforço, os detalhes internos e o contorno de um personagem) sob uma única entidade hierárquica. Ao agrupar os objetos, o programador pode redimensionar, rotacionar, duplicar ou alterar a ordem de bordado de todo o conjunto de uma só vez, com a certeza absoluta de que nenhum elemento interno (como os olhos ou contornos) ficará para trás ou fora de sincronia com a sua base.",
    "technicalDetails": "Na árvore de objetos do software (Object Tree / Sequence Docker), o agrupamento cria um nó pai que herda transformações afins bidimensionais (matriz de translação, rotação e escala: [x', y', 1] = [x, y, 1] · M). O recurso preserva a ordem cronológica interna dos objetos filhos, impedindo que comandos de reordenação externa quebrem a sequência lógica de 'fundo primeiro, detalhes depois'.",
    "construction": [
      "Árvore de sequência hierárquica (Object List / Docker)",
      "Comandos universais de agrupamento (Ctrl+G) e desagrupamento (Ctrl+U)",
      "Agrupamento multinível aninhado (Grupos dentro de Subgrupos)",
      "Bloqueio de seleção individual dentro do grupo (Lock Group Editing)",
      "Propriedades compartilhadas em lote (mudança de cor ou densidade coletiva)"
    ],
    "howItWorks": [
      "1. O programador desenha uma flor completa contendo caule, pétalas amarelas, miolo marrom e contorno preto.",
      "2. Seleciona todos os elementos e aperta Ctrl+G para criar o grupo 'Flor Completa'.",
      "3. Ao mover a flor de lugar ou duplicá-la para fazer um buquê, todos os elementos se movem perfeitamente juntos sem desalinhar.",
      "4. Se precisar mudar apenas a cor do miolo, clica duas vezes no grupo para editar o elemento filho sem precisar desmanchar o agrupamento."
    ],
    "mainTypes": [
      "Agrupamento por Bloco Temático (Ex: Personagem A, Personagem B, Moldura e Nome)",
      "Agrupamento por Cor / Troca de Fio (Color Grouping para otimizar cortes de linha)",
      "Agrupamento Aninhado Multinível (Grupos de letras formando palavras, que formam frases)"
    ],
    "characteristics": [
      "Organização profissional e limpa da matriz mesmo com centenas de elementos",
      "Impossibilidade de esquecer detalhes soltos ao arrastar o desenho no programa",
      "Agilidade gigantesca na montagem de montagens de enxovais e composições de matrizes"
    ],
    "limitations": [
      "Agrupar objetos de cores diferentes pode impedir a otimização automática de cores se não for desagrupado no final",
      "Exige atenção para não criar grupos dentro de grupos desnecessariamente, dificultando a edição"
    ],
    "numberingSystem": [
      "Atalho de Agrupamento: Ctrl + G (Global)",
      "Atalho de Desagrupamento: Ctrl + U (Ungroup)",
      "Níveis de Aninhamento Típicos: 1 a 4 níveis"
    ],
    "advantages": [
      "✔ Segurança total contra desalinhamentos acidentais durante a montagem do projeto",
      "✔ Rapidez para criar matrizes espelhadas, buquês e molduras simétricas",
      "✔ Facilidade para trocar a cor de múltiplos objetos de uma só vez"
    ],
    "commonErrors": [
      "❌ Deixar dezenas de elementos soltos e tentar arrastar a matriz (um pedaço fica para trás)",
      "❌ Agrupar a matriz inteira e não conseguir mudar a cor de um detalhe pequeno",
      "❌ Reordenar um grupo sem conferir se a ordem de costura interna foi preservada"
    ],
    "voceSabia": "As melhores matrizes comerciais vendidas no mundo vêm com todos os elementos perfeitamente agrupados e nomeados na lista de objetos, facilitando para quem vai bordar saber exatamente o que é cada parte do desenho!",
    "curiosidadeTecnica": "O formato de arquivo EMB do Wilcom armazena os metadados de grupo como nós de grafo acíclico dirigido (DAG), o que permite aplicar transformações geométricas sem recalcular a geometria vetorial de cada ponto até o momento da geração final.",
    "dicaArtrelados": "Sempre que terminar de digitalizar uma flor, um ursinho ou uma letra com aplique, selecione tudo e aperte Ctrl+G! Isso evita que você clique sem querer em uma folhinha e ela saia do lugar na hora de montar seu bastidor!",
    "applications": [
      "Montagem de composições de bastidores com múltiplos desenhos coordenados",
      "Criação de alfabetos e fontes com apliques e contornos conjugados",
      "Duplicação e espelhamento de arabescos para cantos de toalhas e lençóis",
      "Organização de logotipos corporativos com símbolos e textos separados"
    ],
    "troubleshootingTips": [
      "Se você não consegue selecionar um detalhe pequeno para mudar de cor, selecione o grupo e aperte Ctrl+U para desagrupar.",
      "Se ao mover um desenho os olhos do bichinho ficaram no lugar antigo, desfaça a ação (Ctrl+Z), selecione tudo com a caixa de seleção e agrupe (Ctrl+G).",
      "Se a máquina está trocando de cor toda hora, desagrupe os objetos e faça a junção de cores iguais com o comando 'Otimizar Cores'."
    ],
    "relatedTerms": [
      "Lista de Objetos (Object Tree)",
      "Ordem de Bordado",
      "Otimização de Cores",
      "Transformação Vetorial",
      "Camadas (Layers)"
    ],
    "tags": [
      "grupo-objetos",
      "agrupamento",
      "organizacao",
      "arvore-objetos",
      "programacao",
      "wilcom",
      "camadas"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Managing Design Elements, Grouping and Hierarchy. Sydney: Wilcom, 2023. BROTHER EMBROIDERY. PE-Design Layer Management and Object Grouping. Nagoya: Brother, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Managing Design Elements, Grouping and Hierarchy. Sydney: Wilcom, 2023.",
      "BROTHER EMBROIDERY. PE-Design Layer Management and Object Grouping. Nagoya: Brother, 2022.",
      "ARTRELADOS. Metodologia de Organização e Estrutura de Camadas no Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Desenhe um ursinho no software contendo corpo, cabeça, orelhas, olhos e nariz. Agrupe primeiro cada orelha individualmente com seu miolo. Depois, agrupe a cabeça com todos os detalhes do rosto. Por fim, agrupe o ursinho inteiro. Experimente arrastá-lo, aumentá-lo e rotacioná-lo para ver como todos os pedacinhos se comportam com perfeição!",
    "quickSummary": "O agrupamento junta as várias partes de um desenho em um único bloco para você mover, aumentar ou girar sem perder nenhum pedaço pelo caminho.",
    "beginnerExplanation": "Sabe quando você monta um quebra-cabeça e quer mudar ele de lugar na mesa sem que ele se desmonte todo? O agrupamento é como passar uma fita transparente por trás: ele gruda todas as pecinhas do desenho juntas para você mexer nele com tranquilidade!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "g-078-guia-ramificacao-automatica-caminho-sem-cortes",
    "code": "G-078",
    "letter": "G",
    "term": "Guia de Ramificação Automática e Caminho Sem Cortes (Branching Routing Guide & Branching Pathing)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Desenvolvido pelos matemáticos da Wilcom International na década de 1990 com base na teoria de grafos de Euler (Eulerian Path) para eliminar cortes de linha em matrizes complexas.",
    "summary": "Ferramenta algorítmica revolucionária que calcula a trajetória ideal para bordar múltiplos ramos conectados com um único início e fim, sem nenhum corte de linha.",
    "definition": "A Guia de Ramificação Automática (Automatic Branching & Pathing Engine) é uma das ferramentas mais sofisticadas da programação de bordado. Ela recebe um conjunto de dezenas de objetos interconectados da mesma cor (como galhos de árvores, arabescos, letras cursivas entrelaçadas ou monogramas) e calcula automaticamente a rota de costura perfeita. O algoritmo gera reforços que percorrem todo o desenho por baixo, posiciona pontos de viagem invisíveis sob as futuras colunas de ponto cheio e organiza a sequência de costura para que a máquina borde todos os galhos e volte preenchendo o topo, terminando onde o operador desejar sem efetuar um único corte de linha.",
    "technicalDetails": "O algoritmo modela o conjunto de objetos como um multigrafo conexo não-orientado G=(V, E). Ele identifica vértices de grau ímpar e insere caminhos eulerianos mínimos de reforço subterrâneo (Walk Paths) para duplicar as arestas necessárias. Em seguida, gera os pontos de cobertura (Cover Satin/Tatami) em ordem topológica inversa, garantindo que as junções em 'T' fiquem ocultas sob os nós principais.",
    "construction": [
      "Calculador de trajeto euleriano mínimo (Eulerian Path Solver)",
      "Gerador automático de reforço subterrâneo contínuo (Traveling Underlay)",
      "Definição flexível de pontos de entrada (Entry) e saída (Exit)",
      "Algoritmo de mascaramento de junções de ponto cheio em vértices",
      "Eliminador automático de amarrações e cortes intermediários de linha"
    ],
    "howItWorks": [
      "1. O programador desenha uma árvore cheia de dezenas de pequenos galhos e ramos em ponto cheio.",
      "2. Seleciona todos os galhos da árvore e clica na ferramenta 'Ramificação' (Branching).",
      "3. Clica no tronco para definir o ponto de início e na ponta do último galho para o ponto de término.",
      "4. O software calcula tudo instantaneamente: a máquina borda a árvore inteira de forma contínua, economizando mais de 20 cortes de linha e minutos de produção."
    ],
    "mainTypes": [
      "Ramificação de Ponto Cheio / Satim (Para galhos, arabescos florais e caligrafias)",
      "Ramificação de Ponto Corrido / Triplo (Para rendas finas, monogramas e traçados artísticos)",
      "Ramificação Mista de Preenchimento e Contorno (Para brasões e emblemas complexos)"
    ],
    "characteristics": [
      "Redução de até 90% no tempo de máquina decorrente de paradas e cortes de linha",
      "Avesso do bordado incrivelmente limpo, sem nós ou pontas de linha soltas",
      "Eliminação do risco de a agulha despassar durante trocas frequentes de corte"
    ],
    "limitations": [
      "Todos os objetos selecionados precisam pertencer à mesma cor de linha e tocar-se fisicamente",
      "Exige atenção para que os reforços de viagem não passem por fora dos limites do ponto cheio"
    ],
    "numberingSystem": [
      "Economia Média de Tempo de Máquina: 30% a 50%",
      "Redução de Cortes de Linha: De dezenas para apenas 1 corte final",
      "Espaçamento do Reforço de Viagem: 0.20 mm dentro da coluna"
    ],
    "advantages": [
      "✔ A máquina borda sem parar em ritmo contínuo, com alta produtividade",
      "✔ Avesso limpo e sem fios soltos que possam incomodar a pele em roupas infantis",
      "✔ Aumento da vida útil das facas de corte automático da máquina de bordar"
    ],
    "commonErrors": [
      "❌ Não usar a ramificação em arabescos cheios de galhos, fazendo a máquina dar 30 cortes em 2 minutos",
      "❌ Ramificar objetos que não se tocam (o software é forçado a criar um salto visível)",
      "❌ Mudar a escala da matriz após a ramificação sem recalcular o trajeto"
    ],
    "voceSabia": "A ferramenta de ramificação da Wilcom é considerada por especialistas em bordado industrial a maior invenção de software das últimas três décadas, economizando bilhões de horas de trabalho e desgastes de facas em fábricas no mundo todo!",
    "curiosidadeTecnica": "O problema matemático resolvido pela ramificação é uma variante do famoso enigma das 'Sete Pontes de Königsberg', solucionado pelo célebre matemático Leonhard Euler em 1736.",
    "dicaArtrelados": "Sempre que for bordar galhos de árvores, arabescos de casamento ou nomes cursivos cheios de detalhes: selecione tudo e aperte a tecla 'I' no Wilcom (Branching). Sua máquina vai bordar tudo de uma vez só, suave e sem nenhum corte!",
    "applications": [
      "Bordado de arabescos e filigranas para enxovais de luxo e toalhas de banho",
      "Ramos florais, folhas e videiras entrelaçadas em vestidos de festa",
      "Monogramas cursivos e caligrafias clássicas em brasões de noiva",
      "Bordados em peças de bebê onde o avesso precisa ser extremamente limpo"
    ],
    "troubleshootingTips": [
      "Se a ramificação gerou um corte no meio, verifique se todos os galhos estão realmente encostando uns nos outros no desenho vetorial.",
      "Se o ponto de viagem apareceu do lado de fora do galho, aumente a largura da coluna de ponto cheio para pelo menos 1.0 mm.",
      "Se o bordado terminou em um lugar indesejado, selecione o objeto ramificado e redefina os pontos de entrada e saída com a ferramenta de edição de nós."
    ],
    "relatedTerms": [
      "Ramificação (Branching)",
      "Corte de Linha Automático",
      "Ponto de Viagem (Travel Stitch)",
      "Reforço Subterrâneo",
      "Avesso Perfeito"
    ],
    "tags": [
      "ramificacao",
      "branching",
      "caminho-sem-cortes",
      "arabescos",
      "otimizacao",
      "wilcom",
      "produtividade"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Automatic Branching and Path Sequencing Engine. Sydney: Wilcom, 2023. TAJIMA GROUP. Travel Path Optimization and Trim Reduction. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Automatic Branching and Path Sequencing Engine. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Travel Path Optimization and Trim Reduction. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Teoria de Grafos e Otimização de Trajetórias sem Cortes no Bordado Industrial. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Desenhe 5 ramos conectados com ponto cheio no seu software. Borde a primeira versão na máquina sem ramificação (conte quantas vezes a máquina cortou a linha). Em seguida, aplique a ferramenta de ramificação (Branching) com entrada no galho principal e borde novamente. Marque no cronômetro a diferença de tempo e olhe o avesso de ambos!",
    "quickSummary": "A ramificação automática faz a máquina bordar dezenas de galhos e detalhes interligados de uma vez só, sem nenhum corte de linha no meio.",
    "beginnerExplanation": "Sabe quando a máquina fica parando, cortando a linha, dando um nó e recomeçando a cada galhinho de flor? A ramificação é um truque mágico do computador que faz a máquina bordar tudo em uma linha contínua só, como desenhar sem tirar o lápis do papel!",
    "recommendedSettings": {
      "speedPPM": "800 a 950 PPM",
      "needleType": "75/11 Universal ou Ponta Bola",
      "stabilizer": "Entretela Rasgável 50g",
      "threadTension": "105 a 115gf",
      "density": "0.38 mm a 0.40 mm"
    }
  },
  {
    "id": "g-079-grau-inclinacao-direcao-angular-ponto-tatami",
    "code": "G-079",
    "letter": "G",
    "term": "Grau de Inclinação e Direção Angular do Ponto Tatami (Tatami Stitch Angle Degree & Directional Vector)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Dos fundamentos de tecelagem e física óptica de reflexão de filamentos têxteis aplicados aos softwares de CAD de bordado desde a década de 1980.",
    "summary": "Ângulo direcional em graus (de 0° a 360°) que define a trajetória de costura do preenchimento tatami, governando a tração do tecido e o reflexo da luz.",
    "definition": "O Grau de Inclinação e Direção Angular do Ponto Tatami (Tatami Stitch Angle & Directional Vector) é a variável fundamental de digitalização que estabelece a inclinação exata das linhas de costura em relação ao eixo horizontal do bastidor (0°). Além de determinar a estética visual e o brilho acetinado do bordado (já que as fibras de poliéster refletem a luz perpendicularmente ao ângulo do ponto), o grau de inclinação controla as forças físicas de repuxo do tecido: a costura sempre contrai o tecido na direção transversal aos pontos e o estica no sentido longitudinal.",
    "technicalDetails": "O vetor angular θ define o campo vetorial unitário u = (cos θ, sin θ). Ao digitalizar objetos vizinhos, defasar os ângulos em 30° a 45° evita a deformação cumulativa unidirecional do bastidor. Para superfícies anatômicas ou curvas, o software pode aplicar ângulos curvos contínuos (Curved Stitch Angles) gerados por equações de fluxo de Laplace.",
    "construction": [
      "Linha guia de vetor angular (Stitch Angle Line com indicador de seta)",
      "Controle de ângulo único fixo (0° a 180° / 360°)",
      "Múltiplos ângulos curvos contínuos (Turning Stitch Angles)",
      "Calculador de compensação de repuxo direcional acoplado",
      "Pré-visualização 3D com simulação fotorrealista de reflexo de luz"
    ],
    "howItWorks": [
      "1. O programador cria uma forma geométrica ou letra grande com preenchimento tatami.",
      "2. Insere uma linha de ângulo a 45° para obter o brilho mais equilibrado e evitar que a costura siga a mesma direção da trama do tecido.",
      "3. Em uma área vizinha, aplica o ângulo a 135° (perpendicular), criando um contraste visual imediato mesmo usando exatamente a mesma linha.",
      "4. Na máquina, o tecido se mantém perfeitamente plano e estável, e o desenho ganha tridimensionalidade e vida."
    ],
    "mainTypes": [
      "Ângulo Único Inclinado (45° ou 135° - o padrão de ouro para estabilidade e brilho)",
      "Ângulos Curvos / Anatômicos (Turning Tatami para corpos de animais e pétalas)",
      "Ângulos Cruzados em Camadas (Para controle total de repuxo em malhas e sedas)"
    ],
    "characteristics": [
      "Controle absoluto da estabilidade mecânica do tecido durante o bordado",
      "Criação de contrastes de luz e sombra sem necessidade de trocar a cor da linha",
      "Eliminação de dobras e franzimentos no tecido por compensação de forças"
    ],
    "limitations": [
      "Ângulos exatamente paralelos à trama ou urdume do tecido (0° ou 90°) tendem a repuxar mais e afundar os pontos",
      "Ângulos curvos muito fechados podem acumular pontos e quebrar a agulha no centro da curva"
    ],
    "numberingSystem": [
      "Ângulos Recomendados mais Estáveis: 35° a 55° (ou 125° a 145°)",
      "Ângulos Críticos que Exigem Cuidado: 0° (horizontal pura) e 90° (vertical pura)",
      "Defasagem entre Objetos Adjacentes: 30° a 90°"
    ],
    "advantages": [
      "✔ O tecido não enruga e não deforma no bastidor",
      "✔ Desenhos monocromáticos ganham profundidade e efeito de relevo sofisticado",
      "✔ As bordas e contornos se encaixam perfeitamente sem falhas"
    ],
    "commonErrors": [
      "❌ Colocar todas as partes de um desenho grande com o ângulo a 90° (repuxa o tecido inteiro para o meio)",
      "❌ Fazer o ângulo do tatami no mesmo sentido da costura da camisa",
      "❌ Usar ângulo reto em círculos perfeitos (eles viram ovais por causa do repuxo)"
    ],
    "voceSabia": "Se você bordar duas metades de um coração usando exatamente a mesma linha vermelha, mas colocar o ângulo da esquerda a 45° e o da direita a 135°, a luz vai bater e fazer um lado parecer vermelho claro e o outro vermelho escuro! Parece mágica!",
    "curiosidadeTecnica": "A luz que incide sobre um filamento cilíndrico de poliéster trilobal sofre reflexão especular primária a 90° em relação ao eixo longitudinal do fio, permitindo mapear a refletância anisotrópica por equações de Phong.",
    "dicaArtrelados": "Nunca programe um tatami grande com ângulo a 0° ou 90° retos! Sempre incline as linhas para 45 graus. Isso evita que a agulha entre exatamente nos mesmos fios da trama do tecido e deixa o bordado incrivelmente mais brilhante e liso!",
    "applications": [
      "Grandes preenchimentos em jaquetas, uniformes e capas de almofadas",
      "Bordados monocromáticos de luxo (branco sobre branco ou preto sobre preto)",
      "Digitalização de pétalas, asas e penas com orientação anatômica",
      "Estabilização de matrizes para tecidos elásticos e malhas caneladas"
    ],
    "troubleshootingTips": [
      "Se o tecido está franzindo em formato de sanfona, mude a direção do ângulo do tatami em 45°.",
      "Se uma parte do desenho parece apagada e fosca, gire a linha de ângulo em 90° para que a luz ambiente reflita diretamente nos olhos do observador.",
      "Se os contornos estão saindo fora do lugar nas laterais, inverta a inclinação do ângulo para compensar a tração."
    ],
    "relatedTerms": [
      "Ângulo de Ponto",
      "Ponto Tatami",
      "Compensação de Puxão",
      "Reflexão Anisotrópica",
      "Estabilidade Estrutural"
    ],
    "tags": [
      "grau-inclinacao",
      "direcao-angular",
      "tatami",
      "angulos",
      "reflexo-luz",
      "programacao",
      "wilcom"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Stitch Angles, Turning Fills and Optical Properties. Sydney: Wilcom, 2023. TAJIMA GROUP. Directional Stitch Angle Dynamics in Embroidery Engineering. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Stitch Angles, Turning Fills and Optical Properties. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Directional Stitch Angle Dynamics in Embroidery Engineering. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Física da Luz e Forças Direcionais de Ponto no Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize dois círculos de 40 mm com ponto tatami lado a lado. No primeiro, coloque o ângulo a 0° (horizontal). No segundo, coloque o ângulo a 45° (inclinado). Borde ambos na mesma malha de algodão. Meça com uma régua o diâmetro dos dois após saírem do bastidor e veja como o de 45° manteve a forma redonda muito melhor!",
    "quickSummary": "O grau de inclinação é a direção em que os pontos tatami são costurados, controlando para onde o tecido repuxa e como a linha brilha sob a luz.",
    "beginnerExplanation": "Pense no ângulo do ponto como a direção em que você penteia o cabelo: se pentear para o lado ou para trás, o visual muda completamente! Na máquina de bordar, inclinar os pontos a 45 graus faz a linha brilhar muito mais e impede que o tecido fique amassado ou torto!",
    "recommendedSettings": {
      "speedPPM": "750 a 900 PPM",
      "needleType": "75/11 Universal ou Ponta Bola",
      "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
      "threadTension": "105 a 115gf",
      "density": "0.38 mm a 0.42 mm com Ângulos a 45°/135°"
    }
  },
  {
    "id": "g-080-geracao-letras-monogramaticas-conexoes-embutidas",
    "code": "G-080",
    "letter": "G",
    "term": "Geração de Letras Monogramáticas com Conexões Embutidas (Monogram Lettering Generation & Seamless Joinery)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Das tradições da heráldica real europeia e do bordado de monogramas em enxovais nobres, adaptadas aos algoritmos de tipografia vetorial de ponto cheio.",
    "summary": "Sistema de digitalização de alfabetos entrelaçados e monogramas de luxo com conexões de costura contínuas e compensações automáticas de sobreposição.",
    "definition": "A Geração de Letras Monogramáticas com Conexões Embutidas (Monogram Lettering & Seamless Script Joinery) é a tecnologia de software voltada para a criação de iniciais de nomes, monogramas de casamento e arabescos tipográficos entrelaçados. Diferente de textos comuns, as letras monogramáticas possuem hastes curvilíneas espessas em ponto cheio que se cruzam harmoniosamente. O módulo calcula a hierarquia de sobreposição (qual letra passa por cima e qual passa por baixo), divide os pontos cheios nas interseções para evitar acúmulo de linha e conecta as letras com pontos de viagem subterrâneos (Run Underlay), permitindo bordar até 3 letras entrelaçadas sem nenhum corte de linha intermediário.",
    "technicalDetails": "O algoritmo realiza a decomposição de sobreposição booleana em 2D. Nas zonas de cruzamento entre as hastes das letras, ele reduz a densidade da camada inferior em 40% e aplica uma compensação de fenda de 0.2 mm (Split Line) para que a haste superior crie a ilusão física de profundidade e sombra em relevo.",
    "construction": [
      "Biblioteca de fontes monogramáticas nativas (Monogram Styles: Diamond, Circle, Script, Vintage)",
      "Módulo de hierarquia de cruzamento com controle de sobreposição (Over/Under Splitting)",
      "Conectores de costura subterrâneos contínuos (Seamless Traveling Walks)",
      "Compensação de puxão progressiva nas curvas externas das letras",
      "Molduras e arabescos decorativos conjugados sincronizados"
    ],
    "howItWorks": [
      "1. O operador abre o assistente de monogramas no software e digita as iniciais dos noivos (ex: 'M' e 'R').",
      "2. Escolhe o estilo caligráfico entrelaçado e a moldura floral clássica.",
      "3. O software gera as letras automaticamente com as conexões perfeitas e divisão inteligente nos pontos de cruzamento.",
      "4. Na máquina, o monograma é bordado de forma limpa, rápida e com brilho acetinado impecável em toalhas de linho ou roupões."
    ],
    "mainTypes": [
      "Monograma Cursivo Entrelaçado / Noiva (Para enxovais de casamento, lençóis e toalhas nobres)",
      "Monograma Circular / Diamante de 3 Letras (Para camisaria sob medida, punhos e bolsos sociais)",
      "Monograma Heráldico com Coroa e Louros (Para brasões de família e hotelaria de luxo)"
    ],
    "characteristics": [
      "Estética nobre e requintada com acabamento de alta costura",
      "Ausência de nós e pontas soltas na frente e no verso da peça",
      "Encaixe milimétrico entre as letras sem empilhar pontos que possam quebrar agulhas"
    ],
    "limitations": [
      "Letras muito reduzidas (menores que 15 mm) perdem a definição dos entrelaçamentos refinados",
      "Exige uso de entretelas de boa sustentação para manter o alinhamento das hastes curvas"
    ],
    "numberingSystem": [
      "Altura Típica de Monograma em Toalhas: 60 mm a 120 mm",
      "Altura em Punho de Camisa: 10 mm a 15 mm",
      "Densidade de Coluna de Ponto Cheio: 0.38 mm a 0.40 mm"
    ],
    "advantages": [
      "✔ Criação de presentes de luxo com alto valor agregado e excelente margem de lucro",
      "✔ Agilidade total: crie monogramas personalizados em menos de 2 minutos no computador",
      "✔ Costura fluida na máquina sem paradas ou arrebentamento de linha"
    ],
    "commonErrors": [
      "❌ Sobrepor duas letras comuns do computador sem tratar o cruzamento (cria uma pedra dura de pontos que quebra agulhas)",
      "❌ Não usar entretela firme em toalhas atoalhadas (os fios da toalha furam o monograma)",
      "❌ Fazer o monograma pequeno demais para a espessura da fonte"
    ],
    "voceSabia": "O mercado de monogramas para casamentos e enxovais de luxo é um dos mais lucrativos do bordado mundial: uma única toalha de banho personalizada com um belo monograma pode ser vendida por mais que o dobro do preço da toalha lisa!",
    "curiosidadeTecnica": "Nos tempos medievais, os reis assinavam documentos oficiais usando monogramas bordados em seda pura pelos mestres bordadores da coroa para garantir a autenticidade dos decretos reais.",
    "dicaArtrelados": "Ao bordar monogramas em toalhas felpudas: use sempre uma camada de plástico filme hidrossolúvel por cima da toalha no bastidor e entretela rasgável dupla embaixo. O monograma fica com um acabamento gordinho, lisinho e brilhante como um espelho!",
    "applications": [
      "Personalização de enxovais de casamento, lençóis de algodão egípcio e edredons",
      "Toalhas de banho e rosto para lavabos finos e hotelaria boutique",
      "Iniciais bordadas no punho de camisas sociais sob medida e gravatas",
      "Bolsas de maternidade, mantas e roupões de bebê com monogramas clássicos"
    ],
    "troubleshootingTips": [
      "Se a agulha está quebrando bem no ponto onde as letras se cruzam, ative a divisão automática de pontos sobrepostos no software.",
      "Se a toalha está engolindo os pontos finos do monograma, coloque plástico hidrossolúvel no topo e aumente a densidade do reforço.",
      "Se as letras ficaram finas e magras no tecido, aumente a compensação de puxão para 0.40 mm."
    ],
    "relatedTerms": [
      "Monograma",
      "Ponto Cheio (Satin)",
      "Compensação de Sobreposição",
      "Tipografia no Bordado",
      "Plástico Hidrossolúvel"
    ],
    "tags": [
      "monograma",
      "letras-monogramaticas",
      "enxoval-luxo",
      "casamento",
      "tipografia",
      "wilcom",
      "alta-costura"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Monogram Maker and Advanced Lettering Techniques. Sydney: Wilcom, 2023. ROYAL SCHOOL OF NEEDLEWORK. Monograms, Heraldry and Monogram Script Embroidery. London: RSN, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Monogram Maker and Advanced Lettering Techniques. Sydney: Wilcom, 2023.",
      "ROYAL SCHOOL OF NEEDLEWORK. Monograms, Heraldry and Monogram Script Embroidery. London: RSN, 2022.",
      "ARTRELADOS. A Arte dos Monogramas e Brasões no Bordado Computadorizado de Luxo. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Abra a ferramenta de monogramas no seu software. Digite a inicial do seu nome com uma fonte clássica estilo Script de 80 mm de altura e selecione uma moldura oval com arabescos. Borde em uma toalhinha de lavabo com linha dourada ou prata e plástico solúvel no topo. Sinta com as mãos o luxo e o relevo do resultado!",
    "quickSummary": "O gerador de monogramas cria iniciais e letras entrelaçadas de luxo com pontos cheios e conexões perfeitas para enxovais de casamento e toalhas finas.",
    "beginnerExplanation": "Sabe aquelas iniciais de casamento super elegantes e desenhadas que a gente vê em toalhas de hotéis de luxo e lençóis nobres? Esse recurso cria essas letras chiques automaticamente, com as curvas certinhas para a máquina bordar macio e o bordado parecer feito de ouro!",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 Ponta Bola ou Universal",
      "stabilizer": "Entretela Rasgável Dupla + Filme Solúvel no topo",
      "threadTension": "100 a 110gf",
      "density": "0.38 mm com Compensação de Puxão de 0.35 mm"
    }
  },
  {
    "id": "g-081-gerenciador-paleta-cores-mapeamento-fios-rgb-pantone",
    "code": "G-081",
    "letter": "G",
    "term": "Gerenciador de Paleta de Cores e Mapeamento de Fios RGB/Pantone (Thread Palette Manager & Pantone Color Mapping)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Dos sistemas de calibração cromática digital CIE L*a*b* e catálogos internacionais de fios de bordar (Madeira, Polyneon, Isacord, Lumina) digitalizados na década de 1990.",
    "summary": "Sistema de gerenciamento de cores do software que converte vetores RGB/CMYK em códigos reais de carretéis de linha dos principais fabricantes do mundo.",
    "definition": "O Gerenciador de Paleta de Cores e Mapeamento de Fios (Thread Color Palette Management & Delta-E Color Matching) é a ferramenta que faz a ponte entre as cores digitais da tela do computador e os carretéis físicos de linha disponíveis no ateliê. Ele compara os valores RGB ou códigos Pantone da arte do cliente com tabelas espectrofotométricas dos fabricantes de fios (como Madeira, Coats Corrente, Isacord, Polyneon, Setalina, Lumina) e calcula matematicamente a correspondência mais próxima (menor distância cromática ΔE), gerando uma ficha técnica de produção (Production Worksheet) com a numeração exata de cada cone a ser colocado na máquina.",
    "technicalDetails": "O algoritmo converte os canais sRGB da arte vetorial no espaço de cores perceptualmente uniforme CIE L*a*b* e calcula a distância euclidiana pelo padrão CIEDE2000: ΔE*₀₀ = √((ΔL'/k_L S_L)² + (ΔC'/k_C S_C)² + (ΔH'/k_H S_H)² + R_T (ΔC'/k_C S_C)(ΔH'/k_H S_H)). Um valor de ΔE < 1.0 indica que a diferença de cor entre a linha física e a arte na tela é praticamente invisível ao olho humano.",
    "construction": [
      "Tabelas digitais de fabricantes de fios (Madeira Polyneon/Rayon, Isacord, Coats, Lumina, Sulky)",
      "Algoritmo de correspondência cromática CIE L*a*b* / CIEDE2000",
      "Mapeador de paleta personalizada do ateliê (My Threads Chart)",
      "Gerador de ficha técnica de produção para o operador de máquina (Color Sequence Sheet)",
      "Simulador de brilho e textura física de fios de poliéster, viscose e metalizados"
    ],
    "howItWorks": [
      "1. O programador importa o logotipo do cliente com as cores corporativas (ex: Pantone 286 C e Pantone 186 C).",
      "2. Abre o gerenciador de paletas e seleciona a marca de linha que possui no estoque do ateliê (ex: Lumina Poliéster).",
      "3. O software encontra instantaneamente as cores de linha mais próximas e exibe o código exato de cada cone.",
      "4. Imprime a ficha de produção com a lista de agulhas e cores, permitindo ao operador preparar a máquina sem dúvidas."
    ],
    "mainTypes": [
      "Mapeamento Automático por Proximidade Cromática (Delta-E Matching)",
      "Tabela de Fios do Próprio Ateliê (Estoque cadastrado de cones disponíveis)",
      "Conversão Cruzada entre Fabricantes (Ex: Converter códigos Madeira para Coats ou Lumina)"
    ],
    "characteristics": [
      "Fidelidade impressionante entre a arte aprovada pelo cliente e o bordado real no tecido",
      "Eliminação de erros de troca de cores por parte do operador da máquina",
      "Agilidade na identificação dos cones de linha na prateleira do ateliê"
    ],
    "limitations": [
      "Monitores não calibrados podem exibir cores ligeiramente diferentes da cor real do filamento",
      "A luz do ambiente (lâmpada amarela vs luz do sol) altera a percepção visual da cor do fio (metamerismo)"
    ],
    "numberingSystem": [
      "Tolerância Perceptiva Ideal: ΔE < 1.5",
      "Tabelas de Cores Globais Suportadas: Mais de 50 marcas internacionais",
      "Tamanho Típico da Paleta de Ateliê: 100 a 300 cones ativos"
    ],
    "advantages": [
      "✔ Nunca mais erre a tonalidade de um logotipo de cliente exigente",
      "✔ Economia de tempo: encontre o número do cone de linha em 2 cliques",
      "✔ Ficha técnica profissional que valoriza o trabalho do ateliê"
    ],
    "commonErrors": [
      "❌ Escolher uma cor genérica na tela e deixar o operador adivinhar qual cone usar",
      "❌ Não cadastrar as marcas de linhas que você realmente usa no seu ateliê",
      "❌ Esquecer de salvar a matriz no formato final com a ordem exata de paradas de agulha"
    ],
    "voceSabia": "Muitas bordadeiras guardam seus cones de linha organizados exatamente pelo número do código impresso na base do carretel, facilitando pegar a cor certa em segundos graças à ficha do software!",
    "curiosidadeTecnica": "O fenômeno do 'metamerismo' faz com que duas linhas que parecem exatamente iguais sob a luz fluorescente do ateliê fiquem diferentes quando o cliente vai para a luz do sol. Softwares avançados têm simuladores de iluminante D65!",
    "dicaArtrelados": "Cadastre no seu programa uma paleta chamada 'Minhas Linhas' com apenas as cores que você tem fisicamente na sua estante. Assim, o software sempre vai sugerir as cores que você já tem em mãos, evitando ter que sair correndo para comprar linha!",
    "applications": [
      "Bordado de uniformes corporativos com exigência de padrão de cor rigoroso",
      "Reprodução de personagens famosos de desenhos animados com cores originais exatas",
      "Organização de produção em ateliês com múltiplas máquinas e operadores",
      "Elaboração de fichas técnicas para controle de qualidade e expedição"
    ],
    "troubleshootingTips": [
      "Se a cor na tela parece muito diferente da cor no bordado real, use uma cartela física de amostras de fios com fios reais enrolados para conferir.",
      "Se a máquina está pedindo uma cor em ordem trocada, verifique a lista de paradas de cor na sequência de objetos da matriz.",
      "Se você não tem o tom exato do cliente, faça o teste de duas cores próximas no mesmo tecido para ele escolher antes de bordar o lote todo."
    ],
    "relatedTerms": [
      "Tabela de Fios (Thread Chart)",
      "Cartela de Cores Física",
      "Ficha Técnica de Bordado",
      "Ordem de Troca de Linha",
      "Metamerismo"
    ],
    "tags": [
      "paleta-cores",
      "tabela-fios",
      "pantone",
      "rgb",
      "ficha-tecnica",
      "gerenciador",
      "programacao"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Color Management and Thread Chart Integration. Sydney: Wilcom, 2023. INTERNATIONAL COMMISSION ON ILLUMINATION (CIE). Colorimetry Technical Report. Vienna: CIE, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Color Management and Thread Chart Integration. Sydney: Wilcom, 2023.",
      "INTERNATIONAL COMMISSION ON ILLUMINATION (CIE). Colorimetry Technical Report. Vienna: CIE, 2022.",
      "ARTRELADOS. Gestão Cromática e Mapeamento Espectrofotométrico de Fios no Bordado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Abra a matriz de um logotipo colorido no software. Mude a paleta para a marca de linha que você mais usa (ex: Lumina ou Madeira). Use o botão de correspondência automática e veja como o programa lista os números exatos dos cones. Imprima a ficha técnica e compare com os cones na sua prateleira!",
    "quickSummary": "O gerenciador de paletas conecta as cores do desenho no computador aos números reais dos cones de linha que você tem no ateliê.",
    "beginnerExplanation": "É como ter um assistente inteligente que olha para o desenho na tela e te diz: 'Pega o cone de linha número 205 da prateleira que é exatamente esse azul da foto!'. Você nunca mais perde tempo procurando qual linha combina com a imagem!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "g-082-gabarito-digital-bastidor-area-bordado-segura",
    "code": "G-082",
    "letter": "G",
    "term": "Gabarito Digital de Bastidor com Área de Bordado Segura (Digital Hoop Template & Safe Margin Enclosure)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Desenvolvido pelos fabricantes de máquinas domésticas e industriais (Brother, Janome, Barudan, Tajima) para prevenir colisões de agulhas e calcadores com o aro do bastidor.",
    "summary": "Representação gráfica do bastidor na tela do software e da máquina, exibindo as margens físicas reais de segurança para evitar que a agulha bata na moldura plástica.",
    "definition": "O Gabarito Digital de Bastidor com Área de Bordado Segura (Digital Hoop Display & Collision Boundary) é o sistema de referência dimensional que projeta na área de trabalho do software e no painel da máquina de bordar o contorno exato do bastidor selecionado (como 10x10 cm, 13x18 cm, 20x30 cm, bastidor de boné ou bastidores magnéticos). O sistema traça uma margem interna de segurança (geralmente de 5 a 10 mm em relação ao aro plástico ou metálico), impedindo que o operador posicione pontos de bordado na zona de perigo onde o calcador ou a haste da agulha colidiriam mecanicamente com o bastidor, o que quebraria agulhas e desregularia o ponto de sincronismo da máquina.",
    "technicalDetails": "O sistema mapeia o envelope de trabalho do pantógrafo nos limites [X_min + M, X_max - M] e [Y_min + M, Y_max - M], onde M é a margem de segurança do raio do calcador (tipicamente 6.5 mm). Ao detectar que um nó ou ponto extrapola esse limite, o software emite alertas sonoros e visuais e bloqueia o salvamento no formato nativo da máquina.",
    "construction": [
      "Biblioteca gráfica de bastidores padronizados por marca e modelo",
      "Linha de limite físico externo do aro (Outer Hoop Border)",
      "Linha pontilhada de área máxima de bordado seguro (Safe Sewing Field)",
      "Marcador de centro com retículo cartesiano (X=0, Y=0)",
      "Sensor de validação de envelope no painel da máquina (Trace / Contorno de Teste)"
    ],
    "howItWorks": [
      "1. O operador escolhe no software o bastidor que vai usar (ex: 13x18 cm da sua máquina).",
      "2. O gabarito aparece na tela mostrando a área útil exata e o centro com cruz de alinhamento.",
      "3. O operador ajusta o tamanho da matriz para caber confortavelmente dentro da margem pontilhada.",
      "4. Ao colocar na máquina, usa o botão de 'Traçar Área' (Trace) para confirmar no tecido antes de apertar o Play com 100% de segurança."
    ],
    "mainTypes": [
      "Gabarito Retangular / Quadrado (Para peças planas, toalhas e vestuário)",
      "Gabarito Redondo / Oval (Para camisas polo, punhos e chapéus)",
      "Gabarito de Bastidor Tubular de Boné (Cap Frame Template com curvatura 270°)"
    ],
    "characteristics": [
      "Proteção total contra batidas mecânicas destruidoras de agulha e lançadeira",
      "Centralização milimétrica de matrizes em relação ao ponto zero do bastidor",
      "Facilidade para escolher o menor bastidor possível para economizar entretela"
    ],
    "limitations": [
      "A área do gabarito é sempre menor que o tamanho físico total do aro plástico",
      "Usar bastidores paralelos de terceiros exige cadastrar as medidas personalizadas no software"
    ],
    "numberingSystem": [
      "Margem de Segurança Padrão: 5.0 mm a 8.0 mm de folga do aro",
      "Bastidores Domésticos Comuns: 100x100 mm, 130x180 mm, 160x260 mm, 200x300 mm",
      "Bastidores Industriais Comuns: 15 cm Redondo, 300x300 mm, 400x500 mm"
    ],
    "advantages": [
      "✔ Segurança absoluta: nunca mais quebre uma agulha batendo no bastidor",
      "✔ Alinhamento perfeito do desenho com as marcações feitas com fita métrica no tecido",
      "✔ Aproveitamento máximo da área de bordado sem riscos"
    ],
    "commonErrors": [
      "❌ Esticar a matriz até encostar na borda de plástico do bastidor (a agulha vai bater com força)",
      "❌ Não fazer a conferência de traçado (Trace) na máquina antes de começar a bordar",
      "❌ Escolher o bastidor errado no software (ex: desenhar para 20x30 e colocar o aro de 13x18 na máquina)"
    ],
    "voceSabia": "O botão 'Trace' (ou Traçado) presente na sua máquina de bordar move o bastidor nos quatro cantos extremos da matriz sem costurar, apenas para você ter certeza de que a agulha não vai bater em nada e que o bordado vai cair no lugar certo!",
    "curiosidadeTecnica": "Nas máquinas industriais de alta velocidade (1200 PPM), uma batida de agulha no aro do bastidor exerce uma força de impacto superior a 50 kgf instantâneos, capaz de entortar a barra da agulha e quebrar a ponta da lançadeira!",
    "dicaArtrelados": "Sempre escolha o menor bastidor em que sua matriz couber com pelo menos 1 cm de folga! Quanto menor o bastidor, mais esticado e firme o tecido fica, e menos o bordado vai repuxar ou enrugar!",
    "applications": [
      "Posicionamento de nomes e brasões em toalhas, fraldas e camisas",
      "Bordado de peças montadas com golas e zíperes próximos à área de costura",
      "Digitalização de matrizes grandes divididas em múltiplos estágios",
      "Bordados em bonés estruturados com limitação de altura frontal"
    ],
    "troubleshootingTips": [
      "Se a máquina apita e mostra a mensagem 'Matriz ultrapassa o bastidor', reduza o tamanho do desenho em 3% ou mude para o bastidor maior.",
      "Se a matriz não está centralizada no bastidor, use a ferramenta de 'Centralização Automática no Ponto Zero (0,0)' no software.",
      "Se o calcador está raspando no parafuso do bastidor, aumente a margem de segurança nas configurações do programa."
    ],
    "relatedTerms": [
      "Bastidor de Bordado",
      "Área Útil de Bordado",
      "Traçado de Teste (Trace)",
      "Ponto Zero (0,0)",
      "Colisão de Agulha"
    ],
    "tags": [
      "gabarito-bastidor",
      "area-segura",
      "bastidor",
      "seguranca",
      "centralizacao",
      "trace",
      "iniciante"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "BROTHER SEWING & EMBROIDERY. Hoop Templates and Sewing Area Boundary Manual. Nagoya: Brother, 2023. TAJIMA GROUP. Cap Frame and Tubular Hoop Clearance Guidelines. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "BROTHER SEWING & EMBROIDERY. Hoop Templates and Sewing Area Boundary Manual. Nagoya: Brother, 2023.",
      "TAJIMA GROUP. Cap Frame and Tubular Hoop Clearance Guidelines. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Guia de Segurança e Aproveitamento de Bastidores no Ateliê de Bordado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Coloque um tecido no bastidor 13x18 cm da sua máquina. Carregue uma matriz que ocupe quase todo o espaço. Antes de iniciar o bordado, aperte o botão 'Trace' e observe o calcador contornando os quatro cantos. Veja como a margem de segurança mantém a agulha a uma distância segura do plástico!",
    "quickSummary": "O gabarito digital mostra na tela o tamanho exato do seu bastidor com uma linha de segurança para a agulha nunca bater na moldura plástica.",
    "beginnerExplanation": "É como a cerca de um parquinho: o gabarito desenha o contorno do seu bastidor na tela e te mostra até onde você pode colocar o bordado com segurança, para que a agulha trabalhe livre e nunca bata nas bordas de plástico!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "g-083-ponto-grao-arroz-ponto-semente-computadorizado",
    "code": "G-083",
    "letter": "G",
    "term": "Ponto Grão de Arroz e Ponto Semente Computadorizado (Seed Stitch & Rice Grain Texture Pattern)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Do clássico ponto de bordado livre manual 'Seed Stitch' / 'Ponto Semente', adaptado para padrões de preenchimento programado em matrizes digitais.",
    "summary": "Ponto de preenchimento texturizado com pequenos pontos retos em direções alternadas, simulando grãos espalhados, textura de areia ou fundos vintage.",
    "definition": "O Ponto Grão de Arroz e Ponto Semente Computadorizado (Seed Stitch & Rice Grain Motif Pattern) é um padrão decorativo de preenchimento estruturado onde a agulha realiza pequenos pontos retos isolados (com comprimento de 1.8 a 2.5 mm) dispostos em orientações angulares ligeiramente alternadas e espaçadas. Ao contrário de um tatami fechado e pesado, o ponto semente cria uma textura rala, tátil e permeável que permite visualizar o tecido de base entre os grãos, sendo amplamente utilizado para preenchimento de fundos de paisagens (areia, terra, relva seca), miolos de flores, textura de pelúcias e fundos artísticos de 'Quilting' em toalhas e colchas.",
    "technicalDetails": "O padrão é gerado por uma matriz de repetição de motivo estocástico ou pseudo-aleatório. A densidade superficial é de apenas 15% a 30% de cobertura de fio em relação a um tatami maciço, o que reduz o consumo de linha em 70% e anula completamente a tensão e o repuxamento do tecido.",
    "construction": [
      "Matriz de repetição geométrica ou estocástica de micro-pontos",
      "Comprimento de grão programável (1.5 mm a 3.0 mm)",
      "Espaçamento inter-grãos ajustável (2.0 mm a 5.0 mm)",
      "Conexões invisíveis por baixo do tecido (Travel Underlay)",
      "Variação angular pseudo-aleatória entre grãos consecutivos (±15° a ±45°)"
    ],
    "howItWorks": [
      "1. O programador seleciona a área de fundo de uma paisagem (como uma praia de areia ou campo de trigo).",
      "2. Aplica o preenchimento de motivo 'Ponto Semente' ou 'Grão de Arroz'.",
      "3. Define a distância entre os grãos e o tamanho de cada pontinho.",
      "4. Na máquina, o bordado flui com extrema rapidez, criando uma textura delicada e macia sem deixar a peça dura."
    ],
    "mainTypes": [
      "Ponto Grão de Arroz Alinhado (Para texturas geométricas e fundos clássicos de alfaiataria)",
      "Ponto Semente Aleatório / Estocástico (Para areia, terra, rochas e efeitos botânicos)",
      "Ponto Semente com Fio Matizado / Multicolorido (Para fundos artísticos de patchwork e quilting)"
    ],
    "characteristics": [
      "Superfície extremamente leve, macia e flexível ao toque",
      "Velocidade de produção altíssima devido à baixa quantidade total de pontos",
      "Zero repuxamento ou enrugamento mesmo em tecidos delicados como cambraia e seda"
    ],
    "limitations": [
      "Não cobre manchas ou estampas fortes do tecido de fundo devido à sua natureza aberta",
      "Exige que a tensão da linha esteja bem regulada para que cada grão fique perfeitamente esticado"
    ],
    "numberingSystem": [
      "Comprimento do Ponto de Grão: 2.0 mm a 2.5 mm",
      "Espaçamento entre Linhas de Grãos: 3.0 mm a 4.5 mm",
      "Densidade de Cobertura: 20% a 30%"
    ],
    "advantages": [
      "✔ Economia gigantesca de linha e tempo de máquina",
      "✔ Toque incrivelmente suave, ideal para roupas de cama de bebê e vestidos leves",
      "✔ Visual artesanal vintage muito valorizado por clientes sofisticados"
    ],
    "commonErrors": [
      "❌ Usar ponto semente com grãos pequenos demais (menores que 1.2 mm), que somem dentro da trama do tecido",
      "❌ Tentar usar ponto semente para cobrir um tecido preto com linha branca esperando cobertura total",
      "❌ Usar linha de má qualidade que solta fiapos em pontos isolados"
    ],
    "voceSabia": "No bordado livre manual tradicional japonês (Sashiko), o ponto semente era usado há mais de 400 anos para reforçar tecidos de camponeses e criar padrões rústicos de colheita de arroz!",
    "curiosidadeTecnica": "Por ser um ponto de baixa densidade com conexões pontuais, o ponto semente praticamente não gera efeito de 'pull-push', tornando-o perfeito para ser bordado sem necessidade de compensação de repuxo adicional.",
    "dicaArtrelados": "Para fazer o miolo de girassóis e margaridas com aspecto realista: use ponto semente com linha marrom escura ou amarelo ouro sobre um fundo tatami ralo! Fica parecendo que a flor tem sementinhas de verdade em relevo!",
    "applications": [
      "Miolos de flores botânicas (girassóis, margaridas, anêmonas)",
      "Fundos de paisagens, praias de areia, solos e troncos texturizados",
      "Bordados em peças de bebê (mantas, fraldas e bodies com toque ultra suave)",
      "Quilting decorativo e acolchoamento artístico de colchas e almofadas"
    ],
    "troubleshootingTips": [
      "Se os grãos estão afundando no tecido felpudo, coloque uma folha de plástico filme hidrossolúvel por cima.",
      "Se os pontinhos parecem tortos ou frouxos, aumente ligeiramente a tensão da linha superior na máquina.",
      "Se o fundo ficou muito ralo, diminua o espaçamento entre grãos nas propriedades de preenchimento do software."
    ],
    "relatedTerms": [
      "Ponto de Motivo (Motif Fill)",
      "Preenchimento Texturizado",
      "Ponto Semente Manual",
      "Quilting Eletrônico",
      "Baixa Densidade"
    ],
    "tags": [
      "ponto-grao-arroz",
      "ponto-semente",
      "textura",
      "motivo",
      "quilting",
      "efeito-decorativo",
      "vintage"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "ROYAL SCHOOL OF NEEDLEWORK. Stitch Bank: Seed Stitch and Rice Texture. London: RSN, 2023. WILCOM INTERNATIONAL. Motif Fills and Textured Backgrounds. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "ROYAL SCHOOL OF NEEDLEWORK. Stitch Bank: Seed Stitch and Rice Texture. London: RSN, 2023.",
      "WILCOM INTERNATIONAL. Motif Fills and Textured Backgrounds. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Texturas Ralas e Pontos de Motivo Decorativo no Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie um círculo de 50 mm no seu programa de bordado. Aplique o preenchimento com o motivo 'Seed Stitch' (Ponto Semente) com espaçamento de 3.0 mm. Borde em um pedaço de linho cru com linha marrom clara. Toque a peça com os dedos e sinta a leveza e a textura requintada do ponto!",
    "quickSummary": "O ponto grão de arroz cria pontinhos delicados espalhados pelo tecido, imitando areia, sementinhas e texturas rústicas muito macias.",
    "beginnerExplanation": "Sabe quando você joga um punhado de grãos de arroz sobre a mesa e eles ficam espalhadinhos de um jeito bonito? Esse ponto faz exatamente isso com a linha: cria um fundo texturizado e fofinho sem deixar o tecido pesado ou duro!",
    "recommendedSettings": {
      "speedPPM": "800 a 900 PPM",
      "needleType": "75/11 Universal",
      "stabilizer": "Entretela Rasgável 50g",
      "threadTension": "110 a 120gf",
      "density": "Espaçamento de Motivo de 3.0 a 4.0 mm"
    }
  },
  {
    "id": "g-084-efeito-guipir-renda-autoportante-entretela-hidrossoluvel",
    "code": "G-084",
    "letter": "G",
    "term": "Efeito Guipir e Renda Autoportante em Entretela Hidrossolúvel (Guipure Free-Standing Lace Embroidery / FSL)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Das lendárias rendas de Guipure de Veneza e Flandres do século XVI, recriadas digitalmente com a invenção da entretela de álcool polivinílico (PVA) hidrossolúvel nos anos 1980.",
    "summary": "Técnica de bordado onde a matriz é costurada exclusivamente sobre entretela hidrossolúvel (sem tecido); ao lavar na água, a entretela desaparece e resta uma renda estruturada autoportante.",
    "definition": "O Efeito Guipir e Renda Autoportante (Free-Standing Lace - FSL / Guipure Embroidery) é uma das técnicas mais nobres e impressionantes do bordado computadorizado. A matriz é digitalizada com uma estrutura matemática de engenharia têxtil composta por uma grade de sustentação em rede (Mesh Grid), pontos de travamento entrelaçados e colunas de ponto cheio bordadas diretamente sobre duas camadas de entretela hidrossolúvel de alta gramatura (sem nenhum tecido por baixo). Após o término do bordado, a peça é imersa em água morna: a entretela se dissolve completamente, restando uma verdadeira escultura têxtil de renda rígida e autoportante.",
    "technicalDetails": "A integridade mecânica da renda depende da malha base estrutural (Trellis / Netting Underlay) com ângulo cruzado duplo (45° e 135°) e passo de 1.5 a 2.0 mm. Todos os pontos cheios e contornos decorativos DEVEM ancorar em pelo menos dois pontos de interseção da grade base; caso contrário, a renda se desmanchará ao ser lavada.",
    "construction": [
      "Grade de base estrutural cruzada dupla (Trellis Mesh Underlay a 45° e 135°)",
      "Pontos de ancoragem e nós de travamento nas pontas de cada pétala/haste",
      "Camada de cobertura em ponto cheio denso (Satin Cover Stitch a 0.35 mm)",
      "Entretela hidrossolúvel de filme espesso (80 mícrons) ou tecido solúvel em dobro",
      "Uso obrigatório de linha da mesma cor na agulha de cima e na bobina de baixo"
    ],
    "howItWorks": [
      "1. O operador prende no bastidor duas camadas de entretela hidrossolúvel bem esticadas como um tambor (sem tecido).",
      "2. Enche a bobina da lançadeira com a mesma linha de bordar colorida que está na agulha superior.",
      "3. A máquina borda primeiro a rede de sustentação invisível e depois os motivos florais de renda cheia.",
      "4. Ao retirar do bastidor, enxágua a peça em água morna corrente: a entretela derrete e sobra uma linda renda Guipir pura e firme."
    ],
    "mainTypes": [
      "Renda Guipir Plana (Para aplicações em decotes de vestidos de noiva, toalhas e barras)",
      "Renda 3D / Tridimensional (Para flores montadas em camadas, laços e brincos de bijuteria têxtil)",
      "Renda Richelieu Autoportante (Para centros de mesa vazados e toalhas de banquete)"
    ],
    "characteristics": [
      "Criação de rendas verdadeiras de alto luxo sem necessidade de tecido",
      "Peça idêntica na frente e no verso (acabamento dupla-face perfeito)",
      "Toque estruturado e firme após secagem natural"
    ],
    "limitations": [
      "Exige programação perfeita de nós de ancoragem (se errar, a renda desmancha na água)",
      "Consome mais linha porque a bobina precisa ser da mesma cor da linha superior"
    ],
    "numberingSystem": [
      "Espessura da Entretela Solúvel: 2 camadas de 40 a 80 mícrons (ou tecido PVA 60g)",
      "Passo da Grade Base: 1.5 mm a 2.0 mm",
      "Densidade de Ponto Cheio: 0.35 mm a 0.38 mm"
    ],
    "advantages": [
      "✔ Produção de rendas de noiva e acessórios de luxo com altíssimo valor comercial",
      "✔ Possibilidade de criar brincos, marcadores de página, flores 3D e enfeites de Natal",
      "✔ Encantamento garantido dos clientes que assistem ao processo da entretela sumir na água"
    ],
    "commonErrors": [
      "❌ Usar linha branca comum na bobina (a parte de trás da renda vai ficar feia e esbranquiçada)",
      "❌ Enxaguar demais na água e tirar todo o resíduo de goma da entretela (a renda fica mole como pano velho)",
      "❌ Usar apenas uma camada fina de plástico solúvel (o bastidor rasga durante a costura)"
    ],
    "voceSabia": "Para que a renda Guipir fique durinha e armada (como para fazer brincos ou enfeites de Natal), não lave a peça completamente! Deixe um restinho da entretela derretida na peça e coloque para secar em cima de um plástico: ela seca durinha e engomada como mágica!",
    "curiosidadeTecnica": "O termo 'Guipure' vem do francês antigo 'guiper', que significa 'enrolar um fio em volta de outro fio de sustentação', descrevendo a técnica renascentista de criar rendas pesadas e estruturadas.",
    "dicaArtrelados": "Ao bordar Guipir: enrole a bobina SEMPRE com a mesma linha de bordar colorida da parte de cima! E quando tirar da água, aperte suavemente entre duas toalhas de banho secas e deixe secar sobre uma folha de plástico plano. O acabamento fica digno de passarela de Paris!",
    "applications": [
      "Aplicações em vestidos de noiva, vestidos de festa e moda praia de luxo",
      "Bijuterias têxteis artesanais (brincos, colares e braceletes de renda)",
      "Enfeites de Natal tridimensionais (anjinhos, estrelas e sinos autoportantes)",
      "Barras e entremeios de toalhas de banho e toalhas de mesa nobres"
    ],
    "troubleshootingTips": [
      "Se a renda desmanchou quando você lavou na água, a matriz não tinha a grade base cruzada de sustentação conectada.",
      "Se a entretela rasgou no meio do bordado, adicione uma segunda camada de entretela solúvel ou reduza a velocidade da máquina para 600 PPM.",
      "Se a renda ficou muito mole após secar, passe um pouco de termolina leitosa ou spray de goma para tecido no verso."
    ],
    "relatedTerms": [
      "Renda FSL (Free-Standing Lace)",
      "Entretela Hidrossolúvel",
      "Grade de Sustentação (Mesh Underlay)",
      "Renda Richelieu",
      "Bobina Colorida"
    ],
    "tags": [
      "guipir",
      "fsl",
      "renda-autoportante",
      "hidrossoluvel",
      "alta-costura",
      "noiva",
      "joia-textil"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Free Standing Lace (FSL) Digitizing Masterclass. Sydney: Wilcom, 2023. ROYAL SCHOOL OF NEEDLEWORK. Lace Making and Guipure Techniques. London: RSN, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Free Standing Lace (FSL) Digitizing Masterclass. Sydney: Wilcom, 2023.",
      "ROYAL SCHOOL OF NEEDLEWORK. Lace Making and Guipure Techniques. London: RSN, 2022.",
      "ARTRELADOS. Engenharia de Rendas Autoportantes e Guipir no Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Coloque 2 folhas de entretela hidrossolúvel no bastidor. Carregue uma matriz de brinco ou anjinho em renda FSL. Encha a bobina com a mesma linha dourada da agulha. Borde a peça, retire do bastidor e mergulhe em uma tigela com água morna por apenas 30 segundos. Deixe secar sobre um vidro plano e admire sua renda 100% pronta e firme!",
    "quickSummary": "O Guipir é o bordado feito direto na entretela que derrete na água, criando rendas de noiva e brincos maravilhosos sem nenhum tecido por baixo.",
    "beginnerExplanation": "Imagine bordar um desenho no ar! Você coloca uma entretela especial no bastidor que parece um plástico, borda a renda toda e depois joga na água: a entretela derrete como açúcar e sobra apenas a renda perfeita, linda e durinha nas suas mãos!",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM",
      "needleType": "75/11 Universal ou Microtex",
      "stabilizer": "2 Camadas de Entretela Hidrossolúvel (Filme PVA 80 mícrons ou Tecido Solúvel)",
      "threadTension": "100 a 110gf com Bobina na mesma cor",
      "density": "0.36 mm com Grade Cruzada de 1.8 mm"
    }
  },
  {
    "id": "g-085-gola-bordada-estruturada-aplique-colarinho",
    "code": "G-085",
    "letter": "G",
    "term": "Gola Bordada Estruturada e Aplique em Colarinho (Embroidered Structured Collar & Neckline Border)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Da alfaiataria clássica e da indumentária vitoriana europeia, aperfeiçoada com as técnicas de montagem de matrizes espelhadas para golas anatômicas.",
    "summary": "Técnica de posicionamento e digitalização anatômica de bordados simétricos em pontas de gola, colarinhos sociais e decotes femininos estruturados.",
    "definition": "A Gola Bordada Estruturada e Aplique em Colarinho (Structured Collar Embroidery & Symmetrical Neckline Appliqué) é o método técnico de projeto e execução de bordados em partes nobres da camisaria e do vestuário feminino e infantil. Como as golas possuem entretelas rígidas internas de alfaiataria e ângulos côncavos/convexos delicados, a matriz deve ser digitalizada com compensações simétricas espelhadas (Lado Esquerdo e Direito rigorosamente idênticos), linhas de marcação e gabaritos de encaixe para garantir que os motivos caiam exatamente a 5 mm das pontas da gola sem deformar o caimento da peça no corpo.",
    "technicalDetails": "A digitalização requer o uso de linhas de referência angular de 35° a 45° nas pontas do colarinho para acompanhar a linha de dobra da entretela termocolante de camisaria. Os pontos cheios nas extremidades devem receber arremates reforçados (Tie-Off) e alívio de densidade na junção das costuras de fechamento da gola.",
    "construction": [
      "Par de matrizes simétricas espelhadas (Left Collar & Right Collar)",
      "Linha de alinhamento com a costura externa da gola (Placement Guide)",
      "Compensação de densidade para entretelas rígidas de camisaria (0.42 mm)",
      "Reforço de coluna centrado para evitar alargamento da ponta da gola",
      "Gabarito de posicionamento em papel vegetal ou impresso 1:1"
    ],
    "howItWorks": [
      "1. O modelista corta as folhas da gola da camisa ainda abertas (antes de fechar e costurar a peça).",
      "2. O operador posiciona a ponta da gola no bastidor usando entretela rasgável e a matriz de teste.",
      "3. A máquina borda os ramos florais ou monogramas simétricos com precisão milimétrica.",
      "4. Após o bordado, a costureira une as partes da gola, vira e passa a ferro, resultando em uma camisa de alta costura impecável."
    ],
    "mainTypes": [
      "Bordado em Ponta de Gola Social / Camisaria (Monogramas discretos e arabescos masculinos/femininos)",
      "Gola Peter Pan / Gola Boneca Inteira Bordada (Para vestidos infantis de luxo e moda vintage)",
      "Gola Removível com Renda e Pérolas (Acessório de moda independente para sobreposição)"
    ],
    "characteristics": [
      "Simetria visual absoluta entre o lado esquerdo e direito do colarinho",
      "Preservação da rigidez e do caimento perfeito da gola de alfaiataria",
      "Valorização extrema da peça de vestuário no mercado de moda"
    ],
    "limitations": [
      "Bordar golas já fechadas e prontas é muito difícil devido à falta de espaço no bastidor; deve-se preferir bordar a peça cortada aberta",
      "Densidades excessivas deixam a ponta da gola grossa demais, dificultando o desvirar da costura"
    ],
    "numberingSystem": [
      "Distância Segura da Borda da Gola: 5.0 mm a 8.0 mm",
      "Densidade de Ponto Cheio: 0.40 mm a 0.42 mm",
      "Espessura da Agulha Recomendada: 70/10 ou 75/11 Ponta Fina (Sharp)"
    ],
    "advantages": [
      "✔ Transforma uma camisa comum em uma peça exclusiva de boutique",
      "✔ Encaixe anatômico perfeito que acompanha as linhas do pescoço e dos ombros",
      "✔ Alto apelo comercial para moda infantil nobre e moda evangélica"
    ],
    "commonErrors": [
      "❌ Bordar as duas pontas da gola com a mesma matriz sem espelhar (um lado fica de cabeça para baixo)",
      "❌ Colocar bordado muito pesado que faz a ponta da gola ficar torta ou pesada caindo",
      "❌ Bordar em cima da margem de costura de 1 cm que a costureira precisa para fechar a gola"
    ],
    "voceSabia": "Na camisaria sob medida masculina tradicional da Savile Row em Londres, bordar as iniciais do cliente no lado interno ou na ponta da gola é sinal máximo de distinção e sofisticação desde o século XIX!",
    "curiosidadeTecnica": "Para bordar golas já prontas sem descosturar, utilizam-se bastidores magnéticos ou bastidores de gola tipo clamp (Collar Frame), que prendem a peça sem marcar o tecido engomado.",
    "dicaArtrelados": "Borde as golas sempre com o tecido cortado antes da costura de fechamento! E imprima o desenho em folha de papel na escala 1:1, recorte e coloque em cima da gola para conferir no espelho se a posição está exatamente igual dos dois lados!",
    "applications": [
      "Camisas sociais femininas e masculinas sob medida",
      "Vestidos infantis de festa com gola boneca bordada com mini florzinhas",
      "Uniformes executivos e corporativos com detalhes discretos de colarinho",
      "Golas falsas e destacáveis de renda e veludo para acessórios de inverno"
    ],
    "troubleshootingTips": [
      "Se a ponta da gola ficou torta e armada para cima, reduza a densidade do bordado para 0.45 mm.",
      "Se os desenhos dos dois lados ficaram em alturas diferentes, use gabarito impresso com fita métrica para marcar o centro com giz de alfaiate.",
      "Se o tecido repuxou na ponta da gola, use agulha ponta fina 70/10 para furar suavemente a entretela da camisa."
    ],
    "relatedTerms": [
      "Espelhamento de Matriz",
      "Gabarito de Posicionamento",
      "Camisaria Sob Medida",
      "Agulha Ponta Fina (Sharp)",
      "Compensação de Gola"
    ],
    "tags": [
      "gola-bordada",
      "colarinho",
      "camisaria",
      "espelhamento",
      "alfaiataria",
      "moda-infantil",
      "elegancia"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "SAVILE ROW BESPOKE ASSOCIATION. Collar Construction and Embroidery Guidelines. London: SRBA, 2023. WILCOM INTERNATIONAL. Symmetrical Placement and Garment Pattern Alignment. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "SAVILE ROW BESPOKE ASSOCIATION. Collar Construction and Embroidery Guidelines. London: SRBA, 2023.",
      "WILCOM INTERNATIONAL. Symmetrical Placement and Garment Pattern Alignment. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Técnicas de Posicionamento e Bordado Anatômico em Camisaria Fina. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie um ramo floral pequeno de 30 mm no software. Duplique o objeto e aplique o espelhamento horizontal (Flip Horizontal). Imprima os dois lados em escala real, posicione sobre uma gola de camisa e marque os centros com giz. Borde em um retalho com entretela de camisa e veja o alinhamento perfeito!",
    "quickSummary": "A gola bordada coloca desenhos simétricos e delicados nas pontas de colarinhos e vestidos com elegância de alta costura.",
    "beginnerExplanation": "Sabe aquelas camisas sociais chiques ou vestidos de menina com florzinhas delicadas exatamente iguais nas duas pontas da gola? É essa técnica que faz os dois lados ficarem perfeitamente espelhados e alinhados como um espelho!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "70/10 ou 75/11 Ponta Fina (Sharp / Microtex)",
      "stabilizer": "Entretela Rasgável Fina 40g (o tecido já tem entretela de colarinho)",
      "threadTension": "105 a 115gf",
      "density": "0.40 mm a 0.42 mm"
    }
  },
  {
    "id": "g-086-ponto-grilhao-ponto-corrente-eletronico-cadeia",
    "code": "G-086",
    "letter": "G",
    "term": "Ponto Grilhão / Ponto Corrente Eletrônico em Cadeia (Chain Stitch & Interlooped Chain Effect)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Das tradicionais máquinas mecânicas Cornely e Chenille do século XIX na França, adaptadas para simulação computadorizada em máquinas de bordar padrão.",
    "summary": "Ponto decorativo em formato de elos de corrente entrelaçados (grilhões), conferindo relevo clássico, aspecto artesanal e excelente elasticidade.",
    "definition": "O Ponto Grilhão ou Ponto Corrente Eletrônico em Cadeia (Computerized Chain Stitch & Interlooped Link Motif) é o ponto decorativo linear cujos laços de linha se entrelaçam sucessivamente formando uma sequência visual idêntica a uma corrente ou grilhão de ferro. Em máquinas industriais convencionais (com lançadeira e agulha padrão), o efeito é gerado por uma rotina matemática de micro-laçadas triangulares sobrepostas com recuo (Backstitch Loop Pattern), conferindo um relevo arredondado muito superior ao ponto cheio comum, sendo o ponto favorito para contornos de motivos rústicos, tipografias estilo retrô e acabamentos de jeans e jaquetas college.",
    "technicalDetails": "A fórmula do motivo de elo programa um avanço de 2.5 mm com recuo em arco de 1.2 mm e abertura lateral de 1.0 mm em cada ciclo. Essa geometria cria um elo vazado tridimensional com espessura aparente de 1.5 a 2.0 mm usando uma única passagem de linha, mantendo alta flexibilidade mecânica longitudinal para acompanhar a elasticidade do tecido sem romper.",
    "construction": [
      "Padrão de motivo de elo de corrente (Chain Loop Motif)",
      "Comprimento do elo ajustável (2.0 mm a 4.0 mm)",
      "Largura do elo programável (1.0 mm a 2.5 mm)",
      "Arremates de travamento nos nós de início e fim",
      "Algoritmo de curvatura suave sem esmagamento dos elos nas esquinas"
    ],
    "howItWorks": [
      "1. O programador desenha a linha de contorno de um desenho vintage ou o traçado de uma letra cursiva.",
      "2. Seleciona o tipo de ponto como 'Ponto de Motivo: Corrente / Grilhão'.",
      "3. Ajusta o tamanho dos elos para ficarem proporcionais à espessura desejada.",
      "4. Na máquina de bordar, a agulha costura os elos contínuos, criando um contorno volumoso, macio e com cara de feito à mão."
    ],
    "mainTypes": [
      "Ponto Grilhão Simples (Para contornos finos de flores e arabescos rústicos)",
      "Ponto Corrente Duplo / Chenille (Para letras de jaquetas colegiais e flâmulas vintage)",
      "Preenchimento em Ponto Corrente Concéntrico (Para preencher áreas grandes com textura de tapete)"
    ],
    "characteristics": [
      "Aspecto artesanal vintage inconfundível com relevo arredondado",
      "Alta elasticidade natural: acompanha tecidos de malha e moletom sem arrebentar",
      "Consumo moderado de linha com grande impacto visual de textura"
    ],
    "limitations": [
      "Curvas com raio menor que 2 mm podem fazer os elos se sobreporem excessivamente",
      "Exige linha de boa qualidade e agulha adequada para que os laços fiquem bem abertos"
    ],
    "numberingSystem": [
      "Comprimento Padrão do Elo: 2.5 mm a 3.0 mm",
      "Largura do Elo: 1.5 mm a 2.0 mm",
      "Velocidade Máquina Recomendada: 700 a 850 PPM"
    ],
    "advantages": [
      "✔ Cria um efeito 'feito à mão' irresistível que encanta apaixonados por artesanato",
      "✔ Perfeito para bordar em moletom, jeans e malhas sem repuxar o tecido",
      "✔ Excelente para nomes cursivos e assinaturas caligráficas com personalidade"
    ],
    "commonErrors": [
      "❌ Fazer os elos minúsculos (menores que 1.5 mm), que viram uma linha grossa e perdem o formato de corrente",
      "❌ Usar tensão de linha muito apertada que fecha e deforma os elos",
      "❌ Programar curvas muito fechadas sem suavizar os nós vetoriais"
    ],
    "voceSabia": "As famosas jaquetas colegiais americanas (Varsity Jackets) dos anos 1950 usavam o ponto corrente para bordar as letras gigantes das universidades no peito e nas costas!",
    "curiosidadeTecnica": "Embora existam máquinas especiais exclusivas de ponto corrente tipo Cornely que usam agulhas em forma de gancho (Hook Needle) e trabalham sem bobina inferior, os softwares modernos conseguem recriar 98% desse visual na sua máquina comum!",
    "dicaArtrelados": "Para bordar nomes em bodies de bebê com aquele charme de bordado de vovó: use ponto corrente/grilhão com linha de algodão ou poliéster fosco! O resultado é um bordado super macio, que não pinica a pele e parece feito à mão com carinho!",
    "applications": [
      "Letras vintage e monogramas em jaquetas de couro, jeans e moletom",
      "Contornos decorativos em toalhas de mesa rústicas, jogos americanos e panos de prato",
      "Nomes e caligrafias infantis em enxovais estilo montessoriano e boho chic",
      "Flâmulas decorativas de parede e estandartes artísticos"
    ],
    "troubleshootingTips": [
      "Se os elos estão ficando fechados e magros, afrouxe ligeiramente a tensão da linha superior na máquina.",
      "Se os elos estão se amontoando nas curvas, aumente o raio da curva no software de programação.",
      "Se o ponto parece sumir no tecido felpudo, use uma folha de filme hidrossolúvel no topo."
    ],
    "relatedTerms": [
      "Ponto Corrente (Chain Stitch)",
      "Ponto Cornely",
      "Efeito Chenille",
      "Ponto de Motivo",
      "Bordado Vintage"
    ],
    "tags": [
      "ponto-grilhao",
      "ponto-corrente",
      "chain-stitch",
      "vintage",
      "feito-a-mao",
      "motivo",
      "retro"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "ROYAL SCHOOL OF NEEDLEWORK. Traditional Chain Stitch and Tambour Embroidery. London: RSN, 2023. WILCOM INTERNATIONAL. Chain Stitch Simulation and Motif Outline Engine. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "ROYAL SCHOOL OF NEEDLEWORK. Traditional Chain Stitch and Tambour Embroidery. London: RSN, 2023.",
      "WILCOM INTERNATIONAL. Chain Stitch Simulation and Motif Outline Engine. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Simulação Computadorizada de Pontos Históricos e Cornely no Bordado Moderno. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize a palavra 'Amor' em caligrafia cursiva no seu software. Em vez de usar ponto cheio ou ponto corrido simples, aplique o 'Ponto de Motivo: Corrente' com elos de 2.5 mm de comprimento. Borde em um pedaço de tecido jeans ou moletom. Veja como as letras ganham um relevo arredondado lindo e vintage!",
    "quickSummary": "O ponto grilhão cria uma corrente de elos entrelaçados contínuos com visual rústico, relevo arredondado e charme de feito à mão.",
    "beginnerExplanation": "Sabe quando você faz uma correntinha de crochê com os dedos? O ponto grilhão faz essa correntinha linda e gordinha com a linha na máquina de bordar, deixando os nomes e contornos com um estilo antigo e artesanal muito fofo!",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 ou 80/12 Universal",
      "stabilizer": "Entretela Rasgável 50g ou Malha de Recorte",
      "threadTension": "95 a 105gf (Tensão ligeiramente mais suave)",
      "density": "Elos de 2.5 mm a 3.0 mm de comprimento"
    }
  },
  {
    "id": "g-087-efeito-granito-texturizacao-irregular-fundos",
    "code": "G-087",
    "letter": "G",
    "term": "Efeito Granito e Texturização Irregular para Fundos (Granite Texture Effect & Random Stippling Fill)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Das técnicas de micro-quilting pontilhado ('Stippling') e texturas minerais de rochas ornamentais transpostas para algoritmos de ruído fractal de bordado.",
    "summary": "Padrão de preenchimento complexo que combina micro-pontos tatami com comprimentos e deslocamentos pseudo-aleatórios, criando uma textura fosca de pedra natural.",
    "definition": "O Efeito Granito e Texturização Irregular para Fundos (Granite Texture Pattern & Fractal Micro-Stippling) é um estilo avançado de preenchimento tatami não-uniforme. Em vez de alinhar os pontos em fileiras geométricas regulares (que criam o clássico brilho acetinado liso), o algoritmo distribui as picadas de agulha com variações aleatórias controladas de comprimento de ponto (de 1.5 a 4.5 mm) e deslocamento de fase estocástico. Isso quebra a reflexão contínua da luz, gerando uma superfície mate, porosa e com aspecto táctil de rocha, mármore rústico, granito ou casca de árvore antiga.",
    "technicalDetails": "O motor de geração de pontos aplica uma função de ruído de Perlin ou ruído simplex N(x,y) acoplada às coordenadas de grade: P(i) = P_base(i) + [δ_x · N(x_i, y_i), δ_y · N(x_i, y_i)], com perturbação máxima δ = 0.8 mm. A distribuição anula o paralelismo de picada, eliminando o risco de 'linhas de corte' no tecido.",
    "construction": [
      "Gerador de ruído estocástico de pontos (Perlin / Fractal Stitch Jitter)",
      "Variação dinâmica de comprimento de ponto (1.5 mm a 4.5 mm)",
      "Fator de dispersão de picada ajustável (Jitter / Roughness de 0.2 a 0.8 mm)",
      "Densidade média de preenchimento equilibrada (0.45 mm)",
      "Reforço de esteira perpendicular leve"
    ],
    "howItWorks": [
      "1. O programador digitaliza uma área de brasão, tronco de árvore, muralha de castelo ou fundo de moldura.",
      "2. Aplica o preenchimento Tatami e seleciona o padrão 'Textura Granito / Efeito Pedra'.",
      "3. Ajusta o nível de rugosidade para médio e define o comprimento variável dos pontos.",
      "4. Na máquina, o bordado cria uma superfície fosca, robusta e rica em detalhes minerais sem nenhum reflexo liso."
    ],
    "mainTypes": [
      "Granito Fino / Poroso (Para fundos discretos de brasões, medalhas e emblemas militares)",
      "Granito Rústico / Rocha Viva (Para cascas de árvores, montanhas, dinossauros e couros)",
      "Granito Bicolor com Efeito Mármore (Sobreposição de duas cores contrastantes com densidade 0.8 mm)"
    ],
    "characteristics": [
      "Superfície fosca elegante sem brilho excessivo que destaca outros elementos vizinhos",
      "Disfarça completamente pequenas imperfeições de trama do tecido",
      "Elevadíssima estabilidade mecânica sem repuxamento direcional"
    ],
    "limitations": [
      "Não é indicado para áreas muito pequenas (menores que 15 mm), onde a textura não tem espaço para se desenvolver",
      "Consome cerca de 10% a mais de pontos do que um tatami padrão liso"
    ],
    "numberingSystem": [
      "Fator de Rugosidade (Jitter): 0.3 mm a 0.6 mm",
      "Faixa de Comprimento de Ponto: 1.8 mm a 4.2 mm",
      "Densidade Padrão: 0.42 mm a 0.48 mm"
    ],
    "advantages": [
      "✔ Criação de fundos majestosos que fazem elementos em ponto cheio brilhante 'saltarem' para fora",
      "✔ Excelente para temas masculinos, militares, medievais e botânicos",
      "✔ Zero marcas de emenda visíveis no preenchimento de grandes superfícies"
    ],
    "commonErrors": [
      "❌ Usar em logotipos corporativos modernos que exigem superfícies 100% lisas e espelhadas",
      "❌ Colocar o ruído muito alto (acima de 1.0 mm), gerando pontos soltos que podem desfiar",
      "❌ Esquecer de usar agulha ponta bola em malhas ao aplicar preenchimentos densos"
    ],
    "voceSabia": "Muitas marcas de luxo usam o efeito granito em jaquetas de couro e uniformes táticos de alta resistência porque a superfície fosca e texturizada não reflete a luz do sol e confere aspecto de durabilidade extrema!",
    "curiosidadeTecnica": "O algoritmo de ruído usado para o efeito granito no software é o mesmo algoritmo matemático desenvolvido por Ken Perlin para os efeitos especiais do filme 'Tron' da Disney em 1982, pelo qual ele ganhou o Oscar de Realização Técnica!",
    "dicaArtrelados": "Quando for bordar um brasão com letras douradas em ponto cheio: faça o fundo do escudo com efeito granito preto ou marrom escuro! As letras douradas vão parecer feitas de ouro de verdade flutuando sobre uma placa de mármore nobre!",
    "applications": [
      "Escudos, brasões heráldicos e emblemas de clubes de tiro ou caça",
      "Troncos de árvores, cascos de tartarugas e peles de animais rústicos",
      "Painéis decorativos de jaquetas de motoqueiro e coletes de couro",
      "Fundos contrastantes para destacar monogramas e textos finos"
    ],
    "troubleshootingTips": [
      "Se a textura pareceu muito lisa e sem graça, aumente o fator de aleatoriedade (Jitter) no software para 0.5 mm.",
      "Se os pontos estão enroscando, reduza o comprimento máximo de ponto para 3.8 mm.",
      "Se o tecido ficou pesado demais, aumente o espaçamento de densidade para 0.48 mm."
    ],
    "relatedTerms": [
      "Tatami Texturizado",
      "Ruído de Perlin",
      "Ponto Fosco",
      "Efeito Mármore",
      "Contraste de Superfície"
    ],
    "tags": [
      "efeito-granito",
      "textura",
      "tatami-fosco",
      "efeito-pedra",
      "brasoes",
      "programacao",
      "wilcom"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Custom Tatami Patterns and Random Stitch Jitter. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Embossed and Mineral Texture Simulation. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Custom Tatami Patterns and Random Stitch Jitter. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Advanced Embossed and Mineral Texture Simulation. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Texturas Minerais e Algoritmos de Ruído Fractal no Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie um escudo de 60 mm no seu programa. No fundo, aplique um Tatami com efeito Granito (Random Jitter). No centro, coloque a letra inicial do seu sobrenome em ponto cheio acetinado com linha metálica dourada. Borde e observe o contraste espetacular entre o fundo fosco e o brilho do monograma!",
    "quickSummary": "O efeito granito cria um fundo texturizado e fosco como pedra ou mármore, ideal para brasões e desenhos rústicos.",
    "beginnerExplanation": "Em vez de deixar o bordado liso como cetim, o efeito granito faz os pontos parecerem uma textura de pedra nobre, casca de árvore ou mármore rústico. Isso faz os outros detalhes brilhantes que estão em cima se destacarem muito mais!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Universal",
      "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
      "threadTension": "105 a 115gf",
      "density": "0.45 mm com Jitter de 0.4 mm"
    }
  }
];

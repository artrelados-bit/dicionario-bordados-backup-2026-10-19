"""
Script gerador para os verbetes G-075 a G-087 do DIBE Artrelados.
"""
import json

def get_verbetes_g13():
    return [
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
        "tags": ["gradiente-densidade", "meio-tom", "degrade", "color-blending", "programacao", "wilcom", "realismo"],
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
        "tags": ["geracao-nos", "bezier", "simplificacao", "curvas", "programacao", "wilcom", "otimizacao"],
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
        "tags": ["grupo-objetos", "agrupamento", "organizacao", "arvore-objetos", "programacao", "wilcom", "camadas"],
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
        "tags": ["ramificacao", "branching", "caminho-sem-cortes", "arabescos", "otimizacao", "wilcom", "produtividade"],
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
        "tags": ["grau-inclinacao", "direcao-angular", "tatami", "angulos", "reflexo-luz", "programacao", "wilcom"],
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
        "tags": ["monograma", "letras-monogramaticas", "enxoval-luxo", "casamento", "tipografia", "wilcom", "alta-costura"],
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
      }
    ]

# Executa e exporta
verbetes = get_verbetes_g13()
with open('/src/data/verbetesLetterG13.ts', 'w', encoding='utf-8') as f:
    f.write('import { Verbete } from "../types";\n\n')
    f.write('export const VERBETES_LETTER_G_PART13: Verbete[] = ')
    f.write(json.dumps(verbetes, ensure_ascii=False, indent=2))
    f.write(';\n')

print(f"G13 saved with {len(verbetes)} verbetes (G-075 to G-080)!")
